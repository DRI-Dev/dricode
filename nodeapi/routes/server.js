exports.postputgetrunExecutethis = function postputgetrunExecutethis(req, resp) {
    var parameters = req.body;
    console.log(" JSON " + JSON.stringify(parameters));
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;

    extend(true, parameters, query);
    runExecuteThis(parameters, resp);
}

function runExecuteThis(parameters, resp) {
    if (parameters.Debug || parameters.debuglevel)
    {
        fs.writeFileSync('C:\\Users\\Administrator\\dropbox2\\Dropbox\\dripoint\\nodelogs\\nodelog.txt', '');
    }

    Debug = false;
    if (parameters.Debug) {
        Debug = "true";
        delete parameters.Debug;
    }

    if (parameters.debuglevel) {
        debuglevel = parameters.debuglevel;
        delete parameters.debuglevel;
    }

    if (parameters.command) {
        // grab server defaults
        extend(true, parameters.command, config.configuration.d.default);

        // default environment property from server defaults as well

        if (parameters.command.environment && parameters.command.environment.default) {
            // overwrite current environment defaults with server defaults
            parameters.command.environment.default = config.configuration.d.default;
        }
    }

    // also grab server defaults for xrun objects
    if (parameters.command && parameters.command.xrun) {
        for (var index in parameters.command.xrun) {
            if (parameters.command.xrun[index].command) {
                extend(true, parameters.command.xrun[index].command, config.configuration.d.default);

                // default environment property from server defaults as well

                if (parameters.command.xrun[index].command.environment
                    && parameters.command.xrun[index].command.environment.default) {
                    // overwrite current environment defaults with server defaults
                    parameters.command.xrun[index].command.environment.default = config.configuration.d.default;
                }
            }
        }
    }

    execute(parameters, function (err, results) {
        if (Debug === 'true') {
            var tempoutput = {};
            tempoutput.command = {};
            tempoutput.command.angularexeucute = {};
            tempoutput.command.angularexeucute.parameters = {};
            extend(true, tempoutput.command.angularexeucute.parameters, localStore);
            // extend(true, executeobject, postResults);
            if (Array.isArray(results)) { results.push(tempoutput); }
            else {
                var newArray = [];
                newArray.push(results);
                newArray.push(tempoutput);
                results = newArray;
            }

            localStore.clear();
        }
        debuglinenum = 0;

        if (!results) { results = {}; }

        resp.send(results);
        resp.end();
    });
}

exports.gethtmlbyid = gethtmlbyid = function gethtmlbyid(params, callback) {
    var foundHtml;

    async.series([
            function (cb) {
                execute({
                        executethis: 'getwid',
                        wid: params.fromwid
                    },
                    function (err, resultsArray) {
                        var $ = cheerio.load(resultsArray[0].html),
                            fromIdEle = $('#' + params.fromid);

                        foundHtml = fromIdEle.html();

                        cb(null, resultsArray);
                    });
            },
            function (cb) {
                execute({
                        executethis: 'addwidmaster',
                        wid: params.towid,
                        html: foundHtml
                    },
                    function (err, returnArray) {
                        cb(null, returnArray);
                    });
            }
        ],
        function (err, resultsArr) {
            callback(null, foundHtml);
        });
};
