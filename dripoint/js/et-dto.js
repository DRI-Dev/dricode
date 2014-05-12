// Creating groupdto, securitydto, statusdto and balanceddto
// securitydto holds accesstoken, status
// groupdto holds group, each wid auto lists itself and its creator
// permissions holds grantorwid, granteegroup, actiongroup, targetgroup
// 
// this test shall result in an unauthorized access error
// we create testdata stuff1 and provide access to it to only staff group memners
// however we try to access it (using getwidmaster) using admin group user



// ***************************************************************************
// *************** DATA DEFINATION CREATION FUNCTIONS ******************************
//****************************************************************************

// 'use strict';


exports.cisfroger = cisfroger = function cisfroger(params, callback) {
    execute([
            // actiondto
            //   12M actiongroupdto (groups a user has created)
            //     M21 actiondto (what users are in this group)
            //     121 groupdto
            // userdto
            //   12M permissiondto
            //     M21 usergroupdto
            //     M21 actiongroupdto
            //     M21 dbgroup, databasetablegroup, etc
            //   12M securitydto
            //   12M usergroupdto (groups a user has created)
            //     M21 userdto (what users are in this group)
            //     121 groupdto
            // groupdto
            //   M21 groupdto

            {
                "executethis": "addwidmaster",
                "metadata.method": "systemdto",
                "wid": "systemdto",
                "expirationtimer": "string",
                "expirationdate": "string",
                "executecount": "integer",
                "permissiondto.something1.something2": "string", // this is just a field, but will look like dto data to outside
            }, {

                "executethis": "addwidmaster",
                "metadata.method": "userdto",
                "wid": "userdto",
                "fname": "string",
                "metadata.securitydto.type": "onetoone",
                "metadata.permissiondto.type": "onetomany",

            }, {
                "executethis": "addwidmaster",
                "metadata.method": "securitydto",
                "wid": "securitydto",
                "ac": "string"
            }, {
                "executethis": "addwidmaster",
                "metadata.method": "permissiondto",
                "wid": "permissiondto",
                "level": "string",
                // "metadata.usergroupdto.type": "manytoone",
                // "metadata.actiongroupdto.type": "manytoone"
                "metadata.usergroupdto.type": "manytomany",
                "metadata.actiongroupdto.type": "manytomany"
            }, {
                "executethis": "addwidmaster",
                "metadata.method": "actiongroupdto",
                "wid": "actiongroupdto",
                "actiongroupname": "string"
            }, {
                "executethis": "addwidmaster",
                "metadata.method": "usergroupdto",
                "wid": "usergroupdto",
                "usergroupname": "string"
            }, {
                "executethis": "addwidmaster",
                "wid": "rel_user_security",
                "metadata.method": "relationshipdto",
                "relationshiptype": "attributes",
                "linktype": "onetoone",
                "primarywid": "userdto",
                "primarymethod": "userdto",
                "secondarywid": "securitydto",
                "secondarymethod": "securitydto"

            }, {
                "executethis": "addwidmaster",
                "wid": "rel_user_permission",
                "metadata.method": "relationshipdto",
                "relationshiptype": "attributes",
                "linktype": "onetomany",
                "primarywid": "userdto",
                "primarymethod": "userdto",
                "secondarywid": "permissiondto",
                "secondarymethod": "permissiondto"
            }, {
                "executethis": "addwidmaster",
                "wid": "rel_permission_usergroup",
                "metadata.method": "relationshipdto",
                "relationshiptype": "attributes",
                // "linktype": "manytoone",
                "linktype": "manytomany",
                "primarywid": "permissiondto",
                "primarymethod": "permissiondto",
                "secondarywid": "usergroupdto",
                "secondarymethod": "usergroupdto"
            }, {
                "executethis": "addwidmaster",
                "wid": "rel_permission_actiongroup",
                "metadata.method": "relationshipdto",
                "relationshiptype": "attributes",
                // "linktype": "manytoone",
                "linktype": "manytomany",
                "primarywid": "permissiondto",
                "primarymethod": "permissiondto",
                "secondarywid": "actiongroupdto",
                "secondarymethod": "actiongroupdto"
            }, {
                "executethis": "getwidmaster",
                "wid": "testuser",
                "metadata.getwidmaster.convertmethod": "dto"
            }

        ],
        function (err, res) {

            // updatewid({
            //     "wid": "initialwid",
            //     "date": new Date()
            // }, function (err, res) {
            callback(err, res);
            // });

        });
}



exports.cisf = cisf = function cisf(params, callback) {
    execute([
            // userdto
            // permissiondto
            // securitydto
            // usergroupdto
            // actiondto --- lets talk about this
            // actiongroupdto
            {
                "executethis": "addwidmaster",
                "metadata.method": "systemdto",
                "wid": "systemdto",
                "expirationtimer": "string",
                "expirationdate": "string",
                "executecount": "integer",
                "permissiondto.something1.something2": "string", // this is just a field, but will look like dto data to outside
            }, {

                "executethis": "addwidmaster",
                "metadata.method": "userdto",
                "wid": "userdto",
                "fname": "string",
                "metadata.securitydto.type": "onetoone",
                "metadata.permissiondto.type": "onetomany",

            }, {
                "executethis": "addwidmaster",
                "metadata.method": "securitydto",
                "wid": "securitydto",
                "ac": "string"
            }, {
                "executethis": "addwidmaster",
                "metadata.method": "permissiondto",
                "wid": "permissiondto",
                "level": "string",
                // "metadata.usergroupdto.type": "manytoone",
                // "metadata.actiongroupdto.type": "manytoone"
                "metadata.usergroupdto.type": "manytomany",
                "metadata.actiongroupdto.type": "manytomany"
            }, {
                "executethis": "addwidmaster",
                "metadata.method": "actiongroupdto",
                "wid": "actiongroupdto",
                "actiongroupname": "string"
            }, {
                "executethis": "addwidmaster",
                "metadata.method": "usergroupdto",
                "wid": "usergroupdto",
                "usergroupname": "string"
            }, {
                "executethis": "addwidmaster",
                "wid": "rel_user_security",
                "metadata.method": "relationshipdto",
                "relationshiptype": "attributes",
                "linktype": "onetoone",
                "primarywid": "userdto",
                "primarymethod": "userdto",
                "secondarywid": "securitydto",
                "secondarymethod": "securitydto"

            }, {
                "executethis": "addwidmaster",
                "wid": "rel_user_permission",
                "metadata.method": "relationshipdto",
                "relationshiptype": "attributes",
                "linktype": "onetomany",
                "primarywid": "userdto",
                "primarymethod": "userdto",
                "secondarywid": "permissiondto",
                "secondarymethod": "permissiondto"
            }, {
                "executethis": "addwidmaster",
                "wid": "rel_permission_usergroup",
                "metadata.method": "relationshipdto",
                "relationshiptype": "attributes",
                // "linktype": "manytoone",
                "linktype": "manytomany",
                "primarywid": "permissiondto",
                "primarymethod": "permissiondto",
                "secondarywid": "usergroupdto",
                "secondarymethod": "usergroupdto"
            }, {
                "executethis": "addwidmaster",
                "wid": "rel_permission_actiongroup",
                "metadata.method": "relationshipdto",
                "relationshiptype": "attributes",
                // "linktype": "manytoone",
                "linktype": "manytomany",
                "primarywid": "permissiondto",
                "primarymethod": "permissiondto",
                "secondarywid": "actiongroupdto",
                "secondarymethod": "actiongroupdto"
            }, {
                "executethis": "getwidmaster",
                "wid": "testuser",
                "metadata.getwidmaster.convertmethod": "dto"
            }

        ],
        function (err, res) {

            // updatewid({
            //     "wid": "initialwid",
            //     "date": new Date()
            // }, function (err, res) {
            callback(err, res);
            // });

        });
}



exports.disf = disf = function disf(params, callback) {
    execute([
            // userdto
            // permissiondto
            // securitydto
            // usergroupdto
            // actiondto --- lets talk about this
            // actiongroupdto
            /// Adding data now

            {
                "executethis": "addwidmaster",
                "wid": "systemdefault",
                "metadata.method": "systemdto",
                "expirationtimer": "90",
                "expirationdate": "6/14/14",
                "permissiondto.something1.something2": "someanwser",
                "creator": "driwid"
            }, {
                "executethis": "addwidmaster",
                "metadata.method": "userdto",
                "wid": "testuser",
                "fname": "roger",

                // Create the userdto
                "lname": "2",
                "phone": "3",
                "email": "4",
                "address": "5",
                "address2": "6",
                "city": "7",
                "state": "8",
                "zip": "9",
                "country": "10",
                // securitydto
                "securitydto.ac": "1ac",
                "securitydto.metadata.method": "securitydto",
                // permissiondto
                "permissiondto.0.metadata.method": "permissiondto",
                "permissiondto.0.metadata.system.creator": "driwid",
                "permissiondto.0.metadata.collection": "collection1",
                "permissiondto.0.metadata.db": "data1",
                "permissiondto.0.level": "99",
                // usergroupdto
                "permissiondto.0.usergroupdto.0.wid": "everyone",
                "permissiondto.0.usergroupdto.0.usergroupname": "everyone",
                "permissiondto.0.usergroupdto.0.metadata.system.creator": "driwid",
                // actiongroupdto
                "permissiondto.0.actiongroupdto.0.wid": "allactions",
                "permissiondto.0.actiongroupdto.0.actiongroupname": "allactions",
                "permissiondto.0.actiongroupdto.0.metadata.system.creator": "driwid",
            }, {
                "executethis": "getwidmaster",
                "wid": "testuser",
                "metadata.getwidmaster.convertmethod": "dto"
            }
        ],
        function (err, res) {

            // updatewid({
            //     "wid": "initialwid",
            //     "date": new Date()
            // }, function (err, res) {
            callback(err, res);
            // });

        });
}





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