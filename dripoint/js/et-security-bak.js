// createuser merchant1
// createuser user1
// createuser user2
// creategroup (drisales, usergroupdto)
// creategroup (driadmin, usergroupdto)
// addwidtogroup(user1, drisales)
// addwidtogroup(user2, driadmin)
// createparentgrouprelationship(drisales, driadmin)

// getrelatedgroups(drisales) would return drisales and driadmin




// // test to see if a call to getwidmaster gets passed through security check
// exports.testauth = testauth = function testauth(inboundparams, callback) {
//     debuglevel = 39;
//     proxyprinttodiv('testauth inboundparams ', inboundparams, 39);
//     var environment;
//     environment = {};
//     environment['ac'] = 'rogerac';
//     environment['mygroup'] = ''; //set account to account of ac if no account
//     environment['myphone'] = '9873838958';
//     environment['actiongroup'] = 'allactions';
//     environment['dbgroup'] = 'data';
//     environment['collection'] = 'maincollection';
//     environment['server'] = 'server1';
//     environment['datastore'] = 'datastore1';

//     var request = {};
//     request['command'] = {};
//     request['command']['environment'] = environment;

//     request['executethis'] = 'ettestag1';

//     async.series([

//         function (cb1) {
//             // create all DTOs for security
//             createalldtos({}, function (err, res) {
//                 cb1(null);
//             });
//         },
//         function (cb1) {
//             // create all data 
//             execute([{
//                 // default actiongroupdto
//                 "executethis": "addwidmaster",
//                 "wid": "actiongroupdtodefault",
//                 "metadata.method": "actiongroupdto",
//                 "actiongroupname": "actiongroupdtodefault",
//                 "executeactiondto.actiondto.serveractiondto": "defaultserveractiondto",
//                 "executeactiondto.actiondto.localactiondto": "defaultlocalactiondto",
//                 "getactiondto.actiondto.serveractiondto": "defaultserveractiondto",
//                 "getactiondto.actiondto.localactiondto": "defaultlocalactiondto",
//                 "editactiondto.actiondto.serveractiondto": "defaultserveractiondto",
//                 "editactiondto.actiondto.localactiondto": "defaultlocalactiondto",
//                 "deleteactiondto.actiondto.serveractiondto": "defaultserveractiondto",
//                 "deleteactiondto.actiondto.localactiondto": "defaultlocalactiondto"
//             }, {
//                 // default permissiondto
//                 "executethis": "addwidmaster",
//                 "wid": "permissiondtodefault",
//                 "metadata.method": "permissiondto",
//                 "metadata.system.creator": "string",
//                 "level": "string",
//                 // "actiongroupdto.wid": "actiongroupdtodefault",
//                 "db": "data",
//                 "collection": "maincollection"
//             }, {
//                 // Create the userdto
//                 "executethis": "addwidmaster",
//                 "metadata.method": "userdto",
//                 "widname": "userdtodefault",
//                 "wid": "defaultuser",
//                 "fname": "1",
//                 "lname": "2",
//                 "phone": "3",
//                 "email": "4",
//                 "address": "5",
//                 "address2": "6",
//                 "city": "7",
//                 "state": "8",
//                 "zip": "9",
//                 "country": "10",
//                 "wid": "testuser",
//                 "metadata.method": "userdto",

//                 // relationships
//                 "metadata.securitydto.type": "onetoone",
//                 "metadata.environmentdto.type": "onetoone",
//                 "metadata.usergroupdto.type": "onetomany",

//                 // securitydto
//                 "securitydto.accesstoken": "rogerac",
//                 "securitydto.metadata.method": "securitydto",

//                 // environmentdto
//                 "environmentdto.ac": "ac",
//                 "environmentdto.gps": "gpsval",
//                 "environmentdto.account": "default",
//                 "environmentdto.db": "data",
//                 "environmentdto.collection": "maincollection",
//                 "environmentdto.metadata.method": "environmentdto",

//                 // permissiondto
//                 "permissiondto.metadata.method": "permissiondto",
//                 "permissiondto.metadata.system.creator": "driwid",
//                 "permissiondto.level": "99",
//                 "permissiondto.metadata.collection": "collection1",
//                 "permissiondto.metadata.db": "data1",
//                 // ,
//                 // "permissiondto.0.metadata.inherit.0.wid": "userdtodefault",
//                 // "permissiondto.0.metadata.inherit.0.command.dtotype": "",
//                 // "permissiondto.0.metadata.inherit.0.command.adopt": "default",
//                 // "permissiondto.0.actiongroupdto.0.metadata.inherit.wid": "actiongroupdtodefault",
//                 // "permissiondto.0.actiongroupdto.0.metadata.inherit.0.command.dtotype": "",
//                 // "permissiondto.0.actiongroupdto.0.metadata.inherit.0.command.adopt": "default"

//                 // permissiondto.usergroupdto
//                 "permissiondto.usergroupdto.0.usergroupname": "everyone",
//                 "permissiondto.usergroupdto.0.metadata.method": "usergroupdto",
//                 "permissiondto.usergroupdto.0.metadata.system.creator": "driwid",

//                 // permissiondto.actiongroupdto
//                 "permissiondto.actiongroupdto.0.actiongroupname": "allactions",
//                 "permissiondto.actiongroupdto.0.metadata.method": "actiongroupdto",
//                 "permissiondto.actiongroupdto.0.metadata.system.creator": "driwid",
//                 // "permissiondto.0.actiongroupdto.0.executeactiondto.actiondto.serveractiondto": "defaultserveractiondto",
//                 // "permissiondto.0.actiongroupdto.actiongroupname": "actiongroupdtodefault",
//                 // "permissiondto.0.actiongroupdto.0.executeactiondto.actiondto.serveractiondto": "defaultserveractiondto",
//                 // "permissiondto.0.actiongroupdto.0.executeactiondto.actiondto.localactiondto": "defaultlocalactiondto",
//                 // "permissiondto.0.actiongroupdto.1.getactiondto.actiondto.serveractiondto": "defaultserveractiondto",
//                 // "permissiondto.0.actiongroupdto.1.getactiondto.actiondto.localactiondto": "defaultlocalactiondto",
//                 // "permissiondto.0.actiongroupdto.2.editactiondto.actiondto.serveractiondto": "defaultserveractiondto",
//                 // "permissiondto.0.actiongroupdto.2.editactiondto.actiondto.localactiondto": "defaultlocalactiondto",
//                 // "permissiondto.0.actiongroupdto.3.deleteactiondto.actiondto.serveractiondto": "defaultserveractiondto",
//                 // "permissiondto.0.actiongroupdto.3.deleteactiondto.actiondto.localactiondto": "defaultlocalactiondto"
//             }], function (err, res) {
//                 //
//                 cb1(null);
//             });
//         },
//         function (cb1) {
//             execute(request, function (err, res) {
//                 cb1(null);
//             });
//         }

//     ], function (err, res) {
//         callback(res);
//     });


// }

// // authcall looks at incoming paramters and creates call to security check
// exports.authcall = authcall = function authcall(executeobject, command, callback) {
//     if (command.internalcall && command.internalcall === true) {
//         // internal call, no security check required
//         alert("skip")
//         callback(undefined, true);
//     } else {
//         // proxyprinttodiv('authcall inboundparams ', inboundparams, 39); 
//         var environment;
//         var status = false;
//         // //console.debug">>>>> env >>> "+ JSON.stringify(inboundparams['etenvironment']));
//         if (!(command && command['environment'])) {
//             callback(null, false);
//         } else {
//             environment = extend(true, environment, command['environment']);

//             var accesstoken = environment['ac'];
//             var mygroup = environment['mygroup'];
//             var myphone = environment['myphone'];
//             var actiongroup = environment['actiongroup'];
//             var dbgroup = environment['dbgroup'];
//             var collection = environment['collection'];
//             var server = environment['server'];
//             var datastore = environment['datastore'];

//             if (accesstoken && collection && myphone && dbgroup && actiongroup && server && datastore) {
//                 // actual security check
//                 // _accesstoken, _mygroup, _myphone, _actiongroup, _dbgroup, _collection, _server, _datastore, 
//                 sc(accesstoken, mygroup, myphone, actiongroup, dbgroup, collection, server, datastore, callback);
//             } else {
//                 // false result of security check
//                 callback(null, false);
//             }
//         }
//     }
// };







// securitycheck(ac, mygroup(opt),_myphone(opt), accountgroup, actiongroup, actiontypegroup, dbgroup, _loginlevel, callback)
// (AC or my account, action, action type, db)
exports.sc = sc = function sc(accessconfig, callback) {
    debuglevel = 39;

    var _accesstoken = accessconfig["_accesstoken"];
    var _mygroup = accessconfig["_mygroup"];
    var _action = accessconfig["_action"];
    var _myphone = accessconfig["_myphone"];
    var _server = accessconfig["_server"];
    var _dbgroup = accessconfig["_dbgroup"];
    var _datastore = accessconfig["_datastore"];
    var _loginlevel = accessconfig["_loginlevel"];

    proxyprinttodiv('Function securitytest accesstoken-- ', _accesstoken, 39);
    proxyprinttodiv('Function securitytest mygroup-- ', _mygroup, 39);
    proxyprinttodiv('Function securitytest actiongroup-- ', _action, 39);
    proxyprinttodiv('Function securitytest _myphone-- ', _myphone, 39);
    proxyprinttodiv('Function securitytest server-- ', _server, 39);
    proxyprinttodiv('Function securitytest dbgroup-- ', _dbgroup, 39);
    proxyprinttodiv('Function securitytest _datastore-- ', _datastore, 39);

    var securityCheckOutput = false;
    var actor;
    var actorGroup;
    var action = _action;
    var actorGroupsArr = [];
    var actionGroupsArr = [];
    var actionCreator;
    var actionCreatorPermissions = [];
    var actorPermissions = [];

    var actorCreator = "";
    var actionCreator = "";

    async.series([

            function (cb1) {
                // if mygroup not sent in then convert AC to my userwid (mygroup)
                if (!_mygroup) {
                    proxyprinttodiv('Function sc getting user for ac -- ', _accesstoken, 39);
                    getuserbyac(_accesstoken, function (err, userDto) {
                        actor = userDto;
                        actorGroup = userDto.wid; // consider user is usergroup
                        proxyprinttodiv('Function sc got actor Group for ac -- ', actorGroup, 39);
                        cb1(null);
                    });

                } else {
                    actorGroup = _mygroup;
                    proxyprinttodiv('Function sc received actor Group for ac -- ', actorGroup, 39);
                    cb1(null);
                }
            },
            function (cb1) {
                // 'actor' wants to do an 'action'
                // 'actorGroup' shall be in the list of 'userGroups' having permissions to 'actionGroup'
                proxyprinttodiv('Function sc going to get groups for  actor Group  -- ', actorGroup, 39);
                getmygroups({
                    "wid": actorGroup
                }, "groupdto", "groupname", actorGroupsArr, function (err, res) {
                    // get all userGroups for the actor
                    // add calculated + default userGroup for the actor('actorGroup')
                    proxyprinttodiv('Function sc got groups for  actor Group ' + actorGroup + '  -- ', res, 39);
                    cb1(null, "get usergroups for user");
                })
            },
            function (cb1) {
                // get all actionGroups for the action
                // add calculated + default userGroup for the actor('actorGroup')
                getmygroups({
                    "wid": action
                }, "groupdto", "type", actionGroupsArr, function (err, res) {
                    cb1(null, "get action groups for action");
                })
            },
            function (cb1) {
                // get the owner of the original action(metadata.systemdto.creator)
                var query = {
                    "executethis": "querywid",
                    "mongorawquery": {
                        "data.type": _action
                    }
                };

                execute(query, function (err, res) {
                    var res1 = res[0][Object.keys(res[0])[0]];
                    actionCreator = res1['metadata']['system']['creator'];
                    proxyprinttodiv('Function securitycheck Action creator is -- ', actionCreator, 39);
                    // actionCreator = "rogeruser";
                    cb1(null, "identified action owner");
                });
            },
            // function (cb1) {
            //     // getwidmaster for permissions for the 'owner' 
            //     var rawquery1 = {
            //         "executethis": "getwidmaster",
            //         "wid": "user1"// TODO :: REMOVE HARDCODING
            //     };

            //     execute(rawquery1, function (err, res1) {
            //         var arr = res1;
            //         var obj, jsonKey, dto;
            //         if (arr) {
            //             // iterate over the results and prepare the list
            //             async.mapSeries(arr, function (objOuter, cbMapOuter) {
            //                 jsonKey = Object.keys(objOuter)[0];
            //                 arr = objOuter[jsonKey][0];
            //                 var obj, jsonKey, dto;
            //                 if (arr) {
            //                     // iterate over the results and prepare the list
            //                     async.mapSeries(arr, function (obj, cbMap) {
            //                         var permissionsjson = converttodriformat(obj);
            //                         actionCreatorPermissions.push(permissionsjson);
            //                         cbMap(null, "map iteration");
            //                     }, function (err, res) {
            //                         proxyprinttodiv('Function securitycheck permissions list -- ', actionCreatorPermissions, 39);
            //                         cbMapOuter(null, "getwidmaster to get owner's permissions");
            //                     })
            //                 } else {
            //                     cbMapOuter(null, "getwidmaster to get owner's permissions");
            //                 }
            //             }, function (err, res) {
            //                 cb1(null, "finish getting permissions list");
            //             });
            //         } else {
            //             cb1(null, "finish getting permissions list");
            //         }
            //     });
            // },


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


                // // **** check permission wid(s) based on the collection,db, and creator
                // var actiongroupnameslist = [];
                // var usergroupnameslist = [];
                // var isMatch = false;
                // // iterate each permission record
                // for (var idx1 in actionCreatorPermissions) {
                //     isMatch = false;
                //     var permissionrecord = actionCreatorPermissions[idx1];
                //     var actiongroupsarr = permissionrecord['data']['actiongroupdto'];
                //     var usergroupsarr = permissionrecord['data']['usergroupdto'];

                //     // check db and collection
                //     var db = permissionrecord['metadata']['db'];
                //     var collection = permissionrecord['metadata']['collection'];

                //     isMatch = ((_dbgroup === db) && (_collection === collection))

                //     // if matching proceed with other checks --actiongroupname and usergroupname
                //     if (isMatch) {

                //         // check actiongroups -- check if sent in action mataches the actiongroups permitted to
                //         for (var idx2 in actiongroupsarr) {
                //             var actiongrouprecord = actiongroupsarr[idx2];
                //             isMatch = (action === actiongrouprecord['actiongroupname']);
                //             if (isMatch) {
                //                 break;
                //             }
                //         }

                //         if (isMatch) {
                //             break;
                //         } else {
                //             // check usergroups -- check if sent in usergroup mataches the usergroups permitted to
                //             for (var idx3 in usergroupsarr) {
                //                 var usergrouprecord = usergroupsarr[idx3];
                //                 isMatch = (action === usergrouprecord['usergroupname']);
                //                 if (isMatch) {
                //                     break;
                //                 }
                //             }
                //         }
                //     } else {
                //         isMatch = false;
                //     }

                //     if (isMatch) {
                //         break;
                //     }
                // }


                // **** check permission wid(s) based on the the user's groups from user's permissions
                var usergroupslist = [];
                var isMatch = false;

                // get all groups for the user
                execute({
                    "executethis": "getwidmaster",
                    "wid": "user1"// TODO :: REVISIT 
                }, function (err, res) {
                    // fetch all groups
                    var userDto = res[0];
                    var permissionGroupsArr = userDto.permissiondto;

                    // iterate each permission
                    for (var idx1 in permissionGroupsArr) {
                        isMatch = false;


                        // iterate each group in each permission record for the user
                        var groupsArr = permissionGroupsArr[idx1]['groupdto'];
                        for (var idx2 in groupsArr) {
                            var group = groupsArr[idx2];

                            var userArr = group['userdto'];
                            var actionArr = group['actiondto'];

                            // var isUserMatch = true;
                            var isUserMatch = false;
                            for (var i in userArr) {
                                var user = userArr[i];
                                console.log('user.wid in sc is ' + user.wid);
                                if (user.wid === _mygroup) {
                                    isUserMatch = true;
                                    break;
                                }
                            }

                            var isActionMatch = false;
                            for (var j in actionArr) {
                                var action = actionArr[j];
                                if (action.type === _action) {
                                    isActionMatch = true;
                                    break;
                                }
                            }

                            if (isActionMatch && isUserMatch) {
                                isMatch = true;
                                break;
                            }
                        }

                        // skip if authorization passes
                        if (isMatch) {
                            break;
                        }
                    }

                    proxyprinttodiv('Function securitycheck auth status -- ', isMatch, 39);
                    securityCheckOutput = isMatch;

                    cb1(null, "matching permissions list");
                });


                // // iterate each permission record
                // for (var idx1 in actionCreatorPermissions) {
                //     isMatch = false;
                //     var permissionrecord = actionCreatorPermissions[idx1];
                //     var actiongroupsarr = permissionrecord['data']['actiongroupdto'];
                //     var usergroupsarr = permissionrecord['data']['usergroupdto'];

                //     // check db and collection
                //     var db = permissionrecord['metadata']['db'];
                //     var collection = permissionrecord['metadata']['collection'];

                //     isMatch = ((_dbgroup === db) && (_collection === collection))

                //     // if matching proceed with other checks --actiongroupname and usergroupname
                //     if (isMatch) {

                //         // check actiongroups -- check if sent in action mataches the actiongroups permitted to
                //         for (var idx2 in actiongroupsarr) {
                //             var actiongrouprecord = actiongroupsarr[idx2];
                //             isMatch = (action === actiongrouprecord['actiongroupname']);
                //             if (isMatch) {
                //                 break;
                //             }
                //         }

                //         if (isMatch) {
                //             break;
                //         } else {
                //             // check usergroups -- check if sent in usergroup mataches the usergroups permitted to
                //             for (var idx3 in usergroupsarr) {
                //                 var usergrouprecord = usergroupsarr[idx3];
                //                 isMatch = (action === usergrouprecord['usergroupname']);
                //                 if (isMatch) {
                //                     break;
                //                 }
                //             }
                //         }
                //     } else {
                //         isMatch = false;
                //     }

                //     if (isMatch) {
                //         break;
                //     }
                // }


                // proxyprinttodiv('Function securitycheck auth status -- ', isMatch, 39);
                // securityCheckOutput = isMatch;

            }
        ],

        function (err, res) {
            // final callback
            proxyprinttodiv('Function Final callback returns -- ', securityCheckOutput, 39);
            callback(err, securityCheckOutput);
        });

};


// getmygroups

exports.getmygroups = getmygroups = function getmygroups(userobj, grouptype, groupkey, groupset, callback) {
    debuglevel = 39;
    proxyprinttodiv('Function  getmygroups get groups for ' + grouptype + '  -- ', userobj, 39);

    var queryJson = {};
    queryJson['data.' + groupkey] = userobj['wid'];
    query = {
        "executethis": "querywid",
        "mongorawquery": queryJson,
        "command": {
            "result": "queryresult"
        }
    }


    // query = {
    //     "executethis": "querywid",
    //     "mongowid": userobj,
    //     "command": {
    //         "result": "queryresult"
    //     },
    //     "mongorelationshiptype": "attributes",
    //     "mongorelationshipmethod": grouptype,
    //     "mongorelationshipdirection": "forward",
    //     "mongowidmethod": grouptype
    // };
    proxyprinttodiv('Function  getmygroups get groups for ' + grouptype + '  query is -- ', query, 39);

    execute(query,
        function (err, res1) {
            proxyprinttodiv('Function  getmygroups get groups for ' + grouptype + '  query results -- ', res1, 39);

            // var jsonKey = Object.keys(res)[0];
            // var jsonVal = res[jsonKey];
            // var arr = jsonVal;

            var arr = res1;
            var obj, jsonKey, dto;

            if (arr) {
                // iterate over the results and prepare the list
                // for (var i = 0; i < arr.length; i++) {
                async.mapSeries(arr, function (obj, cbMap) {
                    jsonKey = Object.keys(obj)[0];
                    dto = obj[jsonKey];

                    if (dto[groupkey] && ((userobj !== dto[groupkey]) && dto[groupkey])) {
                        getmygroups(dto, grouptype, groupkey, groupset,
                            function (err, res) {
                                // recursing -- nothing to do
                                cbMap(null, "  added a dto in iteration  ");
                            });
                    } else {
                        cbMap(null, "  no dto in iteration  ");
                    }
                }, function (err, res) {

                    groupset.push(userobj)
                    // proxyprinttodiv('Function getmygroups >>>>>  for  -- creator', creator, 39);
                    callback(err, groupset);
                });
            }
        });
}

// we want all the primary wids where,  
// secondary method = groupdto and there is a match for secondarywids matching all the permissions
// {"executethis":"querywid","mongorawquery":{"$and":[{"data.secondarywid":"groupdto"}]}}
exports.getmatchingwids = function getmatchingwids() {

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
exports.getuserbyac = getuserbyac = function getuserbyac(userac, callback) {
    var userDto, results1, userWid, systemWid;

    async.series([

        function part1(cb) {
            var query1 = {
                "executethis": "querywid",
                "command": {
                    "result": "queryresult"
                },
                "mongorawquery": {
                    "data.ac": userac
                },
                "mongorelationshipdirection": "backward",
                "mongorelationshipmethod": "all",
                "mongorelationshiptype": "attributes"
            };

            execute(query1, function (err, res1) {
                var res = res1[0];
                proxyprinttodiv('Function getuserbyac query1 -- res', res1, 39);
                var jsonKey = Object.keys(res)[0];
                var jsonVal = res[jsonKey];
                userWid = jsonVal;
                cb(null);
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





// ** GENERIC FUNCTION TO CREATE A USER WID ON THE BASIS OF RECEIVED DATA **
// create createuserdata wid data and associated relationships
exports.createuserdata = createuserdata = function createuserdata(userobj, callback) {

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

    // create userdto data
    execute(userJson, function (err, res) {
        // create securitydto data
        proxyprinttodiv('Function createuserdata -- added getwidmaster on user  -- ' + userobj.wid, res, 39);
        callback(err, res);
    });
}


// ** GENERIC FUNCTION TO CREATE A GROUP ON THE BASIS OF RECEIVED DATA **
// logic to create a group -- 
exports.creategroup = creategroup = function creategroup(config, callback) {
    // proxyprinttodiv('Function creategroup -- adding group of ', config, 39);

    var grouptype = config['grouptype'];
    execute([{
        "executethis": "addwidmaster",
        "metadata.method": "groupdto",
        "metadata.system.creator": "driwid", // TODO :: this shall come from inherit
        "groupname": grouptype,
        "type": grouptype
    }], function (err, res) {
        proxyprinttodiv('Function creategroup -- added group -- ', res, 39);
        callback(err, res);
    });
};


// ** GENERIC FUNCTION TO CREATE AN ACTION ON THE BASIS OF RECEIVED DATA **
// logic to create an action -- taking the type of action
exports.createaction = createaction = function createaction(config, callback) {
    // proxyprinttodiv('Function createaction -- adding action of ', config, 39);
    var actiontype = config['actiontype'];
    execute([{
        "executethis": "addwidmaster",
        "type": actiontype,
        "metadata.system.creator": "driwid", // TODO :: this shall come from inherit
        "metadata.method": "actiondto"
    }], function (err, res) {
        proxyprinttodiv('Function createaction -- added group of type "' + actiontype + '"  -- ', res, 39);
        callback(err, res[0]);
    });
};

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
exports.addpermission = addpermission = function addpermission(config, callback) {
    // add each permission to the user
    execute([{
        // add permissions as per given information 
        "executethis": "addwidmaster",
        // "wid": config['permission.userwid'],// TODO :: REMOVE THIS COMMENT, REMOVE LINE BELOW THIS
        "wid": "user1",
        "metadata.method": "userdto",
        // "permissiondto.level": config['permission.level'],
        "permissiondto.groupdto.wid": config['permission.groupwid'],
        "permissiondto.userdto.wid": config['permission.userwid']
    }], function (err, res) {
        proxyprinttodiv('Function addpermission done --  >>>>>> added permission >>>>>  for  -- ', res, 39);
        callback(err, res);
    });
}

// ** GENERIC FUNCTION TO ADD A SECURITY DATA FOR A USER WID ON THE BASIS OF RECEIVED DATA **
// add security data
exports.addsecurity = addsecurity = function addsecurity(config, callback) {
    execute([{
            // add group as per given wid 
            "executethis": "addwidmaster",
            "wid": config['userwid'],
            // security data
            "metadata.method": "userdto",
            "securitydto.ac": config['securityac']
        }],
        function (err, res) {
            proxyprinttodiv('Function addsecurity --  >>>>>> added security  >>>>>  for  -- ', res, 39);
            // console.debug('added security for wid ' + wid + " >>>> " + JSON.stringify(res));
            callback(err, res)
        });
}

// ** GENERIC FUNCTION TO ADD A WID TO GROUP ON THE BASIS OF RECEIVED DATA **
// add security data
exports.addwidtogroup = addwidtogroup = function addwidtogroup(config, callback) {
    // addwidtogroup(groupwid, targetwid=, type=)
    // var record = {mm: groupdto, wid: groupwid, <type>.wid: targetwid}
    // addwidmaster(record)
    // add each permission to the user

    var groupchildkey = config['group.type'] + ".wid";
    var jsonToAdd = {
        // add permissions as per given information 
        "executethis": "addwidmaster",
        "wid": config['group.wid'],
        "metadata.method": "groupdto"
    }

    jsonToAdd[groupchildkey] = config['group.targetwid'];

    execute(jsonToAdd, function (err, res) {
        proxyprinttodiv('Function addwidtogroup done --  >>>>>> added group  to wid >>>>>  for  -- ' + config['group.wid'] + " >>> " + config['group.targetwid'], res, 39);
        callback(err, res);
    });


}




// userdto
//   12M permissiondto
//           M21 usergroupdto
//           M21 actiongroupdto
//           M21 other groups previously in permission dto
//           M21 dbgroup, databasetablegroup, etc
//   12M securitydto
//   12M usergroupdto (groups a user has created)
//           M21 userdto (what users are in this group)
//           121 groupdto
// groupdto
//   M21 groupdto
// groupdto manytomany to userdtdo


// createuser merchant1
// createuser user1
// createuser user2

// createaction getaction --- modified , added this
// createaction addaction --- modified , added this

// creategroup (drisales, usergroupdto)
// creategroup (driadmin, usergroupdto)

// attach created user created group
// addwidtogroup(user1, drisales)
// addwidtogroup(user2, driadmin)

// attach created action created group
// addwidtogroup(getaction, drisales)
// addwidtogroup(addaction, driadmin)

// TODO :: createparentgrouprelationship(drisales, driadmin)
// TODO :: getrelatedgroups(drisales) would return drisales and driadmin

// security data add and test comprehensive check
// run dtox prior to this
exports.datax = datax = function datax(groupname, callback) {

    // create user merchant
    var adminuser = {
        "wid": "merchant1",
        "fname": "Roger",
        "lname": "C",
        "phone": "+1-234-567-8911",
        "email": "r@c.com",
        "address": "112,Donald Lynch blvd",
        "address2": "MA",
        "city": "Marlborrough",
        "state": "MA",
        "zip": "01752",
        "country": "US"
    };

    // create user user1
    var organizationuser1 = {
        "wid": "user1",
        "fname": "Saurabh",
        "lname": "S",
        "phone": "+91-987-383-8981",
        "email": "s@s.com",
        "address": "112,Donald Lynch blvd",
        "address2": "MA",
        "city": "Marlborrough",
        "state": "MA",
        "zip": "01752",
        "country": "US"
    };

    // create user user2
    var organizationuser2 = {
        "wid": "user2",
        "fname": "Saurabh",
        "lname": "S",
        "phone": "+91-987-383-8981",
        "email": "s@s.com",
        "address": "112,Donald Lynch blvd",
        "address2": "MA",
        "city": "Marlborrough",
        "state": "MA",
        "zip": "01752",
        "country": "US"
    };

    var organizationuser1security = {
        "ac": "user1ac"
    }

    var organizationuser2security = {
        "ac": "user2ac"
    }


    // group1, group2
    var group1 = "drisales";
    var group2 = "driadmin";

    // action1, action2
    var action1 = "getaction";
    var action2 = "addaction";

    debuglevel = 39;

    var user1wid, user2wid, action1wid, action2wid, adminuserwid, group1wid, group2wid, dbgroupwid, databasetablegroupwid;

    var accessconfig1 = {
        "_accesstoken": '',
        "_mygroup": 'drisales',
        "_myphone": '9873838958',
        "_action": 'getaction',
        "_dbgroup": 'data',
        "_collection": 'wikiwallettesting',
        "_server": 'server1',
        "_datastore": 'main',
        "organizationaction": "getaction"
    };



    async.series([
        // function (cb) {
        //     // create admin user
        //     dtox({}, function (err, resp) {
        //         proxyprinttodiv('Function created schema done --   for  -- ', resp, 39);
        //         cb(err);
        //     });
        // },
        // function (cb) {
        //     // create admin user
        //     createuserdata(adminuser, function (err, resp) {
        //         proxyprinttodiv('Function admin createuser done --   for  -- ', resp, 39);
        //         adminuserwid = resp[0].wid;
        //         cb(err);
        //     });
        // },
        // function (cb) {
        //     // create organization user 1
        //     createuserdata(organizationuser1, function (err, resp) {
        //         user1wid = resp[0].wid;
        //         proxyprinttodiv('Function organization createuser 1 done --  for  -- ', user1wid, 39);
        //         cb(err);
        //     });
        // },
        // function (cb) {
        //     // create organization user 2
        //     createuserdata(organizationuser2, function (err, resp) {
        //         user2wid = resp[0].wid;
        //         proxyprinttodiv('Function organization createuser 2 done --  for  -- ', user2wid, 39);
        //         cb(err);
        //     });
        // },
        // function (cb) {
        //     // add security info for organization user 1
        //     addsecurity({
        //         "userwid": user1wid,
        //         "securityac": organizationuser1security.ac
        //     }, function (err, resp) {
        //         proxyprinttodiv('Function addsecurity done --  for user1 -- ', user1wid, 39);
        //         cb(err);
        //     });
        // },
        // function (cb) {
        //     // add security info for organization user 2
        //     addsecurity({
        //         "userwid": user2wid,
        //         "securityac": organizationuser2security.ac
        //     }, function (err, resp) {
        //         proxyprinttodiv('Function addsecurity done --  for  user2 -- ', user2wid, 39);
        //         cb(err);
        //     });
        // },
        // function (cb) {
        //     // createaction (by admin user)
        //     createaction({
        //         "actiontype": action1
        //     }, function (err, resp) {
        //         action1wid = resp[0].wid;
        //         proxyprinttodiv('Function createaction done --    for  -- ', action1wid, 39);
        //         cb(err);
        //     });
        // },
        // function (cb) {
        //     // createaction (by admin user)
        //     createaction({
        //         "actiontype": action2
        //     }, function (err, resp) {
        //         action2wid = resp[0].wid;
        //         proxyprinttodiv('Function createaction done --    for  -- ', action2wid, 39);
        //         cb(err);
        //     });
        // },

        // function (cb) {
        //     // create group (by admin user)
        //     creategroup({
        //         "grouptype": group1
        //     }, function (err, resp) {
        //         group1wid = resp[0][0].wid;
        //         proxyprinttodiv('Function creategroup done --    for  -- ', group1wid, 39);
        //         cb(err);
        //     });
        // },
        // function (cb) {
        //     // create group (by admin user)
        //     creategroup({
        //         "grouptype": group2
        //     }, function (err, resp) {
        //         group2wid = resp[0][0].wid;
        //         proxyprinttodiv('Function creategroup done --    for  -- ', group2wid, 39);
        //         cb(err);
        //     });
        // },




        // // attach created user created group
        // // addwidtogroup(user1, drisales)

        // // attach created action created group
        // // addwidtogroup(getaction, drisales)

        // // group 1 associations  
        // function (cb) {
        //     // attach user to group already created
        //     var config = {};
        //     config['group.type'] = "userdto"; // childkey
        //     config['group.wid'] = group1wid; // group wid
        //     config['group.targetwid'] = user1wid; // targetwid
        //     addwidtogroup(config, function (err, resp) {
        //         proxyprinttodiv('Function added user 1 to group  ', group1wid, 39);
        //         cb(err);
        //     });
        // },
        // function (cb) {
        //     // attach action to group already created
        //     var config = {};
        //     config['group.type'] = "actiondto"; // childkey
        //     config['group.wid'] = group1wid; // group wid
        //     config['group.targetwid'] = action1wid; // targetwid
        //     addwidtogroup(config, function (err, resp) {
        //         proxyprinttodiv('Function added action 1 to group  ', group1wid, 39);
        //         cb(err);
        //     });
        // },

        // function (cb) {
        //     // attach user to group already created
        //     var config = {};
        //     config['group.type'] = "userdto"; // childkey
        //     config['group.wid'] = group1wid; // group wid
        //     config['group.targetwid'] = user2wid; // targetwid
        //     addwidtogroup(config, function (err, resp) {
        //         proxyprinttodiv('Function added user 1 to group  ', user2wid, 39);
        //         cb(err);
        //     });
        // },
        // function (cb) {
        //     // attach action to group already created
        //     var config = {};
        //     config['group.type'] = "actiondto"; // childkey
        //     config['group.wid'] = group1wid; // group wid
        //     config['group.targetwid'] = action2wid; // targetwid
        //     addwidtogroup(config, function (err, resp) {
        //         proxyprinttodiv('Function added action 2 to group  ', action2wid, 39);
        //         cb(err);
        //     });
        // },


        // // // TODO :: 
        // // // attach created user created group
        // // // addwidtogroup(user2, driadmin)

        // // // attach created action created group
        // // // addwidtogroup(addaction, driadmin)
        // // // group 2 associations  


        // // add group create to actiongroup and usergroup
        // function (cb) {
        //     // create permission (for organization user), add permission data to organizationuser wid
        //     addpermission({
        //         "permission.userwid": user1wid,
        //         "permission.level": 99, // TODO :: REMOVE HARDCODING
        //         "permission.groupwid": group1wid
        //     }, function (err, resp) {

        //         execute({
        //                 "executethis": "getwidmaster",
        //                 "wid": user1wid
        //             },
        //             function (err, resp) {
        //                 proxyprinttodiv('Function addpermission done --    for  -- ', resp, 39);
        //                 cb(err);
        //             });
        //     });
        // },

        // function (cb) {
        //     // fetch and display organization user
        //     execute({
        //         "executethis": "getwidmaster",
        //         "wid": organizationuser1.wid
        //     }, function (err, resp) {
        //         proxyprinttodiv('Function getwidmaster done --    for  -- ', resp, 39);
        //         cb(err);
        //     });
        // },
        function (cb) {
            // perform the securitycheck for the getaction, with organization user user ac
            sc(accessconfig1, function (err, resp) {
                proxyprinttodiv('Security check done --    response  -- ', resp, 39);
                cb(err);
            });
        }
    ], function (err, resp) {
        // final callback
        proxyprinttodiv('Function datax done --  response  -- ', resp, 39);
        callback(err, resp);
    });




}

// get list of all related wids as per the criteria
exports.getrelatedwids = getrelatedwids = function getrelatedwids(primarywidtype, primarywidval, secondarywidtype, secondarywidval, callback) {

    // construct mongorawquery 
    var mongorawquery = {}
    if (mongorawquery['primarywid'])
        mongorawquery['primarywid'] = primarywidval;
    if (mongorawquery['secondarywid'])
        mongorawquery['secondarywid'] = secondarywidval;
    if (mongorawquery['primarymethod'])
        mongorawquery['primarymethod'] = primarywidtype;
    if (mongorawquery['secondarymethod'])
        mongorawquery['secondarymethod'] = secondarywidtype;

    // // usage 
    // getrelatedwids("groupdto", primarywidval, "groupdto", secondarywidval, function(err,res){

    // })    



    execute({
        "executethis": "querywid",
        "mongorawquery": mongorawquery
    }, function (err, resp) {
        // final callback
        proxyprinttodiv('Function getrelatedwids done --  response  -- ', resp, 39);
        callback(err, resp);
    });
}


exports.testgetrelated = testgetrelated = function testgetrelated(config, callback) {
    




    // // usage 
    // getrelatedwids("groupdto", primarywidval, "groupdto", secondarywidval, function(err,res){

    // })    
    

    execute([{ 
            // groupdto
            "executethis": "addwidmaster",
            "wid": "groupdto",
            "metadata.method": "groupdto",
            "type": "string",
            "groupname": "string",
            "metadata.groupdto.type": "manytoone",
            "metadata.subgroupdto.type": "manytoone"
        }, {
            "executethis": "addwidmaster",
            "wid": "rel_group_group",
            "metadata.method": "relationshipdto",
            "primarywid": "userdto",
            "secondarywid": "securitydto",
            "primarymethod": "userdto",
            "secondarymethod": "securitydto",
            "linktype": "manytoone",
            "relationshiptype": "attributes"
        },{
        "executethis": "querywid",
        "mongorawquery": mongorawquery
    }], function (err, resp) {
        // final callback
        proxyprinttodiv('Function getrelatedwids done --  response  -- ', resp, 39);
        callback(err, resp);
    });
}


