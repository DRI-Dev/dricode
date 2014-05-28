// Creating groupdto, securitydto, statusdto and balanceddto
// securitydto holds accesstoken, status
// groupdto holds group, each wid auto lists itself and its creator
// permissions holds grantorwid, granteegroup, actiongroup, targetgroup
// 
// this test shall result in an unauthorized access error
// we create testdata stuff1 and provide access to it to only staff group memners
// however we try to access it (using getwidmaster) using admin group user


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
exports.dtox = dtox = function dtox(params, callback) {
    execute([{ // systemdto
            "executethis": "addwidmaster",
            "metadata.method": "systemdto",
            "wid": "systemdto",
            "ownerid": "string",
            "expirationtimer": "string",
            "expirationdate": "string",
            "executecount": "integer"
            // ,
            // "permissiondto.something1.something2": "string", // this is just a field, but will look like dto data to outside
            // "metadata.inherit.0": {
            //     "wid": "systemdefault",
            //     "command": {
            //         "dtotype": "",
            //         "adopt": "default"
            //     }
            // }
            // }, { // system default
            //     "executethis": "addwidmaster",
            //     "wid": "systemdefault",
            //     "metadata.method": "systemdto",
            //     "expirationtimer": "90",
            //     "expirationdate": "6/14/14",
            //     "permissiondto.something1.something2": "someanwser"

        }, { //userdto
            "executethis": "addwidmaster",
            "metadata.method": "userdto",
            "wid": "userdto",
            "fname": "string",
            "lname": "string",
            "phone": "string",
            "email": "string",
            "address": "string",
            "address2": "string",
            "city": "string",
            "state": "string",
            "zip": "string",
            "country": "string",
            //"metadata.systemdto.type": "onetoone",
            "metadata.securitydto.type": "onetoone",
            "metadata.permissiondto.type": "onetomany",
            //"metadata.usergroupdto.type": "onetomany"
        }, { // securitydto
            "executethis": "addwidmaster",
            "metadata.method": "securitydto",
            "wid": "securitydto",
            "ac": "string"
        }, { // permissiondto
            "executethis": "addwidmaster",
            "metadata.method": "permissiondto",
            "wid": "permissiondto",
            "level": "string",
            "metadata.usergroupdto.type": "manytoone",
            "metadata.actiongroupdto.type": "manytoone",
            "metadata.dbgroupdto.type": "manytoone",
            "metadata.databasetablegroupdto": "manytoone"
            // }, { // permission default
            //     "executethis": "addwidmaster",
            //     "wid": "rel_user_sys",
            //     "metadata.method": "relationshipdto",
            //     "primarywid": "userdto",
            //     "secondarywid": "systemdto",
            //     "primarymethod": "userdto",
            //     "secondarymethod": "systemdto",
            //     "linktype": "onetoone",
            //     "relationshiptype": "attributes"
            // }, { // actiondto
            //     "executethis": "addwidmaster",
            //     "wid": "actiondto",
            //     "type": "string",
            //     "metadata.method": "actiondto",
            //     "metadata.actiongroupdto.type": "onetomany"
        }, { // actiongroupdto
            "executethis": "addwidmaster",
            "wid": "actiongroupdto",
            "groupname": "string",
            "metadata.method": "actiongroupdto",
            //    "metadata.actiondto.type": "manytoone",
            "metadata.groupdto.type": "onetoone"
        }, { // usergroupdto
            "executethis": "addwidmaster",
            "wid": "usergroupdto",
            "groupname": "string",
            "metadata.method": "usergroupdto",
            //"metadata.userdto.type": "manytoone",
            "metadata.groupdto.type": "onetoone"
        }, { // dbgroupdto
            "executethis": "addwidmaster",
            "wid": "dbgroupdto",
            "metadata.method": "dbgroupdto",
            "name": "string",
            "metadata.groupdto.type": "onetoone" // added
        }, { // databasetablegroupdto
            "executethis": "addwidmaster",
            "wid": "databasetablegroupdto",
            "metadata.method": "databasetablegroupdto",
            "name": "string",
            "metadata.groupdto.type": "onetoone" // added
        }, { // groupdto
            "executethis": "addwidmaster",
            "wid": "groupdto",
            "metadata.method": "groupdto",
            "type": "string",
            "groupname": "string",
            "metadata.groupdto.type": "manytoone", // changed -- debateable
            "metadata.userdto.type": "manytomany", // added
            "metadata.actiondto.type": "manytomany", // added


            // user to ... relationships
        }, {
            "executethis": "addwidmaster",
            "wid": "rel_user_sec",
            "metadata.method": "relationshipdto",
            "primarywid": "userdto",
            "secondarywid": "securitydto",
            "primarymethod": "userdto",
            "secondarymethod": "securitydto",
            "linktype": "onetoone",
            "relationshiptype": "attributes"
        }, {
            "executethis": "addwidmaster",
            "wid": "rel_user_permission",
            "metadata.method": "relationshipdto",
            "primarywid": "userdto",
            "secondarywid": "permissiondto",
            "primarymethod": "userdto",
            "secondarymethod": "permissiondto",
            "linktype": "onetomany",
            "relationshiptype": "attributes"
            // permission to relationships
        }, {
            "executethis": "addwidmaster",
            "wid": "rel_permission_usergroup",
            "metadata.method": "relationshipdto",
            "primarywid": "permissiondto",
            "secondarywid": "usergroupdto",
            "primarymethod": "permissiondto",
            "secondarymethod": "usergroupdto",
            "linktype": "manytoone",
            "relationshiptype": "attributes"
        }, {
            "executethis": "addwidmaster",
            "wid": "rel_permission_actiongroup",
            "metadata.method": "relationshipdto",
            "primarywid": "permissiondto",
            "secondarywid": "actiongroupdto",
            "primarymethod": "permissiondto",
            "secondarymethod": "actiongroupdto",
            "linktype": "manytoone",
            "relationshiptype": "attributes"
        }, {
            "executethis": "addwidmaster",
            "wid": "rel_permission_dbgroup",
            "metadata.method": "relationshipdto",
            "primarywid": "permissiondto",
            "secondarywid": "dbgroupdto",
            "primarymethod": "permissiondto",
            "secondarymethod": "dbgroupdto",
            "linktype": "manytoone",
            "relationshiptype": "attributes"
        }, {
            "executethis": "addwidmaster",
            "wid": "rel_permission_databasetablegroup",
            "metadata.method": "relationshipdto",
            "primarywid": "permissiondto",
            "secondarywid": "databasetablegroupdto",
            "primarymethod": "permissiondto",
            "secondarymethod": "databasetablegroupdto",
            "linktype": "manytoone",
            "relationshiptype": "attributes"
        }, {


            // to groupdto relationships
            "executethis": "addwidmaster",
            "wid": "rel_actiongroup_action",
            "metadata.method": "relationshipdto",
            "primarywid": "actiongroupdto",
            "secondarywid": "groupdto", // "actiondto",
            "primarymethod": "actiongroupdto",
            "secondarymethod": "groupdto", // "actiondto",
            "linktype": "onetoone", // "manytoone",
            "relationshiptype": "attributes"
        }, {
            "executethis": "addwidmaster",
            "wid": "rel_usergroup_userdto",
            "metadata.method": "relationshipdto",
            "primarywid": "usergroupdto",
            "secondarywid": "groupdto", // "userdto",
            "primarymethod": "usergroupdto",
            "secondarymethod": "groupdto", // "userdto",
            "linktype": "onetoone", // "manytoone",
            "relationshiptype": "attributes"



        }, { // group to others
            "executethis": "addwidmaster",
            "wid": "rel_usergroup_groupdto",
            "metadata.method": "relationshipdto",
            "primarywid": "groupdto", // "usergroupdto",
            "secondarywid": "usergroupdto", //"groupdto",
            "primarymethod": "groupdto", // "usergroupdto",
            "secondarymethod": "usergroupdto", // "groupdto",
            "linktype": "manytomany", // "manytoone",
            "relationshiptype": "attributes"
        }, {
            "executethis": "addwidmaster",
            "wid": "rel_action_group",
            "metadata.method": "relationshipdto",
            "primarywid": "groupdto", //"actiondto",
            "secondarywid": "actiondto", //"groupdto"
            "primarymethod": "groupdto", // "actiondto",
            "secondarymethod": "actiondto", // "groupdto",
            "linktype": "manytomany", // "onetomany",
            "relationshiptype": "attributes"
        }, { // group to group
            "executethis": "addwidmaster",
            "wid": "rel_group_group",
            "metadata.method": "relationshipdto",
            "primarywid": "groupdto",
            "secondarywid": "groupdto",
            "primarymethod": "groupdto",
            "secondarymethod": "groupdto",
            "linktype": "manytoone", // changed
            "relationshiptype": "attributes"



            // }, {
            //     "executethis": "addwidmaster",
            //     "wid": "rel_user_usergroup",
            //     "metadata.method": "relationshipdto",
            //     "primarywid": "userdto",
            //     "secondarywid": "usergroupdto",
            //     "primarymethod": "userdto",
            //     "secondarymethod": "usergroupdto",
            //     "linktype": "onetomany",
            //     "relationshiptype": "attributes"
            // }, {
            //     "executethis": "addwidmaster",
            //     "wid": "rel_action_actiondto",
            //     "metadata.method": "relationshipdto",
            //     "primarywid": "actiondto",
            //     "secondarywid": "actiongroupdto",
            //     "primarymethod": "actiondto",
            //     "secondarymethod": "actiongroupdto",
            //     "linktype": "onetomany",
            //     "relationshiptype": "attributes"
            // }, {
            //     "executethis": "addwidmaster",
            //     "wid": "rel_actiongroup_group",
            //     "metadata.method": "relationshipdto",
            //     "primarywid": "actiongroupdto",
            //     "secondarywid": "groupdto",
            //     "primarymethod": "actiongroupdto",
            //     "secondarymethod": "groupdto",
            //     "linktype": "onetoone",
            //     "relationshiptype": "attributes"
        }, {
            "executethis": "getwidmaster",
            "metadata.method": "userdto",
            "command.getwidmaster.convertmethod": "dto",
            "wid": "userdto"
        }],
        function (err, res) {








            proxyprinttodiv('Function data  ', res, 99);
            console.log(JSON.stringify(res));
            callback(err, res);
        });
}

// TODO :: CREATE a FN TO SEE THAT RECURSION WORKS

// recursegroup(groupwid=, type=)
// -query primary=groupdwid, secondary method = groupdto),
// -from results manually filter only the ones where type matches, add to result set, now recurse on that set

// You could start in action group, user group, groupdto uisign this

exports.testgroupingroup1 = testgroupingroup1 = function testgroupingroup1(params, callback) {
    // Make sure that createalldtos was run before trying to run this

    execute([{
            "executethis": "addwidmaster",
            "metadata.method": "groupdto",
            "wid": "examplegroup1",
            "groupname": "managers"
            //"groupdto.groupdto.groupname": "employees"
        }, {
            "executethis": "getwidmaster",
            "metadata.method": "groupdto",
            "wid": "examplegroup1"
        }],
        function (err, res) {
            proxyprinttodiv('group in group res -- ', res[1], 99);
        });
}

exports.testcreateuser1 = testcreateuser1 = function testcreateuser1(params, callback) {

var wid = "bob_evart",
var fname = "Bob",
var lname = "Evart",
var phone = "555-555-5555",
var email = "bob@test.net",
var address = "123 River St.",
var address2 = "",
var city = "Chicago",
var state = "IL",
var zip = "60290",
var country = "United States",

createuser(wid,fname,lname,phone,email.address,address2,city,state,zip,country);
execute([{
	"executethis":"getwidmaster",
	"metadata.method":"userdto",
	"wid":"bob_evart"
	}],
	function (err,res) {
		var result = logverify([
		{
			"wid": wid,
			"metadata.method": "userdto",
			"fname": fname,
			"lname": lname,
			"phone": phone,
			"email": email,
			"address": address,
			"address2": address2,
			"city": city,
			"state": state,
			"zip": zip,
			"country": country
		}]);
		callback(err,result);
	});
}

exports.testcreateuser2 = testcreateuser2 = function testcreateuser2(params, callback) {

var wid = "ted_stevens",
var fname = "Ted",
var lname = "Stevens",
var phone = "555-555-5555",
var email = "ted@test.net",
var address = "5683 Union St.",
var address2 = "Apt. 928",
var city = "NY",
var state = "NY",
var zip = "11201",
var country = "United States",

createuser(wid,fname,lname,phone,email.address,address2,city,state,zip,country);
execute([{
	"executethis":"getwidmaster",
	"metadata.method":"userdto",
	"wid":"ted_stevens"
	}],
	function (err,res) {
		var result = logverify([
		{
			"wid": wid,
			"metadata.method": "userdto",
			"fname": fname,
			"lname": lname,
			"phone": phone,
			"email": email,
			"address": address,
			"address2": address2,
			"city": city,
			"state": state,
			"zip": zip,
			"country": country
		}]);
		callback(err,result);
	});
}

exports.testcreateusergroup1 = testcreateusergroup1 = function testcreateusergroup1(params, callback) {

	var groupname = "drisales",
	var grouptype = "usergroupdto",
	
	creategroup(groupname,grouptype);
	execute([{
	"executethis":"getwidmaster",
	"metadata.method":"usergroupdto",
	"wid":"drisales"
	}],
	function (err,res) {
		var result = logverify([
		{
			"wid": wid,
			"groupname": groupname,
			"metadata.method": grouptype
		}]);
		callback(err,result);
	});
}

exports.testcreateusergroup2 = testcreateusergroup2 = function testcreateusergroup2(params, callback) {

	var groupname = "driadmin",
	var grouptype = "usergroupdto",
	
	creategroup(groupname,grouptype);
	execute([{
	"executethis":"getwidmaster",
	"metadata.method":"usergroupdto",
	"wid":"driadmin"
	}],
	function (err,res) {
		var result = logverify([
		{
			"wid": wid,
			"groupname": groupname,
			"metadata.method": grouptype
		}]);
		callback(err,result);
	});
}

exports.testaddusertogroup1 = testaddusertogroup1 = function testaddusertogroup1(params, callback) {

	var user = "bob_evart",
	var group = "drisales",
	
	addwidtogroup(user,group);
	execute([{
	"executethis":"getwidmaster",
	"metadata.method":"userdto",
	"wid":"drisales"
	}],
	function (err,res) {
		var result = logverify([
		{
			"wid":wid,
			"metadata.method": "userdto",
			"fname":"Bob",
			"lname":"Evart",
			"phone":"555-555-5555",
			"email":"bob@test.net",
			"address":"123 River St.",
			"address2":"",
			"city":"Chicago",
			"state":"IL",
			"zip":"60290",
			"country":"United States",
			"usergroupdto.0.groupname": group
		}]);
		callback(err,result);
	});
}

exports.testaddusertogroup2 = testaddusertogroup2 = function testaddusertogroup2(params, callback) {

	var user = "ted_steven",
	var group = "driadmin",
	
	addwidtogroup(user,group);
	execute([{
	"executethis":"getwidmaster",
	"metadata.method":"userdto",
	"wid":"driadmin"
	}],
	function (err,res) {
		var result = logverify([
		{
			"wid":wid,
			"metadata.method": "userdto",
			"fname":"Ted",
			"lname":"Stevens",
			"phone":"555-555-5555",
			"email":"ted@test.net",
			"address":"5683 Union St.",
			"address2":"Apt. 928",
			"city":"NY",
			"state":"NY",
			"zip":"11201",
			"country":"United States",
			"usergroupdto.0.groupname": group
		}]);
		callback(err,result);
	});
}

exports.testaddgrouptogroup1 = testaddgrouptogroup1 = function testaddgrouptogroup1(params, callback) {

	var parentgroup = "drisales",
	var childgroup = "driadmin",
	
	createparentgrouprelationship(parentgroup,childgroup);
	execute([{
	"executethis":"getwidmaster",
	"metadata.method":"userdto",
	"wid":"drisales"
	}],
	function (err,res) {
		var result = logverify([
		{
			"wid":parentgroup,
			"metadata.method": "groupdto",
		}]);
		callback(err,result);
	});
}
// ***************************************************************************
// *************** DATA DEFINATION CREATION FUNCTIONS ******************************
//****************************************************************************

// 'use strict';




// security check function - -call after createalldtos, createdefaultdata
exports.check = check = function check(params, callback) {
    // what to test security on
    var check1Set = {};
    check1Set['ac'] = "1ac";
    check1Set['usergroup'] = "everyone";
    check1Set['actiongroup'] = "allactions";
    check1Set['dbgroup'] = "data1";
    check1Set['phone'] = "9873838958";
    check1Set['server'] = "server";
    check1Set['collection'] = "collection1";
    check1Set['datastore'] = "data";


    // check security test 1
    sc({}, check1Set.ac, check1Set.usergroup, check1Set.phone, check1Set.actiongroup, check1Set.dbgroup, check1Set.collection, check1Set.server, check1Set.datastore, function (err, res) {
        proxyprinttodiv('Function  se3  checked security ', res, 99);
        status = res;
        callback(err, res);
    });
}



// security check function - -call after createalldtos, createdefaultdata
exports.checkf = checkf = function checkf(params, callback) {
    // what to test security on
    var check1Set = {};
    check1Set['ac'] = "1ac";
    check1Set['usergroup'] = "everyone";
    check1Set['actiongroup'] = "allactions";
    check1Set['dbgroup'] = "data2";
    check1Set['phone'] = "9873838958";
    check1Set['server'] = "server";
    check1Set['collection'] = "collection1";
    check1Set['datastore'] = "data";


    // check security test 1
    sc({}, check1Set.ac, check1Set.usergroup, check1Set.phone, check1Set.actiongroup, check1Set.dbgroup, check1Set.collection, check1Set.server, check1Set.datastore, function (err, res) {
        proxyprinttodiv('Function  se3  checked security ', res, 99);
        status = res;
        callback(err, res);
    });
}


exports.secy = secy = function secy(parm, callback) {

    debuglevel = 39;
    async.series([
        function (cb1) {
            cisf({}, function (err, res) {
                cb1(null);
            });
        },
        function (cb1) {
            disf({}, function (err, res) {
                cb1(null);
            });
        },
        function (cb1) {
            check({}, function (err, res) {
                cb1(null);
            });
        }
    ], function (err, res) {
        execute({
            "executethis": "getwidmaster",
            "wid": "rogerwid"
        }, function (err, res) {

            proxyprinttodiv('secy --- getwidmaster on user2 >>>>>> ', res, 35);
            callback(err, res);

        });

    });
}



exports.secn = secn = function secn(parm, callback) {

    debuglevel = 39;
    async.series([
        function (cb1) {
            cisf({}, function (err, res) {
                cb1(null);
            });
        },
        function (cb1) {
            disf({}, function (err, res) {
                cb1(null);
            });
        },
        function (cb1) {
            checkf({}, function (err, res) {
                cb1(null);
            });
        }
    ], function (err, res) {
        execute({
            "executethis": "getwidmaster",
            "wid": "rogerwid"
        }, function (err, res) {

            proxyprinttodiv('secn --- getwidmaster on user2 >>>>>> ', res, 35);
            callback(err, res);

        });

    });
}




// [
//     {
//         "fname": "string",
//         "wid": "guid",
//         "metadata": {
//             "method": "string",
//             "securitydto": {
//                 "type": "onetomany"
//             },
//             "permissiondto": {
//                 "type": "onetomany"
//             }
//         },
//         "securitydto": [
//             {
//                 "command": {
//                     "inherit": [],
//                     "deepdtolist": {
//                         "systemdto": "onetoone"
//                     },
//                     "dtolist": {
//                         "systemdto": "onetoone"
//                     }
//                 },
//                 "ac": "string",
//                 "wid": "guid",
//                 "metadata": {
//                     "method": "string"
//                 },
//                 "systemdto": {
//                     "command": {
//                         "inherit": {
//                             "data": {
//                                 "expirationtimer": "90",
//                                 "expirationdate": "6/14/14",
//                                 "permissiondto": {
//                                     "something1": {
//                                         "something2": "someanwser"
//                                     }
//                                 },
//                                 "wid": "systemdefault",
//                                 "metadata": {
//                                     "method": "systemdto"
//                                 }
//                             }
//                         }
//                     },
//                     "ownerid": "string",
//                     "expirationtimer": "string",
//                     "expirationdate": "string",
//                     "executecount": "integer",
//                     "permissiondto": {
//                         "something1": {
//                             "something2": "string"
//                         }
//                     },
//                     "wid": "systemdto",
//                     "metadata": {
//                         "method": "systemdto",
//                         "inherit": [
//                             {
//                                 "wid": "systemdefault",
//                                 "command": {
//                                     "dtotype": "",
//                                     "adopt": "default"
//                                 }
//                             }
//                         ]
//                     }
//                 }
//             }
//         ],
//         "permissiondto": [
//             {
//                 "command": {
//                     "inherit": [],
//                     "deepdtolist": {
//                         "groupdto": "onetoone",
//                         "userdto": "manytomany",
//                         "actiondto": "manytomany",
//                         "systemdto": "onetoone",
//                         "usergroupdto": "manytoone",
//                         "actiongroupdto": "manytoone",
//                         "dbgroupdto": "manytoone",
//                         "databasetablegroupdto": "manytoone"
//                     },
//                     "dtolist": {
//                         "usergroupdto": "manytoone",
//                         "actiongroupdto": "manytoone",
//                         "dbgroupdto": "manytoone",
//                         "databasetablegroupdto": "manytoone",
//                         "systemdto": "onetoone"
//                     }
//                 },
//                 "level": "string",
//                 "wid": "guid",
//                 "metadata": {
//                     "method": "string",
//                     "usergroupdto": {
//                         "type": "manytoone"
//                     },
//                     "actiongroupdto": {
//                         "type": "manytoone"
//                     },
//                     "dbgroupdto": {
//                         "type": "manytoone"
//                     },
//                     "databasetablegroupdto": {
//                         "type": "manytoone"
//                     }
//                 },
//                 "usergroupdto": {
//                     "command": {
//                         "inherit": [],
//                         "deepdtolist": {
//                             "groupdto": "onetoone",
//                             "userdto": "manytomany",
//                             "actiondto": "manytomany",
//                             "systemdto": "onetoone"
//                         },
//                         "dtolist": {
//                             "groupdto": "onetoone",
//                             "systemdto": "onetoone"
//                         }
//                     },
//                     "groupname": "string",
//                     "wid": "guid",
//                     "metadata": {
//                         "method": "string",
//                         "groupdto": {
//                             "type": "onetoone"
//                         }
//                     },
//                     "groupdto": {
//                         "command": {
//                             "inherit": [],
//                             "deepdtolist": {
//                                 "groupdto": "manytoone",
//                                 "userdto": "manytomany",
//                                 "actiondto": "manytomany",
//                                 "systemdto": "onetoone"
//                             },
//                             "dtolist": {
//                                 "groupdto": "manytoone",
//                                 "userdto": "manytomany",
//                                 "actiondto": "manytomany",
//                                 "systemdto": "onetoone"
//                             }
//                         },
//                         "type": "string",
//                         "groupname": "string",
//                         "wid": "guid",
//                         "metadata": {
//                             "method": "string",
//                             "groupdto": {
//                                 "type": "manytoone"
//                             },
//                             "userdto": {
//                                 "type": "manytomany"
//                             },
//                             "actiondto": {
//                                 "type": "manytomany"
//                             }
//                         },
//                         "systemdto": {
//                             "command": {
//                                 "inherit": {
//                                     "data": {
//                                         "expirationtimer": "90",
//                                         "expirationdate": "6/14/14",
//                                         "permissiondto": {
//                                             "something1": {
//                                                 "something2": "someanwser"
//                                             }
//                                         },
//                                         "wid": "systemdefault",
//                                         "metadata": {
//                                             "method": "systemdto"
//                                         }
//                                     }
//                                 }
//                             },
//                             "ownerid": "string",
//                             "expirationtimer": "string",
//                             "expirationdate": "string",
//                             "executecount": "integer",
//                             "permissiondto": {
//                                 "something1": {
//                                     "something2": "string"
//                                 }
//                             },
//                             "wid": "systemdto",
//                             "metadata": {
//                                 "method": "systemdto",
//                                 "inherit": [
//                                     {
//                                         "wid": "systemdefault",
//                                         "command": {
//                                             "dtotype": "",
//                                             "adopt": "default"
//                                         }
//                                     }
//                                 ]
//                             }
//                         }
//                     },
//                     "systemdto": {
//                         "command": {
//                             "inherit": {
//                                 "data": {
//                                     "expirationtimer": "90",
//                                     "expirationdate": "6/14/14",
//                                     "permissiondto": {
//                                         "something1": {
//                                             "something2": "someanwser"
//                                         }
//                                     },
//                                     "wid": "systemdefault",
//                                     "metadata": {
//                                         "method": "systemdto"
//                                     }
//                                 }
//                             }
//                         },
//                         "ownerid": "string",
//                         "expirationtimer": "string",
//                         "expirationdate": "string",
//                         "executecount": "integer",
//                         "permissiondto": {
//                             "something1": {
//                                 "something2": "string"
//                             }
//                         },
//                         "wid": "systemdto",
//                         "metadata": {
//                             "method": "systemdto",
//                             "inherit": [
//                                 {
//                                     "wid": "systemdefault",
//                                     "command": {
//                                         "dtotype": "",
//                                         "adopt": "default"
//                                     }
//                                 }
//                             ]
//                         }
//                     }
//                 },
//                 "actiongroupdto": {
//                     "command": {
//                         "inherit": [],
//                         "deepdtolist": {
//                             "groupdto": "onetoone",
//                             "systemdto": "onetoone"
//                         },
//                         "dtolist": {
//                             "groupdto": "onetoone",
//                             "systemdto": "onetoone"
//                         }
//                     },
//                     "groupname": "string",
//                     "wid": "guid",
//                     "metadata": {
//                         "method": "string",
//                         "groupdto": {
//                             "type": "onetoone"
//                         }
//                     },
//                     "systemdto": {
//                         "command": {
//                             "inherit": {
//                                 "data": {
//                                     "expirationtimer": "90",
//                                     "expirationdate": "6/14/14",
//                                     "permissiondto": {
//                                         "something1": {
//                                             "something2": "someanwser"
//                                         }
//                                     },
//                                     "wid": "systemdefault",
//                                     "metadata": {
//                                         "method": "systemdto"
//                                     }
//                                 }
//                             }
//                         },
//                         "ownerid": "string",
//                         "expirationtimer": "string",
//                         "expirationdate": "string",
//                         "executecount": "integer",
//                         "permissiondto": {
//                             "something1": {
//                                 "something2": "string"
//                             }
//                         },
//                         "wid": "systemdto",
//                         "metadata": {
//                             "method": "systemdto",
//                             "inherit": [
//                                 {
//                                     "wid": "systemdefault",
//                                     "command": {
//                                         "dtotype": "",
//                                         "adopt": "default"
//                                     }
//                                 }
//                             ]
//                         }
//                     }
//                 },
//                 "dbgroupdto": {
//                     "command": {
//                         "inherit": [],
//                         "deepdtolist": {
//                             "groupdto": "onetoone",
//                             "systemdto": "onetoone"
//                         },
//                         "dtolist": {
//                             "groupdto": "onetoone",
//                             "systemdto": "onetoone"
//                         }
//                     },
//                     "name": "string",
//                     "wid": "guid",
//                     "metadata": {
//                         "method": "string",
//                         "groupdto": {
//                             "type": "onetoone"
//                         }
//                     },
//                     "systemdto": {
//                         "command": {
//                             "inherit": {
//                                 "data": {
//                                     "expirationtimer": "90",
//                                     "expirationdate": "6/14/14",
//                                     "permissiondto": {
//                                         "something1": {
//                                             "something2": "someanwser"
//                                         }
//                                     },
//                                     "wid": "systemdefault",
//                                     "metadata": {
//                                         "method": "systemdto"
//                                     }
//                                 }
//                             }
//                         },
//                         "ownerid": "string",
//                         "expirationtimer": "string",
//                         "expirationdate": "string",
//                         "executecount": "integer",
//                         "permissiondto": {
//                             "something1": {
//                                 "something2": "string"
//                             }
//                         },
//                         "wid": "systemdto",
//                         "metadata": {
//                             "method": "systemdto",
//                             "inherit": [
//                                 {
//                                     "wid": "systemdefault",
//                                     "command": {
//                                         "dtotype": "",
//                                         "adopt": "default"
//                                     }
//                                 }
//                             ]
//                         }
//                     }
//                 },
//                 "databasetablegroupdto": {
//                     "command": {
//                         "inherit": [],
//                         "deepdtolist": {
//                             "groupdto": "onetoone",
//                             "systemdto": "onetoone"
//                         },
//                         "dtolist": {
//                             "groupdto": "onetoone",
//                             "systemdto": "onetoone"
//                         }
//                     },
//                     "name": "string",
//                     "wid": "guid",
//                     "metadata": {
//                         "method": "string",
//                         "groupdto": {
//                             "type": "onetoone"
//                         }
//                     },
//                     "systemdto": {
//                         "command": {
//                             "inherit": {
//                                 "data": {
//                                     "expirationtimer": "90",
//                                     "expirationdate": "6/14/14",
//                                     "permissiondto": {
//                                         "something1": {
//                                             "something2": "someanwser"
//                                         }
//                                     },
//                                     "wid": "systemdefault",
//                                     "metadata": {
//                                         "method": "systemdto"
//                                     }
//                                 }
//                             }
//                         },
//                         "ownerid": "string",
//                         "expirationtimer": "string",
//                         "expirationdate": "string",
//                         "executecount": "integer",
//                         "permissiondto": {
//                             "something1": {
//                                 "something2": "string"
//                             }
//                         },
//                         "wid": "systemdto",
//                         "metadata": {
//                             "method": "systemdto",
//                             "inherit": [
//                                 {
//                                     "wid": "systemdefault",
//                                     "command": {
//                                         "dtotype": "",
//                                         "adopt": "default"
//                                     }
//                                 }
//                             ]
//                         }
//                     }
//                 },
//                 "systemdto": {
//                     "command": {
//                         "inherit": {
//                             "data": {
//                                 "expirationtimer": "90",
//                                 "expirationdate": "6/14/14",
//                                 "permissiondto": {
//                                     "something1": {
//                                         "something2": "someanwser"
//                                     }
//                                 },
//                                 "wid": "systemdefault",
//                                 "metadata": {
//                                     "method": "systemdto"
//                                 }
//                             }
//                         }
//                     },
//                     "ownerid": "string",
//                     "expirationtimer": "string",
//                     "expirationdate": "string",
//                     "executecount": "integer",
//                     "permissiondto": {
//                         "something1": {
//                             "something2": "string"
//                         }
//                     },
//                     "wid": "systemdto",
//                     "metadata": {
//                         "method": "systemdto",
//                         "inherit": [
//                             {
//                                 "wid": "systemdefault",
//                                 "command": {
//                                     "dtotype": "",
//                                     "adopt": "default"
//                                 }
//                             }
//                         ]
//                     }
//                 }
//             }
//         ],
//         "systemdto": {
//             "command": {
//                 "inherit": {
//                     "data": {
//                         "expirationtimer": "90",
//                         "expirationdate": "6/14/14",
//                         "permissiondto": {
//                             "something1": {
//                                 "something2": "someanwser"
//                             }
//                         },
//                         "wid": "systemdefault",
//                         "metadata": {
//                             "method": "systemdto"
//                         }
//                     }
//                 }
//             },
//             "ownerid": "string",
//             "expirationtimer": "string",
//             "expirationdate": "string",
//             "executecount": "integer",
//             "permissiondto": {
//                 "something1": {
//                     "something2": "string"
//                 }
//             },
//             "wid": "systemdto",
//             "metadata": {
//                 "method": "systemdto",
//                 "inherit": [
//                     {
//                         "wid": "systemdefault",
//                         "command": {
//                             "dtotype": "",
//                             "adopt": "default"
//                         }
//                     }
//                 ]
//             }
//         },
//         "command": {
//             "inherit": [],
//             "deepdtolist": {
//                 "systemdto": "onetoone",
//                 "groupdto": "onetoone",
//                 "userdto": "manytomany",
//                 "actiondto": "manytomany",
//                 "usergroupdto": "manytoone",
//                 "actiongroupdto": "manytoone",
//                 "dbgroupdto": "manytoone",
//                 "databasetablegroupdto": "manytoone",
//                 "securitydto": "onetomany",
//                 "permissiondto": "onetomany"
//             },
//             "dtolist": {
//                 "securitydto": "onetomany",
//                 "permissiondto": "onetomany",
//                 "systemdto": "onetoone"
//             }
//         }
//     }
// ]