
var widtests = widtests || {};

exports.tftest_allexecute = 
widtests.tftest_allexecute = 
tftest_allexecute = 
function tftest_allexecute(executeobject, callback) 
{
	var start = new Date().getTime();
    async.series(
    [   
    //function (cb1) {ettest_serieslevel0({}, function (err, res) {cb1(null, res)})},
    //function (cb1) {ettest_serieslevel1({}, function (err, res) {cb1(null, res)})},
    //function (cb1) {ettest_grouplevel0({}, function (err, res) {cb1(null, res)})},
	//function (cb1) {ettest_grouplevel1({}, function (err, res) {cb1(null, res)})},	
    ],
    function (err, res) {
      proxyprinttodiv('result from many array', res, 99);
      callback(null,res);
	  proxyprinttodiv('total elapsed time ', new Date().getTime() - start, 99);
    })
	console.log('end tftest_allexecute');
};
widtests.tftest_allexecute.category = "redaily";
widtests.tftest_allexecute.subcategory = "push";
widtests.tftest_allexecute.js = tftest_allexecute;
widtests.tftest_allexecute.description = "This is the master test. this test calls all of the individual testing groups for testing execute.";


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
widtests.lwr1.category = "redaily";
widtests.lwr1.subcategory = "addhoc";
widtests.lwr1.js = exports.lwr1;
widtests.lwr1.description = "this does a test";

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
widtests.lwr3.category = "redaily";
widtests.lwr3.subcategory = "addhoc";
widtests.lwr3.js = exports.lwr3;
widtests.lwr3.description = "this does a test";


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
widtests.lwr5.category = "redaily";
widtests.lwr5.subcategory = "addhoc";
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
widtests.lwr6.category = "redaily";
widtests.lwr6.subcategory = "addhoc";
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
widtests.lwr7.category = "redaily";
widtests.lwr7.subcategory = "addhoc";
widtests.lwr7.js = exports.lwr7;
widtests.lwr7.description = "this does a test";


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
widtests.lwr9.category = "redaily";
widtests.lwr9.subcategory = "addhoc";
widtests.lwr9.js = exports.lwr9;
widtests.lwr9.description = "this does a test";


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
widtests.lwr11.category = "redaily";
widtests.lwr11.subcategory = "addhoc";
widtests.lwr11.js = exports.lwr11;
widtests.lwr11.description = "this does a test";


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
widtests.lwr13.category = "redaily";
widtests.lwr13.subcategory = "addhoc";
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
widtests.lwr14.category = "redaily";
widtests.lwr14.subcategory = "addhoc";
widtests.lwr14.js = exports.lwr14;
widtests.lwr14.description = "this does a test";


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
widtests.etget4.category = "redaily";
widtests.etget4.subcategory = "addhoc";
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
widtests.etget22.category = "redaily";
widtests.etget22.subcategory = "addhoc";
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
widtests.etget5.category = "redaily";
widtests.etget5.subcategory = "addhoc";
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
widtests.etget6.category = "redaily";
widtests.etget6.subcategory = "addhoc";
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
widtests.etget7.category = "redaily";
widtests.etget7.subcategory = "addhoc";
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
widtests.etget8.category = "redaily";
widtests.etget8.subcategory = "addhoc";
widtests.etget8.js = exports.etget8;
widtests.etget8.description = "this does a test";


//*********************************************
// deepfilter() tests
//*********************************************


// These are the deepfilter tests
//exports.ettestetdtt = ettestetdtt = function ettestetdtt(params, callback) {
exports.ettestetdtt = widtests.ettestetdtt = ettestetdtt = function ettestetdtt(params, callback) {

    var result = [];
    var err;

    etd16(result, function(err, r1) {
        result.push(r1);
        etd17(result, function(err, r2) {
            result.push(r2);
            etd18(result, function(err, r3) {
                result.push(r3);
                etd19(result, function(err, r4) {
                    result.push(r4);
                    callback(err, result);
                });
            });
        });
    });
};
widtests.ettestetdtt.category = "redaily";
widtests.ettestetdtt.subcategory = "addhoc";
widtests.ettestetdtt.js = exports.ettestetdtt;
widtests.ettestetdtt.description = "this does a test";


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
widtests.etd1.category = "redaily";
widtests.etd1.subcategory = "addhoc";
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
widtests.etd2.category = "redaily";
widtests.etd2.subcategory = "addhoc";
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
widtests.etd3.category = "redaily";
widtests.etd3.subcategory = "addhoc";
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
widtests.dupdateget4.category = "redaily";
widtests.dupdateget4.subcategory = "addhoc";
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
widtests.etd5.category = "redaily";
widtests.etd5.subcategory = "addhoc";
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
widtests.etd6.category = "redaily";
widtests.etd6.subcategory = "addhoc";
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
widtests.etd7.category = "redaily";
widtests.etd7.subcategory = "addhoc";
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
widtests.etd8.category = "redaily";
widtests.etd8.subcategory = "addhoc";
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
widtests.etd10.category = "redaily";
widtests.etd10.subcategory = "addhoc";
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
widtests.etd10b.category = "redaily";
widtests.etd10b.subcategory = "addhoc";
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
widtests.etd11.category = "redaily";
widtests.etd11.subcategory = "addhoc";
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
widtests.etd12.category = "redaily";
widtests.etd12.subcategory = "addhoc";
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
widtests.etd13.category = "redaily";
widtests.etd13.subcategory = "addhoc";
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
widtests.etd14.category = "redaily";
widtests.etd14.subcategory = "addhoc";
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
widtests.etalldeepfiltertests.category = "redaily";
widtests.etalldeepfiltertests.subcategory = "addhoc";
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
widtests.etd9.category = "redaily";
widtests.etd9.subcategory = "addhoc";
widtests.etd9.js = exports.etd9;
widtests.etd9.description = "this does a test";


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
widtests.etd16.category = "redaily";
widtests.etd16.subcategory = "addhoc";
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
widtests.etd17.category = "redaily";
widtests.etd17.subcategory = "addhoc";
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
widtests.etd18.category = "redaily";
widtests.etd18.subcategory = "addhoc";
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
widtests.etd19.category = "redaily";
widtests.etd19.subcategory = "addhoc";
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
    //debuglevel = 0;
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
                proxyprinttodiv("after etd16 deepfilter in", inputObj, 17, true, true);
                proxyprinttodiv("after etd16 deepfilter dto", dtoObjOpt, 17, true, true);
                proxyprinttodiv("after etd16 deepfilter res", res, 17, true, true);
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
widtests.etd26.category = "redaily";
widtests.etd26.subcategory = "addhoc";
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
widtests.etd27.category = "redaily";
widtests.etd27.subcategory = "addhoc";
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
widtests.etd28.category = "redaily";
widtests.etd28.subcategory = "addhoc";
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
widtests.etd29.category = "redaily";
widtests.etd29.subcategory = "addhoc";
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
widtests.etd30.category = "redaily";
widtests.etd30.subcategory = "addhoc";
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
widtests.lmetd2.category = "redaily";
widtests.lmetd2.subcategory = "addhoc";
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
widtests.lmetd3.category = "redaily";
widtests.lmetd3.subcategory = "addhoc";
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
widtests.lmetd4.category = "redaily";
widtests.lmetd4.subcategory = "addhoc";
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
widtests.lmetd5.category = "redaily";
widtests.lmetd5.subcategory = "addhoc";
widtests.lmetd5.js = exports.lmetd5;
widtests.lmetd5.description = "this does a test";