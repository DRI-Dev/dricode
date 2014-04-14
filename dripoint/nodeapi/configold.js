

// exports.TABLE_NAME = 'maincollection';

// exports.MONGODB_URL = 'mongodb://trugate:tempalte-77@ds045627.mongolab.com:45627/wikiwallettesting';

// // exports.MONGODB_URL = 'mongodb://localhost:27017/nodejsmtapi'

// exports.MONGODB_OPTIONS = {'safe':true,'server':true,'auto_reconnect': true, 'pool': 5} ;
// exports.LOOKUP_DIR = '../dripoint/';
// // exports.LOOKUP_DIR = '../html/';// for testing
// exports.SERVICE_URL = 'http://localhost:3000/';

// configuration = {};

// configuration.preexecute = [];
// configuration.preexecute[0] = {};
// configuration.preexecute[0].executeorder = 0;
// configuration.preexecute[0].tryorder = 0;
// configuration.preexecute[0].dothis = 'executeFn';
// configuration.preexecute[1] = {};
// configuration.preexecute[1].executeorder = 0;
// configuration.preexecute[1].tryorder = 0;
// configuration.preexecute[1].dothis = 'executeParam';
// configuration.preexecute[2] = {};
// configuration.preexecute[2].executeorder = 0;
// configuration.preexecute[2].tryorder = 0;
// configuration.preexecute[2].dothis = 'executeDefault';

// configuration.midexecute = [];
// configuration.midexecute[0] = {};
// configuration.midexecute[0].executeorder = 1;
// configuration.midexecute[0].tryorder = 2;
// configuration.midexecute[0].dothis = 'executeFn';
// configuration.midexecute[1] = {};
// configuration.midexecute[1].executeorder = 1;
// configuration.midexecute[1].tryorder = 1;
// configuration.midexecute[1].dothis = 'executeParam';
// configuration.midexecute[2] = {};
// configuration.midexecute[2].executeorder = 1;
// configuration.midexecute[2].tryorder = 1;
// configuration.midexecute[2].dothis = 'executeDefault';

// configuration.postexecute = [];
// configuration.postexecute[0] = {};
// configuration.postexecute[0].executeorder = 0;
// configuration.postexecute[0].tryorder = 0;
// configuration.postexecute[0].dothis = 'executeFn';
// configuration.postexecute[1] = {};
// configuration.postexecute[1].executeorder = 0;
// configuration.postexecute[1].tryorder = 0;
// configuration.postexecute[1].dothis = 'executeFn';
// configuration.postexecute[2] = {};
// configuration.postexecute[2].executeorder = 0;
// configuration.postexecute[2].tryorder = 0;
// configuration.postexecute[2].dothis = 'executeFn';

// var localStorage = exports.localStorage = {};


// // callback sets the received data to a global var
// var asynccallback = exports.asynccallback = function asynccallback(d) {
//   global.data = d;
// }


// // Primary execute function called after doThis
// var test31 = exports.test31 = function test31(params, callback){
// 	console.log('from test3 method');
// 	callback({"test":"test3 on server called"});
// }


// require('./dao/mongo.js');
// // var test99 = global.test99 = function(params, target, callback){
// // 	console.log('from test99 method');
// // 	return mongoquery({"wid":"test1"},"mongoquery",function(data){
// // 		console.log(JSON.stringify(data));
// // 		console.log('from callback of test99 method');
// // 		callback(data);
// // 	});
// // }

// global.window = global;

// exports.printToDiv = printToDiv=  function(){

// }

// exports.updateMemory = updateMemory = function updateMemory(){
    
// }

// exports.test99 = test99 =  function(params, callback){
// 	console.log('from test99 method');
// 	getfrommongo({"wid":"test1"},callback);

// }


// exports.proxyprinttodiv = proxyprinttodiv = function(text, obj, debugone){
//     // printToDiv(text, obj, debugone);    // comment this in server version
//     // TypeError: Cannot call method 'sort' of undefined
// }

// var executegetwid = exports.executegetwid = function executegetwid(params, callback) {
//     console.log(' &&& executegetwid called with ' + JSON.stringify(params));
//     var params = util.toLowerKeys(params);
    
//     exports[params["executethis"]](params, function (data) {
//         console.log("Return from executegetwid: " + JSON.stringify(data));
//         callback(data);
//     });
// }

// exports.config=configuration;
// exports.config.environment='server';


// exports.configuration=configuration;

