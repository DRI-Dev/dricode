var widtests = widtests || {};

// Creates a wid and adds that wid to a group
// logverify needs to verify that the wid was added to the group... not correct right now
exports.setests_metadataaddtogroup1 = 
setests_metadataaddtogroup1 = 
widtests.setests_metadataaddtogroup1 = 
function setests_metadataaddtogroup1 (executeobject, callback) {

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
													}
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
            composite_obj=logverify("setests_metadataaddtogroup1", result_obj,expectedresult);
            callback(null, composite_obj)
      } 
    );
};
widtests.setests_metadataaddtogroup1.category = "daily";
widtests.setests_metadataaddtogroup1.subcategory = "push";
widtests.setests_metadataaddtogroup1.js = exports.setests_metadataaddtogroup1;
widtests.setests_metadataaddtogroup1.description = "this does a test";


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
		
      var etEnvironment = new drienvironment(executeobject.command.environment)
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