// copyright (c) 2014 DRI 
if (!exports) {
    var exports = {};
}
if (!config) { // used in executethis
    var config = {};
}

if (!Debug) { // printdiv
    var Debug = 'false';
}
if (!debuglevel) { // printdiv
    var debuglevel = 0;
}
if (!debugon) { // debugfn
    var debugon = false;
}



// *********** EVENTS **************************************************
exports.eventappinstall = eventappinstall = function eventappinstall() {
    if (exports.environment === 'local') {
        clearLocalStorage();
    }
};
exports.everyMinuteInterval = 0;
exports.everyTenMinuteInterval = 0;
exports.eventdeviceready = eventdeviceready = function eventdeviceready(params, callback) {
    setdefaultparm();
    if (!getFromLocalStorage(config.configuration.defaultdatabasetable+config.configuration.defaultkeycollection)) {
        eventappinstall();
    }

    // start eventonemin, eventtenmin and save the interval value so 
    // you can use "clearInterval" in the future if desired to stop things
    var minutes = 60 * 1000;
    exports.everyMinuteInterval = setInterval(exports.eventonemin,12 * minutes);
    exports.everyTenMinuteInterval = setInterval(exports.eventtenmin,120 * minutes);

/*    execute([
        {"executethis":"updatewid", 
                "wid":"systemdto", 
                "metadata":{"method":"systemdto",
                            "inherit":{"wid":"systemdtodefault", }}, 
                "expirationtimer":"string",
                "expirationdate":"string"},
        {}
        ], function (err, res) {
        callback(err, res);
    })*/

    updatewid({"wid":"initialwid", "date": new Date()}, function (err, res) {
        callback(err, res);
    });
};

exports.eventnewpage = eventnewpage = function eventnewpage() {};
exports.eventonline = eventonline = function eventonline() {};
exports.eventoffline = eventoffline = function eventoffline() {};
exports.eventonemin = eventonemin = function eventonemin() {};
exports.eventtenmin = eventtenmin = function eventtenmin() {};
exports.eventdaily = eventdaily = function eventdaily() {};
exports.eventmonthly = eventmonthly = function eventmonthly() {};
exports.eventlogineventsucess = eventlogineventsucess = function eventlogineventsucess() {};
exports.eventlogineventfail = eventlogineventfail = function eventlogineventfail() {};
exports.eventoutboundevent = eventoutboundevent = function eventoutboundevent() {};
exports.eventdeletewidevent = eventdeletewidevent = function eventdeletewidevent() {};
exports.eventgetwidevent = eventgetwidevent = function eventgetwidevent() {};
exports.eventupdatewidevent = eventupdatewidevent = function eventupdatewidevent() {};
exports.eventaddwidevent = eventaddwidevent = function eventaddwidevent() {};
exports.eventexecuteevent = eventexecuteevent = function eventexecuteevent() {};
exports.eventexecuteeachend = eventexecuteeachend = function eventexecuteeachend() {};


exports.eventexecuteend = eventexecuteend = function eventexecuteend(parameters, cb) {
    processevent(arguments.callee.name, function (err, res) {
        cb(err, res)
    })
};

exports.processevent = processevent = function processevent(eventname, callback) {
    var widlist=[];
    var executelist=[];
    geteventlist(eventname, function (err, eventlist) {
        if (eventlist.length > 0) {
            for (var eachexecute in eventlist) {
                widlist.push(eachexecute)
                executelist.push(eventlist[eachexecute])
                }
            execute(executelist, function (err, res) {
                // maybe res has widlist results?
                markasdone(widlist, eventname, function (err, res) {
                    callback(err, res)
                })
            })
        }
        else {callback(null, {});}
    })
};

exports.geteventlist = geteventlist = function geteventlist(eventname, callback) {
    var executeobject = 

    executeobject = {"command":{"result":"queryresult"}};
    executeobject.command.collection="queuecollection";
    executeobject.command.db="queuedata";
    executeobject.command.result="queueresult";
    executeobject["executethis"] = "querywid";
    executeobject["mongorawquery"] = { 
        "$and": [{
            "metadata": eventname
        }]
    };
        execute(executeobject, function (err, eventlist) {
            if (eventlist.length === 0) {
                eventlist=[]
                }
            callback(null, eventlist)
        })
    };

    exports.markasdone = markasdone = function markasdone(widlist, callback) {
        var executelist=[];
        var executeobject={};
        for (eachwid in widlist) {
            //deletewid
            //executeobject
        }
    }

function setdefaultparm() {

    exports.config = config = config123();
    test_results = {};
    potentialwid = 0;

    saveglobal("debuglevel", 0);
    saveglobal("Debug", 'false');
    saveglobal("debugon", false);
    saveglobal("debugname", "");
    saveglobal("debugsubcat", "");
    saveglobal("debugcat", "");
    saveglobal("debugfilter", "");
    saveglobal("debugdestination",12);
    saveglobal("debugcolor", 0);
    saveglobal("debugindent", 0);
    saveglobal("debuglinenum",12);

    exports.environment = "local";
    exports.Debug = Debug;
    exports.debuglevel = debuglevel;

}


function config123() {
    var configuration = {};

    configuration.environment = 'local';
    configuration.widmasterkey = 'widmasterkey'
    configuration.defaultcollection = 'dricollection';
    configuration.defaultdb='data';
    configuration.defaultdatastore = 'localstorage'
    configuration.defaultkeycollection = 'dricollectionkey'
    configuration.defaultdatabasetable = 'wikiwallettesting'

    configuration.preExecute = [];
    configuration.preExecute[0] = {};
    configuration.preExecute[0].executeorder = 1;
    configuration.preExecute[0].tryorder = 1;
    configuration.preExecute[0].dothis = 'dothis';
    configuration.preExecute[0].params = {};
    configuration.preExecute[1] = {};
    configuration.preExecute[1].executeorder = 1;
    configuration.preExecute[1].tryorder = 2;
    configuration.preExecute[1].dothis = 'executeparam';
    configuration.preExecute[1].params = {};
    configuration.preExecute[2] = {};
    configuration.preExecute[2].executeorder = 1;
    configuration.preExecute[2].tryorder = 3;
    configuration.preExecute[2].dothis = 'executegetwid';
    configuration.preExecute[2].params = {};
    configuration.preExecute[3] = {};
    configuration.preExecute[3].executeorder = 1;
    configuration.preExecute[3].tryorder = 4;
    configuration.preExecute[3].dothis = 'server';
    configuration.preExecute[3].params = {};

    configuration.midExecute = [];
    configuration.midExecute[0] = {};
    configuration.midExecute[0].executeorder = 1;
    configuration.midExecute[0].tryorder = 1;
    configuration.midExecute[0].dothis = 'dothis';
    configuration.midExecute[0].params = {};
    configuration.midExecute[1] = {};
    configuration.midExecute[1].executeorder = 1;
    configuration.midExecute[1].tryorder = 2;
    configuration.midExecute[1].dothis = 'executeparam';
    configuration.midExecute[1].params = {};
    configuration.midExecute[2] = {};
    configuration.midExecute[2].executeorder = 1;
    configuration.midExecute[2].tryorder = 3;
    configuration.midExecute[2].dothis = 'executegetwid';
    configuration.midExecute[2].params = {};
    configuration.midExecute[3] = {};
    configuration.midExecute[3].executeorder = 1;
    configuration.midExecute[3].tryorder = 4;
    configuration.midExecute[3].dothis = 'server';
    configuration.midExecute[3].params = {};

    configuration.postExecute = [];
    configuration.postExecute[0] = {};
    configuration.postExecute[0].executeorder = 1;
    configuration.postExecute[0].tryorder = 1;
    configuration.postExecute[0].dothis = 'dothis';
    configuration.postExecute[0].params = {};
    configuration.postExecute[1] = {};
    configuration.postExecute[1].executeorder = 1;
    configuration.postExecute[1].tryorder = 2;
    configuration.postExecute[1].dothis = 'executeparam';
    configuration.postExecute[1].params = {};
    configuration.postExecute[2] = {};
    configuration.postExecute[2].executeorder = 1;
    configuration.postExecute[2].tryorder = 3;
    configuration.postExecute[2].dothis = 'executegetwid';
    configuration.postExecute[2].params = {};
    configuration.postExecute[3] = {};
    configuration.postExecute[3].executeorder = 1;
    configuration.postExecute[3].tryorder = 4;
    configuration.postExecute[3].dothis = 'server';
    configuration.postExecute[3].params = {};

//     configuration.getwid = [];
//     configuration.getwid[0] = {};
//     configuration.getwid[0].executeorder = 1;
//     configuration.getwid[0].tryorder = 1;
//     configuration.getwid[0].dothis = 'getfromangular';
// //    configuration.getwid[0].dothis = 'offlinegetwid';
//     configuration.getwid[0].server = 'getwid';
//     configuration.getwid[0].params = {};

//     configuration.updatewid = [];
//     configuration.updatewid[0] = {};
//     configuration.updatewid[0].executeorder = 1;
//     configuration.updatewid[0].tryorder = 1;
//     configuration.updatewid[0].dothis = 'offlineupdatewid';
//     configuration.updatewid[0].server = 'updatewid';
//     configuration.updatewid[0].dofn = offlineupdatewid;
//     configuration.updatewid[0].params = {};

    return {
        "configuration": configuration
    }
}

exports.getFromLocalStorage = window.getFromLocalStorage = getFromLocalStorage = function getFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
};

exports.addToLocalStorage = window.addToLocalStorage = addToLocalStorage = function addToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
};

exports.clearLocalStorage = window.clearLocalStorage = clearLocalStorage = function clearLocalStorage() {
    proxyprinttodiv('clear clearLocalStorage', 'hi', 38);
    localStorage.clear();
    //potentialwid = 0;
    // items below can probably be cleared now
    addToLocalStorage(config.configuration.defaultdatabasetable+config.configuration.defaultcollection, [
                                        {"wid": "initialwid", 
                                        "metadata": {"date": new Date()}, 
                                        "data":{"system generated": "clearLocalStorage10"}
                                        }
                                        ]);
    addToLocalStorage(config.configuration.defaultdatabasetable+config.configuration.defaultkeycollection, {"initialwid": {"wid": "initialwid", 
                                        "metadata": {"date": new Date()}, 
                                        "data":{"system generated": "clearLocalStorage12"}
                                        }});
};

exports.removeFromLocalStorage = window.removeFromLocalStorage = removeFromLocalStorage = function removeFromLocalStorage(key) {
    localStorage.removeItem(key);
};

function executeAjax(allConfig, executeItem, callback, returnCallback) {
    var result;
    var success = false;
    result = "";

    //executeItem = "[" + JSON.stringify(executeItem) + "]";
    executeItem = JSON.stringify(executeItem);
    $.ajax({
        type: 'PUT',
        dataType: 'json',
        url: '/executethis',
        headers: {
            'content-type': 'Application/json'
        },
        global: 'false',
        cache: 'false',
        async: 'false',
        data: executeItem,
        success: function (data) {
            // alert(JSON.stringify(data));
            if (data.error) {
                result = "<pre> APPLICATION ERROR: </pre>" + JSON.stringify(data);
            } else {
                if (Object.keys(data).length > 0) {
                    result = "<pre> SUCCESS: </pre>" + JSON.stringify(data);
                } else {
                    result = "<pre> <<< No Data Returned >>> </pre>";
                }
            }
            callback(data, allConfig, 'html', returnCallback);
        },
        error: function (data) {
            alert(JSON.stringify(data));
            result = "FAILED TO CALL EXECUTETHIS " + JSON.stringify(data);
            callback(data, allConfig, 'html', returnCallback);
        }
    });
}

// Primary execute function called after dothis

function test2(params, callback) {
    callback(null, {
        "test": "test2 on local called"
    });
}

exports.server = window.server = server = function server(params, callback) {
    proxyprinttodiv('Function server ------', params, 99);
    try {
        var inbound_parameters = {};
        extend(true, inbound_parameters, params);

        console.log('execute server called with ' + JSON.stringify(params));
        // delete params['configuration'];
        params = toLowerKeys(params);
        // if (params['midexecute']) {
        //     params['executethis'] = params['midexecute'];
        //     delete params['midexecute'];
        // }
        // alert(JSON.stringify(params));

        // add accesstoken if user exists in localStorage
        var currentUser = window.localStorage ? JSON.parse(window.localStorage.getItem('driUser')) : undefined;
        if (currentUser) {
            if (!params.etenvironment) {
                params.etenvironment = {};
            }
            params.etenvironment.accesstoken = currentUser.at;
        }

        executeAjax("", params, function (data) {
            console.log("Return from server: " + JSON.stringify(data));
            var err;
            callback(null, data);
        });
    } // end try
    catch (err) {
        var finalobject =
            createfinalobject({
                "result": "server"
            }, {}, "server", err, inbound_parameters);
        callback(finalobject.err, finalobject.res);
    }
};


exports.server2 = window.server2 = server2 = function server2(params, callback) {
    proxyprinttodiv('Function server2 ------', params, 99);
    params.command.server="server2";
    server(params,callback);
}

exports.getDriApiData = getDriApiData = function getDriApiData(params, callback) {
    // set up object in syntax that driApi is expecting
    // also get getdata/<action> action from params object
    var driExecuteObj = {
        actionQueryString: params.dri_action,
        parameterDTOs: []
    };

    // convert passed in object to parameterdto list
    for (var prop in params) {
        if (params.hasOwnProperty(prop)) {
            driExecuteObj.parameterDTOs.push({
                ParameterName: prop,
                ParameterValue: params[prop]
            });
        }
    }

    $.ajax({
        url: '/getdata',
        type: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        cache: false,
        async: false,
        dataType: 'json',
        data: JSON.stringify(driExecuteObj),
        success: function (results) {
            // convert returned list of DataModelDTOs to an object
            var resultsObj = {};
            for (var i = 0; i < results.length; i++) {
                resultsObj[results[i].Key] = results[i].Value;
            }

            callback(null, resultsObj);
        },
        error: function (err) {
            callback(err.responseText, null);
        }
    });
};


exports.mquery = mquery = function mquery(inboundobj, command, callback) {
    try {
        var inbound_parameters = {};
        extend(true, inbound_parameters, inboundobj);

        proxyprinttodiv('Function inboundobj', inboundobj, 30);

        function IsJsonString(str) {
            try {
                JSON.parse(str);
            } catch (e) {
                return false;
            }
            return true;
        }

        var query = inboundobj;
        var outlist = [];
        var convertedlist = [];
        var resultlist = [];
        //var collection = "DRI";
        //var keycollection = "DRIKEY";
        var collection = config.configuration.defaultcollection
        var keycollection = config.configuration.defaultkeycollection
        var databasetable = config.configuration.defaultdatabasetable
        var database = {};
        var keydatabase = {};
        var eachwid;

        // TODO :: SAURABH COMMENTED FOR MAKING SECURITY WORK, FIX THIS AND UNCOMMENT
        // if (command.db) {db=command.db} // not needed
        // if (command.collection) {collection=command.collection}

        database = getFromLocalStorage(databasetable + collection);

        proxyprinttodiv('Function inlist', database, 30);
        proxyprinttodiv('before IsJsonString', inboundobj, 30);
        if (IsJsonString(inboundobj)) {
            query = JSON.parse(inboundobj);
        }
        proxyprinttodiv('Function query', query, 30);
        //proxyprinttodiv('Function query',  stringify(query),12);

        outlist = sift(query, database);

        // if date exists , return in date descending order
        outlist = outlist.sort(function (aObj, bObj) {
            // var a = aObj["metadata"]["date"];
            // var b = bObj["metadata"]["date"];
            // if (a < b) return -1;
            // if (a > b) return 1;
            // return 0;

            // descending order
            // return bObj["metadata"]["date"] - aObj["metadata"]["date"];
            // return (bObj["metadata"]["date"] > aObj["metadata"]["date"]) ? 1 : (bObj["metadata"]["date"] < aObj["metadata"]["date"]) ? -1 : 0;
            // return Date.parse(bObj["metadata"]["date"]) - Date.parse(aObj["metadata"]["date"]);
            return Date.parse(aObj["metadata"]["date"]) - Date.parse(bObj["metadata"]["date"]);
        });

// not sure if stuff below needed
        keydatabase = getFromLocalStorage(databasetable + keycollection);
        for (var eachrecord in outlist) {
            eachwid = keydatabase[outlist[eachrecord]["wid"]];
            resultlist.push(eachwid);
        }

        proxyprinttodiv('Function outlist', outlist, 30);
        callback(null, resultlist);
    } // end try
    catch (err) {
        var finalobject =
            createfinalobject({
                "result": "mongoquery"
            }, {}, "mongoquery", err, inbound_parameters);
        callback(finalobject.err, finalobject.res);
    }
};

