
var widtests = widtests || {};

// simple test to setup data and then test against that
exports.sectest1 = widtests.sectest1 = sectest1 = function sectest1(parm, callback) {

    async.series([
            function(cb1) {
                createtestuser("rogeruser", "rogerac", "99", cb1);
            },
            function(cb1) {
                createtestuser("codyuser", "codyac", "99", cb1)
            },
            function(cb1) { // add codyuser to the driemployeesgroup
                addgrouptowid("codyuser", "userdto", "driemployeegroup", cb1);
            },
            function(cb1) { // rogeruser allows anyone in driemployees to executethis to cretecoupon
                addpermission("rogeruser", "driemployeegroup", "createcoupon", "data", "50", cb1);
            },
            function(cb1) {
                testsecurity("codyac", "executethis", "createcoupon", "data", true, cb1);
            },



            function(cb1) {
                addpermission("rogeruser", "codyuser", "executethis", "createcoupon", "data", 50, cb1);
            },
            function(cb1) {
                addgrouptowid("createcoupon", "xxxxxxx", "rogeruser", cb1);
            },
            function(cb1) {
                testsecurity("rogerac", "executethis", "createcoupon", "data", true, cb1);
            },
            function(cb1) {
                addgrouptowid("codyuser", "userdto", "driemployeegroup", cb1);
            },

            function(cb1) {
                testsecurity("codyac", "executethis", "createcoupon", "data", true, cb1);
            }
        ],
        function(err, res) {

            callback(err, res);

        });
}
widtests.sectest1.category = "daily";
widtests.sectest1.subcategory = "push";
widtests.sectest1.js = exports.sectest1;
widtests.sectest1.description = "this does a test";

// simple test which sets up all data and then runs sectest1 test after that 
exports.tsa1 = widtests.tsa1 = tsa1 = function tsa1(params, callback) {
    // debuglevel = 34;
    // saveglobal("debugname", "");
    // saveglobal("debugcat", "");
    // saveglobal("debugsubcat", "code");
    // var status = false;

    async.series([
        function(cb1) {
            createsystemdtos(null, function(err, res) {
                cb1(null);
            });
        },
        function(cb1) {
            sectest1(null, function(err, res) {
                cb1(null);
            });
        }
    ], function(err, res) {
        proxyprinttodiv('Function tss3 done a series of tasks using ttdto -- process.addListener(type, listener);', res, 34);
        callback(err, res);
    });
}
widtests.tsa1.category = "daily";
widtests.tsa1.subcategory = "push";
widtests.tsa1.js = exports.tsa1;
widtests.tsa1.description = "this does a test";


// test getting permissions list :: dependent on sectest1
exports.ttsa3 = widtests.ttsa3 = ttsa3 = function(params, callback) {
    getPermissionsList(["driemployeegroup0", "rogeruser0", "groupdto0", "19", "25"], ["createcoupon0"], ["executethis"], ["data"], 99, function(err, res) {
        proxyprinttodiv('Function ttsa3() in : res', res, 34);
        callback(err, res);

    });
};
widtests.ttsa3.category = "daily";
widtests.ttsa3.subcategory = "push";
widtests.ttsa3.js = exports.ttsa3;
widtests.ttsa3.description = "this does a test";

// test getting groups recursively :: dependent on sectest1
exports.ttsa4 = widtests.ttsa4 = ttsa4 = function(params, callback) {
    debuglevel = 34;
    saveglobal("debugname", "");
    saveglobal("debugcat", "");
    saveglobal("debugsubcat", "code");
    getGroupRecursive("rogeruser", 99, function(err, res) {
        proxyprinttodiv('Function ttsa4() in : res', res, 34);
        callback(err, res);

    });
};
widtests.ttsa4.category = "daily";
widtests.ttsa4.subcategory = "push";
widtests.ttsa4.js = exports.ttsa4;
widtests.ttsa4.description = "this does a test";


// test add group to wid :: dependent on sectest1
exports.ttsa6 = widtests.ttsa6 = ttsa6 = function(params, callback) {
    addgrouptowid("anything", "groupnamedto", "createcoupon", callback);
};
widtests.ttsa6.category = "daily";
widtests.ttsa6.subcategory = "push";
widtests.ttsa6.js = exports.ttsa6;
widtests.ttsa6.description = "this does a test";

// Address dto
// {"executethis":"updatewid","metadata.method":"addressdto","wid":"addressdto", "companyname":"string", "street":"string", "city":"string","state":"string","zip":"string", "metadata.inherit":"defaultaddressproperties"},
// {"executethis":"updatewid","metadata.method":"addressdto","wid":"defaultaddressproperties", "companyname":"No Name Company"},
// {"executethis":"updatewid","metadata.method":"relationshipdto","wid":"rel222","primarywid":"elizabeth_heart","secondarywid":"elizabeth_heart_address", "relationshiptype":"attributes" },
// {"executethis":"updatewid","metadata.method":"addressdto","wid":"elizabeth_heart_address", "street":"1234 First street", "city":"Something City","state":"ZZ","zip":"12345"},
// {"executethis":"getwidmaster","wid":"elizabeth_heart_address"}


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
widtests.setests_metadataaddtogroup1.category = "daily";
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
			proxyprinttodiv('Function creategroup done --    for  -- ', res[0][0].wid, 99);
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
								"wid": res[0][0].wid
					}];
					
			execute(executeobject,function (err, res) {
				var result = logverify('setests_metadataaddtogroup2_result',res,expectedresult);
				proxyprinttodiv('mycolorwid1 result  -- ', res[1], 99);				
				proxyprinttodiv('colorwids group result  -- ', res[2], 99);				
				callback(err,result);
			});
	});
};
widtests.setests_metadataaddtogroup2.category = "daily";
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
widtests.setests_metadataaddgrouppermissions1.category = "daily";
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
widtests.setests_metadataaddgrouppermissions1.category = "daily";
widtests.setests_metadataaddgrouppermissions1.subcategory = "push";
widtests.setests_metadataaddgrouppermissions1.js = exports.setests_metadataaddgrouppermissions1;
widtests.setests_metadataaddgrouppermissions1.description = "this does a test";
*/


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
widtests.setests_metadataaddgrouppermissions1.category = "daily";
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
widtests.setests_metadataaddgrouppermissions2.category = "daily";
widtests.setests_metadataaddgrouppermissions2.subcategory = "push";
widtests.setests_metadataaddgrouppermissions2.js = exports.setests_metadataaddgrouppermissions2;
widtests.setests_metadataaddgrouppermissions2.description = "this does a test";