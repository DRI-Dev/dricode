// require(config-local) not bc=require(config-local), 
// otherwise functions inside config not available to execute, 
//also any place where config is used might have an issue
// propose naming of wid fns to include var =, reduce typing
// remove window() wrapping (utils, execute)… put if !window then window=global  


require('../boxconfiguration.js');

// settings and config variables are declared in boxconfiguration
var SkinStore = require('connect-mongoskin'),
    mongoskin = require('mongoskin'),
    schemaToLookup = config.configuration.defaultcollection,
    databaseToLookup = config.configuration.defaultdb,
    mongoDatabaseToLookup = config.configuration.defaultmongodb,
    dbConnectionsManager = {},
    defaultDatabaseurl = settings.MONGODB_URL + mongoDatabaseToLookup;

console.log(defaultDatabaseurl);
dbConnectionsManager[mongoDatabaseToLookup] = mongoskin.db(defaultDatabaseurl, settings.MONGODB_OPTIONS);


// DAO method to fetch unique an entry to specified collection:: the entry to be fetched is also specified :: 
// the callback function on succesful addition is also specified
exports.mquery = mquery = function mquery(objToFind, command, callback) {
    (command && command.db) ? databaseToLookup = command.db : databaseToLookup;
    (command && command.databasetable) ? mongoDatabaseToLookup = command.databasetable : mongoDatabaseToLookup;
    (command && command.collection) ? schemaToLookup = command.collection : schemaToLookup;

    if (typeof objToFind === "string") {
        objToFind = JSON.parse(objToFind);
    }

    getConnection(mongoDatabaseToLookup, function(err, db) {
        db.collection(schemaToLookup).find(objToFind).toArray(function(err, res) {
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

exports.mget = mget = function mget(objToFind, command, callback) {
    (command && command.db) ? databaseToLookup = command.db : databaseToLookup;
    (command && command.databasetable) ? mongoDatabaseToLookup = command.databasetable : mongoDatabaseToLookup;
    (command && command.collection) ? schemaToLookup = command.collection : schemaToLookup;
    if (typeof objToFind === "string") {
        objToFind = JSON.parse(objToFind);
    }
    var widName = objToFind['wid'];

    getConnection(mongoDatabaseToLookup, function(err, db) {
        db.collection(schemaToLookup).find({
            "wid": widName
        }).toArray(function(err, res) {
            if (err) {
                printLogs('mget', widName, err);
                callback(err, res);
            } else {
                if (res && res && res[0]) {
                    printLogs('mget', widName, res[0]);
                    callback(null, res[0]);
                } else {
                    printLogs('mget', widName, null);
                    callback(null, null);
                }
            }
        });
    });
};

exports.madd = madd = function madd(entityToAdd, command, callback) {
    (command && command.db) ? databaseToLookup = command.db : databaseToLookup;
    (command && command.databasetable) ? mongoDatabaseToLookup = command.databasetable : mongoDatabaseToLookup;
    (command && command.collection) ? schemaToLookup = command.collection : schemaToLookup;

    var addOptions = {};

    var widVal = (entityToAdd['wid']);
    if (!widVal) {
        widVal = (entityToAdd['Wid']);
    }

    widVal = {
        "wid": widVal
    };

    addOptions = {};
    if (command && command.datamethod) {
        if (command.datamethod === 'clear') {
            // clear
            // clear saves the new came object after clearing the existing object
            // clear cleared the whole aid --all databases
            objToUpdate = entityToAdd;
            addOptions = {};
        } else if (command.datamethod === 'insert') {
            // insert
            // insert cleraeted only the db being used
            objToUpdate = {
                "$set": entityToAdd
            };


        } else if (command.datamethod === 'upsert') {
            // upsert
            // upsert saves the new came object after updating the existing object


//            console.log('** madd object before converttodotdri called => ' + JSON.stringify(entityToAdd));
//
//            // TODO :: FIX THIS , below line needed to avoid overwrites
//            entityToAdd = ConvertToDOTdri(entityToAdd);
//
//            console.log('** madd object after converttodotdri called => ' + JSON.stringify(entityToAdd));
            
            addOptions = {
                "upsert": true
            };

            var objToUpdate = {
                "$set": entityToAdd
            };
        }
    } else {
        // upsert -- default
        addOptions = {
            "upsert": true
        };

        objToUpdate = {
            "$set": entityToAdd
        };
    }

    getConnection(mongoDatabaseToLookup, function(err, db) {
        db.collection(schemaToLookup).update(widVal, objToUpdate, addOptions, function(err, res) {
            if (err) {
                printLogs('madd', entityToAdd, {});
                callback(err, {});
            } else {
                printLogs('madd', entityToAdd, entityToAdd);
                callback(err, entityToAdd);
            }
        });
    });
};

// manage multiple mongo database connections
function getConnection(mongoDatabaseToLookup, callback) {
    var databaseConnection;
    var err;
    if (dbConnectionsManager[mongoDatabaseToLookup]) {
        databaseConnection = dbConnectionsManager[mongoDatabaseToLookup];
    } else {
        databaseConnection = mongoskin.db(settings.MONGODB_URL + mongoDatabaseToLookup, settings.MONGODB_OPTIONS);
        dbConnectionsManager[mongoDatabaseToLookup] = databaseConnection; // place in connections factory
    }

    if (!databaseConnection) {
        err = "error in getting connection to " + mongoDatabaseToLookup;
    }
    callback(err, databaseConnection);
}

function printLogs(fnname, input, output) {

    // console.log(" DAO :: "+fnname+"  TABLE _ NAME is " + schemaToLookup);
    // console.log(" DAO :: "+fnname+"  DATABASE _ NAME is " + databaseToLookup);
    // console.log(" DAO :: "+fnname+"  MONGO _ DATABASE _ NAME is " + mongoDatabaseToLookup);
    // console.log(' DAO :: ***************************');
    // console.log(' DAO :: >>>>>> ::: ' + fnname + ' begin ::: ');
    // console.log(' DAO :: >>>>>> ::: inputs ::: ');
    // console.log(' DAO :: ' + JSON.stringify(input));
    // console.log(' DAO :: >>>>>> ::: output ::: ');
    // console.log(' DAO :: ' + JSON.stringify(output));
    // console.log(' DAO :: >>>>>> ::: ' + fnname + ' end ::: ');
    // console.log(' DAO :: ***************************');
}