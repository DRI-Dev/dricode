// MASTER copy files
// var executethis = require('../../dripoint/js/executethis.js');

// individual payground copy files
var executethis = require('../../dripoint/Staff_local/saurabh/executethis.js');

exports.testget = function(req, resp) {
    var parameters = {"executethis":"getwid","wid":"test1"};
    executethis.execute(parameters, function(results) {
        console.log(JSON.stringify(results));
        resp.send(results);
        resp.end();
    });
};


exports.testquery = function(req, resp) {
    var parameters = {"executethis":"getwid","wid":"test1"};
    executethis.execute(parameters, function(results) {
        console.log(JSON.stringify(results));
        resp.send(results);
        resp.end();
    });
};
