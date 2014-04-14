var SkinStore = require('connect-mongoskin'),
    mongoskin = require('mongoskin'),
    settings = require('../settings.js'),
    db = mongoskin.db(settings.MONGODB_URL, settings.MONGODB_OPTIONS);
require('../config-server.js')


var TABLE_NAME, schemaToLookup = configuration.defaultcollection;


// DAO method to add an entry to specified schema:: the entry to be added is also specified :: 
// the callback function on succesful addition is also specified
exports.madd = madd = function madd(objToAdd, command, callback) {
    // console.log('madd hit!');
    (command && command.collection) ? schemaToLookup = command.collection : schemaToLookup = configuration.defaultcollection;

    if (!objToAdd['data']) {
        objToAdd['data'] = {}
    };

    var widName = objToAdd.wid;
    db.collection(schemaToLookup).update({
        "wid": widName
    }, objToAdd, {
        "upsert": true
    }, function (err, res) {
        // console.log(' ****** madd method in dao' + JSON.stringify(objToAdd));
        if (err) {
            printLogs('madd', objToAdd, err);
            callback(err, {
                etstatus: {
                    status: "adderrror"
                }
            });
        } else {
            printLogs('madd', objToAdd, objToAdd);
            callback(err, objToAdd);
        }
    });

};


// DAO method to fetch unique an entry to specified collection:: the entry to be fetched is also specified :: 
// the callback function on succesful addition is also specified
exports.mquery = mquery = function mquery(objToFind, command, callback) {
    (command && command.collection) ? schemaToLookup = command.collection : schemaToLookup = configuration.defaultcollection;

    if (typeof objToFind === "string") {
        objToFind = JSON.parse(objToFind);
    }

    // objToFind['etlocal'] = true;
    if (objToFind && objToFind['etlocal']) {
        var res = getfromlocal(objToFind);
        if (!res) res = {
            "etstatus": "empty"
        };
        callback(err, res);
    } else {

        db.collection(schemaToLookup).find(objToFind).toArray(function (err, res) {
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
    }
};



exports.mget = mget = function mget(objToFind, command, callback) {

    (command && command.collection) ? schemaToLookup = command.collection : schemaToLookup = configuration.defaultcollection;

    if (typeof objToFind === "string") {
        objToFind = JSON.parse(objToFind);
    }
    var widName = objToFind['wid'];

    db.collection(schemaToLookup).find({
        "wid": widName
    }).toArray(function (err, res) {
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



// // // **** ADDED BY SAURABH *** SHALL BE USED INSTEAD OF ABOVE madd
// exports.madd = madd = function madd(entityToAdd, command, callback) {
//     (command && command.collection) ? schemaToLookup = command.collection : schemaToLookup = configuration.defaultcollection;

//     var widVal = (entityToAdd['wid']);
//     if (!widVal) {
//         widVal = (entityToAdd['Wid']);
//     }

//     return mget({
//         "wid": widVal
//     }, command, function (err, returnedObject) {
//         // check if object is found
//         if (returnedObject) {
//             mupdate(returnedObject, entityToAdd, command, function (err, addedObj) {
//                 printLogs('madd', entityToAdd, addedObj);
//                 callback(err, addedObj);
//             });
//         } else {
//             maddnew(entityToAdd, command, function (err, updatedObj) {
//                 printLogs('madd', entityToAdd, updatedObj);
//                 callback(err, updatedObj);
//             });
//         }
//     });

// };


// // DAO method to add an entry to specified schema:: the entry to be added is also specified :: 
// // the callback function on succesful addition is also specified
// exports.maddnew = maddnew = function maddnew(objToAdd, command, callback) {
//     (command && command.collection) ? schemaToLookup = command.collection : schemaToLookup = configuration.defaultcollection;

//     db.collection(schemaToLookup).insert(objToAdd, function (err, res) {
//         if (err) {
//             callback(err, {
//                 etstatus: {
//                     status: "adderrror"
//                 }
//             });
//         } else {
//             callback(err, objToAdd);
//         }
//     });
// };





// // DAO method to aupdate
// exports.mupdate = mupdate = function mupdate(finder, objToAdd, command, callback) {
//     // console.log('madd hit!');
//     (command && command.collection) ? schemaToLookup = command.collection : schemaToLookup = configuration.defaultcollection;


//     db.collection(schemaToLookup).update({
//         "wid": finder['wid']
//     }, {
//         "$set": objToAdd
//     }, {}, function (err, res) {
//         if (err) {
//             callback(err, {
//                 etstatus: {
//                     status: "adderrror"
//                 }
//             });
//         } else {
//             callback(err, objToAdd);
//         }
//     });
// };



// };