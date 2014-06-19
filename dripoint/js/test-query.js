
var widtests = widtests || {};

exports.etmttest333 = widtests.etmttest333 = etmttest333 = function etmttest333(params, callback) {
    debuglevel = 17;
    console.log("<< mttest3 >>");
    eventappinstall();

    // Add List
    var addlist = [{
        "executethis": "addwidmaster",
        "wid": "colordto",
        "metadata.method": "colordto",
        "hue": "string",
        "sat": "string"
    }, {
        "executethis": "addwidmaster",
        "wid": "color1",
        "metadata.method": "colordto",
        "hue": "red",
        "sat": "red-sat"
    }, {
        "executethis": "addwidmaster",
        "wid": "color2",
        "metadata.method": "colordto",
        "hue": "green",
        "sat": "green-sat"
    }, {
        "executethis": "addwidmaster",
        "wid": "color3",
        "metadata.method": "colordto",
        "hue": "blue",
        "sat": "blue-sat"
    }, {
        "executethis": "addwidmaster",
        "wid": "color4",
        "metadata.method": "colordto",
        "hue": "cyan",
        "sat": "cyan-sat"
    }, {
        "executethis": "addwidmaster",
        "wid": "color5",
        "metadata.method": "colordto",
        "hue": "magenta",
        "sat": "magenta-sat"
    }, {
        "executethis": "addwidmaster",
        "wid": "color6",
        "metadata.method": "colordto",
        "hue": "yellow",
        "sat": "yellow-sat"
    }, {
        "executethis": "addwidmaster",
        "wid": "color7",
        "metadata.method": "colordto",
        "hue": "black",
        "sat": "black-sat"
    }];

    //Query List
    var querylist = [{
        "executethis": "querywid",
        "command.results": "queryresult",
        "rawmongoquery": {
            "$or": [{
                "hue": "string"
            }]
        }
    }, {
        "executethis": "querywid",
        "command.results": "queryresult",
        "rawmongoquery": {
            "$or": [{
                "hue": "green"
            }, {
                "sat": "blue-sat"
            }]
        }
    }, {
        "executethis": "querywid",
        "command.results": "queryresult",
        "rawmongoquery": {
            "$and": [{
                "hue": "blue"
            }]
        }
    }, {
        "executethis": "querywid",
        "command.results": "queryresult",
        "rawmongoquery": {
            "$and": [{
                "hue": "yellow"
            }, {
                "sat": "red-sat"
            }]
        }
    }, {
        "executethis": "querywid",
        "command.results": "queryresult",
        "rawmongoquery": {
            "$and": [{
                "sat": "cyan-sat"
            }, {
                "hue": "cyan"
            }, {
                "sat": "cyan-sat"
            }]
        }
    }, {
        "executethis": "querywid",
        "command.results": "queryresult",
        "rawmongoquery": {
            "$or": [{
                "hue": "red"
            }, {
                "$or": [{
                    "sat": "magenta-sat"
                }, {
                    "hue": "magenta"
                }, {
                    "hue": "magenta"
                }, {
                    "hue": "red"
                }]
            }]
        }
    }, {
        "executethis": "querywid",
        "command.results": "queryresult",
        "rawmongoquery": {
            "$or": [{
                "hue": "magenta"
            }, {
                "$or": [{
                    "sat": "magenta-sat"
                }, {
                    "$or": [{
                        "hue": "magenta"
                    }, {
                        "$or": [{
                            "sat": "magenta-sat"
                        }]
                    }]
                }]
            }]
        }
    }, {
        "executethis": "querywid",
        "command.results": "queryresult",
        "rawmongoquery": {
            "$or": [{
                "hue": "magenta"
            }, {
                "$or": [{
                    "sat": "cyan-sat"
                }]
            }]
        }
    }, {
        "executethis": "querywid",
        "command.results": "queryresult",
        "rawmongoquery": {
            "$and": [{
                "hue": "magenta"
            }, {
                "$and": [{
                    "sat": "magenta-sat"
                }]
            }]
        }
    }, {
        "executethis": "querywid",
        "command.results": "queryresult",
        "rawmongoquery": {
            "$and": [{
                "hue": "magenta"
            }, {
                "$and": [{
                    "sat": "magenta-sat"
                }, {
                    "$and": [{
                        "sat": "red-sat"
                    }]
                }]
            }]
        }
    }, {
        "executethis": "querywid",
        "command.results": "queryresult",
        "rawmongoquery": {
            "$or": [{
                "hue": "red"
            }, {
                "$and": [{
                    "sat": "red-sat"
                }]
            }]
        }
    }, {
        "executethis": "querywid",
        "command.results": "queryresult",
        "rawmongoquery": {
            "$or": [{
                "hue": "magenta"
            }, {
                "$and": [{
                    "hue": "cyan"
                }, {
                    "$and": [{
                        "sat": "red"
                    }]
                }]
            }]
        }
    }, {
        "executethis": "querywid",
        "command.results": "queryresult",
        "rawmongoquery": {
            "$or": [{
                "hue": "blue"
            }, {
                "$and": [{
                    "hue": "yellow"
                }, {
                    "hue": "red"
                }, {
                    "$or": [{
                        "sat": "cyan-sat"
                    }]
                }]
            }]
        }
    }, {
        "executethis": "querywid",
        "command.results": "queryresult",
        "rawmongoquery": {
            "$or": [{
                "hue": "yellow"
            }, {
                "$and": [{
                    "hue": "black"
                }, {
                    "$or": [{
                        "sat": "black-sat"
                    }, {
                        "sat": "blue-sat"
                    }]
                }]
            }]
        }
    }, {
        "executethis": "querywid",
        "command.results": "queryresult",
        "rawmongoquery": {
            "$or": [{
                "hue": "green"
            }, {
                "$or": [{
                    "hue": "green568"
                }, {
                    "hue": "red"
                }, {
                    "$or": [{
                        "sat": "yellow-sat"
                    }, {
                        "sat": "blue-sat"
                    }, {
                        "$or": [{
                            "hue": "cyan"
                        }]
                    }]
                }]
            }]
        }
    }, {
        "executethis": "querywid",
        "command.results": "queryresult",
        "rawmongoquery": {
            "$and": [{
                "hue": "magenta"
            }, {
                "$or": [{
                    "hue": "green"
                }, {
                    "hue": "cyan"
                }, {
                    "$or": [{
                        "sat": "yellow-sat"
                    }, {
                        "sat": "red-sat"
                    }, {
                        "$or": [{
                            "hue": "blue"
                        }]
                    }]
                }]
            }]
        }
    }, {
        "executethis": "querywid",
        "command.results": "queryresult",
        "rawmongoquery": {
            "$and": [{
                "hue": "cyan"
            }, {
                "$or": [{
                    "hue": "green"
                }, {
                    "$or": [{
                        "sat": "cyan-sat"
                    }]
                }]
            }]
        }
    }, ];

    //Verify List
    var verifylist = [
        [{
            "wid": "colordto",
            "metadata.method": "colordto",
            "hue": "string",
            "sat": "string"
        }],
        [{
            "wid": "color2",
            "metadata.method": "colordto",
            "hue": "green",
            "sat": "green-sat"
        }, {
            "wid": "color3",
            "metadata.method": "colordto",
            "hue": "blue",
            "sat": "blue-sat"
        }],
        [{
            "wid": "color3",
            "metadata.method": "colordto",
            "hue": "blue",
            "sat": "blue-sat"
        }],
        [],
        [{
            "wid": "color4",
            "metadata.method": "colordto",
            "hue": "cyan",
            "sat": "cyan-sat"
        }],
        [{
            "wid": "color1",
            "metadata.method": "colordto",
            "hue": "red",
            "sat": "red-sat"
        }, {
            "wid": "color5",
            "metadata.method": "colordto",
            "hue": "magenta",
            "sat": "magenta-sat"
        }],
        [{
            "wid": "color5",
            "metadata.method": "colordto",
            "hue": "magenta",
            "sat": "magenta-sat"
        }],
        [{
            "wid": "color4",
            "metadata.method": "colordto",
            "hue": "cyan",
            "sat": "cyan-sat"
        }, {
            "wid": "color5",
            "metadata.method": "colordto",
            "hue": "magenta",
            "sat": "magenta-sat"
        }],
        [{
            "wid": "color5",
            "metadata.method": "colordto",
            "hue": "magenta",
            "sat": "magenta-sat"
        }],
        [],
        [{
            "wid": "color1",
            "metadata.method": "colordto",
            "hue": "red",
            "sat": "red-sat"
        }],
        [{
            "wid": "color5",
            "metadata.method": "colordto",
            "hue": "magenta",
            "sat": "magenta-sat"
        }],
        [{
            "wid": "color3",
            "metadata.method": "colordto",
            "hue": "blue",
            "sat": "blue-sat"
        }],
        [{
            "wid": "color6",
            "metadata.method": "colordto",
            "hue": "yellow",
            "sat": "yellow-sat"
        }, {
            "wid": "color7",
            "metadata.method": "colordto",
            "hue": "black",
            "sat": "black-sat"
        }],
        [{
            "wid": "color1",
            "metadata.method": "colordto",
            "hue": "red",
            "sat": "red-sat"
        }, {
            "wid": "color2",
            "metadata.method": "colordto",
            "hue": "green",
            "sat": "green-sat"
        }, {
            "wid": "color3",
            "metadata.method": "colordto",
            "hue": "blue",
            "sat": "blue-sat"
        }, {
            "wid": "color4",
            "metadata.method": "colordto",
            "hue": "cyan",
            "sat": "cyan-sat"
        }, {
            "wid": "color6",
            "metadata.method": "colordto",
            "hue": "yellow",
            "sat": "yellow-sat"
        }],
        [{
            "wid": "color4",
            "metadata.method": "colordto",
            "hue": "cyan",
            "sat": "cyan-sat"
        }]
    ];
    execute([addlist, querylist], function(err, res1) {
        var res = res1["queryresult"]
        proxyprinttodiv("res --", res, 17);
        var actual_result = res[0];
        proxyprinttodiv("actual_result --", actual_result, 17);

        var expected_result = [];
        proxyprinttodiv("expected_result --", expected_result, 17);

        res = logverify("logverify", actual_result, expected_result);

        params = {
            'test': 'PASS'
        };
        callback(err, params);
    });
}
widtests.etmttest333.category = "execute";
widtests.etmttest333.subcategory = "daily";
widtests.etmttest333.js = exports.etmttest333;
widtests.etmttest333.description = "this does a test";

exports.mt3 = widtests.mt3 = mt3 = function mt3(params, callback) {
    var x = [];
    var y;
    var mongorawquery;
    var destination = {
        "midexecute": {
            "dothis": "server",
            "tryorder": 0,
            "executeorder": 0,
            "params": {}
        }
    }


    eventappinstall();

    // saveglobal("debugcolor", 0);
    // debugon = true;
    // saveglobal("debugname", "processquery");
    // debugsubcat = "";
    // saveglobal("debugcat", "");
    // debugfilter = "";
    // debugdestination = 1;
    // //debuglevel=15;

    proxyprinttodiv("staring data add", "data add", 17);
    x[0] = {
        "executethis": "updatewid",
        "metadata.method": "mongoquerytwodto",
        "wid": "mongoquerytwodto",
        "a": "string",
        "b": "string"
    };
    x[1] = {
        "executethis": "updatewid",
        "metadata.method": "mongoquerytwodto",
        "wid": "wid1",
        "a": "c",
        "b": "d"
    };
    x[2] = {
        "executethis": "updatewid",
        "metadata.method": "mongoquerytwodto",
        "wid": "wid2",
        "a": "e",
        "b": "f"
    };
    x[3] = {
        "executethis": "updatewid",
        "wid": "songdto",
        "metadata.method": "songdto",
        "title": "string"
    };
    x[4] = {
        "executethis": "updatewid",
        "wid": "notedto",
        "metadata.method": "notedto",
        "note": "string"
    };
    x[5] = {
        "executethis": "updatewid",
        "wid": "measuredto",
        "metadata.method": "measuredto",
        "length": "string"
    };
    x[6] = {
        "executethis": "updatewid",
        "wid": "rel_song_to_note",
        "primarywid": "songdto",
        "secondarywid": "notedto",
        "relationshiptype": "attributes"
    };
    x[7] = {
        "executethis": "updatewid",
        "wid": "rel_note_to_measure",
        "primarywid": "notedto",
        "secondarywid": "measuredto",
        "relationshiptype": "attributes"
    };
    x[8] = {
        "executethis": "updatewid",
        "wid": "songdtodata",
        "metadata.method": "songdto",
        "title": "stringdata"
    };
    x[9] = {
        "executethis": "updatewid",
        "wid": "notedtodata",
        "metadata.method": "notedto",
        "note": "stringdata"
    };
    x[10] = {
        "executethis": "updatewid",
        "wid": "rel_song_to_note_data",
        "primarywid": "songdtodata",
        "secondarywid": "notedtodata",
        "relationshiptype": "attributes"
    };

    mongorawquery = {
        '$or': [{
            'data.a': 'b'
        }]
    };
    if (destination) {
        mongorawquery["configuration"] = destination
    };
    mongorawquery = String(mongorawquery);
    x[11] = {
        "executethis": "querywid",
        "mongorawquery": mongorawquery
    }

    x[12] = {
        "executethis": "querywid",
        "command.results": "queryresult",
        "mongowid": "songdtodata",
        "mongorelationshiptype": "attributes",
        "mongorelationshipmethod": "songdto",
        "mongorelationshipdirection": "forward",
        "mongowidmethod": "notedto"
    }
    if (destination) {
        x[12]["configuration"] = destination;
    }
    // this shoud return all the related wids to sonddtodata where the dto of the results is notedto

    for (var eachx in x) {
        if (destination) {
            x[eachx]['configuration'] = destination
        }; // add destination parameter if needed
        y = executetest(x[eachx]); // enter the data
    }
    proxyprinttodiv("end of data add", "end data add", 17);

    // executeobject["mongorawquery"] = 
    //           "{$and: [" +
    //               "{data.primarywid: songdto}," +
    //               "{data.secondarywid: notedto}" + 
    //           "}]}";

    // executeobject["mongowid"] = "songdto";
    // executeobject["mongorelationshiptype"] = "attributes";
    // executeobject["mongorelationshipmethod"] = "songdto";
    // executeobject["mongorelationshipdirection"] = "forward";
    // executeobject["mongowidmethod"] = "notedto";
    // executeobject["convertmethod"] = "";
    // executeobject["dtotype"] = "";
    // executeobject["executethis"] = 'querywid';

    params = {
        'test': 'PASS'
    };
    var err;
    callback(err, params);
}
widtests.mt3.category = "execute";
widtests.mt3.subcategory = "daily";
widtests.mt3.js = exports.mt3;
widtests.mt3.description = "this does a test";


exports.etmttest3 = widtests.etmttest3 = etmttest3 = function etmttest3(params, callback) {
    debuglevel = 17;
    console.log("<< mttest3 >>");

    eventappinstall();

    //To add wid data
    var executeList = [{
        "executethis": "addwidmaster",
        "wid": "colordto",
        "metadata.method": "colordto",
        "hue": "string"
    }, {
        "executethis": "addwidmaster",
        "wid": "color1",
        "metadata.method": "colordto",
        "hue": "red"
    }, {
        "executethis": "addwidmaster",
        "wid": "color2",
        "metadata.method": "colordto",
        "hue": "green"
    }, {
        "executethis": "getwidmaster",
        "wid": "color1"
    }, {
        "executethis": "getwidmaster",
        "wid": "color2"
    }, {
        "executethis": "addwidmaster",
        "wid": "color3",
        "hue": "blue"
    }, {
        "executethis": "addwidmaster",
        "wid": "color4",
        "metadata.method": "colordto",
        "hue": "cyan"
    }, {
        "executethis": "addwidmaster",
        "wid": "color5",
        "metadata.method": "colordto",
        "hue": "magenta"
    }, {
        "executethis": "addwidmaster",
        "wid": "color6",
        "metadata.method": "colordto",
        "hue": "yellow"
    }, {
        "executethis": "addwidmaster",
        "wid": "color7",
        "metadata.method": "colordto",
        "hue": "black"
    }, {
        "executethis": "getwidmaster",
        "wid": "color6"
    }, {
        "executethis": "getwidmaster",
        "wid": "color7"
    }];
    proxyprinttodiv("execute list", executeList, 17);
    execute(executeList, function(err, res) {

    });

    //Query Data
    executeList = [];
    var executeList = [{
        "executethis": "querywid",
        "command.results": "queryresult",
        "rawmongoquery": {
            "$or": [{
                "hue": "red"
            }]
        }
    }, {
        "executethis": "querywid",
        "command.results": "queryresult",
        "rawmongoquery": {
            "$or": [{
                "hue": "green"
            }]
        }
    }, {
        "executethis": "querywid",
        "command.results": "queryresult",
        "rawmongoquery": {
            "$and": [{
                "hue": "blue"
            }]
        }
    }, {
        "executethis": "querywid",
        "command.results": "queryresult",
        "rawmongoquery": {
            "$or": [{
                "hue": "cyan"
            }]
        }
    }, {
        "executethis": "querywid",
        "command.results": "queryresult",
        "rawmongoquery": {
            "$and": [{
                "hue": "magenta"
            }]
        }
    }, {
        "executethis": "querywid",
        "command.results": "queryresult",
        "rawmongoquery": {
            "$and": [{
                "hue": "yellow"
            }]
        }
    }, {
        "executethis": "querywid",
        "command.results": "queryresult",
        "rawmongoquery": {
            "$and": [{
                "hue": "black"
            }]
        }
    }];
    proxyprinttodiv("execute list for query", executeList, 17);
    execute(executeList, function(err, res1) {
        var res = res1["queryresult"];
        //Query Expected Result List
        expectedResultList = [
            [{
                "wid": "color1",
                "metadata.method": "colordto",
                "hue": "red"
            }],
            [{
                "wid": "color2",
                "metadata.method": "colordto",
                "hue": "green"
            }],
            [{
                "wid": "color3",
                "metadata.method": "colordto",
                "hue": "blue"
            }],
            [{
                "wid": "color4",
                "metadata.method": "colordto",
                "hue": "cyan"
            }],
            [{
                "wid": "color5",
                "metadata.method": "colordto",
                "hue": "magenta"
            }],
            [{
                "wid": "color4",
                "metadata.method": "colordto",
                "hue": "yellow"
            }],
            [{
                "wid": "color4",
                "metadata.method": "colordto",
                "hue": "black"
            }]
        ];


        proxyprinttodiv("res --", res, 17);
        var actual_result = [res];
        proxyprinttodiv("actual_result --", actual_result, 17);

        var expected_result = expectedResultList;
        proxyprinttodiv("expected_result --", expected_result, 17);

        res = logverify("logverify", actual_result, expected_result);

        params = {
            'test': 'PASS'
        };

        callback(err, params);
    });
}
widtests.etmttest3.category = "execute";
widtests.etmttest3.subcategory = "daily";
widtests.etmttest3.js = exports.etmttest3;
widtests.etmttest3.description = "this does a test";

// Wids :--
// {"wid": "colordto", "metadata.method": "colordto", "hue": "string", "sat": "string"}
// {"wid": "color1", "metadata.method": "colordto", "hue": "red", "sat": "red-sat"},
// {"wid": "color2", "metadata.method": "colordto", "hue": "green",  "sat": "green-sat"}
// {"wid": "color3", "metadata.method": "colordto", "hue": "blue", "sat": "blue-sat"}, 
// {"wid": "color4", "metadata.method": "colordto", "hue": "cyan", "sat": "cyan-sat"},
// {"wid": "color5", "metadata.method": "colordto", "hue": "magenta", "sat": "magenta-sat"},
// {"wid": "color6", "metadata.method": "colordto", "primarywid": "color8", "secondarywid": "color9"}, 
// {"wid": "color7", "metadata.method": "colordto", "hue": "black", "sat": "black-sat"}
// {"wid": "color8", "metadata.method": "colordto", "hue": "black", "sat": "red-sat"}
// {"wid": "color9", "metadata.method": "colordto", "hue": "cyan", "sat": "red-sat"}

// {"wid": "colordto2", "metadata.method": "colordto2", "light": "string", "chroma": "string"}
// {"wid": "color10", "metadata.method": "colordto", "hue": "pink", "sat": "pink-sat", "colordto2.0.light": "pink-light", "colordto2.0.chroma": "pink-chroma", "colordto2.1.light": "pink-light1", "colordto2.1.chroma": "pink-chroma2", "colordto2.0.colordto3.intensity": "pink-intensity"}
// {"wid": "colordto3", "metadata.method": "colordto3", "intensity": "string"}


// 4. mongowid ----------------------------------------------------------------------------------------------------------
// QueryWid(mongowid=color10, relationshipdirection=forward, relationshiptype=attributes, relationshipmethod=ALL, mongowidmethod=colordto2) :--
// [it will create 4 wids {color10, colordto2.0[color201], colordto2.1[color202] , colordto2.0.colordto3[color301]} ]
// {"wid": "color201", "metadata.method": "colordto2", "light": "pink-light", "chroma": "pink-chroma"}
// {"wid": "color202", "metadata.method": "colordto2", "light": "pink-light2", "chroma": "pink-chroma2"}


// QueryWid(mongowid=color10, relationshipdirection=forward, relationshiptype=attributes, relationshipmethod=last, mongowidmethod=colordto2) :--
// {"wid": "color202", "metadata.method": "colordto2", "light": "pink-light2", "chroma": "pink-chroma2"}



// 1. mongorawquery ----------------------------------------------------------------------------------------------------------
// QueryWid(mongorawquery="{$or:[{"hue":"black"}]}") :--
// {"wid": "color7", "metadata.method": "colordto", "hue": "black", "sat": "black-sat"}

// 2. mongosinglequery ----------------------------------------------------------------------------------------------------------
// QueryWid(mongosinglequery=color7, relationshipdirection=forward, relationshiptype=attributes, relationshipmethod=first) :-- 
// [it will create $or["hue": "black", "sat": "black-sat"]]
// {"wid": "color8", "metadata.method": "colordto", "hue": "black", "sat": "red-sat"}

// QueryWid(mongosinglequery=color8, relationshipdirection=reverse, relationshiptype=attributes, relationshipmethod=last) :-- 
// [it will create $or["hue": "black", "sat": "red-sat"]]
// {"wid": "color1", "metadata.method": "colordto", "hue": "red", "sat": "red-sat"}

// 3. mongomultiplequery ----------------------------------------------------------------------------------------------------------
// QueryWid(mongomultiplequery=color6) :-- 
// [ it will make query from child wids also ,,, == QueryWid($and[$or["hue": "black", "sat": "red-sat"], $or["hue": "cyan", "sat": "red-sat"]]) ]
// [ $and[$or[color1,color7,color8,color9], $or[color1,color4,color8,color9,]]  ]
// {"wid": "color1", "metadata.method": "colordto", "hue": "red", "sat": "red-sat"}
// {"wid": "color8", "metadata.method": "colordto", "hue": "black", "sat": "red-sat"}
// {"wid": "color9", "metadata.method": "colordto", "hue": "cyan", "sat": "red-sat"}

exports.etmttest4 = widtests.etmttest4 = etmttest4 = function etmttest4(params, callback) {

    debuglevel = 17;
    console.log("<< mttest4 >>");

    var codedebug = false;
    if (codedebug) {
        saveglobal("debugcolor", 0);
        debugon = true;
        saveglobal("debugname", "");
        debugsubcat = "";
        saveglobal("debugcat", "mongoquerycode");
        debugfilter = "";
        debugdestination = 1;
        debuglevel = 30;
    }
    //debuglevel=17;
    /* adding wids */
    eventappinstall();
    debugname = "updatewid";
    saveglobal("debugsubcat", "code");
    saveglobal("debugcat", "add");
    var addList = [{
        "executethis": "updatewid",
        "metadata.method": "colordto",
        "wid": "colordto",
        "hue": "string",
        "sat": "string"
    }, {
        "executethis": "updatewid",
        "metadata.method": "colordto",
        "wid": "color1",
        "hue": "red",
        "sat": "red-sat"
    }, {
        "executethis": "updatewid",
        "wid": "color2",
        "metadata.method": "colordto",
        "hue": "green",
        "sat": "green-sat"
    }, {
        "executethis": "updatewid",
        "wid": "color3",
        "metadata.method": "colordto",
        "hue": "blue",
        "sat": "blue-sat"
    }, {
        "executethis": "updatewid",
        "wid": "color4",
        "metadata.method": "colordto",
        "hue": "cyan",
        "sat": "cyan-sat"
    }, {
        "executethis": "updatewid",
        "wid": "color5",
        "metadata.method": "colordto",
        "hue": "magenta",
        "sat": "magenta-sat"
    }, {
        "executethis": "updatewid",
        "wid": "color60",
        "metadata.method": "colordto",
        "relationshiptype": "attributes",
        "primarywid": "color8",
        "secondarywid": "color1"
    }, {
        "executethis": "updatewid",
        "wid": "color61",
        "metadata.method": "colordto",
        "relationshiptype": "attributes",
        "primarywid": "color8",
        "secondarywid": "color2"
    }, {
        "executethis": "updatewid",
        "wid": "color62",
        "metadata.method": "colordto",
        "relationshiptype": "attributes",
        "primarywid": "color8",
        "secondarywid": "color3"
    }, {
        "executethis": "updatewid",
        "wid": "color63",
        "metadata.method": "colordto",
        "relationshiptype": "attributes",
        "primarywid": "color8",
        "secondarywid": "color4"
    }, {
        "executethis": "updatewid",
        "wid": "color7",
        "metadata.method": "colordto",
        "hue": "black",
        "sat": "black-sat"
    }, {
        "executethis": "updatewid",
        "wid": "color8",
        "metadata.method": "colordto",
        "hue": "black",
        "sat": "red-sat"
    }, {
        "executethis": "updatewid",
        "wid": "color9",
        "metadata.method": "colordto",
        "hue": "cyan",
        "sat": "red-sat"
    }, {
        "executethis": "updatewid",
        "wid": "colordto2",
        "metadata.method": "colordto2",
        "light": "string",
        "chroma": "string"
    }, {
        "executethis": "updatewid",
        "wid": "color10",
        "metadata.method": "colordto",
        "hue": "pink",
        "sat": "pink-sat",
        "colordto2.0.light": "pink-light",
        "colordto2.0.chroma": "pink-chroma",
        "colordto2.1.light": "pink-light1",
        "colordto2.1.chroma": "pink-chroma2",
        "colordto2.0.colordto3.intensity": "pink-intensity"
    }, {
        "executethis": "updatewid",
        "wid": "colordto3",
        "metadata.method": "colordto3",
        "intensity": "string"
    }];
    execute(addList, function(err, res) {
        console.log(' >>> final response after addList >>> ' + JSON.stringify(res));
    });

    var mongorawquerytests = true;
    var mongosinglequerytests = false;
    var mongomultiplequerytests = false;
    var relationshiptests = false;

    debugfn("update code generator END", "updatewid", "add", "code", getglobal("debugcolor"), getglobal("debugindent"), {}, 5);
    saveglobal("debugname", "");
    debugsubcat = "";
    saveglobal("debugcat", "");



    /* mongo raw queries */
    if (mongorawquerytests) {
        var queryList = [{
            "executethis": "querywid",
            "command.results": "queryresult",
            "mongorawquery": '{"$or": [{ "wid": "color1" }]}'




        }];
        execute(queryList, function(err, res1) {
            var res = res1["queryresult"];
            console.log(' >>> final response after queryList >>> ' + JSON.stringify(res));

            proxyprinttodiv("res --", res, 17);
            var actual_result = [
                []
            ];
            proxyprinttodiv("actual_result --", actual_result, 17);

            var expected_result = [
                []
            ];
            proxyprinttodiv("expected_result --", expected_result, 17);

            res = logverify("logverify", actual_result, expected_result);

            params = {
                'test': 'PASS'
            };
            callback({}, params);
        });
    }

    /* mongo single queries */
    if (mongosinglequerytests) {
        var queryList = [{
            "executethis": "querywid",
            "mongosinglequery": "color7",
            "command.results": "queryresult"
            //"relationshipdirection": "forward",
            //"relationshiptype": "attributes",
            //"relationshipmethod": "first"
        }];
        execute(queryList, function(err, res1) {
            var res = res1["queryresult"];
            console.log(' >>> final response after queryList >>> ' + JSON.stringify(res));
        });
    }

    if (relationshiptests) {
        var queryList = [{
            "executethis": "querywid",
            "mongowid": "color8",
            "mongorelationshipdirection": "forward",
            "mongorelationshiptype": "attributes",
            "mongorelationshipmethod": "first"
        }];
        execute(queryList, function(err, res) {
            console.log(' >>> final response after queryList >>> ' + JSON.stringify(res));
        });

    }
}
widtests.etmttest4.category = "execute";
widtests.etmttest4.subcategory = "daily";
widtests.etmttest4.js = exports.etmttest4;
widtests.etmttest4.description = "this does a test";

exports.codyquery1 = widtests.codyquery1 = codyquery1 = function codyquery1 (params, callback) {

	var etEnvironment = new drienvironment({
		"getwidmaster":{
			"convertmethod": "dto",
			"execute": "ConvertFromDOTdri"
		},
		"run": {
			"executeid": params.command.environment.run.executeid,
			"executelevel": params.command.environment.run.executelevel,
			"type": "series"
		}
	});


	var executelist = [{
						"executethis":"updatewid",
						"wid":"authordto",
						"metadata.method":"authordto",
						"name":"string",
						"metadata.bookdto.type":"onetomany"
						}, {
						"executethis":"updatewid",
						"wid":"bookdto",
						"metadata.method":"bookdto",
						"title":"string"
						}, {
						"executethis":"updatewid",
						"wid":"book0",
						"title":"book0"
						}, {
						"executethis":"updatewid",
						"wid":"book1",
						"title":"book1"
						}, {
						"executethis":"updatewid",
						"wid":"book2",
						"title":"book2"
						}, {
						"executethis":"updatewid",
						"wid":"charles_xavier",
						"metadata.method":"authordto",
						"name":"Charles Xavier",
						"bookdto.0.wid":"book0",
						"bookdto.1.wid":"book1",
						"bookdto.2.wid":"book2"
						}, {
						"executethis": "updatewid",
						"wid": "rel_author_book",
						"metadata.method": "relationshipdto",
						"relationshiptype": "attributes",
						"linktype": "onetomany",
						"primarywid": "authordto",
						"primarymethod": "authordto",
						"secondarywid": "bookdto",
						"secondarymethod": "bookdto"
						}, {
						"executethis":"getwid",
						"metadata.method":"authordto",
						"wid":"charles_xavier"
						}];
	/*			
	async.series([
		function (cb1) {
			execute(executelist, function (err, res) {
						cb1(null);
					});
			},
		function (cb1) {
			createrelationship("authordto","bookdto","onetomany",function (err, res) {
					cb1(null);
				});
			},
		function (cb1) {
			execute([{
					"executethis":"getwidmaster",
					"wid":"charles_xavier"
					}]
		],
		function (err, res) {
			proxyprinttodiv('result --', res, 99);
		});	
	*/

	execute(executelist,function (err, res) {
		proxyprinttodiv('res --', res, 99);
		callback(err, res);
	});
	
	var targetwid = "charles_xavier";
	var excludeset = {"book2":"book2"};
	
	var executeobject = {
		"executethis": "querywid",
		"mongosetfieldsexclude": excludeset,
		"mongowid": targetwid,
		"mongorelationshiptype": "attributes",
		"mongorelationshipmethod": "all",
		"mongorelationshipdirection": "forward",
		"mongowidmethod": "",
		"command": {
			"result": "queryresult"
		}
	};
	
	etEnvironment.execute(executeobject, function(err, res) {
		proxyprinttodiv('Function getwidmongo results res', res, 99);
		res = res["queryresult"];
		proxyprinttodiv('Function getwidmongo query res', res, 38);
	});



}