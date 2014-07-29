var widtests = widtests || {};

// tests addwidmaster with command.namespace.creator="cody"; This should show up in the metadata as {"creator":"cody"}. If we do a query later
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
	  }
	  
		executeobject.command.xrun = [{
							"executethis": "addwidmaster",
							"wid": "nswid1",
							"command.namespace.creator": "cody",
							"command.namespaceflag.creator": "true",
							"color": "red"
							}];
							
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
		
	  var etEnvironment = new DriEnvironment(executeobject.command.environment);
	  etEnvironment.execute(executeobject, function (err, res) 
      {
                                
            proxyprinttodiv('expected error', null, 99);
            proxyprinttodiv('actual error', err, 99);
            proxyprinttodiv('expected result', expectedresult, 99);
            proxyprinttodiv('actual result', res, 99);
            composite_obj=logverify("nstest_namespaceadd1", res,expectedresult);
            callback(null, composite_obj)
      } 
    );
}
widtests.nstest_namespaceadd1.category = "daily";
widtests.nstest_namespaceadd1.subcategory = "push";
widtests.nstest_namespaceadd1.js = exports.nstest_namespaceadd1;
widtests.nstest_namespaceadd1.description = "this does a test";


// tests addwidmaster with command.namespace.creator="cody"; This should show up in the metadata as {"creator":"cody"}
exports.nstest_genericadd1 = 
nstest_genericadd1 = 
widtests.nstest_genericadd1 = 
function nstest_genericadd1(executeobject, callback) 
{
	  if (!executeobject.command) {
		  executeobject.command={};
		  executeobject.command.environment={};
		  executeobject.command.environment.run={};
	  }
	  executeobject.command.xrun = [{
							"executethis": "addwidmaster",
							"wid": "nswid2",
							"color": "red"
							}];
	
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
		
      var etEnvironment = new DriEnvironment(executeobject.command.environment)
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
	debuglevel = 28;
	  if (!executeobject.command) {
		  executeobject.command={};
		  executeobject.command.environment={};
		  executeobject.command.environment.run={};
	  }
	  
      executeobject.command.xrun = [{
								"executethis": "nstest_genericadd1"
								}, {
								"executethis": "nstest_namespaceadd1"
								}
							];
		
		var expectedresult = {
								"wid":"nswid1",
								"color":"red",
								"metadata": {
												"expirationdate":{"exception":["created","changed","unchanged","updated"]},
												"date":{"exception":["created","changed","unchanged","updated"]},
												"creator":"cody"
											}
							}
		var queryobj = [
					{"executethis":"querywidmaster",
							"command.namespace.creator": "cody",
							"command.namespaceflag.creator": "true",
							"command.queryresult": "each",
							"mongorawquery": {
								"$and": [{
									"data.color":"red"
									}]
								}
						}
					];							
		
      var etEnvironment = new DriEnvironment(executeobject.command.environment)
      etEnvironment.execute(executeobject, function (error_obj, result_obj)  
      {
			executeobject.command.xrun = queryobj;
			etEnvironment.execute(executeobject, function (err, res)
			{
				proxyprinttodiv('expected error', null, 99);
				proxyprinttodiv('actual error', err, 99);
				proxyprinttodiv('expected result', expectedresult, 99);
				proxyprinttodiv('actual result', res, 99);
				composite_obj=logverify("nstest_namespacequery1", res,expectedresult);
				callback(null, composite_obj)
			});
      } 
    );
}
widtests.nstest_namespacequery1.category = "daily";
widtests.nstest_namespacequery1.subcategory = "push";
widtests.nstest_namespacequery1.js = exports.ettest_namespaceadd1;
widtests.nstest_namespacequery1.description = "this does a test";


// tests addwidmaster with command.appnamespace.namespace="cody123". Effectively, nswid3 should be stored in the cody123 db. When
// retrieving this wid with get, command.appnamespace.namespace="cody123" will be needed. Allows multiple wids of the same name
// to be stored in different dbs.
exports.nstest_appnamespaceadd1 = 
nstest_appnamespaceadd1 = 
widtests.nstest_appnamespaceadd1 = 
function nstest_appnamespaceadd1(executeobject, callback) 
{
      var executeobject = [{
								"executethis": "addwidmaster",
								"wid":"nswid3",
								"command.appnamespace.namespace": "cody123",
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
		
      //var etEnvironment = new drienvironment(executeobject.command.environment)
      //etEnvironment.execute(executeobject, function (error_obj, result_obj) 
      execute(executeobject, function (error_obj, result_obj) 
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
      var executeobject = [{
								"executethis": "nstest_appnamespaceadd1"
								}, {
								"executethis": "getwid",
								"wid":"nswid3",
								"command.appnamespace.namespace": "cody123"
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
		
      //var etEnvironment = new drienvironment(executeobject.command.environment)
      //etEnvironment.execute(executeobject, function (error_obj, result_obj) 
      execute(executeobject, function (error_obj, result_obj) 
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
      var executeobject = [{
								"executethis": "nstest_appnamespaceadd1"
								}, {
								"executethis": "getwid",
								"wid":"nswid3",
								"command.appnamespace.namespace": "cody122"
								}
							];
		
		var expectedresult = {};
		
      //var etEnvironment = new drienvironment(executeobject.command.environment)
      //etEnvironment.execute(executeobject, function (error_obj, result_obj) 
      execute(executeobject, function (error_obj, result_obj) 
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
      var executeobject = [{
								"executethis": "addwidmaster",
								"wid":"nsnamewid1",
								"namespace":"cody123"
								}, {
								"executethis": "addwidmaster",
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
		
      //var etEnvironment = new drienvironment(executeobject.command.environment)
      //etEnvironment.execute(executeobject, function (error_obj, result_obj) 
      execute(executeobject, function (error_obj, result_obj) 
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

      var executeobject = [{
								"executethis": "nstest_appnamewidadd1"
								}, {
								"executethis": "nstest_appnamespaceadd1",
								}, {
								"executethis": "getwid",
								"wid": "nswid3",
								"command.appnamespace.appnamewid": "nsnamewid1"
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
		
      //var etEnvironment = new drienvironment(executeobject.command.environment)
      //etEnvironment.execute(executeobject, function (error_obj, result_obj) 
      execute(executeobject, function (error_obj, result_obj) 
      {
			  
		proxyprinttodiv('expected error', null, 99);
		proxyprinttodiv('actual error', error_obj, 99);
		proxyprinttodiv('expected result', expectedresult, 99);
		proxyprinttodiv('actual result', result_obj[2], 99);
		composite_obj=logverify("nstest_appnamewidget1", result_obj,expectedresult);
		callback(null, composite_obj)

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
      var executeobject = [{
								"executethis": "nstest_appnamewidadd1"
								}, {
								"executethis": "nstest_appnamespaceadd1",
								}, {
								"executethis": "getwid",
								"wid": "nswid3",
								"command.appnamespace.appnamewid": "nsnamewid2"
								}
							];
		
		var expectedresult = {};
		
      //var etEnvironment = new drienvironment(executeobject.command.environment)
      //etEnvironment.execute(executeobject, function (error_obj, result_obj) 
      execute(executeobject, function (error_obj, result_obj) 
      {
			  
		proxyprinttodiv('expected error', null, 99);
		proxyprinttodiv('actual error', error_obj, 99);
		proxyprinttodiv('expected result', expectedresult, 99);
		proxyprinttodiv('actual result', result_obj[2], 99);
		composite_obj=logverify("nstest_appnamewidget1", result_obj,expectedresult);
		callback(null, composite_obj)

      } 
    );
}
widtests.nstest_appnamewidget1fail.category = "daily";
widtests.nstest_appnamewidget1fail.subcategory = "push";
widtests.nstest_appnamewidget1fail.js = exports.nstest_appnamewidget1fail;
widtests.nstest_appnamewidget1fail.description = "this does a test";	



exports.savetoqueue = savetoqueue = function savetoqueue(p, callback) {
    // Parameters if this is a normal function
    // queuename - string - the name of the queue to save to
    // 
    proxyprinttodiv("savetoqueue **************", 7, 99);
    var queuename = p.command.queuename;
    proxyprinttodiv(" qname is ... ",  queuename, 99 );
    delete p.command.queuename;
    queuename = "eventonemin";
    var itemtobesaved=p;
    itemtobesaved = [
        { "addthis.executethis": "printhello", "to": "+12313133930", "body":"This is a text" }
    ]
    var recorddef = {
        // "wid":"russ112",
        "executethis": "addwidmaster",
        "container":itemtobesaved,   // no wid ... let system make it for you
        "metadata" : {
            "queuename": queuename,
            "queueflag" : "true"
        },
        "command": {
            "datastore": config.configuration.datastore,
            "collection": queuename,
            "keycollection": queuename+"key",
            "db": config.configuration.db,
            "databasetable": config.configuration.databasetable
        }
    };
    proxyprinttodiv("update cache **************", recorddef, 99);
    // var recorddef = { "wid": "russ1", "key": "value1"};
    //addwidmaster(recorddef, function (err, res) {
    execute(recorddef, function (err, res) {
        callback(null, res);
    });
}

exports.getfromqueue = getfromqueue = function getfromqueue(params, callback) {
    proxyprinttodiv("findparent inputobj", params, 99);
    var queuename = params.command.eventname;
    queuename = "eventonemin";
    // var wid = inputobj["wid"];
    var executeobject = {};
    executeobject["executethis"] = "querywidmaster"; // Can be querywidmaster or querywid
    executeobject["command"] = {
        "result": "queryresult",
        "datastore": config.configuration.datastore,
        "collection": queuename,
        "keycollection": queuename+"key",
        "db": config.configuration.db,
        "databasetable": config.configuration.databasetable
    };
    executeobject["mongorawquery"] = {
        "$and": [{
            "metadata.queuename": queuename,
        }]
    };
    var env = new DriEnvironment(params.command.environment);
    proxyprinttodiv("after environment", env, 99);

    env.execute(executeobject, function (err, res) {
        proxyprinttodiv("findparent res2", res, 99);
        // findwidbyqueryresult(res, "primarywid", function (err, res) {
        if (res.hasOwnProperty('queryresult'))
        {
            var queuecount = res.queryresult.length;
            proxyprinttodiv("Queuecount / result has this many records", queuecount, 99);
            if (queuecount > 0)
            {
                // Step 1 - Get the wid name from the first object from the results
                var first_object = res.queryresult[0];
                var widname = first_object.wid;

                // Step 2 - Get and LOCK the object in the storage system
                var execobj_get1 = {
                    "wid" : widname,
                    "executethis" : "getwid",
                    "command": {
                        "lock" : true, 
                        "datastore": config.configuration.datastore,
                        "collection": queuename,
                        "keycollection": queuename+"key",
                        "db": config.configuration.db,
                        "databasetable": config.configuration.databasetable
                    }
                };
                env.execute(execobj_get1, function(err, res) {
                    // Receive LOCKED object
                    // try to execute it
                    // proxyprinttodiv("getwid / lock callback", widname, 99);
                    proxyprinttodiv("getwid / lock callback - widname", widname, 99);
                    proxyprinttodiv("getwid / lock callback - execobj_get1", execobj_get1, 99);
                    proxyprinttodiv("getwid / lock callback - res", res, 99);

                    // get object from res parameter
                    // execute the object from the result
                    execute(res, function(err, res) {
                        // Pass or fail - Now DELETE this wid
                        proxyprinttodiv("execute the object callback", res, 99);
                        var execobj_del1 = {
                            "executethis" : "deletewid",
                            "wid" : widname,
                            "command": {
                                "lock" : false, 
                                "datastore": config.configuration.datastore,
                                "collection": queuename,
                                "keycollection": queuename+"key",
                                "db": config.configuration.db,
                                "databasetable": config.configuration.databasetable
                            }
                        };
                        execute(execobj_del1, function(err, res) {
                            // delete has happened, call the callback
                            proxyprinttodiv("Delete has finished / result", res, 99);
                            proxyprinttodiv("Delete has finished / execobj_del1", execobj_del1, 99);
                            if (queuecount > 1)
                            {
                                // If there is anything else left to do, 
                                // then do it now.
                                getfromquery(params, callback);
                            }
                            callback(err, res);
                        });
                    });
                });
            } else {
                // Nothing to do
                proxyprinttodiv("No results from query, just calling callback", 0, 99);
                callback(err, res);
            }
        }
    });
};


exports.printhello = printhello = function printhello(p, callback) {
var parameter_string = JSON.stringify(p);
    proxyprinttodiv("printhello - parameters are ", parameter_string, 99);
    callback(null, parameter_string);
}
