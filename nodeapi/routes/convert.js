'use strict';
var cheerio = require('cheerio')
    , $ = undefined
    , filesys = require('graceful-fs')
    , convertFileToWid;

exports.convertFileToWid = convertFileToWid = function convertFileToWid(req, res) {
    var parameters = req.body,
        filename = parameters.filename,
        fileContents = parameters.contents,
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

    execute(screenwid, function(err, results) {
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

function removeAddThis(addThisObj) {
    for (var prop in addThisObj.addthis) {
        if (addThisObj.addthis.hasOwnProperty(prop)) {
            addThisObj[prop] = addThisObj.addthis[prop];
        }
    }
    delete addThisObj['addthis'];
    return addThisObj;
}