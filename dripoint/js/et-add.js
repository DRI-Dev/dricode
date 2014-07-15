// copyright (c) 2014 DRI

(function (window) {

    exports.addwidmaster = addwidmaster = function addwidmaster(object, callback) {
        var inbound_parameters_102 = JSON.parse(JSON.stringify(arguments));
        object = ConvertFromDOTdri(object);
        proxyprinttodiv("addwidmaster before", object, 17);

        var _object = object;
        var command = object.command;
        var _dto_object;

        // early in addwidmaster ...if mm=wid then add to command object data method:insert
        if(object && object.metadata && object.metadata.method === object.wid){
            command['datamethod']='insert';
        }

        proxyprinttodiv("addwidmaster _object", _object, 17);
        cleanadd(_object, _dto_object, command, function (err, res) {
            // If error, bounce out
            if (err && Object.keys(err).length > 0) {
                callback(err, res);
            } else {
                _object = res.obj;
                _dto_object = res.dtoobj;
                proxyprinttodiv("addwidmaster after clean obj", _object, 17);
                proxyprinttodiv("addwidmaster after clean dto", _dto_object, 17);
                addwidobject(_object, _dto_object, null, null, null, command, function (err, res) {
                    // If error, bounce out
                    proxyprinttodiv("addwidmaster after addwidobject res", res, 17);
                    if (err && Object.keys(err).length > 0) {
                        callback(err, res);
                    } else {
                        callback(null, {wid: res['wid']});
                    }
                });
            } // end else
        });
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
        var inbound_parameters = {};
        extend (true, inbound_parameters, object, dtoobject);

        proxyprinttodiv("cleanadd object", object, 17);
        //if (object.wid==="wid1") {debuglevel=38;}
        getdtoobject(object, command, function (err, res) {
            proxyprinttodiv("cleanadd object after getdtoobject", object, 17);

            if (err && Object.keys(err).length > 0) {
                callback(err, res);
            } else {
                dtoobject = res;
                proxyprinttodiv("cleanadd getdtoobject object-------", object, 17);

                var dto_to_get;
                var big_dto = {};
                var result_obj = {};
                var output = {};

                if (!command) { command = {deepfilter:{convert:false}}; }
                else if (!command.deepfilter) { command.deepfilter = {convert:false}; }
                else if (!command.deepfilter.convert) { command.deepfilter.convert = false; }

                output.obj = object;
                output.dtoobj = dtoobject;
                dto_to_get = dtoobject['metadata']['method'];

               if (dto_to_get !== "string") {
                    proxyprinttodiv("cleanadd dto_to_get", dto_to_get, 17);

                    var executeobject = {
                        "executethis": "getwidmaster",
                        "wid": dto_to_get,
                        "command.notfoundok": true,
                        "command.getwidmaster.execute": "ConvertFromDOTdri",
                        "command.getwidmaster.convertmethod": "dto",
                        "command.executetype":"series"
                    };

                    proxyprinttodiv("cleanadd executeobject", executeobject, 17, true);
                   
                    var env = new DriEnvironment(command.environment);                   
                    env.execute(executeobject, function (err, res) {
                        if (err && err.errorname === "failnotfound") { err=null; res={}; }

                        if (err && Object.keys(err).length > 0) {
                            callback(err, res);
                        } else {
                            proxyprinttodiv("cleanadd after execute", res, 17);

                            big_dto = res;
                            result_obj = insertbydtotype(object, big_dto, {}, command); // this fn in et-get
                            
                            proxyprinttodiv("cleanadd after insertbydtotype", result_obj, 17);

                            deepfilter(result_obj, dtoobject, command, function (err, result_obj) {
                                // If error, bounce out
                                if (err && Object.keys(err).length > 0) {
                                    callback(err, result_obj);
                                } else {
                                    output.obj = result_obj;
                                    output.dtoobj = dtoobject;
                                    proxyprinttodiv("cleanadd getdtoobject res------- if ", dtoobject, 17);
                                    callback(null, output);
                                }
                            });
                        } // end else
                    });// end execute
                } else { // if ==string
                    proxyprinttodiv("cleanadd command", command, 17);
                    proxyprinttodiv("cleanadd getdtoobject object------- else", object, 17);
                    proxyprinttodiv("cleanadd getdtoobject dtoobject------- else", dtoobject, 17);
                    deepfilter(object, dtoobject, command, function (err, result_obj) {
                        proxyprinttodiv("cleanadd getdtoobject result_obj------- else", result_obj, 17);
                        output.obj = result_obj;
                        output.dtoobj = dtoobject;
                        callback(null, output);
                    });
                } //  end if (dto_to_get !== "string")
            } // end else
        }); // end getdtoobject
    };

    exports.addwidobject = addwidobject = function addwidobject(input, inputdto, parentwid, parentmethod, relationshiptype, command, callback) {
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
                proxyprinttodiv("addrecord parentobj result :- ", res, 17);
                // console.log(" ------------ "+ JSON.stringify(res))
                var _parent_wid =  _parent_object['wid'];
                if ( _parent_object['metadata']) { _parent_method =  _parent_object['metadata']['method']; }

                // iterate over the list of dto's, loading up each child and sending them to addrecord
                async.mapSeries(_children_dto_list, function (eachchild, cbMap) {
                    async.nextTick(function () {
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

                        delete _children_object_collection[eachchild.dtoname];
                        delete _children_dto_collection[eachchild.dtoname];
                        proxyprinttodiv("_child_dto :- ", _child_dto, 17);
                        proxyprinttodiv("_child_object :- ", _child_object, 17);

                        if (!isArray(_child_object)) { _child_object_map.push(_child_object); }
                        else { _child_object_map = _child_object; }
                        
                        if (isArray(_child_dto)) { _child_dto = _child_dto[0]; }
                        
                        if(_child_object_map) {
                            async.mapSeries(_child_object_map, function (_child_object, cbMap2) {
                                async.nextTick(function () {
                                    //if (isArray(_child_dto)) &&
                                    //    ((eachchild.dtotype==="jsononetomany") || (eachchild.dtotype==="onetomany")) {
                                    if (_child_object && Object.keys(_child_object).length !== 0 &&
                                        _child_dto && Object.keys(_child_dto).length !== 0) {

                                        if (!_child_object["metadata"]) {
                                            _child_object["metadata"] = {};
                                        }
                                        if (!_child_object["metadata"]["method"]) {
                                            _child_object["metadata"]["method"] = eachchild.dtoname;
                                            // *** Adding parent wid data to child wid ***
                                            if (!_child_object["metadata"]["parentwid"]) {
                                                _child_object["metadata"]["parentwid"] = {};
                                            }

                                            _child_object["metadata"]["parentwid"][_parent_wid] = _parent_method;

                                            if(_parent_object["metadata"] && _parent_object["metadata"]["parentwid"]) {
                                              _child_object["metadata"]["parentwid"] = extend(true, _parent_object["metadata"]["parentwid"], _child_object["metadata"]["parentwid"]);
                                            }
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
                        callback(err, res);
                    } else {
                        // I'm guessing here but if we have left over children in the children collection then we recurse
                        if (Object.keys(_children_object_collection).length !== 0) {
                            proxyprinttodiv("addwidobject left over children -- _children_object_collection: ", _children_object_collection, 17);
                            addwidobject(_children_object_collection, _children_dto_collection, command, function (err, res) {
                                // If error, bounce out
                                if (err && Object.keys(err).length > 0) {
                                    callback(err, res);
                                } else {
                                    _parent_object = res;
                                    callback(null, _parent_object);
                                }
                            });
                        } else {
                            callback(null, _parent_object);
                        }
                    } // end else
                }); // End async map series
            } // end else
        });
    };


    exports.addrecord = addrecord = function addrecord(inputrecord, dtoobject, parentwid, parentmethod, relationshiptype, command, callback) {
        var inbound_parameters_101 = JSON.parse(JSON.stringify(arguments));

        proxyprinttodiv("addrecord input inputrecord :- ", inputrecord, 17);
        proxyprinttodiv("addrecord input dtoobject :- ", dtoobject, 17);
        proxyprinttodiv("addrecord input parentwid :- ", parentwid, 17);
        proxyprinttodiv("addrecord input parentwid :- ", parentmethod, 17);
        proxyprinttodiv("addrecord input relationshiptype :- ", relationshiptype, 17);

        var relobj = {};
        var currentrelationshipobj=null;
        var reldto = {};
        var executeobject = {};

        // if the incoming relationship is one to one
        async.series([
                function step1(step1_callback) {
                    if ((parentwid && inputrecord.wid) || (relationshiptype === "onetoone") || (relationshiptype === "manytoone")) { //|| (relationshiptype === "manytomany")

                        if (parentwid && inputrecord.wid) {
                            //|| (relationshiptype === "manytomany")
                            executeobject["executethis"] = "querywid";
                            executeobject["command"] = {"result":"queryresult","notfoundok":true};
                            executeobject["mongorawquery"] = {
                                "$and": [{
                                    "data.primarywid": parentwid,
                                    "data.secondarywid": inputrecord.wid
                                }]
                            };
                        }
                        
                        proxyprinttodiv("addrecord async.series fired with relationshiptype -- ", relationshiptype, 17);
                        if (!executeobject && ((relationshiptype === "onetoone")
                            //|| (relationshiptype === "manytomany")
                            || (relationshiptype === "onetomany")
                            ))
                        {//|| (relationshiptype === "manytomany")
                            executeobject["executethis"] = "querywid";
                            executeobject["command"] = {"result":"queryresult","notfoundok":true};
                            executeobject["mongorawquery"] = {
                                "$and": [{
                                    "data.primarywid": parentwid,
                                    "data.secondarymethod": inputrecord["metadata"]["method"]
                                }]
                            };
                        }

                        if (!executeobject && (relationshiptype === "manytoone")) {
                            executeobject = {
                                executethis: "querywid",
                                command: {
                                    "notfoundok": true,
                                    "result":"queryresult",
                                    "executetype":"series"
                                },
                                mongorawquery: {
                                    "$and": [{
                                        "data.primarymethod": inputrecord["metadata"]["method"],
                                        //"data.primarywid": inputrecord["metadata"]["method"],
                                        "data.secondarywid": parentwid
                                        //"data.secondarymethod": parentwid
                                    }]
                                }
                            };
                        }

                        //var env = new DriEnvironment(inputrecord.command.environment);
                        var env = new DriEnvironment(command.environment);
                        env.execute(executeobject, function (err, widset1) {
                            if (err && err.errorname === "failnotfound") { err=null; widset1={"queryresult":[]}; }
                            // If error, bounce out                            
                            if (err && Object.keys(err).length > 0) {
                                step1_callback(err, widset1);
                            } else {
                                var widset=widset1['queryresult'][0];
                                if (widset) {
                                    for (wid in widset) { // really should only be one record
                                        currentrelationshipobj = widset[wid];
                                    }
                                    step1_callback(null);
                                }
                                else {
                                    step1_callback(null); 
                                }

                                // currentrelationshipobj=widset;
                                // var widrecord;
                                // var wid
                                // if ((widset.length > 0)) { //|| && (relationshiptype === "onetoone")(relationshiptype === "manytomany")
                                //     for (wid in widset[0]) { // really should only be one record
                                //         widrecord = widset[0][wid];
                                //     }
                                // relobj['wid'] = wid;
                                // if (relationshiptype === "manytoone") {
                                //     currentrelwid = widrecord["primarywid"];
                                //     }
                                // if (relationshiptype === "onetoone") {
                                //     currentrelwid = widrecord["secondarywid"];
                                //     }
                                // }
                                // step1_callback(null); // LM: Leave this null or break add
                            }
                        });
                    } else {
                        step1_callback(null); // LM: Leave this null or break add
                    }
                },
                function step2(step2_callback) {
                    addwid(inputrecord, dtoobject, command, function (err, res) {
                        res = res || {};
                        // If error, bounce out
                        if (err && Object.keys(err).length > 0) {
                            step2_callback(err, addobject);
                        } else {
                            var addobject = inputrecord; // get copy of what was added from input recrod
                            addobject['wid'] = res['wid']; // get wid added from actual result
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

                                    if (parentmethod) { relobj["primarymethod"] = parentmethod; }
                                    if (addobject["metadata"]) { relobj["secondarymethod"] = addobject["metadata"]["method"]; }                                    
                                } else { // if manytoone
                                    relobj["primarywid"] = parentwid;
                                    relobj["secondarywid"] = addobject['wid'];

                                    if (parentmethod) { relobj["primarymethod"] = addobject["metadata"]["method"]; }

                                    if (addobject["metadata"]) { relobj["secondarymethod"] = parentmethod; }
                                }

                                proxyprinttodiv("addrecord input addobject :-II ", addobject, 17);
                                proxyprinttodiv("addrecord input addobject['wid'] :- ", addobject['wid'], 17);
                                proxyprinttodiv("addrecord input relobj ", relobj, 17);

                                if (currentrelationshipobj) { relobj.wid = currentrelationshipobj.wid }
                                
                                if (hashobj(currentrelationshipobj)===hashobj(relobj)) { // if objects are the same
                                    step2_callback(null); // then do not save
                                } else {
                                    addwid(relobj, reldto, command, function (err, added_relation) {
                                        // If error, bounce out
                                        if (err && Object.keys(err).length > 0) {
                                            step2_callback(null, added_relation);
                                        } else {
                                            proxyprinttodiv("addrecord input added_relation :- ", added_relation, 17);
                                            step2_callback(null, addobject);
                                        }
                                    });
                                } // else not hash
                            } else {
                                step2_callback(null, addobject);
                            }
                        } // end else
                    });
                }
            ],
            function (err, res) {
                // If error, bounce out
                if (err && Object.keys(err).length > 0) {
                    callback(err, res);
                } else {
                    // res[1] is addobject from step2
                    callback(null, res[1]);
                }
            });
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
        // if (!object["wid"]){
        //     debuglevel = 18;
        // }
        proxyprinttodiv("addwid object", object, 18);
        proxyprinttodiv("addwid dtoobject", dtoobject, 18);
        proxyprinttodiv("addwid object", object, 18);
        proxyprinttodiv("addwid dtoobject", dtoobject, 18);
        proxyprinttodiv("addwid command", command, 18);
    
        var currentobject={},
            currentinheritobject = {},
            differenceresults = {},
            err=null,
            output={};
        
        // make sure getwidmaster does not return wids
        async.series([
            function step1(step1_callback) { // getwidmaster
                 proxyprinttodiv("addwid step1 getwidmaster output", output, 17);
                 if (object['wid']) {
                        var executeobject={
                            "executethis": "getwidmaster",
                            "wid": object['wid'],
                            "command": {
                                "notfoundok": true,
                                "executetype":"series",
                                "getwidmaster": {
                                    "execute": "ConvertFromDOTdri",
                                    "convertmethod": "nowid"
                                }
                            }
                        };

                        var env = new DriEnvironment(command.environment);

                        proxyprinttodiv("addwid step1 executeobject", executeobject, 17, true);
                        proxyprinttodiv("addwid step1 env", env, 17, true);

                        env.execute(executeobject, function (err, res) {
                            if (err && err.errorname === "failnotfound") { err=null; res={}; }

                             proxyprinttodiv("addwid step1 getwidmaster result", res, 18);
                             var getwidmasterres = extend(true, {}, res); // master copy

                             proxyprinttodiv("addwid step1 getwidmaster getwidmasterres", getwidmasterres, 18);
                             //res = [{"wid":"wid1","metadata":{"method":"defaultdto"},"d":44,"command":{"inherit":{"data":{"c":17, "e":98, "g":7}}}}];      
                             //res = [{"wid":"wid1","metadata":{"method":"defaultdto"},"d":4, "f":6, "command":{"inherit":{"data":{"c":17, "e":98, "g":7}}}}];       
                             if (res !== null && typeof res === 'object' && Object.keys(res).length !== 0) {
                                // if we have inherit data
                                if (res.command && res.command.inherit && res.command.inherit.data) {
                                    currentinheritobject = res.command.inherit.data;
                                    delete res.command.inherit.data;
                                    //var command = {"filterobject": {"type":"match"}};
                                    var matches = compareobjects(getwidmasterres, currentinheritobject, "equal").andobj;

                                    proxyprinttodiv("compareobjects return -- matches", matches, 18);

                                    // may need a recursive delete here
                                    if(Object.keys(matches).length > 0) {
                                        for (var key in matches) {
                                            delete getwidmasterres[key];
                                        }
                                    }
                                }
                                
                                // object = extend(true, object, getwidmasterres); // wrong order
                                object = extend(true, {}, getwidmasterres, object);
                                proxyprinttodiv("addwid step1 getwidmaster getwidmasterres", object, 18);

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
                if (!command) { command = {}; }
                if (!command.deepfilter) { command.deepfilter = {}; }

                command.deepfilter.convert = true;

                // if (!command.deepfilter.keepaddthis) { command.deepfilter.keepaddthis = true; }
                
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
                    } else{
                        object = resultobject;
                        proxyprinttodiv("addwid result deepfilter object", object, 18);
                        step2_callback(err, resultobject);
                    }
                });
            },       
            function step3(step3_callback) { // not sure if this step is needed
                var dtolist = {};
                if (dtoobject.command && dtoobject.command.dtolist) {
                    dtolist = dtoobject.command.dtolist;
                }
                proxyprinttodiv("addwid step4 dtolist", dtolist, 18);
                for (var dtoname in dtolist) { //
                    var dtotype = dtolist[dtoname];
                    if (dtotype === "jsononetomany") {
                        var subobject = [];
                        if (object[dtoname]) {
                            subobject = JSON.parse(JSON.stringify(object[dtoname]));

                            proxyprinttodiv("addwid subobject", subobject, 18);

                            delete object[dtoname];
                            if (!currentobject[dtoname]) { currentobject[dtoname] = []; }

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
                delete command.deepfilter.convert;
                object["executethis"] = "updatewid";
                object.command.executetype = "series";
                // readd command params back in
                var tempcmd={};
                // getcommmand(inputobj, defaultobj, filterable, shouldremovefilterfrominputflag)
                tempcmd.command=command;
                extend(true, object, tempcmd);
                proxyprinttodiv("addwid before updatewid ", object, 18);

                var env = new DriEnvironment(command.environment);

                env.execute(object, function (err, res) {
                    //console.log(" ^^^^^ "+ JSON.stringify(res))
                    output = res; // or res[0]?
                    // If error, bounce out
                    if (err && Object.keys(err).length > 0) {
                        step4_callback(err, res);
                    } else {
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
    };//end of addwid
})(typeof window == "undefined" ? global : window);
