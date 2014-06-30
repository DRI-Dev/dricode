// copyright (c) 2014 DRI
//
// 10) hash remove all command except environment
// 11) environment look at appdto
// - environment.global
// - envrionment.var[fn]
// - environment.attributes
// - environment.run / type-level-executeid
// 12) support for eval sending parameters into it
//
// command.processparameterfn
// command.processfn
// sync_local, sync_server, sync_local_server, sync_local_cache
//
// command.skipcache
//
// search for configuration.environment 
// future we may need to support multiple executeids

(function (window) {
    // 'use strict';

    var execute;

    // get other parameters that might be for this function
    function enhanceparameters(inboundparams) {
        // first save and get from environment
        inboundparams.command.environment = checkenviornment(inboundparams.command.environment);
        // then bring items deeply nested in environmnet to "this" level
        extend(true, inboundparams,
                    inboundparams.command.environment.global || {},
                    inboundparams.command.environment.var ? inboundparams.command.environment.var[inboundparams.executethis] || {} : {});

        inboundparams.command.environment.var = {}; // clear it out so it does not grow forever

        return inboundparams;
    }

    // function reads & updates wid environment when running locally
    function checkenviornment(environment) {
        // merge incoming environment wiht default environment with incomming winning
        environment = extend(true, {}, config.configuration.d, environment);
        if (config.configuration.environment === "local") 
        {
            // read environment wid
            var environmentwid = {};
                environmentwid = getfromlocal(config.configuration.e);
            if (!environmentwid) 
            { // if none then begin creating one
                environmentwid = {"wid":config.configuration.e};
            }

            // get the data for environment from right section of wid (i.e. command.db)
            var environmentdata = {};
            if (environmentwid[config.configuration.defaultdb]) 
            {
                environmentdata = environmentwid[config.configuration.defaultdb];
            }

            // merge current environment data with sent in environment data
            environment = extend(true, {}, environmentdata, environment);
            if (!environment.accesstoken) // if no ac then create one
            {
                environment.accesstoken = createNewGuid();
            }
            if (!environment.var)
            {
                environment.var = {};
            }
            if (!environment.global)
            {
                environment.global = {};
            }

            // store it back to wid
            environmentwid[config.configuration.defaultdb] = environment;
            addtolocal(config.configuration.e, environmentwid);
        }

        // return value of environment
        return environment;
    }


    // create blank command.result or if one was existing then 
    // go through an exisiting result table to see if there are things to be done (i.e. create tryset)
    // for every type if overallerror then every items in detail get copied to tryset 
    // if type = group then only copy the exact records that had failed
    function processresulttable(command) {
        proxyprinttodiv("processresulttable command-", command, 11, true);
        if (command.resulttable)
        {
            // proxyprinttodiv("processresulttable command begin", command, 11, true);
            // if command.resulttable sent in then get executionparameters -- right now we only support one executeid 
            for (var eachexecuteid in command.resulttable) 
            {
                if (!command.resulttable[eachexecuteid]) {command.resulttable[eachexecuteid]={};}
                command.resulttable[eachexecuteid].tryset=[];
                command.resulttable[eachexecuteid].executionpreferences={};

                // if nothing in tryset then done
                if (!(command.resulttable && command.resulttable[eachexecuteid] && command.resulttable[eachexecuteid].tryset))
                {
                    break;
                }
                else
                {
                    var type = command.resulttable.executionpreferences.command.environment.run.type;
                    // proxyprinttodiv("processresulttable command after clearing tryset", command, 11, true);
                    // fish out from commmand.result table only the ones with errors in case of group, all of them otherwise
                    for (var eachitem in command.resulttable[eachexecuteid].detail)
                    {
                        //proxyprinttodiv("processresulttable command.resulttable[eachexecuteid].detail[eachitem]", command.resulttable[eachexecuteid].detail[eachitem], 11);
                        if ((type==="group" && command.resulttable[eachexecuteid].detail[eachitem].err) ||
                            (type!=="group" && command.resulttable[eachexecuteid].overallerror))
                        {
                            //proxyprinttodiv("processresulttable eachitem", eachitem, 11);
                            var eachexecute = {};
                            eachexecute.outgoingparam={};
                            eachexecute.executeseq = command.resulttable[eachexecuteid].detail[eachitem].executeseq;
                            eachexecute.outgoingparam = command.resulttable[eachexecuteid].detail[eachitem].outgoingparam;
                            command.resulttable[eachexecuteid].detail[eachitem].res={};
                            command.resulttable[eachexecuteid].detail[eachitem].err=null;
                            command.resulttable[eachexecuteid].tryset.push(eachexecute);
                        }
                    }
                    command.resulttable[eachexecuteid].overallresult={};
                    command.resulttable[eachexecuteid].overallerror=null;
                }
            }
            command.resulttable.overallerror=null;
            command.resulttable.overallresult={};
            proxyprinttodiv("processresulttable command end", command, 11, true);
        }
    }

    // add each item in executionparameters to tryset in resulttable
    function addexecutionparameters(command, executionparameters, currentexecuteid) {
        proxyprinttodiv("inparams executionparameters", executionparameters,11);

        if (command.resulttable[currentexecuteid].tryset) 
        {
            var currentexecutecount = command.resulttable[currentexecuteid].tryset.length; // seq based on how many are existing
            for (var eachitem in executionparameters) 
            {
                // if no type then make default type series
                // I think this code can be taken out since executeion preferences wil have this default
                 proxyprinttodiv("inparams executionparameters[eachitem]", executionparameters[eachitem],11);
                if (!executionparameters[eachitem].command) {executionparameters[eachitem].command={};}
                if (!executionparameters[eachitem].command.environment) {executionparameters[eachitem].command.environment={};}
                if (!executionparameters[eachitem].command.environment.run) {executionparameters[eachitem].command.environment.run={};}
                if (!executionparameters[eachitem].command.environment.run.type) {executionparameters[eachitem].command.environment.run.type="series";}

                var eachexecute = {};
                eachexecute.executeseq = currentexecutecount;
                eachexecute.outgoingparam =  executionparameters[eachitem];

                var detail_record = {};
                detail_record.res={};
                detail_record.outgoingparam = executionparameters[eachitem];
                detail_record.executeseq = currentexecutecount;
                detail_record.err=null;

                command.resulttable[currentexecuteid].detail.push(detail_record);
                command.resulttable[currentexecuteid].tryset.push(eachexecute);
                currentexecutecount++;
            }
        }
    }

    function createresulttable(command, currentexecuteid) {
        command.resulttable = {};
        command.resulttable[currentexecuteid]={};
        command.resulttable[currentexecuteid].detail = [];     // detail of all records that were tried
            // inside of detail {outgoingparam: executeseq: err: res: }
        command.resulttable[currentexecuteid].tryset = [];
            // inside of tryset (outgoingparam, executeseq)
        command.resulttable[currentexecuteid].overallresult={};
        command.resulttable[currentexecuteid].overallerror={};
        command.resulttable.executionpreferences={};
        command.resulttable.overallresult={};
        command.resulttable.overallerror=null;
    }

    function fishoutexecutionpreferences(inparams, executionpreferences) {
        // copy environment& processfn, executethis from in params into executionpreferences
        // executionpreferences are merged at execution time and do not win
        // common parameters are merged at setup time and DO win

        executionpreferences.command={};
        executionpreferences.command.environment={};

        if (!inparams.command) {inparams.command={};}
        if (!inparams.command.environment) {inparams.command.environment={};}
        if (!inparams.command.environment.run) {inparams.command.environment.run={};}

        // make parameters better by dealing with command.environmnet
        inparams = enhanceparameters(inparams);

        extend(true, executionpreferences.command.environment, inparams.command.environment);
        delete inparams.command.environment;

        // should executelevel be increased here?
        if (!executionpreferences.command.environment.run.executelevel) {executionpreferences.command.environment.run.executelevel=0;}
        if (!executionpreferences.command.environment.run.executeid) {executionpreferences.command.environment.run.executeid=createNewGuid();}
        if (!executionpreferences.command.environment.run.type) {executionpreferences.command.environment.run.type="series";}
        //if (!executionpreferences.command.environment.syncrule) {executionpreferences.command.environment.syncrule=config.environment.syncrule}

        if (inparams.executethis)
        {
            executionpreferences.executethis=inparams.executethis;
            delete inparams.executethis;
        }

        proxyprinttodiv("converttocommand - outside iteration - executionpreferences II", executionpreferences, 11);
    }

    // This function converts incoming execute parameters into a standard execute object (ie command.resulttable)
    // Execute executes a list items.  It supports string, array, command.xrun (object or array), command.resulttable
    //    Definitions:
    //       executionpreferences apply to all executes in the list
    //       executionparameters is the list to execute, which can be an object of one
    //       command.xrun is the lost of what to execute
    //       command.resulttable is an internal standard to communicate the detailed status of what has been and will be executed
    // 
    // Overall process:
    //     -convert to object
    //     -split into executionpreferences (command.environment here), executionparameters 
    //     -move parameters around, defaults, etc
    //     -create command.resultable
    //
    // Process:
    //   string > executethis:<string> > convert to object
    //   array  > command.xrun:<array> > convert to object
    //   adopt command.parameters to root level
    //   make command.resulttable
    //   make executionpreferences.command.environment
    //   make executionparameters from xrun 
    //   if xrun array, left overs to executionpreferences or executionparameters
    //
    //   set defaults get executeid, executelevel, type -- create them if they do not exist
    //   if level 0 then make command.processparameterfn=sync_local_server
    //
    // process command.resulttable.details to command.resulttable.tryset (based on type)
    //
    //
    function converttocommand(inparams, callback) {
        proxyprinttodiv("executefishout inparams", inparams, 11);

        // if string them move it to command.xrun..not it is an object again
        if (isString(inparams)) 
        {
            var strtemp = {};
                strtemp.command={};
                strtemp.command.xrun = inparams;
            inparams = strtemp;
        }
        proxyprinttodiv("converttocommand after string inparams", inparams, 11);

        // if array then load array into parameter command.xrun...not it is an object again
        if (isArray(inparams)) 
        { // if array, then create commands, and executionpreferences (global to all execute list)
            var arrtemp = {};
                arrtemp.command = {};
                arrtemp.command.xrun = inparams.slice(0);
            inparams = arrtemp;
            proxyprinttodiv("inparams after array to object conversion ", inparams, 11);
        } 
        proxyprinttodiv("converttocommand - inparams I", inparams, 11);
        // *** now it is converted to an object ***

        proxyprinttodiv("converttocommand - inparams II", inparams, 11);

        // command.parameters may have additional parameters for this call...unbundle them
        // adopt command.parameters into inparams
        if (inparams.command && inparams.command.parameters)
        {
            // make parameter copy
            var inparamscopy = {};
            extend(true, inparamscopy, inparams);
            extend(true, inparams, inparamscopy.command.parameters);
            delete inparams.command.parameters; // delete after unbundle
        }

        // inparams is now better, inparamscopy is copy of original
        var command={};
        var currentexecuteid;
        var executionparameters;
        var executionpreferences={};

        // if command.resulttable exists then that wins over all else, ingnores rest of parameters
        if (inparams.command && inparams.command.resulttable)
        {
            // common parameters will get lost
            // extra parameters will be lost also
            command.resulttable={};
            extend(true, command.resulttable, inparams.command.resulttable);
            processresulttable(command); 
            //delete inparams.command.resulttable;
            //extend(true, executionpreferences, inparams);
            proxyprinttodiv("converttocommand - command--", command, 11);
        }
        else // command.resulttable overrides all else
        {        
            // split out executionpreferences that should be common
            fishoutexecutionpreferences(inparams, executionpreferences);
            //proxyprinttodiv("converttocommand - executionpreferences", executionpreferences, 11);
            //proxyprinttodiv("converttocommand - inparams III", inparams, 11);

            // create right array of executionparameters
            if (inparams && inparams.command && inparams.command.xrun) 
            {   
                if (isString(inparams.command.xrun))
                {   // if string > convert it to object...let next case take care of next process
                    var temp = inparams.command.xrun;
                    inparams.command.xrun={};
                    inparams.command.xrun.executethis=temp;
                }
                if (isObject(inparams.command.xrun)) 
                {   // if object > convert to array...let next case take care of next process
                    // maybe combine at this level
                    proxyprinttodiv("converttocommand - inparams", inparams, 11);
                    executionparameters={};
                    extend(true, executionparameters, inparams.command.xrun);
                    delete inparams.command.xrun;
                    extend(true, executionparameters, inparams);
                    proxyprinttodiv("converttocommand - executionparameters", executionparameters, 11);

                    var tempArray=[];
                    tempArray.push(executionparameters);
                    executionparameters=tempArray;
                }
                if (isArray(inparams.command.xrun))
                {   // create executionparameters and executionpreferences from what we have
                    //proxyprinttodiv("converttocommand - outside iteration - inparams", inparams, 11, true);
                    executionparameters=inparams.command.xrun.slice(0); // make a copy of array
                    //proxyprinttodiv("converttocommand - outside iteration - executionparameters I", executionparameters, 11, true);
                    delete inparams.command.xrun;
                    extend(true, executionpreferences, inparams); // extra stuff in inparams goes to extraparams
                    //delete inparams; -- does not matter since not needed any more
                }

            } 
            else // if not xrun
            {   
                // if object all along then those are the execution parameters
                executionparameters=inparams;
                var tempArray=[];
                tempArray.push(executionparameters);
                executionparameters=tempArray;
            }

            //proxyprinttodiv("converttocommand - outside iteration - executionparameters II", executionparameters, 11, true);
            currentexecuteid = executionpreferences.command.environment.run.executeid;
            if (!command.resulttable) {createresulttable(command, currentexecuteid);}
            // add executionpreferences & executionparameters to resulttable             
            addexecutionparameters(command, executionparameters, currentexecuteid);
            // executionpreferences & command should now be object, executionparameters should be array
            proxyprinttodiv("converttocommand - outside iteration - executionparameters III", executionparameters, 11, true);
        } // if not resulttable

        extend(true, command.resulttable.executionpreferences, executionpreferences);  

        proxyprinttodiv("converttocommand - outside iteration - command III", command,11,true );
        //proxyprinttodiv("converttocommand - outside iteration - executionpreferences III ", executionpreferences, 11, true);

        return command
    }

    // main entry to execute
    // 1) convert parameters to resulttable
    // 2) fishout list to be done (try set), common parameters to list (executionpreferences)
    // 3) execute all in try set
    //  a-based on type fix current iteration's try parameters (i.e use previous results for waterfall)
    //  b-merge current iteration with executionpreferences
    // 4) massage parameters through function command.processparameterfn
    // 5) call execute based on command.processfn
    // 6) based on type save parameters & results
    // 7) interpret results and provide a consolidated err, res
    exports.execute = window.execute = execute = function execute(input, callback) {
        var color  = Number(getglobal('debugcolor')); color++; saveglobal('debugcolor', color);
        var indent  = Number(getglobal('debugindent')); indent++; saveglobal('debugindent', indent);
        var previousresults=null;
        var skipexecute = false;
        var overallerror=null;
        var arrayresult=[];
        var trycount = 0;
        var incomingparams = {};

        extend(true, incomingparams, input);              // make copy of input 
        incomingparams=ConvertFromDOTdri(incomingparams); // convert from dot notation -- not necessary if dot notation not sent in
        proxyprinttodiv('>>>>>>>>>>>>>>>>>>>>>>>>execute begin', incomingparams, 99, true, true);

        var command = converttocommand(incomingparams);    // call main conversion
        //proxyprinttodiv('execute right after converttocommand ',command, 11, true);
        // fish out from converted results
        var executionpreferences = command.resulttable.executionpreferences;
        var currentexecuteid = executionpreferences.command.environment.run.executeid;
        var level =  executionpreferences.command.environment.run.executelevel;
        var type = executionpreferences.command.environment.run.type;
        var tryset=command.resulttable[currentexecuteid].tryset;
        var trylength = tryset.length;

        // read and save environment parameters
        //executionpreferences.command.environment = checkenviornment(executionpreferences.command.environment);

        // maybe delete command object if empty
        if (executionpreferences.command && 
            executionpreferences.command.environment && 
            Object.keys(executionpreferences.command.environment).length === 0) 
        {
            delete executionpreferences.command.environment;
        }

        if (executionpreferences.command && 
            Object.keys(executionpreferences.command).length === 0) 
        {
            delete executionpreferences.command;
        }

        proxyprinttodiv('execute before try series incomingparams ',incomingparams, 11);
        proxyprinttodiv('execute before try series command ',command, 11);
        proxyprinttodiv('execute before try series executionpreferences', executionpreferences, 11, true);
        proxyprinttodiv('execute before try series tryset', tryset, 11, true);
        saveglobal('debuglevel', executionpreferences.command.environment.run.executelevel);

        // increase executelevel...this way any nested executes will be at higher level
        executionpreferences.command.environment.run.executelevel++; 
        proxyprinttodiv('execute executionpreferences.command.environment.run.executelevel', executionpreferences.command.environment.run.executelevel, 11);

        if (type==="waterfall" || type==="runfirstonewaterfall") // first time around create previous results
        {
            previousresults={};
            extend(true, previousresults, executionpreferences, tryset[0].outgoingparam); 
            //createoutgoingparam(previousresults, executionpreferences, tryset[0].outgoingparam);
        }

        //proxyprinttodiv('execute level type ', String(executionpreferences.command.environment.run.executelevel) + ' ' + type, 11);

        if (color === 15) { color = 0; }  // reset color to prevent "level too high" errors

        if (executionpreferences.command.environment.run.executelevel > 10 || color > 120) {
            callback({"errorname":"level too high"}, null);
        } 
        else 
        {
            if (type === "parallel") 
            {
                callback({"errorname":"parallel"}, null);
            } 
            else // parallel will be supported in future
            { 
                // step through try set
                async.mapSeries(tryset, function (currenttry, cbMap) 
                {
                    async.nextTick(function () 
                    {
                        var color  = Number(getglobal('debugcolor')); color++; saveglobal('debugcolor', color);
                        //var indent  = Number(getglobal('debugindent')); indent++; saveglobal('debugindent', indent);
                        if (skipexecute) 
                        {
                            proxyprinttodiv('execute level type skip', String(executionpreferences.command.environment.run.executelevel) + ' ' + type, 11);
                            proxyprinttodiv("** skipping turn **", currenttry, 11);
                            cbMap(null);
                        } 
                        else 
                        {
                            var currentexecute=currenttry.outgoingparam;
                            var currentseq = currenttry.executeseq;
                            var outgoingparam = {};

                            proxyprinttodiv("before execute - currenttry ", currenttry, 11);
                            proxyprinttodiv("before execute currentexecute", currentexecute, 11);
                            proxyprinttodiv("before execute currentseq", currentseq, 11);
                            proxyprinttodiv("skipexecute is", skipexecute, 11);
                            proxyprinttodiv("before execute outgoingparam", outgoingparam, 11);

                            if (isArray(currentexecute)) 
                            {
                                var temp = {};
                                temp.command={};
                                temp.command.xrun=[];
                                temp.command.xrun=currentexecute.slice(0);
                                currentexecute=temp;
                            } 

                            //proxyprinttodiv('execute executionpreferences.command.environment.run.executelevel I', executionpreferences.command.environment.run.executelevel, 11);

                            extend(true, outgoingparam, previousresults, executionpreferences, currentexecute);

                            // use the new level in outgoing params
                            outgoingparam.command.environment.run.executelevel=executionpreferences.command.environment.run.executelevel;

                            //proxyprinttodiv('execute executionpreferences.command.environment.run.executelevel II', executionpreferences.command.environment.run.executelevel, 11);
                            //proxyprinttodiv("before execute outgoingparam", outgoingparam, 11);
                            //proxyprinttodiv("before execute executionpreferences", executionpreferences, 11);
                            proxyprinttodiv("execute step 00 outgoingparam", outgoingparam, 11, true);
                            proxyprinttodiv('execute step 00 type', type, 11);
                            // step1 massage parameters based on command.processparameterfn, send results via outgoingparam
                            // step2 execute based on command.processfn, send results and error in from stestep02res/err
                            // step3 log the results based on type
                            var fromstep02res={};
                            var fromstep02err=null;

                            async.series(
                            [   
                                function step01(cbstep1) 
                                {   // if resulttable exists then skip this process
                                    if (outgoingparam.command.resulttable) 
                                    {
                                        cbstep1(null);
                                    }
                                    else
                                    {
                                        var pp;
                                        if (outgoingparam && outgoingparam.command && outgoingparam.command.processparameterfn) 
                                        {   // if processparameterfn sent in then use it
                                            pp = window[outgoingparam.command.processparameterfn];
                                            delete outgoingparam.command.processparameterfn;  // not needed since each has it own?
                                        }
                                        else
                                        {   // if level 0 (and processparameterfn was not sent in) then get defaults
                                            if (level===0) 
                                            {   // level 0 look at syncrule (local-server)
                                                pp = window[outgoingparam.command.environment.syncrule];
                                                if (!pp) { pp = execute_nothing; }
                                            }
                                            else
                                            {   // other levels do execute_function, execute_parameter, execute_get_wid
                                                pp = create_what_to_do_list;
                                            }
                                        }

                                        // go an "massage" the outgoing parameters to get better outgoing parameters
                                        pp(outgoingparam, function (err, res) 
                                            {
                                                if (err) 
                                                {   
                                                    fromstep02res = res;
                                                    fromstep02err = err;
                                                }
                                                else 
                                                {
                                                    outgoingparam = res;
                                                }
                                                cbstep1(null);
                                            }
                                            );
                                    }
                                },
                                function step02(cbstep2) 
                                {   // normally the execute function step
                                    if (fromstep02err)
                                    {
                                        cbstep2(null);
                                    }
                                    else
                                    {
                                        trycount++; // increase trycount
                                        //proxyprinttodiv('execute level type 02', String(executionpreferences.command.environment.run.executelevel) + ' ' + type, 11);
                                        proxyprinttodiv("execute step02 outgoingparam", outgoingparam, 11, true);
                                        var processfn;
                                        
                                        if (outgoingparam && outgoingparam.command && outgoingparam.command.processfn)
                                        {
                                            proxyprinttodiv("after processfn", outgoingparam.command.processfn, 11);
                                            processfn=window[outgoingparam.command.processfn];
                                            delete outgoingparam.command.processfn;
                                        }
                                        if (processfn) proxyprinttodiv("after processfn II", processfn.name, 11);

                                        if (processfn) 
                                        {
                                            //proxyprinttodiv("execute calling processfn",processfn.name , 11);
                                            processfn(outgoingparam, function (err, res) 
                                                {
                                                    fromstep02res=res;
                                                    fromstep02err=err;
                                                    cbstep2(null);
                                                }
                                            )
                                        } 
                                        else 
                                        {   // not needed defaulted in create list
                                            //proxyprinttodiv("execute calling execute execute_function","as default" , 11);
                                            execute_function(outgoingparam, function (err, res) 
                                                {
                                                    fromstep02res=res;
                                                    fromstep02err=err;
                                                    cbstep2(null);
                                                }
                                            )
                                        }
                                    }
                                }, 
                                function step03(cbstep3)
                                {   // process results
                                    //proxyprinttodiv('execute level type 03', String(executionpreferences.command.environment.run.executelevel) + ' ' + type, 11);
                                proxyprinttodiv("execute step03 end outgoingparam", outgoingparam, 11, true);
                                proxyprinttodiv('execute step03 end results', fromstep02res, 11);
                                proxyprinttodiv('execute step03 end error', fromstep02err, 11);

                                     // do not log execute level for future use... not relevant
                                    delete outgoingparam.command.environment.executelevel;
                                    var executeresult={};
                                    executeresult.outgoingparam=outgoingparam;
                                    executeresult.err=fromstep02err;
                                    executeresult.res=fromstep02res;
                                    executeresult.executeseq = currentseq;
                                    // we could store current execute instead of outgoing
                                   
                                    // update results to the right detail record based on executeseq
                                    if (!fromstep02err) 
                                    {
                                        for (var eachdetail in command.resulttable[currentexecuteid].detail)
                                            {
                                                if (command.resulttable[currentexecuteid].detail[eachdetail].executeseq===currentseq)
                                                {
                                                    command.resulttable[currentexecuteid].detail[eachdetail]=executeresult;
                                                }
                                            }
                                    }

                                    // if waterfall and last one then only save last result
                                    if (((type === "waterfall") || (type === "runfirstonewaterfall")) && trylength===trycount)
                                    {arrayresult=[];}

                                    // if error and if not past error OR if new error "bigger" than notfound then save it
                                    if (fromstep02err)
                                    {
                                        if (!overallerror) // if not overallerror then create one
                                        {
                                       
                                            skipexecute=true; // do we need to do this regardless of conidtion above?
                                            overallerror=fromstep02err; 
                                        }
                                        else // if overallerror exists
                                        {
                                            if (overallerror.errorname==='notfound') 
                                            {   // anything is "bigger than not found"
                                    
                                                skipexecute=true;
                                                overallerror=fromstep02err;
                                            }
                                            else
                                            {   // anything is bigger than failnotfound...execpt not found
                                                if (overallerror.errorname==='failnotfound' && 
                                                    fromstep02err.errorname!=="notfound") 
                                                {   
                                                   
                                                    skipexecute=true;
                                                    overallerror=fromstep02err; 
                                                }
                                            }
                                        }
                                    }
                                    else // if no error this iteration
                                    {
                                        // *** review
                                        arrayresult.push(fromstep02res)
                                    } 

                                    // save overall in side currentexecute id overall
                                    command.resulttable[currentexecuteid].overallerror=overallerror;
                                    command.resulttable[currentexecuteid].overallresult=arrayresult;

                                    // if runfirstone and results then clear out previous error results
                                    if (((type === "runfirstone") || (type === "runfirstonewaterfall")) && !fromstep02err)
                                    {
                                        skipexecute=true; overallerror=null;
                                    }

                                    // if we get a real error then stop executing...fnnotfound is not a real error
                                    if (fromstep02err && fromstep02err.errorname!=="fnnotfound")
                                    {
                                        skipexecute=true;
                                    }

                                    // if run first one and no results then keep running
                                    if (((type === "runfirstone") || (type === "runfirstonewaterfall")) && arrayresult.length===0)
                                    {
                                        skipexecute=false;
                                    }


                                    // if waterfall load these results as the input for the next
                                    if ((type === "waterfall") || (type === "runfirstonewaterfall"))
                                    {
                                        previousresults = fromstep02res;
                                    }
                                    // if ((type === "waterfall") || (type === "runfirstonewaterfall"))
                                    // {
                                    //     if (fromstep02res)  // or fromstep02err
                                    //     {
                                    //         previousresults = fromstep02res;
                                    //     }
                                    //     else // if results were null then send incoming parameters as input
                                    //     {
                                    //         proxyprinttodiv('execute step03 previousresults before change', previousresults, 11, true);
                                    //         proxyprinttodiv('execute step03 currentexecute', currentexecute, 11, true);
                                    //         previousresults = outgoingparam;
                                    //         proxyprinttodiv('execute step03 previousresults after change', previousresults, 11, true);
                                    //     }
                                    // }

                                    // if group, then do not care about not found, will be done later
                                    if (type === "group" &&  
                                        fromstep02err && 
                                        fromstep02err.errorname === "notfound") 
                                    {
                                        skipexecute=false;
                                    }  
                                    //proxyprinttodiv('execute level type II', String(executionpreferences.command.environment.run.executelevel) + ' ' + type, 11);

                                proxyprinttodiv('execute step03 end command ', command, 11, true);
                                proxyprinttodiv('execute step03 end overallerror ', overallerror, 11);
                                proxyprinttodiv('execute steo03 end arrayresult ', arrayresult, 11);
                                proxyprinttodiv('execute level type --', String(executionpreferences.command.environment.run.executelevel) + ' ' + type, 11);
                                proxyprinttodiv('execute steo03 -------------------------------------------', 
                                                '----------------------------------------------------------', 11);
                                    cbstep3(null);
                                } 
                            ], 
                     
                            function (err, res) 
                            {
                                //proxyprinttodiv('execute level type III ', String(executionpreferences.command.environment.run.executelevel) + ' ' + type, 11);
                                proxyprinttodiv("execute step04 end outgoingparam", outgoingparam, 11, true);
                                proxyprinttodiv('execute step04 end results', fromstep02res, 11);
                                proxyprinttodiv('execute step04 end error', fromstep02err, 11);
                                proxyprinttodiv('execute step04 end overallerror ', overallerror, 11);
                                proxyprinttodiv('execute steo04 end arrayresult ', arrayresult, 11);
                                proxyprinttodiv('execute level type --', String(executionpreferences.command.environment.run.executelevel) + ' ' + type, 11);
                                proxyprinttodiv('execute steo04 -------------------------------------------',                '----------------------------------------------------------', 11);
                                cbMap(null);
                            }); // finish asych 01,02,03
                        } // if skipexecute
                    }); // next tick
                },  // mapseries fn

                function (err, res) {
                    proxyprinttodiv('execute before try series executionpreferences step06', executionpreferences, 11, true);
                    proxyprinttodiv('execute before try series tryset step06', tryset, 11, true);
                    proxyprinttodiv('execute step05 END arrayresult step06', arrayresult, 11);
                    proxyprinttodiv('execute step6 level type --', String(executionpreferences.command.environment.run.executelevel) + ' ' + type, 11);

                    var errorsummary=null;
                    var resultsummary;    
         
                    proxyprinttodiv('execute step05 SUMMARY command ', command, 11, true);

                    // if [] then resultsummary={} which means we return [{}]
                    // if [{a:b}] resultsummary={a:b} which means return [{a:b}]
                    // if [{a:b},{c:d}] resultsummary=[{a:b},{c:d}] which means we return c.rt[] = [[{a:b},{c:d}]]
                    if (arrayresult.length===0) {resultsummary={};}
                    else if (arrayresult.length===1) {resultsummary=arrayresult[0];}
                    else {resultsummary=arrayresult;}

                    // if fn, parm, executegetwid could not find 
                    if (overallerror && overallerror.errorname==="fnnotfound") 
                        {overallerror.errorname="notfound";}

                    // if we were top level then nothing else to do if notfound
                    if (level===0 && overallerror && overallerror.errorname==="notfound") 
                    {overallerror.errorname="failnotfound";}

                    if (overallerror && Object.keys(overallerror).length > 0) 
                    {
                        errorsummary=overallerror;
                        proxyprinttodiv('execute type', type, 11);
                        if (type ==="group")
                        {   // if group then results of interest to previous level
                            // save error and results for this executeid and overall
                            delete command.resulttable[currentexecuteid].tryset;
                            command.resulttable[currentexecuteid].overallerror=errorsummary;
                            command.resulttable[currentexecuteid].overallresult=resultsummary;
                            command.resulttable.overallerror=errorsummary;
                            command.resulttable.overallresult=resultsummary;
                            resultsummary={};
                            resultsummary.command=command;
                            // tbd how to clean resulttable
                            // maybe resultsummary.command=command.details
                            // or delete executionpreferences, etc
                            // from above: executeid, executelevel, platform should always be adopted... they shoudl be created
                            // copy environment, clean command, then readd only environment
                            var environment = {};
                            extend(true, environment, resultsummary.command.resulttable.executionpreferences.command.environment);
                            delete resultsummary.command.resulttable.executionpreferences;
                            resultsummary.command.resulttable.executionpreferences={};
                            resultsummary.command.resulttable.executionpreferences.command={};
                            resultsummary.command.resulttable.executionpreferences.command.environment=environment;
                            proxyprinttodiv('execute resultsummary', resultsummary, 11);
                        }
                        else // if not group then the previous level can do nothing with this detail
                        {   
                            resultsummary=null;
                        }
                    }

                    proxyprinttodiv('execute SUMMARY errorsummary ', errorsummary, 11);
                    proxyprinttodiv('execute SUMMARY resultsummary ', resultsummary, 11, true);
                    var color  = Number(getglobal('debugcolor')); color --; saveglobal('debugcolor', color);
                    var indent  = Number(getglobal('debugindent')); indent --; saveglobal('debugindent', indent);
                    callback(errorsummary, resultsummary)
                }); // mapseries
            } // parallel
            } // execute level
        }; // end



    // main execute function
    window.execute_function = function execute_function(incomingparams, callback) {

        proxyprinttodiv('>>>> execute incomingparams ', incomingparams, 99, true);
        // see if we need to recurse ... i.e. xrun or resulttable
        if (incomingparams.command.xrun || 
                (
                    incomingparams.command.resulttable &&
                    incomingparams.command.environment.run.type==="runfirstonewaterfall"
                )
            )
        {
            execute(incomingparams, function (err, res) {callback(err, res)});
        } 
        else // now check if targetfn exists
        {
            var targetfn = window[incomingparams.executethis];
            if (!targetfn) 
            {   // if does not exist then error
                callback({"errorname":"fnnotfound"}, null);
            }
            else // continue with normal execution
            {
                proxyprinttodiv('>>>> execute incomingparams ', incomingparams, 11);
                var filter_data = getcommand(incomingparams, {
                        "command": {
                            "convertmethod": "toobject",
                            "adopt": null,
                            "resultparameters": null,
                            "result": "",
                            "skipcache": true,
                            "internalcall": true // use action processor
                            //"environment": {},
                        }
                    }, {
                        "command": {
                            "convertmethod": "x",
                            "adopt": "x",
                            "resultparameters": "x",
                            "result": "x",
                            "skipcache": "x",
                            "internalcall": "x"
                        }
                    },
                    true);

                // keep command.environment/command.run.executeid as part of parameter
                //proxyprinttodiv('>>>> execute filter_data', filter_data, 11, true);
                var command = filter_data.filteredobject.command;
                inboundparms = filter_data.output;
                proxyprinttodiv('>>>> execute command', command, 11, true);
                proxyprinttodiv('>>>> execute inboundparms', inboundparms, 11, true);

                var objkey = hashobj(inboundparms, command);
                delete inboundparms.executethis; // delete parameter executethis...we know the targetfn

                checkcache(objkey, function (err, res) {
                    if (res) 
                    {
                        callback(err, res);
                    }
                    else 
                    {
                        targetfn(inboundparms, function (err, resultparameters) 
                        { 
                            proxyprinttodiv("execute after do this inboundparms", inboundparms, 11);
                            proxyprinttodiv("execute after do this resultparameters", resultparameters, 11);
                            proxyprinttodiv("execute after do this err", err, 11);
                            proxyprinttodiv('execute after do this command', command, 11, true);
                            if (!resultparameters) {resultparameters={};}
                            if (!resultparameters.command) {resultparameters.command={};}
                            if (!resultparameters.command.environment) {resultparameters.command.environment={};}
                            if (!resultparameters.command.environment.run) {resultparameters.command.environment.run={};}
                            resultparameters.command.environment.run.executeid = incomingparams.command.environment.run.executeid;
                            if (err && Object.keys(err).length > 0) 
                            {
                                callback(err, resultparameters);
                            } 
                            else 
                            {
                                //proxyprinttodiv("end resultparameters II", resultparameters, 11);
                                //proxyprinttodiv("execute - command **** I", resultparameters, 11);
                                if (resultparameters && resultparameters.command) 
                                {
                                    if (resultparameters.command.environment) 
                                    {
                                        delete resultparameters.command.environment;
                                    }
                                    if (Object.keys(resultparameters.command).length === 0) 
                                    {
                                        delete resultparameters.command;
                                    }
                                }

                                //proxyprinttodiv("execute - command.resultparameters ****", command.resultparameters, 11);
                                if (command.resultparameters) 
                                {
                                    if (!command.adopt) {command.adopt="default";}
                                    var copyOfInheritData = {};
                                    extend(true, copyOfInheritData, command.currentresult);

                                    proxyprinttodiv("execute - command ****", command, 11);
                                    proxyprinttodiv("execute - command ****", command.resultparameters, 11);
                                    proxyprinttodiv("execute - command.adopt ****", command.adopt, 11);
                                    proxyprinttodiv("execute - command.overallresult ****", resultparameters, 11);
                                    proxyprinttodiv("execute - inboundparms ****", inboundparms, 11);

                                    //delete incomingparams.command; 
                                    //we might want to save command.environment and then readd
                                    if (command.adopt === "override") 
                                    {
                                        resultparameters = extend(true, {}, command.resultparameters, command.currentresult); //[0]
                                    }
                                    if (command.adopt === "default") 
                                    {
                                        resultparameters = extend(true, {}, command.currentresult, command.resultparameters); //[0]
                                    }

                                    if (!resultparameters.command) 
                                    {
                                        resultparameters.command = {};
                                    }
                                    if (!resultparameters.command.inherit) 
                                    {
                                        resultparameters.command.inherit = {};
                                    }
                                    if (!resultparameters.command.inherit.data) 
                                    {
                                        resultparameters.command.inherit.data = {};
                                    }
                                    // load a copy of the what was inherited
                                    resultparameters.command.inherit.data = copyOfInheritData;
                                }

                                if (command.result) 
                                {
                                    var json = {};
                                    json[command.result] = resultparameters;
                                    resultparameters = json;
                                }

                                if (command.convertmethod === "todot") 
                                {
                                    resultparameters = ConvertToDOTdri(resultparameters);
                                }
                                if (command.convertmethod === "nocommand") 
                                {
                                    delete resultparameters.command;
                                }

                                proxyprinttodiv("execute - command **** II", resultparameters, 11);

                                if (command.skipcache) 
                                {
                                    callback(null, resultparameters);
                                } 
                                else 
                                {
                                    var expirationdate = new Date();
                                    expirationdate = new Date(expirationdate.getTime() + 1 * 60000);

                                    var recorddef = {
                                        "wid": objkey,
                                        "metadata": {
                                            "systemdto": {
                                                "expirationdate": expirationdate
                                            }
                                        },
                                        "command": {
                                            "datastore": "localstorage",
                                            "collection": "cache",
                                            "keycollection": "cachekey",
                                            "db": config.configuration.defaultdb,
                                            "databasetable": config.configuration.defaultdatabasetable
                                        }
                                    };
                                    recorddef = extend(true, {}, resultparameters, recorddef);
                                    updatewid(recorddef, function (err, res) {
                                        callback(null, resultparameters);
                                    });
                                } // end else skip cache
                            } // end else no error
                        }); // targetfn
                    } // else no cache
                }); // check cache
            } // targetfn
        } // executethis exists
    };

    function checkcache(objkey, callback) {
        if (objkey) {
            proxyprinttodiv("checkcache objkey **************", objkey, 99);
            var executeobject = {
                "wid": objkey,
                "command": {
                    "cache": false,
                    "datastore": config.configuration.defaultdatastore,
                    "collection": "cache",
                    "keycollection": "cachekey",
                    "db": config.configuration.defaultdb,
                    "databasetable": config.configuration.defaultdatabasetable
                }
            };
            executeobject["executethis"] = "getwid";
            proxyprinttodiv("checkcache executeobject", executeobject, 17);

            execute(executeobject, function (err, res) {
                //if (Object.keys(res).length > 0) {
                if (res) {
                    res = res[0];
                    proxyprinttodiv("checkcache getwid res", res, 17);
                    if (res && res.metadata && res.metadata.expirationdate && res.metadata.expirationdate < new Date()) {
                        callback(null, res);
                    } else {
                        callback(null, null);
                    }
                }
            })
        } else { // !objectkey (i.e. if command.cache==false)
            callback(null, null);
        }
    }

exports.hashobj = hashobj = function hashobj(inobj, command) {
        if (command && command.skipcache) {
            return null;
        } else {
            var obj = {};
            extend(true, obj, inobj);
            delete obj.executethis;
            delete obj.command.environment; // 

            var result = sortObj(obj, function (a, b) {
                return a.key < b.key;
            });
            return JSON.stringify(result);
        }
    };

    // this function expands inparams to be two calls, usually one to local and one to server
    // they are set to "runfirstone", it will not go to server unless first call fails
    // within each call it sets up to first call process parameters "create_what_to_do_list"
    //
    window.sync_local_server = function sync_local_server(inparams, callback) {
        proxyprinttodiv("sync_local_server inparams", inparams, 11);
        // create outside wrapper--copy command, set "runfirstone"
        var outparams={};
        outparams.command={};
        extend(true, outparams.command, inparams.command);
        outparams.command.environment.run.type = "runfirstonewaterfall";
//        outparams.command.processfn = "execute_function";
        outparams.command.xrun = [];

        // create step1 of inside--copy all minus processparameterfn, set create_what_to_do_list
        var firstcopy = {};
        extend(true, firstcopy, inparams);
        firstcopy.command.processfn = "execute_function";
        outparams.command.xrun.push(firstcopy);

        // second step will waterfall parameters from above
        var secondcopy={};
        extend(true, secondcopy, inparams);
        secondcopy.command.environment.run.executelevel=0;
        secondcopy.command.environment.platform="server";
        secondcopy.command.processfn = "execute_server";
        outparams.command.xrun.push(secondcopy);
            
        proxyprinttodiv("sync_local_server outparams", outparams, 11, true);
        callback(null, outparams);
    };

    window.sync_local_cache = function sync_local_server(inparams, callback) {
        proxyprinttodiv("sync_local_server inparams", inparams, 11);
        // create outside wrapper--copy command, set "runfirstone"
        var outparams={};
        outparams.command={};
        extend(true, outparams.command, inparams.command);
        outparams.command.environment.run.type = "runfirstonewaterfall";
//        outparams.command.processfn = "execute_function";
        outparams.command.xrun = [];

        // create step1 of inside--copy all minus processparameterfn, set create_what_to_do_list
        var firstcopy = {};
        extend(true, firstcopy, inparams);
        firstcopy.command.processfn = "execute_function";
        outparams.command.xrun.push(firstcopy);

        // second step will waterfall parameters from above
        var secondcopy={};
        extend(true, secondcopy, inparams);
        secondcopy.command.environment.run.executelevel=0;
        secondcopy.command.environment.platform="server";
        secondcopy.command.processfn = "execute_server";
        outparams.command.xrun.push(secondcopy);
            
        proxyprinttodiv("sync_local_server outparams", outparams, 11, true);
        callback(null, outparams);
    };

    window.sync_server = function sync_server(inparams, callback) {
        proxyprinttodiv("sync_local_server inparams", inparams, 11);
        var outparams = {};
        extend(true, outparams, inparams);
        outparams.command.processfn = "execute_server";
        proxyprinttodiv("sync_local_server outparams", outparams, 11, true);
        callback(null, outparams);
    };

    window.sync_local = function sync_local(inparams, callback) {
        proxyprinttodiv("sync_local_server inparams", inparams, 11);
        var outparams = {};
        extend(true, outparams, inparams);
        outparams.command.processfn = "execute_function";
//        outparams.command.processparameterfn = "execute_nothing";
        proxyprinttodiv("sync_local_server outparams", outparams, 11, true);
        callback(null, outparams);
    };

    // this function expands inparams to be three calls, to execute_function, execute_parameter, execute_get_wid
    // it sets these to "runfirstone" 
    // it further splits executegetwid into getwic and execute_function, its set these to "waterfall"
    window.create_what_to_do_list =  function create_what_to_do_list(inparams, callback) {
        proxyprinttodiv("create_what_to_do_list inparams", inparams, 11);
        // create outside wrapper--copy command, set "runfirstone"

        var outparams={};
        outparams.command = {};
        extend(true, outparams.command, inparams.command);
        outparams.command.environment.run.type = "runfirstone";
//        outparams.command.processfn = "execute_function";
        outparams.command.xrun = [];

        //nest all of below into one xrun
        // create step1 of inside--set execute_function
        var firstcopy={};
        extend(true, firstcopy, inparams);
        firstcopy.command.processparameterfn = "execute_nothing"; // so create_what is not called again
        firstcopy.command.processfn = "execute_function";
        outparams.command.xrun.push(firstcopy);

        // create step2 of inside--set execute_parameter
        var secondcopy={};
        extend(true, secondcopy, inparams);
        secondcopy.command.processparameterfn = "execute_parameter"; // so create_what is not called again
        secondcopy.command.processfn = "execute_function";
        outparams.command.xrun.push(secondcopy);

        // create third copy for execute get wid
        var thirdcopy={};
        extend(true, thirdcopy, inparams);
        thirdcopy.command.processparameterfn = "execute_get_wid"; // so create_what is not called again
        thirdcopy.command.processfn = "execute_function";
        outparams.command.xrun.push(thirdcopy);

        proxyprinttodiv("create_what_to_do_list outparams", outparams, 11, true);
        callback(null, outparams);
      };


    // executes the function stored in parameter
    // if params are {et:x, x:fn1} then it will execute fn1
    window.execute_parameter = function execute_parameter(params, callback) {
        if (!params[params.executethis]) 
        {
            execute_createerror(params, callback);
            //params.command.processfn="execute_createerror";
        } 
        else 
        {
            params.executethis = params[params.executethis];
        //}
        params.command.processfn="execute_function";
        proxyprinttodiv('execute end of execute_parameter', params, 11);
        callback(null, params)
        }
    };

    // if parms are {et: x} then to a getwid to x ... then excucte the results of x
    // to this by doing the getwid in step01 (processparameterfn) and the execute of resutls in step02
    window.execute_get_wid =  function execute_get_wid(inparams, cb) { 
        if (!inparams.executethis) 
        {
            proxyprinttodiv('execute end of execute_get_wid I', inparams, 11);
            execute_createerror(inparams, cb);
        } 
        else 
        {
            var params = {};
            extend(true, params, inparams);
            params.wid = params.executethis;
            params.executethis='getwid';
            params.command.processparameterfn = "execute_nothing";
            params.command.processfn = "execute_function";
            params.command.keepaddthis=false;
            execute(params, function (err, res) {
                if (!res) {res={};}
                if (!res.command) {res.command={};}

                if (err) 
                {
                    execute_createerror(res, cb);
                }
                else
                {
                    // if we got results from get wid, then execute them
//                    inparams.command.processparameterfn = "execute_nothing";
//                    inparams.command.processfn = "execute_function";
//                    res = extend(true, {}, inparams, res);
                    res.command.processparameterfn = res.command.processparameterfn || "execute_nothing";
                    cb(null, res)
                }
            })
        }
    };

    // function for where there is nothing to do
    window.execute_nothing =  function execute_nothing(params, callback) {
        proxyprinttodiv('execute end of execute_nothing', params, 11);
        callback(null, params);
    };
 
     // when whattodo fn, parm, executeget wid is unable to do something in that try
    window.execute_createerror =  function execute_createerror(params, callback) {
        proxyprinttodiv('execute end of execute_nothing', params, 11);
//        callback({"errorname":"fnnotfound"}, params);
        callback({"errorname":"fnnotfound"}, null);
    };

    exports.saveexecuteevent = saveexecuteevent = function saveexecuteevent(eventname, callback) {
        callback(null,null)

        };

    exports.processevent = processevent = function processevent(eventname, callback) {
        callback(null,null)
        proxyprinttodiv("processeventqueue eventname----", eventname, 99);
        getexecutelist(eventname, "queuecollection", function (err, executetodolist) {
            proxyprinttodiv("processeventqueue executelist", executetodolist, 17);
            executelistfn(executetodolist, execute, function (err, res) {
                deletelist(executetodolist, eventname, function (err, res) {
                    callback(err, res);
                    });
                });
            });
        };

    exports.executelistfn = executelistfn = function executelistfn(listToDo, fn, callback) {
        async.mapSeries(listToDo, function (eachresult, cbMap) {
            async.nextTick(function () {
                fn(eachresult, function (err, res){
                    cbMap(err, res);
                });
            });
        }, function (err, res) {
            callback(err, res);
        });
    };


    exports.getexecutelist = getexecutelist = function getexecutelist(eventname, eventtype, callback) {
        proxyprinttodiv("getexecutelist eventname(collection)", eventname, 17);
        proxyprinttodiv("getexecutelist eventtype(databasetable)", eventtype, 17);
        var executeobject = {"command": {"result": "queryresult"}};
        var executetodolist=[];
        executeobject.command.databasetable = eventtype;
        executeobject.command.collection = eventname;
        executeobject.command.db = "queuedata";
        //executeobject.command.result = "queueresult";
        executeobject["executethis"] = "querywid";
        //executeobject["mongorawquery"] = { "queuedata" : { "$gt": {} }}; // find objects that are not empty
        executeobject["mongorawquery"] = {"$and": [{"wid": "doesnotmatter"}]}   
        proxyprinttodiv("getexecutelist querywid executeobject", executeobject, 17);
        
        execute(executeobject, function (err, res) {
            proxyprinttodiv("getexecutelist mongorawquery res", res, 17);
            if (res.length === 0) {
                executetodolist = [];
            }
            else if(res[0] && res[0]["queryresult"]){
                for (var everyaction in res[0]["queryresult"]){
                    proxyprinttodiv("getexecutelist mongorawquery queryresult everyaction", everyaction, 17);
                    //if (res[0]["queryresult"][everyaction]
                    executetodolist.push(res[0]["queryresult"][everyaction]);
                }

            }
            callback(null, executetodolist);
        })
    };


    exports.deletelist = deletelist = function deletelist(listToDo, eventname, callback) {
        proxyprinttodiv("deletelist listToDo", listToDo, 17);
        var eachcmd={};
        eachcmd["command"] = {
                "fromdatabasetable":"queuecollection",
                "fromdatastore": "",
                "fromcollection":eventname,
                "fromkeycollection":eventname+"key",
                "fromdb":"queuedata",
                "todatabasetable":"completedqueuecollection",
                "todatastore": "",
                "tocollection":eventname,
                "tokeycollection":eventname+"key",
                "todb":"queuedata",
                "towid":"",
                "delete":true
            };

        async.mapSeries(listToDo, function (eachresult, cbMap) {
            async.nextTick(function () {
                var eachaction=eachresult;
                eachaction = extend(true, eachaction, eachcmd);
                copywid(eachaction, function (err, res){
                    cbMap(err, res);
                });
            });
        }, function (err, res) {
            callback(err, res);
        });
    };


    // function dothisprocessor(params, target, objkey, callback) {
    //     // note we should make a copy of params
    //     var inboundparms_114 = arguments;
    //     //var err = {};
    //     var err = null;
    //     // if command.status=fail, check between dothis, do not execute

    //     if (params && ((!params.command) || (params.command && params.command.status !== 'fail'))) {

    //         var whatToDoList,
    //             howToDoList,
    //             targetname,
    //             targetfunction;

    //         // throw ({'Sample error': 'dothisprocessor'});

    //         proxyprinttodiv("dothis - inboundparms", params, 11);
    //         //proxyprinttodiv("dothis - target ", target, 11);
    //         //proxyprinttodiv("dothis - callback ", String(callback), 11);

    //         if (params["midexecute"] === "test4") { // for debug purposes
    //             callback({
    //                 'test4': 'Reached test4 code.. dothisprocessor function '
    //             });
    //         } else {

    //             checkcache(objkey, function (err, res) {

    //                 if (res) {
    //                     callback(err, res)
    //                 } else {

    //                     // Before we try to load our config we need to see if there is something to do
    //                     // so we check to see if there is something on the right hand side for the target (pre, mid, post)
    //                     if (params[target] !== undefined) {

    //                         // it is possible the function sent in is a string or an actual function...we need to convert to string for config lookup
    //                         if (params[target] instanceof Function) {
    //                             targetname = params[target].name; // get the targetname
    //                             targetfunction = params[target]; // get targetfunction (whole function)
    //                         } // function was passed in
    //                         else {
    //                             targetname = params[target]; // get the targetname
    //                             targetfunction = window[params[target]]; // get targetfunction (whole function)
    //                         } // function name was passed in as string

    //                         delete params[target]; // ** moved by Roger
    //                         delete params[targetfunction]; // ** added by Roger

    //                         howToDoList = CreateDoList(params, target, targetfunction); // generate list based on pre, mid, post
    //                         // howToDoList = extend(howToDoList, tempHowToDoList);

    //                         // check for err on the 'return' of an object from CreateDoList
    //                         if (howToDoList.err) {
    //                             throw (howToDoList.err.error);
    //                         }

    //                         //proxyprinttodiv("dothis - howToDoList ", howToDoList, 11);

    //                         whatToDoList = CreateDoList(params, targetname, targetfunction); // generate list based on fn name
    //                         // whatToDoList = extend(whatToDoList, tempWhatToDoList);

    //                         // check for err on the 'return' of an object from CreateDoList
    //                         if (whatToDoList.err) {
    //                             throw (whatToDoList.err.error);
    //                         }

    //                         //proxyprinttodiv("dothis - whatToDoList ", whatToDoList, 11);
    //                         executelist(howToDoList, whatToDoList, callback); // execute list

    //                     } // params[target] undefined
    //                     else { // execute the nextstage (mid or post), may need to remove target out of params
    //                         if (params.hasOwnProperty('preexecute') && params.preexecute === undefined) {
    //                             delete params['preexecute'];
    //                         }
    //                         if (params.hasOwnProperty('midexecute') && params.midexecute === undefined) {
    //                             delete params['midexecute'];
    //                         }
    //                         if (params.hasOwnProperty('postexecute') && params.postexecute === undefined) {
    //                             delete params['postexecute'];
    //                         }
    //                         // err = {"Error": "here it is"};
    //                         proxyprinttodiv("**Error - dothisprocessor ", err, 11);
    //                         proxyprinttodiv("**executethis - params ", params, 11);
    //                         callback(err, params);
    //                     }
    //                 }
    //             }); // checkcache
    //         } // else not test4
    //     } else { // if not 
    //         callback(err, params);
    //     }

    // } // fn

    // // based on a target fn and params this fn will create a sorted list of what to do -- params will be in list

    // function CreateDoList(inparams, configtarget, configfn) {
    //     var inboundparms_115 = arguments;
    //     var params = {};
    //     extend(true, params, inparams);

    //     if ((params === undefined) || (params === "")) {
    //         params = {};
    //     }
    //     if ((configtarget === undefined) || (configtarget === "")) {
    //         configtarget = "executeerror";
    //     }
    //     if ((configfn === undefined) || (configfn === "")) {
    //         configfn = "";
    //     }
    //     // get saved configuration
    //     // cloning config
    //     var config0 = {};
    //     extend(true, config0, config.configuration); // config0 is working copy of current configuration
    //     config0 = toLowerKeys(config0);


    //     // If there is no config object for current target make one
    //     if (typeof config0[configtarget] !== 'object') {
    //         config0[configtarget] = [];
    //     }

    //     // fish out incoming configuraton
    //     if ((params['configuration'] !== undefined) && (params['configuration'][configtarget] !== undefined)) {
    //         var incomingConfig = [];
    //         var object = params['configuration'][configtarget][0]; // needs [0]
    //         object = toLowerKeys(object);
    //         incomingConfig.push(object); // get send in config
    //         // delete parms config
    //         delete params['configuration'][configtarget];
    //         // *** delete params['configuration'][configtarget][0];????????????? or above take out?
    //         //proxyprinttodiv("CreateDoList - incomingConfig ", incomingConfig, 11);
    //         if (incomingConfig) {
    //             config0[configtarget] = incomingConfig; // ** Joe - only load incoming config if there is an incoming config
    //         } // added by roger *******
    //     }

    //     if (config0[configtarget] !== undefined) {
    //         //delete params[configtarget];  *** moved by Roger
    //         // pre, mid, post configs are going to have multiple params so we need to iterate
    //         for (var i = 0; i < config0[configtarget].length; i++) {
    //             //try a concat
    //             if ((params !== undefined) && (config0[configtarget][i].params !== undefined)) {
    //                 //config0[configtarget][i].params = jsonConcat(params, config0[configtarget][i].params); // concatenate with other pararms
    //                 config0[configtarget][i].params = extend(true, params, config0[configtarget][i].params);
    //             }
    //             //config0[configtarget][i].params= params; ** took out and put above, we should not change 'params'
    //         }
    //         // save distiled parameters back to list
    //         // in example deletes midexecute : <something>
    //     }

    //     proxyprinttodiv("CreateDoList - config0 ", config0, 11);

    //     var list = config0[configtarget];
    //     if (list != undefined && list.length > 1) {
    //         list = list.sort(function (a, b) {
    //             if (a.executeorder > b.executeorder)
    //                 return 1;
    //             else if (a.executeorder < b.executeorder)
    //                 return -1;
    //             else if (a.tryorder > b.tryorder)
    //                 return 1;
    //             else if (a.tryorder < b.tryorder)
    //                 return -1;
    //             else
    //                 return 0;
    //         });
    //     }

    //     if ((list === undefined) || (list === "")) {
    //         list = [];
    //     }
    //     if (list[0] === undefined) {
    //         list[0] = {};
    //     }
    //     if (list[0].executeorder === undefined) {
    //         list[0].executeorder = 1;
    //     }
    //     if (list[0].tryorder === undefined) {
    //         list[0].tryorder = 1;
    //     }
    //     if (list[0].params === undefined) {
    //         list[0].params = params;
    //     }
    //     if (list[0].dothis === undefined) {
    //         list[0].dothis = configtarget;
    //     }

    //     if (list[0].dofn === undefined) {
    //         list[0].dofn = configfn;
    //         if ((list[0].dofn == "") && (window[list[0].dothis])) {
    //             list[0].dofn = window[list[0].dothis];
    //         }
    //     }
    //     //proxyprinttodiv("CreateDoList - list ", list, 11);
    //     return list;
    // } // end CreateDolist

    // function executelist(howToDoList, whatToDoList, callback) {
    //     var outputResultsArr = [];
    //     var howToDoParams;
    //     var howToDo;
    //     var h;
    //     var whatToDoParams;
    //     var whatToDo;
    //     var w;
    //     var whatToDoFn;
    //     var howallowexecute = true;
    //     var whatallowexecute = true;
    //     var howexecuteorder;
    //     var whatexecuteorder;
    //     var howtryorder; 
    //     var whattryorder;
    //     var err = null;
    //     var errorobject=null;
    //     var errorarray=[]

    //     howallowexecute = true;
    //     howexecuteorder = 1;

    //     proxyprinttodiv("executelist - howToDoList ", howToDoList, 11);
    //     proxyprinttodiv("executelist - whatToDoList ", whatToDoList, 11);

    //     async.mapSeries(howToDoList, function (h, cbMapH) {
    //         async.nextTick(function () {

    //         proxyprinttodiv("dothis - h ", h, 11);
    //         howToDo = h['dothis']; // get specific howToDo from list
    //         howToDoParams = h['params']; // get params that were stored
    //         if ((howToDoParams === undefined) || (howToDoParams === "")) {
    //             howToDoParams = {};
    //         }
    //         if (howexecuteorder !== h.executeorder) {
    //             // if orders are different, then we are in new iteration of do, reset flat to allow how execute
    //             howallowexecute = true;
    //         }
    //         howexecuteorder = h.executeorder;

    //         whatallowexecute = howallowexecute;
    //         whatexecuteorder = 1;
    //         proxyprinttodiv("executelist howToDo + allow", howToDo+' '+howallowexecute, 11);

    //         async.mapSeries(whatToDoList, function (w, cbMapW) {
    //             async.nextTick(function () {
    //                 if (w[howToDo]) {
    //                     whatToDo = w[howToDo]; // try to get specific config for whatToDo
    //                 } else {
    //                     whatToDo = w['dothis']; // default
    //                 }
    //                 whatToDoFn = w['dofn'];
    //                 whatToDoParams = w['params'];

    //                 if ((whatToDoParams === undefined) || (whatToDoParams === "")) {
    //                     whatToDoParams = {};
    //                 }

    //                 if (whatexecuteorder !== w.executeorder) {
    //                     // executeorder changed, reset whatallowexecute, other allow it to remain
    //                     whatallowexecute = true;
    //                 }
    //                 whatexecuteorder = w.executeorder;

    //                 //debugfn("executelist", "executelist", "execute", "mid", getglobal("debugcolor"), getglobal("debugindent"), debugvars([1, 2, 3]));
    //                 proxyprinttodiv("execute - w", w, 11);
    //                 proxyprinttodiv("executelist iteration ---", howToDo+' '+howallowexecute+' '+
    //                                 whatToDo+' '+whatallowexecute + ' ' + JSON.stringify(extend(true, howToDoParams, whatToDoParams)), 11);
    //                 if (!((howallowexecute) && (whatallowexecute))) { // else ((howallowexecute) && (whatallowexecute))  ... do something else
    //                     cbMapW(null, "What Iteration");
    //                     // cbMapW(err, "What Iteration");

    //                 } else {
    //                     //if both allowed to execute
    //                     var p = extend(true, howToDoParams, whatToDoParams);
    //                     var executionpreferences = {}
    //                         executionpreferences.command={}
    //                         executionpreferences.command.environment={}
    //                         executionpreferences.command.environment=p.command.environment
    //                         delete p.command.environment

    //                         // executionpreferences.command.environment.run.executelevel=p.command.environment.run.executelevel
    //                         // executionpreferences.command.environment.run.executeid = p.command.environment.run.executeid
    //                         // executionpreferences.command.environment.run.type = p.command.run.type
    //                         // delete p.command.environment.run.executelevel
    //                         // delete p.command.environment.run.executeid
    //                         // delete p.command.environment.run.type
    //                     var executeobject=null;
    //                     var executeresults=null;
    //                     errorobject = null;
    //                     async.series([
    //                         function step1(cb1) {
    //                             getexecuteobject(p, howToDo, whatToDo, whatToDoFn, function (err, res) {
    //                                 executeobject=res
    //                                 errorobject = err
    //                                 if (err!==null) {proxyprinttodiv("executelist result executeobject err", err, 11);}
    //                                 //proxyprinttodiv("executelist result executeobject object to be execute", executeobject, 11);
    //                                 if (err && Object.keys(err).length > 0) {
    //                                     if (err.errorname === "notfound") {
    //                                         cb1(null, executeobject)
    //                                     } else {
    //                                         executeobject=null; // added 5-15
    //                                         cb1(null, executeobject); // changed to null 5-15
    //                                     }
    //                                 }
    //                                 else {
    //                                     cb1(null, null)
    //                                 }
    //                                 })
    //                         },
    //                         function step2(cb2) {
    //                             if (!executeobject) {
    //                                  cb2(null, executeobject)
    //                             } else {
    //                                 proxyprinttodiv("executelist executeobject.targetfn + params -", 
    //                                     String(executeobject.targetfn.name) + " + " + JSON.stringify(executeobject.params), 11);
                                    
    //                                 //var parmexecute = {}
    //                                     //parmexecute.command={}
    //                                     //parmexecute.command.xrun=executeobject.params
    //                                 extend(true, executeobject.params, executionpreferences) 
    //                                 proxyprinttodiv("executelist executeobject.params ", executeobject.params, 11);  
    //                                 var color  = Number(getglobal('debugcolor')); color++; saveglobal('debugcolor', color); 
    //                                 executeobject.targetfn(executeobject.params, function (err, res) {  
    //                                     saveglobal('debugcolor', color--);
    //                                     executeresults=res; // added 5-15  
    //                                     errorobject=err;                        
    //                                     if (err!==null) {proxyprinttodiv("executelist result from execution err *", err, 11);}
    //                                     proxyprinttodiv("executelist executeobject.targetfn + params = res *", 
    //                                         String(executeobject.targetfn.name) + ' + ' +
    //                                         JSON.stringify(executeobject.params) + ' = ' + JSON.stringify(res), 11);
    //                                     cb2(null, null)
    //                                     // if (err && Object.keys(err).length > 0) {
    //                                     //     if (err.errorname === "notfound") {
    //                                     //         cb2(null, executeobject)
    //                                     //     } else {
    //                                     //         cb2(null, executeobject);
    //                                     //     }
    //                                     // }
    //                                     // else {
    //                                     //     //executeresults=res
    //                                     //     cb2(null, null)
    //                                     // }
    //                                     })
    //                                 }
    //                         },
    //                         function step3(cb3) {
    //                             if (!executeresults || 
    //                                 !executeobject || 
    //                                 (executeobject && !executeobject.executeflag) ||
    //                                 errorobject) { 
    //                                 cb3(null, executeresults)
    //                             } else { // if executeflag
    //                                 var parmexecute = {}
    //                                     parmexecute.command={}
    //                                     parmexecute.command.xrun=executeresults
    //                                 extend(true, parmexecute, executionpreferences) 
    //                                 proxyprinttodiv("executelist parmexecute III ", parmexecute, 11);   
    //                                 execute(parmexecute, function (err, res) {
    //                                     executeresults=res
    //                                     errorobject=err
    //                                     if (err!==null) {proxyprinttodiv("executelist result from execution err **", err, 11);}
    //                                     proxyprinttodiv("executelist execut + params = res **", 
    //                                         JSON.stringify(executeresults) + ' = ' + JSON.stringify(res), 11);
    //                                     cb3(null, null)
    //                                     // if (err && Object.keys(err).length > 0) {
    //                                     //     if (err.errorname === "notfound") {
    //                                     //         cb3(null, executeobject)
    //                                     //     } else {
    //                                     //         cb3(null, executeobject);
    //                                     //     }
    //                                     // }
    //                                     // else {
    //                                     //     //excuteresults=res
    //                                     //     cb3(null, null)
    //                                     // }
    //                                     })        
    //                             }
    //                         }], 
    //                         function (err, res) {
    //                             if (executeresults || (errorobject && errorobject.errorname==="notfound")) {
    //                                 whatallowexecute = false;
    //                                 howallowexecute = false;
    //                                 if (isObject(executeresults)) {
    //                                     if ((executeresults['metadata']) && 
    //                                         (executeresults['metadata']['expirationdate'])) {
    //                                             delete executeresults['metadata']['expirationdate'];
    //                                         }
    //                                     }
    //                                 extend(true, executeresults, executionpreferences) 
    //                                 proxyprinttodiv("executelist executeresults to store", executeresults, 11);
    //                                 proxyprinttodiv("executelist executeresults to errorarray", errorarray, 11);
    //                                 outputResultsArr.push(executeresults);
    //                                 errorarray.push(errorobject)
    //                                 cbMapW(null, "What Iteration");
    //                             } else { // if executeresults
    //                                 proxyprinttodiv("executelist executeresults to repeat", executeresults, 11);
    //                                 cbMapW(null, "What Iteration");
    //                                 }
    //                             })
    //                     } // how/what allowed
    //                 }) // nexttick
    //             },
    //             function (err, res) {
    //                 proxyprinttodiv("executelist iteration *****", howToDo+' '+howallowexecute+' '+
    //                                                                 whatToDo+' '+whatallowexecute, 11);
    //                 proxyprinttodiv("executelist end iteration outputResultsArr ***** ", outputResultsArr, 11);
    //                 cbMapH(null, "How Iteration");

    //             }); // asych what

    //         }); // async nexttick
    //     }, // mapseries function

    //     function (err, res) {
    //         // we need to append error each time
    //         // we need to calculate overall error
    //         // but not found is most impt
    //     var resultparameters = {}
    //     proxyprinttodiv("execute - resultsArr----", outputResultsArr, 11);
    //     proxyprinttodiv("executelist executeresults to errorarray II", errorarray, 11);
    //     if (outputResultsArr.length === 0) {
    //         proxyprinttodiv("execute - resultsArr ****--", outputResultsArr, 11);
    //         err=createerror({"errorname": "notfound", "errordescription":"nodata"}) 
    //     } 
    //     if (outputResultsArr.length === 1 && // if only one result in array then extract it
    //         isObject(outputResultsArr[0]) && 
    //         Object.keys(outputResultsArr[0]).length > 0) {
    //         resultparameters=outputResultsArr[0]
    //     } else {
    //         if (outputResultsArr.length>1) {
    //             resultparameters={"command":{"xrun":outputResultsArr}}
    //             }
    //         }
    //     if (!resultparameters.command) {resultparameters.command={}}
    //     if (!err && errorarray && 
    //         errorarray.length>0 && 
    //         errorarray[0] &&
    //         Object.keys(errorarray[0]).length > 0) { // changed to error object
    //         err=errorarray[0]
    //         }
    //     if (err && !resultparameters.command.error) {resultparameters.command.error = err};
    //     proxyprinttodiv("execute - resultsArr err *******", err, 11);
    //     proxyprinttodiv("execute - resultsArr *******", outputResultsArr, 11);

    //     callback(err, resultparameters);
    //     }); // async nextseries end
    // } // end executelist


    // function getexecuteobject(params, howToDo, whatToDo, whatToDoFn, callback) {
    //     var targetfn = undefined;
    //     var executeflag = false;
    //     var err=null;
    //     //proxyprinttodiv("getexecuteobject howToDo", howToDo, 11);
    //     //proxyprinttodiv("getexecuteobject whatToDo", whatToDo, 11);

    //     switch (howToDo) {

    //         case "dothis": // previously processfn ... go look for fn to execute
    //             if (whatToDoFn !== window[whatToDo]) {
    //                 targetfn = window[whatToDo];
    //             } else {
    //                 targetfn = whatToDoFn;
    //             }
    //             break;

    //         case "executeparam":
    //             if (!params[whatToDo]) {
    //                 targetfn = undefined;
    //             } else {
    //                 if (whatToDoFn !== window[params[whatToDo]]) {
    //                     targetfn = window[params[whatToDo]];
    //                 } else {
    //                     targetfn = params[whatToDoFn];
    //                 }
    //                 //targetfn = 'execute';
    //                 //params['executethis'] = params[whatToDo]; 
    //             }

    //             break;

    //         case "execute_get_wid":
    //             if (typeof whatToDoFn === 'function') {
    //                 targetfn = undefined;
    //             } else {
    //                 executeflag = true; // so caller gets wid and then executes with the results
    //                 targetfn = getwid;
    //                 params.wid = whatToDo
    //                 if (!params.command) {
    //                     params.command = {}
    //                 }
    //                 if (!params.command.keepaddthis) {
    //                     params.command.keepaddthis = false
    //                 }
    //             }

    //             break;

    //         case "server":
    //             proxyprinttodiv("execute server hit!", params, 11);
    //             targetfn = window["server"];
    //             params['executethis'] = whatToDo;
                
    //             break;
    //     }

    //     if (typeof targetfn !== 'function') {
    //         err=createerror({"errorname": "executenotfound", "errordescription":"fn not found"}, params.command.environment.run.executelevel)
    //         targetfn=skipfn;
    //         params={};
    //         executeflag=false;
    //         if ((!howToDo) || (!whatToDo)) {err.errordescription="invalidconfig"}
    //     }

    //     //proxyprinttodiv("getexecuteobject err", err, 11);
    //     //proxyprinttodiv("getexecuteobject params", params, 11);
    //     //proxyprinttodiv("getexecuteobject targetfn.name", String(targetfn.name), 11);
    //     callback(err, {
    //         targetfn: targetfn,
    //         params: params,
    //         executeflag: executeflag
    //     });

    // } // fn

    // exports.createerror = window.createerror = createerror = function createerror(params, level) {
    //     if (level===1) {params.errorname="failnotfound"}
    //     return params;
    // };

    // exports.skipfn = window.skipfn = skipfn = function skipfn(params, callback) {
    //     callback(params, params);
    // };

    // function nonCircularStringify(obj) {
    //     var cache = [];
    //     return JSON.stringify(obj, function (key, value) {
    //         if (typeof value === 'object' && value !== null) {
    //             if (cache.indexOf(value) !== -1) {
    //                 //found circular reference, discard key
    //                 return;
    //             }
    //             cache.push(value);
    //         }
    //         return value;
    //     });
    // }


                // proxyprinttodiv('command.resulttable before sort command ', command, 11);
                // var combinedresult = distillresults(command.resulttable, 
                //                             type, 
                //                             currentexecuteid,
                //                             executionpreferences.command.environment.run.executelevel )
                // proxyprinttodiv('combinedresult ', combinedresult, 11);

                // proxyprinttodiv("converttocommand end incomingparams", incomingparams, 11);
                // proxyprinttodiv('converttocommand end outbounderror ', combinedresult.outbounderror, 11);
                // proxyprinttodiv('converttocommand end outboundresult ', combinedresult.outboundresult, 11);

                // callback(combinedresult.outbounderror, combinedresult.outboundresult);

    //     function resulttableprocessor(resulttable, type, currentexecuteid, level)
    //     {
    //         proxyprinttodiv('resulttableprocessor  ', resulttable, 11);

    //         var errorsummary=resulttable.overallerror
    //         var resultsummary=resulttable.overallresult

    //         if (errorsummary) 
    //         {
    //             resultsummary={};
    //             resultsummary.command=command;
    //             if (level===0 && errorsummary.errorname==="notfound"
    //             {
    //                 errorsummary.errorname="failnotfound"
    //             }

    //         }

    //         var executedetail={}
    //         if (resulttable[currentexecuteid].detail && 
    //             resulttable[currentexecuteid].detail.length>0) 
    //             {executedetail=resulttable[currentexecuteid].detail}
    //         if (resulttable[currentexecuteid].tryrecords &&
    //             resulttable[currentexecuteid].tryrecords.length>0) 
    //             {executedetail=resulttable[currentexecuteid].tryrecords}
    //         var finalresults = distillresults(executedetail, type, currentexecuteid, level)

    //         proxyprinttodiv('resulttableprocessor finalresults ', finalresults, 11);

    //         return finalresults;
    //     }



    // function distillresults(resulttable, type, currentexecuteid, level) {
    //     var errorsummary={};
    //     var resultsummary=[];
    //     var outboundresult = {};
    //     var outbounderror = {};
    //     proxyprinttodiv('resulttableprocessor  ', resulttable, 11);
    //     if (!(resulttable 
    //         //&& resulttable.hasOwnProperty(currentexecuteid) 
    //         //&& (resulttable[currentexecuteid].hasOwnProperty('detail') 
    //         //    || resulttable[currentexecuteid].hasOwnProperty('tryrecords'))
    //         ))
    //     {
    //         // required parameters are not defined
    //         return {
    //             errorsummary: null,
    //             resultsummary: null
    //         }
    //     }

    //     var executedetail={}
    //     if (resulttable[currentexecuteid].detail && 
    //         resulttable[currentexecuteid].detail.length>0) 
    //         {executedetail=resulttable[currentexecuteid].detail}
    //     if (resulttable[currentexecuteid].tryrecords &&
    //         resulttable[currentexecuteid].tryrecords.length>0) 
    //         {executedetail=resulttable[currentexecuteid].tryrecords}

    //     proxyprinttodiv('resulttableprocessor detail ', executedetail, 11);
    //     for (var eachresult in executedetail) 
    //     {
    //         // This can't happen right now, but could happen in the future
    //         if (executedetail[eachresult].executeid===currentexecuteid) 
    //         {
    //             proxyprinttodiv('resulttableprocessor currentexecuteid ', currentexecuteid, 11);
    //             // save the current result

    //             if (executedetail[eachresult].err && Object.keys(executedetail[eachresult].err).length >0) 
    //             {
    //                 proxyprinttodiv('resulttableprocessor detail[eachresult].err', executedetail[eachresult].err, 11);
    //                 // If an error was returned with this result
    //                 // if an error happened that is something OTHER THAN "not found", then add it to error summary

    //                 if (!errorsummary || 
    //                     executedetail[eachresult].err.errorname || 
    //                     executedetail[eachresult].err.errorname!=="notfound") 
    //                 {
    //                     errorsummary=executedetail[eachresult].err;
    //                 }
    //             } 
    //             if (executedetail[eachresult].res && Object.keys(executedetail[eachresult].res).length >0) 
    //             {
    //                 proxyprinttodiv('resulttableprocessor detail[eachresult].res', executedetail[eachresult].res, 11);
    //                 resultsummary.push(executedetail[eachresult].res)
    //             } 
    //         }
    //     }
    //     proxyprinttodiv('resulttableprocessor errorsummary', errorsummary, 11);
    //     proxyprinttodiv('resulttableprocessor resultsummary ', resultsummary, 11);
    //     if (Object.keys(errorsummary).length===0) // if there was no error then we return classical results
    //     { // if only one result then only return an object
    //         if (resultsummary.length === 1 && 
    //             isObject(resultsummary[0]) && 
    //             Object.keys(resultsummary[0]).length > 0) 
    //         {
    //             outboundresult=resultsummary[0]
    //         } // else return whatever the resultsummary was i.e. an array
    //         else
    //         {
    //             outboundresult=resultsummary;
    //         }
    //     } 
    //     else
    //     { // otheriwse, if error return a resulttable object
    //         resulttable.executelevel=level
    //         resulttable.type=type;
    //         resulttable.executeid=currentexecuteid;
    //         outboundresult={"command":{"resulttable":resulttable}}
    //     }

    //     // this is the only special case where we change the error object
    //     outbounderror=errorsummary
    //     if (type !== "group" && 
    //         errorsummary.errorname==="notfound" &&
    //         level===0 ) 
    //     {
    //         outboundresult.errorname="failnotfound"
    //     }
    //     proxyprinttodiv('resulttableprocessor outbounderror', outbounderror, 11);
    //     proxyprinttodiv('resulttableprocessor outboundresult ', outboundresult, 11);

    //     // if the outbound errorboject was empty then make it null
    //     if (Object.keys(outbounderror).length === 0){outbounderror = null}
    //     return {
    //         outbounderror: outbounderror,
    //         outboundresult: outboundresult
    //     }
    // }

// logic for waterfall above missing
        // this section will step through try or detail records
        // go through results, create record of all results, if error keep the one that is not "not found"
            // This function is called to summarize the errors after everything finishes

            // THREE OPTIONS
            // -- 1. No Errors
            // -- 2. Some Errors
            // -- 3. Not Found + type == Group
            
            // command is a global object that is assumed to exist here.  
            // command.resulttable[...].detail is again assumed to have all the results
            // of whatever happened previously
        // sort detail by seq
        // resulttable[currentexecuteid].detail.sort(executionpreferences.command.environment.run.executelevel!==0 &&
        //     function (a, b) 
        //     {
        //         return a.executeseq - b.executeseq
        //     }
        // );



           //,
            // function step2(c2b) {
            //     var color  = Number(getglobal('debugcolor')); color++; saveglobal('debugcolor', color);

            //     executionpreferences.command.environment.run.executelevel--; // decrease level after execution
            //     proxyprinttodiv('step2 ', command.resulttable, 11);
            //     proxyprinttodiv('step2 - executionpreferences.command.run.executelevel ', executionpreferences.command.environment.run.executelevel, 11);
            //     proxyprinttodiv('step2 - executionpreferences.command.run.type ', type, 11);
            //     proxyprinttodiv('step2 - command.resulttable[currentexecuteid].tryrecords ', command.resulttable[currentexecuteid].tryrecords, 11);

            //     // we should probably inlcude executionpreferences to go to server
            //     // if level 0 and group then try to go to server (or next thing) which should be ref in executionpreferences.command.postactionprocessor


            //     if (
            //         executionpreferences.command.environment.run.executelevel===0 &&
            //         executionpreferences.command.postactionprocessor!==false &&
            //         command.resulttable.overallerror!==null
            //         ) 
            //     {
            //         processserver
            //         (command, function (err, res) 
            //             {
            //                 proxyprinttodiv('command.resulttable AFTER postactionprocessor ', command, 11);
            //                 // check for error
            //                 saveglobal('debugcolor', color--);
            //                 command=res.command;
            //                 c2b(null, null)
            //             }
            //         )
            //     } else {
            //         saveglobal('debugcolor', color--);
            //         c2b(null, null)
            //     }
            // }


    // function serverpass (inparams) {
    //     inparams.executethis = test_return_noerror_result
    //     return inparams
    // }

    // function servernotfound (inparams) {
    //     inparams.executethis = test_return_notfound_result
    //     return inparams
    // }

    // function serverfailnotfound (inparams) {
    //     inparams.executethis = test_return_failnotfound_result
    //     return inparams
    // }
    
    // function setup_server(inparams, cb) { 
    //     var out = create_what_to_do_list(inparams)
    // }

                // // create step3 of inside--processparameterfn=execute_get_wid, waterfall
            // var thirdcopy={}
            // extend(true, thirdcopy, inparams)
            // delete thirdcopy.command.processparameterfn
            // thirdcopy.command.processfn = "execute_function";
            // thirdcopy.command.environment.run.type="waterfall"
            // thirdcopy.command.xrun = [];

            //     // create step1 of inside--copy all minus processparameterfn, set execute_function
            //     var thirdcopy1={}
            //     extend(true, thirdcopy1, inparams)
            //     thirdcopy1.command.processparameterfn = "execute_get_wid"
            //     thirdcopy1.command.processfn = "execute_function";
            //     // thirdcopy1.command.environment.run.type="series"    // keep whatever was sent in
            //     thirdcopy.command.xrun.push(thirdcopy1);

        
})(typeof window == "undefined" ? global : window);
