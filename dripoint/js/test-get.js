
var widtests = widtests || {};

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
widtests.etget1.category = "execute";
widtests.etget1.subcategory = "daily";
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
widtests.etget3.category = "execute";
widtests.etget3.subcategory = "daily";
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
widtests.etget2.category = "execute";
widtests.etget2.subcategory = "daily";
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
widtests.etget11.category = "execute";
widtests.etget11.subcategory = "daily";
widtests.etget11.js = exports.etget11;
widtests.etget11.description = "this does a test";

/* Adding data for the survey */
exports.surveydata = widtests.surveydata = surveydata = function surveydata(params, callback) {

    saveglobal("debugname", "addmaster");
    debuglevel = 97;
    saveglobal("debugcolor", 1);
    saveglobal("debugindent", 1);
    saveglobal("debugcolor", 5);

    execute([

            // Create the user dto  
            {
                "executethis": "updatewid",
                "wid": "userdto",
                "metadata.method": "userdto",
                "userid": "number",
                "first": "string",
                "last": "string",
                "metadata.surveydto.type": "onetomany"
            },
            // Create the survey dto
            {
                "executethis": "updatewid",
                "wid": "surveydto",
                "metadata.method": "surveydto",
                "title": "string",
                "description": "string"
            }, //, "metadata.questiondto.type": "onetomany"
            // Relate the survey dto to the question dto (surveys can have multiple questions)
            {
                "executethis": "updatewid",
                "linktype": "onetomany",
                "wid": "relationshipdto1",
                "metadata.method": "relationshipdto",
                "primarywid": "userdto",
                "secondarywid": "surveydto",
                "relationshiptype": "attributes"
            },
            // Adding user data 
            {
                "executethis": "updatewid",
                "wid": "bill",
                "metadata.method": "userdto",
                "userid": "2",
                "first": "Bill",
                "last": "Duncan"
            },
            //{"executethis": "updatewid", "wid": "mysurvey", "metadata.method": "userdto", "userdto": [{ "metadata.method": "userdto", "userid": "2", "first": "Bill", "last": "Duncan"}] },
            // Create the survey
            {
                "executethis": "updatewid",
                "wid": "happy",
                "metadata.method": "surveydto",
                "title": "Happy Meter",
                "description": "Daily rating of how you 'feel' things are going."
            }, {
                "executethis": "updatewid",
                "linktype": "onetomany",
                "wid": "relationshipdto2",
                "metadata.method": "relationshipdto",
                "primarywid": "bill",
                "secondarywid": "happy",
                "relationshiptype": "attributes"
            },

            {
                "executethis": "getwidmaster",
                "wid": "bill"
            }, {
                "executethis": "getwidmaster",
                "wid": "happy"
            },

            {
                "executethis": "addwidmaster",
                "wid": "bill2",
                "metadata.method": "userdto",
                "userid": "2",
                "first": "Bill",
                "last": "Duncan",
                "surveydto.title": "Happy Meter",
                "surveydto.description": "Daily rating of how you 'feel' things are going."
            }, {
                "executethis": "getwidmaster",
                "wid": "bill2"
            }
        ],
        function(err, res) {
            proxyprinttodiv('Function update userdto', res[0], 17);
            proxyprinttodiv('Function update surveydto', res[1], 17);
            proxyprinttodiv('Function update relationshipdto1', res[2], 17);
            proxyprinttodiv('Function update bill', res[3], 17);
            proxyprinttodiv('Function update happy', res[4], 17);
            proxyprinttodiv('Function update relationshipdto1', res[5], 17);
            proxyprinttodiv('Function get bill', res[6], 17);
            proxyprinttodiv('Function get happy', res[7], 17);
            proxyprinttodiv('Function update bill2', res[8], 17);
            proxyprinttodiv('Function get bill2', res[9], 17);
            callback(err, res)
        });
}
widtests.surveydata.category = "execute";
widtests.surveydata.subcategory = "daily";
widtests.surveydata.js = exports.surveydata;
widtests.surveydata.description = "this does a test";