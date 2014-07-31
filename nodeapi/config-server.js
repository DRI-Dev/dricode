// copyright (c) 2014 DRI 

// eventdeviceready() call to set up defaults 

// if(typeof localStorage === "undefined"){
// if (!exports) {
//     var exports = {};
// }

if (!Debug) { // printdiv
    var Debug = 'false';
}
if (!debuglevel) { // printdiv
    var debuglevel = 0;
}
if (!debugon) { // debugfn
    var debugon = false;
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


var needle = require('needle');
var twilio = require('twilio')('AC909f1981261f4461abbc7985bd202897', '7bb26fabe1f818f11f4a178359e0f19a');
var spawn = require('child_process').spawn;
var url = require('url');

exports.consolere = require('console-remote-client').connect('console.re','80','dev-dri');
exports.console = exports.consolere;

var localStorage = exports.localStorage = {};

exports.environment = 'server';
exports.server = 'server1';


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

    exports.environment = "server";
    exports.Debug = Debug;
    exports.debuglevel = debuglevel;
}

// exports.Debug = Debug = 'false';
// exports.debuglevel = debuglevel = 0;
// exports.widMasterKey = widMasterKey = "widmaster_";
// exports.test_results = test_results = {};
// exports.potentialwid = potentialwid = 0;

// //do not change these constants
// exports.debugon = debugon = true;
// exports.debugname = debugname = "";
// exports.debugsubcat = debugsubcat = "";
// exports.debugcat = debugcat = "";
// exports.debugfilter = debugfilter = "";
// exports.debugdestination = debugdestination = 1;
// exports.debugcolor = debugcolor = 0;
// exports.debugindent = debugindent = 0;
// exports.environment = environment = 'server';
// exports.debuglinenum = debuglinenum = 1;

// function setdefaultparm() {
//     localStore.clear();
//     Debug = 'false'; // **** Saurabh ::  changed to make node compatible ****
//     debuglevel = 0;
//     widMasterKey = "widmaster_";
//     test_results = {};
//     potentialwid = 0;
//     debugon = false;
//     debugname = "";
//     debugsubcat = "";
//     debugcat = "";
//     debugfilter = "";
//     debugdestination = 1;
//     debugcolor = 0;
//     debugindent = 0;
//     debuglinenum = 1;
//     environment = "server";
//     exports.environment = environment;
//     test_results = {}; // can take out
//     debuglog = {};
//     exports.debuglog = debuglog;
//     exports.Debug = Debug;
//     exports.debuglevel = debuglevel;
//     exports.widMasterKey = widMasterKey;
//     exports.test_results = test_results;
//     exports.potentialwid = potentialwid;
//     exports.debugon = debugon;
//     exports.debugname = debugname;
//     exports.debugsubcat = debugsubcat;
//     exports.debugcat = debugcat =
//     exports.debugfilter = debugfilter;
//     exports.debugdestination = debugdestination;
//     exports.debugcolor = debugcolor;
//     exports.debugindent = debugindent;
//     exports.debuglinenum = debuglinenum;
// }


function config123() {
    //var configuration = {d:{environment:{}}};

    var configuration = {};
    
    // what environment and what defaults should be used
    configuration.environment = 'server';
    configuration.syncrule = 'create_what_to_do_list';
    configuration.collection = 'dricollection';
    configuration.db = 'data';
    configuration.datastore = 'mongo';
    configuration.keycollection = configuration.collection+'key';
    // configuration.defaultmongodb = 'wikiwallettesting'  // *******
    configuration.databasetable = 'wikiwallettesting';

    // configuration.e is the wid name for "environment"
    configuration.e = configuration.databasetable+"_"+configuration.collection+"_"+ "environment";

    // configuration.d are the defaults that should be copied into command.environment during each execute
    configuration.d = {};
    configuration.d.default = {};
    configuration.d.default.collection = configuration.collection;
    configuration.d.default.db = configuration.db;
    configuration.d.default.datastore =  configuration.datastore;
    configuration.d.default.keycollection = configuration.keycollection;
    configuration.d.default.databasetable = configuration.databasetable;
    configuration.d.default.executetype = "series";

//    configuration.default.platform = configuration.environment;
    configuration.d.global = {};
    configuration.d.var = {};
    configuration.d.platform = configuration.environment;
    configuration.d.syncrule = configuration.syncrule;
//    configuration.default.syncrule = configuration.syncrule;
    configuration.d.run = {};
    configuration.d.run.executelevel=0;
    // configuration.d.environment = {};
    // configuration.d.environment.platform = configuration.environment;
    // configuration.d.environment.syncrule = "sync_local_server";
    // configuration.widmasterkey = 'widmasterkey';
    configuration.defaultenvironment = {};
    configuration.defaultenvironment[configuration.db] = configuration.d;
    //configuration.defaultenvironment[configuration.db].wid = configuration.e;
    
    return {
        "configuration": configuration
    };
}

// *********** EVENTS **************************************************
exports.eventappinstall = eventappinstall = function eventappinstall() {
    if (exports.environment === 'local') { // only clear local storage locally
        clearLocalStorage()
    }
};

exports.eventdeviceready = eventdeviceready = function eventdeviceready(params, callback) {
    setdefaultparm();
    //if (!getFromLocalStorage(config.configuration.defaultkeycollection)) {
    if (Object.keys(config).length === 0) { // this will never happen on server
        eventappinstall();
    }

    // start eventonemin, eventtenmin and save the interval value so 
    // you can use "clearInterval" in the future if desired to stop things
    var minute = 60 * 1000;
    var day = minute * 60 * 24;
    setInterval(eventonemin, 1 * minute);
    setInterval(eventtenmin, 10 * minute);
    setInterval(eventdaily, 1 * day);

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
//    proxyprinttodiv("eventonemin", 'one sec', 30);
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
    callback(null,null);
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
//    proxyprinttodiv("getexecutelist eventname(collection)", eventname, 17);
//    proxyprinttodiv("getexecutelist eventtype(databasetable)", eventtype, 17);
    var executeobject = {"command": {"result": "queryresult"}};
    var executetodolist=[];
    executeobject.command.databasetable = eventtype;
    executeobject.command.collection = eventname;
    executeobject.command.db = "queuedata";
    //executeobject.command.result = "queueresult";
    executeobject["executethis"] = "querywid";
    //executeobject["mongorawquery"] = { "queuedata" : { "$gt": {} }}; // find objects that are not empty
    executeobject["mongorawquery"] = {"$and": [{"wid": "doesnotmatter"}]}   
//    proxyprinttodiv("getexecutelist querywid executeobject", executeobject, 17);
    
    execute(executeobject, function (err, res) {
//        proxyprinttodiv("getexecutelist mongorawquery res", res, 17);
        if (res.length === 0) {
            executetodolist = [];
        }
        else if(res[0] && res[0]["queryresult"]){
            for (var everyaction in res[0]["queryresult"]){
//                proxyprinttodiv("getexecutelist mongorawquery queryresult everyaction", everyaction, 17);
                //if (res[0]["queryresult"][everyaction]
                executetodolist.push(res[0]["queryresult"][everyaction]);
            }

        }
        callback(null, executetodolist);
    })
};






function executeAjax(allConfig, executeItem, callback, returnCallback) {
    // var result;
    // var success = false;
    // result = "";

    // //executeItem = "[" + JSON.stringify(executeItem) + "]";
    // executeItem = JSON.stringify(executeItem);
    // $.ajax({
    //     type: 'PUT',
    //     dataType: 'json',
    //     url: '/executethis',
    //     headers: {
    //         'content-type': 'Application/json'
    //     },
    //     global: 'false',
    //     cache: 'false',
    //     async: 'false',
    //     data: executeItem,
    //     success: function(data) {
    //         // alert(JSON.stringify(data));
    //         if (data.error) {
    //             result = "<pre> APPLICATION ERROR: </pre>" + JSON.stringify(data);
    //         } else {
    //             if (Object.keys(data).length > 0) {
    //                 result = "<pre> SUCCESS: </pre>" + JSON.stringify(data);
    //             } else {
    //                 result = "<pre> <<< No Data Returned >>> </pre>";
    //             }
    //         }
    //         callback(data, allConfig, 'html', returnCallback);
    //     },
    //     error: function(data) {
    //         alert(JSON.stringify(data));
    //         result = "FAILED TO CALL EXECUTETHIS " + JSON.stringify(data);
    //         callback(data, allConfig, 'html', returnCallback);
    //     }
    // });
}

// Primary execute function called after doThis

exports.test2 = test2 = function test2(name, callback) {
    var default_name = 'stranger';
    var use_name = name || default_name;

    callback(
        null, {
            "test": "test2 on server called, modified by " + JSON.stringify(use_name)
        }
    );
};

exports.sayHello = sayHello = function (params, callback) {

};

// Utility function to return json with all keys in lowercase

function toLowerKeys(obj) {
    var key, keys = Object.keys(obj);
    var n = keys.length;
    var newobj = {};
    while (n--) {
        key = keys[n];
        newobj[key.toLowerCase()] = obj[key];
    }
    return newobj;
}

var querystring = require('querystring');
var https = require('https');
var fs = require('fs');

exports.twilioPassThrough = function (params, callback) {
    //    proxyprinttodiv('twilioPassThrough started', 99);

    // Twilio Credentials 
    var accountSid = 'AC909f1981261f4461abbc7985bd202897';
    var authToken = '7bb26fabe1f818f11f4a178359e0f19a';

    // Twilio constants used in all functions
    var twilioHost = 'api.twilio.com';
    var twilioApiVersion = '2010-04-01';
    var twilioPort = 443;
    var twilioBasePath = '/' + twilioApiVersion + '/Accounts/' + accountSid;
    var callerFrom = '+12312259665'; // Who will this call appear to originate from?
    // this number MUST be registered with our
    // twilio account or the call will fail
    // leave AS-IS or update twilio

    // Pull out the parameters from the function
    var twilioFunction = params['twilioFunction'];
    var callerTo = params['callNumber'];
    var messageBody = params['messageBody'];


    // Override parameters for testing
    if (false) {
        twilioFunction = 'Messages.json';
        callerTo = '+12313133930';
        messageBody = 'Hello russ';
    }
    var twilioURI = twilioBasePath + '/' + twilioFunction;
    var callHTML = 'https://' + twilioHost + twilioURI;

    //    proxuprinttodiv('Calling twilio function ' + twilioURI );

    //// Maximum size of the message is 1600 characters
    //if (messageBody)
    //{
    //    messageBody = messageBody.substr(0,1599);
    //} else {
    //    // no message body - abort
    //    console.log('Message body paramter missing.  Aborting function');
    //    return
    //}

    //// Build the post data object
    //var post_data = querystring.stringify({
    //        'From': callerFrom,
    //        'To': callerTo,
    //        'Body': messageBody ,                         
    //    }
    //);

    // Pass through the paramters
    var twilioParameters = params['twilioParameters'];
    twilioParameters.From = callerFrom;
    var post_data = querystring.stringify(params['twilioParameters']);

    // Build the post options
    //    proxyprinttodiv('URI = ' + twilioURI);
    //    proxyprinttodiv('HOST = ' + twilioHost);
    var post_options = {
        host: twilioHost,
        port: twilioPort,
        path: twilioURI,
        method: 'POST',
        strictSSL: false,
        secureProtocol: 'SSLv3_client_method',
        auth: accountSid + ':' + authToken,
        headers: {
            'Content-type': 'application/x-www-form-urlencoded',
            'Content-length': post_data.length
        }
    };

    // Setup the request
    var post_request = https.request(post_options, function (res) {
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            //            proxyprinttodiv('Response: ' + chunk);

            // assumes response is 1 chunk
            callback(null, {
                "test": "success"
            });
        });
    });

    //post the data
    post_request.write(post_data);
    post_request.end();


};


exports.gitPullEtCore = gitPullEtCore = function gitPullEtCore(params, cb) {
    var cmd = 'git';
    var cwd = '/Code/Dri/server-code/nodejsmtapi';
    var args = ['pull'];
    var options = {
        'cwd': cwd
    };


    console.log('calling ' + cmd + args.join(' '));

    var git = spawn(cmd, args, options);

    git.stdout.on('data', function (data) {
        console.log('git output: ' + data);
    });

    git.on('close', function (return_code) {
        console.log('gitPullEtCore has completed');
        cb(return_code, return_code);
    });
};




// send an SMS to someone
// - parameters -
//  To: phone number of who to send message to in +12315551212 format
//  Body: text of the message to send, max 1600 characters
exports.sendsms = sendsms = function (params, cb) {
    var twilioFunction = 'Messages.json';
    var twilioParameters = {
        'To': params['to'],
        'Body': params['body']
    };
    exports.twilioPassThrough({
            'twilioFunction': twilioFunction,
            'twilioParameters': twilioParameters
        },
        function (err, result) {
            cb(err, result);
        }
    );
};

//// lets test that function we just created
//exports.twilioPassThrough( {
//    'twilioFunction': 'Messages.json', 
//    'twilioParameters': {
//        'To': '+12313133930',
//        'Body': 'This is a new text message for you'
//    }
//}, function() { console.log('123'); } );

exports.server = server = function server(params, callback) {
    // set up object in syntax that driApi is expecting
    // also get getdata/<action> action from params object
    console.log('>>> server');
    var serverUrl = 'http://wiziapi.drillar.com/ButtonServe.svc/GetData/getalldata?accessToken=2afe5025-1964-4c50-abcf-bcd558188e74',
        driExecuteObj = {
            actionQueryString: params.dri_action,
            parameterDTOs: []
        };

    // convert passed in object to parameterdto list
    for (var prop in params) {
        if (params.hasOwnProperty(prop)) {
            driExecuteObj.parameterDTOs.push({
                ParameterName: prop,
                ParameterValue: 'eq:' + params[prop]
            });
        }
    }

    // if params has an executethis value but no wid value then use executethis as the wid
    if (params.hasOwnProperty('executethis') && !params.hasOwnProperty('wid')) {
        params.wid = params.executethis;
        delete params['executethis'];
    }

    //    driExecuteObj = [{
    //        "ParameterName": "wid",
    //        "ParameterValue": "eq:GetCodyTestSMS"
    //    }];

    var options = {
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        }
    };

    needle.put(serverUrl, JSON.stringify(driExecuteObj), options, function (err, response, body) {
        // convert returned list of DataModelDTOs to an object
        var resultsObj = {};
        for (var i = 0; i < body.length; i++) {
            resultsObj[body[i].Key] = body[i].Value;
        }

        callback(err, resultsObj);
    });
};

exports.server2 = server2 = function server2(params, callback) {
    // set up object in syntax that driApi is expecting
    // also get getdata/<action> action from params object
    console.log('>>> server 2');
    var serverUrl = 'http://95.85.55.218/executethis';

    var options = {
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        }
    };

    // cleanup request for server2 :: GET REVIEWED BY ROGER
    delete params['command'];
    delete params['command.debug'];
    delete params['configuration'];

    needle.put(serverUrl, JSON.stringify(params), options, function (err, response, body) {
        callback(err, body);
    });
};


//exports.getDriApiData = getDriApiData = function getDriApiData(params, callback) {
//    // set up object in syntax that driApi is expecting
//    // also get getdata/<action> action from params object
//    console.log('>>> getDriApiData' + getDriApiData);
//    var driExecuteObj = {
//         actionQueryString: 'getalldata',
//         parameterDTOs: []
//    };
//
//    // convert passed in object to parameterdto list
//    for (var prop in params) {
//         if (params.hasOwnProperty(prop)) {
//             driExecuteObj.parameterDTOs.push({
//                 ParameterName: prop,
//                 ParameterValue: 'eq:' + params[prop]
//             });
//         }
//    }
//
//    needle.put('/getdata?accessToken=2afe5025-1964-4c50-abcf-bcd558188e74', driExecuteObj,
//        function (err, response, body) {
//            // convert returned list of DataModelDTOs to an object
//            var resultsObj = {};
//            for (var i = 0; i < results.length; i++) {
//                 resultsObj[body[i].Key] = body[i].Value;
//            }
//
//            callback(err, resultsObj);
//        });
//
////    var driExecuteObj = [{
////        "ParameterName": "wid",
////        "ParameterValue": "eq:GetCodyTestSMS"
////    }];
//
////    needle.put('http://wiziapi.drillar.com/ButtonServe.svc/GetData/getalldata?accessToken=2afe5025-1964-4c50-abcf-bcd558188e74', driExecuteObj, function (err, response, body) {
////        // convert returned list of DataModelDTOs to an object
////        // var resultsObj = {};
////        // for (var i = 0; i < results.length; i++) {
////        //     resultsObj[results[i].Key] = results[i].Value;
////        // }
////        console.log(JSON.stringify(response));
////
////        callback(null, response);
////    });
//
//};

// exports.convertfromdriformat = convertfromdriformat = function convertfromdriformat(widobject, command) {
//     var outobject = {};
//     var db = "data";
//     if (command && command.db) {
//         db = command.db
//     }

//     //widobject = ConvertToDOTdri(widobject); // in case db=a.b.c nested object sent in

//     if ((widobject) && (Object.keys(widobject).length > 0)) {
//         if (widobject[db]) {
//             outobject = widobject[db];
//         }

//         if (widobject['wid']) {
//             outobject['wid'] = widobject['wid'];
//         } else {
//             outobject['wid'] = "";
//         }

//         if (widobject['metadata']) {
//             // deleting date from metadata, this is a fix for ag3
//             if (widobject['metadata']['date']) {
//                 delete widobject['metadata']['date'];
//             }
//             outobject['metadata'] = widobject['metadata'];

//         } else {
//             outobject['metadata'] = "";
//         }
//         outobject = ConvertToDOTdri(outobject);
//     }
//     return outobject;
// };

// exports.converttodriformat = converttodriformat = function converttodriformat(inputObject, command) {
//     var inputWidgetObject = JSON.parse(JSON.stringify(inputObject));
//     delete inputWidgetObject['executethis'];
// //    proxyprinttodiv('Function updatewid in : inputWidgetObject', inputWidgetObject, 1);
//     var saveobject = {};
//     var db = "data";
//     var wid;
//     var metadata;
//     var date;
//     if (command && command.db) {
//         db = command.db
//     }

//     inputWidgetObject['metadata.date'] = new Date();

//     inputWidgetObject = ConvertFromDOTdri(inputWidgetObject);
//     if (inputWidgetObject['wid']) {
//         wid = inputWidgetObject['wid'];
//         delete inputWidgetObject['wid']
//     }
//     if (inputWidgetObject['metadata']) {
//         metadata = inputWidgetObject['metadata'];
//         delete inputWidgetObject['metadata']
//     }

//     saveobject[db] = inputWidgetObject;
//     saveobject['wid'] = wid;
//     saveobject['metadata'] = metadata;

// //    proxyprinttodiv('Function updatewid in : saveobject II', saveobject, 1);
//     return saveobject;
// };


eventdeviceready({}, function (err, res) {
});

sendsms({
    'tonumber': '+12313133930',
    'msgbody': 'This the server- I just restarted '
}, function (err, result) {
    //console.log('running');
});

exports.getPropertyOrDefault = getPropertyOrDefault = function(params, propName, defaultValue) {
    if (params.hasOwnProperty(propName)) {
        return params[propName];
    } else {
        return defaultValue;
    }
};

exports.zapier_passthrough = zapier_passthrough = function(params, cb) {
    //var zapURL = 'https://zapier.com/hooks/catch/gurm8/';
    //jQuery.getJSON(zapURL, onZapSent);
    var zapURL = getPropertyOrDefault(params, 'zapURL', '');
    var zapParams = getPropertyOrDefault(params, 'zapParams', {} );

    var urlObj = url.parse(zapURL);
    var zapHost = urlObj.host;
    var zapPort = 443;
    var post_data = querystring.stringify(zapParams);
    var post_options = {
        host: zapHost,
        port: zapPort,
        path: zapURL,
        method: 'POST',
        strictSSL: false,
        secureProtocol: 'SSLv3_client_method',
        // auth: accountSid + ':' + authToken,
        headers: {
            'Content-type': 'application/x-www-form-urlencoded',
            'Content-length': post_data.length
        }
    };
    
    // Setup the request
    var post_request = https.request(post_options, function (res) {
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            //            proxyprinttodiv('Response: ' + chunk);

            // assumes response is 1 chunk
            cb(null, {
                "test": "success"
            });
        });
    });

    //post the data
    post_request.write(post_data);
    post_request.end();

};

zapier_passthrough(
    {'zapURL':'https://zapier.com/hooks/catch/gurm8/','zapParams':{'87': __dirname}}, 
    function(err, res) {
        console.log('The pass through function has ended.');
        console.log('God save the queen');
    }
); 

	// series, level 0, 1 function that passes on the server
	exports.server_serieslevel0pass1 = 
	server_serieslevel0pass1 = 
	function server_serieslevel0pass1(executeobject, callback) 
	{
		  if (!executeobject.command) {
              executeobject.command={};
              executeobject.command.environment={};
              executeobject.command.environment.run={};
          }
		  
		  executeobject.command.environment.run.type="series"
		  executeobject.command.environment.run.executelevel=0;
		  executeobject.command.environment.platform='server';          // used for server testing
		  executeobject.command.environment.processfn="execute_function";          // what function handles functions

		  executeobject.command.xrun={"executethis": 'test_return_noerror_result_server'};

		  var etEnvironment = new DriEnvironment(executeobject.command.environment);
		  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
		  {        
				var result_assertion={"a":"b", "env":executeobject.command.environment.platform};               
				proxyprinttodiv('expected error', null, 99);
				proxyprinttodiv('actual error', error_obj, 99);
				proxyprinttodiv('expected result', result_assertion, 99);
				proxyprinttodiv('actual result', result_obj, 99);

				var composite_obj = logverifycomplex("server_serieslevel0pass1", result_obj, result_assertion, error_obj, null);
				proxyprinttodiv('composite_obj', composite_obj, 99);
				callback(null, composite_obj)
		  });

	};

	// series, level 0, 1 : server tries to find a function that only exists locally and so fails
	exports.server_serieslevel0fail1 = 
	server_serieslevel0fail1 = 
	function server_serieslevel0fail1(executeobject, callback) 
	{
		  if (!executeobject.command) {
              executeobject.command={};
              executeobject.command.environment={};
              executeobject.command.environment.run={};
          }
		  
		  executeobject.command.environment.run.type="series"
		  executeobject.command.environment.run.executelevel=0;
		  executeobject.command.environment.platform='server';          // used for server testing
		  executeobject.command.environment.processfn="execute_function";          // what function handles functions

		  executeobject.command.xrun={"executethis": 'test_return_noerror_result_local'};

		  var etEnvironment = new DriEnvironment(executeobject.command.environment);
		  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
		  {        
				//var result_assertion={"a":"b", "env":executeobject.command.environment.platform};               
				proxyprinttodiv('expected error', global_failnotfound, 99);
				proxyprinttodiv('actual error', error_obj, 99);
				proxyprinttodiv('expected result', null, 99);
				proxyprinttodiv('actual result', result_obj, 99);

				var composite_obj = logverifycomplex("server_serieslevel0fail1", result_obj, null, error_obj, global_failnotfound);
				proxyprinttodiv('composite_obj', composite_obj, 99);
				callback(null, composite_obj)
		  });

	};
	
// server tests
exports.test_return_noerror_result_server = test_return_noerror_result_server = function test_return_noerror_result_server (param, callback) 
{
    // debugger;
    proxyprinttodiv('test_return_noerror_result_server- incoming parm', param, 99);
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

exports.getfromangular = getfromangular = function getfromangular(params, callback) {
    // this is a dummy getfromangular call for server use
    callback(null, {});
};


//var startTime = new Date();
exports.getuptime = getuptime = function getuptime(params, callback) {
    console.log(">>>>>>>-----------=======-----==-=-=-=-=-=-=---=-=-------======----------");
    var execObj = [{
        "executethis" : "getwid",
        "wid": "russwid"
    }];
    execute(execObj, function (err, res) {
            res = res[0][0];
            var startTime = res.starttime;
            var now = new Date().getTime();
            var howLong = Math.floor((now - startTime)/1000) ;
            var currentUser = params.currentuser;

            console.log("How Long is " + howLong);
            var tooLong = 30;
            var upStatus = (howLong < tooLong);
            console.log("RESULT is " + JSON.stringify(res));
            res.status = upStatus;
            res.uptime = howLong;
            res.currentuser = currentUser; 
            res.sms = '+12313133930';
            callback(err, res)
        }
    );
}
