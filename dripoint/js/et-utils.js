// 'use strict';
// -- test to trigger github

// copyright (c) 2014 DRI

// adding defaults here as this is loaded before config-server server side
if (!Debug) { // printdiv
    var Debug = 'false';
}
if (!debuglevel) { // printdiv
    var debuglevel = 0;
}
if (!debugon) { // debugfn
    var debugon = false;
}

function getdatabaseinfo(command, datastore, collection, keycollection, db, databasetable) {
    proxyprinttodiv('Function getdatabaseinfo collection', collection, 12);
    proxyprinttodiv('Function getdatabaseinfo keycollection', keycollection, 12);
    proxyprinttodiv('Function getdatabaseinfo datastore', datastore, 12);
    var database = [];
    var keydatabase = {};
    var tempobj = {};
    tempobj["wid"] = "initialwid";
    tempobj["metadata"] = {
        "date": new Date()
    };
    tempobj[db] = {
        "system generated": "clearLocalStorage",
        "db": db,
        "collection": collection,
        "datastore": datastore,
        "databasetable": databasetable,
        "configuration": config.configuration.environment
    };
    if (datastore === "localstorage") {
        console.log("datastore is currently localstorage");
        database = getFromLocalStorage(databasetable + collection);
        if (!database) {
            addToLocalStorage(databasetable + collection, [tempobj]);
            addToLocalStorage(databasetable + keycollection, {
                "initialwid": tempobj
            });
            database = getFromLocalStorage(databasetable + collection);
        }
        keydatabase = getFromLocalStorage(databasetable + keycollection);
    } else if (datastore === "localstore") {
        console.log("datastore is currently localstore");
        database = getfromlocal(databasetable + collection); // &&& localstorage&&&
        if (!database) {
            addtolocal(databasetable + collection, [tempobj]);
            addtolocal(databasetable + keycollection, {
                "initialwid": tempobj
            });
            database = getfromlocal(databasetable + collection);
        }
        keydatabase = getfromlocal(databasetable + keycollection);
    } else if (datastore === "mongo") {}
    return {
        database: database,
        keydatabase: keydatabase
    };
}

/*
 copywid fn steps :-
 1. call getwid fn with fromwid, fromdb, fromcollection, fromdatastore
 2. call updatewid fn with get result wid, towid, todb, tocollection, todatastore
 3. call updatewid with blank record, fromwid, fromdb, fromcollection, fromdatastore if command.delete
 */
exports.copywid = copywid = copywid = function copywid(inputWidgetObject, callback) {
    var datastore = "";

    proxyprinttodiv('Function datastore inputWidgetObject 0', inputWidgetObject, 11);
    
    // this is now happeing in the enhanceparameters function
//    if (inputWidgetObject.command && inputWidgetObject.command.environment && Object.keys(inputWidgetObject.command.environment).length > 0) {
//        copyEnvironmentCommands(inputWidgetObject);
//    }

    // these properties are now being defaulted in the enhaceparameters function
//    var filter_data = getcommand(inputWidgetObject, {
//            "command": {
//                "fromdatastore": config.configuration.defaultdatastore,
//                "fromcollection": config.configuration.defaultcollection,
//                "fromkeycollection": config.configuration.defaultkeycollection,
//                "fromdb": config.configuration.defaultdb,
//                "fromdatabasetable": config.configuration.defaultdatabasetable,
//                "todatastore": config.configuration.defaultdatastore,
//                "tocollection": config.configuration.defaultcollection,
//                "tokeycollection": config.configuration.defaultkeycollection,
//                "todb": config.configuration.defaultdb,
//                "todatabasetable": config.configuration.defaultdatabasetable,
//                "towid": "",
//                "delete": false
//            }
//        }, {
//            "command": {
//                "fromdatastore": "",
//                "fromcollection": "",
//                "fromkeycollection": "",
//                "fromdb": "",
//                "fromdatabasetable": "",
//                "todatastore": "",
//                "tocollection": "",
//                "tokeycollection": "",
//                "todb": "",
//                "todatabasetable": "",
//                "towid": "",
//                "delete": "",
//                "environment": ""
//            }
//        },
//        true);

//    var filteredcommandobject = filter_data.filteredobject.command;
    var command = inputWidgetObject.command;
    
    proxyprinttodiv('Function copywid filteredcommandobject', command, 17);

    //fromwid, fromdb, fromcollection, fromdatastore, towid, todb, tocollection, todatastore, command,
    //1. call getwid fn with fromwid, fromdb, fromcollection, fromdatastore
    var getwidinput = {
        "wid": inputWidgetObject.wid,
        "command": {
            "db": command.fromdb,
            "collection": command.fromcollection,
            "datastore": command.fromdatastore,
            "databasetable": command.fromdatabasetable
        }
    };
    proxyprinttodiv('Function copywid getwidinput', getwidinput, 18);
    getwid(getwidinput, function (err, getwidresult) {
        proxyprinttodiv('Function copywid getwidresult', getwidresult, 17);

        //2. call updatewid fn with get result wid, towid, todb, tocollection, todatastore
        var updatewidinput = {
            "wid": inputWidgetObject.towid,
            "command": {
                "db": command.todb,
                "collection": command.tocollection,
                "datastore": command.todatastore,
                "databasetable": command.todatabasetable
            }
        };
        extend(true, updatewidinput, getwidresult);
        proxyprinttodiv('Function copywid updatewidinput', updatewidinput, 18);
        updatewid(updatewidinput, function (err, updatewidresult) {
            proxyprinttodiv('Function copywid updatewidresult', updatewidresult, 17);

            //3. call updatewid with blank record, fromwid, fromdb, fromcollection, fromdatastore if command.delete
            //if(inputWidgetObject["command"] && inputWidgetObject["command"]["delete"]===true){
            if (command["delete"]) {
                proxyprinttodiv('Function copywid updatewidblankinput', updatewidblankinput, 18);
                var updatewidblankinput = {
                    "wid": inputWidgetObject.wid,
                    "command": {
                        "db": command.fromdb,
                        "collection": command.fromcollection,
                        "datastore": command.fromdatastore,
                        "databasetable": command.fromdatabasetable,
                        "datamethod": "insert"
                    }
                };
                updatewid(updatewidblankinput, function (err, updatewidblankinputresult) {
                    proxyprinttodiv('Function copywid updatewidblankinputresult', updatewidblankinputresult, 17);
                    callback(err, updatewidblankinputresult);
                });
            } else {
                callback(err, updatewidresult);
            }
        });
    });
};


//    var filter_data = getcommand(inputWidgetObject, {
//            "command": {
//                "datastore": config.configuration.datastore,
//                "collection":config.configuration.collection,
//                //"keycollection":config.configuration.collection + "key",
//                "db":config.configuration.db,
//                "databasetable":config.configuration.databasetable,
//                "convertmethod":"toobject",
//                "datamethod":"upsert"
//                // "deepfilter" : {"keepaddthis":false}
//            }
//        }, {
//            "command": {
//                "datastore": "",
//                "collection":"",
//                //"keycollection":"",
//                "db":"",
//                "databasetable":"",
//                "convertmethod":"",
//                "datamethod":"",
//                "environment":""
//                // "deepfilter" : {"keepaddthis":""}
//            }
//        },
//        true);

//    var command = filter_data.filteredobject.command;
    // console.log('>>>inputWidgetObject.command.environment' +inputWidgetObject.command.environment)



    // not needed now as the environment variables are already defaulted into the command property in the enhanceparameters function
//    if (inputWidgetObject.command && inputWidgetObject.command.environment && Object.keys(inputWidgetObject.command.environment).length > 0) {
//        copyEnvironmentCommands(inputWidgetObject);
//    }

    //var defaultdatastore;
    //if (config.configuration.environment==="local") {defaultdatastore='localstorage';} else {defaultdatastore='mongo';}



exports.updatewid = updatewid = updatewid = function updatewid(originalarguments, callback) {
    var inputWidgetObject = {};
        extend(true, inputWidgetObject, originalarguments);
        proxyprinttodiv('Function datastore inputWidgetObject 1', inputWidgetObject, 99);
    var err = null;
    var widName = inputWidgetObject.wid;
    var found = false;
    var getdatabaseinforesult;
    var database = {};
    var keydatabase = {};
    var command = inputWidgetObject.command;
    var datastore= command.datastore;
    var collection = command.collection;
    var keycollection = collection + "key";
    var db = command.db;
    var datamethod = command.datamethod;
    var databasetable = command.databasetable;
        delete inputWidgetObject.command;
    var addedobject = converttodriformat(inputWidgetObject, command);
    command.keycollection = keycollection;
        proxyprinttodiv('Function datastore command -- add inputWidgetObject addedobject', addedobject, 99);


    if(!inputWidgetObject['metadata']){
        inputWidgetObject['metadata']={};
    }

    // copy environment stuff
    if(inputWidgetObject && inputWidgetObject.command && inputWidgetObject.command.usernamespace){
        // add usernamespace from environment to metadata
        if(inputWidgetObject.command.usernamespace){
            inputWidgetObject['metadata']['accountid']=inputWidgetObject.command.usernamespace;
        }
    }

    if (inputWidgetObject && inputWidgetObject.command && inputWidgetObject.command.userid) {inputWidgetObject.metadata.userid=inputWidgetObject.command.userid}
    proxyprinttodiv('Function  inputWidgetObject.command', inputWidgetObject.command, 11);
    proxyprinttodiv('Function datastore inputWidgetObject 1', inputWidgetObject, 11);
//    delete filter_data.output.command;
//    var addedobject=converttodriformat(filter_data.output, command);

    proxyprinttodiv('Function updatewid command  -- get', command, 12);
    proxyprinttodiv('Function datastore inputWidgetObject', inputWidgetObject, 12);
//    proxyprinttodiv('Function datastore filter_data', filter_data, 12);
    proxyprinttodiv('Function datastore command', command, 12);
    proxyprinttodiv('Function datastore command -- add', command, 12);
    proxyprinttodiv('Function datastore command -- add inputWidgetObject addedobject', addedobject, 12);

    if (widName) {
        proxyprinttodiv('Function addtomongo inputWidgetObject addedobject', addedobject, 12);
        proxyprinttodiv('Function addtomongo widName', widName, 12);
        getdatabaseinforesult = getdatabaseinfo(command, datastore, collection, keycollection, db, databasetable);
        proxyprinttodiv('Function getwid getdatabaseinforesult update', getdatabaseinforesult, 12);
        //datastore=getdatabaseinforesult.datastore;
        //collection=getdatabaseinforesult.collection;
        //keycollection=getdatabaseinforesult.keycollection;

        proxyprinttodiv('Function datastore command -- add inputWidgetObject addedobject', addedobject, 12);
        proxyprinttodiv('Function updatewid command  -- add', command, 12);
        if ((datastore === 'localstorage') || (datastore === 'localstore')) {
            database = getdatabaseinforesult.database;
            keydatabase = getdatabaseinforesult.keydatabase;

            proxyprinttodiv('Function addtomongo database', database, 12);

            for (var record in database) {
                proxyprinttodiv('Function addtomongo database[record]', database[record], 12);
                if (database[record]["wid"] === widName) {

                    //  this is so we can have multiple db in one record—i.e read the record, delete only the db we are updating,
                    // extend, save

                    // proxyprinttodiv('data method is : ', datamethod, 99);
                    var currentrecord = database[record];
                    if (datamethod === "upsert") {
                        //proxyprinttodiv('before upsert: ',addedobject,12);
                        addedobject = extend(true, currentrecord, addedobject);
                        //proxyprinttodiv('after upsert: ',addedobject,12);
                    } else if (datamethod === "insert") {
                        delete currentrecord[db];
                        addedobject = extend(true, currentrecord, addedobject);
                        proxyprinttodiv('got to insert: ', addedobject, 12);
                        // do nothing -- default
                    }

                    // default case is clear
                    database[record] = addedobject;
                    proxyprinttodiv('Function addtomongo found', database[record], 12);
                    found = true;
                    break;
                }
            }

            if (!found) {
                database.push(addedobject);
            }
            proxyprinttodiv('Function addtomongo database after push', database, 12);
            keydatabase[widName] = addedobject;

            if (datastore === "localstorage") {
                //keydatabase = getFromLocalStorage(keycollection);
                //keydatabase[widName] = inputWidgetObject;
                addToLocalStorage(databasetable + collection, database);
                addToLocalStorage(databasetable + keycollection, keydatabase);
            } else if (datastore === "localstore") {
                //keydatabase = getfromlocal(keycollection);
                //keydatabase[widName] = inputWidgetObject;
                addtolocal(databasetable + collection, database); // &&& localstorage
                addtolocal(databasetable + keycollection, keydatabase);
            }

            // upsert data in angular data model
            //addToAngular(widName, inputWidgetObject);

            // the type of storage below is not needed
            addToLocalStorage(databasetable + "_" + collection + "_" + widName, addedobject);
            //addtoangularstorage
            proxyprinttodiv('Function datastore command -- add addedobject end', addedobject, 12);
            callback(err, addedobject);
            //callback(err, {wid:widName});
        }
        // else if (datastore==='angularstorage') { // if datastore == angularstorage
        //     }
        else if (datastore === 'mongo') { // if datastore == mongo
            madd(addedobject, command, function (err, res) {
                callback(err, res);
            });
        } else {
            callback(null, {});
        }
    } else { // if no widName
        callback(null, {}); // should have better error here
    }
};

/*
    deletewid()
    - To move wid from original location to datasettable=driarchive, db=new Date()
*/
exports.deletewid = deletewid = deletewid = function deletewid(inputWidgetObject, callback) {
    proxyprinttodiv('Function deletewid inputWidgetObject', inputWidgetObject, 17);

    var err = null;
    var widName = inputWidgetObject['wid'];

    // command defaulting is now being done in the enhaceparameters function
//    var filter_data = getcommand(inputWidgetObject, {
//            "command": {
//                "fromdatastore": config.configuration.defaultdatastore,
//                "fromcollection": config.configuration.defaultcollection,
//                "fromkeycollection": config.configuration.defaultkeycollection,
//                "fromdb": config.configuration.defaultdb,
//                "fromdatabasetable": config.configuration.defaultdatabasetable,
//                "todatastore": config.configuration.defaultdeletedatastore,
//                "tocollection": config.configuration.defaultdeletecollection,
//                "tokeycollection": config.configuration.defaultdeletekeycollection,
//                "todb": config.configuration.defaultdeletedb,
//                "todatabasetable": config.configuration.defaultdeletedatabasetable,
//                "towid": "",
//                "delete": true
//            }
//        }, {
//            "command": {
//                "fromdatastore": "",
//                "fromcollection": "",
//                "fromkeycollection": "",
//                "fromdb": "",
//                "fromdatabasetable": "",
//                "todatastore": "",
//                "tocollection": "",
//                "tokeycollection": "",
//                "todb": "",
//                "todatabasetable": "",
//                "towid": "",
//                "delete": "",
//                "environment": ""
//            }
//        },
//        false);

//    inputWidgetObject = filter_data.output;

    if (widName) {
        proxyprinttodiv('Function deletewid inputWidgetObject before copywid', inputWidgetObject, 17);
        copywid(inputWidgetObject, function (err, copiedobject) {
            proxyprinttodiv('Function deletewid copiedobject ', copiedobject, 17);
            callback(err, copiedobject);
        });
    } else { // if no widName
        callback(null, {}); // should have better error here
    }
};

    
    // command defaulting logic is now being handled by the enhanceparameters function
    // if (inputWidgetObject.command && Object.keys(inputWidgetObject.command.environment).length > 0) {
    //     inputWidgetObject.command = extend(false, inputWidgetObject.command.environment, inputWidgetObject.command)
    // }

    // // if(!inputWidgetObject.command){inputWidgetObject.command={}}
    // // if(!inputWidgetObject.command.environment){inputWidgetObject.command.environment={}}
    // // proxyprinttodiv('Function datastore inputWidgetObject 0', inputWidgetObject, 11);

    // // var tempobj={};
    // // if (inputWidgetObject.command && inputWidgetObject.command.environment) {
    // //     tempobj=inputWidgetObject.command.environment;
    // //     delete inputWidgetObject.command.environment
    // // }
    // // proxyprinttodiv('Function datastore inputWidgetObject 1', inputWidgetObject, 11);
    // // inputWidgetObject.command = extend(true, inputWidgetObject.command, tempobj);

    // delete inputWidgetObject['command']['environment'];

//    if (inputWidgetObject.command && Object.keys(inputWidgetObject.command.environment).length > 0) {
//        copyEnvironmentCommands(inputWidgetObject);
//    }

//    var filter_data = getcommand(inputWidgetObject, {
//            "command": {
//                "datastore": config.configuration.defaultdatastore,
//                "collection": config.configuration.defaultcollection,
//                //"keycollection":config.configuration.defaultcollection + "key",
//                "db": config.configuration.defaultdb,
//                "databasetable": config.configuration.defaultdatabasetable,
//                "convertmethod": "toobject",
//                // "deepfilter" : {"keepaddthis":false}
//                "keepaddthis": true
//            }
//        }, {
//            "command": {
//                "datastore": "",
//                "collection": "",
//                //"keycollection":"",
//                "db": "",
//                "databasetable": "",
//                "convertmethod": "",
//                // "deepfilter" : {"keepaddthis":""}
//                "keepaddthis": "",
//                "environment": ""
//            }
//        },
//        true);
//    var command = filter_data.filteredobject.command;

exports.getwid = getwid = function getwid(inputWidgetObject, callback) {
    var originalarguments = {};
    var err = null;
    var output = {};
    var getdatabaseinforesult;
    var widName = inputWidgetObject.wid;
    var command = inputWidgetObject.command;
    var datastore = command.datastore;
    var collection = command.collection;
    var db = command.db;
    var databasetable = command.databasetable;
    var keycollection = collection + "key";

    // below unneeded?
    //command.keycollection = keycollection;

    extend(true, originalarguments, inputWidgetObject);

    proxyprinttodiv('Function getwid command  -- get', command, 12);
    proxyprinttodiv('Function datastore command -- get inputWidgetObject', inputWidgetObject, 12);
    proxyprinttodiv('Function datastore command -- get', command, 12);
    if (widName) {
        getdatabaseinforesult = getdatabaseinfo(command, datastore, collection, keycollection, db, databasetable);
        proxyprinttodiv('Function getwid getdatabaseinforesult', getdatabaseinforesult, 12);
        if ((datastore === 'localstorage') || (datastore === 'localstore')) {
            var keydatabase = getdatabaseinforesult.keydatabase;
            proxyprinttodiv('Function getwid keydatabase', keydatabase, 12);
            output = keydatabase[widName];
            if (!output) {
                output = {};
                err = {};
                err = {
                    "errorname": "notfound",
                    "errorparameters": {
                        "command": {
                            "queueparameters": originalarguments[0],
                            "overallresultparameters": [],
                            "currenterror": null,
                            "currentresult": null,
                            "currentparameters": originalarguments[0]
                        }
                    }
                };
            }
            if (config.configuration.environment === "local") {
                // this code shoudl be rewritten:
                // convertfromdriformat first
                // then do angular, and just extend
                getfromangular(inputWidgetObject, function (angularerr, resultobject) {
                    if (resultobject) {
                        if (output) { // resultobject && output
                            output = extend(true, resultobject, output);
                        } else { // resultobject && !output
                            output = resultobject;
                        }
                    }

                    if (Object.keys(output).length ) {
                        err = null;
                        // make sure data is bundled properly for convertfromdriformat()
                        for (var prop in output) {
                            if (output.hasOwnProperty(prop)) {
                                if (prop !== 'wid' && prop !== 'metadata' && prop !== 'converttodriformat' && prop !== db) {

                                    if (!output[db]) {
                                        output[db] = {};
                                    }
                                    output[db][prop] = output[prop];
                                    delete output[prop];
                                }
                            }
                        }
                        output = convertfromdriformatenhanced(output, command, originalarguments);

                    } // if output
                    else { // if no output
                        output = {};
                        // err = {};
                        // err = {
                        //     "errorname": "notfound",
                        //     "errorparameters": {
                        //         "command": {
                        //             "queueparameters": originalarguments[0],
                        //             "overallresultparameters": [],
                        //             "currenterror": null,
                        //             "currentresult": null,
                        //             "currentparameters": originalarguments[0]
                        //         }
                        //     }
                        // };
                    }
                    proxyprinttodiv('Function datastore command -- get output 1', output, 12);
                    callback(err, output);
                });
            } else { // if not local...this case makes no sense
                output = convertfromdriformatenhanced(output, command, originalarguments);
                callback(err, output);
            }
        } else if (datastore === 'mongo') {
            mget(inputWidgetObject, command, function (err, output) {
                output = convertfromdriformatenhanced(output, command, originalarguments);
                callback(err, output);
            });
        } else { // if not mongo
            output = convertfromdriformatenhanced(output, command, originalarguments);
            proxyprinttodiv('Function datastore command -- get output 4', output, 12);
            callback(err, output);
        }
    } else { // if no widname
        err = {};
        callback(err, output);
    }
    //callback(err, output);
}; //End of getfrommongo function

//To get parents
exports.getrelatedrecords = getrelatedrecords = function getrelatedrecords(obj, callback) {
    proxyprinttodiv('Function getrelatedrecords obj', obj, 17);

    // we send in {widlist : [wid1, wid2, wid3], command.reltype:parent}
    var filter_data = getcommand(obj, 
        { // create defaults
            "widlist": [],
            "command": 
            {
                "reltype": "parent",
                "recurse": true,
                "result": "recordresult"
            }
        }, 
        {        
            "command": {}
        }, 
        true);
    obj = filter_data.output;
    var command = filter_data.filteredobject.command;
    var widlist = obj["widlist"];
    proxyprinttodiv('Function getrelatedrecords widlist', widlist, 17);
    if (widlist.length === 0) {
        var res = {};
        res[command.result] = widlist;
        callback(null, res);
    } else {
        var reltype = command.reltype;
        var recurse = command.recurse;
        for (var index in widlist) { //we need to query every item in the incomming list
            var widName = widlist[index];
            var executeobject = {};
            executeobject["executethis"] = "querywid";
            executeobject["command"] = {
                "result": "queryresult"
            };
            if (reltype === 'parent') {
                executeobject["mongorawquery"] = {
                    "$and": [{
                        "data.secondarywid": widName
                    }]
                };
            } else {
                executeobject["mongorawquery"] = {
                    "$and": [{
                        "data.primarywid": widName
                    }]
                };
            }
            proxyprinttodiv('Function getrelatedrecords query', executeobject, 17);
            executeobject["command"]= {
                "executetype":"series"
                // "environment": {
                //     "run": {
                //         "type": "series"
                //     }
                // }
            };

            var env = new drienvironment(command.environment); 
            env.execute(executeobject, function (err, res) {
            //execute(executeobject, function (err, res) {
                proxyprinttodiv('Function getrelatedrecords query res', res, 17);
                if (err && (Object.keys(err).length) > 0) {
                    callback({}, widlist);
                } else {
                    if (res && (Object.keys(res).length) > 0) {
                        var recurselist = [];
                        proxyprinttodiv('Function getrelatedrecords res', res, 17);
                        var resultlist = res[0].queryresult;
                        proxyprinttodiv('Function getrelatedrecords resultlist', resultlist, 17);
                        if (resultlist && resultlist.length > 0) {
                            async.each(resultlist, function (wid, callback1) {
                                proxyprinttodiv('Function getrelatedrecords wid', wid, 17);
                                for (widkey in wid) {
                                    proxyprinttodiv('Function getrelatedrecords widkey', widkey, 17);
                                    var eachrecord = wid[widkey];
                                    proxyprinttodiv('Function getrelatedrecords eachrecord', eachrecord, 17);

                                    var eachwid;
                                    if (reltype === 'parent') {
                                        eachwid = eachrecord.primarywid;
                                    } else {
                                        eachwid = eachrecord.secondarywid;
                                    }

                                    proxyprinttodiv('Function getrelatedrecords eachwid **', eachwid, 17);
                                    recurselist.push(eachwid);
                                    widlist.push(eachwid);
                                    callback1();
                                }
                            }, function (err) {
                                if (err && (Object.keys(err).length) > 0) {
                                    callback({}, widlist);
                                }
                            });
                        } else {
                            var res = {};
                            res[command.result] = widlist;
                            proxyprinttodiv('Function getrelatedrecords callback1 with res', res, 17);
                            callback(null, res);
                        }

                        if (recurselist && recurselist.length > 0 && (recurse === true)) {
                            executeobject = {
                                widlist: recurselist,
                                command: {
                                    reltype: reltype,
                                    recurse: recurse,
                                    result: command.result
                                }
                            };

                            proxyprinttodiv('Function getrelatedrecords recurse object', executeobject, 17);
                            getrelatedrecords(executeobject, function (err, returnlist) {
                                if (err && (Object.keys(err).length) > 0) {
                                    callback({}, widlist);
                                } else {
                                    if (res && (Object.keys(res).length) > 0) {
                                        for (var eachitem in returnlist[command.result]) {
                                            widlist.push(returnlist[command.result][eachitem]);
                                        }
                                        proxyprinttodiv('Function getrelatedrecords callback2 with returnlist', returnlist, 17);
                                        var res = {};
                                        res[command.result] = widlist;
                                        proxyprinttodiv('Function getrelatedrecords callback2 with res', res, 17);
                                        callback(null, res);
                                    } else {
                                        var res = {};
                                        res[command.result] = widlist;
                                        proxyprinttodiv('Function getrelatedrecords callback2 with res', res, 17);
                                        callback(null, res);
                                    }
                                }
                            });
                        } else {
                            var res = {};
                            res[command.result] = widlist;
                            proxyprinttodiv('Function getrelatedrecords callback4 with res', res, 17);
                            callback(null, res);
                        }
                    } else {
                        var res = {};
                        res[command.result] = widlist;
                        proxyprinttodiv('Function getrelatedrecords callback5 with res', res, 17);
                        callback(null, res);
                    }
                }
            })
        }
    }
}; //End of getrelatedwids


exports.convertfromdriformatenhanced = convertfromdriformatenhanced = function convertfromdriformatenhanced(output, command, originalarguments) {
    output = convertfromdriformat(output, command);
    if (output && Object.keys(output) > 0) {
        output = extend(true, originalarguments, output);
    }
    if (((Object.keys(output).length) > 0) && (command.convertmethod === 'toobject')) {
        output = ConvertFromDOTdri(output);
    }
    return output
};

exports.convertfromdriformat = convertfromdriformat = function convertfromdriformat(widobject, command) {
    var outobject = {};
    //var outobject = null;
    var db = config.configuration.db;
    if (!command) {
        command = {}
    }
    if (command && command.db) {
        db = command.db;
    }

    if ((widobject) && (Object.keys(widobject).length > 0)) {
        if (isArray(widobject[db])) {
            outobject = widobject[db][0];
        } else {
            outobject = widobject[db] || {};
        }

        if (widobject['wid'] && !outobject['wid']) {
            outobject['wid'] = widobject['wid'];
        }

        if (widobject['metadata']) {
            if (widobject['metadata']['date']) {
                delete widobject['metadata']['date'];
            }
            outobject['metadata'] = widobject['metadata'];

        } else {
            outobject['metadata'] = "";
        }

        if (command.driformat === "nowid") {
            delete outobject.wid;
            delete outobject.metadata;
        }
        //commented by Roger
        //outobject = ConvertToDOTdri(outobject);
    }

    if (command.hasOwnProperty("keepaddthis") && !command.keepaddthis) { // i.e. remove add this if false

        if (outobject.hasOwnProperty("addthis")) {
            var _add_this = outobject["addthis"];
            delete outobject["addthis"];
            outobject = extend(true, outobject, _add_this)
        }
    }

    return outobject;
};




exports.converttodriformat = converttodriformat = function converttodriformat(inputObject, command) {
    var inputWidgetObject = JSON.parse(JSON.stringify(inputObject));
    delete inputWidgetObject['executethis'];
    proxyprinttodiv('Function updatewid in : inputWidgetObject', inputWidgetObject, 12);
    var saveobject = {};
    var db = config.configuration.db;
    var wid;
    var metadata;
    var date;
    if (command && command.db) {
        db = command.db;
    }

    inputWidgetObject['metadata.date'] = new Date();

    inputWidgetObject = ConvertFromDOTdri(inputWidgetObject);
    if (inputWidgetObject['wid']) {
        wid = inputWidgetObject['wid'];
        delete inputWidgetObject['wid'];
    }
    if (inputWidgetObject['metadata']) {
        metadata = inputWidgetObject['metadata'];
        delete inputWidgetObject['metadata'];
    }

    if (!metadata['expirationdate']) {
        metadata['expirationdate'] = new Date();
    }

    saveobject[db] = inputWidgetObject;
    saveobject['wid'] = wid;
    saveobject['metadata'] = metadata;
    proxyprinttodiv('Function updatewid in : saveobject II', saveobject, 12);
    return saveobject;
};


exports.cnt = 0;
exports.printToDiv = printToDiv = function printToDiv(text, outobject, debugone, pretty, expanddefault) {
    var inbound_parameters = arguments;
    var color_list = [
            "black",
            "red",
            "green",
            "maroon",
            "olive",
            "teal",
            "blue",
            "fuchsia",
            "purple",
            "lime",
            "green",
            "MediumBlue"
        ];
    exports.cnt = exports.cnt + 1;
    
    if (getglobal('expanddefault')) {expanddefault=true}
    
    if ((Debug == 'true') || (debuglevel == debugone) || (debugone == 99)) {
            var displaycolor = color_list[getglobal("debugcolor")];    
            var indent = getglobal("debugindent");
            indent=indent*5;
            var z = getglobal('debuglinenum');
            z++;
            saveglobal('debuglinenum', z);

            if (displaycolor == "") {
                displaycolor = "brown";
            }

            var jsonPretty;

            if (pretty) {
                jsonPretty = JSON.stringify(outobject, "-", 4);
            } else {
                jsonPretty = JSON.stringify(outobject);
            }
            // debuglinenum++;

            var linenum = getglobal('debuglinenum');
            exports.cnt++;  
            
            printText =  '<pre>';
            if (indent > 0) {
                printText +='<div style="color:' + displaycolor + '; padding-left:' + (1 * indent) + 'em;">';
                printText +='<button type="button" class="btn collapsiblebtn" data-toggle="collapse" data-target="#myDiv'+ exports.cnt + '"data-open-text="+" data-close-text="-">+</button> <'+ linenum + '> -' + indent/5 + '-';
                printText += text;
                
                printText +='</div>';
            } else {
                printText +='<div style="color:' + displaycolor + '";">';
                printText +='<button type="button" class="btn collapsiblebtn" data-toggle="collapse" data-target="#myDiv'+ exports.cnt +'" data-open-text="+" data-close-text="-">+</button> <'+ linenum + '> -' + indent/5 + '-';
                printText += text;
                printText +='</div>';
            }


            if(expanddefault){
                printText +='<div class="span4 collapse in" id="myDiv'+ exports.cnt +'">';
            }else{
                 printText +='<div class="span4 collapse" id="myDiv'+ exports.cnt +'">';
            }
            
            printText += syntaxHighlight(jsonPretty) +'</div></pre>';
                

        // console.log(text);
        // console.log(obj);
        if (document.getElementById('divprint')) {
            document.getElementById('divprint').innerHTML = document.getElementById('divprint').innerHTML + printText; //append(printText);
        }

    }

};


// exports.printToDiv = printToDiv = function printToDiv(text, outobject, debugone, pretty) {
//     var inbound_parameters = arguments;
//     var color_list = [
//             "black",
//             "red",
//             "green",
//             "maroon",
//             "olive",
//             "teal",
//             "blue",
//             "fuchsia",
//             "purple",
//             "lime",
//             "green",
//             "MediumBlue"
//         ];

//     // if ((g_Debug == 'true') || (g_debuglevel == debugone) || (debugone == 12)) {
//     //     printText = '<pre>' + text + '<br/>' + JSON.stringify(obj) + '</pre>';
//     //     if (pretty) {printText = '<pre>' + text + '<br/>' + JSON.stringify(obj, "-", 4)+ '</pre>';}
//     //     if (document.getElementById('divprint')) {
//     //         document.getElementById('divprint').innerHTML = document.getElementById('divprint').innerHTML + printText; //append(printText);
//     //     }


//     if ((Debug == 'true') || (debuglevel == debugone) || (debugone == 99)) {
//             var displaycolor = color_list[getglobal("debugcolor")];    
//             var indent = getglobal("debugindent");
//             indent=indent*5;
//             var z = getglobal('debuglinenum');
//             z++;
//             saveglobal('debuglinenum', z);

//             if (displaycolor == "") {
//                 displaycolor = "brown";
//             }

//             if (pretty) {
//             var jsonPretty = JSON.stringify(outobject, "-", 4);
//             }
//             else {
//             var jsonPretty = JSON.stringify(outobject);
//             }
//             // debuglinenum++;

//             if (indent > 0) {
//                 // var temp_HTML = debuglinenum + " " + indebugdesc + "<br>" + "<div style='color:" + displaycolor + "; padding-left:" + (8 * indent) + "em'>" + syntaxHighlight(jsonPretty) + displaycolor + "</div>";
//                 var temp_HTML = z + " " + text + "<br>" + "<div style='color:" + displaycolor + "; padding-left:" + (1 * indent) + "em'>" + syntaxHighlight(jsonPretty) + "</div>";
//             } else {
//                 // var temp_HTML = debuglinenum + " " + indebugdesc + "<br>" + "<div style='color:" + displaycolor + "'>" + syntaxHighlight(jsonPretty) + displaycolor + "</div>";
//                 var temp_HTML = z + " " + text + "<br>" + "<div style='color:" + displaycolor + "'>" + syntaxHighlight(jsonPretty) + "</div>";
//             }

//         // console.log(text);
//         // console.log(obj);
//         if (document.getElementById('divprint')) {
//             document.getElementById('divprint').innerHTML = document.getElementById('divprint').innerHTML + temp_HTML; //append(printText);
//         }

//     }
// };

exports.proxyprinttodiv = proxyprinttodiv = function proxyprinttodiv(text, obj, debugone, pretty,expanddefault) { // **** making code node compatible
    var inbound_parameters = arguments;
    var g_debuglinenum = getglobal("debuglinenum");

    if (!debugone) {
        debugone = -1;
    }
    if (exports.environment === "local") {
        printToDiv(text, obj, debugone, pretty,expanddefault);
    } else {
        if ((Debug == 'true') || (debuglevel == debugone) || (debugone == 99)) {


            console.re.log(text);


            // debuglinenum++;
            // var z = getglobal('debuglinenum');
            // z++;
            // saveglobal('debuglinenum', z);

            // var tempobj = {};
            // tempobj["text"] = text;
            // tempobj["obj"] = obj;
            // tempobj["executethis"] = "printdiv";
            // addtolocal(g_debuglinenum, tempobj);
        }
    }
}

// 
//   this will command.dtotype inisde bigdto
//   this will give an address for dtotype inside bigdto
//   then it uses that address to insert insertobjc into inputobj
//
//

exports.insertbydtotype = insertbydtotype = function insertbydtotype(inputobj, bigdto, insertobj, command) {
    proxyprinttodiv("insertbydtotype input inputobj :- ", inputobj, 38);
    proxyprinttodiv("insertbydtotype input bigdto :- ", bigdto, 38);
    proxyprinttodiv("insertbydtotype input insertobj :- ", insertobj, 38);
    proxyprinttodiv("insertbydtotype input command :- ", command, 38);

    var dtoname;
    var dtonameobj;
    var dtoindex;
    if (bigdto.metadata && bigdto["metadata"]["method"]) {
        dtoname = bigdto["metadata"]["method"];
    }
    if (insertobj.metadata && insertobj["metadata"]["method"]) {
        dtoname = insertobj["metadata"]["method"];
    }
    if (command && command.dtotype) {
        dtoname = command.dtotype;
    }
    proxyprinttodiv("insertbydtotype dtoname :- ", dtoname, 38);
    if (dtoname) {
        dtoindex = getindex(bigdto, dtoname, null);
        proxyprinttodiv("insertbydtotype dtoindex:- ", dtoindex, 38);
        if (!insertobj.metadata) {
            insertobj.metadata = {};
        }
        delete insertobj.wid;
        insertobj["metadata"]["method"] = dtoname;
        proxyprinttodiv("insertbydtotype setbyindex  insertobj:- ", insertobj, 38);
        proxyprinttodiv("insertbydtotype setbyindex  null inputobj:- I", inputobj, 38);
        if (dtoindex === null) { // create outside wrapper
            // Changed by joe to fix a nesting issue
            // dtoname = inputobj["metadata"]["method"];
            // insertobj[dtoname] = {};
            // extend(true, insertobj[dtoname], inputobj)
            // extend(true, insertobj[dtoname], inputobj)
            // inputobj = insertobj;
            proxyprinttodiv("insertbydtotype setbyindex  null insertobj:- II", insertobj, 38);
            // inputobj = ConvertFromDOTdri(inputobj);
            proxyprinttodiv("insertbydtotype setbyindex  null inputobj:- II", inputobj, 38);
            proxyprinttodiv("insertbydtotype setbyindex  null command.inherit:- II", command.inherit, 38);

            // this section handels the inherit types
            if (command.inherit === "default") {
                // default
                inputobj = extend(true, insertobj, inputobj);
            } else if (command.inherit === "override") {
                // override
                inputobj = extend(true, inputobj, insertobj); // notice the inputs are fliped
            }
            // clean up the command object
            delete command.inherit;

        } else {
            setbyindex(inputobj, dtoindex, insertobj);
            proxyprinttodiv("insertbydtotype setbyindex  inputobj:- ", inputobj, 38);
            inputobj = ConvertFromDOTdri(inputobj);
        }
    }
    proxyprinttodiv("insertbydtotype result :- ", inputobj, 38);
    return inputobj;
};


function getindex(parameterobject, dtoname, indexstring) {
    var inbound_parameters = arguments;

    var match;
    var potentialmap;
    if (parameterobject["metadata"] && parameterobject["metadata"]["method"] && parameterobject["metadata"]["method"] === dtoname) {
        return "";
    } else {
        for (var eachelement in parameterobject) {
            if (parameterobject.hasOwnProperty(eachelement)) {
                proxyprinttodiv('Function getindex eachelement', eachelement, 23);
                if (eachelement === dtoname) {
                    if (indexstring) {
                        indexstring = indexstring + '.' + eachelement;
                    } else {
                        indexstring = eachelement;
                    }
                    proxyprinttodiv('Function indexstring FOUND', indexstring, 23);
                    break;
                }

                if (parameterobject[eachelement] instanceof Object) {
                    if (indexstring) {
                        potentialmap = indexstring + '.' + eachelement;
                    } else {
                        potentialmap = eachelement;
                    }
                    match = getindex(parameterobject[eachelement], dtoname, potentialmap);
                    if (potentialmap !== match) {
                        indexstring = match;
                        proxyprinttodiv('Function match inside', match, 23);
                        break;
                    }
                }
            }
        }
    }
    proxyprinttodiv('Function indexstring ', indexstring, 23);

    debugfn("getindex code generator", "getindex", "get", "code", 2, 1, {
        0: inbound_parameters,
        1: indexstring
    }, 6);

    return indexstring;
}

function setbyindex(obj, str, val) {
    var keys, key;
    //make sure str is a string with length
    if (str === "") {
        extend(true, obj, val)
    } else {
        if (!str || !str.length || Object.prototype.toString.call(str) !== "[object String]") {
            return false;
        }
        if (obj !== Object(obj)) {
            //if it's not an object, make it one
            obj = {};
        }
        keys = str.split(".");
        while (keys.length > 1) {
            key = keys.shift();
            if (obj !== Object(obj)) {
                //if it's not an object, make it one
                obj = {};
            }
            if (!(key in obj)) {
                //if obj doesn't contain the key, add it and set it to an empty object
                obj[key] = {};
            }
            obj = obj[key];
        }
        // return obj[keys[0]] = val;
        return extend(true, obj[keys[0]], val); // we want to add data not overwrite data
    }
}



exports.deepfilter = deepfilter = function deepfilter(inputObj, dtoObjOpt, command, callback) {
    proxyprinttodiv("deepfilter inputObj", inputObj, 41);
    // proxyprinttodiv("deepfilter command", command, 99);
    var modifiedObj = {};
    // copying inputobj into modifiedObj
    extend(true, modifiedObj, inputObj);
    var convert;
    var totype;
    // var keepaddthis;
    var inbound_parameters_110 = arguments;
    // -- Convert --
    if (command && command.deepfilter && command.deepfilter.convert === undefined) { //if command.deepfilter.convert undefined
        convert = false; //default value
    } else {
        convert = command.deepfilter.convert;
    }
    // -- toType --
    if (command && command.deepfilter && command.deepfilter.totype === undefined) { //if command.deepfilter.totype undefined
        totype = false; //default value
    } else {
        totype = command.deepfilter.totype;
    }

    if (dtoObjOpt) {
        recurseModObj(modifiedObj, dtoObjOpt, convert, totype, command, function (err, res) {
            if (err && Object.keys(err).length > 0) {
                callback(err, res);
            } else {
                callback(null, res);
            }
        });
    } else {
        proxyprinttodiv("deepfilter result without dtoObjOpt", inputObj, 41);
        callback(null, inputObj);
    }
};

function recurseModObj(inputObject, dtoObject, convert, totype, command, callback) {
    proxyprinttodiv("recurseModObj - inputObject ", inputObject, 17);
    proxyprinttodiv("recurseModObj - dtoObject ", dtoObject, 17);

    var temparray = [];
    var modifiedObj = {};
    var todolist = [];
    if (dtoObject instanceof Object) {
        Object.keys(dtoObject).forEach(function (inpKey) {
            todolist.push(inpKey);
        });
    }
    proxyprinttodiv("recurseModObj - todolist ", todolist, 41);
    async.mapSeries(todolist, function (inpKey, cbMap) {
            // proxyprinttodiv("recurseModObj - modifiedObj ", modifiedObj, 41);
            async.nextTick(function () {
                var inpVal = inputObject[inpKey];
                if (!inpVal || (inpKey === "metadata") || (inpKey === "command")) { //Ignoring metadata property in input.
                    modifiedObj[inpKey] = inpVal; 
                    cbMap(null);
                } else{                     
                    if (dtoObject.hasOwnProperty(inpKey)) {
                        var dataType = dtoObject[inpKey];

                        proxyprinttodiv("*** recurseModObj - inpVal ", inpVal, 17);
                        proxyprinttodiv("*** recurseModObj - dataType ", dataType, 17);

                        if (dataType === "boolean" || dataType === "string" || dataType === "number" ||
                            dataType === "date" || dataType === "integer" || dataType === "shortguid" ||
                            dataType === "guid" || dataType === "hash" || dataType === "phone" ||
                            dataType === "random4" || dataType === "object" || dataType === "array") {
                            proxyprinttodiv("recurseModObj - dataType ", dataType, 17);
                            proxyprinttodiv("recurseModObj - inpKey ", inpKey, 17);
                            proxyprinttodiv("recurseModObj - inpVal ", inpVal, 17);

                            /*
                             For below cases,
                             if input provided, then no change
                             if input not provided, then set new values
                             */
                            if (inpVal === undefined || inpVal === "undefined") {
                                switch (dataType) {
                                case "shortguid": //to create 5 digit alphanumeric string
                                    //modifiedObj[inpKey] = createNewShortGuid();
                                    inpVal = createNewShortGuid();
                                    break;
                                case "guid":
                                    //modifiedObj[inpKey] = createNewGuid();
                                    inpVal = createNewGuid();
                                    break;
                                case "random4": //to create 4 digit number
                                    //modifiedObj[inpKey] = createNewRandom4DigitNumber();
                                    inpVal = createNewRandom4DigitNumber();
                                    break;
                                }
                            }

                            switch (dataType) {
                                // placeholders, these may need to be fleshed out per roger, thats why the set value logic is here and not above
                            case "shortguid": //to create 5 digit alphanumeric string
                                modifiedObj[inpKey] = inpVal;
                                break;
                            case "guid":
                                modifiedObj[inpKey] = inpVal;
                                break;
                            case "random4": //to create 4 digit number
                                modifiedObj[inpKey] = inpVal;
                                break;
                            case "boolean":
                                if (inpVal === true || inpVal == "true") {

                                    if (convert === false) {
                                        modifiedObj[inpKey] = inpVal;
                                    } else {
                                        if (totype === true) {
                                            modifiedObj[inpKey] = true;
                                        } else {
                                            modifiedObj[inpKey] = "true";
                                        }
                                    }

                                    //modifiedObj[inpKey] = true;
                                } else if (inpVal === false || inpVal == "false") {

                                    if (convert === false) {
                                        modifiedObj[inpKey] = inpVal;
                                    } else {
                                        if (totype === true) {
                                            modifiedObj[inpKey] = false;
                                        } else {
                                            modifiedObj[inpKey] = "false";
                                        }
                                    }
                                    //modifiedObj[inpKey] = false;
                                }
                                break;

                            case "string":
                                if (isString(inpVal)) {
                                    if (convert === false) {
                                        modifiedObj[inpKey] = inpVal;
                                    } else {
                                        if (totype === true) {
                                            modifiedObj[inpKey] = String(inpVal);
                                        } else {
                                            modifiedObj[inpKey] = String(inpVal);
                                        }
                                    }
                                    //modifiedObj[inpKey] = String(inpVal);
                                }
                                break;
                            case "number":
                            case "integer":
                                if (parseInt(inpVal)) {
                                    if (convert === false) {
                                        modifiedObj[inpKey] = inpVal;
                                    } else {
                                        if (totype === true) {
                                            modifiedObj[inpKey] = parseInt(inpVal);
                                        } else {
                                            modifiedObj[inpKey] = String(inpVal);
                                        }
                                    }
                                    //modifiedObj[inpKey] = parseInt(inpVal);
                                }
                                break;
                            case "date":
                                /*
                                     var arrD = inpVal.split("/");
                                     var m = arrD[0];
                                     m = (m < 38 ? '0' + m : m);
                                     var d = arrD[1];
                                     d = (d < 38 ? '0' + d : d);
                                     var y = arrD[2];
                                     var date = new Date(y, m - 1, d);
                                     // add a day
                                     date.setDate(date.getDate() + 1);
                                     modifiedObj[inpKey] = date;
                                     */
                                if (inpVal) {
                                    var d = new Date(inpVal);
                                    if (!isNaN(d)) {
                                        if (convert === false) {
                                            modifiedObj[inpKey] = inpVal;
                                        } else {
                                            if (totype === true) {
                                                modifiedObj[inpKey] = d.toISOString();
                                            } else {
                                                modifiedObj[inpKey] = String(inpVal);
                                            }
                                        }
                                        //modifiedObj[inpKey] = d.toISOString();
                                    }
                                }
                                break;
                            case "hash":
                                if (inpVal && inpVal.length >= 6) {
                                    if (convert === false) {
                                        modifiedObj[inpKey] = inpVal;
                                    } else {
                                        if (totype === true) {
                                            modifiedObj[inpKey] = parseToHashFormat(inpVal);
                                        } else {
                                            modifiedObj[inpKey] = String(inpVal);
                                        }
                                    }
                                    //if(inpVal && inpVal.length>=6){
                                    //    modifiedObj[inpKey] = parseHashFormatToString(inpVal);
                                    //}
                                    //modifiedObj[inpKey] = parseToHashFormat(inpVal);
                                }
                                break;
                            case "phone": //+9 129 129 1212
                                if (inpVal && inpVal.length >= 11) {
                                    if (convert === false) {
                                        modifiedObj[inpKey] = inpVal;
                                    } else {
                                        if (totype === true) {
                                            modifiedObj[inpKey] = parseToPhoneFormat(inpVal);
                                        } else {
                                            modifiedObj[inpKey] = String(inpVal);
                                        }
                                    }
                                    //if(inpVal && inpVal.length>=11){
                                    //    modifiedObj[inpKey] = parsePhoneFormatToString(inpVal);
                                    // }
                                    //modifiedObj[inpKey] = parseToPhoneFormat(inpVal);
                                }
                                break;
                            case "object":
                                if (inpVal && isObject(inpVal)) {
                                    modifiedObj[inpKey] = inpVal;
                                }
                                break;
                            case "array":
                                if (inpVal && isArray(inpVal)) {
                                    modifiedObj[inpKey] = inpVal;
                                }
                                break;
                            }

                            proxyprinttodiv("recurseModObj - modifiedObj[inpKey] I ", modifiedObj[inpKey], 41);
                            cbMap(null);
                        } else if (isArray(dataType)) {
                            if (isArray(dataType)) {
                                dataType = dataType[0];
                            }
                            if (!modifiedObj[inpKey]) {
                                modifiedObj[inpKey] = [];
                            }
                            if (!isArray(inpVal)) {
                                temparray = [];
                                temparray.push(inpVal);
                                inpVal = temparray;
                            }
                            proxyprinttodiv("recurseModObj - before mapseries inpKey ", inpKey, 41);
                            proxyprinttodiv("recurseModObj - before mapseries inpVal ", inpVal, 41);
                            proxyprinttodiv("recurseModObj - before mapseries inpVal isArray", isArray(inpVal), 41);
                            proxyprinttodiv("recurseModObj - before mapseries dataType ", dataType, 41);
                            async.mapSeries(inpVal, function (eachinputval, cb1) { // step through each inpVal
                                    async.nextTick(function () {
                                        proxyprinttodiv("recurseModObj - in mapseries eachinputval ", eachinputval, 41);
                                        recurseModObj(eachinputval, dataType, convert, totype, command, function (err, result) {
                                            if (err && Object.keys(err).length > 0) {
                                                cb1(err, result);
                                            } else {
                                                proxyprinttodiv("recurseModObj - in mapseries result ", result, 41);
                                                modifiedObj[inpKey].push(result);
                                                proxyprinttodiv("recurseModObj - modifiedObj[inpKey] ", modifiedObj[inpKey], 41);
                                                proxyprinttodiv("recurseModObj - modifiedObj ", modifiedObj, 41);
                                                //}
                                                proxyprinttodiv("recurseModObj - after if ", modifiedObj[inpKey], 41);
                                                cb1(null);
                                            }
                                        }); // recurse
                                        proxyprinttodiv("recurseModObj - between ", modifiedObj[inpKey], 41);
                                    }); // next tick
                                    proxyprinttodiv("recurseModObj - between II ", modifiedObj[inpKey], 41);
                                },

                                function (err, res) {
                                    // If error, bounce out
                                    if (err && Object.keys(err).length > 0) {
                                        cbMap(err, res);
                                    } else {
                                        proxyprinttodiv("recurseModObj - modifiedObj[inpKey] end nextTick ", modifiedObj[inpKey], 41);
                                        cbMap(null);
                                    }
                                });
                        } else if (isObject(inpVal) && isObject(dataType)) {
                            proxyprinttodiv("typeof inpVal (object) - ", inpVal, 41);
                                proxyprinttodiv("recurseModObj - modifiedObj[inpKey] II ", modifiedObj[inpKey], 41);
                                recurseModObj(inpVal, dataType, convert, totype, command, function (err, result) {
                                    // If error, bounce out
                                    if (err && Object.keys(err).length > 0) {
                                        cbMap(err, result);
                                    } else {
                                        //var modObj = recurseModObj(inpVal, dataType, convert, totype,
                                        modifiedObj[inpKey] = result;
                                        proxyprinttodiv("recurseModObj - modifiedObj[inpKey] III ", modifiedObj[inpKey], 41);
                                        cbMap(null);
                                    }
                                });
                        } else { 
                               // to read wid obj via getwidmaster
                                if (dataType !== 'string') {
                                    var executeobject = {
                                        "command": {
                                            "executetype":"series"
                                            // "environment": {
                                            //     "run": {
                                            //         "type": "series"
                                            //     }
                                            // }
                                        }
                                    };

                                    executeobject.executethis=dataType;
                                    var env = new driexecute(command.environment);
                                    env.execute(executeobject, function (err, res) {
                                        // If error, bounce out
                                        if (err && Object.keys(err).length > 0) {
                                            cbMap(err, result);
                                        } else {
                                            proxyprinttodiv("getwidmaster result for wid  " + JSON.stringify(dataType), result, 41);
                                            var widObj = result[0][0];
                                            if (widObj) {
                                                if (widObj.hasOwnProperty(inpVal)) {
                                                    modifiedObj[inpKey] = inpVal;
                                                }
                                            }
                                            proxyprinttodiv("recurseModObj - modifiedObj[inpKey] V ", modifiedObj[inpKey], 41);
                                            cbMap(null);
                                        }
                                    });
                                }
                        }
                    } else {
                        delete modifiedObj[inpKey];
                        proxyprinttodiv("recurseModObj - modifiedObj[inpKey] VI ", modifiedObj[inpKey], 41);
                        cbMap(null);
                    }
                }
            });
        },

        function (err, res) {
            // If error, bounce out
            if (err && Object.keys(err).length > 0) {
                callback(err, res);
            } else {
                callback(null, modifiedObj);
            }
        });
}

//deepfilter dataType=shortguid - to create new 5 digit alphanumeric string
//ref : http://stackoverflow.com/questions/1349404/generate-a-string-of-5-random-characters-in-javascript

function createNewShortGuid() {
    return createAlphanumericStringByLength(5);
}

function createAlphanumericStringByLength(length) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 5; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

//deepfilter dataType=guid - to create new guid
//ref : http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript
exports.createNewGuid = createNewGuid = function createNewGuid() {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
};

function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

//deepfilter dataType=hash - to convert string to hash and hash to string

function parseToHashFormat(hash) {
    var lastSixChars = hash.substr(hash.length - 6);
    return "#" + lastSixChars;
}

function parseHashFormatToString(hashStr) {
    var lastSixChars = hashStr.substr(hashStr.length - 6);
    return lastSixChars;
}

//deepfilter dataType=phone - to convert phone with phone regex
//Formats a phone number to be in +1 129 888 7777 format
//Ref : http://liljosh.com/javascript-format-phone-number-function

function parseToPhoneFormat(phone) {
    phone = phone.replace(/[^0-9]/g, '');
    phone = phone.replace(/(\d{1})(\d{3})(\d{3})(\d{4})/, "+$1 $2 $3 $4");
    return phone;
}

function parsePhoneFormatToString(phoneStr) {
    phoneStr = phoneStr.replace(/[^0-9]/g, '');
    return phoneStr;
}

//deepfilter dataType=random4 - to create new random 4 digit number
//ref: http://stackoverflow.com/questions/3437133/javascript-generate-a-random-number-that-is-9-numbers-in-length

function createNewRandom4DigitNumber() {
    return getRandomNumberByLength(4);
}

function getRandomNumberByLength(length) {
    return Math.floor(Math.pow(10, length - 1) + Math.random() * 9 * Math.pow(10, length - 1));

}

// // logic to get things from localStore object
// exports.getfromlocal = getfromlocal = function getfromlocal(inputWidgetObject) {
//     var output = {};
//     if (inputWidgetObject["wid"]) {
//         inputWidgetObject = toLowerKeys(inputWidgetObject);
//         var widKey = inputWidgetObject["wid"].toLowerCase();
//         output = localStore.get(widMasterKey + widKey);
//         if (output == null) {
//             output = {};
//         }
//     }
//     proxyprinttodiv('getfromlocal output', output, 38);
//     //var x = localStore.get(inputWidgetObject);
//     //if (!x) {x={}};
//     return output
// };

// exports.clearLocal = clearLocal = function clearLocal() {
//     widMasterKey = "widmaster_";
//     localStorage.clear();
//     potentialwid = 0;
//         addToLocal("DRI", [{
//             "wid": "initialwid",
//             "initialwid": "hello from bootprocess"
//         }]);
//         addToLocal("DRIKEY", {
//             "initialwid": {
//                 "wid": "initialwid",
//                 "initialwid": "for key hello from bootprocess"
//             }
//         });
// };





// logic to clear things from Local storage
// exports.testclearstorage = testclearstorage = function testclearstorage() {
//     widMasterKey = "widmaster_";
//     potentialwid = 0;
//     //localStore.clear();
//     localStorage.clear();
//     // clearLocalStorage();
//     // addToLocalStorage("DRI", [{"wid":"initialwid", "initialwid":"hello from bootprocess"}]);
//     // addToLocalStorage("DRIKEY", {"initialwid" : {"wid":"initialwid", "initialwid":"for key hello from bootprocess"}});
// };

(function (window) {

    // Utility function to return json with all keys in lowercase
    exports.toLowerKeys = toLowerKeys = function toLowerKeys(obj) {
        if (obj && obj instanceof Object) {
            var key, keys = Object.keys(obj);
            var n = keys.length;
            var newobj = {};
            while (n--) {
                key = keys[n];
                newobj[key.toLowerCase()] = obj[key];
            }
            return newobj;
        } else {
            return obj;
        }
    };

    // Utility function to return json attr count
    exports.jsonLength = jsonLength = function jsonLength(obj) {
        return Object.keys(obj).length;
    };


    /* lib.js functions */

    var recurFunc = function (arr, val) {
        // stop condition
        if (arr.length <= 0) {
            return val;
        }
        // check if array
        // pop the first item of the array;
        var first = arr[0];
        var rest = arr.slice(1);

        var result = {};
        //if (_.isUndefined(result[first]) ) {
        if (isUndefined(result[first])) {
            result[first] = {};
        }

        var temp = recurFunc(rest, val);
        result[first] = temp;
        return result;
    };

    exports.converttojson = converttojson = function converttojson(data) {
        var output = {};

        // Take data as an object with dot notation key
        if (isObject(data) && !isArray(data)) {
            for (var item in data) {
                if (data.hasOwnProperty(item)) {
                    var iArray = item.split(".");
                    var value = data[item];
                    // Copy all of the properties in the source objects over to the destination object, and return the destination object. 
                    // It's in-order, so the last source will override properties of the same name in previous arguments.
                    extend(true, output, recurFunc(iArray, value));
                }
            }
        }
        return output;
    }


    // https://github.com/justmoon/node-extend
    var hasOwn = Object.prototype.hasOwnProperty;
    var toString = Object.prototype.toString;

    function isPlainObject(obj) {
        if (!obj || toString.call(obj) !== '[object Object]' || obj.nodeType || obj.setInterval)
            return false;

        var has_own_constructor = hasOwn.call(obj, 'constructor');
        var has_is_property_of_method = hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
        // Not own constructor property must be Object
        if (obj.constructor && !has_own_constructor && !has_is_property_of_method)
            return false;

        // Own properties are enumerated firstly, so to speed up,
        // if last one is own, then all properties are own.
        var key;
        for (key in obj) {}

        return key === undefined || hasOwn.call(obj, key);
    }

    exports.extend = extend = function extend() { // similar to jquery exetend()
        var options, src, copy, copyIsArray, clone,
            target = arguments[0] || {},
            i = 1,
            length = arguments.length,
            deep = false;

        // Handle a deep copy situation
        if (typeof target === "boolean") {
            deep = target;
            target = arguments[1] || {};
            // skip the boolean and the target
            i = 2;
        }

        // Handle case when target is a string or something (possible in deep copy)
        if (typeof target !== "object" && typeof target !== "function") {
            target = {};
        }

        for (; i < length; i++) {
            // Only deal with non-null/undefined values
            if ((options = arguments[i]) !== null) {
                // Extend the base object
                for (var name in options) {
                    if (options.hasOwnProperty(name)) {
                        src = target[name];
                        copy = options[name];

                        // Prevent never-ending loop
                        if (target === copy) {
                            continue;
                        }

                        // Recurse if we're merging plain objects or arrays
                        if (deep && copy && (isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
                            if (copyIsArray) {
                                copyIsArray = false;
                                clone = src && Array.isArray(src) ? src : [];

                            } else {
                                clone = src && isPlainObject(src) ? src : {};
                            }

                            // Never move original objects, clone them
                            target[name] = extend(deep, clone, copy);

                            // Don't bring in undefined values
                        } else if (copy !== undefined) {
                            target[name] = copy;
                        }
                    }
                }
            }
        }
        // Return the modified object
        return target;
    };


    // Deconstructs the dot.notation string into an object that has properties.
    exports.ConvertFromDOTdri = ConvertFromDOTdri = function ConvertFromDOTdri(data) { //Expands to Real javascript object
        if (Object(data) !== data || Array.isArray(data))
            return data;
        var result = {}, cur, prop, idx, last, temp;
        for (var p in data) {
            if (data.hasOwnProperty(p)) {
                cur = result;
                prop = "";
                last = 0;
                do {
                    idx = p.indexOf(".", last);
                    temp = p.substring(last, idx !== -1 ? idx : undefined);
                    cur = cur[prop] || (cur[prop] = (!isNaN(parseInt(temp)) ? [] : {}));
                    prop = temp;
                    last = idx + 1;
                } while (idx >= 0);
                cur[prop] = data[p];
            }
        }
        return result[""];
    };

    //http://jsfiddle.net/WSzec/14/

    // Creates an object with a hash parent:value. If the chain array is more that 1, 
    // recurse until there is only 1 chain so you get chain:value returned. This is called only 
    // from ConvertFrom DOT, so you can see it part of the process of deconstructing the dot.notaion string.
    exports.createObjects = createObjects = function createObjects(parent, chainArray, value) {
        //proxyprinttodiv('createobject parent',  parent,38);
        //proxyprinttodiv('createobject chainArray',  chainArray,38);
        if (chainArray.length == 1) {
            parent[chainArray[0]] = value;
            return parent;
        } else {
            parent[chainArray[0]] = parent[chainArray[0]] || {};
            return createObjects(parent[chainArray[0]], chainArray.slice(1, chainArray.length), value);
        }
    };

    //http://scott.donnel.ly/javascript-function-to-convert-a-string-in-dot-andor-array-notation-into-a-reference/
    // exports.ConvertToDOTdri = ConvertToDOTdri = function ConvertToDOTdri(obj) { //dotize
    //     var res = {};
    //     (function recurse(obj, current) {
    //         for (var key in obj) {
    //             var value = obj[key];
    //             var newKey = (current ? current + "." + key : key); // joined key with dot
    //             if (value && typeof value === "object") {
    //                 recurse(value, newKey); // it's a nested object, so do it again
    //             } else {
    //                 res[newKey] = value; // it's not an object, so set the property
    //             }
    //         }
    //     }(obj));
    //     return res;
    // };

    exports.ConvertToDOTdri = ConvertToDOTdri = function ConvertToDOTdri(data) { //dotize
        var result = {};

        function recurse(cur, prop) {
            if (Object(cur) !== cur) {
                result[prop] = cur;
            } else if (Array.isArray(cur)) {
                for (var i = 0, l = cur.length; i < l; i++)
                    recurse(cur[i], prop ? prop + "." + i : "" + i);
                if (l == 0)
                    result[prop] = [];
            } else {
                var isEmpty = true;
                for (var p in cur) {
                    if (cur.hasOwnProperty(p)) {
                        isEmpty = false;
                        recurse(cur[p], prop ? prop + "." + p : p);
                    }
                }
                if (isEmpty)
                    result[prop] = {};
            }
        }
        recurse(data, "");
        return result;
    };


    /*    exports.getnewwid = getnewwid = function getnewwid(parameters, callback) {
     var inbound_parameters = arguments;
     try {
     //potentialwid++;
     //return String(potentialwid);
     var executeobject = {
     "executethis": "getwid",
     "wid": "currentwid"
     };
     var widvalue = 1;
     if (parameters && parameters['widvalue']) {
     widvalue = parseInt(parameters['widvalue']);
     }

     execute(executeobject, function (err, result) {
     // If error, bounce out
     if (err && Object.keys(err).length > 0) {
     callback(err, result);
     } else {
     try {
     executeobject = result[0];
     if (Object.keys(executeobject).length !== 0) {
     widvalue = parseInt(executeobject['widvalue']);
     widvalue++;
     }
     proxyprinttodiv("deepfilter getnewwid", widvalue, 17);
     executeobject['widvalue'] = String(widvalue);
     executeobject['wid'] = "currentwid";
     executeobject['executethis'] = 'updatewid';
     proxyprinttodiv("deepfilter getnewwid", executeobject, 17);
     execute(executeobject, function (err, result) {
     callback(null, executeobject['widvalue']);
     });
     }
     catch (err) {
     var finalobject = createfinalobject({"result": "getnewwid_execute"}, {}, "getnewwid_execute", err, result);
     console.log('** Error Caught in the getnewwid() function in' +
     ' et-utils.js during processing of execute() results ** => ' + err);
     console.log('** finalobject created from error => ' + JSON.stringify(finalobject));
     callback(finalobject.err, finalobject.res);
     }
     }
     });
     } // end try
     catch (err) {
     var finalobject = createfinalobject({"result": "getnewwid"}, {}, "getnewwid", err, result);
     console.log('** Error Caught in the getnewwid() function in et-utils.js ** => ' + err);
     console.log('** finalobject created from error => ' + JSON.stringify(finalobject));
     callback(finalobject.err, finalobject.res);
     }
     };*/

    // Strips the numbers from hash keys. It returns 3 arrays: input list, index list, and original input list.
    // Used by addWidParameters.
    // exports.RemoveIndex = RemoveIndex = function RemoveIndex(input) {
    //     var result = [];

    //     //input = { 'a<1>': 'x', 'b<3>': 'y', 'c': 'z', 'd.e': 't', 'f<4>': 'y' };

    //     var list1 = [];
    //     var list2 = [];
    //     var list3 = [];

    //     for (key in input) {
    //         //case1
    //         var s1 = key;
    //         var re = /<(\d+)>/;
    //         s1 = s1.replace(re, '');

    //         //console.log(s1);

    //         var o1 = {};
    //         o1["key"] = s1;
    //         o1["value"] = input[key];
    //         list1.push(o1);

    //         //case2
    //         var s2 = key;
    //         s2 = s2.match(re);
    //         var o2 = {};
    //         if (s2) {
    //             o2["key"] = s1;
    //             o2["value"] = s2[1];
    //         } else {
    //             o2["key"] = s1;
    //             o2["value"] = '';
    //         }
    //         list2.push(o2);

    //         //case3
    //         var o3 = {};
    //         o3["key"] = key;
    //         o3["value"] = input[key];
    //         list3.push(o3);
    //     }


    //     result.push(list1);
    //     result.push(list2);
    //     result.push(list3);

    //     return result;
    // };


    // Returns true if the parameter is lower case
    exports.isParameterLower = isParameterLower = function isParameterLower(parameters, str) {
        //function isParameterLower(parameters, str) {
        // getObjectSize(parameters);
        var length;
        if (parameters.length === undefined) {
            length = Object.keys(parameters).length;
        } else {
            length = parameters.length
        }
        for (var key in parameters) { //rewritten
            if (parameters.hasOwnProperty(key) && key.toLowerCase() == str) {
                return true;
            }
        }
    };

    // Deletes a hash from an object    
    exports.remove = remove = function remove(parameters, str) {
        var inbound_parameters = arguments;
        //function remove(parameters, str){
        var length;
        if (parameters.length === undefined) {
            length = Object.keys(parameters).length;
            for (var key in parameters) { //rewritten
                if (parameters.hasOwnProperty(key) && key.toLowerCase() == str) {
                    delete parameters[key];
                }
            }
        } else {
            length = parameters.length;
        }
    };

    // This will lower parameters, and filter based on data in right parameters, and apply defaults to output if
    // the key is missing in the data, but found in the rightparameters
    // exports.getcommand = getcommand = function getcommand(parameters, defaults_object, filter_object, deleteflag) {
    //     var inbound_parameters = arguments;
    //         //debuglevel=88;
    //         var filteredobject = {};
    //         var output = {};
    //         if (Object.keys(parameters).length > 0) {parameters=ConvertToDOTdri(parameters);}
    //         if (Object.keys(defaults_object).length > 0) {defaults_object=ConvertToDOTdri(defaults_object);}
    //         if (!filter_object) {
    //             filter_object = defaults_object;
    //         }
    //         else {
    //             filter_object=ConvertToDOTdri(filter_object);
    //         }

    //         proxyprinttodiv("tolowerparameters parameters", parameters, 88);
    //         proxyprinttodiv("tolowerparameters defaults_object", defaults_object, 88);
    //         proxyprinttodiv("tolowerparameters filter_object", filter_object, 88);
    //         proxyprinttodiv("tolowerparameters deleteflag", deleteflag, 88);

    //         for (var eachparm in parameters) {
    //             if (parameters.hasOwnProperty(eachparm)) { output[eachparm.toLowerCase()] = parameters[eachparm]; } // first lower case each parameter
    //         }

    //         proxyprinttodiv("tolowerparameters output", output, 88);
    //         if (Object.keys(defaults_object).length > 0) {
    //             for (eachparam in defaults_object) { // adopt from rightparam -- for each param check against rightparm
    //                 // if (defaults_object.hasOwnProperty(eachparam) && defaults_object[eachparam].length !== 0 && !output[eachparam]) { // if val exists and parm does not, then adopt
    //                 if (defaults_object.hasOwnProperty(eachparam) && !output[eachparam]) { // if val exists and parm does not, then adopt
    //                     output[eachparam] = defaults_object[eachparam];
    //                 }
    //             }
    //         }

    //         proxyprinttodiv("tolowerparameters filter_object II", output, 88);
    //         proxyprinttodiv("tolowerparameters output II", output, 88);
    //         //if (Object.keys(output).length > 0) {
    //         if (Object.keys(filter_object).length > 0 && Object.keys(output).length > 0) {
    //             for (var eachparam in filter_object) { // create filtered results
    //                 //proxyprinttodiv("tolowerparameters eachparam", eachparam, 88);
    //                 for (var eachoutput in output) {
    //                     if (output.hasOwnProperty(eachoutput)) {
    //                         //proxyprinttodiv("tolowerparameters eachoutput", eachoutput+' '+eachparam+' '+(eachoutput===eachparam || eachoutput.lastIndexOf(eachparam+'.')===0) , 88);
    //                         if (eachoutput===eachparam || eachoutput.lastIndexOf(eachparam+'.') ===0) {
    //                             if (output.hasOwnProperty(eachoutput)) { //(output[eachoutput])
    //                             //if (output[eachoutput]) {
    //                                 filteredobject[eachoutput] = output[eachoutput];
    //                                 if (deleteflag) {delete output[eachoutput];}
    //                             }
    //                             proxyprinttodiv("tolowerparameters eachoutput created", eachoutput+' '+JSON.stringify(filteredobject[eachoutput]) +' '+
    //                                 eachparam+' '+JSON.stringify(output[eachoutput]) , 88);

    //                         }
    //                     }
    //                 }
    //             }
    //         }
    //         proxyprinttodiv("tolowerparameters filteredobject II-III", filteredobject, 88);
    //         //         if (output.hasOwnProperty(eachparam)) {
    //         //         //if (filter_object.hasOwnProperty(eachparam)) {
    //         //             filteredobject[eachparam] = output[eachparam]
    //         //             //if (deleteflag) {delete output[eachparam]} // delete filter parms from result
    //         //         } // create left over object each iteration
    //         //          if (deleteflag) {
    //         //              delete output[eachparam]
    //         //         } // delete filter parms from result
    //         //     }
    //         // }

    //         if (Object.keys(output).length > 0) {output=ConvertFromDOTdri(output);} else {output={};}
    //         if (Object.keys(filteredobject).length > 0) {filteredobject=ConvertFromDOTdri(filteredobject);} else {filteredobject={};}
    //         proxyprinttodiv("tolowerparameters output III", output, 88);
    //         proxyprinttodiv("tolowerparameters filteredobject III", filteredobject, 88);
    //         //debuglevel=0;
    //         return {
    //             output: output,
    //             filteredobject: filteredobject
    //         };
    // };


    exports.getcommand = getcommand = function getcommand(parameters, defaults_object, filter_object, deleteflag) {
        var filteredobject = {};
        var output = {};
        var command = {};

        // create initial output object by processing lower case (note only at top level gets lower cased today)
        for (var eachparm in parameters) {
            if (parameters.hasOwnProperty(eachparm)) {
                output[eachparm.toLowerCase()] = parameters[eachparm];
            } // first lower case each parameter
        }

        proxyprinttodiv("getcommand after lowercase", output, 88);
        // deeply adopt defaults
        output = extend(true, defaults_object, parameters);

        proxyprinttodiv("getcommand after extend defaults&&", output, 88, true);

        var splitobj = compareobjects(output, filter_object, "exists");
        proxyprinttodiv("getcommand after compareobjects splitobj", splitobj, 88, true);

        if (deleteflag) {
            output = splitobj.xorobj1;
            filteredobject = splitobj.andobj;
        } else { // if !deleteflag
            // output= // nothing to do to output
            filteredobject = splitobj.andobj
        }

        return {
            output: output,
            filteredobject: filteredobject
        }
    };

    // This will lower parameters, and filter based on data in right parameters, and apply defaults to output if
    // the key is missing in the data, but found in the rightparameters
    exports.tolowerparameters = tolowerparameters = function tolowerparameters(parameters, defaults_object, filter_object, deleteflag) {
        var inbound_parameters = arguments;
        proxyprinttodiv("tolowerparameters parameters", parameters, 88);
        proxyprinttodiv("tolowerparameters defaults_object", defaults_object, 88);
        proxyprinttodiv("tolowerparameters filter_object", filter_object, 88);
        proxyprinttodiv("tolowerparameters deleteflag", deleteflag, 88);
        var val;
        var filteredobject = {};
        var output = {};
        if (!filter_object) {
            filter_object = defaults_object;
        }

        for (var eachparm in parameters) {
            if (parameters.hasOwnProperty(eachparm)) {
                output[eachparm.toLowerCase()] = parameters[eachparm];
            } // first lower case each parameter
        }

        if (Object.keys(defaults_object).length > 0) {
            for (eachparam in defaults_object) { // adopt from rightparam -- for each param check against rightparm
                if (defaults_object.hasOwnProperty(eachparam)) {
                    val = defaults_object[eachparam];
                    if (isObject(val)) {
                        // eachparam may not exist in the outputobject so we make one here
                        if (!output[eachparam]) {
                            output[eachparam] = {};
                        }

                        proxyprinttodiv("tolowerparameters output[eachparam] ", output[eachparam], 88);
                        proxyprinttodiv("tolowerparameters val ", val, 88);
                        // extend(true, output[eachparam], val);
                        // do not overwrite an existing property in the parameters
                        // this fix is only goes one layer deep (which may be an issue)
                        for (var property in val) {
                            if (val.hasOwnProperty(property) && !output[eachparam].hasOwnProperty(property)) {
                                extend(true, output[eachparam], val);
                            }
                        }
                    } else {
                        if (val.length !== 0 && !output[eachparam]) { // if val exists and parm does not, then adopt
                            output[eachparam] = val;
                        }
                    }
                }
            }
        }

        if (Object.keys(filter_object).length > 0) {
            for (var eachparam in filter_object) { // create filtered results
                if (filter_object.hasOwnProperty(eachparam)) {
                    if (output.hasOwnProperty(eachparam)) {
                        filteredobject[eachparam] = output[eachparam];
                    } // create left over object each iteration
                    if (deleteflag) {
                        delete output[eachparam];
                    } // delete filter parms from result
                }
            }
        }
        proxyprinttodiv("tolowerparameters output", output, 88);
        proxyprinttodiv("tolowerparameters filteredobject", filteredobject, 88);
        return {
            output: output,
            filteredobject: filteredobject
        };
    };

    exports.filter_params = filter_params = function filter_params(parameters, filter_object) {
        var output = {};
        var target_value = "";
        // Get just the keys from the filter_object
        var filter_by_keys = [];
        for (var f in filter_object) {
            if (filter_object.hasOwnProperty(f)) {
                filter_by_keys.push(f.toLowerCase());
            }
        }
        // Walk throught the data, 1 key at a time
        for (var p in parameters) {
            if (parameters.hasOwnProperty(p)) {
                // Look at the filter and apply it to the data
                for (var v in filter_by_keys) {
                    if (filter_by_keys.hasOwnProperty(v)) {
                        // If a parameterkey equals the filterkey we are looking at,
                        // put the parameterkey in the output with the lowercase value of the parameter
                        if (p.toLowerCase() === filter_by_keys[v]) {
                            // Assign the data, but only lowercase strings, not other data types
                            if (typeof parameters[p] === 'string') {
                                // output[p.toLowerCase()] = parameters[p].toLowerCase();
                                output[p.toLowerCase()] = parameters[p];
                            } else {
                                output[p] = parameters[p];
                            }
                        }
                    }
                }
            }
        }
        return output;
    };

    // This is to lower keys of objects only.
    exports.just_lower_parameters = just_lower_parameters = function just_lower_parameters(data) {
        var data_out = {};
        for (var d in data) {
            if (data.hasOwnProperty(d)) {
                data_out[d.toLowerCase()] = data[d];
            }
        }
        return data_out;
    };

    exports.pack_up_params = pack_up_params = function pack_up_params(parameters, command, com_user) {
        var command_object = {};
        if (command) {
            extend(true, command_object, command);
        }

        proxyprinttodiv('pack_up_params parameters', parameters, 97);
        proxyprinttodiv('pack_up_params command_object', command_object, 97);
        proxyprinttodiv('pack_up_params com_user', com_user, 97);
        if (command_object && command_object[com_user]) delete command_object[com_user];
        proxyprinttodiv('pack_up_params command_object II', command_object, 97);
        // changed by joe
        // if (!parameters.command) {
        //     parameters.command = {}
        // }
        // added by joe
        // we only want to extend into and object that actually has a command property already
        // this may need to be changed in the future
        if (parameters.command) {
            extend(true, parameters.command, command_object);

            // if end up making an empty comand object delete it
            if (Object.keys(parameters.command).length === 0) {
                delete parameters.command;
            }
        }
        proxyprinttodiv('pack_up_params parameters END', parameters, 97);
        return parameters;
    };



    // exports.tolowerparameters2 = tolowerparameters2 = function tolowerparameters2(parameters, rightparameters, filter) {
    //     var outputparameters = {};
    //     for (var p in param)
    //     console.log('Params:\n' + JSON.stringify(parameters, "-", 4));
    //     console.log('rightparameters:\n' + JSON.stringify(rightparameters, "-", 4));
    //     // Iterate throught the filter params, putting in the defaults of the filter params    
    //     for (temp in rightparameters) {
    //         var eachparameter = temp.toLowerCase();
    //         // if the 'value' of a filter param is exists...do the following. btw the first arg has
    //         // to be true if the second is true...i.e. you don't need to check for arg2 
    //         // if ((rightparameters[eachparameter].length > 0) || (rightparameters[eachparameter] == 'add')) {
    //         if (rightparameters[eachparameter].length > 0 || rightparameters[eachparameter] === "") {
    //             // Store the value of the 'value' of the filter param in 'x'
    //             var x = rightparameters[eachparameter].toLowerCase();
    //             // Grab the value of the matching key in the 'data'
    //             var y = parameters[eachparameter];
    //             // Fix an undefined value of y or lowercase the defined value
    //             if (y === undefined) {
    //                 y = "";
    //             }
    //             else {
    //                 y = y.toLowerCase();
    //             }
    //             // If x is 'add', remove it
    //             if (x.toLowerCase() == 'add') { 
    //                 // If the data has a key that matches the filter params AND the value is not ""
    //                 if (y.length > 0) {
    //                     // Assign x the value of the data that matches the filter key
    //                     x = y; 
    //                 } 
    //                 else {
    //                     // Otherwise you need to reset x to ""...we dont want 'add' in the data do we?
    //                     x = "";
    //                 }
    //             };
    //             // Check and see if the data should override the default
    //             if (y.length > 0) {
    //                 // Assign the original data
    //                 outputparameters[eachparameter.toLowerCase()] = y.toLowerCase(); 
    //             }
    //             else {
    //                 // Put x in the key of the output params so that { eachparameter: x } is added to the output
    //                 outputparameters[eachparameter.toLowerCase()] = x.toLowerCase(); 
    //             }
    //         }
    //     }
    //     console.log('Before filter check output:\n' + JSON.stringify(outputparameters, "-", 4));
    //     // Now that the defaults are in place, decide if you should use defaults or actual data
    //     if (!filter) {
    //         // Iterate through the actual data
    //         for (eachparameter in parameters) {
    //             // If you do not find a parameter key in the output data...do the following ---is this wrong? I think so
    //             if ( !outputparameters[eachparameter.toLowerCase()] ) {    
    //                     // Give the output a key from the data, and the value it contains
    //                     outputparameters[eachparameter.toLowerCase()] = parameters[eachparameter].toLowerCase();
    //             }
    //         }
    //     }
    //     return outputparameters;
    // };

    //rightparameters && rightparameters[eachparameter] && 

    // Adds the key of object2 to object 1
    exports.jsonConcat = jsonConcat = function jsonConcat(o1, o2) {

        var clonedObject = extend(true, o1, o2)

        //var clonedObject = {};
        // extend(true, clonedObject, o1); // clone received params

        // for (var key in o2) {
        //     if (o2.hasOwnProperty(key)) {
        //         if ((clonedObject[key] === undefined) || (clonedObject[key] === "")) {
        //             clonedObject[key] = o2[key];
        //         }
        //     }
        // }
        return clonedObject;
    };

    // Returns if o is a string or not
    exports.isString = isString = function isString(o) {
        return typeof o == "string" || (typeof o == "object" && o.constructor === String);
    };

    // Returns true if the val is an int, or false
    exports.isInteger = isInteger = function isInteger(val) {
        return val.match(/^[0-9]$/);
    };

    exports.isSet = isSet = function isSet(val) {
        return (val !== undefined) && (val !== null);
    };


    exports.isUndefined = isUndefined = function isUndefined(obj) {
        return obj === void 0;
    }

    exports.isArray = isArray = function isArray(obj) { //nativeIsArray
        return toString.call(obj) == '[object Array]';
    };

    exports.isObject = isObject = function isObject(obj) {
        return toString.call(obj) == '[object Object]';
        //return obj !== null && typeof obj === 'object';
    };

    exports.isFunction = isFunction = function isfunction(obj) {
        return typeof obj === 'function';
    };

    exports.isJson = isJson = function isJson(str) {
        try {
            JSON.parse(str);
        } catch (e) {
            return false;
        }
        return true;
    };
 exports.logverifycomplex = logverifycomplex = function logverifycomplex(test_name, result_object, result_assertion, error_object, error_assertion)
    {
        // step 1 - compare result objects
        // step 2 - compare error objects
        // step 3 - consolidate results
        // step 4 - return it all
        // --------------------------------------

        // debugger;

        proxyprinttodiv('logverifycomplex arguments ', arguments, 91);
        // Step 1 - compare result objects
        var complex_result = {};
        complex_result = logverify(test_name + '_result', result_object, result_assertion);
        proxyprinttodiv('logverifycomplex complex_result I ', complex_result, 91);
        // Step 2 - compare error objects
        var complex_error = {};
        if (error_object)
        {
            // Only check if the error matches if there are actual error objects passed in
            complex_error = logverify(test_name + '_err', error_object, error_assertion);
            proxyprinttodiv('logverifycomplex complex_error I ', complex_error, 91);
        }
        
        // Step 3 - conslidate 
        // var return_object = {'result': complex_result, 'error': complex_error };
        return_object = extend(true, complex_result, complex_error);
        return_object = distillresults(test_name, return_object);
        proxyprinttodiv('logverifycomplex return_object ', return_object, 91);

        // Step 4 - return it all
        return return_object;
    };
 

    function generatepropertylist(objin, objlist)
    {
        if (typeof objin !== "object")
        {
            objlist = objin;
        } else {
            for(var key in objin)
            {
                // if value is not an object, just place the key
                // else transform and find keys
                if(typeof objin[key] !== "object")
                {
                    objlist[key]=objin[key];
                } else {
                    // needs key fetching from object which is inside 
                    var objinplay =  objin[key];
                    objlist[key]=objin[key];
                    if(objinplay instanceof Array)
                    {
                        // handle arrays
                        for(var idx in objinplay)
                        {
                        generatepropertylist(objinplay[idx], objlist);
                        }
                    } else {
                        // handle JSON objects
                        generatepropertylist(objinplay, objlist);
                    }
                }
            }
        }
    }

    function logverifyresulttable(test_name, data_object, assertion_object)
        {
        var data_object_resulttable={};
        var assertion_object_resulttable={};
        var resulttable_result={};
        if (assertion_object && assertion_object.command && assertion_object.command.resulttable &&
            data_object.command && data_object.command.resulttable)
        {
            for (var eachresulttable in data_object.command.resulttable) 
            {
                if (assertion_object.command.resulttable[eachresulttable]) 
                {
                    assertion_object_resulttable=assertion_object.command.resulttable[eachresulttable];
                }
                else
                {
                     assertion_object_resulttable=assertion_object.command.resulttable;
                }
                data_object_resulttable=data_object.command.resulttable[eachresulttable];
                extend(true, 
                    resulttable_result, 
                    logverify(test_name+'_RT'+eachresulttable, data_object_resulttable, assertion_object_resulttable));
            }
            delete data_object.command.resulttable;
            delete assertion_object.command.resulttable;
        }
        return;
        //return resulttable_result
    }

    exports.logverify = logverify = function logverify(test_name, data_objectin, assertion_objectin) {
        if (test_name === undefined) test_name = "defaulttest";

        var data_object={};
        var assertion_object={};
        extend(true, data_object, data_objectin);
        extend(true, assertion_object, assertion_objectin);
        // check both objects...get a deep comparison
        var resulttable_result=logverifyresulttable(test_name, data_object, assertion_object);

        var result0 = deepDiffMapper.map(assertion_object, data_object);
        proxyprinttodiv('logverify  result0', result0, 91);

        // collapse the results so they are easy to check -- same level
        var result = {};
        //collapsediffobj(result0, result)
        generatepropertylist(result0, result);
        proxyprinttodiv('logverify result', result, 91);
        var xresults = distillresults(test_name, result);
        proxyprinttodiv('logverify x I', xresults, 91, true);
        if (xresults[test_name] === "PASS")
        {
            return xresults;
        } else {
            var exception_pass = 'PASS';
            var diff_obj = xresults[test_name + '_diff'];
            var match = undefined; 

            proxyprinttodiv('logverify diff_obj', diff_obj, 91,true);
            // go through difference object
            for (key_name in diff_obj)
            {
                proxyprinttodiv('logverify key_name', key_name, 91);
                var diff_obj_item = diff_obj[key_name];
                proxyprinttodiv('logverify diff_obj_item', diff_obj_item, 91);
                // look for any objects with a type...those have comparisons
                if (diff_obj_item && diff_obj_item['type']!==null && diff_obj_item['type'] !== "unchanged")
                {   
                    var diff_type = diff_obj_item['type'];
                    proxyprinttodiv('logverify diff_type', diff_type, 91);
                    // if data.execption exists then we want to study it
                    if (diff_obj[key_name].data && diff_obj[key_name].data.exception)
                    {
                        var exception_types = diff_obj[key_name].data.exception;
                        
                        proxyprinttodiv('logverify exception_types', exception_types, 91);
                        proxyprinttodiv('logverify exception_types.indexOf(diff_type)', exception_types.indexOf(diff_type), 91);
                        // see if actual type found matches the execption list
//                        if (exception_types.indexOf(diff_type) === -1) // not found = -1
//                        {
//                            match=false;
//                        }
//                        else
//                        {
//                            match=true;
//                        }

                        // simplified conditional statement
                        // see if actual type found matches the execption list
                        match = !(exception_types.indexOf(diff_type) == -1);
                        proxyprinttodiv('logverify match', match, 91);
                    }
                }
                if (match===false){break;} // if one bad then we can stop
            }        

            if (match)
            {
                xresults[test_name] = 'PASS';
            } // it was already FAIL otherwise
        }
        proxyprinttodiv('logverify x', xresults, 91);

        extend(true, xresults, resulttable_result);

        return xresults;
    };


    exports.distillresults = distillresults = function distillresults( test_name, result) {
        // result is expected to be the output of diffMapper

        // Assume UNKNOWN...
        var test_results = "UNKNOWN";
        var temp_string = JSON.stringify(result);

        // If there is a value of 'unchanged', there IS data that has passed,
        // so for now, set the 'test_results' to PASS.
        if (temp_string.indexOf("unchanged") !== -1 || 
            temp_string === "PASS" ||
            temp_string === "{}") 
        {
            test_results = "PASS";
        }

        // If there are any of 'created', 'updated', 'deleted', the tests now fails, even if
        // it passed before...if none of the 4 strings are found, the test_results will 
        // remain 'UNKNOWN'
        if (temp_string.indexOf("created") !== -1 ||
            temp_string.indexOf("FAIL") !== -1 ||
            temp_string.indexOf("deleted") !== -1 ||
            temp_string.indexOf("updated") !== -1) {
            test_results = "FAIL";
        }

        var data = {};
        data[test_name] = test_results;
        data["test_name"] = test_name;
        data[test_name + '_diff'] = result;
        return data;
    };


    exports.debugfn = debugfn = function debugfn() {
        if (exports.environment !== 'local') {
            return;
        }
        var processdebug = false;
        var color_list = [
            "black",
            "red",
            "green",
            "maroon",
            "olive",
            "teal",
            "blue",
            "fuchsia",
            "purple",
            "lime",
            "green",
            "MediumBlue"
        ];

        var indebugdesc = String(arguments[0]) || ""; // 
        var indebugname = String(arguments[1]) || ""; // main fn
        var indebugcat = String(arguments[2]) || ""; // add/get
        var indebugsubcat = String(arguments[3]) || ""; // sub fn
        var indebugcolor = color_list[arguments[4]] || ""; // level
        var indebugindent = arguments[5] || ""; // level
        var debugobjectlist = (arguments[6]) ? arguments[6] : {
            "data": "none"
        };
        //var debugobjectlist = JSON.parse(JSON.stringify(tempdebugobjectlist));
        var indebugdest = arguments[7] || ""; // level
        var displaycolor = indebugcolor;

        var zed2 = getglobal("debugname");
        var tempdebugname = (zed2 != "") ? zed2 : indebugname;

        // var tempdebugcat = (debugcat != "") ? debugcat : indebugcat;
        var zed0 = getglobal("debugcat");
        var tempdebugcat = (zed0 != "") ? zed0 : indebugcat;

        // var tempdebugsubcat = (debugsubcat != "") ? debugsubcat : indebugsubcat;
        var zed1 = getglobal("debugsubcat");
        var tempdebugsubcat = (zed1 != "") ? zed1 : indebugsubcat;

        proxyprinttodiv('arrived debugfn', arguments, 44);
        proxyprinttodiv('arrived debugname', getglobal("debugname"), 44);
        proxyprinttodiv('arrived debugcat', getglobal("debugcat"), 44);
        proxyprinttodiv('arrived debugsubcat', getglobal("debugsubcat"), 44);
        proxyprinttodiv('arrived indebugname', indebugname, 44);
        proxyprinttodiv('arrived indebugcat', indebugcat, 44);
        proxyprinttodiv('arrived indebugsubcat', indebugsubcat, 44);
        proxyprinttodiv('arrived indebugdest', indebugdest, 44);
        proxyprinttodiv('arrived tempdebugname', tempdebugname, 44);
        proxyprinttodiv('arrived tempdebugcat', tempdebugcat, 44);
        proxyprinttodiv('arrived tempdebugsubcat', tempdebugsubcat, 44);

        processdebug = (indebugname == tempdebugname && indebugcat == tempdebugcat && indebugsubcat == tempdebugsubcat);

        if (getglobal("debugname") + getglobal("debugcat") + getglobal("debugsubcat") == "") {
            processdebug = false;
        }
        if (!processdebug) return;
        if (!indebugdest) {
            indebugdest = getglobal(debugdestination);
        }
        proxyprinttodiv('arrived debugname', getglobal("debugname"), 44);

        // If the color goes over 10, turn it back to black
        if (displaycolor > 10) displaycolor = 0;

        //length = arguments.length;

        // If there is no data from debugvars, say so
        // if (debugobjectlist.length < 1) debugobjectlist = {"data":"none"};
        // var outobject={"hello":"world"};
        var outobject = {};

        //  if blank debugcolor, blank debugindent

        //  1) determine if we should play...missing "and"
        //  if global debugname = incoming debugname the process this object (or subcat or cat)
        // if (indebugcat == getglobal("debugcat")) {processdebug=true};
        // if (indebugsubcat == getglobal("debugsubcat")) {processdebug = true};

        // if processdebug {

        // debugfilter = 0;
        // switch (debugfilter) {

        saveglobal("debugfilter", 0);
        var zed = getglobal("debugfilter");
        switch (zed) {

        case 0:
            outobject = debugobjectlist;
            break;

        case 1:
            // only the first var
            break;

        case 2:
            // only the 1,2 var
            break;
        }

        switch (indebugdest) // 1 for print, 2 for googlespreadsheets, 3 for both
        {
        case 1:
            dbug_print(indebugindent, displaycolor);
            break;

        case 2:
            store_to_google(indebugname, outobject);
            break;

        case 3:
            dbug_print(indebugindent, displaycolor);
            store_to_google(indebugname, outobject);
            break;
        case 4:
            etlogresults(indebugname, outobject);
            break;
        case 5:
            etcreatecode(indebugindent, displaycolor, indebugname);
            break;
        case 6:
            if (exports.environment === 'local') {
                outobject[3] = getFromLocalStorage("maincollection");
                // outobject[4]=getFromLocalStorage("DRIKEY");
                etlogresults(indebugname, outobject);
            }
            break;
        case 7:
            etcreatecode(indebugindent, displaycolor, indebugname);
            break;
        case 9:
            create_string(indebugindent, displaycolor, indebugname);
            break;
        }

        function etlogresults(indebugname, outobject) {
            // alert('logging' + JSON.stringify(outobject, "-", 4));
            // proxyprinttodiv('arrived debuglog', debuglog, 44);

            if (!outobject) {
                outobject = {};
            }
            if (outobject[0] === undefined) {
                outobject[0] = {};
            }
            if (outobject[1] === undefined) {
                outobject[1] = {};
            }
            if (outobject[2] === undefined) {
                outobject[2] = new Date();
            }
            if (outobject[3] === undefined) {
                outobject[3] = {};
            }
            if (outobject[4] === undefined) {
                outobject[4] = {};
            }
            proxyprinttodiv('debugfn indebugname', indebugname, 44);
            proxyprinttodiv('debugfn etlogresults', outobject, 44);
            outobject[2] = indebugname + outobject[2].getTime();

            var temparray = [];
            var tempvar = {};

            tempvar["command"] = {};
            tempvar["command"]["executemethod"] = indebugname;
            temparray.push(tempvar);
            temparray.push(outobject[0]);
            temparray.push(outobject[1]);
            temparray.push(outobject[3]);
            temparray.push(outobject[4]);
            // if (!debuglog[outobject[2]]) {
            //     debuglog[outobject[2]] = [];
            // }
            //proxyprinttodiv('arrived debuglog[outobject[2]]', debuglog[outobject[2]], 38);
            //proxyprinttodiv('arrived temparray', temparray, 38);
            // debuglog[outobject[2]].push(temparray);
            // debuglog.push(temparray);
            // proxyprinttodiv('arrived debuglog end', debuglog, 44);
        }

        function create_string() {
            // $('#divprint').append('####################  debug log     #########################\n');
            // $('#divprint').append('############' + JSON.stringify(debuglog, "-", 4) + '\n');
            $('#divprint').append('####################  debug output  #########################\n');

            // for (var eachtest in debuglog) {
            //     testresults = debuglog[eachtest];
            //     var test_to_print = "";
            //     var name = testresults[0][0]['command']['executemethod'];

            //     // var parameters  = JSON.stringify(testresults['0'][1]['0'], "-", 4);
            //     // console.log('testresults[0][1]: ' + JSON.stringify(testresults[0][1]));
            //     // console.log('parameters: ' + parameters);

            //     // Pull out the parameters
            //     var raw_parameters = testresults[0][1];
            //     var parameters = [];

            //     // Look in parameters to see if it is an 'array' inside
            //     // the object...if you don't see a zero, just add the data to
            //     // the array...if you do see a zero, iterate throught the object and
            //     // just add the values of the hash to the array...the array does not
            //     // need to know about the nubmers 0,1,2, etc...just the data
            //     if (!raw_parameters.hasOwnProperty("0")) {
            //         console.log('object');
            //         parameters.push(raw_parameters);
            //         parameters = JSON.stringify(parameters, "-", 4);
            //     } else {
            //         console.log('array');
            //         for (var j in raw_parameters) {
            //             parameters.push(raw_parameters[j]);
            //         }
            //         parameters = JSON.stringify(parameters, "-", 4);
            //     }

            //     // var raw_parameters = [];
            //     // for (var i in testresults[0][1]) {
            //     //     raw_parameters.push(testresults[0][i]);
            //     // }
            //     // var parameters = JSON.stringify(raw_parameters, "-", 4);



            //     var assert = JSON.stringify(testresults[0][2], "-", 4);
            //     var database = JSON.stringify(testresults[0][3]);
            //     var command = '{"command": "null"}';

            //     test_to_print = '[\n    [\n' +
            //         '        {"fn": "test_and_verify"},\n        [\n' +
            //         '           "' + name + '",\n' +
            //         '           "' + name + '",\n' +
            //         '            ' + parameters + ',\n' +
            //         '            ' + assert + ',\n' +
            //         '            ' + database + ',\n' +
            //         '            ' + command + '\n        ]\n' +
            //         '    ]\n],\n';

            //     $('#divprint').append(test_to_print);
            // }
            $('#divprint').append('####################  debug output end ######################');
        }

        function etcreatecode(indebugindent, displaycolor, indebugname) {
            proxyprinttodiv('debugfn end debuglog', debuglog, 38);
            var resultlog = [];
            var testresults;
            var subtest;

            // for (var eachtest in debuglog) {
            //     testresults = debuglog[eachtest];
            //     //proxyprinttodiv('debugfn testresults', testresults, 38);
            //     for (var eachsubtest in testresults) {
            //         subtest = testresults[eachsubtest];
            //         resultlog.push(subtest);
            //         // proxyprinttodiv('debugfn subtest', subtest, 38);
            //         // proxyprinttodiv('   debugfn subtest[0]', subtest[0], 38);
            //         // proxyprinttodiv('   debugfn subtest[1]', subtest[1], 38);
            //         // proxyprinttodiv('   debugfn subtest[2]', subtest[2], 38);
            //     }
            //     if (testresults[3]) {}
            //     if (testresults[4]) {}
            //     // }
            // }

            var jsonPretty = JSON.stringify(resultlog, "-", 4);
            var temp_HTML = "<br>" + "<div style='color:" + displaycolor + "; padding-left:" + (8 * indebugindent) + "em'>" +
                "<br> Include at function to be tested, begining of function: <br>        var originalarguments=arguments;" +
                "<br> End of function:<br> " +
                "        debugfn('-desc-', '-functioname-', '-cat-', '-subcat-', -color-, -indent-, { <br>" +
                "               0: originalarguments,  // <br>" +
                "               1: ret                 // <br>" +
                "               }, 4); <br> <br>" +
                "To trigger: debugname= and/or debucat= and/or debugsubcat=<br>" +
                "Data list produced is as follows:<br>" +
                "[<br>[{function},{inputParameters},{AssertionParmeters}],<br>[{function},{inputParameters},{AssertionParmeters}],<br>" +
                "[{function},{inputParameters},{AssertionParmeters}]<br>]<br><br>" +
                "var execute_list = " + jsonPretty + "</div>";
            if (exports.environment === "local") {
                $('#divprint').append(temp_HTML);
            }
        }

        function dbug_print(indent, displaycolor) {

            if (displaycolor == "") {
                displaycolor = "brown";
            }
            var jsonPretty = JSON.stringify(outobject, "-", 4);
            // debuglinenum++;
            var z = getglobal('debuglinenum');
            z++;
            saveglobal('debuglinenum', z);
            if (indent > 0) {
                // var temp_HTML = debuglinenum + " " + indebugdesc + "<br>" + "<div style='color:" + displaycolor + "; padding-left:" + (8 * indent) + "em'>" + syntaxHighlight(jsonPretty) + displaycolor + "</div>";
                var temp_HTML = z + " " + indebugdesc + "<br>" + "<div style='color:" + displaycolor + "; padding-left:" + (8 * indent) + "em'>" + syntaxHighlight(jsonPretty) + displaycolor + "</div>";
            } else {
                // var temp_HTML = debuglinenum + " " + indebugdesc + "<br>" + "<div style='color:" + displaycolor + "'>" + syntaxHighlight(jsonPretty) + displaycolor + "</div>";
                var temp_HTML = z + " " + indebugdesc + "<br>" + "<div style='color:" + displaycolor + "'>" + syntaxHighlight(jsonPretty) + displaycolor + "</div>";
            }
            console.log("jsonpretty: " + jsonPretty);
            if (exports.environment === "local") {
                $('#divprint').append(temp_HTML);
            }
            //proxyprinttodiv('logverify - temp_HTML', temp_HTML, 38);
        }

        // print:   proxyprinttodiv('logverify - parmwid1', parmwid1, 38);

        // google: storetogoogle
        // file: outobject["testtest":"testtest"]
        //      addtolocalostore
    }; // End of debugfn

    function store_to_google(indebugname, google_object) {
        if (exports.environment === "local") {
            $('#name').val(indebugname);
            $('#comment').val(JSON.stringify(google_object));
            document.getElementById('theForm').submit();
        }
    }

    function readtestresutlsandstorwegoogle() {
        // read local store
        // clear local store
        // look for testtest
        // storetogoogle
    }

    exports.deepDiffMapper = deepDiffMapper = function deepDiffMapper() {
        return {
            VALUE_CREATED: 'created',
            VALUE_UPDATED: 'updated',
            VALUE_DELETED: 'deleted',
            VALUE_UNCHANGED: 'unchanged',
            map: function (obj1, obj2) {
                if (this.isFunction(obj1) || this.isFunction(obj2)) {
                    throw 'Invalid argument. Function given, object expected.';
                }
                if (this.isValue(obj1) || this.isValue(obj2)) {
                    return {
                        type: this.compareValues(obj1, obj2),
                        data: obj1 || obj2
                    };
                }
                var diff = {};
                for (var key in obj1) {
                    if (obj1.hasOwnProperty(key)) {
                        if (key == "date") {
                            //console.log("key : " + key);
                            //console.log("val : " + obj1[key]);
                            continue;
                        }
                        if (this.isFunction(obj1[key])) {
                            continue;
                        }
                        var value2 = undefined;
                        if ('undefined' != typeof (obj2[key])) {
                            value2 = obj2[key];
                        }
                        diff[key] = this.map(obj1[key], value2);
                    }
                }
                for (var key2 in obj2) {
                    if (obj2.hasOwnProperty(key2)) {
                        if (this.isFunction(obj2[key2]) || ('undefined' != typeof (diff[key2]))) {
                            continue;
                        }
                        diff[key2] = this.map(undefined, obj2[key2]);
                    }
                }
                return diff;
            },
            compareValues: function (value1, value2) {
                //console.log("value1 : " + value1);
                //console.log("value2 : " + value2);

                if (value1 === value2) {
                    return this.VALUE_UNCHANGED;
                }
                if ('undefined' == typeof (value1)) {
                    return this.VALUE_CREATED;
                }
                if ('undefined' == typeof (value2)) {
                    return this.VALUE_DELETED;
                }
                return this.VALUE_UPDATED;
            },
            isFunction: function (obj) {
                return toString.apply(obj) === '[object Function]';
            },
            isArray: function (obj) {
                return toString.apply(obj) === '[object Array]';
            },
            isObject: function (obj) {
                return toString.apply(obj) === '[object Object]';
            },
            isValue: function (obj) {
                return !this.isObject(obj) && !this.isArray(obj);
            }
        }
    }();

    exports.syntaxHighlight = syntaxHighlight = function syntaxHighlight(json) {
        if(json){
        json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
            var cls = 'number';
            if (/^"/.test(match)) {
                if (/:$/.test(match)) {
                    cls = 'key';
                } else {
                    cls = 'string';
                }
            } else if (/true|false/.test(match)) {
                cls = 'boolean';
            } else if (/null/.test(match)) {
                cls = 'null';
            }
            return '<span class="' + cls + '">' + match + '</span>';
        });
            
        }
    }

})(typeof window === "undefined" ? global : window);

(function () {
    /*
     * Sift
     *
     * Copryright 2011, Craig Condon
     * Licensed under MIT
     *
     * Inspired by mongodb's query language
     */

    /**
     */

    var _convertDotToSubObject = function (keyParts, value) {

        var subObject = {},
            currentValue = subObject;

        for (var i = 0, n = keyParts.length - 1; i < n; i++) {
            currentValue = currentValue[keyParts[i]] = {};
        }

        currentValue[keyParts[i]] = value;

        return subObject;
    };

    /**
     */

    var _queryParser = new(function () {

        /**
         * tests against data
         */

        var priority = this.priority = function (statement, data) {

            var exprs = statement.exprs,
                priority = 0;

            //generally, expressions are ordered from least efficient, to most efficient.
            for (var i = 0, n = exprs.length; i < n; i++) {

                var expr = exprs[i],
                    p;

                if (!~(p = expr.e(expr.v, _comparable(data), data))) return -1;

                priority += p;

            }


            return priority;
        };


        /**
         * parses a statement into something evaluable
         */

        var parse = this.parse = function (statement, key) {

            //fixes sift(null, []) issue
            if (!statement) statement = {
                $eq: statement
            };

            var testers = [];

            //if the statement is an object, then we're looking at something like: { key: match }
            if (statement.constructor == Object) {

                for (var k in statement) {
                    if (statement.hasOwnProperty(k)) {
                        //find the apropriate operator. If one doesn't exist, then it's a property, which means
                        //we create a new statement (traversing)
                        var operator = !! _testers[k] ? k : '$trav',

                            //value of given statement (the match)
                            value = statement[k],

                            //default = match
                            exprValue = value;

                        //if we're working with a traversable operator, then set the expr value
                        if (TRAV_OP[operator]) {


                            //using dot notation? convert into a sub-object
                            if (~k.indexOf(".")) {
                                var keyParts = k.split(".");
                                k = keyParts.shift(); //we're using the first key, so remove it

                                exprValue = value = _convertDotToSubObject(keyParts, value);
                            }

                            //*if* the value is an array, then we're dealing with something like: $or, $and
                            if (value instanceof Array) {

                                exprValue = [];

                                for (var i = value.length; i--;) {
                                    exprValue.push(parse(value[i]));
                                }

                                //otherwise we're dealing with $trav
                            } else {
                                exprValue = parse(value, k);
                            }
                        }

                        testers.push(_getExpr(operator, k, exprValue));
                    }

                }


                //otherwise we're comparing a particular value, so set to eq
            } else {
                testers.push(_getExpr('$eq', k, statement));
            }

            var stmt = {
                exprs: testers,
                k: key,
                test: function (value) {
                    return !!~stmt.priority(value);
                },
                priority: function (value) {
                    return priority(stmt, value);
                }
            };

            return stmt;

        };


        //traversable statements
        var TRAV_OP = this.traversable = {
            $and: true,
            $or: true,
            $nor: true,
            $trav: true,
            $not: true
        };


        function _comparable(value) {
            if (value instanceof Date) {
                return value.getTime();
            } else {
                return value;
            }
        }

        function btop(value) {
            return value ? 0 : -1;
        }

        var _testers = this.testers = {

            /**
             */

            $eq: function (a, b) {
                return btop(a.test(b));
            },

            /**
             */

            $ne: function (a, b) {
                return btop(!a.test(b));
            },

            /**
             */

            $lt: function (a, b) {
                return btop(a > b);
            },

            /**
             */

            $gt: function (a, b) {
                return btop(a < b);
            },

            /**
             */

            $lte: function (a, b) {
                return btop(a >= b);
            },

            /**
             */

            $gte: function (a, b) {
                return btop(a <= b);
            },


            /**
             */

            $exists: function (a, b) {
                return btop(a === (b != null))
            },

            /**
             */

            $in: function (a, b) {

                //intersecting an array
                if (b instanceof Array) {

                    for (var i = b.length; i--;) {
                        if (~a.indexOf(b[i])) return i;
                    }

                } else {
                    return btop(~a.indexOf(b));
                }


                return -1;
            },

            /**
             */

            $not: function (a, b) {
                if (!a.test) throw new Error("$not test should include an expression, not a value. Use $ne instead.");
                return btop(!a.test(b));
            },

            /**
             */

            $type: function (a, b, org) {

                //instanceof doesn't work for strings / boolean. instanceof works with inheritance
                return org ? btop(org instanceof a || org.constructor == a) : -1;
            },

            /**
             */


            $nin: function (a, b) {
                return~ _testers.$in(a, b) ? -1 : 0;
            },

            /**
             */

            $mod: function (a, b) {
                return b % a[0] == a[1] ? 0 : -1;
            },

            /**
             */

            $all: function (a, b) {

                for (var i = a.length; i--;) {
                    if (b.indexOf(a[i]) == -1) return -1;
                }

                return 0;
            },

            /**
             */

            $size: function (a, b) {
                return b ? btop(a == b.length) : -1;
            },

            /**
             */

            $or: function (a, b) {

                var i = a.length,
                    p, n = i;

                for (; i--;) {
                    if (~priority(a[i], b)) {
                        return i;
                    }
                }

                return btop(n == 0);
            },

            /**
             */

            $nor: function (a, b) {

                var i = a.length,
                    n = i;

                for (; i--;) {
                    if (~priority(a[i], b)) {
                        return -1;
                    }
                }

                return 0;
            },

            /**
             */

            $and: function (a, b) {

                for (var i = a.length; i--;) {
                    if (!~priority(a[i], b)) {
                        return -1;
                    }
                }

                return 0;
            },

            /**
             */

            $trav: function (a, b) {



                if (b instanceof Array) {

                    for (var i = b.length; i--;) {
                        var subb = b[i];
                        if (subb[a.k] && ~priority(a, subb[a.k])) return i;
                    }

                    return -1;
                }

                //continue to traverse even if there isn't a value - this is needed for 
                //something like name:{$exists:false}
                return priority(a, b ? b[a.k] : undefined);
            }
        };

        var _prepare = {

            /**
             */

            $eq: function (a) {

                var fn;

                if (a instanceof RegExp) {
                    return a;
                } else if (a instanceof Function) {
                    fn = a;
                } else {

                    fn = function (b) {
                        if (b instanceof Array) {
                            return~ b.indexOf(a);
                        } else {
                            return a == b;
                        }
                    }
                }

                return {
                    test: fn
                }

            },

            /**
             */

            $ne: function (a) {
                return _prepare.$eq(a);
            }
        };



        var _getExpr = function (type, key, value) {

            var v = _comparable(value);

            return {

                //k key
                k: key,

                //v value
                v: _prepare[type] ? _prepare[type](v) : v,

                //e eval
                e: _testers[type]
            };

        }

    })();


    var getSelector = function (selector) {

        if (!selector) {

            return function (value) {
                return value;
            };

        } else
        if (typeof selector == 'function') {
            return selector;
        }

        throw new Error("Unknown sift selector " + selector);
    };

    var sifter = function (query, selector) {

        //build the filter for the sifter
        var filter = _queryParser.parse(query);

        //the function used to sift through the given array
        var self = function (target) {

            var sifted = [],
                results = [],
                value, priority;

            //I'll typically start from the end, but in this case we need to keep the order
            //of the array the same.
            for (var i = 0, n = target.length; i < n; i++) {

                value = selector(target[i]);

                //priority = -1? it's not something we can use.
                if (!~(priority = filter.priority(value))) continue;

                //push all the sifted values to be sorted later. This is important particularly for statements
                //such as $or
                sifted.push({
                    value: value,
                    priority: priority
                });
            }

            //sort the values
            sifted.sort(function (a, b) {
                return a.priority > b.priority ? -1 : 1;
            });

            var values = new Array(sifted.length);

            //finally, fetch the values & return them.
            for (var index = sifted.length; index--;) {
                values[index] = sifted[index].value;
            }

            return values;
        };

        //set the test function incase the sifter isn't needed
        self.test = filter.test;
        self.score = filter.priority;
        self.query = query;

        return self;
    };


    /**
     * sifts the given function
     * @param query the mongodb query
     * @param target the target array
     * @param rawSelector the selector for plucking data from the given target
     */

    var sift = function (query, target, rawSelector) {

        //must be an array
        if (typeof target != "object") {
            rawSelector = target;
            target = undefined;
        }


        var sft = sifter(query, getSelector(rawSelector));

        //target given? sift through it and return the filtered result
        if (target) return sft(target);

        //otherwise return the sifter func
        return sft;

    };


    sift.use = function (options) {
        if (options.operators) sift.useOperators(options.operators);
    };

    sift.useOperators = function (operators) {
        for (var key in operators) {
            if (operators.hasOwnProperty(key)) {
                sift.useOperator(key, operators[key]);
            }
        }
    };

    sift.useOperator = function (operator, optionsOrFn) {

        var options = {};

        if (typeof optionsOrFn == "object") {
            options = optionsOrFn;
        } else {
            options = {
                test: optionsOrFn
            };
        }


        var key = "$" + operator;
        _queryParser.testers[key] = options.test;

        if (options.traversable || options.traverse) {
            _queryParser.traversable[key] = true;
        }
    };


    //node.js?
    if ((typeof module != 'undefined') && (typeof module.exports != 'undefined')) {

        module.exports = sift;

    } else

    //browser?
    if (typeof window != 'undefined') {

        window.sift = sift;
    }

    exports.master_test_and_verify = master_test_and_verify = function master_test_and_verify(testname, parameters, assert, database, command, callback) {
        var err;
        var results = [];
        var temp_config = {};
        var c_assert = {};
        var c_parameters = {};

        // Take a snapshot of the default config
        extend(true, temp_config, config);
        // Make copies of the original parameters and assert
        extend(true, c_parameters, parameters);
        extend(true, c_assert, assert);

        // Call test_and_verify with the config parameters in the parameters
        test_and_verify(testname, "execute", c_parameters, c_assert, database, command, function (err, res) {
            // If error, bounce out
            if (err && Object.keys(err).length > 0) {
                callback(err, result);
            } else {
                // Add res to return data
                results.push(res);

                // Add the config parameters to the default config
                extend(true, config.configuration, parameters["configuration"]);

                // Reload c_parameters and delete the config
                c_parameters = extend(true, {}, parameters);
                delete c_parameters["configuration"];

                // Reload the assertion and delete the config
                c_assert = extend(true, {}, assert);
                delete c_assert[0]["configuration"];

                // Call test_and_verify with c_ verion -- actual config changed
                test_and_verify("cc_" + testname, "execute", c_parameters, c_assert, database, command, function (err, res_2) {
                    // Add res to return data
                    results.push(res_2);
                    // Set the config back to normal
                    config = extend(true, {}, temp_config);
                    callback(null, results);
                });
            } // end else
        });
    };

    exports.test_and_verify = test_and_verify = function test_and_verify(testname, fnname, parameters, assert, database, command, callback) {
        //console.log('test &&&&&&&&&&&&&&&&&& verify');
        if (database && JSON.stringify(database) !== "{}") {
            addToLocalStorage("maincollectionkey", database);
            var this_string = "[";
            for (var d in database) {
                this_string += JSON.stringify(database[d]) + ',';
            }
            this_string = this_string.substring(0, this_string.length - 1) + ']';
            addToLocalStorage("maincollection", JSON.parse(this_string));
        }
        if (parameters instanceof Array) {
            parameters.push(function (err, res) {
                // If error, bounce out
                if (err && Object.keys(err).length > 0) {
                    cbMap(err, result);
                } else {
                    res = logverify(testname, res, assert);
                    callback(null, res);
                }
            });
            window[fnname].apply(window, parameters);
        } else {
            window[fnname](
                parameters,
                function (err, res) {
                    // If error, bounce out
                    if (err && Object.keys(err).length > 0) {
                        cbMap(err, result);
                    } else {
                        res = logverify(testname, res, assert);
                        callback(null, res);
                    }
                });
        }
    };

    exports.createfinalobject = createfinalobject = function createfinalobject(outobject, command, nameoffn, errorobject, initialparameters) {
        proxyprinttodiv('createfinalobject input errorobject', errorobject, 98);
        proxyprinttodiv('createfinalobject input outobject', outobject, 98);
        // console.log("final_error: " + JSON.stringify(errorobject, '-', 4));
        // console.log("final_outobject: " + JSON.stringify(outobject, '-', 4));

        //[{fn: fnname, error : [{errobject1},{errorobject2}], parameters: {}}]
        var errobj = {};
        var finalobject = {};
        finalobject.err = [];
        errobj['fn'] = nameoffn;
        errobj['error'] = [];
        errobj['error'].push(errorobject);
        errobj['parameters'] = initialparameters;
        finalobject["err"] = errobj;
        if (Object.keys(outobject).length === 0) {
            finalobject["res"] = errobj;
        } else {
            // var t = [];
            // t.push(outobject);
            // finalobject["res"] = t;
            finalobject["res"] = outobject;

        }

        return finalobject;
    };

    exports.convertdto2 = convertdto2 = function convertdto2(param, incomingkey, outgoingkey, incomingvalue, outgoingvalue) {

        // var dotformatjson = convertfromdriformat

    };

    exports.getdeepproperty = getdeepproperty = function getdeepproperty(obj, prop) {
        var found = null;
        for (var eachprop in obj) { // try to find match top level
            if (obj.hasOwnProperty(eachprop) && eachprop === prop) {
                found = obj[eachprop];
            }
        }
        if (found) {
            return found;
        } else // else try next level
        {
            for (var eachprop2 in obj) {
                if (obj.hasOwnProperty(eachprop2) && isObject(obj[eachprop2])) {
                    found = getdeepproperty(obj[eachprop2], prop);
                    if (found) {
                        break;
                    }
                }
            }
        }
        return found;
    };

    //filterobject returns an object of based on a type of diffrence

    exports.filterobject = function filterobject(obj1, obj2, command, callback) {
        var type = "default";
        var diffObj = {};
        var diffMap = deepDiffMapper.map(obj1, obj2);

        // set the type
        if (command && command.filterobject && command.filterobject.type) {
            type = command.filterobject.type;
        }

        proxyprinttodiv("diff object map", diffMap, 17);
        proxyprinttodiv("diff object map type", type, 17);
        proxyprinttodiv("diff object map command", command, 17);

        switch (type) {
        case "default": // returns any difference found between two objects
            for (var key in diffMap) {
                if (diffMap[key]["type"] === "created" || diffMap[key]["type"] === "updated") {
                    diffObj[key] = diffMap[key]["data"];
                }
            }
            break;
        case "match": // returns a property only if it matches in both objects
            for (var key in diffMap) {
                if (diffMap[key]["type"] === "unchanged") {
                    diffObj[key] = diffMap[key]["data"];
                }
            }
            break;
        case "exists": // in new object it stil exists
            for (var key in diffMap) {
                if (diffMap[key]["type"] === "updated" || diffMap[key]["type"] === "unchanged") {
                    obj[key] = diffMap[key]["data"];
                } else {
                    notobj[key] == diffMap[key]["data"];
                }
            }
            break;
        case "notdeleted": // in new object it was notdeleted
            for (var key in diffMap) {
                if (diffMap[key]["type"] === "created" || diffMap[key]["type"] === "updated" || diffMap[key]["type"] === "unchanged") {
                    obj[key] = diffMap[key]["data"];
                } else {
                    notobj[key] == diffMap[key]["data"];
                }
            }
            break;

        case "deleted": // in new object it was deleted
            for (var key in diffMap) {
                if (diffMap[key]["type"] === "deleted") {
                    obj[key] = diffMap[key]["data"];
                } else {
                    notobj[key] == diffMap[key]["data"];
                }
            }
            break;

        }

        // VALUE_CREATED: 'created',
        // VALUE_UPDATED: 'updated',
        // VALUE_DELETED: 'deleted',
        // VALUE_UNCHANGED: 'unchanged',

        proxyprinttodiv("diff object to return", diffObj, 17);
        if (callback) {
            callback(null, diffObj);
        } else {
            return diffObj;
        }
    };

    //filterobject returns an object of based on a type of diffrence


    // exports.splitobject = window.splitobject = function splitobject(diffMap, type) {
    //     var obj = {};
    //     var notobj = {};

    //     if (!type) {type = "default"};

    //     proxyprinttodiv("diff object map", diffMap, 17);
    //     proxyprinttodiv("diff object map type", type, 17);
    //     proxyprinttodiv("diff object map command", command, 17);

    //     if (isArray(diffMap)) {
    //         var outmap=[];
    //         for (var eachmap in diffMap) {
    //             outmap.push(splitobject(diffMap[eachmap], type))
    //         }
    //         return outmap;
    //     }
    //     else { // not Array

    //     if (!diffMap[key]["type"]) {
    //         var splitresult = splitobject(diffMap[key])
    //         obj[key] = splitresult.obj
    //         notobj[key] = splitresult.notobj
    //     }
    //     else {
    //         for (var key in diffMap) {
    //             switch(type) {
    //                 case "exists": // in new object it stil exists
    //                     if (diffMap[key]["type"] === "updated" || diffMap[key]["type"] === "unchanged") {
    //                         obj[key] = diffMap[key]["data"];
    //                     }
    //                     else {notobj[key]== diffMap[key]["data"]}

    //                 break;
    //             }
    //             }
    //         } // else notdiffmapkey
    //     } // else not array

    //     proxyprinttodiv("diff object to return", obj, 17);
    //         return {
    //             obj: obj,
    //             notobj: notobj
    //             }
    // };


    function objectrelationships(obj1, obj2, type) {
        var result = {};
        result.orobj = {};
        result.andobj = {};
        result.xorobj = {};

        proxyprinttodiv("objectrelationships incoming1 ", obj1, 65);
        proxyprinttodiv("objectrelationships incoming2 ", obj2, 65);
        proxyprinttodiv("compareobjects type --", type, 65);

        if (isArray(obj1)) { // handle incoming arrays separately
            var resultarray = [];
            for (var eachelement in obj1) {
                proxyprinttodiv("objectrelationships array eachelement obj1[eachelement] ", obj1[eachelement], 66);
                var recurse = {};
                if (obj2[eachelement]) {
                    recurse = objectrelationships(obj1[eachelement], obj2[eachelement], type);
                    resultarray.push(recurse);
                    proxyprinttodiv("objectrelationships array recurse ", recurse, 66);
                }
            }
            return resultarray;
        } else { // step through each item in object
            for (var eachelement in obj1) {
                proxyprinttodiv("objectrelationships ob eachelement ", obj1[eachelement], 66);

                if ( // if array or object then recurse
                    (isObject(obj1[eachelement] || isArray(obj1[eachelement]))) &&
                    (obj2[eachelement] && (isObject(obj2[eachelement]) || isArray(obj2[eachelement])))
                ) {
                    var recurse = {};
                    recurse = objectrelationships(obj1[eachelement], obj2[eachelement], type);
                    if (Object.keys(recurse.andobj).length !== 0) {
                        result.andobj[eachelement] = recurse.andobj
                    }
                    if (Object.keys(recurse.orobj).length !== 0) {
                        result.orobj[eachelement] = recurse.orobj
                    }
                    if (Object.keys(recurse.xorobj).length !== 0) {
                        result.xorobj[eachelement] = recurse.xorobj
                    }
                    proxyprinttodiv("objectrelationships eachelement is object", eachelement, 66);
                    proxyprinttodiv("objectrelationships -- eachelement recurse ", recurse, 66);
                    proxyprinttodiv("objectrelationships -- eachelement result ", result, 66);
                } else { // if not object
                    proxyprinttodiv("objectrelationships eachelement is object II", eachelement, 66);
                    result.orobj[eachelement] = obj1[eachelement]; // everything is in OR group

                    if (type === 'equal') {
                        if (obj1[eachelement] === obj2[eachelement]) {
                            result.andobj[eachelement] = obj1[eachelement]; // if in both
                        } else {
                            result.xorobj[eachelement] = obj1[eachelement]; // must only be in obj1
                        }
                    } // if equal

                    if (type === 'exists') {
                        if (obj2.hasOwnProperty(eachelement)) {
                            result.andobj[eachelement] = obj1[eachelement]
                        } else {
                            result.xorobj[eachelement] = obj1[eachelement]
                        }
                    } // if exists
                } // if not object
            } // for 

            proxyprinttodiv("objectrelationships result", result, 65);
            return result
        } // else not array
    }

    exports.compareobjects = compareobjects = function compareobjects(obj1, obj2, type) {
        proxyprinttodiv("compareobjects obj1 ", obj1, 65, true);
        proxyprinttodiv("compareobjects obj2 ", obj2, 65, true);
        proxyprinttodiv("compareobjects type ", type, 65);

        var andobj = {};
        var orobj = {};
        var xorobj1 = {};
        var xorobj2 = {};
        var result1 = {};
        var result2 = {};

        result1 = objectrelationships(obj1, obj2, type);
        andobj = result1.andobj;
        orobj = result1.orobj;
        xorobj1 = result1.xorobj;

        result2 = objectrelationships(obj2, obj1, type);
        andobj = extend(true, {}, result2.andobj, andobj);
        orobj = extend(true, {}, result2.orobj, orobj);
        xorobj2 = result2.xorobj;

        proxyprinttodiv("compareobjects after objectrelationships result1 ", result1, 65, true);
        proxyprinttodiv("compareobjects after objectrelationships result2 ", result2, 65, true);
        proxyprinttodiv("compareobjects andobj I ", andobj, 65);
        proxyprinttodiv("compareobjects orobj I", orobj, 65);
        proxyprinttodiv("compareobjects xorobj1 I ", xorobj1, 65);
        proxyprinttodiv("compareobjects xorobj2 I", xorobj1, 65);

        return {
            andobj: andobj,
            orobj: orobj,
            xorobj1: xorobj1,
            xorobj2: xorobj2
        }
    };

    //##
    exports.sortObj = sortObj = function sortObj(obj, callback) {
        var r = [];
        for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
                r.push({
                    key: i,
                    value: obj[i]
                });
            }
        }

        return r.sort(callback).reduce(function (obj, n) {
            obj[n.key] = n.value;
            return obj;
        }, {});
    };

    //##


/*
    object operations
    -size (either local object or localstorage object)
    -delete
*/
exports.objectoperations = objectoperations = function objectoperations(inputWidgetObject, callback) {
    proxyprinttodiv('Function objectoperations inputWidgetObject', inputWidgetObject, 17);
    var command = inputWidgetObject.command;
    
    //2). if command.collection or command.databasetable exists then return used space
    var collection = command.collection;
    var databasetable = command.databasetable;
    var commandObj = command.object;
    var objectSize = 0;
    var db={};

    proxyprinttodiv('Function objectoperations command collection', collection, 18);
    proxyprinttodiv('Function objectoperations command databasetable', databasetable, 18);
    
    if(!commandObj){  
        if (command.datastore === "localstore") {
            command.object=localStore;
        } else {
            command.object=localStorage;
        }
    }
    proxyprinttodiv('Function objectoperations command object', command.object, 17);

    for(key in command.object) {
        proxyprinttodiv('Function objectoperations object key ----------', key, 17);
        var storedObj = command.object[key];
        var splittedKeys = key.split("_");

        var targetcollection = null;
        var targetdatabasetable = null;

        for(index in splittedKeys) {
            splittedKey = splittedKeys[index];
            var keyValues = splittedKey.split("-");
            if( keyValues && keyValues.length==2 ){
                if( keyValues[0]=="collection" ) {
                    targetcollection = keyValues[1];
                }
                if( keyValues[0]=="databasetable" ) {
                    targetdatabasetable = keyValues[1];
                }
            }
        }

        if( commandObj ) {
            var size = memorySizeOf(storedObj);
            proxyprinttodiv('Function objectoperations size 1 ', size, 17);
            objectSize+=size;
        } else {  //If no command.object
            if((collection && collection===targetcollection) || (databasetable && databasetable===targetdatabasetable)){ //To get particular collection/databasetable size
                proxyprinttodiv('Function objectoperations targetcollection', targetcollection, 17);
                proxyprinttodiv('Function objectoperations targetdatabasetable', targetdatabasetable, 17);
                
                size = memorySizeOf(storedObj);
                proxyprinttodiv('Function objectoperations size 2', size, 17);
                objectSize+=size;
            }
        }       
    
        //3). if command.delete exists and true then delete from localstorage
        if(command && command["delete"] && command["delete"]===true){
            removeFromLocalStorage(key);
        }   
    }
    
    var res = {};
    res["objectsize"]=formatByteSize(objectSize);
    callback(null, res);    
};

/*
-- To calculate object size 
Reference -- https://gist.github.com/zensh/4975495
*/  
function memorySizeOf(obj) {
    var bytes = 0;
 
    function sizeOf(obj) {
        if(obj !== null && obj !== undefined) {
            switch(typeof obj) {
            case 'number':
                bytes += 8;
                break;
            case 'string':
                bytes += obj.length * 2;
                break;
            case 'boolean':
                bytes += 4;
                break;
            case 'object':
                var objClass = Object.prototype.toString.call(obj).slice(8, -1);
                if(objClass === 'Object' || objClass === 'Array') {
                    for(var key in obj) {
                        if(!obj.hasOwnProperty(key)) continue;
                        sizeOf(obj[key]);
                    }
                } else bytes += obj.toString().length * 2;
                break;
            }
        }
        return bytes;
    }
    return sizeOf(obj);
}
function formatByteSize(bytes) {
    if(bytes < 1024) return bytes + " bytes";
    else if(bytes < 1048576) return(bytes / 1024).toFixed(3) + " KiB";
    else if(bytes < 1073741824) return(bytes / 1048576).toFixed(3) + " MiB";
    else return(bytes / 1073741824).toFixed(3) + " GiB";
}

/*
-- To calculate localstorage object size 
Reference -- http://glynrob.com/javascript/calculate-localstorage-space
*/  
function memorySizeOfObjFromLocalStorage(key){  
    var objectValue = localStorage.getItem(key);
    objectSize = 0;
    if(objectValue){
        objectSize = lengthInUtf8Bytes(objectValue);
    }
    return formatByteSize(objectSize);
}

// To calculate the size in bytes of the data currently stored
function sizeofAllStorage(){  
    var size = 0;
    var eachObjectSize = 0;
    var eachObjectSizeInMB = 0;
    for (i=0; i<=localStorage.length-1; i++) {  
        key = localStorage.key(i);  
        eachObjectSize = lengthInUtf8Bytes(localStorage.getItem(key));
        size += eachObjectSize;
        eachObjectSizeInMB = Math.ceil((eachObjectSize/1024/1024)*100)/100;
        proxyprinttodiv("calculatespace size ("+ key +")", eachObjectSizeInMB, 17);
    }  
    return Math.ceil((size/1024/1024)*100)/100; // get into MB
}
function lengthInUtf8Bytes(str) {
  // Matches only the 10.. bytes that are non-initial characters in a multi-byte sequence.
  var m = encodeURIComponent(str).match(/%[89ABab]/g);
  return str.length + (m ? m.length : 0);
}

//To get total storage size
function totalStorageSize(){
    var storeSpace = 0;
    var maxMBToTest = 10;
    localStorage.clear();
    var i = 0;
    var testPacket = new Array( 1025 ).join( "a" ); // create 1024 characters so 1KB
    while (i<maxMBToTest){ // MB level
        var t = 0;
        while (t<1025){ // KB level
            try {
                localStorage.setItem(i+"|"+t, testPacket);
            } catch( error ) {
                var kbsaved = Math.floor(((t / 1024) * 100)); // calculate percentage of 1024
                storeSpace = i+'.'+kbsaved; // add MB and KB values
                storeSpace =  (Math.floor(storeSpace*100))/100; // rounds down the value
                t = 1025;
                i = maxMBToTest+1;
            }
            t++;
        }
        i++;
    }
    localStorage.clear();
    return storeSpace;
}

    exports.copyEnvironmentCommands = copyEnvironmentCommands = function (inputWidgetObject) {
        //now repeat that code in getwid, copywod, and bottom of query
        var tempObj = {};
        extend(true, tempObj, inputWidgetObject.command);
        extend(true, tempObj, inputWidgetObject.command.environment);

        inputWidgetObject.command = tempObj;

        if (inputWidgetObject)
            delete inputWidgetObject['command']['environment'];
    };

    // drienvironment class
    exports.drienvironment = drienvironment = function drienvironment(environment) {
        this.environment = environment;

        this.execute = function(params, callback) {
            var executeobject = {};

            if (!params.command) { params.command = {}; }

            if (isString(params)) {
                executeobject = {executethis:params};
                params = executeobject;
            } else if (Array.isArray(params)) {
                executeobject = {command:{xrun:params}};
                params = executeobject;
            }

            if (params.command.environment) {
                params.command.environment = extend(true, this.environment, params.command.environment);
            } else { params.command.environment = this.environment; }

            if (!params.command.environment.default) { params.command.environment.default = {}; }

            if (params.command.environment.run.type) {
                params.command.environment.default.executetype = params.command.environment.run.type;
                delete params.command.environment.run.type;
            }

            execute(params, function (err, results) { callback(err, results); });
        };
    };

    // drienvironment class
    // accepts parameters at root level not root.command.environment
    exports.driexecute = driexecute = function drienvironment(driexecute) {
        this.driexecute = driexecute;

        this.execute = function(params, callback) {
            var executeobject = {};

            if (!params.command) { params.command = {}; }

            if (isString(params)) 
            {
                executeobject = {executethis:params};
                params = executeobject;
            } 
            else if (Array.isArray(params)) 
            {
                executeobject = {command:{xrun:params}};
                params = executeobject;
            }

            params = extend(true, {}, this.driexecute, params);

            //
            // we could set a lot more defaults here
            if (!params.command.environment.default) { params.command.environment.default = {}; }

            execute(params, function (err, results) { callback(err, results); });
        };
    };

   
})();
