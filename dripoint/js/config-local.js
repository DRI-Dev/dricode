// copyright (c) 2014 DRI 

if (!exports) {
    var exports = {};
}
if (!config) { 
    var config = {};
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
    exports.debuglevel = 0 || debuglevel;


}


function config123() {
    var configuration = {};   
    // what environment and what defaults should be used
    configuration.environment = 'local';
    configuration.syncrule = 'sync_local_server';
    configuration.machinename = 'browser'; //'phonegap';
    configuration.startwid = 'startwid';
    configuration.collection = 'dricollection';
    configuration.db = 'data';
    configuration.datastore = 'localstorage';
    configuration.keycollection = configuration.collection+'key';
    configuration.databasetable = 'wikiwallettesting';
    // configuration.e is the wid name for "environment"
    configuration.e = configuration.databasetable+configuration.collection+"environment";

    // configuration.d are the defaults that should be copied into command.environment during each execute

    configuration.d = {};
    configuration.d.default = {};
    configuration.d.default.collection = configuration.collection;
    configuration.d.default.db = configuration.db;
    configuration.d.default.datastore =  configuration.datastore;
    configuration.d.default.keycollection = configuration.keycollection;
    configuration.d.default.databasetable = configuration.databasetable;
    configuration.d.default.executetype = "series";

    configuration.d.global = {};
    configuration.d.var = {};
    configuration.d.platform = configuration.environment;
    configuration.d.syncrule = configuration.syncrule;

    configuration.d.run = {};
    configuration.d.run.executelevel=0;

    // items at default level get copied at run time to command level
    // items at d level get copied to command.environment at run time
    // run time parameters win

    configuration.defaultenvironment = {};
    configuration.defaultenvironment[configuration.db] = configuration.d;

    configuration.delete = {};
    configuration.delete.collection = 'dricollection';
    configuration.delete.db = 'data';
    configuration.delete.datastore = 'localstorage';
    configuration.delete.keycollection = configuration.collection+'key';
    configuration.delete.databasetable = 'deletedatabasetable';

    return {
        "configuration": configuration
    };
}



// *********** EVENTS **************************************************
// this shoud run the very first time an app is installed
// it should not run again when machine is rebooted, unless local storage is cleared
exports.eventappinstall = eventappinstall = function eventappinstall(params, callback) {
    if (config.configuration.environment === 'local') {
        clearLocalStorage();
        if (config.configuration.machinename==='phonegap')
        {
        // copy files to wids 
        }
    }
    else
    {   // if server
        var startTime = new Date().getTime().toString();
        execute({
           "command.datastore":"localstore",
           "executethis":"addwidmaster",
           "wid":"bootwid",
           "starttime": startTime
           , "a": "ee"
           }, function (err, res) {
               console.log("Res is " + res.toString() );
               callback(null,null);
           }
       );  
    }
}

// this run when the device is turned on
// we should always clear volitile memory localstore (clearLocal) and set defaults
// we should NOT clear localstorage

exports.eventdeviceready = eventdeviceready = function eventdeviceready(params, callback) {
    clearLocal();
    setdefaultparm();
    // if the databases are not there then must be first time
    if (config.configuration.environment === 'local') 
    {
        getwid({wid: config.configuration.startwid}, function (err, startwid) 
        {
            // try to get the default startwid, if nothing there then eventappinstall
            if (err) 
            {
                eventappinstall(params, function (err, res)
                {
                    eventnormalstart(params, callback); // proceed to normal start
                })
            }
            else 
            {   // if startwid existed
                extend(true, params, startwid);
                eventnormalstart(params, callback);
            }
        })
    }
    else 
    {
        eventnormalstart(params, callback);
    }
}

exports.eventnormalstart = eventnormalstart = function eventnormalstart(params, callback) 
{
    if (config.configuration.machinename!=='phonegap')
    {
        var executeobject = {};
        extend(true, executeobject, 
            {"executethis":"getwidmaster", 
            "wid":"startwid",
            "command.syncrule":"sync_server"})
        execute(executeobject, function (err, res) 
        {
            callback(err, res)    
        })
    }
    else
    {
        callback(null, null)
    }
}


// start other event handler
    // start eventonemin, eventtenmin and save the interval value so 
    // you can use "clearInterval" in the future if desired to stop things

    // var minute = 60 * 1000;
    // var day = minute * 60 * 24;
    // setInterval(eventonemin(), 1 * minute);
    // setInterval(eventtenmin(), 10 * minute);
    // setInterval(eventdaily(), 1 * day);


exports.eventnewpage = eventnewpage = function eventnewpage(params, cb) {
//    processevent(arguments.callee.name, function (err, res) {
//        cb(err, res);
//    });
    cb(null);
};

exports.eventonline = eventonline = function eventonline(params, cb) {
//    processevent(arguments.callee.name, function (err, res) {
//        cb(err, res);
//    });
    cb(null);
};

exports.eventoffline = eventoffline = function eventoffline(params, cb) {
//    processevent(arguments.callee.name, function (err, res) {
//        cb(err, res);
//    });
    cb(null);
};

exports.eventonemin = eventonemin = function eventonemin() {
    proxyprinttodiv("eventonemin", 'one sec', 30);
//    processevent(arguments.callee.name, function (err, res) {
//        //cb(err, res);
//    });
};

exports.eventtenmin = eventtenmin = function eventtenmin(params, cb) {    
//    processevent(arguments.callee.name, function (err, res) {
//        cb(err, res);
//    });
    if (typeof cb == 'function') { cb(null); }
};

exports.eventdaily = eventdaily = function eventdaily(params, cb) {    
//    processevent(arguments.callee.name, function (err, res) {
//        cb(err, res);
//    });
    cb(null);
};

exports.eventmonthly = eventmonthly = function eventmonthly(params, cb) {
//    processevent(arguments.callee.name, function (err, res) {
//        cb(err, res);
//    });
    cb(null);
};

exports.eventlogineventsucess = eventlogineventsucess = function eventlogineventsucess(params, cb) {
//    processevent(arguments.callee.name, function (err, res) {
//        cb(err, res);
//    });
    cb(null);
};

exports.eventlogineventfail = eventlogineventfail = function eventlogineventfail(params, cb) {
//    processevent(arguments.callee.name, function (err, res) {
//        cb(err, res);
//    });
    cb(null);
};

exports.eventoutboundevent = eventoutboundevent = function eventoutboundevent(params, cb) {
//    processevent(arguments.callee.name, function (err, res) {
//        cb(err, res);
//    });
    cb(null);
};

exports.eventdeletewidevent = eventdeletewidevent = function eventdeletewidevent(params, cb) {
//    processevent(arguments.callee.name, function (err, res) {
//        cb(err, res);
//    });
    cb(null);
};

exports.eventgetwidevent = eventgetwidevent = function eventgetwidevent(params, cb) {
//    processevent(arguments.callee.name, function (err, res) {
//        cb(err, res);
//    });
    cb(null);
};

exports.eventupdatewidevent = eventupdatewidevent = function eventupdatewidevent(params, cb) {
//    processevent(arguments.callee.name, function (err, res) {
//        cb(err, res);
//    });
    cb(null);
};

exports.eventaddwidevent = eventaddwidevent = function eventaddwidevent(params, cb) {
//    processevent(arguments.callee.name, function (err, res) {
//        cb(err, res);
//    });
    cb(null);
};

exports.eventexecuteevent = eventexecuteevent = function eventexecuteevent(params, cb) {
//    processevent(arguments.callee.name, function (err, res) {
//        cb(err, res);
//    });
    cb(null);
};

exports.eventexecuteeachend = eventexecuteeachend = function eventexecuteeachend(params, cb) {
//    processevent(arguments.callee.name, function (err, res) {
//        cb(err, res);
//    });
    cb(null);
};

exports.eventexecuteend = eventexecuteend = function eventexecuteend(parameters, cb) {
//    processevent(arguments.callee.name, function (err, res) {
//        cb(err, res);
//    });
    cb(null);
};

// exports.processevent = processevent = function processevent(params, callback) {
//     callback(null, null);
// };

exports.execute_server = window.execute_server = execute_server = function execute_server(params, callback) {
    proxyprinttodiv('Function server TO ------', params, 99, true);

        //var inbound_parameters = {};
        //extend(true, inbound_parameters, params);
        //params =
    var tempenvironment = params.command.environment;
    delete params.command.processfn;
    //var temp = params.command.environment.syncrule;
    params.command.environment.run.executelevel=0;
    params.command.environment.syncrule = "create_what_to_do_list";

    delete params.command.environment;

    if (params.serverfn) // note the first par of if should be deleted...only for testing server locally
    {
        params.command.xrun = params.serverfn;
        delete params.serverfn;
        params.command.environment.platform = "server";
        proxyprinttodiv('server calling execute params', params, 99, true);
        execute(params, function (err, res) {
            proxyprinttodiv('server results res',res, 99, true, true);
            // reset back to local
            params.command.environment=tempenvironment;
            // params.command.environment.platform = "local";
            // params.command.environment.syncrule = temp;
            // params.command.environment.run.executelevel = templevel;
            // params.command.environment.run.executeid = tempexecuteid;            
            checkenviornment(params.command.environment);
            callback(err, res);
        });
    }
    else
    {
        // server will override some command properties with the servers config defaults

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
    proxyprinttodiv('clear clearLocalStorage', 'hi', 99);
    localStorage.clear();
    //localStore.clear();
    // items below can probably be cleared now
    // updatewid({"wid":"misc", "a":"b"}, function (err, res) {
    //        proxyprinttodiv('clear from clearLocalStorage', res, 99);
    // })
    // addToLocalStorage(config.configuration.databasetable + config.configuration.collection, [{
    //     "wid": "initialwid",
    //     "metadata": {
    //         "date": new Date()
    //     },
    //     "data": {
    //         "system generated": "clearLocalStorage10"
    //     }
    // }]);
    // addToLocalStorage(config.configuration.databasetable + config.configuration.keycollection, {
    //     "initialwid": {
    //         "wid": "initialwid",
    //         "metadata": {
    //             "date": new Date()
    //         },
    //         "data": {
    //             "system generated": "clearLocalStorage12"
    //         }
    //     }
    // });
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
        error: function (XHR, textStatus, errorThrown) {
            alert(JSON.stringify(textStatus + errorThrown));
            result = "FAILED TO CALL EXECUTETHIS " + JSON.stringify(errorThrown);
            callback(errorThrown, allConfig, 'html', returnCallback);
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



        proxyprinttodiv('Function inboundobj', inboundobj, 28);
        proxyprinttodiv('Function command', command, 28);

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
        //var collection = config.configuration.collection;
        var collection = command.collection;
        //proxyprinttodiv("collection = ",collection,30);
        //var keycollection = config.configuration.keycollection;
        var keycollection = command.collection + "key";
        //var databasetable = config.configuration.databasetable;
        var databasetable = command.databasetable;
        //proxyprinttodiv("db table = ",databasetable,30);
        var database = {};
        var keydatabase = {};
        var eachwid;

        // TODO :: SAURABH COMMENTED FOR MAKING SECURITY WORK, FIX THIS AND UNCOMMENT
        // if (command.db) {db=command.db} // not needed
        // if (command.collection) {collection=command.collection}
        proxyprinttodiv('Function databasetable + collection', databasetable + collection, 28);
        database = getFromLocalStorage(databasetable + collection);

        proxyprinttodiv('Function inlist', database, 28, true);
        if (database) {
            proxyprinttodiv('before IsJsonString', inboundobj, 28);
            if (IsJsonString(inboundobj)) {
                query = JSON.parse(inboundobj);
            }
            proxyprinttodiv('Function query', query, 28);
            //proxyprinttodiv('Function query',  stringify(query),12);

            outlist = sift(query, database);

            // if date exists , return in date descending order
            resultlist = outlist.sort(function (aObj, bObj) {
                return Date.parse(aObj["metadata"]["date"]) - Date.parse(bObj["metadata"]["date"]);
            });

            // not sure if stuff below needed
            //keydatabase = getFromLocalStorage(databasetable + keycollection);

            //for (var eachrecord in outlist) {
            //    eachwid = keydatabase[outlist[eachrecord]["wid"]];
            //    resultlist.push(eachwid);
            //}
            }
        else {
            resultlist = [];
        }

        proxyprinttodiv('Function resultlist', resultlist, 28);
        callback(null, resultlist);

};

exports.test_return_noerror_result_local = test_return_noerror_result_local = function test_return_noerror_result_local (param, callback) 
{
    // debugger;
    proxyprinttodiv('test_return_noerror_result_local- incoming parm', param, 99);
    var error_obj = null;
    var env = param.command.environment.platform;
    if (env==="server" && param.serverfn)     // if environment = server and serverfn parameter exist then redirect 
                                              // to different function--that way we can on same machine pass locally and
                                              // fail server
    {
        param.command.xrun=param.serverfn;
        delete param.serverfn;
        proxyprinttodiv('test ***** calling server', param, 99);
        execute(param, callback);
    } else {
        var result_obj = { 'a':'b', env: env };
        callback( error_obj, result_obj );
    }
};

	// series, level 0, 1 function that passes locally
	exports.local_serieslevel0pass1 = 
	local_serieslevel0pass1 = 
	function local_serieslevel0pass1(executeobject, callback) 
	{
		  if (!executeobject.command) {
              executeobject.command={};
              executeobject.command.environment={};
              executeobject.command.environment.run={};
          }
		  
		  //executeobject.command.environment.run.type="series"
          executeobject.command.executetype="series"
		  executeobject.command.environment.run.executelevel=0;
		  executeobject.command.environment.platform='local';          // used for server testing
		  executeobject.command.processfn="execute_function";          // what function handles functions

		  executeobject.command.xrun={"executethis": 'test_return_noerror_result_local'};

		  var etEnvironment = new DriEnvironment(executeobject.command.environment);
		  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
		  {        
				var result_assertion={"a":"b", "env":executeobject.command.environment.platform};               
				proxyprinttodiv('expected error', null, 99);
				proxyprinttodiv('actual error', error_obj, 99);
				proxyprinttodiv('expected result', result_assertion, 99);
				proxyprinttodiv('actual result', result_obj, 99);

				var composite_obj = logverifycomplex("local_serieslevel0pass1", result_obj, result_assertion, error_obj, null);
				proxyprinttodiv('composite_obj', composite_obj, 99);
				callback(null, composite_obj)
		  });

	};
	
	// series, level 0, tries to execute a function that only exists on server and so should fail
	exports.local_serieslevel0fail1 = 
	local_serieslevel0fail1 = 
	function local_serieslevel0fail1(executeobject, callback) 
	{
		  if (!executeobject.command) {
              executeobject.command={};
              executeobject.command.environment={};
              executeobject.command.environment.run={};
          }
		  
          //executeobject.command.environment.run.type="series"
          executeobject.command.executetype="series"
		  executeobject.command.environment.run.executelevel=0;
		  executeobject.command.environment.platform='local';          // used for server testing
		  executeobject.command.processfn="execute_function";          // what function handles functions

		  executeobject.command.xrun={"executethis": 'test_return_noerror_result_server'};

		  var etEnvironment = new DriEnvironment(executeobject.command.environment);
		  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
		  {        
				//var result_assertion={"a":"b", "env":executeobject.command.environment.platform};               
				proxyprinttodiv('expected error', global_failnotfound, 99);
				proxyprinttodiv('actual error', error_obj, 99);
				proxyprinttodiv('expected result', null, 99);
				proxyprinttodiv('actual result', result_obj, 99);

				var composite_obj = logverifycomplex("local_serieslevel0pass1", result_obj, null, error_obj, global_failnotfound);
				proxyprinttodiv('composite_obj', composite_obj, 99);
				callback(null, composite_obj)
		  });

	};