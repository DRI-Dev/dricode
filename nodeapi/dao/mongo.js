// require(config-local) not bc=require(config-local), 
// otherwise functions inside config not available to execute, 
//also any place where config is used might have an issue
// propose naming of wid fns to include var =, reduce typing
// remove window() wrapping (utils, execute)… put if !window then window=global  



var SkinStore = require('connect-mongoskin'),
    mongoskin = require('mongoskin');
require('../boxconfiguration.js');


db = mongoskin.db(settings.MONGODB_URL, settings.MONGODB_OPTIONS);
var schemaToLookup = config.configuration.defaultcollection;
var databaseToLookup = config.configuration.defaultdb;

console.log("TABLE _ NAME is " + config.configuration.defaultcollection);
console.log("DATABASE _ NAME is " + config.configuration.defaultdb);





// DAO method to fetch unique an entry to specified collection:: the entry to be fetched is also specified :: 
// the callback function on succesful addition is also specified
exports.mquery = mquery = function mquery(objToFind, command, callback) {
    (command && command.collection) ? schemaToLookup = command.collection : schemaToLookup = configuration.defaultcollection;

    if (typeof objToFind === "string") {
        objToFind = JSON.parse(objToFind);
    }


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
};

exports.mget = mget = function mget(objToFind, command, callback) {

    (command && command.collection) ? schemaToLookup = command.collection : schemaToLookup = configuration.defaultcollection;

    if (typeof objToFind === "string") {
        objToFind = JSON.parse(objToFind);
    }
    var widName = objToFind['wid'];

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
}




exports.madd = madd = function madd(entityToAdd, command, callback) {

    console.log('madd hit! entityToAdd -- ' + JSON.stringify(entityToAdd));
    console.log('madd hit!  command -- ' + JSON.stringify(command));

    var addOptions = {}

    var widVal = (entityToAdd['wid']);
    if (!widVal) {
        widVal = (entityToAdd['Wid']);
    }

    widVal = {
        "wid": widVal
    };


    if (command && command.collection) {
        schemaToLookup = command.collection;
    }

    if (command && command.datastore) {
        if (databaseToLookup !== command.db) {
            // TODO :: switch db
            databaseToLookup = command.db;
        }
    }


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
            var entityToAdd = ConvertToDOTdri(entityToAdd);
            addOptions = {
                "upsert": true
            }

            objToUpdate = {
                "$set": entityToAdd
            };
        }
    } else {
        // upsert -- default
        addOptions = {
            "upsert": true
        }

        objToUpdate = {
            "$set": entityToAdd
        };
    }

    db.collection(schemaToLookup).update(widVal, objToUpdate, addOptions, function(err, res) {
        if (err) {
            callback(err, {
                etstatus: {
                    status: "adderror"
                }
            });
        } else {
            console.log(' madd -- response  is -- ' + res);
            console.log(' madd -- entityToAdd is -- ' + JSON.stringify(entityToAdd));
            callback(err, entityToAdd);
        }
    });
};





function printLogs(fnname, input, output) {
    // console.log(' DAO :: ***************************');
    // console.log(' DAO :: >>>>>> ::: ' + fnname + ' begin ::: ');
    // console.log(' DAO :: >>>>>> ::: inputs ::: ');
    // console.log(' DAO :: ' + JSON.stringify(input));
    // console.log(' DAO :: >>>>>> ::: output ::: ');
    // console.log(' DAO :: ' + JSON.stringify(output));
    // console.log(' DAO :: >>>>>> ::: ' + fnname + ' end ::: ');
    // console.log(' DAO :: ***************************');
}
