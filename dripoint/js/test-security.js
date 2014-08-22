
var widtests = widtests || {};

exports.setest_allexecute = 
widtests.setest_allexecute = 
setest_allexecute = 
function setest_allexecute(executeobject, callback) 
{
	var start = new Date().getTime();
    async.series(
    [   
    function (cb1) {setest_testnestedgroups1({}, function (err, res) {cb1(null, res)})},
    function (cb1) {setest_allowsec1tests4({}, function (err, res) {cb1(null, res)})},
    function (cb1) {setest_allowsec1tests5({"setup":false}, function (err, res) {cb1(null, res)})},
	function (cb1) {setest_allowsec1tests6({"setup":false}, function (err, res) {cb1(null, res)})}
    ],
    function (err, res) {
      proxyprinttodiv('result from many array', res, 99);
      callback(null,res);
	  proxyprinttodiv('total elapsed time ', new Date().getTime() - start, 99);
    })
	console.log('end setest_allexecute');
};

widtests.setest_allexecute.category = "redaily";
widtests.setest_allexecute.subcategory = "push";
widtests.setest_allexecute.js = setest_allexecute;
widtests.setest_allexecute.description = "This is the master test. this test calls all of the individual testing groups for testing execute.";


exports.allowsec1test4setupusers = 	allowsec1test4setupusers = function allowsec1test4setupusers (params, callback) {

	var users = {};
	
	async.series([
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
                users.driuser = resp.wid;
                //proxyprinttodiv('Function createuser done --  for  driuser -- ', resp, 39, true);
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
                users.cindy = resp.wid;
                //proxyprinttodiv('Function createuser done --  for  cindy -- ', resp, 39, true);
                cb(err);
            });
        },
        function(cb) {
            // add accesstoken for cindy
            addsecurity({
                "userwid": users.cindy,
                "securityac": "cindyac"
            }, function(err, resp) {
                //proxyprinttodiv('Function addsecurity done --  for cindy -- ', resp, 39, true);
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
                users.sarah = resp.wid;
                //proxyprinttodiv('Function createuser done --  for  sarah -- ', resp, 39, true);
                cb(err);
            });
        },
        function(cb) {
            // add accesstoken for sarah
            addsecurity({
                "userwid": users.sarah,
                "securityac": "sarahac"
            }, function(err, resp) {
                //proxyprinttodiv('Function addsecurity done --  for sarah -- ', resp, 39, true);
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
                    users.johnny = resp.wid;
                    //proxyprinttodiv('Function createuser done --    for  johnny -- ', resp, 39, true);
                    cb(err);
                });
            },
            function(cb) {
                // add access token for johnny
                addsecurity({
                    "userwid": users.johnny,
                    "securityac": "johnnyac"
                }, function(err, resp) {
                    //proxyprinttodiv('Function addsecurity done --  for johnny -- ', resp, 39, true);
                    cb(err);
                });
            },
			// create user Tom
            function(cb) {
                createuserdata({
                    "wid": "tom",
                    "fname": "Tom",
                    "lname": "P",
                    "phone": "555-555-5515",
                    "email": "tom@fake.com",
                    "address": "115 W. River St.",
                    "address2": "",
                    "city": "Syracuse",
                    "state": "NY",
                    "zip": "13244",
                    "country": "US"
                }, function(err, resp) {
                    users.tom = resp.wid;
                    //proxyprinttodiv('Function createuser done --    for  johnny -- ', resp, 39, true);
                    cb(err);
                });
            },
            function(cb) {
                // add access token for Tom
                addsecurity({
                    "userwid": users.tom,
                    "securityac": "tomac"
                }, function(err, resp) {
                    //proxyprinttodiv('Function addsecurity done --  for johnny -- ', resp, 39, true);
                    cb(err);
                });
            }], function (err, res) {
				proxyprinttodiv('allowsec1test4setupusers_result',res,39);
				callback(err,users);
			});
}


exports.allowsec1test4setupactions = allowsec1test4setupactions = function allowsec1test4setupactions (params, callback) {

	var actions = {};
	var driuser = "driuser";
	
	async.series([
            // DRI creates createcurrency
            function(cb) {
                createaction({
                    "creator": driuser,
                    "actiontype": "createcurrency"
                }, function(err, resp) {
                    actions.createcurrency = resp.wid;
                    //proxyprinttodiv('Function createaction done --    for createcurrency  -- ', resp, 39, true);
                    cb(err);
                });
            },
            // DRI creates editcurrency
            function(cb) {
                createaction({
                    "creator": driuser,
                    "actiontype": "editcurrency"
                }, function(err, resp) {
                    actions.editcurrency = resp.wid;
                    //proxyprinttodiv('Function createaction done --    for editcurrency  -- ', resp, 39, true);
                    cb(err);
                });
            },
            // DRI creates deletecurrency
            function(cb) {
                createaction({
                    "creator": driuser,
                    "actiontype": "deletecurrency"
                }, function(err, resp) {
                    actions.deletecurrency = resp.wid;
                    //proxyprinttodiv('Function createaction done --    for deletecurrency  -- ', resp, 39, true);
                    cb(err);
                });
            },
            // DRI creates createoffer
            function(cb) {
                createaction({
                    "creator": driuser,
                    "actiontype": "createoffer"
                }, function(err, resp) {
                    actions.createoffer = resp.wid;
                    //proxyprinttodiv('Function createaction done --    for createoffer  -- ', resp, 39, true);
                    cb(err);
                });
            },
            // DRI creates editoffer
            function(cb) {
                createaction({
                    "creator": driuser,
                    "actiontype": "editoffer"
                }, function(err, resp) {
                    actions.editoffer = resp.wid;
                    //proxyprinttodiv('Function createaction done --    for editoffer  -- ', resp, 39, true);
                    cb(err);
                });
            },
            // DRI creates deleteoffer
            function(cb) {
                createaction({
                    "creator": driuser,
                    "actiontype": "deleteoffer"
                }, function(err, resp) {
                    actions.deleteoffer = resp.wid;
                    //proxyprinttodiv('Function createaction done --    for deleteoffer  -- ', resp, 39, true);
                    cb(err);
                });
            },
            // DRI creates executeoffer
            function(cb) {
                createaction({
                    "creator": driuser,
                    "actiontype": "executeoffer"
                }, function(err, resp) {
                    actions.executeoffer = resp.wid;
                    //proxyprinttodiv('Function createaction done --    for executeoffer  -- ', resp, 39, true);
                    cb(err);
                });
            },
            // DRI creates getoffer
            function(cb) {
                createaction({
                    "creator": driuser,
                    "actiontype": "getoffer"
                }, function(err, resp) {
                    actions.getoffer = resp.wid;
                    //proxyprinttodiv('Function createaction done --    for getoffer  -- ', resp, 39, true);
                    cb(err);
                });
            },
            // DRI creates addusertogroup
            function(cb) {
                createaction({
                    "creator": driuser,
                    "actiontype": "addusertogroup"
                }, function(err, resp) {
                    actions.addusertogroup = resp.wid;
                    //proxyprinttodiv('Function createaction done --    for addusertogroup  -- ', resp, 39, true);
                    cb(err);
                });
            },
            // DRI creates addpermissions
            function(cb) {
                createaction({
                    "creator": driuser,
                    "actiontype": "addpermissions"
                }, function(err, resp) {
                    actions.addpermissions = resp.wid;
                    //proxyprinttodiv('Function createaction done --    for addpermissions  -- ', resp, 39, true);
                    cb(err);
                });
            },
            // DRI creates getcurrency
            function(cb) {
                createaction({
                    "creator": driuser,
                    "actiontype": "getcurrency"
                }, function(err, resp) {
                    actions.getcurrency = resp.wid;
                    //proxyprinttodiv('Function createaction done --    for getcurrency  -- ', resp, 39, true);
                    cb(err);
                });
            }], function (err, res) {
				proxyprinttodiv('allowsec1test4setupusers_result',res,39);
				callback(err,actions);
			});
}


exports.allowsec1test4setupusrgroups = allowsec1test4setupusrgroups = function allowsec1test4setupusrgroups (params, callback) {

	var groups = {};
	
	async.series([
			// create parent group
            function(cb) {

                creategroup({
                    "grouptype": "parentgroup"
                }, function(err, resp) {
                    groups.parentgroup = resp.wid;
                    //proxyprinttodiv('Function creategroup done --    for parentgroup  -- ', resp, 39, true);

                    cb(err);
                });
            },
            // create teacher group
            function(cb) {

                creategroup({
                    "grouptype": "teachergroup"
                }, function(err, resp) {
                    groups.teachergroup = resp.wid;
                    //proxyprinttodiv('Function creategroup done --    for teachergroup  -- ', resp, 39, true);

                    cb(err);
                });
            },
            // create kid group
            function(cb) {

                creategroup({
                    "grouptype": "kidgroup"
                }, function(err, resp) {
                    groups.kidgroup = resp.wid;
                    //proxyprinttodiv('Function creategroup done --    for kidgroup  -- ', resp, 39, true);

                    cb(err);
                });
            }], function (err, res) {
				callback(err, groups);
			});
}


exports.allowsec1test4setupactgroups = allowsec1test4setupactgroups = function allowsec1test4setupactgroups (params, callback) {

	var groups = {};
	
	async.series([

            // create parentactions group
            function(cb) {

                creategroup({
                    "grouptype": "parentactions"
                }, function(err, resp) {
                    groups.parentactions = resp.wid;
                    //proxyprinttodiv('Function creategroup done --    for parentactions  -- ', resp, 39, true);

                    cb(err);
                });
            },
            // create teacheractions group
            function(cb) {

                creategroup({
                    "grouptype": "teacheractions"
                }, function(err, resp) {
                    groups.teacheractions = resp.wid;
                    //proxyprinttodiv('Function creategroup done --    for teacheractions  -- ', resp, 39, true);

                    cb(err);
                });
            },
            // create kidactions group
            function(cb) {

                creategroup({
                    "grouptype": "kidactions"
                }, function(err, resp) {
                    groups.kidactions = resp.wid;
                    //proxyprinttodiv('Function creategroup done --    for kidactions  -- ', resp, 39, true);

                    cb(err);
                });
            }], function (err, res) {
				callback(err, groups);
			});
}


exports.allowsec1test4setuprelateusers = allowsec1test4setuprelateusers = function allowsec1test4setuprelateusers (params, callback) {

            // Sarah    parentgroup
            // Cindy    teachergroup
            // Johnny   kidgroup
            // driuser   parentgroup
			
			
	async.series([

            // johnny   kidgroup
            function(cb) {
                var config = {
                    "currentwid": params.kidgroup,
                    "currentwidmethod": "groupdto",
                    "targetwid": params.johnny,
                    "targetwidmethod": "userdto",
                    "linktype": "manytomany"
                };
                // attach userdto to groupdto, johnny to kidgroup           
                addtargetwidtocurrentwid(config, function(err, res) {
                    //proxyprinttodiv('attach userdto to groupdto, johnny to kidgroup   -- ', res, 39);

                    cb(err);
                })
            },

            function(cb) {
                var config = {
                    "currentwid": params.parentgroup,
                    "currentwidmethod": "groupdto",
                    "targetwid": params.driuser,
                    "targetwidmethod": "userdto",
                    "linktype": "manytomany"
                };
                addtargetwidtocurrentwid(config, function(err, res) {
                    //proxyprinttodiv('attach userdto to groupdto, driuser to manager   -- ', res, 39);

                    cb(err);
                })
            },
			
			function(cb) {
                var config = {
                    "currentwid": params.parentgroup,
                    "currentwidmethod": "groupdto",
                    "targetwid": params.sarah,
                    "targetwidmethod": "userdto",
                    "linktype": "manytomany"
                };
                addtargetwidtocurrentwid(config, function(err, res) {
                    //proxyprinttodiv('attach userdto to groupdto, driuser to manager   -- ', res, 39);

                    cb(err);
                })
            },
			
			function(cb) {
                var config = {
                    "currentwid": params.teachergroup,
                    "currentwidmethod": "groupdto",
                    "targetwid": params.cindy,
                    "targetwidmethod": "userdto",
                    "linktype": "manytomany"
                };
                addtargetwidtocurrentwid(config, function(err, res) {
                    //proxyprinttodiv('attach userdto to groupdto, driuser to manager   -- ', res, 39);

                    cb(err);
                })
            }], function (err, res) {
				callback(err, res);
			});
}


exports.allowsec1test4setuprelatecreator = allowsec1test4setuprelatecreator = function allowsec1test4setuprelatecreator (params, callback) {

            // driuser  kidgroup
            // driuser  teachergroup
			
			
	async.series([

			function(cb) {
                var config = {
                    "currentwid": params.kidgroup,
                    "currentwidmethod": "groupdto",
                    "targetwid": params.driuser,
                    "targetwidmethod": "userdto",
                    "linktype": "manytomany"
                };
                addtargetwidtocurrentwid(config, function(err, res) {
                    //proxyprinttodiv('attach userdto to groupdto, driuser to manager   -- ', res, 39);

                    cb(err);
                })
            }/*,

            function(cb) {
                var config = {
                    "currentwid": params.teachergroup,
                    "currentwidmethod": "groupdto",
                    "targetwid": params.driuser,
                    "targetwidmethod": "userdto",
                    "linktype": "manytomany"
                };
                addtargetwidtocurrentwid(config, function(err, res) {
                    //proxyprinttodiv('attach userdto to groupdto, driuser to manager   -- ', res, 39);

                    cb(err);
                })
            }*/], function (err, res) {
				callback(err, res);
			});
}
		

exports.allowsec1test4setuprelateactions = allowsec1test4setuprelateactions = function allowsec1test4setuprelateactions (params, callback) {
	
	async.series([

			// add createcurrency to parentactions
            function(cb) {
                var config = {
                    "currentwid": params.parentactions,
                    "currentwidmethod": "groupdto",
                    "targetwid": params.createcurrency,
                    "targetwidmethod": "actiondto",
                    "linktype": "manytomany"
                };
                addtargetwidtocurrentwid(config, function(err, res) {
                    //proxyprinttodiv('attach actiondto to groupdto, createoffer to parentactions   -- ', res, 39);

                    cb(err);
                })
            },

            // add editcurrency to parentactions
            function(cb) {
                var config = {
                    "currentwid": params.parentactions,
                    "currentwidmethod": "groupdto",
                    "targetwid": params.editcurrency,
                    "targetwidmethod": "actiondto",
                    "linktype": "manytomany"
                };
                addtargetwidtocurrentwid(config, function(err, res) {
                    //proxyprinttodiv('attach actiondto to groupdto, editcurrency to parentactions   -- ', res, 39);

                    cb(err);
                })
            },

            // add deletecurrency to parentactions
            function(cb) {
                var config = {
                    "currentwid": params.parentactions,
                    "currentwidmethod": "groupdto",
                    "targetwid": params.deletecurrency,
                    "targetwidmethod": "actiondto",
                    "linktype": "manytomany"
                };
                addtargetwidtocurrentwid(config, function(err, res) {
                    //proxyprinttodiv('attach actiondto to groupdto, deletecurrency to parentactions   -- ', res, 39);

                    cb(err);
                })
            },

            // add addpermissions to parentactions
            function(cb) {
                var config = {
                    "currentwid": params.parentactions,
                    "currentwidmethod": "groupdto",
                    "targetwid": params.addpermissions,
                    "targetwidmethod": "actiondto",
                    "linktype": "manytomany"
                };
                addtargetwidtocurrentwid(config, function(err, res) {
                    //proxyprinttodiv('attach actiondto to groupdto, addpermissions to parentactions   -- ', res, 39);

                    cb(err);
                })
            },

            // add addusertogroup to parentactions
            function(cb) {
                var config = {
                    "currentwid": params.parentactions,
                    "currentwidmethod": "groupdto",
                    "targetwid": params.addusertogroup,
                    "targetwidmethod": "actiondto",
                    "linktype": "manytomany"
                };
                addtargetwidtocurrentwid(config, function(err, res) {
                    //proxyprinttodiv('attach actiondto to groupdto, addusertogroup to parentactions   -- ', res, 39);

                    cb(err);
                })
            },
			
            // add createoffer to teacheractions
            function(cb) {
                var config = {
                    "currentwid": params.teacheractions,
                    "currentwidmethod": "groupdto",
                    "targetwid": params.createoffer,
                    "targetwidmethod": "actiondto",
                    "linktype": "manytomany"
                };
                addtargetwidtocurrentwid(config, function(err, res) {
                    //proxyprinttodiv('attach actiondto to groupdto, createoffer to teacheractions   -- ', res, 39);

                    cb(err);
                })
            },

            // add editoffer to teacheractions
            function(cb) {
                var config = {
                    "currentwid": params.teacheractions,
                    "currentwidmethod": "groupdto",
                    "targetwid": params.editoffer,
                    "targetwidmethod": "actiondto",
                    "linktype": "manytomany"
                };
                addtargetwidtocurrentwid(config, function(err, res) {
                    //proxyprinttodiv('attach actiondto to groupdto, editoffer to teacheractions   -- ', res, 39);

                    cb(err);
                })
            },

            // add deleteoffer to teacheractions
            function(cb) {
                var config = {
                    "currentwid": params.teacheractions,
                    "currentwidmethod": "groupdto",
                    "targetwid": params.deleteoffer,
                    "targetwidmethod": "actiondto",
                    "linktype": "manytomany"
                };
                addtargetwidtocurrentwid(config, function(err, res) {
                    //proxyprinttodiv('attach actiondto to groupdto, deleteoffer to teacheractions   -- ', res, 39);

                    cb(err);
                })
            },

            // add executeoffer to teacheractions
            function(cb) {
                var config = {
                    "currentwid": params.teacheractions,
                    "currentwidmethod": "groupdto",
                    "targetwid": params.executeoffer,
                    "targetwidmethod": "actiondto",
                    "linktype": "manytomany"
                };
                addtargetwidtocurrentwid(config, function(err, res) {
                    //proxyprinttodiv('attach actiondto to groupdto, executeoffer to teacheractions   -- ', res, 39);

                    cb(err);
                })
            },
			
        // add getoffer to kidactions
        function(cb) {
            var config = {
                "currentwid": params.kidactions,
                "currentwidmethod": "groupdto",
                "targetwid": params.getoffer,
                "targetwidmethod": "actiondto",
                "linktype": "manytomany"
            };
            // attach actiondto to groupdto
            addtargetwidtocurrentwid(config, function(err, res) {
                //proxyprinttodiv('attach actiondto to groupdto, getoffer to kidactions   -- ', res, 39);

                cb(err);
            })
        },
		
		// add getcurrency to kidactions
        function(cb) {
            var config = {
                "currentwid": params.kidactions,
                "currentwidmethod": "groupdto",
                "targetwid": params.getcurrency,
                "targetwidmethod": "actiondto",
                "linktype": "manytomany"
            };
            // attach actiondto to groupdto
            addtargetwidtocurrentwid(config, function(err, res) {
                //proxyprinttodiv('attach actiondto to groupdto, getcurrency to kidactions   -- ', res, 39);

                cb(err);
            })
        }], function (err, res) {
				callback(err, res);
			});
}


exports.allowsec1test4setuprelateusrgroups = allowsec1test4setuprelateusrgroups = function allowsec1test4setuprelateusrgroups (params, callback) {
	
	            // kidactions       teacheractions
            // teacheractions   parentactions
			
			
	async.series([

            // Add teachergroup to kidgroup
            function(cb) {
                var config = {
                    "currentwid": params.kidgroup,
                    "currentwidmethod": "groupdto",
                    "targetwid": params.teachergroup,
                    "targetwidmethod": "groupdto",
                    "linktype": "manytomany"
                };
                addtargetwidtocurrentwid(config, function(err, res) {
                    //proxyprinttodiv('Add Groups to Groups:   -- kidgroup to teachergroup group -- ', res, 39);

                    cb(err);
                })
            },

            // Add parentgroup to teachergroup
            function(cb) {
                var config = {
                    "currentwid": params.teachergroup,
                    "currentwidmethod": "groupdto",
                    "targetwid": params.parentgroup,
                    "targetwidmethod": "groupdto",
                    "linktype": "manytomany"
                };
                addtargetwidtocurrentwid(config, function(err, res) {
                    //proxyprinttodiv('Add Groups to Groups:   -- teachergroup to parentgroup group -- ', res, 39);

                    cb(err);
                })
            }], function (err, res) {
				callback(err, res);
			});
}



exports.allowsec1test4setuppermissions = allowsec1test4setuppermissions = function allowsec1test4setuppermissions (params, callback) {
	
	            // kidactions       teacheractions
            // teacheractions   parentactions
			
	var kidpermission, teacherpermission, parentpermission;
	
	async.series([

			// DRI  {  kidactions, kidgroup }
            // add group create to actiongroup and usergroup
            function(cb) {
                addpermission({
                    "permission.userwid": params.driuser,
                    "onfailwid": "",
                    "permission.level": 99, // TODO :: REMOVE HARDCODING
                    "description": "DRI {  kidactions, kidgroup }"
                }, function(err, resp) {
                    //proxyprinttodiv('Function addpermission done --    for  kidpermission -- ', resp, 39);
                    kidpermission = resp.wid;
                    cb(err);
                });
            },
            // attach kidactions group to permissiondto
            function(cb) {
                var config = {
                    "currentwid": kidpermission,
                    "currentwidmethod": "permissiondto",
                    "targetwid": params.kidactions,
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
                    "targetwid": params.kidgroup,
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
                    "permission.userwid": params.driuser,
                    "onfailwid": "",
                    "permission.level": 99, // TODO :: REMOVE HARDCODING
                    "description": "DRI {  teacheractions, teachergroup }"
                }, function(err, resp) {
                    //proxyprinttodiv('Function addpermission done --    for  teacherpermission -- ', resp, 39);
                    teacherpermission = resp.wid;
                    cb(err);
                });
            },
            // attach teacheractions group to permissiondto
            function(cb) {
                var config = {
                    "currentwid": teacherpermission,
                    "currentwidmethod": "permissiondto",
                    "targetwid": params.teacheractions,
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
                    "targetwid": params.teachergroup,
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
                    "permission.userwid": params.driuser,
                    "onfailwid": "",
                    "permission.level": 99, // TODO :: REMOVE HARDCODING
                    "description": "DRI {  parentactions, parentgroup }"
                }, function(err, resp) {
                    //proxyprinttodiv('Function addpermission done --    for  parentpermission -- ', resp, 39);
                    parentpermission = resp.wid;
                    cb(err);
                });
            },
            // attach parentactions group to permissiondto
            function(cb) {
                var config = {
                    "currentwid": parentpermission,
                    "currentwidmethod": "permissiondto",
                    "targetwid": params.parentactions,
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
                    "targetwid": params.parentgroup,
                    "targetwidmethod": "groupdto",
                    "linktype": "manytomany"
                };
                addtargetwidtocurrentwid(config, function(err, res) {
                    cb(err);
                })
            }], function (err, res) {
				callback(err, res);
			});
}


	   // The security TEST scheme for the Allowances App
    exports.allowsec1test4setup = allowsec1test4setup = function allowsec1test4setup(params, callback) {

        //debuglevel = 39;

        // users. sarah = parent, cindy = teacher, johnny = kid
        var johnny, sarah, cindy, driuser;

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
                    //proxyprinttodiv('Function created schema done --   for  -- ', resp, 39);
                    cb(err);
                });
            },


			/*****************************/
			/******* CREATE USER DATA ****/
			/*****************************/
			
            // create users
            function(cb) {
                allowsec1test4setupusers({}, function (err, res) {
					proxyprinttodiv('allowsec1test4setupusers res --', res, 99);
					johnny = res.johnny;
					sarah = res.sarah;
					cindy = res.cindy;
					driuser = res.driuser;
					cb(err);
				});
			},
			
			// create actions
			function (cb) {
				allowsec1test4setupactions({}, function (err, res) {
					proxyprinttodiv('allowsec1test4setupactions res --', res, 99);
					createcurrency = res.createcurrency;
					editcurrency = res.editcurrency;
					deletecurrency = res.deletecurrency;
					addpermissions = res.addpermissions;
					addusertogroup = res.addusertogroup;
					createoffer = res.createoffer;
					editoffer = res.editoffer;
					deleteoffer = res.deleteoffer;
					executeoffer = res.executeoffer;
					getoffer = res.getoffer;
					getcurrency = res.getcurrency;
					
					cb(err);
				});
			},
			
            // Create User Groups:  
            function (cb) {
				allowsec1test4setupusrgroups({}, function (err, res) {
					proxyprinttodiv('allowsec1test4setupusrgroups res --', res, 99);
					parentgroup = res.parentgroup;
					teachergroup = res.teachergroup;
					kidgroup = res.kidgroup;
					
					cb(err);
				});
			},

			// Create Action Groups
            function (cb) {
				allowsec1test4setupactgroups({}, function (err, res) {
					proxyprinttodiv('allowsec1test4setupactgroups res --', res, 99);
					parentactions = res.parentactions;
					teacheractions = res.teacheractions;
					kidactions = res.kidactions;
					
					cb(err);
				});
			},

	        // Add Users to Groups

			function (cb) {
				var config = {
					"driuser":"driuser",
					"johnny":johnny,
					"sarah": sarah,
					"cindy": cindy,
					"kidgroup":kidgroup,
					"teachergroup": teachergroup,
					"parentgroup": parentgroup
				};
				allowsec1test4setuprelateusers(config, function (err, res) {
					proxyprinttodiv('allowsec1test4setuprelateusers res --', res, 99);
					cb(err);
				});
			},
			
            // ********* CHANGED BY SAURABH ********//
            // ********* BEGINS HERE ********//
            // user groups need to be associated to the actioncreator //
			
			function (cb) {
				var config = {
					"driuser":"driuser",
					"kidgroup":kidgroup,
					"teachergroup": teachergroup
				};
				allowsec1test4setuprelatecreator(config, function (err, res) {
					proxyprinttodiv('allowsec1test4setuprelatecreator res --', res, 99);
					cb(err);
				});
			},            
            // Add Actions to Groups:

			function (cb) {
				var config = {
					"kidactions": kidactions,
					"teacheractions": teacheractions,
					"parentactions": parentactions,
					"createcurrency": createcurrency,
					"editcurrency": editcurrency,
					"deletecurrency": deletecurrency,
					"addpermissions": addpermissions,
					"addusertogroup": addusertogroup,
					"createoffer": createoffer,
					"editoffer": editoffer,
					"deleteoffer": deleteoffer,
					"executeoffer": executeoffer,
					"getoffer": getoffer,
					"getcurrency": getcurrency
				};
				allowsec1test4setuprelateactions(config, function (err, res) {
					proxyprinttodiv('allowsec1test4setuprelateactions res --', res, 99);
					cb(err);
				});
			},

            // Add Groups to Groups: Create Action Group Hierarchy  

			function (cb) {
				var config = {
					"kidgroup": kidgroup,
					"teachergroup": teachergroup,
					"parentgroup": parentgroup
				};
				allowsec1test4setuprelateusrgroups(config, function (err, res) {
					proxyprinttodiv('allowsec1test4setuprelateusrgroups res --', res, 99);
					cb(err);
				});
			},
			
            // Enter Permissions:
			function (cb) {
				var config = {
					"kidgroup": kidgroup,
					"kidactions": kidactions,
					"teachergroup": teachergroup,
					"teacheractions": teacheractions,
					"parentgroup": parentgroup,
					"parentactions": parentactions,
					"driuser": driuser
				};
				allowsec1test4setuppermissions(config, function (err, res) {
					proxyprinttodiv('allowsec1test4setuppermissions res --', res, 99);
					cb(err);
				});
			}], function(err, resp) {
            // final callback
            //proxyprinttodiv('Function ex1sec done --  response  -- ', resp, 39);
            callback(err, resp);
        });
            

    };

// security check for the allowsec1 function. allowsec1 creates the security scheme and this tests it
// 3 users are created, and permissions of those users are tested.
exports.setest_allowsec1tests4 = setest_allowsec1tests4 = function setest_allowsec1tests4(params, callback) {

        // Effective Permissions:   
        // Johnny   createoffer     

        //debuglevel = 39;

		// Johnny
var johnnyconfig={"_mygroup":'',"_myphone":'9873838958',"_action":'createcurrency',"_dbgroup":'data',"_collection":'wikiwallettesting',"_server":'server1',"_datastore":'main',
		"command.result":"result","command.enviromment.accesstoken":"johnnyac","command.enviromment.userid":"driuser"};
		
var johnnyconfig2={"_mygroup":'',"_myphone":'9873838958',"_action":'editcurrency',"_dbgroup":'data',"_collection":'wikiwallettesting',"_server":'server1',"_datastore":'main',
		"command.result":"result","command.enviromment.accesstoken":"johnnyac","command.enviromment.userid":"driuser"};

var johnnyconfig3={"_mygroup":'',"_myphone":'9873838958',"_action":'deletecurrency',"_dbgroup":'data',"_collection":'wikiwallettesting',"_server":'server1',"_datastore":'main',
		"command.result":"result","command.enviromment.accesstoken":"johnnyac","command.enviromment.userid":"driuser"};	

var johnnyconfig4={"_mygroup":'',"_myphone":'9873838958',"_action":'addusertogroup',"_dbgroup":'data',"_collection":'wikiwallettesting',"_server":'server1',"_datastore":'main',
		"command.result":"result","command.enviromment.accesstoken":"johnnyac","command.enviromment.userid":"driuser"};	

var johnnyconfig5={"_mygroup":'',"_myphone":'9873838958',"_action":'addpermissions',"_dbgroup":'data',"_collection":'wikiwallettesting',"_server":'server1',"_datastore":'main',
		"command.result":"result","command.enviromment.accesstoken":"johnnyac","command.enviromment.userid":"driuser"};	

var johnnyconfig6={"_mygroup":'',"_myphone":'9873838958',"_action":'createoffer',"_dbgroup":'data',"_collection":'wikiwallettesting',"_server":'server1',"_datastore":'main',
		"command.result":"result","command.enviromment.accesstoken":"johnnyac","command.enviromment.userid":"driuser"};	

var johnnyconfig7={"_mygroup":'',"_myphone":'9873838958',"_action":'editoffer',"_dbgroup":'data',"_collection":'wikiwallettesting',"_server":'server1',"_datastore":'main',
		"command.result":"result","command.enviromment.accesstoken":"johnnyac","command.enviromment.userid":"driuser"};	

var johnnyconfig8={"_mygroup":'',"_myphone":'9873838958',"_action":'deleteoffer',"_dbgroup":'data',"_collection":'wikiwallettesting',"_server":'server1',"_datastore":'main',
		"command.result":"result","command.enviromment.accesstoken":"johnnyac","command.enviromment.userid":"driuser"};	

var johnnyconfig9={"_mygroup":'',"_myphone":'9873838958',"_action":'executeoffer',"_dbgroup":'data',"_collection":'wikiwallettesting',"_server":'server1',"_datastore":'main',
		"command.result":"result","command.enviromment.accesstoken":"johnnyac","command.enviromment.userid":"driuser"};	

var johnnyconfig10={"_mygroup":'',"_myphone":'9873838958',"_action":'getoffer',"_dbgroup":'data',"_collection":'wikiwallettesting',"_server":'server1',"_datastore":'main',
		"command.result":"result","command.enviromment.accesstoken":"johnnyac","command.enviromment.userid":"driuser"};	

var johnnyconfig11={"_mygroup":'',"_myphone":'9873838958',"_action":'getcurrency',"_dbgroup":'data',"_collection":'wikiwallettesting',"_server":'server1',"_datastore":'main',
		"command.result":"result","command.enviromment.accesstoken":"johnnyac","command.enviromment.userid":"driuser"};	

	var johnny_expected = {
						"createcurrency":false,
						"editcurrency":false,
						"deletecurrency":false,
						"addusertogroup":false,
						"addpermissions":false,
						"createoffer":false,
						"editoffer":false,
						"deleteoffer":false,
						"executeoffer":false,
						"getoffer":true,
						"getcurrency":true
						};

        var johnny_result = {};


        async.series([

            function(cb) {
                // creates the allowances security scheme data. Creates users, actions, groups, and permissions.
                if (params.setup === false) { cb(null) };                
				allowsec1test4setup({}, function(err, resp) {
                    proxyprinttodiv('Data entered  -   response  -- ', resp, 39);
                    cb(err);
                });

            },

        // check that johnny can perform the createcurrency action
        function(cb) {
            // perform the securitycheck for the createcurrency action, with organization user user ac
            sc(johnnyconfig, function(err, resp) {
                //proxyprinttodiv('Security check done 1 --  johnnyconfig -   response  -- ', resp, 39);
				johnny_result.createcurrency = resp.authstatus;				
                cb(err);
            });
        },
		// check that johnny can perform the editcurrency action
        function(cb) {
            // perform the securitycheck for the editcurrency action, with organization user user ac
            sc(johnnyconfig2, function(err, resp) {
                //proxyprinttodiv('Security check done 2 --  johnnyconfig2 -   response  -- ', resp, 39);
				johnny_result.editcurrency = resp.authstatus;
                cb(err);
            });
        },
		// check that johnny can perform the deletecurrency action
        function(cb) {
            // perform the securitycheck for the deletecurrency action, with organization user user ac
            sc(johnnyconfig3, function(err, resp) {
                //proxyprinttodiv('Security check done 3 --  johnnyconfig3 -   response  -- ', resp, 39);
				johnny_result.deletecurrency = resp.authstatus;
                cb(err);
            });
        },
				// check that johnny can perform the addusertogroup action
        function(cb) {
            // perform the securitycheck for the addusertogroup action, with organization user user ac
            sc(johnnyconfig4, function(err, resp) {
                //proxyprinttodiv('Security check done 4 --  johnnyconfig4 -   response  -- ', resp, 39);
				johnny_result.addusertogroup = resp.authstatus;
                cb(err);
            });
        },
		// check that johnny can perform the addpermissions action
        function(cb) {
            // perform the securitycheck for the addpermissions action, with organization user user ac
            sc(johnnyconfig5, function(err, resp) {
                //proxyprinttodiv('Security check done 5 --  johnnyconfig5 -   response  -- ', resp, 39);
				johnny_result.addpermissions = resp.authstatus;
                cb(err);
            });
        },
		// check that johnny can perform the createoffer action
        function(cb) {
            // perform the securitycheck for the createoffer action, with organization user user ac
            sc(johnnyconfig6, function(err, resp) {
                //proxyprinttodiv('Security check done 6 --  johnnyconfig6 -   response  -- ', resp, 39);
				johnny_result.createoffer = resp.authstatus;
                cb(err);
            });
        },
		// check that johnny can perform the editoffer action
        function(cb) {
            // perform the securitycheck for the editoffer action, with organization user user ac
            sc(johnnyconfig7, function(err, resp) {
                //proxyprinttodiv('Security check done 7 --  johnnyconfig7 -   response  -- ', resp, 39);
				johnny_result.editoffer = resp.authstatus;
                cb(err);
            });
        },
		// check that johnny can perform the deleteoffer action
        function(cb) {
            // perform the securitycheck for the deleteoffer action, with organization user user ac
            sc(johnnyconfig8, function(err, resp) {
                //proxyprinttodiv('Security check done 8 --  johnnyconfig8 -   response  -- ', resp, 39);
				johnny_result.deleteoffer = resp.authstatus;
                cb(err);
            });
        },
		// check that johnny can perform the executeoffer action
        function(cb) {
            // perform the securitycheck for the executeoffer action, with organization user user ac
            sc(johnnyconfig9, function(err, resp) {
                //proxyprinttodiv('Security check done 9 --  johnnyconfig9 -   response  -- ', resp, 39);
				johnny_result.executeoffer = resp.authstatus;
                cb(err);
            });
        },
		
		// check that johnny can perform the getoffer action
        function(cb) {
            // perform the securitycheck for the getoffer action, with organization user user ac
            sc(johnnyconfig10, function(err, resp) {
                //proxyprinttodiv('Security check done 10 --  johnnyconfig10 -   response  -- ', resp, 39);
				johnny_result.getoffer = resp.authstatus;
                cb(err);
            });
        },
		// check that johnny can perform the getcurrency action
        function(cb) {
            // perform the securitycheck for the getcurrency action, with organization user user ac
            sc(johnnyconfig11, function(err, resp) {
                proxyprinttodiv('Security check done 11 --  johnnyconfig11 -   response  -- ', resp, 39);
				johnny_result.getcurrency = resp.authstatus;
                cb(err);
            });
        }		

        ], function(err, resp) {
            // final callback
            proxyprinttodiv('Function allowsec1tests4 done --  response  -- ', resp, 99);

            var expected_result = [johnny_expected];
            var result = [johnny_result];

            proxyprinttodiv('Function allowsec1tests4 expected_result -- ', expected_result, 99, true);
            proxyprinttodiv('Function allowsec1tests4 result -- ', result, 99, true);

            var final_obj = logverify('allowsec1tests4_result', result, expected_result);
            callback(err, final_obj);
        });
	};
	
// security check for the allowsec1 function. allowsec1 creates the security scheme and this tests it
// 3 users are created, and permissions of those users are tested.
exports.setest_allowsec1tests5 = setest_allowsec1tests5 = function setest_allowsec1tests5(params, callback) {

        // Effective Permissions:   
        // Johnny   createoffer     

        //debuglevel = 39;

		// Johnny
var sarahconfig={"_mygroup":'',"_myphone":'9873838958',"_action":'createcurrency',"_dbgroup":'data',"_collection":'wikiwallettesting',"_server":'server1',"_datastore":'main',
		"command.result":"result","command.enviromment.accesstoken":"sarahac","command.enviromment.userid":"driuser"};
		
var sarahconfig2={"_mygroup":'',"_myphone":'9873838958',"_action":'editcurrency',"_dbgroup":'data',"_collection":'wikiwallettesting',"_server":'server1',"_datastore":'main',
		"command.result":"result","command.enviromment.accesstoken":"sarahac","command.enviromment.userid":"driuser"};

var sarahconfig3={"_mygroup":'',"_myphone":'9873838958',"_action":'deletecurrency',"_dbgroup":'data',"_collection":'wikiwallettesting',"_server":'server1',"_datastore":'main',
		"command.result":"result","command.enviromment.accesstoken":"sarahac","command.enviromment.userid":"driuser"};	

var sarahconfig4={"_mygroup":'',"_myphone":'9873838958',"_action":'addusertogroup',"_dbgroup":'data',"_collection":'wikiwallettesting',"_server":'server1',"_datastore":'main',
		"command.result":"result","command.enviromment.accesstoken":"sarahac","command.enviromment.userid":"driuser"};	

var sarahconfig5={"_mygroup":'',"_myphone":'9873838958',"_action":'addpermissions',"_dbgroup":'data',"_collection":'wikiwallettesting',"_server":'server1',"_datastore":'main',
		"command.result":"result","command.enviromment.accesstoken":"sarahac","command.enviromment.userid":"driuser"};	

var sarahconfig6={"_mygroup":'',"_myphone":'9873838958',"_action":'createoffer',"_dbgroup":'data',"_collection":'wikiwallettesting',"_server":'server1',"_datastore":'main',
		"command.result":"result","command.enviromment.accesstoken":"sarahac","command.enviromment.userid":"driuser"};	

var sarahconfig7={"_mygroup":'',"_myphone":'9873838958',"_action":'editoffer',"_dbgroup":'data',"_collection":'wikiwallettesting',"_server":'server1',"_datastore":'main',
		"command.result":"result","command.enviromment.accesstoken":"sarahac","command.enviromment.userid":"driuser"};	

var sarahconfig8={"_mygroup":'',"_myphone":'9873838958',"_action":'deleteoffer',"_dbgroup":'data',"_collection":'wikiwallettesting',"_server":'server1',"_datastore":'main',
		"command.result":"result","command.enviromment.accesstoken":"sarahac","command.enviromment.userid":"driuser"};	

var sarahconfig9={"_mygroup":'',"_myphone":'9873838958',"_action":'executeoffer',"_dbgroup":'data',"_collection":'wikiwallettesting',"_server":'server1',"_datastore":'main',
		"command.result":"result","command.enviromment.accesstoken":"sarahac","command.enviromment.userid":"driuser"};	

var sarahconfig10={"_mygroup":'',"_myphone":'9873838958',"_action":'getoffer',"_dbgroup":'data',"_collection":'wikiwallettesting',"_server":'server1',"_datastore":'main',
		"command.result":"result","command.enviromment.accesstoken":"sarahac","command.enviromment.userid":"driuser"};	

var sarahconfig11={"_mygroup":'',"_myphone":'9873838958',"_action":'getcurrency',"_dbgroup":'data',"_collection":'wikiwallettesting',"_server":'server1',"_datastore":'main',
		"command.result":"result","command.enviromment.accesstoken":"sarahac","command.enviromment.userid":"driuser"};	

	var sarah_expected = {
						"createcurrency":true,
						"editcurrency":true,
						"deletecurrency":true,
						"addusertogroup":true,
						"addpermissions":true,
						"createoffer":true,
						"editoffer":true,
						"deleteoffer":true,
						"executeoffer":true,
						"getoffer":true,
						"getcurrency":true
						};

        var sarah_result = {};


        async.series([

            function(cb) {
                // creates the allowances security scheme data. Creates users, actions, groups, and permissions.
                if (params.setup === false) { cb(null) };                
				allowsec1test4setup({}, function(err, resp) {
                    proxyprinttodiv('Data entered  -   response  -- ', resp, 39);
                    cb(err);
                });

            },

        // check that sarah can perform the createcurrency action
        function(cb) {
            // perform the securitycheck for the createcurrency action, with organization user user ac
            sc(sarahconfig, function(err, resp) {
                //proxyprinttodiv('Security check done 1 --  sarahconfig -   response  -- ', resp, 39);
				sarah_result.createcurrency = resp.authstatus;				
                cb(err);
            });
        },
		// check that sarah can perform the editcurrency action
        function(cb) {
            // perform the securitycheck for the editcurrency action, with organization user user ac
            sc(sarahconfig2, function(err, resp) {
                //proxyprinttodiv('Security check done 2 --  sarahconfig2 -   response  -- ', resp, 39);
				sarah_result.editcurrency = resp.authstatus;
                cb(err);
            });
        },
		// check that sarah can perform the deletecurrency action
        function(cb) {
            // perform the securitycheck for the deletecurrency action, with organization user user ac
            sc(sarahconfig3, function(err, resp) {
                //proxyprinttodiv('Security check done 3 --  sarahconfig3 -   response  -- ', resp, 39);
				sarah_result.deletecurrency = resp.authstatus;
                cb(err);
            });
        },
				// check that sarah can perform the addusertogroup action
        function(cb) {
            // perform the securitycheck for the addusertogroup action, with organization user user ac
            sc(sarahconfig4, function(err, resp) {
                //proxyprinttodiv('Security check done 4 --  sarahconfig4 -   response  -- ', resp, 39);
				sarah_result.addusertogroup = resp.authstatus;
                cb(err);
            });
        },
		// check that sarah can perform the addpermissions action
        function(cb) {
            // perform the securitycheck for the addpermissions action, with organization user user ac
            sc(sarahconfig5, function(err, resp) {
                //proxyprinttodiv('Security check done 5 --  sarahconfig5 -   response  -- ', resp, 39);
				sarah_result.addpermissions = resp.authstatus;
                cb(err);
            });
        },
		// check that sarah can perform the createoffer action
        function(cb) {
            // perform the securitycheck for the createoffer action, with organization user user ac
            sc(sarahconfig6, function(err, resp) {
                //proxyprinttodiv('Security check done 6 --  sarahconfig6 -   response  -- ', resp, 39);
				sarah_result.createoffer = resp.authstatus;
                cb(err);
            });
        },
		// check that sarah can perform the editoffer action
        function(cb) {
            // perform the securitycheck for the editoffer action, with organization user user ac
            sc(sarahconfig7, function(err, resp) {
                //proxyprinttodiv('Security check done 7 --  sarahconfig7 -   response  -- ', resp, 39);
				sarah_result.editoffer = resp.authstatus;
                cb(err);
            });
        },
		// check that sarah can perform the deleteoffer action
        function(cb) {
            // perform the securitycheck for the deleteoffer action, with organization user user ac
            sc(sarahconfig8, function(err, resp) {
                //proxyprinttodiv('Security check done 8 --  sarahconfig8 -   response  -- ', resp, 39);
				sarah_result.deleteoffer = resp.authstatus;
                cb(err);
            });
        },
		// check that sarah can perform the executeoffer action
        function(cb) {
            // perform the securitycheck for the executeoffer action, with organization user user ac
            sc(sarahconfig9, function(err, resp) {
                //proxyprinttodiv('Security check done 9 --  sarahconfig9 -   response  -- ', resp, 39);
				sarah_result.executeoffer = resp.authstatus;
                cb(err);
            });
        },
		// check that sarah can perform the getoffer action
        function(cb) {
            // perform the securitycheck for the getoffer action, with organization user user ac
            sc(sarahconfig10, function(err, resp) {
                //proxyprinttodiv('Security check done 10 --  sarahconfig10 -   response  -- ', resp, 39);
				sarah_result.getoffer = resp.authstatus;
                cb(err);
            });
        },
		// check that sarah can perform the getcurrency action
        function(cb) {
            // perform the securitycheck for the getcurrency action, with organization user user ac
            sc(sarahconfig11, function(err, resp) {
                proxyprinttodiv('Security check done 11 --  sarahconfig11 -   response  -- ', resp, 39);
				sarah_result.getcurrency = resp.authstatus;
                cb(err);
            });
        }		

        ], function(err, resp) {
            // final callback
            proxyprinttodiv('Function setest_allowsec1tests5 done --  response  -- ', resp, 99);

            var expected_result = [sarah_expected];
            var result = [sarah_result];

            proxyprinttodiv('Function setest_allowsec1tests5 expected_result -- ', expected_result, 99, true);
            proxyprinttodiv('Function setest_allowsec1tests5 result -- ', result, 99, true);

            var final_obj = logverify('allowsec1tests5_result', result, expected_result);
            callback(err, final_obj);
        });
    }	


// security check for the allowsec1 function. allowsec1 creates the security scheme and this tests it
// 3 users are created, and permissions of those users are tested.
exports.setest_allowsec1tests6 = setest_allowsec1tests6 = function setest_allowsec1tests6(params, callback) {

        // Effective Permissions:   
        // Johnny   createoffer     

        //debuglevel = 39;

		// Johnny
var cindyconfig={"_mygroup":'',"_myphone":'9873838958',"_action":'createcurrency',"_dbgroup":'data',"_collection":'wikiwallettesting',"_server":'server1',"_datastore":'main',
		"command.result":"result","command.enviromment.accesstoken":"cindyac","command.enviromment.userid":"driuser"};
		
var cindyconfig2={"_mygroup":'',"_myphone":'9873838958',"_action":'editcurrency',"_dbgroup":'data',"_collection":'wikiwallettesting',"_server":'server1',"_datastore":'main',
		"command.result":"result","command.enviromment.accesstoken":"cindyac","command.enviromment.userid":"driuser"};

var cindyconfig3={"_mygroup":'',"_myphone":'9873838958',"_action":'deletecurrency',"_dbgroup":'data',"_collection":'wikiwallettesting',"_server":'server1',"_datastore":'main',
		"command.result":"result","command.enviromment.accesstoken":"cindyac","command.enviromment.userid":"driuser"};	

var cindyconfig4={"_mygroup":'',"_myphone":'9873838958',"_action":'addusertogroup',"_dbgroup":'data',"_collection":'wikiwallettesting',"_server":'server1',"_datastore":'main',
		"command.result":"result","command.enviromment.accesstoken":"cindyac","command.enviromment.userid":"driuser"};	

var cindyconfig5={"_mygroup":'',"_myphone":'9873838958',"_action":'addpermissions',"_dbgroup":'data',"_collection":'wikiwallettesting',"_server":'server1',"_datastore":'main',
		"command.result":"result","command.enviromment.accesstoken":"cindyac","command.enviromment.userid":"driuser"};	

var cindyconfig6={"_mygroup":'',"_myphone":'9873838958',"_action":'createoffer',"_dbgroup":'data',"_collection":'wikiwallettesting',"_server":'server1',"_datastore":'main',
		"command.result":"result","command.enviromment.accesstoken":"cindyac","command.enviromment.userid":"driuser"};	

var cindyconfig7={"_mygroup":'',"_myphone":'9873838958',"_action":'editoffer',"_dbgroup":'data',"_collection":'wikiwallettesting',"_server":'server1',"_datastore":'main',
		"command.result":"result","command.enviromment.accesstoken":"cindyac","command.enviromment.userid":"driuser"};	

var cindyconfig8={"_mygroup":'',"_myphone":'9873838958',"_action":'deleteoffer',"_dbgroup":'data',"_collection":'wikiwallettesting',"_server":'server1',"_datastore":'main',
		"command.result":"result","command.enviromment.accesstoken":"cindyac","command.enviromment.userid":"driuser"};	

var cindyconfig9={"_mygroup":'',"_myphone":'9873838958',"_action":'executeoffer',"_dbgroup":'data',"_collection":'wikiwallettesting',"_server":'server1',"_datastore":'main',
		"command.result":"result","command.enviromment.accesstoken":"cindyac","command.enviromment.userid":"driuser"};	

var cindyconfig10={"_mygroup":'',"_myphone":'9873838958',"_action":'getoffer',"_dbgroup":'data',"_collection":'wikiwallettesting',"_server":'server1',"_datastore":'main',
		"command.result":"result","command.enviromment.accesstoken":"cindyac","command.enviromment.userid":"driuser"};	

var cindyconfig11={"_mygroup":'',"_myphone":'9873838958',"_action":'getcurrency',"_dbgroup":'data',"_collection":'wikiwallettesting',"_server":'server1',"_datastore":'main',
		"command.result":"result","command.enviromment.accesstoken":"cindyac","command.enviromment.userid":"driuser"};	

	var cindy_expected = {
						"createcurrency":false,
						"editcurrency":false,
						"deletecurrency":false,
						"addusertogroup":false,
						"addpermissions":false,
						"createoffer":true,
						"editoffer":true,
						"deleteoffer":true,
						"executeoffer":true,
						"getoffer":true,
						"getcurrency":true
						};

        var cindy_result = {};


        async.series([

            function(cb) {
                // creates the allowances security scheme data. Creates users, actions, groups, and permissions.
                if (params.setup === false) { cb(null) };
				allowsec1test4setup({}, function(err, resp) {
                    proxyprinttodiv('Data entered  -   response  -- ', resp, 39);
                    cb(err);
                });

            },

	        // check that Cindy can perform the createcurrency action
        function(cb) {
            // perform the securitycheck for the createcurrency action, with organization user user ac
            sc(cindyconfig, function(err, resp) {
                //proxyprinttodiv('Security check done 1 --  cindyconfig -   response  -- ', resp, 39);
				cindy_result.createcurrency = resp.authstatus;				
                cb(err);
            });
        },
		// check that cindy can perform the editcurrency action
        function(cb) {
            // perform the securitycheck for the editcurrency action, with organization user user ac
            sc(cindyconfig2, function(err, resp) {
                //proxyprinttodiv('Security check done 2 --  cindyconfig2 -   response  -- ', resp, 39);
				cindy_result.editcurrency = resp.authstatus;
                cb(err);
            });
        },
		// check that cindy can perform the deletecurrency action
        function(cb) {
            // perform the securitycheck for the deletecurrency action, with organization user user ac
            sc(cindyconfig3, function(err, resp) {
                //proxyprinttodiv('Security check done 3 --  cindyconfig3 -   response  -- ', resp, 39);
				cindy_result.deletecurrency = resp.authstatus;
                cb(err);
            });
        },
				// check that cindy can perform the addusertogroup action
        function(cb) {
            // perform the securitycheck for the addusertogroup action, with organization user user ac
            sc(cindyconfig4, function(err, resp) {
                //proxyprinttodiv('Security check done 4 --  cindyconfig4 -   response  -- ', resp, 39);
				cindy_result.addusertogroup = resp.authstatus;
                cb(err);
            });
        },
		// check that cindy can perform the addpermissions action
        function(cb) {
            // perform the securitycheck for the addpermissions action, with organization user user ac
            sc(cindyconfig5, function(err, resp) {
                //proxyprinttodiv('Security check done 5 --  cindyconfig5 -   response  -- ', resp, 39);
				cindy_result.addpermissions = resp.authstatus;
                cb(err);
            });
        },
		// check that cindy can perform the createoffer action
        function(cb) {
            // perform the securitycheck for the createoffer action, with organization user user ac
            sc(cindyconfig6, function(err, resp) {
                //proxyprinttodiv('Security check done 6 --  cindyconfig6 -   response  -- ', resp, 39);
				cindy_result.createoffer = resp.authstatus;
                cb(err);
            });
        },
		// check that cindy can perform the editoffer action
        function(cb) {
            // perform the securitycheck for the editoffer action, with organization user user ac
            sc(cindyconfig7, function(err, resp) {
                //proxyprinttodiv('Security check done 7 --  cindyconfig7 -   response  -- ', resp, 39);
				cindy_result.editoffer = resp.authstatus;
                cb(err);
            });
        },
		// check that cindy can perform the deleteoffer action
        function(cb) {
            // perform the securitycheck for the deleteoffer action, with organization user user ac
            sc(cindyconfig8, function(err, resp) {
                //proxyprinttodiv('Security check done 8 --  cindyconfig8 -   response  -- ', resp, 39);
				cindy_result.deleteoffer = resp.authstatus;
                cb(err);
            });
        },
		// check that cindy can perform the executeoffer action
        function(cb) {
            // perform the securitycheck for the executeoffer action, with organization user user ac
            sc(cindyconfig9, function(err, resp) {
                //proxyprinttodiv('Security check done 9 --  cindyconfig9 -   response  -- ', resp, 39);
				cindy_result.executeoffer = resp.authstatus;
                cb(err);
            });
        },
		// check that cindy can perform the getoffer action
        function(cb) {
            // perform the securitycheck for the getoffer action, with organization user user ac
            sc(cindyconfig10, function(err, resp) {
                //proxyprinttodiv('Security check done 10 --  cindyconfig10 -   response  -- ', resp, 39);
				cindy_result.getoffer = resp.authstatus;
                cb(err);
            });
        },
		// check that cindy can perform the getcurrency action
        function(cb) {
            // perform the securitycheck for the getcurrency action, with organization user user ac
            sc(cindyconfig11, function(err, resp) {
                //proxyprinttodiv('Security check done 11 --  cindyconfig11 -   response  -- ', resp, 39);
				cindy_result.getcurrency = resp.authstatus;
                cb(err);
            });
        }		

        ], function(err, resp) {
            // final callback
            proxyprinttodiv('Function setest_allowsec1tests6 done --  response  -- ', resp, 99);

            var expected_result = [cindy_expected];
            var result = [cindy_result];

            proxyprinttodiv('Function setest_allowsec1tests6 expected_result -- ', expected_result, 99, true);
            proxyprinttodiv('Function setest_allowsec1tests6 result -- ', result, 99, true);

            var final_obj = logverify('allowsec1tests6_result', result, expected_result);
            callback(err, final_obj);
        });
    }

exports.setest_allowsec1testsmini = setest_allowsec1testsmini = function setest_allowsec1testsmini(params, callback) {


var sarahconfig={"_mygroup":'',"_myphone":'9873838958',"_action":'getcurrency',"_dbgroup":'data',"_collection":'wikiwallettesting',"_server":'server1',"_datastore":'main',
		"command.result":"result","command.enviromment.accesstoken":"sarahac","command.enviromment.userid":"driuser"};	

	var sarah_expected = {
						"getcurrency":true
						};

        var sarah_result = {};


        async.series([

            function(cb) {
                // creates the allowances security scheme data. Creates users, actions, groups, and permissions.
                if (params.setup === false) { cb(null) };                
				allowsec1test4setup({}, function(err, resp) {
                    proxyprinttodiv('Data entered  -   response  -- ', resp, 39);
                    cb(err);
                });

            },
		// check that sarah can perform the getcurrency action
        function(cb) {
            // perform the securitycheck for the getcurrency action, with organization user user ac
            sc(sarahconfig, function(err, resp) {
                proxyprinttodiv('Security check done 11 --  sarahconfig11 -   response  -- ', resp, 39);
				sarah_result.getcurrency = resp.authstatus;
                cb(err);
            });
        }		

        ], function(err, resp) {
            // final callback
            proxyprinttodiv('Function setest_allowsec1tests5 done --  response  -- ', resp, 99);

            var expected_result = [sarah_expected];
            var result = [sarah_result];

            proxyprinttodiv('Function setest_allowsec1tests5 expected_result -- ', expected_result, 99, true);
            proxyprinttodiv('Function setest_allowsec1tests5 result -- ', result, 99, true);

            var final_obj = logverify('allowsec1tests5_result', result, expected_result);
            callback(err, final_obj);
        });
    }	
	

exports.setest_usergroupinmetadata1 =
setest_usergroupinmetadata1 = 
function setest_usergroupinmetadata1(params, callback) {


var tomconfig={"_mygroup":'',"_myphone":'9873838958',"_action":'getcurrency',"_dbgroup":'data',"_collection":'wikiwallettesting',"_server":'server1',"_datastore":'main',
		"command.result":"result","command.enviromment.accesstoken":"tomac","command.enviromment.userid":"driuser"};	

	var tom_expected = {
						"getcurrency":true
						};

        var tom_result = {};


        async.series([

            function(cb) {
                // creates the allowances security scheme data. Creates users, actions, groups, and permissions.
                if (params.setup === false) { cb(null) };                
				allowsec1test4setup({}, function(err, resp) {
                    proxyprinttodiv('Data entered  -   response  -- ', resp, 39);
                    cb(err);
                });

            },
			function(cb) {
				execute({"executethis": "addwidmaster",
						"wid": "tom",
						"metadata.method": "userdto",
						"metadata.security.usergroups": ["kidgroup"]
						}, function (err, res) {
							proxyprinttodiv('updating tom record with metadata.security.usergroup = [kidgroup] res --', res, 99);
							proxyprinttodiv('updating tom record with metadata.security.usergroup = [kidgroup] err --', err, 99);
							cb(err);
						});
			},
		// check that tom can perform the getcurrency action
        function(cb) {
            // perform the securitycheck for the getcurrency action, with organization user user ac
            sc(tomconfig, function(err, resp) {
                proxyprinttodiv('Security check done 11 --  tomconfig11 -   response  -- ', resp, 39);
				tom_result.getcurrency = resp.authstatus;
                cb(err);
            });
        }		

        ], function(err, resp) {
            // final callback
            proxyprinttodiv('Function setest_allowsec1tests5 done --  response  -- ', resp, 99);

            var expected_result = [tom_expected];
            var result = [tom_result];

            proxyprinttodiv('Function setest_allowsec1tests5 expected_result -- ', expected_result, 99, true);
            proxyprinttodiv('Function setest_allowsec1tests5 result -- ', result, 99, true);

            var final_obj = logverify('allowsec1tests5_result', result, expected_result);
            callback(err, final_obj);
        });
    }



exports.setest_actiongroupinmetadata1 =
setest_actiongroupinmetadata1 = 
function setest_actiongroupinmetadata1(params, callback) {


var tomconfig={"_mygroup":'',"_myphone":'9873838958',"_action":'playgames',"_dbgroup":'data',"_collection":'wikiwallettesting',"_server":'server1',"_datastore":'main',
		"command.result":"result","command.enviromment.accesstoken":"tomac","command.enviromment.userid":"driuser"};	

	var tom_expected = {
						"playgames":true
						};

        var tom_result = {};
		var playgames = "";

        async.series([

            function(cb) {
                // creates the allowances security scheme data. Creates users, actions, groups, and permissions.
                if (params.setup === false) { cb(null) };                
				allowsec1test4setup({}, function(err, resp) {
                    proxyprinttodiv('Data entered  -   response  -- ', resp, 39);
                    cb(err);
                });

            },
				// DRI creates getcurrency
            function(cb) {
                createaction({
                    "creator": "driuser",
                    "actiontype": "playgames"
                }, function(err, resp) {
                    playgames = resp.wid;
                    //proxyprinttodiv('Function createaction done --    for getcurrency  -- ', resp, 39, true);
                    cb(err);
                });
            },
			function(cb) {
				execute({"executethis": "addwidmaster",
						"wid": playgames,
						"metadata.method": "actiondto",
						"metadata.security.action": ["kidactions"]
						}, function (err, res) {
							cb(err);
						});
			},
		// check that tom can perform the getcurrency action
        function(cb) {
            // perform the securitycheck for the getcurrency action, with organization user user ac
            sc(tomconfig, function(err, resp) {
                proxyprinttodiv('Security check done 11 --  tomconfig11 -   response  -- ', resp, 39);
				tom_result.playgames = resp.authstatus;
                cb(err);
            });
        }		

        ], function(err, resp) {
            // final callback
            proxyprinttodiv('Function setest_allowsec1tests5 done --  response  -- ', resp, 99);

            var expected_result = [tom_expected];
            var result = [tom_result];

            proxyprinttodiv('Function setest_allowsec1tests5 expected_result -- ', expected_result, 99, true);
            proxyprinttodiv('Function setest_allowsec1tests5 result -- ', result, 99, true);

            var final_obj = logverify('allowsec1tests5_result', result, expected_result);
            callback(err, final_obj);
        });
    }

	
	exports.setest_testnestedgroups1 = setest_testnestedgroups1 = function setest_testnestedgroups1 (params, callback) {

	var sarah;
	var kidgroup, teachergroup, parentgroup;
	
	var mygroups = []
	var mygroups_rec = [];
	
	async.series([
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
                //proxyprinttodiv('Function createuser done --  for  sarah -- ', resp, 39, true);
                cb(err);
            });
        },
            // add accesstoken for sarah		
        function(cb) {
            addsecurity({
                "userwid": sarah,
                "securityac": "sarahac"
            }, function(err, resp) {
                //proxyprinttodiv('Function addsecurity done --  for sarah -- ', resp, 39, true);
                cb(err);
            });
        },	
			// create parent group
            function(cb) {

                creategroup({
                    "grouptype": "parentgroup"
                }, function(err, resp) {
                    parentgroup = resp.wid;
                    //proxyprinttodiv('Function creategroup done --    for parentgroup  -- ', resp, 39, true);

                    cb(err);
                });
            },
            // create teacher group
            function(cb) {

                creategroup({
                    "grouptype": "teachergroup"
                }, function(err, resp) {
                    teachergroup = resp.wid;
                    //proxyprinttodiv('Function creategroup done --    for teachergroup  -- ', resp, 39, true);

                    cb(err);
                });
            },
            // create kid group
            function(cb) {

                creategroup({
                    "grouptype": "kidgroup"
                }, function(err, resp) {
                    kidgroup = resp.wid;
                    //proxyprinttodiv('Function creategroup done --    for kidgroup  -- ', resp, 39, true);

                    cb(err);
                });
            },
			// add sarah to parentgroup
            function(cb) {
                var config = {
                    "currentwid": parentgroup,
                    "currentwidmethod": "groupdto",
                    "targetwid": sarah,
                    "targetwidmethod": "userdto",
                    "linktype": "manytomany"
                };
                addtargetwidtocurrentwid(config, function(err, res) {
                    //proxyprinttodiv('attach userdto to groupdto, sarah to parentgroup   -- ', res, 39);

                    cb(err);
                })
            },
            // Add teachergroup to kidgroup
            function(cb) {
                var config = {
                    "currentwid": kidgroup,
                    "currentwidmethod": "groupdto",
                    "targetwid": teachergroup,
                    "targetwidmethod": "groupdto",
                    "linktype": "manytomany"
                };
                addtargetwidtocurrentwid(config, function(err, res) {
                    //proxyprinttodiv('Add Groups to Groups:   -- kidgroup to teachergroup group -- ', res, 39);

                    cb(err);
                })
            },

            // Add parentgroup to teachergroup
            function(cb) {
                var config = {
                    "currentwid": teachergroup,
                    "currentwidmethod": "groupdto",
                    "targetwid": parentgroup,
                    "targetwidmethod": "groupdto",
                    "linktype": "manytomany"
                };
                addtargetwidtocurrentwid(config, function(err, res) {
                    //proxyprinttodiv('Add Groups to Groups:   -- teachergroup to parentgroup group -- ', res, 39);

                    cb(err);
                })
            },
			
			// Get all of Sarah's groups
			function (cb) {
				getrelatedwids("", "groupdto", sarah, "userdto", "", function (err, res1) {

                    async.mapSeries(res1.queryresult, function(reljson1, cbMap1) {
                        async.nextTick(function() {
                            // group
                            var group = reljson1.primarywid;
                            mygroups.push(group);


                            // get all groups recursively
                            function getgroupsofgroups(group,mygroups,cb1){
                                getrelatedwids("", "groupdto", group,"groupdto", "", function (err, res2) {
                                    async.mapSeries(res2.queryresult, function(reljson2, cbMap2) {
                                        async.nextTick(function() {
                                            // group
                                            var group = reljson2.primarywid;
                                            mygroups.push(group);// append/concat the groups related

                                            getgroupsofgroups(group,mygroups,function(e,r){
                                                cbMap2(err);
                                            });
                                        })
                                    },
                                    function(err, res) {
                                        cb1(err, mygroups);
                                    });
                                });
                            }

                            getgroupsofgroups(group,mygroups, function(err,resp){
                                cbMap1(err);
                            });
                        });
                        
                    },
                    function(err, res) {
                        cb(err);
                    });
                });
			}
			], function (err, res) {
				var expected_result = [parentgroup, teachergroup, kidgroup]
				var complex_result = logverify('testnestedgroups1_result', mygroups, expected_result);
				
				var name_result = [];
				
				for (var i in mygroups) {
					if (mygroups[i] === parentgroup) { name_result.push("parentgroup") }
					else if (mygroups[i] === teachergroup) { name_result.push("teachergroup") }
					else if (mygroups[i] === kidgroup) { name_result.push("kidgroup") }
				};
				
				proxyprinttodiv('groups connected to me (wid names) --', mygroups, 99);
				proxyprinttodiv('groups connected to me (group names) --', name_result, 99);
				
				//proxyprinttodiv('parentgroup wid --', parentgroup, 99);
				//proxyprinttodiv('teachergroup wid --', teachergroup, 99);
				//proxyprinttodiv('kidgroup wid --', kidgroup, 99);
				
				callback(err, complex_result);
			});
}


// tests getwid with appnamespace.namespace="cody122". The wid created in nstest_appnamespaceadd1() above should NOT be returned
// back because that wid was created with appnamespace.namespace="cody123" and not "cody122".
exports.setest_commanduserid = 
setest_commanduserid = 
widtests.setest_commanduserid = 
function setest_commanduserid(executeobject, callback) 
{
      var executeobject = [{
							"executethis": "updatewid",
							"command.environment.userid": "1000",
							"command.environment.loggedinuserid": "1001",
							"wid": "wid1",
							"color": "red"
							},
							{"executethis": "getwidmaster",
							"wid": "wid1"
							}];
							
		var expectedresult = {
								"color":"red",
								"wid":"wid1",
								"metadata": {
									"systemdto": {
										"userid":"1000",
										"loggedinuserid":"1001"
									},
								//"date":{"exception":["updated"]},
								"method":"defaultdto"
								}
							};
		
      //var etEnvironment = new drienvironment(executeobject.command.environment)
      //etEnvironment.execute(executeobject, function (error_obj, result_obj) 
      execute(executeobject, function (error_obj, result_obj) 
      {
			  
		proxyprinttodiv('expected error', null, 99);
		proxyprinttodiv('actual error', error_obj, 99);
		proxyprinttodiv('expected result', expectedresult, 99);
		proxyprinttodiv('actual result', result_obj[1], 99);
		composite_obj=logverify("nstest_appnamewidget1", result_obj[1],expectedresult);
		callback(null, composite_obj)

      } 
    );
}
widtests.setest_commanduserid.category = "redaily";
widtests.setest_commanduserid.subcategory = "push";
widtests.setest_commanduserid.js = exports.setest_commanduserid;
widtests.setest_commanduserid.description = "this does a test";


// Creates a wid and adds that wid to a group
exports.setests_metadataaddtogroup1 = 
setests_metadataaddtogroup1 = 
widtests.setests_metadataaddtogroup1 = 
function setests_metadataaddtogroup1 (executeobject, callback) {

      var executeobject = [{
									"executethis": "addwidmaster",
									"wid":"mycolorwid1",
									"color":"green",
									"metadata.security.group.colorwids": "colorwids"
									}
							];
		
		var expectedresult = {
								"wid":"mycolorwid1",
								"data": {
											"color":"green"
										},
								"metadata": {
												"expirationdate":{"exception":["created","changed","unchanged","updated"]},
												"date":{"exception":["created","changed","unchanged","updated"]}
											}
							}
		
      //var etEnvironment = new drienvironment(executeobject.command.environment)
      //etEnvironment.execute(executeobject, function (error_obj, result_obj) 
      execute(executeobject, function (error_obj, result_obj) 
      {
                                
            proxyprinttodiv('expected error', null, 99);
            proxyprinttodiv('actual error', error_obj, 99);
            proxyprinttodiv('expected result', expectedresult, 99);
            proxyprinttodiv('actual result', result_obj, 99);
            var composite_obj=logverify("setests_metadataaddtogroup1", result_obj,expectedresult);
            callback(null, composite_obj)
      } 
    );
};
widtests.setests_metadataaddtogroup1.category = "redaily";
widtests.setests_metadataaddtogroup1.subcategory = "push";
widtests.setests_metadataaddtogroup1.js = exports.setests_metadataaddtogroup1;
widtests.setests_metadataaddtogroup1.description = "this does a test";


// Creates a wid and adds that wid to a group
exports.setests_metadataaddtogroup2 = 
setests_metadataaddtogroup2 = 
widtests.setests_metadataaddtogroup2 = 
function setests_metadataaddtogroup2 (executeobject, callback) {

		var expectedresult = [{
								"wid":"mycolorwid1"
							}, {
								"wid":"mycolorwid1",
								"data": {
											"color":"green"
										},
								"metadata": {
												"expirationdate":{"exception":["created","changed","unchanged","updated"]},
												"date":{"exception":["created","changed","unchanged","updated"]}
											}
							}, {
								"groupname":"colorwids",
								"type":"colorwids",
								"wid":{
									"exception":["changed","unchanged","updated"]
									},
								"metadata":{
									"method":"groupdto"
									}
							}];
							
		
      //var etEnvironment = new drienvironment(executeobject.command.environment)
      //etEnvironment.execute(executeobject, function (error_obj, result_obj)
	creategroup({
			"grouptype": "colorwids"
		}, function(err, res) {
			proxyprinttodiv('Function creategroup done --    for  -- ', res.wid, 99);
			var executeobject = [{
								"executethis": "addwidmaster",
								"wid":"mycolorwid1",
								"color":"green",
								"metadata.security.group.colorwids": "colorwids"
								}, {
								"executethis": "getwid",
								"wid": "mycolorwid1"
								}, {
								"executethis":"getwid",
								"wid": res.wid
					}];
					
			execute(executeobject,function (err, res) {
				var result = logverify('setests_metadataaddtogroup2_result',res,expectedresult);
				proxyprinttodiv('mycolorwid1 result  -- ', res[1], 99);				
				proxyprinttodiv('colorwids group result  -- ', res[2], 99);				
				callback(err,result);
			});
	});
};
widtests.setests_metadataaddtogroup2.category = "redaily";
widtests.setests_metadataaddtogroup2.subcategory = "push";
widtests.setests_metadataaddtogroup2.js = exports.setests_metadataaddtogroup2;
widtests.setests_metadataaddtogroup2.description = "this does a test";


/*
// Creates a wid and adds that wid to a group. Assigns the "edit" actiongroup (permission) to the "creator" usergroup.
// logverify needs to verify that the wid was added to the group... not correct right now
exports.setests_metadataaddgrouppermissions1 = 
setests_metadataaddgrouppermissions1 = 
widtests.setests_metadataaddgrouppermissions1 = 
function setests_metadataaddgrouppermissions1 (executeobject, callback) {

      if (!executeobject.command) {
      executeobject.command={};
      executeobject.command.environment={};
      executeobject.command.environment.run={};
	  };
		
      executeobject.command.xrun=[{
									"executethis": "addwidmaster",
									"wid":"mycolorwid1",
									"color":"green",
									"metadata": {
										"security": {
											"group": {
												"colorwids":"colorwids"
													},
											"permissions": [{
												"usergroup": "creator",
												"actiongroup": "edit",
												"level": 99
													}]
												}
										}
									}
								];
		
		var expectedresult = {
								"wid":"mycolorwid1",
								"data": {
											"color":"green"
										},
								"metadata": {
												"expirationdate":{"exception":["created","changed","unchanged","updated"]},
												"date":{"exception":["created","changed","unchanged","updated"]}
											}
							}
		
      var etEnvironment = new drienvironment(executeobject.command.environment)
      etEnvironment.execute(executeobject, function (error_obj, result_obj) 
      {
                                
            proxyprinttodiv('expected error', null, 99);
            proxyprinttodiv('actual error', error_obj, 99);
            proxyprinttodiv('expected result', expectedresult, 99);
            proxyprinttodiv('actual result', result_obj, 99);
            composite_obj=logverify("setests_metadataaddgrouppermissions1", result_obj,expectedresult);
            callback(null, composite_obj)
      } 
    );
};
widtests.setests_metadataaddgrouppermissions1.category = "redaily";
widtests.setests_metadataaddgrouppermissions1.subcategory = "push";
widtests.setests_metadataaddgrouppermissions1.js = exports.setests_metadataaddgrouppermissions1;
widtests.setests_metadataaddgrouppermissions1.description = "this does a test";
*/


/*
// Creates a wid and adds that wid to a group. Assigns the "edit" actiongroup (permission) to the "creator" usergroup.
// logverify needs to verify that the wid was added to the group... not correct right now
exports.setests_metadataaddgrouppermissions1 = 
setests_metadataaddgrouppermissions1 = 
widtests.setests_metadataaddgrouppermissions1 = 
function setests_metadataaddgrouppermissions1 (executeobject, callback) {

      if (!executeobject.command) {
      executeobject.command={};
      executeobject.command.environment={};
      executeobject.command.environment.run={};
	  };
		
	  async.series([
		function (cb) {
			setests_addusergroup1({}, function (err, res) {
				proxyprinttodiv('completed setests_addusergroup1 --', res, 99);
				cb(err);
			}
		},
		function (cb) {
			execute({"executethis":"addwidmaster",
					"wid": "rob1",
					"name": "Rob",
					"metadata.security.group.employees": "employees"
					}, function (err, res) {
						proxyprinttodiv('added mycolorwid1 --', res, 99, true);
						cb(err);
					});
		},
		function (cb) {
			execute({"executethis":"addwidmaster",
					"wid": "failwid1",
					"a": "b"
					}, function (err, res) {
						proxyprinttodiv('added failwid1 --', res, 99, true);
						cb(err);
					});
		},
		function (cb) {
			
		
		var expectedresult = {
								"wid":"mycolorwid1",
								"data": {
											"color":"green"
										},
								"metadata": {
												"expirationdate":{"exception":["created","changed","unchanged","updated"]},
												"date":{"exception":["created","changed","unchanged","updated"]}
											}
							}
		
      //var etEnvironment = new drienvironment(executeobject.command.environment)
      execute(executeobject, function (error_obj, result_obj) 
      {
                                
            proxyprinttodiv('expected error', null, 99);
            proxyprinttodiv('actual error', error_obj, 99);
            proxyprinttodiv('expected result', expectedresult, 99);
            proxyprinttodiv('actual result', result_obj, 99);
			addpermission({
			"permission.usergroup": "creator",
			"permission.actiongroup": "edit",
			"permission.level": 99,
			"permission.onfailwid": "failwid1"
			}, function (err, res) {
				proxyprinttodiv('addpermission res --', res, 99);
			});
            composite_obj=logverify("setests_metadataaddgrouppermissions2", result_obj,expectedresult);
            callback(null, composite_obj)
      } 
    );
};
widtests.setests_metadataaddgrouppermissions1.category = "redaily";
widtests.setests_metadataaddgrouppermissions1.subcategory = "push";
widtests.setests_metadataaddgrouppermissions1.js = exports.setests_metadataaddgrouppermissions1;
widtests.setests_metadataaddgrouppermissions1.description = "this does a test";



// Creates a wid and adds that wid to a group. Assigns the "edit" actiongroup (permission) to the "creator" usergroup.
// logverify needs to verify that the wid was added to the group... not correct right now
exports.setests_metadataaddgrouppermissions1 = 
setests_metadataaddgrouppermissions1 = 
widtests.setests_metadataaddgrouppermissions1 = 
function setests_metadataaddgrouppermissions1 (executeobject, callback) {

      if (!executeobject.command) {
      executeobject.command={};
      executeobject.command.environment={};
      executeobject.command.environment.run={};
	  };
		
      executeobject.command.xrun=[{
									"executethis": "updatewid",
									"wid":"mycolorwid1",
									"color":"green",
									"metadata": {
										"security": {
											"group": {
												"colorwids":"colorwids"
													},
											"permissions": [{
												"usergroup": "creator",
												"actiongroup": "edit",
												"level": 99
													}]
												}
										}
									}
								];
		
		var expectedresult = {
								"wid":"mycolorwid1",
								"data": {
											"color":"green"
										},
								"metadata": {
												"expirationdate":{"exception":["created","changed","unchanged","updated"]},
												"date":{"exception":["created","changed","unchanged","updated"]}
											}
							}
		
      var etEnvironment = new DriEnvironment(executeobject.command.environment)
      etEnvironment.execute(executeobject, function (error_obj, result_obj) 
      {
                                
            proxyprinttodiv('expected error', null, 99);
            proxyprinttodiv('actual error', error_obj, 99);
            proxyprinttodiv('expected result', expectedresult, 99);
            proxyprinttodiv('actual result', result_obj, 99);
            composite_obj=logverify("setests_metadataaddgrouppermissions1", result_obj,expectedresult);
            callback(null, composite_obj)
      } 
    );
};
widtests.setests_metadataaddgrouppermissions1.category = "redaily";
widtests.setests_metadataaddgrouppermissions1.subcategory = "push";
widtests.setests_metadataaddgrouppermissions1.js = exports.setests_metadataaddgrouppermissions1;
widtests.setests_metadataaddgrouppermissions1.description = "this does a test";


// Creates a wid and adds that wid to a group. Assigns the edit / delete / execute / copy actions to creator usergroup
// logverify needs to verify that the wid was added to the group... not correct right now
exports.setests_metadataaddgrouppermissions2 = 
setests_metadataaddgrouppermissions2 = 
widtests.setests_metadataaddgrouppermissions2 = 
function setests_metadataaddgrouppermissions2 (executeobject, callback) {

      if (!executeobject.command) {
      executeobject.command={};
      executeobject.command.environment={};
      executeobject.command.environment.run={};
	  };
		
      executeobject.command.xrun=[{
									"executethis": "updatewid",
									"wid":"mycolorwid1",
									"color":"green",
									"metadata": {
										"security": {
											"group": {
												"colorwids":"colorwids"
													},
											"permissions": [{
												"usergroup": "creator",
												"actiongroup": "edit",
												"level": 99
													}, {
												"usergroup": "creator",
												"actiongroup": "delete",
												"level": 99
													}, {
												"usergroup": "creator",
												"actiongroup": "execute",
												"level": 99
													}, {
												"usergroup": "creator",
												"actiongroup": "copy",
												"level": 99
													}]
											}
										}
									}
								];
		
		var expectedresult = {
								"wid":"mycolorwid1",
								"data": {
											"color":"green"
										},
								"metadata": {
												"expirationdate":{"exception":["created","changed","unchanged","updated"]},
												"date":{"exception":["created","changed","unchanged","updated"]}
											}
							}
		
      var etEnvironment = new DriEnvironment(executeobject.command.environment)
      etEnvironment.execute(executeobject, function (error_obj, result_obj) 
      {
                                
            proxyprinttodiv('expected error', null, 99);
            proxyprinttodiv('actual error', error_obj, 99);
            proxyprinttodiv('expected result', expectedresult, 99);
            proxyprinttodiv('actual result', result_obj, 99);
            composite_obj=logverify("setests_metadataaddgrouppermissions2", result_obj,expectedresult);
            callback(null, composite_obj)
      } 
    );
};
widtests.setests_metadataaddgrouppermissions2.category = "redaily";
widtests.setests_metadataaddgrouppermissions2.subcategory = "push";
widtests.setests_metadataaddgrouppermissions2.js = exports.setests_metadataaddgrouppermissions2;
widtests.setests_metadataaddgrouppermissions2.description = "this does a test";
*/


/***** SECURITY DEFAULTS *****/

var driuser = ""; // wid of drisuer

var merchantactionstable = {
					"createcurrency": "",
					"editcurrency": "",
					"deletecurrency": "",
					"createoffer": "",
					"editoffer": "",
					"deleteoffer": "",
					"executeoffer": "",
					"addusertogroup": "",
					"addpermissions": ""
				};
				
var useractionstable = {
					"getoffer": "",
					"getcurrency": ""
					};

var actiontables = {
					"alluseractions": useractionstable,
					"allmerchantactions": merchantactionstable
					};
					
var actiongroupstable = {
						"alluseractions": "",
						"allmerchantactions": ""
						};

var usergroupstable = {
						"allusers": "",
						"allmerchants": ""
					};
var usergroupsinherit = {}; // allmerchants : [group1,group2,group3...]
var actiongroupsinherit = {}; // allmerchantactions : [group1,group2,group3...] 					

var permissionstable = {
						"allusers": ["alluseractions"],
						"allmerchants": ["allmerchantactions"]
					};
					
function setup_dri_account(callback) {
        
	createuserdata({
		"wid": "driuser",
		"fname": "driuser",
		"lname": "driuser",
		"phone": "",
		"email": "",
		"address": "161 E. Front St.",
		"address2": "",
		"city": "Traverse City",
		"state": "MI",
		"zip": "49684",
		"country": "US"
	}, function(err, resp) {
		driuser = resp.wid;
		addsecurity({
			"userwid": driuser,
			"securityac": "driuserac"
			}, function(err, resp) {
				callback(err, resp);
			});
	});
        
}


function setup_actions(callback)
{	
	err_obj = {};
	
	async.series([
		function (cb) {
			// merchantactions
			async.forEach(Object.keys(merchantactionstable), function (key, callback) {
				createaction({
						"creator": driuser,
						"actiontype": key
						}, function (err, resp) {
							err_obj[key] = err;
							if (!err) { merchantactionstable[key] = resp.wid };
							proxyprinttodiv('createaction for ' + key + ' generated the following response --', resp, 99, true);
							callback(err, resp);
					});	
			}, function (err, res) {
				proxyprinttodiv('res --', res, 99);
				proxyprinttodiv('err --', err, 99);
				cb(err, res);
			});
		},
		function (cb) {
			// useractions
			async.forEach(Object.keys(useractionstable), function (key, callback) {
				createaction({
						"creator": driuser,
						"actiontype": key
						}, function (err, resp) {
							err_obj[key] = err;
							if (!err) { useractionstable[key] = resp.wid };
							proxyprinttodiv('createaction for ' + key + ' generated the following response --', resp, 99, true);
							callback(err, resp);
					});	
			}, function (err, res) {
				proxyprinttodiv('res --', res, 99);
				proxyprinttodiv('err --', err, 99);
				cb(err, res);
			});
		}], function (err, res) {
				callback(err, err_obj);
		});
}

	
function setup_user_groups(callback) {	
	err_obj = {};
	async.forEach(Object.keys(usergroupstable), function (key, callback) {
		creategroup({
			"grouptype": key
			}, function (err, resp) {
				err_obj[key] = err;
				usergroupstable[key] = resp.wid;
				proxyprinttodiv('creategroup for ' + key + ' generated the following response --', resp, 99, true);
				callback(err, resp);
			});	
	}, function (err, res) {
		proxyprinttodiv('res --', res, 99);
		proxyprinttodiv('err --', err, 99);
		callback(null,err_obj);
		});	
}


function setup_action_groups(callback)
{	
	err_obj = {};
	async.forEach(Object.keys(actiongroupstable), function (key, callback) {
		creategroup({
			"grouptype": key
			}, function (err, resp) {
				err_obj[key] = err;
				actiongroupstable[key] = resp.wid;
				proxyprinttodiv('creategroup for ' + key + ' generated the following response --', resp, 99, true);
				callback(err, resp);
			});	
	}, function (err, res) {
		//proxyprinttodiv('res --', res, 99);
		//proxyprinttodiv('err --', err, 99);
		callback(err, err_obj);
		});
}

function add_driuser_to_groups(callback) {
	var err_obj = {};
	async.forEach(Object.keys(usergroupstable), function (key, callback) {
		config = {
			"currentwid": usergroupstable[key],
			"currentwidmethod": "groupdto",
			"targetwid": driuser,
			"targetwidmethod": "userdto",
			"linktype": "manytomany"
		};
		addtargetwidtocurrentwid(config, function (err, resp) {
				err_obj[key] = err;
				//merchantactionstable[key] = resp.wid;
				proxyprinttodiv('addtargetwidtocurrentwid for ' + key + ' : allmerchantactions generated the following response --', resp, 99, true);
				callback(err, resp);
			});
	}, function (err, res) {
		callback(err, err_obj);
	});
}

function relate_actions_actiongroups(callback) {

	err_obj = {};
	var config;
	
	async.series([
		function (cb) {
			async.forEach(Object.keys(merchantactionstable), function (key, callback) {
				config = {
                    "currentwid": actiongroupstable.allmerchantactions,
                    "currentwidmethod": "groupdto",
                    "targetwid": merchantactionstable[key],
                    "targetwidmethod": "actiondto",
                    "linktype": "manytomany"
                };
				addtargetwidtocurrentwid(config, function (err, resp) {
						err_obj[key] = err;
						//merchantactionstable[key] = resp.wid;
						proxyprinttodiv('addtargetwidtocurrentwid for ' + key + ' : allmerchantactions generated the following response --', resp, 99, true);
						callback(err, resp);
					});	
			}, function (err, res) {
				//proxyprinttodiv('res --', res, 99);
				//proxyprinttodiv('err --', err, 99);
				cb(err,res);
				});
		},
		function (cb) {
			async.forEach(Object.keys(useractionstable), function (key, callback) {
				config = {
                    "currentwid": actiongroupstable.alluseractions,
                    "currentwidmethod": "groupdto",
                    "targetwid": useractionstable[key],
                    "targetwidmethod": "actiondto",
                    "linktype": "manytomany"
                };
				addtargetwidtocurrentwid(config, function (err, resp) {
						err_obj[key] = err;
						//merchantactionstable[key] = resp.wid;
						proxyprinttodiv('addtargetwidtocurrentwid for ' + key + ' : alluseractions generated the following response --', resp, 99, true);
						callback(err, resp);
					});	
			}, function (err, res) {
				//proxyprinttodiv('res --', res, 99);
				//proxyprinttodiv('err --', err, 99);
				cb(err,res);
				});
		}], function (err, res) {
				callback(err, err_obj);
		});
}

function create_basic_permissions(callback) {
	var driuser_permission = "";
	var created_permissions = {};
	var config = {};
	var err_obj = {};
	
	async.series([
		// DRI  {  kidactions, kidgroup }
		// add group create to actiongroup and usergroup
		function(cb) {
			async.forEach(Object.keys(permissionstable), function (key, callback) {		
				addpermission({
					"permission.userwid": driuser,
					"onfailwid": "",
					"permission.level": 99, // TODO :: REMOVE HARDCODING
					"description": "DRI created permission for " + key
				}, function(err, resp) {
					//proxyprinttodiv('Function addpermission done --    for  kidpermission -- ', resp, 39);
					created_permissions[key] = resp.wid;
					callback(err, resp);
				});
			}, function (err, res) {
				cb(err, res);
			});
		},
		function (cb) {
			async.forEach(Object.keys(permissionstable), function (key, callback) {
				config = {
					"currentwid": created_permissions[key],
					"currentwidmethod": "permissiondto",
					"targetwid": usergroupstable[key],
					"targetwidmethod": "groupdto",
					"linktype": "manytomany"
					};
				addtargetwidtocurrentwid(config, function (err, resp) {
						err_obj[key] = err;
						//merchantactionstable[key] = resp.wid;
						proxyprinttodiv('addtargetwidtocurrentwid for ' + key + ' : ' + created_permissions[key] + ' generated the following response --', resp, 99, true);
						async.map(permissionstable[key], function (val, callback) {						
							config = {
							"currentwid": created_permissions[key],
							"currentwidmethod": "permissiondto",
							"targetwid": actiongroupstable[val],
							"targetwidmethod": "groupdto",
							"linktype": "manytomany"
							};
							addtargetwidtocurrentwid(config, function (err, resp) {
								err_obj[val] = err;
								//merchantactionstable[key] = resp.wid;
								proxyprinttodiv('addtargetwidtocurrentwid for ' + key + ' : ' + val + ' generated the following response --', resp, 99, true);
								callback(err, resp);
							});
					}, function (err, res) {
							callback(err, res);
					});
				});	
			}, function (err, res) {
				cb(err, res);
			});
		}], function (err, res) {
				proxyprinttodiv('all finished with res --', res, 99);
				callback(err, err_obj);
		});
}


function test_security_scheme(params, callback) {
var driuserconfig={"_mygroup":'',"_myphone":'9873838958',"_action":'createcurrency',"_dbgroup":'data',"_collection":'wikiwallettesting',"_server":'server1',"_datastore":'main',
		"command.result":"result","command.enviromment.accesstoken":"driuserac","command.enviromment.userid":"driuser"};
var response = "";
		
	async.series([
		function (cb) {
			setup_dri_account(function (err, res) {
				proxyprinttodiv("driuser creation res --", res, 99);
				cb(err);
			});
		},
		function (cb) {
			setup_actions(function (err, res) {
				proxyprinttodiv("actions setup res --", res, 99);
				cb(err);
			});
		},
		function (cb) {
			setup_user_groups(function (err, res) {
				proxyprinttodiv("user groups setup res --", res, 99);
				cb(err);
			});
		},
		function (cb) {
			setup_action_groups(function (err, res) {
				proxyprinttodiv("action groups setup res --", res, 99);
				proxyprinttodiv("merchant actions table res --", merchantactionstable, 99, true);
				cb(err);
			});
		},
		function (cb) {
			relate_actions_actiongroups(function (err, res) {
				proxyprinttodiv("relating actions to actiongroups res --", res, 99);
				cb(err);
			});
		},
		function (cb) {
			add_driuser_to_groups(function (err, res) {
				proxyprinttodiv("adding driuser to all groups res --", res, 99);
				cb(err)
			});
		},
		function (cb) {
			create_basic_permissions(function (err, res) {
				proxyprinttodiv("create permissions res --", res, 99);
				cb(err);
			});
		},
		function(cb) {
            // perform the securitycheck for the createcurrency action, with organization user user ac
            sc(driuserconfig, function(err, resp) {
                //proxyprinttodiv('Security check done 1 --  johnnyconfig -   response  -- ', resp, 39);
				response = resp.authstatus;				
                cb(err);
            });
        }],
		function (err1, resp1) {
			proxyprinttodiv('security response res --', response, 99);
			callback(err1, resp1);
		});
	
};