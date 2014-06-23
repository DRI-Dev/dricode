
var widtests = widtests || {};
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