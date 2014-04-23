// put multiple config files in root
// create a file boxconfiguration.js

exports.config = require('./config-server.js');

exports.configuration = configuration = config.configuration;

// console.log(JSON.stringify(config));

// switch between the location of core files
var DIR_TO_CORE_JS = '../dripoint/js/';

require(DIR_TO_CORE_JS + 'et-dto.js');
require(DIR_TO_CORE_JS + 'et-security.js');
exports.utils = require(DIR_TO_CORE_JS + 'et-utils.js');
require(DIR_TO_CORE_JS + 'et-add.js');
require(DIR_TO_CORE_JS + 'et-get.js');
require(DIR_TO_CORE_JS + 'et-test.js');
require(DIR_TO_CORE_JS + 'et-query.js');
require(DIR_TO_CORE_JS + 'et-unit_tests.js');
exports.executethis = require(DIR_TO_CORE_JS + 'executethis.js');

exports.serverconfig = serverconfig = {
    SERVER_PORT: 3059,
    LOOKUP_DIR: '../dripoint/',
<<<<<<< HEAD:nodeapi/defaultconfiguration.js
    SERVICE_URL: 'http://localhost:3009/'
}

=======
    SERVICE_URL: 'http://localhost:3000/'
};
>>>>>>> cc8d0a56932a002d889621c475e0324f65b86e6c:nodeapi/boxconfiguration.js

// MONGODB_URL: 'mongodb://localhost:27017/',
exports.settings = settings = {

    MONGODB_URL: 'mongodb://trugate:tempalte-77@ds045627.mongolab.com:45627/',
    MONGODB_OPTIONS: {
        'safe': true,
        'server': true,
        'auto_reconnect': true,
        'pool': 5
    }

<<<<<<< HEAD:nodeapi/defaultconfiguration.js
}
=======
};
>>>>>>> cc8d0a56932a002d889621c475e0324f65b86e6c:nodeapi/boxconfiguration.js
