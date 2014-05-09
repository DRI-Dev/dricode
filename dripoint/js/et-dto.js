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



exports.createalldtostest = createalldtostest = function createalldtostest(params, callback) {
    execute([{
            "executethis": "addwidmaster",
            "metadata.method": "userdto",
            "wid": "userdto",
            "fname": "string",
            "metadata.secdto.type": "onetoone"
        },{
            "executethis": "addwidmaster",
            "metadata.method": "secdto",
            "wid": "secdto",
            "ac": "string"
        }, {
            "executethis": "addwidmaster",
            "metadata.method": "systemdto",
            "wid": "systemdto",
            "expirationtimer": "string",
            "expirationdate": "string",
            "executecount": "integer",
            "permissiondto.something1.something2": "string", // this is just a field, but will look like dto data to outside
            "metadata.inherit.0": {
                "wid": "systemdefault",
                "command": {
                    "dtotype": "",
                    "adopt": "default"
                }
            }
        }, {
            "executethis": "addwidmaster",
            "wid": "systemdefault",
            "metadata.method": "systemdto",
            "expirationtimer": "90",
            "expirationdate": "6/14/14",
            "permissiondto.something1.something2": "someanwser",
        }, {
            "executethis": "addwidmaster",
            "metadata.method": "userdto",
            "wid": "rogerwid",
            "fname": "roger",
            "secdto.ac":"rogerac"

        }, {
            "executethis": "getwidmaster",
            "metadata.method": "userdto",
            "wid": "rogerwid"
        }],
        function(err, res) {
            // updatewid({
            //     "wid": "initialwid",
            //     "date": new Date()
            // }, function(err, res) {
            callback(err, res);
            // });
        });
}


// This function creates the "needed system dtos"
exports.createalldtos = createalldtos = function createalldtos(params, callback) {

    async.series([
            function(cb1) {
                // Create DTOs
                execute([{
                    // Create the systemdto
                    "executethis": "addwidmaster",
                    "wid": "systemdto",
                    "metadata.method": "systemdto",
                    //"metadata.inherit.0": {"wid" : "systemdefault", "command" : { "dtotype":"", "adopt":"default"}},
                    //"metadata.inherit.1": {"wid" : "systemoverride", "command" : { "dtotype":"", "adopt":"override"}},
                    "metadata.executeobjectdto.type": "onetoone",
                    "metadata.executeactiondto.type": "manytoone",
                    "metadata.getactiondto.type": "manytoone",
                    "metadata.editactiondto.type": "manytoone",
                    "metadata.deleteactiondto.type": "manytoone",
                    "metadata.addactiondto.type": "manytoone",
                    "metadata.resultdto.type": "manytoone",
                    "metadata.interfacedto.type": "manytoone",
                    "namespace": "string",
                    "widname": "string",
                    "status": "string",
                    "creator": "string",
                    "creationdate": "string",
                    "expirationdate": "string",
                    "expirationtime": "string"
                }, {
                    // Create the executeactiondto
                    "executethis": "addwidmaster",
                    "wid": "executeactiondto",
                    "metadata.method": "executeactiondto",
                    "metadata.actiongroupdto.type": "manytoone",
                    "metadata.actiondto.type": "onetoone"
                }, {
                    // Create the getactiondto
                    "executethis": "addwidmaster",
                    "wid": "getactiondto",
                    "metadata.method": "getactiondto",
                    "metadata.actiongroupdto.type": "manytoone",
                    "metadata.actiondto.type": "onetoone"
                }, {
                    // Create the editactiondto
                    "executethis": "addwidmaster",
                    "wid": "editactiondto",
                    "metadata.method": "editactiondto",
                    "metadata.actiongroupdto.type": "manytoone",
                    "metadata.actiondto.type": "onetoone",
                }, {
                    // Create the addactiondto
                    "executethis": "addwidmaster",
                    "wid": "addactiondto",
                    "metadata.method": "addactiondto",
                    "metadata.actiongroupdto.type": "manytoone",
                    "metadata.actiondto.type": "onetoone"
                }, {
                    // Create the deleteactiondto
                    "executethis": "addwidmaster",
                    "wid": "deleteactiondto",
                    "metadata.method": "deleteactiondto",
                    "metadata.actiongroupdto.type": "manytoone",
                    "metadata.actiondto.type": "onetoone"
                }, {
                    // create the offlineactiondto
                    "executethis": "addwidmaster",
                    "wid": "offlineactiondto",
                    "metadata.method": "offlineactiondto",
                    "metadata.executedto.type": "manytoone"
                }, {
                    // create the onlineactiondto
                    "executethis": "addwidmaster",
                    "wid": "onlineactiondto",
                    "metadata.method": "onlineactiondto",
                    "metadata.executedto.type": "manytoone"
                }, {
                    // create the localactiondto
                    "executethis": "addwidmaster",
                    "wid": "localactiondto",
                    "metadata.method": "localactiondto",
                    "metadata.onlineaction.type": "manytoone",
                    "metadata.offlineaction.type": "manytoone"
                }, {
                    // create the serveractiondto
                    "executethis": "addwidmaster",
                    "wid": "serveractiondto",
                    "metadata.method": "serveractiondto",
                    "metadata.serveractiondto.type": "manytoone"
                }, {
                    // create the actiondto
                    "executethis": "addwidmaster",
                    "wid": "actiondto",
                    "metadata.method": "actiondto",
                    "metadata.serveractiondto.type": "manytoone",
                    "metadata.localactiondto.type": "manytoone"
                    // }, {
                    //     // Create the environmentdto
                    //     "executethis": "addwidmaster",
                    //     "metadata.method": "environmentdto",
                    //     "wid": "environmentdto",
                    //     "ac": "string",
                    //     "gps": "string",
                    //     "account": "string",
                    //     "db": "string",
                    //     "collection": "string"
                }, {
                    // Create the securitydto
                    "executethis": "addwidmaster",
                    "metadata.method": "securitydto",
                    "wid": "securitydto",
                    "accesstoken": "string",
                    //"status": "integer"
                    "status": "string"
                }, {
                    // Create the groupdto      
                    "executethis": "addwidmaster",
                    "wid": "groupdto",
                    "metadata.method": "groupdto",
                    "groupname": "string",
                    "metadata.groupdto.type": "onetomany"
                }, {
                    // Create the actiongroupdto        
                    "executethis": "addwidmaster",
                    "wid": "actiongroupdto",
                    "metadata.method": "actiongroupdto",
                    "actiongroupname": "string",
                    "creator": "string",
                    "metadata.actiongroupdto.type": "manytomany",
                    "metadata.executeactiondto.type": "manytoone",
                    "metadata.getactiondto.type": "manytoone",
                    "metadata.editactiondto.type": "manytoone",
                    "metadata.deleteactiondto.type": "manytoone",
                    "metadata.addactiondto.type": "manytoone"
                }, {
                    // Create the usergroupdto      
                    "executethis": "addwidmaster",
                    "wid": "usergroupdto",
                    "metadata.method": "usergroupdto",
                    // "metadata.userdto.type": "manytomany",
                    "usergroupname": "string"
                }, {
                    // Create the permissiondto     
                    "executethis": "addwidmaster",
                    "wid": "permissiondto",
                    "metadata.method": "permissiondto",
                    "metadata.system.creator": "string",
                    "level": "string",
					"metadata.inherit.0": {
						"wid" : "defaultuserpermission",
						"command" : {
							"dtotype":"",
							"adopt":"default"
						}
					},
                    "metadata.actiongroupdto.type": "manytomany",
                    "metadata.usergroupdto.type": "manytomany",
                    "metadata.db": "string",
					"metadata.collection": "string"
                }, {
					// Create a default permissiondto
					"executethis":"addwidmaster",
					"wid":"defaultuserpermission",
					"metadata.method":"permissiondto",
					//"actiongroupdto.inherit.0":"",
					//"usergroupdto.inherit.0":"",
					"metadata.db":"cdata",
					"metadata.collection":"cmaincollection",
					"level":"5"
				}, {
                    "executethis": "addwidmaster",
                    "wid": "defaultlocalactiondto",
                    "metadata.method": "localactiondto"
                }, {
                    // Create the userdto
                    "executethis": "addwidmaster",
                    "metadata.method": "userdto",
                    "wid": "userdto",
                    "widname": "wid",
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
                    "metadata.securitydto.type": "onetoone",
                    // "metadata.environmentdto.type": "onetoone",
                    "metadata.permissiondto.type": "onetomany"
                }], function(err, res) {
                    cb1(null);
                });
            },

            function(cb1) {
                createrelationship("actiongroupdto", "actiongroupdto", "manytomany", function(err, res) {
                    cb1(null);
                });
            },
            function(cb1) {
                createrelationship("onlineactiondto", "executedto", "manytoone", function(err, res) {
                    cb1(null);
                });
            },

            function(cb1) {
                createrelationship("offlineactiondto", "executedto", "manytoone", function(err, res) {
                    cb1(null);
                });
            },

            function(cb1) {
                createrelationship("localactiondto", "onlineactiondto", "manytoone", function(err, res) {
                    cb1(null);
                });
            },

            function(cb1) {
                createrelationship("localactiondto", "offlineactiondto", "manytoone", function(err, res) {
                    cb1(null);
                });
            },

            function(cb1) {
                createrelationship("serveractiondto", "serveractiondto", "manytoone", function(err, res) {
                    cb1(null);
                });
            },

            function(cb1) {
                createrelationship("actiondto", "localactiondto", "manytoone", function(err, res) {
                    cb1(null);
                });
            },

            function(cb1) {
                createrelationship("actiondto", "serveractiondto", "manytoone", function(err, res) {
                    cb1(null);
                });
            },

            function(cb1) {
                createrelationship("executeactiondto", "actiondto", "onetoone", function(err, res) {
                    cb1(null);
                });
            },

            function(cb1) {
                createrelationship("getactiondto", "actiondto", "onetoone", function(err, res) {
                    cb1(null);
                });
            },

            function(cb1) {
                createrelationship("editactiondto", "actiondto", "onetoone", function(err, res) {
                    cb1(null);
                });
            },

            function(cb1) {
                createrelationship("addactiondto", "actiondto", "onetoone", function(err, res) {
                    cb1(null);
                });
            },

            function(cb1) {
                createrelationship("deleteactiondto", "actiondto", "onetoone", function(err, res) {
                    cb1(null);
                });
            },

            function(cb1) {
                createrelationship("groupddto", "groupdto", "onetomany", function(err, res) {
                    cb1(null);
                });
            },

            function(cb1) {
                createrelationship("userdto", "securitydto", "onetoone", function(err, res) {
                    cb1(null);
                });
            },

            // function(cb1) {
            //     createrelationship("userdto", "environmentdto", "onetoone", function(err, res) {
            //         cb1(null);
            //     });
            // },

            function(cb1) {
                createrelationship("userdto", "permissiondto", "onetomany", function(err, res) {
                    cb1(null);
                });
            },

            function(cb1) {
                createrelationship("userdto", "usergroupdto", "onetomany", function(err, res) {
                    cb1(null);
                });
            },

            function(cb1) {
                createrelationship("usergroupdto", "userdto", "manytomany", function(err, res) {
                    cb1(null);
                });
            },

            function(cb1) {
                createrelationship("actiongroupdto", "executeactiondto", "manytoone", function(err, res) {
                    cb1(null);
                });
            },

            function(cb1) {
                createrelationship("actiongroupdto", "getactiondto", "manytoone", function(err, res) {
                    cb1(null);
                });
            },

            function(cb1) {
                createrelationship("actiongroupdto", "editactiondto", "manytoone", function(err, res) {
                    cb1(null);
                });
            },

            function(cb1) {
                createrelationship("actiongroupdto", "deleteactiondto", "manytoone", function(err, res) {
                    cb1(null);
                });
            },

            function(cb1) {
                createrelationship("actiongroupdto", "addactiondto", "manytoone", function(err, res) {
                    cb1(null);
                });
            },
            function(cb1) {
                createrelationship("permissiondto", "actiongroupdto", "manytomany", function(err, res) {
                    cb1(null);
                });
            },

            function(cb1) {
                createrelationship("permissiondto", "usergroupdto", "manytomany", function(err, res) {
                    cb1(null);
                });
            }
        ],

        function(err, res) {
            proxyprinttodiv('Function createalldtos -- added all relationships  -- ', res, 39);
            execute({
                "executethis": "getwidmaster", // <-- this wid might not be needed
                "wid": "defaultuser"
            }, callback);
        });
}

// This function creates the "needed default dtos data"
exports.setupdefaultdata = setupdefaultdata = function setupdefaultdata(params, callback) {
    async.series([
            function(cb) {


                execute([{
                    "executethis": "addwidmaster",
                    "wid": "defaultserveractiondto",
                    "metadata.method": "serveractiondto"
                }, {
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
                    // securitydto
                    "securitydto.accesstoken": "1ac",
                    "securitydto.metadata.method": "securitydto",

                    // // environmentdto
                    // "environmentdto.accesstoken": "1ac",
                    // "environmentdto.gps": "gpsval",
                    // "environmentdto.account": "default",
                    // "environmentdto.db": "data",
                    // "environmentdto.collection": "maincollection",
                    // "environmentdto.metadata.method": "environmentdto",

                    // permissiondto
                    "permissiondto.metadata.method": "permissiondto",
                    "permissiondto.metadata.system.creator": "driwid",
                    "permissiondto.level": "99",
                    "permissiondto.metadata.collection": "collection1",
                    "permissiondto.metadata.db": "data1",

                    // permissiondto.usergroupdto
                    "permissiondto.usergroupdto.usergroupname": "everyone",
                    "permissiondto.usergroupdto.metadata.method": "usergroupdto",
                    "permissiondto.usergroupdto.metadata.system.creator": "driwid",

                    // permissiondto.actiongroupdto
                    "permissiondto.actiongroupdto.actiongroupname": "allactions",
                    "permissiondto.actiongroupdto.metadata.method": "actiongroupdto",
                    "permissiondto.actiongroupdto.metadata.system.creator": "driwid"
                }, {
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
                }], function(err, res) {
                    execute({
                        "executethis": "getwidmaster",
                        "wid": "testuser"
                    }, function(err, res) {
                        proxyprinttodiv('Function  setupdefaultdata  created userdata --- testuser ', res, 99);
                        cb(null);
                    });
                });
            }
        ],
        function(err, res) {
            proxyprinttodiv('Function  setupdefaultdata  created userdata --- testuser ', res, 99);
            callback(err, res);
        });
}



// {
//                     "executethis": "addwidmaster",
//                     "wid": "defaultserveractiondto",
//                     "metadata.method": "serveractiondto"
//                 }, {
//                     // default actiongroupdto
//                     "executethis": "addwidmaster",
//                     "wid": "actiongroupdtodefault",
//                     "metadata.method": "actiongroupdto",
//                     "actiongroupname": "actiongroupdtodefault",
//                     "executeactiondto.actiondto.serveractiondto": "defaultserveractiondto",
//                     "executeactiondto.actiondto.localactiondto": "defaultlocalactiondto",
//                     "getactiondto.actiondto.serveractiondto": "defaultserveractiondto",
//                     "getactiondto.actiondto.localactiondto": "defaultlocalactiondto",
//                     "editactiondto.actiondto.serveractiondto": "defaultserveractiondto",
//                     "editactiondto.actiondto.localactiondto": "defaultlocalactiondto",
//                     "deleteactiondto.actiondto.serveractiondto": "defaultserveractiondto",
//                     "deleteactiondto.actiondto.localactiondto": "defaultlocalactiondto"
//                 }, {
//                     // default permissiondto
//                     "executethis": "addwidmaster",
//                     "wid": "permissiondtodefault",
//                     "metadata.method": "permissiondto",
//                     "metadata.system.creator": "string",
//                     "level": "string",
//                     // "actiongroupdto.wid": "actiongroupdtodefault",
//                     "db": "data",
//                     "collection": "maincollection"
//                 }, {
//                     // Create the userdto
//                     "executethis": "addwidmaster",
//                     "metadata.method": "userdto",
//                     "widname": "userdtodefault",
//                     "wid": "defaultuser",
//                     "fname": "1",
//                     "lname": "2",
//                     "phone": "3",
//                     "email": "4",
//                     "address": "5",
//                     "address2": "6",
//                     "city": "7",
//                     "state": "8",
//                     "zip": "9",
//                     "country": "10",
//                     "wid": "testuser",
//                     "metadata.method": "userdto",
//                     // securitydto
//                     "securitydto.accesstoken": "rogerac",
//                     "securitydto.metadata.method": "securitydto",

//                     // environmentdto
//                     "environmentdto.ac": "ac",
//                     "environmentdto.gps": "gpsval",
//                     "environmentdto.account": "default",
//                     "environmentdto.db": "data",
//                     "environmentdto.collection": "maincollection",
//                     "environmentdto.metadata.method": "environmentdto",

//                     // permissiondto
//                     "permissiondto.metadata.method": "permissiondto",
//                     "permissiondto.metadata.system.creator": "driwid",
//                     "permissiondto.level": "99",
//                     "permissiondto.metadata.collection": "collection1",
//                     "permissiondto.metadata.db": "data1",

//                     // permissiondto.usergroupdto
//                     "permissiondto.usergroupdto.usergroupname": "everyone",
//                     "permissiondto.usergroupdto.metadata.method": "usergroupdto",
//                     "permissiondto.usergroupdto.metadata.system.creator": "driwid",

//                     // permissiondto.actiongroupdto
//                     "permissiondto.actiongroupdto.actiongroupname": "allactions",
//                     "permissiondto.actiongroupdto.metadata.method": "actiongroupdto",
//                     "permissiondto.actiongroupdto.metadata.system.creator": "driwid"
//                 }