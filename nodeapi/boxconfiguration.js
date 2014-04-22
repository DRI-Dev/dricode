// put multiple config files in root
// create a file boxconfiguration.js

exports.config = require('./config-server.js');

exports.configuration = configuration = config.configuration;

// require('../dripoint/Staff_local/saurabh/devjs/et-dto.js');
// require('../dripoint/Staff_local/saurabh/devjs/et-security.js');
// require('../dripoint/Staff_local/saurabh/devjs/et-utils.js');
// require('../dripoint/Staff_local/saurabh/devjs/et-add.js');
// require('../dripoint/Staff_local/saurabh/devjs/et-get.js');
// require('../dripoint/Staff_local/saurabh/devjs/et-test.js');
// require('../dripoint/Staff_local/saurabh/devjs/et-query.js');
// require('../dripoint/Staff_local/saurabh/devjs/et-unit_tests.js');
// exports.executethis = require('../dripoint/Staff_local/saurabh/devjs/executethis.js');

//require('../dripoint/devJS/et-dto.js');
//require('../dripoint/devJS/et-security.js');
//require('../dripoint/devJS/et-utils.js');
//require('../dripoint/devJS/et-add.js');
//require('../dripoint/devJS/et-get.js');
//require('../dripoint/devJS/et-test.js');
//require('../dripoint/devJS/et-query.js');
//require('../dripoint/devJS/et-unit_tests.js');
//exports.executethis = require('../dripoint/devJS/executethis.js');


require('../dripoint/js/et-dto.js');
require('../dripoint/js/et-security.js');
require('../dripoint/js/et-utils.js');
require('../dripoint/js/et-add.js');
require('../dripoint/js/et-get.js');
require('../dripoint/js/et-test.js');
require('../dripoint/js/et-query.js');
require('../dripoint/js/et-unit_tests.js');
exports.executethis = require('../dripoint/js/executethis.js');


exports.serverconfig = serverconfig = {
    SERVER_PORT: 3000,
    LOOKUP_DIR: '../dripoint/',
    SERVICE_URL: 'http://localhost:3000/'
}