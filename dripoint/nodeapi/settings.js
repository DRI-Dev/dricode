var settings = {};

exports.MONGODB_URL = 'mongodb://trugate:tempalte-77@ds045627.mongolab.com:45627/wikiwallettesting';
// exports.MONGODB_URL = 'mongodb://localhost:27017/nodejsmtapi'
exports.MONGODB_OPTIONS = {'safe':true,'server':true,'auto_reconnect': true, 'pool': 5} ;
exports.LOOKUP_DIR = '../dripoint/';
// exports.LOOKUP_DIR = '../html/';// for testing
exports.SERVICE_URL = 'http://localhost:3003/';

exports.settings=settings;



var localStorage = exports.localStorage = {};


// callback sets the received data to a global var
var asynccallback = exports.asynccallback = function asynccallback(d) {
  global.data = d;
}


// Primary execute function called after doThis
var test31 = exports.test31 = function test31(params, callback){
	console.log('from test3 method');
	callback({"test":"test3 on server called"});
}

global.window = global;

// exports.printToDiv = printToDiv=  function(){

// }

exports.updateMemory = updateMemory = function updateMemory(){
    
}

exports.test99 = test99 =  function(params, callback){
	console.log('from test99 method');
	getfrommongo({"wid":"test1"},callback);

}


// exports.proxyprinttodiv = proxyprinttodiv = function(text, obj, debugone){
//     // printToDiv(text, obj, debugone);    // comment this in server version
//     // TypeError: Cannot call method 'sort' of undefined
// }

var executegetwid = exports.executegetwid = function executegetwid(params, callback) {
    console.log(' &&& executegetwid called with ' + JSON.stringify(params));
    var params = util.toLowerKeys(params);
    
    exports[params["executethis"]](params, function (data) {
        console.log("Return from executegetwid: " + JSON.stringify(data));
        callback(data);
    });
}
