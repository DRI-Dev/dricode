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
    SERVER_PORT: 3000,
    LOOKUP_DIR: '../dripoint/',
    SERVICE_URL: 'http://localhost:3000/'
}