// require(config-local) not bc=require(config-local), 
// otherwise functions inside config not available to execute, 
//also any place where config is used might have an issue
// propose naming of wid fns to include var =, reduce typing
// remove window() wrapping (utils, execute)… put if !window then window=global  


require('../config.js');

// settings and config variables are declared in boxconfiguration
var SkinStore = require('connect-mongoskin'),
    mongoskin = require('mongoskin'),
    schemaToLookup = config.configuration.defaultcollection,
    databaseToLookup = config.configuration.defaultdb,
    mongoDatabaseToLookup = config.configuration.defaultdatabasetable,
    dbConnectionsManager = {},
    // defaultDatabaseurl = settings.MONGODB_URL + mongoDatabaseToLookup,
    flatten = require('flat').flatten;

// manage multiple mongo database connections
exports.getConnection = getConnection = function getConnection(mongoDatabaseToLookup, callback) {
    var databaseConnection;
    var err;
    if (dbConnectionsManager[mongoDatabaseToLookup]) {
        databaseConnection = dbConnectionsManager[mongoDatabaseToLookup];
    } else {
        console.log('database is >>> '+ settings.DB_SET[mongoDatabaseToLookup]['DB_HOST_NAME']);
        var DB_HOST_NAME = settings.DB_SET[mongoDatabaseToLookup]['DB_HOST_NAME'];
        var DB_USER_ID = settings.DB_SET[mongoDatabaseToLookup]['DB_USER_ID'];
        var DB_USER_PWD = settings.DB_SET[mongoDatabaseToLookup]['DB_USER_PWD'];
        var DB_URL;

        if(DB_USER_ID && DB_USER_PWD) { DB_URL = 'mongodb://' + DB_USER_ID + ':' + DB_USER_PWD + '@' + DB_HOST_NAME + '/' + mongoDatabaseToLookup; }
        else { DB_URL = 'mongodb://' + DB_HOST_NAME + '/' + mongoDatabaseToLookup; }

        console.log('DATABSE URL is ' + DB_URL);
        databaseConnection = mongoskin.db(DB_URL, settings.MONGODB_OPTIONS);
        dbConnectionsManager[mongoDatabaseToLookup] = databaseConnection; // place in connections factory
    }

    if (!databaseConnection) {
        err = "error in getting connection to " + mongoDatabaseToLookup;
    }
    callback(err, databaseConnection);
};

// DAO method to fetch unique an entry to specified collection:: the entry to be fetched is also specified :: 
// the callback function on succesful addition is also specified
exports.mquery = mquery = function mquery(objToFind, projection, command, callback) {
    console.log('-->>-->> Inputs to mquery objToFind:\n' + 
                JSON.stringify(objToFind, '-', 4) + '\nCommand: \n' +
                JSON.stringify(command, '-', 4));
    console.log("\nPROJECTION in mongo.js mquery: " + JSON.stringify(projection));
    (command && command.db) ? databaseToLookup = command.db : databaseToLookup;
    (command && command.databasetable) ? mongoDatabaseToLookup = command.databasetable : mongoDatabaseToLookup;
    (command && command.collection) ? schemaToLookup = command.collection : schemaToLookup;

    if (typeof objToFind === "string") {
        objToFind = JSON.parse(objToFind);
    }

    if (typeof projection === "string") {
        projection = JSON.parse(projection);
    }

    getConnection(mongoDatabaseToLookup, function(err, db) {
        db.collection(schemaToLookup).find(objToFind, projection).toArray(function(err, res) {

            if (err) {
                printLogs('mquery', objToFind, err);
                callback(err, {
                    etstatus: {
                        status: 'queryerror'
                    }
                });
            } else {
                if (res) {
                    printLogs('mquery', objToFind, res);
                    callback(err, res);
                } else {
                    printLogs('mquery', objToFind, []);
                    callback(err, []);
                }
            }
        });
    });
};

exports.mquery2 = mquery2 = function mquery2(objToFind, projection, command, callback) {
    console.log('-->>-->> Inputs to mquery2 objToFind:\n' + 
                JSON.stringify(objToFind, '-', 4) + '\nCommand: \n' +
                JSON.stringify(command, '-', 4));
    console.log("\nPROJECTION in mongo.js mquery2: " + JSON.stringify(projection));
    (command && command.db) ? databaseToLookup = command.db : databaseToLookup;
    (command && command.databasetable) ? mongoDatabaseToLookup = command.databasetable : mongoDatabaseToLookup;
    (command && command.collection) ? schemaToLookup = command.collection : schemaToLookup;

    if (typeof objToFind === "string") {
        objToFind = JSON.parse(objToFind);
    }

    if (typeof projection === "string") {
        projection = JSON.parse(projection);
    }

                // console.log('-]-]-]-] Inputs to mquery2 objToFind:\n' + 
                // JSON.stringify(objToFind, '-', 4));
                // console.log('\n-]-] Inputs to mquery2 projection:\n' + 
                // JSON.stringify(projection, '-', 4));

    getConnection(mongoDatabaseToLookup, function(err, db) {
        db.collection(schemaToLookup).find(objToFind, projection).toArray(function(err, res) {

            if (err) {
                printLogs('mquery2', objToFind, err);
                callback(err, {
                    etstatus: {
                        status: 'queryerror'
                    }
                });
            } else {
                if (res) {
                    printLogs('mquery2', objToFind, res);
                    callback(err, res);
                } else {
                    printLogs('mquery2', objToFind, []);
                    callback(err, []);
                }
            }
        });
    });
};

exports.mget = mget = function mget(objToFind, command, callback) {
    (command && command.db) ? databaseToLookup = command.db : databaseToLookup;
    (command && command.databasetable) ? mongoDatabaseToLookup = command.databasetable : mongoDatabaseToLookup;
    (command && command.collection) ? schemaToLookup = command.collection : schemaToLookup;

    if (typeof objToFind === "string") { objToFind = JSON.parse(objToFind); }

    getConnection(mongoDatabaseToLookup, function(err, db) {
        db.collection(schemaToLookup).find({wid:objToFind.wid}).toArray(function(err, result) {
            callback(null, result[0] || null);
        });
    });
};

exports.madd = madd = function madd(objToAdd, command, callback) {
    (command && command.db) ? databaseToLookup = command.db : databaseToLookup;
    (command && command.databasetable) ? mongoDatabaseToLookup = command.databasetable : mongoDatabaseToLookup;
    (command && command.collection) ? schemaToLookup = command.collection : schemaToLookup;

    var widVal = {"wid":(objToAdd['wid'])};

    getConnection(mongoDatabaseToLookup, function(err, db) {
        mget(widVal, command, function (err, widfound) {
            if (widfound) {
                // use $set so existing properties are not overwritten
                db.collection(schemaToLookup).update(widVal, {$set:objToAdd}, {}, function (err, res) {
                    if (err) {
                        callback(err, {etstatus: {status: "updateerrror"}});
                    } else {
                        mget(widVal, command, function(err, result) {
                            callback(null, result[0]);
                        });
                    }
                });
            } else {
                db.collection(schemaToLookup).insert(objToAdd, function(err, insertedWid) {
                    if (err) {
                        callback(err, {etstatus: {status: "adderrror"}});
                    } else {
                        callback(err, insertedWid[0]);
                    }
                });
            }
        });
    });
};

// DAO method to add an entry to specified schema:: the entry to be added is also specified :: 
// the callback function on succesful addition is also specified
//exports.maddnew = maddnew = function maddnew(objToAdd, command, callback) {
//    (command && command.db) ? databaseToLookup = command.db : databaseToLookup;
//    (command && command.databasetable) ? mongoDatabaseToLookup = command.databasetable : mongoDatabaseToLookup;
//    (command && command.collection) ? schemaToLookup = command.collection : schemaToLookup;
//
//    getConnection(mongoDatabaseToLookup, function(err, db) {
//        db.collection(schemaToLookup).insert(objToAdd, function(err, res) {
//            if (err) {
//                callback(err, {
//                    etstatus: {
//                        status: "adderrror"
//                    }
//                });
//            } else {
//                callback(err, objToAdd);
//            }
//        });
//    });
//};
//
//// DAO method to aupdate
//exports.mupdate = mupdate = function mupdate(finder, objToAdd, command, options, callback) {
//    (command && command.db) ? databaseToLookup = command.db : databaseToLookup;
//    (command && command.databasetable) ? mongoDatabaseToLookup = command.databasetable : mongoDatabaseToLookup;
//    (command && command.collection) ? schemaToLookup = command.collection : schemaToLookup;
//    // updateData = objToAdd;
//    getConnection(mongoDatabaseToLookup, function(err, db) {
//        console.log('mupdate hit! ' + JSON.stringify(objToAdd));
//        // var objToUpdate = databaseToLookup[objToAdd];
//        db.collection(schemaToLookup).update(
//            finder,
//            objToAdd, options, function(err, res) {
//                if (err) {
//                    console.log(err);
//                    callback(err, {
//                        etstatus: {
//                            status: "adderrror"
//                        }
//                    });
//                } else {
//                    callback(err, objToAdd);
//                }
//            });
//    });
//};

//exports.mget = mget = function mget(objToFind, command, callback) {
//    (command && command.db) ? databaseToLookup = command.db : databaseToLookup;
//    (command && command.databasetable) ? mongoDatabaseToLookup = command.databasetable : mongoDatabaseToLookup;
//    (command && command.collection) ? schemaToLookup = command.collection : schemaToLookup;
//    if (typeof objToFind === "string") {
//        objToFind = JSON.parse(objToFind);
//    }
//    var widName = objToFind['wid'];
//
//    getConnection(mongoDatabaseToLookup, function(err, db) {
//        db.collection(schemaToLookup).find({
//            "wid": widName
//        }).toArray(function(err, res) {
//                if (err) {
//                    // printLogs('mget', widName, err);
//                    callback(err, res);
//                } else {
//                    if (res && res && res[0]) {
//                        printLogs('mget', widName, res);
//                        callback(null, res[0]);
//                    } else {
//                        // printLogs('mget', widName, null);
//                        callback(null, null);
//                    }
//                }
//            });
//    });
//};

//exports.madd = madd = function madd(entityToAddIn, command, callback) {
//    (command && command.db) ? databaseToLookup = command.db : databaseToLookup;
//    (command && command.databasetable) ? mongoDatabaseToLookup = command.databasetable : mongoDatabaseToLookup;
//    (command && command.collection) ? schemaToLookup = command.collection : schemaToLookup;
//
//    // console.log('>>>> entity added is ' + JSON.stringify(entityToAddIn));
//    // console.log('>>>>databaseToLookup >>> ' + databaseToLookup);
//
//    var entityToAdd = entityToAddIn;
//    var entityToUpdate = entityToAddIn;
//    console.log('>>>>entityToAdd >>> ' + JSON.stringify(entityToAdd));
//
//    var addOptions = {};
//
//    var widVal = (entityToAdd['wid']);
//
//
//    widVal = {
//        "wid": widVal
//    };
//
//    addOptions = {};
//    console.log(" :: DAO :: command.datamethod -- "+JSON.stringify(command));
//    console.log(" :: DAO :: command.datamethod -- "+command.datamethod);
//    if (command && command.datamethod === 'clear') {
//        // clear
//        // clear saves the new came object after clearing the existing object
//        // clear cleared the whole aid --all databases
//        objToUpdate = entityToAdd;
//        addOptions = {};
//    } else if (command && command.datamethod === 'insert') {
//        // insert
//        // insert cleraeted only the db being used
//        objToUpdate = {
//            "$set": entityToAdd
//        };
//    } else {
//        // upsert
//        // upsert saves the new came object after updating the existing object
//        // upsert -- default
//        entityToUpdate = flatten(entityToAdd, {
//            safe: true
//        });
//
//        addOptions = {
//            "upsert": true
//        };
//
//    }
//
//
//    mget(widVal, command, function(err, returnedObject) {
//        // check if object is found
//        if (returnedObject) {
//            mupdate(widVal, {
//                "$set": entityToUpdate
//            }, command, addOptions, function(err, res) {
//                if (err) {
//                    console.log('DAO :: madd :: error in updating -- ' + err);
//                    callback(err, {
//                        etstatus: {
//                            status: "updateerrror"
//                        }
//                    });
//                } else {
//                    mget(widVal, command, function(err, res) {
//                        if (err) {
//                            console.log('DAO :: madd :: error in getting post update -- ' + err);
//                            callback(err, {
//                                etstatus: {
//                                    status: "geterror"
//                                }
//                            });
//                        } else {
//                            console.log(res);
//                            callback(err, res);
//                        }
//                    });
//                }
//            });
//        } else {
//            maddnew(entityToAdd, command, function(err, res) {
//                if (err) {
//                    console.log('DAO :: madd :: error in adding -- ' +err);
//                    callback(err, {
//                        etstatus: {
//                            status: "adderrror"
//                        }
//                    });
//                } else {
//                    callback(err, res);
//                }
//            });
//        }
//    });
//};

function printLogs(fnname, input, output) {

    // console.log(" DAO :: " + fnname + "  TABLE _ NAME is " + schemaToLookup);
    // console.log(" DAO :: " + fnname + "  DATABASE _ NAME is " + databaseToLookup);
    // console.log(" DAO :: " + fnname + "  MONGO _ DATABASE _ NAME is " + mongoDatabaseToLookup);
    // console.log(' DAO :: ***************************');
    // console.log(' DAO :: >>>>>> ::: ' + fnname + ' begin ::: ');
    // console.log(' DAO :: >>>>>> ::: inputs ::: ');
    // console.log(' DAO :: ' + JSON.stringify(input));
    // console.log(' DAO :: >>>>>> ::: output ::: ');
    // console.log(' DAO :: ' + JSON.stringify(output));
    // console.log(' DAO :: >>>>>> ::: ' + fnname + ' end ::: ');
    // console.log(' DAO :: ***************************');
}