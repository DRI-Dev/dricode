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

    if (typeof objToFind === "string" && objToFind !== "") 
    {
        objToFind = JSON.parse(objToFind);
    }

    if (typeof projection === "string" && projection !== "") 
    {
        projection = JSON.parse(projection);
    } 
    else if (projection === "") { projection = {}; } // default projection to an empty object

    var pagenumber = command.pagenumber || 1;
    var perpage = command.perpage; // || 50;
    var skipval = command.skip || pagenumber > 0 ? (pagenumber-1)*perpage : 0;
    var limitval = command.limit || perpage || 0;  // 0 is all
    var sortobj = command.sort || {};
    var count = command.count || false;
    var distinct = command.distinct || null;

    getConnection(mongoDatabaseToLookup, function(err, db) {
        if (distinct) 
        {
            if (count)
            {
                //db.collection(schemaToLookup).count(objToFind, function (err, count) {
                db.collection(schemaToLookup).distinct(objToFind, function (err, res) {
                     if (err) {
                         callback({"errorname":"query_count_error"}, []);
                     } else {
                         if (res) { callback(err, {count: res.length }); }
                         else { callback({"errorname":"queryerror"}, []); }
                     }
                 });
            }
            else // if real query
            {
                 db.collection(schemaToLookup).
                     //find(objToFind, projection).
                     distinct(objToFind, projection).
                     sort(sortobj).
                     skip(skipval).
                     limit(limitval).
                     toArray(function(err, res)
                 {
                     if (err) { callback({"errorname":"queryerror: " + err}, []); }
                     else {
                         if (res) { callback(err, res); }
                         else { callback({"errorname":"no_query_result"}, []); }
                     }
                 });
            }
        }
        else
        {
            if (count)
            {
                 db.collection(schemaToLookup).count(objToFind, function (err, rescount) {
                     if (err) {
                         callback({"errorname":"query_count_error"}, []);
                     } else {
                         if (rescount) { callback(err, {count: rescount}); }
                         else { callback({"errorname":"queryerror"}, []); }
                     }
                 });
            }
            else // if real query
            {
                 db.collection(schemaToLookup).
                     find(objToFind, projection).
                     sort(sortobj).
                     skip(skipval).
                     limit(limitval).
                     toArray(function(err, res)
                 {
                     if (err) { callback({"errorname":"queryerror: " + err}, []); }
                     else {
                         if (res) { callback(err, res); }
                         else { callback({"errorname":"no_query_result"}, []); }
                     }
                 });
            }
        }
    });
};

exports.mapreduceserver = mapreduceserver = function mapreduceserver(mapfn, reducefn, p, callback) {
    var command = p.command;
    console.log("\nPROJECTION in mongo.js mapreduceserver: " + JSON.stringify(p));
    (command && command.db) ? databaseToLookup = command.db : databaseToLookup;
    (command && command.databasetable) ? mongoDatabaseToLookup = command.databasetable : mongoDatabaseToLookup;
    (command && command.collection) ? schemaToLookup = command.collection : schemaToLookup;

	proxyprinttodiv('mapreduceserver params = ',p,99, true, true);

    proxyprinttodiv('mapreduceserver mapfn = ',mapfn,99, true, true);
    proxyprinttodiv('mapreduceserver reducefn = ',reducefn,99, true, true);

    var filter_data = getcommand(p, 
        {   // defaults
        },
        {
            "sort":"",
            "finalize":"",
            "scope":"",
            "limit":"",
            "jsmode":"",
            "verbose":"",
            "query":"",
            "out":""
        },
    true);

    var thirdparam = filter_data.filteredobject;
    var xtra = filter_data.output;

    proxyprinttodiv('mapreduceserver thirdparam = ',thirdparam,99, true);
    proxyprinttodiv('mapreduceserver xtra = ',xtra,99, true);
    // if output = queryresult then inline
    
    if (!thirdparam.out) 
    {
        //"replace":"",
        //"merge":"",
        //"reduce":"",
        //"db":"",
        //"sharded":"",
        //"nonatomic":"",
        thirdparam.out={};
        if (xtra.merge)
        {
                                              // *** warning whatever collection is listed below will be overritten ****
            thirdparam.out.merge=xtra.merge || config.configuration.d.defaultoutputcollection;
        }
        else if (xtra.reduce)
        {
                                                // *** warning whatever collection is listed below will be overritten ****
            thirdparam.out.reduce=xtra.reduce || config.configuration.d.defaultoutputcollection;
        }
        else if (xtra.replace)
        {
                                                  // *** warning whatever collection is listed below will be overritten ****
            thirdparam.out.replace=xtra.replace || config.configuration.d.defaultoutputcollection;
        }
        else 
        {
            thirdparam.output.inline=1;
        }

        thirdparam.out.db = xtra.db || config.configuration.d.default.databasetable;
        //thirdparam.out.sharded = xtra.sharded || false;
        //thirdparam.out.nonAtomic = xtra.nonatomic || true;
    }

    proxyprinttodiv('mapreduceserver thirdparam = ',thirdparam,99, true, true);
    // mapfn and reducefn will be sent as strings from et-query
    getConnection(mongoDatabaseToLookup, function(err, db) {
        proxyprinttodiv('mapfn  ',mapfn,99, true, true);
        proxyprinttodiv('reducefn  ',reducefn,99, true, true);
        proxyprinttodiv('thirdparam  ',thirdparam,99, true, true);
        db.collection(schemaToLookup).mapReduce(mapfn, reducefn, thirdparam, function(err, res) {
            proxyprinttodiv('mapfn err ',err,99, true, true);
            if (err) {
                callback(err, {
                    etstatus: {
                        status: 'queryerror'
                    }
                });
            } else {
                if (res) {
                    if (thirdparam.out.inline == 1)
                    {
                        proxyprinttodiv('res from mapreduceserver = ',reducefn,99, true, true);
                        callback(err, res);
                    } else {
                        callback(null, null);
                    }
                } else {
                    callback(err, []);
                }
            }
        });
    });
};



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

exports.serverdeletecollection = serverdeletecollection = function serverdeletecollection(inobject, callback)
{
    // deletes collection in command.collection etc
}

exports.serverupdatecollection = serverupdatecollection = function serverupdatecollection(datalist, command, cb)
{
    // update collection from datalist
}

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

