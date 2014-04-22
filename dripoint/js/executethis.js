// copyright (c) 2014 DRI
// execute is the asynchronous version  has an etbypass option
// executelist executes list (howToDoList and whatToDoList).  It accepts a structure as in config
//
// dothis creates a howToDoList, whatToDoList based on a target function, stored and sent in configuration.  Then calls executelist
//
// getexecuteobject returns the status of a howToDo whatToDo combination
//
// config params
// config dofn
//

(function (window) {
    // 'use strict';

    var execute, executethis, etexecute;

    exports.executethis = window.executethis = executethis = function executethis(incomingparams, callback, overallError) {
        // get environment -- user id
        // executeid

        execute(incomingparams, function (err, res) {
            // If error, bounce out
            if (err && Object.keys(err).length > 0) {
                callback(err, res);
            } else {
                try {
                    processevent("eventexecuteend", function (err, res) {
                        overallError.push(err);
                        callback(err, res);
                    });
                } catch (err) {
                    var finalobject = createfinalobject({"result": "executethis"}, {}, "executethis", err, res);
                    console.log('** Error Caught in the executethis() function in executethis.js ** => ' + err);
                    console.log('** finalobject created from error => ' + JSON.stringify(finalobject));
                    callback(finalobject.err, finalobject.res);
                }
            }
        })
    };


    // pre, mid, post tries to combine results
    // if pre = array (query) then
    exports.internalexecute = window.internalexecute = internalexecute = function internalexecute(incomingparams, callback) {
        callback(null, incomingparams);
    };

    exports.execute = window.execute = execute = function execute(incomingparams, callback) {
        try {
            var inboundparms_111 = arguments;
            var inboundparms;
            var result, commandmultiple;
            var executeend;
            var parametersend;
            var inarray = [];
            var command = {};
            //debuglevel = 11
            proxyprinttodiv("execute - hello from execute", incomingparams, 11);

            if (isString(incomingparams)) {
                var temp = {};
                temp['executethis'] = incomingparams;
                proxyprinttodiv("execute - array params received I", temp, 11);
                incomingparams = temp;
                proxyprinttodiv("execute - array params received I", incomingparams, 11);
            }
            proxyprinttodiv("execute - hello from execute  II", incomingparams, 11);

            proxyprinttodiv("execute - incomingparams 1", incomingparams, 11);
            if ((incomingparams instanceof Array)) {
                proxyprinttodiv("execute - array params received ", incomingparams, 11);
                executethismultiple(incomingparams, command, callback);

            } else {

                proxyprinttodiv("execute - incomingparams 2", incomingparams, 11);
                if (incomingparams.command && incomingparams.command.server) {
                    var fn = incomingparams.command.server;
                    delete incomingparams.command.server;
                    window[fn](incomingparams, function (err, res) {
                        callback(err, res);
                    })
                } else {
                    proxyprinttodiv('>>>> execute incomingparams ', incomingparams, 11);

                    var filter_data = getcommand(incomingparams, {
                            "command": {
                                "internalcall": true,
                                "adopt": "",
                                "resultparameters": "",
                                "result": "",
                                "execute": "",
                                "environment": "",
                                "inherit": "",
                                "executefilter": "",
                                "executelimit": 15,
                                "executemethod": "execute",
                                "executeorder": "series",
                                "beforemultiple": {
                                    "overallresultrule": "clearresults",
                                    "overallerrorrule": "waterfall",
                                    "resultrule": "waterfall",
                                    "errorrule": "nullwaterfall"
                                },
                                "duringmultiple": {
                                    "overallresultrule": "pusharray",
                                    "overallerrorrule": "waterfall",
                                    "resultrule": "waterfall",
                                    "errorrule": "nullwaterfall"
                                },
                                "beforeendmultiple": {
                                    "overallresultrule": "waterfall",
                                    "overallerrorrule": "waterfall",
                                    "resultrule": "waterfall",
                                    "errorrule": "nullwaterfall"
                                },
                                "beforepreexecute": {
                                    "overallresultrule": "waterfall",
                                    "overallerrorrule": "waterfall",
                                    "resultrule": "waterfall",
                                    "errorrule": "nullwaterfall"
                                },
                                "beforemidexecute": {
                                    "overallresultrule": "waterfall",
                                    "overallerrorrule": "waterfall",
                                    "resultrule": "waterfall",
                                    "errorrule": "nullwaterfall"
                                },
                                "beforepostexecute": {
                                    "overallresultrule": "waterfall",
                                    "overallerrorrule": "waterfall",
                                    "resultrule": "waterfall",
                                    "errorrule": "nullwaterfall"
                                },
                                "beforeendexecute": {
                                    "overallresultrule": "objectwaterfall",
                                    "overallerrorrule": "waterfall",
                                    "resultrule": "waterfall",
                                    "errorrule": "nullwaterfall"
                                },
                                "overallerror": [{}],
                                "overallresult": [{}],
                                "currenterror": null,
                                "currentresult": {},
                                "currentparameters": {},
                                "multipleexecute": [],
                                "parameters": {}
                            }
                        }, {
                            "command": {
                                "internalcall": "",
                                "adopt": "",
                                "resultparameters": "",
                                "result": "",
                                "execute": "",
                                "environment": "",
                                "inherit": "",
                                "executefilter": "",
                                "executelimit": "",
                                "executemethod": "",
                                "executeorder": "",
                                "beforemultiple": "",
                                "duringmultiple": "",
                                "beforeendmultiple": "",
                                "beforepreexecute": "",
                                "beforemidexecute": "",
                                "beforepostexecute": "",
                                "beforeendexecute": "",
                                "overallerror": "",
                                "overallresult": "",
                                "currenterror": "",
                                "currentresult": "",
                                "currentparameters": "",
                                "multipleexecute": "",
                                "parameters": ""
                            }
                        },
                        true);

                    proxyprinttodiv('>>>> execute filter_data', filter_data, 11);
                    inboundparms = extend(true, filter_data.output, command.parameters);
                    command = filter_data.filteredobject.command;
                    proxyprinttodiv('>>>> execute command', command, 11);
                    proxyprinttodiv('>>>> execute inboundparms', inboundparms, 11);

                    if (command.multipleexecute.length > 0) {
                        proxyprinttodiv("execute - array params received ", incomingparams, 11);
                        executethismultiple(inboundparms, command, callback);

                    } else {

                        inboundparms['midexecute'] = inboundparms['executethis'];
                        delete inboundparms['executethis'];

                        //process beforepreexecute
                        command.currentresult = inboundparms; // these will flow to currentparameters
                        //command.currentresult = extend(true, {}, inboundparms); // these will flow to currentparameters
                        processstage(command, "beforepreexecute");

                        dothisprocessor(command.currentparameters, 'preexecute', function (err, preResults) {
                            proxyprinttodiv("before preResults", command.currentparameters, 11);
                            proxyprinttodiv("end preResults", preResults, 11);
                            command.currenterror = err;
                            command.currentresult = preResults;
                            processstage(command, "beforemidexecute");
                            if (command.currenterror && Object.keys(command.currenterror).length > 0) {
                                callback(command.overallerror, command.overallresult)
                            } else {
                                proxyprinttodiv('command preResults', preResults, 11);

                                dothisprocessor(command.currentparameters, 'midexecute', function (err, midResults) {
                                    proxyprinttodiv("before midResults", command.currentparameters, 11);
                                    proxyprinttodiv("end midResults", midResults, 11);
                                    command.currenterror = err;
                                    command.currentresult = midResults;
                                    processstage(command, "beforepostexecute");
                                    if (command.currenterror && Object.keys(command.currenterror).length > 0) {
                                        callback(command.overallerror, command.overallresult)
                                    } else {

                                        dothisprocessor(command.currentparameters, 'postexecute', function (err, postResults) {
                                            proxyprinttodiv("before postResults", command.currentparameters, 11);
                                            proxyprinttodiv("end postResults", postResults, 11);
                                            proxyprinttodiv("end inboundparms", inboundparms, 11);
                                            command.currenterror = err;
                                            command.currentresult = postResults;
                                            processstage(command, "beforeendexecute");

                                            if (command.currenterror && Object.keys(command.currenterror).length > 0) {
                                                callback(command.overallerror, command.overallresult);
                                            } else {
                                                // if (isArray(command.currentresult)) {
                                                //     postResults=command.currentresult[0]
                                                //     }
                                                // else {
                                                //     postResults=command.currentresult
                                                //     }
                                                // proxyprinttodiv("end postResults", postResults, 11);

                                                // added by joe to handle all the inherit processing in one block here
                                                if (command.adopt) {
                                                    var copyOfInheritData = {};
                                                    extend(true, copyOfInheritData, command.overallresult);

                                                    proxyprinttodiv("execute - command.adopt ****", command.adopt, 11);
                                                    proxyprinttodiv("execute - command.overallresult ****", command.overallresult, 11);
                                                    proxyprinttodiv("execute - inboundparms ****", inboundparms, 11);
                                                    delete incomingparams.command; // may have to be un-enabled - joe
                                                    if (command.adopt === "override") {
                                                        command.overallresult = extend(true, inboundparms, command.overallresult);
                                                    }
                                                    if (command.adopt === "default") {
                                                        command.overallresult = extend(true, command.overallresult, inboundparms);
                                                    }

                                                    // proxyprinttodiv("execute - command.resultparameters ****", command.resultparameters, 11);
                                                    if (!command.overallresult.command) {
                                                        command.overallresult.command = {};
                                                    }
                                                    if (!command.overallresult.command.inherit) {
                                                        command.overallresult.command.inherit = {};
                                                    }
                                                    if (!command.overallresult.command.inherit.data) {
                                                        command.overallresult.command.inherit.data = {};
                                                    }
                                                    // load a copy of the what was inherited
                                                    command.overallresult.command.inherit.data = copyOfInheritData;
                                                    proxyprinttodiv("execute - adopt - command.overallresult B", command.overallresult, 11);
                                                    //###
                                                    incomingparams = extend(true, incomingparams, command.overallresult);
                                                    proxyprinttodiv("execute - resultparameters B incomingparams", incomingparams, 11);
                                                }
                                                // if (command.overallresult && Object.keys(command.overallresult).length > 0) {
                                                //     var copyOfInheritData = {};
                                                //     extend(true, copyOfInheritData, command.overallresult);
                                                // }

                                                // if (command.resultparameters && Object.keys(command.resultparameters).length > 0) {
                                                //     var copyOfInheritData = {};
                                                //     extend(true, copyOfInheritData, postResults);
                                                // }

                                                // process inherit
                                                // if (command.adopt) {
                                                //     proxyprinttodiv("execute - command.adopt ****", command.adopt, 11);
                                                //     //delete incomingparams.command;
                                                //     if (command.adopt === "override") {
                                                //         command.overallresult = extend(true, inboundparms, command.overallresult);
                                                //     }
                                                //     if (command.adopt === "default") {
                                                //         command.overallresult = extend(true, command.overallresult, inboundparms);
                                                //     }
                                                // }
                                                // process inherit
                                                // if (command.adopt) {
                                                //     proxyprinttodiv("execute - command.adopt ****", command.adopt, 11);
                                                //     delete incomingparams.command;
                                                //     if (command.adopt === "override") {
                                                //         postResults = extend(true, incomingparams, postResults);
                                                //     }
                                                //     if (command.adopt === "default") {
                                                //         postResults = extend(true, postResults, incomingparams);
                                                //     }
                                                // }

                                                // process command.resultparamters, deals with loading a copy of inherit data along with incomingparams
                                                // if (command.resultparameters && Object.keys(command.resultparameters).length > 0) {
                                                //     // proxyprinttodiv("execute - command.resultparameters ****", command.resultparameters, 11);
                                                //     if (!command.overallresult.command) {
                                                //         command.overallresult.command = {};
                                                //     }
                                                //     if (!command.overallresult.command.inherit) {
                                                //         command.overallresult.command.inherit = {};
                                                //     }
                                                //     if (!command.overallresult.command.inherit.data) {
                                                //         command.overallresult.command.inherit.data = {};
                                                //     }
                                                //     // load a copy of the what was inherited
                                                //     command.overallresult.command.inherit.data = copyOfInheritData;
                                                //     proxyprinttodiv("execute - resultparameters B", command.resultparameters, 11);
                                                //     //###
                                                //     //incomingparams = extend(true, incomingparams, command.resultparameters);
                                                // }
                                                // if (command.resultparameters && Object.keys(command.resultparameters).length > 0) {
                                                //     // proxyprinttodiv("execute - command.resultparameters ****", command.resultparameters, 11);
                                                //     if (!postResults.command) {
                                                //         postResults.command = {};
                                                //     }
                                                //     if (!postResults.command.inherit) {
                                                //         postResults.command.inherit = {};
                                                //     }
                                                //     if (!postResults.command.inherit.data) {
                                                //         postResults.command.inherit.data = {};
                                                //     }
                                                //     // load a copy of the what was inherited
                                                //     postResults.command.inherit.data = copyOfInheritData;
                                                //     proxyprinttodiv("execute - resultparameters B", command.resultparameters, 11);
                                                //     //###
                                                //     //incomingparams = extend(true, incomingparams, command.resultparameters);
                                                // }
                                                proxyprinttodiv("end postResults command.result", command.result, 11);

                                                if (command.result) {
                                                    var json = {};
                                                    // if (isArray(postResults)) {
                                                    //     postResults = postResults[0];
                                                    // }
                                                    json[command.result] = command.overallresult;
                                                    command.overallresult = json;
                                                }
                                                // proxyprinttodiv("end postResults command.result", command, 11);

                                                // if (command.result) {
                                                //     var json = {};
                                                //     // if (isArray(postResults)) {
                                                //     //     postResults = postResults[0];
                                                //     // }
                                                //     json[command.result] = postResults;
                                                //     postResults = json;
                                                // }
                                                //proxyprinttodiv("end postResults III", postResults, 11);
                                                if (Object.prototype.toString.call(command.overallresult) !== '[object Array]') {
                                                    var tempArray = [];
                                                    tempArray.push(command.overallresult);
                                                    command.overallresult = tempArray;
                                                }

                                                proxyprinttodiv('>>>> execute inboundparms', inboundparms, 11);
                                                //proxyprinttodiv("end postexecute -- postResults", postResults, 11);
                                                callback(null, command.overallresult);

                                                // proxyprinttodiv("end postResults III", postResults, 11);
                                                // if (Object.prototype.toString.call(postResults) !== '[object Array]') {
                                                //     var tempArray = [];
                                                //     tempArray.push(postResults);
                                                //     postResults = tempArray;
                                                // }

                                                //     proxyprinttodiv('>>>> execute inboundparms', inboundparms, 11);
                                                //     proxyprinttodiv("end postexecute -- postResults", postResults, 11);
                                                //     callback(null, postResults);
                                                //}
                                            } // end else
                                        }); // end do this processor post
                                    } // end else
                                }); // end do this processor mid
                            } // end else
                        }); // end do this processor pre
                    } // multiple
                } // added for command.server
            }
        } // end try
        catch (err) {
            var finalobject = createfinalobject({
                "result": "execute"
            }, {}, "execute", err, inboundparms_111);
            console.log('** Error Caught in the execute() function in executethis.js ** => ' + err);
            console.log('** finalobject created from error => ' + JSON.stringify(finalobject));
            callback(finalobject.err, finalobject.res);
        }
    };


    function processstage(command, stagename) {
        proxyprinttodiv('stagename begin--', stagename, 11);
        proxyprinttodiv('command begin--', command, 11);

        command.overallresult = processrule(
            command[stagename].overallresultrule,
            command.currentresult,
            command.overallresult);

        command.overallerror = processrule(
            command[stagename].overallerrorrule,
            command.currenterror,
            command.overallerror);

        command.currentparameters = processrule(
            command[stagename].resultrule,
            command.currentresult,
            command.currentparameters);

        command.currenterror = processrule(
            command[stagename].errorrule,
            command.currenterror,
            command.currenterror);


        proxyprinttodiv('stagename end--', stagename, 11);
        proxyprinttodiv('command end--', command, 11);
    }

    window.processrule = function processrule(rule, current, overall) {
        proxyprinttodiv('command processrule current', current, 11);
        var targetfn = window[rule];
        if (targetfn) {
            overall = targetfn(current, overall);
        } else {
            overall = current;
        }
        return overall;
    };

    window.waterfall = function waterfall(current, overall) {
        if (!current) {
            current = {};
        }
        overall = current;
        return overall;
    };

    window.nullwaterfall = function nullwaterfall(current, overall) {
        if (!current) {
            return null;
        }
        overall = current;
        return overall;
    };

    window.clearresults = function clearresults(current, overall) {
        overall = [];
        return overall;
    };

    window.objectwaterfall = function objectwaterfall(current, overall) {
        if (!current) {
            current = {};
        }
        if (isArray(current)) {
            current = current[0];
        }
        overall = current;
        return overall;
    };

    window.extendobject = function extendobjects(current, overall) {
        if (!current) {
            current = {};
        }
        if (isArray(current)) {
            current = current[0];
        }
        if (!overall) {
            overall = [{}];
        }
        var tempobject = overall[0];
        extend(true, current, tempobject);
        overall.push(tempobject);
        return overall;
    };

    window.pushobject = function pushobjects(current, overall) {
        if (!current) {
            current = {};
        }
        if (isArray(current)) {
            current = current[0];
        }
        if (!overall) {
            overall = [];
        }
        if (!isArray(overall)) {
            overall.push(overall);
        }
        overall.push(current);
        return overall;
    };

    window.pusharray = function pusharrays(current, overall) {
        if (!current) {
            current = {};
        }
        //if (isArray(current)) {current = current[0];}
        if (!overall) {
            overall = [];
        }
        if (!isArray(overall)) {
            overall.push(overall);
        }
        overall.push(current);
        return overall;
    };


    // >
    // > executeone
    // > if (!parm[‘fn’]) {parm[‘fn’]=“execute”}
    // > …
    // > window[fn].apply(window, fnparams);
    exports.executeone = executeone = function executeone(params, callback) {
        try {
            var inboundparms_112 = arguments;
            // execute one processes siglelevel arrays because they have to be either
            // [{fn:fn},[a:b]] or like this [{execuethis:a, b:c}]
            // proxyprinttodiv("executeone - params >> params ", params, 11);
            var fn;
            var fnparams = [];
            var output = [];

            // throw ({'Sample error': 'executeone'});

            var fncallbck = function (err, resp) {
                // If error, bounce out
                if (err && Object.keys(err).length > 0) {
                    callback(err, resp);
                } else {
                    try {
                        output.push(resp);
                        callback(err, output); //callback(err, output[0]);
                    } catch (err) {
                        var finalobject = createfinalobject({
                            "result": "executeone"
                        }, {}, "executeone", err, resp);
                        callback(finalobject.err, finalobject.res);
                    }
                }
            };

            proxyprinttodiv("executeone - params >> fn ", params, 11);

            if (params[0] && params[0].fn) {

                fn = params[0]['fn'];
                fnparams = params[1];
            } else {
                fn = 'execute';
                fnparams.push(params[0]);
            }
            fnparams.push(fncallbck);
            proxyprinttodiv("executeone - fncallbck ", fncallbck, 11);
            proxyprinttodiv("executeone - window ", fnparams, 11);

            window[fn].apply(window, fnparams);
        } // end try
        catch (err) {
            var finalobject = createfinalobject({"result": "executeone"}, {}, "executeone", err, inboundparms_112);
            console.log('** Error Caught in the executeone() function in executethis.js ** => ' + err);
            console.log('** finalobject created from error => ' + JSON.stringify(finalobject));
            callback(finalobject.err, finalobject.res);
        }
    };


    exports.executethismultiple = window.executethismultiple = executethismultiple = function executethismultiple(inparams, inCmd, callback) {
        try {
            function filterParams(item, callback) {
                proxyprinttodiv("executethismultiple - item ", item, 21);
                var result = true;
                if (command && command.executefilter) {
                    result = false;
                    if (item && command && command.executefilter && command.executefilter.query) {
                        if (command.executefilter.query['$eq']) { // {"query":{"$eq":{"type":"minute"}}}
                            var key = Object.keys(command.executefilter.query.$eq);
                            proxyprinttodiv("executethismultiple - key ", command.executefilter.query.$eq[key], 21);
                            result = (item && item[key] === command.executefilter.query.$eq[key]);
                        }
                        // TODO :: add more conditions and more operators handling
                    }
                    callback(result);
                } else {
                    callback(result);
                }
            }
            multcommand = { // defaults for multiple
                "command": {
                    "executefilter": "",
                    "executelimit": 15,
                    "executemethod": "execute",
                    "executeorder": "series",
                    "multipleexecute": [],
                    "beforemultiple": {
                        "overallresultrule": "clearresults",
                        "overallerrorrule": "waterfall",
                        "resultrule": "waterfall",
                        "errorrule": "nullwaterfall"
                    },
                    "duringmultiple": {
                        "overallresultrule": "pusharray",
                        "overallerrorrule": "waterfall",
                        "resultrule": "waterfall",
                        "errorrule": "nullwaterfall"
                    },
                    "beforeendmultiple": {
                        "overallresultrule": "waterfall",
                        "overallerrorrule": "waterfall",
                        "resultrule": "waterfall",
                        "errorrule": "nullwaterfall"
                    }
                }
            };

            var inboundparms_113 = arguments;
            var output = [];
            var extraparameters = {};
            var filteredParams = JSON.parse(JSON.stringify(inparams));
            var command = {};
            if (!inCmd.command) {
                command = multcommand.command;
            } else {
                var filter_data = getcommand(inCmd, multcommand, multcommand, true);
                command = filter_data.filteredobject.command;
                extraparameters = filter_data.output;
            }

            if (!isArray(filteredParams)) { // if not array then look for parm multipleexecute
                extend(true, extraparameters, filteredParams);

                proxyprinttodiv("executethismultiple - outside iteration - command ", command, 11);
                if (isArray(command.multipleexecute)) { // command.multiple wins
                    filteredParams = command.multipleexecute;
                    delete command.multipleexecute;
                } else { // if not array make into array
                    filteredParams.push(filteredParams);
                }
                proxyprinttodiv("executethismultiple - outside iteration - inparams ", inparams, 11);
            }

            proxyprinttodiv("executethismultiple - outside iteration - filteredParams", filteredParams, 11);
            proxyprinttodiv("executethismultiple - outside iteration - command III ", command, 11);

            command.currentresult = filteredParams; // will flow to currentparameters
            processstage(command, "beforemultiple");
            proxyprinttodiv("executethismultiple - after begin - command ", command, 11, 4);

            async.series([
                function step1(clb) {
                    if (command.executeorder === "series") {
                        proxyprinttodiv("executethismultiple - filteredParams ", filteredParams, 21);
                        async.mapSeries(command.currentresult, function (eachtodo, cbMap) {
                            //async.mapSeries(filteredParams, function (eachtodo, cbMap) {
                            async.nextTick(function () {
                                try {
                                    proxyprinttodiv("executethismultiple - eachtodo ", eachtodo, 11);
                                    if (eachtodo instanceof Array) {
                                        proxyprinttodiv("series - eachtodo 1st condition ****** should not trigger un2 level deep", eachtodo, 21);
                                        //executethismultiple(eachtodo, {}, function (err, res) {
                                        executethismultiple(eachtodo, command, function (err, res) {
                                            command.currenterror = err;
                                            command.currentresult = res;
                                            processstage(command, "duringmultiple");
                                            if (err && Object.keys(err).length > 0) {
                                                cbMap(err, res); //###
                                                //callback(err, res);
                                            } else {
                                                try {
                                                    //proxyprinttodiv("executethismultiple - iteration - eachtodo  ", eachtodo, 21);
                                                    output.push(res);
                                                    cbMap(null, res);
                                                } catch (err) {
                                                    var finalobject = createfinalobject({
                                                        "result": "executethismultiple_executethismultiple"
                                                    }, {}, "executethismultiple_executethismultiple", err, res);
                                                    console.log('** Error Caught in attempt to push "res" into the'
                                                        + ' output array when eachtodo was an Array in executethismultiple() in executethis.js ** => ' + err);
                                                    console.log('** finalobject created from error => ' + JSON.stringify(finalobject));
                                                    cbMap(finalobject.err, finalobject.res);
                                                }
                                            }
                                        });
                                    } else {
                                        proxyprinttodiv("series - eachtodo", eachtodo, 21);
                                        extend(true, eachtodo, extraparameters); // added
                                        execute(eachtodo, function (err, res) {
                                            proxyprinttodiv('multiple res', res, 11);
                                            command.currenterror = err;
                                            command.currentresult = res;
                                            processstage(command, "duringmultiple");

                                            if (command.currenterror && Object.keys(command.currenterror).length > 0) {
                                                cbMap(command.overallerror, command.overallresult);
                                            } else {
                                                try {
                                                    // // If error, bounce out
                                                    // if (err && Object.keys(err).length > 0) {
                                                    //     callback(err, res);
                                                    // } else {
                                                    //     try {
                                                    //         // execute(eachtodo, function (err, res) {
                                                    proxyprinttodiv('multiple', command.currentparameters, 11);
                                                    output.push(command.currentparameters);
                                                    //output.push(res);
                                                    cbMap(null);
                                                } catch (err) {
                                                    var finalobject = createfinalobject({
                                                        "result": "executethismultiple_executethismultiple_II"
                                                    }, {}, "executethismultiple_executethismultiple_II", err, res);
                                                    console.log('** Error Caught in attempt to push "res" into the'
                                                        + ' output array when eachtodo was not an Array in executethismultiple() in executethis.js ** => ' + err);
                                                    console.log('** finalobject created from error => ' + JSON.stringify(finalobject));
                                                    callback(finalobject.err, finalobject.res);
                                                }
                                            }
                                        });
                                    }
                                } catch (err) {
                                    var finalobject = createfinalobject({
                                        "result": "executethismultiple_executethismultiple_wrapper"
                                    }, {}, "executethismultiple_executethismultiple_wrapper", err, filteredParams);
                                    console.log('** Error Caught in the executethismultiple() function in'
                                        + ' executethis.js during mapSeries call on "filteredParams" ** => ' + err);
                                    console.log('** finalobject created from error => ' + JSON.stringify(finalobject));
                                    callback(finalobject.err, finalobject.res);
                                }
                            });
                            //cbMap(null); // Moved by joe -- Fixes mem out error
                        }, function (err, res) {
                            clb(null, res);
                        });
                    } else {
                        clb(null, res);
                    }
                }
            ],
                function (err, resp) {
                    proxyprinttodiv("executethismultiple - **output", output, 11);
                    proxyprinttodiv("executethismultiple - **overallresult", command.overallresult, 11);
                    command.currenterror = err;
                    //command.currentresult = output;
                    command.currentresult = command.overallresult;
                    processstage(command, "beforeendmultiple");

                    proxyprinttodiv("executethismultiple - **overallresult II", command.overallresult, 11);
                    proxyprinttodiv("executethismultiple - **output II", output, 11);
                    //callback(err, output);
                    //callback(command.overallerror, output);
                    callback(command.overallerror, command.overallresult);
                });
            //});
        } // end try
        catch (err) {
            var finalobject = createfinalobject({"result": "executethismultiple"}, {}, "executethismultiple", err, inboundparms_113);
            console.log('** Error Caught in the executethismultiple() function in executethis.js ** => ' + err);
            console.log('** finalobject created from error => ' + JSON.stringify(finalobject));
            callback(finalobject.err, finalobject.res);
        }
    };





    // ,

    // function step2(clb) {
    //     // waterfall
    //     if (command.executeorder === "waterfall") {
    //         function createFnArray(filteredParams, output) {


    //             var fnArray = [];
    //             var output = [];
    //             for (var i = 0; i < filteredParams.length; i++) {
    //                 var params = filteredParams[i];
    //                 proxyprinttodiv("executethismultiple - waterfall -- iteration - params ", params, 11);
    //                 var func = getFunction(params);
    //                 fnArray.push(func);
    //             }

    //             function getFunction(params) {
    //                 return function (cb1) {
    //                     executeone(params, function (err, res) {
    //                         // proxyprinttodiv("executethismultiple - iteration - eachtodo  ", eachtodo, 11);
    //                         output.push(res);
    //                         cb1(null);
    //                     });
    //                 };
    //             }
    //             return fnArray;
    //         };
    //         async.waterfall(createFnArray(filteredParams), function (err, resp) {
    //             clb(null);
    //         });

    //     } else {
    //         clb(null);
    //     }
    // },

    // function step3 (clb) {
    //     // parallel
    //     if (command.executeorder === "parallel") {
    //         async.map(filteredParams, function (eachtodo, cbMap) {
    //             proxyprinttodiv("executethismultiple - iteration - parallel - eachtodo ", eachtodo, 11);
    //             executeone(eachtodo, function (err, res) {
    //                 output.push(res);
    //                 cbMap(null);
    //             });
    //         }, function (err, resp) {
    //             // if any of the saves produced an error, err would equal that error
    //             proxyprinttodiv("executethismultiple - parallel -- output ", output, 11);
    //             clb(null);
    //         });

    //     } else {
    //         clb(null);
    //     }
    // }




    function dothisprocessor(params, target, callback) {
        try {
            var inboundparms_114 = arguments;
            //var err = {};
            var err = null;
            // if command.status=fail, check between dothis, do not execute
            if (params && ((!params.command) || (params.command && params.command.status !== 'fail'))) {

                var whatToDoList,
                    howToDoList,
                    targetname,
                    targetfunction;

                // throw ({'Sample error': 'dothisprocessor'});

                proxyprinttodiv("dothis - inboundparms", params, 11);
                proxyprinttodiv("dothis - target ", target, 11);
                proxyprinttodiv("dothis - callback ", String(callback), 11);

                if (params["midexecute"] === "test4") { // for debug purposes
                    callback({
                        'test4': 'Reached test4 code.. dothisprocessor function '
                    });
                } else {
                    // Before we try to load our config we need to see if there is something to do
                    // so we check to see if there is something on the right hand side for the target (pre, mid, post)
                    if (params[target] !== undefined) {

                        // it is possible the function sent in is a string or an actual function...we need to convert to string for config lookup
                        if (params[target] instanceof Function) {
                            targetname = params[target].name; // get the targetname
                            targetfunction = params[target]; // get targetfunction (whole function)
                        } // function was passed in
                        else {
                            targetname = params[target]; // get the targetname
                            targetfunction = window[params[target]]; // get targetfunction (whole function)
                        } // function name was passed in as string

                        delete params[target]; // ** moved by Roger
                        delete params[targetfunction]; // ** added by Roger

                        howToDoList = CreateDoList(params, target, targetfunction); // generate list based on pre, mid, post
                        // howToDoList = extend(howToDoList, tempHowToDoList);

                        // check for err on the 'return' of an object from CreateDoList
                        if (howToDoList.err) {
                            throw (howToDoList.err.error);
                        }

                        proxyprinttodiv("dothis - howToDoList ", howToDoList, 11);

                        whatToDoList = CreateDoList(params, targetname, targetfunction); // generate list based on fn name
                        // whatToDoList = extend(whatToDoList, tempWhatToDoList);

                        // check for err on the 'return' of an object from CreateDoList
                        if (whatToDoList.err) {
                            throw (whatToDoList.err.error);
                        }

                        proxyprinttodiv("dothis - whatToDoList ", whatToDoList, 11);
                        executelist(howToDoList, whatToDoList, callback); // execute list

                    } // params[target] undefined
                    else { // execute the nextstage (mid or post), may need to remove target out of params
                        if (params.hasOwnProperty('preexecute') && params.preexecute === undefined) {
                            delete params['preexecute'];
                        }
                        if (params.hasOwnProperty('midexecute') && params.midexecute === undefined) {
                            delete params['midexecute'];
                        }
                        if (params.hasOwnProperty('postexecute') && params.postexecute === undefined) {
                            delete params['postexecute'];
                        }
                        // err = {"Error": "here it is"};
                        proxyprinttodiv("**Error - dothisprocessor ", err, 11);
                        proxyprinttodiv("**executethis - params ", params, 11);
                        callback(err, params);
                    }
                } // else not test4
            } else {
                callback(err, params);
            }
        } // end try
        catch (err) {
            var finalobject = createfinalobject({"result": "dothisprocessor"}, {}, "dothisprocessor", err, inboundparms_114);
            console.log('** Error Caught in the dothisprocessor() function in executethis.js ** => ' + err);
            console.log('** finalobject created from error => ' + JSON.stringify(finalobject));
            callback(finalobject.err, finalobject.res);
        }
    } // fn

    // based on a target fn and params this fn will create a sorted list of what to do -- params will be in list

    function CreateDoList(params, configtarget, configfn) {
        try {
            var inboundparms_115 = arguments;

            if ((params === undefined) || (params === "")) {
                params = {};
            }
            if ((configtarget === undefined) || (configtarget === "")) {
                configtarget = "executeerror";
            }
            if ((configfn === undefined) || (configfn === "")) {
                configfn = "";
            }

            // throw ({'Sample error': 'CreateDoList'});

            // get saved configuration
            // cloning config
            var config0 = {};
            extend(true, config0, config.configuration); // config0 is working copy of current configuration
            config0 = toLowerKeys(config0);


            // If there is no config object for current target make one
            if (typeof config0[configtarget] !== 'object') {
                config0[configtarget] = [];
            }

            // fish out incoming configuraton
            if ((params['configuration'] !== undefined) && (params['configuration'][configtarget] !== undefined)) {
                var incomingConfig = [];
                var object = params['configuration'][configtarget][0]; // needs [0]
                object = toLowerKeys(object);
                incomingConfig.push(object); // get send in config
                // delete parms config
                delete params['configuration'][configtarget];
                // *** delete params['configuration'][configtarget][0];????????????? or above take out?
                proxyprinttodiv("CreateDoList - incomingConfig ", incomingConfig, 11);
            }

            if (incomingConfig) {
                config0[configtarget] = incomingConfig; // ** Joe - only load incoming config if there is an incoming config
            } // added by roger *******

            // // If there is no config object for current target make one
            // *** Joe - moved above
            // if (typeof config0[configtarget] !== 'object') {
            //     config0[configtarget] = {};
            // }

            // no idea what this was for - Joe
            // incomingConfig[target];  // load override

            //combine parameters from incoming parameters & inconfig and savedconfig
            // *** section below unnessesary, maybe keep: delete params[configtarget];
            // *** Joe - commented out the following
            // var paramsobject={};
            // paramsobject = incomingConfig['params'];  // get extra parameters from incoming params config
            // params = jsonConcat(params,paramsobject); // join them with existing parameters
            // paramsobject = config0[configtarget]['params']; // get extra parameters from config
            // params = jsonConcat(params,paramsobject); // join them with existing parameters
            // delete from parameters configtarget

            //} **** taken out by roger

            if (config0[configtarget] !== undefined) {
                //delete params[configtarget];  *** moved by Roger
                // pre, mid, post configs are going to have multiple params so we need to iterate
                for (var i = 0; i < config0[configtarget].length; i++) {
                    //try a concat
                    if ((params !== undefined) && (config0[configtarget][i].params !== undefined)) {
                        config0[configtarget][i].params = jsonConcat(params, config0[configtarget][i].params); // concatenate with other pararms
                    }
                    //config0[configtarget][i].params= params; ** took out and put above, we should not change 'params'
                }
                // save distiled parameters back to list
                // in example deletes midexecute : <something>
            }

            proxyprinttodiv("CreateDoList - config0 ", config0, 11);

            var list = config0[configtarget];
            if (list != undefined && list.length > 1) {
                list = list.sort(function (a, b) {
                    if (a.executeorder > b.executeorder)
                        return 1;
                    else if (a.executeorder < b.executeorder)
                        return -1;
                    else if (a.tryorder > b.tryorder)
                        return 1;
                    else if (a.tryorder < b.tryorder)
                        return -1;
                    else
                        return 0;
                });
            }

            // *** commented out by joe
            // replaced with code below
            // if ((list === undefined) || (list === "")) { // would be always true --> || (list != "")) { // if list empty then make up a default record
            //     // if ((configtarget=="preexecute") || (configtarget=="midexecute") || (configtarget=="postexecute")) {
            //     //     configtarget="executefn"; // default if howToDo config missing
            //     //     }
            //     // *** commneted by Rogr
            //     list = [];   // if no list so far then make a list so there is something to execute
            //     list[0] = {};
            //     list[0].executeorder = 0;
            //     list[0].tryorder = 0;
            //     list[0].params = params;
            //     list[0].dothis = configtarget;
            //     list[0].dofn = configfn;
            //     }

            // The folowing code attempts to fix the list if it is missing a property
            // I only build a single list entry object on postion [0] of the array
            if ((list === undefined) || (list === "")) {
                list = [];
            }
            if (list[0] === undefined) {
                list[0] = {};
            }
            if (list[0].executeorder === undefined) {
                list[0].executeorder = 1;
            }
            if (list[0].tryorder === undefined) {
                list[0].tryorder = 1;
            }
            if (list[0].params === undefined) {
                list[0].params = params;
            }
            if (list[0].dothis === undefined) {
                list[0].dothis = configtarget;
            }
            // *** Joe I do a function look up here as theres a good chance of configfn being set to undefined or "" do to a remap
            // ie.. configtarget is redir_b but by looking up a config it remaped dothis = func_b so we need to set configtarget to dothis
            // this works but the problem is we are stuck on [0] for arrays so I think only one will remap and find the local function to stick in dofn
            // notes: typically the configfn comes in from dothisprocessor which is fine on non remaps..
            // on remaps the true function name to lookup is found while in createdolist
            // which is why i'm doing this here, let me know what you think roger
            if (list[0].dofn === undefined) {
                list[0].dofn = configfn;
                if ((list[0].dofn == "") && (window[list[0].dothis])) {
                    list[0].dofn = window[list[0].dothis];
                }
            }

            // *** took out, made getexecuteobject smarter
            // // On a remap we may not have loaded a doFn try it now
            // if((configtarget !== "preexecute") && (configtarget !=="midexecute") && (configtarget !=="postexecute")) {
            //     if(list[0].dofn === undefined) {
            //         configtarget = list[0].dothis;
            //         configfn = window[configtarget];
            //         list[0].dofn = configfn;
            //         // load the params in
            //         if((params !== undefined) && (list[0].params !== undefined)) {
            //             list[0].params = params;
            //         }
            //     }
            // }

            proxyprinttodiv("CreateDoList - list ", list, 11);
            return list;
        } catch (err) { // end try
            var finalobject = createfinalobject({"result": "CreateDoList"}, {}, "CreateDoList", err, inboundparms_115);
            console.log('** Error Caught in the createDoList() function in executethis.js ** => ' + err);
            console.log('** finalobject created from error => ' + JSON.stringify(finalobject));
            return (finalobject);
        }
    } // end CreateDolist

    function executelist(howToDoList, whatToDoList, callback) {
        try {
            var inboundparms_116 = arguments;
            proxyprinttodiv("executelist - howToDoList ", howToDoList, 11);
            proxyprinttodiv("executelist - whatToDoList ", whatToDoList, 11);

            // throw ({'Sample error': 'executelist'});

            function debugvars(varlist) {
                var allvars = {
                    1: {
                        "howToDoList": howToDoList,
                        "whatToDoList": whatToDoList,
                        "howallowexecute": howallowexecute,
                        "whatallowexecute": whatallowexecute
                    },
                    2: {
                        "outputResultsArr": outputResultsArr,
                        "howToDoParams": howToDoParams,
                        "howToDo": howToDo,
                        "h": h,
                        "whatToDoParams": whatToDoParams,
                        "whatToDo": whatToDo,
                        "w": w,
                        "whatToDoFn": whatToDoFn
                    },
                    3: {
                        "howexecuteorder": howexecuteorder,
                        "whatexecuteorder": whatexecuteorder,
                        "howtryorder": howtryorder,
                        "whattryorder": whattryorder
                    }
                };

                var resultObj = {};
                var vargroup;
                if (!varlist) {
                    for (var eachvar in allvars) {
                        if (allvars.hasOwnProperty(eachvar)) {
                            varlist.push(eachvar);
                        }
                    }
                }

                for (var eachgroup in varlist) {
                    if (varlist.hasOwnProperty(eachgroup)) {
                        vargroup = varlist[eachgroup];
                        resultObj = jsonConcat(resultObj, allvars[vargroup]);
                    }
                }
                return resultObj;
            }

            var outputResultsArr = [];

            var howToDoParams;
            var howToDo;
            var h;
            var whatToDoParams;
            var whatToDo;
            var w;
            var whatToDoFn;
            var howallowexecute = true;
            var whatallowexecute = true;
            var howexecuteorder;
            var whatexecuteorder;
            var howtryorder;
            var whattryorder;

            howallowexecute = true;
            howexecuteorder = 1;
            resultsArr = [];

            // saveglobal("debugname", "executelist");
            // debugcolor++;

            var x = getglobal("debugcolor") + 1;
            saveglobal("debugcolor", x);



            async.mapSeries(howToDoList, function (h, cbMapH) {
                    async.nextTick(function () {
                        try {
                            // throw ({'Sample error': 'executelist_async_nextTick'});

                            proxyprinttodiv("executelist begin how howallowexecute ", howallowexecute, 11);
                            proxyprinttodiv("dothis - h ", h, 11);
                            howToDo = h['dothis']; // get specific howToDo from list
                            howToDoParams = h['params']; // get params that were stored
                            if ((howToDoParams === undefined) || (howToDoParams === "")) {
                                howToDoParams = {};
                            }

                            proxyprinttodiv("executelist howToDo ", howToDo, 11);
                            if (howexecuteorder !== h.executeorder) {
                                // if orders are different, then we are in new iteration of do, reset flat to allow how execute
                                howallowexecute = true;
                            }
                            howexecuteorder = h.executeorder;

                            whatallowexecute = howallowexecute;
                            whatexecuteorder = 1;

                            proxyprinttodiv("executelist howToDoList ", howToDoList, 11);
                            proxyprinttodiv("executelist whatToDoList ", whatToDoList, 11);

                            async.mapSeries(whatToDoList, function (w, cbMapW) {
                                    async.nextTick(function () {
                                        proxyprinttodiv("execute - I howallowexecute", howallowexecute, 11);
                                        proxyprinttodiv("execute - I whatexecuteorder", whatallowexecute, 11);
                                        proxyprinttodiv("execute - w", w, 11);
                                        if (w[howToDo]) {
                                            whatToDo = w[howToDo]; // try to get specific config for whatToDo
                                        } else {
                                            whatToDo = w['dothis']; // default
                                        }
                                        whatToDoFn = w['dofn'];
                                        whatToDoParams = w['params'];

                                        if ((whatToDoParams === undefined) || (whatToDoParams === "")) {
                                            whatToDoParams = {};
                                        }
                                        proxyprinttodiv("execute - whatToDo", whatToDo, 11);
                                        proxyprinttodiv("execute - w.executeorder", w.execute, 11);

                                        if (whatexecuteorder !== w.executeorder) {
                                            // executeorder changed, reset whatallowexecute, other allow it to remain
                                            whatallowexecute = true;
                                        }
                                        whatexecuteorder = w.executeorder;

                                        proxyprinttodiv("executelist end what howallowexecute ", howallowexecute, 11);
                                        proxyprinttodiv("executelist end what whatallowexecute ", whatallowexecute, 11);
                                        //debugfn("executelist", "executelist", "execute", "mid", getglobal("debugcolor"), getglobal("debugindent"), debugvars([1, 2, 3]));


                                        if ((howallowexecute) && (whatallowexecute)) { //if both allowed to execute
                                            getexecuteobject(jsonConcat(howToDoParams, whatToDoParams), howToDo, whatToDo, whatToDoFn,
                                                function (err, executeobject) {
                                                    // If error, bounce out
                                                    if (err && Object.keys(err).length > 0) {
                                                        callback(err, executeobject);
                                                    } else {
                                                        try {
                                                            var parameters = executeobject.params;
                                                            // always will get something back, even if errorfn...so always execute and store resutls
                                                            proxyprinttodiv("executelist executeobject: ", executeobject, 11);
                                                            proxyprinttodiv("executelist executeobject.params: ", executeobject.params, 11);
                                                            proxyprinttodiv("executelist executeobject.targetfn: ", String(executeobject.targetfn), 11);
                                                            if (typeof executeobject.targetfn === 'function') { // there was a chance of a non function getting in here -- Joe
                                                                //authcall(executeobject, command, function (err, securitycheck) {
                                                                proxyprinttodiv(">>>>>> executelist executeobject.params: ", executeobject.params, 11);
                                                                // If error, bounce out
                                                                if (err && Object.keys(err).length > 0) {
                                                                    callback(err, securitycheck);
                                                                } else {
                                                                    err = null; // Do not leave in the code
                                                                    securitycheck = true;
                                                                    if (securitycheck) {
                                                                        executeobject.targetfn(executeobject.params, function (err, res) {

                                                                            // If error, bounce out
                                                                            if (err && Object.keys(err).length > 0) {
                                                                                callback(err, res);
                                                                            } else {
                                                                                proxyprinttodiv("executelist err from execution ", err, 11);
                                                                                proxyprinttodiv("executelist result from execution ", res, 11);
                                                                                proxyprinttodiv("executelist result from execution executeobject", executeobject.executeflag, 11);

                                                                                // This section helps control the iteration -- Joe
                                                                                // ***********************************************
                                                                                whatallowexecute = false;
                                                                                howallowexecute = false;

                                                                                // if we come back with [{}] go to the next case,usally server
                                                                                if (executeobject.executeflag === true) {
                                                                                    if ((res === undefined) ||
                                                                                        (isArray(res) && res[0]['metadata'] && res[0]['metadata']['expirationdate'] &&
                                                                                            new Date(res[0]['metadata']['expirationdate']) < new Date()) ||
                                                                                        (isArray(res)) && (res.length === 1) && (Object.keys(res[0]).length === 0)
                                                                                        ) {
                                                                                        proxyprinttodiv("Try again hit wit res", res, 11);
                                                                                        whatallowexecute = true;
                                                                                        howallowexecute = true;
                                                                                        executeobject.executeflag = false;
                                                                                    }
                                                                                }

                                                                                // Remove expiration date on return
                                                                                // ------------------------------------------------
                                                                                // AG1 example res: {"data":{"note":"string"},"wid":"sounddto","metadata":{"method":"sounddto","date":"2014-03-17T13:55:26.832Z","expirationdate":"2014-03-17T13:55:26.832Z"}}
                                                                                if ((res) && (Object.keys(res).length > 0) && (res['metadata']) && (res['metadata']['expirationdate'])) {
                                                                                    delete res['metadata']['expirationdate'];
                                                                                }
                                                                                // ************************************************

                                                                                // temp .. take out
                                                                                if (res && res.js) {
                                                                                    executeobject.executeflag = true;
                                                                                }
                                                                                // for an addthis situation
                                                                                if (executeobject.executeflag === true) {
                                                                                    if ((res) && (res.js)) {
                                                                                        // TODO: do not leave this in production as is
                                                                                        var fnstring = res.js;
                                                                                        if (fnstring.indexOf("function") === 0) {
                                                                                            fnstring = "(" + fnstring + ")()";
                                                                                        }
                                                                                        proxyprinttodiv("execute fnstring", fnstring, 11);
                                                                                        eval(fnstring);
                                                                                    } else {
                                                                                        execute(res, function (err, res) {
                                                                                            // If error, bounce out
                                                                                            if (err && Object.keys(err).length > 0) {
                                                                                                callback(err, res);
                                                                                            } else {
                                                                                                try {
                                                                                                    // if executegetwid then execute with the results
                                                                                                    proxyprinttodiv("Return from nested execution: ", res, 11);
                                                                                                    outputResultsArr.push(res);
                                                                                                    cbMapW(null, "What Iteration");
                                                                                                    // cbMapW(err, "What Iteration");

                                                                                                } // end try
                                                                                                catch (err) {
                                                                                                    var finalobject = createfinalobject({
                                                                                                        "result": "executelist_executeobject.executeflag"
                                                                                                    }, {}, "executelist_executeobject.executeflag", err, res);
                                                                                                    cbMapW(finalobject.err, finalobject.res);
                                                                                                }
                                                                                            } // end else
                                                                                        });
                                                                                    }
                                                                                } else {
                                                                                    // executeflag=false
                                                                                    // temp answer for a bug, if empty do not push onto ouputresultarray - joe
                                                                                    if ((isArray(res)) && (res.length === 1) && (Object.keys(res[0]).length === 0)) {
                                                                                        cbMapW(null, "What Iteration");
                                                                                    } else {
                                                                                        outputResultsArr.push(res);
                                                                                        cbMapW(null, "What Iteration");
                                                                                    }

                                                                                    //cbMapW(err, "What Iteration");
                                                                                }
                                                                            } // end else
                                                                        });
                                                                    } else {
                                                                        // security check failed
                                                                        callback(err, {
                                                                            'etstatus': 'unauthorized call.'
                                                                        });
                                                                        cbMapW(null, "What Iteration");
                                                                    }
                                                                } // end else
                                                                //}); // end authcall

                                                                // create a google spreadsheet with intended data
                                                                // https://docs.google.com/spreadsheet/ccc?key=0AqSqNB4MEkB0dDZzZFE1bm1QRk8tYTBVNjZjWlpfSnc#gid=0

                                                                // executethis.js
                                                                // Add the security check
                                                                // line 752 if (executeobject.executeflag === false)
                                                                // line 757 if (executeobject.executeflag === true)

                                                                // remember that in the future the permissions list will also return a function name to be called for checking security

                                                                // we will use level

                                                                // All wids include their wid as group.  They should also return their dto (metadata.method) as a group
                                                            } // if executeobject.targetfn
                                                            else {
                                                                // cbMapW(null, "What Iteration");
                                                                cbMapW(err, "What Iteration");
                                                            }
                                                        } // end try
                                                        catch (err) {
                                                            var finalobject = createfinalobject({
                                                                "result": "executelist_getexecuteobject(jsonConcat"
                                                            }, {}, "executelist_getexecuteobject(jsonConcat", err, executeobject);
                                                            console.log('** Error Caught in the executelist() function in executethis.js'
                                                                + ' during processing of results from getexecuteobject() call ** => ' + err);
                                                            console.log('** finalobject created from error => ' + JSON.stringify(finalobject));
                                                            cbMapW(finalobject.err, finalobject.res);
                                                        }
                                                    } // end else
                                                    // else ((howallowexecute) && (whatallowexecute))  ... do something else
                                                }); //executeobject callback
                                        } else {
                                            cbMapW(null, "What Iteration");
                                            // cbMapW(err, "What Iteration");
                                        }
                                    });
                                },

                                function (err, res) {
                                    proxyprinttodiv("executelist end of what outputResultsArr ", outputResultsArr, 11);

                                    cbMapH(null, "How Iteration");
                                    // cbMapH(err, "How Iteration");
                                    //console.log(' completed whatToDoList iteration in sync fashion.');
                                });
                        } // end try
                        catch (err) {
                            var finalobject = createfinalobject({"result": "executelist_async_nextTick"}, {}, "executelist_async_nextTick", err, h);
                            console.log('** Error Caught in the executelist() function in'
                                + ' executethis.js during mapSeries call on "howToDoList" ** => ' + err);
                            console.log('** finalobject created from error => ' + JSON.stringify(finalobject));
                            cbMapH(finalobject.err, finalobject.res);
                        }
                        // map w,
                    });
                },

                function (err, res) {
                    // console.log('>>> very outside >>> ' + JSON.stringify(outputResultsArr));
                    proxyprinttodiv("execute - resultsArr", outputResultsArr, 11);
                    // executearray(resultsArr, function (err, res) {
                    //     outputResultsArr = arrayUnique(outputResultsArr.concat(res));
                    //     callback(err, outputResultsArr);
                    //     console.log(' completed  howToDoList iteration in sync fashion.');
                    // });
                    callback(err, outputResultsArr);
                });
            // debugcolor--;
            x = getglobal("debugcolor") - 1;
            saveglobal("debugcolor", x);
        } // end try
        catch (err) {
            var finalobject = createfinalobject({"result": "executelist"}, {}, "executelist", err, inboundparms_116);
            console.log('** Error Caught in the executelist() function in executethis.js ** => ' + err);
            console.log('** finalobject created from error => ' + JSON.stringify(finalobject));
            callback(finalobject.err, finalobject.res);
        }
    } // end executelist


    function getexecuteobject(params, howToDo, whatToDo, whatToDoFn, callback) {
        try {
            var inboundparms_117 = arguments;

            // throw ({'Sample error': 'getexecuteobject'});

            // code tries to get appropriate executeobject...will always return something even if error fn
            var targetfn = undefined;
            var executeflag = false;

            proxyprinttodiv("getexecuteobject howToDo", howToDo, 11);
            proxyprinttodiv("getexecuteobject whatToDo", whatToDo, 11);
            //proxyprinttodiv("getexecuteobject fn whatToDo", String(window[whatToDo]), 11);
            if ((!howToDo) || (!whatToDo)) {
                params["etstatus"] = "invalidconfig";
                targetfn = executeerror
            }

            // switch (howToDo) {
            switch (howToDo) {

                case "dothis": // previously executefn ... go look for fn to execute
                    if (whatToDoFn !== window[whatToDo]) {
                        targetfn = window[whatToDo];
                    } else {
                        targetfn = whatToDoFn;
                    }

                    break;

                case "executeparam":
                    if (params[whatToDo] === undefined) {
                        targetfn = undefined;
                        break;
                    }
                    // targetfn = params[whatToDo];
                    targetfn = 'execute';
                    params['executethis'] = params[whatToDo];



                    // if (!targetfn instanceof Function) {
                    //     targetfn = window[targetfn];
                    // } else if (typeof targetfn === 'string') {
                    //     targetfn = window[targetfn];
                    // }

                    break;

                case "executegetwid":
                    targetfn = execute;
                    executeflag = true; // so caller gets wid and then executes with the results
                    //params = {};
                    params["executethis"] = "getwid";
                    //params["executethis"] = "getwidmaster";
                    //params["command.convertmethod"] = "nowid";
                    params["wid"] = whatToDo;

                    // execute({"executethis":"getwid", "wid":whatToDo}, function (err, res) {
                    // tempobject=""
                    // if (tempobject !== undefined && tempobject['js']) {
                    //     targetfn = tempobject['js'];
                    //     fncheck = true;
                    // } else {
                    //     tempobject.skipExecuteObjCheck = true;
                    //     tempobject.params={};
                    //     callback({}, tempobject);
                    // }
                    // });
                    break;


                case "server":
                    proxyprinttodiv("execute server hit!", params, 11);
                    targetfn = window["server"];
                    params['executethis'] = whatToDo;
                    break;
            }

            //proxyprinttodiv("getexecuteobject targetfn I", String(targetfn), 11);
            // if ((targetfn === undefined) || (targetfn === "")) {
            //     params["etstatus"] = "nofn";
            //     targetfn = executeerror; // we want to return undefined here so we try the next case
            // } else {
            //     if (!targetfn instanceof Function) { // check to see if it is a string fucntion
            //         if (targetfn.indexOf('function') != -1) {
            //             if (window[targetfn]) {
            //                 targetfn = window[targetfn]
            //             } else {
            //                 params["etstatus"] = "invalidfn"
            //                 targetfn = executeerror;
            //             }
            //         }
            //     }
            // }

            //proxyprinttodiv("getexecuteobject result targetfunction ", String(targetfn), 11);
            // callback({}, {
            callback(null, {
                targetfn: targetfn,
                params: params,
                executeflag: executeflag
            });

        } // end try
        catch (err) {
            var finalobject = createfinalobject({"result": "getexecuteobject"}, {}, "getexecuteobject", err, inboundparms_117);
            console.log('** Error Caught in the getexecuteobject() function in executethis.js ** => ' + err);
            console.log('** finalobject created from error => ' + JSON.stringify(finalobject));
            callback(finalobject.err, finalobject.res);
        }
    } // fn

    exports.executeerror = window.executeerror = executeerror = function executeerror(params, callback) {
        try {
            var inboundparms_118 = arguments;

            var err;
            var output;
            if (!output) {
                output = {};
            }
            if (params !== undefined) {
                output["etstatus"] = params["etstatus"]
            } else {
                output["etstatus"] = "error";
            }
            callback(output, output);
        } // end try
        catch (err) {
            var finalobject = createfinalobject({"result": "executeerror"}, {}, "executeerror", err, inboundparms_118);
            console.log('** Error Caught in the executeerror() function in executethis.js ** => ' + err);
            console.log('** finalobject created from error => ' + JSON.stringify(finalobject));
            callback(finalobject.err, finalobject.res);
        }
    };

    function nonCircularStringify(obj) {
        var cache = [];

        return JSON.stringify(obj, function (key, value) {
            if (typeof value === 'object' && value !== null) {
                if (cache.indexOf(value) !== -1) {
                    //found circular reference, discard key
                    return;
                }
                cache.push(value);
            }
            return value;
        });
    }

    // call bootprocess() for the first time after all dependencies have been loaded
    //bootprocess();

})(typeof window == "undefined" ? global : window);
