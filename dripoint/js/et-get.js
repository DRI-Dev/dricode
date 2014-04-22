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
        try {
            var inbound_parameters = arguments;
            var command;
            proxyprinttodiv('getwidmaster start parameters', parameters, 38);
            parameters = ConvertFromDOTdri(parameters);

            // this sends in a default command object 
            var filter_data = tolowerparameters(parameters, {
                    "command": {
                        "getwidmaster": {
                            "inheritflag": "true",
                            "dtotype": "",
                            "execute": "ConvertToDOTdri"
                        }
                    }
                },
                //"dtotype":"", "execute":"ConvertFromDOTdri"}}}, 
                {
                    "command": ""
                }, true);

            proxyprinttodiv('getwidmaster filter_data', filter_data, 38);

            parameters = filter_data.output;
            command = filter_data.filteredobject.command;

            proxyprinttodiv('getwidmaster command I', command, 38);

            proxyprinttodiv('GetWidMaster parameters.wid right before getwidmongo', parameters.wid, 38);
            proxyprinttodiv('GetWidMaster parameters right before getwidmongo', parameters, 38);
            proxyprinttodiv('getwidmaster command right before getwidmongo', command, 38);

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
        } // end try 
        catch (err) {
            var finalobject = createfinalobject({"result": "getwidmaster"}, {}, "getwidmaster", err, inbound_parameters);
            console.log('** Error Caught in the getwidmaster() function in et-get.js ** => ' + err);
            console.log('** finalobject created from error => ' + JSON.stringify(finalobject));
            callback(finalobject.err, finalobject.res);
        }
    };


    // *** GetDTOObject ***
    // Purpose: Pulls the schema for objects
    exports.getdtoobject = getdtoobject = function getdtoobject(obj, command, callback) {
        try {
            function recursestring(dtoobject) {
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

            function recurseobj(params) {
                proxyprinttodiv("getdtoobject recurseobj -- params", params, 98);
                var dtolist = {};
                var dtoobj = {};
                var metadata = {};
                var tempobj = {};
                var inheritlist = [];
                var inobj = JSON.parse(JSON.stringify(params));

                if (inobj instanceof Array) { //if we get an array in (usally happens on the recurse)
                    proxyprinttodiv("inobj instanceof array", inobj, 98);
                    var mergedObj = {};
                    var tempArray = [];
                    for (var i in inobj) {
                        if (inobj.hasOwnProperty(i)) {
                            // if our array is just a list of strings
                            if (typeof inobj[i] === 'string') {
                                tempArray.push("string");
                            } else {
                                extend(true, mergedObj, recurseobj(inobj[i]));
                            }
                        }
                    }
                    // there has to be something in the merge object to push it onto the return
                    if (Object.keys(mergedObj).length > 0) {
                        tempArray.push(mergedObj);
                    }

                    proxyprinttodiv("tempArray", tempArray, 98);
                    return tempArray;
                } else {
                    // the section below improves inobj,
                    // -it gets command from dtotable if avail
                    // -it creates a dtolist based on type
                    // - it changes structure of inobj based on type

                    if (inobj['metadata']) {
                        dtolist = {};
                        metadata = inobj['metadata'];
                        proxyprinttodiv("In getdtoobject recurseobj metadata", metadata, 98);
                        for (var eachitem in metadata) {
                            if (metadata.hasOwnProperty(eachitem)) {
                                if (eachitem === 'type' || eachitem === 'method') {
                                    proxyprinttodiv("In getdtoobject recurseobj metadata -- eachitem", eachitem, 98);
                                    tempobj = {};
                                    if (eachitem === 'type') {
                                        tempobj[eachitem] = metadata[eachitem]['type'];
                                    }
                                    if (eachitem === 'method') {
                                        if (dtotable[metadata.method]) {
                                            tempobj = dtotable[metadata.method].command.dtolist
                                        }
                                    }
                                    if (tempobj) {
                                        extend(true, dtolist, tempobj);
                                    }
                                    // if (eachitem==='method' && dtotable[metadata.method] &&
                                    //     dtotable[metadata.method].command && dtotable[metadata.method].command.inherit) {
                                    //     proxyprinttodiv("getdtoobject dtotable[metadata.method].command.inherit ", dtotable[metadata.method].command.inherit, 98);
                                    //         tempobj = dtotable[metadata.method].command.inherit;
                                    //         inheritlist.push(tempobj);
                                    //     }
                                    proxyprinttodiv("getdtoobject dtolist", dtolist, 98);
                                    proxyprinttodiv("In getdtoobject <<< DTOLIST >>>", dtolist, 98);
                                    // eachitem would be a child
                                    if ((metadata[eachitem]['type'] === "onetomany" ||
                                            metadata[eachitem]['type'] === "manytomany" || // ** readded
                                            metadata[eachitem]['type'] === "jsononetomany") &&
                                        (inobj[eachitem] !== undefined) && (!isArray(inobj[eachitem]))) {
                                        relationshipArray = [];
                                        relationshipArray.push(inobj[eachitem]);
                                        delete inobj[eachitem];
                                        inobj[eachitem] = relationshipArray;
                                    }
                                } // type
                            }
                        } // for metadata
                    } // if inobj['metadata'];

                    //###
                    // var dtolistdefault = {'systemdto' : 'onetoone'}
                    // extend(true, dtolist, dtolistdefault)

                    if (!dtoobj.command) { dtoobj.command = {}; }
                    // section below goes through each property and recurse
                    proxyprinttodiv("getdtoobject createdtotable -- dtotable ", dtotable, 98, true);
                    //proxyprinttodiv("getdtoobject inheritlist", inheritlist, 98);
                    proxyprinttodiv("getdtoobject dtolist", dtolist, 98);
                    proxyprinttodiv("getdtoobject recurseobj -- inobj II", inobj, 98);
                    for (var eachparm in inobj) {
                        if (inobj.hasOwnProperty(eachparm)) {
                            proxyprinttodiv("getdtoobject recurseobj -- eachparm", eachparm, 98);
                            proxyprinttodiv("getdtoobject --is-- switch inobj[eachparm]", inobj[eachparm], 98);

                            if (isObject(inobj[eachparm]) || isArray(inobj[eachparm])) {
                                dtoobj[eachparm] = recurseobj(inobj[eachparm]);
                                proxyprinttodiv("getdtoobject --is-- switch inobj[eachparm]", inobj[eachparm], 98);
                                proxyprinttodiv("getdtoobject is obj dtoobj", dtoobj, 98);
                                if (dtotable[eachparm]) { // if table entry exists, then merge to what you just got
                                    proxyprinttodiv("getdtoobject is obj dtotable[eachparm]", dtotable[eachparm], 98);

                                    if (isArray(dtotable[eachparm])) { // get a object copy of dtotable[eachparam] to tempobj
                                        tempobj = dtotable[eachparm][0];
                                    } else {
                                        tempobj = dtotable[eachparm];
                                    }
                                    proxyprinttodiv("getdtoobject is obj tempobj", tempobj, 98);
                                    if (isArray(dtoobj[eachparm])) { // merge it with object dtoobj[eachparm]
                                        tempobj = extend(true, dtoobj[eachparm][0], tempobj);
                                    } else {
                                        tempobj = extend(true, dtoobj[eachparm], tempobj);
                                    }
                                    proxyprinttodiv("getdtoobject is obj tempobj II", tempobj, 98);
                                    if (isArray(dtotable[eachparm])) { // now convert it back to right form
                                        dtoobj[eachparm] = [];
                                        dtoobj[eachparm].push(tempobj);
                                    } else {
                                        dtoobj[eachparm] = tempobj;
                                    }
                                    //dtoobj[eachparm]=recursestring(dtoobj[eachparm])
                                    proxyprinttodiv("getdtoobject is obj dtoobj.command.dtolist", dtoobj.command.dtolist, 98);
                                }
                            } else { // if not object then
                                dtoobj[eachparm] = "string";
                                //dtoobj[eachparm]=recursestring(dtoobj[eachparm])
                            }
                            //dtoobj[eachparm]=recursestring(dtoobj[eachparm])
                            proxyprinttodiv("getdtoobject is obj dtoobj end--each", dtoobj[eachparm], 98);
                        }
                    } // for eachparm

                    proxyprinttodiv("getdtoobject is obj inobj", inobj, 38);
                    proxyprinttodiv("getdtoobject is obj dtoobj end", dtoobj, 38);

                    if (!dtoobj.command) {
                        dtoobj.command = {};
                    }
                    if (!dtoobj.command.dtolist) {
                        dtoobj.command.dtolist = {};
                    }
                    if (dtolist) {
                        dtoobj.command.dtolist = extend(true, dtoobj.command.dtolist, dtolist);
                    }

                    //if (!dtoobj.command.inherit) {dtoobj.command.inherit = []}
                    // if (inheritlist) {
                    //     for (var eachinherit in inheritlist) {
                    //         dtoobj.command.inherit.push(inheritlist[eachinherit])
                    //     }
                    // }

                    proxyprinttodiv("In GetDTOObject before return -- we created dto -- :", dtoobj, 98);

                    return dtoobj;
                } // else
            } // end fn recurse

            function createdtotable(mm, dtoobject) {
                proxyprinttodiv("getdtoobject createdtotable -- dtoobject", dtoobject, 38);
                proxyprinttodiv("getdtoobject createdtotable -- mm", mm, 38);

                // if we are missing dto object, command, and dtotype create them
                if (!dtoobject) { dtoobject = {}; }

                //if (dtoobject.command.dtolist === undefined) {
                //proxyprinttodiv("getdtoobject createdtotable -- dtoobject.command.dtolist ", dtoobject.command.dtolist, 38);

                if ((dtoobject.command) && (dtoobject.command.dtolist) && (Object.keys(dtoobject.command.dtolist).length > 0)) {
                    proxyprinttodiv("getdtoobject dtoobject.command.dtolist -- ", dtoobject.command.dtolist, 38);
                    for (var eachparam in dtoobject.command.dtolist) {
                        if (dtoobject.command.dtolist.hasOwnProperty(eachparam)) {
                            proxyprinttodiv("getdtoobject createdtotable eachparam -- ", eachparam, 38);
                            if (isObject(dtoobject[eachparam])) {
                                createdtotable(eachparam, dtoobject[eachparam]);
                                dtotable[eachparam] = dtoobject[eachparam];
                                proxyprinttodiv("getdtoobject createdtotable dtoobject[eachparam] -- ", dtoobject[eachparam], 38);
                                proxyprinttodiv("getdtoobject createdtotable dtotable -- ", dtotable, 38);
                            }
                        }
                    }
                }

                //dtoobject=recursestring(dtoobject);

                if (!dtotable[mm] && Object.keys(dtoobject).length > 0) {
                    dtotable[mm] = dtoobject;
                }
                proxyprinttodiv("getdtoobject createdtotable -- dtotable ", dtotable, 38);
            }

            proxyprinttodiv("getdtoobject input obj: ", obj, 38);
            var inbound_parameters = JSON.parse(JSON.stringify(arguments));

            var dtotype;
            var dtoobject = {};
            var dtotable = {};
            var createddto = {};

            if (!obj["metadata"]) {
                obj["metadata"] = {};
                proxyprinttodiv("getdtoobject metadata -- CREATED", obj, 38);
            }
            if (!obj["metadata"]["method"]) {
                obj["metadata"]["method"] = "defaultdto";
                proxyprinttodiv("getdtoobject metadata method -- CREATED", obj, 38);
            }

            if (command && command.dtotype) {
                dtotype = command.dtotype;
            } else {
                dtotype = obj['metadata']['method'];
            }
            if (dtotype !== "defaultdto") { // && (dtotype !== obj.wid)) {
                proxyprinttodiv("getdtoobject about to getwidmaster dtotype ", dtotype, 38); //38
                execute({
                    "executethis": "getwidmaster",
                    "wid": dtotype,
                    "command.getwidmaster.convertmethod": "dto",
                    "command.getwidmaster.execute": "ConvertFromDOTdri"
                }, function (err, res) {
                    // If error, bounce out
                    if (err && Object.keys(err).length > 0) {
                        callback(err, res);
                    } else {
                        proxyprinttodiv("getdtoobject input res I ", res, 38);
                        if (res && (Object.keys(res[0]).length !== 0)) {
                            proxyprinttodiv("getdtoobject before createdtotable dtoobject res[0]", res[0], 38);
                            proxyprinttodiv("getdtoobject before createdtotable dtoobjectobj", obj, 38);
                            dtotable = {};
                            // if(dtotype){
                            createdtotable(dtotype, res[0]);
                            // }
                            proxyprinttodiv("getdtoobject before createdtotable dtoobject res[0] again", res[0], 38);
                            proxyprinttodiv("getdtoobject after createdtotable, dtotable", dtotable, 38);
                            createddto = {};

                            // In the case of author.author
                            if (obj.hasOwnProperty(dtotype) && obj[dtotype].hasOwnProperty(dtotype)) {
                                createddto = recurseobj(obj);
                            } else { // our original case
                                createddto = res[0];
                            }

                            proxyprinttodiv("getdtoobject after createddto", createddto, 38);
                            dtoobject = extend(true, res[0], createddto);
                            proxyprinttodiv("getdtoobject after recurseobj dtoobject", dtoobject, 38);
                            //dtoobject = res[0];
                        } else {
                            //proxyprinttodiv("getdtoobject createdtotable dtoobject II-- ", dtotable, 38);
                            dtoobject = {};
                            dtoobject = recurseobj(obj);
                        }

                        proxyprinttodiv("getdtoobject output1 AFTER -- dtoobject", dtoobject, 38);
                        dtoobject = recursestring(dtoobject);
                        proxyprinttodiv("getdtoobject output1 -- dtotable", dtotable, 38);
                        //proxyprinttodiv("getdtoobject output1 -- dtolist", dtolist, 38);
                        callback(null, dtoobject);
                    }
                }); // end execute
            } else { // if there is no dtoType or obj.wid then call back with a blank dtoObject
                dtoobject = {};
                dtoobject = recurseobj(obj);
                proxyprinttodiv("getdtoobject output2 -- dtoobject", dtoobject, 38);
                dtoobject = recursestring(dtoobject);
                callback(null, dtoobject);
            } // end else
        } // end try
        catch (err) {
            //callback ({"status":"there was an error"}, {"function":"getdtoobject"}); 
            var finalobject = createfinalobject({"result": "getdtoobject"}, {}, "getdtoobject", err, inbound_parameters);
            console.log('** Error Caught in the getdtoobject() function in et-get.js ** => ' + err);
            console.log('** finalobject created from error => ' + JSON.stringify(finalobject));
            callback(finalobject.err, finalobject.res);
        }
    };

    // *** GetWidMongo ***
    // Purpose: Builds a base object built up from relationships
    // Notes: returns a made up dto base on maximum number of relationships, etc
    exports.getWidMongo = getWidMongo = function getWidMongo(widInput, command, preamble, level, excludeset, callback) {
        try {
            var inbound_parameters = {};
            inbound_parameters = JSON.parse(JSON.stringify(arguments));

            // local vars
            var moreDTOParameters = [];
            var targetwid = "";
            var executeobject = {};
            var parameterobject;
            var err;
            var res;
            var params;
            var dtolist = {};

            function debugvars(varlist) {
                var allvars = {
                    1: {
                        "widInput": widInput,
                        "preamble": preamble,
                        "level": level,
                        "parameterobject": parameterobject,
                        "moreDTOParameters": moreDTOParameters,
                        "targetwid": targetwid,
                        "eachresult": '',
                        "key": '',
                        "rightparameters": {},
                        "executeobject": executeobject,
                        "err": err,
                        "dtolist": dtolist,
                        "params": params
                    }
                };
                var resultObj = {};
                var vargroup;

                if (!varlist) {
                    for (var eachvar in allvars) {
                        if (allvars.hasOwnProperty(eachvar)) { varlist.push(eachvar); }
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

            excludeset[widInput] = widInput; // keep track of what we have done so we do not do it again

            async.series([
                    // getwid
                    function step1(cb) {
                        try {
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
                                    callback(err, res);
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

                        } // end try
                        catch (err) {
                            var finalobject = createfinalobject({
                                "result": "getWidMongo_async_step1"
                            }, {}, "getWidMongo_async_step1", err, res);
                            console.log('** Error Caught in the getWidMongo() function in et-get.js during getWidMongo_async_step1 ** => ' + err);
                            console.log('** finalobject created from error => ' + JSON.stringify(finalobject));
                            cb(finalobject.err, finalobject.res);
                        }
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
                            var wid = extend(true, {}, parameterobject.wid);
                            var mm = extend(true, {}, parameterobject.metadata);

                            if (listToDo.length > 0 && command && command.getwidmaster && command.getwidmaster.inheritflag === "true") {
                                proxyprinttodiv('<<< Get_Clean step3 resultObj after >>xx', parameterobject, 38);
                                async.mapSeries(listToDo, function (eachresult, cbMap) {
                                    async.nextTick(function () {
                                        try {
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
                                                        try {
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
                                                        } // end try
                                                        catch (err) {
                                                            //callback ({"status":"there was an error"}, {"function":"getclean"});
                                                            var finalobject = createfinalobject({
                                                                "result": "getclean_execute_getwidmaster---getwidmongo"
                                                            }, {}, "getclean_execute_getwidmaster", err, res);
                                                            cbMap(finalobject.err, finalobject.res);
                                                        }
                                                    }
                                                }); // end execute
                                        } // end try
                                        catch (err) {
                                            var finalobject = createfinalobject({
                                                "result": "getclean_async_nexttick getwidmong"
                                            }, {}, "getclean_async_nexttick", err, res);
                                            console.log('** Error Caught in the getWidMongo() function'
                                                + ' in et-get.js during getclean)async_nexttick ** => ' + err);
                                            console.log('** finalobject created from error => ' + JSON.stringify(finalobject));
                                            cbMap(finalobject.err, finalobject.res);
                                        }
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
                                                try {
                                                    proxyprinttodiv('Function getwidmongo query res', res, 38);
                                                    if (Object.keys(res).length !== 0) {
                                                        moreDTOParameters = res;
                                                    }
                                                    cb1(null, 'step2n1');
                                                } catch (err) {
                                                    var finalobject = createfinalobject({
                                                        "result": "getWidMongo_processoverride_execute_II"
                                                    }, {}, "getWidMongo_processoverride_execute_II", err, 'step2n1');
                                                    console.log('** Error Caught in the getWidMongo() function in'
                                                        + ' et-get.js during getWidMongo_processoveride_execute_II ** => ' + err);
                                                    console.log('** finalobject created from error => ' + JSON.stringify(finalobject));
                                                    cb1(finalobject.err, finalobject.res);
                                                }
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

                    // function step2B(cb) { // to handle looing up to parent (manytoone)
                    //     if (targetwid != "") {
                    //         async.series([ // asynch step1n2
                    //                 function step2n1(cb1) {
                    //                     //proxyprinttodiv('Function getwidmongo step 2n1 hit', null, 38);
                    //                     executeobject = {};
                    //                     executeobject["mongowid"] = targetwid;
                    //                     executeobject["mongorelationshiptype"] = "attributes";
                    //                     executeobject["mongorelationshipmethod"] = "all";
                    //                     executeobject["mongorelationshipdirection"] = "backward";
                    //                     executeobject["mongowidmethod"] = "";
                    //                     executeobject["mongorelationshiplink"] = "manytoone";
                    //                     // executeobject["command.execute"] = "ConvertFromDOTdri",
                    //                     // executeobject["command.convertmethod"] = "toobject";
                    //                     executeobject["dtotype"] = "";
                    //                     executeobject["executethis"] = 'querywid';
                    //                     executeobject["mongosetfieldsexclude"]=excludeset;
                    //                     execute(executeobject, function (err, res) {
                    //                         proxyprinttodiv('Function getwidmongo query manytoone', res, 38);
                    //                         if (Object.keys(res).length !== 0) {
                    //                             for (var eachresult in res) {
                    //                                 moreDTOParameters.push(res[eachresult])
                    //                                 // res is list [{wid:{}},{wid:{}},{wid:{}}] ... if wid not in widset then push
                    //                                 // if (!excludeset[Object.keys(res[eachresult])[0]]) {
                    //                                 //      moreDTOParameters.push(res[eachresult])
                    //                                 //     }                                       
                    //                                 }
                    //                             }
                    //                         cb1(null, 'step2n1');
                    //                         // TODO: figure out the return here
                    //                     });
                    //                 } // end step1n2
                    //             ],
                    //             function (err, res) {
                    //                 if (err) {
                    //                     throw err;
                    //                 }
                    //                 cb(null, 'two');
                    //             });
                    //     } // end if
                    //     else {
                    //         cb(null, 'two');
                    //     }
                    // }, // end step2B

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
                                        try {
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
                                            // added
                                            // if metadata: {inherit: wid1} then create command: {inherit: { wid1: wid}}


                                            if (level > 0) {

                                                proxyprinttodiv('Function getwidmongo recurse', key, 38);

                                                debugfn("getwidmongo before recusr", "getwidmongo", "get", "mid", getglobal("debugcolor"), getglobal("debugindent"), debugvars([1]));

                                                var x = getglobal("debugcolor") + 1;
                                                var y = getglobal("debugindent") + 1;
                                                saveglobal("debugcolor", x);
                                                saveglobal("debugindent", y);

                                                //getWidMongo(key, convertmethod, accesstoken, dtotype, rightparameters["metadata"]["method"], level, function (err, params) { 
                                                getWidMongo(key, command, rightparameters["metadata"]["method"], level, excludeset, function (err, params) {
                                                    // If error, bounce out
                                                    if (err && Object.keys(err).length > 0) {
                                                        cbMap(err, params);
                                                    } else {
                                                        proxyprinttodiv('Function getwidmongo params', params, 38);
                                                        //proxyprinttodiv('Function getwidmongo rightparameters inside II ', rightparameters, 38);

                                                        var x = getglobal("debugcolor") - 1;
                                                        var y = getglobal("debugindent") - 1;
                                                        saveglobal("debugcolor", x);
                                                        saveglobal("debugindent", y);

                                                        if (Object.keys(params).length !== 0) {
                                                            // added by roger/then taken out ###
                                                            // if (command && command.getwidmaster && command.getwidmaster.convertmethod === "nowid") {
                                                            //     delete params.wid;
                                                            //     //delete params.metadata.method;
                                                            //     delete params.metadata;
                                                            // }

                                                            // added
                                                            if (params.command && params.command.inherit) {
                                                                for (var eachinherit in params.command.inherit) {
                                                                    parameterobject.command.inherit.push(params.command.inherit[eachinherit])
                                                                }
                                                                // ### above added below taken away roger
                                                                //extend(true, parameterobject.command.inherit, params.command.inherit);
                                                                // if (params.command.inherit instanceof Array) {
                                                                //     for (eachinherit in params.command.inherit) {
                                                                //         parameterobject.command.inherit.push(params.command.inherit[eachinherit])
                                                                //         }
                                                                //     }
                                                                // else { // this one shoiuld be impossible
                                                                //     parameterobject.command.inherit.push(params.command.inherit)
                                                                //     }
                                                            }
                                                            if (params.command && params.command.deepdtolist) {
                                                                extend(true, parameterobject.command.deepdtolist, params.command.deepdtolist);
                                                            }
                                                            // proxyprinttodiv("--- What i'm looking at parameterobject step1", parameterobject, 38);
                                                            // extend(true, parameterobject.command.inherit, params.command.inherit);
                                                            // proxyprinttodiv("--- What i'm looking at parameterobject step2", parameterobject, 38);
                                                            // //delete params.command


                                                            proxyprinttodiv('Function getwidmongo rightparameters before ', rightparameters, 38);
                                                            //if ((rightparameters["data"]) && (rightparameters["data"]["linktype"]) &&
                                                            //    (rightparameters["data"]["linktype"] === "onetomany") && (command.convertmethod !== "dto"))  {

                                                            //                                    if ((command) && (command.getwidmaster) && (command.getwidmaster.convertmethod === "dto")) {
                                                            //                                        parameterobject[rightparameters["metadata"]["method"]]=params;
                                                            //                                    }
                                                            //                                    else { // if not dto, i.e most of time
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
                                        } // end try
                                        catch (err) {
                                            var finalobject = createfinalobject({
                                                "result": "getWidMongo_async_nexttick"
                                            }, {}, "getWidMongo_async_nexttick", err, eachresult);
                                            console.log('** Error Caught in the getWidMongo() function in'
                                                + ' et-get.js during getWidMongo_async_nexttick ** => ' + err);
                                            console.log('** finalobject created from error => ' + JSON.stringify(finalobject));
                                            cbMap(finalobject.err, finalobject.res);
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

                            // if ((!parameterobject.command.dtolist) && (Object.keys(dtolist).length > 0)){ // create dtolist
                            //     parameterobject.command.dtolist = dtolist;
                            //     };

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

                        //     parameterobject["wid"] = "string";
                        //     parameterobject["metadata"]["method"] = "string";
                        //     var systemdto = {
                        //         "systemdto": {
                        //             "expirationdate": "string"
                        //         }
                        //     };
                        //     parameterobject = extend(true, parameterobject, systemdto);
                        //     proxyprinttodiv("--- What i'm looking at parameterobject inside system dto ---", parameterobject, 38);
                        //     parameterobject.command.dtolist['systemdto'] = 'onetoone';
                        //     parameterobject.command.deepdtolist['systemdto'] = 'onetoone';
                        //     cb(null, 'four');
                        // } // end if 
                        // else {
                        //     proxyprinttodiv("--- What i'm looking at parameterobject step3 ---", parameterobject, 38);
                        //     debugfn("getwidmongo end step4", "getwidmongo", "get", "end", getglobal("debugcolor"), getglobal("debugindent"), debugvars([1]));
                        //     cb(null, 'four');

                                // save widName for systemdto check, this keeps it from endlessly looping

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
                                        "getwidmaster.inheritflag": "true"   // changed from false
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

                                debugfn("getwidmongo end step4", "getwidmongo", "get", "end", getglobal("debugcolor"), getglobal("debugindent"), debugvars([1]));
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
                        try {
                            if (Object.keys(parameterobject.command).length === 0) {
                                delete parameterobject.command
                            }
                            debugfn("getWidMongo code generator", "getWidMongo", "get", "code", 2, 1, {
                                0: inbound_parameters,
                                1: parameterobject
                            }, 6);

                            callback(null, parameterobject);
                        } // end try
                        catch (err) {
                            var finalobject = createfinalobject({"result": "getWidMongo_end_async"}, {}, "getWidMongo_end_async", err, results);
                            console.log('** Error Caught in the getWidMongo() function in et-get.js during getWidMongo_end_async ** => ' + err);
                            console.log('** finalobject created from error => ' + JSON.stringify(finalobject));
                            callback(finalobject.err, finalobject.res);
                        }
                    }
                });
        } // end try
        catch (err) {
            var finalobject = createfinalobject({"result": "getWidMongo"}, {}, "getWidMongo", err, inbound_parameters);
            console.log('** Error Caught in the getWidMongo() function in et-get.js ** => ' + err);
            console.log('** finalobject created from error => ' + JSON.stringify(finalobject));
            callback(finalobject.err, finalobject.res);
        }
    };


    exports.getclean = getclean = function getclean(resultObj, command, callback) {
        try {
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

                        if (bigdto && bigdto.command && bigdto.command.inherit && bigdto.command.inherit) {


                            listToDo = bigdto.command.inherit;
                            listToDo.reverse(); // they are processed in reverse order
                            proxyprinttodiv('<<< Get_Clean listToDo', listToDo, 38);

                            proxyprinttodiv('<<< Get_Clean bigdto.command', bigdto.command, 38);
                            proxyprinttodiv('<<< Get_Clean dtoobject.command', dtoobject.command, 38);
                            proxyprinttodiv('<<< Get_CLean before call to execute command >>>', command, 38);

                            // ### I do not think these are needed
                            delete dtoobject.command;
                            delete bigdto.command; // added by joe to delete the command obj so we do not get a blank command object after deep filter

                            var wid = extend(true, {}, resultObj.wid);
                            var mm = extend(true, {}, resultObj.metadata);

                            if (listToDo.length > 0 && command && command.getwidmaster && command.getwidmaster.inheritflag === "true") {
                                proxyprinttodiv('the starting value of resultObj', resultObj, 38);
                                async.mapSeries(listToDo, function (eachresult, cbMap) {

                                    async.nextTick(function () {
                                        try {

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
                                        } // end try
                                        catch (err) {
                                            var finalobject = createfinalobject({
                                                "result": "getclean_async_nexttick"
                                            }, {}, "getclean_async_nexttick", err, inbound_parameters);
                                            console.log('** Error Caught in the getclean() function in et-get.js during getclean_async_nexttick ** => ' + err);
                                            console.log('** finalobject created from error => ' + JSON.stringify(finalobject));
                                            cbMap(finalobject.err, finalobject.res);
                                        }
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



                    proxyprinttodiv('<<< Get_Clean before call back beforedeepfilter resultObj >>>', resultObj, 38);
                    proxyprinttodiv('<<< Get_Clean before call back beforedeepfilter bigdto >>>', bigdto, 38);
                    proxyprinttodiv('<<< Get_Clean before call back beforedeepfilter dtoobject >>>', dtoobject, 38);
                    proxyprinttodiv('<<< Get_Clean before call back beforedeepfilter command >>>', command, 38);

                    if (!command) {
                        command = {};
                    }
                    if (!command.command) {
                        command.command = {};
                    }
                    if (!command.command.deepfilter) {
                        command.command.deepfilter = {};
                    }
                    if (!command.command.deepfilter.convert) {
                        command.command.deepfilter.convert = true;
                    }

                    if (!command.command.deepfilter.keepaddthis) {
                        command.command.deepfilter.keepaddthis = false;
                    }

                    deepfilter(resultObj, dtoobject, command, function (err, resultObj) { // changed by joe
                        // If error, bounce out

                        proxyprinttodiv('resultObj after special getwidmaster after deepfilter 7', resultObj, 38);

                        if (err && Object.keys(err).length > 0) {
                            callback(err, resultObj);
                        } else {
                            try {
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

                            } // end try
                            catch (err) {
                                var finalobject = createfinalobject({"result": "getclean_deepfilter"}, {}, "getclean_deepfilter", err, resultObj);
                                console.log('** Error Caught in the getclean() function in et-get.js during getclean_deepfilter ** => ' + err);
                                console.log('** finalobject created from error => ' + JSON.stringify(finalobject));
                                callback(finalobject.err, finalobject.res);
                            }
                        }
                    });
                }
            ); // end series
        } // end try
        catch (err) {
            var finalobject = createfinalobject({"result": "getclean"}, {}, "getclean", err, inbound_parameters);
            console.log('** Error Caught in the getclean() function in et-get.js ** => ' + err);
            console.log('** finalobject created from error => ' + JSON.stringify(finalobject));
            callback(finalobject.err, finalobject.res);
        }
    }



    })(typeof window == "undefined" ? global : window);


