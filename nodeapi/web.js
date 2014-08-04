// using common files at server side also ...
// exports.async = async = require('async');
console.log('----x22');
require('./create_config.js');
require('./config.js');
require('./config-server.js');

console.log('----X99');

console.log('russ1');
// console.log(russ1);
console.log('russ2');
console.log(russ2);
console.log('russ3');
// console.log(russ3);
console.log('russ4');
console.log(russ4);

express = require('express')
console.log('---44a');
    app = express()
console.log('---44b');
    http = require('http')
console.log('---44c');
    needle = require('needle')
console.log('---44d');
    request = require('request')
console.log('---44e');
    server = require('./routes/server')
console.log('---44f');
    convert = require('./routes/convert.js')
console.log('---44g');
    querystring = require('querystring')
console.log('---44h');
    imageService = require('./routes/images.js');
console.log('---44i');



//// *********************** Express Application Configuration follows   *********************** 
app.configure(function() {
    app.enable('trust proxy');
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());

    // Add headers
    app.use(express.static(__dirname + '/../dripoint'));
    app.use(function(req, res, next) {

        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', '*');

        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);

        // Pass to next layer of middlewaresssss
        next();
    });

    app.use(app.router);
    app.set('html', __dirname + '/html');
    app.use("/css", express.static(__dirname + '/views/css'));
    app.use("/js", express.static(__dirname + '/views/js'));
    app.engine('html', require('ejs').renderFile);
});

app.configure('development', function() {
    app.use(express.errorHandler());
});

//// *********************** Route Mapping for Application follows   ***********************
app.put('/executethis', server.postputgetrunExecutethis);
app.post('/executethis', server.postputgetrunExecutethis);
app.get('/executethis', server.postputgetrunExecutethis);
// app.put('/executethis', server.putrunExecutethis);
app.put('/filetowid', convert.convertFileToWid);
app.put('/base64toserver', imageService.saveBase64ToServer);

console.log('server config is ' + serverconfig.SERVER_PORT);

exports.window = {"configuration":config.configuration};

console.log(JSON.stringify(config));



sendsms({
    'tonumber': '+12313133930',
    'msgbody': 'This the server- I just restarted '
}, function (err, result) {
    //console.log('running');
});

console.log('port is ' + serverconfig.SERVER_PORT);
app.listen(process.env.PORT || serverconfig.SERVER_PORT);


eventdeviceready({}, function (err, res) {
});


