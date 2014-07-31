// using common files at server side also
exports.async = async = require('async');

require('./create_config.js');
require('./config.js');

exports.window = {"configuration":config.configuration};

var express = require('express'),
    app = express(),
    http = require('http'),
    needle = require('needle'),
    request = require('request'),
    server = require('./routes/server'),
    convert = require('./routes/convert.js'),
    querystring = require('querystring'),
    imageService = require('./routes/images.js');



//// *********************** Express Application Configuration follows   *********************** 
app.configure(function() {
    app.enable('trust proxy');
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());

    // Add headers
    app.use(express.static(__dirname + '/../dripoint'));
    app.use(function(req, res, next) {

        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', '*');

        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);

        // Pass to next layer of middlewaresssss
        next();
    });

    app.use(app.router);
    app.set('html', __dirname + '/html');
    app.use("/css", express.static(__dirname + '/views/css'));
    app.use("/js", express.static(__dirname + '/views/js'));
    app.engine('html', require('ejs').renderFile);
});

app.configure('development', function() {
    app.use(express.errorHandler());
});

//// *********************** Route Mapping for Application follows   ***********************
app.put('/executethis', server.postputgetrunExecutethis);
app.post('/executethis', server.postputgetrunExecutethis);
app.get('/executethis', server.postputgetrunExecutethis);
// app.put('/executethis', server.putrunExecutethis);
app.put('/filetowid', convert.convertFileToWid);
app.put('/base64toserver', imageService.saveBase64ToServer);

console.log('server config is ' + serverconfig.SERVER_PORT);

console.log('port is ' + serverconfig.SERVER_PORT);
app.listen(process.env.PORT || serverconfig.SERVER_PORT);


    exports.publishtestdelay = publishtestdelay = function publishtestdelay(parameters, callback) {
        // callback(err, res);
        publishtest(parameters, callback);
        /***
        var post_data = querystring.stringify(parameters);
        var post_host = 'test3.dripoint.com';
        var post_port = 80;
        var post_uri = '/executethis?executethis=publishtest';
        var post_options = {
            host: post_data,
            port: post_port,
            path: post_uri,
            method: 'POST',
            headers: {
                'Content-type': 'application/x-www-form-urlencoded',
                'Content-length': post_data.length
            }
        }

        // Setup the request
        var post_request = http.request(post_options, function (res) {
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
        **/
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

        getuptime(null, function(err, result) {
            var passfail = "Unknown";
            if (result.status) {
                passfail = "Pass";
            } else {
                passfail = "Fail";
            } 
            sendsms({
                'to': '+12313133930',
                'body': 'publishtest - status: ' + passfail + ', user: ' + pusher_name + 
                    ", repo name: " + repo_name + ', ref: ' + ref  
                }, 
                callback
            );
        });
        //sendPostCall({"post_data":parameters}, function(err, result) {
        //    console.log("call to sendPostCall has returned...");
        //    }
        //);
        console.log('---- publishtest!!---');

    };

sendpostcall = function sendpostcall(parameters, callback) {
    console.log(' ??? sendPostCall started ???');
    // var post_host = 'test3.dripoint.com';
    var post_port = 80;
    //var post_uri = '/executethis?executethis=publishtest';
    var post_host = 'requestb.in';
    var post_uri = '/t0y6i6t0';
    var post_data_raw = parameters['post_data'];
    var post_data = querystring.stringify(post_data_raw);
    var post_options = {
        host: post_data,
        port: post_port,
        path: post_uri,
        method: 'POST',
        headers: {
            'Content-type': 'application/x-www-form-urlencoded',
            'Content-length': post_data.length
        }
    }
    var options = {
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        }
    };

    // cleanup request for server2 :: GET REVIEWED BY ROGER

    // Setup the request
    var serverUrl = 'http://requestb.in/t0y6i6t0';
    var params = parameters;
    needle.post(serverUrl, JSON.stringify(params), options, function (err, response, body) {
        callback(err, body);
    });

    console.log("post_data --- veru emd of the file.");
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
//    var startTime = new Date().getTime().toString();
//    execute({
//        "executethis":"addwidmaster",
//        "wid":"russwid",
//        "starttime": startTime
//        , "a": "ee"
//        }, function (err, res) {
//            console.log("Res is " + res.toString() );
//        }
//    );

