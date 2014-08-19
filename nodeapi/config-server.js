// copyright (c) 2014 DRI 

// eventdeviceready() call to set up defaults 

// if(typeof localStorage === "undefined"){
// if (!exports) {
//     var exports = {};
// }

// if (!Debug) { // printdiv
//    global.Debug = 'false';
//}
//if (!debuglevel) { // printdiv
//    global.debuglevel = 0;
//}
//if (!debugon) { // debugfn
//   global.debugon = false;
//}


// var configuration = {};

function config123() {
    var configuration = {}; // {d:{environment:{}}};
    // what environment and what defaults should be used
    configuration.environment = 'server';
    configuration.machinename = 'test3';
    configuration.syncrule = 'create_what_to_do_list';
    configuration.collection = 'dricollection';
    configuration.db = 'data';
    configuration.datastore = 'mongo';
    configuration.keycollection = configuration.collection+'key';
    // configuration.defaultmongodb = 'wikiwallettesting'  // *******
    configuration.databasetable = 'dricluster';

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

// this is called from eventdeviceready after all files are loaded
function setdefaultparm() {
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
}


// these are executed before other files load
global.config = config = config123();
config.setdefaultparm = setdefaultparm;
global.environment = "server";

// the line below determines if all the prints are enabled or not
global.Debug = 'true';

global.debuglevel = 0;
global.debugon = false;
//var consolere = require('console-remote-client').connect('console.re','80','dev-dri');
//console.re.log('remote log test');
//global.localStorage = exports.localStorage = {};


// these are internal to this file
var needle = require('needle');
var twilio = require('twilio')('AC909f1981261f4461abbc7985bd202897', '7bb26fabe1f818f11f4a178359e0f19a');
var spawn = require('child_process').spawn;
var url = require('url');
var querystring = require('querystring');
var https = require('https');
var fs = require('fs');

exports.test2 = test2 = function test2(name, callback) {
    var default_name = 'stranger';
    var use_name = name || default_name;

    callback(
        null, {
            "test": "test2 on server called, modified by " + JSON.stringify(use_name)
        }
    );
};


exports.getfromangular = getfromangular = function getfromangular(params, callback) {
    // this is a dummy getfromangular call for server use
    callback(null, {});
};


// Utility function to return json with all keys in lowercase
// function toLowerKeys(obj) {
//     var key, keys = Object.keys(obj);
//     var n = keys.length;
//     var newobj = {};
//     while (n--) {
//         key = keys[n];
//         newobj[key.toLowerCase()] = obj[key];
//     }
//     return newobj;
// }



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
        callerTo = '+12145644732';
        messageBody = 'Hello russ';
    }
    var twilioURI = twilioBasePath + '/' + twilioFunction;
    var callHTML = 'https://' + twilioHost + twilioURI;

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


// exports.gitPullEtCore = gitPullEtCore = function gitPullEtCore(params, cb) {
//     var cmd = 'git';
//     var cwd = '/Code/Dri/server-code/nodejsmtapi';
//     var args = ['pull'];
//     var options = {
//         'cwd': cwd
//     };
//     console.log('calling ' + cmd + args.join(' '));

//     var git = spawn(cmd, args, options);

//     git.stdout.on('data', function (data) {
//         console.log('git output: ' + data);
//     });

//     git.on('close', function (return_code) {
//         console.log('gitPullEtCore has completed');
//         cb(return_code, return_code);
//     });
// };



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

exports.anyserver = anyserver = function anyserver(params, callback) {
    // 
    var server = params.server;
    delete params.server
    var serverUrl = 'http://'+server+'/executethis';

    var options = {
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        }
    };

    needle.put(serverUrl, JSON.stringify(params), options, function (err, response, body) {
        callback(err, body);
    });
};


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


exports.publishtestdelay = publishtestdelay = function publishtestdelay(parameters, callback) {
        // publishtest(parameters, callback);
        parameters.command =  parameters.command || {};
        parameters.command.queuename = "eventonemin";
        parameters["addthis.executethis"] = "publishtest";
        savetoqueue(parameters, callback);
};

    // Get parameters from github, pass it on to publish test

exports.publishtest = publishtest = function publishtest(parameters, callback) { 
        // listToDo, eventname, callback) {
        console.log('---- publishtest??-');
        console.log(JSON.stringify(parameters));

        var pusher_name = "Unknown";
        if (parameters.hasOwnProperty("pusher")) {
            if (parameters["pusher"].hasOwnProperty("name")) {
                pusher_name = parameters["pusher"]["name"];
            }
        }
        var repo_name = "Unknown";
        if (parameters.hasOwnProperty("repository")) {
            if (parameters["repository"].hasOwnProperty("name")) {
                repo_name = parameters["repository"]["name"];
            }
        }
        var ref = "Unknown";
        if (parameters.hasOwnProperty("ref")) {
            ref = parameters["ref"];
        }

        var dadata = parameters["command"];
        for (key in dadata)
        {
            console.log("Key: " + key + " : " + dadata[key]);
        }

        var pass_on_object = {
            "pusher_name" : pusher_name,
            "repo_name" : repo_name,
            "ref" : ref
        }
        console.log('>-->>>');
        console.log('--- calling sendPostCall ---');

        // TODO: Create a function that given the REF of the COMMIT
        //       from GITHUB.COM Webhook it will return it will return
        //       the NAME of the server.  
        // 
        //      .  
        var server = "";
        if (repo_name ==="test3") {
            server=repo_name + ".dripoint.com";
        }
        var executeobject = {};
        executeobject.executethis="getuptime"
        executeobject.server = server;
        
        var default_number = '+12145644732';
        default_number = '+12313133930';
        var pusher_numbers = {
            'rogerjs' : '+12145644732',
            'info@dri.com' : default_number,
            'Jason' : '+12317352532'
        }
        var text2number = default_number;
        if (pusher_numbers.hasOwnProperty( pusher_name )) {   
            text2number = pusher_numbers[pusher_name];
        }
        anyserver(executeobject,function(err, result) {

            //getuptime(null, function(err, result) {
            var passfail = "Unknown";
            if (result.status) {
                passfail = "Pass";
            } else {
                passfail = "Fail";
            } 
            sendsms({
                'to': text2number,
                'body': 'publishtest - status: ' + passfail + ', user: ' + pusher_name + 
                    ", repo name: " + repo_name + ', ref: ' + ref  
                }, 
                function (err, result) {
                    callback(err, result);
                }
            );
        });

        //sendPostCall({"post_data":parameters}, function(err, result) {
        //    console.log("call to sendPostCall has returned...");
        //    }
        //);
        console.log('---- publishtest!!---');

};


//var startTime = new Date();
exports.getuptime = getuptime = function getuptime(params, callback) {
    console.log(">>>>>>>-----------=======-----==-=-=-=-=-=-=---=-=-------======----------");
    var execObj = [{
        "executethis" : "getwid",
        "command": {
            "datastore": "localstore" // config.configuration.datastore,
        },
        "wid": "bootwid"
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
            res.sms = '+12145644732';
            callback(err, res)
        }
    );
}



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

// sendpostcall = function sendpostcall(parameters, callback) {
//     console.log(' ??? sendPostCall started ???');
//     // var post_host = 'test3.dripoint.com';
//     var post_port = 80;
//     //var post_uri = '/executethis?executethis=publishtest';
//     var post_host = 'requestb.in';
//     var post_uri = '/t0y6i6t0';
//     var post_data_raw = parameters['post_data'];
//     var post_data = querystring.stringify(post_data_raw);
//     var post_options = {
//         host: post_data,
//         port: post_port,
//         path: post_uri,
//         method: 'POST',
//         headers: {
//             'Content-type': 'application/x-www-form-urlencoded',
//             'Content-length': post_data.length
//         }
//     }
//     var options = {
//         headers: {
//             "Content-Type": "application/json; charset=utf-8"
//         }
//     };

//     // cleanup request for server2 :: GET REVIEWED BY ROGER

//     // Setup the request
//     var serverUrl = 'http://requestb.in/t0y6i6t0';
//     var params = parameters;
//     needle.post(serverUrl, JSON.stringify(params), options, function (err, response, body) {
//         callback(err, body);
//     });

//     console.log("post_data --- veru emd of the file.");
// };


