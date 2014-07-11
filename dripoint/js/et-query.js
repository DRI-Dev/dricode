// copyright (c) 2014 DRI
// require('../utils/addget.js');
// require('../config.js');

// external functions are testquery, querywid, relationShipQuery, aggregationQuery, addonQuery(
// FYI we now call proxyprinttodiv which is in config that calls printtodiv


exports.testquery = testquery = function testquery(parameters) {
    parameters["IAMALIVE"] = "hello";
    proxyprinttodiv('testquery parameters', parameters, true);
    return parameters;
};

exports.querywidmaster = querywidmaster = function querywidmaster(params, callback) {
    querywid(params, function (err, results) {
        var formattedResults = [];

        for (var i = 0; i < results.length; i++) {
            var thisObj = {};

            for (var prop in results[i]) {
                if (results[i].hasOwnProperty(prop)) {
                    if (results[i][prop] instanceof Object
                        && results[i][prop] !== null
                        && prop.toLowerCase() !== 'metadata'
                        && prop.toLowerCase() !== 'command') {
                        extend(true, thisObj, results[i][prop]);
                    }
                    else if (prop.toLowerCase() === 'metadata') {
                        thisObj.metadata = results[i][prop];
                    }
                    else if (prop.toLowerCase() === 'command') {
                        thisObj.command = results[i][prop];
                    }

                    formattedResults.push(thisObj);
                }
            }
        }

        callback(err, formattedResults);
    });
};

//Starting of querywid function...formerly MongoDataQuery

exports.querywid = querywid = function querywid(parameters, callback) { 
    // Fish out params
    proxyprinttodiv('querywid parameters', parameters, 99);
    //try {
    var inbound_parameters_107 = arguments;

    delete parameters['executethis']; 

    var output = [];
    var mQueryString = "";

    var filter_data = getcommand(parameters, {
            "command":{
                "datastore": config.configuration.defaultdatastore,
                "collection":config.configuration.defaultcollection,
                "db":config.configuration.defaultdb,
                "databasetable":config.configuration.defaultdatabasetable,
                "convertmethod":"toobject",
                "keepaddthis":true
            }
        }, {
            "command":{
                "datastore": "",
                "collection":"",
                "db":"",
                "databasetable":"",
                "convertmethod":"",
                "environment":"",
                "keepaddthis":""
            }
        },
        true);

    var command = filter_data.filteredobject.command;
    parameters = filter_data.output;

    var filter_data = getcommand(parameters, {
            "mongowid": "",
            "mongorawquery": "",
            "mongoquerywid": "",
            "mongosinglequery": "",
            "mongomultiplequery": "",
            "mongorelationshipdirection": "",
            "mongorelationshiptype": "",
            "mongorelationshipmethod": "",
            "mongorelationshiprawquery": "",
            "mongorelationshiplink": "",
            "mongorelationshipquery": "",
            "mongodtotype": "",
            "mongorelquery": "",
            "mongoaggregation": "",
            "mongoaggquery": "",
            "mongosetfieldsinclude": "",
            "mongosetfieldsexclude": "",
            "mongosetlimit": "",
            "mongosetskip": "",
            "mongosethint": "",
            "mongosetmax": "",
            "mongosetsortby": "",
            "mongoreturncount": "",
            "mongoexplain": "",
            "mongosize": "",
            "mongosetsortorder": "",
            "mongowidmethod": ""
        },{
            "mongowid": "",
            "mongorawquery": "",
            "mongoquerywid": "",
            "mongosinglequery": "",
            "mongomultiplequery": "",
            "mongorelationshipdirection": "",
            "mongorelationshiptype": "",
            "mongorelationshipmethod": "",
            "mongorelationshiprawquery": "",
            "mongorelationshiplink": "",
            "mongorelationshipquery": "",
            "mongodtotype": "",
            "mongorelquery": "",
            "mongoaggregation": "",
            "mongoaggquery": "",
            "mongosetfieldsinclude": "",
            "mongosetfieldsexclude": "",
            "mongosetlimit": "",
            "mongosetskip": "",
            "mongosethint": "",
            "mongosetmax": "",
            "mongosetsortby": "",
            "mongoreturncount": "",
            "mongoexplain": "",
            "mongosize": "",
            "mongosetsortorder": "",
            "mongowidmethod": ""
        },
        true);

    var qparms = filter_data.filteredobject;
    var xparms = filter_data.output;

    console.log(" ********** COMMAND ******** " );
    console.log(command );

    /// adding usernamespace 
    if(command && command.usernamespace && command.usernamespaceflag){
        var userns = command.usernamespace;
        var usernsflag = command.usernamespaceflag;

        var critiriajsonarray = [];

        for(var key in userns){
            // is the flag set, is it true
            var isallowed = (usernsflag[key] && usernsflag[key] == "true");

            // add the keys after checking if the flags are true
            if(isallowed && userns){
                critiriajsonarray.push(key,userns['key']);
            }
        }

        //
        var queryjson = {};
        queryjson['$and']=critiriajsonarray;
        // qparms.push(queryjson);
    }


    proxyprinttodiv('querywid command', command, 99);
    proxyprinttodiv('querywid qparms', qparms, 99);
    proxyprinttodiv('querywid xparms', xparms, 99);


    var ListOfLists = [];
    var database = {};
    var queryresults = {};
    var wid;
    var environmentdb = command["db"];
    var extraparameters = {};

    proxyprinttodiv('querywid command[mongorawquery]', qparms['mongorawquery'], 99);
    proxyprinttodiv('querywid command[mongowid]', qparms['mongowid'], 99);

    if (!((qparms['mongosinglequery'] !== undefined && qparms['mongosinglequery'] !== "") ||
        (qparms['mongowid'] !== undefined && qparms['mongowid'] !== "") ||
        (qparms['mongorawquery'] !== undefined && qparms['mongorawquery'] !== "") ||
        (qparms['mongomultiplequery'] !== undefined && qparms['mongomultiplequery'] !== ""))) {
        callback(undefined, []);
    } else {
        async.series([
            function step01(cb) {

                // Use single to set up a query with the params of 1 wid
                if (qparms['mongosinglequery'] !== "") {
                    console.log('singlemongoquery => ' + qparms['mongosinglequery']);
                    var wid = qparms['mongosinglequery'];
                    execute({
                        'executethis': 'getwid',
                        'wid': wid
                    }, function (err, res) {
                        // If error, bounce out
                        if (err && Object.keys(err).length > 0) {
                            cb(err, res);
                        } else {
                            try {
                                var widObject = res;
                                delete widObject['wid'];
                                delete widObject['metadata.method'];
                                mQueryString = BuildSingleQuery(widObject, "or", environmentdb);
                                proxyprinttodiv('Function MongoDataQuery singlemongoquery : ', mQueryString, 17);

                                mquery(mQueryString, {}, command, function (err, res) {
                                    // If error, bounce out
                                    if (err && Object.keys(err).length > 0) {
                                        cb(err, res);
                                    } else {
                                        //
                                        output = res;
                                        //output = formatlist(res, "wid", "wid");  &&& takenout by roger
                                        cb(null, "step01");
                                    }
                                });

                            } catch (err) {
                                var finalobject = createfinalobject({
                                    "result": "getwid_executethis"
                                }, {}, "getwid_executethis", err, inbound_parameters_107);
                                cb(finalobject.err, finalobject.res);
                            }
                        }
                    })
                } else if (qparms['mongomultiplequery']) {
                    output = "";
                    var paramList = {};
                    wid = qparms['mongomultiplequery'];

                    execute({
                        'executethis': 'getwid',
                        'wid': wid
                    }, function (err, res) {
                        // If error, bounce out
                        if (err && Object.keys(err).length > 0) {
                            callback(err, res);
                        } else {
                            try {
                                var listOfWids = res;
                                delete listOfWids["wid"];
                                delete listOfWids["metadata.method"];
                                proxyprinttodiv('Function MongoDataQuery listOfWids : ', listOfWids, 17);

                                var i = 0;
                                ListOfLists = [];
                                var todolist = [];
                                for (var w in listOfWids) {
                                    todolist.push(w);
                                }

                                async.mapSeries(todolist, function (w, cbMap) {
                                        async.nextTick(function () {
                                            execute({
                                                'executethis': 'getwid',
                                                'wid': w
                                                //getwid({
                                                //    'wid': w
                                            }, function (err, res) {
                                                // If error, bounce out
                                                if (err && Object.keys(err).length > 0) {
                                                    cbMap(err, res);
                                                } else {
                                                    try {
                                                        var tempwid = res;
                                                        delete tempwid["wid"];
                                                        delete tempwid["metadata.method"];
                                                        // for (var t in tempwid) {
                                                        //     paramList[t] = tempwid[t];
                                                        // }
                                                        ListOfLists.push(tempwid);
                                                        paramList = {};

                                                        cbMap(null, "map");
                                                    } catch (err) {
                                                        var finalobject = createfinalobject({
                                                            "result": "getwid_executethis_async_getwid"
                                                        }, {}, "getwid_executethis_async_getwid", err, res);
                                                        cbMap(finalobject.err, finalobject.res);
                                                    }
                                                }
                                            });
                                        });

                                    },

                                    function (err, res) {
                                        // If error, bounce out
                                        if (err && Object.keys(err).length > 0) {
                                            cb(err, res);
                                        } else {
                                            try {
                                                if (command) {
                                                    ListOfLists.push(command);
                                                }
                                                mQueryString = BuildMultipleQuery(command, "and", "or", environmentdb);
                                                proxyprinttodiv('querywid mQueryString init', mQueryString, 17);

                                                // if (validParams(mQueryString)) {
                                                mquery(mQueryString, {}, command, function (err, res) {
                                                    // If error, bounce out
                                                    if (err && Object.keys(err).length > 0) {
                                                        cb(err, res);
                                                    } else {
                                                        //
                                                        output = res;
                                                        //output = formatlist(res, "wid", "wid");  &&& takenout by roger
                                                        cb(null, 'step01');
                                                    }
                                                });

                                            } catch (err) {
                                                var finalobject = createfinalobject({
                                                    "result": "getwid_executethis_async"
                                                }, {}, "getwid_executethis_async", err, res);
                                                cb(finalobject.err, finalobject.res);
                                            }
                                        }
                                    });
                            } // end try
                            catch (err) {
                                var finalobject = createfinalobject({
                                    "result": "getwid_executethis_step1"
                                }, {}, "getwid_executethis_step1", err, res);
                                cb(finalobject.err, finalobject.res);
                            }
                        } // end else
                    });
                } else if (qparms['mongorawquery'] !== "") {

                    // throw ({'Sample_error': 'querywid_async_step01_else if'});

                    console.log('mongorawquery => ' + JSON.stringify(qparms['mongorawquery']));
                    // mQueryString = qparms['mongorawquery'];

                    var xparams = queryjson;
                    // check if and stuc conditions in metadata need to be added to the
                    if(xparams){
                        // BuildSingleQuery(parameters, innerquerytype, preamble);
                        mQueryString = BuildSingleQuery([xparams,qparms['mongorawquery']], "and", environmentdb); 
                    }else {
                        mQueryString = qparms['mongorawquery'];
                    }

                    console.log('mQueryString at step01 => ' + JSON.stringify(mQueryString));
                    //debugfn("querywid before mQueryString1", "querywid", "query", "mid", getglobal("debugcolor"), getglobal("debugindent"), debugvars([5]));
                    proxyprinttodiv('querywid mQueryString second', mQueryString, 17);

                    // if we are not dealing with the default collection then
                    // preform a find and replace in the query string
                    // this may need to be moved
                    if(environmentdb !== "data") {
                        var s = JSON.stringify(mQueryString);
                        s.replace("data", environmentdb);
                        mQueryString = JSON.parse(s);
                    }

                    // if (validParams(mQueryString)) {
                    mquery(mQueryString, {},  command, function (err, res) {
                        // If error, bounce out
                        if (err && Object.keys(err).length > 0) {
                            cb(err, res);
                        } else {
                            //
                            output = res;
                            //output = formatlist(res, "wid", "wid");  &&& takenout by roger
                            console.log(' *** get primary wids *** ' + JSON.stringify(output));
                            //debugfn("move queParams to output", "querywid", "query", "mid", getglobal("debugcolor"), getglobal("debugindent"), debugvars([4]));
                            cb(null, "step01");
                        }
                    });

                } else {
                    if (!output)
                        output = {};
                    cb(null, "step01");
                }
            },

            function step02(cb) {

                // throw ({'Sample_error': 'querywid_async_step02'});

                // Primary Wid Section **********
                if (qparms['mongowid'] !== undefined) {
                    console.log('mongowid = > ' + JSON.stringify(qparms['mongowid']));
                    //proxyprinttodiv('querywid output before format list mongowid', queParams, 17);
                    output = formatlist(output, "wid", "wid", environmentdb);
                    proxyprinttodiv('querywid output before mongowid', output, 17);
                    if (output === JSON.stringify([{}])) {
                        output = [];
                    }

                    output.push({
                        'wid': qparms['mongowid']
                    });

                    proxyprinttodiv('querywid output after mongowid', output, 17);

                    cb(null, "step02");
                } else {
                    if (!output)
                        output = {};
                    cb(null, "step02");
                }
            },

            function step03(cb) {

                // throw ({'Sample_error': 'querywid_async_step03'});

                // Relationship Section **********
                // Skip if there are no relParams

                if (  ( qparms["mongorelationshipdirection"] !== "" ||
                    qparms["mongorelationshiptype"] !== "" ||
                    qparms["mongorelationshipmethod"] !== "" ||
                    qparms["mongorelationshiprawquery"] !== "" ||
                    qparms["mongorelationshiplink"] !== "" ||
                    qparms["mongorelationshipquery"] !=="" ||
                    qparms["mongodtotype"] !== "" ||
                    qparms["mongorelquery"] !== ""
                    )  && (Object.keys(output).length > 0) ) {
                    if (qparms['mongowid'] === undefined) { // convert it because it had not been converted yet
                        output = formatlist(output, "wid", "wid", environmentdb);
                    }
                    //debugfn("querywid step03", "querywid", "query", "mid", getglobal("debugcolor"), getglobal("debugindent"), debugvars([5]));

                    proxyprinttodiv('querywid output before rel', output, 99);

                    //mQueryString = relationShipQuery(relParams, output, "data");
//                    mQueryString = relationShipQuery(command, output, "data");
                    mQueryString = relationShipQuery(parameters, output, "data");

                    proxyprinttodiv('mQueryString at step03 =>', mQueryString, 99);
                    if (mQueryString !== "" && Object.keys(JSON.parse(mQueryString)).length > 0) {
                        mquery(mQueryString, {}, command, function (err, res) {
                            // If error, bounce out
                            if (err && Object.keys(err).length > 0) {
                                cb(err, res);
                            } else {
                                //
                                // console.log(" result from step03 " + JSON.stringify(res));
                                output = res;
                                //debugfn("relationship", "rawmongoquery", "query", "middle", getglobal("debugcolor"), getglobal("debugindent"), debugvars([4]));
                                cb(null, "step03");
                            }
                        });

                    } else {
                        cb(null, "step03");
                    }
                } else {
                    if (!output)
                        output = {};
                    cb(null, "step03");
                }

            },

            function step04(cb) {

                // throw ({'Sample_error': 'querywid_async_step04'});

                // Relationship Section **********
                // Skip if there are no relParams

                if (qparms["mongorelationshipdirection"]) { // added 1/22
                    if (qparms["mongorelationshipdirection"] === 'forward') {
                        // get a copy of relationship records
                        extraparameters = copylist(output, null, "secondarywid", environmentdb);
                        output = formatlist(output, "secondarywid", "wid", environmentdb);
                    }
                    if (qparms["mongorelationshipdirection"] === 'backward') {
                        // get a copy of relationship records
                        extraparameters = copylist(output, null, "primarywid", environmentdb);
                        output = formatlist(output, "primarywid", "wid", environmentdb);
                    }
                }
                proxyprinttodiv('querywid before after rel output', output, 17);

                var relafterParams={};
                relafterParams["mongowidmethod"] = qparms["mongowidmethod"];
                proxyprinttodiv('relafterParams before after rel output', relafterParams, 17);

                console.log('[[[[[[[[[[[[[[[[[[[[[[\n' + JSON.stringify(relafterParams, '-', 4));
                var flg = false;
                for (var r in relafterParams) {
                    if (relafterParams[r].length > 0) flg = true;
                }

                if (flg && (output) && (output.length > 0)) {
                    // console.log('>>> ' + JSON.stringify(output))

                    mQueryString = queryafterrelationship(command, output);
                    proxyprinttodiv('querywid after queryafterrelationship mQueryString', mQueryString, 17);
                    // console.log('mQueryString at step04 => ' + mQueryString);
                    //mongoquery(JSON.parse(mQueryString), function (res) {
                    //debugfn("step04", "querywid", "query", "mid", getglobal("debugcolor"), getglobal("debugindent"), debugvars([5]));

                    if (Object.keys(JSON.parse(mQueryString)).length > 0) {
                        mquery(mQueryString, {}, command, function (err, res) {
                            // If error, bounce out
                            if (err && Object.keys(err).length > 0) {
                                cb(err, res);
                            } else {
                                //
                                output = res;
                                //debugfn("post relationship query", "rawmongoquery", "query", "end", getglobal("debugcolor"), getglobal("debugindent"), debugvars([4]));
                                cb(null, "step04");
                            }
                        });
                    } else {
                        cb(null, "step04");
                    }
                } else {
                    //output = {};
                    cb(null, "step04");
                }

            }

        ],

            function (err, res) {
                // If error, bounce out
                if (err && Object.keys(err).length > 0) {
                    callback(err, res);
                } else {

                    // throw ({'Sample_error': 'querywid_async_final'});

                    console.log('completed tasks asynchronously in querywid ');
                    console.log('output is ' + JSON.stringify(output));
                    //debugfn("final", "querywid", "query", "end", getglobal("debugcolor"), getglobal("debugindent"), debugvars([6]));

                    proxyprinttodiv('querywid before output', output, 17);
                    //proxyprinttodiv('querywid before output aggParams', aggParams, 17);
                    var aggParams={"mongosetfieldsexclude" : qparms["mongosetfieldsexclude"]};
                    formatListFinal(output, environmentdb, extraparameters, aggParams, command, function (err, output) {
                        // If error, bounce out
                        if (err && Object.keys(err).length > 0) {
                            callback(err, output);
                        } else {
                            //
                            proxyprinttodiv('querywid after output', output, 17);


                            callback(null, output);
                        }
                    });
                }
            });
    }



    function formatlist(inlist, parmnamein, parmnameout, environmentdb) {
        var inbound_parameters = JSON.parse(JSON.stringify(arguments));

        var output = [];
        var widvalue;
        var item;
        var obj = {};
        var wid = {};

        if (inlist === undefined || inlist.length === 0) {
            return [];
        } else {

            for (var i in inlist) { // changed by roger &&&
                item = inlist[i];

                item = ConvertFromDOTdri(item);
                if (!database[item.wid]) {
                    database[item.wid] = item;
                }


                proxyprinttodiv('querywid formatlist item ', item, 17);

                if (parmnameout !== "wid") {
                    widvalue = item[environmentdb][parmnameout];
                } else {
                    widvalue = "wid";
                }

                proxyprinttodiv('querywid formatlist widvalue ', widvalue, 17);
                obj = {};

                if (parmnamein === "wid") {
                    obj[widvalue] = item[parmnamein];
                } else {
                    if (parmnamein) {
                        obj[widvalue] = item[environmentdb][parmnamein];
                    } else {
                        obj[widvalue] = item[environmentdb];
                    }
                }

                // database[widvalue] = obj[widvalue];

                proxyprinttodiv('querywid formatlist obj[widvalue] ', obj[widvalue], 17);

                if (parmnameout === "wid") {
                    output.push(obj); // [{x:{}}, {x:{}}, {x:{}}]
                } else {
                    output[widvalue] = obj[widvalue];
                    //[x:{}, x:{}, x:{}]
                }

            }
            proxyprinttodiv('querywid formatlist output ', output, 17);


            return output;
        }
    }

    // takes inlist, looks for wid, then goes to main database to get a get clean complete converted copy of that wid
    // also looks in extra paramters, append information found about that wid to results also

    function formatListFinal(inlist, environmentdb, extraparameters, command, command, callback) {
        //try {
        // proxyprinttodiv('querywid finalformatlist aggParams ', aggParams, 17);
        var inbound_parameters_120 = JSON.parse(JSON.stringify(arguments));

        var output = [];
        //var keycollection = "DRIKEY";
        var record;
        var widrecord;
        var extrarecord = {};
        var todolist = [];
        var excludeset = {};
        if (qparms["mongosetfieldsexclude"] && Object.keys(qparms["mongosetfieldsexclude"]).length !== 0) {
            excludeset = qparms["mongosetfieldsexclude"];
            proxyprinttodiv('querywid finalformatlist excludeset ', excludeset, 17);
        }

        if (inlist === undefined || inlist.length === 0) {
            callback(null, []);
        } else {

            proxyprinttodiv('querywid finalformatlist inlist ', inlist, 17);
            proxyprinttodiv('querywid finalformatlist extraparameters ', extraparameters, 17);

            proxyprinttodiv('querywid database ', database, 17);
            var obj = {};
            for (var eachresult in inlist) {
                obj[inlist[eachresult]['wid']] = "xxx"; //VALUE does not matter, we are concerned ony with the key
            }

            var arrKeys = Object.keys(obj);
            console.log(arrKeys);
            proxyprinttodiv('>>>>>>> querywid arrKeys  ', arrKeys, 17);
            todolist = arrKeys;
            async.mapSeries(todolist, function (wid, cbMap) {
                    async.nextTick(function () {
                        record = {};
                        proxyprinttodiv('querywid finalformatlist wid ', wid, 17);



                        async.series([
                            function (cb1) {
                                if (!database[wid]) {
                                    execute({
                                        'executethis': 'getwid',
                                        'wid': wid
                                    }, function (err, res) {
                                        widrecord = res;
                                        cb1(null);
                                    });
                                } else {
                                    widrecord = []
                                    widrecord[0] = database[wid];
                                    cb1(null);
                                }
                            },


                            function (cb1) {
                                proxyprinttodiv('querywid finalformatlist widrecord ', widrecord, 17);
                                var widrecordFixed = {};
                                widrecordFixed['data'] = widrecord[0];
                                widrecordFixed['metadata'] = widrecord[0]['metadata'];
                                widrecordFixed['wid'] = widrecord[0]['wid'];
                                extrarecord[environmentdb] = extraparameters[wid];
                                delete widrecord[0]['wid'];
                                delete widrecord[0]['metadata'];
                                widrecord = widrecordFixed;

                                proxyprinttodiv('querywid finalformatlist widrecord', convertfromdriformat(widrecord), 17);
                                proxyprinttodiv('querywid finalformatlist extraparameters[wid]', extrarecord, 17);
                                // widrecord = extend(true, widrecord, extrarecord); // commented out by joe
                                // when extending widrecord data should overwrite extrarecord data
                                // also this should only append data from relationship records (linktype)
                                // widrecord = extend(true, extrarecord, widrecord);// Commented by Suarabh
                                widrecord = extend(true, widrecord, extrarecord);
                                proxyprinttodiv('querywid finalformatlist widrecord after ', widrecord, 17);

                                if (command.convertmethod === "toobject") {
                                    record[wid] = convertfromdriformat(widrecord, command);
                                } else {
                                    record[wid] = widrecord;
                                }
                                cb1(null);
                            }


                            ,
                            function (cb1) {
                                proxyprinttodiv('querywid finalformatlist excludeset ', excludeset, 17);
                                if (!excludeset[wid]) {
                                    output.push(record);
                                    cb1(null);
                                } else {
                                    cb1(null);
                                }
                            }
                        ],

                            function (err, res) {
                                cbMap(null);
                            });

                    }); // next tick
                },

                function (err, res) {
                    // If error, bounce out
                    if (err && Object.keys(err).length > 0) {
                        callback(err, res);
                    } else {
                        //
                        proxyprinttodiv('querywid finalformatlist output', output, 17);
                        callback(null, output)
                    }
                }); // mapseries
        } // if

    }

};



function copylist(inlist, parmnamein, parmnameout, environmentdb) {
    var inbound_parameters = JSON.parse(JSON.stringify(arguments));

    var widvalue;
    var item;
    var obj = {};
    var wid = {};

    if (inlist === undefined || inlist.length === 0) {
        return [];
    } else {
        proxyprinttodiv('querywid copylist inlist ', inlist, 17);


        proxyprinttodiv('querywid copylist parmnameout ', parmnameout, 17);
        proxyprinttodiv('querywid copylist parmnamein ', parmnamein, 17);
        for (var i in inlist) { // changed by roger &&&
            item = inlist[i];

            item = ConvertFromDOTdri(item);
            proxyprinttodiv('querywid copylist item ', item, 17);

            widvalue = item[environmentdb][parmnameout];

            proxyprinttodiv('querywid copylist widvalue ', widvalue, 17);

            if (parmnamein) {
                obj[widvalue] = item[environmentdb][parmnamein];
            } else {
                obj[widvalue] = item[environmentdb];
            }

            proxyprinttodiv('querywid copylist obj ', obj, 17);


            //[x:{}, x:{}, x:{}]

        }
        proxyprinttodiv('querywid copylist obj ', obj, 17);

        //debugfn("copylist code generator", "copylist", "get", "code", 2, 1, {
        //    0: inbound_parameters,
        //    1: obj
        //}, 6);

        return obj;
    }
}

//in: key, value, preamble
//out STRING: {preamble.key: value}

function BuildSimpleQuery(key, value, preamble) {
    var inbound_parameters = JSON.parse(JSON.stringify(arguments));

    var result;
    //buildsimplequery, text in and out
    preamble = preamble + ".";

    result = "{\"" + key + "\":\"" + value + "\"}";



    return result;
}

// in parameters, preamble, outerquerytype
// will create a string query based on outerquerytype

function BuildSingleQuery(parameters, outerquerytype, preamble) {
    var inbound_parameters = JSON.parse(JSON.stringify(arguments));

    if (!(parameters instanceof Array)) {
        var arr = [];
        arr.push(parameters);
        parameters = arr;
    }
    proxyprinttodiv('querywid BuildSingleQuery parameters', parameters, 17);
    var parmarray = [];
    // buildsinglequery, (parameters, outerquerytype, preamble)
    // parameters can be list [{}]
    // or object {}
    // inside needs to be simple parameters a: b, c: d
    var returnString;
    if (!outerquerytype) {
        outerquerytype = "or";
    } // default if not sent in


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

    // returnString = ' {"$' + outerquerytype + '": [';

    // readded
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
    proxyprinttodiv('querywid buildsinglequery end', returnString, 17);



    return returnString;
}

// in list of parameters, outerquerytype, innerquerytype, preamble
// will create a string query based on outerquerytype

function BuildMultipleQuery(listofparameters, outerquerytype, innerquerytype, preamble) {
    var inbound_parameters = JSON.parse(JSON.stringify(arguments));

    //buildmultiplequery (listofparameters, outerquerytype, innerquerytype, preamble)
    //list of parameters must be list: [{}, [], [], {}]
    proxyprinttodiv('querywid buildmultiplequery listofparameters', listofparameters, 17);
    var returnString = "";
    var parameters;
    if (!outerquerytype) {
        outerquerytype = "and";
    } // default if not sent in
    if (!innerquerytype) {
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
    //for (var i = 0; i < listofparametersCount; i++) {
    //    if (listofparameters[i].length != 0) {
    for (var i in listofparameters) {
        // jan 22
        parameters = listofparameters[i];
        //            if (parameters instanceof Array) {
        //                parameters = parameters[0]
        //            };

        returnString += BuildSingleQuery(parameters, innerquerytype, preamble);
        if (returnString.lastIndexOf(',') !== (returnString.length - 1)) {
            returnString += ",";
        }
    }
    //}

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
    proxyprinttodiv('querywid buildmultiplequery end', returnString, 17);



    return returnString;
}


function queryafterrelationship(parameters, set2) {
    var inbound_parameters = JSON.parse(JSON.stringify(arguments));

    var set1 = [];
    var set3 = [];
    var mongowidmethod = parameters['mongowidmethod'];
    set1.push({
        "metadata.method": mongowidmethod
    });
    set3.push(set1);
    set3.push(set2);
    proxyprinttodiv('querywid queryafterrelationship set3', set3, 17);

    var result = BuildMultipleQuery(set3, 'and', 'or', null);

    return result;
}
// Starting of relationShipQuery function

function relationShipQuery(inputParameters, input, environmentdb) {
    var inbound_parameters = JSON.parse(JSON.stringify(arguments));

    proxyprinttodiv('Function relationShipQuery() Constant input : ', parameters);
    var output = {};
    // TODO: added this quick to clone, needs to use extend
    var parameters = JSON.parse(JSON.stringify(inputParameters));
    if (!environmentdb) {
        environmentdb = "data";
    }
    environmentdb = environmentdb + '.';

    // Simply checking to make sure all the data is here
    if (!(parameters.hasOwnProperty("mongorelationshipdirection") && parameters.hasOwnProperty("mongorelationshiptype"))) {
        //var txt = "";
        //txt += "Error Description: " + "Invalid Parameters in relationShipQuery" + "\n\n";
        //txt += "Click OK to continue. \n\n";
        return "";
    }
    // Pull out the correct vars
    if (isParameterLower(parameters, "mongorelationshipdirection")) {
        var direction = parameters["mongorelationshipdirection"];
        delete parameters["mongorelationshipdirection"];
    }
    if (isParameterLower(parameters, "mongorelationshiptype")) {
        var type = parameters["mongorelationshiptype"];
        delete parameters["mongorelationshiptype"];
    }
    // LM: TODO, take this out...belongs (and is, i think in add-ons)
    if (isParameterLower(parameters, "mongorelationshipmethod")) {
        var method = parameters["mongorelationshipmethod"];
        delete parameters["mongorelationshipmethod"];
    }
    if (isParameterLower(parameters, "mongorelationshiplink")) {
        var link = parameters["mongorelationshiplink"];
        delete parameters["mongorelationshiplink"];
    }

    if (isParameterLower(parameters, "mongowidmethod")) {
        var dtotype = parameters["mongowidmethod"];
        delete parameters["mongowidmethod"];
    }
    if (isParameterLower(parameters, "query")) {
        var query = parameters["query"];
        delete parameters["query"];
    }

    var queryset = [];
    //for(var i = 0;i < input.length; i++){
    for (var i in input) { // &&& change by roger
        if (input.hasOwnProperty(i)) {
            var q1 = {};
            var val = input[i]['wid'];
            if (direction === 'forward') {
                q1[environmentdb + "primarywid"] = val;
            } else {
                q1[environmentdb + "secondarywid"] = val;
                // q1= {environmentdb+"secondarywid": input[i]['wid']}
            }
            queryset.push(q1);
        }
    }

    if (dtotype) {
        queryset.push({
            "metadata.method": dtotype
        });
    }
    if (type) {
        var q2 = {};
        q2[environmentdb + "relationshiptype"] = type;
        queryset.push(q2);
    }
    if (link) {
        var q2 = {};
        q2[environmentdb + "linktype"] = type;
        queryset.push(q2);
    }
    querystring = BuildMultipleQuery(queryset, "and", "or", null);

    return querystring;
}
