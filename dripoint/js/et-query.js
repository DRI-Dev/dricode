// copyright (c) 2014 DRI
// to do make functions return objects, not strings

exports.mapreduce = mapreduce = function mapreduce(inparameters, callback) {
    // mapreducemongo should receive: map, reduce, query, output, command into query
    var p = {};
    extend(true, p, inparameters);
    var map = p.map;
    var reduce = p.reduce;
    delete p.map;
    delete p.reduce;
    if (!p.out) 
    {
        p.out = p.command.collection || config.configuration.d.default.collection
    }

    proxyprinttodiv('mapreduce p', p, 99,true, true);

    if (config.configuration.environment!=="local")
    {
        // if p.queryresult then save the collection so mapreduceserver can get it
        // mapreduceserver also shoudl be able to process p.query
        mapreduceserver(map, reduce, p, callback);
    }
    else 
    {
        if (!p.queryresult) // if results not sent in then go process p.mongorawquery
        {
            var temp={};
            temp.mongorawquery = p.mongorawquery || p.query;
            proxyprinttodiv('mapreduce before querywid', temp, 99,true, true);
            querywidmaster(temp, function (err, res) 
            {
                proxyprinttodiv('mapreduce after query', res, 99,true, true);
                p.queryresult = res.queryresult;
                mapreducelocal(map, reduce, p, callback);
            })
        }
        else // if queryresult sent in
        {
            mapreducelocal(map, reduce, p, callback);
        }
    }
}


// this function should not exist server side
var globalresultobject = {};
exports.globalresultobject = {};
exports.emit = emit = function emit(k, v)
    {
        proxyprinttodiv('mapreduce emit k', k, 99,true, true);
        proxyprinttodiv('mapreduce emit v', v, 99,true, true);
        if (!globalresultobject[k]) {globalresultobject[k] = []};
        globalresultobject[k].push(v);
    }



function mapreducelocal(map, reduce, p, cb)
{
    proxyprinttodiv('mapreduce map', map, 99,true, true);
    proxyprinttodiv('mapreduce reduce', reduce, 99,true, true);
    proxyprinttodiv('mapreduce p', p, 99,true, true);

    // mapper step
    globalresultobject = {};


    for (var eachitem in p.queryresult) // example map: function () {emit(this.gender, 1);};
    {
        // var parmarray = [];
        // for (var eachprop in p.queryresult[eachitem])
        // {
        //     var temp={};
        //     temp[eachprop] = p.queryresult[eachitem][eachprop];
        //     parmarray.push(temp)
        // }
        proxyprinttodiv('mapreduce p.queryresult[eachitem]', p.queryresult[eachitem], 99,true, true);
        // window[map].apply(this, parmarray);
        //window[map](p.queryresult[eachitem]);
        // had to hard code for now
        // window[map](p.queryresult[eachitem]);
        window[map].apply(p.queryresult[eachitem]);
    } 
    proxyprinttodiv('mapreduce globalresultobject I', globalresultobject, 99,true, true);

    // reduce step
    for (var eachitem in globalresultobject) // example reduce: function(gender, count){return Array.sum(count);};
    {
        globalresultobject[eachitem] = window[reduce](eachitem, globalresultobject[eachitem]);
    }
    proxyprinttodiv('mapreduce globalresultobject II', globalresultobject, 99,true, true);

    var outlist =[];
    if (!p.limit) {p.limit = Object.keys(globalresultobject).length}
    if (p.limit) // Optional. Specifies a maximum number of documents to return from the collection.
    {
        for (var eachitem in globalresultobject)
        {
            outlist.push(globalresultobject[eachitem]);
        }
         
    } 
    
    if (p.sort) // sort input based on eg {dim0: 1} +1 ascending
    {
        // dynamicsort in utils -- may need to be changed
        globalresultobject.sort(dynamicsortmultiple(p.sort));
    }

    if (p.finalize) // Optional. FN Follows the reduce method and modifies the output
    {
        for (var eachitem in outlist)
        {
            outlist[eachitem] = window[p.finalize](outlist[eachitem]);
        }  
    }

    if (p.scope) //Optional. Specifies global variables that are accessible in the map, reduce and finalize functions.
    {
        
    } 

    if (p.jsmode) //Optional. Specifies whether to convert intermediate data into BSON format between the execution of the map and reduce functions. Defaults to false.
    {
        
    } 

    if (p.verbose) // Optional. Specifies whether to include the timing information in the result information. The verbose defaults to true to include the timing information.
    {
        
    } 

    if (!isString(p.out) && Object.keys(p.out).length > 0)
    {
        if (p.out.inline === 1) 
        {
            p.out = "queryresult";
        }
        // out: { <action>: <collectionName>
        // [, db: <dbName>]
        // [, sharded: <boolean> ]
        // [, nonAtomic: <boolean> ] }
        // out: { inline: 1 }
        // set p.out
    }

    proxyprinttodiv('mapreduce in out globalresultobject', globalresultobject, 99,true, true);
    p.queryresult=outlist;

    if (isString(p.out)) // save results to db
    {
        if (p.out ==="queryresult")
        {
            cb(null,p);
        }
        else // if not query result -- real save
        {
            updatecollection(p, cb);
        }
    }
    else // else return the results
    {
        cb(null, outlist);
    }

}

function updatecollection(p, cb)
{
    var todolist = p.queryresult;
    async.mapSeries(todolist, function (eachresult, cbMap) 
    {
        async.nextTick(function () 
        {
            eachresult.command.collection = p.out;
            updatewid(eachresult, function (err, res)
            {
                cbMap(null);
            }) 
        })
    },
    function (err, res)
    {
        cb(null, res);
    }
    )
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
                "queryresult":"queryresult"
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
            "queryresult": null
        },
        {
            "command": {
                "datastore": "",
                "collection":"",
                "keycollection":"",
                "db":"",
                "databasetable":"",
                "convert":"",
                "keepaddthis":""
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
            "queryresult":""
        },
        true);

    
    proxyprinttodiv('querywid filteredobject', filter_data, 28, true);
    parameters = filter_data.filteredobject;
    var xparams = filter_data.output;  // xtra parameters will be left overs..will be used for further $ands to query
    var extracommands=xparams.command; // any other commands in xtraparams to extracommands
    delete xparams.command;

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
                    "count":""
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
                    etEnvironment.execute({'executethis': 'getwid','wid': wid,'command.executetype':'series'}, function (err, widObject) {
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
                    etEnvironment.execute(
                        {'executethis': 'getwid','wid': qparms['mongomultiplequery'],'command.executetype':'series'},
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
                                        etEnvironment.execute(
                                            {'executethis': 'getwid','wid': w,'command.executetype':'series'},
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
                proxyprinttodiv('querywid error **********', err, 99, true);
                callback(err, res);
            } 
            else 
            {
                proxyprinttodiv('querywid just before finalformat output--', output, 28, true); 
                finalformat(output, relationshipoutput, qparms, extracommands, projection, command, function (err, res) {
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
        proxyprinttodiv('querywid getprojectionresult *****', sourcerecord, 99, true, true);
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





function finalformat(output, relationshipoutput, qparms, extracommands, projection, command, callback) {
    proxyprinttodiv('querywid finalformat qparms', qparms, 28, true);
    var queryconvertmethod = extracommands.queryconvertmethod;
    var excludeparameters = qparms.mongosetfieldsexclude;
    var db = command.db;
    var finaloutput = [];
    proxyprinttodiv('finalformat top output', output, 28, true);
    proxyprinttodiv('finalformat top relationshipoutput', relationshipoutput, 28, true);
    proxyprinttodiv('querywid finalformat excludeparameters', excludeparameters, 28);

    if (config.configuration.environment==="local")
    {
        // server handles these normally
        var pagenumber = extracommands.finalpagenumber || extracommands.pagenumber || 1;
        var perpage = extracommands.finalperpage || extracommands.perpage; // || 50;
        var skipval = extracommands.finalskip || extracommands.skip || pagenumber > 0 ? (pagenumber-1)*perpage : 0;
        var limitval = extracommands.finallimit || extracommands.limit || perpage || 0;  // 0 is all 
        var sortobj = extracommands.finalsort || extracommands.sort || {};
        var count = extracommands.finalcount || extracommands.count || false;
        
        if (count)
        {
            proxyprinttodiv('querywid finalformat count *******', sortobj, 99, true, true);
            callback(null, {"n":resultlist.length, "ok":1}); // { "n" : 13, "ok" : 1 }
        }
        else // if real query
        {
            if (!skipval) {skipval=0}
            proxyprinttodiv('querywid finalformat sortobj', sortobj, 28, true, true);
            proxyprinttodiv('querywid finalformat limitval', limitval, 28, true, true);
            proxyprinttodiv('querywid finalformat skipval', skipval, 28, true, true);
            if (Object.keys(sortobj).length > 0) {output.sort(dynamicsortmultiple(sortobj))};
            if (limitval===0 && skipval !==0) {output = output.slice(skipval);}
            if (limitval!==0 && skipval !==0) {output = output.slice(skipval, limitval);}
        }
    }
    proxyprinttodiv('finalformat top output MIDDLE', output, 28, true, true);

    for (var eachout in output)
    {
        var wid = output[eachout][db].wid || output[eachout].wid;
        //var wid = output[eachout][db] ? output[eachout][db].wid : output[eachout].wid;
        proxyprinttodiv('querywid finalforma wid', wid, 28);
        // only proceed if current paramter is not in exclude parameter set
        proxyprinttodiv('querywid finalformat', output[eachout], 28);
        proxyprinttodiv('querywid finalformat excludeparameters[wid]', excludeparameters[wid], 28);
        if (!excludeparameters[wid])
        {
            // first search for wid in relationshipoutput
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
            var enhancedrecord = convertfromdriformatenhanced(output[eachout], command, foundrecord);

            if (config.configuration.environment==="local" && Object.keys(projection).length > 0) // server handles projection
            {
                proxyprinttodiv('querywid finalformat projection *****', sortobj, 99, true, true);
                enhancedrecord = getprojectionresult(enhancedrecord, projection);
            }

            proxyprinttodiv('querywid finalformat enhancedrecord', enhancedrecord, 28, true);
            proxyprinttodiv('querywid queryconvertmethod', queryconvertmethod, 28);


            // now convert teach record based on query convertmethod
            if (queryconvertmethod === "object")
            {
                finaloutput.push(enhancedrecord);
                proxyprinttodiv('querywid finaloutput after queryconvertmethod = ' + queryconvertmethod, finaloutput, 28);
            }
            else if (queryconvertmethod === "each")
            {
                var temp = {};
                temp[output[eachout].wid]=enhancedrecord;
                finaloutput.push(temp);
                proxyprinttodiv('querywid finaloutput after queryconvertmethod = ' + queryconvertmethod, finaloutput, 28);
            }
        }
    }
    var temp = {};
    if (extracommands.queryresult) {temp[extracommands.queryresult] = finaloutput} else {temp=finaloutput}
    proxyprinttodiv('querywid finaloutput', temp, 28, true);
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



