
var widtests = widtests || {};

//*********************************************
// getcommand() tests
//*********************************************

// data, defaults, filter
//exports.lwr1 = lwr1 = function lwr1(params, callback) {
exports.lwr1 = widtests.lwr1 = lwr1 = function lwr1(params, callback) {

    var params = {
        "Alpha": "1",
        "beta": "2",
        "Charlie": "3",
        "Delta": "4"
    };
    var defaults = {
        "Beta": "555",
        "charlie": "777"
    };
    var filter = {
        "Beta": "",
        "charlie": ""
    };
    var err;
    var result = {};

    result = getcommand(params, defaults, filter, true);
    callback(err, result);
}
widtests.lwr1.category = "execute";
widtests.lwr1.subcategory = "daily";
widtests.lwr1.js = exports.lwr1;
widtests.lwr1.description = "this does a test";

//exports.lwr2 = lwr2 = function lwr2(params, callback) {
exports.lwr2 = widtests.lwr2 = lwr2 = function lwr2(params, callback) {

    var params = {
        "Alpha": "1",
        "bEta": "2",
        "Charlie": "3",
        "Delta": "4"
    };
    var defaults = {
        "Beta": "555",
        "charlie": "777"
    };

    var filter = {
        "Beta": "",
        "charlie": ""
    };
    var err;
    var result = {};

    result = getcommand(params, defaults, filter, false);
    callback(err, result);
}
widtests.lwr2.category = "execute";
widtests.lwr2.subcategory = "daily";
widtests.lwr2.js = exports.lwr2;
widtests.lwr2.description = "this does a test";

//exports.lwr3 = lwr3 = function lwr3(params, callback) {
exports.lwr3 = widtests.lwr3 = lwr3 = function lwr3(params, callback) {

    var params = {
        "Alpha": "1",
        "Beta": "2",
        "Charlie": "3",
        "Delta": "4"
    };
    var defaults = {
        "Beta": "",
        "charlie": ""
    };
    var filter = {
        "beta": "",
        "charlie": ""
    };
    var err;
    var result = {};

    result = getcommand(params, defaults, filter, true);
    callback(err, result);

}
widtests.lwr3.category = "execute";
widtests.lwr3.subcategory = "daily";
widtests.lwr3.js = exports.lwr3;
widtests.lwr3.description = "this does a test";

//exports.lwr4 = lwr4 = function lwr4(params, callback) {
exports.lwr4 = widtests.lwr4 = lwr4 = function lwr4(params, callback) {

    var params = {
        "Alpha": "1",
        "Beta": "2",
        "Charlie": "3",
        "Delta": "4"
    };
    var defaults = {
        "Beta": "",
        "charlie": ""
    };
    var filter = {
        "beta": "",
        "charlie": ""
    };
    var err;
    var result = {};

    result = getcommand(params, defaults, filter, false);
    callback(err, result);
}
widtests.lwr4.category = "execute";
widtests.lwr4.subcategory = "daily";
widtests.lwr4.js = exports.lwr4;
widtests.lwr4.description = "this does a test";

//exports.lwr5 = lwr5 = function lwr5(params, callback) {
exports.lwr5 = widtests.lwr5 = lwr5 = function lwr5(params, callback) {

    var params = {
        "Alpha": "1",
        "Beta": "2",
        "Charlie": "3",
        "Delta": "4"
    };
    var defaults = {
        "ceta": "",
        "charlie": ""
    };
    var filter = {
        "beta": "add",
        "charlie": "add"
    };
    var err;
    var result = {};

    result = getcommand(params, defaults, filter, true);
    callback(err, result);
}
widtests.lwr5.category = "execute";
widtests.lwr5.subcategory = "daily";
widtests.lwr5.js = exports.lwr5;
widtests.lwr5.description = "this does a test";


//exports.lwr6 = lwr6 = function lwr6(params, callback) {
exports.lwr6 = widtests.lwr6 = lwr6 = function lwr6(params, callback) {

    var params = {
        "Alpha": "1",
        "Beta": "2",
        "Charlie": "3",
        "Delta": "4"
    };
    var defaults = {
        "beta": "add",
        "charlie": "add"
    };
    var filter = {
        "beta": "",
        "charlie": ""
    };
    var err;
    var result = {};

    result = getcommand(params, defaults, filter, false);
    callback(err, result);
}
widtests.lwr6.category = "execute";
widtests.lwr6.subcategory = "daily";
widtests.lwr6.js = exports.lwr6;
widtests.lwr6.description = "this does a test";

//exports.lwr7 = lwr7 = function lwr7(params, callback) {
exports.lwr7 = widtests.lwr7 = lwr7 = function lwr7(params, callback) {

    var params = {
        "Alpha": "1",
        "Beta": "2",
        "Delta": "4"
    };
    var defaults = {};
    var filter = {};
    var err;
    var result = {};

    result = getcommand(params, defaults, filter, true);
    callback(err, result);
}
widtests.lwr7.category = "execute";
widtests.lwr7.subcategory = "daily";
widtests.lwr7.js = exports.lwr7;
widtests.lwr7.description = "this does a test";

//exports.lwr8 = lwr8 = function lwr8(params, callback) {
exports.lwr8 = widtests.lwr8 = lwr8 = function lwr8(params, callback) {

    var params = {
        "Alpha": "1",
        "Beta": "2",
        "Delta": "4"
    };
    var defaults = {};
    var filter = {};
    var err;
    var result = {};

    result = getcommand(params, defaults, filter, false);
    callback(err, result);
}
widtests.lwr8.category = "execute";
widtests.lwr8.subcategory = "daily";
widtests.lwr8.js = exports.lwr8;
widtests.lwr8.description = "this does a test";

//exports.lwr9 = lwr9 = function lwr9(params, callback) {
exports.lwr9 = widtests.lwr9 = lwr9 = function lwr9(params, callback) {

    var params = {
        "Alpha": "1",
        "Beta": "2",
        "Delta": "4"
    };
    var defaults = {
        "beta": "555",
        "Charlie": "777"
    };
    var filter = {
        "beta": "",
        "charlie": ""
    };
    var err;
    var result = {};

    result = getcommand(params, defaults, filter, true);
    callback(err, result);
}
widtests.lwr9.category = "execute";
widtests.lwr9.subcategory = "daily";
widtests.lwr9.js = exports.lwr9;
widtests.lwr9.description = "this does a test";

//exports.lwr10 = lwr10 = function lwr10(params, callback) {
exports.lwr10 = widtests.lwr10 = lwr10 = function lwr10(params, callback) {
    var params = {
        "Alpha": "1",
        "Beta": "2",
        "Delta": "4"
    };
    var defaults = {
        "beta": "555",
        "charlie": "777"
    };
    var filter = {
        "beta": "",
        "charlie": ""
    };
    var err;
    var result = {};

    result = getcommand(params, defaults, filter, false);
    callback(err, result);
}
widtests.lwr10.category = "execute";
widtests.lwr10.subcategory = "daily";
widtests.lwr10.js = exports.lwr10;
widtests.lwr10.description = "this does a test";

//exports.lwr11 = lwr11 = function lwr11(params, callback) {
exports.lwr11 = widtests.lwr11 = lwr11 = function lwr11(params, callback) {

    var params = {
        "Alpha": "1",
        "Beta": "2",
        "Delta": "4"
    };
    var defaults = {
        "beta": "",
        "charlie": ""
    };

    var filter = {
        "beta": "",
        "charlie": ""
    };
    var err;
    var result = {};

    result = getcommand(params, defaults, filter, true);
    callback(err, result);
}
widtests.lwr11.category = "execute";
widtests.lwr11.subcategory = "daily";
widtests.lwr11.js = exports.lwr11;
widtests.lwr11.description = "this does a test";

exports.lwr12 = widtests.lwr12 = lwr12 = function lwr12(params, callback) {

    var params = {
        "Alpha": "1",
        "Beta": "2",
        "Delta": "4"
    };
    var defaults = {
        "beta": "",
        "charlie": ""
    };
    var filter = {
        "beta": "",
        "charlie": ""
    };
    var err;
    var result = {};

    result = getcommand(params, defaults, filter, false);
    callback(err, result);
}
widtests.lwr12.category = "execute";
widtests.lwr12.subcategory = "daily";
widtests.lwr12.js = exports.lwr12;
widtests.lwr12.description = "this does a test";

exports.lwr13 = widtests.lwr13 = lwr13 = function lwr13(params, callback) {
    var params = {
        "Alpha": "1",
        "Beta": "2",
        "Delta": "4"
    };
    var defaults = {
        "beta": "",
        "charlie": ""
    };
    var filter = {
        "beta": "add",
        "charlie": "add"
    };
    var err;
    var result = {};

    result = getcommand(params, defaults, filter, true);
    callback(err, result);
}
widtests.lwr13.category = "execute";
widtests.lwr13.subcategory = "daily";
widtests.lwr13.js = exports.lwr13;
widtests.lwr13.description = "this does a test";

exports.lwr14 = widtests.lwr14 = lwr14 = function lwr14(params, callback) {
    var params = {
        "Alpha": "1",
        "Beta": "2",
        "Delta": "4"
    };
    var defaults = {
        "beta": "add",
        "charlie": "add"
    };
    var filter = {
        "beta": "add",
        "charlie": "add"
    };
    var err;
    var result = {};

    result = getcommand(params, defaults, filter, false);
	console.log('ran lwr14');
    callback(err, result);
}
widtests.lwr14.category = "execute";
widtests.lwr14.subcategory = "daily";
widtests.lwr14.js = exports.lwr14;
widtests.lwr14.description = "this does a test";

exports.lwr15 = widtests.lwr15 = lwr15 = function lwr15(params, callback) {
    var params = {
        "Alpha": "1",
        "Beta": "2",
        "Charlie": "3",
        "Delta": "4"
    };
    var defaults = {};
    var filter = {};
    var err;
    var result = {};

    result = getcommand(params, defaults, filter, true);
    callback(err, result);
}
widtests.lwr15.category = "execute";
widtests.lwr15.subcategory = "daily";
widtests.lwr15.js = exports.lwr15;
widtests.lwr15.description = "this does a test";

exports.lwr16 = widtests.lwr16 = lwr16 = function lwr16(params, callback) {
    var params = {
        "Alpha": "1",
        "Beta": "2",
        "Charlie": "3",
        "Delta": "4"
    };
    var defaults = {};
    var filter = {};
    var err;
    var result = {};

    result = getcommand(params, defaults, filter, false);
    callback(err, result);
}
widtests.lwr16.category = "execute";
widtests.lwr16.subcategory = "daily";
widtests.lwr16.js = exports.lwr16;
widtests.lwr16.description = "this does a test";


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
widtests.pu1.category = "execute";
widtests.pu1.subcategory = "daily";
widtests.pu1.js = exports.pu1;
widtests.pu1.description = "this does a test";


//*********************************************
// pack_up_params() tests
//*********************************************

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
widtests.ettest_recurseModObj.category = "execute";
widtests.ettest_recurseModObj.subcategory = "daily";
widtests.ettest_recurseModObj.js = exports.ettest_recurseModObj;
widtests.ettest_recurseModObj.description = "this does a test";


//*********************************************
// insertbydtotype() tests
//*********************************************

/*
this should insert {a:b} at the bookdto level
*/
exports.etget4 = widtests.etget4 = etget4 = function etget4(parameters, callback) {
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
        "wid": "authordto",
        "bookdto": {
            "title": "string",
            "pages": "string",
            "c": "string",
            "d": "string",
            "wid": "bookdto",
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
    };
    var insertobj = {
        "a": "b"
    };
    var command = {
        "dtotype": "bookdto"
    };


    var res = insertbydtotype(inputObject, inputdto, insertobj, command);

    proxyprinttodiv("res --", res, 17);
    var actual_result = [res];
    proxyprinttodiv("actual_result --", actual_result, 17);

    var expected_result = [{
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
            },
            "a": "b"
        }
    }];
    proxyprinttodiv("expected_result --", expected_result, 17);

    res = logverify("logverify", actual_result, expected_result);
    callback(null, res);
}
widtests.etget4.category = "execute";
widtests.etget4.subcategory = "daily";
widtests.etget4.js = exports.etget4;
widtests.etget4.description = "this does a test";

exports.etget22 = widtests.etget22 = etget22 = function etget22(parameters, callback) { //add clean test
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
        "wid": "authordto",
        "bookdto": {
            "title": "string",
            "pages": "string",
            "c": "string",
            "d": "string",
            "wid": "bookdto",
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
    };
    var insertobj = {
        "a": "b"
    };
    var command = {
        "dtotype": "bookdto"
    };
    var res = insertbydtotype(inputObject, inputdto, insertobj, command);
    proxyprinttodiv("res --", res, 17);
    var actual_result = [res];
    proxyprinttodiv("actual_result --", actual_result, 17);

    var expected_result = [{
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
            },
            "a": "b"
        }
    }];
    proxyprinttodiv("expected_result --", expected_result, 17);

    res = logverify("logverify", actual_result, expected_result);
    callback(null, res);
}
widtests.etget22.category = "execute";
widtests.etget22.subcategory = "daily";
widtests.etget22.js = exports.etget22;
widtests.etget22.description = "this does a test";

/*
do not specify command.dto...should put it at root/author level
*/
exports.etget5 = widtests.etget5 = etget5 = function etget5(parameters, callback) {
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
        "wid": "authordto",
        "bookdto": {
            "title": "string",
            "pages": "string",
            "c": "string",
            "d": "string",
            "wid": "bookdto",
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
    };
    var insertobj = {
        "a": "b"
    };
    var command = {};
    var res = insertbydtotype(inputObject, inputdto, insertobj, command);
    proxyprinttodiv("res --", res, 17);
    var actual_result = [res];
    proxyprinttodiv("actual_result --", actual_result, 17);

    var expected_result = [{
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
        },
        "a": "b"
    }];
    proxyprinttodiv("expected_result --", expected_result, 17);

    res = logverify("logverify", actual_result, expected_result);
    callback(null, res);
}
widtests.etget5.category = "execute";
widtests.etget5.subcategory = "daily";
widtests.etget5.js = exports.etget5;
widtests.etget5.description = "this does a test";

/*
specify command.dtotype = x should wrap result in {x: {.....}}
*/
exports.etget6 = widtests.etget6 = etget6 = function etget6(parameters, callback) {
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
        "wid": "authordto",
        "bookdto": {
            "title": "string",
            "pages": "string",
            "c": "string",
            "d": "string",
            "wid": "bookdto",
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
    };
    var insertobj = {
        "a": "b"
    };
    var command = {
        "dtotype": "x"
    };
    var res = insertbydtotype(inputObject, inputdto, insertobj, command);
    proxyprinttodiv("res --", res, 17);
    var actual_result = [res];
    proxyprinttodiv("actual_result --", actual_result, 17);

    var expected_result = [{
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
    }];
    proxyprinttodiv("expected_result --", expected_result, 17);

    res = logverify("logverify", actual_result, expected_result);
    callback(null, res);
}
widtests.etget6.category = "execute";
widtests.etget6.subcategory = "daily";
widtests.etget6.js = exports.etget6;
widtests.etget6.description = "this does a test";

/*
specify command.dtotype.x.y.z should wrap result in {x:{y:z{......}}}
*/
exports.etget7 = widtests.etget7 = etget7 = function etget7(parameters, callback) {
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
        "wid": "authordto",
        "bookdto": {
            "title": "string",
            "pages": "string",
            "c": "string",
            "d": "string",
            "wid": "bookdto",
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
    };
    var insertobj = {
        "a": "b"
    };
    var command = {
        "dtotype": {
            "x": {
                "y": "z"
            }
        }
    };
    var res = insertbydtotype(inputObject, inputdto, insertobj, command);
    proxyprinttodiv("res --", res, 17);
    var actual_result = [res];
    proxyprinttodiv("actual_result --", actual_result, 17);

    var expected_result = [{
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
    }];
    proxyprinttodiv("expected_result --", expected_result, 17);

    res = logverify("logverify", actual_result, expected_result);
    callback(null, res);
}
widtests.etget7.category = "execute";
widtests.etget7.subcategory = "daily";
widtests.etget7.js = exports.etget7;
widtests.etget7.description = "this does a test";

/*
get8 - to get the dtoname
*/
exports.etget8 = widtests.etget8 = etget8 = function etget8(parameters, callback) {
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
        "wid": "authordto",
        "bookdto": {
            "title": "string",
            "pages": "string",
            "c": "string",
            "d": "string",
            "wid": "bookdto",
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
    };
    var insertobj = {
        "metadata.method": "bookdto"
    };
    var command = {
        "dtotype": "bookdto"
    };
    var res = insertbydtotype(inputObject, inputdto, insertobj, command);
    proxyprinttodiv("res --", res, 17);
    var actual_result = [res];
    proxyprinttodiv("actual_result --", actual_result, 17);

    var expected_result = [{
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
            },
            "metadata.method": "bookdto"
        }
    }];
    proxyprinttodiv("expected_result --", expected_result, 17);

    res = logverify("logverify", actual_result, expected_result);
    callback(null, res);
}
widtests.etget8.category = "execute";
widtests.etget8.subcategory = "daily";
widtests.etget8.js = exports.etget8;
widtests.etget8.description = "this does a test";