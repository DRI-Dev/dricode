// Definitions

// series - the executes will go in order, all the results come back in an array of objects
// group - the executes can go in any order, all the results come back in an array of objects
// waterfall - in order, the results of call 1 feed call 2, the last results come back
// runfirstone - will execute the first one, first result comes back

// complete ettest_allexecute to call the other test group functions
// above ettest_allexecute and each group function put comment
// go through each individual test, bring it to right section
// fix individual files (i.e. name in logverify complex...are assertions simplified)
// within one test you should not call same fn

// this test calls all sub-tests
// ettest_serieslevel0: calls tests in series & level 0
// fail ettest_serieslevel0pass3server
//
// add rest in _allexecute
// missing
// remove processparameterfn from all
// names of tests

// This is the master test. this test calls all of the individual testing groups.
// Don't execute this without prints disabled... ridding all prints brings total execution time down to ~ 1.3ms
exports.ettest_allexecute = 
//wid.ettest_allexecute = 
ettest_allexecute = 
function ettest_allexecute(executeobject, callback) 
{
	var start = new Date().getTime()
    async.series(
    [   
    function (cb1) {ettest_serieslevel0({}, function (err, res) {cb1(null, res)})},
    function (cb1) {ettest_serieslevel1({}, function (err, res) {cb1(null, res)})},
    function (cb1) {ettest_grouplevel0({}, function (err, res) {cb1(null, res)})},
	function (cb1) {ettest_grouplevel1({}, function (err, res) {cb1(null, res)})},
	function (cb1) {ettest_waterfalllevel1({}, function (err, res) {cb1(null, res)})},
	function (cb1) {ettest_runfirstonelevel1({}, function (err, res) {cb1(null, res)})},
	function (cb1) {ettest_runfirstwaterfalllevel1({}, function (err, res) {cb1(null, res)})},
	function (cb1) {ettest_whattodo({}, function (err, res) {cb1(null, res)})},
	function (cb1) {ettest_howtodo({}, function (err, res) {cb1(null, res)})},
	function (cb1) {ettest_executemisc({}, function (err, res) {cb1(null, res)})},
	function (cb1) {ettest_nestedtestslevel1({}, function (err, res) {cb1(null, res)})} // all work to this point if color>205
    //ettest_grouplevel1
    //ettest_waterfalllevel1
    //ettest_runfirstonelevel1
    //ettest_runfirstwaterfalllevel1
    ],
    function (err, res) {
      proxyprinttodiv('result from many array', res, 99);
      callback(null,res)
	  proxyprinttodiv('total elapsed time ', new Date().getTime() - start, 99);
    })
}
/*
wid.ettest_allexecute.category = "executeit";
wid.ettest_allexecute.subcategory = "dothis";
wid.ettest_allexecute.type = "na";
wid.ettest_allexecute.name = "This is the master test. this test calls all of the individual testing groups for testing execute.";
*/
// /*===============================================*/  
// /******* SECTION: series Level 0 		*********/
// /*===============================================*/

// Group of 4 'series' tests at level 0: 1 test passes; 3 tests pass; 
//		3 tests middle fails; 3 tests last fails 
exports.ettest_serieslevel0 = 
ettest_serieslevel0 = 
function ettest_serieslevel0(executeobject, callback) 
{
	async.series(
	[   
	function (cb1) {ettest_serieslevel0pass1({}, function (err, res) {cb1(null, res)})},
	function (cb1) {ettest_serieslevel0pass3({}, function (err, res) {cb1(null, res)})},
	function (cb1) {ettest_serieslevel0fail3middle({}, function (err, res) {cb1(null, res)})},
	function (cb1) {ettest_serieslevel0fail3last({}, function (err, res) {cb1(null, res)})}
	],
	function (err, res) {
	  proxyprinttodiv('result from many array', res, 99);
	  callback(null,res)
	})
}

	// series, level 0, 1 function that passes locally
	exports.ettest_serieslevel0pass1 = 
	ettest_serieslevel0pass1 = 
	function ettest_serieslevel0pass1(executeobject, callback) 
	{
		  if (!executeobject.command) {
		  executeobject.command={},
		  executeobject.command.environment={},
		  executeobject.command.environment.run={}}
		  //executeobject.command.environment.run.type="series"
		  executeobject.command.environment.run.executelevel=0
		  executeobject.command.environment.platform='local'          // used for server testing
		  executeobject.command.environment.processfn="execute_function"          // what function handles functions
		  executeobject.serverfn="test_return_notfound_result"        // so we can test fail local, pass server on same machine
		  executeobject.command.xrun={
									  "executethis": 'test_return_noerror_result'
											  }

		  var etEnvironment = new drienvironment(executeobject.command.environment)
		  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
		  {        
				var result_assertion={"a":"b", "env":executeobject.command.environment.platform};               
				proxyprinttodiv('expected error', null, 99);
				proxyprinttodiv('actual error', error_obj, 99);
				proxyprinttodiv('expected result', result_assertion, 99);
				proxyprinttodiv('actual result', result_obj, 99);

				composite_obj=logverifycomplex("ettest_serieslevel0pass1", result_obj, result_assertion, error_obj, null);
				proxyprinttodiv('composite_obj', composite_obj, 99);
				callback(null, composite_obj)
		  })
	}
	/*
	wid.ettest_serieslevel0pass1.category = "executeit";
	wid.ettest_serieslevel0pass1.subcategory = "dothis";
	wid.ettest_serieslevel0pass1.type = "daily";
	wid.ettest_serieslevel0pass1.name = "series, level 0, 1 function that passes locally";
*/

	//series, level 0, 3 tests pass locally
	exports.ettest_serieslevel0pass3 = 
	ettest_serieslevel0pass3 = 
	function ettest_serieslevel0pass3(executeobject, callback) 
	{
		  if (!executeobject.command) 
		  {
			executeobject.command={};
			executeobject.command.environment={};
			executeobject.command.environment.run={};
		  }
		  //executeobject.command.environment.run.type="series"
		  executeobject.command.environment.run.executelevel=0
		  executeobject.command.environment.platform='local'          // used for server testing

		  executeobject.command.environment.processfn="execute_function"          // what function handles functions
		  executeobject.serverfn="test_return_notfound_result"        // so we can test fail local, pass server on same machine
		  executeobject.command.xrun=[{"executethis": 'test_return_noerror_result'},
									  {"executethis": 'test_return_noerror_result'},
									  {"executethis": 'test_return_noerror_result'}]

		  var etEnvironment = new drienvironment(executeobject.command.environment)
		  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
		  {          
				var result={"a":"b", "env":executeobject.command.environment.platform};   
				var result_assertion=[result, result, result]           
				proxyprinttodiv('expected error', null, 99);
				proxyprinttodiv('actual error', error_obj, 99);
				proxyprinttodiv('expected result', result_assertion, 99);
				proxyprinttodiv('actual result', result_obj, 99);

				composite_obj=logverifycomplex("ettest_serieslevel0pass3", result_obj, result_assertion, error_obj, null);
				callback(null, composite_obj)
		  })
	}

	// series, level 0, 3 tests, 2nd test is fail not found
	exports.ettest_serieslevel0fail3middle = 
	ettest_serieslevel0fail3middle = 
	function ettest_serieslevel0fail3middle(executeobject, callback) 
	{
		  if (!executeobject.command) {
		  executeobject.command={},
		  executeobject.command.environment={},
		  executeobject.command.environment.run={}}
		  executeobject.command.environment.run.type="series"
		  executeobject.command.environment.run.executelevel=0
		  executeobject.command.environment.platform='local'          
  
		  executeobject.command.environment.processfn="execute_function"
		  executeobject.serverfn="test_return_noerror_result"
		  executeobject.command.xrun=[
									  {"executethis": 'test_return_noerror_result'},
									  {"executethis": 'test_return_failnotfound_result'},
									  {"executethis": 'test_return_noerror_result'}
									  ]; 
		  //var expectedresult1 = {"a":"b","env":executeobject.command.environment.platform}  
		  //var expectedresult2 = {"x":"y","env":executeobject.command.environment.platform} 
		  //var expectedresult2 = {"a":"b","env":executeobject.command.environment.platform}      
		  //var expectedresult3 = {"a":"b","env":executeobject.command.environment.platform}	  
			//var result_assertion = [expectedresult1, expectedresult2, expectedresult3]
		  var etEnvironment = new drienvironment(executeobject.command.environment)
		  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
		  {
		   
				proxyprinttodiv('actual result', result_obj, 99, true);                         
				proxyprinttodiv('expected result000', null, 99, true);
				proxyprinttodiv('actual error',error_obj, 99);
				proxyprinttodiv('expected error', global_failnotfound, 99);
				
				composite_obj=logverifycomplex("ettest_serieslevel0fail3middle", result_obj,null, error_obj, global_failnotfound);
				callback(null, composite_obj)
		  } 
		);
	}

	// series, level 0, 3 tests, last test is fail not found
	exports.ettest_serieslevel0fail3last = 
	ettest_serieslevel0fail3last = 
	function ettest_serieslevel0fail3last(executeobject, callback) 
	{
		  if (!executeobject.command) {
		  executeobject.command={},
		  executeobject.command.environment={},
		  executeobject.command.environment.run={}}
		  executeobject.command.environment.run.type="series"
		  executeobject.command.environment.run.executelevel=0
		  executeobject.command.environment.platform='local'          
  
		  executeobject.command.environment.processfn="execute_function"
		  executeobject.serverfn="test_return_noerror_result"
		  executeobject.command.xrun=[
									  {"executethis": 'test_return_noerror_result'},
									  {"executethis": 'test_return_noerror_result'},
									  {"executethis": 'test_return_failnotfound_result'}
									  ]; 

		  var etEnvironment = new drienvironment(executeobject.command.environment)
		  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
		  {
		   
				proxyprinttodiv('actual result', result_obj, 99, true);                         
				proxyprinttodiv('expected result', null, 99, true);
				proxyprinttodiv('actual error',error_obj, 99);
				proxyprinttodiv('expected error', global_failnotfound, 99);
				
				composite_obj=logverifycomplex("ettest_serieslevel0fail3last", result_obj,null, error_obj, global_failnotfound);
				callback(null, composite_obj)
		  } 
		);
	}

// /*===============================================*/  
// /******* SECTION: series Level 1 		*********/
// /*===============================================*/

// Group of 4 'series' tests at level 1: 1 test passes; 3 tests pass; 
//		3 tests middle fails; 3 tests last fails 
exports.ettest_serieslevel1 = 
ettest_serieslevel1 = 
function ettest_serieslevel1(executeobject, callback) 
{
	async.series(
	[   
	function (cb1) {ettest_serieslevel1pass1({}, function (err, res) {cb1(null, res)})},
	function (cb1) {ettest_serieslevel1pass3({}, function (err, res) {cb1(null, res)})},
	function (cb1) {ettest_serieslevel1fail3middle({}, function (err, res) {cb1(null, res)})},
	function (cb1) {ettest_serieslevel1fail3last({}, function (err, res) {cb1(null, res)})}
	],
	function (err, res) {
	  proxyprinttodiv('result from many array', res, 99);
	  callback(null,res)
	})
}


	// series, level 1, 1 test that passes
	exports.ettest_serieslevel1pass1 = 
	ettest_serieslevel1pass1 = 
	function ettest_serieslevel1pass1(executeobject, callback) 
	{
		  if (!executeobject.command) {
		  executeobject.command={},
		  executeobject.command.environment={},
		  executeobject.command.environment.run={}}
		  executeobject.command.environment.run.type="series"
		  executeobject.command.environment.run.executelevel=1
		  executeobject.command.environment.platform='local'          // used for server testing

		  executeobject.command.environment.processfn="execute_function"          // what function handles functions
		  executeobject.serverfn="test_return_notfound_result"        // so we can test fail local, pass server on same machine
		  executeobject.command.xrun={
									  "executethis": 'test_return_noerror_result'
											  }

		  var etEnvironment = new drienvironment(executeobject.command.environment)
		  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
		  {        
				var result_assertion={"a":"b", "env":executeobject.command.environment.platform};               
				proxyprinttodiv('expected error', null, 99);
				proxyprinttodiv('actual error', error_obj, 99);
				proxyprinttodiv('expected result', result_assertion, 99);
				proxyprinttodiv('actual result', result_obj, 99);

				composite_obj=logverifycomplex("ettest_serieslevel1pass1", result_obj, result_assertion, error_obj, null);
				proxyprinttodiv('composite_obj', composite_obj, 99);
				callback(null, composite_obj)
		  })
	}

	// series, level 1, 3 tests that all pass
	exports.ettest_serieslevel1pass3 = 
	ettest_serieslevel1pass3 = 
	function ettest_serieslevel1pass3(executeobject, callback) 
	{
		  if (!executeobject.command) 
		  {
			executeobject.command={};
			executeobject.command.environment={};
			executeobject.command.environment.run={};
		  }
		  //executeobject.command.environment.run.type="series"
		  executeobject.command.environment.run.executelevel=1
		  executeobject.command.environment.platform='local'          // used for server testing

		  executeobject.command.environment.processfn="execute_function"          // what function handles functions
		  executeobject.serverfn="test_return_notfound_result"        // so we can test fail local, pass server on same machine
		  executeobject.command.xrun=[{"executethis": 'test_return_noerror_result'},
									  {"executethis": 'test_return_noerror_result'},
									  {"executethis": 'test_return_noerror_result'}]

		  var etEnvironment = new drienvironment(executeobject.command.environment)
		  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
		  {          
				var result={"a":"b", "env":executeobject.command.environment.platform};   
				var result_assertion=[result, result, result]           
				proxyprinttodiv('expected error', null, 99);
				proxyprinttodiv('actual error', error_obj, 99);
				proxyprinttodiv('expected result', result_assertion, 99);
				proxyprinttodiv('actual result', result_obj, 99);

				composite_obj=logverifycomplex("ettest_serieslevel1pass3", result_obj, result_assertion, error_obj, null);
				callback(null, composite_obj)
		  })
	}

	// series, level 1, 3 tests: 1st passes, 2nd fails, 3rd passes
	exports.ettest_serieslevel1fail3middle = 
	ettest_serieslevel1fail3middle = 
	function ettest_serieslevel1fail3middle(executeobject, callback) 
	{
		  if (!executeobject.command) {
		  executeobject.command={},
		  executeobject.command.environment={},
		  executeobject.command.environment.run={}}
		  executeobject.command.environment.run.type="series"
		  executeobject.command.environment.run.executelevel=1
		  executeobject.command.environment.platform='local'          
  
		  executeobject.command.environment.processfn="execute_function"
		  executeobject.serverfn="test_return_noerror_result"
		  executeobject.command.xrun=[
									  {"executethis": 'test_return_noerror_result'},
									  {"executethis": 'test_return_realerror_result'},
									  {"executethis": 'test_return_noerror_result'}
									  ]; 

		  var etEnvironment = new drienvironment(executeobject.command.environment)
		  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
		  {
		   
				proxyprinttodiv('actual result', result_obj, 99, true);                         
				proxyprinttodiv('expected result', null, 99, true);
				proxyprinttodiv('actual error',error_obj, 99);
				proxyprinttodiv('expected error', global_realerror, 99);
				
				composite_obj=logverifycomplex("ettest_serieslevel1fail3middle", result_obj,null, error_obj, global_realerror);
				callback(null, composite_obj)
		  } 
		);
	}

	// series, level 1, 3 tests: 1st passes, 2nd passes, 3rd fails
	exports.ettest_serieslevel1fail3last = 
	ettest_serieslevel1fail3last = 
	function ettest_serieslevel1fail3last(executeobject, callback) 
	{
		  if (!executeobject.command) {
		  executeobject.command={},
		  executeobject.command.environment={},
		  executeobject.command.environment.run={}}
		  executeobject.command.environment.run.type="series"
		  executeobject.command.environment.run.executelevel=1
		  executeobject.command.environment.platform='local'          
  
		  executeobject.command.environment.processfn="execute_function"
		  executeobject.serverfn="test_return_noerror_result"
		  executeobject.command.xrun=[
									  {"executethis": 'test_return_noerror_result'},
									  {"executethis": 'test_return_noerror_result'},
									  {"executethis": 'test_return_realerror_result'}
									  ]; 

		  var etEnvironment = new drienvironment(executeobject.command.environment)
		  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
		  {
		   
				proxyprinttodiv('actual result', result_obj, 99, true);                         
				proxyprinttodiv('expected result', null, 99, true);
				proxyprinttodiv('actual error',error_obj, 99);
				proxyprinttodiv('expected error', global_realerror, 99);
				
				composite_obj=logverifycomplex("ettest_serieslevel1fail3last", result_obj,null, error_obj, global_realerror);
				callback(null, composite_obj)
		  } 
		);
	}

// /*===============================================*/  
// /******* SECTION: group Level 0 			*********/
// /*===============================================*/

// A function for testing 'group' in 4 ways: 1 test that passes; 3 tests that pass; 
// 		3 tests, 2 of which pass and the middle fails; 3 tests, 2 of which pass and the last fails.
exports.ettest_grouplevel0 = 
ettest_grouplevel0 = 
function ettest_grouplevel0(executeobject, callback) 
{
	async.series(
	[   
	function (cb1) {ettest_grouplevel0pass1({}, function (err, res) {cb1(null, res)})},
	function (cb1) {ettest_grouplevel0pass3({}, function (err, res) {cb1(null, res)})},
	function (cb1) {ettest_grouplevel0fail3middle({}, function (err, res) {cb1(null, res)})},
	function (cb1) {ettest_grouplevel0fail3last({}, function (err, res) {cb1(null, res)})}
	],
	function (err, res) {
	  proxyprinttodiv('result from many array', res, 99);
	  callback(null,res)
	})
}

	// group, level 0, 1 test that passes
	exports.ettest_grouplevel0pass1 = 
	ettest_grouplevel0pass1 = 
	function ettest_grouplevel0pass1(executeobject, callback) 
	{
		  if (!executeobject.command) {
		  executeobject.command={},
		  executeobject.command.environment={},
		  executeobject.command.environment.run={}}
		  executeobject.command.environment.run.type="group"
		  executeobject.command.environment.run.executelevel=0
		  executeobject.command.environment.platform='local'          // used for server testing

		  executeobject.command.environment.processfn="execute_function"          // what function handles functions
		  executeobject.serverfn="test_return_notfound_result"        // so we can test fail local, pass server on same machine
		  executeobject.command.xrun={
									  "executethis": 'test_return_noerror_result'
											  }

		  var etEnvironment = new drienvironment(executeobject.command.environment)
		  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
		  {        
				var result_assertion={"a":"b", "env":executeobject.command.environment.platform};               
				proxyprinttodiv('expected error', null, 99);
				proxyprinttodiv('actual error', error_obj, 99);
				proxyprinttodiv('expected result', result_assertion, 99);
				proxyprinttodiv('actual result', result_obj, 99);

				composite_obj=logverifycomplex("ettest_grouplevel0pass1", result_obj, result_assertion, error_obj, null);
				proxyprinttodiv('composite_obj', composite_obj, 99);
				callback(null, composite_obj)
		  })
	}

	// group, level 0, 3 tests that pass
	exports.ettest_grouplevel0pass3 = 
	ettest_grouplevel0pass3 = 
	function ettest_grouplevel0pass3(executeobject, callback) 
	{
		  if (!executeobject.command) {
			executeobject.command={},
			executeobject.command.environment={},
			executeobject.command.environment.run={}
		  }
		  executeobject.command.environment.run.type="group"
		  executeobject.command.environment.run.executelevel=0
		  executeobject.command.environment.platform='local'          // used for server testing

		  executeobject.command.environment.processfn="execute_function"          // what function handles functions
		  executeobject.serverfn="test_return_notfound_result"        
		  var result_assertion = {"a":"b","env":executeobject.command.environment.platform}
			executeobject.command.xrun=[
									  {"executethis": 'test_return_noerror_result'},
									  {"executethis": 'test_return_noerror_result'},
									  {"executethis": 'test_return_noerror_result'}
									  ];

		  var expectedresult = [result_assertion, 
								result_assertion,
								result_assertion]
										
		  var etEnvironment = new drienvironment(executeobject.command.environment)
		  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
		  {
									
				proxyprinttodiv('expected error', null, 99);
				proxyprinttodiv('actual error', null, 99);
				proxyprinttodiv('expected result', expectedresult, 99);
				proxyprinttodiv('actual result', result_obj, 99);
				composite_obj=logverifycomplex("ettest_grouplevel0pass3", result_obj,expectedresult, error_obj, null);
				callback(null, composite_obj)
		  } 
		);
	}

	// group, level 0, 3 tests: 1st passes, 2nd fails, 3rd passes
	exports.ettest_grouplevel0fail3middle = 
	ettest_grouplevel0fail3middle = 
	function ettest_grouplevel0fail3middle(executeobject, callback) 
	{
		  if (!executeobject.command) {
		  executeobject.command={},
		  executeobject.command.environment={},
		  executeobject.command.environment.run={}}
		  executeobject.command.environment.run.type="group"
		  executeobject.command.environment.run.executelevel=0
		  executeobject.command.environment.platform='local'          
  
		  executeobject.command.environment.processfn="execute_function"
		  executeobject.serverfn="test_return_noerror_result"
		  executeobject.command.xrun=[
									  {"executethis": 'test_return_noerror_result'},
									  {"executethis": 'test_return_failnotfound_result'},
									  {"executethis": 'test_return_noerror_result'}
									  ]; 
		  //var expectedresult1 = {"a":"b","env":executeobject.command.environment.platform}  
		  //var expectedresult2 = {"x":"y","env":executeobject.command.environment.platform} 
		  //var expectedresult2 = {"a":"b","env":executeobject.command.environment.platform}      
		  //var expectedresult3 = {"a":"b","env":executeobject.command.environment.platform}	  
			//var result_assertion = [expectedresult1, expectedresult2, expectedresult3]
		  var etEnvironment = new drienvironment(executeobject.command.environment)
		  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
		  {
		   
				proxyprinttodiv('actual result', result_obj, 99, true);                         
				proxyprinttodiv('expected result', global_resulttable_assertion2, 99, true);
				proxyprinttodiv('actual error',error_obj, 99);
				proxyprinttodiv('expected error', global_failnotfound, 99);
				
				composite_obj=logverifycomplex("ettest_grouplevel0fail3middle", result_obj,global_resulttable_assertion2, error_obj, global_failnotfound);
				callback(null, composite_obj)
		  } 
		);
	}

	// group, level 0, 3 tests: 1st passes, 2nd passes, 3rd fails
	exports.ettest_grouplevel0fail3last = 
	ettest_grouplevel0fail3last = 
	function ettest_grouplevel0fail3last(executeobject, callback) 
	{
		  if (!executeobject.command) {
		  executeobject.command={},
		  executeobject.command.environment={},
		  executeobject.command.environment.run={}}
		  executeobject.command.environment.run.type="group"
		  executeobject.command.environment.run.executelevel=0
		  executeobject.command.environment.platform='local'          
  
		  executeobject.command.environment.processfn="execute_function"
		  executeobject.serverfn="test_return_noerror_result"
		  executeobject.command.xrun=[
									  {"executethis": 'test_return_noerror_result'},
									  {"executethis": 'test_return_noerror_result'},
									  {"executethis": 'test_return_failnotfound_result'}
									  ]; 

		  var etEnvironment = new drienvironment(executeobject.command.environment)
		  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
		  {
		   
				proxyprinttodiv('actual result', result_obj, 99, true);                         
				proxyprinttodiv('expected result', global_resulttable_assertion2, 99, true);
				proxyprinttodiv('actual error',error_obj, 99);
				proxyprinttodiv('expected error', global_failnotfound, 99);
				
				composite_obj=logverifycomplex("ettest_grouplevel0fail3last", result_obj,global_resulttable_assertion2, error_obj, global_failnotfound);
				callback(null, composite_obj)
		  } 
		);
	}

// /*===============================================*/  
// /******* SECTION: group Level 1 			*********/
// /*===============================================*/

// A function for testing 'group' at level 1 in 4 ways: 1 test that passes; 3 tests that pass; 
// 		3 tests, 2 of which pass and the middle fails; 3 tests, 2 of which pass and the last fails.
exports.ettest_grouplevel1 = 
ettest_grouplevel1 = 
function ettest_grouplevel1(executeobject, callback) 
{
	async.series(
	[   
	function (cb1) {ettest_grouplevel1pass1({}, function (err, res) {cb1(null, res)})},
	function (cb1) {ettest_grouplevel1pass3({}, function (err, res) {cb1(null, res)})},
	function (cb1) {ettest_grouplevel1fail3middle({}, function (err, res) {cb1(null, res)})},
	function (cb1) {ettest_grouplevel1fail3last({}, function (err, res) {cb1(null, res)})}
	],
	function (err, res) {
	  proxyprinttodiv('result from many array', res, 99);
	  callback(null,res)
	})  
}

	// group, level 1, 1 test that passes
	exports.ettest_grouplevel1pass1 = 
	ettest_grouplevel1pass1 = 
	function ettest_grouplevel1pass1(executeobject, callback) 
	{
		  if (!executeobject.command) {
		  executeobject.command={},
		  executeobject.command.environment={},
		  executeobject.command.environment.run={}}
		  executeobject.command.environment.run.type="group"
		  executeobject.command.environment.run.executelevel=1
		  executeobject.command.environment.platform='local'          // used for server testing

		  executeobject.command.environment.processfn="execute_function"          // what function handles functions
		  executeobject.serverfn="test_return_notfound_result"        // so we can test fail local, pass server on same machine
		  executeobject.command.xrun={
									  "executethis": 'test_return_noerror_result'
											  }

		  var etEnvironment = new drienvironment(executeobject.command.environment)
		  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
		  {        
				var result_assertion={"a":"b", "env":executeobject.command.environment.platform};               
				proxyprinttodiv('expected error', null, 99);
				proxyprinttodiv('actual error', error_obj, 99);
				proxyprinttodiv('expected result', result_assertion, 99);
				proxyprinttodiv('actual result', result_obj, 99);

				composite_obj=logverifycomplex("ettest_grouplevel1pass1", result_obj, result_assertion, error_obj, null);
				proxyprinttodiv('composite_obj', composite_obj, 99);
				callback(null, composite_obj)
		  })
	}

	// group, level 1, 3 tests that pass
	exports.ettest_grouplevel1pass3 = 
	ettest_grouplevel1pass3 = 
	function ettest_grouplevel1pass3(executeobject, callback) 
	{
		  if (!executeobject.command) 
		  {
			executeobject.command={};
			executeobject.command.environment={};
			executeobject.command.environment.run={};
		  }
		  executeobject.command.environment.run.type="group"
		  executeobject.command.environment.run.executelevel=1
		  executeobject.command.environment.platform='local'          // used for server testing

		  executeobject.command.environment.processfn="execute_function"          // what function handles functions
		  executeobject.serverfn="test_return_notfound_result"        // so we can test fail local, pass server on same machine
		  executeobject.command.xrun=[{"executethis": 'test_return_noerror_result'},
									  {"executethis": 'test_return_noerror_result'},
									  {"executethis": 'test_return_noerror_result'}]

		  var etEnvironment = new drienvironment(executeobject.command.environment)
		  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
		  {          
				var result={"a":"b", "env":executeobject.command.environment.platform};   
				var result_assertion=[result, result, result]           
				proxyprinttodiv('expected error', null, 99);
				proxyprinttodiv('actual error', error_obj, 99);
				proxyprinttodiv('expected result', result_assertion, 99);
				proxyprinttodiv('actual result', result_obj, 99);

				composite_obj=logverifycomplex("ettest_grouplevel1pass3", result_obj, result_assertion, error_obj, null);
				callback(null, composite_obj)
		  })
	}

	// group, level 1, 3 tests: 1st passes, 2nd fails, 3rd passes
	exports.ettest_grouplevel1fail3middle = 
	ettest_grouplevel1fail3middle = 
	function ettest_grouplevel1fail3middle(executeobject, callback) 
	{
		  if (!executeobject.command) {
		  executeobject.command={},
		  executeobject.command.environment={},
		  executeobject.command.environment.run={}}
		  executeobject.command.environment.run.type="group"
		  executeobject.command.environment.run.executelevel=1
		  executeobject.command.environment.platform='local'          
  
		  executeobject.command.environment.processfn="execute_function"
		  executeobject.serverfn="test_return_noerror_result"
		  executeobject.command.xrun=[
									  {"executethis": 'test_return_noerror_result'},
									  {"executethis": 'test_return_realerror_result'},
									  {"executethis": 'test_return_noerror_result'}
									  ]; 

		  var etEnvironment = new drienvironment(executeobject.command.environment)
		  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
		  {
		   
				proxyprinttodiv('actual result', result_obj, 99, true);                         
				proxyprinttodiv('expected result', global_resulttable_assertion2, 99, true);
				proxyprinttodiv('actual error',error_obj, 99);
				proxyprinttodiv('expected error', global_realerror, 99);
				
				composite_obj=logverifycomplex("ettest_grouplevel1fail3middle", result_obj,global_resulttable_assertion2, error_obj, global_realerror);
				callback(null, composite_obj)
		  } 
		);
	}

	// group, level 1, 3 tests: 1st passes, 2nd passes, 3rd fails
	exports.ettest_grouplevel1fail3last = 
	ettest_grouplevel1fail3last = 
	function ettest_grouplevel1fail3last(executeobject, callback) 
	{
		  if (!executeobject.command) {
		  executeobject.command={},
		  executeobject.command.environment={},
		  executeobject.command.environment.run={}}
		  executeobject.command.environment.run.type="group"
		  executeobject.command.environment.run.executelevel=1
		  executeobject.command.environment.platform='local'          
  
		  executeobject.command.environment.processfn="execute_function"
		  executeobject.serverfn="test_return_noerror_result"
		  executeobject.command.xrun=[
									  {"executethis": 'test_return_noerror_result'},
									  {"executethis": 'test_return_noerror_result'},
									  {"executethis": 'test_return_realerror_result'}
									  ]; 

		  var etEnvironment = new drienvironment(executeobject.command.environment)
		  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
		  {
		   
				proxyprinttodiv('actual result', result_obj, 99, true);                         
				proxyprinttodiv('expected result', global_resulttable_assertion2, 99, true);
				proxyprinttodiv('actual error',error_obj, 99);
				proxyprinttodiv('expected error', global_realerror, 99);
				
				composite_obj=logverifycomplex("ettest_grouplevel1fail3last", result_obj,global_resulttable_assertion2, error_obj, global_realerror);
				callback(null, composite_obj)
		  } 
		);
	}

// /*===============================================*/  
// /******* SECTION: waterfall Level 1 		*********/
// /*===============================================*/

// A function for testing 'waterfall' at level 1 in 4 ways: 1 test that passes; 3 tests that pass; 
// 		3 tests, 2 of which pass and the middle fails; 3 tests, 2 of which pass and the last fails.
exports.ettest_waterfalllevel1 = 
ettest_waterfalllevel1 = 
function ettest_waterfalllevel1(executeobject, callback) 
{
	async.series(
	[   
	function (cb1) {ettest_waterfalllevel1pass1({}, function (err, res) {cb1(null, res)})},
	function (cb1) {ettest_waterfalllevel1pass3({}, function (err, res) {cb1(null, res)})},
	function (cb1) {ettest_waterfalllevel1fail3middle({}, function (err, res) {cb1(null, res)})},
	function (cb1) {ettest_waterfalllevel1fail3last({}, function (err, res) {cb1(null, res)})}
	],
	function (err, res) {
	  proxyprinttodiv('result from many array', res, 99);
	  callback(null,res)
	})      
}

	// waterfall, level 1, 1 test that passes
	exports.ettest_waterfalllevel1pass1 = 
	ettest_waterfalllevel1pass1 = 
	function ettest_waterfalllevel1pass1(executeobject, callback) 
	{
		  if (!executeobject.command) {
		  executeobject.command={},
		  executeobject.command.environment={},
		  executeobject.command.environment.run={}}
		  executeobject.command.environment.run.type="waterfall"
		  executeobject.command.environment.run.executelevel=1
		  executeobject.command.environment.platform='local'          // used for server testing

		  executeobject.command.environment.processfn="execute_function"          // what function handles functions
		  executeobject.serverfn="test_return_notfound_result"        // so we can test fail local, pass server on same machine
		  executeobject.command.xrun={
									  "executethis": 'test_return_noerror_result'
											  }

		  var etEnvironment = new drienvironment(executeobject.command.environment)
		  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
		  {        
				var result_assertion={"a":"b", "env":executeobject.command.environment.platform};               
				proxyprinttodiv('expected error', null, 99);
				proxyprinttodiv('actual error', error_obj, 99);
				proxyprinttodiv('expected result', result_assertion, 99);
				proxyprinttodiv('actual result', result_obj, 99);

				composite_obj=logverifycomplex("ettest_waterfalllevel1pass1", result_obj, result_assertion, error_obj, null);
				proxyprinttodiv('composite_obj', composite_obj, 99);
				callback(null, composite_obj)
		  })
	}

	// waterfall, level 1, 3 tests that pass
	exports.ettest_waterfalllevel1pass3 = 
	ettest_waterfalllevel1pass3 = 
	function ettest_waterfalllevel1pass3(executeobject, callback) 
	{
		  if (!executeobject.command) 
		  {
			executeobject.command={};
			executeobject.command.environment={};
			executeobject.command.environment.run={};
		  }
		  executeobject.command.environment.run.type="waterfall"
		  executeobject.command.environment.run.executelevel=1
		  executeobject.command.environment.platform='local'          // used for server testing

		  executeobject.command.environment.processfn="execute_function"          // what function handles functions
		  executeobject.serverfn="test_return_notfound_result"        // so we can test fail local, pass server on same machine
		  executeobject.command.xrun=[{"executethis": 'test_return_noerror_result'},
									  {"executethis": 'test_return_noerror_result'},
									  {"executethis": 'test_return_noerror_result'}]

		  var etEnvironment = new drienvironment(executeobject.command.environment)
		  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
		  {          
				var result={"a":"b", "env":executeobject.command.environment.platform};   
				var result_assertion=result          
				proxyprinttodiv('expected error', null, 99);
				proxyprinttodiv('actual error', error_obj, 99);
				proxyprinttodiv('expected result', result_assertion, 99);
				proxyprinttodiv('actual result', result_obj, 99);

				composite_obj=logverifycomplex("ettest_waterfalllevel1pass3", result_obj, result_assertion, error_obj, null);
				callback(null, composite_obj)
		  })
	}

	// waterfall, level 1, 3 tests: 1st fails, 2nd passes, 3rd fails
	exports.ettest_waterfalllevel1fail3middle = 
	ettest_waterfalllevel1fail3middle = 
	function ettest_waterfalllevel1fail3middle(executeobject, callback) 
	{
		  if (!executeobject.command) {
		  executeobject.command={},
		  executeobject.command.environment={},
		  executeobject.command.environment.run={}}
		  executeobject.command.environment.run.type="waterfall"
		  executeobject.command.environment.run.executelevel=1
		  executeobject.command.environment.platform='local'          
  
		  executeobject.command.environment.processfn="execute_function"
		  executeobject.serverfn="test_return_noerror_result"
		  executeobject.command.xrun=[
									  {"executethis": 'test_return_noerror_result'},
									  {"executethis": 'test_return_failnotfound_result'},
									  {"executethis": 'test_return_noerror_result'}
									  ]; 

		  var etEnvironment = new drienvironment(executeobject.command.environment)
		  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
		  {
		   
				proxyprinttodiv('actual result', result_obj, 99, true);                         
				proxyprinttodiv('expected result', null, 99, true);
				proxyprinttodiv('actual error',error_obj, 99);
				proxyprinttodiv('expected error', global_failnotfound, 99);
				
				composite_obj=logverifycomplex("ettest_waterfalllevel1fail3middle", result_obj,null, error_obj, global_failnotfound);
				callback(null, composite_obj)
		  } 
		);
	}

	// waterfall, level 1, 3 tests: 1st passes, 2nd passes, 3rd fails
	exports.ettest_waterfalllevel1fail3last = 
	ettest_waterfalllevel1fail3last = 
	function ettest_waterfalllevel1fail3last(executeobject, callback) 
	{
		  if (!executeobject.command) {
		  executeobject.command={},
		  executeobject.command.environment={},
		  executeobject.command.environment.run={}}
		  executeobject.command.environment.run.type="waterfall"
		  executeobject.command.environment.run.executelevel=1
		  executeobject.command.environment.platform='local'          
  
		  executeobject.command.environment.processfn="execute_function"
		  executeobject.serverfn="test_return_noerror_result"
		  executeobject.command.xrun=[
									  {"executethis": 'test_return_noerror_result'},
									  {"executethis": 'test_return_noerror_result'},
									  {"executethis": 'test_return_realerror_result'}
									  ]; 

		  var etEnvironment = new drienvironment(executeobject.command.environment)
		  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
		  {
		   
				proxyprinttodiv('actual result', result_obj, 99, true);                         
				proxyprinttodiv('expected result', null, 99, true);
				proxyprinttodiv('actual error',error_obj, 99);
				proxyprinttodiv('expected error', global_realerror, 99);
				
				composite_obj=logverifycomplex("ettest_waterfalllevel1fail3last", result_obj,null, error_obj, global_realerror);
				callback(null, composite_obj)
		  } 
		);
	}

// /*===============================================*/  
// /******* SECTION: runfirstone Level 1 	*********/
// /*===============================================*/

// A function for testing 'runfirstone' at level 1 in 4 ways: 1 test that passes; 3 tests that pass; 
// 		3 tests, 2 of which pass and the middle fails; 3 tests, 2 of which pass and the last fails.
exports.ettest_runfirstonelevel1 = 
ettest_runfirstonelevel1 = 
function ettest_runfirstonelevel1(executeobject, callback) 
{
	async.series(
	[   
	function (cb1) {ettest_runfirstonelevel1pass1({}, function (err, res) {cb1(null, res)})},
	function (cb1) {ettest_runfirstonelevel1pass3({}, function (err, res) {cb1(null, res)})},
	function (cb1) {ettest_runfirstonelevel1fail3middle({}, function (err, res) {cb1(null, res)})},
	function (cb1) {ettest_runfirstonelevel1fail3last({}, function (err, res) {cb1(null, res)})}
	],
	function (err, res) {
	  proxyprinttodiv('result from many array', res, 99);
	  callback(null,res)
	})       
}

	// runfirstone, level 1, 1 test that passes
	exports.ettest_runfirstonelevel1pass1 = 
	ettest_runfirstonelevel1pass1 = 
	function ettest_runfirstonelevel1pass1(executeobject, callback) 
	{
		  if (!executeobject.command) {
		  executeobject.command={},
		  executeobject.command.environment={},
		  executeobject.command.environment.run={}}
		  executeobject.command.environment.run.type="runfirstone"
		  executeobject.command.environment.run.executelevel=1
		  executeobject.command.environment.platform='local'          // used for server testing

		  executeobject.command.environment.processfn="execute_function"          // what function handles functions
		  executeobject.serverfn="test_return_notfound_result"        // so we can test fail local, pass server on same machine
		  executeobject.command.xrun={
									  "executethis": 'test_return_noerror_result'
											  }

		  var etEnvironment = new drienvironment(executeobject.command.environment)
		  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
		  {        
				var result_assertion={"a":"b", "env":executeobject.command.environment.platform};               
				proxyprinttodiv('expected error', null, 99);
				proxyprinttodiv('actual error', error_obj, 99);
				proxyprinttodiv('expected result', result_assertion, 99);
				proxyprinttodiv('actual result', result_obj, 99);

				composite_obj=logverifycomplex("ettest_runfirstonelevel1pass1", result_obj, result_assertion, error_obj, null);
				proxyprinttodiv('composite_obj', composite_obj, 99);
				callback(null, composite_obj)
		  })
	}

	// runfirstone, level 1, 3 tests that pass
	exports.ettest_runfirstonelevel1pass3 = 
	ettest_runfirstonelevel1pass3 = 
	function ettest_runfirstonelevel1pass3(executeobject, callback) 
	{
		  if (!executeobject.command) 
		  {
			executeobject.command={};
			executeobject.command.environment={};
			executeobject.command.environment.run={};
		  }
		  executeobject.command.environment.run.type="runfirstone"
		  executeobject.command.environment.run.executelevel=1
		  executeobject.command.environment.platform='local'          // used for server testing

		  executeobject.command.environment.processfn="execute_function"          // what function handles functions
		  executeobject.serverfn="test_return_notfound_result"        // so we can test fail local, pass server on same machine
		  executeobject.command.xrun=[{"executethis": 'test_return_noerror_result'},
									  {"executethis": 'test_return_noerror_result'},
									  {"executethis": 'test_return_noerror_result'}]

		  var etEnvironment = new drienvironment(executeobject.command.environment)
		  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
		  {          
				var result={"a":"b", "env":executeobject.command.environment.platform};   
				var result_assertion=result           
				proxyprinttodiv('expected error', null, 99);
				proxyprinttodiv('actual error', error_obj, 99);
				proxyprinttodiv('expected result', result_assertion, 99);
				proxyprinttodiv('actual result', result_obj, 99);

				composite_obj=logverifycomplex("ettest_runfirstonelevel1pass3", result_obj, result_assertion, error_obj, null);
				callback(null, composite_obj)
		  })
	}

	// runfirstone, level 1, 3 tests: 1st passes, 2nd fails, 3rd passes
	exports.ettest_runfirstonelevel1fail3middle = 
	ettest_runfirstonelevel1fail3middle = 
	function ettest_runfirstonelevel1fail3middle(executeobject, callback) 
	{
		  if (!executeobject.command) {
		  executeobject.command={},
		  executeobject.command.environment={},
		  executeobject.command.environment.run={}}
		  executeobject.command.environment.run.type="runfirstone"
		  executeobject.command.environment.run.executelevel=1
		  executeobject.command.environment.platform='local'          
  
		  executeobject.command.environment.processfn="execute_function"
		  executeobject.serverfn="test_return_noerror_result2"
		  executeobject.command.xrun=[
									  {"executethis": 'test_return_realerror_result'},
									  {"executethis": 'test_return_failnotfound_result'},
									  {"executethis": 'test_return_noerror_result'}
									  ]; 

		  var etEnvironment = new drienvironment(executeobject.command.environment)
		  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
		  {
				var result={"a":"b", "env":executeobject.command.environment.platform};   
				var result_assertion=result
				proxyprinttodiv('actual result', result_obj, 99, true);                         
				proxyprinttodiv('expected result', result_assertion, 99, true);
				proxyprinttodiv('actual error',error_obj, 99);
				proxyprinttodiv('expected error', null, 99);
				
				composite_obj=logverifycomplex("ettest_runfirstonelevel1fail3middle", result_obj,result_assertion, error_obj, null);
				callback(null, composite_obj)
		  } 
		);
	}

	// runfirstone, level 1, 1st passes, 2nd passes, 3rd fails
	exports.ettest_runfirstonelevel1fail3last = 
	ettest_runfirstonelevel1fail3last = 
	function ettest_runfirstonelevel1fail3last(executeobject, callback) 
	{
		  if (!executeobject.command) {
		  executeobject.command={},
		  executeobject.command.environment={},
		  executeobject.command.environment.run={}}
		  executeobject.command.environment.run.type="runfirstone"
		  executeobject.command.environment.run.executelevel=1
		  executeobject.command.environment.platform='local'          
  
		  executeobject.command.environment.processfn="execute_function"
		  executeobject.serverfn="test_return_noerror_result"
		  executeobject.command.xrun=[
									  {"executethis": 'test_return_failnotfound_result'},
									  {"executethis": 'test_return_failnotfound_result'},
									  {"executethis": 'test_return_realerror_result'}
									  ]; 

		  var etEnvironment = new drienvironment(executeobject.command.environment)
		  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
		  {
		   
				proxyprinttodiv('actual result', result_obj, 99, true);                         
				proxyprinttodiv('expected result', null, 99, true);
				proxyprinttodiv('actual error',error_obj, 99);
				proxyprinttodiv('expected error', global_realerror, 99);
				
				composite_obj=logverifycomplex("ettest_runfirstonelevel1fail3last", result_obj,null, error_obj, global_realerror);
				callback(null, composite_obj)
		  } 
		);
	}

// /*===============================================*/  
// /******* SECTION: runfirstwaterfall Level 1 	*********/
// /*===============================================*/

// A function for testing 'runfirstonewaterfall' at level 1 in 4 ways: 1 test that passes; 3 tests that pass; 
// 		3 tests, 2 of which pass and the middle fails; 3 tests, 2 of which pass and the last fails.
exports.ettest_runfirstwaterfalllevel1 = 
ettest_runfirstwaterfalllevel1 = 
function ettest_runfirstwaterfalllevel1(executeobject, callback) 
{
	async.series(
	[   
	function (cb1) {ettest_runfirstwaterfalllevel1pass1({}, function (err, res) {cb1(null, res)})},
	function (cb1) {ettest_runfirstwaterfalllevel1pass3({}, function (err, res) {cb1(null, res)})},
	function (cb1) {ettest_runfirstwaterfalllevel1fail3middle({}, function (err, res) {cb1(null, res)})},
	function (cb1) {ettest_runfirstwaterfalllevel1fail3last({}, function (err, res) {cb1(null, res)})}
	],
	function (err, res) {
	  proxyprinttodiv('result from many array', res, 99);
	  callback(null,res)
	})    
}

	// runfirstwaterfall, level 1, 1 test that passes
	exports.ettest_runfirstwaterfalllevel1pass1 = 
	ettest_runfirstwaterfalllevel1pass1 = 
	function ettest_runfirstwaterfalllevel1pass1(executeobject, callback) 
	{
		  if (!executeobject.command) {
		  executeobject.command={},
		  executeobject.command.environment={},
		  executeobject.command.environment.run={}}
		  executeobject.command.environment.run.type="runfirstonewaterfall"
		  executeobject.command.environment.run.executelevel=1
		  executeobject.command.environment.platform='local'          
  
		  executeobject.command.environment.processfn="execute_function"
		  executeobject.serverfn="test_return_noerror_result"
		  executeobject.command.xrun={"executethis": 'test_return_noerror_result'}  
		  var etEnvironment = new drienvironment(executeobject.command.environment)
		  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
		  {
				var result={"a":"b","env":"local"}
				proxyprinttodiv('actual result', result_obj, 99);                         
				proxyprinttodiv('expected result', result, 99);
				proxyprinttodiv('actual error',error_obj, 99);
				proxyprinttodiv('expected error', null, 99);
				
				composite_obj=logverifycomplex("ettest_runfirstwaterfalllevel1pass1", result_obj,result, error_obj, null);
				callback(null, composite_obj)
		  } 
		);
	}

	// runfirstonewaterfall, level 1, 3 tests that pass
	exports.ettest_runfirstwaterfalllevel1pass3 = 
	ettest_runfirstwaterfalllevel1pass3 = 
	function ettest_runfirstwaterfalllevel1pass3(executeobject, callback) 
	{
		  if (!executeobject.command) 
		  {
			executeobject.command={};
			executeobject.command.environment={};
			executeobject.command.environment.run={};
		  }
		  executeobject.command.environment.run.type="runfirstonewaterfall"
		  executeobject.command.environment.run.executelevel=1
		  executeobject.command.environment.platform='local'          // used for server testing

		  executeobject.command.environment.processfn="execute_function"          // what function handles functions
		  executeobject.serverfn="test_return_notfound_result"        // so we can test fail local, pass server on same machine
		  executeobject.command.xrun=[{"executethis": 'test_return_noerror_result'},
									  {"executethis": 'test_return_noerror_result'},
									  {"executethis": 'test_return_noerror_result'}]

		  var etEnvironment = new drienvironment(executeobject.command.environment)
		  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
		  {          
				var result={"a":"b", "env":executeobject.command.environment.platform};   
				var result_assertion=result           
				proxyprinttodiv('expected error', null, 99);
				proxyprinttodiv('actual error', error_obj, 99);
				proxyprinttodiv('expected result', result_assertion, 99);
				proxyprinttodiv('actual result', result_obj, 99);

				composite_obj=logverifycomplex("ettest_runfirstwaterfalllevel1pass3", result_obj, result_assertion, error_obj, null);
				callback(null, composite_obj)
		  })
	}

	// runfirstonewaterfall, level 1, 3 tests: 1st passes, 2nd fails, 3rd passes
	exports.ettest_runfirstwaterfalllevel1fail3middle = 
	ettest_runfirstwaterfalllevel1fail3middle = 
	function ettest_runfirstwaterfalllevel1fail3middle(executeobject, callback) 
	{
		  if (!executeobject.command) {
		  executeobject.command={},
		  executeobject.command.environment={},
		  executeobject.command.environment.run={}}
		  executeobject.command.environment.run.type="runfirstonewaterfall"
		  executeobject.command.environment.run.executelevel=1
		  executeobject.command.environment.platform='local'          
  
		  executeobject.command.environment.processfn="execute_function"
		  executeobject.serverfn="test_return_noerror_result"
		  executeobject.command.xrun=[
									  {"executethis": 'test_return_realerror_result'},
									  {"executethis": 'test_return_failnotfound_result'},
									  {"executethis": 'test_return_noerror_result'}
									  ]; 

		  var etEnvironment = new drienvironment(executeobject.command.environment)
		  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
		  {
				var result={"a":"b", "env":executeobject.command.environment.platform};   
				var result_assertion=result
				proxyprinttodiv('actual result', result_obj, 99, true);                         
				proxyprinttodiv('expected result', result_assertion, 99, true);
				proxyprinttodiv('actual error',error_obj, 99);
				proxyprinttodiv('expected error', null, 99);
				
				composite_obj=logverifycomplex("ettest_runfirstwaterfalllevel1fail3middle", result_obj,result_assertion, error_obj, null);
				callback(null, composite_obj)
		  } 
		);
	}

	// runfirstonewaterfall, level 1, 3 tests: 1st passes, 2nd passes, 3rd fails
	exports.ettest_runfirstwaterfalllevel1fail3last = 
	ettest_runfirstwaterfalllevel1fail3last = 
	function ettest_runfirstwaterfalllevel1fail3last(executeobject, callback) 
	{
		  if (!executeobject.command) {
		  executeobject.command={},
		  executeobject.command.environment={},
		  executeobject.command.environment.run={}}
		  executeobject.command.environment.run.type="runfirstonewaterfall"
		  executeobject.command.environment.run.executelevel=1
		  executeobject.command.environment.platform='local'          
  
		  executeobject.command.environment.processfn="execute_function"
		  executeobject.serverfn="test_return_noerror_result"
		  executeobject.command.xrun=[
									  {"executethis": 'test_return_failnotfound_result'},
									  {"executethis": 'test_return_failnotfound_result'},
									  {"executethis": 'test_return_realerror_result'}
									  ]; 

		  var etEnvironment = new drienvironment(executeobject.command.environment)
		  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
		  {
				proxyprinttodiv('actual result', result_obj, 99, true);                         
				proxyprinttodiv('expected result', null, 99, true);
				proxyprinttodiv('actual error',error_obj, 99);
				proxyprinttodiv('expected error', global_realerror, 99);
				
				composite_obj=logverifycomplex("ettest_runfirstwaterfalllevel1fail3last", result_obj,null, error_obj, global_realerror);
				callback(null, composite_obj)
		  } 
		);
	}

// /*===============================================*/  
// /******* SECTION: what to do 	*********/
// /*===============================================*/

// A function for testing 'what_to_do_list' in 3 ways: 1 test that just calls execute_function;
//		1 test that calls create_what_to_do_list directly; and 1 test that simulates making a server call
exports.ettest_whattodo = 
ettest_whattodo = 
function ettest_whattodo(executeobject, callback) 
{
	async.series(
	[   
	function (cb1) {ettest_series1passef2({}, function (err, res) {cb1(null, res)})}, // uses create_what_to_do_list and relies on execute_function
	function (cb1) {ettest_series1passep2({}, function (err, res) {cb1(null, res)})},   // uses create_what_to_do_list and relies on execute_parameter
	function (cb1) {ettest_series_S_1pass({}, function (err, res) {cb1(null, res)})} // simulate server call. if platform = server then when in fn1 go to fn2
	],
	function (err, res) {
	  proxyprinttodiv('result from many array', res, 99);
	  callback(null,res)
	})   
}

	// uses create_what_to_do_list and relies on execute_function
	exports.ettest_series1passef2 = 
	ettest_series1passef2 = 
	function ettest_series1passef2(executeobject, callback) 
	{
		  if (!executeobject.command) {
		  executeobject.command={},
		  executeobject.command.environment={},
		  executeobject.command.environment.run={}}
		  executeobject.command.environment.run.type="series"
		  executeobject.command.environment.run.executelevel=0
		  executeobject.command.environment.platform='local'
    
  
		  executeobject.command.environment.processfn="execute_function"          
		  executeobject.serverfn="test_return_noerror_result2"        
		  executeobject.command.xrun={
									  "executethis": 'test_return_noerror_result'
											  }

		  var etEnvironment = new drienvironment(executeobject.command.environment)
		  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
		  {        
				var result_assertion={"a":"b", "env":executeobject.command.environment.platform};               
				proxyprinttodiv('expected error', null, 99);
				proxyprinttodiv('actual error', error_obj, 99);
				proxyprinttodiv('expected result', result_assertion, 99);
				proxyprinttodiv('actual result', result_obj, 99);

				composite_obj=logverifycomplex("ettest_series1passef2", result_obj, result_assertion, error_obj, null);
				proxyprinttodiv('composite_obj', composite_obj, 99);
				callback(null, composite_obj)
		  })
	}

	// uses create_what_to_do_list and relies on execute_parameter
	exports.ettest_series1passep2 = 
	ettest_series1passep2 = 
	function ettest_series1passep2(executeobject, callback) 
	{
		  if (!executeobject.command) {
		  executeobject.command={},
		  executeobject.command.environment={},
		  executeobject.command.environment.run={}}
		  executeobject.command.environment.run.type="series"
		  executeobject.command.environment.run.executelevel=0
		  executeobject.command.environment.platform='local'
 
																	   // the function as if it was a name of a function

		  executeobject.command.environment.processfn="create_what_to_do_list"         
		  executeobject.serverfn="test_return_noerror_result2"        
		  executeobject.command.xrun={
									  "executethis": 'a',
													  "a"          : "test_return_noerror_result"
									 }

		  var etEnvironment = new drienvironment(executeobject.command.environment)
		  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
		  {        
				var result_assertion={"a":"b", "env":executeobject.command.environment.platform};               
				proxyprinttodiv('expected error', null, 99);
				proxyprinttodiv('actual error', error_obj, 99);
				proxyprinttodiv('expected result', result_assertion, 99);
				proxyprinttodiv('actual result', result_obj, 99);

				composite_obj=logverifycomplex("ettest_series1passep2", result_obj, result_assertion, error_obj, null);
				proxyprinttodiv('composite_obj', composite_obj, 99);
				callback(null, composite_obj)
		  })
	}

	// simulate server call. if platform = server then when in fn1 go to fn2
	exports.ettest_series_S_1pass  = 
	ettest_series_S_1pass = 
	function ettest_series_S_1pass(executeobject, callback) 
	{
	   if (!executeobject.command) {
	   executeobject.command={},
	   executeobject.command.environment={},
	   executeobject.command.environment.run={}}
	   executeobject.command.environment.run.type="series"
	   executeobject.command.environment.run.executelevel=0
	   executeobject.command.environment.platform='server'   // within test this will redirect to second function       
  
	   executeobject.command.environment.processfn="execute_function"
	   executeobject.serverfn="test_return_noerror_result"  // this function should execute
	   executeobject.command.xrun={"executethis": 'test_return_realerror_result'}

	   var result_assertion = {"a":"b","env":executeobject.command.environment.platform}    
	   var expectedresult = result_assertion
	   var etEnvironment = new drienvironment(executeobject.command.environment)
	   etEnvironment.execute(executeobject, function (error_obj, result_obj) 
	   {
								
			 proxyprinttodiv('expected error', null, 99);
			 proxyprinttodiv('actual error', null, 99);
			 proxyprinttodiv('expected result', expectedresult, 99);
			 proxyprinttodiv('actual result', result_obj, 99);
			 composite_obj=logverifycomplex("ettest_series_S_1pass", result_obj,expectedresult, error_obj, null);
			 callback(null, composite_obj)
	   } 
	 );
	}



// /*===============================================*/  
// /******* SECTION: how to do 	*********/
// /*===============================================*/
// how to do / server emulation calls
// simulate server call. if platform = server then when in fn1 go to fn2
//
//
exports.ettest_howtodo = 
ettest_howtodo = 
function ettest_howtodo(executeobject, callback) 
{
	async.series(
	[   
	function (cb1) {ettest_runfirstwaterfall3pass({}, function (err, res) {cb1(null, res)})},
	function (cb1) {ettest_serieslevel0pass1server({}, function (err, res) {cb1(null, res)})}, // simulate server call. if platform = server then when in fn1 go to fn2
	function (cb1) {ettest_serieslevel0pass3server({}, function (err, res) {cb1(null, res)})}, // simulate server call. if platform = server then when in fn1 go to fn2
	function (cb1) {ettest_series1passnormalgw({}, function (err, res) {cb1(null, res)})}, // simulate server call. if platform = server then when in fn1 go to fn2
	function (cb1) {ettest_grouplevel0pass3server({}, function (err, res) {cb1(null, res)})} // simulate server call. if platform = server then execute serverfn
	],
	function (err, res) {
	  proxyprinttodiv('result from many array', res, 99);
	  callback(null,res)
	})   
}

	exports.ettest_runfirstwaterfall3pass = 
	ettest_runfirstwaterfall3pass = 
	function ettest_runfirstwaterfall3pass(executeobject, callback) 
	{
		  if (!executeobject.command) {
		  executeobject.command={},
		  executeobject.command.environment={},
		  executeobject.command.environment.run={}}
		  executeobject.command.environment.run.executelevel=0
		  executeobject.command.environment.platform='local'          
		  executeobject.serverfn={"executethis": "test_return_noerror_result"}
		  executeobject.command.xrun=[
										{"executethis": "test_return_realerror_result"}]
		  var etEnvironment = new drienvironment(executeobject.command.environment)
		  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
		  {
			var result_assertion={"a":"b", "env":"server"}; 
				proxyprinttodiv('actual result', result_obj, 99, true, true);                         
				proxyprinttodiv('expected result', result_assertion, 99, true);
				proxyprinttodiv('actual error',error_obj, 99, true);
				proxyprinttodiv('expected error', null, 99, true);
				
				composite_obj=logverifycomplex("ettest_runfirstwaterfall3pass", result_obj,result_assertion, error_obj, null);
				callback(null, composite_obj)
		  } 
		);
	}


	exports.ettest_serieslevel0pass1server = 
	ettest_serieslevel0pass1server = 
	function ettest_serieslevel0pass1server(executeobject, callback) 
	{
		  if (!executeobject.command) 
		  {
			executeobject.command={};
			executeobject.command.environment={};
			executeobject.command.environment.run={};
		  }
		  executeobject.command.environment.run.type="series"
		  executeobject.command.environment.run.executelevel=0
		  executeobject.command.environment.platform='local'

		  //executeobject.command.environment.processfn="execute_function"
		  //executeobject.serverfn="test_return_noerror_result2"
		  executeobject.command.xrun=[{
									"executethis": 'test_return_realerror_result',
									"serverfn": "test_return_noerror_result2"
									}]

		  var etEnvironment = new drienvironment(executeobject.command.environment)
		  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
		  {
				//var result_assertion=[result, result, result]           
				var result_assertion={"x":"y", "env":"server"};          
				proxyprinttodiv('expected error', null, 99);
				proxyprinttodiv('actual error', error_obj, 99);
				proxyprinttodiv('expected result', result_assertion, 99);
				proxyprinttodiv('actual result', result_obj, 99);

				composite_obj=logverifycomplex("ettest_serieslevel0pass1server", result_obj, result_assertion, error_obj, null);
				callback(null, composite_obj)
		  })
	}








	// gets stuck in infinite loop
	//series
	exports.ettest_serieslevel0pass3server = 
	ettest_serieslevel0pass3server = 
	function ettest_serieslevel0pass3server(executeobject, callback) 
	{
		  if (!executeobject.command) 
		  {
			executeobject.command={};
			executeobject.command.environment={};
			executeobject.command.environment.run={};
		  }
		  executeobject.command.environment.run.type="series"
		  executeobject.command.environment.run.executelevel=0
		  executeobject.command.environment.platform='local'

		  //executeobject.command.environment.processfn="execute_function"
		  //executeobject.serverfn="test_return_noerror_result2"
		  executeobject.command.xrun=[{
									"executethis": 'test_return_realerror_result',
									"serverfn": "test_return_noerror_result2"
									},
									{
									"executethis": 'test_return_notfound_result',
									"serverfn": "test_return_noerror_result3"
									},
									{
									"executethis": 'test_return_failnotfound_result',
									"serverfn": "test_return_noerror_result4"
									}]

		  var etEnvironment = new drienvironment(executeobject.command.environment)
		  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
		  {
				//var result_assertion=[result, result, result]           
				var result_assertion=[{"x":"y", "env":"server"},{"x3":"y3","env":"server"},{"x4":"y4","env":"server"}];          
				proxyprinttodiv('expected error', null, 99);
				proxyprinttodiv('actual error', error_obj, 99);
				proxyprinttodiv('expected result', result_assertion, 99);
				proxyprinttodiv('actual result', result_obj, 99);

				composite_obj=logverifycomplex("ettest_serieslevel0pass3server", result_obj, result_assertion, error_obj, null);
				callback(null, composite_obj)
		  })
	}

	//group
	exports.ettest_grouplevel0pass3server = 
	ettest_grouplevel0pass3server = 
	function ettest_grouplevel0pass3server(executeobject, callback) 
	{
		  if (!executeobject.command) 
		  {
			executeobject.command={};
			executeobject.command.environment={};
			executeobject.command.environment.run={};
		  }
		  executeobject.command.environment.run.type="group"
		  executeobject.command.environment.run.executelevel=0
		  executeobject.command.environment.platform='local'

		  //executeobject.command.environment.processfn="execute_function"
		  //executeobject.serverfn="test_return_noerror_result2"
		  executeobject.command.xrun=[{
									"executethis": 'test_return_noerror_result',
									"serverfn": "test_return_noerror_result2"
									},
									{
									"executethis": 'test_return_notfound_result',
									"serverfn": "test_return_noerror_result3"
									},
									{
									"executethis": 'test_return_noerror_result4',
									"serverfn": "test_return_noerror_result5"
									}]

		  var etEnvironment = new drienvironment(executeobject.command.environment)
		  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
		  {
				//var result_assertion=[result, result, result]           
				var result_assertion=[{"a":"b", "env":"local"},{"x3":"y3","env":"server"},{"x4":"y4","env":"local"}];          
				proxyprinttodiv('expected error', null, 99);
				proxyprinttodiv('actual error', error_obj, 99);
				proxyprinttodiv('expected result', result_assertion, 99);
				proxyprinttodiv('actual result', result_obj, 99);

				composite_obj=logverifycomplex("ettest_grouplevel0pass3server", result_obj, result_assertion, error_obj, null);
				callback(null, composite_obj)
		  })
	}

		//group
	exports.ettest_grouplevel0pass1server = 
	ettest_grouplevel0pass1server = 
	function ettest_grouplevel0pass1server(executeobject, callback) 
	{
		  if (!executeobject.command) 
		  {
			executeobject.command={};
			executeobject.command.environment={};
			executeobject.command.environment.run={};
		  }
		  executeobject.command.environment.run.type="group"
		  executeobject.command.environment.run.executelevel=0
		  executeobject.command.environment.platform='local'

		  //executeobject.command.environment.processfn="execute_function"
		  //executeobject.serverfn="test_return_noerror_result2"
		  executeobject.command.xrun=[{
									"executethis": 'test_return_realerror_result',
									"serverfn": "test_return_noerror_result2"
									},
									{
									"executethis": 'test_return_noerror_result3',
									"serverfn": "test_return_noerror_result4"
									},
									{
									"executethis": 'test_return_noerror_result5',
									"serverfn": "test_return_noerror_result6"
									}]

		  var etEnvironment = new drienvironment(executeobject.command.environment)
		  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
		  {
				//var result_assertion=[result, result, result]           
				var result_assertion=[{"a":"b", "env":"local"},{"x3":"y3","env":"server"},{"x4":"y4","env":"local"}];          
				proxyprinttodiv('expected error', null, 99);
				proxyprinttodiv('actual error', error_obj, 99);
				proxyprinttodiv('expected result', result_assertion, 99);
				proxyprinttodiv('actual result', result_obj, 99);

				composite_obj=logverifycomplex("ettest_grouplevel0pass1server", result_obj, result_assertion, error_obj, null);
				callback(null, composite_obj)
		  })
	}

	// test executegetwid from the inside of howtodolist and whattodolist
	// create a wid called callpassfunction ... this wid, if called (i.e. et:callpassfunction) will execute "test_return_noerror_result" 
	// system will creat howtodolist, then when starting to execute will create whattodolist
	// then within whattodo it should not find fn, nor parameter, but it should be able to executegetwid
	exports.ettest_series1passnormalgw = 
	ettest_series1passnormalgw = 
	function ettest_series1passnormalgw(executeobject, callback) 
	{
	  // executethis: test_return_noerror_result
	  updatewid({
		  "executethis":"updatewid",
		  "wid":"callpassfunction",
		  "metadata":{"method":"defaultdto"},
		  "addthis.executethis":"test_return_noerror_result"     // note save it with addthis in front
		  },                                                     // this will execute "test_return_noerror_result" 
		  function (err,res) 
		  {

			if (!executeobject.command) 
			{
			  executeobject.command={},
			  executeobject.command.environment={},
			  executeobject.command.environment.run={}}
			  executeobject.command.environment.run.type="series"
			  executeobject.command.environment.run.executelevel=0
			  executeobject.command.environment.platform='local'
   
  
			  //executeobject.command.environment.processfn="execute_function"          
			  executeobject.serverfn="test_return_noerror_result2"        
			  executeobject.command.xrun={
										  "executethis": 'callpassfunction'
												  }

			  var etEnvironment = new drienvironment(executeobject.command.environment)
			  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
			  {        
					var result_assertion={"a":"b", "env":executeobject.command.environment.platform};               
					proxyprinttodiv('expected error', null, 99);
					proxyprinttodiv('actual error', error_obj, 99);
					proxyprinttodiv('expected result', result_assertion, 99);
					proxyprinttodiv('actual result', result_obj, 99);

					composite_obj=logverifycomplex("ettest_series1passnormalgw", result_obj, result_assertion, error_obj, null);
					proxyprinttodiv('composite_obj', composite_obj, 99);
					callback(null, composite_obj)
			  })
		}
	  );
	}

// /*===============================================*/  
// /******* SECTION: misc series LEVEL 1 	*********/
// /*===============================================*/
// misc
exports.ettest_executemisc = 
ettest_executemisc = 
function ettest_executemisc(executeobject, callback)
{
	async.series(
	[   
	function (cb1) {ettest_series1passef({}, function (err, res) {cb1(null, res)})}, // testing executefn by itself
	function (cb1) {ettest_series1passep({}, function (err, res) {cb1(null, res)})}, // test of execute parameter
	function (cb1) {ettest_series1passegw({}, function (err, res) {cb1(null, res)})}, // test of executegetwid -- save a wid then execute it
	function (cb1) {ettest_series1passegw2({}, function (err, res) {cb1(null, res)})} // test of executegetwid -- save a wid then execute it
	],
	function (err, res) {
		proxyprinttodiv('result from many array', res, 99);
		callback(null,res)
	})     
}

	// testing executefn by itself
	exports.ettest_series1passef = 
	ettest_series1passef = 
	function ettest_series1passef(executeobject, callback) 
	{
		  if (!executeobject.command) {
		  executeobject.command={},
		  executeobject.command.environment={},
		  executeobject.command.environment.run={}}
		  executeobject.command.environment.run.type="series"
		  executeobject.command.environment.run.executelevel=0
		  executeobject.command.environment.platform='local'
    
  
		  executeobject.command.environment.processfn="execute_function"          
		  executeobject.serverfn="test_return_noerror_result2"        
		  executeobject.command.xrun={
									  "executethis": 'test_return_noerror_result'
											  }

		  var etEnvironment = new drienvironment(executeobject.command.environment)
		  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
		  {        
				var result_assertion={"a":"b", "env":executeobject.command.environment.platform};               
				proxyprinttodiv('expected error', null, 99);
				proxyprinttodiv('actual error', error_obj, 99);
				proxyprinttodiv('expected result', result_assertion, 99);
				proxyprinttodiv('actual result', result_obj, 99);

				composite_obj=logverifycomplex("ettest_series1passef", result_obj, result_assertion, error_obj, null);
				proxyprinttodiv('composite_obj', composite_obj, 99);
				callback(null, composite_obj)
		  })
	}

	// test of execute parameter
	exports.ettest_series1passep = 
	ettest_series1passep = 
	function ettest_series1passep(executeobject, callback) 
	{
		  if (!executeobject.command) {
		  executeobject.command={},
		  executeobject.command.environment={},
		  executeobject.command.environment.run={}}
		  executeobject.command.environment.run.type="series"
		  executeobject.command.environment.run.executelevel=0
		  executeobject.command.environment.platform='local'
 
																	   // the function as if it was a name of a function

		  executeobject.command.environment.processfn="execute_parameter"          
		  executeobject.serverfn="test_return_noerror_result2"        
		  executeobject.command.xrun={
									  "executethis": 'a',
													  "a"          : "test_return_noerror_result"
									 }

		  var etEnvironment = new drienvironment(executeobject.command.environment)
		  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
		  {        
				var result_assertion={"a":"b", "env":executeobject.command.environment.platform};               
				proxyprinttodiv('expected error', null, 99);
				proxyprinttodiv('actual error', error_obj, 99);
				proxyprinttodiv('expected result', result_assertion, 99);
				proxyprinttodiv('actual result', result_obj, 99);

				composite_obj=logverifycomplex("ettest_series1passep", result_obj, result_assertion, error_obj, null);
				proxyprinttodiv('composite_obj', composite_obj, 99);
				callback(null, composite_obj)
		  })
	}

	// test of executegetwid -- save a wid then execute it
	exports.ettest_series1passegw = 
	ettest_series1passegw = 
	function ettest_series1passegw(executeobject, callback) 
	{
		updatewid({
				//"executethis":"updatewid",
				"wid":"callpassfunction",
				"metadata":{"method":"defaultdto"},
				"addthis.executethis":"test_return_noerror_result"     // note save it with addthis in front
				},                                                     // this will execute "test_return_noerror_result" 
				function (err,res) {

		  if (!executeobject.command) {
		  executeobject.command={},
		  executeobject.command.environment={},
		  executeobject.command.environment.run={}}
		  executeobject.command.environment.run.type="series"
		  executeobject.command.environment.run.executelevel=0
		  executeobject.command.environment.platform='local'
	  
  
		  executeobject.command.environment.processfn="execute_get_wid"          
		  executeobject.serverfn="test_return_noerror_result2"        
		  executeobject.command.xrun={
									  "executethis": 'callpassfunction'
											  }

		  var etEnvironment = new drienvironment(executeobject.command.environment)
		  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
		  {        
				var result_assertion={"a":"b", "env":executeobject.command.environment.platform};               
				proxyprinttodiv('expected error', null, 99);
				proxyprinttodiv('actual error', error_obj, 99);
				proxyprinttodiv('expected result', result_assertion, 99);
				proxyprinttodiv('actual result', result_obj, 99);

				composite_obj=logverifycomplex("ettest_series1passegw", result_obj, result_assertion, error_obj, null);
				proxyprinttodiv('composite_obj', composite_obj, 99);
				callback(null, composite_obj)
		  })
		}
	  );
	}

	// test of executegetwid -- save a wid then execute it
	exports.ettest_series1passegw2 = 
	ettest_series1passegw2 = 
	function ettest_series1passegw2(executeobject, callback) 
	{
		updatewid({
				//"executethis":"updatewid",
				"wid":"callpassfunction",
				"metadata":{"method":"defaultdto"},
				"addthis.executethis":"test_return_noerror_result"     // note save it with addthis in front
				},                                                     // this will execute "test_return_noerror_result" 
				function (err,res) {

		  if (!executeobject.command) {
		  executeobject.command={},
		  executeobject.command.environment={},
		  executeobject.command.environment.run={}}
		  executeobject.command.environment.run.type="series"
		  executeobject.command.environment.run.executelevel=0
		  executeobject.command.environment.platform='local'
	  
  
		  executeobject.command.environment.processfn="execute_get_wid"          
		  executeobject.serverfn="test_return_noerror_result2"        
		  executeobject.command.xrun={
									  "executethis": 'callpassfunction'
											  }

		  var etEnvironment = new drienvironment(executeobject.command.environment)
		  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
		  {        
				var result_assertion={"a":"b", "env":executeobject.command.environment.platform};               
				proxyprinttodiv('expected error', null, 99);
				proxyprinttodiv('actual error', error_obj, 99);
				proxyprinttodiv('expected result', result_assertion, 99);
				proxyprinttodiv('actual result', result_obj, 99);

				composite_obj=logverifycomplex("ettest_series1pass", result_obj, result_assertion, error_obj, null);
				proxyprinttodiv('composite_obj', composite_obj, 99);
				callback(null, composite_obj)
		  })
		}
	  );
	}

exports.ettest_series1update1 = 
ettest_series1update1 = 
function ettest_series1update1(executeobject, callback) 
{
    updatewid({
        //"executethis":"updatewid",
        "wid":"callpassfunction",
        "metadata":{"method":"defaultdto"},
        "addthis.executethis":"test_return_noerror_result"     // note save it with addthis in front
      },                                                     // this will execute "test_return_noerror_result" 
      function (err,res) 
      {

        if (!executeobject.command) 
        {
            executeobject.command={},
            executeobject.command.environment={},
            executeobject.command.environment.run={}
        }
        executeobject.command.environment.run.type="series"
        executeobject.command.environment.run.executelevel=0
        executeobject.command.environment.platform='local'          // used for server testing

        executeobject.command.environment.processfn="execute_function"          // what function handles functions
        executeobject.serverfn={"executethis": 'callpassfunction'}        // so we can test fail local, pass server on same machine
        executeobject.command.xrun={"executethis": 'test_return_failnotfound_result'}

        var etEnvironment = new drienvironment(executeobject.command.environment)
        etEnvironment.execute(executeobject, 
          function (error_obj, result_obj) 
          {        
              var result_assertion={"a":"b", "env":executeobject.command.environment.platform};               
              proxyprinttodiv('expected error', null, 99);
              proxyprinttodiv('actual error', error_obj, 99);
              proxyprinttodiv('expected result', result_assertion, 99);
              proxyprinttodiv('actual result', result_obj, 99);

              composite_obj=logverifycomplex("ettest_series1update1", result_obj, result_assertion, error_obj, null);
              proxyprinttodiv('composite_obj', composite_obj, 99);
              callback(null, composite_obj)
          }
        );  
      }
    )
}

// /*===============================================*/  
// /******* SECTION: misc group LEVEL 0 	*********/
// /*===============================================*/
	
exports.ettest_group3failpassserver = 
ettest_group3failpassserver = 
function ettest_group3failpassserver(executeobject, callback) 
{
    if (!executeobject.command) 
    {
        executeobject.command={},
        executeobject.command.environment={},
        executeobject.command.environment.run={}
    }
    executeobject.command.environment.run.type="group"     // should default to group
    executeobject.command.environment.run.executelevel=0
    executeobject.command.environment.platform='local'          // used for server testing

    executeobject.command.environment.processfn="execute_function"          // what function handles functions
    executeobject.serverfn="test_return_noerror_result2"        
    executeobject.command.xrun=[
                      {"executethis": 'test_return_noerror_result', 'serverfn':'test test_return_realerror_result2'},
                      {"executethis": 'test_return_notfound_result', 'serverfn':'test_return_noerror_result2'},
                      {"executethis": 'test_return_noerror_result2', 'serverfn':'test test_return_failnotfound_result2'}
                      ]; 

    var etEnvironment = new drienvironment(executeobject.command.environment)
    etEnvironment.execute(executeobject, function (error_obj, result_obj) 
    {        
        var result_assertion={"a":"b", "env":executeobject.command.environment.platform};               
        proxyprinttodiv('expected error', null, 99);
        proxyprinttodiv('actual error', error_obj, 99);
        proxyprinttodiv('expected result', result_assertion, 99);
        proxyprinttodiv('actual result', result_obj, 99);

        composite_obj=logverifycomplex("ettest_series1pass", result_obj, result_assertion, error_obj, null);
        proxyprinttodiv('composite_obj', composite_obj, 99);
        callback(null, composite_obj)
    })
}


// /*===============================================*/  
// /******* SECTION: nested Level 1 	*********/
// /*===============================================*/
// nested tests - level = 1
exports.ettest_nestedtestslevel1 = 
ettest_nestedtestslevel1 = 
function ettest_nestedtestslevel1(executeobject, callback) 
{
	async.series(
	[   
	function (cb1) {ettest_nestedtestslevel1pass1({}, function (err, res) {cb1(null, res)})},
	function (cb1) {ettest_nestedtestslevel1pass3({}, function (err, res) {cb1(null, res)})},
	function (cb1) {ettest_nestedtestslevel1fail3middle({}, function (err, res) {cb1(null, res)})},
	function (cb1) {ettest_nestedtestslevel1fail3last({}, function (err, res) {cb1(null, res)})}
	],
	function (err, res) {
	  proxyprinttodiv('result from many array', res, 99);
	  callback(null,res)
	}) 
}


	 //this test calls a, and a is an execution object with xrun = [noerror,noerror,noerror]
	 exports.ettest_nestedtestslevel1pass1 = 
	 ettest_nestedtestslevel1pass1 = 
	 function ettest_nestedtestslevel1pass1(executeobject, callback) 
	 {		
	 	  if (!executeobject.command) {
	 	  executeobject.command={},
	 	  executeobject.command.environment={},
	 	  executeobject.command.environment.run={}}
	 	  executeobject.command.environment.run.type="series"
	 	  executeobject.command.environment.run.executelevel=1
	 	  executeobject.command.environment.platform='local'          
  
	 	  executeobject.command.environment.processfn="execute_parameter"
	 	  //executeobject.serverfn="test_return_noerror_result"
	 	  executeobject.command.xrun=
								[
	 								{
										"command":
											{
												"xrun":
												[
													{
													"executethis":"test_return_noerror_result"
													}
												]
											}
									}
								]; 

	 	  var etEnvironment = new drienvironment(executeobject.command.environment)
	 	  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
	 	  {
				var result = {"a":"b","env":"local"}
				var result_assertion = result
	 			proxyprinttodiv('actual result', result_obj, 99, true);                         
	 			proxyprinttodiv('expected result', result_assertion, 99, true);
	 			proxyprinttodiv('actual error',error_obj, 99);
	 			proxyprinttodiv('expected error', null, 99);
				
	 			composite_obj=logverifycomplex("ettest_nestedtestslevel1pass1", result_obj,result_assertion, error_obj, null);
	 			callback(null, composite_obj)
	 	  } 
	 	);
	 }
	
	//this test calls a, and a is an execution object with xrun = [noerror,noerror,noerror]
	 exports.ettest_nestedtestslevel1pass3 = 
	 ettest_nestedtestslevel1pass3 = 
	 function ettest_nestedtestslevel1pass3(executeobject, callback) 
	 {		
	 	  if (!executeobject.command) {
	 	  executeobject.command={},
	 	  executeobject.command.environment={},
	 	  executeobject.command.environment.run={}}
	 	  executeobject.command.environment.run.type="series"
	 	  executeobject.command.environment.run.executelevel=1
	 	  executeobject.command.environment.platform='local'          
  
	 	  executeobject.command.environment.processfn="execute_parameter"
	 	  //executeobject.serverfn="test_return_noerror_result"
	 	  executeobject.command.xrun=
								[
	 								{

										"command":
											{
											"xrun":
												[
													{"executethis":"test_return_noerror_result"},
													{"executethis":"test_return_noerror_result"},
													{"executethis":"test_return_noerror_result"}
												]
											}
											
									}
	 							]; 

	 	  var etEnvironment = new drienvironment(executeobject.command.environment)
	 	  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
	 	  {
				var result = {"a":"b","env":"local"}
				var result_assertion = [result,result,result]
	 			proxyprinttodiv('actual result', result_obj, 99, true);                         
	 			proxyprinttodiv('expected result', result_assertion, 99, true);
	 			proxyprinttodiv('actual error',error_obj, 99);
	 			proxyprinttodiv('expected error', null, 99);
				
	 			composite_obj=logverifycomplex("ettest_nestedtestslevel1pass1", result_obj,result_assertion, error_obj, null);
	 			callback(null, composite_obj)
	 	  } 
	 	);
	 }
	 
		 //this test calls a, and a is an execution object with xrun = [noerror,noerror,noerror]
	 exports.ettest_nestedtestslevel1fail3middle = 
	 ettest_nestedtestslevel1fail3middle = 
	 function ettest_nestedtestslevel1fail3middle(executeobject, callback) 
	 {		
	 	  if (!executeobject.command) {
	 	  executeobject.command={},
	 	  executeobject.command.environment={},
	 	  executeobject.command.environment.run={}}
	 	  executeobject.command.environment.run.type="series"
	 	  executeobject.command.environment.run.executelevel=1
	 	  executeobject.command.environment.platform='local'          
  
	 	  executeobject.command.environment.processfn="execute_parameter"
	 	  executeobject.serverfn="test_return_noerror_result"
	 	  executeobject.command.xrun=
								[
	 								{

										"command":
											{
											"xrun":
												[
													{"executethis":"test_return_noerror_result"},
													{"executethis":"test_return_realerror_result"},
													{"executethis":"test_return_noerror_result"}
												]
											}
											
									}
	 							]; 

	 	  var etEnvironment = new drienvironment(executeobject.command.environment)
	 	  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
	 	  {
	 			proxyprinttodiv('actual result', result_obj, 99, true);                         
	 			proxyprinttodiv('expected result', null, 99, true);
	 			proxyprinttodiv('actual error',error_obj, 99);
	 			proxyprinttodiv('expected error', global_realerror, 99);
				
	 			composite_obj=logverifycomplex("ettest_nestedtestslevel1pass1", result_obj,null, error_obj, global_realerror);
	 			callback(null, composite_obj)
	 	  } 
	 	);
	 }
	 
	 		 //this test calls a, and a is an execution object with xrun = [noerror,noerror,noerror]
	 exports.ettest_nestedtestslevel1fail3fail = 
	 ettest_nestedtestslevel1fail3fail = 
	 function ettest_nestedtestslevel1fail3fail(executeobject, callback) 
	 {		
	 	  if (!executeobject.command) {
	 	  executeobject.command={},
	 	  executeobject.command.environment={},
	 	  executeobject.command.environment.run={}}
	 	  executeobject.command.environment.run.type="series"
	 	  executeobject.command.environment.run.executelevel=1
	 	  executeobject.command.environment.platform='local'          
  
	 	  executeobject.command.environment.processfn="execute_parameter"
	 	  executeobject.serverfn="test_return_noerror_result"
	 	  executeobject.command.xrun=
								[
	 								{

										"command":
											{
											"xrun":
												[
													{"executethis":"test_return_noerror_result"},
													{"executethis":"test_return_noerror_result"},
													{"executethis":"test_return_realerror_result"}
												]
											}
											
									}
	 							]; 

	 	  var etEnvironment = new drienvironment(executeobject.command.environment)
	 	  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
	 	  {
	 			proxyprinttodiv('actual result', result_obj, 99, true);                         
	 			proxyprinttodiv('expected result', null, 99, true);
	 			proxyprinttodiv('actual error',error_obj, 99);
	 			proxyprinttodiv('expected error', global_realerror, 99);
				
	 			composite_obj=logverifycomplex("ettest_nestedtestslevel1pass1", result_obj,null, error_obj, global_realerror);
	 			callback(null, composite_obj)
	 	  } 
	 	);
	 }
	 
// /*===============================================*/  
// /******* SECTION: misc runfirst LEVEL 0 	*********/
// /*===============================================*/

// runfirstone
exports.ettest_runfirst3real = 
ettest_runfirst3real = 
function ettest_runfirst3real(executeobject, callback) 
{
      if (!executeobject.command) {
      executeobject.command={},
      executeobject.command.environment={},
      executeobject.command.environment.run={}}
      executeobject.command.environment.run.type="runfirstonewaterfall"
      executeobject.command.environment.run.executelevel=0
      executeobject.command.environment.platform='local'          
  
      executeobject.command.environment.processfn="execute_function"
      executeobject.serverfn="test_return_noerror_result"
      executeobject.command.xrun=[
                                  {"executethis": 'test_return_realerror_result'},
                                  {"executethis": 'test_return_notfound_result'},
                                  {"executethis": 'test_return_failnotfound_result'}
                                  ];  
      var etEnvironment = new drienvironment(executeobject.command.environment)
      etEnvironment.execute(executeobject, function (error_obj, result_obj) 
      {
       
            proxyprinttodiv('actual result', result_obj, 99, true);                         
            proxyprinttodiv('expected result', global_resulttable_assertion, 99);
            proxyprinttodiv('actual error',error_obj, 99);
            proxyprinttodiv('expected error', global_realerror, 99);
            
            composite_obj=logverifycomplex("ettest_ne16", result_obj,global_resulttable_assertion, error_obj, global_realerror);
            callback(null, composite_obj)
      } 
    );
}

// runfirstone, level 0, all pass locally
exports.ettest_runfirst3pass_lvl1 = 
ettest_runfirst3pass_lvl1 = 
function ettest_runfirst3pass_lvl1(executeobject, callback) 
{
      if (!executeobject.command) {
      executeobject.command={},
      executeobject.command.environment={},
      executeobject.command.environment.run={}}
      executeobject.command.environment.run.type="runfirstone"
      executeobject.command.environment.run.executelevel=0
      executeobject.command.environment.platform='local'          
  
      executeobject.command.environment.processfn="execute_function"
      executeobject.serverfn="test_return_noerror_result"
      executeobject.command.xrun=[
                                  {"executethis": 'test_return_noerror_result'},
                                  {"executethis": 'test_return_noerror_result'},
                                  {"executethis": 'test_return_noerror_result2'}
                                  ];
  var expectedresult = {"a":"b","env":executeobject.command.environment.platform}    
      var etEnvironment = new drienvironment(executeobject.command.environment)
      etEnvironment.execute(executeobject, function (error_obj, result_obj) 
      {
                                
            proxyprinttodiv('expected error', null, 99);
            proxyprinttodiv('actual error', error_obj, 99);
            proxyprinttodiv('expected result', expectedresult, 99);
            proxyprinttodiv('actual result', result_obj, 99);
            composite_obj=logverifycomplex("ettest_runfirst3pass_lvl1", result_obj,expectedresult, error_obj, null);
            callback(null, composite_obj)
      } 
    );
}

// /*===============================================*/  
// /******* SECTION: New execute() tests 	*********/
// /*===============================================*/

function ettest_executestring1 = ettest_executestring1 = function ettest_executestring1(executeobject, callback) 
{
      execute("test_return_noerror_result",function (err, res) {
			proxyprinttodiv('executestring1 res --', res, 99);
			//callback(err,res);
		});
}

function ettest_executeobject1 = ettest_executeobject1 = function ettest_executeobject1(executeobject, callback) 
{
      execute({"executethis":"test_return_noerror_result"},function (err, res) {
			proxyprinttodiv('executestring1 res --', res, 99);
			//callback(err,res);
		});
}

function ettest_executelist1 = ettest_executelist1 = function ettest_executelist1(executeobject, callback) 
{
      execute({"command.xrun":[
				{"executethis":"test_return_noerror_result"},
				{"executethis":"test_return_noerror_result2"},
				{"executethis":"test_return_noerror_result3"}
			]},function (err, res) {
			proxyprinttodiv('executestring1 res --', res, 99);
			//callback(err,res);
		});
}

function ettest_executelist2 = ettest_executelist2 = function ettest_executelist2(executeobject, callback) 
{
      execute({"command.xrun":[
				{"executethis":"test_return_noerror_result"},
				{"executethis":"test_return_noerror_result2"},
				"test_return_noerror_result3"
			]},function (err, res) {
			proxyprinttodiv('executestring1 res --', res, 99);
			//callback(err,res);
		});
}

// /*===============================================*/  
// /***** SECTION: test environment.attributes 	*****/
// /*===============================================*/

function ettest_executewithattributes1 = 
ettest_executewithattributes1 = 
function ettest_executewithattributes1(executeobject, callback) 
{
      execute([{"command.environment.attributes":{"a":"b","c":"d"},
				"executethis":"updatewid",
				"wid":"wid1",
				"creator":"cody"}
			}],function (err, res) {
			proxyprinttodiv('executestring1 res --', res, 99);
			//callback(err,res);
		});
}


// /*===============================================*/  
// /***** SECTION: test command.usernamespace 	*****/
// /*===============================================*/

function ettest_usernamespace1 = 
ettest_usernamespace1 = 
function ettest_usernamespace1(executeobject, callback) 
{
      execute([{"command":{
					"usernamespace":"cody123"},
				"executethis":"updatewid",
				"wid":"wid1",
				"creator":"cody"
			}],function (err, res) {
			proxyprinttodiv('executestring1 res --', res, 99);
			//callback(err,res);
		});
}


// /*===============================================*/  
// /***** SECTION: test command.appnamespace 	*****/
// /*===============================================*/

function ettest_appnamespace1 = 
ettest_appnamespace1 = 
function ettest_appnamespace1(executeobject, callback) 
{
      execute([{"command":{
					"appnamespace":"true"},
				"executethis":"updatewid",
				"wid":"wid1",
				"creator":"cody"
			}],function (err, res) {
			proxyprinttodiv('executestring1 res --', res, 99);
			//callback(err,res);
		});
}
		
/*
    logverify() test - simple - does {a:b} match {a:b} - 
*/
exports.testlogverify = testlogverify = function testlogverify(params, callback) {
  debuglevel = 17;
  var test_name = "testlogverify";
  var test_name_diff = test_name + '_diff';
  var res =  logverify(test_name, {a:"b"}, {a:"b"});  //PASS
  var logverify_results = res[test_name + '_diff'];
  
  var expectedresult_object = {
    "test_name": test_name,
    test_name: "PASS",
    test_name_diff: {
      "a": {
          "data": "b",
          "type": "unchanged"
        },
      "data":"b",
      "type":"unchanged"
    }
  }
  debugger;

  var resultMap = deepDiffMapper.map(res, expectedresult_object);




  // debugger;
  //var res =  logverify("testlogverify", {a:"b"}, {a:"c"});  //FAIL
  proxyprinttodiv('testlogverify res', res, 99);
  callback({}, res);
}



exports.testlogverify2 = testlogverify2 = function testlogverify2(params, callback) {

var res =  logverify("testlogverify",
  {"command":{"resulttable":{"445a16aa-cc85-a14e-36ad-746ab78ab4de":{"detail":[{"executeid":"445a16aa-cc85-a14e-36ad-746ab78ab4de","outgoingparm":{"command":{"environment":{"defaultcollection":"dricollection","defaultdb":"data","defaultdatastore":"localstorage","defaultkeycollection":"dricollectionkey","defaultdatabasetable":"wikiwallettesting","platform":"local","run":{"type":"runfirstonewaterfall","executelevel":1,"executeid":"445a16aa-cc85-a14e-36ad-746ab78ab4de"},"accesstoken":"fab4d18b-a3dd-da47-d524-4f8aae0af98c"}},"executethis":"test_return_realerror_result","serverfn":"test_return_noerror_result"},"err":{"errorname":"realerror"},"res":{"x":"y","env":"local","command":{"environment":{"run":{"executeid":"445a16aa-cc85-a14e-36ad-746ab78ab4de"}}}},"executeseq":0}],"overallresult":{},"overallerror":null},"extraparameters":{"command":{"environment":{"defaultcollection":"dricollection","defaultdb":"data","defaultdatastore":"localstorage","defaultkeycollection":"dricollectionkey","defaultdatabasetable":"wikiwallettesting","platform":"local","run":{"type":"runfirstonewaterfall","executelevel":1,"executeid":"445a16aa-cc85-a14e-36ad-746ab78ab4de"},"accesstoken":"fab4d18b-a3dd-da47-d524-4f8aae0af98c"},"processparameterfn":"execute_nothing","processfn":"execute_function"}},"overallresult":{},"overallerror":null}}},
  {"command":{"resulttable":{"c1bf93f0-d3f5-6c14-baad-d4af535b0dc8":{"detail":[{"executeseq":{"exception":["created","changed","unchanged"]},"executeid":{"exception":["created","changed","unchanged"]},"outgoingparm":{"executethis":"test_return_failnotfound_result","command":{"environment":{"defaultcollection":"dricollection","defaultdb":"data","defaultdatastore":"localstorage","defaultkeycollection":"dricollectionkey","defaultdatabasetable":"wikiwallettesting","run":{"type":"group","executelevel":{"exception":["created","changed","unchanged"]},"executeid":{"exception":["created","changed","unchanged"]}},"accesstoken":{"exception":["created","changed","unchanged"]}}}},"err":{"errorname":"failnotfound"},"res":{"x":"y","command":{"environment":{"defaultcollection":"dricollection","defaultdb":"data","defaultdatastore":"localstorage","defaultkeycollection":"dricollectionkey","defaultdatabasetable":"wikiwallettesting","run":{"type":"group","executelevel":{"exception":["created","changed","unchanged"]},"executeid":{"exception":["created","changed","unchanged"]}},"accesstoken":{"exception":["created","changed","unchanged"]}},"error":{"errorname":"failnotfound"}}}}],"tryrecords":[],"tryseq":[],"summary":{"overallresult":{},"overallerror":{},"executeseq":{"exception":["created","changed","unchanged"]}}}}}}
)
    proxyprinttodiv('testlogverify2 res', res, 99);
    callback({}, res);
}

exports.testlogverify3 = testlogverify3 = function testlogverify3(params, callback)
{
    var res = logverify('testlogverify3', null, null);
    proxyprinttodiv('testlogverify3 res', res, 99);
    callback({}, res);
}

exports.testlogverify4 = testlogverify4 = function testlogverify4(params, callback)
{
    var res = logverify('testlogverify4', {}, null);
    proxyprinttodiv('testlogverify4 res', res, 99);
    callback({}, res);
}


exports.testlogverify5 = testlogverify5 = function testlogverify5(params, callback)
{
    var res = logverify('testlogverify5', 'a', 'a');
    proxyprinttodiv('testlogverify5 res', res, 99);
    callback({}, res);
}

exports.testlogverify6 = testlogverify6 = function testlogverify6(params, callback)
{
    var res = logverify('testlogverify6', 'a', 'z');
    proxyprinttodiv('testlogverify6 res', res, 99);
    callback({}, res);
}

exports.testlogverify7 = testlogverify7 = function testlogverify7(params, callback)
{
    var res = logverify('testlogverify7', {'a':'b'}, {'a':'z'});
    // This SHOULD fail - so now we need to see if the failure fails correctly
    var res2 = {
      'testlogverify7': "FAIL",
      'test_name': 'testlogverify7',
      'testlogverify7_diff': {
        'a': {
          'data': 'z', 
          'type':'updated'
        },
        'data': 'z',
        'type': 'updated'
      }
    } 
    debugger;
    var result0 = deepDiffMapper.map(res, res2);
    var xresult = distillresults('xx', result0);
    if (xresult['xx'] == "FAIL")
    {
      // It was supposed to fail, so if it failed, it passed
       xresult.xx = "PASS";
       xresult.xx_diff.testlogverify7.data = "PASS";
    } else {
      xresult['xx'] = "FAIL";
    }
    proxyprinttodiv('testlogverify7 res', res, 99);
    callback({}, xresult);
}


/*
    logverifycomplex() test
*/
exports.testlogverifycomplex = testlogverifycomplex = function testlogverifycomplex(params, callback) {
    debuglevel = 17;
    //var res = logverifycomplex("testlogverifycomplex", {a:"b"}, {a:"b"},{c:"d"},{c:"d"});   //PASS
  var res = logverifycomplex("testlogverifycomplex", {a:"b"}, {a:"c"},{c:"d"},{c:"d"}); //FAIL
    proxyprinttodiv('testlogverifycomplex res', res, 99);
    callback({}, res);
}

/*
    logverifycomplex() test
-To test exception object of mapper result  
*/
exports.testlogverifycomplex2 = testlogverifycomplex2 = function testlogverifycomplex2(params, callback) {
    debuglevel = 17;
  var res = logverifycomplex("testlogverifycomplex", {a:"b", b:"c"}, {a:"c"},{c:"d"},{c:"d"});
    proxyprinttodiv('testlogverifycomplex res', res, 99);
    callback({}, res);
}

exports.test_return_noerror_result = test_return_noerror_result = function test_return_noerror_result (param, callback) 
{
    // debugger;
    proxyprinttodiv('test_return_noerror_result- incoming parm', param, 99);
    var error_obj = null;
    var env = param.command.environment.platform
    if (env==="server" && param.serverfn)     // if environment = server and serverfn parameter exist then redirect 
                                              // to different function--that way we can on same machine pass locally and
                                              // fail server
    {
      // var serverfn = window[param.serverfn]
      // param.executethis=serverfn
      param.command.xrun=param.serverfn
      // debugger;
      delete param.serverfn
      proxyprinttodiv('test ***** calling server', param, 99);
      // serverfn(param, callback)
      execute(param, callback) 

    } else {
      var result_obj = { 'a':'b', env: env };
      callback( error_obj, result_obj );
    }
}

exports.test_return_noerror_result2 = test_return_noerror_result2 = function test_return_noerror_result2 (param, callback) 
{
    // debugger;
    proxyprinttodiv('test_return_noerror_result2- incoming parm', param, 99);
    var error_obj = null;
    var env = param.command.environment.platform
    if (env==="server" && param.serverfn)     // if environment = server and serverfn parameter exist then redirect 
                                              // to different function--that way we can on same machine pass locally and
                                              // fail server
    {
        param.command.xrun=param.serverfn
        delete param.serverfn
        proxyprinttodiv('test ***** calling server', param, 99);
        execute(param, callback) 
    } else {
        var result_obj = { 'x':'y', env: env };
        callback( error_obj, result_obj );
    }
}

exports.test_return_noerror_result3 = test_return_noerror_result3 = function test_return_noerror_result3 (param, callback) 
{
    // debugger;
    proxyprinttodiv('test_return_noerror_result2- incoming parm', param, 99);
    var error_obj = null;
    var env = param.command.environment.platform
    if (env==="server" && param.serverfn)     // if environment = server and serverfn parameter exist then redirect 
                                              // to different function--that way we can on same machine pass locally and
                                              // fail server
    {
        param.command.xrun=param.serverfn
        delete param.serverfn
        proxyprinttodiv('test ***** calling server', param, 99);
        execute(param, callback) 
    } else {
        var result_obj = { 'x3':'y3', env: env };
        callback( error_obj, result_obj );
    }
}

exports.test_return_noerror_result4 = test_return_noerror_result4 = function test_return_noerror_result4 (param, callback) 
{
    // debugger;
    proxyprinttodiv('test_return_noerror_result4- incoming parm', param, 99);
    var error_obj = null;
    var env = param.command.environment.platform
    if (env==="server" && param.serverfn)     // if environment = server and serverfn parameter exist then redirect 
                                              // to different function--that way we can on same machine pass locally and
                                              // fail server
    {
        param.command.xrun=param.serverfn
        delete param.serverfn
        proxyprinttodiv('test ***** calling server', param, 99);
        execute(param, callback) 
    } else {
        var result_obj = { 'x4':'y4', env: env };
        callback( error_obj, result_obj );
    }
}

exports.test_return_noerror_result5 = test_return_noerror_result5 = function test_return_noerror_result5 (param, callback) 
{
    // debugger;
    proxyprinttodiv('test_return_noerror_result5- incoming parm', param, 99);
    var error_obj = null;
    var env = param.command.environment.platform
    if (env==="server" && param.serverfn)     // if environment = server and serverfn parameter exist then redirect 
                                              // to different function--that way we can on same machine pass locally and
                                              // fail server
    {
        param.command.xrun=param.serverfn
        delete param.serverfn
        proxyprinttodiv('test ***** calling server', param, 99);
        execute(param, callback) 
    } else {
        var result_obj = { 'x5':'y5', env: env };
        callback( error_obj, result_obj );
    }
}

exports.test_return_noerror_result6 = test_return_noerror_result6 = function test_return_noerror_result6 (param, callback) 
{
    // debugger;
    proxyprinttodiv('test_return_noerror_result6- incoming parm', param, 99);
    var error_obj = null;
    var env = param.command.environment.platform
    if (env==="server" && param.serverfn)     // if environment = server and serverfn parameter exist then redirect 
                                              // to different function--that way we can on same machine pass locally and
                                              // fail server
    {
        param.command.xrun=param.serverfn
        delete param.serverfn
        proxyprinttodiv('test ***** calling server', param, 99);
        execute(param, callback) 
    } else {
        var result_obj = { 'x6':'y6', env: env };
        callback( error_obj, result_obj );
    }
}

exports.test_return_noerror_waterfall = test_return_noerror_waterfall = function test_return_noerror_waterfall (param, callback) 
{
    // debugger;
    proxyprinttodiv('test_return_noerror_waterfall -  incoming param', param, 99);
    var error_obj = null;
    var env = param.command.environment.platform
    if (env==="server" && param.serverfn)     // if environment = server and serverfn parameter exist then redirect 
                                              // to different function--that way we can on same machine pass locally and
                                              // fail server
    {
        param.command.xrun=param.serverfn
        delete param.serverfn
        proxyprinttodiv('test ***** calling server', param, 99);
        execute(param, callback) 
    } else {
        var result_obj = { 'a':'b', env: env };
        var copy = {}
        extend(true, copy, param)
        delete copy.command
        result_obj.x=copy
        callback( error_obj, result_obj );
    }
}

exports.test_return_notfound_result = test_return_notfound_result = function test_return_notfound_result(param, callback) 
{
    // debugger;
    proxyprinttodiv('test_return_notfound_result - incoming parm', param, 99);
    var error_obj = { 'errorname': 'notfound' } ;
    //var result_obj = { 'x': 'y' };
    var env = param.command.environment.platform
    if (env==="server" && param.serverfn) 
    {
        param.command.xrun=param.serverfn
        delete param.serverfn
        proxyprinttodiv('test ***** calling server', param, 99);
        execute(param, callback) 
    } else {
      var result_obj = { 'x':'y', env: env };
      callback( error_obj, result_obj );
    }
}

exports.test_return_failnotfound_result = test_return_failnotfound_result = function test_return_failnotfound_result(param, callback) 
{
    // debugger;
    proxyprinttodiv('test_return_failnotfound_result - incoming param', param, 99);
    var error_obj = { 'errorname': 'failnotfound' } ;
    //var result_obj = { 'x': 'y' };
    var env = param.command.environment.platform
    if (env==="server" && param.serverfn) 
    {
        param.command.xrun=param.serverfn
        delete param.serverfn
        proxyprinttodiv('test ***** calling server', param, 99);
        execute(param, callback) 
    } else  {
        var result_obj = { 'x':'y', env: env };
        callback( error_obj, result_obj );
    }
}

exports.test_return_realerror_result = test_return_realerror_result = function test_return_realerror_result(param, callback) 
{
    // debugger;
    proxyprinttodiv('test_return_realerror_result - incoming param', param, 99);
    var error_obj = { 'errorname': 'realerror' } ;
    //var result_obj = { 'x': 'y' };
    var env = param.command.environment.platform
    if (env==="server" && param.serverfn) 
    {
        param.command.xrun=param.serverfn;
        delete param.serverfn;
        proxyprinttodiv('test ***** calling server', param, 99);
        execute(param, callback);
    } else {
        var result_obj = { 'x':'y', env: env };
        callback( error_obj, result_obj );
    }
}

var global_resulttable_assertion2=
{
    "command": {
        "resulttable": {
            "20541387-b923-88f3-f1a7-cd04065857f9": {
              "detail": {"exception": ["created","changed","unchanged"]},
              "tryset": {"exception": ["created","changed","unchanged","deleted"]},
              "overallresult": {"exception": ["created","changed","unchanged"]}, 
              "overallerror":  {"exception": ["created","changed","unchanged"]},
              "extraparameters": {"exception": ["created","changed","unchanged"]}
          }
      }
  }
}


    var global_resulttable_assertion=
{
    "command": {
        "resulttable": {
            "c1bf93f0-d3f5-6c14-baad-d4af535b0dc8": {
                "detail": [
                    {
                        "executeseq": {
                            "exception": [
                                "created",
                                "changed",
                                "unchanged"
                            ]
                        },
                        "executeid": {
                            "exception": [
                                "created",
                                "changed",
                                "unchanged"
                            ]
                        },
                        "outgoingparm": {
                            "executethis": "test_return_failnotfound_result",
                            "command": {
                                "environment": {
                                    "defaultcollection": "dricollection",
                                    "defaultdb": "data",
                                    "defaultdatastore": "localstorage",
                                    "defaultkeycollection": "dricollectionkey",
                                    "defaultdatabasetable": "wikiwallettesting",
                                    "run": {
                                        "type": "group",
                                        "executelevel": {
                                            "exception": [
                                                "created",
                                                "changed",
                                                "unchanged"
                                            ]
                                        },
                                        "executeid": {
                                            "exception": [
                                                "created",
                                                "changed",
                                                "unchanged"
                                            ]
                                        }
                                    },
                                    "accesstoken": {
                                        "exception": [
                                            "created",
                                            "changed",
                                            "unchanged"
                                        ]
                                    }
                                }
                            }
                        },
                        "err": {
                            "errorname": "failnotfound"
                        },
                        "res": {
                            "x": "y",
                            "command": {
                                "environment": {
                                    "defaultcollection": "dricollection",
                                    "defaultdb": "data",
                                    "defaultdatastore": "localstorage",
                                    "defaultkeycollection": "dricollectionkey",
                                    "defaultdatabasetable": "wikiwallettesting",
                                    "run": {
                                        "type": "group",
                                        "executelevel": {
                                            "exception": [
                                                "created",
                                                "changed",
                                                "unchanged"
                                            ]
                                        },
                                        "executeid": {
                                            "exception": [
                                                "created",
                                                "changed",
                                                "unchanged"
                                            ]
                                        }
                                    },
                                    "accesstoken": {
                                        "exception": [
                                            "created",
                                            "changed",
                                            "unchanged"
                                        ]
                                    }
                                },
                                "error": {
                                    "errorname": "failnotfound"
                                }
                            }
                        }
                    }
                ],
                "tryrecords": [],
                "tryseq": [],
                "summary": {
                    "overallresult": {},
                    "overallerror": {},
                    "executeseq": {
                        "exception": [
                            "created",
                            "changed",
                            "unchanged"
                        ]
                    }
                }
            }
        }
    }
}
       
      var global_failnotfound = {'errorname':'failnotfound'};
      var global_notfound = {'errorname':'notfound'};
      var global_realerror = {'errorname':'realerror'};


//************************************************************************
// TESTS BROUGHT IN FROM et-unit_tests.js
//************************************************************************

// Note 6/18: I thought Pre, Mid, and Post were going away... do we still need all of these tests?

	  
// List of tests:
// 
// The tt tests will test the various combinations of calling pre, mid, and post by passing parameters
// of the pre and post (mis is the execute).
// 
// ettestt1     Call func_b with no pre or post...it should simply remove 'e' and add 'g' to the parameters
// ettestt2     Call func_b, but also tell preexecutetunittesttestere to call func_a and postexecute to call func_c.
// ettestt3     Call func_b with only pre func_a...this intends to call func_a in preexecute and func_b 
//              in midexecute and nothing in post execute.
// ettestt3a    Call func_b with only post func_a -- same result as t3. This is to make sure that not
//              calling pre is ok...this calls only mid and post.
// ettestt4     Call mid with func_b and post with func_c, assuring that multiple functions exectue
//              well, no matter where in the pre/mid/post they are placed. 
// ettestt4a    Call mid with func_b and pre with func_c, assuring that multiple functions exectue
//              well, no matter where in the pre/mid/post they are placed.
// ettestt5     Call func_b with func_a for pre and post to ensure that calling the same
//              function more than once is not a problem for the system.
// ettestt6     Double check that calling func_b with func_c for pre and post to ensure that calling the same
//              function more than once is not a problem for the system. Essentially showing that tt5 was not
//              a fluke, but a repeatable concept.
//              
// The astt tests will mirror the tt tests, but all the functions that are called will intentionally
// take a long time (500ms) to check how the async portion of the code handles functions that can take a long
// time to complete.            
//              
// ettestast1   Call async_b with no pre or post...it should simply remove 'e' and add 'g' to the parameters  
// ettestast2   Call async_func_b with pre calling func_a and post calling func_c...each simply
//              deletes a prameter and add a parameter.
// ettestast3   Call async_func_b with only pre async_func_a...is it ok to not call post...yes it is.
// ettestast3a  Call async_func_b with only post async_func_a -- same result as ast3
// ettestast4   Call async_func_b with only post calling async_c  
// ettestast4a  Call async_func_b with only pre async_func_c -- same result as t4
// ettestast5   Call async_func_b with async_func_a for pre and post
// ettestast6   Call async_func_b with async_func_c for pre and post
// 
// ettestag1    
// ettestag2    
// ettestag3    
// 
// The ctt tests will alter the configuration. By default, the config is altered twice. First by passing
// in parameters that will alter the config. Second by changing the config itself and stripping out any
// mention of the configuration in the parameters. All the redir_ functions are intentionally calling a function
// that is mapped to another function. I.e. redir_a is mapped to func_a, redir_b to func_b, and redir_c to func_c.
// After ct6, the tests start to try calling functions that are not there
// 
// ettestct1    Call redir_b. The config should remap redir_b to call func_b with no pre or post execution.
// ettestct2    Call redir_b. The config should remap redir_b to call func_b and pre to remap redir_a to func_a, and
//              also remap redir_c to func_c.
// ettestct3    Call redir_b. Also call pre with redir_a remapped to func_a, and not post call at all.
// ettestct3a   Call redir_b with only post redir_a -- same result as ct3, but putting the only remap
//              call in post instead of pre.
// ettestct4    Call redir_b with only post calling func_c remapped to func_c. Simply ensures that the remapping can be any 
//              function in either pre or post.
// ettestct4a   Call redir_b with only pre redir_c -- same result as t4
// ettestct5    Call redir_b with a remapping of redir_a to func_a for both pre and post.
// ettestct6    Call redir_b with redir_c for pre and post, essentiall rerunning ct5 but ensuring that other functions
//              can be used with the same effect.
// ettestct7    This will try pre with func a, but remapped with a configuration thatis passed into executethis...
//              it still wants to hit func_b with mid
// ettestct8 doest not run yet --- This test asserts that the tryorder in the config is successful
//              and causes executethis to call dothis, not server, or the others. As of jan 28, it
//              still fails to reorder them and calls the server instead. It breaks the code and will not
//              simply call func_b locally.
// ettestct9    This test is to call does_not_exist, remaapped in the parameters to remap does_not_exist to 
//              func_b and execute...so far it doesn't work....
// ettestct10   This test is to call func_b and in pre, call does_not_exist that is remapped to func_a...and then to func_b. So
//              far it does not work, and never has.
// ettestct11   This test is to call func_b, remap does_not_exist_1 to func_a,
//              remap does_not_exist_2 to func_c, and execute params to func_a, and then to func_b, and then func_c.
//              None of these ever work...
// ettestct13   This test is to test a config where a and b do not exist, but func_c does and c will execute. You
//              should not see any data for ct13_output_a, or b. The params of mid should insert the cer2:booberry in
//              the results
// ettestct14   Here is the modified ct14 test
//              This test is to test a config where a config with params is sent to pre, mid, and post.
//              The results should have the a,b,c cereals, along with the regular params.
// ettestct15   This will send the alphabits param in the preexecute config, but will be overriding it in the args..
//              Which one will win out? It does...the config params are lost and the 'arg' params from the config win out. 
// ettestct16 doest not run yet --- Here the object is to get a set of config params from the config itself by using setconfig2 and checking for the 
//              config params in the assertion widtests.
// ettestct17 doest not run yet --- To test if the executedefault gets fired, ct17 calls a 'doesnotexist' function to look for. It will not find and function
//              or a parameter, so it should find executedefault that has a param to be expected to be sent to func_b.
// ettestct18 doest not run yet --- This is to use the params in preexecute to ensure that the preexecute params are getting used by dothis
// ettestct19 doest not run yet --- This test is to send params to executethis. There will be params in the call to executethis, config file, and the config in the params
//              sent to executethis. There are params that will be used and changed throughout the call...they are alfa, bravo, and charlie. At this point, 
//              the args sent to executethis will always win...not any of the 3 places in the config that they are set.
// ettestct20 doest not run yet --- Here the goal is to see if the config of the left and right conflict, which wins? Ad of now, the right side wins. The params for func_a,b,c are 
// all set to be 2, but they come out as 4, because that is what pre,mid, and post set them to.

// at stands for 'all tests', this will run a suite 
// of tests that are known to run, but not necessarily pass

var wid = wid || {};
var widtests = widtests || {};
//exports.ettestat = ettestat = function ettestat(params, callback) {
exports.ettestat = widtests.ettestat = ettestat = function ettestat(params, callback) {

    var result = [];
    var err;

    ettesttt(result, function(err, r1) {
        result.push(r1);
        ettestastt(result, function(err, r2) {
            result.push(r2);
            ettestctt(result, function(err, r3) {
                result.push(r3);
                ettestagtt(result, function(err, r4) {
                    result.push(r4);
                    etalldeepfiltertests(result, function(err, r5) {
                        result.push(r5);
                        ettestdot(result, function(err, r6) {
                            result.push(r6);
							console.log('finished with ettestat');
                            callback(err, result);

                        });
                    });
                });
            });
        });
    });
}
widtests.ettestat.category = "execute";
widtests.ettestat.subcategory = "daily";
widtests.ettestat.js = exports.ettestat;
widtests.ettestat.description = "this does a test";

//exports.ettestat2 = ettestat2 = function ettestat2(params, callback) {
exports.ettestat2 = widtests.ettestat2 = ettestat2 = function ettestat2(params, callback) {

    var result;
    var err;
    var target = {
        'type': 'minute'
    };

    result = etunittesttester(target, function(err, result) {
        callback(err, result);
    });
}
widtests.ettestat2.category = "execute";
widtests.ettestat2.subcategory = "daily";
widtests.ettestat2.js = exports.ettestat2;
widtests.ettestat2.description = "this does a test";

//exports.ettestat3 = ettestat3 = function ettestat3(params, callback) {
exports.ettestat3 = widtests.ettestat3 = ettestat3 = function ettestat3(params, callback) {
    var result;
    var err;
    var target = {
        'type': 'second'
    };

    result = etunittesttester(target, function(err, result) {
        callback(err, result);
    });
}
widtests.ettestat3.category = "execute";
widtests.ettestat3.subcategory = "daily";
widtests.ettestat3.js = exports.ettestat3;
widtests.ettestat3.description = "this does a test";

//exports.ettestat4 = ettestat4 = function ettestat4(params, callback) {
exports.ettestat4 = widtests.ettestat4 = ettestat4 = function ettestat4(params, callback) {
    var result;
    var err;
    var target = {
        'type': 'quasi'
    };

    result = etunittesttester(target, function(err, result) {
        callback(err, result);
    });
}
widtests.ettestat4.category = "execute";
widtests.ettestat4.subcategory = "daily";
widtests.ettestat4.js = exports.ettestat4;
widtests.ettestat4.description = "this does a test";

//exports.ettestat5 = ettestat5 = function ettestat5(params, callback) {
exports.ettestat5 = widtests.ettestat5 = ettestat5 = function ettestat5(params, callback) {
    var result;
    var err;
    var target = {
        'type': 'hourly'
    };

    result = etunittesttester(target, function(err, result) {
        callback(err, result);
    });
}
widtests.ettestat5.category = "execute";
widtests.ettestat5.subcategory = "daily";
widtests.ettestat5.js = exports.ettestat5;
widtests.ettestat5.description = "this does a test";

// -------------------------------------------------------------------------------------------------------
// This series of tests will send parameters to func_b.
// There are variations of pre and post execute applied to 
// the calling of func_b. In pre, mid, and post, a parameter is 
// deleted, and a parameters is added to verify that each level of  
// the executethis is being accessed.

//exports.ettesttt = ettesttt = function ettesttt(params, callback) {
exports.ettesttt = widtests.ettesttt = ettesttt = function ettesttt(params, callback) {
    // execute([{
    //         "executethis": "ettestt1"
    //     }, {
    //         "executethis": "ettestt2"
    //     }, {
    //         "executethis": "ettestt3"
    //     }, {
    //         "executethis": "ettestt3a"
    //     }, {
    //         "executethis": "ettestt4"
    //     }, {
    //         "executethis": "ettestt4a"
    //     }, {
    //         "executethis": "ettestt5"
    //     }, {
    //         "executethis": "ettestt6"
    //     }],
    //     function (err, res) {
    //         callback(err, res);
    //     }
    // );
    // }) 

    var result = [];
    var err;

    ettestt1(result, function(err, r1) {
        result.push(r1);
        ettestt2(result, function(err, r2) {
            result.push(r2);
            ettestt3(result, function(err, r3) {
                result.push(r3);
                ettestt3a(result, function(err, r3a) {
                    result.push(r3a);
                    ettestt4(result, function(err, r4) {
                        result.push(r4);
                        ettestt4a(result, function(err, r4a) {
                            result.push(r4a);
                            ettestt5(result, function(err, r5) {
                                result.push(r5);
                                ettestt6(result, function(err, r6) {
                                    result.push(r6);
                                    callback(err, result);
                                });
                            });
                        });
                    });
                });
            });
        });
    });
}
widtests.ettesttt.category = "execute";
widtests.ettesttt.subcategory = "daily";
widtests.ettesttt.js = exports.ettesttt;
widtests.ettesttt.description = "this does a test";

// This series is identical to tt, except that the functions called 
// by executethis are async, and therefore use callbacks to return data
// to the calling function.
//exports.ettestastt = ettestastt = function ettestastt(params, callback) {
exports.ettestastt = widtests.ettestastt = ettestastt = function ettestastt(params, callback) {
    // execute([{
    //         "executethis": "ettestast1"
    //     }, {
    //         "executethis": "ettestast2"
    //     }, {
    //         "executethis": "ettestast3"
    //     }, {
    //         "executethis": "ettestast3a"
    //     }, {
    //         "executethis": "ettestast4"
    //     }, {
    //         "executethis": "ettestast4a"
    //     }, {
    //         "executethis": "ettestast5"
    //     }, {
    //         "executethis": "ettestast6"
    //     }],
    //     function (err, res) {
    //         callback(err, res);
    //     }
    // );

    var result = [];
    var err;

    ettestast1(result, function(err, r1) {
        result.push(r1);
        ettestast2(result, function(err, r2) {
            result.push(r2);
            ettestast3(result, function(err, r3) {
                result.push(r3);
                ettestast3a(result, function(err, r3a) {
                    result.push(r3a);
                    ettestast4(result, function(err, r4) {
                        result.push(r4);
                        ettestast4a(result, function(err, r4a) {
                            result.push(r4a);
                            ettestast5(result, function(err, r5) {
                                result.push(r5);
                                ettestast6(result, function(err, r6) {
                                    result.push(r6);
                                    callback(err, result);
                                });
                            });
                        });
                    });
                });
            });
        });
    });
}
widtests.ettestastt.category = "execute";
widtests.ettestastt.subcategory = "daily";
widtests.ettestastt.js = exports.ettestastt;
widtests.ettestastt.description = "this does a test";

// This series uses the sync functions of a,b, and c with changes to the
// configuration parameters. This allows for calling func_b by calling
// redir_b instead of func_b, redir_a instead of func_a, and so on.
//exports.ettestctt = ettestctt = function ettestctt(params, callback) {
exports.ettestctt = widtests.ettestctt = ettestctt = function ettestctt(params, callback) {
    // execute([{
    //         "executethis": "ettestct1"
    //     }, {
    //         "executethis": "ettestct2"
    //     }, {
    //         "executethis": "ettestct3"
    //     }, {
    //         "executethis": "ettestct3a"
    //     }, {
    //         "executethis": "ettestct4"
    //     }, {
    //         "executethis": "ettestct4a"
    //     }, {
    //         "executethis": "ettestct5"
    //     }, {
    //         "executethis": "ettestct6"
    //     }, {
    //         "executethis": "ettestct7"

    //     //     // ct8 will break the ctt test run
    //     //     // // },{ 
    //     //     // // "executethis": "ettestct8"

    //     }, {
    //         "executethis": "ettestct9"
    //     }, {
    //         "executethis": "ettestct10"
    //     }, {
    //         "executethis": "ettestct11"
    //     }, {
    //         "executethis": "ettestct13"
    //     }, {
    //         "executethis": "ettestct14"
    //     }, {
    //         "executethis": "ettestct15"
    //     }, {
    //         "executethis": "ettestct16"
    //     },{ 
    //         "executethis": "ettestct18"
    //     },{
    //         "executethis": "ettestct19"
    //     },{ 
    //         "executethis": "ettestct20"
    //     }],
    //     function (err, res) {
    //         console.log('special*** \n' + JSON.stringify(res, "-", 4));
    //         callback(err, res);
    //     }
    // );

    var result = [];
    var err;

    ettestct1(result, function(err, r1) {
        result.push(r1);
        ettestct2(result, function(err, r2) {
            result.push(r2);
            ettestct3(result, function(err, r3) {
                result.push(r3);
                ettestct3a(result, function(err, r3a) {
                    result.push(r3a);
                    ettestct4(result, function(err, r4) {
                        result.push(r4);
                        ettestct4a(result, function(err, r4a) {
                            result.push(r4a);
                            ettestct5(result, function(err, r5) {
                                result.push(r5);
                                ettestct6(result, function(err, r6) {
                                    result.push(r6);
                                    ettestct7(result, function(err, r7) {
                                        result.push(r7);
                                        ettestct9(result, function(err, r9) {
                                            result.push(r9);
                                            ettestct10(result, function(err, r10) {
                                                result.push(r10);
                                                ettestct11(result, function(err, r11) {
                                                    result.push(r11);
                                                    ettestct13(result, function(err, r13) {
                                                        result.push(r13);
                                                        ettestct14(result, function(err, r14) {
                                                            result.push(r14);
                                                            ettestct15(result, function(err, r15) {
                                                                result.push(r15);
                                                                ettestct16(result, function(err, r16) {
                                                                    result.push(r16);
                                                                    ettestct17(result, function(err, r17) {
                                                                        result.push(r17);
                                                                        ettestct18(result, function(err, r18) {
                                                                            result.push(r18);
                                                                            ettestct19(result, function(err, r19) {
                                                                                result.push(r19);
                                                                                ettestct20(result, function(err, r20) {
                                                                                    result.push(r20);
                                                                                    callback(err, result);
                                                                                });
                                                                            });
                                                                        });
                                                                    });
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
}
widtests.ettestctt.category = "execute";
widtests.ettestctt.subcategory = "daily";
widtests.ettestctt.js = exports.ettestctt;
widtests.ettestctt.description = "this does a test";


// These are the add/get tests to stress out the dto/dot notation system
//exports.ettestagtt = ettestagtt = function ettestagtt(params, callback) {
exports.ettestagtt = widtests.ettestagtt = ettestagtt = function ettestagtt(params, callback) {

    // execute([{
    //         "executethis": "ettestag1"
    //     }, {
    //         "executethis": "ettestag2"
    //     }, {
    //         "executethis": "ettestag3"
    //     }],
    //     function (err, res) {
    //         callback(err, res);
    //     }
    // );

    var result = [];
    var err;

    ettestag1(result, function(err, r1) {
        result.push(r1);
        ettestag2(result, function(err, r2) {
            result.push(r2);
            ettestag3(result, function(err, r3) {
                result.push(r3);
                callback(err, result);
            });
        });
    });
}
widtests.ettestagtt.category = "execute";
widtests.ettestagtt.subcategory = "daily";
widtests.ettestagtt.js = exports.ettestagtt;
widtests.ettestagtt.description = "this does a test";

// These are the deepfilter tests
//exports.ettestetdtt = ettestetdtt = function ettestetdtt(params, callback) {
exports.ettestetdtt = widtests.ettestetdtt = ettestetdtt = function ettestetdtt(params, callback) {

    var result = [];
    var err;

    etd16(result, function(err, r1) {
        result.push(r1);
        etd17(result, function(err, r2) {
            result.push(r2);
            etd18(result, function(err, r3) {
                result.push(r3);
                etd19(result, function(err, r4) {
                    result.push(r4);
                    callback(err, result);
                });
            });
        });
    });
}
widtests.ettestetdtt.category = "execute";
widtests.ettestetdtt.subcategory = "daily";
widtests.ettestetdtt.js = exports.ettestetdtt;
widtests.ettestetdtt.description = "this does a test";


// 888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
// 888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
// 888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
// functions a,b,c manipulate parameters
// Call func_b with no pre or post...it should simply remove 'e' and add 'g' to the parameters
//exports.ettestt1 = ettestt1 = function ettestt1(params, callback) {
exports.ettestt1 = widtests.ettestt1 = ettestt1 = function ettestt1(params, callback) {

    debugger;
    eventappinstall();
    execute([{
            "executethis": "func_b",
            "c": "0",
            "d": "1",
            "e": "2"
        }],
        function(err, res) {
            res = logverify("ettestt1_result", res[0], [{
                "c": "0",
                "d": "1",
                "g": "4"
            }]);
            callback(err, res);
        });
}
widtests.ettestt1.category = "execute";
widtests.ettestt1.subcategory = "daily";
widtests.ettestt1.js = exports.ettestt1;
widtests.ettestt1.description = "this does a test";


// Not an 'at' test...used to test the verify system. This is a passing test.
//exports.ettestt1s = ettestt1s = function ettestt1s(params, callback) {
exports.ettestt1s = widtests.ettestt1s = ettestt1s = function ettestt1s(params, callback) {

    eventappinstall();
    res = logverify("ettestt1s_result", {
        "d": "1",
        "c": "0",
        "g": "4"
    }, {
        "d": "1",
        "c": "0",
        "g": "4"
    });
    var err;
    callback(err, res);
}
widtests.ettestt1s.category = "execute";
widtests.ettestt1s.subcategory = "daily";
widtests.ettestt1s.js = exports.ettestt1s;
widtests.ettestt1s.description = "this does a test";

// Not an 'at' test...used to tes the veryify system. This is a failing test.
//exports.ettestt1sf = ettestt1sf = function ettestt1sf(params, callback) {
exports.ettestt1sf = widtests.ettestt1sf = ettestt1sf = function ettestt1sf(params, callback) {

    eventappinstall();
    res = logverify("ettestt1sf_result", {
        "d": "1",
        "c": "0",
        "g": "4"
    }, {
        "d": "1",
        "c": "0",
        "g": "4",
        "h": "5"
    });
    var err;
    callback(err, res);
}
widtests.ettestt1sf.category = "execute";
widtests.ettestt1sf.subcategory = "daily";
widtests.ettestt1sf.js = exports.ettestt1sf;
widtests.ettestt1sf.description = "this does a test";


//exports.ss1 = ss1 = function ss1(params, callback) {
exports.ss1 = widtests.ss1 = ss1 = function ss1(params, callback) {
    proxyprinttodiv('Function ss1 ', '--', 99);
    // execute(
    //     [ 
    //         {
    //             "executethis":"sendsms", 
    //               "tonumber": "+12145644732",
    //               "msgbody": "This the server- I just restarted "
    //             //"To":"+12145644732", 
    //               //To": "+12313133930",
    //             //"Body":"test msg"
    //         }
    //     ], 
    sendsms({
            "to": "+12145644732",
            "body": "test"
        },
        function(err, res) {
            callback(err, res[0])
        }
    );
}
widtests.ss1.category = "execute";
widtests.ss1.subcategory = "daily";
widtests.ss1.js = exports.ss1;
widtests.ss1.description = "this does a test";


// 888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
// 888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
// 888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
// This whole section will mirror the tt tests, but call functions that have intentional
// delays to test the async portioins of the system.
//exports.ettestast1 = ettestast1 = function ettestast1(params, callback) {
exports.ettestast1 = widtests.ettestast1 = ettestast1 = function ettestast1(params, callback) {
    eventappinstall();
    execute([{
            "executethis": "async_func_b",
            "c": "0",
            "d": "1",
            "e": "2"
        }],
        function(err, res) {
            res = logverify("ettestast1_result", res[0], [{
                "d": "1",
                "c": "0",
                "g": "4"
            }]);
            callback(err, res);
        });
}
widtests.ettestast1.category = "execute";
widtests.ettestast1.subcategory = "daily";
widtests.ettestast1.js = exports.ettestast1;
widtests.ettestast1.description = "this does a test";



// 888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
// 888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
// 888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
// Call redir_b. The config should remap redir_b to call func_b with no pre or post execution.
//exports.ettestct1 = ettestct1 = function ettestct1(params, callback) {
exports.ettestct1 = widtests.ettestct1 = ettestct1 = function ettestct1(params, callback) {

    var parameters = {
        "executethis": "redir_b",
        "c": "0",
        "d": "1",
        "e": "2",
        "configuration": {
            "redir_a": [{
                "dothis": "func_a",
                "tryorder": 0,
                "executeorder": 0,
                "params": {}
            }],
            "redir_b": [{
                "dothis": "func_b",
                "tryorder": 0,
                "executeorder": 0,
                "params": {}
            }],
            "redir_c": [{
                "dothis": "func_c",
                "tryorder": 0,
                "executeorder": 0,
                "params": {}
            }]
        }
    }
    var assert = [];
    assert.push({
        "d": "1",
        "c": "0",
        "g": "4",
        "configuration": {
            "redir_a": [{
                "dothis": "func_a",
                "tryorder": 0,
                "executeorder": 0,
                "params": {}
            }],
            "redir_b": [{
                "dothis": "func_b",
                "tryorder": 0,
                "executeorder": 0,
                "params": {}
            }],
            "redir_c": [{
                "dothis": "func_c",
                "tryorder": 0,
                "executeorder": 0,
                "params": {}
            }]
        }
    })
    // var res = master_test_and_verify (testname,          parameters, assert, database, command, callback) {

    var res = master_test_and_verify("ettestct1", parameters, assert, {}, {
        "command": "null"
    }, function(err, res) {
        callback(err, res)
    });
}
widtests.ettestct1.category = "execute";
widtests.ettestct1.subcategory = "daily";
widtests.ettestct1.js = exports.ettestct1;
widtests.ettestct1.description = "this does a test";




// This test is to call does_not_exist, remaapped in the parameters to remap does_not_exist to func_b and execute...so far it doesn't work....
//exports.ettestct9 = ettestct9 = function ettestct9(params, callback) {
exports.ettestct9 = widtests.ettestct9 = ettestct9 = function ettestct9(params, callback) {

    eventappinstall();
    var parameters = {
        "executethis": "does_not_exist",
        "does_not_exist": "func_b",
        "c": "0",
        "d": "1",
        "e": "2"
    }
    // since we are overiding how functions are maped here, "does_not_exist_* are not deleted from the params
    var assert = [];
    assert.push({
        "does_not_exist": "func_b",
        "d": "1",
        "c": "0",
        "g": "4"
    });
    var res = master_test_and_verify("ettestct9", parameters, assert, {}, {
        "command": "null"
    }, function(err, res) {
        callback(err, res)
    });
}
widtests.ettestct9.category = "execute";
widtests.ettestct9.subcategory = "daily";
widtests.ettestct9.js = exports.ettestct9;
widtests.ettestct9.description = "this does a test";

// This test is to call does_not_exist, remapped to a function in the parameters. So far it does not work...never has.
//exports.ettestct9a = ettestct9a = function ettestct9a(params, callback) {
exports.ettestct9a = widtests.ettestct9a = ettestct9a = function ettestct9a(params, callback) {

    eventappinstall();
    var parameters = {
        "executethis": "does_not_exist",
        "does_not_exist": "function () { return {data: 'Keg of Beer'}; }"
    }
    var assert = [];
    assert.push({
        "data": "Keg of Beer"
    });
    var res = master_test_and_verify("ettestct9a", parameters, assert, {}, {
        "command": "null"
    }, function(err, res) {
        callback(err, res)
    });
}
widtests.ettestct9a.category = "execute";
widtests.ettestct9a.subcategory = "daily";
widtests.ettestct9a.js = exports.ettestct9a;
widtests.ettestct9a.description = "this does a test";


// 888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
// 888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
// 888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
// Functions to use in pre, mid and post
// to test the flow of parameters through executethis

//exports.func_a = func_a = function func_a(parameters, callback) {
exports.func_a = widtests.func_a = func_a = function func_a(params, callback) {

    console.log('from func_a');
    printToDiv('func_a', parameters, 1);
    delete parameters["d"];
    parameters["f"] = "3";
    var err;
    callback(err, parameters);
}
widtests.func_a.category = "execute";
widtests.func_a.subcategory = "daily";
widtests.func_a.js = exports.func_a;
widtests.func_a.description = "this does a test";


//exports.func_b = func_b = function func_b(parameters, callback) {
exports.func_b = widtests.func_b = func_b = function func_b(params, callback) {

    console.log('from func_b');
    delete params["e"];
    params["g"] = "4";
    var err;
    callback(err, params);
}
widtests.func_b.category = "execute";
widtests.func_b.subcategory = "daily";
widtests.func_b.js = exports.func_b;
widtests.func_b.description = "this does a test";

exports.func_c = widtests.func_c = func_c = function func_c(parameters, callback) {
    console.log('from func_c');
    printToDiv('func_c', parameters, 1);
    delete parameters["c"];
    parameters["h"] = "5";
    var err;
    callback(err, parameters);
}
widtests.func_c.category = "execute";
widtests.func_c.subcategory = "daily";
widtests.func_c.js = exports.func_c;
widtests.func_c.description = "this does a test";

// This is used when a and b do not exist, but the fire_c
// is sent as a parameter, and that parameter is to call fire_c.
//exports.fire_c = fire_c = function fire_c(parameters, callback) {
exports.fire_c = widtests.fire_c = fire_c = function fire_c(parameters, callback) {

    parameters["fire_c"] = "fire_c is now fired";
    var err;
    callback(err, parameters);
}
widtests.fire_c.category = "execute";
widtests.fire_c.subcategory = "daily";
widtests.fire_c.js = exports.fire_c;
widtests.fire_c.description = "this does a test";

// These are the async versions of the above func_a, _b, and _c.
exports.async_func_a = widtests.async_func_a = async_func_a = function async_func_a(parameters, callback) {
    delete parameters["d"];
    parameters["f"] = "3";
    //sleep(500);
    var err;
    callback(err, parameters);
}
widtests.async_func_a.category = "execute";
widtests.async_func_a.subcategory = "daily";
widtests.async_func_a.js = exports.async_func_a;
widtests.async_func_a.description = "this does a test";

//exports.async_func_b = async_func_b = function async_func_b(parameters, callback) {
exports.async_func_b = widtests.async_func_b = async_func_b = function async_func_b(parameters, callback) {

    delete parameters["e"];
    parameters["g"] = "4";
    sleep(500);
    var err;
    callback(err, parameters);
}
widtests.async_func_b.category = "execute";
widtests.async_func_b.subcategory = "daily";
widtests.async_func_b.js = exports.async_func_b;
widtests.async_func_b.description = "this does a test";

//exports.async_func_c = async_func_c = function async_func_c(parameters, callback) {
exports.async_func_c = widtests.async_func_c = async_func_c = function async_func_c(parameters, callback) {

    delete parameters["c"];
    parameters["h"] = "5";
    //sleep(500);
    var err;
    callback(err, parameters);
}
widtests.async_func_c.category = "execute";
widtests.async_func_c.subcategory = "daily";
widtests.async_func_c.js = exports.async_func_c;
widtests.async_func_c.description = "this does a test";

// 888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
// 888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
// 888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888

//exports.ettestag11 = ettestag11 = function ettestag11(params, callback) {
exports.ettestag11 = widtests.ettestag11 = ettestag11 = function ettestag11(parameters, callback) {

    eventappinstall();
    execute([{
            "executethis": "addwidmaster",
            "wid": "first_wid",
            "data_1": "Red"
        }, {
            "executethis": "addwidmaster",
            "wid": "second_wid",
            "data_2": "Green"
        }, {
            "executethis": "addwidmaster",
            "wid": "third_wid",
            "data_3": "Blue"
        }, {
            "executethis": "first_wid"
        }, {
            "executethis": "second_wid"
        }, {
            "executethis": "third_wid"
        }],
        function(err, res) {

            console.log('Function ag11 result\n' + JSON.stringify(res, '-', 4));

            // res = logverify("ettestag11_result", res[3], [{
            //     "data_1": "Red",
            //     "wid": "first_wid",
            //     "metadata": {}
            // }]);

            // res = logverify("ettestag11_result", res[4], [{
            //     "data_2": "Green",
            //     "wid": "second_wid",
            //     "metadata": {}
            // }]);

            res = logverify("ettestag11_result", res[4], [{
                "0": {
                    "data_2": "Green",
                    "wid": "second_wid",
                    "metadata": {}
                }
            }])

            // res = logverify("ettestag11_result", res[5], [{
            //     "data_3": "Blue",
            //     "wid": "third_wid",
            //     "metadata": {}
            // }]);

            callback(err, res);
        });
}
widtests.ettestag11.category = "execute";
widtests.ettestag11.subcategory = "daily";
widtests.ettestag11.js = exports.ettestag11;
widtests.ettestag11.description = "this does a test";

//exports.ettestag12 = ettestag12 = function ettestag12(params, callback) {


// This will test the ability to write a dto to the db and retrieve it

//exports.ettestag1 = ettestag1 = function ettestag1(params, callback) {
exports.ettestag1 = widtests.ettestag1 = ettestag1 = function ettestag1(params, callback) {
    // var debugger;
    // debuglevel = 18;
    // eventappinstall();

    proxyprinttodiv("Ag1  params ", params, 99);
    var env = new drienvironment(params.command.environment);
    proxyprinttodiv("Ag1  env ", env, 99);
    env.execute([{
            //execute([{
            "executethis": "addwidmaster",
            "wid": "sounddto",
            "metadata.method": "sounddto",
            "note": "string"
        }, {
            "executethis": "getwidmaster",
            "wid": "sounddto"
        }],
        function(err, res1) {
            proxyprinttodiv("Ag1  result ", res1, 99);
            // var res = res1[1]; //~~~ changed by SAURABH 
            var res = res1[1];

            proxyprinttodiv('Function ag1 expected res ', {
                "note": "string",
                "wid": "sounddto",
                "metadata.method": "sounddto"
            }, 99);
            proxyprinttodiv('Function ag1 actual result ', res, 99);
            res = logverify("ettestag1_result", res, {
                "wid": "sounddto",
                "metadata": {
                    "method": "sounddto"
                },
                "note": "string"
            });

            callback(err, res);
        });
}

widtests.ettestag1.category = "execute";
widtests.ettestag1.subcategory = "daily";
widtests.ettestag1.js = exports.ettestag1;
widtests.ettestag1.description = "this does a test";


//exports.ettestag1a = ettestag1a = function ettestag1a(params, callback) {
exports.ettestag1a = widtests.ettestag1a = ettestag1a = function ettestag1a(params, callback) {
    eventappinstall();

    debuglevel = 75;
    saveglobal("debugname", "updatewid");
    saveglobal("debugcat", "");
    debugsubcat = "";

    execute([{
            "executethis": "addwidmaster",
            "wid": "superhero",
            "name": "Nick"
        }, {
            "executethis": "updatewid",
            "wid": "superhero",
            "name": "Nick Fury"
        }, {
            "executethis": "getwidmaster",
            "wid": "superhero"
        }],
        function(err, res) {
            proxyprinttodiv('Function ag1 result ', res, 17);
            res = logverify("ettestag1a_result", res[2], {
                "name": "Nick Fury",
                "wid": "superhero",
                "metadata.method": ""
            });


            debugfn("updatewid code generator END", "updatewid", "add", "code", getglobal("debugcolor"), getglobal("debugindent"), {}, 5);
            saveglobal("debugname", "");
            saveglobal("debugcat", "");
            debugsubcat = "";

            callback(err, res);
        });
}
widtests.ettestag1a.category = "execute";
widtests.ettestag1a.subcategory = "daily";
widtests.ettestag1a.js = exports.ettestag1a;
widtests.ettestag1a.description = "this does a test";

// // This will test the ability to write a dto to the db, use that dto to write
// // a wid with that dto, and get the results of getting that widtests.
// exports.ag211 = ag211 = function ag211(params, callback) {
//  // eventappinstall();
//  // ag2_setup();
//  executetest("getwidmaster", {
//      "wid": "color1"
//  }, "get_color1_result", "");

//  params = logverify("alpha_unit_tests", "ag2_result", "get_color1_result", "", "", {
//      "hue": "red",
//      "wid": "color1",
//      "metadata.method": "defaultdto"
//  });

//  console.log(' >>>>>> ' + params);

//  if (callback instanceof Function) {
//      var err;callback(err,params);
//  } else {
//      return params;
//  }
// }

//exports.ettestag122 = ettestag122 = function ettestag122(params, callback) {
exports.ettestag122 = widtests.ettestag122 = ettestag122 = function ettestag122(params, callback) {

    var a = {
        "wid": "systemdefault",
        "command": {
            "dtotype": "",
            "adopt": "default",
            "getwidmaster": {
                "inheritflag": "false",
                "execute": "ConvertFromDOTdri"
            },
            "resultparameters": {
                "note": "string",
                "wid": "sounddto",
                "metadata": {
                    "method": "sounddto"
                }
            }
        },
        "executethis": "getwidmaster"
    }
    proxyprinttodiv('>>>> before a', a, 99);
    var filter_data = getcommand(a, {
        "command.internalcall": false
        //     // "beginexecute" : {"execute":"","parameters":{}},
        //     // "beforemidexecute" : {"execute":"","parameters":{}},
        //     // "beforepostexecute" : {"execute":"","parameters":{}},
        //     // "endexecute" : {"execute":"","parameters":{}},
        //     // "securitycheck" : {"execute":"","parameters":{}},
        //     // "multiple" : {"execute":"","parameters":{}}

    }, {
        "command.internalcall": ""
        // "beginexecute" : {"execute":"","parameters":{}},
        // "beforemidexecute" : {"execute":"","parameters":{}},
        // "beforepostexecute" : {"execute":"","parameters":{}},
        // "endexecute" : {"execute":"","parameters":{}},
        // "securitycheck" : {"execute":"","parameters":{}},
        // "multiple" : {"execute":"","parameters":{}}

    }, true);
    proxyprinttodiv('>>>> after a', filter_data.output, 99);

}
widtests.ettestag122.category = "execute";
widtests.ettestag122.subcategory = "daily";
widtests.ettestag122.js = exports.ag211;
widtests.ettestag122.description = "this does a test";

// This will test the ability to write a dto to the db, use that dto to write
// a wid with that dto, and get the results of getting that widtests.
//exports.ettestag2 = ettestag2 = function ettestag2(params, callback) {
exports.ettestag2 = widtests.ettestag2 = ettestag2 = function ettestag2(params, callback) {

    //    eventappinstall();
    // alert('here');

    debuglevel = 75;
    saveglobal("debugname", "");
    saveglobal("debugcat", "");
    saveglobal("debugsubcat", "code");

    execute([{
            "executethis": "addwidmaster",
            "wid": "colordto",
            "metadata.method": "colordto",
            "hue": "string"
        }, {
            "executethis": "addwidmaster",
            //"metadata.method": "colordto", // added by joe
            "wid": "color1",
            "hue": "red"
        }, {
            "executethis": "addwidmaster",
            //"metadata.method": "colordto", // added by joe
            "wid": "color2",
            "hue": "blue"
        }, {
            "executethis": "getwidmaster",
            "wid": "color1"
        }],
        function(err, res) {
            debugfn("offlinegetwid code generator END", "ag2", "", "code", getglobal("debugcolor"), getglobal("debugindent"), {}, 9);

            saveglobal("debugname", "");
            saveglobal("debugcat", "");
            debugsubcat = "";
            proxyprinttodiv('Function ag2 result ', res, 38);
            res = logverify("ettestag2_result", res[3], {
                "hue": "red",
                "wid": "color1",
                "metadata": {
                    "method": "defaultdto"
                } // changed by joe
                //"metadata": {"method":"colordto"}
            });
            callback(err, res);
        });
};
widtests.ettestag2.category = "execute";
widtests.ettestag2.subcategory = "daily";
widtests.ettestag2.js = exports.ettestag2;
widtests.ettestag2.description = "this does a test";

// This is a 2 level test of the dtos...instantiate song1 with a songdto, and some sounddto values
// failing due to a command object being sent back
//exports.ettestag3 = ettestag3 = function ettestag3(params, callback) {
exports.ettestag3 = widtests.ettestag3 = ettestag3 = function ettestag3(params, callback) {

    //eventappinstall();

    //debuglevel = 17;
    //saveglobal("debugname", "");

    //%%%%%%%%%%%%%%%%%%%%%
    // Functions of --- config-local
    // saveglobal("debugname", "offlineupdatewid");

    // saveglobal("debugname", "offlinegetwid");
    //%%%%%%%%%%%%%%%%%%%%%
    // Functions of --- add

    // %%%%%%%%%%%%%%%%%%%%%
    // Functions of --- query
    // saveglobal("debugname", "querywid");

    // %%%%%%%%%%%%%%%%%%%%%
    // Functions of --- get
    // saveglobal("debugname", "getwid");

    // saveglobal("debugname", "aggressivedto");

    // saveglobal("debugname", "getcleanparameters");

    // saveglobal("debugname", "getwidmaster");

    // saveglobal("debugname", "getwidmongo");
    // saveglobal("debugname", "getcleanparameters");
    // %%%%%%%%%%%%%%%%%%%%%

    // saveglobal("debugcat", "");
    // saveglobal("debugsubcat", "code");

    debuglevel = 0;
    execute([{
            // "executethis": "addwidmaster",
            // "wid": "songdto",
            // "metadata.method": "songdto",
            // "title": "string",
            // "metadata.sounddto.type": "onetomany",
            // "sounddto.wid": "sounddto",
            // "sounddto.metadata.method": "sounddto",
            // "sounddto.note": "string"
            //, {
            "executethis": "addwidmaster",
            "wid": "sounddto",
            "metadata.method": "sounddto",
            "note": "string"
        }, {
            "executethis": "addwidmaster",
            "wid": "songdto",
            "metadata.method": "songdto",
            "title": "string",
            "metadata.sounddto.type": "onetomany"
        }, {
            "executethis": "addwidmaster",
            "wid": "rel_sound_to_song",
            "metadata.method": "relationshipdto",
            "primarywid": "songdto",
            "secondarywid": "sounddto",
            "primarymethod": "songdto",
            "secondarymethod": "sounddto",
            "linktype": "onetomany",
            "relationshiptype": "attributes"
            // }, {
            //     "executethis": "addwidmaster",
            //     "wid": "song1",
            //     "metadata.method": "songdto",
            //     "title": "Highway to Hell",
            //     "sounddto.0.note": "A flat",
            //     "sounddto.1.note": "B sharp",
            //     "sounddto.2.note": "C flat"
        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "songdto",
            "title": "Highway to Hell",
            "sounddto.wid": "ag3aflat",
            "sounddto.note": "A flat"
        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "songdto",
            "title": "Highway to Hell",
            "sounddto.wid": "ag3bsharp",
            "sounddto.note": "B sharp"
        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "songdto",
            "title": "Highway to Hell",
            "sounddto.wid": "ag3cflat",
            "sounddto.note": "C flat"
        }, {
            "executethis": "getwidmaster",
            "wid": "song1",
            "command": {
                "getwidmaster": {
                    "execute": "ConvertToDOTdri"
                }
            }
        }],
        // execute([{
        //  "executethis": "updatewid", 
        //  "wid": "authordto",
        //  "metadata.method": "authordto",
        //  "Author": "string"
        // },
        // {    
        //  "executethis": "updatewid", 
        //  "wid": "bookdto",
        //  "metadata.method": "bookdto",
        //  "title": "string"
        // },
        // {    
        //  "executethis": "updatewid", 
        //  "wid": "rel_author_to_book",
        //  "primarywid": "authordto",
        //  "secondarywid": "bookdto",
        //  "relationshiptype": "attributes"
        // },
        // {    
        //  "executethis": "updatewid", 
        //  "wid": "book1",
        //  "metadata.method": "bookdto",
        //  "title": "The book of testing",
        //  "authordto.0.author": "Sammy Sample"
        // },
        // {
        //  "executethis": "getwidmaster",
        //  "wid": "book1"
        // }],

        function(err, res) {
            // alert('err' + JSON.stringify(err, '-', 4));


            // debugfn("update code generator END", "updatewid", "add", "code", getglobal("debugcolor"), getglobal("debugindent"), {}, 5);
            // 
            // These will create the code on the screen from the logged data

            //%%%%%%%%%%%%%%%%%%%%%
            // Functions of --- config-local

            // debugfn("update code generator END",        "offlineupdatewid", "add",   "code", getglobal("debugcolor"), getglobal("debugindent"), {}, 9);
            // debugfn("offlinegetwid code generator END", "offlinegetwid",    "get",   "code", getglobal("debugcolor"), getglobal("debugindent"), {}, 9);
            debugfn("offlinegetwid code generator END", "", "", "code", getglobal("debugcolor"), getglobal("debugindent"), {}, 9);

            //%%%%%%%%%%%%%%%%%%%%%
            // Functions of --- add

            //%%%%%%%%%%%%%%%%%%%%%
            // Functions of --- query

            // debugfn("querywid code generator END",      "querywid",         "query", "code", getglobal("debugcolor"), getglobal("debugindent"), {}, 9);

            // %%%%%%%%%%%%%%%%%%%%%
            // Functions of --- get

            // debugfn("getwidmaster code generator END",  "getwidmaster",     "get",   "code", getglobal("debugcolor"), getglobal("debugindent"), {}, 9);
            // debugfn("getWidMongo code generator END",   "getWidMongo",      "get",   "code", getglobal("debugcolor"), getglobal("debugindent"), {}, 9);
            // debugfn("getcleanparameters code generator END",   "getcleanparameters",      "get",   "code", getglobal("debugcolor"), getglobal("debugindent"), {}, 9);

            // %%%%%%%%%%%%%%%%%%%%%
            // saveglobal("debugname", "");
            // saveglobal("debugcat", "");
            // saveglobal("debugsubcat", "");

            proxyprinttodiv('Function ag3 result Full res', res, 17);
            proxyprinttodiv('Function ag3 result ', res[6], 17);

            res = logverify("ettestag3_result", res[6], {
                "title": "Highway to Hell",
                "wid": "song1",
                "metadata.method": "songdto",
                "metadata.sounddto.type": "onetomany",
                "sounddto.0.note": "A flat",
                "sounddto.0.wid": "ag3aflat",
                "sounddto.0.metadata.method": "sounddto",
                "sounddto.0.metadata.parentwidtests.song1": "songdto",
                "sounddto.1.note": "B sharp",
                "sounddto.1.wid": "ag3bsharp",
                "sounddto.1.metadata.method": "sounddto",
                "sounddto.1.metadata.parentwidtests.song1": "songdto",
                "sounddto.2.note": "C flat",
                "sounddto.2.wid": "ag3cflat",
                "sounddto.2.metadata.method": "sounddto",
                "sounddto.2.metadata.parentwidtests.song1": "songdto"
            });
            debuglevel = 0;
            // execute({"executethis": "getwidmaster","wid": "songdto",
            //       "command":{"getwidmaster":{"convertmethod":"dto",
            //                               "execute":"ConvertFromDOTdri",
            //                               "inheritflag":"true","dtotype":""}}}, function (err, res1) {
            execute([{
                "executethis": "getwidmaster",
                "wid": "song1"
            }], function(err, res1) {
                proxyprinttodiv('Function ag3 result LAST ', res1, 99);
                callback(err, res);

            })
        });
}
widtests.ettestag3.category = "execute";
widtests.ettestag3.subcategory = "daily";
widtests.ettestag3.js = exports.ettestag3;
widtests.ettestag3.description = "this does a test";

// This test does not add the data records correctly
//exports.ettestag3b = ettestag3b = function ettestag3b(params, callback) {
exports.ettestag3b = widtests.ettestag3b = ettestag3b = function ettestag3b(params, callback) {

    eventappinstall();

    execute([{
            "executethis": "addwidmaster",
            "wid": "sonddto",
            "metadata.method": "sonddto",
            "title": "string",
            "metadata.sounddto.type": "jsononetomany",
            "sounddto.wid": "sounddto",
            "sounddto.metadata.method": "sounddto",
            "sounddto.note": "string"
        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "sonddto",
            "title": "Highway to Hell",
            "sounddto.0.note": "A flat"
        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "sonddto",
            "title": "Highway to Hell",
            "sounddto.0.note": "B sharp"
        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "sonddto",
            "title": "Highway to Hell",
            "sounddto.0.note": "C flat"
        }, {
            "executethis": "getwidmaster",
            "wid": "song1"
        }],

        function(err, res) {

            proxyprinttodiv('Function ag3 result Full res', res, 17);
            proxyprinttodiv('Function ag3 result ', res[4], 17);

            res = logverify("ettestag3_result", res[4], [{
                "title": "Highway to Hell",
                "wid": "song1",
                "metadata.method": "sonddto",
                "sounddto.0.note": "A flat",
                "sounddto.0.wid": "2",
                "sounddto.0.metadata.method": "sounddto",
                "sounddto.1.note": "B sharp",
                "sounddto.1.wid": "4",
                "sounddto.1.metadata.method": "sounddto",
                "sounddto.2.note": "C flat",
                "sounddto.2.wid": "6",
                "sounddto.2.metadata.method": "sounddto"
            }]);
            debuglevel = 38;
            execute({
                "executethis": "getwidmaster",
                "wid": "sonddto",
                "command": {
                    "getwidmaster": {
                        "convertmethod": "dto",
                        "execute": "ConvertFromDOTdri",
                        "inheritflag": "true",
                        "dtotype": ""
                    }
                }
            }, function(err, res1) {
                //execute({"executethis": "getwidmaster","wid": "song1"}, function (err, res1) {
                proxyprinttodiv('Function ag3 result LAST ', res1, 17);
                callback(err, res);

            })
        });
}
widtests.ettestag3b.category = "execute";
widtests.ettestag3b.subcategory = "daily";
widtests.ettestag3b.js = exports.ettestag3b;
widtests.ettestag3b.description = "this does a test";

// Test for supporting jsononetomany
// *** warning clear local storage ***
// 2/26/2014 -et-add - small amount of changes added today, ag5 is now makking it all the way through 
// Major fix was making sure relationship was passed in correctly, bracket was also missing on else in addwid
// Next step will be to add array processing to update wid
// 2/27/2014
// Goal for ag5's return
// [ { 
//     "title" : "Highway to Hell",
//     "sounddto.0.note" : "A flat",
//     "sounddto.0.wid" : "2",
//     "sounddto.0.metadata.method" : "sounddto",
//     "sounddto.1.note" : "B sharp",
//     "sounddto.1.wid" : "4",
//     "sounddto.1.metadata.method" : "sounddto",
//     "sounddto.2.note" : "C flat",
//     "sounddto.2.wid" : "6",
//     "sounddto.2.metadata.method" : "sounddto",
//     "wid" : "song1",
//     "metadata.method" : "songdto"
// } ]

//exports.ettestag5 = ettestag5 = function ettestag5(params, callback) {
exports.ettestag5 = widtests.ettestag5 = ettestag5 = function ettestag5(params, callback) {

    eventappinstall();
    addToLocalStorage("DRI", [{
        "wid": "initialwid",
        "initialwid": "hello from bootprocess"
    }]);
    addToLocalStorage("DRIKEY", {
        "initialwid": {
            "wid": "initialwid",
            "initialwid": "for key hello from bootprocess"
        }
    });

    //debuglevel = 17;

    execute([{
            "executethis": "addwidmaster",
            "wid": "Songdto",
            "metadata.method": "Songdto",
            "title": "string",
            "metadata.sounddto.type": "jsononetomany",
            "sounddto.0.wid": "sounddto",
            "sounddto.0.metadata.method": "sounddto",
            "sounddto.0.note": "string"
        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "Songdto",
            "title": "Highway to Hell",
            "sounddto.note": "A flat"
        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "Songdto",
            "title": "Highway to Hell",
            "sounddto.note": "B sharp"
        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "Songdto",
            "title": "Highway to Hell",
            "sounddto.note": "C flat"
        }, {
            "executethis": "getwidmaster",
            "wid": "song1"
        }],
        function(err, res) {
            proxyprinttodiv('Function ag5 result Full res', res, 17);
            proxyprinttodiv('Function ag5 result ', res[4], 17);

            res = logverify("ettestag5_result", res[4], [{
                "title": "Highway to Hell",
                "wid": "song1",
                "metadata.method": "songdto",
                "sounddto.0.note": "A flat",
                "sounddto.0.wid": "2",
                "sounddto.0.metadata.method": "sounddto",
                "sounddto.1.note": "B sharp",
                "sounddto.1.wid": "4",
                "sounddto.1.metadata.method": "sounddto",
                "sounddto.2.note": "C flat",
                "sounddto.2.wid": "6",
                "sounddto.2.metadata.method": "sounddto"
            }]);

            execute({
                "executethis": "getwidmaster",
                "wid": "songdto",
                "command.getwidmaster.convertmethod": "dto",
                "command.getwidmaster.execute": "ConvertFromDOTdri"
            }, function(err, res1) {
                proxyprinttodiv('Function ag5 result LAST ', res1, 17);
                callback(err, res);
            });
        });
}
widtests.ettestag5.category = "execute";
widtests.ettestag5.subcategory = "daily";
widtests.ettestag5.js = exports.ettestag5;
widtests.ettestag5.description = "this does a test";

//exports.ettestag6 = ettestag6 = function ettestag6(params, callback) {
exports.ettestag6 = widtests.ettestag6 = ettestag6 = function ettestag6(params, callback) {

    eventappinstall();
    addToLocalStorage("DRI", [{
        "wid": "initialwid",
        "initialwid": "hello from bootprocess"
    }]);
    addToLocalStorage("DRIKEY", {
        "initialwid": {
            "wid": "initialwid",
            "initialwid": "for key hello from bootprocess"
        }
    });

    //debuglevel = 17;
    execute([{
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "Songdto",
            "title": "Highway to Hell",
            "sounddto[0].note": "A flat"
        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "Songdto",
            "title": "Highway to Hell",
            "sounddto.0.note": "B sharp"
        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "Songdto",
            "title": "Highway to Hell",
            "sounddto.0.note": "C flat"
        }],
        function(err, res) {
            proxyprinttodiv('Function ag5 result Full res', res, 17);
            proxyprinttodiv('Function ag5 result ', res[4], 17);

            res = logverify("ettestag5_result", res[4], [{
                "title": "Highway to Hell",
                "wid": "song1",
                "metadata.method": "songdto",
                "sounddto.0.note": "A flat",
                "sounddto.0.wid": "2",
                "sounddto.0.metadata.method": "sounddto",
                "sounddto.1.note": "B sharp",
                "sounddto.1.wid": "4",
                "sounddto.1.metadata.method": "sounddto",
                "sounddto.2.note": "C flat",
                "sounddto.2.wid": "6",
                "sounddto.2.metadata.method": "sounddto"
            }]);

            execute({
                "executethis": "getwidmaster",
                "wid": "songdto",
                "command.getwidmaster.convertmethod": "dto",
                "command.getwidmaster.execute": "ConvertFromDOTdri"
            }, function(err, res1) {
                proxyprinttodiv('Function ag5 result LAST ', res1, 17);
                callback(err, res);
            });
        });
}
widtests.ettestag6.category = "execute";
widtests.ettestag6.subcategory = "daily";
widtests.ettestag6.js = exports.ettestag6;
widtests.ettestag6.description = "this does a test";

// {
//     "executethis": "addwidmaster",
//     "wid": "song1",
//     "metadata": {
//         "method": "Songdto"
//     },
//     "title": "Highway to Hell",
//     "sounddto": [
//         {
//             "note": "A flat"
//         }
//     ]
// }
//exports.ettestag7 = ettestag7 = function ettestag7(params, callback) {
exports.ettestag7 = widtests.ettestag7 = ettestag7 = function ettestag7(params, callback) {

    var obj = {
        "executethis": "addwidmaster",
        "wid": "song1",
        "metadata": {
            "method": "Songdto"
        },
        "title": "Highway to Hell",
        "sounddto": [

            {
                "note": "A flat"
            }, {
                "tempo": "fast"
            }


        ]
    }

    // var temp = ConvertToDOTdri(obj);
    // proxyprinttodiv("ettestag7 converToDot -- DOT --> ", temp, 17);

    // temp = ConvertFromDOTdri(obj);
    // proxyprinttodiv("ettestag7 converFromDot -- JSON --> ", temp, 17);

    getdtoobject(obj, {
        "dtotype": "defaultdto"
    }, function(err, res) {
        proxyprinttodiv("getdtoobject -- RES --> ", res, 17);
    });
}
widtests.ettestag7.category = "execute";
widtests.ettestag7.subcategory = "daily";
widtests.ettestag7.js = exports.ettestag7;
widtests.ettestag7.description = "this does a test";

//exports.ettestag8 = ettestag8 = function ettestag8(params, callback) {
exports.ettestag8 = widtests.ettestag8 = ettestag8 = function ettestag8(params, callback) {

    eventappinstall();
    addToLocalStorage("DRI", [{
        "wid": "initialwid",
        "initialwid": "hello from bootprocess"
    }]);
    addToLocalStorage("DRIKEY", {
        "initialwid": {
            "wid": "initialwid",
            "initialwid": "for key hello from bootprocess"
        }
    });

    //debuglevel = 17;

    execute([{
            "executethis": "addwidmaster",
            "wid": "Songdto",
            "metadata.method": "Songdto",
            "title": "string",
            "metadata.sounddto.type": "jsononetomany",
            "sounddto.0.wid": "sounddto",
            "sounddto.0.metadata.method": "sounddto",
            "sounddto.0.note": "string"
        }],
        function(err, res) {

            execute({
                "executethis": "getwidmaster",
                "wid": "songdto",
                "command.getwidmaster.convertmethod": "dto",
                "command.getwidmaster.execute": "ConvertFromDOTdri"
            }, function(err, res1) {
                proxyprinttodiv('Function ag8 result LAST ', res1, 17);
                callback(err, res);
            });
        });
}
widtests.ettestag8.category = "execute";
widtests.ettestag8.subcategory = "daily";
widtests.ettestag8.js = exports.ettestag8;
widtests.ettestag8.description = "this does a test";

//exports.ettestag9 = ettestag9 = function ettestag9(params, callback) {
exports.ettestag9 = widtests.ettestag9 = ettestag9 = function ettestag9(params, callback) {

    eventappinstall();
    addToLocalStorage("DRI", [{
        "wid": "initialwid",
        "initialwid": "hello from bootprocess"
    }]);
    addToLocalStorage("DRIKEY", {
        "initialwid": {
            "wid": "initialwid",
            "initialwid": "for key hello from bootprocess"
        }
    });

    //debuglevel = 17;

    execute([{
            "executethis": "addwidmaster",
            "wid": "Songdto",
            "metadata.method": "Songdto",
            "title": "string",
            "metadata.sounddto.type": "jsononetomany",
            "sounddto.0.wid": "string",
            "sounddto.0.metadata.method": "string",
            "sounddto.0.note": "string"
        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "Songdto",
            "title": "Highway to Hell",
            "sounddto.0.wid": "1",
            "sounddto.0.note": "A flat",
            "sounddto.0.metadata.method": "sounddto",
            "sounddto.1.wid": "2",
            "sounddto.1.note": "B sharp",
            "sounddto.1.metadata.method": "sounddto",
            "sounddto.2.wid": "3",
            "sounddto.2.note": "C flat",
            "sounddto.2.metadata.method": "sounddto",
        }, {
            "executethis": "getwidmaster",
            "wid": "song1"
        }],
        function(err, res) {
            proxyprinttodiv('Function ag5 result Full res', res, 17);
            proxyprinttodiv('Function ag5 result ', res[3], 17);

            res = logverify("ettestag5_result", res[3], [{
                "title": "Highway to Hell",
                "wid": "song1",
                "metadata.method": "songdto",
                "sounddto.0.note": "A flat",
                "sounddto.0.wid": "2",
                "sounddto.0.metadata.method": "sounddto",
                "sounddto.1.note": "B sharp",
                "sounddto.1.wid": "4",
                "sounddto.1.metadata.method": "sounddto",
                "sounddto.2.note": "C flat",
                "sounddto.2.wid": "6",
                "sounddto.2.metadata.method": "sounddto"
            }]);

            execute({
                "executethis": "getwidmaster",
                "wid": "songdto",
                "command.getwidmaster.convertmethod": "dto",
                "command.getwidmaster.execute": "ConvertFromDOTdri"
            }, function(err, res1) {
                proxyprinttodiv('Function ag5 result LAST ', res1, 17);
                callback(err, res);
            });
        });
}
widtests.ettestag9.category = "execute";
widtests.ettestag9.subcategory = "daily";
widtests.ettestag9.js = exports.ettestag9;
widtests.ettestag9.description = "this does a test";

//exports.ettestag3a = ettestag3a = function ettestag3a(params, callback) {
exports.ettestag3a = widtests.ettestag3a = ettestag3a = function ettestag3a(params, callback) {

    eventappinstall();
    addToLocalStorage("DRI", [{
        "wid": "initialwid",
        "initialwid": "hello from bootprocess"
    }]);
    addToLocalStorage("DRIKEY", {
        "initialwid": {
            "wid": "initialwid",
            "initialwid": "for key hello from bootprocess"
        }
    });

    //debuglevel = 17;

    execute([{
            "executethis": "addwidmaster",
            "wid": "Songdto",
            "metadata.method": "Songdto",
            "title": "string",
            "metadata.sounddto.type": "onetomany",
            "sounddto.wid": "string",
            "sounddto.metadata.method": "string",
            "sounddto.note": "string"
        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "Songdto",
            "title": "Highway to Hell",
            "sounddto.0.wid": "1",
            "sounddto.0.note": "A flat",
            "sounddto.0.metadata.method": "sounddto",
            "sounddto.1.wid": "2",
            "sounddto.1.note": "B sharp",
            "sounddto.1.metadata.method": "sounddto",
            "sounddto.2.wid": "3",
            "sounddto.2.note": "C flat",
            "sounddto.2.metadata.method": "sounddto",
        }, {
            "executethis": "getwidmaster",
            "wid": "song1"
        }],
        function(err, res) {
            proxyprinttodiv('Function ag5 result Full res', res, 17);
            proxyprinttodiv('Function ag5 result ', res[2], 17);

            res = logverify("ettestag5_result", res[2], [{
                "title": "Highway to Hell",
                "wid": "song1",
                "metadata.method": "songdto",
                "sounddto.0.note": "A flat",
                "sounddto.0.wid": "2",
                "sounddto.0.metadata.method": "sounddto",
                "sounddto.1.note": "B sharp",
                "sounddto.1.wid": "4",
                "sounddto.1.metadata.method": "sounddto",
                "sounddto.2.note": "C flat",
                "sounddto.2.wid": "6",
                "sounddto.2.metadata.method": "sounddto"
            }]);

            execute({
                "executethis": "getwidmaster",
                "wid": "songdto",
                "command.getwidmaster.convertmethod": "dto",
                "command.getwidmaster.execute": "ConvertFromDOTdri"
            }, function(err, res1) {
                proxyprinttodiv('Function ag5 result LAST ', res1, 17);
                callback(err, res);
            });
        });
}
widtests.ettestag3a.category = "execute";
widtests.ettestag3a.subcategory = "daily";
widtests.ettestag3a.js = exports.ettestag3a;
widtests.ettestag3a.description = "this does a test";

//exports.testnested1 = testnested1 = function testnested1(params, callback) {
exports.testnested1 = widtests.testnested1 = testnested1 = function testnested1(params, callback) {

    eventappinstall();

    var inparams = [
        [{
            "executethis": "addwidmaster",
            "wid": "a2-56",
            "a2": "b2"
        }, {
            "executethis": "getwidmaster",
            "wid": "a2-56"
        }],
        [{
            "executethis": "addwidmaster",
            "wid": "a2-57",
            "a2": "b2"
        }, {
            "executethis": "getwidmaster",
            "wid": "a2-57"
        }],
        [{
            "executethis": "addwidmaster",
            "wid": "a2-58",
            "a2": "b2"
        }, {
            "executethis": "getwidmaster",
            "wid": "a2-58"
        }]

    ];

    execute(inparams, callback);
}
widtests.testnested1.category = "execute";
widtests.testnested1.subcategory = "daily";
widtests.testnested1.js = exports.testnested1;
widtests.testnested1.description = "this does a test";


//exports.testnested3 = testnested3 = function testnested3(params, callback) {
exports.testnested3 = widtests.testnested3 = testnested3 = function testnested3(params, callback) {

    eventappinstall();

    var inparams = [{
            "executethis": "addwidmaster",
            "wid": "a2-56",
            "a2": "b2"
        }, {
            "executethis": "getwidmaster",
            "wid": "a2-56"
        },
        [{
            "executethis": "addwidmaster",
            "wid": "a2-57",
            "a2": "b2"
        }, {
            "executethis": "getwidmaster",
            "wid": "a2-57"
        }],
        [
            [{
                "executethis": "addwidmaster",
                "wid": "a2-58",
                "a2": "b2"
            }, {
                "executethis": "getwidmaster",
                "wid": "a2-58"
            }]
        ]

    ];

    execute(inparams, callback);
}
widtests.testnested3.category = "execute";
widtests.testnested3.subcategory = "daily";
widtests.testnested3.js = exports.testnested3;
widtests.testnested3.description = "this does a test";

//exports.testnested4 = testnested4 = function testnested4(params, callback) {
exports.testnested4 = widtests.testnested4 = testnested4 = function testnested4(params, callback) {

    eventappinstall();

    var inparams = [{
        "executethis": "addwidmaster",
        "wid": "a2-56",
        "a2": "b2"
    }, {
        "executethis": "getwidmaster",
        "wid": "a2-56",
        "a2": "b2"
    }];

    execute(inparams, callback);
}
widtests.testnested4.category = "execute";
widtests.testnested4.subcategory = "daily";
widtests.testnested4.js = exports.testnested4;
widtests.testnested4.description = "this does a test";

//exports.testnested5 = testnested5 = function testnested5(params, callback) {
exports.testnested5 = widtests.testnested5 = testnested5 = function testnested5(params, callback) {

    eventappinstall();

    var inparams = {
        "executethis": "addwidmaster",
        "wid": "a2-56",
        "a2": "b2"
    };

    execute(inparams, callback);
}
widtests.testnested5.category = "execute";
widtests.testnested5.subcategory = "daily";
widtests.testnested5.js = exports.testnested5;
widtests.testnested5.description = "this does a test";

//exports.testnested6 = testnested6 = function testnested6(params, callback) {
exports.testnested6 = widtests.testnested6 = testnested6 = function testnested6(params, callback) {

    eventappinstall();

    var inparams = {
        "executethis": "test121212"
    };

    execute(inparams, callback);
}
widtests.testnested6.category = "execute";
widtests.testnested6.subcategory = "daily";
widtests.testnested6.js = exports.testnested6;
widtests.testnested6.description = "this does a test";

//exports.testnested2 = testnested2 = function testnested2(params, callback) {
exports.testnested2 = widtests.testnested2 = testnested2 = function testnested2(params, callback) {

    eventappinstall();

    var inparams = [
        [{
            "executethis": "addwidmaster",
            "wid": "a2-56",
            "a2-56": "b2-56"
        }, {
            "executethis": "getwidmaster",
            "wid": "a2-56"
        }],
        [
            [{
                "executethis": "addwidmaster",
                "wid": "a2-57",
                "a2-57": "b2-57"
            }, {
                "executethis": "getwidmaster",
                "wid": "a2-57"
            }],
            [{
                "executethis": "addwidmaster",
                "wid": "a2-58",
                "a2-58": "b2-58"
            }, {
                "executethis": "getwidmaster",
                "wid": "a2-58"
            }]
        ]
    ];

    execute(inparams, callback);
}
widtests.testnested2.category = "execute";
widtests.testnested2.subcategory = "daily";
widtests.testnested2.js = exports.testnested2;
widtests.testnested2.description = "this does a test";	  