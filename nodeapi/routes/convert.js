'use strict';
var cheerio = require('cheerio')
    , $ = undefined
    , filesys = require('graceful-fs')
    , convertFileToWid;

exports.convertFileToWid = convertFileToWid = function convertFileToWid(req, res) {
    var parameters = req.body,
        filename = parameters.filename,
        filepath = parameters.path,
        fileContents = filesys.readFileSync(filepath).toString(),
        shortFilename = filename.slice(0, filename.indexOf('.')),
        extension = filename.slice(filename.indexOf('.') + 1, filename.length),
        $ = cheerio.load(fileContents),
        newScreenwid = {executethis:'addwidmaster',wid:shortFilename};

    console.log('** File to Wid conversion process beginning for file ' + filename + ' **');
//    console.log('** file contents from file ' + filename + ' are as follows => ' + fileContents);

    if (extension === 'js' || extension === 'css') {
        if (extension === 'js') {
            if (fileContents[0] === '(') { newScreenwid.js = fileContents; }
            else { newScreenwid.script = fileContents; }
        }
        else if (extension === 'css') { newScreenwid.css = fileContents; }

        execute(newScreenwid, function (err, resultArray) {
            if (err && Object.size(err) > 0) { console.log('** JsToScreenwid addwidmaster error => ' + JSON.stringify(err) + ' **'); }
            else { console.log('** screenwid ' + shortFilename + ' has been created. **'); }

            console.log('** File to Wid conversion process ending for file ' + filename + ' **');

            res.send('completed');
            res.end();
        });
    } else if (extension === 'html') {
        // find screenwid variables from fileContents
        var wfv = fileContents.match("var widforview = .*[,,;]");
        if (wfv && wfv.length > 0) {
            wfv = wfv.toString().substring(wfv.toString().indexOf('=') + 3, wfv.toString().length - 2).trim();
            newScreenwid.widforview = wfv;
        }

        var wfb = fileContents.match("var widforbase = .*[,,;]");
        if (wfb && wfb.length > 0) {
            wfb = wfb.toString().substring(wfb.toString().indexOf('=') + 3, wfb.toString().length - 2).trim();
            newScreenwid.widforbase = wfb;
        }

        var wfbg = fileContents.match("var widforbackground = .*[,,;]");
        if (wfbg && wfbg.length > 0) {
            wfbg = wfbg.toString().substring(wfbg.toString().indexOf('=') + 3, wfbg.toString().length - 2).trim();
            newScreenwid.widforbackground = wfbg;
        }

        var dfv = fileContents.match("var dataforview = .*[,,;]");
        if (dfv && dfv.length > 0) {
            dfv = dfv.toString().substring(dfv.toString().indexOf('=') + 3, dfv.toString().length - 2).trim();
            newScreenwid.dataforview = dfv;
        }

        var lks = fileContents.match("var links = .*[,,;]");
        if (lks && lks.length > 0) {
            lks = lks.toString().substring(lks.toString().indexOf('=') + 2, lks.toString().length - 1).trim();
            newScreenwid.links = lks;
        }

        var strtwd = fileContents.match("var startwid = .*[,,;]");
        if (strtwd && strtwd.length > 0) {
            strtwd = strtwd.toString().substring(strtwd.toString().indexOf('=') + 3, strtwd.toString().length - 2).trim();
            newScreenwid.startwid = strtwd;
        }

        processExecuteTags($, function() {
            finishConvert($, newScreenwid, res);
        });
    } else {
        console.log('** File to Wid conversion process failed for file ' + filename + ' ,\n'
                    + '    we currently do not convert files of type .' + extension + ' **');

        res.send('failed');
        res.end();
    }
};

function processExecuteTags($, callback) {
    if ($('execute').length === 0) { callback(); }
    else {
        var executeTags = [];

        $('execute').each(function () {
            executeTags.push(this);
        });

        async.eachSeries(executeTags,
            function (ele, cb) {
                var executeObj = ele.allAttrs(),
                    onbuild = ele.attr('onbuild') === 'true';

                if (executeObj.etparams) {  executeObj = JSON.parse(executeObj.etparams); }

                if (executeObj.onbuild) { delete executeObj['onbuild']; }

                if (onbuild) {
                    console.log('**$$**  processing execute, onbuild true.  Execute params => ' + JSON.stringify(executeObj));

                    execute(executeObj, function (err, results) {
                        if (err && Object.size(err) > 0) { console.log('** error found => ' + JSON.stringify(err)); }
                        else {
                            if (results.addthis) { results = removeAddThis(results); }

                            if (results.html) { ele.append(results.html); }
                            if (results.css) { ele.append('<style>' + results.css + '</style>'); }
                            if (results.script) { ele.append('<script>' + results.script + '</script>'); }

                            // remove onbuild attribute and add the processed one
                            ele.removeAttr('onbuild');
                            ele.attr('processed', 'true');

                            cb(null);
                        }
                    });
                } else { cb(null); }
            },
            function (err) {
                callback();
            });
    }
}

function finishConvert($, screenwid, res) {
    // append any existing style blocks to body before continuing
    $('style').each(function () { $('body').append(this.outerHTML); });

    screenwid.html = $('body').html();

    console.log('**>>** new screenwid execution parameters => ' + JSON.stringify(screenwid));

    execute(screenwid, function(err, resultsArray) {
        if (err && Object.size(err) > 0) { console.log('** htmlToScreenwid addwidmaster error => ' + JSON.stringify(err) + ' **'); }
        else { console.log('** screenwid ' + screenwid.wid + ' has been created. **'); }

        console.log('** HTML file to Screenwid conversion process ending for file ' + screenwid.wid + '.html **');

        res.send('completed');
        res.end();
    });
}

// adding a size function to Object's prototype
Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

cheerio.prototype.allAttrs = function() {
    return this[0].attribs;
};

// convert a NamedNodeMap to an Object
function NNMtoObj(namedNodeMap) {
    var obj = {};
    for (var i = 0; i < namedNodeMap.length; i++) {
        obj[namedNodeMap[i].name] = namedNodeMap[i].value;
    }
    return obj;
}

function removeAddThis(addThisObj) {
    for (var prop in addThisObj.addthis) {
        if (addThisObj.addthis.hasOwnProperty(prop)) {
            addThisObj[prop] = addThisObj.addthis[prop];
        }
    }
    delete addThisObj['addthis'];
    return addThisObj;
}

function mergeNestedArray(nestedArray) {
    var mergedObj = {};

    for (var x = 0; x < nestedArray.length; x++) {
        if (Array.isArray(nestedArray[x])) {
            for (var i = 0; i < nestedArray[x].length; i++) {
                if (Array.isArray(nestedArray[x][i])) {
                    for (var y = 0; y < nestedArray[x][i].length; y++) {
                        extend(true, mergedObj, nestedArray[x][i][y]);
                    }
                } else { extend(true, mergedObj, nestedArray[x][i]); }
            }
        } else { extend(true, mergedObj, nestedArray[x]); }
    }

    return mergedObj;
}