
var widtests = widtests || {};


function manytoonesetupdto(inherit, dtotype, callback) {
    if (Object.keys(inherit).length === 0) {
        inherit = {
            "authordtodefault": [],
            "spousedto": [],
            "housedto": [],
            "bookdto": [],
            "pubhousedto": [],
            "addressdto": [],
            "statedto": [],
            "ownerdto": [],
            "authordtooverride": [],
            "spousedtooverride": [],
            "housedtooverride": [],
            "bookdtooverride": [],
            "pubhousedtooverride": [],
            "addressdtooverride": [],
            "statedtooverride": [],
            "ownerdtooverride": []
        }
    }

    var executeList = [{ //authordto
        "executethis": "addwidmaster",
        "metadata.method": "authordto",
        "wid": "authordto",
        "name": "string",
        "age": "string",
        "metadata.spousedto.type": "jsononetoone",
        "metadata.housedto.type": "onetoone",
        "metadata.bookdto.type": "onetomany",
        "metadata.inherit.default": inherit.authordtodefault,
        "metadata.inherit.override": inherit.authordtooverride
    }, { //spousedto
        "executethis": "addwidmaster",
        "metadata.method": "spousedto",
        "wid": "spousedto",
        "datemarried": "date",
        "metadata.inherit.default": inherit.spousedtodefault,
        "metadata.inherit.override": inherit.spousedtooverride
    }, { //housedto
        "executethis": "addwidmaster",
        "metadata.method": "housedto",
        "wid": "housedto",
        "color": "string",
        "metadata.inherit.default": inherit.housedtodefault,
        "metadata.inherit.override": inherit.housedtooverride
    }, { //bookdto
        "executethis": "addwidmaster",
        "metadata.method": "bookdto",
        "wid": "bookdto",
        "title": "string",
        "pages": "string",
        "metadata.pubhousedto.type": "manytooone",
        "metadata.inherit.default": inherit.bookdtodefault,
        "metadata.inherit.override": inherit.bookdtooverride
    }, { //pubhousedto
        "executethis": "addwidmaster",
        "metadata.method": "pubhousedto",
        "wid": "pubhousedto",
        "coname": "string",
        "establishdate": "date",
        "metadata.addressdto.type": "onetomany",
        "metadata.statedto.type": "manytooone",
        "metadata.ownerdto.type": "onetoone",
        "metadata.inherit.default": inherit.pubhousedtodefault,
        "metadata.inherit.override": inherit.pubhousedtooverride
    }, { //addressdto
        "executethis": "addwidmaster",
        "metadata.method": "addressdto",
        "wid": "addressdto",
        "city": "string",
        "add1": "string",
        "add2": "string",
        "metadata.inherit.default": inherit.addressdtodefault,
        "metadata.inherit.override": inherit.addressdtooverride
    }, { //statedto
        "executethis": "addwidmaster",
        "metadata.method": "statedto",
        "wid": "statedto",
        "statename": "string",
        "zipcode": "string",
        "metadata.inherit.default": inherit.statedtodefault,
        "metadata.inherit.override": inherit.statedtooverride
    }, { //ownerdto
        "executethis": "addwidmaster",
        "metadata.method": "ownerdto",
        "wid": "ownerdto",
        "name": "string",
        "metadata.inherit.default": inherit.owenerdtodtodefault,
        "metadata.inherit.override": inherit.owenerdtooverride
    }, { //authordto - spousedto
        "executethis": "addwidmaster",
        "wid": "rel_author_spouse",
        "metadata.method": "relationshipdto",
        "relationshiptype": "attributes",
        "linktype": "jsononetoone",
        "primarywid": "authordto",
        "primarymethod": "authordto",
        "secondarywid": "spousedto",
        "secondarymethod": "spousedto"
    }, { //authordto - housedto
        "executethis": "addwidmaster",
        "wid": "rel_author_house",
        "metadata.method": "relationshipdto",
        "relationshiptype": "attributes",
        //"linktype": "onetomany",
        "linktype": "onetoone",
        "primarywid": "authordto",
        "primarymethod": "authordto",
        "secondarywid": "housedto",
        "secondarymethod": "housedto"
    }, { //authordto - bookdto
        "executethis": "addwidmaster",
        "wid": "rel_author_book",
        "metadata.method": "relationshipdto",
        "relationshiptype": "attributes",
        "linktype": "onetomany",
        "primarywid": "authordto",
        "primarymethod": "authordto",
        "secondarywid": "bookdto",
        "secondarymethod": "bookdto"
    }, { //bookdto - pubhousedto
        "executethis": "addwidmaster",
        "wid": "rel_book_pubhouse",
        "metadata.method": "relationshipdto",
        "relationshiptype": "attributes",
        "linktype": "manytoone",
        "primarywid": "bookdto",
        "primarymethod": "bookdto",
        "secondarywid": "pubhousedto",
        "secondarymethod": "pubhousedto"
    }, { //pubhousedto - addressdto
        "executethis": "addwidmaster",
        "wid": "rel_pubhouse_address",
        "metadata.method": "relationshipdto",
        "relationshiptype": "attributes",
        "linktype": "onetomany",
        "primarywid": "pubhousedto",
        "primarymethod": "pubhousedto",
        "secondarywid": "addressdto",
        "secondarymethod": "addressdto"
    }, { //pubhousedto - statedto
        "executethis": "addwidmaster",
        "wid": "rel_pubhouse_state",
        "metadata.method": "relationshipdto",
        "relationshiptype": "attributes",
        "linktype": "manytoone",
        "primarywid": "pubhousedto",
        "primarymethod": "pubhousedto",
        "secondarywid": "statedto",
        "secondarymethod": "statedto"
    }, { //pubhousedto - ownerdto
        "executethis": "addwidmaster",
        "wid": "rel_pubhouse_owner",
        "metadata.method": "relationshipdto",
        "relationshiptype": "attributes",
        "linktype": "onetoone",
        "primarywid": "pubhousedto",
        "primarymethod": "pubhousedto",
        "secondarywid": "ownerdto",
        "secondarymethod": "ownerdto"
    }];

    if (dtotype && dtotype == 1) {
        executeList = [{ //authordto
            "executethis": "addwidmaster",
            "metadata.method": "authordto",
            "wid": "authordto",
            "name": "string",
            "age": "string",
            "metadata.spousedto.type": "jsononetoone",
            "metadata.housedto.type": "onetoone",
            "metadata.bookdto.type": "onetomany",
            "metadata.inherit.default": inherit.authordtodefault,
            "metadata.inherit.override": inherit.authordtooverride
        }, { //spousedto
            "executethis": "addwidmaster",
            "metadata.method": "spousedto",
            "wid": "spousedto",
            "datemarried": "date",
            "metadata.inherit.default": inherit.spousedtodefault,
            "metadata.inherit.override": inherit.spousedtooverride
        }, { //housedto
            "executethis": "addwidmaster",
            "metadata.method": "housedto",
            "wid": "housedto",
            "color": "string",
            "metadata.inherit.default": inherit.housedtodefault,
            "metadata.inherit.override": inherit.housedtooverride
        }, { //bookdto
            "executethis": "addwidmaster",
            "metadata.method": "bookdto",
            "wid": "bookdto",
            "title": "string",
            "pages": "string",
            "metadata.pubhousedto.type": "manytooone",
            "metadata.inherit.default": inherit.bookdtodefault,
            "metadata.inherit.override": inherit.bookdtooverride
        }, { //pubhousedto
            "executethis": "addwidmaster",
            "metadata.method": "pubhousedto",
            "wid": "pubhousedto",
            "coname": "string",
            "establishdate": "date",
            "metadata.addressdto.type": "onetomany",
            "metadata.statedto.type": "manytooone",
            "metadata.ownerdto.type": "onetoone",
            "metadata.inherit.default": inherit.pubhousedtodefault,
            "metadata.inherit.override": inherit.pubhousedtooverride
        }, { //addressdto
            "executethis": "addwidmaster",
            "metadata.method": "addressdto",
            "wid": "addressdto",
            "city": "string",
            "add1": "string",
            "add2": "string",
            "metadata.inherit.default": inherit.addressdtodefault,
            "metadata.inherit.override": inherit.addressdtooverride
        }, { //statedto
            "executethis": "addwidmaster",
            "metadata.method": "statedto",
            "wid": "statedto",
            "statename": "string",
            "zipcode": "string",
            "metadata.inherit.default": inherit.statedtodefault,
            "metadata.inherit.override": inherit.statedtooverride
        }, { //ownerdto
            "executethis": "addwidmaster",
            "metadata.method": "ownerdto",
            "wid": "ownerdto",
            "name": "string",
            "metadata.inherit.default": inherit.owenerdtodtodefault,
            "metadata.inherit.override": inherit.owenerdtooverride
        }, { //authordto - spousedto
            "executethis": "addwidmaster",
            "wid": "rel_author_spouse",
            "metadata.method": "relationshipdto",
            "relationshiptype": "attributes",
            "linktype": "jsononetoone",
            "primarywid": "authordto",
            "primarymethod": "authordto",
            "secondarywid": "spousedto",
            "secondarymethod": "spousedto"
        }, { //authordto - housedto
            "executethis": "addwidmaster",
            "wid": "rel_author_house",
            "metadata.method": "relationshipdto",
            "relationshiptype": "attributes",
            //"linktype": "onetomany",
            "linktype": "onetoone",
            "primarywid": "authordto",
            "primarymethod": "authordto",
            "secondarywid": "housedto",
            "secondarymethod": "housedto"
        }, { //authordto - bookdto
            "executethis": "addwidmaster",
            "wid": "rel_author_book",
            "metadata.method": "relationshipdto",
            "relationshiptype": "attributes",
            "linktype": "onetomany",
            "primarywid": "authordto",
            "primarymethod": "authordto",
            "secondarywid": "bookdto",
            "secondarymethod": "bookdto"
        }, { //bookdto - pubhousedto
            "executethis": "addwidmaster",
            "wid": "rel_book_pubhouse",
            "metadata.method": "relationshipdto",
            "relationshiptype": "attributes",
            "linktype": "manytoone",
            "primarywid": "bookdto",
            "primarymethod": "bookdto",
            "secondarywid": "pubhousedto",
            "secondarymethod": "pubhousedto"
        }, { //pubhousedto - addressdto
            "executethis": "addwidmaster",
            "wid": "rel_pubhouse_address",
            "metadata.method": "relationshipdto",
            "relationshiptype": "attributes",
            "linktype": "onetomany",
            "primarywid": "pubhousedto",
            "primarymethod": "pubhousedto",
            "secondarywid": "addressdto",
            "secondarymethod": "addressdto"
        }, { //pubhousedto - statedto
            "executethis": "addwidmaster",
            "wid": "rel_pubhouse_state",
            "metadata.method": "relationshipdto",
            "relationshiptype": "attributes",
            "linktype": "manytoone",
            "primarywid": "pubhousedto",
            "primarymethod": "pubhousedto",
            "secondarywid": "statedto",
            "secondarymethod": "statedto"
        }, { //pubhousedto - ownerdto
            "executethis": "addwidmaster",
            "wid": "rel_pubhouse_owner",
            "metadata.method": "relationshipdto",
            "relationshiptype": "attributes",
            "linktype": "onetoone",
            "primarywid": "pubhousedto",
            "primarymethod": "pubhousedto",
            "secondarywid": "ownerdto",
            "secondarymethod": "ownerdto"
        }];
    }

    async.series([
        function (cb1) {

            execute(executeList, function (err, res) {
                proxyprinttodiv("manytoonesetupdto addwidmaster dto res -- ", res, 1, true);
                cb1(err, res);
            });
        },
        function (cb2) {
            var executeList = [{
                "executethis": "getwidmaster",
                "wid": "authordto",
            }];
            execute(executeList, function (err, res) {
                proxyprinttodiv("getwidmaster authordto", res, 99);
                cb2(err, res);
            });
        }
    ], function (err, res) {
        callback(null, res);
    });
}

function addauthorrecord(parentparmkey, c, childparmkey, d, relativepreamble, relativedtotype, relgetlist, callback) {
    var parent = [{
        "metadata.method": "authordto",
        "wid": "wid1" + c
    }, {
        "metadata.method": "authordto",
        "wid": "wid2" + c
    }, {
        "metadata.method": "authordto",
        "wid": "wid3" + c
    }];
    var child = [{
        "name": "somedata222" + d,
        "age": "somedata" + d
    }, {
        "datemarried": "03/10/2014" + d
    }, {
        "color": "blue" + d
    }, {
        "title": "Book 1" + d,
        "pages": "300" + d
    }, {
        "coname": "Company Name" + d,
        "establishdate": "03/10/2014" + d
    }, {
        "city": "City Name" + d,
        "add1": "Address1" + d,
        "add2": "Address2" + d
    }, {
        "statename": "State Name" + d,
        "zipcode": "Z 123456" + d
    }, {
        "name": "Owner Name" + d
    }, {
        "name": "somedata222" + d,
        "age": "somedata" + d,
        "wid": "wid1A" + d
    }, {
        "datemarried": "03/10/2014" + d,
        "wid": "wid1S" + d
    }, {
        "color": "blue" + d,
        "wid": "wid1H" + d
    }, {
        "title": "Book 1" + d,
        "pages": "300" + d,
        "wid": "wid1B" + d
    }, {
        "coname": "Company Name" + d,
        "establishdate": "03/10/2014",
        "wid": "wid1P" + d
    }, {
        "city": "City Name" + d,
        "add1": "Address1" + d,
        "add2": "Address2",
        "wid": "wid1Add" + d
    }, {
        "statename": "State Name" + d,
        "zipcode": "Z 123456" + d,
        "wid": "wid1S" + d
    }, {
        "name": "Owner Name" + d,
        "wid": "wid1O" + d
    }];

    var preamble = ["spousedto", "housedto", "bookdto", "bookdto.pubhousedto", "bookdto.pubhousedto.addressdto.0", "bookdto.pubhousedto.statedto.0", "bookdto.pubhousedto.ownerdto.0"];

    var dtotype = ["authordto", "spousedto", "housedto", "bookdto", "pubhousedto", "addressdto", "statedto", "ownerdto"];

    var printlist = [
        [{
                "wid": "wid1" + c,
                "command.dtotype": ""
            },

            {
                "wid": "wid1" + c,
                "command.dtotype": "authordto"
            }, {
                "wid": "wid1" + c,
                "command.dtotype": "spousedto"
            }, {
                "wid": "wid1" + c,
                "command.dtotype": "housedto"
            }, {
                "wid": "wid1" + c,
                "command.dtotype": "bookdto"
            }, {
                "wid": "wid1" + c,
                "command.dtotype": "pubhousedto"
            }, {
                "wid": "wid1" + c,
                "command.dtotype": "addressdto"
            }, {
                "wid": "wid1" + c,
                "command.dtotype": "statedto"
            }, {
                "wid": "wid1" + c,
                "command.dtotype": "ownerdto"
            },

            {
                "wid": "wid1A" + d,
                "command.dtotype": ""
            }, {
                "wid": "wid1S" + d,
                "command.dtotype": ""
            }, {
                "wid": "wid1H" + d,
                "command.dtotype": ""
            }, {
                "wid": "wid1B" + d,
                "command.dtotype": ""
            }, {
                "wid": "wid1P" + d,
                "command.dtotype": ""
            }, {
                "wid": "wid1Add" + d,
                "command.dtotype": ""
            }, {
                "wid": "wid1S" + d,
                "command.dtotype": ""
            }, {
                "wid": "wid1O" + d,
                "command.dtotype": ""
            },

            {
                "wid": "wid1A" + d,
                "command.dtotype": "authordto"
            }, {
                "wid": "wid1S" + d,
                "command.dtotype": "spousedto"
            }, {
                "wid": "wid1H" + d,
                "command.dtotype": "housedto"
            }, {
                "wid": "wid1B" + d,
                "command.dtotype": "bookdto"
            }, {
                "wid": "wid1P" + d,
                "command.dtotype": "pubhousedto"
            }, {
                "wid": "wid1Add" + d,
                "command.dtotype": "addressdto"
            }, {
                "wid": "wid1S" + d,
                "command.dtotype": "statedto"
            }, {
                "wid": "wid1O" + d,
                "command.dtotype": "ownerdto"
            }
        ],
        [{
                "wid": "wid1" + c,
                "command.dtotype": ""
            },

            {
                "wid": "wid1" + c,
                "command.dtotype": "authordto"
            }, {
                "wid": "wid1" + c,
                "command.dtotype": "spousedto"
            }, {
                "wid": "wid1" + c,
                "command.dtotype": "housedto"
            }, {
                "wid": "wid1" + c,
                "command.dtotype": "bookdto"
            }, {
                "wid": "wid1" + c,
                "command.dtotype": "pubhousedto"
            }, {
                "wid": "wid1" + c,
                "command.dtotype": "addressdto"
            }, {
                "wid": "wid1" + c,
                "command.dtotype": "statedto"
            }, {
                "wid": "wid1" + c,
                "command.dtotype": "ownerdto"
            },
        ],
        [{
            "wid": "wid1" + c,
            "command.dtotype": ""
        }],
        [{
            "wid": "wid2" + c,
            "command.dtotype": ""
        }],
        [{
            "wid": "wid3" + c,
            "command.dtotype": ""
        }]
    ];

    var executeobj = child[childparmkey];
    //proxyprinttodiv("Function addauthorrecord executeobj after child ", executeobj, 99, true);
    if (relativepreamble >= 0 && preamble[relativepreamble]) {
        for (key in executeobj) {
            var preamblekey = preamble[relativepreamble] + "." + key;
            //proxyprinttodiv("Function addauthorrecord executeobj preamblekey ", preamblekey, 99, true);
            executeobj[preamblekey] = executeobj[key];
            delete executeobj[key];
        }
    }
    // proxyprinttodiv("Function addauthorrecord executeobj after preamble ", executeobj, 99, true);

    if (parentparmkey >= 0) {
        executeobj = extend(true, executeobj, parent[parentparmkey])
    }
    //proxyprinttodiv("Function addauthorrecord executeobj after parent ", executeobj, 99, true);

    if (relativedtotype >= 0) {
        executeobj["command.dtotype"] = dtotype[relativedtotype];
    }
    //proxyprinttodiv("Function addauthorrecord executeobj after dtotype ", executeobj, 99, true);

    executeobj["executethis"] = "addwidmaster";
    proxyprinttodiv("Function addauthorrecord input executeobj for addwidmaster", executeobj, 99, true);
    execute(executeobj, function (err, res) {
        proxyprinttodiv("Function addauthorrecord output for addwidmaster", res, 99, true);
        printlistmany(printlist[relgetlist], function (err, res) {
            callback(err, res);
        });
    });
}

exports.testupdatewid0 = testupdatewid0 = function testupdatewid0(params, callback) {
    execute([{
            "executethis": "addwidmaster",
            "wid": "authordto",
            "metadata.method": "authordto",
            "name": "string",
            "age": "string",
            "eyecolor": "string",
            "haircolor": "string"
        }, {
            "executethis": "addwidmaster",
            "wid": "author1",
            "metadata.method": "authordto",
            "name": "Alex",
            "age": "44"
        }, {
            "executethis": "addwidmaster",
            "wid": "author1",
            "eyecolor": "blue",
            "haircolor": "blonde",
            "metadata.method": "authordto"
        }, {
            "executethis": "getwidmaster",
            "wid": "author1"
        }],
        function (err, res) {
            proxyprinttodiv('Full results: ', res, 99);
            proxyprinttodiv('The author1 record: ', res[3], 99);

            var result = logverify("testinheritdefault0_result", res[3], [{
                "wid": "author1",
                "metadata.method": "authordto",
                "name": "Alex",
                "age": "44",
                "eyecolor": "blue",
                "haircolor": "blonde"
            }]);

            callback(err, result);
        });
};


exports.add999 = add999 = function add999(params, callback) {
    var d = "";
    var executeobj = //[]
    {
        "executethis": "addwidmaster",
        "metadata.method": "authordto",
        "wid": "wid1",
        "name": "somedata222" + d,
        "age": "somedata" + d,

        "spousedto.datemarried": "03/10/2014",

        "housedto.color": "purple" + d,

        "bookdto.title": "Book 1" + d,
        "bookdto.pages": "300" + d,

        "bookdto.pubhousedto.coname": "Company Name" + d,
        "bookdto.pubhousedto.establishdate": "03/10/2014",

        "bookdto.pubhousedto.addressdto.0.city": "City Name" + d,
        "bookdto.pubhousedto.addressdto.0.add1": "Address1" + d,
        "bookdto.pubhousedto.addressdto.0.add2": "Address2" + d,

        "bookdto.pubhousedto.statedto.0.statename": "State Name" + d,
        "bookdto.pubhousedto.statedto.0.zipcode": "Z 123456" + d,

        "bookdto.pubhousedto.ownerdto.0.name": "Owner Name" + d
    }

    if (params) {
        executeobj = extend(true, executeobj, params)
    }

    manytoonesetupdto(params, 0, function (cb2) {
        //debuglevel=17;
        execute(executeobj, function (err, res) {
            proxyprinttodiv("result from data add ", res, 98, true);
            printlistmany([{
                "wid": "wid1",
                "command.dtotype": ""
            }], function (err, res) {
                execute({
                    "executethis": "getwidmaster",
                    "wid": "wid1"
                }, function (err, res) {
                    proxyprinttodiv("result from data add ", res, 98, true);
                    callback(err, res);
                })
            })
        });
    });
}


/*
        etaddautoselectwid
        let system select child wid names
        childs DO have preamble
        do NOT use command.dtotype
        get each get each child with one parent w/o dto, 
        get each child with one parent with dto, 
        get each child by childname w/o dto
        get each child by childname with dto, 
        results of this test:
  */

// the output of this function appears to be correct: all wids look good
exports.etaddautoselectwid = etaddautoselectwid = function etaddautoselectwid(params, callback) {
    var c = "c";
    var d = "d";
    manytoonesetupdto(params, 0, function (err, res) {

        //parent,   c,  child, d, preamble, dto, getlist
        addauthorrecord(0, c, 0, d, -1, -1, 2, function (err, res) {
            addauthorrecord(0, c, 1, d, 0, -1, 2, function (err, res) {
                addauthorrecord(0, c, 2, d, 1, -1, 2, function (err, res) {
                    addauthorrecord(0, c, 3, d, 2, -1, 2, function (err, res) {
                        addauthorrecord(0, c, 4, d, 3, -1, 2, function (err, res) {
                            addauthorrecord(0, c, 5, d, 4, -1, 2, function (err, res) {
                                addauthorrecord(0, c, 6, d, 5, -1, 2, function (err, res) {
                                    addauthorrecord(0, c, 7, d, 6, -1, 1, function (err, res) {
                                        callback(err, res);
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

/*
        etaddautoselectwid2
        let system select child wid names
        childs DO have preamble
        do NOT use command.dtotype
        get each get each child with one parent w/o dto, 
        get each child with one parent with dto, 
        get each child by childname w/o dto
        get each child by childname with dto, 
        results of this test:
  */

// the output of this function appears to be correct: all wids look good
exports.etaddautoselectwid2 = etaddautoselectwid2 = function etaddautoselectwid2(params, callback) {
    var c = "c";
    var d = "d";
    manytoonesetupdto(params, 1, function (err, res) {

        //parent,   c,  child, d, preamble, dto, getlist
        addauthorrecord(0, c, 0, d, -1, -1, 2, function (err, res) {
            addauthorrecord(0, c, 1, d, 0, -1, 2, function (err, res) {
                addauthorrecord(0, c, 2, d, 1, -1, 2, function (err, res) {
                    addauthorrecord(0, c, 3, d, 2, -1, 2, function (err, res) {
                        addauthorrecord(0, c, 4, d, 3, -1, 2, function (err, res) {
                            addauthorrecord(0, c, 5, d, 4, -1, 2, function (err, res) {
                                addauthorrecord(0, c, 6, d, 5, -1, 2, function (err, res) {
                                    addauthorrecord(0, c, 7, d, 6, -1, 1, function (err, res) {
                                        callback(err, res);
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

/*
        etaddmanualselectwid
        we select child wid names
        childs do  have preamble
        do not use command.dtotype
        get each get each child with one parent w/o dto, 
        get each child with one parent with dto, 
        get each child by childname w/o dto
        get each child by childname with dto,
        results of this test:
    */

// the output of this function appears to be correct: all wids look good
exports.etaddmanualselectwid = etaddmanualselectwid = function etaddmanualselectwid(params, callback) {
    var c = "c";
    var d = "d";
    manytoonesetupdto(params, 0, function (err, res) {

        //parent,   c,   child, d, preamble, dto, getlist
        addauthorrecord(0, c, 8, d, -1, -1, 2, function (err, res) {
            addauthorrecord(0, c, 9, d, 0, -1, 2, function (err, res) {
                addauthorrecord(0, c, 10, d, 1, -1, 2, function (err, res) {
                    addauthorrecord(0, c, 11, d, 2, -1, 2, function (err, res) {
                        addauthorrecord(0, c, 12, d, 3, -1, 2, function (err, res) {
                            addauthorrecord(0, c, 13, d, 4, -1, 2, function (err, res) {
                                addauthorrecord(0, c, 14, d, 5, -1, 2, function (err, res) {
                                    addauthorrecord(0, c, 15, d, 6, -1, 0, function (err, res) {
                                        callback(err, res);
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

/*
        etaddwithdtotype
        we select child wid names
        childs do NOT have preamble
        use command.dtotype
        get each get each child with one parent w/o dto, 
        get each child with one parent with dto, 
        get each child by childname w/o dto
        get each child by childname with dto, 
        results of this test:
    */

// add with command.dtotype is not working. specifying a dtotype is not creating the right structure. All
// fields are being added to the top level wid instead of as children.
exports.etaddwithdtotype = etaddwithdtotype = function etaddwithdtotype(params, callback) {
    var c = "c";
    var d = "d";
    manytoonesetupdto(params, 0, function (err, res) {

        //parent,   c,   child, d, preamble, dto, getlist
        addauthorrecord(0, c, 8, d, -1, 0, 2, function (err, res) {
            addauthorrecord(0, c, 9, d, -1, 1, 2, function (err, res) {
                addauthorrecord(0, c, 10, d, -1, 2, 2, function (err, res) {
                    addauthorrecord(0, c, 11, d, -1, 3, 2, function (err, res) {
                        addauthorrecord(0, c, 12, d, -1, 4, 2, function (err, res) {
                            addauthorrecord(0, c, 13, d, -1, 5, 2, function (err, res) {
                                addauthorrecord(0, c, 14, d, -1, 6, 2, function (err, res) {
                                    addauthorrecord(0, c, 15, d, -1, 7, 0, function (err, res) {
                                        callback(err, res);
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

/*    
        etadddtoandpreamble
        we select child wid names
        childs do have preamble
        use command.dtotype
        get each get each child with one parent w/o dto, 
        get each child with one parent with dto, 
        get each child by childname w/o dto
        get each child by childname with dto, 
        results of this test:
    */

// appears to work: output looks good.
exports.etadddtoandpreamble = etadddtoandpreamble = function etadddtoandpreamble(params, callback) {
    var c = "c";
    var d = "d";
    manytoonesetupdto(params, 0, function (err, res) {

        //parent,   c,   child, d, preamble, dto, getlist
        addauthorrecord(0, c, 8, d, -1, 0, 2, function (err, res) {
            addauthorrecord(0, c, 9, d, 0, 1, 2, function (err, res) {
                addauthorrecord(0, c, 10, d, 1, 2, 2, function (err, res) {
                    addauthorrecord(0, c, 11, d, 2, 3, 2, function (err, res) {
                        addauthorrecord(0, c, 12, d, 3, 4, 2, function (err, res) {
                            addauthorrecord(0, c, 13, d, 4, 5, 2, function (err, res) {
                                addauthorrecord(0, c, 14, d, 5, 6, 2, function (err, res) {
                                    addauthorrecord(0, c, 15, d, 6, 7, 0, function (err, res) {
                                        callback(err, res);
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



/*
        etadd3big
        call 3 x etaddautoselectwid
        let system select child wid names
        childs DO have preamble
        do NOT use command.dtotype
        get each get each child with one parent w/o dto, 
        get each child with one parent with dto, 
        get each child by childname w/o dto
        get each child by childname with dto, 
        result of this test:
    */
// appears to be working: last update takes affect
exports.etadd3big = etadd3big = function etadd3big(params, callback) {
    var c = "c";
    var d = "d";
    manytoonesetupdto(params, 0, function (err, res) {

        //parent,   c,   child, d, preamble, dto, getlist
        addauthorrecord(0, c, 0, d, -1, -1, 2, function (err, res) {
            addauthorrecord(0, c, 1, d, 0, -1, 2, function (err, res) {
                addauthorrecord(0, c, 2, d, 1, -1, 2, function (err, res) {
                    addauthorrecord(0, c, 3, d, 2, -1, 2, function (err, res) {
                        addauthorrecord(0, c, 4, d, 3, -1, 2, function (err, res) {
                            addauthorrecord(0, c, 5, d, 4, -1, 2, function (err, res) {
                                addauthorrecord(0, c, 6, d, 5, -1, 2, function (err, res) {
                                    addauthorrecord(0, c, 7, d, 6, -1, 0, function (err, res) {

                                        //c="x";
                                        d = "y";

                                        //parent,   c,   child, d, preamble, dto, getlist
                                        addauthorrecord(0, c, 0, d, -1, -1, 2, function (err, res) {
                                            addauthorrecord(0, c, 1, d, 0, -1, 2, function (err, res) {
                                                addauthorrecord(0, c, 2, d, 1, -1, 2, function (err, res) {
                                                    addauthorrecord(0, c, 3, d, 2, -1, 2, function (err, res) {
                                                        addauthorrecord(0, c, 4, d, 3, -1, 2, function (err, res) {
                                                            addauthorrecord(0, c, 5, d, 4, -1, 2, function (err, res) {
                                                                addauthorrecord(0, c, 6, d, 5, -1, 2, function (err, res) {
                                                                    addauthorrecord(0, c, 7, d, 6, -1, 0, function (err, res) {

                                                                        //c="w";
                                                                        d = "z";

                                                                        //parent,   c,   child, d, preamble, dto, getlist
                                                                        addauthorrecord(0, c, 0, d, -1, -1, 2, function (err, res) {
                                                                            addauthorrecord(0, c, 1, d, 0, -1, 2, function (err, res) {
                                                                                addauthorrecord(0, c, 2, d, 1, -1, 2, function (err, res) {
                                                                                    addauthorrecord(0, c, 3, d, 2, -1, 2, function (err, res) {
                                                                                        addauthorrecord(0, c, 4, d, 3, -1, 2, function (err, res) {
                                                                                            addauthorrecord(0, c, 5, d, 4, -1, 2, function (err, res) {
                                                                                                addauthorrecord(0, c, 6, d, 5, -1, 2, function (err, res) {
                                                                                                    addauthorrecord(0, c, 7, d, 6, -1, 0, function (err, res) {
                                                                                                        callback(err, res);
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


// we will create dtos with wid2 as default - the name of the top wid will be wid2default
// then we get wid1 to see if defaults there
exports.etcreatedefaultdto1 = etcreatedefaultdto1 = function etcreatedefaultdto1(params, callback) {
    var c = "default";
    var d = "d";

    var inheritparams = {
        "authordtodefault": [{
            "wid2default": ""
        }],
        "spousedto": [],
        "housedto": [],
        "bookdto": [],
        "pubhousedto": [],
        "addressdto": [],
        "statedto": [],
        "ownerdto": [],
        "authordtooverride": [],
        "spousedtooverride": [],
        "housedtooverride": [],
        "bookdtooverride": [],
        "pubhousedtooverride": [],
        "addressdtooverride": [],
        "statedtooverride": [],
        "ownerdtooverride": []
    }

    manytoonesetupdto(inheritparams, 0, function (err, res) {

        //parent,   c,   child, d, preamble, dto, getlist
        addauthorrecord(1, c, 8, d, -1, -1, 3, function (err, res) {
            //addauthorrecord(0,      c,      9,  d,   0,      -1,     0, function (err, res){
            addauthorrecord(1, c, 10, d, 1, -1, 3, function (err, res) {
                //addauthorrecord(0,      c,      11, d,   2,      -1,     0, function (err, res){
                addauthorrecord(1, c, 12, d, 3, -1, 3, function (err, res) {
                    //addauthorrecord(0,      c,      13, d,   4,      -1,     0, function (err, res){
                    addauthorrecord(1, c, 14, d, 5, -1, 3, function (err, res) {
                        //addauthorrecord(0,      c,      15, d,   6,      -1,     0, function (err, res){
                        printlistmany([{
                            "wid": "wid1" + c,
                            "command.dtotype": ""
                        }], function (err, res) {
                            callback(err, res);
                        });

                        //                                });
                        //                            }); 
                        //                        });
                        //                    });
                    });
                });
            });
        });
    });

}



// we will create dtos with wid2 as default - the name of the top wid will be wid2override
// then we get wid1 to see if defaults there
exports.etcreateinheritdefault1 = etcreateinheritdefault1 = function etcreateinheritdefault1(params, callback) {
    var c = "override";
    var d = "d";

    var inheritparams = {
        "authordtodefault": [],
        "spousedto": [{
            "wid2override": ""
        }],
        "housedto": [],
        "bookdto": [],
        "pubhousedto": [],
        "addressdto": [],
        "statedto": [],
        "ownerdto": [],
        "authordtooverride": [],
        "spousedtooverride": [],
        "housedtooverride": [],
        "bookdtooverride": [],
        "pubhousedtooverride": [],
        "addressdtooverride": [],
        "statedtooverride": [],
        "ownerdtooverride": []
    }

    manytoonesetupdto(inheritparams, 0, function (err, res) {

        //parent,   c,   child, d, preamble, dto, getlist
        addauthorrecord(2, c, 8, d, -1, -1, 4, function (err, res) {
            //addauthorrecord(0,      c,      9,  d,   0,      -1,     0, function (err, res){
            addauthorrecord(2, c, 10, d, 1, -1, 4, function (err, res) {
                //addauthorrecord(0,      c,      11, d,   2,      -1,     0, function (err, res){
                addauthorrecord(2, c, 12, d, 3, -1, 4, function (err, res) {
                    //addauthorrecord(0,      c,      13, d,   4,      -1,     0, function (err, res){
                    addauthorrecord(2, c, 14, d, 5, -1, 4, function (err, res) {
                        //addauthorrecord(0,      c,      15, d,   6,      -1,     0, function (err, res){
                        printlistmany([{
                            "wid": "wid1" + c,
                            "command.dtotype": ""
                        }], function (err, res) {
                            callback(err, res);
                        });
                        //});
                    });
                    //});
                });
                //}); 
            });
            //});
        });
    });
}

/*
  1) etaddautoselectwid,, add works perfectly.. but with get,,, command.dtotype=authordto and command.dtotype="", get complete author data

  2) etaddmanualselectwid,, add works perfectly.. but with get,,, command.dtotype=authordto and command.dtotype="", get complete author data

  3) etaddwithdtotype,,,  not able to get full wid with  command.dtotype=authordto

  4) etadddtoandpreamble,, add works perfectly.. but with get,,, command.dtotype=authordto and command.dtotype="", get complete author data

  5) etaddwithdtotype,,  It does not add as expected.. because we are adding housedto data.. and it adds other data

  6) etadddtoandpreamble,, add works perfectly.. but with get,,, command.dtotype=authordto and command.dtotype="", get complete author data

  7) etcreatedefaultdto1,, with get,, command.dtotype="", complete author data

  8) etcreateinheritdefault1,, with get,, command.dtotype="", complete author data
  */




// test manytomany = manytomanytest() line 97
// test default = inheritdefault1() line 118
// test override = inheritoverride1() line 140
// test author-author = manytomanytest1() line 186
// create new dtotype in manytoonesetupdto to test manytomany, json
// more default / inherit tests

exports.testcreatealldtos = testcreatealldtos = function testcreatealldtos(params, callback) {
    var executeobj = {
        "executethis": "addwidmaster",
        "metadata.method": "userdto",
        "wid": "wid1",

        "widname": "user widname", //HERE, we need to specify value as datatype "wid"
        "fname": "user fname1",
        "lname": "user lname1",
        "phone": "user phone",
        "email": "user@test.com",
        "address": "user address",
        "address2": "user address2",
        "city": "user city",
        "state": "user state",
        "zip": "user zip 123456",
        "country": "user country",

        "securitydto.accesstoken": "user security accesstoken",
        "securitydto.status": "user security status",

        "environmentdto.ac": "user environment ac",
        "environmentdto.gps": "user environment gps",
        "environmentdto.account": "user environment account",
        "environmentdto.db": "user environment db",
        "environmentdto.collection": "user environment collection",

        "permissiondto.0.level": "user permission level",
        "permissiondto.0.metadata.db": "user permission db",
        "permissiondto.0.metadata.collection": "user permission collection",

        "usergroupdto.0.groupname": "user usergroup name"
    };

    createalldtos(params, function (cb2) {
        var executeList = [];

        var executeObjForGet = {
            "executethis": "getwidmaster",
            "wid": "userdto",
        };
        //executeList.push(executeObjForGet);
        executeList.push(executeobj);

        execute(executeList, function (err, res) {
            proxyprinttodiv("result from data add ", res, 99, true);

            var printlist = [
                //{"wid":"wid1", "command.dtotype":""},

                {
                    "wid": "wid1",
                    "command.dtotype": "userdto"
                },
                //{"wid":"wid1", "command.dtotype":"securitydto"},
                //{"wid":"wid1", "command.dtotype":"environmentdto"},
                //{"wid":"wid1", "command.dtotype":"permissiondto"}
            ];

            printlistmany(printlist, function (err, res) {
                callback(err, res);
            })
        });
    });
}

exports.ettestatoa = ettestatoa = function ettestatoa(params, callback) {
    eventappinstall();
    debuglevel = 38;

    execute([{
        "executethis": "addwidmaster",
        "wid": "authordto",
        "metadata.method": "authordto",
        "metadata.authordto.type": "onetoone",
        "name": "string"
    }, { //authordto - authordto
        "executethis": "addwidmaster",
        "wid": "rel_author_author",
        "metadata.method": "relationshipdto",
        "relationshiptype": "attributes",
        "linktype": "onetoone",
        "primarywid": "authordto",
        "primarymethod": "authordto",
        "secondarywid": "authordto",
        "secondarymethod": "authordto"
    }, {
        "executethis": "addwidmaster",
        "wid": "wid1",
        "metadata.method": "authordto",
        "authordto.authordto.authordto.name": "sammysample"
    }, {
        "executethis": "getwidmaster",
        "wid": "authordto"
    }, {
        "executethis": "getwidmaster",
        "wid": "wid1"
    }], function (err, res) {
        proxyprinttodiv('Function authordto result Full res', res, 17);

        proxyprinttodiv('Function authordto wid1 res[3] ', res[3], 98);
        proxyprinttodiv('Function authordto wid1 res[4] ', res[4], 98);

        var expectedResult = [{
            "wid": "authordto",
            "metadata.method": "authordto",
            "name": "string"
        }];
        proxyprinttodiv('Function authordto expectedResult ', expectedResult, 17);

        res = logverify("authordto_result", res[4], expectedResult);
        debuglevel = 0;
        // execute({"executethis": "getwidmaster","wid": "authordto"}, function (err, res1) {
        //     proxyprinttodiv('Function authordto result LAST ', res1, 17); 
        //     callback(err, res); 
        // })
    });
}

exports.addmerchantdtotest = addmerchantdtotest = function addmerchantdtotest(params, callback) {
    execute([{ // build the dtos and relatiopnsips
            "executethis": "addwidmaster",
            "wid": "merchantdto",
            "metadata.method": "merchantdto",
            "title": "string",
            "contactname": "string",
            "contactemail": "string",
            "contactphone": "string",
            "company": "string",
            "website": "string",
            "companyphone": "string",
            "address": "string",
            "address2": "string",
            "city": "string",
            "state": "string",
            "zip": "string",
            "metadata.loyaltydto.type": "onetomany",
            "configuration": {
                "midexecute": [{
                    "dothis": "server",
                    "tryorder": "0",
                    "executeorder": "0",
                    "params": {}
                }]
            }
        }],
        function (err, resultArray) {
            callback(err, resultArray)
        });
}

exports.addloyaltydtotest = addloyaltydtotest = function addloyaltydtotest(params, callback) {
    execute([{
            "executethis": "addwidmaster",
            "metadata.method": "loyaltydto",
            "wid": "loyaltydto",
            "widname": "myloyalty",
            "punches": "integer",
            "points": "integer",
            "issue": "integer",
            "redeem": "integer",
            "title": "string",
            "logo": "string",
            "description": "string",
            "expiration": "date",
            "configuration": {
                "midexecute": [{
                    "dothis": "server",
                    "tryorder": "0",
                    "executeorder": "0",
                    "params": {}
                }]
            }
        }],
        function (err, resultArray) {
            callback(err, resultArray)
        });
}
exports.addmerchantloyaltyreltest = addmerchantloyaltyreltest = function addmerchantloyaltyreltest(params, callback) {
    execute([{
            "executethis": "addwidmaster",
            "wid": "rel_merchant_loyalty",
            "metadata.method": "relationshipdto",
            "relationshiptype": "attributes",
            "linktype": "onetomany",
            "primarywid": "merchantdto",
            "primarymethod": "merchantdto",
            "secondarywid": "loyaltydto",
            "secondarymethod": "loyaltydto",
            "configuration": {
                "midexecute": [{
                    "dothis": "server",
                    "tryorder": "0",
                    "executeorder": "0",
                    "params": {}
                }]
            }
        }],
        function (err, resultArray) {
            callback(err, resultArray)
        });
}
exports.step1Luke = step1Luke = function step1Luke(params, callback) {

    execute([{ // add the merchants (notice its the parent wid)
        "executethis": "addwidmaster",
        "wid": "merchgroup1",
        "metadata.method": "merchantsdto",
        "name": "luke's company"

    }], function (err, resultArray) {
        callback(err, resultArray)
    });
}

function step1Joe(params, callback) {

    execute([{ // add the merchants (notice its the parent wid)
        "executethis": "addwidmaster",
        "wid": "merchgroup1",
        "metadata.method": "merchantsdto",
        "merchantdto.name": "joe's company"
    }], function (err, resultArray) {
        callback(err, resultArray)
    });
}

function step1Bill(params, callback) {

    execute([{
        "executethis": "addwidmaster",
        "wid": "merchgroup1",
        "metadata.method": "merchantsdto",
        "merchantdto.name": "bill's company"
    }], function (err, resultArray) {
        callback(err, resultArray)
    });
}

function step2BillLoyalty(params, callback) {

    execute([{
        "executethis": "addwidmaster",
        "wid": "loyaltygroup1",
        "metadata.method": "merchantdto",
        "loyaltydto.name": "bill's loyalty wid"
    }], function (err, resultArray) {
        callback(err, resultArray)
    });
}

function step2JoeLoyalty(params, callback) {

    execute([{
        "executethis": "addwidmaster",
        "wid": "loyaltygroup1",
        "metadata.method": "merchantdto",
        "loyaltydto.name": "Joe's loyalty wid"
    }], function (err, resultArray) {
        callback(err, resultArray)
    });
}

function inputLoyalty(params, callback) {
    var lname = document.getElementById('loyaltyName').value;
    execute([{
        "executethis": "addwidmaster",
        "wid": "loyaltygroup1",
        "metadata.method": "merchantdto",
        "loyaltydto.name": lname
    }], function (err, resultArray) {
        callback(err, resultArray)
    });
}

function step3datanodto(params, callback) {

    execute([{
        "executethis": "addwidmaster",
        "wid": "nodtowid",
        "name": "bill's no data datawid"
    }, {
        "executethis": "getwidmaster",
        "wid": "nodtowid"
    }], function (err, resultArray) {
        callback(err, resultArray)
    });
}

exports.wraptest = wraptest = function wraptest(params, callback) {
    proxyprinttodiv('Function wraptest ------', params, 98);

    execute({
        "executethis": "ettestag1",
        "command": {
            "result": "x"
        }
    }, function (err, res) {
        proxyprinttodiv('Function wraptest result LAST ', res, 98);
        callback(err, res);
    });

}

exports.rrr = rrr = function rrr(params, callback) {
    var obj = {
        "wid": "song1",
        "metadata": {
            "method": "songdto"
        },
        "title": "Highway to Hell",
        "sounddto": {
            "note": "A flat"
        }
    }

    var dtotable = {
        "songdto": {
            "title": "string",
            "wid": "string",
            "metadata": {
                "method": "string",
                "sounddto": {
                    "type": "onetomany"
                }
            },

            "command": {
                "inherit": [{
                    "wid": "usergroupoverride",
                    "command": {
                        "dtotype": "",
                        "adopt": "override"
                    }
                }, {
                    "wid": "permissionoverride",
                    "command": {
                        "dtotype": "",
                        "adopt": "override"
                    }
                }, {
                    "wid": "securityoverride",
                    "command": {
                        "dtotype": "",
                        "adopt": "override"
                    }
                }, {
                    "wid": "environmentoverride",
                    "command": {
                        "dtotype": "",
                        "adopt": "override"
                    }
                }],
                "deepdtolist": {
                    "systemdto": "onetoone",
                    "sounddto": "onetomany"
                },
                "dtolist": {
                    "sounddto": "onetomany",
                    "systemdto": "onetoone"
                }
            },

            "sounddto": [{
                "note": "string",
                "wid": "string",
                "metadata": {
                    "method": "string"
                },
                "command": {
                    "inherit": [{
                        "wid": "usergroupoverride",
                        "command": {
                            "dtotype": "",
                            "adopt": "override"
                        }
                    }, {
                        "wid": "permissionoverride",
                        "command": {
                            "dtotype": "",
                            "adopt": "override"
                        }
                    }, {
                        "wid": "securityoverride",
                        "command": {
                            "dtotype": "",
                            "adopt": "override"
                        }
                    }, {
                        "wid": "environmentoverride",
                        "command": {
                            "dtotype": "",
                            "adopt": "override"
                        }
                    }],
                    "deepdtolist": {
                        "systemdto": "onetoone"
                    },
                    "dtolist": {
                        "systemdto": "onetoone"
                    }
                }
            }]
        },

        "sounddto": [{
            "note": "string",
            "wid": "string",
            "metadata": {
                "method": "string"
            },
            "command": {
                "inherit": [{
                    "wid": "usergroupoverride",
                    "command": {
                        "dtotype": "",
                        "adopt": "override"
                    }
                }, {
                    "wid": "permissionoverride",
                    "command": {
                        "dtotype": "",
                        "adopt": "override"
                    }
                }, {
                    "wid": "securityoverride",
                    "command": {
                        "dtotype": "",
                        "adopt": "override"
                    }
                }, {
                    "wid": "environmentoverride",
                    "command": {
                        "dtotype": "",
                        "adopt": "override"
                    }
                }],
                "deepdtolist": {
                    "systemdto": "onetoone"
                },
                "dtolist": {
                    "systemdto": "onetoone"
                }
            }
        }]
    }

    recurseobjcontainer(obj, dtotable, function (err, res) {
        callback(err, res)

    });

}

/*
        empty dtotable from rrr
    */
exports.rrr2 = rrr2 = function rrr2(params, callback) {
    var obj = {
        "wid": "song1",
        "metadata": {
            "method": "songdto"
        },
        "title": "Highway to Hell",
        "sounddto": {
            "note": "A flat"
        }
    }

    var dtotable = {}

    recurseobjcontainer(obj, dtotable, function (err, res) {
        callback(err, res)

    });
}


/*
        input object change
    */
exports.rrr3 = rrr3 = function rrr3(params, callback) {
    var obj = {
        "wid": "song1",
        "metadata": {
            "method": "songdto"
        },
        "title": "Highway to Hell",
        "sounddto": [{
            "note": "A flat"
        }, {
            "note": "B sharp"
        }, {
            "note": "C flat"
        }]
    };

    var dtotable = {
        "songdto": {
            "title": "string",
            "wid": "string",
            "metadata": {
                "method": "string",
                "sounddto": {
                    "type": "onetomany"
                }
            },

            "command": {

                "inherit": [{
                    "wid": "usergroupoverride",
                    "command": {
                        "dtotype": "",
                        "adopt": "override"
                    }
                }, {
                    "wid": "permissionoverride",
                    "command": {
                        "dtotype": "",
                        "adopt": "override"
                    }
                }, {
                    "wid": "securityoverride",
                    "command": {
                        "dtotype": "",
                        "adopt": "override"
                    }
                }, {
                    "wid": "environmentoverride",
                    "command": {
                        "dtotype": "",
                        "adopt": "override"
                    }
                }],



                "deepdtolist": {
                    "systemdto": "onetoone",
                    "sounddto": "onetomany"
                },
                "dtolist": {
                    "sounddto": "onetomany",
                    "systemdto": "onetoone"
                }
            },

            "sounddto": [{
                "note": "string",
                "wid": "string",
                "metadata": {
                    "method": "string"
                },
                "command": {
                    "inherit": [{
                        "wid": "usergroupoverride",
                        "command": {
                            "dtotype": "",
                            "adopt": "override"
                        }
                    }, {
                        "wid": "permissionoverride",
                        "command": {
                            "dtotype": "",
                            "adopt": "override"
                        }
                    }, {
                        "wid": "securityoverride",
                        "command": {
                            "dtotype": "",
                            "adopt": "override"
                        }
                    }, {
                        "wid": "environmentoverride",
                        "command": {
                            "dtotype": "",
                            "adopt": "override"
                        }
                    }],
                    "deepdtolist": {
                        "systemdto": "onetoone"
                    },
                    "dtolist": {
                        "systemdto": "onetoone"
                    }
                }
            }]
        },

        "sounddto": [{
            "note": "string",
            "wid": "string",
            "metadata": {
                "method": "string"
            },
            "command": {
                "inherit": [{
                    "wid": "usergroupoverride",
                    "command": {
                        "dtotype": "",
                        "adopt": "override"
                    }
                }, {
                    "wid": "permissionoverride",
                    "command": {
                        "dtotype": "",
                        "adopt": "override"
                    }
                }, {
                    "wid": "securityoverride",
                    "command": {
                        "dtotype": "",
                        "adopt": "override"
                    }
                }, {
                    "wid": "environmentoverride",
                    "command": {
                        "dtotype": "",
                        "adopt": "override"
                    }
                }],
                "deepdtolist": {
                    "systemdto": "onetoone"
                },
                "dtolist": {
                    "systemdto": "onetoone"
                }
            }
        }]
    }

    recurseobjcontainer(obj, dtotable, function (err, res) {
        callback(err, res)

    });
}


/*
        empty dtotable from rrr3
    */
exports.rrr4 = rrr4 = function rrr4(params, callback) {
    var obj = {
        "wid": "song1",
        "metadata": {
            "method": "songdto"
        },
        "title": "Highway to Hell",
        "sounddto": [{
            "note": "A flat"
        }, {
            "note": "B sharp"
        }, {
            "note": "C flat"
        }]
    };

    var dtotable = {}

    recurseobjcontainer(obj, dtotable, function (err, res) {
        callback(err, res)

    });
}

/*
        
    */
exports.rrr5 = rrr5 = function rrr5(params, callback) {
    function recurseobjcontainer(obj, dtotable, callback) {

        function recursestring(dtoobject) {
            for (var eachparam in dtoobject) {
                if (eachparam !== "command") {
                    if (isArray(dtoobject[eachparam])) {
                        var tempArray = [];
                        for (var eachitem in dtoobject[eachparam]) {
                            tempArray.push(recursestring(dtoobject[eachparam][eachitem]))
                        }
                        dtoobject[eachparam] = tempArray;
                    } else {
                        if (isObject(dtoobject[eachparam])) {
                            dtoobject[eachparam] = recursestring(dtoobject[eachparam])
                        } else {
                            dtoobject[eachparam] = "string"
                        }
                    }
                }
            }
            return dtoobject
        }

        function recurseobj(params) {
            proxyprinttodiv("getdtoobject recurseobj -- params", params, 98);
            var dtolist = {};
            var dtoobj = {};
            var metadata = {};
            var tempobj = {};
            var inheritlist = [];
            var inobj = JSON.parse(JSON.stringify(params));

            if (inobj instanceof Array) { //if we get an array in (usally happens on the recurse)
                proxyprinttodiv("inobj instanceof array", inobj, 98);
                var mergedObj = {};
                var tempArray = [];
                for (var i in inobj) {
                    // if our array is just a list of strings
                    if (typeof inobj[i] === 'string') {
                        tempArray.push("string");
                    } else {
                        extend(true, mergedObj, recurseobj(inobj[i]));
                    }
                }
                // there has to be something in the merge object to push it onto the return
                if (Object.keys(mergedObj).length > 0) {
                    tempArray.push(mergedObj);
                }

                proxyprinttodiv("tempArray", tempArray, 98);
                return tempArray;
            } else {
                // the section below improves inobj, 
                // -it gets command from dtotable if avail
                // -it creates a dtolist based on type 
                // - it changes structure of inobj based on type

                if (inobj['metadata']) {
                    dtolist = {};
                    metadata = inobj['metadata'];
                    proxyprinttodiv("In getdtoobject recurseobj metadata", metadata, 98);
                    for (var eachitem in metadata) {
                        if (eachitem === 'type' || eachitem === 'method') {
                            proxyprinttodiv("In getdtoobject recurseobj metadata -- eachitem", eachitem, 98);
                            tempobj = {};
                            if (eachitem === 'type') {
                                tempobj[eachitem] = metadata[eachitem]['type'];
                            }
                            if (eachitem === 'method') {
                                if (dtotable[metadata.method]) {
                                    tempobj = dtotable[metadata.method].command.dtolist
                                }
                            }
                            if (tempobj) {
                                extend(true, dtolist, tempobj)
                            };
                            // if (eachitem==='method' && dtotable[metadata.method] && 
                            //     dtotable[metadata.method].command && dtotable[metadata.method].command.inherit) {
                            //     proxyprinttodiv("getdtoobject dtotable[metadata.method].command.inherit ", dtotable[metadata.method].command.inherit, 98);
                            //         tempobj = dtotable[metadata.method].command.inherit;
                            //         inheritlist.push(tempobj);
                            //     }
                            proxyprinttodiv("getdtoobject dtolist", dtolist, 98);
                            proxyprinttodiv("In getdtoobject <<< DTOLIST >>>", dtolist, 98);
                            // eachitem would be a child
                            if ((metadata[eachitem]['type'] === "onetomany" ||
                                    metadata[eachitem]['type'] === "manytomany" || // ** readded
                                    metadata[eachitem]['type'] === "jsononetomany") &&
                                (inobj[eachitem] !== undefined) && (!isArray(inobj[eachitem]))) {
                                relationshipArray = [];
                                relationshipArray.push(inobj[eachitem]);
                                delete inobj[eachitem];
                                inobj[eachitem] = relationshipArray;
                            }
                        } // type
                    } // for metadata
                } // if inobj['metadata'];

                var dtolistdefault = {
                    'systemdto': 'onetoone'
                }
                extend(true, dtolist, dtolistdefault)

                if (!dtoobj.command) {
                    dtoobj.command = {};
                }
                debuglevel = 98;
                // section below goes through each property and recurse
                proxyprinttodiv("getdtoobject createdtotable -- dtotable ", dtotable, 98, true);
                //proxyprinttodiv("getdtoobject inheritlist", inheritlist, 98);
                proxyprinttodiv("getdtoobject dtolist", dtolist, 98);
                proxyprinttodiv("getdtoobject recurseobj -- inobj II", inobj, 98);
                for (var eachparm in inobj) {
                    proxyprinttodiv("getdtoobject recurseobj -- eachparm", eachparm, 98);
                    proxyprinttodiv("getdtoobject --is-- switch inobj[eachparm]", inobj[eachparm], 98);

                    if (isObject(inobj[eachparm]) || isArray(inobj[eachparm])) {
                        dtoobj[eachparm] = recurseobj(inobj[eachparm]);
                        proxyprinttodiv("getdtoobject --is-- switch inobj[eachparm]", inobj[eachparm], 98);
                        proxyprinttodiv("getdtoobject is obj dtoobj", dtoobj, 98);
                        if (dtotable[eachparm]) { // if table entry exists, then merge to what you just got
                            proxyprinttodiv("getdtoobject is obj dtotable[eachparm]", dtotable[eachparm], 98);

                            if (isArray(dtotable[eachparm])) { // get a object copy of dtotable[eachparam] to tempobj
                                tempobj = dtotable[eachparm][0]
                            } else {
                                tempobj = dtotable[eachparm]
                            }
                            proxyprinttodiv("getdtoobject is obj tempobj", tempobj, 98);
                            if (isArray(dtoobj[eachparm])) { // merge it with object dtoobj[eachparm]
                                tempobj = extend(true, dtoobj[eachparm][0], tempobj);
                            } else {
                                tempobj = extend(true, dtoobj[eachparm], tempobj);
                            }
                            proxyprinttodiv("getdtoobject is obj tempobj II", tempobj, 98);
                            if (isArray(dtotable[eachparm])) { // now convert it back to right form
                                dtoobj[eachparm] = []
                                dtoobj[eachparm].push(tempobj)
                            } else {
                                dtoobj[eachparm] = tempobj
                            }
                            //dtoobj[eachparm]=recursestring(dtoobj[eachparm])
                            proxyprinttodiv("getdtoobject is obj dtoobj.command.dtolist", dtoobj.command.dtolist, 98);
                        }
                    } else { // if not object then 
                        dtoobj[eachparm] = "string";
                        //dtoobj[eachparm]=recursestring(dtoobj[eachparm])
                    }
                    dtoobj[eachparm] = recursestring(dtoobj[eachparm])
                    proxyprinttodiv("getdtoobject is obj dtoobj end--each", dtoobj[eachparm], 98);
                } // for eachparm

                proxyprinttodiv("getdtoobject is obj inobj", inobj, 98);
                proxyprinttodiv("getdtoobject is obj dtoobj end", dtoobj, 98);

                if (!dtoobj.command) {
                    dtoobj.command = {}
                }
                if (!dtoobj.command.dtolist) {
                    dtoobj.command.dtolist = {}
                }
                if (dtolist) {
                    dtoobj.command.dtolist = extend(true, dtoobj.command.dtolist, dtolist)
                }

                //if (!dtoobj.command.inherit) {dtoobj.command.inherit = []}
                // if (inheritlist) {
                //     for (var eachinherit in inheritlist) {
                //         dtoobj.command.inherit.push(inheritlist[eachinherit])
                //     }
                // }

                proxyprinttodiv("In GetDTOObject before return -- we created dto -- :", dtoobj, 98);

                return dtoobj;
            } // else
        } // end fn recurse

        function createdtotable(mm, dtoobject) {
            proxyprinttodiv("getdtoobject createdtotable -- dtoobject", dtoobject, 38);
            proxyprinttodiv("getdtoobject createdtotable -- mm", mm, 38);

            // if we are missing dto object, command, and dtotype create them
            if (!dtoobject) {
                dtoobject = {};
            }

            //if (dtoobject.command.dtolist === undefined) {
            //proxyprinttodiv("getdtoobject createdtotable -- dtoobject.command.dtolist ", dtoobject.command.dtolist, 38);

            if ((dtoobject.command) && (dtoobject.command.dtolist) && (Object.keys(dtoobject.command.dtolist).length > 0)) {
                proxyprinttodiv("getdtoobject dtoobject.command.dtolist -- ", dtoobject.command.dtolist, 38);
                for (var eachparam in dtoobject.command.dtolist) {
                    proxyprinttodiv("getdtoobject createdtotable eachparam -- ", eachparam, 38);
                    if (isObject(dtoobject[eachparam])) {
                        createdtotable(eachparam, dtoobject[eachparam]);
                        dtotable[eachparam] = dtoobject[eachparam]
                        proxyprinttodiv("getdtoobject createdtotable dtoobject[eachparam] -- ", dtoobject[eachparam], 38);
                        proxyprinttodiv("getdtoobject createdtotable dtotable -- ", dtotable, 38);
                    }
                }
            }

            //dtoobject=recursestring(dtoobject);

            if (!dtotable[mm] && Object.keys(dtoobject).length > 0) {
                dtotable[mm] = dtoobject;
            }
            proxyprinttodiv("getdtoobject createdtotable -- dtotable ", dtotable, 38);
        }

        callback({}, recurseobj(obj))
    } //end fn recurseobjcontainer



    var obj = {
        "wid": "wid1",
        "metadata.method": "authordto",
        "authordto.authordto.authordto.name": "sammysample"
    };
    var dtotable = {
        "authordto": {
            "name": "string",
            "wid": "string",
            "metadata": {
                "method": "string",
                "authordto": {
                    "type": "manytomany"
                }
            },
            "command": {

                "deepdtolist": {
                    "authordto": "manytomany",
                    "systemdto": "onetoone"
                },
                "dtolist": {
                    "authordto": "manytomany",
                    "systemdto": "onetoone"
                }
            },
            "systemdto": {
                "command": {
                    "dtolist": {}
                }
            }
        }
    }

    obj = ConvertFromDOTdri(obj);
    recurseobjcontainer(obj, dtotable, function (err, res) {
        callback(err, res)

    });
}

/*
        empty dtotable from rrr5
    */
exports.rrr6 = rrr6 = function rrr6(params, callback) {
    var obj = {
        "wid": "wid1",
        "metadata": {
            "method": "authordto",
            "authordto": {
                "type": "onetoone"
            }
        },
        "authordto": {
            "wid": "1",
            "metadata": {
                "method": "authordto",
                "authordto": {
                    "type": "onetoone"
                }
            },
            "authordto": {
                "wid": "3",
                "metadata": {
                    "method": "authordto",
                    "authordto": {
                        "type": "onetoone"
                    }
                },
                "authordto": {
                    "name": "sammysample",
                    "wid": "5",
                    "metadata": {
                        "method": "authordto"
                    }
                }
            }
        }
    };

    var dtotable = {}

    recurseobjcontainer(obj, dtotable, callback);
}


exports.manytomanytest = manytomanytest = function manytomanytest(params, callback) {
    execute([{
            "executethis": "addwidmaster",
            "wid": "authordto",
            "metadata.method": "authordto",
            "age": "string"
        }, {
            "executethis": "addwidmaster",
            "wid": "bookdto",
            "metadata.method": "bookdto",
            "title": "string"
        }, {
            "executethis": "addwidmaster",
            "wid": "rel_author_book",
            "metadata.method": "relationshipdto",
            "relationshiptype": "attributes",
            "linktype": "manytomany",
            "primarywid": "authordto",
            "primarymethod": "authordto",
            "secondarywid": "bookdto",
            "secondarymethod": "bookdto"
        }, {
            "executethis": "addwidmaster",
            "wid": "author1",
            "metadata.method": "authordto",
            "name": "Author1",
            "bookdto.0.title": "Author1 Book1"
        }, {
            "executethis": "addwidmaster",
            "wid": "author2",
            "metadata.method": "authordto",
            "name": "Author2",
            "bookdto.0.title": "Author2 Book1",
            "bookdto.1.title": "Author2 Book2"
        }, {
            "executethis": "addwidmaster",
            "wid": "author3",
            "metadata.method": "authordto",
            "name": "Author3",
            "bookdto.0.title": "Author3 Book1",
            "bookdto.1.title": "Author3 Book2",
            "bookdto.2.title": "Author3 Book3"
        }],
        function (err, res) {
            proxyprinttodiv("manytomanytest addwidmaster result: ", res, 99);
            debuglevel = 38;
            execute([{
                "executethis": "getwidmaster",
                "wid": "author1"
            }, {
                "executethis": "getwidmaster",
                "wid": "author2"
            }, {
                "executethis": "getwidmaster",
                "wid": "author3"
            }], function (err, res1) {
                proxyprinttodiv("manytomanytest getwidmaster result: ", res1, 99);
                callback(err, res1);
            });
        });
}

/*
        authortoauthor test
    */
exports.authortoauthortest = authortoauthortest = function authortoauthortest(params, callback) {
    execute([{
            "executethis": "addwidmaster",
            "wid": "authordto",
            "metadata.method": "authordto",
            "name": "string",
            "metadata.authordto.type": "onetoone"
        }, { //authordto - authordto
            "executethis": "addwidmaster",
            "wid": "rel_author_author",
            "metadata.method": "relationshipdto",
            "relationshiptype": "attributes",
            "linktype": "onetoone",
            "primarywid": "authordto",
            "primarymethod": "authordto",
            "secondarywid": "authordto",
            "secondarymethod": "authordto"
        }, {
            "executethis": "addwidmaster",
            "wid": "wid1",
            "metadata.method": "authordto",
            "name": "author1",
            "authordto.authordto.authordto.name": "authortoauthor1"
        }],
        function(err, res) {
            proxyprinttodiv('authortoauthortest addwidmaster result: ', res, 99);

            //debuglevel = 38;
            execute({
                "executethis": "getwidmaster",
                "wid": "wid1"
            }, function(err, res1) {
                proxyprinttodiv("authortoauthortest getwidmaster result: ", res1, 99);
                callback(err, res);
            });
        });
}

exports.authortoauthortesto = authortoauthortesto = function authortoauthortesto(params, callback) {
    //debuglevel=38
    execute([{
            "executethis": "addwidmaster",
            "wid": "authordto",
            "metadata.method": "authordto",
            "name": "string",
            "metadata.authordto.type": "onetomany"
        }, { //authordto - authordto
            "executethis": "addwidmaster",
            "wid": "rel_author_author",
            "metadata.method": "relationshipdto",
            "relationshiptype": "attributes",
            "linktype": "onetomany",
            "primarywid": "authordto",
            "primarymethod": "authordto",
            "secondarywid": "authordto",
            "secondarymethod": "authordto"
        }, {
            "executethis": "addwidmaster",
            "wid": "wid1",
            "metadata.method": "authordto",
            "name": "author1",
            "authordto.authordto.authordto.name": "authortoauthor1"
        }],
        function(err, res) {
            proxyprinttodiv('authortoauthortest addwidmaster result: ', res, 99);

            debuglevel = 93;
            execute({
                "executethis": "getwidmaster",
                "wid": "wid1"
            }, function(err, res1) {
                proxyprinttodiv("authortoauthortest getwidmaster result: ", res1, 99);
                callback(err, res);
            });
        });
}



exports.authortoauthortestm = authortoauthortestm = function authortoauthortestm(params, callback) {
    execute([{
            "executethis": "addwidmaster",
            "wid": "authordto",
            "metadata.method": "authordto",
            "name": "string",
            "metadata.authordto.type": "manytomany"
        }, { //authordto - authordto
            "executethis": "addwidmaster",
            "wid": "rel_author_author",
            "metadata.method": "relationshipdto",
            "relationshiptype": "attributes",
            "linktype": "manytomany",
            "primarywid": "authordto",
            "primarymethod": "authordto",
            "secondarywid": "authordto",
            "secondarymethod": "authordto"
        }, {
            "executethis": "addwidmaster",
            "wid": "wid1",
            "metadata.method": "authordto",
            "name": "author1",
            "authordto.authordto.authordto.name": "authortoauthor1"
        }],
        function(err, res) {
            proxyprinttodiv('authortoauthortest addwidmaster result: ', res, 99);

            debuglevel = 38;
            execute({
                "executethis": "getwidmaster",
                "wid": "wid1"
            }, function(err, res1) {
                proxyprinttodiv("authortoauthortest getwidmaster result: ", res1, 99);
                callback(err, res);
            });
        });
}

/*
        addwidmaster ex-17-data
    */
exports.addwidmasterex17data = addwidmasterex17data = function addwidmasterex17data(params, callback) {
    execute([{
        "executethis": "addwidmaster",
        "wid": "ex-17-data",
        "html": "Wow...here is some HTML from a button click on ex-17-html",
        "addthis.command.htmltargetid": "putithere"
    }, {
        "executethis": "addwidmaster",
        "wid": "ex-17-data",
        "html": "Wow...here is some HTML from a button click on ex-17-html",
        "addthis.command.htmltargetid": "putithere"
    }, {
        "executethis": "addwidmaster",
        "wid": "ex-17-data",
        "html": "Wow...here is some HTML from a button click on ex-17-html",
        "addthis.command.htmltargetid": "putithere"
    }, {
        "executethis": "getwidmaster",
        "wid": "ex-17-data"
    }], function (err, res1) {
        proxyprinttodiv("addwidmasterex17data result: ", res1, 99);
        callback(err, res1);
    });
}


/*
        addwidmaster blank guid
    */
exports.addwidmasterblankguid = addwidmasterblankguid = function addwidmasterblankguid(params, callback) {
    execute([{
        "executethis": "addwidmaster",
        "wid": "authordto",
        "metadata.method": "authordto",
        "name": "string",
        "g1": "guid"
    }, {
        "executethis": "addwidmaster",
        "wid": "addwidmasterblankguid",
        "name": "Author1"
    }, {
        "executethis": "getwidmaster",
        "wid": "addwidmasterblankguid"
    }], function (err, res1) {
        proxyprinttodiv("addwidmasterblankguid result: ", res1, 99);
        callback(err, res1);
    });
}

/*
        addwid with no data,, no command.inherit.data
    */
exports.etaddwidtest8 = etaddwidtest8 = function etaddwidtest8(parameters, callback) {
    debuglevel = 17;
    eventappinstall();

    execute([{
        "executethis": "updatewid",
        "wid": "wid1",
        "addthis.command": {
            "inherit": {}
        }
    }], function (err, res1) {
        var inputdto = {
            "wid": "string",
            "a": "string",
            "b": "string",
            "c": "string",
            "d": "string",
            "e": "string",
            "metadata": {
                "method": "string"
            }
        };

        var inputobject = {
            "wid": "wid1",
            "a": "1",
            "b": "2",
            "c": "3",
            "d": "4",
            "e": "5",
            "metadata": {
                "method": "authordto"
            }
        };

        var command = {};

        addwid(inputobject, inputdto, command, function (err, res) {
            proxyprinttodiv("res --", res, 17);
            var actual_result = res;
            proxyprinttodiv("actual_result --", actual_result, 17);

            var expected_result = [{
                "data": {
                    "a": "1",
                    "b": "2",
                    "c": "3",
                    "d": "4",
                    "e": "5"
                },
                "wid": "wid1",
                "metadata": {
                    "method": "authordto",
                    "date": "2014-04-05T10:43:31.375Z"
                }
            }];
            proxyprinttodiv("expected_result --", expected_result, 17);

            res = logverify("logverify", actual_result, expected_result);
            callback(err, res);
        });
    });
}

/*
        addwid with data,, no command.inherit.data
    */
exports.etaddwidtest9 = etaddwidtest9 = function etaddwidtest9(parameters, callback) {
    debuglevel = 17;
    eventappinstall();

    execute([{
        "executethis": "updatewid",
        "wid": "wid1",
        "d": "44",
        "f": "6",
        "addthis.command": {
            "inherit": {}
        }
    }], function (err, res1) {
        var inputdto = {
            "wid": "string",
            "a": "string",
            "b": "string",
            "c": "string",
            "d": "string",
            "e": "string",
            "metadata": {
                "method": "string"
            }
        };

        var inputobject = {
            "wid": "wid1",
            "a": "1",
            "b": "2",
            "c": "3",
            "d": "4",
            "e": "5",
            "metadata": {
                "method": "authordto"
            }
        };

        var command = {};

        addwid(inputobject, inputdto, command, function (err, res) {
            proxyprinttodiv("res --", res, 17);
            var actual_result = res;
            proxyprinttodiv("actual_result --", actual_result, 17);

            var expected_result = [{
                "data": {
                    "a": "1",
                    "b": "2",
                    "c": "3",
                    "d": "4",
                    "e": "5"
                },
                "wid": "wid1",
                "metadata": {
                    "method": "authordto",
                    "date": "2014-04-05T10:43:31.375Z"
                }
            }];
            proxyprinttodiv("expected_result --", expected_result, 17);

            res = logverify("logverify", actual_result, expected_result);
            callback(err, res);
        });
    });
}

/*
        addwid with no data,, with command.inherit.data
    */
exports.etaddwidtest10 = etaddwidtest10 = function etaddwidtest10(parameters, callback) {
    debuglevel = 17;
    eventappinstall();

    execute([{
        "executethis": "updatewid",
        "wid": "wid1",
        "addthis.command": {
            "inherit": {
                "data": {
                    "c": "99",
                    "e": "98",
                    "g": "7"
                }
            }
        }
    }], function (err, res1) {
        var inputdto = {
            "wid": "string",
            "a": "string",
            "b": "string",
            "c": "string",
            "d": "string",
            "e": "string",
            "metadata": {
                "method": "string"
            }
        };

        var inputobject = {
            "wid": "wid1",
            "a": "1",
            "b": "2",
            "c": "3",
            "d": "4",
            "e": "5",
            "metadata": {
                "method": "authordto"
            }
        };

        var command = {};

        addwid(inputobject, inputdto, command, function (err, res) {
            proxyprinttodiv("res --", res, 17);
            var actual_result = res;
            proxyprinttodiv("actual_result --", actual_result, 17);

            var expected_result = [{
                "data": {
                    "a": "1",
                    "b": "2",
                    "c": "3",
                    "d": "4",
                    "e": "5"
                },
                "wid": "wid1",
                "metadata": {
                    "method": "authordto",
                    "date": "2014-04-05T10:43:31.375Z"
                }
            }];
            proxyprinttodiv("expected_result --", expected_result, 17);

            res = logverify("logverify", actual_result, expected_result);
            callback(err, res);
        });
    });
}

/*
        addwid with data,, with command.inherit.data
    */
exports.etaddwidtest11 = etaddwidtest11 = function etaddwidtest11(parameters, callback) {
    debuglevel = 17;
    eventappinstall();

    execute([{
        "executethis": "updatewid",
        "wid": "wid1",
        "d": "44",
        "f": "6",
        "addthis.command": {
            "inherit": {
                "data": {
                    "c": "99",
                    "e": "5",
                    "g": "7"
                }
            }
        }
    }], function (err, res1) {
        var inputdto = {
            "wid": "string",
            "a": "string",
            "b": "string",
            "c": "string",
            "d": "string",
            "e": "string",
            "metadata": {
                "method": "string"
            }
        };

        var inputobject = {
            "wid": "wid1",
            "a": "1",
            "b": "2",
            "c": "3",
            "d": "4",
            "e": "5",
            "metadata": {
                "method": "authordto"
            }
        };

        var command = {};

        addwid(inputobject, inputdto, command, function (err, res) {
            proxyprinttodiv("res --", res, 17);
            var actual_result = res;
            proxyprinttodiv("actual_result --", actual_result, 17);

            var expected_result = [{
                "data": {
                    "a": "1",
                    "b": "2",
                    "c": "3",
                    "d": "4",
                    "e": "5"
                },
                "wid": "wid1",
                "metadata": {
                    "method": "authordto",
                    "date": "2014-04-05T10:43:31.375Z"
                }
            }];
            proxyprinttodiv("expected_result --", expected_result, 17);

            res = logverify("logverify", actual_result, expected_result);
            callback(err, res);
        });
    });
}

/*
        To add wid to db(default "data")
    */
exports.etaddwidtodbdata = etaddwidtodbdata = function etaddwidtodbdata(parameters, callback) {
    //debuglevel = 17;
    //eventappinstall();

    execute([{
            "executethis": "addwidmaster",
            "wid": "sounddto",
            "metadata.method": "sounddto",
            "note": "string"
        }, {
            "executethis": "getwidmaster",
            "wid": "sounddto"
        }, {
            "executethis": "addwidmaster",
            "wid": "wid1",
            "d": "44",
            "f": "6",
            "command": {
                "db": "data"
            }
        }, {
            "executethis": "addwidmaster",
            "wid": "wid2",
            "d": "444",
            "f": "66",
            "command": {
                "db": "test"
            }
        }, {
            "executethis": "addwidmaster",
            "wid": "wid3",
            "d": "4444",
            "f": "666",
            "command": {
                "collection": "othercollection"
            }
        }, {
            "executethis": "getwidmaster",
            "wid": "wid1",
            "command": {
                "db": "data"
            }
        }, {
            "executethis": "getwidmaster",
            "wid": "wid2",
            "command": {
                "db": "test"
            }
        }, {
            "executethis": "getwidmaster",
            "wid": "wid3",
            "command": {
                "collection": "othercollection"
            }
        }],
        function (err, res) {
            callback(err, res);
            proxyprinttodiv("res -- add", res, 17);
        });
}



// These are the add/get tests to stress out the dto/dot notation system
//exports.ettestagtt = ettestagtt = function ettestagtt(params, callback) {
exports.ettestagtt = widtests.ettestagtt = ettestagtt = function ettestagtt(params, callback) {

    // execute([{
    //         "executethis": "ettestag1"
    //     }, {
    //         "executethis": "ettestag2"
    //     }, {
    //         "executethis": "ettestag3"
    //     }],
    //     function (err, res) {
    //         callback(err, res);
    //     }
    // );(())

    var result = [];
    var err;

    ettestag1(result, function(err, r1) {
        result.push(r1);
        ettestag2(result, function(err, r2) {
            result.push(r2);
            ettestag3(result, function(err, r3) {
                result.push(r3);
                callback(err, result);
            });
        });
    });
};
widtests.ettestagtt.category = "daily";
widtests.ettestagtt.subcategory = "push";
widtests.ettestagtt.js = exports.ettestagtt;
widtests.ettestagtt.description = "this does a test";


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
widtests.ettestag3v2.category = "daily";
widtests.ettestag3v2.subcategory = "push";
widtests.ettestag3v2.js = exports.ettestag3v2;
widtests.ettestag3v2.description = "this does a test";


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
widtests.ettest1dot3dot.category = "daily";
widtests.ettest1dot3dot.subcategory = "push";
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
widtests.ettest3dot3dot.category = "daily";
widtests.ettest3dot3dot.subcategory = "push";
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
widtests.ettest3dot1dot.category = "daily";
widtests.ettest3dot1dot.subcategory = "push";
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
widtests.ettest1dot1dot.category = "daily";
widtests.ettest1dot1dot.subcategory = "push";
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
widtests.ettest1dot3dotjsonmany.category = "daily";
widtests.ettest1dot3dotjsonmany.subcategory = "push";
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
widtests.ettest3dot3dotjsonmany.category = "daily";
widtests.ettest3dot3dotjsonmany.subcategory = "push";
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
widtests.ettest3dot1dotjsonmany.category = "daily";
widtests.ettest3dot1dotjsonmany.subcategory = "push";
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
widtests.ettest1dot1dotjsonmany.category = "daily";
widtests.ettest1dot1dotjsonmany.subcategory = "push";
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
widtests.ettest1dot3dotjsonone.category = "daily";
widtests.ettest1dot3dotjsonone.subcategory = "push";
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
widtests.ettest3dot3dotjsonone.category = "daily";
widtests.ettest3dot3dotjsonone.subcategory = "push";
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
widtests.ettest3dot1dotjsonone.category = "daily";
widtests.ettest3dot1dotjsonone.subcategory = "push";
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
widtests.ettest1dot1dotjsonone.category = "daily";
widtests.ettest1dot1dotjsonone.subcategory = "push";
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
widtests.ettest1dot3dotobject.category = "daily";
widtests.ettest1dot3dotobject.subcategory = "push";
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
widtests.ettest3dot3dotobject.category = "daily";
widtests.ettest3dot3dotobject.subcategory = "push";
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
widtests.ettest3dot1dotobject.category = "daily";
widtests.ettest3dot1dotobject.subcategory = "push";
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
widtests.ettest1dot1dotobject.category = "daily";
widtests.ettest1dot1dotobject.subcategory = "push";
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
widtests.ettestdot.category = "daily";
widtests.ettestdot.subcategory = "push";
widtests.ettestdot.js = exports.ettestdot;
widtests.ettestdot.description = "this does a test";


exports.addwid4params = widtests.addwid4params = addwid4params = function addwid4params(a, b, c, d, callback) {


    var paramsDataString = "{\"" + a + "\":\"" + a + "\",\"" + b + "\":\"" + b + "\",\"" + c + "\":\"" + c + "\",\"" + d + "\":\"" + d + "\"}";
    // alert(paramsDataString);
    var json = JSON.parse(paramsDataString);
    addwidmaster(json, callback);
}
widtests.addwid4params.category = "daily";
widtests.addwid4params.subcategory = "push";
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
widtests.ettss1.category = "daily";
widtests.ettss1.subcategory = "push";
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
widtests.ett1.category = "daily";
widtests.ett1.subcategory = "push";
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
widtests.ett2.category = "daily";
widtests.ett2.subcategory = "push";
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
widtests.ett3.category = "daily";
widtests.ett3.subcategory = "push";
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
widtests.etadd01.category = "daily";
widtests.etadd01.subcategory = "push";
widtests.etadd01.js = exports.etadd01;
widtests.etadd01.description = "this does a test";


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
widtests.etadd01.category = "daily";
widtests.etadd01.subcategory = "push";
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
widtests.etadd0.category = "daily";
widtests.etadd0.subcategory = "push";
widtests.etadd0.js = exports.etadd0;
widtests.etadd0.description = "this does a test";


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
widtests.etaddwidtest2.category = "daily";
widtests.etaddwidtest2.subcategory = "push";
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
widtests.etaddwidtest3.category = "daily";
widtests.etaddwidtest3.subcategory = "push";
widtests.etaddwidtest3.js = exports.etaddwidtest3;
widtests.etaddwidtest3.description = "this does a test";

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
widtests.etaddwidtest5.category = "daily";
widtests.etaddwidtest5.subcategory = "push";
widtests.etaddwidtest5.js = exports.etaddwidtest5;
widtests.etaddwidtest5.description = "this does a test";


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
widtests.etadd2.category = "daily";
widtests.etadd2.subcategory = "push";
widtests.etadd2.js = exports.etadd2;
widtests.etadd2.description = "this does a test";


exports.etget1 = widtests.etget1 = etget1 = function etget1(parameters, callback) {
    debuglevel = 17;
    eventappinstall();
    var executeList = [{
            "executethis": "updatewid",
            "metadata.method": "authordto",
            "wid": "authordto",
            "name": "string",
            "age": "string",
            "a": "string",
            "b": "string",
            "metdata.bookdto.type": "onetomany",
            "metadata.inherit": "defaultauthordtoactions"
        }, {
            "executethis": "updatewid",
            "metadata.method": "authordto",
            "wid": "defaultauthordtoactions",
            "a": "adefault",
            "b": "BDEFAULT"
        }, {
            "executethis": "updatewid",
            "metadata.method": "bookdto",
            "wid": "defaultbookdtoactions",
            "c": "cdefault",
            "d": "dDEFAULT"
        }, {
            "executethis": "updatewid",
            "metadata.method": "bookdto",
            "wid": "bookdto",
            "title": "string",
            "pages": "string",
            "c": "string",
            "d": "string",
            "metadata.inherit": "defaultbookdtoactions"
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
        }, {
            "executethis": "updatewid",
            "metadata.method": "bookdto",
            "wid": "222",
            "title": "The X Factor",
            "pages": "300"
        }, {
            "executethis": "updatewid",
            "metadata.method": "relationshipdto",
            "wid": "rel111",
            "primarywid": "elizabeth_heart",
            "secondarywid": "222",
            "relationshiptype": "attributes"
        }
        //{"executethis":"getwidmaster","wid":"elizabeth_heart"}
    ];

    execute(executeList, function(err, res) {
        proxyprinttodiv('__--__', res, 17);
        //callback(err, res);

        var widInput = "elizabeth_heart";
        var command = {
            "convertmethod": "dto"
        };
        var preamble = "";
        var level = "";

        getWidMongo(widInput, command, preamble, level, null, function(err, res) {
            proxyprinttodiv('__--__', res, 17);
            //callback(err, res);

            widInput = "authordto";
            getWidMongo(widInput, command, preamble, level, null, function(err, res) {
                proxyprinttodiv('__--__', res, 17);
                //callback(err, res);


                widInput = "bookdto";
                getWidMongo(widInput, command, preamble, level, null, function(err, res) {


                    proxyprinttodiv("res --", res, 17);
                    var actual_result = [res];
                    proxyprinttodiv("actual_result --", actual_result, 17);

                    var expected_result = [{
                        "result": "getWidMongo"
                    }];
                    proxyprinttodiv("expected_result --", expected_result, 17);

                    res = logverify("logverify", actual_result, expected_result);
                    callback(null, res);

                });
            });
        });
    });
}
widtests.etget1.category = "daily";
widtests.etget1.subcategory = "push";
widtests.etget1.js = exports.etget1;
widtests.etget1.description = "this does a test";

exports.etget3 = widtests.etget3 = etget3 = function etget3(parameters, callback) {
    debuglevel = 17;
    eventappinstall();
    var executeList = [{
        "executethis": "updatewid",
        "metadata.method": "authordto",
        "wid": "authordto",
        "name": "string",
        "age": "string",
        "a": "string",
        "b": "string",
        "metadata.bookdto.type": "onetomany",
        "metadata.inherit": "defaultauthordtoactions"
    }, {
        "executethis": "updatewid",
        "metadata.method": "authordto",
        "wid": "defaultauthordtoactions",
        "a": "adefault",
        "b": "BDEFAULT"
    }, {
        "executethis": "updatewid",
        "metadata.method": "bookdto",
        "wid": "defaultbookdtoactions",
        "c": "cdefault",
        "d": "dDEFAULT"
    }, {
        "executethis": "updatewid",
        "metadata.method": "bookdto",
        "wid": "bookdto",
        "title": "string",
        "pages": "string",
        "c": "string",
        "d": "string",
        "metadata.inherit": "defaultbookdtoactions"
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
    }, {
        "executethis": "updatewid",
        "metadata.method": "bookdto",
        "wid": "222",
        "title": "The X Factor",
        "pages": "300"
    }, {
        "executethis": "updatewid",
        "metadata.method": "relationshipdto",
        "wid": "rel111",
        "primarywid": "elizabeth_heart",
        "secondarywid": "222",
        "relationshiptype": "attributes"
    }, {
        "executethis": "getwidmaster",
        "wid": "authordto",
        "command.convertmethod": "dto",
        "command.execute": "ConvertFromDOTdri"
    }]

    // result is :
    //{"name":"string","age":"string","a":"string","b":"string","wid":"authordto",
    //"metadata":{"method":"authordto","bookdto":{"type":"onetomany"},"inherit":"defaultauthordtoactions"},
    //"command":{"inherit":{"defaultbookdtoactions":"defaultbookdtoactions","defaultauthordtoactions":"defaultauthordtoactions"},
    //          "deepdtolist":{"bookdto":"onetomany","authordto":"authordto"},
    //          "dtolist":{"bookdto":"bookdto"}},
    //"bookdto":{"title":"string","pages":"string","c":"string","d":"string","wid":"bookdto",
    //          "metadata":{"method":"bookdto","inherit":"defaultbookdtoactions"},
    //          "command":{"inherit":{"defaultbookdtoactions":"defaultbookdtoactions"},
    //                  "deepdtolist":{"bookdto":"bookdto"},
    //                   "dtolist":{}}}}

    execute(executeList, function(err, res) {
        proxyprinttodiv("res --", res, 17);
        var actual_result = res[7];
        proxyprinttodiv("actual_result --", actual_result, 17);

        var expected_result = [{
            "data": {
                "primarywid": "elizabeth_heart",
                "secondarywid": "222",
                "relationshiptype": "attributes"
            },
            "wid": "rel111",
            "metadata": {
                "method": "relationshipdto",
                "date": "2014-03-19T11:08:51.453Z"
            }
        }];
        proxyprinttodiv("expected_result --", expected_result, 17);

        res = logverify("logverify", actual_result, expected_result);
        callback(err, res);
    });
}
widtests.etget3.category = "daily";
widtests.etget3.subcategory = "push";
widtests.etget3.js = exports.etget3;
widtests.etget3.description = "this does a test";

exports.etget2 = widtests.etget2 = etget2 = function etget2(parameters, callback) {
    debuglevel = 17;
    // Setup test
    eventappinstall();

    var executeList = [
        // Trying to do three levels here Authors --> Books --> Pages
        // author dto
        {
            "executethis": "updatewid",
            "metadata.method": "authordto",
            "wid": "authordto",
            "name": "string",
            "age": "string",
            "a": "string",
            "b": "string",
            "metdata.bookdto.type": "onetomany",
            "metadata.inherit": "x"
        }, {
            "executethis": "updatewid",
            "metadata.method": "",
            "wid": "x",
            "a": "adefault",
            "b": "BDEFAULT",
            "bookdto.orphan_data": "Hey this works"
        },
        //{"executethis":"updatewid","metadata.method":"","wid":"defaultauthordtoactions","a":"adefault","b":"BDEFAULT", "bookdto.orphan_data":"Hey this works"},

        // book dto
        {
            "executethis": "updatewid",
            "metadata.method": "bookdto",
            "wid": "bookdto",
            "title": "string",
            "titleb": "string",
            "pages": "string",
            "c": "string",
            "d": "string",
            "orphan_data": "string",
            "metdata.pagedto.type": "onetomany",
            "metadata.inherit": "defaultbookdtoactions"
        }, {
            "executethis": "updatewid",
            "metadata.method": "bookdto",
            "wid": "defaultbookdtoactions",
            "c": "cdefault",
            "d": "dDEFAULT"
        },

        // page dto
        {
            "executethis": "updatewid",
            "metadata.method": "pagedto",
            "wid": "pagedto",
            "content": "string",
            "number": "string",
            "metadata.inherit": "defaultpagecontent"
        }, {
            "executethis": "updatewid",
            "metadata.method": "pagedto",
            "wid": "defaultpagecontent",
            "content": "This page is blank",
            "number": "0"
        },

        // relationships
        {
            "executethis": "updatewid",
            "metadata.method": "relationshipdto",
            "wid": "relbooktoauthor",
            "primarywid": "authordto",
            "secondarywid": "bookdto",
            "relationshiptype": "attributes"
        }, {
            "executethis": "updatewid",
            "metadata.method": "relationshipdto",
            "wid": "relpagetobook",
            "primarywid": "bookdto",
            "secondarywid": "pagedto",
            "relationshiptype": "attributes"
        }, {
            "executethis": "updatewid",
            "metadata.method": "relationshipdto",
            "wid": "rel111",
            "primarywid": "elizabeth_heart",
            "secondarywid": "XFactorBook",
            "relationshiptype": "attributes"
        },

        // records
        {
            "executethis": "updatewid",
            "metadata.method": "authordto",
            "wid": "elizabeth_heart",
            "name": "Elizabeth Heart",
            "age": "50"
        }, {
            "executethis": "updatewid",
            "metadata.method": "bookdto",
            "wid": "XFactorBook",
            "title": "The X Factor",
            "pages": "300"
        },

        // get
        {
            "executethis": "getwidmaster",
            "wid": "elizabeth_heart"
        }
    ];

    // alert(JSON.stringify(executeList));    
    execute(executeList, function(err, res) {
        proxyprinttodiv("res --", res, 17);
        var actual_result = res[11];
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
widtests.etget2.category = "daily";
widtests.etget2.subcategory = "push";
widtests.etget2.js = exports.etget2;
widtests.etget2.description = "this does a test";

exports.etget11 = widtests.etget11 = etget11 = function etget11(parameters, callback) {
    debuglevel = 17;
    // Setup test
    eventappinstall();

    var executeList = [
        // Trying to do three levels here Authors --> Books --> Pages
        // author dto
        {
            "executethis": "addwidmaster",
            "metadata.method": "authordto",
            "wid": "authordto",
            "name": "string",
            "age": "string",
            "a": "string",
            "b": "string",
            "metdata.bookdto.type": "onetomany",
            "metadata.inherit": "x"
        }, {
            "executethis": "addwidmaster",
            "metadata.method": "",
            "wid": "x",
            "a": "adefault",
            "b": "BDEFAULT",
            "bookdto.orphan_data": "Hey this works"
        },
        //{"executethis":"addwidmaster","metadata.method":"","wid":"defaultauthordtoactions","a":"adefault","b":"BDEFAULT", "bookdto.orphan_data":"Hey this works"},

        // book dto
        {
            "executethis": "addwidmaster",
            "metadata.method": "bookdto",
            "wid": "bookdto",
            "title": "string",
            "titleb": "string",
            "pages": "string",
            "c": "string",
            "d": "string",
            "orphan_data": "string",
            "metdata.pagedto.type": "onetomany",
            "metadata.inherit": "defaultbookdtoactions"
        }, {
            "executethis": "addwidmaster",
            "metadata.method": "bookdto",
            "wid": "defaultbookdtoactions",
            "c": "cdefault",
            "d": "dDEFAULT"
        },

        // page dto
        {
            "executethis": "addwidmaster",
            "metadata.method": "pagedto",
            "wid": "pagedto",
            "content": "string",
            "number": "string",
            "metadata.inherit": "defaultpagecontent"
        }, {
            "executethis": "addwidmaster",
            "metadata.method": "pagedto",
            "wid": "defaultpagecontent",
            "content": "This page is blank",
            "number": "0"
        },

        // relationships
        {
            "executethis": "addwidmaster",
            "metadata.method": "relationshipdto",
            "wid": "relbooktoauthor",
            "primarywid": "authordto",
            "secondarywid": "bookdto",
            "relationshiptype": "attributes"
        }, {
            "executethis": "addwidmaster",
            "metadata.method": "relationshipdto",
            "wid": "relpagetobook",
            "primarywid": "bookdto",
            "secondarywid": "pagedto",
            "relationshiptype": "attributes"
        }, {
            "executethis": "addwidmaster",
            "metadata.method": "relationshipdto",
            "wid": "rel111",
            "primarywid": "elizabeth_heart",
            "secondarywid": "XFactorBook",
            "relationshiptype": "attributes"
        },

        // records
        {
            "executethis": "addwidmaster",
            "metadata.method": "authordto",
            "wid": "elizabeth_heart",
            "name": "Elizabeth Heart",
            "age": "50"
        }, {
            "executethis": "addwidmaster",
            "metadata.method": "bookdto",
            "wid": "XFactorBook",
            "title": "The X Factor",
            "pages": "300"
        },

        // get
        {
            "executethis": "getwidmaster",
            "wid": "elizabeth_heart"
        }
    ];


    execute(executeList, function(err, res) {
        proxyprinttodiv("res --", res, 17);
        var actual_result = res[11];
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
    //         {"executethis":"addwidmaster","metadata.method":"pagedto","wid":"defaultpagecontent","content":"This page is blank","number":"0"},

    //         // relationships
    //         {"executethis":"addwidmaster","metadata.method":"relationshipdto","wid":"relbooktoauthor","primarywid":"authordto","secondarywid":"bookdto", "relationshiptype":"attributes"},
    //         {"executethis":"addwidmaster","metadata.method":"relationshipdto","wid":"relpagetobook","primarywid":"bookdto","secondarywid":"pagedto", "relationshiptype":"attributes"},
    //         {"executethis":"addwidmaster","metadata.method":"relationshipdto","wid":"rel111","primarywid":"elizabeth_heart","secondarywid":"XFactorBook", "relationshiptype":"attributes"},

    //         // records
    //         {"executethis":"addwidmaster","metadata.method":"authordto","wid":"elizabeth_heart","name":"Elizabeth Heart","age":"50"},
    //         {"executethis":"addwidmaster","metadata.method":"bookdto","wid":"XFactorBook","title":"The X Factor","pages":"300"},

    //         // get
    //         {"executethis":"getwidmaster","wid":"elizabeth_heart"}
    //     ];

    //     // alert(JSON.stringify(executeList));    
    //     execute(executeList, function (err, res) {
    //         proxyprinttodiv('__--__', res[11], 17);
    //         callback(err, res);
    //     });
}
widtests.etget11.category = "daily";
widtests.etget11.subcategory = "push";
widtests.etget11.js = exports.etget11;
widtests.etget11.description = "this does a test";


//exports.ettestag11 = ettestag11 = function ettestag11(params, callback) {
exports.ettestag11 = widtests.ettestag11 = ettestag11 = function ettestag11(parameters, callback) {

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
            "executethis": "first_wid"
        }, {
            "executethis": "second_wid"
        }, {
            "executethis": "third_wid"
        }],
        function(err, res) {

            console.log('Function ag11 result\n' + JSON.stringify(res, '-', 4));

            // res = logverify("ettestag11_result", res[3], [{
            //     "data_1": "Red",
            //     "wid": "first_wid",
            //     "metadata": {}
            // }]);

            // res = logverify("ettestag11_result", res[4], [{
            //     "data_2": "Green",
            //     "wid": "second_wid",
            //     "metadata": {}
            // }]);

            res = logverify("ettestag11_result", res[4], [{
                "0": {
                    "data_2": "Green",
                    "wid": "second_wid",
                    "metadata": {}
                }
            }])

            // res = logverify("ettestag11_result", res[5], [{
            //     "data_3": "Blue",
            //     "wid": "third_wid",
            //     "metadata": {}
            // }]);

            callback(err, res);
        });
};
widtests.ettestag11.category = "daily";
widtests.ettestag11.subcategory = "push";
widtests.ettestag11.js = exports.ettestag11;
widtests.ettestag11.description = "this does a test";

//exports.ettestag12 = ettestag12 = function ettestag12(params, callback) {


// This will test the ability to write a dto to the db and retrieve it

//exports.ettestag1 = ettestag1 = function ettestag1(params, callback) {
exports.ettestag1 = widtests.ettestag1 = ettestag1 = function ettestag1(params, callback) {
        proxyprinttodiv("Ag1  params HI!!! ", params, 99);
//        callback(null, null);
    var executeobject = 
        [
            {
                "executethis": "addwidmaster",
                "wid": "sounddto",
                "metadata.method": "sounddto",
                "note": "string"
            }
            ,
            {
                  "executethis": "getwidmaster",
                  "wid": "sounddto"
            }
        ];

    if (!params.command.environment) { params.command.environment = {run:{}}; }
    if (!params.command.environment.run) { params.command.environment.run = {}; }

    params.command.environment.run.executelevel=0;
    params.command.environment.syncrule = "sync_local";

    proxyprinttodiv("Ag1  params ", params, 99);

    var env = new DriEnvironment(params.command.environment);
    proxyprinttodiv("Ag1  env ", env, 99);
    env.execute(executeobject,
        function (err, res1) {
            proxyprinttodiv("Ag1  result ", res1, 99);
            // var res = res1[1]; //~~~ changed by SAURABH 
            var res = res1[1];

            proxyprinttodiv('Function ag1 expected res ', {
                "note": "string",
                "wid": "sounddto",
                "metadata": {
                    "method": "sounddto"
                }
            }, 99);
            proxyprinttodiv('Function ag1 actual result ', res, 99);
            res = logverify("ettestag1_result", res, {
                "wid": "sounddto",
                "metadata": {
                    "method": "sounddto",
                    "expirationdate":{"exception":["created","changed","unchanged","updated","deleted"]}
                },
                "note": "string"
            });

            callback(err, res);
        });
};
widtests.ettestag1.category = "daily";
widtests.ettestag1.subcategory = "push";
widtests.ettestag1.js = exports.ettestag1;
widtests.ettestag1.description = "this does a test";

exports.ettestag1s = widtests.ettestag1s = ettestag1s = function ettestag1s(params, callback) {
    var executeobject = {
            "executethis": "addwidmaster",
            "wid": "sounddto",
            "metadata.method": "sounddto",
            "note": "string"
        }
        executeobject.command={};
        executeobject.command.environment={};
        executeobject.command.environment.run={};
        executeobject.command.environment.run.executelevel=0;
        executeobject.command.environment.syncrule = "sync_server"
    proxyprinttodiv("Ag1  params ", params, 99);
    var env = new DriEnvironment(params.command.environment);
    proxyprinttodiv("Ag1  env ", env, 99);
    env.execute([executeobject, {
            "executethis": "getwidmaster",
            "wid": "sounddto"
        }],
        function(err, res1) {
            proxyprinttodiv("Ag1  result ", res1, 99);
            // var res = res1[1]; //~~~ changed by SAURABH 
            var res = res1[1];

            proxyprinttodiv('Function ag1 expected res ', {
                "note": "string",
                "wid": "sounddto",
                "metadata.method": "sounddto"
            }, 99);
            proxyprinttodiv('Function ag1 actual result ', res, 99);
            res = logverify("ettestag1_result", res, {
                "wid": "sounddto",
                "metadata": {
                    "method": "sounddto"
                },
                "note": "string"
            });

            callback(err, res);
        });
};

widtests.ettestag1s.category = "daily";
widtests.ettestag1s.subcategory = "push";
widtests.ettestag1s.js = exports.ettestag1;
widtests.ettestag1s.description = "this does a test";

//exports.ettestag1a = ettestag1a = function ettestag1a(params, callback) {
exports.ettestag1a = widtests.ettestag1a = ettestag1a = function ettestag1a(params, callback) {
    eventappinstall();

    debuglevel = 75;
    saveglobal("debugname", "updatewid");
    saveglobal("debugcat", "");
    debugsubcat = "";

    execute([{
            "executethis": "addwidmaster",
            "wid": "superhero",
            "name": "Nick"
        }, {
            "executethis": "updatewid",
            "wid": "superhero",
            "name": "Nick Fury"
        }, {
            "executethis": "getwidmaster",
            "wid": "superhero"
        }],
        function(err, res) {
            proxyprinttodiv('Function ag1 result ', res, 17);
            res = logverify("ettestag1a_result", res[2], {
                "name": "Nick Fury",
                "wid": "superhero",
                "metadata.method": ""
            });


            debugfn("updatewid code generator END", "updatewid", "add", "code", getglobal("debugcolor"), getglobal("debugindent"), {}, 5);
            saveglobal("debugname", "");
            saveglobal("debugcat", "");
            debugsubcat = "";

            callback(err, res);
        });
};
widtests.ettestag1a.category = "daily";
widtests.ettestag1a.subcategory = "push";
widtests.ettestag1a.js = exports.ettestag1a;
widtests.ettestag1a.description = "this does a test";

// // This will test the ability to write a dto to the db, use that dto to write
// // a wid with that dto, and get the results of getting that widtests.
// exports.ag211 = ag211 = function ag211(params, callback) {
//  // eventappinstall();
//  // ag2_setup();
//  executetest("getwidmaster", {
//      "wid": "color1"
//  }, "get_color1_result", "");

//  params = logverify("alpha_unit_tests", "ag2_result", "get_color1_result", "", "", {
//      "hue": "red",
//      "wid": "color1",
//      "metadata.method": "defaultdto"
//  });

//  console.log(' >>>>>> ' + params);

//  if (callback instanceof Function) {
//      var err;callback(err,params);
//  } else {
//      return params;
//  }
// }

//exports.ettestag122 = ettestag122 = function ettestag122(params, callback) {
exports.ettestag122 = widtests.ettestag122 = ettestag122 = function ettestag122(params, callback) {

    var a = {
        "wid": "systemdefault",
        "command": {
            "dtotype": "",
            "adopt": "default",
            "getwidmaster": {
                "inheritflag": "false",
                "execute": "ConvertFromDOTdri"
            },
            "resultparameters": {
                "note": "string",
                "wid": "sounddto",
                "metadata": {
                    "method": "sounddto"
                }
            }
        },
        "executethis": "getwidmaster"
    };
    proxyprinttodiv('>>>> before a', a, 99);
    var filter_data = getcommand(a, {
        "command.internalcall": false
        //     // "beginexecute" : {"execute":"","parameters":{}},
        //     // "beforemidexecute" : {"execute":"","parameters":{}},
        //     // "beforepostexecute" : {"execute":"","parameters":{}},
        //     // "endexecute" : {"execute":"","parameters":{}},
        //     // "securitycheck" : {"execute":"","parameters":{}},
        //     // "multiple" : {"execute":"","parameters":{}}

    }, {
        "command.internalcall": ""
        // "beginexecute" : {"execute":"","parameters":{}},
        // "beforemidexecute" : {"execute":"","parameters":{}},
        // "beforepostexecute" : {"execute":"","parameters":{}},
        // "endexecute" : {"execute":"","parameters":{}},
        // "securitycheck" : {"execute":"","parameters":{}},
        // "multiple" : {"execute":"","parameters":{}}

    }, true);
    proxyprinttodiv('>>>> after a', filter_data.output, 99);

};
widtests.ettestag122.category = "daily";
widtests.ettestag122.subcategory = "push";
widtests.ettestag122.js = exports.ag211;
widtests.ettestag122.description = "this does a test";
// This will test the ability to write a dto to the db, use that dto to write
// a wid with that dto, and get the results of getting that widtests.
//exports.ettestag2 = ettestag2 = function ettestag2(params, callback) {
exports.ettestag2 = widtests.ettestag2 = ettestag2 = function ettestag2(params, callback) {
    var executeobject = {
            "executethis": "addwidmaster",
            "wid": "colordto",
            "metadata.method": "colordto",
            "hue": "string"
        }
        executeobject.command={};
        executeobject.command.environment={};
        executeobject.command.environment.run={};
        executeobject.command.environment.run.executelevel=0;
        executeobject.command.environment.syncrule = "sync_local"
    proxyprinttodiv("Ag2  params ", params, 99);
    var env = new DriEnvironment(params.command.environment);
    proxyprinttodiv("Ag2  env ", env, 99);
    env.execute([executeobject, 
            {
            "executethis": "addwidmaster",
            //"metadata.method": "colordto", // added by joe
            "wid": "color1",
            "hue": "red"
        }, {
            "executethis": "addwidmaster",
            //"metadata.method": "colordto", // added by joe
            "wid": "color2",
            "hue": "blue"
        }, {
            "executethis": "getwidmaster",
            "wid": "color1"
        }],
        function (err, res1) {
            proxyprinttodiv("Ag2  result ", res1, 99);
            var res = res1[3];

            proxyprinttodiv('Function ag2 expected res ', {
                "hue": "red",
                "wid": "color1",
                "metadata": {
                    "method": "defaultdto"
                }
            }, 99);
            proxyprinttodiv('Function ag2 actual result ', res, 99);
            res = logverify("ettestag1_result", res, {
                "hue": "red",
                "wid": "color1",
                "metadata": {
                    "method": "defaultdto",
                    "expirationdate":{"exception":["created","changed","unchanged","updated","deleted"]}
                }
            });

            callback(err, res);
        });
};

widtests.ettestag2.category = "daily";
widtests.ettestag2.subcategory = "push";
widtests.ettestag2.js = exports.ettestag1;
widtests.ettestag2.description = "this does a test";


// This is a 2 level test of the dtos...instantiate song1 with a songdto, and some sounddto values
// failing due to a command object being sent back
//exports.ettestag3 = ettestag3 = function ettestag3(params, callback) {
exports.ettestag3 = widtests.ettestag3 = ettestag3 = function ettestag3(params, callback) {
	//debuglevel = 28;
	
	var expectedresult = {
                "title": "Highway to Hell",
                "wid": "song1",
                "metadata.method": "songdto",
                "metadata.sounddto.type": "onetomany",
                "sounddto.0.note": "A flat",
                "sounddto.0.wid": "ag3aflat",
                "sounddto.0.metadata.method": "sounddto",
                "sounddto.0.metadata.parentwidtests.song1": "songdto",
                "sounddto.1.note": "B sharp",
                "sounddto.1.wid": "ag3bsharp",
                "sounddto.1.metadata.method": "sounddto",
                "sounddto.1.metadata.parentwidtests.song1": "songdto",
                "sounddto.2.note": "C flat",
                "sounddto.2.wid": "ag3cflat",
                "sounddto.2.metadata.method": "sounddto",
                "sounddto.2.metadata.parentwidtests.song1": "songdto"
            };
			
    var executeobject = {}
        executeobject.command={};
        executeobject.command.environment={};
        executeobject.command.environment.run={};
        executeobject.command.environment.run.executelevel=0;
        executeobject.command.environment.syncrule = "sync_local"
		
		executeobject.command.xrun = [{
            "executethis": "addwidmaster",
            "wid": "sounddto",
            "metadata.method": "sounddto",
            "note": "string"
        }, {
            "executethis": "addwidmaster",
            "wid": "songdto",
            "metadata.method": "songdto",
            "title": "string",
            "metadata.sounddto.type": "onetomany"
        }, {
            "executethis": "addwidmaster",
            "wid": "rel_sound_to_song",
            "metadata.method": "relationshipdto",
            "primarywid": "songdto",
            "secondarywid": "sounddto",
            "primarymethod": "songdto",
            "secondarymethod": "sounddto",
            "linktype": "onetomany",
            "relationshiptype": "attributes"
        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "songdto",
            "title": "Highway to Hell",
            "sounddto.wid": "ag3aflat",
            "sounddto.note": "A flat"
         }, {
             "executethis": "addwidmaster",
             "wid": "song1",
             "metadata.method": "songdto",
             "title": "Highway to Hell",
             "sounddto.wid": "ag3bsharp",
             "sounddto.note": "B sharp"
         }, {
             "executethis": "addwidmaster",
             "wid": "song1",
             "metadata.method": "songdto",
             "title": "Highway to Hell",
             "sounddto.wid": "ag3cflat",
             "sounddto.note": "C flat"
         }, {
             "executethis": "getwidmaster",
             "wid": "song1",
             "command": {
                 "getwidmaster": {
                     "execute": "ConvertToDOTdri"
                 }
             }
        }];
		
    proxyprinttodiv("Ag3  params ", params, 99,true);
    var env = new DriEnvironment(params.command.environment);
    proxyprinttodiv("Ag3  env ", env, 99, true);
    env.execute(executeobject, 
        
        function (err, res1) {
            proxyprinttodiv("Ag3  result ", res1, 99,true);
            var res = res1;

            proxyprinttodiv('Function ag3 actual result ', res[5], 99, true);
            proxyprinttodiv('Function ag3 expected result ', expectedresult, 99, true);
            res = logverify("ettestag3_result", res[5], expectedresult);
            callback(err, res1);
        });
    };

widtests.ettestag3.category = "daily";
widtests.ettestag3.subcategory = "push";
widtests.ettestag3.js = exports.ettestag1;
widtests.ettestag3.description = "this does a test";
// This will test the ability to write a dto to the db, use that dto to write
// a wid with that dto, and get the results of getting that widtests.
//exports.ettestag2 = ettestag2 = function ettestag2(params, callback) {
exports.ettestag2s = widtests.ettestag2s = ettestag2s = function ettestag2s(params, callback) {
    var executeobject = {
            "executethis": "addwidmaster",
            "wid": "colordto",
            "metadata.method": "colordto",
            "hue": "string"
        }
        executeobject.command={};
        executeobject.command.environment={};
        executeobject.command.environment.run={};
        executeobject.command.environment.run.executelevel=0;
        executeobject.command.environment.syncrule = "sync_server"
    proxyprinttodiv("Ag2  params ", params, 99);
    var env = new DriEnvironment(params.command.environment);
    proxyprinttodiv("Ag2  env ", env, 99);
    env.execute([executeobject, 
            {
            "executethis": "addwidmaster",
            //"metadata.method": "colordto", // added by joe
            "wid": "color1",
            "hue": "red"
        }, {
            "executethis": "addwidmaster",
            //"metadata.method": "colordto", // added by joe
            "wid": "color2",
            "hue": "blue"
        }, {
            "executethis": "getwidmaster",
            "wid": "color1"
        }],
        function (err, res1) {
            proxyprinttodiv("Ag1  result ", res1, 99);
            var res = res1[3];

            proxyprinttodiv('Function ag2 expected res ', {
                "hue": "red",
                "wid": "color1",
                "metadata": {
                    "method": "defaultdto"
                }
            }, 99);
            proxyprinttodiv('Function ag1 actual result ', res, 99);
            res = logverify("ettestag1_result", res, {
                "hue": "red",
                "wid": "color1",
                "metadata": {
                    "method": "defaultdto",
                    "expirationdate":{"exception":["created","changed","unchanged","updated"]}
                }
            });

            callback(err, res);
        });
};

widtests.ettestag2s.category = "daily";
widtests.ettestag2s.subcategory = "push";
widtests.ettestag2s.js = exports.ettestag1;
widtests.ettestag2s.description = "this does a test";


// This is a 2 level test of the dtos...instantiate song1 with a songdto, and some sounddto values
// failing due to a command object being sent back
//exports.ettestag3 = ettestag3 = function ettestag3(params, callback) {
exports.ettestag3s = widtests.ettestag3s = ettestag3s = function ettestag3s(params, callback) {

    var executeobject = {
            "executethis": "addwidmaster",
            "wid": "sounddto",
            "metadata.method": "sounddto",
            "note": "string"
        }
        executeobject.command={};
        executeobject.command.environment={};
        executeobject.command.environment.run={};
        executeobject.command.environment.run.executelevel=0;
        executeobject.command.environment.syncrule = "sync_server"
    proxyprinttodiv("Ag3  params ", params, 99);
    var env = new DriEnvironment(params.command.environment);
    proxyprinttodiv("Ag3  env ", env, 99);
    env.execute([executeobject, 
        {
            "executethis": "addwidmaster",
            "wid": "songdto",
            "metadata.method": "songdto",
            "title": "string",
            "metadata.sounddto.type": "onetomany"
        }, {
            "executethis": "addwidmaster",
            "wid": "rel_sound_to_song",
            "metadata.method": "relationshipdto",
            "primarywid": "songdto",
            "secondarywid": "sounddto",
            "primarymethod": "songdto",
            "secondarymethod": "sounddto",
            "linktype": "onetomany",
            "relationshiptype": "attributes"
        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "songdto",
            "title": "Highway to Hell",
            "sounddto.wid": "ag3aflat",
            "sounddto.note": "A flat"
        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "songdto",
            "title": "Highway to Hell",
            "sounddto.wid": "ag3bsharp",
            "sounddto.note": "B sharp"
        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "songdto",
            "title": "Highway to Hell",
            "sounddto.wid": "ag3cflat",
            "sounddto.note": "C flat"
        }, {
            "executethis": "getwidmaster",
            "wid": "song1",
            "command": {
                "getwidmaster": {
                    "execute": "ConvertToDOTdri"
                }
            }
        }],
        function (err, res1) {
            proxyprinttodiv("Ag3  result ", res1, 99);
            var res = res1[6];

            proxyprinttodiv('Function ag1 expected res ', {
                "title": "Highway to Hell",
                "wid": "song1",
                "metadata.method": "songdto",
                "metadata.sounddto.type": "onetomany",
                "sounddto.0.note": "A flat",
                "sounddto.0.wid": "ag3aflat",
                "sounddto.0.metadata.method": "sounddto",
                "sounddto.0.metadata.parentwidtests.song1": "songdto",
                "sounddto.1.note": "B sharp",
                "sounddto.1.wid": "ag3bsharp",
                "sounddto.1.metadata.method": "sounddto",
                "sounddto.1.metadata.parentwidtests.song1": "songdto",
                "sounddto.2.note": "C flat",
                "sounddto.2.wid": "ag3cflat",
                "sounddto.2.metadata.method": "sounddto",
                "sounddto.2.metadata.parentwidtests.song1": "songdto"
            }, 99);
            proxyprinttodiv('Function ag1 actual result ', res, 99);
            res = logverify("ettestag1_result", res, {
                "title": "Highway to Hell",
                "wid": "song1",
                "metadata.method": "songdto",
                "metadata.sounddto.type": "onetomany",
                "sounddto.0.note": "A flat",
                "sounddto.0.wid": "ag3aflat",
                "sounddto.0.metadata.method": "sounddto",
                "sounddto.0.metadata.parentwidtests.song1": "songdto",
                "sounddto.1.note": "B sharp",
                "sounddto.1.wid": "ag3bsharp",
                "sounddto.1.metadata.method": "sounddto",
                "sounddto.1.metadata.parentwidtests.song1": "songdto",
                "sounddto.2.note": "C flat",
                "sounddto.2.wid": "ag3cflat",
                "sounddto.2.metadata.method": "sounddto",
                "sounddto.2.metadata.parentwidtests.song1": "songdto",
                "metadata.expirationdate":{"exception":["created","changed","unchanged","updated"]}
            });

            callback(err, res);
        });
};

widtests.ettestag3s.category = "daily";
widtests.ettestag3s.subcategory = "push";
widtests.ettestag3s.js = exports.ettestag1;
widtests.ettestag3s.description = "this does a test";

// This test does not add the data records correctly
//exports.ettestag3b = ettestag3b = function ettestag3b(params, callback) {
exports.ettestag3b = widtests.ettestag3b = ettestag3b = function ettestag3b(params, callback) {

    eventappinstall();
	debuglevel = 28;
    execute([{
            "executethis": "addwidmaster",
            "wid": "sonddto",
            "metadata.method": "sonddto",
            "title": "string",
            "metadata.sounddto.type": "jsononetomany",
            "sounddto.wid": "sounddto",
            "sounddto.metadata.method": "sounddto",
            "sounddto.note": "string"
        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "sonddto",
            "title": "Highway to Hell",
            "sounddto.0.note": "A flat"
        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "sonddto",
            "title": "Highway to Hell",
            "sounddto.0.note": "B sharp"
        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "sonddto",
            "title": "Highway to Hell",
            "sounddto.0.note": "C flat"
        }, {
            "executethis": "getwidmaster",
            "wid": "song1"
        }],

        function(err, res) {

            proxyprinttodiv('Function ag3 result Full res', res, 17);
            proxyprinttodiv('Function ag3 result ', res[4], 17);

            res = logverify("ettestag3_result", res[4], [{
                "title": "Highway to Hell",
                "wid": "song1",
                "metadata.method": "sonddto",
                "sounddto.0.note": "A flat",
                "sounddto.0.wid": "2",
                "sounddto.0.metadata.method": "sounddto",
                "sounddto.1.note": "B sharp",
                "sounddto.1.wid": "4",
                "sounddto.1.metadata.method": "sounddto",
                "sounddto.2.note": "C flat",
                "sounddto.2.wid": "6",
                "sounddto.2.metadata.method": "sounddto"
            }]);
            execute({
                "executethis": "getwidmaster",
                "wid": "sonddto",
                "command": {
                    "getwidmaster": {
                        "convertmethod": "dto",
                        "execute": "ConvertFromDOTdri",
                        "inheritflag": "true",
                        "dtotype": ""
                    }
                }
            }, function(err, res1) {
                //execute({"executethis": "getwidmaster","wid": "song1"}, function (err, res1) {
                proxyprinttodiv('Function ag3 result LAST ', res1, 17);
                callback(err, res);

            })
        });
}
widtests.ettestag3b.category = "daily";
widtests.ettestag3b.subcategory = "push";
widtests.ettestag3b.js = exports.ettestag3b;
widtests.ettestag3b.description = "this does a test";

// Test for supporting jsononetomany
// *** warning clear local storage ***
// 2/26/2014 -et-add - small amount of changes added today, ag5 is now makking it all the way through 
// Major fix was making sure relationship was passed in correctly, bracket was also missing on else in addwid
// Next step will be to add array processing to update wid
// 2/27/2014
// Goal for ag5's return
// [ { 
//     "title" : "Highway to Hell",
//     "sounddto.0.note" : "A flat",
//     "sounddto.0.wid" : "2",
//     "sounddto.0.metadata.method" : "sounddto",
//     "sounddto.1.note" : "B sharp",
//     "sounddto.1.wid" : "4",
//     "sounddto.1.metadata.method" : "sounddto",
//     "sounddto.2.note" : "C flat",
//     "sounddto.2.wid" : "6",
//     "sounddto.2.metadata.method" : "sounddto",
//     "wid" : "song1",
//     "metadata.method" : "songdto"
// } ]

//exports.ettestag5 = ettestag5 = function ettestag5(params, callback) {
exports.ettestag5 = widtests.ettestag5 = ettestag5 = function ettestag5(params, callback) {

    eventappinstall();
    addToLocalStorage("DRI", [{
        "wid": "initialwid",
        "initialwid": "hello from bootprocess"
    }]);
    addToLocalStorage("DRIKEY", {
        "initialwid": {
            "wid": "initialwid",
            "initialwid": "for key hello from bootprocess"
        }
    });

    //debuglevel = 17;

    execute([{
            "executethis": "addwidmaster",
            "wid": "Songdto",
            "metadata.method": "Songdto",
            "title": "string",
            "metadata.sounddto.type": "jsononetomany",
            "sounddto.0.wid": "sounddto",
            "sounddto.0.metadata.method": "sounddto",
            "sounddto.0.note": "string"
        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "Songdto",
            "title": "Highway to Hell",
            "sounddto.note": "A flat"
        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "Songdto",
            "title": "Highway to Hell",
            "sounddto.note": "B sharp"
        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "Songdto",
            "title": "Highway to Hell",
            "sounddto.note": "C flat"
        }, {
            "executethis": "getwidmaster",
            "wid": "song1"
        }],
        function(err, res) {
            proxyprinttodiv('Function ag5 result Full res', res, 17);
            proxyprinttodiv('Function ag5 result ', res[4], 17);

            res = logverify("ettestag5_result", res[4], [{
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
                "sounddto.2.metadata.method": "sounddto"
            }]);

            execute({
                "executethis": "getwidmaster",
                "wid": "songdto",
                "command.getwidmaster.convertmethod": "dto",
                "command.getwidmaster.execute": "ConvertFromDOTdri"
            }, function(err, res1) {
                proxyprinttodiv('Function ag5 result LAST ', res1, 17);
                callback(err, res);
            });
        });
}
widtests.ettestag5.category = "daily";
widtests.ettestag5.subcategory = "push";
widtests.ettestag5.js = exports.ettestag5;
widtests.ettestag5.description = "this does a test";

//exports.ettestag6 = ettestag6 = function ettestag6(params, callback) {
exports.ettestag6 = widtests.ettestag6 = ettestag6 = function ettestag6(params, callback) {

    eventappinstall();
    addToLocalStorage("DRI", [{
        "wid": "initialwid",
        "initialwid": "hello from bootprocess"
    }]);
    addToLocalStorage("DRIKEY", {
        "initialwid": {
            "wid": "initialwid",
            "initialwid": "for key hello from bootprocess"
        }
    });

    //debuglevel = 17;
    execute([{
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "Songdto",
            "title": "Highway to Hell",
            "sounddto[0].note": "A flat"
        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "Songdto",
            "title": "Highway to Hell",
            "sounddto.0.note": "B sharp"
        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "Songdto",
            "title": "Highway to Hell",
            "sounddto.0.note": "C flat"
        }],
        function(err, res) {
            proxyprinttodiv('Function ag5 result Full res', res, 17);
            proxyprinttodiv('Function ag5 result ', res[4], 17);

            res = logverify("ettestag5_result", res[4], [{
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
                "sounddto.2.metadata.method": "sounddto"
            }]);

            execute({
                "executethis": "getwidmaster",
                "wid": "songdto",
                "command.getwidmaster.convertmethod": "dto",
                "command.getwidmaster.execute": "ConvertFromDOTdri"
            }, function(err, res1) {
                proxyprinttodiv('Function ag5 result LAST ', res1, 17);
                callback(err, res);
            });
        });
}
widtests.ettestag6.category = "daily";
widtests.ettestag6.subcategory = "push";
widtests.ettestag6.js = exports.ettestag6;
widtests.ettestag6.description = "this does a test";

// {
//     "executethis": "addwidmaster",
//     "wid": "song1",
//     "metadata": {
//         "method": "Songdto"
//     },
//     "title": "Highway to Hell",
//     "sounddto": [
//         {
//             "note": "A flat"
//         }
//     ]
// }
//exports.ettestag7 = ettestag7 = function ettestag7(params, callback) {
exports.ettestag7 = widtests.ettestag7 = ettestag7 = function ettestag7(params, callback) {

    var obj = {
        "executethis": "addwidmaster",
        "wid": "song1",
        "metadata": {
            "method": "Songdto"
        },
        "title": "Highway to Hell",
        "sounddto": [

            {
                "note": "A flat"
            }, {
                "tempo": "fast"
            }


        ]
    }

    // var temp = ConvertToDOTdri(obj);
    // proxyprinttodiv("ettestag7 converToDot -- DOT --> ", temp, 17);

    // temp = ConvertFromDOTdri(obj);
    // proxyprinttodiv("ettestag7 converFromDot -- JSON --> ", temp, 17);

    getdtoobject(obj, {
        "dtotype": "defaultdto"
    }, function(err, res) {
        proxyprinttodiv("getdtoobject -- RES --> ", res, 17);
    });
}
widtests.ettestag7.category = "daily";
widtests.ettestag7.subcategory = "push";
widtests.ettestag7.js = exports.ettestag7;
widtests.ettestag7.description = "this does a test";

//exports.ettestag8 = ettestag8 = function ettestag8(params, callback) {
exports.ettestag8 = widtests.ettestag8 = ettestag8 = function ettestag8(params, callback) {

    eventappinstall();
    addToLocalStorage("DRI", [{
        "wid": "initialwid",
        "initialwid": "hello from bootprocess"
    }]);
    addToLocalStorage("DRIKEY", {
        "initialwid": {
            "wid": "initialwid",
            "initialwid": "for key hello from bootprocess"
        }
    });

    //debuglevel = 17;

    execute([{
            "executethis": "addwidmaster",
            "wid": "Songdto",
            "metadata.method": "Songdto",
            "title": "string",
            "metadata.sounddto.type": "jsononetomany",
            "sounddto.0.wid": "sounddto",
            "sounddto.0.metadata.method": "sounddto",
            "sounddto.0.note": "string"
        }],
        function(err, res) {

            execute({
                "executethis": "getwidmaster",
                "wid": "songdto",
                "command.getwidmaster.convertmethod": "dto",
                "command.getwidmaster.execute": "ConvertFromDOTdri"
            }, function(err, res1) {
                proxyprinttodiv('Function ag8 result LAST ', res1, 17);
                callback(err, res);
            });
        });
}
widtests.ettestag8.category = "daily";
widtests.ettestag8.subcategory = "push";
widtests.ettestag8.js = exports.ettestag8;
widtests.ettestag8.description = "this does a test";

//exports.ettestag9 = ettestag9 = function ettestag9(params, callback) {
exports.ettestag9 = widtests.ettestag9 = ettestag9 = function ettestag9(params, callback) {

    eventappinstall();
    addToLocalStorage("DRI", [{
        "wid": "initialwid",
        "initialwid": "hello from bootprocess"
    }]);
    addToLocalStorage("DRIKEY", {
        "initialwid": {
            "wid": "initialwid",
            "initialwid": "for key hello from bootprocess"
        }
    });

    //debuglevel = 17;

    execute([{
            "executethis": "addwidmaster",
            "wid": "Songdto",
            "metadata.method": "Songdto",
            "title": "string",
            "metadata.sounddto.type": "jsononetomany",
            "sounddto.0.wid": "string",
            "sounddto.0.metadata.method": "string",
            "sounddto.0.note": "string"
        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "Songdto",
            "title": "Highway to Hell",
            "sounddto.0.wid": "1",
            "sounddto.0.note": "A flat",
            "sounddto.0.metadata.method": "sounddto",
            "sounddto.1.wid": "2",
            "sounddto.1.note": "B sharp",
            "sounddto.1.metadata.method": "sounddto",
            "sounddto.2.wid": "3",
            "sounddto.2.note": "C flat",
            "sounddto.2.metadata.method": "sounddto"
        }, {
            "executethis": "getwidmaster",
            "wid": "song1"
        }],
        function(err, res) {
            proxyprinttodiv('Function ag5 result Full res', res, 17);
            proxyprinttodiv('Function ag5 result ', res[3], 17);

            res = logverify("ettestag5_result", res[3], [{
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
                "sounddto.2.metadata.method": "sounddto"
            }]);

            execute({
                "executethis": "getwidmaster",
                "wid": "songdto",
                "command.getwidmaster.convertmethod": "dto",
                "command.getwidmaster.execute": "ConvertFromDOTdri"
            }, function(err, res1) {
                proxyprinttodiv('Function ag5 result LAST ', res1, 17);
                callback(err, res);
            });
        });
}
widtests.ettestag9.category = "daily";
widtests.ettestag9.subcategory = "push";
widtests.ettestag9.js = exports.ettestag9;
widtests.ettestag9.description = "this does a test";

//exports.ettestag3a = ettestag3a = function ettestag3a(params, callback) {
exports.ettestag3a = widtests.ettestag3a = ettestag3a = function ettestag3a(params, callback) {

    eventappinstall();
    addToLocalStorage("DRI", [{
        "wid": "initialwid",
        "initialwid": "hello from bootprocess"
    }]);
    addToLocalStorage("DRIKEY", {
        "initialwid": {
            "wid": "initialwid",
            "initialwid": "for key hello from bootprocess"
        }
    });

    //debuglevel = 17;

    execute([{
            "executethis": "addwidmaster",
            "wid": "Songdto",
            "metadata.method": "Songdto",
            "title": "string",
            "metadata.sounddto.type": "onetomany",
            "sounddto.wid": "string",
            "sounddto.metadata.method": "string",
            "sounddto.note": "string"
        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "Songdto",
            "title": "Highway to Hell",
            "sounddto.0.wid": "1",
            "sounddto.0.note": "A flat",
            "sounddto.0.metadata.method": "sounddto",
            "sounddto.1.wid": "2",
            "sounddto.1.note": "B sharp",
            "sounddto.1.metadata.method": "sounddto",
            "sounddto.2.wid": "3",
            "sounddto.2.note": "C flat",
            "sounddto.2.metadata.method": "sounddto"
        }, {
            "executethis": "getwidmaster",
            "wid": "song1"
        }],
        function(err, res) {
            proxyprinttodiv('Function ag5 result Full res', res, 17);
            proxyprinttodiv('Function ag5 result ', res[2], 17);

            res = logverify("ettestag5_result", res[2], [{
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
                "sounddto.2.metadata.method": "sounddto"
            }]);

            execute({
                "executethis": "getwidmaster",
                "wid": "songdto",
                "command.getwidmaster.convertmethod": "dto",
                "command.getwidmaster.execute": "ConvertFromDOTdri"
            }, function(err, res1) {
                proxyprinttodiv('Function ag5 result LAST ', res1, 17);
                callback(err, res);
            });
        });
}
widtests.ettestag3a.category = "daily";
widtests.ettestag3a.subcategory = "push";
widtests.ettestag3a.js = exports.ettestag3a;
widtests.ettestag3a.description = "this does a test";


exports.testadding1 = testadding1 = function testadding1(params, callback) {
    debuglevel = 12;
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
            "field2": "world"
        }, {
            "executethis": "getwidmaster",
            "wid": "awid1",
            "metadata": {
                "method": "adto"
            }
        }],
        function (err, res) {
            proxyprinttodiv('adding adto: ', res[0], 99);
            proxyprinttodiv('adding awid1: ', res[1], 99);
            proxyprinttodiv('awid1 get: ', res[2], 99);
            var result = logverify("cody1_result", res[2], [{
                "wid": "awid1",
                "metadata.method": "adto",
                "field1": "hello",
                "field2": "world"
            }]);
            callback(err, result);
        });
}

exports.testupdating1 = testupdating1 = function testupdating1(params, callback) {
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
            "field2": "world"
        }, {
            "executethis": "updatewid",
            "wid": "awid1",
            "metadata": {
                "method": "adto"
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
            proxyprinttodiv('adding adto: ', res[0], 99);
            proxyprinttodiv('adding awid1: ', res[1], 99);
            proxyprinttodiv('updating awid1: ', res[2], 99);
            proxyprinttodiv('awid1 get: ', res[3], 99);
            var result = logverify("cody1_result", res[3], [{
                "wid": "awid1",
                "metadata.method": "adto",
                "field1": "goodbye",
                "field2": "world"
            }]);
            callback(err, result);
        });
}

exports.testpermissiondefault1 = testpermissiondefault1 = function testpermissiondefault1(params, callback) {
    execute([{
            "executethis": "createalldtos"
        }, {
            "executethis": "addwidmaster",
            "wid": "p1",
            "metadata": {
                "method": "permissiondto"
            }
        }, {
            "executethis": "getwidmaster",
            "wid": "p1",
            "metadata": {
                "method": "permissiondto"
            }
        }],
        function (err, res) {
            proxyprinttodiv('adding permissiondto: ', res[1], 99);
            var result = logverify("cody1_result", res[1], [{
                "wid": "p1",
                "metadata.method": "permissiondto",
                "level": "0",
                "metadata.db": "data",
                "metadata.collection": "maincollection"
            }]);
            callback(err, result);
        });
}

exports.testpermissiondefault2 = testpermissiondefault2 = function testpermissiondefault2(params, callback) {
    execute([{
            // Create the permissiondto     
            "executethis": "addwidmaster",
            "wid": "permissiondto",
            "metadata.method": "permissiondto",
            "metadata.system.creator": "string",
            "level": "string",
            "metadata.inherit.0": {
                "wid": "defaultuserpermission",
                "command": {
                    "dtotype": "",
                    "adopt": "default"
                }
            },
            "metadata.actiongroupdto.type": "manytomany",
            "metadata.usergroupdto.type": "manytomany",
            "metadata.db": "string",
            "metadata.collection": "string"
        }, {
            // Create a default permissiondto
            "executethis": "addwidmaster",
            "wid": "defaultuserpermission",
            "metadata.method": "permissiondto",
            //"actiongroupdto.inherit.0":"",
            //"usergroupdto.inherit.0":"",
            "metadata.db": "cdata",
            "metadata.collection": "cmaincollection",
            "level": "0"
        }, {
            "executethis": "addwidmaster",
            "wid": "p1",
            "metadata": {
                "method": "permissiondto"
            }
        }, {
            "executethis": "getwidmaster",
            "wid": "p1"
        }],
        function (err, res) {
            proxyprinttodiv('adding permissiondto: ', res[3], 99);
            var result = logverify("cody1_result", res[3], [{
                "wid": "p1",
                "metadata.method": "permissiondto",
                "level": "0",
                "metadata.db": "cdata",
                "metadata.collection": "cmaincollection"
            }]);
            callback(err, result);
        });
}


exports.testupdating1 = testupdating1 = function testupdating1(params, callback) {
    execute([{
            "executethis": "addwidmaster",
            "wid": "adto",
            "metadata": {
                "method": "adto"
            },
            "field1": "string",
            "field2": "string"
        }, {
            "executethis": "addwidmaster",
            "wid": "awid1",
            "metadata": {
                "method": "adto"
            },
            "field1": "hello",
            "field2": "world"
        }, {
            "executethis": "addwidmaster",
            "wid": "awid1",
            "metadata": {
                "method": "adto"
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
            proxyprinttodiv('adding adto: ', res[0], 99);
            proxyprinttodiv('adding awid1: ', res[1], 99);
            proxyprinttodiv('updating awid1: ', res[2], 99);
            proxyprinttodiv('awid1 get: ', res[3], 99);
            var result = logverify("cody1_result", res[3], [{
                "wid": "awid1",
                "metadata.method": "adto",
                "field1": "goodbye",
                "field2": "world"
            }]);
            callback(err, result);
        });
}

exports.simpleauthorbooktest = widtests.simpleauthorbooktest = simpleauthorbooktest = function simpleauthorbooktest(executeobject, callback) {
    
	  if (!executeobject.command) {
		  executeobject.command={};
		  executeobject.command.environment={};
		  executeobject.command.environment.run={};
	  }	
    executeobject.command.xrun = [{
        "executethis": "updatewid",
        "metadata.method": "authordto",
        "wid": "authordto",
        "name": "string",
        "age": "string",
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
		"primarymethod": "authordto",
        "secondarywid": "bookdto",
		"secondarymethod": "bookdto",
        "relationshiptype": "attributes"
    }, {
        "executethis": "updatewid",
        "metadata.method": "authordto",
        "wid": "elizabeth_heart",
        "name": "Elizabeth Heart",
        "age": "50",
		"bookdto.title": "Michigan Haunted Houses",
		"bookdto.pages": "500"
    }];
	
	var etEnvironment = new DriEnvironment(executeobject.command.environment);
	  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
	  {                       
			proxyprinttodiv('result', result_obj, 99);
			callback(null, result_obj)
	  });
}
widtests.simpleauthorbooktest.category = "daily";
widtests.simpleauthorbooktest.subcategory = "push";
widtests.simpleauthorbooktest.js = exports.simpleauthorbooktest;
widtests.simpleauthorbooktest.description = "this does a test";


exports.testgetwid1 = widtests.testgetwid1 = testgetwid1 = function testgetwid1(executeobject, callback) {
    
	  if (!executeobject.command) {
		  executeobject.command={};
		  executeobject.command.environment={};
		  executeobject.command.environment.run={};
	  }	
    executeobject.command.xrun = [{
        "executethis": "updatewid",
        "metadata.method": "defaultdto",
        "wid": "testwid1",
        "age": "11"
    }, {
        "executethis": "getwid",
        "wid": "testwid1"
    }];
	
	var etEnvironment = new DriEnvironment(executeobject.command.environment);
	  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
	  {                       
			proxyprinttodiv('result', result_obj, 99);
			callback(null, result_obj)
	  });
}
widtests.testgetwid1.category = "daily";
widtests.testgetwid1.subcategory = "push";
widtests.testgetwid1.js = exports.testgetwid1;
widtests.testgetwid1.description = "this does a test";