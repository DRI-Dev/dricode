/* Adding data for the survey */
if (!widtests) { var widtests = {}; }

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


/* Adding data for the survey with addwidmaster */
exports.surveydata2 = widtests.surveydata2 = surveydata2 = function surveydata2(params, callback) {

    execute([

            // Create the user dto  
            {
                "executethis": "updatewid",
                "wid": "userdto",
                "metadata.method": "userdto",
                "userid": "number",
                "first": "string",
                "last": "string",
                "surveydto": "onetomany"
            },
            // Create the survey dto
            {
                "executethis": "updatewid",
                "wid": "surveydto",
                "metadata.method": "surveydto",
                "title": "string",
                "description": "string",
                "questiondto": "onetomany"
            },

            // Adding user data 

            {
                "executethis": "addwidmaster",
                "wid": "happy",
                "metadata": {
                    "method": "surveydto",
                    "userdto": {
                        "type": "onetomany"
                    }
                },
                "userdto": {
                    "metadata": {
                        "method": "userdto"
                    },
                    "userid": "2",
                    "first": "Bill",
                    "last": "Duncan"
                },
                "surveydto": {
                    "metadata": {
                        "method": "surveydto"
                    },
                    "title": "Happy Meter",
                    "description": "Daily rating of how you feel"
                }
            },

            {
                "executethis": "getwidmaster",
                "wid": "Bill"
            }, {
                "executethis": "getwidmaster",
                "wid": "happy"
            }
        ],
        function(err, res) {
            proxyprinttodiv('Function getwidmongo parameterObject after', res[0], 17);
            proxyprinttodiv('Function getwidmongo parameterObject after', res[1], 17);
            proxyprinttodiv('Function getwidmongo parameterObject after', res[2], 17);
            proxyprinttodiv('Function getwidmongo parameterObject after', res[3], 17);
            proxyprinttodiv('Function getwidmongo parameterObject after', res[4], 17);
            callback(err, res)
        });
}
widtests.surveydata2.category = "execute";
widtests.surveydata2.subcategory = "daily";
widtests.surveydata2.js = exports.surveydata2;
widtests.surveydata2.description = "this does a test";

/* Adding data for a flat survey */
exports.surveydtoflat = widtests.surveydtoflat = surveydtoflat = function surveydtoflat(params, callback) {

    execute([
            // Create the flatsurveydto dto 
            {
                "executethis": "updatewid",
                "wid": "flatsurveydto",
                "metadata.method": "flatsurveydto",
                "userdto": "userdto",
                "surveydto": {
                    "questiondto": [{
                        "answerdto": [
                            "answerdto"
                        ]
                    }, {
                        "responsedto": [
                            "responsedto"
                        ]
                    }]
                }
            },

            // Create the flatsurvey data
            {
                "executethis": "updatewid",
                "wid": "flatsurvey",
                "metadata.method": "flatsurveydto",
                "userdto": {
                    "metadata.method": "userdto",
                    "userid": "2",
                    "first": "Bill",
                    "last": "Duncan"
                },
                "surveydto": {
                    "metadata.method": "surveydto",
                    "title": "Happy Meter",
                    "description": "Daily rating of how you feel",
                    "questiondto": [{
                        "metadata.method": "questiondto",
                        "question": "How do you feel today?",
                        "answerdto": {
                            "metadata.method": "answerdto",
                            "answers": [
                                "Outstanding",
                                "Great",
                                "Okay",
                                "Tired",
                                "Sick"
                            ]
                        },
                        "responsedto": [{
                            "response": "Outstanding",
                            "userid": "2"
                        }, {
                            "response": "Sick",
                            "userid": "3"
                        }, {
                            "response": "Tired",
                            "userid": "4"
                        }]
                    }, {
                        "metadata.method": "questiondto",
                        "question": "How do you think you will feel tomorrow?",
                        "answerdto": {
                            "metadata.method": "answerdto",
                            "answers": [
                                "Fantastic",
                                "Can't stop me now",
                                "Okay",
                                "I'll be better tomorrow",
                                "Terrible"
                            ]
                        },
                        "responsedto": [{
                            "response": "Outstanding",
                            "userid": "2"
                        }, {
                            "response": "Okay",
                            "userid": "3"
                        }, {
                            "response": "Sick",
                            "userid": "4"
                        }]
                    }]
                },
            }, {
                "executethis": "getwidmaster",
                "wid": "flatsurvey"
            }
        ],
        function(err, res) {
            callback(err, res)
        });
}
widtests.surveydtoflat.category = "execute";
widtests.surveydtoflat.subcategory = "daily";
widtests.surveydtoflat.js = exports.surveydtoflat;
widtests.surveydtoflat.description = "this does a test";