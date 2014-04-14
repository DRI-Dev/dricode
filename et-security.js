// copyright (c) 2014 DRI
(function (window) {

        // test to see if a call to getwidmaster gets passed through security check
        exports.testauth = testauth = function testauth(inboundparams, callback) {
            debuglevel = 39;
            proxyprinttodiv('testauth inboundparams ', inboundparams, 39);
            var environment;
            environment = {};
            environment['ac'] = 'rogerac';
            environment['mygroup'] = ''; //set account to account of ac if no account
            environment['myphone'] = '9873838958';
            environment['actiongroup'] = 'allactions';
            environment['dbgroup'] = 'data';
            environment['collection'] = 'maincollection';
            environment['server'] = 'server1';
            environment['datastore'] = 'datastore1';

            var request = {};
            request['command'] = {};
            request['command']['environment'] = environment;

            request['executethis'] = 'ettestag1';

            async.series([

                function (cb1) {
                    // create all DTOs for security
                    createalldtos({}, function (err, res) {
                        cb1(null);
                    });
                },
                function (cb1) {
                    // create all data 
                    execute([{
                        // default actiongroupdto
                        "executethis": "addwidmaster",
                        "wid": "actiongroupdtodefault",
                        "metadata.method": "actiongroupdto",
                        "actiongroupname": "actiongroupdtodefault",
                        "executeactiondto.actiondto.serveractiondto": "defaultserveractiondto",
                        "executeactiondto.actiondto.localactiondto": "defaultlocalactiondto",
                        "getactiondto.actiondto.serveractiondto": "defaultserveractiondto",
                        "getactiondto.actiondto.localactiondto": "defaultlocalactiondto",
                        "editactiondto.actiondto.serveractiondto": "defaultserveractiondto",
                        "editactiondto.actiondto.localactiondto": "defaultlocalactiondto",
                        "deleteactiondto.actiondto.serveractiondto": "defaultserveractiondto",
                        "deleteactiondto.actiondto.localactiondto": "defaultlocalactiondto"
                    }, {
                        // default permissiondto
                        "executethis": "addwidmaster",
                        "wid": "permissiondtodefault",
                        "metadata.method": "permissiondto",
                        "metadata.system.creator": "string",
                        "level": "string",
                        // "actiongroupdto.wid": "actiongroupdtodefault",
                        "db": "data",
                        "collection": "maincollection"
                    }, {
                        // Create the userdto
                        "executethis": "addwidmaster",
                        "metadata.method": "userdto",
                        "widname": "userdtodefault",
                        "wid": "defaultuser",
                        "fname": "1",
                        "lname": "2",
                        "phone": "3",
                        "email": "4",
                        "address": "5",
                        "address2": "6",
                        "city": "7",
                        "state": "8",
                        "zip": "9",
                        "country": "10",
                        "wid": "testuser",
                        "metadata.method": "userdto",

                        // relationships
                        "metadata.securitydto.type": "onetoone",
                        "metadata.environmentdto.type": "onetoone",
                        "metadata.usergroupdto.type": "onetomany",

                        // securitydto
                        "securitydto.accesstoken": "rogerac",
                        "securitydto.metadata.method": "securitydto",

                        // environmentdto
                        "environmentdto.ac": "ac",
                        "environmentdto.gps": "gpsval",
                        "environmentdto.account": "default",
                        "environmentdto.db": "data",
                        "environmentdto.collection": "maincollection",
                        "environmentdto.metadata.method": "environmentdto",

                        // permissiondto
                        "permissiondto.metadata.method": "permissiondto",
                        "permissiondto.metadata.system.creator": "driwid",
                        "permissiondto.level": "99",
                        "permissiondto.metadata.collection": "collection1",
                        "permissiondto.metadata.db": "data1",
                        // ,
                        // "permissiondto.0.metadata.inherit.0.wid": "userdtodefault",
                        // "permissiondto.0.metadata.inherit.0.command.dtotype": "",
                        // "permissiondto.0.metadata.inherit.0.command.adopt": "default",
                        // "permissiondto.0.actiongroupdto.0.metadata.inherit.wid": "actiongroupdtodefault",
                        // "permissiondto.0.actiongroupdto.0.metadata.inherit.0.command.dtotype": "",
                        // "permissiondto.0.actiongroupdto.0.metadata.inherit.0.command.adopt": "default"

                        // permissiondto.usergroupdto
                        "permissiondto.usergroupdto.0.usergroupname": "everyone",
                        "permissiondto.usergroupdto.0.metadata.method": "usergroupdto",
                        "permissiondto.usergroupdto.0.metadata.system.creator": "driwid",

                        // permissiondto.actiongroupdto
                        "permissiondto.actiongroupdto.0.actiongroupname": "allactions",
                        "permissiondto.actiongroupdto.0.metadata.method": "actiongroupdto",
                        "permissiondto.actiongroupdto.0.metadata.system.creator": "driwid",
                        // "permissiondto.0.actiongroupdto.0.executeactiondto.actiondto.serveractiondto": "defaultserveractiondto",
                        // "permissiondto.0.actiongroupdto.actiongroupname": "actiongroupdtodefault",
                        // "permissiondto.0.actiongroupdto.0.executeactiondto.actiondto.serveractiondto": "defaultserveractiondto",
                        // "permissiondto.0.actiongroupdto.0.executeactiondto.actiondto.localactiondto": "defaultlocalactiondto",
                        // "permissiondto.0.actiongroupdto.1.getactiondto.actiondto.serveractiondto": "defaultserveractiondto",
                        // "permissiondto.0.actiongroupdto.1.getactiondto.actiondto.localactiondto": "defaultlocalactiondto",
                        // "permissiondto.0.actiongroupdto.2.editactiondto.actiondto.serveractiondto": "defaultserveractiondto",
                        // "permissiondto.0.actiongroupdto.2.editactiondto.actiondto.localactiondto": "defaultlocalactiondto",
                        // "permissiondto.0.actiongroupdto.3.deleteactiondto.actiondto.serveractiondto": "defaultserveractiondto",
                        // "permissiondto.0.actiongroupdto.3.deleteactiondto.actiondto.localactiondto": "defaultlocalactiondto"
                    }], function (err, res) {
                        //
                        cb1(null);
                    });
                },
                function (cb1) {
                    execute(request, function (err, res) {
                        cb1(null);
                    });
                }

            ], function (err, res) {
                callback(res);
            });


        }

        // authcall looks at incoming paramters and creates call to security check
        exports.authcall = authcall = function authcall(executeobject, command, callback) {
            if (command.internalcall && command.internalcall === true) {
                // internal call, no security check required
                alert("skip")
                callback(undefined, true);
            } else {
                // proxyprinttodiv('authcall inboundparams ', inboundparams, 39); 
                var environment;
                var status = false;
                // //console.debug">>>>> env >>> "+ JSON.stringify(inboundparams['etenvironment']));
                if (!(command && command['environment'])) {
                    callback(null, false);
                } else {
                    environment = extend(true, environment, command['environment']);
                    secParams = command['environment'];

                    var accesstoken = environment['ac'];
                    var mygroup = environment['mygroup'];
                    var myphone = environment['myphone'];
                    var actiongroup = environment['actiongroup'];
                    var dbgroup = environment['dbgroup'];
                    var collection = environment['collection'];
                    var server = environment['server'];
                    var datastore = environment['datastore'];

                    if (accesstoken && collection && myphone && dbgroup && actiongroup && server && datastore) {
                        // actual security check
                        // _accesstoken, _mygroup, _myphone, _actiongroup, _dbgroup, _collection, _server, _datastore, 
                        securitycheck(secParams, accesstoken, mygroup, myphone, actiongroup, dbgroup, collection, server, datastore, callback);
                    } else {
                        // false result of security check
                        callback(null, false);
                    }
                }
            }
        };







    // securitycheck(ac, mygroup(opt),_myphone(opt), accountgroup, actiongroup, actiontypegroup, dbgroup, _loginlevel, callback)
    // (AC or my account, action, action type, db)
    exports.securitycheck = securitycheck = function securitycheck(secParams, _accesstoken, _mygroup, _myphone, _actiongroup, _dbgroup, _collection, _server, _datastore, callback) {
        proxyprinttodiv('Function securitytest accesstoken-- ', _accesstoken, 39);
        proxyprinttodiv('Function securitytest mygroup-- ', _mygroup, 39);
        proxyprinttodiv('Function securitytest actiongroup-- ', _actiongroup, 39);
        proxyprinttodiv('Function securitytest _myphone-- ', _myphone, 39);
        proxyprinttodiv('Function securitytest server-- ', _server, 39);
        proxyprinttodiv('Function securitytest dbgroup-- ', _dbgroup, 39);
        proxyprinttodiv('Function securitytest _datastore-- ', _datastore, 39);

        var securityCheckOutput = false;
        var actor;
        var actorGroup;
        var action = _actiongroup;
        var actorGroupsArr = [];
        var actionGroupsArr = [];
        var actionCreator;
        var actionCreatorPermissions = [];
        var actorPermissions = [];
        var actionCreatorPermissions = [];

        var actorCreator = "";
        var actionCreator = "";

        async.series([

                function (cb1) {
                    // if mygroup not sent in then convert AC to my userwid (mygroup)
                    if (!_mygroup) {

                        getuserbyac(secParams, _accesstoken, function (err, userDto) {
                            actor = userDto;
                            actorGroup = userDto.wid; // consider user is usergroup
                            cb1(null);
                        });

                    } else {
                        actorGroup = _mygroup;
                        cb1(null);
                    }
                },
                function (cb1) {
                    // 'actor' wants to do an 'action'
                    // 'actorGroup' shall be in the list of 'userGroups' having permissions to 'actionGroup'

                    getmygroups(secParams, actorGroup, "usergroupdto", "usergroupname", actorGroupsArr, function (err, res) {
                        // get all userGroups for the actor
                        // add calculated + default userGroup for the actor('actorGroup')
                        cb1(null, "get usergroups for user");
                    })
                },
                function (cb1) {
                    // get all actionGroups for the action
                    // add calculated + default userGroup for the actor('actorGroup')
                    getmygroups(secParams, action, "actiongroupdto", "actiongroupname", actionGroupsArr, function (err, res) {
                        cb1(null, "get actiongroups for action");
                    })
                },
                function (cb1) {
                    // get the owner of the original action(metadata.systemdto.creator)
                    var query = {
                        "executethis": "mongoquery",
                        "data.usergroupname": "everyone"
                    };
                    addSecurityParams(query, secParams, function (err, query) {
                        execute(query, function (err, res) {
                            actionCreator = res[0][0]['metadata']['system']['creator'];
                            proxyprinttodiv('Function securitycheck Action creator is -- ', actionCreator, 39);
                            // actionCreator = "rogeruser";
                            cb1(null, "identified action owner");
                        });
                    });
                },
                function (cb1) {
                    // getwidmaster for permissions for the 'owner' 
                    var rawquery1 = {
                        "executethis": "querywid",
                        "command": {
                            "result": "queryresult"
                        },
                        "mongorawquery": {
                            "metadata.system.creator": actionCreator
                        }
                    };

                    addSecurityParams(rawquery1, secParams, function (err, rawquery1) {

                        execute(rawquery1, function (err, res1) {
                            var res = res1[0]["queryresult"];
                            var arr = res;
                            var obj, jsonKey, dto;
                            if (arr) {
                                // iterate over the results and prepare the list
                                async.mapSeries(arr, function (objOuter, cbMapOuter) {
                                    jsonKey = Object.keys(objOuter)[0];
                                    dto = objOuter[jsonKey];

                                    var rawquery2 = {
                                        "executethis": "getwidmaster",
                                        "wid": dto.wid
                                    };
                                    execute(rawquery2, function (err, res) {
                                        var arr = res;
                                        var obj, jsonKey, dto;
                                        if (arr) {
                                            // iterate over the results and prepare the list
                                            async.mapSeries(arr, function (obj, cbMap) {
                                                var permissionsjson = converttodriformat(obj);
                                                actionCreatorPermissions.push(permissionsjson);
                                                cbMap(null, "map iteration");
                                            }, function (err, res) {
                                                proxyprinttodiv('Function securitycheck permissions list -- ', actionCreatorPermissions, 39);
                                                cbMapOuter(null, "getwidmaster to get owner's permissions");
                                            })
                                        } else {
                                            cbMapOuter(null, "getwidmaster to get owner's permissions");
                                        }
                                    });
                                }, function (err, res) {
                                    cb1(null, "finish getting permissions list");
                                });
                            }
                        });

                    });
                },


                function (cb1) {
                    // make a query for permissions on from a query on
                    // action = received action} 
                    // &&
                    // {db = received db} 

                    // iterate over the above created permissions list
                    // from the permissions list, filter out permission records based on 
                    // received action,collection,db
                    // actiongroupname
                    // usergroupname
                    // if any matches are found -- user has permissions


                    // **** check permission wid(s) based on the collection,db, and creator
                    var actiongroupnameslist = [];
                    var usergroupnameslist = [];
                    var isMatch = false;
                    // iterate each permission record
                    for (var idx1 in actionCreatorPermissions) {
                        isMatch = false;
                        var permissionrecord = actionCreatorPermissions[idx1];
                        var actiongroupsarr = permissionrecord['data']['actiongroupdto'];
                        var usergroupsarr = permissionrecord['data']['usergroupdto'];

                        // check db and collection
                        var db = permissionrecord['metadata']['db'];
                        var collection = permissionrecord['metadata']['collection'];

                        isMatch = ((_dbgroup === db) && (_collection === collection))

                        // if matching proceed with other checks --actiongroupname and usergroupname
                        if (isMatch) {

                            // check actiongroups -- check if sent in action mataches the actiongroups permitted to
                            for (var idx2 in actiongroupsarr) {
                                var actiongrouprecord = actiongroupsarr[idx2];
                                isMatch = (action === actiongrouprecord['actiongroupname']);
                                if (isMatch) {
                                    break;
                                }
                            }

                            if (isMatch) {
                                break;
                            } else {
                                // check usergroups -- check if sent in usergroup mataches the usergroups permitted to
                                for (var idx3 in usergroupsarr) {
                                    var usergrouprecord = usergroupsarr[idx3];
                                    isMatch = (action === usergrouprecord['usergroupname']);
                                    if (isMatch) {
                                        break;
                                    }
                                }
                            }
                        } else {
                            isMatch = false;
                        }

                        if (isMatch) {
                            break;
                        }
                    }

                    proxyprinttodiv('Function securitycheck auth status -- ', isMatch, 39);
                    securityCheckOutput = isMatch;
                    cb1(null, "matching permissions list");
                }
            ],

            function (err, res) {
                // final callback
                proxyprinttodiv('Function Final callback returns -- ', securityCheckOutput, 39);
                callback(err, securityCheckOutput);
            });

    };


    // getusergroups
    // that calls getusergroupsdefault, getusergroupsrecurse and adds them together
    exports.getmygroups = getmygroups = function getmygroups(secParams, userobj, grouptype, groupkey, groupset, callback) {
        debuglevel = 39;

        query = {
            "executethis": "querywid",
            "mongowid": userobj,
            "command": {
                "result": "queryresult"
            },
            "mongorelationshiptype": "attributes",
            "mongorelationshipmethod": grouptype,
            "mongorelationshipdirection": "forward",
            "mongowidmethod": grouptype
        };

        addSecurityParams(query, secParams, function (err, query) {


            execute([query],
                function (err, res1) {
                    var res = res1[0][0]["queryresult"];
                    var arr = res;
                    var obj, jsonKey, dto;

                    if (arr) {
                        // iterate over the results and prepare the list
                        // for (var i = 0; i < arr.length; i++) {
                        async.mapSeries(arr, function (obj, cbMap) {
                            jsonKey = Object.keys(obj)[0];
                            dto = obj[jsonKey];

                            groupset.push(dto[groupkey]);
                            if (dto[groupkey]) {
                                getmygroups(dto[groupkey], grouptype, groupkey, groupset, function (err, res) {
                                    // recursing -- nothing to do
                                    cbMap(null, "  added a dto in iteration  ");
                                });
                            }
                        }, function (err, res) {

                            groupset.push(userobj)
                            // proxyprinttodiv('Function getmygroups >>>>>  for  -- creator', creator, 39);
                            callback(err, groupset);
                        });
                    }
                });
        });
    }

    // logic to get my owner as string
    exports.getmycreator = getmycreator = function getmycreator(widname, callback) {
        widname = "getwidmaster";
        var reqJson = {
            "executethis": "getwidmaster",
            "wid": widname
        };
        execute(reqJson, function (err, res) {
            var creator = res["metadata.system.creator"];
            proxyprinttodiv('Function getmycreator -- ', creator, 39);
            callback(err, creator);
        });

    }

    // getuserbyac() gets user id by ac
    // logic to get user wid by the user accesstoken passed in
    exports.getuserbyac = getuserbyac = function getuserbyac(secParams, userac, callback) {
        var userDto, results1, userWid, systemWid;

        async.series([

            function part1(cb) {
                var query1 = [{
                    "executethis": "querywid",
                    "command": {
                        "result": "queryresult"
                    },
                    "mongorawquery": {
                        "data.accesstoken": userac
                    },
                    "mongorelationshipdirection": "backward",
                    "mongorelationshipmethod": "all",
                    "mongorelationshiptype": "attributes"
                }];

                addSecurityParams(query1, secParams, function (err, query1) {
                    execute(query1, function (err, res1) {
                        var res = res1[0][0]["queryresult"];
                        proxyprinttodiv('Function getuserbyac query1 -- res', res, 39);
                        var jsonKey = Object.keys(res)[0];
                        var jsonVal = res[jsonKey];
                        userWid = jsonVal;
                        cb(null);
                    });
                });
            }
        ], function (err, res) {
            //console.debug' done securitycheck in sync manner.');
            // proxyprinttodiv('securitycheck userDto ', userDto, 39);
            proxyprinttodiv('Function getuserbyac --  >>>>>>  >>>>> userWid -- ', userWid, 39);
            callback(err, userWid);
        });

    }


    // get cumulative list of all the permission records associated given group and key

    function getPermissionsForGroup(group, groupname, key, type, rawquery, callback) {
        getgroupsrecursive(groupname, type, [], function (err, res) {
            var matchingGroups = res;
            var permissionsList = [];

            var query = {};
            if (rawquery) {
                query = rawquery;
            } else {
                query["data." + key] = group;
            }

            var command = {
                "executethis": "querywid",
                "command": {
                    "result": "queryresult"
                },
                "mongorawquery": query
            };

            execute(command, function (err, res1) {
                var res = res1[0][0]["queryresult"];
                var arr = res;
                var obj, jsonKey, dtoPermissions;

                for (var i = 0; i < arr.length; i++) {
                    obj = arr[i];
                    jsonKey = Object.keys(obj)[0];
                    dtoPermissions = obj[jsonKey];

                    // check for all the permissions in the matchinggroups with acceptable level
                    if (((!dtoPermissions.levelgroup) || (sentinloginlevel >= dtoPermissions.levelgroup))) {
                        permissionsList.push(dtoPermissions);
                    }
                }

                proxyprinttodiv('Function getPermissionsForGroup --  permissionsList ', permissionsList, 39);
                callback(err, permissionsList);
            });
        });
    }







    // ***************************************************************************
    // *************** PURE LOGIC GENERIC FUNCTIONS ******************************
    //****************************************************************************









    // ** GENERIC FUNCTION TO CREATE COMMON(default and override) DATA **
    // create defaultdto and overridedto wids -- NOT USED CURRENTLY
    exports.createcommondata = createcommondata = function createcommondata(callback) {

        var creatorwid = "driwid";
        var expirationtimer = "10000";
        var creationdate = "3/9/2014";
        var expirationdate = "12/31/2999";
        var expirationdate = "12/31/2999";
        var db = "data";
        var collectionname = "dri";


        execute([{
            // create defaultdto data
            "executethis": "addwidmaster",
            "metadata.method": "defaultdto",
            "system.creator": creatorwid,
            "system.creationdate": creationdate,
            "system.expirationtimer": expirationtimer,
            "system.expiratondate": expirationdate,
            "system.db": db,
            "system.collection": collectionname

            // TODO :: ADD systemdto/overridedto data add logic below
            // },{
            //  // create overridedto data
            //     "executethis": "addwidmaster",
            //     "metadata.method": "defaultdto",
            //     "metadata.system.creator": creatorwid,
            //     "metadata.system.creationdate": creationdate,
            //     "metadata.system.expirationtimer": expirationtimer,
            //     "metadata.system.expiratondate": expirationdate,
            //     "metadata.system.db": db,
            //     "metadata.system.collection": collectionname
        }], callback);
    }

    // ** GENERIC FUNCTION TO CREATE A USER WID ON THE BASIS OF RECEIVED DATA **
    // create createuserdata wid data and associated relationships
    exports.createuserdata = createuserdata = function createuserdata(userobj, securityobj, overrideobj, defaultobj, permissionobj, usergroupobj, actiongroupobj, environmentobj, callback) {

        var userJson = {
            "executethis": "addwidmaster",
            "metadata.method": "userdto",
            "wid": userobj.wid,
            "fname": userobj.fname,
            "lname": userobj.lname,
            "phone": userobj.phone,
            "email": userobj.email,
            "address": userobj.address,
            "address2": userobj.address2,
            "city": userobj.city,
            "state": userobj.state,
            "zip": userobj.zip,
            "country": userobj.country

        }

        // userJson["permissiondto.0.wid"]={};
        // add permissiondto values from the json object passed in
        // for (var key in permissionobj) {
        //     userJson[key] = permissionobj[key];
        // }

        // add usergroupdto values from the json object passed in
        // for (var key in usergroupobj) {
        //     userJson[key] = usergroupobj[key];
        // }

        // userJson["actiongroupdto.0.wid"]={};
        // add actiongroupdto values from the json object passed in
        // for (var key in actiongroupobj) {
        //     userJson[key] = actiongroupobj[key];
        // }

        // add environmentdto values from the json object passed in
        // userJson["environmentdto.ac"] = environmentobj.ac;
        // userJson["environmentdto.gps"] = environmentobj.gps;
        // userJson["environmentdto.account"] = environmentobj.account;
        // userJson["environmentdto.db"] = environmentobj.db;
        // userJson["environmentdto.collection"] = environmentobj.collection;

        // add securitydto values from the json object passed in
        // userJson["securitydto.accesstoken"] = securityobj.ac;

        // create userdto data
        execute(userJson, function (err, res) {
            // create securitydto data
            execute({
                "executethis": "getwidmaster",
                "wid": userobj.wid
            }, function (err, resp) {
                proxyprinttodiv('Function createuserdata -- added getwidmaster on user  -- ' + userobj.wid, res, 39);
                callback(err, res);
            });
        });
    }

    // ** GENERIC FUNCTION TO ADD ENVIRONMENT DATA TO A USER WID ON THE BASIS OF RECEIVED DATA **
    // logic to assign environment to a user -- taking the groupname 
    exports.addenvironment = addenvironment = function addenvironment(userobj, environmentobj, callback) {

        execute({
            "executethis": "addwidmaster",
            "wid": userobj.wid,
            "environmentdto.ac": environmentobj.ac,
            "environmentdto.gps": environmentobj.gps,
            "environmentdto.account": environmentobj.account,
            "environmentdto.db": environmentobj.db,
            "environmentdto.collection": environmentobj.collection
        }, function (err, res) {
            proxyprinttodiv('Function addenvironment -- added environment to user  -- ' + userobj.wid, res, 39);
            callback(null, "environmentdto");
        });
    }

    // ** GENERIC FUNCTION TO CREATE A GROUP ON THE BASIS OF RECEIVED DATA **
    // logic to create a group -- taking the groupname 
    exports.creategroup = creategroup = function creategroup(groupname, callback) {
        execute([{
            "executethis": "addwidmaster",
            "wid": groupname,
            "usergroupname": groupname
        }], function (err, res) {
            proxyprinttodiv('Function creategroup -- added group  -- ', groupname, 39);

            callback(err, res);
        });
    }


    // ** GENERIC FUNCTION TO CREATE A USER GROUP ON THE BASIS OF RECEIVED DATA **
    // logic to create a group -- taking the groupname 
    exports.createusergroup = createusergroup = function createusergroup(groupname, callback) {
        execute([{
            "executethis": "addwidmaster",
            "wid": groupname,
            "usergroupname": groupname
        }], function (err, res) {
            proxyprinttodiv('Function createusergroup -- added user group  -- ', groupname, 39);

            callback(err, res);
        });
    }



    // ** GENERIC FUNCTION TO CREATE AN ACTION GROUP ON THE BASIS OF RECEIVED DATA **
    // logic to create a group -- taking the groupname 
    exports.createactiongroup = createactiongroup = function createactiongroup(groupname, callback) {
        execute([{
            "executethis": "addwidmaster",
            "metadata.method": "actiongroupdto",
            "wid": groupname,
            "actiongroupname": groupname
        }], function (err, res) {
            proxyprinttodiv('Function createactiongroup -- added actiongroup  -- ', groupname, 39);

            callback(err, res);
        });
    }

    // ** GENERIC FUNCTION TO ADD A RELATIONSHIP BETWEEN TWO WID TYPES ON THE BASIS OF RECEIVED DATA **
    // create relationship function
    exports.createrelationship = createrelationship = function createrelationship(primarywid, secondarywid, linktype, callback) {

        execute([{
            "executethis": "addwidmaster",
            "wid": "rel_" + secondarywid + "_to_" + primarywid,
            "metadata.method": "relationshipdto",
            "relationshiptype": "attributes",
            "linktype": linktype,
            "primarywid": primarywid,
            "primarymethod": primarywid,
            "secondarywid": secondarywid,
            "secondarymethod": secondarywid
        }], function (err, res) {
            // proxyprinttodiv('Function createrelationship -- added relationship for  -- ' + primarywid + ' >> ' + secondarywid, linktype, 39);
            callback(err, res);
        });

        // alert('done creating relationship');
    }


    // ** GENERIC FUNCTION TO ADD A RELATIONSHIP BETWEEN TWO WID TYPES ON THE BASIS OF RECEIVED DATA **
    // add permission
    exports.addpermission = addpermission = function addpermission(userobj, permissionobjArr, callback) {
        async.mapSeries(permissionobjArr, function (permissionobj, cbMap) {
            // add each permission to the user
            execute([{
                    // add permissions as per given information 
                    "executethis": "addwidmaster",
                    "wid": userobj.wid,
                    // permissions data 
                    "metadata.method": "userdto",
                    "permissiondto.usergroup.usergroupname": permissionobj.usergroup,
                    "permissiondto.actiongroup.actiongroupname": permissionobj.actiongroup,
                    "permissiondto.dbgroup": permissionobj.dbgroup,
                    "permissiondto.levelgroup": permissionobj.levelgroup

                }],
                function (err, res) {
                    cbMap(null);
                });
        }, function (err, res) {
            proxyprinttodiv('Function createuser done --  >>>>>> added permission >>>>>  for  -- ' + userobj.wid, res, 39);
            callback(err, res);
        });
    }

    // ** GENERIC FUNCTION TO ADD A SECURITY DATA FOR A USER WID ON THE BASIS OF RECEIVED DATA **
    // add security data
    exports.addsecurity = addsecurity = function addsecurity(userobj, securityobj, callback) {
        execute([{
                // add group as per given wid 
                "executethis": "addwidmaster",
                "wid": userobj.wid,
                // security data
                "metadata.method": "userdto",
                "securitydto.accesstoken": securityobj.ac
            }],
            function (err, res) {
                proxyprinttodiv('Function addsecurity --  >>>>>> added security  >>>>>  for  -- ' + userobj.wid, res, 39);
                // console.debug('added security for wid ' + wid + " >>>> " + JSON.stringify(res));
                callback(err, res)
            });
    }

    function addSecurityParams(query, secParams, callback) {
        query['command'] = secParams['command'];
        callback(null, query);
    }

})(typeof window == "undefined" ? global : window);