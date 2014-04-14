var SkinStore = require('connect-mongoskin'),
    mongoskin = require('mongoskin'),
    settings = require('../settings.js'),
    db = mongoskin.db(settings.MONGODB_URL, settings.MONGODB_OPTIONS);
require('../config-server.js')


var TABLE_NAME, schemaToLookup = configuration.defaultcollection;



// DAO method to remove an entry from specified collection
// exports.removefrommongo = removefrommongo = function removefrommongo(objToRemove, callback) {
//     db.collection(schemaToLookup).remove(objToRemove, function (err) {
//         if (err) {
//             console.error(err);
//             callback(err, {
//                 'error': 'error in removing'
//             });
//         } else {
//             // console.log('Removed! ' + JSON.stringify(objToRemove));
//             callback(err, objToRemove);
//         }
//     });
// };

// exports.getfrommongo = getfrommongo = function getfrommongo(objToFind, callback) {
//     // objToFind['etlocal'] = true;
//     if (typeof objToFind === "string") {
//         // console.log("not a JSON passed into getfrommongo");
//         objToFind = JSON.parse(objToFind);
//     }
//     var widName = objToFind['wid'];
//     // console.log(' ****** getFromMongo method in dao ' + JSON.stringify({
//     //     "wid": widName
//     // }));

//     db.collection(schemaToLookup).find({
//         "wid": widName
//     }).toArray(function (err, res) {
//         if (err) {
//             callback(err, res);
//         } else {
//             // console.log(' Found ' + JSON.stringify(res[0]));
//             if (res) {
//                 callback(null, res[0]);
//             } else {
//                 callback({
//                     "error": ""
//                 }, null);
//             }
//         }
//     });


// };

// DAO method to fetch unique an entry to specified collection:: the entry to be fetched is also specified :: 
// the callback function on succesful addition is also specified
// exports.mongoquery = mongoquery = function mongoquery(objToFind, callback, command) {
//     if (typeof objToFind === "string") {
//         // console.log("not a JSON passed into mongoquery " + JSON.stringify(objToFind));
//         objToFind = JSON.parse(objToFind);
//     }

//     // objToFind['etlocal'] = true;
//     if (objToFind && objToFind['etlocal']) {
//         var res = getfromlocal(objToFind);
//         if (!res) res = {
//             "etstatus": "empty"
//         };
//         callback(err, res);
//     } else {
//         // console.log('query to find => ' + JSON.stringify(objToFind));

//         db.collection(schemaToLookup).find(objToFind).toArray(function (err, res) {
//             if (err) {
//                 callback(err, {
//                     etstatus: {
//                         status: 'queryerror'
//                     }
//                 });
//             } else {
//                 if (res) {
//                     callback(err, res);
//                 } else {
//                     callback(err, []);
//                 }
//             }
//         });
//     }
// };


// DAO method to remove an entry from specified collection
// exports.mremove = mremove = function mremove(objToRemove, command, callback) {
//     (command && command.collection) ? schemaToLookup = command.collection : schemaToLookup = configuration.defaultcollection;

//     db.collection(schemaToLookup).remove(objToRemove, function (err) {
//         if (err) {
//             console.error(err);
//             callback(err, {
//                 'error': 'error in removing'
//             });
//         } else {
//             // console.log('Removed! ' + JSON.stringify(objToRemove));
//             callback(err, objToRemove);
//         }
//     });
// };


// DAO method to add an entry to specified schema:: the entry to be added is also specified :: 
// the callback function on succesful addition is also specified
// exports.madd = madd = function madd(objToAdd,command,  callback) {
//     // console.log('madd hit!');
//     (command && command.collection)? schemaToLookup = command.collection: schemaToLookup = configuration.defaultcollection ;

//     if (!objToAdd['data']) {
//         objToAdd['data'] = {}
//     };
//     delete objToAdd.data.etlocal;
//     // objToAdd['etlocal'] = true;

//     delete objToAdd['executethis'];
//     var widName = objToAdd.wid;
//     if (objToAdd['etlocal']) {
//         addtolocal(widName, objToAdd);
//         callback(err,objToAdd);
//     } else {
//         db.collection(schemaToLookup).update({
//             "wid": widName
//         }, objToAdd, {
//             "upsert": true
//         }, function (err, res) {
//             // console.log(' ****** madd method in dao' + JSON.stringify(objToAdd));
//             if (err) {
//                 console.error(schemaToLookup+">>>>>> ::: madd ::: Object ! '"+ JSON.stringify(objToAdd) +"' , + "+ err);
//                 callback(err,{
//                     etstatus: {
//                         status: "adderrror"
//                     }
//                 });
//             } else {
//                 console.log(schemaToLookup+'>>>>>> ::: madd ::: Object ! '+ JSON.stringify(objToAdd) +' , Added ' + JSON.stringify(res));
//                 callback(err,objToAdd);
//             }
//         });
//     }
// };


// DAO method to fetch unique an entry to specified colelction:: the entry to be fetched is also specified :: 
// the callback function on successful addition is also specified
// global.getmultiplefrommongo = getmultiplefrommongo = function getmultiplefrommongo(objToFind, targetfunction, callback) {
//     // console.log(' ****** getMultipleFromMongo method in dao');
//     db.collection(schemaToLookup).find(objToFind).toArray(function (err, result) {
//         if (err) {
//             console.error(err);
//             // throw err;
//             callback(err, {
//                 'error': 'error'
//             });
//         } else {
//             console.log('Found! ' + JSON.stringify(result));
//             callback(err, result);
//         }
//     });
// };



// DAO method to add an entry to specified schema:: the entry to be added is also specified :: 
// the callback function on succesful addition is also specified
// exports.addtomongo = addtomongo = function addtomongo(objToAdd, callback) {
//     if (!objToAdd['data']) {
//         objToAdd['data'] = {}
//     };
//     delete objToAdd.data.etlocal;
//     // objToAdd['etlocal'] = true;

//     delete objToAdd['executethis'];
//     // console.log(' ****** addToMongo method in dao' + JSON.stringify(objToAdd));
//     var widName = objToAdd.wid;
//     if (objToAdd['etlocal']) {
//         addtolocal(widName, objToAdd);
//         callback(err, objToAdd);
//     } else {

//         db.collection(schemaToLookup).update({
//             "wid": widName
//         }, objToAdd, {
//             "upsert": true
//         }, function (err, res) {
//             if (err) {

//                 callback(err, {
//                     etstatus: {
//                         status: "adderrror"
//                     }
//                 });
//             } else {
//                 callback(err, objToAdd);
//             }
//         });
//     }
// };


// commenting as addtomongo is a true upsert at this point
//exports.addorupdate = addorupdate = function addorupdate(entityToAdd,callback){
//    entityToAdd['etlocal'] = entityToAdd['data']['etlocal'];
//    delete entityToAdd.data.etlocal;
//    // entityToAdd['etlocal'] = true;
//
//
//    var widVal = (entityToAdd['wid']);
//    if(!widVal){
//      widVal = (entityToAdd['Wid']);
//    }
//
//    if (entityToAdd['etlocal']) {
//        addtolocal(widName, entityToAdd)
//        callback(entityToAdd);
//    }else{
//        console.log('addOrUpdate :::: widVal is >>> '+JSON.stringify(entityToAdd));
//      return getfrommongo({"wid":widVal},schemaToLookup,function (returnedObject){
//            console.log(' >>>> addOrUpdate ::: Default case >>> DB returns >>>  '+ JSON.stringify(returnedObject));
//            // check if object is found
//            if(returnedObject){
//                return updatetomongo(returnedObject,schemaToLookup,entityToAdd,function (updatedObj){
//                    console.log(" >>>> addOrUpdate ::: After updating   node  to Mongo - "+ JSON.stringify(updatedObj));
//                    callback(updatedObj);
//                });
//            }else{
//                return addtomongo(entityToAdd,schemaToLookup,function (addedObj){
//                    console.log(" >>>> addOrUpdate ::: After adding   node  to Mongo - "+ JSON.stringify(addedObj));
//                    callback(addedObj);
//                });
//            }
//        });
//    }
//};


function get_first_property(ob) {
    for (var props in ob) {
        return props;
    }
}




// **** ADDED BY SAURABH *** SHALL BE USED INSTEAD OF ABOVE madd
exports.madd = madd = function madd(entityToAdd, command, callback) {
    (command && command.collection) ? schemaToLookup = command.collection : schemaToLookup = configuration.defaultcollection;

    var widVal = (entityToAdd['wid']);
    if (!widVal) {
        widVal = (entityToAdd['Wid']);
    }

    return mget({
        "wid": widVal
    }, command, function (err, returnedObject) {
        // check if object is found
        if (returnedObject) {
            mupdate(returnedObject, entityToAdd, command, function (err, addedObj) {
                printLogs('madd', entityToAdd, addedObj);
                callback(err, addedObj);
            });
        } else {
            maddnew(entityToAdd, command, function (err, updatedObj) {
                printLogs('madd', entityToAdd, updatedObj);
                callback(err, updatedObj);
            });
        }
    });

};

function printLogs(fnname, input, output) {
    console.log(' DAO :: ***************************');
    console.log(' DAO :: >>>>>> ::: ' + fnname + ' begin ::: ');
    console.log(' DAO :: >>>>>> ::: inputs ::: ');
    console.log(' DAO :: '+ JSON.stringify(input));
    console.log(' DAO :: >>>>>> ::: output ::: ');
    console.log(' DAO :: '+JSON.stringify(output));
    console.log(' DAO :: >>>>>> ::: ' + fnname + ' end ::: ');
    console.log(' DAO :: ***************************');
}

// DAO method to add an entry to specified schema:: the entry to be added is also specified :: 
// the callback function on succesful addition is also specified
exports.maddnew = maddnew = function maddnew(objToAdd, command, callback) {
    (command && command.collection) ? schemaToLookup = command.collection : schemaToLookup = configuration.defaultcollection;

    db.collection(schemaToLookup).insert(objToAdd, function (err, res) {
        if (err) {
            callback(err, {
                etstatus: {
                    status: "adderrror"
                }
            });
        } else {
            callback(err, objToAdd);
        }
    });
};





// DAO method to aupdate
exports.mupdate = mupdate = function mupdate(finder, objToAdd, command, callback) {
    // console.log('madd hit!');
    (command && command.collection) ? schemaToLookup = command.collection : schemaToLookup = configuration.defaultcollection;


    db.collection(schemaToLookup).update({
        "wid": finder['wid']
    }, {
        "$set": objToAdd
    }, {}, function (err, res) {
        if (err) {
            callback(err, {
                etstatus: {
                    status: "adderrror"
                }
            });
        } else {
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


};