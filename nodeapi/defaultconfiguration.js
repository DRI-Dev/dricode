// put multiple config files in root
// create a file boxconfiguration.js

// console.log(JSON.stringify(config));

// switch between the location of core files
var DIR_TO_CORE_JS = '../dripoint/js/';

require(DIR_TO_CORE_JS + 'et-dto.js');
require(DIR_TO_CORE_JS + 'et-security.js');
exports.utils = require(DIR_TO_CORE_JS + 'et-utils.js');
require(DIR_TO_CORE_JS + 'et-add.js');
require(DIR_TO_CORE_JS + 'et-get.js');
require(DIR_TO_CORE_JS + 'et-test.js');
require(DIR_TO_CORE_JS + 'test-addhoc.js');
require(DIR_TO_CORE_JS + 'test-dto.js');
require(DIR_TO_CORE_JS + 'test-et-utils.js');
require(DIR_TO_CORE_JS + 'test-execute.js');
require(DIR_TO_CORE_JS + 'test-inherit.js');
require(DIR_TO_CORE_JS + 'test-main.js');
require(DIR_TO_CORE_JS + 'test-query.js');
require(DIR_TO_CORE_JS + 'test-security.js');
require(DIR_TO_CORE_JS + 'tests-up-for-review.js');
require(DIR_TO_CORE_JS + 'et-query.js');
exports.executethis = require(DIR_TO_CORE_JS + 'executethis.js');

exports.config = require('./config-server.js');

exports.configuration = configuration = config.configuration;

exports.serverconfig = serverconfig = {
    SERVER_PORT: 3000,
    LOOKUP_DIR: '../dripoint/',
    SERVICE_URL: 'http://localhost:3009/'
};

// DB settings --- 5 hardcoded databases for now :: last 4 databases are right now local databases can be changed to any domain
// "DB_HOST_NAME": 'localhost:27017'
            // "DB_USER_ID": "",
            // "DB_USER_PWD": "",
            // "DB_HOST_NAME": 'localhost:27017'
exports.settings = settings = {
    DB_SET: {
        "wikiwallettesting": {
            "DB_USER_ID": "trugate",
            "DB_USER_PWD": "tempalte-77",
            "DB_HOST_NAME": 'ds045627.mongolab.com:45627'
        },
        "wikiwallettesting1": {
            "DB_USER_ID": "trugate1",
            "DB_USER_PWD": "tempalte-78",
            "DB_HOST_NAME": 'localhost:27017'
        },
        "wikiwallettesting2": {
            "DB_USER_ID": "trugate2",
            "DB_USER_PWD": "tempalte-79",
            "DB_HOST_NAME": 'localhost:27017'
        },
        "wikiwallettesting3": {
            "DB_USER_ID": "trugate",
            "DB_USER_PWD": "tempalte-77",
            "DB_HOST_NAME": 'localhost:27017'
        },
        "wikiwallettesting4": {
            "DB_USER_ID": "trugate",
            "DB_USER_PWD": "tempalte-77",
            "DB_HOST_NAME": 'localhost:27017'
        }
    },
    MONGODB_OPTIONS: {
        'safe': true,
        'server': true,
        'auto_reconnect': true,
        'pool': 5
    }
};
