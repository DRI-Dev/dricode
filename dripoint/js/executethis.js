// copyright (c) 2014 DRI
//
//
// command.processparameterfn
// command.processfn
// sync_local, sync_server, sync_local_server, sync_local_cache
//
// command.skipcache controls if we should not use cached results
// if command.skipcache = false and no cache then fail
// most queries should be command.skipcache = false
//
// execute_queue
//
// search for configuration.environment 
// future we may need to support multiple executeids
// split command.xrun early for split local server
// when to delete global
// eval
// do some getwid calls directly
// getclean step2 do not call if "string"

(function (window) {
    // 'use strict';

    var execute;

    // get other parameters that might be for this function
    function enhanceparameters(inboundparams) {
        //proxyprinttodiv("enhanceparameters before checkenvironment", inboundparams, 11, true);
        // note this could probably be moved to drienvrionment in utils
        if (!inboundparams.command) {inboundparams.command={};}
        if (!inboundparams.command.environment) {inboundparams.command.environment={};}

        // first save and get from environment
        inboundparams.command.environment = checkenvironment(inboundparams.command.environment);
        // then bring items deeply nested in environment to "this" level
        //proxyprinttodiv("enhanceparameters after checkenvironment", inboundparams, 11, true);

        if (inboundparams.command.environment.global && Object.keys(inboundparams.command.environment.global).length > 0
            || (inboundparams.command.environment.var 
                && inboundparams.command.environment.var[inboundparams.executethis] 
                && Object.keys(inboundparams.command.var[inboundparams.executethis]).length > 0))
        {
            extend(true, inboundparams,
                        inboundparams.command.environment.global || {},
                        inboundparams.command.environment.var ? inboundparams.command.environment.var[inboundparams.executethis] || {} : {});

            if (inboundparams.command.environment.var[inboundparams.executethis]) 
            {
                delete inboundparams.command.environment.var[inboundparams.executethis];
            }
        } 
        // extend config defaults into inboundparams.command to default anything missing
        //inboundparams.command = extend(true, config.configuration.default, inboundparams.command);
        inboundparams.command = extend(true, {}, inboundparams.command.environment.default, inboundparams.command);
        //proxyprinttodiv("enhanceparameters end enhanceparameters", inboundparams, 11, true);
        return inboundparams;
    }

    // function reads & updates wid environment when running locally
    function checkenvironment(environment) {
        // merge incoming environment with default config environment with incomming winning
        environment = extend(true, {}, config.configuration.d, environment);
        //if (config.configuration.environment === "local") 
        //{
        // read environment wid
        var environmentwid = {};
            environmentwid = getfromlocal(config.configuration.e);
        // if (!environmentwid) 
        // { // if none then begin creating one
        //     environmentwid = {"wid":config.configuration.e};
        // }
        if (!environmentwid) {environmentwid={}}

        // get the data for environment from right section of wid (i.e. command.db)
        var environmentdata = {};
        if (environmentwid[config.configuration.db])
        {
            environmentdata = environmentwid[config.configuration.db];
        }

        // merge current environment data with sent in environment data
        environment = extend(true, {}, environmentdata, environment);
        if (!environment.accesstoken) {environment.accesstoken = createNewGuid();}
        if (!environment.run.executeid) {environment.run.executeid=createNewGuid();}

        // store it back to wid
        environmentwid[config.configuration.db] = environment;
        addtolocal(config.configuration.e, environmentwid);
        //}

        // return value of environment
        return environment;
    }

    function resetenvironment() {
        //addtolocal(config.configuration.e, config.configuration.default);
        addtolocal(config.configuration.e, configuration.defaultenvironment);
    }

    // create blank command.result or if one was existing then 
    // go through an exisiting result table to see if there are things to be done (i.e. create tryset)
    // for every type if overallerror then every items in detail get copied to tryset 
    // if type = group then only copy the exact records that had failed
    function processresulttable(command) {
        //--proxyprinttodiv("processresulttable command-", command, 11, true);
        if (command.resulttable)
        {
            // //--proxyprinttodiv("processresulttable command begin", command, 11, true);
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
                    var type = command.resulttable.executionpreferences.command.executetype;
                    //**
                    //var type = command.resulttable.executionpreferences.command.environment.run.type;
                    // //--proxyprinttodiv("processresulttable command after clearing tryset", command, 11, true);
                    // fish out from commmand.result table only the ones with errors in case of group, all of them otherwise
                    for (var eachitem in command.resulttable[eachexecuteid].detail)
                    {
                        ////--proxyprinttodiv("processresulttable command.resulttable[eachexecuteid].detail[eachitem]", command.resulttable[eachexecuteid].detail[eachitem], 11);
                        if ((type==="group" && command.resulttable[eachexecuteid].detail[eachitem].err) ||
                            (type!=="group" && command.resulttable[eachexecuteid].overallerror))
                        {
                            ////--proxyprinttodiv("processresulttable eachitem", eachitem, 11);
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
            //--proxyprinttodiv("processresulttable command end", command, 11, true);
        }
    }

    // add each item in executionparameters to tryset in resulttable
    function addexecutionparameters(command, executionparameters, currentexecuteid) {
        //--proxyprinttodiv("inparams executionparameters", executionparameters,11);

        //if (command.resulttable[currentexecuteid].tryset) 
        //{
            var currentexecutecount = command.resulttable[currentexecuteid].tryset.length; // seq based on how many are existing
            for (var eachitem in executionparameters) 
            {
                // if no type then make default type series
                // I think this code can be taken out since executeion preferences wil have this default
                ////--proxyprinttodiv("inparams executionparameters[eachitem]", executionparameters[eachitem],11);
                // if (!executionparameters[eachitem].command) {executionparameters[eachitem].command={};}
                // if (!executionparameters[eachitem].command.environment) {executionparameters[eachitem].command.environment={};}
                // if (!executionparameters[eachitem].command.environment.run) {executionparameters[eachitem].command.environment.run={};}
                // if (!executionparameters[eachitem].command.executetype) {executionparameters[eachitem].command.executetype="series";}

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
        //}
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

    // function fishoutexecutionpreferences(inparams, executionpreferences) {
    //     // copy environment& processfn, executethis from in params into executionpreferences
    //     // executionpreferences are merged at execution time and do not win
    //     // common parameters are merged at setup time and DO win

    //     executionpreferences.command={};
    //     executionpreferences.command.environment={};

    //     //--proxyprinttodiv("fishoutexecutionpreferences inparams before", inparams, 11, true);

    //     ////--proxyprinttodiv("fishoutexecutionpreferences inparams after", inparams, 11, true);

    //     extend(true, executionpreferences.command.environment, inparams.command.environment);
    //     delete inparams.command.environment;

    //     // should executelevel be increased here?
    //     // if (!executionpreferences.command.environment.run.executelevel) {executionpreferences.command.environment.run.executelevel=0;}
    //     // if (!executionpreferences.command.environment.run.executeid) {executionpreferences.command.environment.run.executeid=createNewGuid();}
    //     // if (!executionpreferences.command.environment.run.type) {executionpreferences.command.environment.run.type="series";}
    //     // //if (!executionpreferences.command.environment.syncrule) {executionpreferences.command.environment.syncrule=config.environment.syncrule}

    //     if (inparams.executethis)
    //     {
    //         executionpreferences.executethis=inparams.executethis;
    //         delete inparams.executethis;
    //     }

    //     ////--proxyprinttodiv("converttocommand - outside iteration - executionpreferences II", executionpreferences, 11);
    // }

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
        //--proxyprinttodiv("executefishout inparams", inparams, 11);

        // if string them move it to command.xrun..not it is an object again
        if (isString(inparams)) 
        {
            var strtemp = {};
                strtemp.command={};
                strtemp.command.xrun = inparams;
            inparams = strtemp;
        }
        ////--proxyprinttodiv("converttocommand after string inparams", inparams, 11);

        // if array then load array into parameter command.xrun...not it is an object again
        if (isArray(inparams)) 
        { // if array, then create commands, and executionpreferences (global to all execute list)
            var arrtemp = {};
                arrtemp.command = {};
                arrtemp.command.xrun = inparams.slice(0);
            inparams = arrtemp;
            //--proxyprinttodiv("inparams after array to object conversion ", inparams, 11);
        } 
        ////--proxyprinttodiv("converttocommand - inparams I", inparams, 11);
        // *** now it is converted to an object ***

        ////--proxyprinttodiv("converttocommand - inparams II", inparams, 11);
                // make parameters better by dealing with command.environment
        inparams = enhanceparameters(inparams);

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

        if (inparams.command.environment.run.executelevel===0 && !inparams.command.processfn)
        {
            inparams = window[inparams.command.environment.syncrule](inparams);
        }
        //proxyprinttodiv("converttocommand after syncrule inparams", inparams, 11);
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
            ////--proxyprinttodiv("converttocommand - command--", command, 11);
        }
        else // command.resulttable overrides all else
        {        
            executionpreferences.command={};
            executionpreferences.command.environment={};
            extend(true, executionpreferences.command.environment, inparams.command.environment);
            delete inparams.command.environment;

            if (inparams.executethis)
            {
                executionpreferences.executethis=inparams.executethis;
                delete inparams.executethis;
            }
            // split out executionpreferences that should be common
            //fishoutexecutionpreferences(inparams, executionpreferences);
            ////--proxyprinttodiv("converttocommand - executionpreferences", executionpreferences, 11);
            ////--proxyprinttodiv("converttocommand - inparams III", inparams, 11);

            // create right array of executionparameters
            if (inparams && inparams.command && inparams.command.xrun) 
            {   
                if (isString(inparams.command.xrun))
                {   // if string > convert it to object...let next case take care of next process
                    var temp = inparams.command.xrun;
                    inparams.command.xrun={};
                    inparams.command.xrun.executethis=temp;
                }
                if (isArray(inparams.command.xrun))
                {   // create executionparameters and executionpreferences from what we have
                    ////--proxyprinttodiv("converttocommand - outside iteration - inparams", inparams, 11, true);
                    executionparameters=inparams.command.xrun.slice(0); // make a copy of array
                    ////--proxyprinttodiv("converttocommand - outside iteration - executionparameters I", executionparameters, 11, true);
                    delete inparams.command.xrun;
                    extend(true, executionpreferences, inparams); // extra stuff in inparams goes to extraparams
                    //delete inparams; -- does not matter since not needed any more
                }
                else // is object
                //if (isObject(inparams.command.xrun)) 
                {   // if object > convert to array...let next case take care of next process
                    // maybe combine at this level
                    ////--proxyprinttodiv("converttocommand - inparams", inparams, 11);
                    executionparameters={};
                    extend(true, executionparameters, inparams.command.xrun);
                    delete inparams.command.xrun;
                    extend(true, executionparameters, inparams);
                    ////--proxyprinttodiv("converttocommand - executionparameters", executionparameters, 11);

                    var tempArray=[];
                    tempArray.push(executionparameters);
                    executionparameters=tempArray;
                }
            } 
            else // if not xrun
            {   
                // if object all along then those are the execution parameters
                // put them in array so we can create table
                executionparameters=inparams;
                var tempArray=[];
                tempArray.push(executionparameters);
                executionparameters=tempArray;
            }

            ////--proxyprinttodiv("converttocommand - outside iteration - executionparameters II", executionparameters, 11, true);
            currentexecuteid = executionpreferences.command.environment.run.executeid;
            if (!command.resulttable) {createresulttable(command, currentexecuteid);}
            // add executionpreferences & executionparameters to resulttable             
            addexecutionparameters(command, executionparameters, currentexecuteid);
            // executionpreferences & command should now be object, executionparameters should be array
            ////--proxyprinttodiv("converttocommand - outside iteration - executionparameters III", executionparameters, 11, true);
        } // if not resulttable

        extend(true, command.resulttable.executionpreferences, executionpreferences);  

        //--proxyprinttodiv("converttocommand - outside iteration - command III", command,11,true );
        ////--proxyprinttodiv("converttocommand - outside iteration - executionpreferences III ", executionpreferences, 11, true);

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
        var color  = Number(getglobal('debugcolor')); color++; if (color >= 15) { color = 0;} saveglobal('debugcolor', color);
        var indent  = Number(getglobal('debugindent')); indent++; saveglobal('debugindent', indent);
        var previousresults=null;
        var skipexecute = false;
        var overallerror=null;
        var arrayresult=[];
        var trycount = 0;
        var incomingparams = {};

        //extend(true, incomingparams, input);              // make copy of input 
        ////--proxyprinttodiv('before -- remove -- incomingparams', incomingparams, 11, true, true);
        //incomingparams=ConvertFromDOTdri(incomingparams); // convert from dot notation -- not necessary if dot notation not sent in
        incomingparams=converttojson(input); // converts to object and makes copy
        proxyprinttodiv('>>>>>>>>>>>>>>>>>>>>>>>>execute begin', incomingparams, 11, true);

        var command = converttocommand(incomingparams);    // call main conversion

        //proxyprinttodiv('execute right after converttocommand ',command, 11, true);
        // fish out from converted results
        var executionpreferences = command.resulttable.executionpreferences;
        var currentexecuteid = executionpreferences.command.environment.run.executeid;
        var level =  executionpreferences.command.environment.run.executelevel;
        var type = executionpreferences.command.executetype;
        // **
        //var type = executionpreferences.command.environment.run.type;
        var tryset=command.resulttable[currentexecuteid].tryset;
        var trylength = tryset.length;

        // read and save environment parameters
        //executionpreferences.command.environment = checkenvironment(executionpreferences.command.environment);

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

        ////--proxyprinttodiv('execute before try series incomingparams ',incomingparams, 11);
        ////--proxyprinttodiv('execute before try series command ',command, 11);
        ////--proxyprinttodiv('execute before try series executionpreferences', executionpreferences, 11, true);
        ////--proxyprinttodiv('execute before try series tryset', tryset, 11, true);
        saveglobal('debuglevel', executionpreferences.command.environment.run.executelevel);

        // increase executelevel...this way any nested executes will be at higher level
        executionpreferences.command.environment.run.executelevel++; 
        ////--proxyprinttodiv('execute executionpreferences.command.environment.run.executelevel', executionpreferences.command.environment.run.executelevel, 11);

        if (type==="waterfall" || type==="runfirstonewaterfall") // first time around create previous results
        {
            previousresults={};
            extend(true, previousresults, executionpreferences, tryset[0].outgoingparam); 
            //createoutgoingparam(previousresults, executionpreferences, tryset[0].outgoingparam);
        }

        ////--proxyprinttodiv('execute level type ', String(executionpreferences.command.environment.run.executelevel) + ' ' + type, 11);

        if (executionpreferences.command.environment.run.executelevel > 100 || color > 120) {
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
                        var color  = Number(getglobal('debugcolor')); color++; if (color >= 15) { color = 0; }; saveglobal('debugcolor', color);
                        //var indent  = Number(getglobal('debugindent')); indent++; saveglobal('debugindent', indent);
                        if (skipexecute) 
                        {
                            //--proxyprinttodiv('execute level type skip', String(executionpreferences.command.environment.run.executelevel) + ' ' + type, 11);
                            //--proxyprinttodiv("** skipping turn **", currenttry, 11);
                            cbMap(null);
                        } 
                        else 
                        {
                            var currentexecute=currenttry.outgoingparam;
                            var currentseq = currenttry.executeseq;
                            var outgoingparam = {};

                            ////--proxyprinttodiv("before execute - currenttry ", currenttry, 11);
                            ////--proxyprinttodiv("before execute currentexecute", currentexecute, 11);
                            ////--proxyprinttodiv("before execute currentseq", currentseq, 11);
                            ////--proxyprinttodiv("skipexecute is", skipexecute, 11);
                            //--proxyprinttodiv("before execute outgoingparam", outgoingparam, 11);

                            if (isArray(currentexecute)) 
                            {
                                var temp = {};
                                temp.command={};
                                temp.command.xrun=[];
                                temp.command.xrun=currentexecute.slice(0);
                                currentexecute=temp;
                            } 

                            ////--proxyprinttodiv('execute executionpreferences.command.environment.run.executelevel I', executionpreferences.command.environment.run.executelevel, 11);

                            extend(true, outgoingparam, previousresults, executionpreferences, currentexecute);

                            // use the new level in outgoing params
                            outgoingparam.command.environment.run.executelevel=executionpreferences.command.environment.run.executelevel;

                            ////--proxyprinttodiv('execute executionpreferences.command.environment.run.executelevel II', executionpreferences.command.environment.run.executelevel, 11);
                            ////--proxyprinttodiv("before execute outgoingparam", outgoingparam, 11);
                            ////--proxyprinttodiv("before execute executionpreferences", executionpreferences, 11);
                            //--proxyprinttodiv("execute step 00 outgoingparam", outgoingparam, 11, true);
                            //--proxyprinttodiv('execute step 00 type', type, 11);
                            // step1 massage parameters based on command.processparameterfn, send results via outgoingparam
                            // step2 execute based on command.processfn, send results and error in from stestep02res/err
                            // step3 log the results based on type
                            var fromstep02res={};
                            var fromstep02err=null;
                            var tempobj={};

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
                                        {   // if level 1 (really level 0 everywhere else) (and processparameterfn was not sent in) then get defaults
                                            // if (level === 0)
                                            // {   // level 0 look at syncrule (local-server)
                                            //     pp = window[outgoingparam.command.environment.syncrule];
                                            //     if (!pp) { pp = execute_nothing; }
                                            // }
                                            // else
                                            //{   // other levels do execute_function, execute_parameter, execute_get_wid
                                                pp = create_what_to_do_list;
                                            //}
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
                                    extend(true, tempobj, outgoingparam);
                                    if (fromstep02err)
                                    {
                                        cbstep2(null);
                                    }
                                    else
                                    {
                                        trycount++; // increase trycount
                                        ////--proxyprinttodiv('execute level type 02', String(executionpreferences.command.environment.run.executelevel) + ' ' + type, 11);
                                        //--proxyprinttodiv("execute step02 outgoingparam", outgoingparam, 11, true);
                                        var processfn;
                                        
                                        if (outgoingparam && outgoingparam.command && outgoingparam.command.processfn)
                                        {
                                            //--proxyprinttodiv("after processfn", outgoingparam.command.processfn, 11);
                                            processfn=window[outgoingparam.command.processfn];
                                            delete outgoingparam.command.processfn;
                                        }
                                        //if (processfn) proxyprinttodiv("after processfn II", processfn.name, 11);

                                        if (processfn) 
                                        {
                                            ////--proxyprinttodiv("execute calling processfn",processfn.name , 11);
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
                                            //proxyprinttodiv("execute calling execute execute_function outgoingparam",outgoingparam , 11);
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
                                    ////--proxyprinttodiv('execute level type 03', String(executionpreferences.command.environment.run.executelevel) + ' ' + type, 11);
                                    //proxyprinttodiv("execute step03 end outgoingparam", outgoingparam, 11, true);
                                    //proxyprinttodiv('execute step03 end results', fromstep02res, 11);
                                    //proxyprinttodiv('execute step03 end error', fromstep02err, 11);

                                    // if (outgoingparam
                                    //     && outgoingparam.command
                                    //     && outgoingparam.command.environment
                                    //     && outgoingparam.command.environment.executelevel)
                                    // {
                                    //     // do not log execute level for future use... not relevant
                                    //     delete outgoingparam.command.environment.executelevel;
                                    // }

                                    var executeresult={};
                                    executeresult.outgoingparam=outgoingparam;
                                    executeresult.err=fromstep02err;
                                    executeresult.res=fromstep02res;
                                    executeresult.executeseq = currentseq;
                                    proxyprinttodiv('execute executeresult', executeresult, 11);
                                    proxyprinttodiv('execute tempobj', tempobj, 11);
                                    
                                   
                                    // update results to the right detail record based on executeseq
                                    //if (!fromstep02err) 
                                    //{
                                    for (var eachdetail in command.resulttable[currentexecuteid].detail)
                                        {
                                            if (command.resulttable[currentexecuteid].detail[eachdetail].executeseq===currentseq)
                                            {
                                                command.resulttable[currentexecuteid].detail[eachdetail]=executeresult;
                                            }
                                        }
                                    //}

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
                                    //         //--proxyprinttodiv('execute step03 previousresults before change', previousresults, 11, true);
                                    //         //--proxyprinttodiv('execute step03 currentexecute', currentexecute, 11, true);
                                    //         previousresults = outgoingparam;
                                    //         //--proxyprinttodiv('execute step03 previousresults after change', previousresults, 11, true);
                                    //     }
                                    // }

                                    // if group, then do not care about not found, will be done later
                                    if (type === "group" &&  
                                        fromstep02err && 
                                        fromstep02err.errorname === "notfound") 
                                    {
                                        skipexecute=false;
                                    }  
                                    ////--proxyprinttodiv('execute level type II', String(executionpreferences.command.environment.run.executelevel) + ' ' + type, 11);

                                //proxyprinttodiv('execute step03 end command ', command, 11, true);
                                //proxyprinttodiv('execute step03 end overallerror ', overallerror, 11);
                                //proxyprinttodiv('execute steo03 end arrayresult ', arrayresult, 11);
                                //--proxyprinttodiv('execute level type --', String(executionpreferences.command.environment.run.executelevel) + ' ' + type, 11);
                                //--proxyprinttodiv('execute steo03 -------------------------------------------', 
                                //                '----------------------------------------------------------', 11);

                                    cbstep3(null);
                                } 
                            ], 
                     
                            function (err, res) 
                            {
                                ////--proxyprinttodiv('execute level type III ', String(executionpreferences.command.environment.run.executelevel) + ' ' + type, 11);
                                //proxyprinttodiv("execute step04 end outgoingparam", outgoingparam, 11, true);
                                //proxyprinttodiv('execute step04 end results', fromstep02res, 11);
                                //proxyprinttodiv('execute step04 end error', fromstep02err, 11);
                                //proxyprinttodiv('execute step04 end overallerror ', overallerror, 11);
                                //--proxyprinttodiv('execute steo04 end arrayresult ', arrayresult, 11);
                                //--proxyprinttodiv('execute level type --', String(executionpreferences.command.environment.run.executelevel) + ' ' + type, 11);
                                //--proxyprinttodiv('execute steo04 -------------------------------------------',                '----------------------------------------------------------', 11);
                                cbMap(null);
                            }); // finish asych 01,02,03
                        } // if skipexecute
                    }); // next tick
                },  // mapseries fn

                function (err, res) {
                    //proxyprinttodiv('execute before try series executionpreferences step06', executionpreferences, 11, true);
                    //proxyprinttodiv('execute before try series tryset step06', tryset, 11, true);
                    //--proxyprinttodiv('execute step05 END arrayresult step06', arrayresult, 11);
                    //--proxyprinttodiv('execute step6 level type --', String(executionpreferences.command.environment.run.executelevel) + ' ' + type, 11);

                    var errorsummary=null;
                    var resultsummary;    
         
                    //--proxyprinttodiv('execute step05 SUMMARY command ', command, 11, true);

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
                        //--proxyprinttodiv('execute type', type, 11);
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
                            //--proxyprinttodiv('execute resultsummary', resultsummary, 11);
                        }
                        else // if not group then the previous level can do nothing with this detail
                        {   
                            resultsummary=null;
                        }
                    }

                    proxyprinttodiv('execute END     command ', command, 11, true);
                    proxyprinttodiv('execute SUMMARY errorsummary ', errorsummary, 11);
                    proxyprinttodiv('execute SUMMARY resultsummary ', resultsummary, 11, true);
                    var color  = Number(getglobal('debugcolor')); color --; saveglobal('debugcolor', color);
                    var indent  = Number(getglobal('debugindent')); indent --; saveglobal('debugindent', indent);

                    if (executionpreferences.command.environment.run.executelevel === 0) {
                        // reset environment now as we are at the end of the overall execute process
                        resetenvironment();
                    }

                    callback(errorsummary, resultsummary)
                }); // mapseries
            } // parallel
        } // execute level
    }; // end


    // main execute function
    window.execute_function = function execute_function(incomingparams, callback) {
        //if (!incomingparams.command) { incomingparams.command = {}; }
        //--proxyprinttodiv('>>>> execute incomingparams ', incomingparams, 11, true);
        // see if we need to recurse ... i.e. xrun or resulttable
        if (incomingparams.command.xrun || 
                (
                    incomingparams.command.resulttable &&
                    //**
                    incomingparams.command.executetype==="runfirstonewaterfall"
                    //incomingparams.command.environment.run.type==="runfirstonewaterfall"
                )
            )
        {
            execute(incomingparams, function (err, res) {callback(err, res)});
        } 
        else // now check if targetfn exists
        {
            if (!incomingparams.executethis) { callback(null, incomingparams); }

            var targetfn = window[incomingparams.executethis];
            if (!targetfn)
            {   // if does not exist then error
                callback({"errorname":"fnnotfound"}, null);
            }
            else // continue with normal execution
            {
                incomingparams=converttojson(incomingparams); 
                //--proxyprinttodiv('>>>> execute incomingparams ', incomingparams, 11);
                var filter_data = getcommand(incomingparams, {
                        "command": {
                            "convertmethod": "toobject",
                            "adopt": null,
                            "resultparameters": null,
                            "result": "",
                            "skipcache": true,
                            "updatecache" : false,
                            "internalcall": true, // use action processor
                            "notfoundok": false // should return an error if not found
                        }
                    }, {
                        "command": {
                            "convertmethod": "x",
                            "adopt": "x",
                            "resultparameters": "x",
                            "result": "x",
                            "skipcache": "x",
                            "updatecache": "x",
                            "internalcall": "x",
                            "notfoundok" : "x"
                        }
                    },
                    true);

                // keep command.environment/command.run.executeid as part of parameter
                ////--proxyprinttodiv('>>>> execute filter_data', filter_data, 11, true);
                var command = filter_data.filteredobject.command;
                var inboundparams = filter_data.output;
                var objkey=null;
                //--proxyprinttodiv('>>>> execute command', command, 11, true);
                //--proxyprinttodiv('>>>> execute inboundparams', inboundparams, 14, true);

                if (!command.skipcache || command.updatecache) {objkey = hashobj(inboundparams, command)};
                //--proxyprinttodiv('execute returned objkey', objkey, 11, true);
                delete inboundparams.executethis; // delete parameter executethis...we know the targetfn

                checkcache(objkey, function (err, res) {
                    if (res) 
                    {
                        callback(err, res);
                    }
                    else 
                    {
                        targetfn(inboundparams, function (err, resultparameters) 
                        { 
                            //--proxyprinttodiv("execute after do this inboundparams", inboundparams, 11);
                            //--proxyprinttodiv("execute after do this resultparameters", resultparameters, 11);
                            //--proxyprinttodiv("execute after do this err", err, 11);
                            //--proxyprinttodiv('execute after do this command', command, 11, true);
                            if (!resultparameters) {resultparameters={};}
                            // should we remove the 3 statements below?
//                            if (!resultparameters.command) {resultparameters.command={};}
//                            if (!resultparameters.command.environment) {resultparameters.command.environment={};}
//                            if (!resultparameters.command.environment.run) {resultparameters.command.environment.run={};}
//                            resultparameters.command.environment.run.executeid = incomingparams.command.environment.run.executeid;
                            if (command.notfoundok && err && err.errorname==="notfound") {err=null; resultparameters={};}
                            //--proxyprinttodiv("execute after do this resultparameters after", resultparameters, 11);
                            if (err && Object.keys(err).length > 0) 
                            {
                                callback(err, resultparameters);
                            } 
                            else 
                            {
                                ////--proxyprinttodiv("end resultparameters II", resultparameters, 11);
                                ////--proxyprinttodiv("execute - command **** I", resultparameters, 11);
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

                                ////--proxyprinttodiv("execute - command.resultparameters ****", command.resultparameters, 11);
                                if (command.resultparameters) 
                                {
                                    if (!command.adopt) {command.adopt="default";}
                                    var copyOfInheritData = {};
                                    extend(true, copyOfInheritData, command.currentresult);

                                    //--proxyprinttodiv("execute - command ****", command, 11);
                                    //--proxyprinttodiv("execute - command ****", command.resultparameters, 11);
                                    //--proxyprinttodiv("execute - command.adopt ****", command.adopt, 11);
                                    //--proxyprinttodiv("execute - command.overallresult ****", resultparameters, 11);
                                    //--proxyprinttodiv("execute - inboundparams ****", inboundparams, 11);

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

                                //--proxyprinttodiv("execute - command **** II", resultparameters, 11);

                                if (!command.updatecache) 
                                {
                                    callback(null, resultparameters);
                                } 
                                else 
                                {
                                    var expirationdate = new Date();
                                    expirationdate = new Date(expirationdate.getTime() + .3 * 60000); // .3 of min
                                    resultparameters.metadata.cache = "true";

                                    var recorddef = {
                                        "container":resultparameters,
                                        "wid": objkey,
                                        "metadata": {
                                            "systemdto": {
                                                "expirationdate": expirationdate
                                            }
                                        },
                                        "command": {
                                            "skipcache": true,
                                            "datastore": config.configuration.datastore,
                                            "collection": "cache",
                                            "keycollection": "cachekey",
                                            "db": config.configuration.db,
                                            "databasetable": config.configuration.databasetable
                                        }
                                    };
                                    //--proxyprinttodiv("update cache **************", recorddef, 11);
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

    exports.hashobj = hashobj = function hashobj(inobj, command) {
        if (command && command.skipcache) {
            return null;
        } else {
            var obj = {};
            extend(true, obj, inobj);
            //delete obj.executethis;
            delete obj.command.environment; // 

            var result = sortObj(obj, function (a, b) {
                return a.key < b.key;
            });
            return JSON.stringify(result);
        }
    };


    // check directly....notfound ok false
    function checkcache(objkey, callback) {
        if (objkey) {
            //--proxyprinttodiv("checkcache objkey **************", objkey, 11);
            var executeobject = {
                "wid": objkey,
                "command": {
                    "notfoundok": true,
                    "skipcache": true,
                    "datastore": config.configuration.datastore,
                    "collection": "cache",
                    "keycollection": "cachekey",
                    "db": config.configuration.db,
                    "databasetable": config.configuration.databasetable
                }
            };
            executeobject.executethis = "getwid";
            //--proxyprinttodiv("checkcache executeobject  *********", executeobject, 11);

            execute(executeobject, function (err, res) {
                if (err) 
                {
                    callback(err,res)
                }
                else 
                {
                    if (!res || (res && Object.keys(res).length === 0)) {res=null;} //else {res = res[0];}
                    //--proxyprinttodiv("checkcache getwid res", res, 11);
                    //if (res) proxyprinttodiv("checkcache getwid expirationdate", res.metadata.systemdto.expirationdate, 11);
                    //if (res) proxyprinttodiv("checkcache check ", new Date(res.metadata.systemdto.expirationdate) > new Date(), 11)
                    if (res && res.metadata && res.metadata.systemdto && 
                        res.metadata.systemdto.expirationdate && new Date(res.metadata.systemdto.expirationdate) > new Date()) {
                        //proxyprinttodiv("checkcache return from cache", res, 11);
                        callback(null, res.container);
                    } else {
                        //proxyprinttodiv("checkcache date ", new Date(), 11);
                        //proxyprinttodiv("checkcache return from cache expired", null, 11);
                        callback(null, null);
                    }
                }
            })
        } else { // !objectkey (i.e. if command.cache==false)
            callback(null, null);
        }
    }


    // this function expands inparams to be two calls, usually one to local and one to server
    // they are set to "runfirstone", it will not go to server unless first call fails
    // within each call it sets up to first call process parameters "create_what_to_do_list"
    //
    window.sync_local_server = function sync_local_server(inparams) {
        //--proxyprinttodiv("sync_local_server inparams", inparams, 11);
        // create outside wrapper--copy command, set "runfirstone"
        var outparams={};
        outparams.command={};
        extend(true, outparams.command, inparams.command);
        //**
        outparams.command.executetype = "runfirstonewaterfall";
        //outparams.command.environment.run.type = "runfirstonewaterfall";
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
            
        //--proxyprinttodiv("sync_local_server outparams", outparams, 11, true);
        return outparams;
        //callback(null, outparams);
    };

    window.sync_local_cache = function sync_local_server(inparams) {
        //--proxyprinttodiv("sync_local_server inparams", inparams, 11);
        // create outside wrapper--copy command, set "runfirstone"
        var outparams={};
        outparams.command={};
        extend(true, outparams.command, inparams.command);
        //**
        outparams.command.executetype = "runfirstonewaterfall";
        //outparams.command.environment.run.type = "runfirstonewaterfall";
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
            
        //--proxyprinttodiv("sync_local_server outparams", outparams, 11, true);
        return outparams;
        //callback(null, outparams);
    };

    window.sync_server = function sync_server(inparams) {
        //--proxyprinttodiv("sync_local_server inparams", inparams, 11);
        var outparams = {};
        extend(true, outparams, inparams);
        outparams.command.processfn = "execute_server";
        //--proxyprinttodiv("sync_local_server outparams", outparams, 11, true);
        return outparams;
        //callback(null, outparams);
    };

    window.sync_local = function sync_local(inparams) {
        //--proxyprinttodiv("sync_local_server inparams", inparams, 11);
        var outparams = {};
        extend(true, outparams, inparams);
        outparams.command.processfn = "execute_function";
//        outparams.command.processparameterfn = "execute_nothing";
        //--proxyprinttodiv("sync_local_server outparams", outparams, 11, true);
        return outparams;
        //callback(null, outparams);
    };

    // this function expands inparams to be three calls, to execute_function, execute_parameter, execute_get_wid
    // it sets these to "runfirstone" 
    // it further splits executegetwid into getwic and execute_function, its set these to "waterfall"
    window.create_what_to_do_list =  function create_what_to_do_list(inparams, callback) {
        //--proxyprinttodiv("create_what_to_do_list inparams", inparams, 11);
        // create outside wrapper--copy command, set "runfirstone"

        if (window[inparams.executethis])
        {
            if (callback instanceof Function) { callback(null, inparams); }
            else { return inparams; }
        }
        else
        {
            var outparams={};
            outparams.command = {};
            extend(true, outparams.command, inparams.command);
            //**
            outparams.command.executetype = "runfirstone";
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

            //--proxyprinttodiv("create_what_to_do_list outparams", outparams, 11, true);
//            callback(null, outparams);
            if (callback instanceof Function) { callback(null, outparams); }
            else { return outparams; }
        }
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
        //--proxyprinttodiv('execute end of execute_parameter', params, 11);
        callback(null, params)
        }
    };

    // if parms are {et: x} then to a getwid to x ... then excucte the results of x
    // to this by doing the getwid in step01 (processparameterfn) and the execute of resutls in step02
    // need to add if "js" here execute eval
    window.execute_get_wid =  function execute_get_wid(inparams, cb) { 
        if (!inparams.executethis) 
        {
            //--proxyprinttodiv('execute end of execute_get_wid I', inparams, 11);
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
        //--proxyprinttodiv('execute end of execute_nothing', params, 11);
        callback(null, params);
    };
 
     // when whattodo fn, parm, executeget wid is unable to do something in that try
    window.execute_createerror =  function execute_createerror(params, callback) {
        //--proxyprinttodiv('execute end of execute_nothing', params, 11);
//        callback({"errorname":"fnnotfound"}, params);
        callback({"errorname":"fnnotfound"}, null);
    };

})(typeof window == "undefined" ? global : window);

