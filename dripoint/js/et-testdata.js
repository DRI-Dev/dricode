// copyright (c) 2014 DRI
// create users
// creates wids
// we put users and put wids into groups
// we create actiongroups, targetroups, 
// we put groups insdie of groups
// we add permissions
// we test
//
// 
//
//


    // {"executefilter" : {"query":{"$eq":{"type":"minute"}}}}
    exports.filter1 = filter1 = function filter1(params, callback) {
        debuglevel = 37;
        saveglobal("debugname", "");
        saveglobal("debugcat", "");
        saveglobal("debugsubcat", "code");
        var status = false;

        // create dtos  
        var executeList = [{
            // create simple ttdto
            "executethis": "addwidmaster",
            "wid": "ttdto1",
            "metadata.method": "ttdto1",
            "type": "string"
        }, {
            // create simple ttdto
            "executethis": "addwidmaster",
            "wid": "ttdto2",
            "metadata.method": "ttdto2",
            "type": "string"
        }];
        execute({
            "executethis": executeList,
            "executefilter": {
                "query": {
                    "$eq": {
                        "type": "minute"
                    }
                }
            }
        }, function (err, res) {
            proxyprinttodiv('Function filter1 added  ttdto -- ', res, 37);
            callback(null);
        });
    }

    exports.authortest1 = authortest1 = function authortest1() {
        execute([{
                "executethis": "addwidmaster",
                "wid": "bookdto",
                "metadata.method": "bookdto",
                "title": "string"
            },

            {
                "executethis": "addwidmaster",
                "wid": "authordto",
                "metadata.method": "authordto",
                "name": "string",
                "metadata.bookdto.type": "onetomany"
            },

            {
                "executethis": "addwidmaster",
                "wid": "daniel",
                "metadata.method": "authordto",
                "name": "Daniel",
                "bookdto.title": "House of Horrors"
            }
        ]);
    }

    exports.createactiondto = createactiondto = function createactiondto() {
        execute([{
            "executethis": "addwidmaster",
            "wid": "actiondto",
            "metadata.method": "actiondto",
            "actionname": "string",
            "beforewid": "string",
            "afterwid": "string",
            "errorobject": "string",
            "metadata.queuedto.type": "onetomany",
            "metadata.systemdto.type": "onetoone"
        }, {
            // create relationships systemdto
            "executethis": "addwidmaster",
            "wid": "rel_actiondto_to_systemdto",
            "metadata.method": "relationshipdto",
            "relationshiptype": "attributes",
            "linktype": "onetoone",
            "primarywid": "actiondto",
            "primarymethod": "actiondto",
            "secondarywid": "systemdto",
            "secondarymethod": "systemdto"
        }]);
    }

    exports.createtestaction = createtestaction = function createtestaction(wid, actionname, beforewid, afterwid, errorobject) {
        execute([{
            "executethis": "addwidmaster",
            "wid": wid,
            "metadata.method": "actiondto",
            "actionname": actionname,
            "beforewid": beforewid,
            "afterwid": afterwid,
            "errorobject": errorobject
        }]);
    }

    // Create an actiondto tree
    exports.createaction1 = createaction1 = function createaction1() {

        createtestaction("useraction1", "userdto", "read_stuff", "log_stuff", "err_obj");
        addgrouptowid("useraction1", "actiondto", "bottom_action", function (err, res) {
            cb1(null);
        });

        createtestaction("useraction2", "userdto", "read_stuff", "log_stuff", "err_obj");
        addgrouptowid("useraction2", "actiondto", "middle_action", function (err, res) {
            cb1(null);
        });

        createtestaction("useraction3", "userdto", "read_stuff", "log_stuff", "err_obj");
        addgrouptowid("useraction3", "actiondto", "top_action", function (err, res) {
            cb1(null);
        });

        //alert('next');
        addgrouptowid("bottom_action", "groupdto", "middle_action", function (err, res) {
            cb1(null);
        });
        //alert('next');        
        addgrouptowid("middle_action", "groupdto", "top_action", function (err, res) {
            cb1(null);
        });
    }

    exports.createactiontypedto = createactiontypedto = function createactiontypedto() {
        execute([{
            "executethis": "addwidmaster",
            "wid": "actiontypedto",
            "metadata.method": "actiontypedto",
            "actiontype": "string",
            "metadata.systemdto.type": "onetoone"
        }, {
            // create relationships systemdto
            "executethis": "addwidmaster",
            "wid": "rel_actiontypedto_to_systemdto",
            "metadata.method": "relationshipdto",
            "relationshiptype": "attributes",
            "linktype": "onetoone",
            "primarywid": "actiontypedto",
            "primarymethod": "actiontypedto",
            "secondarywid": "systemdto",
            "secondarymethod": "systemdto"
        }]);
    }

    exports.createtestactiontype = createtestactiontype = function createtestactiontype(wid, actiontype) {
        execute([{
            "executethis": "addwidmaster",
            "wid": wid,
            "metadata.method": "actiondto",
            "actiontype": actiontype
        }]);
    }

    // Create an actiondto tree
    exports.createactiontype1 = createactiontype1 = function createactiontype1() {

        createtestactiontype("read_type", "read");
        addgrouptowid("read_type", "actiontypedto", "read_write", function (err, res) {
            cb1(null);
        });

        createtestactiontype("write_type", "write");
        addgrouptowid("write_type", "actiontypedto", "read_write", function (err, res) {
            cb1(null);
        });

        createtestactiontype("create_type", "create");
        addgrouptowid("create_type", "actiontypedto", "create_delete", function (err, res) {
            cb1(null);
        });

        createtestactiontype("delete_type", "delete");
        addgrouptowid("delete_type", "actiontypedto", "create_delete", function (err, res) {
            cb1(null);
        });

        addgrouptowid("read_write", "groupdto", "all_action_types", function (err, res) {
            cb1(null);
        });

        addgrouptowid("create_delete", "actiontypedto", "all_action_types", function (err, res) {
            cb1(null);
        });
    }

    exports.createdbdto = createdbdto = function createdbdto() {
        execute([{
            "executethis": "addwidmaster",
            "wid": "dbdto",
            "metadata.method": "dbdto",
            "data": "string",
            "metadata.systemdto.type": "onetoone"
        }, {
            // create relationships systemdto
            "executethis": "addwidmaster",
            "wid": "rel_dbdto_to_systemdto",
            "metadata.method": "relationshipdto",
            "relationshiptype": "attributes",
            "linktype": "onetoone",
            "primarywid": "dbdto",
            "primarymethod": "dbdto",
            "secondarywid": "systemdto",
            "secondarymethod": "systemdto"
        }]);
    }

    exports.createtestdata = createtestdata = function createtestdata(wid, data) {
        execute([{
            "executethis": "addwidmaster",
            "wid": wid,
            "metadata.method": "actiondto",
            "data": data
        }]);
    }

    exports.createdata1 = createdata1 = function createdata1() {

        createtestdata("data1", "stuff0");
        addgrouptowid("data1", "dbdto", "bottom_db", function (err, res) {
            cb1(null);
        });

        createtestactiontype("data1", "stuff1");
        addgrouptowid("data1", "dbdto", "middle_db", function (err, res) {
            cb1(null);
        });

        createtestactiontype("data1", "stuff2");
        addgrouptowid("data1", "dbdto", "top_db", function (err, res) {
            cb1(null);
        });

        addgrouptowid("bottom_db", "groupdto", "middle_db", function (err, res) {
            cb1(null);
        });

        addgrouptowid("middle_db", "groupdto", "top_db", function (err, res) {
            cb1(null);
        });
    }

    exports.test999 = test999 = function test999() {
        debuglevel = 38;

        execute([{
                "executethis": "addwidmaster",
                "wid": "authordto",
                "name": "string",
                "metadata.method": "authordto",
                "metadata.bookdto.type": "onetomany",
                "bookdto.wid": "bookdto",
                "bookdto.title": "string",
                "bookdto.metadata.method": "bookdto"
            }, {
                "executethis": "addwidmaster",
                "wid": "marysue",
                "metadata.method": "authordto",
                "name": "Mary Sue",
                "bookdto.title": "Haunted Mansions"
            }, {
                "executethis": "getwidmaster",
                "wid": "marysue"
            }],
            function (err, res) {
                proxyprinttodiv('getwidmaster of marysue ', res, 35);
            }
        );
    }
    // "executethis": "addwidmaster",
    // "wid": "songdto",
    // "metadata.method": "songdto",
    // "title": "string",
    // "metadata.sounddto.type": "onetomany",
    // "sounddto.wid": "sounddto",
    // "sounddto.metadata.method": "sounddto",
    // "sounddto.note": "string"
    exports.test998 = test998 = function test998(parm, callback) {

        // create users
        // creates wids
        // we put users and put wids into groups
        // we create actiongroups, targetroups, 
        // we put groups insdie of groups
        // we add permissions
        // we test
        // var status = false;
        debuglevel = 39;
        // saveglobal("debugname", "");
        // saveglobal("debugcat", "");
        // saveglobal("debugsubcat", "code");
        async.series([
            function (cb1) {
                createsystemdtos({}, function (err, res) {
                    cb1(null);
                });
            },
            function (cb1) {
                createtestuser("user1", "user1ac", 99, function (err, res) {
                    cb1(null);
                });
            },
            function (cb1) {
                createtestuser("user2", "user2ac", 99, function (err, res) {
                    cb1(null);
                });
            },
            function (cb1) {
                //userwid, granteegroup, actiongroup, dbgroup, levelgroup,
                addpermission("user1", "user2", "createcoupon0", "data", 50, function (err, res) {
                    cb1(null);
                });
            },
            function (cb1) {
                addgrouptowid("user2", "userdto", "group1", function (err, res) {
                    cb1(null);
                });
            },
            function (cb1) {
                //ac, actiongroup, targetaction, dbgroup
                testsecurity("user2ac", "user1", "createcoupon0", "data", true, function (err, res) {
                    cb1(null);
                });
            },
            function (cb1) {
                addgrouptowid("anything0", "userdto", "createcoupon0", function (err, res) {
                    cb1(null);
                });
            },
            function (cb1) {
                testsecurity("codyac0", "executethis", "createcoupon0", "data", true, function (err, res) {
                    status = res;
                    cb1(null);
                });
            }

        ], function (err, res) {
            execute({
                "executethis": "getwidmaster",
                "wid": "user1"
            }, function (err, res) {
                proxyprinttodiv('test998 --- getwidmaster on user1 >>>>>> ', res, 35);
                execute({
                    "executethis": "getwidmaster",
                    "wid": "user2"
                }, function (err, res) {
                    proxyprinttodiv('test998 --- getwidmaster on user2 >>>>>> ', res, 35);
                    callback(err, status);
                });
            });

        });
    }

    exports.test999 = test999 = function test999(parm, callback) {

        // create users
        // creates wids
        // we put users and put wids into groups
        // we create actiongroups, targetroups, 
        // we put groups insdie of groups
        // we add permissions
        // we test
        // var status = false;
        debuglevel = 35;
        // saveglobal("debugname", "");
        // saveglobal("debugcat", "");
        // saveglobal("debugsubcat", "code");
        async.series([
            function (cb1) {
                createsystemdtos({}, function (err, res) {
                    cb1(null);
                });
            },
            function (cb1) {
                createtestuser("user1", "user1ac", 99, function (err, res) {
                    cb1(null);
                });
            },
            function (cb1) {
                createtestuser("user2", "user2ac", 99, function (err, res) {
                    cb1(null);
                });
            },
            function (cb1) {

                addpermission("user1", "user2", "createcoupon0", "data", 50, function (err, res) {
                    cb1(null);
                });
            },
            function (cb1) {
                addgrouptowid("user2", "userdto", "group1", function (err, res) {
                    cb1(null);
                });
                // },
                // function (cb1) {
                //     testsecurity("codyac0", "executethis", "createcoupon0", "data", true, function (err, res) {
                //         cb1(null);
                //     });
                // },
                // function (cb1) {
                //     addgrouptowid("anything0", "userdto", "createcoupon0", function (err, res) {
                //         cb1(null);
                //     });
                // },
                // function (cb1) {
                //     testsecurity("codyac0", "executethis", "createcoupon0", "data", true, function (err, res) {
                //         status = res;
                //         cb1(null);
                //     });
            }

        ], function (err, res) {
            execute({
                "executethis": "getwidmaster",
                "wid": "user1"
            }, function (err, res) {
                proxyprinttodiv('test999 --- getwidmaster on user1 >>>>>> ', res, 35);
                execute({
                    "executethis": "getwidmaster",
                    "wid": "user2"
                }, function (err, res) {
                    proxyprinttodiv('test999 --- getwidmaster on user2 >>>>>> ', res, 35);
                    callback(err, status);
                });
            });

        });
    }

    exports.test1000 = test1000 = function test1000(parm, callback) {

        // create users
        // creates wids
        // we put users and put wids into groups
        // we create actiongroups, targetroups, 
        // we put groups insdie of groups
        // we add permissions
        // we test
        // var status = false;
        debuglevel = 35;
        // saveglobal("debugname", "");
        // saveglobal("debugcat", "");
        // saveglobal("debugsubcat", "code");
        async.series([
                function (cb1) {
                    // setup schema data
                    createsystemdtos({}, function (err, res) {
                        cb1(null);
                    });
                },
                function (cb1) {
                    // create testuser rogeruser0
                    createtestuser("rogeruser0", "rogerac0", 99, function (err, res) {
                        cb1(null);
                    });
                },
                function (cb1) {
                    // add permission for rogeruser0 
                    addpermission("codyuser1", "rogeruser0", "createcoupon0", "data", 99, function (err, res) {
                        cb1(null);
                    });
                },
                function (cb1) {
                    createtestuser("codyuser0", "codyac0", 99, function (err, res) {
                        cb1(null);
                    });
                },
                function (cb1) {
                    addpermission("rogeruser0", "codyuser0", "createcoupon0", "data", 50, function (err, res) {
                        cb1(null);
                    });
                },
                function (cb1) {
                    // call security check without mygroup (for cody)
                    // _accesstoken, _mygroup, _actiongroup, _actiontypegroup, _dbgroup, _loginlevel
                    testsecurity("codyac0", undefined, "createcoupon0", "execute", "data", 99, function (err, res) {

                        cb1(null);
                    });
                },

                function (cb1) {
                    addgrouptowid("codyuser0", "userdto", "driemployeegroup0", function (err, res) {
                        cb1(null);
                    });
                },
                function (cb1) {
                    addpermission("rogeruser0", "codyuser0", "createcoupon0", "data", 50, function (err, res) {
                        cb1(null);
                    });
                    // },
                    // function (cb1) {
                    //     testsecurity("codyac0", "executethis", "createcoupon0", "data", true, function (err, res) {
                    //         cb1(null);
                    //     });
                    // },
                    // function (cb1) {
                    //     addgrouptowid("anything0", "userdto", "createcoupon0", function (err, res) {
                    //         cb1(null);
                    //     });
                    // },
                    // function (cb1) {
                    //     testsecurity("codyac0", "executethis", "createcoupon0", "data", true, function (err, res) {
                    //         status = res;
                    //         cb1(null);
                    //     });
                }

            ],

            function (err, res) {
                callback(err, status);

            });
    }


    // roger gives cody permission to create a coupon, minimum security level = 50. cody has a security level of 99 so this should work.
    exports.test1001 = test1001 = function test1001(params, callback) {
        debuglevel = 39;
        saveglobal("debugname", "");
        saveglobal("debugcat", "");
        saveglobal("debugsubcat", "code");
        var status = false;
        async.series([
                function (cb1) {
                    createtestuser("codyuser1", "codyac1", 99, function (err, res) {
                        cb1(null);
                    });
                },
                function (cb1) {
                    createtestuser("rogeruser1", "rogerac1", 99, function (err, res) {
                        cb1(null);
                    });
                },
                function (cb1) {
                    addpermission("rogeruser1", "codyuser1", "executethis", "createcoupon1", "data", 50, function (err, res) {
                        cb1(null);
                    });
                },
                function (cb1) {
                    testsecurity("codyac1", "executethis", "createcoupon1", "data", true, function (err, res) {
                        status = res;
                        cb1(null);
                    });
                }
            ],
            function (err, res) {
                console.log('created testdata for test1001 --  ' + JSON.stringify(res));
                callback(err, status);
            });
    }

    // roger gives cody permission to create a coupon, minimum security level = 50. cody has a security level of 0 so this should fail.
    exports.test1002 = test1002 = function test1002(params, callback) {
        debuglevel = 39;
        saveglobal("debugname", "");
        saveglobal("debugcat", "");
        saveglobal("debugsubcat", "code");
        var status = false;
        async.series([
                function (cb1) {
                    createtestuser("codyuser2", "codyac2", 0, function (err, res) {
                        cb1(null);
                    });
                },
                function (cb1) {
                    createtestuser("rogeruser2", "rogerac2", 99, function (err, res) {
                        cb1(null);
                    });
                },
                function (cb1) {
                    addpermission("rogeruser2", "codyuser2", "executethis", "createcoupon2", "data", 50, function (err, res) {
                        cb1(null);
                    });
                },
                function (cb1) {
                    testsecurity("codyac2", "executethis2", "createcoupon2", "data", false, function (err, res) {
                        proxyprinttodiv('after testsecurity -- ', res, 35);
                        status = res;
                        cb1(null);
                    });
                }
            ],
            function (err, res) {
                proxyprinttodiv('created testdata for test1002 -- ', JSON.stringify(res), 35);
                console.log('created testdata for test1002 --  ' + JSON.stringify(res));
                callback(err, status);
            });
    }

    // cody is made a member of the dri employees group. roger gives dri employees permission to create data wids.
    // cody should be able to create a datawid.
    exports.test1003 = test1003 = function test1003(params, callback) {
        debuglevel = 39;
        saveglobal("debugname", "");
        saveglobal("debugcat", "");
        saveglobal("debugsubcat", "code");
        var status = false;
        async.series([
                function (cb1) {
                    createtestuser("codyuser3", "codyac3", 99, function (err, res) {
                        cb1(err);
                    });
                },
                function (cb1) {
                    createtestuser("rogeruser3", "rogerac3", 99, function (err, res) {
                        cb1(err);
                    });
                },
                function (cb1) {
                    addgrouptowid("codyuser3", "userdto", "driemployeesgroup3", function (err, res) {
                        cb1(null);
                    });
                },
                function (cb1) {
                    addpermission("rogeruser3", "driemployeesgroup3", "executethis", "createdatawid3", "data", 50, function (err, res) {
                        cb1(null);
                    });
                },
                function (cb1) {
                    testsecurity("codyac3", "executethis", "createdatawid3", "data", true, function (err, res) {
                        status = res;
                        cb1(null);
                    });
                }
            ],
            function (err, res) {
                console.log('created testdata for test1003 --  ' + JSON.stringify(res));
                callback(err, status);
            });

    }

    // drimanagers is made a member of driemployees group. Cody gives dri managers permission to edit coupons. Bill should be able to edit Cody's coupons.
    exports.test1004 = test1004 = function test1004(params, callback) {
        debuglevel = 39;
        saveglobal("debugname", "");
        saveglobal("debugcat", "");
        saveglobal("debugsubcat", "code");
        var status = false;
        async.series([
                function (cb1) {
                    createtestuser("codyuser4", "codyac4", 99, function (err, res) {
                        cb1(null);
                    });
                },
                function (cb1) {
                    createtestuser("rogeruser4", "rogerac4", 99, function (err, res) {
                        cb1(null);
                    });
                },
                function (cb1) {
                    createtestuser("billuser4", "billac4", 99, function (err, res) {
                        cb1(null);
                    });
                },
                function (cb1) {
                    addgrouptowid("codyuser4", "driemployeesgroup4", function (err, res) {
                        cb1(null);
                    });
                },
                function (cb1) {
                    addgrouptowid("billuser4", "userdto", "drimanagersgroup4", function (err, res) {
                        cb1(null);
                    });
                },
                function (cb1) {
                    addgrouptowid("rogeruser4", "userdto", "drimanagersgroup4", function (err, res) {
                        cb1(null);
                    });
                },
                function (cb1) {
                    addgrouptowid("drimanagersgroup4", "groupnamedto", "driemployeesgroup4", function (err, res) {
                        cb1(null);
                    });
                },
                function (cb1) {
                    addpermission("codyuser4", "drimanagersgroup4", "executethis", "editcoupon4", "data", 50, function (err, res) {
                        cb1(null);
                    });
                },
                function (cb1) {
                    testsecurity("billac4", "executethis", "createdatawid4", "data", true, function (err, res) {
                        status = res;
                        cb1(null);
                    });
                }
            ],
            function (err, res) {
                console.log('created testdata for test1004 --  ' + JSON.stringify(res));
                callback(err, status);
            });

    }

    // cody is made a member of the dri employees group. roger gives dri employees permission to create data wids. cody should not be able to create a datawid as his security level is too low.
    exports.test1005 = test1005 = function test1005(params, callback) {
        debuglevel = 39;
        saveglobal("debugname", "");
        saveglobal("debugcat", "");
        saveglobal("debugsubcat", "code");
        var status = false;
        async.series([
                function (cb1) {
                    createtestuser("codyuser5", "codyac5", 0, function (err, res) {
                        cb1(null);
                    });
                },
                function (cb1) {
                    createtestuser("rogeruser5", "rogerac5", 99, function (err, res) {
                        cb1(null);
                    });
                },
                function (cb1) {
                    addgrouptowid("codyuser5", "userdto", "driemployeesgroup5", function (err, res) {
                        cb1(null);
                    });
                },
                function (cb1) {
                    addpermission("rogeruser5", "driemployeesgroup5", "executethis", "createdatawid5", "data", 50, function (err, res) {
                        cb1(null);
                    });
                },
                function (cb1) {
                    testsecurity("codyac5", "executethis", "createdatawid5", "data", false, function (err, res) {
                        status = res;
                        cb1(null);
                    });
                }
            ],
            function (err, res) {
                console.log('created testdata for test1005 --  ' + JSON.stringify(res));
                callback(err, status);
            });
    }

    // drimanagers is made a member of driemployees group. 
    // Cody gives dri managers permission to edit coupons. Bill should be able to edit Cody's coupons.
    exports.test1006 = test1006 = function test1006(params, callback) {
        debuglevel = 39;
        saveglobal("debugname", "");
        saveglobal("debugcat", "");
        saveglobal("debugsubcat", "code");
        var status = false;
        async.series([
                function (cb1) {
                    createtestuser("codyuser6", "codyac6", 99, function (err, res) {
                        cb1(null);
                    });
                },
                function (cb1) {
                    createtestuser("rogeruser6", "rogerac6", 99, function (err, res) {
                        cb1(null);
                    });
                },
                function (cb1) {
                    createtestuser("billuser6", "billac6", 99, function (err, res) {
                        cb1(null);
                    });
                },
                function (cb1) {
                    addgrouptowid("codyuser6", "userdto", "driemployeesgroup6", function (err, res) {
                        cb1(null);
                    });
                },
                function (cb1) {
                    addgrouptowid("billuser6", "userdto", "drimanagersgroup6", function (err, res) {
                        cb1(null);
                    });
                },
                function (cb1) {
                    addgrouptowid("rogeruser6", "userdto", "drimanagersgroup6", function (err, res) {
                        cb1(null);
                    });
                },
                function (cb1) {
                    addpermission("codyuser6", "drimanagersgroup6", "executethis", "editcoupon6", "data", 50, function (err, res) {
                        cb1(null);
                    });
                },
                function (cb1) {
                    testsecurity("billac6", "executethis", "editcoupon6", "data", true, function (err, res) {
                        status = res;
                        cb1(null);
                    });
                }
            ],
            function (err, res) {
                console.log('created testdata for test1006 --  ' + JSON.stringify(res));
                callback(err, status);
            });
    }


    // driemployees is made a member of usersofdri. roger gives driusers read permission on coupons. cody is made a member of driemployees. cody should be able to read coupons. 
    exports.test1007 = test1007 = function test1007(params, callback) {
        debuglevel = 39;
        saveglobal("debugname", "");
        saveglobal("debugcat", "");
        saveglobal("debugsubcat", "code");
        var status = false;

        async.series([
                function (cb1) {
                    createtestuser("codyuser7", "codyac7", 99, function (err, res) {
                        cb1(null);
                    });
                },

                function (cb1) {
                    createtestuser("rogeruser7", "rogerac7", 99, function (err, res) {
                        cb1(null);
                    });
                },
                function (cb1) {
                    addgrouptowid("codyuser7", "userdto", "driemployees7", function (err, res) {
                        cb1(null);
                    });
                },

                function (cb1) {
                    addgrouptowid("driemployees7", "groupnamedto", "driusers7", function (err, res) {
                        cb1(null);
                    });
                },

                function (cb1) {
                    addpermission("rogeruser7", "driusers7", "executethis", "readcoupon7", "data", 50, function (err, res) {
                        cb1(null);
                    });
                },

                function (cb1) {
                    testsecurity("codyac7", "executethis", "readcoupon7", "data", true, function (err, res) {
                        status = res;
                        cb1(null);
                    });
                }
            ],

            function (err, res) {
                console.log('created testdata for test1007 --  ' + JSON.stringify(res));
                callback(err, status);
            });

    }

    exports.testjsononetoone0 = testjsononetoone0 = function testjsononetoone0(params, callback) {
        execute([{
                "executethis": "addwidmaster",
                "wid": "authordto",
                "metadata.method": "authordto",
                "name": "string",
                "age": "string",
                "metadata.spousedto.type": "onetoone"
            }, {
                "executethis": "addwidmaster",
                "wid": "spousedto",
                "metadata.method": "spousedto",
                "name": "string",
                "age": "string"
            }, {
                "executethis": "addwidmaster",
                "wid": "rel_author_spouse",
                "metadata.method": "relationshipdto",
                "relationshiptype": "attributes",
                "linktype": "onetoone",
                "primarywid": "authordto",
                "primarymethod": "authordto",
                "secondarywid": "spousedto",
                "secondarymethod": "spousedto"
            }, {
                "executethis": "addwidmaster",
                "wid": "spouse1",
                "metadata.method": "spousedto",
                "name": "Sarah Jones",
                "age": "28"
            }, {
                "executethis": "addwidmaster",
                "wid": "author1",
                "metadata.method": "authordto",
                "name": "Jim Jones",
                "age": "30",
                "metadata.spousedto.0": "spouse1"
            }],
            function (err, res) {
                proxyprinttodiv('Full results: ', res, 99);

                proxyprinttodiv('The author1 record: ', res[3], 99);

                debuglevel = 0;
                execute({
                    "executethis": "getwidmaster",
                    "wid": "author1"
                }, function (err, res1) {
                    proxyprinttodiv("getwidmaster author1 result: ", res1, 99);
                    callback(err, res);
                });
            });
    }
    //
    exports.test1008 = test1008 = function test1008(params, callback) {
        debuglevel = 39;
        saveglobal("debugname", "");
        saveglobal("debugcat", "");
        saveglobal("debugsubcat", "code");
        var status = false;
        async.series([
                function (cb1) {
                    createtestuser("codyuser8", "codyac8", 99, function (err, res) {
                        cb1(null);
                    });
                },

                function (cb1) {

                    createtestuser("rogeruser8", "rogerac8", 99, function (err, res) {
                        cb1(null);
                    });
                },
                function (cb1) {
                    addgrouptowid("codyuser8", "userdto", "driemployees8", function (err, res) {
                        cb1(null);
                    });
                },

                function (cb1) {
                    addgrouptowid("driemployees8", "groupnamedto", "driusers8", function (err, res) {
                        cb1(null);
                    });
                },

                function (cb1) {
                    addpermission("rogeruser8", "driusers8", "executethis", "readcoupon8", "data", 50, function (err, res) {
                        cb1(null);
                    });
                },

                function (cb1) {
                    testsecurity("codyac8", "executethis", "readcoupon8", "data", true, function (err, res) {
                        var status = res;
                        cb1(null);
                    });
                }
            ],

            function (err, res) {
                console.log('created testdata for test1008 --  ' + JSON.stringify(res));
                callback(err, status);
            });


    }




    // Simple create user, add user to group with permission to create a coupon, and then try to execute createcoupon. This should succeed.
    exports.ctest1 = ctest1 = function ctest1(parm, callback) {
        var executeList = [
            function (cb1) {
                createtestuser("rogerboss", "bossac", "99", function (err, res) {
                    cb1(null);
                });
            },

            function (cb1) {
                createtestuser("codyuser", "codyac", "99", function (err, res) {
                    cb1(null);
                });
            },

            function (cb1) { // add codyuser to the driemployeesgroup
                addgrouptowid("codyuser", "userdto", "driemployeegrp", function (err, res) {
                    cb1(null);
                });
            },

            function (cb1) { // rogerboss allows anyone in driemployees to executethis to cretecoupon
                addpermission("rogerboss", "driemployeegrp", "createdricoupon", "test", "50", function (err, res) {
                    cb1(null);
                });
            },

            function (cb1) {
                testsecurity("codyac", "executethis", "createdricoupon", "test", true, function (err, res) {
                    cb1(null);
                });
            }
        ];


        async.series(executeList, function (err, res3) {
            proxyprinttodiv('Function ctest1 --  >>>>>> FINAL >>>>>    -- ', res3, 35);
            callback(err, res3);
        });
    }

    // rogerboss gives the driusergrp permission to execute createcoupon. cody is added to the driusergrp. driusergrp is added to the driemployeegrp. This should succeed.
    exports.ctest2 = ctest2 = function ctest2(parm, callback) {


        var executeList = [
            function (cb1) {
                createtestuser("rogerboss", "bossac", "99", cb1);
            },

            function (cb1) {
                createtestuser("codyuser", "codyac", "99", cb1)
            },
            function (cb1) {
                creategroup(driusergrp, cb1);
            },

            function (cb1) { // add codyuser to the driusergrp
                addgrouptowid("codyuser", "groupnamedto", "driusergrp", cb1);
            },

            function (cb1) { // add driusers to the driemployeesgrp
                addgrouptowid("driusergrp", "groupnamedto", "driemployeegrp", cb1);
            },

            function (cb1) { // rogerboss allows anyone in driusergrp to executethis to cretecoupon
                addpermission("rogerboss", "driusergrp", "createdricoupon", "test", "50", cb1);
            },

            function (cb1) {
                testsecurity("codyac", "executethis", "createdricoupon", "test", true, cb1);
            }

        ];


        async.series(executeList, function (err, res3) {
            proxyprinttodiv('Function ctest2 --  >>>>>> FINAL >>>>>    -- ', res3, 35);
            cb2(err, res3);
        });
    }

    // rogerboss gives the driemployeegrp permission to execute createcoupon. cody is added to the driusergrp. driusergrp is added to the driemployeegrp. This should succeed.
    exports.ctest3 = ctest3 = function ctest3(parm, callback) {

        var executeList = [
            function (cb1) {
                createtestuser("rogerboss", "bossac", "99", cb1);
            },

            function (cb1) {
                createtestuser("codyuser", "codyac", "99", cb1)
            },
            function (cb1) {
                creategroup(driusergrp, cb1)
            },

            function (cb1) { // add codyuser to the driusergrp
                addgrouptowid("codyuser", "groupnamedto", "driusergrp", cb1);
            },

            function (cb1) { // add driusers to the driemployeesgrp
                addgrouptowid("driusergrp", "groupnamedto", "driemployeegrp", cb1);
            },

            function (cb1) { // rogerboss allows anyone in driemployees to executethis to cretecoupon
                addpermission("rogerboss", "driemployeegrp", "createdricoupon", "test", "50", cb1);
            },

            function (cb1) {
                testsecurity("codyac", "executethis", "createdricoupon", "test", true, cb1);
            }

        ];

        async.series(executeList, function (err, res3) {
            proxyprinttodiv('Function ctest3 --  >>>>>> FINAL >>>>>    -- ', res3, 35);
            callback(err, res3);
        });
    }

    //EspressoBay gives ebemployeesgrp permission to executethis to createcoupon. Cody is not part of the ebemployeesgrp so he should not be able to execute createcoupon.
    exports.ctest4 = ctest4 = function ctest4(parm, callback) {
        var executeList = [
            function (cb1) {
                createtestuser("espressobay", "espressoac", "99", cb1);
            },

            function (cb1) {
                createtestuser("codyuser", "codyac", "99", cb1)
            },
            function (cb1) {
                creategroup(ebemployeesgrp, cb1);
            },

            function (cb1) { // espressobay allows anyone in ebemployeesgroup to executethis to cretecoupon
                addpermission("espressobay", "ebemployeesgrp", "create_espressobay_coupon", "test", "50", cb1);
            },

            function (cb1) {
                testsecurity("codyac", "executethis", "create_espressobay_coupon", "test", false, cb1);
            }

        ];
        async.series(executeList, function (err, res3) {
            proxyprinttodiv('Function ctest4 --  >>>>>> FINAL >>>>>    -- ', res3, 35);
            callback(err, res3);
        });
    }

    // Cody is added to driusers1 and Bill is added to driusers2. driusers1 & driusers2 are added to driemployeesgrp. roger gives driemployeesgrp permission to execute createcoupon.
    exports.ctest5 = ctest5 = function ctest5(parm, callback) {


        var executeList = [
            function (cb1) {
                createtestuser("rogerboss", "bossac", "99", cb1);
            },

            function (cb1) {
                createtestuser("codyuser", "codyac", "99", cb1)
            },

            function (cb1) {
                createtestuser("billuser", "billac", "99", cb1)
            },

            function (cb1) {
                creategroup(driemployeegrp, cb1);
            },

            function (cb1) { // add codyuser to the driusergrp
                addgrouptowid("codyuser", "groupnamedto", "driusergrp1", cb1);
            },

            function (cb1) { // add billuser to the driusergrp
                addgrouptowid("billuser", "groupnamedto", "driusergrp2", cb1);
            },

            function (cb1) { // add driusers1 to the driemployeesgrp
                addgrouptowid("driusergrp1", "groupnamedto", "driemployeegrp", cb1);
            },

            function (cb1) { // add driusers2 to the driemployeesgrp
                addgrouptowid("driusergrp2", "groupnamedto", "driemployeegrp", cb1);
            },

            function (cb1) { // rogerboss allows anyone in driemployeegrp to executethis to cretecoupon
                addpermission("rogerboss", "driemployeegrp", "createdricoupon", "test", "50", cb1);
            },

            function (cb1) {
                testsecurity("codyac", "executethis", "createdricoupon", "test", true, cb1);
            },

            function (cb1) {
                testsecurity("billac", "executethis", "createdricoupon", "test", true, cb1);
            }

        ];

        async.series(executeList, function (err, res3) {
            proxyprinttodiv('Function ctest5 --  >>>>>> FINAL >>>>>    -- ', res3, 35);
            callback(err, res3);
        });
    }

    // Cody is added to driusergrp1. Roger gives driusergrp1 permission to execute createcoupon. Cody's loginlevel is only 49, which is less than 50. Cody can't proceed.
    exports.ctest6 = ctest6 = function ctest6(parm, callback) {
        debuglevel = 39;

        var executeList = [
            function (cb1) {
                createtestuser("rogerboss", "rogerac", "99", function (err, res) {
                    cb1(null);
                });
            },

            function (cb1) {
                createtestuser("codyuser", "codyac", "49", function (err, res) {
                    cb1(null);
                });
            },

            function (cb1) { // add codyuser to the driusergrp
                addgrouptowid("codyuser", "userdto", "driusergrp1", function (err, res) {
                    cb1(null);
                });
            },
            function (cb1) {
                creategroup("driusergrp1", function (err, res) {
                    cb1(null);
                });
            },
            function (cb1) { // rogerboss allows anyone in driemployees to executethis to cretecoupon
                addpermission("rogerboss", "driusergrp1", "createcoupon", "data", "99", function (err, res) {
                    cb1(null);
                });
            },

            function (cb1) {
                securitycheck("codyac", "executethis", "createcoupon", "test", false, function (err, res) {
                    cb1(null);
                });
            }
        ];

        async.series(executeList, function (err, res3) {
            proxyprinttodiv('Function ctest6 --  >>>>>> FINAL >>>>>    -- ', res3, 35);
            callback(err, res3);
        });

    }

    exports.ctest7 = ctest7 = function ctest7(parm, callback) {
        var executeList = [
            function (cb1) {
                createsystemdtos({}, cb1);
            },
            function (cb1) {
                createtestuser("rogerboss", "bossac", "99", cb1);
            },
            function (cb1) {
                execute({
                    "executethis": "getwidmaster",
                    "wid": "rogerboss"
                }, cb1);
            }
        ];
        async.series(executeList, function (err, res3) {
            proxyprinttodiv('Function ctest7 --  >>>>>> FINAL >>>>>    -- ', res3, 99);
            callback(err, res3);
        });
    }



    // creates test data for different tests to be run :: generates data and adds a new user 
    exports.createtestuser = createtestuser = function createtestuser(userwid, ac, loginlevel, cb2) {

        execute([{
                // add user 
                "executethis": "addwidmaster",
                "metadata.method": "userdto",
                // "metadata.owner": "system",
                "wid": userwid,
                "fname": "john",
                "lname": "doe",
                "email": "jj@gmail.com",
                "email2": "",
                "address": "123 pleasant lane",
                "address2": "apt 101",
                "city": "Pleasantville",
                "state": "Florida",
                "zip": "26539",
                // security data
                "systemdto.securitydto.logged_id": "true",
                "systemdto.securitydto.accesstoken": ac,
                "systemdto.securitydto.level": loginlevel,
                // category data
                "systemdto.categorydto.categorytype": "categorytype",
                "systemdto.categorydto.categoryname": "categoryname",

            }],
            function (err, res) {
                proxyprinttodiv('Function createtestuser done --  >>>>>> added user >>>>>  for  -- ' + userwid, res, 35);
                // addsecurity(userwid, true, ac, loginlevel, function (err, res1) {
                //     proxyprinttodiv('Function addsecurity done --  >>>>>> added security >>>>>  for  -- ' + userwid, res1, 35);
                //     addcategory(userwid, true, "categoryname", function (err, res2) {
                //         proxyprinttodiv('Function addcategory --  >>>>>> added category >>>>> for   -- ' + userwid, res2, 35);

                execute({
                    "executethis": "getwidmaster",
                    "wid": userwid
                }, function (err, res3) {
                    proxyprinttodiv('Function createtestuser --  >>>>>> FINAL USER >>>>>    -- ' + userwid, res3, 35);
                    cb2(err, res3);
                })
                //     });
                // });
            });
    }

    // takes in needed details and does a security check on the basis of data received against the DB data received
    // user is identified by the access token
    // db says which DB to be used
    // actiongroup says the type of wid the action is being tried upon
    // targetaction is the action being executed on the wid
    exports.testsecurity = testsecurity = function testsecurity(_accesstoken, _mygroup, _actiongroup, _actiontypegroup, _dbgroup, _loginlevel, callback) {
        securitycheck(_accesstoken, _mygroup, _actiongroup, _actiontypegroup, _dbgroup, _loginlevel, function (err, res) {
            proxyprinttodiv('Function testsecurity done --  >>>>>>  >>>>>  for  securitycheck response -- ', res, 35);
            callback(err, res)
        });
    }

    exports.zx1 = zx1 = function zx1(parm, callback) {

        // create users
        // creates wids
        // we put users and put wids into groups
        // we create actiongroups, targetroups, 
        // we put groups insdie of groups
        // we add permissions
        // we test
        // var status = false;
        debuglevel = 39;
        // saveglobal("debugname", "");
        // saveglobal("debugcat", "");
        // saveglobal("debugsubcat", "code");
        async.series([
                function (cb1) {
                    createtestuser("rogeruser0", "rogerac0", 99, function (err, res) {
                        cb1(null);
                    });
                },
                function (cb1) {
                    //alert('Entering execution phase...');
                    execute({
                        "executethis": "addwidmaster",
                        "wid": "rogeruser0",
                        "metadata.method": "userdto",
                        "systemdto.permissiondto.granteegroup": "coduser1",
                        "systemdto.permissiondto.actiongroup": "createcoupon0",
                        "systemdto.permissiondto.dbgroup": "data",
                        "systemdto.permissiondto.levelgroup": "99"
                    }, function (err, res) {
                        proxyprinttodiv('added permissions to rogeruser0 >>>>>> ', res, 99);
                        cb1(null);
                    });
                },
                function (cb1) {
                    execute({
                        "executethis": "getwidmaster",
                        "wid": "systemdto",
                        "metadata.method": "systemdto"
                    }, function (err, res) {
                        proxyprinttodiv('getwidmaster on systemdto ', res, 99);
                        cb1(null);
                    });
                },

                function (cb1) {
                    createtestuser("codyuser0", "codyac0", 99, function (err, res) {
                        cb1(null);
                    });
                },
                function (cb1) {
                    addpermission("rogeruser0", "codyuser0", "createcoupon0", "data", 50, function (err, res) {
                        cb1(null);
                    });
                }
                // function (cb1) {
                //     testsecurity("codyac0", "executethis", "createcoupon0", "data", true, function (err, res) {
                //         cb1(null);
                //     });
                // },
                // function (cb1) {
                //     addgrouptowid("codyuser0", "userdto", "driemployeegroup0", function (err, res) {
                //         cb1(null);

                //     });
                // },
                // function (cb1) {
                //     addpermission("rogeruser0", "codyuser0", "createcoupon0", "data", 50, function (err, res) {
                //         cb1(null);
                //     });
                // },
                // function (cb1) {
                //     testsecurity("codyac0", "executethis", "createcoupon0", "data", true, function (err, res) {
                //         cb1(null);
                //     });
                // },
                // function (cb1) {
                //     addgrouptowid("anything0", "userdto", "createcoupon0", function (err, res) {
                //         cb1(null);
                //     });
                // },
                // function (cb1) {
                //     testsecurity("codyac0", "executethis", "createcoupon0", "data", true, function (err, res) {
                //         status = res;
                //         cb1(null);
                //     });
                // }

            ],
            function (err, res) {
                console.log('created testdata for zx1 --  ' + JSON.stringify(res));
                callback(err, status);

            });
    }


    exports.freshgroups1 = freshgroups1 = function freshgroups1(parm, callback) {
        debuglevel = 39;

        getactionlist("", "getwidmaster", "", "", "", function (err, res) {
            proxyprinttodiv('Function freshgroups -- res', res, 39);
            callback(err, res);
        });
    };

    exports.freshgroups2 = freshgroups2 = function freshgroups2(parm, callback) {
        debuglevel = 39;

        getaccountlist("cody", "", "", "", "", function (err, res) {
            proxyprinttodiv('Function freshgroups2 -- res', res, 39);
            callback(err, res);
        });
    };

    exports.freshgroups3 = freshgroups3 = function freshgroups3(parm, callback) {
        debuglevel = 39;

        getdblist("", "", "", "data", "", function (err, res) {
            proxyprinttodiv('Function freshgroups3 -- res', res, 39);
            callback(err, res);
        });
    };

    exports.freshgroups4 = freshgroups4 = function freshgroups4(parm, callback) {
        debuglevel = 39;
        var arr = [];
        async.series([
                function (cb1) {
                    // creste schema data
                    getgroupsrecursive("cody", "group", [], function (err, res) {
                        proxyprinttodiv('Function freshgroups4 -- res', res, 39);
                        arr = res;
                        cb1(null);
                    });
                }
            ],

            function (err, res) {
                console.log('Function fresh 3 -- add data and test --  ' + JSON.stringify(arr));
                callback(err, arr);
            });
    };


    exports.freshgroups5 = freshgroups5 = function freshgroups5(parm, callback) {
        debuglevel = 39;
        var arr = [];
        async.series([
                function (cb1) {
                    // creste schema data
                    getgroupsrecursive("cody", "granteegroup", [], function (err, res) {
                        proxyprinttodiv('Function freshgroups4 -- res', res, 39);
                        arr = res;
                        cb1(null);
                    });
                }
            ],

            function (err, res) {
                console.log('Function fresh 3 -- add data and test --  ' + JSON.stringify(arr));
                callback(err, arr);
            });
    };


    function creategroupdata(cb) {
        async.series([
            function (cb1) {
                // create groups driemployee
                creategroup("driemployee", function (err, res) {
                    proxyprinttodiv('Function st2 fresh1 creategroup -- driemployee', res, 39);
                    cb1(null);
                });
            },
            function (cb1) {
                // create groups drimanager
                creategroup("drimanager", function (err, res) {
                    proxyprinttodiv('Function st2 fresh1 creategroup -- group -- drimanager', res, 39);
                    cb1(null);
                });
            },
            function (cb1) {
                // create groups  "execute"
                creategroup("execute", function (err, res) {
                    proxyprinttodiv('Function st2 fresh1 creategroup -- actiontype -- execute', res, 39);
                    cb1(null);
                });
            },
            function (cb1) {
                // create groups  "clean"
                creategroup("clean", function (err, res) {
                    proxyprinttodiv('Function st2 fresh1 creategroup -- actiontype -- clean', res, 39);
                    cb1(null);
                });
            },
            function (cb1) {
                // create groups action --  default_dto_read
                creategroup("addwidmaster", function (err, res) {
                    proxyprinttodiv('Function st2 fresh1 creategroup -- addwidmaster', res, 39);
                    cb1(null);
                });
            },
            function (cb1) {
                // create groups action --  getwidmaster
                creategroup("getwidmaster", function (err, res) {
                    proxyprinttodiv('Function st2 fresh1 creategroup -- getwidmaster', res, 39);
                    cb1(null);
                });
            },
            function (cb1) {
                // create groups db --  data
                creategroup("data", function (err, res) {
                    proxyprinttodiv('Function st2 fresh1 creategroup -- data', res, 39);
                    cb1(null);
                });
            },
            function (cb1) {
                // add group to wid -- addwidmaster to addwidmaster wid
                // wid, widmethod, groupname,grouptype, 
                addgrouptowid("addwidmaster", "groupdto", "addwidmaster", "action", function (err, res) {
                    proxyprinttodiv('Function st2 fresh1 addgrouptowid added  group to wid -- addwidmaster to addwidmaster', res, 39);
                    cb1(null);
                });
            },
            function (cb1) {
                // add group to wid -- getwidmaster to getwidmaster wid
                addgrouptowid("getwidmaster", "groupdto", "getwidmaster", "action", function (err, res) {
                    proxyprinttodiv('Function st2 fresh1 addgrouptowid added  group to wid -- getwidmaster to getwidmaster', res, 39);
                    cb1(null);
                });
            },

            function (cb1) {
                // add group to wid -- drimanager to roger wid
                addgrouptowid("roger", "userdto", "drimanager", "group", function (err, res) {
                    proxyprinttodiv('Function st2 fresh1 addgrouptowid added  group to wid -- drimanager to roger', res, 39);
                    cb1(null);
                });
            },

            function (cb1) {
                // add group to wid -- driemployee to roger wid
                addgrouptowid("roger", "userdto", "driemployee", "group", function (err, res) {
                    proxyprinttodiv('Function st2 fresh1 addgrouptowid added  group to wid --  driemployee  to roger', res, 39);
                    cb1(null);
                });
            },

            function (cb1) {
                // add group to wid -- driemployee to cody wid
                addgrouptowid("cody", "userdto", "driemployee", "group", function (err, res) {
                    proxyprinttodiv('Function st2 fresh1 addgrouptowid added  group to wid --  driemployee  to  cody', res, 39);
                    cb1(null);
                });
            }
        ], function (err, res) {
            cb(err, res);
        })
    }

    function createpermissiondata(cb) {
        async.series([
            function (cb1) {
                // addpermission -- add permission --- 
                // "execute" actiontype  ,for group "driemployee", for action "getwidmaster", for "data"
                addpermission("cody", "driemployee", "getwidmaster", "execute", "data", 99, function (err, res) {
                    proxyprinttodiv('Function st2 fresh1 addpermission --  "execute" actiontype  ,for group "driemployee", for action "getwidmaster", for "db" ', res, 39);
                    cb1(null);
                });
            },
            function (cb1) {
                // addpermission -- add permission --- 
                // "execute" actiontype  ,for group "drimanager", for action "addwidmaster", for "data"
                //userwid, granteegroup, actiongroup, actiontypegroup, dbgroup, levelgroup, 
                addpermission("cody", "drimanager", "addwidmaster", "execute", "data", 99, function (err, res) {
                    proxyprinttodiv('Function st2 fresh1 addpermission --  "execute" actiontype  ,for group "drimanager", for action "addwidmaster", for "db"', res, 39);
                    cb1(null);
                });
            },
            function (cb1) {
                // addpermission -- add permission --- 
                // "execute" actiontype  ,for group "drimanager", for action "addwidmaster", for "data"
                addpermission("roger", "drimanager", "addwidmaster", "execute", "data", 99, function (err, res) {
                    proxyprinttodiv('Function st2 fresh1 addpermission --  "execute" actiontype  ,for group "drimanager", for action "addwidmaster", for "data" ', res, 39);
                    cb1(null);
                });
            },
            function (cb1) {
                // addpermission -- add permission --- 
                // "execute" actiontype  ,for group "driemployee", for action "getwidmaster", for "data"
                addpermission("cody", "cody", "getwidmaster", "execute", "data", 99, function (err, res) {
                    proxyprinttodiv('Function st2 fresh1 addpermission --  "execute" actiontype  ,for group "driemployee", for action "getwidmaster", for "db" ', res, 39);
                    cb1(null);
                });
            }
        ], function (err, res) {
            cb(err, res);
        });
    }







    exports.gr1 = gr1 = function gr1(parm, callback) {
        var actionCreatorPermissions = [];
        getmygroups("rogeruser", "permissiondto", "", actionCreatorPermissions, function (err, res) {
            proxyprinttodiv('Function gr1 permissions list -- ', actionCreatorPermissions, 39);
            cb1(null, "getwidmaster to get owner's permissions");
        });
    }

    exports.testformat = testformat = function testformat(parm, callback) {
        var json1 = {
            "fname": "Roger",
            "lname": "Colburn",
            "phone": "987-383-8958",
            "email": "roger@d.com",
            "address": "112",
            "address2": "Donald Lynch Blvd",
            "city": "Marlborough",
            "state": "Massachusetts",
            "zip": "17502",
            "country": "US",
            "wid": "rogeruser",
            "metadata.method": "userdto",
            "metadata.securitydto.type": "onetoone",
            "metadata.environmentdto.type": "onetoone",
            "metadata.permissiondto.type": "onetomany",
            "metadata.usergroupdto.type": "onetomany",
            "securitydto.accesstoken": "rogerac",
            "securitydto.wid": "1",
            "securitydto.metadata.method": "securitydto",
            "environmentdto.ac": "ac",
            "environmentdto.gps": "gpsval",
            "environmentdto.account": "default",
            "environmentdto.db": "data",
            "environmentdto.collection": "maincollection",
            "environmentdto.wid": "3",
            "environmentdto.metadata.method": "environmentdto",
            "permissiondto.0.level": "99",
            "permissiondto.0.wid": "5",
            "permissiondto.0.metadata.collection": "collection1",
            "permissiondto.0.metadata.system.creator": "rogeruser",
            "permissiondto.0.metadata.db": "data1",
            "permissiondto.0.metadata.method": "permissiondto",
            "permissiondto.0.metadata.actiongroupdto.type": "manytomany",
            "permissiondto.0.metadata.usergroupdto.type": "manytomany",
            "permissiondto.0.actiongroupdto.0.actiongroupname": "getwidmaster",
            "permissiondto.0.actiongroupdto.0.wid": "7",
            "permissiondto.0.actiongroupdto.0.metadata.method": "actiongroupdto",
            "permissiondto.0.usergroupdto.0.usergroupname": "driemployees",
            "permissiondto.0.usergroupdto.0.wid": "9",
            "permissiondto.0.usergroupdto.0.metadata.method": "usergroupdto",
            "usergroupdto.0.usergroupname": "driemployees",
            "usergroupdto.0.wid": "11",
            "usergroupdto.0.metadata.method": "usergroupdto",
            "usergroupdto.1.usergroupname": "drimanagers",
            "usergroupdto.1.wid": "13",
            "usergroupdto.1.metadata.method": "usergroupdto"
        };
        var json2 = converttodriformat(json1);
        proxyprinttodiv('Function testformat ---  json2 -- ', json2, 39);
        callback(null, json2);
    }




    // Security test -- setup schema, add user, permission etc data,test security
    // Test to pass security check
    // user has permissions to access what he is trying to
    // rogeruser tries getwidmaster
    // rogeruser is part of driemployees usergroup
    //  driemployees usergroup has permission to getwidmaster actiongroup
    exports.etsec1 = etsec1 = function etsec1(parm, callback) {
        // _accesstoken, _mygroup, _actiongroup, _dbgroup, _collection, _server, _loginlevel,
        debuglevel = 39;

        // user data
        var userobj = {};
        userobj['wid'] = "rogeruser";
        userobj['fname'] = "Roger";
        userobj['lname'] = "Colburn";
        userobj['phone'] = "987-383-8958";
        userobj['email'] = "roger@d.com";
        userobj['address'] = "112";
        userobj['address2'] = "Donald Lynch Blvd";
        userobj['city'] = "Marlborough";
        userobj['state'] = "Massachusetts";
        userobj['zip'] = "17502";
        userobj['country'] = "US";

        // environment data
        var environmentobj = {};
        environmentobj['ac'] = 'ac';
        environmentobj['gps'] = 'gpsval';
        environmentobj['account'] = 'default';
        environmentobj['db'] = 'data';
        environmentobj['collection'] = 'maincollection';

        // user permissions data
        var permissionobj = {
            "permissiondto.0.level": "99",
            "permissiondto.0.metadata.collection": "collection1",
            "permissiondto.0.metadata.system.creator": "rogeruser",
            "permissiondto.0.actiongroupdto.actiongroupname": "getwidmaster",
            // "permissiondto.0.actiongroupdto.metadata.system.creator": "rogeruser",
            "permissiondto.0.usergroupdto.usergroupname": "driemployees",
            // "permissiondto.0.usergroupdto.metadata.system.creator": "rogeruser",
            "permissiondto.0.metadata.db": "data1"
        };

        // user usergroups assignment data
        var usergroupobj = {
            "usergroupdto.0.usergroupname": "driemployees",
            "usergroupdto.0.metadata.system.creator": "rogeruser",
            "usergroupdto.1.metadata.system.creator": "rogeruser",
            "usergroupdto.1.usergroupname": "drimanagers"
        };

        // user actiongroups assignment data
        var actiongroupobj = {
            "actiongroupdto.0.actiongroupname": "getwidmaster",
            "actiongroupdto.0.metadata.system.creator": "rogeruser",
            "actiongroupdto.1.metadata.system.creator": "rogeruser",
            "actiongroupdto.1.actiongroupname": "addwidmaster"
        };

        // TODO :: USE IT LATER :: NOT USED RIGHT NOW default data -- override
        var overrideobj = {};
        overrideobj['wid'] = 'overridedataobjwid';

        // TODO :: USE IT LATER :: NOT USED RIGHT NOW default data -- default
        var defaultobj = {};
        defaultobj['wid'] = 'userdtodefault';

        // user security data
        var securityobj = {};
        securityobj['ac'] = "rogerac";

        // what to test security on
        var check1Set = {};
        check1Set['ac'] = "rogerac";
        check1Set['usergroup'] = null;
        check1Set['actiongroup'] = "allactions";
        check1Set['dbgroup'] = "data";
        check1Set['phone'] = "9873838958";
        check1Set['server'] = "server1";
        check1Set['collection'] = "maincollection";
        check1Set['datastore'] = "data";


        /// *** TESTS BELOW **** CHANGE THE STUFF ABOVE, NOTHING BELOW
        proxyprinttodiv('Function  etsec1  going to check security now for user ', userobj.wid, 39);
        checkSecurityForData(parm, userobj, securityobj, overrideobj, defaultobj, permissionobj, usergroupobj, actiongroupobj, environmentobj, check1Set, callback);
    }


    // Security test -- setup schema, add user, permission etc data,test security
    // Test to fail security check
    // user DOES NOT HAVE permissions to access what he is trying to
    // rogeruser tries addwidmaster
    // rogeruser is part of driemployees usergroup
    //  driemployees usergroup DOES NOT HAVE permission to addwidmaster actiongroup
    exports.etsec2 = etsec2 = function etsec2(parm, callback) {
        // _accesstoken, _mygroup, _actiongroup, _dbgroup, _collection, _server, _loginlevel,
        debuglevel = 39;

        // user data
        var userobj = {};
        userobj['wid'] = "rogeruser";
        userobj['fname'] = "Roger";
        userobj['lname'] = "Colburn";
        userobj['phone'] = "987-383-8958";
        userobj['email'] = "roger@d.com";
        userobj['address'] = "112";
        userobj['address2'] = "Donald Lynch Blvd";
        userobj['city'] = "Marlborough";
        userobj['state'] = "Massachusetts";
        userobj['zip'] = "17502";
        userobj['country'] = "US";

        // environment data
        var environmentobj = {};
        environmentobj['ac'] = 'ac';
        environmentobj['gps'] = 'gpsval';
        environmentobj['account'] = 'default';
        environmentobj['db'] = 'data';
        environmentobj['collection'] = 'maincollection';

        // user permissions data
        var permissionobj = {
            "permissiondto.0.level": "99",
            "permissiondto.0.metadata.collection": "collection1",
            "permissiondto.0.metadata.system.creator": "rogeruser",
            "permissiondto.0.actiongroupdto.actiongroupname": "getwid",
            // "permissiondto.0.actiongroupdto.metadata.system.creator": "rogeruser",
            "permissiondto.0.usergroupdto.usergroupname": "driemployees",
            // "permissiondto.0.usergroupdto.metadata.system.creator": "rogeruser",
            "permissiondto.0.metadata.db": "data1"
        };

        // user usergroups assignment data
        var usergroupobj = {
            "usergroupdto.0.usergroupname": "driemployees",
            "usergroupdto.0.metadata.system.creator": "rogeruser",
            "usergroupdto.1.metadata.system.creator": "rogeruser",
            "usergroupdto.1.usergroupname": "drimanagers"
        };

        // user actiongroups assignment data
        var actiongroupobj = {
            "actiongroupdto.0.actiongroupname": "getwidmaster",
            "actiongroupdto.0.metadata.system.creator": "rogeruser",
            "actiongroupdto.1.metadata.system.creator": "rogeruser",
            "actiongroupdto.1.actiongroupname": "addwidmaster",
            "actiongroupdto.0.actiongroupname": "getwid",
            "actiongroupdto.0.metadata.system.creator": "rogeruser"
        };

        // TODO :: USE IT LATER :: NOT USED RIGHT NOW default data -- override
        var overrideobj = {};
        overrideobj['wid'] = 'overridedataobjwid';

        // TODO :: USE IT LATER :: NOT USED RIGHT NOW default data -- default
        var defaultobj = {};
        defaultobj['wid'] = 'defaultobjwid';

        // user security data
        var securityobj = {};
        securityobj['ac'] = "rogerac";

        // what to test security on
        var check1Set = {};
        check1Set['ac'] = "rogerac";
        check1Set['usergroup'] = null;
        check1Set['actiongroup'] = "getwidmaster";
        check1Set['dbgroup'] = "data1";
        check1Set['phone'] = "9873838958";
        check1Set['server'] = "server1";
        check1Set['collection'] = "collection1";
        check1Set['datastore'] = "dbs";


        /// *** TESTS BELOW **** CHANGE THE STUFF ABOVE, NOTHING BELOW
        proxyprinttodiv('Function  etsec2  going to check security now for user ', userobj.wid, 39);
        checkSecurityForData(parm, userobj, securityobj, overrideobj, defaultobj, permissionobj, usergroupobj, actiongroupobj, environmentobj, check1Set, callback);
    }

  

    // ***************************************************************************
    // *************** DATA ADDITION TEST FUNCTIONS ******************************
    //****************************************************************************


    exports.udata1 = udata1 = function udata1(params, callback) {
        debuglevel = 39;
        
        // what to test security on
        var check1Set = {};
        check1Set['ac'] = "rogerac";
        check1Set['usergroup'] = null;
        check1Set['actiongroup'] = "allactions";
        check1Set['dbgroup'] = "data1";
        check1Set['phone'] = "9873838958";
        check1Set['server'] = "server1";
        check1Set['collection'] = "collection1";
        check1Set['datastore'] = "dbs";

        var status = false;
        async.series([
                function (cb1) {
                    // create schema data
                    createalldtos({}, function (err, res) {
                        proxyprinttodiv('Function  udata1  added schema dtos ', res, 39);
                        cb1(null);
                    });
                },
                function (cb1) {
                    // TODO :: SAURABH :: MODULARIZE USER DATA ADDITION AND UNCOMMENT THIS
                    // setup user data
                    // createuserdata(userobj, securityobj, overrideobj, defaultobj, permissionobj, usergroupobj, actiongroupobj, environmentobj, function (err, res) {
                    //     proxyprinttodiv('Function  udata1  added user data ', res, 39);
                    //     cb1(null);
                    // });
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
                        execute({
                            "executethis": "getwidmaster",
                            "wid": "testuser"
                        }, function (err, res) {
                            proxyprinttodiv('Function  udata1  created userdata --- testuser ', res, 39);
                            cb1(null);
                        });
                    })
                },
                function (cb1) {
                    // check security test 1
                    securitycheck(check1Set.ac, check1Set.usergroup, check1Set.phone, check1Set.actiongroup, check1Set.dbgroup, check1Set.collection, check1Set.server, check1Set.datastore, function (err, res) {
                        proxyprinttodiv('Function  udata1  checked security ', res, 39);
                        status = res;
                        cb1(null);
                    });
                }
            ],
            function (err, res) {
                callback(err, res);
            });
    }

    // create the defaultgroups 
    exports.createdefaultgroups = createdefaultgroups = function createdefaultgroups() {

        execute([{
                "executethis": "addwidmaster",
                "wid": "employees_grp",
                "metadata.method": "groupdto",
                "groupname": "employees"
            },
            //Create the 
            {
                "executethis": "addwidmaster",
                "wid": "managers_grp",
                "metadata.method": "groupdto",
                "groupname": "managers"
            }
        ], function (err, res) {
            proxyprinttodiv('Function createdefaultgroups -- added 2 groups  -- ', res, 39);
            callback(err, res);
        });
    }





    // test to see if 2nd level data addition is a problems
    // proves it is not
    // one go building schema
    exports.csd = csd = function csd(params, callback) {

        execute([{
            // create data 
            "executethis": "addwidmaster",
            "metadata.method": "parentdto",
            "wid": "parentwid1",
            "phone1": "11111",
            "childdto.0.phone2": "22222",
            "childdto.0.grandchilddto.0.phone3": "33333",
            "childdto.1.phone2": "2121212121",
            "childdto.1.grandchilddto.0.phone3": "3131313131",
            "childdto.1.phone2": "211211211211211",
            "childdto.1.grandchilddto.0.phone3": "311311311311311",
            "childdto.1.grandchilddto.1.phone3": "322322322322322"

        }, {
            "executethis": "addwidmaster",
            "wid": "rel_child_to_grandchild",
            "metadata.method": "relationshipdto",
            "primarywid": "childdto",
            "secondarywid": "grandchilddto",
            "primarymethod": "childdto",
            "secondarymethod": "grandchilddto",
            "linktype": "onetomany",
            "relationshiptype": "attributes"
        }], function (err, res) {

            execute({
                // create data 
                "executethis": "getwidmaster",
                "wid": "parentwid1"
            }, function (err, res) {
                // proxyprinttodiv('Function csd -- added all this -- ', res, 99);
                callback(err, res);
            });

        });


    }




    /// inherit default functionality working (both in data and defination)
    exports.csd1 = csd1 = function csd1(params, callback) {
        debuglevel = 67;
        execute([{
            // create default parent data 
            "executethis": "addwidmaster",
            "metadata.method": "parentdto",
            "wid": "parentdtodefault",
            "phone2": "22222(default)",
            "phone1": "11111(default)"
        }, {
            // create parent data dto defination
            "executethis": "addwidmaster",
            "metadata.method": "parentdto",
            "wid": "parentdto",
            "phone1": "string",
            "phone2": "string"
            // ,
            // "metadata.inherit.0": {
            //     "wid": "parentdtodefault",
            //     "command": {
            //         "dtotype": "",
            //         "adopt": "default"
            //     }
            // },
        }, {
            // create child data 
            "executethis": "addwidmaster",
            "metadata.method": "parentdto",
            "wid": "parentwid1",
            "phone2": "33333333(non-default)",
            "metadata.inherit.0.wid": "parentdtodefault",
            "metadata.inherit.0.command.dtotype": "",
            "metadata.inherit.0.command.adopt": "default"

        }], function (err, res) {

            execute({
                // create data 
                "executethis": "getwidmaster",
                "wid": "parentwid1"
            }, function (err, res) {
                proxyprinttodiv('Function csd1 -- getwidmaster parentwid1 -- ', res, debuglevel);
                callback(err, res);
            });

        });


    }

    /// check relationships adding
    exports.csd3 = csd3 = function csd3(params, callback) {
        debuglevel = 67;
        execute([{
            "executethis": "addwidmaster",
            "metadata.method": "a1dto",
            "wid": "a1dto",
            "a11": "string",
            "metadata.b1dto.type": "onetoone"
        }, {
            "executethis": "addwidmaster",
            "metadata.method": "b1dto",
            "wid": "b1dto",
            "b11": "string"

        }], function (err, res) {
            createrelationship("a1dto", "b1dto", "onetoone", function (err, res) {

                execute({
                    "executethis": "addwidmaster",
                    "wid": "a11wid",
                    "metadata.method": "a1dto",
                    "a11": "a11value",
                    "b1dto.b11": "b11value"
                }, function (err, res) {
                    execute({
                        // create data 
                        "executethis": "getwidmaster",
                        "wid": "a11wid"
                    }, function (err, res) {
                        proxyprinttodiv('Function csd3 -- getwidmaster a11wid -- ', res, debuglevel);
                        callback(err, res);
                    });
                });

            });
        });


    }

    /// inherit override functionality working (both in data and defination)
    exports.csd2 = csd2 = function csd2(params, callback) {
        debuglevel = 67;
        execute([{
            // create default parent data 
            "executethis": "addwidmaster",
            "metadata.method": "parentdto",
            "wid": "parentdtooverride",
            "phone2": "22222(override value)",
            "phone1": "11111(override value)"
        }, {
            // create parent data dto defination
            "executethis": "addwidmaster",
            "metadata.method": "parentdto",
            "wid": "parentdto",
            "phone1": "string",
            "phone2": "string"
            // ,
            // "metadata.inherit.0.wid": "parentdtooverride",
            // "metadata.inherit.0.command.dtotype": "",
            // "metadata.inherit.0.command.adopt": "override"
        }, {
            // create child data 
            "executethis": "addwidmaster",
            "metadata.method": "parentdto",
            "wid": "parentwid1",
            "phone2": "33333333(non-default)",
            "metadata.inherit.0.wid": "parentdtooverride",
            "metadata.inherit.0.command.dtotype": "",
            "metadata.inherit.0.command.adopt": "override"

        }], function (err, res) {

            execute({
                // create data 
                "executethis": "getwidmaster",
                "wid": "parentwid1"
            }, function (err, res) {
                proxyprinttodiv('Function csd1 -- getwidmaster parentwid1 -- ', res, debuglevel);
                callback(err, res);
            });

        });


    }


    /*
        to test createalldtos
    */
    exports.testcreatealldtos = testcreatealldtos = function testcreatealldtos(params, callback) {
        var executeobj = {
            "executethis": "addwidmaster",
            "metadata.method": "userdto",
            "wid": "wid1",

            "widname": "user widname", //HERE, we need to specify value as datatype "wid"
            "fname": "user fname1",
            "lname": "user lname1",
            "phone": "user phone",
            "email": "user@test.com",
            "address": "user address",
            "address2": "user address2",
            "city": "user city",
            "state": "user state",
            "zip": "user zip 123456",
            "country": "user country",

            "securitydto.accesstoken": "user security accesstoken",
            "securitydto.status": "user security status",

            "environmentdto.ac": "user environment ac",
            "environmentdto.gps": "user environment gps",
            "environmentdto.account": "user environment account",
            "environmentdto.db": "user environment db",
            "environmentdto.collection": "user environment collection",

            "permissiondto.0.level": "user permission level",
            "permissiondto.0.metadata.db": "user permission db",
            "permissiondto.0.metadata.collection": "user permission collection",

            "usergroupdto.0.groupname": "user usergroup name"
        };

        createalldtos(params, function (cb2) {
            var executeList = [];

            var executeObjForGet = {
                "executethis": "getwidmaster",
                "wid": "userdto",
            };
            //executeList.push(executeObjForGet);
            executeList.push(executeobj);

            execute(executeList, function (err, res) {
                proxyprinttodiv("result from data add ", res, 99, true);

                var printlist = [
                    //{"wid":"wid1", "command.dtotype":""},

                    {
                        "wid": "wid1",
                        "command.dtotype": "userdto"
                    },
                    //{"wid":"wid1", "command.dtotype":"securitydto"},
                    //{"wid":"wid1", "command.dtotype":"environmentdto"},
                    //{"wid":"wid1", "command.dtotype":"permissiondto"}
                ];

                printlistmany(printlist, function (err, res) {
                    callback(err, res);
                })
            });
        });
    }


    /// test to add a permission record and get it back
    /// made to test if permission dto is setup correctly or not
    exports.tp1 = tp1 = function tp1(parms, callback) {
        // permissiondto
        debuglevel = 39;

        var executeobj = {
            // add permissions as per given information 
            "executethis": "addwidmaster",
            "wid": "p1",
            // permissions data 
            "metadata.method": "permissiondto",
            "usergroupdto.usergroupname": "ug",
            "actiongroupdto.actiongroupname": "ag",
            "metadata.db": "data",
            "metadata.collection": "maincollection",
            "level": "99"
        };

        createalldtos(parms, function (err, res) {
            execute(executeobj, function (err, res) {

                execute({
                    "executethis": "getwidmaster",
                    "wid": "p1"
                }, function (err, res) {
                    proxyprinttodiv("tp1 -- permissiondto p1 --  ", res, 39, true);
                    callback(err, res);

                });
            });
        });
    }

    /// test to add a actiongroup record and get it back
    /// made to test if actiongroup is setup correctly or not
    exports.agr1 = agr1 = function agr1(parms, callback) {
        // actiongroupdto
        debuglevel = 39;

        var executeobj = {
            "executethis": "addwidmaster",
            "wid": "ag1",
            "metadata.method": "actiongroupdto",
            "actiongroupname": "grou name"
        };

        createalldtos(parms, function (err, res) {
            execute(executeobj, function (err, res) {

                execute({
                    "executethis": "getwidmaster",
                    "wid": "ag1"
                }, function (err, res) {
                    proxyprinttodiv("ag1 --  --  ", res, 39, true);
                    callback(err, res);

                });
            });
        });
    }

    /// test to add a userdto record and get it back
    /// made to test if userdto is setup correctly or not
    exports.uw = uw = function uw(parms, callback) {
        // userdto
        debuglevel = 39;

        createalldtos(parms, function (err, res) {

            var executeobj = {
                "executethis": "addwidmaster",
                "metadata.method": "userdto",
                "wid": "uw",
                "fname": "userobj.fname",
                "lname": "userobj.lname",
                "phone": "userobj.phone",
                "email": "userobj.email",
                "address": "userobj.address",
                "address2": "userobj.address2",
                "city": "userobj.city",
                "state": "userobj.state",
                "zip": "userobj.zip",
                "country": "userobj.country",

                "securitydto.accesstoken": "user security accesstoken",
                "securitydto.status": "user security status",

                "environmentdto.ac": "user environment ac",
                "environmentdto.gps": "user environment gps",
                "environmentdto.account": "user environment account",
                "environmentdto.db": "user environment db",
                "environmentdto.collection": "user environment collection",

                "permissiondto.0.level": "user permission level",
                "permissiondto.0.metadata.db": "user permission db",
                "permissiondto.0.metadata.collection": "user permission collection",

                "usergroupdto.0.usergroupname": "user usergroup name",
                "actiongroupdto.0.actiongroupname": "permission action group"
            };

            execute(executeobj, function (err, res) {

                execute({
                    "executethis": "getwidmaster",
                    "wid": "uw"
                }, function (err, res) {
                    proxyprinttodiv("uw --  --  ", res, 39, true);
                    callback(err, res);

                });
            });
        });

    }









    // test recursive groups fetching
    exports.etgrp = etgrp = function etgrp(parm, callback) {
        debuglevel = 39;
        asap({}, function (err, res) {
            proxyprinttodiv('Function etgrp >>>>>  for  -- asap done', res, 39);
            var userobj = {
                "wid": "rogeruser"
            };
            var groupset = [];
            getmygroups(userobj, "usergroupdto", "usergroupname", groupset, function (err, res) {
                proxyprinttodiv('Function etgrp >>>>>  for  -- groupset', groupset, 39);
                callback(err, groupset);
            });
        });
    }





