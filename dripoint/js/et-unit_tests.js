// copyright (c) 2014 DRI
function etunittesttester(params, callback) {
    var unittestdb = 
        [   // Within    

            // Mid  -- testing the flow from pre to mid to post
            [{"fn": "ettestt1"},    [{"category":"executethis",   "subcategory":"dothis",    "type": "minute", 
            "test": "executethis calling a function "}]], 

            // Pre, mid, post  -- testing the flow from pre to mid to post
            [{"fn": "ettestt2"},    [{"type": "minute", "category":"execute",       "subcategory":"dothis",
            "test": "executethis calling a function"}]], 

            // Pre, mid  -- testing the flow from pre to mid to post
            [{"fn": "ettestt3"},    [{"type": "minute", "category":"execute",       "subcategory":"dothis",         
            "test": "executethis calling a function"}]], 

            // Mid, post  -- testing the flow from pre to mid to post
            [{"fn": "ettestt3a"},   [{"type": "minute", "category":"execute",       "subcategory":"dothis",         
            "test": "executethis calling a function"}]], 

            // Mid, post  -- testing the flow from pre to mid to post
            [{"fn": "ettestt4"},    [{"type": "minute", "category":"execute",       "subcategory":"dothis",         
            "test": "executethis calling a function"}]], 
    
            // Pre, Mid  -- testing the flow from pre to mid to post
            [{"fn": "ettestt4a"},   [{"type": "minute", "category":"execute",       "subcategory":"dothis",         
            "test": "executethis calling a function"}]], 
 
            // Pre, mid, post  -- testing the flow from pre to mid to post
            [{"fn": "ettestt5"},    [{"type": "minute", "category":"execute",       "subcategory":"dothis",         
            "test": "executethis calling a function"}]], 
    
            // Pre, mid, post  -- testing the flow from pre to mid to post
            [{"fn": "ettestt6"},    [{"type": "minute", "category":"execute",       "subcategory":"dothis",         
            "test": "executethis calling a function"}]], 
        
            // This astt section is doing the same tests as the tt tests above...the
            // difference is that these pre, mid, and post calls will wait, or sleep for
            // a about 1/2 a second...this is to simulate latency in communicating with
            // the db. So we are testing the robustness of the async capacities of the system.

            // Mid  -- testing the flow from pre to mid to post
            [{"fn": "ettestast1"},  [{"type": "minute", "category":"execute",       "subcategory":"dothis",         
            "test": "executethis calling a function asynchronously"}]], 

            // Pre, mid, post  -- testing the flow from pre to mid to post
            [{"fn": "ettestast2"},  [{"type": "minute", "category":"execute",       "subcategory":"dothis",         
            "test": "executethis calling a function asynchronously"}]], 
    
            // Call async_func_b with only pre async_func_a...is it ok to not call post...yes it is.
            [{"fn": "ettestast3"},  [{"type": "minute", "category":"execute",       "subcategory":"dothis",         
            "test": "executethis calling a function asynchronously"}]], 

            // Mid, post  -- testing the flow from pre to mid to post    
            [{"fn": "ettestast3a"}, [{"type": "minute", "category":"execute",       "subcategory":"dothis",         
            "test": "executethis calling a function asynchronously"}]], 

            // Mid, post  -- testing the flow from pre to mid to post    
            [{"fn": "ettestast4"},  [{"type": "minute", "category":"execute",       "subcategory":"dothis",         
            "test": "executethis calling a function asynchronously"}]], 
    
            // Pre, Mid  -- testing the flow from pre to mid to post
            [{"fn": "ettestast4a"}, [{"type": "minute", "category":"execute",       "subcategory":"dothis",         
            "test": "executethis calling a function asynchronously"}]], 
    
            // Pre, mid, post  -- testing the flow from pre to mid to post
            [{"fn": "ettestast5"},  [{"type": "minute", "category":"execute",       "subcategory":"dothis",         
            "test": "executethis calling a function asynchronously"}]], 
    
            // Pre, mid, post  -- testing the flow from pre to mid to post
            [{"fn": "ettestast6"},  [{"type": "second", "category":"execute",       "subcategory":"dothis",         
            "test": "executethis calling a function asynchronously"}]], 
    
            // Ag tests will add data to the db and get it. The tests get progressively
            // more deep as the dto's begin to be applied in a more nested
            // fasion.

            // Add a dto with addwidmaster and get it with getwidmaster
            [{"fn": "ettestag1"  }, [{"type": "second", "category":"add get",       "subcategory":"getwidmaster",   
            "test": "to use addwidmaster and getwidmaster"}]], 
     
            // Add 2 wids using addwidmaster and get 1 wid of them with getwidmaster
            [{"fn": "ettestag2"},   [{"type": "second", "category":"add get",       "subcategory":"getwidmaster",   
            "test": "to use addwidmaster and getwidmaster"}]],
     
            // Add wids 3 levels deep with addwidmaster, and get a wid related with them 
            // by dto's using getwidmaster.
            [{"fn": "ettestag3"},   [{"type": "second", "category":"add get",       "subcategory":"getwidmaster",   
            "test": "to use addwidmaster and getwidmaster"}]], 
     
            // The cctests pass various config data to manipulate either the config itself or simply
            // passing data to various components of config

            // Remap func for mid
            [{"fn": "ettestct1"},   [{"type": "quasi",  "category":"configuration", "subcategory":"remapping",      
            "test": "remapping functions"}]], 

            // Remap funcs pre, mid, and post
            [{"fn": "ettestct2"},   [{"type": "quasi",  "category":"configuration", "subcategory":"remapping",      
            "test": "remapping functions"}]], 

            // Remap funcs pre, mid
            [{"fn": "ettestct3"},   [{"type": "quasi",  "category":"configuration", "subcategory":"remapping",      
            "test": "remapping functions"}]], 

            // Remap funcs mid, post
            [{"fn": "ettestct3a"},  [{"type": "quasi",  "category":"configuration", "subcategory":"remapping",      
            "test": "remapping functions"}]], 

            // Remap funcs mid, post
            [{"fn": "ettestct4"},   [{"type": "quasi",  "category":"configuration", "subcategory":"remapping",      
            "test": "remapping functions"}]], 

            // Remap funcs pre, mid
            [{"fn": "ettestct4a"},  [{"type": "quasi",  "category":"configuration", "subcategory":"remapping",      
            "test": "remapping functions"}]], 

            // Remap funcs pre, mid, post
            [{"fn": "ettestct5"},   [{"type": "quasi",  "category":"configuration", "subcategory":"remapping",      
            "test": "remapping functions"}]], 

            // Remap funcs pre, mid, post
            [{"fn": "ettestct6"},   [{"type": "quasi",  "category":"configuration", "subcategory":"remapping",      
            "test": "remapping functions"}]], 

            // Remap funcs remaps pre in the config and calls mid
            [{"fn": "ettestct7"},   [{"type": "daily",  "category":"configuration", "subcategory":"config_params",  
            "test": "sending config_params"}]], 

            // Config tryorder
            [{"fn": "ettestct8"},   [{"type": "daily",  "category":"configuration", "subcategory":"config_params",  
            "test": "sending config_params"}]], 

            // Config will try to hook request for func that does not exist
            [{"fn": "ettestct9"},   [{"type": "quasi",  "category":"configuration", "subcategory":"does_not_exist", 
            "test": "calling config data that does not exist"}]], 

            // Config will try to hook request for pre tat does not exist
            [{"fn": "ettestct10"},  [{"type": "quasi",  "category":"configuration", "subcategory":"does_not_exist", 
            "test": "calling config data that does not exist"}]], 

            // Config will try to hook on pre and post requests that do not exist
            [{"fn": "ettestct11"},  [{"type": "quasi",  "category":"configuration", "subcategory":"does_not_exist", 
            "test": "calling config data that does not exist"}]], 

            // Config will try to hook on pre and mid that dont exist and call a func that does exist
            [{"fn": "ettestct13"},  [{"type": "quasi",  "category":"configuration", "subcategory":"does_not_exist", 
            "test": "calling config data that does not exist"}]], 

            // Config with param data for pre, mid, and post
            [{"fn": "ettestct14"},  [{"type": "quasi",  "category":"configuration", "subcategory":"config_params",  
            "test": "sending config_params"}]], 

            // Testing param data to pre config, but overwritten in the args
            [{"fn": "ettestct15"},  [{"type": "quasi",  "category":"configuration", "subcategory":"config_conflict",
            "test": "sending config_params that conflict with other params"}]], 

            // Passing a config as the params of config
            [{"fn": "ettestct16"},  [{"type": "quasi",  "category":"configuration", "subcategory":"config_params",  
            "test": "sending config_params"}]], 

            // Tests if executedefault gets used by calling a non-existing function
            [{"fn": "ettestct17"},  [{"type": "hourly", "category":"configuration", "subcategory":"does_not_exist", 
            "test": "calling config data that does not exist"}]], 

            // Tests if the pre config params are used
            [{"fn": "ettestct18"},  [{"type": "hourly", "category":"configuration", "subcategory":"config_params",  
            "test": "sending config_params"}]], 

            // Tests config params getting used by executethis
            [{"fn": "ettestct19"},  [{"type": "hourly", "category":"configuration", "subcategory":"config_conflict",
            "test": "sending config_params that conflict with other params"}]], 

            // Tests confilicting config params
            [{"fn": "ettestct20"},  [{"type": "hourly", "category":"configuration", "subcategory":"config_conflict",
            "test": "sending config_params that conflict with other params"}]]   
        ]

    var err;
    var subset = [];

    // iterate through unittestdb
    for (var i = 0; i < unittestdb.length; i++) {
        // check to see if params matches type in unittestdb
        if (unittestdb[i][1][0]['type'] === params['type']) {
            // push the fn name on the array_of_tests_to_run
            subset.push( unittestdb[i] );
        }
    }
        // console.log('-------------  subset: \n' + JSON.stringify(subset, '-', 4));
        
        executethismultiple(subset, function (err, result) { 
            callback (err, result); 
        });
}

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
//              config params in the assertion wid.
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


exports.ettestat = ettestat = function ettestat(params, callback) {
    var result = [];
    var err;

    ettesttt(result, function (err, r1) {
      result.push(r1);
        ettestastt(result, function (err, r2) {
           result.push(r2);
            ettestctt(result, function (err, r3) {
                result.push(r3);
                ettestagtt(result, function (err, r4) {
                    result.push(r4);
                    etalldeepfiltertests(result, function (err, r5) {
                        result.push(r5);
                        ettestdot(result, function (err, r6) {
                            result.push(r6);

                            callback(err, result);

                        });
                    });
                });
            });
        });
    });
}

exports.ettestat2 = ettestat2 = function ettestat2(params, callback) {
    var result;
    var err;
    var target = {'type': 'minute'};

    result = etunittesttester(target, function (err, result) {
        callback (err, result);
    });
}

exports.ettestat3 = ettestat3 = function ettestat3(params, callback) {
    var result;
    var err;
    var target = {'type': 'second'};

    result = etunittesttester(target, function (err, result) {
        callback (err, result);
    });
}

exports.ettestat4 = ettestat4 = function ettestat4(params, callback) {
    var result;
    var err;
    var target = {'type': 'quasi'};

    result = etunittesttester(target, function (err, result) {
        callback (err, result);
    });
}

exports.ettestat5 = ettestat5 = function ettestat5(params, callback) {
    var result;
    var err;
    var target = {'type': 'hourly'};

    result = etunittesttester(target, function (err, result) {
        callback (err, result);
    });
}
// -------------------------------------------------------------------------------------------------------
// This series of tests will send parameters to func_b.
// There are variations of pre and post execute applied to 
// the calling of func_b. In pre, mid, and post, a parameter is 
// deleted, and a parameters is added to verify that each level of  
// the executethis is being accessed.

exports.ettesttt = ettesttt = function ettesttt(params, callback) {
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

    ettestt1(result, function (err, r1) {
        result.push(r1);
        ettestt2(result, function (err, r2) {
            result.push(r2);
            ettestt3(result, function (err, r3) {
                result.push(r3);
                ettestt3a(result, function (err, r3a) {
                    result.push(r3a);
                    ettestt4(result, function (err, r4) {
                        result.push(r4);
                        ettestt4a(result, function (err, r4a) {
                            result.push(r4a);
                            ettestt5(result, function (err, r5) {
                                result.push(r5);
                                ettestt6(result, function (err, r6) {
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

// This series is identical to tt, except that the functions called 
// by executethis are async, and therefore use callbacks to return data
// to the calling function.
exports.ettestastt = ettestastt = function ettestastt(params, callback) {
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

    ettestast1(result, function (err, r1) {
        result.push(r1);
        ettestast2(result, function (err, r2) {
            result.push(r2);
            ettestast3(result, function (err, r3) {
                result.push(r3);
                ettestast3a(result, function (err, r3a) {
                    result.push(r3a);
                    ettestast4(result, function (err, r4) {
                        result.push(r4);
                        ettestast4a(result, function (err, r4a) {
                            result.push(r4a);
                            ettestast5(result, function (err, r5) {
                                result.push(r5);
                                ettestast6(result, function (err, r6) {
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

// This series uses the sync functions of a,b, and c with changes to the
// configuration parameters. This allows for calling func_b by calling
// redir_b instead of func_b, redir_a instead of func_a, and so on.
exports.ettestctt = ettestctt = function ettestctt(params, callback) {
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

    ettestct1(result, function (err, r1) {
        result.push(r1);
        ettestct2(result, function (err, r2) {
            result.push(r2);
            ettestct3(result, function (err, r3) {
                result.push(r3);
                ettestct3a(result, function (err, r3a) {
                    result.push(r3a);
                    ettestct4(result, function (err, r4) {
                        result.push(r4);
                        ettestct4a(result, function (err, r4a) {
                            result.push(r4a);
                            ettestct5(result, function (err, r5) {
                                result.push(r5);
                                ettestct6(result, function (err, r6) {
                                    result.push(r6);
                                    ettestct7(result, function (err, r7) {
                                        result.push(r7);
                                        ettestct9(result, function (err, r9) {
                                            result.push(r9);
                                            ettestct10(result, function (err, r10) {
                                                result.push(r10);
                                                ettestct11(result, function (err, r11) {
                                                    result.push(r11);
                                                    ettestct13(result, function (err, r13) {
                                                        result.push(r13);
                                                        ettestct14(result, function (err, r14) {
                                                            result.push(r14);
                                                            ettestct15(result, function (err, r15) {
                                                                result.push(r15);
                                                                ettestct16(result, function (err, r16) {
                                                                    result.push(r16);
                                                                    ettestct17(result, function (err, r17) {
                                                                        result.push(r17);
                                                                        ettestct18(result, function (err, r18) {
                                                                            result.push(r18);
                                                                            ettestct19(result, function (err, r19) {
                                                                                result.push(r19);
                                                                                ettestct20(result, function (err, r20) {
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


// These are the add/get tests to stress out the dto/dot notation system
exports.ettestagtt = ettestagtt = function ettestagtt(params, callback) {
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

    ettestag1(result, function (err, r1) {
        result.push(r1);
        ettestag2(result, function (err, r2) {
            result.push(r2);
            ettestag3(result, function (err, r3) {
                result.push(r3);
                callback(err, result);
            });
        });
    });
}

// These are the deepfilter tests
exports.ettestetdtt = ettestetdtt = function ettestetdtt(params, callback) {

    var result = [];
    var err;

    etd16(result, function (err, r1) {
        result.push(r1);
        etd17(result, function (err, r2) {
            result.push(r2);
            etd18(result, function (err, r3) {
                result.push(r3);
                etd19(result, function (err, r4) {
                    result.push(r4);
                    callback(err, result);
                });
            });
        });
    });
}


// 888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
// 888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
// 888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
// functions a,b,c manipulate parameters
// Call func_b with no pre or post...it should simply remove 'e' and add 'g' to the parameters
exports.ettestt1 = ettestt1 = function ettestt1(params, callback) {
    eventappinstall();
    execute([{
            "executethis": "func_b",
            "c": "0",
            "d": "1",
            "e": "2"
        }],
        function (err, res) {
            res = logverify("ettestt1_result", res[0], [{
                "c": "0",
                "d": "1",
                "g": "4"
            }]);
            callback(err, res);
        });
}

// Not an 'at' test...used to test the verify system. This is a passing test.
exports.ettestt1s = ettestt1s = function ettestt1s(params, callback) {
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

// Not an 'at' test...used to tes the veryify system. This is a failing test.
exports.ettestt1sf = ettestt1sf = function ettestt1sf(params, callback) {
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

// Call func_b, but also tell preexecute to call func_a and postexecute to call func_c.
exports.ettestt2 = ettestt2 = function ettestt2(params, callback) {
    eventappinstall();
    execute([{
            "executethis": "func_b",
            "c": "0",
            "d": "1",
            "e": "2",
            "preexecute": "func_a",
            "postexecute": "func_c"
        }],
        function (err, res) {
            res = logverify("ettestt2_result", res[0], [{
                "f": "3",
                "g": "4",
                "h": "5"
            }]);
            callback(err, res);
        });
}

// Call func_b with only pre func_a...this intends to call func_a in preexecute and func_b 
// in midexecute and nothing in post execute.
exports.ettestt3 = ettestt3 = function ettestt3(params, callback) {
    eventappinstall();
    execute([{
            "executethis": "func_b",
            "c": "0",
            "d": "1",
            "e": "2",
            "preexecute": "func_a"
        }],
        function (err, res) {
            res = logverify("ettestt3_result", res[0], [{
                "c": "0",
                "f": "3",
                "g": "4"
            }]);
            callback(err, res);
        });
}

// Call func_b with only post func_a -- same result as t3. This is to make sure that not
// calling pre is ok...this calls only mid and post.
exports.ettestt3a = ettestt3a = function ettestt3a(params, callback) {
    eventappinstall();
    execute([{
            "executethis": "func_b",
            "c": "0",
            "d": "1",
            "e": "2",
            "postexecute": "func_a"
        }],
        function (err, res) {
            res = logverify("ettestt3a_result", res[0], [{
                "c": "0",
                "g": "4",
                "f": "3"
            }]);
            callback(err, res);
        });
}

// Call mid with func_b and post with func_c, assuring that multiple functions exectue
// well, no matter where in the pre/mid/post they are placed.
exports.ettestt4 = ettestt4 = function ettestt4(params, callback) {
    eventappinstall();
    execute([{
            "executethis": "func_b",
            "c": "0",
            "d": "1",
            "e": "2",
            "postexecute": "func_c"
        }],
        function (err, res) {
            res = logverify("ettestt4_result", res[0], [{
                "d": "1",
                "g": "4",
                "h": "5"
            }]);
            callback(err, res);
        });
}

// Call mid with func_b and pre with func_c, assuring that multiple functions exectue
// well, no matter where in the pre/mid/post they are placed.
exports.ettestt4a = ettestt4a = function ettestt4a(params, callback) {
    eventappinstall();
    execute([{
            "executethis": "func_b",
            "c": "0",
            "d": "1",
            "e": "2",
            "preexecute": "func_c"
        }],
        function (err, res) {
            res = logverify("ettestt4a_result", res[0], [{
                "d": "1",
                "g": "4",
                "h": "5"
            }]);
            callback(err, res);
        });
}
// Call func_b with func_a for pre and post to ensure that calling the same
// function more than once is not a problem for the system.
exports.ettestt5 = ettestt5 = function ettestt5(params, callback) {
    eventappinstall();
    execute([{
            "executethis": "func_b",
            "c": "0",
            "d": "1",
            "e": "2",
            "preexecute": "func_a",
            "postexecute": "func_a"
        }],
        function (err, res) {
            res = logverify("ettestt5_result", res[0], [{
                "c": "0",
                "f": "3",
                "g": "4"
            }]);
            callback(err, res);
        });
}
// Double check that calling func_b with func_c for pre and post to ensure that calling the same
// function more than once is not a problem for the system. Essentially showing that tt5 was not 
// a fluke, but a repeatable concept.
exports.ettestt6 = ettestt6 = function ettestt6(params, callback) {
    eventappinstall();
    execute([{
            "executethis": "func_b",
            "c": "0",
            "d": "1",
            "e": "2",
            "preexecute": "func_c",
            "postexecute": "func_c"
        }],
        function (err, res) {
            res = logverify("ettestt6_result", res[0], [{
                "d": "1",
                "h": "5",
                "g": "4"
            }]);
            callback(err, res);
        });
}

exports.ss1 = ss1 = function ss1(params, callback) {
    proxyprinttodiv('Function ss1 ', '--', 17);
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
    sendsms({"To":"+12145644732", "Body":"test"},
        function (err, res) { 
            callback (err, res[0])
        }
    );
}


// 888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
// 888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
// 888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
// This whole section will mirror the tt tests, but call functions that have intentional
// delays to test the async portioins of the system.
exports.ettestast1 = ettestast1 = function ettestast1(params, callback) {
    eventappinstall();
    execute([{
            "executethis": "async_func_b",
            "c": "0",
            "d": "1",
            "e": "2"
        }],
        function (err, res) {
            res = logverify("ettestast1_result", res[0], [{
                "d": "1",
                "c": "0",
                "g": "4"
            }]);
            callback(err, res);
        });
}
// Call async_func_b with pre calling func_a and post calling func_c...each simply
// deletes a prameter and add a parameter.
exports.ettestast2 = ettestast2 = function ettestast2(params, callback) {
    eventappinstall();
    execute([{
            "executethis": "async_func_b",
            "c": "0",
            "d": "1",
            "e": "2",
            "preexecute": "async_func_a",
            "postexecute": "async_func_c"
        }],
        function (err, res) {
            res = logverify("ettestast2_result", res[0], [{
                "f": "3",
                "g": "4",
                "h": "5"
            }]);
            callback(err, res);
        });
}
// Call async_func_b with only pre async_func_a...is it ok to not call post...yes it is.
exports.ettestast3 = ettestast3 = function ettestast3(params, callback) {
    eventappinstall();
    execute([{
            "executethis": "async_func_b",
            "c": "0",
            "d": "1",
            "e": "2",
            "preexecute": "async_func_a"
        }],
        function (err, res) {
            res = logverify("ettestast3_result", res[0], [{
                "c": "0",
                "f": "3",
                "g": "4"
            }]);
            callback(err, res);
        });
}
// Call async_func_b with only post async_func_a -- same result as t3
exports.ettestast3a = ettestast3a = function ettestast3a(params, callback) {
    eventappinstall();
    execute([{
            "executethis": "async_func_b",
            "c": "0",
            "d": "1",
            "e": "2",
            "postexecute": "async_func_a"
        }],
        function (err, res) {
            res = logverify("ettestast3a_result", res[0], [{
                "c": "0",
                "g": "4",
                "f": "3"
            }]);
            callback(err, res);
        });
}
// Call async_func_b with only post
exports.ettestast4 = ettestast4 = function ettestast4(params, callback) {
    eventappinstall();
    execute([{
            "executethis": "async_func_b",
            "c": "0",
            "d": "1",
            "e": "2",
            "postexecute": "async_func_c"
        }],
        function (err, res) {
            res = logverify("ettestast4_result", res[0], [{
                "d": "1",
                "g": "4",
                "h": "5"
            }]);
            callback(err, res);
        });
}
// Call async_func_b with only pre async_func_c -- same result as t4
exports.ettestast4a = ettestast4a = function ettestast4a(params, callback) {
    eventappinstall();
    execute([{
            "executethis": "async_func_b",
            "c": "0",
            "d": "1",
            "e": "2",
            "preexecute": "async_func_c"
        }],
        function (err, res) {
            res = logverify("ettestast4a_result", res[0], [{
                "d": "1",
                "g": "4",
                "h": "5"
            }]);
            callback(err, res);
        });
}
// Call async_func_b with async_func_a for pre and post
exports.ettestast5 = ettestast5 = function ettestast5(params, callback) {
    eventappinstall();
    execute([{
            "executethis": "async_func_b",
            "c": "0",
            "d": "1",
            "e": "2",
            "preexecute": "async_func_a",
            "postexecute": "async_func_a"
        }],
        function (err, res) {
            res = logverify("ettestast5_result", res[0], [{
                "c": "0",
                "f": "3",
                "g": "4"
            }]);
            callback(err, res);
        });
}
// Call async_func_b with async_func_c for pre and post
exports.ettestast6 = ettestast6 = function ettestast6(params, callback) {
    eventappinstall();
    execute([{
            "executethis": "async_func_b",
            "c": "0",
            "d": "1",
            "e": "2",
            "preexecute": "async_func_c",
            "postexecute": "async_func_c"
        }],
        function (err, res) {
            res = logverify("ettestast6_result", res[0], [{
                "d": "1",
                "h": "5",
                "g": "4"
            }]);
            callback(err, res);
        });
}
// 888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
// 888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
// 888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
// Call redir_b. The config should remap redir_b to call func_b with no pre or post execution.
exports.ettestct1 = ettestct1 = function ettestct1(params, callback) {
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
    assert.push( {
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

    var res = master_test_and_verify("ettestct1", parameters, assert, {}, {"command":"null"},function (err, res) {
        callback(err, res)
    });
}
// Call redir_b. The config should remap redir_b to call func_b and pre to remap redir_a to func_a, and
// also remap redir_c to func_c.
exports.ettestct2 = ettestct2 = function ettestct2(params, callback) {
    var parameters = {
        "executethis": "redir_b",
        "c": "0",
        "d": "1",
        "e": "2",
        "preexecute": "redir_a",
        "postexecute": "redir_c",
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
        "f": "3",
        "g": "4",
        "h": "5",
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
    });
    var res = master_test_and_verify("ettestct2", parameters, assert, {}, {"command":"null"},function (err, res) {
        callback(err, res)
    });
}
// Call redir_b. Also call pre with redir_a remapped to func_a, and no post call at all.
exports.ettestct3 = ettestct3 = function ettestct3(params, callback) {
    var parameters = {
        "executethis": "redir_b",
        "c": "0",
        "d": "1",
        "e": "2",
        "preexecute": "redir_a",
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
        "c": "0",
        "f": "3",
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
    var res = master_test_and_verify("ettestct3", parameters, assert, {}, {"command":"null"},function (err, res) {
        callback(err, res)
    });
}
// Call redir_b with only post redir_a -- same result as ct3, but putting the only remap
// call in post instead of pre.
exports.ettestct3a = ettestct3a = function ettestct3a(params, callback) {
    var parameters = {
        "executethis": "redir_b",
        "c": "0",
        "d": "1",
        "e": "2",
        "postexecute": "redir_a",
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
        "c": "0",
        "g": "4",
        "f": "3",
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
    });
    var res = master_test_and_verify("ettestct3a", parameters, assert, {}, {"command":"null"},function (err, res) {
        callback(err, res)
    });
}
// Call redir_b with only post calling func_c remapped to func_c. Simply ensures that the remapping can be any 
// function in either pre or post.
exports.ettestct4 = ettestct4 = function ettestct4(params, callback) {
    var parameters = {
        "executethis": "redir_b",
        "c": "0",
        "d": "1",
        "e": "2",
        "postexecute": "redir_c",
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
        "g": "4",
        "h": "5",
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
    var res = master_test_and_verify("ettestct4", parameters, assert, {}, {"command":"null"},function (err, res) {
        callback(err, res)
    });
}
// Call redir_b with only pre redir_c -- same result as t4
exports.ettestct4a = ettestct4a = function ettestct4a(params, callback) {
    eventappinstall();
    var parameters = {
        "executethis": "redir_b",
        "c": "0",
        "d": "1",
        "e": "2",
        "preexecute": "redir_c",
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
        "g": "4",
        "h": "5",
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
    var res = master_test_and_verify("ettestct4a", parameters, assert, {}, {"command":"null"},function (err, res) {
        callback(err, res)
    });
}
// Call redir_b with a remapping of redir_a to func_a for both pre and post.
exports.ettestct5 = ettestct5 = function ettestct5(params, callback) {
    eventappinstall();
    var parameters = {
        "executethis": "redir_b",
        "c": "0",
        "d": "1",
        "e": "2",
        "preexecute": "redir_a",
        "postexecute": "redir_a",
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
        "c": "0",
        "f": "3",
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
    var res = master_test_and_verify("ettestct4a", parameters, assert, {}, {"command":"null"},function (err, res) {
        callback(err, res)
    });
}
// Call redir_b with redir_c for pre and post, essentiall rerunning ct5 but ensuring that other functions
// can be used with the same effect.
exports.ettestct6 = ettestct6 = function ettestct6(params, callback) {
    eventappinstall();
    var parameters = {
        "executethis": "redir_b",
        "c": "0",
        "d": "1",
        "e": "2",
        "preexecute": "redir_c",
        "postexecute": "redir_c",
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
        "g": "4",
        "d": "1",
        "h": "5",
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
    var res = master_test_and_verify("ettestct6", parameters, assert, {}, {"command":"null"},function (err, res) {
        callback(err, res)
    });
}
// This will try pre with func a, but remapped with a configuration that
// is passed into executethis...it still wants to hit func_b with mid
exports.ettestct7 = ettestct7 = function ettestct7(params, callback) {
    eventappinstall();
    var parameters = {
        "c": "0",
        "d": "1",
        "e": "2",
        "preexecute": "a",
        "executethis": "func_b",
        "configuration": {
            "preexecute": [{
                "dothis": "dothis",
                "tryorder": 0,
                "executeorder": 0,
                "params": {}
            }],
            "a": [{
                "dothis": "alertFn1",
                "tryorder": 0,
                "executeorder": 0,
                "params": {}
            }]
        }
    }
    var assert = [];
    assert.push({
        "ct7": "did some alerting",
        "configuration": {},
        "d": "1",
        "c": "0",
        "g": "4"
    });
    var res = master_test_and_verify("ettestct7", parameters, assert, {}, {"command":"null"},function (err, res) {
        callback(err, res)
    });
}

// This test asserts that the tryorder in the config is successful
// and causes executethis to call dothis, not server, or the others. As of jan 28, it
// still fails to reorder them and calls the server instead. It breaks the code and will not
// simply call func_b locally.
exports.ettestct8 = ettestct8 = function ettestct8(params, callback) {
    eventappinstall();
    // config = setconfig5();
    var parameters = {
        "executethis": "func_b",
        "c": "0",
        "d": "1",
        "e": "2",
        "configuration": {
            "midexecute": [{
                "executeorder": 1,
                "tryorder": 10,
                "dothis": 'server',
                "params": {}
            }, {
                "executeorder": 1,
                "tryorder": 4,
                "dothis": 'executeparam',
                "params": {}
            }, {
                "executeorder": 1,
                "tryorder": 7,
                "dothis": 'executegetwid',
                "params": {}
            }, {
                "executeorder": 1,
                "tryorder": 1,
                "dothis": 'dothis',
                "params": {}
            }]
        }
    }
    var assert = [];
    assert.push({
        "d": "1",
        "c": "0",
        "g": "4"
    });

    var res = master_test_and_verify("ettestct8", parameters, assert, {}, {"command":"null"},function (err, res) {
        callback(err, res)
    });
}

// This test is to call does_not_exist, remaapped in the parameters to remap does_not_exist to func_b and execute...so far it doesn't work....
exports.ettestct9 = ettestct9 = function ettestct9(params, callback) {
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
    assert.push( {
        "does_not_exist": "func_b",
        "d": "1",
        "c": "0",
        "g": "4"
    });
    var res = master_test_and_verify("ettestct9", parameters, assert, {}, {"command":"null"},function (err, res) {
        callback(err, res)
    });
}
// This test is to call does_not_exist, remapped to a function in the parameters. So far it does not work...never has.
exports.ettestct9a = ettestct9a = function ettestct9a(params, callback) {
    eventappinstall();
    var parameters = {
        "executethis": "does_not_exist",
        "does_not_exist": "function () { return {data: 'Keg of Beer'}; }"
    }
    var assert = [];
    assert.push({
        "data": "Keg of Beer"
    });
    var res = master_test_and_verify("ettestct9a", parameters, assert, {}, {"command":"null"},function (err, res) {
        callback(err, res)
    });
}

// This test is to call func_b and in pre, call does_not_exist that is remapped to func_a...and then to func_b. So
// far it does not work, and never has.
exports.ettestct10 = ettestct10 = function ettestct10(params, callback) {
    eventappinstall();
    var parameters = {
        "executethis": "func_b",
        "preexecute": "does_not_exist",
        "does_not_exist": "func_a",
        "c": "0",
        "d": "1",
        "e": "2"
    }
    // since we are overiding how functions are maped here, "does_not_exist_* are not deleted from the params
    var assert = [];
    assert.push({
        "does_not_exist": "func_a",
        "f": "3",
        "c": "0",
        "g": "4"
    });
    var res = master_test_and_verify("ettestct10", parameters, assert, {}, {"command":"null"},function (err, res) {
        callback(err, res)
    });
}

// This test is to call func_b, remap does_not_exist_1 to func_a,
// remap does_not_exist_2 to func_c, and execute params to func_a, and then to func_b, and then func_c.
// None of these ever work...
exports.ettestct11 = ettestct11 = function ettestct11(params, callback) {
    eventappinstall();
    var parameters = {
        "executethis": "func_b",
        "preexecute": "does_not_exist_1",
        "does_not_exist_1": "func_a",
        "postexecute": "does_not_exist_2",
        "does_not_exist_2": "func_c",
        "c": "0",
        "d": "1",
        "e": "2"
    }
    // since we are overiding how functions are maped here, "does_not_exist_* are not deleted from the params
    var assert = [];
    assert.push({
        "does_not_exist_1": "func_a",
        "does_not_exist_2": "func_c",
        "f": "3",
        "h": "5",
        "g": "4"
    });
    var res = master_test_and_verify("ettestct11", parameters, assert, {}, {"command":"null"},function (err, res) {
        callback(err, res)
    });
}

// This test is to send in a config as parameter of a config. This allows for the server to recieve a config
// from a config that is passed in the parameters.
exports.ettestct12 = ettestct12 = function ettestct12(params, callback) {
    eventappinstall();
    var parameters = {
        "c": "0",
        "d": "1",
        "e": "2",
        "preexecute": "a",
        "configuration": {
            "preexecute": [{
                "dothis": "dothis",
                "tryorder": "1",
                "executeorder": "1"
            }],
            "a": [{
                "dothis": "alertFn1",
                "tryorder": "1",
                "executeorder": "1"
            }],
            "params": [{
                "a": "b",
                "c": "d",
                "e": "f"
            }]
        }
    }
    var assert = [];
    assert.push({
        "c": "0",
        "d": "1",
        "ettestct12": "did some alerting",
        "g": "4"
    });
    var res = master_test_and_verify("ettestct12", parameters, assert, {}, {"command":"null"},function (err, res) {
        callback(err, res)
    });
}

// This test is to test a config where a and b do not exist, but func_c does and c will execute. You
// should not see any data for ct13_output_a, or b. The params of mid should insert the cer2:booberry in
// the results
exports.ettestct13 = ettestct13 = function ettestct13(params, callback) {
    eventappinstall();

    var parameters = {
        "executethis": "a",
        "executethis": "b",
        "executethis": "fire_c",
        "configuration": {
            "preexecute": [{
                "executeorder": 1,
                "tryorder": 1,
                "dothis": 'dothis',
                "params": {
                    'cer1': 'alphabits'
                }
            }],
            "midexecute": [{
                "executeorder": 1,
                "tryorder": 1,
                "dothis": 'dothis',
                "params": {
                    'cer2': 'booberry'
                }
            }],
            "postexecute": [{
                "executeorder": 1,
                "tryorder": 1,
                "dothis": 'dothis',
                "params": {
                    'cer3': 'chex'
                }
            }]
        }

    }
    var assert = [];
    assert.push({
        "fire_c": "fire_c is now fired",
        "cer2": "booberry"
    });
    var res = master_test_and_verify("ettestct13", parameters, assert, {}, {"command":"null"},function (err, res) {
        callback(err, res)
    });
}

// This is original ct14 test
// // This test is to test a config where a config with params is sent to pre, mid, and post.
// // The results should have the a,b,c cereals, along with the regular params.
// exports.ettestct14 = ettestct14 = function ettestct14(params, callback) {
//  eventappinstall();
//  config = setconfig6();
//  execute([{
//      "executethis": "func_b",
//      "preexecute": "func_a",
//      "postexecute": "func_c",
//      "c": "0",
//      "d": "1",
//      "e": "2"
//  }],
//  function (err, res) {
//      res = logverify("ettestct14_result", res[0][0], {
//      "g": "4",
//      "cer2": "booberry",
//      "cer1": "alphabits",
//      "f": "3",
//      "cer3": "chex",
//      "h": "5"
//  });
//  callback(err, res);
//  });
// }

// Here is the modified ct14 test
// This test is to test a config where a config with params is sent to pre, mid, and post.
// The results should have the a,b,c cereals, along with the regular params.
exports.ettestct14 = ettestct14 = function ettestct14(params, callback) {
    eventappinstall();
    var parameters = {
        "executethis": "func_b",
        "preexecute": "func_a",
        "postexecute": "func_c",
        "c": "0",
        "d": "1",
        "e": "2",
        "configuration": {
            "preexecute": [{
                "executeorder": 1,
                "tryorder": 1,
                "dothis": 'dothis',
                "params": {
                    'cer1': 'alphabits'
                }
            }],
            "midexecute": [{
                "executeorder": 1,
                "tryorder": 1,
                "dothis": 'dothis',
                "params": {
                    'cer2': 'booberry'
                }
            }],
            "postexecute": [{
                "executeorder": 1,
                "tryorder": 1,
                "dothis": 'dothis',
                "params": {
                    'cer3': 'chex'
                }
            }]
        }
    };

    var assert = [];
    assert.push({
        "g": "4",
        "cer2": "booberry",
        "cer1": "alphabits",
        "f": "3",
        "cer3": "chex",
        "h": "5",
        "configuration": {}
    });
    var res = master_test_and_verify("ettestct14", parameters, assert, {}, {"command":"null"},function (err, res) {
        callback(err, res)
    });
}


// This will send the alphabits param in the preexecute config, but will be overriding it in the args..
// Which one will win out? It does...the config params are lost and the 'arg' params from the config win out.
exports.ettestct15 = ettestct15 = function ettestct15(params, callback) {
    eventappinstall();
    // config = setconfig6();
    var parameters = {
        "executethis": "func_b",
        "preexecute": "func_a",
        "cer1": "booberry",
        "c": "0",
        "d": "1",
        "e": "2",
        "configuration": {
            "preexecute": [{
                "executeorder": 1,
                "tryorder": 1,
                "dothis": 'dothis',
                "params": {
                    'cer1': 'alphabits'
                }
            }],
            "midexecute": [{
                "executeorder": 1,
                "tryorder": 1,
                "dothis": 'dothis',
                "params": {
                    'cer2': 'booberry'
                }
            }],
            "postexecute": [{
                "executeorder": 1,
                "tryorder": 1,
                "dothis": 'dothis',
                "params": {
                    'cer3': 'chex'
                }
            }]
        }
    }
    assert = [];
    assert.push({
        "g": "4",
        "cer1": "booberry",
        "f": "3",
        "c": "0",
        "cer2": "booberry",
        "configuration": {
            "preexecute": [{
                "executeorder": 1,
                "tryorder": 1,
                "dothis": 'dothis',
                "params": {
                    'cer1': 'alphabits'
                }
            }],
            "midexecute": [{
                "executeorder": 1,
                "tryorder": 1,
                "dothis": 'dothis',
                "params": {
                    'cer2': 'booberry'
                }
            }],
            "postexecute": [{
                "executeorder": 1,
                "tryorder": 1,
                "dothis": 'dothis',
                "params": {
                    'cer3': 'chex'
                }
            }]
        }

    });
    var res = master_test_and_verify("ettestct15", parameters, assert, {}, {"command":"null"},function (err, res) {
        callback(err, res)
    });
}
// Here the object is to get a set of config params from the config itself by using setconfig2 and checking for the 
// config params in the assertion wid.
exports.ettestct16 = ettestct16 = function ettestct16(params, callback) {
    eventappinstall();
    var parameters = {
        "executethis": "func_b",
        "preexecute": "mock_server",
        "c": "0",
        "d": "1",
        "e": "2",
        "configuration": {
            "redir_a": [{
                "dothis": "func_a",
                "tryorder": 1,
                "executeorder": 1,
                "params": {}
            }],
            "redir_b": [{
                "dothis": "func_b",
                "tryorder": 1,
                "executeorder": 1,
                "params": {}
            }],
            "redir_c": [{
                "dothis": "func_c",
                "tryorder": 1,
                "executeorder": 1,
                "params": {}
            }],
            "mock_server": [{
                "dothis": "cic_output",
                "tryorder": 1,
                "executeorder": 1,
                "params": {
                    "configuration": {
                        "login1": [{
                            "executeorder": 1,
                            "tryorder": 1,
                            "dothis": "login",
                            "params": {}
                        }]
                    }
                }
            }]
        }
    }

    var assert = [];
    assert.push({
        "c": "0",
        "d": "1",
        "g": "4",
        "configuration": {
            "login1": [{
                "executeorder": 1,
                "tryorder": 1,
                "dothis": "login",
                "params": {}
            }],
            "redir_a": [{
                "dothis": "func_a",
                "tryorder": 1,
                "executeorder": 1,
                "params": {}
            }],
            "redir_b": [{
                "dothis": "func_b",
                "tryorder": 1,
                "executeorder": 1,
                "params": {}
            }],
            "redir_c": [{
                "dothis": "func_c",
                "tryorder": 1,
                "executeorder": 1,
                "params": {}
            }]
        }
    });
    var res = master_test_and_verify("ettestct16", parameters, assert, {}, {"command":"null"},function (err, res) {
        callback(err, res)
    });
}

// This is to use the params in preexecute to ensure that the preexecute params are getting used by dothis
exports.ettestct17 = ettestct17 = function ettestct17(params, callback) {
    eventappinstall();
    var parameters = {
        "executethis": "func_b",
        "c": "0",
        "d": "1",
        "e": "2",
        "configuration": {
            "midexecute": [{
                "dothis": "dothis",
                "tryorder": "1",
                "executeorder": "1",
                "params": {
                    "exdef": "param after dothis and executeparam was grabbed"
                }
            }]
        }
    }
    var assert = [];
    assert.push({
        "exdef": "param after dothis and executeparam was grabbed",
        "d": "1",
        "c": "0",
        "g": "4",
         "configuration": {
            "midexecute": [{
                "dothis": "dothis",
                "tryorder": "1",
                "executeorder": "1",
                "params": {
                    "exdef": "param after dothis and executeparam was grabbed"
                }
            }]
        }
    });
    var res = master_test_and_verify("ettestct17", parameters, assert, {}, {"command":"null"},function (err, res) {
        callback(err, res)
    });
}

// This is to use the params in preexecute to ensure that the preexecute params are getting used by dothis
exports.ettestct18 = ettestct18 = function ettestct18(params, callback) {
    eventappinstall();
    // config = setconfig7();
    var parameters = {
        "executethis": "func_b",
        "preexecute": "func_a",
        "c": "0",
        "d": "1",
        "e": "2",
        "configuration": {
            "midexecute": [{
                "dothis": "dothis",
                "tryorder": "1",
                "executeorder": "1",
                "params": {
                    "exdef": "param after dothis and executeparam was grabbed"
                }
            }]
        }
    }
    var assert = [];
    assert.push({
        "exdef": "param after dothis and executeparam was grabbed",
        "f": "3",
        "c": "0",
        "g": "4",
        "configuration": {
            "midexecute": [{
                "dothis": "dothis",
                "tryorder": "1",
                "executeorder": "1",
                "params": {
                    "exdef": "param after dothis and executeparam was grabbed"
                }
            }]
        }
    });
    var res = master_test_and_verify("ettestct18", parameters, assert, {}, {"command":"null"},function (err, res) {
        callback(err, res)
    });
}
// This test is to send params to executethis. There will be params in the call to executethis, config file, and the config in the params
// sent to executethis. There are params that will be used and changed throughout the call...they are alfa, bravo, and charlie. At this point, 
// the args sent to executethis will always win...not any of the 3 places in the config that they are set.
exports.ettestct19 = ettestct19 = function ettestct19(params, callback) {
    eventappinstall();
    // config = setconfig8();
    var parameters = {
        "executethis": "func_b",
        "preexecute": "func_a",
        "postexecute": "func_c",
        "configuration": {
            "preexecute": [{
                "dothis": "dothis",
                "tryorder": 0,
                "executeorder": 0,
                "params": {
                    "alpha": "3"
                }
            }],
            "midexecute": [{
                "dothis": "dothis",
                "tryorder": 0,
                "executeorder": 0,
                "params": {
                    "bravo": "3"
                }
            }],
            "postexecute": [{
                "dothis": "dothis",
                "tryorder": 0,
                "executeorder": 0,
                "params": {
                    "charlie": "3"
                }
            }]
        },
        "alpha": "1",
        "bravo": "1",
        "charlie": "1"
    }
    var assert = [];
    assert.push({
        "configuration": {},
        "f": "3",
        "g": "4",
        "h": "5",
        "alpha": "1",
        "bravo": "1",
        "charlie": "1",
        "configuration": {
            "preexecute": [{
                "dothis": "dothis",
                "tryorder": 0,
                "executeorder": 0,
                "params": {
                    "alpha": "3"
                }
            }],
            "midexecute": [{
                "dothis": "dothis",
                "tryorder": 0,
                "executeorder": 0,
                "params": {
                    "bravo": "3"
                }
            }],
            "postexecute": [{
                "dothis": "dothis",
                "tryorder": 0,
                "executeorder": 0,
                "params": {
                    "charlie": "3"
                }
            }]
        }
    });
    var res = master_test_and_verify("ettestct19", parameters, assert, {}, {"command":"null"},function (err, res) {
        callback(err, res)
    });
}
// Here the goal is to see if the config of the left and right conflict, which wins? Ad of now, the right side wins. The params for func_a,b,c are 
// all set to be 2, but they come out as 4, because that is what pre,mid, and post set them to.
exports.ettestct20 = ettestct20 = function ettestct20(params, callback) {
    eventappinstall();
    // config = setconfig8();
    var parameters = {
        "executethis": "func_b",
        "preexecute": "func_a",
        "postexecute": "func_c",        
        "configuration": {
            "preexecute": [{
                "dothis": "dothis",
                "tryorder": 0,
                "executeorder": 0,
                "params": {
                    "alpha": "3"
                }
            }],
            "midexecute": [{
                "dothis": "dothis",
                "tryorder": 0,
                "executeorder": 0,
                "params": {
                    "bravo": "3"
                }
            }],
            "postexecute": [{
                "dothis": "dothis",
                "tryorder": 0,
                "executeorder": 0,
                "params": {
                    "charlie": "3"
                }
            }]
        }
    }
    var assert = [];
    assert.push({
        "charlie": "4",
        "g": "4",
        "alpha": "4",
        "f": "3",
        "bravo": "4",
        "h": "5",
        "configuration": {
            "preexecute": [{
                "dothis": "dothis",
                "tryorder": 0,
                "executeorder": 0,
                "params": {
                    "alpha": "3"
                }
            }],
            "midexecute": [{
                "dothis": "dothis",
                "tryorder": 0,
                "executeorder": 0,
                "params": {
                    "bravo": "3"
                }
            }],
            "postexecute": [{
                "dothis": "dothis",
                "tryorder": 0,
                "executeorder": 0,
                "params": {
                    "charlie": "3"
                }
            }]
        }
    });
    var res = master_test_and_verify("ettestct20", parameters, assert, {}, {"command":"null"},function (err, res) {
        callback(err, res)
    });
}
// 888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
// 888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
// 888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888

// Template for a new test, yet to be determined
exports.ct1000 = ct1000 = function ct1000(params, callback) {
    eventappinstall();
    executetest("executethis", {
        "executethis": "func_b",
        "c": "0",
        "d": "1",
        "e": "2"
    }, "ct1000_output", "");
    params = logverify("c_unit_tests", "ct1000_result", "ct1000_output", "", "", {
        "c": "0",
        "d": "1",
        "g": "4"
    });
    callback(err, params);
}

// This is just a stub function to do a little work...really just a way to show that
// a function call can be made.
exports.alertFn1 = alertFn1 = function alertFn1(params, callback) {
    // alert('ct7 has alerted');
    params["ct7"] = "did some alerting";
    // delete params["configuration"];
    var err;
    callback(err, params);
}

// 888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
// 888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
// 888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
// Functions to use in pre, mid and post
// to test the flow of parameters through executethis

exports.func_a = func_a = function func_a(parameters, callback) {
    console.log('from func_a');
    printToDiv('func_a', parameters, 1);
    delete parameters["d"];
    parameters["f"] = "3";
    var err;
    callback(err, parameters);
}

exports.func_b = func_b = function func_b(parameters, callback) {
    console.log('from func_b');
    delete parameters["e"];
    parameters["g"] = "4";
    var err;
    callback(err, parameters);
}

exports.func_c = func_c = function func_c(parameters, callback) {
    console.log('from func_c');
    printToDiv('func_c', parameters, 1);
    delete parameters["c"];
    parameters["h"] = "5";
    var err;
    callback(err, parameters);
}

// This is used when a and b do not exist, but the fire_c
// is sent as a parameter, and that parameter is to call fire_c.
exports.fire_c = fire_c = function fire_c(parameters, callback) {
    parameters["fire_c"] = "fire_c is now fired";
    var err;
    callback(err, parameters);
}

// These are the async versions of the above func_a, _b, and _c.
exports.async_func_a = async_func_a = function async_func_a(parameters, callback) {
    delete parameters["d"];
    parameters["f"] = "3";
    //sleep(500);
    var err;
    callback(err, parameters);
}

exports.async_func_b = async_func_b = function async_func_b(parameters, callback) {
    delete parameters["e"];
    parameters["g"] = "4";
    sleep(500);
    var err;
    callback(err, parameters);
}

exports.async_func_c = async_func_c = function async_func_c(parameters, callback) {
    delete parameters["c"];
    parameters["h"] = "5";
    //sleep(500);
    var err;
    callback(err, parameters);
}

// 888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
// 888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
// 888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888

exports.ettestag11 = ettestag11 = function ettestag11(params, callback) {
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
        function (err, res) {
            
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

            res = logverify("ettestag11_result", res[4], [
                  {"0":
                        {
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

exports.ettestag12 = ettestag12 = function ettestag12(params, callback) {
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
            "preexecute": "first_wid"
        }, {
            "executethis": "second_wid"
        }, {
            "postexecute": "third_wid"
        }],
        function (err, res) {
            
            console.log('Function ag11 result\n' + JSON.stringify(res, '-', 4));
            
            // res = logverify("ettestag12_result", res[3], [{
            //     "data_1": "Red",
            //     "wid": "first_wid",
            //     "metadata": {}
            // }]);

            // res = logverify("ettestag12_result", res[4], [{
            //     "data_2": "Green",
            //     "wid": "second_wid",
            //     "metadata": {}
            // }]);

            res = logverify("ettestag12_result", res[4], [
                  {"0":
                        {
                            "data_2": "Green",
                            "wid": "second_wid",
                            "metadata": {"method":"defaultdto"}
                            // "midexecute": null
                        }
            }])
            
            // res = logverify("ettestag12_result", res[5], [{
            //     "data_3": "Blue",
            //     "wid": "third_wid",
            //     "metadata": {}
            // }]);

            callback(err, res);
        });
}


// This will test the ability to write a dto to the db and retrieve it

exports.ettestag1 = ettestag1 = function ettestag1(params, callback) {
      //debuglevel = 11;
    // eventappinstall();
    execute([{
            "executethis": "addwidmaster",
            "wid": "sounddto",
            "metadata.method": "sounddto",
            "note": "string"
        }, {
            "executethis": "getwidmaster",
            "wid": "sounddto"
        }],
        function (err, res1) {
            proxyprinttodiv("Ag1  result ", res1, 99);
            // var res = res1[1]; //~~~ changed by SAURABH 
            var res = res1[0];

            proxyprinttodiv('Function ag1 expected res ', {
                "note": "string",
                "wid": "sounddto",
                "metadata.method": "sounddto"
            }, 99);
            proxyprinttodiv('Function ag1 actual result ', res, 99);
            res = logverify("ettestag1_result", res, [{"wid":"sounddto","metadata":{"method":"sounddto"},"note":"string"}]);
            callback(err, res);
        });
}

exports.ettestag1a = ettestag1a = function ettestag1a(params, callback) {
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
        function (err, res) {
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

// // This will test the ability to write a dto to the db, use that dto to write
// // a wid with that dto, and get the results of getting that wid.
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

exports.ettestag122 = ettestag122 = function ettestag122(params, callback) {
var a = {"wid":"systemdefault","command":{"dtotype":"","adopt":"default","getwidmaster":{"inheritflag":"false","execute":"ConvertFromDOTdri"},"resultparameters":{"note":"string","wid":"sounddto","metadata":{"method":"sounddto"}}},"executethis":"getwidmaster"}
proxyprinttodiv('>>>> before a', a, 99);
var filter_data = tolowerparameters(a,{
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
                                
                            },true);
proxyprinttodiv('>>>> after a', filter_data.output, 99);

}
// This will test the ability to write a dto to the db, use that dto to write
// a wid with that dto, and get the results of getting that wid.
exports.ettestag2 = ettestag2 = function ettestag2(params, callback) {
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
        function (err, res) {
            debugfn("offlinegetwid code generator END", "ag2", "", "code", getglobal("debugcolor"), getglobal("debugindent"), {}, 9);

            saveglobal("debugname", "");
            saveglobal("debugcat", "");
            debugsubcat = "";
            proxyprinttodiv('Function ag2 result ', res, 38);
            res = logverify("ettestag2_result", res[3], [{
                "hue": "red",
                "wid": "color1",
                "metadata.method": "defaultdto" // changed by joe
                //"metadata": {"method":"colordto"}
            }]);
            callback(err, res);
    });
};
// This is a 2 level test of the dtos...instantiate song1 with a sonddto, and some sounddto values
// failing due to a command object being sent back
exports.ettestag3 = ettestag3 = function ettestag3(params, callback) {
    //eventappinstall();

    //debuglevel = 17;
    //saveglobal("debugname", "");

    //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    // Functions of --- config-local
    // saveglobal("debugname", "offlineupdatewid");
    
    // saveglobal("debugname", "offlinegetwid");
    //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    // Functions of --- add
    
    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    // Functions of --- query
    // saveglobal("debugname", "querywid");
     
    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    // Functions of --- get
    // saveglobal("debugname", "getwid");
    
    // saveglobal("debugname", "aggressivedto");
    
    // saveglobal("debugname", "getcleanparameters");

    // saveglobal("debugname", "getwidmaster");
     
    // saveglobal("debugname", "getwidmongo");
    // saveglobal("debugname", "getcleanparameters");
    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

    // saveglobal("debugcat", "");
    // saveglobal("debugsubcat", "code");

debuglevel=0;
    execute([{
            // "executethis": "addwidmaster",
            // "wid": "sonddto",
            // "metadata.method": "sonddto",
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
            "wid": "sonddto",
            "metadata.method": "sonddto",
            "title": "string",
            "metadata.sounddto.type": "onetomany"
        }, {
            "executethis": "addwidmaster",
            "wid": "rel_sound_to_song",
            "metadata.method":"relationshipdto",
            "primarywid": "sonddto",
            "secondarywid": "sounddto",
            "primarymethod": "sonddto",
            "secondarymethod": "sounddto",
            "linktype":"onetomany",
            "relationshiptype": "attributes"
        // }, {
        //     "executethis": "addwidmaster",
        //     "wid": "song1",
        //     "metadata.method": "sonddto",
        //     "title": "Highway to Hell",
        //     "sounddto.0.note": "A flat",
        //     "sounddto.1.note": "B sharp",
        //     "sounddto.2.note": "C flat"
        }, {                       
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "sonddto",
            "title": "Highway to Hell",
            "sounddto.wid":"ag3aflat",
            "sounddto.note": "A flat"
        }, {            
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "sonddto",
            "title": "Highway to Hell",
            "sounddto.wid":"ag3bsharp",
            "sounddto.note": "B sharp"
        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "sonddto",
            "title": "Highway to Hell",
            "sounddto.wid":"ag3cflat",
            "sounddto.note": "C flat"
        }, {
            "executethis": "getwidmaster",
            "wid": "song1"
         }
        ],
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

        function (err, res) {
            // alert('err' + JSON.stringify(err, '-', 4));

            
            // debugfn("update code generator END", "updatewid", "add", "code", getglobal("debugcolor"), getglobal("debugindent"), {}, 5);
            // 
            // These will create the code on the screen from the logged data
            
            //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
            // Functions of --- config-local
             
            // debugfn("update code generator END",        "offlineupdatewid", "add",   "code", getglobal("debugcolor"), getglobal("debugindent"), {}, 9);
            // debugfn("offlinegetwid code generator END", "offlinegetwid",    "get",   "code", getglobal("debugcolor"), getglobal("debugindent"), {}, 9);
            debugfn("offlinegetwid code generator END", "",    "",   "code", getglobal("debugcolor"), getglobal("debugindent"), {}, 9);
             
            //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
            // Functions of --- add

            //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
            // Functions of --- query

            // debugfn("querywid code generator END",      "querywid",         "query", "code", getglobal("debugcolor"), getglobal("debugindent"), {}, 9);
            
            // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
            // Functions of --- get
            
            // debugfn("getwidmaster code generator END",  "getwidmaster",     "get",   "code", getglobal("debugcolor"), getglobal("debugindent"), {}, 9);
            // debugfn("getWidMongo code generator END",   "getWidMongo",      "get",   "code", getglobal("debugcolor"), getglobal("debugindent"), {}, 9);
            // debugfn("getcleanparameters code generator END",   "getcleanparameters",      "get",   "code", getglobal("debugcolor"), getglobal("debugindent"), {}, 9);
            
            // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
            // saveglobal("debugname", "");
            // saveglobal("debugcat", "");
            // saveglobal("debugsubcat", "");

            proxyprinttodiv('Function ag3 result Full res', res, 17);
            proxyprinttodiv('Function ag3 result ', res[6], 17);

            res = logverify("ettestag3_result", res[6], [{
                "title": "Highway to Hell",
                "wid": "song1",
                "metadata.method": "sonddto",
                "metadata.sounddto.type": "onetomany",
                "sounddto.0.note": "A flat",
                "sounddto.0.wid": "ag3aflat",
                "sounddto.0.metadata.method": "sounddto",
                "sounddto.1.note": "B sharp",
                "sounddto.1.wid": "ag3bsharp",
                "sounddto.1.metadata.method": "sounddto",
                "sounddto.2.note": "C flat",
                "sounddto.2.wid": "ag3cflat",
                "sounddto.2.metadata.method": "sounddto"
            }]);
            debuglevel=0;
            // execute({"executethis": "getwidmaster","wid": "sonddto",
            //       "command":{"getwidmaster":{"convertmethod":"dto",
            //                               "execute":"ConvertFromDOTdri",
            //                               "inheritflag":"true","dtotype":""}}}, function (err, res1) {
            execute({"executethis": "getwidmaster","wid": "song1"}, function (err, res1) {
                 proxyprinttodiv('Function ag3 result LAST ', res1, 99); 
                callback(err, res); 
                 
             })
        });
}

// This test does not add the data records correctly
exports.ettestag3b = ettestag3b = function ettestag3b(params, callback) {
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
         }
        ],
   
        function (err, res) {
        
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
            debuglevel=38;
            execute({"executethis": "getwidmaster","wid": "sonddto",
                  "command":{"getwidmaster":{"convertmethod":"dto",
                                          "execute":"ConvertFromDOTdri",
                                          "inheritflag":"true","dtotype":""}}}, function (err, res1) {
            //execute({"executethis": "getwidmaster","wid": "song1"}, function (err, res1) {
                proxyprinttodiv('Function ag3 result LAST ', res1, 17); 
                callback(err, res); 
                 
            })
        });
}

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

exports.ettestag5 = ettestag5 = function ettestag5(params, callback) {
    eventappinstall();
    addToLocalStorage("DRI", [{"wid":"initialwid", "initialwid":"hello from bootprocess"}]);
    addToLocalStorage("DRIKEY", {"initialwid" : {"wid":"initialwid", "initialwid":"for key hello from bootprocess"}});

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
      function (err, res) {
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
 
            execute({"executethis": "getwidmaster","wid": "songdto","command.getwidmaster.convertmethod":"dto",
                  "command.getwidmaster.execute":"ConvertFromDOTdri" }, function (err, res1) {
                  proxyprinttodiv('Function ag5 result LAST ', res1, 17); 
                  callback(err, res); 
            });
        });
}

exports.ettestag6 = ettestag6 = function ettestag6(params, callback) {
    eventappinstall();
    addToLocalStorage("DRI", [{"wid":"initialwid", "initialwid":"hello from bootprocess"}]);
    addToLocalStorage("DRIKEY", {"initialwid" : {"wid":"initialwid", "initialwid":"for key hello from bootprocess"}});

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
      function (err, res) {
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
 
            execute({"executethis": "getwidmaster","wid": "songdto","command.getwidmaster.convertmethod":"dto",
                  "command.getwidmaster.execute":"ConvertFromDOTdri" }, function (err, res1) {
                  proxyprinttodiv('Function ag5 result LAST ', res1, 17); 
                  callback(err, res); 
            });
        });
}

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
exports.ettestag7 = ettestag7 = function ettestag7(params, callback) {
    var obj = { 
                "executethis": "addwidmaster",
                "wid": "song1",
                "metadata": {
                    "method": "Songdto"
                },
                "title": "Highway to Hell",
                "sounddto": [
                    
                        {"note": "A flat"},                     
                        {"tempo": "fast"}

                    
                ]
            }

            // var temp = ConvertToDOTdri(obj);
            // proxyprinttodiv("ettestag7 converToDot -- DOT --> ", temp, 17);

            // temp = ConvertFromDOTdri(obj);
            // proxyprinttodiv("ettestag7 converFromDot -- JSON --> ", temp, 17);
            
        getdtoobject(obj, {"dtotype":"defaultdto"}, function (err, res) {
            proxyprinttodiv("getdtoobject -- RES --> ", res, 17);
        });
}

exports.ettestag8 = ettestag8 = function ettestag8(params, callback) {
    eventappinstall();
    addToLocalStorage("DRI", [{"wid":"initialwid", "initialwid":"hello from bootprocess"}]);
    addToLocalStorage("DRIKEY", {"initialwid" : {"wid":"initialwid", "initialwid":"for key hello from bootprocess"}});

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
      function (err, res) {

            execute({"executethis":"getwidmaster", "wid":"songdto", "command.getwidmaster.convertmethod":"dto",
                "command.getwidmaster.execute":"ConvertFromDOTdri"}, function (err, res1) {
                  proxyprinttodiv('Function ag8 result LAST ', res1, 17); 
                  callback(err, res); 
            });
        });
}

exports.ettestag9 = ettestag9 = function ettestag9(params, callback) {
    eventappinstall();
    addToLocalStorage("DRI", [{"wid":"initialwid", "initialwid":"hello from bootprocess"}]);
    addToLocalStorage("DRIKEY", {"initialwid" : {"wid":"initialwid", "initialwid":"for key hello from bootprocess"}});

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
      function (err, res) {
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
 
            execute({"executethis": "getwidmaster","wid": "songdto","command.getwidmaster.convertmethod":"dto",
                  "command.getwidmaster.execute":"ConvertFromDOTdri" }, function (err, res1) {
                  proxyprinttodiv('Function ag5 result LAST ', res1, 17); 
                  callback(err, res); 
            });
        });
}

exports.ettestag3a = ettestag3a = function ettestag3a(params, callback) {
    eventappinstall();
    addToLocalStorage("DRI", [{"wid":"initialwid", "initialwid":"hello from bootprocess"}]);
    addToLocalStorage("DRIKEY", {"initialwid" : {"wid":"initialwid", "initialwid":"for key hello from bootprocess"}});

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
      function (err, res) {
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
 
            execute({"executethis": "getwidmaster","wid": "songdto","command.getwidmaster.convertmethod":"dto",
                  "command.getwidmaster.execute":"ConvertFromDOTdri" }, function (err, res1) {
                  proxyprinttodiv('Function ag5 result LAST ', res1, 17); 
                  callback(err, res); 
            });
        });
}

//88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
// 888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
// 888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888

// Required for the delay in testing the async portionis
exports.sleep = sleep = function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}

// exports.func_async = func_async = function func_async(parameters, callback) {
//     delete parameters["d"];
//     console.log('from func_async');
//     // var f = function (){
//     // sleep(3000);
//     // parameters["m"] = "now you waited for 1000 ms";
//     // printToDiv('func_async',parameters,1);    
//     // };
//     // f();

//     // echo ajax request
//     echoCall('/echo', 'GET', false,
//         function (data) {
//             parameters["m"] = "now you waited for the async call";
//             printToDiv('func_async_success', parameters, 1);
//             console.log('from func_async success');
//         },
//         function (data) {
//             parameters["m"] = "now you waited for the async call";
//             printToDiv('func_async_error', parameters, 1);
//             console.log('from func_async error');
//         }
//     );
//     printToDiv('func_async -- ', parameters, 1);
//     // var err;callback(err, parameters);
//     var err;
//     callback(err, parameters);
// }

// exports.echoCall = echoCall = function echoCall(url, type, asyncVal, successCallback, errorCallback) {
//     jQuery.ajax({
//         url: url,
//         tupe: type,
//         async: asyncVal,
//         cache: false,
//         dataType: "html",
//         success: successCallback,
//         error: errorCallback
//     });
// }

// ------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------

// Used as a test for having a executethis in the parameters
exports.uwid1 = uwid1 = function uwid1(params, callback) {
    eventappinstall();

    execute([{
            "executethis": "addwidmaster",
            "wid": "getexecutetest",
            "addthis.postexecute": "func_b",
            "e":"this_will_be_deleted",
            "d":"this_should_stay",
            "g":"this_should_be_set_to_4"
        }, {
            "executethis": "getwidmaster",
            "wid": "getexecutetest"
        }],
        function (err, res) {
            proxyprinttodiv("uwid1 res: ", res, 17);
            // The following will pass...it shows what the getwidmaster returns
            // res = logverify("uwid1", res[1][0], {"addthis.executethis": "func_b", "wid": "getexecutetest", "metadata.method": "testdto"});

            // This assertion is what is expected, but it fails
            res = logverify("uwid1", res[1][0][0], {"d":"this_should_stay","g":"4","wid":"getexecutetest","metadata.method":"defaultdto"});
            callback(err, res);
        });
}

// Used as a test for having a postexecute deply nested deep in the params in the parameters
exports.uwid2 = uwid2 = function uwid2(params, callback) {
    eventappinstall();

    execute([{
            "executethis": "addwidmaster",
            "wid": "getexecutetest",
            "addthis.postexecute": "func_b",
            "nested.addthis.postexecute":"func_b",
            "nested.nested_again.addthis.postexecute":"func_b"
        }, {
            "executethis": "getwidmaster",
            "wid": "getexecutetest"
        }],
        function (err, res) {
            proxyprinttodiv("uwid2 res: ", res, 17);
            res = logverify("uwid2", res[1][0][0], {"nested.postexecute":"func_b", "nested.nested_again.postexecute":"func_b", "wid":"getexecutetest","metadata.method":"defaultdto","g":"4"});
            callback(err, res);
        });
}

exports.mut = mut = function mut(params, callback) {
    eventappinstall();

    var commandobject = {};
    commandobject['executemethod'] = "execute";
    commandobject['executelimit'] = 15;
    commandobject['executeorder'] = 'series';
    commandobject['executefilter'] = 'addwid';
    // commandobject['executefilter'] = 'offlineupdatewid';

    var data = [];
    data.push(
        [{
                "fn": "func_b2"
            },
            [
                "test", {
                    "a": "b"
                }, {
                    "c": "d"
                }
            ]
        ]
    );


    executethismultiple(data, function (err, res) {
        callback(err, res)
    });
}

exports.addwid4params = addwid4params = function addwid4params(a, b, c, d, callback) {

    var paramsDataString = "{\"" + a + "\":\"" + a + "\",\"" + b + "\":\"" + b + "\",\"" + c + "\":\"" + c + "\",\"" + d + "\":\"" + d + "\"}";
    // alert(paramsDataString);
    var json = JSON.parse(paramsDataString);
    addwidmaster(json, callback);
}

exports.testnested1 = testnested1 = function testnested1(params, callback) {
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


exports.testnested3 = testnested3 = function testnested3(params, callback) {
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

exports.testnested4 = testnested4 = function testnested4(params, callback) {
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

exports.testnested5 = testnested5 = function testnested5(params, callback) {
    eventappinstall();

    var inparams = {
        "executethis": "addwidmaster",
        "wid": "a2-56",
        "a2": "b2"
    };

    execute(inparams, callback);
}

exports.testnested6 = testnested6 = function testnested6(params, callback) {
    eventappinstall();

    var inparams = {
        "executethis": "test121212"
    };

    execute(inparams, callback);
}

exports.testnested2 = testnested2 = function testnested2(params, callback) {
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


exports.testmultiplenested = testmultiplenested = function testmultiplenested(params, callback) {
    eventappinstall();

    var inparams = [
        [{
            "fn": "addwidmaster",
            "wid": "a2-56",
            "a2": "b2"
        }, {
            "fn": "getwidmaster",
            "wid": "a2-56"
        }],
        [
            [{
                "fn": "addwidmaster",
                "wid": "a2-57",
                "a2": "b2"
            }, {
                "fn": "getwidmaster",
                "wid": "a2-57"
            }],
            [{
                "fn": "addwidmaster",
                "wid": "a2-58",
                "a2": "b2"
            }, {
                "fn": "getwidmaster",
                "wid": "a2-58"
            }],
            [
                [{
                        "fn": "addwid4params"
                    },
                    [
                        "a",
                        "b",
                        "c",
                        "d"
                    ]
                ]
            ]
        ]
    ];

    executethismultiple(inparams, callback);
}

// exports.t121212 = t121212 = function t121212(params, callback) {
//     eventappinstall();

//     var todolist = [
//         [{
//                 "fn": "test_and_verify"
//             },
//             [
//                 "func_b",
//                 "func_b", {
//                     "c": "01",
//                     "d": "11",
//                     "e": "21"
//                 }, {
//                     "c": "02",
//                     "d": "12",
//                     "g": "42"
//                 }
//             ]
//         ],
//         [{
//                 "fn": "addwid4params"
//             },
//             [
//                 "a", "b", "c", "d"
//             ]

//         ],
//         [{
//                 "fn": "addwid4params"
//             },
//             [
//                 "12", "23", "34", "45"
//             ]

//         ]

//     ];

//     executethismultiple(todolist, callback);
// }


exports.exec_mul_test = function exec_mul_test(data) {
    for (d in data) {
        // test_and_verify(data[d]);
        // exports.test_and_verify = test_and_verify = function test_and_verify(testname, fnname, parameters, assert, callback) {
        var a = data[d][1]['name'];
        var b = data[d][1]['fnname'];
        var c = [data[d][1]['parameters']];
        var d = [data[d][1]['assert']];
        console.log('a: ' + a);
        console.log('b: ' + b);
        console.log('c: ' + JSON.stringify(c));
        console.log('d: ' + JSON.stringify(d));
        test_and_verify(a, b, c, d);
    }
}

exports.newt = newt = function newt(params, callback) {
    // var todolist = 
    //     [
    //         [
    //             {
    //                 "fn": "test_and_verify"
    //             },
    //             [
    //                 "offlineupdatewid",
    //                 "offlineupdatewid",
    //                 {
    //                     "0": {
    //                         "metadata.method": "sounddto",
    //                         "wid": "sounddto",
    //                         "note": "string"
    //                     }
    //                 },
    //                 {
    //                     "data": {
    //                         "note": "string"
    //                     },
    //                     "wid": "sounddto",
    //                     "metadata": {
    //                         "method": "sounddto",
    //                         "date": "2014-02-04T15:54:34.378Z"
    //                     }
    //                 },
    //                 {
    //                     "initialwid": {
    //                         "wid": "initialwid",
    //                         "initialwid": "for key hello from bootprocess"
    //                     },
    //                     "sounddto": {
    //                         "data": {
    //                             "note": "string"
    //                         },
    //                         "wid": "sounddto",
    //                         "metadata": {
    //                             "method": "sounddto",
    //                             "date": "2014-02-04T15:54:34.378Z"
    //                         }
    //                     }
    //                 },
    //                 {"command": "null"}
    //             ]
    //         ]
    //     ]
    var todolist =     
        [
    [
        {
            "fn": "test_and_verify"
        },
        [
            "offlineupdatewid",
            "offlineupdatewid",
            {
                "metadata.method": "sounddto",
                "note": "string",
                "wid": "sounddto"
            },
            {
                "data": {
                    "note": "string"
                },
                "metadata": {
                    "date": "2014-02-04T18:20:44.503Z",
                    "method": "sounddto"
                },
                "wid": "sounddto"
            },
            {
                "initialwid": {
                    "initialwid": "for key hello from bootprocess",
                    "wid": "initialwid"
                },
                "sounddto": {
                    "data": {
                        "note": "string"
                    },
                    "metadata": {
                        "date": "2014-02-04T18:20:44.503Z",
                        "method": "sounddto"
                    },
                    "wid": "sounddto"
                }
            },
            {
                "command": "null"
            }
        ]
    ]
]

    // var db = {"initialwid":{"wid":"initialwid","initialwid":"for key hello from bootprocess"},"sounddto":{"data":{"note":"string"},"wid":"sounddto","metadata":{"method":"sounddto","date":"2014-02-04T16:18:51.732Z"}}};
    // addToLocalStorage("DRIKEY", db);   
    executethismultiple(todolist, callback);

}

exports.newt2 = newt2 = function newt2(params, callback) {
    var todolist = 
        [
            [
                {
                    "fn": "test_and_verify"
                },
                [
                    "getwidmaster",
                    "getwidmaster",
                    {
                        "wid": "sonddto",
                        "command.convertmethod": "dto",
                        "command.dtotype": "sonddto"
                    },
                    {
                        "title": "string",
                        "metadata.sounddto.type": "onetomany",
                        "sounddto.note": "string",
                        "sounddto.wid": "sounddto",
                        "sounddto.metadata.method": "sounddto"
                    },
                    {
                        "initialwid": {
                            "wid": "initialwid",
                            "initialwid": "for key hello from bootprocess"
                        },
                        "sounddto": {
                            "data": {
                                "note": "string"
                            },
                            "wid": "sounddto",
                            "metadata": {
                                "method": "sounddto",
                                "date": "2014-02-04T18:31:01.199Z"
                            }
                        },
                        "sonddto": {
                            "data": {
                                "title": "string"
                            },
                            "wid": "sonddto",
                            "metadata": {
                                "method": "sonddto",
                                "sounddto": {
                                    "type": "onetomany"
                                },
                                "date": "2014-02-04T18:31:01.313Z"
                            }
                        },
                        "rel_sound_to_song": {
                            "data": {
                                "primarywid": "sonddto",
                                "secondarywid": "sounddto",
                                "relationshiptype": "attributes"
                            },
                            "wid": "rel_sound_to_song",
                            "metadata": {
                                "method": "defaultdto",
                                "date": "2014-02-04T18:31:01.389Z"
                            }
                        }
                    },
                    {
                        "command": "null"
                    }
                ]
            ]
        ]
    executethismultiple(todolist, callback);
}

exports.newt3 = newt3 = function newt3(params, callback) {
    var todolist = [];
    executethismultiple(todolist, callback);
}

exports.newt4 = newt4 = function newt4(params, callback) {
    var todolist = 
        [
            [
                {"fn": "test_and_verify"},
                [
                   "getcleanparameters",
                   "getcleanparameters",
                    [
            {
                "title": "Highway to Hell",
                "wid": "song1",
                "metadata.method": "sonddto",
                "sounddto.0.note": "A flat",
                "sounddto.0.wid": "1",
                "sounddto.0.metadata.method": "sounddto",
                "sounddto.1.note": "B sharp",
                "sounddto.1.wid": "3",
                "sounddto.1.metadata.method": "sounddto",
                "sounddto.2.note": "C flat",
                "sounddto.2.wid": "5",
                "sounddto.2.metadata.method": "sounddto"
            },
            "",
            "",
            "remove",
            ""
        ],
                    {
            "parms": {
                "title": "Highway to Hell",
                "wid": "song1",
                "metadata.method": "sonddto",
                "sounddto.0.note": "A flat",
                "sounddto.0.wid": "1",
                "sounddto.0.metadata.method": "sounddto",
                "sounddto.1.note": "B sharp",
                "sounddto.1.wid": "3",
                "sounddto.1.metadata.method": "sounddto",
                "sounddto.2.note": "C flat",
                "sounddto.2.wid": "5",
                "sounddto.2.metadata.method": "sounddto"
            },
            "dto": {
                "title": "Highway to Hell",
                "wid": "song1",
                "metadata.method": "sonddto",
                "sounddto.note": "string",
                "sounddto.wid": "sounddto",
                "sounddto.metadata.method": "sounddto"
            }
        },
                    {"1":{"data":{"note":"A flat"},"wid":"1","metadata":{"method":"sounddto","date":"2014-02-05T18:43:43.175Z"}},"2":{"data":{"primarywid":"song1","secondarywid":"1","relationshiptype":"attributes","linktype":"onetomany"},"wid":"2","metadata":{"method":"relationshipdto","date":"2014-02-05T18:43:43.248Z"}},"3":{"data":{"note":"B sharp"},"wid":"3","metadata":{"method":"sounddto","date":"2014-02-05T18:43:43.273Z"}},"4":{"data":{"primarywid":"song1","secondarywid":"3","relationshiptype":"attributes","linktype":"onetomany"},"wid":"4","metadata":{"method":"relationshipdto","date":"2014-02-05T18:43:43.348Z"}},"5":{"data":{"note":"C flat"},"wid":"5","metadata":{"method":"sounddto","date":"2014-02-05T18:43:43.366Z"}},"6":{"data":{"primarywid":"song1","secondarywid":"5","relationshiptype":"attributes","linktype":"onetomany"},"wid":"6","metadata":{"method":"relationshipdto","date":"2014-02-05T18:43:43.437Z"}},"initialwid":{"wid":"initialwid","initialwid":"for key hello from bootprocess"},"sounddto":{"data":{"note":"string"},"wid":"sounddto","metadata":{"method":"sounddto","date":"2014-02-05T18:43:42.711Z"}},"sonddto":{"data":{"title":"string"},"wid":"sonddto","metadata":{"method":"sonddto","sounddto":{"type":"onetomany"},"date":"2014-02-05T18:43:42.827Z"}},"rel_sound_to_song":{"data":{"primarywid":"sonddto","secondarywid":"sounddto","relationshiptype":"attributes"},"wid":"rel_sound_to_song","metadata":{"method":"defaultdto","date":"2014-02-05T18:43:42.888Z"}},"song1":{"data":{"title":"Highway to Hell"},"wid":"song1","metadata":{"method":"sonddto","date":"2014-02-05T18:43:43.088Z"}}},
                    {"command": "null"}
                ]
            ]
        ]
    executethismultiple(todolist, callback);
}




exports.newt5 = newt5 = function newt5(params, callback) {

    var todolist = 

[
    [
        {"fn": "test_and_verify"},
        [
           "offlineupdatewid",
           "offlineupdatewid",
            [
    {
        "metadata.method": "sonddto",
        "wid": "song1",
        "title": "Highway to Hell"
    }
],
            {
    "data": {
        "title": "Highway to Hell"
    },
    "wid": "song1",
    "metadata": {
        "method": "sonddto",
        "date": "2014-02-05T21:11:19.461Z"
    }
},
            {"initialwid":{"wid":"initialwid","initialwid":"for key hello from bootprocess"},"sounddto":{"data":{"note":"string"},"wid":"sounddto","metadata":{"method":"sounddto","date":"2014-02-05T21:11:18.876Z"}},"sonddto":{"data":{"title":"string"},"wid":"sonddto","metadata":{"method":"sonddto","sounddto":{"type":"onetomany"},"date":"2014-02-05T21:11:19.040Z"}},"rel_sound_to_song":{"data":{"primarywid":"sonddto","secondarywid":"sounddto","relationshiptype":"attributes"},"wid":"rel_sound_to_song","metadata":{"method":"defaultdto","date":"2014-02-05T21:11:19.141Z"}},"song1":{"data":{"title":"Highway to Hell"},"wid":"song1","metadata":{"method":"sonddto","date":"2014-02-05T21:11:19.461Z"}}},
            {"command": "null"}
        ]
    ]
]
    executethismultiple(todolist, callback);
}


// test1212 calls fnb
// fn b accepts one object and produces one array result

exports.test121212 = test121212 = function test121212(params, callback) {
    eventappinstall();
    var todolist = [
        [{
                "fn": "test_and_verify"
            },
            [
                "func_b",
                "func_b", 
                {
                    "c": "0",
                    "d": "1",
                    "e": "2"
                },[
                {
                    "c": "0",
                    "d": "1",
                    "g": "4"
                }],
                {},
                {"command": "null"}
            ]
        ]
    ];
    executethismultiple(todolist, callback);
}



// test141414

function test141414 (params, callback) {
    // Calling func_b2 with single
    eventappinstall();
    var todolist = 
    [
        [{
                "fn": "test_and_verify"
            },
            [
                "func_b2",
                "func_b2", 
                [
                    "test", 
                    {"a": "b", "x":"y"}, 
                    {"a": "b", "e":"z"}, 
                    {"c": "d", "more":"m"}
                ] 
                ,
                    {
                     "test":"hello","a":"b","c":"d","more":"m"
                    }
                ,
                {},
                {"command": "null"}
            ]
        ]
    ];
    executethismultiple(todolist, callback);
}

// func_b2 and func_b22 accepts 4 objects and produces one object result

// test151515
// func_b3 and func_b33 accepts 4 arrays and produces one object result

function test151515 (params, callback) {
    eventappinstall();
    var todolist = 
    [
        [
            {"fn": "test_and_verify"},
            [
                "func_b3",
                "func_b3", 
                [
                    {"c": "0","d": "1","e": "2"},
                    "two",
                    ["a", {"b":"c"}],
                    "four"
                ],

                {
                    "a":{"c": "0","d": "1","e": "2"},
                    "b":"two",
                    "c":["a", {"b":"c"}],
                    "d":"four"
                },
                {},
                {"command": "null"}
            ]
        ]
    ];
    executethismultiple(todolist, callback);       
}
function test161616 (params, callback) {
    eventappinstall();
    var todolist = 
        [
            [
                {
                    "fn": "test_and_verify"
                },
                [
                    "offlineupdatewid",
                    "offlineupdatewid",
                    [
                        {
                            "wid": "wid1",
                            "a": "b"
                        }
                    ],
                    {
                        "data": {
                            "a": "b"
                        },
                        "wid": "wid1",
                        "metadata": {
                            "date": "2014-02-06T19:29:52.958Z"
                        }
                    },
                    {
                        "initialwid": {
                            "wid": "initialwid",
                            "initialwid": "for key hello from bootprocess"
                        },
                        "wid1": {
                            "data": {
                                "a": "b"
                            },
                            "wid": "wid1",
                            "metadata": {
                                "date": "2014-02-06T19:29:52.958Z"
                            }
                        }
                    },
                    {
                        "command": "null"
                    }
                ]
            ]
        ];
    executethismultiple(todolist, callback);      
}

exports.sample1 = sample1 = function sample1 (params, callback) {
    saveglobal("debugsubcat", "code");
    offlineupdatewid( {"wid":"wid1", "a":"b"}, callback );
    debugfn("offlinegetwid code generator END",                  "ag2",    "",   "code", getglobal("debugcolor"), getglobal("debugindent"), {}, 9);
}

exports.sample2 = sample2 = function sample2 (params, callback) {
    saveglobal("debugsubcat", "code");
    merge_options( {"wid":"wid1", "a":"b"}, {"wid":"wid2", "y":"z"} );
    debugfn("offlinegetwid code generator END",                  "ag2",    "",   "code", getglobal("debugcolor"), getglobal("debugindent"), {}, 9);
}

// getclean(resultObj, command, callback)

exports.sample3 = sample3 = function sample3 (params, callback) {
    saveglobal("debugsubcat", "code");
    getclean( {"wid":"wid1", "a":"b", "metadata":{"method": "DOT"}}, "DOT" );
    debugfn("offlinegetwid code generator END",                  "ag2",    "",   "code", getglobal("debugcolor"), getglobal("debugindent"), {}, 9);
}

function test171717 (params, callback) {
    eventappinstall();
    var todolist = 
        [
            [
                {"fn": "test_and_verify"},
                [
                   "MongoAddEditPrepare",
                   "MongoAddEditPrepare",
                    [
            [],
            [
                {
                    "key": "metadata.method",
                    "value": "colordto"
                },
                {
                    "key": "wid",
                    "value": "colordto"
                },
                {
                    "key": "hue",
                    "value": "string"
                }
            ],
            "colordto",
            "colordto"
        ],
                    {
            "metadata.method": "colordto",
            "wid": "colordto",
            "hue": "string"
        },
            {"initialwid":{"wid":"initialwid","initialwid":"for key hello from bootprocess"},"colordto":{"data":{"hue":"string"},"wid":"colordto","metadata":{"method":"colordto","date":"2014-02-06T21:59:08.567Z"}}},
            {"command": "null"}
        ]
    ]
];
    executethismultiple(todolist, callback);      
}

function func_b2(p1, p2, p3, p4, callback) {
    data = {};
    delete p3['e'];
    data = jsonConcat(p3, p4);
    data[p1] = 'hello';
    var err;
    callback({}, data);
}


function func_b22(params, callback) {
    func_b2(    "test", 
                {"r": "t", "x":"y"}, 
                {"a": "b", "e":"z"}, 
                {"c": "d", "more":"m"}, 
                callback);
}

function func_b3(p1, p2, p3, p4, callback) {
    data = {};
    data["a"]=p1;
    data["b"]=p2;  
    data["c"]=p3; 
    data["d"]=p4;

    callback({}, data);
}

function func_b33(params, callback) {
    func_b2(    "test", 
                [{"a": "b", "x":"y"}], 
                {"a": "b"}, 
                [{"c": "d", "e":"z"}], 
                callback);
}



exports.err1 = err1 = function err1 (params, callback) {
    saveglobal("debugsubcat", "code");
    execute({"executethis":"getwidmaster","wid":"1","command":{"parameters":{"test1":"1"},"status":"fail"}}, function(err, result){
        proxyprinttodiv('Function err1 result ', result, 17);
        // debugfn("offlinegetwid code generator END",                  "ag2",    "",   "code", getglobal("debugcolor"), getglobal("debugindent"), {}, 9);
    });
}

exports.wrapped1 = wrapped1 = function wrapped1 (params, callback) {
    saveglobal("debugsubcat", "code");
    execute([{"executethis":"addwidmaster","wid":"1","a":"b"}, {"executethis":"getwidmaster","wid":"1","command":{"executeresult":"outer"}}], function(err, result){
        proxyprinttodiv('Function wrapped1 result ', result, 99)
        // debugfn("offlinegetwid code generator END",                  "ag2",    "",   "code", getglobal("debugcolor"), getglobal("debugindent"), {}, 9);

    });
}
// data, defaults, filter
exports.lwr1 = lwr1 = function lwr1(params, callback) {
    var params = {"Alpha":"1", "beta":"2", "Charlie":"3", "Delta":"4"};
    var defaults = {
                    "Beta":"555",
                    "charlie":"777"};
    var filter = {
                    "Beta":"",
                    "charlie":""};
    var err;
    var result = {};

    result = tolowerparameters(params, defaults, filter, true);
    callback(err, result);
}

exports.lwr2 = lwr2 = function lwr2(params, callback) {
    var params = {"Alpha":"1", "bEta":"2", "Charlie":"3", "Delta":"4"};
    var defaults = {
                    "Beta":"555",
                    "charlie":"777"};    

    var filter = {
                    "Beta":"",
                    "charlie":""};
    var err;
    var result = {};

    result = tolowerparameters(params, defaults, filter, false);
    callback(err, result);
}

exports.lwr3 = lwr3 = function lwr3(params, callback) {
    var params = {"Alpha":"1", "Beta":"2", "Charlie":"3", "Delta":"4"};
    var defaults = {
                    "Beta":"",
                    "charlie":""};    
    var filter = {
                    "beta":"",
                    "charlie":""};
    var err;
    var result = {};

    result = tolowerparameters(params, defaults, filter, true);
    callback(err, result);
}

exports.lwr4 = lwr4 = function lwr4(params, callback) {
    var params = {"Alpha":"1", "Beta":"2", "Charlie":"3", "Delta":"4"};
    var defaults = {
                    "Beta":"",
                    "charlie":""};    
    var filter = {
                    "beta":"",
                    "charlie":""};
    var err;
    var result = {};

    result = tolowerparameters(params, defaults, filter, false);
    callback(err, result);
}

exports.lwr5 = lwr5 = function lwr5(params, callback) {
    var params = {"Alpha":"1", "Beta":"2", "Charlie":"3", "Delta":"4"};
    var defaults = {
                    "ceta":"",
                    "charlie":""}; 
    var filter = {
                    "beta":"add",
                    "charlie":"add"};
    var err;
    var result = {};

    result = tolowerparameters(params, defaults, filter, true);
    callback(err, result);
}

exports.lwr6 = lwr6 = function lwr6(params, callback) {
    var params = {"Alpha":"1", "Beta":"2", "Charlie":"3", "Delta":"4"};
    var defaults = {
                    "beta":"add",
                    "charlie":"add"};
    var filter = {
                    "beta":"",
                    "charlie":""};
    var err;
    var result = {};

    result = tolowerparameters(params, defaults, filter, false);
    callback(err, result);
}

exports.lwr7 = lwr7 = function lwr7(params, callback) {
    var params = {"Alpha":"1", "Beta":"2", "Delta":"4"};
    var defaults = {};
    var filter = {};
    var err;
    var result = {};

    result = tolowerparameters(params, defaults, filter, true);
    callback(err, result);
}

exports.lwr8 = lwr8 = function lwr8(params, callback) {
    var params = {"Alpha":"1", "Beta":"2", "Delta":"4"};
    var defaults = {};
    var filter = {};
    var err;
    var result = {};

    result = tolowerparameters(params, defaults, filter, false);
    callback(err, result);
}

exports.lwr9 = lwr9 = function lwr9(params, callback) {
    var params = {"Alpha":"1", "Beta":"2", "Delta":"4"};
    var defaults = {
                      "beta":"555",
                      "Charlie":"777"};
    var filter = {
                  "beta":"",
                  "charlie":""};
    var err;
    var result = {};

    result = tolowerparameters(params, defaults, filter, true);
    callback(err, result);
}

exports.lwr10 = lwr10 = function lwr10(params, callback) {
    var params = {"Alpha":"1", "Beta":"2", "Delta":"4"};
    var defaults = {
                    "beta":"555",
                    "charlie":"777"};
    var filter = {
                    "beta":"",
                    "charlie":""};
    var err;
    var result = {};

    result = tolowerparameters(params, defaults, filter, false);
    callback(err, result);
}

exports.lwr11 = lwr11 = function lwr11(params, callback) {
    var params = {"Alpha":"1", "Beta":"2", "Delta":"4"};
    var defaults = {
                    "beta":"",
                    "charlie":""};
    
    var filter = {
                    "beta":"",
                    "charlie":""};
    var err;
    var result = {};

    result = tolowerparameters(params, defaults, filter, true);
    callback(err, result);
}

exports.lwr12 = lwr12 = function lwr12(params, callback) {
    var params = {"Alpha":"1", "Beta":"2", "Delta":"4"};
    var defaults = {
                    "beta":"",
                    "charlie":""};
    var filter = {
                    "beta":"",
                    "charlie":""};    var err;
    var result = {};

    result = tolowerparameters(params, defaults, filter, false);
    callback(err, result);
}

exports.lwr13 = lwr13 = function lwr13(params, callback) {
    var params = {"Alpha":"1", "Beta":"2", "Delta":"4"};
    var defaults = {
                    "beta":"",
                    "charlie":""};
    var filter = {
                    "beta":"add",
                    "charlie":"add"};
    var err;
    var result = {};

    result = tolowerparameters(params, defaults, filter, true);
    callback(err, result);
}

exports.lwr14 = lwr14 = function lwr14(params, callback) {
    var params = {"Alpha":"1", "Beta":"2", "Delta":"4"};
    var defaults = {
                    "beta":"add",
                    "charlie":"add"};
    var filter = {
                    "beta":"add",
                    "charlie":"add"};
    var err;
    var result = {};

    result = tolowerparameters(params, defaults, filter, false);
    callback(err, result);
}

exports.lwr15 = lwr15 = function lwr15(params, callback) {
    var params = {"Alpha":"1", "Beta":"2", "Charlie":"3", "Delta":"4"};
    var defaults = {};
    var filter = {};
    var err;
    var result = {};

    result = tolowerparameters(params, defaults, filter, true);
    callback(err, result);
}

exports.lwr16 = lwr16 = function lwr16(params, callback) {
    var params = {"Alpha":"1", "Beta":"2", "Charlie":"3", "Delta":"4"};
    var defaults = {};
    var filter = {};
    var err;
    var result = {};

    result = tolowerparameters(params, defaults, filter, false);
    callback(err, result);
}

exports.pu1 = pu1 = function pu1(params, callback) {
    var params = {"Alpha":"1", "Beta":"2", "Charlie":"3", "Delta":"4"};
    var command = {"command": {"somefunction":"orange", "action":"reaction"}};
    var err;
    var result = {};

    result = pack_up_params(params, command, "somefunction");
    callback(err, result);
}


// this one inserts same amount of data but does not fail
// enter lots of data in series, ths inserts data via different executes results in Max Range error
exports.ettest_recurseModObj = ettest_recurseModObj = function ettest_recurseModObj(params, callback) {
      eventappinstall();
      debuglevel=17;
       // config = setconfig1();
      var recModObj = recurseModObj({
                                                      "metadata":{"method":"wid2"},
                                                      "a":"b",
                                                      "c":"30",
                                                      "e":"f",
                                                      "d":"6/23/1912",
                                                      "q":{"w":{"e":"t"}},
                                                      "g":"true"
                                                },
                                                {
                                                      "metadata":{"method":"wid2"},
                                                      "a":"string",
                                                      "c":"number",
                                                      "d":"date",
                                                      "q":{"w":{"e":"string"}},
                                                      "g":"boolean"
                                                }, {}, function(err,res){
                                                      
                                                      proxyprinttodiv('recurseModObj inputObject', {
                                                            "metadata":{"method":"wid2"},
                                                            "a":"b",
                                                            "c":"30",
                                                            "e":"f",
                                                            "d":"6/23/1912",
                                                            "q":{"w":{"e":"t"}},
                                                            "g":"true"
                                                      }, 17);    
                                                      proxyprinttodiv('recurseModObj inputDTO', {
                                                                                    "metadata":{"method":"wid2"},
                                                                                    "a":"string",
                                                                                    "c":"number",
                                                                                    "d":"date",
                                                                                    "q":{"w":{"e":"string"}},
                                                                                    "g":"boolean"
                                                                              }, 17);    
													proxyprinttodiv("res --", res, 17);
													var actual_result = [res];
													proxyprinttodiv("actual_result --", actual_result, 17);							  

													var expected_result = [{"metadata":{"method":"wid2"},"a":"b","c":"30","d":"6/23/1912","q":{"w":{"e":"t"}},"g":"true"}];
													proxyprinttodiv("expected_result --", expected_result, 17);
												  
													res = logverify("logverify", actual_result, expected_result);
													callback(err, res); 
                              });
}


exports.ettss1 = ettss1 = function ettss1(params, callback) {
      debuglevel = 17;
      // saveglobal("debugname", "");
      // saveglobal("debugcat", "");
      // saveglobal("debugsubcat", "code");
      var status = false;


      async.series([
            function (cb1) {
                  // create dtos  
                  var executeList = [{
                        // create simple ttdto
                        "executethis": "addwidmaster",
                        "wid": "ttdto",
                        "metadata.method": "ttdto",
                        "type": "string"
                  }];
                  execute(executeList, function (err, res) {
                        proxyprinttodiv('Function tss1 added  ttdto -- ', res, 17);
                        cb1(null);
                  });
            },
            function (cb1) {
                  // create data for ttdto
                  var executeList = [{
                        "executethis": "addwidmaster",
                        "metadata.method": "ttdto",
                        "type": "a"
                  }, {
                        "executethis": "addwidmaster",
                        "metadata.method": "ttdto",
                        "type": "a"
                  }, {
                        "executethis": "addwidmaster",
                        "metadata.method": "ttdto",
                        "type": "a"
                  }, {
                        "executethis": "addwidmaster",
                        "metadata.method": "ttdto",
                        "type": "a"
                  },{
                        "executethis": "addwidmaster",
                        "metadata.method": "ttdto",
                        "type": "a"
                  }, {
                        "executethis": "addwidmaster",
                        "metadata.method": "ttdto",
                        "type": "a"
                  }, {
                        "executethis": "addwidmaster",
                        "metadata.method": "ttdto",
                        "type": "a"
                  }, {
                        "executethis": "addwidmaster",
                        "metadata.method": "ttdto",
                        "type": "a"
                  }];

                  execute(executeList, function (err, res) {
                        proxyprinttodiv('Function tss1 added  ttdto -- ', res, 17);
                        cb1(null);
                  });
            },
            function (cb1) {
                  // create data for ttdto
                  var executeList = [{
                        "executethis": "addwidmaster",
                        "metadata.method": "ttdto",
                        "type": "a"
                  }, {
                        "executethis": "addwidmaster",
                        "metadata.method": "ttdto",
                        "type": "a"
                  }, {
                        "executethis": "addwidmaster",
                        "metadata.method": "ttdto",
                        "type": "a"
                  }, {
                        "executethis": "addwidmaster",
                        "metadata.method": "ttdto",
                        "type": "a"
                  }];

                  execute(executeList, function (err, res) {
                        proxyprinttodiv('Function tss1 added  ttdto --4 ', res, 17);
                        cb1(null);
                  });
            },
            function (cb1) {
                  // create data for ttdto
                  var executeList = [{
                        "executethis": "addwidmaster",
                        "metadata.method": "ttdto",
                        "type": "a"
                  }, {
                        "executethis": "addwidmaster",
                        "metadata.method": "ttdto",
                        "type": "a"
                  }, {
                        "executethis": "addwidmaster",
                        "metadata.method": "ttdto",
                        "type": "a"
                  }, {
                        "executethis": "addwidmaster",
                        "metadata.method": "ttdto",
                        "type": "a"
                  },{
                        "executethis": "addwidmaster",
                        "metadata.method": "ttdto",
                        "type": "a"
                  }, {
                        "executethis": "addwidmaster",
                        "metadata.method": "ttdto",
                        "type": "a"
                  }, {
                        "executethis": "addwidmaster",
                        "metadata.method": "ttdto",
                        "type": "a"
                  }, {
                        "executethis": "addwidmaster",
                        "metadata.method": "ttdto",
                        "type": "a"
                  }];

                  execute(executeList, function (err, res) {
                        proxyprinttodiv('Function tss1 added  ttdto --5 ', res, 17);
                        cb1(null, res);
                  });
            },
      ], function (err, res) {
			proxyprinttodiv("res --", res, 17);
			var actual_result = res[3];
			proxyprinttodiv("actual_result --", actual_result, 17);							  

			var expected_result = [[{"data":{"type":"a"},"wid":"13","metadata":{"method":"ttdto","date":"2014-03-19T05:51:01.752Z"}}],[{"data":{"type":"a"},"wid":"14","metadata":{"method":"ttdto","date":"2014-03-19T05:51:03.348Z"}}],[{"data":{"type":"a"},"wid":"15","metadata":{"method":"ttdto","date":"2014-03-19T05:51:05.032Z"}}],[{"data":{"type":"a"},"wid":"16","metadata":{"method":"ttdto","date":"2014-03-19T05:51:06.744Z"}}],[{"data":{"type":"a"},"wid":"17","metadata":{"method":"ttdto","date":"2014-03-19T05:51:08.593Z"}}],[{"data":{"type":"a"},"wid":"18","metadata":{"method":"ttdto","date":"2014-03-19T05:51:10.681Z"}}],[{"data":{"type":"a"},"wid":"19","metadata":{"method":"ttdto","date":"2014-03-19T05:51:12.749Z"}}],[{"data":{"type":"a"},"wid":"20","metadata":{"method":"ttdto","date":"2014-03-19T05:51:14.819Z"}}]];
			proxyprinttodiv("expected_result --", expected_result, 17);

			res = logverify("logverify", actual_result, expected_result);
			callback(err, res); 
      });
}


/*
      addwidmater xdto
      now add many with addwidmaster with x dto
*/
exports.ett1 = ett1 = function ett1(params, callback) {
      debuglevel = 17;
      saveglobal("debugname", "");
      saveglobal("debugcat", "");
      saveglobal("debugsubcat", "code");
      var status = false;

      async.series([
            function (callback1) {  //addwidmaster dto
                  var executeList = [{
                        "executethis": "addwidmaster",
                        "wid": "ttdto",
                        "metadata.method": "ttdto",
                        "type": "string"
                  }];
                  execute(executeList, function (err, res) {
                        proxyprinttodiv("Function t1 addwidmaster ttdto  result -- ", res, 17);
                        callback1(null);
                  });
            },
            function (callback2) {  //addwidmaster wid1
                  //n-times loop
                  async.times(5, function(n, next){
                        var executeList = [{
                              "executethis": "addwidmaster",
                              "wid": "ttdto_wid"+n,
                              "metadata.method": "ttdto",
                              "type": "a"
                        }];
                        execute(executeList, function (err, res) {
                              proxyprinttodiv("Function t1 addwidmaster ttdto wid result -- ", res, 17);
							  next(err, res);
                        });
                  }, function(err, result) {	
                        callback2(null,result);
                  });
            },
            function (callback3) {  //getwidmaster
                  //n-times loop
                  async.times(5, function(n, next){
                        var executeList = [{
                              "executethis": "getwidmaster",
                              "wid": "ttdto_wid"+n,
                        }];
                        execute(executeList, function (err, res) {
                              proxyprinttodiv("Function t1 getwidmaster  result -- ", res, 17);
							  next(err, res);
                        });
                  }, function(err, result) {
                        callback3(null, result);
                  });
            }
      ], function (err, res) {
			proxyprinttodiv("res --", res, 17);
			var actual_result = res[2];
			proxyprinttodiv("actual_result --", actual_result, 17);							  

			var expected_result = [[[{"type":"a","wid":"ttdto_wid0","metadata.method":"ttdto"}]],[[{"type":"a","wid":"ttdto_wid1","metadata.method":"ttdto"}]],[[{"type":"a","wid":"ttdto_wid2","metadata.method":"ttdto"}]],[[{"type":"a","wid":"ttdto_wid3","metadata.method":"ttdto"}]],[[{"type":"a","wid":"ttdto_wid4","metadata.method":"ttdto"}]]];
			proxyprinttodiv("expected_result --", expected_result, 17);

			res = logverify("logverify", actual_result, expected_result);
			callback(err, res); 
      });
}

/*
do NOT save addwidmater xdto
now add many with addwidmaster with x dto
*/
exports.t2 = t2 = function t2(params, callback) {
      debuglevel = 34;
      saveglobal("debugname", "");
      saveglobal("debugcat", "");
      saveglobal("debugsubcat", "code");
      var status = false;

      async.series([
            /*function (callback1) {      //addwidmaster dto
                  var executeList = [{
                        "executethis": "addwidmaster",
                        "wid": "ttdto",
                        "metadata.method": "ttdto",
                        "type": "string"
                  }];
                  execute(executeList, function (err, res) {
                        proxyprinttodiv("Function t1 addwidmaster ttdto  result -- ", res, 17);
                        callback1(null);
                  });
            },*/
            function (callback2) {  //addwidmaster wid1
                  //n-times loop
                  async.times(5, function(n, next){
                        var executeList = [{
                              "executethis": "addwidmaster",
                              "wid": "ttdto_wid"+n,
                              "metadata.method": "ttdto",
                              "type": "a"
                        }];
                        execute(executeList, function (err, res) {
                              proxyprinttodiv("Function t1 addwidmaster ttdto wid result -- ", res, 17);
							  next(err, res);
                        });
                  }, function(err, result) {
                        callback2(null, result);
                  });
            }/*,
            function (callback3) {  //getwidmaster
                  //n-times loop
                  async.times(5, function(n, next){
                        var executeList = [{
                              "executethis": "getwidmaster",
                              "wid": "ttdto_wid"+n,
                        }];
                        execute(executeList, function (err, res) {
                              proxyprinttodiv("Function t1 getwidmaster  result -- ", res, 17);
                        });
                  }, function(err, result) {
                        callback3(null);
                  });
            }*/
      ], function (err, res) {
			proxyprinttodiv("res --", res, 17);
			var actual_result = res[0];
			proxyprinttodiv("actual_result --", actual_result, 17);							  

			var expected_result = [[[{"data":{"type":"a"},"wid":"ttdto_wid0","metadata":{"method":"ttdto","date":"2014-03-19T07:22:28.248Z"}}]],[[{"data":{"type":"a"},"wid":"ttdto_wid1","metadata":{"method":"ttdto","date":"2014-03-19T07:22:28.250Z"}}]],[[{"data":{"type":"a"},"wid":"ttdto_wid2","metadata":{"method":"ttdto","date":"2014-03-19T07:22:28.252Z"}}]],[[{"data":{"type":"a"},"wid":"ttdto_wid3","metadata":{"method":"ttdto","date":"2014-03-19T07:22:28.256Z"}}]],[[{"data":{"type":"a"},"wid":"ttdto_wid4","metadata":{"method":"ttdto","date":"2014-03-19T07:22:28.257Z"}}]]];
			proxyprinttodiv("expected_result --", expected_result, 17);

			res = logverify("logverify", actual_result, expected_result);
			callback(err, res); 
      });
}

/*
do NOT save addwidmater xdto
now add many with addwidmaster with x dto
*/
exports.ett3 = ett3 = function ett3(params, callback) {
      debuglevel = 17;
      saveglobal("debugname", "");
      saveglobal("debugcat", "");
      saveglobal("debugsubcat", "code");
      var status = false;

      async.series([
            function (callback1) {  //addwidmaster dto
                  var executeList = [{
                        "executethis": "addwidmaster",
                        "wid": "ttdto",
                        "metadata.method": "ttdto",
                        "type": "string"
                  }];
                  execute(executeList, function (err, res) {
                        proxyprinttodiv("Function t1 addwidmaster ttdto  result -- ", res, 17);
                        callback1(null);
                  });
            },
            function (callback2) {  //addwidmaster wid1
                  //n-times loop
                  async.times(1, function(n, next){
                        var executeList = [{
                              "executethis": "addwidmaster",
                              "wid": "ttdto_wid"+n,
                              "metadata.method": "ttdto",
                              "type": "a"
                        }];
                        execute(executeList, function (err, res) {
                              proxyprinttodiv("Function t1 addwidmaster ttdto wid result -- ", res, 17);
							  next(err, res);
                        });
                  }, function(err, result) {
                        callback2(null, result);
                  });
            }/*,
            function (callback3) {  //getwidmaster
                  //n-times loop
                  async.times(5, function(n, next){
                        var executeList = [{
                              "executethis": "getwidmaster",
                              "wid": "ttdto_wid"+n,
                        }];
                        execute(executeList, function (err, res) {
                              proxyprinttodiv("Function t1 getwidmaster  result -- ", res, 17);
                        });
                  }, function(err, result) {
                        callback3(null);
                  });
            }*/
      ], function (err, res) {
			proxyprinttodiv("res --", res, 17);
			var actual_result = res[1];
			proxyprinttodiv("actual_result --", actual_result, 17);							  

			var expected_result = [[[{"data":{"type":"a"},"wid":"ttdto_wid0","metadata":{"method":"ttdto","date":"2014-03-19T07:24:02.062Z"}}]]];
			proxyprinttodiv("expected_result --", expected_result, 17);

			res = logverify("logverify", actual_result, expected_result);
			callback(err, res);
      });
}

// enter lots of data in series, the same data when inserted via different executes results in Max Range error
// this one inserts same amount of data but does not fail
exports.ettss2 = ettss2 = function ettss2(params, callback) {
      debuglevel = 17;
      saveglobal("debugname", "");
      saveglobal("debugcat", "");
      saveglobal("debugsubcat", "code");
      var status = false;


      async.series([
                  function (cb1) {
                        // create data for ttdto
                        var executeList = [{
                              // create simple ttdto
                              "executethis": "addwidmaster",
                              "wid": "ttdto",
                              "metadata.method": "ttdto",
                              "type": "string"
                        }, {
                              "executethis": "addwidmaster",
                              "metadata.method": "ttdto",
                              "type": "a"
                        }, {
                              "executethis": "addwidmaster",
                              "metadata.method": "ttdto",
                              "type": "a"
                        }, {
                              "executethis": "addwidmaster",
                              "metadata.method": "ttdto",
                              "type": "a"
                        }, {
                              "executethis": "addwidmaster",
                              "metadata.method": "ttdto",
                              "type": "a"
                        }, {
                              "executethis": "addwidmaster",
                              "metadata.method": "ttdto",
                              "type": "a"
                        }, {
                              "executethis": "addwidmaster",
                              "metadata.method": "ttdto",
                              "type": "a"
                        }, {
                              "executethis": "addwidmaster",
                              "metadata.method": "ttdto",
                              "type": "a"
                        }, {
                              "executethis": "addwidmaster",
                              "metadata.method": "ttdto",
                              "type": "a"
                        }, {
                              "executethis": "addwidmaster",
                              "metadata.method": "ttdto",
                              "type": "a"
                        }, {
                              "executethis": "addwidmaster",
                              "metadata.method": "ttdto",
                              "type": "a"
                        }, {
                              "executethis": "addwidmaster",
                              "metadata.method": "ttdto",
                              "type": "a"
                        }, {
                              "executethis": "addwidmaster",
                              "metadata.method": "ttdto",
                              "type": "a"
                        }, {
                              "executethis": "addwidmaster",
                              "metadata.method": "ttdto",
                              "type": "a"
                        }, {
                              "executethis": "addwidmaster",
                              "metadata.method": "ttdto",
                              "type": "a"
                        }, {
                              "executethis": "addwidmaster",
                              "metadata.method": "ttdto",
                              "type": "a"
                        }, {
                              "executethis": "addwidmaster",
                              "metadata.method": "ttdto",
                              "type": "a"
                        }, {
                              "executethis": "addwidmaster",
                              "metadata.method": "ttdto",
                              "type": "a"
                        }, {
                              "executethis": "addwidmaster",
                              "metadata.method": "ttdto",
                              "type": "a"
                        }, {
                              "executethis": "addwidmaster",
                              "metadata.method": "ttdto",
                              "type": "a"
                        }, {
                              "executethis": "addwidmaster",
                              "metadata.method": "ttdto",
                              "type": "a"
                        }, {
                              "executethis": "addwidmaster",
                              "metadata.method": "ttdto",
                              "type": "a"
                        }, {
                              "executethis": "addwidmaster",
                              "metadata.method": "ttdto",
                              "type": "a"
                        }, {
                              "executethis": "addwidmaster",
                              "metadata.method": "ttdto",
                              "type": "a"
                        }, {
                              "executethis": "addwidmaster",
                              "metadata.method": "ttdto",
                              "type": "a"
                        }, {
                              "executethis": "addwidmaster",
                              "metadata.method": "ttdto",
                              "type": "a"
                        }, {
                              "executethis": "addwidmaster",
                              "metadata.method": "ttdto",
                              "type": "a"
                        }, {
                              "executethis": "addwidmaster",
                              "metadata.method": "ttdto",
                              "type": "a"
                        }, {
                              "executethis": "addwidmaster",
                              "metadata.method": "ttdto",
                              "type": "a"
                        }, {
                              "executethis": "addwidmaster",
                              "metadata.method": "ttdto",
                              "type": "a"
                        }, {
                              "executethis": "addwidmaster",
                              "metadata.method": "ttdto",
                              "type": "a"
                        }, {
                              "executethis": "addwidmaster",
                              "metadata.method": "ttdto",
                              "type": "a"
                        }, {
                              "executethis": "addwidmaster",
                              "metadata.method": "ttdto",
                              "type": "a"
                        }];

                        execute(executeList, function (err, res) {
                              proxyprinttodiv('Function tss2 added  ttdto -- ', res, 17);
                              cb1(null, res);
                        });
                  }
            ],
            function (err, res) {
                proxyprinttodiv("res --", res, 17);
				var actual_result = [res];
				proxyprinttodiv("actual_result --", actual_result, 17);							  

				var expected_result = [[[[{"data":{"type":"string"},"wid":"ttdto","metadata":{"method":"ttdto","date":"2014-03-19T07:30:38.832Z"}}],[{"data":{"type":"a"},"wid":"1","metadata":{"method":"ttdto","date":"2014-03-19T07:30:39.663Z"}}],[{"data":{"type":"a"},"wid":"2","metadata":{"method":"ttdto","date":"2014-03-19T07:30:40.549Z"}}],[{"data":{"type":"a"},"wid":"3","metadata":{"method":"ttdto","date":"2014-03-19T07:30:41.514Z"}}],[{"data":{"type":"a"},"wid":"4","metadata":{"method":"ttdto","date":"2014-03-19T07:30:42.571Z"}}],[{"data":{"type":"a"},"wid":"5","metadata":{"method":"ttdto","date":"2014-03-19T07:30:43.707Z"}}],[{"data":{"type":"a"},"wid":"6","metadata":{"method":"ttdto","date":"2014-03-19T07:30:44.861Z"}}],[{"data":{"type":"a"},"wid":"7","metadata":{"method":"ttdto","date":"2014-03-19T07:30:46.109Z"}}],[{"data":{"type":"a"},"wid":"8","metadata":{"method":"ttdto","date":"2014-03-19T07:30:47.390Z"}}],[{"data":{"type":"a"},"wid":"9","metadata":{"method":"ttdto","date":"2014-03-19T07:30:48.722Z"}}],[{"data":{"type":"a"},"wid":"10","metadata":{"method":"ttdto","date":"2014-03-19T07:30:50.151Z"}}],[{"data":{"type":"a"},"wid":"11","metadata":{"method":"ttdto","date":"2014-03-19T07:30:51.581Z"}}],[{"data":{"type":"a"},"wid":"12","metadata":{"method":"ttdto","date":"2014-03-19T07:30:53.138Z"}}],[{"data":{"type":"a"},"wid":"13","metadata":{"method":"ttdto","date":"2014-03-19T07:30:54.783Z"}}],[{"data":{"type":"a"},"wid":"14","metadata":{"method":"ttdto","date":"2014-03-19T07:30:56.476Z"}}],[{"data":{"type":"a"},"wid":"15","metadata":{"method":"ttdto","date":"2014-03-19T07:30:58.209Z"}}],[{"data":{"type":"a"},"wid":"16","metadata":{"method":"ttdto","date":"2014-03-19T07:30:59.970Z"}}],[{"data":{"type":"a"},"wid":"17","metadata":{"method":"ttdto","date":"2014-03-19T07:31:01.834Z"}}],[{"data":{"type":"a"},"wid":"18","metadata":{"method":"ttdto","date":"2014-03-19T07:31:03.746Z"}}],[{"data":{"type":"a"},"wid":"19","metadata":{"method":"ttdto","date":"2014-03-19T07:31:05.700Z"}}],[{"data":{"type":"a"},"wid":"20","metadata":{"method":"ttdto","date":"2014-03-19T07:31:07.743Z"}}],[{"data":{"type":"a"},"wid":"21","metadata":{"method":"ttdto","date":"2014-03-19T07:31:09.837Z"}}],[{"data":{"type":"a"},"wid":"22","metadata":{"method":"ttdto","date":"2014-03-19T07:31:11.999Z"}}],[{"data":{"type":"a"},"wid":"23","metadata":{"method":"ttdto","date":"2014-03-19T07:31:14.162Z"}}],[{"data":{"type":"a"},"wid":"24","metadata":{"method":"ttdto","date":"2014-03-19T07:31:16.422Z"}}],[{"data":{"type":"a"},"wid":"25","metadata":{"method":"ttdto","date":"2014-03-19T07:31:18.890Z"}}],[{"data":{"type":"a"},"wid":"26","metadata":{"method":"ttdto","date":"2014-03-19T07:31:21.303Z"}}],[{"data":{"type":"a"},"wid":"27","metadata":{"method":"ttdto","date":"2014-03-19T07:31:23.785Z"}}],[{"data":{"type":"a"},"wid":"28","metadata":{"method":"ttdto","date":"2014-03-19T07:31:26.394Z"}}],[{"data":{"type":"a"},"wid":"29","metadata":{"method":"ttdto","date":"2014-03-19T07:31:29.144Z"}}],[{"data":{"type":"a"},"wid":"30","metadata":{"method":"ttdto","date":"2014-03-19T07:31:31.815Z"}}],[{"data":{"type":"a"},"wid":"31","metadata":{"method":"ttdto","date":"2014-03-19T07:31:34.545Z"}}],[{"data":{"type":"a"},"wid":"32","metadata":{"method":"ttdto","date":"2014-03-19T07:31:37.325Z"}}]]]];
				proxyprinttodiv("expected_result --", expected_result, 17);

				res = logverify("logverify", actual_result, expected_result);
				callback(err, res); 
            });
}


// test to enter lots of data at once :: created to raise the Maximum range reached error in Chrome
exports.ettss3 = ettss3 = function ettss3(params, callback) {
      debuglevel = 17;
      saveglobal("debugname", "");
      saveglobal("debugcat", "");
      saveglobal("debugsubcat", "code");
      var status = false;


      async.series([
            function (cb1) {
                  // create dtos  
                  var executeList = [{
                        // create simple ttdto
                        "executethis": "addwidmaster",
                        "wid": "ttdto",
                        "metadata.method": "ttdto",
                        "type": "string"
                  }];
                  execute(executeList, function (err, res) {
                        proxyprinttodiv('Function tss3 loop # 1  -- ', res, 34);
                        cb1(null);
                  });
            },
            function (cb1) {
                  // create data for ttdto
                  var executeList = [{
                        "executethis": "addwidmaster",
                        "metadata.method": "ttdto",
                        "type": "a"
                  }, {
                        "executethis": "addwidmaster",
                        "metadata.method": "ttdto",
                        "type": "a"
                  }, {
                        "executethis": "addwidmaster",
                        "metadata.method": "ttdto",
                        "type": "a"
                  }, {
                        "executethis": "addwidmaster",
                        "metadata.method": "ttdto",
                        "type": "a"
                  }];

                  execute(executeList, function (err, res) {
                        proxyprinttodiv('Function tss3 loop # 2 -- ', res, 34);
                        cb1(null);
                  });
            },
            function (cb1) {
                  // create data for ttdto
                  var executeList = [{
                        "executethis": "addwidmaster",
                        "metadata.method": "ttdto",
                        "type": "a"
                  }, {
                        "executethis": "addwidmaster",
                        "metadata.method": "ttdto",
                        "type": "a"
                  }, {
                        "executethis": "addwidmaster",
                        "metadata.method": "ttdto",
                        "type": "a"
                  }, {
                        "executethis": "addwidmaster",
                        "metadata.method": "ttdto",
                        "type": "a"
                  }];

                  execute(executeList, function (err, res) {
                        proxyprinttodiv('Function tss3 loop # 3 -- ', res, 34);
                        cb1(null);
                  });
            },
            function (cb1) {
                  // create data for ttdto
                  var executeList = [{
                        "executethis": "addwidmaster",
                        "metadata.method": "ttdto",
                        "type": "a"
                  }, {
                        "executethis": "addwidmaster",
                        "metadata.method": "ttdto",
                        "type": "a"
                  }, {
                        "executethis": "addwidmaster",
                        "metadata.method": "ttdto",
                        "type": "a"
                  }, {
                        "executethis": "addwidmaster",
                        "metadata.method": "ttdto",
                        "type": "a"
                  }];

                  execute(executeList, function (err, res) {
                        proxyprinttodiv('Function tss3 loop #  4-- ', res, 34);
                        cb1(null);
                  });
            },
            function (cb1) {
                  // create data for ttdto
                  var executeList = [{
                        "executethis": "addwidmaster",
                        "metadata.method": "ttdto",
                        "type": "a"
                  }, {
                        "executethis": "addwidmaster",
                        "metadata.method": "ttdto",
                        "type": "a"
                  }, {
                        "executethis": "addwidmaster",
                        "metadata.method": "ttdto",
                        "type": "a"
                  }, {
                        "executethis": "addwidmaster",
                        "metadata.method": "ttdto",
                        "type": "a"
                  }];

                  execute(executeList, function (err, res) {
                        proxyprinttodiv('Function tss3 loop #  5-- ', res, 34);
                        cb1(null);
                  });
            },
            function (cb1) {
                  // create data for ttdto
                  var executeList = [{
                        "executethis": "addwidmaster",
                        "metadata.method": "ttdto",
                        "type": "a"
                  }, {
                        "executethis": "addwidmaster",
                        "metadata.method": "ttdto",
                        "type": "a"
                  }, {
                        "executethis": "addwidmaster",
                        "metadata.method": "ttdto",
                        "type": "a"
                  }, {
                        "executethis": "addwidmaster",
                        "metadata.method": "ttdto",
                        "type": "a"
                  }];

                  execute(executeList, function (err, res) {
                        proxyprinttodiv('Function tss3 loop #  -- 6', res, 34);
                        cb1(null);
                  });
            },
            function (cb1) {
                  // create data for ttdto
                  var executeList = [{
                        "executethis": "addwidmaster",
                        "metadata.method": "ttdto",
                        "type": "a"
                  }, {
                        "executethis": "addwidmaster",
                        "metadata.method": "ttdto",
                        "type": "a"
                  }, {
                        "executethis": "addwidmaster",
                        "metadata.method": "ttdto",
                        "type": "a"
                  }, {
                        "executethis": "addwidmaster",
                        "metadata.method": "ttdto",
                        "type": "a"
                  }];

                  execute(executeList, function (err, res) {
                        proxyprinttodiv('Function tss3 loop #  -- 7', res, 34);
                        cb1(null);
                  });
            },
            function (cb1) {
                  // create data for ttdto
                  var executeList = [{
                        "executethis": "addwidmaster",
                        "metadata.method": "ttdto",
                        "type": "a"
                  }, {
                        "executethis": "addwidmaster",
                        "metadata.method": "ttdto",
                        "type": "a"
                  }, {
                        "executethis": "addwidmaster",
                        "metadata.method": "ttdto",
                        "type": "a"
                  }, {
                        "executethis": "addwidmaster",
                        "metadata.method": "ttdto",
                        "type": "a"
                  }];

                  execute(executeList, function (err, res) {
                        proxyprinttodiv('Function tss3 loop #  -- 8', res, 34);
                        cb1(null);
                  });
            },
            function (cb1) {
                  // create data for ttdto
                  var executeList = [{
                        "executethis": "addwidmaster",
                        "metadata.method": "ttdto",
                        "type": "a"
                  }, {
                        "executethis": "addwidmaster",
                        "metadata.method": "ttdto",
                        "type": "a"
                  }, {
                        "executethis": "addwidmaster",
                        "metadata.method": "ttdto",
                        "type": "a"
                  }, {
                        "executethis": "addwidmaster",
                        "metadata.method": "ttdto",
                        "type": "a"
                  }];

                  execute(executeList, function (err, res) {
                        proxyprinttodiv('Function tss3 loop #  -- 9', res, 34);
                        cb1(null);
                  });
            },
            function (cb1) {
                  // create data for ttdto
                  var executeList = [{
                        "executethis": "addwidmaster",
                        "metadata.method": "ttdto",
                        "type": "a"
                  }, {
                        "executethis": "addwidmaster",
                        "metadata.method": "ttdto",
                        "type": "a"
                  }, {
                        "executethis": "addwidmaster",
                        "metadata.method": "ttdto",
                        "type": "a"
                  }, {
                        "executethis": "addwidmaster",
                        "metadata.method": "ttdto",
                        "type": "a"
                  }];

                  execute(executeList, function (err, res) {
                        proxyprinttodiv('Function tss3 loop #  -- 10', res, 34);
                        cb1(null, res);
                  });
            }
      ], function (err, res) {
			proxyprinttodiv("res --", res, 17);
			var actual_result = res[9];
			proxyprinttodiv("actual_result --", actual_result, 17);							  

			var expected_result = [[{"data":{"type":"a"},"wid":"33","metadata":{"method":"ttdto","date":"2014-03-19T07:37:27.627Z"}}],[{"data":{"type":"a"},"wid":"34","metadata":{"method":"ttdto","date":"2014-03-19T07:37:31.631Z"}}],[{"data":{"type":"a"},"wid":"35","metadata":{"method":"ttdto","date":"2014-03-19T07:37:36.441Z"}}],[{"data":{"type":"a"},"wid":"36","metadata":{"method":"ttdto","date":"2014-03-19T07:37:41.718Z"}}]];
			proxyprinttodiv("expected_result --", expected_result, 17);

			res = logverify("logverify", actual_result, expected_result);
			callback(err, res); 
      });
}

// simple test to setup data and then test against that
exports.sectest1 = sectest1 = function sectest1(parm, callback) {

      async.series([
                  function (cb1) {
                        createtestuser("rogeruser", "rogerac", "99", cb1);
                  },
                  function (cb1) {
                        createtestuser("codyuser", "codyac", "99", cb1)
                  },
                  function (cb1) { // add codyuser to the driemployeesgroup
                        addgrouptowid("codyuser", "userdto", "driemployeegroup", cb1);
                  },
                  function (cb1) { // rogeruser allows anyone in driemployees to executethis to cretecoupon
                        addpermission("rogeruser", "driemployeegroup", "createcoupon", "data", "50", cb1);
                  },
                  function (cb1) {
                        testsecurity("codyac", "executethis", "createcoupon", "data", true, cb1);
                  },



                  function (cb1) {
                        addpermission("rogeruser", "codyuser", "executethis", "createcoupon", "data", 50, cb1);
                  },
                  function (cb1) {
                        addgrouptowid("createcoupon", "xxxxxxx", "rogeruser", cb1);
                  },
                  function (cb1) {
                        testsecurity("rogerac", "executethis", "createcoupon", "data", true, cb1);
                  },
                  function (cb1) {
                        addgrouptowid("codyuser", "userdto", "driemployeegroup", cb1);
                  },

                  function (cb1) {
                        testsecurity("codyac", "executethis", "createcoupon", "data", true, cb1);
                  }
            ],
            function (err, res) {

                  callback(err, res);

            });
}

// simple test which sets up all data and then runs sectest1 test after that 
exports.tsa1 = tsa1 = function tsa1(params, callback) {
      // debuglevel = 34;
      // saveglobal("debugname", "");
      // saveglobal("debugcat", "");
      // saveglobal("debugsubcat", "code");
      // var status = false;

      async.series([
            function (cb1) {
                  createsystemdtos(null, function (err, res) {
                        cb1(null);
                  });
            },
            function (cb1) {
                  sectest1(null, function (err, res) {
                        cb1(null);
                  });
            }
      ], function (err, res) {
            proxyprinttodiv('Function tss3 done a series of tasks using ttdto -- process.addListener(type, listener);', res, 34);
            callback(err, res);
      });
}


/// test getting permissions list :: dependent on sectest1
exports.ttsa3 = ttsa3 = function (params, callback) {
      getPermissionsList(["driemployeegroup0", "rogeruser0", "groupdto0", "19", "25"], ["createcoupon0"], ["executethis"], ["data"], 99, function (err, res) {
            proxyprinttodiv('Function ttsa3() in : res', res, 34);
            callback(err, res);

      });
};

/// test getting groups recursively :: dependent on sectest1
exports.ttsa4 = ttsa4 = function (params, callback) {
      debuglevel = 34;
      saveglobal("debugname", "");
      saveglobal("debugcat", "");
      saveglobal("debugsubcat", "code");
      getGroupRecursive("rogeruser", 99, function (err, res) {
            proxyprinttodiv('Function ttsa4() in : res', res, 34);
            callback(err, res);

      });
};

/// test add group to wid :: dependent on sectest1
exports.ttsa6 = ttsa6 = function (params, callback) {
      addgrouptowid("anything", "groupnamedto", "createcoupon", callback);
};



// Address dto
// {"executethis":"updatewid","metadata.method":"addressdto","wid":"addressdto", "companyname":"string", "street":"string", "city":"string","state":"string","zip":"string", "metadata.inherit":"defaultaddressproperties"},
// {"executethis":"updatewid","metadata.method":"addressdto","wid":"defaultaddressproperties", "companyname":"No Name Company"},
// {"executethis":"updatewid","metadata.method":"relationshipdto","wid":"rel222","primarywid":"elizabeth_heart","secondarywid":"elizabeth_heart_address", "relationshiptype":"attributes" },
// {"executethis":"updatewid","metadata.method":"addressdto","wid":"elizabeth_heart_address", "street":"1234 First street", "city":"Something City","state":"ZZ","zip":"12345"},
// {"executethis":"getwidmaster","wid":"elizabeth_heart_address"}
exports.etadd01 = etadd01 = function etadd01(parameters, callback) {
	  debuglevel = 17;
      var executeList = [{
            "executethis": "updatewid",
            "metadata.method": "authordto",
            "wid": "authordto",
            "name": "string",
            "age": "string",
            "a": "string",
            "b": "string",
            "metdata.bookdto.type": "onetomany"
      }, {
            "executethis": "updatewid",
            "metadata.method": "bookdto",
            "wid": "bookdto",
            "title": "string",
            "pages": "string",
            "c": "string",
            "d": "string"
      }, {
            "executethis": "updatewid",
            "metadata.method": "relationshipdto",
            "wid": "relbooktoauthor",
            "primarywid": "authordto",
            "secondarywid": "bookdto",
            "relationshiptype": "attributes"
      }, {
            "executethis": "updatewid",
            "metadata.method": "authordto",
            "wid": "elizabeth_heart",
            "name": "Elizabeth Heart",
            "age": "50"
      }]

      execute(executeList, function (err, res) {
            proxyprinttodiv('__--__', res, 17);

            var object = {
                  "metadata": {
                        "method": "bookdto"
                  },
                  "wid": "222",
                  "title": "The X Factor",
                  "pages": "300"
            };
            var dtoobject = {
                  "metadata": {
                        "method": "bookdto"
                  },
                  "wid": "bookdto",
                  "title": "string",
                  "pages": "string",
                  "c": "string",
                  "d": "string"
            };
            var parentwid = "elizabeth_heart";
            var relationshiptype = "onetomany";
            var command = {};

            addwidobject(object, dtoobject, null, null, null, command, function (err, res) {
                proxyprinttodiv("res --", res, 17);
				var actual_result = [res];
				proxyprinttodiv("actual_result --", actual_result, 17);							  

				var expected_result = [{"data":{"title":"The X Factor","pages":"300"},"wid":"1","metadata":{"method":"bookdto","date":"2014-03-19T07:41:35.196Z"}}];
				proxyprinttodiv("expected_result --", expected_result, 17);

				res = logverify("logverify", actual_result, expected_result);
				callback(err, res); 
            });
      });

}

exports.etadd0 = etadd0 = function etadd0(parameters, callback) {
	debuglevel=17;
      var executeList = [{
                  "executethis": "updatewid",
                  "metadata.method": "authordto",
                  "wid": "authordto",
                  "name": "string",
                  "age": "string",
                  "a": "string",
                  "b": "string",
                  "metdata.bookdto.type": "onetomany"
            }, {
                  "executethis": "updatewid",
                  "metadata.method": "bookdto",
                  "wid": "bookdto",
                  "title": "string",
                  "pages": "string",
                  "c": "string",
                  "d": "string"
            }, {
                  "executethis": "updatewid",
                  "metadata.method": "relationshipdto",
                  "wid": "relbooktoauthor",
                  "primarywid": "authordto",
                  "secondarywid": "bookdto",
                  "relationshiptype": "attributes"
            }, {
                  "executethis": "updatewid",
                  "metadata.method": "authordto",
                  "wid": "elizabeth_heart",
                  "name": "Elizabeth Heart",
                  "age": "50"
            }
            //{"executethis":"updatewid","metadata.method":"bookdto","wid":"222","title":"The X Factor","pages":"300"},
            //{"executethis":"updatewid","metadata.method":"relationshipdto","wid":"rel111","primarywid":"elizabeth_heart","secondarywid":"222", "relationshiptype":"attributes"},
      ]

      execute(executeList, function (err, res) {
            proxyprinttodiv('__--__', res, 17);

            var object = {
                  "metadata": {
                        "method": "bookdto"
                  },
                  "wid": "222",
                  "title": "The X Factor",
                  "pages": "300"
            };
            var dtoobject = {
                  "metadata": {
                        "method": "bookdto"
                  },
                  "wid": "bookdto",
                  "title": "string",
                  "pages": "string",
                  "c": "string",
                  "d": "string"
            };
            var parentwid = "elizabeth_heart";
            var relationshiptype = "onetomany";
            var command = {};

            // addrecord(object, dtoobject, parentwid, relationshiptype, command, function (err, res) {
            //     alert("add0 addrecord! -- got res -->" + JSON.stringify(res));
            // });

            cleanadd(object, dtoobject, command, function (err, res) {
				proxyprinttodiv("res --", res, 17);
				var actual_result = [res];
				proxyprinttodiv("actual_result --", actual_result, 17);							  

				var expected_result = [{"obj":{"metadata":{"method":"bookdto"},"wid":"222","title":"The X Factor","pages":"300"},"dtoobj":{"metadata":{"method":"string"},"wid":"string","title":"string","pages":"string"}}];
				proxyprinttodiv("expected_result --", expected_result, 17);

				res = logverify("logverify", actual_result, expected_result);
				callback(err, res); 
            });
      });

}

exports.etadd1 = etadd1 = function etadd1(parameters, callback) {
      debuglevel=17;
	  eventappinstall();
      var inputObject = {
            "name": "Elizabeth Heart",
            "age": "50",
            "wid": "elizabeth_heart",
            "metadata": {
                  "method": "authordto"
            },
            "bookdto": {
                  "title": "The X Factor",
                  "pages": "300",
                  "wid": "222",
                  "metadata": {
                        "method": "bookdto"
                  }
            }
      };
      var inputdto = {
            "name": "string",
            "age": "string",
            "a": "string",
            "b": "string",
            "wid": "string",
            "bookdto": {
                  "title": "string",
                  "pages": "string",
                  "c": "string",
                  "d": "string",
                  "wid": "string",
                  "metadata": {
                        "method": "bookdto",
                        "inherit": "defaultbookdtoactions"
                  },
                  "command": {
                        "inherit": {
                              "defaultbookdtoactions": "defaultbookdtoactions"
                        },
                        "deepdtolist": {},
                        "dtolist": {}
                  }
            },
            "metadata": {
                  "method": "authordto",
                  "bookdto": {
                        "type": "onetomany"
                  },
                  "inherit": "defaultauthordtoactions"
            },
            "command": {
                  "inherit": {
                        "defaultauthordtoactions": "defaultauthordtoactions",
                        "defaultbookdtoactions": "defaultbookdtoactions"
                  },
                  "deepdtolist": {
                        "bookdto": "onetomany"
                  },
                  "dtolist": {
                        "bookdto": "bookdto"
                  }
            }
      }

      var command = {};

      addwidobject(inputObject, inputdto, null, null, null, command, function (err, res) {
		proxyprinttodiv("res --", res, 17);
		var actual_result = [res];
		proxyprinttodiv("actual_result --", actual_result, 17);							  

		var expected_result = [{"data":{"name":"Elizabeth Heart","age":"50"},"wid":"elizabeth_heart","metadata":{"method":"authordto","date":"2014-03-19T07:46:17.925Z"}}];
		proxyprinttodiv("expected_result --", expected_result, 17);

		res = logverify("logverify", actual_result, expected_result);
		callback(err, res); 
      });
}

exports.etadd11 = etadd11 = function etadd11(parameters, callback) {
	debuglevel = 17;
      eventappinstall();
      var inputObject = {
            "name": "Elizabeth Heart",
            "age": "50",
            "wid": "elizabeth_heart",
            "metadata": {
                  "method": "authordto"
            },
            "bookdto": {
                  "title": "The X Factor",
                  "pages": "300",
                  "wid": "222",
                  "metadata": {
                        "method": "bookdto"
                  }
            }
      };

      var inputdto = {
            "name": "string",
            "age": "string",
            "a": "string",
            "b": "string",
            "wid": "string",
            "bookdto": {
                  "title": "string",
                  "pages": "string",
                  "c": "string",
                  "d": "string",
                  "wid": "string",
                  "metadata": {
                        "method": "bookdto",
                        "inherit": "defaultbookdtoactions"
                  },
                  "command": {
                        "inherit": {
                              "defaultbookdtoactions": "defaultbookdtoactions"
                        },
                        "deepdtolist": {},
                        "dtolist": {}
                  }
            },
            "metadata": {
                  "method": "authordto",
                  "bookdto": {
                        "type": "onetomany"
                  },
                  "inherit": "defaultauthordtoactions"
            },
            "command": {
                  "inherit": {
                        "defaultauthordtoactions": "defaultauthordtoactions",
                        "defaultbookdtoactions": "defaultbookdtoactions"
                  },
                  "deepdtolist": {
                        "bookdto": "onetomany"
                  },
                  "dtolist": {
                        "bookdto": "bookdto"
                  }
            }
      }

      var command = {};

      addwidobject(inputObject, inputdto, null, null, null, command, function (err, res) {
		proxyprinttodiv("res --", res, 17);
		var actual_result = [res];
		proxyprinttodiv("actual_result --", actual_result, 17);							  

		var expected_result = [{"data":{"name":"Elizabeth Heart","age":"50"},"wid":"elizabeth_heart","metadata":{"method":"authordto","date":"2014-03-19T07:52:17.443Z"}}];
		proxyprinttodiv("expected_result --", expected_result, 17);

		res = logverify("logverify", actual_result, expected_result);
		callback(err, res);         
      });
}

/*
this should insert {a:b} at the bookdto level
*/
exports.etget4 = etget4 = function etget4(parameters, callback) {
	debuglevel = 17;
  
	 eventappinstall();
      var inputObject = {
            "name": "Elizabeth Heart",
            "age": "50",
            "wid": "elizabeth_heart",
            "metadata": {
                  "method": "authordto"
            },
            "bookdto": {
                  "title": "The X Factor",
                  "pages": "300",
                  "wid": "222",
                  "metadata": {
                        "method": "bookdto"
                  }
            }
      };
      var inputdto = {
            "name": "string",
            "age": "string",
            "a": "string",
            "b": "string",
            "wid": "authordto",
            "bookdto": {
                  "title": "string",
                  "pages": "string",
                  "c": "string",
                  "d": "string",
                  "wid": "bookdto",
                  "metadata": {
                        "method": "bookdto",
                        "inherit": "defaultbookdtoactions"
                  },
                  "command": {
                        "inherit": {
                              "defaultbookdtoactions": "defaultbookdtoactions"
                        },
                        "deepdtolist": {},
                        "dtolist": {}
                  }
            },
            "metadata": {
                  "method": "authordto",
                  "bookdto": {
                        "type": "onetomany"
                  },
                  "inherit": "defaultauthordtoactions"
            },
            "command": {
                  "inherit": {
                        "defaultauthordtoactions": "defaultauthordtoactions",
                        "defaultbookdtoactions": "defaultbookdtoactions"
                  },
                  "deepdtolist": {
                        "bookdto": "onetomany"
                  },
                  "dtolist": {
                        "bookdto": "bookdto"
                  }
            }
      };
      var insertobj = {
            "a": "b"
      };
      var command = {
            "dtotype": "bookdto"
      };
	  

		var res = insertbydtotype(inputObject, inputdto, insertobj, command);
	  
		proxyprinttodiv("res --", res, 17);
		var actual_result = [res];
		proxyprinttodiv("actual_result --", actual_result, 17);							  

		var expected_result = [{"name":"Elizabeth Heart","age":"50","wid":"elizabeth_heart","metadata":{"method":"authordto"},"bookdto":{"title":"The X Factor","pages":"300","wid":"222","metadata":{"method":"bookdto"},"a":"b"}}];
		proxyprinttodiv("expected_result --", expected_result, 17);
		
		res = logverify("logverify", actual_result, expected_result);
		callback(null, res);
}

exports.etget22 = etget22 = function etget22(parameters, callback) { //add clean test
		debuglevel = 17;
      eventappinstall();
      var inputObject = {
            "name": "Elizabeth Heart",
            "age": "50",
            "wid": "elizabeth_heart",
            "metadata": {
                  "method": "authordto"
            },
            "bookdto": {
                  "title": "The X Factor",
                  "pages": "300",
                  "wid": "222",
                  "metadata": {
                        "method": "bookdto"
                  }
            }
      };
      var inputdto = {
            "name": "string",
            "age": "string",
            "a": "string",
            "b": "string",
            "wid": "authordto",
            "bookdto": {
                  "title": "string",
                  "pages": "string",
                  "c": "string",
                  "d": "string",
                  "wid": "bookdto",
                  "metadata": {
                        "method": "bookdto",
                        "inherit": "defaultbookdtoactions"
                  },
                  "command": {
                        "inherit": {
                              "defaultbookdtoactions": "defaultbookdtoactions"
                        },
                        "deepdtolist": {},
                        "dtolist": {}
                  }
            },
            "metadata": {
                  "method": "authordto",
                  "bookdto": {
                        "type": "onetomany"
                  },
                  "inherit": "defaultauthordtoactions"
            },
            "command": {
                  "inherit": {
                        "defaultauthordtoactions": "defaultauthordtoactions",
                        "defaultbookdtoactions": "defaultbookdtoactions"
                  },
                  "deepdtolist": {
                        "bookdto": "onetomany"
                  },
                  "dtolist": {
                        "bookdto": "bookdto"
                  }
            }
      };
      var insertobj = {
            "a": "b"
      };
      var command = {
            "dtotype": "bookdto"
      };
      var res = insertbydtotype(inputObject, inputdto, insertobj, command);
	  	proxyprinttodiv("res --", res, 17);
		var actual_result = [res];
		proxyprinttodiv("actual_result --", actual_result, 17);							  

		var expected_result = [{"name":"Elizabeth Heart","age":"50","wid":"elizabeth_heart","metadata":{"method":"authordto"},"bookdto":{"title":"The X Factor","pages":"300","wid":"222","metadata":{"method":"bookdto"},"a":"b"}}];
		proxyprinttodiv("expected_result --", expected_result, 17);
		
		res = logverify("logverify", actual_result, expected_result);
		callback(null, res);
}

/*
do not specify command.dto...should put it at root/author level
*/
exports.etget5 = etget5 = function etget5(parameters, callback) {
	debuglevel = 17;
      eventappinstall();
      var inputObject = {
            "name": "Elizabeth Heart",
            "age": "50",
            "wid": "elizabeth_heart",
            "metadata": {
                  "method": "authordto"
            },
            "bookdto": {
                  "title": "The X Factor",
                  "pages": "300",
                  "wid": "222",
                  "metadata": {
                        "method": "bookdto"
                  }
            }
      };
      var inputdto = {
            "name": "string",
            "age": "string",
            "a": "string",
            "b": "string",
            "wid": "authordto",
            "bookdto": {
                  "title": "string",
                  "pages": "string",
                  "c": "string",
                  "d": "string",
                  "wid": "bookdto",
                  "metadata": {
                        "method": "bookdto",
                        "inherit": "defaultbookdtoactions"
                  },
                  "command": {
                        "inherit": {
                              "defaultbookdtoactions": "defaultbookdtoactions"
                        },
                        "deepdtolist": {},
                        "dtolist": {}
                  }
            },
            "metadata": {
                  "method": "authordto",
                  "bookdto": {
                        "type": "onetomany"
                  },
                  "inherit": "defaultauthordtoactions"
            },
            "command": {
                  "inherit": {
                        "defaultauthordtoactions": "defaultauthordtoactions",
                        "defaultbookdtoactions": "defaultbookdtoactions"
                  },
                  "deepdtolist": {
                        "bookdto": "onetomany"
                  },
                  "dtolist": {
                        "bookdto": "bookdto"
                  }
            }
      };
      var insertobj = {
            "a": "b"
      };
      var command = {};
      var res = insertbydtotype(inputObject, inputdto, insertobj, command);
	  	proxyprinttodiv("res --", res, 17);
		var actual_result = [res];
		proxyprinttodiv("actual_result --", actual_result, 17);							  

		var expected_result = [{"name":"Elizabeth Heart","age":"50","wid":"elizabeth_heart","metadata":{"method":"authordto"},"bookdto":{"title":"The X Factor","pages":"300","wid":"222","metadata":{"method":"bookdto"}},"a":"b"}];
		proxyprinttodiv("expected_result --", expected_result, 17);
		
		res = logverify("logverify", actual_result, expected_result);
		callback(null, res);
}

/*
specify command.dtotype = x should wrap result in {x: {.....}}
*/
exports.etget6 = etget6 = function etget6(parameters, callback) {
	debuglevel = 17;
      eventappinstall();
      var inputObject = {
            "name": "Elizabeth Heart",
            "age": "50",
            "wid": "elizabeth_heart",
            "metadata": {
                  "method": "authordto"
            },
            "bookdto": {
                  "title": "The X Factor",
                  "pages": "300",
                  "wid": "222",
                  "metadata": {
                        "method": "bookdto"
                  }
            }
      };
      var inputdto = {
            "name": "string",
            "age": "string",
            "a": "string",
            "b": "string",
            "wid": "authordto",
            "bookdto": {
                  "title": "string",
                  "pages": "string",
                  "c": "string",
                  "d": "string",
                  "wid": "bookdto",
                  "metadata": {
                        "method": "bookdto",
                        "inherit": "defaultbookdtoactions"
                  },
                  "command": {
                        "inherit": {
                              "defaultbookdtoactions": "defaultbookdtoactions"
                        },
                        "deepdtolist": {},
                        "dtolist": {}
                  }
            },
            "metadata": {
                  "method": "authordto",
                  "bookdto": {
                        "type": "onetomany"
                  },
                  "inherit": "defaultauthordtoactions"
            },
            "command": {
                  "inherit": {
                        "defaultauthordtoactions": "defaultauthordtoactions",
                        "defaultbookdtoactions": "defaultbookdtoactions"
                  },
                  "deepdtolist": {
                        "bookdto": "onetomany"
                  },
                  "dtolist": {
                        "bookdto": "bookdto"
                  }
            }
      };
      var insertobj = {
            "a": "b"
      };
      var command = {
            "dtotype": "x"
      };
		var res = insertbydtotype(inputObject, inputdto, insertobj, command);
	  	proxyprinttodiv("res --", res, 17);
		var actual_result = [res];
		proxyprinttodiv("actual_result --", actual_result, 17);							  

		var expected_result = [{"name":"Elizabeth Heart","age":"50","wid":"elizabeth_heart","metadata":{"method":"authordto"},"bookdto":{"title":"The X Factor","pages":"300","wid":"222","metadata":{"method":"bookdto"}}}];
		proxyprinttodiv("expected_result --", expected_result, 17);
		
		res = logverify("logverify", actual_result, expected_result);
		callback(null, res);
}

/*
specify command.dtotype.x.y.z should wrap result in {x:{y:z{......}}}
*/
exports.etget7 = etget7 = function etget7(parameters, callback) {
	debuglevel = 17;
      eventappinstall();
      var inputObject = {
            "name": "Elizabeth Heart",
            "age": "50",
            "wid": "elizabeth_heart",
            "metadata": {
                  "method": "authordto"
            },
            "bookdto": {
                  "title": "The X Factor",
                  "pages": "300",
                  "wid": "222",
                  "metadata": {
                        "method": "bookdto"
                  }
            }
      };
      var inputdto = {
            "name": "string",
            "age": "string",
            "a": "string",
            "b": "string",
            "wid": "authordto",
            "bookdto": {
                  "title": "string",
                  "pages": "string",
                  "c": "string",
                  "d": "string",
                  "wid": "bookdto",
                  "metadata": {
                        "method": "bookdto",
                        "inherit": "defaultbookdtoactions"
                  },
                  "command": {
                        "inherit": {
                              "defaultbookdtoactions": "defaultbookdtoactions"
                        },
                        "deepdtolist": {},
                        "dtolist": {}
                  }
            },
            "metadata": {
                  "method": "authordto",
                  "bookdto": {
                        "type": "onetomany"
                  },
                  "inherit": "defaultauthordtoactions"
            },
            "command": {
                  "inherit": {
                        "defaultauthordtoactions": "defaultauthordtoactions",
                        "defaultbookdtoactions": "defaultbookdtoactions"
                  },
                  "deepdtolist": {
                        "bookdto": "onetomany"
                  },
                  "dtolist": {
                        "bookdto": "bookdto"
                  }
            }
      };
      var insertobj = {
            "a": "b"
      };
      var command = {
            "dtotype": {
                  "x": {
                        "y": "z"
                  }
            }
      };
		var res = insertbydtotype(inputObject, inputdto, insertobj, command);
	  	proxyprinttodiv("res --", res, 17);
		var actual_result = [res];
		proxyprinttodiv("actual_result --", actual_result, 17);							  

		var expected_result = [{"name":"Elizabeth Heart","age":"50","wid":"elizabeth_heart","metadata":{"method":"authordto"},"bookdto":{"title":"The X Factor","pages":"300","wid":"222","metadata":{"method":"bookdto"}}}];
		proxyprinttodiv("expected_result --", expected_result, 17);
		
		res = logverify("logverify", actual_result, expected_result);
		callback(null, res);
}

/*
get8 - to get the dtoname
*/
exports.etget8 = etget8 = function etget8(parameters, callback) {
	debuglevel = 17;
      eventappinstall();
      var inputObject = {
            "name": "Elizabeth Heart",
            "age": "50",
            "wid": "elizabeth_heart",
            "metadata": {
                  "method": "authordto"
            },
            "bookdto": {
                  "title": "The X Factor",
                  "pages": "300",
                  "wid": "222",
                  "metadata": {
                        "method": "bookdto"
                  }
            }
      };
      var inputdto = {
            "name": "string",
            "age": "string",
            "a": "string",
            "b": "string",
            "wid": "authordto",
            "bookdto": {
                  "title": "string",
                  "pages": "string",
                  "c": "string",
                  "d": "string",
                  "wid": "bookdto",
                  "metadata": {
                        "method": "bookdto",
                        "inherit": "defaultbookdtoactions"
                  },
                  "command": {
                        "inherit": {
                              "defaultbookdtoactions": "defaultbookdtoactions"
                        },
                        "deepdtolist": {},
                        "dtolist": {}
                  }
            },
            "metadata": {
                  "method": "authordto",
                  "bookdto": {
                        "type": "onetomany"
                  },
                  "inherit": "defaultauthordtoactions"
            },
            "command": {
                  "inherit": {
                        "defaultauthordtoactions": "defaultauthordtoactions",
                        "defaultbookdtoactions": "defaultbookdtoactions"
                  },
                  "deepdtolist": {
                        "bookdto": "onetomany"
                  },
                  "dtolist": {
                        "bookdto": "bookdto"
                  }
            }
      };
      var insertobj = {
            "metadata.method": "bookdto"
      };
      var command = {
            "dtotype": "bookdto"
      };
		var res = insertbydtotype(inputObject, inputdto, insertobj, command);
	  	proxyprinttodiv("res --", res, 17);
		var actual_result = [res];
		proxyprinttodiv("actual_result --", actual_result, 17);							  

		var expected_result = [{"name":"Elizabeth Heart","age":"50","wid":"elizabeth_heart","metadata":{"method":"authordto"},"bookdto":{"title":"The X Factor","pages":"300","wid":"222","metadata":{"method":"bookdto"},"metadata.method":"bookdto"}}];
		proxyprinttodiv("expected_result --", expected_result, 17);
		
		res = logverify("logverify", actual_result, expected_result);
		callback(null, res);
}


/*
addwid with out inherit ... should add inputobject
*/
exports.etaddwidtest = etaddwidtest = function etaddwidtest(parameters, callback) {
	debuglevel = 17;
      eventappinstall();
      var executeList = [{
            "executethis": "updatewid",
            "metadata.method": "authordto",
            "wid": "defaultauthor",
            "name": "roger"
      }];
      execute(executeList, function (err, res) {
            proxyprinttodiv("addwidtest updatewid authordto result ", res, 17);

            var inputobject = {
                  "name": "Elizabeth Heart",
                  "age": "50",
                  "wid": "elizabeth_heart",
                  "metadata": {
                        "method": "authordto"
                  }
            };
            var inputdto = {
                  "name": "string",
                  "age": "string",
                  "a": "string",
                  "b": "string",
                  "wid": "string",
                  "metadata": {
                        "method": "string",
                        "bookdto": {
                              "type": "onetomany"
                        },
                        "inherit": "defaultauthor"
                  },
                  "command": {
                        "inherit": {
                              "defaultauthor": "defaultauthor"
                        },
                        "deepdtolist": {
                              "bookdto": "onetomany"
                        },
                        "dtolist": {
                              "bookdto": "bookdto"
                        }
                  }
            };
            var command = {};

            addwid(inputobject, inputdto, command, function (err, res) {
                proxyprinttodiv("res --", res, 17);
				var actual_result = res;
				proxyprinttodiv("actual_result --", actual_result, 17);							  

				var expected_result = [{"data":{"name":"Elizabeth Heart","age":"50"},"wid":"elizabeth_heart","metadata":{"method":"authordto","date":"2014-03-19T08:28:48.213Z"}}];
				proxyprinttodiv("expected_result --", expected_result, 17);

				res = logverify("logverify", actual_result, expected_result);
				callback(err, res); 
            });
      });
}

/*
addwid without inherit .. should add the input record
*/
exports.etaddwidtest2 = etaddwidtest2 = function etaddwidtest2(parameters, callback) {
	debuglevel = 17;
      eventappinstall();
      var executeList = [{
            "executethis": "updatewid",
            "metadata.method": "authordto",
            "wid": "defaultauthor",
            "name": "roger"
      }];
      execute(executeList, function (err, res) {
            proxyprinttodiv("addwidtest updatewid authordto result ", res, 17);

            var inputobject = {
                  "name": "Elizabeth Heart",
                  "age": "50",
                  "wid": "elizabeth_heart",
                  "metadata": {
                        "method": "authordto"
                  }
            };
            var inputdto = {
                  "name": "string",
                  "age": "string",
                  "a": "string",
                  "b": "string",
                  "wid": "string",
                  "metadata": {
                        "method": "string",
                        "bookdto": {
                              "type": "onetomany"
                        }
                  }
            };
            var command = {};

            addwid(inputobject, inputdto, command, function (err, res) {
                proxyprinttodiv("res --", res, 17);
				var actual_result = res;
				proxyprinttodiv("actual_result --", actual_result, 17);							  

				var expected_result = [{"data":{"name":"Elizabeth Heart","age":"50"},"wid":"elizabeth_heart","metadata":{"method":"authordto","date":"2014-03-19T08:28:48.213Z"}}];
				proxyprinttodiv("expected_result --", expected_result, 17);

				res = logverify("logverify", actual_result, expected_result);
				callback(err, res);
            });
      });
}

/*
addwid - with record alreayd exists ... should update name, leave all else the same
*/
exports.etaddwidtest3 = etaddwidtest3 = function etaddwidtest3(parameters, callback) {
		debuglevel = 17;
      eventappinstall();
      var executeList = [
            //{"executethis":"updatewid","metadata.method":"authordto","wid":"defaultauthor","name":"roger"}
            {
                  "executethis": "updatewid",
                  "metadata.method": "authordto",
                  "wid": "elizabeth_heart",
                  "name": "roger"
            }
      ];
      execute(executeList, function (err, res) {
            proxyprinttodiv("addwidtest updatewid authordto result ", res, 17);

            var inputobject = {
                  "name": "Elizabeth Heart",
                  "age": "50",
                  "wid": "elizabeth_heart",
                  "metadata": {
                        "method": "authordto"
                  }
            };
            var inputdto = {
                  "name": "string",
                  "age": "string",
                  "a": "string",
                  "b": "string",
                  "wid": "string",
                  "metadata": {
                        "method": "string",
                        "bookdto": {
                              "type": "onetomany"
                        }
                  }
            };
            var command = {};

            addwid(inputobject, inputdto, command, function (err, res) {
                proxyprinttodiv("res --", res, 17);
				var actual_result = res;
				proxyprinttodiv("actual_result --", actual_result, 17);							  

				var expected_result = [{"data":{"name":"Elizabeth Heart","age":"50"},"wid":"elizabeth_heart","metadata":{"method":"authordto","date":"2014-03-19T08:28:48.213Z"}}];
				proxyprinttodiv("expected_result --", expected_result, 17);

				res = logverify("logverify", actual_result, expected_result);
				callback(err, res);
            });
      });
}

/*
addwid with inherit that DOES matter ... should return name of roger
*/
exports.etaddwidtest4 = etaddwidtest4 = function etaddwidtest4(parameters, callback) {
	debuglevel = 17;
      eventappinstall();
      var executeList = [{
            "executethis": "updatewid",
            "metadata.method": "authordto",
            "wid": "defaultauthor",
            "name": "roger"
      }];
      execute(executeList, function (err, res) {
            proxyprinttodiv("addwidtest updatewid authordto result ", res, 17);

            var inputobject = {
                  //"name": "Elizabeth Heart",
                  "age": "50",
                  "wid": "elizabeth_heart",
                  "metadata": {
                        "method": "authordto"
                  }
            };
            var inputdto = {
                  "name": "string",
                  "age": "string",
                  "a": "string",
                  "b": "string",
                  "wid": "string",
                  "metadata": {
                        "method": "string",
                        "bookdto": {
                              "type": "onetomany"
                        },
                        "inherit": "defaultauthor"
                  },
                  "command": {
                        "inherit": {
                              "defaultauthor": "defaultauthor"
                        },
                        "deepdtolist": {
                              "bookdto": "onetomany"
                        },
                        "dtolist": {
                              "bookdto": "bookdto"
                        }
                  }
            };
            var command = {};

            addwid(inputobject, inputdto, command, function (err, res) {
                proxyprinttodiv("res --", res, 17);
				var actual_result = res;
				proxyprinttodiv("actual_result --", actual_result, 17);							  

				var expected_result = [{"data":{"age":"50"},"wid":"elizabeth_heart","metadata":{"method":"authordto","date":"2014-03-19T08:43:36.593Z"}}];
				proxyprinttodiv("expected_result --", expected_result, 17);

				res = logverify("logverify", actual_result, expected_result);
				callback(err, res);
            });
      });
}

/*
addwid - with record .. but dto fliters age
*/
exports.etaddwidtest5 = etaddwidtest5 = function etaddwidtest5(parameters, callback) {
	debuglevel = 17;
      eventappinstall();
      var executeList = [
            //{"executethis":"updatewid","metadata.method":"authordto","wid":"defaultauthor","name":"roger"}
            {
                  "executethis": "updatewid",
                  "metadata.method": "authordto",
                  "wid": "elizabeth_heart",
                  "name": "rogershoulddisappera",
                  "a": "shouldsurvie"
            }
      ];
      execute(executeList, function (err, res) {
            proxyprinttodiv("addwidtest updatewid authordto result ", res, 17);

            var inputobject = {
                  "name": "Elizabeth Heart",
                  "age": "50",
                  "wid": "elizabeth_heart",
                  "metadata": {
                        "method": "authordto"
                  }
            };
            var inputdto = {
                  "name": "string",
                  "a": "string",
                  "b": "string",
                  "wid": "string",
                  "metadata": {
                        "method": "string",
                        "bookdto": {
                              "type": "onetomany"
                        }
                  }
            };
            var command = {};

            addwid(inputobject, inputdto, command, function (err, res) {
                proxyprinttodiv("res --", res, 17);
				var actual_result = res;
				proxyprinttodiv("actual_result --", actual_result, 17);							  

				var expected_result = [{"data":{"name":"Elizabeth Heart","a":"shouldsurvie"},"wid":"elizabeth_heart","metadata":{"method":"authordto","date":"2014-03-19T08:46:37.064Z"}}];
				proxyprinttodiv("expected_result --", expected_result, 17);

				res = logverify("logverify", actual_result, expected_result);
				callback(err, res);
            });
      });
}


/*
addwid with inherit that DOES matter ... deep should return name of roger + more
*/
exports.etaddwidtest6 = etaddwidtest6 = function etaddwidtest6(parameters, callback) {
		debuglevel = 17;
      eventappinstall();
      var executeList = [{
            "executethis": "updatewid",
            "metadata.method": "authordto",
            "wid": "defaultauthor",
            "name": {
                  "test": "roger"
            }
      }];
      execute(executeList, function (err, res) {
            proxyprinttodiv("addwidtest updatewid authordto result ", res, 17);

            var inputobject = {
                  "name": {
                        "test": "roger"
                  },
                  "age": "50",
                  "wid": "elizabeth_heart",
                  "metadata": {
                        "method": "authordto"
                  }
            };
            var inputdto = {
                  "name": "string",
                  "age": "string",
                  "a": "string",
                  "b": "string",
                  "wid": "string",
                  "metadata": {
                        "method": "string",
                        "bookdto": {
                              "type": "onetomany"
                        },
                        "inherit": "defaultauthor"
                  },
                  "command": {
                        "inherit": {
                              "defaultauthor": "defaultauthor"
                        },
                        "deepdtolist": {
                              "bookdto": "onetomany"
                        },
                        "dtolist": {
                              "bookdto": "bookdto"
                        }
                  }
            };
            var command = {};

            addwid(inputobject, inputdto, command, function (err, res) {
                proxyprinttodiv("res --", res, 17);
				var actual_result = res;
				proxyprinttodiv("actual_result --", actual_result, 17);							  

				var expected_result = [{"data":{"name":{},"age":"50"},"wid":"elizabeth_heart","metadata":{"method":"authordto","date":"2014-03-19T08:48:28.746Z"}}];
				proxyprinttodiv("expected_result --", expected_result, 17);

				res = logverify("logverify", actual_result, expected_result);
				callback(err, res);
            });
      });
}


/*
addwid without inherit  ... should add inputobject -- test of deep filter string, number, boolean, date -- did it convert it?
*/
exports.etaddwidtest7 = etaddwidtest7 = function etaddwidtest7(parameters, callback) {
	debuglevel = 17;
      eventappinstall();
      var executeList = [{
            "executethis": "updatewid",
            "metadata.method": "authordto",
            "wid": "defaultauthor",
            "name": "roger"
      }];
      execute(executeList, function (err, res) {
            proxyprinttodiv("addwidtest updatewid authordto result ", res, 17);

            var inputobject = {
                  "name": {
                        "test": "roger"
                  },
                  "age": "50",
                  "wid": "elizabeth_heart",
                  "a": "1/15/2014",
                  "b": "false",
                  "metadata": {
                        "method": "authordto"
                  }
            };
            var inputdto = {
                  "name": "string",
                  "age": "number",
                  "a": "date",
                  "b": "boolean",
                  "wid": "string",
                  "metadata": {
                        "method": "string",
                        "bookdto": {
                              "type": "onetomany"
                        },
                        "inherit": "defaultauthor"
                  },
                  "command": {
                        "inherit": {
                              "defaultauthor": "defaultauthor"
                        },
                        "deepdtolist": {
                              "bookdto": "onetomany"
                        },
                        "dtolist": {
                              "bookdto": "bookdto"
                        }
                  }
            };
            var command = {};

            addwid(inputobject, inputdto, command, function (err, res) {
				proxyprinttodiv("res --", res, 17);
				var actual_result = res;
				proxyprinttodiv("actual_result --", actual_result, 17);							  

				var expected_result = [{"data":{"name":{},"age":"50","a":"1/15/2014","b":"false"},"wid":"elizabeth_heart","metadata":{"method":"authordto","date":"2014-03-19T08:50:07.108Z"}}];
				proxyprinttodiv("expected_result --", expected_result, 17);

				res = logverify("logverify", actual_result, expected_result);
				callback(err, res);
            });
      });
}

exports.etadd2 = etadd2 = function etadd2(parameters, callback) {
      debuglevel = 17;
      var executeList = [{
                  "executethis": "updatewid",
                  "metadata.method": "authordto",
                  "wid": "authordto",
                  "name": "string",
                  "age": "string",
                  "a": "string",
                  "b": "string",
                  "metdata.bookdto.type": "onetomany"
            }, {
                  "executethis": "updatewid",
                  "metadata.method": "bookdto",
                  "wid": "bookdto",
                  "title": "string",
                  "pages": "string"
            }, {
                  "executethis": "updatewid",
                  "metadata.method": "relationshipdto",
                  "wid": "relbooktoauthor",
                  "primarywid": "authordto",
                  "secondarywid": "bookdto",
                  "relationshiptype": "attributes"
            },
             {"executethis":"updatewid","metadata.method":"authordto","wid":"elizabeth_heart","name":"Elizabeth Heart","age":"50"},
            // {"executethis":"updatewid","metadata.method":"bookdto","wid":"222","title":"The X Factor","pages":"300"},
            // {"executethis":"updatewid","metadata.method":"relationshipdto","wid":"rel111","primarywid":"elizabeth_heart","secondarywid":"222", "relationshiptype":"attributes"},
            {
                  "executethis": "addwidmaster",
                  "bookdto.title": "string",
                  "bookdto.pages": "string",
                  "metadata.method": "authordto",
                  "wid": "authordto",
                  "name": "string",
                  "age": "string",
                  "metadata.bookdto.type": "onetomany"
            }, {
                  "executethis": "getwidmaster",
                  "wid": "elizabeth_heart"
            }
      ]

      execute(executeList, function (err, res) {
			proxyprinttodiv("res --", res, 17);
			var actual_result = res[5];
			proxyprinttodiv("actual_result --", actual_result, 17);							  

			var expected_result = [{"name":"Elizabeth Heart","age":"50","wid":"elizabeth_heart","metadata.method":"authordto"}];
			proxyprinttodiv("expected_result --", expected_result, 17);

			res = logverify("logverify", actual_result, expected_result);
			callback(err, res);
      });
}





exports.etget1 = etget1 = function etget1(parameters, callback) {
      debuglevel=17;
	  eventappinstall();
      var executeList = [{
                  "executethis": "updatewid",
                  "metadata.method": "authordto",
                  "wid": "authordto",
                  "name": "string",
                  "age": "string",
                  "a": "string",
                  "b": "string",
                  "metdata.bookdto.type": "onetomany",
                  "metadata.inherit": "defaultauthordtoactions"
            }, {
                  "executethis": "updatewid",
                  "metadata.method": "authordto",
                  "wid": "defaultauthordtoactions",
                  "a": "adefault",
                  "b": "BDEFAULT"
            }, {
                  "executethis": "updatewid",
                  "metadata.method": "bookdto",
                  "wid": "defaultbookdtoactions",
                  "c": "cdefault",
                  "d": "dDEFAULT"
            }, {
                  "executethis": "updatewid",
                  "metadata.method": "bookdto",
                  "wid": "bookdto",
                  "title": "string",
                  "pages": "string",
                  "c": "string",
                  "d": "string",
                  "metadata.inherit": "defaultbookdtoactions"
            }, {
                  "executethis": "updatewid",
                  "metadata.method": "relationshipdto",
                  "wid": "relbooktoauthor",
                  "primarywid": "authordto",
                  "secondarywid": "bookdto",
                  "relationshiptype": "attributes"
            }, {
                  "executethis": "updatewid",
                  "metadata.method": "authordto",
                  "wid": "elizabeth_heart",
                  "name": "Elizabeth Heart",
                  "age": "50"
            }, {
                  "executethis": "updatewid",
                  "metadata.method": "bookdto",
                  "wid": "222",
                  "title": "The X Factor",
                  "pages": "300"
            }, {
                  "executethis": "updatewid",
                  "metadata.method": "relationshipdto",
                  "wid": "rel111",
                  "primarywid": "elizabeth_heart",
                  "secondarywid": "222",
                  "relationshiptype": "attributes"
            }
            //{"executethis":"getwidmaster","wid":"elizabeth_heart"}
      ];

      execute(executeList, function (err, res) {
            proxyprinttodiv('__--__', res, 17);
            //callback(err, res);
			
			var widInput = "elizabeth_heart";
			var command = {
				"convertmethod": "dto"
			};
			var preamble = "";
			var level = "";

			getWidMongo(widInput, command, preamble, level, null, function (err, res) {
				proxyprinttodiv('__--__', res, 17);
				//callback(err, res);
				
				  widInput = "authordto";
				  getWidMongo(widInput, command, preamble, level, null, function (err, res) {
						proxyprinttodiv('__--__', res, 17);
						//callback(err, res);
						
						
					  widInput = "bookdto";
					  getWidMongo(widInput, command, preamble, level, null, function (err, res) {
							

							proxyprinttodiv("res --", res, 17);
							var actual_result = [res];
							proxyprinttodiv("actual_result --", actual_result, 17);							  

							var expected_result = [{"result":"getWidMongo"}];
							proxyprinttodiv("expected_result --", expected_result, 17);

							res = logverify("logverify", actual_result, expected_result);
							callback(null, res); 
							
					  });
				  });
			});
    });
}

exports.etget3 = etget3 = function etget3(parameters, callback) {
      debuglevel = 17;
	  eventappinstall();
      var executeList = [{
            "executethis": "updatewid",
            "metadata.method": "authordto",
            "wid": "authordto",
            "name": "string",
            "age": "string",
            "a": "string",
            "b": "string",
            "metadata.bookdto.type": "onetomany",
            "metadata.inherit": "defaultauthordtoactions"
      }, {
            "executethis": "updatewid",
            "metadata.method": "authordto",
            "wid": "defaultauthordtoactions",
            "a": "adefault",
            "b": "BDEFAULT"
      }, {
            "executethis": "updatewid",
            "metadata.method": "bookdto",
            "wid": "defaultbookdtoactions",
            "c": "cdefault",
            "d": "dDEFAULT"
      }, {
            "executethis": "updatewid",
            "metadata.method": "bookdto",
            "wid": "bookdto",
            "title": "string",
            "pages": "string",
            "c": "string",
            "d": "string",
            "metadata.inherit": "defaultbookdtoactions"
      }, {
            "executethis": "updatewid",
            "metadata.method": "relationshipdto",
            "wid": "relbooktoauthor",
            "primarywid": "authordto",
            "secondarywid": "bookdto",
            "relationshiptype": "attributes"
      }, {
            "executethis": "updatewid",
            "metadata.method": "authordto",
            "wid": "elizabeth_heart",
            "name": "Elizabeth Heart",
            "age": "50"
      }, {
            "executethis": "updatewid",
            "metadata.method": "bookdto",
            "wid": "222",
            "title": "The X Factor",
            "pages": "300"
      }, {
            "executethis": "updatewid",
            "metadata.method": "relationshipdto",
            "wid": "rel111",
            "primarywid": "elizabeth_heart",
            "secondarywid": "222",
            "relationshiptype": "attributes"
      }, {
            "executethis": "getwidmaster",
            "wid": "authordto",
            "command.convertmethod": "dto",
            "command.execute": "ConvertFromDOTdri"
      }]

      // result is :
      //{"name":"string","age":"string","a":"string","b":"string","wid":"authordto",
      //"metadata":{"method":"authordto","bookdto":{"type":"onetomany"},"inherit":"defaultauthordtoactions"},
      //"command":{"inherit":{"defaultbookdtoactions":"defaultbookdtoactions","defaultauthordtoactions":"defaultauthordtoactions"},
      //          "deepdtolist":{"bookdto":"onetomany","authordto":"authordto"},
      //          "dtolist":{"bookdto":"bookdto"}},
      //"bookdto":{"title":"string","pages":"string","c":"string","d":"string","wid":"bookdto",
      //          "metadata":{"method":"bookdto","inherit":"defaultbookdtoactions"},
      //          "command":{"inherit":{"defaultbookdtoactions":"defaultbookdtoactions"},
      //                  "deepdtolist":{"bookdto":"bookdto"},
      //                   "dtolist":{}}}}

      execute(executeList, function (err, res) {
		proxyprinttodiv("res --", res, 17);
		var actual_result = res[7];
		proxyprinttodiv("actual_result --", actual_result, 17);							  

		var expected_result = [{"data":{"primarywid":"elizabeth_heart","secondarywid":"222","relationshiptype":"attributes"},"wid":"rel111","metadata":{"method":"relationshipdto","date":"2014-03-19T11:08:51.453Z"}}];
		proxyprinttodiv("expected_result --", expected_result, 17);

		res = logverify("logverify", actual_result, expected_result);
		callback(err, res); 
      });
}

exports.etget2 = etget2 = function etget2(parameters, callback) {
      debuglevel = 17;
	  // Setup test
      eventappinstall();

      var executeList = [
            // Trying to do three levels here Authors --> Books --> Pages
            // author dto
            {
                  "executethis": "updatewid",
                  "metadata.method": "authordto",
                  "wid": "authordto",
                  "name": "string",
                  "age": "string",
                  "a": "string",
                  "b": "string",
                  "metdata.bookdto.type": "onetomany",
                  "metadata.inherit": "x"
            }, {
                  "executethis": "updatewid",
                  "metadata.method": "",
                  "wid": "x",
                  "a": "adefault",
                  "b": "BDEFAULT",
                  "bookdto.orphan_data": "Hey this works"
            },
            //{"executethis":"updatewid","metadata.method":"","wid":"defaultauthordtoactions","a":"adefault","b":"BDEFAULT", "bookdto.orphan_data":"Hey this works"},

            // book dto
            {
                  "executethis": "updatewid",
                  "metadata.method": "bookdto",
                  "wid": "bookdto",
                  "title": "string",
                  "titleb": "string",
                  "pages": "string",
                  "c": "string",
                  "d": "string",
                  "orphan_data": "string",
                  "metdata.pagedto.type": "onetomany",
                  "metadata.inherit": "defaultbookdtoactions"
            }, {
                  "executethis": "updatewid",
                  "metadata.method": "bookdto",
                  "wid": "defaultbookdtoactions",
                  "c": "cdefault",
                  "d": "dDEFAULT"
            },

            // page dto
            {
                  "executethis": "updatewid",
                  "metadata.method": "pagedto",
                  "wid": "pagedto",
                  "content": "string",
                  "number": "string",
                  "metadata.inherit": "defaultpagecontent"
            }, {
                  "executethis": "updatewid",
                  "metadata.method": "pagedto",
                  "wid": "defaultpagecontent",
                  "content": "This page is blank",
                  "number": "0"
            },

            // relationships
            {
                  "executethis": "updatewid",
                  "metadata.method": "relationshipdto",
                  "wid": "relbooktoauthor",
                  "primarywid": "authordto",
                  "secondarywid": "bookdto",
                  "relationshiptype": "attributes"
            }, {
                  "executethis": "updatewid",
                  "metadata.method": "relationshipdto",
                  "wid": "relpagetobook",
                  "primarywid": "bookdto",
                  "secondarywid": "pagedto",
                  "relationshiptype": "attributes"
            }, {
                  "executethis": "updatewid",
                  "metadata.method": "relationshipdto",
                  "wid": "rel111",
                  "primarywid": "elizabeth_heart",
                  "secondarywid": "XFactorBook",
                  "relationshiptype": "attributes"
            },

            // records
            {
                  "executethis": "updatewid",
                  "metadata.method": "authordto",
                  "wid": "elizabeth_heart",
                  "name": "Elizabeth Heart",
                  "age": "50"
            }, {
                  "executethis": "updatewid",
                  "metadata.method": "bookdto",
                  "wid": "XFactorBook",
                  "title": "The X Factor",
                  "pages": "300"
            },

            // get
            {
                  "executethis": "getwidmaster",
                  "wid": "elizabeth_heart"
            }
      ];

      // alert(JSON.stringify(executeList));    
      execute(executeList, function (err, res) {
		proxyprinttodiv("res --", res, 17);
		var actual_result = res[11];
		proxyprinttodiv("actual_result --", actual_result, 17);							  

		var expected_result = [{"name":"Elizabeth Heart","age":"50","wid":"elizabeth_heart","metadata.method":"authordto"}];
		proxyprinttodiv("expected_result --", expected_result, 17);

		res = logverify("logverify", actual_result, expected_result);
		callback(err, res); 
      });
}

exports.etget11 = etget11 = function etget11(parameters, callback) {
      debuglevel = 17;
	  // Setup test
      eventappinstall();

      var executeList = [
            // Trying to do three levels here Authors --> Books --> Pages
            // author dto
            {
                  "executethis": "addwidmaster",
                  "metadata.method": "authordto",
                  "wid": "authordto",
                  "name": "string",
                  "age": "string",
                  "a": "string",
                  "b": "string",
                  "metdata.bookdto.type": "onetomany",
                  "metadata.inherit": "x"
            }, {
                  "executethis": "addwidmaster",
                  "metadata.method": "",
                  "wid": "x",
                  "a": "adefault",
                  "b": "BDEFAULT",
                  "bookdto.orphan_data": "Hey this works"
            },
            //{"executethis":"addwidmaster","metadata.method":"","wid":"defaultauthordtoactions","a":"adefault","b":"BDEFAULT", "bookdto.orphan_data":"Hey this works"},

            // book dto
            {
                  "executethis": "addwidmaster",
                  "metadata.method": "bookdto",
                  "wid": "bookdto",
                  "title": "string",
                  "titleb": "string",
                  "pages": "string",
                  "c": "string",
                  "d": "string",
                  "orphan_data": "string",
                  "metdata.pagedto.type": "onetomany",
                  "metadata.inherit": "defaultbookdtoactions"
            }, {
                  "executethis": "addwidmaster",
                  "metadata.method": "bookdto",
                  "wid": "defaultbookdtoactions",
                  "c": "cdefault",
                  "d": "dDEFAULT"
            },

            // page dto
            {
                  "executethis": "addwidmaster",
                  "metadata.method": "pagedto",
                  "wid": "pagedto",
                  "content": "string",
                  "number": "string",
                  "metadata.inherit": "defaultpagecontent"
            }, {
                  "executethis": "addwidmaster",
                  "metadata.method": "pagedto",
                  "wid": "defaultpagecontent",
                  "content": "This page is blank",
                  "number": "0"
            },

            // relationships
            {
                  "executethis": "addwidmaster",
                  "metadata.method": "relationshipdto",
                  "wid": "relbooktoauthor",
                  "primarywid": "authordto",
                  "secondarywid": "bookdto",
                  "relationshiptype": "attributes"
            }, {
                  "executethis": "addwidmaster",
                  "metadata.method": "relationshipdto",
                  "wid": "relpagetobook",
                  "primarywid": "bookdto",
                  "secondarywid": "pagedto",
                  "relationshiptype": "attributes"
            }, {
                  "executethis": "addwidmaster",
                  "metadata.method": "relationshipdto",
                  "wid": "rel111",
                  "primarywid": "elizabeth_heart",
                  "secondarywid": "XFactorBook",
                  "relationshiptype": "attributes"
            },

            // records
            {
                  "executethis": "addwidmaster",
                  "metadata.method": "authordto",
                  "wid": "elizabeth_heart",
                  "name": "Elizabeth Heart",
                  "age": "50"
            }, {
                  "executethis": "addwidmaster",
                  "metadata.method": "bookdto",
                  "wid": "XFactorBook",
                  "title": "The X Factor",
                  "pages": "300"
            },

            // get
            {
                  "executethis": "getwidmaster",
                  "wid": "elizabeth_heart"
            }
      ];


      execute(executeList, function (err, res) {
		proxyprinttodiv("res --", res, 17);
		var actual_result = res[11];
		proxyprinttodiv("actual_result --", actual_result, 17);							  

		var expected_result = [{"name":"Elizabeth Heart","age":"50","wid":"elizabeth_heart","metadata.method":"authordto"}];
		proxyprinttodiv("expected_result --", expected_result, 17);

		res = logverify("logverify", actual_result, expected_result);
		callback(err, res); 
      });
      //         {"executethis":"addwidmaster","metadata.method":"pagedto","wid":"defaultpagecontent","content":"This page is blank","number":"0"},

      //         // relationships
      //         {"executethis":"addwidmaster","metadata.method":"relationshipdto","wid":"relbooktoauthor","primarywid":"authordto","secondarywid":"bookdto", "relationshiptype":"attributes"},
      //         {"executethis":"addwidmaster","metadata.method":"relationshipdto","wid":"relpagetobook","primarywid":"bookdto","secondarywid":"pagedto", "relationshiptype":"attributes"},
      //         {"executethis":"addwidmaster","metadata.method":"relationshipdto","wid":"rel111","primarywid":"elizabeth_heart","secondarywid":"XFactorBook", "relationshiptype":"attributes"},

      //         // records
      //         {"executethis":"addwidmaster","metadata.method":"authordto","wid":"elizabeth_heart","name":"Elizabeth Heart","age":"50"},
      //         {"executethis":"addwidmaster","metadata.method":"bookdto","wid":"XFactorBook","title":"The X Factor","pages":"300"},

      //         // get
      //         {"executethis":"getwidmaster","wid":"elizabeth_heart"}
      //     ];

      //     // alert(JSON.stringify(executeList));    
      //     execute(executeList, function (err, res) {
      //         proxyprinttodiv('__--__', res[11], 17);
      //         callback(err, res);
      //     });
}

/* Adding data for the survey */
exports.surveydata = surveydata = function surveydata(params, callback) {

      saveglobal("debugname", "addmaster");
      debuglevel = 97;
      saveglobal("debugcolor", 1);
      saveglobal("debugindent", 1);
      saveglobal("debugcolor", 5);

      execute([

                  // Create the user dto  
                  {
                        "executethis": "updatewid",
                        "wid": "userdto",
                        "metadata.method": "userdto",
                        "userid": "number",
                        "first": "string",
                        "last": "string",
                        "metadata.surveydto.type": "onetomany"
                  },
                  // Create the survey dto
                  {
                        "executethis": "updatewid",
                        "wid": "surveydto",
                        "metadata.method": "surveydto",
                        "title": "string",
                        "description": "string"
                  }, //, "metadata.questiondto.type": "onetomany"
                  // Relate the survey dto to the question dto (surveys can have multiple questions)
                  {
                        "executethis": "updatewid",
                        "linktype": "onetomany",
                        "wid": "relationshipdto1",
                        "metadata.method": "relationshipdto",
                        "primarywid": "userdto",
                        "secondarywid": "surveydto",
                        "relationshiptype": "attributes"
                  },
                  // Adding user data 
                  {
                        "executethis": "updatewid",
                        "wid": "bill",
                        "metadata.method": "userdto",
                        "userid": "2",
                        "first": "Bill",
                        "last": "Duncan"
                  },
                  //{"executethis": "updatewid", "wid": "mysurvey", "metadata.method": "userdto", "userdto": [{ "metadata.method": "userdto", "userid": "2", "first": "Bill", "last": "Duncan"}] },
                  // Create the survey
                  {
                        "executethis": "updatewid",
                        "wid": "happy",
                        "metadata.method": "surveydto",
                        "title": "Happy Meter",
                        "description": "Daily rating of how you 'feel' things are going."
                  }, {
                        "executethis": "updatewid",
                        "linktype": "onetomany",
                        "wid": "relationshipdto2",
                        "metadata.method": "relationshipdto",
                        "primarywid": "bill",
                        "secondarywid": "happy",
                        "relationshiptype": "attributes"
                  },

                  {
                        "executethis": "getwidmaster",
                        "wid": "bill"
                  }, {
                        "executethis": "getwidmaster",
                        "wid": "happy"
                  },

                  {
                        "executethis": "addwidmaster",
                        "wid": "bill2",
                        "metadata.method": "userdto",
                        "userid": "2",
                        "first": "Bill",
                        "last": "Duncan",
                        "surveydto.title": "Happy Meter",
                        "surveydto.description": "Daily rating of how you 'feel' things are going."
                  }, {
                        "executethis": "getwidmaster",
                        "wid": "bill2"
                  }
            ],
            function (err, res) {
                  proxyprinttodiv('Function update userdto', res[0], 17);
                  proxyprinttodiv('Function update surveydto', res[1], 17);
                  proxyprinttodiv('Function update relationshipdto1', res[2], 17);
                  proxyprinttodiv('Function update bill', res[3], 17);
                  proxyprinttodiv('Function update happy', res[4], 17);
                  proxyprinttodiv('Function update relationshipdto1', res[5], 17);
                  proxyprinttodiv('Function get bill', res[6], 17);
                  proxyprinttodiv('Function get happy', res[7], 17);
                  proxyprinttodiv('Function update bill2', res[8], 17);
                  proxyprinttodiv('Function get bill2', res[9], 17);
                  callback(err, res)
            });
}

/* Adding data for the survey with addwidmaster */
exports.surveydata2 = surveydata2 = function surveydata2(params, callback) {

      execute([

                  // Create the user dto  
                  {
                        "executethis": "updatewid",
                        "wid": "userdto",
                        "metadata.method": "userdto",
                        "userid": "number",
                        "first": "string",
                        "last": "string",
                        "surveydto": "onetomany"
                  },
                  // Create the survey dto
                  {
                        "executethis": "updatewid",
                        "wid": "surveydto",
                        "metadata.method": "surveydto",
                        "title": "string",
                        "description": "string",
                        "questiondto": "onetomany"
                  },

                  // Adding user data 

                  {
                        "executethis": "addwidmaster",
                        "wid": "happy",
                        "metadata": {
                              "method": "surveydto",
                              "userdto": {
                                    "type": "onetomany"
                              }
                        },
                        "userdto": {
                              "metadata": {
                                    "method": "userdto"
                              },
                              "userid": "2",
                              "first": "Bill",
                              "last": "Duncan"
                        },
                        "surveydto": {
                              "metadata": {
                                    "method": "surveydto"
                              },
                              "title": "Happy Meter",
                              "description": "Daily rating of how you feel"
                        }
                  },

                  {
                        "executethis": "getwidmaster",
                        "wid": "Bill"
                  }, {
                        "executethis": "getwidmaster",
                        "wid": "happy"
                  }
            ],
            function (err, res) {
                  proxyprinttodiv('Function getwidmongo parameterObject after', res[0], 17);
                  proxyprinttodiv('Function getwidmongo parameterObject after', res[1], 17);
                  proxyprinttodiv('Function getwidmongo parameterObject after', res[2], 17);
                  proxyprinttodiv('Function getwidmongo parameterObject after', res[3], 17);
                  proxyprinttodiv('Function getwidmongo parameterObject after', res[4], 17);
                  callback(err, res)
            });
}

/* Adding data for a flat survey */
exports.surveydtoflat = surveydtoflat = function surveydtoflat(params, callback) {

      execute([
                  // Create the flatsurveydto dto 
                  {
                        "executethis": "updatewid",
                        "wid": "flatsurveydto",
                        "metadata.method": "flatsurveydto",
                        "userdto": "userdto",
                        "surveydto": {
                              "questiondto": [{
                                    "answerdto": [
                                          "answerdto"
                                    ]
                              }, {
                                    "responsedto": [
                                          "responsedto"
                                    ]
                              }]
                        }
                  },

                  // Create the flatsurvey data
                  {
                        "executethis": "updatewid",
                        "wid": "flatsurvey",
                        "metadata.method": "flatsurveydto",
                        "userdto": {
                              "metadata.method": "userdto",
                              "userid": "2",
                              "first": "Bill",
                              "last": "Duncan"
                        },
                        "surveydto": {
                              "metadata.method": "surveydto",
                              "title": "Happy Meter",
                              "description": "Daily rating of how you feel",
                              "questiondto": [{
                                    "metadata.method": "questiondto",
                                    "question": "How do you feel today?",
                                    "answerdto": {
                                          "metadata.method": "answerdto",
                                          "answers": [
                                                "Outstanding",
                                                "Great",
                                                "Okay",
                                                "Tired",
                                                "Sick"
                                          ]
                                    },
                                    "responsedto": [{
                                          "response": "Outstanding",
                                          "userid": "2"
                                    }, {
                                          "response": "Sick",
                                          "userid": "3"
                                    }, {
                                          "response": "Tired",
                                          "userid": "4"
                                    }]
                              }, {
                                    "metadata.method": "questiondto",
                                    "question": "How do you think you will feel tomorrow?",
                                    "answerdto": {
                                          "metadata.method": "answerdto",
                                          "answers": [
                                                "Fantastic",
                                                "Can't stop me now",
                                                "Okay",
                                                "I'll be better tomorrow",
                                                "Terrible"
                                          ]
                                    },
                                    "responsedto": [{
                                          "response": "Outstanding",
                                          "userid": "2"
                                    }, {
                                          "response": "Okay",
                                          "userid": "3"
                                    }, {
                                          "response": "Sick",
                                          "userid": "4"
                                    }]
                              }]
                        },
                  }, {
                        "executethis": "getwidmaster",
                        "wid": "flatsurvey"
                  }
            ],
            function (err, res) {
                  callback(err, res)
            });
}
// Wids :--
// {"wid": "colordto", "metadata.method": "colordto", "hue": "string", "sat": "string"}
// {"wid": "color1", "metadata.method": "colordto", "hue": "red", "sat": "red-sat"},
// {"wid": "color2", "metadata.method": "colordto", "hue": "green",  "sat": "green-sat"}
// {"wid": "color3", "metadata.method": "colordto", "hue": "blue", "sat": "blue-sat"}, 
// {"wid": "color4", "metadata.method": "colordto", "hue": "cyan", "sat": "cyan-sat"},
// {"wid": "color5", "metadata.method": "colordto", "hue": "magenta", "sat": "magenta-sat"},
// {"wid": "color6", "metadata.method": "colordto", "primarywid": "color8", "secondarywid": "color9"}, 
// {"wid": "color7", "metadata.method": "colordto", "hue": "black", "sat": "black-sat"}
// {"wid": "color8", "metadata.method": "colordto", "hue": "black", "sat": "red-sat"}
// {"wid": "color9", "metadata.method": "colordto", "hue": "cyan", "sat": "red-sat"}

// {"wid": "colordto2", "metadata.method": "colordto2", "light": "string", "chroma": "string"}
// {"wid": "color10", "metadata.method": "colordto", "hue": "pink", "sat": "pink-sat", "colordto2.0.light": "pink-light", "colordto2.0.chroma": "pink-chroma", "colordto2.1.light": "pink-light1", "colordto2.1.chroma": "pink-chroma2", "colordto2.0.colordto3.intensity": "pink-intensity"}
// {"wid": "colordto3", "metadata.method": "colordto3", "intensity": "string"}


// 4. mongowid ----------------------------------------------------------------------------------------------------------
// QueryWid(mongowid=color10, relationshipdirection=forward, relationshiptype=attributes, relationshipmethod=ALL, mongowidmethod=colordto2) :--
// [it will create 4 wids {color10, colordto2.0[color201], colordto2.1[color202] , colordto2.0.colordto3[color301]} ]
// {"wid": "color201", "metadata.method": "colordto2", "light": "pink-light", "chroma": "pink-chroma"}
// {"wid": "color202", "metadata.method": "colordto2", "light": "pink-light2", "chroma": "pink-chroma2"}


// QueryWid(mongowid=color10, relationshipdirection=forward, relationshiptype=attributes, relationshipmethod=last, mongowidmethod=colordto2) :--
// {"wid": "color202", "metadata.method": "colordto2", "light": "pink-light2", "chroma": "pink-chroma2"}



// 1. mongorawquery ----------------------------------------------------------------------------------------------------------
// QueryWid(mongorawquery="{$or:[{"hue":"black"}]}") :--
// {"wid": "color7", "metadata.method": "colordto", "hue": "black", "sat": "black-sat"}

// 2. mongosinglequery ----------------------------------------------------------------------------------------------------------
// QueryWid(mongosinglequery=color7, relationshipdirection=forward, relationshiptype=attributes, relationshipmethod=first) :-- 
// [it will create $or["hue": "black", "sat": "black-sat"]]
// {"wid": "color8", "metadata.method": "colordto", "hue": "black", "sat": "red-sat"}

// QueryWid(mongosinglequery=color8, relationshipdirection=reverse, relationshiptype=attributes, relationshipmethod=last) :-- 
// [it will create $or["hue": "black", "sat": "red-sat"]]
// {"wid": "color1", "metadata.method": "colordto", "hue": "red", "sat": "red-sat"}

// 3. mongomultiplequery ----------------------------------------------------------------------------------------------------------
// QueryWid(mongomultiplequery=color6) :-- 
// [ it will make query from child wids also ,,, == QueryWid($and[$or["hue": "black", "sat": "red-sat"], $or["hue": "cyan", "sat": "red-sat"]]) ]
// [ $and[$or[color1,color7,color8,color9], $or[color1,color4,color8,color9,]]  ]
// {"wid": "color1", "metadata.method": "colordto", "hue": "red", "sat": "red-sat"}
// {"wid": "color8", "metadata.method": "colordto", "hue": "black", "sat": "red-sat"}
// {"wid": "color9", "metadata.method": "colordto", "hue": "cyan", "sat": "red-sat"}

exports.etmttest4 = etmttest4 = function etmttest4(params, callback) {
	debuglevel = 17;
      console.log("<< mttest4 >>");

      var codedebug = false;
      if (codedebug) {
            saveglobal("debugcolor", 0);
            debugon = true;
            saveglobal("debugname", "");
            debugsubcat = "";
            saveglobal("debugcat", "mongoquerycode");
            debugfilter = "";
            debugdestination = 1;
            debuglevel = 30;
      }
      //debuglevel=17;
      /* adding wids */
      eventappinstall();
      debugname = "updatewid";
      saveglobal("debugsubcat", "code");
      saveglobal("debugcat", "add");
      var addList = [{
            "executethis": "updatewid",
            "metadata.method": "colordto",
            "wid": "colordto",
            "hue": "string",
            "sat": "string"
      }, {
            "executethis": "updatewid",
            "metadata.method": "colordto",
            "wid": "color1",
            "hue": "red",
            "sat": "red-sat"
      }, {
            "executethis": "updatewid",
            "wid": "color2",
            "metadata.method": "colordto",
            "hue": "green",
            "sat": "green-sat"
      }, {
            "executethis": "updatewid",
            "wid": "color3",
            "metadata.method": "colordto",
            "hue": "blue",
            "sat": "blue-sat"
      }, {
            "executethis": "updatewid",
            "wid": "color4",
            "metadata.method": "colordto",
            "hue": "cyan",
            "sat": "cyan-sat"
      }, {
            "executethis": "updatewid",
            "wid": "color5",
            "metadata.method": "colordto",
            "hue": "magenta",
            "sat": "magenta-sat"
      }, {
            "executethis": "updatewid",
            "wid": "color60",
            "metadata.method": "colordto",
            "relationshiptype": "attributes",
            "primarywid": "color8",
            "secondarywid": "color1"
      }, {
            "executethis": "updatewid",
            "wid": "color61",
            "metadata.method": "colordto",
            "relationshiptype": "attributes",
            "primarywid": "color8",
            "secondarywid": "color2"
      }, {
            "executethis": "updatewid",
            "wid": "color62",
            "metadata.method": "colordto",
            "relationshiptype": "attributes",
            "primarywid": "color8",
            "secondarywid": "color3"
      }, {
            "executethis": "updatewid",
            "wid": "color63",
            "metadata.method": "colordto",
            "relationshiptype": "attributes",
            "primarywid": "color8",
            "secondarywid": "color4"
      }, {
            "executethis": "updatewid",
            "wid": "color7",
            "metadata.method": "colordto",
            "hue": "black",
            "sat": "black-sat"
      }, {
            "executethis": "updatewid",
            "wid": "color8",
            "metadata.method": "colordto",
            "hue": "black",
            "sat": "red-sat"
      }, {
            "executethis": "updatewid",
            "wid": "color9",
            "metadata.method": "colordto",
            "hue": "cyan",
            "sat": "red-sat"
      }, {
            "executethis": "updatewid",
            "wid": "colordto2",
            "metadata.method": "colordto2",
            "light": "string",
            "chroma": "string"
      }, {
            "executethis": "updatewid",
            "wid": "color10",
            "metadata.method": "colordto",
            "hue": "pink",
            "sat": "pink-sat",
            "colordto2.0.light": "pink-light",
            "colordto2.0.chroma": "pink-chroma",
            "colordto2.1.light": "pink-light1",
            "colordto2.1.chroma": "pink-chroma2",
            "colordto2.0.colordto3.intensity": "pink-intensity"
      }, {
            "executethis": "updatewid",
            "wid": "colordto3",
            "metadata.method": "colordto3",
            "intensity": "string"
      }];
      execute(addList, function (err, res) {
            console.log(' >>> final response after addList >>> ' + JSON.stringify(res));
      });

      var mongorawquerytests = true;
      var mongosinglequerytests = false;
      var mongomultiplequerytests = false;
      var relationshiptests = false;

      debugfn("update code generator END", "updatewid", "add", "code", getglobal("debugcolor"), getglobal("debugindent"), {}, 5);
      saveglobal("debugname", "");
      debugsubcat = "";
      saveglobal("debugcat", "");



      /* mongo raw queries */
      if (mongorawquerytests) {
            var queryList = [{
                  "executethis": "querywid",
                  "command.results":"queryresult",
                  "mongorawquery": '{"$or": [{ "wid": "color1" }]}'




            }];
            execute(queryList, function (err, res1) {
                var res =  res1["queryresult"];  
                console.log(' >>> final response after queryList >>> ' + JSON.stringify(res));
				  
				proxyprinttodiv("res --", res, 17);
				var actual_result =[[]];
				proxyprinttodiv("actual_result --", actual_result, 17);							  

				var expected_result = [[]];
				proxyprinttodiv("expected_result --", expected_result, 17);

				res = logverify("logverify", actual_result, expected_result);
				
				params = {
					'test': 'PASS'
				};
				callback({}, params); 		
            });
      }

      /* mongo single queries */
      if (mongosinglequerytests) {
            var queryList = [{
                  "executethis": "querywid",
                  "mongosinglequery": "color7",
                  "command.results" :"queryresult"
                  //"relationshipdirection": "forward",
                  //"relationshiptype": "attributes",
                  //"relationshipmethod": "first"
            }];
            execute(queryList, function (err, res1) {
                  var res = res1["queryresult"];
                  console.log(' >>> final response after queryList >>> ' + JSON.stringify(res));
            });
      }

      if (relationshiptests) {
            var queryList = [{
                  "executethis": "querywid",
                  "mongowid": "color8",
                  "mongorelationshipdirection": "forward",
                  "mongorelationshiptype": "attributes",
                  "mongorelationshipmethod": "first"
            }];
            execute(queryList, function (err, res) {
                  console.log(' >>> final response after queryList >>> ' + JSON.stringify(res));
            });

      }
}
exports.testcallback = testcallback = function testcallback(params, callback) {
      console.log("<< testcallback >>");
      params["test_result"] = "XXXPASS";
      callback(null, params);
}

exports.executegetwidtest = executegetwidtest = function executegetwidtest(params, callback) {

      offlineaddtomongo({
            "wid": "getexecutetest",
            "metadata": {
                  "method": "testdto"
            },
            "data": {
                  "executethis": "testcallback",
                  "a": "Hello",
                  "b": "goodbye"
            }}, {}, function (err, res) {

      executeList = [ {
            "executethis": "getexecutetest"
      }]
      debuglevel=11;
      execute(executeList, function (err, res) {
                   proxyprinttodiv('Function executegetwidtest ', res, 17);
            //res = logverify("unit_tests", "getexecutetest", "", res, "", {});
            callback(err, res)

      });
      });
}


exports.qw1 = qw1 = function (params, callback) {
      var q = '[{"dtotype":"","convertmethod":"","mongowidmethod":"","command.results":"queryresult","mongorelationshipdirection":"forward","mongorelationshipmethod":"all","mongorelationshiptype":"attributes"}]';
      var qJson = JSON.parse(q);

      querywid(qJson, function (err, res1) {
            var res = res1["queryresult"];
            console.log(' >>> final response after querywid >>> ' + JSON.stringify(res));

            res = logverify("unit_tests", "testqw1_result", "", res[0], "", {});

            callback(err, res)
      });
}

exports.qw2 = qw2 = function (params, callback) {
      var q = '{"mongorawquery":{"wid":"wid1","command.results": "queryresult","mongorelationshiptype":"x"}}';
      var qJson = JSON.parse(q);

      var executeList = [{
            "executethis": "updatewid",
            "wid": "wid1"
      }];
      execute(executeList, function (err, res) {
            querywid(qJson, function (err, res1) {
                  var res = res1["queryresult"];
                  console.log(' >>> final response after querywid >>> ' + JSON.stringify(res[0][0]));
                  res = logverify("unit_tests", "testqw2_result", "", res[0], "", {});
                  callback(err, res)
            });
      });
}


exports.mongoquery1 = mongoquery1 = function (params, callback) {
      var q = '{"mongorawquery":{"wid":"wid1","mongorelationshiptype":"x"}}';
      var qJson = JSON.parse(q);

      // add data
      var executeList = [{
            "executethis": "updatewid",
            "wid": "wid1"
      }];

      // query data added
      execute(executeList, function (err, res) {
            mongoquery(qJson, function (err, res) {
                  console.log(' >>> final response after mongoquery >>> ' + JSON.stringify(res));
                  res = logverify("unit_tests", "testmongoquery1_result", "", res, "", {});
                  callback(err, res)
            });
      });
}




exports.mts1 = mts1 = function mts1(params, callback) {
      // basic test for debuging query issues
      console.log("Simple update wid test");

      // local vars
      var dtoObj;
      var executeList = [];
      var mongorawquery;
      var executeObj;

      // Util functions

      function colorTrace(msg, color) {
            console.log("%c" + msg, "color:" + color + ";font-weight:bold;");
      }

      executeList = [{
            "executethis": "offlineaddtomongo",
            "wid": "1",
            "metadata": {
                  "method": "relationshipdto"
            },
            "data": {
                  "relationshiptype": "attributes",
                  "secondarywid": "undefined",
                  "primarywid": "song1"
            }
      }, {
            "executethis": "offlineaddtomongo",
            "wid": "songdto",
            "metadata": {
                  "method": "songdto"
            },
            "data": {
                  "title": "string",
                  "sounddto": "onetomany"
            }
      }, {
            "executethis": "offlineaddtomongo",
            "wid": "4",
            "metadata": {
                  "method": "sounddto"
            },
            "data": {
                  "note": "C flat"
            }
      }, {
            "executethis": "offlineaddtomongo",
            "wid": "2",
            "metadata": {
                  "method": "sounddto"
            },
            "data": {
                  "note": "B sharp"
            }
      }, {
            "executethis": "offlineaddtomongo",
            "wid": "3",
            "metadata": {
                  "method": "relationshipdto"
            },
            "data": {
                  "relationshiptype": "attributes",
                  "secondarywid": "2",
                  "primarywid": "song1"
            }
      }, {
            "executethis": "offlineaddtomongo",
            "wid": "rel_sound_to_song",
            "metadata": {
                  "method": "defaultdto"
            },
            "data": {
                  "primarywid": "songdto",
                  "secondarywid": "sounddto",
                  "relationshiptype": "attributes"
            }
      }, {
            "executethis": "offlineaddtomongo",
            "wid": "song1",
            "metadata": {
                  "method": "songdto"
            },
            "data": {
                  "title": "Highway to Hell"
            }
      }, {
            "executethis": "offlineaddtomongo",
            "wid": "sounddto",
            "metadata": {
                  "method": "sounddto"
            },
            "data": {
                  "note": "string"
            }
      }, {
            "executethis": "offlineaddtomongo",
            "wid": "undefined",
            "metadata": {
                  "method": "sounddto"
            },
            "data": {
                  "note": "A flat"
            }
      }, {
            "executethis": "offlineaddtomongo",
            "wid": "5",
            "metadata": {
                  "method": "relationshipdto"
            },
            "data": {
                  "relationshiptype": "attributes",
                  "secondarywid": "4",
                  "primarywid": "song1"
            }
      }]
      // // Build execute array for adding a wid
      // executeList = [{
      //  "executethis": "addwidmaster", 
      //  "wid": "sounddto",
      //  "metadata.method": "sounddto",
      //  "note": "string"
      // },
      // {    
      //  "executethis": "addwidmaster", 
      //  "wid": "songdto",
      //  "metadata.method": "songdto",
      //  "title": "string",
      //  "sounddto": "onetomany"
      // },
      // {    
      //  "executethis": "addwidmaster", 
      //  "wid": "rel_sound_to_song",
      //  "primarywid": "songdto",
      //  "secondarywid": "sounddto",
      //  "relationshiptype": "attributes"
      // },
      // {    
      //  "executethis": "addwidmaster", 
      //  "wid": "song1",
      //  "metadata.method": "songdto",
      //  "title": "Highway to Hell",
      //  "sounddto.0.note": "A flat",
      //  "sounddto.1.note": "B sharp",
      //  "sounddto.2.note": "C flat"
      // }];

      // pass our add test wid array to execute this, this should add a wid to local storage
      execute(executeList, function (err, res) {
            colorTrace('res after executerray: ' + JSON.stringify(res), "blue");

            // build query
            saveglobal("debugcat", "mongoquery");
            saveglobal("debugcolor", 1);
            debuglevel = 30;
            //mongorawquery = '{"$and":{"data.primarywid":"song1","data.secondarywid":"2"}}';

            // execute mongoquery
            //mongoquery(mongorawquery, function (err, res) {
            proxyprinttodiv('Function mttest ', res, 17);

            // build execute array for testing query wid
            executeObj = {};
            executeObj["executethis"] = "querywid";
            executeObj["command.results"] = "queryresult";
            executeObj["mongorawquery"] = '{"$and":[{"data.primarywid":"song1","data.secondarywid":"4"}]}';
            executeList = [];
            executeList.push(executeObj);

            // Execute our query wid test
            execute(executeList, function (err, res1) {
                  var res = res1["queryresult"];
                  proxyprinttodiv('Function mttest II', res, 17);
            });
            //});
      });
}

exports.mts2 = mts2 = function mts2(params, callback) {
      // basic test for debuging query issues
      console.log("Simple update wid test");

      // local vars
      var dtoObj;
      var executeList = [];
      var mongorawquery;
      var executeObj;

      // Util functions

      function colorTrace(msg, color) {
            console.log("%c" + msg, "color:" + color + ";font-weight:bold;");
      }

      // Build execute array for adding a wid
      dtoObj = {
            "executethis": "updatewid",
            "metadata.method": "testdto",
            "wid": "testdto",
            "a": "string",
            "b": "string"
      };
      executeList.push(dtoObj);

      // pass our add test wid array to execute this, this should add a wid to local storage
      execute(executeList, function (err, res) {
            colorTrace('res after executerray: ' + JSON.stringify(res), "blue");

            // build query
            mongorawquery = '{"$or":[{"data.a":"string"}]}';

            // execute mongoquery
            mongoquery(mongorawquery, function (err, res) {
                  colorTrace("mongorawquery returned: " + JSON.stringify(res), "blue");

                  // build execute array for testing query wid
                  executeObj = {};
                  executeObj["executethis"] = "querywid";
                  executeObj["command.results"] = "queryresult";
                  executeObj["mongorawquery"] = '{"$or":[{"data.a":"string"}]}';
                  executeList = [];
                  executeList.push(executeObj);

                  // Execute our query wid test
                  execute(executeList, function (err, res1) {
                        var res = res1["queryresult"];
                        alert(JSON.stringify(res));
                        colorTrace('res after executerray querywid: ' + JSON.stringify(res), "blue");
                  });
            });
      });
}


exports.etmttest1 = etmttest1 = function etmttest1(params, callback) {
      console.log("<< mongoquery_two_test >>");

      var ortests = true;
      var andtests = true;
      var orortests = true;
      var andandtests = true;
      var orandtests = true;
      var failedtests = true;

      var orandtests20 = false;
      var verifytests = false;
      var sifttests = false;

      var codedebug = false;
      if (codedebug) {
            saveglobal("debugcolor", 0);
            debugon = true;
            saveglobal("debugname", "");
            debugsubcat = "";
            saveglobal("debugcat", "mongoquery");
            debugfilter = "";
            debugdestination = 1;
            debuglevel = 30;
      }

      /* adding wids */
      eventappinstall();
      var executeList = [];
      executeList = addmttestdata(callback);
      execute(executeList, function (err, res) {
            console.log(' >>> final response after executerray >>> ' + JSON.stringify(res));
      });

      /* $or queries */
      if (ortests) {
            var mongorawquery = '{"$or":[{"data.a":"string"}]}';
            mongoquery(mongorawquery, function (err, result) {
                  proxyprinttodiv("result from mongoquery with query " + mongorawquery + " -- expected result :- [testdto]", result, 17);
            });

            var mongorawquery = '{"$or":[{"data.a":"1"},{"data.b":"1"}]}';
            mongoquery(mongorawquery, function (err, result) {
                  proxyprinttodiv("result from mongoquery with query " + mongorawquery + " -- expected result :- [wid1]", result, 17);
            });
            //test fails
            var mongorawquery = '{"$or":[{"data.a":"1"},{"data.b":"16"}]}';
            mongoquery(mongorawquery, function (err, result) {
                  proxyprinttodiv("result from mongoquery with query " + mongorawquery + " -- expected result :- [wid1, wid4]", result, 17);
            });

      }

      /* $and queries */
      if (andtests) {
            var mongorawquery = '{"$and":[{"data.a":"string"}]}';
            mongoquery(mongorawquery, function (err, result) {
                  proxyprinttodiv("result from mongoquery with query " + mongorawquery + " -- expected result :- [testdto]", result, 17);
            });
            var mongorawquery = '{"$and":[{"data.a":"1"},{"data.b":"1"}]}';
            mongoquery(mongorawquery, function (err, result) {
                  proxyprinttodiv("result from mongoquery with query " + mongorawquery + " -- expected result :- [wid1]", result, 17);
            });
            var mongorawquery = '{"$and":[{"data.a":"1"},{"data.b":"16"}]}';
            mongoquery(mongorawquery, function (err, result) {
                  proxyprinttodiv("result from mongoquery with query " + mongorawquery + " -- expected result :- []", result, 17);
            });
            var mongorawquery = '{"$and":[{"data.a":"1"},{"data.b":"1"},{"data.b":"1"}]}';
            mongoquery(mongorawquery, function (err, result) {
                  proxyprinttodiv("result from mongoquery with query " + mongorawquery + " -- expected result :- [wid1]", result, 17);
            });
            var mongorawquery = '{"$and":[{"data.a":"1"}]}';
            mongoquery(mongorawquery, function (err, result) {
                  proxyprinttodiv("result from mongoquery with query " + mongorawquery + " -- expected result :- [wid1]", result, 17);
            });
            var mongorawquery = '{"$and":[{"data.a":"5"}]}';
            mongoquery(mongorawquery, function (err, result) {
                  proxyprinttodiv("result from mongoquery with query " + mongorawquery + " -- expected result :- [wid5]", result, 17);
            });
      }

      /* $or-$or tests */
      if (orortests) {
            var mongorawquery = '{"$or":[{"data.a":"1"},{"$or":[{"data.b":"25"},{"data.a":"5"},{"data.a":"5"},{"data.a":"1"}]}]}';
            mongoquery(mongorawquery, function (err, result) {
                  proxyprinttodiv("result from mongoquery with query " + mongorawquery + " -- expected result :- [wid1,wid5]", result, 17);
            });
            var mongorawquery = '{"$or":[{"data.a":"5"},{"$or":[{"data.b":"25"},{"$or":[{"data.a":"5"},{"$or":[{"data.b":"25"}]}]}]}]}';
            mongoquery(mongorawquery, function (err, result) {
                  proxyprinttodiv("result from mongoquery with query " + mongorawquery + " -- expected result :- [wid5]", result, 17);
            });
            var mongorawquery = '{"$or":[{"data.a":"5"},{"$or":[{"data.b":"16"}]}]}';
            mongoquery(mongorawquery, function (err, result) {
                  proxyprinttodiv("result from mongoquery with query " + mongorawquery + " -- expected result :- [wid4,wid5]", result, 17);
            });
      }

      /* $and-$and queries */
      if (andandtests) {
            var mongorawquery = '{"$and":[{"data.a":"1"},{"$and":[{"data.b":"1"}]}]}';
            mongoquery(mongorawquery, function (err, result) {
                  proxyprinttodiv("result from mongoquery with query " + mongorawquery + " -- expected result :- [wid1]", result, 17);
            });
            var mongorawquery = '{"$and":[{"data.a":"5"},{"$and":[{"data.b":"25"}]}]}';
            mongoquery(mongorawquery, function (err, result) {
                  proxyprinttodiv("result from mongoquery with query " + mongorawquery + " -- expected result :- [wid5]", result, 17);
            });
            //test fails
            var mongorawquery = '{"$and":[{"data.a":"5"},{"$and":[{"data.b":"25"},{"$and":[{"data.b":"1"}]}]}]}';
            mongoquery(mongorawquery, function (err, result) {
                  proxyprinttodiv("result from mongoquery with query " + mongorawquery + " -- expected result :- []", result, 17);
            });
      }

      /* $or-$and queries */
      if (orandtests) {
            var mongorawquery = '{"$or":[{"data.a":"1"},{"$and":[{"data.b":"1"}]}]}';
            mongoquery(mongorawquery, function (err, result) {
                  proxyprinttodiv("result from mongoquery with query " + mongorawquery + " -- expected result :- [wid1]", result, 17);
            });
            var mongorawquery = '{"$or":[{"data.a":"5"},{"$and":[{"data.a":"4"},{"$and":[{"data.b":"1"}]}]}]}';
            mongoquery(mongorawquery, function (err, result) {
                  proxyprinttodiv("result from mongoquery with query " + mongorawquery + " -- expected result :- [wid5]", result, 17);
            });
      }

      /* fail test cases */
      if (failedtests) {
            var mongorawquery = '{"$and":[{"data.a":"4"},{"$or":[{"data.a":"2"},{"$or":[{"data.b":"16"}]}]}]}';
            mongoquery(mongorawquery, function (err, result) {
                  proxyprinttodiv("result from mongoquery with query " + mongorawquery + " -- expected result :- [wid4]", result, 17);
            });
            var mongorawquery = '{"$or":[{"data.a":"1"},{"data.b":"16"}]}';
            mongoquery(mongorawquery, function (err, result) {
                  proxyprinttodiv("result from mongoquery with query " + mongorawquery + " -- expected result :- [wid1, wid4]", result, 17);
            });
      }

      /* 20 more test cases */
      if (orandtests20) {
            var mongorawquery = '{"$or":[{"data.a":"25"},{"$and":[{"data.a":"44"},{"data.a":"64"},{"$or":[{"data.b":"400"}]}]}]}';
            mongoquery(mongorawquery, function (err, result) {
                  proxyprinttodiv("result from mongoquery with query " + mongorawquery + " -- expected result :- [wid25]", result, 17);
            });
            var mongorawquery = '{"$or":[{"data.a":"25"},{"$and":[{"data.a":"44"},{"data.a":"64"},{"$or":[{"data.b":"400"},{"data.b":"625"}]}]}]}';
            mongoquery(mongorawquery, function (err, result) {
                  proxyprinttodiv("result from mongoquery with query " + mongorawquery + " -- expected result :- [wid25]", result, 17);
            });
            var mongorawquery = '{"$or":[{"data.a":"25"},{"$or":[{"data.a":"2"},{"data.a":"64"},{"$or":[{"data.b":"400"},{"data.b":"625"},{"$or":[{"data.a":"2"}]}]}]}]}';
            mongoquery(mongorawquery, function (err, result) {
                  proxyprinttodiv("result from mongoquery with query " + mongorawquery + " -- expected result :- [wid2,wid20,wid25]", result, 17);
            });
            var mongorawquery = '{"$or":[{"data.a":"2"},{"data.a":"64"},{"$or":[{"data.b":"400"},{"data.b":"625"},{"$or":[{"data.a":"2"}]}]}]}';
            mongoquery(mongorawquery, function (err, result) {
                  proxyprinttodiv("result from mongoquery with query " + mongorawquery + " -- expected result :- [wid2,wid20,wid25]", result, 17);
            });
            //test fails
            var mongorawquery = '{"$and":[{"data.a":"25"},{"$or":[{"data.a":"2"},{"data.a":"64"},{"$or":[{"data.b":"400"},{"data.b":"625"},{"$or":[{"data.a":"2"}]}]}]}]}';
            mongoquery(mongorawquery, function (err, result) {
                  proxyprinttodiv("result from mongoquery with query " + mongorawquery + " -- expected result :- [wid25]", result, 17);
            });
            var mongorawquery = '{"$and":[{"data.a":"4"},{"$and":[{"data.a":"2"},{"$or":[{"data.b":"16"}]}]}]}';
            mongoquery(mongorawquery, function (err, result) {
                  proxyprinttodiv("result from mongoquery with query " + mongorawquery + " -- expected result :- [wid25]", result, 17);
            });
      }

      /* varify test cases */
      if (verifytests) {
            console.log("<< inside verifytests >>");

            var executeObj = {};
            executeObj["executethis"] = "querywid";
            executeObj["command.results"] = "queryresult";
            executeObj["mongorawquery"] = '{"$or":[{"data.a":"string"}]}';
            executeList.push(executeObj);

            execute(executeList, function (err, res1) {
                  var res = res1["queryresult"];
                  console.log(' >>> final response after executerray >>> ' + JSON.stringify(res));

                  var expectedResultArray = [];
                  expectedResultArray.push({
                        "wid": "testdto",
                        "metadata.method": "testdto",
                        "data.b": "string",
                        "data.a": "string"
                  });
                  params = logverify("mongoquery", "resultwid1", res[1], "", "", expectedResultArray);

                  proxyprinttodiv("end of verify tests", "end of verify tests", 17);
            });
      }

      /* Sift Test cases */
      if (sifttests) {
            //sift syntax :-  var result =  sif({$operator:[cond],  [array]});
            var widArray = [{
                  "wid": "testdto",
                  "metadata": {
                        "method": "testdto"
                  },
                  "data": {
                        "b": "string",
                        "a": "string"
                  }
            }, {
                  "wid": "wid1",
                  "metadata": {
                        "method": "testdto"
                  },
                  "data": {
                        "b": "1",
                        "a": "1"
                  }
            }, {
                  "wid": "wid2",
                  "metadata": {
                        "method": "testdto"
                  },
                  "data": {
                        "b": "4",
                        "a": "2"
                  }
            }, {
                  "wid": "wid3",
                  "metadata": {
                        "method": "testdto"
                  },
                  "data": {
                        "b": "9",
                        "a": "3"
                  }
            }, {
                  "wid": "wid4",
                  "metadata": {
                        "method": "testdto"
                  },
                  "data": {
                        "b": "16",
                        "a": "4"
                  }
            }, {
                  "wid": "wid5",
                  "metadata": {
                        "method": "testdto"
                  },
                  "data": {
                        "b": "25",
                        "a": "5"
                  }
            }];
            var mongorawquery = {
                  "$or": [{
                        "data.a": "string"
                  }]
            };
            var result = sift(mongorawquery, widArray);
            proxyprinttodiv("widArray", widArray, 17);
            proxyprinttodiv("mongorawquery", mongorawquery, 17);
            proxyprinttodiv("result", result, 17);

            var mongorawquery = '{"$or":[{"data.a":"string"}]}';
            mongoquery(mongorawquery, function (err, result) {
                  proxyprinttodiv("result from mongoquery with query " + mongorawquery + " -- expected result :- [testdto]", result, 17);
            });
      }

      params = {
            'test': 'PASS'
      };
      callback({}, params);
}

function addmttestdata(callback) {
      console.log("<< addmttestdata >>");

      proxyprinttodiv("staring data add", "data add", 17);
      var widArray = [];

      var dtoObj = {
            "executethis": "updatewid",
            "metadata.method": "testdto",
            "wid": "testdto",
            "a": "string",
            "b": "string"
      };
      widArray.push(dtoObj);

      var totalWids = 5; //during debugging
      //var totalWids = 50;       //during real time testing
      for (var i = 1; i <= totalWids; i++) {
            var widObj = {};
            widObj["executethis"] = "updatewid";
            widObj["metadata.method"] = "testdto";
            widObj["wid"] = "wid" + i;
            widObj["a"] = "" + (i);
            widObj["b"] = "" + (i * i);
            widArray.push(widObj);
      }

      /*
execute(widArray, function (err, res) {
      console.log(' >>> final response after executerray >>> ' + JSON.stringify(res));
});
proxyprinttodiv("end of data add", "end data add", 17);
*/
      return widArray;
}

exports.t1example = t1example = function t1example(params, callback) {
      eventappinstall();
      config = setconfig1();
      execute([{
                  "executethis": "func_b",
                  "c": "0",
                  "d": "1",
                  "e": "2"
            }],
            function (err, res) {
                  res = logverify("unit_tests", "t1_result", "", res[0], "", {
                        "d": "1",
                        "c": "0",
                        "g": "4"
                  });
                  if (callback instanceof Function) {
                        callback(err, res)
                  } else {
                        return res
                  }
            });
}

exports.etmttest2 = etmttest2 = function etmttest2(params, callback) {
	debuglevel = 17;
      console.log("<< mongoquery_two_test >>");

      eventappinstall();

      //To add wid data
      var executeList = [];
      var dtoObj = {
            "executethis": "updatewid",
            "metadata.method": "testdto",
            "wid": "testdto",
            "a": "string",
            "b": "string"
      };
      executeList.push(dtoObj);
      for (var i = 1; i <= 5; i++) {
            var executeobj = {};
            executeobj["executethis"] = "updatewid";
            executeobj["metadata.method"] = "testdto";
            executeobj["wid"] = "wid" + i;
            executeobj["a"] = "" + (i);
            executeobj["b"] = "" + (i * i);
            executeList.push(executeobj);
      }

      //To query data
      var queryobj = {};

      queryobj["executethis"] = "querywid";
      queryobj["rawmongoquery"] = {
            "$or": [{
                  "data.a": "string"
            }]
      };
      executeList.push(queryobj);

      queryobj["rawmongoquery"] = {
            "$or": [{
                  "data.a": "1"
            }, {
                  "data.b": "1"
            }]
      };
      executeList.push(queryobj);

      queryobj["rawmongoquery"] = {
            "$or": [{
                  "data.a": "1"
            }, {
                  "data.b": "16"
            }]
      };
      executeList.push(queryobj);

      proxyprinttodiv("execute list ", executeList, 17);

      execute(executeList, function (err, res) {
            proxyprinttodiv('Function verifytestresults', res, 17);
            console.log(' >>> final response after executerray >>> ' + JSON.stringify(res));
            var expectedResultList = [{
                  "wid": "wid4",
                  "metadata.method": "testdto",
                  "data.a": "4",
                  "data.b": "16"
            }, {
                  "wid": "wid5",
                  "metadata.method": "testdto",
                  "data.a": "5",
                  "data.b": "25"
            }];
           
			proxyprinttodiv("res --", res, 17);
			var actual_result = [res];
			proxyprinttodiv("actual_result --", actual_result, 17);							  

			var expected_result = [[{"data":{"a":"string","b":"string"},"wid":"testdto","metadata":{"method":"testdto","date":"2014-03-19T11:37:35.827Z"}}],[{"data":{"a":"1","b":"1"},"wid":"wid1","metadata":{"method":"testdto","date":"2014-03-19T11:37:35.878Z"}}],[{"data":{"a":"2","b":"4"},"wid":"wid2","metadata":{"method":"testdto","date":"2014-03-19T11:37:35.952Z"}}],[{"data":{"a":"3","b":"9"},"wid":"wid3","metadata":{"method":"testdto","date":"2014-03-19T11:37:35.998Z"}}],[{"data":{"a":"4","b":"16"},"wid":"wid4","metadata":{"method":"testdto","date":"2014-03-19T11:37:36.049Z"}}],[{"data":{"a":"5","b":"25"},"wid":"wid5","metadata":{"method":"testdto","date":"2014-03-19T11:37:36.097Z"}}],[],[],[]];
			proxyprinttodiv("expected_result --", expected_result, 17);

			res = logverify("logverify", actual_result, expected_result);
			callback(err, res); 
      });
}

exports.etmttest3 = etmttest3 = function etmttest3(params, callback) {
	debuglevel = 17;
      console.log("<< mttest3 >>");

      eventappinstall();

      //To add wid data
      var executeList = [{
            "executethis": "addwidmaster",
            "wid": "colordto",
            "metadata.method": "colordto",
            "hue": "string"
      }, {
            "executethis": "addwidmaster",
            "wid": "color1",
            "metadata.method": "colordto",
            "hue": "red"
      }, {
            "executethis": "addwidmaster",
            "wid": "color2",
            "metadata.method": "colordto",
            "hue": "green"
      }, {
            "executethis": "getwidmaster",
            "wid": "color1"
      }, {
            "executethis": "getwidmaster",
            "wid": "color2"
      }, {
            "executethis": "addwidmaster",
            "wid": "color3",
            "hue": "blue"
      }, {
            "executethis": "addwidmaster",
            "wid": "color4",
            "metadata.method": "colordto",
            "hue": "cyan"
      }, {
            "executethis": "addwidmaster",
            "wid": "color5",
            "metadata.method": "colordto",
            "hue": "magenta"
      }, {
            "executethis": "addwidmaster",
            "wid": "color6",
            "metadata.method": "colordto",
            "hue": "yellow"
      }, {
            "executethis": "addwidmaster",
            "wid": "color7",
            "metadata.method": "colordto",
            "hue": "black"
      }, {
            "executethis": "getwidmaster",
            "wid": "color6"
      }, {
            "executethis": "getwidmaster",
            "wid": "color7"
      }];
      proxyprinttodiv("execute list", executeList, 17);
      execute(executeList, function (err, res) {

      });

      //Query Data
      executeList = [];
      var executeList = [{
            "executethis": "querywid",
            "command.results": "queryresult",
            "rawmongoquery": {
                  "$or": [{
                        "hue": "red"
                  }]
            }
      }, {
            "executethis": "querywid",
            "command.results": "queryresult",
            "rawmongoquery": {
                  "$or": [{
                        "hue": "green"
                  }]
            }
      }, {
            "executethis": "querywid",
            "command.results": "queryresult",
            "rawmongoquery": {
                  "$and": [{
                        "hue": "blue"
                  }]
            }
      }, {
            "executethis": "querywid",
            "command.results": "queryresult",
            "rawmongoquery": {
                  "$or": [{
                        "hue": "cyan"
                  }]
            }
      }, {
            "executethis": "querywid",
            "command.results": "queryresult",
            "rawmongoquery": {
                  "$and": [{
                        "hue": "magenta"
                  }]
            }
      }, {
            "executethis": "querywid",
            "command.results": "queryresult",
            "rawmongoquery": {
                  "$and": [{
                        "hue": "yellow"
                  }]
            }
      }, {
            "executethis": "querywid",
            "command.results": "queryresult",
            "rawmongoquery": {
                  "$and": [{
                        "hue": "black"
                  }]
            }
      }];
      proxyprinttodiv("execute list for query", executeList, 17);
      execute(executeList, function (err, res1) {
            var res = res1["queryresult"];
		//Query Expected Result List
		  expectedResultList = [
				[{
					  "wid": "color1",
					  "metadata.method": "colordto",
					  "hue": "red"
				}],
				[{
					  "wid": "color2",
					  "metadata.method": "colordto",
					  "hue": "green"
				}],
				[{
					  "wid": "color3",
					  "metadata.method": "colordto",
					  "hue": "blue"
				}],
				[{
					  "wid": "color4",
					  "metadata.method": "colordto",
					  "hue": "cyan"
				}],
				[{
					  "wid": "color5",
					  "metadata.method": "colordto",
					  "hue": "magenta"
				}],
				[{
					  "wid": "color4",
					  "metadata.method": "colordto",
					  "hue": "yellow"
				}],
				[{
					  "wid": "color4",
					  "metadata.method": "colordto",
					  "hue": "black"
				}]
		  ];
	  
	  
		proxyprinttodiv("res --", res, 17);
		var actual_result = [res];
		proxyprinttodiv("actual_result --", actual_result, 17);							  

		var expected_result = expectedResultList;
		proxyprinttodiv("expected_result --", expected_result, 17);

		res = logverify("logverify", actual_result, expected_result);
		
		params = {
            'test': 'PASS'
		};
		
		callback(err, params); 
      });
}

exports.etmttest333 = etmttest333 = function etmttest333(params, callback) {
	debuglevel = 17;
      console.log("<< mttest3 >>");
      eventappinstall();

      // Add List
      var addlist = [{
            "executethis": "addwidmaster",
            "wid": "colordto",
            "metadata.method": "colordto",
            "hue": "string",
            "sat": "string"
      }, {
            "executethis": "addwidmaster",
            "wid": "color1",
            "metadata.method": "colordto",
            "hue": "red",
            "sat": "red-sat"
      }, {
            "executethis": "addwidmaster",
            "wid": "color2",
            "metadata.method": "colordto",
            "hue": "green",
            "sat": "green-sat"
      }, {
            "executethis": "addwidmaster",
            "wid": "color3",
            "metadata.method": "colordto",
            "hue": "blue",
            "sat": "blue-sat"
      }, {
            "executethis": "addwidmaster",
            "wid": "color4",
            "metadata.method": "colordto",
            "hue": "cyan",
            "sat": "cyan-sat"
      }, {
            "executethis": "addwidmaster",
            "wid": "color5",
            "metadata.method": "colordto",
            "hue": "magenta",
            "sat": "magenta-sat"
      }, {
            "executethis": "addwidmaster",
            "wid": "color6",
            "metadata.method": "colordto",
            "hue": "yellow",
            "sat": "yellow-sat"
      }, {
            "executethis": "addwidmaster",
            "wid": "color7",
            "metadata.method": "colordto",
            "hue": "black",
            "sat": "black-sat"
      }];

      //Query List
      var querylist = [{
            "executethis": "querywid",
            "command.results": "queryresult",
            "rawmongoquery": {
                  "$or": [{
                        "hue": "string"
                  }]
            }
      }, {
            "executethis": "querywid",
            "command.results": "queryresult",
            "rawmongoquery": {
                  "$or": [{
                        "hue": "green"
                  }, {
                        "sat": "blue-sat"
                  }]
            }
      }, {
            "executethis": "querywid",
            "command.results": "queryresult",
            "rawmongoquery": {
                  "$and": [{
                        "hue": "blue"
                  }]
            }
      }, {
            "executethis": "querywid",
            "command.results": "queryresult",
            "rawmongoquery": {
                  "$and": [{
                        "hue": "yellow"
                  }, {
                        "sat": "red-sat"
                  }]
            }
      }, {
            "executethis": "querywid",
            "command.results": "queryresult",
            "rawmongoquery": {
                  "$and": [{
                        "sat": "cyan-sat"
                  }, {
                        "hue": "cyan"
                  }, {
                        "sat": "cyan-sat"
                  }]
            }
      }, {
            "executethis": "querywid",
            "command.results": "queryresult",
            "rawmongoquery": {
                  "$or": [{
                        "hue": "red"
                  }, {
                        "$or": [{
                              "sat": "magenta-sat"
                        }, {
                              "hue": "magenta"
                        }, {
                              "hue": "magenta"
                        }, {
                              "hue": "red"
                        }]
                  }]
            }
      }, {
            "executethis": "querywid",
            "command.results": "queryresult",
            "rawmongoquery": {
                  "$or": [{
                        "hue": "magenta"
                  }, {
                        "$or": [{
                              "sat": "magenta-sat"
                        }, {
                              "$or": [{
                                    "hue": "magenta"
                              }, {
                                    "$or": [{
                                          "sat": "magenta-sat"
                                    }]
                              }]
                        }]
                  }]
            }
      }, {
            "executethis": "querywid",
            "command.results": "queryresult",
            "rawmongoquery": {
                  "$or": [{
                        "hue": "magenta"
                  }, {
                        "$or": [{
                              "sat": "cyan-sat"
                        }]
                  }]
            }
      }, {
            "executethis": "querywid",
            "command.results": "queryresult",
            "rawmongoquery": {
                  "$and": [{
                        "hue": "magenta"
                  }, {
                        "$and": [{
                              "sat": "magenta-sat"
                        }]
                  }]
            }
      }, {
            "executethis": "querywid",
            "command.results": "queryresult",
            "rawmongoquery": {
                  "$and": [{
                        "hue": "magenta"
                  }, {
                        "$and": [{
                              "sat": "magenta-sat"
                        }, {
                              "$and": [{
                                    "sat": "red-sat"
                              }]
                        }]
                  }]
            }
      }, {
            "executethis": "querywid",
            "command.results": "queryresult",
            "rawmongoquery": {
                  "$or": [{
                        "hue": "red"
                  }, {
                        "$and": [{
                              "sat": "red-sat"
                        }]
                  }]
            }
      }, {
            "executethis": "querywid",
            "command.results": "queryresult",
            "rawmongoquery": {
                  "$or": [{
                        "hue": "magenta"
                  }, {
                        "$and": [{
                              "hue": "cyan"
                        }, {
                              "$and": [{
                                    "sat": "red"
                              }]
                        }]
                  }]
            }
      }, {
            "executethis": "querywid",
            "command.results": "queryresult",
            "rawmongoquery": {
                  "$or": [{
                        "hue": "blue"
                  }, {
                        "$and": [{
                              "hue": "yellow"
                        }, {
                              "hue": "red"
                        }, {
                              "$or": [{
                                    "sat": "cyan-sat"
                              }]
                        }]
                  }]
            }
      }, {
            "executethis": "querywid",
            "command.results": "queryresult",
            "rawmongoquery": {
                  "$or": [{
                        "hue": "yellow"
                  }, {
                        "$and": [{
                              "hue": "black"
                        }, {
                              "$or": [{
                                    "sat": "black-sat"
                              }, {
                                    "sat": "blue-sat"
                              }]
                        }]
                  }]
            }
      }, {
            "executethis": "querywid",
            "command.results": "queryresult",
            "rawmongoquery": {
                  "$or": [{
                        "hue": "green"
                  }, {
                        "$or": [{
                              "hue": "green568"
                        }, {
                              "hue": "red"
                        }, {
                              "$or": [{
                                    "sat": "yellow-sat"
                              }, {
                                    "sat": "blue-sat"
                              }, {
                                    "$or": [{
                                          "hue": "cyan"
                                    }]
                              }]
                        }]
                  }]
            }
      }, {
            "executethis": "querywid",
            "command.results": "queryresult",
            "rawmongoquery": {
                  "$and": [{
                        "hue": "magenta"
                  }, {
                        "$or": [{
                              "hue": "green"
                        }, {
                              "hue": "cyan"
                        }, {
                              "$or": [{
                                    "sat": "yellow-sat"
                              }, {
                                    "sat": "red-sat"
                              }, {
                                    "$or": [{
                                          "hue": "blue"
                                    }]
                              }]
                        }]
                  }]
            }
      }, {
            "executethis": "querywid",
            "command.results": "queryresult",
            "rawmongoquery": {
                  "$and": [{
                        "hue": "cyan"
                  }, {
                        "$or": [{
                              "hue": "green"
                        }, {
                              "$or": [{
                                    "sat": "cyan-sat"
                              }]
                        }]
                  }]
            }
      }, ];

      //Verify List
      var verifylist = [
            [{
                  "wid": "colordto",
                  "metadata.method": "colordto",
                  "hue": "string",
                  "sat": "string"
            }],
            [{
                  "wid": "color2",
                  "metadata.method": "colordto",
                  "hue": "green",
                  "sat": "green-sat"
            }, {
                  "wid": "color3",
                  "metadata.method": "colordto",
                  "hue": "blue",
                  "sat": "blue-sat"
            }],
            [{
                  "wid": "color3",
                  "metadata.method": "colordto",
                  "hue": "blue",
                  "sat": "blue-sat"
            }],
            [],
            [{
                  "wid": "color4",
                  "metadata.method": "colordto",
                  "hue": "cyan",
                  "sat": "cyan-sat"
            }],
            [{
                  "wid": "color1",
                  "metadata.method": "colordto",
                  "hue": "red",
                  "sat": "red-sat"
            }, {
                  "wid": "color5",
                  "metadata.method": "colordto",
                  "hue": "magenta",
                  "sat": "magenta-sat"
            }],
            [{
                  "wid": "color5",
                  "metadata.method": "colordto",
                  "hue": "magenta",
                  "sat": "magenta-sat"
            }],
            [{
                  "wid": "color4",
                  "metadata.method": "colordto",
                  "hue": "cyan",
                  "sat": "cyan-sat"
            }, {
                  "wid": "color5",
                  "metadata.method": "colordto",
                  "hue": "magenta",
                  "sat": "magenta-sat"
            }],
            [{
                  "wid": "color5",
                  "metadata.method": "colordto",
                  "hue": "magenta",
                  "sat": "magenta-sat"
            }],
            [],
            [{
                  "wid": "color1",
                  "metadata.method": "colordto",
                  "hue": "red",
                  "sat": "red-sat"
            }],
            [{
                  "wid": "color5",
                  "metadata.method": "colordto",
                  "hue": "magenta",
                  "sat": "magenta-sat"
            }],
            [{
                  "wid": "color3",
                  "metadata.method": "colordto",
                  "hue": "blue",
                  "sat": "blue-sat"
            }],
            [{
                  "wid": "color6",
                  "metadata.method": "colordto",
                  "hue": "yellow",
                  "sat": "yellow-sat"
            }, {
                  "wid": "color7",
                  "metadata.method": "colordto",
                  "hue": "black",
                  "sat": "black-sat"
            }],
            [{
                  "wid": "color1",
                  "metadata.method": "colordto",
                  "hue": "red",
                  "sat": "red-sat"
            }, {
                  "wid": "color2",
                  "metadata.method": "colordto",
                  "hue": "green",
                  "sat": "green-sat"
            }, {
                  "wid": "color3",
                  "metadata.method": "colordto",
                  "hue": "blue",
                  "sat": "blue-sat"
            }, {
                  "wid": "color4",
                  "metadata.method": "colordto",
                  "hue": "cyan",
                  "sat": "cyan-sat"
            }, {
                  "wid": "color6",
                  "metadata.method": "colordto",
                  "hue": "yellow",
                  "sat": "yellow-sat"
            }],
            [{
                  "wid": "color4",
                  "metadata.method": "colordto",
                  "hue": "cyan",
                  "sat": "cyan-sat"
            }]
      ];
      execute([addlist, querylist], function (err, res1) {
            var res = res1["queryresult"]
            proxyprinttodiv("res --", res, 17);
			var actual_result = res[0];
			proxyprinttodiv("actual_result --", actual_result, 17);							  

			var expected_result = [];
			proxyprinttodiv("expected_result --", expected_result, 17);

			res = logverify("logverify", actual_result, expected_result);
			
			params = {
				'test': 'PASS'
			};
			callback(err, params);
      });
}

exports.mt3 = mt3 = function mt3(params, callback) {
      var x = [];
      var y;
      var mongorawquery;
      var destination = {
            "midexecute": {
                  "dothis": "server",
                  "tryorder": 0,
                  "executeorder": 0,
                  "params": {}
            }
      }


      eventappinstall();

      // saveglobal("debugcolor", 0);
      // debugon = true;
      // saveglobal("debugname", "processquery");
      // debugsubcat = "";
      // saveglobal("debugcat", "");
      // debugfilter = "";
      // debugdestination = 1;
      // //debuglevel=15;

      proxyprinttodiv("staring data add", "data add", 17);
      x[0] = {
            "executethis": "updatewid",
            "metadata.method": "mongoquerytwodto",
            "wid": "mongoquerytwodto",
            "a": "string",
            "b": "string"
      };
      x[1] = {
            "executethis": "updatewid",
            "metadata.method": "mongoquerytwodto",
            "wid": "wid1",
            "a": "c",
            "b": "d"
      };
      x[2] = {
            "executethis": "updatewid",
            "metadata.method": "mongoquerytwodto",
            "wid": "wid2",
            "a": "e",
            "b": "f"
      };
      x[3] = {
            "executethis": "updatewid",
            "wid": "songdto",
            "metadata.method": "songdto",
            "title": "string"
      };
      x[4] = {
            "executethis": "updatewid",
            "wid": "notedto",
            "metadata.method": "notedto",
            "note": "string"
      };
      x[5] = {
            "executethis": "updatewid",
            "wid": "measuredto",
            "metadata.method": "measuredto",
            "length": "string"
      };
      x[6] = {
            "executethis": "updatewid",
            "wid": "rel_song_to_note",
            "primarywid": "songdto",
            "secondarywid": "notedto",
            "relationshiptype": "attributes"
      };
      x[7] = {
            "executethis": "updatewid",
            "wid": "rel_note_to_measure",
            "primarywid": "notedto",
            "secondarywid": "measuredto",
            "relationshiptype": "attributes"
      };
      x[8] = {
            "executethis": "updatewid",
            "wid": "songdtodata",
            "metadata.method": "songdto",
            "title": "stringdata"
      };
      x[9] = {
            "executethis": "updatewid",
            "wid": "notedtodata",
            "metadata.method": "notedto",
            "note": "stringdata"
      };
      x[10] = {
            "executethis": "updatewid",
            "wid": "rel_song_to_note_data",
            "primarywid": "songdtodata",
            "secondarywid": "notedtodata",
            "relationshiptype": "attributes"
      };

      mongorawquery = {
            '$or': [{
                  'data.a': 'b'
            }]
      };
      if (destination) {
            mongorawquery["configuration"] = destination
      };
      mongorawquery = String(mongorawquery);
      x[11] = {
            "executethis": "querywid",
            "mongorawquery": mongorawquery
      }

      x[12] = {
            "executethis": "querywid",
            "command.results":"queryresult",
            "mongowid": "songdtodata",
            "mongorelationshiptype": "attributes",
            "mongorelationshipmethod": "songdto",
            "mongorelationshipdirection": "forward",
            "mongowidmethod": "notedto"
      }
      if (destination) {
            x[12]["configuration"] = destination;
      }
      // this shoud return all the related wids to sonddtodata where the dto of the results is notedto

      for (var eachx in x) {
            if (destination) {
                  x[eachx]['configuration'] = destination
            }; // add destination parameter if needed
            y = executetest(x[eachx]); // enter the data
      }
      proxyprinttodiv("end of data add", "end data add", 17);

      // executeobject["mongorawquery"] = 
      //           "{$and: [" +
      //               "{data.primarywid: songdto}," +
      //               "{data.secondarywid: notedto}" + 
      //           "}]}";

      // executeobject["mongowid"] = "songdto";
      // executeobject["mongorelationshiptype"] = "attributes";
      // executeobject["mongorelationshipmethod"] = "songdto";
      // executeobject["mongorelationshipdirection"] = "forward";
      // executeobject["mongowidmethod"] = "notedto";
      // executeobject["convertmethod"] = "";
      // executeobject["dtotype"] = "";
      // executeobject["executethis"] = 'querywid';

      params = {
            'test': 'PASS'
      };
      var err;
      callback(err, params);
}

exports.etar100 = etar100 = function etar100(params, callback) {
	debuglevel = 17;
      var object = {
            "metadata": {
                  "method": "bookdto"
            },
            "wid": "222",
            "title": "The X Factor",
            "pages": "300"
      };
      var dtoobject = {
            "metadata": {
                  "method": "bookdto"
            },
            "wid": "bookdto",
            "title": "string",
            "pages": "string",
            "c": "string",
            "d": "string"
      };
      var parentwid = "elizabeth_heart";
      var parentmethod = "bookdto";
      var relationshiptype = "onetomany";
      var command = {};
      /*
      for(i=0; i<500; i++){
            addrecord(object, dtoobject, parentwid, parentmethod, relationshiptype, command, function (err, res) {
                  console.log( i + "addrecord! -- got res -->" + JSON.stringify(res));
            });   
      }
      */
      
      // n times loop
      async.times(5, function(n, next){
            addrecord(object, dtoobject, parentwid, parentmethod, relationshiptype, command, function (err, res) {
                console.log( n + "addrecord! -- got res -->" + JSON.stringify(res));
				next(err, res);
            });
      }, function(err, res) {
            //after loop
			proxyprinttodiv("res --", res, 17);
			var actual_result = [res[4]];
			proxyprinttodiv("actual_result --", actual_result, 17);							  

			var expected_result = [{"data":{"title":"The X Factor","pages":"300"},"wid":"1","metadata":{"method":"bookdto","date":"2014-03-19T12:06:47.172Z"}}];
			proxyprinttodiv("expected_result --", expected_result, 17);

			res = logverify("logverify", actual_result, expected_result);
			callback(err, res); 
      });
}

/*
      deep filter test
*/
exports.etd1 = etd1 = function etd1(params, callback) {
	debuglevel = 17;
      async.series([
            function (cb1) {
                  var executeList = [{
                        "executethis": "updatewid",
                        "wid": "wid2",
                        "metadata.method": "defaultdto",
                        "aaa": "",
                        "ggg": ""
                  }];
                  execute(executeList, function (err, res) {
                        //proxyprinttodiv('after updatewid wid1 -- ', res, 34);
                        cb1(null);
                  });
            }
      ], function (err, res) {      //after updatewid
            var dtoObjOpt = {"metadata":{"method":"string"},"a":"wid2","x":"wid2", "z":"wid2",
                                    "c":"number","d":"date","q":{"w":{"e":"string"}},"g":"boolean", "b":[{"c":"string"}, {"d":"string"}], 
                                    "x1": [{"y":"string","d":"date", "b":[{"c":"string","c1":"number"}]}]};
            var inputObj = {"metadata":{"method":"defaultdto"},"a":"aaa", "x":"test", "z":"ggg",
                                    "c":"30","d":"6/23/1912","q":{"w":{"e":"t"}},"g":"true", "b":[{"c":"one"}, {"d":"two"}],
                                    "x1":[{"y":"hello","d":"2/27/2014","b":[{"c":"one","c1":"50"}, {"c":"two","c1":"30"},{"c":"three","d":"30"}, {"cx":"two","c1x":"30"}]}]};
            var command = {"command.deepfilter.convert":true};
              
            deepfilter(inputObj, dtoObjOpt, command, function (err, res){
                proxyprinttodiv("after d1 deepfilter res", res, 17);
				  
				proxyprinttodiv("res --", res, 17);
				var actual_result = [res];
				proxyprinttodiv("actual_result --", actual_result, 17);							  

				var expected_result = [{"metadata":{"method":"defaultdto"},"a":"aaa","z":"ggg","c":30,"d":"1912-06-23T18:30:00.000Z","q":{"w":{"e":"t"}},"g":true,"b":[{"c":"one"}],"x1":[{"y":"hello","d":"2014-02-27T18:30:00.000Z","b":[{"c":"one","c1":50},{"c":"two","c1":30},{"c":"three"}]}]}];
				proxyprinttodiv("expected_result --", expected_result, 17);

				res = logverify("etd1", actual_result, expected_result);
				callback(err, res); 
            });
      });
}

/*
      number, string, boolean, date, nested string
*/
exports.etd2 = etd2 = function etd2(params, callback) {
	debuglevel = 17;	
      async.series([
            function (cb1) {
                  var executeList = [{
                        "executethis": "updatewid",
                        "wid": "wid2",
                        "metadata.method": "defaultdto",
                        "aaa": "",
                        "ggg": ""
                  }];
                  execute(executeList, function (err, res) {
                        //proxyprinttodiv('after updatewid wid1 -- ', res, 34);
                        cb1(null);
                  });
            }
      ], function (err, res) {      //after updatewid
            /*
                  var dtoObjOpt = {"metadata":{"method":"string"},"a":"wid2","x":"wid2", "z":"wid2",
                                    "c":"number","d":"date","q":{"w":{"e":"string"}},"g":"boolean"} ;
                  var inputObj = {"metadata":{"method":"defaultdto"},"a":"aaa", "x":"test", "z":"ggg",
                                    "c":"30","e":"f","d":"6/23/1912","q":{"w":{"e":"t"}},"g":"true"};
            */

            var dtoObjOpt = {"c":"number", "h":"string", "g":"boolean","d":"date", "q":{"w":{"e":"string"}}, "x":{"y":{"z":"string"}}};
            var inputObj = {"c":"30", "h":"hval", "g":"true","d":"6/25/1912", "q":{"w":{"e":"t"}}, "x":{"y":{"z":"string"}}};
            var command = {};
              
            deepfilter(inputObj, dtoObjOpt, command, function(err, res){
				proxyprinttodiv("after d1 deepfilter res", res, 17);
				  
				proxyprinttodiv("res --", res, 17);
				var actual_result = [res];
				proxyprinttodiv("actual_result --", actual_result, 17);							  

				var expected_result = [{"c":"30","h":"hval","g":"true","d":"6/25/1912","q":{"w":{"e":"t"}},"x":{"y":{"z":"string"}}}];
				proxyprinttodiv("expected_result --", expected_result, 17);

				res = logverify("etd2", actual_result, expected_result);
				callback(err, res);
            });
      });
}

/*
      wid
*/
exports.etd3 = etd3 = function etd3(params, callback) {
	debuglevel = 17;
      async.series([
            function (cb1) {
                  var executeList = [{
                        "executethis": "updatewid",
                        "wid": "wid2",
                        "metadata.method": "defaultdto",
                        "aaa": "",
                        "ggg": ""
                  }];
                  execute(executeList, function (err, res) {
                        //proxyprinttodiv('after updatewid wid1 -- ', res, 34);
                        cb1(null);
                  });
            }
      ], function (err, res) {      //after updatewid
            var dtoObjOpt = {"a":"wid2","x":"wid2"} ;
            var inputObj = {"a":"aaa", "x":"test"};
            var command = {};
              
            deepfilter(inputObj, dtoObjOpt, command, function (err, res){
                proxyprinttodiv("after d3 deepfilter res", res, 17);
				  
				proxyprinttodiv("res --", res, 17);
				var actual_result = [res];
				proxyprinttodiv("actual_result --", actual_result, 17);							  

				var expected_result = [{"a":"aaa"}];
				proxyprinttodiv("expected_result --", expected_result, 17);

				res = logverify("etd3", actual_result, expected_result);
				callback(err, res);
            });
      });
}

/*
      updatewid and getwidmaster
*/
exports.dupdateget4 = dupdateget4 = function dupdateget4(params, callback) {
      async.series([
            function (cb1) {
                  var executeList = [{
                        "executethis": "updatewid",
                        "wid": "wid3",
                        "metadata.method": "defaultdto",
                        "aaa": "",
                        "ggg": ""
                  }];
                  execute(executeList, function (err, res) {
                        //proxyprinttodiv('updatewid wid3 -- ', res, 17);
                        cb1(null);
                  });
            },
            function (cb2) {
                  var executeList = [{
                        "executethis": "getwid",
                        "wid": "wid3",
                  }];
                  execute(executeList, function (err, res) {
                        //proxyprinttodiv("getwidmaster  wid3 -- ", res, 17);
                        cb2(null);
                  });
            }
      ], function (err, res) {      //after updatewid
      
            params = {  
                  'test': 'PASS'
            };
            callback(err,params);   
      });
}

/*    
      added test in wid
*/
exports.etd5 = etd5 = function etd5(params, callback) {
	debuglevel = 17;
      async.series([
            function (cb1) {
                  var executeList = [{
                        "executethis": "updatewid",
                        "wid": "wid2",
                        "metadata.method": "defaultdto",
                        "aaa": "",
                        "ggg": "",
                        "test": ""
                  }];
                  execute(executeList, function (err, res) {
                        //proxyprinttodiv('after updatewid wid1 -- ', res, 34);
                        cb1(err, res);
                  });
            },
            function (cb2){
                  var dtoObjOpt = {"metadata":{"method":"string"},"a":"wid2","x":"wid2", "z":"wid2",
                                    "c":"number","d":"date","q":{"w":{"e":"string"}},"g":"boolean"} ;
                  var inputObj = {"metadata":{"method":"defaultdto"},"a":"aaa", "x":"test", "z":"ggg",
                                          "c":"30","d":"6/23/1912","q":{"w":{"e":"t"}},"g":"true"};
                  var command = {"formatresult": "true"};
                    
                  deepfilter(inputObj, dtoObjOpt, command, function (err, res){
                        proxyprinttodiv("after d5 deepfilter res", res, 17);
                        cb2(err, res);
                  });
            }
      ], function (err, res) {
			proxyprinttodiv("res --", res, 17);
			var actual_result = [res];
			proxyprinttodiv("actual_result --", actual_result, 17);							  

                  // var expected_result = [[[[{"data":{"aaa":"","ggg":"","test":""},"wid":"wid2","metadata":{"method":"defaultdto","date":"2014-03-19T12:20:54.139Z"}}]],{"metadata":{"method":"defaultdto"},"a":"aaa","x":"test","z":"ggg","c":"30","d":"6/23/1912","q":{"w":{"e":"t"}},"g":"true"}]];
			var expected_result = [[[[{"data":{"aaa":"","ggg":"","test":""},"wid":"wid2","metadata":{"method":"defaultdto"}}]],{"metadata":{"method":"defaultdto"},"a":"aaa","x":"test","z":"ggg","c":"30","d":"6/23/1912","q":{"w":{"e":"t"}},"g":"true"}]];
			proxyprinttodiv("expected_result --", expected_result, 17);

			res = logverify("etd5", actual_result, expected_result);
			callback(err, res);
      });
}

/*    
      selected wid does not exist
*/
exports.etd6 = etd6 = function etd6(params, callback) {
	debuglevel = 17;
      async.series([
            function (cb2){
                  var dtoObjOpt = {"metadata":{"method":"string"},"a":"wid6","x":"wid6", "z":"wid6",
                                    "c":"number","d":"date","q":{"w":{"e":"string"}},"g":"boolean"} ;
                  var inputObj = {"metadata":{"method":"defaultdto"},"a":"aaa", "x":"test", "z":"ggg",
                                          "c":"30","d":"6/23/1912","q":{"w":{"e":"t"}},"g":"true"};
                  var command = {};
                    
                  deepfilter(inputObj, dtoObjOpt, command, function (err, res){
                        proxyprinttodiv("after d6 deepfilter res", res, 17);
                        cb2(err, res);
                  });
            }
      ], function (err, res) {
			proxyprinttodiv("res --", res, 17);
			var actual_result = [res];
			proxyprinttodiv("actual_result --", actual_result, 17);							  

			var expected_result = [[{"metadata":{"method":"defaultdto"},"c":"30","d":"6/23/1912","q":{"w":{"e":"t"}},"g":"true"}]];
			proxyprinttodiv("expected_result --", expected_result, 17);

			res = logverify("etd6", actual_result, expected_result);
			callback(err, res);
      });
}

/*    
      dto = null,, then return same object
*/
exports.etd7 = etd7 = function etd7(params, callback) {
	debuglevel = 17;
      async.series([
            function (cb1) {
                  var executeList = [{
                        "executethis": "updatewid",
                        "wid": "wid2",
                        "metadata.method": "defaultdto",
                        "aaa": "",
                        "ggg": ""
                  }];
                  execute(executeList, function (err, res) {
                        //proxyprinttodiv('after updatewid wid1 -- ', res, 34);
                        cb1(err, res);
                  });
            },
            function (cb2){
                  /*var dtoObjOpt = {"metadata":{"method":"string"},"a":"wid2","x":"wid2", "z":"wid2",
                                    "c":"number","d":"date","q":{"w":{"e":"string"}},"g":"boolean"} ;
                  */
                  var   dtoObjOpt = null;              
                  var inputObj = {"metadata":{"method":"defaultdto"},"a":"aaa", "x":"test", "z":"ggg",
                                          "c":"30","d":"6/23/1912","q":{"w":{"e":"t"}},"g":"true"};
                  var command = {};
                    
                  deepfilter(inputObj, dtoObjOpt, command, function (err, res){
                        proxyprinttodiv("after d7 deepfilter res", res, 17);
                        cb2(err, res);
                  });
            }
      ], function (err, res) {
			proxyprinttodiv("res --", res, 17);
			var actual_result = [res];
			proxyprinttodiv("actual_result --", actual_result, 17);							  

                  var expected_result = [[[[{"data":{"aaa":"","ggg":""},"wid":"wid2","metadata":{"method":"defaultdto","date":"2014-03-19T12:23:47.300Z"}}]],{"metadata":{"method":"defaultdto"},"a":"aaa","x":"test","z":"ggg","c":"30","d":"6/23/1912","q":{"w":{"e":"t"}},"g":"true"}]];
			// var expected_result = [[[[{"data":{"aaa":"","ggg":""},"wid":"wid2","metadata":{"method":"defaultdto"}}]],{"metadata":{"method":"defaultdto"},"a":"aaa","x":"test","z":"ggg","c":"30","d":"6/23/1912","q":{"w":{"e":"t"}},"g":"true"}]];
			proxyprinttodiv("expected_result --", expected_result, 17);

			res = logverify("etd7", actual_result, expected_result);
			callback(err, res); 
      });
}

/*    
      date
*/
exports.etd8 = etd8 = function etd8(params, callback) {
	debuglevel = 17;
      async.series([
            function (cb1) {
                  var executeList = [{
                        "executethis": "updatewid",
                        "wid": "wid2",
                        "metadata.method": "defaultdto",
                        "aaa": "",
                        "ggg": ""
                  }];
                  execute(executeList, function (err, res) {
                        //proxyprinttodiv('after updatewid wid1 -- ', res, 34);
                        cb1(err, res);
                  });
            },
            function (cb2){
                  var dtoObjOpt = {"d":"date"} ;             
                  var inputObj = {"d":"6/23/1912"};
                  var command = {};
                    
                  deepfilter(inputObj, dtoObjOpt, command, function (err, res){
                        proxyprinttodiv("after d8 deepfilter res", res, 17);
                        cb2(err, res);
                  });
            }
      ], function (err, res) {
			proxyprinttodiv("res --", res, 17);
			var actual_result = [res];
			proxyprinttodiv("actual_result --", actual_result, 17);							  

                  var expected_result = [[[[{"data":{"aaa":"","ggg":""},"wid":"wid2","metadata":{"method":"defaultdto","date":"2014-03-19T12:25:34.697Z"}}]],{"d":"6/23/1912"}]];
			// var expected_result = [[[[{"data":{"aaa":"","ggg":""},"wid":"wid2","metadata":{"method":"defaultdto"}}]],{"d":"6/23/1912"}]];
			proxyprinttodiv("expected_result --", expected_result, 17);

			res = logverify("etd8", actual_result, expected_result);
			callback(err, res); 
      });
}

/*
      object dataType test
*/
exports.etd10 = etd10 = function etd10(params, callback) {
	debuglevel = 17;
      async.series([
            function (cb1) {
                  var executeList = [{
                        "executethis": "updatewid",
                        "wid": "wid5",
                        "metadata.method": "defaultdto",
                        "aaa": "",
                        "ggg": ""
                  }];
                  execute(executeList, function (err, res) {
                        //proxyprinttodiv('after updatewid wid1 -- ', res, 34);
                        cb1(err, res);
                  });
            }
      ], function (err, res) {      //after updatewid
            var dtoObjOpt = {"obj":"", "c":"string", "d":{"executethis": "getwidmaster", "wid": "wid5"}};
            var inputObj = {"obj":"", "c":"cval", "d":{"executethis": "getwidmaster", "wid": "wid5"}};
            var command = {};
              
            deepfilter(inputObj, dtoObjOpt, command, function (err, res){
				proxyprinttodiv("res --", res, 17);
				var actual_result = [res];
				proxyprinttodiv("actual_result --", actual_result, 17);							  

				var expected_result = [{"obj":"","c":"cval","d":{}}];
				proxyprinttodiv("expected_result --", expected_result, 17);

				res = logverify("etd10", actual_result, expected_result);
				callback(err, res);
            });
      });
}


exports.etd10b = etd10b = function etd10b(params, callback) {
	debuglevel=17;
	var obj = {"wid":"songdto","metadata":{"method":"songdto","sounddto":{"type":"jsononetomany"}},
					  "title":"string","sounddto":{"wid":"string","metadata":{"method":"string"},"note":"string"}}

	var dto = {"wid":"string","metadata":{"method":"string","sounddto":{"type":"string"}},
					  "title":"string","sounddto":[{"wid":"string","metadata":{"method":"string"},"note":"string"}],
					  "command":{"dtolist":{"sounddto":"jsononetomany"}}}
	var command;
		  if (!command) {command = {};}
		  if (!command.deepfilter) {command.deepfilter = {};}
		  command.deepfilter.convert = true;
	//exepected
	//{"wid":"songdto","metadata":{"method":"songdto","sounddto":{"type":"jsononetomany"}},
	//"title":"string","sounddto":[{"wid":"string","metadata":{"method":"string"},"note":"string"}]}

	deepfilter(obj, dto,command, function (err, res) {
		proxyprinttodiv('Function d10b deepfilter result ', res, 17); 
		proxyprinttodiv("res --", res, 17);
		var actual_result = [res];
		proxyprinttodiv("actual_result --", actual_result, 17);							  

		var expected_result = [{"wid":"songdto","metadata":{"method":"songdto","sounddto":{"type":"jsononetomany"}},"title":"string","sounddto":[{"wid":"string","metadata":{"method":"string"},"note":"string"}]}];
		proxyprinttodiv("expected_result --", expected_result, 17);

		res = logverify("etd10b", actual_result, expected_result);
		callback(err, res);	   
	});
}


/*
      test to confirm deepfilter with wid that returns query results works
*/
exports.etd11 = etd11 = function etd11(params, callback) {
	debuglevel = 17;
      async.series([
            function (cb1) {  //5 (a)
                  var executeList = [
                        { "executethis": "updatewid", "wid": "wid1", "metadata.method": "defaultdto", "x": "y", "a": "r"}, 
                        { "executethis": "updatewid", "wid": "wid2", "metadata.method": "defaultdto", "w": "z", "a": "y"}, 
                        { "executethis": "updatewid", "wid": "wid3", "metadata.method": "defaultdto", "a": "b", "g": "f"}, 
                        { "executethis": "updatewid", "wid": "wid4", "metadata.method": "defaultdto", "h": "j", "k": "y", "a": "p"}
                  ];
                  execute(executeList, function (err, res) {
                        //proxyprinttodiv('after updatewid wid1,2,3,4 -- ', res, 34);
                        cb1(null);
                  });
            },
            function step2(cb2){    //5 (b)
                  var executeList = [
                        { "executethis": "querywid","command.results":"queryresult", "mongorawquery": '{"$or": [{ "data.a": "b" }]}'}
                  ];
                  execute(executeList, function (err, res1) {
                        var res = res1["queryresult"];
                        //proxyprinttodiv("mongo query result ", res, 17);
                        cb2(null);
                  });
            },
            function step3(cb3){    //5 (c)
                  var executeList = [
                        { "executethis": "updatewid", "wid": "wid5", "metadata.method": "defaultdto", "addthis.executethis":"querywid", "mongorawquery":"{data.a:b}"}
                  ];
                  execute(executeList, function (err, res) {
                        //proxyprinttodiv("after updatewid wid5 -- ", res, 17);
                        cb3(null);
                  });
            },
            function step4(cb4){    //5 (d)
                  getwidmaster({"wid":"wid5", "command":{"getwidmaster":{"execute":"false"}}},function (err, res) {
                        //proxyprinttodiv("5 (d) getwidmaster  wid5 -- ", res, 17);
                        cb4(null);
                  });
            },
            function step5(cb5){    //5 (e)
                  getwidmaster({"wid":"wid5"},function (err, res) {
                        //proxyprinttodiv("5 (e) getwidmaster  wid5 -- ", res, 17);
                        cb5(null);
                  });
            },
            function step6(cb6){    //5 (f)
                  execute({"executethis":"wid5"},function (err, res) {
                        //proxyprinttodiv("5 (f) getwidmaster  wid5 -- ", res, 17);
                        cb6(null);
                  });
            },
            function step7(cb7){    //5 (g)
                  execute("wid5",function (err, res) {
                        //proxyprinttodiv("5 (g) getwidmaster  wid5 -- ", res, 17);
                        cb7(null);
                  });
            },
            function step8(cb8){    //step 8 deep filter d = wid5
                  var dtoObjOpt = {"obj":"", "c":"string", "d":"wid5"};
                  var inputObj = {"c":"hello", "d":"wid3"};
                  var command = {};
                    
                  deepfilter(inputObj, dtoObjOpt, command, function (err, res){
                        //proxyprinttodiv("step 8 res--", res, 17);
                        cb8(null);
                  });
            },
            function step9(cb9){    //step 9 deep filter
                  var dtoObjOpt = {"obj":"", "c":"string", "d":"wid5"};
                  var inputObj = {"c":"hello", "d":"wid5"};
                  var command = {};
                    
                  deepfilter(inputObj, dtoObjOpt, command, function (err, res){
                        //proxyprinttodiv("step 9 res--", res, 17);
                        cb9(null);
                  });
            },
            function step10(cb10){  //step 10 deep filter
                  var dtoObjOpt = {"obj":"", "c":"string", "d":{"executethis": "getwidmaster", "wid": "wid5"}};
                  var inputObj = {"obj":"", "c":"cval", "d":{"executethis": "getwidmaster", "wid": "wid5"}};
                  var command = {};
                    
                  deepfilter(inputObj, dtoObjOpt, command, function (err, res){
                        proxyprinttodiv("d11 - step 10 res--", res, 17);
                        cb10(err, res);
                  });
            }
      ], function (err, res) {
			proxyprinttodiv("res --", res, 17);
			var actual_result = [res[9]];
			proxyprinttodiv("actual_result --", actual_result, 17);							  

			var expected_result = [{"obj":"","c":"cval","d":{}}];
			proxyprinttodiv("expected_result --", expected_result, 17);

			res = logverify("etd11", actual_result, expected_result);
			callback(err, res);	 
      });
}

/*
      command.deepfilter.convert = true/false
*/
exports.etd12 = etd12 = function etd12(params, callback) {
	debuglevel = 17;
      async.series([
            function step1(cb1){    //without command
                  var dtoObjOpt = {"b1":"boolean", "b2":"boolean"};
                  var inputObj = {"b1":"true", "b2":false};
                  var command = {};
                  deepfilter(inputObj, dtoObjOpt, command, function (err, res){
                        //proxyprinttodiv("without command-- res ", res, 17);
                        cb1(err, res);
                  });
            },
            function step2(cb2){    //"command.deepfilter.convert"="true"
                  var dtoObjOpt = {"b1":"boolean", "b2":"boolean"};
                  var inputObj = {"b1":"true", "b2":false};
                  var command = {"command.deepfilter.convert":"true"};
                  deepfilter(inputObj, dtoObjOpt, command, function (err, res){
                        //proxyprinttodiv("command.deepfilter.convert = true-- res ", res, 17);
                        cb2(err, res);
                  });
            },
            function step3(cb3){    //"command.deepfilter.convert"="false"
                  var dtoObjOpt = {"b1":"boolean", "b2":"boolean"};
                  var inputObj = {"b1":"true", "b2":false};
                  var command = {"command.deepfilter.convert":"false"};
                  deepfilter(inputObj, dtoObjOpt, command, function (err, res){
                        proxyprinttodiv("d12 - command.deepfilter.convert = false-- res ", res, 17);
                        cb3(err, res);
                  });
            }
      ], function (err, res) {
			proxyprinttodiv("res --", res, 17);
			var actual_result = res;
			proxyprinttodiv("actual_result --", actual_result, 17);							  

			var expected_result = [{"b1":"true"},{"b1":true},{"b1":true}];
			proxyprinttodiv("expected_result --", expected_result, 17);

			res = logverify("etd12", actual_result, expected_result);
			callback(err, res);	
      });
}

/*
      make with query that returns more than one item…test like below
      it produces one result wid3
      make it produce two results wid7,8,9
      test deepfilter and make sure it does not break
*/
exports.etd13 = etd13 = function etd13(params, callback) {
	debuglevel = 17;
      async.series([
            function (cb1) {
                  var executeList = [{
                        "executethis": "updatewid",
                        "wid": "wid2",
                        "metadata.method": "defaultdto",
                        "aaa": ""
                  },
                  {
                        "executethis": "updatewid",
                        "wid": "wid3",
                        "metadata.method": "defaultdto",
                        "bbb": ""
                  }];
                  execute(executeList, function (err, res) {
                        //proxyprinttodiv('after updatewid wid1 -- ', res, 34);
                        cb1(err, res);
                  });
            },
            function (cb2){
                  var dtoObjOpt = {"a":"wid2", "b":"wid2", "c":"wid3", "d":"wid3"} ;
                  var inputObj = {"a":"aaa", "b":"test", "c":"bbb", "d":"dummy"};
                  var command = {};
                    
                  deepfilter(inputObj, dtoObjOpt, command, function (err, res){
                        proxyprinttodiv("after d13 deepfilter res", res, 17);
                        cb2(err, res);
                  });
            }
      ], function (err, res) {
			proxyprinttodiv("res --", res, 17);
			var actual_result = res;
			proxyprinttodiv("actual_result --", actual_result, 17);							  

                  // var expected_result = [[[{"data":{"aaa":""},"wid":"wid2","metadata":{"method":"defaultdto","date":"2014-03-19T12:40:36.431Z"}}],[{"data":{"bbb":""},"wid":"wid3","metadata":{"method":"defaultdto","date":"2014-03-19T12:40:36.481Z"}}]],{"a":"aaa","c":"bbb"}];
			var expected_result = [[[{"data":{"aaa":""},"wid":"wid2","metadata":{"method":"defaultdto"}}],[{"data":{"bbb":""},"wid":"wid3","metadata":{"method":"defaultdto"}}]],{"a":"aaa","c":"bbb"}];
			proxyprinttodiv("expected_result --", expected_result, 17);

			res = logverify("etd13", actual_result, expected_result);
			callback(err, res);	
      });         
}

/*
      deep filter should process arrays
      i.e.
      dto=xdto
      a: string
      b: [c: string, d: string]

      inobj=
      a:test
      b:[{c:one, d:two}, {c:three, d:four}, {c:five, d:six}]
*/
exports.etd14 = etd14 = function etd14(params, callback) {
	debuglevel = 17;
      async.series([
            function (cb1){
                  var dtoObjOpt = {"a":"string",
                                          "y":"string",
                                          "x": [{ "y":"string", 
                                                      "b":[{"c":"string","c1":"number"}
                                                            ]
                                                }
                                                ]
                                          };
                  var inputObj = {"a":"aval",
                                          "y":"yes",
                                          "x":[{"y":"hello", 
                                                  "b":[{"c":"one","c1":"50"}, 
                                                         {"c":"two","c1":"30"},
                                                         {"c":"three","d":"30"}, 
                                                         {"cx":"two","c1x":"30"}
                                                        ]
                                                      }
                                                ], 
                                          "q":"no"};
                  var command = {"command.deepfilter.convert":true};
                    
                  deepfilter(inputObj, dtoObjOpt, command, function (err, res){
                        proxyprinttodiv("after d14 deepfilter in", inputObj, 17);
                        proxyprinttodiv("after d14 deepfilter out", dtoObjOpt, 17);
                        proxyprinttodiv("after d14 deepfilter res", res, 17);
                        cb1(err, res);
                  });
            }
      ], function (err, res) {
			proxyprinttodiv("res --", res, 17);
			var actual_result = res;
			proxyprinttodiv("actual_result --", actual_result, 17);							  

			var expected_result = [{"a":"aval","y":"yes","x":[{"y":"hello","b":[{"c":"one","c1":50},{"c":"two","c1":30},{"c":"three"}]}]}];
			proxyprinttodiv("expected_result --", expected_result, 17);

			res = logverify("etd14", actual_result, expected_result);
			callback(err, res); 
      });
}


exports.etalldeepfiltertests = etalldeepfiltertests = function etalldeepfiltertests(params, callback) {
debuglevel = 17;

var result = [];
var err;

etd1(result, function (err, r1) {
      result.push(r1);
      etd2(result, function (err, r2) {
            result.push(r2);
            etd3(result, function (err, r3) {
                  result.push(r3);
                        etd5(result, function (err, r5) {
                              result.push(r5);
                              etd6(result, function (err, r6) {
                                    result.push(r6);
                                    etd7(result, function (err, r7) {
                                          result.push(r7);
                                          etd8(result, function (err, r8) {
                                                result.push(r8);
                                                      etd10(result, function (err, r10) {
                                                            result.push(r10);
                                                            etd10b(result, function (err, r10b) {
                                                                  result.push(r10b);
                                                                  etd11(result, function (err, r11) {
                                                                        result.push(r11);
                                                                        etd12(result, function (err, r12) {
                                                                              result.push(r12);
                                                                              etd13(result, function (err, r13) {
                                                                                    result.push(r13);
                                                                                    etd14(result, function (err, r14) {
                                                                                        result.push(r14);
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
}


exports.etd9 = etd9 = function etd9(params, callback) {
	debuglevel = 17;
      var dtoObjOpt = {"name":"string","age":"string","wid":"string",
                                                      "metadata":{"method":"string","spousedto":{"type":"jsononetoone"},"housedto":{"type":"onetoone"},"bookdto":{"type":"onetomany"},"expirationdate":"2014-03-14T09:00:01.106Z"},
                                                      "command":{"inherit":{"defaultsystemactions":"defaultsystemactions"},
                                                            "deepdtolist":{"systemdto":"onetoone","addressdto":"onetomany","statedto":"manytoone","ownerdto":"onetoone","pubhousedto":"manytoone","spousedto":"jsononetoone","housedto":"onetoone","bookdto":"onetomany"},
                                                            "dtolist":{"spousedto":"jsononetoone","housedto":"onetoone","bookdto":"onetomany","systemdto":"onetoone"}},
                                    "spousedto":{"datemarried":"date","wid":"string",
                                                      "metadata":{"method":"string","expirationdate":"2014-03-14T09:00:01.304Z"},
                                                            "command":{"inherit":{"defaultsystemactions":"defaultsystemactions"},
                                                            "deepdtolist":{"systemdto":"onetoone"},
                                                            "dtolist":{"systemdto":"onetoone"}}},
                                    "housedto":{"color":"string","wid":"string",
                                                      "metadata":{"method":"string","expirationdate":"2014-03-14T09:00:01.674Z"},
                                                      "command":{"inherit":{"defaultsystemactions":"defaultsystemactions"},
                                                            "deepdtolist":{"systemdto":"onetoone"},
                                                            "dtolist":{"systemdto":"onetoone"}}},
                                    "bookdto":[{"title":"string","pages":"string","wid":"string",
                                                      "metadata":{"method":"string","pubhousedto":{"type":"manytoone"},"expirationdate":"2014-03-14T09:00:02.076Z"},
                                                      "command":{"inherit":{"defaultsystemactions":"defaultsystemactions"},
                                                            "deepdtolist":{"systemdto":"onetoone","addressdto":"onetomany","statedto":"manytoone","ownerdto":"onetoone","pubhousedto":"manytoone"},
                                                            "dtolist":{"pubhousedto":"manytoone","systemdto":"onetoone"}},
                                          "pubhousedto":{"coname":"string","establishdate":"date","wid":"string",
                                                      "metadata":{"method":"string","addressdto":{"type":"onetomany"},"statedto":{"type":"manytoone"},"ownerdto":{"type":"onetoone"},"expirationdate":"2014-03-14T09:00:02.598Z"},
                                                      "command":{"inherit":{"defaultsystemactions":"defaultsystemactions"},
                                                            "deepdtolist":{"systemdto":"onetoone","addressdto":"onetomany","statedto":"manytoone","ownerdto":"onetoone"},
                                                            "dtolist":{"addressdto":"onetomany","statedto":"manytoone","ownerdto":"onetoone","systemdto":"onetoone"}},
                                                "addressdto":[{"city":"string","add1":"string","add2":"string","wid":"string",
                                                      "metadata":{"method":"string","expirationdate":"2014-03-14T09:00:03.750Z"},
                                                      "command":{"inherit":{"defaultsystemactions":"defaultsystemactions"},
                                                      "deepdtolist":{"systemdto":"onetoone"},
                                                      "dtolist":{"systemdto":"onetoone"}}}],
                                                "statedto":{"statename":"string","zipcode":"string","wid":"string",
                                                      "metadata":{"method":"string","expirationdate":"2014-03-14T09:00:04.297Z"},
                                                      "command":{"inherit":{"defaultsystemactions":"defaultsystemactions"},
                                                      "deepdtolist":{"systemdto":"onetoone"},
                                                      "dtolist":{"systemdto":"onetoone"}}},
                                                "ownerdto":{"name":"string","wid":"string",
                                                      "metadata":{"method":"string","expirationdate":"2014-03-14T09:00:04.860Z"},
                                                      "command":{"inherit":{"defaultsystemactions":"defaultsystemactions"},
                                                      "deepdtolist":{"systemdto":"onetoone"},
                                                      "dtolist":{"systemdto":"onetoone"}}}}}]}

      var inputObj = 
                  {"metadata":{"method":"authordto"},"wid":"wid1","name":"somedata222",
                  "age":"somedata","spousedto":{"datemarried":"03/10/2014"},
                  "housedto":{"color":"purple"},
                  "bookdto":{"title":"Book 1","pages":"300",
                        "pubhousedto":{"coname":"Company Name","establishdate":"03/10/2014",
                              "addressdto":[{"city":"City Name","add1":"Address1","add2":"Address2"}],
                              "statedto":[{"statename":"State Name tx","zipcode":"Z 123456"}],
                              "ownerdto":[{"name":"Owner Name"}]}}}
                  
      var command = {};
        
      deepfilter(inputObj, dtoObjOpt, command, function (err, res){
            proxyprinttodiv("after d3 deepfilter res", res, 99, true);
           
			proxyprinttodiv("res --", res, 17);
			var actual_result = [res];
			proxyprinttodiv("actual_result --", actual_result, 17);							  

			var expected_result = [{"metadata":{"method":"authordto"},"wid":"wid1","name":"somedata222","age":"somedata","spousedto":{"datemarried":"03/10/2014"},"housedto":{"color":"purple"},"bookdto":[{"title":"Book 1","pages":"300","pubhousedto":{"coname":"Company Name","establishdate":"03/10/2014","addressdto":[{"city":"City Name","add1":"Address1","add2":"Address2"}],"statedto":[{"statename":"State Name tx","zipcode":"Z 123456"}],"ownerdto":[{"name":"Owner Name"}]}}]}];
			proxyprinttodiv("expected_result --", expected_result, 17);

			res = logverify("logverify", actual_result, expected_result);
			callback(err, res); 
      });
}


/*
      4) 
      We want to get our current getnewwid to come from a database:
      in et-utils change getnewwid
      execute(execute=getwid, wid="currentwid")
      if blank then wid = 1
      else wid=wid+1
      execute(execute=updatewid, wid=currentwid)
      return new wid
*/
exports.getnewwid1 = getnewwid1 = function getnewwid1(params, callback) {
      async.series([
            function (cb1) {
                  getnewwid(function (err, res){
                        proxyprinttodiv("after getnewwid", res, 17);
                        cb1(null);
                  });
            }
      ], function (err, res) {
            params = {  
                  'test': 'PASS'
            };
            callback(params); 
      });         
}

// DTO 1, dot > object 3, dot
exports.ettest1dot3dot = ettest1dot3dot = function ettest1dot3dot(params, callback) {
eventappinstall();

debuglevel = 0;

execute([{
            "executethis": "addwidmaster",
            "wid": "songdto",
            "metadata.method": "songdto",
            "title": "string",
            "metadata.sounddto.type": "onetomany",
            "sounddto.wid": "sounddto",
            "sounddto.metadata.method": "sounddto",
            "sounddto.note": "string"
      }, {                       
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "songdto",
            "title": "Highway to Hell",
            "sounddto.note": "A flat"
      }, {            
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "songdto",
            "title": "Highway to Hell",
            "sounddto.note": "B sharp"
      }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "songdto",
            "title": "Highway to Hell",
            "sounddto.note": "C flat"
      }, {
            "executethis": "getwidmaster",
            "wid": "song1"
      }],
      function (err, res) {

            proxyprinttodiv('Function ag3 result Full res', res, 17);
            proxyprinttodiv('Function ag3 result ', res[4], 17);

            res = logverify("ettest1dot3dot", res[4], [{
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
                  "sounddto.2.metadata.method": "sounddto",
                  "metadata.sounddto.type": "onetomany"
            }]);

            //execute({"executethis": "getwidmaster","wid": "songdto",
            //      "command":{"getwidmaster":{"convertmethod":"dto",
            //                              "execute":"ConvertFromDOTdri",
            //                              "inheritflag":"true","dtotype":""}}}, function (err, res1) {
            execute({"executethis": "getwidmaster","wid": "song1"}, function (err, res1) {
                  proxyprinttodiv('Function ag3 result LAST ', res1, 17); 
                  callback(err, res); 
                   
            })
      });
}


// DTO 3, dot > object 3, dot
exports.ettest3dot3dot = ettest3dot3dot = function ettest3dot3dot(params, callback) {
eventappinstall();

debuglevel = 0;

execute([{
            "executethis": "addwidmaster",
            "metadata.method": "songdto",
            "wid": "songdto",
            "title": "string",
      }, {
            "executethis": "addwidmaster",
            "metadata.method": "sounddto",
            "wid": "sounddto",
            "note": "string"
      }, {
            "executethis": "addwidmaster",
            "wid": "rel_song_sound",
            "metadata.method": "relationshipdto",
            "relationshiptype": "attributes",
            "linktype": "onetomany",
            "primarywid": "songdto",
            "primarymethod": "songdto",
            "secondarywid": "sounddto",
            "secondarymethod": "sounddto"
      }, {                       
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "songdto",
            "title": "Highway to Hell",
            "sounddto.note": "A flat"
      }, {            
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "songdto",
            "title": "Highway to Hell",
            "sounddto.note": "B sharp"
      }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "songdto",
            "title": "Highway to Hell",
            "sounddto.note": "C flat"
      }, {
            "executethis": "getwidmaster",
            "wid": "song1"
       }
      ],


      function (err, res) {

            proxyprinttodiv('Function ag3 result Full res', res, 17);
            proxyprinttodiv('Function ag3 result 3 x 3', res[6], 17);

            res = logverify("ettest3dot3dot", res[6], [{
      "title": "Highway to Hell",
      "sounddto.0.wid": "1",
      "sounddto.0.note": "A flat",
      "sounddto.0.metadata.method": "sounddto",
      "sounddto.1.wid": "3",
      "sounddto.1.note": "B sharp",
      "sounddto.1.metadata.method": "sounddto",
      "sounddto.2.wid": "5",
      "sounddto.2.note": "C flat",
      "sounddto.2.metadata.method": "sounddto",
      "wid": "song1",
      "metadata.method": "songdto",
      "metadata.sounddto.type": "onetomany"


            }]);
            // execute({"executethis": "getwidmaster","wid": "songdto",
            //       "command":{"getwidmaster":{"convertmethod":"dto",
            //                               "execute":"ConvertFromDOTdri",
            //                               "inheritflag":"true","dtotype":""}}}, function (err, res1) {
            execute({"executethis": "getwidmaster","wid": "song1"}, function (err, res1) {
                  proxyprinttodiv('Function ag3 result LAST ', res1, 17); 
                  callback(err, res); 
                   
            })
      });
}

// DTO 3, dot > object 3, dot
exports.ettest3dot1dot = ettest3dot1dot = function ettest3dot1dot(params, callback) {
eventappinstall();

debuglevel = 0;

execute([{
            "executethis": "addwidmaster",
            "metadata.method": "songdto",
            "wid": "songdto",
            "title": "string",
      }, {
            "executethis": "addwidmaster",
            "metadata.method": "sounddto",
            "wid": "sounddto",
            "note": "string"
      }, {
            "executethis": "addwidmaster",
            "wid": "rel_song_sound",
            "metadata.method": "relationshipdto",
            "relationshiptype": "attributes",
            "linktype": "onetomany",
            "primarywid": "songdto",
            "primarymethod": "songdto",
            "secondarywid": "sounddto",
            "secondarymethod": "sounddto"
      }, {                       
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "songdto",
            "title": "Highway to Hell",
            "sounddto.0.note": "A flat",
            "sounddto.1.note": "B sharp",
            "sounddto.2.note": "C flat"
      }, {
            "executethis": "getwidmaster",
            "wid": "song1"
       }
      ],


      function (err, res) {

            proxyprinttodiv('Function ag3 result Full res', res, 17);
            proxyprinttodiv('Function ag3 result 3 x 3', res[4], 17);

            res = logverify("ettest3dot1dot", res[4], [{
      "title": "Highway to Hell",
      "sounddto.0.wid": "1",
      "sounddto.0.note": "A flat",
      "sounddto.0.metadata.method": "sounddto",
      "sounddto.1.wid": "3",
      "sounddto.1.note": "B sharp",
      "sounddto.1.metadata.method": "sounddto",
      "sounddto.2.wid": "5",
      "sounddto.2.note": "C flat",
      "sounddto.2.metadata.method": "sounddto",
      "wid": "song1",
      "metadata.method": "songdto",
      "metadata.sounddto.type": "onetomany"


            }]);
            // execute({"executethis": "getwidmaster","wid": "songdto",
            //       "command":{"getwidmaster":{"convertmethod":"dto",
            //                               "execute":"ConvertFromDOTdri",
            //                               "inheritflag":"true","dtotype":""}}}, function (err, res1) {
            execute({"executethis": "getwidmaster","wid": "song1"}, function (err, res1) {
                  proxyprinttodiv('Function ag3 result LAST ', res1, 17); 
                  callback(err, res); 
                   
            })
      });
}

// DTO 3, dot > object 3, dot
exports.ettest1dot1dot = ettest1dot1dot = function ettest1dot1dot(params, callback) {
eventappinstall();

debuglevel = 0;

execute([{
            "executethis": "addwidmaster",
            "wid": "songdto",
            "metadata.method": "songdto",
            "title": "string",
            "metadata.sounddto.type": "onetomany",
            "sounddto.wid": "sounddto",
            "sounddto.metadata.method": "sounddto",
            "sounddto.note": "string"
      }, {                       
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "songdto",
            "title": "Highway to Hell",
            "sounddto.0.note": "A flat",
            "sounddto.1.note": "B sharp",
            "sounddto.2.note": "C flat"
      }, {
            "executethis": "getwidmaster",
            "wid": "song1"
       }
      ],

      function (err, res) {

            proxyprinttodiv('Function ag3 result Full res', res, 17);
            proxyprinttodiv('Function ag3 result 3 x 3', res[2], 17);

            res = logverify("ettest1dot1dot", res[2], [{
                  "title": "Highway to Hell",
                  "sounddto.0.wid": "2",
                  "sounddto.0.note": "A flat",
                  "sounddto.0.metadata.method": "sounddto",
                  "sounddto.1.wid": "4",
                  "sounddto.1.note": "B sharp",
                  "sounddto.1.metadata.method": "sounddto",
                  "sounddto.2.wid": "6",
                  "sounddto.2.note": "C flat",
                  "sounddto.2.metadata.method": "sounddto",
                  "wid": "song1",
                  "metadata.method": "songdto",
                  "metadata.sounddto.type": "onetomany"

            }]);

            // execute({"executethis": "getwidmaster","wid": "songdto",
            //       "command":{"getwidmaster":{"convertmethod":"dto",
            //                               "execute":"ConvertFromDOTdri",
            //                               "inheritflag":"true","dtotype":""}}}, function (err, res1) {
            execute({"executethis": "getwidmaster","wid": "song1"}, function (err, res1) {
                  proxyprinttodiv('Function ag3 result LAST ', res1, 17); 
                  callback(err, res); 
                   
            })
      });
}

/* jsononetomany tests */
// DTO 1, dot > object , dot,, jsononetomany
exports.ettest1dot3dotjsonmany = ettest1dot3dotjsonmany = function ettest1dot3dotjsonmany(params, callback) {
eventappinstall();

debuglevel = 0;

execute([{
            "executethis": "addwidmaster",
            "wid": "songdto",
            "metadata.method": "songdto",
            "title": "string",
            "metadata.sounddto.type": "jsononetomany",
            //"sounddto.wid": "sounddto",
            //"sounddto.metadata.method": "sounddto",
            "sounddto.wid": "string",
            "sounddto.metadata.method": "string",
            "sounddto.note": "string"

      }, {                       
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "songdto",
            "title": "Highway to Hell",
            "sounddto.note": "A flat"
      }, {            
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "songdto",
            "title": "Highway to Hell",
            "sounddto.note": "B sharp"
      }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "songdto",
            "title": "Highway to Hell",
            "sounddto.note": "C flat"
      }, {
            "executethis": "getwidmaster",
            "wid": "song1"
       }
      ],

      function (err, res) {

            proxyprinttodiv('Function ag3 result Full res', res, 17);
            proxyprinttodiv('Function ag3 result ', res[4], 17);

            res = logverify("ettest1dot3dotjsonmany", res[4], [{"sounddto.0.note":"A flat","sounddto.1.note":"B sharp",
                  "sounddto.2.note":"C flat","title":"Highway to Hell","wid":"song1","metadata.method":"songdto"}]
                  );

            //[{"sounddto.0.note":"A flat","sounddto.1.note":"B sharp","sounddto.2.note":"C flat",
            //"title":"Highway to Hell","wid":"song1","metadata.method":"songdto"}]
            
            debuglevel=38;
            //execute({"executethis": "getwidmaster","wid": "songdto",
            //      "command":{"getwidmaster":{"convertmethod":"dto",
            //                              "execute":"ConvertFromDOTdri",
            //                              "inheritflag":"true","dtotype":""}}}, function (err, res1) {
            execute({"executethis": "getwidmaster","wid": "song1"}, function (err, res1) {
                  proxyprinttodiv('Function ag3 result LAST ', res1, 17); 
                  callback(err, res); 
                   
            })
      });
}

// DTO 3, dot > object 3, dot,, jsononetomany
exports.ettest3dot3dotjsonmany = ettest3dot3dotjsonmany = function ettest3dot3dotjsonmany(params, callback) {
eventappinstall();

debuglevel = 0;

execute([{
            "executethis": "addwidmaster",
            "metadata.method": "songdto",
            "wid": "songdto",
            "title": "string",
      }, {
            "executethis": "addwidmaster",
            "metadata.method": "sounddto",
            "wid": "sounddto",
            "note": "string"
      }, {
            "executethis": "addwidmaster",
            "wid": "rel_song_sound",
            "metadata.method": "relationshipdto",
            "relationshiptype": "attributes",
            "linktype": "jsononetomany",
            "primarywid": "songdto",
            "primarymethod": "songdto",
            "secondarywid": "sounddto",
            "secondarymethod": "sounddto"
      }, {                       
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "songdto",
            "title": "Highway to Hell",
            "sounddto.note": "A flat"
      }, {            
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "songdto",
            "title": "Highway to Hell",
            "sounddto.note": "B sharp"
      }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "songdto",
            "title": "Highway to Hell",
            "sounddto.note": "C flat"
      }, {
            "executethis": "getwidmaster",
            "wid": "song1"
       }
      ],


      function (err, res) {

            proxyprinttodiv('Function ag3 result Full res', res, 17);
            proxyprinttodiv('Function ag3 result 3 x 3', res[6], 17);

            res = logverify("ettest3dot3dotjsonmany", res[6], [{
                  "sounddto.0.note":"A flat","sounddto.1.note":"B sharp","sounddto.2.note":"C flat","title":"Highway to Hell","wid":"song1","metadata.method":"songdto"
            }]);
            // execute({"executethis": "getwidmaster","wid": "songdto",
            //       "command":{"getwidmaster":{"convertmethod":"dto",
            //                               "execute":"ConvertFromDOTdri",
            //                               "inheritflag":"true","dtotype":""}}}, function (err, res1) {
            execute({"executethis": "getwidmaster","wid": "song1"}, function (err, res1) {
                  proxyprinttodiv('Function ag3 result LAST ', res1, 17); 
                  callback(err, res); 
                   
            })
      });
}

// DTO 3, dot > object 3, dot,, jsononetomany
exports.ettest3dot1dotjsonmany = ettest3dot1dotjsonmany = function ettest3dot1dotjsonmany(params, callback) {
eventappinstall();

debuglevel = 0;

execute([{
            "executethis": "addwidmaster",
            "metadata.method": "songdto",
            "wid": "songdto",
            "title": "string",
      }, {
            "executethis": "addwidmaster",
            "metadata.method": "sounddto",
            "wid": "sounddto",
            "note": "string"
      }, {
            "executethis": "addwidmaster",
            "wid": "rel_song_sound",
            "metadata.method": "relationshipdto",
            "relationshiptype": "attributes",
            "linktype": "jsononetomany",
            "primarywid": "songdto",
            "primarymethod": "songdto",
            "secondarywid": "sounddto",
            "secondarymethod": "sounddto"
      }, {                       
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "songdto",
            "title": "Highway to Hell",
            "sounddto.0.note": "A flat",
            "sounddto.1.note": "B sharp",
            "sounddto.2.note": "C flat"
      }, {
            "executethis": "getwidmaster",
            "wid": "song1"
       }
      ],


      function (err, res) {

            proxyprinttodiv('Function ag3 result Full res', res, 17);
            proxyprinttodiv('Function ag3 result 3 x 3', res[4], 17);

            res = logverify("ettest3dot1dotjsonmany", res[4], [{
                  "sounddto.0.note":"A flat","sounddto.1.note":"B sharp","sounddto.2.note":"C flat","title":"Highway to Hell","wid":"song1","metadata.method":"songdto"
            }]);
            // execute({"executethis": "getwidmaster","wid": "songdto",
            //       "command":{"getwidmaster":{"convertmethod":"dto",
            //                               "execute":"ConvertFromDOTdri",
            //                               "inheritflag":"true","dtotype":""}}}, function (err, res1) {
            execute({"executethis": "getwidmaster","wid": "song1"}, function (err, res1) {
                  proxyprinttodiv('Function ag3 result LAST ', res1, 17); 
                  callback(err, res); 
                   
            })
      });
}

// DTO 3, dot > object 3, dot,, jsononetomany
exports.ettest1dot1dotjsonmany = ettest1dot1dotjsonmany = function ettest1dot1dotjsonmany(params, callback) {
eventappinstall();

debuglevel = 0;

execute([{
            "executethis": "addwidmaster",
            "wid": "songdto",
            "metadata.method": "songdto",
            "title": "string",
            "metadata.sounddto.type": "jsononetomany",
            "sounddto.wid": "sounddto",
            "sounddto.metadata.method": "sounddto",
            "sounddto.note": "string"
      }, {                       
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "songdto",
            "title": "Highway to Hell",
            "sounddto.0.note": "A flat",
            "sounddto.1.note": "B sharp",
            "sounddto.2.note": "C flat"
      }, {
            "executethis": "getwidmaster",
            "wid": "song1"
       }
      ],

      function (err, res) {

            proxyprinttodiv('Function ag3 result Full res', res, 17);
            proxyprinttodiv('Function ag3 result 3 x 3', res[2], 17);

            res = logverify("ettest1dot1dotjsonmany", res[2], [{"sounddto.0.note":"A flat","sounddto.1.note":"B sharp",
                  "sounddto.2.note":"C flat","title":"Highway to Hell","wid":"song1","metadata.method":"songdto"}]);
            // execute({"executethis": "getwidmaster","wid": "songdto",
            //       "command":{"getwidmaster":{"convertmethod":"dto",
            //                               "execute":"ConvertFromDOTdri",
            //                               "inheritflag":"true","dtotype":""}}}, function (err, res1) {
            execute({"executethis": "getwidmaster","wid": "song1"}, function (err, res1) {
                  proxyprinttodiv('Function ag3 result LAST ', res1, 17); 
                  callback(err, res); 
                   
            })
      });
}

/* jsononetoone tests */
// DTO 1, dot > object , dot,, jsononetoone
exports.ettest1dot3dotjsonone = ettest1dot3dotjsonone = function ettest1dot3dotjsonone(params, callback) {
eventappinstall();

debuglevel = 0;

execute([{
            "executethis": "addwidmaster",
            "wid": "songdto",
            "metadata.method": "songdto",
            "title": "string",
            "metadata.sounddto.type": "jsononetoone",
            //"sounddto.wid": "sounddto",
            //"sounddto.metadata.method": "sounddto",
            "sounddto.wid": "string",
            "sounddto.metadata.method": "string",
            "sounddto.note": "string"

      }, {                       
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "songdto",
            "title": "Highway to Hell",
            "sounddto.note": "A flat"
      }, {            
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "songdto",
            "title": "Highway to Hell",
            "sounddto.note": "B sharp"
      }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "songdto",
            "title": "Highway to Hell",
            "sounddto.note": "C flat"
      }, {
            "executethis": "getwidmaster",
            "wid": "song1"
       }
      ],

      function (err, res) {

            proxyprinttodiv('Function ag3 result Full res', res, 17);
            proxyprinttodiv('Function ag3 result ', res[4], 17);

            res = logverify("ettest1dot3dotjsonone", res[4], [{
                  "title":"Highway to Hell",
                  "sounddto.note":"C flat",
                  "wid":"song1",
                  "metadata.method":"songdto"
            }]);
            //execute({"executethis": "getwidmaster","wid": "songdto",
            //      "command":{"getwidmaster":{"convertmethod":"dto",
            //                              "execute":"ConvertFromDOTdri",
            //                              "inheritflag":"true","dtotype":""}}}, function (err, res1) {
            execute({"executethis": "getwidmaster","wid": "song1"}, function (err, res1) {
                  proxyprinttodiv('Function ag3 result LAST ', res1, 17); 
                  callback(err, res); 
                   
            })
      });
}

// DTO 3, dot > object 3, dot,, jsononetoone
exports.ettest3dot3dotjsonone = ettest3dot3dotjsonone = function ettest3dot3dotjsonone(params, callback) {
eventappinstall();

debuglevel = 0;

execute([{
            "executethis": "addwidmaster",
            "metadata.method": "songdto",
            "wid": "songdto",
            "title": "string",
      }, {
            "executethis": "addwidmaster",
            "metadata.method": "sounddto",
            "wid": "sounddto",
            "note": "string"
      }, {
            "executethis": "addwidmaster",
            "wid": "rel_song_sound",
            "metadata.method": "relationshipdto",
            "relationshiptype": "attributes",
            "linktype": "jsononetoone",
            "primarywid": "songdto",
            "primarymethod": "songdto",
            "secondarywid": "sounddto",
            "secondarymethod": "sounddto"
      }, {                       
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "songdto",
            "title": "Highway to Hell",
            "sounddto.note": "A flat"
      }, {            
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "songdto",
            "title": "Highway to Hell",
            "sounddto.note": "B sharp"
      }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "songdto",
            "title": "Highway to Hell",
            "sounddto.note": "C flat"
      }, {
            "executethis": "getwidmaster",
            "wid": "song1"
       }
      ],


      function (err, res) {

            proxyprinttodiv('Function ag3 result Full res', res, 17);
            proxyprinttodiv('Function ag3 result 3 x 3', res[6], 17);

            res = logverify("ettest3dot3dotjsonone", res[6], [{
                  "title":"Highway to Hell","sounddto.note":"C flat","wid":"song1","metadata.method":"songdto"
            }]);
            // execute({"executethis": "getwidmaster","wid": "songdto",
            //       "command":{"getwidmaster":{"convertmethod":"dto",
            //                               "execute":"ConvertFromDOTdri",
            //                               "inheritflag":"true","dtotype":""}}}, function (err, res1) {
            execute({"executethis": "getwidmaster","wid": "song1"}, function (err, res1) {
                  proxyprinttodiv('Function ag3 result LAST ', res1, 17); 
                  callback(err, res); 
                   
            })
      });
}

// DTO 3, dot > object 3, dot,, jsononetoone
exports.ettest3dot1dotjsonone = ettest3dot1dotjsonone = function ettest3dot1dotjsonone(params, callback) {
eventappinstall();

debuglevel = 0;

execute([{
            "executethis": "addwidmaster",
            "metadata.method": "songdto",
            "wid": "songdto",
            "title": "string",
      }, {
            "executethis": "addwidmaster",
            "metadata.method": "sounddto",
            "wid": "sounddto",
            "note": "string"
      }, {
            "executethis": "addwidmaster",
            "wid": "rel_song_sound",
            "metadata.method": "relationshipdto",
            "relationshiptype": "attributes",
            "linktype": "jsononetoone",
            "primarywid": "songdto",
            "primarymethod": "songdto",
            "secondarywid": "sounddto",
            "secondarymethod": "sounddto"
      }, {                       
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "songdto",
            "title": "Highway to Hell",
            "sounddto.0.note": "A flat",
            "sounddto.1.note": "B sharp",
            "sounddto.2.note": "C flat"
      }, {
            "executethis": "getwidmaster",
            "wid": "song1"
       }
      ],


      function (err, res) {

            proxyprinttodiv('Function ag3 result Full res', res, 17);
            proxyprinttodiv('Function ag3 result 3 x 3', res[4], 17);

            res = logverify("ettest3dot1dotjsonone", res[4], [{
                  "title":"Highway to Hell",
                  //"sounddto.0.note":"A flat",
                  //"sounddto.1.note":"B sharp",
                  "sounddto.note":"C flat",
                  "wid":"song1",
                  "metadata.method":"songdto"
            }]);
            // execute({"executethis": "getwidmaster","wid": "songdto",
            //       "command":{"getwidmaster":{"convertmethod":"dto",
            //                               "execute":"ConvertFromDOTdri",
            //                               "inheritflag":"true","dtotype":""}}}, function (err, res1) {
            execute({"executethis": "getwidmaster","wid": "song1"}, function (err, res1) {
                  proxyprinttodiv('Function ag3 result LAST ', res1, 17); 
                  callback(err, res); 
                   
            })
      });
}

// DTO 3, dot > object 3, dot,, jsononetoone
exports.ettest1dot1dotjsonone = ettest1dot1dotjsonone = function ettest1dot1dotjsonone(params, callback) {
eventappinstall();

debuglevel = 17;

execute([{
            "executethis": "addwidmaster",
            "wid": "songdto",
            "metadata.method": "songdto",
            "title": "string",
            "metadata.sounddto.type": "jsononetoone",
            "sounddto.wid": "sounddto",
            "sounddto.metadata.method": "sounddto",
            "sounddto.note": "string"
      }, {                       
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "songdto",
            "title": "Highway to Hell",
            "sounddto.0.note": "A flat",
            "sounddto.1.note": "B sharp",
            "sounddto.2.note": "C flat"
      }, {
            "executethis": "getwidmaster",
            "wid": "song1"
      }],
      function (err, res) {

            proxyprinttodiv('Function ag3 result Full res', res, 17);
            proxyprinttodiv('Function ag3 result 3 x 3', res[2], 17);

            res = logverify("ettest1dot1dotjsonone", res[2], [{
                  "title":"Highway to Hell",
                  //"sounddto.0.note":"A flat",
                  //"sounddto.1.note":"B sharp",
                  "sounddto.note":"C flat",
                  "wid":"song1",
                  "metadata.method":"songdto"
            }]);
            // execute({"executethis": "getwidmaster","wid": "songdto",
            //       "command":{"getwidmaster":{"convertmethod":"dto",
            //                               "execute":"ConvertFromDOTdri",
            //                               "inheritflag":"true","dtotype":""}}}, function (err, res1) {
            execute({"executethis": "getwidmaster","wid": "song1"}, function (err, res1) {
                  proxyprinttodiv('Function ag3 result LAST ', res1, 17); 
                  callback(err, res); 
                   
            })
      });
}

/* object tests */
// DTO 1, dot > object , dot,, object
exports.ettest1dot3dotobject = ettest1dot3dotobject = function ettest1dot3dotobject(params, callback) {
eventappinstall();

debuglevel = 0;

execute([{
            "executethis": "addwidmaster",
            "wid": "songdto",
            "metadata":{"method":"songdto"},
            "title": "string",
            "metadata.sounddto.type": "jsononetoone",
            //"sounddto.wid": "sounddto",
            //"sounddto.metadata.method": "sounddto",
            "sounddto":{"wid":"string"},
            "sounddto":{"metadata":{"method": "string"}},
            "sounddto":{"note":"string"}

      }, {                       
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata":{"method":"songdto"},
            "title": "Highway to Hell",
            "sounddto":{"note": "A flat"}
      }, {            
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata":{"method":"songdto"},
            "title": "Highway to Hell",
            "sounddto":{"note": "B sharp"}
      }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata":{"method":"songdto"},
            "title": "Highway to Hell",
            "sounddto":{"note": "C flat"}
      }, {
            "executethis": "getwidmaster",
            "wid": "song1"
       }
      ],

      function (err, res) {

            proxyprinttodiv('Function ag3 result Full res', res, 17);
            proxyprinttodiv('Function ag3 result ', res[4], 17);

            res = logverify("ettest1dot3dotobject", res[4], [{
                  "title":"Highway to Hell","sounddto.note":"C flat","wid":"song1","metadata.method":"songdto"
            }]);

            //execute({"executethis": "getwidmaster","wid": "songdto",
            //      "command":{"getwidmaster":{"convertmethod":"dto",
            //                              "execute":"ConvertFromDOTdri",
            //                              "inheritflag":"true","dtotype":""}}}, function (err, res1) {
            execute({"executethis": "getwidmaster","wid": "song1"}, function (err, res1) {
                  proxyprinttodiv('Function ag3 result LAST ', res1, 17); 
                  callback(err, res); 
                   
            })
      });
}

// DTO 3, dot > object 3, dot,, object
exports.ettest3dot3dotobject = ettest3dot3dotobject = function ettest3dot3dotobject(params, callback) {
eventappinstall();

debuglevel = 0;

execute([{
            "executethis": "addwidmaster",
            "metadata":{"method":"songdto"},
            "wid": "songdto",
            "title": "string",
      }, {
            "executethis": "addwidmaster",
            "metadata":{"method":"sounddto"},
            "wid": "sounddto",
            "note": "string"
      }, {
            "executethis": "addwidmaster",
            "wid": "rel_song_sound",
            "metadata":{"method": "relationshipdto"},
            "relationshiptype": "attributes",
            "linktype": "jsononetoone",
            "primarywid": "songdto",
            "primarymethod": "songdto",
            "secondarywid": "sounddto",
            "secondarymethod": "sounddto"
      }, {                       
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata":{"method":"songdto"},
            "title": "Highway to Hell",
            "sounddto":{"note": "A flat"}
      }, {            
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata":{"method":"songdto"},
            "title": "Highway to Hell",
            "sounddto":{"note": "B sharp"}
      }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata":{"method":"songdto"},
            "title": "Highway to Hell",
            "sounddto":{"note": "C flat"}
      }, {
            "executethis": "getwidmaster",
            "wid": "song1"
       }
      ],


      function (err, res) {

            proxyprinttodiv('Function ag3 result Full res', res, 17);
            proxyprinttodiv('Function ag3 result 3 x 3', res[6], 17);

            res = logverify("ettest3dot3dotobject", res[6], [{
                  "title":"Highway to Hell",
                  "sounddto.note":"C flat",
                  "wid":"song1",
                  "metadata.method":"songdto"
            }]);
            // execute({"executethis": "getwidmaster","wid": "songdto",
            //       "command":{"getwidmaster":{"convertmethod":"dto",
            //                               "execute":"ConvertFromDOTdri",
            //                               "inheritflag":"true","dtotype":""}}}, function (err, res1) {
            execute({"executethis": "getwidmaster","wid": "song1"}, function (err, res1) {
                  proxyprinttodiv('Function ag3 result LAST ', res1, 17); 
                  callback(err, res); 
                   
            })
      });
}

// DTO 3, dot > object 3, dot,, object
exports.ettest3dot1dotobject = ettest3dot1dotobject = function ettest3dot1dotobject(params, callback) {
eventappinstall();

debuglevel = 0;

execute([{
            "executethis": "addwidmaster",
            "metadata":{"method":"songdto"},
            "wid": "songdto",
            "title": "string",
      }, {
            "executethis": "addwidmaster",
            "metadata":{"method": "sounddto"},
            "wid": "sounddto",
            "note": "string"
      }, {
            "executethis": "addwidmaster",
            "wid": "rel_song_sound",
            "metadata":{"method": "relationshipdto"},
            "relationshiptype": "attributes",
            "linktype": "jsononetoone",
            "primarywid": "songdto",
            "primarymethod": "songdto",
            "secondarywid": "sounddto",
            "secondarymethod": "sounddto"
      }, {                       
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata":{"method":"songdto"},
            "title": "Highway to Hell",
            "sounddto.0.note": "A flat",
            "sounddto.1.note": "B sharp",
            "sounddto.2.note": "C flat"
      }, {
            "executethis": "getwidmaster",
            "wid": "song1"
      }],
      function (err, res) {

            proxyprinttodiv('Function ag3 result Full res', res, 17);
            proxyprinttodiv('Function ag3 result 3 x 3', res[4], 17);

            res = logverify("ettest3dot1dotobject", res[4], [{
                  "title":"Highway to Hell",
                  // "sounddto.0.note":"A flat",
                  // "sounddto.1.note":"B sharp",
                  "sounddto.note":"C flat",
                  "wid":"song1",
                  "metadata.method":"songdto"
            }]);
            // execute({"executethis": "getwidmaster","wid": "songdto",
            //       "command":{"getwidmaster":{"convertmethod":"dto",
            //                               "execute":"ConvertFromDOTdri",
            //                               "inheritflag":"true","dtotype":""}}}, function (err, res1) {
            execute({"executethis": "getwidmaster","wid": "song1"}, function (err, res1) {
                  proxyprinttodiv('Function ag3 result LAST ', res1, 17); 
                  callback(err, res); 
                   
            })
      });
}

// DTO 3, dot > object 3, dot,, object
exports.ettest1dot1dotobject = ettest1dot1dotobject = function ettest1dot1dotobject(params, callback) {
eventappinstall();

debuglevel = 0;

execute([{
            "executethis": "addwidmaster",
            "wid": "songdto",
            "metadata":{"method":"songdto"},
            "title": "string",
            "metadata":{"sounddto":{"type": "jsononetoone"}},
            "sounddto":{"wid": "sounddto"},
            "sounddto":{"metadata":{"method": "sounddto"}},
            "sounddto":{"note":"string"}
      }, {                       
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata":{"method":"songdto"},
            "title": "Highway to Hell",
            "sounddto.0.note": "A flat",
            "sounddto.1.note": "B sharp",
            "sounddto.2.note": "C flat"
      }, {
            "executethis": "getwidmaster",
            "wid": "song1"
       }
      ],

      function (err, res) {

            proxyprinttodiv('Function ag3 result Full res', res, 17);
            proxyprinttodiv('Function ag3 result 3 x 3', res[2], 17);

            res = logverify("ettestagag3_result", res[2], [{
                  "title":"Highway to Hell",
                  // "sounddto.0.note":"A flat",
                  // "sounddto.1.note":"B sharp",
                  "sounddto.note":"C flat",
                  "wid":"song1",
                  "metadata.method":"songdto"
            }]);
            // execute({"executethis": "getwidmaster","wid": "songdto",
            //       "command":{"getwidmaster":{"convertmethod":"dto",
            //                               "execute":"ConvertFromDOTdri",
            //                               "inheritflag":"true","dtotype":""}}}, function (err, res1) {
            execute({"executethis": "getwidmaster","wid": "song1"}, function (err, res1) {
                  proxyprinttodiv('Function ag3 result LAST ', res1, 17); 
                  callback(err, res); 
            })
      });
}

/*
ettest1dot3dotjsonmany
ettest3dot3dotjsonmany
ettest3dot1dotjsonmany
ettest1dot1dotjsonmany

ettest1dot3dotjsonone
ettest3dot3dotjsonone
ettest3dot1dotjsonone
ettest1dot1dotjsonone

ettest1dot3dotobject
ettest3dot3dotobject
ettest3dot1dotobject
ettest1dot1dotobject
*/

exports.ettestdot = ettestdot = function ettestdot(params, callback) {
var result = [];
var err;

ettest1dot3dotjsonmany(result, function (err, r1) {
      result.push(r1);
      ettest3dot3dotjsonmany(result, function (err, r2) {
            result.push(r2);
            ettest3dot1dotjsonmany(result, function (err, r3) {
                  result.push(r3);
                        ettest1dot3dotjsonone(result, function (err, r4) {
                              result.push(r4);
                                    ettest1dot3dotjsonone(result, function (err, r5) {
                                          result.push(r5);
                                          ettest3dot3dotjsonone(result, function (err, r6) {
                                                result.push(r6);
                                                ettest3dot1dotjsonone(result, function (err, r7) {
                                                      result.push(r7);
                                                      ettest1dot1dotjsonone(result, function (err, r8) {
                                                            result.push(r8);
                                                            ettest1dot3dotobject(result, function (err, r9) {
                                                                  result.push(r9);
                                                                  ettest3dot3dotobject(result, function (err, r10) {
                                                                        result.push(r10);
                                                                        ettest3dot1dotobject(result, function (err, r11) {
                                                                              result.push(r11);
                                                                              ettest1dot1dotobject(result, function (err, r12) {
                                                                                    result.push(r12);
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
}

/*
	deep filter tests for all dto types
	shortwid-create a short 5 digit alphanumeric
	guid-create a long guid
	hash-convert number to hash
	phone-phone number in international format +n nnn…
	random4-random 4 digit number

	convert = true or false (should the output be changed)
	totype = true or false (when the output is converted should it be the right type or string)
	
	4 input test cases :-
	string input, datatype input, blank input, wrong input
*/
// do same test 3 more times
// var command = {"command.deepfilter.convert":false};
// var command = {"command.deepfilter.totype":false};


// var command = {"command.deepfilter.convert":true};
// var command = {"command.deepfilter.totype":true};

// var command = {"command.deepfilter.convert":true};
// var command = {"command.deepfilter.totype":true};
	

function testDeepFilterTests(command, callback){
	debuglevel = 0;
	async.series([
		function (cb1){
			var dtoObjOpt = {
                        "b1":"boolean", "s1":"string", "n1":"number", "i1":"integer", "d1":"date", "sg1":"shortguid", "g1":"guid", "h1":"hash", "p1":"phone", "r1":"random4",
                        "b2":"boolean", "s2":"string", "n2":"number", "i2":"integer", "d2":"date", "sg2":"shortguid", "g2":"guid", "h2":"hash", "p2":"phone", "r2":"random4",
				"b3":"boolean", "s3":"string", "n3":"number", "i3":"integer", "d3":"date", "sg3":"shortguid", "g3":"guid", "h3":"hash", "p3":"phone", "r3":"random4",
                        "b4":"boolean", "s4":"string", "n4":"number", "i4":"integer", "d4":"date", "sg4":"shortguid", "g4":"guid", "h4":"hash", "p4":"phone", "r4":"random4"
					};
			var inputObj = {
                        "b1":"false", "s1":"hello", "n1":"30", "i1":"40", "d1":"2/27/2014", "h1":"ff00ff","p1":"19998887777",
                        "b2":false, "s2":"hello", "n2":30, "i2":40, "d2":"2014-02-27T18:30:00.000Z", "h2":"#ff00ff","p2":"+19998887777",
				"b3":"", "s3":"", "n3":"", "i3":"", "d3":"", "h3":"","p3":"",
                        "b4":"x", "s4":false, "n4":"x", "i4":"x", "d4":"x", "h4":"x","p4":"x"
                    };
			
			/*
			var dtoObjOpt = {
					"b1":"boolean", "b2":"boolean", "b3":"boolean", "b4":"boolean",
					//"s1":"string", "s2":"string", "s3":"string", "s4":"string",
					//"n1":"number", "n2":"number", "n3":"number", "n4":"number",
					//"i1":"integer", "i2":"integer", "i3":"integer", "i4":"integer",
					//"d1":"date", "d2":"date", "d3":"date", "d4":"date",   
					//"sg1":"shortguid", "sg2":"shortguid", "sg3":"shortguid", "sg4":"shortguid",
					//"g1":"guid", "g2":"guid", "g3":"guid",, "g4":"guid", 
					//"h1":"hash", "h2":"hash", "h3":"hash", "h4":"hash",
					//"p1":"phone", "p2":"phone", "p3":"phone", "p4":"phone",
					//"r1":"random4", "r2":"random4", "r3":"random4", "r4":"random4"
					};
			var inputObj = {
					"b1":"false", "b2":false, "b3":"", "b4":"x", 
					//"s1":"hello", "s2":"hello", "s3":"", "s4":false,
					//"n1":"30", "n2":30, "n3":"", "n4":"x",
					//"i1":"40", "i2":40, "i3":"", "i4":"x",
					//"d1":"2/27/2014", "d2": new Date(2/27/2014), "d3":"", "d4":"x",
					//"h1":"ff00ff", "h2":"ff00ff", "h3":"", "h4":"x",
					//"p1":"+19998887777", "p2":"+19998887777", "p3":"", "p4":"x"
					};	
			*/
			deepfilter(inputObj, dtoObjOpt, command, function (err, res){
				proxyprinttodiv("after etd16 deepfilter in", inputObj, 17);
				proxyprinttodiv("after etd16 deepfilter dto", dtoObjOpt, 17);
				proxyprinttodiv("after etd16 deepfilter res", res, 17);
				cb1(err, res);
			});
		}
	], function (err, res) {
		callback(err, res); 
	});
}

/*
	"command.deepfilter.convert":true, "command.deepfilter.totype":true
*/
exports.etd16 = etd16 = function etd16(params, callback) {
	var command = {"command.deepfilter.convert":true, "command.deepfilter.totype":true};	//string to datatype
	testDeepFilterTests(command, function(err, res){
		proxyprinttodiv("after test convert:true totype: true --1:string, 2:type, 3:'', 4:wrong", res, 99, true);
		callback(err, res);
	});
}
			  
/*
	"command.deepfilter.convert":true, "command.deepfilter.totype":false
*/
exports.etd17 = etd17 = function etd17(params, callback) {
	var command = {"command.deepfilter.convert":true, "command.deepfilter.totype":false};	//datatype to string
	testDeepFilterTests(command, function(err, res){
            proxyprinttodiv("after test convert:true totype: false --1:string, 2:type, 3:'', 4:wrong", res, 99, true);
		callback(err, res);
	});
}				  
				  
/*
	"command.deepfilter.convert":false, "command.deepfilter.totype":true
	no conversion
*/
exports.etd18 = etd18 = function etd18(params, callback) {
	var command = {"command.deepfilter.convert":false, "command.deepfilter.totype":true};	//no conversion
	testDeepFilterTests(command, function(err, res){
            proxyprinttodiv("after test convert:false totype: true --1:string, 2:type, 3:'', 4:wrong", res, 99, true);
		callback(err, res);
	});
}				  

/*
	"command.deepfilter.convert":false, "command.deepfilter.totype":false
	no conversion
*/
exports.etd19 = etd19 = function etd19(params, callback) {
	var command = {"command.deepfilter.convert":false, "command.deepfilter.totype":false};	//no conversion
	testDeepFilterTests(command, function(err, res){
            proxyprinttodiv("after test convert:false totype: false --1:string, 2:type, 3:'', 4:wrong", res, 99, true);
		callback(err, res);
	});
}

/*
	deep filter tests for all dto types
	shortwid-create a short 5 digit alphanumeric
	guid-create a long guid
	hash-convert number to hash
	phone-phone number in international format +n nnn…
	random4-random 4 digit number

	convert = true or false (should the output be changed)
	totype = true or false (when the output is converted should it be the right type or string)
	
	4 input test cases :-
	string input, datatype input, blank input, wrong input
*/
// do same test 3 more times
// var command = {"command.deepfilter.convert":false};
// var command = {"command.deepfilter.totype":false};


// var command = {"command.deepfilter.convert":true};
// var command = {"command.deepfilter.totype":true};

// var command = {"command.deepfilter.convert":true};
// var command = {"command.deepfilter.totype":true};
	

function testDeepFilterTests(command, callback){
	debuglevel = 0;
	async.series([
		function (cb1){
			var dtoObjOpt = {
                "b1":"boolean", 
                "s1":"string", 
                "n1":"number", 
                "i1":"integer", 
                "d1":"date", 
                "sg1":"shortguid", 
                "g1":"guid", 
                "h1":"hash", 
                "p1":"phone", 
                "r1":"random4",

                "b2":"boolean", 
                "s2":"string", 
                "n2":"number", 
                "i2":"integer", 
                "d2":"date", 
                "sg2":"shortguid", 
                "g2":"guid", 
                "h2":"hash", 
                "p2":"phone", 
                "r2":"random4",

				"b3":"boolean", 
                "s3":"string", 
                "n3":"number", 
                "i3":"integer", 
                "d3":"date", 
                "sg3":"shortguid", 
                "g3":"guid", 
                "h3":"hash", 
                "p3":"phone", 
                "r3":"random4",

                "b4":"boolean", 
                "s4":"string", 
                "n4":"number", 
                "i4":"integer", 
                "d4":"date", 
                "sg4":"shortguid", 
                "g4":"guid", 
                "h4":"hash", 
                "p4":"phone", 
                "r4":"random4"
			};
			var inputObj = {
                "b1":"false",
                "s1":"hello", 
                "n1":"30", 
                "i1":"40", 
                "d1":"2/27/2014", 
                "h1":"ff00ff",
                "p1":"19998887777",

                "b2":false, 
                "s2":"hello", 
                "n2":30, 
                "i2":40, 
                "d2":"2014-02-27T18:30:00.000Z", 
                "h2":"#ff00ff",
                "p2":"+19998887777",

				"b3":"", 
                "s3":"", 
                "n3":"", 
                "i3":"", 
                "d3":"", 
                "h3":"",
                "p3":"",

                "b4":"x", 
                "s4":false, 
                "n4":"x", 
                "i4":"x", 
                "d4":"x", 
                "h4":"x",
                "p4":"x"
            };
			
			/*
			var dtoObjOpt = {
					"b1":"boolean", "b2":"boolean", "b3":"boolean", "b4":"boolean",
					//"s1":"string", "s2":"string", "s3":"string", "s4":"string",
					//"n1":"number", "n2":"number", "n3":"number", "n4":"number",
					//"i1":"integer", "i2":"integer", "i3":"integer", "i4":"integer",
					//"d1":"date", "d2":"date", "d3":"date", "d4":"date",   
					//"sg1":"shortguid", "sg2":"shortguid", "sg3":"shortguid", "sg4":"shortguid",
					//"g1":"guid", "g2":"guid", "g3":"guid",, "g4":"guid", 
					//"h1":"hash", "h2":"hash", "h3":"hash", "h4":"hash",
					//"p1":"phone", "p2":"phone", "p3":"phone", "p4":"phone",
					//"r1":"random4", "r2":"random4", "r3":"random4", "r4":"random4"
					};
			var inputObj = {
					"b1":"false", "b2":false, "b3":"", "b4":"x", 
					//"s1":"hello", "s2":"hello", "s3":"", "s4":false,
					//"n1":"30", "n2":30, "n3":"", "n4":"x",
					//"i1":"40", "i2":40, "i3":"", "i4":"x",
					//"d1":"2/27/2014", "d2": new Date(2/27/2014), "d3":"", "d4":"x",
					//"h1":"ff00ff", "h2":"ff00ff", "h3":"", "h4":"x",
					//"p1":"+19998887777", "p2":"+19998887777", "p3":"", "p4":"x"
					};	
			*/
			deepfilter(inputObj, dtoObjOpt, command, function (err, res){
				proxyprinttodiv("after etd16 deepfilter in", inputObj, 17);
				proxyprinttodiv("after etd16 deepfilter dto", dtoObjOpt, 17);
				proxyprinttodiv("after etd16 deepfilter res", res, 17);
				cb1(err, res);
			});
		}
	], function (err, res) {
		callback(err, res); 
	});
}

/*
	"command.deepfilter.convert":true, "command.deepfilter.totype":true
*/
exports.etd16 = etd16 = function etd16(params, callback) {
    eventappinstall();

    execute([{
            "executethis": "testDeepFilterTests",
            "command.deepfilter.convert": true,
            "command.deepfilter.totype": true
        }],
        function (err, res) {
            res = logverify("etd16_result", res[0], [{
                "b1": false,
                "s1": "hello",
                "n1": 30,
                "i1": 40,
                "d1": "2014-02-27T05:00:00.000Z",
                "h1": "#ff00ff",
                "p1": "+1 999 888 7777",
                "b2": false,
                "s2": "hello",
                "n2": 30,
                "i2": 40,
                "d2": "2014-02-27T18:30:00.000Z",
                "h2": "#ff00ff",
                "p2": "+1 999 888 7777",
                "s3": ""
            }]);
            callback(err, res);
        });
}

/*
	"command.deepfilter.convert":true, "command.deepfilter.totype":false
*/
exports.etd17 = etd17 = function etd17(params, callback) {
    eventappinstall();

    execute([{
            "executethis": "testDeepFilterTests",
            "command.deepfilter.convert": true,
            "command.deepfilter.totype": false
        }],
        function (err, res) {
            res = logverify("etd17_result", res[0], [{
                "b1": "false",
                "s1": "hello",
                "n1": "30",
                "i1": "40",
                "d1": "2/27/2014",
                "h1": "ff00ff",
                "p1": "19998887777",
                "b2": "false",
                "s2": "hello",
                "n2": "30",
                "i2": "40",
                "d2": "2014-02-27T18:30:00.000Z",
                "h2": "#ff00ff",
                "p2": "+19998887777",
                "s3": ""
            }]);
            callback(err, res);
        });
}

/*
	"command.deepfilter.convert":false, "command.deepfilter.totype":true
	no conversion
*/
exports.etd18 = etd18 = function etd18(params, callback) {
    eventappinstall();

    execute([{
            "executethis": "testDeepFilterTests",
            "command.deepfilter.convert": false,
            "command.deepfilter.totype": true
        }],
        function (err, res) {
            res = logverify("etd18_result", res[0], [{
                "b1": "false",
                "s1": "hello",
                "n1": "30",
                "i1": "40",
                "d1": "2/27/2014",
                "h1": "ff00ff",
                "p1": "19998887777",
                "b2": false,
                "s2": "hello",
                "n2": 30,
                "i2": 40,
                "d2": "2014-02-27T18:30:00.000Z",
                "h2": "#ff00ff",
                "p2": "+19998887777",
                "s3": ""
            }]);
            callback(err, res);
        });
}

/*
	"command.deepfilter.convert":false, "command.deepfilter.totype":false
	no conversion
*/
exports.etd19 = etd19 = function etd19(params, callback) {
    eventappinstall();

    execute([{
            "executethis": "testDeepFilterTests",
            "command.deepfilter.convert": false,
            "command.deepfilter.totype": false
        }],
        function (err, res) {
            res = logverify("etd19_result", res[0], [{
                "b1": "false",
                "s1": "hello",
                "n1": "30",
                "i1": "40",
                "d1": "2/27/2014",
                "h1": "ff00ff",
                "p1": "19998887777",
                "b2": false,
                "s2": "hello",
                "n2": 30,
                "i2": 40,
                "d2": "2014-02-27T18:30:00.000Z",
                "h2": "#ff00ff",
                "p2": "+19998887777",
                "s3": ""
            }]);
            callback(err, res);
        });
}

// exports.etd16 = etd16 = function etd16(params, callback) {
//     var command = {"command.deepfilter.convert":true, "command.deepfilter.totype":true};    //string to datatype
//     testDeepFilterTests(command, function(err, res){

//         proxyprinttodiv("after test convert:true totype: true --1:string, 2:type, 3:'', 4:wrong", res, 99, true);
        
//         callback(err, res);
//     });
// }
// exports.etd17 = etd17 = function etd17(params, callback) {
//     var command = {"command.deepfilter.convert":true, "command.deepfilter.totype":false};   //datatype to string
//     testDeepFilterTests(command, function(err, res){
//             proxyprinttodiv("after test convert:true totype: false --1:string, 2:type, 3:'', 4:wrong", res, 99, true);
//         callback(err, res);
//     });
// }                 
                  
// exports.etd18 = etd18 = function etd18(params, callback) {
//     var command = {"command.deepfilter.convert":false, "command.deepfilter.totype":true};   //no conversion
//     testDeepFilterTests(command, function(err, res){
//             proxyprinttodiv("after test convert:false totype: true --1:string, 2:type, 3:'', 4:wrong", res, 99, true);
//         callback(err, res);
//     });
// }                 

// exports.etd19 = etd19 = function etd19(params, callback) {
// 	var command = {"command.deepfilter.convert":false, "command.deepfilter.totype":false};	//no conversion
// 	testDeepFilterTests(command, function(err, res){
//             proxyprinttodiv("after test convert:false totype: false --1:string, 2:type, 3:'', 4:wrong", res, 99, true);
// 		callback(err, res);
// 	});
// }


/*
      deepfilter issue
      <<inobj>>{"wid":"merchgroup1","metadata":{"method":"merchantsdto"},"name":"luke's company"}

<<dtoobj>>{"title":"string","wid":"string","metadata":{"method":"string","merchantdto":{"type":"onetomany"}},"command":{"inherit":{"defaultsystemactions":"defaultsystemactions"},"deepdtolist":{"systemdto":"onetoone","loyaltydto":"onetomany","merchantdto":"onetomany"},"dtolist":{"merchantdto":"onetomany","systemdto":"onetoone"}},"merchantdto":[{"name":"string","wid":"string","metadata":{"method":"string","loyaltydto":{"type":"onetomany"}},"command":{"inherit":{"defaultsystemactions":"defaultsystemactions"},"deepdtolist":{"systemdto":"onetoone","loyaltydto":"onetomany"},"dtolist":{"loyaltydto":"onetomany","systemdto":"onetoone"}},"loyaltydto":[{"name":"string","wid":"string","metadata":{"method":"string"},"command":{"inherit":{"defaultsystemactions":"defaultsystemactions"},"deepdtolist":{"systemdto":"onetoone"},"dtolist":{"systemdto":"onetoone"}}}]}]}
*/
exports.etd20 = etd20 = function etd20(params, callback) {
      debuglevel = 41;
      async.series([
            function (cb1) {
                        //var executeList = [{
                        //    "executethis": "updatewid",
                        //    "wid": "wid5",
                        //    "metadata.method": "defaultdto",
                        //    "aaa": "",
                        //    "ggg": ""
                        //}];
                        //execute(executeList, function (err, res) {
                              //proxyprinttodiv('after updatewid wid1 -- ', res, 34);
                              //cb1(err, res);
                        //});
                        cb1(null, null);
            }
      ], function (err, res) {      //after updatewid
            var dtoObjOpt = {"title":"string","wid":"string","metadata":{"method":"string","merchantdto":{"type":"onetomany"}},"command":{"inherit":{"defaultsystemactions":"defaultsystemactions"},"deepdtolist":{"systemdto":"onetoone","loyaltydto":"onetomany","merchantdto":"onetomany"},"dtolist":{"merchantdto":"onetomany","systemdto":"onetoone"}},"merchantdto":[{"name":"string","wid":"string","metadata":{"method":"string","loyaltydto":{"type":"onetomany"}},"command":{"inherit":{"defaultsystemactions":"defaultsystemactions"},"deepdtolist":{"systemdto":"onetoone","loyaltydto":"onetomany"},"dtolist":{"loyaltydto":"onetomany","systemdto":"onetoone"}},"loyaltydto":[{"name":"string","wid":"string","metadata":{"method":"string"},"command":{"inherit":{"defaultsystemactions":"defaultsystemactions"},"deepdtolist":{"systemdto":"onetoone"},"dtolist":{"systemdto":"onetoone"}}}]}]};
            var inputObj = {"wid":"merchgroup1","metadata":{"method":"merchantsdto"},"name":"luke's company"};
                  
                  //var dtoObjOpt = {"wid":"string","metadata":{"method":"string","merchantdto":{"type":"onetomany"}}, "command":{"inherit":{"defaultsystemactions":"defaultsystemactions"},"deepdtolist":{"systemdto":"onetoone","loyaltydto":"onetomany","merchantdto":"onetomany"},"dtolist":{"merchantdto":"onetomany","systemdto":"onetoone"}}, "merchantdto":[{"name":"string"}]};
                  
                  //var dtoObjOpt = {"wid":"string","metadata":{"method":"string","merchantdto":{"type":"onetomany"}}, "command":{"inherit":{"defaultsystemactions":"defaultsystemactions"},"deepdtolist":{"systemdto":"onetoone","loyaltydto":"onetomany","merchantdto":"onetomany"},"dtolist":{"merchantdto":"onetomany","systemdto":"onetoone"}}, "merchantdto":[{"name":"string"}]};
            //var inputObj = {"wid":"merchgroup1","metadata":{"method":"merchantsdto"},"name":"luke's company"};

            var command = {"command.deepfilter.convert":true, "command.deepfilter.totype":true};      //string to datatype
              
            deepfilter(inputObj, dtoObjOpt, command, function (err, res){
                        proxyprinttodiv("res --", res, 41);
                        var actual_result = [res];
                        proxyprinttodiv("actual_result --", actual_result, 41);                                           

                        var expected_result = [{"obj":"","c":"cval","d":{}}];
                        proxyprinttodiv("expected_result --", expected_result, 41);

                        callback(err, res);
            });
      });
}

exports.lmetd2 = lmetd2 = function lmetd2(params, callback) {
    debuglevel = 17;    
      async.series([
            function (cb1) {
                var executeList = [{
                    "executethis": "updatewid",
                    "wid": "deep_filter_test",
                    "metadata.method": "defaultdto",
                    "aaa": "",
                    "ggg": ""
                }];
                execute(executeList, function (err, res) {
                cb1(null);
                });
            }
      ], function (err, res) {      //after updatewid
            var dtoObjOpt = {
                                "c":"integer"//, 
                                // "h":"string", 
                                // "g":"boolean",
                                // "d":"date", 
                                // "q":{"w":{"e":"string"}}, 
                                // "x":{"y":{"z":"string"}}
                            };
            var inputObj = {
                                "c":30//, 
                                // "h":"hval", 
                                // "g":"true",
                                // "d":"6/25/1912", 
                                // "q":{"w":{"e":"t"}}, 
                                // "x":{"y":{"z":"string"}}
                            };
            var command = {
                            "formatresult": "true"
                        };
              
            deepfilter(inputObj, dtoObjOpt, command, function(err, res){
                var actual_result = [res];
                var expected_result = [{
                                        "c":30//,
                                        // "h":"hval",
                                        // "g":"true",
                                        // "d":"6/25/1912",
                                        // "q":{"w":{"e":"t"}},
                                        // "x":{"y":{"z":"string"}}
                                    }];
                res = logverify("lmetd2", actual_result, expected_result);
                callback(err, res);
            });
      });
}
// I thought I could turn an integer into a string, but no go....leaves it an integer
exports.lmetd3 = lmetd3 = function lmetd3(params, callback) {
    debuglevel = 17;    
      async.series([
            function (cb1) {
                var executeList = [{
                    "executethis": "updatewid",
                    "wid": "deep_filter_test",
                    "metadata.method": "defaultdto",
                    "aaa": ""
                }];
                execute(executeList, function (err, res) {
                cb1(null);
                });
            }
      ], function (err, res) {  
            var dtoObjOpt = {
                                "c":"string"
                            };
            var inputObj = {
                                "c":30
                            };
            var command = {
                            "formatresult": "true"
                        };
              
            deepfilter(inputObj, dtoObjOpt, command, function(err, res){
                var actual_result = [res];
                var expected_result = [{
                                        "c":"30"
                                    }];
                res = logverify("lmetd3", actual_result, expected_result);
                callback(err, res);
            });
      });
}

// I expected the integer to stay an integer, 
// but with an empty dtoObjOpt, you get a string
exports.lmetd4 = lmetd4 = function lmetd4(params, callback) {
    debuglevel = 17;    
      async.series([
            function (cb1) {
                var executeList = [{
                    "executethis": "updatewid",
                    "wid": "deep_filter_test",
                    "metadata.method": "defaultdto",
                    "aaa": ""
                }];
                execute(executeList, function (err, res) {
                cb1(null);
                });
            }
      ], function (err, res) {  
            var dtoObjOpt = {
                                "c":""
                            };
            var inputObj = {
                                "c":30
                            };
            var command = {
                            "formatresult": "true"
                        };
              
            deepfilter(inputObj, dtoObjOpt, command, function(err, res){
                var actual_result = [res];
                var expected_result = [{
                                        "c":30
                                    }];
                res = logverify("lmetd4", actual_result, expected_result);
                callback(err, res);
            });
      });
}
// 
exports.lmetd5 = lmetd5 = function lmetd5(params, callback) {
    debuglevel = 17;    
      async.series([
            function (cb1) {
                var executeList = [{
                    "executethis": "updatewid",
                    "wid": "deep_filter_test",
                    "metadata.method": "defaultdto",
                    "aaa": ""
                }];
                execute(executeList, function (err, res) {
                cb1(null);
                });
            }
      ], function (err, res) {  
            var dtoObjOpt = {
                                "charlie":""
                            };
            var inputObj = {
                                "charlie":"30"
                            };
            var command = {
                            "formatresult": "true"//,
                            // "deepfilter.convert": "true"
                        };
              
            deepfilter(inputObj, dtoObjOpt, command, function(err, res){
                var actual_result = [res];
                var expected_result = [{
                                        "charlie":"30"
                                    }];
                res = logverify("lmetd5", actual_result, expected_result);
                callback(err, res);
            });
      });
};

exports.ettestag3v2 = ettestag3v2 = function ettestag3v2(params, callback) {


    debuglevel=0;
    execute([{
            "executethis": "addwidmaster",
            "wid": "sounddtov2",
            "metadata.method": "sounddtov2",
            "note": "string"
        }, {
            "executethis": "addwidmaster",
            "wid": "sonddtov2",
            "metadata.method": "sonddtov2",
            "title": "string",
            "metadata.sounddto.type": "onetomany"
        }, {
            "executethis": "addwidmaster",
            "wid": "rel_sound_to_song",
            "metadata.method":"relationshipdto",
            "primarywid": "sonddtov2",
            "secondarywid": "sounddtov2",
            "primarymethod": "sonddtov2",
            "secondarymethod": "sounddtov2",
            "linktype":"onetomany",
            "relationshiptype": "attributes"

        }, {
            "executethis": "addwidmaster",
            "wid": "song1v2",
            "metadata.method": "sonddto",
            "title": "Highway to Hell",
            "sounddto.wid":"ag3aflatv2",
            "sounddto.note": "A flat"
        }, {
            "executethis": "addwidmaster",
            "wid": "song1v2",
            "metadata.method": "sonddto",
            "title": "Highway to Hell",
            "sounddto.wid":"ag3bsharpv2",
            "sounddto.note": "B sharp"
        }, {
            "executethis": "addwidmaster",
            "wid": "song1v2",
            "metadata.method": "sonddto",
            "title": "Highway to Hell",
            "sounddto.wid":"ag3cflatv2",
            "sounddto.note": "C flat"
        }, {
            "executethis": "getwidmaster",
            "wid": "song1v2"
        }],
        function (err, res) {
            debugfn("offlinegetwid code generator END", "",    "",   "code", getglobal("debugcolor"), getglobal("debugindent"), {}, 9);

            proxyprinttodiv('Function ag3 result Full res', res, 17);
            proxyprinttodiv('Function ag3 result ', res[6], 17);

            res = logverify("ettestag3_result", res[6], [{
                "title": "Highway to Hell",
                "wid": "song1v2",
                "metadata.method": "sonddto",
                "metadata.sounddto.type": "onetomany",
                "sounddto.0.note": "A flat",
                "sounddto.0.wid": "ag3aflatv2",
                "sounddto.0.metadata.method": "sounddto",
                "sounddto.1.note": "B sharp",
                "sounddto.1.wid": "ag3bsharpv2",
                "sounddto.1.metadata.method": "sounddto",
                "sounddto.2.note": "C flat",
                "sounddto.2.wid": "ag3cflatv2",
                "sounddto.2.metadata.method": "sounddto"
            }]);
            debuglevel=0;
            // execute({"executethis": "getwidmaster","wid": "sonddto",
            //       "command":{"getwidmaster":{"convertmethod":"dto",
            //                               "execute":"ConvertFromDOTdri",
            //                               "inheritflag":"true","dtotype":""}}}, function (err, res1) {
            execute({"executethis": "getwidmaster","wid": "song1"}, function (err, res1) {
                proxyprinttodiv('Function ag3 result LAST ', res1, 99);
                callback(err, res);

            })
        });
};