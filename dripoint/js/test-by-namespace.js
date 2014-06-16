
// create the namespace
var widtests = widtests || {};

exports.testA = widtests.testA = testA = function testA(params, callback) {
	console.log('This is testA');
	console.log(' - params are - ' + JSON.stringify(params));
	callback(null, null);
}
exports.testB = widtests.testB = testB = function testB(params, callback) {
	console.log('This is testB');
	console.log(' - params are - ' + JSON.stringify(params));
	callback(null, null);
}
exports.testC = widtests.testC = testC = function testC(params, callback) {
	console.log('This is testC');
	console.log(' - params are - ' + JSON.stringify(params));
	callback(null, null);
}
exports.testD = widtests.testD = testD = function testD(params, callback) {
	console.log('This is testD');
	console.log(' - params are - ' + JSON.stringify(params));
	callback(null, null);
}
exports.testE = widtests.testE = testE = function testE(params, callback) {
	console.log('This is testE');
	console.log(' - params are - ' + JSON.stringify(params));
	callback(null, null);
}
exports.testF = widtests.testF = testF = function testF(params, callback) {
	console.log('This is testF');
	console.log(' - params are - ' + JSON.stringify(params));
	callback(null, null);
}

exports.testA.category = 'cat1';
exports.testA.subcategory = 'cat13';
exports.testA.js = exports.testA;

exports.testB.category = 'cat1';
exports.testB.subcategory = 'cat44';
exports.testB.js = exports.testB;

exports.testC.category = 'cat2';
exports.testC.subcategory = 'cat13';
exports.testC.js = exports.testC;

exports.testD.category = 'cat2';
exports.testD.subcategory = 'cat7';
exports.testD.js = exports.testD;

exports.testE.category = 'cat3';
exports.testE.subcategory = 'cat3';
exports.testE.js = exports.testE;

exports.testF.category = 'cat4';
exports.testF.subcategory = 'cat41';
exports.testF.js = exports.testF;

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
                                cbMap(result)
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
