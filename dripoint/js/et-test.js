
/*
        manytomany test
    */


exports.ettestag111 = ettestag111 = function ettestag111(params, callback) {
    debuglevel = 12;
    // eventappinstall();
    execute([{
            "executethis": "addwidmaster",
            "wid": "sounddto",
            "metadata.method": "sounddto",
            "note": "string"
        }, {
            "executethis": "getwidmaster",
            "wid": "sounddto"
        }],
        function (err, res1) {
            proxyprinttodiv("Ag1  result ", res1, 99);
            var res = res1[1]; //~~~ changed by SAURABH 
            //var res = res1[0];


            proxyprinttodiv('Function ag1 result ', res, 17);
            res = logverify("ettestag1_result", res, [{
                "note": "string",
                "wid": "sounddto",
                "metadata.method": "sounddto"
            }]);
            callback(err, res);
        });
}



exports.ettestag111 = ettestag111 = function ettestag111(params, callback) {
    debuglevel = 12;
    // eventappinstall();
    execute([{
            "executethis": "addwidmaster",
            "wid": "sounddto",
            "metadata.method": "sounddto",
            "note": "string"
        }, {
            "executethis": "getwidmaster",
            "wid": "sounddto"
        }],
        function (err, res1) {
            proxyprinttodiv("Ag1  result ", res1, 99);
            var res = res1[1]; //~~~ changed by SAURABH 
            //var res = res1[0];


            proxyprinttodiv('Function ag1 result ', res, 17);
            res = logverify("ettestag1_result", res, [{
                "note": "string",
                "wid": "sounddto",
                "metadata.method": "sounddto"
            }]);
            callback(err, res);
        });
}






/*
        To get wid from db(default "data")
    */
exports.etgetfromdbdata = etgetfromdbdata = function etgetfromdbdata(parameters, callback) {
    debuglevel = 17;
    eventappinstall();

    execute([{
        "executethis": "getwidmaster",
        "wid": "sounddto"
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
            "db": "data"
        }
    }, {
        "executethis": "getwidmaster",
        "wid": "wid3",
        "command": {
            "collection": "othercollection"
        }
    }], function (err, res) {
        callback(err, res);
        proxyprinttodiv("res -- get", res, 17);
    });
}

/*
        Update, Get collection
    */
exports.etupdategetcollection1 = etupdategetcollection1 = function etupdategetcollection1(parameters, callback) {
    var updatecommand = {
        "command": {
            "collection": "test"
        }
    };
    var getcommand = {
        "command": {
            "collection": "test"
        }
    };
    updategetdatastore(updatecommand, getcommand, function (err, res) {
        callback(err, res);
    });
}

/*
        Update, Get collection
    */
exports.etupdategetkeycollection1 = etupdategetkeycollection1 = function etupdategetkeycollection1(parameters, callback) {
    var updatecommand = {
        "command": {
            "keycollection": "test"
        }
    };
    var getcommand = {
        "command": {
            "keycollection": "test"
        }
    };
    updategetdatastore(updatecommand, getcommand, function (err, res) {
        callback(err, res);
    });
}


// tests systemdto from get
exports.testusersystem = testusersystem = function testusersystem(params, callback) {
    debuglevel = 0;
    execute({
        "executethis": "getwidmaster",
        "command.convertmethod": "dto",
        "wid": "userdto"
    }, function (err, res1) {
        proxyprinttodiv("getwidmaster userdto result: ", res1, 99);
        var found = [];
        for (var prop in res1[0]) {
            if (prop.indexOf("systemdto") != -1) {
                found.push(prop + " : " + res1[0][prop]);
            }
        }
        proxyprinttodiv("systemdto fields found: ", found, 99);
        //callback(err, res1); 
    });
}


// SYSTEM DTO TESTS

exports.adduserdto = adduserdto = function adduserdto(params, callback) {

    execute({
            // Create the userdto
            "executethis": "addwidmaster",
            "metadata.method": "userdto",
            "wid": "userdto",
            "widname": "wid",
            "fname": "string",
            "lname": "string",
            "phone": "string",
            "email": "string",
            "address": "string",
            "address2": "string",
            "city": "string",
            "state": "string",
            "zip": "string",
            "country": "string",
            "metadata.usergroupdto.type": "onetomany"
        },
        //"metadata.securitydto.type": "onetoone",
        //"metadata.environmentdto.type": "onetoone",
        //"metadata.permissiondto.type": "onetomany",
        //"metadata.usergroupdto.type":"onetomany"},

        function (err, res1) {
            proxyprinttodiv("addwidmaster userdto result: ", res1, 99);
            callback(err, res1);
        }
    );
}




exports.systemdinuserdto1 = systemdinuserdto1 = function systemdinuserdto1(params, callback) {
    adduserdto(null, function (err, res) {
        execute({
                // Create the userdto
                "executethis": "addwidmaster",
                "metadata.method": "userdto",
                "wid": "userdto",
                "systemdto.expirationdate": "6/14/14"
            },
            function (err, res) {
                //proxyprinttodiv('Full results: ', res, 99);

                //proxyprinttodiv('The userdto record: ', res[2], 99);

                //  debuglevel = 0;
                execute({
                    "executethis": "getwidmaster",
                    "wid": "userdto"
                }, function (err, res1) {
                    proxyprinttodiv("getwidmaster userdto result: ", res1, 99);
                    callback(err, res);
                });
            });
    });
}

exports.systemdinuserwid1 = systemdinuserwid1 = function systemdinuserwid1(params, callback) {
    adduserdto();
    execute([{
            // Create the userdto
            "executethis": "addwidmaster",
            "metadata.method": "userdto",
            "wid": "user1",
            "systemdto.expirationdate": "6/14/14",
            "systemdto.blahblah": "blah"
        }],
        function (err, res) {
            //proxyprinttodiv('Full results: ', res, 99);

            //proxyprinttodiv('The userdto record: ', res[2], 99);

            //      debuglevel = 0;
            execute({
                "executethis": "getwidmaster",
                "wid": "user1"
            }, function (err, res1) {
                proxyprinttodiv("getwidmaster user1 result: ", res1, 99);
                callback(err, res);
            });
        });
}

exports.deepsystemdto1 = deepsystemdto1 = function deepsystemdto1(params, callback) {
    //adduserdto();

    execute([{
            // Create the userdto
            "executethis": "addwidmaster",
            "metadata.method": "userdto",
            "wid": "userdto",
            "widname": "wid",
            "fname": "string",
            "lname": "string",
            "phone": "string",
            "email": "string",
            "address": "string",
            "address2": "string",
            "city": "string",
            "state": "string",
            "zip": "string",
            "country": "string",
            "metadata.usergroupdto.type": "onetomany"
        }, {
            "wid": "usergroupdto",
            "metadata.method": "usergroupdto",
            "groupname": "string"
        }, {
            "executethis": "addwidmaster",
            "wid": "rel_user_usergroup",
            "metadata.method": "relationshipdto",
            "relationshiptype": "attributes",
            "linktype": "onetomany",
            "primarywid": "userdto",
            "primarymethod": "userdto",
            "secondarywid": "usergroupdto",
            "secondarymethod": "usergroupdto"
        }, {
            "executethis": "addwidmaster",
            "wid": "user1",
            "metadata.method": "userdto",
            "fname": "Bob",
            //"systemdto.expirationdate": "6/14/14",
            "usergroupdto.groupname": "Everyone",
            //"usergroupdto.systemdto.expirationdate": "7/14/14"
        }],
        function (err, res) {
            //proxyprinttodiv('Full results: ', res, 99);

            //proxyprinttodiv('The userdto record: ', res[2], 99);

            //      debuglevel = 0;
            execute({
                "executethis": "getwidmaster",
                "wid": "user1"
            }, function (err, res1) {
                proxyprinttodiv("getwidmaster user1 result: ", res1, 99);
                callback(err, res);
            });
        });
}

exports.deepsystemdto2 = deepsystemdto2 = function deepsystemdto2(params, callback) {
    //adduserdto();

    execute([{
            // Create the userdto
            "executethis": "addwidmaster",
            "metadata.method": "userdto",
            "wid": "userdto",
            "widname": "wid",
            "fname": "string",
            "lname": "string",
            "phone": "string",
            "email": "string",
            "address": "string",
            "address2": "string",
            "city": "string",
            "state": "string",
            "zip": "string",
            "country": "string",
            "metadata.usergroupdto.type": "onetomany",
            "systemdto.expirationdate": "string",
            "usergroupdto.systemdto.expirationdate": "string"
        }, {
            "wid": "usergroupdto",
            "metadata.method": "usergroupdto",
            "groupname": "string"
        }, {
            "executethis": "addwidmaster",
            "wid": "rel_user_usergroup",
            "metadata.method": "relationshipdto",
            "relationshiptype": "attributes",
            "linktype": "onetomany",
            "primarywid": "userdto",
            "primarymethod": "userdto",
            "secondarywid": "usergroupdto",
            "secondarymethod": "usergroupdto"
        }],
        function (err, res) {
            //proxyprinttodiv('Full results: ', res, 99);

            //proxyprinttodiv('The userdto record: ', res[2], 99);

            //      debuglevel = 0;
            execute({
                "executethis": "getwidmaster",
                "command.getwidmaster.convertmethod": "dto",
                "wid": "userdto"
            }, function (err, res1) {
                proxyprinttodiv("getwidmaster userdto result: ", res1, 99);
                callback(err, res);
            });
        });
}

// Tries to introduce data not found in systemdto into userdto and its child usergroupdto
exports.deepsystemdto3 = deepsystemdto3 = function deepsystemdto3(params, callback) {
    //adduserdto();

    execute([{
            // Create the userdto
            "executethis": "addwidmaster",
            "metadata.method": "userdto",
            "wid": "userdto",
            "widname": "wid",
            "fname": "string",
            "lname": "string",
            "phone": "string",
            "email": "string",
            "address": "string",
            "address2": "string",
            "city": "string",
            "state": "string",
            "zip": "string",
            "country": "string",
            "metadata.usergroupdto.type": "onetomany",
            "systemdto.blahblah": "this shouldn't exist in userdto.systemdto"
        }, {
            "wid": "usergroupdto",
            "metadata.method": "usergroupdto",
            "groupname": "string",
            "systemdto.blahblah": "this shouldn't exist in usergroupdto.systemdto"
        }, {
            "executethis": "addwidmaster",
            "wid": "rel_user_usergroup",
            "metadata.method": "relationshipdto",
            "relationshiptype": "attributes",
            "linktype": "onetomany",
            "primarywid": "userdto",
            "primarymethod": "userdto",
            "secondarywid": "usergroupdto",
            "secondarymethod": "usergroupdto"
        }],
        function (err, res) {
            //proxyprinttodiv('Full results: ', res, 99);

            //proxyprinttodiv('The userdto record: ', res[2], 99);

            //      debuglevel = 0;
            execute({
                "executethis": "getwidmaster",
                "command.getwidmaster.convertmethod": "dto",
                "wid": "userdto"
            }, function (err, res1) {
                proxyprinttodiv("getwidmaster userdto result: ", res1, 99);
                callback(err, res);
            });
        });
}


// Tries to introduce data not found in systemdto into user1 and user1's usergroup
exports.deepsystemdto4 = deepsystemdto4 = function deepsystemdto4(params, callback) {
    //adduserdto();

    execute([{
            // Create the userdto
            "executethis": "addwidmaster",
            "metadata.method": "userdto",
            "wid": "userdto",
            "widname": "wid",
            "fname": "string",
            "lname": "string",
            "phone": "string",
            "email": "string",
            "address": "string",
            "address2": "string",
            "city": "string",
            "state": "string",
            "zip": "string",
            "country": "string",
            "metadata.usergroupdto.type": "onetomany"
        }, {
            "wid": "usergroupdto",
            "metadata.method": "usergroupdto",
            "groupname": "string"
        }, {
            "executethis": "addwidmaster",
            "wid": "rel_user_usergroup",
            "metadata.method": "relationshipdto",
            "relationshiptype": "attributes",
            "linktype": "onetomany",
            "primarywid": "userdto",
            "primarymethod": "userdto",
            "secondarywid": "usergroupdto",
            "secondarymethod": "usergroupdto"
        }, {
            "executethis": "addwidmaster",
            "wid": "user1",
            "metadata.method": "userdto",
            "fname": "Bob",
            "systemdto.blahblah": "this should not show up in user1.systemdto",
            "usergroupdto.groupname": "Everyone",
            "usergroupdto.systemdto.expirationdate": "this should not show up in user1.usergroupdto.systemdto"
        }],
        function (err, res) {
            //proxyprinttodiv('Full results: ', res, 99);

            //proxyprinttodiv('The userdto record: ', res[2], 99);

            //      debuglevel = 0;
            execute({
                "executethis": "getwidmaster",
                "wid": "user1"
            }, function (err, res1) {
                proxyprinttodiv("getwidmaster user1 result: ", res1, 99);
                callback(err, res);
            });
        });
}

exports.testsysteminuserdto = testsysteminuserdto = function testsysteminuserdto(params, callback) {
    adduserdto(null, function () {

        execute([{
                "executethis": "getwidmaster",
                "command.getwidmaster.convertmethod": "dto",
                "wid": "userdto"
            }],
            function (err, res1) {
                proxyprinttodiv("getwidmaster awesome userdto results: ", res1, 99);
                callback(err, res1);
            });
    });
}

exports.testdeepsystem1 = testdeepsystem1 = function testdeepsystem1(params, callback) {
    createalldtos();

    execute([{
            "executethis": "addwidmaster",
            "wid": "user1",
            "metadata.method": "userdto",
            "fname": "Cody",
            "systemdto.expirationdate": "hi from user",
            "securitydto.ac": "codyac",
            "securitydto.systemdto.expirationdate": "hi from security",
            "permissiondto.level": "2",
            "permissiondto.systemdto.expirationdate": "hi from permissions",
            "permissiondto.0.usergroupdto.0.usergroupname": "employees",
            "permissiondto.0.usergroupdto.0.systemdto.expirationdate": "hi from permissions.usergroup",
            "environmentdto.priority": "1",
            "environmentdto.systemdto.expirationdate": "hi from environment",
            "usergroupdto.usergroupname": "everyone",
            "usergroupdto.systemdto.expirationdate": "hi from usergroup"
        }],
        function (err, res) {
            // proxyprinttodiv('Full results: ', res, 99);
            // proxyprinttodiv('The userdto record: ', res[2], 99);
            // debuglevel = 0;
            execute({
                "executethis": "getwidmaster",
                "wid": "user1"
            }, function (err, res1) {
                proxyprinttodiv("getwidmaster user1 result: ", res1, 99);
                callback(err, res);
            });
        });


}


// simple test which sets up all data and then runs sectest1 test after that 
exports.datastore1 = datastore1 = function datastore1(params, callback) {

    debuglevel = 12;

    async.series([
        function (cb1) {
            updatedatastore({
                "wid": "sounddto",
                "metadata.method": "sounddto",
                "note": "string"
            }, {}, function (err, res) {
                cb1(null);
            })
        },
        function (cb1) {
            getfromdatastore({
                "wid": "sounddto"
            }, null, function (err, res) {
                cb1(null);
            });
        }
    ], function (err, res) {
        proxyprinttodiv('res', res, 34);
        callback(err, res);
    });
}




// simple test which sets up all data and then runs sectest1 test after that 
exports.datastore2 = datastore2 = function datastore2(params, callback) {

    debuglevel = 12;

    async.series([
        function (cb1) {
            proxyprinttodiv('Function updatewid in : x', 'hi', 12);
            updatewid({
                "wid": "sounddto",
                "metadata": {
                    "method": "sounddto"
                },
                "note": "string"
            }, function (err, res) {
                cb1(null);
            })
        },
        function (cb1) {
            getwid({
                "wid": "sounddto"
            }, function (err, res) {
                cb1(null);
            });
        }
    ], function (err, res) {
        proxyprinttodiv('res', res, 34);
        callback(err, res);
    });
};


/*
        To add wid to db(default "data")
    */
exports.datastore3 = datastore3 = function datastore3(parameters, callback) {
    debuglevel = 12;
    eventappinstall();

    execute([{
            "executethis": "updatewid",
            "wid": "sounddto",
            "metadata.method": "sounddto",
            "note": "string"
        }, {
            "executethis": "getwid",
            "wid": "sounddto"
        }, {
            "executethis": "updatewid",
            "wid": "wid1",
            "d": "44",
            "f": "6",
            "command": {
                "db": "data"
            }
        }, {
            "executethis": "getwid",
            "wid": "wid1",
            "command": {
                "db": "data"
            }
        }, {
            "executethis": "updatewid",
            "wid": "wid2",
            "d": "444",
            "f": "66",
            "command": {
                "db": "test"
            }
        }, {
            "executethis": "getwid",
            "wid": "wid2",
            "command": {
                "db": "data"
            }
        }, {
            "executethis": "updatewid",
            "wid": "wid3",
            "d": "4444",
            "f": "666",
            "command": {
                "collection": "othercollection"
            }
        }, {
            "executethis": "getwid",
            "wid": "wid3",
            "command": {
                "collection": "othercollection"
            }
        }, {
            "executethis": "getwid",
            "wid": "wid3",
            "command": {
                "collection": "testcollection"
            }
        }],
        function (err, res) {
            callback(err, res);
            proxyprinttodiv("res -- add", res, 17);
        });
};

/*
        normal add / get
    */
exports.datastore4 = datastore4 = function datastore4(parameters, callback) {
    debuglevel = 12;
    eventappinstall();

    execute([{
            "executethis": "updatewid",
            "wid": "sounddto",
            "metadata.method": "sounddto",
            "note": "string"
        }, {
            "executethis": "getwid",
            "wid": "sounddto"
        }],
        function (err, res) {
            callback(err, res);
            proxyprinttodiv("res -- add", res, 17);
        });
}

function datastorefunction(updatecommand, callback) {
    debuglevel = 12;
    eventappinstall();

    var allPossibleCommandValues = [{
        "db": "data"
    }, {
        "db": "test"
    }, {
        "db": ""
    }, {
        "collection": "maincollection"
    }, {
        "collection": "othercollection"
    }, {
        "collection": ""
    }, {
        "datastore": "localstorage"
    }, {
        "datastore": "localstore"
    }, {
        "datastore": "angular"
    }, {
        "datastore": "mongo"
    }, {
        "datastore": ""
    }];

    var executeArray = [];
    executeArray.push({
        "executethis": "updatewid",
        "wid": "wid1",
        "d": "44",
        "f": "6",
        "command": updatecommand
    });

    for (commandValue in allPossibleCommandValues) {
        var executeObj = {
            "executethis": "getwid",
            "wid": "wid1",
            "command": allPossibleCommandValues[commandValue]
        }
        executeArray.push(executeObj);
    }

    execute(executeArray, function (err, res) {
        proxyprinttodiv("res -- add", res, 12);
        callback(err, res);
    });
}


/*
        To add wid to {"db":"data"}
        To get wid from all other variations
    */
exports.datastore5 = datastore5 = function datastore5(parameters, callback) {
    var updatecommand = {
        "db": "data"
    };
    datastorefunction(updatecommand, function (err, res) {
        callback(err, res);
    });
}

/*
        To add wid to {"db":"test"}
        To get wid from all other variations
    */
exports.datastore6 = datastore6 = function datastore6(parameters, callback) {
    var updatecommand = {
        "db": "test"
    };
    datastorefunction(updatecommand, function (err, res) {
        callback(err, res);
    });
}

/*
        To add wid to {"db":""}
        To get wid from all other variations
    */
exports.datastore7 = datastore7 = function datastore7(parameters, callback) {
    var updatecommand = {
        "db": ""
    };
    datastorefunction(updatecommand, function (err, res) {
        callback(err, res);
    });
}

/*
        To add wid to {"collection":"maincollection"}
        To get wid from all other variations
    */
exports.datastore8 = datastore8 = function datastore8(parameters, callback) {
    var updatecommand = {
        "collection": "maincollection"
    };
    datastorefunction(updatecommand, function (err, res) {
        callback(err, res);
    });
}

/*
        To add wid to {"collection":"maincollection"}
        To get wid from all other variations
    */
exports.datastore9 = datastore9 = function datastore9(parameters, callback) {
    var updatecommand = {
        "collection": "othercollection"
    };
    datastorefunction(updatecommand, function (err, res) {
        callback(err, res);
    });
}

/*
        To add wid to {"collection":""}
        To get wid from all other variations
    */
exports.datastore10 = datastore10 = function datastore10(parameters, callback) {
    var updatecommand = {
        "collection": ""
    };
    datastorefunction(updatecommand, function (err, res) {
        callback(err, res);
    });
}

/*
        To add wid to {"datastore":"localstorage"}
        To get wid from all other variations
    */
exports.datastore11 = datastore11 = function datastore11(parameters, callback) {
    var updatecommand = {
        "datastore": "localstorage"
    };
    datastorefunction(updatecommand, function (err, res) {
        callback(err, res);
    });
}

/*
        To add wid to {"datastore":"localstore"}
        To get wid from all other variations
    */
exports.datastore12 = datastore12 = function datastore12(parameters, callback) {
    var updatecommand = {
        "datastore": "localstore"
    };
    datastorefunction(updatecommand, function (err, res) {
        callback(err, res);
    });
}

/*
        To add wid to {"datastore":"angular"}
        To get wid from all other variations
    */
exports.datastore13 = datastore13 = function datastore13(parameters, callback) {
    var updatecommand = {
        "datastore": "angular"
    };
    datastorefunction(updatecommand, function (err, res) {
        callback(err, res);
    });
}

/*
        To add wid to {"datastore":"mongo"}
        To get wid from all other variations
    */
exports.datastore14 = datastore14 = function datastore14(parameters, callback) {
    var updatecommand = {
        "datastore": "mongo"
    };
    datastorefunction(updatecommand, function (err, res) {
        callback(err, res);
    });
}


/*
        To add wid to {"datastore":""}
        To get wid from all other variations
    */
exports.datastore15 = datastore15 = function datastore15(parameters, callback) {
    var updatecommand = {
        "datastore": ""
    };
    datastorefunction(updatecommand, function (err, res) {
        callback(err, res);
    });
}

/*
        To add wid with all possible variations
        To get wid with exact possible variations
    */
exports.datastoreaddget1 = datastoreaddget1 = function datastoreaddget1(parameters, callback) {
    debuglevel = 17;
    eventappinstall();

    var allPossibleCommandDbValues = ["data", "test", ""];
    var allPossibleCommandCollectionValues = ["maincollection", "othercollection", ""];
    var allPossibleCommandDataStoreValues = ["localstorage", "localstore", "angular", "mongo", ""];

    async.each(allPossibleCommandDbValues, function (commandDb, callback1) {
        async.each(allPossibleCommandCollectionValues, function (commandCollection, callback2) {
            async.each(allPossibleCommandDataStoreValues, function (commandDataStore, callback3) {
                var command = {
                    "db": commandDb,
                    "collection": commandCollection,
                    "datastore": commandDataStore
                };

                var executeArray = [];
                executeArray.push({
                    "executethis": "updatewid",
                    "wid": "wid1",
                    "d": "44",
                    "f": "6",
                    "command": command
                });
                executeArray.push({
                    "executethis": "getwid",
                    "wid": "wid1",
                    "command": command
                });

                execute(executeArray, function (err, res) {
                    proxyprinttodiv(">> command <<", command, 17);
                    proxyprinttodiv("add result ", res[0], 17);
                    proxyprinttodiv("get result ", res[1], 17);
                    callback3();
                });
            });
            callback2();
        });
        callback1();
    });
}

/*
        To add wid with default values
        To get wid with all possible variations
    */
exports.datastoreaddget2 = datastoreaddget2 = function datastoreaddget2(parameters, callback) {
    debuglevel = 17;
    eventappinstall();

    var command = {
        "db": "",
        "collection": "",
        "datastore": ""
    };
    var executeArray = [];
    executeArray.push({
        "executethis": "updatewid",
        "wid": "wid1",
        "d": "44",
        "f": "6",
        "command": command
    });
    execute(executeArray, function (err, res) {
        proxyprinttodiv(">> add command <<", command, 17);
        proxyprinttodiv("add result ", res[0], 17);
    });

    var allPossibleCommandDbValues = ["data", "test", ""];
    var allPossibleCommandCollectionValues = ["maincollection", "othercollection", ""];
    var allPossibleCommandDataStoreValues = ["localstorage", "localstore", "angular", "mongo", ""];

    async.each(allPossibleCommandDbValues, function (commandDb, callback1) {
        async.each(allPossibleCommandCollectionValues, function (commandCollection, callback2) {
            async.each(allPossibleCommandDataStoreValues, function (commandDataStore, callback3) {
                var command = {
                    "db": commandDb,
                    "collection": commandCollection,
                    "datastore": commandDataStore
                };
                var executeArray = [];
                executeArray.push({
                    "executethis": "getwid",
                    "wid": "wid1",
                    "command": command
                });
                execute(executeArray, function (err, res) {
                    proxyprinttodiv(">> get command <<", command, 17);
                    proxyprinttodiv("get result ", res[0], 17);
                    callback3();
                });
            });
            callback2();
        });
        callback1();
    });
}

/*
        movewid1
    */
exports.movewid1 = movewid1 = function movewid1(parameters, callback) {
    debuglevel = 17;
    eventappinstall();

    var addcommand = {
        "db": "test",
        "collection": "",
        "datastore": ""
    };
    var executeArray = [];
    executeArray.push({
        "executethis": "updatewid",
        "wid": "wid1",
        "d": "44",
        "f": "6",
        "command": addcommand
    });
    var movecommand = {
        "db": "data",
        "collection": "",
        "datastore": ""
    };
    executeArray.push({
        "executethis": "movewid",
        "wid": "wid1",
        "command": movecommand
    });
    execute(executeArray, function (err, res) {
        proxyprinttodiv(">> add command <<", addcommand, 17);
        proxyprinttodiv("add result ", res[0], 17);
        proxyprinttodiv(">> move command <<", movecommand, 17);
        proxyprinttodiv("move result ", res[1], 17);
    });
}

/*
        copywid1
    */
exports.copywid1 = copywid1 = function copywid1(parameters, callback) {
    debuglevel = 17;
    eventappinstall();

    var addcommand = {
        "db": "test",
        "collection": "",
        "datastore": ""
    };
    var executeArray = [];
    executeArray.push({
        "executethis": "updatewid",
        "wid": "wid1",
        "d": "44",
        "f": "6",
        "command": addcommand
    });
    var copycommand = {
        "db": "data",
        "collection": "",
        "datastore": "",
        "delete": true
    };
    executeArray.push({
        "executethis": "copywid",
        "wid": "wid1",
        "command": copycommand
    });
    execute(executeArray, function (err, res) {
        proxyprinttodiv(">> add command <<", addcommand, 17);
        proxyprinttodiv("add result ", res[0], 17);
        proxyprinttodiv(">> copy command <<", copycommand, 17);
        proxyprinttodiv("copy result ", res[1], 17);
        callback(err, res);
    });
}


/*
        addwidtest12
        To addwid without wid property
    */
exports.addwidtest12 = addwidtest12 = function addwidtest12(parameters, callback) {
    eventappinstall();

    var inputdto = {
        "a": "string"
    };

    var inputobject = {
        "a": "1"
    };

    var command = {};

    addwid(inputobject, inputdto, command, function (err, res) {
        debuglevel = 17;
        proxyprinttodiv("res --", res, 17);
        var actual_result = res;
        proxyprinttodiv("actual_result --", actual_result, 17);

        var expected_result = [];
        proxyprinttodiv("expected_result --", expected_result, 17);

        res = logverify("logverify", actual_result, expected_result);
        callback(err, res);
    });
}

/*  
        etd21
        To test guid for empty wid
    */
exports.etd21 = etd21 = function etd21(parameters, callback) {
    eventappinstall();
    debuglevel = 41;
    var dtoObjOpt = {
        "a": "string",
        "wid": "guid"
    };
    var inputObj = {
        "a": "1",
        "wid": "undefined"
    };
    var command = {
        "deepfilter": {
            "convert": true,
            "keepaddthis": true
        }
    };

    deepfilter(inputObj, dtoObjOpt, command, function (err, res) {
        debuglevel = 17;
        proxyprinttodiv("res --", res, 17);
        var actual_result = res;
        proxyprinttodiv("actual_result --", actual_result, 17);

        var expected_result = [];
        proxyprinttodiv("expected_result --", expected_result, 17);

        res = logverify("logverify", actual_result, expected_result);
        callback(err, res);
    });
}

/*
        copywid2
        If command.extend = true, then we need to extend data from fromwid and then append to towid data
        By default, command.extend = false
    */
exports.copywid2 = copywid2 = function copywid2(parameters, callback) {
    debuglevel = 17;
    eventappinstall();

    var addcommand = {
        "db": "data",
        "collection": "",
        "datastore": ""
    };
    var executeArray = [];
    executeArray.push({
        "executethis": "updatewid",
        "wid": "wid1",
        "d": "44",
        "e": "6",
        "command": addcommand
    });
    var copycommand = {
        "db": "data",
        "collection": "",
        "datastore": "",
        "delete": true,
        "extend": true
    };
    executeArray.push({
        "executethis": "copywid",
        "wid": "wid1",
        "f": "7",
        "command": copycommand
    });
    execute(executeArray, function (err, res) {
        proxyprinttodiv(">> add command <<", addcommand, 17);
        proxyprinttodiv("add result ", res[0], 17);
        proxyprinttodiv(">> copy command <<", copycommand, 17);
        proxyprinttodiv("copy result ", res[1], 17);
        callback(err, res);
    });
}

/*
        getwidparents
    */
exports.getwidparents = getwidparents = function getwidparents(parameters, callback) {
    debuglevel = 17;
    eventappinstall();

    var executeList = [{ //authordto
        "executethis": "addwidmaster",
        "metadata.method": "authordto",
        "wid": "authordto",
        "name": "string",
        "age": "string"
    }, { //bookdto
        "executethis": "addwidmaster",
        "metadata.method": "bookdto",
        "wid": "bookdto",
        "title": "string"
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
    }, { //author1
        "executethis": "addwidmaster",
        "metadata.method": "authordto",
        "wid": "author1",
        "name": "Author 1",
        "age": "1"
    }, { //book1
        "executethis": "addwidmaster",
        "metadata.method": "bookdto",
        "wid": "book1",
        "title": "Book 1"
    }, { //author1 - book1
        "executethis": "addwidmaster",
        "wid": "rel_author1_book1",
        "metadata.method": "relationshipdto",
        "relationshiptype": "attributes",
        "linktype": "onetomany",
        "primarywid": "author1",
        "primarymethod": "author1",
        "secondarywid": "book1",
        "secondarymethod": "book1"
    }, {
        "executethis": "findparent",
        "wid": "book1"
    }];
    execute(executeList, function (err, res) {
        callback(err, res[6]);
    });
}
exports.findparent = findparent = findparent = function findparent(inputobj, callback) {
    proxyprinttodiv("findparent inputobj", inputobj, 17);
    var wid = inputobj["wid"];
    var executeobject = {};
    executeobject["executethis"] = "querywid";
    executeobject["command"] = {
        "result": "queryresult"
    };
    executeobject["mongorawquery"] = {
        "$and": [{
            "data.secondarywid": wid
        }]
    };
    execute(executeobject, function (err, res) {
        proxyprinttodiv("findparent res", res, 17);
        findwidbyqueryresult(res, "primarywid", function (err, res) {
            callback(err, res);
        });
    });
}

/*
        getwidchilds
    */
exports.getwidchilds = getwidchilds = function getwidchilds(parameters, callback) {
    debuglevel = 17;
    eventappinstall();

    var executeList = [{ //authordto
        "executethis": "addwidmaster",
        "metadata.method": "authordto",
        "wid": "authordto",
        "name": "string",
        "age": "string",
        //"metadata.bookdto.type":"onetomany"
    }, { //bookdto
        "executethis": "addwidmaster",
        "metadata.method": "bookdto",
        "wid": "bookdto",
        "title": "string"
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
    }, { //author1
        "executethis": "addwidmaster",
        "metadata.method": "authordto",
        "wid": "author1",
        "name": "Author 1",
        "age": "1",
        "bookdto.0.title": "Book 1",
        "bookdto.1.title": "Book 2"
    }, {
        "executethis": "findchild",
        "wid": "author1"
    }];
    execute(executeList, function (err, res) {
        callback(err, res[4]);
    });
}
exports.findchild = findchild = findchild = function findchild(inputobj, callback) {
    proxyprinttodiv("findchild inputobj", inputobj, 17);
    var wid = inputobj["wid"];
    var executeobject = {};
    executeobject["executethis"] = "querywid";
    executeobject["command"] = {
        "result": "queryresult"
    };
    executeobject["mongorawquery"] = {
        "$and": [{
            "data.primarywid": wid
        }]
    };
    execute(executeobject, function (err, res) {
        proxyprinttodiv("findchild res", res, 17);
        findwidbyqueryresult(res, "secondarywid", function (err, res) {
            callback(err, res);
        });
    });
}

function findwidbyqueryresult(queryresult, mongorawquerywidkey, callback) {
    var result = [];
    var primarywids = queryresult[0].queryresult;
    async.each(primarywids, function (primarywid, callback) {
        for (widkey in primarywid) {
            var wid = primarywid[widkey];
            var executeobject = {};
            executeobject["executethis"] = "querywid";
            executeobject["command"] = {
                "result": "queryresult"
            };
            executeobject["mongorawquery"] = {
                "$and": [{
                    "wid": wid[mongorawquerywidkey]
                }]
            };
            execute([executeobject], function (err, res) {
                result.push(res);
                callback();
            });
        }
    }, function (err) {
        callback(err, result);
    });
}

/*
        filterobjecttest1
        filterobject returns an object of only the differences
    */
exports.filterobjecttest1 = filterobjecttest1 = function filterobjecttest1(parameters, callback) {
    debuglevel = 17;
    eventappinstall();

    var inputobj = {
        "a": "1",
        "wid": "undefined"
    };
    var dtoobj = {
        "a": "string",
        "wid": "guid"
    };

    filterobject(inputobj, dtoobj, function (err, res) {
        proxyprinttodiv("filterobjecttest1 filterobject res", res, 17);
        callback(err, res);
    });
}
//filterobject returns an object of only the differences
// function filterobject(obj, filterobject, callback){
//     proxyprinttodiv("filterobject obj", obj, 17);
//     proxyprinttodiv("filterobject filterobject", filterobject, 17);

//     var command = {"deepfilter":{"convert":true,"keepaddthis":true}};

//     deepfilter(obj, filterobject, command, function (err, res){
//         proxyprinttodiv("res --", res, 17);
//         var actual_result = res;
//         proxyprinttodiv("actual_result --", actual_result, 17);                           

//         var expected_result = [];
//         proxyprinttodiv("expected_result --", expected_result, 17);

//         res = logverify("logverify", actual_result, expected_result);
//         callback(err, res);
//     });
// }

/*
        getcollectionlength
    */
exports.getcollectionlengthtest1 = getcollectionlengthtest1 = function getcollectionlengthtest1(parameters, callback) {
    debuglevel = 17;
    eventappinstall();

    var getcollectionlengthcommand = {
        "collection": "maincollection"
    };
    var executeArray = [{
        "executethis": "addwidmaster",
        "wid": "wid1",
        "a": "1",
        "b": "2",
        "command": {
            "db": "",
            "collection": "maincollection1",
            "datastore": ""
        }
    }, {
        "executethis": "addwidmaster",
        "wid": "wid2",
        "a": "3",
        "b": "4",
        "command": {
            "db": "",
            "collection": "maincollection2",
            "datastore": ""
        }
    }, {
        "executethis": "updatewid",
        "wid": "wid3",
        "a": "1",
        "b": "2",
        "command": {
            "db": "",
            "collection": "maincollection1",
            "datastore": ""
        }
    }, {
        "executethis": "updatewid",
        "wid": "wid4",
        "a": "3",
        "b": "4",
        "command": {
            "db": "",
            "collection": "maincollection2",
            "datastore": ""
        }
    }, {
        "executethis": "getcollectionlength",
        "command": getcollectionlengthcommand
    }];
    execute(executeArray, function (err, res) {
        proxyprinttodiv(">> getcollectionlength command <<", getcollectionlengthcommand, 17);
        proxyprinttodiv("getcollectionlengthcommand result ", res[2], 17);
        callback(err, res);
    });
}
exports.getcollectionlength = getcollectionlength = function getcollectionlength(inputobj, callback) {
    proxyprinttodiv("getcollectionlength inputobj", inputobj, 17);
    var collection = inputobj.command.collection;
    var executeobject = {};
    executeobject["executethis"] = "querywid";
    executeobject["command"] = {
        "result": "queryresult"
    };
    executeobject["mongorawquery"] = {
        "$and": [{
            "data.d": "1"
        }]
    };
    execute(executeobject, function (err, res) {
        proxyprinttodiv("getcollectionlength res", res, 17);
        callback(err, res);
    });
}

/*
        deletecollection
    */
exports.deletecollectiontest1 = deletecollectiontest1 = function deletecollectiontest1(parameters, callback) {
    debuglevel = 17;
    eventappinstall();

    var addcommand = {
        "db": "",
        "collection": "maincollection",
        "datastore": ""
    };
    var deletecollectioncommand = {
        "collection": "maincollection"
    };
    var executeArray = [{
        "executethis": "addwidmaster",
        "wid": "wid1",
        "d": "44",
        "e": "6",
        "command": addcommand
    }, {
        "executethis": "deletecollection",
        "command": deletecollectioncommand
    }];
    execute(executeArray, function (err, res) {
        proxyprinttodiv(">> add command <<", addcommand, 17);
        proxyprinttodiv("add result ", res[0], 17);
        proxyprinttodiv(">> deletecollection command <<", deletecollectioncommand, 17);
        proxyprinttodiv("deletecollection result ", res[1], 17);
        callback(err, res);
    });

}
exports.deletecollection = deletecollection = deletecollection = function deletecollection(inputobj, callback) {
    proxyprinttodiv("deletecollection inputobj", inputobj, 17);
    var collection = inputobj.command.collection;
    var executeobject = {};
    executeobject["executethis"] = "querywid";
    executeobject["command"] = {
        "result": "queryresult"
    };
    executeobject["mongorawquery"] = {
        "$and": [{
            "data.collection": collection
        }]
    };
    execute(executeobject, function (err, res) {
        proxyprinttodiv("deletecollection res", res, 17);
        callback(err, res);
    });
}

/*
        getdatabasetablelength
    */
exports.getdatabasetablelength = getdatabasetablelength = function getdatabasetablelength(parameters, callback) {
    var command = {
        "databasetable": "",
        "datastore": ""
    };
}

/*
        getdblength
    */
exports.getdblength = getdblength = function getdblength(parameters, callback) {
    var command = {
        "databasetable": "",
        "datastore": ""
    };
    var wid = "";
}

/*
        getwidlength
    */
exports.getwidlength = getwidlength = function getwidlength(parameters, callback) {
    var command = {
        "databasetable": "",
        "datastore": "",
        "collection": ""
    };
    var wid = "";
}

/*
        deletedatabasetable
    */
exports.deletedatabasetable = deletedatabasetable = function deletedatabasetable(parameters, callback) {
    var command = {
        "databasetable": "",
        "datastore": ""
    };
}

/*
        deletedeepwid
    */
exports.deletedeepwid = deletedeepwid = function deletedeepwid(parameters, callback) {
    var command = {
        "databasetable": "",
        "datastore": "",
        "collection": "",
        "db": ""
    };
    var wid = "";
}

/*
        processevent test
    */
exports.processeventtest1 = processeventtest1 = function processeventtest1(parameters, callback) {
    debuglevel = 17;
    //eventappinstall();

    //To add events
    var addeventcommand = {
        "databasetable": "persitentcollection",
        "db": "queuedata",
        "collection": "eventonemin"
    }
    //"datastore":""};
    var executeList = [{
        "executethis": "updatewid",
        "wid": "processevent1",
        "metadata": "eventonemin",
        "addthis.executethis": "dosomethingwid",
        "command": addeventcommand
    }, {
        "executethis": "updatewid",
        "wid": "processevent2",
        "metadata": "eventonemin",
        "command": addeventcommand
    }, {
        "executethis": "updatewid",
        "wid": "processevent3",
        "metadata": "eventonemin",
        "command": addeventcommand
    }, {
        "executethis": "updatewid",
        "wid": "processevent4",
        "metadata": "eventonemin",
        "command": addeventcommand
    }, {
        "executethis": "updatewid",
        "wid": "processevent5",
        "metadata": "eventonemin",
        "command": addeventcommand
    }];
    execute(executeList, function (err, res) {
        proxyprinttodiv("add events res ", res, 17);

        //To process an event
        var eventname = "processevent5";
        processevent(eventname, function (err, res) {
            proxyprinttodiv("processevent res", res, 17);
            callback(err, res);
        });
    });
}

exports.maincollection1test = maincollection1test = function maincollection1test(params, callback) {
    execute([{
            "executethis": "addwidmaster",
            "wid": "wid1",
            "a": "b",
            "b": "2",
            "command": {
                "db": "",
                "collection": "maincollection1",
                "datastore": ""
            }
            //"command":{"db":"test"}
        }, {
            "executethis": "getwidmaster",
            "wid": "wid1"
        }],
        function (err, res) {
            proxyprinttodiv('Full results: ', res, 99);
            proxyprinttodiv('The wid1 record: ', res[1], 99);

            var result = logverify("testinheritdefault0_result", res[1], [{
                "wid": "author1",
                "metadata.method": "authordto",
                "name": "Alex",
                "age": "42"
            }]);

            callback(err, result);
        });
};

/*
exports.testeventonemin0 = testeventonemin0 = function testeventonemin0(params, callback){
execute([{
      "executethis":"addwidmaster",
      "wid":"authordto",
      "metadata.method":"authordto",
      "name":"string",
      "age":"string",
      "command":{"databasetable":"queuecollection", "db":"queuedata", "collection":"eventonemin"}
    },{
      "executethis":"addwidmaster",
      "wid":"author1",
      "metadata.method":"authordto",
      "name":"Alex",
      "age":"44",
      "command":{"databasetable":"queuecollection", "db":"queuedata", "collection":"eventonemin"}
    },{
      "executethis": "getwidmaster",
      "wid": "author1",
      "command":{"databasetable":"queuecollection", "db":"queuedata", "collection":"eventonemin"}
    }],
    function (err, res) {
      proxyprinttodiv('Full results: ', res, 99);
      proxyprinttodiv('The author1 record: ', res[3], 99);

      var result = logverify("testeventonemin0_result", res[3], [{
        "wid": "author1",
        "metadata.method": "authordto",
        "name": "Alex",
        "age": "44"
      }]);

      callback(err, result);
    });
}
*/

exports.testeventdata1 = testeventdata1 = function testeventdata1(params, callback) {
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
                "age": "44"
            }]);

            callback(err, result);
        });
}

exports.testeventonemin1 = testeventonemin1 = function testeventonemin1(params, callback) {
    execute([{
            "executethis": "addwidmaster",
            "addthis.executethis": "testeventdata1",
            "wid": "doesnotmatter",
            // something to do 
            "command": {
                "databasetable": "queuecollection",
                "db": "queuedata",
                "collection": "eventonemin"
            }
        }],
        function (err, res) {
            proxyprinttodiv('Full results: ', res, 99);
            callback(err, res);
        });
}

/*
    test 1
    add wid 1 , 2 ...et wid1  -- wid3 appears
*/
exports.testeventonemin2 = testeventonemin2 = function testeventonemin2(params, callback) {
    execute([{
            "executethis": "updatewid",
            "wid": "wid1",
            "addthis.executethis": "wid2"
        }, {
            "executethis": "updatewid",
            "wid": "wid2",
            "addthis.executethis": "addwidmaster",
            "addthis.wid": "wid3",
            "a": "b"
        }, {
            "executethis": "wid1"
        }],
        function (err, res) {
            proxyprinttodiv('Full results: ', res, 99);
            callback(err, res);
        });
}

/*
    test 2
    add wid 1 , 2 ...add addthis.et:wid1 to  the one minute queue -- after a min wid3 appears
    there should also be a a history of this in completedqueuecolletctin (save there)
*/
exports.testeventonemin3 = testeventonemin3 = function testeventonemin3(params, callback) {

    execute([{
            "executethis": "updatewid",
            "wid": "wid1",
            "addthis.executethis": "wid2"
        }, {
            "executethis": "updatewid",
            "wid": "wid2",
            "addthis.executethis": "addwidmaster",
            "addthis.wid": "wid3",
            "a": "b"
        }, {
            "executethis": "updatewid",
            "addthis.executethis": "wid1",
            "wid": "doesnotmatter",
            // something to do 
            "command": {
                "databasetable": "queuecollection",
                "db": "queuedata",
                "collection": "eventonemin"
            }
        }],
        function (err, res) {
            debuglevel = 11;
            eventonemin({}, function (err, res) {
                proxyprinttodiv('Full results: ', res, 99);
                callback(err, res);
            });
        });
}

exports.testfiltermerge1 = testfiltermerge1 = function testfiltermerge1(params, callback) {
    var obj1 = {
        "key1": "hello",
        "key2": "world",
        "key3": "how",
        "key4": "are",
        "key5": "you?"
    };
    var obj2 = {
        "key1": "hi",
        "key4": "how",
        "key6": "are",
        "key7": "you?"
    };
    var command = {
        "filterobject": {
            "type": "merge"
        }
    };
    var tname = "test filter merge";

    var res = [filterobject(obj1, obj2, command)];

    //proxyprinttodiv("merge result = ",res,99);
    var result = logverify(tname, res, [{
        "key1": "hello",
        "key2": "world",
        "key3": "how",
        "key4": "are",
        "key5": "you?",
        "key6": "are",
        "key7": "you?"
    }]);
    proxyprinttodiv(tname + " test result: ", result[tname], 99);
    proxyprinttodiv(tname + " result: ", res, 99);
}

exports.testfilterkeymatch1 = testfilterkeymatch1 = function testfilterkeymatch1(params, callback) {
    var obj1 = {
        "key1": "hello",
        "key2": "world",
        "key3": "how",
        "key4": "are",
        "key5": "you?"
    };
    var obj2 = {
        "key1": "hi",
        "key4": "how",
        "key6": "are",
        "key7": "you?"
    };
    var command = {
        "filterobject": {
            "type": "keymatch"
        }
    };
    var tname = "test filter keymatch";

    var res = [filterobject(obj1, obj2, command)];

    //proxyprinttodiv("keymatch result = ",res,99);
    var result = logverify(tname, res, [{
        "key1": "hello",
        "key4": "are"
    }]);
    proxyprinttodiv(tname + " test result: ", result[tname], 99);
    proxyprinttodiv(tname + " result: ", res, 99);
}

exports.testfilternomatch1 = testfilternomatch1 = function testfilterkeymatch1(params, callback) {
    var obj1 = {
        "key1": "hello",
        "key2": "world",
        "key3": "how",
        "key4": "are",
        "key5": "you?"
    };
    var obj2 = {
        "key1": "hi",
        "key4": "how",
        "key6": "are",
        "key7": "you?"
    };
    var command = {
        "filterobject": {
            "type": "nomatch"
        }
    };
    var tname = "test filter nomatch";

    var res = [filterobject(obj1, obj2, command)];

    //proxyprinttodiv("nomatch result = ",res,99);
    var result = logverify(tname, res, [{
        "key2": "world",
        "key3": "how",
        "key5": "you?"
    }]);
    proxyprinttodiv(tname + " test result: ", result[tname], 99);
    proxyprinttodiv(tname + " result: ", res, 99);
}

exports.ux = ux = function ux() {
    debuglevel = 65

    obj1 = {
        "executethis": "ettestag1",
        "command": {
            "internalcall": true,
            "adopt": null,
            //     "resultparameters": {},
            //     "result": null,
            //     "execute": null,
            //     "environment": {},
            //     "inherit": null,
            //     "executefilter": "",
            //     "executelimit": 15,
            //     "executemethod": "execute",
            //     "executeorder": "series",
            //     "beforemultiple": {
            //         "overallresultrule": "clearresults",
            //         "overallerrorrule": "waterfall",
            //         "resultrule": "waterfall",
            //         "errorrule": "nullwaterfall"
            //     },
            //     "duringmultiple": {
            //         "overallresultrule": "pusharray",
            //         "overallerrorrule": "waterfall",
            //         "resultrule": "waterfall",
            //         "errorrule": "nullwaterfall"
            //     },
            //     "beforeendmultiple": {
            //         "overallresultrule": "waterfall",
            //         "overallerrorrule": "waterfall",
            //         "resultrule": "waterfall",
            //         "errorrule": "nullwaterfall"
            //     },
            //     "beforepreexecute": {
            //         "overallresultrule": "waterfall",
            //         "overallerrorrule": "waterfall",
            //         "resultrule": "waterfall",
            //         "errorrule": "nullwaterfall"
            //     },
            //     "beforemidexecute": {
            //         "overallresultrule": "waterfall",
            //         "overallerrorrule": "waterfall",
            //         "resultrule": "waterfall",
            //         "errorrule": "nullwaterfall"
            //     },
            //     "beforepostexecute": {
            //         "overallresultrule": "waterfall",
            //         "overallerrorrule": "waterfall",
            //         "resultrule": "waterfall",
            //         "errorrule": "nullwaterfall"
            //     },
            //     "beforeendexecute": {
            //         "overallresultrule": "objectwaterfall",
            //         "overallerrorrule": "waterfall",
            //         "resultrule": "waterfall",
            //         "errorrule": "nullwaterfall"
            //     },
            //     "overallerror": [
            //         {}
            //     ],
            //     "overallresult": [
            //         {}
            //     ],
            //     "currenterror": null,
            //     "currentresult": {},
            //     "currentparameters": {},
            //     "multipleexecute": [],
            //     "parameters": {}
        }
    }

    // {"command": {
    //             "internalcall": "xyz",
    //             "beforemultiple": {
    //                     "overallresultrule": "clearresults"},
    //             "morecmd":"cmd"
    //             },
    //         "c":"d",
    //         "a":"b"
    //     }
    obj2 = {
        "command": {
            "internalcall": "x",
            "adopt": "x",
            "resultparameters": "x",
            // "result": "x",
            // "execute": "x",
            // "environment": "x",
            // "inherit": "x",
            // "executefilter": "x",
            // "executelimit": "x",
            // "executemethod": "x",
            // "executeorder": "x",
            // "beforemultiple": "x",
            // "duringmultiple": "x",
            // "beforeendmultiple": "x",
            // "beforepreexecute": "x",
            // "beforemidexecute": "x",
            // "beforepostexecute": "x",
            // "beforeendexecute": "x",
            // "overallerror": "x",
            // "overallresult": "x",
            // "currenterror": "x",
            // "currentresult": "x",
            // "currentparameters": "x",
            // "multipleexecute": "x",
            // "parameters": "x"
        }
    }

    // {"command": {
    //             "internalcall": "abc",
    //             "beforemultiple": {
    //                     "overallresultrule": "clearresults"}
    //             },
    //         "a":"b"
    //     }
    var x = compareobjects(obj1, obj2, "exists")
    proxyprinttodiv("compareobjects x", x, 65, true);

}



exports.filterobjecttest1 = function filterobjecttest1(parameters, callback) {
    debuglevel = 17;
    eventappinstall();

    var obj1 = {
        "a": "1",
        "b": "2"
    };
    var obj2 = {
        "a": "1",
        "b": "2"
    };

    filterobject(obj1, obj2, null, function (err, res) {
        proxyprinttodiv("filterobjecttest1 filterobject res", res, 17);
        var actual_result = res;
        proxyprinttodiv("actual_result --", actual_result, 17);
        var expected_result = {};
        proxyprinttodiv("expected_result --", expected_result, 17);
        var result = logverify("filterobjecttest1_result", actual_result, expected_result);
        callback(err, result);
    });
}

exports.filterobjecttest2 = function filterobjecttest2(parameters, callback) {
    debuglevel = 17;
    eventappinstall();

    var obj1 = {
        "a": "1",
        "b": "2"
    };
    var obj2 = {
        "b": "2",
        "c": "3"
    };
    var command = {
        "filterobject": {
            "type": "match"
        }
    }

    filterobject(obj1, obj2, command, function (err, res) {
        proxyprinttodiv("filterobjecttest1 filterobject res", res, 17);
        var actual_result = res;
        proxyprinttodiv("actual_result --", actual_result, 17);
        var expected_result = {
            "b": "2"
        };
        proxyprinttodiv("expected_result --", expected_result, 17);
        var result = logverify("filterobjecttest1_result", actual_result, expected_result);
        callback(err, result);
    });
}

exports.filterobjecttest3 = function filterobjecttest3(parameters, callback) {
    debuglevel = 17;
    eventappinstall();

    var obj1 = {
        "a": "1",
        "b": "2"
    };
    var obj2 = {
        "b": "2",
        "c": "3"
    };

    filterobject(obj1, obj2, null, function (err, res) {
        proxyprinttodiv("filterobjecttest1 filterobject res", res, 17);
        var actual_result = res;
        proxyprinttodiv("actual_result --", actual_result, 17);
        var expected_result = {
            "a": "1",
            "c": "3"
        };
        proxyprinttodiv("expected_result --", expected_result, 17);
        var result = logverify("filterobjecttest1_result", actual_result, expected_result);
        callback(err, result);
    });
}


exports.testhtmladd = testhtmladd = function testhtmladd(params, callback) {
    execute([{
            "executethis": "addwidmaster",
            "wid": "wid1",
            "html": "<p>123</p>"
        }, {
            "executethis": "addwidmaster",
            "wid": "wid1",
            "addthis.command.htmlcleartargetid": "body"
        }, {
            "executethis": "getwidmaster",
            "wid": "wid1"
        }],
        function (err, res) {
            proxyprinttodiv('Full results: ', res, 99);
            callback(err, res);
        });
}

exports.testhtmladd2 = testhtmladd2 = function testhtmladd2(params, callback) {
    execute([{
            "executethis": "getwid",
            "wid": "wid1"
        }],
        function (err, res) {
            proxyprinttodiv('Full results: ', res, 99);
            callback(err, res);
        });
}
/*
    exxports.codydto1 = codydto1 = function codydto1(params,callback){
        execute([{
            "executethis":"updatewid",
            "wid":"codydto",
            "metadata.method":"codydto",
            "month":"string",
            "day":"string"
            },{
            "executethis":"getwidmaster",
            "wid":"codydto"
            "metadata.method":"codydto"}],
            function (err,res) {
                proxyprinttodiv('codydto result: ', res[1], 99);
                var result = logverify("codydto1_result", res[1], [{
                    "wid": "codydto",
                    "metadata.method": "codydto",
                    "month": "string",
                    "day": "string"
                }]);
                callback(err,result);
            });
    }
            
            
    exports.addtocache1 = addtocache1 = function addtocache1(params,callback){
        execute([{
            "executethis":"codydto1"
            },{
            "executethis":"updatewid",
            "wid":"cody1",
            "metadata.method":"codydto",
            "month":"July",
            "data":"1st"
            },{
            "executethis":"getwidmaster",
            "wid":"cody1"
            "metadata.method":"codydto"
            }],
            function (err,res){
                proxyprinttodiv('cody1 result: ', res[2], 99);
                var result = logverify('addtocache1_result',res[2], [{
                    "wid":"cody1",
                    "metadata.method":"codydto",
                    "month":"July",
                    "data":"1st"
                }]);
                callback(err,result);
            });
    }
    
    exports.addtocache2 = addtocache2 = function addtocache2(params,callback){
        execute([{
            "executethis":"codydto1"
            },{
            "executethis":"updatewid",
            "wid":"cody1",
            "metadata.method":"codydto",
            "month":"July",
            "data":"1st"
            },{
            "executethis":"updatewid",
            "wid":"cody2",
            "metadata.method":"codydto",
            "month":"August",
            "data":"3rd"
            },{
            "executethis":"updatewid",
            "wid":"cody3",
            "metadata.method":"codydto",
            "month":"November",
            "data":"22nd"
            },{
            "executethis":"getwidmaster",
            "wid":"cody1"
            "metadata.method":"codydto"
            },{
            "executethis":"getwidmaster",
            "wid":"cody2"
            "metadata.method":"codydto"
            },{
            "executethis":"getwidmaster",
            "wid":"cody3"
            "metadata.method":"codydto"
            }],
            function (err,res){
                proxyprinttodiv('cody1 result: ', res[2], 99);
                var result = logverify('addtocache1_result',res[2], [{
                    "wid":"cody1",
                    "metadata.method":"codydto",
                    "month":"July",
                    "data":"1st"
                }]);
                if (result){
                    var result = logverify('addtocache1_result',res[2], [{
                        "wid":"cody2",
                        "metadata.method":"codydto",
                        "month":"August",
                        "data":"3rd"
                    }]);
                }
                if (result){
                    var result = logverify('addtocache1_result',res[2], [{
                        "wid":"cody1",
                        "metadata.method":"codydto",
                        "month":"July",
                        "data":"1st"
                    }]);
                }
                callback(err,result);
            });
    }
    */

exports.testcache1 = testcache1 = function testcache1(params, callback) {
    execute([{
            "executethis": "updatewid",
            "wid": "codydto",
            "metadata": {
                "method": "codydto"
            },
            "month": "string",
            "day": "string"
        }, {
            "executethis": "updatewid",
            "wid": "cody1",
            "metadata": {
                "method": "codydto"
            },
            "month": "June",
            "day": "9th",
            "command": {
                "cache": "true"
            }
        }, {
            "executethis": "updatewid",
            "wid": "cody1",
            "metadata": {
                "method": "codydto"
            },
            //"command":{"databasetable":"insert"},
            "month": "August"
        }, {
            "executethis": "getwidmaster",
            "wid": "cody1",
            "metadata": {
                "method": "codydto"
            }
        }],
        function (err, res) {
            proxyprinttodiv('cody1 cache: ', res[1], 99);
            proxyprinttodiv('cody1 update: ', res[2], 99);
            proxyprinttodiv('cody1 result: ', res[3], 99);
            var result = logverify("cody1_result", res[3], [{
                "wid": "cody1",
                "metadata.method": "codydto",
                "month": "June",
                "day": "9th"
            }]);
            callback(err, result);
        });
}

exports.testcache2 = testcache2 = function testcache2(params, callback) {
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
            "field2": "world",
            "command": {
                "cache": "true"
            }
        }, {
            "executethis": "updatewid",
            "wid": "awid1",
            "metadata": {
                "method": "adto"
            },
            "command": {
                "cache": "true"
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
            proxyprinttodiv('caching awid1: ', res[1], 99);
            proxyprinttodiv('updating awid1: ', res[2], 99);
            proxyprinttodiv('awid1 get: ', res[3], 99);
            var result = logverify("cody1_result", res[3], [{
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

exports.mirrorparams = mirrorparams = function mirrorparams(args) {
    proxyprinttodiv('mirror params: ', args, 99);
    return args;
}

exports.testpreexecute1 = testpreexecute1 = function testpreexecute1(params, callback) {
    execute([{
            "executethis": "updatewid",
            "wid": "wid1",
            "a": "b"
        }, {
            "preexecute": "getwidmaster",
            "wid": "wid1",
            "executethis": "mirrorparams",
            "c": "d"
        }],
        function (err, res) {
            proxyprinttodiv('adding adto: ', res[1], 99);
            var result = logverify("cody1_result", res[1], [{
                "wid": "wid1",
                "a": "b",
                "e": "f"
            }]);
            callback(err, result);
        });

}

exports.testcache1 = testcache1 = function testcache1(params, callback) {
    execute([{
            "executethis": "updatewid",
            "wid": "codydto",
            "metadata": {
                "method": "codydto"
            },
            "month": "string",
            "day": "string"
        }, {
            "executethis": "updatewid",
            "wid": "cody1",
            "metadata": {
                "method": "codydto"
            },
            "month": "June",
            "day": "9th",
            "command": {
                "skipcache": "false"
            }
        }, {
            "executethis": "updatewid",
            "wid": "cody1",
            "metadata": {
                "method": "codydto"
            },
            //"command":{"databasetable":"insert"},
            "month": "August"
        }, {
            "executethis": "getwidmaster",
            "wid": "cody1",
            "metadata": {
                "method": "codydto"
            }
        }],
        function (err, res) {
            proxyprinttodiv('cody1 cache: ', res[1], 99);
            proxyprinttodiv('cody1 update: ', res[2], 99);
            proxyprinttodiv('cody1 result: ', res[3], 99);
            var result = logverify("cody1_result", res[3], [{
                "wid": "cody1",
                "metadata.method": "codydto",
                "month": "June",
                "day": "9th"
            }]);
            callback(err, result);
        });
}

exports.testcache2 = testcache2 = function testcache2(params, callback) {
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
            "field2": "world",
            "command": {
                "skipcache": "false"
            }
        }, {
            "executethis": "updatewid",
            "wid": "awid1",
            "metadata": {
                "method": "adto"
            },
            "command": {
                "skipcache": "false"
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
            proxyprinttodiv('caching awid1: ', res[1], 99);
            proxyprinttodiv('updating awid1: ', res[2], 99);
            proxyprinttodiv('awid1 get: ', res[3], 99);
            var result = logverify("cody1_result", res[3], [{
                "wid": "awid1",
                "metadata.method": "adto",
                "field1": "hello",
                "field2": "world"
            }]);
            callback(err, result);
        });
}

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

exports.mirrorparams = mirrorparams = function mirrorparams(args) {
    proxyprinttodiv('mirror params: ', args, 99);
    return args;
}

exports.testpreexecute1 = testpreexecute1 = function testpreexecute1(params, callback) {
    execute([{
            "executethis": "updatewid",
            "wid": "wid1",
            "a": "b"
        }, {
            "preexecute": "getwidmaster",
            "wid": "wid1",
            "executethis": "mirrorparams",
            "c": "d"
        }],
        function (err, res) {
            proxyprinttodiv('adding adto: ', res[1], 99);
            var result = logverify("cody1_result", res[1], [{
                "wid": "wid1",
                "a": "b",
                "e": "f"
            }]);
            callback(err, result);
        });
}


// This is a 2 level test of the dtos...instantiate song1 with a songdto, and some sounddto values
// failing due to a command object being sent back
exports.ettestag9000 = ettestag9000 = function ettestag9000(params, callback) {
    debuglevel = 0;
    execute([{
            "executethis": "addwidmaster",
            "wid": "notedto",
            "metadata.method": "notedto",
            "note": "string"
        }, {
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
            "wid": "rel_sound_to_note",
            "metadata.method": "relationshipdto",
            "primarywid": "sounddto",
            "secondarywid": "notedto",
            "primarymethod": "sounddto",
            "secondarymethod": "notedto",
            "linktype": "onetomany",
            "relationshiptype": "attributes"
        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "songdto",
            "title": "Highway to Hell",
            "sounddto.wid": "ag3aflat",
            "sounddto.notedto.wid": "Aflat",
            "sounddto.notedto.note": "A flat"
        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "songdto",
            "title": "Highway to Hell",
            "sounddto.wid": "ag3bsharp",
            "sounddto.noteddto.wid": "Bsharp",
            "sounddto.noteddto.note": "B sharp"
        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "songdto",
            "title": "Highway to Hell",
            "sounddto.wid": "ag3cflat",
            "sounddto.notedto.wid": "Cflat",
            "sounddto.notedto.note": "C flat"
        }, {
            "executethis": "getwidmaster",
            "wid": "song1"
        }],
        function (err, res) {

            proxyprinttodiv('Function ag3 result Full res', res, 17);
            proxyprinttodiv('Function ag3 result ', res[6], 17);

            res = logverify("ettestag3_result", res[6], [{
                "title": "Highway to Hell",
                "wid": "song1",
                "metadata.method": "songdto",
                "metadata.sounddto.type": "onetomany",
                "sounddto.0.note": "A flat",
                "sounddto.0.wid": "ag3aflat",
                "sounddto.0.metadata.method": "sounddto",
                "sounddto.0.metadata.parentwid.song1": "songdto",
                "sounddto.1.note": "B sharp",
                "sounddto.1.wid": "ag3bsharp",
                "sounddto.1.metadata.method": "sounddto",
                "sounddto.1.metadata.parentwid.song1": "songdto",
                "sounddto.2.note": "C flat",
                "sounddto.2.wid": "ag3cflat",
                "sounddto.2.metadata.method": "sounddto",
                "sounddto.2.metadata.parentwid.song1": "songdto"
            }]);
            debuglevel = 0;
            // execute({"executethis": "getwidmaster","wid": "songdto",
            //       "command":{"getwidmaster":{"convertmethod":"dto",
            //                               "execute":"ConvertFromDOTdri",
            //                               "inheritflag":"true","dtotype":""}}}, function (err, res1) {
            execute({
                "executethis": "getwidmaster",
                "wid": "song1"
            }, function (err, res1) {
                proxyprinttodiv('Function ag3 result LAST ', res1, 99);
                callback(err, res);

            })
        });
}

exports.testenv = testenv = function testenv(params, callback) {
    execute([{
            "executethis": "updatewid",
            "wid": "codydto",
            "a": "b",
            "command": {
                "environment": {
                    "databasetable": "test"
                }
            }
        }],
        function (err, res) {
            proxyprinttodiv('testenv result: ', res, 99);
            // var result = logverify("cody1_result", res[3], [{
            //     "wid": "cody1",
            //     "metadata.method": "codydto",
            //     "month": "June",
            //     "day": "9th"
            // }]);
            callback(err, res);
        });
}

// numerickeyerror
exports.numerickeyerror = numerickeyerror = function numerickeyerror(params, callback) {
    execute([{
            "executethis": "updatewid",
            "wid": "db1dto",
            "2": {
                "c": "d",
                "d1": {
                    "e1": "e2"
                }
            }
        }],
        function (err, res) {
            proxyprinttodiv('db1dto result: ', res, 99);
            callback(err, res);
        });
}



// tests that db wids are updated fine -- overwrites do not happen -- using updatewid and getwid
// command.datamethod = upsert(defaulted)
// same database, same sub-database
exports.stbd1a = stbd1a = function stbd1a(params, callback) {
    execute([{
            "executethis": "updatewid",
            "wid": "db1dto",
            "a": {
                "a1": "b1",
                "a2": {
                    "a21": "b21"
                }
            }
        }, {
            "executethis": "updatewid",
            "wid": "db1dto",
            "c": {
                "c1": "d1",
                "c2": {
                    "c21": "d21"
                }
            }
        }, {
            "executethis": "getwid",
            "wid": "db1dto"
        }],
        function (err, res) {
            proxyprinttodiv('stbd1a result: ', res, 99);
            callback(err, res);
        });
}


// tests that db wids are updated fine -- overwrites do not happen -- using addwidmaster and getwidmaster
// command.datamethod = upsert(defaulted)
// same database, same sub-database
exports.stbd1b = stbd1b = function stbd1b(params, callback) {
    execute([{
            "executethis": "addwidmaster",
            "wid": "db2dto",
            "command.collection": "data",
            "a": {
                "a1": "b1",
                "a2": {
                    "a21": "b21"
                }
            }
        }, {
            "executethis": "addwidmaster",
            "wid": "db2dto",
            "command.collection": "data",
            "c": {
                "c1": "d1",
                "c2": {
                    "c21": "d21"
                }
            }
        }, {
            "executethis": "getwidmaster",
            "command.collection": "data",
            "wid": "db2dto"
        }],
        function (err, res) {
            proxyprinttodiv('stbd1b result: ', res, 99);

            callback(err, res);
        });
}

// tests that db wids are updated fine -- overwrites do not happen -- using addwidmaster and getwidmaster
// command.datamethod = upsert
// same database, same sub-database
exports.stbd1c = stbd1c = function stbd1c(params, callback) {
    execute([{
            "executethis": "addwidmaster",
            "wid": "db2dto",
            "command.datamethod": "upsert",
            "command.collection": "data",
            "a": {
                "a1": "b1",
                "a2": {
                    "a21": "b21"
                }
            }
        }, {
            "executethis": "addwidmaster",
            "wid": "db2dto",
            "command.datamethod": "upsert",
            "command.collection": "data",
            "c": {
                "c1": "d1",
                "c2": {
                    "c21": "d21"
                }
            }
        }, {
            "executethis": "getwidmaster",
            "command.collection": "data",
            "wid": "db2dto"
        }],
        function (err, res) {
            proxyprinttodiv('stbd1c result: ', res, 99);

            callback(err, res);
        });
}

// tests that db wids are updated fine -- overwrites do not happen -- using updatewid and getwid
// command.datamethod = upsert
// same database, different sub-database
exports.stbd1d = stbd1d = function stbd1d(params, callback) {
    execute([{
            "executethis": "updatewid",
            "wid": "db2dto",
            "command": {
                "datamethod": "upsert",
                "db": "data"
            },
            "a": {
                "a1": "b1",
                "a2": {
                    "a21": "b21"
                }
            }
        }, {
            "executethis": "updatewid",
            "wid": "db2dto",
            "command": {
                "datamethod": "upsert",
                "db": "test"
            },
            "c": {
                "c1": "d1",
                "c2": {
                    "c21": "d21"
                }
            }
        }, {
            "executethis": "getwid",
            "command": {
                "datamethod": "upsert",
                "db": "data"
            },
            "wid": "db2dto"
        }, {
            "executethis": "getwid",
            "command": {
                "db": "test"
            },
            "wid": "db2dto"
        }],
        function (err, res) {
            proxyprinttodiv('stbd1d result: ', res, 99);

            callback(err, res);
        });
}


// tests that db wids are updated fine -- overwrites do not happen -- using addwidmaster and getwidmaster
// command.datamethod = upsert
// same database, different sub-database
exports.stbd1e = stbd1e = function stbd1e(params, callback) {
    execute([{
            "executethis": "addwidmaster",
            "wid": "db2dto",
            "command": {
                "environment": {
                    "datamethod": "upsert",
                    "db": "data"
                }
            },
            "a": {
                "a1": "b1",
                "a2": {
                    "a21": "b21"
                }
            }
        }, {
            "executethis": "addwidmaster",
            "wid": "db2dto",
            "command": {
                "environment": {
                    "datamethod": "upsert",
                    "db": "test"
                }
            },
            "c": {
                "c1": "d1",
                "c2": {
                    "c21": "d21"
                }
            }
        }, {
            "executethis": "getwidmaster",
            "command": {
                "environment": {
                    "db": "data"
                }
            },
            "wid": "db2dto"
        }, {
            "executethis": "getwidmaster",
            "command": {
                "environment": {
                    "db": "test"
                }
            },
            "wid": "db2dto"
        }],
        function (err, res) {
            proxyprinttodiv('stbd1e result: ', res, 99);

            callback(err, res);
        });
}

// tests that db wids are updated fine -- overwrites do not happen -- using addwidmaster and getwidmaster
// command.datamethod = insert
// same database, different sub-database
exports.stbd1f = stbd1f = function stbd1f(params, callback) {
    execute([{
            "executethis": "addwidmaster",
            "wid": "db2dto",
            "command": {
                "environment": {
                    "datamethod": "insert",
                    "db": "data"
                }
            },
            "a": {
                "a1": "b1",
                "a2": {
                    "a21": "b21"
                }
            }
        }, {
            "executethis": "addwidmaster",
            "wid": "db2dto",
            "command": {
                "environment": {
                    "datamethod": "insert",
                    "db": "test"
                }
            },
            "c": {
                "c1": "d1",
                "c2": {
                    "c21": "d21"
                }
            }
        }, {
            "executethis": "getwidmaster",
            "command": {
                "environment": {
                    "db": "data"
                }
            },
            "wid": "db2dto"
        }, {
            "executethis": "getwidmaster",
            "command": {
                "environment": {
                    "db": "test"
                }
            },
            "wid": "db2dto"
        }],
        function (err, res) {
            proxyprinttodiv('stbd1f result: ', res, 99);

            callback(err, res);
        });
}



// tests that db wids are updated fine -- overwrites do not happen -- using addwidmaster and getwidmaster
// command.datamethod = clear
// same database, same sub-database
exports.stbd1g = stbd1g = function stbd1g(params, callback) {
    execute([{
            "executethis": "addwidmaster",
            "wid": "db2dto",
            "command": {
                "environment": {
                    "datamethod": "insert",
                    "db": "data"
                }
            },
            "a": {
                "a1": "b1",
                "a2": {
                    "a21": "b21"
                }
            }
        }, {
            "executethis": "addwidmaster",
            "wid": "db2dto",
            "command": {
                "environment": {
                    "datamethod": "insert",
                    "db": "data"
                }
            },
            "c": {
                "c1": "d1",
                "c2": {
                    "c21": "d21"
                }
            }
        }, {
            "executethis": "getwidmaster",
            "command": {
                "environment": {
                    "db": "data"
                }
            },
            "wid": "db2dto"
        }],
        function (err, res) {
            proxyprinttodiv('stbd1g result: ', res, 99);

            callback(err, res);
        });
}

// tests that db wids are updated fine -- overwrites do not happen -- using addwidmaster and getwidmaster
// command.datamethod = clear
// same database, same sub-database
exports.stbd1h = stbd1h = function stbd1h(params, callback) {
    execute([{
            "executethis": "addwidmaster",
            "wid": "db2dto",
            "command": {
                "environment": {
                    "datamethod": "clear",
                    "db": "data"
                }
            },
            "a": {
                "a1": "b1",
                "a2": {
                    "a21": "b21"
                }
            }
        }, {
            "executethis": "addwidmaster",
            "wid": "db2dto",
            "command": {
                "environment": {
                    "datamethod": "clear",
                    "db": "data"
                }
            },
            "c": {
                "c1": "d1",
                "c2": {
                    "c21": "d21"
                }
            }
        }, {
            "executethis": "getwidmaster",
            "command": {
                "environment": {
                    "db": "data"
                }
            },
            "wid": "db2dto"
        }],
        function (err, res) {
            proxyprinttodiv('stbd1h result: ', res, 99);

            callback(err, res);
        });
}



// tests that db wids are updated fine -- overwrites do not happen -- using addwidmaster and getwidmaster
// command.datamethod = "upsert"
// command.collection = "new"
// command.db = "da"
// same database, diff colection, same sub-database
exports.stbd1i = stbd1i = function stbd1i(params, callback) {
    execute([{
            "executethis": "addwidmaster",
            "wid": "db2dto",
            "command": {
                "environment": {
                    "datamethod": "upsert",
                    "collection": "dri2",
                    "db": "da"
                }
            },
            "a": {
                "a1": "b1",
                "a2": {
                    "a21": "b21"
                }
            }
        }, {
            "executethis": "addwidmaster",
            "wid": "db2dto",
            "command": {
                "environment": {
                    "datamethod": "upsert",
                    "collection": "dri2",
                    "db": "da"
                }
            },
            "c": {
                "c1": "d1",
                "c2": {
                    "c21": "d21"
                }
            }
        }, {
            "executethis": "addwidmaster",
            "wid": "db2dto",
            "command": {
                "environment": {
                    "datamethod": "upsert",
                    "db": "da",
                    "collection": "dri3"
                }
            },
            "ac": {
                "ac1": "ad1",
                "ac2": {
                    "ac21": "ad21"
                }
            }
        }, {
            "executethis": "getwidmaster",
            "command": {
                "environment": {
                    "db": "da",
                    "collection": "dri2"
                }
            },
            "wid": "db2dto"
        }, {
            "executethis": "getwidmaster",
            "command": {
                "environment": {
                    "db": "da",
                    "collection": "dri3"
                }
            },
            "wid": "db2dto"
        }],
        function (err, res) {
            proxyprinttodiv('stbd1i result: ', res, 99);

            callback(err, res);
        });
}



// tests that db wids are updated fine -- overwrites do not happen -- using addwidmaster and getwidmaster
// command.datamethod = "upsert"
// command.collection = "new"
// command.db = "da"
// diff database, same collection, same sub-database
exports.stbd1j = stbd1j = function stbd1j(params, callback) {
    execute([{
            "executethis": "addwidmaster",
            "wid": "db2dto",
            "command": {
                "environment": {
                    "datamethod": "upsert",
                    "collection": "dri2",
                    "db": "da",
                    "databasetable": "wikiwallettesting2"
                }
            },
            "a": {
                "a1": "b1",
                "a2": {
                    "a21": "b21"
                }
            }
        }, {
            "executethis": "addwidmaster",
            "wid": "db2dto",
            "command": {
                "environment": {
                    "datamethod": "upsert",
                    "collection": "dri2",
                    "db": "da",
                    "databasetable": "dbwikiwallettesting2"
                }
            },
            "c": {
                "c1": "d1",
                "c2": {
                    "c21": "d21"
                }
            }
        }, {
            "executethis": "addwidmaster",
            "wid": "db2dto",
            "command": {
                "environment": {
                    "datamethod": "upsert",
                    "db": "da",
                    "collection": "dri2",
                    "databasetable": "wikiwallettesting1"
                }
            },
            "ac": {
                "ac1": "ad1",
                "ac2": {
                    "ac21": "ad21"
                }
            }
        }, {
            "executethis": "getwidmaster",
            "command": {
                "environment": {
                    "db": "da",
                    "collection": "dri2",
                    "databasetable": "wikiwallettesting1"
                }
            },
            "wid": "db2dto"
        }, {
            "executethis": "getwidmaster",
            "command": {
                "environment": {
                    "db": "da",
                    "collection": "dri2",
                    "databasetable": "wikiwallettesting2"
                }
            },
            "wid": "db2dto"
        }],
        function (err, res) {
            proxyprinttodiv('stbd1j result: ', res, 99);

            callback(err, res);
        });
}


exports.find_category_server = find_category_server = function find_category_server(inputobj, callback) {
    execute([{
        "executethis": "querywid",
        "mongorawquery": {
            "$and": [{
                "data.category": "storage"
            }]
        },
        //"mongorawprojection": {"data.address": 1 },
        "configuration": {
            "midexecute": [{
                "dothis": "server",
                "tryorder": "0",
                "executeorder": "0",
                "params": {}
            }]
        }
    }], function (err, res) {
        callback(null, res[0]);
    });
}

exports.find_category_local = find_category_local = function find_category_local(inputobj, callback) {
    execute([{
        "executethis": "querywid",
        "mongorawquery": {
            "$and": [{
                "data.category": "storage"
            }]
        }
        // ,"mongorawprojection": {"data.address": 1 },

    }], function (err, res) {
        callback(null, res[0]);
    });
}

exports.load_query2 = load_query2 = function load_query2(inputobj, callback) {
    execute([{
        "executethis": "querywid",
        "mongorawquery": {
            "wid": "sample1"
        }
    }], function (err, res) {
        callback(null, res[0]);
    });
}

exports.mq2_test = mq2_test = function mq2_test(inputobj, callback) {

    var raw_query_object = {
        "$and": [{
            "data.category": "storage"
        }]
    };
    var projection_object = {
        "data.address": 1
    };

    mquery2(raw_query_object, projection_object, null,
        function (err, res) {
            callback(null, res)
        })
}

// deletewid() test 
// To test wid copied to command.datasettable="driarchive" or not
exports.testdltwid123 = testdltwid123 = function testdltwid123(params, callback) {
    proxyprinttodiv('testdeletewid1 params: ', params, 99);
    extend(true, params, {
            "executethis": "updatewid",
            "wid": "testdeletewid1",
            "a": "b"
        })
    proxyprinttodiv('testdeletewid1 params: ', params, 99);
    execute([params, 
        {
            "executethis": "deletewid",
            "wid": "testdeletewid1"
        }]
        , 
        //{
        //     "executethis": "getwid",
        //     "wid": "testdeletewid1"
        // }
        
        function (err, res) {
            proxyprinttodiv('testdeletewid1 result: ', res, 99);
            callback(err, res);
        });
}
// To test with copywid, command.environment debugging
exports.testgetwid1 = testgetwid1 = function testgetwid1(params, callback) {
    debuglevel = 17;
    execute([{
            "executethis": "getwid",
            "wid": "testwid1"
        }],
        function (err, res) {
            proxyprinttodiv('testgetwid1 result: ', res, 99);
            callback(err, res);
        });
}

//To test updatewid, getwid
exports.testupdateget = testupdateget = function testupdateget(params, callback) {
    execute([{ //dto add
            "executethis": "updatewid",
            "wid": "adto",
            "metadata": {
                "method": "adto"
            },
            "a": "string",
            "b": "string"
        }, { //wid add
            "executethis": "updatewid",
            "wid": "awid1",
            "metadata": {
                "method": "adto"
            },
            "a": "hello",
            "b": "world"
        }, { //wid update
            "executethis": "updatewid",
            "wid": "awid1",
            "metadata": {
                "method": "adto"
            },
            "a": "goodbye"
        }, { //get wid
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
            var result = logverify("testupdateget_result", res[3], [{
                "wid": "awid1",
                "metadata": {
                    "method": "adto"
                },
                "a": "goodbye",
                "b": "world"
            }]);
            callback(err, result);
        });
}

//To test copywid
exports.testcopywid = testcopywid = function testcopywid(params, callback) {
    debuglevel = 17;

    var executeArray = [{ //updatewid
        "executethis": "updatewid",
        "wid": "wid1",
        "a": "44",
        "b": "6",
        "command": {
            "collection": "test"
        }
    }, { //getwid
        "executethis": "getwid",
        "wid": "wid1",
        "command": {
            "collection": "test"
        }
    }, { //getwid
        "executethis": "getwid",
        "wid": "wid1",
        "command": {
            "collection": "test2"
        }
    }, { //copywid
        "executethis": "copywid",
        "wid": "wid1",
        "command": {
            fromdb: "data",
            fromcollection: "test",
            fromdatastore: "localstorage",
            fromdatabasetable: "wikiwallettesting",
            todb: "data",
            tocollection: "test2",
            todatastore: "localstorage",
            todatabasetable: "wikiwallettesting"
        }
    }, { //getwid
        "executethis": "getwid",
        "wid": "wid1",
        "command": {
            "collection": "test2"
        }
    }];

    execute(executeArray, function (err, res) {
        proxyprinttodiv("updatewid result with command.collection=test", res[0], 17);
        proxyprinttodiv("getwid result with command.collection=test", res[1], 17);
        proxyprinttodiv("getwid result with command.collection=test2", res[2], 17);
        //proxyprinttodiv("copywid result with command.collection=test", res[3], 17);
        //proxyprinttodiv("getwid result with command.collection=test2", res[4], 17);
        callback(err, res);
    });
}


// getrelatedrecords() test with one child
exports.testgetrelatedrecords1 = testgetrelatedrecords1 = function testgetrelatedrecords1(params, callback) {
    debuglevel = 17;

    execute([{ //authordto
            "executethis": "addwidmaster",
            "metadata.method": "authordto",
            "wid": "authordto",
            "name": "string",
            "age": "string"
        }, { //bookdto
            "executethis": "addwidmaster",
            "metadata.method": "bookdto",
            "wid": "bookdto",
            "title": "string"
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
        }, { //pagedto
            "executethis": "addwidmaster",
            "metadata.method": "pagedto",
            "wid": "pagedto",
            "pages": "string"
        }, { //bookdto - pagedto
            "executethis": "addwidmaster",
            "wid": "rel_book_page",
            "metadata.method": "relationshipdto",
            "relationshiptype": "attributes",
            "linktype": "onetomany",
            "primarywid": "bookdto",
            "primarymethod": "bookdto",
            "secondarywid": "pagedto",
            "secondarymethod": "pagedto"
        }, { //author1
            "executethis": "addwidmaster",
            "metadata.method": "authordto",
            "wid": "author1",
            "name": "Author 1",
            "age": "1",
            //"bookdto.title":"book1"
        }, { //book1
            "executethis": "addwidmaster",
            "metadata.method": "bookdto",
            "wid": "book1",
            "title": "Book 1"
        }, { //page1
            "executethis": "addwidmaster",
            "metadata.method": "pagedto",
            "wid": "page1",
            "title": "Page 1"
        }, { //rel author1-book1
            "executethis": "addwidmaster",
            "wid": "rel_author1_book1",
            "metadata.method": "relationshipdto",
            "relationshiptype": "attributes",
            "linktype": "onetomany",
            "primarywid": "author1",
            "primarymethod": "author1",
            "secondarywid": "book1",
            "secondarymethod": "book1"
        }, { //rel book1-page1
            "executethis": "addwidmaster",
            "wid": "rel_book1_page1",
            "metadata.method": "relationshipdto",
            "relationshiptype": "attributes",
            "linktype": "onetomany",
            "primarywid": "book1",
            "primarymethod": "book1",
            "secondarywid": "page1",
            "secondarymethod": "page1"
        }, { //getwid author1
            "executethis": "getwidmaster",
            "wid": "author1"
        }, { //to get book1's parent author1
            "executethis": "getrelatedrecords",
            "widlist": ["book1"],
            "command": {
                "reltype": "parent",
                "recurse": true
            }
        }
        /*, {    //to get book1's parent author1
        "executethis":"getrelatedrecords",
        "widlist": ["page1"],
        "command": {"reltype": "parent", "recurse":true}
    }, {    //to get author1's children
        "executethis":"getrelatedrecords",
        "widlist": ["author1"],
        "command": {"reltype": "child", "recurse":true}
    }*/
    ], function (err, res) {
        callback(err, res);
    });
}

// getrelatedrecords() test 
// to test multiple children
exports.testgetrelatedrecords2 = testgetrelatedrecords2 = function testgetrelatedrecords2(params, callback) {
    debuglevel = 17;

    var executeList = [{ //testdto
            "executethis": "addwidmaster",
            "metadata.method": "testdto",
            "wid": "testdto",
            "a": "string"
        }, { //rel testdto-testdto
            "executethis": "addwidmaster",
            "wid": "rel_testdto_testdto",
            "metadata.method": "relationshipdto",
            "relationshiptype": "attributes",
            "linktype": "onetomany",
            "primarywid": "testdto",
            "primarymethod": "testdto",
            "secondarywid": "testdto",
            "secondarymethod": "testdto"
        }, { //to add test1
            "executethis": "addwidmaster",
            "metadata.method": "testdto",
            "wid": "test1",
            "a": "1",
            "testdto.a": "b"
        }, { //to get test1
            "executethis": "getwidmaster",
            "wid": "test1"
            // }, {    //to get test1's children
            //        "executethis":"getrelatedrecords",
            //        "widlist": ["test1"],
            //  "command": {"reltype": "child", "recurse":true}
        }
        /*, {    //test2
        "executethis":"addwidmaster",
        "metadata.method": "testdto",
        "wid": "test2",
        "a": "2"
    }, {    //test3
        "executethis":"addwidmaster",
        "metadata.method": "testdto",
        "wid": "test3",
        "testdto.a": "3"
    }, {    //test4
        "executethis":"addwidmaster",
        "metadata.method": "testdto",
        "wid": "test4",
        "testdto.a": "4"
    }, {    //test5
        "executethis":"addwidmaster",
        "metadata.method": "testdto",
        "wid": "test5",
        "testdto.a": "5"
    }, {    //test6
        "executethis":"addwidmaster",
        "metadata.method": "testdto",
        "wid": "test6",
        "testdto.testdto.a": "6"
    }, {    //test7
        "executethis":"addwidmaster",
        "metadata.method": "testdto",
        "wid": "test7",
        "testdto.testdto.a": "10"
    }, {    //test8
        "executethis":"addwidmaster",
        "metadata.method": "testdto",
        "wid": "test8",
        "testdto.testdto.testdto.a": "11"
    }, {    //test9
        "executethis":"addwidmaster",
        "metadata.method": "testdto",
        "wid": "test9",
        "testdto.testdto.testdto.a": "12"
    }, {    
        "executethis":"getrelatedrecords",
        "wid": "test3"
    }, {    
        "executethis":"getrelatedrecords",
        "wid": "test6"
    }, {    
        "executethis":"getrelatedrecords",
        "wid": "test9"
    }*/
    ];
    execute(executeList, function (err, res) {
        proxyprinttodiv("testgetrelatedrecords1", res, 99);
        proxyprinttodiv("testgetrelatedrecords1 res[2]", res[2], 17);
        proxyprinttodiv("testgetrelatedrecords1 res[5]", res[5], 17);
        proxyprinttodiv("testgetrelatedrecords1 res[8]", res[8], 17);
        callback(err, res);
    });
}


/*
    deepfilter should process command
    To check dataType=object, dataType=array
*/
exports.etd15 = etd15 = function etd15(params, callback) {
    debuglevel = 17;
    async.series([
    function step1(cb1){
        var dtoObjOpt = {"o1":"object","a1":"array","q":{"w":{"e":"boolean"}},"b":[{"c":"string","c1":"boolean","c2":"boolean"}]};
        var inputObj = {"o1":{"a":"b"},"a1":[{"a1":"b1"},{"a2":"b2"}],"q":{"w":{"e":"true"}},"b":[{"c":"one","c1":"true","c2":"x"}]};
        var command = {"deepfilter":{"convert":"true"}};
        deepfilter(inputObj, dtoObjOpt, command, function (err, res){
            cb1(err, res);
        });
    }], function (err, res) {
        proxyprinttodiv("res --", res, 17);
        var actual_result = [res];
        proxyprinttodiv("actual_result --", actual_result, 17);                           

        var expected_result = [[{"o1":{"a":"b"},"a1":["hi","hi2"]}]];
        proxyprinttodiv("expected_result --", expected_result, 17);

//      res = logverify("etd15", actual_result, expected_result);
        callback(err, res);
    });
}

/*
    guid, shortguid, random4
*/
exports.etdguid = etdguid = function etdguid(params, callback) {
    debuglevel = 17;
    async.series([
    function step1(cb1){
        var dtoObjOpt = {"g1":"guid","g2":"guid","sg1":"shortguid", "sg2":"shortguid","r1":"random4","r2":"random4"};
        var inputObj = {"g2":"1111111-2222-33333-4444-5555555555","sg2":"1111-2222-3333-4444","r2":"1111"};
        var command = {"deepfilter":{"convert":"true"}};
        deepfilter(inputObj, dtoObjOpt, command, function (err, res){
            cb1(err, res);
        });
    }], function (err, res) {
        proxyprinttodiv("res --", res, 17);
        var actual_result = [res];
        proxyprinttodiv("actual_result --", actual_result, 17);
        callback(err, res);
    });
}

/*
    objectoperations() test
*/
exports.testobjectoperations = testobjectoperations = function testobjectoperations(params, callback) {
    debuglevel = 17;    
    var executeList = [{    //object size
        "executethis": "objectoperations",
        "command": {"object":{"a":"b","b":"c"}, "result":"objectSize1"}
    }, {    //right collection input for size
        "executethis": "objectoperations",
        "command": {"collection":"dricollection", "result":"objectSize2"}
    }, {    //to add test1
        "executethis":"updatewid",
        "wid": "test1",
        "a": "1"
    }, {    //right datasettable input for size
        "executethis": "objectoperations",
        "command": {"databasetable":"wikiwallettesting", "result":"objectSize3"}
    }, {    //to add test2
        "executethis":"updatewid",
        "wid": "test2",
        "a": "2"
    }, {    //to add test3
        "executethis":"updatewid",
        "wid": "test3",
        "a": "3"
    }, {    //right collection, datasettable input for size
        "executethis": "objectoperations",
        "command": {"collection":"dricollection", "databasetable":"wikiwallettesting", "result":"objectSize4"}
    }, {    //wrong collection input for size
        "executethis": "objectoperations",
        "command": {"collection":"testcollection", "result":"objectSize5"}
    }, {    //right collection input for delete=true
        "executethis": "objectoperations",
        "command": {"collection":"dricollection", "result":"objectSize6", "delete":true}
    }, {    //right collection input for size
        "executethis": "objectoperations",
        "command": {"collection":"dricollection", "result":"objectSize7"}
    }];
    execute(executeList, function (err, res) {
        proxyprinttodiv("testobjectoperations res", res, 17);
        callback(err, res);
    });
}


/*
deletewid() test 
-- To delete parent/child with recursion
*/ 
exports.testdltwid2 = testdltwid2 = function testdltwid2(params, callback) {
    debuglevel = 17;
    execute([{  //authordto
        "executethis": "updatewid",
        "metadata.method": "authordto",
        "wid": "authordto",
        "name": "string",
        "age": "string"
    }, {    //bookdto
        "executethis": "updatewid",
        "metadata.method": "bookdto",
        "wid": "bookdto",
        "title": "string"
    }, {    //authordto - bookdto
        "executethis": "updatewid",
        "wid": "rel_author_book",
        "metadata.method": "relationshipdto",
        "relationshiptype": "attributes",
        "linktype": "onetomany",
        "primarywid": "authordto",
        "primarymethod": "authordto",
        "secondarywid": "bookdto",
        "secondarymethod": "bookdto"
    }, {    //author1
        "executethis":"updatewid",
        "metadata.method": "authordto",
        "wid": "author1",
        "name": "Author 1",
        "age": "1",
        //"bookdto.title":"book1"
    }, {    //book1
        "executethis":"updatewid",
        "metadata.method": "bookdto",
        "wid": "book1",
        "title": "Book 1"
    }, {    //rel author1-book1
        "executethis": "updatewid",
        "wid": "rel_author1_book1",
        "metadata.method": "relationshipdto",
        "relationshiptype": "attributes",
        "linktype": "onetomany",
        "primarywid": "author1",
        "primarymethod": "author1",
        "secondarywid": "book1",
        "secondarymethod": "book1"
    }, {    //to get book1's parent author1
        "executethis":"getrelatedrecords",
        "widlist": ["book1"],
        "command": {"reltype": "parent", "recurse":true}
    }, {    //deletewid author1 with command.reltype=parent, recurse=true
        "executethis": "deletewid",
        "wid": "author1",
        "command":{"reltype":"child", "recurse":true}
    }],
    function(err, res) {
        proxyprinttodiv('testdltwid2 res', res, 99);
        callback(err, res);
    });
}

/*
    querywid() test
--To test getcommand() instead of fishOut()
*/
exports.testquerywid = testquerywid = function testquerywid(params, callback) {
    debuglevel = 17;
    execute([{  //query to get parent of book1
        "executethis": "querywid",
        "command": {"result":"querywidres"},
        "mongorawquery": {"$and": [{"data.secondarywid": "book1"}]}
    }],
    function(err, res) {
        proxyprinttodiv('testquerywid res', res, 99);
        callback(err, res);
    });
};

exports.ettestupdatewid = ettestupdatewid = function ettestupdatewid(params, callback) {
    var etEnvironment = new DriEnvironment(params.command.environment);
    var executeobject = {executethis:'updatewid',wid:'testdata123',key1:'value1',key2:'value2'};
    etEnvironment.execute(executeobject, function (err, result) {
        proxyprinttodiv('updatewid results', result, 99);
        callback(err, result);
    });
};

exports.ettestxrunupdatewid = ettestxrunupdatewid = function ettestxrunupdatewid(params, callback) {
    var etEnvironment = new DriEnvironment(params.command.environment);
    var executeobject = {
        command: {
            xrun: [{
                executethis:'updatewid',
                wid:'testdata123',
                key1:'value1',
                key2:'value2'
            }]
        }
    };
    etEnvironment.execute(executeobject, function (err, result) {
        proxyprinttodiv('xrun updatewid results', result, 99);
        callback(err, result);
    });
};

exports.ettestxrungetwidmaster = ettestxrungetwidmaster = function ettestxrungetwidmaster(params, callback) {
    var etEnvironment = new DriEnvironment(params.command.environment);
    var executeobject = {
        command: {
            "getwidmaster": {
                "execute": "ConvertToDOTdri"
            },
            xrun: [{
                executethis:'getwidmaster',
                wid:'testdata123'
            }]
        }
    };
    etEnvironment.execute(executeobject, function (err, result) {
        proxyprinttodiv('xrun getwidmaster results', result, 99);
        callback(err, result);
    });
};

exports.ettestupdatewidserver = ettestupdatewidserver = function ettestupdatewidserver(params, callback) {
    var etEnvironment = new DriEnvironment(params.command.environment);
    var executeobject = {command:{environment:{syncrule:'sync_server'}},executethis:'updatewid',wid:'testdata123',key1:'value1',key2:'value2'};
    etEnvironment.execute(executeobject, function (err, result) {
        proxyprinttodiv('updatewid results', result, 99);
        callback(err, result);
    });
};

exports.ettestgetwid = ettestgetwid = function ettestgetwid(params, callback) {
    var etEnvironment = new DriEnvironment(params.command.environment);
    etEnvironment.execute({executethis:'getwid',wid:'testdata123'}, function (err, result) {
        proxyprinttodiv('getwid results', result, 99);
        callback(err, result);
    });
};

exports.ettestgetwidserver = ettestgetwidserver = function ettestgetwidserver(params, callback) {
    var etEnvironment = new DriEnvironment(params.command.environment);
    etEnvironment.execute({command:{environment:{syncrule:'sync_server'}},executethis:'getwid',wid:'testdata123'}, function (err, result) {
        proxyprinttodiv('getwid results', result, 99);
        callback(err, result);
    });
};

exports.ettestdeletewid = ettestdeletewid = function ettestdeletewid(params, callback) {
    var etEnvironment = new DriEnvironment(params.command.environment);
    etEnvironment.execute({executethis:'deletewid',wid:'testdata123'}, function (err, result) {
        proxyprinttodiv('getwid results', result, 99);
        callback(err, result);
    });
};

exports.ettestaddwidmaster = ettestaddwidmaster = function ettestaddwidmaster(params, callback) {
    var etEnvironment = new DriEnvironment(params.command.environment);
    etEnvironment.execute({
        executethis:'addwidmaster',
        wid:'mastertestdata123',
        key1:'value1',
        key2:'value2'
    }, function (err, result) {
        proxyprinttodiv('addwidmaster results', result, 99);
        callback(err, result);
    });
};

exports.ettestaddwidmasterserver = ettestaddwidmasterserver = function ettestaddwidmasterserver(params, callback) {
    var etEnvironment = new DriEnvironment(params.command.environment);
    etEnvironment.execute({
        command:{
            environment:{
                syncrule:'sync_server'
            }
        },
        executethis:'addwidmaster',
        wid:'mastertestdata123',
        key1:'value1',
        key2:'value2'
    }, function (err, result) {
        proxyprinttodiv('addwidmaster results', result, 99);
        callback(err, result);
    });
};

exports.ettestgetwidmaster = ettestgetwidmaster = function ettestgetwidmaster(params, callback) {
    var etEnvironment = new DriEnvironment(params.command.environment);
    etEnvironment.execute({executethis:'getwidmaster',wid:'mastertestdata123'}, function (err, result) {
        proxyprinttodiv('getwid results', result, 99);
        callback(err, result);
    });
};

exports.ettestgetwidmasterserver = ettestgetwidmasterserver = function ettestgetwidmasterserver(params, callback) {
    var etEnvironment = new DriEnvironment(params.command.environment);
    etEnvironment.execute({
        command:{
            environment:{
                syncrule:'sync_server'
            }
        },
        executethis:'getwidmaster',
        wid:'mastertestdata123'
    }, function (err, result) {
        proxyprinttodiv('getwid results', result, 99);
        callback(err, result);
    });
};

exports.ettestquerywid = ettestquerywid = function ettestquerywid(params, callback) {
    var etEnvironment = new DriEnvironment(params.command.environment);
    etEnvironment.execute({
        executethis:'querywid',
        mongorawquery:{
            "wid":"testdata123"
        }
    }, function (err, result) {
        proxyprinttodiv('querywid results', result, 99);
        callback(err, result);
    });
};

exports.ettestquerywidserver = ettestquerywidserver = function ettestquerywidserver(params, callback) {
    var etEnvironment = new DriEnvironment(params.command.environment);
    etEnvironment.execute({
        command:{
            environment:{
                syncrule:'sync_server'
            }
        },
        executethis:'querywid',
        mongorawquery:{
            "wid":"testdata123"
        }
    }, function (err, result) {
        proxyprinttodiv('querywid results', result, 99);
        callback(err, result);
    });
};

exports.ettestquerywidmaster = ettestquerywidmaster = function ettestquerywidmaster(params, callback) {
    var etEnvironment = new DriEnvironment(params.command.environment);
    etEnvironment.execute({
        executethis:'querywidmaster',
        mongorawquery:{
            "wid":"testdata123"
        }
    }, function (err, result) {
        proxyprinttodiv('querywid results', result, 99);
        callback(err, result);
    });
};

exports.ettestquerywidmasterserver = ettestquerywidmasterserver = function ettestquerywidmasterserver(params, callback) {
    var etEnvironment = new DriEnvironment(params.command.environment);
    etEnvironment.execute({
        command:{
            environment:{
                syncrule:'sync_server'
            }
        },
        executethis:'querywidmaster',
        mongorawquery:{
            "wid":"testdata123"
        }
    }, function (err, result) {
        proxyprinttodiv('querywid results', result, 99);
        callback(err, result);
    });
};

exports.ettestexecutegetwid = ettestexecutegetwid = function ettestexecutegetwid(params, callback) {
    var etEnvironment = new DriEnvironment(params.command.environment);
    etEnvironment.execute({executethis:'testdata123'}, function (err, result) {
        proxyprinttodiv('executegetwid results', result, 99);
        callback(err, result);
    });
};

exports.ettestexecutegetwidserver = ettestexecutegetwidserver = function ettestexecutegetwidserver(params, callback) {
    var etEnvironment = new DriEnvironment(params.command.environment);
    etEnvironment.execute({command:{environment:{syncrule:'sync_server'}},executethis:'testdata123'}, function (err, result) {
        proxyprinttodiv('executegetwid results', result, 99);
        callback(err, result);
    });
};

exports.lukesdatatest = lukesdatatest = function lukesdatatest(params, callback) {
    var etEvironment = new DriEnvironment(params.command.environment);
    etEvironment.execute({
        "executethis": "querywidmaster",
        "command": {
            "environment": {
                "syncrule": "sync_server"
            },
            "result": "data"
        },
        "mongorawquery": {
            "$and": [
                {
                    "metadata.method": "defaultdto"
                }
            ]
        }
    } , function (err, result) {
        callback(err, result);
    })
};
