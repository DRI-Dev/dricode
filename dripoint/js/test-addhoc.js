// enter lots of data in series, the same data when inserted via different executes results in Max Range error
// this one inserts same amount of data but does not fail

var widtests = widtests || {};

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
widtests.ettss2.category = "daily";
widtests.ettss2.subcategory = "adhoc";
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
widtests.ettss3.category = "daily";
widtests.ettss3.subcategory = "adhoc";
widtests.ettss3.js = exports.ettss3;
widtests.ettss3.description = "this does a test";

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
widtests.sleep.category = "daily";
widtests.sleep.subcategory = "adhoc";
widtests.sleep.js = exports.sleep;
widtests.sleep.description = "this does a test";


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
widtests.alertFn1.category = "daily";
widtests.alertFn1.subcategory = "adhoc";
widtests.alertFn1.js = exports.alertFn1;
widtests.alertFn1.description = "this does a test";


//exports.ss1 = ss1 = function ss1(params, callback) {
exports.ss1 = widtests.ss1 = ss1 = function ss1(params, callback) {
    proxyprinttodiv('Function ss1 ', '--', 99);
    // execute(
    //     [ 
    //         {
    //             "executethis":"sendsms", 
    //               "tonumber": "+12145644732",
    //               "msgbody": "This the server- I just restarted "
    //             //"To":"+12145644732", 
    //               //To": "+12313133930",
    //             //"Body":"test msg"
    //         }
    //     ], 
    sendsms({
            //"to": "+12145644732",
            "to": "+12315341764",
            "body": "test"
        },
        function(err, res) {
            callback(err, res[0])
        }
    );
};
widtests.ss1.category = "execute";
widtests.ss1.subcategory = "daily";
widtests.ss1.js = exports.ss1;
widtests.ss1.description = "this does a test";


// Not an 'at' test...used to tes the veryify system. This is a failing test.
//exports.ettestt1sf = ettestt1sf = function ettestt1sf(params, callback) {
exports.ettestt1sf = widtests.ettestt1sf = ettestt1sf = function ettestt1sf(params, callback) {

    eventappinstall();
    res = logverify("ettestt1sf_result", {
        "d": "1",
        "c": "0",
        "g": "4"
    }, {
        "d": "1",
        "c": "0",
        "g": "4",
        "h": "5"
    });
    var err;
    callback(err, res);
};
widtests.ettestt1sf.category = "execute";
widtests.ettestt1sf.subcategory = "daily";
widtests.ettestt1sf.js = exports.ettestt1sf;
widtests.ettestt1sf.description = "this does a test";


// Not an 'at' test...used to test the verify system. This is a passing test.
//exports.ettestt1s = ettestt1s = function ettestt1s(params, callback) {
exports.ettestt1s = widtests.ettestt1s = ettestt1s = function ettestt1s(params, callback) {

    eventappinstall();
    res = logverify("ettestt1s_result", {
        "d": "1",
        "c": "0",
        "g": "4"
    }, {
        "d": "1",
        "c": "0",
        "g": "4"
    });
    var err;
    callback(err, res);
};
widtests.ettestt1s.category = "execute";
widtests.ettestt1s.subcategory = "daily";
widtests.ettestt1s.js = exports.ettestt1s;
widtests.ettestt1s.description = "this does a test";


// this one inserts same amount of data but does not fail
// enter lots of data in series, ths inserts data via different executes results in Max Range error
//exports.ettest_recurseModObj = ettest_recurseModObj = function ettest_recurseModObj(params, callback) {
exports.ettest_recurseModObj = widtests.ettest_recurseModObj = ettest_recurseModObj = function ettest_recurseModObj(params, callback) {
    eventappinstall();
    debuglevel = 17;
    // config = setconfig1();
    var recModObj = recurseModObj({
        "metadata": {
            "method": "wid2"
        },
        "a": "b",
        "c": "30",
        "e": "f",
        "d": "6/23/1912",
        "q": {
            "w": {
                "e": "t"
            }
        },
        "g": "true"
    }, {
        "metadata": {
            "method": "wid2"
        },
        "a": "string",
        "c": "number",
        "d": "date",
        "q": {
            "w": {
                "e": "string"
            }
        },
        "g": "boolean"
    }, {}, function(err, res) {

        proxyprinttodiv('recurseModObj inputObject', {
            "metadata": {
                "method": "wid2"
            },
            "a": "b",
            "c": "30",
            "e": "f",
            "d": "6/23/1912",
            "q": {
                "w": {
                    "e": "t"
                }
            },
            "g": "true"
        }, 17);
        proxyprinttodiv('recurseModObj inputDTO', {
            "metadata": {
                "method": "wid2"
            },
            "a": "string",
            "c": "number",
            "d": "date",
            "q": {
                "w": {
                    "e": "string"
                }
            },
            "g": "boolean"
        }, 17);
        proxyprinttodiv("res --", res, 17);
        var actual_result = [res];
        proxyprinttodiv("actual_result --", actual_result, 17);

        var expected_result = [{
            "metadata": {
                "method": "wid2"
            },
            "a": "b",
            "c": "30",
            "d": "6/23/1912",
            "q": {
                "w": {
                    "e": "t"
                }
            },
            "g": "true"
        }];
        proxyprinttodiv("expected_result --", expected_result, 17);

        res = logverify("logverify", actual_result, expected_result);
        callback(err, res);
    });
}
widtests.ettest_recurseModObj.category = "daily";
widtests.ettest_recurseModObj.subcategory = "addhoc";
widtests.ettest_recurseModObj.js = exports.ettest_recurseModObj;
widtests.ettest_recurseModObj.description = "this does a test";


//*********************************************
// pack_up_params() tests
//*********************************************


exports.pu1 = widtests.pu1 = pu1 = function pu1(params, callback) {
    var params = {
        "Alpha": "1",
        "Beta": "2",
        "Charlie": "3",
        "Delta": "4"
    };
    var command = {
        "command": {
            "somefunction": "orange",
            "action": "reaction"
        }
    };
    var err;
    var result = {};

    result = pack_up_params(params, command, "somefunction");
    callback(err, result);
}
widtests.pu1.category = "daily";
widtests.pu1.subcategory = "addhoc";
widtests.pu1.js = exports.pu1;
widtests.pu1.description = "this does a test";

// OTHER //


exports.filterobjecttest1 = function filterobjecttest1(parameters, callback) {
    debuglevel = 17;
    eventappinstall();

    var obj1 = {
        "a": "1",
        "b": "2"
    };
    var obj2 = {
        "a": "1",
        "b": "2"
    };

    filterobject(obj1, obj2, null, function (err, res) {
        proxyprinttodiv("filterobjecttest1 filterobject res", res, 17);
        var actual_result = res;
        proxyprinttodiv("actual_result --", actual_result, 17);
        var expected_result = {};
        proxyprinttodiv("expected_result --", expected_result, 17);
        var result = logverify("filterobjecttest1_result", actual_result, expected_result);
        callback(err, result);
    });
}


exports.filterobjecttest2 = function filterobjecttest2(parameters, callback) {
    debuglevel = 17;
    eventappinstall();

    var obj1 = {
        "a": "1",
        "b": "2"
    };
    var obj2 = {
        "b": "2",
        "c": "3"
    };
    var command = {
        "filterobject": {
            "type": "match"
        }
    }

    filterobject(obj1, obj2, command, function (err, res) {
        proxyprinttodiv("filterobjecttest1 filterobject res", res, 17);
        var actual_result = res;
        proxyprinttodiv("actual_result --", actual_result, 17);
        var expected_result = {
            "b": "2"
        };
        proxyprinttodiv("expected_result --", expected_result, 17);
        var result = logverify("filterobjecttest1_result", actual_result, expected_result);
        callback(err, result);
    });
}

exports.filterobjecttest3 = function filterobjecttest3(parameters, callback) {
    debuglevel = 17;
    eventappinstall();

    var obj1 = {
        "a": "1",
        "b": "2"
    };
    var obj2 = {
        "b": "2",
        "c": "3"
    };

    filterobject(obj1, obj2, null, function (err, res) {
        proxyprinttodiv("filterobjecttest1 filterobject res", res, 17);
        var actual_result = res;
        proxyprinttodiv("actual_result --", actual_result, 17);
        var expected_result = {
            "a": "1",
            "c": "3"
        };
        proxyprinttodiv("expected_result --", expected_result, 17);
        var result = logverify("filterobjecttest1_result", actual_result, expected_result);
        callback(err, result);
    });
}


exports.testhtmladd = testhtmladd = function testhtmladd(params, callback) {
    execute([{
            "executethis": "addwidmaster",
            "wid": "wid1",
            "html": "<p>123</p>"
        }, {
            "executethis": "addwidmaster",
            "wid": "wid1",
            "addthis.command.htmlcleartargetid": "body"
        }, {
            "executethis": "getwidmaster",
            "wid": "wid1"
        }],
        function (err, res) {
            proxyprinttodiv('Full results: ', res, 99);
            callback(err, res);
        });
}

exports.testhtmladd2 = testhtmladd2 = function testhtmladd2(params, callback) {
    execute([{
            "executethis": "getwid",
            "wid": "wid1"
        }],
        function (err, res) {
            proxyprinttodiv('Full results: ', res, 99);
            callback(err, res);
        });
}


exports.testcache1 = testcache1 = function testcache1(params, callback) {
    execute([{
            "executethis": "updatewid",
            "wid": "codydto",
            "metadata": {
                "method": "codydto"
            },
            "month": "string",
            "day": "string"
        }, {
            "executethis": "updatewid",
            "wid": "cody1",
            "metadata": {
                "method": "codydto"
            },
            "month": "June",
            "day": "9th",
            "command": {
                "cache": "true"
            }
        }, {
            "executethis": "updatewid",
            "wid": "cody1",
            "metadata": {
                "method": "codydto"
            },
            //"command":{"databasetable":"insert"},
            "month": "August"
        }, {
            "executethis": "getwidmaster",
            "wid": "cody1",
            "metadata": {
                "method": "codydto"
            }
        }],
        function (err, res) {
            proxyprinttodiv('cody1 cache: ', res[1], 99);
            proxyprinttodiv('cody1 update: ', res[2], 99);
            proxyprinttodiv('cody1 result: ', res[3], 99);
            var result = logverify("cody1_result", res[3], [{
                "wid": "cody1",
                "metadata.method": "codydto",
                "month": "June",
                "day": "9th"
            }]);
            callback(err, result);
        });
}

exports.testcache2 = testcache2 = function testcache2(params, callback) {
    execute([{
            "executethis": "updatewid",
            "wid": "adto",
            "metadata": {
                "method": "adto"
            },
            "field1": "string",
            "field2": "string"
        }, {
            "executethis": "updatewid",
            "wid": "awid1",
            "metadata": {
                "method": "adto"
            },
            "field1": "hello",
            "field2": "world",
            "command": {
                "cache": "true"
            }
        }, {
            "executethis": "updatewid",
            "wid": "awid1",
            "metadata": {
                "method": "adto"
            },
            "command": {
                "cache": "true"
            },
            //"command":{"databasetable":"insert"},
            "field1": "goodbye"
        }, {
            "executethis": "getwidmaster",
            "wid": "awid1",
            "metadata": {
                "method": "adto"
            }
        }],
        function (err, res) {
            proxyprinttodiv('caching awid1: ', res[1], 99);
            proxyprinttodiv('updating awid1: ', res[2], 99);
            proxyprinttodiv('awid1 get: ', res[3], 99);
            var result = logverify("cody1_result", res[3], [{
                "wid": "awid1",
                "metadata.method": "adto",
                "field1": "hello",
                "field2": "world"
            }]);
            callback(err, result);
        });
}


function printlistmany(printlist, callback) {
    var executeobj = {};
    async.mapSeries(printlist, function (eachprint, cbMap) {
        executeobj = {};
        executeobj["executethis"] = "getwidmaster";
        executeobj["wid"] = eachprint["wid"];
        executeobj["command.dtotype"] = eachprint["command.dtotype"];
        proxyprinttodiv("Function printlistmany input executeobj for getwidmaster", executeobj, 99, true);
        execute(executeobj, function (err, res) {
            proxyprinttodiv("Function printlistmany output for getwidmaster " + eachprint["wid"] + " with command.dtotype=" + eachprint["command.dtotype"], executeobj, 99, true);
            proxyprinttodiv("Function printlistmany output = ", res, 99, true);
            cbMap(null);
            //callback(err, res);
        });
    }, function (err, res) {
        callback(null, null)
    });
}

exports.t123 = t123 = function t123(params, callback) {
    callback({}, {})
}

exports.jstest1 = jstest1 = function jstest1(parameters, callback) {
    parameters.a = "3"
    parameters.b = "4"
    jstest2(parameters, function (err, res) {
        callback(err, res)
    })

}

exports.jstest2 = jstest2 = function jstest2(parameters, callback) {
    //add_numbers_server  
    eval("(function add_numbers(parameters1, callback1) { alert('global '+ JSON.stringify(parameters));alert('inner '+ JSON.stringify(parameters)); var sum = { numsum : parseInt(parameters.a) + parseInt(parameters.b) };callback(null, sum);})()")
}

exports.jstest3 = jstest3 = function jstest3(p, callback) {
    var param = {};
    param.a = "3"
    param.b = "4"
    param.executethis = "add_numbers_server"
    execute(param, function (err, res) {
        callback(err, res)
    })

}

exports.jstest4 = jstest4 = function jstest4(parameters, callback) {
    parameters.a = "3"
    parameters.b = "4"
    jstest5(parameters, function (err, res) {
        callback(err, res)
    })

}

exports.jstest5 = jstest5 = function jstest5(parameters, callback) {
    // (
    function add_numbers(parameters1, callback1) {
        var sum = {
            numsum: parseInt(parameters.a) + parseInt(parameters.b)
        };
        callback(null, sum);
    }
    // )
    // ()
}


// simple test which sets up all data and then runs sectest1 test after that 
exports.datastore1 = datastore1 = function datastore1(params, callback) {

    debuglevel = 12;

    async.series([
        function (cb1) {
            updatedatastore({
                "wid": "sounddto",
                "metadata.method": "sounddto",
                "note": "string"
            }, {}, function (err, res) {
                cb1(null);
            })
        },
        function (cb1) {
            getfromdatastore({
                "wid": "sounddto"
            }, null, function (err, res) {
                cb1(null);
            });
        }
    ], function (err, res) {
        proxyprinttodiv('res', res, 34);
        callback(err, res);
    });
}


// simple test which sets up all data and then runs sectest1 test after that 
exports.datastore2 = datastore2 = function datastore2(params, callback) {

    debuglevel = 12;

    async.series([
        function (cb1) {
            proxyprinttodiv('Function updatewid in : x', 'hi', 12);
            updatewid({
                "wid": "sounddto",
                "metadata": {
                    "method": "sounddto"
                },
                "note": "string"
            }, function (err, res) {
                cb1(null);
            })
        },
        function (cb1) {
            getwid({
                "wid": "sounddto"
            }, function (err, res) {
                cb1(null);
            });
        }
    ], function (err, res) {
        proxyprinttodiv('res', res, 34);
        callback(err, res);
    });
};


/*
        To add wid to db(default "data")
    */
exports.datastore3 = datastore3 = function datastore3(parameters, callback) {
    debuglevel = 12;
    eventappinstall();

    execute([{
            "executethis": "updatewid",
            "wid": "sounddto",
            "metadata.method": "sounddto",
            "note": "string"
        }, {
            "executethis": "getwid",
            "wid": "sounddto"
        }, {
            "executethis": "updatewid",
            "wid": "wid1",
            "d": "44",
            "f": "6",
            "command": {
                "db": "data"
            }
        }, {
            "executethis": "getwid",
            "wid": "wid1",
            "command": {
                "db": "data"
            }
        }, {
            "executethis": "updatewid",
            "wid": "wid2",
            "d": "444",
            "f": "66",
            "command": {
                "db": "test"
            }
        }, {
            "executethis": "getwid",
            "wid": "wid2",
            "command": {
                "db": "data"
            }
        }, {
            "executethis": "updatewid",
            "wid": "wid3",
            "d": "4444",
            "f": "666",
            "command": {
                "collection": "othercollection"
            }
        }, {
            "executethis": "getwid",
            "wid": "wid3",
            "command": {
                "collection": "othercollection"
            }
        }, {
            "executethis": "getwid",
            "wid": "wid3",
            "command": {
                "collection": "testcollection"
            }
        }],
        function (err, res) {
            callback(err, res);
            proxyprinttodiv("res -- add", res, 17);
        });
};

/*
        normal add / get
    */
exports.datastore4 = datastore4 = function datastore4(parameters, callback) {
    debuglevel = 12;
    eventappinstall();

    execute([{
            "executethis": "updatewid",
            "wid": "sounddto",
            "metadata.method": "sounddto",
            "note": "string"
        }, {
            "executethis": "getwid",
            "wid": "sounddto"
        }],
        function (err, res) {
            callback(err, res);
            proxyprinttodiv("res -- add", res, 17);
        });
}

function datastorefunction(updatecommand, callback) {
    debuglevel = 12;
    eventappinstall();

    var allPossibleCommandValues = [{
        "db": "data"
    }, {
        "db": "test"
    }, {
        "db": ""
    }, {
        "collection": "maincollection"
    }, {
        "collection": "othercollection"
    }, {
        "collection": ""
    }, {
        "datastore": "localstorage"
    }, {
        "datastore": "localstore"
    }, {
        "datastore": "angular"
    }, {
        "datastore": "mongo"
    }, {
        "datastore": ""
    }];

    var executeArray = [];
    executeArray.push({
        "executethis": "updatewid",
        "wid": "wid1",
        "d": "44",
        "f": "6",
        "command": updatecommand
    });

    for (commandValue in allPossibleCommandValues) {
        var executeObj = {
            "executethis": "getwid",
            "wid": "wid1",
            "command": allPossibleCommandValues[commandValue]
        }
        executeArray.push(executeObj);
    }

    execute(executeArray, function (err, res) {
        proxyprinttodiv("res -- add", res, 12);
        callback(err, res);
    });
}


/*
        To add wid to {"db":"data"}
        To get wid from all other variations
    */
exports.datastore5 = datastore5 = function datastore5(parameters, callback) {
    var updatecommand = {
        "db": "data"
    };
    datastorefunction(updatecommand, function (err, res) {
        callback(err, res);
    });
}

/*
        To add wid to {"db":"test"}
        To get wid from all other variations
    */
exports.datastore6 = datastore6 = function datastore6(parameters, callback) {
    var updatecommand = {
        "db": "test"
    };
    datastorefunction(updatecommand, function (err, res) {
        callback(err, res);
    });
}

/*
        To add wid to {"db":""}
        To get wid from all other variations
    */
exports.datastore7 = datastore7 = function datastore7(parameters, callback) {
    var updatecommand = {
        "db": ""
    };
    datastorefunction(updatecommand, function (err, res) {
        callback(err, res);
    });
}

/*
        To add wid to {"collection":"maincollection"}
        To get wid from all other variations
    */
exports.datastore8 = datastore8 = function datastore8(parameters, callback) {
    var updatecommand = {
        "collection": "maincollection"
    };
    datastorefunction(updatecommand, function (err, res) {
        callback(err, res);
    });
}

/*
        To add wid to {"collection":"maincollection"}
        To get wid from all other variations
    */
exports.datastore9 = datastore9 = function datastore9(parameters, callback) {
    var updatecommand = {
        "collection": "othercollection"
    };
    datastorefunction(updatecommand, function (err, res) {
        callback(err, res);
    });
}

/*
        To add wid to {"collection":""}
        To get wid from all other variations
    */
exports.datastore10 = datastore10 = function datastore10(parameters, callback) {
    var updatecommand = {
        "collection": ""
    };
    datastorefunction(updatecommand, function (err, res) {
        callback(err, res);
    });
}

/*
        To add wid to {"datastore":"localstorage"}
        To get wid from all other variations
    */
exports.datastore11 = datastore11 = function datastore11(parameters, callback) {
    var updatecommand = {
        "datastore": "localstorage"
    };
    datastorefunction(updatecommand, function (err, res) {
        callback(err, res);
    });
}

/*
        To add wid to {"datastore":"localstore"}
        To get wid from all other variations
    */
exports.datastore12 = datastore12 = function datastore12(parameters, callback) {
    var updatecommand = {
        "datastore": "localstore"
    };
    datastorefunction(updatecommand, function (err, res) {
        callback(err, res);
    });
}

/*
        To add wid to {"datastore":"angular"}
        To get wid from all other variations
    */
exports.datastore13 = datastore13 = function datastore13(parameters, callback) {
    var updatecommand = {
        "datastore": "angular"
    };
    datastorefunction(updatecommand, function (err, res) {
        callback(err, res);
    });
}

/*
        To add wid to {"datastore":"mongo"}
        To get wid from all other variations
    */
exports.datastore14 = datastore14 = function datastore14(parameters, callback) {
    var updatecommand = {
        "datastore": "mongo"
    };
    datastorefunction(updatecommand, function (err, res) {
        callback(err, res);
    });
}


/*
        To add wid to {"datastore":""}
        To get wid from all other variations
    */
exports.datastore15 = datastore15 = function datastore15(parameters, callback) {
    var updatecommand = {
        "datastore": ""
    };
    datastorefunction(updatecommand, function (err, res) {
        callback(err, res);
    });
}

/*
        To add wid with all possible variations
        To get wid with exact possible variations
    */
exports.datastoreaddget1 = datastoreaddget1 = function datastoreaddget1(parameters, callback) {
    debuglevel = 17;
    eventappinstall();

    var allPossibleCommandDbValues = ["data", "test", ""];
    var allPossibleCommandCollectionValues = ["maincollection", "othercollection", ""];
    var allPossibleCommandDataStoreValues = ["localstorage", "localstore", "angular", "mongo", ""];

    async.each(allPossibleCommandDbValues, function (commandDb, callback1) {
        async.each(allPossibleCommandCollectionValues, function (commandCollection, callback2) {
            async.each(allPossibleCommandDataStoreValues, function (commandDataStore, callback3) {
                var command = {
                    "db": commandDb,
                    "collection": commandCollection,
                    "datastore": commandDataStore
                };

                var executeArray = [];
                executeArray.push({
                    "executethis": "updatewid",
                    "wid": "wid1",
                    "d": "44",
                    "f": "6",
                    "command": command
                });
                executeArray.push({
                    "executethis": "getwid",
                    "wid": "wid1",
                    "command": command
                });

                execute(executeArray, function (err, res) {
                    proxyprinttodiv(">> command <<", command, 17);
                    proxyprinttodiv("add result ", res[0], 17);
                    proxyprinttodiv("get result ", res[1], 17);
                    callback3();
                });
            });
            callback2();
        });
        callback1();
    });
}

/*
        To add wid with default values
        To get wid with all possible variations
    */
exports.datastoreaddget2 = datastoreaddget2 = function datastoreaddget2(parameters, callback) {
    debuglevel = 17;
    eventappinstall();

    var command = {
        "db": "",
        "collection": "",
        "datastore": ""
    };
    var executeArray = [];
    executeArray.push({
        "executethis": "updatewid",
        "wid": "wid1",
        "d": "44",
        "f": "6",
        "command": command
    });
    execute(executeArray, function (err, res) {
        proxyprinttodiv(">> add command <<", command, 17);
        proxyprinttodiv("add result ", res[0], 17);
    });

    var allPossibleCommandDbValues = ["data", "test", ""];
    var allPossibleCommandCollectionValues = ["maincollection", "othercollection", ""];
    var allPossibleCommandDataStoreValues = ["localstorage", "localstore", "angular", "mongo", ""];

    async.each(allPossibleCommandDbValues, function (commandDb, callback1) {
        async.each(allPossibleCommandCollectionValues, function (commandCollection, callback2) {
            async.each(allPossibleCommandDataStoreValues, function (commandDataStore, callback3) {
                var command = {
                    "db": commandDb,
                    "collection": commandCollection,
                    "datastore": commandDataStore
                };
                var executeArray = [];
                executeArray.push({
                    "executethis": "getwid",
                    "wid": "wid1",
                    "command": command
                });
                execute(executeArray, function (err, res) {
                    proxyprinttodiv(">> get command <<", command, 17);
                    proxyprinttodiv("get result ", res[0], 17);
                    callback3();
                });
            });
            callback2();
        });
        callback1();
    });
}