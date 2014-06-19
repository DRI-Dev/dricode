// This file is for tests that rely on functionality no longer present

var widtests = widtests || {};

//************************************************************
// offlineupdatewid() not found
//************************************************************

//exports.sample1 = sample1 = function sample1 (params, callback) {
// offlineupdatewid() not found
exports.sample1 = widtests.sample1 = sample1 = function sample1(params, callback) {

    saveglobal("debugsubcat", "code");
    offlineupdatewid({
        "wid": "wid1",
        "a": "b"
    }, callback);
    debugfn("offlinegetwid code generator END", "ag2", "", "code", getglobal("debugcolor"), getglobal("debugindent"), {}, 9);
}
widtests.sample1.category = "execute";
widtests.sample1.subcategory = "daily";
widtests.sample1.js = exports.sample1;
widtests.sample1.description = "this does a test";


//************************************************************
// mergeoptions() not found
//************************************************************

// mergeoptions() not found
exports.sample2 = widtests.sample2 = sample2 = function sample2(params, callback) {
    saveglobal("debugsubcat", "code");
    merge_options({
        "wid": "wid1",
        "a": "b"
    }, {
        "wid": "wid2",
        "y": "z"
    });
    debugfn("offlinegetwid code generator END", "ag2", "", "code", getglobal("debugcolor"), getglobal("debugindent"), {}, 9);
}
widtests.sample2.category = "execute";
widtests.sample2.subcategory = "daily";
widtests.sample2.js = exports.sample2;
widtests.sample2.description = "this does a test";


//************************************************************
// executethismultiple() not found
//************************************************************

//function test171717 (params, callback) {
// executethismultiple() not found
exports.test171717 = widtests.test171717 = test171717 = function test171717(params, callback) {

    eventappinstall();
    var todolist = [
        [{
                "fn": "test_and_verify"
            },
            [
                "MongoAddEditPrepare",
                "MongoAddEditPrepare", [
                    [],
                    [{
                        "key": "metadata.method",
                        "value": "colordto"
                    }, {
                        "key": "wid",
                        "value": "colordto"
                    }, {
                        "key": "hue",
                        "value": "string"
                    }],
                    "colordto",
                    "colordto"
                ], {
                    "metadata.method": "colordto",
                    "wid": "colordto",
                    "hue": "string"
                }, {
                    "initialwid": {
                        "wid": "initialwid",
                        "initialwid": "for key hello from bootprocess"
                    },
                    "colordto": {
                        "data": {
                            "hue": "string"
                        },
                        "wid": "colordto",
                        "metadata": {
                            "method": "colordto",
                            "date": "2014-02-06T21:59:08.567Z"
                        }
                    }
                }, {
                    "command": "null"
                }
            ]
        ]
    ];
    executethismultiple(todolist, callback);
}
widtests.test171717.category = "execute";
widtests.test171717.subcategory = "daily";
widtests.test171717.js = exports.test171717;
widtests.test171717.description = "this does a test";


//exports.newt = newt = function newt(params, callback) {
exports.newt = widtests.newt = newt = function newt(params, callback) {

    // var todolist = 
    //     [
    //         [
    //             {
    //                 "fn": "test_and_verify"
    //             },
    //             [
    //                 "offlineupdatewid",
    //                 "offlineupdatewid",
    //                 {
    //                     "0": {
    //                         "metadata.method": "sounddto",
    //                         "wid": "sounddto",
    //                         "note": "string"
    //                     }
    //                 },
    //                 {
    //                     "data": {
    //                         "note": "string"
    //                     },
    //                     "wid": "sounddto",
    //                     "metadata": {
    //                         "method": "sounddto",
    //                         "date": "2014-02-04T15:54:34.378Z"
    //                     }
    //                 },
    //                 {
    //                     "initialwid": {
    //                         "wid": "initialwid",
    //                         "initialwid": "for key hello from bootprocess"
    //                     },
    //                     "sounddto": {
    //                         "data": {
    //                             "note": "string"
    //                         },
    //                         "wid": "sounddto",
    //                         "metadata": {
    //                             "method": "sounddto",
    //                             "date": "2014-02-04T15:54:34.378Z"
    //                         }
    //                     }
    //                 },
    //                 {"command": "null"}
    //             ]
    //         ]
    //     ]
    var todolist = [
        [{
                "fn": "test_and_verify"
            },
            [
                "offlineupdatewid",
                "offlineupdatewid", {
                    "metadata.method": "sounddto",
                    "note": "string",
                    "wid": "sounddto"
                }, {
                    "data": {
                        "note": "string"
                    },
                    "metadata": {
                        "date": "2014-02-04T18:20:44.503Z",
                        "method": "sounddto"
                    },
                    "wid": "sounddto"
                }, {
                    "initialwid": {
                        "initialwid": "for key hello from bootprocess",
                        "wid": "initialwid"
                    },
                    "sounddto": {
                        "data": {
                            "note": "string"
                        },
                        "metadata": {
                            "date": "2014-02-04T18:20:44.503Z",
                            "method": "sounddto"
                        },
                        "wid": "sounddto"
                    }
                }, {
                    "command": "null"
                }
            ]
        ]
    ]

    // var db = {"initialwid":{"wid":"initialwid","initialwid":"for key hello from bootprocess"},"sounddto":{"data":{"note":"string"},"wid":"sounddto","metadata":{"method":"sounddto","date":"2014-02-04T16:18:51.732Z"}}};
    // addToLocalStorage("DRIKEY", db);   
    executethismultiple(todolist, callback);

}
widtests.newt.category = "execute";
widtests.newt.subcategory = "daily";
widtests.newt.js = exports.newt;
widtests.newt.description = "this does a test";

//exports.newt2 = newt2 = function newt2(params, callback) {
exports.newt2 = widtests.newt2 = newt2 = function newt2(params, callback) {

    var todolist = [
        [{
                "fn": "test_and_verify"
            },
            [
                "getwidmaster",
                "getwidmaster", {
                    "wid": "sonddto",
                    "command.convertmethod": "dto",
                    "command.dtotype": "sonddto"
                }, {
                    "title": "string",
                    "metadata.sounddto.type": "onetomany",
                    "sounddto.note": "string",
                    "sounddto.wid": "sounddto",
                    "sounddto.metadata.method": "sounddto"
                }, {
                    "initialwid": {
                        "wid": "initialwid",
                        "initialwid": "for key hello from bootprocess"
                    },
                    "sounddto": {
                        "data": {
                            "note": "string"
                        },
                        "wid": "sounddto",
                        "metadata": {
                            "method": "sounddto",
                            "date": "2014-02-04T18:31:01.199Z"
                        }
                    },
                    "sonddto": {
                        "data": {
                            "title": "string"
                        },
                        "wid": "sonddto",
                        "metadata": {
                            "method": "sonddto",
                            "sounddto": {
                                "type": "onetomany"
                            },
                            "date": "2014-02-04T18:31:01.313Z"
                        }
                    },
                    "rel_sound_to_song": {
                        "data": {
                            "primarywid": "sonddto",
                            "secondarywid": "sounddto",
                            "relationshiptype": "attributes"
                        },
                        "wid": "rel_sound_to_song",
                        "metadata": {
                            "method": "defaultdto",
                            "date": "2014-02-04T18:31:01.389Z"
                        }
                    }
                }, {
                    "command": "null"
                }
            ]
        ]
    ]
    executethismultiple(todolist, callback);
}
widtests.newt2.category = "execute";
widtests.newt2.subcategory = "daily";
widtests.newt2.js = exports.newt2;
widtests.newt2.description = "this does a test";

//exports.newt3 = newt3 = function newt3(params, callback) {
exports.newt3 = widtests.newt3 = newt3 = function newt3(params, callback) {

    var todolist = [];
    executethismultiple(todolist, callback);
}
widtests.newt3.category = "execute";
widtests.newt3.subcategory = "daily";
widtests.newt3.js = exports.newt3;
widtests.newt3.description = "this does a test";

//exports.newt4 = newt4 = function newt4(params, callback) {
exports.newt4 = widtests.newt4 = newt4 = function newt4(params, callback) {
    var todolist = [
        [{
                "fn": "test_and_verify"
            },
            [
                "getcleanparameters",
                "getcleanparameters", [{
                        "title": "Highway to Hell",
                        "wid": "song1",
                        "metadata.method": "sonddto",
                        "sounddto.0.note": "A flat",
                        "sounddto.0.wid": "1",
                        "sounddto.0.metadata.method": "sounddto",
                        "sounddto.1.note": "B sharp",
                        "sounddto.1.wid": "3",
                        "sounddto.1.metadata.method": "sounddto",
                        "sounddto.2.note": "C flat",
                        "sounddto.2.wid": "5",
                        "sounddto.2.metadata.method": "sounddto"
                    },
                    "",
                    "",
                    "remove",
                    ""
                ], {
                    "parms": {
                        "title": "Highway to Hell",
                        "wid": "song1",
                        "metadata.method": "sonddto",
                        "sounddto.0.note": "A flat",
                        "sounddto.0.wid": "1",
                        "sounddto.0.metadata.method": "sounddto",
                        "sounddto.1.note": "B sharp",
                        "sounddto.1.wid": "3",
                        "sounddto.1.metadata.method": "sounddto",
                        "sounddto.2.note": "C flat",
                        "sounddto.2.wid": "5",
                        "sounddto.2.metadata.method": "sounddto"
                    },
                    "dto": {
                        "title": "Highway to Hell",
                        "wid": "song1",
                        "metadata.method": "sonddto",
                        "sounddto.note": "string",
                        "sounddto.wid": "sounddto",
                        "sounddto.metadata.method": "sounddto"
                    }
                }, {
                    "1": {
                        "data": {
                            "note": "A flat"
                        },
                        "wid": "1",
                        "metadata": {
                            "method": "sounddto",
                            "date": "2014-02-05T18:43:43.175Z"
                        }
                    },
                    "2": {
                        "data": {
                            "primarywid": "song1",
                            "secondarywid": "1",
                            "relationshiptype": "attributes",
                            "linktype": "onetomany"
                        },
                        "wid": "2",
                        "metadata": {
                            "method": "relationshipdto",
                            "date": "2014-02-05T18:43:43.248Z"
                        }
                    },
                    "3": {
                        "data": {
                            "note": "B sharp"
                        },
                        "wid": "3",
                        "metadata": {
                            "method": "sounddto",
                            "date": "2014-02-05T18:43:43.273Z"
                        }
                    },
                    "4": {
                        "data": {
                            "primarywid": "song1",
                            "secondarywid": "3",
                            "relationshiptype": "attributes",
                            "linktype": "onetomany"
                        },
                        "wid": "4",
                        "metadata": {
                            "method": "relationshipdto",
                            "date": "2014-02-05T18:43:43.348Z"
                        }
                    },
                    "5": {
                        "data": {
                            "note": "C flat"
                        },
                        "wid": "5",
                        "metadata": {
                            "method": "sounddto",
                            "date": "2014-02-05T18:43:43.366Z"
                        }
                    },
                    "6": {
                        "data": {
                            "primarywid": "song1",
                            "secondarywid": "5",
                            "relationshiptype": "attributes",
                            "linktype": "onetomany"
                        },
                        "wid": "6",
                        "metadata": {
                            "method": "relationshipdto",
                            "date": "2014-02-05T18:43:43.437Z"
                        }
                    },
                    "initialwid": {
                        "wid": "initialwid",
                        "initialwid": "for key hello from bootprocess"
                    },
                    "sounddto": {
                        "data": {
                            "note": "string"
                        },
                        "wid": "sounddto",
                        "metadata": {
                            "method": "sounddto",
                            "date": "2014-02-05T18:43:42.711Z"
                        }
                    },
                    "sonddto": {
                        "data": {
                            "title": "string"
                        },
                        "wid": "sonddto",
                        "metadata": {
                            "method": "sonddto",
                            "sounddto": {
                                "type": "onetomany"
                            },
                            "date": "2014-02-05T18:43:42.827Z"
                        }
                    },
                    "rel_sound_to_song": {
                        "data": {
                            "primarywid": "sonddto",
                            "secondarywid": "sounddto",
                            "relationshiptype": "attributes"
                        },
                        "wid": "rel_sound_to_song",
                        "metadata": {
                            "method": "defaultdto",
                            "date": "2014-02-05T18:43:42.888Z"
                        }
                    },
                    "song1": {
                        "data": {
                            "title": "Highway to Hell"
                        },
                        "wid": "song1",
                        "metadata": {
                            "method": "sonddto",
                            "date": "2014-02-05T18:43:43.088Z"
                        }
                    }
                }, {
                    "command": "null"
                }
            ]
        ]
    ]
    executethismultiple(todolist, callback);
}
widtests.newt4.category = "execute";
widtests.newt4.subcategory = "daily";
widtests.newt4.js = exports.newt4;
widtests.newt4.description = "this does a test";



//exports.newt5 = newt5 = function newt5(params, callback) {
exports.newt5 = widtests.newt5 = newt5 = function newt5(params, callback) {


    var todolist =

    [
        [{
                "fn": "test_and_verify"
            },
            [
                "offlineupdatewid",
                "offlineupdatewid", [{
                    "metadata.method": "sonddto",
                    "wid": "song1",
                    "title": "Highway to Hell"
                }], {
                    "data": {
                        "title": "Highway to Hell"
                    },
                    "wid": "song1",
                    "metadata": {
                        "method": "sonddto",
                        "date": "2014-02-05T21:11:19.461Z"
                    }
                }, {
                    "initialwid": {
                        "wid": "initialwid",
                        "initialwid": "for key hello from bootprocess"
                    },
                    "sounddto": {
                        "data": {
                            "note": "string"
                        },
                        "wid": "sounddto",
                        "metadata": {
                            "method": "sounddto",
                            "date": "2014-02-05T21:11:18.876Z"
                        }
                    },
                    "sonddto": {
                        "data": {
                            "title": "string"
                        },
                        "wid": "sonddto",
                        "metadata": {
                            "method": "sonddto",
                            "sounddto": {
                                "type": "onetomany"
                            },
                            "date": "2014-02-05T21:11:19.040Z"
                        }
                    },
                    "rel_sound_to_song": {
                        "data": {
                            "primarywid": "sonddto",
                            "secondarywid": "sounddto",
                            "relationshiptype": "attributes"
                        },
                        "wid": "rel_sound_to_song",
                        "metadata": {
                            "method": "defaultdto",
                            "date": "2014-02-05T21:11:19.141Z"
                        }
                    },
                    "song1": {
                        "data": {
                            "title": "Highway to Hell"
                        },
                        "wid": "song1",
                        "metadata": {
                            "method": "sonddto",
                            "date": "2014-02-05T21:11:19.461Z"
                        }
                    }
                }, {
                    "command": "null"
                }
            ]
        ]
    ]
    executethismultiple(todolist, callback);
}
widtests.newt5.category = "execute";
widtests.newt5.subcategory = "daily";
widtests.newt5.js = exports.newt5;
widtests.newt5.description = "this does a test";


// test1212 calls fnb
// fn b accepts one object and produces one array result

//exports.test121212 = test121212 = function test121212(params, callback) {
exports.test121212 = widtests.test121212 = test121212 = function test121212(params, callback) {

    eventappinstall();
    var todolist = [
        [{
                "fn": "test_and_verify"
            },
            [
                "func_b",
                "func_b", {
                    "c": "0",
                    "d": "1",
                    "e": "2"
                },
                [{
                    "c": "0",
                    "d": "1",
                    "g": "4"
                }], {}, {
                    "command": "null"
                }
            ]
        ]
    ];
    executethismultiple(todolist, callback);
}
widtests.test121212.category = "execute";
widtests.test121212.subcategory = "daily";
widtests.test121212.js = exports.test121212;
widtests.test121212.description = "this does a test";



// test141414

//function test141414 (params, callback) {
exports.test141414 = widtests.test141414 = test141414 = function test141414(params, callback) {

    // Calling func_b2 with single
    eventappinstall();
    var todolist = [
        [{
                "fn": "test_and_verify"
            },
            [
                "func_b2",
                "func_b2", [
                    "test", {
                        "a": "b",
                        "x": "y"
                    }, {
                        "a": "b",
                        "e": "z"
                    }, {
                        "c": "d",
                        "more": "m"
                    }
                ], {
                    "test": "hello",
                    "a": "b",
                    "c": "d",
                    "more": "m"
                }, {}, {
                    "command": "null"
                }
            ]
        ]
    ];
    executethismultiple(todolist, callback);
}
widtests.test141414.category = "execute";
widtests.test141414.subcategory = "daily";
widtests.test141414.js = exports.test141414;
widtests.test141414.description = "this does a test";


// func_b2 and func_b22 accepts 4 objects and produces one object result

// test151515
// func_b3 and func_b33 accepts 4 arrays and produces one object result

//function test151515 (params, callback) {
exports.test151515 = widtests.test151515 = test151515 = function test151515(params, callback) {

    eventappinstall();
    var todolist = [
        [{
                "fn": "test_and_verify"
            },
            [
                "func_b3",
                "func_b3", [{
                        "c": "0",
                        "d": "1",
                        "e": "2"
                    },
                    "two", ["a", {
                        "b": "c"
                    }],
                    "four"
                ],

                {
                    "a": {
                        "c": "0",
                        "d": "1",
                        "e": "2"
                    },
                    "b": "two",
                    "c": ["a", {
                        "b": "c"
                    }],
                    "d": "four"
                }, {}, {
                    "command": "null"
                }
            ]
        ]
    ];
    executethismultiple(todolist, callback);
}
widtests.test151515.category = "execute";
widtests.test151515.subcategory = "daily";
widtests.test151515.js = exports.test151515;
widtests.test151515.description = "this does a test";


//function test161616 (params, callback) {
exports.test161616 = widtests.test161616 = test161616 = function test161616(params, callback) {

    eventappinstall();
    var todolist = [
        [{
                "fn": "test_and_verify"
            },
            [
                "offlineupdatewid",
                "offlineupdatewid", [{
                    "wid": "wid1",
                    "a": "b"
                }], {
                    "data": {
                        "a": "b"
                    },
                    "wid": "wid1",
                    "metadata": {
                        "date": "2014-02-06T19:29:52.958Z"
                    }
                }, {
                    "initialwid": {
                        "wid": "initialwid",
                        "initialwid": "for key hello from bootprocess"
                    },
                    "wid1": {
                        "data": {
                            "a": "b"
                        },
                        "wid": "wid1",
                        "metadata": {
                            "date": "2014-02-06T19:29:52.958Z"
                        }
                    }
                }, {
                    "command": "null"
                }
            ]
        ]
    ];
    executethismultiple(todolist, callback);
}
widtests.test161616.category = "execute";
widtests.test161616.subcategory = "daily";
widtests.test161616.js = exports.test161616;
widtests.test161616.description = "this does a test";


//exports.mut = mut = function mut(params, callback) {
// executethismultiple() not defined
exports.mut = widtests.mut = mut = function mut(params, callback) {

    eventappinstall();

    var commandobject = {};
    commandobject['executemethod'] = "execute";
    commandobject['executelimit'] = 15;
    commandobject['executeorder'] = 'series';
    commandobject['executefilter'] = 'addwid';
    // commandobject['executefilter'] = 'offlineupdatewid';

    var data = [];
    data.push(
        [{
                "fn": "func_b2"
            },
            [
                "test", {
                    "a": "b"
                }, {
                    "c": "d"
                }
            ]
        ]
    );


    executethismultiple(data, function(err, res) {
        callback(err, res)
    });
}
widtests.mut.category = "execute";
widtests.mut.subcategory = "daily";
widtests.mut.js = exports.mut;
widtests.mut.description = "this does a test";

//exports.testmultiplenested = testmultiplenested = function testmultiplenested(params, callback) {
// executethismultiple() not defined
exports.testmultiplenested = widtests.testmultiplenested = testmultiplenested = function testmultiplenested(params, callback) {

    eventappinstall();

    var inparams = [
        [{
            "fn": "addwidmaster",
            "wid": "a2-56",
            "a2": "b2"
        }, {
            "fn": "getwidmaster",
            "wid": "a2-56"
        }],
        [
            [{
                "fn": "addwidmaster",
                "wid": "a2-57",
                "a2": "b2"
            }, {
                "fn": "getwidmaster",
                "wid": "a2-57"
            }],
            [{
                "fn": "addwidmaster",
                "wid": "a2-58",
                "a2": "b2"
            }, {
                "fn": "getwidmaster",
                "wid": "a2-58"
            }],
            [
                [{
                        "fn": "addwid4params"
                    },
                    [
                        "a",
                        "b",
                        "c",
                        "d"
                    ]
                ]
            ]
        ]
    ];

    executethismultiple(inparams, callback);
}
widtests.testmultiplenested.category = "execute";
widtests.testmultiplenested.subcategory = "daily";
widtests.testmultiplenested.js = exports.testmultiplenested;
widtests.testmultiplenested.description = "this does a test";


//************************************************************
// executetest() not found
//************************************************************

// Template for a new test, yet to be determined
//exports.ct1000 = ct1000 = function ct1000(params, callback) {

// executetest() not found
exports.ct1000 = widtests.ct1000 = ct1000 = function ct1000(params, callback) {

    eventappinstall();
    executetest("executethis", {
        "executethis": "func_b",
        "c": "0",
        "d": "1",
        "e": "2"
    }, "ct1000_output", "");
    params = logverify("c_unit_tests", "ct1000_result", "ct1000_output", "", "", {
        "c": "0",
        "d": "1",
        "g": "4"
    });
    callback(err, params);
}
widtests.ct1000.category = "execute";
widtests.ct1000.subcategory = "daily";
widtests.ct1000.js = exports.ct1000;
widtests.ct1000.description = "this does a test";


//************************************************************
// logverifyvariable() not found
//************************************************************

//
// russ see me about naming of functions
// russ see me about putting things in brackets or not

//
// logverifyvariable not found
exports.test_logverifyvariable_1 = widtests.test_logverifyvariable_1 = test_logverifyvariable_1 = function test_logverifyvariable_1(param, callback) {
    // This is the simplest case - should work and return a simple pass

    var result_obj = {
        'a': 'b'
    };
    var assert_obj = {
        'a': 'b'
    }; // {'exception': 'changed'}};

    var test_name = 'test_logverifyvariable_1_result';
    var test_name_diff = test_name + '_diff';
    var expected_result = {
        test_name: 'PASS',
        test_name_diff: {
            'a': {
                'data': 'b',
                'type': 'unchanged'
            }
        }
    };

    proxyprinttodiv(test_name, result_obj, assert_obj);
    var actual_result = logverifyvariable(test_name, result_obj, assert_obj);

    // We should be able to pass back the result from "logverifyvariable" and get a PASS / FAIL result

    // tell the system we're finished
    callback(null, actual_result);

    debugger;
}
widtests.test_logverifyvariable_1.category = "execute";
widtests.test_logverifyvariable_1.subcategory = "daily";
widtests.test_logverifyvariable_1.js = exports.test_logverifyvariable_1;
widtests.test_logverifyvariable_1.description = "this does a test";

exports.test_logverifyvariable_2 = widtests.test_logverifyvariable_2 = test_logverifyvariable_2 = function test_logverifyvariable_2(param, callback) {
    var result_obj = {
        'a': 'b'
    };
    var assert_obj = {
        'a': 'z'
    };

    var test_name = 'test_logverifyvariable_2';
    var test_name_diff = test_name + '_diff';
    var expected_result = {
        test_name: 'FAIL',
        test_name_diff: {
            'a': {
                'data': 'b',
                'type': 'unchanged'
            }
        }
    };

    proxyprinttodiv(test_name, result_obj, assert_obj);
    var actual_result = logverifyvariable(test_name, result_obj, assert_obj);

    // tell the system we're finished
    callback(null, actual_result);


    // Check if the actual_result matches the expected result for a simple change
    debugger;
}
widtests.test_logverifyvariable_2.category = "execute";
widtests.test_logverifyvariable_2.subcategory = "daily";
widtests.test_logverifyvariable_2.js = exports.test_logverifyvariable_2;
widtests.test_logverifyvariable_2.description = "this does a test";


//************************************************************
// Pre, Mid, and Post tests
//************************************************************

// Pre, Mid, Post tests are a thing of the past??

// Used as a test for having a executethis in the parameters
//exports.uwid1 = uwid1 = function uwid1(params, callback) {
exports.uwid1 = widtests.uwid1 = uwid1 = function uwid1(params, callback) {

    eventappinstall();

    execute([{
            "executethis": "addwidmaster",
            "wid": "getexecutetest",
            "addthis.postexecute": "func_b",
            "e": "this_will_be_deleted",
            "d": "this_should_stay",
            "g": "this_should_be_set_to_4"
        }, {
            "executethis": "getwidmaster",
            "wid": "getexecutetest"
        }],
        function(err, res) {
            proxyprinttodiv("uwid1 res: ", res, 17);
            // The following will pass...it shows what the getwidmaster returns
            // res = logverify("uwid1", res[1][0], {"addthis.executethis": "func_b", "wid": "getexecutetest", "metadata.method": "testdto"});

            // This assertion is what is expected, but it fails
            res = logverify("uwid1", res[1][0][0], {
                "d": "this_should_stay",
                "g": "4",
                "wid": "getexecutetest",
                "metadata.method": "defaultdto"
            });
            callback(err, res);
        });
}
widtests.uwid1.category = "execute";
widtests.uwid1.subcategory = "daily";
widtests.uwid1.js = exports.func_async;
widtests.uwid1.description = "this does a test";


// Used as a test for having a postexecute deply nested deep in the params in the parameters
//exports.uwid2 = uwid2 = function uwid2(params, callback) {
exports.uwid2 = widtests.uwid2 = uwid2 = function uwid2(params, callback) {

    eventappinstall();

    execute([{
            "executethis": "addwidmaster",
            "wid": "getexecutetest",
            "addthis.postexecute": "func_b",
            "nested.addthis.postexecute": "func_b",
            "nested.nested_again.addthis.postexecute": "func_b"
        }, {
            "executethis": "getwidmaster",
            "wid": "getexecutetest"
        }],
        function(err, res) {
            proxyprinttodiv("uwid2 res: ", res, 17);
            res = logverify("uwid2", res[1][0][0], {
                "nested.postexecute": "func_b",
                "nested.nested_again.postexecute": "func_b",
                "wid": "getexecutetest",
                "metadata.method": "defaultdto",
                "g": "4"
            });
            callback(err, res);
        });
}
widtests.uwid2.category = "execute";
widtests.uwid2.subcategory = "daily";
widtests.uwid2.js = exports.uwid2;
widtests.uwid2.description = "this does a test";

// Call func_b, but also tell preexecute to call func_a and postexecute to call func_c.
//exports.ettestt2 = ettestt2 = function ettestt2(params, callback) {
exports.ettestt2 = widtests.ettestt2 = ettestt2 = function ettestt2(params, callback) {

    eventappinstall();
    execute([{
            "executethis": "func_b",
            "c": "0",
            "d": "1",
            "e": "2",
            "preexecute": "func_a",
            "postexecute": "func_c"
        }],
        function(err, res) {
            res = logverify("ettestt2_result", res[0], [{
                "f": "3",
                "g": "4",
                "h": "5"
            }]);
            callback(err, res);
        });
}
widtests.ettestt2.category = "execute";
widtests.ettestt2.subcategory = "daily";
widtests.ettestt2.js = exports.ettestt2;
widtests.ettestt2.description = "this does a test";


// Call func_b with only pre func_a...this intends to call func_a in preexecute and func_b 
// in midexecute and nothing in post execute.
//exports.ettestt3 = ettestt3 = function ettestt3(params, callback) {
exports.ettestt3 = widtests.ettestt3 = ettestt3 = function ettestt3(params, callback) {

    eventappinstall();
    execute([{
            "executethis": "func_b",
            "c": "0",
            "d": "1",
            "e": "2",
            "preexecute": "func_a"
        }],
        function(err, res) {
            res = logverify("ettestt3_result", res[0], [{
                "c": "0",
                "f": "3",
                "g": "4"
            }]);
            callback(err, res);
        });
}
widtests.ettestt3.category = "execute";
widtests.ettestt3.subcategory = "daily";
widtests.ettestt3.js = exports.ettestt3;
widtests.ettestt3.description = "this does a test";


// Call func_b with only post func_a -- same result as t3. This is to make sure that not
// calling pre is ok...this calls only mid and post.
//exports.ettestt3a = ettestt3a = function ettestt3a(params, callback) {
exports.ettestt3a = widtests.ettestt3a = ettestt3a = function ettestt3a(params, callback) {

    eventappinstall();
    execute([{
            "executethis": "func_b",
            "c": "0",
            "d": "1",
            "e": "2",
            "postexecute": "func_a"
        }],
        function(err, res) {
            res = logverify("ettestt3a_result", res[0], [{
                "c": "0",
                "g": "4",
                "f": "3"
            }]);
            callback(err, res);
        });
}
widtests.ettestt3a.category = "execute";
widtests.ettestt3a.subcategory = "daily";
widtests.ettestt3a.js = exports.ettestt3a;
widtests.ettestt3a.description = "this does a test";

// Call mid with func_b and post with func_c, assuring that multiple functions exectue
// well, no matter where in the pre/mid/post they are placed.
//exports.ettestt4 = ettestt4 = function ettestt4(params, callback) {
exports.ettestt4 = widtests.ettestt4 = ettestt4 = function ettestt4(params, callback) {

    eventappinstall();
    execute([{
            "executethis": "func_b",
            "c": "0",
            "d": "1",
            "e": "2",
            "postexecute": "func_c"
        }],
        function(err, res) {
            res = logverify("ettestt4_result", res[0], [{
                "d": "1",
                "g": "4",
                "h": "5"
            }]);
            callback(err, res);
        });
}
widtests.ettestt4.category = "execute";
widtests.ettestt4.subcategory = "daily";
widtests.ettestt4.js = exports.ettestt4;
widtests.ettestt4.description = "this does a test";

// Call mid with func_b and pre with func_c, assuring that multiple functions exectue
// well, no matter where in the pre/mid/post they are placed.
//exports.ettestt4a = ettestt4a = function ettestt4a(params, callback) {
exports.ettestt4a = widtests.ettestt4a = ettestt4a = function ettestt4a(params, callback) {

    eventappinstall();
    execute([{
            "executethis": "func_b",
            "c": "0",
            "d": "1",
            "e": "2",
            "preexecute": "func_c"
        }],
        function(err, res) {
            res = logverify("ettestt4a_result", res[0], [{
                "d": "1",
                "g": "4",
                "h": "5"
            }]);
            callback(err, res);
        });
}
widtests.ettestt4a.category = "execute";
widtests.ettestt4a.subcategory = "daily";
widtests.ettestt4a.js = exports.ettestt4a;
widtests.ettestt4a.description = "this does a test";

// Call func_b with func_a for pre and post to ensure that calling the same
// function more than once is not a problem for the system.
//exports.ettestt5 = ettestt5 = function ettestt5(params, callback) {
exports.ettestt5 = widtests.ettestt5 = ettestt5 = function ettestt5(params, callback) {

    eventappinstall();
	
    execute([{
            "executethis": "func_b",
            "c": "0",
            "d": "1",
            "e": "2",
            "preexecute": "func_a",
            "postexecute": "func_a"
        }],
        function(err, res) {
            res = logverify("ettestt5_result", res[0], [{
                "c": "0",
                "f": "3",
                "g": "4"
            }]);
            callback(err, res);
        });
		
	console.log('made it through ettestt5');
	callback(null,null);
}
widtests.ettestt5.category = "cat1";
widtests.ettestt5.subcategory = "daily";
widtests.ettestt5.js = exports.ettestt5;
widtests.ettestt5.description = "this does a test";


// Double check that calling func_b with func_c for pre and post to ensure that calling the same
// function more than once is not a problem for the system. Essentially showing that tt5 was not 
// a fluke, but a repeatable concept.
//exports.ettestt6 = ettestt6 = function ettestt6(params, callback) {
exports.ettestt6 = widtests.ettestt6 = ettestt6 = function ettestt6(params, callback) {

    eventappinstall();
    execute([{
            "executethis": "func_b",
            "c": "0",
            "d": "1",
            "e": "2",
            "preexecute": "func_c",
            "postexecute": "func_c"
        }],
        function(err, res) {
            res = logverify("ettestt6_result", res[0], [{
                "d": "1",
                "h": "5",
                "g": "4"
            }]);
            callback(err, res);
        });
}
widtests.ettestt6.category = "execute";
widtests.ettestt6.subcategory = "daily";
widtests.ettestt6.js = exports.ettestt6;
widtests.ettestt6.description = "this does a test";

// Call async_func_b with pre calling func_a and post calling func_c...each simply
// deletes a prameter and add a parameter.
//exports.ettestast2 = ettestast2 = function ettestast2(params, callback) {
exports.ettestast2 = widtests.ettestast2 = ettestast2 = function ettestast2(params, callback) {

    eventappinstall();
    execute([{
            "executethis": "async_func_b",
            "c": "0",
            "d": "1",
            "e": "2",
            "preexecute": "async_func_a",
            "postexecute": "async_func_c"
        }],
        function(err, res) {
            res = logverify("ettestast2_result", res[0], [{
                "f": "3",
                "g": "4",
                "h": "5"
            }]);
            callback(err, res);
        });
}
widtests.ettestast2.category = "execute";
widtests.ettestast2.subcategory = "daily";
widtests.ettestast2.js = exports.ettestast2;
widtests.ettestast2.description = "this does a test";


// Call async_func_b with only pre async_func_a...is it ok to not call post...yes it is.
//exports.ettestast3 = ettestast3 = function ettestast3(params, callback) {
exports.ettestast3 = widtests.ettestast3 = ettestast3 = function ettestast3(params, callback) {

    eventappinstall();
    execute([{
            "executethis": "async_func_b",
            "c": "0",
            "d": "1",
            "e": "2",
            "preexecute": "async_func_a"
        }],
        function(err, res) {
            res = logverify("ettestast3_result", res[0], [{
                "c": "0",
                "f": "3",
                "g": "4"
            }]);
            callback(err, res);
        });
}
widtests.ettestast3.category = "execute";
widtests.ettestast3.subcategory = "daily";
widtests.ettestast3.js = exports.ettestast3;
widtests.ettestast3.description = "this does a test";

// Call async_func_b with only post async_func_a -- same result as t3
//exports.ettestast3a = ettestast3a = function ettestast3a(params, callback) {
exports.ettestast3a = widtests.ettestast3a = ettestast3a = function ettestast3a(params, callback) {

    eventappinstall();
    execute([{
            "executethis": "async_func_b",
            "c": "0",
            "d": "1",
            "e": "2",
            "postexecute": "async_func_a"
        }],
        function(err, res) {
            res = logverify("ettestast3a_result", res[0], [{
                "c": "0",
                "g": "4",
                "f": "3"
            }]);
            callback(err, res);
        });
}
widtests.ettestast3a.category = "execute";
widtests.ettestast3a.subcategory = "daily";
widtests.ettestast3a.js = exports.ettestast3a;
widtests.ettestast3a.description = "this does a test";

// Call async_func_b with only post
//exports.ettestast4 = ettestast4 = function ettestast4(params, callback) {
exports.ettestast4 = widtests.ettestast4 = ettestast4 = function ettestast4(params, callback) {

    eventappinstall();
    execute([{
            "executethis": "async_func_b",
            "c": "0",
            "d": "1",
            "e": "2",
            "postexecute": "async_func_c"
        }],
        function(err, res) {
            res = logverify("ettestast4_result", res[0], [{
                "d": "1",
                "g": "4",
                "h": "5"
            }]);
            callback(err, res);
        });
}
widtests.ettestast4.category = "execute";
widtests.ettestast4.subcategory = "daily";
widtests.ettestast4.js = exports.ettestast4;
widtests.ettestast4.description = "this does a test";

// Call async_func_b with only pre async_func_c -- same result as t4
//exports.ettestast4a = ettestast4a = function ettestast4a(params, callback) {
exports.ettestast4a = widtests.ettestast4a = ettestast4a = function ettestast4a(params, callback) {

    eventappinstall();
    execute([{
            "executethis": "async_func_b",
            "c": "0",
            "d": "1",
            "e": "2",
            "preexecute": "async_func_c"
        }],
        function(err, res) {
            res = logverify("ettestast4a_result", res[0], [{
                "d": "1",
                "g": "4",
                "h": "5"
            }]);
            callback(err, res);
        });
}
widtests.ettestast4a.category = "execute";
widtests.ettestast4a.subcategory = "daily";
widtests.ettestast4a.js = exports.ettestast4a;
widtests.ettestast4a.description = "this does a test";

// Call async_func_b with async_func_a for pre and post
//exports.ettestast5 = ettestast5 = function ettestast5(params, callback) {
exports.ettestast5 = widtests.ettestast5 = ettestast5 = function ettestast5(params, callback) {

    eventappinstall();
    execute([{
            "executethis": "async_func_b",
            "c": "0",
            "d": "1",
            "e": "2",
            "preexecute": "async_func_a",
            "postexecute": "async_func_a"
        }],
        function(err, res) {
            res = logverify("ettestast5_result", res[0], [{
                "c": "0",
                "f": "3",
                "g": "4"
            }]);
            callback(err, res);
        });
}
widtests.ettestast5.category = "execute";
widtests.ettestast5.subcategory = "daily";
widtests.ettestast5.js = exports.ettestast5;
widtests.ettestast5.description = "this does a test";


// Call async_func_b with async_func_c for pre and post
//exports.ettestast6 = ettestast6 = function ettestast6(params, callback) {
exports.ettestast6 = widtests.ettestast6 = ettestast6 = function ettestast6(params, callback) {

    eventappinstall();
    execute([{
            "executethis": "async_func_b",
            "c": "0",
            "d": "1",
            "e": "2",
            "preexecute": "async_func_c",
            "postexecute": "async_func_c"
        }],
        function(err, res) {
            res = logverify("ettestast6_result", res[0], [{
                "d": "1",
                "h": "5",
                "g": "4"
            }]);
            callback(err, res);
        });
}
widtests.ettestast6.category = "execute";
widtests.ettestast6.subcategory = "daily";
widtests.ettestast6.js = exports.ettestast6;
widtests.ettestast6.description = "this does a test";

// Call redir_b. The config should remap redir_b to call func_b and pre to remap redir_a to func_a, and
// also remap redir_c to func_c.
//exports.ettestct2 = ettestct2 = function ettestct2(params, callback) {
exports.ettestct2 = widtests.ettestct2 = ettestct2 = function ettestct2(params, callback) {

    var parameters = {
        "executethis": "redir_b",
        "c": "0",
        "d": "1",
        "e": "2",
        "preexecute": "redir_a",
        "postexecute": "redir_c",
        "configuration": {
            "redir_a": [{
                "dothis": "func_a",
                "tryorder": 0,
                "executeorder": 0,
                "params": {}
            }],
            "redir_b": [{
                "dothis": "func_b",
                "tryorder": 0,
                "executeorder": 0,
                "params": {}
            }],
            "redir_c": [{
                "dothis": "func_c",
                "tryorder": 0,
                "executeorder": 0,
                "params": {}
            }]
        }
    }
    var assert = [];
    assert.push({
        "f": "3",
        "g": "4",
        "h": "5",
        "configuration": {
            "redir_a": [{
                "dothis": "func_a",
                "tryorder": 0,
                "executeorder": 0,
                "params": {}
            }],
            "redir_b": [{
                "dothis": "func_b",
                "tryorder": 0,
                "executeorder": 0,
                "params": {}
            }],
            "redir_c": [{
                "dothis": "func_c",
                "tryorder": 0,
                "executeorder": 0,
                "params": {}
            }]
        }
    });
    var res = master_test_and_verify("ettestct2", parameters, assert, {}, {
        "command": "null"
    }, function(err, res) {
        callback(err, res)
    });
}
widtests.ettestct2.category = "execute";
widtests.ettestct2.subcategory = "daily";
widtests.ettestct2.js = exports.ettestct2;
widtests.ettestct2.description = "this does a test";

// Call redir_b. Also call pre with redir_a remapped to func_a, and no post call at all.
//exports.ettestct3 = ettestct3 = function ettestct3(params, callback) {
exports.ettestct3 = widtests.ettestct3 = ettestct3 = function ettestct3(params, callback) {

    var parameters = {
        "executethis": "redir_b",
        "c": "0",
        "d": "1",
        "e": "2",
        "preexecute": "redir_a",
        "configuration": {
            "redir_a": [{
                "dothis": "func_a",
                "tryorder": 0,
                "executeorder": 0,
                "params": {}
            }],
            "redir_b": [{
                "dothis": "func_b",
                "tryorder": 0,
                "executeorder": 0,
                "params": {}
            }],
            "redir_c": [{
                "dothis": "func_c",
                "tryorder": 0,
                "executeorder": 0,
                "params": {}
            }]
        }
    }
    var assert = [];
    assert.push({
        "c": "0",
        "f": "3",
        "g": "4",
        "configuration": {
            "redir_a": [{
                "dothis": "func_a",
                "tryorder": 0,
                "executeorder": 0,
                "params": {}
            }],
            "redir_b": [{
                "dothis": "func_b",
                "tryorder": 0,
                "executeorder": 0,
                "params": {}
            }],
            "redir_c": [{
                "dothis": "func_c",
                "tryorder": 0,
                "executeorder": 0,
                "params": {}
            }]
        }
    })
    var res = master_test_and_verify("ettestct3", parameters, assert, {}, {
        "command": "null"
    }, function(err, res) {
        callback(err, res)
    });
}
widtests.ettestct3.category = "execute";
widtests.ettestct3.subcategory = "daily";
widtests.ettestct3.js = exports.ettestct3;
widtests.ettestct3.description = "this does a test";

// Call redir_b with only post redir_a -- same result as ct3, but putting the only remap
// call in post instead of pre.
//exports.ettestct3a = ettestct3a = function ettestct3a(params, callback) {
exports.ettestct3a = widtests.ettestct3a = ettestct3a = function ettestct3a(params, callback) {

    var parameters = {
        "executethis": "redir_b",
        "c": "0",
        "d": "1",
        "e": "2",
        "postexecute": "redir_a",
        "configuration": {
            "redir_a": [{
                "dothis": "func_a",
                "tryorder": 0,
                "executeorder": 0,
                "params": {}
            }],
            "redir_b": [{
                "dothis": "func_b",
                "tryorder": 0,
                "executeorder": 0,
                "params": {}
            }],
            "redir_c": [{
                "dothis": "func_c",
                "tryorder": 0,
                "executeorder": 0,
                "params": {}
            }]
        }
    }
    var assert = [];
    assert.push({
        "c": "0",
        "g": "4",
        "f": "3",
        "configuration": {
            "redir_a": [{
                "dothis": "func_a",
                "tryorder": 0,
                "executeorder": 0,
                "params": {}
            }],
            "redir_b": [{
                "dothis": "func_b",
                "tryorder": 0,
                "executeorder": 0,
                "params": {}
            }],
            "redir_c": [{
                "dothis": "func_c",
                "tryorder": 0,
                "executeorder": 0,
                "params": {}
            }]
        }
    });
    var res = master_test_and_verify("ettestct3a", parameters, assert, {}, {
        "command": "null"
    }, function(err, res) {
        callback(err, res)
    });
}
widtests.ettestct3a.category = "execute";
widtests.ettestct3a.subcategory = "daily";
widtests.ettestct3a.js = exports.ettestct3a;
widtests.ettestct3a.description = "this does a test";

// Call redir_b with only post calling func_c remapped to func_c. Simply ensures that the remapping can be any 
// function in either pre or post.
//exports.ettestct4 = ettestct4 = function ettestct4(params, callback) {
exports.ettestct4 = widtests.ettestct4 = ettestct4 = function ettestct4(params, callback) {

    var parameters = {
        "executethis": "redir_b",
        "c": "0",
        "d": "1",
        "e": "2",
        "postexecute": "redir_c",
        "configuration": {
            "redir_a": [{
                "dothis": "func_a",
                "tryorder": 0,
                "executeorder": 0,
                "params": {}
            }],
            "redir_b": [{
                "dothis": "func_b",
                "tryorder": 0,
                "executeorder": 0,
                "params": {}
            }],
            "redir_c": [{
                "dothis": "func_c",
                "tryorder": 0,
                "executeorder": 0,
                "params": {}
            }]
        }
    }
    var assert = [];
    assert.push({
        "d": "1",
        "g": "4",
        "h": "5",
        "configuration": {
            "redir_a": [{
                "dothis": "func_a",
                "tryorder": 0,
                "executeorder": 0,
                "params": {}
            }],
            "redir_b": [{
                "dothis": "func_b",
                "tryorder": 0,
                "executeorder": 0,
                "params": {}
            }],
            "redir_c": [{
                "dothis": "func_c",
                "tryorder": 0,
                "executeorder": 0,
                "params": {}
            }]
        }
    })
    var res = master_test_and_verify("ettestct4", parameters, assert, {}, {
        "command": "null"
    }, function(err, res) {
        callback(err, res)
    });
}
widtests.ettestct4.category = "execute";
widtests.ettestct4.subcategory = "daily";
widtests.ettestct4.js = exports.ettestct4;
widtests.ettestct4.description = "this does a test";

// Call redir_b with only pre redir_c -- same result as t4
//exports.ettestct4a = ettestct4a = function ettestct4a(params, callback) {
exports.ettestct4a = widtests.ettestct4a = ettestct4a = function ettestct4a(params, callback) {

    eventappinstall();
    var parameters = {
        "executethis": "redir_b",
        "c": "0",
        "d": "1",
        "e": "2",
        "preexecute": "redir_c",
        "configuration": {
            "redir_a": [{
                "dothis": "func_a",
                "tryorder": 0,
                "executeorder": 0,
                "params": {}
            }],
            "redir_b": [{
                "dothis": "func_b",
                "tryorder": 0,
                "executeorder": 0,
                "params": {}
            }],
            "redir_c": [{
                "dothis": "func_c",
                "tryorder": 0,
                "executeorder": 0,
                "params": {}
            }]
        }
    }
    var assert = [];
    assert.push({
        "d": "1",
        "g": "4",
        "h": "5",
        "configuration": {
            "redir_a": [{
                "dothis": "func_a",
                "tryorder": 0,
                "executeorder": 0,
                "params": {}
            }],
            "redir_b": [{
                "dothis": "func_b",
                "tryorder": 0,
                "executeorder": 0,
                "params": {}
            }],
            "redir_c": [{
                "dothis": "func_c",
                "tryorder": 0,
                "executeorder": 0,
                "params": {}
            }]
        }
    })
    var res = master_test_and_verify("ettestct4a", parameters, assert, {}, {
        "command": "null"
    }, function(err, res) {
        callback(err, res)
    });
}
widtests.ettestct4a.category = "execute";
widtests.ettestct4a.subcategory = "daily";
widtests.ettestct4a.js = exports.ettestct4a;
widtests.ettestct4a.description = "this does a test";

// Call redir_b with a remapping of redir_a to func_a for both pre and post.
//exports.ettestct5 = ettestct5 = function ettestct5(params, callback) {
exports.ettestct5 = widtests.ettestct5 = ettestct5 = function ettestct5(params, callback) {

    eventappinstall();
    var parameters = {
        "executethis": "redir_b",
        "c": "0",
        "d": "1",
        "e": "2",
        "preexecute": "redir_a",
        "postexecute": "redir_a",
        "configuration": {
            "redir_a": [{
                "dothis": "func_a",
                "tryorder": 0,
                "executeorder": 0,
                "params": {}
            }],
            "redir_b": [{
                "dothis": "func_b",
                "tryorder": 0,
                "executeorder": 0,
                "params": {}
            }],
            "redir_c": [{
                "dothis": "func_c",
                "tryorder": 0,
                "executeorder": 0,
                "params": {}
            }]
        }
    }
    var assert = [];
    assert.push({
        "c": "0",
        "f": "3",
        "g": "4",
        "configuration": {
            "redir_a": [{
                "dothis": "func_a",
                "tryorder": 0,
                "executeorder": 0,
                "params": {}
            }],
            "redir_b": [{
                "dothis": "func_b",
                "tryorder": 0,
                "executeorder": 0,
                "params": {}
            }],
            "redir_c": [{
                "dothis": "func_c",
                "tryorder": 0,
                "executeorder": 0,
                "params": {}
            }]
        }
    })
    var res = master_test_and_verify("ettestct5", parameters, assert, {}, {
        "command": "null"
    }, function(err, res) {
        callback(err, res)
    });
}
widtests.ettestct5.category = "execute";
widtests.ettestct5.subcategory = "daily";
widtests.ettestct5.js = exports.ettestct5;
widtests.ettestct5.description = "this does a test";

// Call redir_b with redir_c for pre and post, essentiall rerunning ct5 but ensuring that other functions
// can be used with the same effect.
//exports.ettestct6 = ettestct6 = function ettestct6(params, callback) {
exports.ettestct6 = widtests.ettestct6 = ettestct6 = function ettestct6(params, callback) {

    eventappinstall();
    var parameters = {
        "executethis": "redir_b",
        "c": "0",
        "d": "1",
        "e": "2",
        "preexecute": "redir_c",
        "postexecute": "redir_c",
        "configuration": {
            "redir_a": [{
                "dothis": "func_a",
                "tryorder": 0,
                "executeorder": 0,
                "params": {}
            }],
            "redir_b": [{
                "dothis": "func_b",
                "tryorder": 0,
                "executeorder": 0,
                "params": {}
            }],
            "redir_c": [{
                "dothis": "func_c",
                "tryorder": 0,
                "executeorder": 0,
                "params": {}
            }]
        }
    }
    var assert = [];
    assert.push({
        "g": "4",
        "d": "1",
        "h": "5",
        "configuration": {
            "redir_a": [{
                "dothis": "func_a",
                "tryorder": 0,
                "executeorder": 0,
                "params": {}
            }],
            "redir_b": [{
                "dothis": "func_b",
                "tryorder": 0,
                "executeorder": 0,
                "params": {}
            }],
            "redir_c": [{
                "dothis": "func_c",
                "tryorder": 0,
                "executeorder": 0,
                "params": {}
            }]
        }
    })
    var res = master_test_and_verify("ettestct6", parameters, assert, {}, {
        "command": "null"
    }, function(err, res) {
        callback(err, res)
    });
}
widtests.ettestct6.category = "execute";
widtests.ettestct6.subcategory = "daily";
widtests.ettestct6.js = exports.ettestct6;
widtests.ettestct6.description = "this does a test";

// This will try pre with func a, but remapped with a configuration that
// is passed into executethis...it still wants to hit func_b with mid
//exports.ettestct7 = ettestct7 = function ettestct7(params, callback) {
exports.ettestct7 = widtests.ettestct7 = ettestct7 = function ettestct7(params, callback) {

    eventappinstall();
    var parameters = {
        "c": "0",
        "d": "1",
        "e": "2",
        "preexecute": "a",
        "executethis": "func_b",
        "configuration": {
            "preexecute": [{
                "dothis": "dothis",
                "tryorder": 0,
                "executeorder": 0,
                "params": {}
            }],
            "a": [{
                "dothis": "alertFn1",
                "tryorder": 0,
                "executeorder": 0,
                "params": {}
            }]
        }
    }
    var assert = [];
    assert.push({
        "ct7": "did some alerting",
        "configuration": {},
        "d": "1",
        "c": "0",
        "g": "4"
    });
    var res = master_test_and_verify("ettestct7", parameters, assert, {}, {
        "command": "null"
    }, function(err, res) {
        callback(err, res)
    });
}
widtests.ettestct7.category = "execute";
widtests.ettestct7.subcategory = "daily";
widtests.ettestct7.js = exports.ettestct7;
widtests.ettestct7.description = "this does a test";

// This test asserts that the tryorder in the config is successful
// and causes executethis to call dothis, not server, or the others. As of jan 28, it
// still fails to reorder them and calls the server instead. It breaks the code and will not
// simply call func_b locally.
//exports.ettestct8 = ettestct8 = function ettestct8(params, callback) {
exports.ettestct8 = widtests.ettestct8 = ettestct8 = function ettestct8(params, callback) {

    eventappinstall();
    // config = setconfig5();
    var parameters = {
        "executethis": "func_b",
        "c": "0",
        "d": "1",
        "e": "2",
        "configuration": {
            "midexecute": [{
                "executeorder": 1,
                "tryorder": 10,
                "dothis": 'server',
                "params": {}
            }, {
                "executeorder": 1,
                "tryorder": 4,
                "dothis": 'executeparam',
                "params": {}
            }, {
                "executeorder": 1,
                "tryorder": 7,
                "dothis": 'executegetwid',
                "params": {}
            }, {
                "executeorder": 1,
                "tryorder": 1,
                "dothis": 'dothis',
                "params": {}
            }]
        }
    }
    var assert = [];
    assert.push({
        "d": "1",
        "c": "0",
        "g": "4"
    });

    var res = master_test_and_verify("ettestct8", parameters, assert, {}, {
        "command": "null"
    }, function(err, res) {
        callback(err, res)
    });
}
widtests.ettestct8.category = "execute";
widtests.ettestct8.subcategory = "daily";
widtests.ettestct8.js = exports.ettestct8;
widtests.ettestct8.description = "this does a test";

// This test is to call func_b and in pre, call does_not_exist that is remapped to func_a...and then to func_b. So
// far it does not work, and never has.
//exports.ettestct10 = ettestct10 = function ettestct10(params, callback) {
exports.ettestct10 = widtests.ettestct10 = ettestct10 = function ettestct10(params, callback) {

    eventappinstall();
    var parameters = {
        "executethis": "func_b",
        "preexecute": "does_not_exist",
        "does_not_exist": "func_a",
        "c": "0",
        "d": "1",
        "e": "2"
    }
    // since we are overiding how functions are maped here, "does_not_exist_* are not deleted from the params
    var assert = [];
    assert.push({
        "does_not_exist": "func_a",
        "f": "3",
        "c": "0",
        "g": "4"
    });
    var res = master_test_and_verify("ettestct10", parameters, assert, {}, {
        "command": "null"
    }, function(err, res) {
        callback(err, res)
    });
}
widtests.ettestct10.category = "execute";
widtests.ettestct10.subcategory = "daily";
widtests.ettestct10.js = exports.ettestct10;
widtests.ettestct10.description = "this does a test";


// This test is to call func_b, remap does_not_exist_1 to func_a,
// remap does_not_exist_2 to func_c, and execute params to func_a, and then to func_b, and then func_c.
// None of these ever work...
//exports.ettestct11 = ettestct11 = function ettestct11(params, callback) {
exports.ettestct11 = widtests.ettestct11 = ettestct11 = function ettestct11(params, callback) {

    eventappinstall();
    var parameters = {
        "executethis": "func_b",
        "preexecute": "does_not_exist_1",
        "does_not_exist_1": "func_a",
        "postexecute": "does_not_exist_2",
        "does_not_exist_2": "func_c",
        "c": "0",
        "d": "1",
        "e": "2"
    }
    // since we are overiding how functions are maped here, "does_not_exist_* are not deleted from the params
    var assert = [];
    assert.push({
        "does_not_exist_1": "func_a",
        "does_not_exist_2": "func_c",
        "f": "3",
        "h": "5",
        "g": "4"
    });
    var res = master_test_and_verify("ettestct11", parameters, assert, {}, {
        "command": "null"
    }, function(err, res) {
        callback(err, res)
    });
}
widtests.ettestct11.category = "execute";
widtests.ettestct11.subcategory = "daily";
widtests.ettestct11.js = exports.ettestct11;
widtests.ettestct11.description = "this does a test";


// This test is to send in a config as parameter of a config. This allows for the server to recieve a config
// from a config that is passed in the parameters.
//exports.ettestct12 = ettestct12 = function ettestct12(params, callback) {
exports.ettestct12 = widtests.ettestct12 = ettestct12 = function ettestct12(params, callback) {

    eventappinstall();
    var parameters = {
        "c": "0",
        "d": "1",
        "e": "2",
        "preexecute": "a",
        "configuration": {
            "preexecute": [{
                "dothis": "dothis",
                "tryorder": "1",
                "executeorder": "1"
            }],
            "a": [{
                "dothis": "alertFn1",
                "tryorder": "1",
                "executeorder": "1"
            }],
            "params": [{
                "a": "b",
                "c": "d",
                "e": "f"
            }]
        }
    }
    var assert = [];
    assert.push({
        "c": "0",
        "d": "1",
        "ettestct12": "did some alerting",
        "g": "4"
    });
    var res = master_test_and_verify("ettestct12", parameters, assert, {}, {
        "command": "null"
    }, function(err, res) {
        callback(err, res)
    });
}
widtests.ettestct12.category = "execute";
widtests.ettestct12.subcategory = "daily";
widtests.ettestct12.js = exports.ettestct12;
widtests.ettestct12.description = "this does a test";


// This test is to test a config where a and b do not exist, but func_c does and c will execute. You
// should not see any data for ct13_output_a, or b. The params of mid should insert the cer2:booberry in
// the results
//exports.ettestct13 = ettestct13 = function ettestct13(params, callback) {
exports.ettestct13 = widtests.ettestct13 = ettestct13 = function ettestct13(params, callback) {

    eventappinstall();

    var parameters = {
        "executethis": "a",
        "executethis": "b",
        "executethis": "fire_c",
        "configuration": {
            "preexecute": [{
                "executeorder": 1,
                "tryorder": 1,
                "dothis": 'dothis',
                "params": {
                    'cer1': 'alphabits'
                }
            }],
            "midexecute": [{
                "executeorder": 1,
                "tryorder": 1,
                "dothis": 'dothis',
                "params": {
                    'cer2': 'booberry'
                }
            }],
            "postexecute": [{
                "executeorder": 1,
                "tryorder": 1,
                "dothis": 'dothis',
                "params": {
                    'cer3': 'chex'
                }
            }]
        }

    }
    var assert = [];
    assert.push({
        "fire_c": "fire_c is now fired",
        "cer2": "booberry"
    });
    var res = master_test_and_verify("ettestct13", parameters, assert, {}, {
        "command": "null"
    }, function(err, res) {
        callback(err, res)
    });
}
widtests.ettestct13.category = "execute";
widtests.ettestct13.subcategory = "daily";
widtests.ettestct13.js = exports.ettestct13;
widtests.ettestct13.description = "this does a test";


// This is original ct14 test
// // This test is to test a config where a config with params is sent to pre, mid, and post.
// // The results should have the a,b,c cereals, along with the regular params.
// exports.ettestct14 = ettestct14 = function ettestct14(params, callback) {
//  eventappinstall();
//  config = setconfig6();
//  execute([{
//      "executethis": "func_b",
//      "preexecute": "func_a",
//      "postexecute": "func_c",
//      "c": "0",
//      "d": "1",
//      "e": "2"
//  }],
//  function (err, res) {
//      res = logverify("ettestct14_result", res[0][0], {
//      "g": "4",
//      "cer2": "booberry",
//      "cer1": "alphabits",
//      "f": "3",
//      "cer3": "chex",
//      "h": "5"
//  });
//  callback(err, res);
//  });
// }

// Here is the modified ct14 test
// This test is to test a config where a config with params is sent to pre, mid, and post.
// The results should have the a,b,c cereals, along with the regular params.
//exports.ettestct14 = ettestct14 = function ettestct14(params, callback) {
exports.ettestct14 = widtests.ettestct14 = ettestct14 = function ettestct14(params, callback) {

    eventappinstall();
    var parameters = {
        "executethis": "func_b",
        "preexecute": "func_a",
        "postexecute": "func_c",
        "c": "0",
        "d": "1",
        "e": "2",
        "configuration": {
            "preexecute": [{
                "executeorder": 1,
                "tryorder": 1,
                "dothis": 'dothis',
                "params": {
                    'cer1': 'alphabits'
                }
            }],
            "midexecute": [{
                "executeorder": 1,
                "tryorder": 1,
                "dothis": 'dothis',
                "params": {
                    'cer2': 'booberry'
                }
            }],
            "postexecute": [{
                "executeorder": 1,
                "tryorder": 1,
                "dothis": 'dothis',
                "params": {
                    'cer3': 'chex'
                }
            }]
        }
    };

    var assert = [];
    assert.push({
        "g": "4",
        "cer2": "booberry",
        "cer1": "alphabits",
        "f": "3",
        "cer3": "chex",
        "h": "5",
        "configuration": {}
    });
    var res = master_test_and_verify("ettestct14", parameters, assert, {}, {
        "command": "null"
    }, function(err, res) {
        callback(err, res)
    });
}
widtests.ettestct14.category = "execute";
widtests.ettestct14.subcategory = "daily";
widtests.ettestct14.js = exports.ettestct14;
widtests.ettestct14.description = "this does a test";


// This will send the alphabits param in the preexecute config, but will be overriding it in the args..
// Which one will win out? It does...the config params are lost and the 'arg' params from the config win out.
//exports.ettestct15 = ettestct15 = function ettestct15(params, callback) {
exports.ettestct15 = widtests.ettestct15 = ettestct15 = function ettestct15(params, callback) {

    eventappinstall();
    // config = setconfig6();
    var parameters = {
        "executethis": "func_b",
        "preexecute": "func_a",
        "cer1": "booberry",
        "c": "0",
        "d": "1",
        "e": "2",
        "configuration": {
            "preexecute": [{
                "executeorder": 1,
                "tryorder": 1,
                "dothis": 'dothis',
                "params": {
                    'cer1': 'alphabits'
                }
            }],
            "midexecute": [{
                "executeorder": 1,
                "tryorder": 1,
                "dothis": 'dothis',
                "params": {
                    'cer2': 'booberry'
                }
            }],
            "postexecute": [{
                "executeorder": 1,
                "tryorder": 1,
                "dothis": 'dothis',
                "params": {
                    'cer3': 'chex'
                }
            }]
        }
    }
    assert = [];
    assert.push({
        "g": "4",
        "cer1": "booberry",
        "f": "3",
        "c": "0",
        "cer2": "booberry",
        "configuration": {
            "preexecute": [{
                "executeorder": 1,
                "tryorder": 1,
                "dothis": 'dothis',
                "params": {
                    'cer1': 'alphabits'
                }
            }],
            "midexecute": [{
                "executeorder": 1,
                "tryorder": 1,
                "dothis": 'dothis',
                "params": {
                    'cer2': 'booberry'
                }
            }],
            "postexecute": [{
                "executeorder": 1,
                "tryorder": 1,
                "dothis": 'dothis',
                "params": {
                    'cer3': 'chex'
                }
            }]
        }

    });
    var res = master_test_and_verify("ettestct15", parameters, assert, {}, {
        "command": "null"
    }, function(err, res) {
        callback(err, res)
    });
}
widtests.ettestct15.category = "execute";
widtests.ettestct15.subcategory = "daily";
widtests.ettestct15.js = exports.ettestct15;
widtests.ettestct15.description = "this does a test";

// Here the object is to get a set of config params from the config itself by using setconfig2 and checking for the 
// config params in the assertion widtests.
//exports.ettestct16 = ettestct16 = function ettestct16(params, callback) {
exports.ettestct16 = widtests.ettestct16 = ettestct16 = function ettestct16(params, callback) {

    eventappinstall();
    var parameters = {
        "executethis": "func_b",
        "preexecute": "mock_server",
        "c": "0",
        "d": "1",
        "e": "2",
        "configuration": {
            "redir_a": [{
                "dothis": "func_a",
                "tryorder": 1,
                "executeorder": 1,
                "params": {}
            }],
            "redir_b": [{
                "dothis": "func_b",
                "tryorder": 1,
                "executeorder": 1,
                "params": {}
            }],
            "redir_c": [{
                "dothis": "func_c",
                "tryorder": 1,
                "executeorder": 1,
                "params": {}
            }],
            "mock_server": [{
                "dothis": "cic_output",
                "tryorder": 1,
                "executeorder": 1,
                "params": {
                    "configuration": {
                        "login1": [{
                            "executeorder": 1,
                            "tryorder": 1,
                            "dothis": "login",
                            "params": {}
                        }]
                    }
                }
            }]
        }
    }

    var assert = [];
    assert.push({
        "c": "0",
        "d": "1",
        "g": "4",
        "configuration": {
            "login1": [{
                "executeorder": 1,
                "tryorder": 1,
                "dothis": "login",
                "params": {}
            }],
            "redir_a": [{
                "dothis": "func_a",
                "tryorder": 1,
                "executeorder": 1,
                "params": {}
            }],
            "redir_b": [{
                "dothis": "func_b",
                "tryorder": 1,
                "executeorder": 1,
                "params": {}
            }],
            "redir_c": [{
                "dothis": "func_c",
                "tryorder": 1,
                "executeorder": 1,
                "params": {}
            }]
        }
    });
    var res = master_test_and_verify("ettestct16", parameters, assert, {}, {
        "command": "null"
    }, function(err, res) {
        callback(err, res)
    });
}
widtests.ettestct16.category = "execute";
widtests.ettestct16.subcategory = "daily";
widtests.ettestct16.js = exports.ettestct16;
widtests.ettestct16.description = "this does a test";

// This is to use the params in preexecute to ensure that the preexecute params are getting used by dothis
//exports.ettestct17 = ettestct17 = function ettestct17(params, callback) {
exports.ettestct17 = widtests.ettestct17 = ettestct17 = function ettestct17(params, callback) {

    eventappinstall();
    var parameters = {
        "executethis": "func_b",
        "c": "0",
        "d": "1",
        "e": "2",
        "configuration": {
            "midexecute": [{
                "dothis": "dothis",
                "tryorder": "1",
                "executeorder": "1",
                "params": {
                    "exdef": "param after dothis and executeparam was grabbed"
                }
            }]
        }
    }
    var assert = [];
    assert.push({
        "exdef": "param after dothis and executeparam was grabbed",
        "d": "1",
        "c": "0",
        "g": "4",
        "configuration": {
            "midexecute": [{
                "dothis": "dothis",
                "tryorder": "1",
                "executeorder": "1",
                "params": {
                    "exdef": "param after dothis and executeparam was grabbed"
                }
            }]
        }
    });
    var res = master_test_and_verify("ettestct17", parameters, assert, {}, {
        "command": "null"
    }, function(err, res) {
        callback(err, res)
    });
}
widtests.ettestct17.category = "execute";
widtests.ettestct17.subcategory = "daily";
widtests.ettestct17.js = exports.ettestct17;
widtests.ettestct17.description = "this does a test";


// This is to use the params in preexecute to ensure that the preexecute params are getting used by dothis
//exports.ettestct18 = ettestct18 = function ettestct18(params, callback) {
exports.ettestct18 = widtests.ettestct18 = ettestct18 = function ettestct18(params, callback) {

    eventappinstall();
    // config = setconfig7();
    var parameters = {
        "executethis": "func_b",
        "preexecute": "func_a",
        "c": "0",
        "d": "1",
        "e": "2",
        "configuration": {
            "midexecute": [{
                "dothis": "dothis",
                "tryorder": "1",
                "executeorder": "1",
                "params": {
                    "exdef": "param after dothis and executeparam was grabbed"
                }
            }]
        }
    }
    var assert = [];
    assert.push({
        "exdef": "param after dothis and executeparam was grabbed",
        "f": "3",
        "c": "0",
        "g": "4",
        "configuration": {
            "midexecute": [{
                "dothis": "dothis",
                "tryorder": "1",
                "executeorder": "1",
                "params": {
                    "exdef": "param after dothis and executeparam was grabbed"
                }
            }]
        }
    });
    var res = master_test_and_verify("ettestct18", parameters, assert, {}, {
        "command": "null"
    }, function(err, res) {
        callback(err, res)
    });
}
widtests.ettestct18.category = "execute";
widtests.ettestct18.subcategory = "daily";
widtests.ettestct18.js = exports.ettestct18;
widtests.ettestct18.description = "this does a test";

// This test is to send params to executethis. There will be params in the call to executethis, config file, and the config in the params
// sent to executethis. There are params that will be used and changed throughout the call...they are alfa, bravo, and charlie. At this point, 
// the args sent to executethis will always win...not any of the 3 places in the config that they are set.
//exports.ettestct19 = ettestct19 = function ettestct19(params, callback) {
exports.ettestct19 = widtests.ettestct19 = ettestct19 = function ettestct19(params, callback) {

    eventappinstall();
    // config = setconfig8();
    var parameters = {
        "executethis": "func_b",
        "preexecute": "func_a",
        "postexecute": "func_c",
        "configuration": {
            "preexecute": [{
                "dothis": "dothis",
                "tryorder": 0,
                "executeorder": 0,
                "params": {
                    "alpha": "3"
                }
            }],
            "midexecute": [{
                "dothis": "dothis",
                "tryorder": 0,
                "executeorder": 0,
                "params": {
                    "bravo": "3"
                }
            }],
            "postexecute": [{
                "dothis": "dothis",
                "tryorder": 0,
                "executeorder": 0,
                "params": {
                    "charlie": "3"
                }
            }]
        },
        "alpha": "1",
        "bravo": "1",
        "charlie": "1"
    }
    var assert = [];
    assert.push({
        "configuration": {},
        "f": "3",
        "g": "4",
        "h": "5",
        "alpha": "1",
        "bravo": "1",
        "charlie": "1",
        "configuration": {
            "preexecute": [{
                "dothis": "dothis",
                "tryorder": 0,
                "executeorder": 0,
                "params": {
                    "alpha": "3"
                }
            }],
            "midexecute": [{
                "dothis": "dothis",
                "tryorder": 0,
                "executeorder": 0,
                "params": {
                    "bravo": "3"
                }
            }],
            "postexecute": [{
                "dothis": "dothis",
                "tryorder": 0,
                "executeorder": 0,
                "params": {
                    "charlie": "3"
                }
            }]
        }
    });
    var res = master_test_and_verify("ettestct19", parameters, assert, {}, {
        "command": "null"
    }, function(err, res) {
        callback(err, res)
    });
}
widtests.ettestct19.category = "execute";
widtests.ettestct19.subcategory = "daily";
widtests.ettestct19.js = exports.ettestct19;
widtests.ettestct19.description = "this does a test";

// Here the goal is to see if the config of the left and right conflict, which wins? Ad of now, the right side wins. The params for func_a,b,c are 
// all set to be 2, but they come out as 4, because that is what pre,mid, and post set them to.
//exports.ettestct20 = ettestct20 = function ettestct20(params, callback) {
exports.ettestct20 = widtests.ettestct20 = ettestct20 = function ettestct20(params, callback) {

    eventappinstall();
    // config = setconfig8();
    var parameters = {
        "executethis": "func_b",
        "preexecute": "func_a",
        "postexecute": "func_c",
        "configuration": {
            "preexecute": [{
                "dothis": "dothis",
                "tryorder": 0,
                "executeorder": 0,
                "params": {
                    "alpha": "3"
                }
            }],
            "midexecute": [{
                "dothis": "dothis",
                "tryorder": 0,
                "executeorder": 0,
                "params": {
                    "bravo": "3"
                }
            }],
            "postexecute": [{
                "dothis": "dothis",
                "tryorder": 0,
                "executeorder": 0,
                "params": {
                    "charlie": "3"
                }
            }]
        }
    }
    var assert = [];
    assert.push({
        "charlie": "4",
        "g": "4",
        "alpha": "4",
        "f": "3",
        "bravo": "4",
        "h": "5",
        "configuration": {
            "preexecute": [{
                "dothis": "dothis",
                "tryorder": 0,
                "executeorder": 0,
                "params": {
                    "alpha": "3"
                }
            }],
            "midexecute": [{
                "dothis": "dothis",
                "tryorder": 0,
                "executeorder": 0,
                "params": {
                    "bravo": "3"
                }
            }],
            "postexecute": [{
                "dothis": "dothis",
                "tryorder": 0,
                "executeorder": 0,
                "params": {
                    "charlie": "3"
                }
            }]
        }
    });
    var res = master_test_and_verify("ettestct20", parameters, assert, {}, {
        "command": "null"
    }, function(err, res) {
        callback(err, res)
    });
}
widtests.ettestct20.category = "execute";
widtests.ettestct20.subcategory = "daily";
widtests.ettestct20.js = exports.ettestct20;
widtests.ettestct20.description = "this does a test";

exports.ettestag12 = widtests.ettestag12 = ettestag12 = function ettestag12(parameters, callback) {

    eventappinstall();
    execute([{
            "executethis": "addwidmaster",
            "wid": "first_wid",
            "data_1": "Red"
        }, {
            "executethis": "addwidmaster",
            "wid": "second_wid",
            "data_2": "Green"
        }, {
            "executethis": "addwidmaster",
            "wid": "third_wid",
            "data_3": "Blue"
        }, {
            "preexecute": "first_wid"
        }, {
            "executethis": "second_wid"
        }, {
            "postexecute": "third_wid"
        }],
        function(err, res) {

            console.log('Function ag11 result\n' + JSON.stringify(res, '-', 4));

            // res = logverify("ettestag12_result", res[3], [{
            //     "data_1": "Red",
            //     "wid": "first_wid",
            //     "metadata": {}
            // }]);

            // res = logverify("ettestag12_result", res[4], [{
            //     "data_2": "Green",
            //     "wid": "second_wid",
            //     "metadata": {}
            // }]);

            res = logverify("ettestag12_result", res[4], [{
                "0": {
                    "data_2": "Green",
                    "wid": "second_wid",
                    "metadata": {
                        "method": "defaultdto"
                    }
                    // "midexecute": null
                }
            }])

            // res = logverify("ettestag12_result", res[5], [{
            //     "data_3": "Blue",
            //     "wid": "third_wid",
            //     "metadata": {}
            // }]);

            callback(err, res);
        });
}
widtests.ettestag12.category = "execute";
widtests.ettestag12.subcategory = "daily";
widtests.ettestag12.js = exports.ettestag12;
widtests.ettestag12.description = "this does a test";


//************************************************************
// offlineaddtomongo() not found
//************************************************************


exports.executegetwidtest = widtests.executegetwidtest = executegetwidtest = function executegetwidtest(params, callback) {

    offlineaddtomongo({
        "wid": "getexecutetest",
        "metadata": {
            "method": "testdto"
        },
        "data": {
            "executethis": "testcallback",
            "a": "Hello",
            "b": "goodbye"
        }
    }, {}, function(err, res) {

        executeList = [{
            "executethis": "getexecutetest"
        }]
        debuglevel = 11;
        execute(executeList, function(err, res) {
            proxyprinttodiv('Function executegetwidtest ', res, 17);
            //res = logverify("unit_tests", "getexecutetest", "", res, "", {});
            callback(err, res)

        });
    });
}
widtests.executegetwidtest.category = "execute";
widtests.executegetwidtest.subcategory = "daily";
widtests.executegetwidtest.js = exports.executegetwidtest;
widtests.executegetwidtest.description = "this does a test";