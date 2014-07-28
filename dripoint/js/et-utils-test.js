
function run_cat1_tests(params, callback)
{
	var filter = {'category':'cat1'};
	console.log('sending param {"category":"cat1"} to run_filtered_functions()');
	run_filtered_functions(filter, function (err, res) {
			console.log('end run_cat1_tests');
		});

}

function run_daily_tests(params, callback)
{
	var filter = {'category':'daily'};
	console.log('sending param {"category":"daily"} to run_filtered_functions()');
	run_filtered_functions(filter, function (err, res) {
			console.log('end run_daily_tests');
		});

}

function run_test_daily_tests(params, callback)
{
	var filter = {'category':'test-daily'};
	console.log('sending param {"category":"test-daily"} to run_filtered_functions()');
	run_filtered_functions(filter, function (err, res) {
			console.log('end run_test_daily_tests');
			callback(err, res);
		});

}

function run_adhoc_tests(params, callback)
{
	var filter = {'subcategory':'adhoc'};
	console.log('sending param {"subcategory":"adhoc"} to run_filtered_functions()');
	run_filtered_functions(filter, function (err, res) {
			console.log('end run_adhoc_tests');
		});

}

function run_expensive_tests(params, callback)
{
	var filter = {'subcategory':'expensive'};
	console.log('sending param {"subcategory":"expensive"} to run_filtered_functions()');
	run_filtered_functions(filter, function (err, res) {
			console.log('end run_expensive_tests');
		});

}

function run_push_tests(params, callback)
{
	var filter = {'subcategory':'push'};
	console.log('sending param {"subcategory":"push"} to run_filtered_functions()');
	run_filtered_functions(filter, function (err, res) {
			console.log('end run_push_tests');
		});

}

function run_query_tests(params, callback)
{
	var filter = {'subcategory':'query'};
	console.log('sending param {"subcategory":"query"} to run_filtered_functions()');
	run_filtered_functions(filter, function (err, res) {
			console.log('end run_query_tests');
		});

}

function run_execute_tests(params, callback)
{
	var filter = {'category':'execute'};
	console.log('sending param {"category":"execute"} to run_filtered_functions()');
	run_filtered_functions(filter, function (err, res) {
			console.log('end run_execute_tests');
		});

}

function runwidtest(fnName, params, callback)
{
	if (widtests.hasOwnProperty(fnName) && typeof widtests[fnName] == "function")
	{
		widtests[fnName](params, callback);
	}
}

function get_functions_by_property(namespace_obj, property_name, match)
{
	var result_object = {};
	if (!(property_name > ' '))
	{
		// if there is nothing to filter, just return the whole original object
		return namespace_obj;
	}
	for (var fnName in namespace_obj)
	{
		if (namespace_obj.hasOwnProperty(fnName) && typeof namespace_obj[fnName] == "function")
		{
			// It's a valid function - is it the right category?
			if (namespace_obj[fnName].hasOwnProperty(property_name) && namespace_obj[fnName][property_name] == match)
			{
				result_object[fnName] = namespace_obj[fnName];
			}
		}
	}
	return result_object;
}

function run_filtered_functions(params, callback)
{
	// filter the list of function names by category and subcateory if they exist
	// all parameter filters must pass - AND match
	console.log('fintering functions to run');
	var functions2run = widtests;
	for (property_name in params)
	{
		// Filter out each property for matching names
		if (params.hasOwnProperty(property_name) )
		{
			functions2run = get_functions_by_property(functions2run, property_name, params[property_name]);
		}
	}



	// now convert the functions into an array so mapSeries will work with them
	var fnList = [];
	for (fnName in functions2run)
	{
		if (functions2run.hasOwnProperty(fnName) && typeof functions2run[fnName] === "function" )
		{
			fnList.push(functions2run[fnName]);
		}
	}
	async.mapSeries(fnList, 
		function (eachexecute, cbMap) 
        {
            async.nextTick(function () 
                {
                    console.log('eachexecute = ' + JSON.stringify(eachexecute));
                    
                    if (eachexecute && eachexecute.hasOwnProperty('js'))
                    {
                        // do something with this eachexecute record/object
                        eachexecute.js
                        (   {},                     // parameters
                            function (err, result)  // callback
                            {
                                cbMap(err,result)
                            }                       
                        )    
                    } else {
                        cbMap(null);
                    }
                }   
            )
        },
        function (err, res)
        {
            callback(null, res);        
        }
	);


}
