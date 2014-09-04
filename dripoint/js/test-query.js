
var widtests = widtests || {};

exports.qutest_allexecute = 
widtests.qutest_allexecute = 
qutest_allexecute = 
function qutest_allexecute(executeobject, callback) 
{
	var start = new Date().getTime();
    async.series(
    [   
    //function (cb1) {qutest_map1({}, function (err, res) {cb1(null, res)})},
    function (cb1) {etmttest2({}, function (err, res) {cb1(null, res)})},
    function (cb1) {qutest_pagenumber1({}, function (err, res) {cb1(null, res)})},
    function (cb1) {qutest_count1({}, function (err, res) {cb1(null, res)})},
    function (cb1) {qutest_limit1({}, function (err, res) {cb1(null, res)})},
    function (cb1) {qutest_sort1({}, function (err, res) {cb1(null, res)})},
    function (cb1) {qutest_skip1({}, function (err, res) {cb1(null, res)})},
    //function (cb1) {qw1({}, function (err, res) {cb1(null, res)})},
	//function (cb1) {qw2({}, function (err, res) {cb1(null, res)})},
	function (cb1) {simpleonewidquery1({}, function (err, res) {cb1(null, res)})},
	function (cb1) {simpleonewidquerymaster1({}, function (err, res) {cb1(null, res)})},
	function (cb1) {simplefivewidquery1({}, function (err, res) {cb1(null, res)})},
	function (cb1) {complexfivewidquery1or({}, function (err, res) {cb1(null, res)})},
	function (cb1) {complexfivewidquery1and({}, function (err, res) {cb1(null, res)})},
	function (cb1) {complexfivewidquery1andor({}, function (err, res) {cb1(null, res)})},
	function (cb1) {complexfivewidquery1nestedor({}, function (err, res) {cb1(null, res)})},
	function (cb1) {complexfivewidquery1nestedand({}, function (err, res) {cb1(null, res)})},
	function (cb1) {complexfivewidquery1nestedandor({}, function (err, res) {cb1(null, res)})},
	function (cb1) {complexfivewidquerymaster1nestedandor({}, function (err, res) {cb1(null, res)})},
	function (cb1) {simplerelatedquery1({}, function (err, res) {cb1(null, res)})}
	//function (cb1) {simpledeepfiltertest1({}, function (err, res) {cb1(null, res)})}
    ],
    function (err, res) {
      proxyprinttodiv('result from many array', res, 99);
      callback(null,res);
	  proxyprinttodiv('total elapsed time ', new Date().getTime() - start, 99);
    })
	console.log('end qutest_allexecute');
};
widtests.qutest_allexecute.metadata = {};
widtests.qutest_allexecute.metadata.namespace = {};
widtests.qutest_allexecute.metadata.namespace.category = "daily";
widtests.qutest_allexecute.metadata.namespace.subcategory = "push";
widtests.qutest_allexecute.js = qutest_allexecute;
widtests.qutest_allexecute.description = "This is the master test. this test calls all of the individual testing groups for testing querywid and querywidmaster.";

exports.mapreducefinddistinct = mapreducefinddistinct = function mapreducefinddistinct () 
{ 
	proxyprinttodiv('mapreducefinddistinct distinct this', this, 99,true, true);
	if (this && this.metadata && this.metadata.method) 
		{emit("method"+this.metadata.method, 
			{type:"metadata.method", fieldname: this.metadata.method}) }
	if (this && this.metadata && this.metadata.namespace && this.metadata.namespace.category) 
		{emit("category"+this.metadata.namespace.category, 
			{type:"metadata.namespace.category", fieldname: this.metadata.namespace.category}) }
	if (this && this.metadata && this.metadata.namespace && this.metadata.namespace.subcategory) 
		{emit("subcategory"+this.metadata.namespace.subcategory, 
			{type:"metadata.namespace.subcategory",fieldname: this.metadata.namespace.subcategory}) }
	if (this && this.metadata && this.metadata.namespace && this.metadata.namespace.subdto) 
		{emit("subdto"+this.metadata.namespace.subdto, 
			{type:"metadata.namespace.subdto", fieldname: this.metadata.namespace.subdto}) }
	if (this && this.metadata && this.metadata.htmlattributes && this.metadata.htmlattributes.widtype) 
	{ 
		for (var eachtype in this.metadata.htmlattributes.widtype)
		{
			{emit("widtype"+this.metadata.htmlattributes.widtype[eachtype], 
				{type:"metadata.htmlattributes.widtype",fieldname: this.metadata.htmlattributes.widtype[eachtype]}) }
		}
	}
};

exports.reducedistinctfield = reducedistinctfield = function reducedistinctfield(wid, values){
//	proxyprinttodiv('reducetest1 wid', wid, 99,true, true);
//    proxyprinttodiv('reducetest1 value', values, 99,true, true);
    var result = {count : 0, fieldname: ""}
    var c=0; 
    values.forEach(function(value) 
    {
    	c++;
    	result.count = c;
    	result.fieldname = value.fieldname;
    	if (value.type) {result.type = value.type};
    })

 //   proxyprinttodiv('reducetest1 result', result, 99,true, true);
    return result;
};

exports.ettestmap2 = ettestmap2 = function ettestmap2(p, callback) 
{
	debuglevel = 21;
	loaddefaults(null, function (err, res)
	{
		execute(
			{
			// since not specified will go to defaults: collection dricollection, etc
	        "executethis": "mapreduce",
	        "mapfn": "mapreducefinddistinct",
	        "reducefn": "reducedistinctfield",
	        "replace" : "distinctitemscollection" // will store results here
	    	}, function (err, res) 
	    	{
	    		proxyprinttodiv('MIDDLE', res, 99, true, true);
	    		//debuglevel=28;
				execute([
					{
			        "executethis": "mapreduce",
			        "mapreduce":"distinctitemscollection", // will mapreduce from this collection
			        "command.db":"value", // will map reduce from this "small db" inisde collection
			        "query": {"$and": [{"value.type":"metadata.method"}]},
			        "mapfn": "mapbyfieldname",
			        "reducefn": "reducedistinctfield",
			        "replace" : "uniquemethods" // will produce this new collection
			    	},
			    	{
			        "executethis": "mapreduce",
			        "mapreduce":"distinctitemscollection", // will mapreduce from this collection
			        "command.db":"value", // will map reduce from this "small db" inisde collection
			        "query": {"$and": [{"value.type":"metadata.namespace.category"}]},
			        "mapfn": "mapbyfieldname",
			        "reducefn": "reducedistinctfield",
			        "replace" : "uniquecategories" // will produce this new collection
			    	},
			    	{
			        "executethis": "mapreduce",
			        "mapreduce":"distinctitemscollection", // will mapreduce from this collection
			        "command.db":"value", // will map reduce from this "small db" inisde collection
			        "query": {"$and": [{"value.type":"metadata.namespace.subcategory"}]},
			        "mapfn": "mapbyfieldname",
			        "reducefn": "reducedistinctfield",
			        "replace" : "uniquesubcategories" // will produce this new collection
			    	},
			    	{
			        "executethis": "mapreduce",
			        "mapreduce":"distinctitemscollection", // will mapreduce from this collection
			        "command.db":"value", // will map reduce from this "small db" inisde collection
			        "query": {"$and": [{"value.type":"metadata.namespace.subdto"}]},
			        "mapfn": "mapbyfieldname",
			        "reducefn": "reducedistinctfield",
			        "replace" : "uniquesubdtos" // will produce this new collection
			    	},
			    	{
			        "executethis": "mapreduce",
			        "mapreduce":"distinctitemscollection", // will mapreduce from this collection
			        "command.db":"value", // will map reduce from this "small db" inisde collection
			        "query": {"$and": [{"value.type":"metadata.htmlattributes.widtype"}]},
			        "mapfn": "mapbyfieldname",
			        "reducefn": "reducedistinctfield",
			        "replace" : "uniquewidtypes" // will produce this new collection
			    	}
			    	], function (err, res) 
			    	{
		    		callback(null, res);
		    		})
					//callback(null, res);
	    	})
	})
}

exports.mapbyfieldname= mapbyfieldname = function mapbyfieldname() { 
    emit(this.fieldname, this); 
}


exports.reducemethod1 = reducemethod1 = function reducemethod1 (key, count) { 
    return Array.sum(count); 
}

exports.mapmethod1 = mapmethod1 = function mapmethod1 () { 
    emit(this.metadata.method, 1); 
}

exports.querymapmethod1 = querymapmethod1 =  function querymapmethod1()
{
	var executeobj = {
					"executethis":"mapreduce",
					"mapfn": "mapmethod1",
					"reducefn": "reducemethod1",
					"out": { "inline": 1 },
					"query": { "wid": {"$exists": "true"}}
					};	
	execute(executeobj, function (err, res){

	})
}

exports.mapreducedistinctmethod = mapreducedistinctmethod = function mapreducedistinctmethod () 
{ 
	//proxyprinttodiv('mapreducetest1 distinct this', this, 99,true, true);
	if (this && this.metadata && this.metadata.namespace && this.metadata.namespace.category) 
		{emit(this.metadata.namespace.category, {fieldname: this.metadata.namespace.category}) }
};

exports.mapreducedistilledmethod = mapreducedistilledmethod = function mapreducedistilledmethod () 
{ 
	//proxyprinttodiv('mapreduce distilled this', this, 99,true, true);
	if (this && this.fieldname) 
		{emit(this.fieldname, this) }
};


ettestmap3 = function ettestmap3(p, callback) 
{
	debuglevel = 21;
	loaddefaults(null, function (err, res)
	{
		execute(
			{
			// since not specified will go to defaults: collection dricollection, etc
	        "executethis": "mapreduce",
	        "mapfn": "mapreducedistinctmethod",
	        "reducefn": "reducedistinctfield",
	        "out": { "inline": 1 }
	        //"replace" : "distinctmethodscollection" // will store results here
	    	}, function (err, res) 
	    	{
	    		proxyprinttodiv('MIDDLE', res, 99, true, true);
	    		//debuglevel=28;
				// execute(
				// 	{
			 //        "executethis": "mapreduce",
			 //        "mapreduce":"distinctmethodscollection", // will mapreduce from this collection
			 //        "command.db":"value", // will map reduce from this "small db" inisde collection
			 //        "mapfn": "mapreducedistilledmethod",
			 //        "reducefn": "reducedistinctfield",
			 //        //"out": { "inline": 1 },
			 //        "replace" : "distilledmethodscollection" // will produce this new collection
			 //    	}, function (err, res) 
			 //    	{
		  //   		callback(null, res);
		  //   		})
					callback(null, res);
	    	})
	})
}

ettestmap1 = function ettestmap1(p, callback) 
{
	debuglevel = 21;
	loaddefaults(null, function (err, res)
	{
		execute(
			{
			// since not specified will go to defaults: collection dricollection, etc
	        "executethis": "mapreduce",
	        "mapfn": "mapreducedistinctmethod",
	        "reducefn": "reducedistinctfield",
	        "replace" : "distinctmethodscollection" // will store results here
	    	}, function (err, res) 
	    	{
	    		proxyprinttodiv('MIDDLE', res, 99, true, true);
	    		//debuglevel=28;
				execute(
					{
			        "executethis": "mapreduce",
			        "mapreduce":"distinctmethodscollection", // will mapreduce from this collection
			        "command.db":"value", // will map reduce from this "small db" inisde collection
			        "mapfn": "mapreducedistilledmethod",
			        "reducefn": "reducedistinctfield",
			        //"out": { "inline": 1 },
			        "replace" : "distilledmethodscollection" // will produce this new collection
			    	}, function (err, res) 
			    	{
		    		callback(null, res);
		    		})
					//callback(null, res);
	    	})
	})
}

mapreducetest = function mapreducetest(mapfn, reducefn, querystring, callback) {
    // var mapfn = window[map];
    // var reducefn = window[reduce];
    // var thirdparm = {};
    // thirdparm.out = p.out; 

    querystring = {"$and": [{"metadata.method": "defaultdto"}]};
    
    getConnection(mongoDatabaseToLookup, function(err, db) {
        db.collection(schemaToLookup).mapReduce(mapfn, reducefn, querystring).toArray(function(err, res) {

            if (err) {
                callback(err, {
                    etstatus: {
                        status: 'queryerror'
                    }
                });
            } else {
                if (res) {
                    callback(err, res);
                } else {
                    callback(err, []);
                }
            }
        });
    });
};

exports.reduce1 = reduce1 = function reduce1(key, count) { 
    return Array.sum(count); 
}

exports.map1 = map1 = function map1() { 
    // emit the wid name as uniquq value
    emit(this.wid, 1); // this.data);
}

exports.testmapreduce1 = testmapreduce1 = function testmapreduce1() {
    var query = {}; 
    query.query = {"$and":[{"metadata.method": "defaultdto"}]}; 

    mapreducetest(map1, reduce1, query);
}




// this sets up 1 wid and then queries for color = red, which should return wid1 in the query result.
exports.qutest_map1 =  
widtests.qutest_map1 = 
qutest_map1 = 
function qutest_map1 (executeobject, callback) {

	  if (!executeobject.command) {
		  executeobject.command={};
		  executeobject.command.environment={};
		  executeobject.command.environment.run={};
	  }
	  executeobject.command.xrun=[{
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
                                        "hue": "blue",
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
                                     }, {
                                        "executethis": "mapreduce",
                                        "mapfn": "mapreducetest1",
                                        "reducefn": "reducetest1",
                                        "out": "queryresult",
                                        "query":   {
                                                        "$or": [{
                                                            "metadata.method":"colordto"
                                                        }]
                                                    },
                                        //"queryresult": "queryresult",
                                        "sort": { "hue" : 1 } 
                                        //"limit":
                                        //"finalize":
                                        //"scope":
                                        //"jsmode":
                                        //"verbose"
                                    }
								];

	var expectedresult = [
							{
								"wid1":{
									"color":"red",
									"wid":"wid1",
									"metadata": {
										"date":{"exception":["created","changed","unchanged","updated"]}
									}
								}
							}];
							
	  var etEnvironment = new DriEnvironment(executeobject.command.environment);
	  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
	  {                    
			//proxyprinttodiv('expected error', null, 99);
			//proxyprinttodiv('actual error', error_obj, 99);
			//proxyprinttodiv('expected result', expectedresult, 99);
			proxyprinttodiv('actual result', result_obj, 99);

			var composite_obj=logverify("simpleonewidquery1", result_obj[1], expectedresult);
			//proxyprinttodiv('composite_obj', composite_obj, 99);
			callback(null, composite_obj);
	  });
}
widtests.qutest_map1.category = "redaily";
widtests.qutest_map1.subcategory = "push";
widtests.qutest_map1.js = exports.qutest_map1;
widtests.qutest_map1.description = "this does a test";


// this sets up 1 wid and then queries for color = red, which should return wid1 in the query result.
exports.qutest_pagenumber1 =  
widtests.qutest_pagenumber1 = 
qutest_pagenumber1 = 
function qutest_pagenumber1 (executeobject, callback) {

	  if (!executeobject.command) {
		  executeobject.command={};
		  executeobject.command.environment={};
		  executeobject.command.environment.run={};
	  }
	  executeobject.command.xrun=[ {
									"executethis": "addwidmaster",
									"metadata.method": "purchasedto",
									"wid": "purchasedto",
									"name": "string",
									"status": "string",
									"amount": "string"
									}, {
									"executethis":"addwidmaster",
									"metadata.method": "purchasedto",
									"wid":"roger1",
									"name": "Roger",
									"status":"completed",
									"amount": "100"
									}, {
									"executethis":"addwidmaster",
									"metadata.method": "purchasedto",									
									"wid":"roger2",
									"name": "Roger",									
									"status":"completed",
									"amount": "400"
									}, {
									"executethis":"addwidmaster",
									"metadata.method": "purchasedto",									
									"wid":"roger3",
									"name": "Roger",									
									"status":"completed",
									"amount": "500"
									}, {
									"executethis":"addwidmaster",
									"metadata.method": "purchasedto",									
									"wid":"roger4",
									"name": "Roger",									
									"status":"completed",
									"amount": "1000"
									}, {
									"executethis":"addwidmaster",
									"metadata.method": "purchasedto",									
									"wid":"roger5",
									"name": "Roger",									
									"status":"shipped",
									"amount": "100"
									}, {
									"executethis":"addwidmaster",
									"metadata.method": "purchasedto",									
									"wid":"cody1",
									"name": "Cody",									
									"status":"completed",
									"amount": "500"
									}, {
									"executethis":"addwidmaster",
									"metadata.method": "purchasedto",									
									"wid":"cody2",
									"name": "Cody",									
									"status":"completed",
									"amount": "400"
									}, {
									"executethis": "addwidmaster",
									"metadata.method": "selldto",
									"wid": "bill1",
									"name": "Bill",
									"status": "completed",
									"amount": "1000",
									"customer": "Roger"
									}
								];

	var expectedresult = [
							{
								"wid1":{
									"color":"red",
									"wid":"wid1",
									"metadata": {
										"date":{"exception":["created","changed","unchanged","updated"]}
									}
								}
							}];
							
	var queryobj = [{
					"executethis":"querywid",
					//"mapfn": "map1",
					//"reducefn": "reduce1",
					"command.pagenumber": 3,
					"command.perpage": 2,
					//"out": "queryresult",
					"mongorawquery": {
							"$and": [{
							"data.status":"completed"
							}, {
							"metadata.method": "purchasedto"
							}]
							 }
					}];						
	  var etEnvironment = new DriEnvironment(executeobject.command.environment);
	  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
	  {     
			proxyprinttodiv('add results', result_obj, 99, true);
			etEnvironment.execute(queryobj, function (err, res) {
				proxyprinttodiv('expected result', expectedresult, 99);
				proxyprinttodiv('actual result', res, 99);

				var composite_obj=logverify("simpleonewidquery1", res, expectedresult);
				//proxyprinttodiv('composite_obj', composite_obj, 99);
				callback(null, composite_obj);
			});
	  });
}
widtests.qutest_pagenumber1.category = "redaily";
widtests.qutest_pagenumber1.subcategory = "push";
widtests.qutest_pagenumber1.js = exports.qutest_pagenumber1;
widtests.qutest_pagenumber1.description = "this does a test";



// this sets up 1 wid and then queries for color = red, which should return wid1 in the query result.
exports.qutest_count1 =  
widtests.qutest_count1 = 
qutest_count1 = 
function qutest_count1 (executeobject, callback) {

	  if (!executeobject.command) {
		  executeobject.command={};
		  executeobject.command.environment={};
		  executeobject.command.environment.run={};
	  }
	  executeobject.command.xrun=[ {
									"executethis": "addwidmaster",
									"metadata.method": "purchasedto",
									"wid": "purchasedto",
									"name": "string",
									"status": "string",
									"amount": "string"
									}, {
									"executethis":"addwidmaster",
									"metadata.method": "purchasedto",
									"wid":"roger1",
									"name": "Roger",
									"status":"completed",
									"amount": "100"
									}, {
									"executethis":"addwidmaster",
									"metadata.method": "purchasedto",									
									"wid":"roger2",
									"name": "Roger",									
									"status":"completed",
									"amount": "400"
									}, {
									"executethis":"addwidmaster",
									"metadata.method": "purchasedto",									
									"wid":"roger3",
									"name": "Roger",									
									"status":"completed",
									"amount": "500"
									}, {
									"executethis":"addwidmaster",
									"metadata.method": "purchasedto",									
									"wid":"roger4",
									"name": "Roger",									
									"status":"completed",
									"amount": "1000"
									}, {
									"executethis":"addwidmaster",
									"metadata.method": "purchasedto",									
									"wid":"roger5",
									"name": "Roger",									
									"status":"shipped",
									"amount": "100"
									}, {
									"executethis":"addwidmaster",
									"metadata.method": "purchasedto",									
									"wid":"cody1",
									"name": "Cody",									
									"status":"completed",
									"amount": "500"
									}, {
									"executethis":"addwidmaster",
									"metadata.method": "purchasedto",									
									"wid":"cody2",
									"name": "Cody",									
									"status":"completed",
									"amount": "400"
									}, {
									"executethis": "addwidmaster",
									"metadata.method": "selldto",
									"wid": "bill1",
									"name": "Bill",
									"status": "completed",
									"amount": "1000",
									"customer": "Roger"
									}
								];

	var expectedresult = {"n":6,"ok":1};
							
	var queryobj = [{
					"executethis":"querywid",
					//"mapfn": "map1",
					//"reducefn": "reduce1",
					"command.count": true,
					//"out": "queryresult",
					"mongorawquery": {
							"$and": [{
							"data.status":"completed"
							}, {
							"metadata.method": "purchasedto"
							}]
							 }
					}];						
	  var etEnvironment = new DriEnvironment(executeobject.command.environment);
	  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
	  {     
			proxyprinttodiv('add results', result_obj, 99, true);
			etEnvironment.execute(queryobj, function (err, res) {
				proxyprinttodiv('expected result', expectedresult, 99);
				proxyprinttodiv('actual result', res, 99);

				var composite_obj=logverify("qutest_count1", res, expectedresult);
				//proxyprinttodiv('composite_obj', composite_obj, 99);
				callback(null, composite_obj);
			});
	  });
}
widtests.qutest_count1.category = "redaily";
widtests.qutest_count1.subcategory = "push";
widtests.qutest_count1.js = exports.qutest_count1;
widtests.qutest_count1.description = "this does a test";


// this sets up 1 wid and then queries for color = red, which should return wid1 in the query result.
exports.qutest_limit1 =  
widtests.qutest_limit1 = 
qutest_limit1 = 
function qutest_limit1 (executeobject, callback) {

	  if (!executeobject.command) {
		  executeobject.command={};
		  executeobject.command.environment={};
		  executeobject.command.environment.run={};
	  }
	  executeobject.command.xrun=[ {
									"executethis": "addwidmaster",
									"metadata.method": "purchasedto",
									"wid": "purchasedto",
									"name": "string",
									"status": "string",
									"amount": "string"
									}, {
									"executethis":"addwidmaster",
									"metadata.method": "purchasedto",
									"wid":"roger1",
									"name": "Roger",
									"status":"completed",
									"amount": "100"
									}, {
									"executethis":"addwidmaster",
									"metadata.method": "purchasedto",									
									"wid":"roger2",
									"name": "Roger",									
									"status":"completed",
									"amount": "400"
									}, {
									"executethis":"addwidmaster",
									"metadata.method": "purchasedto",									
									"wid":"roger3",
									"name": "Roger",									
									"status":"completed",
									"amount": "500"
									}, {
									"executethis":"addwidmaster",
									"metadata.method": "purchasedto",									
									"wid":"roger4",
									"name": "Roger",									
									"status":"completed",
									"amount": "1000"
									}, {
									"executethis":"addwidmaster",
									"metadata.method": "purchasedto",									
									"wid":"roger5",
									"name": "Roger",									
									"status":"shipped",
									"amount": "100"
									}, {
									"executethis":"addwidmaster",
									"metadata.method": "purchasedto",									
									"wid":"cody1",
									"name": "Cody",									
									"status":"completed",
									"amount": "500"
									}, {
									"executethis":"addwidmaster",
									"metadata.method": "purchasedto",									
									"wid":"cody2",
									"name": "Cody",									
									"status":"completed",
									"amount": "400"
									}, {
									"executethis": "addwidmaster",
									"metadata.method": "selldto",
									"wid": "bill1",
									"name": "Bill",
									"status": "completed",
									"amount": "1000",
									"customer": "Roger"
									}
								];

	var expectedresult = [
							{
								"wid1":{
									"color":"red",
									"wid":"wid1",
									"metadata": {
										"date":{"exception":["created","changed","unchanged","updated"]}
									}
								}
							}];
							
	var queryobj = [{
					"executethis":"querywid",
					//"mapfn": "map1",
					//"reducefn": "reduce1",
					"command.limit": 3,
					//"out": "queryresult",
					"mongorawquery": {
							"$and": [{
							"data.status":"completed"
							}, {
							"metadata.method": "purchasedto"
							}]
							 }
					}];						
	  var etEnvironment = new DriEnvironment(executeobject.command.environment);
	  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
	  {     
			proxyprinttodiv('add results', result_obj, 99, true);
			etEnvironment.execute(queryobj, function (err, res) {
				proxyprinttodiv('expected result', expectedresult, 99);
				proxyprinttodiv('actual result', res, 99);

				var composite_obj=logverify("qutest_limit1", res, expectedresult);
				//proxyprinttodiv('composite_obj', composite_obj, 99);
				callback(null, composite_obj);
			});
	  });
}
widtests.qutest_limit1.category = "redaily";
widtests.qutest_limit1.subcategory = "push";
widtests.qutest_limit1.js = exports.qutest_limit1;
widtests.qutest_limit1.description = "this does a test";



// this sets up 1 wid and then queries for color = red, which should return wid1 in the query result.
exports.qutest_sort1 =  
widtests.qutest_sort1 = 
qutest_sort1 = 
function qutest_sort1 (executeobject, callback) {

	  if (!executeobject.command) {
		  executeobject.command={};
		  executeobject.command.environment={};
		  executeobject.command.environment.run={};
	  }
	  executeobject.command.xrun=[ {
									"executethis": "addwidmaster",
									"metadata.method": "purchasedto",
									"wid": "purchasedto",
									"name": "string",
									"status": "string",
									"amount": "string"
									}, {
									"executethis":"addwidmaster",
									"metadata.method": "purchasedto",
									"wid":"roger1",
									"name": "Roger",
									"status":"completed",
									"amount": "100"
									}, {
									"executethis":"addwidmaster",
									"metadata.method": "purchasedto",									
									"wid":"roger2",
									"name": "Roger",									
									"status":"completed",
									"amount": "400"
									}, {
									"executethis":"addwidmaster",
									"metadata.method": "purchasedto",									
									"wid":"roger3",
									"name": "Roger",									
									"status":"completed",
									"amount": "500"
									}, {
									"executethis":"addwidmaster",
									"metadata.method": "purchasedto",									
									"wid":"roger4",
									"name": "Roger",									
									"status":"completed",
									"amount": "1000"
									}, {
									"executethis":"addwidmaster",
									"metadata.method": "purchasedto",									
									"wid":"roger5",
									"name": "Roger",									
									"status":"shipped",
									"amount": "100"
									}, {
									"executethis":"addwidmaster",
									"metadata.method": "purchasedto",									
									"wid":"cody1",
									"name": "Cody",									
									"status":"completed",
									"amount": "500"
									}, {
									"executethis":"addwidmaster",
									"metadata.method": "purchasedto",									
									"wid":"cody2",
									"name": "Cody",									
									"status":"completed",
									"amount": "400"
									}, {
									"executethis": "addwidmaster",
									"metadata.method": "selldto",
									"wid": "bill1",
									"name": "Bill",
									"status": "completed",
									"amount": "1000",
									"customer": "Roger"
									}
								];

	var expectedresult = [
							{
								"wid1":{
									"color":"red",
									"wid":"wid1",
									"metadata": {
										"date":{"exception":["created","changed","unchanged","updated"]}
									}
								}
							}];
							
	var queryobj = [{
					"executethis":"querywid",
					//"mapfn": "map1",
					//"reducefn": "reduce1",
					"command.sort": {"name":1},
					//"out": "queryresult",
					"mongorawquery": {
							"$and": [{
							"data.status":"completed"
							}, {
							"metadata.method": "purchasedto"
							}]
							 }
					}];						
	  var etEnvironment = new DriEnvironment(executeobject.command.environment);
	  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
	  {     
			proxyprinttodiv('add results', result_obj, 99, true);
			etEnvironment.execute(queryobj, function (err, res) {
				proxyprinttodiv('expected result', expectedresult, 99);
				proxyprinttodiv('actual result', res, 99);

				var composite_obj=logverify("qutest_limit1", res, expectedresult);
				//proxyprinttodiv('composite_obj', composite_obj, 99);
				callback(null, composite_obj);
			});
	  });
}
widtests.qutest_sort1.category = "redaily";
widtests.qutest_sort1.subcategory = "push";
widtests.qutest_sort1.js = exports.qutest_sort1;
widtests.qutest_sort1.description = "this does a test";



// this sets up 1 wid and then queries for color = red, which should return wid1 in the query result.
exports.qutest_skip1 =  
widtests.qutest_skip1 = 
qutest_skip1 = 
function qutest_skip1 (executeobject, callback) {

	  if (!executeobject.command) {
		  executeobject.command={};
		  executeobject.command.environment={};
		  executeobject.command.environment.run={};
	  }
	  executeobject.command.xrun=[ {
									"executethis": "addwidmaster",
									"metadata.method": "purchasedto",
									"wid": "purchasedto",
									"name": "string",
									"status": "string",
									"amount": "string"
									}, {
									"executethis":"addwidmaster",
									"metadata.method": "purchasedto",
									"wid":"roger1",
									"name": "Roger",
									"status":"completed",
									"amount": "100"
									}, {
									"executethis":"addwidmaster",
									"metadata.method": "purchasedto",									
									"wid":"roger2",
									"name": "Roger",									
									"status":"completed",
									"amount": "400"
									}, {
									"executethis":"addwidmaster",
									"metadata.method": "purchasedto",									
									"wid":"roger3",
									"name": "Roger",									
									"status":"completed",
									"amount": "500"
									}, {
									"executethis":"addwidmaster",
									"metadata.method": "purchasedto",									
									"wid":"roger4",
									"name": "Roger",									
									"status":"completed",
									"amount": "1000"
									}, {
									"executethis":"addwidmaster",
									"metadata.method": "purchasedto",									
									"wid":"roger5",
									"name": "Roger",									
									"status":"shipped",
									"amount": "100"
									}, {
									"executethis":"addwidmaster",
									"metadata.method": "purchasedto",									
									"wid":"cody1",
									"name": "Cody",									
									"status":"completed",
									"amount": "500"
									}, {
									"executethis":"addwidmaster",
									"metadata.method": "purchasedto",									
									"wid":"cody2",
									"name": "Cody",									
									"status":"completed",
									"amount": "400"
									}, {
									"executethis": "addwidmaster",
									"metadata.method": "selldto",
									"wid": "bill1",
									"name": "Bill",
									"status": "completed",
									"amount": "1000",
									"customer": "Roger"
									}
								];

	var expectedresult = [
							{
								"wid1":{
									"color":"red",
									"wid":"wid1",
									"metadata": {
										"date":{"exception":["created","changed","unchanged","updated"]}
									}
								}
							}];
							
	var queryobj = [{
					"executethis":"querywid",
					//"mapfn": "map1",
					//"reducefn": "reduce1",
					"skip": 1,
					//"out": "queryresult",
					"mongorawquery": {
							"$and": [{
							"data.status":"completed"
							}, {
							"metadata.method": "purchasedto"
							}]
							 }
					}];						
	  var etEnvironment = new DriEnvironment(executeobject.command.environment);
	  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
	  {     
			proxyprinttodiv('add results', result_obj, 99, true);
			etEnvironment.execute(queryobj, function (err, res) {
				proxyprinttodiv('expected result', expectedresult, 99);
				proxyprinttodiv('actual result', res, 99);

				var composite_obj=logverify("qutest_skip1", res, expectedresult);
				//proxyprinttodiv('composite_obj', composite_obj, 99);
				callback(null, composite_obj);
			});
	  });
}
widtests.qutest_skip1.category = "redaily";
widtests.qutest_skip1.subcategory = "push";
widtests.qutest_skip1.js = exports.qutest_skip1;
widtests.qutest_skip1.description = "this does a test";



exports.etmttest2 = widtests.etmttest2 = etmttest2 = function etmttest2(params, callback) {
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
    queryobj["mongorawquery"] = {
        "$or": [{
            "data.a": "string"
        }]
    };
    executeList.push(queryobj);

    queryobj["mongorawquery"] = {
        "$or": [{
            "data.a": "1"
        }, {
            "data.b": "1"
        }]
    };
    executeList.push(queryobj);

    queryobj["mongorawquery"] = {
        "$or": [{
            "data.a": "1"
        }, {
            "data.b": "16"
        }]
    };
    executeList.push(queryobj);

    proxyprinttodiv("execute list ", executeList, 17);

    execute(executeList, function(err, res) {
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

        var expected_result = [
            [{
                "data": {
                    "a": "string",
                    "b": "string"
                },
                "wid": "testdto",
                "metadata": {
                    "method": "testdto",
                    "date": {"exception":["changed","created","deleted"]}
                }
            }],
            [{
                "data": {
                    "a": "1",
                    "b": "1"
                },
                "wid": "wid1",
                "metadata": {
                    "method": "testdto",
                    "date": {"exception":["changed","created","deleted"]}
                }
            }],
            [{
                "data": {
                    "a": "2",
                    "b": "4"
                },
                "wid": "wid2",
                "metadata": {
                    "method": "testdto",
                    "date": {"exception":["changed","created","deleted"]}
                }
            }],
            [{
                "data": {
                    "a": "3",
                    "b": "9"
                },
                "wid": "wid3",
                "metadata": {
                    "method": "testdto",
                    "date": {"exception":["changed","created","deleted"]}
                }
            }],
            [{
                "data": {
                    "a": "4",
                    "b": "16"
                },
                "wid": "wid4",
                "metadata": {
                    "method": "testdto",
                    "date": {"exception":["changed","created","deleted"]}
                }
            }],
            [{
                "data": {
                    "a": "5",
                    "b": "25"
                },
                "wid": "wid5",
                "metadata": {
                    "method": "testdto",
                    "date": {"exception":["changed","created","deleted"]}
                }
            }],
            [],
            [],
            []
        ];
        proxyprinttodiv("expected_result --", expected_result, 17);

        res = logverify("logverify", actual_result, expected_result);
        callback(err, res);
    });
}
widtests.etmttest2.category = "execute";
widtests.etmttest2.subcategory = "daily";
widtests.etmttest2.js = exports.etmttest2;
widtests.etmttest2.description = "this tests query";


/*
// never finishes execution successfully
exports.etmttest333 = widtests.etmttest333 = etmttest333 = function etmttest333(params, callback) {
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
        "mongorawquery": {
            "$or": [{
                "hue": "string"
            }]
        }
    }, {
        "executethis": "querywid",
        "command.results": "queryresult",
        "mongorawquery": {
            "$or": [{
                "hue": "green"
            }, {
                "sat": "blue-sat"
            }]
        }
    }, {
        "executethis": "querywid",
        "command.results": "queryresult",
        "mongorawquery": {
            "$and": [{
                "hue": "blue"
            }]
        }
    }, {
        "executethis": "querywid",
        "command.results": "queryresult",
        "mongorawquery": {
            "$and": [{
                "hue": "yellow"
            }, {
                "sat": "red-sat"
            }]
        }
    }, {
        "executethis": "querywid",
        "command.results": "queryresult",
        "mongorawquery": {
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
        "mongorawquery": {
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
        "mongorawquery": {
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
        "mongorawquery": {
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
        "mongorawquery": {
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
        "mongorawquery": {
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
        "mongorawquery": {
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
        "mongorawquery": {
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
        "mongorawquery": {
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
        "mongorawquery": {
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
        "mongorawquery": {
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
        "mongorawquery": {
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
        "mongorawquery": {
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
    execute([addlist, querylist], function(err, res1) {
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
widtests.etmttest333.category = "execute";
widtests.etmttest333.subcategory = "query";
widtests.etmttest333.js = exports.etmttest333;
widtests.etmttest333.description = "this does a test";
*/

// fails immediately
// executetest is not defined
/*
exports.mt3 = widtests.mt3 = mt3 = function mt3(params, callback) {
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
        "command.results": "queryresult",
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
widtests.mt3.category = "execute";
widtests.mt3.subcategory = "query";
widtests.mt3.js = exports.mt3;
widtests.mt3.description = "this does a test";


// says it is passing but actually is failing
exports.etmttest3 = widtests.etmttest3 = etmttest3 = function etmttest3(params, callback) {
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
    execute(executeList, function(err, res) {

    });

    //Query Data
    executeList = [];
    var executeList = [{
        "executethis": "querywid",
        "command.results": "queryresult",
        "mongorawquery": {
            "$or": [{
                "hue": "red"
            }]
        }
    }, {
        "executethis": "querywid",
        "command.results": "queryresult",
        "mongorawquery": {
            "$or": [{
                "hue": "green"
            }]
        }
    }, {
        "executethis": "querywid",
        "command.results": "queryresult",
        "mongorawquery": {
            "$and": [{
                "hue": "blue"
            }]
        }
    }, {
        "executethis": "querywid",
        "command.results": "queryresult",
        "mongorawquery": {
            "$or": [{
                "hue": "cyan"
            }]
        }
    }, {
        "executethis": "querywid",
        "command.results": "queryresult",
        "mongorawquery": {
            "$and": [{
                "hue": "magenta"
            }]
        }
    }, {
        "executethis": "querywid",
        "command.results": "queryresult",
        "mongorawquery": {
            "$and": [{
                "hue": "yellow"
            }]
        }
    }, {
        "executethis": "querywid",
        "command.results": "queryresult",
        "mongorawquery": {
            "$and": [{
                "hue": "black"
            }]
        }
    }];
    proxyprinttodiv("execute list for query", executeList, 17);
    execute(executeList, function(err, res1) {
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
widtests.etmttest3.category = "execute";
widtests.etmttest3.subcategory = "query";
widtests.etmttest3.js = exports.etmttest3;
widtests.etmttest3.description = "this does a test";
*/

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

// debuglog is not defined
/*
exports.etmttest4 = widtests.etmttest4 = etmttest4 = function etmttest4(params, callback) {

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
    // adding wids 
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
    execute(addList, function(err, res) {
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



    // mongo raw queries 
	
    if (mongorawquerytests) {
        var queryList = [{
            "executethis": "querywid",
            "command.results": "queryresult",
            "mongorawquery": '{"$or": [{ "wid": "color1" }]}'




        }];
        execute(queryList, function(err, res1) {
            var res = res1["queryresult"];
            console.log(' >>> final response after queryList >>> ' + JSON.stringify(res));

            proxyprinttodiv("res --", res, 17);
            var actual_result = [
                []
            ];
            proxyprinttodiv("actual_result --", actual_result, 17);

            var expected_result = [
                []
            ];
            proxyprinttodiv("expected_result --", expected_result, 17);

            res = logverify("logverify", actual_result, expected_result);

            params = {
                'test': 'PASS'
            };
            callback({}, params);
        });
    }

    // mongo single queries
	
    if (mongosinglequerytests) {
        var queryList = [{
            "executethis": "querywid",
            "mongosinglequery": "color7",
            "command.results": "queryresult"
            //"relationshipdirection": "forward",
            //"relationshiptype": "attributes",
            //"relationshipmethod": "first"
        }];
        execute(queryList, function(err, res1) {
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
        execute(queryList, function(err, res) {
            console.log(' >>> final response after queryList >>> ' + JSON.stringify(res));
        });

    }
}
widtests.etmttest4.category = "execute";
widtests.etmttest4.subcategory = "query";
widtests.etmttest4.js = exports.etmttest4;
widtests.etmttest4.description = "this does a test";
*/


exports.qw1 = widtests.qw1 = qw1 = function(params, callback) {
    var q = '[{"dtotype":"","convertmethod":"","mongowidmethod":"","command.results":"queryresult","mongorelationshipdirection":"forward","mongorelationshipmethod":"all","mongorelationshiptype":"attributes"}]';
    var qJson = JSON.parse(q);

    querywid(qJson, function(err, res1) {
        var res = res1["queryresult"];
        console.log(' >>> final response after querywid >>> ' + JSON.stringify(res));

        res = logverify("unit_tests", "testqw1_result", "", res[0], "", {});

        callback(err, res)
    });
}
widtests.qw1.category = "execute";
widtests.qw1.subcategory = "daily";
widtests.qw1.js = exports.qw1;
widtests.qw1.description = "this does a test";

exports.qw2 = widtests.qw2 = qw2 = function(params, callback) {
    var q = '{"mongorawquery":{"wid":"wid1","command.results": "queryresult","mongorelationshiptype":"x"}}';
    var qJson = JSON.parse(q);

    var executeList = [{
        "executethis": "updatewid",
        "wid": "wid1"
    }];
    execute(executeList, function(err, res) {
        querywid(qJson, function(err, res1) {
            var res = res1["queryresult"];
            console.log(' >>> final response after querywid >>> ' + JSON.stringify(res[0][0]));
            res = logverify("unit_tests", "testqw2_result", "", res[0], "", {});
            callback(err, res)
        });
    });
}
widtests.qw2.category = "execute";
widtests.qw2.subcategory = "daily";
widtests.qw2.js = exports.qw2;
widtests.qw2.description = "this does a test";

/*
// not working - mongoquery doesn't exist
exports.mongoquery1 = widtests.mongoquery1 = mongoquery1 = function(params, callback) {
    var q = '{"mongorawquery":{"wid":"wid1","mongorelationshiptype":"x"}}';
    var qJson = JSON.parse(q);

    // add data
    var executeList = [{
        "executethis": "updatewid",
        "wid": "wid1"
    }];

    // query data added
    execute(executeList, function(err, res) {
        mongoquery(qJson, function(err, res) {
            console.log(' >>> final response after mongoquery >>> ' + JSON.stringify(res));
            res = logverify("unit_tests", "testmongoquery1_result", "", res, "", {});
            callback(err, res)
        });
    });
}
widtests.mongoquery1.category = "execute";
widtests.mongoquery1.subcategory = "daily";
widtests.mongoquery1.js = exports.mongoquery1;
widtests.mongoquery1.description = "this does a test";
*/

/*
exports.mts1 = widtests.mts1 = mts1 = function mts1(params, callback) {
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
    execute(executeList, function(err, res) {
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
        execute(executeList, function(err, res1) {
            var res = res1["queryresult"];
            proxyprinttodiv('Function mttest II', res, 17);
        });
        //});
    });
}
widtests.mts1.category = "execute";
widtests.mts1.subcategory = "daily";
widtests.mts1.js = exports.mts1;
widtests.mts1.description = "this does a test";
*/

/*
exports.mts2 = widtests.mts2 = mts2 = function mts2(params, callback) {
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
    execute(executeList, function(err, res) {
        colorTrace('res after executerray: ' + JSON.stringify(res), "blue");

        // build query
        mongorawquery = '{"$or":[{"data.a":"string"}]}';

        // execute mongoquery
        mongoquery(mongorawquery, function(err, res) {
            colorTrace("mongorawquery returned: " + JSON.stringify(res), "blue");

            // build execute array for testing query wid
            executeObj = {};
            executeObj["executethis"] = "querywid";
            executeObj["command.results"] = "queryresult";
            executeObj["mongorawquery"] = '{"$or":[{"data.a":"string"}]}';
            executeList = [];
            executeList.push(executeObj);

            // Execute our query wid test
            execute(executeList, function(err, res1) {
                var res = res1["queryresult"];
                alert(JSON.stringify(res));
                colorTrace('res after executerray querywid: ' + JSON.stringify(res), "blue");
            });
        });
    });
}
widtests.mts2.category = "execute";
widtests.mts2.subcategory = "daily";
widtests.mts2.js = exports.mts2;
widtests.mts2.description = "this does a test";
*/


// addmttestdata is not defined
/*
exports.etmttest1 = widtests.etmttest1 = etmttest1 = function etmttest1(params, callback) {
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

    //adding wids 
    eventappinstall();
    var executeList = [];
    executeList = addmttestdata(callback);
    execute(executeList, function(err, res) {
        console.log(' >>> final response after executerray >>> ' + JSON.stringify(res));
    });

    // $or queries 
    if (ortests) {
        var mongorawquery = '{"$or":[{"data.a":"string"}]}';
        mongoquery(mongorawquery, function(err, result) {
            proxyprinttodiv("result from mongoquery with query " + mongorawquery + " -- expected result :- [testdto]", result, 17);
        });

        var mongorawquery = '{"$or":[{"data.a":"1"},{"data.b":"1"}]}';
        mongoquery(mongorawquery, function(err, result) {
            proxyprinttodiv("result from mongoquery with query " + mongorawquery + " -- expected result :- [wid1]", result, 17);
        });
        //test fails
        var mongorawquery = '{"$or":[{"data.a":"1"},{"data.b":"16"}]}';
        mongoquery(mongorawquery, function(err, result) {
            proxyprinttodiv("result from mongoquery with query " + mongorawquery + " -- expected result :- [wid1, wid4]", result, 17);
        });

    }

    // $and queries 
    if (andtests) {
        var mongorawquery = '{"$and":[{"data.a":"string"}]}';
        mongoquery(mongorawquery, function(err, result) {
            proxyprinttodiv("result from mongoquery with query " + mongorawquery + " -- expected result :- [testdto]", result, 17);
        });
        var mongorawquery = '{"$and":[{"data.a":"1"},{"data.b":"1"}]}';
        mongoquery(mongorawquery, function(err, result) {
            proxyprinttodiv("result from mongoquery with query " + mongorawquery + " -- expected result :- [wid1]", result, 17);
        });
        var mongorawquery = '{"$and":[{"data.a":"1"},{"data.b":"16"}]}';
        mongoquery(mongorawquery, function(err, result) {
            proxyprinttodiv("result from mongoquery with query " + mongorawquery + " -- expected result :- []", result, 17);
        });
        var mongorawquery = '{"$and":[{"data.a":"1"},{"data.b":"1"},{"data.b":"1"}]}';
        mongoquery(mongorawquery, function(err, result) {
            proxyprinttodiv("result from mongoquery with query " + mongorawquery + " -- expected result :- [wid1]", result, 17);
        });
        var mongorawquery = '{"$and":[{"data.a":"1"}]}';
        mongoquery(mongorawquery, function(err, result) {
            proxyprinttodiv("result from mongoquery with query " + mongorawquery + " -- expected result :- [wid1]", result, 17);
        });
        var mongorawquery = '{"$and":[{"data.a":"5"}]}';
        mongoquery(mongorawquery, function(err, result) {
            proxyprinttodiv("result from mongoquery with query " + mongorawquery + " -- expected result :- [wid5]", result, 17);
        });
    }

    // $or-$or tests 
    if (orortests) {
        var mongorawquery = '{"$or":[{"data.a":"1"},{"$or":[{"data.b":"25"},{"data.a":"5"},{"data.a":"5"},{"data.a":"1"}]}]}';
        mongoquery(mongorawquery, function(err, result) {
            proxyprinttodiv("result from mongoquery with query " + mongorawquery + " -- expected result :- [wid1,wid5]", result, 17);
        });
        var mongorawquery = '{"$or":[{"data.a":"5"},{"$or":[{"data.b":"25"},{"$or":[{"data.a":"5"},{"$or":[{"data.b":"25"}]}]}]}]}';
        mongoquery(mongorawquery, function(err, result) {
            proxyprinttodiv("result from mongoquery with query " + mongorawquery + " -- expected result :- [wid5]", result, 17);
        });
        var mongorawquery = '{"$or":[{"data.a":"5"},{"$or":[{"data.b":"16"}]}]}';
        mongoquery(mongorawquery, function(err, result) {
            proxyprinttodiv("result from mongoquery with query " + mongorawquery + " -- expected result :- [wid4,wid5]", result, 17);
        });
    }

    // $and-$and queries 
    if (andandtests) {
        var mongorawquery = '{"$and":[{"data.a":"1"},{"$and":[{"data.b":"1"}]}]}';
        mongoquery(mongorawquery, function(err, result) {
            proxyprinttodiv("result from mongoquery with query " + mongorawquery + " -- expected result :- [wid1]", result, 17);
        });
        var mongorawquery = '{"$and":[{"data.a":"5"},{"$and":[{"data.b":"25"}]}]}';
        mongoquery(mongorawquery, function(err, result) {
            proxyprinttodiv("result from mongoquery with query " + mongorawquery + " -- expected result :- [wid5]", result, 17);
        });
        //test fails
        var mongorawquery = '{"$and":[{"data.a":"5"},{"$and":[{"data.b":"25"},{"$and":[{"data.b":"1"}]}]}]}';
        mongoquery(mongorawquery, function(err, result) {
            proxyprinttodiv("result from mongoquery with query " + mongorawquery + " -- expected result :- []", result, 17);
        });
    }

    // $or-$and queries 
    if (orandtests) {
        var mongorawquery = '{"$or":[{"data.a":"1"},{"$and":[{"data.b":"1"}]}]}';
        mongoquery(mongorawquery, function(err, result) {
            proxyprinttodiv("result from mongoquery with query " + mongorawquery + " -- expected result :- [wid1]", result, 17);
        });
        var mongorawquery = '{"$or":[{"data.a":"5"},{"$and":[{"data.a":"4"},{"$and":[{"data.b":"1"}]}]}]}';
        mongoquery(mongorawquery, function(err, result) {
            proxyprinttodiv("result from mongoquery with query " + mongorawquery + " -- expected result :- [wid5]", result, 17);
        });
    }

    // fail test cases 
    if (failedtests) {
        var mongorawquery = '{"$and":[{"data.a":"4"},{"$or":[{"data.a":"2"},{"$or":[{"data.b":"16"}]}]}]}';
        mongoquery(mongorawquery, function(err, result) {
            proxyprinttodiv("result from mongoquery with query " + mongorawquery + " -- expected result :- [wid4]", result, 17);
        });
        var mongorawquery = '{"$or":[{"data.a":"1"},{"data.b":"16"}]}';
        mongoquery(mongorawquery, function(err, result) {
            proxyprinttodiv("result from mongoquery with query " + mongorawquery + " -- expected result :- [wid1, wid4]", result, 17);
        });
    }

    // 20 more test cases
    if (orandtests20) {
        var mongorawquery = '{"$or":[{"data.a":"25"},{"$and":[{"data.a":"44"},{"data.a":"64"},{"$or":[{"data.b":"400"}]}]}]}';
        mongoquery(mongorawquery, function(err, result) {
            proxyprinttodiv("result from mongoquery with query " + mongorawquery + " -- expected result :- [wid25]", result, 17);
        });
        var mongorawquery = '{"$or":[{"data.a":"25"},{"$and":[{"data.a":"44"},{"data.a":"64"},{"$or":[{"data.b":"400"},{"data.b":"625"}]}]}]}';
        mongoquery(mongorawquery, function(err, result) {
            proxyprinttodiv("result from mongoquery with query " + mongorawquery + " -- expected result :- [wid25]", result, 17);
        });
        var mongorawquery = '{"$or":[{"data.a":"25"},{"$or":[{"data.a":"2"},{"data.a":"64"},{"$or":[{"data.b":"400"},{"data.b":"625"},{"$or":[{"data.a":"2"}]}]}]}]}';
        mongoquery(mongorawquery, function(err, result) {
            proxyprinttodiv("result from mongoquery with query " + mongorawquery + " -- expected result :- [wid2,wid20,wid25]", result, 17);
        });
        var mongorawquery = '{"$or":[{"data.a":"2"},{"data.a":"64"},{"$or":[{"data.b":"400"},{"data.b":"625"},{"$or":[{"data.a":"2"}]}]}]}';
        mongoquery(mongorawquery, function(err, result) {
            proxyprinttodiv("result from mongoquery with query " + mongorawquery + " -- expected result :- [wid2,wid20,wid25]", result, 17);
        });
        //test fails
        var mongorawquery = '{"$and":[{"data.a":"25"},{"$or":[{"data.a":"2"},{"data.a":"64"},{"$or":[{"data.b":"400"},{"data.b":"625"},{"$or":[{"data.a":"2"}]}]}]}]}';
        mongoquery(mongorawquery, function(err, result) {
            proxyprinttodiv("result from mongoquery with query " + mongorawquery + " -- expected result :- [wid25]", result, 17);
        });
        var mongorawquery = '{"$and":[{"data.a":"4"},{"$and":[{"data.a":"2"},{"$or":[{"data.b":"16"}]}]}]}';
        mongoquery(mongorawquery, function(err, result) {
            proxyprinttodiv("result from mongoquery with query " + mongorawquery + " -- expected result :- [wid25]", result, 17);
        });
    }

    // varify test cases
    if (verifytests) {
        console.log("<< inside verifytests >>");

        var executeObj = {};
        executeObj["executethis"] = "querywid";
        executeObj["command.results"] = "queryresult";
        executeObj["mongorawquery"] = '{"$or":[{"data.a":"string"}]}';
        executeList.push(executeObj);

        execute(executeList, function(err, res1) {
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

    // Sift Test cases
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
        mongoquery(mongorawquery, function(err, result) {
            proxyprinttodiv("result from mongoquery with query " + mongorawquery + " -- expected result :- [testdto]", result, 17);
        });
    }

    params = {
        'test': 'PASS'
    };
    callback({}, params);
}
widtests.etmttest1.category = "execute";
widtests.etmttest1.subcategory = "daily";
widtests.etmttest1.js = exports.etmttest1;
widtests.etmttest1.description = "this does a test";
*/


exports.mttest2 = mttest2 = function mttest2(params, callback) {
    console.log("<< mongoquery_two_test_2 >>");

    var result = null;
    var ortests = true;
    var andtests = false;
    var orortests = false;
    var andandtests = false;
    var orandtests = false;
    var orandtests20 = false;
    var failedtests = false;
    var verifytests = true;


    var codedebug = false;
    if (codedebug) {
        saveglobal("debugcolor", 0);
        saveglobal("debugon", true);
        saveglobal("debugname", "");
        saveglobal("debugsubcat", "");
        saveglobal("debugcat", "query");
        saveglobal("debugfilter", "");
        // debugdestination = 1;
    	saveglobal("debugdestination", 1);

    }

    testclearstorage();

    var executeList = [];
    executeList = addmttestdata2(callback);

    var params;

    execute(executeList, function (err, res) {
        console.log(' >>> final response after executerray >>> ' + JSON.stringify(res));

        async.series([

                function (cb1) {
                    /* varify test cases */
                    if (verifytests) {
                        console.log("<< inside verifytests >>");

                        var executeObj = {};
                        executeObj["executethis"] = "querywid";
                        executeObj["command.results"] = "queryresult";
                        executeObj["mongorawquery"] = '{"$or":[{"data.a":"string"}]}';
                        executeList.push(executeObj);

                        execute(executeList, function (err, res) {
                            console.log(' >>> final response after executerray >>> ' + JSON.stringify(res));
                            result = res['queryresult'];

                            var expectedResultArray = [];
                            expectedResultArray.push({
                                "wid": "testdto",
                                "metadata": {
                                    "method": "testdto"
                                },
                                "data": {
                                    "b": "string",
                                    "a": "string"
                                }
                            });

                            console.log(' >>> test >>> ' + JSON.stringify(result[0][0]));
                            console.log(' >>> expectedResultArray >>> ' + JSON.stringify(expectedResultArray[0]));
                            params = logverify("mttest2", "mttest2_result", "", result[0][0].wid, "", "", expectedResultArray[0].wid);
                            proxyprinttodiv("end of verify tests", "end of verify tests", 99);
                            cb1(null);
                        });
                    } else {
                        cb1(null);
                    }
                },

                function (cb1) {
                    /* $or queries */
                    if (ortests) {

                        async.series([
                            function (cb2) {
                                var mongorawquery = '{"$or":[{"data.a":"string"}]}';
                                mongoquery(mongorawquery, function (err, result) {
                                    proxyprinttodiv("result from mongoquery with query " + mongorawquery + " -- expected result :- [testdto]", result, 99);
                                    cb2(null);
                                });
                            },
                            function (cb2) {
                                var mongorawquery = '{"$or":[{"data.a":"1"},{"data.b":"1"}]}';
                                mongoquery(mongorawquery, function (err, result) {
                                    proxyprinttodiv("result from mongoquery with query " + mongorawquery + " -- expected result :- [wid1]", result, 99);
                                    cb2(null);
                                });
                            },
                            function (cb2) {
                                //test fails
                                var mongorawquery = '{"$or":[{"data.a":"1"},{"data.b":"16"}]}';
                                mongoquery(mongorawquery, function (err, result) {
                                    proxyprinttodiv("result from mongoquery with query " + mongorawquery + " -- expected result :- [wid1, wid4]", result, 99);
                                    cb2(null);
                                });
                            }
                        ], function (err, result) {
                            expectedResultArrayString = [{
                                "wid": "wid1",
                                "metadata.method": "testdto",
                                "data.b": "1",
                                "data.a": "1"
                            }, {
                                "wid": "wid1",
                                "metadata.method": "testdto",
                                "data.b": "1",
                                "data.a": "1"
                            }, {
                                "wid": "wid4",
                                "metadata.method": "testdto",
                                "data.b": "16",
                                "data.a": "4"
                            }];
                            console.log(' >>> test >>> ' + JSON.stringify(result));
                            console.log(' >>> expectedResultArray >>> ' + JSON.stringify(expectedResultArrayString));
                            // params = logverify("mttest2", "mttest2_result", "", result, "", "", expectedResultArray);
                            // params = logverify("mttest2", "mttest2_result", "", result[0], "", "", expectedResultArrayString[0]);
                            // // JSON.stringify(result[1])===JSON.stringify(expectedResultArrayString[1])
                            // proxyprinttodiv("end of verify tests", "end of verify tests", 99);
                            cb1(null);
                        });
                    } else {
                        cb1(null);
                    }
                },
                function (cb1) {
                    /* $and queries */
                    if (andtests) {

                        async.series([
                            function (cb2) {
                                var mongorawquery = '{"$and":[{"data.a":"string"}]}';
                                mongoquery(mongorawquery, function (err, result) {
                                    proxyprinttodiv("result from mongoquery with query " + mongorawquery + " -- expected result :- [testdto]", result, 99);
                                    cb2(null);
                                });

                            },
                            function (cb2) {


                                var mongorawquery = '{"$and":[{"data.a":"1"},{"data.b":"1"}]}';
                                mongoquery(mongorawquery, function (err, result) {
                                    proxyprinttodiv("result from mongoquery with query " + mongorawquery + " -- expected result :- [wid1]", result, 99);
                                    cb2(null);
                                });
                            },
                            function (cb2) {
                                var mongorawquery = '{"$and":[{"data.a":"1"},{"data.b":"16"}]}';
                                mongoquery(mongorawquery, function (err, result) {
                                    proxyprinttodiv("result from mongoquery with query " + mongorawquery + " -- expected result :- []", result, 99);
                                    cb2(null);
                                });
                            },
                            function (cb2) {
                                var mongorawquery = '{"$and":[{"data.a":"1"},{"data.b":"1"},{"data.b":"1"}]}';
                                mongoquery(mongorawquery, function (err, result) {
                                    proxyprinttodiv("result from mongoquery with query " + mongorawquery + " -- expected result :- [wid1]", result, 99);
                                    cb2(null);
                                });
                            },
                            function (cb2) {
                                var mongorawquery = '{"$and":[{"data.a":"1"}]}';
                                mongoquery(mongorawquery, function (err, result) {
                                    proxyprinttodiv("result from mongoquery with query " + mongorawquery + " -- expected result :- [wid1]", result, 99);
                                    cb2(null);
                                });
                            },
                            function (cb2) {

                                var mongorawquery = '{"$and":[{"data.a":"5"}]}';
                                mongoquery(mongorawquery, function (err, result) {
                                    proxyprinttodiv("result from mongoquery with query " + mongorawquery + " -- expected result :- [wid5]", result, 99);
                                    cb2(null);
                                });
                            },
                            function (cb2) {

                            }
                        ], function (err, result) {
                            expectedResultArrayString = [{}];
                            console.log(' >>> test >>> ' + JSON.stringify(result));
                            console.log(' >>> expectedResultArray >>> ' + JSON.stringify(expectedResultArrayString));
                            // params = logverify("mttest2", "mttest2_result", "", result, "", "", expectedResultArray);
                            // params = logverify("mttest2", "mttest2_result", "", result[0], "", "", expectedResultArrayString[0]);
                            // // JSON.stringify(result[1])===JSON.stringify(expectedResultArrayString[1])
                            // proxyprinttodiv("end of verify tests", "end of verify tests", 99);
                            cb1(null);
                        });
                    } else {
                        cb1(null);
                    }
                },

                function (cb1) {
                    /* $or-$or tests */
                    if (orortests) {
                        var mongorawquery = '{"$or":[{"data.a":"1"},{"$or":[{"data.b":"25"},{"data.a":"5"},{"data.a":"5"},{"data.a":"1"}]}]}';
                        mongoquery(mongorawquery, function (err, result) {
                            proxyprinttodiv("result from mongoquery with query " + mongorawquery + " -- expected result :- [wid1,wid5]", result, 99);
                        });

                        var mongorawquery = '{"$or":[{"data.a":"5"},{"$or":[{"data.b":"25"},{"$or":[{"data.a":"5"},{"$or":[{"data.b":"25"}]}]}]}]}';
                        mongoquery(mongorawquery, function (err, result) {
                            proxyprinttodiv("result from mongoquery with query " + mongorawquery + " -- expected result :- [wid5]", result, 99);
                        });

                        var mongorawquery = '{"$or":[{"data.a":"5"},{"$or":[{"data.b":"16"}]}]}';
                        mongoquery(mongorawquery, function (err, result) {
                            proxyprinttodiv("result from mongoquery with query " + mongorawquery + " -- expected result :- [wid4,wid5]", result, 99);
                        });
                    } else {
                        cb1(null);
                    }
                },

                function (cb1) {

                    /* $and-$and queries */
                    if (andandtests) {
                        var mongorawquery = '{"$and":[{"data.a":"1"},{"$and":[{"data.b":"1"}]}]}';
                        mongoquery(mongorawquery, function (err, result) {
                            proxyprinttodiv("result from mongoquery with query " + mongorawquery + " -- expected result :- [wid1]", result, 99);
                        });
                        var mongorawquery = '{"$and":[{"data.a":"5"},{"$and":[{"data.b":"25"}]}]}';
                        mongoquery(mongorawquery, function (err, result) {
                            proxyprinttodiv("result from mongoquery with query " + mongorawquery + " -- expected result :- [wid5]", result, 99);
                        });
                        var mongorawquery = '{"$and":[{"data.a":"5"},{"$and":[{"data.b":"25"},{"$and":[{"data.b":"1"}]}]}]}';
                        mongoquery(mongorawquery, function (err, result) {
                            proxyprinttodiv("result from mongoquery with query " + mongorawquery + " -- expected result :- []", result, 99);
                        });
                    } else {
                        cb1(null);
                    }
                },
                function (cb1) {
                    /* $or-$and queries */
                    if (orandtests) {
                        var mongorawquery = '{"$or":[{"data.a":"1"},{"$and":[{"data.b":"1"}]}]}';
                        mongoquery(mongorawquery, function (err, result) {
                            proxyprinttodiv("result from mongoquery with query " + mongorawquery + " -- expected result :- [wid1]", result, 99);
                        });
                        var mongorawquery = '{"$or":[{"data.a":"5"},{"$and":[{"data.a":"4"},{"$and":[{"data.b":"1"}]}]}]}';
                        mongoquery(mongorawquery, function (err, result) {
                            proxyprinttodiv("result from mongoquery with query " + mongorawquery + " -- expected result :- [wid5]", result, 99);
                        });
                    } else {
                        cb1(null);
                    }
                },
                function (cb1) {
                    /* 20 more test cases */
                    if (orandtests20) {
                        var mongorawquery = '{"$or":[{"data.a":"25"},{"$and":[{"data.a":"44"},{"data.a":"64"},{"$or":[{"data.b":"400"}]}]}]}';
                        mongoquery(mongorawquery, function (err, result) {
                            proxyprinttodiv("result from mongoquery with query " + mongorawquery + " -- expected result :- [wid25]", result, 99);
                        });
                        var mongorawquery = '{"$or":[{"data.a":"25"},{"$and":[{"data.a":"44"},{"data.a":"64"},{"$or":[{"data.b":"400"},{"data.b":"625"}]}]}]}';
                        mongoquery(mongorawquery, function (err, result) {
                            proxyprinttodiv("result from mongoquery with query " + mongorawquery + " -- expected result :- [wid25]", result, 99);
                        });
                        var mongorawquery = '{"$or":[{"data.a":"25"},{"$or":[{"data.a":"2"},{"data.a":"64"},{"$or":[{"data.b":"400"},{"data.b":"625"},{"$or":[{"data.a":"2"}]}]}]}]}';
                        mongoquery(mongorawquery, function (err, result) {
                            proxyprinttodiv("result from mongoquery with query " + mongorawquery + " -- expected result :- [wid2,wid20,wid25]", result, 99);
                        });
                        var mongorawquery = '{"$or":[{"data.a":"2"},{"data.a":"64"},{"$or":[{"data.b":"400"},{"data.b":"625"},{"$or":[{"data.a":"2"}]}]}]}';
                        mongoquery(mongorawquery, function (err, result) {
                            proxyprinttodiv("result from mongoquery with query " + mongorawquery + " -- expected result :- [wid2,wid20,wid25]", result, 99);
                        });
                        //test fails
                        var mongorawquery = '{"$and":[{"data.a":"25"},{"$or":[{"data.a":"2"},{"data.a":"64"},{"$or":[{"data.b":"400"},{"data.b":"625"},{"$or":[{"data.a":"2"}]}]}]}]}';
                        mongoquery(mongorawquery, function (err, result) {
                            proxyprinttodiv("result from mongoquery with query " + mongorawquery + " -- expected result :- [wid25]", result, 99);
                        });
                        var mongorawquery = '{"$and":[{"data.a":"4"},{"$and":[{"data.a":"2"},{"$or":[{"data.b":"16"}]}]}]}';
                        mongoquery(mongorawquery, function (err, result) {
                            proxyprinttodiv("result from mongoquery with query " + mongorawquery + " -- expected result :- [wid25]", result, 99);
                        });
                    } else {
                        cb1(null);
                    }
                },

                function (cb1) {
                    /* fail test cases */
                    if (failedtests) {
                        /*
                                                    var mongorawquery = '{"$and":[{"data.a":"4"},{"$or":[{"data.a":"2"},{"$or":[{"data.b":"16"}]}]}]}';
                                                    mongoquery(mongorawquery, function (result){
                                                        proxyprinttodiv("result from mongoquery with query " +mongorawquery+ " -- expected result :- [wid4]", result, 99);
                                                    });
                                                    */
                        var mongorawquery = '{"$or":[{"data.a":"1"},{"data.b":"16"}]}';
                        mongoquery(mongorawquery, function (err, result) {
                            proxyprinttodiv("result from mongoquery with query " + mongorawquery + " -- expected result :- [wid1, wid4]", result, 99);
                            cb1(null);
                        });
                    } else {
                        cb1(null);
                    }
                }
            ],

            function (err, result) {
                expectedResultArrayString = [{
                    "wid": "wid1",
                    "metadata.method": "testdto",
                    "data.b": "1",
                    "data.a": "1"
                }, {
                    "wid": "wid1",
                    "metadata.method": "testdto",
                    "data.b": "1",
                    "data.a": "1"
                }, {
                    "wid": "wid4",
                    "metadata.method": "testdto",
                    "data.b": "16",
                    "data.a": "4"
                }];
                console.log(' >>> test >>> ' + JSON.stringify(result));
                console.log(' >>> expectedResultArray >>> ' + JSON.stringify(expectedResultArrayString));
                // params = logverify("mttest2", "mttest2_result", "", result, "", "", expectedResultArray);
                params = logverify("mttest2", "mttest2_result", "", result[0], "", "", expectedResultArrayString[0]);
                // JSON.stringify(result[1])===JSON.stringify(expectedResultArrayString[1])
                proxyprinttodiv("end of verify tests", "end of verify tests", 99);
                callback(err, params);
            });



    });
}


function addmttestdata2(callback) {
    console.log("<< addmttestdata >>");

    proxyprinttodiv("staring data add", "data add", 99);
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


    // execute(widArray, function (err, res) {
    //     console.log(' >>> final response after executerray >>> ' + JSON.stringify(res));
    // });
    // proxyprinttodiv("end of data add", "end data add", 99);

    return widArray;
}



// this sets up 1 wid and then queries for color = red, which should return wid1 in the query result.
exports.simpleonewidquery1 =  
widtests.simpleonewidquery1 = 
simpleonewidquery1 = 
function simpleonewidquery1 (executeobject, callback) {

	  if (!executeobject.command) {
		  executeobject.command={};
		  executeobject.command.environment={};
		  executeobject.command.environment.run={};
	  }
	  executeobject.command.xrun=[
									{
									"executethis":"updatewid",
									"wid":"wid1",
									"color":"red"
									}, {
									"executethis":"querywid",
										"mongorawquery": {
											"$or": [{
												"data.color":"red"
												}]
											}
									}
								];

	var expectedresult = [
							{
								"wid1":{
									"color":"red",
									"wid":"wid1",
									"metadata": {
										"date":{"exception":["created","changed","unchanged","updated"]}
									}
								}
							}];
							
	  var etEnvironment = new DriEnvironment(executeobject.command.environment);
	  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
	  {                    
			//proxyprinttodiv('expected error', null, 99);
			//proxyprinttodiv('actual error', error_obj, 99);
			proxyprinttodiv('expected result', expectedresult, 99);
			proxyprinttodiv('actual result', result_obj[1], 99);

			var composite_obj=logverify("simpleonewidquery1", result_obj[1], expectedresult);
			//proxyprinttodiv('composite_obj', composite_obj, 99);
			callback(null, composite_obj);
	  });
}
widtests.simpleonewidquery1.category = "redaily";
widtests.simpleonewidquery1.subcategory = "push";
widtests.simpleonewidquery1.js = exports.etmttest4;
widtests.simpleonewidquery1.description = "this does a test";


// this sets up 1 wid and then queries for color = red, which should return wid1 in the query result.
exports.simpleonewidquerymaster1 =  
widtests.simpleonewidquerymaster1 = 
simpleonewidquerymaster1 = 
function simpleonewidquerymaster1 (executeobject, callback) {

	  if (!executeobject.command) {
		  executeobject.command={};
		  executeobject.command.environment={};
		  executeobject.command.environment.run={};
	  }
	  executeobject.command.xrun=[
					{
					"executethis":"updatewid",
					"wid":"wid1",
					"color":"red"
					}, {
					"executethis":"querywidmaster",
						"mongorawquery": {
							"$or": [{
								"data.color":"red"
								}]
							}
					}
				];

	var expectedresult = [
							{
								"color":"red",
								"wid":"wid1",
								"metadata":{
										"date":{"exception":["created","changed","unchanged","updated"]}
									}
								}
							];
							
	  var etEnvironment = new DriEnvironment(executeobject.command.environment);
	  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
	  {                    
			//proxyprinttodiv('expected error', null, 99);
			//proxyprinttodiv('actual error', error_obj, 99);
			proxyprinttodiv('expected result', expectedresult, 99, true);
			proxyprinttodiv('actual result', result_obj[1], 99, true);

			var composite_obj=logverify("simpleonewidquery1", result_obj[1], expectedresult);
			//proxyprinttodiv('composite_obj', composite_obj, 99);
			callback(null, composite_obj);
	  });
}
widtests.simpleonewidquerymaster1.category = "redaily";
widtests.simpleonewidquerymaster1.subcategory = "push";
widtests.simpleonewidquerymaster1.js = exports.etmttest4;
widtests.simpleonewidquerymaster1.description = "this does a test";


// 5 wids are setup, the query looks for color = red. the returned query result should contain 2 wids: wid1 and wid5
exports.simplefivewidquery1 =  
widtests.simplefivewidquery1 = 
simplefivewidquery1 = 
function simplefivewidquery1 (executeobject, callback) {

	  if (!executeobject.command) {
		  executeobject.command={};
		  executeobject.command.environment={};
		  executeobject.command.environment.run={};
	  }
	  executeobject.command.xrun=[
					{
					"executethis":"updatewid",
					"wid":"wid1",
					"color":"red"
					}, {
					"executethis":"updatewid",
					"wid":"wid2",
					"color":"blue"
					}, {
					"executethis":"updatewid",
					"wid":"wid3",
					"color":"green"
					}, {
					"executethis":"updatewid",
					"wid":"wid4",
					"color":"purple"
					}, {
					"executethis":"updatewid",
					"wid":"wid5",
					"color":"red"
					}
				];
				
	var queryobj = [
				{"executethis":"querywid",
						"mongorawquery": {
							"$or": [{
								"data.color":"red"
								}]
							}
					}
				];
	
	var expectedresult = [
					{
						"wid1":{
							"color":"red",
							"wid":"wid1",
							"metadata":{
										"date":{"exception":["created","changed","unchanged","updated"]}
								}
							}
					}, {
						"wid5":{
							"color":"red",
							"wid":"wid5",
							"metadata":{
										"date":{"exception":["created","changed","unchanged","updated"]}
								}
							}
					}
				];
				
				
				
	  var etEnvironment = new DriEnvironment(executeobject.command.environment);
	  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
	  {                    
			//proxyprinttodiv('expected error', null, 99);
			//proxyprinttodiv('actual error', error_obj, 99);
			//proxyprinttodiv('expected result', expectedresult, 99, true);
			//proxyprinttodiv('actual result', result_obj[1], 99, true);
			executeobject.command.xrun = queryobj;
		  etEnvironment.execute(executeobject, function (error_obj, result_obj) 
		  {
		  	proxyprinttodiv('query result --', result_obj, 99);
		  	proxyprinttodiv('query expected result --', expectedresult, 99);
			var result = logverify('logverify',result_obj,expectedresult);
			callback(error_obj,result);
		});
		
	  });
}
widtests.simplefivewidquery1.category = "redaily";
widtests.simplefivewidquery1.subcategory = "push";
widtests.simplefivewidquery1.js = exports.etmttest4;
widtests.simplefivewidquery1.description = "this does a test";


// 5 wids are setup, the query looks for color = red OR color = blue. the returned query result should contain 3 wids: wid1, wid2 and wid5
exports.complexfivewidquery1or =  
widtests.complexfivewidquery1or = 
complexfivewidquery1or = 
function complexfivewidquery1or (params, callback) {

var executeobj = [
					{
					"executethis":"updatewid",
					"wid":"wid1",
					"color":"red"
					}, {
					"executethis":"updatewid",
					"wid":"wid2",
					"color":"blue"
					}, {
					"executethis":"updatewid",
					"wid":"wid3",
					"color":"green"
					}, {
					"executethis":"updatewid",
					"wid":"wid4",
					"color":"purple"
					}, {
					"executethis":"updatewid",
					"wid":"wid5",
					"color":"red"
					}
				];
				
	var queryobj = [
				{"executethis":"querywid",
						"mongorawquery": {
							"$or": [{
								"data.color":"red"
								}, {
								"data.color":"blue"
								}]
							}
					}
				];
	
	var expectedresult = [
						{
							"wid1":{
								"color":"red",
								"wid":"wid1",
								"metadata":{
										"expirationdate":{"exception":["created","changed","unchanged","updated"]}
											}
								}
						}, {
							"wid2":{
								"color":"blue",
								"wid":"wid2",
								"metadata":{
										"expirationdate":{"exception":["created","changed","unchanged","updated"]}
								}
							}
						}, {
							"wid5":{
								"color":"red",
								"wid":"wid5",
								"metadata":{
										"expirationdate":{"exception":["created","changed","unchanged","updated"]}
								}
							}
						}
					];
				
				
				
	execute(executeobj,function (err, res) {
		proxyprinttodiv('full result --', res, 99);
		proxyprinttodiv('err --',err,99);
			
		execute(queryobj, function (err, res) {
			proxyprinttodiv('query result --', res, 99);
			result = logverify('logverify',res,expectedresult);
			callback(err,result);
		});

	});
}
widtests.complexfivewidquery1or.category = "redaily";
widtests.complexfivewidquery1or.subcategory = "push";
widtests.complexfivewidquery1or.js = exports.etmttest4;
widtests.complexfivewidquery1or.description = "this does a test";



// 5 wids are setup, the query looks for color = red and hue = light. the returned query result should contain 1 wid: wid1
exports.complexfivewidquery1and =  
widtests.complexfivewidquery1and = 
complexfivewidquery1and = 
function complexfivewidquery1and (params, callback) {

var executeobj = [
					{
					"executethis":"updatewid",
					"wid":"wid1",
					"color":"red",
					"hue":"light"
					}, {
					"executethis":"updatewid",
					"wid":"wid2",
					"color":"blue",
					"hue":"dark"
					}, {
					"executethis":"updatewid",
					"wid":"wid3",
					"color":"green",
					"hue":"light"
					}, {
					"executethis":"updatewid",
					"wid":"wid4",
					"color":"purple",
					"hue":"light"
					}, {
					"executethis":"updatewid",
					"wid":"wid5",
					"color":"red",
					"hue":"dark"
					}
				];
				
	var queryobj = [
				{"executethis":"querywid",
						"mongorawquery": {
							"$and": [{
								"data.color":"red"
								}, {
								"data.hue":"light"
								}]
							}
					}
				];
	
	var expectedresult = [
							{
								"wid1":{
									"color":"red",
									"hue":"light",
									"wid":"wid1",
									"metadata":{
										"expirationdate":{"exception":["created","changed","unchanged","updated"]}
									}
								}
							}
						];
				
				
				
	execute(executeobj,function (err, res) {
		proxyprinttodiv('full result --', res, 99);
		proxyprinttodiv('err --',err,99);
			
		execute(queryobj, function (err, res) {
			proxyprinttodiv('query result --', res, 99);
			result = logverifycomplex('logverify',res,expectedresult,err,null);
			callback(err,result);
		});

	});
}
widtests.complexfivewidquery1and.category = "redaily";
widtests.complexfivewidquery1and.subcategory = "push";
widtests.complexfivewidquery1and.js = exports.etmttest4;
widtests.complexfivewidquery1and.description = "this does a test";


// 5 wids are setup, the query looks for color = red and hue = light. the returned query result should contain 1 wid: wid1
exports.complexfivewidquery1andor =  
widtests.complexfivewidquery1andor = 
complexfivewidquery1andor  = 
function complexfivewidquery1andor (params, callback) {

var executeobj = [
					{
					"executethis":"updatewid",
					"wid":"wid1",
					"color":"red",
					"hue":"light"
					}, {
					"executethis":"updatewid",
					"wid":"wid2",
					"color":"blue",
					"hue":"dark"
					}, {
					"executethis":"updatewid",
					"wid":"wid3",
					"color":"green",
					"hue":"light"
					}, {
					"executethis":"updatewid",
					"wid":"wid4",
					"color":"red",
					"hue":"medium"
					}, {
					"executethis":"updatewid",
					"wid":"wid5",
					"color":"red",
					"hue":"dark"
					}
				];
				
	var queryobj = [
				{"executethis":"querywid",
						"mongorawquery": {
							"$and": [{
								"data.color":"red"
								}],
							"$or": [{
								"data.hue":"light"
								}, {
								"data.hue":"dark"
								}]
							}
					}
				];
	
	var expectedresult = [
							{
								"wid1":{
									"color":"red",
									"hue":"light",
									"wid":"wid1",
									"metadata":{
										"expirationdate":{"exception":["created","changed","unchanged","updated"]}
									}
								}
							}, {
								"wid5":{
									"color":"red",
									"hue":"dark",
									"wid":"wid5",
									"metadata":{
										"expirationdate":{"exception":["created","changed","unchanged","updated"]}
									}
								}
							}
						];
				
				
				
	execute(executeobj,function (err, res) {
		proxyprinttodiv('full result --', res, 99);
		proxyprinttodiv('err --',err,99);
			
		execute(queryobj, function (err, res) {
			proxyprinttodiv('query result --', res, 99);
			result = logverifycomplex('logverify',res,expectedresult,err,null);
			callback(err,result);
		});

	});
}
widtests.complexfivewidquery1andor.category = "redaily";
widtests.complexfivewidquery1andor.subcategory = "push";
widtests.complexfivewidquery1andor.js = exports.etmttest4;
widtests.complexfivewidquery1andor.description = "this does a test";


// 5 wids are setup, the query looks for hue = red OR (color = red OR color = green). the returned query result should contain 4 wids: wid1, wid3, wid4, wid5
exports.complexfivewidquery1nestedor =  
widtests.complexfivewidquery1nestedor = 
complexfivewidquery1nestedor  = 
function complexfivewidquery1nestedor (params, callback) {

var executeobj = [
					{
					"executethis":"updatewid",
					"wid":"wid1",
					"color":"red",
					"hue":"light"
					}, {
					"executethis":"updatewid",
					"wid":"wid2",
					"color":"blue",
					"hue":"dark"
					}, {
					"executethis":"updatewid",
					"wid":"wid3",
					"color":"green",
					"hue":"light"
					}, {
					"executethis":"updatewid",
					"wid":"wid4",
					"color":"red",
					"hue":"medium"
					}, {
					"executethis":"updatewid",
					"wid":"wid5",
					"color":"red",
					"hue":"dark"
					}
				];
				
	var queryobj = [
				{"executethis":"querywid",
						"mongorawquery": {
							"$or": [{
								"hue":"light"
								}, {
								"$or": [{
									"data.color":"red"
									}, {
									"data.color":"green"
									}]
								}]
							}
					}
				];
	
	var expectedresult = [
							{
								"wid1":{
									"color":"red",
									"hue":"light",
									"wid":"wid1",
									"metadata":{
										"expirationdate":{"exception":["created","changed","unchanged","updated"]}
									}
								}
							}, {
								"wid3":{
									"color":"green",
									"hue":"light",
									"wid":"wid3",
									"metadata":{
										"expirationdate":{"exception":["created","changed","unchanged","updated"]}
									}
								}
							}, {
								"wid4":{
									"color":"red",
									"hue":"medium",
									"wid":"wid4",
									"metadata":{
										"expirationdate":{"exception":["created","changed","unchanged","updated"]}
									}
								}
							}, {
								"wid5":{
									"color":"red",
									"hue":"dark",
									"wid":"wid5",
									"metadata":{
										"expirationdate":{"exception":["created","changed","unchanged","updated"]}
									}
								}
							}
						];
				
				
				
	execute(executeobj,function (err, res) {
		proxyprinttodiv('full result --', res, 99);
		proxyprinttodiv('err --',err,99);
			
		execute(queryobj, function (err, res) {
			proxyprinttodiv('query result --', res, 99);
			result = logverifycomplex('logverify',res,expectedresult,err,null);
			callback(err,result);
		});

	});
}
widtests.complexfivewidquery1nestedor.category = "redaily";
widtests.complexfivewidquery1nestedor.subcategory = "push";
widtests.complexfivewidquery1nestedor.js = exports.etmttest4;
widtests.complexfivewidquery1nestedor.description = "this does a test";



// 5 wids are setup, the query looks for hue = light AND (color = green AND number = 3). the returned query result should contain 1 wid: wid3
exports.complexfivewidquery1nestedand =  
widtests.complexfivewidquery1nestedand = 
complexfivewidquery1nestedand  = 
function complexfivewidquery1nestedand (params, callback) {

var executeobj = [
					{
					"executethis":"updatewid",
					"wid":"wid1",
					"color":"red",
					"hue":"light",
					"number":"1"
					}, {
					"executethis":"updatewid",
					"wid":"wid2",
					"color":"blue",
					"hue":"dark",
					"number":"2"
					}, {
					"executethis":"updatewid",
					"wid":"wid3",
					"color":"green",
					"hue":"light",
					"number":"3"
					}, {
					"executethis":"updatewid",
					"wid":"wid4",
					"color":"red",
					"hue":"medium",
					"number":"4"
					}, {
					"executethis":"updatewid",
					"wid":"wid5",
					"color":"green",
					"hue":"light",
					"number":"5"
					}
				];
				
	var queryobj = [
				{"executethis":"querywid",
						"mongorawquery": {
							"$and": [{
								"data.hue":"light"
								}, {
								"$and": [{
									"data.color":"green"
									}, {
									"data.number":"3"
									}]
								}]
							}
					}
				];
	
	var expectedresult = [
							{
								"wid1":{
									"color":"red",
									"hue":"light",
									"wid":"wid1",
									"metadata":{
										"expirationdate":{"exception":["created","changed","unchanged","updated"]}
									}
								}
							}, {
								"wid3":{
									"color":"green",
									"hue":"light",
									"wid":"wid3",
									"metadata":{
										"expirationdate":{"exception":["created","changed","unchanged","updated"]}
									}
								}
							}
						];
				
				
				
	execute(executeobj,function (err, res) {
		proxyprinttodiv('full result --', res, 99);
		proxyprinttodiv('err --',err,99);
			
		execute(queryobj, function (err, res) {
			proxyprinttodiv('query result --', res, 99);
			result = logverifycomplex('logverify',res,expectedresult,err,null);
			callback(err,result);
		});

	});
}
widtests.complexfivewidquery1nestedand.category = "redaily";
widtests.complexfivewidquery1nestedand.subcategory = "push";
widtests.complexfivewidquery1nestedand.js = exports.etmttest4;
widtests.complexfivewidquery1nestedand.description = "this does a test";


// 5 wids are setup, the query looks for hue = light AND (color = red OR color = green). the returned query result should contain 2 wids: wid1 and wid3
exports.complexfivewidquery1nestedandor =  
widtests.complexfivewidquery1nestedandor = 
complexfivewidquery1nestedandor  = 
function complexfivewidquery1nestedandor (params, callback) {

var executeobj = [
					{
					"executethis":"updatewid",
					"wid":"wid1",
					"color":"red",
					"hue":"light"
					}, {
					"executethis":"updatewid",
					"wid":"wid2",
					"color":"blue",
					"hue":"dark"
					}, {
					"executethis":"updatewid",
					"wid":"wid3",
					"color":"green",
					"hue":"light"
					}, {
					"executethis":"updatewid",
					"wid":"wid4",
					"color":"red",
					"hue":"medium"
					}, {
					"executethis":"updatewid",
					"wid":"wid5",
					"color":"red",
					"hue":"dark"
					}
				];
				
	var queryobj = [
				{"executethis":"querywid",
						"mongorawquery": {
							"$and": [{
								"data.hue":"light"
								}, {
								"$or": [{
									"data.color":"red"
									}, {
									"data.color":"green"
									}]
								}]
							}
					}
				];
	
	var expectedresult = [
							{
								"wid1":{
									"color":"red",
									"hue":"light",
									"wid":"wid1",
									"metadata":{
										"expirationdate":{"exception":["created","changed","unchanged","updated"]}
									}
								}
							}, {
								"wid3":{
									"color":"green",
									"hue":"light",
									"wid":"wid3",
									"metadata":{
										"expirationdate":{"exception":["created","changed","unchanged","updated"]}
									}
								}
							}
						];
				
				
				
	execute(executeobj,function (err, res) {
		proxyprinttodiv('full result --', res, 99);
		proxyprinttodiv('err --',err,99);
			
		execute(queryobj, function (err, res) {
			proxyprinttodiv('query result --', res, 99);
			result = logverify('logverify',res,expectedresult);
			callback(err,result);
		});

	});
}
widtests.complexfivewidquery1nestedandor.category = "redaily";
widtests.complexfivewidquery1nestedandor.subcategory = "push";
widtests.complexfivewidquery1nestedandor.js = exports.etmttest4;
widtests.complexfivewidquery1nestedandor.description = "this does a test";



// 5 wids are setup, the query looks for hue = light AND (color = red OR color = green). the returned query result should contain 2 wids: wid1 and wid3
exports.complexfivewidquerymaster1nestedandor =  
widtests.complexfivewidquerymaster1nestedandor = 
complexfivewidquerymaster1nestedandor  = 
function complexfivewidquerymaster1nestedandor (params, callback) {

var executeobj = [
					{
					"executethis":"updatewid",
					"wid":"wid1",
					"color":"red",
					"hue":"light"
					}, {
					"executethis":"updatewid",
					"wid":"wid2",
					"color":"blue",
					"hue":"dark"
					}, {
					"executethis":"updatewid",
					"wid":"wid3",
					"color":"green",
					"hue":"light"
					}, {
					"executethis":"updatewid",
					"wid":"wid4",
					"color":"red",
					"hue":"medium"
					}, {
					"executethis":"updatewid",
					"wid":"wid5",
					"color":"red",
					"hue":"dark"
					}
				];
				
	var queryobj = [
				{"executethis":"querywidmaster",
						"mongorawquery": {
							"$and": [{
								"data.hue":"light"
								}, {
								"$or": [{
									"data.color":"red"
									}, {
									"data.color":"green"
									}]
								}]
							}
					}
				];
	
	var expectedresult = [
							{
								"color":"red",
								"hue":"light",
								"wid":"wid1",
								"metadata":{
										"expirationdate":{"exception":["created","changed","unchanged","updated"]}
									}
							}, {
								"color":"green",
								"hue":"light",
								"wid":"wid3",
								"metadata":{
										"expirationdate":{"exception":["created","changed","unchanged","updated"]}
									}
							}
						];
				
				
				
	execute(executeobj,function (err, res) {
		proxyprinttodiv('full result --', res, 99);
		proxyprinttodiv('err --',err,99);
			
		execute(queryobj, function (err, res) {
			console.log('complex query')
			proxyprinttodiv('query result --', res, 99);
			result = logverify('logverify',res,expectedresult);
			callback(err,result);
		});

	});
}
widtests.complexfivewidquerymaster1nestedandor.category = "redaily";
widtests.complexfivewidquerymaster1nestedandor.subcategory = "push";
widtests.complexfivewidquerymaster1nestedandor.js = exports.etmttest4;
widtests.complexfivewidquerymaster1nestedandor.description = "this does a test";


// this test sets up 3 wids: 1 parent and two children. A query for the parent should bring back all 3 records
exports.simplerelatedquery1 =  
widtests.simplerelatedquery1 = 
simplerelatedquery1  = 
function simplerelatedquery1 (params, callback) {

var executeobj = [
					{
					"executethis":"updatewid",
					"metadata":{
						"method":"authordto",
						"bookdto":{
							"type":"onetomany"
							}
						},
					"wid":"authordto",
					"name":"string"
					
					}, {
					"executethis":"updatewid",
					"metadata":{
						"method":"bookdto"
						},
					"wid":"bookdto",
					"title":"string"
					
					}, {
					"executethis": "updatewid",
					"metadata": {
						"method":"relationshipdto"
						},
					"wid": "rel_author_books",
					"primarywid": "authordto",
					"secondarywid": "bookdto",
					"primarymethod":"authordto",
					"secondarymethod":"bookdto",
					"relationshiptype": "attributes"
					
					}, {
					"executethis":"updatewid",
					"metadata":{
						"method":"authordto"
						},
					"wid":"author1",
					"name":"andrew",
					"bookdto.0.title":"Haunted Houses",
					"bookdto.1.title":"History of WWII",
					"bookdto.2.title":"Time of the Dinosaurs"
					}
				];
				
	var queryobj = [
				{"executethis":"querywidmaster",
				"mongowid":"author1",
				"mongorelationshipdirection":"forward",
				"mongorelationshiptype":"attributes",
				"mongorelationshipmethod":"authordto"
				}
				];
	
	var expectedresult = ["empty"];				
				
				
	execute(executeobj,function (err, res) {
		proxyprinttodiv('full result --', res, 99);
		proxyprinttodiv('err --',err,99);
			
		execute(queryobj, function (err, res) {
			proxyprinttodiv('query result --', res, 99);
			result = logverifycomplex('logverify',res,expectedresult,err,null);
			callback(err,result);
		});

	});
}
widtests.simplerelatedquery1.category = "redaily";
widtests.simplerelatedquery1.subcategory = "push";
widtests.simplerelatedquery1.js = exports.etmttest4;
widtests.simplerelatedquery1.description = "this does a test";



// this sets up 1 wid and 
exports.simpledeepfiltertest1 =  
widtests.simpledeepfiltertest1 = 
simpledeepfiltertest1 = 
function simpledeepfiltertest1 (executeobject, callback) {

if (!executeobject.command) {
           executeobject.command={};
           executeobject.command.environment={};
           executeobject.command.environment.run={};
       }
	   executeobject.command.environment.run.type="series";
	   executeobject.command.environment.run.executelevel=0;
	   executeobject.command.environment.platform='server';   // within test this will redirect to second function
  
	   executeobject.command.environment.processfn="execute_function";

	   executeobject.command.deepfilter={
										"convert":true,
										"totype":true
										};
	   executeobject.command.xrun=[{
									"executethis":"addwidmaster",
									"metadata.method":"codydto",
									"wid":"codydto",
									"number":"integer"
									}, {
									"executethis":"addwidmaster",
									"metadata.method":"codydto",
									"wid":"codywid1",
									"number":"12"
									}];

	   var etEnvironment = new DriEnvironment(executeobject.command.environment);
	   etEnvironment.execute(executeobject, function (error_obj, result_obj) 
		{
			proxyprinttodiv('res --', result_obj, 99);
		});
}
widtests.simpledeepfiltertest1.category = "redaily";
widtests.simpledeepfiltertest1.subcategory = "push";
widtests.simpledeepfiltertest1.js = exports.etmttest4;
widtests.simpledeepfiltertest1.description = "this does a test";


// this sets up 1 wid and 
exports.addwidtomongo11 =  
widtests.addwidtomongo11 = 
addwidtomongo11 = 
function addwidtomongo11 (params, callback) {

var executeobj = [
					{"executethis":"addwidmaster",
					"wid":"codywid1",
					"number":"12",
					"creator":"cody"
					}
				];

	execute(executeobj,function (err, res) {
		proxyprinttodiv('full result --', res, 99);
	});
}
widtests.addwidtomongo11.category = "redaily";
widtests.addwidtomongo11.subcategory = "push";
widtests.addwidtomongo11.js = exports.etmttest4;
widtests.addwidtomongo11.description = "this does a test";
