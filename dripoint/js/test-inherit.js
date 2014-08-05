
var widtests = widtests || {};

exports.intest_allexecute = 
widtests.intest_allexecute = 
intest_allexecute = 
function intest_allexecute(executeobject, callback) 
{
	var start = new Date().getTime();
    async.series(
    [   
    //function (cb1) {etaddwidtest4({}, function (err, res) {cb1(null, res)})},
    //function (cb1) {etadd1({}, function (err, res) {cb1(null, res)})},
    //function (cb1) {etadd11({}, function (err, res) {cb1(null, res)})},
	//function (cb1) {etaddwidtest6({}, function (err, res) {cb1(null, res)})},
	//function (cb1) {etaddwidtest7({}, function (err, res) {cb1(null, res)})},
	//function (cb1) {testinheritdefault0({}, function (err, res) {cb1(null, res)})},
	//function (cb1) {testinheritdefault1({}, function (err, res) {cb1(null, res)})},
	//function (cb1) {testinheritdefault2({}, function (err, res) {cb1(null, res)})},
	//function (cb1) {testcommanddtotype({}, function (err, res) {cb1(null, res)})},
	//function (cb1) {testinheritdefault3({}, function (err, res) {cb1(null, res)})},
	//function (cb1) {testinheritdefault4({}, function (err, res) {cb1(null, res)})},
	//function (cb1) {testinheritdefault41({}, function (err, res) {cb1(null, res)})},
	//function (cb1) {testinheritdefault5({}, function (err, res) {cb1(null, res)})},
	//function (cb1) {testinheritoverride0({}, function (err, res) {cb1(null, res)})},
	//function (cb1) {testinheritoverride1({}, function (err, res) {cb1(null, res)})},
	//function (cb1) {testinheritoverride2({}, function (err, res) {cb1(null, res)})},
	//function (cb1) {testinheritoverride3({}, function (err, res) {cb1(null, res)})},
	//function (cb1) {testinheritoverride4({}, function (err, res) {cb1(null, res)})},
	//function (cb1) {multiinheritoverride0({}, function (err, res) {cb1(null, res)})},
	//function (cb1) {multiinheritoverride1({}, function (err, res) {cb1(null, res)})},
	//function (cb1) {multiinheritoverride2({}, function (err, res) {cb1(null, res)})},
	//function (cb1) {multiinheritoverride3({}, function (err, res) {cb1(null, res)})},
	//function (cb1) {testaddauthor1({}, function (err, res) {cb1(null, res)})},
	//function (cb1) {testjsononetoone0({}, function (err, res) {cb1(null, res)})},
	//function (cb1) {etcreateinheritdefault1({}, function (err, res) {cb1(null, res)})}
    ],
    function (err, res) {
      proxyprinttodiv('result from many array', res, 99);
      callback(null,res);
	  proxyprinttodiv('total elapsed time ', new Date().getTime() - start, 99);
    })
	console.log('end nstest_allexecute');
};
widtests.intest_allexecute.category = "daily";
widtests.intest_allexecute.subcategory = "push";
widtests.intest_allexecute.js = intest_allexecute;
widtests.intest_allexecute.description = "This is the master test. this test calls all of the individual testing groups for testing inherit.";



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


/*************                         ***************/
/*************   INHERIT DEFAULT TESTS ***************/
/*************       Single Level      ***************/

// This tests inherit.default at the dto level. authordto inherits from authordefault 
// and so author1 should be returned with name=Alex & age=42
// works.
exports.testinheritdefault0 = testinheritdefault0 = function testinheritdefault0(params, callback) {
    execute([{
            "executethis": "addwidmaster",
            "wid": "authordefault",
            "metadata": {
                "method": "authordto"
            },
            "name": "Alex",
            "age": "42"
        }, {
            "executethis": "addwidmaster",
            "wid": "authordto",
            "metadata.method": "authordto",
            "name": "string",
            "age": "string",
            "metadata.inherit.0": {
                "wid": "authordefault",
                "command": {
                    "dtotype": "",
                    "adopt": "default"
                }
            }
        }, {
            "executethis": "addwidmaster",
            "wid": "author1",
            "age": "10",
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
                "metadata": {
                    "method": "authordto",
                },
                "name": "Alex",
                "age": "10"
            }]);

            callback(err, result);
        });
};

// This tests inherit.default at the wid level. author1 inherits from authordefault and 
// should be returned with name=Alex & age=42
// works.
exports.testinheritdefault1 = testinheritdefault1 = function testinheritdefault1(params, callback) {
    execute([{
            "executethis": "addwidmaster",
            "wid": "authordefault",
            "metadata.method": "authordto",
            "name": "Alex",
            "age": "42"
        }, {
            "executethis": "addwidmaster",
            "wid": "authordto",
            "metadata.method": "authordto",
            "name": "string",
            "age": "string"
        }, {
            "executethis": "addwidmaster",
            "wid": "author1",
            "metadata.method": "authordto",
            "metadata.inherit.0": {
                "wid": "authordefault",
                "command": {
                    "dtotype": "",
                    "adopt": "default"
                }
            }
        }, {
            "executethis": "getwidmaster",
            "wid": "author1"
        }],
        function (err, res) {
            proxyprinttodiv('Full results: ', res, 99);
            proxyprinttodiv('The author1 record: ', res[3], 99);
            var result = logverify("testinheritdefault0_result", res[3], [{
                "wid": "author1",
                "metadata": {
                    "method": "authordto",
                    "inherit": [{
                        "wid": "authordefault",
                        "command": {
                            "dtotype": "",
                            "adopt": "default"
                        }
                    }]
                },
                "name": "Alex",
                "age": "42"
            }]);

            callback(err, result);
        });
};

// This tests inherit.default at the wid level with 1 field already existing. Only age=42 should be accepted from authordefault as name=Tom is already
// present in the wid. author1 should return name=Tom & age=42.
// NOTE: This is not working. The age field is not being returned from the default, only the pre-existing name=Tom. It seems like there is a conflict
// if inherit.default sees that ANY field already exists in the wid.
exports.testinheritdefault2 = testinheritdefault2 = function testinheritdefault2(params, callback) {
    execute([{
            "executethis": "addwidmaster",
            "wid": "authordefault",
            "metadata.method": "authordto",
            "name": "Alex",
            "age": "42"
        }, {
            "executethis": "addwidmaster",
            "wid": "authordto",
            "metadata.method": "authordto",
            "name": "string",
            "age": "string"
        }, {
            "executethis": "addwidmaster",
            "wid": "author1",
            "metadata.method": "authordto",
            "name": "Tom",
            "metadata.inherit.0": {
                "wid": "authordefault",
                "command": {
                    "dtotype": "",
                    "adopt": "default"
                }
            }
            //"metadata.inherit.default":[{"widname" : "authordefault"}]
        }],
        function (err, res) {
            proxyprinttodiv('Full results: ', res, 99);

            proxyprinttodiv('The author1 record: ', res[2], 99);

            debuglevel = 0;
            execute({
                "executethis": "getwidmaster",
                "wid": "author1"
            }, function (err, res1) {
                proxyprinttodiv("getwidmaster author1 result: ", res1, 99);
                callback(err, res);
            });
        });
}

exports.testcommanddtotype = testcommanddtotype = function testcommanddtotype(params, callback) {
    execute([{
            "executethis": "addwidmaster",
            "wid": "bookdto",
            "metadata.method": "bookdto",
            "title": "string",
        }, {
            "executethis": "addwidmaster",
            "wid": "authordto",
            "metadata.method": "authordto",
            "name": "string",
            "age": "string",
        }, {
            "executethis": "addwidmaster",
            "wid": "rel_author_book",
            "metadata.method": "relationshipdto",
            "relationshiptype": "attributes",
            "linktype": "onetomany",
            "primarywid": "authordto",
            "primarymethod": "authordto",
            "secondarywid": "bookdto",
            "secondarymethod": "bookdto"
        }, {
            "executethis": "addwidmaster",
            "wid": "author1",
            "metadata.method": "authordto",
            "name": "Alex",
            "age": "42",
            "bookdto.title": "Haunted Houses"
            // },{
            //  "executethis":"getwidmaster",
            //  "wid":"author1",
            //  "command.dtotype":""
            //  },{
            //  "executethis":"getwidmaster",
            //  "wid":"author1", 
            //  "command.dtotype":"authordto"
            // },{
            // "executethis":"getwidmaster",
            // "wid":"author1",
            // "command.dtotype":"bookdto"
            // },{
            // "executethis":"getwidmaster",
            // "wid":"1",
            // "command.dtotype":""
            // },{
            // "executethis":"getwidmaster",
            // "wid":"1",
            // "command.dtotype":"bookdto"
            // },{
            // "executethis":"getwidmaster",
            // "wid":"1",
            // "command.dtotype":"authordto"
        }],
        function (err, res) {
            proxyprinttodiv('Full results: ', res, 99);


            debuglevel = 38;
            execute({
                "executethis": "getwidmaster",
                "wid": "1",
                "command.dtotype": "authordto"
            }, function (err, res1) {
                proxyprinttodiv("getwidmaster author1 result: ", res1, 99);
                callback(err, res);
            });
            // execute({"executethis": "getwidmaster","wid": "book1", "command":{"dtotype":"authordto"}}, function (err, res1) {
            //     proxyprinttodiv("getwidmaster book1 result: ", res1, 99); 
            //     callback(err, res); 
            // });
        });
};

/*************                         ***************/
/*************   INHERIT DEFAULT TESTS ***************/
/*************        Multi Level      ***************/

// inherit default set at the dto level. authordto has a default wid to inherit from and bookdto has a default wid to inherit from. 
exports.testinheritdefault3 = testinheritdefault3 = function testinheritdefault3(params, callback) {
    execute([{
            "executethis": "addwidmaster",
            "wid": "bookdefault",
            "metadata.method": "bookdto",
            "title": "Haunted Houses"
        }, {
            "executethis": "addwidmaster",
            "wid": "authordefault",
            "metadata.method": "authordto",
            "name": "Alex",
            "age": "42"
        }, {
            "wid": "bookdto",
            "metadata.method": "bookdto",
            "title": "string",
            "metadata.inherit.0": {
                "wid": "bookdefault",
                "command": {
                    "dtotype": "",
                    "adopt": "default"
                }
            }
            //"metadata.inherit.default":[{"widname" : "bookdefault"}]
        }, {
            "executethis": "addwidmaster",
            "wid": "authordto",
            "metadata.method": "authordto",
            "name": "string",
            "age": "string",
            "metadata.inherit.0": {
                "wid": "authordefault",
                "command": {
                    "dtotype": "",
                    "adopt": "default"
                }
            }
            //"metadata.inherit.default":[{"widname" : "authordefault"}]
        }, {
            "executethis": "addwidmaster",
            "wid": "rel_author_book",
            "metadata.method": "relationshipdto",
            "relationshiptype": "attributes",
            "linktype": "onetomany",
            "primarywid": "authordto",
            "primarymethod": "authordto",
            "secondarywid": "bookdto",
            "secondarymethod": "bookdto"
        }, {
            "executethis": "addwidmaster",
            "wid": "author1",
            "metadata.method": "authordto"
        }, {
            "executethis": "getwidmaster",
            "wid": "author1"
        }],
        function (err, res) {
            proxyprinttodiv('The author1 record: ', res[6], 99);
        });
}


// inherit default set at the dto level. authordto has a default wid to inherit from as well as a bookdto inherit
// *** DOES NOT WORK -- BOOKVALUE DOES NOT COME BACK
exports.testinheritdefault4 = testinheritdefault4 = function testinheritdefault4(params, callback) {
    execute([{
            "executethis": "addwidmaster",
            "wid": "bookdefault",
            "metadata.method": "bookdto",
            "title": "Haunted Houses"
        }, {
            "executethis": "addwidmaster",
            "wid": "authordefault",
            "metadata.method": "authordto",
            "name": "Alex",
            "age": "42"
        }, {
            "wid": "bookdto",
            "metadata.method": "bookdto",
            "title": "string"
        }, {
            "executethis": "addwidmaster",
            "wid": "authordto",
            "metadata.method": "authordto",
            "name": "string",
            "age": "string",
            "metadata.bookdto.type": "onetomany",
            "metadata.inherit": [{
                "wid": "authordefault",
                "command": {
                    "dtotype": "",
                    "adopt": "default"
                }
            }, {
                "wid": "bookdefault",
                "command": {
                    "dtotype": "bookdto",
                    "adopt": "default"
                }
            }]
            //  "metadata.inherit.default":[{"widname" : "authordefault"}],
            // "bookdto.0.inherit.default":[{"widname" : "bookdefault"}]                    
        }, {
            "executethis": "addwidmaster",
            "wid": "rel_author_book",
            "metadata.method": "relationshipdto",
            "relationshiptype": "attributes",
            "linktype": "onetomany",
            "primarywid": "authordto",
            "primarymethod": "authordto",
            "secondarywid": "bookdto",
            "secondarymethod": "bookdto"
        }, {
            "executethis": "addwidmaster",
            "wid": "author1",
            "metadata.method": "authordto"
        }],
        function (err, res) {
            proxyprinttodiv('Full results: ', res, 99);

            proxyprinttodiv('The author1 record: ', res[2], 99);

            debuglevel = 0;
            execute({
                "executethis": "getwidmaster",
                "wid": "author1"
            }, function (err, res1) {
                proxyprinttodiv("getwidmaster author1 result: ", res1, 99);
                callback(err, res);
            });
        });
}

// inherit default set at the dto level. authordto has a default wid to inherit from and that default wid inherits a bookdefault
// *** DOES NOT WORK -- BOOKVALUE DOES NOT COME BACK
exports.testinheritdefault41 = testinheritdefault41 = function testinheritdefault41(params, callback) {
    execute([{
            "executethis": "addwidmaster",
            "wid": "bookdefault",
            "metadata.method": "bookdto",
            "title": "Haunted Houses"
        }, {
            "executethis": "addwidmaster",
            "wid": "authordefault",
            "metadata.method": "authordto",
            "name": "Alex",
            "age": "42",
            "metadata.inherit.0": {
                "wid": "bookdefault",
                "command": {
                    "dtotype": "",
                    "adopt": "default"
                }
            }
            //"bookdto.0.inherit.default":[{"widname" : "bookdefault"}]
        }, {
            "wid": "bookdto",
            "metadata.method": "bookdto",
            "title": "string"
        }, {
            "executethis": "addwidmaster",
            "wid": "authordto",
            "metadata.method": "authordto",
            "name": "string",
            "age": "string",
            "metadata.bookdto.type": "onetomany",
            "metadata.inherit.0": {
                "wid": "authordefault",
                "command": {
                    "dtotype": "",
                    "adopt": "default"
                }
            }
            //"metadata.inherit.default":[{"widname" : "authordefault"}]
        }, {
            "executethis": "addwidmaster",
            "wid": "rel_author_book",
            "metadata.method": "relationshipdto",
            "relationshiptype": "attributes",
            "linktype": "onetomany",
            "primarywid": "authordto",
            "primarymethod": "authordto",
            "secondarywid": "bookdto",
            "secondarymethod": "bookdto"
        }, {
            "executethis": "addwidmaster",
            "wid": "author1",
            "metadata.method": "authordto"
        }],
        function (err, res) {
            proxyprinttodiv('Full results: ', res, 99);

            proxyprinttodiv('The author1 record: ', res[2], 99);

            debuglevel = 0;
            execute({
                "executethis": "getwidmaster",
                "wid": "author1"
            }, function (err, res1) {
                proxyprinttodiv("getwidmaster author1 result: ", res1, 99);
                callback(err, res);
            });
        });
}


// Inherit Default set at the wid level. author1 inherits from authordefault and authordefault inherits from bookdefault
// *** DOES NOT WORK -- BOOKVALUE DOES NOT COME BACK
exports.testinheritdefault5 = testinheritdefault5 = function testinheritdefault5(params, callback) {
    execute([{
            "executethis": "addwidmaster",
            "wid": "bookdefault",
            "metadata.method": "bookdto",
            "title": "Haunted Houses"
        }, {
            "executethis": "addwidmaster",
            "wid": "authordefault",
            "metadata.method": "authordto",
            "name": "Alex",
            "age": "42",
            "metadata.inherit.0": {
                "wid": "bookdefault",
                "command": {
                    "dtotype": "",
                    "adopt": "default"
                }
            }
            // "bookdto.0.inherit.default":[{"widname" : "bookdefault"}]
        }, {
            "wid": "bookdto",
            "metadata.method": "bookdto",
            "title": "string"
        }, {
            "executethis": "addwidmaster",
            "wid": "authordto",
            "metadata.method": "authordto",
            "name": "string",
            "age": "string"
        }, {
            "executethis": "addwidmaster",
            "wid": "rel_author_book",
            "metadata.method": "relationshipdto",
            "relationshiptype": "attributes",
            "linktype": "onetomany",
            "primarywid": "authordto",
            "primarymethod": "authordto",
            "secondarywid": "bookdto",
            "secondarymethod": "bookdto"
        }, {
            "executethis": "addwidmaster",
            "wid": "author1",
            "metadata.method": "authordto",
            "metadata.inherit.0": {
                "wid": "authordefault",
                "command": {
                    "dtotype": "",
                    "adopt": "default"
                }
            }
            // "metadata.inherit.default":[{"widname" : "authordefault"}]
        }],
        function (err, res) {
            proxyprinttodiv('Full results: ', res, 99);

            proxyprinttodiv('The author1 record: ', res[2], 99);

            debuglevel = 0;
            execute({
                "executethis": "getwidmaster",
                "wid": "author1"
            }, function (err, res1) {
                proxyprinttodiv("getwidmaster author1 result: ", res1, 99);
                callback(err, res);
            });
        });
}


/*************                          ***************/
/*************   INHERIT Override TESTS ***************/
/*************       Single Level       ***************/


// tests if inherit override works in the dto (authordto). author1 inherits authoroverride and should be returned with name=Alex & age=42.
// NOTE: this is not working right now. Execution is doing some funky stuff, repeatedly returning results.
exports.testinheritoverride0 = testinheritoverride0 = function testinheritoverride0(params, callback) {
    execute([{
            "executethis": "addwidmaster",
            "wid": "authoroverride",
            "metadata.method": "authordto",
            "name": "Alex",
            "age": "42"
        }, {
            "executethis": "addwidmaster",
            "wid": "authordto",
            "metadata.method": "authordto",
            "name": "string",
            "age": "string",
            "metadata.inherit.0": {
                "wid": "authoroverride",
                "command": {
                    "dtotype": "",
                    "adopt": "override"
                }
            }
            // "metadata.inherit.override":[{"widname" : "authoroverride"}]
        }, {
            "executethis": "addwidmaster",
            "wid": "author1",
            "metadata.method": "authordto"
        }],
        function (err, res) {
            proxyprinttodiv('Full results: ', res, 99);

            proxyprinttodiv('The author1 record: ', res[2], 99);

            debuglevel = 0;
            execute({
                "executethis": "getwidmaster",
                "wid": "author1"
            }, function (err, res1) {
                proxyprinttodiv("getwidmaster author1 result: ", res1, 99);
                callback(err, res);
            });
        });
}

// This tests inherit.override at the wid level. author1 inherits authoroverride and should return with name=Alex & age=42.
// works.
exports.testinheritoverride1 = testinheritoverride1 = function testinheritoverride1(params, callback) {
    execute([{
            "executethis": "addwidmaster",
            "wid": "authoroverride",
            "metadata.method": "authordto",
            "name": "Alex",
            "age": "42"
        }, {
            "executethis": "addwidmaster",
            "wid": "authordto",
            "metadata.method": "authordto",
            "name": "string",
            "age": "string"
        }, {
            "executethis": "addwidmaster",
            "wid": "author1",
            "metadata.method": "authordto",
            "metadata.inherit.0": {
                "wid": "authoroverride",
                "command": {
                    "dtotype": "",
                    "adopt": "override"
                }
            }
            // "metadata.inherit.override":[{"widname" : "authoroverride"}]
        }],
        function (err, res) {
            proxyprinttodiv('Full results: ', res, 99);

            proxyprinttodiv('The author1 record: ', res[2], 99);

            debuglevel = 0;
            execute({
                "executethis": "getwidmaster",
                "wid": "author1"
            }, function (err, res1) {
                proxyprinttodiv("getwidmaster author1 result: ", res1, 99);
                callback(err, res);
            });
        });
}

// Tests inherit.override at the wid level with fields already existing in the wid. The fields in author1 should be overriden by the fields in
// authoroverride, returning the result name=Alex & age=42.
// works.
exports.testinheritoverride2 = testinheritoverride2 = function testinheritoverride2(params, callback) {
    execute([{
            "executethis": "addwidmaster",
            "wid": "authoroverride",
            "metadata.method": "authordto",
            "name": "Alex",
            "age": "42"
        }, {
            "executethis": "addwidmaster",
            "wid": "authordto",
            "metadata.method": "authordto",
            "name": "string",
            "age": "string"
        }, {
            "executethis": "addwidmaster",
            "wid": "author1",
            "metadata.method": "authordto",
            "name": "Tom",
            "age": "58",
            "metadata.inherit.0": {
                "wid": "authoroverride",
                "command": {
                    "dtotype": "",
                    "adopt": "override"
                }
            }
            // "metadata.inherit.override":[{"widname" : "authoroverride"}]
        }],
        function (err, res) {
            proxyprinttodiv('Full results: ', res, 99);

            proxyprinttodiv('The author1 record: ', res[2], 99);

            debuglevel = 0;
            execute({
                "executethis": "getwidmaster",
                "wid": "author1"
            }, function (err, res1) {
                proxyprinttodiv("getwidmaster author1 result: ", res1, 99);
                callback(err, res);
            });
        });
}

// This tests inherit.override at the dto level with inherit.default set as well. authordto has inherit.override set & default set, but only the
// fields from the override should show up.
// NOTE: This does not work, same problem as testinheritoverride0. inherit.override in a dto is causing bad results.
exports.testinheritoverride3 = testinheritoverride3 = function testinheritoverride3(params, callback) {
    execute([{
            "executethis": "addwidmaster",
            "wid": "authordefault",
            "metadata.method": "authordto",
            "name": "Tom",
            "age": "58"
        }, {
            "executethis": "addwidmaster",
            "wid": "authoroverride",
            "metadata.method": "authordto",
            "name": "Alex",
            "age": "42"
        }, {
            "executethis": "addwidmaster",
            "wid": "authordto",
            "metadata.method": "authordto",
            "name": "string",
            "age": "string",
            "metadata.inherit": [{
                "wid": "authordefault",
                "command": {
                    "dtotype": "",
                    "adopt": "default"
                }
            }, {
                "wid": "authoroverride",
                "command": {
                    "dtotype": "",
                    "adopt": "override"
                }
            }]
            //    "metadata.inherit.default":[{"widname" : "authordefault"}],
            // "metadata.inherit.override":[{"widname" : "authoroverride"}]
        }, {
            "executethis": "addwidmaster",
            "wid": "author1",
            "metadata.method": "authordto"
        }],
        function (err, res) {
            proxyprinttodiv('Full results: ', res, 99);

            proxyprinttodiv('The author1 record: ', res[2], 99);

            debuglevel = 0;
            execute({
                "executethis": "getwidmaster",
                "wid": "author1"
            }, function (err, res1) {
                proxyprinttodiv("getwidmaster author1 result: ", res1, 99);
                callback(err, res);
            });
        });
}

// This tests inherit.override at the wid level with inherit.default set as well. author1 has inherit.override set & default set, but only the
// fields from the override should show up.
// works.
exports.testinheritoverride4 = testinheritoverride4 = function testinheritoverride4(params, callback) {
    execute([{
            "executethis": "addwidmaster",
            "wid": "authordefault",
            "metadata.method": "authordto",
            "name": "Tom",
            "age": "58"
        }, {
            "executethis": "addwidmaster",
            "wid": "authoroverride",
            "metadata.method": "authordto",
            "name": "Alex",
            "age": "42"
        }, {
            "executethis": "addwidmaster",
            "wid": "authordto",
            "metadata.method": "authordto",
            "name": "string",
            "age": "string"
        }, {
            "executethis": "addwidmaster",
            "wid": "author1",
            "metadata.method": "authordto",
            "metadata.inherit": [{
                "wid": "authordefault",
                "command": {
                    "dtotype": "",
                    "adopt": "default"
                }
            }, {
                "wid": "authoroverride",
                "command": {
                    "dtotype": "",
                    "adopt": "override"
                }
            }]
            // "metadata.inherit.default.0":{"authordefault" : "authordto"},
            // "metadata.inherit.override.0":{"authoroverride" : "authordto"}
        }],
        function (err, res) {
            proxyprinttodiv('Full results: ', res, 99);

            proxyprinttodiv('The author1 record: ', res[2], 99);

            debuglevel = 0;
            execute({
                "executethis": "getwidmaster",
                "wid": "author1"
            }, function (err, res1) {
                proxyprinttodiv("getwidmaster author1 result: ", res1, 99);
                callback(err, res);
            });
        });
}


/*************                          ***************/
/*************   INHERIT Override TESTS ***************/
/*************        Multi Level       ***************/

// Inherit Override set at the dto level. authordto inherits from authoroverride and authoroverride inherits from bookoverride
// *** DOES NOT WORK
exports.multiinheritoverride0 = multiinheritoverride0 = function multiinheritoverride0(params, callback) {
    execute([{
            "executethis": "addwidmaster",
            "wid": "bookoverride",
            "metadata.method": "bookdto",
            "title": "Haunted Houses"
        }, {
            "executethis": "addwidmaster",
            "wid": "authoroverride",
            "metadata.method": "authordto",
            "name": "Alex",
            "age": "42",
            //"metadata.inherit.0": [{"wid" : "bookoverride", "command" : { "dtotype":"", "adopt":"override"}}] //double [[]]
            "metadata.inherit": [{
                "wid": "bookoverride",
                "command": {
                    "dtotype": "",
                    "adopt": "override"
                }
            }]
            //"bookdto.0.inherit.override":[{"widname" : "bookoverride"}]
        }, {
            "wid": "bookdto",
            "metadata.method": "bookdto",
            "title": "string"
        }, {
            "executethis": "addwidmaster",
            "wid": "authordto",
            "metadata.method": "authordto",
            "name": "string",
            "age": "string",
            //"metadata.inherit.0": [{"wid" : "authoroverride", "command" : { "dtotype":"", "adopt":"override"}}] //double [[]]
            "metadata.inherit": [{
                "wid": "authoroverride",
                "command": {
                    "dtotype": "",
                    "adopt": "override"
                }
            }]
            //"metadata.inherit.default":[{"widname" : "authoroverride"}]
        }, {
            "executethis": "addwidmaster",
            "wid": "rel_author_book",
            "metadata.method": "relationshipdto",
            "relationshiptype": "attributes",
            "linktype": "onetomany",
            "primarywid": "authordto",
            "primarymethod": "authordto",
            "secondarywid": "bookdto",
            "secondarymethod": "bookdto"
        }, {
            "executethis": "addwidmaster",
            "wid": "author1",
            "metadata.method": "authordto"
        }],
        function (err, res) {
            proxyprinttodiv('Full results: ', res, 99);

            proxyprinttodiv('The author1 record: ', res[2], 99);

            debuglevel = 0;
            execute({
                "executethis": "getwidmaster",
                "wid": "author1"
            }, function (err, res1) {
                proxyprinttodiv("getwidmaster author1 result: ", res1, 99);
                callback(err, res);
            });
        });
}


// Inherit Override set at the dto level. authordto inherits from authoroverride and bookdto inherits from bookoverride
exports.multiinheritoverride1 = multiinheritoverride1 = function multiinheritoverride1(params, callback) {
    execute([{
            "executethis": "addwidmaster",
            "wid": "bookoverride",
            "metadata.method": "bookdto",
            "title": "Haunted Houses"
        }, {
            "executethis": "addwidmaster",
            "wid": "authoroverride",
            "metadata.method": "authordto",
            "name": "Alex",
            "age": "42"
        }, {
            "wid": "bookdto",
            "metadata.method": "bookdto",
            "title": "string",
            "metadata.inherit": [{
                "wid": "bookoverride",
                "command": {
                    "dtotype": "",
                    "adopt": "override"
                }
            }]
            //"metadata.inherit.override":[{"widname" : "bookoverride"}]
        }, {
            "executethis": "addwidmaster",
            "wid": "authordto",
            "metadata.method": "authordto",
            "name": "string",
            "age": "string",
            "metadata.inherit": [{
                "wid": "authoroverride",
                "command": {
                    "dtotype": "",
                    "adopt": "override"
                }
            }]
            //"metadata.inherit.default":[{"widname" : "authoroverride"}]
        }, {
            "executethis": "addwidmaster",
            "wid": "rel_author_book",
            "metadata.method": "relationshipdto",
            "relationshiptype": "attributes",
            "linktype": "onetomany",
            "primarywid": "authordto",
            "primarymethod": "authordto",
            "secondarywid": "bookdto",
            "secondarymethod": "bookdto"
        }, {
            "executethis": "addwidmaster",
            "wid": "author1",
            "metadata.method": "authordto"
        }],
        function (err, res) {
            proxyprinttodiv('Full results: ', res, 99);

            proxyprinttodiv('The author1 record: ', res[2], 99);

            debuglevel = 0;
            execute({
                "executethis": "getwidmaster",
                "wid": "author1"
            }, function (err, res1) {
                proxyprinttodiv("getwidmaster author1 result: ", res1, 99);
                callback(err, res);
            });
        });
}


// Inherit Override set at the wid level. author1 inherits from authoroverride and authoroverride inherits from bookoverride
exports.multiinheritoverride2 = multiinheritoverride2 = function multiinheritoverride2(params, callback) {
    execute([{
            "executethis": "addwidmaster",
            "wid": "bookoverride",
            "metadata.method": "bookdto",
            "title": "Haunted Houses"
        }, {
            "executethis": "addwidmaster",
            "wid": "authoroverride",
            "metadata.method": "authordto",
            "name": "Alex",
            "age": "42",
            "metadata.inherit": [{
                "wid": "bookoverride",
                "command": {
                    "dtotype": "",
                    "adopt": "override"
                }
            }]
        }, {
            "wid": "bookdto",
            "metadata.method": "bookdto",
            "title": "string"
        }, {
            "executethis": "addwidmaster",
            "wid": "authordto",
            "metadata.method": "authordto",
            "name": "string",
            "age": "string"
        }, {
            "executethis": "addwidmaster",
            "wid": "rel_author_book",
            "metadata.method": "relationshipdto",
            "relationshiptype": "attributes",
            "linktype": "onetomany",
            "primarywid": "authordto",
            "primarymethod": "authordto",
            "secondarywid": "bookdto",
            "secondarymethod": "bookdto"
        }, {
            "executethis": "addwidmaster",
            "wid": "author1",
            "metadata.method": "authordto",
            "metadata.inherit": [{
                "wid": "authoroverride",
                "command": {
                    "dtotype": "",
                    "adopt": "override"
                }
            }]
        }],
        function (err, res) {
            proxyprinttodiv('Full results: ', res, 99);

            proxyprinttodiv('The author1 record: ', res[2], 99);

            debuglevel = 0;
            execute({
                "executethis": "getwidmaster",
                "wid": "author1"
            }, function (err, res1) {
                proxyprinttodiv("getwidmaster author1 result: ", res1, 99);
                callback(err, res);
            });
        });
}


// Inherit Override set at the wid level. author1 inherits from authoroverride and authoroverride inherits from bookoverride. values already present in author1 should be overriden
exports.multiinheritoverride3 = multiinheritoverride3 = function multiinheritoverride3(params, callback) {
    execute([{
            "executethis": "addwidmaster",
            "wid": "bookoverride",
            "metadata.method": "bookdto",
            "title": "Haunted Houses"
        }, {
            "executethis": "addwidmaster",
            "wid": "authoroverride",
            "metadata.method": "authordto",
            "name": "Alex",
            "age": "42",
            "metadata.inherit": [{
                "wid": "bookoverride",
                "command": {
                    "dtotype": "",
                    "adopt": "override"
                }
            }]
            // "bookdto.0.inherit.override":[{"widname" : "bookoverride"}]
        }, {
            "wid": "bookdto",
            "metadata.method": "bookdto",
            "title": "string"
        }, {
            "executethis": "addwidmaster",
            "wid": "authordto",
            "metadata.method": "authordto",
            "name": "string",
            "age": "string",
            "metadata.inherit": [{
                "wid": "authoroverride",
                "command": {
                    "dtotype": "",
                    "adopt": "override"
                }
            }]
        }, {
            "executethis": "addwidmaster",
            "wid": "rel_author_book",
            "metadata.method": "relationshipdto",
            "relationshiptype": "attributes",
            "linktype": "onetomany",
            "primarywid": "authordto",
            "primarymethod": "authordto",
            "secondarywid": "bookdto",
            "secondarymethod": "bookdto"
        }, {
            "executethis": "addwidmaster",
            "wid": "author1",
            "metadata.method": "authordto",
            "name": "Tom",
            "age": "50",
            "bookdto.0.title": "My Little Pony"
        }],
        function (err, res) {
            proxyprinttodiv('Full results: ', res, 99);

            proxyprinttodiv('The author1 record: ', res[2], 99);

            debuglevel = 0;
            execute({
                "executethis": "getwidmaster",
                "wid": "author1"
            }, function (err, res1) {
                proxyprinttodiv("getwidmaster author1 result: ", res1, 99);
                callback(err, res);
            });
        });
}


exports.testaddauthor1 = testaddauthor1 = function testaddauthor1() {
    debuglevel = 11;

    execute([{
            "executethis": "addwidmaster",
            "wid": "authordto",
            "name": "string",
            "metadata.method": "authordto",
            "metadata.bookdto.type": "onetomany"
        }, {
            "wid": "bookdto",
            "title": "string",
            "metadata.method": "bookdto"
        }, {
            "executethis": "addwidmaster",
            "wid": "rel_author_book",
            "metadata.method": "relationshipdto",
            "relationshiptype": "attributes",
            "linktype": "onetomany",
            "primarywid": "authordto",
            "primarymethod": "authordto",
            "secondarywid": "bookdto",
            "secondarymethod": "bookdto"
        }, {
            "executethis": "addwidmaster",
            "wid": "marysue",
            "metadata.method": "authordto",
            "name": "Mary Sue",
            "bookdto.0.title": "Haunted Mansions"
        }],
        function (err, res) {
            proxyprinttodiv('Full results: ', res, 99);
        }
    );
}

exports.testjsononetoone0 = testjsononetoone0 = function testjsononetoone0(params, callback) {
    execute([{
            "executethis": "addwidmaster",
            "wid": "authordto",
            "metadata.method": "authordto",
            "name": "string",
            "age": "string",
            "metadata.spousedto.type": "onetoone"
        }, {
            "executethis": "addwidmaster",
            "wid": "spousedto",
            "metadata.method": "spousedto",
            "name": "string",
            "age": "string"
        }, {
            "executethis": "addwidmaster",
            "wid": "rel_author_to_spouse",
            "metadata.method": "relationshipdto",
            "relationshiptype": "attributes",
            "linktype": "onetoone",
            "primarywid": "authordto",
            "primarymethod": "authordto",
            "secondarywid": "spousedto",
            "secondarymethod": "spousedto"
        }, {
            "executethis": "addwidmaster",
            "wid": "spouse1",
            "metadata.method": "spousedto",
            "name": "Sarah Jones",
            "age": "28"
        }, {
            "executethis": "addwidmaster",
            "wid": "author1",
            "metadata.method": "authordto",
            "name": "Jim Jones",
            "age": "30",
            "spousedto.0.name": "Sarah",
            "spousedto.0.age": "28",
            "spousedto.0.hair": "blonde"
        }],
        function (err, res) {
            proxyprinttodiv('Full results: ', res, 99);

            proxyprinttodiv('The author1 record: ', res[3], 99);

            debuglevel = 0;
            execute({
                "executethis": "getwidmaster",
                "wid": "author1"
            }, function (err, res1) {
                proxyprinttodiv("getwidmaster author1 result: ", res1, 99);
                callback(err, res);
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