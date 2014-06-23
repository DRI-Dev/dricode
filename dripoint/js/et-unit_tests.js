// copyright (c) 2014 DRI

var widtests = widtests || {};

function etunittesttester(params, callback) {
    var unittestdb = [ // Within    

        // Mid  -- testing the flow from pre to mid to post
        [{
                "fn": "ettestt1"
            },
            [{
                "category": "executethis",
                "subcategory": "dothis",
                "type": "minute",
                "test": "executethis calling a function "
            }]
        ],

        // Pre, mid, post  -- testing the flow from pre to mid to post
        [{
                "fn": "ettestt2"
            },
            [{
                "type": "minute",
                "category": "execute",
                "subcategory": "dothis",
                "test": "executethis calling a function"
            }]
        ],

        // Pre, mid  -- testing the flow from pre to mid to post
        [{
                "fn": "ettestt3"
            },
            [{
                "type": "minute",
                "category": "execute",
                "subcategory": "dothis",
                "test": "executethis calling a function"
            }]
        ],

        // Mid, post  -- testing the flow from pre to mid to post
        [{
                "fn": "ettestt3a"
            },
            [{
                "type": "minute",
                "category": "execute",
                "subcategory": "dothis",
                "test": "executethis calling a function"
            }]
        ],

        // Mid, post  -- testing the flow from pre to mid to post
        [{
                "fn": "ettestt4"
            },
            [{
                "type": "minute",
                "category": "execute",
                "subcategory": "dothis",
                "test": "executethis calling a function"
            }]
        ],

        // Pre, Mid  -- testing the flow from pre to mid to post
        [{
                "fn": "ettestt4a"
            },
            [{
                "type": "minute",
                "category": "execute",
                "subcategory": "dothis",
                "test": "executethis calling a function"
            }]
        ],

        // Pre, mid, post  -- testing the flow from pre to mid to post
        [{
                "fn": "ettestt5"
            },
            [{
                "type": "minute",
                "category": "execute",
                "subcategory": "dothis",
                "test": "executethis calling a function"
            }]
        ],

        // Pre, mid, post  -- testing the flow from pre to mid to post
        [{
                "fn": "ettestt6"
            },
            [{
                "type": "minute",
                "category": "execute",
                "subcategory": "dothis",
                "test": "executethis calling a function"
            }]
        ],

        // This astt section is doing the same tests as the tt tests above...the
        // difference is that these pre, mid, and post calls will wait, or sleep for
        // a about 1/2 a second...this is to simulate latency in communicating with
        // the db. So we are testing the robustness of the async capacities of the system.

        // Mid  -- testing the flow from pre to mid to post
        [{
                "fn": "ettestast1"
            },
            [{
                "type": "minute",
                "category": "execute",
                "subcategory": "dothis",
                "test": "executethis calling a function asynchronously"
            }]
        ],

        // Pre, mid, post  -- testing the flow from pre to mid to post
        [{
                "fn": "ettestast2"
            },
            [{
                "type": "minute",
                "category": "execute",
                "subcategory": "dothis",
                "test": "executethis calling a function asynchronously"
            }]
        ],

        // Call async_func_b with only pre async_func_a...is it ok to not call post...yes it is.
        [{
                "fn": "ettestast3"
            },
            [{
                "type": "minute",
                "category": "execute",
                "subcategory": "dothis",
                "test": "executethis calling a function asynchronously"
            }]
        ],

        // Mid, post  -- testing the flow from pre to mid to post    
        [{
                "fn": "ettestast3a"
            },
            [{
                "type": "minute",
                "category": "execute",
                "subcategory": "dothis",
                "test": "executethis calling a function asynchronously"
            }]
        ],

        // Mid, post  -- testing the flow from pre to mid to post    
        [{
                "fn": "ettestast4"
            },
            [{
                "type": "minute",
                "category": "execute",
                "subcategory": "dothis",
                "test": "executethis calling a function asynchronously"
            }]
        ],

        // Pre, Mid  -- testing the flow from pre to mid to post
        [{
                "fn": "ettestast4a"
            },
            [{
                "type": "minute",
                "category": "execute",
                "subcategory": "dothis",
                "test": "executethis calling a function asynchronously"
            }]
        ],

        // Pre, mid, post  -- testing the flow from pre to mid to post
        [{
                "fn": "ettestast5"
            },
            [{
                "type": "minute",
                "category": "execute",
                "subcategory": "dothis",
                "test": "executethis calling a function asynchronously"
            }]
        ],

        // Pre, mid, post  -- testing the flow from pre to mid to post
        [{
                "fn": "ettestast6"
            },
            [{
                "type": "second",
                "category": "execute",
                "subcategory": "dothis",
                "test": "executethis calling a function asynchronously"
            }]
        ],

        // Ag tests will add data to the db and get it. The tests get progressively
        // more deep as the dto's begin to be applied in a more nested
        // fasion.

        // Add a dto with addwidmaster and get it with getwidmaster
        [{
                "fn": "ettestag1"
            },
            [{
                "type": "second",
                "category": "add get",
                "subcategory": "getwidmaster",
                "test": "to use addwidmaster and getwidmaster"
            }]
        ],

        // Add 2 wids using addwidmaster and get 1 wid of them with getwidmaster
        [{
                "fn": "ettestag2"
            },
            [{
                "type": "second",
                "category": "add get",
                "subcategory": "getwidmaster",
                "test": "to use addwidmaster and getwidmaster"
            }]
        ],

        // Add wids 3 levels deep with addwidmaster, and get a wid related with them 
        // by dto's using getwidmaster.
        [{
                "fn": "ettestag3"
            },
            [{
                "type": "second",
                "category": "add get",
                "subcategory": "getwidmaster",
                "test": "to use addwidmaster and getwidmaster"
            }]
        ],

        // The cctests pass various config data to manipulate either the config itself or simply
        // passing data to various components of config

        // Remap func for mid
        [{
                "fn": "ettestct1"
            },
            [{
                "type": "quasi",
                "category": "configuration",
                "subcategory": "remapping",
                "test": "remapping functions"
            }]
        ],

        // Remap funcs pre, mid, and post
        [{
                "fn": "ettestct2"
            },
            [{
                "type": "quasi",
                "category": "configuration",
                "subcategory": "remapping",
                "test": "remapping functions"
            }]
        ],

        // Remap funcs pre, mid
        [{
                "fn": "ettestct3"
            },
            [{
                "type": "quasi",
                "category": "configuration",
                "subcategory": "remapping",
                "test": "remapping functions"
            }]
        ],

        // Remap funcs mid, post
        [{
                "fn": "ettestct3a"
            },
            [{
                "type": "quasi",
                "category": "configuration",
                "subcategory": "remapping",
                "test": "remapping functions"
            }]
        ],

        // Remap funcs mid, post
        [{
                "fn": "ettestct4"
            },
            [{
                "type": "quasi",
                "category": "configuration",
                "subcategory": "remapping",
                "test": "remapping functions"
            }]
        ],

        // Remap funcs pre, mid
        [{
                "fn": "ettestct4a"
            },
            [{
                "type": "quasi",
                "category": "configuration",
                "subcategory": "remapping",
                "test": "remapping functions"
            }]
        ],

        // Remap funcs pre, mid, post
        [{
                "fn": "ettestct5"
            },
            [{
                "type": "quasi",
                "category": "configuration",
                "subcategory": "remapping",
                "test": "remapping functions"
            }]
        ],

        // Remap funcs pre, mid, post
        [{
                "fn": "ettestct6"
            },
            [{
                "type": "quasi",
                "category": "configuration",
                "subcategory": "remapping",
                "test": "remapping functions"
            }]
        ],

        // Remap funcs remaps pre in the config and calls mid
        [{
                "fn": "ettestct7"
            },
            [{
                "type": "daily",
                "category": "configuration",
                "subcategory": "config_params",
                "test": "sending config_params"
            }]
        ],

        // Config tryorder
        [{
                "fn": "ettestct8"
            },
            [{
                "type": "daily",
                "category": "configuration",
                "subcategory": "config_params",
                "test": "sending config_params"
            }]
        ],

        // Config will try to hook request for func that does not exist
        [{
                "fn": "ettestct9"
            },
            [{
                "type": "quasi",
                "category": "configuration",
                "subcategory": "does_not_exist",
                "test": "calling config data that does not exist"
            }]
        ],

        // Config will try to hook request for pre tat does not exist
        [{
                "fn": "ettestct10"
            },
            [{
                "type": "quasi",
                "category": "configuration",
                "subcategory": "does_not_exist",
                "test": "calling config data that does not exist"
            }]
        ],

        // Config will try to hook on pre and post requests that do not exist
        [{
                "fn": "ettestct11"
            },
            [{
                "type": "quasi",
                "category": "configuration",
                "subcategory": "does_not_exist",
                "test": "calling config data that does not exist"
            }]
        ],

        // Config will try to hook on pre and mid that dont exist and call a func that does exist
        [{
                "fn": "ettestct13"
            },
            [{
                "type": "quasi",
                "category": "configuration",
                "subcategory": "does_not_exist",
                "test": "calling config data that does not exist"
            }]
        ],

        // Config with param data for pre, mid, and post
        [{
                "fn": "ettestct14"
            },
            [{
                "type": "quasi",
                "category": "configuration",
                "subcategory": "config_params",
                "test": "sending config_params"
            }]
        ],

        // Testing param data to pre config, but overwritten in the args
        [{
                "fn": "ettestct15"
            },
            [{
                "type": "quasi",
                "category": "configuration",
                "subcategory": "config_conflict",
                "test": "sending config_params that conflict with other params"
            }]
        ],

        // Passing a config as the params of config
        [{
                "fn": "ettestct16"
            },
            [{
                "type": "quasi",
                "category": "configuration",
                "subcategory": "config_params",
                "test": "sending config_params"
            }]
        ],

        // Tests if executedefault gets used by calling a non-existing function
        [{
                "fn": "ettestct17"
            },
            [{
                "type": "hourly",
                "category": "configuration",
                "subcategory": "does_not_exist",
                "test": "calling config data that does not exist"
            }]
        ],

        // Tests if the pre config params are used
        [{
                "fn": "ettestct18"
            },
            [{
                "type": "hourly",
                "category": "configuration",
                "subcategory": "config_params",
                "test": "sending config_params"
            }]
        ],

        // Tests config params getting used by executethis
        [{
                "fn": "ettestct19"
            },
            [{
                "type": "hourly",
                "category": "configuration",
                "subcategory": "config_conflict",
                "test": "sending config_params that conflict with other params"
            }]
        ],

        // Tests confilicting config params
        [{
                "fn": "ettestct20"
            },
            [{
                "type": "hourly",
                "category": "configuration",
                "subcategory": "config_conflict",
                "test": "sending config_params that conflict with other params"
            }]
        ]
    ]

    var err;
    var subset = [];

    // iterate through unittestdb
    for (var i = 0; i < unittestdb.length; i++) {
        // check to see if params matches type in unittestdb
        if (unittestdb[i][1][0]['type'] === params['type']) {
            // push the fn name on the array_of_tests_to_run
            subset.push(unittestdb[i]);
        }
    }
    // console.log('-------------  subset: \n' + JSON.stringify(subset, '-', 4));

    executethismultiple(subset, function(err, result) {
        callback(err, result);
    });
}

// 888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
// 888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
// 888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888

// This is just a stub function to do a little work...really just a way to show that
// a function call can be made.
//exports.alertFn1 = alertFn1 = function alertFn1(params, callback) {
exports.alertFn1 = widtests.alertFn1 = alertFn1 = function alertFn1(params, callback) {

    // alert('ct7 has alerted');
    params["ct7"] = "did some alerting";
    // delete params["configuration"];
    var err;
    callback(err, params);
}
widtests.alertFn1.category = "execute";
widtests.alertFn1.subcategory = "daily";
widtests.alertFn1.js = exports.alertFn1;
widtests.alertFn1.description = "this does a test";

//88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
// 888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
// 888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888

// Required for the delay in testing the async portionis
//exports.sleep = sleep = function sleep(milliseconds) {
exports.sleep = widtests.sleep = sleep = function sleep(params, callback) {

    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}
widtests.sleep.category = "execute";
widtests.sleep.subcategory = "daily";
widtests.sleep.js = exports.sleep;
widtests.sleep.description = "this does a test";


exports.sample3 = widtests.sample3 = sample3 = function sample3(params, callback) {
    saveglobal("debugsubcat", "code");
    getclean({
        "wid": "wid1",
        "a": "b",
        "metadata": {
            "method": "DOT"
        }
    }, "DOT");
    debugfn("offlinegetwid code generator END", "ag2", "", "code", getglobal("debugcolor"), getglobal("debugindent"), {}, 9);
}
widtests.sample3.category = "execute";
widtests.sample3.subcategory = "daily";
widtests.sample3.js = exports.sample3;
widtests.sample3.description = "this does a test";


//function func_b2(p1, p2, p3, p4, callback) {
exports.func_b2 = widtests.func_b2 = func_b2 = function func_b2(p1, p2, p3, p4, callback) {

    data = {};
    delete p3['e'];
    data = jsonConcat(p3, p4);
    data[p1] = 'hello';
    var err;
    callback({}, data);
}
widtests.func_b2.category = "execute";
widtests.func_b2.subcategory = "daily";
widtests.func_b2.js = exports.func_b2;
widtests.func_b2.description = "this does a test";


//function func_b22(params, callback) {
exports.func_b22 = widtests.func_b22 = func_b22 = function func_b22(params, callback) {

    func_b2("test", {
            "r": "t",
            "x": "y"
        }, {
            "a": "b",
            "e": "z"
        }, {
            "c": "d",
            "more": "m"
        },
        callback);
}
widtests.func_b22.category = "execute";
widtests.func_b22.subcategory = "daily";
widtests.func_b22.js = exports.func_b22;
widtests.func_b22.description = "this does a test";

//function func_b3(p1, p2, p3, p4, callback) {
exports.func_b3 = widtests.func_b3 = func_b3 = function func_b3(p1, p2, p3, p4, callback) {

    data = {};
    data["a"] = p1;
    data["b"] = p2;
    data["c"] = p3;
    data["d"] = p4;

    callback({}, data);
}
widtests.func_b3.category = "execute";
widtests.func_b3.subcategory = "daily";
widtests.func_b3.js = exports.func_b3;
widtests.func_b3.description = "this does a test";


//function func_b33(params, callback) {
exports.func_b33 = widtests.func_b33 = func_b33 = function func_b33(params, callback) {

    func_b2("test", [{
            "a": "b",
            "x": "y"
        }], {
            "a": "b"
        }, [{
            "c": "d",
            "e": "z"
        }],
        callback);
}
widtests.func_b33.category = "execute";
widtests.func_b33.subcategory = "daily";
widtests.func_b33.js = exports.func_b33;
widtests.func_b33.description = "this does a test";


//exports.err1 = err1 = function err1 (params, callback) {
exports.err1 = widtests.err1 = err1 = function err1(params, callback) {

    saveglobal("debugsubcat", "code");
    execute({
        "executethis": "getwidmaster",
        "wid": "1",
        "command": {
            "parameters": {
                "test1": "1"
            },
            "status": "fail"
        }
    }, function(err, result) {
        proxyprinttodiv('Function err1 result ', result, 17);
        // debugfn("offlinegetwid code generator END",                  "ag2",    "",   "code", getglobal("debugcolor"), getglobal("debugindent"), {}, 9);
    });
}
widtests.err1.category = "execute";
widtests.err1.subcategory = "daily";
widtests.err1.js = exports.err1;
widtests.err1.description = "this does a test";

//exports.wrapped1 = wrapped1 = function wrapped1 (params, callback) {
exports.wrapped1 = widtests.wrapped1 = wrapped1 = function wrapped1(params, callback) {

    saveglobal("debugsubcat", "code");
    execute([{
        "executethis": "addwidmaster",
        "wid": "1",
        "a": "b"
    }, {
        "executethis": "getwidmaster",
        "wid": "1",
        "command": {
            "executeresult": "outer"
        }
    }], function(err, result) {
        proxyprinttodiv('Function wrapped1 result ', result, 99)
        // debugfn("offlinegetwid code generator END",                  "ag2",    "",   "code", getglobal("debugcolor"), getglobal("debugindent"), {}, 9);

    });
}
widtests.wrapped1.category = "execute";
widtests.wrapped1.subcategory = "daily";
widtests.wrapped1.js = exports.wrapped1;
widtests.wrapped1.description = "this does a test";


// enter lots of data in series, the same data when inserted via different executes results in Max Range error
// this one inserts same amount of data but does not fail
exports.ettss2 = widtests.ettss2 = ettss2 = function ettss2(params, callback) {
    debuglevel = 17;
    saveglobal("debugname", "");
    saveglobal("debugcat", "");
    saveglobal("debugsubcat", "code");
    var status = false;


    async.series([
            function(cb1) {
                // create data for ttdto
                var executeList = [{
                    // create simple ttdto
                    "executethis": "addwidmaster",
                    "wid": "ttdto",
                    "metadata.method": "ttdto",
                    "type": "string"
                }, {
                    "executethis": "addwidmaster",
                    "metadata.method": "ttdto",
                    "type": "a"
                }, {
                    "executethis": "addwidmaster",
                    "metadata.method": "ttdto",
                    "type": "a"
                }, {
                    "executethis": "addwidmaster",
                    "metadata.method": "ttdto",
                    "type": "a"
                }, {
                    "executethis": "addwidmaster",
                    "metadata.method": "ttdto",
                    "type": "a"
                }, {
                    "executethis": "addwidmaster",
                    "metadata.method": "ttdto",
                    "type": "a"
                }, {
                    "executethis": "addwidmaster",
                    "metadata.method": "ttdto",
                    "type": "a"
                }, {
                    "executethis": "addwidmaster",
                    "metadata.method": "ttdto",
                    "type": "a"
                }, {
                    "executethis": "addwidmaster",
                    "metadata.method": "ttdto",
                    "type": "a"
                }, {
                    "executethis": "addwidmaster",
                    "metadata.method": "ttdto",
                    "type": "a"
                }, {
                    "executethis": "addwidmaster",
                    "metadata.method": "ttdto",
                    "type": "a"
                }, {
                    "executethis": "addwidmaster",
                    "metadata.method": "ttdto",
                    "type": "a"
                }, {
                    "executethis": "addwidmaster",
                    "metadata.method": "ttdto",
                    "type": "a"
                }, {
                    "executethis": "addwidmaster",
                    "metadata.method": "ttdto",
                    "type": "a"
                }, {
                    "executethis": "addwidmaster",
                    "metadata.method": "ttdto",
                    "type": "a"
                }, {
                    "executethis": "addwidmaster",
                    "metadata.method": "ttdto",
                    "type": "a"
                }, {
                    "executethis": "addwidmaster",
                    "metadata.method": "ttdto",
                    "type": "a"
                }, {
                    "executethis": "addwidmaster",
                    "metadata.method": "ttdto",
                    "type": "a"
                }, {
                    "executethis": "addwidmaster",
                    "metadata.method": "ttdto",
                    "type": "a"
                }, {
                    "executethis": "addwidmaster",
                    "metadata.method": "ttdto",
                    "type": "a"
                }, {
                    "executethis": "addwidmaster",
                    "metadata.method": "ttdto",
                    "type": "a"
                }, {
                    "executethis": "addwidmaster",
                    "metadata.method": "ttdto",
                    "type": "a"
                }, {
                    "executethis": "addwidmaster",
                    "metadata.method": "ttdto",
                    "type": "a"
                }, {
                    "executethis": "addwidmaster",
                    "metadata.method": "ttdto",
                    "type": "a"
                }, {
                    "executethis": "addwidmaster",
                    "metadata.method": "ttdto",
                    "type": "a"
                }, {
                    "executethis": "addwidmaster",
                    "metadata.method": "ttdto",
                    "type": "a"
                }, {
                    "executethis": "addwidmaster",
                    "metadata.method": "ttdto",
                    "type": "a"
                }, {
                    "executethis": "addwidmaster",
                    "metadata.method": "ttdto",
                    "type": "a"
                }, {
                    "executethis": "addwidmaster",
                    "metadata.method": "ttdto",
                    "type": "a"
                }, {
                    "executethis": "addwidmaster",
                    "metadata.method": "ttdto",
                    "type": "a"
                }, {
                    "executethis": "addwidmaster",
                    "metadata.method": "ttdto",
                    "type": "a"
                }, {
                    "executethis": "addwidmaster",
                    "metadata.method": "ttdto",
                    "type": "a"
                }, {
                    "executethis": "addwidmaster",
                    "metadata.method": "ttdto",
                    "type": "a"
                }];

                execute(executeList, function(err, res) {
                    proxyprinttodiv('Function tss2 added  ttdto -- ', res, 17);
                    cb1(null, res);
                });
            }
        ],
        function(err, res) {
            proxyprinttodiv("res --", res, 17);
            var actual_result = [res];
            proxyprinttodiv("actual_result --", actual_result, 17);

            var expected_result = [
                [
                    [
                        [{
                            "data": {
                                "type": "string"
                            },
                            "wid": "ttdto",
                            "metadata": {
                                "method": "ttdto",
                                "date": "2014-03-19T07:30:38.832Z"
                            }
                        }],
                        [{
                            "data": {
                                "type": "a"
                            },
                            "wid": "1",
                            "metadata": {
                                "method": "ttdto",
                                "date": "2014-03-19T07:30:39.663Z"
                            }
                        }],
                        [{
                            "data": {
                                "type": "a"
                            },
                            "wid": "2",
                            "metadata": {
                                "method": "ttdto",
                                "date": "2014-03-19T07:30:40.549Z"
                            }
                        }],
                        [{
                            "data": {
                                "type": "a"
                            },
                            "wid": "3",
                            "metadata": {
                                "method": "ttdto",
                                "date": "2014-03-19T07:30:41.514Z"
                            }
                        }],
                        [{
                            "data": {
                                "type": "a"
                            },
                            "wid": "4",
                            "metadata": {
                                "method": "ttdto",
                                "date": "2014-03-19T07:30:42.571Z"
                            }
                        }],
                        [{
                            "data": {
                                "type": "a"
                            },
                            "wid": "5",
                            "metadata": {
                                "method": "ttdto",
                                "date": "2014-03-19T07:30:43.707Z"
                            }
                        }],
                        [{
                            "data": {
                                "type": "a"
                            },
                            "wid": "6",
                            "metadata": {
                                "method": "ttdto",
                                "date": "2014-03-19T07:30:44.861Z"
                            }
                        }],
                        [{
                            "data": {
                                "type": "a"
                            },
                            "wid": "7",
                            "metadata": {
                                "method": "ttdto",
                                "date": "2014-03-19T07:30:46.109Z"
                            }
                        }],
                        [{
                            "data": {
                                "type": "a"
                            },
                            "wid": "8",
                            "metadata": {
                                "method": "ttdto",
                                "date": "2014-03-19T07:30:47.390Z"
                            }
                        }],
                        [{
                            "data": {
                                "type": "a"
                            },
                            "wid": "9",
                            "metadata": {
                                "method": "ttdto",
                                "date": "2014-03-19T07:30:48.722Z"
                            }
                        }],
                        [{
                            "data": {
                                "type": "a"
                            },
                            "wid": "10",
                            "metadata": {
                                "method": "ttdto",
                                "date": "2014-03-19T07:30:50.151Z"
                            }
                        }],
                        [{
                            "data": {
                                "type": "a"
                            },
                            "wid": "11",
                            "metadata": {
                                "method": "ttdto",
                                "date": "2014-03-19T07:30:51.581Z"
                            }
                        }],
                        [{
                            "data": {
                                "type": "a"
                            },
                            "wid": "12",
                            "metadata": {
                                "method": "ttdto",
                                "date": "2014-03-19T07:30:53.138Z"
                            }
                        }],
                        [{
                            "data": {
                                "type": "a"
                            },
                            "wid": "13",
                            "metadata": {
                                "method": "ttdto",
                                "date": "2014-03-19T07:30:54.783Z"
                            }
                        }],
                        [{
                            "data": {
                                "type": "a"
                            },
                            "wid": "14",
                            "metadata": {
                                "method": "ttdto",
                                "date": "2014-03-19T07:30:56.476Z"
                            }
                        }],
                        [{
                            "data": {
                                "type": "a"
                            },
                            "wid": "15",
                            "metadata": {
                                "method": "ttdto",
                                "date": "2014-03-19T07:30:58.209Z"
                            }
                        }],
                        [{
                            "data": {
                                "type": "a"
                            },
                            "wid": "16",
                            "metadata": {
                                "method": "ttdto",
                                "date": "2014-03-19T07:30:59.970Z"
                            }
                        }],
                        [{
                            "data": {
                                "type": "a"
                            },
                            "wid": "17",
                            "metadata": {
                                "method": "ttdto",
                                "date": "2014-03-19T07:31:01.834Z"
                            }
                        }],
                        [{
                            "data": {
                                "type": "a"
                            },
                            "wid": "18",
                            "metadata": {
                                "method": "ttdto",
                                "date": "2014-03-19T07:31:03.746Z"
                            }
                        }],
                        [{
                            "data": {
                                "type": "a"
                            },
                            "wid": "19",
                            "metadata": {
                                "method": "ttdto",
                                "date": "2014-03-19T07:31:05.700Z"
                            }
                        }],
                        [{
                            "data": {
                                "type": "a"
                            },
                            "wid": "20",
                            "metadata": {
                                "method": "ttdto",
                                "date": "2014-03-19T07:31:07.743Z"
                            }
                        }],
                        [{
                            "data": {
                                "type": "a"
                            },
                            "wid": "21",
                            "metadata": {
                                "method": "ttdto",
                                "date": "2014-03-19T07:31:09.837Z"
                            }
                        }],
                        [{
                            "data": {
                                "type": "a"
                            },
                            "wid": "22",
                            "metadata": {
                                "method": "ttdto",
                                "date": "2014-03-19T07:31:11.999Z"
                            }
                        }],
                        [{
                            "data": {
                                "type": "a"
                            },
                            "wid": "23",
                            "metadata": {
                                "method": "ttdto",
                                "date": "2014-03-19T07:31:14.162Z"
                            }
                        }],
                        [{
                            "data": {
                                "type": "a"
                            },
                            "wid": "24",
                            "metadata": {
                                "method": "ttdto",
                                "date": "2014-03-19T07:31:16.422Z"
                            }
                        }],
                        [{
                            "data": {
                                "type": "a"
                            },
                            "wid": "25",
                            "metadata": {
                                "method": "ttdto",
                                "date": "2014-03-19T07:31:18.890Z"
                            }
                        }],
                        [{
                            "data": {
                                "type": "a"
                            },
                            "wid": "26",
                            "metadata": {
                                "method": "ttdto",
                                "date": "2014-03-19T07:31:21.303Z"
                            }
                        }],
                        [{
                            "data": {
                                "type": "a"
                            },
                            "wid": "27",
                            "metadata": {
                                "method": "ttdto",
                                "date": "2014-03-19T07:31:23.785Z"
                            }
                        }],
                        [{
                            "data": {
                                "type": "a"
                            },
                            "wid": "28",
                            "metadata": {
                                "method": "ttdto",
                                "date": "2014-03-19T07:31:26.394Z"
                            }
                        }],
                        [{
                            "data": {
                                "type": "a"
                            },
                            "wid": "29",
                            "metadata": {
                                "method": "ttdto",
                                "date": "2014-03-19T07:31:29.144Z"
                            }
                        }],
                        [{
                            "data": {
                                "type": "a"
                            },
                            "wid": "30",
                            "metadata": {
                                "method": "ttdto",
                                "date": "2014-03-19T07:31:31.815Z"
                            }
                        }],
                        [{
                            "data": {
                                "type": "a"
                            },
                            "wid": "31",
                            "metadata": {
                                "method": "ttdto",
                                "date": "2014-03-19T07:31:34.545Z"
                            }
                        }],
                        [{
                            "data": {
                                "type": "a"
                            },
                            "wid": "32",
                            "metadata": {
                                "method": "ttdto",
                                "date": "2014-03-19T07:31:37.325Z"
                            }
                        }]
                    ]
                ]
            ];
            proxyprinttodiv("expected_result --", expected_result, 17);

            res = logverify("logverify", actual_result, expected_result);
            callback(err, res);
        });
}
widtests.ettss2.category = "execute";
widtests.ettss2.subcategory = "daily";
widtests.ettss2.js = exports.ettss2;
widtests.ettss2.description = "this does a test";

// test to enter lots of data at once :: created to raise the Maximum range reached error in Chrome
exports.ettss3 = widtests.ettss3 = ettss3 = function ettss3(params, callback) {
    debuglevel = 17;
    saveglobal("debugname", "");
    saveglobal("debugcat", "");
    saveglobal("debugsubcat", "code");
    var status = false;


    async.series([
        function(cb1) {
            // create dtos  
            var executeList = [{
                // create simple ttdto
                "executethis": "addwidmaster",
                "wid": "ttdto",
                "metadata.method": "ttdto",
                "type": "string"
            }];
            execute(executeList, function(err, res) {
                proxyprinttodiv('Function tss3 loop # 1  -- ', res, 34);
                cb1(null);
            });
        },
        function(cb1) {
            // create data for ttdto
            var executeList = [{
                "executethis": "addwidmaster",
                "metadata.method": "ttdto",
                "type": "a"
            }, {
                "executethis": "addwidmaster",
                "metadata.method": "ttdto",
                "type": "a"
            }, {
                "executethis": "addwidmaster",
                "metadata.method": "ttdto",
                "type": "a"
            }, {
                "executethis": "addwidmaster",
                "metadata.method": "ttdto",
                "type": "a"
            }];

            execute(executeList, function(err, res) {
                proxyprinttodiv('Function tss3 loop # 2 -- ', res, 34);
                cb1(null);
            });
        },
        function(cb1) {
            // create data for ttdto
            var executeList = [{
                "executethis": "addwidmaster",
                "metadata.method": "ttdto",
                "type": "a"
            }, {
                "executethis": "addwidmaster",
                "metadata.method": "ttdto",
                "type": "a"
            }, {
                "executethis": "addwidmaster",
                "metadata.method": "ttdto",
                "type": "a"
            }, {
                "executethis": "addwidmaster",
                "metadata.method": "ttdto",
                "type": "a"
            }];

            execute(executeList, function(err, res) {
                proxyprinttodiv('Function tss3 loop # 3 -- ', res, 34);
                cb1(null);
            });
        },
        function(cb1) {
            // create data for ttdto
            var executeList = [{
                "executethis": "addwidmaster",
                "metadata.method": "ttdto",
                "type": "a"
            }, {
                "executethis": "addwidmaster",
                "metadata.method": "ttdto",
                "type": "a"
            }, {
                "executethis": "addwidmaster",
                "metadata.method": "ttdto",
                "type": "a"
            }, {
                "executethis": "addwidmaster",
                "metadata.method": "ttdto",
                "type": "a"
            }];

            execute(executeList, function(err, res) {
                proxyprinttodiv('Function tss3 loop #  4-- ', res, 34);
                cb1(null);
            });
        },
        function(cb1) {
            // create data for ttdto
            var executeList = [{
                "executethis": "addwidmaster",
                "metadata.method": "ttdto",
                "type": "a"
            }, {
                "executethis": "addwidmaster",
                "metadata.method": "ttdto",
                "type": "a"
            }, {
                "executethis": "addwidmaster",
                "metadata.method": "ttdto",
                "type": "a"
            }, {
                "executethis": "addwidmaster",
                "metadata.method": "ttdto",
                "type": "a"
            }];

            execute(executeList, function(err, res) {
                proxyprinttodiv('Function tss3 loop #  5-- ', res, 34);
                cb1(null);
            });
        },
        function(cb1) {
            // create data for ttdto
            var executeList = [{
                "executethis": "addwidmaster",
                "metadata.method": "ttdto",
                "type": "a"
            }, {
                "executethis": "addwidmaster",
                "metadata.method": "ttdto",
                "type": "a"
            }, {
                "executethis": "addwidmaster",
                "metadata.method": "ttdto",
                "type": "a"
            }, {
                "executethis": "addwidmaster",
                "metadata.method": "ttdto",
                "type": "a"
            }];

            execute(executeList, function(err, res) {
                proxyprinttodiv('Function tss3 loop #  -- 6', res, 34);
                cb1(null);
            });
        },
        function(cb1) {
            // create data for ttdto
            var executeList = [{
                "executethis": "addwidmaster",
                "metadata.method": "ttdto",
                "type": "a"
            }, {
                "executethis": "addwidmaster",
                "metadata.method": "ttdto",
                "type": "a"
            }, {
                "executethis": "addwidmaster",
                "metadata.method": "ttdto",
                "type": "a"
            }, {
                "executethis": "addwidmaster",
                "metadata.method": "ttdto",
                "type": "a"
            }];

            execute(executeList, function(err, res) {
                proxyprinttodiv('Function tss3 loop #  -- 7', res, 34);
                cb1(null);
            });
        },
        function(cb1) {
            // create data for ttdto
            var executeList = [{
                "executethis": "addwidmaster",
                "metadata.method": "ttdto",
                "type": "a"
            }, {
                "executethis": "addwidmaster",
                "metadata.method": "ttdto",
                "type": "a"
            }, {
                "executethis": "addwidmaster",
                "metadata.method": "ttdto",
                "type": "a"
            }, {
                "executethis": "addwidmaster",
                "metadata.method": "ttdto",
                "type": "a"
            }];

            execute(executeList, function(err, res) {
                proxyprinttodiv('Function tss3 loop #  -- 8', res, 34);
                cb1(null);
            });
        },
        function(cb1) {
            // create data for ttdto
            var executeList = [{
                "executethis": "addwidmaster",
                "metadata.method": "ttdto",
                "type": "a"
            }, {
                "executethis": "addwidmaster",
                "metadata.method": "ttdto",
                "type": "a"
            }, {
                "executethis": "addwidmaster",
                "metadata.method": "ttdto",
                "type": "a"
            }, {
                "executethis": "addwidmaster",
                "metadata.method": "ttdto",
                "type": "a"
            }];

            execute(executeList, function(err, res) {
                proxyprinttodiv('Function tss3 loop #  -- 9', res, 34);
                cb1(null);
            });
        },
        function(cb1) {
            // create data for ttdto
            var executeList = [{
                "executethis": "addwidmaster",
                "metadata.method": "ttdto",
                "type": "a"
            }, {
                "executethis": "addwidmaster",
                "metadata.method": "ttdto",
                "type": "a"
            }, {
                "executethis": "addwidmaster",
                "metadata.method": "ttdto",
                "type": "a"
            }, {
                "executethis": "addwidmaster",
                "metadata.method": "ttdto",
                "type": "a"
            }];

            execute(executeList, function(err, res) {
                proxyprinttodiv('Function tss3 loop #  -- 10', res, 34);
                cb1(null, res);
            });
        }
    ], function(err, res) {
        proxyprinttodiv("res --", res, 17);
        var actual_result = res[9];
        proxyprinttodiv("actual_result --", actual_result, 17);

        var expected_result = [
            [{
                "data": {
                    "type": "a"
                },
                "wid": "33",
                "metadata": {
                    "method": "ttdto",
                    "date": "2014-03-19T07:37:27.627Z"
                }
            }],
            [{
                "data": {
                    "type": "a"
                },
                "wid": "34",
                "metadata": {
                    "method": "ttdto",
                    "date": "2014-03-19T07:37:31.631Z"
                }
            }],
            [{
                "data": {
                    "type": "a"
                },
                "wid": "35",
                "metadata": {
                    "method": "ttdto",
                    "date": "2014-03-19T07:37:36.441Z"
                }
            }],
            [{
                "data": {
                    "type": "a"
                },
                "wid": "36",
                "metadata": {
                    "method": "ttdto",
                    "date": "2014-03-19T07:37:41.718Z"
                }
            }]
        ];
        proxyprinttodiv("expected_result --", expected_result, 17);

        res = logverify("logverify", actual_result, expected_result);
        callback(err, res);
    });
}
widtests.ettss3.category = "execute";
widtests.ettss3.subcategory = "daily";
widtests.ettss3.js = exports.ettss3;
widtests.ettss3.description = "this does a test";


exports.testcallback = widtests.testcallback = testcallback = function testcallback(params, callback) {
    console.log("<< testcallback >>");
    params["test_result"] = "XXXPASS";
    callback(null, params);
}
widtests.testcallback.category = "execute";
widtests.testcallback.subcategory = "daily";
widtests.testcallback.js = exports.testcallback;
widtests.testcallback.description = "this does a test";