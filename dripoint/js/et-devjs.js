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
                            })
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


                    var result, commandmultiple;
                    var executeend;
                    var parametersend;
                    var inarray = [];
                    var command;
                    var stagedata = {};
                    var overallerror = {};
                    var overallresult = {};
                    //debuglevel = 11
                    proxyprinttodiv("execute - hello from execute", incomingparams, 11);

                    // check for execute multiple commands, if passed store and delete from request

                    if (isString(incomingparams)) {
                        var temp = {};
                        temp['executethis'] = incomingparams;
                        proxyprinttodiv("execute - array params received I", temp, 11);
                        incomingparams = temp;
                        proxyprinttodiv("execute - array params received I", incomingparams, 11);
                    }

                    // with stagedata, the code below not needed
                    if ((incomingparams && incomingparams.command && incomingparams.command.multiple && incomingparams.command.multiple.parameters)) {
                        proxyprinttodiv("execute - command.multiple ", incomingparams.command.multiple, 37);
                        command = incomingparams.command.multiple.parameters;
                        delete incomingparams.command;
                    }

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
                                callback(err, res)
                            })
                        } else {
                            proxyprinttodiv('>>>> execute incomingparams ', incomingparams, 11);



                            proxyprinttodiv("execute - incomingparams 3", incomingparams, 11);
                            if (incomingparams.command && incomingparams.command.parameters) {
                                for (var key in incomingparams.command.parameters) {
                                    incomingparams[key] = incomingparams.command.parameters[key];
                                }
                                delete incomingparams.command.parameters;
                            }

                            var filter_data = getcommand(incomingparams, {
                                    "command": {
                                        "internalcall": true,
                                        "adopt": "",
                                        "resultparameters": "",
                                        "result": "",
                                        "beforepreexecute": "",
                                        "beforemidexecute": "stage_mergetincoming_continueonerror",
                                        "beforepostexecute": "",
                                        "beforeendexecute": "",
                                        "beforemultiple": "",
                                        "duringmultiple": "",
                                        "beforeendmultiple": "",
                                        "execute": "",
                                        "environment": "",
                                        "inherit":""
                                    }
                                }, {
                                    "command": {
                                        "internalcall": "",
                                        "adopt": "",
                                        "resultparameters": "",
                                        "result": "",
                                        "beforepreexecute": "",
                                        "beforemidexecute": "",
                                        "beforepostexecute": "",
                                        "beforeendexecute": "",
                                        "beforemultiple": "",
                                        "duringmultiple": "",
                                        "beforeendmultiple": "",
                                        "execute": "",
                                        "environment": "",
                                        "command":""
                                    }
                                },
                                true);
                            inboundparms = filter_data.output;
                            command = filter_data.filteredobject.command;
                            proxyprinttodiv('>>>> execute command', command, 11);
                            proxyprinttodiv('>>>> execute incomingparams', incomingparams, 11);

                            incomingparams['midexecute'] = incomingparams['executethis'];
                            delete incomingparams['executethis'];

                            //process beforepreexecute
                            stagedata = {};
                            stagedata.fn = command.beforepreexecute;
                            stagedata.currenterror = null;
                            stagedata.currentresult = {};
                            //stagedata.overallerror={};
                            //stagedata.overallresult={};
                            stagedata.initialparameters = incomingparams;
                            processstage(stagedata);

                            dothisprocessor(incomingparams, 'preexecute', function (err, preResults) {
                                stagedata.fn = command.beforemidexecute;
                                stagedata.currenterror = err;
                                stagedata.currentresult = preResults;
                                processstage(stagedata);

                                if (stagedata.overallerror && Object.keys(stagedata.overallerror).length > 0) {
                                    callback(stagedata.overallerror, stagedata.overallresult)
                                } else {
//                                    try {
                                    preResults=stagedata.currentresult;
                                
                                    // // If error, bounce out
                                    // if (err && Object.keys(err).length > 0) {
                                    //     callback(err, preResults);
                                    // } else {
                                    //     try {

                                    //         if (!preResults) {
                                    //             preResults = {}
                                    //         }
                                    //         // result will always be array
                                    //         // if (Object.prototype.toString.call(preResults) === '[object Array]') {
                                    //         //     if (preResults.length > 0) {
                                    //         //         preResults = preResults[0];
                                    //         //     } 
                                    //         // }

                                    //         if (preResults) {
                                    //             extend(true, preResults, incomingparams)
                                    //         }

                                    //         // is it a good idea ot have incomingparams survive, maybe put incomingparamters inside command.parameters = incomingparams


                                    dothisprocessor(preResults, 'midexecute', function (err, midResults) {

                                        // stagedata.fn = command.beforepostexecute
                                        // stagedata.currenterror = err
                                        // stagedata.currentresult = preResults
                                        // stagedata = processstage(stagedata)

                                        // If error, bounce out
                                        // if (stagedata.overallerror && Object.keys(stagedata.overallerror).length > 0) {
                                        //     callback(err, preResults)
                                        // } else {
                                        //     preResults=stagedata.currentresult
                                        // }

                                        // If error, bounce out
                                        if (err && Object.keys(err).length > 0) {
                                            callback(err, midResults);
                                        } else {
//                                            try {

                                                proxyprinttodiv("post midexecute -- midResults", midResults, 11);

                                                if (!midResults) {
                                                    midResults = {}
                                                }


                                                // if (Object.prototype.toString.call(midResults) === '[object Array]') {
                                                //     if (midResults.length > 0) {
                                                //         midResults = midResults[0];
                                                //     } 
                                                // }

                                                // if (midResults) {
                                                //     extend(true, midResults, preResults);
                                                //     }

                                                proxyprinttodiv("end midexecute -- midResults", midResults, 11);

                                                dothisprocessor(midResults, 'postexecute', function (err, postResults) {

                                                    // stagedata.fn = command.beforendexecute
                                                    // stagedata.currenterror = err
                                                    // stagedata.currentresult = preResults
                                                    // stagedata = processstage(stagedata)

                                                    // If error, bounce out
                                                    // if (stagedata.overallerror && Object.keys(stagedata.overallerror).length > 0) {
                                                    //     callback(err, preResults)
                                                    // } else {
                                                    //     preResults=stagedata.currentresult
                                                    // }
                                                    // If error, bounce out
                                                    if (err && Object.keys(err).length > 0) {
                                                        callback(err, postResults);
                                                    } else {
//                                                        try {

                                                            if (!postResults) {
                                                                postResults = {}
                                                            }

                                                            proxyprinttodiv("end postResults", postResults, 11);
                                                            // if (Object.prototype.toString.call(postResults) === '[object Array]') {
                                                            //     if (postResults.length > 0) {
                                                            //         postResults = postResults[0];
                                                            //     } 
                                                            // }

                                                           // make a copy of inherit data if we have resultparameters
                                                            if (command.resultparameters && Object.keys(command.resultparameters).length > 0) {
                                                                var copyOfInheritData = {};
                                                                extend(true, copyOfInheritData, postResults);
                                                            }

                                                            // process inherit
                                                            if (command.adopt) {
                                                                // proxyprinttodiv("execute - adopt ****", adopt, 11);
                                                                // proxyprinttodiv("execute - command.adopt ****", command.adopt, 11);
                                                                delete incomingparams.command;
                                                                if (command.adopt === "override") {
                                                                    postResults = extend(true, incomingparams, postResults);
                                                                }
                                                                if (command.adopt === "default") {
                                                                    postResults = extend(true, postResults, incomingparams);
                                                                }

                                                            }

                                                            // process command.resultparamters, deals with loading a copy of inherit data along with incomingparams
                                                            if (command.resultparameters && Object.keys(command.resultparameters).length > 0) {
                                                                // proxyprinttodiv("execute - resultparameters ****", resultparameters, 11);
                                                                // proxyprinttodiv("execute - command.resultparameters ****", command.resultparameters, 11);
                                                                if (!postResults.command) {
                                                                    postResults.command = {};
                                                                }
                                                                if (!postResults.command.inherit) {
                                                                    postResults.command.inherit = {};
                                                                }
                                                                if (!postResults.command.inherit.data) {
                                                                    postResults.command.inherit.data = {};
                                                                }
                                                                // load a copy of the what was inherited
                                                                postResults.command.inherit.data = copyOfInheritData;
                                                                proxyprinttodiv("execute - resultparameters B", command.resultparameters, 11);
                                                                incomingparams = extend(true, incomingparams, command.resultparameters);
                                                            }

                                                            // wrap  if needed to

                                                            proxyprinttodiv("end postResults command.result", command, 11);

                                                            if (command.result) {
                                                                var json = {};
                                                                if (isArray(postResults)) {
                                                                    postResults = postResults[0];
                                                                }
                                                                json[command.result] = postResults;
                                                                postResults = json;
                                                            }
                                                            proxyprinttodiv("end postResults III", postResults, 11);

                                                            if (Object.prototype.toString.call(postResults) !== '[object Array]') {
                                                                var tempArray = [];
                                                                tempArray.push(postResults);
                                                                postResults = tempArray;
                                                            }
                                                            // if command.execute then call execute with command.execute.parameters
                                                            // code below not tested and could be taken out
                                                            if (command.execute) {
                                                                var executeparam = {};
                                                                if (command && command.execute && command.execute.parameters) {
                                                                    executeparam = command.execute.parameters;
                                                                }
                                                                if (!isObject(command.execute)) {
                                                                    executeparam['executethis'] = command.execute;
                                                                } else { // if object
                                                                    extend(true, executeparam, command.execute);
                                                                }
                                                                extend(true, executeparam, postResults);
                                                                execute(executeparam, callback);

                                                            } else {
                                                                proxyprinttodiv("end postexecute -- postResults", postResults, 11);
                                                                callback(null, postResults);
                                                            }
//                                                        } // end try
//                                                        catch (err) {
//                                                            var finalobject = createfinalobject({
//                                                                "result": "execute_post"
//                                                            }, {}, "execute_post", err, postResults);
//                                                            console.log('** Error Caught during the postexecute doThis() call'
//                                                                + ' in the execute() function of executethis.js ** => ' + err);
//                                                            console.log('** finalobject created from error => ' + JSON.stringify(finalobject));
//                                                            callback(finalobject.err, finalobject.res);
//                                                        }
                                                    } // end else
                                                }); // end do this processor post

//                                            } // end try
//                                            catch (err) {
//                                                var finalobject = createfinalobject({
//                                                    "result": "execute_mid"
//                                                }, {}, "execute_mid", err, midResults);
//                                                console.log('** Error Caught during the midexecute doThis() call'
//                                                    + ' in the execute() function in executethis.js ** => ' + err);
//                                                console.log('** finalobject created from error => ' + JSON.stringify(finalobject));
//                                                callback(finalobject.err, finalobject.res);
//                                            }
                                        } // end else
                                    }); // end do this processor mid

//                                } // end try
//                                catch (err) {
//                                    var finalobject = createfinalobject({
//                                        "result": "execute_pre"
//                                    }, {}, "execute_pre", err, preResults);
//                                    console.log('** Error Caught during the preexecute doThis() call'
//                                        + 'in the execute() function in executethis.js ** => ' + err);
//                                    console.log('** finalobject created from error => ' + JSON.stringify(finalobject));
//                                    callback(finalobject.err, finalobject.res);
//                                }
                            } // end else
                        }); // end do this processor pre
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


    // stagedata.fn=command.beforepreexecute;
    // stagedata.currenterror=null;
    // stagedata.currentresult={}
    // stagedata.overallerror={}
    // stagedata.overallresult={}
    // stagedata.initialparameters=incomingparams

    function processstage(stagedata) {
        if (!stagedata) {
            stage_mergecurrent_stoponerror(stagedata)
        } else { // if stagedata
            var targetfn = window[stagedata.fn];
            if (targetfn) { // if fn exists then do it
                stagedata = targetfn(stagedata);
            } else { // default behavior
                stage_mergecurrent_stoponerror(stagedata);
            }

        }
        return {
            fn: "",
            currentresult: stagedata.currentresult,
            overallerror: stagedata.overallerror,
            overallresult: stagedata.overallresult
        };
    }

    function stage_mergecurrent_stoponerror(stagedata) {
            stagedata.overallerror = stagedata.currenterror;
            stagedata.overallresult = extend(true, stagedata.overallresult, stagedata.currentresult);
            if (!stagedata.currentparameters) {
                stagedata.currentparameters = {};
            }
        }

    function stage_mergetincoming_continueonerror(stagedata) {
        if (!stagedata.currentresult) {
            stagedata.currentresult = {};
        }

        if (stagedata.currentresult) {
            extend(true, stagedata.currentresult, stagedata.incomingparams);
        }

        stagedata.overallerror = stagedata.currenterror;
        stagedata.overallresult = stagedata.currentresult;

    }


    function failall(stagedata) {
        var targetresults = {};
        var overallerror = stagedata.overallerror;
        var overallresult = stagedata.overallresult;
        var initialparameters = stagedata.initialparameters;
        var currentresult = stagedata.currentparameters;
//        var currentresult = stagedata.currenterror;  // should be one or the other, not both
        var parameters = stagedata.parameters;
        // do some logic
        return {
            overallerror: targetresults.overallerror,
            overallresult: targetresults.overallresult
        };
    }


    function saveandprocessqueue(stagedata) {
        var targetresults = {};
        var overallerror = stagedata.overallerror;
        var overallresult = stagedata.overallresult;
        var initialparameters = stagedata.initialparameters;
        var currentresult = stagedata.currentparameters;
//        var currentresult = stagedata.currenterror; // should be one or the other, not both
        var parameters = stagedata.parameters;
        // do some logic
        return {
            overallerror: targetresults.overallerror,
            overallresult: targetresults.overallresult
        };
    }



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
                        var finalobject = createfinalobject({"result": "executeone"}, {}, "executeone", err, resp);
                        console.log('** Error Caught in the fncallbck() function which exists '
                            + 'in the executeone() function in executethis.js ** => ' + err);
                        console.log('** finalobject created from error => ' + JSON.stringify(finalobject));
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
            var inboundparms_113 = arguments;
            // > execute()
            // > if array then multiple()
            // > else normal
            // > 
            // > multiple
            // > split into series, parallel, waterfall
            // > if eachtodo = array 
            // >   {for (eachsplit in eachtodo) {
            // >       executemultiple(eachtodo[eachsplit]);
            // >       }
            // > else (if not array) {executeone();}

            // throw ({'Sample error': 'executethismultiple'});
            var stagedata = {};
            var overallerror = {};
            var overallresult = {};
            var output = [];
            var commandobject = {};
            var defaultCommandObject = {};
            defaultCommandObject['executefilter'] = '';
            defaultCommandObject['executelimit'] = 15;
            defaultCommandObject['executemethod'] = 'execute';
            defaultCommandObject['executeorder'] = 'series';

            if (inCmd) {
                commandobject = defaultCommandObject;
                for (var key in defaultCommandObject) {
                    if (defaultCommandObject.hasOwnProperty(key)) {
                        if (inCmd[key]) {
                            commandobject[key] = inCmd[key];
                        }
                    }
                }
            } else {
                commandobject = defaultCommandObject;
            }
            proxyprinttodiv("executethismultiple - outside iteration - inparams ", inparams, 11);
            proxyprinttodiv("executethismultiple - outside iteration - commandobject ", commandobject, 11);
            // function filterParams(item, callback) {
            //     callback(item == item);
            // }

            function filterParams(item, callback) {
                proxyprinttodiv("executethismultiple - item ", item, 11);
                var result = true;
                if (commandobject && commandobject.executefilter) {
                    result = false;
                    // {"query":{"$eq":{"type":"minute"}}}
                    // {"query":{"$in":{"type":["minute","second"]}}}
                    if (item && commandobject && commandobject.executefilter && commandobject.executefilter.query) {

                        if (commandobject.executefilter.query['$eq']) {
                            var key = Object.keys(commandobject.executefilter.query.$eq);
                            proxyprinttodiv("executethismultiple - key ", commandobject.executefilter.query.$eq[key], 11);
                            result = (item && item[key] === commandobject.executefilter.query.$eq[key]);
                        }
                        // TODO :: add more conditions and more operators handling
                    }
                    callback(result);
                } else {
                    callback(result);
                }
            }
            // async.filter(inparams, filterParams, function (filteredParams) {
            //     proxyprinttodiv("executethismultiple - filteredParams ", filteredParams, 11);



            //     //filter 1st n request only

            //     if (filteredParams && (filteredParams.length > commandobject.executelimit)) {
            //         filteredParams = filteredParams.splice(15);
            //     }

            var filteredParams = JSON.parse(JSON.stringify(inparams));

            async.series([
                    function step1(clb) {


                        // stagedata={};
                        // stagedata.fn=command.beforemultiple;
                        // stagedata.currenterror=null;
                        // stagedata.currentresult={};
                        // //stagedata.overallerror={};
                        // //stagedata.overallresult={};
                        // stagedata.initialparameters=incomingparams;
                        // stagedata = processstage(stagedata);

                        // throw ({'Sample error': 'executethismultiple_async_step1'});

                        // series
                        if (commandobject.executeorder === "series") {
                            proxyprinttodiv("executethismultiple - filteredParams ", filteredParams, 11);
                            async.mapSeries(filteredParams, function (eachtodo, cbMap) {
                                async.nextTick(function () {
                                    try {
                                        proxyprinttodiv("executethismultiple - eachtodo ", eachtodo, 11);

                                        // throw ({'Sample error': 'executethismultiple_async_mapSeries_nexttick'});

                                        if (eachtodo instanceof Array) {
                                            proxyprinttodiv("series - eachtodo 1st condition ****** should not trigger un2 level deep", eachtodo, 11);
                                            executethismultiple(eachtodo, {}, function (err, res) {
                                                // If error, bounce out
                                                if (err && Object.keys(err).length > 0) {
                                                    callback(err, res);
                                                } else {
                                                    try {
                                                        // proxyprinttodiv("executethismultiple - iteration - eachtodo  ", eachtodo, 11);
                                                        output.push(res);
                                                        cbMap(null);
                                                    } catch (err) {
                                                        var finalobject = createfinalobject({
                                                            "result": "executethismultiple_executethismultiple"
                                                        }, {}, "executethismultiple_executethismultiple", err, res);
                                                        console.log('** Error Caught in attempt to push "res" into the'
                                                            + ' output array when eachtodo was an Array ** => ' + err);
                                                        console.log('** finalobject created from error => ' + JSON.stringify(finalobject));
                                                        cbMap(finalobject.err, finalobject.res);
                                                    }
                                                }
                                            });
                                        } else {
                                            proxyprinttodiv("series - eachtodo", eachtodo, 11);
                                            execute(eachtodo, function (err, res) {
                                                // stagedata.fn = command.duringmultiple
                                                // stagedata.currenterror = err
                                                // stagedata.currentresult = res
                                                // stagedata = processstage(stagedata)
                                                // If error, bounce out
                                                if (err && Object.keys(err).length > 0) {
                                                    callback(err, res);
                                                } else {
                                                    try {
                                                        // execute(eachtodo, function (err, res) {
                                                        output.push(res);
                                                        cbMap(null);
                                                    } catch (err) {
                                                        var finalobject = createfinalobject({
                                                            "result": "executethismultiple_executethismultiple_II"
                                                        }, {}, "executethismultiple_executethismultiple_II", err, res);
                                                        console.log('** Error Caught in attempt to push "res" into the'
                                                            + ' output array when eachtodo was not an Array ** => ' + err);
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
                            }, function (err, re) {
                                clb(null);
                            });
                        } else {
                            clb(null);
                        }
                    }
                    // ,

                    // function step2(clb) {
                    //     // waterfall
                    //     if (commandobject.executeorder === "waterfall") {
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
                    //     if (commandobject.executeorder === "parallel") {
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
                ],
                function (err, resp) {
                    // stagedata.fn = command.beforeendmultiple
                    // stagedata.currenterror = err
                    // stagedata.currentresult = preResults
                    // stagedata = processstage(stagedata)
                    // if any of the saves produced an error, err would equal that error
                    proxyprinttodiv("executethismultiple - resp ", resp, 11);
                    callback(err, output);
                });
            //});
            //
        } // end try
        catch (err) {
            var finalobject = createfinalobject({"result": "executethismultiple"}, {}, "executethismultiple", err, inboundparms_113);
            console.log('** Error Caught in the executethismultiple() function in executethis.js ** => ' + err);
            console.log('** finalobject created from error => ' + JSON.stringify(finalobject));
            callback(finalobject.err, finalobject.res);
        }
    };



    // function executethismultiple(paramsArr, incmd, callback) {
    //     var eachelement;
    //     var resultlist=[];
    //             if (paramsArr instanceof Array) {
    //                 for (eachelement in paramsArr) {
    //                 executethismultiple(paramsArr[eachelement], {}, function (err, retResults) {
    //                     resultlist.push(retResults);
    //                     callback(null, resultlist);
    //                 });
    //                 }
    //             } else {
    //                 execute(paramsArr, function (err, retResults) {
    //                     console.log('>>>> retResults >>>> ' + JSON.stringify(retResults));
    //                     proxyprinttodiv('Function retResults', retResults, 17);
    //                     resultlist.push(retResults);
    //                     proxyprinttodiv('Function resultlist', resultlist, 17);
    //                     callback(null, resultlist);
    //                 });
    //             }
    //         }


    // function executethismultiple(paramsArr, incmd, callback) {
    //     var eachelement;
    //     var resultlist = [ ];

    //     if (paramsArr instanceof Array) {
    //         // async.map(paramsArr)
    //         for (eachelement in paramsArr) {
    //             executethismultiple(paramsArr[eachelement], {}, function (err, retResults) {
    //                 resultlist.push(retResults);
    //             });
    //         }
    //     } else {
    //         execute(paramsArr, function (err, retResults) {
    //             console.log('>>>> retResults >>>> ' + JSON.stringify(retResults));
    //             proxyprinttodiv('Function retResults', retResults, 17);
    //             resultlist.push(retResults[0]); // [0] controls the level of array nesting no [0] = [[]]
    //             proxyprinttodiv('Function resultlist', resultlist, 17);
    //         });
    //     }

    //     callback(null, resultlist);
    // }

    // function executethismultiple(paramsArr, incmd, callback) {
    //     var eachelement;
    //     var resultlist = [];

    //     async.series([
    //         function step1(step1_callback) {
    //             if (paramsArr instanceof Array) {
    //                 //async.mapSeries(paramsArr, function (param, map_callback) {
    //                 for (eachelement in paramsArr) {
    //                     executethismultiple(paramsArr[eachelement], {}, function (err, retResults) {
    //                         resultlist.push(retResults);
    //                         //map_callback(null);
    //                        // step1_callback(null);
    //                     });
    //                 }
    //                 //}); // end async broke it
    //             } else {
    //                 execute(paramsArr, function (err, retResults) {
    //                     console.log('>>>> retResults >>>> ' + JSON.stringify(retResults));
    //                     proxyprinttodiv('Function retResults', retResults, 17);
    //                     resultlist.push(retResults[0]); // [0] controls the level of array nesting no [0] = [[]] on the end return
    //                     proxyprinttodiv('Function resultlist', resultlist, 17);
    //                     //step1_callback(null);
    //                 });
    //             }
    //             step1_callback(null);
    //         }
    //     ], function (err, res) {
    //             callback(null, resultlist);
    //     });
    // }


    function dothisprocessor(params, target, callback) {
        try {
            var inboundparms_114 = arguments;
            var err = {};
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
        } // end try
        catch (err) {
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
                                                                command ={};// Fake security PASS TODO :: pass informaton needed for security checks in this object
//                                                                authcall(executeobject, command, function (err, securitycheck) {
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
                                                                                        if (
                                                                                            (res === undefined) ||

                                                                                            (
                                                                                                isArray(res) && res[0]['metadata'] && res[0]['metadata']['expirationdate'] &&
                                                                                                new Date(res[0]['metadata']['expirationdate']) < new Date()
                                                                                            ) ||

                                                                                            (isArray(res)) && (res.length === 1) && (Object.keys(res[0]).length === 0)
                                                                                        )

                                                                                        {
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
                                                                                        executeobject.executeflag = true
                                                                                    }
                                                                                    // for an addthis situation
                                                                                    if (executeobject.executeflag === true) {
                                                                                        if ((res) && (res.js)) {
                                                                                            // TODO: do not leave this in production as is
                                                                                            var fnstring = res.js;
                                                                                            if (fnstring.indexOf("function") === 0) {
                                                                                                fnstring = "(" + fnstring + ")()"
                                                                                            }
                                                                                            proxyprinttodiv("execute fnstring", fnstring, 11);
                                                                                            eval(fnstring);
                                                                                        } else {
                                                                                            execute(res, function (err, res) {
                                                                                                // If error, bounce out
                                                                                                if (err && Object.keys(err).length > 0) {
                                                                                                    callback(err, res);
                                                                                                } else {
                                                                                                    // if executegetwid then execute with the results
                                                                                                    proxyprinttodiv("Return from nested execution: ", res, 11);
                                                                                                    outputResultsArr.push(res);
                                                                                                    cbMapW(null, "What Iteration");
                                                                                                    // cbMapW(err, "What Iteration");
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
//                                                                }); // end authcall

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

