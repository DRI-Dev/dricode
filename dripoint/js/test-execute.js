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

var widtests = widtests || {};

exports.ettest_allexecute = 
widtests.ettest_allexecute = 
ettest_allexecute = 
function ettest_allexecute(executeobject, callback) 
{
	var start = new Date().getTime();
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
	//function (cb1) {ettest_excutestringlist1({}, function (err, res) {cb1(null, res)})},
	//function (cb1) {ettest_executewithattributes1({}, function (err, res) {cb1(null, res)})},
	//function (cb1) {ettest_usernamespace1({}, function (err, res) {cb1(null, res)})},
	//function (cb1) {ettest_appnamespace1({}, function (err, res) {cb1(null, res)})}
	//function (cb1) {environment.sync({}, function (err, res) {cb1(null, res)})}
	
    ],
    function (err, res) {
      proxyprinttodiv('result from many array', res, 99);
      callback(null,res);
	  proxyprinttodiv('total elapsed time ', new Date().getTime() - start, 99);
    })
	console.log('end ettest_allexecute');
};

widtests.ettest_allexecute.category = "daily";
widtests.ettest_allexecute.subcategory = "push";
widtests.ettest_allexecute.js = ettest_allexecute;
widtests.ettest_allexecute.description = "This is the master test. this test calls all of the individual testing groups for testing execute.";

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
};

	// series, level 0, 1 function that passes locally
	exports.ettest_serieslevel0pass1 = 
	ettest_serieslevel0pass1 = 
	function ettest_serieslevel0pass1(executeobject, callback) 
	{
		  if (!executeobject.command) {
              executeobject.command={};
              executeobject.command.environment={};
              executeobject.command.environment.run={};
          }
		  //executeobject.command.executetype="series"
		  executeobject.command.environment.run.executelevel=0;
		  executeobject.command.environment.platform='local';          // used for server testing
		  executeobject.command.environment.processfn="execute_function";          // what function handles functions
		  executeobject.serverfn="test_return_notfound_result";        // so we can test fail local, pass server on same machine
		  executeobject.command.xrun={"executethis": 'test_return_noerror_result'};

		  var etEnvironment = new DriEnvironment(executeobject.command.environment);
		  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
		  {        
				var result_assertion={"a":"b", "env":executeobject.command.environment.platform};               
				proxyprinttodiv('expected error', null, 99);
				proxyprinttodiv('actual error', error_obj, 99);
				proxyprinttodiv('expected result', result_assertion, 99);
				proxyprinttodiv('actual result', result_obj, 99);

				var composite_obj = logverifycomplex("ettest_serieslevel0pass1", result_obj, result_assertion, error_obj, null);
				proxyprinttodiv('composite_obj', composite_obj, 99);
				callback(null, composite_obj)
		  });

	};

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
		  //executeobject.command.executetype="series"
		  executeobject.command.environment.run.executelevel=0;
		  executeobject.command.environment.platform='local';        // used for server testing

		  executeobject.command.environment.processfn="execute_function";          // what function handles functions
		  //executeobject.serverfn="test_return_notfound_result";        // so we can test fail local, pass server on same machine

		  executeobject.command.xrun=[{"executethis": 'test_return_noerror_result'},
									  {"executethis": 'test_return_noerror_result'},
									  {"executethis": 'test_return_noerror_result'}];

		  var etEnvironment = new DriEnvironment(executeobject.command.environment);
		  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
		  {          
				var result={"a":"b", "env":executeobject.command.environment.platform};   
				var result_assertion=[result, result, result];
				proxyprinttodiv('expected error', null, 99);
				proxyprinttodiv('actual error', error_obj, 99);
				proxyprinttodiv('expected result', result_assertion, 99);
				proxyprinttodiv('actual result', result_obj, 99);

                var composite_obj=logverifycomplex("ettest_serieslevel0pass3", result_obj, result_assertion, error_obj, null);
				callback(null, composite_obj);
		  });
	};

	// series, level 0, 3 tests, 2nd test is fail not found
	exports.ettest_serieslevel0fail3middle = 
	ettest_serieslevel0fail3middle = 
	function ettest_serieslevel0fail3middle(executeobject, callback) 
	{
		  if (!executeobject.command) {
              executeobject.command={};
              executeobject.command.environment={};
              executeobject.command.environment.run={};
          }
		  executeobject.command.executetype="series";
		  executeobject.command.environment.run.executelevel=0;
		  executeobject.command.environment.platform='local';
  
		  //executeobject.command.environment.processfn="execute_function";
		  executeobject.command.processparameterfn="execute_nothing";
		  //executeobject.serverfn="test_return_noerror_result";
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
		  var etEnvironment = new DriEnvironment(executeobject.command.environment);
		  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
		  {
				proxyprinttodiv('actual result', result_obj, 99, true);                         
				proxyprinttodiv('expected result', null, 99, true);
				proxyprinttodiv('actual error',error_obj, 99);
				proxyprinttodiv('expected error', global_failnotfound, 99);
				
				composite_obj=logverifycomplex("ettest_serieslevel0fail3middle", result_obj,null, error_obj, global_failnotfound);
				callback(null, composite_obj);
		  } 
		);
	};

		// series, level 0, 3 tests, 2nd test is fail not found
	exports.ettest_serieslevel0fail3last = 
	ettest_serieslevel0fail3last = 
	function ettest_serieslevel0fail3last(executeobject, callback) 
	{
		  if (!executeobject.command) {
              executeobject.command={};
              executeobject.command.environment={};
              executeobject.command.environment.run={};
          }
		  executeobject.command.executetype="series";
		  executeobject.command.environment.run.executelevel=0;
		  executeobject.command.environment.platform='local';
  
		  //executeobject.command.environment.processfn="execute_function";
		  executeobject.command.processparameterfn="execute_nothing";
		  executeobject.serverfn="test_return_noerror_result";
		  executeobject.command.xrun=[
									  {"executethis": 'test_return_noerror_result'},
									  {"executethis": 'test_return_noerror_result'},
									  {"executethis": 'test_return_failnotfound_result'}
									  ]; 
		  //var expectedresult1 = {"a":"b","env":executeobject.command.environment.platform}  
		  //var expectedresult2 = {"x":"y","env":executeobject.command.environment.platform} 
		  //var expectedresult2 = {"a":"b","env":executeobject.command.environment.platform}      
		  //var expectedresult3 = {"a":"b","env":executeobject.command.environment.platform}	  
			//var result_assertion = [expectedresult1, expectedresult2, expectedresult3]
		  var etEnvironment = new DriEnvironment(executeobject.command.environment);
		  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
		  {
				proxyprinttodiv('actual result', result_obj, 99, true);                         
				proxyprinttodiv('expected result', null, 99, true);
				proxyprinttodiv('actual error',error_obj, 99);
				proxyprinttodiv('expected error', global_failnotfound, 99);
				
				composite_obj=logverifycomplex("ettest_serieslevel0fail3middle", result_obj,null, error_obj, global_failnotfound);
				callback(null, composite_obj);
		  } 
		);
	};

/*	
	// series, level 0, 3 tests, last test is fail not found
	exports.ettest_serieslevel0fail3last = 
	ettest_serieslevel0fail3last = 
	function ettest_serieslevel0fail3last(executeobject, callback) 
	{
		  if (!executeobject.command) {
              executeobject.command={};
              executeobject.command.environment={};
              executeobject.command.environment.run={};
          }
		  executeobject.command.executetype="series";
		  executeobject.command.environment.run.executelevel=0;
		  executeobject.command.environment.platform='local';
  
		  executeobject.command.environment.processfn="execute_function";
		  executeobject.serverfn="test_return_noerror_result";
		  executeobject.command.xrun=[
									  {"executethis": 'test_return_noerror_result'},
									  {"executethis": 'test_return_noerror_result'},
									  {"executethis": 'test_return_failnotfound_result'}
									  ]; 

		  var etEnvironment = new DriEnvironment(executeobject.command.environment);
		  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
		  {
		   
				proxyprinttodiv('actual result', result_obj, 99, true);                         
				proxyprinttodiv('expected result', null, 99, true);
				proxyprinttodiv('actual error',error_obj, 99);
				proxyprinttodiv('expected error', global_failnotfound, 99);
				
				var composite_obj=logverifycomplex("ettest_serieslevel0fail3last", result_obj,null, error_obj, global_failnotfound);
				callback(null, composite_obj);
		  } 
		);
	};
*/

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
	  callback(null,res);
	});
};


	// series, level 1, 1 test that passes
	exports.ettest_serieslevel1pass1 = 
	ettest_serieslevel1pass1 = 
	function ettest_serieslevel1pass1(executeobject, callback) 
	{
		  if (!executeobject.command) {
              executeobject.command={};
              executeobject.command.environment={};
              executeobject.command.environment.run={};
          }
		  executeobject.command.executetype="series";
		  executeobject.command.environment.run.executelevel=1;
		  executeobject.command.environment.platform='local';          // used for server testing

		  executeobject.command.environment.processfn="execute_function";          // what function handles functions
		  executeobject.serverfn="test_return_notfound_result";        // so we can test fail local, pass server on same machine
		  executeobject.command.xrun={"executethis": 'test_return_noerror_result'};

		  var etEnvironment = new DriEnvironment(executeobject.command.environment);
		  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
		  {
				var result_assertion={"a":"b", "env":executeobject.command.environment.platform};               
				proxyprinttodiv('expected error', null, 99);
				proxyprinttodiv('actual error', error_obj, 99);
				proxyprinttodiv('expected result', result_assertion, 99);
				proxyprinttodiv('actual result', result_obj, 99);

				var composite_obj=logverifycomplex("ettest_serieslevel1pass1", result_obj, result_assertion, error_obj, null);
				proxyprinttodiv('composite_obj', composite_obj, 99);
				callback(null, composite_obj);
		  });
	};

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
		  //executeobject.command.executetype="series"
		  executeobject.command.environment.run.executelevel=1;
		  executeobject.command.environment.platform='local';          // used for server testing

		  executeobject.command.environment.processfn="execute_function";          // what function handles functions
		  executeobject.serverfn="test_return_notfound_result";        // so we can test fail local, pass server on same machine
		  executeobject.command.xrun=[{"executethis": 'test_return_noerror_result'},
									  {"executethis": 'test_return_noerror_result'},
									  {"executethis": 'test_return_noerror_result'}];

		  var etEnvironment = new DriEnvironment(executeobject.command.environment);
		  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
		  {          
				var result={"a":"b", "env":executeobject.command.environment.platform};   
				var result_assertion=[result, result, result]           
				proxyprinttodiv('expected error', null, 99);
				proxyprinttodiv('actual error', error_obj, 99);
				proxyprinttodiv('expected result', result_assertion, 99);
				proxyprinttodiv('actual result', result_obj, 99);

				var composite_obj=logverifycomplex("ettest_serieslevel1pass3", result_obj, result_assertion, error_obj, null);
				callback(null, composite_obj);
		  });
	};

	// series, level 1, 3 tests: 1st passes, 2nd fails, 3rd passes
	exports.ettest_serieslevel1fail3middle = 
	ettest_serieslevel1fail3middle = 
	function ettest_serieslevel1fail3middle(executeobject, callback) 
	{
		  if (!executeobject.command) {
              executeobject.command={};
              executeobject.command.environment={};
              executeobject.command.environment.run={};
          }
		  executeobject.command.executetype="series";
		  executeobject.command.environment.run.executelevel=1;
		  executeobject.command.environment.platform='local';
  
		  executeobject.command.environment.processfn="execute_function";
		  executeobject.serverfn="test_return_noerror_result";
		  executeobject.command.xrun=[
									  {"executethis": 'test_return_noerror_result'},
									  {"executethis": 'test_return_realerror_result'},
									  {"executethis": 'test_return_noerror_result'}
									  ]; 

		  var etEnvironment = new DriEnvironment(executeobject.command.environment);
		  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
		  {
		   
				proxyprinttodiv('actual result', result_obj, 99, true);
				proxyprinttodiv('expected result', null, 99, true);
				proxyprinttodiv('actual error',error_obj, 99);
				proxyprinttodiv('expected error', global_realerror, 99);
				
				var composite_obj=logverifycomplex("ettest_serieslevel1fail3middle", result_obj,null, error_obj, global_realerror);
				callback(null, composite_obj);
		  } 
		);
	};

	// series, level 1, 3 tests: 1st passes, 2nd passes, 3rd fails
	exports.ettest_serieslevel1fail3last = 
	ettest_serieslevel1fail3last = 
	function ettest_serieslevel1fail3last(executeobject, callback) 
	{
		  if (!executeobject.command) {
              executeobject.command={};
              executeobject.command.environment={};
              executeobject.command.environment.run={};
          }
		  executeobject.command.executetype="series";
		  executeobject.command.environment.run.executelevel=1;
		  executeobject.command.environment.platform='local';
  
		  executeobject.command.environment.processfn="execute_function";
		  executeobject.serverfn="test_return_noerror_result";
		  executeobject.command.xrun=[
									  {"executethis": 'test_return_noerror_result'},
									  {"executethis": 'test_return_noerror_result'},
									  {"executethis": 'test_return_realerror_result'}
									  ]; 

		  var etEnvironment = new DriEnvironment(executeobject.command.environment);
		  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
		  {
		   
				proxyprinttodiv('actual result', result_obj, 99, true);                         
				proxyprinttodiv('expected result', null, 99, true);
				proxyprinttodiv('actual error',error_obj, 99);
				proxyprinttodiv('expected error', global_realerror, 99);
				
				var composite_obj=logverifycomplex("ettest_serieslevel1fail3last", result_obj,null, error_obj, global_realerror);
				callback(null, composite_obj);
		  } 
		);
	};

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
	  callback(null,res);
	});
};

	// group, level 0, 1 test that passes
	exports.ettest_grouplevel0pass1 = 
	ettest_grouplevel0pass1 = 
	function ettest_grouplevel0pass1(executeobject, callback) 
	{
		  if (!executeobject.command) {
              executeobject.command={};
              executeobject.command.environment={};
              executeobject.command.environment.run={};
          }
		  executeobject.command.executetype="group";
		  executeobject.command.environment.run.executelevel=0;
		  executeobject.command.environment.platform='local';         // used for server testing

		  executeobject.command.environment.processfn="execute_function";          // what function handles functions
		  executeobject.serverfn="test_return_notfound_result";        // so we can test fail local, pass server on same machine
		  executeobject.command.xrun={"executethis": 'test_return_noerror_result'};

		  var etEnvironment = new DriEnvironment(executeobject.command.environment);
		  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
		  {        
				var result_assertion={"a":"b", "env":executeobject.command.environment.platform};               
				proxyprinttodiv('expected error', null, 99);
				proxyprinttodiv('actual error', error_obj, 99);
				proxyprinttodiv('expected result', result_assertion, 99);
				proxyprinttodiv('actual result', result_obj, 99);

				var composite_obj=logverifycomplex("ettest_grouplevel0pass1", result_obj, result_assertion, error_obj, null);
				proxyprinttodiv('composite_obj', composite_obj, 99);
				callback(null, composite_obj);
		  })
	};

	// group, level 0, 3 tests that pass
	exports.ettest_grouplevel0pass3 = 
	ettest_grouplevel0pass3 = 
	function ettest_grouplevel0pass3(executeobject, callback) 
	{
		  if (!executeobject.command) {
			executeobject.command={};
			executeobject.command.environment={};
			executeobject.command.environment.run={};
		  }
		  executeobject.command.executetype="group";
		  executeobject.command.environment.run.executelevel=0;
		  executeobject.command.environment.platform='local';          // used for server testing

		  //executeobject.command.environment.processfn="execute_function";          // what function handles functions
		  executeobject.command.processparameterfn="execute_nothing";		  
		  //executeobject.serverfn="test_return_notfound_result";
		  var result_assertion = {"a":"b","env":executeobject.command.environment.platform};
			executeobject.command.xrun=[
									  {"executethis": 'test_return_noerror_result'},
									  {"executethis": 'test_return_noerror_result'},
									  {"executethis": 'test_return_noerror_result'}
									  ];

		  var expectedresult = [result_assertion, 
								result_assertion,
								result_assertion];
										
		  var etEnvironment = new DriEnvironment(executeobject.command.environment);
		  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
		  {
									
				proxyprinttodiv('expected error', null, 99);
				proxyprinttodiv('actual error', null, 99);
				proxyprinttodiv('expected result', expectedresult, 99);
				proxyprinttodiv('actual result', result_obj, 99);
				var composite_obj=logverifycomplex("ettest_grouplevel0pass3", result_obj,expectedresult, error_obj, null);
				callback(null, composite_obj);
		  } 
		);
	};

	// group, level 0, 3 tests: 1st passes, 2nd fails, 3rd passes
	exports.ettest_grouplevel0fail3middle = 
	ettest_grouplevel0fail3middle = 
	function ettest_grouplevel0fail3middle(executeobject, callback) 
	{
		  if (!executeobject.command) {
              executeobject.command={};
              executeobject.command.environment={};
              executeobject.command.environment.run={};
          }
		  executeobject.command.executetype="group";
		  executeobject.command.environment.run.executelevel=0;
		  executeobject.command.environment.platform='local';
  
		  executeobject.command.environment.processfn="execute_function";
		  executeobject.command.processparameterfn="execute_nothing";		  
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
		  var etEnvironment = new DriEnvironment(executeobject.command.environment);
		  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
		  {
				proxyprinttodiv('actual result', result_obj, 99, true);                         
				proxyprinttodiv('expected result', global_resulttable_assertion2, 99, true);
				proxyprinttodiv('actual error',error_obj, 99);
				proxyprinttodiv('expected error', global_failnotfound, 99);
				
				var composite_obj=logverifycomplex("ettest_grouplevel0fail3middle", result_obj,global_resulttable_assertion2, error_obj, global_failnotfound);
				callback(null, composite_obj);
		  } 
		);
	};

	// group, level 0, 3 tests: 1st passes, 2nd passes, 3rd fails
	exports.ettest_grouplevel0fail3last = 
	ettest_grouplevel0fail3last = 
	function ettest_grouplevel0fail3last(executeobject, callback) 
	{
		  if (!executeobject.command) {
              executeobject.command={};
              executeobject.command.environment={};
              executeobject.command.environment.run={};
          }
		  executeobject.command.executetype="group";
		  executeobject.command.environment.run.executelevel=0;
		  executeobject.command.environment.platform='local';
  
		  executeobject.command.environment.processfn="execute_function";
		  executeobject.command.processparameterfn="execute_nothing";
		  executeobject.command.xrun=[
									  {"executethis": 'test_return_noerror_result'},
									  {"executethis": 'test_return_noerror_result'},
									  {"executethis": 'test_return_failnotfound_result'}
									  ]; 

		  var etEnvironment = new DriEnvironment(executeobject.command.environment);
		  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
		  {
		   
				proxyprinttodiv('actual result', result_obj, 99, true);                         
				proxyprinttodiv('expected result', global_resulttable_assertion2, 99, true);
				proxyprinttodiv('actual error',error_obj, 99);
				proxyprinttodiv('expected error', global_failnotfound, 99);
				
				var composite_obj=logverifycomplex("ettest_grouplevel0fail3last", result_obj,global_resulttable_assertion2, error_obj, global_failnotfound);
				callback(null, composite_obj);
		  } 
		);
	};

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
	  callback(null,res);
	});
};

	// group, level 1, 1 test that passes
	exports.ettest_grouplevel1pass1 = 
	ettest_grouplevel1pass1 = 
	function ettest_grouplevel1pass1(executeobject, callback) 
	{
		  if (!executeobject.command) {
              executeobject.command={};
              executeobject.command.environment={};
              executeobject.command.environment.run={};
          }
		  executeobject.command.executetype="group";
		  executeobject.command.environment.run.executelevel=1;
		  executeobject.command.environment.platform='local';          // used for server testing

		  executeobject.command.environment.processfn="execute_function";          // what function handles functions
		  executeobject.serverfn="test_return_notfound_result";        // so we can test fail local, pass server on same machine
		  executeobject.command.xrun={"executethis": 'test_return_noerror_result'};

		  var etEnvironment = new DriEnvironment(executeobject.command.environment);
		  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
		  {        
				var result_assertion={"a":"b", "env":executeobject.command.environment.platform};               
				proxyprinttodiv('expected error', null, 99);
				proxyprinttodiv('actual error', error_obj, 99);
				proxyprinttodiv('expected result', result_assertion, 99);
				proxyprinttodiv('actual result', result_obj, 99);

				var composite_obj=logverifycomplex("ettest_grouplevel1pass1", result_obj, result_assertion, error_obj, null);
				proxyprinttodiv('composite_obj', composite_obj, 99);
				callback(null, composite_obj);
		  });
	};

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
		  executeobject.command.executetype="group";
		  executeobject.command.environment.run.executelevel=1;
		  executeobject.command.environment.platform='local';          // used for server testing

		  executeobject.command.environment.processfn="execute_function";          // what function handles functions
		  executeobject.serverfn="test_return_notfound_result";        // so we can test fail local, pass server on same machine
		  executeobject.command.xrun=[{"executethis": 'test_return_noerror_result'},
									  {"executethis": 'test_return_noerror_result'},
									  {"executethis": 'test_return_noerror_result'}];

		  var etEnvironment = new DriEnvironment(executeobject.command.environment);
		  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
		  {          
				var result={"a":"b", "env":executeobject.command.environment.platform};
				var result_assertion=[result, result, result];
				proxyprinttodiv('expected error', null, 99);
				proxyprinttodiv('actual error', error_obj, 99);
				proxyprinttodiv('expected result', result_assertion, 99);
				proxyprinttodiv('actual result', result_obj, 99);

				var composite_obj=logverifycomplex("ettest_grouplevel1pass3", result_obj, result_assertion, error_obj, null);
				callback(null, composite_obj);
		  });
	};

	// group, level 1, 3 tests: 1st passes, 2nd fails, 3rd passes
	exports.ettest_grouplevel1fail3middle = 
	ettest_grouplevel1fail3middle = 
	function ettest_grouplevel1fail3middle(executeobject, callback) 
	{
		  if (!executeobject.command) {
              executeobject.command={};
              executeobject.command.environment={};
              executeobject.command.environment.run={};
          }
		  executeobject.command.executetype="group";
		  executeobject.command.environment.run.executelevel=1;
		  executeobject.command.environment.platform='local';
  
		  executeobject.command.environment.processfn="execute_function";
		  executeobject.serverfn="test_return_noerror_result";
		  executeobject.command.xrun=[
									  {"executethis": 'test_return_noerror_result'},
									  {"executethis": 'test_return_realerror_result'},
									  {"executethis": 'test_return_noerror_result'}
									  ]; 

		  var etEnvironment = new DriEnvironment(executeobject.command.environment);
		  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
		  {
				proxyprinttodiv('actual result', result_obj, 99, true);                         
				proxyprinttodiv('expected result', global_resulttable_assertion2, 99, true);
				proxyprinttodiv('actual error',error_obj, 99);
				proxyprinttodiv('expected error', global_realerror, 99);
				
				var composite_obj=logverifycomplex("ettest_grouplevel1fail3middle", result_obj,global_resulttable_assertion2, error_obj, global_realerror);
				callback(null, composite_obj);
		  } 
		);
	};

	// group, level 1, 3 tests: 1st passes, 2nd passes, 3rd fails
	exports.ettest_grouplevel1fail3last = 
	ettest_grouplevel1fail3last = 
	function ettest_grouplevel1fail3last(executeobject, callback) 
	{
		  if (!executeobject.command) {
              executeobject.command={};
              executeobject.command.environment={};
              executeobject.command.environment.run={};
          }
		  executeobject.command.executetype="group";
		  executeobject.command.environment.run.executelevel=1;
		  executeobject.command.environment.platform='local';
  
		  executeobject.command.environment.processfn="execute_function";
		  executeobject.serverfn="test_return_noerror_result";
		  executeobject.command.xrun=[
									  {"executethis": 'test_return_noerror_result'},
									  {"executethis": 'test_return_noerror_result'},
									  {"executethis": 'test_return_realerror_result'}
									  ]; 

		  var etEnvironment = new DriEnvironment(executeobject.command.environment);
		  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
		  {
				proxyprinttodiv('actual result', result_obj, 99, true);                         
				proxyprinttodiv('expected result', global_resulttable_assertion2, 99, true);
				proxyprinttodiv('actual error',error_obj, 99);
				proxyprinttodiv('expected error', global_realerror, 99);
				
				composite_obj=logverifycomplex("ettest_grouplevel1fail3last", result_obj,global_resulttable_assertion2, error_obj, global_realerror);
				callback(null, composite_obj);
		  } 
		);
	};

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
	  callback(null,res);
	});
};

	// waterfall, level 1, 1 test that passes
	exports.ettest_waterfalllevel1pass1 = 
	ettest_waterfalllevel1pass1 = 
	function ettest_waterfalllevel1pass1(executeobject, callback) 
	{
		  if (!executeobject.command) {
              executeobject.command={};
              executeobject.command.environment={};
              executeobject.command.environment.run={};
          }
		  executeobject.command.executetype="waterfall";
		  executeobject.command.environment.run.executelevel=1;
		  executeobject.command.environment.platform='local';          // used for server testing

		  executeobject.command.environment.processfn="execute_function";          // what function handles functions
		  executeobject.serverfn="test_return_notfound_result";        // so we can test fail local, pass server on same machine
		  executeobject.command.xrun={"executethis": 'test_return_noerror_result'};

		  var etEnvironment = new DriEnvironment(executeobject.command.environment);
		  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
		  {
				var result_assertion={"a":"b", "env":executeobject.command.environment.platform};               
				proxyprinttodiv('expected error', null, 99);
				proxyprinttodiv('actual error', error_obj, 99);
				proxyprinttodiv('expected result', result_assertion, 99);
				proxyprinttodiv('actual result', result_obj, 99);

				composite_obj=logverifycomplex("ettest_waterfalllevel1pass1", result_obj, result_assertion, error_obj, null);
				proxyprinttodiv('composite_obj', composite_obj, 99);
				callback(null, composite_obj);
		  });
	};

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
		  executeobject.command.executetype="waterfall";
		  executeobject.command.environment.run.executelevel=1;
		  executeobject.command.environment.platform='local';          // used for server testing

		  executeobject.command.environment.processfn="execute_function";          // what function handles functions
		  executeobject.serverfn="test_return_notfound_result";        // so we can test fail local, pass server on same machine
		  executeobject.command.xrun=[{"executethis": 'test_return_noerror_result'},
									  {"executethis": 'test_return_noerror_result'},
									  {"executethis": 'test_return_noerror_result'}];

		  var etEnvironment = new DriEnvironment(executeobject.command.environment);
		  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
		  {          
				var result_assertion={"a":"b", "env":executeobject.command.environment.platform};
				proxyprinttodiv('expected error', null, 99);
				proxyprinttodiv('actual error', error_obj, 99);
				proxyprinttodiv('expected result', result_assertion, 99);
				proxyprinttodiv('actual result', result_obj, 99);

				var composite_obj=logverifycomplex("ettest_waterfalllevel1pass3", result_obj, result_assertion, error_obj, null);
				callback(null, composite_obj);
		  });
	};

	// waterfall, level 1, 3 tests: 1st fails, 2nd passes, 3rd fails
	exports.ettest_waterfalllevel1fail3middle = 
	ettest_waterfalllevel1fail3middle = 
	function ettest_waterfalllevel1fail3middle(executeobject, callback) 
	{
		  if (!executeobject.command) {
              executeobject.command={};
              executeobject.command.environment={};
              executeobject.command.environment.run={};
          }
		  executeobject.command.executetype="waterfall";
		  executeobject.command.environment.run.executelevel=1;
		  executeobject.command.environment.platform='local';
  
		  executeobject.command.environment.processfn="execute_function";
		  executeobject.serverfn="test_return_noerror_result";
		  executeobject.command.xrun=[
									  {"executethis": 'test_return_noerror_result'},
									  {"executethis": 'test_return_notfound_result'},
									  {"executethis": 'test_return_noerror_result'}
									  ]; 

		  var etEnvironment = new DriEnvironment(executeobject.command.environment);
		  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
		  {
				proxyprinttodiv('actual result', result_obj, 99, true);                         
				proxyprinttodiv('expected result', null, 99, true);
				proxyprinttodiv('actual error',error_obj, 99);
				proxyprinttodiv('expected error', global_notfound, 99);
				
				var composite_obj=logverifycomplex("ettest_waterfalllevel1fail3middle", result_obj,null, error_obj, global_notfound);
				callback(null, composite_obj);
		  } 
		);
	};

	// waterfall, level 1, 3 tests: 1st passes, 2nd passes, 3rd fails
	exports.ettest_waterfalllevel1fail3last = 
	ettest_waterfalllevel1fail3last = 
	function ettest_waterfalllevel1fail3last(executeobject, callback) 
	{
		  if (!executeobject.command) {
              executeobject.command={};
              executeobject.command.environment={};
              executeobject.command.environment.run={};
          }
		  executeobject.command.executetype="waterfall";
		  executeobject.command.environment.run.executelevel=1;
		  executeobject.command.environment.platform='local';
  
		  executeobject.command.environment.processfn="execute_function";
		  executeobject.serverfn="test_return_noerror_result";
		  executeobject.command.xrun=[
									  {"executethis": 'test_return_noerror_result'},
									  {"executethis": 'test_return_noerror_result'},
									  {"executethis": 'test_return_realerror_result'}
									  ]; 

		  var etEnvironment = new DriEnvironment(executeobject.command.environment);
		  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
		  {
				proxyprinttodiv('actual result', result_obj, 99, true);                         
				proxyprinttodiv('expected result', null, 99, true);
				proxyprinttodiv('actual error',error_obj, 99);
				proxyprinttodiv('expected error', global_realerror, 99);
				
				var composite_obj=logverifycomplex("ettest_waterfalllevel1fail3last", result_obj,null, error_obj, global_realerror);
				callback(null, composite_obj);
		  } 
		);
	};

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
	  callback(null,res);
	});
};

	// runfirstone, level 1, 1 test that passes
	exports.ettest_runfirstonelevel1pass1 = 
	ettest_runfirstonelevel1pass1 = 
	function ettest_runfirstonelevel1pass1(executeobject, callback) 
	{
		  if (!executeobject.command) {
              executeobject.command={};
              executeobject.command.environment={};
              executeobject.command.environment.run={};
          }
		  executeobject.command.executetype="runfirstone";
		  executeobject.command.environment.run.executelevel=1;
		  executeobject.command.environment.platform='local';          // used for server testing

		  executeobject.command.environment.processfn="execute_function";          // what function handles functions
		  executeobject.serverfn="test_return_notfound_result";        // so we can test fail local, pass server on same machine
		  executeobject.command.xrun={"executethis": 'test_return_noerror_result'};

		  var etEnvironment = new DriEnvironment(executeobject.command.environment);
		  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
		  {        
				var result_assertion={"a":"b", "env":executeobject.command.environment.platform};               
				proxyprinttodiv('expected error', null, 99);
				proxyprinttodiv('actual error', error_obj, 99);
				proxyprinttodiv('expected result', result_assertion, 99);
				proxyprinttodiv('actual result', result_obj, 99);

				var composite_obj=logverifycomplex("ettest_runfirstonelevel1pass1", result_obj, result_assertion, error_obj, null);
				proxyprinttodiv('composite_obj', composite_obj, 99);
				callback(null, composite_obj);
		  })
	};

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
		  executeobject.command.executetype="runfirstone";
		  executeobject.command.environment.run.executelevel=1;
		  executeobject.command.environment.platform='local';          // used for server testing

		  executeobject.command.environment.processfn="execute_function";          // what function handles functions
		  executeobject.serverfn="test_return_notfound_result";        // so we can test fail local, pass server on same machine
		  executeobject.command.xrun=[{"executethis": 'test_return_noerror_result'},
									  {"executethis": 'test_return_noerror_result'},
									  {"executethis": 'test_return_noerror_result'}];

		  var etEnvironment = new DriEnvironment(executeobject.command.environment);
		  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
		  {          
				var result_assertion={"a":"b", "env":executeobject.command.environment.platform};
				proxyprinttodiv('expected error', null, 99);
				proxyprinttodiv('actual error', error_obj, 99);
				proxyprinttodiv('expected result', result_assertion, 99);
				proxyprinttodiv('actual result', result_obj, 99);

				var composite_obj=logverifycomplex("ettest_runfirstonelevel1pass3", result_obj, result_assertion, error_obj, null);
				callback(null, composite_obj)
		  })
	};

	// runfirstone, level 1, 3 tests: 1st fails, 2nd fails, 3rd passes
	exports.ettest_runfirstonelevel1fail3middle = 
	ettest_runfirstonelevel1fail3middle = 
	function ettest_runfirstonelevel1fail3middle(executeobject, callback) 
	{
		  if (!executeobject.command) {
              executeobject.command={};
              executeobject.command.environment={};
              executeobject.command.environment.run={};
          }
		  executeobject.command.executetype="runfirstone";
		  executeobject.command.environment.run.executelevel=1;
		  executeobject.command.environment.platform='local';
  
		  executeobject.command.environment.processfn="execute_function";
		  executeobject.serverfn="test_return_noerror_result2";
		  executeobject.command.xrun=[
									  {"executethis": 'test_return_realerror_result'},
									  {"executethis": 'test_return_failnotfound_result'},
									  {"executethis": 'test_return_noerror_result'}
									  ]; 

		  var etEnvironment = new DriEnvironment(executeobject.command.environment);
		  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
		  {
				var result_assertion={"a":"b", "env":executeobject.command.environment.platform};
				proxyprinttodiv('actual result', result_obj, 99, true);                         
				proxyprinttodiv('expected result', result_assertion, 99, true);
				proxyprinttodiv('actual error',error_obj, 99);
				proxyprinttodiv('expected error', null, 99);
				
				var composite_obj=logverifycomplex("ettest_runfirstonelevel1fail3middle", result_obj,result_assertion, error_obj, null);
				callback(null, composite_obj);
		  } 
		);
	};

	// runfirstone, level 1, 1st fails, 2nd fails, 3rd fails
	exports.ettest_runfirstonelevel1fail3last = 
	ettest_runfirstonelevel1fail3last = 
	function ettest_runfirstonelevel1fail3last(executeobject, callback) 
	{
		  if (!executeobject.command) {
              executeobject.command={};
              executeobject.command.environment={};
              executeobject.command.environment.run={};
          }
		  executeobject.command.executetype="runfirstone";
		  executeobject.command.environment.run.executelevel=1;
		  executeobject.command.environment.platform='local';
  
		  executeobject.command.environment.processfn="execute_function";
		  executeobject.serverfn="test_return_noerror_result";
		  executeobject.command.xrun=[
									  {"executethis": 'test_return_failnotfound_result'},
									  {"executethis": 'test_return_failnotfound_result'},
									  {"executethis": 'test_return_realerror_result'}
									  ]; 

		  var etEnvironment = new DriEnvironment(executeobject.command.environment);
		  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
		  {
				proxyprinttodiv('actual result', result_obj, 99, true);                         
				proxyprinttodiv('expected result', null, 99, true);
				proxyprinttodiv('actual error',error_obj, 99);
				proxyprinttodiv('expected error', global_realerror, 99);
				
				var composite_obj=logverifycomplex("ettest_runfirstonelevel1fail3last", result_obj,null, error_obj, global_realerror);
				callback(null, composite_obj);
		  } 
		);
	};

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
	  callback(null,res);
	});
};

	// runfirstwaterfall, level 1, 1 test that passes
	exports.ettest_runfirstwaterfalllevel1pass1 = 
	ettest_runfirstwaterfalllevel1pass1 = 
	function ettest_runfirstwaterfalllevel1pass1(executeobject, callback) 
	{
		  if (!executeobject.command) {
              executeobject.command={};
              executeobject.command.environment={};
              executeobject.command.environment.run={};
          }
		  executeobject.command.executetype="runfirstonewaterfall";
		  executeobject.command.environment.run.executelevel=1;
		  executeobject.command.environment.platform='local';
  
		  executeobject.command.environment.processfn="execute_function";
		  executeobject.serverfn="test_return_noerror_result";
		  executeobject.command.xrun={"executethis": 'test_return_noerror_result'};
		  var etEnvironment = new DriEnvironment(executeobject.command.environment);
		  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
		  {
				var result={"a":"b","env":"local"};
				proxyprinttodiv('actual result', result_obj, 99);                         
				proxyprinttodiv('expected result', result, 99);
				proxyprinttodiv('actual error',error_obj, 99);
				proxyprinttodiv('expected error', null, 99);
				
				var composite_obj=logverifycomplex("ettest_runfirstwaterfalllevel1pass1", result_obj,result, error_obj, null);
				callback(null, composite_obj);
		  } 
		);
	};

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
		  executeobject.command.executetype="runfirstonewaterfall";
		  executeobject.command.environment.run.executelevel=1;
		  executeobject.command.environment.platform='local';          // used for server testing

		  executeobject.command.environment.processfn="execute_function";          // what function handles functions
		  executeobject.serverfn="test_return_notfound_result";        // so we can test fail local, pass server on same machine
		  executeobject.command.xrun=[{"executethis": 'test_return_noerror_result'},
									  {"executethis": 'test_return_noerror_result'},
									  {"executethis": 'test_return_noerror_result'}];

		  var etEnvironment = new DriEnvironment(executeobject.command.environment);
		  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
		  {          
				var result_assertion={"a":"b", "env":executeobject.command.environment.platform};
				proxyprinttodiv('expected error', null, 99);
				proxyprinttodiv('actual error', error_obj, 99);
				proxyprinttodiv('expected result', result_assertion, 99);
				proxyprinttodiv('actual result', result_obj, 99);

				var composite_obj=logverifycomplex("ettest_runfirstwaterfalllevel1pass3", result_obj, result_assertion, error_obj, null);
				callback(null, composite_obj);
		  })
	};

	// runfirstonewaterfall, level 1, 3 tests: 1st passes, 2nd fails, 3rd passes
	exports.ettest_runfirstwaterfalllevel1fail3middle = 
	ettest_runfirstwaterfalllevel1fail3middle = 
	function ettest_runfirstwaterfalllevel1fail3middle(executeobject, callback) 
	{
		  if (!executeobject.command) {
              executeobject.command={};
              executeobject.command.environment={};
              executeobject.command.environment.run={};
          }
		  executeobject.command.executetype="runfirstonewaterfall";
		  executeobject.command.environment.run.executelevel=1;
		  executeobject.command.environment.platform='local';
  
		  executeobject.command.environment.processfn="execute_function";
		  executeobject.serverfn="test_return_noerror_result";
		  executeobject.command.xrun=[
									  {"executethis": 'test_return_realerror_result'}
									  ,
									  {"executethis": 'test_return_failnotfound_result'},
									  {"executethis": 'test_return_noerror_result'}
									  ]; 

		  var etEnvironment = new DriEnvironment(executeobject.command.environment);
		  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
		  {
				var result_assertion={"a":"b", "env":executeobject.command.environment.platform};
				proxyprinttodiv('actual result', result_obj, 99, true);                         
				proxyprinttodiv('expected result', result_assertion, 99, true);
				proxyprinttodiv('actual error',error_obj, 99);
				proxyprinttodiv('expected error', null, 99);
				
				var composite_obj=logverifycomplex("ettest_runfirstwaterfalllevel1fail3middle", result_obj,result_assertion, error_obj, null);
				callback(null, composite_obj);
		  } 
		);
	};

	// runfirstonewaterfall, level 1, 3 tests: 1st passes, 2nd passes, 3rd fails
	exports.ettest_runfirstwaterfalllevel1fail3last = 
	ettest_runfirstwaterfalllevel1fail3last = 
	function ettest_runfirstwaterfalllevel1fail3last(executeobject, callback) 
	{
		  if (!executeobject.command) {
              executeobject.command={};
              executeobject.command.environment={};
              executeobject.command.environment.run={};
          }
		  executeobject.command.executetype="runfirstonewaterfall";
		  executeobject.command.environment.run.executelevel=1;
		  executeobject.command.environment.platform='local';
  
		  executeobject.command.environment.processfn="execute_function";
		  executeobject.serverfn="test_return_noerror_result";
		  executeobject.command.xrun=[
									  {"executethis": 'test_return_notfound_result'},
									  {"executethis": 'test_return_notfound_result'},
									  {"executethis": 'test_return_realerror_result'}
									  ]; 

		  var etEnvironment = new DriEnvironment(executeobject.command.environment);
		  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
		  {
				proxyprinttodiv('actual result', result_obj, 99, true);                         
				proxyprinttodiv('expected result', null, 99, true);
				proxyprinttodiv('actual error',error_obj, 99);
				proxyprinttodiv('expected error', global_realerror, 99);
				
				var composite_obj=logverifycomplex("ettest_runfirstwaterfalllevel1fail3last", result_obj,null, error_obj, global_realerror);
				callback(null, composite_obj);
		  } 
		);
	};

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
	  callback(null,res);
	});
};

	// uses create_what_to_do_list and relies on execute_function
	exports.ettest_series1passef2 = 
	ettest_series1passef2 = 
	function ettest_series1passef2(executeobject, callback) 
	{
		  if (!executeobject.command) {
              executeobject.command={};
              executeobject.command.environment={};
              executeobject.command.environment.run={};
          }
		  executeobject.command.executetype="series";
		  executeobject.command.environment.run.executelevel=0;
		  executeobject.command.environment.platform='local';
    
  
		  executeobject.command.environment.processfn="execute_function";
		  executeobject.serverfn="test_return_noerror_result2";
		  executeobject.command.xrun={"executethis": 'test_return_noerror_result'};

		  var etEnvironment = new DriEnvironment(executeobject.command.environment);
		  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
		  {        
				var result_assertion={"a":"b", "env":executeobject.command.environment.platform};               
				proxyprinttodiv('expected error', null, 99);
				proxyprinttodiv('actual error', error_obj, 99);
				proxyprinttodiv('expected result', result_assertion, 99);
				proxyprinttodiv('actual result', result_obj, 99);

				var composite_obj=logverifycomplex("ettest_series1passef2", result_obj, result_assertion, error_obj, null);
				proxyprinttodiv('composite_obj', composite_obj, 99);
				callback(null, composite_obj);
		  });
	};

	// uses create_what_to_do_list and relies on execute_parameter
	exports.ettest_series1passep2 = 
	ettest_series1passep2 = 
	function ettest_series1passep2(executeobject, callback) 
	{
		  if (!executeobject.command) {
              executeobject.command={};
              executeobject.command.environment={};
              executeobject.command.environment.run={};
          }
		  executeobject.command.executetype="series";
		  executeobject.command.environment.run.executelevel=0;
		  executeobject.command.environment.platform='local';
 
																	   // the function as if it was a name of a function

		  executeobject.command.environment.processfn="create_what_to_do_list";
		  executeobject.serverfn="test_return_noerror_result2";
		  executeobject.command.xrun={"executethis": 'a', "a": "test_return_noerror_result"};

		  var etEnvironment = new DriEnvironment(executeobject.command.environment);
		  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
		  {        
				var result_assertion={"a":"b", "env":executeobject.command.environment.platform};               
				proxyprinttodiv('expected error', null, 99);
				proxyprinttodiv('actual error', error_obj, 99);
				proxyprinttodiv('expected result', result_assertion, 99);
				proxyprinttodiv('actual result', result_obj, 99);

				var composite_obj=logverifycomplex("ettest_series1passep2", result_obj, result_assertion, error_obj, null);
				proxyprinttodiv('composite_obj', composite_obj, 99);
				callback(null, composite_obj);
		  });
	};

	// simulate server call. if platform = server then when in fn1 go to fn2
	exports.ettest_series_S_1pass  = 
	ettest_series_S_1pass = 
	function ettest_series_S_1pass(executeobject, callback) 
	{
	   if (!executeobject.command) {
           executeobject.command={};
           executeobject.command.environment={};
           executeobject.command.environment.run={};
       }
	   executeobject.command.executetype="series";
	   executeobject.command.environment.run.executelevel=0;
	   executeobject.command.environment.platform='server';   // within test this will redirect to second function
  
	   executeobject.command.environment.processfn="execute_function";
	   executeobject.serverfn="test_return_noerror_result"; // this function should execute
	   executeobject.command.xrun={"executethis": 'test_return_realerror_result'};

	   var expectedresult = {"a":"b","env":executeobject.command.environment.platform};
	   var etEnvironment = new DriEnvironment(executeobject.command.environment);
	   etEnvironment.execute(executeobject, function (error_obj, result_obj) 
	   {
			 proxyprinttodiv('expected error', null, 99);
			 proxyprinttodiv('actual error', null, 99);
			 proxyprinttodiv('expected result', expectedresult, 99);
			 proxyprinttodiv('actual result', result_obj, 99);
			 var composite_obj=logverifycomplex("ettest_series_S_1pass", result_obj,expectedresult, error_obj, null);
			 callback(null, composite_obj);
	   });
	};

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
};

	exports.ettest_runfirstwaterfall3pass = 
	ettest_runfirstwaterfall3pass = 
	function ettest_runfirstwaterfall3pass(executeobject, callback) 
	{
		  if (!executeobject.command) {
              executeobject.command={};
              executeobject.command.environment={};
              executeobject.command.environment.run={};
          }
		  executeobject.command.environment.run.executelevel=0;
		  executeobject.command.environment.platform='local';
		  executeobject.serverfn={"executethis": "test_return_noerror_result"};
		  executeobject.command.xrun=[{"executethis": "test_return_realerror_result"}];
		  var etEnvironment = new DriEnvironment(executeobject.command.environment);
		  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
		  {
			    var result_assertion={"a":"b", "env":"server"};
				proxyprinttodiv('actual result', result_obj, 99, true, true);                         
				proxyprinttodiv('expected result', result_assertion, 99, true);
				proxyprinttodiv('actual error',error_obj, 99, true);
				proxyprinttodiv('expected error', null, 99, true);
				
				var composite_obj=logverifycomplex("ettest_runfirstwaterfall3pass", result_obj,result_assertion, error_obj, null);
				callback(null, composite_obj);
		  } 
		);
	};


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
		  executeobject.command.executetype="series";
		  executeobject.command.environment.run.executelevel=0;
		  executeobject.command.environment.platform='local';

		  //executeobject.command.environment.processfn="execute_function"
		  //executeobject.serverfn="test_return_noerror_result2"
		  executeobject.command.xrun=[{
									"executethis": 'test_return_realerror_result',
									"serverfn": "test_return_noerror_result2"
									}];

		  var etEnvironment = new DriEnvironment(executeobject.command.environment);
		  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
		  {
				//var result_assertion=[result, result, result]           
				var result_assertion={"x":"y", "env":"server"};          
				proxyprinttodiv('expected error', null, 99);
				proxyprinttodiv('actual error', error_obj, 99);
				proxyprinttodiv('expected result', result_assertion, 99);
				proxyprinttodiv('actual result', result_obj, 99);

				composite_obj=logverifycomplex("ettest_serieslevel0pass1server", result_obj, result_assertion, error_obj, null);
				callback(null, composite_obj);
		  });
	};

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
		  executeobject.command.executetype="series";
		  executeobject.command.environment.run.executelevel=0;
		  executeobject.command.environment.platform='local';

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
									}];

		  var etEnvironment = new DriEnvironment(executeobject.command.environment);
		  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
		  {
				//var result_assertion=[result, result, result]           
				var result_assertion=[{"x":"y", "env":"server"},{"x3":"y3","env":"server"},{"x4":"y4","env":"server"}];          
				proxyprinttodiv('expected error', null, 99);
				proxyprinttodiv('actual error', error_obj, 99);
				proxyprinttodiv('expected result', result_assertion, 99);
				proxyprinttodiv('actual result', result_obj, 99);

				var composite_obj=logverifycomplex("ettest_serieslevel0pass3server", result_obj, result_assertion, error_obj, null);
				callback(null, composite_obj);
		  });
	};

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
		  executeobject.command.executetype="group";
		  executeobject.command.environment.run.executelevel=0;
		  executeobject.command.environment.platform='local';

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
									}];

		  var etEnvironment = new DriEnvironment(executeobject.command.environment);
		  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
		  {
				//var result_assertion=[result, result, result]           
				var result_assertion=[{"a":"b", "env":"local"},{"x3":"y3","env":"server"},{"x4":"y4","env":"local"}];          
				proxyprinttodiv('expected error', null, 99);
				proxyprinttodiv('actual error', error_obj, 99);
				proxyprinttodiv('expected result', result_assertion, 99);
				proxyprinttodiv('actual result', result_obj, 99);

				var composite_obj=logverifycomplex("ettest_grouplevel0pass3server", result_obj, result_assertion, error_obj, null);
				callback(null, composite_obj);
		  });
	};

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
		  executeobject.command.executetype="group";
		  executeobject.command.environment.run.executelevel=0;
		  executeobject.command.environment.platform='local';

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
									}];

		  var etEnvironment = new DriEnvironment(executeobject.command.environment);
		  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
		  {
				//var result_assertion=[result, result, result]           
				var result_assertion=[{"a":"b", "env":"local"},{"x3":"y3","env":"server"},{"x4":"y4","env":"local"}];          
				proxyprinttodiv('expected error', null, 99);
				proxyprinttodiv('actual error', error_obj, 99);
				proxyprinttodiv('expected result', result_assertion, 99);
				proxyprinttodiv('actual result', result_obj, 99);

				var composite_obj=logverifycomplex("ettest_grouplevel0pass1server", result_obj, result_assertion, error_obj, null);
				callback(null, composite_obj);
		  });
	};

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
                  executeobject.command={};
                  executeobject.command.environment={};
                  executeobject.command.environment.run={};
            }
			  executeobject.command.executetype="series";
			  executeobject.command.environment.run.executelevel=0;
			  executeobject.command.environment.platform='local';
   
  
			  //executeobject.command.environment.processfn="execute_function"          
			  //executeobject.serverfn="test_return_noerror_result2";
			  executeobject.command.xrun={"executethis": 'callpassfunction'};

			  var etEnvironment = new DriEnvironment(executeobject.command.environment);
			  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
			  {        
					var result_assertion={"a":"b", "env":executeobject.command.environment.platform};               
					proxyprinttodiv('expected error', null, 99);
					proxyprinttodiv('actual error', error_obj, 99);
					proxyprinttodiv('expected result', result_assertion, 99);
					proxyprinttodiv('actual result', result_obj, 99);

					var composite_obj=logverifycomplex("ettest_series1passnormalgw", result_obj, result_assertion, error_obj, null);
					proxyprinttodiv('composite_obj', composite_obj, 99);
					callback(null, composite_obj);
			  });
		}
	  );
	};

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
		callback(null,res);
	})     
};

	// testing executefn by itself
	exports.ettest_series1passef = 
	ettest_series1passef = 
	function ettest_series1passef(executeobject, callback) 
	{
		  if (!executeobject.command) {
              executeobject.command={};
              executeobject.command.environment={};
              executeobject.command.environment.run={};
          }
		  executeobject.command.executetype="series";
		  executeobject.command.environment.run.executelevel=0;
		  executeobject.command.environment.platform='local';
    
  
		  executeobject.command.environment.processfn="execute_function";
		  executeobject.serverfn="test_return_noerror_result2";
		  executeobject.command.xrun={"executethis": 'test_return_noerror_result'};

		  var etEnvironment = new DriEnvironment(executeobject.command.environment);
		  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
		  {        
				var result_assertion={"a":"b", "env":executeobject.command.environment.platform};               
				proxyprinttodiv('expected error', null, 99);
				proxyprinttodiv('actual error', error_obj, 99);
				proxyprinttodiv('expected result', result_assertion, 99);
				proxyprinttodiv('actual result', result_obj, 99);

				var composite_obj=logverifycomplex("ettest_series1passef", result_obj, result_assertion, error_obj, null);
				proxyprinttodiv('composite_obj', composite_obj, 99);
				callback(null, composite_obj);
				console.log('series1passef');
		  });
	};

	// test of execute parameter
	exports.ettest_series1passep = 
	ettest_series1passep = 
	function ettest_series1passep(executeobject, callback) 
	{
		  if (!executeobject.command) {
              executeobject.command={};
              executeobject.command.environment={};
              executeobject.command.environment.run={};
          }
		  executeobject.command.executetype="series";
		  executeobject.command.environment.run.executelevel=0;
		  executeobject.command.environment.platform='local';
 
																	   // the function as if it was a name of a function

		  executeobject.command.environment.processfn="execute_parameter";
		  executeobject.serverfn="test_return_noerror_result2";
		  executeobject.command.xrun={"executethis": 'a', "a": "test_return_noerror_result"};

		  var etEnvironment = new DriEnvironment(executeobject.command.environment);
		  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
		  {        
				var result_assertion={"a":"b", "env":executeobject.command.environment.platform};               
				proxyprinttodiv('expected error', null, 99);
				proxyprinttodiv('actual error', error_obj, 99);
				proxyprinttodiv('expected result', result_assertion, 99);
				proxyprinttodiv('actual result', result_obj, 99);

				var composite_obj=logverifycomplex("ettest_series1passep", result_obj, result_assertion, error_obj, null);
				proxyprinttodiv('composite_obj', composite_obj, 99);
				callback(null, composite_obj);
				console.log('series1passep');
		  });
	};

	// test of executegetwid -- save a wid then execute it
	exports.ettest_series1passegw = 
	ettest_series1passegw = 
	function ettest_series1passegw(executeobject, callback) 
	{

	  if (!executeobject.command) {
		  executeobject.command={};
		  executeobject.command.environment={};
		  executeobject.command.environment.run={};
	  }
	  executeobject.command.executetype="series";
	  executeobject.command.environment.run.executelevel=0;
	  executeobject.command.environment.platform='local';
  

	  executeobject.command.environment.processfn="execute_get_wid";
	  executeobject.command.xrun=[{
									"executethis": "updatewid",
									"wid": "callpassfunction",
									"metadata.method": "defaultdto",
									"addthis.executethis": "test_return_noerror_result"
								}, {
									"executethis": 'callpassfunction'
								}];

	  var etEnvironment = new DriEnvironment(executeobject.command.environment);
	  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
	  {        
			var result_assertion={"a":"b", "env":executeobject.command.environment.platform};               
			proxyprinttodiv('expected error', null, 99);
			proxyprinttodiv('actual error', error_obj, 99);
			proxyprinttodiv('expected result', result_assertion, 99);
			proxyprinttodiv('actual result', result_obj[1], 99);

			var composite_obj=logverifycomplex("ettest_series1passegw", result_obj[1], result_assertion, error_obj, null);
			proxyprinttodiv('composite_obj', composite_obj, 99);
			callback(null, composite_obj);
			console.log('series1passgw');
	  });
	};

	
		// test of executegetwid -- save a wid then execute it
	exports.ettest_series1passegw3 = 
	ettest_series1passegw3 = 
	function ettest_series1passegw3(executeobject, callback) 
	{

	  if (!executeobject.command) {
		  executeobject.command={};
		  executeobject.command.environment={};
		  executeobject.command.environment.run={};
	  }
	  executeobject.command.executetype="series";
	  executeobject.command.environment.run.executelevel=0;
	  executeobject.command.environment.platform='local';
  

	  executeobject.command.environment.processfn="execute_get_wid";
	  executeobject.command.xrun=[{
									"executethis": "updatewid",
									"wid": "returnstuff1",
									"metadata.method": "defaultdto",
									"a": "b",
									"c": "d"
								}];

	  var etEnvironment = new DriEnvironment(executeobject.command.environment);
	  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
	  {     
			executeobject.command.xrun = [{
									"executethis": 'returnstuff1'
								}];
			etEnvironment.execute(executeobject, function (err, res) {
			
				var result_assertion={"a":"b", "c":"d"};               
				proxyprinttodiv('expected error', null, 99);
				proxyprinttodiv('actual error', err, 99);
				proxyprinttodiv('expected result', result_assertion, 99);
				proxyprinttodiv('actual result', res, 99);

				var composite_obj=logverifycomplex("ettest_series1passegw", res, result_assertion, err, null);
				proxyprinttodiv('composite_obj', composite_obj, 99);
				callback(null, composite_obj);
				console.log('series1passgw');
			});
	  });
	};
	
	
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
              executeobject.command={};
              executeobject.command.environment={};
              executeobject.command.environment.run={};
          }
		  executeobject.command.executetype="series";
		  executeobject.command.environment.run.executelevel=0;
		  executeobject.command.environment.platform='local';
	  
  
		  executeobject.command.environment.processfn="execute_get_wid";
		  executeobject.serverfn="test_return_noerror_result2";
		  executeobject.command.xrun={"executethis": 'callpassfunction'};

		  var etEnvironment = new DriEnvironment(executeobject.command.environment);
		  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
		  {        
				var result_assertion={"a":"b", "env":executeobject.command.environment.platform};               
				proxyprinttodiv('expected error', null, 99);
				proxyprinttodiv('actual error', error_obj, 99);
				proxyprinttodiv('expected result', result_assertion, 99);
				proxyprinttodiv('actual result', result_obj, 99);

				var composite_obj=logverifycomplex("ettest_series1pass", result_obj, result_assertion, error_obj, null);
				proxyprinttodiv('composite_obj', composite_obj, 99);
				callback(null, composite_obj);
		  });
		}
	  );
	};

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
            executeobject.command={};
            executeobject.command.environment={};
            executeobject.command.environment.run={};
        }
        executeobject.command.executetype="series";
        executeobject.command.environment.run.executelevel=0;
        executeobject.command.environment.platform='local';          // used for server testing

        executeobject.command.environment.processfn="execute_function";          // what function handles functions
        executeobject.serverfn={"executethis": 'callpassfunction'};        // so we can test fail local, pass server on same machine
        executeobject.command.xrun={"executethis": 'test_return_failnotfound_result'};

        var etEnvironment = new DriEnvironment(executeobject.command.environment);
        etEnvironment.execute(executeobject, 
          function (error_obj, result_obj) 
          {        
              var result_assertion={"a":"b", "env":executeobject.command.environment.platform};               
              proxyprinttodiv('expected error', null, 99);
              proxyprinttodiv('actual error', error_obj, 99);
              proxyprinttodiv('expected result', result_assertion, 99);
              proxyprinttodiv('actual result', result_obj, 99);

              var composite_obj=logverifycomplex("ettest_series1update1", result_obj, result_assertion, error_obj, null);
              proxyprinttodiv('composite_obj', composite_obj, 99);
              callback(null, composite_obj);
          }
        );  
      }
    )
};

// /*===============================================*/  
// /******* SECTION: misc group LEVEL 0 	*********/
// /*===============================================*/
	
exports.ettest_group3failpassserver = 
ettest_group3failpassserver = 
function ettest_group3failpassserver(executeobject, callback) 
{
    if (!executeobject.command) 
    {
        executeobject.command={};
        executeobject.command.environment={};
        executeobject.command.environment.run={};
    }
    executeobject.command.executetype="group";     // should default to group
    executeobject.command.environment.run.executelevel=0;
    executeobject.command.environment.platform='local';          // used for server testing

    executeobject.command.environment.processfn="execute_function";          // what function handles functions
    executeobject.serverfn="test_return_noerror_result2";
    executeobject.command.xrun=[
                      {"executethis": 'test_return_noerror_result', 'serverfn':'test test_return_realerror_result2'},
                      {"executethis": 'test_return_notfound_result', 'serverfn':'test_return_noerror_result2'},
                      {"executethis": 'test_return_noerror_result2', 'serverfn':'test test_return_failnotfound_result2'}
                      ]; 

    var etEnvironment = new DriEnvironment(executeobject.command.environment);
    etEnvironment.execute(executeobject, function (error_obj, result_obj) 
    {        
        var result_assertion={"a":"b", "env":executeobject.command.environment.platform};               
        proxyprinttodiv('expected error', null, 99);
        proxyprinttodiv('actual error', error_obj, 99);
        proxyprinttodiv('expected result', result_assertion, 99);
        proxyprinttodiv('actual result', result_obj, 99);

        composite_obj=logverifycomplex("ettest_series1pass", result_obj, result_assertion, error_obj, null);
        proxyprinttodiv('composite_obj', composite_obj, 99);
        callback(null, composite_obj);
    });
};


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
	  callback(null,res);
	});
};


	 //this test calls a, and a is an execution object with xrun = [noerror,noerror,noerror]
	 exports.ettest_nestedtestslevel1pass1 = 
	 ettest_nestedtestslevel1pass1 = 
	 function ettest_nestedtestslevel1pass1(executeobject, callback) 
	 {		
	 	  if (!executeobject.command) {
              executeobject.command={};
              executeobject.command.environment={};
              executeobject.command.environment.run={};
          }
	 	  executeobject.command.executetype="series";
	 	  executeobject.command.environment.run.executelevel=1;
	 	  executeobject.command.environment.platform='local';
  
	 	  executeobject.command.environment.processfn="execute_parameter";
	 	  //executeobject.serverfn="test_return_noerror_result";
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

	 	  var etEnvironment = new DriEnvironment(executeobject.command.environment);
	 	  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
	 	  {
				var result_assertion = {"a":"b","env":"local"};
	 			proxyprinttodiv('actual result', result_obj, 99, true);                         
	 			proxyprinttodiv('expected result', result_assertion, 99, true);
	 			proxyprinttodiv('actual error',error_obj, 99);
	 			proxyprinttodiv('expected error', null, 99);
				
	 			var composite_obj=logverifycomplex("ettest_nestedtestslevel1pass1", result_obj,result_assertion, error_obj, null);
	 			callback(null, composite_obj);
	 	  } 
	 	);
	 };
	
	//this test calls a, and a is an execution object with xrun = [noerror,noerror,noerror]
	 exports.ettest_nestedtestslevel1pass3 = 
	 ettest_nestedtestslevel1pass3 = 
	 function ettest_nestedtestslevel1pass3(executeobject, callback) 
	 {		
	 	  if (!executeobject.command) {
              executeobject.command={};
              executeobject.command.environment={};
              executeobject.command.environment.run={};
          }
	 	  executeobject.command.executetype="series";
	 	  executeobject.command.environment.run.executelevel=1;
	 	  executeobject.command.environment.platform='local';
  
	 	  executeobject.command.environment.processfn="execute_parameter";
	 	  //executeobject.serverfn="test_return_noerror_result";
	 	  executeobject.command.xrun=
								[
	 								{
										"command": {
											"xrun": [
                                                {"executethis":"test_return_noerror_result"},
                                                {"executethis":"test_return_noerror_result"},
                                                {"executethis":"test_return_noerror_result"}
                                            ]
                                        }
									}
	 							]; 

	 	  var etEnvironment = new DriEnvironment(executeobject.command.environment);
	 	  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
	 	  {
				var result = {"a":"b","env":"local"};
				var result_assertion = [result,result,result];
	 			proxyprinttodiv('actual result', result_obj, 99, true);                         
	 			proxyprinttodiv('expected result', result_assertion, 99, true);
	 			proxyprinttodiv('actual error',error_obj, 99);
	 			proxyprinttodiv('expected error', null, 99);
				
	 			composite_obj=logverifycomplex("ettest_nestedtestslevel1pass1", result_obj,result_assertion, error_obj, null);
	 			callback(null, composite_obj);
	 	  } 
	 	);
	 };
	 
		 //this test calls a, and a is an execution object with xrun = [noerror,noerror,noerror]
	 exports.ettest_nestedtestslevel1fail3middle = 
	 ettest_nestedtestslevel1fail3middle = 
	 function ettest_nestedtestslevel1fail3middle(executeobject, callback) 
	 {		
	 	  if (!executeobject.command) {
              executeobject.command={};
              executeobject.command.environment={};
              executeobject.command.environment.run={};
          }
	 	  executeobject.command.executetype="series";
	 	  executeobject.command.environment.run.executelevel=1;
	 	  executeobject.command.environment.platform='local';
  
	 	  executeobject.command.environment.processfn="execute_parameter";
	 	  executeobject.serverfn="test_return_noerror_result";
	 	  executeobject.command.xrun=
								[
	 								{
										"command": {
											"xrun": [
                                                {"executethis":"test_return_noerror_result"},
                                                {"executethis":"test_return_realerror_result"},
                                                {"executethis":"test_return_noerror_result"}
                                            ]
                                        }
									}
	 							]; 

	 	  var etEnvironment = new DriEnvironment(executeobject.command.environment);
	 	  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
	 	  {
	 			proxyprinttodiv('actual result', result_obj, 99, true);                         
	 			proxyprinttodiv('expected result', null, 99, true);
	 			proxyprinttodiv('actual error',error_obj, 99);
	 			proxyprinttodiv('expected error', global_realerror, 99);
				
	 			var composite_obj=logverifycomplex("ettest_nestedtestslevel1pass1", result_obj,null, error_obj, global_realerror);
	 			callback(null, composite_obj);
	 	  } 
	 	);
	 };
	 
	 		 //this test calls a, and a is an execution object with xrun = [noerror,noerror,noerror]
	 exports.ettest_nestedtestslevel1fail3last = 
	 ettest_nestedtestslevel1fail3last = 
	 function ettest_nestedtestslevel1fail3last(executeobject, callback) 
	 {		
	 	  if (!executeobject.command) {
              executeobject.command={};
              executeobject.command.environment={};
              executeobject.command.environment.run={};
          }
	 	  executeobject.command.executetype="series";
	 	  executeobject.command.environment.run.executelevel=1;
	 	  executeobject.command.environment.platform='local';
  
	 	  executeobject.command.environment.processfn="execute_parameter";
	 	  executeobject.serverfn="test_return_noerror_result";
	 	  executeobject.command.xrun=
								[
	 								{
										"command": {
											"xrun": [
                                                {"executethis":"test_return_noerror_result"},
                                                {"executethis":"test_return_noerror_result"},
                                                {"executethis":"test_return_realerror_result"}
                                            ]
                                        }
									}
	 							]; 

	 	  var etEnvironment = new DriEnvironment(executeobject.command.environment);
	 	  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
	 	  {
	 			proxyprinttodiv('actual result', result_obj, 99, true);                         
	 			proxyprinttodiv('expected result', null, 99, true);
	 			proxyprinttodiv('actual error',error_obj, 99);
	 			proxyprinttodiv('expected error', global_realerror, 99);
				
	 			var composite_obj=logverifycomplex("ettest_nestedtestslevel1pass1", result_obj,null, error_obj, global_realerror);
	 			callback(null, composite_obj);
	 	  } 
	 	);
	 };
	 
// /*===============================================*/  
// /******* SECTION: misc runfirst LEVEL 0 	*********/
// /*===============================================*/

// runfirstone
exports.ettest_runfirst3real = 
ettest_runfirst3real = 
function ettest_runfirst3real(executeobject, callback) 
{
      if (!executeobject.command) {
          executeobject.command={};
          executeobject.command.environment={};
          executeobject.command.environment.run={};
      }
      executeobject.command.executetype="runfirstonewaterfall";
      executeobject.command.environment.run.executelevel=0;
      executeobject.command.environment.platform='local';
  
      executeobject.command.environment.processfn="execute_function";
      executeobject.serverfn="test_return_noerror_result";
      executeobject.command.xrun=[
                                  {"executethis": 'test_return_realerror_result'},
                                  {"executethis": 'test_return_notfound_result'},
                                  {"executethis": 'test_return_failnotfound_result'}
                                  ];  
      var etEnvironment = new DriEnvironment(executeobject.command.environment);
      etEnvironment.execute(executeobject, function (error_obj, result_obj) 
      {
            proxyprinttodiv('actual result', result_obj, 99, true);                         
            proxyprinttodiv('expected result', global_resulttable_assertion, 99);
            proxyprinttodiv('actual error',error_obj, 99);
            proxyprinttodiv('expected error', global_realerror, 99);
            
            var composite_obj=logverifycomplex("ettest_ne16", result_obj,global_resulttable_assertion, error_obj, global_realerror);
            callback(null, composite_obj);
      } 
    );
};

// runfirstone, level 0, all pass locally
exports.ettest_runfirst3pass_lvl1 = ettest_runfirst3pass_lvl1 = function ettest_runfirst3pass_lvl1(executeobject, callback)
{
      if (!executeobject.command) {
          executeobject.command={};
          executeobject.command.environment={};
          executeobject.command.environment.run={};
      }
      executeobject.command.executetype="runfirstone";
      executeobject.command.environment.run.executelevel=0;
      executeobject.command.environment.platform='local';
  
      executeobject.command.environment.processfn="execute_function";
      executeobject.serverfn="test_return_noerror_result";
      executeobject.command.xrun=[
                                  {"executethis": 'test_return_noerror_result'},
                                  {"executethis": 'test_return_noerror_result'},
                                  {"executethis": 'test_return_noerror_result2'}
                                  ];
  var expectedresult = {"a":"b","env":executeobject.command.environment.platform};
      var etEnvironment = new DriEnvironment(executeobject.command.environment);
      etEnvironment.execute(executeobject, function (error_obj, result_obj) 
      {
            proxyprinttodiv('expected error', null, 99);
            proxyprinttodiv('actual error', error_obj, 99);
            proxyprinttodiv('expected result', expectedresult, 99);
            proxyprinttodiv('actual result', result_obj, 99);
            var composite_obj=logverifycomplex("ettest_runfirst3pass_lvl1", result_obj,expectedresult, error_obj, null);
            callback(null, composite_obj);
      } 
    );
};

// /*===============================================*/  
// /******* SECTION: New execute() tests 	*********/
// /*===============================================*/

exports.ettest_excutestringlist1 = 
ettest_excutestringlist1 = 
function ettest_excutestringlist1(executeobject, callback) 
{
	async.series(
	[   
	function (cb1) {ettest_executestring1({}, function (err, res) {cb1(null, res)})},
	function (cb1) {ettest_executeobject1({}, function (err, res) {cb1(null, res)})},
	function (cb1) {ettest_executelist1({}, function (err, res) {cb1(null, res)})},
	function (cb1) {ettest_executelist2({}, function (err, res) {cb1(null, res)})}
	],
	function (err, res) {
	  proxyprinttodiv('result from many array', res, 99);
	  callback(null,res);
	});
};


exports.ettest_executestring1 = 
ettest_executestring1 = 
function ettest_executestring1(executeobject, callback)
{
if (!executeobject.command) {
      executeobject.command={};
      executeobject.command.environment={};
      executeobject.command.environment.run={}};
      executeobject.command.executetype="group";
      executeobject.command.environment.run.executelevel=0;
      executeobject.command.environment.platform='local';          
  
      executeobject.command.environment.processfn="execute_function";
		
      var etEnvironment = new DriEnvironment(executeobject.command.environment)
      etEnvironment.execute("test_return_noerror_result", function (error_obj, result_obj) 
      {
 			var expected_result = {"a":"b","env":"local"};                               
            proxyprinttodiv('expected error', null, 99);
            proxyprinttodiv('actual error', error_obj, 99);
            proxyprinttodiv('expected result', expected_result, 99);
            proxyprinttodiv('actual result', result_obj, 99);
            composite_obj=logverifycomplex("ettest_executestring1", result_obj,expected_result, error_obj, null);
            callback(null, composite_obj);
      } 
    );
/*	
      execute("test_return_noerror_result",function (err, res) {
			proxyprinttodiv('executestring1 res --', res, 99);
			var expected_result = {"a":"b","env":"local"};
			var expected_error = null;
			proxyprinttodiv('expected result',expected_result,99);
			proxyprinttodiv('actual result',res,99);
			proxyprinttodiv('expected error',expected_error,99);
			proxyprinttodiv('actual error',err,99);
			result = logverifycomplex("ettest_executestring1",res,expected_result,err,expected_error);
			callback(null, result);
			//callback(err,res);
		});
*/
};

exports.ettest_executeobject1 = 
ettest_executeobject1 = 
function ettest_executeobject1(executeobject, callback)
{
      execute({"executethis":"test_return_noerror_result"},function (err, res) {
			proxyprinttodiv('executestring1 res --', res, 99);
			var expected_result = {"a":"b","env":"local"};
			var expected_error = null;
			proxyprinttodiv('expected result',expected_result,99);
			proxyprinttodiv('actual result',res,99);
			proxyprinttodiv('expected error',expected_error,99);
			proxyprinttodiv('actual error',err,99);
			result = logverifycomplex("ettest_executeobject1",res,expected_result,err,expected_error);
			callback(null, result);
		});
};

exports.ettest_executelist1 = ettest_executelist1 = function ettest_executelist1(executeobject, callback)
{
      execute({"command.xrun":[
				{"executethis":"test_return_noerror_result"},
				{"executethis":"test_return_noerror_result2"},
				{"executethis":"test_return_noerror_result3"}
			]},function (err, res) {
			proxyprinttodiv('executestring1 res --', res, 99);
			var expected_result = [{"a":"b","env":"local"},{"x":"y","env":"local"},{"x3":"y3","env":"local"}];
			var expected_error = null;
			proxyprinttodiv('expected result',expected_result,99);
			proxyprinttodiv('actual result',res,99);
			proxyprinttodiv('expected error',expected_error,99);
			proxyprinttodiv('actual error',err,99);
			result = logverifycomplex("ettest_executelist1",res,expected_result,err,expected_error);
			callback(null, result);
		});
};

exports.ettest_executelist2 = ettest_executelist2 = function ettest_executelist2(executeobject, callback)
{
	if (!executeobject.command) {
		  executeobject.command={};
		  executeobject.command.environment={};
		  executeobject.command.environment.run={}};
		  executeobject.command.executetype="group";
		  executeobject.command.environment.run.executelevel=0;
		  executeobject.command.environment.platform='local';          
	  
		  executeobject.command.environment.processfn="execute_function";
			
		  var etEnvironment = new DriEnvironment(executeobject.command.environment)
		  etEnvironment.execute({"command.xrun":[
				{"executethis":"test_return_noerror_result"},
				{"executethis":"test_return_noerror_result2"},
				"test_return_noerror_result3"
			]}, function (err, res) 
		  {
				var expected_result = {"a":"b","env":"local"};                               
				proxyprinttodiv('expected error', null, 99);
				proxyprinttodiv('actual error', err, 99);
				proxyprinttodiv('expected result', expected_result, 99);
				proxyprinttodiv('actual result', res, 99);
				composite_obj=logverifycomplex("ettest_executelist2", res,expected_result, err, null);
				callback(null, composite_obj);
		  } 
		);

/*		
      execute({"command.xrun":[
				{"executethis":"test_return_noerror_result"},
				{"executethis":"test_return_noerror_result2"},
				"test_return_noerror_result3"
			]},function (err, res) {
			proxyprinttodiv('executestring1 res --', res, 99);
			var expected_result = [{"a":"b","env":"local"},{"x":"y","env":"local"},{"x3":"y3","env":"local"}];
			var expected_error = null;
			proxyprinttodiv('expected result',expected_result,99);
			proxyprinttodiv('actual result',res,99);
			proxyprinttodiv('expected error',expected_error,99);
			proxyprinttodiv('actual error',err,99);
			result = logverifycomplex("ettest_executelist2",res,expected_result,err,expected_error);
			callback(null, result);
		});
*/
};

exports.ettest_executewithattributes1 = 
ettest_executewithattributes1 = 
function ettest_executewithattributes1(executeobject, callback) 
{
      if (!executeobject.command) {
      executeobject.command={};
	  executeobject.command.usernamespace = "cody123";
      executeobject.command.environment={};
      executeobject.command.environment.run={}};
      executeobject.command.executetype="series";
      executeobject.command.environment.run.executelevel=0;
      executeobject.command.environment.platform='local';          
  
      executeobject.command.environment.processfn="execute_function";
      executeobject.command.xrun=[
								{
								"executethis": "updatewid",
								"wid":"wid1",
								"color":"red"}];
	var expectedresult = {
			"data": {
					"color":"red"
				},
			"wid":"wid1","metadata": {
					"date":"2014-06-20T21:26:27.974Z",
					"expirationdate":"2014-06-20T21:26:27.974Z"
				},
			"a":"b",
			"creator":"cody"
		};
		
      var etEnvironment = new DriEnvironment(executeobject.command.environment)
      etEnvironment.execute(executeobject, function (error_obj, result_obj) 
      {
                                
            proxyprinttodiv('expected error', null, 99);
            proxyprinttodiv('actual error', error_obj, 99);
            proxyprinttodiv('expected result', expectedresult, 99);
            proxyprinttodiv('actual result', result_obj, 99);
            composite_obj=logverifycomplex("ettest_executewithattributes1", result_obj,expectedresult, error_obj, null);
            callback(null, composite_obj)
      } 
    );
}


// /*===============================================*/  
// /***** SECTION: test command.usernamespace 	*****/
// /*===============================================*/


exports.ettest_usernamespace1 = 
ettest_usernamespace1 = 
function ettest_usernamespace1(executeobject, callback) 
{
      if (!executeobject.command) {
      executeobject.command={};
	  executeobject.command.usernamespace = "cody123";
      executeobject.command.environment={};
	  executeobject.command.accountid = "cody123"; // shouldn't be necessary
      executeobject.command.environment.run={}};
      executeobject.command.executetype="series";
      executeobject.command.environment.run.executelevel=0;
      executeobject.command.environment.platform='local';          
  
      executeobject.command.environment.processfn="execute_function";
	  
	  // create a wid and then 
      executeobject.command.xrun=[
								{"executethis":"updatewid",
									"wid":"color1",
									"color":"red"
                                }, 
								{
								"executethis": "querywid",
								"mongosetfieldsexclude": {},
								"mongowid": "color1",
								"mongorelationshiptype": "attributes",
								"mongorelationshipmethod": "all",
								"mongorelationshipdirection": "forward",
								"mongowidmethod": "",
								"command": {
									"result": "queryresult"
									}
								}];
	var expectedresult = [{
							"wid":"color1",
							"color":"red"
                                }];
		
      var etEnvironment = new DriEnvironment(executeobject.command.environment)
      etEnvironment.execute(executeobject, function (error_obj, result_obj) 
      {
                                
            proxyprinttodiv('expected error', null, 99);
            proxyprinttodiv('actual error', error_obj, 99);
            proxyprinttodiv('expected result', expectedresult, 99);
            proxyprinttodiv('actual result', result_obj[1]["queryresult"], 99);
            composite_obj=logverifycomplex("ettest_executewithattributes1", result_obj,expectedresult, error_obj, null);
            callback(null, composite_obj);
      } 
    );
}

// /*===============================================*/  
// /***** SECTION: test command.appnamespace 	*****/
// /*===============================================*/


exports.ettest_appnamespace1 = 
ettest_appnamespace1 = 
function ettest_appnamespace1(executeobject, callback) 
{

/*************************/
/**** Add the Data *******/
/*************************/

      if (!executeobject.command) {
      executeobject.command={};
	  executeobject.command.appnamespace = "true";
      executeobject.command.environment={};
	  executeobject.command.environment.userid = "1111"; // shouldn't be necessary
	  executeobject.command.environment.accountid = "2222";
      executeobject.command.environment.run={}};
      executeobject.command.executetype="series";
      executeobject.command.environment.run.executelevel=0;
      executeobject.command.environment.platform='local';          
  
      executeobject.command.environment.processfn="execute_function";
      executeobject.command.xrun=[
								{"executethis":"updatewid",
									"wid":"color1",
									"color":"red"
                                }];
	var expectedresult1 = {
							"wid":"color1",
							"color":"red"
                                };
		
      var etEnvironment1 = new DriEnvironment(executeobject.command.environment)
      etEnvironment1.execute(executeobject, function (error_obj, result_obj) 
      {
                                
            proxyprinttodiv('expected error1', null, 99);
            proxyprinttodiv('actual error1', error_obj, 99);
            proxyprinttodiv('expected result1', expectedresult1, 99);
            proxyprinttodiv('actual result1', result_obj, 99);
            composite_obj=logverifycomplex("ettest_appnamespace1", result_obj,expectedresult1, error_obj, null);
            callback(null, composite_obj)
      } 
    );
	
	executeobject.command.environment.userid = "3333"; // shouldn't be necessary
	executeobject.command.environment.accountid = "4444";	
	
	executeobject.command.xrun=[
							{"executethis":"updatewid",
								"wid":"color1",
								"color":"blue"
							}];
	var expectedresult2 = {
							"wid":"color1",
							"color":"blue"
                                };
		
      var etEnvironment2 = new DriEnvironment(executeobject.command.environment)
      etEnvironment2.execute(executeobject, function (error_obj, result_obj) 
      {
                                
            proxyprinttodiv('expected error2', null, 99);
            proxyprinttodiv('actual error2', error_obj, 99);
            proxyprinttodiv('expected result2', expectedresult2, 99);
            proxyprinttodiv('actual result2', result_obj, 99);
            composite_obj=logverifycomplex("ettest_appnamespace1", result_obj,expectedresult2, error_obj, null);
            callback(null, composite_obj)
      } 
    );
	
/*************************/
/**** Get the Data *******/
/*************************/

	executeobject.command.environment.userid = "1111"; // shouldn't be necessary
	executeobject.command.environment.accountid = "2222";	
	
	executeobject.command.xrun=[
							{"executethis":"getwid",
								"wid":"color1"
							}];
	var expectedresult3 = {
							"wid":"color1",
							"color":"red"
                                };
		
      var etEnvironment3 = new DriEnvironment(executeobject.command.environment)
      etEnvironment3.execute(executeobject, function (error_obj, result_obj) 
      {
                                
            proxyprinttodiv('expected error3', null, 99);
            proxyprinttodiv('actual error3', error_obj, 99);
            proxyprinttodiv('expected result3', expectedresult3, 99);
            proxyprinttodiv('actual result3', result_obj, 99);
            composite_obj=logverifycomplex("ettest_appnamespace1", result_obj,expectedresult3, error_obj, null);
            callback(null, composite_obj)
      } 
    );

	
	executeobject.command.environment.userid = "3333"; // shouldn't be necessary
	executeobject.command.environment.accountid = "4444";	
	
	executeobject.command.xrun=[
							{"executethis":"getwid",
								"wid":"color1"
							}];
	var expectedresult4 = {
							"wid":"color1",
							"color":"blue"
                                };
		
      var etEnvironment4 = new DriEnvironment(executeobject.command.environment)
      etEnvironment4.execute(executeobject, function (error_obj, result_obj) 
      {
                                
            proxyprinttodiv('expected error4', null, 99);
            proxyprinttodiv('actual error4', error_obj, 99);
            proxyprinttodiv('expected result4', expectedresult4, 99);
            proxyprinttodiv('actual result4', result_obj, 99);
            composite_obj=logverifycomplex("ettest_appnamespace1", result_obj,expectedresult4, error_obj, null);
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
//    test_name: "PASS",
    test_name_diff: {
      "a": {
          "data": "b",
          "type": "unchanged"
        },
      "data":"b",
      "type":"unchanged"
    }
  };
  debugger;

  var resultMap = deepDiffMapper.map(res, expectedresult_object);

  //var res =  logverify("testlogverify", {a:"b"}, {a:"c"});  //FAIL
  proxyprinttodiv('testlogverify res', res, 99);
  callback({}, res);
};



exports.testlogverify2 = testlogverify2 = function testlogverify2(params, callback) {

var res =  logverify("testlogverify",
  {"command":{"resulttable":{"445a16aa-cc85-a14e-36ad-746ab78ab4de":{"detail":[{"executeid":"445a16aa-cc85-a14e-36ad-746ab78ab4de","outgoingparm":{"command":{"environment":{"defaultcollection":"dricollection","defaultdb":"data","defaultdatastore":"localstorage","defaultkeycollection":"dricollectionkey","defaultdatabasetable":"wikiwallettesting","platform":"local","run":{"type":"runfirstonewaterfall","executelevel":1,"executeid":"445a16aa-cc85-a14e-36ad-746ab78ab4de"},"accesstoken":"fab4d18b-a3dd-da47-d524-4f8aae0af98c"}},"executethis":"test_return_realerror_result","serverfn":"test_return_noerror_result"},"err":{"errorname":"realerror"},"res":{"x":"y","env":"local","command":{"environment":{"run":{"executeid":"445a16aa-cc85-a14e-36ad-746ab78ab4de"}}}},"executeseq":0}],"overallresult":{},"overallerror":null},"extraparameters":{"command":{"environment":{"defaultcollection":"dricollection","defaultdb":"data","defaultdatastore":"localstorage","defaultkeycollection":"dricollectionkey","defaultdatabasetable":"wikiwallettesting","platform":"local","run":{"type":"runfirstonewaterfall","executelevel":1,"executeid":"445a16aa-cc85-a14e-36ad-746ab78ab4de"},"accesstoken":"fab4d18b-a3dd-da47-d524-4f8aae0af98c"},"processparameterfn":"execute_nothing","processfn":"execute_function"}},"overallresult":{},"overallerror":null}}},
  {"command":{"resulttable":{"c1bf93f0-d3f5-6c14-baad-d4af535b0dc8":{"detail":[{"executeseq":{"exception":["created","changed","unchanged"]},"executeid":{"exception":["created","changed","unchanged"]},"outgoingparm":{"executethis":"test_return_failnotfound_result","command":{"environment":{"defaultcollection":"dricollection","defaultdb":"data","defaultdatastore":"localstorage","defaultkeycollection":"dricollectionkey","defaultdatabasetable":"wikiwallettesting","run":{"type":"group","executelevel":{"exception":["created","changed","unchanged"]},"executeid":{"exception":["created","changed","unchanged"]}},"accesstoken":{"exception":["created","changed","unchanged"]}}}},"err":{"errorname":"failnotfound"},"res":{"x":"y","command":{"environment":{"defaultcollection":"dricollection","defaultdb":"data","defaultdatastore":"localstorage","defaultkeycollection":"dricollectionkey","defaultdatabasetable":"wikiwallettesting","run":{"type":"group","executelevel":{"exception":["created","changed","unchanged"]},"executeid":{"exception":["created","changed","unchanged"]}},"accesstoken":{"exception":["created","changed","unchanged"]}},"error":{"errorname":"failnotfound"}}}}],"tryrecords":[],"tryseq":[],"summary":{"overallresult":{},"overallerror":{},"executeseq":{"exception":["created","changed","unchanged"]}}}}}}
);
    proxyprinttodiv('testlogverify2 res', res, 99);
    callback({}, res);
};

exports.testlogverify3 = testlogverify3 = function testlogverify3(params, callback)
{
    var res = logverify('testlogverify3', null, null);
    proxyprinttodiv('testlogverify3 res', res, 99);
    callback({}, res);
};

exports.testlogverify4 = testlogverify4 = function testlogverify4(params, callback)
{
    var res = logverify('testlogverify4', {}, null);
    proxyprinttodiv('testlogverify4 res', res, 99);
    callback({}, res);
};

exports.testlogverify5 = testlogverify5 = function testlogverify5(params, callback)
{
    var res = logverify('testlogverify5', 'a', 'a');
    proxyprinttodiv('testlogverify5 res', res, 99);
    callback({}, res);
};

exports.testlogverify6 = testlogverify6 = function testlogverify6(params, callback)
{
    var res = logverify('testlogverify6', 'a', 'z');
    proxyprinttodiv('testlogverify6 res', res, 99);
    callback({}, res);
};

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
    };
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
};


/*
    logverifycomplex() test
*/
exports.testlogverifycomplex = testlogverifycomplex = function testlogverifycomplex(params, callback) {
    debuglevel = 17;
    //var res = logverifycomplex("testlogverifycomplex", {a:"b"}, {a:"b"},{c:"d"},{c:"d"});   //PASS
  var res = logverifycomplex("testlogverifycomplex", {a:"b"}, {a:"c"},{c:"d"},{c:"d"}); //FAIL
    proxyprinttodiv('testlogverifycomplex res', res, 99);
    callback({}, res);
};

/*
    logverifycomplex() test
-To test exception object of mapper result  
*/
exports.testlogverifycomplex2 = testlogverifycomplex2 = function testlogverifycomplex2(params, callback) {
    debuglevel = 17;
  var res = logverifycomplex("testlogverifycomplex", {a:"b", b:"c"}, {a:"c"},{c:"d"},{c:"d"});
    proxyprinttodiv('testlogverifycomplex res', res, 99);
    callback({}, res);
};

exports.test_return_noerror_result = test_return_noerror_result = function test_return_noerror_result (param, callback) 
{
    // debugger;
    proxyprinttodiv('test_return_noerror_result- incoming parm', param, 99);
    var error_obj = null;
    var env = param.command.environment.platform;
    if (env==="server" && param.serverfn)     // if environment = server and serverfn parameter exist then redirect 
                                              // to different function--that way we can on same machine pass locally and
                                              // fail server
    {
      // var serverfn = window[param.serverfn]
      // param.executethis=serverfn
      param.command.xrun=param.serverfn;
      // debugger;
      delete param.serverfn;
      proxyprinttodiv('test ***** calling server', param, 99);
      // serverfn(param, callback)
      execute(param, callback);

    } else {
      var result_obj = { 'a':'b', env: env };
      callback( error_obj, result_obj );
    }
};

exports.test_return_noerror_result2 = test_return_noerror_result2 = function test_return_noerror_result2 (param, callback) 
{
    // debugger;
    proxyprinttodiv('test_return_noerror_result2- incoming parm', param, 99);
    var error_obj = null;
    var env = param.command.environment.platform;
    if (env==="server" && param.serverfn)     // if environment = server and serverfn parameter exist then redirect 
                                              // to different function--that way we can on same machine pass locally and
                                              // fail server
    {
        param.command.xrun=param.serverfn;
        delete param.serverfn;
        proxyprinttodiv('test ***** calling server', param, 99);
        execute(param, callback) ;
    } else {
        var result_obj = { 'x':'y', env: env };
        callback( error_obj, result_obj );
    }
};

exports.test_return_noerror_result3 = test_return_noerror_result3 = function test_return_noerror_result3 (param, callback) 
{
    // debugger;
    proxyprinttodiv('test_return_noerror_result2- incoming parm', param, 99);
    var error_obj = null;
    var env = param.command.environment.platform;
    if (env==="server" && param.serverfn)     // if environment = server and serverfn parameter exist then redirect 
                                              // to different function--that way we can on same machine pass locally and
                                              // fail server
    {
        param.command.xrun=param.serverfn;
        delete param.serverfn;
        proxyprinttodiv('test ***** calling server', param, 99);
        execute(param, callback);
    } else {
        var result_obj = { 'x3':'y3', env: env };
        callback( error_obj, result_obj );
    }
};

exports.test_return_noerror_result4 = test_return_noerror_result4 = function test_return_noerror_result4 (param, callback) 
{
    // debugger;
    proxyprinttodiv('test_return_noerror_result4- incoming parm', param, 99);
    var error_obj = null;
    var env = param.command.environment.platform;
    if (env==="server" && param.serverfn)     // if environment = server and serverfn parameter exist then redirect 
                                              // to different function--that way we can on same machine pass locally and
                                              // fail server
    {
        param.command.xrun=param.serverfn;
        delete param.serverfn;
        proxyprinttodiv('test ***** calling server', param, 99);
        execute(param, callback);
    } else {
        var result_obj = { 'x4':'y4', env: env };
        callback( error_obj, result_obj );
    }
};

exports.test_return_noerror_result5 = test_return_noerror_result5 = function test_return_noerror_result5 (param, callback) 
{
    // debugger;
    proxyprinttodiv('test_return_noerror_result5- incoming parm', param, 99);
    var error_obj = null;
    var env = param.command.environment.platform;
    if (env==="server" && param.serverfn)     // if environment = server and serverfn parameter exist then redirect 
                                              // to different function--that way we can on same machine pass locally and
                                              // fail server
    {
        param.command.xrun=param.serverfn;
        delete param.serverfn;
        proxyprinttodiv('test ***** calling server', param, 99);
        execute(param, callback);
    } else {
        var result_obj = { 'x5':'y5', env: env };
        callback( error_obj, result_obj );
    }
};

exports.test_return_noerror_result6 = test_return_noerror_result6 = function test_return_noerror_result6 (param, callback) 
{
    // debugger;
    proxyprinttodiv('test_return_noerror_result6- incoming parm', param, 99);
    var error_obj = null;
    var env = param.command.environment.platform;
    if (env==="server" && param.serverfn)     // if environment = server and serverfn parameter exist then redirect 
                                              // to different function--that way we can on same machine pass locally and
                                              // fail server
    {
        param.command.xrun=param.serverfn;
        delete param.serverfn;
        proxyprinttodiv('test ***** calling server', param, 99);
        execute(param, callback);
    } else {
        var result_obj = { 'x6':'y6', env: env };
        callback( error_obj, result_obj );
    }
};

exports.test_return_noerror_waterfall = test_return_noerror_waterfall = function test_return_noerror_waterfall (param, callback) 
{
    // debugger;
    proxyprinttodiv('test_return_noerror_waterfall -  incoming param', param, 99);
    var error_obj = null;
    var env = param.command.environment.platform;
    if (env==="server" && param.serverfn)     // if environment = server and serverfn parameter exist then redirect 
                                              // to different function--that way we can on same machine pass locally and
                                              // fail server
    {
        param.command.xrun=param.serverfn;
        delete param.serverfn;
        proxyprinttodiv('test ***** calling server', param, 99);
        execute(param, callback);
    } else {
        var result_obj = { 'a':'b', env: env };
        var copy = {};
        extend(true, copy, param);
        delete copy.command;
        result_obj.x=copy;
        callback( error_obj, result_obj );
    }
};

exports.test_return_notfound_result = test_return_notfound_result = function test_return_notfound_result(param, callback) 
{
    // debugger;
    proxyprinttodiv('test_return_notfound_result - incoming parm', param, 99);
    var error_obj = { 'errorname': 'notfound' } ;
    //var result_obj = { 'x': 'y' };
    var env = param.command.environment.platform;
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
};

exports.test_return_failnotfound_result = test_return_failnotfound_result = function test_return_failnotfound_result(param, callback) 
{
    // debugger;
    proxyprinttodiv('test_return_failnotfound_result - incoming param', param, 99);
    var error_obj = { 'errorname': 'failnotfound' } ;
    //var result_obj = { 'x': 'y' };
    var env = param.command.environment.platform;
    if (env==="server" && param.serverfn) 
    {
        param.command.xrun=param.serverfn;
        delete param.serverfn;
        proxyprinttodiv('test ***** calling server', param, 99);
        execute(param, callback);
    } else  {
        var result_obj = { 'x':'y', env: env };
        callback( error_obj, result_obj );
    }
};

exports.test_return_realerror_result = test_return_realerror_result = function test_return_realerror_result(param, callback) 
{
    // debugger;
    proxyprinttodiv('test_return_realerror_result - incoming param', param, 99);
    var error_obj = { 'errorname': 'realerror' } ;
    //var result_obj = { 'x': 'y' };
    var env = param.command.environment.platform;
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
};

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
};


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
};
       
      var global_failnotfound = {'errorname':'failnotfound'};
      var global_notfound = {'errorname':'notfound'};
      var global_realerror = {'errorname':'realerror'};


//************************************************************************
// TESTS BROUGHT IN FROM et-unit_tests.js
//************************************************************************

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
widtests.testnested2.category = "daily";
widtests.testnested2.subcategory = "daily";
widtests.testnested2.js = exports.testnested2;
widtests.testnested2.description = "this does a test";


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
								  
      var etEnvironment = new DriEnvironment(executeobject.command.environment);
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
      var etEnvironment = new DriEnvironment(executeobject.command.environment);
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
		
      var etEnvironment = new DriEnvironment(executeobject.command.environment)
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
		
      var etEnvironment = new DriEnvironment(executeobject.command.environment)
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
		
      var etEnvironment = new DriEnvironment(executeobject.command.environment)
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
		
      var etEnvironment = new DriEnvironment(executeobject.command.environment)
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






// test cache
exports.ettest_testcache1 = 
ettest_testcache1 = 
widtests.ettest_testcache1 = 
function ettest_testcache1(executeobject, callback) 
{
      if (!executeobject.command) {
      executeobject.command={};
      executeobject.command.environment={};
      executeobject.command.environment.run={};
	  };
		
      executeobject.command.xrun=[
								{"executethis": "updatewid",
								"wid":"wid1",
								"color":"red"},
								{"executethis": "getwid",
								"wid":"wid1",
								"command.skipcache":false,
								"command.updatecache":true
								},
								];
		
		var expectedresult = 
							{"color":"red",
							"wid":"wid1",
							"metadata":
								{"expirationdate":{"exception":["created","changed","unchanged","updated"]},
								"cache":"true"}}
		
      var etEnvironment = new DriEnvironment(executeobject.command.environment)
      etEnvironment.execute(executeobject, function (error_obj, result_obj) 
      {
                                
            proxyprinttodiv('expected error', null, 99);
            proxyprinttodiv('actual error', error_obj, 99);
            proxyprinttodiv('expected result', expectedresult, 99);
            proxyprinttodiv('actual result', result_obj[1], 99);
            composite_obj=logverify("ettest_testcache1", result_obj[1],expectedresult);
            callback(null, composite_obj)
      } 
    );
}
widtests.ettest_testcache1.category = "daily";
widtests.ettest_testcache1.subcategory = "push";
widtests.ettest_testcache1.js = exports.ettest_globalmetadata1;
widtests.ettest_testcache1.description = "this does a test";

// test cache
exports.ettest_testcache2 = 
ettest_testcache2 = 
widtests.ettest_testcache2 = 
function ettest_testcache2(executeobject, callback) 
{
      if (!executeobject.command) {
      executeobject.command={};
      executeobject.command.environment={};
      executeobject.command.environment.run={};
	  };
		
	  executeobject.command.skipcache=false;
      executeobject.command.xrun=
								{"executethis": "getwid",
								"wid":"wid1",
								"command.skipcache":false}
								;
		
		var expectedresult = 
							{"color":"red",
							"wid":"wid1",
							"metadata":
								{"cache":"true",
								"expirationdate":{"exception":["created","changed","unchanged","updated"]}
								}}
		
      var etEnvironment = new DriEnvironment(executeobject.command.environment)
      etEnvironment.execute(executeobject, function (error_obj, result_obj) 
      {
                                
            proxyprinttodiv('expected error', null, 99);
            proxyprinttodiv('actual error', error_obj, 99);
            proxyprinttodiv('expected result', expectedresult, 99);
            proxyprinttodiv('actual result', result_obj, 99);
            composite_obj=logverify("ettest_testcache2", result_obj,expectedresult);
            callback(null, composite_obj)
      } 
    );
}
widtests.ettest_testcache2.category = "daily";
widtests.ettest_testcache2.subcategory = "push";
widtests.ettest_testcache2.js = exports.ettest_globalmetadata1;
widtests.ettest_testcache2.description = "this does a test";



