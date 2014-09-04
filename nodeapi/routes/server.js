exports.postputgetrunExecutethis = function postputgetrunExecutethis(req, resp) {
    var parameters = req.body;
    proxyprinttodiv(" JSON postputgetrunExecutethis", JSON.stringify(parameters), 99);
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;

    proxyprinttodiv(" before extend - parameters ", JSON.stringify(parameters), 99);
    proxyprinttodiv(" after extend - query ", JSON.stringify(query), 99);
    extend(true, parameters, query);
    proxyprinttodiv(" after extend", JSON.stringify(parameters), 99);
    runExecuteThis(parameters, resp);
}

function runExecuteThis(parameters, resp) {
    proxyprinttodiv(" JSON runExecutethis", JSON.stringify(parameters), 99);

    //debuglevel = Number(getglobal('debuglevel')); // get currently stored debuglevel
    if (parameters.debuglevel) 
    {
        if (isString(parameters.debuglevel))
            {debuglevel = Number(parameters.debuglevel)} 
        else 
            {debuglevel = parameters.debuglevel};
        //saveglobal("debuglevel", debuglevel); // make it stickly for next time
        delete parameters.debuglevel;
    }

    if (debuglevel && debuglevel!==-1)
    {
        fs.writeFileSync('C:\\Users\\Administrator\\dropbox2\\Dropbox\\dripoint\\nodelogs\\nodelog.txt', '');
    }

    // Debug = false;
    // if (parameters.Debug) {
    //     Debug = "true";
    //     delete parameters.Debug;
    // }

    if (parameters.command) {
        // grab server defaults
        extend(true, parameters.command, config.configuration.d.default);

        if (parameters.command.environment) {
            extend(true, parameters.command.environment, config.configuration.d.default);
        }

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

                if (parameters.command.xrun[index].command.environment) {
                    extend(true, parameters.command.xrun[index].command.environment, config.configuration.d.default);
                }

                if (parameters.command.xrun[index].command.environment
                    && parameters.command.xrun[index].command.environment.default) {
                    // overwrite current environment defaults with server defaults
                    parameters.command.xrun[index].command.environment.default = config.configuration.d.default;
                }
            }
        }
    }

    execute(parameters, function (err, results) {
        // if (Debug === 'true') {
        //     var tempoutput = {};
        //     tempoutput.command = {};
        //     tempoutput.command.angularexeucute = {};
        //     tempoutput.command.angularexeucute.parameters = {};
        //     extend(true, tempoutput.command.angularexeucute.parameters, localStore);
        //     // extend(true, executeobject, postResults);
        //     if (Array.isArray(results)) { results.push(tempoutput); }
        //     else {
        //         var newArray = [];
        //         newArray.push(results);
        //         newArray.push(tempoutput);
        //         results = newArray;
        //     }

        //     localStore.clear();
        // }
        // debuglinenum = 0;

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
