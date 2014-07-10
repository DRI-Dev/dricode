var widtests = widtests || {};

exports.printglobal1 = 
printglobal1 = 
function printglobal1(params, callback) 
{
	var global1 = global1 || {"value":"fail"};
	proxyprinttodiv('params --',params,99);
	proxyprinttodiv('params.command.environment',params.command.environment,99);
	callback (null, global1);
	
};

exports.ettest_testenvglobal1 = 
ettest_testenvglobal1 = 
widtests.ettest_testenvglobal1 = 
function ettest_testenvglobal1(executeobject, callback) 
{
      if (!executeobject.command) {
          executeobject.command={};
          executeobject.command.environment={};
          executeobject.command.environment.run={};
      }
	  
	  executeobject.command.environment.global = {"global1":{"value":"pass"}};
      executeobject.command.xrun=[
                                  {"executethis": 'printglobal1'},
                                  ];
								  
      var etEnvironment = new drienvironment(executeobject.command.environment);
      etEnvironment.execute(executeobject, function (error_obj, result_obj) 
      {
			var expectedresult = {'value':"pass"};
            proxyprinttodiv('actual result', result_obj, 99, true);                         
            proxyprinttodiv('expected result', expectedresult, 99);
            
            var composite_obj=logverify("testenvglobal1", result_obj,expectedresult);
            callback(null, composite_obj);
      } 
    );
};
widtests.ettest_testenvglobal1.category = "daily";
widtests.ettest_testenvglobal1.subcategory = "push";
widtests.ettest_testenvglobal1.js = exports.testenvglobal1;
widtests.ettest_testenvglobal1.description = "this does a test";


exports.ettest_testenvfunctionvar1 = 
ettest_testenvfunctionvar1 = 
widtests.ettest_testenvfunctionvar1 = 
function ettest_testenvfunctionvar1(executeobject, callback) 
{
      if (!executeobject.command) {
          executeobject.command={};
		  executeobject.command.environment={};
          executeobject.command.environment.run={};
      };

	  executeobject.command.environment["var"] = {};
	  executeobject.command.environment["var"].printglobal1 = {"global1":{"value":"pass"}};
      executeobject.command.xrun=[
                                  {"executethis": 'printglobal1'},
                                  ];  
      var etEnvironment = new drienvironment(executeobject.command.environment);
      etEnvironment.execute(executeobject, function (error_obj, result_obj) 
      {
			var expectedresult = {'value':"pass"};
            proxyprinttodiv('actual result', result_obj, 99, true);                         
            proxyprinttodiv('expected result', expectedresult, 99);
            
            var composite_obj=logverify("testenvfunctionvar1", result_obj,expectedresult);
            callback(null, composite_obj);
      } 
    );
};
widtests.ettest_testenvfunctionvar1.category = "daily";
widtests.ettest_testenvfunctionvar1.subcategory = "push";
widtests.ettest_testenvfunctionvar1.js = exports.testenvfunctionvar1;
widtests.ettest_testenvfunctionvar1.description = "this does a test";


// tests command.environment.global.metadata... adds {"creator":"cody"} in metadata and updatewid should add the wid with this metadata
exports.ettest_globalmetadata1 = 
ettest_globalmetadata1 = 
widtests.ettest_globalmetadata1 = 
function ettest_globalmetadata1(executeobject, callback) 
{
      if (!executeobject.command) {
      executeobject.command={};
      executeobject.command.environment={};
      executeobject.command.environment.run={};
	  };
	  if (!executeobject.command.environment.global) {
		executeobject.command.environment.global={};
		};
		
	  executeobject.command.global.metadata={"creator":"cody"};
      executeobject.command.xrun=[{
								"executethis": "updatewid",
								"wid":"wid1",
								"color":"red"}];
		
		var expectedresult = {
								"wid":"wid1",
								"data": {
											"color":"red"
										},
								"metadata": {
												"expirationdate":{"exception":["created","changed","unchanged","updated"]},
												"date":{"exception":["created","changed","unchanged","updated"]},												
												"creator":"cody"
											}
							}
		
      var etEnvironment = new drienvironment(executeobject.command.environment)
      etEnvironment.execute(executeobject, function (error_obj, result_obj) 
      {
                                
            proxyprinttodiv('expected error', null, 99);
            proxyprinttodiv('actual error', error_obj, 99);
            proxyprinttodiv('expected result', expectedresult, 99);
            proxyprinttodiv('actual result', result_obj, 99);
            composite_obj=logverify("ettest_globalmetadata1", result_obj,expectedresult);
            callback(null, composite_obj)
      } 
    );
}
widtests.ettest_globalmetadata1.category = "daily";
widtests.ettest_globalmetadata1.subcategory = "push";
widtests.ettest_globalmetadata1.js = exports.ettest_globalmetadata1;
widtests.ettest_globalmetadata1.description = "this does a test";


// tests updatewid with metadata.userid = 1122. This should add userid : 1122 in the wid record's metadata.
exports.ettest_metadatauserid1 = 
ettest_metadatauserid1 = 
widtests.ettest_metadatauserid1 = 
function ettest_metadatauserid1(executeobject, callback) 
{
      if (!executeobject.command) {
      executeobject.command={};
      executeobject.command.environment={};
      executeobject.command.environment.run={};
	  };
		
      executeobject.command.xrun=[{
								"executethis": "updatewid",
								"wid":"wid2",
								"color":"blue",
								"metadata.userid":"1122"
								}
							];
		
		var expectedresult = {
								"wid":"wid2",
								"data": {
											"color":"blue"
										},
								"metadata": {
												"expirationdate":{"exception":["created","changed","unchanged","updated"]},
												"date":{"exception":["created","changed","unchanged","updated"]},												
												"userid":"1122"
											}
							}
		
      var etEnvironment = new drienvironment(executeobject.command.environment)
      etEnvironment.execute(executeobject, function (error_obj, result_obj) 
      {
                                
            proxyprinttodiv('expected error', null, 99);
            proxyprinttodiv('actual error', error_obj, 99);
            proxyprinttodiv('expected result', expectedresult, 99);
            proxyprinttodiv('actual result', result_obj, 99);
            composite_obj=logverify("ettest_metadatauserid1", result_obj,expectedresult);
            callback(null, composite_obj)
      } 
    );
}
widtests.ettest_metadatauserid1.category = "daily";
widtests.ettest_metadatauserid1.subcategory = "push";
widtests.ettest_metadatauserid1.js = exports.ettest_metadatauserid1;
widtests.ettest_metadatauserid1.description = "this does a test";


// tests updatewid with metadata.merchantid = 2233. This should add merchantid : 2233 in the wid record's metadata.
exports.ettest_metadatamerchantid1 = 
ettest_metadatamerchantid1 = 
widtests.ettest_metadatamerchantid1 = 
function ettest_metadatamerchantid1(executeobject, callback) 
{
      if (!executeobject.command) {
      executeobject.command={};
      executeobject.command.environment={};
      executeobject.command.environment.run={};
	  };
		
      executeobject.command.xrun=[{
								"executethis": "updatewid",
								"wid":"wid3",
								"color":"green",
								"metadata.merchantid":"2233"
								}
							];
		
		var expectedresult = {
								"wid":"wid3",
								"data": {
											"color":"green"
										},
								"metadata": {
												"expirationdate":{"exception":["created","changed","unchanged","updated"]},
												"date":{"exception":["created","changed","unchanged","updated"]},												
												"merchantid":"2233"
											}
							}
		
      var etEnvironment = new drienvironment(executeobject.command.environment)
      etEnvironment.execute(executeobject, function (error_obj, result_obj) 
      {
                                
            proxyprinttodiv('expected error', null, 99);
            proxyprinttodiv('actual error', error_obj, 99);
            proxyprinttodiv('expected result', expectedresult, 99);
            proxyprinttodiv('actual result', result_obj, 99);
            composite_obj=logverify("ettest_metadatauserid1", result_obj,expectedresult);
            callback(null, composite_obj)
      } 
    );
}
widtests.ettest_metadatamerchantid1.category = "daily";
widtests.ettest_metadatamerchantid1.subcategory = "push";
widtests.ettest_metadatamerchantid1.js = exports.ettest_metadatamerchantid1;
widtests.ettest_metadatamerchantid1.description = "this does a test";


// tests updatewid with metadata.attributes = {"a":"b","creator":"cody"}. This should add attributes : {"a":"b","creator":"cody"}
// to the wid record's metadata.
exports.ettest_metadataattributes1 = 
ettest_metadataattributes1 = 
widtests.ettest_metadataattributes1 = 
function ettest_metadataattributes1(executeobject, callback) 
{
      if (!executeobject.command) {
      executeobject.command={};
      executeobject.command.environment={};
      executeobject.command.environment.run={};
	  };
		
      executeobject.command.xrun=[{
								"executethis": "updatewid",
								"wid":"wid4",
								"color":"green",
								"metadata.attributes":{"a":"b","creator":"cody"}
								}
							];
		
		var expectedresult = {
								"wid":"wid4",
								"data": {
											"color":"green"
										},
								"metadata": {
												"expirationdate":{"exception":["created","changed","unchanged","updated"]},
												"date":{"exception":["created","changed","unchanged","updated"]},												
												"attributes":{"a":"b","creator":"cody"}
											}
							}
		
      var etEnvironment = new drienvironment(executeobject.command.environment)
      etEnvironment.execute(executeobject, function (error_obj, result_obj) 
      {
                                
            proxyprinttodiv('expected error', null, 99);
            proxyprinttodiv('actual error', error_obj, 99);
            proxyprinttodiv('expected result', expectedresult, 99);
            proxyprinttodiv('actual result', result_obj, 99);
            composite_obj=logverify("ettest_metadatauserid1", result_obj,expectedresult);
            callback(null, composite_obj)
      } 
    );
}
widtests.ettest_metadataattributes1.category = "daily";
widtests.ettest_metadataattributes1.subcategory = "push";
widtests.ettest_metadataattributes1.js = exports.ettest_metadataattributes1;
widtests.ettest_metadataattributes1.description = "this does a test";