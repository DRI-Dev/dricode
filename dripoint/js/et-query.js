// copyright (c) 2014 DRI
// to do make functions return objects, not strings

// returns [{},{}]
exports.querywidmaster = querywidmaster = function querywidmaster(params, callback) {
    params.command.queryconvertmethod = "object";
    proxyprinttodiv('querywidmaster', params, 28); 
	querywid(params, function (err, results) {
        callback(err, results);
    });
};

// returns list based on command.queryconvertmethod
exports.querywid = querywid = function querywid(inparameters, callback) { // can change to call back

    var parameters={}
    extend(true, parameters, inparameters)
    delete parameters.executethis;
    var etEnvironment = new DriEnvironment(parameters.command.environment);

    proxyprinttodiv('querywid parameters', parameters, 28);

    var filter_data = getcommand(parameters, 
            {"command":
                {
                "datastore": config.configuration.defaultdatastore,
                "collection":config.configuration.defaultcollection,
                "keycollection":config.configuration.defaultkeycollection,
                "db":config.configuration.defaultdb,
                "databasetable":config.configuration.defaultdatabasetable,
                "convert":"toobject",
                "keepaddthis":true,
                "queryconvertmethod":"each",
                "namespaceflag":false
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
            "monogoprojection":""
            },
            {"command":
                {
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
            "monogoprojection":""
            },
        true);

    proxyprinttodiv('querywid filteredobject', filter_data, 28, true);
    parameters = filter_data.filteredobject;
    var xparams = filter_data.output;  // xtra parameters will be left overs..will be used for further $ands to query
    var extracommands=xparams.command; // any other commands in xtraparams to extracommands
    delete xparams.command;
    var filter_data = getcommand(
            parameters, 
            {},
            {"command":{
                "datastore": "",
                "collection":"",
                "keycollection":"",
                "db":"",
                "databasetable":"",
                "convert":"",
                "keepaddthis":""
            }},
            true
            )
    proxyprinttodiv('querywid filteredobject II', filter_data, 28, true);
    var command= filter_data.filteredobject.command;    // commands for mquery
    var qparms = filter_data.output;                    // in essence commands for querywid

    var output = [];                                    // holds potenital output
    var outputlistofwids = [];                          // hold distilled list from output
    var relationshipoutput = [];                        // holds output of relationship call
    var mQueryString;                                   // current query to be sent to mquery
    var environmentdb = command.db; 
    var projection = qparms.monogoprojection;

    proxyprinttodiv('querywid command', command, 28, true);
    proxyprinttodiv('querywid qparms', qparms, 28, true);
    proxyprinttodiv('querywid xparams', xparams, 28, true);
    proxyprinttodiv('querywid extracommands', extracommands, 28, true);



    // 3 stages of query, results of one feed the next
    // raw, single, multiple
    // relationship
    // after relationship

    if (!qparms['mongosinglequery'] && !qparms['mongowid'] && !qparms['mongorawquery'] && !qparms['mongomultiplequery'])
    {
        callback(undefined, []); // if not starting parameters sent in the return
    } 
    else 
    {
        async.series([
            function step01(cb) {

                // Use single to set up a query with the params of 1 wid
                if (qparms['mongosinglequery']) 
                {
                    var wid = qparms['mongosinglequery'];
                    etEnvironment.execute({
                        'executethis': 'getwid',
                        'wid': wid,
                        'command.executetype':'series'
                        }, function (err, res) {
                        // If error, bounce out
                        if (err && Object.keys(err).length > 0) 
                        {
                            cb(err, res);
                        } 
                        else 
                        {
                            var widObject = res;
                            delete widObject.wid;
                            delete widObject.metadata;
                            // build a quyer based on the widObject
                            mQueryString = BuildSingleQuery(widObject, "or", environmentdb);
                            proxyprinttodiv('Function MongoDataQuery singlemongoquery : ', mQueryString, 28, true);
                            mquery(mQueryString, projection, command, function (err, res) {
                                // If error, bounce out
                                if (err && Object.keys(err).length > 0) {
                                    cb(err, res);
                                } else {
                                    output = res;
                                    cb(null, "step01");
                                }
                            });

                        }
                    })
                } 
                else if (qparms['mongomultiplequery']) 
                {
                    etEnvironment.execute({
                        'executethis': 'getwid',
                        'wid': qparms['mongomultiplequery'],
                        'command.executetype':'series'
                        }, function (err, res) {
                        // If error, bounce out
                        if (err && Object.keys(err).length > 0) 
                        {
                            callback(err, res);
                        } 
                        else 
                        {
                                var listOfWids = res;
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
                                        etEnvironment.execute({
                                            'executethis': 'getwid',
                                            'wid': w,                                                
                                            'command.executetype':'series'
                                        }, function (err, res) {
                                            // If error, bounce out
                                            if (err && Object.keys(err).length > 0) 
                                            {
                                                cbMap(err, res);
                                            } 
                                            else 
                                            {
                                                var tempwid = res;
                                                delete tempwid["wid"];
                                                delete tempwid.method;
                                                ListOfLists.push(tempwid);
                                                cbMap(null, "map");
                                                
                                            }
                                        });
                                    });
                                },

                                function (err, res) {
                                    // If error, bounce out
                                    if (err && Object.keys(err).length > 0) 
                                    {
                                        cb(err, res);
                                    } 
                                    else 
                                    {
                                        mQueryString = BuildMultipleQuery(ListOfLists, "and", "or", environmentdb);
                                        proxyprinttodiv('querywid mQueryString multiple', mQueryString, 28);
                                        mquery(mQueryString, projection, command, function (err, res) {
                                            // If error, bounce out
                                            if (err && Object.keys(err).length > 0) {
                                                cb(err, res);
                                            } else {
                                                //
                                                output = res;
                                                cb(null, 'step01');
                                            }
                                        });
                                    }
                                }); 
                        } // end else
                    });
                } 
                else if (qparms.mongorawquery || (extracommands.namespace && extracommands.namespaceflag))
                {
                    if(extracommands.namespaceflag){
                        var userns = extracommands.namespace;
                        var usernsflag = extracommands.namespaceflag;
                        var criteriajsonarray = [];

                        for(var key in userns){
                 
                            var isallowed = (usernsflag[key] && usernsflag[key] == "true");
                            if(isallowed && userns){
                                var jsonnamespaceobj = {};
                                jsonnamespaceobj["metadata.namespace." + key] = userns[key];
                                criteriajsonarray.push(jsonnamespaceobj);
                            }
                        }

                        var queryjson = {};
                        queryjson['$and']=criteriajsonarray;
                        // create a query based on criteriajsonarray, load as xtra parms for next step
                        xparams['$and'] = BuildSingleQuery([criteriajsonarray,qparms.mongorawquery], "and", environmentdb); 

                    }

                    // create a query based on xparams
                    if (xparams.length > 0)
                    {
                        mQueryString = BuildSingleQuery([xparams,qparms.mongorawquery], "and", environmentdb); 
                    }
                    else 
                    {
                        mQueryString = qparms.mongorawquery
                    }


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

                        if (err && Object.keys(err).length > 0) {
                            cb(err, res);
                        } else {
                            output = res;
                            cb(null, "step01");
                        }
                    });
                } 
                else 
                {
                    cb(null, "step01");
                }
            },

            function step02(cb) {

                // output will have full results so far
                // make outputlistofwids, just be the list of wids so far
                outputlistofwids = distilllist(output, 'wid', environmentdb);

                // Primary Wid Section **********
                if (qparms.mongowid) 
                {
                    outputlistofwids.push({'wid': qparms.mongowid});
                }
                
                proxyprinttodiv('querywid output after mongowid', outputlistofwids, 28, true);
                cb(null, "step02");
            },

            function step03(cb) {

                // Relationship Section **********
                // Skip if there are no relParams

                if (  ( qparms.mongorelationshipdirection !== "" ||
                        qparms.mongorelationshiptype !== "" ||
                        qparms.mongorelationshipmethod !== "" ||
                        qparms.mongorelationshiprawquery !== "" ||
                        qparms.mongorelationshiplink !== "" ||
                        qparms.mongorelationshipquery !=="" ||
                        qparms.mongodtotype !== "" ||
                        qparms.mongorelquery !== ""
                        )  && (outputlistofwids).length > 0 ) 
                {
                    proxyprinttodiv('querywid output before rel', outputlistofwids, 28, true);
                    mQueryString = relationShipQuery(qparms, outputlistofwids, environmentdb);
                    proxyprinttodiv('mQueryString at step03 =>', mQueryString, 28);
                    proxyprinttodiv('mQueryString at step03 => command', command, 28);
                    if (mQueryString) {
                        mquery(mQueryString, projection, command, function (err, res) {
                               proxyprinttodiv('mQueryString at step03 res',res, 28);
                            // If error, bounce out
                            if (err && Object.keys(err).length > 0) {
                                cb(err, res);
                            } else {
                                relationshipoutput = res;
                                cb(null, "step03");
                            }
                        });

                    } 
                    else 
                    {
                        output=[];
                        cb(null, "step03");
                    }
                } 
                else // if no relationship go to next section
                {
                    cb(null, "step03");
                }

            },

            function step04(cb) {
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
                        mQueryString = BuildSingleQuery(outputlistofwids, "and", environmentdb);
                    }
                    proxyprinttodiv('querywid after queryafterrelationship mQueryString', mQueryString, 28);
                    if (mQueryString) 
                    {
                        mquery(mQueryString, projection, command, function (err, res) {
                            // If error, bounce out
                            if (err && Object.keys(err).length > 0) {
                                cb(err, res);
                            } else {
                                //
                                output = res;
                                proxyprinttodiv('querywid end step 04 output', output, 28, true);
                                cb(null, "step04");
                            }
                        });
                    } 
                    else 
                    {
                        cb(null, "step04");
                    }
                    proxyprinttodiv('finalformat top output--55 should never hit or hit out of order', output, 28, true); 
                }
            }

        ],

        function (err, res) 
        {
            // If error, bounce out
            if (err && Object.keys(err).length > 0) 
            {
                callback(err, res);
            } 
            else 
            {
                proxyprinttodiv('querywid just before finalformat output--', output, 28, true); 
                finalformat(output, relationshipoutput, qparms, extracommands, command, callback)
            } // else
        } // last function
        ) // asynch
        } // else
    }


    function finalformat(output, relationshipoutput, qparms, extracommands, command, callback) {
        proxyprinttodiv('querywid finalformat qparms', qparms, 28, true);
        var queryconvertmethod = extracommands.queryconvertmethod
        var excludeparameters=qparms.mongosetfieldsexclude
        var db = command.db;
        var finaloutput = [];
        proxyprinttodiv('finalformat top output', output, 28, true); 
        proxyprinttodiv('finalformat top relationshipoutput', relationshipoutput, 28, true); 
        proxyprinttodiv('querywid finalformat excludeparameters', excludeparameters, 28);

        for (var eachout in output)
        {
            var wid = output[eachout][db].wid ||output[eachout].wid;
            // only proceed if current paramter is not in exclude parameter set
            proxyprinttodiv('querywid finalformat', output[eachout], 28);
            if (!excludeparameters[wid])
            {
                // first search for wid in relationshipoutput
                var foundrecord;
                for (var eachrecord in relationshipoutput)
                {
                    if (relationshipoutput[eachrecord][environmentdb].primarywid===wid ||
                        relationshipoutput[eachrecord][environmentdb].secondarywid===wid )
                    {
                        foundrecord = relationshipoutput[eachrecord];
                        break;
                    }
                }

                // then change and enhance the strucutre of the result
                var enhancedrecord = convertfromdriformatenhanced(output[eachout], command, foundrecord)
                proxyprinttodiv('querywid finalformat enhancedrecord', enhancedrecord, 28, true);
                // now convert teach record based on query convertmethod
                if (queryconvertmethod === "each") 
                {
                    finaloutput.push(enhancedrecord);
                }
                else if (queryconvertmethod === "object") 
                {
                    var temp = {}
                    temp[output[eachout].wid]=enhancedrecord;
                    finaloutput.push(temp)
                }
            }
        }
        proxyprinttodiv('querywid finaloutput', finaloutput, 28, true);
        callback(null, finaloutput)
    } // final format

    function distilllist(inlist, field, environmentdb) {
        var outlist = [];
        var temp={};
        for (var eachitem in inlist)
        {
            temp.wid=inlist[eachitem][environmentdb][field] || inlist[eachitem][field];
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
        return 
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
    var querystring

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



