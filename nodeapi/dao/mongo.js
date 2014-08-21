(function (window) {
// require(config-local) not bc=require(config-local), 
// otherwise functions inside config not available to execute, 
//also any place where config is used might have an issue
// propose naming of wid fns to include var =, reduce typing
// remove window() wrapping (utils, execute)… put if !window then window=global  

// settings and config variables are declared in boxconfiguration
var SkinStore = require('connect-mongoskin'),
    mongoskin = require('mongoskin'),
    schemaToLookup = config.configuration.d.default.collection,
    databaseToLookup = config.configuration.d.default.db,
    mongoDatabaseToLookup = config.configuration.d.default.databasetable,
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

    if (typeof objToFind === "string" && objToFind !== "") {
        objToFind = JSON.parse(objToFind);
    }

    if (typeof projection === "string" && projection !== "") {
        projection = JSON.parse(projection);
    } else if (projection === "") { projection = {}; } // default projection to an empty object

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

exports.mapreduceserver = mapreduceserver = function mapreduceserver(map, reduce, p, callback) {
    var command = p.command;
    console.log("\nPROJECTION in mongo.js mapreduceserver: " + JSON.stringify(p));
    (command && command.db) ? databaseToLookup = command.db : databaseToLookup;
    (command && command.databasetable) ? mongoDatabaseToLookup = command.databasetable : mongoDatabaseToLookup;
    (command && command.collection) ? schemaToLookup = command.collection : schemaToLookup;

    var mapfn = window[map];
    var reducefn = window[reduce];
    var thirdparm = {};
    thirdparm.out = p.out; 

    getConnection(mongoDatabaseToLookup, function(err, db) {
        db.collection(schemaToLookup).mapReduce(mapfn, reducefn, thirdparm).toArray(function(err, res) {

            if (err) {
                callback(err, {
                    etstatus: {
                        status: 'queryerror'
                    }
                });
            } else {
                if (res) {
                    callback(err, res);
                } else {
                    callback(err, []);
                }
            }
        });
    });
};

// exports.mquery2 = mquery2 = function mquery2(objToFind, projection, command, callback) {
//     console.log('-->>-->> Inputs to mquery2 objToFind:\n' + 
//                 JSON.stringify(objToFind, '-', 4) + '\nCommand: \n' +
//                 JSON.stringify(command, '-', 4));
//     console.log("\nPROJECTION in mongo.js mquery2: " + JSON.stringify(projection));
//     (command && command.db) ? databaseToLookup = command.db : databaseToLookup;
//     (command && command.databasetable) ? mongoDatabaseToLookup = command.databasetable : mongoDatabaseToLookup;
//     (command && command.collection) ? schemaToLookup = command.collection : schemaToLookup;

//     if (typeof objToFind === "string") {
//         objToFind = JSON.parse(objToFind);
//     }

//     if (typeof projection === "string") {
//         projection = JSON.parse(projection);
//     }

//                 // console.log('-]-]-]-] Inputs to mquery2 objToFind:\n' + 
//                 // JSON.stringify(objToFind, '-', 4));
//                 // console.log('\n-]-] Inputs to mquery2 projection:\n' + 
//                 // JSON.stringify(projection, '-', 4));

//     getConnection(mongoDatabaseToLookup, function(err, db) {
//         db.collection(schemaToLookup).find(objToFind, projection).toArray(function(err, res) {

//             if (err) {
//                 printLogs('mquery2', objToFind, err);
//                 callback(err, {
//                     etstatus: {
//                         status: 'queryerror'
//                     }
//                 });
//             } else {
//                 if (res) {
//                     printLogs('mquery2', objToFind, res);
//                     callback(err, res);
//                 } else {
//                     printLogs('mquery2', objToFind, []);
//                     callback(err, []);
//                 }
//             }
//         });
//     });
// };

exports.wget = wget = function wget(objToFind, command, callback) {
    (command && command.db) ? databaseToLookup = command.db : databaseToLookup;
    (command && command.databasetable) ? mongoDatabaseToLookup = command.databasetable : mongoDatabaseToLookup;
    (command && command.collection) ? schemaToLookup = command.collection : schemaToLookup;

    if (typeof objToFind === "string") { objToFind = JSON.parse(objToFind); }

    getConnection(mongoDatabaseToLookup, function(err, db) {
        db.collection(schemaToLookup).find({wid:objToFind.wid}).toArray(function(err, result) {
            callback(null, result ? result[0] || null : null);
        });
    });
};

exports.mongodeletewid = mongodeletewid = function mongodeletewid(inobject, callback) {
    proxyprinttodiv('Function mongodeletewid inobject', inobject, 18);
    wget({wid:inobject.wid}, inobject.command || {}, function (err, results) {
        if (results && Object.size(results) > 0) {
            getConnection(mongoDatabaseToLookup, function(err, db) {
                db.collection(schemaToLookup).remove({_id: results._id}, function (err) {
                    if (err) { callback({errorname:err}, {}); }
                    else { callback(null, {}); }
                });
            });
        } else { callback({errorname:"notfound"}, {}); }
    });
};

// exports.mget = mget = function mget(objToFind, command, callback) {
//     (command && command.db) ? databaseToLookup = command.db : databaseToLookup;
//     (command && command.databasetable) ? mongoDatabaseToLookup = command.databasetable : mongoDatabaseToLookup;
//     (command && command.collection) ? schemaToLookup = command.collection : schemaToLookup;

//     if (objToFind.command) { delete objToFind.command; }

//     madd(objToFind, command, function (err, result) {
//         callback(err, result);
//     });
// };

// exports.madd = madd = function madd(incopy, command, callback) {
//      (command && command.db) ? databaseToLookup = command.db : databaseToLookup;
//      (command && command.databasetable) ? mongoDatabaseToLookup = command.databasetable : mongoDatabaseToLookup;
//      (command && command.collection) ? schemaToLookup = command.collection : schemaToLookup;

//      var widVal = {"wid":(incopy.wid)};

//      getConnection(mongoDatabaseToLookup, function(err, db) {
//          wget(widVal, command, function (err, currentrecord) {

//              var recordtoadd,
//                  found = false;

//              if (currentrecord)
//              {
//                  // this is the update process for wids
//                  // set up recordtoadd ready for addition
//                  recordtoadd = convertfromdriformatenhanced(currentrecord, command);
//                  // flatten out record -- normal : {wid:wid1 a:b c:d}, driformat: {wid:wid1 data:{a:b c:d}}
//                  found = true;       // mark that the record was found
//                  // mark that current record exists
//                  if (command.datamethod === "insert")
//                  {
//                      recordtoadd = incopy; // current record does not matter
//                  }
//                  else // (command.datamethod === "upsert") // default
//                  {
//                      recordtoadd = extend(true, recordtoadd, incopy);
//                  }
//                  if (command.hasOwnProperty("lock")) // set the right property to save
//                  {
//                      recordtoadd.metadata.lock = command.lock;
//                  }
//              }
//              else
//              {
//                  recordtoadd = incopy;
//              }

//              var currentlock = false;
//              if (currentrecord && currentrecord.metadata && currentrecord.metadata.lock)
//              {
//                   currentlock = true;
//              }

//              var shouldupdate = false;
//              if (!err &&
//                   ((command.getwidflag && command.hasOwnProperty("lock")) || (!command.getwidflag)))
//              {
//                   shouldupdate = true;
//              }

//              if (!currentlock && shouldupdate)
//              {
//                  if (!currentrecord) { currentrecord = {}; }
//                  var convertedrecord = converttodriformat(recordtoadd, command); // get it ready to store
//                  extend(true, currentrecord, convertedrecord); // merge with existing record

//                  if (currentrecord._id) { delete currentrecord._id; }

//                  if (command.getwidflag === true && !found) { err = {"errorname": "notfound"}; }

//                  // update list of objects database
//                  if (!found)
//                  {
//                      db.collection(schemaToLookup).insert(currentrecord, function(error, insertedWid) {
//                          // if this was actually a getwid call and nothing found then err
//                          callback(err || error, recordtoadd);
//                      });
//                  }
//                  else
//                  {
//                      db.collection(schemaToLookup).update(widVal, {$set:currentrecord}, {}, function (error, boolresult) {
//                          // if this was actually a getwid call and nothing found then err
//                          callback(err || error, recordtoadd);
//                      });
//                  }
//              }

//                 if (command.getwidflag === true && !found) { err = {"errorname": "notfound"}; }
//                 if (currentlock && shouldupdate){ err = {"errorname":"locked"}; }

//              callback(err, recordtoadd);
//          })
//     });
// };

// DAO method to add an entry to specified schema:: the entry to be added is also specified :: 
// the callback function on succesful addition is also specified
exports.wadd = wadd = function wadd(objToAdd, command, callback) {
    (command && command.db) ? databaseToLookup = command.db : databaseToLookup;
    (command && command.databasetable) ? mongoDatabaseToLookup = command.databasetable : mongoDatabaseToLookup;
    (command && command.collection) ? schemaToLookup = command.collection : schemaToLookup;

    if (!objToAdd.wid) { callback({error:"no wid passed to wadd function"}, null); }
    if (objToAdd['_id']) { delete objToAdd['_id']; }

    getConnection(mongoDatabaseToLookup, function(err, db) {
        if (command.newrecord)
        {
            db.collection(schemaToLookup).insert(objToAdd, function(error, insertedWid) {
                callback(err || error, objToAdd);
//                wget({wid:objToAdd.wid}, command, function (err, foundwid) {
//                    callback(err || error, foundwid);
//                });
            });
        }
        else
        {
            db.collection(schemaToLookup).update({wid:objToAdd.wid}, {$set:objToAdd}, {}, function (error, boolresult) {
                callback(err || error, objToAdd);
//                wget({wid:objToAdd.wid}, command, function (err, foundwid) {
//                    callback(err || error, foundwid);
//                });
            });
        }

    });
};



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

})(typeof window == "undefined" ? global : window);

