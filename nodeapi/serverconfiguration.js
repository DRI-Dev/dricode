// serverconfig.js

var serverconfig = function () {
	var serverconfig = {};
    exports.SERVER_PORT = 3000;
    exports.LOOKUP_DIR = '../dripoint/';
    exports.SERVICE_URL = 'http://localhost:3000/';
	
	return serverconfig;
}


exports.serverconfig = serverconfig();
