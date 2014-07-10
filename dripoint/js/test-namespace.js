var widtests = widtests || {};

// tests updatewid with command.namespace.creator="cody"; This should show up in the metadata as {"creator":"cody"}. If we do a query later
// on and specify namespace.creator = cody AND namespaceflag.creator = true later on then this record should be returned.
exports.nstest_namespaceadd1 = 
nstest_namespaceadd1 = 
widtests.nstest_namespaceadd1 = 
function nstest_namespaceadd1(executeobject, callback) 
{
      if (!executeobject.command) {
      executeobject.command={};
      executeobject.command.environment={};
      executeobject.command.environment.run={};
	  };
	  executeobject.command.namespace = {};
	  executeobject.command.namespaceflag = {};
	  
	  executeobject.command.namespace.creator="cody";
	  executeobject.command.namespaceflag.creator="true";
      executeobject.command.xrun=[{
								"executethis": "updatewid",
								"wid":"nswid1",
								"color":"red"
								}
							];
		
		var expectedresult = {
								"wid":"nswid1",
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
            composite_obj=logverify("nstest_namespaceadd1", result_obj,expectedresult);
            callback(null, composite_obj)
      } 
    );
}
widtests.nstest_namespaceadd1.category = "daily";
widtests.nstest_namespaceadd1.subcategory = "push";
widtests.nstest_namespaceadd1.js = exports.nstest_namespaceadd1;
widtests.nstest_namespaceadd1.description = "this does a test";


// tests updatewid with command.namespace.creator="cody"; This should show up in the metadata as {"creator":"cody"}
exports.nstest_genericadd1 = 
nstest_genericadd1 = 
widtests.nstest_genericadd1 = 
function nstest_genericadd1(executeobject, callback) 
{
      if (!executeobject.command) {
      executeobject.command={};
      executeobject.command.environment={};
      executeobject.command.environment.run={};
	  };
      executeobject.command.xrun=[{
								"executethis": "updatewid",
								"wid":"nswid2",
								"color":"red"
								}
							];
		
		var expectedresult = {
								"wid":"nswid2",
								"data": {
											"color":"red"
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
            composite_obj=logverify("nstest_genericadd1", result_obj,expectedresult);
            callback(null, composite_obj)
      } 
    );
}
widtests.nstest_genericadd1.category = "daily";
widtests.nstest_genericadd1.subcategory = "push";
widtests.nstest_genericadd1.js = exports.nstest_genericadd1;
widtests.nstest_genericadd1.description = "this does a test";


// Tests querywid with namespace. First we execute two functions to create two wids: one wid is generic and has no namespace set. The other
// wid has a namespace set as {"creator":"cody"}. When we execute the querywid query in this test, we send namespace.creator = cody
// and namespaceflag.creator = true in the executeobject. The query itself looks for color = red, which normally would bring back both of
// the wids mentioned above. However, since we also specified namespace.creator = cody AND namespaceflag.creator = true, only the wid with
// the namespace.creator = cody set should be returned in the query results. 
exports.nstest_namespacequery1 = 
nstest_namespacequery1 = 
widtests.nstest_namespacequery1 = 
function nstest_namespacequery1(executeobject, callback) 
{
      if (!executeobject.command) {
      executeobject.command={};
      executeobject.command.environment={};
      executeobject.command.environment.run={};
	  };
      executeobject.command.xrun=[{
								"executethis": "ettest_genericadd1"
								}, {
								"executethis": "ettest_namespaceadd1"
								}
							];
		
		var expectedresult = {
								"wid":"nswid1",
								"data": {
											"color":"red"
										},
								"metadata": {
												"expirationdate":{"exception":["created","changed","unchanged","updated"]},
												"date":{"exception":["created","changed","unchanged","updated"]},
												"creator":"cody"
											}
							}
		var queryobj = [
					{"executethis":"querywid",
							"mongorawquery": {
								"$and": [{
									"data.color":"red"
									}]
								}
						}
					];							
		
      var etEnvironment = new drienvironment(executeobject.command.environment)
      etEnvironment.execute(executeobject, function (error_obj, result_obj) 
      {

			executeobject2 = {};
			executeobject2.command = {};
			executeobject2.command.environment = {};
			executeobject2.command.namespace = {};
			executeobject2.command.namespaceflag = {};
			
			executeobject2.command.namespace.creator="cody";
			executeobject2.command.namespaceflag.creator="true";
			executeobject2.command.xrun=queryobj;
            var etEnvironment2 = new drienvironment(executeobject2.command.environment)
			
			etEnvironment2.execute(executeobject2, function (error_obj, result_obj)
			{
				proxyprinttodiv('expected error', null, 99);
				proxyprinttodiv('actual error', error_obj, 99);
				proxyprinttodiv('expected result', expectedresult, 99);
				proxyprinttodiv('actual result', result_obj, 99);
				composite_obj=logverify("nstest_namespacequery1", result_obj,expectedresult);
				callback(null, composite_obj)
			});
      } 
    );
}
widtests.nstest_namespacequery1.category = "daily";
widtests.nstest_namespacequery1.subcategory = "push";
widtests.nstest_namespacequery1.js = exports.ettest_namespaceadd1;
widtests.nstest_namespacequery1.description = "this does a test";


// tests updatewid with command.appnamespace.namespace="cody123". Effectively, nswid3 should be stored in the cody123 db. When
// retrieving this wid with get, command.appnamespace.namespace="cody123" will be needed. Allows multiple wids of the same name
// to be stored in different dbs.
exports.nstest_appnamespaceadd1 = 
nstest_appnamespaceadd1 = 
widtests.nstest_appnamespaceadd1 = 
function nstest_appnamespaceadd1(executeobject, callback) 
{
      if (!executeobject.command) {
      executeobject.command={};
      executeobject.command.environment={};
      executeobject.command.environment.run={};
	  };
	  executeobject.command.namespace = {};
	  executeobject.command.namespaceflag = {};
	  
	  executeobject.command.appnamespace.namespace="cody123";
      executeobject.command.xrun=[{
								"executethis": "updatewid",
								"wid":"nswid3",
								"color":"red"
								}
							];
		
		var expectedresult = {
								"wid":"nswid3",
								"data": {
											"color":"red"
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
            composite_obj=logverify("nstest_appnamespaceadd1", result_obj,expectedresult);
            callback(null, composite_obj)
      } 
    );
}
widtests.nstest_appnamespaceadd1.category = "daily";
widtests.nstest_appnamespaceadd1.subcategory = "push";
widtests.nstest_appnamespaceadd1.js = exports.nstest_appnamespaceadd1;
widtests.nstest_appnamespaceadd1.description = "this does a test";


// tests getwid with appnamespace.namespace="cody123". The wid created in nstest_appnamespaceadd1() above should be returned back.
exports.nstest_appnamespaceget1 = 
nstest_appnamespaceget1 = 
widtests.nstest_appnamespaceget1 = 
function nstest_appnamespaceget1(executeobject, callback) 
{
      if (!executeobject.command) {
      executeobject.command={};
      executeobject.command.environment={};
      executeobject.command.environment.run={};
	  };
	  executeobject.command.namespace = {};
	  executeobject.command.namespaceflag = {};
	  
	  executeobject.command.appnamespace.namespace="cody123";
      executeobject.command.xrun=[{
								"executethis": "nstest_appnamespaceadd1"
								}, {
								"executethis": "getwid",
								"wid":"nswid3"
								}
							];
		
		var expectedresult = {
								"wid":"nswid3",
								"data": {
											"color":"red"
										},
								"metadata": {
												"expirationdate":{"exception":["created","changed","unchanged","updated"]},
												"date":{"exception":["created","changed","unchanged","updated"]}
											}
							};
		
      var etEnvironment = new drienvironment(executeobject.command.environment)
      etEnvironment.execute(executeobject, function (error_obj, result_obj) 
      {
                                
            proxyprinttodiv('expected error', null, 99);
            proxyprinttodiv('actual error', error_obj, 99);
            proxyprinttodiv('expected result', expectedresult, 99);
            proxyprinttodiv('actual result', result_obj[1], 99);
            composite_obj=logverify("nstest_appnamespaceget1", result_obj,expectedresult);
            callback(null, composite_obj)
      } 
    );
}
widtests.nstest_appnamespaceget1.category = "daily";
widtests.nstest_appnamespaceget1.subcategory = "push";
widtests.nstest_appnamespaceget1.js = exports.nstest_appnamespaceget1;
widtests.nstest_appnamespaceget1.description = "this does a test";


// tests getwid with appnamespace.namespace="cody122". The wid created in nstest_appnamespaceadd1() above should NOT be returned
// back because that wid was created with appnamespace.namespace="cody123" and not "cody122".
exports.nstest_appnamespaceget1fail = 
nstest_appnamespaceget1fail = 
widtests.nstest_appnamespaceget1fail = 
function nstest_appnamespaceget1fail(executeobject, callback) 
{
      if (!executeobject.command) {
      executeobject.command={};
      executeobject.command.environment={};
      executeobject.command.environment.run={};
	  };
	  executeobject.command.namespace = {};
	  executeobject.command.namespaceflag = {};
	  
	  executeobject.command.appnamespace.namespace="cody122";
      executeobject.command.xrun=[{
								"executethis": "nstest_appnamespaceadd1"
								}, {
								"executethis": "getwid",
								"wid":"nswid3"
								}
							];
		
		var expectedresult = {};
		
      var etEnvironment = new drienvironment(executeobject.command.environment)
      etEnvironment.execute(executeobject, function (error_obj, result_obj) 
      {
                                
            proxyprinttodiv('expected error', null, 99);
            proxyprinttodiv('actual error', error_obj, 99);
            proxyprinttodiv('expected result', expectedresult, 99);
            proxyprinttodiv('actual result', result_obj[1], 99);
            composite_obj=logverify("nstest_appnamespaceget1fail", result_obj,expectedresult);
            callback(null, composite_obj)
      } 
    );
}
widtests.nstest_appnamespaceget1fail.category = "daily";
widtests.nstest_appnamespaceget1fail.subcategory = "push";
widtests.nstest_appnamespaceget1fail.js = exports.nstest_appnamespaceget1fail;
widtests.nstest_appnamespaceget1fail.description = "this does a test";


// adds 2 wid records for retrieving later with appnamewid=nsnamewid1 & appnamewid=nsnamewid2.
exports.nstest_appnamewidadd1 = 
nstest_appnamewidadd1 = 
widtests.nstest_appnamewidadd1 = 
function nstest_appnamewidadd1(executeobject, callback) 
{
      if (!executeobject.command) {
      executeobject.command={};
      executeobject.command.environment={};
      executeobject.command.environment.run={};
	  };
	  
      executeobject.command.xrun=[{
								"executethis": "updatewid",
								"wid":"nsnamewid1",
								"namespace":"cody123"
								}, {
								"executethis": "updatewid",
								"wid": "nsnamewid2",
								"namespace": "cody122"
								}
							];
		
		var expectedresult = [{
								"wid":"nsnamewid1",
								"data": {
											"namespace":"cody123"
										},
								"metadata": {
												"expirationdate":{"exception":["created","changed","unchanged","updated"]},
												"date":{"exception":["created","changed","unchanged","updated"]}
											}											
							}, {
								"wid":"nsnamewid2",
								"data": {
											"namespace":"cody122"
										},
								"metadata": {
												"expirationdate":{"exception":["created","changed","unchanged","updated"]},
												"date":{"exception":["created","changed","unchanged","updated"]}
											}											
							}];
		
      var etEnvironment = new drienvironment(executeobject.command.environment)
      etEnvironment.execute(executeobject, function (error_obj, result_obj) 
      {
                                
            proxyprinttodiv('expected error', null, 99);
            proxyprinttodiv('actual error', error_obj, 99);
            proxyprinttodiv('expected result', expectedresult, 99);
            proxyprinttodiv('actual result', result_obj, 99);
            composite_obj=logverify("nstest_appnamewidadd1", result_obj,expectedresult);
            callback(null, composite_obj)
      } 
    );
}
widtests.nstest_appnamewidadd1.category = "daily";
widtests.nstest_appnamewidadd1.subcategory = "push";
widtests.nstest_appnamewidadd1.js = exports.nstest_appnamewidadd1;
widtests.nstest_appnamewidadd1.description = "this does a test";


// tests getwid with appnamewid="nsnamewid1". nsnamewid1 contains "namespace":"cody123". This means that when we do the getwid,
// nsnamewid1 should be unpacked into appnamespace.namespace="cody123" and we should be able to get the wid nswid3
exports.nstest_appnamewidget1 = 
nstest_appnamewidget1 = 
widtests.nstest_appnamewidget1 = 
function nstest_appnamewidget1(executeobject, callback) 
{
      if (!executeobject.command) {
      executeobject.command={};
      executeobject.command.environment={};
      executeobject.command.environment.run={};
	  };
	  
      executeobject.command.xrun=[{
								"executethis": "nstest_appnamewidadd1"
								}, {
								"executethis": "nstest_appnamespaceadd1",
								}
							];
		
		var expectedresult = {
								"wid":"nswid3",
								"data": {
											"color":"red"
										},
								"metadata": {
												"expirationdate":{"exception":["created","changed","unchanged","updated"]},
												"date":{"exception":["created","changed","unchanged","updated"]}
											}
							};
		
      var etEnvironment = new drienvironment(executeobject.command.environment)
      etEnvironment.execute(executeobject, function (error_obj, result_obj) 
      {
			  var executeobject2 = {};			  
			  executeobject2.command = {};
			  executeobject2.command.environment = {};
			  executeobject2.command.appnamespace = {};
			  executeobject2.command.appnamespace.appnamewid="nsnamewid1";
			  executeobject2.command.xrun = [{
								"executethis": "getwid",
								"wid":"nswid3"
								}];
								
              var etEnvironment2 = new drienvironment(executeobject2.command.environment);
			
			  etEnvironment2.execute(executeobject2, function (error_obj, result_obj)
			  {
					proxyprinttodiv('expected error', null, 99);
					proxyprinttodiv('actual error', error_obj, 99);
					proxyprinttodiv('expected result', expectedresult, 99);
					proxyprinttodiv('actual result', result_obj, 99);
					composite_obj=logverify("nstest_appnamewidget1", result_obj,expectedresult);
					callback(null, composite_obj)
			  });
      } 
    );
}
widtests.nstest_appnamewidget1.category = "daily";
widtests.nstest_appnamewidget1.subcategory = "push";
widtests.nstest_appnamewidget1.js = exports.nstest_appnamewidget1;
widtests.nstest_appnamewidget1.description = "this does a test";



// tests getwid with appnamespace.namespace="cody122". The wid created in nstest_appnamespaceadd1() above should NOT be returned
// back because that wid was created with appnamespace.namespace="cody123" and not "cody122".
exports.nstest_appnamewidget1fail = 
nstest_appnamewidget1fail = 
widtests.nstest_appnamewidget1fail = 
function nstest_appnamewidget1fail(executeobject, callback) 
{
      if (!executeobject.command) {
      executeobject.command={};
      executeobject.command.environment={};
      executeobject.command.environment.run={};
	  };
	  
      executeobject.command.xrun=[{
								"executethis": "nstest_appnamewidadd1"
								}, {
								"executethis": "nstest_appnamespaceadd1",
								}
							];
		
		var expectedresult = {};
		
      var etEnvironment = new drienvironment(executeobject.command.environment)
      etEnvironment.execute(executeobject, function (error_obj, result_obj) 
      {
			  var executeobject2 = {};			  
			  executeobject2.command = {};
			  executeobject2.command.environment = {};
			  executeobject2.command.appnamespace = {};
			  executeobject2.command.appnamespace.appnamewid="nsnamewid2";
			  executeobject2.command.xrun = [{
								"executethis": "getwid",
								"wid":"nswid3"
								}];
								
              var etEnvironment2 = new drienvironment(executeobject2.command.environment);			
			  etEnvironment2.execute(executeobject2, function (error_obj, result_obj)
			  {
					proxyprinttodiv('expected error', null, 99);
					proxyprinttodiv('actual error', error_obj, 99);
					proxyprinttodiv('expected result', expectedresult, 99);
					proxyprinttodiv('actual result', result_obj, 99);
					composite_obj=logverify("nstest_appnamewidget1fail", result_obj,expectedresult);
					callback(null, composite_obj)
			  });
      } 
    );
}
widtests.nstest_appnamewidget1fail.category = "daily";
widtests.nstest_appnamewidget1fail.subcategory = "push";
widtests.nstest_appnamewidget1fail.js = exports.nstest_appnamewidget1fail;
widtests.nstest_appnamewidget1fail.description = "this does a test";				