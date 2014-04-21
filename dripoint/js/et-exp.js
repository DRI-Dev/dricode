// copyright (c) 2014 DRI
// run by going to node1-html, type fn name, run test
// convert to asynch module
// go through DTO object for instruction

// getwidmaster
//     parameters fish out
//     callgetwidobject 
//     clean parameters — happens at end

// so a wid has a recipe...the recipe is stored in a parameter called metadata
// we send in a parameter "db" (usually "data") to symbolize which database we are using (live, test, etc)
// the recipe has that parameter within metadata
// that parameters value tells system which parameter in the wid holds all the values
// i.e.
// wid100 
// metadata {method: authrodto, onetomany: [booksdto, otherdto]}
// data:{live data for wid100}
// test: {test data for wid100}
// booksdto: {widrecord booksdto… includes metadata, data, etc}
// othereto: {widrecord booksdto… includes metadata, data, etc}

// at system processing time if we need a new wid we look for it as a parameter
// if found then we see use it (see if expired)
// if not found then get it, store it in as paramter?
// pre calculated wids
// if we figure out the releated wid is x, how do we store
// onetomany -- query or results?


function getWidMongo(widInput, convertMethod, accessToken, dtoin, callback) {
    getwidobject(widInput, convertMethod, dtoin, function (err, results) {
        callback(null, results)
        })
}

function getwidobject(wid, convertMethod, dtotype, callback) {
        var results = [];
        var executeobject={};
        execute({"executethis":"getwid", "wid":wid}, function (err, results) {
        if(!dtotype)
        {
            dtotype=results[metadata.method];
        }
        ParentWid=results["wid"];
        executeobject={}; 
        executeobject["mongowid"]=ParentWid; 
        executeobject["mongorelationshiptype"]="attributes"; 
        executeobject["mongorelationshipmethod"]="all"; 
        executeobject["mongorelationshipdirection"]="forward"; 
        executeobject["mongowidmethod"]="" //current dto; 
        executeobject["executethis"]="querywid"; 
        executeobject["command.result"]="queryresult"; 

        execute(executeobject, function (err, res1) {
            var relationshipslist = res1['queryresult'];
            if(relationshipslist.length()>0 && !err)
            {
                eobj={}; 
                eobj["mongowid"]=dtotype; 
                eobj["mongorelationshiptype"]="attributes"; 
                eobj["mongorelationshipmethod"]="all"; 
                eobj["mongorelationshipdirection"]="forward"; 
                eobj["mongowidmethod"]=""; 
                eobj["executethis"]="querywid"; 
                eobj["command.result"]="queryresult"; 
                execute(eobj, function (errd, res2) { 
                 var dtotypelist = res2['queryresult'];

                if(dtotypelist.length()>0 && !errd) {
                    for(var i in dtotypelist)
                    {
                        var _dto = dtotypelist[i];
                        for(var j in relationshipslist)
                        {
                            var _wid = relationshipslist[j];
                            if(_wid.metadata.method === _dto)
                            {
                                results.push(_wid);
                            }
                        }                        
                    }
                    return results;
                }                  
            });            
        }});
});
}


/*
    get onetomany list
        if list exists 
            if normal then onetomany, onetoone from wid
            if other then aggressviveDTO at this level

            for achdto in onetomany
            get list of wids based on relationship
            for eachwid call getwidobject
        if no list then return results  
*/




// data might come in like this
// {"wid":"authordtoXXX","meta.method":"authordto",".name":"stringXXX",".age":"stringXXX",
// ".booksdto.0.wid":"1",".booksdto.0.meta.method":"booksdto",".booksdto.0..title":"stringXXX",
// ".booksdto.1.wid":"2",".booksdto.1.meta.method":"booksdto",".booksdto.1.data.title":"stringXXX",
// "onetomany.0":"booksdto","onetomany.1":"adddto"}

// needs to be changed to this (object + add data):

// {"wid":"authordtoXXX","metadata":{"method":"authordto"},
// "data":{"name":"stringXXX","age":"stringXXX","booksdto":{
// "0":{"wid":"1","metadata":{"method":"booksdto"},"data":{"title":"stringXXX"}},
// "1":{"wid":"2","metadata":{"method":"booksdto"},"data":{"title":"stringXXX"}}}},
// "onetomany":{"0":"booksdto","1":"adddto"}}
//
exports.converttoDRIstd = converttoDRIstd = function converttoDRIstd (inputObject) {
    var db="data"
    inputObject=ConvertFromDOTdri(inputObject);
    for (var e in inputObject) { // any parameters not in a data object parm
        if ((inputObject[e]!=="metadata")||(inputObject[e]!==db)||
            (inputObject[e]!=="onetomany")||(inputObject[e]!=="onetooone")){
            inputObject[db][e]=inputObject[e];
            delete inputObject[e];
            }
        }
    var currentdb = inputObject[db];
    inputObject[db] = converttoDRIstd(currentdb); // recurse -- not convert what is inside of db/"data"
    return inputObject
}

exports.convertfromDRIstd = convertfromDRIstd = function convertfromDRIstd (parameters) {
    var db="data"
    var dbobject = parameters[db]; // work with "data" object
    for (var e in dbobject) { // any parameters not in a data object parm
        if (e==db) {parameters=extend(parameters, convertfromDRIstd(dbobject[e]))} // note this should never happen
        parameters[e]=extend(parameters[e], dbobject[e]); // append to root level
        }
    delete parameters[db];
    parameters=ConvertToDOTdri(parameters);
    return parameters
}

// this new AddMaster is temporary it is a converter to new method to avoid huge changes in code
function AddMaster(dtoList, parameterList, widName, dtotype, callback) {
    var parentwid=""
    var relationshiptype=""
    var inputdto=converttoDRIstd(listToObject(dtoList));
    var inputObject= converttoDRIstd(listToObject(parameterList));
    addwidobject(inputObject, inputdto, parentwid, relationshiptype, function (err, addobject) {
                callback(null, convertfromDRIstd(addobject));
                });
}

// parentwid and relationshiptype are optional and are needed for subcall addrecord -- 
//it is a flag if a relationship record should be added as a record is added
function addwidobject (inputObject, inputdto, parentwid, relationshiptype, callbackcallback) {
	//fish out  onetoone and onetomany parameters
    var db="data";
	var parObject = {};
	console.log(" Input  "+JSON.stringify(inputObject));

    extend(true, parObject, inputObject);
    //console.log("   "+JSON.stringify(parObject));

	if(parObject.hasOwnProperty("onetomany")){
			for(var k in parObject["onetomany"])
			{
				var item = parObject["onetomany"][k]
				delete parObject[db][item];				
			}
			delete parObject["onetomany"];
	}
	if(parObject.hasOwnProperty("onetooone")){
			for(var l in parObject["onetooone"])
			{
				var item = parObject["onetooone"][l]
				delete parObject[db][item];				
			}
			delete parObject["onetooone"];
	}
	console.log("After cleaning  parObject "+JSON.stringify(parObject));

    console.log("Parent object added: "+JSON.stringify(parObject));
	console.log("Added object : "+parObject["wid"]);

	//Create a widget based on the leftoverparams in parObject
	//get newly created/stored widgetobjectId	
	var widgetobjectId = parObject["wid"];
	if(inputObject.hasOwnProperty("onetomany")){
		for(var c in inputObject["onetomany"])
		{
			var child = inputObject["onetomany"][c];
                console.log("   child "+JSON.stringify(child));
			var childObjects = inputObject[db][child];
                console.log("   childObjects "+JSON.stringify(childObjects));
			for(var cr in childObjects)
			{
                var childObject = childObjects[cr];
                console.log("   childObject "+JSON.stringify(childObject));
    			var childWidgetId = addobject(childObject);
    			console.log("   make a relationshipobject with childWidgetId "+childWidgetId + ": and widgetobjectId " +widgetobjectId);
    			//make a relationshipobject with childWidgetId and widgetobjectId
			}
		}
	}
	
	if(inputObject.hasOwnProperty("onetooone")){
		for(var d in inputObject["onetooone"])
		{
			var child = inputObject["onetooone"][d];
			var childObjects = inputObject[db][child];
			for(var cr in childObjects)
			{
            var childObject = childObjects[cr];
			var childWidgetId = addobject(childObject);
			console.log("   make a relationshipobject with childWidgetId "+childWidgetId + ": and widgetobjectId " +widgetobjectId);
			//make a relationshipobject with childWidgetId and widgetobjectId
			}
		}		
	}
	return parObject["wid"];
	//return newly created/stored widgetobjectId	
}

// addrecord is a temporary call convert to old format
// it also check if relationship should be added
exports.addrecord = addrecord = function addrecord (inputrecord, inputdto, ParentWid, relationshiptype, callback) {
    var executeobject={};
    var widid = inputrecord("wid");
    var widdto = inputrecord["metadata"]["method"];
    var InList = objectToList(ConvertToDOTdri(inputrecord));
    var Indto = objectToList(ConvertToDOTdri(inputdto));
    MongoAddEditPrepare(Indto, InList, widid, widdto,  function (err, addobject) {
        if (relationshiptype) {
            var ChildWid = addobject["wid"]; 
            AddMongoRelationship(ParentWid, ChildWid, relationshiptype, function (err, adddedrelationship) {
                callback(null, addobject)
                });
            }
        else {
            callback(null, addobject)
            }

        })
}

/*

{
"_id":"some id",
"wid":"authordto",
"metdata" : { 
        "method" : "authrodto", 
        "data" : {
                "type" : "onetomany", 
                "expiration": 999, 
                "owner":"wid33", 
                "synchrules":""
                },
        "booksdto": {"type": "onetomany", "expiration":0, "owner":"wid33", "synchrules":""},
        "adddto": {"type": "onetomany", "expiration":0, "owner":"wid33", "synchrules":""}
    },
"data":{"name":"string","age":"string"}
}

*/

/*
"_id":"some id",
"wid":"authordto",
"metdata" : { "method" : "authrodto", 
        "data" : {"type" : "onetomany", 
                "expiration": 999, 
                "owner":"wid33", 
                "synchrules":""
                },
        "booksdto": {"type": "onetomany", "expiration":0, "owner":"wid33", "synchrules":""},
        "adddto": {"type": "onetomany", "expiration":0, "owner":"wid33", "synchrules":""}
}
*/
exports.convertDRIToFlat = convertDRIToFlat = function convertDRIToFlat (inputObjectArray) {
    var results = [];
    for (var a in inputObjectArray) {
        var retObject={};
        var inpObj = inputObjectArray[a];

        Object.keys(inpObj).forEach(function (key) {
            var val = inpObj[key];
                if(key === "metadata")
                {
                    Object.keys(val).forEach(function (metaKey) {
                        var metaVal = val[metaKey];
                            if(metaKey === "method")
                            {
                                retObject["metadata.method"] = metaVal;
                            }else if(metaKey === "data"){
                                //leaving it 
                            }else {
                                if (metaVal && typeof metaVal === "object") {
                                        var tObj = {};
                                        tObj[metaKey] = metaVal;
                                        var convObj = ConvertToDOTdri(tObj);
                                        Object.keys(convObj).forEach(function (convKey) {
                                            var convVal = convObj[convKey];
                                            retObject[convKey] = convVal;                                    
                                        });                                
                                } else {
                                    retObject[metaKey] = metaVal; // it's not an object, so set the property
                                }
                            }
                        // use val
                    });
                }else if(key === "data"){
                    Object.keys(val).forEach(function (dataKey) {
                        var dataVal = val[dataKey];
                        if (dataVal && typeof dataVal === "object") {
                                var tObj = {};
                                tObj[dataKey] = dataVal;
                                var convObj = ConvertToDOTdri(tObj);
                                Object.keys(convObj).forEach(function (convKey) {
                                    var convVal = convObj[convKey];
                                    retObject[convKey] = convVal;                                    
                                });                                
                        } else {
                            retObject[dataKey] = dataVal; // it's not an object, so set the property
                        }
                    });
                }else
                {
                    retObject[key] = val;
                }

        });
        results.push(retObject);
    }
    return results;
}

exports.convertFlatToDRI = convertFlatToDRI = function convertFlatToDRI (inputObjectArray) {
    var results = [];
    for (var i in inputObjectArray) {
        var retObj = {};
        var inpObj = inputObjectArray[i];
        Object.keys(inpObj).forEach(function (key) {
            var val = inpObj[key];
            if(key === "wid"){
                retObj["wid"] = val; 
            }else if (key === "metadata.method") 
            {
                retObj["metadata"] = {"method":val};
            } else{
                if (val === "onetomany") { //will be pushed to metadata
                    var tObj = {};
                    tObj[key] = val;
                    var convObj = ConvertFromDOTdri(tObj);
                    Object.keys(convObj).forEach(function (convKey) {
                        var convVal = convObj[convKey];
                        retObj["metadata"][convKey] = convVal;                                    
                    });                                
                } else{ //will be pushed to data
                    retObj["data"] = {};
                    var tObj = {};
                    tObj[key] = val;
                    var convObj = ConvertFromDOTdri(tObj);
                    Object.keys(convObj).forEach(function (convKey) {
                        var convVal = convObj[convKey];
                        retObj["data"][convKey] = convVal;                                    
                    });                                                    
                };
            }
        }); 
        results.push(retObj);       
    };
    return results;
}

exports.test_convertDRIToFlat = test_convertDRIToFlat = function test_convertDRIToFlat () {
    console.log(JSON.stringify(convertDRIToFlat([{
                                                    "wid":"a",
                                                    "metadata": {
                                                        "method": "b", 
                                                        "f": {"type": "onetomany", "expiration": 0},
                                                        "n.p.q": {"type": "onetomany", "expiration": 0},
                                                        "data": {"type": "parent", "expiration": 0}
                                                          },
                                                    "data": {"c":"e", "h": {"j": {"k" : "m"}}}
                                                    }])));    
}

// {
// "wid":"a",
// "metadata.method":"b",
// "metadata.method.f.type":"onetomany",
// "metadata.method.f.expiration":0,
// "metadata.method.n.p.q.type":"onetomany",
// "metadata.method.n.p.q.expiration":0,
// "metadata.method.data.type":"parent",
// "metadata.method.data.expiration":0,
// "c":"e", 
// "h.j.k": "m"   
// }

exports.test_convertFlatToDRI = test_convertFlatToDRI = function test_convertFlatToDRI () {
    console.log(JSON.stringify(convertFlatToDRI([{
                                                    "wid":"a",
                                                    "metadata": {
                                                        "method": "b", 
                                                        "f": {"type": "onetomany", "expiration": 0},
                                                        "n.p.q": {"type": "onetomany", "expiration": 0},
                                                        "data": {"type": "parent", "expiration": 0}
                                                          },
                                                    "data": {"c":"e", "h": {"j": {"k" : "m"}}}
                                                    }])));    
}

exports.aotest = aotest = function aotest(params, callback) {
    testclearstorage();
    // config = setconfig1();
    execute([{
        "executethis": "addobject",
            "wid":"authordtoXXX",
            "metadata.method":"authordto",
            "data":
                {   "name":"stringXXX",
                    "age":"stringXXX",
                    "booksdto":
                        [
                            {"wid":"1","metadata.method":"booksdto","data":{"title":"stringXXX"}},
              {"wid":"2","metadata.method":"booksdto","data":{"title":"stringXXX"}}],
         "adddto":[]
         },
        }],
    function (err, res) {
        res = logverify("aotest_result", res[0][0], {
            "wid":"authordtoXXX",
            "metadata.method":"authordto",
            "data":
                {   "name":"stringXXX",
                    "age":"stringXXX",
                    "booksdto":
                        [
                            {"wid":"1","metadata.method":"booksdto","data":{"title":"stringXXX"}},
              {"wid":"2","metadata.method":"booksdto","data":{"title":"stringXXX"}}],
         "adddto":[]
         },
        }
        );
    callback(err, res);
    });
}



    // exports.converttoDRIstd = converttoDRIstd = function converttoDRIstd(inputObject) {
    //     var db = "data"
    //     inputObject = ConvertFromDOTdri(inputObject);
    //     for (var e in inputObject) { // any parameters not in a data object parm
    //         if ((inputObject[e] !== "metadata") || (inputObject[e] !== db) ||
    //             (inputObject[e] !== "onetomany") || (inputObject[e] !== "onetooone")) {
    //             inputObject[db][e] = inputObject[e];
    //             delete inputObject[e];
    //         }
    //     }
    //     var currentdb = inputObject[db];
    //     inputObject[db] = converttoDRIstd(currentdb); // recurse -- not convert what is inside of db/"data"
    //     return inputObject
    // }

    // exports.convertfromDRIstd = convertfromDRIstd = function convertfromDRIstd(parameters) {
    //     var db = "data"
    //     var dbobject = parameters[db]; // work with "data" object
    //     for (var e in dbobject) { // any parameters not in a data object parm
    //         if (e == db) {
    //             parameters = extend(parameters, convertfromDRIstd(dbobject[e]))
    //         } // note this should never happen
    //         parameters[e] = extend(parameters[e], dbobject[e]); // append to root level
    //     }
    //     delete parameters[db];
    //     parameters = ConvertToDOTdri(parameters);
    //     return parameters
    // }

