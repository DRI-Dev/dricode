// copyright (c) 2014 DRI

    (function (window) {
    // exports.updatewid = window.updatewid = updatewid = function updatewid(inputObject, callback) {
    //     //try {
    //     var originalarguments = {};
    //     extend(true, originalarguments, inputObject);
    //     proxyprinttodiv('Function updatewid inputObject', inputObject,12);
    //     // getwidmaster environment
    //     // get collection and db
    //     // call add with those
    //     var command = {};
    //     if (inputObject.command) {
    //         command=inputObject.command;
    //         delete inputObject.command;
    //     }

    //     // convert to dri format before saving
    //     proxyprinttodiv('Function updatewid inputObject', converttodriformat(inputObject, command),12);
    //     updatedatastore(converttodriformat(inputObject, command), command, function (err, results) {
    //         // If error, bounce out
    //         if (err && Object.keys(err).length > 0) {
    //             callback(err, results);
    //         } else {
    //             try {
    //                 proxyprinttodiv('Function updatewid in : x', results,12);
    //                 callback(null, results);
    //             } // end try
    //             catch (err) {
    //                 var finalobject =
    //                     createfinalobject({
    //                         "result": "updatedatastore"
    //                     }, {}, "updatedatastore", err, inbound_parameters);
    //                 callback(finalobject.err, finalobject.res);
    //             }
    //         } // end else
    //     });
    //     // } // end try
    //     // catch (err) {
    //     //     var finalobject =
    //     //         createfinalobject({
    //     //             "result": "offlineupdatewid"
    //     //         }, {}, "offlineupdatewid", err, inbound_parameters);
    //     //     callback(finalobject.err, finalobject.res);
    //     // }
    // };


    // exports.updatewid = window.updatewid = updatewid = function updatewid(inputObject, callback) {
    //     try {
    //         // var originalarguments=arguments;
    //         // var executionid = new Date();
    //         var originalarguments = {};
    //         extend(true, originalarguments, inputObject);

    //         // convert to dri format before saving
    //         addtomongo(converttodriformat(inputObject), function (err, results) {

    //             // If error, bounce out
    //             if (err && Object.keys(err).length > 0) {
    //                 callback(err, results);
    //             } else {
    //                 try {
    //                     proxyprinttodiv('Function updatewid in : x', results, 10);
    //                     debugfn("updatewid code generator", "updatewid", "", "code", 2, 1, {
    //                         0: originalarguments,
    //                         1: results
    //                         // 2: executionid
    //                     }, 6);
    //                     // callback({}, results);
    //                     callback(null, results);

    //                 } catch (err) {
    //                     var finalobject = createfinalobject({"result": "updatewid"}, {}, "updatewid", err, inbound_parameters);
    //                     callback(finalobject.err, finalobject.res);
    //                 }
    //             }
    //         });
    //     } catch (err) {
    //         //callback ({"status":"there was an error"}, {"try":"was caught"});        
    //         var finalobject = createfinalobject({"result": "updatewid"}, {}, "updatewid", err, inbound_parameters);
    //         callback(finalobject.err, finalobject.res);
    //     }
    // };

    exports.addwidmaster = addwidmaster = function addwidmaster(object, callback) {
        try {
            var inbound_parameters_102 = JSON.parse(JSON.stringify(arguments));
            object = ConvertFromDOTdri(object);
            proxyprinttodiv("addwidmaster before", object, 17);

            var filter_data = getcommand(object, {
                "command": {
                    "datastore": config.configuration.defaultdatastore,
                    "collection":config.configuration.defaultcollection,
                    "keycollection": config.configuration.defaultcollection + "key",
                    "db":config.configuration.defaultdb,
                    "databasetable":config.configuration.defaultdatabasetable,
                    "convertmethod":"toobject"
                }
            }, {
                "command": {
                    "datastore": "",
                    "collection":"",
                    "keycollection":"",
                    "db":"",
                    "databasetable":"",
                    "convertmethod":""
                }
            },
            true);
            proxyprinttodiv("addwidmaster filter_data", filter_data, 17);
            var _object = filter_data.output;
            var command = filter_data.filteredobject;
            var _dto_object;

            proxyprinttodiv("addwidmaster _object", _object, 17);
            cleanadd(_object, _dto_object, command, function (err, res) {
                // If error, bounce out
                if (err && Object.keys(err).length > 0) {
                    callback(err, res);
                } else {
                    try {
                        _object = res.obj;
                        _dto_object = res.dtoobj;
                        proxyprinttodiv("addwidmaster after clean obj", _object, 17);
                        proxyprinttodiv("addwidmaster after clean dto", _dto_object, 17);
                        addwidobject(_object, _dto_object, null, null, null, command, function (err, res) {
                            // If error, bounce out
                            if (err && Object.keys(err).length > 0) {
                                callback(err, res);
                            } else {
                                try {
//                                    res = pack_up_params(res, command, "addwidmaster");
                                    callback(null, _object);
                                }
                                catch (err) {
                                    var finalobject = createfinalobject({"result": "addwidmaster_cleanadd_addwidobject"}, {}, "addwidmaster_cleanadd_addwidobject", err, res);
                                    callback(finalobject.err, finalobject.res);
                                }
                            }
                        });
                    } // end try
                    catch (err) {
                        var finalobject = createfinalobject({"result": "addwidmaster_cleanadd"}, {}, "addwidmaster_cleanadd", err, res);
                        callback(finalobject.err, finalobject.res);
                    }
                } // end else
            });
        }
        catch (err) {
            var finalobject = createfinalobject({"result": "addwidmaster"}, {}, "addwidmaster", err, inbound_parameters_102);
            callback(finalobject.err, finalobject.res);
        }
    };

    // exports.addwidmaster = addwidmaster = function addwidmaster(object, callback) {
    //     var inbound_parameters = {};
    //     inbound_parameters = JSON.parse(JSON.stringify(arguments));


    //     var _command = {};

    //     // Test for lowering parameters
    //     tolowerparameters(object, {
    //                                 "command":"",

    //                                 }, false, _object, _command);


    //     console.log('&&& _object\n' + JSON.stringify(_object, "-", 4));
    //     console.log('&&& _command\n' + JSON.stringify(_command, "-", 4));

    //     var _object = ConvertFromDOTdri(object);

    //     var _dto_object;

    //     var command = object.command;
    //     delete object.command;

    //     proxyprinttodiv("addwidmaster before clean", _object, 17);

    //     cleanadd (_object, _dto_object, command, function (err, res) {
    //         _object = res.obj;
    //         _dto_object = res.dtoobj;

    //         proxyprinttodiv("addwidmaster after clean object", _object, 17);
    //         proxyprinttodiv("addwidmaster after clean", _dto_object, 17);

    //         addwidobject(_object, _dto_object, command, function (err, res) {
    //             callback(err, res);
    //         });
    //     });
    // }


    exports.cleanadd = cleanadd = function cleanadd(object, dtoobject, command, callback) {
        try {
            var inbound_parameters = {};
            extend (true, inbound_parameters, object);
            extend (true, inbound_parameters, dtoobject);

            getdtoobject(object, command, function (err, res) {

                if (err && Object.keys(err).length > 0) {
                    callback(err, res);
                } else {
                    try {
                        dtoobject = res;
                        proxyprinttodiv("cleanadd getdtoobject res-------", dtoobject, 17);

                        var dto_to_get;
                        var big_dto = {};
                        var result_obj = {};
                        var output = {};

                        if (!command) {
                            command = {};
                        }
                        if (!command.deepfilter) {
                            command.deepfilter = {};
                        }
                        if (!command.deepfilter.convert) {
                            command.deepfilter.convert = false;
                        }

                        output.obj = object;
                        output.dtoobj = dtoobject;
                        dto_to_get = dtoobject['metadata']['method'];

                        if (dto_to_get !== "string") {
                            proxyprinttodiv("cleanadd dto_to_get", dto_to_get, 17);
                            execute({
                                "executethis": "getwidmaster",
                                "wid": dto_to_get,
                                "command.getwidmaster.execute": "ConvertFromDOTdri",
                                "command.getwidmaster.convertmethod": "dto"
                            }, function (err, res) {

                                if (err && Object.keys(err).length > 0) {
                                    callback(err, res);
                                } else {
                                    try {
                                        proxyprinttodiv("cleanadd after execute", res, 17);

                                        big_dto = res[0];
                                        result_obj = insertbydtotype(object, big_dto, {}, command); // this fn in et-get
                                        proxyprinttodiv("cleanadd after insertbydtotype", result_obj, 17);
                                        //command.deepfilter.convert="fromstring"; not needed since done in addwid anyway

                                        deepfilter(result_obj, dtoobject, command, function (err, result_obj) {
                                            // If error, bounce out
                                            if (err && Object.keys(err).length > 0) {
                                                callback(err, result_obj);
                                            } else {
                                                try {
                                                    output.obj = result_obj;
                                                    output.dtoobj = dtoobject;
                                                    callback(null, output);
                                                } // end try
                                                catch (err) {
                                                    var finalobject = createfinalobject({
                                                        "result": "cleanadd_deefilter"
                                                    }, {}, "cleanadd_deepfilter", err, result_obj);
                                                    callback(finalobject.err, finalobject.res);
                                                }
                                            }
                                        });
                                    } // end try
                                    catch (err) {
                                        var finalobject = createfinalobject({
                                            "result": "cleanadd_execute"
                                        }, {}, "cleanadd_execute", err, res);
                                        callback(finalobject.err, finalobject.res);
                                    }
                                } // end else
                            });// end execute
                        } else { // if ==string
                            deepfilter(object, dtoobject, command, function (err, result_obj) {
                                output.obj = result_obj;
                                output.dtoobj = dtoobject;
                                callback(null, output);
                            });
                        } //  end if (dto_to_get !== "string") 
                    } // end try
                    catch (err) {
                        var finalobject = createfinalobject({
                            "result": "cleanadd"
                        }, {}, "cleanadd", err, inbound_parameters);
                        callback(finalobject.err, finalobject.res);
                    }
                } // end else
            }); // end getdtoobject
        } // end try
        catch (err) {
            var finalobject = createfinalobject({
                "result": "cleanadd"
            }, {}, "cleanadd", err, inbound_parameters);
            callback(finalobject.err, finalobject.res);
        }
    };

    exports.addwidobject = addwidobject = function addwidobject(input, inputdto, parentwid, parentmethod, relationshiptype, command, callback) {
        try {
            var inbound_parameters_100 = arguments;

            proxyprinttodiv("addwidobject input input :- ", input, 17);
            proxyprinttodiv("addwidobject input inputdto :- ", inputdto, 17);
            proxyprinttodiv("addwidobject input command :- ", command, 17);

            var _parent_object = {};
            var _parent_dto = {};
            var _children_object_collection = {};
            var _children_dto_collection = {};
            var _child_object;
            var _child_dto;
            var _dto;
            var _children_dto_list = [];
            var _parent_wid;
            var _parent_method;

            // clone input and inputdto to parent object and child object

            _parent_object = JSON.parse(JSON.stringify(input));
            _parent_dto = JSON.parse(JSON.stringify(inputdto));
            //extend(true, _parent_object, input);
            //extend(true, _parent_dto, inputdto);

            // should not be necessary because addwidmaster does it
            //delete _parent_object.command;
            //delete _parent_dto.command;

            //_parent_object.command = {};
            //_parent_dto.command = {};

            // create parent by deleting all children in parent, create children adding
            if (inputdto.command && inputdto.command.dtolist) {
                proxyprinttodiv("addwidobject inputdto.command :- ", inputdto.command, 17);
                proxyprinttodiv("addwidobject inputdto.command.dtolist :- ", inputdto.command.dtolist, 17);

                for (var each_property in inputdto.command.dtolist) { // go through list of children
                    if (inputdto.command.dtolist.hasOwnProperty(each_property)) {
                        proxyprinttodiv("each_property :- ", each_property, 17);

                        _dto = {};
                        _dto["dtoname"] = each_property;
                        _dto["dtotype"] = inputdto.command.dtolist[each_property];
                        //_dto["dtotype"] = inputdto.command.deepdtolist[each_property];

                        if ((_dto.dtotype !== "jsononetomany") && (_dto.dtotype !== "jsononetoone")) { // if internal do nothing
                            _children_dto_list.push(_dto); // produces list [{booksdto: onetomany},{}]

                            //delete _parent_object[inputdto.command.dtolist[each_property]];
                            //delete _parent_dto[inputdto.command.dtolist[each_property]];
                            delete _parent_object[each_property];
                            delete _parent_dto[each_property];

                            if (input[each_property]) {
                                proxyprinttodiv("addwidobject found input[each_property] :- ", input[each_property], 17);
                                //_children_object_collection[each_property] = {};
                                //extend(true, _children_object_collection[each_property], input[each_property]);
                                _children_object_collection[each_property] = JSON.parse(JSON.stringify(input[each_property]));
                            }

                            if (inputdto[each_property]) {
                                proxyprinttodiv("addwidobject found inputdto[each_property] :- ", inputdto[each_property], 17);
                                //_children_dto_collection[each_property] = {};
                                //extend(true, _children_dto_collection[each_property], inputdto[each_property]);
                                _children_dto_collection[each_property] = JSON.parse(JSON.stringify(inputdto[each_property]));
                            }
                        } else {

                        }
                    }
                }
            }

            proxyprinttodiv("_children_object_collection :- after ", _children_object_collection, 17);
            proxyprinttodiv("_child_dto_list after", _children_dto_list, 17);
            proxyprinttodiv(" _children_dto_collection after",  _children_dto_collection, 17);

            // send the parent object and dto to addrecord
            addrecord(_parent_object, _parent_dto, parentwid, parentmethod, relationshiptype, command, function (err, res) {
                // If error, bounce out
                if (err && Object.keys(err).length > 0) {
                    callback(err, res);
                } else {
                    try {
                        proxyprinttodiv("addrecord parentobj result :- ", res, 17);

                        _parent_object = res;
                        _parent_wid = res['wid'];
                        if (res['metadata']) {
                            _parent_method = res['metadata']['method'];
                        }

                        // Sample error
                        // throw ({'my error': 'red'});

                        // iterate over the list of dto's, loading up each child and sending them to addrecord
                        async.mapSeries(_children_dto_list, function (eachchild, cbMap) {
                            async.nextTick(function () {
                                try {

                                    // new _child_object_map up, if not we can mess thing up
                                    var _child_object_map = [];

                                    proxyprinttodiv("_children_object_collection :- ", _children_object_collection, 17);
                                    proxyprinttodiv("_children_dto_list eachchild :- ", eachchild, 17);

                                    // look up child object and dto
                                    // if ((eachchild.dtotype==="onetomany" || (eachchild.dtotype==="jsononetomany")) {
                                    //     _child_dto.push(_child_dto)
                                    //     }

                                    _child_object = _children_object_collection[eachchild.dtoname];
                                    _child_dto = _children_dto_collection[eachchild.dtoname];

                                    // throw ({'my_error': 'orange'});


                                    delete _children_object_collection[eachchild.dtoname];
                                    delete _children_dto_collection[eachchild.dtoname];
                                    proxyprinttodiv("_child_dto :- ", _child_dto, 17);
                                    proxyprinttodiv("_child_object :- ", _child_object, 17);

                                    if (!isArray(_child_object)) {
                                        _child_object_map.push(_child_object);
                                    } else {
                                        _child_object_map = _child_object;
                                    }
                                    if (isArray(_child_dto)) {
                                        _child_dto = _child_dto[0]
                                    }

                                } // end try
                                catch (err) {
                                    var finalobject = createfinalobject({"result": "addwidobject_async1"}, {}, "addwidobject_async1", err, eachchild);
                                    cbMap(finalobject.err, finalobject.res);
                                    // only do this if we have a child object map - joe
                                }
                                if(_child_object_map) {

                                    async.mapSeries(_child_object_map, function (_child_object, cbMap2) {
                                        async.nextTick(function () {
                                            try {
                                                // Sample error
                                                // throw ({'my_error': 'chartruese'});

                                                //if (isArray(_child_dto)) && 
                                                //    ((eachchild.dtotype==="jsononetomany") || (eachchild.dtotype==="onetomany")) {
                                                if (_child_object && Object.keys(_child_object).length !== 0 &&
                                                    _child_dto && Object.keys(_child_dto).length !== 0) {

                                                    if (!_child_object["metadata"]) {
                                                        _child_object["metadata"] = {}
                                                    }
                                                    if (!_child_object["metadata"]["method"]) {
                                                        _child_object["metadata"]["method"] = eachchild.dtoname
                                                    }

                                                    addwidobject(_child_object, _child_dto, _parent_wid, _parent_method, eachchild.dtotype, command, function (err, res) {
                                                        // If error, bounce out
                                                        if (err && Object.keys(err).length > 0) {
                                                            cbMap2(err);
                                                        }else{
                                                            cbMap2(null);
                                                        }
                                                    });
                                                } else {
                                                    cbMap2(null);
                                                }
                                                //    }
                                            } // end try
                                            catch (err) {
                                                var finalobject = createfinalobject({"result": "addwidobject_async2"}, {}, "addwidobject_async2", err, _child_object);
                                                cbMap2(finalobject.err, finalobject.res);
                                            }
                                        })
                                    }, function (err, res) {
                                        // If error, bounce out
                                        if (err && Object.keys(err).length > 0) {
                                            cbMap(err);
                                        }else{
                                            cbMap(null);
                                        }
                                    }); //end asyc.map
                                }
                                // if (_child_object && Object.keys(_child_object).length!==0) {
                                //     if (!_child_object["metadata"]) {_child_object["metadata"]={}}
                                //     if (!_child_object["metadata"]["method"]) {_child_object["metadata"]["method"]=eachchild.dtoname}
                                //     addwidobject(_child_object, _child_dto,  _parent_wid, _parent_method, eachchild.dtotype, command, function (err, res) {
                                //         cbMap(null);
                                //     });
                                // }
                                // else { // if no data in _child_object
                                //     cbMap(null);
                                // }
                            });
                        }, function (err, res) {
                            // If error, bounce out
                            if (err && Object.keys(err).length > 0) {

                                // alert("Hi" + err);

                                callback(err, res);
                            } else {
                                try {
                                    // I'm guessing here but if we have left over children in the children collection then we recurse
                                    if (Object.keys(_children_object_collection).length !== 0) {
                                        proxyprinttodiv("addwidobject left over children -- _children_object_collection: ", _children_object_collection, 17);
                                        addwidobject(_children_object_collection, _children_dto_collection, command, function (err, res) {
                                            // If error, bounce out
                                            if (err && Object.keys(err).length > 0) {
                                                callback(err, res);
                                            } else {
                                                try {
                                                    _parent_object = res;
                                                    callback(null, _parent_object);
                                                } // end try
                                                catch (err) {
                                                    var finalobject = createfinalobject({"result": "addwidobject"}, {}, "addwidobject", err, res);
                                                    callback(finalobject.err, finalobject.res);
                                                }
                                            }
                                        });
                                    } else {
                                        callback(null, _parent_object);
                                    }
                                }
                                catch (err) {
                                    var finalobject = createfinalobject({"result": "addwidobject"}, {}, "addwidobject", err, res);
                                    callback(finalobject.err, finalobject.res);
                                }
                            } // end else
                        }); // End async map series
                    } // end try
                    catch (err) {
                        var finalobject = createfinalobject({"result": "addwidobject_addrecord_parentobj"}, {}, "addwidobject_addrecord_parentobj", err, res);
                        callback(finalobject.err, finalobject.res);
                    }
                } // end else
            });
        } // end try
        catch (err) {
            var finalobject = createfinalobject({"result": "addwidobject"}, {}, "addwidobject", err, inbound_parameters_100);
            callback(finalobject.err, finalobject.res);
        }
    };


    exports.addrecord = addrecord = function addrecord(inputrecord, dtoobject, parentwid, parentmethod, relationshiptype, command, callback) {
        try {
            var inbound_parameters_101 = JSON.parse(JSON.stringify(arguments));

            proxyprinttodiv("addrecord input inputrecord :- ", inputrecord, 17);
            proxyprinttodiv("addrecord input dtoobject :- ", dtoobject, 17);
            proxyprinttodiv("addrecord input parentwid :- ", parentwid, 17);
            proxyprinttodiv("addrecord input parentwid :- ", parentmethod, 17);
            proxyprinttodiv("addrecord input relationshiptype :- ", relationshiptype, 17);

            var relobj = {};
            var reldto = {};
            var executeobject = {};
            var parentrelationshiptype;


            // if the incoming relationship is one to one 
            async.series([
                    function step1(step1_callback) {
                        try {
                            if ((relationshiptype === "onetoone") || (relationshiptype === "manytoone")) { //|| (relationshiptype === "manytomany")

                                proxyprinttodiv("addrecord async.series fired with relationshiptype -- ", relationshiptype, 17);
                                if ((relationshiptype === "onetoone")
                                    || (relationshiptype === "manytomany")
                                    || (relationshiptype === "onetomany")
                                    )
                                {//|| (relationshiptype === "manytomany")
                                    executeobject["executethis"] = "querywid";
                                    executeobject["command"] = {"result":"queryresult"};
                                    executeobject["mongorawquery"] = {
                                        "$and": [{
                                            "data.primarywid": parentwid,
                                            "data.secondarymethod": inputrecord["metadata"]["method"]
                                        }]
                                    };
                                }

                                // Sample error
//                        throw ({'my_error': 'potatoes'});

                                if (relationshiptype === "manytoone") {
                                    executeobject["executethis"] = "querywid";
                                    executeobject["command"] = {"result":"queryresult"};
                                    executeobject["mongorawquery"] = {
                                        "$and": [{
                                            "data.primarywid": inputrecord["metadata"]["method"],
                                            "data.secondarymethod": parentwid
                                        }]
                                    };
                                }
                                execute(executeobject, function (err, widset1) {
                                    // If error, bounce out
                                    var widset=widset1[0]['queryresult'];
                                    if (!widset) {widset=[]}
                                    if (err && Object.keys(err).length > 0) {
                                        step1_callback(err, widset);
                                    } else {
                                        try {
                                            var widrecord;
                                            if ((widset.length > 0) && (relationshiptype === "onetoone")) { //|| (relationshiptype === "manytomany")
                                                for (var wid in widset[0]) {
                                                    widrecord = widset[0][wid];
                                                }
                                                relobj['wid'] = wid;
                                                inputrecord['wid'] = widrecord["secondarywid"];
                                            }
                                            step1_callback(null); // LM: Leave this null or break add
                                        }
                                        catch (err) {
                                            var finalobject = createfinalobject({"result": "addrecord_execute"}, {}, "addrecord_execute", err, widset);
                                            step1_callback(finalobject.err, finalobject.res);
                                        }
                                    }
                                });
                            } else {
                                step1_callback(null); // LM: Leave this null or break add
                            }

                        }
                        catch (err) {
                            var finalobject = createfinalobject({"result": "addrecord_execute_async_step1"}, {}, "addrecord_execute_async_step1", err, widset);
                            step1_callback(finalobject.err, finalobject.res);
                        }


                    },
                    function step2(step2_callback) {
                        // added by joe, seems roundabout but I wanted to keep sending in "" for most of the cases
                        // if(relationshiptype !== "jsononetomany") {
                        //     parentrelationshiptype = "";
                        // } else {
                        //     parentrelationshiptype = relationshiptype;
                        // }

                        //proxyprinttodiv("parentrelationshiptype: ", parentrelationshiptype, 17);

                        addwid(inputrecord, dtoobject, command, function (err, addobject) {
                            // If error, bounce out
                            if (err && Object.keys(err).length > 0) {
                                callback(err, addobject);
                            } else {
                                try {
                                    addobject = addobject[0];
                                    proxyprinttodiv("addrecord input addobject :- ", addobject, 17);

                                    reldto = {
                                        "wid": "guid",
                                        "primarywid": "string",
                                        "secondarywid": "string",
                                        "relationshiptype": "string",
                                        "linktype": "string",
                                        "primarymethod": "string",
                                        "secondarymethod": "string",
                                        "metadata": {
                                            "method": "string"
                                        }
                                    };
                                    relobj["relationshiptype"] = "attributes";
                                    relobj["metadata"] = {};
                                    relobj["metadata"]["method"] = "relationshipdto";
                                    relobj["linktype"] = relationshiptype;

                                    if (relationshiptype === "onetoone" || relationshiptype === "onetomany" || relationshiptype === "manytoone" || (relationshiptype === "manytomany")) {
                                        if (relationshiptype === "onetoone" || relationshiptype === "onetomany" || (relationshiptype === "manytomany")) {
                                            relobj["primarywid"] = parentwid;
                                            relobj["secondarywid"] = addobject['wid'];

                                            if (parentmethod)
                                                relobj["primarymethod"] = parentmethod;

                                            if (addobject["metadata"])
                                                relobj["secondarymethod"] = addobject["metadata"]["method"];
                                        } else { // if manytoone
                                            relobj["primarywid"] = parentwid;
                                            relobj["secondarywid"] = addobject['wid'];

                                            if (parentmethod)
                                                relobj["primarymethod"] = addobject["metadata"]["method"];

                                            if (addobject["metadata"])
                                                relobj["secondarymethod"] = parentmethod;
                                        }

                                        proxyprinttodiv("addrecord input addobject :-II ", addobject, 17);
                                        proxyprinttodiv("addrecord input addobject['wid'] :- ", addobject['wid'], 17);
                                        proxyprinttodiv("addrecord input relobj ", relobj, 17);

                                        addwid(relobj, reldto, command, function (err, added_relation) {
                                            // If error, bounce out
                                            if (err && Object.keys(err).length > 0) {
                                                // step2_callback(err, added_relation);
                                                step2_callback(null, added_relation);
                                            }else{
                                                //
                                                proxyprinttodiv("addrecord input added_relation :- ", added_relation, 17);
                                                step2_callback(null, addobject);
                                            }
                                        });
                                    } else {
                                        step2_callback(null, addobject);
                                    }
                                } // end try 
                                catch (err) {
                                    var finalobject = createfinalobject({"result": "addrecord$$$"}, {}, "addrecord$$$", err, addobject);
                                    step2_callback(finalobject.err, finalobject.res);
                                }
                            } // end else
                        });
                    }
                ],
                function (err, res) {
                    // If error, bounce out
                    if (err && Object.keys(err).length > 0) {
                        callback(err, res);
                    }else{
                        //
                        // res[1] is addobject from step2
                        callback(null, res[1]);
                    }
                });
        }
        catch (err) {
            var finalobject = createfinalobject({"result": "addrecord"}, {}, "addrecord", err, inbound_parameters_101);
            callback(finalobject.err, finalobject.res);
        }
    };

    // exports.addwid = addwid = function addwid(object, dtoobject, command, callback) {
    //     try {
    //         var inbound_parameters = JSON.parse(JSON.stringify(arguments));
    //         function addwid5() {
    //             object["executethis"] = "updatewid";
    //             proxyprinttodiv("addwid before updatewid ", object, 17);
    //             execute(object, function (err, res) {
    //                 // If error, bounce out
    //                 if (err && Object.keys(err).length > 0) {
    //                     callback(err, res);
    //                 }else{
    //                     // 
    //                     proxyprinttodiv("this was added", res, 17);
    //                     callback(null, res);
    //                 }
    //             });
    //         }

    //         function addwid4() {
    //             var dtolist = {};
    //             if (dtoobject.command && dtoobject.command.dtolist) {
    //                 dtolist = dtoobject.command.dtolist
    //             }
    //             proxyprinttodiv("addwid step4 dtolist", dtolist, 17);
    //             for (var dtoname in dtolist) { //
    //                 dtotype = dtolist[dtoname];
    //                 if (dtotype === "jsononetomany") {
    //                     var subobject = [];
    //                     if (object[dtoname]) {
    //                         subobject = JSON.parse(JSON.stringify(object[dtoname]));
    //                         proxyprinttodiv("addwid subobject", subobject, 17);
    //                         delete object[dtoname];
    //                         if (!currentobject[dtoname]) {
    //                             currentobject[dtoname] = [];
    //                         }
    //                         for (var eachobject in subobject) {
    //                             currentobject[dtoname].push(subobject[eachobject]);
    //                         }
    //                         proxyprinttodiv("after currentobject", currentobject, 17);
    //                     }
    //                 } else if (dtotype === "jsononetoone") {
    //                     var lastObject;
    //                     if (object[dtoname] instanceof Array) {
    //                         lastObject = object[dtoname][object[dtoname].length - 1];
    //                         // rewrite array to only contain the last item
    //                         object[dtoname] = lastObject;
    //                     }
    //                 }

    //             }

    //             object = extend(true, currentobject, object);
    //             proxyprinttodiv("after extend,, object-- ", object, 17);
    //             addwid5();
    //         }

    //         function addwid3() { // if not wid then assign new wid
    //             proxyprinttodiv("addwid step3 check for wid id object ", object, 17);
    //             if (!object["wid"]) {
    //                 getnewwid({}, function (err, res) {
    //                     // If error, bounce out
    //                     if (err && Object.keys(err).length > 0) {
    //                         callback(err, res);
    //                     }else{
    //                         // 
    //                         proxyprinttodiv("addwid getnewwid", res, 17);
    //                         object["wid"] = res;
    //                         addwid4();
    //                     }
    //                 });

    //             } else { // if wid then read wid, and extend
    //                 object["wid"] = object["wid"].toLowerCase();
    //                 proxyprinttodiv("addwid wid id existed", object, 17);
    //                 execute({
    //                     "executethis": "getwid",
    //                     "wid": object["wid"]
    //                 }, function (err, res) {
    //                     // If error, bounce out
    //                     if (err && Object.keys(err).length > 0) {
    //                         callback(err, res);
    //                     }else{
    //                         // 
    //                         if (Object.keys(res[0]).length !== 0) {
    //                             currentobject = res[0];
    //                         }
    //                         else {currentobject = {}}
    //                         proxyprinttodiv("before currentobject ", currentobject, 17);
    //                         addwid4();
    //                     }
    //                 })
    //             }
    //         }

    //         function addwid2() {

    //             if (!command) {
    //                 command = {};
    //             }
    //             if (!command.deepfilter) {
    //                 command.deepfilter = {};
    //             }
    //             command.deepfilter.convert = true;

    //             proxyprinttodiv("addwid step2 before to deepfilter object ", object, 17);
    //             proxyprinttodiv("addwid to deepfilter dto", dtoobject, 17);
    //             deepfilter(object, dtoobject, command, function (err, resultobject) {
    //                 // If error, bounce out
    //                 if (err && Object.keys(err).length > 0) {
    //                     callback(err, resultobject);
    //                 }else{
    //                     // 
    //                     object = resultobject;
    //                     proxyprinttodiv("addwid result deepfilter object", object, 17);
    //                     addwid3();

    //                 }
    //             });
    //         }



    //         // deepfilter should assign wid
    //         // do one check to getwidmaster
    //         // only add differences


    //         // start of addwid -- step 1
    //         var db = 'data';
    //         if (command && command.db) {
    //             db = command.db;
    //         }
    //         proxyprinttodiv("addwid step 1input object", object, 17);
    //         proxyprinttodiv("addwid input dtoobject", dtoobject, 17);
    //         proxyprinttodiv("addwid input command", command, 17);
    //         var inheritwidlist = [];
    //         if (dtoobject.command && dtoobject.command.inherit && dtoobject.command.inherit) {
    //             inheritwidlist.push(dtoobject.command.inherit);
    //         }
    //         var objectarray = [];
    //         var currentobject = {};

    //         proxyprinttodiv("addwid inheritwidlist", inheritwidlist, 17);
    //         if (inheritwidlist) { // do not save if in inherit
    //             async.mapSeries(inheritwidlist, function (inheritwid, cbMap) {
    //                 async.nextTick(function () {
    //                     for (var eachobject in inheritwid) {} // to get left side or Object.keys
    //                     execute({
    //                         "executethis": "getwidmaster",
    //                         "wid": eachobject, // TODO: test this fix Object.keys(eachobject)[0]
    //                         "command.getwidmaster.execute": "ConvertFromDOTdri",
    //                         "command.getwidmaster.inheritflag": "false",
    //                         "command.getwidmaster.convertmethod": "nowid"
    //                     }, function (err, res) {
    //                         // If error, bounce out
    //                         if (err && Object.keys(err).length > 0) {
    //                             // callback(err, res);
    //                             cbMap(err,"addwid2");
    //                         } else {
    //                             try {
    //                                 proxyprinttodiv("getwidmaster wid : " + inheritwid + " -- res -- ", res, 17);
    //                                 // if (Object.keys(res).length !== 0) {
    //                                 //     for (var eachprop in res) {
    //                                 //         if (object[eachprop]===res[eachprop]) {delete object[eachprop]}
    //                                 //         }
    //                                 // } else { // if no inherit then nothing to do

    //                                 // }
    //                                 if (Object.keys(res).length !== 0) {
    //                                     for (var eachprop in res) {
    //                                         if (res.hasOwnProperty(eachprop)) {
    //                                             if (object[eachprop] === res[eachprop]) {
    //                                                 delete object[eachprop];
    //                                             }
    //                                         }
    //                                     }
    //                                 } else {
    //                                     // if no inherit then nothing to do
    //                                 }
    //                                 proxyprinttodiv("object after deleting the properties--", object, 17);
    //                                 cbMap(null,"addwid2");
    //                             } // end try
    //                             catch (err) {
    //                                 //callback ({"status":"there was an error"}, {"function":"addwid"});        
    //                                 var finalobject = createfinalobject({"result": "addwid_execute"}, {}, "addwid_execute", err, res);
    //                                 cbMap(finalobject.err, finalobject.res);
    //                             }
    //                         } // end if
    //                     }); // execute
    //                 }); // next tick
    //             }, addwid2); // mapseries
    //         } else { // if no inheritwid
    //             addwid2();
    //         }
    //     } // end try
    //     catch (err) {
    //         //callback ({"status":"there was an error"}, {"function":"addwid"});        
    //         var finalobject = createfinalobject({"result": "addwid"}, {}, "addwid", err, inbound_parameters);
    //         callback(finalobject.err, finalobject.res);
    //     }
    // }; // end of addwid
exports.addwid = addwid = function addwid(object, dtoobject, command, callback) {
        // debuglevel = 18;
        // if (!object["wid"]){
        //     debuglevel = 18;
        // }
        proxyprinttodiv("addwid object", object, 18);
        proxyprinttodiv("addwid dtoobject", dtoobject, 18);
        proxyprinttodiv("addwid command", command, 18);
        var currentobject={};
        var currentinheritobject = {};
        var differenceresults = {};
        var err=null;
        var output={};
        
        // make sure getwidmaster does not return wids
        async.series([
            function step1(step1_callback) { // getwidmaster
                 proxyprinttodiv("addwid step1 getwidmaster output", output, 18);
                 if (object['wid']) {
                     execute({
                         "executethis": "getwidmaster",
                         "wid": object['wid'],
                         "command.getwidmaster.execute": "ConvertFromDOTdri",
                         "command.getwidmaster.convertmethod": "nowid"
                         }, function (err, res) {
                             proxyprinttodiv("addwid step1 getwidmaster result", res, 18);
                             var getwidmasterres = {};
                             extend(true, getwidmasterres, res[0]); // master copy
                             proxyprinttodiv("addwid step1 getwidmaster getwidmasterres", getwidmasterres, 99);
                             //res = [{"wid":"wid1","metadata":{"method":"defaultdto"},"d":44,"command":{"inherit":{"data":{"c":99, "e":98, "g":7}}}}];      
                             //res = [{"wid":"wid1","metadata":{"method":"defaultdto"},"d":4, "f":6, "command":{"inherit":{"data":{"c":99, "e":98, "g":7}}}}];       
                             if (typeof res[0] === 'object' && Object.keys(res[0]).length !== 0) {
                                // if we have inherit data
                                if (res[0].command && res[0].command.inherit && res[0].command.inherit.data) {
                                    currentinheritobject = res[0].command.inherit.data;
                                    delete res[0].command.inherit.data;
                                    var command = {"filterobject": {"type":"match"}};
                                    var matches = filterobject(getwidmasterres, currentinheritobject, command);
                                    // may need a recursive delete here
                                    if(Object.keys(matches).length > 0) {
                                        for (var key in matches) {
                                            delete getwidmasterres[key];
                                        }
                                    }
                                }
                                
                                object = extend(true, object, getwidmasterres);
                                proxyprinttodiv("addwid step1 getwidmaster getwidmasterres", object, 99);

                                step1_callback(null);

                            } else {
                                step1_callback(null);
                            }
                    }); // end execute
                
                } else { // if no object['wid']
                            step1_callback(null);
                        }
            },
            function step2(step2_callback) { // deepfilter step...should create a guid for an empty wid
                if (!command) {
                    command = {};
                }
                if (!command.deepfilter) {
                    command.deepfilter = {};
                }
                command.deepfilter.convert = true;

                if (!command.deepfilter.keepaddthis) { command.deepfilter.keepaddthis = true; }
                
                // add wid = guid if its missing in input
                if (!object.hasOwnProperty("wid")) {
                    object["wid"] = "undefined";
                }
                // set wid = guid if its missing in dto
                if(!dtoobject["wid"] || dtoobject["wid"] === 'string'){
                    dtoobject["wid"]="guid";
                }

                proxyprinttodiv("addwid step2 before deepfilter dtoobject", dtoobject, 18);
                proxyprinttodiv("addwid step2 before deepfilter object", object, 18);
                deepfilter(object, dtoobject, command, function (err, resultobject) {
                    proxyprinttodiv("addwid step2 after deepfilter resultobject", resultobject, 18);
                    // If error, bounce out
                    if (err && Object.keys(err).length > 0) {
                        step2_callback(err, resultobject);
                        }
                    else{
                        object = resultobject;
                        proxyprinttodiv("addwid result deepfilter object", object, 18);
                        step2_callback(err, resultobject)
                    }
                });
            },       
            function step3(step3_callback) { // not sure if this step is needed
                var dtolist = {};
                if (dtoobject.command && dtoobject.command.dtolist) {
                    dtolist = dtoobject.command.dtolist
                }
                proxyprinttodiv("addwid step4 dtolist", dtolist, 18);
                for (var dtoname in dtolist) { //
                    dtotype = dtolist[dtoname];
                    if (dtotype === "jsononetomany") {
                        var subobject = [];
                        if (object[dtoname]) {
                            subobject = JSON.parse(JSON.stringify(object[dtoname]));
                            proxyprinttodiv("addwid subobject", subobject, 18);
                            delete object[dtoname]
                            if (!currentobject[dtoname]) {
                                currentobject[dtoname] = [];
                            }
                            for (var eachobject in subobject) {
                                currentobject[dtoname].push(subobject[eachobject]);
                            }
                            proxyprinttodiv("after currentobject", currentobject, 18);
                        }
                    } else if (dtotype === "jsononetoone") {
                        var lastObject;
                        if (object[dtoname] instanceof Array) {
                            lastObject = object[dtoname][object[dtoname].length - 1];
                            // rewrite array to only contain the last item
                            object[dtoname] = lastObject;
                        }
                    }
                }
                //step3_callback(err, res)
                step3_callback(null);   
            },
            function step4(step4_callback) {
                object["executethis"] = "updatewid";
                // readd command params back in
                var temp = {}
                temp.command=command
                extend(true, object, temp);
                proxyprinttodiv("addwid before updatewid ", object, 18);
                execute(object, function (err, res) {
                    output = res; // or res[0]?
                    // If error, bounce out
                    if (err && Object.keys(err).length > 0) {
                        step4_callback(err, res);
                    }else{
                        // 
                        proxyprinttodiv("this was added", res, 18);
                        step4_callback(err, res);
                    }
                });
                //step4_callback(err, res)
                //step4_callback(null);
            }
        ], function (err, res) {
            callback(null, output);
        });
        //}
    }//end of addwid

    

    })(typeof window == "undefined" ? global : window);
