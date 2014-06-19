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

// exports.func_async = func_async = function func_async(parameters, callback) {
//     delete parameters["d"];
//     console.log('from func_async');
//     // var f = function (){
//     // sleep(3000);
//     // parameters["m"] = "now you waited for 1000 ms";
//     // printToDiv('func_async',parameters,1);    
//     // };
//     // f();

//     // echo ajax request
//     echoCall('/echo', 'GET', false,
//         function (data) {
//             parameters["m"] = "now you waited for the async call";
//             printToDiv('func_async_success', parameters, 1);
//             console.log('from func_async success');
//         },
//         function (data) {
//             parameters["m"] = "now you waited for the async call";
//             printToDiv('func_async_error', parameters, 1);
//             console.log('from func_async error');
//         }
//     );
//     printToDiv('func_async -- ', parameters, 1);
//     // var err;callback(err, parameters);
//     var err;
//     callback(err, parameters);
// }

// exports.echoCall = echoCall = function echoCall(url, type, asyncVal, successCallback, errorCallback) {
//     jQuery.ajax({
//         url: url,
//         tupe: type,
//         async: asyncVal,
//         cache: false,
//         dataType: "html",
//         success: successCallback,
//         error: errorCallback
//     });
// }

// ------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------


// exports.t121212 = t121212 = function t121212(params, callback) {
//     eventappinstall();

//     var todolist = [
//         [{
//                 "fn": "test_and_verify"
//             },
//             [
//                 "func_b",
//                 "func_b", {
//                     "c": "01",
//                     "d": "11",
//                     "e": "21"
//                 }, {
//                     "c": "02",
//                     "d": "12",
//                     "g": "42"
//                 }
//             ]
//         ],
//         [{
//                 "fn": "addwid4params"
//             },
//             [
//                 "a", "b", "c", "d"
//             ]

//         ],
//         [{
//                 "fn": "addwid4params"
//             },
//             [
//                 "12", "23", "34", "45"
//             ]

//         ]

//     ];

//     executethismultiple(todolist, callback);
// }


//exports.exec_mul_test = function exec_mul_test(data) {
exports.exec_mul_test = widtests.exec_mul_test = exec_mul_test = function exec_mul_test(data) {
    for (d in data) {
        // test_and_verify(data[d]);
        // exports.test_and_verify = test_and_verify = function test_and_verify(testname, fnname, parameters, assert, callback) {
        var a = data[d][1]['name'];
        var b = data[d][1]['fnname'];
        var c = [data[d][1]['parameters']];
        var d = [data[d][1]['assert']];
        console.log('a: ' + a);
        console.log('b: ' + b);
        console.log('c: ' + JSON.stringify(c));
        console.log('d: ' + JSON.stringify(d));
        test_and_verify(a, b, c, d);
    }
}
widtests.exec_mul_test.category = "execute";
widtests.exec_mul_test.subcategory = "daily";
widtests.exec_mul_test.js = exports.t121212;
widtests.exec_mul_test.description = "this does a test";




// getclean(resultObj, command, callback)

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

/* Adding data for the survey with addwidmaster */
exports.surveydata2 = widtests.surveydata2 = surveydata2 = function surveydata2(params, callback) {

    execute([

            // Create the user dto  
            {
                "executethis": "updatewid",
                "wid": "userdto",
                "metadata.method": "userdto",
                "userid": "number",
                "first": "string",
                "last": "string",
                "surveydto": "onetomany"
            },
            // Create the survey dto
            {
                "executethis": "updatewid",
                "wid": "surveydto",
                "metadata.method": "surveydto",
                "title": "string",
                "description": "string",
                "questiondto": "onetomany"
            },

            // Adding user data 

            {
                "executethis": "addwidmaster",
                "wid": "happy",
                "metadata": {
                    "method": "surveydto",
                    "userdto": {
                        "type": "onetomany"
                    }
                },
                "userdto": {
                    "metadata": {
                        "method": "userdto"
                    },
                    "userid": "2",
                    "first": "Bill",
                    "last": "Duncan"
                },
                "surveydto": {
                    "metadata": {
                        "method": "surveydto"
                    },
                    "title": "Happy Meter",
                    "description": "Daily rating of how you feel"
                }
            },

            {
                "executethis": "getwidmaster",
                "wid": "Bill"
            }, {
                "executethis": "getwidmaster",
                "wid": "happy"
            }
        ],
        function(err, res) {
            proxyprinttodiv('Function getwidmongo parameterObject after', res[0], 17);
            proxyprinttodiv('Function getwidmongo parameterObject after', res[1], 17);
            proxyprinttodiv('Function getwidmongo parameterObject after', res[2], 17);
            proxyprinttodiv('Function getwidmongo parameterObject after', res[3], 17);
            proxyprinttodiv('Function getwidmongo parameterObject after', res[4], 17);
            callback(err, res)
        });
}
widtests.surveydata2.category = "execute";
widtests.surveydata2.subcategory = "daily";
widtests.surveydata2.js = exports.surveydata2;
widtests.surveydata2.description = "this does a test";

/* Adding data for a flat survey */
exports.surveydtoflat = widtests.surveydtoflat = surveydtoflat = function surveydtoflat(params, callback) {

    execute([
            // Create the flatsurveydto dto 
            {
                "executethis": "updatewid",
                "wid": "flatsurveydto",
                "metadata.method": "flatsurveydto",
                "userdto": "userdto",
                "surveydto": {
                    "questiondto": [{
                        "answerdto": [
                            "answerdto"
                        ]
                    }, {
                        "responsedto": [
                            "responsedto"
                        ]
                    }]
                }
            },

            // Create the flatsurvey data
            {
                "executethis": "updatewid",
                "wid": "flatsurvey",
                "metadata.method": "flatsurveydto",
                "userdto": {
                    "metadata.method": "userdto",
                    "userid": "2",
                    "first": "Bill",
                    "last": "Duncan"
                },
                "surveydto": {
                    "metadata.method": "surveydto",
                    "title": "Happy Meter",
                    "description": "Daily rating of how you feel",
                    "questiondto": [{
                        "metadata.method": "questiondto",
                        "question": "How do you feel today?",
                        "answerdto": {
                            "metadata.method": "answerdto",
                            "answers": [
                                "Outstanding",
                                "Great",
                                "Okay",
                                "Tired",
                                "Sick"
                            ]
                        },
                        "responsedto": [{
                            "response": "Outstanding",
                            "userid": "2"
                        }, {
                            "response": "Sick",
                            "userid": "3"
                        }, {
                            "response": "Tired",
                            "userid": "4"
                        }]
                    }, {
                        "metadata.method": "questiondto",
                        "question": "How do you think you will feel tomorrow?",
                        "answerdto": {
                            "metadata.method": "answerdto",
                            "answers": [
                                "Fantastic",
                                "Can't stop me now",
                                "Okay",
                                "I'll be better tomorrow",
                                "Terrible"
                            ]
                        },
                        "responsedto": [{
                            "response": "Outstanding",
                            "userid": "2"
                        }, {
                            "response": "Okay",
                            "userid": "3"
                        }, {
                            "response": "Sick",
                            "userid": "4"
                        }]
                    }]
                },
            }, {
                "executethis": "getwidmaster",
                "wid": "flatsurvey"
            }
        ],
        function(err, res) {
            callback(err, res)
        });
}
widtests.surveydtoflat.category = "execute";
widtests.surveydtoflat.subcategory = "daily";
widtests.surveydtoflat.js = exports.surveydtoflat;
widtests.surveydtoflat.description = "this does a test";


exports.testcallback = widtests.testcallback = testcallback = function testcallback(params, callback) {
    console.log("<< testcallback >>");
    params["test_result"] = "XXXPASS";
    callback(null, params);
}
widtests.testcallback.category = "execute";
widtests.testcallback.subcategory = "daily";
widtests.testcallback.js = exports.testcallback;
widtests.testcallback.description = "this does a test";


function addmttestdata(callback) {
    console.log("<< addmttestdata >>");

    proxyprinttodiv("staring data add", "data add", 17);
    var widArray = [];

    var dtoObj = {
        "executethis": "updatewid",
        "metadata.method": "testdto",
        "wid": "testdto",
        "a": "string",
        "b": "string"
    };
    widArray.push(dtoObj);

    var totalWids = 5; //during debugging
    //var totalWids = 50;       //during real time testing
    for (var i = 1; i <= totalWids; i++) {
        var widObj = {};
        widObj["executethis"] = "updatewid";
        widObj["metadata.method"] = "testdto";
        widObj["wid"] = "wid" + i;
        widObj["a"] = "" + (i);
        widObj["b"] = "" + (i * i);
        widArray.push(widObj);
    }

    /*
execute(widArray, function (err, res) {
      console.log(' >>> final response after executerray >>> ' + JSON.stringify(res));
});
proxyprinttodiv("end of data add", "end data add", 17);
*/
    return widArray;
}

exports.t1example = widtests.t1example = t1example = function t1example(params, callback) {
    eventappinstall();
    config = setconfig1();
    execute([{
            "executethis": "func_b",
            "c": "0",
            "d": "1",
            "e": "2"
        }],
        function(err, res) {
            res = logverify("unit_tests", "t1_result", "", res[0], "", {
                "d": "1",
                "c": "0",
                "g": "4"
            });
            if (callback instanceof Function) {
                callback(err, res)
            } else {
                return res
            }
        });
}
widtests.t1example.category = "execute";
widtests.t1example.subcategory = "daily";
widtests.t1example.js = exports.t1example;
widtests.t1example.description = "this does a test";

exports.etmttest2 = widtests.etmttest2 = etmttest2 = function etmttest2(params, callback) {
    debuglevel = 17;
    console.log("<< mongoquery_two_test >>");

    eventappinstall();

    //To add wid data
    var executeList = [];
    var dtoObj = {
        "executethis": "updatewid",
        "metadata.method": "testdto",
        "wid": "testdto",
        "a": "string",
        "b": "string"
    };
    executeList.push(dtoObj);
    for (var i = 1; i <= 5; i++) {
        var executeobj = {};
        executeobj["executethis"] = "updatewid";
        executeobj["metadata.method"] = "testdto";
        executeobj["wid"] = "wid" + i;
        executeobj["a"] = "" + (i);
        executeobj["b"] = "" + (i * i);
        executeList.push(executeobj);
    }

    //To query data
    var queryobj = {};

    queryobj["executethis"] = "querywid";
    queryobj["rawmongoquery"] = {
        "$or": [{
            "data.a": "string"
        }]
    };
    executeList.push(queryobj);

    queryobj["rawmongoquery"] = {
        "$or": [{
            "data.a": "1"
        }, {
            "data.b": "1"
        }]
    };
    executeList.push(queryobj);

    queryobj["rawmongoquery"] = {
        "$or": [{
            "data.a": "1"
        }, {
            "data.b": "16"
        }]
    };
    executeList.push(queryobj);

    proxyprinttodiv("execute list ", executeList, 17);

    execute(executeList, function(err, res) {
        proxyprinttodiv('Function verifytestresults', res, 17);
        console.log(' >>> final response after executerray >>> ' + JSON.stringify(res));
        var expectedResultList = [{
            "wid": "wid4",
            "metadata.method": "testdto",
            "data.a": "4",
            "data.b": "16"
        }, {
            "wid": "wid5",
            "metadata.method": "testdto",
            "data.a": "5",
            "data.b": "25"
        }];

        proxyprinttodiv("res --", res, 17);
        var actual_result = [res];
        proxyprinttodiv("actual_result --", actual_result, 17);

        var expected_result = [
            [{
                "data": {
                    "a": "string",
                    "b": "string"
                },
                "wid": "testdto",
                "metadata": {
                    "method": "testdto",
                    "date": "2014-03-19T11:37:35.827Z"
                }
            }],
            [{
                "data": {
                    "a": "1",
                    "b": "1"
                },
                "wid": "wid1",
                "metadata": {
                    "method": "testdto",
                    "date": "2014-03-19T11:37:35.878Z"
                }
            }],
            [{
                "data": {
                    "a": "2",
                    "b": "4"
                },
                "wid": "wid2",
                "metadata": {
                    "method": "testdto",
                    "date": "2014-03-19T11:37:35.952Z"
                }
            }],
            [{
                "data": {
                    "a": "3",
                    "b": "9"
                },
                "wid": "wid3",
                "metadata": {
                    "method": "testdto",
                    "date": "2014-03-19T11:37:35.998Z"
                }
            }],
            [{
                "data": {
                    "a": "4",
                    "b": "16"
                },
                "wid": "wid4",
                "metadata": {
                    "method": "testdto",
                    "date": "2014-03-19T11:37:36.049Z"
                }
            }],
            [{
                "data": {
                    "a": "5",
                    "b": "25"
                },
                "wid": "wid5",
                "metadata": {
                    "method": "testdto",
                    "date": "2014-03-19T11:37:36.097Z"
                }
            }],
            [],
            [],
            []
        ];
        proxyprinttodiv("expected_result --", expected_result, 17);

        res = logverify("logverify", actual_result, expected_result);
        callback(err, res);
    });
}
widtests.etmttest2.category = "execute";
widtests.etmttest2.subcategory = "daily";
widtests.etmttest2.js = exports.etmttest2;
widtests.etmttest2.description = "this does a test";

exports.etar100 = widtests.etar100 = etar100 = function etar100(params, callback) {
    debuglevel = 17;
    var object = {
        "metadata": {
            "method": "bookdto"
        },
        "wid": "222",
        "title": "The X Factor",
        "pages": "300"
    };
    var dtoobject = {
        "metadata": {
            "method": "bookdto"
        },
        "wid": "bookdto",
        "title": "string",
        "pages": "string",
        "c": "string",
        "d": "string"
    };
    var parentwid = "elizabeth_heart";
    var parentmethod = "bookdto";
    var relationshiptype = "onetomany";
    var command = {};
    /*
      for(i=0; i<500; i++){
            addrecord(object, dtoobject, parentwid, parentmethod, relationshiptype, command, function (err, res) {
                  console.log( i + "addrecord! -- got res -->" + JSON.stringify(res));
            });   
      }
      */

    // n times loop
    async.times(5, function(n, next) {
        addrecord(object, dtoobject, parentwid, parentmethod, relationshiptype, command, function(err, res) {
            console.log(n + "addrecord! -- got res -->" + JSON.stringify(res));
            next(err, res);
        });
    }, function(err, res) {
        //after loop
        proxyprinttodiv("res --", res, 17);
        var actual_result = [res[4]];
        proxyprinttodiv("actual_result --", actual_result, 17);

        var expected_result = [{
            "data": {
                "title": "The X Factor",
                "pages": "300"
            },
            "wid": "1",
            "metadata": {
                "method": "bookdto",
                "date": "2014-03-19T12:06:47.172Z"
            }
        }];
        proxyprinttodiv("expected_result --", expected_result, 17);

        res = logverify("logverify", actual_result, expected_result);
        callback(err, res);
    });
}
widtests.etar100.category = "execute";
widtests.etar100.subcategory = "daily";
widtests.etar100.js = exports.etar100;
widtests.etar100.description = "this does a test";

/*
      deep filter test
*/
exports.etd1 = widtests.etd1 = etd1 = function etd1(params, callback) {
    debuglevel = 17;
    async.series([
        function(cb1) {
            var executeList = [{
                "executethis": "updatewid",
                "wid": "wid2",
                "metadata.method": "defaultdto",
                "aaa": "",
                "ggg": ""
            }];
            execute(executeList, function(err, res) {
                //proxyprinttodiv('after updatewid wid1 -- ', res, 34);
                cb1(null);
            });
        }
    ], function(err, res) { //after updatewid
        var dtoObjOpt = {
            "metadata": {
                "method": "string"
            },
            "a": "wid2",
            "x": "wid2",
            "z": "wid2",
            "c": "number",
            "d": "date",
            "q": {
                "w": {
                    "e": "string"
                }
            },
            "g": "boolean",
            "b": [{
                "c": "string"
            }, {
                "d": "string"
            }],
            "x1": [{
                "y": "string",
                "d": "date",
                "b": [{
                    "c": "string",
                    "c1": "number"
                }]
            }]
        };
        var inputObj = {
            "metadata": {
                "method": "defaultdto"
            },
            "a": "aaa",
            "x": "test",
            "z": "ggg",
            "c": "30",
            "d": "6/23/1912",
            "q": {
                "w": {
                    "e": "t"
                }
            },
            "g": "true",
            "b": [{
                "c": "one"
            }, {
                "d": "two"
            }],
            "x1": [{
                "y": "hello",
                "d": "2/27/2014",
                "b": [{
                    "c": "one",
                    "c1": "50"
                }, {
                    "c": "two",
                    "c1": "30"
                }, {
                    "c": "three",
                    "d": "30"
                }, {
                    "cx": "two",
                    "c1x": "30"
                }]
            }]
        };
        var command = {
            "command.deepfilter.convert": true
        };

        deepfilter(inputObj, dtoObjOpt, command, function(err, res) {
            proxyprinttodiv("after d1 deepfilter res", res, 17);

            proxyprinttodiv("res --", res, 17);
            var actual_result = [res];
            proxyprinttodiv("actual_result --", actual_result, 17);

            var expected_result = [{
                "metadata": {
                    "method": "defaultdto"
                },
                "a": "aaa",
                "z": "ggg",
                "c": 30,
                "d": "1912-06-23T18:30:00.000Z",
                "q": {
                    "w": {
                        "e": "t"
                    }
                },
                "g": true,
                "b": [{
                    "c": "one"
                }],
                "x1": [{
                    "y": "hello",
                    "d": "2014-02-27T18:30:00.000Z",
                    "b": [{
                        "c": "one",
                        "c1": 50
                    }, {
                        "c": "two",
                        "c1": 30
                    }, {
                        "c": "three"
                    }]
                }]
            }];
            proxyprinttodiv("expected_result --", expected_result, 17);

            res = logverify("etd1", actual_result, expected_result);
            callback(err, res);
        });
    });
}
widtests.etd1.category = "execute";
widtests.etd1.subcategory = "daily";
widtests.etd1.js = exports.etd1;
widtests.etd1.description = "this does a test";

/*
      number, string, boolean, date, nested string
*/
exports.etd2 = widtests.etd2 = etd2 = function etd2(params, callback) {
    debuglevel = 17;
    async.series([
        function(cb1) {
            var executeList = [{
                "executethis": "updatewid",
                "wid": "wid2",
                "metadata.method": "defaultdto",
                "aaa": "",
                "ggg": ""
            }];
            execute(executeList, function(err, res) {
                //proxyprinttodiv('after updatewid wid1 -- ', res, 34);
                cb1(null);
            });
        }
    ], function(err, res) { //after updatewid
        /*
                  var dtoObjOpt = {"metadata":{"method":"string"},"a":"wid2","x":"wid2", "z":"wid2",
                                    "c":"number","d":"date","q":{"w":{"e":"string"}},"g":"boolean"} ;
                  var inputObj = {"metadata":{"method":"defaultdto"},"a":"aaa", "x":"test", "z":"ggg",
                                    "c":"30","e":"f","d":"6/23/1912","q":{"w":{"e":"t"}},"g":"true"};
            */

        var dtoObjOpt = {
            "c": "number",
            "h": "string",
            "g": "boolean",
            "d": "date",
            "q": {
                "w": {
                    "e": "string"
                }
            },
            "x": {
                "y": {
                    "z": "string"
                }
            }
        };
        var inputObj = {
            "c": "30",
            "h": "hval",
            "g": "true",
            "d": "6/25/1912",
            "q": {
                "w": {
                    "e": "t"
                }
            },
            "x": {
                "y": {
                    "z": "string"
                }
            }
        };
        var command = {};

        deepfilter(inputObj, dtoObjOpt, command, function(err, res) {
            proxyprinttodiv("after d1 deepfilter res", res, 17);

            proxyprinttodiv("res --", res, 17);
            var actual_result = [res];
            proxyprinttodiv("actual_result --", actual_result, 17);

            var expected_result = [{
                "c": "30",
                "h": "hval",
                "g": "true",
                "d": "6/25/1912",
                "q": {
                    "w": {
                        "e": "t"
                    }
                },
                "x": {
                    "y": {
                        "z": "string"
                    }
                }
            }];
            proxyprinttodiv("expected_result --", expected_result, 17);

            res = logverify("etd2", actual_result, expected_result);
            callback(err, res);
        });
    });
}
widtests.etd2.category = "execute";
widtests.etd2.subcategory = "daily";
widtests.etd2.js = exports.etd2;
widtests.etd2.description = "this does a test";

/*
      wid
*/
exports.etd3 = widtests.etd3 = etd3 = function etd3(params, callback) {
    debuglevel = 17;
    async.series([
        function(cb1) {
            var executeList = [{
                "executethis": "updatewid",
                "wid": "wid2",
                "metadata.method": "defaultdto",
                "aaa": "",
                "ggg": ""
            }];
            execute(executeList, function(err, res) {
                //proxyprinttodiv('after updatewid wid1 -- ', res, 34);
                cb1(null);
            });
        }
    ], function(err, res) { //after updatewid
        var dtoObjOpt = {
            "a": "wid2",
            "x": "wid2"
        };
        var inputObj = {
            "a": "aaa",
            "x": "test"
        };
        var command = {};

        deepfilter(inputObj, dtoObjOpt, command, function(err, res) {
            proxyprinttodiv("after d3 deepfilter res", res, 17);

            proxyprinttodiv("res --", res, 17);
            var actual_result = [res];
            proxyprinttodiv("actual_result --", actual_result, 17);

            var expected_result = [{
                "a": "aaa"
            }];
            proxyprinttodiv("expected_result --", expected_result, 17);

            res = logverify("etd3", actual_result, expected_result);
            callback(err, res);
        });
    });
}
widtests.etd3.category = "execute";
widtests.etd3.subcategory = "daily";
widtests.etd3.js = exports.etd3;
widtests.etd3.description = "this does a test";

/*
      updatewid and getwidmaster
*/
exports.dupdateget4 = widtests.dupdateget4 = dupdateget4 = function dupdateget4(params, callback) {
    async.series([
        function(cb1) {
            var executeList = [{
                "executethis": "updatewid",
                "wid": "wid3",
                "metadata.method": "defaultdto",
                "aaa": "",
                "ggg": ""
            }];
            execute(executeList, function(err, res) {
                //proxyprinttodiv('updatewid wid3 -- ', res, 17);
                cb1(null);
            });
        },
        function(cb2) {
            var executeList = [{
                "executethis": "getwid",
                "wid": "wid3",
            }];
            execute(executeList, function(err, res) {
                //proxyprinttodiv("getwidmaster  wid3 -- ", res, 17);
                cb2(null);
            });
        }
    ], function(err, res) { //after updatewid

        params = {
            'test': 'PASS'
        };
        callback(err, params);
    });
}
widtests.dupdateget4.category = "execute";
widtests.dupdateget4.subcategory = "daily";
widtests.dupdateget4.js = exports.dupdateget4;
widtests.dupdateget4.description = "this does a test";

/*    
      added test in wid
*/
exports.etd5 = widtests.etd5 = etd5 = function etd5(params, callback) {
    debuglevel = 17;
    async.series([
        function(cb1) {
            var executeList = [{
                "executethis": "updatewid",
                "wid": "wid2",
                "metadata.method": "defaultdto",
                "aaa": "",
                "ggg": "",
                "test": ""
            }];
            execute(executeList, function(err, res) {
                //proxyprinttodiv('after updatewid wid1 -- ', res, 34);
                cb1(err, res);
            });
        },
        function(cb2) {
            var dtoObjOpt = {
                "metadata": {
                    "method": "string"
                },
                "a": "wid2",
                "x": "wid2",
                "z": "wid2",
                "c": "number",
                "d": "date",
                "q": {
                    "w": {
                        "e": "string"
                    }
                },
                "g": "boolean"
            };
            var inputObj = {
                "metadata": {
                    "method": "defaultdto"
                },
                "a": "aaa",
                "x": "test",
                "z": "ggg",
                "c": "30",
                "d": "6/23/1912",
                "q": {
                    "w": {
                        "e": "t"
                    }
                },
                "g": "true"
            };
            var command = {
                "formatresult": "true"
            };

            deepfilter(inputObj, dtoObjOpt, command, function(err, res) {
                proxyprinttodiv("after d5 deepfilter res", res, 17);
                cb2(err, res);
            });
        }
    ], function(err, res) {
        proxyprinttodiv("res --", res, 17);
        var actual_result = [res];
        proxyprinttodiv("actual_result --", actual_result, 17);

        // var expected_result = [[[[{"data":{"aaa":"","ggg":"","test":""},"wid":"wid2","metadata":{"method":"defaultdto","date":"2014-03-19T12:20:54.139Z"}}]],{"metadata":{"method":"defaultdto"},"a":"aaa","x":"test","z":"ggg","c":"30","d":"6/23/1912","q":{"w":{"e":"t"}},"g":"true"}]];
        var expected_result = [
            [
                [
                    [{
                        "data": {
                            "aaa": "",
                            "ggg": "",
                            "test": ""
                        },
                        "wid": "wid2",
                        "metadata": {
                            "method": "defaultdto"
                        }
                    }]
                ], {
                    "metadata": {
                        "method": "defaultdto"
                    },
                    "a": "aaa",
                    "x": "test",
                    "z": "ggg",
                    "c": "30",
                    "d": "6/23/1912",
                    "q": {
                        "w": {
                            "e": "t"
                        }
                    },
                    "g": "true"
                }
            ]
        ];
        proxyprinttodiv("expected_result --", expected_result, 17);

        res = logverify("etd5", actual_result, expected_result);
        callback(err, res);
    });
}
widtests.etd5.category = "execute";
widtests.etd5.subcategory = "daily";
widtests.etd5.js = exports.etd5;
widtests.etd5.description = "this does a test";

/*    
      selected wid does not exist
*/
exports.etd6 = widtests.etd6 = etd6 = function etd6(params, callback) {
    debuglevel = 17;
    async.series([
        function(cb2) {
            var dtoObjOpt = {
                "metadata": {
                    "method": "string"
                },
                "a": "wid6",
                "x": "wid6",
                "z": "wid6",
                "c": "number",
                "d": "date",
                "q": {
                    "w": {
                        "e": "string"
                    }
                },
                "g": "boolean"
            };
            var inputObj = {
                "metadata": {
                    "method": "defaultdto"
                },
                "a": "aaa",
                "x": "test",
                "z": "ggg",
                "c": "30",
                "d": "6/23/1912",
                "q": {
                    "w": {
                        "e": "t"
                    }
                },
                "g": "true"
            };
            var command = {};

            deepfilter(inputObj, dtoObjOpt, command, function(err, res) {
                proxyprinttodiv("after d6 deepfilter res", res, 17);
                cb2(err, res);
            });
        }
    ], function(err, res) {
        proxyprinttodiv("res --", res, 17);
        var actual_result = [res];
        proxyprinttodiv("actual_result --", actual_result, 17);

        var expected_result = [
            [{
                "metadata": {
                    "method": "defaultdto"
                },
                "c": "30",
                "d": "6/23/1912",
                "q": {
                    "w": {
                        "e": "t"
                    }
                },
                "g": "true"
            }]
        ];
        proxyprinttodiv("expected_result --", expected_result, 17);

        res = logverify("etd6", actual_result, expected_result);
        callback(err, res);
    });
}
widtests.etd6.category = "execute";
widtests.etd6.subcategory = "daily";
widtests.etd6.js = exports.etd6;
widtests.etd6.description = "this does a test";

/*    
      dto = null,, then return same object
*/
exports.etd7 = widtests.etd7 = etd7 = function etd7(params, callback) {
    debuglevel = 17;
    async.series([
        function(cb1) {
            var executeList = [{
                "executethis": "updatewid",
                "wid": "wid2",
                "metadata.method": "defaultdto",
                "aaa": "",
                "ggg": ""
            }];
            execute(executeList, function(err, res) {
                //proxyprinttodiv('after updatewid wid1 -- ', res, 34);
                cb1(err, res);
            });
        },
        function(cb2) {
            /*var dtoObjOpt = {"metadata":{"method":"string"},"a":"wid2","x":"wid2", "z":"wid2",
                                    "c":"number","d":"date","q":{"w":{"e":"string"}},"g":"boolean"} ;
                  */
            var dtoObjOpt = null;
            var inputObj = {
                "metadata": {
                    "method": "defaultdto"
                },
                "a": "aaa",
                "x": "test",
                "z": "ggg",
                "c": "30",
                "d": "6/23/1912",
                "q": {
                    "w": {
                        "e": "t"
                    }
                },
                "g": "true"
            };
            var command = {};

            deepfilter(inputObj, dtoObjOpt, command, function(err, res) {
                proxyprinttodiv("after d7 deepfilter res", res, 17);
                cb2(err, res);
            });
        }
    ], function(err, res) {
        proxyprinttodiv("res --", res, 17);
        var actual_result = [res];
        proxyprinttodiv("actual_result --", actual_result, 17);

        var expected_result = [
            [
                [
                    [{
                        "data": {
                            "aaa": "",
                            "ggg": ""
                        },
                        "wid": "wid2",
                        "metadata": {
                            "method": "defaultdto",
                            "date": "2014-03-19T12:23:47.300Z"
                        }
                    }]
                ], {
                    "metadata": {
                        "method": "defaultdto"
                    },
                    "a": "aaa",
                    "x": "test",
                    "z": "ggg",
                    "c": "30",
                    "d": "6/23/1912",
                    "q": {
                        "w": {
                            "e": "t"
                        }
                    },
                    "g": "true"
                }
            ]
        ];
        // var expected_result = [[[[{"data":{"aaa":"","ggg":""},"wid":"wid2","metadata":{"method":"defaultdto"}}]],{"metadata":{"method":"defaultdto"},"a":"aaa","x":"test","z":"ggg","c":"30","d":"6/23/1912","q":{"w":{"e":"t"}},"g":"true"}]];
        proxyprinttodiv("expected_result --", expected_result, 17);

        res = logverify("etd7", actual_result, expected_result);
        callback(err, res);
    });
}
widtests.etd7.category = "execute";
widtests.etd7.subcategory = "daily";
widtests.etd7.js = exports.etd7;
widtests.etd7.description = "this does a test";

/*    
      date
*/
exports.etd8 = widtests.etd8 = etd8 = function etd8(params, callback) {
    debuglevel = 17;
    async.series([
        function(cb1) {
            var executeList = [{
                "executethis": "updatewid",
                "wid": "wid2",
                "metadata.method": "defaultdto",
                "aaa": "",
                "ggg": ""
            }];
            execute(executeList, function(err, res) {
                //proxyprinttodiv('after updatewid wid1 -- ', res, 34);
                cb1(err, res);
            });
        },
        function(cb2) {
            var dtoObjOpt = {
                "d": "date"
            };
            var inputObj = {
                "d": "6/23/1912"
            };
            var command = {};

            deepfilter(inputObj, dtoObjOpt, command, function(err, res) {
                proxyprinttodiv("after d8 deepfilter res", res, 17);
                cb2(err, res);
            });
        }
    ], function(err, res) {
        proxyprinttodiv("res --", res, 17);
        var actual_result = [res];
        proxyprinttodiv("actual_result --", actual_result, 17);

        var expected_result = [
            [
                [
                    [{
                        "data": {
                            "aaa": "",
                            "ggg": ""
                        },
                        "wid": "wid2",
                        "metadata": {
                            "method": "defaultdto",
                            "date": "2014-03-19T12:25:34.697Z"
                        }
                    }]
                ], {
                    "d": "6/23/1912"
                }
            ]
        ];
        // var expected_result = [[[[{"data":{"aaa":"","ggg":""},"wid":"wid2","metadata":{"method":"defaultdto"}}]],{"d":"6/23/1912"}]];
        proxyprinttodiv("expected_result --", expected_result, 17);

        res = logverify("etd8", actual_result, expected_result);
        callback(err, res);
    });
}
widtests.etd8.category = "execute";
widtests.etd8.subcategory = "daily";
widtests.etd8.js = exports.etd8;
widtests.etd8.description = "this does a test";

/*
      object dataType test
*/
exports.etd10 = widtests.etd10 = etd10 = function etd10(params, callback) {
    debuglevel = 17;
    async.series([
        function(cb1) {
            var executeList = [{
                "executethis": "updatewid",
                "wid": "wid5",
                "metadata.method": "defaultdto",
                "aaa": "",
                "ggg": ""
            }];
            execute(executeList, function(err, res) {
                //proxyprinttodiv('after updatewid wid1 -- ', res, 34);
                cb1(err, res);
            });
        }
    ], function(err, res) { //after updatewid
        var dtoObjOpt = {
            "obj": "",
            "c": "string",
            "d": {
                "executethis": "getwidmaster",
                "wid": "wid5"
            }
        };
        var inputObj = {
            "obj": "",
            "c": "cval",
            "d": {
                "executethis": "getwidmaster",
                "wid": "wid5"
            }
        };
        var command = {};

        deepfilter(inputObj, dtoObjOpt, command, function(err, res) {
            proxyprinttodiv("res --", res, 17);
            var actual_result = [res];
            proxyprinttodiv("actual_result --", actual_result, 17);

            var expected_result = [{
                "obj": "",
                "c": "cval",
                "d": {}
            }];
            proxyprinttodiv("expected_result --", expected_result, 17);

            res = logverify("etd10", actual_result, expected_result);
            callback(err, res);
        });
    });
}
widtests.etd10.category = "execute";
widtests.etd10.subcategory = "daily";
widtests.etd10.js = exports.etd10;
widtests.etd10.description = "this does a test";

exports.etd10b = widtests.etd10b = etd10b = function etd10b(params, callback) {
    debuglevel = 17;
    var obj = {
        "wid": "songdto",
        "metadata": {
            "method": "songdto",
            "sounddto": {
                "type": "jsononetomany"
            }
        },
        "title": "string",
        "sounddto": {
            "wid": "string",
            "metadata": {
                "method": "string"
            },
            "note": "string"
        }
    }

    var dto = {
        "wid": "string",
        "metadata": {
            "method": "string",
            "sounddto": {
                "type": "string"
            }
        },
        "title": "string",
        "sounddto": [{
            "wid": "string",
            "metadata": {
                "method": "string"
            },
            "note": "string"
        }],
        "command": {
            "dtolist": {
                "sounddto": "jsononetomany"
            }
        }
    }
    var command;
    if (!command) {
        command = {};
    }
    if (!command.deepfilter) {
        command.deepfilter = {};
    }
    command.deepfilter.convert = true;
    //exepected
    //{"wid":"songdto","metadata":{"method":"songdto","sounddto":{"type":"jsononetomany"}},
    //"title":"string","sounddto":[{"wid":"string","metadata":{"method":"string"},"note":"string"}]}

    deepfilter(obj, dto, command, function(err, res) {
        proxyprinttodiv('Function d10b deepfilter result ', res, 17);
        proxyprinttodiv("res --", res, 17);
        var actual_result = [res];
        proxyprinttodiv("actual_result --", actual_result, 17);

        var expected_result = [{
            "wid": "songdto",
            "metadata": {
                "method": "songdto",
                "sounddto": {
                    "type": "jsononetomany"
                }
            },
            "title": "string",
            "sounddto": [{
                "wid": "string",
                "metadata": {
                    "method": "string"
                },
                "note": "string"
            }]
        }];
        proxyprinttodiv("expected_result --", expected_result, 17);

        res = logverify("etd10b", actual_result, expected_result);
        callback(err, res);
    });
}
widtests.etd10b.category = "execute";
widtests.etd10b.subcategory = "daily";
widtests.etd10b.js = exports.etd10b;
widtests.etd10b.description = "this does a test";

/*
      test to confirm deepfilter with wid that returns query results works
*/
exports.etd11 = widtests.etd11 = etd11 = function etd11(params, callback) {
    debuglevel = 17;
    async.series([
        function(cb1) { //5 (a)
            var executeList = [{
                "executethis": "updatewid",
                "wid": "wid1",
                "metadata.method": "defaultdto",
                "x": "y",
                "a": "r"
            }, {
                "executethis": "updatewid",
                "wid": "wid2",
                "metadata.method": "defaultdto",
                "w": "z",
                "a": "y"
            }, {
                "executethis": "updatewid",
                "wid": "wid3",
                "metadata.method": "defaultdto",
                "a": "b",
                "g": "f"
            }, {
                "executethis": "updatewid",
                "wid": "wid4",
                "metadata.method": "defaultdto",
                "h": "j",
                "k": "y",
                "a": "p"
            }];
            execute(executeList, function(err, res) {
                //proxyprinttodiv('after updatewid wid1,2,3,4 -- ', res, 34);
                cb1(null);
            });
        },
        function step2(cb2) { //5 (b)
            var executeList = [{
                "executethis": "querywid",
                "command.results": "queryresult",
                "mongorawquery": '{"$or": [{ "data.a": "b" }]}'
            }];
            execute(executeList, function(err, res1) {
                var res = res1["queryresult"];
                //proxyprinttodiv("mongo query result ", res, 17);
                cb2(null);
            });
        },
        function step3(cb3) { //5 (c)
            var executeList = [{
                "executethis": "updatewid",
                "wid": "wid5",
                "metadata.method": "defaultdto",
                "addthis.executethis": "querywid",
                "mongorawquery": "{data.a:b}"
            }];
            execute(executeList, function(err, res) {
                //proxyprinttodiv("after updatewid wid5 -- ", res, 17);
                cb3(null);
            });
        },
        function step4(cb4) { //5 (d)
            getwidmaster({
                "wid": "wid5",
                "command": {
                    "getwidmaster": {
                        "execute": "false"
                    }
                }
            }, function(err, res) {
                //proxyprinttodiv("5 (d) getwidmaster  wid5 -- ", res, 17);
                cb4(null);
            });
        },
        function step5(cb5) { //5 (e)
            getwidmaster({
                "wid": "wid5"
            }, function(err, res) {
                //proxyprinttodiv("5 (e) getwidmaster  wid5 -- ", res, 17);
                cb5(null);
            });
        },
        function step6(cb6) { //5 (f)
            execute({
                "executethis": "wid5"
            }, function(err, res) {
                //proxyprinttodiv("5 (f) getwidmaster  wid5 -- ", res, 17);
                cb6(null);
            });
        },
        function step7(cb7) { //5 (g)
            execute("wid5", function(err, res) {
                //proxyprinttodiv("5 (g) getwidmaster  wid5 -- ", res, 17);
                cb7(null);
            });
        },
        function step8(cb8) { //step 8 deep filter d = wid5
            var dtoObjOpt = {
                "obj": "",
                "c": "string",
                "d": "wid5"
            };
            var inputObj = {
                "c": "hello",
                "d": "wid3"
            };
            var command = {};

            deepfilter(inputObj, dtoObjOpt, command, function(err, res) {
                //proxyprinttodiv("step 8 res--", res, 17);
                cb8(null);
            });
        },
        function step9(cb9) { //step 9 deep filter
            var dtoObjOpt = {
                "obj": "",
                "c": "string",
                "d": "wid5"
            };
            var inputObj = {
                "c": "hello",
                "d": "wid5"
            };
            var command = {};

            deepfilter(inputObj, dtoObjOpt, command, function(err, res) {
                //proxyprinttodiv("step 9 res--", res, 17);
                cb9(null);
            });
        },
        function step10(cb10) { //step 10 deep filter
            var dtoObjOpt = {
                "obj": "",
                "c": "string",
                "d": {
                    "executethis": "getwidmaster",
                    "wid": "wid5"
                }
            };
            var inputObj = {
                "obj": "",
                "c": "cval",
                "d": {
                    "executethis": "getwidmaster",
                    "wid": "wid5"
                }
            };
            var command = {};

            deepfilter(inputObj, dtoObjOpt, command, function(err, res) {
                proxyprinttodiv("d11 - step 10 res--", res, 17);
                cb10(err, res);
            });
        }
    ], function(err, res) {
        proxyprinttodiv("res --", res, 17);
        var actual_result = [res[9]];
        proxyprinttodiv("actual_result --", actual_result, 17);

        var expected_result = [{
            "obj": "",
            "c": "cval",
            "d": {}
        }];
        proxyprinttodiv("expected_result --", expected_result, 17);

        res = logverify("etd11", actual_result, expected_result);
        callback(err, res);
    });
}
widtests.etd11.category = "execute";
widtests.etd11.subcategory = "daily";
widtests.etd11.js = exports.etd11;
widtests.etd11.description = "this does a test";

/*
      command.deepfilter.convert = true/false
*/
exports.etd12 = widtests.etd12 = etd12 = function etd12(params, callback) {
    debuglevel = 17;
    async.series([
        function step1(cb1) { //without command
            var dtoObjOpt = {
                "b1": "boolean",
                "b2": "boolean"
            };
            var inputObj = {
                "b1": "true",
                "b2": false
            };
            var command = {};
            deepfilter(inputObj, dtoObjOpt, command, function(err, res) {
                //proxyprinttodiv("without command-- res ", res, 17);
                cb1(err, res);
            });
        },
        function step2(cb2) { //"command.deepfilter.convert"="true"
            var dtoObjOpt = {
                "b1": "boolean",
                "b2": "boolean"
            };
            var inputObj = {
                "b1": "true",
                "b2": false
            };
            var command = {
                "command.deepfilter.convert": "true"
            };
            deepfilter(inputObj, dtoObjOpt, command, function(err, res) {
                //proxyprinttodiv("command.deepfilter.convert = true-- res ", res, 17);
                cb2(err, res);
            });
        },
        function step3(cb3) { //"command.deepfilter.convert"="false"
            var dtoObjOpt = {
                "b1": "boolean",
                "b2": "boolean"
            };
            var inputObj = {
                "b1": "true",
                "b2": false
            };
            var command = {
                "command.deepfilter.convert": "false"
            };
            deepfilter(inputObj, dtoObjOpt, command, function(err, res) {
                proxyprinttodiv("d12 - command.deepfilter.convert = false-- res ", res, 17);
                cb3(err, res);
            });
        }
    ], function(err, res) {
        proxyprinttodiv("res --", res, 17);
        var actual_result = res;
        proxyprinttodiv("actual_result --", actual_result, 17);

        var expected_result = [{
            "b1": "true"
        }, {
            "b1": true
        }, {
            "b1": true
        }];
        proxyprinttodiv("expected_result --", expected_result, 17);

        res = logverify("etd12", actual_result, expected_result);
        callback(err, res);
    });
}
widtests.etd12.category = "execute";
widtests.etd12.subcategory = "daily";
widtests.etd12.js = exports.etd12;
widtests.etd12.description = "this does a test";

/*
      make with query that returns more than one item…test like below
      it produces one result wid3
      make it produce two results wid7,8,9
      test deepfilter and make sure it does not break
*/
exports.etd13 = widtests.etd13 = etd13 = function etd13(params, callback) {
    debuglevel = 17;
    async.series([
        function(cb1) {
            var executeList = [{
                "executethis": "updatewid",
                "wid": "wid2",
                "metadata.method": "defaultdto",
                "aaa": ""
            }, {
                "executethis": "updatewid",
                "wid": "wid3",
                "metadata.method": "defaultdto",
                "bbb": ""
            }];
            execute(executeList, function(err, res) {
                //proxyprinttodiv('after updatewid wid1 -- ', res, 34);
                cb1(err, res);
            });
        },
        function(cb2) {
            var dtoObjOpt = {
                "a": "wid2",
                "b": "wid2",
                "c": "wid3",
                "d": "wid3"
            };
            var inputObj = {
                "a": "aaa",
                "b": "test",
                "c": "bbb",
                "d": "dummy"
            };
            var command = {};

            deepfilter(inputObj, dtoObjOpt, command, function(err, res) {
                proxyprinttodiv("after d13 deepfilter res", res, 17);
                cb2(err, res);
            });
        }
    ], function(err, res) {
        proxyprinttodiv("res --", res, 17);
        var actual_result = res;
        proxyprinttodiv("actual_result --", actual_result, 17);

        // var expected_result = [[[{"data":{"aaa":""},"wid":"wid2","metadata":{"method":"defaultdto","date":"2014-03-19T12:40:36.431Z"}}],[{"data":{"bbb":""},"wid":"wid3","metadata":{"method":"defaultdto","date":"2014-03-19T12:40:36.481Z"}}]],{"a":"aaa","c":"bbb"}];
        var expected_result = [
            [
                [{
                    "data": {
                        "aaa": ""
                    },
                    "wid": "wid2",
                    "metadata": {
                        "method": "defaultdto"
                    }
                }],
                [{
                    "data": {
                        "bbb": ""
                    },
                    "wid": "wid3",
                    "metadata": {
                        "method": "defaultdto"
                    }
                }]
            ], {
                "a": "aaa",
                "c": "bbb"
            }
        ];
        proxyprinttodiv("expected_result --", expected_result, 17);

        res = logverify("etd13", actual_result, expected_result);
        callback(err, res);
    });
}
widtests.etd13.category = "execute";
widtests.etd13.subcategory = "daily";
widtests.etd13.js = exports.etd13;
widtests.etd13.description = "this does a test";

/*
      deep filter should process arrays
      i.e.
      dto=xdto
      a: string
      b: [c: string, d: string]

      inobj=
      a:test
      b:[{c:one, d:two}, {c:three, d:four}, {c:five, d:six}]
*/
exports.etd14 = widtests.etd14 = etd14 = function etd14(params, callback) {
    debuglevel = 17;
    async.series([
        function(cb1) {
            var dtoObjOpt = {
                "a": "string",
                "y": "string",
                "x": [{
                    "y": "string",
                    "b": [{
                        "c": "string",
                        "c1": "number"
                    }]
                }]
            };
            var inputObj = {
                "a": "aval",
                "y": "yes",
                "x": [{
                    "y": "hello",
                    "b": [{
                        "c": "one",
                        "c1": "50"
                    }, {
                        "c": "two",
                        "c1": "30"
                    }, {
                        "c": "three",
                        "d": "30"
                    }, {
                        "cx": "two",
                        "c1x": "30"
                    }]
                }],
                "q": "no"
            };
            var command = {
                "command.deepfilter.convert": true
            };

            deepfilter(inputObj, dtoObjOpt, command, function(err, res) {
                proxyprinttodiv("after d14 deepfilter in", inputObj, 17);
                proxyprinttodiv("after d14 deepfilter out", dtoObjOpt, 17);
                proxyprinttodiv("after d14 deepfilter res", res, 17);
                cb1(err, res);
            });
        }
    ], function(err, res) {
        proxyprinttodiv("res --", res, 17);
        var actual_result = res;
        proxyprinttodiv("actual_result --", actual_result, 17);

        var expected_result = [{
            "a": "aval",
            "y": "yes",
            "x": [{
                "y": "hello",
                "b": [{
                    "c": "one",
                    "c1": 50
                }, {
                    "c": "two",
                    "c1": 30
                }, {
                    "c": "three"
                }]
            }]
        }];
        proxyprinttodiv("expected_result --", expected_result, 17);

        res = logverify("etd14", actual_result, expected_result);
        callback(err, res);
    });
}
widtests.etd14.category = "execute";
widtests.etd14.subcategory = "daily";
widtests.etd14.js = exports.etd14;
widtests.etd14.description = "this does a test";

exports.etalldeepfiltertests = widtests.etalldeepfiltertests = etalldeepfiltertests = function etalldeepfiltertests(params, callback) {
    debuglevel = 17;

    var result = [];
    var err;

    etd1(result, function(err, r1) {
        result.push(r1);
        etd2(result, function(err, r2) {
            result.push(r2);
            etd3(result, function(err, r3) {
                result.push(r3);
                etd5(result, function(err, r5) {
                    result.push(r5);
                    etd6(result, function(err, r6) {
                        result.push(r6);
                        etd7(result, function(err, r7) {
                            result.push(r7);
                            etd8(result, function(err, r8) {
                                result.push(r8);
                                etd10(result, function(err, r10) {
                                    result.push(r10);
                                    etd10b(result, function(err, r10b) {
                                        result.push(r10b);
                                        etd11(result, function(err, r11) {
                                            result.push(r11);
                                            etd12(result, function(err, r12) {
                                                result.push(r12);
                                                etd13(result, function(err, r13) {
                                                    result.push(r13);
                                                    etd14(result, function(err, r14) {
                                                        result.push(r14);
                                                        callback(err, result);
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });

    });
}
widtests.etalldeepfiltertests.category = "execute";
widtests.etalldeepfiltertests.subcategory = "daily";
widtests.etalldeepfiltertests.js = exports.etalldeepfiltertests;
widtests.etalldeepfiltertests.description = "this does a test";

exports.etd9 = widtests.etd9 = etd9 = function etd9(params, callback) {
    debuglevel = 17;
    var dtoObjOpt = {
        "name": "string",
        "age": "string",
        "wid": "string",
        "metadata": {
            "method": "string",
            "spousedto": {
                "type": "jsononetoone"
            },
            "housedto": {
                "type": "onetoone"
            },
            "bookdto": {
                "type": "onetomany"
            },
            "expirationdate": "2014-03-14T09:00:01.106Z"
        },
        "command": {
            "inherit": {
                "defaultsystemactions": "defaultsystemactions"
            },
            "deepdtolist": {
                "systemdto": "onetoone",
                "addressdto": "onetomany",
                "statedto": "manytoone",
                "ownerdto": "onetoone",
                "pubhousedto": "manytoone",
                "spousedto": "jsononetoone",
                "housedto": "onetoone",
                "bookdto": "onetomany"
            },
            "dtolist": {
                "spousedto": "jsononetoone",
                "housedto": "onetoone",
                "bookdto": "onetomany",
                "systemdto": "onetoone"
            }
        },
        "spousedto": {
            "datemarried": "date",
            "wid": "string",
            "metadata": {
                "method": "string",
                "expirationdate": "2014-03-14T09:00:01.304Z"
            },
            "command": {
                "inherit": {
                    "defaultsystemactions": "defaultsystemactions"
                },
                "deepdtolist": {
                    "systemdto": "onetoone"
                },
                "dtolist": {
                    "systemdto": "onetoone"
                }
            }
        },
        "housedto": {
            "color": "string",
            "wid": "string",
            "metadata": {
                "method": "string",
                "expirationdate": "2014-03-14T09:00:01.674Z"
            },
            "command": {
                "inherit": {
                    "defaultsystemactions": "defaultsystemactions"
                },
                "deepdtolist": {
                    "systemdto": "onetoone"
                },
                "dtolist": {
                    "systemdto": "onetoone"
                }
            }
        },
        "bookdto": [{
            "title": "string",
            "pages": "string",
            "wid": "string",
            "metadata": {
                "method": "string",
                "pubhousedto": {
                    "type": "manytoone"
                },
                "expirationdate": "2014-03-14T09:00:02.076Z"
            },
            "command": {
                "inherit": {
                    "defaultsystemactions": "defaultsystemactions"
                },
                "deepdtolist": {
                    "systemdto": "onetoone",
                    "addressdto": "onetomany",
                    "statedto": "manytoone",
                    "ownerdto": "onetoone",
                    "pubhousedto": "manytoone"
                },
                "dtolist": {
                    "pubhousedto": "manytoone",
                    "systemdto": "onetoone"
                }
            },
            "pubhousedto": {
                "coname": "string",
                "establishdate": "date",
                "wid": "string",
                "metadata": {
                    "method": "string",
                    "addressdto": {
                        "type": "onetomany"
                    },
                    "statedto": {
                        "type": "manytoone"
                    },
                    "ownerdto": {
                        "type": "onetoone"
                    },
                    "expirationdate": "2014-03-14T09:00:02.598Z"
                },
                "command": {
                    "inherit": {
                        "defaultsystemactions": "defaultsystemactions"
                    },
                    "deepdtolist": {
                        "systemdto": "onetoone",
                        "addressdto": "onetomany",
                        "statedto": "manytoone",
                        "ownerdto": "onetoone"
                    },
                    "dtolist": {
                        "addressdto": "onetomany",
                        "statedto": "manytoone",
                        "ownerdto": "onetoone",
                        "systemdto": "onetoone"
                    }
                },
                "addressdto": [{
                    "city": "string",
                    "add1": "string",
                    "add2": "string",
                    "wid": "string",
                    "metadata": {
                        "method": "string",
                        "expirationdate": "2014-03-14T09:00:03.750Z"
                    },
                    "command": {
                        "inherit": {
                            "defaultsystemactions": "defaultsystemactions"
                        },
                        "deepdtolist": {
                            "systemdto": "onetoone"
                        },
                        "dtolist": {
                            "systemdto": "onetoone"
                        }
                    }
                }],
                "statedto": {
                    "statename": "string",
                    "zipcode": "string",
                    "wid": "string",
                    "metadata": {
                        "method": "string",
                        "expirationdate": "2014-03-14T09:00:04.297Z"
                    },
                    "command": {
                        "inherit": {
                            "defaultsystemactions": "defaultsystemactions"
                        },
                        "deepdtolist": {
                            "systemdto": "onetoone"
                        },
                        "dtolist": {
                            "systemdto": "onetoone"
                        }
                    }
                },
                "ownerdto": {
                    "name": "string",
                    "wid": "string",
                    "metadata": {
                        "method": "string",
                        "expirationdate": "2014-03-14T09:00:04.860Z"
                    },
                    "command": {
                        "inherit": {
                            "defaultsystemactions": "defaultsystemactions"
                        },
                        "deepdtolist": {
                            "systemdto": "onetoone"
                        },
                        "dtolist": {
                            "systemdto": "onetoone"
                        }
                    }
                }
            }
        }]
    }

    var inputObj = {
        "metadata": {
            "method": "authordto"
        },
        "wid": "wid1",
        "name": "somedata222",
        "age": "somedata",
        "spousedto": {
            "datemarried": "03/10/2014"
        },
        "housedto": {
            "color": "purple"
        },
        "bookdto": {
            "title": "Book 1",
            "pages": "300",
            "pubhousedto": {
                "coname": "Company Name",
                "establishdate": "03/10/2014",
                "addressdto": [{
                    "city": "City Name",
                    "add1": "Address1",
                    "add2": "Address2"
                }],
                "statedto": [{
                    "statename": "State Name tx",
                    "zipcode": "Z 123456"
                }],
                "ownerdto": [{
                    "name": "Owner Name"
                }]
            }
        }
    }

    var command = {};

    deepfilter(inputObj, dtoObjOpt, command, function(err, res) {
        proxyprinttodiv("after d3 deepfilter res", res, 99, true);

        proxyprinttodiv("res --", res, 17);
        var actual_result = [res];
        proxyprinttodiv("actual_result --", actual_result, 17);

        var expected_result = [{
            "metadata": {
                "method": "authordto"
            },
            "wid": "wid1",
            "name": "somedata222",
            "age": "somedata",
            "spousedto": {
                "datemarried": "03/10/2014"
            },
            "housedto": {
                "color": "purple"
            },
            "bookdto": [{
                "title": "Book 1",
                "pages": "300",
                "pubhousedto": {
                    "coname": "Company Name",
                    "establishdate": "03/10/2014",
                    "addressdto": [{
                        "city": "City Name",
                        "add1": "Address1",
                        "add2": "Address2"
                    }],
                    "statedto": [{
                        "statename": "State Name tx",
                        "zipcode": "Z 123456"
                    }],
                    "ownerdto": [{
                        "name": "Owner Name"
                    }]
                }
            }]
        }];
        proxyprinttodiv("expected_result --", expected_result, 17);

        res = logverify("logverify", actual_result, expected_result);
        callback(err, res);
    });
}
widtests.etd9.category = "execute";
widtests.etd9.subcategory = "daily";
widtests.etd9.js = exports.etd9;
widtests.etd9.description = "this does a test";

/*
      4) 
      We want to get our current getnewwid to come from a database:
      in et-utils change getnewwid
      execute(execute=getwid, wid="currentwid")
      if blank then wid = 1
      else wid=wid+1
      execute(execute=updatewid, wid=currentwid)
      return new wid
*/
exports.getnewwid1 = widtests.getnewwid1 = getnewwid1 = function getnewwid1(params, callback) {
    async.series([
        function(cb1) {
            getnewwid(function(err, res) {
                proxyprinttodiv("after getnewwid", res, 17);
                cb1(null);
            });
        }
    ], function(err, res) {
        params = {
            'test': 'PASS'
        };
        callback(params);
    });
}
widtests.getnewwid1.category = "execute";
widtests.getnewwid1.subcategory = "daily";
widtests.getnewwid1.js = exports.getnewwid1;
widtests.getnewwid1.description = "this does a test";

// DTO 1, dot > object 3, dot
exports.ettest1dot3dot = widtests.ettest1dot3dot = ettest1dot3dot = function ettest1dot3dot(params, callback) {
    eventappinstall();

    debuglevel = 0;

    execute([{
            "executethis": "addwidmaster",
            "wid": "songdto",
            "metadata.method": "songdto",
            "title": "string",
            "metadata.sounddto.type": "onetomany",
            "sounddto.wid": "sounddto",
            "sounddto.metadata.method": "sounddto",
            "sounddto.note": "string"
        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "songdto",
            "title": "Highway to Hell",
            "sounddto.note": "A flat"
        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "songdto",
            "title": "Highway to Hell",
            "sounddto.note": "B sharp"
        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "songdto",
            "title": "Highway to Hell",
            "sounddto.note": "C flat"
        }, {
            "executethis": "getwidmaster",
            "wid": "song1"
        }],
        function(err, res) {

            proxyprinttodiv('Function ag3 result Full res', res, 17);
            proxyprinttodiv('Function ag3 result ', res[4], 17);

            res = logverify("ettest1dot3dot", res[4], [{
                "title": "Highway to Hell",
                "wid": "song1",
                "metadata.method": "songdto",
                "sounddto.0.note": "A flat",
                "sounddto.0.wid": "2",
                "sounddto.0.metadata.method": "sounddto",
                "sounddto.1.note": "B sharp",
                "sounddto.1.wid": "4",
                "sounddto.1.metadata.method": "sounddto",
                "sounddto.2.note": "C flat",
                "sounddto.2.wid": "6",
                "sounddto.2.metadata.method": "sounddto",
                "metadata.sounddto.type": "onetomany"
            }]);

            //execute({"executethis": "getwidmaster","wid": "songdto",
            //      "command":{"getwidmaster":{"convertmethod":"dto",
            //                              "execute":"ConvertFromDOTdri",
            //                              "inheritflag":"true","dtotype":""}}}, function (err, res1) {
            execute({
                "executethis": "getwidmaster",
                "wid": "song1"
            }, function(err, res1) {
                proxyprinttodiv('Function ag3 result LAST ', res1, 17);
                callback(err, res);

            })
        });
}
widtests.ettest1dot3dot.category = "execute";
widtests.ettest1dot3dot.subcategory = "daily";
widtests.ettest1dot3dot.js = exports.ettest1dot3dot;
widtests.ettest1dot3dot.description = "this does a test";

// DTO 3, dot > object 3, dot
exports.ettest3dot3dot = widtests.ettest3dot3dot = ettest3dot3dot = function ettest3dot3dot(params, callback) {
    eventappinstall();

    debuglevel = 0;

    execute([{
            "executethis": "addwidmaster",
            "metadata.method": "songdto",
            "wid": "songdto",
            "title": "string",
        }, {
            "executethis": "addwidmaster",
            "metadata.method": "sounddto",
            "wid": "sounddto",
            "note": "string"
        }, {
            "executethis": "addwidmaster",
            "wid": "rel_song_sound",
            "metadata.method": "relationshipdto",
            "relationshiptype": "attributes",
            "linktype": "onetomany",
            "primarywid": "songdto",
            "primarymethod": "songdto",
            "secondarywid": "sounddto",
            "secondarymethod": "sounddto"
        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "songdto",
            "title": "Highway to Hell",
            "sounddto.note": "A flat"
        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "songdto",
            "title": "Highway to Hell",
            "sounddto.note": "B sharp"
        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "songdto",
            "title": "Highway to Hell",
            "sounddto.note": "C flat"
        }, {
            "executethis": "getwidmaster",
            "wid": "song1"
        }],


        function(err, res) {

            proxyprinttodiv('Function ag3 result Full res', res, 17);
            proxyprinttodiv('Function ag3 result 3 x 3', res[6], 17);

            res = logverify("ettest3dot3dot", res[6], [{
                "title": "Highway to Hell",
                "sounddto.0.wid": "1",
                "sounddto.0.note": "A flat",
                "sounddto.0.metadata.method": "sounddto",
                "sounddto.1.wid": "3",
                "sounddto.1.note": "B sharp",
                "sounddto.1.metadata.method": "sounddto",
                "sounddto.2.wid": "5",
                "sounddto.2.note": "C flat",
                "sounddto.2.metadata.method": "sounddto",
                "wid": "song1",
                "metadata.method": "songdto",
                "metadata.sounddto.type": "onetomany"


            }]);
            // execute({"executethis": "getwidmaster","wid": "songdto",
            //       "command":{"getwidmaster":{"convertmethod":"dto",
            //                               "execute":"ConvertFromDOTdri",
            //                               "inheritflag":"true","dtotype":""}}}, function (err, res1) {
            execute({
                "executethis": "getwidmaster",
                "wid": "song1"
            }, function(err, res1) {
                proxyprinttodiv('Function ag3 result LAST ', res1, 17);
                callback(err, res);

            })
        });
}
widtests.ettest3dot3dot.category = "execute";
widtests.ettest3dot3dot.subcategory = "daily";
widtests.ettest3dot3dot.js = exports.ettest3dot3dot;
widtests.ettest3dot3dot.description = "this does a test";

// DTO 3, dot > object 3, dot
exports.ettest3dot1dot = widtests.ettest3dot1dot = ettest3dot1dot = function ettest3dot1dot(params, callback) {
    eventappinstall();

    debuglevel = 0;

    execute([{
            "executethis": "addwidmaster",
            "metadata.method": "songdto",
            "wid": "songdto",
            "title": "string",
        }, {
            "executethis": "addwidmaster",
            "metadata.method": "sounddto",
            "wid": "sounddto",
            "note": "string"
        }, {
            "executethis": "addwidmaster",
            "wid": "rel_song_sound",
            "metadata.method": "relationshipdto",
            "relationshiptype": "attributes",
            "linktype": "onetomany",
            "primarywid": "songdto",
            "primarymethod": "songdto",
            "secondarywid": "sounddto",
            "secondarymethod": "sounddto"
        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "songdto",
            "title": "Highway to Hell",
            "sounddto.0.note": "A flat",
            "sounddto.1.note": "B sharp",
            "sounddto.2.note": "C flat"
        }, {
            "executethis": "getwidmaster",
            "wid": "song1"
        }],


        function(err, res) {

            proxyprinttodiv('Function ag3 result Full res', res, 17);
            proxyprinttodiv('Function ag3 result 3 x 3', res[4], 17);

            res = logverify("ettest3dot1dot", res[4], [{
                "title": "Highway to Hell",
                "sounddto.0.wid": "1",
                "sounddto.0.note": "A flat",
                "sounddto.0.metadata.method": "sounddto",
                "sounddto.1.wid": "3",
                "sounddto.1.note": "B sharp",
                "sounddto.1.metadata.method": "sounddto",
                "sounddto.2.wid": "5",
                "sounddto.2.note": "C flat",
                "sounddto.2.metadata.method": "sounddto",
                "wid": "song1",
                "metadata.method": "songdto",
                "metadata.sounddto.type": "onetomany"


            }]);
            // execute({"executethis": "getwidmaster","wid": "songdto",
            //       "command":{"getwidmaster":{"convertmethod":"dto",
            //                               "execute":"ConvertFromDOTdri",
            //                               "inheritflag":"true","dtotype":""}}}, function (err, res1) {
            execute({
                "executethis": "getwidmaster",
                "wid": "song1"
            }, function(err, res1) {
                proxyprinttodiv('Function ag3 result LAST ', res1, 17);
                callback(err, res);

            })
        });
}
widtests.ettest3dot1dot.category = "execute";
widtests.ettest3dot1dot.subcategory = "daily";
widtests.ettest3dot1dot.js = exports.ettest3dot1dot;
widtests.ettest3dot1dot.description = "this does a test";

// DTO 3, dot > object 3, dot
exports.ettest1dot1dot = widtests.ettest1dot1dot = ettest1dot1dot = function ettest1dot1dot(params, callback) {
    eventappinstall();

    debuglevel = 0;

    execute([{
            "executethis": "addwidmaster",
            "wid": "songdto",
            "metadata.method": "songdto",
            "title": "string",
            "metadata.sounddto.type": "onetomany",
            "sounddto.wid": "sounddto",
            "sounddto.metadata.method": "sounddto",
            "sounddto.note": "string"
        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "songdto",
            "title": "Highway to Hell",
            "sounddto.0.note": "A flat",
            "sounddto.1.note": "B sharp",
            "sounddto.2.note": "C flat"
        }, {
            "executethis": "getwidmaster",
            "wid": "song1"
        }],

        function(err, res) {

            proxyprinttodiv('Function ag3 result Full res', res, 17);
            proxyprinttodiv('Function ag3 result 3 x 3', res[2], 17);

            res = logverify("ettest1dot1dot", res[2], [{
                "title": "Highway to Hell",
                "sounddto.0.wid": "2",
                "sounddto.0.note": "A flat",
                "sounddto.0.metadata.method": "sounddto",
                "sounddto.1.wid": "4",
                "sounddto.1.note": "B sharp",
                "sounddto.1.metadata.method": "sounddto",
                "sounddto.2.wid": "6",
                "sounddto.2.note": "C flat",
                "sounddto.2.metadata.method": "sounddto",
                "wid": "song1",
                "metadata.method": "songdto",
                "metadata.sounddto.type": "onetomany"

            }]);

            // execute({"executethis": "getwidmaster","wid": "songdto",
            //       "command":{"getwidmaster":{"convertmethod":"dto",
            //                               "execute":"ConvertFromDOTdri",
            //                               "inheritflag":"true","dtotype":""}}}, function (err, res1) {
            execute({
                "executethis": "getwidmaster",
                "wid": "song1"
            }, function(err, res1) {
                proxyprinttodiv('Function ag3 result LAST ', res1, 17);
                callback(err, res);

            })
        });
}
widtests.ettest1dot1dot.category = "execute";
widtests.ettest1dot1dot.subcategory = "daily";
widtests.ettest1dot1dot.js = exports.ettest1dot1dot;
widtests.ettest1dot1dot.description = "this does a test";

/* jsononetomany tests */
// DTO 1, dot > object , dot,, jsononetomany
exports.ettest1dot3dotjsonmany = widtests.ettest1dot3dotjsonmany = ettest1dot3dotjsonmany = function ettest1dot3dotjsonmany(params, callback) {
    eventappinstall();

    debuglevel = 0;

    execute([{
            "executethis": "addwidmaster",
            "wid": "songdto",
            "metadata.method": "songdto",
            "title": "string",
            "metadata.sounddto.type": "jsononetomany",
            //"sounddto.wid": "sounddto",
            //"sounddto.metadata.method": "sounddto",
            "sounddto.wid": "string",
            "sounddto.metadata.method": "string",
            "sounddto.note": "string"

        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "songdto",
            "title": "Highway to Hell",
            "sounddto.note": "A flat"
        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "songdto",
            "title": "Highway to Hell",
            "sounddto.note": "B sharp"
        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "songdto",
            "title": "Highway to Hell",
            "sounddto.note": "C flat"
        }, {
            "executethis": "getwidmaster",
            "wid": "song1"
        }],

        function(err, res) {

            proxyprinttodiv('Function ag3 result Full res', res, 17);
            proxyprinttodiv('Function ag3 result ', res[4], 17);

            res = logverify("ettest1dot3dotjsonmany", res[4], [{
                "sounddto.0.note": "A flat",
                "sounddto.1.note": "B sharp",
                "sounddto.2.note": "C flat",
                "title": "Highway to Hell",
                "wid": "song1",
                "metadata.method": "songdto"
            }]);

            //[{"sounddto.0.note":"A flat","sounddto.1.note":"B sharp","sounddto.2.note":"C flat",
            //"title":"Highway to Hell","wid":"song1","metadata.method":"songdto"}]

            debuglevel = 38;
            //execute({"executethis": "getwidmaster","wid": "songdto",
            //      "command":{"getwidmaster":{"convertmethod":"dto",
            //                              "execute":"ConvertFromDOTdri",
            //                              "inheritflag":"true","dtotype":""}}}, function (err, res1) {
            execute({
                "executethis": "getwidmaster",
                "wid": "song1"
            }, function(err, res1) {
                proxyprinttodiv('Function ag3 result LAST ', res1, 17);
                callback(err, res);

            })
        });
}
widtests.ettest1dot3dotjsonmany.category = "execute";
widtests.ettest1dot3dotjsonmany.subcategory = "daily";
widtests.ettest1dot3dotjsonmany.js = exports.ettest1dot3dotjsonmany;
widtests.ettest1dot3dotjsonmany.description = "this does a test";

// DTO 3, dot > object 3, dot,, jsononetomany
exports.ettest3dot3dotjsonmany = widtests.ettest3dot3dotjsonmany = ettest3dot3dotjsonmany = function ettest3dot3dotjsonmany(params, callback) {
    eventappinstall();

    debuglevel = 0;

    execute([{
            "executethis": "addwidmaster",
            "metadata.method": "songdto",
            "wid": "songdto",
            "title": "string",
        }, {
            "executethis": "addwidmaster",
            "metadata.method": "sounddto",
            "wid": "sounddto",
            "note": "string"
        }, {
            "executethis": "addwidmaster",
            "wid": "rel_song_sound",
            "metadata.method": "relationshipdto",
            "relationshiptype": "attributes",
            "linktype": "jsononetomany",
            "primarywid": "songdto",
            "primarymethod": "songdto",
            "secondarywid": "sounddto",
            "secondarymethod": "sounddto"
        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "songdto",
            "title": "Highway to Hell",
            "sounddto.note": "A flat"
        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "songdto",
            "title": "Highway to Hell",
            "sounddto.note": "B sharp"
        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "songdto",
            "title": "Highway to Hell",
            "sounddto.note": "C flat"
        }, {
            "executethis": "getwidmaster",
            "wid": "song1"
        }],


        function(err, res) {

            proxyprinttodiv('Function ag3 result Full res', res, 17);
            proxyprinttodiv('Function ag3 result 3 x 3', res[6], 17);

            res = logverify("ettest3dot3dotjsonmany", res[6], [{
                "sounddto.0.note": "A flat",
                "sounddto.1.note": "B sharp",
                "sounddto.2.note": "C flat",
                "title": "Highway to Hell",
                "wid": "song1",
                "metadata.method": "songdto"
            }]);
            // execute({"executethis": "getwidmaster","wid": "songdto",
            //       "command":{"getwidmaster":{"convertmethod":"dto",
            //                               "execute":"ConvertFromDOTdri",
            //                               "inheritflag":"true","dtotype":""}}}, function (err, res1) {
            execute({
                "executethis": "getwidmaster",
                "wid": "song1"
            }, function(err, res1) {
                proxyprinttodiv('Function ag3 result LAST ', res1, 17);
                callback(err, res);

            })
        });
}
widtests.ettest3dot3dotjsonmany.category = "execute";
widtests.ettest3dot3dotjsonmany.subcategory = "daily";
widtests.ettest3dot3dotjsonmany.js = exports.ettest3dot3dotjsonmany;
widtests.ettest3dot3dotjsonmany.description = "this does a test";

// DTO 3, dot > object 3, dot,, jsononetomany
exports.ettest3dot1dotjsonmany = widtests.ettest3dot1dotjsonmany = ettest3dot1dotjsonmany = function ettest3dot1dotjsonmany(params, callback) {
    eventappinstall();

    debuglevel = 0;

    execute([{
            "executethis": "addwidmaster",
            "metadata.method": "songdto",
            "wid": "songdto",
            "title": "string",
        }, {
            "executethis": "addwidmaster",
            "metadata.method": "sounddto",
            "wid": "sounddto",
            "note": "string"
        }, {
            "executethis": "addwidmaster",
            "wid": "rel_song_sound",
            "metadata.method": "relationshipdto",
            "relationshiptype": "attributes",
            "linktype": "jsononetomany",
            "primarywid": "songdto",
            "primarymethod": "songdto",
            "secondarywid": "sounddto",
            "secondarymethod": "sounddto"
        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "songdto",
            "title": "Highway to Hell",
            "sounddto.0.note": "A flat",
            "sounddto.1.note": "B sharp",
            "sounddto.2.note": "C flat"
        }, {
            "executethis": "getwidmaster",
            "wid": "song1"
        }],


        function(err, res) {

            proxyprinttodiv('Function ag3 result Full res', res, 17);
            proxyprinttodiv('Function ag3 result 3 x 3', res[4], 17);

            res = logverify("ettest3dot1dotjsonmany", res[4], [{
                "sounddto.0.note": "A flat",
                "sounddto.1.note": "B sharp",
                "sounddto.2.note": "C flat",
                "title": "Highway to Hell",
                "wid": "song1",
                "metadata.method": "songdto"
            }]);
            // execute({"executethis": "getwidmaster","wid": "songdto",
            //       "command":{"getwidmaster":{"convertmethod":"dto",
            //                               "execute":"ConvertFromDOTdri",
            //                               "inheritflag":"true","dtotype":""}}}, function (err, res1) {
            execute({
                "executethis": "getwidmaster",
                "wid": "song1"
            }, function(err, res1) {
                proxyprinttodiv('Function ag3 result LAST ', res1, 17);
                callback(err, res);

            })
        });
}
widtests.ettest3dot1dotjsonmany.category = "execute";
widtests.ettest3dot1dotjsonmany.subcategory = "daily";
widtests.ettest3dot1dotjsonmany.js = exports.ettest3dot1dotjsonmany;
widtests.ettest3dot1dotjsonmany.description = "this does a test";

// DTO 3, dot > object 3, dot,, jsononetomany
exports.ettest1dot1dotjsonmany = widtests.ettest1dot1dotjsonmany = ettest1dot1dotjsonmany = function ettest1dot1dotjsonmany(params, callback) {
    eventappinstall();

    debuglevel = 0;

    execute([{
            "executethis": "addwidmaster",
            "wid": "songdto",
            "metadata.method": "songdto",
            "title": "string",
            "metadata.sounddto.type": "jsononetomany",
            "sounddto.wid": "sounddto",
            "sounddto.metadata.method": "sounddto",
            "sounddto.note": "string"
        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "songdto",
            "title": "Highway to Hell",
            "sounddto.0.note": "A flat",
            "sounddto.1.note": "B sharp",
            "sounddto.2.note": "C flat"
        }, {
            "executethis": "getwidmaster",
            "wid": "song1"
        }],

        function(err, res) {

            proxyprinttodiv('Function ag3 result Full res', res, 17);
            proxyprinttodiv('Function ag3 result 3 x 3', res[2], 17);

            res = logverify("ettest1dot1dotjsonmany", res[2], [{
                "sounddto.0.note": "A flat",
                "sounddto.1.note": "B sharp",
                "sounddto.2.note": "C flat",
                "title": "Highway to Hell",
                "wid": "song1",
                "metadata.method": "songdto"
            }]);
            // execute({"executethis": "getwidmaster","wid": "songdto",
            //       "command":{"getwidmaster":{"convertmethod":"dto",
            //                               "execute":"ConvertFromDOTdri",
            //                               "inheritflag":"true","dtotype":""}}}, function (err, res1) {
            execute({
                "executethis": "getwidmaster",
                "wid": "song1"
            }, function(err, res1) {
                proxyprinttodiv('Function ag3 result LAST ', res1, 17);
                callback(err, res);

            })
        });
}
widtests.ettest1dot1dotjsonmany.category = "execute";
widtests.ettest1dot1dotjsonmany.subcategory = "daily";
widtests.ettest1dot1dotjsonmany.js = exports.ettest1dot1dotjsonmany;
widtests.ettest1dot1dotjsonmany.description = "this does a test";

/* jsononetoone tests */
// DTO 1, dot > object , dot,, jsononetoone
exports.ettest1dot3dotjsonone = widtests.ettest1dot3dotjsonone = ettest1dot3dotjsonone = function ettest1dot3dotjsonone(params, callback) {
    eventappinstall();

    debuglevel = 0;

    execute([{
            "executethis": "addwidmaster",
            "wid": "songdto",
            "metadata.method": "songdto",
            "title": "string",
            "metadata.sounddto.type": "jsononetoone",
            //"sounddto.wid": "sounddto",
            //"sounddto.metadata.method": "sounddto",
            "sounddto.wid": "string",
            "sounddto.metadata.method": "string",
            "sounddto.note": "string"

        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "songdto",
            "title": "Highway to Hell",
            "sounddto.note": "A flat"
        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "songdto",
            "title": "Highway to Hell",
            "sounddto.note": "B sharp"
        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "songdto",
            "title": "Highway to Hell",
            "sounddto.note": "C flat"
        }, {
            "executethis": "getwidmaster",
            "wid": "song1"
        }],

        function(err, res) {

            proxyprinttodiv('Function ag3 result Full res', res, 17);
            proxyprinttodiv('Function ag3 result ', res[4], 17);

            res = logverify("ettest1dot3dotjsonone", res[4], [{
                "title": "Highway to Hell",
                "sounddto.note": "C flat",
                "wid": "song1",
                "metadata.method": "songdto"
            }]);
            //execute({"executethis": "getwidmaster","wid": "songdto",
            //      "command":{"getwidmaster":{"convertmethod":"dto",
            //                              "execute":"ConvertFromDOTdri",
            //                              "inheritflag":"true","dtotype":""}}}, function (err, res1) {
            execute({
                "executethis": "getwidmaster",
                "wid": "song1"
            }, function(err, res1) {
                proxyprinttodiv('Function ag3 result LAST ', res1, 17);
                callback(err, res);

            })
        });
}
widtests.ettest1dot3dotjsonone.category = "execute";
widtests.ettest1dot3dotjsonone.subcategory = "daily";
widtests.ettest1dot3dotjsonone.js = exports.ettest1dot3dotjsonone;
widtests.ettest1dot3dotjsonone.description = "this does a test";

// DTO 3, dot > object 3, dot,, jsononetoone
exports.ettest3dot3dotjsonone = widtests.ettest3dot3dotjsonone = ettest3dot3dotjsonone = function ettest3dot3dotjsonone(params, callback) {
    eventappinstall();

    debuglevel = 0;

    execute([{
            "executethis": "addwidmaster",
            "metadata.method": "songdto",
            "wid": "songdto",
            "title": "string",
        }, {
            "executethis": "addwidmaster",
            "metadata.method": "sounddto",
            "wid": "sounddto",
            "note": "string"
        }, {
            "executethis": "addwidmaster",
            "wid": "rel_song_sound",
            "metadata.method": "relationshipdto",
            "relationshiptype": "attributes",
            "linktype": "jsononetoone",
            "primarywid": "songdto",
            "primarymethod": "songdto",
            "secondarywid": "sounddto",
            "secondarymethod": "sounddto"
        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "songdto",
            "title": "Highway to Hell",
            "sounddto.note": "A flat"
        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "songdto",
            "title": "Highway to Hell",
            "sounddto.note": "B sharp"
        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "songdto",
            "title": "Highway to Hell",
            "sounddto.note": "C flat"
        }, {
            "executethis": "getwidmaster",
            "wid": "song1"
        }],


        function(err, res) {

            proxyprinttodiv('Function ag3 result Full res', res, 17);
            proxyprinttodiv('Function ag3 result 3 x 3', res[6], 17);

            res = logverify("ettest3dot3dotjsonone", res[6], [{
                "title": "Highway to Hell",
                "sounddto.note": "C flat",
                "wid": "song1",
                "metadata.method": "songdto"
            }]);
            // execute({"executethis": "getwidmaster","wid": "songdto",
            //       "command":{"getwidmaster":{"convertmethod":"dto",
            //                               "execute":"ConvertFromDOTdri",
            //                               "inheritflag":"true","dtotype":""}}}, function (err, res1) {
            execute({
                "executethis": "getwidmaster",
                "wid": "song1"
            }, function(err, res1) {
                proxyprinttodiv('Function ag3 result LAST ', res1, 17);
                callback(err, res);

            })
        });
}
widtests.ettest3dot3dotjsonone.category = "execute";
widtests.ettest3dot3dotjsonone.subcategory = "daily";
widtests.ettest3dot3dotjsonone.js = exports.ettest3dot3dotjsonone;
widtests.ettest3dot3dotjsonone.description = "this does a test";

// DTO 3, dot > object 3, dot,, jsononetoone
exports.ettest3dot1dotjsonone = widtests.ettest3dot1dotjsonone = ettest3dot1dotjsonone = function ettest3dot1dotjsonone(params, callback) {
    eventappinstall();

    debuglevel = 0;

    execute([{
            "executethis": "addwidmaster",
            "metadata.method": "songdto",
            "wid": "songdto",
            "title": "string",
        }, {
            "executethis": "addwidmaster",
            "metadata.method": "sounddto",
            "wid": "sounddto",
            "note": "string"
        }, {
            "executethis": "addwidmaster",
            "wid": "rel_song_sound",
            "metadata.method": "relationshipdto",
            "relationshiptype": "attributes",
            "linktype": "jsononetoone",
            "primarywid": "songdto",
            "primarymethod": "songdto",
            "secondarywid": "sounddto",
            "secondarymethod": "sounddto"
        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "songdto",
            "title": "Highway to Hell",
            "sounddto.0.note": "A flat",
            "sounddto.1.note": "B sharp",
            "sounddto.2.note": "C flat"
        }, {
            "executethis": "getwidmaster",
            "wid": "song1"
        }],


        function(err, res) {

            proxyprinttodiv('Function ag3 result Full res', res, 17);
            proxyprinttodiv('Function ag3 result 3 x 3', res[4], 17);

            res = logverify("ettest3dot1dotjsonone", res[4], [{
                "title": "Highway to Hell",
                //"sounddto.0.note":"A flat",
                //"sounddto.1.note":"B sharp",
                "sounddto.note": "C flat",
                "wid": "song1",
                "metadata.method": "songdto"
            }]);
            // execute({"executethis": "getwidmaster","wid": "songdto",
            //       "command":{"getwidmaster":{"convertmethod":"dto",
            //                               "execute":"ConvertFromDOTdri",
            //                               "inheritflag":"true","dtotype":""}}}, function (err, res1) {
            execute({
                "executethis": "getwidmaster",
                "wid": "song1"
            }, function(err, res1) {
                proxyprinttodiv('Function ag3 result LAST ', res1, 17);
                callback(err, res);

            })
        });
}
widtests.ettest3dot1dotjsonone.category = "execute";
widtests.ettest3dot1dotjsonone.subcategory = "daily";
widtests.ettest3dot1dotjsonone.js = exports.ettest3dot1dotjsonone;
widtests.ettest3dot1dotjsonone.description = "this does a test";

// DTO 3, dot > object 3, dot,, jsononetoone
exports.ettest1dot1dotjsonone = widtests.ettest1dot1dotjsonone = ettest1dot1dotjsonone = function ettest1dot1dotjsonone(params, callback) {
    eventappinstall();

    debuglevel = 17;

    execute([{
            "executethis": "addwidmaster",
            "wid": "songdto",
            "metadata.method": "songdto",
            "title": "string",
            "metadata.sounddto.type": "jsononetoone",
            "sounddto.wid": "sounddto",
            "sounddto.metadata.method": "sounddto",
            "sounddto.note": "string"
        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "songdto",
            "title": "Highway to Hell",
            "sounddto.0.note": "A flat",
            "sounddto.1.note": "B sharp",
            "sounddto.2.note": "C flat"
        }, {
            "executethis": "getwidmaster",
            "wid": "song1"
        }],
        function(err, res) {

            proxyprinttodiv('Function ag3 result Full res', res, 17);
            proxyprinttodiv('Function ag3 result 3 x 3', res[2], 17);

            res = logverify("ettest1dot1dotjsonone", res[2], [{
                "title": "Highway to Hell",
                //"sounddto.0.note":"A flat",
                //"sounddto.1.note":"B sharp",
                "sounddto.note": "C flat",
                "wid": "song1",
                "metadata.method": "songdto"
            }]);
            // execute({"executethis": "getwidmaster","wid": "songdto",
            //       "command":{"getwidmaster":{"convertmethod":"dto",
            //                               "execute":"ConvertFromDOTdri",
            //                               "inheritflag":"true","dtotype":""}}}, function (err, res1) {
            execute({
                "executethis": "getwidmaster",
                "wid": "song1"
            }, function(err, res1) {
                proxyprinttodiv('Function ag3 result LAST ', res1, 17);
                callback(err, res);

            })
        });
}
widtests.ettest1dot1dotjsonone.category = "execute";
widtests.ettest1dot1dotjsonone.subcategory = "daily";
widtests.ettest1dot1dotjsonone.js = exports.ettest1dot1dotjsonone;
widtests.ettest1dot1dotjsonone.description = "this does a test";

/* object tests */
// DTO 1, dot > object , dot,, object
exports.ettest1dot3dotobject = widtests.ettest1dot3dotobject = ettest1dot3dotobject = function ettest1dot3dotobject(params, callback) {
    eventappinstall();

    debuglevel = 0;

    execute([{
            "executethis": "addwidmaster",
            "wid": "songdto",
            "metadata": {
                "method": "songdto"
            },
            "title": "string",
            "metadata.sounddto.type": "jsononetoone",
            //"sounddto.wid": "sounddto",
            //"sounddto.metadata.method": "sounddto",
            "sounddto": {
                "wid": "string"
            },
            "sounddto": {
                "metadata": {
                    "method": "string"
                }
            },
            "sounddto": {
                "note": "string"
            }

        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata": {
                "method": "songdto"
            },
            "title": "Highway to Hell",
            "sounddto": {
                "note": "A flat"
            }
        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata": {
                "method": "songdto"
            },
            "title": "Highway to Hell",
            "sounddto": {
                "note": "B sharp"
            }
        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata": {
                "method": "songdto"
            },
            "title": "Highway to Hell",
            "sounddto": {
                "note": "C flat"
            }
        }, {
            "executethis": "getwidmaster",
            "wid": "song1"
        }],

        function(err, res) {

            proxyprinttodiv('Function ag3 result Full res', res, 17);
            proxyprinttodiv('Function ag3 result ', res[4], 17);

            res = logverify("ettest1dot3dotobject", res[4], [{
                "title": "Highway to Hell",
                "sounddto.note": "C flat",
                "wid": "song1",
                "metadata.method": "songdto"
            }]);

            //execute({"executethis": "getwidmaster","wid": "songdto",
            //      "command":{"getwidmaster":{"convertmethod":"dto",
            //                              "execute":"ConvertFromDOTdri",
            //                              "inheritflag":"true","dtotype":""}}}, function (err, res1) {
            execute({
                "executethis": "getwidmaster",
                "wid": "song1"
            }, function(err, res1) {
                proxyprinttodiv('Function ag3 result LAST ', res1, 17);
                callback(err, res);

            })
        });
}
widtests.ettest1dot3dotobject.category = "execute";
widtests.ettest1dot3dotobject.subcategory = "daily";
widtests.ettest1dot3dotobject.js = exports.ettest1dot3dotobject;
widtests.ettest1dot3dotobject.description = "this does a test";

// DTO 3, dot > object 3, dot,, object
exports.ettest3dot3dotobject = widtests.ettest3dot3dotobject = ettest3dot3dotobject = function ettest3dot3dotobject(params, callback) {
    eventappinstall();

    debuglevel = 0;

    execute([{
            "executethis": "addwidmaster",
            "metadata": {
                "method": "songdto"
            },
            "wid": "songdto",
            "title": "string",
        }, {
            "executethis": "addwidmaster",
            "metadata": {
                "method": "sounddto"
            },
            "wid": "sounddto",
            "note": "string"
        }, {
            "executethis": "addwidmaster",
            "wid": "rel_song_sound",
            "metadata": {
                "method": "relationshipdto"
            },
            "relationshiptype": "attributes",
            "linktype": "jsononetoone",
            "primarywid": "songdto",
            "primarymethod": "songdto",
            "secondarywid": "sounddto",
            "secondarymethod": "sounddto"
        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata": {
                "method": "songdto"
            },
            "title": "Highway to Hell",
            "sounddto": {
                "note": "A flat"
            }
        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata": {
                "method": "songdto"
            },
            "title": "Highway to Hell",
            "sounddto": {
                "note": "B sharp"
            }
        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata": {
                "method": "songdto"
            },
            "title": "Highway to Hell",
            "sounddto": {
                "note": "C flat"
            }
        }, {
            "executethis": "getwidmaster",
            "wid": "song1"
        }],


        function(err, res) {

            proxyprinttodiv('Function ag3 result Full res', res, 17);
            proxyprinttodiv('Function ag3 result 3 x 3', res[6], 17);

            res = logverify("ettest3dot3dotobject", res[6], [{
                "title": "Highway to Hell",
                "sounddto.note": "C flat",
                "wid": "song1",
                "metadata.method": "songdto"
            }]);
            // execute({"executethis": "getwidmaster","wid": "songdto",
            //       "command":{"getwidmaster":{"convertmethod":"dto",
            //                               "execute":"ConvertFromDOTdri",
            //                               "inheritflag":"true","dtotype":""}}}, function (err, res1) {
            execute({
                "executethis": "getwidmaster",
                "wid": "song1"
            }, function(err, res1) {
                proxyprinttodiv('Function ag3 result LAST ', res1, 17);
                callback(err, res);

            })
        });
}
widtests.ettest3dot3dotobject.category = "execute";
widtests.ettest3dot3dotobject.subcategory = "daily";
widtests.ettest3dot3dotobject.js = exports.ettest3dot3dotobject;
widtests.ettest3dot3dotobject.description = "this does a test";

// DTO 3, dot > object 3, dot,, object
exports.ettest3dot1dotobject = widtests.ettest3dot1dotobject = ettest3dot1dotobject = function ettest3dot1dotobject(params, callback) {
    eventappinstall();

    debuglevel = 0;

    execute([{
            "executethis": "addwidmaster",
            "metadata": {
                "method": "songdto"
            },
            "wid": "songdto",
            "title": "string",
        }, {
            "executethis": "addwidmaster",
            "metadata": {
                "method": "sounddto"
            },
            "wid": "sounddto",
            "note": "string"
        }, {
            "executethis": "addwidmaster",
            "wid": "rel_song_sound",
            "metadata": {
                "method": "relationshipdto"
            },
            "relationshiptype": "attributes",
            "linktype": "jsononetoone",
            "primarywid": "songdto",
            "primarymethod": "songdto",
            "secondarywid": "sounddto",
            "secondarymethod": "sounddto"
        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata": {
                "method": "songdto"
            },
            "title": "Highway to Hell",
            "sounddto.0.note": "A flat",
            "sounddto.1.note": "B sharp",
            "sounddto.2.note": "C flat"
        }, {
            "executethis": "getwidmaster",
            "wid": "song1"
        }],
        function(err, res) {

            proxyprinttodiv('Function ag3 result Full res', res, 17);
            proxyprinttodiv('Function ag3 result 3 x 3', res[4], 17);

            res = logverify("ettest3dot1dotobject", res[4], [{
                "title": "Highway to Hell",
                // "sounddto.0.note":"A flat",
                // "sounddto.1.note":"B sharp",
                "sounddto.note": "C flat",
                "wid": "song1",
                "metadata.method": "songdto"
            }]);
            // execute({"executethis": "getwidmaster","wid": "songdto",
            //       "command":{"getwidmaster":{"convertmethod":"dto",
            //                               "execute":"ConvertFromDOTdri",
            //                               "inheritflag":"true","dtotype":""}}}, function (err, res1) {
            execute({
                "executethis": "getwidmaster",
                "wid": "song1"
            }, function(err, res1) {
                proxyprinttodiv('Function ag3 result LAST ', res1, 17);
                callback(err, res);

            })
        });
}
widtests.ettest3dot1dotobject.category = "execute";
widtests.ettest3dot1dotobject.subcategory = "daily";
widtests.ettest3dot1dotobject.js = exports.ettest3dot1dotobject;
widtests.ettest3dot1dotobject.description = "this does a test";

// DTO 3, dot > object 3, dot,, object
exports.ettest1dot1dotobject = widtests.ettest1dot1dotobject = ettest1dot1dotobject = function ettest1dot1dotobject(params, callback) {
    eventappinstall();

    debuglevel = 0;

    execute([{
            "executethis": "addwidmaster",
            "wid": "songdto",
            "metadata": {
                "method": "songdto"
            },
            "title": "string",
            "metadata": {
                "sounddto": {
                    "type": "jsononetoone"
                }
            },
            "sounddto": {
                "wid": "sounddto"
            },
            "sounddto": {
                "metadata": {
                    "method": "sounddto"
                }
            },
            "sounddto": {
                "note": "string"
            }
        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata": {
                "method": "songdto"
            },
            "title": "Highway to Hell",
            "sounddto.0.note": "A flat",
            "sounddto.1.note": "B sharp",
            "sounddto.2.note": "C flat"
        }, {
            "executethis": "getwidmaster",
            "wid": "song1"
        }],

        function(err, res) {

            proxyprinttodiv('Function ag3 result Full res', res, 17);
            proxyprinttodiv('Function ag3 result 3 x 3', res[2], 17);

            res = logverify("ettestagag3_result", res[2], [{
                "title": "Highway to Hell",
                // "sounddto.0.note":"A flat",
                // "sounddto.1.note":"B sharp",
                "sounddto.note": "C flat",
                "wid": "song1",
                "metadata.method": "songdto"
            }]);
            // execute({"executethis": "getwidmaster","wid": "songdto",
            //       "command":{"getwidmaster":{"convertmethod":"dto",
            //                               "execute":"ConvertFromDOTdri",
            //                               "inheritflag":"true","dtotype":""}}}, function (err, res1) {
            execute({
                "executethis": "getwidmaster",
                "wid": "song1"
            }, function(err, res1) {
                proxyprinttodiv('Function ag3 result LAST ', res1, 17);
                callback(err, res);
            })
        });
}
widtests.ettest1dot1dotobject.category = "execute";
widtests.ettest1dot1dotobject.subcategory = "daily";
widtests.ettest1dot1dotobject.js = exports.ettest1dot1dotobject;
widtests.ettest1dot1dotobject.description = "this does a test";

/*
ettest1dot3dotjsonmany
ettest3dot3dotjsonmany
ettest3dot1dotjsonmany
ettest1dot1dotjsonmany

ettest1dot3dotjsonone
ettest3dot3dotjsonone
ettest3dot1dotjsonone
ettest1dot1dotjsonone

ettest1dot3dotobject
ettest3dot3dotobject
ettest3dot1dotobject
ettest1dot1dotobject
*/

exports.ettestdot = widtests.ettestdot = ettestdot = function ettestdot(params, callback) {
    var result = [];
    var err;

    ettest1dot3dotjsonmany(result, function(err, r1) {
        result.push(r1);
        ettest3dot3dotjsonmany(result, function(err, r2) {
            result.push(r2);
            ettest3dot1dotjsonmany(result, function(err, r3) {
                result.push(r3);
                ettest1dot3dotjsonone(result, function(err, r4) {
                    result.push(r4);
                    ettest1dot3dotjsonone(result, function(err, r5) {
                        result.push(r5);
                        ettest3dot3dotjsonone(result, function(err, r6) {
                            result.push(r6);
                            ettest3dot1dotjsonone(result, function(err, r7) {
                                result.push(r7);
                                ettest1dot1dotjsonone(result, function(err, r8) {
                                    result.push(r8);
                                    ettest1dot3dotobject(result, function(err, r9) {
                                        result.push(r9);
                                        ettest3dot3dotobject(result, function(err, r10) {
                                            result.push(r10);
                                            ettest3dot1dotobject(result, function(err, r11) {
                                                result.push(r11);
                                                ettest1dot1dotobject(result, function(err, r12) {
                                                    result.push(r12);
                                                    callback(err, result);
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
}
widtests.ettestdot.category = "execute";
widtests.ettestdot.subcategory = "daily";
widtests.ettestdot.js = exports.ettestdot;
widtests.ettestdot.description = "this does a test";

/*
      deep filter tests for all dto types
      shortwid-create a short 5 digit alphanumeric
      guid-create a long guid
      hash-convert number to hash
      phone-phone number in international format +n nnn…
      random4-random 4 digit number

      convert = true or false (should the output be changed)
      totype = true or false (when the output is converted should it be the right type or string)
      
      4 input test cases :-
      string input, datatype input, blank input, wrong input
*/
// do same test 3 more times
// var command = {"command.deepfilter.convert":false};
// var command = {"command.deepfilter.totype":false};


// var command = {"command.deepfilter.convert":true};
// var command = {"command.deepfilter.totype":true};

// var command = {"command.deepfilter.convert":true};
// var command = {"command.deepfilter.totype":true};


function testDeepFilterTests(command, callback) {
    debuglevel = 0;
    async.series([
        function(cb1) {
            var dtoObjOpt = {
                "b1": "boolean",
                "s1": "string",
                "n1": "number",
                "i1": "integer",
                "d1": "date",
                "sg1": "shortguid",
                "g1": "guid",
                "h1": "hash",
                "p1": "phone",
                "r1": "random4",
                "b2": "boolean",
                "s2": "string",
                "n2": "number",
                "i2": "integer",
                "d2": "date",
                "sg2": "shortguid",
                "g2": "guid",
                "h2": "hash",
                "p2": "phone",
                "r2": "random4",
                "b3": "boolean",
                "s3": "string",
                "n3": "number",
                "i3": "integer",
                "d3": "date",
                "sg3": "shortguid",
                "g3": "guid",
                "h3": "hash",
                "p3": "phone",
                "r3": "random4",
                "b4": "boolean",
                "s4": "string",
                "n4": "number",
                "i4": "integer",
                "d4": "date",
                "sg4": "shortguid",
                "g4": "guid",
                "h4": "hash",
                "p4": "phone",
                "r4": "random4"
            };
            var inputObj = {
                "b1": "false",
                "s1": "hello",
                "n1": "30",
                "i1": "40",
                "d1": "2/27/2014",
                "h1": "ff00ff",
                "p1": "19998887777",
                "b2": false,
                "s2": "hello",
                "n2": 30,
                "i2": 40,
                "d2": "2014-02-27T18:30:00.000Z",
                "h2": "#ff00ff",
                "p2": "+19998887777",
                "b3": "",
                "s3": "",
                "n3": "",
                "i3": "",
                "d3": "",
                "h3": "",
                "p3": "",
                "b4": "x",
                "s4": false,
                "n4": "x",
                "i4": "x",
                "d4": "x",
                "h4": "x",
                "p4": "x"
            };

            /*
                  var dtoObjOpt = {
                              "b1":"boolean", "b2":"boolean", "b3":"boolean", "b4":"boolean",
                              //"s1":"string", "s2":"string", "s3":"string", "s4":"string",
                              //"n1":"number", "n2":"number", "n3":"number", "n4":"number",
                              //"i1":"integer", "i2":"integer", "i3":"integer", "i4":"integer",
                              //"d1":"date", "d2":"date", "d3":"date", "d4":"date",   
                              //"sg1":"shortguid", "sg2":"shortguid", "sg3":"shortguid", "sg4":"shortguid",
                              //"g1":"guid", "g2":"guid", "g3":"guid",, "g4":"guid", 
                              //"h1":"hash", "h2":"hash", "h3":"hash", "h4":"hash",
                              //"p1":"phone", "p2":"phone", "p3":"phone", "p4":"phone",
                              //"r1":"random4", "r2":"random4", "r3":"random4", "r4":"random4"
                              };
                  var inputObj = {
                              "b1":"false", "b2":false, "b3":"", "b4":"x", 
                              //"s1":"hello", "s2":"hello", "s3":"", "s4":false,
                              //"n1":"30", "n2":30, "n3":"", "n4":"x",
                              //"i1":"40", "i2":40, "i3":"", "i4":"x",
                              //"d1":"2/27/2014", "d2": new Date(2/27/2014), "d3":"", "d4":"x",
                              //"h1":"ff00ff", "h2":"ff00ff", "h3":"", "h4":"x",
                              //"p1":"+19998887777", "p2":"+19998887777", "p3":"", "p4":"x"
                              };    
                  */
            deepfilter(inputObj, dtoObjOpt, command, function(err, res) {
                proxyprinttodiv("after etd16 deepfilter in", inputObj, 17);
                proxyprinttodiv("after etd16 deepfilter dto", dtoObjOpt, 17);
                proxyprinttodiv("after etd16 deepfilter res", res, 17);
                cb1(err, res);
            });
        }
    ], function(err, res) {
        callback(err, res);
    });
}

/*
      "command.deepfilter.convert":true, "command.deepfilter.totype":true
*/
exports.etd16 = widtests.etd16 = etd16 = function etd16(params, callback) {
    var command = {
        "command.deepfilter.convert": true,
        "command.deepfilter.totype": true
    }; //string to datatype
    testDeepFilterTests(command, function(err, res) {
        proxyprinttodiv("after test convert:true totype: true --1:string, 2:type, 3:'', 4:wrong", res, 99, true);
        callback(err, res);
    });
}
widtests.etd16.category = "execute";
widtests.etd16.subcategory = "daily";
widtests.etd16.js = exports.etd16;
widtests.etd16.description = "this does a test";

/*
      "command.deepfilter.convert":true, "command.deepfilter.totype":false
*/
exports.etd17 = widtests.etd17 = etd17 = function etd17(params, callback) {
    var command = {
        "command.deepfilter.convert": true,
        "command.deepfilter.totype": false
    }; //datatype to string
    testDeepFilterTests(command, function(err, res) {
        proxyprinttodiv("after test convert:true totype: false --1:string, 2:type, 3:'', 4:wrong", res, 99, true);
        callback(err, res);
    });
}
widtests.etd17.category = "execute";
widtests.etd17.subcategory = "daily";
widtests.etd17.js = exports.etd17;
widtests.etd17.description = "this does a test";

/*
      "command.deepfilter.convert":false, "command.deepfilter.totype":true
      no conversion
*/
exports.etd18 = widtests.etd18 = etd18 = function etd18(params, callback) {
    var command = {
        "command.deepfilter.convert": false,
        "command.deepfilter.totype": true
    }; //no conversion
    testDeepFilterTests(command, function(err, res) {
        proxyprinttodiv("after test convert:false totype: true --1:string, 2:type, 3:'', 4:wrong", res, 99, true);
        callback(err, res);
    });
}
widtests.etd18.category = "execute";
widtests.etd18.subcategory = "daily";
widtests.etd18.js = exports.etd18;
widtests.etd18.description = "this does a test";

/*
      "command.deepfilter.convert":false, "command.deepfilter.totype":false
      no conversion
*/
exports.etd19 = widtests.etd19 = etd19 = function etd19(params, callback) {
    var command = {
        "command.deepfilter.convert": false,
        "command.deepfilter.totype": false
    }; //no conversion
    testDeepFilterTests(command, function(err, res) {
        proxyprinttodiv("after test convert:false totype: false --1:string, 2:type, 3:'', 4:wrong", res, 99, true);
        callback(err, res);
    });
}
widtests.etd19.category = "execute";
widtests.etd19.subcategory = "daily";
widtests.etd19.js = exports.etd19;
widtests.etd19.description = "this does a test";

/*
      deep filter tests for all dto types
      shortwid-create a short 5 digit alphanumeric
      guid-create a long guid
      hash-convert number to hash
      phone-phone number in international format +n nnn…
      random4-random 4 digit number

      convert = true or false (should the output be changed)
      totype = true or false (when the output is converted should it be the right type or string)
      
      4 input test cases :-
      string input, datatype input, blank input, wrong input
*/
// do same test 3 more times
// var command = {"command.deepfilter.convert":false};
// var command = {"command.deepfilter.totype":false};


// var command = {"command.deepfilter.convert":true};
// var command = {"command.deepfilter.totype":true};

// var command = {"command.deepfilter.convert":true};
// var command = {"command.deepfilter.totype":true};


function testDeepFilterTests(command, callback) {
    debuglevel = 0;
    async.series([
        function(cb1) {
            var dtoObjOpt = {
                "b1": "boolean",
                "s1": "string",
                "n1": "number",
                "i1": "integer",
                "d1": "date",
                "sg1": "shortguid",
                "g1": "guid",
                "h1": "hash",
                "p1": "phone",
                "r1": "random4",

                "b2": "boolean",
                "s2": "string",
                "n2": "number",
                "i2": "integer",
                "d2": "date",
                "sg2": "shortguid",
                "g2": "guid",
                "h2": "hash",
                "p2": "phone",
                "r2": "random4",

                "b3": "boolean",
                "s3": "string",
                "n3": "number",
                "i3": "integer",
                "d3": "date",
                "sg3": "shortguid",
                "g3": "guid",
                "h3": "hash",
                "p3": "phone",
                "r3": "random4",

                "b4": "boolean",
                "s4": "string",
                "n4": "number",
                "i4": "integer",
                "d4": "date",
                "sg4": "shortguid",
                "g4": "guid",
                "h4": "hash",
                "p4": "phone",
                "r4": "random4"
            };
            var inputObj = {
                "b1": "false",
                "s1": "hello",
                "n1": "30",
                "i1": "40",
                "d1": "2/27/2014",
                "h1": "ff00ff",
                "p1": "19998887777",

                "b2": false,
                "s2": "hello",
                "n2": 30,
                "i2": 40,
                "d2": "2014-02-27T18:30:00.000Z",
                "h2": "#ff00ff",
                "p2": "+19998887777",

                "b3": "",
                "s3": "",
                "n3": "",
                "i3": "",
                "d3": "",
                "h3": "",
                "p3": "",

                "b4": "x",
                "s4": false,
                "n4": "x",
                "i4": "x",
                "d4": "x",
                "h4": "x",
                "p4": "x"
            };

            /*
                  var dtoObjOpt = {
                              "b1":"boolean", "b2":"boolean", "b3":"boolean", "b4":"boolean",
                              //"s1":"string", "s2":"string", "s3":"string", "s4":"string",
                              //"n1":"number", "n2":"number", "n3":"number", "n4":"number",
                              //"i1":"integer", "i2":"integer", "i3":"integer", "i4":"integer",
                              //"d1":"date", "d2":"date", "d3":"date", "d4":"date",   
                              //"sg1":"shortguid", "sg2":"shortguid", "sg3":"shortguid", "sg4":"shortguid",
                              //"g1":"guid", "g2":"guid", "g3":"guid",, "g4":"guid", 
                              //"h1":"hash", "h2":"hash", "h3":"hash", "h4":"hash",
                              //"p1":"phone", "p2":"phone", "p3":"phone", "p4":"phone",
                              //"r1":"random4", "r2":"random4", "r3":"random4", "r4":"random4"
                              };
                  var inputObj = {
                              "b1":"false", "b2":false, "b3":"", "b4":"x", 
                              //"s1":"hello", "s2":"hello", "s3":"", "s4":false,
                              //"n1":"30", "n2":30, "n3":"", "n4":"x",
                              //"i1":"40", "i2":40, "i3":"", "i4":"x",
                              //"d1":"2/27/2014", "d2": new Date(2/27/2014), "d3":"", "d4":"x",
                              //"h1":"ff00ff", "h2":"ff00ff", "h3":"", "h4":"x",
                              //"p1":"+19998887777", "p2":"+19998887777", "p3":"", "p4":"x"
                              };    
                  */
            deepfilter(inputObj, dtoObjOpt, command, function(err, res) {
                proxyprinttodiv("after etd16 deepfilter in", inputObj, 17);
                proxyprinttodiv("after etd16 deepfilter dto", dtoObjOpt, 17);
                proxyprinttodiv("after etd16 deepfilter res", res, 17);
                cb1(err, res);
            });
        }
    ], function(err, res) {
        callback(err, res);
    });
}

/*
      "command.deepfilter.convert":true, "command.deepfilter.totype":true
*/
exports.etd26 = widtests.etd26 = etd26 = function etd26(params, callback) {
    eventappinstall();

    execute([{
            "executethis": "testDeepFilterTests",
            "command.deepfilter.convert": true,
            "command.deepfilter.totype": true
        }],
        function(err, res) {
            res = logverify("etd16_result", res[0], [{
                "b1": false,
                "s1": "hello",
                "n1": 30,
                "i1": 40,
                "d1": "2014-02-27T05:00:00.000Z",
                "h1": "#ff00ff",
                "p1": "+1 999 888 7777",
                "b2": false,
                "s2": "hello",
                "n2": 30,
                "i2": 40,
                "d2": "2014-02-27T18:30:00.000Z",
                "h2": "#ff00ff",
                "p2": "+1 999 888 7777",
                "s3": ""
            }]);
            callback(err, res);
        });
}
widtests.etd26.category = "execute";
widtests.etd26.subcategory = "daily";
widtests.etd26.js = exports.etd26;
widtests.etd26.description = "this does a test";

/*
      "command.deepfilter.convert":true, "command.deepfilter.totype":false
*/
exports.etd27 = widtests.etd27 = etd27 = function etd27(params, callback) {
    eventappinstall();

    execute([{
            "executethis": "testDeepFilterTests",
            "command.deepfilter.convert": true,
            "command.deepfilter.totype": false
        }],
        function(err, res) {
            res = logverify("etd17_result", res[0], [{
                "b1": "false",
                "s1": "hello",
                "n1": "30",
                "i1": "40",
                "d1": "2/27/2014",
                "h1": "ff00ff",
                "p1": "19998887777",
                "b2": "false",
                "s2": "hello",
                "n2": "30",
                "i2": "40",
                "d2": "2014-02-27T18:30:00.000Z",
                "h2": "#ff00ff",
                "p2": "+19998887777",
                "s3": ""
            }]);
            callback(err, res);
        });
}
widtests.etd27.category = "execute";
widtests.etd27.subcategory = "daily";
widtests.etd27.js = exports.etd27;
widtests.etd27.description = "this does a test";

/*
      "command.deepfilter.convert":false, "command.deepfilter.totype":true
      no conversion
*/
exports.etd28 = widtests.etd28 = etd28 = function etd28(params, callback) {
    eventappinstall();

    execute([{
            "executethis": "testDeepFilterTests",
            "command.deepfilter.convert": false,
            "command.deepfilter.totype": true
        }],
        function(err, res) {
            res = logverify("etd18_result", res[0], [{
                "b1": "false",
                "s1": "hello",
                "n1": "30",
                "i1": "40",
                "d1": "2/27/2014",
                "h1": "ff00ff",
                "p1": "19998887777",
                "b2": false,
                "s2": "hello",
                "n2": 30,
                "i2": 40,
                "d2": "2014-02-27T18:30:00.000Z",
                "h2": "#ff00ff",
                "p2": "+19998887777",
                "s3": ""
            }]);
            callback(err, res);
        });
}
widtests.etd28.category = "execute";
widtests.etd28.subcategory = "daily";
widtests.etd28.js = exports.etd28;
widtests.etd28.description = "this does a test";

/*
      "command.deepfilter.convert":false, "command.deepfilter.totype":false
      no conversion
*/
exports.etd29 = widtests.etd29 = etd29 = function etd29(params, callback) {
    eventappinstall();

    execute([{
            "executethis": "testDeepFilterTests",
            "command.deepfilter.convert": false,
            "command.deepfilter.totype": false
        }],
        function(err, res) {
            res = logverify("etd19_result", res[0], [{
                "b1": "false",
                "s1": "hello",
                "n1": "30",
                "i1": "40",
                "d1": "2/27/2014",
                "h1": "ff00ff",
                "p1": "19998887777",
                "b2": false,
                "s2": "hello",
                "n2": 30,
                "i2": 40,
                "d2": "2014-02-27T18:30:00.000Z",
                "h2": "#ff00ff",
                "p2": "+19998887777",
                "s3": ""
            }]);
            callback(err, res);
        });
}
widtests.etd29.category = "execute";
widtests.etd29.subcategory = "daily";
widtests.etd29.js = exports.etd29;
widtests.etd29.description = "this does a test";

// exports.etd16 = etd16 = function etd16(params, callback) {
//     var command = {"command.deepfilter.convert":true, "command.deepfilter.totype":true};    //string to datatype
//     testDeepFilterTests(command, function(err, res){

//         proxyprinttodiv("after test convert:true totype: true --1:string, 2:type, 3:'', 4:wrong", res, 99, true);

//         callback(err, res);
//     });
// }
// exports.etd17 = etd17 = function etd17(params, callback) {
//     var command = {"command.deepfilter.convert":true, "command.deepfilter.totype":false};   //datatype to string
//     testDeepFilterTests(command, function(err, res){
//             proxyprinttodiv("after test convert:true totype: false --1:string, 2:type, 3:'', 4:wrong", res, 99, true);
//         callback(err, res);
//     });
// }                 

// exports.etd18 = etd18 = function etd18(params, callback) {
//     var command = {"command.deepfilter.convert":false, "command.deepfilter.totype":true};   //no conversion
//     testDeepFilterTests(command, function(err, res){
//             proxyprinttodiv("after test convert:false totype: true --1:string, 2:type, 3:'', 4:wrong", res, 99, true);
//         callback(err, res);
//     });
// }                 

// exports.etd19 = etd19 = function etd19(params, callback) {
//    var command = {"command.deepfilter.convert":false, "command.deepfilter.totype":false};    //no conversion
//    testDeepFilterTests(command, function(err, res){
//             proxyprinttodiv("after test convert:false totype: false --1:string, 2:type, 3:'', 4:wrong", res, 99, true);
//          callback(err, res);
//    });
// }


/*
      deepfilter issue
      <<inobj>>{"wid":"merchgroup1","metadata":{"method":"merchantsdto"},"name":"luke's company"}

<<dtoobj>>{"title":"string","wid":"string","metadata":{"method":"string","merchantdto":{"type":"onetomany"}},"command":{"inherit":{"defaultsystemactions":"defaultsystemactions"},"deepdtolist":{"systemdto":"onetoone","loyaltydto":"onetomany","merchantdto":"onetomany"},"dtolist":{"merchantdto":"onetomany","systemdto":"onetoone"}},"merchantdto":[{"name":"string","wid":"string","metadata":{"method":"string","loyaltydto":{"type":"onetomany"}},"command":{"inherit":{"defaultsystemactions":"defaultsystemactions"},"deepdtolist":{"systemdto":"onetoone","loyaltydto":"onetomany"},"dtolist":{"loyaltydto":"onetomany","systemdto":"onetoone"}},"loyaltydto":[{"name":"string","wid":"string","metadata":{"method":"string"},"command":{"inherit":{"defaultsystemactions":"defaultsystemactions"},"deepdtolist":{"systemdto":"onetoone"},"dtolist":{"systemdto":"onetoone"}}}]}]}
*/
exports.etd30 = widtests.etd30 = etd30 = function etd30(params, callback) {
    debuglevel = 41;
    async.series([
        function(cb1) {
            //var executeList = [{
            //    "executethis": "updatewid",
            //    "wid": "wid5",
            //    "metadata.method": "defaultdto",
            //    "aaa": "",
            //    "ggg": ""
            //}];
            //execute(executeList, function (err, res) {
            //proxyprinttodiv('after updatewid wid1 -- ', res, 34);
            //cb1(err, res);
            //});
            cb1(null, null);
        }
    ], function(err, res) { //after updatewid
        var dtoObjOpt = {
            "title": "string",
            "wid": "string",
            "metadata": {
                "method": "string",
                "merchantdto": {
                    "type": "onetomany"
                }
            },
            "command": {
                "inherit": {
                    "defaultsystemactions": "defaultsystemactions"
                },
                "deepdtolist": {
                    "systemdto": "onetoone",
                    "loyaltydto": "onetomany",
                    "merchantdto": "onetomany"
                },
                "dtolist": {
                    "merchantdto": "onetomany",
                    "systemdto": "onetoone"
                }
            },
            "merchantdto": [{
                "name": "string",
                "wid": "string",
                "metadata": {
                    "method": "string",
                    "loyaltydto": {
                        "type": "onetomany"
                    }
                },
                "command": {
                    "inherit": {
                        "defaultsystemactions": "defaultsystemactions"
                    },
                    "deepdtolist": {
                        "systemdto": "onetoone",
                        "loyaltydto": "onetomany"
                    },
                    "dtolist": {
                        "loyaltydto": "onetomany",
                        "systemdto": "onetoone"
                    }
                },
                "loyaltydto": [{
                    "name": "string",
                    "wid": "string",
                    "metadata": {
                        "method": "string"
                    },
                    "command": {
                        "inherit": {
                            "defaultsystemactions": "defaultsystemactions"
                        },
                        "deepdtolist": {
                            "systemdto": "onetoone"
                        },
                        "dtolist": {
                            "systemdto": "onetoone"
                        }
                    }
                }]
            }]
        };
        var inputObj = {
            "wid": "merchgroup1",
            "metadata": {
                "method": "merchantsdto"
            },
            "name": "luke's company"
        };

        //var dtoObjOpt = {"wid":"string","metadata":{"method":"string","merchantdto":{"type":"onetomany"}}, "command":{"inherit":{"defaultsystemactions":"defaultsystemactions"},"deepdtolist":{"systemdto":"onetoone","loyaltydto":"onetomany","merchantdto":"onetomany"},"dtolist":{"merchantdto":"onetomany","systemdto":"onetoone"}}, "merchantdto":[{"name":"string"}]};

        //var dtoObjOpt = {"wid":"string","metadata":{"method":"string","merchantdto":{"type":"onetomany"}}, "command":{"inherit":{"defaultsystemactions":"defaultsystemactions"},"deepdtolist":{"systemdto":"onetoone","loyaltydto":"onetomany","merchantdto":"onetomany"},"dtolist":{"merchantdto":"onetomany","systemdto":"onetoone"}}, "merchantdto":[{"name":"string"}]};
        //var inputObj = {"wid":"merchgroup1","metadata":{"method":"merchantsdto"},"name":"luke's company"};

        var command = {
            "command.deepfilter.convert": true,
            "command.deepfilter.totype": true
        }; //string to datatype

        deepfilter(inputObj, dtoObjOpt, command, function(err, res) {
            proxyprinttodiv("res --", res, 41);
            var actual_result = [res];
            proxyprinttodiv("actual_result --", actual_result, 41);

            var expected_result = [{
                "obj": "",
                "c": "cval",
                "d": {}
            }];
            proxyprinttodiv("expected_result --", expected_result, 41);

            callback(err, res);
        });
    });
}
widtests.etd30.category = "execute";
widtests.etd30.subcategory = "daily";
widtests.etd30.js = exports.etd16;
widtests.etd30.description = "this does a test";

exports.lmetd2 = widtests.lmetd2 = lmetd2 = function lmetd2(params, callback) {
    debuglevel = 17;
    async.series([
        function(cb1) {
            var executeList = [{
                "executethis": "updatewid",
                "wid": "deep_filter_test",
                "metadata.method": "defaultdto",
                "aaa": "",
                "ggg": ""
            }];
            execute(executeList, function(err, res) {
                cb1(null);
            });
        }
    ], function(err, res) { //after updatewid
        var dtoObjOpt = {
            "c": "integer" //, 
            // "h":"string", 
            // "g":"boolean",
            // "d":"date", 
            // "q":{"w":{"e":"string"}}, 
            // "x":{"y":{"z":"string"}}
        };
        var inputObj = {
            "c": 30 //, 
            // "h":"hval", 
            // "g":"true",
            // "d":"6/25/1912", 
            // "q":{"w":{"e":"t"}}, 
            // "x":{"y":{"z":"string"}}
        };
        var command = {
            "formatresult": "true"
        };

        deepfilter(inputObj, dtoObjOpt, command, function(err, res) {
            var actual_result = [res];
            var expected_result = [{
                "c": 30 //,
                // "h":"hval",
                // "g":"true",
                // "d":"6/25/1912",
                // "q":{"w":{"e":"t"}},
                // "x":{"y":{"z":"string"}}
            }];
            res = logverify("lmetd2", actual_result, expected_result);
            callback(err, res);
        });
    });
}
widtests.lmetd2.category = "execute";
widtests.lmetd2.subcategory = "daily";
widtests.lmetd2.js = exports.lmetd2;
widtests.lmetd2.description = "this does a test";

// I thought I could turn an integer into a string, but no go....leaves it an integer
exports.lmetd3 = widtests.lmetd3 = lmetd3 = function lmetd3(params, callback) {
    debuglevel = 17;
    async.series([
        function(cb1) {
            var executeList = [{
                "executethis": "updatewid",
                "wid": "deep_filter_test",
                "metadata.method": "defaultdto",
                "aaa": ""
            }];
            execute(executeList, function(err, res) {
                cb1(null);
            });
        }
    ], function(err, res) {
        var dtoObjOpt = {
            "c": "string"
        };
        var inputObj = {
            "c": 30
        };
        var command = {
            "formatresult": "true"
        };

        deepfilter(inputObj, dtoObjOpt, command, function(err, res) {
            var actual_result = [res];
            var expected_result = [{
                "c": "30"
            }];
            res = logverify("lmetd3", actual_result, expected_result);
            callback(err, res);
        });
    });
}
widtests.lmetd3.category = "execute";
widtests.lmetd3.subcategory = "daily";
widtests.lmetd3.js = exports.lmetd3;
widtests.lmetd3.description = "this does a test";


// I expected the integer to stay an integer, 
// but with an empty dtoObjOpt, you get a string
exports.lmetd4 = widtests.lmetd4 = lmetd4 = function lmetd4(params, callback) {
    debuglevel = 17;
    async.series([
        function(cb1) {
            var executeList = [{
                "executethis": "updatewid",
                "wid": "deep_filter_test",
                "metadata.method": "defaultdto",
                "aaa": ""
            }];
            execute(executeList, function(err, res) {
                cb1(null);
            });
        }
    ], function(err, res) {
        var dtoObjOpt = {
            "c": ""
        };
        var inputObj = {
            "c": 30
        };
        var command = {
            "formatresult": "true"
        };

        deepfilter(inputObj, dtoObjOpt, command, function(err, res) {
            var actual_result = [res];
            var expected_result = [{
                "c": 30
            }];
            res = logverify("lmetd4", actual_result, expected_result);
            callback(err, res);
        });
    });
}
widtests.lmetd4.category = "execute";
widtests.lmetd4.subcategory = "daily";
widtests.lmetd4.js = exports.lmetd4;
widtests.lmetd4.description = "this does a test";

// 
exports.lmetd5 = widtests.lmetd5 = lmetd5 = function lmetd5(params, callback) {
    debuglevel = 17;
    async.series([
        function(cb1) {
            var executeList = [{
                "executethis": "updatewid",
                "wid": "deep_filter_test",
                "metadata.method": "defaultdto",
                "aaa": ""
            }];
            execute(executeList, function(err, res) {
                cb1(null);
            });
        }
    ], function(err, res) {
        var dtoObjOpt = {
            "charlie": ""
        };
        var inputObj = {
            "charlie": "30"
        };
        var command = {
            "formatresult": "true" //,
            // "deepfilter.convert": "true"
        };

        deepfilter(inputObj, dtoObjOpt, command, function(err, res) {
            var actual_result = [res];
            var expected_result = [{
                "charlie": "30"
            }];
            res = logverify("lmetd5", actual_result, expected_result);
            callback(err, res);
        });
    });
};
widtests.lmetd5.category = "execute";
widtests.lmetd5.subcategory = "daily";
widtests.lmetd5.js = exports.lmetd5;
widtests.lmetd5.description = "this does a test";

exports.ettestag3v2 = widtests.ettestag3v2 = ettestag3v2 = function ettestag3v2(params, callback) {
    debuglevel = 0;
    execute([{
            "executethis": "addwidmaster",
            "wid": "sounddtov2",
            "metadata.method": "sounddtov2",
            "note": "string"
        }, {
            "executethis": "addwidmaster",
            "wid": "sonddtov2",
            "metadata.method": "sonddtov2",
            "title": "string",
            "metadata.sounddto.type": "onetomany"
        }, {
            "executethis": "addwidmaster",
            "wid": "rel_sound_to_song",
            "metadata.method": "relationshipdto",
            "primarywid": "sonddtov2",
            "secondarywid": "sounddtov2",
            "primarymethod": "sonddtov2",
            "secondarymethod": "sounddtov2",
            "linktype": "onetomany",
            "relationshiptype": "attributes"

        }, {
            "executethis": "addwidmaster",
            "wid": "song1v2",
            "metadata.method": "sonddto",
            "title": "Highway to Hell",
            "sounddto.wid": "ag3aflatv2",
            "sounddto.note": "A flat"
        }, {
            "executethis": "addwidmaster",
            "wid": "song1v2",
            "metadata.method": "sonddto",
            "title": "Highway to Hell",
            "sounddto.wid": "ag3bsharpv2",
            "sounddto.note": "B sharp"
        }, {
            "executethis": "addwidmaster",
            "wid": "song1v2",
            "metadata.method": "sonddto",
            "title": "Highway to Hell",
            "sounddto.wid": "ag3cflatv2",
            "sounddto.note": "C flat"
        }, {
            "executethis": "getwidmaster",
            "wid": "song1v2"
        }],
        function(err, res) {
            debugfn("offlinegetwid code generator END", "", "", "code", getglobal("debugcolor"), getglobal("debugindent"), {}, 9);

            proxyprinttodiv('Function ag3 result Full res', res, 17);
            proxyprinttodiv('Function ag3 result ', res[6], 17);

            res = logverify("ettestag3_result", res[6], [{
                "title": "Highway to Hell",
                "wid": "song1v2",
                "metadata.method": "sonddto",
                "metadata.sounddto.type": "onetomany",
                "sounddto.0.note": "A flat",
                "sounddto.0.wid": "ag3aflatv2",
                "sounddto.0.metadata.method": "sounddto",
                "sounddto.1.note": "B sharp",
                "sounddto.1.wid": "ag3bsharpv2",
                "sounddto.1.metadata.method": "sounddto",
                "sounddto.2.note": "C flat",
                "sounddto.2.wid": "ag3cflatv2",
                "sounddto.2.metadata.method": "sounddto"
            }]);
            debuglevel = 0;
            // execute({"executethis": "getwidmaster","wid": "sonddto",
            //       "command":{"getwidmaster":{"convertmethod":"dto",
            //                               "execute":"ConvertFromDOTdri",
            //                               "inheritflag":"true","dtotype":""}}}, function (err, res1) {
            execute({
                "executethis": "getwidmaster",
                "wid": "song1"
            }, function(err, res1) {
                proxyprinttodiv('Function ag3 result LAST ', res1, 99);
                callback(err, res);

            })
        });
};
widtests.ettestag3v2.category = "execute";
widtests.ettestag3v2.subcategory = "daily";
widtests.ettestag3v2.js = exports.ettestag3v2;
widtests.ettestag3v2.description = "this does a test";
