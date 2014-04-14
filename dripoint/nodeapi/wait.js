
var settings = {
    MONGODB_URL: 'mongodb://trugate:tempalte-77@ds045627.mongolab.com:45627/wikiwallettesting',
    MONGODB_OPTIONS : {'safe':true,'server':true,'auto_reconnect': true, 'pool': 5}
};

var http = require('http');
var path = require('path');

var SkinStore = require('connect-mongoskin');
var mongoskin = require('mongoskin');
var db = mongoskin.db(settings.MONGODB_URL, settings.MONGODB_OPTIONS);

var socketio = require('socket.io');
var express = require('express');
exports.asyncblock = asyncblock = require('asyncblock');

//
// ## SimpleServer `SimpleServer(obj)`
//
// Creates a new instance of SimpleServer with the following options:
//  * `port` - The HTTP port to listen on. If `process.env.PORT` is set, _it overrides this value_.
//
var router = express();
var server = http.createServer(router);
var io = socketio.listen(server);
var asyncblock = require('asyncblock');
var fs = require('fs');


router.use(express.static(path.resolve(__dirname, 'client')));

var getDataWrapper = function(){

    asyncblock(function(flow){

        var contents;
        //   getData(flow.add());
//        getFromMongo(flow.add());
//        contents = flow.wait();
        contents = flow.sync( getFromMongo(flow.callback()) );
        console.log(' >>> from DB are  '+ JSON.stringify(contents));
        console.log(' from DB data actually received ');
        return contents;

    });
}


function getFromMongo(callback){
    db.collection("maincollection").findOne({"wid":"test1"}, function (err, res) {
        if (err) {
            callback(err, { 'etstatus': 'geterror' });
        } else {
            console.log(' Found '+ JSON.stringify(res));
            if(res){
                callback(null,res);
            }else{
                callback(null,{"etstatus":"empty"});
            }
        }
    });
}

router.get('/',function(req, res) {
    res.send("Hello from Heroku");
});

router.get('/test',function(req, res) {
    console.log('starting test');
    // asyncblock(function(flow){
    var contents;

    // getFromMongo(flow.add());
    // getDataWrapper(flow.add());
    // getDataWrapper(flow.add('data'));
    // contents = flow.wait('data');

    // contents = flow.sync( getDataWrapper(flow.callback()) );

    contents = getDataWrapper();

    console.log(' >>> contents are  '+ JSON.stringify(contents));
    console.log('all done');
    res.send(contents);
    // });
});


server.listen(process.env.PORT ||3000, process.env.IP || "0.0.0.0", function(){
    var addr = server.address();
    console.log("server listening at", addr.address + ":" + addr.port);
});
