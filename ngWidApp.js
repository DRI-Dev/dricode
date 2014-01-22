if(!exports){ var exports = {}; }

//<editor-fold desc="App, Factories, and Directives">

var widApp = angular.module('widApp', []);

widApp.factory('dataService', function($http, $compile) {
    var storeAllData = function(obj, scope, objName) {
        var thisWid = objName
            ? objName
            : obj.wid
            ? obj.wid
            : undefined;

        if (thisWid) {
            console.log('********************************************');
            console.log('**ngModelData** bind-able data for ' + thisWid + ' :');
            console.log(obj);
            console.log('********************************************');

            scope[thisWid] = obj;
        }

        for (var prop in obj) {
            if (obj[prop] instanceof Object) {
                console.log('********************************************');
                console.log('**ngModelData** bind-able data for ' + prop + ' :');
                console.log(obj[prop]);
                console.log('********************************************');

                scope[prop] = obj[prop];

                storeAllData(obj[prop], scope, prop);
            } else {
                scope.data[prop] = obj[prop];
            }
        }
    };

    return {
        storeData: function(results, scope, modelKey) {
            if (results !== null && results instanceof Object) {
                storeAllData(results, scope, modelKey);
            } else if (Array.isArray(results)) {
                for (var i = 0; i < results.length; i++) {
                    if (results[i] !== null && results[i] instanceof Object) {
                        storeAllData(results[i], scope, modelKey);
                    }
                }
            }
        },

        compileWithScope: function(whatToCompile) {
            var scope = $('body').scope();
            scope.$apply(function() {
                $compile(whatToCompile)(scope);
            });

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
                var parameters = {parameterDTOs:[]};
                parameters.parameterDTOs.push({ParameterName:'accesstoken',ParameterValue:accessToken});

                return getDriApiData('getuserinfo?at=f52a89ed-7163-47de-901c-e8bd0b96b7ff', parameters, function(err, results) {
                    if (err && Object.size(err) > 0) { console.log('execute error => ' + JSON.stringify(err)); }
                    else { callback(results); }
                });
            },

            getNewAt: function(callback) {
                return getDriApiData('getnewaccesstoken', {}, function(err, results) {
                    if (err && Object.size(err) > 0) { console.log('execute error => ' + JSON.stringify(err)); }
                    else { callback(results); }
                });
            }
        }
    }
});

widApp.factory('executeService', function($http, dataService) {
    return {
        executeThis: function(parameters, scope, callback) {
//            if (!parameters.etenvironment) { parameters.etenvironment = {}; }
//            var user = dataService.user.getLocal();
//            if (user) {
//                parameters.etenvironment.accesstoken = user.at;
//            } // MOVE etenvironment code to the server function in config-local.js

            execute(parameters, function(err, resultArray) {
                for (var i = 0; i < resultArray.length; i++) {
                    // if not logged in at this point send browser to login.html
                    if (resultArray[i].etstatus) {
                        if (resultArray[i].etstatus.status && resultArray[i].etstatus.status === 'unauthorized') {
                            window.location = 'http://dripoint.com/login.html?returnUrl=' + window.location.href;
                        }
                    }

                    dataService.storeData(resultArray[i], scope);
                }

                // send array to callback
                if (callback instanceof Function) { callback(err, resultArray); }
            });
        },

        executeOffer: function(parameters, callback) {
//            parameters.parameterDTOs.push({ParameterName:'apikey',ParameterValue:'2FFA4085C7994016913F8589B765D4E5'});

            return getDriApiData('executeofferid?at=f52a89ed-7163-47de-901c-e8bd0b96b7ff', parameters, function(err, results) {
                if (err && Object.size(err) > 0) { console.log('getDriApiData error => ' + JSON.stringify(err)); }
                else { callback(results); }
            });
        }
    }
});

widApp.directive('ngBlur', function() {
    return function(scope, elem, attrs) {
        elem.bind('blur', function() {
            scope.$apply(attrs.ngBlur);
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

//</editor-fold>

//<editor-fold desc="wid controller">

widApp.controller('widCtrl', ['$scope', 'dataService', 'executeService', function($scope, dataService, executeService) {
    $scope.data = {};
    $scope.ajax = {};
    var querystring = window.location.search
        , parameters = helper.queryStrToObj(querystring.substring(1))
        , currentUser = dataService.user.getLocal();

    if (!parameters.executethis) { parameters.executethis = 'etProcessParameters'; }

    executeService.executeThis(parameters, $scope);

    // package url parameters into model
    if (Object.size(helper.queryStrToObj(location.search)) > 0) {
        $scope.urlparameters = helper.queryStrToObj(location.search);
    }

    // package current users info into the model
    if (currentUser && currentUser.loggedin) {
        dataService.user.getInfo(currentUser.at, function(results) {
            var info = JSON.parse(results[0].Value);
            $scope.userinfo = info;
            console.log('**ngModelData** data for current userinfo :');
            console.log($scope.userinfo);

            // update userid in local user object
            var user = dataService.user.getLocal();
            user.userid = info.UserId;
            dataService.user.putLocal(user.userid, user.at, user.loggedin);
        });
    }

    // package current users info into the model
    if (currentUser && currentUser.loggedin) {
        dataService.user.getInfo(currentUser.at, function(results) {
            var info = JSON.parse(results[0].Value);
            $scope.userinfo = info;
            console.log('**ngModelData** data for current userinfo :');
            console.log($scope.userinfo);

            // update userid in local user object
            var user = dataService.user.getLocal();
            user.userid = info.UserId;
            dataService.user.putLocal(user.userid, user.at, user.loggedin);
        });
    }

    //<editor-fold desc='addDataWid section'>

    $scope.addWidName = "";
    $scope.deleteWid = false;

    $scope.addWid = function () {
        var pNames = $('.pname');
        var pValues = $('.pvalue');
        var updateParams = {wid:$scope.addWidName,executethis:'addwidmaster'};

        for (var i = 0; i < pNames.length; i++) { updateParams[pNames[i].value] = pValues[i].value; }

        if ($scope.deleteWid) { updateParams.Status = '5'; }

        executeService.executeThis(updateParams, $scope, function() {
            $scope.clearAddWidForm();
            $('#successlog').html("The wid has been successfully added or updated!");
//            self.location = "widForViewRepeatExample.html?wid=" + $scope.addWidName;
        });
    };

    $scope.newPropRow = function() {
        $('#propertyList').append(helper.newPropRowHtml);
        $('.pname').last().focus();
    };

    $scope.clearAddWidForm = function() {
        $('.added').remove();
        $('#widname,.pname,.pvalue').val('');
    };

    //</editor-fold>

    //<editor-fold desc='login section'>

    $scope.loginGuid = '';

    $scope.login1 = function() {
        $scope.clearlogs();
        var at = ''
            , parameters = {parameterDTOs:[]}
            , user = dataService.user.getLocal();

        parameters.parameterDTOs.push({ParameterName:'phonenumber',ParameterValue:$('#phonenumber').val()});

        if (user) { at = user.at; }
        else {
            dataService.user.getNewAt(function(results) { at = results[0].Value; });
            dataService.user.putLocal('', at, false);
        }

        $scope.ajax.loading = true;

        getDriApiData('login1', parameters, function(err, results) {
            if (err, Object.size(err) > 0) { console.log('getDriApiData error => ' + JSON.stringify(err)); }
            else {
                $('#pin,#pingrp').show();
                $('#phonegrp').hide();

                $scope.loginGuid = results[0].Value;
                $scope.ajax.loading = false;
            }
        });
    };

    $scope.login2 = function() {
        $scope.clearlogs();
        var user = dataService.user.getLocal();
        var parameters = {parameterDTOs:[]};
        parameters.parameterDTOs.push({ParameterName:'accesstoken',ParameterValue:user.at},
            {ParameterName:'pin',ParameterValue:$('#pin').val()},
            {ParameterName:'guid',ParameterValue:$scope.loginGuid});

        $scope.ajax.loading = true;

        getDriApiData('login2', parameters, function(err, results) {
            if (err, Object.size(err) > 0) { console.log('getDriApiData error => ' + JSON.stringify(err)); }
            else {
                if (results[0].Value === 'True') {
                    dataService.user.putLocal('', user.at, true);
                    $('#successlog').html("Thank you for logging into DRI!");
                } else {
                    var error = results[7].Value !== '' ? results[7].Value : 'An error has occurred.';
                    $('#errorlog').html(error);
                }

                $scope.ajax.loading = false;
                var returnUrl = helper.getUrlParam('returnUrl');
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
}]);

//</editor-fold>

//<editor-fold desc="helper object and functions"

var helper = {
    getUrlParam: function(name) {
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    },

    queryStrToObj: function(queryString) {
        var params = {}, noquestion, queries, temp, i, l;

        // Split into key/value pairs
        noquestion = queryString.substring(1, queryString.length);
        queries = queryString.split("&");

        // Convert the array of strings into an object
        for ( i = 0, l = queries.length; i < l; i++ ) {
            temp = queries[i].split('=');

            // TODO : find out if temp[0] starts with a ?, if so, strip it off.

            params[temp[0]] = temp[1];
        }

        return params;
    },

    newPropRowHtml: "<span class='added'><div class='input-group col-md-6'>" +
        "<span class='input-group-addon'>Key</span>" +
        "<input type='text' class='pname form-control'>" +
        "</div><div class='input-group col-md-6'>" +
        "<span class='input-group-addon'>Value</span>" +
        "<input type='text' class='pvalue form-control'></div></span>",

    processHtml: function(screenWid) {
        var scope = $('body').scope();

        if (screenWid.html instanceof Array) {
            for (var i = 0; i < screenWid.html.length; i++) {
                if (screenWid.html[i].wid) {
                    var executeObj = {excutethis:'getwidmaster',wid:screenWid.html[i]};

                    angular.injector(['ng', 'widApp'])
                        .get('executeService')
                        .executeThis(executeObj, scope, function(err, resultArray) {
                            if (err && object.size(err) > 0) {
                                console.log('execute error while processing html => ' + JSON.stringify(err));
                            } else {
                                for (var i = 0; i < resultArray.length; i++) {
                                    if (resultArray[i].html) { helper.processHtml(resultArray[i]); }
                                }
                            }
                        });
                } else if (screenWid.html[i].html) {
                    helper.appendHtml(screenWid.html[i].html, screenWid.htmlplacement || undefined);
                }
            }
        } else {
            helper.appendHtml(screenWid.html, screenWid.htmlplacement || undefined);
        }
    },

    appendHtml: function(html, targetId) {
        if (targetId) {
            $('#' + targetId).append(html);
        } else {
            $('#default_view_loc').append(html);
        }

        // take care of any <execute> elements
        $('execute').each(function(i, ele) {
            var executeObj = NNMtoObj(ele.attributes);

            execute(executeObj, function(err, results) {
                if (err && Object.size(err) > 0) {
                    console.log('screenwidToHtml execute error => ' + JSON.stringify(err));
                } else {
                    if (results.html) { $(ele).append(results.html); }
                }
            });
        });
    },

    executeForBinding: function() {
        return function() {
            var attrObj = NNMtoObj(this.attributes),
                parameters = JSON.parse(attrObj.etparams);

            execute(parameters,
                function(err, resultArray) {
                    if (err && Object.size(err) > 0) {
                        console.log('error in execute process that was bound using links event binding => ' + JSON.stringify(err));
                    }
                });
        }
    }
};

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

//<editor-fold desc="wid landing spot functions">

exports.etProcessParameters = etProcessParameters = function etProcessParameters(parameters, callback) {
    var widdata = '',
        wid = '',
        executeObj = {};

    if (parameters.wid) {
//        executeObj.executethis = parameters.wid; // temporarily altered until this process is fixed.

        // calling getwidmaster temporarily until executethis:<wid> process is fixed
        executeObj.executethis = 'getwidmaster';
        executeObj.wid = parameters.wid;

        delete parameters['wid'];
    } else if (parameters.widdata) {
        executeObj.executethis = parameters.widdata;
        delete parameters['widdata'];
    }

    if (parameters.widdata) {
        executeObj.preexecute = parameters.widdata;
        delete parameters['widdata'];
    }

    executeObj.postexecute = 'inwid';

    var processParams = extend(true, executeObj, parameters);

    execute(processParams, function(err, resultArray) {
        if (err && Object.size(err) > 0) {
            console.log('execute error => ' + JSON.stringify(err));
            callback(err, {});
        }
        else {
            for (var i = 0; i < resultArray.length; i++) {
                if (resultArray[i].html) {
                    helper.processHtml(resultArray[i]);
                }

                // clear 'inwid' wid
                execute(
                    {executethis:'addwidmaster', wid:'inwid'},
                    function(err, retArray) {
                        if (err && Object.size(err) > 0) { console.log('execute error => ' + JSON.stringify(err)); }
                    }
                );

                etProcessScreenWid(resultArray[i]);
            }

            callback(null, resultArray);
        }
    });
};

exports.etProcessScreenWid = etProcessScreenWid = function etProcessScreenWid(parameters) {
    var widforview = [],
        widforbase = [],
        widforbackground = [],
        links = [],
        dataforview = {},
        all_wids = [],
        scope = $('body').scope();

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
            : 'idAndClassMissing';

        if (identifier === 'idAndClassMissing') {
            console.log('links object must contain an id or class property. => ' + JSON.stringify(links[i]));
        }

        var eventParameters = links[i].parameters ? JSON.parse(links[i].parameters) : {};
        eventParameters.executethis = links[i].action;

        // add event attributes to element
        $(identifier).attr('etparams', JSON.stringify(eventParameters));

        // add event listener to element
        $(identifier).on(links[i].trigger, helper.executeForBinding());

//        // add event listener to element
//        $(identifier).on(links[i].trigger, helper.executeForBinding(eventParameters));
    }

    if (parameters.dataforview) {
        dataforview = JSON.parse(parameters.dataforview);

        angular.injector(['ng', 'widApp'])
            .get('dataService')
            .storeData(dataforview, scope, 'dataforview');

        delete parameters['dataforview'];
    }

    for (var a = 0; a < widforview.length; a++) { all_wids.push(widforview[a].trim()); }
    for (var b = 0; b < widforbase.length; b++) { all_wids.push(widforbase[b].trim()); }
    for (var c = 0; c < widforbackground.length; c++) { all_wids.push(widforbackground[c].trim()); }

    for (var d = 0; d < all_wids.length; d++) {
        var executeObj = {};
        executeObj.executethis = 'getwidmaster';
        executeObj.wid = all_wids[d];
        executeObj['command.convertmethod'] = 'toobject';

        angular.injector(['ng', 'widApp'])
            .get('executeService')
            .executeThis(executeObj, scope, function(err, resultArray) {
                if (err && object.size(err) > 0) {
                    console.log('execute error while processing html => ' + JSON.stringify(err));
                } else {
                    for (var i = 0; i < resultArray.length; i++) {
                        if (resultArray[i].html) {
                            helper.processHtml(resultArray[i]);
                        }
                    }
                }
            });
    }
};

//</editor-fold>

// get an object or function from the current angularJS scope based on passed in property name
exports.getFromAngular = getFromAngular = function getFromAngular(propName) {
    return $('body').scope()[propName];
};

// adds the passed in object to the current angularJS scope (model) under the passed in name
exports.addToAngular = addToAngular = function addToAngular(name, obj) {
    $('body').scope()[name] = obj;
};

// call executeService.executeThis from legacy (non angularJS) code
exports.angularExecuteThis = angularExecuteThis = function angularExecuteThis(parameters, callback) {
    var scope = $('body').scope();
    angular.injector(['ng', 'widApp'])
        .get('executeService')
        .executeThis(parameters, scope, function(err, resultArray) {
            // do something here in the future?
            if (callback instanceof Function) { callback(err, resultArray); }
        });
};

// passed in html and parameters become a screenWid with the passed in name
// and saved as a screenWid object using addWidMaster
function htmlToScreenwid(screenWidName, html, params) {
    var newScreenwid = {executethis:'addwidmaster',wid:screenWidName,html:html},
        htmlDom = $(html);

    if (params) {
        if (params.widforview) { newScreenwid.widforview = widforview; }
        if (params.widforbase) { newScreenwid.widforbase = widforbase;}
        if (params.widforbackground) { newScreenwid.widforbackground = widforbackground; }
        if (params.dataforview) { newScreenwid.dataforview = JSON.stringify(dataforview); }
        if (params.links) { newScreenwid.links = JSON.stringify(links); }
    }

    // add all execute elements as numbered properties of the screenWid
    htmlDom.filter('execute').each(function(i, ele) {
        newScreenwid[i.toString()] = ele.outerHTML;
    });

    execute(newScreenwid, function(err, resultArray) {
        if (err && Object.size(err) > 0) {
            console.log('htmlToScreenwid addwidmaster error => ' + JSON.stringify(err));
        }
    });
}

// calls callback function, passing in all html derived from passed in screenWid object
function screenwidToHtml(screenWid, callback) {
    var htmlDom = $(screenWid.html),
        htmlString = '';

    function addToElement(ele, cb) {
        var executeObj = NNMtoObj(ele.attributes);

        execute(executeObj, function(err, resultArray) {
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

    async.each(htmlDom.filter('execute'), addToElement, function(err) {
        htmlDom.each(function(index, element) {
            if (element.outerHTML !== undefined) {
                htmlString += element.outerHTML;
            }
        });

        callback(htmlString);
    });
}