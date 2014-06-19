
var widtests = widtests || {};

exports.addwid4params = widtests.addwid4params = addwid4params = function addwid4params(a, b, c, d, callback) {


    var paramsDataString = "{\"" + a + "\":\"" + a + "\",\"" + b + "\":\"" + b + "\",\"" + c + "\":\"" + c + "\",\"" + d + "\":\"" + d + "\"}";
    // alert(paramsDataString);
    var json = JSON.parse(paramsDataString);
    addwidmaster(json, callback);
}
widtests.addwid4params.category = "execute";
widtests.addwid4params.subcategory = "daily";
widtests.addwid4params.js = exports.addwid4params;
widtests.addwid4params.description = "this does a test";


exports.ettss1 = widtests.ettss1 = ettss1 = function ettss1(params, callback) {
    debuglevel = 17;
    // saveglobal("debugname", "");
    // saveglobal("debugcat", "");
    // saveglobal("debugsubcat", "code");
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
                proxyprinttodiv('Function tss1 added  ttdto -- ', res, 17);
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
                proxyprinttodiv('Function tss1 added  ttdto -- ', res, 17);
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
                proxyprinttodiv('Function tss1 added  ttdto --4 ', res, 17);
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
                proxyprinttodiv('Function tss1 added  ttdto --5 ', res, 17);
                cb1(null, res);
            });
        },
    ], function(err, res) {
        proxyprinttodiv("res --", res, 17);
        var actual_result = res[3];
        proxyprinttodiv("actual_result --", actual_result, 17);

        var expected_result = [
            [{
                "data": {
                    "type": "a"
                },
                "wid": "13",
                "metadata": {
                    "method": "ttdto",
                    "date": "2014-03-19T05:51:01.752Z"
                }
            }],
            [{
                "data": {
                    "type": "a"
                },
                "wid": "14",
                "metadata": {
                    "method": "ttdto",
                    "date": "2014-03-19T05:51:03.348Z"
                }
            }],
            [{
                "data": {
                    "type": "a"
                },
                "wid": "15",
                "metadata": {
                    "method": "ttdto",
                    "date": "2014-03-19T05:51:05.032Z"
                }
            }],
            [{
                "data": {
                    "type": "a"
                },
                "wid": "16",
                "metadata": {
                    "method": "ttdto",
                    "date": "2014-03-19T05:51:06.744Z"
                }
            }],
            [{
                "data": {
                    "type": "a"
                },
                "wid": "17",
                "metadata": {
                    "method": "ttdto",
                    "date": "2014-03-19T05:51:08.593Z"
                }
            }],
            [{
                "data": {
                    "type": "a"
                },
                "wid": "18",
                "metadata": {
                    "method": "ttdto",
                    "date": "2014-03-19T05:51:10.681Z"
                }
            }],
            [{
                "data": {
                    "type": "a"
                },
                "wid": "19",
                "metadata": {
                    "method": "ttdto",
                    "date": "2014-03-19T05:51:12.749Z"
                }
            }],
            [{
                "data": {
                    "type": "a"
                },
                "wid": "20",
                "metadata": {
                    "method": "ttdto",
                    "date": "2014-03-19T05:51:14.819Z"
                }
            }]
        ];
        proxyprinttodiv("expected_result --", expected_result, 17);

        res = logverify("logverify", actual_result, expected_result);
        callback(err, res);
    });
}
widtests.ettss1.category = "execute";
widtests.ettss1.subcategory = "daily";
widtests.ettss1.js = exports.ettss1;
widtests.ettss1.description = "this does a test";

/*
      addwidmater xdto
      now add many with addwidmaster with x dto
*/
exports.ett1 = widtests.ett1 = ett1 = function ett1(params, callback) {
    debuglevel = 17;
    saveglobal("debugname", "");
    saveglobal("debugcat", "");
    saveglobal("debugsubcat", "code");
    var status = false;

    async.series([
        function(callback1) { //addwidmaster dto
            var executeList = [{
                "executethis": "addwidmaster",
                "wid": "ttdto",
                "metadata.method": "ttdto",
                "type": "string"
            }];
            execute(executeList, function(err, res) {
                proxyprinttodiv("Function t1 addwidmaster ttdto  result -- ", res, 17);
                callback1(null);
            });
        },
        function(callback2) { //addwidmaster wid1
            //n-times loop
            async.times(5, function(n, next) {
                var executeList = [{
                    "executethis": "addwidmaster",
                    "wid": "ttdto_wid" + n,
                    "metadata.method": "ttdto",
                    "type": "a"
                }];
                execute(executeList, function(err, res) {
                    proxyprinttodiv("Function t1 addwidmaster ttdto wid result -- ", res, 17);
                    next(err, res);
                });
            }, function(err, result) {
                callback2(null, result);
            });
        },
        function(callback3) { //getwidmaster
            //n-times loop
            async.times(5, function(n, next) {
                var executeList = [{
                    "executethis": "getwidmaster",
                    "wid": "ttdto_wid" + n,
                }];
                execute(executeList, function(err, res) {
                    proxyprinttodiv("Function t1 getwidmaster  result -- ", res, 17);
                    next(err, res);
                });
            }, function(err, result) {
                callback3(null, result);
            });
        }
    ], function(err, res) {
        proxyprinttodiv("res --", res, 17);
        var actual_result = res[2];
        proxyprinttodiv("actual_result --", actual_result, 17);

        var expected_result = [
            [
                [{
                    "type": "a",
                    "wid": "ttdto_wid0",
                    "metadata.method": "ttdto"
                }]
            ],
            [
                [{
                    "type": "a",
                    "wid": "ttdto_wid1",
                    "metadata.method": "ttdto"
                }]
            ],
            [
                [{
                    "type": "a",
                    "wid": "ttdto_wid2",
                    "metadata.method": "ttdto"
                }]
            ],
            [
                [{
                    "type": "a",
                    "wid": "ttdto_wid3",
                    "metadata.method": "ttdto"
                }]
            ],
            [
                [{
                    "type": "a",
                    "wid": "ttdto_wid4",
                    "metadata.method": "ttdto"
                }]
            ]
        ];
        proxyprinttodiv("expected_result --", expected_result, 17);

        res = logverify("logverify", actual_result, expected_result);
        callback(err, res);
    });
}
widtests.ett1.category = "execute";
widtests.ett1.subcategory = "daily";
widtests.ett1.js = exports.ett1;
widtests.ett1.description = "this does a test";

/*
do NOT save addwidmater xdto
now add many with addwidmaster with x dto
*/
exports.ett2 = widtests.ett2 = ett2 = function ett2(params, callback) {

    debuglevel = 34;
    saveglobal("debugname", "");
    saveglobal("debugcat", "");
    saveglobal("debugsubcat", "code");
    var status = false;

    async.series([
        /*function (callback1) {      //addwidmaster dto
                  var executeList = [{
                        "executethis": "addwidmaster",
                        "wid": "ttdto",
                        "metadata.method": "ttdto",
                        "type": "string"
                  }];
                  execute(executeList, function (err, res) {
                        proxyprinttodiv("Function t1 addwidmaster ttdto  result -- ", res, 17);
                        callback1(null);
                  });
            },*/
        function(callback2) { //addwidmaster wid1
            //n-times loop
            async.times(5, function(n, next) {
                var executeList = [{
                    "executethis": "addwidmaster",
                    "wid": "ttdto_wid" + n,
                    "metadata.method": "ttdto",
                    "type": "a"
                }];
                execute(executeList, function(err, res) {
                    proxyprinttodiv("Function t1 addwidmaster ttdto wid result -- ", res, 17);
                    next(err, res);
                });
            }, function(err, result) {
                callback2(null, result);
            });
        }
        /*,
            function (callback3) {  //getwidmaster
                  //n-times loop
                  async.times(5, function(n, next){
                        var executeList = [{
                              "executethis": "getwidmaster",
                              "wid": "ttdto_wid"+n,
                        }];
                        execute(executeList, function (err, res) {
                              proxyprinttodiv("Function t1 getwidmaster  result -- ", res, 17);
                        });
                  }, function(err, result) {
                        callback3(null);
                  });
            }*/
    ], function(err, res) {
        proxyprinttodiv("res --", res, 17);
        var actual_result = res[0];
        proxyprinttodiv("actual_result --", actual_result, 17);

        var expected_result = [
            [
                [{
                    "data": {
                        "type": "a"
                    },
                    "wid": "ttdto_wid0",
                    "metadata": {
                        "method": "ttdto",
                        "date": "2014-03-19T07:22:28.248Z"
                    }
                }]
            ],
            [
                [{
                    "data": {
                        "type": "a"
                    },
                    "wid": "ttdto_wid1",
                    "metadata": {
                        "method": "ttdto",
                        "date": "2014-03-19T07:22:28.250Z"
                    }
                }]
            ],
            [
                [{
                    "data": {
                        "type": "a"
                    },
                    "wid": "ttdto_wid2",
                    "metadata": {
                        "method": "ttdto",
                        "date": "2014-03-19T07:22:28.252Z"
                    }
                }]
            ],
            [
                [{
                    "data": {
                        "type": "a"
                    },
                    "wid": "ttdto_wid3",
                    "metadata": {
                        "method": "ttdto",
                        "date": "2014-03-19T07:22:28.256Z"
                    }
                }]
            ],
            [
                [{
                    "data": {
                        "type": "a"
                    },
                    "wid": "ttdto_wid4",
                    "metadata": {
                        "method": "ttdto",
                        "date": "2014-03-19T07:22:28.257Z"
                    }
                }]
            ]
        ];
        proxyprinttodiv("expected_result --", expected_result, 17);

        res = logverify("logverify", actual_result, expected_result);
        callback(err, res);
    });
}
widtests.ett2.category = "execute";
widtests.ett2.subcategory = "daily";
widtests.ett2.js = exports.ett2;
widtests.ett2.description = "this does a test";

/*
do NOT save addwidmater xdto
now add many with addwidmaster with x dto
*/
exports.ett3 = widtests.ett3 = ett3 = function ett3(params, callback) {
    debuglevel = 17;
    saveglobal("debugname", "");
    saveglobal("debugcat", "");
    saveglobal("debugsubcat", "code");
    var status = false;

    async.series([
        function(callback1) { //addwidmaster dto
            var executeList = [{
                "executethis": "addwidmaster",
                "wid": "ttdto",
                "metadata.method": "ttdto",
                "type": "string"
            }];
            execute(executeList, function(err, res) {
                proxyprinttodiv("Function t1 addwidmaster ttdto  result -- ", res, 17);
                callback1(null);
            });
        },
        function(callback2) { //addwidmaster wid1
            //n-times loop
            async.times(1, function(n, next) {
                var executeList = [{
                    "executethis": "addwidmaster",
                    "wid": "ttdto_wid" + n,
                    "metadata.method": "ttdto",
                    "type": "a"
                }];
                execute(executeList, function(err, res) {
                    proxyprinttodiv("Function t1 addwidmaster ttdto wid result -- ", res, 17);
                    next(err, res);
                });
            }, function(err, result) {
                callback2(null, result);
            });
        }
        /*,
            function (callback3) {  //getwidmaster
                  //n-times loop
                  async.times(5, function(n, next){
                        var executeList = [{
                              "executethis": "getwidmaster",
                              "wid": "ttdto_wid"+n,
                        }];
                        execute(executeList, function (err, res) {
                              proxyprinttodiv("Function t1 getwidmaster  result -- ", res, 17);
                        });
                  }, function(err, result) {
                        callback3(null);
                  });
            }*/
    ], function(err, res) {
        proxyprinttodiv("res --", res, 17);
        var actual_result = res[1];
        proxyprinttodiv("actual_result --", actual_result, 17);

        var expected_result = [
            [
                [{
                    "data": {
                        "type": "a"
                    },
                    "wid": "ttdto_wid0",
                    "metadata": {
                        "method": "ttdto",
                        "date": "2014-03-19T07:24:02.062Z"
                    }
                }]
            ]
        ];
        proxyprinttodiv("expected_result --", expected_result, 17);

        res = logverify("logverify", actual_result, expected_result);
        callback(err, res);
    });
}
widtests.ett3.category = "execute";
widtests.ett3.subcategory = "daily";
widtests.ett3.js = exports.ett3;
widtests.ett3.description = "this does a test";


exports.etadd01 = widtests.etadd01 = etadd01 = function etadd01(parameters, callback) {
    debuglevel = 17;
    var executeList = [{
        "executethis": "updatewid",
        "metadata.method": "authordto",
        "wid": "authordto",
        "name": "string",
        "age": "string",
        "a": "string",
        "b": "string",
        "metdata.bookdto.type": "onetomany"
    }, {
        "executethis": "updatewid",
        "metadata.method": "bookdto",
        "wid": "bookdto",
        "title": "string",
        "pages": "string",
        "c": "string",
        "d": "string"
    }, {
        "executethis": "updatewid",
        "metadata.method": "relationshipdto",
        "wid": "relbooktoauthor",
        "primarywid": "authordto",
        "secondarywid": "bookdto",
        "relationshiptype": "attributes"
    }, {
        "executethis": "updatewid",
        "metadata.method": "authordto",
        "wid": "elizabeth_heart",
        "name": "Elizabeth Heart",
        "age": "50"
    }]

    execute(executeList, function(err, res) {
        proxyprinttodiv('__--__', res, 17);

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
        var relationshiptype = "onetomany";
        var command = {};

        addwidobject(object, dtoobject, null, null, null, command, function(err, res) {
            proxyprinttodiv("res --", res, 17);
            var actual_result = [res];
            proxyprinttodiv("actual_result --", actual_result, 17);

            var expected_result = [{
                "data": {
                    "title": "The X Factor",
                    "pages": "300"
                },
                "wid": "1",
                "metadata": {
                    "method": "bookdto",
                    "date": "2014-03-19T07:41:35.196Z"
                }
            }];
            proxyprinttodiv("expected_result --", expected_result, 17);

            res = logverify("logverify", actual_result, expected_result);
            callback(err, res);
        });
    });

}
widtests.etadd01.category = "execute";
widtests.etadd01.subcategory = "daily";
widtests.etadd01.js = exports.etadd01;
widtests.etadd01.description = "this does a test";

exports.etadd0 = widtests.etadd0 = etadd0 = function etadd0(parameters, callback) {
    debuglevel = 17;
    var executeList = [{
            "executethis": "updatewid",
            "metadata.method": "authordto",
            "wid": "authordto",
            "name": "string",
            "age": "string",
            "a": "string",
            "b": "string",
            "metdata.bookdto.type": "onetomany"
        }, {
            "executethis": "updatewid",
            "metadata.method": "bookdto",
            "wid": "bookdto",
            "title": "string",
            "pages": "string",
            "c": "string",
            "d": "string"
        }, {
            "executethis": "updatewid",
            "metadata.method": "relationshipdto",
            "wid": "relbooktoauthor",
            "primarywid": "authordto",
            "secondarywid": "bookdto",
            "relationshiptype": "attributes"
        }, {
            "executethis": "updatewid",
            "metadata.method": "authordto",
            "wid": "elizabeth_heart",
            "name": "Elizabeth Heart",
            "age": "50"
        }
        //{"executethis":"updatewid","metadata.method":"bookdto","wid":"222","title":"The X Factor","pages":"300"},
        //{"executethis":"updatewid","metadata.method":"relationshipdto","wid":"rel111","primarywid":"elizabeth_heart","secondarywid":"222", "relationshiptype":"attributes"},
    ]

    execute(executeList, function(err, res) {
        proxyprinttodiv('__--__', res, 17);

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
        var relationshiptype = "onetomany";
        var command = {};

        // addrecord(object, dtoobject, parentwid, relationshiptype, command, function (err, res) {
        //     alert("add0 addrecord! -- got res -->" + JSON.stringify(res));
        // });

        cleanadd(object, dtoobject, command, function(err, res) {
            proxyprinttodiv("res --", res, 17);
            var actual_result = [res];
            proxyprinttodiv("actual_result --", actual_result, 17);

            var expected_result = [{
                "obj": {
                    "metadata": {
                        "method": "bookdto"
                    },
                    "wid": "222",
                    "title": "The X Factor",
                    "pages": "300"
                },
                "dtoobj": {
                    "metadata": {
                        "method": "string"
                    },
                    "wid": "string",
                    "title": "string",
                    "pages": "string"
                }
            }];
            proxyprinttodiv("expected_result --", expected_result, 17);

            res = logverify("logverify", actual_result, expected_result);
            callback(err, res);
        });
    });

}
widtests.etadd0.category = "execute";
widtests.etadd0.subcategory = "daily";
widtests.etadd0.js = exports.etadd0;
widtests.etadd0.description = "this does a test";

exports.etadd1 = widtests.etadd1 = etadd1 = function etadd1(parameters, callback) {
    debuglevel = 17;
    eventappinstall();
    var inputObject = {
        "name": "Elizabeth Heart",
        "age": "50",
        "wid": "elizabeth_heart",
        "metadata": {
            "method": "authordto"
        },
        "bookdto": {
            "title": "The X Factor",
            "pages": "300",
            "wid": "222",
            "metadata": {
                "method": "bookdto"
            }
        }
    };
    var inputdto = {
        "name": "string",
        "age": "string",
        "a": "string",
        "b": "string",
        "wid": "string",
        "bookdto": {
            "title": "string",
            "pages": "string",
            "c": "string",
            "d": "string",
            "wid": "string",
            "metadata": {
                "method": "bookdto",
                "inherit": "defaultbookdtoactions"
            },
            "command": {
                "inherit": {
                    "defaultbookdtoactions": "defaultbookdtoactions"
                },
                "deepdtolist": {},
                "dtolist": {}
            }
        },
        "metadata": {
            "method": "authordto",
            "bookdto": {
                "type": "onetomany"
            },
            "inherit": "defaultauthordtoactions"
        },
        "command": {
            "inherit": {
                "defaultauthordtoactions": "defaultauthordtoactions",
                "defaultbookdtoactions": "defaultbookdtoactions"
            },
            "deepdtolist": {
                "bookdto": "onetomany"
            },
            "dtolist": {
                "bookdto": "bookdto"
            }
        }
    }

    var command = {};

    addwidobject(inputObject, inputdto, null, null, null, command, function(err, res) {
        proxyprinttodiv("res --", res, 17);
        var actual_result = [res];
        proxyprinttodiv("actual_result --", actual_result, 17);

        var expected_result = [{
            "data": {
                "name": "Elizabeth Heart",
                "age": "50"
            },
            "wid": "elizabeth_heart",
            "metadata": {
                "method": "authordto",
                "date": "2014-03-19T07:46:17.925Z"
            }
        }];
        proxyprinttodiv("expected_result --", expected_result, 17);

        res = logverify("logverify", actual_result, expected_result);
        callback(err, res);
    });
}
widtests.etadd1.category = "execute";
widtests.etadd1.subcategory = "daily";
widtests.etadd1.js = exports.etadd1;
widtests.etadd1.description = "this does a test";

exports.etadd11 = widtests.etadd11 = etadd11 = function etadd11(parameters, callback) {
    debuglevel = 17;
    eventappinstall();
    var inputObject = {
        "name": "Elizabeth Heart",
        "age": "50",
        "wid": "elizabeth_heart",
        "metadata": {
            "method": "authordto"
        },
        "bookdto": {
            "title": "The X Factor",
            "pages": "300",
            "wid": "222",
            "metadata": {
                "method": "bookdto"
            }
        }
    };

    var inputdto = {
        "name": "string",
        "age": "string",
        "a": "string",
        "b": "string",
        "wid": "string",
        "bookdto": {
            "title": "string",
            "pages": "string",
            "c": "string",
            "d": "string",
            "wid": "string",
            "metadata": {
                "method": "bookdto",
                "inherit": "defaultbookdtoactions"
            },
            "command": {
                "inherit": {
                    "defaultbookdtoactions": "defaultbookdtoactions"
                },
                "deepdtolist": {},
                "dtolist": {}
            }
        },
        "metadata": {
            "method": "authordto",
            "bookdto": {
                "type": "onetomany"
            },
            "inherit": "defaultauthordtoactions"
        },
        "command": {
            "inherit": {
                "defaultauthordtoactions": "defaultauthordtoactions",
                "defaultbookdtoactions": "defaultbookdtoactions"
            },
            "deepdtolist": {
                "bookdto": "onetomany"
            },
            "dtolist": {
                "bookdto": "bookdto"
            }
        }
    }

    var command = {};

    addwidobject(inputObject, inputdto, null, null, null, command, function(err, res) {
        proxyprinttodiv("res --", res, 17);
        var actual_result = [res];
        proxyprinttodiv("actual_result --", actual_result, 17);

        var expected_result = [{
            "data": {
                "name": "Elizabeth Heart",
                "age": "50"
            },
            "wid": "elizabeth_heart",
            "metadata": {
                "method": "authordto",
                "date": "2014-03-19T07:52:17.443Z"
            }
        }];
        proxyprinttodiv("expected_result --", expected_result, 17);

        res = logverify("logverify", actual_result, expected_result);
        callback(err, res);
    });
}
widtests.etadd11.category = "execute";
widtests.etadd11.subcategory = "daily";
widtests.etadd11.js = exports.etadd11;
widtests.etadd11.description = "this does a test";

/*
addwid with out inherit ... should add inputobject
*/
exports.etaddwidtest = widtests.etaddwidtest = etaddwidtest = function etaddwidtest(parameters, callback) {
    debuglevel = 17;
    eventappinstall();
    var executeList = [{
        "executethis": "updatewid",
        "metadata.method": "authordto",
        "wid": "defaultauthor",
        "name": "roger"
    }];
    execute(executeList, function(err, res) {
        proxyprinttodiv("addwidtest updatewid authordto result ", res, 17);

        var inputobject = {
            "name": "Elizabeth Heart",
            "age": "50",
            "wid": "elizabeth_heart",
            "metadata": {
                "method": "authordto"
            }
        };
        var inputdto = {
            "name": "string",
            "age": "string",
            "a": "string",
            "b": "string",
            "wid": "string",
            "metadata": {
                "method": "string",
                "bookdto": {
                    "type": "onetomany"
                },
                "inherit": "defaultauthor"
            },
            "command": {
                "inherit": {
                    "defaultauthor": "defaultauthor"
                },
                "deepdtolist": {
                    "bookdto": "onetomany"
                },
                "dtolist": {
                    "bookdto": "bookdto"
                }
            }
        };
        var command = {};

        addwid(inputobject, inputdto, command, function(err, res) {
            proxyprinttodiv("res --", res, 17);
            var actual_result = res;
            proxyprinttodiv("actual_result --", actual_result, 17);

            var expected_result = [{
                "data": {
                    "name": "Elizabeth Heart",
                    "age": "50"
                },
                "wid": "elizabeth_heart",
                "metadata": {
                    "method": "authordto",
                    "date": "2014-03-19T08:28:48.213Z"
                }
            }];
            proxyprinttodiv("expected_result --", expected_result, 17);

            res = logverify("logverify", actual_result, expected_result);
            callback(err, res);
        });
    });
}
widtests.etaddwidtest.category = "execute";
widtests.etaddwidtest.subcategory = "daily";
widtests.etaddwidtest.js = exports.etaddwidtest;
widtests.etaddwidtest.description = "this does a test";

/*
addwid without inherit .. should add the input record
*/
exports.etaddwidtest2 = widtests.etaddwidtest2 = etaddwidtest2 = function etaddwidtest2(parameters, callback) {
    debuglevel = 17;
    eventappinstall();
    var executeList = [{
        "executethis": "updatewid",
        "metadata.method": "authordto",
        "wid": "defaultauthor",
        "name": "roger"
    }];
    execute(executeList, function(err, res) {
        proxyprinttodiv("addwidtest updatewid authordto result ", res, 17);

        var inputobject = {
            "name": "Elizabeth Heart",
            "age": "50",
            "wid": "elizabeth_heart",
            "metadata": {
                "method": "authordto"
            }
        };
        var inputdto = {
            "name": "string",
            "age": "string",
            "a": "string",
            "b": "string",
            "wid": "string",
            "metadata": {
                "method": "string",
                "bookdto": {
                    "type": "onetomany"
                }
            }
        };
        var command = {};

        addwid(inputobject, inputdto, command, function(err, res) {
            proxyprinttodiv("res --", res, 17);
            var actual_result = res;
            proxyprinttodiv("actual_result --", actual_result, 17);

            var expected_result = [{
                "data": {
                    "name": "Elizabeth Heart",
                    "age": "50"
                },
                "wid": "elizabeth_heart",
                "metadata": {
                    "method": "authordto",
                    "date": "2014-03-19T08:28:48.213Z"
                }
            }];
            proxyprinttodiv("expected_result --", expected_result, 17);

            res = logverify("logverify", actual_result, expected_result);
            callback(err, res);
        });
    });
}
widtests.etaddwidtest2.category = "execute";
widtests.etaddwidtest2.subcategory = "daily";
widtests.etaddwidtest2.js = exports.etaddwidtest2;
widtests.etaddwidtest2.description = "this does a test";

/*
addwid - with record alreayd exists ... should update name, leave all else the same
*/
exports.etaddwidtest3 = widtests.etaddwidtest3 = etaddwidtest3 = function etaddwidtest3(parameters, callback) {
    debuglevel = 17;
    eventappinstall();
    var executeList = [
        //{"executethis":"updatewid","metadata.method":"authordto","wid":"defaultauthor","name":"roger"}
        {
            "executethis": "updatewid",
            "metadata.method": "authordto",
            "wid": "elizabeth_heart",
            "name": "roger"
        }
    ];
    execute(executeList, function(err, res) {
        proxyprinttodiv("addwidtest updatewid authordto result ", res, 17);

        var inputobject = {
            "name": "Elizabeth Heart",
            "age": "50",
            "wid": "elizabeth_heart",
            "metadata": {
                "method": "authordto"
            }
        };
        var inputdto = {
            "name": "string",
            "age": "string",
            "a": "string",
            "b": "string",
            "wid": "string",
            "metadata": {
                "method": "string",
                "bookdto": {
                    "type": "onetomany"
                }
            }
        };
        var command = {};

        addwid(inputobject, inputdto, command, function(err, res) {
            proxyprinttodiv("res --", res, 17);
            var actual_result = res;
            proxyprinttodiv("actual_result --", actual_result, 17);

            var expected_result = [{
                "data": {
                    "name": "Elizabeth Heart",
                    "age": "50"
                },
                "wid": "elizabeth_heart",
                "metadata": {
                    "method": "authordto",
                    "date": "2014-03-19T08:28:48.213Z"
                }
            }];
            proxyprinttodiv("expected_result --", expected_result, 17);

            res = logverify("logverify", actual_result, expected_result);
            callback(err, res);
        });
    });
}
widtests.etaddwidtest3.category = "execute";
widtests.etaddwidtest3.subcategory = "daily";
widtests.etaddwidtest3.js = exports.etaddwidtest3;
widtests.etaddwidtest3.description = "this does a test";

/*
addwid with inherit that DOES matter ... should return name of roger
*/
exports.etaddwidtest4 = widtests.etaddwidtest4 = etaddwidtest4 = function etaddwidtest4(parameters, callback) {
    debuglevel = 17;
    eventappinstall();
    var executeList = [{
        "executethis": "updatewid",
        "metadata.method": "authordto",
        "wid": "defaultauthor",
        "name": "roger"
    }];
    execute(executeList, function(err, res) {
        proxyprinttodiv("addwidtest updatewid authordto result ", res, 17);

        var inputobject = {
            //"name": "Elizabeth Heart",
            "age": "50",
            "wid": "elizabeth_heart",
            "metadata": {
                "method": "authordto"
            }
        };
        var inputdto = {
            "name": "string",
            "age": "string",
            "a": "string",
            "b": "string",
            "wid": "string",
            "metadata": {
                "method": "string",
                "bookdto": {
                    "type": "onetomany"
                },
                "inherit": "defaultauthor"
            },
            "command": {
                "inherit": {
                    "defaultauthor": "defaultauthor"
                },
                "deepdtolist": {
                    "bookdto": "onetomany"
                },
                "dtolist": {
                    "bookdto": "bookdto"
                }
            }
        };
        var command = {};

        addwid(inputobject, inputdto, command, function(err, res) {
            proxyprinttodiv("res --", res, 17);
            var actual_result = res;
            proxyprinttodiv("actual_result --", actual_result, 17);

            var expected_result = [{
                "data": {
                    "age": "50"
                },
                "wid": "elizabeth_heart",
                "metadata": {
                    "method": "authordto",
                    "date": "2014-03-19T08:43:36.593Z"
                }
            }];
            proxyprinttodiv("expected_result --", expected_result, 17);

            res = logverify("logverify", actual_result, expected_result);
            callback(err, res);
        });
    });
}
widtests.etaddwidtest4.category = "execute";
widtests.etaddwidtest4.subcategory = "daily";
widtests.etaddwidtest4.js = exports.etaddwidtest4;
widtests.etaddwidtest4.description = "this does a test";

/*
addwid - with record .. but dto fliters age
*/
exports.etaddwidtest5 = widtests.etaddwidtest5 = etaddwidtest5 = function etaddwidtest5(parameters, callback) {
    debuglevel = 17;
    eventappinstall();
    var executeList = [
        //{"executethis":"updatewid","metadata.method":"authordto","wid":"defaultauthor","name":"roger"}
        {
            "executethis": "updatewid",
            "metadata.method": "authordto",
            "wid": "elizabeth_heart",
            "name": "rogershoulddisappera",
            "a": "shouldsurvie"
        }
    ];
    execute(executeList, function(err, res) {
        proxyprinttodiv("addwidtest updatewid authordto result ", res, 17);

        var inputobject = {
            "name": "Elizabeth Heart",
            "age": "50",
            "wid": "elizabeth_heart",
            "metadata": {
                "method": "authordto"
            }
        };
        var inputdto = {
            "name": "string",
            "a": "string",
            "b": "string",
            "wid": "string",
            "metadata": {
                "method": "string",
                "bookdto": {
                    "type": "onetomany"
                }
            }
        };
        var command = {};

        addwid(inputobject, inputdto, command, function(err, res) {
            proxyprinttodiv("res --", res, 17);
            var actual_result = res;
            proxyprinttodiv("actual_result --", actual_result, 17);

            var expected_result = [{
                "data": {
                    "name": "Elizabeth Heart",
                    "a": "shouldsurvie"
                },
                "wid": "elizabeth_heart",
                "metadata": {
                    "method": "authordto",
                    "date": "2014-03-19T08:46:37.064Z"
                }
            }];
            proxyprinttodiv("expected_result --", expected_result, 17);

            res = logverify("logverify", actual_result, expected_result);
            callback(err, res);
        });
    });
}
widtests.etaddwidtest5.category = "execute";
widtests.etaddwidtest5.subcategory = "daily";
widtests.etaddwidtest5.js = exports.etaddwidtest5;
widtests.etaddwidtest5.description = "this does a test";

/*
addwid with inherit that DOES matter ... deep should return name of roger + more
*/
exports.etaddwidtest6 = widtests.etaddwidtest6 = etaddwidtest6 = function etaddwidtest6(parameters, callback) {
    debuglevel = 17;
    eventappinstall();
    var executeList = [{
        "executethis": "updatewid",
        "metadata.method": "authordto",
        "wid": "defaultauthor",
        "name": {
            "test": "roger"
        }
    }];
    execute(executeList, function(err, res) {
        proxyprinttodiv("addwidtest updatewid authordto result ", res, 17);

        var inputobject = {
            "name": {
                "test": "roger"
            },
            "age": "50",
            "wid": "elizabeth_heart",
            "metadata": {
                "method": "authordto"
            }
        };
        var inputdto = {
            "name": "string",
            "age": "string",
            "a": "string",
            "b": "string",
            "wid": "string",
            "metadata": {
                "method": "string",
                "bookdto": {
                    "type": "onetomany"
                },
                "inherit": "defaultauthor"
            },
            "command": {
                "inherit": {
                    "defaultauthor": "defaultauthor"
                },
                "deepdtolist": {
                    "bookdto": "onetomany"
                },
                "dtolist": {
                    "bookdto": "bookdto"
                }
            }
        };
        var command = {};

        addwid(inputobject, inputdto, command, function(err, res) {
            proxyprinttodiv("res --", res, 17);
            var actual_result = res;
            proxyprinttodiv("actual_result --", actual_result, 17);

            var expected_result = [{
                "data": {
                    "name": {},
                    "age": "50"
                },
                "wid": "elizabeth_heart",
                "metadata": {
                    "method": "authordto",
                    "date": "2014-03-19T08:48:28.746Z"
                }
            }];
            proxyprinttodiv("expected_result --", expected_result, 17);

            res = logverify("logverify", actual_result, expected_result);
            callback(err, res);
        });
    });
}
widtests.etaddwidtest6.category = "execute";
widtests.etaddwidtest6.subcategory = "daily";
widtests.etaddwidtest6.js = exports.etaddwidtest6;
widtests.etaddwidtest6.description = "this does a test";

/*
addwid without inherit  ... should add inputobject -- test of deep filter string, number, boolean, date -- did it convert it?
*/
exports.etaddwidtest7 = widtests.etaddwidtest7 = etaddwidtest7 = function etaddwidtest7(parameters, callback) {
    debuglevel = 17;
    eventappinstall();
    var executeList = [{
        "executethis": "updatewid",
        "metadata.method": "authordto",
        "wid": "defaultauthor",
        "name": "roger"
    }];
    execute(executeList, function(err, res) {
        proxyprinttodiv("addwidtest updatewid authordto result ", res, 17);

        var inputobject = {
            "name": {
                "test": "roger"
            },
            "age": "50",
            "wid": "elizabeth_heart",
            "a": "1/15/2014",
            "b": "false",
            "metadata": {
                "method": "authordto"
            }
        };
        var inputdto = {
            "name": "string",
            "age": "number",
            "a": "date",
            "b": "boolean",
            "wid": "string",
            "metadata": {
                "method": "string",
                "bookdto": {
                    "type": "onetomany"
                },
                "inherit": "defaultauthor"
            },
            "command": {
                "inherit": {
                    "defaultauthor": "defaultauthor"
                },
                "deepdtolist": {
                    "bookdto": "onetomany"
                },
                "dtolist": {
                    "bookdto": "bookdto"
                }
            }
        };
        var command = {};

        addwid(inputobject, inputdto, command, function(err, res) {
            proxyprinttodiv("res --", res, 17);
            var actual_result = res;
            proxyprinttodiv("actual_result --", actual_result, 17);

            var expected_result = [{
                "data": {
                    "name": {},
                    "age": "50",
                    "a": "1/15/2014",
                    "b": "false"
                },
                "wid": "elizabeth_heart",
                "metadata": {
                    "method": "authordto",
                    "date": "2014-03-19T08:50:07.108Z"
                }
            }];
            proxyprinttodiv("expected_result --", expected_result, 17);

            res = logverify("logverify", actual_result, expected_result);
            callback(err, res);
        });
    });
}
widtests.etaddwidtest7.category = "execute";
widtests.etaddwidtest7.subcategory = "daily";
widtests.etaddwidtest7.js = exports.etaddwidtest7;
widtests.etaddwidtest7.description = "this does a test";

exports.etadd2 = widtests.etadd2 = etadd2 = function etadd2(parameters, callback) {
    debuglevel = 17;
    var executeList = [{
            "executethis": "updatewid",
            "metadata.method": "authordto",
            "wid": "authordto",
            "name": "string",
            "age": "string",
            "a": "string",
            "b": "string",
            "metdata.bookdto.type": "onetomany"
        }, {
            "executethis": "updatewid",
            "metadata.method": "bookdto",
            "wid": "bookdto",
            "title": "string",
            "pages": "string"
        }, {
            "executethis": "updatewid",
            "metadata.method": "relationshipdto",
            "wid": "relbooktoauthor",
            "primarywid": "authordto",
            "secondarywid": "bookdto",
            "relationshiptype": "attributes"
        }, {
            "executethis": "updatewid",
            "metadata.method": "authordto",
            "wid": "elizabeth_heart",
            "name": "Elizabeth Heart",
            "age": "50"
        },
        // {"executethis":"updatewid","metadata.method":"bookdto","wid":"222","title":"The X Factor","pages":"300"},
        // {"executethis":"updatewid","metadata.method":"relationshipdto","wid":"rel111","primarywid":"elizabeth_heart","secondarywid":"222", "relationshiptype":"attributes"},
        {
            "executethis": "addwidmaster",
            "bookdto.title": "string",
            "bookdto.pages": "string",
            "metadata.method": "authordto",
            "wid": "authordto",
            "name": "string",
            "age": "string",
            "metadata.bookdto.type": "onetomany"
        }, {
            "executethis": "getwidmaster",
            "wid": "elizabeth_heart"
        }
    ]

    execute(executeList, function(err, res) {
        proxyprinttodiv("res --", res, 17);
        var actual_result = res[5];
        proxyprinttodiv("actual_result --", actual_result, 17);

        var expected_result = [{
            "name": "Elizabeth Heart",
            "age": "50",
            "wid": "elizabeth_heart",
            "metadata.method": "authordto"
        }];
        proxyprinttodiv("expected_result --", expected_result, 17);

        res = logverify("logverify", actual_result, expected_result);
        callback(err, res);
    });
}
widtests.etadd2.category = "execute";
widtests.etadd2.subcategory = "daily";
widtests.etadd2.js = exports.etadd2;
widtests.etadd2.description = "this does a test";