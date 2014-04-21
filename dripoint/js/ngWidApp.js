if(!exports){ var exports = {}; }

// call eventdeviceready from config to see if app needs to be installed
// call outside controller so it happens first

eventdeviceready({}, function (err, results) { });

//<editor-fold desc="App, Factories, and Directives">

if (typeof angular !== 'undefined') {
    var widApp = angular.module('widApp', []);

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
//                        console.log('********************************************');
//                        console.log('**ngModelData** bind-able data for ' + prop + ' :');
//                        console.log(obj[prop]);
//                        console.log('********************************************');
//
//                        if (phase !== '$apply' && phase !== '$digest') {
//                            scope.$apply(function() { scope[prop] = obj[prop]; });
//                        } else { scope[prop] = obj[prop]; }

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
            },

            user: {
                getLocal: function() {
                    if (window.localStorage) {
                        return JSON.parse(window.localStorage.getItem('driUser'));
                    } else { return null; }
                },

                putLocal: function(userId, accessToken, isLoggedIn) {
                    if (window.localStorage) {
                        var driUser = {userid:userId,at:accessToken,loggedin:isLoggedIn};
                        window.localStorage.setItem('driUser', JSON.stringify(driUser));
                    }
                },

                removeLocal: function() {
                    if (window.localStorage) {
                        window.localStorage.removeItem('driUser');
                    }
                },

                getInfo: function(accessToken, callback) {
//                    var parameters = {parameterDTOs:[]};
//                    parameters.parameterDTOs.push({ParameterName:'accesstoken',ParameterValue:accessToken});

                    var parameters = {
                        dri_action: 'getuserinfo?at=f52a89ed-7163-47de-901c-e8bd0b96b7ff',
                        accesstoken: accessToken
                    };

                    return getDriApiData(parameters, function (err, results) {
                        if (err && Object.size(err) > 0) { console.log('execute error => ' + JSON.stringify(err)); }
                        else { callback(results); }
                    });
                },

                getNewAt: function(callback) {
                    return getDriApiData({dri_action:'getnewaccesstoken'}, function (err, results) {
                        if (err && Object.size(err) > 0) { console.log('execute error => ' + JSON.stringify(err)); }
                        else { callback(results); }
                    });
                }
            }
        }
    });

    widApp.factory('executeService', function($http, $compile, dataService) {
        var processExecuteResult = function(result, scope) {
            if (result.addthis) { result = widAppHelper.removeAddThis(result);}

            // if not logged in at this point send browser to login.html
            if (result.etstatus) {
                if (result.etstatus.status && result.etstatus.status === 'unauthorized') {
                    //TODO: change this to add the login screenwid and then redirecting to dripoing.com?wid=loginwid
                    window.location = 'http://dripoint.com/login.html?returnUrl=' + window.location.href;
                }
            }

            // if command.angularexecute exists then set up an angularExecute call based on it's value
            if (result.command && result.command.angularexecute) {
                var executeObj = {};

                if (result.command.angularexecute.parameters) {
                    executeObj = result.command.angularexecute.parameters;
                    delete result.command.angularexecute.parameters;
                }

                if (typeof result.command.angularexecute === 'object') {
                    extend(true, executeObj, result.command.angularexecute);
                } else {
                    executeObj.executethis = result.command.angularexecute;
                }

                angularExecute(executeObj, function (err, returnArray) { });
            }

            dataService.storeData(result, scope, undefined, function (dataset) {
                // check if this is a screenwid and needs to be displayed
                if (dataset.html) {
                    etProcessScreenWid(dataset, scope, function () {
                        widAppHelper.processHtml(dataset, scope, $compile);
                    });
                } else if (dataset.script) { widAppHelper.processJS(dataset, scope, $compile); }
                else if (dataset.css) { widAppHelper.processCSS(dataset, scope, $compile); }
            });
        };

        return {
            executeThis: function(parameters, scope, callback) {
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
            },

            executeOffer: function(parameters, callback) {
                //            parameters.parameterDTOs.push({ParameterName:'apikey',ParameterValue:'2FFA4085C7994016913F8589B765D4E5'});
                parameters.dri_action = 'executeofferid?at=f52a89ed-7163-47de-901c-e8bd0b96b7ff';

                return getDriApiData(parameters, function(err, results) {
                    if (err && Object.size(err) > 0) { console.log('getDriApiData error => ' + JSON.stringify(err)); }
                    else { callback(results); }
                });
            }
        }
    });

    widApp.directive('ngBlur', function() {
        return function(scope, elem, attrs) {
            elem.bind('blur', function() {
                var phase = scope.$root.$$phase;
                if (phase !== '$apply' && phase !== '$digest') {
                    scope.$apply(attrs.ngBlur);
                } else { scope.$apply(attrs.ngBlur); }
            });
        };
    });

    widApp.directive('appendcode', function($compile) {
        return function(scope, element, attrs) {
            scope.$watch(
                function(scope) {
                    return scope.$eval(attrs.appendcode);
                },
                function(html) {
                    element.html(html);
                    var contents = element.contents();
                    $compile(contents)(scope);
                }
            );
        }
    });

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

    //</editor-fold>

    //<editor-fold desc="wid controller">

    widApp.controller('widCtrl', ['$scope', '$compile', 'dataService', 'executeService',
        function($scope, $compile, dataService, executeService) {
            $scope.data = {};
            $scope.ajax = {};
            var querystring = window.location.search,
                urlParameters = widAppHelper.queryStrToObj(querystring.substring(1)),
                currentUser = dataService.user.getLocal();
//                processParams = {};

            gatherParamsAndExecute(urlParameters, $scope);

//            // save url parameters to 'urlparams' wid
//            if (urlParameters.wid) {
//                if (!urlParameters.addthis) { urlParameters.addthis = {wid:urlParameters.wid}; }
//                else { urlParameters.addthis.wid = urlParameters.wid; }
//                delete urlParameters['wid'];
//            }
//
//            if (urlParameters.executethis) {
//                if (!urlParameters.addthis) { urlParameters.addthis = {executethis:urlParameters.executethis}; }
//                else { urlParameters.addthis.executethis = urlParameters.executethis; }
//                delete urlParameters['executethis'];
//            }
//
//            var urlExecuteObj = extend(true, urlParameters, {executethis:'updatewid', wid:'urlparams'});
//
//            // TODO: make these execute calls their own function and all it from the callExecute() function
//
//            // get urlparams and inwid parameters and call executeThis with them
//            // executeThis will check for screenwids to display
//            execute(urlExecuteObj, function (err, addUrlResults) {
//                execute({executethis:'urlparams'}, function (err, urlResultArr) {
//                    var urlResultObj = widAppHelper.mergeNestedArray(urlResultArr);
//
//                    if (urlResultObj.addthis) { urlResultObj = widAppHelper.removeAddThis(urlResultObj); }
//
//                    $scope.urlparams = urlResultObj;
//
//                    processParams = extend(true, urlResultObj, processParams);
//
//                    execute({executethis:'inwid'}, function (err, inwidResultArr) {
//                        var inwidResults = widAppHelper.mergeNestedArray(inwidResultArr);
//                        if (inwidResults.wid && inwidResults.wid === 'inwid') { delete inwidResults['wid']; }
//
//                        processParams = extend(true, inwidResults, processParams);
//
//                        // TODO : clear inwid wid here
//
//                        if (processParams.addthis) { processParams = widAppHelper.removeAddThis(processParams); }
//
//                        if (processParams.wid) {
//                            processParams.executethis = processParams.wid;
//                            delete processParams['wid'];
//                        }
//
//                        if (processParams.metadata) { delete processParams['metadata']; }
//
//                        //TODO: after this execute call, add to the 'wid' (whatever is the wid in this next execute call
//                        //TODO: in the data model, add what came back from widdata call and also what is in urlparams
//                        //TODO: also add a 'urlparams' property to the wid in the model and add the urlparams to it as well
//                        executeService.executeThis(processParams, $scope);
//                    });
//                });
//            });

//            // package url parameters into model
//            if (Object.size(widAppHelper.queryStrToObj(location.search)) > 0) {
//                $scope.urlparameters = widAppHelper.queryStrToObj(location.search);
//            }

            // package current users info into the model
            if (currentUser && currentUser.loggedin) {
                dataService.user.getInfo(currentUser.at, function (results) {
                    var info = JSON.parse(results.userinfo);
                    $scope.userinfo = info;
                    console.log('**ngModelData** data for current userinfo :');
                    console.log($scope.userinfo);

                    // update userid in local user object
                    var user = dataService.user.getLocal();
                    user.userid = info.UserId;
                    dataService.user.putLocal(user.userid, user.at, user.loggedin);
                });
            }

//            //<editor-fold desc='addDataWid section'>
//
//            $scope.addWidName = "";
//            $scope.deleteWid = false;
//
//            $scope.addWid = function () {
//                var pNames = $('.pname');
//                var pValues = $('.pvalue');
//                var updateParams = {wid:$scope.addWidName,executethis:'addwidmaster'};
//
//                for (var i = 0; i < pNames.length; i++) { updateParams[pNames[i].value] = pValues[i].value; }
//
//                if ($scope.deleteWid) { updateParams.metadata.status = '5'; }
//
//                executeService.executeThis(updateParams, $scope, function () {
//                    $scope.clearAddWidForm();
//                    $('#successlog').html("The wid has been successfully added or updated!");
//                    //            self.location = "widForViewRepeatExample.html?wid=" + $scope.addWidName;
//                });
//            };
//
//            $scope.newPropRow = function() {
//                $('#propertyList').append(widAppHelper.newPropRowHtml);
//                $('.pname').last().focus();
//            };
//
//            $scope.clearAddWidForm = function() {
//                $('.added').remove();
//                $('#widname,.pname,.pvalue').val('');
//            };
//
//            //</editor-fold>

            //<editor-fold desc='login section'>

            $scope.loginGuid = '';

            $scope.login1 = function() {
                $scope.clearlogs();
                var at = ''
//                    , parameters = {parameterDTOs:[]}
                    , user = dataService.user.getLocal()
                    , parameters = {
                        dri_action: 'login1',
                        phonenumber: $('#phonenumber').val()
                    };

//                parameters.parameterDTOs.push({ParameterName:'phonenumber',ParameterValue:$('#phonenumber').val()});

                if (user) { at = user.at; }
                else {
                    dataService.user.getNewAt(function(results) { at = results.accesstoken; });
                    dataService.user.putLocal('', at, false);
                }

                $scope.ajax.loading = true;

                getDriApiData(parameters, function (err, results) {
                    if (err && Object.size(err) > 0) { console.log('getDriApiData error => ' + JSON.stringify(err)); }
                    else {
                        $('#pin,#pingrp').show();
                        $('#phonegrp').hide();

                        $scope.loginGuid = results.guid;
                        $scope.ajax.loading = false;
                    }
                });
            };

            $scope.login2 = function() {
                $scope.clearlogs();
                var user = dataService.user.getLocal();
//                var parameters = {parameterDTOs:[]};
//                parameters.parameterDTOs.push({ParameterName:'accesstoken',ParameterValue:user.at},
//                    {ParameterName:'pin',ParameterValue:$('#pin').val()},
//                    {ParameterName:'guid',ParameterValue:$scope.loginGuid});

                var getDriDataObj = {
                    dri_action: 'login2',
                    accesstoken: user.at,
                    pin: $('#pin').val(),
                    guid: $scope.loginGuid
                };

                $scope.ajax.loading = true;

                getDriApiData(getDriDataObj, function(err, results) {
                    if (err && Object.size(err) > 0) { console.log('getDriApiData error => ' + JSON.stringify(err)); }
                    else {
                        if (results.Succeeded === 'True') {
                            dataService.user.putLocal('', user.at, true);
                            $('#successlog').html("Thank you for logging into DRI!");
                        } else {
                            var error = results.Message !== '' ? results.Message : 'An error has occurred.';
                            $('#errorlog').html(error);
                        }

                        $scope.ajax.loading = false;
                        var returnUrl = widAppHelper.getUrlParam('returnUrl');
                        if (returnUrl !== '') { window.location = returnUrl; }
                    }
                });
            };

            $scope.logout = function() {
                dataService.user.removeLocal();
                $('#successlog').html('You are now logged out.');
                window.location = '../login.html';
            };

            $scope.cancelLogin = function() {
                $scope.clearlogs();
                $('#phonenumber,#pin').val('');
                $('#pin,#pingrp').hide();
                $('#phonegrp').show();
            };

            //</editor-fold>

            //<editor-fold desc='misc scoped helper functions'>

            $scope.widFromUrl = function() {
                if ($scope.urlparameters && $scope.urlparameters.wid) {
                    return $scope[$scope.urlparameters.wid];
                } else { return undefined; }
            };

            $scope.clearlogs = function() { $('#errorlog,#successlog').html(''); };

            $scope.listLength = function(list) { return Object.size(list); };

            $scope.getRawHtml = function() {
                $('#rawhtml').text(document.getElementsByTagName('html')[0].outerHTML);
                $scope.showrawhtml = true;
            };

            //</editor-fold>
        }
    ]);

    //</editor-fold>

    //<editor-fold desc="helper object and functions"

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

        newPropRowHtml: "<span class='added'><div class='input-group col-md-6'>" +
            "<span class='input-group-addon'>Key</span>" +
            "<input type='text' class='pname form-control'>" +
            "</div><div class='input-group col-md-6'>" +
            "<span class='input-group-addon'>Value</span>" +
            "<input type='text' class='pvalue form-control'>" +
            "<div class='input-group-btn delrowbtn'><button class='btn btn-info' " +
            "onclick='$(this).parent().parent().parent().remove();'>-</button></div></div></span>",

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
                    if (screenWid.command.htmlcleartargetid === 'body') {
                        $('#default_view_loc').html('');
                        $('#errorlog').html('');
                        $('#successlog').html('');

                        // call new page event in config-local
                        eventnewpage();
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

//            // update screenwid in data model once executes have been processed
//            updateScreenWidModel(screenWid.wid);
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

    exports.gatherParamsAndExecute = gatherParamsAndExecute = function gatherParamsAndExecute(urlParameters, scope) {
        var ogUrlParams = extend(true, {}, urlParameters);

        function finishProcess(parameters) {
            if (parameters.addthis) { parameters = widAppHelper.removeAddThis(parameters); }

            if (parameters.wid) {
                parameters.executethis = parameters.wid;
                delete parameters['wid'];
            }

            if (parameters.metadata) { delete parameters['metadata']; }

            //TODO: after this execute call, add to the 'wid' (whatever is the wid in this next execute call
            //TODO: in the data model, add what came back from widdata call and also what is in urlparams
            //TODO: also add a 'urlparams' property to the wid in the model and add the urlparams to it as well
            angular.injector(['ng', 'widApp'])
                .get('executeService')
                .executeThis(parameters, scope, function (err, results) {
                    scope[parameters.wid || parameters.executethis].urlparams = ogUrlParams;
                });
        }

        // save url parameters to 'urlparams' wid
        // hide 'wid' and 'executethis' parameters behind addthis if found
        if (urlParameters.wid) {
            if (!urlParameters.addthis) { urlParameters.addthis = {wid:urlParameters.wid}; }
            else { urlParameters.addthis.wid = urlParameters.wid; }
            delete urlParameters['wid'];
        }

        if (urlParameters.executethis) {
            if (!urlParameters.addthis) { urlParameters.addthis = {executethis:urlParameters.executethis}; }
            else { urlParameters.addthis.executethis = urlParameters.executethis; }
            delete urlParameters['executethis'];
        }

        var addUrlParamsObj = extend(true, urlParameters, {executethis:'updatewid', wid:'urlparams'});

        // get urlparams and inwid parameters and call executeThis with them
        // executeThis will check for screenwids to display
        execute(addUrlParamsObj, function (addUrlErr, addUrlResults) {
            execute({executethis:'urlparams'}, function (err, urlResultArr) {
                var processParams = widAppHelper.mergeNestedArray(urlResultArr);

                if (processParams.addthis) { processParams = widAppHelper.removeAddThis(processParams); }

                if (processParams.widdata) {
                    execute({executethis:processParams.widdata}, function (err, widdataResults) {
                        delete processParams['widdata'];
                        processParams = extend(true, widAppHelper.mergeNestedArray(widdataResults), processParams);
                        finishProcess(processParams);
                    });
                } else { finishProcess(processParams); }
            });
        });
    };

    function callExecute(ele) {
        var attrObj = NNMtoObj(ele.attributes),
            parameters = extend(true, {command:{parameters:{eventdata:{}}}}, JSON.parse(attrObj.etparams)),
            scope = $('body').scope();

        // send calling element and any additional info into the execute process
        parameters.command.parameters.eventdata.element = $('<div>' + ele + '</div>').html();
        parameters.command.parameters.eventdata.originatingscreen = widAppHelper.getUrlParam('wid');

        // add urlparameters and inwid data to parameters
//        parameters = extend(true, scope.inwid, scope.urlparams, parameters);

        // TODO : get inwid everytime to always get the latest, don't store in data model

        parameters = extend(true, scope.inwid, parameters); // not using urlparams for now as it causes conflicting wid properties at times.

        angular.injector(['ng', 'widApp'])
            .get('executeService')
            .executeThis(parameters, scope, function (err, resultArray) {
                if (err && Object.size(err) > 0) {
                    console.log('error in execute process that was bound using links event binding => ');
                    console.log(err.error);
                }
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

    // convert a NamedNodeMap to an Object
    function NNMtoObj(namedNodeMap) {
        var obj = {};
        for (var i = 0; i < namedNodeMap.length; i++) {
            obj[namedNodeMap[i].name] = namedNodeMap[i].value;
        }
        return obj;
    }

    //</editor-fold>

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

        scope.widforview = widforview;

        if (parameters.widforbase) { widforbase = parameters.widforbase.split(','); delete parameters['widforbase']; }
        else if (typeof widForBase !== 'undefined') { widforbase = widForBase.split(','); }

        scope.widforbase = widforbase;

        if (parameters.widforbackground) { widforbackground = parameters.widforbackground.split(','); delete parameters['widforbackground']; }
        else if (typeof widForBackground !== 'undefined') { widforbackground = widForBackground.split(','); }

        scope.widforbackground = widforbackground;

        if (parameters.links) { links = JSON.parse(parameters.links); delete parameters['links']; }

        scope.links = links;

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

        angular.injector(['ng', 'widApp'])
            .get('dataService')
            .storeData(obj, scope, name);
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
}

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

    // commented, this causes execute() to read property '0' and convert it to 'wid' which is bad
//    // add all execute elements as numbered properties of the screenWid
//    htmlDom.filter('execute').each(function (i, ele) {
//        newScreenwid[i.toString()] = ele.outerHTML;
//    });

    execute(newScreenwid, function (err, resultArray) {
        if (err && Object.size(err) > 0) {
            console.log('htmlToScreenwid addwidmaster error => ' + JSON.stringify(err));
        }
        if (callback instanceof Function) { callback(resultArray); }
    });
};

//exports.updateScreenWidModel = updateScreenWidModel = function updateScreenWidModel(screenWidName) {
//    var newScreenwid = {executethis:'addwidmaster',wid:screenWidName,html:$('body').html()};
//
//    if (typeof widforview !== 'undefined') { newScreenwid.widforview = widforview; }
//    if (typeof widforbase !== 'undefined') { newScreenwid.widforbase = widforbase; }
//    if (typeof widforbackground !== 'undefined') { newScreenwid.widforbackground = widforbackground; }
//    if (typeof dataforview !== 'undefined') { newScreenwid.dataforview = JSON.stringify(dataforview); }
//    if (typeof links !== 'undefined') { newScreenwid.links = JSON.stringify(links); }
//
//    // update screenwid in the data model
//    addToAngular(screenWidName, newScreenwid);
//};

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
};if(!exports){ var exports = {}; }