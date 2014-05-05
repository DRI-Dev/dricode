// test for updating -- add and then update nested data with overwrite not happening
flatten = require('flat').flatten;

// scenario is -- 
// update the 'data' wid and see if it is fine
// after single nested update to same database, different sub-database
exports.mup1 = mup1 = function mup1(params, callback) {
    var command = {
        "db": "data",
        "databasetable": "wikiwallettesting",
        "collection": "dricollection"
    }
    objToAdd = {
        "wid": "test1",
        "data": {
            "a1": {
                "a2": "a3"
            }
        }
    };
    finder = {
        "wid": "test1"
    };
    objToUpdate = {
        "test": {
            "b1": {
                "b2": "b3"
            }
        }
    };

    addNupdate(finder, objToAdd, objToUpdate, command, function(err, resp) {
        var dbObj = resp;
        var assertionObj = {
            "data": {
                "a1": {
                    "a2": "a3"
                }
            },
            "test": {
                "b1": {
                    "b2": "b3"
                }
            },
            "wid": "test1"
        };

        verify(assertionObj, dbObj, callback);
    });
};

// scenario is -- 
// update the 'data' wid and see if it is fine
// after single nested update to same database, same sub-database
exports.mup2 = mup2 = function mup2(params, callback) {
    var command = {
        "db": "data",
        "databasetable": "wikiwallettesting",
        "collection": "dricollection"
    }
    objToAdd = {
        "wid": "test1",
        "data": {
            "a1": {
                "a2": "a3"
            }
        }
    };
    finder = {
        "wid": "test1"
    };
    objToUpdate = {
        "data": {
            "b1": {
                "b2": "b3"
            }
        }
    };

    addNupdate(finder, objToAdd, objToUpdate, command, function(err, resp) {
        var dbObj = resp;
        var assertionObj = {
            "data": {
                "a1": {
                    "a2": "a3"
                },
                "b1": {
                    "b2": "b3"
                }
            },
            "wid": "test1"
        };

        verify(assertionObj, dbObj, callback);
    });
};


// this function removed the entity passed in by finder, 
// adds the addObject, updates the updateObject , and then gets the finder object to return back
// tests that the mongo records get updated correctly or not
// this fn makes use of mget,madd and mget function written in mongo.js

function addNupdate(finder, objToAdd, objToUpdate, command, callback) {
    databaseToLookup = command.db || databaseToLookup;
    mongoDatabaseToLookup = command.databasetable || mongoDatabaseToLookup;
    schemaToLookup = command.collection || schemaToLookup;


    db.getConnection(mongoDatabaseToLookup, function(err, db) {
        db.collection(schemaToLookup).remove(finder, function(err, resp) {
            console.log('mupdate hit! ' + JSON.stringify(objToAdd));

            maddnew(objToAdd, command, function(err, res) {
                // db.collection(schemaToLookup).insert(objToAdd, function(err, res) {
                if (err) {
                    console.log(err);
                    callback(err, {
                        etstatus: {
                            status: "adderrror"
                        }
                    });
                } else {
                    // update

                    objToUpdate = flatten(objToUpdate, {
                        safe: true
                    });

                    options = {
                        "upsert": true
                    };


                    mupdate(finder, {
                        "$set": objToUpdate
                    }, command, options, function(err, res) {
                        // db.collection(schemaToLookup).update(finder, {
                        //     "$set": objToUpdate
                        // }, options, function(err, res) {
                        if (err) {
                            console.log(err);
                            callback(err, {
                                etstatus: {
                                    status: "updateerrror"
                                }
                            });
                        } else {
                            mget(finder, command, function(err, res) {
                                if (err) {
                                    console.log(err);
                                    callback(err, {
                                        etstatus: {
                                            status: "geterror"
                                        }
                                    });
                                } else {
                                    console.log(res);
                                    callback(err, res);
                                }
                            });
                        }
                    });
                }
            });
        });


    });
}


// assertion matching function returns a JSOn with status: PASS/FAIL

function verify(expected, actual, callback) {
    console.log(' actual object got back >> ' + JSON.stringify(actual));
    delete actual['_id'];
    var status = 'FAIL';
    (JSON.stringify(actual) === JSON.stringify(expected)) ? status = 'PASS' : status = 'FAIL';
    callback(null, {
        "status": status
    });
}