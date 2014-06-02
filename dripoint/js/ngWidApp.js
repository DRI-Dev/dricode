if(!exports){ var exports = {}; } // defaulting global exports variable

if (typeof angular !== 'undefined') {
    // define main angularJS dri wid app
    var widApp = angular.module('widApp', ['ui.bootstrap', 'autofields']);

    // angular data service which decides how incoming data is stored into the model
    widApp.factory('dataService', function($http, $compile) {
        var storeAllData = function(obj, scope, objName, callback) {
            var thisWid = objName ? objName : obj.wid ? obj.wid : undefined,
                phase = scope.$root.$$phase;

            if (thisWid) {
                console.log('********************************************');
                console.log('**ngModelData** bind-able data for ' + thisWid + ' :');
                console.log(obj);
                console.log('********************************************');

                if (!obj.hasOwnProperty('wid')) { obj.wid = thisWid; }

                if (phase !== '$apply' && phase !== '$digest') {
                    scope.$apply(function() { scope[thisWid] = obj; });
                } else { scope[thisWid] = obj; }
            }

            for (var prop in obj) {
                if (obj.hasOwnProperty(prop)) {
                    if (obj[prop] instanceof Object) {

                        storeAllData(obj[prop], scope, prop);
                    } else {
                        if (phase !== '$apply' && phase !== '$digest') {
                            scope.$apply(function() { scope[prop] = obj[prop]; scope.data[prop] = obj[prop]; });
                        } else { scope[prop] = obj[prop]; scope.data[prop] = obj[prop]; }
                    }
                }
            }

            if (callback instanceof Function) { callback(); }
        };

        return {
            storeData: function(results, scope, modelKey, callback) {
                if (results !== null && results instanceof Object) {
                    storeAllData(results, scope, modelKey, function () {
                        if (callback instanceof Function) { callback(results); }
                    });
                } else if (Array.isArray(results)) {
                    for (var i = 0; i < results.length; i++) {
                        if (results[i] !== null && results[i] instanceof Object) {
                            storeAllData(results[i], scope, modelKey, function () {
                                if (callback instanceof Function) { callback(results); }
                            });
                        }
                    }
                }
            }
        }
    });

    // angular execute service, mainly an execute() wrapper
    // which processes results into the dri/angularJS universe
    widApp.factory('executeService', function($http, $compile, dataService) {
        var processExecuteResult = function(result, scope) {
            if (!result) { result = {}; }
            if (result.addthis) { result = widAppHelper.removeAddThis(result);}

            // if not logged in at this point send browser to login.html
            if (result.etstatus) {
                if (result.etstatus.status && result.etstatus.status === 'unauthorized') {
                    window.location = 'http://dripoint.com?wid=login&returnUrl=' + window.location.href;
                }
            }

            // if command.angularexecute exists then set up an angularExecute call based on it's value
            if (result.command && result.command.angularexecute) {
                var executeObj = {};

                if (result.command.angularexecute.parameters) {
                    executeObj = result.command.angularexecute.parameters;
                    delete result.command.angularexecute.parameters;
                }

                if (typeof result.command.angularexecute === 'object') { extend(true, executeObj, result.command.angularexecute); }
                else { executeObj.executethis = result.command.angularexecute; }

                angularExecute(executeObj, function (err, returnArray) { });
            }

            dataService.storeData(result, scope, undefined, function (dataset) {
                // check if this is a screenwid and needs to be displayed
                if (dataset.html) {
                    // set currently active wid in the data model
                    if (dataset.wid) {
                        // set the current activewid as the previous wid
                        if (scope.activewid) { scope.previouswid = scope.activewid; }
                        // set new wid as active
                        scope.activewid = dataset.wid;
                    }

                    etProcessScreenWid(dataset, scope, function () {
                        widAppHelper.processHtml(dataset, scope, $compile);
                    });
                } else if (dataset.script) { widAppHelper.processJS(dataset, scope, $compile); }
                else if (dataset.css) { widAppHelper.processCSS(dataset, scope, $compile); }
            });
        };

        return {
            executeThis: function(parameters, scope, callback) {
                if (parameters.wid && !parameters.executethis) {
                    parameters.executethis = parameters.wid;
                    delete parameters['wid'];
                }

                execute(parameters, function (err, resultArray) {
                    for (var x = 0; x < resultArray.length; x++) {
                        if (Array.isArray(resultArray[x])) {
                            for (var y = 0; y < resultArray[x].length; y++) {
                                if (Array.isArray(resultArray[x][y])) {
                                    for (var z = 0; z < resultArray[x][y].length; z++) {
                                        if (Array.isArray(resultArray[x][y][z])) {
                                            for (var i = 0; i < resultArray[x][y][z].length; i++) {
                                                processExecuteResult(resultArray[x][y][z][i], scope);
                                            }
                                        } else { processExecuteResult(resultArray[x][y][z], scope); }
                                    }
                                } else { processExecuteResult(resultArray[x][y], scope); }
                            }
                        } else { processExecuteResult(resultArray[x], scope); }
                    }

                    // send array to callback
                    if (callback instanceof Function) { callback(err, resultArray); }
                });
            }
        }
    });

    // html attribute that allows any html element to become draggable with the mouse
    widApp.directive('draggable', function($document) {
        return function(scope, element, attr) {
            var startX = 0, startY = 0, x = 0, y = 0;
            element.css({
                position: 'relative',
                cursor: 'pointer'
            });
            element.on('mousedown', function(event) {
                // Prevent default dragging of selected content
                event.preventDefault();
                startX = event.screenX - x;
                startY = event.screenY - y;
                $document.on('mousemove', mousemove);
                $document.on('mouseup', mouseup);
            });

            function mousemove(event) {
                y = event.screenY - startY;
                x = event.screenX - startX;
                element.css({
                    top: y + 'px',
                    left:  x + 'px'
                });
            }

            function mouseup() {
                $document.unbind('mousemove', mousemove);
                $document.unbind('mouseup', mouseup);
            }
        };
    });

    // main wid controller (powers dripoint.com landing spot)
    widApp.controller('widCtrl', ['$scope', '$compile', 'dataService', 'executeService',
        function($scope, $compile, dataService, executeService) {
            $scope.data = {}; // general catchall for all properties stored in model

            var querystring = window.location.search,
                urlParameters = widAppHelper.queryStrToObj(querystring.substring(1));

            // default wid to 'startwid'
            if (!urlParameters.wid) { urlParameters.wid = 'startwid'; }

            // package url parameters into model
            if (Object.size(urlParameters) > 0) { $scope.urlparams = extend(true, urlParameters); }

            // process url parameters with angularExecute
            executeService.executeThis(urlParameters, $scope, function (err, resultset) { });

            // general use submit function which propegates data model changes to localStorage and mongoDB
            $scope.etsubmit = function(widName) {
                var etObj = extend(true, $scope[widName], {executethis:"addwidmaster"});
                execute(etObj, function (err, results) { });
            };

            // general use back button function
            $scope.backbutton = function() {
                executeService.executeThis({executethis:$scope.previouswid || "startwid"}, $scope, function (err, restuls) { });
            };

            // clear current angular data model
            $scope.cleardata = function() {
//                // remove all objects and arrays from data model
//                for (var i = 0; i < $scope.length; i++) {
//
//                }

                $scope = {};
            };

            // clears success and error logs on page
            $scope.clearlogs = function() { $('#errorlog,#successlog').html(''); };

            $scope.listLength = function(list) { return Object.size(list); };
        }
    ]);

    // etsubmit wrapper that can be called through execute()
    exports.etsubmit = etsubmit = function etsubmit(params, callback) {
        if ($ && $('body').scope) { $('body').scope().etsubmit(params.wid); callback(null); }
    };

    // backbutton wrapper that can be called through execute()
    exports.backbutton = backbutton = function backbutton(params, callback) {
        if ($ && $('body').scope) { $('body').scope().backbutton(); callback(null); }
    };

    // cleardata wrapper that can be called through execute()
    exports.clearangulardata = clearangulardata = function clearangulardata(params, callback) {
        if ($ && $('body').scope) { $('body').scope().cleardata(); callback(null); }
    };

    // angularExecute wrapper that is called from html elements
    function callExecute(ele) {
        var attrObj = NNMtoObj(ele.attributes),
            parameters = extend(true, {command:{environment:{}}}, JSON.parse(attrObj.etparams)),
            scope = $('body').scope();

        if (attrObj.addtomodel) {
            var newAdd = JSON.parse(attrObj.addtomodel);
            for (var prop in newAdd) {
                scope[prop] = newAdd[prop];
            }
        }

        // send calling element and any additional info into the execute process
        parameters.command.environment.element = $('<div>' + ele + '</div>').html();
        parameters.command.environment.originatingscreen = scope.activewid;

        // cancel default html behavior like the default contextmenu
        window.event.returnValue = false;

        angular.injector(['ng', 'widApp'])
            .get('executeService')
            .executeThis(parameters, scope, function (err, resultset) { });
    }

    // adding a size function to Object's prototype
    Object.size = function(obj) {
        var size = 0, key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) size++;
        }
        return size;
    };

    // convert a NamedNodeMap to an Object
    function NNMtoObj(namedNodeMap) {
        var obj = {};
        for (var i = 0; i < namedNodeMap.length; i++) {
            obj[namedNodeMap[i].name] = namedNodeMap[i].value;
        }
        return obj;
    }

    // mostly processes wid names found in execute results
    exports.etProcessScreenWid = etProcessScreenWid = function etProcessScreenWid(parameters, scope, callback) {
        var widforview = [],
            widforbase = [],
            widforbackground = [],
            links = [],
            dataforview = {},
            all_wids= [];

        scope = scope || $('body').scope();

        if (parameters.widforview) { widforview = parameters.widforview.split(','); delete parameters['widforview']; }
        else if (typeof widForView !== 'undefined') { widforview = widForView.split(','); }

        if (widforview.length > 0) { scope.widforview = widforview; }

        if (parameters.widforbase) { widforbase = parameters.widforbase.split(','); delete parameters['widforbase']; }
        else if (typeof widForBase !== 'undefined') { widforbase = widForBase.split(','); }

        if (widforbase.length > 0) { scope.widforbase = widforbase; }

        if (parameters.widforbackground) { widforbackground = parameters.widforbackground.split(','); delete parameters['widforbackground']; }
        else if (typeof widForBackground !== 'undefined') { widforbackground = widForBackground.split(','); }

        if (widforbackground.length > 0) { scope.widforbackground = widforbackground; }

        if (parameters.links) {
            links = JSON.parse(parameters.links);
            delete parameters['links'];
            scope.links = links;
        }

        // handle action binding from links variable
        for (var i = 0; i < links.length; i++) {
            var identifier = links[i].id  // get jquery identifier bassed on id or class passsed in
                    ? '#' + links[i].id
                    : links[i].class
                    ? '.' + links[i].class
                    : 'idAndClassMissing',
                eventParams = {};

            if (identifier === 'idAndClassMissing') {
                console.log('links object must contain an id or class property. => ' + JSON.stringify(links[i]));
            }

            // check if the executethis property is an object
            if (widAppHelper.isJsonStr(links[i].executethis)) { eventParams = JSON.parse(links[i].executethis); }
            else { eventParams.executethis = links[i].executethis; }

            if (links[i].id) {
                // add event attributes to element
                $(identifier).attr('etparams', JSON.stringify(eventParams));

                // add event listener to element
                $(identifier).attr('on' + links[i].trigger, 'callExecute(this)');
            } else if (links[i].class) {  // if class was passed in, apply links logic to all elemenets with class
                $(identifier).each(function (i, ele) {
                    // add event attributes to element
                    $(ele).attr('etparams', JSON.stringify(eventParams));

                    // add event listener to element
                    $(ele).attr('on' + links[i].trigger, 'callExecute(this)');
                });
            }
        }

        if (parameters.dataforview) {
            dataforview = JSON.parse(parameters.dataforview);

            angular.injector(['ng', 'widApp'])
                .get('dataService')
                .storeData(dataforview, scope, 'dataforview');

            delete parameters['dataforview'];
        }

        for (var a = 0; a < widforview.length; a++) { all_wids.push({executethis:widforview[a].trim()}); }
        for (var b = 0; b < widforbase.length; b++) { all_wids.push({executethis:widforbase[b].trim()}); }
        for (var c = 0; c < widforbackground.length; c++) { all_wids.push({executethis:widforbackground[c].trim()}); }

        if ($('<div>' + parameters.html + '</div>').find('execute').length > 0) {
            $('<div>' + parameters.html + '</div>').find('execute').each(function(i, ele) {
                var attrs = NNMtoObj(ele.attributes);

                all_wids.push(attrs);
            });
        }

        async.eachSeries(all_wids,
            function(executeObj, cb) {
                execute(executeObj, function (err, resultArray) {
                    angular.injector(['ng', 'widApp'])
                        .get('dataService')
                        .storeData(resultArray, scope, '', function() {
                            cb();
                        });
                });
            },
            function(err) {
                if (callback instanceof Function) { callback(); }
            });
    };

    // adds the passed in object to the current angularJS scope (model) under the passed in name
    exports.addToAngular = addToAngular = function addToAngular(name, obj) {
        var scope = $('body').scope();

        if (scope.hasOwnProperty(name)) {
            if (Array.isArray(scope[name])) { scope.$apply(function() { scope[name].push(obj); }); }
            else { scope.$apply(function() { scope[name] = extend(true, scope[name], obj); }); }
        }
        else {
            angular.injector(['ng', 'widApp'])
                .get('dataService')
                .storeData(obj, scope, name);
        }
    };

    // removes a passed in property from an object or just the entire object
    exports.remFromAngular = remFromAngular = function remFromAngular(name, prop, filter) {
        var scope = $('body').scope();

        if (scope[name]) {
            if (prop) {
                if (Array.isArray(scope[name])) {
                    if (filter) {
                        for (var i = 0; i < scope[name].length; i++) {
                            if (scope[name][i][prop] && scope[name][i][prop] === filter) {
                                scope.$apply(function () {
                                    scope[name].splice(i, 1);
                                });
                            }
                        }
                    }
                } else if (scope[name][prop]) { scope.$apply(function() { delete scope[name][prop]; }); }
            }
            else { scope.$apply(function() { delete scope[name]; }); }
        }
    };

    // call executeService.executeThis from legacy (non angularJS) code
    exports.angularExecute = angularExecute = function angularExecute(parameters, callback) {
        var scope = $('body').scope();
        angular.injector(['ng', 'widApp'])
            .get('executeService')
            .executeThis(parameters, scope, function (err, resultArray) {
                if (callback instanceof Function) { callback(err, resultArray); }
            });
    };

    // helper object which contains helpful functions
    var widAppHelper = {
        getUrlParam: function(name) {
            name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
            var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                results = regex.exec(location.search);
            return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
        },

        queryStrToObj: function(queryString) {
            var params = {},
                queries;

            // Split into key/value pairs
            if (queryString.slice(0, 1) === '?') { queryString = queryString.substring(1, queryString.length); }
            queries = queryString.split("&");

            // Convert the array of strings into an object
            for (var i = 0; i < queries.length; i++ ) {
                var temp = queries[i].split('=');

                // if temp[0] starts with a ?, strip it off.
                if (temp[0].substring(0, 1) == '?') { temp[0] = temp[0].slice(1, temp[0].length); }

                params[temp[0]] = temp[1];
            }

            return params;
        },

        processJS: function(wid, scope, compile) {
            if (typeof $('body') !== 'undefined') {
                var phase = scope.$root.$$phase;
                if (phase !== '$apply' && phase !== '$digest') {
                    scope.$apply(function() {
                        $('body').append(compile('<script>' + wid.script + '</script>')(scope));
                    });
                }
            }
        },

        processCSS: function(wid, scope, compile) {
            if (typeof $('body') !== 'undefined') {
                var phase = scope.$root.$$phase;
                if (phase !== '$apply' && phase !== '$digest') {
                    scope.$apply(function() {
                        $('body').append(compile('<style>' + wid.css + '</style>')(scope));
                    });
                }
            }
        },

        processHtml: function(screenWid, scope, compile) {
            var targetElement = $('#default_view_loc');

            // find targetid from screenwid if it exists
            if (screenWid.command) {
                if (screenWid.command.htmltargetid) { targetElement = $('#' + screenWid.command.htmltargetid); }

                // clear html from element if specified
                if (screenWid.command.htmlcleartargetid) {
                    // widdata to current wid if found
                    if (screenWid.urlparams && screenWid.urlparams.widdata) {
                        async.series([
                            function(cb) {
                                execute({executethis:screenWid.urlparams.widddata}, function (err, widdataRestults) {
                                    // add widdata results to the screenwid in the data model
                                    scope[screenWid.wid] =
                                        extend(true, widAppHelper.mergeNestedArray(widdataRestults), scope[screenWid.wid]);
                                });
                            }
                        ], function(err) {
                            if (err) { console.log('error getting widdata and merging into data model => ' + err); }
                        });
                    }

                    if (screenWid.command.htmlcleartargetid === 'body') {
                        $('#default_view_loc').html('');
                        $('#errorlog').html('');
                        $('#successlog').html('');

                        // call new page event in config-local
                        eventnewpage({}, function (err, results) { });
                    } else {
                        $('#' + screenWid.command.htmlcleartargetid).html('');
                    }
                }
            }

            var phase = scope.$root.$$phase;
            if (phase !== '$apply' && phase !== '$digest') {
                scope.$apply(function() {
                    targetElement.append(compile(screenWid.html)(scope));
                });
            }

            // take care of any <execute></execute> elements
            $('execute').each(function (index, ele) {
                // proceed if execute tag wasn't already processed during server conversion process
                if ($(ele).attr('processed') === undefined || $(ele).attr('processed') !== 'true') {
                    widAppHelper.processExecute(ele, scope, compile);
                    $(ele).attr('processed', 'true');
                }
            });
        },

        processExecute: function(ele, scope, compile) {
            var executeObj = NNMtoObj(ele.attributes);

            if (executeObj.etparams) { executeObj = JSON.parse(executeObj.etparams); }

            execute(executeObj, function(err, resultArr) {
                var results = widAppHelper.mergeNestedArray(resultArr);
                angular.injector(['ng', 'widApp'])
                    .get('dataService')
                    .storeData(results, scope, '', function() {
                        if (results.html) {
                            // take care of any <execute></execute> elements
                            $('<div>' + results.html + '</div>').find('execute').each(function (index, element) {
                                widAppHelper.processExecute(element, scope, compile);
                            });

                            var phase = scope.$root.$$phase;
                            if (phase !== '$apply' && phase !== '$digest') {
                                scope.$apply(function() {
                                    $(ele).append(compile(results.html)(scope));
                                });
                            }
                        }
                        else if (results.script) { widAppHelper.processJS(results, scope, compile); }
                        else if (results.css) { widAppHelper.processCSS(results, scope, compile); }
                    });
            });
        },

        isJsonStr: function(jsonStr) {
            try {
                JSON.parse(jsonStr);
            } catch (e) {
                return false;
            }
            return true;
        },

        removeAddThis: function(addThisObj) {
            for (var prop in addThisObj.addthis) {
                if (addThisObj.addthis.hasOwnProperty(prop)) {
                    addThisObj[prop] = addThisObj.addthis[prop];
                }
            }
            delete addThisObj['addthis'];
            return addThisObj;
        },

        mergeNestedArray: function(nestedArray) {
            var mergedObj = {};

            for (var x = 0; x < nestedArray.length; x++) {
                if (Array.isArray(nestedArray[x])) {
                    for (var i = 0; i < nestedArray[x].length; i++) {
                        if (Array.isArray(nestedArray[x][i])) {
                            for (var y = 0; y < nestedArray[x][i].length; y++) {
                                if (Array.isArray(nestedArray[x][i][y])) {
                                    for (var z = 0; z < nestedArray[x][i][y].length; z++) {
                                        extend(true, mergedObj, nestedArray[x][i][y][z]);
                                    }
                                } else { extend(true, mergedObj, nestedArray[x][i][y]); }
                            }
                        } else { extend(true, mergedObj, nestedArray[x][i]); }
                    }
                } else { extend(true, mergedObj, nestedArray[x]); }
            }

            return mergedObj;
        }
    };
}

/** Functions that can run if angular is undefined **/

// pulls object from scope (model) by wid name
exports.getfromangular = getfromangular = function getfromangular(parameters, callback) {
    if ($ && $('body').scope) { callback(null, $('body').scope()[parameters.wid]); }
    else { callback(null); }
};

exports.gethtmlbyid = gethtmlbyid = function gethtmlbyid(params, callback) {
    execute({executethis:'getwidmaster',wid:params.fromwid},
        function (err, resultsArray) {
            var results = widAppHelper.mergeNestedArray(resultsArray),
                html = result.html || '',
                foundHtml = $('<div>' + html + '</div>').find('#' + results.fromid)[0].outerHTML;

            execute({executethis:'addwidmaster',wid:results.towid,html:foundHtml},
                function (err, returnArray) {
                    callback(null, foundHtml);
                });
        });
};

// passed in html and parameters become a screenWid with the passed in name
// and saved as a screenWid object using addWidMaster
exports.htmlToScreenwid = htmlToScreenwid = function htmlToScreenwid(screenWidName, html, params, callback) {
    var newScreenwid = {executethis:'addwidmaster',wid:screenWidName,html:html},
        htmlDom = $(html);

    if (params) {
        if (params.widforview) { newScreenwid.widforview = widforview; }
        if (params.widforbase) { newScreenwid.widforbase = widforbase; }
        if (params.widforbackground) { newScreenwid.widforbackground = widforbackground; }
        if (params.dataforview) { newScreenwid.dataforview = JSON.stringify(dataforview); }
        if (params.links) { newScreenwid.links = JSON.stringify(links); }
    }

    execute(newScreenwid, function (err, resultArray) {
        if (err && Object.size(err) > 0) {
            console.log('htmlToScreenwid addwidmaster error => ' + JSON.stringify(err));
        }
        if (callback instanceof Function) { callback(resultArray); }
    });
};

// calls callback function, passing in all html derived from passed in screenWid object
exports.screenwidToHtml = screenwidToHtml = function screenwidToHtml(screenWid, callback) {
    var htmlDom = $(screenWid.html),
        htmlString = '';

    function addToElement(ele, cb) {
        var executeObj = NNMtoObj(ele.attributes);

        execute(executeObj, function (err, resultArray) {
            if (err && Object.size(err) > 0) {
                console.log('screenwidToHtml execute error => ' + JSON.stringify(err));
            } else {
                for (var i = 0; i < resultArray.length; i++) {
                    if (resultArray[i].html) { $(ele).append(resultArray[i].html); }
                }
            }

            cb(null);
        });
    }

    async.eachSeries(htmlDom.filter('execute'), addToElement, function (err) {
        htmlDom.each(function (index, element) {
            if (element.outerHTML !== undefined) {
                htmlString += element.outerHTML;
            }
        });

        callback(htmlString);
    });
};