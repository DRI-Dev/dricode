// copyright (c) 2014 DRI


(function (window) {
    // *** GetWid ***
    // Purpose: Converts data to and from dri standards

    // exports.getwid = window.getwid = getwid = function getwid(inputWidgetObject, callback) {
    //     //try {
    //     var inbound_parameters = {};
    //     extend(true, inbound_parameters, inputWidgetObject);

    //     // get envrionment
    //     //
    //     var command = {};
    //     if (inputWidgetObject.command) { ///--- no !
    //         // if (!inputWidgetObject.command) {
    //         command = inputWidgetObject.command
    //         delete inputWidgetObject.command
    //     }

    //     var convertedobject = {};
    //     proxyprinttodiv('Function getwid in : inputWidgetObject', inputWidgetObject, 12);
    //     getfromdatastore(inputWidgetObject, command, function (err, resultobject) {
    //         proxyprinttodiv('Function getwid in : resultobject 1', resultobject, 12);
    //         var originalarguments = {};
    //         extend(true, originalarguments, inputWidgetObject);
    //         // If error, bounce out
    //         if (err && Object.keys(err).length > 0) {
    //             callback(err, resultobject);
    //         } else {
    //             try {




    //                 // if (resultobject === undefined) {
    //                 //    callback(null, {})
    //                 // } else {





    //                 // convert the object from dri standard before returnning it
    //                 proxyprinttodiv('Function getwid in : inputWidgetObject II', inputWidgetObject, 12);

    //                 var convertedobject = convertfromdriformat(resultobject, command)
    //                 proxyprinttodiv('Function getwid in : resultobject 2', convertedobject, 12);
    //                 proxyprinttodiv('Function getwid in : convertedobject', convertedobject, 12);
    //                 proxyprinttodiv('Function getwid in : resultobject', resultobject, 12);

    //                 if (inputWidgetObject['command.convertmethod'] === 'toobject') {
    //                     callback(null, ConvertFromDOTdri(convertedobject))
    //                 } else {
    //                     callback(null, convertedobject);
    //                 }
    //                 //} // else !===0
    //             } // end try
    //             catch (err) {
    //                 var finalobject =
    //                     createfinalobject({
    //                         "result": "getfromdatastore"
    //                     }, {}, "getfromdatastore", err, originalarguments);
    //                 callback(finalobject.err, finalobject.res);
    //             }
    //         }
    //     });
    //     // } // end try
    //     // catch (err) {
    //     //     var finalobject =
    //     //         createfinalobject({
    //     //             "result": "offlinegetwid"
    //     //         }, {}, "offlinegetwid", err, inbound_parameters);
    //     //     callback(finalobject.err, finalobject.res);
    //     // }
    // };

    // // exports.getwid = getwid = function getwid(inputWidgetObject, callback) {
    // //     try {
    // //         var inbound_parameters = JSON.parse(JSON.stringify(arguments));

    // //         authcall(inputWidgetObject, function (err, ret) {
    // //             if (err || !ret) {
    // //                 callback(err, {
    // //                     "etstatus": "unauthorized"
    // //                 });
    // //             } else  {
    // //                 try {
    // //                     delete inputWidgetObject['executethis']; // ** added by Saurabh 38/9

    // //                     proxyprinttodiv('Function getwid in : inputWidgetObject', inputWidgetObject, 1);

    // //                     getfrommongo(inputWidgetObject, function (err, resultobject) {
    // //                         if (!resultobject) {
    // //                             resultobject = {};
    // //                         }
    // //                         // convert the object from dri standard before returnning it
    // //                         callback(null, convertfromdriformat(resultobject));
    // //                     });
    // //                 } // end try
    // //                 catch (err) {
    // //                     var finalobject = createfinalobject({
    // //                         "result": "getwid_authcall"
    // //                     }, {}, "getwid_authcall", err, inbound_parameters);
    // //                     callback(finalobject.err, finalobject.res);
    // //                 }
    // //             }
    // //         });
    // //     } // end try
    // //     catch (err) {
    // //         var finalobject = createfinalobject({
    // //             "result": "getwid"
    // //         }, {}, "getwid", err, inbound_parameters);
    // //         callback(finalobject.err, finalobject.res);
    // //     }
    // // };

    // *** GetWidMaster ***
    // Purpose: splits wid and command parameters
    exports.getwidmaster = getwidmaster = function getwidmaster(parameters, callback) {
        var inbound_parameters = arguments;
        var command;
        proxyprinttodiv('getwidmaster start parameters', parameters, 38);
        parameters = ConvertFromDOTdri(parameters);

        // this sends in a default command object
        // var filter_data = tolowerparameters(parameters, {
        var filter_data = getcommand(parameters, {
                "command": {
                    "getwidmaster": {
                        "inheritflag": "true",
                        "dtotype": "",
                        "execute": "ConvertFromDOTdri",
                        "convertmethod": ""
                    }
                }
            },
            //"dtotype":"", "execute":"ConvertFromDOTdri"}}},
            {
                "command": {
                    "getwidmaster": {
                        "inheritflag": "",
                        "dtotype": "",
                        "execute": "",
                        "convertmethod": ""
                    }
                }
            }
            // {
            //     "command": ""
            // }
            , true);

        proxyprinttodiv('getwidmaster filter_data', filter_data, 38);

        parameters = filter_data.output;
        command = filter_data.filteredobject.command;

        proxyprinttodiv('getwidmaster command I', command, 38);

        proxyprinttodiv('GetWidMaster parameters.wid right before getwidmongo', parameters.wid, 38);
        proxyprinttodiv('GetWidMaster parameters right before getwidmongo', parameters, 38);
        proxyprinttodiv('getwidmaster command right before getwidmongo', command, 38);

        // if string then return null, {}
        if (!parameters.wid) {
            callback(null, {});
        } else {
            getWidMongo(parameters.wid, command, "", 20, {}, function (err, res) { // recurse up to 20 levels, excludeset empty
                // If error, bounce out
                if (err && Object.keys(err).length > 0) {
                    callback(err, res);
                } else {
                    proxyprinttodiv('getwidmaster command II', command, 38);
                    proxyprinttodiv('getwidmaster after get wid mongo command', command, 38);
                    proxyprinttodiv('getwidmaster res from getWidMongo', res, 38);
                    if ((res) && (Object.keys(res).length !== 0)) { //&& (res['metadata']) && (res['wid'] !== res['metadata']['method'])) {
                        if (((command) && (command.getwidmaster)) && ((command.getwidmaster.convertmethod !== "dto") || (command.getwidmaster.inheritflag === "true"))) {

                            proxyprinttodiv('getwidmaster command II-3', command, 38);
                            proxyprinttodiv('GetWidMaster res from getWidMongo right before getClean', res, 38);

                            getclean(res, command, function (err, res) {
                                // If error, bounce out
                                if (err && Object.keys(err).length > 0) {
                                    callback(err, res);
                                } else {
                                    proxyprinttodiv("GetWidMaster after getclean before packed", res, 38);
                                    res = pack_up_params(res, command, "getwidmaster");
                                    proxyprinttodiv("GetWidMaster after getclean after packed", res, 38);

                                    proxyprinttodiv('getwidmaster command II-4', command, 38);
                                    proxyprinttodiv('getwidmaster after getclean ', res, 38);
                                    if (command && command.getwidmaster && command.getwidmaster.execute === "ConvertFromDOTdri") {
                                        //res = ConvertFromDOTdri(res);
                                        proxyprinttodiv("??? getwidmaster command callback 1 ", command, 38);
                                        callback(null, res);
                                    } else { // the detault is to return dot notation...so old code does not break
                                        res = ConvertToDOTdri(res);
                                        proxyprinttodiv('getwidmaster packed parameters after convert', res, 38);
                                        callback(null, res);
                                    }
                                }
                            });
                        } else { //==dto
                            // if (command.getwidmaster.convertmethod === "dto" && parameters.wid!=="systemdto") {
                            // execute({
                            //     "executethis": "getwidmaster",
                            //     "wid": "systemdto",
                            //     "command.getwidmaster.convertmethod": "dto",
                            //     "command.getwidmaster.execute": "ConvertFromDOTdri"
                            // }, function (err, systemdto) {
                            //     if (err && Object.keys(err).length > 0) {
                            //         callback(err, res);
                            //         } else {
                            //             if (Object.keys(systemdto[0]).length > 0) {
                            //                     systemdto=systemdto[0]
                            //                     }
                            //                 else {
                            //                     systemdto={}
                            //                     }
                            //                 res=extend(true, res, systemdto);
                            //                 proxyprinttodiv('getwidmaster command III-5', command, 38);
                            //                 res = pack_up_params(res, command, "getwidmaster");
                            //                 proxyprinttodiv('getwidmaster packed parameters', res, 38);
                            //                 proxyprinttodiv('getwidmaster command III', command, 38);
                            //                 if (command && command.getwidmaster && command.getwidmaster.execute === "ConvertFromDOTdri") {
                            //                     proxyprinttodiv("??? getwidmaster command callback 33 ", command, 38);
                            //                     callback(null, res);
                            //                     }
                            //                 else { // the detault is to return dot notation...so old code does not break
                            //                     res = ConvertToDOTdri(res);
                            //                     proxyprinttodiv("??? getwidmaster command callback 4 ", command, 38);
                            //                     callback(null, res);
                            //                     }

                            //             }
                            //     })
                            //     } // ==dto
                            // else { //!==dto
                            proxyprinttodiv('getwidmaster command III-5', command, 38);
                            res = pack_up_params(res, command, "getwidmaster");
                            proxyprinttodiv('getwidmaster packed parameters', res, 38);
                            proxyprinttodiv('getwidmaster command III', command, 38);
                            if (command && command.getwidmaster && command.getwidmaster.execute === "ConvertFromDOTdri") {
                                proxyprinttodiv("??? getwidmaster command callback 34 ", command, 38);
                                callback(null, res);
                            } else { // the detault is to return dot notation...so old code does not break
                                res = ConvertToDOTdri(res);
                                proxyprinttodiv("??? getwidmaster command callback 4 ", command, 38);
                                callback(null, res);
                            }
                            //                                } // else !==dto
                        } // else == dto
                    } // length!==0
                    else { // length ==0
                        proxyprinttodiv('getwidmaster command III-5', command, 38);
                        res = pack_up_params(res, command, "getwidmaster");
                        proxyprinttodiv('getwidmaster packed parameters', res, 38);
                        proxyprinttodiv('getwidmaster command III', command, 38);
                        if (command && command.getwidmaster && command.getwidmaster.execute === "ConvertFromDOTdri") {
                            proxyprinttodiv("??? getwidmaster command callback 35 ", command, 38);
                            callback(null, res);
                        } else { // the detault is to return dot notation...so old code does not break
                            res = ConvertToDOTdri(res);
                            proxyprinttodiv("??? getwidmaster command callback 4 ", command, 38);
                            callback(null, res);
                        }
                    } // else lenght ==0
                }
            }); // end get wid mongo
        }
    };




    // *** GetDTOObject ***
    // Purpose: Pulls the schema for objects
    //
    //     if dto = wid (trying to enter or change an existing dto).  We need to be more liberal.  We do not care what getwidmaster says.
    //     use recurseobj code

    //     no dto specified or dto = defaultdto.  We do not care what getwidmaster says.
    //     use recurse string code 
    //
    //      We either get and try to used values returned by getwidmaster or not
    //      if not, then we take sent in object, for each level create table and command
    //
    //
    exports.getdtoobject = getdtoobject = function getdtoobject(obj, command, callback) {
        function recursestring(inobj) {
            var dtoobject = {};
            extend(true, dtoobject, inobj);
            for (var eachparam in dtoobject) {
                 if (dtoobject.hasOwnProperty(eachparam) && eachparam !== "command") {
                    if (isArray(dtoobject[eachparam])) {
                        var tempArray = [];
                        for (var eachitem in dtoobject[eachparam]) {
                            if (dtoobject[eachparam].hasOwnProperty(eachitem)) {
                                tempArray.push(recursestring(dtoobject[eachparam][eachitem]));
                            }
                        }
                        dtoobject[eachparam] = tempArray;
                    } else {
                        if (isObject(dtoobject[eachparam])) {
                            dtoobject[eachparam] = recursestring(dtoobject[eachparam]);
                        } else {
                            dtoobject[eachparam] = "string";
                        }
                    }
                }
            }
            return dtoobject;
        }
        function generatedtotablelist(objin, objlist, mm){ // generates a dtotable based on obj
          proxyprinttodiv("getdtoobject arguments", arguments, 93); 
          if (!((objin.command) && (objin.command.dtolist) && (Object.keys(objin.command.dtolist).length > 0))) {
            // nothing
          } else {
          for(var key in objin.command.dtolist){ // if value is not an object, just place the key else transform and find keys
            if (!objin[key]) {
              // do nothing 
            }else{
              objlist[key]=objin[key]; // needs key fetching from object which is inside 
              var objinplay =  objin[key];
               objlist[key]=objin[key];
              if(objinplay instanceof Array){ // handle arrays
                for(var idx in objinplay){
                  generatedtotablelist(objinplay[idx], objlist, key);
                }
              }else{
                generatedtotablelist(objinplay, objlist, key); // handle JSON objects
              }
            }
          }
        }
        if (!isObject(objlist[mm])) { 
            objlist[mm] = objin;
            }
            proxyprinttodiv("getdtoobject objlist", objlist, 93);
        }

        function createcommand_and_dtotable(inobj, dtotable) {  
            proxyprinttodiv("getdtoobject createcommand inobj in", inobj, 93);  
            // the section below tries to create a command object and dtotable based on items in metadata  
            if (inobj['metadata']) {
                inobj.metadata.systemdto={};
                inobj.metadata.systemdto.type="onetoone"
                var dtolist = {};
                var metadata = inobj['metadata'];
                proxyprinttodiv("In getdtoobject createdto metadata", metadata, 93);
                for (var eachitem in metadata) {
                    if (metadata[eachitem].type) {
                        proxyprinttodiv("In getdtoobject createcommand metadata[eachitem].type", metadata[eachitem].type, 93);
                        dtolist[eachitem] = metadata[eachitem]['type'];
                        if (inobj[eachitem]) {dtotable[eachitem]=inobj[eachitem]} // create dtotable entry based on inobj
                        } // inherit or type
                    } // for metadata

            if (!inobj.command) {inobj.command = {}}
            if (!inobj.command.dtolist) {inobj.command.dtolist = {}}
            if (!inobj.command.deepdtolist) {inobj.command.deepdtolist = {}}
            if (!inobj.command.inherit) {inobj.command.inherit = []}

            // for dtolist return this one, for deepdtolist, extend, for inherit push to what was there
            inobj.command.dtolist = dtolist;
            extend(true, inobj.command.deepdtolist, dtolist) 

            if (metadata.inherit) {
                for (var eachinherit in metadata.inherit) {
                    inobj.command.inherit.push(metadata.inherit[eachinherit])
                    }
                }

            //if (metadata.method) {dtotable[metadata.method]=inobj} //make dtotable entry for top level

            proxyprinttodiv("In getdtoobject createdto metadata", metadata.method, 93);
            proxyprinttodiv("In getdtoobject createdto inobj", inobj, 93);
            proxyprinttodiv("In getdtoobject createdto dtotable", dtotable, 93);
            }
            proxyprinttodiv("getdtoobject createcommand inobj out", inobj, 93);  
        } 


        function createdto(params, dtotable, createcommand_and_dtotable_flag) {
            proxyprinttodiv("getdtoobject createdto -- params", params, 93);
            proxyprinttodiv("getdtoobject createdto dtotable", dtotable, 93);
            proxyprinttodiv("getdtoobject createdto arguments", arguments, 93);
            var dtoobj = {};
            var tempobj = {};
            var inobj = JSON.parse(JSON.stringify(params));

            if (inobj instanceof Array) { //if we get an array in (usally happens on the recurse)
                proxyprinttodiv("inobj instanceof array", inobj, 93);
                var mergedObj = {};
                var tempArray = [];
                for (var i in inobj) {
                    if (inobj.hasOwnProperty(i)) {
                        // if our array is just a list of strings
                        if (typeof inobj[i] === 'string') {
                            tempArray.push("string");
                        } else {
                            extend(true, mergedObj, createdto(inobj[i]));
                        }
                    }
                }
                // there has to be something in the merge object to push it onto the return
                if (Object.keys(mergedObj).length > 0) {
                    tempArray.push(mergedObj);
                }
                proxyprinttodiv("tempArray", tempArray, 93);
                return tempArray;
            } else {

                if (createcommand_and_dtotable_flag) {createcommand_and_dtotable(inobj, dtotable)}; 

                // section below goes through each property and recurses as necessary
                proxyprinttodiv("getdtoobject createdto -- inobj II", inobj, 93);

                for (var eachparm in inobj) {
                    if (inobj.hasOwnProperty(eachparm)) 
                    {
                        if (eachparm==="command") 
                        { 
                            dtoobj[eachparm] = inobj[eachparm] 
                        }
                        else // not command
                        {
                            proxyprinttodiv("getdtoobject createdto -- eachparm", eachparm, 93);
                            proxyprinttodiv("getdtoobject --is-- switch inobj[eachparm]", inobj[eachparm], 93);
                            if (dtotable && dtotable.hasOwnProperty(eachparm)) 
                            {
                                dtoobj[eachparm] = createdto(inobj[eachparm], dtotable, createcommand_and_dtotable_flag); // recurse 
                                proxyprinttodiv("getdtoobject dtoobj[eachparm] before", dtoobj[eachparm], 93);
                                //proxyprinttodiv("getdtoobject is obj dtotable[eachparm]", dtotable[eachparm], 98);
                                // get a object copy of dtotable[eachparam] to tempobj
                                if (isArray(dtotable[eachparm])) {tempobj = dtotable[eachparm][0]} 
                                                            else {tempobj = dtotable[eachparm]}
                                //proxyprinttodiv("getdtoobject is obj tempobj", tempobj, 98);
                                if (isArray(dtoobj[eachparm])) { // merge it with object dtoobj[eachparm]
                                    tempobj = extend(true, dtoobj[eachparm][0], tempobj);
                                } 
                                else 
                                {
                                    tempobj = extend(true, dtoobj[eachparm], tempobj);
                                }
                                var relationshiptype = "";
                                if (tempobj && 
                                    tempobj['metadata'] && 
                                    tempobj['metadata'][eachparm] &&
                                    tempobj['metadata'][eachparm]['type']) 
                                {
                                    relationshiptype = tempobj['metadata'][eachparm]['type'];
                                }

                                //proxyprinttodiv("getdtoobject is obj tempobj II", tempobj, 93);
                                if (isArray(dtotable[eachparm]) ||
                                    (relationshiptype === "onetomany") || 
                                    (relationshiptype === "manytomany") || 
                                    (relationshiptype === "jsononetomany") || 
                                    (relationshiptype === "jsonmanytomany")
                                    ) 
                                { // now convert it back to right form
                                    dtoobj[eachparm] = [];
                                    dtoobj[eachparm].push(tempobj);
                                } 
                                else 
                                {
                                    dtoobj[eachparm] = tempobj;
                                }
                                proxyprinttodiv("getdtoobject dtoobj[eachparm] after", dtoobj[eachparm], 93);
                            }
                            else 
                            { // if not dto table then make up value
                                if (eachparm === "metadata")            {dtoobj[eachparm] = recursestring(inobj[eachparm])}
                                else if (eachparm === "wid")            {dtoobj[eachparm] = "guid"}
                                else if (isObject(inobj[eachparm]))     {dtoobj[eachparm] = "object"} 
                                else if (isArray(inobj[eachparm]))      {dtoobj[eachparm] = "array"}
                                else                                    {dtoobj[eachparm] = "string"}
                            }
                            proxyprinttodiv("getdtoobject is obj dtoobj end--each", dtoobj[eachparm], 93);
                        } // end else
                    } // if has property
                } // for eachparm
            
                proxyprinttodiv("getdtoobject is obj inobj", inobj, 93);
                proxyprinttodiv("getdtoobject is obj dtoobj end", dtoobj, 93);

                return dtoobj;
            } // else
        } // end fn recurse

    function createdtofromresults(obj, dtoobject, dtotype) {
        var dtotable={}
        generatedtotablelist(dtoobject, dtotable, dtotype);

        proxyprinttodiv("getdtoobject createdtofromresults obj", obj, 93);
        proxyprinttodiv("getdtoobject createdtofromresults dtoobject", dtoobject, 93);

        if (dtoobject.command.dtorecursive) {
            proxyprinttodiv("getdtoobject after createdtotable, dtotable recurse", dtotable, 93);
            if (!obj.command) {obj.command={}}
            obj.command.recursive = true
            dtoobject = createdto(obj, dtotable, true)
        } else {
            proxyprinttodiv("getdtoobject after createdtotable, dtotable, not recurse", dtotable, 93);
            dtoobject = createdto(dtoobject, dtotable, false)
        }
 
        proxyprinttodiv("getdtoobject after createdto dtoobject", dtoobject, 93);
        return dtoobject
        }

        // -------------------------> START < --------------------
        // this function looks up the matching dto to an object or sent in command.dtotype, if one is not found then one is made
        // based on object that came in or found dto we create a dtotable
        // based on traversing that dtotable we create a dto
        proxyprinttodiv("getdtoobject input obj: ", obj, 93);
        var dtotype;
        var dtoobject = {};

        if (!obj["metadata"]) {obj["metadata"] = {}}
        if (!obj["metadata"]["method"]) {obj["metadata"]["method"] = "defaultdto"}

        if (command && command.dtotype) {dtotype = command.dtotype;
                                } else  {dtotype = obj['metadata']['method'];}

        if (obj.metadata.method === "string" ||  obj.wid ==="guid") {
            proxyprinttodiv("getdtoobject *****string ", obj, 93); 
            callback(null, obj)
        }else{

        // if defaultdto, or trying to enter a dto (mm=wid) or relationshiptypedto just mirror back
            if (dtotype === "defaultdto" || 
                obj.metadata.method === obj.wid || 
                obj.metadata.method==="relationshipdto") {
                var out = createdto(obj, {}, true)
                proxyprinttodiv("getdtoobject obj ", obj, 93);
                proxyprinttodiv("getdtoobject out ", out, 93);
                callback(null,out); // create dto from object with no dtotable

            } else { // if there is no dtoType or obj.wid then call back with a blank dtoobject
                proxyprinttodiv("getdtoobject about to getwidmaster dtotype ", dtotype, 93); //93
                console.log("getdtoobject about to getwidmaster  " + JSON.stringify(obj)); //93
                execute({
                    "executethis": "getwidmaster",
                    "wid": dtotype,
                    "command.getwidmaster.convertmethod": "dto",
                    "command.getwidmaster.execute": "ConvertFromDOTdri"
                }, function (err, res) {
                    if (err && Object.keys(err).length > 0) { // If error, bounce out
                        callback(err, res);
                    } else {
                        proxyprinttodiv("getdtoobject input res I ", res, 93);
                        if (!res || (Object.keys(res[0]).length === 0)) {
                            // if no results then proceed with same logic as default
                            var out = createdto(obj, {}, true)
                            proxyprinttodiv("getdtoobject obj ", obj, 93);
                            proxyprinttodiv("getdtoobject out ", out, 93);
                            callback(null, out);
                        } else {
                            proxyprinttodiv("getdtoobject before createdtotable dtoobject res[0]", res[0], 93);
                            var out = createdtofromresults(obj, res[0], dtotype)
                            proxyprinttodiv("getdtoobject obj ", obj, 93);
                            proxyprinttodiv("getdtoobject res[0] ", res[0], 93);
                            proxyprinttodiv("getdtoobject out ", out, 93);
                            callback(null, out);
                        } 
                    }
                }); // end execute
            }       
        } // end else
    };

    // *** GetWidMongo ***
    // Purpose: Builds a base object built up from relationships
    // Notes: returns a made up dto base on maximum number of relationships, etc
    exports.getWidMongo = getWidMongo = function getWidMongo(widInput, command, preamble, level, excludeset, callback) {
        // local vars
        var moreDTOParameters = [];
        var targetwid = "";
        var executeobject = {};
        var parameterobject;
        var err;
        var res;
        var params;
        var dtolist = {};

        excludeset[widInput] = widInput; // keep track of what we have done so we do not do it again

        async.series([
                // getwid
                function step1(cb) {
                    // Sample error
                    // throw({'Rocks': 'are hard'});
                    proxyprinttodiv('Function getwidmongo step 1 hit with widInput:', widInput, 38);
                    proxyprinttodiv('Function getwidmongo step 1 hit with command:', command, 38);
                    if (!level) {
                        level = 20;
                    } else {
                        level = level - 1;
                    } //how many levels to try
                    if (preamble === undefined) {
                        preamble = "";
                    }
                    if (preamble !== "") {
                        preamble = preamble + ".";
                    }

                    targetwid = widInput;
                    executeobject["wid"] = widInput;
                    //executeobject["command.convertmethod"]="toobject";
                    executeobject['executethis'] = 'getwid';

                    execute(executeobject, function (err, res) { // getwid
                        // If error, bounce out
                        if (err && Object.keys(err).length > 0) {
                            // callback(err, results);
                            cb(err, res);
                        } else {
                            proxyprinttodiv('Function getwidmongo getwid res', res, 38);
                            res = res[0];

                            if (Object.keys(res).length !== 0) {
                                parameterobject = res;
                                proxyprinttodiv('Function getwidmongo getwid res', res, 38);
                                //moreDTOParameters=parameterobject;  &&& taken out roger 2/7
                                cb(null); // add
                            } else { // if no object
                                parameterobject = {};
                                targetwid = ""; // if no object to follow then targetwid="";
                                cb(null);
                            }
                        }
                    }); // end execute
                }, // end step1
                // *** Override ***
                // Date: 10 MAR 14
                // Purpose: Looks at the current object and determines if we need to grab new data and override values on properties

                function processOverride(cb) {

                    // Sample error
                    // throw({'Emeralds': 'make cities'});
                    proxyprinttodiv('Function getwidmongo getwid parameterobject', parameterobject, 38);

                    if (command.getwidmaster.convertmethod !== "dto" && Object.keys(parameterobject).length !== 0 &&
                        parameterobject.metadata && parameterobject.metadata.inherit) {

                        proxyprinttodiv("GetWidMongo start processOverride", parameterobject, 38);

                        listToDo = parameterobject.metadata.inherit;
                        listToDo.reverse(); // they are processed in reverse order
                        var wid = parameterobject.wid;
                        var mm = extend(true, {}, parameterobject.metadata);

                        if (listToDo.length > 0 && command && command.getwidmaster && command.getwidmaster.inheritflag === "true") {
                            proxyprinttodiv('<<< Get_Clean step3 resultObj after >>xx', parameterobject, 38);
                            async.mapSeries(listToDo, function (eachresult, cbMap) {
                                async.nextTick(function () {
                                    proxyprinttodiv('getClean inherit getwidmaster eachresult I ', eachresult, 38);
                                    if (!eachresult.command) {
                                        eachresult.command = {};
                                    }
                                    if (!eachresult.command.getwidmaster) {
                                        eachresult.command.getwidmaster = {};
                                    }
                                    eachresult.executethis = "getwidmaster";
                                    //eachresult.command.getwidmaster.convertmethod="nowid";
                                    eachresult.command.getwidmaster.inheritflag = "false";
                                    eachresult.command.getwidmaster.execute = "ConvertFromDOTdri";
                                    proxyprinttodiv('getClean inherit getwidmaster eachresult II', eachresult, 38);

                                    if (!eachresult.command.resultparameters) {
                                        eachresult.command.resultparameters = {}
                                    }
                                    extend(true, eachresult.command.resultparameters, parameterobject);
                                    proxyprinttodiv('getClean inherit getwidmaster eachresult III', eachresult, 38);
                                    execute(
                                        eachresult, function (err, res) {
                                            proxyprinttodiv('clean inherit 3', err, 38);
                                            proxyprinttodiv('clean inherit 4', res, 38);
                                            proxyprinttodiv('resultObj after special getwidmaster A ', parameterobject, 38);
                                            if (err && Object.keys(err).length > 0) {
                                                cbMap(err, res);
                                            } else {
                                                if ((res.length > 0) && (Object.keys(res[0]).length > 0)) {

                                                    parameterobject = res[0];
                                                    delete parameterobject.wid;
                                                    delete parameterobject.metadata;
                                                    //### we may need to renable line below
                                                    //delete parameterobject.command;
                                                    parameterobject.wid = wid;
                                                    parameterobject.metadata = {};
                                                    parameterobject.metadata = mm;
                                                    proxyprinttodiv('resultObj after special getwidmaster B', parameterobject, 38);
                                                    cbMap(null);
                                                } // end if
                                                else { // if no result
                                                    cbMap(null);
                                                }
                                            }
                                        }); // end execute
                                }); // end next tick
                            }, function (err, res) {
                                if (err && Object.keys(err).length > 0) {
                                    cb(err, res);
                                } else {
                                    cb(null);
                                }
                            }); //end mapseries
                        } // if listdto length
                        else {
                            cb(null);
                        }
                    } // end if bigdto
                    else { // if no bigdto
                        cb(null);
                    }
                }, // end step 3


                function step2(cb) {
                    if (targetwid != "") {
                        async.series([ // asynch step1n2
                                function step2n1(cb1) {
                                    executeobject = {};
                                    executeobject["mongosetfieldsexclude"] = excludeset;
                                    executeobject["mongowid"] = targetwid;
                                    executeobject["mongorelationshiptype"] = "attributes";
                                    executeobject["mongorelationshipmethod"] = "all";
                                    executeobject["mongorelationshipdirection"] = "forward";
                                    executeobject["mongowidmethod"] = "";
                                    executeobject["command"] = {
                                        "result": "queryresult"
                                    };
                                    // executeobject["command.execute"] = "ConvertFromDOTdri";
                                    // executeobject["command.convertmethod"] = "toobject";
                                    //executeobject["dtotype"] = "";
                                    executeobject["executethis"] = 'querywid';
                                    proxyprinttodiv('Function getwidmongo executeobject', executeobject, 38);
                                    execute(executeobject, function (err, res) {
                                        // If error, bounce out
                                        proxyprinttodiv('Function getwidmongo results res', res, 38);
                                        res = res[0]["queryresult"];
                                        if (!res) {
                                            res = []
                                        }
                                        if (err && Object.keys(err).length > 0) {
                                            cb1(err, 'step2n1');
                                        } else {
                                            proxyprinttodiv('Function getwidmongo query res', res, 38);
                                            if (Object.keys(res).length !== 0) {
                                                moreDTOParameters = res;
                                            }
                                            cb1(null, 'step2n1');
                                        }
                                    });
                                } // end step1n2
                            ],
                            function (err, res) {
                                // If error, bounce out
                                if (err && Object.keys(err).length > 0) {
                                    cb(err, res);
                                } else {
                                    proxyprinttodiv('Function getwidmongo query part 2', res, 38);
                                    cb(null, 'two');
                                }
                            });
                    } // end if
                    else {
                        cb(null, 'two');
                    }
                }, // end step2

                function step3(cb) {

                    // Sample error
                    // throw ({'Frisbees': 'are errors'});


                    if (!parameterobject.command) {
                        parameterobject.command = {};
                    }
                    if ((parameterobject["metadata"]) && (command) && (command.getwidmaster) &&
                        (command.getwidmaster.convertmethod === "dto")) {
                        if (!parameterobject.command.inherit) {
                            parameterobject.command.inherit = []; // ### roger
                        }
                        //if (!parameterobject.command.inherit) {parameterobject.command.inherit = [];
                        if (!parameterobject.command.deepdtolist) {
                            parameterobject.command.deepdtolist = {};
                        }
                        if (!parameterobject.command.dtolist) {
                            parameterobject.command.dtolist = {};
                        }
                    }
                    proxyprinttodiv('Function getwidmongo parameterobject reset', parameterobject, 38);

                    if (moreDTOParameters && moreDTOParameters.length > 0) {
                        var listToDo = [];
                        var rightparameters = {};
                        var left;

                        //proxyprinttodiv('Function getwidmongo moreDTOParameters', moreDTOParameters,38);

                        // note moreDTOParameters is a LIST [{wid1: {}}, wid2: {}}, wid3: {}}]
                        for (var eachresult in moreDTOParameters) { // list, for each item in list
                            for (var key in moreDTOParameters[eachresult]) { // list is {wid : {}} --key = wid
                                if (moreDTOParameters[eachresult].hasOwnProperty(key)) {
                                    rightparameters = moreDTOParameters[eachresult][key];
                                }
                            }

                            // create dto
                            listToDo.push(eachresult);
                        }
                        proxyprinttodiv('Function getwidmongo listToDo', listToDo, 38);

                        async.mapSeries(listToDo, function (eachresult, cbMap) {


                                async.nextTick(function () {
                                    // Sample error

                                    var rightparameters = {};
                                    var params;
                                    var metadataMethod;
                                    proxyprinttodiv('Function getwidmongo inside', eachresult, 38);
                                    proxyprinttodiv('Function getwidmongo moreDTOParameters[eachresult]', moreDTOParameters[eachresult], 38);
                                    for (var key in moreDTOParameters[eachresult]) { // list is {wid : {}} --key = wid
                                        if (moreDTOParameters[eachresult].hasOwnProperty(key)) {
                                            rightparameters = moreDTOParameters[eachresult][key];
                                        }
                                    }
                                    proxyprinttodiv('Function getwidmongo rightparameters inside ', rightparameters, 38);

                                    if (level > 0) {

                                        proxyprinttodiv('Function getwidmongo recurse', key, 38);


                                        //getWidMongo(key, convertmethod, accesstoken, dtotype, rightparameters["metadata"]["method"], level, function (err, params) {
                                        getWidMongo(key, command, rightparameters["metadata"]["method"], level, excludeset, function (err, params) {
                                            // If error, bounce out
                                            if (err && Object.keys(err).length > 0) {
                                                cbMap(err, params);
                                            } else {
                                                proxyprinttodiv('Function getwidmongo params', params, 38);
                                                //proxyprinttodiv('Function getwidmongo rightparameters inside II ', rightparameters, 38);
                                                if (Object.keys(params).length !== 0) {

                                                    if (params.command && params.command.inherit) {
                                                        for (var eachinherit in params.command.inherit) {
                                                            parameterobject.command.inherit.push(params.command.inherit[eachinherit])
                                                        }
                                                    }
                                                    if (params.command && params.command.deepdtolist) {
                                                        extend(true, parameterobject.command.deepdtolist, params.command.deepdtolist);
                                                    }
                                                    if (params.command && params.command.dtorecursive) 
                                                        {parameterobject.command.dtorecursive=true}

                                                    proxyprinttodiv('Function getwidmongo rightparameters before ', rightparameters, 38);

                                                    if ((rightparameters) && (rightparameters["linktype"])) {
                                                        if ((rightparameters["linktype"] === "onetomany") ||
                                                            (rightparameters["linktype"] === "manytomany") ||
                                                            (rightparameters["linktype"] === "jsononetomany")) {
                                                            //if (Object.prototype.toString.call(parameterobject[rightparameters["metadata"]["method"]]) !== '[object Array]') {
                                                            if (!isArray(parameterobject[rightparameters["metadata"]["method"]])) {
                                                                parameterobject[rightparameters["metadata"]["method"]] = [];
                                                            }
                                                            parameterobject[rightparameters["metadata"]["method"]].push(params);
                                                        } else {
                                                            if ((rightparameters["linktype"] === "onetoone") ||
                                                                (rightparameters["linktype"] === "manytoone") ||
                                                                (rightparameters["linktype"] === "jsononetoone")
                                                                // || (rightparameters["linktype"] === "manytomany")
                                                            ) {
                                                                parameterobject[rightparameters["metadata"]["method"]] = params;
                                                            } else {
                                                                if ((rightparameters["linktype"] === "jsononetoone") ||
                                                                    (rightparameters["linktype"] === "jsononetomany")) {
                                                                    // add code here
                                                                }
                                                            }
                                                        } // end of 2nd else

                                                        proxyprinttodiv('Function getwidmongo parameterobject II-before', parameterobject, 38);
                                                        parameterobject['metadata'][rightparameters.metadata.method] = {};
                                                        parameterobject['metadata'][rightparameters.metadata.method]['type'] =
                                                            rightparameters["linktype"];

                                                    }
                                                    proxyprinttodiv('Function getwidmongo parameterobject II', parameterobject, 38);
                                                    //                                        } // if not dto else
                                                    //cbMap(null);
                                                } // if object length
                                                //else { // if nothing returned
                                                cbMap(null);
                                                //}
                                            } // end else
                                        }); // getwidmongo
                                    } // >0level
                                    else {
                                        cbMap(null);
                                    }
                                }); // added for nexttick
                            },
                            function (err, res) {
                                // If error, bounce out
                                proxyprinttodiv('Function getwidmongo end of parameterobject mapSeries res', res, 38);
                                if (err && Object.keys(err).length > 0) {
                                    cb(err, res);
                                    // cb(null, 'three');
                                } else {
                                    cb(null, 'three');
                                }
                            }); // mapseries
                        // cb(null, 'three') moved up 2/24 by roger
                    } // moreparameters length > 0
                    else {
                        cb(null, 'three');
                    }
                },
                function step4(cb) {

                    // Sample error
                    // throw ({'Hazelnut': 'are peanut errors'});

                    proxyprinttodiv('Function getwidmongo step4', parameterobject, 38);
                    //if (!parameterobject.command.dtolist) { // create dtolist

                    if ((parameterobject["metadata"]) && (command) && (command.getwidmaster) &&
                        (command.getwidmaster.convertmethod === "dto")) {

                        for (var eachmetadata in parameterobject["metadata"]) {
                            proxyprinttodiv('Function getwidmongo eachmetadata', eachmetadata, 38);
                            proxyprinttodiv('Function getwidmongo parameterobject', parameterobject, 38);
                            if (eachmetadata === "inherit") {

                                // added ### roger
                                for (var eachinherit in parameterobject["metadata"]["inherit"]) {
                                    parameterobject.command.inherit.push(parameterobject["metadata"]["inherit"][eachinherit]);
                                }

                                proxyprinttodiv('*** parameterobject["metadata"]["inherit"] ***', parameterobject["metadata"]["inherit"], 38);
                                proxyprinttodiv('*** parameterobject.command.inherit ***', parameterobject.command.inherit, 38);


                            }
                            // creates a list that looks like this:
                            // command.inherit: {a:a, b:b c:c}
                            else { // create deepdtolist, including current metadata
                                if (eachmetadata === "method") {
                                    //parameterobject.command.deepdtolist[parameterobject.metadata.method]=parameterobject.metadata.method;
                                    //parameterobject.command.dtolist[parameterobject.metadata.method]=parameterobject.metadata.method;
                                } else {
                                    proxyprinttodiv('Function getwidmongo parameterobject II', parameterobject, 38);
                                    if (
                                        (parameterobject['metadata'][eachmetadata]) &&
                                        (parameterobject['metadata'][eachmetadata]['type']) &&
                                        (
                                            (parameterobject['metadata'][eachmetadata]['type'] === "onetomany") ||
                                            (parameterobject['metadata'][eachmetadata]['type'] === "onetoone") ||
                                            (parameterobject['metadata'][eachmetadata]['type'] === "jsononetomany") ||
                                            (parameterobject['metadata'][eachmetadata]['type'] === "jsononetoone") ||
                                            (parameterobject['metadata'][eachmetadata]['type'] === "manytoone") ||
                                            (parameterobject['metadata'][eachmetadata]['type'] === "manytomany")
                                        )
                                    ) {
                                        proxyprinttodiv('Function getwidmongo parameterobject III', parameterobject, 38);
                                        parameterobject.command.deepdtolist[eachmetadata] = parameterobject.metadata[eachmetadata]['type'];
                                        parameterobject.command.dtolist[eachmetadata] = parameterobject.metadata[eachmetadata]['type'];

                                        // creates a list that looks like this:
                                        // command.inherit: {adto:onetomany bdto:onetomany cdto>: onetoone}
                                    }
                                }
                            }
                        } // for
                        // if the method already exists in deepdtolist then it is recursive...set flag
                        if (parameterobject.command.deepdtolist[parameterobject.metadata.method]) {
                            parameterobject.command.dtorecursive=true
                        }

                        var widName = "undefined";
                        if (parameterobject["wid"]) {
                            widName = parameterobject["wid"];
                        }

                        parameterobject["wid"] = "guid";
                        parameterobject["metadata"]["method"] = "string";
                        // parameterobject.command.inherit.push({"wid" : "systemdefault", "command":{"dtotype":"", "adopt":"default"}})
                        // if (command.getwidmaster.inheritflag === "true") {
                        if (widName !== "systemdto") {
                            var executeobject = {};
                            executeobject["command"] = {
                                "result": "systemdto",
                                "getwidmaster.execute": "ConvertFromDOTdri",
                                "getwidmaster.convertmethod": "dto",
                                "getwidmaster.inheritflag": "true" // changed from false
                            };
                            executeobject["executethis"] = "getwidmaster";
                            executeobject["wid"] = "systemdto";
                            execute(executeobject, function (err, res) {
                                if (err && Object.keys(err).length > 0) {
                                    cb(null, 'four');
                                } else {
                                    systemdto = res[0];
                                    // make sure it not an empty command object
                                    proxyprinttodiv("--- What i'm looking at systemdto inside system dto ---", systemdto, 38);

                                    if (parameterobject && Object.keys(parameterobject).length > 0) {
                                        parameterobject = extend(true, parameterobject, systemdto);
                                        proxyprinttodiv("--- What i'm looking at parameterobject inside system dto ---", parameterobject, 38);
                                        parameterobject.command.dtolist['systemdto'] = 'onetoone';
                                        parameterobject.command.deepdtolist['systemdto'] = 'onetoone';
                                        cb(null, 'four');
                                    } // if >
                                    else { // if no parmobject
                                        cb(null, 'four');
                                    }
                                } // else
                            }); // function

                        } // end if inherit = true
                        else { // if inherit !==true
                            cb(null, 'four');
                        }
                    } // end if dto
                    else {

                        proxyprinttodiv("--- What i'm looking at parameterobject step3 ---", parameterobject, 38);

                        cb(null, 'four');
                        // }
                    }
                }
            ],
            function (err, results) {
                // If error, bounce out
                if (err && Object.keys(err).length > 0) {
                    callback(err, results);
                } else {
                    if (Object.keys(parameterobject.command).length === 0) {
                        delete parameterobject.command
                    }
                    callback(null, parameterobject);
                }
            });
    };


    exports.getclean = getclean = function getclean(resultObj, command, callback) {
        var inbound_parameters = {};
        inbound_parameters = JSON.parse(JSON.stringify(arguments));

        var bigdto = {};
        var dtoobject = {};
        var outobj = {};
        var err = {};
        var dtoname;
        var index;
        var dtoToGet;

        proxyprinttodiv('In __getclean__ start: ', command, 38);

        async.series([
                function step1(cb) { // getdto
                    proxyprinttodiv('In __getclean__ resultObj: ', resultObj, 38);
                    proxyprinttodiv('In __getclean__ just before getdtoobject', command, 38);

                    getdtoobject(resultObj, command, function (err, res) {
                        // If error, bounce out
                        if (err && Object.keys(err).length > 0) {
                            cb(err, res);
                        } else {
                            proxyprinttodiv('In __getclean__ resultObj: II ', resultObj, 38);
                            proxyprinttodiv('In __getclean__ step1 with res: ', res, 38);
                            proxyprinttodiv('In __getclean__ step1 command: ', command, 38);
                            dtoobject = res;
                            proxyprinttodiv('In __getclean__ step1 with dtoobject: ', dtoobject, 38);
                            cb(null);
                        }
                    });
                },
                function step2(cb) { // getaggressivedto

                    //                        throw ({'Saphires': 'blue errors'});

                    proxyprinttodiv('In __getclean__ step2 with before if stament getWidMongo: ', resultObj, 38);
                    // if we have the root dto do not go off and get it again

                    // ### this check is wrong...we should return from getdtoobject command.wid and compare to it
                    if (resultObj.wid !== resultObj.metadata.method) {
                        proxyprinttodiv('In __getclean__ step2 with before getWidMongo: ', resultObj, 38);

                        // add logic to look for dtotype
                        dtoToGet = resultObj.metadata.method;
                        execute({
                            "executethis": "getwidmaster",
                            "wid": dtoToGet,
                            "command.getwidmaster.execute": "ConvertFromDOTdri",
                            "command.getwidmaster.convertmethod": "dto",
                            "command.getwidmaster.inheritflag": "false" // ### enabled by Roger
                        }, function (err, res) {
                            if (err && Object.keys(err).length > 0) {
                                cb(err, res);
                            } else {
                                bigdto = res[0];
                                proxyprinttodiv('In __getclean__ bigdto ', bigdto, 38);
                                cb(null);
                            }
                        });
                    } else {
                        proxyprinttodiv('In __getclean__ step2 else bigdto: ', bigdto, 38);
                        // in the case of having a root dto
                        bigdto = dtoobject;
                        cb(null);
                    }
                },
                function step3(cb) {



                    // Process command.dtotype at getwidmaster time
                    proxyprinttodiv('<<< Get_Clean step3 bigdto before', bigdto, 38);
                    proxyprinttodiv('<<< Get_Clean step3 dtoobject ', dtoobject, 38);
                    proxyprinttodiv('<<< Get_Clean step3 command', command, 38);
                    proxyprinttodiv('<<< Get_Clean step3 resultObj before', resultObj, 38);

                    if (Object.keys(bigdto).length >= Object.keys(dtoobject).length) {
                        if (bigdto !== dtoobject && command.dtotype && command.dtotype !== dtoToGet) {
                            resultObj = getdeepproperty(resultObj, command.dtotype);
                            if (isArray(resultObj)) {
                                resultObj = resultObj[0];
                            }
                        }
                    } else //if((Object.keys(bigdto).length < Object.keys(dtoobject).length)
                    if (command.dtotype) {
                        //var dtoname = Object.keys(dto)[0];
                        proxyprinttodiv('get clean add to bigdto command.dtotype', command.dtotype, 38);
                        var index = getindex(dtoobject, command.dtotype, null);
                        proxyprinttodiv('get clean add to bigdto index', index, 38);
                        if (index === null) {
                            //extend(true, bigdto, dtoobject);
                            var tempobj = {};
                            tempobj[dtoToGet] = resultObj;
                            tempobj.metadata = {};
                            tempobj.metadata.method = command.dtotype;
                            resultObj = tempobj;
                        } else {
                            setbyindex(resultObj, index, resultObj);
                        }
                        proxyprinttodiv('get clean resultObj after setbyindex', resultObj, 38);
                    }

                    // process inherit
                    proxyprinttodiv('<<< Get_Clean step3 resultObj after >>', resultObj, 38);
                    var listToDo = [];
                    var inheritobject;

                    if (bigdto && bigdto.command && bigdto.command.inherit) {


                        listToDo = bigdto.command.inherit;
                        listToDo.reverse(); // they are processed in reverse order
                        proxyprinttodiv('<<< Get_Clean listToDo', listToDo, 38);

                        proxyprinttodiv('<<< Get_Clean bigdto.command', bigdto.command, 38);
                        proxyprinttodiv('<<< Get_Clean dtoobject.command', dtoobject.command, 38);
                        proxyprinttodiv('<<< Get_CLean before call to execute command >>>', command, 38);

                        // ### I do not think these are needed
                        delete dtoobject.command;
                        delete bigdto.command; // added by joe to delete the command obj so we do not get a blank command object after deep filter

                        proxyprinttodiv('<<< Get_Clean before call to execute wid A >>>', resultObj.wid, 38);
                        var wid = resultObj.wid; // should be string "name" here not a wid object
                        var mm = extend(true, {}, resultObj.metadata);
                        proxyprinttodiv('<<< Get_Clean before call to execute wid B >>>', wid, 38);

                        if (listToDo.length > 0 && command && command.getwidmaster && command.getwidmaster.inheritflag === "true") {
                            proxyprinttodiv('the starting value of resultObj', resultObj, 38);
                            async.mapSeries(listToDo, function (eachresult, cbMap) {

                                async.nextTick(function () {
                                    proxyprinttodiv('getClean inherit getwidmaster eachresult 1', eachresult, 38);
                                    if (!eachresult.command) {
                                        eachresult.command = {}
                                    }
                                    if (!eachresult.command.getwidmaster) {
                                        eachresult.command.getwidmaster = {};
                                    }
                                    eachresult.executethis = "getwidmaster";
                                    //eachresult.command.getwidmaster.convertmethod="nowid";
                                    eachresult.command.getwidmaster.inheritflag = "false";
                                    eachresult.command.getwidmaster.execute = "ConvertFromDOTdri";
                                    if (!eachresult.command) {
                                        eachresult.command = {}
                                    }
                                    if (!eachresult.command.resultparameters) {
                                        eachresult.command.resultparameters = {};
                                    }
                                    extend(true, eachresult.command.resultparameters, resultObj);
                                    eachresult.command.resultparameters = resultObj;
                                    proxyprinttodiv('call being done for inherit', eachresult, 38);
                                    execute(
                                        eachresult, function (err, res) {
                                            proxyprinttodiv('clean inherit 1', err, 38);
                                            proxyprinttodiv('clean inherit 2', res, 38);
                                            if (err && Object.keys(err).length > 0) {
                                                cbMap(err, res);
                                            } else {
                                                proxyprinttodiv('<<< step3 eachresult 1', eachresult, 38);
                                                proxyprinttodiv('<<< step3 resultObj 1', resultObj, 38);
                                                if ((res.length > 0) && (Object.keys(res[0]).length > 0)) {
                                                    resultObj = res[0];
                                                    proxyprinttodiv('results from inherit', res[0], 38);
                                                    delete resultObj.wid;
                                                    delete resultObj.metadata;
                                                    //### we may need to renable line below
                                                    //delete resultObj.command;
                                                    resultObj.wid = wid;
                                                    resultObj.metadata = {};
                                                    resultObj.metadata = mm;

                                                    proxyprinttodiv('resultObj after special getwidmaster 3', resultObj, 38);
                                                    cbMap(null);
                                                } // end if
                                                else { // if no result
                                                    cbMap(null);
                                                }
                                                proxyprinttodiv('<<< step3 resultObj at end', resultObj, 38);
                                            }
                                            proxyprinttodiv('end of iteration -- inherit -- resultObj', resultObj, 38);

                                        }); // end execute
                                }); // end next tick
                            }, function (err, res) {

                                proxyprinttodiv('resultObj after special getwidmaster 4', resultObj, 38);
                                proxyprinttodiv('resultObj after special res', res, 38);

                                if (err && Object.keys(err).length > 0) {
                                    cb(err, res);
                                } else {
                                    cb(null);
                                }
                            }); //end mapseries
                        } // if listdto length
                        else {
                            cb(null);
                        }
                    } // end if bigdto
                    else { // if no bigdto
                        cb(null);
                    }
                } // end step 3
            ], // series list


            function (err, res) {
                proxyprinttodiv('<<< step3 eachresult 12', resultObj, 38);
                proxyprinttodiv('resultObj after special getwidmaster 5', resultObj, 38);

                // // band-aid
                // dtoobject = bigdto;



                proxyprinttodiv('<<< Get_Clean before call back beforedeepfilter resultObj >>>', resultObj, 38);
                proxyprinttodiv('<<< Get_Clean before call back beforedeepfilter bigdto >>>', bigdto, 38);
                proxyprinttodiv('<<< Get_Clean before call back beforedeepfilter dtoobject >>>', dtoobject, 38);
                proxyprinttodiv('<<< Get_Clean before call back beforedeepfilter command >>>', command, 38);

                if (!command) {
                    command = {};
                }
                if (!command.deepfilter) {
                    command.deepfilter = {};
                }
                if (!command.deepfilter.convert) {
                    command.deepfilter.convert = true;
                }

                // if (!command.deepfilter.keepaddthis) {
                //     command.deepfilter.keepaddthis = false;
                // }

                deepfilter(resultObj, dtoobject, command, function (err, resultObj) { // changed by joe
                    // If error, bounce out

                    proxyprinttodiv('resultObj after special getwidmaster after deepfilter 7', resultObj, 38);

                    if (err && Object.keys(err).length > 0) {
                        callback(err, resultObj);
                    } else {
                        //deepfilter(resultObj, bigdto, command, function (err, resultObj){
                        delete command.deepfilter;
                        proxyprinttodiv('<<< Get_Clean before call back afterdeepfilter resultObj >>>', resultObj, 38);
                        debugfn("getclean code generator", "getclean", "get", "code", 2, 1, {
                            0: inbound_parameters,
                            1: resultObj
                        }, 6);
                        // if (command && command.getwidmaster &&
                        //     (command.getwidmaster.execute === false || command.getwidmaster.execute === "false")) {
                        //     // empty by design
                        // } else { // if = true or !=false -- remove addthis.
                        //     proxyprinttodiv('<<< Get_Clean before find and replace resultObj >>>', resultObj, 38);
                        //     resultObj = find_and_replace_addthis(resultObj);
                        //     proxyprinttodiv('<<< Get_Clean after find and replace resultObj >>>', resultObj, 38);
                        // }
                        proxyprinttodiv('<<< Get_Clean after find and replace resultObj >>> II', resultObj, 38);
                        callback(null, resultObj);
                    }
                });
            }
        ); // end series
    }



})(typeof window == "undefined" ? global : window);
