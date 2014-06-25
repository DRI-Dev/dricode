// copyright (c) 2014 DRI 

if (!exports) {
    var exports = {};
}


exports.localStore = localStore = function () {
    var json = {};

    function clear() {
        this.json = {};
    }

    function push(key, val) {
        this.json[key] = val;
    }

    function get(key) {
        return this.json[key];
    }

    function remove(key) {
        delete this.json[key];
    }

    return {
        "clear": clear,
        "json": json,
        "push": push,
        "remove": remove,
        "get": get
    };

}();

localStore.clear();

exports.getglobal = getglobal = function getglobal(varname) {
    return localStore.get(varname);
};

exports.saveglobal = saveglobal = function saveglobal(varname, varvalue) {
    return localStore.push(varname, varvalue);
};

// logic to add things to localStore object
exports.addtolocal = addtolocal = function addtolocal(widName, widobject) {
    if (!widobject) {
        widobject = {};
    }
    if (widName) {
        //localStore.push(config.configuration.widmasterkey + widName, widobject);
        localStore.push(widName, widobject);
    }
};

// logic to get things from localStore object
exports.getfromlocal = getfromlocal = function getfromlocal(inputWidgetObject) {
    var output = null;
    output = localStore.get(inputWidgetObject);
    //if (output === null) { output = {}; }
    proxyprinttodiv('getfromlocal output', output, 38);
    return output;
};

exports.clearLocal = clearLocal = function clearLocal() {
    // widMasterKey = "widmaster_";
    localStore.clear();
    //potentialwid = 0;
};


function setdefaultparm() {

    exports.config = config = config123();
    //test_results = {};
    //potentialwid = 0;

    saveglobal("debuglevel", 0);
    saveglobal("Debug", 'false');
    saveglobal("debugon", false);
    saveglobal("debugname", "");
    saveglobal("debugsubcat", "");
    saveglobal("debugcat", "");
    saveglobal("debugfilter", "");
    saveglobal("debugdestination", 0);
    saveglobal("debugcolor", 0);
    saveglobal("debugindent", 0);
    saveglobal("debuglinenum", 0);

    exports.environment = "local";
    exports.Debug = Debug;
    exports.debuglevel = debuglevel;
    exports.everyMinuteInterval = 0;
    exports.everyTenMinuteInterval = 0;
    //exports.everyMinuteInterval = setInterval(exports.eventonemin,1000);
    //exports.everyTenMinuteInterval = setInterval(exports.eventtenmin,10 * minutes);
}


function config123() {
    var configuration = {};   
    // what envrioment and what defaults should be used
    configuration.environment = 'local';
    configuration.defaultsyncrule = 'sync_local_server';
    configuration.defaultcollection = 'dricollection';
    configuration.defaultdb = 'data';
    configuration.defaultdatastore = 'localstorage';
    configuration.defaultkeycollection = 'dricollectionkey';
    configuration.defaultdatabasetable = 'wikiwallettesting';
    // configuration.e is the wid name for "environment"
    configuration.e = configuration.defaultdatabasetable+"_"+configuration.defaultcollection+"_"+ "environment";

    // configuration.d are the defaults that should be copied into command.environment during each execute
    configuration.d = {};
    configuration.d.defaultcollection = configuration.defaultcollection;
    configuration.d.defaultdb = configuration.defaultdb;
    configuration.d.defaultdatastore =  configuration.defaultdatastore;
    configuration.d.defaultkeycollection = configuration.defaultkeycollection;
    configuration.d.defaultdatabasetable = configuration.defaultdatabasetable;
    configuration.d.platform = configuration.environment;
    configuration.d.syncrule = configuration.defaultsyncrule;

    // configuration.d.environment = {};
    // configuration.d.environment.platform = configuration.environment;
    // configuration.d.environment.syncrule = "sync_local_server";
    // configuration.widmasterkey = 'widmasterkey';

    return {
        "configuration": configuration
    };
}


// *********** EVENTS **************************************************
exports.eventappinstall = eventappinstall = function eventappinstall() {
  if (exports.environment === 'local') {
      clearLocalStorage();
  }
};

exports.eventdeviceready = eventdeviceready = function eventdeviceready(params, callback) {
    setdefaultparm();
    if (!getFromLocalStorage(config.configuration.defaultkeycollection)) {
        eventappinstall();
    }

    // start eventonemin, eventtenmin and save the interval value so 
    // you can use "clearInterval" in the future if desired to stop things
    var minutes = 60 * 1000;

    callback(null,null);
};

exports.eventnewpage = eventnewpage = function eventnewpage(params, cb) {
    processevent(arguments.callee.name, function (err, res) {
        cb(err, res);
    });

};

exports.eventonline = eventonline = function eventonline(params, cb) {
    processevent(arguments.callee.name, function (err, res) {
        cb(err, res);
    });
};

exports.eventoffline = eventoffline = function eventoffline(params, cb) {
    processevent(arguments.callee.name, function (err, res) {
        cb(err, res);
    });
};

exports.eventonemin = eventonemin = function eventonemin() {
    proxyprinttodiv("eventonemin", 'one sec', 30);
    processevent(arguments.callee.name, function (err, res) {
        //cb(err, res);
    });
};

exports.eventtenmin = eventtenmin = function eventtenmin(params, cb) {    
    processevent(arguments.callee.name, function (err, res) {
        cb(err, res);
    });
};

exports.eventdaily = eventdaily = function eventdaily(params, cb) {    
    processevent(arguments.callee.name, function (err, res) {
        cb(err, res);
    });
};

exports.eventmonthly = eventmonthly = function eventmonthly(params, cb) {
    processevent(arguments.callee.name, function (err, res) {
        cb(err, res);
    });
};

exports.eventlogineventsucess = eventlogineventsucess = function eventlogineventsucess(params, cb) {
    processevent(arguments.callee.name, function (err, res) {
        cb(err, res);
    });
};

exports.eventlogineventfail = eventlogineventfail = function eventlogineventfail(params, cb) {
    processevent(arguments.callee.name, function (err, res) {
        cb(err, res);
    });
};

exports.eventoutboundevent = eventoutboundevent = function eventoutboundevent(params, cb) {
    processevent(arguments.callee.name, function (err, res) {
        cb(err, res);
    });
};

exports.eventdeletewidevent = eventdeletewidevent = function eventdeletewidevent(params, cb) {
    processevent(arguments.callee.name, function (err, res) {
        cb(err, res);
    });
};

exports.eventgetwidevent = eventgetwidevent = function eventgetwidevent(params, cb) {
    processevent(arguments.callee.name, function (err, res) {
        cb(err, res);
    });
};

exports.eventupdatewidevent = eventupdatewidevent = function eventupdatewidevent(params, cb) {
    processevent(arguments.callee.name, function (err, res) {
        cb(err, res);
    });
};

exports.eventaddwidevent = eventaddwidevent = function eventaddwidevent(params, cb) {
    processevent(arguments.callee.name, function (err, res) {
        cb(err, res);
    });
};

exports.eventexecuteevent = eventexecuteevent = function eventexecuteevent(params, cb) {
    processevent(arguments.callee.name, function (err, res) {
        cb(err, res);
    });
};

exports.eventexecuteeachend = eventexecuteeachend = function eventexecuteeachend(params, cb) {
    processevent(arguments.callee.name, function (err, res) {
        cb(err, res);
    });
};

exports.eventexecuteend = eventexecuteend = function eventexecuteend(parameters, cb) {
    processevent(arguments.callee.name, function (err, res) {
        cb(err, res);
    });
};

exports.processevent = processevent = function processevent(eventname, callback) {
    callback(null,null)
    // proxyprinttodiv("processeventqueue eventname----", eventname, 99);
    // getexecutelist(eventname, "queuecollection", function (err, executetodolist) {
    //     proxyprinttodiv("processeventqueue executelist", executetodolist, 17);
    //     executelistfn(executetodolist, execute, function (err, res) {
    //         deletelist(executetodolist, eventname, function (err, res) {
    //             callback(err, res);
    //             });
    //         });
    //     });
    };

exports.executelistfn = executelistfn = function executelistfn(listToDo, fn, callback) {
    async.mapSeries(listToDo, function (eachresult, cbMap) {
        async.nextTick(function () {
            fn(eachresult, function (err, res){
                cbMap(err, res);
            });
        });
    }, function (err, res) {
        callback(err, res);
    });
};


exports.getexecutelist = getexecutelist = function getexecutelist(eventname, eventtype, callback) {
    proxyprinttodiv("getexecutelist eventname(collection)", eventname, 17);
	proxyprinttodiv("getexecutelist eventtype(databasetable)", eventtype, 17);
	var executeobject = {"command": {"result": "queryresult"}};
    var executetodolist=[];
    executeobject.command.databasetable = eventtype;
    executeobject.command.collection = eventname;
    executeobject.command.db = "queuedata";
    //executeobject.command.result = "queueresult";
    executeobject["executethis"] = "querywid";
    //executeobject["mongorawquery"] = { "queuedata" : { "$gt": {} }}; // find objects that are not empty
    executeobject["mongorawquery"] = {"$and": [{"wid": "doesnotmatter"}]}  	
	proxyprinttodiv("getexecutelist querywid executeobject", executeobject, 17);
	
    execute(executeobject, function (err, res) {
		proxyprinttodiv("getexecutelist mongorawquery res", res, 17);
        if (res.length === 0) {
            executetodolist = [];
        }
        else if(res[0] && res[0]["queryresult"]){
            for (var everyaction in res[0]["queryresult"]){
				proxyprinttodiv("getexecutelist mongorawquery queryresult everyaction", everyaction, 17);
                //if (res[0]["queryresult"][everyaction]
                executetodolist.push(res[0]["queryresult"][everyaction]);
            }

        }
        callback(null, executetodolist);
    })
};


exports.deletelist = deletelist = function deletelist(listToDo, eventname, callback) {
    proxyprinttodiv("deletelist listToDo", listToDo, 17);
    var eachcmd={};
    eachcmd["command"] = {
            "fromdatabasetable":"queuecollection",
            "fromdatastore": "",
            "fromcollection":eventname,
            "fromkeycollection":eventname+"key",
            "fromdb":"queuedata",
            "todatabasetable":"completedqueuecollection",
            "todatastore": "",
            "tocollection":eventname,
            "tokeycollection":eventname+"key",
            "todb":"queuedata",
            "towid":"",
            "delete":true
        };

    async.mapSeries(listToDo, function (eachresult, cbMap) {
        async.nextTick(function () {
            var eachaction=eachresult;
            eachaction = extend(true, eachaction, eachcmd);
            copywid(eachaction, function (err, res){
                cbMap(err, res);
            });
        });
    }, function (err, res) {
        callback(err, res);
    });
};


exports.execute_server = window.execute_server = execute_server = function execute_server(params, callback) {
    proxyprinttodiv('Function server TO ------', params, 99, true);

        //var inbound_parameters = {};
        //extend(true, inbound_parameters, params);
        //params =
    delete params.command.processfn;

    if (params.serverfn) // note the first par of if should be deleted...only for testing server locally
    {
        params.command.xrun = params.serverfn;
        delete params.serverfn;
        params.command.environment.platform = "server";
        proxyprinttodiv('server calling execute params', params, 99, true);
        execute(params, function (err, res) {
            proxyprinttodiv('server results res',res, 99, true, true);
            // reset back to local
            params.command.environment.platform = "local";
            checkenviornment(params.command.environment);
            callback(err, res);
        });
    }
    else
    {
        proxyprinttodiv('server calling ajax params', params, 99, true);
        executeAjax("", params, function (data) {
              proxyprinttodiv('server results data',data, 99, true);
              callback(null, data);
        });
    }
};


// exports.server = window.server = server = function server(params, callback) {
//     proxyprinttodiv('Function server ------', params, 30);
//     try {
//         var inbound_parameters = {};
//         extend(true, inbound_parameters, params);

//         console.log('execute server called with ' + JSON.stringify(params));
//         delete params['configuration'];
//         params = toLowerKeys(params);

//         var currentUser = window.localStorage ? JSON.parse(window.localStorage.getItem('driUser')) : undefined;
//         if (currentUser) {
//             if (!params.etenvironment) {
//                 params.etenvironment = {};
//             }
//             params.etenvironment.accesstoken = currentUser.at;
//         }

//         executeAjax("", params, function (data) {
//             console.log("Return from server: " + JSON.stringify(data));
//             var err;
//             callback(null, data);
//         });
//     } // end try
//     catch (err) {
//         var finalobject =
//             createfinalobject({
//                 "result": "server"
//             }, {}, "server", err, inbound_parameters);
//         callback(finalobject.err, finalobject.res);
//     }
// };


exports.getFromLocalStorage = window.getFromLocalStorage = getFromLocalStorage = function getFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
};

exports.addToLocalStorage = window.addToLocalStorage = addToLocalStorage = function addToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
};

exports.clearLocalStorage = window.clearLocalStorage = clearLocalStorage = function clearLocalStorage() {
    proxyprinttodiv('clear clearLocalStorage', 'hi', 38);
    localStorage.clear();
    // items below can probably be cleared now
    addToLocalStorage(config.configuration.defaultdatabasetable + config.configuration.defaultcollection, [{
        "wid": "initialwid",
        "metadata": {
            "date": new Date()
        },
        "data": {
            "system generated": "clearLocalStorage10"
        }
    }]);
    addToLocalStorage(config.configuration.defaultdatabasetable + config.configuration.defaultkeycollection, {
        "initialwid": {
            "wid": "initialwid",
            "metadata": {
                "date": new Date()
            },
            "data": {
                "system generated": "clearLocalStorage12"
            }
        }
    });
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
            'content-type': 'application/json'
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


exports.mquery = mquery = function mquery(inboundobj,projectionparams, command, callback) {
    try {
        var inbound_parameters = {};
        extend(true, inbound_parameters, inboundobj);

        proxyprinttodiv('Function inboundobj', inboundobj, 30);
        proxyprinttodiv('Function command', command, 30);

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
        //var collection = config.configuration.defaultcollection;
        var collection = command.collection;
        //proxyprinttodiv("collection = ",collection,30);
        //var keycollection = config.configuration.defaultkeycollection;
        var keycollection = command.collection + "key";
        //var databasetable = config.configuration.defaultdatabasetable;
        var databasetable = command.databasetable;
        //proxyprinttodiv("db table = ",databasetable,30);
        var database = {};
        var keydatabase = {};
        var eachwid;

        // TODO :: SAURABH COMMENTED FOR MAKING SECURITY WORK, FIX THIS AND UNCOMMENT
        // if (command.db) {db=command.db} // not needed
        // if (command.collection) {collection=command.collection}
        proxyprinttodiv('Function databasetable + collection', databasetable + collection, 30);
        database = getFromLocalStorage(databasetable + collection);

        proxyprinttodiv('Function inlist', database, 30);
        if (database) {
            proxyprinttodiv('before IsJsonString', inboundobj, 30);
            if (IsJsonString(inboundobj)) {
                query = JSON.parse(inboundobj);
            }
            proxyprinttodiv('Function query', query, 30);
            //proxyprinttodiv('Function query',  stringify(query),12);

            outlist = sift(query, database);

            // if date exists , return in date descending order
            outlist = outlist.sort(function (aObj, bObj) {

                return Date.parse(aObj["metadata"]["date"]) - Date.parse(bObj["metadata"]["date"]);
            });

            // not sure if stuff below needed
            keydatabase = getFromLocalStorage(databasetable + keycollection);

            for (var eachrecord in outlist) {
                eachwid = keydatabase[outlist[eachrecord]["wid"]];
                resultlist.push(eachwid);
            }
            }
        else {
            resultlist = [];
        }

        proxyprinttodiv('Function resultlist', resultlist, 30);
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
