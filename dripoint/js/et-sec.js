/// add lots of data and then fetch permissions for each user
/// example1 from SS https://docs.google.com/spreadsheet/ccc?key=0AqSqNB4MEkB0dGthbkY4WUZGNklnTXpGNXJMNVo2Rmc&usp=drive_web#gid=41 , securityexamples tab
exports.ex1sec = ex1sec = function ex1sec(params, callback) {

    debuglevel = 39;

    var douguserwid, marshauserwid, randyuserwid;
    var employeegroupwid, admingroupwid, managergroupwid;
    var getcouponwid, executecouponwid, editcouponwid, createcouponwid, deletecouponwid, fullcpnactionswid, advcpnactionswid, basiccpnactionswid;
    var dougpermissionwid, marshapermissionwid, randypermissionwid;

    async.series([

        // setup dtos for security - permission,security,action,user,groups etc.
        function(cb) {
            dtox({}, function(err, resp) {
                proxyprinttodiv('Function created schema done --   for  -- ', resp, 39);
                cb(err);
            });
        },
        // create user doug
        function(cb) {
            var douguser = {
                "wid": "doug",
                "fname": "Doug",
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


            createuserdata(douguser, function(err, resp) {
                douguserwid = resp.wid;
                proxyprinttodiv('Function createuser done --    for  -- ', douguserwid, 39);
                cb(err);
            });
        },
        function(cb) {
            // add security info for organization user 1
            addsecurity({
                "userwid": douguserwid,
                "securityac": "douguserac"
            }, function(err, resp) {
                proxyprinttodiv('Function addsecurity done --  for douguserwid -- ', douguserwid, 39);
                cb(err);
            });
        },
        // create user randy
        function(cb) {
            var randyuser = {
                "wid": "randy",
                "fname": "Randy",
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


            createuserdata(randyuser, function(err, resp) {
                randyuserwid = resp.wid;
                proxyprinttodiv('Function createuser done --    for  -- ', randyuserwid, 39);
                cb(err);
            });
        },
        function(cb) {
            // add security info for organization user randy
            addsecurity({
                "userwid": randyuserwid,
                "securityac": "randyuserac"
            }, function(err, resp) {
                proxyprinttodiv('Function addsecurity done --  for randyuserwid -- ', randyuserwid, 39);
                cb(err);
            });
        },
        // create user marsha
        function(cb) {
            var marshauser = {
                "wid": "marsha",
                "fname": "Marsha",
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
            createuserdata(marshauser, function(err, resp) {
                marshauserwid = resp.wid;
                proxyprinttodiv('Function createuser done --    for  -- ', marshauserwid, 39);
                cb(err);
            });
        },
        function(cb) {
            // add security info for organization user marsha
            addsecurity({
                "userwid": marshauserwid,
                "securityac": "marshauserac"
            }, function(err, resp) {
                proxyprinttodiv('Function addsecurity done --  for marshauserwid -- ', marshauserwid, 39);
                cb(err);
            });
        },

        // Create Actions:  
        // Doug getcoupon
        function(cb) {
            // getcoupon
            createaction({
                "creator": douguserwid,
                "actiontype": "getcoupon"
            }, function(err, resp) {
                getcouponwid = resp.wid;
                proxyprinttodiv('Function createaction done --    for getcouponwid  -- ', getcouponwid, 39);
                cb(err);
            });
        },
        // Doug executecoupon
        function(cb) {
            // executecoupon
            createaction({
                "creator": douguserwid,
                "actiontype": "executecoupon"
            }, function(err, resp) {
                executecouponwid = resp.wid;
                proxyprinttodiv('Function createaction done --    for executecouponwid  -- ', executecouponwid, 39);
                cb(err);
            });
        },
        // Doug editcoupon
        function(cb) {
            // editcoupon
            createaction({
                "creator": douguserwid,
                "actiontype": "editcoupon"
            }, function(err, resp) {
                editcouponwid = resp.wid;
                proxyprinttodiv('Function createaction done --    for editcouponwid  -- ', editcouponwid, 39);

                cb(err);
            });
        },
        // Doug createcoupon
        function(cb) {
            // createcoupon
            createaction({
                "creator": douguserwid,
                "actiontype": "createcoupon"
            }, function(err, resp) {
                createcouponwid = resp.wid;
                proxyprinttodiv('Function createaction done --    for createcouponwid  -- ', createcouponwid, 39);

                cb(err);
            });
        },
        // Doug deletecoupon
        function(cb) {
            // deletecoupon
            createaction({
                "creator": douguserwid,
                "actiontype": "deletecoupon"
            }, function(err, resp) {
                deletecouponwid = resp.wid;
                proxyprinttodiv('Function createaction done --    for deletecouponwid  -- ', deletecouponwid, 39);

                cb(err);
            });
        },


        // Create Groups:   
        // Doug employee
        function(cb) {
            // create group
            creategroup({
                "grouptype": "employee"
            }, function(err, resp) {
                employeegroupwid = resp.wid;
                proxyprinttodiv('Function creategroup done --    for employeegroupwid  -- ', employeegroupwid, 39);

                cb(err);
            });
        },
        // Doug admin
        function(cb) {
            // create group
            creategroup({
                "grouptype": "admin"
            }, function(err, resp) {
                admingroupwid = resp.wid;
                proxyprinttodiv('Function creategroup done --    for admingroupwid  -- ', admingroupwid, 39);

                cb(err);
            });
        },
        // Doug manager
        function(cb) {
            // create group
            creategroup({
                "grouptype": "manager"
            }, function(err, resp) {
                managergroupwid = resp.wid;
                proxyprinttodiv('Function creategroup done --    for managergroupwid  -- ', managergroupwid, 39);

                cb(err);
            });
        },



        // action groups 
        // Doug basiccpnactions 
        function(cb) {
            // create group
            creategroup({
                "grouptype": "basiccpnactions"
            }, function(err, resp) {
                basiccpnactionswid = resp.wid;
                proxyprinttodiv('Function creategroup done --    for basiccpnactionswid  -- ', basiccpnactionswid, 39);

                cb(err);
            });
        },
        // action groups 
        // Doug advcpnactions
        function(cb) {
            // create group
            creategroup({
                "grouptype": "advcpnactions"
            }, function(err, resp) {
                advcpnactionswid = resp.wid;
                proxyprinttodiv('Function creategroup done --    for advcpnactionswid  -- ', advcpnactionswid, 39);

                cb(err);
            });
        },
        // action groups 
        // Doug fullcpnactions
        function(cb) {
            // create group
            creategroup({
                "grouptype": "fullcpnactions"
            }, function(err, resp) {
                fullcpnactionswid = resp.wid;
                proxyprinttodiv('Function creategroup done --    for fullcpnactionswid  -- ', fullcpnactionswid, 39);

                cb(err);
            });
        },




        // create group -- managers
        function(cb) {
            creategroup({
                "grouptype": "managers"
            }, function(err, resp) {
                managergroupwid = resp.wid;
                proxyprinttodiv('Function creategroup done --    for managergroupwid  -- ', managergroupwid, 39);

                cb(err);
            });
        },

        // create group -- admin
        function(cb) {
            creategroup({
                "grouptype": "admin"
            }, function(err, resp) {
                admingroupwid = resp.wid;
                proxyprinttodiv('Function creategroup done --    for admingroupwid  -- ', admingroupwid, 39);

                cb(err);
            });
        },


        // create group -- employee
        function(cb) {
            creategroup({
                "grouptype": "employee"
            }, function(err, resp) {
                employeegroupwid = resp.wid;
                proxyprinttodiv('Function creategroup done --    for employeegroupwid  -- ', employeegroupwid, 39);

                cb(err);
            });
        },




        // Add Users to Groups: 
        // Doug     manager
        // Randy    admin
        // Marsha   employee

        // Add Users to Groups: 
        // Doug     manager
        // attach userdto to groupdto, doug to manager
        function(cb) {
            var config = {
                "currentwid": managergroupwid,
                "currentwidmethod": "groupdto",
                "targetwid": douguserwid,
                "targetwidmethod": "userdto",
                "linktype": "manytomany"
            };
            addtargetwidtocurrentwid(config, function(err, res) {
                proxyprinttodiv('attach userdto to groupdto, doug to manager   -- ', res, 39);

                cb(err);
            })
        },


        // Add Users to Groups: 
        // Randy        admin
        // attach userdto to groupdto, randy to admin
        function(cb) {
            var config = {
                "currentwid": admingroupwid,
                "currentwidmethod": "groupdto",
                "targetwid": randyuserwid,
                "targetwidmethod": "userdto",
                "linktype": "manytomany"
            };
            addtargetwidtocurrentwid(config, function(err, res) {
                proxyprinttodiv('attach userdto to groupdto, randy to admin   -- ', res, 39);

                cb(err);
            })
        },


        // Add Users to Groups: 
        // Randy     admin
        // attach userdto to groupdto, Marsha to employee
        function(cb) {
            var config = {
                "currentwid": employeegroupwid,
                "currentwidmethod": "groupdto",
                "targetwid": marshauserwid,
                "targetwidmethod": "userdto",
                "linktype": "manytomany"
            };
            addtargetwidtocurrentwid(config, function(err, res) {
                proxyprinttodiv('attach userdto to groupdto, Marsha to employee   -- ', res, 39);

                cb(err);
            })
        },









        // getcoupon    basiccpnactions
        // add getcoupon action to basiccpnactions group
        // attach actiondto to groupdto
        function(cb) {
            var config = {
                "currentwid": basiccpnactionswid,
                "currentwidmethod": "groupdto",
                "targetwid": getcouponwid,
                "targetwidmethod": "actiondto",
                "linktype": "manytomany"
            };
            addtargetwidtocurrentwid(config, function(err, res) {
                proxyprinttodiv('attach actiondto to groupdto, getcoupon to basiccpnactions   -- ', res, 39);

                cb(err);
            })
        },

        // editcoupon   advcpnactions
        // add editcoupon action to advcpnactions group
        // attach actiondto to groupdto
        function(cb) {
            var config = {
                "currentwid": advcpnactionswid,
                "currentwidmethod": "groupdto",
                "targetwid": editcouponwid,
                "targetwidmethod": "actiondto",
                "linktype": "manytomany"
            };
            addtargetwidtocurrentwid(config, function(err, res) {
                proxyprinttodiv('add editcoupon action to advcpnactions group   -- ', res, 39);
                cb(err);
            })
        },




        // executecoupon    advcpnactions
        // add executecoupon action to advcpnactions group
        // attach actiondto to groupdto
        function(cb) {
            var config = {
                "currentwid": advcpnactionswid,
                "currentwidmethod": "groupdto",
                "targetwid": executecouponwid,
                "targetwidmethod": "actiondto",
                "linktype": "manytomany"
            };
            addtargetwidtocurrentwid(config, function(err, res) {
                proxyprinttodiv('add executecoupon action to advcpnactions group  -- ', res, 39);

                cb(err);
            })
        },

        // createcoupon fullcpnactions
        // add createcoupon action to fullcpnactions group
        // attach actiondto to groupdto
        function(cb) {
            var config = {
                "currentwid": fullcpnactionswid,
                "currentwidmethod": "groupdto",
                "targetwid": createcouponwid,
                "targetwidmethod": "actiondto",
                "linktype": "manytomany"
            };
            addtargetwidtocurrentwid(config, function(err, res) {
                proxyprinttodiv('add createcoupon action to fullcpnactions group -- ', res, 39);

                cb(err);
            })
        },

        // deletecoupon fullcpnactions
        // add deletecoupon action to fullcpnactions group
        // attach actiondto to groupdto
        function(cb) {
            var config = {
                "currentwid": fullcpnactionswid,
                "currentwidmethod": "groupdto",
                "targetwid": deletecouponwid,
                "targetwidmethod": "actiondto",
                "linktype": "manytomany"
            };
            addtargetwidtocurrentwid(config, function(err, res) {
                proxyprinttodiv('add deletecoupon action to fullcpnactions group -- ', res, 39);

                cb(err);
            })
        },


        // Add Groups to Groups:    
        // admin    employee
        function(cb) {
            var config = {
                "currentwid": admingroupwid,
                "currentwidmethod": "groupdto",
                "targetwid": employeegroupwid,
                "targetwidmethod": "groupdto",
                "linktype": "manytomany"
            };
            addtargetwidtocurrentwid(config, function(err, res) {
                proxyprinttodiv('Add Groups to Groups:   -- admin to employee group -- ', res, 39);

                cb(err);
            })
        },

        // Add Groups to Groups:    
        // manager  admin
        function(cb) {
            var config = {
                "currentwid": managergroupwid,
                "currentwidmethod": "groupdto",
                "targetwid": admingroupwid,
                "targetwidmethod": "groupdto",
                "linktype": "manytomany"
            };
            addtargetwidtocurrentwid(config, function(err, res) {
                proxyprinttodiv('Add Groups to Groups:   -- manager to admin group -- ', res, 39);

                cb(err);
            })
        },


        // Doug { admin, advcpnactions }

        // Enter Permissions:   
        // Doug { basiccpnactions, employee }
        // add group create to actiongroup and usergroup
        function(cb) {
            addpermission({
                "permission.userwid": douguserwid,
                "onfailwid": "",
                "permission.level": 99, // TODO :: REMOVE HARDCODING
                "description": "Doug    {  basiccpnactions, employee }"
            }, function(err, resp) {
                proxyprinttodiv('Function addpermission done --    for  dougpermissionwid -- ', resp, 39);
                dougpermissionwid = resp.wid;
                cb(err);
            });
        },
        // attach basiccpnactionswid group to permissiondto
        function(cb) {
            var config = {
                "currentwid": dougpermissionwid,
                "currentwidmethod": "permissiondto",
                "targetwid": basiccpnactionswid,
                "targetwidmethod": "groupdto",
                "linktype": "manytomany"
            };
            addtargetwidtocurrentwid(config, function(err, res) {
                cb(err);
            })
        },
        // attach employeegroupwid group to permissiondto
        function(cb) {
            var config = {
                "currentwid": dougpermissionwid,
                "currentwidmethod": "permissiondto",
                "targetwid": employeegroupwid,
                "targetwidmethod": "groupdto",
                "linktype": "manytomany"
            };
            addtargetwidtocurrentwid(config, function(err, res) {
                cb(err);
            })
        },


        // Enter Permissions:   
        // Doug { manager, fullcpnactions }
        // add group create to actiongroup and usergroup
        function(cb) {
            addpermission({
                "permission.userwid": douguserwid,
                "onfailwid": "",
                "permission.level": 99, // TODO :: REMOVE HARDCODING
                "description": "Doug    { manager, fullcpnactions }"
            }, function(err, resp) {
                proxyprinttodiv('Function addpermission done --    for  dougpermissionwid -- ', resp, 39);
                dougpermissionwid = resp.wid;
                cb(err);
            });
        },
        // attach fullcpnactions group to permissiondto
        function(cb) {
            var config = {
                "currentwid": dougpermissionwid,
                "currentwidmethod": "permissiondto",
                "targetwid": fullcpnactionswid,
                "targetwidmethod": "groupdto",
                "linktype": "manytomany"
            };
            addtargetwidtocurrentwid(config, function(err, res) {
                cb(err);
            })
        },
        // attach managergroupwid group to permissiondto
        function(cb) {
            var config = {
                "currentwid": dougpermissionwid,
                "currentwidmethod": "permissiondto",
                "targetwid": managergroupwid,
                "targetwidmethod": "groupdto",
                "linktype": "manytomany"
            };
            addtargetwidtocurrentwid(config, function(err, res) {
                cb(err);
            })
        },

        // Enter Permissions:   
        // Doug { admin, advcpnactions }
        // add group create to actiongroup and usergroup
        function(cb) {
            addpermission({
                "permission.userwid": douguserwid,
                "onfailwid": "",
                "permission.level": 99, // TODO :: REMOVE HARDCODING
                "description": "Doug    { admin, advcpnactions }"
            }, function(err, resp) {
                proxyprinttodiv('Function addpermission done --    for  dougpermissionwid -- ', resp, 39);
                dougpermissionwid = resp.wid;
                cb(err);
            });
        },
        // attach advcpnactions group to permissiondto
        function(cb) {
            var config = {
                "currentwid": dougpermissionwid,
                "currentwidmethod": "permissiondto",
                "targetwid": advcpnactionswid,
                "targetwidmethod": "groupdto",
                "linktype": "manytomany"
            };
            addtargetwidtocurrentwid(config, function(err, res) {
                cb(err);
            })
        },
        // attach admingroupwid group to permissiondto
        function(cb) {
            var config = {
                "currentwid": dougpermissionwid,
                "currentwidmethod": "permissiondto",
                "targetwid": admingroupwid,
                "targetwidmethod": "groupdto",
                "linktype": "manytomany"
            };
            addtargetwidtocurrentwid(config, function(err, res) {
                cb(err);
            })
        }
    ], function(err, resp) {
        // final callback
        proxyprinttodiv('Function ex1sec done --  response  -- ', resp, 39);
        callback(err, resp);
    });

};


// addendum to ex1sec test, tests against data for 3 users Doug, Marsha and Randy for security check 
exports.ex1sectest = ex1sectest = function ex1sectest(params, callback) {

    // Effective Permissions:   
    // Marsha   getcoupon

    // Randy    getcoupon
    //  executecoupon
    //  editcoupon

    // Doug getcoupon
    //  executecoupon
    //  editcoupon
    //  createcoupon
    //  deletecoupon



    // Doug
    var accessconfig1 = {
        "_mygroup": '',
        "_myphone": '9873838958',
        "_action": 'deletecoupon',
        "_dbgroup": 'data',
        "_collection": 'wikiwallettesting',
        "_server": 'server1',
        "_datastore": 'main',
        "command.result": "result",
        "command.enviromment.accesstoken": "douguserac",
        "command.enviromment.userid": "doug"
    };

    //Randy
    var accessconfig2 = {
        "_mygroup": '',
        "_myphone": '9873838958',
        "_action": 'getcoupon',
        "_dbgroup": 'data',
        "_collection": 'wikiwallettesting',
        "_server": 'server1',
        "_datastore": 'main',
        "command.result": "result",
        "command.enviromment.accesstoken": "randyuserac",
        "command.enviromment.userid": "doug"
    };

    //Marsha
    var accessconfig3 = {
        "_mygroup": '',
        "_myphone": '9873838958',
        "_action": 'getcoupon',
        "_dbgroup": 'data',
        "_collection": 'wikiwallettesting',
        "_server": 'server1',
        "_datastore": 'main',
        "command.result": "result",
        "command.enviromment.accesstoken": "marshauserac",
        "command.enviromment.userid": "doug"
    };
    //Marsha
    var accessconfig4 = {
        "_mygroup": '',
        "_myphone": '9873838958',
        "_action": 'executecoupon',
        "_dbgroup": 'data',
        "_collection": 'wikiwallettesting',
        "_server": 'server1',
        "_datastore": 'main',
        "command.result": "result",
        "command.enviromment.accesstoken": "marshauserac",
        "command.enviromment.userid": "doug"
    };

    async.series([

        function(cb) {
            // perform the securitycheck for the getaction, with organization user user ac
            ex1sec({}, function(err, resp) {
                proxyprinttodiv('Data entered  -   response  -- ', resp, 39);
                cb(err);
            });

        },
        // function(cb) {
        //     // perform the securitycheck for the getaction, with organization user user ac
        //     sc(accessconfig1, function(err, resp) {
        //         proxyprinttodiv('Security check done 1 --  accessconfig1 -   response  -- ', resp, 39);
        //         cb(err);
        //     });

        // },
        // function(cb) {
        //     // perform the securitycheck for the getaction, with organization user user ac
        //     sc(accessconfig2, function(err, resp) {
        //         proxyprinttodiv('Security check done 1 --  accessconfig2 -  response  -- ', resp, 39);
        //         cb(err);
        //     });

        // },
        // function(cb) {
        //     // perform the securitycheck for the getaction, with organization user user ac
        //     sc(accessconfig3, function(err, resp) {
        //         proxyprinttodiv('Security check done 1 --  accessconfig3 -   response  -- ', resp, 39);
        //         cb(err);
        //     });
        // }
        // ,
        function(cb) {
            // perform the securitycheck for the getaction, with organization user user ac
            sc(accessconfig4, function(err, resp) {
                proxyprinttodiv('Security check done 1 --  accessconfig4 -   response  -- ', resp, 39);
                cb(err);
            });
        }
    ], function(err, resp) {
        // final callback
        proxyprinttodiv('Function ex1sectest done --  response  -- ', resp, 39);
        callback(err, resp);
    });
}
// ***************************************************************
// ***********************SECURITY CHECK**************************
// ***************************************************************
// > we have a 
// > user A wants to pretend to be user B for action C
// > we get all the groups of A
// > we get all the groups of C
// > we get all the permissions where where AC groups match
// > if pass then we proceed
// > we get all the groups of B
// > we get all the permissions where BC groups match
// ***************************************************************
exports.sc = sc = function sc(accessconfig, callback) {

    // // ***********************************************************************************
    debuglevel = 39;

    var commandresult = accessconfig["command.result"]; // result to be wrapped as
    var _accesstoken = accessconfig["command.enviromment.accesstoken"]; // who the user is
    var _actorpretension = accessconfig["command.enviromment.userid"]; // what user is pretending as
    var _mygroup = accessconfig["_mygroup"]; // usergroup coming in
    var _action = accessconfig["_action"]; // action being attempted
    var _myphone = accessconfig["_myphone"];
    var _server = accessconfig["_server"];
    var _dbgroup = accessconfig["_dbgroup"];
    var _datastore = accessconfig["_datastore"];
    var _loginlevel = accessconfig["_loginlevel"]; // login level coming in

    var groupsfrommetadata = [];

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
    var actionwid;
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

    var groupofactors = [];

    // add group wid id from user >> group relationship data records
    function addGroupWids(actioncreatorgroups, res) {
        for (var idx in res) {
            var relationshipJson = res[idx];
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
                        if (userDto) {
                            actorGroup = userDto[0].wid;
                            // get all groups from this user wid
                            getrelatedwids("", "groupdto", actorGroup, "userdto", {
                                // "metadata.system.creator": _actorpretension
                            }, function(err, res) {
                                async.mapSeries(res, function(reljson, cbMap) {
                                        async.nextTick(function() {
                                            groupofactors.push(reljson.primarywid); // push each of the the group wid for the user
                                            cbMap(null);
                                        });
                                    },
                                    function(err, res) {
                                        proxyprinttodiv('Function sc got actor groups from user for ac -- ', groupofactors, 39);
                                        cb1(err, groupofactors);
                                    });
                            });
                        } else {
                            cb1(null);
                        }
                    });

                } else {
                    // get all groups from this group
                    actorGroup = _mygroup;

                    getrelatedwids("", "groupdto", actorGroup, "groupdto", {}, function(err, res) {
                        async.mapSeries(res, function(reljson, cbMap) {
                                async.nextTick(function() {
                                    groupofactors.push(reljson.primarywid); // push each of the the group wid for the user
                                    cbMap(null);
                                });
                            },
                            function(err, res) {
                                proxyprinttodiv('Function sc received actor Group for ac -- ', groupofactors, 39);
                                cb1(err, groupofactors);
                            });
                    });
                }
            },

            function(cb1) {
                // get      the owner of the original action(metadata.systemdto.creator)
                var query = {
                    "executethis": "querywidmaster",
                    "mongorawquery": {
                        "data.type": _action
                    }
                };
                var executeobject = query;
                executeobject.command = executeobject.command || {};
                executeobject.command.executetype = executeobject.command.executetype || "series";
                executeobject.command.notfoundok = executeobject.command.notfoundok || true;
                executeobject.command.getwidmaster = executeobject.command.getwidmaster || {
                    "convertmethod": "dto",
                    "execute": "ConvertFromDOTdri"
                };
                executeobject.command.environment = executeobject.command.environment || {
                    "run": {}
                };

                var etEnvironment = new DriEnvironment(executeobject.command.environment);
                etEnvironment.execute(executeobject, function(err, res) {

                    var res1 = res[0];
                    actionwid = res1['wid'];
                    if (res1 && res1['metadata'] && res1['metadata']['system']) {
                        actionCreator = res1['metadata']['system']['creator'];
                        proxyprinttodiv('Function securityCheckOutputeck Action creator is -- ', actionCreator, 39);
                        cb1(null, "identified action owner");
                    } else {
                        cb1(null);
                    }
                });
            },

            function(cb1) {
                // get user groups where user granted permissions is the action 'owner'
                // get all the groups for the actioncreator
                getrelatedwids("", "groupdto", actionCreator, "userdto", "", function(err, res) {
                    actioncreatorgroups = [];
                    // addSavedGroupsDataIfNeeded(actionCreator, actioncreatorgroups, function(e, actioncreatorgroups) {
                    addGroupWids(actioncreatorgroups, res);
                    // iterate over all groups and get the related groups
                    async.mapSeries(actioncreatorgroups, function(groupWid, cbMap) {
                        async.nextTick(function() {
                            // get all related groups recursively and concat to groups set
                            getrelatedwids("", "groupdto", groupWid, "groupdto", "", function(err, res) {
                                // addSavedGroupsDataIfNeeded(groupWid, actioncreatorgroups, function(e, actioncreatorgroups) {
                                addGroupWids(actioncreatorgroups, res);
                                cbMap(null);
                                // });
                            });
                        });
                    }, function(err, res) {
                        proxyprinttodiv('get user groups where user granted permissions is the action owner  -- ', actioncreatorgroups, 39);
                        cb1(err, actioncreatorgroups);
                    });
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



                    actorgroups = []; // this is used later

                    // get all my groups
                    async.mapSeries(groupofactors, function(actorGroup, cbm) {
                        async.nextTick(function() {
                            getrelatedwids(actorGroup, "groupdto", "", "userdto", {}, function(err, res) {

                                // addSavedGroupsDataIfNeeded(actorGroup, actorgroups, function(e, actorgroups) {
                                async.mapSeries(res, function(json, cbMap) {
                                        async.nextTick(function() {

                                            // var objkey = Object.keys(json)[0];
                                            var groupWid = json['primarywid'];
                                            actorgroups.push(groupWid);
                                            cbMap(err, actorgroups);

                                            // addactorGroups(res[idx], actorgroups);
                                            getrelatedwids(groupWid, "groupdto", "", "groupdto", "", function(err, res1) {
                                                // addSavedGroupsDataIfNeeded(groupWid, actorgroups, function(e, actorgroups) {


                                                async.mapSeries(res1, function(json, cbMapInner) {
                                                    async.nextTick(function() {
                                                        // var objkey = Object.keys(json)[0];
                                                        var groupWid = json['primarywid'];
                                                        actorgroups.push(groupWid);
                                                        // addactorGroups(res, actorgroups);
                                                        cbMapInner(null);
                                                    });
                                                }, function(err, res) {
                                                    proxyprinttodiv('Function securitycheck   -- 2.1', actorgroups, 39);
                                                    cbMap(err, actorgroups);
                                                });
                                            });
                                            // });
                                        });
                                    },
                                    function(err, res) {
                                        proxyprinttodiv('Function securitycheck   -- 2.2', actorgroups, 39);
                                        cbm(err, actorgroups);
                                    });
                                // });
                            });
                        });
                    }, function(err, res) {
                        proxyprinttodiv('Function securitycheck   -- 2.2.2', actorgroups, 39);
                        cb1(err, actorgroups);
                    });
                } else {
                    //  no need progressing, security check is false
                    cb1(null, "No action creation permissions");
                }
            },
            function(cb1) {
                // match the 2 arrays for commonality
                checkSecurityPermissions(actionwid, actorGroup, actioncreatorgroups, actorgroups, function(err, resp) {
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
            callback(err, {
                "authstatus": securityCheckOutput
            });
        });

};


// extensive check
// get the 2 wids lists and check the security check output

function checkSecurity(actioncreatorgroups, actorgroups, callback) {
    var isMatch = false;
    getrelatedwids("", "", "", "", {
        "$and": [{
            "wid": {
                "$in": actioncreatorgroups
            }
        }]
    }, function(err, actioncreatorgroupsfull) {

        getrelatedwids("", "", "", "", {
            "$and": [{
                "wid": {
                    "$in": actorgroups
                }
            }]
        }, function(err, actorgroupsfull) {

            async.mapSeries(actioncreatorgroupsfull, function(actioncreatorgroup, cbMap) {


                    if (!isMatch) {
                        async.mapSeries(actorgroupsfull, function(actorgroupfull, cbMap1) {
                                if (!isMatch) {
                                    var sameGroup = ((actorgroupfull['type'] === actioncreatorgroup['type']));
                                    cbMap1(null);
                                } else {
                                    cbMap1(null);
                                }
                            },
                            function(err, res) {
                                cbMap(null);
                            });
                    } else {
                        cbMap(null);
                    }
                },
                function(err, res) {
                    callback(null, isMatch);
                });


        });
    });
}

function getAllActions(groupsarr,callback){
    // get permissions list for any groups in the groupsarr
    // get actions allowed for this group
    var permissionsarr = [];
    var actionsarr = [];
    var actiongroupsarr =[];
    var executeobject1 = {};
    executeobject1["executethis"] = "querywidmaster";
    executeobject1["mongorawquery"] = {
        "data.secondarywid": {
            "$in": groupsarr
        },
        "data.primarymethod": "permissiondto",
        "data.secondarymethod": "groupdto"
    };
    execute(executeobject1, function(err, per_usergroup_relationship) {
        for (var i in per_usergroup_relationship) {
            if ((per_usergroup_relationship[i].secondarywid !== per_usergroup_relationship[i].secondarymethod) && (per_usergroup_relationship[i].primarywid !== per_usergroup_relationship[i].primarymethod)) {
                // add action to the set
                permissionsarr.push(per_usergroup_relationship[i].primarywid);
            }
        }

        // get actions from permissions arr
        var executeobject2 = {};
        executeobject2["executethis"] = "querywidmaster";
        executeobject2["mongorawquery"] = {
            "data.primarywid": {
                "$in": permissionsarr
            },
            "data.primarymethod": "permissiondto",
            "data.secondarymethod": "groupdto"
        };
        execute(executeobject2, function(err, per_actiongroup_relationship) {
            for (var i in per_actiongroup_relationship) {
                if ((per_actiongroup_relationship[i].secondarywid !== per_actiongroup_relationship[i].secondarymethod) && (per_actiongroup_relationship[i].primarywid !== per_actiongroup_relationship[i].primarymethod)) {
                    // add action to the set
                    actiongroupsarr.push(per_actiongroup_relationship[i].secondarywid);
                }
            }

            // get actions from permissions arr
            var executeobject3 = {};
            executeobject3["executethis"] = "querywidmaster";
            executeobject3["mongorawquery"] = {
                "data.primarywid": {
                    "$in": actiongroupsarr
                },
                "data.primarymethod": "groupdto",
                "data.secondarymethod": "actiondto"
            };
            execute(executeobject3, function(err, actiongroup_action_relationship) {
                for (var i in actiongroup_action_relationship) {
                    if ((actiongroup_action_relationship[i].secondarywid !== actiongroup_action_relationship[i].secondarymethod) && (actiongroup_action_relationship[i].primarywid !== actiongroup_action_relationship[i].primarymethod)) {
                        // add action to the set
                        actionsarr.push(actiongroup_action_relationship[i].secondarywid);
                    }
                }

                callback(err, actionsarr);
            });
        });
    });
}

// extensive check
// get the 2 wids lists and check the security check output
function checkSecurityPermissions(_actionwid, _group, actioncreatorgroups, actorgroups, callback) {
    var isMatch = false;

    var allallowedactionsarr1 = [];
    var allallowedactionsarr2 = [];

    getAllActions(actioncreatorgroups, function(err,res){
        allallowedactionsarr1 = res;
        if(allallowedactionsarr1.length > 0){
            getAllActions(actorgroups, function(err,res){

                allallowedactionsarr2 = res;

                if(allallowedactionsarr2.length > 0){
                    if(!isMatch){
                        async.mapSeries(allallowedactionsarr2, function(allallowedactions2, cbMap2) {
                            // alert(JSON.stringify(allallowedactionsarr1));
                            // alert(JSON.stringify(allallowedactions2));
                            if(allallowedactionsarr1.indexOf(allallowedactions2) !== -1){
                            // if(allallowedactionsarr1.indexOf(allallowedactions2 !== -1)){
                                isMatch = true;
                                cbMap2(null);
                            }else{
                                cbMap2(null);
                            }
                        },function(err,res){
                            callback(err, isMatch);
                        })
                    }else{
                        callback(err, isMatch);
                    }
                }else{
                    callback(err, isMatch);
                }
            });
        }else{
            callback(err, isMatch);
        }
    });

    // // get actions allowed for this group
    // var executeobject1 = {};
    // executeobject1["executethis"] = "querywidmaster";
    // executeobject1["mongorawquery"] = {
    //     // "data.primarywid": {
    //     //     "$in": actioncreatorgroups
    //     // },
    //     "data.primarymethod": "groupdto",
    //     "data.secondarymethod": "actiondto"
    // };
    // execute(executeobject1, function(err, relationship1) {
    //     for (var i in relationship1) {
    //         if ((relationship1[i].secondarywid !== relationship1[i].secondarymethod) && (relationship1[i].primarywid !== relationship1[i].primarymethod)) {
    //             // add action to the set
    //             allallowedactionsarr1.push(relationship1[i].secondarywid);
    //         }
    //     }

    //     // continue the next check
    //     /// get actiongroup > action relationships, from actioncreatorgroups
    //     var executeobject2 = {};
    //     executeobject2["executethis"] = "querywidmaster";
    //     executeobject2["mongorawquery"] = {
    //         // "data.primarywid": {
    //         //     "$in": actorgroups
    //         // },
    //         "data.primarymethod": "groupdto",
    //         "data.secondarymethod": "actiondto"
    //     };
    //     execute(executeobject2, function(err, relationship2) {
    //         for (var i in relationship2) {
    //             if ((relationship2[i].secondarywid !== relationship2[i].secondarymethod) && (relationship2[i].primarywid !== relationship2[i].primarymethod)) {
    //                 // add action to the set
    //                 allallowedactionsarr2.push(relationship2[i].secondarywid);
    //             }
    //         }
    //         proxyprinttodiv('Function checkSecurityPermissions allallowedactionsarr2 -- ', allallowedactionsarr2, 39);
    //         proxyprinttodiv('Function checkSecurityPermissions allallowedactionsarr1 -- ', allallowedactionsarr1, 39);

    //         // check if the combination matches the current operation
    //         isMatch = ((allallowedactionsarr2.indexOf(_actionwid) !== -1) && (allallowedactionsarr1.indexOf(_actionwid) !== -1))
    //         callback(err, isMatch);
    //     });
    // });


};


// logic to  create users(userdto)
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
        "command": {
            "result": commandresult
        },
        'metadata.security': {
            "group": {
                "employees": "employees",
                "managers": "managers"
            },
            "permissions": [{
                "usergroup": "usergroups", /// TODO :: SEE IF HARDCODING THIS IS OKAY
                "actiongroup": "actiongroups", /// TODO :: SEE IF HARDCODING THIS IS OKAY
                "level": "99"
            }]

            // save metadata.security : {group: {employees: employees, managers:managers}, permissions: [{usergroup:, actiongroup:, level:}]}
            // save metadata.security just like update wid above : {group: {employees: employees, managers:managers}, permissions: [{usergroup:, actiongroup:, level:}]}
            // confirm security can use the data from here also
        }
    };

    // create userdto data
    var executeobject = userJson;
    executeobject.command = executeobject.command || {};
    executeobject.command.executetype = executeobject.command.executetype || "series";
    executeobject.command.notfoundok = executeobject.command.notfoundok || true;
    executeobject.command.getwidmaster = executeobject.command.getwidmaster || {
        "convertmethod": "dto",
        "execute": "ConvertFromDOTdri"
    };
    executeobject.command.environment = executeobject.command.environment || {
        "run": {}
    };

    var etEnvironment = new DriEnvironment(executeobject.command.environment);
    etEnvironment.execute(executeobject, function(err, res) {
        // create securitydto data
        proxyprinttodiv('Function createuserdata -- added getwidmaster on user  -- ' + userobj.wid, res, 39);
        callback(err, res);
        // getwidmaster({
        //     "wid": userobj.wid
        // }, function(err, res) {
        //     callback(err, res);
        // });
    });

};

// logic to  create action(actiondto)
// ** GENERIC FUNCTION TO CREATE AN ACTION ON THE BASIS OF RECEIVED DATA **
// logic to create an action -- taking the type of action
exports.createaction = createaction = function createaction(config, callback) {
    // proxyprinttodiv('Function createaction -- adding action of ', config, 39);
    var actiontype = config['actiontype'];
    var commandresult = config["command.result"];
    var creator = config["creator"];

    var executeobject = [{
        "executethis": "addwidmaster",
        "type": actiontype,
        "metadata.system.creator": creator,
        "metadata.method": "actiondto",
        "command": {
            "result": commandresult
        },
        'metadata.security': {
            "group": {
                "employees": "employees",
                "managers": "managers"
            },
            "permissions": [{
                "usergroup": "usergroups", /// TODO :: SEE IF HARDCODING THIS IS OKAY
                "actiongroup": "actiongroups", /// TODO :: SEE IF HARDCODING THIS IS OKAY
                "level": "99"
            }]
        }
    }];
    if (!executeobject.command) {
        executeobject.command = {
            "executetype": "series",
            "notfoundok": true, // if results back are blank then that is ok
            "getwidmaster": {
                "convertmethod": "dto",
                "execute": "ConvertFromDOTdri"
            },
            "environment": {
                "run": {}
            }
        };
    };
    var etEnvironment = new DriEnvironment(executeobject.command.environment);
    etEnvironment.execute(executeobject, function(err, res) {
        proxyprinttodiv('Function createaction -- added group of type "' + actiontype + '"  -- ', res, 39);
        callback(err, res);
    });
};

// logic to  create groups(simple group dto)

// ** GENERIC FUNCTION TO CREATE A GROUP ON THE BASIS OF RECEIVED DATA **
// logic to create a group --
exports.creategroup = creategroup = function creategroup(config, callback) {
    // proxyprinttodiv('Function creategroup -- adding group of ', config, 39);

    var grouptype = config['grouptype'];
    var commandresult = config["command.result"];

    var executeobject = [{
        "executethis": "addwidmaster",
        "metadata.method": "groupdto",
        "metadata.system.creator": "user1", // TODO :: this shall come from inherit
        "groupname": grouptype,
        "type": grouptype,
        "command": {
            "result": commandresult
        },
        'metadata.security': {
            "group": {
                "employees": "employees",
                "managers": "managers"
            },
            "permissions": [{
                "usergroup": "usergroups", /// TODO :: SEE IF HARDCODING THIS IS OKAY
                "actiongroup": "actiongroups", /// TODO :: SEE IF HARDCODING THIS IS OKAY
                "level": "99"
            }]

        }
    }];


    if (!executeobject.command) {
        executeobject.command = {
            "executetype": "series",
            "notfoundok": true, // if results back are blank then that is ok
            "getwidmaster": {
                "convertmethod": "dto",
                "execute": "ConvertFromDOTdri"
            },
            "environment": {
                "run": {}
            }
        };
    };

    var etEnvironment = new DriEnvironment(executeobject.command.environment);

    etEnvironment.execute(executeobject, function(err, res) {
        proxyprinttodiv('Function creategroup -- added group -- ', res, 39);
        callback(err, res);
    });
};


// ** GENERIC FUNCTION TO ADD A PERMISSION ON THE BASIS OF RECEIVED DATA **
// add permission
exports.addpermission = addpermission = function addpermission(config, callback) {
    // add each permission to the user

    var commandresult = config["command.result"];
    var executeobject = [{
        // add permissions as per given information
        "executethis": "addwidmaster",
        "metadata.method": "permissiondto",
        "level": config['permission.level'],
        "onfailwid": config["onfailwid"],
        "description": config["description"],
        "command": {
            "result": commandresult
        },
        'metadata.security': {
            "group": {
                "employees": "employees",
                "managers": "managers"
            },
            "permissions": [{
                "usergroup": "usergroups", /// TODO :: SEE IF HARDCODING THIS IS OKAY
                "actiongroup": "actiongroups", /// TODO :: SEE IF HARDCODING THIS IS OKAY
                "level": "99"
            }]
        }
    }];
    if (!executeobject.command) {
        executeobject.command = {
            "executetype": "series",
            "notfoundok": true, // if results back are blank then that is ok
            "getwidmaster": {
                "convertmethod": "dto",
                "execute": "ConvertFromDOTdri"
            },
            "environment": {
                "run": {}
            }
        };
    };
    var etEnvironment = new DriEnvironment(executeobject.command.environment);
    etEnvironment.execute(executeobject, function(err, res) {
        proxyprinttodiv('Function addpermission done --  >>>>>> added permission >>>>>  for  -- ', res, 39);
        callback(err, res);
    });
}





// passin data and get the relationship created
exports.addtargetwidtocurrentwid = addtargetwidtocurrentwid = function addtargetwidtocurrentwid(config, callback) {
    var executeobject = {
        "executethis": "addwidmaster",
        "metadata.method": "relationshipdto",
        "primarywid": config['currentwid'],
        "secondarywid": config['targetwid'],
        "primarymethod": config['currentwidmethod'],
        "secondarymethod": config['targetwidmethod'],
        "linktype": config['linktype'],
        "relationshiptype": "attributes"
    };
    executeobject.command = executeobject.command || {};
    executeobject.command.executetype = executeobject.command.executetype || "series";
    executeobject.command.notfoundok = executeobject.command.notfoundok || true;
    executeobject.command.getwidmaster = executeobject.command.getwidmaster || {
        "convertmethod": "dto",
        "execute": "ConvertFromDOTdri"
    };
    executeobject.command.environment = executeobject.command.environment || {
        "run": {}
    };
    var etEnvironment = new DriEnvironment(executeobject.command.environment);
    etEnvironment.execute(executeobject, function(err, res) {
        proxyprinttodiv('Function addtargetwidtocurrentwid done -- ' + config['currentwid'] + ' >>>>>> ' + config['linktype'] + ' >>>>> ' + config['targetwid'] + '  -- ', res, 99);
        callback(err, res);
    });

}



// ** GENERIC FUNCTION TO ADD A SECURITY DATA FOR A USER WID ON THE BASIS OF RECEIVED DATA **
// add security data
exports.addsecurity = addsecurity = function addsecurity(config, callback) {
    var commandresult = config["command.result"];
    var executeobject = [{
        // add group as per given wid
        "executethis": "addwidmaster",
        "wid": config['userwid'],
        // security data
        "metadata.method": "securitydto",
        "ac": config['securityac'],
        "command": {
            "result": commandresult
        }
    }];
    if (!executeobject.command) {
        executeobject.command = {
            "executetype": "series",
            "notfoundok": true, // if results back are blank then that is ok
            "getwidmaster": {
                "convertmethod": "dto",
                "execute": "ConvertFromDOTdri"
            },
            "environment": {
                "run": {}
            }
        };
    };
    var etEnvironment = new DriEnvironment(executeobject.command.environment);
    etEnvironment.execute(executeobject, function(err, res) {
        var config1 = {
            "currentwid": config['userwid'],
            "currentwidmethod": "userdto",
            "targetwid": res['wid'],
            "targetwidmethod": "securitydto",
            "linktype": "onetoone"
        };
        addtargetwidtocurrentwid(config1, function(err, res) {
            proxyprinttodiv('Function addsecurity --  >>>>>> added security  >>>>>  for  -- ', res, 39);
            // console.debug('added security for wid ' + wid + " >>>> " + JSON.stringify(res));
            callback(err, res)
        })

    });
}



// getuserbyac() gets user id by ac
// logic to get user wid by the user accesstoken passed in
exports.getuserbyac = getuserbyac = function getuserbyac(userac, callback) {
    var userDto, results1, userWid, systemWid;

    async.series([

        function part1(cb) {
            var query1 = {
                "executethis": "querywidmaster",
                "mongorawquery": {
                    "data.ac": userac
                },
                "mongorelationshipdirection": "backward",
                "mongorelationshipmethod": "all",
                "mongorelationshiptype": "attributes"
            };


            var executeobject = query1;
            executeobject.command = executeobject.command || {};
            executeobject.command.executetype = executeobject.command.executetype || "series";
            executeobject.command.notfoundok = executeobject.command.notfoundok || true;
            executeobject.command.getwidmaster = executeobject.command.getwidmaster || {
                "convertmethod": "dto",
                "execute": "ConvertFromDOTdri"
            };
            executeobject.command.environment = executeobject.command.environment || {
                "run": {}
            };

            var etEnvironment = new DriEnvironment(executeobject.command.environment);
            etEnvironment.execute(executeobject, function(err, res1) {
                if (res1) {
                    proxyprinttodiv('Function getuserbyac query1 -- res', res1, 39);

                    userWid = res1;
                    cb(null);
                } else {
                    cb(null);
                }
            });

        }
    ], function(err, res) {
        //console.debug' done securitycheck in sync manner.');
        // proxyprinttodiv('securitycheck userDto ', userDto, 39);
        proxyprinttodiv('Function getuserbyac --  >>>>>>  >>>>> userWid -- ', userWid, 39);
        callback(err, userWid);
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

    if (extracondition && (typeof extracondition === "object") && (Object.keys(extracondition).length > 0)) {
        var andQuery = {
            "$and": []
        };
        var temparr = [];
        temparr.push(extracondition);
        temparr.push(mongorawquery);
        andQuery['$and'] = temparr;
        mongorawquery = andQuery;
    }

    // // usage
    // getrelatedwids("groupdto", primarywidval, "groupdto", secondarywidval,{"$ne":{"user":""}} function(err,res){

    // })


    var executeobject = {
        "executethis": "querywidmaster",
        "mongorawquery": mongorawquery
    };



    executeobject.command = executeobject.command || {};
    executeobject.command.executetype = executeobject.command.executetype || "series";
    executeobject.command.notfoundok = executeobject.command.notfoundok || true;
    executeobject.command.getwidmaster = executeobject.command.getwidmaster || {
        "convertmethod": "dto",
        "execute": "ConvertFromDOTdri"
    };
    executeobject.command.environment = executeobject.command.environment || {
        "run": {}
    };
    var etEnvironment = new DriEnvironment(executeobject.command.environment);
    etEnvironment.execute(executeobject, function(err, resp) { // final callback
        // var resp = res[0];
        proxyprinttodiv('Function getrelatedwids done --  response  -- ', resp, 39);
        callback(err, resp);
    });
}


// logic to  add group to group(actiondto to simple group dto)

// logic to  add user to group(userdto to simple group dto)

// logic to  add action to group(actiondto to simple group dto)

// logic to  add permission(permissiondto)

// logic to  add group to permission(permissiondto)

// logic to  get all action groups for this actioncreator

// logic to  get all user groups for this user

// logic to check if a call shall go through/security check , takes in -- loggedinuserid, userid, level, action






// The security TEST scheme for the Allowances App
exports.allowsec1 = allowsec1 = function allowsec1(params, callback) {

    debuglevel = 39;

    // users. sarah = parent, cindy = teacher, johnny = kid
    var sarah, cindy, johnny, driuser = "driuser";

    // actions
    var createcurrency, editcurrency, deletecurrency, getcurrency, createoffer, editoffer, deleteoffer, executeoffer, getoffer, addusertogroup, addpermissions;

    // usergroups
    var parentgroup, teachergroup, kidgroup;

    // actiongroups
    var parentactions, teacheractions, kidactions;

    // permissions
    var parentpermission, teacherpermission, kidpermission;

    async.series([

        // setup dtos for security - permission,security,action,user,groups etc.
        function(cb) {
            dtox({}, function(err, resp) {
                proxyprinttodiv('Function created schema done --   for  -- ', resp, 39);
                cb(err);
            });
        },

        // create user driuser
        function(cb) {
            createuserdata({
                "wid": "driuser",
                "fname": "driuser",
                "lname": "driuser",
                "phone": "555-555-5515",
                "email": "driuser@fake.com",
                "address": "115 W. River St.",
                "address2": "",
                "city": "Syracuse",
                "state": "NY",
                "zip": "13244",
                "country": "US"
            }, function(err, resp) {
                cindy = resp.wid;
                proxyprinttodiv('Function createuser done --  for  driuser -- ', resp, 39, true);
                cb(err);
            });
        },

        // create user cindy
        function(cb) {
            createuserdata({
                "wid": "cindy",
                "fname": "Cindy",
                "lname": "P",
                "phone": "555-555-5515",
                "email": "cindy@fake.com",
                "address": "115 W. River St.",
                "address2": "",
                "city": "Syracuse",
                "state": "NY",
                "zip": "13244",
                "country": "US"
            }, function(err, resp) {
                cindy = resp.wid;
                proxyprinttodiv('Function createuser done --  for  cindy -- ', resp, 39, true);
                cb(err);
            });
        },
        function(cb) {
            // add accesstoken for cindy
            addsecurity({
                "userwid": cindy,
                "securityac": "cindyac"
            }, function(err, resp) {
                proxyprinttodiv('Function addsecurity done --  for cindy -- ', resp, 39, true);
                cb(err);
            });
        },
        // create user sarah
        function(cb) {
            createuserdata({
                "wid": "sarah",
                "fname": "Sarah",
                "lname": "P",
                "phone": "555-555-5515",
                "email": "sarah@fake.com",
                "address": "115 W. River St.",
                "address2": "",
                "city": "Syracuse",
                "state": "NY",
                "zip": "13244",
                "country": "US"
            }, function(err, resp) {
                sarah = resp.wid;
                proxyprinttodiv('Function createuser done --  for  sarah -- ', resp, 39, true);
                cb(err);
            });
        },
        function(cb) {
            // add accesstoken for sarah
            addsecurity({
                "userwid": sarah,
                "securityac": "sarahac"
            }, function(err, resp) {
                proxyprinttodiv('Function addsecurity done --  for sarah -- ', resp, 39, true);
                cb(err);
            });
        },
        // create user johnny
        function(cb) {
            createuserdata({
                "wid": "johnny",
                "fname": "Johnny",
                "lname": "P",
                "phone": "555-555-5515",
                "email": "johnny@fake.com",
                "address": "115 W. River St.",
                "address2": "",
                "city": "Syracuse",
                "state": "NY",
                "zip": "13244",
                "country": "US"
            }, function(err, resp) {
                johnny = resp.wid;
                proxyprinttodiv('Function createuser done --    for  johnny -- ', resp, 39, true);
                cb(err);
            });
        },
        function(cb) {
            // add access token for johnny
            addsecurity({
                "userwid": johnny,
                "securityac": "johnnyac"
            }, function(err, resp) {
                proxyprinttodiv('Function addsecurity done --  for johnny -- ', resp, 39, true);
                cb(err);
            });
        }, // Create Actions    
        // DRI creates createcurrency
        function(cb) {
            createaction({
                "creator": driuser,
                "actiontype": "createcurrency"
            }, function(err, resp) {
                createcurrency = resp.wid;
                proxyprinttodiv('Function createaction done --    for createcurrency  -- ', resp, 39, true);
                cb(err);
            });
        },
        // DRI creates editcurrency
        function(cb) {
            createaction({
                "creator": driuser,
                "actiontype": "editcurrency"
            }, function(err, resp) {
                editcurrency = resp.wid;
                proxyprinttodiv('Function createaction done --    for editcurrency  -- ', resp, 39, true);
                cb(err);
            });
        },
        // DRI creates deletecurrency
        function(cb) {
            createaction({
                "creator": driuser,
                "actiontype": "deletecurrency"
            }, function(err, resp) {
                deletecurrency = resp.wid;
                proxyprinttodiv('Function createaction done --    for deletecurrency  -- ', resp, 39, true);
                cb(err);
            });
        },
        // DRI creates createoffer
        function(cb) {
            createaction({
                "creator": driuser,
                "actiontype": "createoffer"
            }, function(err, resp) {
                createoffer = resp.wid;
                proxyprinttodiv('Function createaction done --    for createoffer  -- ', resp, 39, true);
                cb(err);
            });
        },
        // DRI creates editoffer
        function(cb) {
            createaction({
                "creator": driuser,
                "actiontype": "editoffer"
            }, function(err, resp) {
                editoffer = resp.wid;
                proxyprinttodiv('Function createaction done --    for editoffer  -- ', resp, 39, true);
                cb(err);
            });
        },
        // DRI creates deleteoffer
        function(cb) {
            createaction({
                "creator": driuser,
                "actiontype": "deleteoffer"
            }, function(err, resp) {
                deleteoffer = resp.wid;
                proxyprinttodiv('Function createaction done --    for deleteoffer  -- ', resp, 39, true);
                cb(err);
            });
        },
        // DRI creates executeoffer
        function(cb) {
            createaction({
                "creator": driuser,
                "actiontype": "executeoffer"
            }, function(err, resp) {
                executeoffer = resp.wid;
                proxyprinttodiv('Function createaction done --    for executeoffer  -- ', resp, 39, true);
                cb(err);
            });
        },
        // DRI creates getoffer
        function(cb) {
            createaction({
                "creator": driuser,
                "actiontype": "getoffer"
            }, function(err, resp) {
                getoffer = resp.wid;
                proxyprinttodiv('Function createaction done --    for getoffer  -- ', resp, 39, true);
                cb(err);
            });
        },
        // DRI creates addusertogroup
        function(cb) {
            createaction({
                "creator": driuser,
                "actiontype": "addusertogroup"
            }, function(err, resp) {
                addusertogroup = resp.wid;
                proxyprinttodiv('Function createaction done --    for addusertogroup  -- ', resp, 39, true);
                cb(err);
            });
        },
        // DRI creates addpermissions
        function(cb) {
            createaction({
                "creator": driuser,
                "actiontype": "addpermissions"
            }, function(err, resp) {
                addpermissions = resp.wid;
                proxyprinttodiv('Function createaction done --    for addpermissions  -- ', resp, 39, true);
                cb(err);
            });
        },
        // DRI creates getcurrency
        function(cb) {
            createaction({
                "creator": driuser,
                "actiontype": "getcurrency"
            }, function(err, resp) {
                getcurrency = resp.wid;
                proxyprinttodiv('Function createaction done --    for getcurrency  -- ', resp, 39, true);
                cb(err);
            });
        },

        // Create User Groups:  
        // create parent group
        function(cb) {

            creategroup({
                "grouptype": "parentgroup"
            }, function(err, resp) {
                parentgroup = resp.wid;
                proxyprinttodiv('Function creategroup done --    for parentgroup  -- ', resp, 39, true);

                cb(err);
            });
        },
        // create teacher group
        function(cb) {

            creategroup({
                "grouptype": "teachergroup"
            }, function(err, resp) {
                teachergroup = resp.wid;
                proxyprinttodiv('Function creategroup done --    for teachergroup  -- ', resp, 39, true);

                cb(err);
            });
        },
        // create kid group
        function(cb) {

            creategroup({
                "grouptype": "kidgroup"
            }, function(err, resp) {
                kidgroup = resp.wid;
                proxyprinttodiv('Function creategroup done --    for kidgroup  -- ', resp, 39, true);

                cb(err);
            });
        },



        // Create Action Groups
        // create parentactions group
        function(cb) {

            creategroup({
                "grouptype": "parentactions"
            }, function(err, resp) {
                parentactions = resp.wid;
                proxyprinttodiv('Function creategroup done --    for parentactions  -- ', resp, 39, true);

                cb(err);
            });
        },
        // create teacheractions group
        function(cb) {

            creategroup({
                "grouptype": "teacheractions"
            }, function(err, resp) {
                teacheractions = resp.wid;
                proxyprinttodiv('Function creategroup done --    for teacheractions  -- ', resp, 39, true);

                cb(err);
            });
        },
        // create kidactions group
        function(cb) {

            creategroup({
                "grouptype": "kidactions"
            }, function(err, resp) {
                kidactions = resp.wid;
                proxyprinttodiv('Function creategroup done --    for kidactions  -- ', resp, 39, true);

                cb(err);
            });
        },

        // Add Users to Groups: 
        // Sarah    parentgroup
        // Cindy    teachergroup
        // Johnny   kidgroup
        // driuser   parentgroup

        function(cb) {
            var config = {
                "currentwid": parentgroup,
                "currentwidmethod": "groupdto",
                "targetwid": sarah,
                "targetwidmethod": "userdto",
                "linktype": "manytomany"
            };
            addtargetwidtocurrentwid(config, function(err, res) {
                proxyprinttodiv('attach userdto to groupdto, driuser to manager   -- ', res, 39);

                cb(err);
            })
        },

        // Sarah    parentgroup
        function(cb) {
            var config = {
                "currentwid": parentgroup,
                "currentwidmethod": "groupdto",
                "targetwid": sarah,
                "targetwidmethod": "userdto",
                "linktype": "manytomany"
            };
            // attach userdto to groupdto, sarah to parentgroup
            addtargetwidtocurrentwid(config, function(err, res) {
                proxyprinttodiv('attach userdto to groupdto, sarah to parentgroup   -- ', res, 39);

                cb(err);
            })
        },

        // Cindy    teachergroup
        function(cb) {
            var config = {
                "currentwid": teachergroup,
                "currentwidmethod": "groupdto",
                "targetwid": cindy,
                "targetwidmethod": "userdto",
                "linktype": "manytomany"
            };
            // attach userdto to groupdto, cindy to teachergroup            
            addtargetwidtocurrentwid(config, function(err, res) {
                proxyprinttodiv('attach userdto to groupdto, cindy to teachergroup   -- ', res, 39);

                cb(err);
            })
        },

        // johnny   kidgroup
        function(cb) {
            var config = {
                "currentwid": kidgroup,
                "currentwidmethod": "groupdto",
                "targetwid": johnny,
                "targetwidmethod": "userdto",
                "linktype": "manytomany"
            };
            // attach userdto to groupdto, johnny to kidgroup           
            addtargetwidtocurrentwid(config, function(err, res) {
                proxyprinttodiv('attach userdto to groupdto, johnny to kidgroup   -- ', res, 39);

                cb(err);
            })
        },

        function(cb) {
            var config = {
                "currentwid": parentgroup,
                "currentwidmethod": "groupdto",
                "targetwid": driuser,
                "targetwidmethod": "userdto",
                "linktype": "manytomany"
            };
            addtargetwidtocurrentwid(config, function(err, res) {
                proxyprinttodiv('attach userdto to groupdto, driuser to manager   -- ', res, 39);

                cb(err);
            })
        },


        // Add Actions to Groups:

        // add createcurrency to parentactions
        function(cb) {
            var config = {
                "currentwid": parentactions,
                "currentwidmethod": "groupdto",
                "targetwid": createcurrency,
                "targetwidmethod": "actiondto",
                "linktype": "manytomany"
            };
            addtargetwidtocurrentwid(config, function(err, res) {
                proxyprinttodiv('attach actiondto to groupdto, createcurrency to parentactions   -- ', res, 39);

                cb(err);
            })
        },

        // add editcurrency to parentactions
        function(cb) {
            var config = {
                "currentwid": parentactions,
                "currentwidmethod": "groupdto",
                "targetwid": editcurrency,
                "targetwidmethod": "actiondto",
                "linktype": "manytomany"
            };
            addtargetwidtocurrentwid(config, function(err, res) {
                proxyprinttodiv('attach actiondto to groupdto, editcurrency to parentactions   -- ', res, 39);

                cb(err);
            })
        },

        // add deletecurrency to parentactions
        function(cb) {
            var config = {
                "currentwid": parentactions,
                "currentwidmethod": "groupdto",
                "targetwid": deletecurrency,
                "targetwidmethod": "actiondto",
                "linktype": "manytomany"
            };
            addtargetwidtocurrentwid(config, function(err, res) {
                proxyprinttodiv('attach actiondto to groupdto, deletecurrency to parentactions   -- ', res, 39);

                cb(err);
            })
        },

        // add addusertogroup to parentactions
        function(cb) {
            var config = {
                "currentwid": parentactions,
                "currentwidmethod": "groupdto",
                "targetwid": addusertogroup,
                "targetwidmethod": "actiondto",
                "linktype": "manytomany"
            };
            addtargetwidtocurrentwid(config, function(err, res) {
                proxyprinttodiv('attach actiondto to groupdto, addusertogroup to parentactions   -- ', res, 39);

                cb(err);
            })
        },

        // add addpermissions to parentactions
        function(cb) {
            var config = {
                "currentwid": parentactions,
                "currentwidmethod": "groupdto",
                "targetwid": addpermissions,
                "targetwidmethod": "actiondto",
                "linktype": "manytomany"
            };
            addtargetwidtocurrentwid(config, function(err, res) {
                proxyprinttodiv('attach actiondto to groupdto, addpermissions to parentactions   -- ', res, 39);

                cb(err);
            })
        },

        // add createoffer to teacheractions
        function(cb) {
            var config = {
                "currentwid": teacheractions,
                "currentwidmethod": "groupdto",
                "targetwid": createoffer,
                "targetwidmethod": "actiondto",
                "linktype": "manytomany"
            };
            addtargetwidtocurrentwid(config, function(err, res) {
                proxyprinttodiv('attach actiondto to groupdto, createoffer to teacheractions   -- ', res, 39);

                cb(err);
            })
        },

        // add editoffer to teacheractions
        function(cb) {
            var config = {
                "currentwid": teacheractions,
                "currentwidmethod": "groupdto",
                "targetwid": editoffer,
                "targetwidmethod": "actiondto",
                "linktype": "manytomany"
            };
            addtargetwidtocurrentwid(config, function(err, res) {
                proxyprinttodiv('attach actiondto to groupdto, editoffer to teacheractions   -- ', res, 39);

                cb(err);
            })
        },

        // add deleteoffer to teacheractions
        function(cb) {
            var config = {
                "currentwid": teacheractions,
                "currentwidmethod": "groupdto",
                "targetwid": deleteoffer,
                "targetwidmethod": "actiondto",
                "linktype": "manytomany"
            };
            addtargetwidtocurrentwid(config, function(err, res) {
                proxyprinttodiv('attach actiondto to groupdto, deleteoffer to teacheractions   -- ', res, 39);

                cb(err);
            })
        },

        // add executeoffer to teacheractions
        function(cb) {
            var config = {
                "currentwid": teacheractions,
                "currentwidmethod": "groupdto",
                "targetwid": executeoffer,
                "targetwidmethod": "actiondto",
                "linktype": "manytomany"
            };
            addtargetwidtocurrentwid(config, function(err, res) {
                proxyprinttodiv('attach actiondto to groupdto, executeoffer to teacheractions   -- ', res, 39);

                cb(err);
            })
        },

        // add getcurrency to kidactions
        function(cb) {
            var config = {
                "currentwid": kidactions,
                "currentwidmethod": "groupdto",
                "targetwid": getcurrency,
                "targetwidmethod": "actiondto",
                "linktype": "manytomany"
            };
            addtargetwidtocurrentwid(config, function(err, res) {
                proxyprinttodiv('attach actiondto to groupdto, getcurrency to kidactions   -- ', res, 39);

                cb(err);
            })
        },

        // add getoffer to kidactions
        function(cb) {
            var config = {
                "currentwid": kidactions,
                "currentwidmethod": "groupdto",
                "targetwid": getoffer,
                "targetwidmethod": "actiondto",
                "linktype": "manytomany"
            };
            // attach actiondto to groupdto
            addtargetwidtocurrentwid(config, function(err, res) {
                proxyprinttodiv('attach actiondto to groupdto, getoffer to kidactions   -- ', res, 39);

                cb(err);
            })
        },

        // Add Groups to Groups: Create Action Group Hierarchy  
        // kidactions       teacheractions
        // teacheractions   parentactions





        // Add kidactions to teacheractions
        function(cb) {
            var config = {
                "currentwid": kidactions,
                "currentwidmethod": "groupdto",
                "targetwid": teacheractions,
                "targetwidmethod": "groupdto",
                "linktype": "manytomany"
            };
            addtargetwidtocurrentwid(config, function(err, res) {
                proxyprinttodiv('Add Groups to Groups:   -- kidactions to teacheractions group -- ', res, 39);

                cb(err);
            })
        },

        // Add teacheractions to parentactions
        function(cb) {
            var config = {
                "currentwid": teacheractions,
                "currentwidmethod": "groupdto",
                "targetwid": parentactions,
                "targetwidmethod": "groupdto",
                "linktype": "manytomany"
            };
            addtargetwidtocurrentwid(config, function(err, res) {
                proxyprinttodiv('Add Groups to Groups:   -- teacheractions to parentactions group -- ', res, 39);

                cb(err);
            })
        },

        // Enter Permissions:

        // DRI  {  kidactions, kidgroup }
        // add group create to actiongroup and usergroup
        function(cb) {
            addpermission({
                "permission.userwid": driuser,
                "onfailwid": "",
                "permission.level": 99, // TODO :: REMOVE HARDCODING
                "description": "DRI {  kidactions, kidgroup }"
            }, function(err, resp) {
                proxyprinttodiv('Function addpermission done --    for  kidpermission -- ', resp, 39);
                kidpermission = resp.wid;
                cb(err);
            });
        },
        // attach kidactions group to permissiondto
        function(cb) {
            var config = {
                "currentwid": kidpermission,
                "currentwidmethod": "permissiondto",
                "targetwid": kidactions,
                "targetwidmethod": "groupdto",
                "linktype": "manytomany"
            };
            addtargetwidtocurrentwid(config, function(err, res) {
                cb(err);
            })
        },
        // attach kidgroup group to permissiondto
        function(cb) {
            var config = {
                "currentwid": kidpermission,
                "currentwidmethod": "permissiondto",
                "targetwid": kidgroup,
                "targetwidmethod": "groupdto",
                "linktype": "manytomany"
            };
            addtargetwidtocurrentwid(config, function(err, res) {
                cb(err);
            })
        },

        // DRI  {  teacheractions, teachergroup }
        // add group create to actiongroup and usergroup
        function(cb) {
            addpermission({
                "permission.userwid": driuser,
                "onfailwid": "",
                "permission.level": 99, // TODO :: REMOVE HARDCODING
                "description": "DRI {  teacheractions, teachergroup }"
            }, function(err, resp) {
                proxyprinttodiv('Function addpermission done --    for  teacherpermission -- ', resp, 39);
                teacherpermission = resp.wid;
                cb(err);
            });
        },
        // attach teacheractions group to permissiondto
        function(cb) {
            var config = {
                "currentwid": teacherpermission,
                "currentwidmethod": "permissiondto",
                "targetwid": teacheractions,
                "targetwidmethod": "groupdto",
                "linktype": "manytomany"
            };
            addtargetwidtocurrentwid(config, function(err, res) {
                cb(err);
            })
        },
        // attach teachergroup group to permissiondto
        function(cb) {
            var config = {
                "currentwid": teacherpermission,
                "currentwidmethod": "permissiondto",
                "targetwid": teachergroup,
                "targetwidmethod": "groupdto",
                "linktype": "manytomany"
            };
            addtargetwidtocurrentwid(config, function(err, res) {
                cb(err);
            })
        },

        // DRI  {  parentactions, parentgroup }
        // add group create to actiongroup and usergroup
        function(cb) {
            addpermission({
                "permission.userwid": driuser,
                "onfailwid": "",
                "permission.level": 99, // TODO :: REMOVE HARDCODING
                "description": "DRI {  parentactions, parentgroup }"
            }, function(err, resp) {
                proxyprinttodiv('Function addpermission done --    for  parentpermission -- ', resp, 39);
                parentpermission = resp.wid;
                cb(err);
            });
        },
        // attach parentactions group to permissiondto
        function(cb) {
            var config = {
                "currentwid": parentpermission,
                "currentwidmethod": "permissiondto",
                "targetwid": parentactions,
                "targetwidmethod": "groupdto",
                "linktype": "manytomany"
            };
            addtargetwidtocurrentwid(config, function(err, res) {
                cb(err);
            })
        },
        // attach parentgroup group to permissiondto
        function(cb) {
            var config = {
                "currentwid": parentpermission,
                "currentwidmethod": "permissiondto",
                "targetwid": parentgroup,
                "targetwidmethod": "groupdto",
                "linktype": "manytomany"
            };
            addtargetwidtocurrentwid(config, function(err, res) {
                cb(err);
            })
        }
    ], function(err, resp) {
        // final callback
        proxyprinttodiv('Function ex1sec done --  response  -- ', resp, 39);
        callback(err, resp);
    });

};


// security check for the allowsec1 function. allowsec1 creates the security scheme and this tests it
// 3 users are created, and permissions of those users are tested.
exports.allowsec1tests = allowsec1tests = function allowsec1tests(params, callback) {

    // Effective Permissions:   
    // Johnny   getoffer
    //          getcurrency

    // Cindy    createoffer
    //          editoffer
    //          deleteoffer
    //          executeoffer
    //          getoffer
    //          getcurrency

    // Sarah    createoffer
    //          editoffer
    //          deleteoffer
    //          executeoffer
    //          getoffer
    //          getcurrency
    //          createcurrency
    //          editcurrency
    //          deletecurrency
    //          addusertogroup
    //          addpermission



    // Sarah
    var sarahconfig = {
        "_mygroup": '',
        "_myphone": '9873838958',
        "_action": 'createcurrency',
        "_dbgroup": 'data',
        "_collection": 'wikiwallettesting',
        "_server": 'server1',
        "_datastore": 'main',
        "command.result": "result",
        "command.enviromment.accesstoken": "sarahac",
        "command.enviromment.userid": "driuser"
    };

    // Cindy
    var cindyconfig = {
        "_mygroup": '',
        "_myphone": '9873838958',
        "_action": 'createoffer',
        "_dbgroup": 'data',
        "_collection": 'wikiwallettesting',
        "_server": 'server1',
        "_datastore": 'main',
        "command.result": "result",
        "command.enviromment.accesstoken": "cindyac",
        "command.enviromment.userid": "driuser"
    };

    // Johnny
    var johnnyconfig = {
        "_mygroup": '',
        "_myphone": '9873838958',
        "_action": 'createoffer',
        "_dbgroup": 'data',
        "_collection": 'wikiwallettesting',
        "_server": 'server1',
        "_datastore": 'main',
        "command.result": "result",
        "command.enviromment.accesstoken": "johnnyac",
        "command.enviromment.userid": "driuser"
    };

    async.series([

        function(cb) {
            // creates the allowances security scheme data. Creates users, actions, groups, and permissions.
            allowsec1({}, function(err, resp) {
                proxyprinttodiv('Data entered  -   response  -- ', resp, 39);
                cb(err);
            });

        },
        // check that Sarah can perform the createcurrency action
        function(cb) {
            // perform the securitycheck for the createcurrency action, with organization user user ac
            sc(sarahconfig, function(err, resp) {
                proxyprinttodiv('Security check done 1 --  sarahconfig -   response  -- ', resp, 39);
                cb(err);
            });
        },
            // check that Cindy can perform the createoffer action
        function(cb) {
            // perform the securitycheck for the createoffer action, with organization user user ac
            sc(cindyconfig, function(err, resp) {
                proxyprinttodiv('Security check done 1 --  cindyconfig -   response  -- ', resp, 39);
                cb(err);
            });
        },
        // check that Johnny can perform the getoffer action
        function(cb) {
            // perform the securitycheck for the getoffer action, with organization user user ac
            sc(johnnyconfig, function(err, resp) {
                proxyprinttodiv('Security check done 1 --  johnnyconfig -   response  -- ', resp, 39);
                cb(err);
            });
        }
    ], function(err, resp) {
        // final callback
        proxyprinttodiv('Function ex1sectest done --  response  -- ', resp, 39);
        callback(err, resp);
    });
}
