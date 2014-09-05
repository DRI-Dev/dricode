// copyright (c) 2014 DRI
// to do make functions return objects, not strings
//
//     http://docs.mongodb.org/manual/reference/command/mapReduce/
//     http://docs.mongodb.org/manual/reference/command/mapReduce/#mapreduce-out-cmd
//
//     INPUT
//     results: can send in the database here
//     queryresult: can send in the database here
//     mapreduce: <collection> name or send in command.collection or defaults
//     db: database name or send in command.databasetable or defaults
//
//     mapfn: <function>, or string to fn
//     reducefn: <function> or string to fn
//     query: <document>,
//     sort: <document>,
//     limit: <number>,
//     finalize: <function>, // function(key, reducedValue) {...return modifiedObject;}
//     send one of these:
//          reduce: <output collection>>
//          merge:  <output collection>>
//          replace:  <output collection>>
//          nothing: equivalent to : out: <output>,  // { inline: 1 } ** INLINE **
//
//     shared:
//     nonatomic:
//     scope: <document>,/
//     jsMode: <boolean>,
//     verbose: <boolean>
//
//
//     OUTPUT
//         {
//             "results" : [
//                {
//                   "_id" : <key>,
//                   "value" :<reduced or finalizedValue for key>
//                },
//                ...
//             ],
//             "timeMillis" : <int>,
//             "counts" : {
//                "input" : <int>,
//                "emit" : <int>,
//                "reduce" : <int>,
//                "output" : <int>
//             },
//             "ok" : <int>
//         }
//
// mapReduce.results
// For output sent to a collection, this value is either:
//         • a string for the collection name if out did not specify the database name, or
//         • a document with both db and collection fields if out specified both a database and collection name.
//
// mapReduce.results
// For output written inline, an array of resulting documents. Each resulting document contains two fields:
//         • _id field contains the key value,
//         • value field contains the reduced or finalized value for the associated key.

// mapReduce.timeMillis
// The command execution time in milliseconds.

// mapReduce.counts
// Various count statistics from the mapReduce command.

// mapReduce.counts.input
// The number of documents the mapReduce command called the map function.

// mapReduce.counts.emit
// The number of times the mapReduce command called the emit function.

// mapReduce.counts.reduce
// The number of times the mapReduce command called the reduce function.

// mapReduce.counts.output
// The number of output values produced.

// mapReduce.ok
// A value of 1 indicates the mapReduce command ran successfully. A value of 0 indicates an error.

exports.mapreduce = mapreduce = function mapreduce(inparameters, callback) {
    // mapreducemongo should receive: map, reduce, query, output, command into query

    var p = {};
    extend(true, p, inparameters);
    proxyprinttodiv('mapreduce p', p, 21,true, true);
    var mapfn = p.mapfn;
    var reducefn = p.reducefn;
    delete p.mapfn;
    delete p.reducefn;

    // // is it a string pointing to a real fn?  get copy of fn
    // if (!(mapfn instanceof Function) && window[mapfn]) {mapfn = window[mapfn]};
    // if (!(reducefn instanceof Function) && window[reducefn]) {reducefn = window[reducefn]};


    window = (typeof window == "undefined" ? global : window);
    if (window[mapfn]) {mapfn=window[mapfn]};
    if (window[reducefn]) {reducefn=window[reducefn]};
    if (mapfn instanceof Function) {mapfn=mapfn.toString()};
    if (reducefn instanceof Function) {reducefn=reducefn.toString()};

    proxyprinttodiv('mapreduce mapfn II', mapfn, 21,true, true);
    proxyprinttodiv('mapreduce reducefn II', reducefn, 21,true, true);

    if (p.results) {p.queryresult = p.results; delete p.results}

    if (config.configuration.environment!=="local" && !p.command.queryresult) // if sent in database then like local
    {
        // is it a fn?  convert it to a string



        p.command = p.command || {};
        p.command.databasetable = p.db || p.command.databasetable || config.configuration.d.default.databasetable;
        p.command.collection = p.mapreduce ||  p.command.collection || config.configuration.d.default.collection;
        p.command.keycollection = p.command.collection+'key';
        p.mongorawquery = p.mongorawquery || p.query || {"$or" : [{"_id": {"$exists": true}}, {"wid": {"$exists": true}}]};
        // if p.queryresult then save the collection so mapreduceserver can get it
        // mapreduceserver also shoudl be able to process p.query
        mapreduceserver(mapfn, reducefn, p, callback);
		proxyprinttodiv('mapreduce going to server now', 'server',28);
    }
    else 
    {
        if (!p.queryresult) // if queryresult not sent in then go process p.mongorawquery
        {
            var temp={};
            temp.command = p.command || {};
            temp.command.databasetable = p.db || p.command.databasetable || config.configuration.d.default.databasetable;
            temp.command.collection = p.mapreduce ||  p.command.collection || config.configuration.d.default.collection;
            temp.command.keycollection = temp.command.collection+'key';
            temp.mongorawquery = p.mongorawquery || p.query || {"$or" : [{"_id": {"$exists": true}}, {"wid": {"$exists": true}}]};
            proxyprinttodiv('mapreduce before querywid', temp, 21,true, true);
            querywidmaster(temp, function (err, res) 
            {
                proxyprinttodiv('mapreduce after query', res, 21,true, true);
                p.queryresult = res.queryresult;
                mapreducelocal(mapfn, reducefn, p, callback);
            })
        }
        else // if queryresult sent in
        {
            mapreducelocal(mapfn, reducefn, p, callback);
        }
    }
}



// function functionName(fun) {
//   var ret = fun.toString();
//   ret = ret.substr('function '.length);
//   ret = ret.substr(0, ret.indexOf('('));
//   return ret;
// }

    // through this. probably possible to create unique intance of this
    // this function should not exist server side
    var globalresultobject = {};
    exports.globalresultobject = {};
    exports.emit = emit = 
    function emit(k, v)
    {
        proxyprinttodiv('mapreduce emit k', k, 21,true, true);
        proxyprinttodiv('mapreduce emit v', v, 21,true, true);
        if (!globalresultobject[k]) {globalresultobject[k] = []};
        globalresultobject[k].push(v);
    }


function mapreducelocal(mapfn, reducefn, p, cb)
{
 

    proxyprinttodiv('mapreduce mapfn', mapfn, 21,true, true);
    proxyprinttodiv('mapreduce reducefn', reducefn, 21,true, true);
    proxyprinttodiv('mapreduce p', p, 21,true, true);
    // is it a string pointing to a real fn?  get copy of fn
    //if (!(mapfn instanceof Function) && window[mapfn]) {mapfn = window[mapfn]};
    //if (!(reducefn instanceof Function) && window[reducefn]) {reducefn = window[reducefn]};
    

    var functionname = mapfn.substr('function '.length);
    functionname = functionname.substr(0, functionname.indexOf('('));
    proxyprinttodiv('mapreduce functionname', functionname, 21,true, true);
    eval(mapfn);
        
    globalresultobject = {};
    for (var eachitem in p.queryresult) // example map: function () {emit(this.gender, 1);};
    {
        proxyprinttodiv('mapreduce p.queryresult[eachitem]', p.queryresult[eachitem], 21,true, true);
        //proxyprinttodiv('mapreduce p.queryresult[eachitem]', "("+mapfn + ".()apply(" + JSON.stringify(p.queryresult[eachitem]) + ")", 21,true, true);
        //eval("("+mapfn + "(" + JSON.stringify(p.queryresult[eachitem]) + "))");
        //var m = eval ("new function ("+mapfn + "(" + JSON.stringify(p.queryresult[eachitem]) + "))");

        //mapfn.apply(p.queryresult[eachitem]);

        //var newfn = eval("mapfn" + return c )

        window[functionname].apply(p.queryresult[eachitem]);
    } 
    // queryresultobject is global and should be {wid:[], wid:[], wid:[]}
    proxyprinttodiv('mapreduce globalresultobject I', globalresultobject, 21,true, true);

    // reduce step
    var outlist =[];
    var functionname = reducefn.substr('function '.length);
    functionname = functionname.substr(0, functionname.indexOf('('));
    proxyprinttodiv('mapreduce functionname reduce', functionname, 21,true, true);

    eval(mapfn);
    for (var eachitem in globalresultobject) // example reduce: function(gender, count){return Array.sum(count);};
    {
            var temp={};
            temp["_id"]=eachitem; 
            temp["wid"]=eachitem; // set values that are unique to our system -- maybe take out since cannot be done on server
            temp["metadata"]={};
            temp["metadata"]["method"]="createdcollection"
            temp.metadata.date = new Date();
            //temp["value"] = reducefn(eachitem, globalresultobject[eachitem]);
            temp["value"] = window[functionname](eachitem, globalresultobject[eachitem]);
            //temp["value"] = eval(reducefn)(eachitem, globalresultobject[eachitem]);
            outlist.push(temp);
    }
    // out should be: [{_id:, value:},{},{}]
    proxyprinttodiv('mapreduce after reduce outlist', outlist, 21,true, true);

    if (p.sort) // sort input based on eg {dim0: 1} +1 ascending
    {
        // dynamicsort in utils -- may need to be changed
        var sort = {};
        sort.value = p.sort;
        outlist.sort(dynamicsortmultiple(sort));
    }
    proxyprinttodiv('mapreduce after sort outlist', outlist, 21,true, true);
    if (!p.limit) {p.limit = outlist.length}
    // p.limit specifies a maximum number of documents to return from the collection.
    outlist=outlist.slice(0,p.limit)
    proxyprinttodiv('mapreduce after limit outlist', outlist, 21,true, true);

    // because of "value" needs to be rewritten:
    if (p.finalize) // Optional. FN Follows the reduce method and modifies the output
    {
        if (!(p.finalize instanceof Function)) {p.finalize = window[reducefn]};
        for (var eachitem in outlist)
        {
            outlist[eachitem] = p.finalize(outlist[eachitem]);
        }  
    }

    if (p.scope) {} //Optional. Specifies global variables that are accessible in the map, reduce and finalize functions.
    if (p.jsmode) {} //Optional. Specifies whether to convert intermediate data into BSON format between the execution of the map and reduce functions. Defaults to false.
    if (p.verbose) {} // Optional. Specifies whether to include the timing information in the result information. The verbose defaults to true to include the timing information.

    var command={};
    if (!p.out) // set up collectionmethod, collection, databasetable, etc based on different parameters
    {   //"replace":"",//"merge":"",//"reduce":"",//"db":"",//"sharded":"",//"nonatomic":"",
        p.out={};
        if (p.merge)
        {                                              // *** warning whatever collection is listed below will be overritten ****
            p.out.merge=p.merge || config.configuration.d.defaultoutputcollection;
            command.collectionmethod = "merge";
            command.collection = p.out.merge;
        }
        else if (p.reduce)
        {                                            // *** warning whatever collection is listed below will be overritten ****
            p.out.reduce=p.reduce || config.configuration.d.defaultoutputcollection;
            command.collectionmethod = "reduce";
            command.collection = p.out.reduce;
        }
        else if (p.replace)
        {                                              // *** warning whatever collection is listed below will be overritten ****
            p.out.replace=p.replace || config.configuration.d.defaultoutputcollection;
            command.collectionmethod = "replace";
            command.collection = p.out.replace;
        }
        else { p.out.inline=1 } // default send it to screen

        //p.out.db = p.db || config.configuration.d.default.databasetable;
        p.out.sharded = p.sharded || false;
        p.out.nonAtomic = p.nonatomic || true;
        //command.databasetable = p.out.db; // already done by this time
        command.reducefn = reducefn;
        command.keycollection = command.collection+'key';
    }

    proxyprinttodiv('mapreduce after command', command, 21,true, true);

    var out = // values are not being calcualted today
        {
        "timeMillis" : 0,
        "counts" : 
            {     
            "input" : 0,     
            "emit" : 0,   
            "reduce" : 0,  
            "output" : 0
            },    
        "ok" : 1
        }
    out.results=outlist; // mongo returns in a parameter call "results"
    proxyprinttodiv('mapreduce in out', out, 28,true, true);
    if (p.out.inline === 1) 
    {
        cb(null, out);
    }
    else // if not query result -- real save
    {
        out.command=command;
        proxyprinttodiv('mapreduce callign updatecollection out', out, 21,true, true);
        updatecollection(out, cb);
    }
}

function updatecollection(p, cb)
{   // will look at collectionmethod and it will update collection in differnet ways...replace is default
    var command = {};
    extend(true, command, config.configuration.d.default, p.command)
    command.collectionmethod = command.collectionmethod || "replace"; // default is to replace, we have merge reduce
    var datalist = p.queryresult || p.results;
    proxyprinttodiv('updatecollection datalist', datalist, 21,true, true);
    proxyprinttodiv('updatecollection command', command, 21,true, true);
    if (config.configuration.environment==="local")
    {
        if (command.collectionmethod==="replace") 
        {
            proxyprinttodiv('updatecollection replace', datalist, 21,true, true);
            var database=datalist;
            var keydatabase = {};
            // create a keydatabased from database
            for (var eachrecord in database) 
            {
                proxyprinttodiv('updatecollection database[eachrecord].wid', database[eachrecord].wid, 21,true, true);
                proxyprinttodiv('updatecollection database[eachrecord]', database[eachrecord], 21,true, true);
                keydatabase[database[eachrecord].wid]=database[eachrecord];
            }
            proxyprinttodiv('updatecollection command keydatabase', keydatabase, 21,true, true);
            // now save both keydatabase and database -- overwrite
            if (command.datastore === "localstorage")
            {
                proxyprinttodiv('updatecollection command localstorage STORE', command, 21,true, true);
                addToLocalStorage(command.databasetable + command.keycollection, keydatabase);
                addToLocalStorage(command.databasetable + command.collection, database);
            }
            else if (command.datastore === "localstore")
            {
                addtolocal(command.databasetable + command.keycollection, keydatabase);
                addtolocal(command.databasetable + command.collection, database);
            }
            proxyprinttodiv('updatecollection done with replace database', database, 21,true, true);
            cb(null, database);
        } 
        else // merge or reduce -- first get keydatabase
        {
            proxyprinttodiv('updatecollection start merge/reduce', datalist, 21,true, true);
            if (command.datastore === "localstorage")
            {
                keydatabase = getFromLocalStorage(command.databasetable + command.keycollection);
            }
            else if (command.datastore === "localstore")
            {
                keydatabase = getfromlocal(command.databasetable + command.keycollection);
            }
            // step though incoming datalist
            for (var eachrecord in datalist) 
            {   // based on merge or reduce extend or reducefn 
                var currentrecord = datalist[eachrecord];
                var currentwid = currentrecord.wid || currentrecord["_id"];
                if (command.collectionmethod==="merge")
                {
                    // current record should be value : {}, either of statments should be ok
                    //keydatabase[currentwid].value = extend(true, keydatabase[currentwid].value, currentrecord.value);
                    keydatabase[currentwid] = extend(true, keydatabase[currentwid], currentrecord);
                }
                if (command.collectionmethod==="reduce")
                {
                    // current record should be value : {}
                    keydatabase[currentwid].value = command.reducefn(currentwid, keydatabase[currentwid].value);
                }
            }
            proxyprinttodiv('updatecollection after merge/reduce', keydatabase, 21,true, true);
            // now create the database from the keydatabase
            var database=[];
            for (var eachrecord in keydatabase)
            {
                database.push(keydatabase[eachrecord]);
            } 

            // now save both keydatabased and database
            if (command.datastore === "localstorage")
            {
                addToLocalStorage(command.databasetable + command.keycollection, keydatabase);
                addToLocalStorage(command.databasetable + command.collection, database);
            }
            else if (command.datastore === "localstore")
            {
                addtolocal(command.databasetable + command.keycollection, keydatabase);
                addtolocal(command.databasetable + command.collection, database);
            }
            proxyprinttodiv('updatecollection END database', database, 21,true, true);
            cb(null,database);
        }
    }
    else
    {
        proxyprinttodiv('updatecollection going to server', datalist, 21,true, true);
        serverupdatecollection(datalist, command, cb)
    }
}


  
// returns [{},{}]
exports.querywidmaster = querywidmaster = function querywidmaster(params, callback) {
    if (!params.command) {params.command={}};
    params.command.queryconvertmethod = "object";
    proxyprinttodiv('querywidmaster', params, 28); 
    querywid(params, function (err, results) {
        callback(err, results);
    });
};

// returns list based on command.queryconvertmethod
exports.querywid = querywid = function querywid(inparameters, callback) { // can change to call back

    var parameters={};
    extend(true, parameters, inparameters);
    delete parameters.executethis;
    var etEnvironment = new DriEnvironment(parameters.command.environment);

    proxyprinttodiv('querywid parameters', parameters, 28,true);

    // get all the possible named parameters / set defaults
    var filter_data = getcommand(parameters,
        {
            "command": {
                "datastore": config.configuration.d.default.datastore,
                "collection":config.configuration.d.default.collection,
                "keycollection":config.configuration.d.default.keycollection,
                "db":config.configuration.d.default.db,
                "databasetable":config.configuration.d.default.databasetable,
                "convert":"toobject",
                "keepaddthis":true,
                "queryconvertmethod":"each",
                "namespaceflag":false,
                "queryresult":"queryresult",
                "pagenumber":"",  
                "perpage":"",
                "skip":"",
                "limit":"",
                "sort":"",
                "count":null,
                "distinct":null
            },
            "mongorawquery": "",
            "mongowid": "",
            "mongorelationshiptype": "",
            "mongorelationshipmethod": "",
            "mongorelationshipdirection": "",
            "mongowidmethod": "",
            "mongosetfieldsexclude": {},
            "mongosinglequery": "",
            "mongomultiplequery": "",
            "monogoprojection":{},
            "queryresult": null,
            "results":null
        },
        {
            "command": {
                "datastore": "",
                "collection":"",
                "keycollection":"",
                "db":"",
                "databasetable":"",
                "convert":"",
                "keepaddthis":"",
                "pagenumber":"",  
                "perpage":"",
                "skip":"",
                "limit":"",
                "sort":"",
                "count":"",
                "distinct":""
            },
            "mongorawquery": "",
            "mongowid": "",
            "mongorelationshiptype": "",
            "mongorelationshipmethod": "",
            "mongorelationshipdirection": "",
            "mongowidmethod": "",
            "mongosetfieldsexclude": "",
            "mongosinglequery": "",
            "mongomultiplequery": "",
            "monogoprojection":"",
            "queryresult":"",
            "results":""
        },
        true);

    
    proxyprinttodiv('querywid filteredobject', filter_data, 28, true);
    parameters = filter_data.filteredobject;
    var xparams = filter_data.output;  // xtra parameters will be left overs..will be used for further $ands to query
    var extracommands=xparams.command; // any other commands in xtraparams to extracommands, namespace, et 
    delete xparams.command;

    // now get only the parameters that are native to mongo.js
    filter_data =
        getcommand(
            parameters, 
            {},
            {
                "command": {
                    "datastore": "",
                    "collection":"",
                    "keycollection":"",
                    "db":"",
                    "databasetable":"",
                    "convert":"",
                    "keepaddthis":"",
                    "pagenumber":"",  
                    "perpage":"",
                    "skip":"",
                    "limit":"",
                    "sort":"",
                    "count":"",
                    "distinct":""
                }
            },
            true);

    proxyprinttodiv('querywid filteredobject II', filter_data, 28, true);
    var command= filter_data.filteredobject.command;    // commands for mquery
    var qparms = filter_data.output;                    // in essence commands for querywid

    var output = [];                                    // holds potenital output
    var outputlistofwids = [];                          // hold distilled list from output
    var relationshipoutput = [];                        // holds output of relationship call
    var mQueryString;                                   // current query to be sent to mquery
    var environmentdb = command.db; 
    var projection = qparms.monogoprojection;

    // if queryresult was sent in (xparams.queryresult) then move it to command.indb
    // this will be the "database" that will be used for a search
    // so you can send it in in "queryresult" or "command.indb"
    if (xparams.queryresult)
    {
        command.indb = xparams.queryresult;
        delete xparams.queryresult;
    }

    proxyprinttodiv('querywid command', command, 28, true);
    proxyprinttodiv('querywid qparms', qparms, 28, true);
    proxyprinttodiv('querywid xparams', xparams, 28, true);
    proxyprinttodiv('querywid extracommands', extracommands, 28, true);



    // 3 stages of query, results of one feed the next
    // raw, single, multiple
    // relationship
    // after relationship

    if (!qparms.mongosinglequery && !qparms.mongowid && !qparms.mongorawquery && !qparms.mongomultiplequery)
    {
        alert('invalid q1');
        callback(undefined, []); // if not starting parameters sent in the return
    } 
    else 
    {
        async.series([
            function step01(cb1) {

                // Use single to set up a query with the params of 1 wid
                if (qparms.mongosinglequery) 
                {
                    var wid = qparms['mongosinglequery'];
                    var executeobject = {'executethis': 'getwid','wid': wid,'command.executetype':'series'};
                    extend(true, executeobject, command)
                    etEnvironment.execute(executeobject, function (err, widObject) {
                        // If error, bounce out
                        if (err && Object.keys(err).length > 0) {cb1(err, widObject);}
                        else 
                        {
                            delete widObject.wid;
                            delete widObject.metadata;
                            // build a quyer based on the widObject
                            mQueryString = BuildSingleQuery(widObject, "or", environmentdb);
                            proxyprinttodiv('Function MongoDataQuery singlemongoquery : ', mQueryString, 28, true);
                            mquery(mQueryString, projection, command, function (err, res) {
                                if (err) { cb1(err, res); }
                                else { output = res; cb1(null, "step01"); }
                            }); // mquery
                        }
                    }); // execute getwid
                } 
                else if (qparms.mongomultiplequery) 
                {
                    var executeobject = {'executethis': 'getwid','wid': qparms['mongomultiplequery'],'command.executetype':'series'};
                    extend(true, executeobject, command);
                    etEnvironment.execute(
                        executeobject,
                        function (err, listOfWids) {
                            if (err && Object.keys(err).length > 0)
                            { cb1(err, listOfWids); }
                            else
                            {
                                delete listOfWids["wid"];
                                delete listOfWids.metadata;
                                proxyprinttodiv('Function MongoDataQuery listOfWids : ', listOfWids, 28, true);

                                var ListOfLists=[];
                                var todolist = [];
                                for (var w in listOfWids) {
                                    todolist.push(w);
                                }

                                async.mapSeries(todolist, function (w, cbMap) {
                                    async.nextTick(function () {
                                         var executeobject = {'executethis': 'getwid','wid': w,'command.executetype':'series'};
                                        extend(true, executeobject, command);
                                        etEnvironment.execute(
                                        executeobject,
                                            function (err, res)
                                            {
                                                if (err && Object.keys(err).length > 0)
                                                    {cbMap(err, res);}
                                                else
                                                {
                                                    var tempwid = res;
                                                    delete tempwid["wid"];
                                                    delete tempwid.method;
                                                    ListOfLists.push(tempwid);
                                                    cbMap(null, "map");
                                                }
                                            }); // execute
                                        }); // nextTick
                                }, // mapseries
                                function (err, res) {
                                    if (err && Object.keys(err).length > 0)
                                    { cb1(err, res); }
                                    else
                                    {
                                        mQueryString = BuildMultipleQuery(ListOfLists, "and", "or", environmentdb);
                                        proxyprinttodiv('querywid mQueryString multiple', mQueryString, 28);
                                        mquery(mQueryString, projection, command, function (err, res) {
                                            if (err)
                                            {
                                                cb1(err, res);
                                            }
                                            else
                                            {
                                                output = res;
                                                cb1(null, 'step01');
                                            }
                                        });
                                    } // if no error
                                }); // end of mapseries
                            } // end if not error of first execute
                        }
                    ); // end of first execute
                } 
                else if (qparms.mongorawquery || (extracommands.namespace && extracommands.namespaceflag))
                {
proxyprinttodiv('querywid qparms.mongorawquery', qparms.mongorawquery, 28);
                    if(extracommands.namespaceflag){
                        var criteriajsonarray = [];

                        for(var key in extracommands.namespaceflag)
                        { 
                            if(extracommands.namespace[key] && extracommands.namespaceflag[key]) 
                            {
                                var jsonnamespaceobj = {};
                                jsonnamespaceobj["metadata.namespace." + key] = extracommands.namespace[key];
                                criteriajsonarray.push(jsonnamespaceobj);
                            }
                        }

                        var queryjson = {"$and":criteriajsonarray};
proxyprinttodiv('querywid queryjson', queryjson, 28);
                        // create a query based on criteriajsonarray, load as xtra parms for next step
                        var queryarray = [];
                        queryarray.push(queryjson);
                        if (qparms.mongorawquery) 
                        {
                            var querycopy = {};
                            extend(true, querycopy, qparms.mongorawquery)
                            queryarray.push(querycopy)

                        };
                        qparms.mongorawquery = {};
proxyprinttodiv('querywid queryarray', queryarray, 28);                        
                        qparms.mongorawquery['$and'] = queryarray;//BuildSingleQuery(queryarray, "and", environmentdb); 
proxyprinttodiv('querywid qparms.mongorawquery', qparms.mongorawquery, 28); 
                    }

proxyprinttodiv('querywid xparams', xparams, 28);

                    // create a query based on xparams
                    if (xparams && Object.keys(xparams).length > 0)
                    {
                        mQueryString = BuildSingleQuery([xparams,qparms.mongorawquery], "and", environmentdb); 
                    }
                    else 
                    {
                        mQueryString = qparms.mongorawquery
                    }
proxyprinttodiv('querywid mQueryString multiple IV', mQueryString, 28);

                    // if query looks like this ...data...data...data then swtich out to current environmentdb
                    // perform a find and replace in the query string

                    if(environmentdb !== "data") 
                    {
                        var s = JSON.stringify(mQueryString);
                        s.replace("data", environmentdb);
                        mQueryString = JSON.parse(s);
                    }


                    proxyprinttodiv('querywid mQueryString first main query', mQueryString, 28);
                    mquery(mQueryString, projection,  command, function (err, res) {
                        if (err) {
                            cb1(err, res);
                        } else {
                            output = res;
                            cb1(null, "step01");
                        }
                    });
                } 
                else if (qparms.mongowid) 
                {
                    //outputlistofwids = distilllist(output, 'wid', environmentdb);
                    outputlistofwids.push({'wid': qparms.mongowid});
                    proxyprinttodiv('querywid output after mongowid', outputlistofwids, 28, true);
                    cb1(null, "step01");
                }
                else // if not any of those
                {
                    alert('invalid query');
                    cb1(null, "step01");
                }
            },

            // function step02(cb2) {

            //     // output will have full results so far
            //     // make outputlistofwids, just be the list of wids so far
            //     outputlistofwids = distilllist(output, 'wid', environmentdb);

            //     // Primary Wid Section **********
            //     if (qparms.mongowid) 
            //     {
            //         outputlistofwids.push({'wid': qparms.mongowid});
            //     }
                
            //     proxyprinttodiv('querywid output after mongowid', outputlistofwids, 28, true);
            //     cb2(null, "step02");
            // },

            function step03(cb3) {

                // Relationship Section **********
                // skip if there are no relParams

                if ((qparms.mongorelationshipdirection
                     || qparms.mongorelationshiptype
                     || qparms.mongorelationshipmethod
                     || qparms.mongorelationshiprawquery
                     || qparms.mongorelationshiplink
                     || qparms.mongorelationshipquery
                     || qparms.mongodtotype
                     || qparms.mongorelquery )
                     && (outputlistofwids.length > 0))
                {
                    proxyprinttodiv('querywid output before rel', outputlistofwids, 28, true);
                    mQueryString = relationShipQuery(qparms, outputlistofwids, environmentdb);
                    proxyprinttodiv('mQueryString at step03 =>', mQueryString, 28);
                    proxyprinttodiv('mQueryString at step03 => command', command, 28);
                    if (mQueryString) {
                        mquery(mQueryString, projection, command, function (err, res) {
                               proxyprinttodiv('mQueryString at step03 res',res, 28);
                            if (err) {
                                cb3(err, res);
                            } else {
                                relationshipoutput = res;
                                cb3(null, "step03");
                            }
                        });
                    } 
                    else 
                    {
                        output = [];
                        cb3(null, "step03");
                    }
                } 
                else // if no relationship go to next section
                {
                    cb3(null, "step03");
                }
            },

            function step04(cb4) {
                // After Relationship Section **********
              
                if (qparms.mongorelationshipdirection) { 
                    proxyprinttodiv('querywid mongorelationshipdirection', qparms.mongorelationshipdirection, 28);
                    if (qparms.mongorelationshipdirection === 'forward') {
                        outputlistofwids = distilllist(relationshipoutput,"secondarywid", environmentdb);
                    }
                    if (qparms.mongorelationshipdirection === 'backward') {
                        outputlistofwids = distilllist(relationshipoutput,"primarywid", environmentdb);
                    }
            
                    proxyprinttodiv('querywid output step04 relationshipoutput', relationshipoutput, 28, true);
                    proxyprinttodiv('querywid before after rel output', outputlistofwids, 28, true);

                    if (qparms.mongowidmethod) 
                    {
                        mQueryString = queryafterrelationship(qparms, outputlistofwids);
                    }
                    else
                    {
                        mQueryString = BuildSingleQuery(outputlistofwids, "or", environmentdb);
                    }
                    proxyprinttodiv('querywid after queryafterrelationship mQueryString', mQueryString, 28);
                    if (mQueryString) 
                    {
                        mquery(mQueryString, projection, command, function (err, res) {
                            if (err) {
                                cb4(err, res);
                            } else {
                                output = res;
                                proxyprinttodiv('querywid end step 04 output', output, 28, true);
                                cb4(null, "step04");
                            }
                        });
                    } 
                    else 
                    {
                        cb4(null, "step04");
                    }
                    proxyprinttodiv('finalformat top output--55 should never hit or hit out of order', output, 28, true); 
                } 
                else // if no relationshipdirection
                {
                    cb4(null, "step04");
                }
            }
        ],

        function (err, res) 
        {
            if (err && Object.keys(err).length > 0) 
            {
                proxyprinttodiv('querywid error **********', err, 28, true);
                callback(err, res);
            } 
            else 
            {
                proxyprinttodiv('querywid just before finalformat output--', output, 28, true, true); 
                finalformat(output, relationshipoutput, qparms, extracommands, projection, command, function (err, res) {
                    proxyprinttodiv('querywid just before finalformat output--res', res, 28, true, true); 
                    callback(err,res);
                })
            } // else
        } // last function
        ); // asynch
    } // else
};

// getprojectionresult
// getprojectionresult( {"a":"apple", "b":"banana", "c":"cherry"}, {"a":1, "b": 0} );
// - sourcerecord - an object of some kind
// - projectiondef - a mongodb compatible projection definition object.
// 
function getprojectionresult( sourcerecord, projectiondef ) {
    // remove properties
        proxyprinttodiv('querywid getprojectionresult *****', sourcerecord, 28, true, true);
    for( var prop in projectiondef ) {
        if (projectiondef[prop] == 0) {
            delete(sourcerecord[prop]);
        }
    }
    // include only these properties
    var newobj = {};
    var onlyIncludeCount = 0;
    for (var prop in projectiondef ) {
        onlyIncludeCount += 1;
        if (projectiondef[prop] == 1) {
            newobj[prop] = sourcerecord[prop];    
        }
    }
    var result = sourcerecord;
    if (onlyIncludeCount > 0) {
        result = newobj;
    }
    return result;
}


function finalformat(outputset, relationshipoutput, qparms, extracommands, projection, command, callback) {
    proxyprinttodiv('querywid finalformat qparms', qparms, 28, true);
    var queryconvertmethod = extracommands.queryconvertmethod;
    var excludeparameters = qparms.mongosetfieldsexclude || {};
    var db = command.db;
    var finaloutput = [];
    var excludedistinct={};
    var output = {};
    proxyprinttodiv('querywid finalformat projection', projection, 28, true);
    proxyprinttodiv('finalformat top output', output, 28, true);
    proxyprinttodiv('finalformat top relationshipoutput', relationshipoutput, 28, true);
    proxyprinttodiv('querywid finalformat excludeparameters', excludeparameters, 28);

    // if mongo or not mongo:
    for (var eachout in outputset)
    {
        var wid = outputset[eachout][db].wid || outputset[eachout].wid;
        if (!excludeparameters[wid])
        {
            var foundrecord;
            for (var eachrecord in relationshipoutput)
            {
                if (relationshipoutput[eachrecord][db].primarywid===wid ||
                    relationshipoutput[eachrecord][db].secondarywid===wid )
                {
                    foundrecord = relationshipoutput[eachrecord][db];
                    break;
                }
            }
                // then change and enhance the strucutre of the result
            proxyprinttodiv('finalformat top outputset[eachout]', outputset[eachout], 28, true);
            proxyprinttodiv('finalformat top foundrecord', foundrecord, 28, true);
            output[eachout] = convertfromdriformatenhanced(outputset[eachout], command, foundrecord);
            proxyprinttodiv('finalformat top output[eachout]', output[eachout], 28, true);
        }
    }

    if (command.datastore!=="mongo")
    {   // server handles these normally
        var pagenumber = command.pagenumber || 1;
        var perpage = command.perpage; // || 50;
        var skipval = command.skip || pagenumber > 0 ? (pagenumber-1)*perpage : 0;
        var limitval = command.limit || perpage || 0;  // 0 is all 
        var sortobj = command.sort || {};
        var count = command.count || false;
        
        if (count)
        {
            proxyprinttodiv('querywid finalformat count *******', sortobj, 28, true, true);
            callback(null, {"n":output.length, "ok":1}); // { "n" : 13, "ok" : 1 }
        }
        else // if real query
        {
            if (!skipval) {skipval=0}
            proxyprinttodiv('querywid finalformat sortobj', sortobj, 28, true, true);
            proxyprinttodiv('querywid finalformat limitval', limitval, 28, true, true);
            proxyprinttodiv('querywid finalformat skipval', skipval, 28, true, true);
            if (Object.keys(sortobj)>0)
            {   // first convert to dot, then sort
                for (var eachout in output){output[output]=ConvertToDOTdri(output[output])};
                output.sort(dynamicsortmultiple(sortobj));
            }
	        // if skipval = 0 and limitval = 3 then 0,3 start at first post stop at third
            // 1,3 then second, fourth 
			if (limitval) { output = output.slice(skipval, skipval + limitval); }
            
        	// now convert back from dot
            for (var eachout in output)
            {
                if (Object.keys(sortobj)>0) {output[eachout]=ConvertFromDOTdri(output[eachout])};
                if (Object.keys(projection).length > 0) {output[eachout] = getprojectionresult(output[eachout], projection)};
                // if the property in command.distinct exist in the record we are about to return then 
                if (command.distinct)
                {
                    output[eachout] = ConvertToDOTdri(output[eachout]);
                    if (output[eachout][command.distinct] && !excludedistinct[output[eachout][command.distinct]]) 
                    {
                        // then add it to the exclude set, so it will not be returned again
                        excludedistinct[output[eachout][command.distinct]]=output[eachout][command.distinct];
                        finaloutput.push(ConvertFromDOTdri(output[eachout]));
                    }
                }
                else // if not distinct
                {
                    finaloutput.push(output[eachout]);
                }
            }
        }
    }
    proxyprinttodiv('finalformat top output MIDDLE', finaloutput, 28, true, true);

    extend(true,  finaloutput, output)
    var resultarray=[];

    // if mongo or not mongo:
    for (var eachout in finaloutput)
    {
        if (queryconvertmethod === "each")
        {
            var temp = {};
            temp[finaloutput[eachout].wid]=finaloutput[eachout];
            resultarray.push(temp);
        }
        else // toobject
        {
            resultarray.push(finaloutput[eachout]);
        }
    }

    proxyprinttodiv('finalformat output II', resultarray, 28, true, true);
    var temp;
    if (qparms.queryresult) {temp[qparms.queryresult] = output} else {temp=resultarray}
    proxyprinttodiv('querywid finaloutput', temp, true);
    callback(null, temp);
} // final format


function distilllist(inlist, field, environmentdb) {
    var outlist = [];
    for (var eachitem in inlist)
    {
        var temp = {};
        temp.wid = inlist[eachitem][environmentdb][field] || inlist[eachitem][field];
        outlist.push(temp);
    }
    return outlist;
}




//in: key, value, preamble
//out STRING: {preamble.key: value}

function BuildSimpleQuery(key, value, preamble) {
    var result;
    //BuildSimpleQuery, text in and out
    preamble = preamble + "."; 
    result = "{\"" + key + "\":\"" + value + "\"}";
    proxyprinttodiv('querywid BuildSimpleQuery result', result, 28);
    return result;
}

// in parameters, preamble, outerquerytype
// will create a string query based on outerquerytype

function BuildSingleQuery(parameters, outerquerytype, preamble) {
    if (!(parameters instanceof Array)) {
        var arr = [];
        arr.push(parameters);
        parameters = arr;
    }
    proxyprinttodiv('querywid BuildSingleQuery parameters', parameters, 28);
    var parmarray = [];
    // BuildSingleQuery, (parameters, outerquerytype, preamble)
    // parameters can be list [{}]
    // or object {}
    // inside needs to be simple parameters a: b, c: d
    var returnString;
    if (!outerquerytype) {
        outerquerytype = "or";
    } // default if not sent in
    // parameters can be [{a:b, c:d, e:f}] or {a:b, c:d, e:f}
    // if [] then remove []

    if (!parameters) {
        return null;
    }

    var parametersCount = parameters.length;

    if (parametersCount > 1) {
        //returnString = ' {"$or": [';
        returnString = ' {"$' + outerquerytype + '": [';
    } else {
        returnString = "";
    }

    if (parameters instanceof Array) {
        for (var i = 0; i < parameters.length; i++) {
            for (var key in parameters[i]) {
                returnString += BuildSimpleQuery(key, parameters[i][key], preamble);
                if (returnString.lastIndexOf(',') !== (returnString.length - 1)) {
                    returnString += ",";
                }
            }
        }
    } else {
        for (var p in parameters) {
            returnString += BuildSimpleQuery(p, parameters[p], preamble);
            if (returnString.lastIndexOf(',') !== (returnString.length - 1)) {
                returnString += ",";
            }
        }
    }

    returnString = returnString.substring(0, returnString.length - 1);
    // Close the string based on the number of listofparameters
    if (parametersCount > 1) {
        returnString += "]}"; // added ]
    } else {
        returnString += "";
    }
    proxyprinttodiv('querywid BuildSingleQuery end', returnString, 28);

    return returnString;
}

// in list of parameters, outerquerytype, innerquerytype, preamble
// will create a string query based on outerquerytype

function BuildMultipleQuery(listofparameters, outerquerytype, innerquerytype, preamble) {

    // todo -- this should all be done as objects not strings

    //buildmultiplequery (listofparameters, outerquerytype, innerquerytype, preamble)
    //list of parameters must be list: [{}, [], [], {}]
    proxyprinttodiv('querywid buildmultiplequery listofparameters', listofparameters, 28);
    var returnString = "";
    var parameters;
    if (!outerquerytype) 
    {
        outerquerytype = "and";
    } // default if not sent in
    if (!innerquerytype) 
    {
        innerquerytype = "or";
    } // default if not sent in

    var listofparametersCount = listofparameters.length;
    if (listofparametersCount == 0) return;
    // If it turns out you only have 1 set of params, dont start out the string with $and
    if (listofparametersCount == 1) {
        //returnString += "{";
        returnString += "";
    } else {
        // returnString += '{"$and":[';
        returnString += '{"$' + outerquerytype + '":[';
    }
    // Iterate through the params from each wid to get the $or groups built
    for (var i in listofparameters) {
        parameters = listofparameters[i];
        returnString += BuildSingleQuery(parameters, innerquerytype, preamble);
        if (returnString.lastIndexOf(',') !== (returnString.length - 1)) {
            returnString += ",";
        }
    }


    // Chop off the last comma
    // strip off the last comma and add the closing of OR
    returnString = returnString.substring(0, returnString.length - 1);
    // Close the string based on the number of listofparameters
    // var parametersCount = Object.keys(parameters).length;
    if (Object.keys(listofparameters).length === 1) {
        returnString += "";
    } else {
        returnString += "]}";
    }
    proxyprinttodiv('querywid buildmultiplequery end', returnString, 28);

    return returnString;
}

function queryafterrelationship(parameters, set2) {
    proxyprinttodiv('querywid queryafterrelationship parameters', parameters, 28);   
    var set1 = [];
    var set3 = [];
    set1.push({"metadata.method": parameters.mongowidmethod});
    set3.push(set1);
    set3.push(set2);
    var result = BuildMultipleQuery(set3, 'and', 'or', null);
    proxyprinttodiv('querywid queryafterrelationship result', result, 28);

    return result;
}
// Starting of relationShipQuery function

function relationShipQuery(parameters, input, environmentdb) {
    proxyprinttodiv('Function relationShipQuery() Constant input parameters: ', parameters, 28);
    var output = {};
    var querystring;

    if (!parameters.mongorelationshipdirection)  // Simply checking to make sure all the data is here
    {
        return "";
    }

    var queryset = [];
    //for(var i = 0;i < input.length; i++){
    for (var i in input) { // &&& change by roger
        //if (input.hasOwnProperty(i)) {
            var q1 = {};
            var val = input[i]['wid'];
            if (parameters.mongorelationshipdirection  === 'forward') {
                q1[environmentdb + ".primarywid"] = val;
            } else {
                q1[environmentdb + ".secondarywid"] = val;
                // q1= {environmentdb+"secondarywid": input[i]['wid']}
            }
            queryset.push(q1);
        //}
    }

    if (parameters.mongowidmethod) {
        queryset.push({
            "metadata.method": parameters.mongowidmethod
        });
    }
    if (parameters.mongorelationshiptype) {
        var q2 = {};
        q2[environmentdb + ".relationshiptype"] = parameters.mongorelationshiptype;
        queryset.push(q2);
    }
    if (parameters.mongorelationshiplink) {
        var q2 = {};
        q2[environmentdb + ".linktype"] = parameters.mongorelationshiplink;  // had mongorelationshiptype before
        queryset.push(q2);
    }
    querystring = BuildMultipleQuery(queryset, "and", "or", null);
    proxyprinttodiv('relationShipQuery querystring', querystring, 28);
    return querystring;
}

//   function formatlist(inlist, parmnamein, parmnameout, environmentdb) {
//         var inbound_parameters = JSON.parse(JSON.stringify(arguments));

//         var output = [];
//         var widvalue;
//         var item;
//         var obj = {};
//         var wid = {};

//         if (inlist === undefined || inlist.length === 0) {
//             return [];
//         } else {

//             for (var i in inlist) { // changed by roger &&&
//                 item = inlist[i];

//                 item = ConvertFromDOTdri(item);
//                 if (!database[item.wid]) {
//                     database[item.wid] = item;
//                 }


//                 proxyprinttodiv('querywid formatlist item ', item, 28);

//                 if (parmnameout !== "wid") {
//                     widvalue = item[environmentdb][parmnameout];
//                 } else {
//                     widvalue = "wid";
//                 }

//                 proxyprinttodiv('querywid formatlist widvalue ', widvalue, 28);
//                 obj = {};

//                 if (parmnamein === "wid") {
//                     obj[widvalue] = item[parmnamein];
//                 } else {
//                     if (parmnamein) {
//                         obj[widvalue] = item[environmentdb][parmnamein];
//                     } else {
//                         obj[widvalue] = item[environmentdb];
//                     }
//                 }

//                 // database[widvalue] = obj[widvalue];

//                 proxyprinttodiv('querywid formatlist obj[widvalue] ', obj[widvalue], 28);

//                 if (parmnameout === "wid") {
//                     output.push(obj); // [{x:{}}, {x:{}}, {x:{}}]
//                 } else {
//                     output[widvalue] = obj[widvalue];
//                     //[x:{}, x:{}, x:{}]
//                 }

//             }
//             proxyprinttodiv('querywid formatlist output ', output, 28);



//             return output;
//         }
//     }

//     // takes inlist, looks for wid, then goes to main database to get a get clean complete converted copy of that wid
//     // also looks in extra paramters, append information found about that wid to results also

//     function formatListFinal(inlist, environmentdb, extraparameters, command, callback) {
//         //try {
//         // proxyprinttodiv('querywid finalformatlist aggParams ', aggParams, 28);
//         var inbound_parameters_120 = JSON.parse(JSON.stringify(arguments));

//         var output = [];
//         //var keycollection = "DRIKEY";
//         var record;
//         var widrecord;
//         var extrarecord = {};
//         var todolist = [];
//         var excludeset = {};
//         if (qparms["mongosetfieldsexclude"] && Object.keys(qparms["mongosetfieldsexclude"]).length !== 0) 
//         {
//             excludeset = qparms["mongosetfieldsexclude"];
//             proxyprinttodiv('querywid finalformatlist excludeset ', excludeset, 28);
//         }

// /*        var etEnvironment = new DriEnvironment({
//             run:{
//                 "executeid":command.environment.run.executeid,
//                 "executelevel":command.environment.run.executelevel,
//                 "type":command.environment.run.type || "series"
//             }
//         });*/
//         command.environment.run.type = "series";
//         var etEnvironment = new DriEnvironment(command.environment);

//         if (inlist === undefined || inlist.length === 0) 
//         {
//             callback(null, []);
//         } 
//         else 
//         {
//             proxyprinttodiv('querywid finalformatlist inlist ', inlist, 28);
//             proxyprinttodiv('querywid finalformatlist extraparameters ', extraparameters, 28);

//             proxyprinttodiv('querywid database ', database, 28);
//             var obj = {};
//             for (var eachresult in inlist) 
//             {
//                 obj[inlist[eachresult]['wid']] = "xxx"; //VALUE does not matter, we are concerned ony with the key
//             }

//             var arrKeys = Object.keys(obj);
//             console.log(arrKeys);
//             proxyprinttodiv('>>>>>>> querywid arrKeys  ', arrKeys, 28);
//             todolist = arrKeys;
//             async.mapSeries(todolist, function (wid, cbMap) {
//                     async.nextTick(function () {
//                         record = {};
//                         proxyprinttodiv('querywid finalformatlist wid ', wid, 28);

//                         async.series([
//                             function (cb1) {
//                                 if (!database[wid]) {
//                                     etEnvironment.execute({
//                                         'executethis': 'getwid',
//                                         'wid': wid,
//                                         'command.executetype':'series'
//                                     }, function (err, res) {
//                                      widrecord = [];
//                                         widrecord[0] = res;
//                                         cb1(null);
//                                     });
//                                 } else {
//                                     widrecord = [];
//                                     widrecord[0] = database[wid];
//                                     cb1(null);
//                                 }
//                             },


//                             function (cb1) {
//                                 proxyprinttodiv('querywid finalformatlist widrecord ', widrecord, 28);

//                                 if (Array.isArray(widrecord)) {
//                                     var widrecordFixed = {};
//                                     widrecordFixed[config.configuration.defaultdb] = widrecord[0];
//                                     widrecordFixed['metadata'] = widrecord[0]['metadata'];
//                                     widrecordFixed['wid'] = widrecord[0]['wid'];
//                                     extrarecord[environmentdb] = extraparameters[wid];
//                                     delete widrecord[0]['wid'];
//                                     delete widrecord[0]['metadata'];
//                                     widrecord = widrecordFixed;
//                                 } else if (!widrecord[config.configuration.defaultdb]) {
//                                     widrecord = converttodriformat(widrecord,command);
//                                 }
                                
//                                 proxyprinttodiv('querywid finalformatlist widrecord', convertfromdriformat(widrecord), 28);
//                                 proxyprinttodiv('querywid finalformatlist extraparameters[wid]', extrarecord, 28);
//                                 // widrecord = extend(true, widrecord, extrarecord); // commented out by joe
//                                 // when extending widrecord data should overwrite extrarecord data
//                                 // also this should only append data from relationship records (linktype)
//                                 // widrecord = extend(true, extrarecord, widrecord);// Commented by Suarabh
//                                 widrecord = extend(true, widrecord, extrarecord);
//                                 proxyprinttodiv('querywid finalformatlist widrecord after ', widrecord, 28);

//                                 if (command.convertmethod === "toobject") {
//                                     record[wid] = convertfromdriformat(widrecord, command);
//                                 } else {
//                                     record[wid] = widrecord;
//                                 }
//                                 cb1(null);
//                             }

//                             ,
//                             function (cb1) {
//                                 proxyprinttodiv('querywid finalformatlist excludeset ', excludeset, 28);
//                                 if (!excludeset[wid]) {
//                                     output.push(record);
//                                     cb1(null);
//                                 } else {
//                                     cb1(null);
//                                 }
//                             }
//                         ],

//                             function (err, res) {
//                                 cbMap(null);
//                             });

//                     }); // next tick
//                 },

//                 function (err, res) {
//                     // If error, bounce out
//                     if (err && Object.keys(err).length > 0) {
//                         callback(err, res);
//                     } else {
//                         //
//                         proxyprinttodiv('querywid finalformatlist output', output, 28);
//                         callback(null, output)
//                     }
//                 }); // mapseries
//         } // if

//     };


// function copylist(inlist, parmnamein, parmnameout, environmentdb) {
//     var inbound_parameters = JSON.parse(JSON.stringify(arguments));

//     var widvalue;
//     var item;
//     var obj = {};
//     var wid = {};

//     if (inlist === undefined || inlist.length === 0) {
//         return [];
//     } else {
//         proxyprinttodiv('querywid copylist inlist ', inlist, 28);


//         proxyprinttodiv('querywid copylist parmnameout ', parmnameout, 28);
//         proxyprinttodiv('querywid copylist parmnamein ', parmnamein, 28);
//         for (var i in inlist) { // changed by roger &&&
//             item = inlist[i];

//             item = ConvertFromDOTdri(item);
//             proxyprinttodiv('querywid copylist item ', item, 28);

//             widvalue = item[environmentdb][parmnameout];

//             proxyprinttodiv('querywid copylist widvalue ', widvalue, 28);

//             if (parmnamein) {
//                 obj[widvalue] = item[environmentdb][parmnamein];
//             } else {
//                 obj[widvalue] = item[environmentdb];
//             }

//             proxyprinttodiv('querywid copylist obj ', obj, 28);


//             //[x:{}, x:{}, x:{}]

//         }
//         proxyprinttodiv('querywid copylist obj ', obj, 28);

//         return obj;
//     }
// }



