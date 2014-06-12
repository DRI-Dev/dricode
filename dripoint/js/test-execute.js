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
exports.ettest_allexecute = 
ettest_allexecute = 
function ettest_allexecute(executeobject, callback) 
{
    async.series(
    [   
    function (cb1) {ettest_serieslevel0({}, function (err, res) {cb1(null, res)})},
    function (cb1) {ettest_serieslevel1({}, function (err, res) {cb1(null, res)})},
    function (cb1) {ettest_grouplevel0({}, function (err, res) {cb1(null, res)})}//,
	//function (cb1) {ettest_grouplevel1({}, function (err, res) {cb1(null, res)})},
	//function (cb1) {ettest_waterfalllevel1({}, function (err, res) {cb1(null, res)})},
	//function (cb1) {ettest_runfirstonelevel1({}, function (err, res) {cb1(null, res)})},
	//function (cb1) {ettest_runfirstwaterfalllevel1({}, function (err, res) {cb1(null, res)})},
	//function (cb1) {ettest_whattodo({}, function (err, res) {cb1(null, res)})},
	//function (cb1) {ettest_howtodo({}, function (err, res) {cb1(null, res)})},
	//function (cb1) {ettest_executemisc({}, function (err, res) {cb1(null, res)})},
	//function (cb1) {ettest_nestedtestslevel1({}, function (err, res) {cb1(null, res)})}
    //ettest_grouplevel1
    //ettest_waterfalllevel1
    //ettest_runfirstonelevel1
    //ettest_runfirstwaterfalllevel1
    ],
    function (err, res) {
      proxyprinttodiv('result from many array', res, 99);
      callback(null,res)
    })
}

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
		  executeobject.command.processparameterfn="execute_nothing"  // how to massage parameters
		  executeobject.command.processfn="execute_function"          // what function handles functions
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
		  executeobject.command.processparameterfn="execute_nothing"  // how to massage parameters
		  executeobject.command.processfn="execute_function"          // what function handles functions
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
		  executeobject.command.processparameterfn="execute_nothing"  
		  executeobject.command.processfn="execute_function"
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
				
				composite_obj=logverifycomplex("ettest_serieslevel0fail3middle", result_obj,global_resulttable_assertion2, error_obj, global_failnotfound);
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
		  executeobject.command.processparameterfn="execute_nothing"  
		  executeobject.command.processfn="execute_function"
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
				
				composite_obj=logverifycomplex("ettest_serieslevel0fail3last", result_obj,global_resulttable_assertion2, error_obj, global_failnotfound);
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


	//series
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
		  executeobject.command.processparameterfn="execute_nothing"  // how to massage parameters
		  executeobject.command.processfn="execute_function"          // what function handles functions
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

	//series
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
		  executeobject.command.processparameterfn="execute_nothing"  // how to massage parameters
		  executeobject.command.processfn="execute_function"          // what function handles functions
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

	// series
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
		  executeobject.command.processparameterfn="execute_nothing"  
		  executeobject.command.processfn="execute_function"
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
				
				composite_obj=logverifycomplex("ettest_serieslevel1fail3middle", result_obj,global_resulttable_assertion2, error_obj, global_realerror);
				callback(null, composite_obj)
		  } 
		);
	}

	// series
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
		  executeobject.command.processparameterfn="execute_nothing"  
		  executeobject.command.processfn="execute_function"
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
				
				composite_obj=logverifycomplex("ettest_serieslevel1fail3last", result_obj,global_resulttable_assertion2, error_obj, global_realerror);
				callback(null, composite_obj)
		  } 
		);
	}

// /*===============================================*/  
// /******* SECTION: group Level 0 			*********/
// /*===============================================*/
// group - level = 0 do them in any order.. if pass return a list, if fail return error and resulttable
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
		  executeobject.command.processparameterfn="execute_nothing"  // how to massage parameters
		  executeobject.command.processfn="execute_function"          // what function handles functions
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

	//group
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
		  executeobject.command.processparameterfn="execute_nothing"  // how to massage parameters
		  executeobject.command.processfn="execute_function"          // what function handles functions
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

	// group
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
		  executeobject.command.processparameterfn="execute_nothing"  
		  executeobject.command.processfn="execute_function"
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

	// group
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
		  executeobject.command.processparameterfn="execute_nothing"  
		  executeobject.command.processfn="execute_function"
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
// group - level = 1 do them in any order.. if pass return a list, if fail return error and resulttable
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

	// group
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
		  executeobject.command.processparameterfn="execute_nothing"  // how to massage parameters
		  executeobject.command.processfn="execute_function"          // what function handles functions
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

	//group
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
		  executeobject.command.processparameterfn="execute_nothing"  // how to massage parameters
		  executeobject.command.processfn="execute_function"          // what function handles functions
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

	// group
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
		  executeobject.command.processparameterfn="execute_nothing"  
		  executeobject.command.processfn="execute_function"
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

	// group
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
		  executeobject.command.processparameterfn="execute_nothing"  
		  executeobject.command.processfn="execute_function"
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
// waterfall - level = 1 output of call one becomes input to the next one — if pass returns one result, if fail return error and resulttable
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

	// waterfall
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
		  executeobject.command.processparameterfn="execute_nothing"  // how to massage parameters
		  executeobject.command.processfn="execute_function"          // what function handles functions
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

	// waterfall
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
		  executeobject.command.processparameterfn="execute_nothing"  // how to massage parameters
		  executeobject.command.processfn="execute_function"          // what function handles functions
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

	// waterfall
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
		  executeobject.command.processparameterfn="execute_nothing"  
		  executeobject.command.processfn="execute_function"
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
				proxyprinttodiv('expected result', global_resulttable_assertion2, 99, true);
				proxyprinttodiv('actual error',error_obj, 99);
				proxyprinttodiv('expected error', global_failnotfound, 99);
				
				composite_obj=logverifycomplex("ettest_waterfalllevel1fail3middle", result_obj,global_resulttable_assertion2, error_obj, global_failnotfound);
				callback(null, composite_obj)
		  } 
		);
	}

	// waterfall
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
		  executeobject.command.processparameterfn="execute_nothing"  
		  executeobject.command.processfn="execute_function"
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
				
				composite_obj=logverifycomplex("ettest_waterfalllevel1fail3last", result_obj,global_resulttable_assertion2, error_obj, global_realerror);
				callback(null, composite_obj)
		  } 
		);
	}

// /*===============================================*/  
// /******* SECTION: runfirstone Level 1 	*********/
// /*===============================================*/
// runfirstone - level = 1 keep trying from the list until the first one runs — if pass returns one result, if fail return error and resulttable
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

	// runfirstone
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
		  executeobject.command.processparameterfn="execute_nothing"  // how to massage parameters
		  executeobject.command.processfn="execute_function"          // what function handles functions
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

	// runfirstone
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
		  executeobject.command.processparameterfn="execute_nothing"  // how to massage parameters
		  executeobject.command.processfn="execute_function"          // what function handles functions
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

	// runfirstone
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
		  executeobject.command.processparameterfn="execute_nothing"  
		  executeobject.command.processfn="execute_function"
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

	// runfirstone
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
		  executeobject.command.processparameterfn="execute_nothing"  
		  executeobject.command.processfn="execute_function"
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
				proxyprinttodiv('expected result', global_resulttable_assertion2, 99, true);
				proxyprinttodiv('actual error',error_obj, 99);
				proxyprinttodiv('expected error', global_realerror, 99);
				
				composite_obj=logverifycomplex("ettest_runfirstonelevel1fail3last", result_obj,global_resulttable_assertion2, error_obj, global_realerror);
				callback(null, composite_obj)
		  } 
		);
	}

// /*===============================================*/  
// /******* SECTION: runfirstwaterfall Level 1 	*********/
// /*===============================================*/
// runfirstwaterfall - level = 1 combination of waterfalls/runfirstone — if pass returns one result, if fail return error and resulttable
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

	//runfirstwaterfall
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
		  executeobject.command.processparameterfn="execute_nothing"  
		  executeobject.command.processfn="execute_function"
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

	// runfirstonewaterfall
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
		  executeobject.command.processparameterfn="execute_nothing"  // how to massage parameters
		  executeobject.command.processfn="execute_function"          // what function handles functions
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

	// runfirstonewaterfall
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
		  executeobject.command.processparameterfn="execute_nothing"  
		  executeobject.command.processfn="execute_function"
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

	// runfirstonewaterfall
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
		  executeobject.command.processparameterfn="execute_nothing"  
		  executeobject.command.processfn="execute_function"
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
				proxyprinttodiv('expected result', global_resulttable_assertion2, 99, true);
				proxyprinttodiv('actual error',error_obj, 99);
				proxyprinttodiv('expected error', global_realerror, 99);
				
				composite_obj=logverifycomplex("ettest_runfirstwaterfalllevel1fail3last", result_obj,global_resulttable_assertion2, error_obj, global_realerror);
				callback(null, composite_obj)
		  } 
		);
	}

// /*===============================================*/  
// /******* SECTION: what to do 	*********/
// /*===============================================*/
// what_to_do 
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
		  executeobject.command.processparameterfn="create_what_to_do_list"    
		  //executeobject.command.processparameterfn="execute_nothing"  
		  executeobject.command.processfn="execute_function"          
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
			//executeobject.command.processparameterfn="execute_parameter" // tells the system to execute the paramter of 
																	   // the function as if it was a name of a function
		  //executeobject.command.processparameterfn="create_what_to_do_list"
		  executeobject.command.processfn="create_what_to_do_list"         
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
	   executeobject.command.processparameterfn="execute_nothing"  
	   executeobject.command.processfn="execute_function"
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
	function (cb1) {ettest_runfirstwaterfall3passxxxxxxxx({}, function (err, res) {cb1(null, res)})}, // simulate server call. if platform = server then when in fn1 go to fn2
	function (cb1) {ettest_series1passnormalgwxxxxxxx({}, function (err, res) {cb1(null, res)})}, // simulate server call. if platform = server then when in fn1 go to fn2
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
				
				composite_obj=logverifycomplex("ettest_ne16", result_obj,result_assertion, error_obj, null);
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
		  //executeobject.command.processparameterfn="create_how_to_do_list"
		  //executeobject.command.processfn="execute_function"
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

				composite_obj=logverifycomplex("ettest_serieslevel0pass3", result_obj, result_assertion, error_obj, null);
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
		  //executeobject.command.processparameterfn="create_how_to_do_list"
		  //executeobject.command.processfn="execute_function"
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

				composite_obj=logverifycomplex("ettest_serieslevel0pass3", result_obj, result_assertion, error_obj, null);
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
		  //executeobject.command.processparameterfn="create_how_to_do_list"
		  //executeobject.command.processfn="execute_function"
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

				composite_obj=logverifycomplex("ettest_serieslevel0pass3", result_obj, result_assertion, error_obj, null);
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
		  //executeobject.command.processparameterfn="create_how_to_do_list"
		  //executeobject.command.processfn="execute_function"
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

				composite_obj=logverifycomplex("ettest_serieslevel0pass3", result_obj, result_assertion, error_obj, null);
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
			  //executeobject.command.processparameterfn="create_what_to_do_list"   
			  //executeobject.command.processparameterfn="execute_get_wid"  
			  //executeobject.command.processfn="execute_function"          
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
		  executeobject.command.processparameterfn="execute_nothing"    
		  //executeobject.command.processparameterfn="execute_nothing"  
		  executeobject.command.processfn="execute_function"          
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
			executeobject.command.processparameterfn="execute_parameter" // tells the system to execute the paramter of 
																	   // the function as if it was a name of a function
			//executeobject.command.processparameterfn="create_what_to_do_list"
		  executeobject.command.processfn="execute_function"          
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
		  //executeobject.command.processparameterfn="create_what_to_do_list"	  
		  executeobject.command.processparameterfn="execute_get_wid"  
		  executeobject.command.processfn="execute_function"          
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
		  executeobject.command.processparameterfn="create_what_to_do_list"	  
		  //executeobject.command.processparameterfn="execute_get_wid"  
		  executeobject.command.processfn="execute_function"          
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
        //executeobject.command.processparameterfn="execute_nothing"  // how to massage parameters
        executeobject.command.processfn="execute_function"          // what function handles functions
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
    //executeobject.command.processparameterfn="execute_nothing"  // how to massage parameters
    executeobject.command.processfn="execute_function"          // what function handles functions
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
	 	  executeobject.command.processparameterfn="execute_parameter"  
	 	  executeobject.command.processfn="execute_function"
	 	  executeobject.serverfn="test_return_noerror_result"
	 	  executeobject.command.xrun=[
	 								  {
									"executethis": 'a',
									  "a":{
											"command":{
												"xrun":[
													{"executethis":"test_return_noerror_result"},
													{"executethis":"test_return_noerror_result"},
													{"executethis":"test_return_noerror_result"}
														]
													}
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
      executeobject.command.processparameterfn="execute_nothing"  
      executeobject.command.processfn="execute_function"
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
      executeobject.command.processparameterfn="execute_nothing"  
      executeobject.command.processfn="execute_function"
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