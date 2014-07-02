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


exports.printglobal1 = 
printglobal1 = 
function printglobal1(params, callback) 
{
	var global1 = global1 || "fail";
	proxyprinttodiv('params --',params,99);
	callback (null, {'value':global1});
	
};

exports.testenvglobal1 = 
testenvglobal1 = 
widtests.testenvglobal1 = 
function testenvglobal1(executeobject, callback) 
{
      if (!executeobject.command) {
          executeobject.command={};
          executeobject.command.environment={};
          executeobject.command.environment.run={};
      }
      executeobject.command.environment.run.type="series";
      executeobject.command.environment.run.executelevel=0;
      executeobject.command.environment.platform='local';
	  executeobject.command.environment.global = {"global1":"pass"};
  
      executeobject.command.environment.processfn="execute_function";
      executeobject.command.xrun=[
                                  {"executethis": 'printglobal1'},
                                  ];  
      var etEnvironment = new drienvironment(executeobject.command.environment);
      etEnvironment.execute(executeobject, function (error_obj, result_obj) 
      {
			var expectedresult = {'value':"pass"};
            proxyprinttodiv('actual result', result_obj, 99, true);                         
            proxyprinttodiv('expected result', expectedresult, 99);
            
            var composite_obj=logverify("testenvglobal1", result_obj,expectedresult);
            callback(null, composite_obj);
      } 
    );
};
widtests.testenvglobal1.category = "daily";
widtests.testenvglobal1.subcategory = "addhoc";
widtests.testenvglobal1.js = exports.pu1;
widtests.testenvglobal1.description = "this does a test";