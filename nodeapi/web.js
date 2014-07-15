// using common files at server side also
exports.async = async = require('async');

require('./create_config.js');
require('./config.js');

exports.window = {"configuration":config.configuration};

var express = require('express'),
    app = express(),
    request = require('request'),
    server = require('./routes/server'),
    convert = require('./routes/convert.js'),
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




    exports.saveexecuteevent = saveexecuteevent = function saveexecuteevent(eventname, callback) {
        callback(null,null)

        };

    exports.processevent = processevent = function processevent(eventname, callback) {
        callback(null,null);
        proxyprinttodiv("processeventqueue eventname----", eventname, 11);
//        getexecutelist(eventname, "queuecollection", function (err, executetodolist) {
//            proxyprinttodiv("processeventqueue executelist", executetodolist, 17);
//            executelistfn(executetodolist, execute, function (err, res) {
//                deletelist(executetodolist, eventname, function (err, res) {
//                    callback(err, res);
//                    });
//                });
//            });
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
        executeobject.command.notfoundok = true;
        executeobject["executethis"] = "querywid";
        //executeobject["mongorawquery"] = { "queuedata" : { "$gt": {} }}; // find objects that are not empty
        executeobject["mongorawquery"] = {"$and": [{"wid": "doesnotmatter"}]};
        proxyprinttodiv("getexecutelist querywid executeobject", executeobject, 17);
        
        execute(executeobject, function (err, res) {
            proxyprinttodiv("getexecutelist mongorawquery res", res, 17);
            if (err) {callback(err,res)}
            else 
            {
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
            }
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

    exports.publishtestdelay = publishtestdelay = function publishtestdelay(listToDo, eventname, callback) {
            callback(err, res);

    };

    exports.publishtest = publishtest = function publishtest(listToDo, eventname, callback) {
            callback(err, res);

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

