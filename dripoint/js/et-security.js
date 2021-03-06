// createuser merchant1
// createuser user1
// createuser user2
// creategroup (drisales, usergroupdto)
// creategroup (driadmin, usergroupdto)
// addwidtogroup(user1, drisales)
// addwidtogroup(user2, driadmin)
// createparentgrouprelationship(drisales, driadmin)

// getrelatedgroups(drisales) would return drisales and driadmin



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

    var isMatch = false;
    var actioncreatorgroups;
    var actorgroups;

    var actorCreator = "";
    var actionCreator = "";

    // add group wid id from user >> group relationship data records
    function addGroupWids(actioncreatorgroups,res){
        for(var idx in  res){
            var json = res[idx];
            var objkey = Object.keys(json)[0];
            var relationshipJson = json[objkey];

            var groupid = relationshipJson['primarywid'];
            actioncreatorgroups.push(groupid);
        }
    }

    async.series([

            function(cb1) {
                // if mygroup not sent in then convert AC to my userwid (mygroup)
                if (!_mygroup) {
                    proxyprinttodiv('Function sc getting user for ac -- ', _accesstoken, 39);
                    getuserbyac(_accesstoken, function(err, userDto) {
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
            // function(cb1) {
            //     // 'actor' wants to do an 'action'
            //     // 'actorGroup' shall be in the list of 'userGroups' having permissions to 'actionGroup'
            //     proxyprinttodiv('Function sc going to get groups for  actor Group  -- ', actorGroup, 39);
            //     getmygroups({
            //         "wid": actorGroup
            //     }, "groupdto", "groupname", actorGroupsArr, function(err, res) {
            //         // get all userGroups for the actor
            //         // add calculated + default userGroup for the actor('actorGroup')
            //         proxyprinttodiv('Function sc got groups for  actor Group ' + actorGroup + '  -- ', res, 39);
            //         cb1(null, "get usergroups for user");
            //     })
            // },
            // function(cb1) {
            //     // get all actionGroups for the action
            //     // add calculated + default userGroup for the actor('actorGroup')
            //     getmygroups({
            //         "wid": action
            //     }, "groupdto", "type", actionGroupsArr, function(err, res) {
            //         cb1(null, "get action groups for action");
            //     })
            // },
            function(cb1) {
                // get the owner of the original action(metadata.systemdto.creator)
                var query = {
                    "executethis": "querywid",
                    "mongorawquery": {
                        "data.type": _action
                    }
                };

                execute(query, function(err, res) {
                    var res1 = res[0][Object.keys(res[0])[0]];
                    actionCreator = res1['metadata']['system']['creator'];
                    proxyprinttodiv('Function securitycheck Action creator is -- ', actionCreator, 39);
                    cb1(null, "identified action owner");
                });
            },

            function(cb1) {
                // get user groups where user granted permissions is the action 'owner'
                // get all the groups for the actioncreator
                getrelatedwids("", "groupdto", actionCreator, "userdto", "", function(err, res) {
                    actioncreatorgroups = [];
                    addGroupWids(actioncreatorgroups,res);

                    // iterate over all groups and get the related groups
                    for (var i in actioncreatorgroups) {
                        var groupWid = actioncreatorgroups[i];
                        // get all related groups recursively and concat to groups set
                        getrelatedwids("", "groupdto", groupWid, "groupdto", "", function(err, res) {
                            addGroupWids(actioncreatorgroups,res);
                        });
                    }

                    cb1(err, actioncreatorgroups);
                });
            },

            function(cb1) {
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

                // **** check permission wid(s) based on the the user's groups from user's permissions
                // get user groups where user granted permissions is the action 'owner'
                // get all the groups for the actioncreator

                

                if (actioncreatorgroups && (actioncreatorgroups.length > 0)) {
                    // get all my groups
                    getrelatedwids(actorGroup, "groupdto", "", "userdto", {}, function(err, res) {
                        actorgroups = [];

                        for(var idx in res){
                            var json = res[idx];
                            var objkey = Object.keys(json)[0];
                            var groupWid = json[objkey]['primarywid'];
                            actorgroups.push(groupWid);
                            // addactorGroups(res[idx], actorgroups);
                            // TODO :: get more groups applicable recursively
                            getrelatedwids(groupWid, "groupdto", "", "groupdto", "", function(err, res1) {
                                for(var idx1 in res1){
                                    var json = res1[idx1];
                                    var objkey = Object.keys(json)[0];
                                    var groupWid = json[objkey]['primarywid'];
                                    actorgroups.push(groupWid);
                                }
                                // addactorGroups(res, actorgroups);
                                cb1(err, actorgroups);
                            });
                        }

                    });
                } else {
                    // TODO :: no need progressing, security check is false
                    cb1(null, "No action creation permissions");
                }
            },
            function(cb1) {
                // match the 2 arrays for commonality
                checkSecurityEx(actioncreatorgroups,actorgroups,function(err,resp){
                    isMatch = resp;
                    proxyprinttodiv('Function securitycheck auth status -- ', isMatch, 39);
                    securityCheckOutput = isMatch;
                    cb1(null, "matching permissions list");
                });


            }
        ],

        function(err, res) {
            // final callback
            proxyprinttodiv('Function Final callback returns -- ', securityCheckOutput, 39);
            callback(err, securityCheckOutput);
        });

};

// get the 2 wids lists and check the security check output
function checkSecurity(actioncreatorgroups,actorgroups, callback){
    var isMatch = false;
    for (var idx1 in actioncreatorgroups) {
        for (var idx2 in actorgroups) {
            if (actorgroups[idx2] === actioncreatorgroups[idx1]) {
                isMatch = true;
            }
        }
    }
    callback(null, isMatch);
}

// extensive check
// get the 2 wids lists and check the security check output
function checkSecurityEx(actioncreatorgroups,actorgroups, callback){
    var isMatch = false;
    getrelatedwids("","","","",{"$and":[{"wid":{"$in":actioncreatorgroups}},{"wid":{"$in":actorgroups}}]}, function(err, matchingWids) {
        if(matchingWids && matchingWids instanceof Array &&  (matchingWids.length > 0)){
            isMatch = true;
        }
        callback(null, isMatch);
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
                "mongorawquery": {
                    "data.ac": userac
                },
                "mongorelationshipdirection": "backward",
                "mongorelationshipmethod": "all",
                "mongorelationshiptype": "attributes"
            };

            execute(query1, function(err, res1) {
                var res = res1[0];
                proxyprinttodiv('Function getuserbyac query1 -- res', res1, 39);
                var jsonKey = Object.keys(res)[0];
                var jsonVal = res[jsonKey];
                userWid = jsonVal;
                cb(null);
            });

        }
    ], function(err, res) {
        //console.debug' done securitycheck in sync manner.');
        // proxyprinttodiv('securitycheck userDto ', userDto, 39);
        proxyprinttodiv('Function getuserbyac --  >>>>>>  >>>>> userWid -- ', userWid, 39);
        callback(err, userWid);
    });

}





// ***************************************************************************
// *************** PURE LOGIC GENERIC FUNCTIONS ******************************
//****************************************************************************





// ** GENERIC FUNCTION TO CREATE A USER WID ON THE BASIS OF RECEIVED DATA **
// create createuserdata wid data and associated relationships
exports.createuserdata = createuserdata = function createuserdata(userobj, callback) {
    var commandresult = userobj["command.result"];
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
        "country": userobj.country,
        "command":{"result":commandresult}
    }

    // create userdto data
    execute(userJson, function(err, res) {
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
    var commandresult = config["command.result"];

    execute([{
        "executethis": "addwidmaster",
        "metadata.method": "groupdto",
        "metadata.system.creator": "user1", // TODO :: this shall come from inherit
        "groupname": grouptype,
        "type": grouptype,
        "command":{"result":commandresult}
    }], function(err, res) {
        proxyprinttodiv('Function creategroup -- added group -- ', res, 39);
        callback(err, res);
    });
};


// ** GENERIC FUNCTION TO CREATE AN ACTION ON THE BASIS OF RECEIVED DATA **
// logic to create an action -- taking the type of action
exports.createaction = createaction = function createaction(config, callback) {
    // proxyprinttodiv('Function createaction -- adding action of ', config, 39);
    var actiontype = config['actiontype'];
    var commandresult = config["command.result"];
    execute([{
        "executethis": "addwidmaster",
        "type": actiontype,
        "metadata.system.creator": "user1", // TODO :: this shall come from inherit
        "metadata.method": "actiondto",
        "command":{"result":commandresult}
    }], function(err, res) {
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
    }], function(err, res) {
        // proxyprinttodiv('Function createrelationship -- added relationship for  -- ' + primarywid + ' >> ' + secondarywid, linktype, 39);
        callback(err, res);
    });

    // alert('done creating relationship');
}


// ** GENERIC FUNCTION TO ADD A RELATIONSHIP BETWEEN TWO WID TYPES ON THE BASIS OF RECEIVED DATA **
// add permission
exports.addpermission = addpermission = function addpermission(config, callback) {
    // add each permission to the user
    var commandresult = config["command.result"];
    execute([{
        // add permissions as per given information
        "executethis": "addwidmaster",
        "metadata.method": "permissiondto",
        "level": config['permission.level'],
        "command":{"result":commandresult}
    }], function(err, res) {
        proxyprinttodiv('Function addpermission done --  >>>>>> added permission >>>>>  for  -- ', res, 39);
        callback(err, res);
    });
}

// ** GENERIC FUNCTION TO ADD A SECURITY DATA FOR A USER WID ON THE BASIS OF RECEIVED DATA **
// add security data
exports.addsecurity = addsecurity = function addsecurity(config, callback) {
    var commandresult = config["command.result"];
    execute([{
            // add group as per given wid
            "executethis": "addwidmaster",
            "wid": config['userwid'],
            // security data
            "metadata.method": "securitydto",
            "ac": config['securityac'],
            "command":{"result":commandresult}
        }],
        function(err, res) {

            var config1 = {"currentwid":config['userwid'], "currentwidmethod":"userdto", "targetwid":res['wid'], "targetwidmethod":"securitydto", "linktype":"onetoone"};
            addtargetwidtocurrentwid( config1, function(err, res) {
                proxyprinttodiv('Function addsecurity --  >>>>>> added security  >>>>>  for  -- ', res, 39);
                // console.debug('added security for wid ' + wid + " >>>> " + JSON.stringify(res));
                callback(err, res)
            })

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

    execute(jsonToAdd, function(err, res) {
        proxyprinttodiv('Function addwidtogroup done --  >>>>>> added group  to wid >>>>>  for  -- ' + config['group.wid'] + " >>> " + config['group.targetwid'], res, 39);
        callback(err, res);
    });


}





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

    var user1wid, user2wid, action1wid, action2wid, adminuserwid, group1wid, group2wid, dbgroupwid, databasetablegroupwid, permissionwid;

    var accessconfig1 = {
        "_accesstoken": 'user1ac',
        "_mygroup": '',
        "_myphone": '9873838958',
        "_action": 'getaction',
        "_dbgroup": 'data',
        "_collection": 'wikiwallettesting',
        "_server": 'server1',
        "_datastore": 'main',
        "organizationaction": "getaction"
    };

    var accessconfig2 = {
        "_accesstoken": 'user2ac',
        "_mygroup": '',
        "_myphone": '9873838958',
        "_action": 'getaction',
        "_dbgroup": 'data',
        "_collection": 'wikiwallettesting',
        "_server": 'server1',
        "_datastore": 'main',
        "organizationaction": "getaction"
    };



    async.series([
        function(cb) {
            // create admin user
            dtox({}, function(err, resp) {
                proxyprinttodiv('Function created schema done --   for  -- ', resp, 39);
                cb(err);
            });
        },
        function(cb) {
            // create organization user 1
            createuserdata(organizationuser1, function(err, resp) {
                user1wid = resp[0].wid;
                proxyprinttodiv('Function organization createuser 1 done --  for  -- ', user1wid, 39);
                cb(err);
            });
        },
        function(cb) {
            // add security info for organization user 1
            addsecurity({
                "userwid": user1wid,
                "securityac": organizationuser1security.ac
            }, function(err, resp) {
                proxyprinttodiv('Function addsecurity done --  for user1 -- ', user1wid, 39);
                cb(err);
            });
        },
        function(cb) {
            // createaction (by admin user)
            createaction({
                "actiontype": action1
            }, function(err, resp) {
                action1wid = resp[0].wid;
                proxyprinttodiv('Function createaction done --    for  -- ', action1wid, 39);
                cb(err);
            });
        },
        function(cb) {
            // createaction (by admin user)
            createaction({
                "actiontype": action2
            }, function(err, resp) {
                action2wid = resp[0].wid;
                proxyprinttodiv('Function createaction done --    for  -- ', action2wid, 39);
                cb(err);
            });
        },

        function(cb) {
            // create group (by admin user)
            creategroup({
                "grouptype": group1
            }, function(err, resp) {
                group1wid = resp[0][0].wid;
                proxyprinttodiv('Function creategroup done --    for  -- ', group1wid, 39);
                cb(err);
            });
        },

        function(cb) {
            // create group (by admin user)
            creategroup({
                "grouptype": group2
            }, function(err, resp) {
                group2wid = resp[0][0].wid;
                proxyprinttodiv('Function creategroup done --    for  -- ', group2wid, 39);
                cb(err);
            });
        },



        // add group create to actiongroup and usergroup
        function(cb) {
            // create permission (for organization user), add permission data to organizationuser wid
            addpermission({
                "permission.userwid": user1wid,
                "permission.level": 99, // TODO :: REMOVE HARDCODING
                "permission.groupwid": group1wid
            }, function(err, resp) {
                proxyprinttodiv('Function addpermission done --    for  -- ', resp, 39);
                permissionwid = resp[0][0].wid;
                cb(err);
            });
        },

        function(cb) {
            var config = {"currentwid":user1wid, "currentwidmethod":"userdto", "targetwid":permissionwid, "targetwidmethod":"permissiondto", "linktype":"onetomany"};
            addtargetwidtocurrentwid( config, function(err, res) {
                cb(err);
            })
        },
        function(cb) {
            // attach groupdto to permissiondto
            var config = {"currentwid":permissionwid, "currentwidmethod":"permissiondto", "targetwid":group1wid, "targetwidmethod":"groupdto", "linktype":"manytomany"};
            addtargetwidtocurrentwid( config,function(err, res) {
                cb(err);
            })
        },
        function(cb) {
            // attach userdto to groupdto
            var config = {"currentwid":group1wid, "currentwidmethod":"groupdto", "targetwid":user1wid, "targetwidmethod":"userdto", "linktype":"manytomany"};
            addtargetwidtocurrentwid( config, function(err, res) {
                cb(err);
            })
        },
        function(cb) {
            // attach actiondto to groupdto
            var config = {"currentwid":group1wid, "currentwidmethod":"groupdto", "targetwid":action1, "targetwidmethod":"actiondto", "linktype":"manytomany"};
            addtargetwidtocurrentwid( config, function(err, res) {
                cb(err);
            })
        },

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
        function(cb) {
            // perform the securitycheck for the getaction, with organization user user ac
            sc(accessconfig1, function(err, resp) {
                proxyprinttodiv('Security check done 1 --    response  -- ', resp, 39);
                cb(err);
            });
        },
        function(cb) {
            // perform the securitycheck for the getaction, with organization user user ac
            sc(accessconfig2, function(err, resp) {
                proxyprinttodiv('Security check done 2 --    response  -- ', resp, 39);
                cb(err);
            });
        }

    ], function(err, resp) {
        // final callback
        proxyprinttodiv('Function datax done --  response  -- ', resp, 39);
        callback(err, resp);
    });
}

// get list of all related wids as per the criteria
exports.getrelatedwids = getrelatedwids = function getrelatedwids(primarywidtype, primarywidval, secondarywidtype, secondarywidval, extracondition, callback) {


    // construct mongorawquery
    var mongorawquery = {}
    if (primarywidtype)
        mongorawquery['data.primarywid'] = primarywidtype;

    if (secondarywidtype)
        mongorawquery['data.secondarywid'] = secondarywidtype;

    if (primarywidval)
        mongorawquery['data.primarymethod'] = primarywidval;

    if (secondarywidval)
        mongorawquery['data.secondarymethod'] = secondarywidval;

    if (extracondition && (typeof extracondition === "object") &&  (Object.keys(extracondition).length > 0)) {
        var andQuery = {
            "$and": []
        };
        var temparr = [];
        temparr.push(extracondition);
        andQuery['$and'] = temparr;
        mongorawquery = andQuery;
    }

    // // usage
    // getrelatedwids("groupdto", primarywidval, "groupdto", secondarywidval,{"$ne":{"user":""}} function(err,res){

    // })



    execute({
        "executethis": "querywid",
        "mongorawquery": mongorawquery
    }, function(err, resp) {
        // final callback
        proxyprinttodiv('Function getrelatedwids done --  response  -- ', resp, 39);
        callback(err, resp);
    });
}







// passin data and get the relationship created
exports.addtargetwidtocurrentwid = addtargetwidtocurrentwid = function addtargetwidtocurrentwid(config, callback) {
    execute({
        "executethis": "addwidmaster",
        "metadata.method": "relationshipdto",
        "primarywid": config['currentwid'],
        "secondarywid": config['targetwid'],
        "primarymethod": config['currentwidmethod'],
        "secondarymethod": config['targetwidmethod'],
        "linktype": config['linktype'],
        "relationshiptype": "attributes"
    }, function(err, resp) {
        proxyprinttodiv('Function addtargetwidtocurrentwid done -- ' + config['currentwid'] + ' >>>>>> ' + config['linktype'] + ' >>>>> ' + config['targetwid'] + '  -- ', resp, 99);
        callback(err, resp);
    });

}
