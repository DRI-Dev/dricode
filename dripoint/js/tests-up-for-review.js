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