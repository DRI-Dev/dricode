// This module creates the configuration 'config.js'
// from 'defaultconfiguration.js' if 'config.js' doesn't exist

var fs = require('fs');
var exec = require('child_process').exec;

var copy_cmd = {
    'darwin': 'cp',
    'linux': 'cp',
    'win32': 'copy'
}

var default_config_file = 'defaultconfiguration.js';
var config_file = 'config.js';

var cmd_str = copy_cmd[process.platform] + ' ' + default_config_file + ' ' + config_file;


if (!fs.existsSync(config_file)) {
    console.log(' - ' + config_file + ' does not exist.  Creating from ' + default_config_file);
    exec(cmd_str);
}

// When this module is loaded it can now be assumed that config.js always exists
// You can change config.js as needed and it will survive merge etc because it is 
// not included in source control


