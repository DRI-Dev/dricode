'use strict';
var cheerio = require('cheerio')
    , $ = undefined
    , fs = require('graceful-fs')
    , find = require('findit')
    , config = require('../config-server.js')
    , lookupDir = '../../dripoint/'
    , resultData = {code:''}
    , responseData = {}
    , htmlPath, response, processWml, buildTemplate;

exports.buildTemplate = buildTemplate = function(req, res) {
	console.log('*******START******** driTemplate.buildTemplate ********START*********');

	response = res;
	var parameters = req.body;

	getWmlTags(parameters.wmlfilename, function(tags, masterPath) {
		console.log(' retrieved [[<wml>]] tags from => ' + masterPath);
		console.log(' [[<wml>]] tags found => ' + JSON.stringify(tags));

		for (var i = 0; i < tags.length; i++) {
			var nextWml = tags[i].replace('[[', '').replace(']]', '');
			findAndReadFile(nextWml + '.wml', '', tags[i], replaceWmlTag);
		}

		htmlPath = masterPath.replace('.wml', '.html');
		responseData.filepath = htmlPath;
	});
};

exports.processWml = processWml = function(req, res) {
    console.log('*******START******** driTemplate.processWml ********START*********');

    response = res;
    var parameters = req.body;

    getWmlTags(parameters.wmlfilename, function(tags, masterPath) {
        console.log(' retrieved [[<wml>]] tags from => ' + masterPath);
        console.log(' [[<wml>]] tags found => ' + JSON.stringify(tags));

        for (var i = 0; i < tags.length; i++) {
            var tagValue = tags[i].replace('[[', '').replace(']]', '')
                , tagObject;

            try { tagObject = JSON.parse(tagValue); }
            catch(e) { console.log(tags[i] + ' is not a JSON object.'); }

            if (tagObject) {
                var action = tagObject.executethis || '';

                if (action === 'getfile') {
                    var getFilename = tagObject.fromfile + '.' + tagObject.fromextension;

                    // replace with specific area else entire contents of file
                    if (tagObject.fromarea) { findAndReadFile(getFilename, tagObject.fromarea, tags[i], replaceTagWithArea); }
                    else { findAndReadFile(getFilename, '', tags[i], replaceWmlTag); }
                } else {
                    // process the executeThis call
                    var params = {executethis:action};

                    // TODO: figure out what to do with the executeThis results

                    responseData.executeresults = executethis.executethis(params);
                }
            } else { findAndReadFile(tagValue + '.wml', '', tags[i], replaceWmlTag); }
        }

        htmlPath = masterPath.replace('.wml', '.html');
        responseData.filepath = htmlPath;
    });
};

// get [[<wml>]] tags from contents of master wml file
function getWmlTags(filename, callback) {
	findAndReadFile(filename + '.wml', '', '', function(file) {
		resultData.code = file.contents;
		var regex = new RegExp('\\[\\[.*\\]\\]', 'g')
		  , wmlTags = []
		  , result;

		while ((result = regex.exec(resultData.code))) { wmlTags.push(result.toString()); }

		callback(wmlTags, file.path);
	});
}

// find a file recursively and return it's path and contents
function findAndReadFile(fileName, area, tag, callback) {
	var finder = find(lookupDir);
	finder.on('file', function(file, stats) {
		if (file.endsWith(fileName)) {
			var results = { path:file, contents:fs.readFileSync(file).toString() };
			if (tag && tag !== '') results.tag = tag;
            if (area && area !== '') results.area = area;
			callback(results);
		}
	});
}

// replace [[<wml>]] tags with contents of <wml>.wml
function replaceWmlTag(file) {
    console.log(' replacing tag => ' + file.tag);
    resultData.code = resultData.code.replace(file.tag, file.contents);
    changedContents();
}

// extract area from found file
function replaceTagWithArea(file) {
    console.log(' replacing tag => ' + file.tag);
    var pattern = '\\<!--{"areadefinition": "begin", "areaname": "' + file.area + '"}--\\>(.*)'
            + '\\<!--{"areadefinition": "end", "areaname": "' + file.area + '"}--\\>'
        , regex = new RexExp(pattern, 'gi')
        , result;

    while (result = regex.exec(resultData.code)) {
        resultData.code = resultData.code.replace(file.tag, result.toString());
    }

    changedContents();
}

// check code contents when changed and save when all [[<wml>]] tags have been processed
function changedContents() {
    if (resultData.code !== '' && resultData.code.indexOf('[[') === -1) {
        fs.writeFile(htmlPath, resultData.code, function(err) {
            if (err) {
                console.log(' Error creating file => ' + JSON.stringify(err));
                responseData.error = err;
            }
            else {
                console.log(' All [[<wml>]] tags processed.');
                console.log(' Successfully created file => ' + htmlPath);
            }

            console.log('*************END********** driTemplate ************END***************');
            response.send(responseData);
            response.end();
        });
    }
}