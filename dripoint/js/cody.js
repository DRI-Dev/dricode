// copyright (c) 2014 DRI
exports.etdocsimpledto = etdocsimpledto = function etdocsimpledto(params, callback){
	testclearstorage();
	
	execute([
		{ "executethis": "addwidmaster","wid":"adto","metadata.method":"adto","fielda":"string","bdto":"onetomany"},
		{ "executethis": "addwidmaster","wid":"bdto","metadata.method":"bdto","fieldb":"string","cdto":"onetomany"},
		{ "executethis": "addwidmaster","wid":"cdto","metadata.method":"cdto","fieldc":"string"},
		{ "executethis": "addwidmaster","wid":"relatedto1","metadata.method":"relatedto1","primarywid":"bdto","secondarywid":"cdto","relationshiptype":"attributes"},
		{ "executethis": "addwidmaster","wid":"relatedto2","metadata.method":"relatedto2","primarywid":"adto","secondarywid":"bdto","relationshiptype":"attributes"},
		{ "executethis": "addwidmaster","wid":"a","metadata.method":"adto","fielda":"hello","bdto.0.fieldb":"world","bdto.0.cdto.0.fieldc":"!!!!"},
		{ "executethis": "getwidmaster","wid":"a"}
		        ],
		function (err, res) {
			proxyprinttodiv('etdocsimpledto', res[6], 99);
            callback(err, {"PASS":"PASS"})


        });
		
	}

// THESE ARE THE TEST SUITES





// THESE ARE THE INDIVIDUAL TESTS

// Let's create a simple wid:

exports.c0 = c0 = function c0(params, callback){
	testclearstorage();
	
	// 1) first, let's setup the dto. A DTO gives us the "shell" for creating wids of a certain type. In this case, we want to setup an author "shell" so that we can add many author records.
	// the structure for a basic dto is like this: {"wid":"xxx","metadata.method":"xxx","field1":"type","field2":"type"}.
	// here is our author DTO:
	execute({"executethis":"addwidmaster","wid":"authordto","metadata.method":"authordto","name":"string","age":"string"}, 
		// 2) second, let's create an author named Jim. This is easy, just fill in the DTO fields from above:
		execute({"executethis":"addwidmaster","wid":"jim","metadata.method":"authordto","name":"Jim","age":"34"}, 	
			// 3) now, let's get this
			callback(err, {"PASS":"PASS"})
			) // jim
		) // author
}
   

exports.c1 = c1 = function c1(){

	testclearstorage();
	
	executetest("addwidmaster",{"wid":"booksdto1","metadata.method":"booksdto1","name":"string","ISBN":"string","publisher":"string"}, "", "");
	alert('1');
	executetest("addwidmaster",{"wid":"authordto1","metadata.method":"authordto1","first":"string","last":"string","age":"string","booksdto1":"onetomany"}, "", "");
	
	executetest("addwidmaster",{"wid":"rel_author_book","metadata.method":"relationshipdto","primarywid":"authordto1","secondarywid":"booksdto1"}, "", "");
	
	executetest("addwidmaster",{"wid":"mary_sue","metadata.method":"authordto1","first":"AMary","last":"ASue","age":"A30","booksdto1.name":"ATime and Terror","booksdto1.ISBN":"A10001111419","booksdto1.publisher":"AMega Books Inc."}, "", "");
	
	executetest("addwidmaster",{"wid":"mary_sue","metadata.method":"authordto1","first":"BMary","last":"BSue","age":"B30","booksdto1.name":"BPawn of Prophecy","booksdto1.ISBN":"B33003222219","booksdto1.publisher":"BTor Books Inc."}, "", "");
	
	executetest("addwidmaster",{"wid":"mary_sue","metadata.method":"authordto1","first":"CMary","last":"CSue","age":"C30","booksdto1.name":"CThe Shining","booksdto1.ISBN":"C33003333319","booksdto1.publisher":"CPenguin Books Inc."}, "", "");
	
	executetest("getWidMaster", {"wid":"mary_sue"}, "mary_sue_get", "");
	//logverify("readmarysue","resultwid","mary_sue_get","","",{"metadata.method":"authordto1","wid":"mary_sue","first":"CMary","last":"CSue","age":"C30","booksdto1.0.name":"ATime and Terror","booksdto1.0.isbn":"A10001111419","booksdto1.0.publisher":"AMega Books Inc.","booksdto1.0.metadata.method":"booksdto1","booksdto1.0.wid":"1","booksdto1.1.name":"BPawn of Prophecy","booksdto1.1.isbn":"B33003222219","booksdto1.1.publisher":"BTor Books Inc.","booksdto1.1.metadata.method":"booksdto1","booksdto1.1.wid":"3","booksdto1.2.name":"CThe Shining","booksdto1.2.isbn":"C33003333319","booksdto1.2.publisher":"CPenguin Books Inc.","booksdto1.2.metadata.method":"booksdto1","booksdto1.2.wid":"5"});														

	//verifysummary("resultwid");
}
/*
exports.cody1_setup = cody1_setup = function cody1_setup(){
	//executetest("debugon");
	executetest("addwidmaster",{"metadata.method":"actiondto","wid":"actiondto","action":"string"}, "", "");
	executetest("addwidmaster",{"metadata.method":"palettedto","wid":"palettedto","widname":"string","category":"string","subcategory":"string"}, "", "");
	executetest("addwidmaster",{"metadata.method":"addfield","wid":"addfield","fieldname":"string","editable":"string","display":"string","oneditactions":"string","addfielddefault":"inherit"}, "", "");
	
	
	//gojs object
	executetest("addwidmaster",{"metadata.method":"gojsobject","wid":"gojsobject","class":"string","linkFromPortIdProperty":"string","linkToPortIdProperty":"string","nodeDataArray":"onetomany","linkDataArray":"onetomany"}, "", "");
	executetest("addwidmaster",{"metadata.method":"nodeDataArray","wid":"nodeDataArray", "key":"string", "loc":"string", "leftArray":"onetomany", "topArray":"onetomany", "bottomArray":"onetomany", "rightArray":"onetomany"}, "", "");
	executetest("addwidmaster",{"metadata.method":"leftArray","wid":"leftArray","class":"string","portColor":"string", "portId":"string"}, "", "");
	executetest("addwidmaster",{"metadata.method":"topArray","wid":"topArray","class":"string","portColor":"string", "portId":"string"}, "", "");
	executetest("addwidmaster",{"metadata.method":"bottomArray","wid":"bottomArray","portColor":"string", "portId":"string"}, "", "");
	executetest("addwidmaster",{"metadata.method":"rightArray","wid":"rightArray","portColor":"string", "portId":"string"}, "", "");
	executetest("addwidmaster",{"metadata.method":"linkDataArray","wid":"linkDataArray","from":"string", "to":"string", "fromPort":"string", "toPort":"string"}, "", "");
	executetest("addwidmaster",{"metadata.method":"gojsrel1","wid":"gojsrel1","primarywid":"gojsobject","secondarywid":"nodedataarray","relationshiptype":"attributes","metadata.method":"relationshipdto"}, "", "");
	executetest("addwidmaster",{"metadata.method":"gojsrel2","wid":"gojsrel2","class":"string","primarywid":"gojsobject","secondarywid":"linkdataarray","relationshiptype":"attributes","metadata.method":"relationshipdto"}, "", "");
	executetest("addwidmaster",{"metadata.method":"gojsrel3","wid":"gojsrel3","primarywid":"nodedataarray","secondarywid":"leftarray","relationshiptype":"attributes","metadata.method":"relationshipdto"}, "", "");
	executetest("addwidmaster",{"metadata.method":"gojsrel4","wid":"gojsrel4","primarywid":"nodedataarray","secondarywid":"toparray","relationshiptype":"attributes","metadata.method":"relationshipdto"}, "", "");
	executetest("addwidmaster",{"metadata.method":"gojsrel5","wid":"gojsrel5","primarywid":"nodedataarray","secondarywid":"bottomarray","relationshiptype":"attributes","metadata.method":"relationshipdto"}, "", "");
	executetest("addwidmaster",{"metadata.method":"gojsrel6","wid":"gojsrel6","primarywid":"nodedataarray","secondarywid":"rightarray","relationshiptype":"attributes","metadata.method":"relationshipdto"}, "", "");
	
	//end gojs object
	
	
	executetest("addwidmaster",{"metadata.method":"linkrules","wid":"linkrules","linkclass":"string","min":"string","max":"string"}, "", "");
	executetest("addwidmaster",{"metadata.method":"adddto","wid":"adddto","actiondto":"onetomany","palettedto":"onetomany","addfield":"onetomany","gojsobject":"onetoone","linkrules":"onetomany"}, "", "");
	
	//create adddto relationships
	executetest("addwidmaster",{"metadata.method":"relationshipdto","wid":"rel_actiondto_adddto","primarywid":"adddto","secondarywid":"actiondto"}, "", "");
	executetest("addwidmaster",{"metadata.method":"relationshipdto","wid":"rel_palettedto_adddto","primarywid":"adddto","secondarywid":"palettedto"}, "", "");
	executetest("addwidmaster",{"metadata.method":"relationshipdto","wid":"rel_addfield_adddto","primarywid":"adddto","secondarywid":"addfield"}, "", "");
	executetest("addwidmaster",{"metadata.method":"relationshipdto","wid":"rel_gojsobject_adddto","primarywid":"adddto","secondarywid":"gojsobject"}, "", "");
	executetest("addwidmaster",{"metadata.method":"relationshipdto","wid":"rel_linkrules_adddto","primarywid":"adddto","secondarywid":"linkrules"}, "", "");
	
	
	//create book and author dtos
	//sequenceObjList.push({"seq":"seq01","command.action":"add","wid":"booksdto","title":"string","pages":"string","metadata.method":"booksdto"});
	executetest("addwidmaster",{"metadata.method":"booksdto","wid":"booksdto","title":"string","pages":"string"}, "", "");
	executetest("addwidmaster",{"metadata.method":"authordto","wid":"authordto","name":"string","age":"string","booksdto":"onetomany","adddto":"onetoone"}, "", "");
	executetest("addwidmaster",{"metadata.method":"relationshipdto","wid":"relbooktoauthor","primarywid":"authordto","secondarywid":"booksdto"}, "", "");
	executetest("addwidmaster",{"metadata.method":"relationshipdto","wid":"reladddtotoauthor","primarywid":"authordto","secondarywid":"adddto"}, "", "");
	
	
	//create a default addfield record
	executetest("addwidmaster",{"wid":"addfielddefault","fieldname":"name","display":"true","editable":"true","onreadactions":"none","oneditactions":"pop_up_alert"}, "", "");

}

exports.cody1_adds = cody1_adds = function cody1_adds(params, callback){
	cody1_setup();

	//add some authors and books
	executetest("addwidmaster",{"metadata.method":"authordto","wid":"startwid","name":"start wid","age":"00","booksdto.title":"none","booksdto.pages":"00"}, "", "");
	executetest("addwidmaster",{"metadata.method":"authordto","wid":"joe_jamison","name":"Joe Jamison","age":"32","booksdto.title":"Hello World!","booksdto.pages":"40"}, "", "");
	executetest("addwidmaster",{"metadata.method":"authordto","wid":"sarah_jones","name":"Sarah Jones","age":"40","booksdto.title":"The Sands of Time","booksdto.pages":"378"}, "", "");
	executetest("addwidmaster",{"metadata.method":"authordto","wid":"mike_williams","name":"Mike Williams","age":"36","booksdto.title":"Attack on the Mainframe","booksdto.pages":"600"}, "", "");
	executetest("addwidmaster",{"metadata.method":"authordto","wid":"jerry_stone","name":"Jerry Stone","age":"41","booksdto.title":"Carpentry 101","booksdto.pages":"120"}, "", "");
	executetest("addwidmaster",{"metadata.method":"authordto","wid":"elizabeth_heart","name":"Elizabeth Heart","age":"50","booksdto.title":"The X Factor","booksdto.pages":"300"}, "", "");
	
	//add system info (adddto info) to those author wids
	executetest("addwidmaster",{"metadata.method":"authordto","wid":"startwid","adddto.actiondto.action":"none","adddto.palettedto.0.widname":"joe_jamison","adddto.palettedto.0.category":"human","adddto.palettedto.0.subcategory":"author","adddto.addfield.fieldname":"name","adddto.linkrules.linkclass":"1","adddto.linkrules.min":"0","adddto.linkrules.max":"10"}, "", "");
	executetest("addwidmaster",{"metadata.method":"authordto","wid":"joe_jamison","adddto.actiondto.action":"{'color_screen':'blue'}","adddto.palettedto.0.widname":"joe_jamison","adddto.palettedto.0.category":"human","adddto.palettedto.0.subcategory":"author","adddto.palettedto.1.widname":"jessica_jamison","adddto.palettedto.1.category":"human","adddto.palettedto.1.subcategory":"wife","adddto.palettedto.2.widname":"mary_morris","adddto.palettedto.2.category":"human","adddto.palettedto.2.subcategory":"sister","adddto.addfield.fieldname":"name","adddto.linkrules.linkclass":"1","adddto.linkrules.min":"0","adddto.linkrules.max":"10"}, "", "");
	executetest("addwidmaster",{"metadata.method":"authordto","wid":"sarah_jones","adddto.actiondto.action":"{'color_screen':'red'}","adddto.palettedto.0.widname":"sarah_jones","adddto.palettedto.0.category":"human","adddto.palettedto.0.subcategory":"author","adddto.palettedto.1.widname":"james_jones","adddto.palettedto.1.category":"human","adddto.palettedto.1.subcategory":"husband","adddto.addfield.fieldname":"name","adddto.linkrules.linkclass":"1","adddto.linkrules.min":"0","adddto.linkrules.max":"10"}, "", "");
	executetest("addwidmaster",{"metadata.method":"authordto","wid":"mike_williams","adddto.actiondto.action":"none","adddto.palettedto.0.widname":"mike_williams","adddto.palettedto.0.category":"human","adddto.palettedto.0.subcategory":"author","adddto.palettedto.1.widname":"mister_scruffy","adddto.palettedto.1.category":"pet","adddto.palettedto.1.subcategory":"dog","adddto.palettedto.2.widname":"misses_fluffy","adddto.palettedto.2.category":"pet","adddto.palettedto.2.subcategory":"cat","adddto.addfield.fieldname":"name","adddto.linkrules.linkclass":"1","adddto.linkrules.min":"0","adddto.linkrules.max":"10"}, "", "");
	executetest("addwidmaster",{"metadata.method":"authordto","wid":"jerry_stone","adddto.actiondto.action":"none","adddto.palettedto.0.widname":"jerry_stone","adddto.palettedto.0.category":"human","adddto.palettedto.0.subcategory":"author","adddto.palettedto.1.widname":"lynne_stone","adddto.palettedto.1.category":"human","adddto.palettedto.1.subcategory":"wife","adddto.addfield.fieldname":"name","adddto.linkrules.linkclass":"1","adddto.linkrules.min":"0","adddto.linkrules.max":"10"}, "", "");
	executetest("addwidmaster",{"metadata.method":"authordto","wid":"elizabeth_heart","adddto.actiondto.action":"{'play_sound':'trumpet.ogg'}","adddto.palettedto.0.widname":"elizabeth_heart","adddto.palettedto.0.category":"human","adddto.palettedto.0.subcategory":"author","adddto.addfield.fieldname":"name","adddto.linkrules.linkclass":"1","adddto.linkrules.min":"0","adddto.linkrules.max":"10"}, "", "");

	executetest("getWidMaster", {"wid":"startwid"}, "startwid_get_result", "");
	executetest("getWidMaster", {"wid":"startwid","command.dtotype":"authordto"}, "startwid_get_result", "");
	executetest("getWidMaster", {"wid":"startwid","command.dtotype":"palettedto"}, "startwid_get_palette", "");
	executetest("getWidMaster", {"wid":"startwid","command.dtotype":"linkrules"}, "startwid_get_linkrules", "");
	executetest("getWidMaster", {"wid":"joe_jamison","command.dtotype":"authordto"}, "joe_get_result", "");
	executetest("getWidMaster", {"wid":"sarah_jones","command.dtotype":"authordto"}, "sarah_get_result", "");
	executetest("getWidMaster", {"wid":"mike_williams","command.dtotype":"authordto"}, "mike_get_result", "");
	executetest("getWidMaster", {"wid":"jerry_stone","command.dtotype":"authordto"}, "jerry_get_result", "");
	executetest("getWidMaster", {"wid":"elizabeth_heart","command.dtotype":"authordto"}, "elizabeth_get_result", "");
}

exports.cody1_results = cody1_results = function cody1_results(params, callback){
	cody1_adds();
	
	logverify("readstartwid","resultwid","startwid_get_result","","",{"age":"00","name":"start wid","wid":"addfielddefault","metadata.method":"defaultdto","booksdto.0.metadata.method":"booksdto","booksdto.0.wid":"1","booksdto.0.title":"none","booksdto.0.pages":"00","adddto.0.metadata.method":"adddto","adddto.0.wid":"13","adddto.0.actiondto.0.metadata.method":"actiondto","adddto.0.actiondto.0.wid":"14","adddto.0.actiondto.0.action":"none","adddto.0.palettedto.0.metadata.method":"palettedto","adddto.0.palettedto.0.wid":"16","adddto.0.palettedto.0.widname":"joe_jamison","adddto.0.palettedto.0.category":"human","adddto.0.palettedto.0.subcategory":"author","adddto.0.addfield.0.metadata.method":"addfield","adddto.0.addfield.0.wid":"18","adddto.0.addfield.0.fieldname":"name","adddto.0.linkrules.0.metadata.method":"linkrules","adddto.0.linkrules.0.wid":"20","adddto.0.linkrules.0.linkclass":"1","adddto.0.linkrules.0.min":"0","adddto.0.linkrules.0.max":"10","fieldname":"name","display":"true","editable":"true","onreadactions":"none","oneditactions":"pop_up_alert"});
	logverify("readstartwid","resultwid","startwid_get_result","","",{"age":"00","name":"start wid","wid":"addfielddefault","metadata.method":"defaultdto","booksdto.0.metadata.method":"booksdto","booksdto.0.wid":"1","booksdto.0.title":"none","booksdto.0.pages":"00","adddto.0.metadata.method":"adddto","adddto.0.wid":"13","adddto.0.actiondto.0.metadata.method":"actiondto","adddto.0.actiondto.0.wid":"14","adddto.0.actiondto.0.action":"none","adddto.0.palettedto.0.metadata.method":"palettedto","adddto.0.palettedto.0.wid":"16","adddto.0.palettedto.0.widname":"joe_jamison","adddto.0.palettedto.0.category":"human","adddto.0.palettedto.0.subcategory":"author","adddto.0.addfield.0.metadata.method":"addfield","adddto.0.addfield.0.wid":"18","adddto.0.addfield.0.fieldname":"name","adddto.0.linkrules.0.metadata.method":"linkrules","adddto.0.linkrules.0.wid":"20","adddto.0.linkrules.0.linkclass":"1","adddto.0.linkrules.0.min":"0","adddto.0.linkrules.0.max":"10","fieldname":"name","display":"true","editable":"true","onreadactions":"none","oneditactions":"pop_up_alert"});
	logverify("readstartwid","resultwid","startwid_get_result","","",{"age":"00","name":"start wid","wid":"addfielddefault","metadata.method":"defaultdto","booksdto.0.metadata.method":"booksdto","booksdto.0.wid":"1","booksdto.0.title":"none","booksdto.0.pages":"00","adddto.0.metadata.method":"adddto","adddto.0.wid":"13","adddto.0.actiondto.0.metadata.method":"actiondto","adddto.0.actiondto.0.wid":"14","adddto.0.actiondto.0.action":"none","adddto.0.palettedto.0.metadata.method":"palettedto","adddto.0.palettedto.0.wid":"16","adddto.0.palettedto.0.widname":"joe_jamison","adddto.0.palettedto.0.category":"human","adddto.0.palettedto.0.subcategory":"author","adddto.0.addfield.0.metadata.method":"addfield","adddto.0.addfield.0.wid":"18","adddto.0.addfield.0.fieldname":"name","adddto.0.linkrules.0.metadata.method":"linkrules","adddto.0.linkrules.0.wid":"20","adddto.0.linkrules.0.linkclass":"1","adddto.0.linkrules.0.min":"0","adddto.0.linkrules.0.max":"10","fieldname":"name","display":"true","editable":"true","onreadactions":"none","oneditactions":"pop_up_alert"});
	logverify("readstartwid","resultwid","startwid_get_result","","",{"age":"00","name":"start wid","wid":"addfielddefault","metadata.method":"defaultdto","booksdto.0.metadata.method":"booksdto","booksdto.0.wid":"1","booksdto.0.title":"none","booksdto.0.pages":"00","adddto.0.metadata.method":"adddto","adddto.0.wid":"13","adddto.0.actiondto.0.metadata.method":"actiondto","adddto.0.actiondto.0.wid":"14","adddto.0.actiondto.0.action":"none","adddto.0.palettedto.0.metadata.method":"palettedto","adddto.0.palettedto.0.wid":"16","adddto.0.palettedto.0.widname":"joe_jamison","adddto.0.palettedto.0.category":"human","adddto.0.palettedto.0.subcategory":"author","adddto.0.addfield.0.metadata.method":"addfield","adddto.0.addfield.0.wid":"18","adddto.0.addfield.0.fieldname":"name","adddto.0.linkrules.0.metadata.method":"linkrules","adddto.0.linkrules.0.wid":"20","adddto.0.linkrules.0.linkclass":"1","adddto.0.linkrules.0.min":"0","adddto.0.linkrules.0.max":"10","fieldname":"name","display":"true","editable":"true","onreadactions":"none","oneditactions":"pop_up_alert"});
	logverify("readstartwid","resultwid","startwid_get_result","","",{"age":"00","name":"start wid","wid":"addfielddefault","metadata.method":"defaultdto","booksdto.0.metadata.method":"booksdto","booksdto.0.wid":"1","booksdto.0.title":"none","booksdto.0.pages":"00","adddto.0.metadata.method":"adddto","adddto.0.wid":"13","adddto.0.actiondto.0.metadata.method":"actiondto","adddto.0.actiondto.0.wid":"14","adddto.0.actiondto.0.action":"none","adddto.0.palettedto.0.metadata.method":"palettedto","adddto.0.palettedto.0.wid":"16","adddto.0.palettedto.0.widname":"joe_jamison","adddto.0.palettedto.0.category":"human","adddto.0.palettedto.0.subcategory":"author","adddto.0.addfield.0.metadata.method":"addfield","adddto.0.addfield.0.wid":"18","adddto.0.addfield.0.fieldname":"name","adddto.0.linkrules.0.metadata.method":"linkrules","adddto.0.linkrules.0.wid":"20","adddto.0.linkrules.0.linkclass":"1","adddto.0.linkrules.0.min":"0","adddto.0.linkrules.0.max":"10","fieldname":"name","display":"true","editable":"true","onreadactions":"none","oneditactions":"pop_up_alert"});
	logverify("readstartwid","resultwid","startwid_get_result","","",{"age":"00","name":"start wid","wid":"addfielddefault","metadata.method":"defaultdto","booksdto.0.metadata.method":"booksdto","booksdto.0.wid":"1","booksdto.0.title":"none","booksdto.0.pages":"00","adddto.0.metadata.method":"adddto","adddto.0.wid":"13","adddto.0.actiondto.0.metadata.method":"actiondto","adddto.0.actiondto.0.wid":"14","adddto.0.actiondto.0.action":"none","adddto.0.palettedto.0.metadata.method":"palettedto","adddto.0.palettedto.0.wid":"16","adddto.0.palettedto.0.widname":"joe_jamison","adddto.0.palettedto.0.category":"human","adddto.0.palettedto.0.subcategory":"author","adddto.0.addfield.0.metadata.method":"addfield","adddto.0.addfield.0.wid":"18","adddto.0.addfield.0.fieldname":"name","adddto.0.linkrules.0.metadata.method":"linkrules","adddto.0.linkrules.0.wid":"20","adddto.0.linkrules.0.linkclass":"1","adddto.0.linkrules.0.min":"0","adddto.0.linkrules.0.max":"10","fieldname":"name","display":"true","editable":"true","onreadactions":"none","oneditactions":"pop_up_alert"});
	return verifysummary("resultwid");
}

exports.cody1 = cody1 = function cody1(params, callback){
	testclearstorage();
	results = [];
	
	results.push(cody1_results());
	
	var x = toObject(result);
    if (callback instanceof Function) { 
    	callback(x); 
    } else { if (params) {
    	return x; 
    	}
    }
}
*/


//function wv(){ //widviewer 
exports.wv = wv = function wv(params, callback) { //widviewer 
	    // create dtos  
    var executeList = [ 
        {"executethis":"updatewid","metadata.method":"authordto","wid":"authordto","name":"string","age":"string","booksdto":"onetomany","adddto":"onetoone","defaultauthordtoactions":"inherit"},
        {"executethis":"updatewid","metadata.method":"booksdto","wid":"booksdto","title":"string","pages":"string"},  
        {"executethis":"updatewid","metadata.method":"adddto","wid":"adddto","addfield":"onetomany","gojsobject":"onetoone","linkrules":"onetomany","actiondto":"onetomany","defaultadddtoactions":"inherit"},
        {"executethis":"updatewid","metadata.method":"addfield","wid":"addfield","fieldname":"string","editable":"string","display":"string","oneditactions":"string","defaultfieldvalue":"inherit"},
        {"executethis":"updatewid","metadata.method":"gojsobject","wid":"gojsobject","class":"string","linkFromPortIdProperty":"string","linkToPortIdProperty":"string","nodeDataArray":"onetomany","linkDataArray":"onetomany"}, 
        {"executethis":"updatewid","metadata.method":"nodedataarray","wid":"nodedataarray", "key":"string", "loc":"string", "leftArray":"onetomany", "topArray":"onetomany", "bottomArray":"onetomany", "rightArray":"onetomany"},    
        {"executethis":"updatewid","metadata.method":"leftarray","wid":"leftarray","class":"string","portColor":"string", "portId":"string"}, 
        {"executethis":"updatewid","metadata.method":"toparray","wid":"toparray","class":"string","portColor":"string", "portId":"string"},
        {"executethis":"updatewid","metadata.method":"bottomarray","wid":"bottomarray","portColor":"string", "portId":"string"},  
        {"executethis":"updatewid","metadata.method":"rightarray","wid":"rightarray","portColor":"string", "portId":"string"},    
        {"executethis":"updatewid","metadata.method":"linkdataarray","wid":"linkdataarray","from":"string", "to":"string", "fromPort":"string", "toPort":"string"},           
        {"executethis":"updatewid","metadata.method":"linkrules","wid":"linkrules","linkclass":"string","min":"string","max":"string"},   
        {"executethis":"updatewid","metadata.method":"actiondto","wid":"actiondto","displayname":"string", "actiondescription":"string", "category":"string", "subcategory":"string", "addthis.preexecute":"string", "addthis.executethis":"string", "addthis.postexecute":"string", "defaultmasteractions":"inherit"}
    ];

    execute(executeList, function (err, res) {
        console.log(' >>> final response after create dtos executeList >>> ' + JSON.stringify(res));
        // create relationships
        executeList = [     
        {"executethis":"updatewid","metadata.method":"relationshipdto","wid":"relbooktoauthor","primarywid":"authordto","secondarywid":"booksdto", "relationshiptype":"attributes"},
        {"executethis":"updatewid","metadata.method":"relationshipdto","wid":"reladddtotoauthor","primarywid":"authordto","secondarywid":"adddto","relationshiptype":"attributes"},
        {"executethis":"updatewid","metadata.method":"relationshipdto","wid":"gojsrel1","primarywid":"gojsobject","secondarywid":"nodedataarray","relationshiptype":"attributes"},    
        {"executethis":"updatewid","metadata.method":"relationshipdto","wid":"gojsrel2","primarywid":"gojsobject","secondarywid":"linkdataarray","relationshiptype":"attributes"},    
        {"executethis":"updatewid","metadata.method":"relationshipdto","wid":"gojsrel3","primarywid":"nodedataarray","secondarywid":"leftarray","relationshiptype":"attributes"},
        {"executethis":"updatewid","metadata.method":"relationshipdto","wid":"gojsrel4","primarywid":"nodedataarray","secondarywid":"toparray","relationshiptype":"attributes"},
        {"executethis":"updatewid","metadata.method":"relationshipdto","wid":"gojsrel5","primarywid":"nodedataarray","secondarywid":"bottomarray","relationshiptype":"attributes"},
        {"executethis":"updatewid","metadata.method":"relationshipdto","wid":"gojsrel6","primarywid":"nodedataarray","secondarywid":"rightarray","relationshiptype":"attributes"},
        {"executethis":"updatewid","metadata.method":"relationshipdto","wid":"rel_actiondto_adddto","primarywid":"adddto","secondarywid":"actiondto","relationshiptype":"attributes"},
        {"executethis":"updatewid","metadata.method":"relationshipdto","wid":"rel_addfield_adddto","primarywid":"adddto","secondarywid":"addfield","relationshiptype":"attributes"},
        {"executethis":"updatewid","metadata.method":"relationshipdto","wid":"rel_gojsobject_adddto","primarywid":"adddto","secondarywid":"gojsobject","relationshiptype":"attributes"},
        {"executethis":"updatewid","metadata.method":"relationshipdto","wid":"rel_linkrules_adddto","primarywid":"adddto","secondarywid":"linkrules","relationshiptype":"attributes"}
       ];
        execute(executeList, function (err, res) {

            var executeList = [
            //{"executethis":"addwidmaster","metadata.method":"authordto","wid":"startwid","name":"start wid","age":"00","booksdto.title":"none","booksdto.pages":"00"},
            {"executethis":"addwidmaster","metadata.method":"authordto","wid":"joe_jamison","name":"Joe Jamison","age":"32","booksdto.title":"Hello World!","booksdto.pages":"40"},
            {"executethis":"addwidmaster","metadata.method":"authordto","wid":"sarah_jones","name":"Sarah Jones","age":"40","booksdto.title":"The Sands of Time","booksdto.pages":"378"},
            {"executethis":"addwidmaster","metadata.method":"authordto","wid":"mike_williams","name":"Mike Williams","age":"36","booksdto.title":"Attack on the Mainframe","booksdto.pages":"600"},
            {"executethis":"addwidmaster","metadata.method":"authordto","wid":"jerry_stone","name":"Jerry Stone","age":"41","booksdto.title":"Carpentry 101","booksdto.pages":"120"},
            {"executethis":"addwidmaster","metadata.method":"authordto","wid":"elizabeth_heart","name":"Elizabeth Heart","age":"50","booksdto.title":"The X Factor","booksdto.pages":"300"}
                // {"executethis":"updatewid","metadata.method":"authordto","wid":"elizabeth_heart","name":"Elizabeth Heart","age":"50"},
                // {"executethis":"updatewid","metadata.method":"booksdto","wid":"222","title":"The X Factor","pages":"300"},
                // {"executethis":"updatewid","metadata.method":"relationshipdto","wid":"rel111","primarywid":"elizabeth_heart","secondarywid":"222", "relationshiptype":"attributes"}

            ];
            //debuglevel=10;
            //saveglobal("debugname", "getwidmongo");
            //saveglobal("debugcat", "add");
            //saveglobal("debugsubcat", sub");
            saveglobal("debugcolor", 1);
            execute(executeList, function (err, res) {
                console.log(' >>> final response after create createsampledata executeList >>> ' + JSON.stringify(res));
                //saveglobal("debugname", "aggressivedto");
                //debuglevel=10;
                //aggressivedto("authordto", "", 10, function (err, res) {
                //aggressivedto("elizabeth_heart", "", 10, function (err, res) {
                getwidmaster({"wid":"elizabeth_heart"}, function (err, res) {
                    callback({}, res);
                    })
                });
            });
        });
    }   

 

    // create defaults
    // default actions at the actiondto
//     executetest("addwidmaster", {
//         "metadata.method": "actiondto",
//         "wid": "defaultmasteractions",
//         "adddto.actiondto.0.widname": "startwid",
//         "adddto.actiondto.0.displayname": "1 Process Blur",
//         "adddto.actiondto.0.actiondescription": "string",
//         "adddto.actiondto.0.category": "blur",
//         "adddto.actiondto.0.subcategory": "name",
//         "adddto.actiondto.0.dtotype": "",
//         "adddto.actiondto.0.convertmethod": "wid",
//         "adddto.actiondto.0.addthis.preexecute": "",
//         "adddto.actiondto.0.addthis.executethis": "fieldrequired",
//         "adddto.actiondto.0.addthis.postexecute": "getwidmaster",

//         "adddto.actiondto.1.widname": "startwid",
//         "adddto.actiondto.1.displayname": "2 Open As Json",
//         "adddto.actiondto.1.actiondescription": "string",
//         "adddto.actiondto.1.category": "string",
//         "adddto.actiondto.1.subcategory": "string",
//         "adddto.actiondto.1.dtotype": "",
//         "adddto.actiondto.1.convertmethod": "json",
//         "adddto.actiondto.1.addthis.preexecute": "",
//         "adddto.actiondto.1.addthis.executethis": "open_as_wid",
//         "adddto.actiondto.1.addthis.postexecute": "getwidmaster"
//     });
//     // default actions added at adddto
//     executetest("addwidmaster", {
//         "wid": "defaultadddtoactions",
//         "metadata.method": "adddto",
//         "command.dtotype": "actiondto",
//         "displayname": "5Open As Wid",
//         "actiondescription": "desc5",
//         "category": "button",
//         "subcategory": "o1",
//         "addthis.preexecute": "setdtoforwid",
//         "addthis.executethis": "getwidmaster",
//         "addthis.postexecute": "getwidmaster"
//     }, "", "");
//     // default actions added at authordto level
//     executetest("addwidmaster", {
//         "wid": "defaultauthordtoactions",
//         "metadata.method": "authordto",
//         "command.dtotype": "actiondto",
//         "displayname": "6Open As Wid",
//         "actiondescription": "desc6",
//         "category": "button",
//         "subcategory": "o1",
//         "addthis.preexecute": "setdtoforwid",
//         "addthis.executethis": "getwidmaster",
//         "addthis.postexecute": "getwidmaster"
//     }, "", "");
//     // default field valeus at addfield level
//     executetest("addwidmaster", {
//         "wid": "defaultfieldvalue",
//         "metadata.method": "addfield",
//         "fieldname": "name",
//         "display": "true",
//         "editable": "true",
//         "onreadactions": "none",
//         "oneditactions": "pop_up_alert"
//     }, "", "");

//     // create dtos
//     executetest("addwidmaster", {
//         "metadata.method": "adddto",
//         "wid": "adddto",
//         "addfield": "onetomany",
//         "gojsobject": "onetoone",
//         "linkrules": "onetomany",
//         "actiondto": "onetomany",
//         "defaultadddtoactions": "inherit"
//     }, "", "");
//     executetest("addwidmaster", {
//         "metadata.method": "authordto",
//         "wid": "authordto",
//         "name": "string",
//         "age": "string",
//         "booksdto": "onetomany",
//         "adddto": "onetoone",
//         "defaultauthordtoactions": "inherit"
//     }, "", "");
//     executetest("addwidmaster", {
//         "metadata.method": "booksdto",
//         "wid": "booksdto",
//         "title": "string",
//         "pages": "string"
//     }, "", "");
//     executetest("addwidmaster", {
//         "metadata.method": "addfield",
//         "wid": "addfield",
//         "fieldname": "string",
//         "editable": "string",
//         "display": "string",
//         "oneditactions": "string",
//         "defaultfieldvalue": "inherit"
//     }, "", "");
//     executetest("addwidmaster", {
//         "metadata.method": "gojsobject",
//         "wid": "gojsobject",
//         "class": "string",
//         "linkFromPortIdProperty": "string",
//         "linkToPortIdProperty": "string",
//         "nodeDataArray": "onetomany",
//         "linkDataArray": "onetomany"
//     }, "", "");
//     executetest("addwidmaster", {
//         "metadata.method": "nodeDataArray",
//         "wid": "nodeDataArray",
//         "key": "string",
//         "loc": "string",
//         "leftArray": "onetomany",
//         "topArray": "onetomany",
//         "bottomArray": "onetomany",
//         "rightArray": "onetomany"
//     }, "", "");
//     executetest("addwidmaster", {
//         "metadata.method": "leftArray",
//         "wid": "leftArray",
//         "class": "string",
//         "portColor": "string",
//         "portId": "string"
//     }, "", "");
//     executetest("addwidmaster", {
//         "metadata.method": "topArray",
//         "wid": "topArray",
//         "class": "string",
//         "portColor": "string",
//         "portId": "string"
//     }, "", "");
//     executetest("addwidmaster", {
//         "metadata.method": "bottomArray",
//         "wid": "bottomArray",
//         "portColor": "string",
//         "portId": "string"
//     }, "", "");
//     executetest("addwidmaster", {
//         "metadata.method": "rightArray",
//         "wid": "rightArray",
//         "portColor": "string",
//         "portId": "string"
//     }, "", "");
//     executetest("addwidmaster", {
//         "metadata.method": "linkDataArray",
//         "wid": "linkDataArray",
//         "from": "string",
//         "to": "string",
//         "fromPort": "string",
//         "toPort": "string"
//     }, "", "");
//     executetest("addwidmaster", {
//         "metadata.method": "linkrules",
//         "wid": "linkrules",
//         "linkclass": "string",
//         "min": "string",
//         "max": "string"
//     }, "", "");
//     executetest("addwidmaster", {
//         "metadata.method": "actiondto",
//         "wid": "actiondto",
//         "displayname": "string",
//         "actiondescription": "string",
//         "category": "string",
//         "subcategory": "string",
//         "addthis.preexecute": "string",
//         "addthis.executethis": "string",
//         "addthis.postexecute": "string",
//         "defaultmasteractions": "inherit"
//     }, "", "");

//     // create relationships
//     executetest("addwidmaster", {
//         "metadata.method": "relationshipdto",
//         "wid": "relbooktoauthor",
//         "primarywid": "authordto",
//         "secondarywid": "booksdto"
//     }, "", "");
//     executetest("addwidmaster", {
//         "metadata.method": "relationshipdto",
//         "wid": "reladddtotoauthor",
//         "primarywid": "authordto",
//         "secondarywid": "adddto"
//     }, "", "");
//     executetest("addwidmaster", {
//         "metadata.method": "relationshipdto",
//         "wid": "gojsrel1",
//         "primarywid": "gojsobject",
//         "secondarywid": "nodedataarray",
//         "relationshiptype": "attributes",
//         "metadata.method": "relationshipdto"
//     }, "", "");
//     executetest("addwidmaster", {
//         "metadata.method": "relationshipdto",
//         "wid": "gojsrel2",
//         "primarywid": "gojsobject",
//         "secondarywid": "linkdataarray",
//         "relationshiptype": "attributes",
//         "metadata.method": "relationshipdto"
//     }, "", "");
//     executetest("addwidmaster", {
//         "metadata.method": "relationshipdto",
//         "wid": "gojsrel3",
//         "primarywid": "nodedataarray",
//         "secondarywid": "leftarray",
//         "relationshiptype": "attributes",
//         "metadata.method": "relationshipdto"
//     }, "", "");
//     executetest("addwidmaster", {
//         "metadata.method": "relationshipdto",
//         "wid": "gojsrel4",
//         "primarywid": "nodedataarray",
//         "secondarywid": "toparray",
//         "relationshiptype": "attributes",
//         "metadata.method": "relationshipdto"
//     }, "", "");
//     executetest("addwidmaster", {
//         "metadata.method": "relationshipdto",
//         "wid": "gojsrel5",
//         "primarywid": "nodedataarray",
//         "secondarywid": "bottomarray",
//         "relationshiptype": "attributes",
//         "metadata.method": "relationshipdto"
//     }, "", "");
//     executetest("addwidmaster", {
//         "metadata.method": "relationshipdto",
//         "wid": "gojsrel6",
//         "primarywid": "nodedataarray",
//         "secondarywid": "rightarray",
//         "relationshiptype": "attributes",
//         "metadata.method": "relationshipdto"
//     }, "", "");
//     executetest("addwidmaster", {
//         "metadata.method": "relationshipdto",
//         "wid": "rel_actiondto_adddto",
//         "primarywid": "adddto",
//         "secondarywid": "actiondto"
//     }, "", "");
//     executetest("addwidmaster", {
//         "metadata.method": "relationshipdto",
//         "wid": "rel_addfield_adddto",
//         "primarywid": "adddto",
//         "secondarywid": "addfield"
//     }, "", "");
//     executetest("addwidmaster", {
//         "metadata.method": "relationshipdto",
//         "wid": "rel_gojsobject_adddto",
//         "primarywid": "adddto",
//         "secondarywid": "gojsobject"
//     }, "", "");
//     executetest("addwidmaster", {
//         "metadata.method": "relationshipdto",
//         "wid": "rel_linkrules_adddto",
//         "primarywid": "adddto",
//         "secondarywid": "linkrules"
//     }, "", "");

//     // check to  see if complete dto was entered completely

//     executetest("getwidmaster", {
//         "wid": "authordto"
//     }, "author_get_result", "");


//     // // add me authors and books
//     executetest("addwidmaster", {
//         "metadata.method": "authordto",
//         "wid": "startwid",
//         "name": "start wid",
//         "age": "00",
//         "booksdto.title": "none",
//         "booksdto.pages": "00"
//     }, "", "");
//     executetest("addwidmaster", {
//         "metadata.method": "authordto",
//         "wid": "joe_jamison",
//         "name": "Joe Jamison",
//         "age": "32",
//         "booksdto.title": "Hello World!",
//         "booksdto.pages": "40"
//     }, "", "");
//     executetest("addwidmaster", {
//         "metadata.method": "authordto",
//         "wid": "sarah_jones",
//         "name": "Sarah Jones",
//         "age": "40",
//         "booksdto.title": "The Sands of Time",
//         "booksdto.pages": "378"
//     }, "", "");
//     executetest("addwidmaster", {
//         "metadata.method": "authordto",
//         "wid": "mike_williams",
//         "name": "Mike Williams",
//         "age": "36",
//         "booksdto.title": "Attack on the Mainframe",
//         "booksdto.pages": "600"
//     }, "", "");
//     executetest("addwidmaster", {
//         "metadata.method": "authordto",
//         "wid": "jerry_stone",
//         "name": "Jerry Stone",
//         "age": "41",
//         "booksdto.title": "Carpentry 101",
//         "booksdto.pages": "120"
//     }, "", "");
//     executetest("addwidmaster", {
//         "metadata.method": "authordto",
//         "wid": "elizabeth_heart",
//         "name": "Elizabeth Heart",
//         "age": "50",
//         "booksdto.title": "The X Factor",
//         "booksdto.pages": "300"
//     }, "", "");

//     // // add actions to specific wids
//     executetest("addwidmaster", {
//         "wid": "startwid",
//         "metadata.method": "authordto",
//         "adddto.actiondto.displayname": "888Open As Wid",
//         "adddto.actiondto.actiondescription": "desc888",
//         "adddto.actiondto.category": "button",
//         "adddto.actiondto.subcategory": "o888",
//         "adddto.actiondto.addthis.preexecute": "setdtoforwid",
//         "adddto.actiondto.addthis.executethis": "getwidmaster",
//         "adddto.actiondto.addthis.postexecute": "getwidmaster"
//     });
//     executetest("addwidmaster", {
//         "wid": "startwid",
//         "metadata.method": "authordto",
//         "adddto.actiondto.displayname": "999Open As Wid",
//         "adddto.actiondto.actiondescription": "desc999",
//         "adddto.actiondto.category": "button",
//         "adddto.actiondto.subcategory": "o999",
//         "adddto.actiondto.addthis.preexecute": "setdtoforwid",
//         "adddto.actiondto.addthis.executethis": "getwidmaster",
//         "adddto.actiondto.addthis.postexecute": "getwidmaster"
//     });

//     // // check startwid with all the additions
//     executetest("getwidmaster", {
//         "wid": "startwid"
//     }, "startwid_get", "");

//     debuglevel = 83;
//     executetest("getwidmaster", {
//         "wid": "startwid",
//         "command.dtotype": "defaultdto"
//     }, "author_get", "");

//     params = {
//         'test': 'PASS'
//     };
//     var err;
//     callback(err, params);
// }

//  testclearstorage(); 

//  executetest("addwidmaster",{"metadata.method":"adddto","wid":"adddto","addfield":"onetomany","gojsobject":"onetoone","linkrules":"onetomany","actiondto":"onetomany","defaultadddtoactions":"inherit"}, "", "");

//  // create dtos
//  executetest("addwidmaster",{"metadata.method":"authordto","wid":"authordto","name":"string","age":"string","booksdto":"onetomany","adddto":"onetoone","defaultauthordtoactions":"inherit"}, "", "");
//  executetest("addwidmaster",{"metadata.method":"booksdto","wid":"booksdto","title":"string","pages":"string"}, "", "");  
//  executetest("addwidmaster",{"metadata.method":"addfield","wid":"addfield","fieldname":"string","editable":"string","display":"string","oneditactions":"string","addfielddefault":"inherit"}, "", "");
//  executetest("addwidmaster",{"metadata.method":"gojsobject","wid":"gojsobject","class":"string","linkFromPortIdProperty":"string","linkToPortIdProperty":"string","nodeDataArray":"onetomany","linkDataArray":"onetomany"}, "", ""); 
//  executetest("addwidmaster",{"metadata.method":"nodeDataArray","wid":"nodeDataArray", "key":"string", "loc":"string", "leftArray":"onetomany", "topArray":"onetomany", "bottomArray":"onetomany", "rightArray":"onetomany"}, "", "");    
//  executetest("addwidmaster",{"metadata.method":"leftArray","wid":"leftArray","class":"string","portColor":"string", "portId":"string"}, "", ""); 
//  executetest("addwidmaster",{"metadata.method":"topArray","wid":"topArray","class":"string","portColor":"string", "portId":"string"}, "", "");   
//  executetest("addwidmaster",{"metadata.method":"bottomArray","wid":"bottomArray","portColor":"string", "portId":"string"}, "", "");  
//  executetest("addwidmaster",{"metadata.method":"rightArray","wid":"rightArray","portColor":"string", "portId":"string"}, "", "");    
//  executetest("addwidmaster",{"metadata.method":"linkDataArray","wid":"linkDataArray","from":"string", "to":"string", "fromPort":"string", "toPort":"string"}, "", "");           
//  executetest("addwidmaster",{"metadata.method":"linkrules","wid":"linkrules","linkclass":"string","min":"string","max":"string"}, "", "");   
//  executetest("addwidmaster",{"metadata.method":"actiondto","wid":"actiondto","displayname":"string", "actiondescription":"string", "category":"string", "subcategory":"string", "addthis.preexecute":"string", "addthis.executethis":"string", "addthis.postexecute":"string", "defaultaction":"inherit"}, "", "");
//  // addthis was used in the last two since we needed to add parameters executethis, etc. -- we did not want the system to act on those parameters
//  // addthis could have been used to add all of these

//  // create relationships
//  executetest("addwidmaster",{"metadata.method":"relationshipdto","wid":"relbooktoauthor","primarywid":"authordto","secondarywid":"booksdto"}, "", "");
//  executetest("addwidmaster",{"metadata.method":"relationshipdto","wid":"reladddtotoauthor","primarywid":"authordto","secondarywid":"adddto"}, "", "");
//  executetest("addwidmaster",{"metadata.method":"relationshipdto","wid":"gojsrel1","primarywid":"gojsobject","secondarywid":"nodedataarray","relationshiptype":"attributes","metadata.method":"relationshipdto"}, "", "");    
//  executetest("addwidmaster",{"metadata.method":"relationshipdto","wid":"gojsrel2","primarywid":"gojsobject","secondarywid":"linkdataarray","relationshiptype":"attributes","metadata.method":"relationshipdto"}, "", "");    
//  executetest("addwidmaster",{"metadata.method":"relationshipdto","wid":"gojsrel3","primarywid":"nodedataarray","secondarywid":"leftarray","relationshiptype":"attributes","metadata.method":"relationshipdto"}, "", "");
//  executetest("addwidmaster",{"metadata.method":"relationshipdto","wid":"gojsrel4","primarywid":"nodedataarray","secondarywid":"toparray","relationshiptype":"attributes","metadata.method":"relationshipdto"}, "", "");
//  executetest("addwidmaster",{"metadata.method":"relationshipdto","wid":"gojsrel5","primarywid":"nodedataarray","secondarywid":"bottomarray","relationshiptype":"attributes","metadata.method":"relationshipdto"}, "", "");
//  executetest("addwidmaster",{"metadata.method":"relationshipdto","wid":"gojsrel6","primarywid":"nodedataarray","secondarywid":"rightarray","relationshiptype":"attributes","metadata.method":"relationshipdto"}, "", "");
//  executetest("addwidmaster",{"metadata.method":"relationshipdto","wid":"rel_actiondto_adddto","primarywid":"adddto","secondarywid":"actiondto"}, "", "");
//  executetest("addwidmaster",{"metadata.method":"relationshipdto","wid":"rel_addfield_adddto","primarywid":"adddto","secondarywid":"addfield"}, "", "");
//  executetest("addwidmaster",{"metadata.method":"relationshipdto","wid":"rel_gojsobject_adddto","primarywid":"adddto","secondarywid":"gojsobject"}, "", "");
//  executetest("addwidmaster",{"metadata.method":"relationshipdto","wid":"rel_linkrules_adddto","primarywid":"adddto","secondarywid":"linkrules"}, "", "");
//  executetest("getwidmaster", {"wid":"authordto"}, "author_get_result", "");

// }




exports.dtott = dtott = function dtott(params, callback) { //widviewer 

    testclearstorage();

    saveglobal("debugcolor", 0);
    saveglobal("debugon", true);
    saveglobal("debugname", "");
    saveglobal("debugsubcat", "");
    saveglobal("debugcat", "");
    saveglobal("debugfilter" = "");
    saveglobal("debugdestination", 1);
    //debuglevel=15;


    executetest("addwidmaster", {
        "wid": "roger",
        "name": "colburn",
        "a": "b"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "authordto",
        "name": "string",
        "age": "string",
        "booksdto": "onetomany",
        "adddto": "onetoone"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "booksdto",
        "wid": "booksdto",
        "title": "string",
        "pages": "string"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "relbooktoauthor",
        "primarywid": "authordto",
        "secondarywid": "booksdto"
    }, "", "");

    // saveglobal("debugname", "addwidparameters");
    // debuglevel=20;
    // saveglobal("debugcat", "add");
    // saveglobal("debugsubcat", "core");
    saveglobal("debugname", "AddMongoRelationship");
    //debuglevel = 10;
    executetest("getwidmaster", {
        "wid": "authordto",
        "command.convertmethod": "dto"
    }, "author_get_result", "");
    //{"name":"string","age":"string","booksdto":"onetomany","adddto":"onetoone","booksdto.onetomany.title":"string","booksdto.onetomany.pages":"string"}
    //debuglevel=80;
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "startwid",
        "name": "start wid",
        "age": "00",
        "booksdto.wid": "add",
        "booksdto.title": "none",
        "booksdto.pages": "00"
    }, "", "");

    executetest("getwidmaster", {
        "wid": "startwid"
    }, "startwid_get_result", "");

    //executetest("getwidmaster", {"wid":"authordto"}, "author_get_result", "");
    //{"name":"string","age":"string","metadata.method":"authordto","wid":"authordto","booksdto":"onetomany","adddto":"onetoone","booksdto.booksdto.title":"string","booksdto.booksdto.pages":"string","booksdto.booksdto.metadata.method":"booksdto","booksdto.booksdto.wid":"booksdto"}
    params = {
        'test': 'PASS'
    };
    var err;
    callback(err, params);
    //  gets really slow it down
}



exports.dtotest = dtotest = function dtotest(params, callback) { //widviewer 

    testclearstorage();

    saveglobal("debugon", true);
    saveglobal("debugname", "");
    saveglobal("debugsubcat", "");
    saveglobal("debugcat", "");
    saveglobal("debugfilter", "");
    // debugdestination = 1;
    saveglobal("debugdestination", 1);

    //debuglevel=15;
    executetest("addwidmaster", {
        "metadata.method": "adddto",
        "wid": "adddto",
        "actiondto": "onetomany"
    }, "", "");
    debuglevel = 0;
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "authordto",
        "name": "string",
        "age": "string",
        "booksdto": "onetomany",
        "adddto": "onetoone"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "booksdto",
        "wid": "booksdto",
        "title": "string",
        "pages": "string"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "actiondto",
        "wid": "actiondto",
        "displayname": "string",
        "actiondescription": "string",
        "category": "string",
        "subcategory": "string",
        "addthis.preexecute": "string",
        "addthis.executethis": "string",
        "addthis.postexecute": "string"
    }, "", "");

    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "relbooktoauthor",
        "primarywid": "authordto",
        "secondarywid": "booksdto"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "reladddtotoauthor",
        "primarywid": "authordto",
        "secondarywid": "adddto"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "rel_actiondto_adddto",
        "primarywid": "adddto",
        "secondarywid": "actiondto"
    }, "", "");


    saveglobal("debugsubcat", "core");
    saveglobal("debugname", "addmaster");

    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "startwid",
        "name": "start wid",
        "age": "00",
        "booksdto.wid": "add",
        "booksdto.title": "none",
        "booksdto.pages": "00"
    }, "", "");

    //  // saveglobal("debugsubcat", "add");
    //      executetest("addwidmaster",{"wid":"startwid","metadata.method":"authordto","adddto.actiondto.displayname":"4Open As Wid","adddto.actiondto.actiondescription":"desc4", "adddto.actiondto.category":"button","adddto.actiondto.subcategory":"o4","adddto.actiondto.addthis.preexecute":"setdtoforwid","adddto.actiondto.addthis.executethis":"getwidmaster","adddto.actiondto.addthis.postexecute":"getwidmaster"});
    //  executetest("addwidmaster",{"wid":"startwid","metadata.method":"authordto","adddto.actiondto.displayname":"5Open As Wid","adddto.actiondto.actiondescription":"desc5", "adddto.actiondto.category":"button","adddto.actiondto.subcategory":"o5","adddto.actiondto.addthis.preexecute":"setdtoforwid","adddto.actiondto.addthis.executethis":"getwidmaster","adddto.actiondto.addthis.postexecute":"getwidmaster"});

    // // these added later
    // debuglevel=10;
    // saveglobal("debugsubcat", "get");
    //  executetest("addwidmaster",{"wid":"startwid","metadata.method":"authordto","command.dtotype":"actiondto","displayname":"2Open As Wid","actiondescription":"desc2", "category":"button","subcategory":"o1","addthis.preexecute":"setdtoforwid","addthis.executethis":"getwidmaster","addthis.postexecute":"getwidmaster"});
    //  //executetest("addwidmaster",{"wid":"startwid","metadata.method":"authordto","command.dtotype":"actiondto","displayname":"3Open As Wid","actiondescription":"desc3", "category":"button","subcategory":"o1","addthis.preexecute":"setdtoforwid","addthis.executethis":"getwidmaster","addthis.postexecute":"getwidmaster"});


    // // saveglobal("debugsubcat", "get");
    executetest("getwidmaster", {
        "wid": "startwid"
    }, "startwid_get_result", "");

    executetest("getwidmaster", {
        "wid": "authordto"
    }, "author_get_result", "");
    executetest("getwidmaster", {
        "wid": "authordto",
        "command.convertmethod": "dto"
    }, "author_get_result_dto", "");
    params = {
        'test': 'PASS'
    };
    var err;
    callback(err, params);
    //  gets really slow it down
}


exports.dtoadd = dtoadd = function dtoadd(params, callback) { //widviewer 
    //  testclearstorage(); 

    //  executetest("addwidmaster",{"metadata.method":"adddto","wid":"adddto","actiondto":"onetomany"}, "", "");
    //  executetest("addwidmaster",{"metadata.method":"authordto","wid":"authordto","name":"string","age":"string","booksdto":"onetomany","adddto":"onetoone"}, "", "");
    //  executetest("addwidmaster",{"metadata.method":"booksdto","wid":"booksdto","title":"string","pages":"string"}, "", "");  
    //  executetest("addwidmaster",{"metadata.method":"actiondto","wid":"actiondto","displayname":"string", "actiondescription":"string", "category":"string", "subcategory":"string", "addthis.preexecute":"string", "addthis.executethis":"string", "addthis.postexecute":"string"}, "", "");

    //  executetest("addwidmaster",{"metadata.method":"relationshipdto","wid":"relbooktoauthor","primarywid":"authordto","secondarywid":"booksdto"}, "", "");
    //  executetest("addwidmaster",{"metadata.method":"relationshipdto","wid":"reladddtotoauthor","primarywid":"authordto","secondarywid":"adddto"}, "", "");
    //  executetest("addwidmaster",{"metadata.method":"relationshipdto","wid":"rel_actiondto_adddto","primarywid":"adddto","secondarywid":"actiondto"}, "", "");

    //      executetest("addwidmaster",{"metadata.method":"authordto","wid":"startwid","name":"start wid","age":"00","booksdto.title":"none","booksdto.pages":"00"}, "", "");
    //      executetest("addwidmaster",{"wid":"startwid","metadata.method":"authordto","adddto.actiondto.displayname":"4Open As Wid","adddto.actiondto.actiondescription":"desc4", "adddto.actiondto.category":"button","adddto.actiondto.subcategory":"o4","adddto.actiondto.addthis.preexecute":"setdtoforwid","adddto.actiondto.addthis.executethis":"getwidmaster","adddto.actiondto.addthis.postexecute":"getwidmaster"});
    //  executetest("addwidmaster",{"wid":"startwid","metadata.method":"authordto","adddto.actiondto.displayname":"5Open As Wid","adddto.actiondto.actiondescription":"desc5", "adddto.actiondto.category":"button","adddto.actiondto.subcategory":"o5","adddto.actiondto.addthis.preexecute":"setdtoforwid","adddto.actiondto.addthis.executethis":"getwidmaster","adddto.actiondto.addthis.postexecute":"getwidmaster"});

    // executetest("addwidmaster",{"wid":"startwid","metadata.method":"authordto","command.dtotype":"adddto","displayname":"2Open As Wid","actiondescription":"desc2", "category":"button","subcategory":"o1","addthis.preexecute":"setdtoforwid","addthis.executethis":"getwidmaster","addthis.postexecute":"getwidmaster"});
    // executetest("addwidmaster",{"wid":"startwid","metadata.method":"authordto","command.dtotype":"adddto","displayname":"3Open As Wid","actiondescription":"desc3", "category":"button","subcategory":"o1","addthis.preexecute":"setdtoforwid","addthis.executethis":"getwidmaster","addthis.postexecute":"getwidmaster"});

    // //   debuglevel=10;
    //  executetest("getwidmaster", {"wid":"startwid"}, "startwid_get_result", "");
    // //   debuglevel=0
    //  executetest("getwidmaster", {"wid":"authordto"}, "author_get_result", "");
    // }

    // function dtoadd(){ //widviewer 
    testclearstorage();
    debuglevel = 15;
    executetest("addwidmaster", {
        "metadata.method": "adddto",
        "wid": "adddto",
        "actiondto": "onetomany"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "authordto",
        "name": "string",
        "age": "string",
        "booksdto": "onetomany",
        "adddto": "onetoone"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "booksdto",
        "wid": "booksdto",
        "title": "string",
        "pages": "string"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "actiondto",
        "wid": "actiondto",
        "displayname": "string",
        "actiondescription": "string",
        "category": "string",
        "subcategory": "string",
        "addthis.preexecute": "string",
        "addthis.executethis": "string",
        "addthis.postexecute": "string"
    }, "", "");

    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "relbooktoauthor",
        "primarywid": "authordto",
        "secondarywid": "booksdto"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "reladddtotoauthor",
        "primarywid": "authordto",
        "secondarywid": "adddto"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "rel_actiondto_adddto",
        "primarywid": "adddto",
        "secondarywid": "actiondto"
    }, "", "");

    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "startwid",
        "name": "start wid",
        "age": "00",
        "booksdto.title": "none",
        "booksdto.pages": "00"
    }, "", "");
    executetest("addwidmaster", {
        "wid": "startwid",
        "metadata.method": "authordto",
        "adddto.actiondto.displayname": "4Open As Wid",
        "adddto.actiondto.actiondescription": "desc4",
        "adddto.actiondto.category": "button",
        "adddto.actiondto.subcategory": "o4",
        "adddto.actiondto.addthis.preexecute": "setdtoforwid",
        "adddto.actiondto.addthis.executethis": "getwidmaster",
        "adddto.actiondto.addthis.postexecute": "getwidmaster"
    });
    executetest("addwidmaster", {
        "wid": "startwid",
        "metadata.method": "authordto",
        "adddto.actiondto.displayname": "5Open As Wid",
        "adddto.actiondto.actiondescription": "desc5",
        "adddto.actiondto.category": "button",
        "adddto.actiondto.subcategory": "o5",
        "adddto.actiondto.addthis.preexecute": "setdtoforwid",
        "adddto.actiondto.addthis.executethis": "getwidmaster",
        "adddto.actiondto.addthis.postexecute": "getwidmaster"
    });

    debuglevel = 0;

    debuglevel = 83;
    executetest("getwidmaster", {
        "wid": "startwid"
    }, "startwid_get_result", "");
    debuglevel = 0;
    executetest("getwidmaster", {
        "wid": "authordto"
    }, "author_get_result", "");
    params = {
        'test': 'PASS'
    };
    var err;
    callback(err, params);
    //  gets really slow it down
}



exports.ca1 = ca1 = function ca1(params, callback) {
    //testclearallstorage();
    testclearstorage();

    /* Setting up the structure for a user account & surveys */

    // Create the answer dto
    executetest("addwidmaster", {
        "wid": "answerdto",
        "metadata.method": "answerdto",
        "answer": "string"
    }, "", "");

    // Create the responses dto
    executetest("addwidmaster", {
        "wid": "responsedto",
        "metadata.method": "responsedto",
        "response": "string",
        "user": "string"
    }, "", "");

    // Create the question dto
    executetest("addwidmaster", {
        "wid": "questiondto",
        "metadata.method": "questiondto",
        "question": "string",
        "answerdto": "onetomany",
        "responsedto": "onetomany"
    }, "", "");

    // Create the survey dto
    executetest("addwidmaster", {
        "wid": "surveydto",
        "metadata.method": "surveydto",
        "title": "string",
        "description": "string",
        "questiondto": "onetomany"
    }, "", "");

    // Relate the question dto to the answer dto (questions can have multiple answers) and the response dto (questions can have multiple responses)
    executetest("addwidmaster", {
        "wid": "relationshipdto1",
        "metadata.method": "relationshipdto",
        "primarywid": "questiondto",
        "secondarywid": "answerdto"
    }, "", "");
    executetest("addwidmaster", {
        "wid": "relationshipdto2",
        "metadata.method": "relationshipdto",
        "primarywid": "questiondto",
        "secondarywid": "responsedto"
    }, "", "");

    // Relate the survey dto to the question dto (surveys can have multiple questions)
    executetest("addwidmaster", {
        "wid": "relationshipdto3",
        "metadata.method": "relationshipdto",
        "primarywid": "surveydto",
        "secondarywid": "questiondto"
    }, "", "");

    // Create the user dto  
    executetest("addwidmaster", {
        "wid": "userdto",
        "metadata.method": "userdto",
        "first": "string",
        "last": "string",
        "surveydto": "onetomany"
    }, "", "");

    // Relate the survey dto to the question dto (surveys can have multiple questions)
    executetest("addwidmaster", {
        "wid": "relationshipdto4",
        "metadata.method": "relationshipdto",
        "primarywid": "userdto",
        "secondarywid": "surveydto"
    }, "", "");

    // Create three user accounts
    executetest("addwidmaster", {
        "wid": "roger",
        "metadata.method": "userdto",
        "first": "roger",
        "last": "Lee"
    }, "", "");

    // roger creates a survey and adds a question (method #1 - the one liner)
    executetest("addwidmaster", {
        "wid": "roger",
        "metadata.method": "userdto",
        "surveydto.0.title": "All About Restaurants",
        "surveydto.0.description": "Questions about popular restaurants",
        "surveydto.0.questiondto.0.question": "Favorite Restaurant?",
        "surveydto.0.questiondto.0.answerdto.0.answer": "Ponderosa",
        "surveydto.0.questiondto.0.answerdto.1.answer": "Outback",
        "surveydto.0.questiondto.0.answerdto.2.answer": "Applebees",
        "surveydto.0.questiondto.0.answerdto.3.answer": "Hard Rock Cafe",
        "surveydto.0.questiondto.0.answerdto.4.answer": "Red Lobster",
        "surveydto.0.questiondto.1.question": "Which of these toppings do you prefer on your pizza?",
        "surveydto.0.questiondto.1.answerdto.0.answer": "sausage",
        "surveydto.0.questiondto.1.answerdto.1.answer": "cheese",
        "surveydto.0.questiondto.1.answerdto.2.answer": "mushrooms",
        "surveydto.0.questiondto.1.answerdto.3.answer": "pineapple",
        "surveydto.0.questiondto.1.answerdto.4.answer": "Onions"
    }, "", "");


    //        executetest("addwidmaster",
    //            {
    //                "wid": "roger",
    //                "metadata.method": "userdto",
    //                "command.dtotype": "questiondto",
    //                "question": "Which of these toppings do you prefer on your pizza?"
    //            }, "", "");

    //        executetest("addwidmaster",
    //            {
    //                "wid": "roger",
    //                "metadata.method": "userdto",
    //                "command.dtotype": "answerdto",
    //                "0.answer": "sausage",
    //                "1.answer": "cheese",
    //                "2.answer": "mushrooms",
    //                "3.answer": "pineapple",
    //                "4.answer": "Onions"
    //            }, "", "");

    executetest("getwidmaster", {
        "wid": "roger"
    }, "roger_get", "");

    executeobject = {};
    executeobject["wid"] = "roger";
    execute(executeobject, function (err, res) {
        resultobject = res;
        getwidmaster(res, function (err, res) {
            proxyprinttodiv("end", resultobject, 99);
            var err;
            callback(err, params);

        }); // TODO :: SAURABH  REVIEW THIS CONVERSION
    });
}



exports.w1 = w1 = function w1() {
    testclearstorage();
    var result;
    //result = executethis({"executethis":"func_bbb", "c":"0", "d":"1", "e":"2"}, func_bbb);
    // result = executethis({
    //     "executethis": "func_b",
    //     "c": "0",
    //     "d": "1",
    //     "e": "2"
    // }, func_b);
    execute({
        "executethis": "func_b",
        "c": "0",
        "d": "1",
        "e": "2"
    }, function (err, res) {
        func_b(res, function (err, res) {
            proxyprinttodiv('from test', result, 99);
        });
    });
}
//{"d":"1","c":"0","executethis":"func_b","g":"4"}

exports.w2 = w2 = function w2() {
    testclearstorage();
    var result;
    // result = executethis({
    //     "executethis": "async_func_bbb",
    //     "c": "0",
    //     "d": "1",
    //     "e": "2"
    // }, async_func_bbb);
    execute({
        "executethis": "async_func_bbb",
        "c": "0",
        "d": "1",
        "e": "2"
    }, function (err, res) {
        result = res;
        async_func_bbb(res, function (err, res) {
            proxyprinttodiv('from test', result, 99);

        });
    })
    //result = executethis({"executethis":"func_b", "c":"0", "d":"1", "e":"2"}, func_b);
}

//"executethis":"async_func_b","d":"1","g":"4","h":"5"

exports.async_func_bbb = async_func_bbb = function async_func_bbb(parameters, callback) {
    //added
    delete parameters["executethis"];
    delete parameters["e"];
    parameters["g"] = "4";
    sleep(100000);
    proxyprinttodiv('in synch parameters', parameters, 99);
    proxyprinttodiv('in synch callback', String(callback), 99);
    var err;
    callback(err, parameters);;
}

exports.w3 = w3 = function w3() {
    testclearstorage();
    debuglevel = 11;
    var result;
    // result = executethis({
    //     "executethis": "async_func_bbb",
    //     "c": "0",
    //     "d": "1",
    //     "e": "2"
    // }, execute);

    execute({
        "executethis": "async_func_bbb",
        "c": "0",
        "d": "1",
        "e": "2"
    }, function (err, res) {
        result = res;
        execute(result, function (err, res) {
            //result = executethis({"executethis":"func_b", "c":"0", "d":"1", "e":"2"}, func_b);
            proxyprinttodiv('from test', result, 99);
        });
    });
}


exports.testhhh = testhhh = function testhhh() {
    console.log(" *** fro testhhh ");
    testclearstorage();
    debuglevel = 10;
    executetest("addwidmaster", {
        "wid": "defaultforauthor",
        "name": "roger",
        "a": "b",
        "c": "d"
    });

    executetest("getwidmaster", {
        "wid": "defaultforauthor"
    }, "get_color1_result", "");
}


exports.testiii = testiii = function testiii() { //no
    testclearstorage();
    debuglevel = 30;
    executetest("getwidmaster", {
        "wid": "defaultforauthor"
    }, "get_color1_result", "");
}

exports.testkkk = testkkk = function testkkk() { //no
    testclearstorage();
    executetest("executethis", {
        "executethis": "getwid",
        "wid": "defaultforauthor"
    }, "get_color1_result", "");
}

exports.testmmm = testmmm = function testmmm() { //no
    testclearstorage();
    executetest("executethis", {
        "executethis": "getfrommongo",
        "wid": "defaultforauthor"
    }, "get_color1_result", "");
}

exports.testjjj = testjjj = function testjjj() { // no
    testclearstorage();
    executetest("executethis", {
        "executethis": "getwidmaster",
        "wid": "defaultforauthor"
    }, "get_color1_result", "");
}


exports.testaa = testaa = function testaa() {
    testclearstorage();
    executetest("executethis", {
        "executethis": "updatewid",
        "wid": "color1",
        "hue": "red"
    }, "", "");
    executetest("updatewid", {
        "wid": "color2",
        "hue": "red2"
    }, "", "");
    executetest("addtomongo", {
        "wid": "color3",
        "hue": "red3"
    }, "", "");
    executetest("executethis", {
        "executethis": "getwid",
        "wid": "color1"
    }, "get_color1_result", "");
    executetest("executethis", {
        "executethis": "getfrommongo",
        "wid": "color2"
    }, "b", "");
    executetest("getwid", {
        "wid": "color3",
        "hue": "red3"
    }, "c", "");
}

exports.testaaa = testaaa = function testaaa() {
    testclearstorage();
    // executetest("test2",{"wid":"colordto"}, "blue", "");
    // executetest("test2",{"wid":"colordto"}, "", "");
    // the above 2 work as of oct 30
    // 
    //executetest("test4",{"wid":"colordto"}, "", "");
    // the above works as of oct 30



    executetest("addwidmaster", {
        "wid": "colordto",
        "metadata.method": "colordto",
        "hue": "string",
        "m": "o"
    }, "", "");
    // executetest("updatewid",{"wid":"colordto","metadata.method":"colordto","hue":"string"}, "", "");
    executetest("updatewid", {
        "wid": "color1",
        "hue": "red"
    }, "", "");
    executetest("updatewid", {
        "wid": "color2",
        "hue": "red"
    }, "", "");
    executetest("updatewid", {
        "wid": "color3",
        "hue": "red"
    }, "", "");
    executetest("addwidmaster", {
        "wid": "color2",
        "hue": "blue",
        "metadata.method": "colordto"
    }, "", "");
    // executetest("getwidmaster", {"wid":"color1"}, "", "");   

    //      logverify("this_test","test_result","actual","","",getFromLocalStorage("assertion"));
}

exports.testbbb = testbbb = function testbbb() {
    testclearstorage();
    executetest("addwidmaster", {
        "wid": "colordto",
        "metadata.method": "colordto",
        "hue": "string"
    }, "", "");
}

exports.testccc = testccc = function testccc() {
    testclearstorage();
    executetest("addwidmaster", {
        "wid": "colordto",
        "metadata.method": "colordto",
        "hue": "string"
    }, "", "");
    executetest("addwidmaster", {
        "wid": "color1",
        "hue": "red"
    }, "", "");
}

exports.testddd = testddd = function testddd() {
    testclearstorage();
    executetest("addwidmaster", {
        "wid": "colordto",
        "metadata.method": "colordto",
        "hue": "string"
    }, "", "");
    executetest("addwidmaster", {
        "wid": "color1",
        "hue": "red"
    }, "", "");
    executetest("addwidmaster", {
        "wid": "color2",
        "hue": "blue"
    }, "", "");
}

exports.testeee = testeee = function testeee() {
    testclearstorage();
    executetest("addwidmaster", {
        "wid": "colordto",
        "metadata.method": "colordto",
        "hue": "string"
    }, "", "");
    executetest("addwidmaster", {
        "wid": "color1",
        "hue": "red"
    }, "", "");
    executetest("addwidmaster", {
        "wid": "color2",
        "hue": "blue"
    }, "", "");
    executetest("getwidmaster", {
        "wid": "color1"
    }, "get_color1_result", "");
}

exports.testfff = testfff = function testfff() {
    testclearstorage();
    executetest("executethis", {
        "executethis": "addwidmaster",
        "wid": "colordto",
        "metadata.method": "colordto",
        "hue": "string"
    }, "", "");
    executetest("executethis", {
        "executethis": "addwidmaster",
        "wid": "color1",
        "hue": "red"
    }, "", "");
    executetest("executethis", {
        "executethis": "addwidmaster",
        "wid": "color2",
        "hue": "blue"
    }, "", "");
    executetest("executethis", {
        "executethis": "getwidmaster",
        "wid": "color1"
    }, "get_color1_result", "");
}


exports.testppp = testppp = function testppp() {
    testclearstorage();
    executetest("executethis", {
        "executethis": "addwidmaster",
        "wid": "colordto",
        "metadata.method": "colordto",
        "hue": "string"
    }, "", "");
    executetest("executethis", {
        "executethis": "addwidmaster",
        "wid": "color1",
        "metadata.method": "colordto",
        "hue": "red"
    }, "", "");
    executetest("executethis", {
        "executethis": "getwidmaster",
        "wid": "color1"
    }, "get_color1_result", "");
}

exports.testggg = testggg = function testggg() {
    testclearstorage();
    executetest("addwidmaster", {
        "wid": "defaultforauthor",
        "name": "roger"
    });
}



function setdtoforwid() {
    return {
        "command.convertmethod": ""
    }
}

function setdtoforjson() {
    return {
        "command.convertmethod": "json"
    }
}

exports.test111 = test111 = function test111() {
    testclearstorage();
    executetest("addwidmaster", {
        "wid": "defaultforauthor",
        "name": "roger"
    });
}



exports.addi = addi = function addi() {
    testclearstorage();
    //executetest("debugon");
    executetest("addwidmaster", {
        "metadata.method": "actiondto",
        "wid": "actiondto",
        "action": "string"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "palettedto",
        "wid": "palettedto",
        "widname": "string",
        "category": "string",
        "subcategory": "string"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "addfield",
        "wid": "addfield",
        "fieldname": "string",
        "editable": "string",
        "display": "string",
        "oneditactions": "string",
        "addfielddefault": "inherit"
    }, "", "");


    //gojs object
    executetest("addwidmaster", {
        "metadata.method": "gojsobject",
        "wid": "gojsobject",
        "class": "string",
        "linkFromPortIdProperty": "string",
        "linkToPortIdProperty": "string",
        "nodeDataArray": "onetomany",
        "linkDataArray": "onetomany"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "nodeDataArray",
        "wid": "nodeDataArray",
        "key": "string",
        "loc": "string",
        "leftArray": "onetomany",
        "topArray": "onetomany",
        "bottomArray": "onetomany",
        "rightArray": "onetomany"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "leftArray",
        "wid": "leftArray",
        "class": "string",
        "portColor": "string",
        "portId": "string"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "topArray",
        "wid": "topArray",
        "class": "string",
        "portColor": "string",
        "portId": "string"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "bottomArray",
        "wid": "bottomArray",
        "portColor": "string",
        "portId": "string"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "rightArray",
        "wid": "rightArray",
        "portColor": "string",
        "portId": "string"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "linkDataArray",
        "wid": "linkDataArray",
        "from": "string",
        "to": "string",
        "fromPort": "string",
        "toPort": "string"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "gojsrel1",
        "wid": "gojsrel1",
        "primarywid": "gojsobject",
        "secondarywid": "nodedataarray",
        "relationshiptype": "attributes",
        "metadata.method": "relationshipdto"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "gojsrel2",
        "wid": "gojsrel2",
        "class": "string",
        "primarywid": "gojsobject",
        "secondarywid": "linkdataarray",
        "relationshiptype": "attributes",
        "metadata.method": "relationshipdto"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "gojsrel3",
        "wid": "gojsrel3",
        "primarywid": "nodedataarray",
        "secondarywid": "leftarray",
        "relationshiptype": "attributes",
        "metadata.method": "relationshipdto"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "gojsrel4",
        "wid": "gojsrel4",
        "primarywid": "nodedataarray",
        "secondarywid": "toparray",
        "relationshiptype": "attributes",
        "metadata.method": "relationshipdto"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "gojsrel5",
        "wid": "gojsrel5",
        "primarywid": "nodedataarray",
        "secondarywid": "bottomarray",
        "relationshiptype": "attributes",
        "metadata.method": "relationshipdto"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "gojsrel6",
        "wid": "gojsrel6",
        "primarywid": "nodedataarray",
        "secondarywid": "rightarray",
        "relationshiptype": "attributes",
        "metadata.method": "relationshipdto"
    }, "", "");
    //end gojs object

    executetest("addwidmaster", {
        "metadata.method": "linkrules",
        "wid": "linkrules",
        "linkclass": "string",
        "min": "string",
        "max": "string"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "adddto",
        "wid": "adddto",
        "actiondto": "onetomany",
        "palettedto": "onetomany",
        "addfield": "onetomany",
        "gojsobject": "onetoone",
        "linkrules": "onetomany"
    }, "", "");
    //create adddto relationships
    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "rel_actiondto_adddto",
        "primarywid": "adddto",
        "secondarywid": "actiondto"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "rel_palettedto_adddto",
        "primarywid": "adddto",
        "secondarywid": "palettedto"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "rel_addfield_adddto",
        "primarywid": "adddto",
        "secondarywid": "addfield"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "rel_gojsobject_adddto",
        "primarywid": "adddto",
        "secondarywid": "gojsobject"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "rel_linkrules_adddto",
        "primarywid": "adddto",
        "secondarywid": "linkrules"
    }, "", "");

    //create book and author dtos
    //sequenceObjList.push({"seq":"seq01","command.action":"add","wid":"booksdto","title":"string","pages":"string","metadata.method":"booksdto"});
    executetest("addwidmaster", {
        "metadata.method": "booksdto",
        "wid": "booksdto",
        "title": "string",
        "pages": "string"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "authordto",
        "name": "string",
        "age": "string",
        "booksdto": "onetomany",
        "adddto": "onetoone"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "relbooktoauthor",
        "primarywid": "authordto",
        "secondarywid": "booksdto"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "reladddtotoauthor",
        "primarywid": "authordto",
        "secondarywid": "adddto"
    }, "", "");

    //create a default addfield record
    executetest("addwidmaster", {
        "wid": "addfielddefault",
        "fieldname": "name",
        "display": "true",
        "editable": "true",
        "onreadactions": "none",
        "oneditactions": "pop_up_alert"
    }, "", "");

    //add some authors and books
    //executetest("debugon");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "startwid",
        "name": "start wid",
        "age": "00",
        "booksdto.title": "none",
        "booksdto.pages": "00"
    }, "", "");
    //executetest("debugoff");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "joe_jamison",
        "name": "Joe Jamison",
        "age": "32",
        "booksdto.title": "Hello World!",
        "booksdto.pages": "40"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "sarah_jones",
        "name": "Sarah Jones",
        "age": "40",
        "booksdto.title": "The Sands of Time",
        "booksdto.pages": "378"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "mike_williams",
        "name": "Mike Williams",
        "age": "36",
        "booksdto.title": "Attack on the Mainframe",
        "booksdto.pages": "600"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "jerry_stone",
        "name": "Jerry Stone",
        "age": "41",
        "booksdto.title": "Carpentry 101",
        "booksdto.pages": "120"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "elizabeth_heart",
        "name": "Elizabeth Heart",
        "age": "50",
        "booksdto.title": "The X Factor",
        "booksdto.pages": "300"
    }, "", "");

    //add system info (adddto info) to those author wids
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "startwid",
        "adddto.actiondto.action": "none",
        "adddto.palettedto.0.widname": "joe_jamison",
        "adddto.palettedto.0.category": "human",
        "adddto.palettedto.0.subcategory": "author",
        "adddto.addfield.fieldname": "name",
        "adddto.linkrules.linkclass": "1",
        "adddto.linkrules.min": "0",
        "adddto.linkrules.max": "10"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "joe_jamison",
        "adddto.actiondto.action": "{'color_screen':'blue'}",
        "adddto.palettedto.0.widname": "joe_jamison",
        "adddto.palettedto.0.category": "human",
        "adddto.palettedto.0.subcategory": "author",
        "adddto.palettedto.1.widname": "jessica_jamison",
        "adddto.palettedto.1.category": "human",
        "adddto.palettedto.1.subcategory": "wife",
        "adddto.palettedto.2.widname": "mary_morris",
        "adddto.palettedto.2.category": "human",
        "adddto.palettedto.2.subcategory": "sister",
        "adddto.addfield.fieldname": "name",
        "adddto.linkrules.linkclass": "1",
        "adddto.linkrules.min": "0",
        "adddto.linkrules.max": "10"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "sarah_jones",
        "adddto.actiondto.action": "{'color_screen':'red'}",
        "adddto.palettedto.0.widname": "sarah_jones",
        "adddto.palettedto.0.category": "human",
        "adddto.palettedto.0.subcategory": "author",
        "adddto.palettedto.1.widname": "james_jones",
        "adddto.palettedto.1.category": "human",
        "adddto.palettedto.1.subcategory": "husband",
        "adddto.addfield.fieldname": "name",
        "adddto.linkrules.linkclass": "1",
        "adddto.linkrules.min": "0",
        "adddto.linkrules.max": "10"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "mike_williams",
        "adddto.actiondto.action": "none",
        "adddto.palettedto.0.widname": "mike_williams",
        "adddto.palettedto.0.category": "human",
        "adddto.palettedto.0.subcategory": "author",
        "adddto.palettedto.1.widname": "mister_scruffy",
        "adddto.palettedto.1.category": "pet",
        "adddto.palettedto.1.subcategory": "dog",
        "adddto.palettedto.2.widname": "misses_fluffy",
        "adddto.palettedto.2.category": "pet",
        "adddto.palettedto.2.subcategory": "cat",
        "adddto.addfield.fieldname": "name",
        "adddto.linkrules.linkclass": "1",
        "adddto.linkrules.min": "0",
        "adddto.linkrules.max": "10"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "jerry_stone",
        "adddto.actiondto.action": "none",
        "adddto.palettedto.0.widname": "jerry_stone",
        "adddto.palettedto.0.category": "human",
        "adddto.palettedto.0.subcategory": "author",
        "adddto.palettedto.1.widname": "lynne_stone",
        "adddto.palettedto.1.category": "human",
        "adddto.palettedto.1.subcategory": "wife",
        "adddto.addfield.fieldname": "name",
        "adddto.linkrules.linkclass": "1",
        "adddto.linkrules.min": "0",
        "adddto.linkrules.max": "10"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "elizabeth_heart",
        "adddto.actiondto.action": "{'play_sound':'trumpet.ogg'}",
        "adddto.palettedto.0.widname": "elizabeth_heart",
        "adddto.palettedto.0.category": "human",
        "adddto.palettedto.0.subcategory": "author",
        "adddto.addfield.fieldname": "name",
        "adddto.linkrules.linkclass": "1",
        "adddto.linkrules.min": "0",
        "adddto.linkrules.max": "10"
    }, "", "");



    //executetest("debugon")
    executetest("getwidmaster", {
        "wid": "startwid"
    }, "startwid_get_result", "");
    logverify("readstartwid", "resultwid", "startwid_get_result", "", "", {
        "age": "00",
        "name": "start wid",
        "wid": "startwid",
        "metadata.method": "authordto",
        "booksdto.0.metadata.method": "booksdto",
        "booksdto.0.wid": "1",
        "booksdto.0.title": "none",
        "booksdto.0.pages": "00",
        "adddto.0.metadata.method": "adddto",
        "adddto.0.wid": "13",
        "adddto.0.actiondto.0.metadata.method": "actiondto",
        "adddto.0.actiondto.0.wid": "14",
        "adddto.0.actiondto.0.action": "none",
        "adddto.0.palettedto.0.metadata.method": "palettedto",
        "adddto.0.palettedto.0.wid": "16",
        "adddto.0.palettedto.0.widname": "joe_jamison",
        "adddto.0.palettedto.0.category": "human",
        "adddto.0.palettedto.0.subcategory": "author",
        "adddto.0.addfield.0.metadata.method": "addfield",
        "adddto.0.addfield.0.wid": "18",
        "adddto.0.addfield.0.fieldname": "name",
        "adddto.0.linkrules.0.metadata.method": "linkrules",
        "adddto.0.linkrules.0.wid": "20",
        "adddto.0.linkrules.0.linkclass": "1",
        "adddto.0.linkrules.0.min": "0",
        "adddto.0.linkrules.0.max": "10",
        "adddto.addfield.fieldname": "name",
        "adddto.addfield.display": "true",
        "adddto.addfield.editable": "true",
        "adddto.addfield.onreadactions": "none",
        "adddto.addfield.oneditactions": "pop_up_alert",
        "adddto.addfield.wid": "addfielddefault",
        "adddto.addfield.metadata.method": "defaultdto"
    });
    //                                                               {"metadata.method":"authordto","wid":"startwid","name":"start wid","age":"00","booksdto.0.title":"none","booksdto.0.pages":"00","booksdto.0.metadata.method":"booksdto","booksdto.0.wid":"1","adddto.0.metadata.method":"adddto","adddto.0.wid":"13","adddto.0.actiondto.0.action":"none","adddto.0.actiondto.0.metadata.method":"actiondto","adddto.0.actiondto.0.wid":"14","adddto.0.palettedto.0.widname":"joe_jamison","adddto.0.palettedto.0.category":"human","adddto.0.palettedto.0.subcategory":"author","adddto.0.palettedto.0.metadata.method":"palettedto","adddto.0.palettedto.0.wid":"16","adddto.0.addfield.0.fieldname":"name","adddto.0.addfield.0.metadata.method":"addfield","adddto.0.addfield.0.wid":"18","adddto.0.addfield.0..method":"defaultdto","adddto.0.linkrules.0.linkclass":"1","adddto.0.linkrules.0.min":"0","adddto.0.linkrules.0.max":"10","adddto.0.linkrules.0.metadata.method":"linkrules","adddto.0.linkrules.0.wid":"20"}

    verifysummary("resultwid");

    //executetest("debugon");
    executetest("getwidmaster", {
        "wid": "startwid",
        "command.dtotype": "authordto"
    }, "startwid_authordto", "");
    executetest("getwidmaster", {
        "wid": "startwid",
        "command.dtotype": "booksdto",
        "command.convertmethod": "dtonum"
    }, "startwid_dtonum_bookdto", "");
    executetest("getwidmaster", {
        "wid": "startwid",
        "command.dtotype": "booksdto",
        "command.convertmethod": "num"
    }, "startwid_num_`bookdto", "");
    executetest("getwidmaster", {
        "wid": "startwid",
        "command.dtotype": "booksdto"
    }, "startwid_bookdto", "");
    executetest("getwidmaster", {
        "wid": "startwid",
        "command.dtotype": "palettedto"
    }, "startwid_palettedto", "");
    executetest("getwidmaster", {
        "wid": "startwid",
        "command.dtotype": "adddto"
    }, "startwid_adddto", "");
    executetest("getwidmaster", {
        "wid": "startwid",
        "command.dtotype": "addfield"
    }, "startwid_addfield", "");
    executetest("getwidmaster", {
        "wid": "startwid",
        "command.dtotype": "actiondto"
    }, "startwid_actiondto", "");
    executetest("getwidmaster", {
        "wid": "startwid",
        "command.dtotype": "linkrules"
    }, "startwid_linkrules", "");
    executetest("getwidmaster", {
        "wid": "startwid",
        "command.dtotype": "gojsobject"
    }, "startwid_gojsobject", "");
    executetest("getwidmaster", {
        "wid": "startwid",
        "command.dtotype": "nodeDataArray"
    }, "startwid_nodeDataArray", "");
    executetest("getwidmaster", {
        "wid": "startwid",
        "command.dtotype": "linkDataArray"
    }, "startwid_linkdataarray", "");
    executetest("getwidmaster", {
        "wid": "startwid",
        "command.dtotype": "leftarray"
    }, "startwid_leftarray", "");
    executetest("getwidmaster", {
        "wid": "startwid",
        "command.dtotype": "rightarray"
    }, "startwid_rightarray", "");
    executetest("getwidmaster", {
        "wid": "startwid",
        "command.dtotype": "bottomarray"
    }, "startwid_bottomarray", "");
    executetest("getwidmaster", {
        "wid": "startwid",
        "command.dtotype": "toparray"
    }, "startwid_toparray", "");
    executeobject = {};
    executeobject["ExecuteThis"] = "getwidmaster";
    executeobject["command.dtotype"] = "palettedto";
    executeobject["command.convertmethod"] = "dtonum";
    executeobject["wid"] = "sarah_jones";
    resultobject = execute(executeobject);
    proxyprinttodiv('result from execute', resultobject, true);


    //executetest("debugoff");
    // Make sure the local storage is displayed
    displayAllWids();
    $('#divwidsdisplay').show('slow');

    /*
    //get the new record
    sequenceObjList.push({"seq":"seq01","command.action":"debugon"});
    sequenceObjList.push({"seq":"seq01","command.action":"get","metadata.method":"authordto","wid":"startwid"});
    sequenceObjList.push({"seq":"seq01","command.action":"debugoff"});
    */
}

exports.addnewi = addnewi = function addnewi() {
    testclearstorage();
    //gojs object
    //create book and author dtos
    executetest("executethis", {
        "addthis": "defaultaction",
        "metadata.method": "actiondto",
        "actiondto.0.displayname": "Open As Wid",
        "actiondto.0.preexecute": "setdtoforwid",
        "actiondto.0.executethis": "getwidmaster",
        "actiondto.1.displayname": "Open As json",
        "actiondto.0.preexecute": "setdtoforjson",
        "actiondto.1.executethis": "getwidmaster"
    }, "", "");
    executetest("addwidmaster", {
        "wid": "addfielddefault",
        "fieldname": "name",
        "display": "true",
        "editable": "true",
        "onreadactions": "none",
        "oneditactions": "pop_up_alert"
    }, "", "");
    executetest("executethis", {
        "addthis": "defaultrightclick",
        "metadata.method": "rightclickdto",
        "rightclickdto.0.displayname": "Open As Wid",
        "rightclickdto.0.preexecute": "setdtoforwid",
        "rightclickdto.0.executethis": "getwidmaster",
        "rightclickdto.1.displayname": "Open As json",
        "rightclickdto.0.preexecute": "setdtoforjson",
        "rightclickdto.1.executethis": "getwidmaster"
    }, "", "");

    //sequenceObjList.push({"seq":"seq01","command.action":"add","wid":"booksdto","title":"string","pages":"string","metadata.method":"booksdto"});
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "authordto",
        "name": "string",
        "age": "string",
        "booksdto": "onetomany",
        "adddto": "onetoone"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "booksdto",
        "wid": "booksdto",
        "title": "string",
        "pages": "string"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "adddto",
        "wid": "adddto",
        "actiondto": "onetomany",
        "palettedto": "onetomany",
        "addfield": "onetomany",
        "gojsobject": "onetoone",
        "linkrules": "onetomany"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "palettedto",
        "wid": "palettedto",
        "widname": "string",
        "category": "string",
        "subcategory": "string"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "addfield",
        "wid": "addfield",
        "fieldname": "string",
        "editable": "string",
        "display": "string",
        "oneditactions": "string",
        "addfielddefault": "inherit"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "gojsobject",
        "wid": "gojsobject",
        "class": "string",
        "linkFromPortIdProperty": "string",
        "linkToPortIdProperty": "string",
        "nodeDataArray": "onetomany",
        "linkDataArray": "onetomany"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "nodeDataArray",
        "wid": "nodeDataArray",
        "key": "string",
        "loc": "string",
        "leftArray": "onetomany",
        "topArray": "onetomany",
        "bottomArray": "onetomany",
        "rightArray": "onetomany"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "leftArray",
        "wid": "leftArray",
        "class": "string",
        "portColor": "string",
        "portId": "string"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "topArray",
        "wid": "topArray",
        "class": "string",
        "portColor": "string",
        "portId": "string"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "bottomArray",
        "wid": "bottomArray",
        "portColor": "string",
        "portId": "string"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "rightArray",
        "wid": "rightArray",
        "portColor": "string",
        "portId": "string"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "linkDataArray",
        "wid": "linkDataArray",
        "from": "string",
        "to": "string",
        "fromPort": "string",
        "toPort": "string"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "linkrules",
        "wid": "linkrules",
        "linkclass": "string",
        "min": "string",
        "max": "string"
    }, "", "");
    executetest("executethis", {
        "addthis": "actiondto",
        "metadata.method": "actiondto",
        "displayname": "string",
        "actiondescription": "string",
        "category": "string",
        "subcategory": "string",
        "preexecute": "string",
        "executethis": "string",
        "postexecute": "string",
        "defaultaction": "inherit"
    }, "", "");
    executetest("executethis", {
        "addthis": "rightclickdto",
        "metadata.method": "rightclickdto",
        "displayname": "string",
        "actiondescription": "string",
        "category": "string",
        "subcategory": "string",
        "preexecute": "string",
        "executethis": "string",
        "postexecute": "string",
        "defaultrightclick": "inherit"
    }, "", "");

    //executetest("addwidmaster",{"metadata.method":"actiondto","wid":"rel_actiondto_adddto","primarywid":"adddto","secondarywid":"actiondto","relationshiptype":"attributes"}, "", "");
    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "relbooktoauthor",
        "primarywid": "authordto",
        "secondarywid": "booksdto"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "reladddtotoauthor",
        "primarywid": "authordto",
        "secondarywid": "adddto"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "gojsrel1",
        "primarywid": "gojsobject",
        "secondarywid": "nodedataarray",
        "relationshiptype": "attributes",
        "metadata.method": "relationshipdto"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "gojsrel2",
        "primarywid": "gojsobject",
        "secondarywid": "linkdataarray",
        "relationshiptype": "attributes",
        "metadata.method": "relationshipdto"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "gojsrel3",
        "primarywid": "nodedataarray",
        "secondarywid": "leftarray",
        "relationshiptype": "attributes",
        "metadata.method": "relationshipdto"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "gojsrel4",
        "primarywid": "nodedataarray",
        "secondarywid": "toparray",
        "relationshiptype": "attributes",
        "metadata.method": "relationshipdto"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "gojsrel5",
        "primarywid": "nodedataarray",
        "secondarywid": "bottomarray",
        "relationshiptype": "attributes",
        "metadata.method": "relationshipdto"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "gojsrel6",
        "primarywid": "nodedataarray",
        "secondarywid": "rightarray",
        "relationshiptype": "attributes",
        "metadata.method": "relationshipdto"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "rel_actiondto_adddto",
        "primarywid": "adddto",
        "secondarywid": "actiondto"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "rel_palettedto_adddto",
        "primarywid": "adddto",
        "secondarywid": "palettedto"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "rel_addfield_adddto",
        "primarywid": "adddto",
        "secondarywid": "addfield"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "rel_gojsobject_adddto",
        "primarywid": "adddto",
        "secondarywid": "gojsobject"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "rel_linkrules_adddto",
        "primarywid": "adddto",
        "secondarywid": "linkrules"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "rel_rightclickdto_adddto",
        "primarywid": "adddto",
        "secondarywid": "rightclickdto",
        "relationshiptype": "attributes"
    }, "", "");

    //create a default addfield record



    //add some authors and books
    //executetest("debugon"); -- note next line makes it not work
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "startwid",
        "name": "start wid",
        "age": "00",
        "booksdto.title": "none",
        "booksdto.pages": "00"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "joe_jamison",
        "name": "Joe Jamison",
        "age": "32",
        "booksdto.title": "Hello World!",
        "booksdto.pages": "40"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "sarah_jones",
        "name": "Sarah Jones",
        "age": "40",
        "booksdto.title": "The Sands of Time",
        "booksdto.pages": "378"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "mike_williams",
        "name": "Mike Williams",
        "age": "36",
        "booksdto.title": "Attack on the Mainframe",
        "booksdto.pages": "600"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "jerry_stone",
        "name": "Jerry Stone",
        "age": "41",
        "booksdto.title": "Carpentry 101",
        "booksdto.pages": "120"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "elizabeth_heart",
        "name": "Elizabeth Heart",
        "age": "50",
        "booksdto.title": "The X Factor",
        "booksdto.pages": "300"
    }, "", "");

    //add system info (adddto info) to those author wids
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "startwid",
        "adddto.actiondto.action": "none",
        "adddto.palettedto.0.widname": "joe_jamison",
        "adddto.palettedto.0.category": "human",
        "adddto.palettedto.0.subcategory": "author",
        "adddto.addfield.fieldname": "name",
        "adddto.linkrules.linkclass": "1",
        "adddto.linkrules.min": "0",
        "adddto.linkrules.max": "10"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "joe_jamison",
        "adddto.actiondto.action": "{'color_screen':'blue'}",
        "adddto.palettedto.0.widname": "joe_jamison",
        "adddto.palettedto.0.category": "human",
        "adddto.palettedto.0.subcategory": "author",
        "adddto.palettedto.1.widname": "jessica_jamison",
        "adddto.palettedto.1.category": "human",
        "adddto.palettedto.1.subcategory": "wife",
        "adddto.palettedto.2.widname": "mary_morris",
        "adddto.palettedto.2.category": "human",
        "adddto.palettedto.2.subcategory": "sister",
        "adddto.addfield.fieldname": "name",
        "adddto.linkrules.linkclass": "1",
        "adddto.linkrules.min": "0",
        "adddto.linkrules.max": "10"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "sarah_jones",
        "adddto.actiondto.action": "{'color_screen':'red'}",
        "adddto.palettedto.0.widname": "sarah_jones",
        "adddto.palettedto.0.category": "human",
        "adddto.palettedto.0.subcategory": "author",
        "adddto.palettedto.1.widname": "james_jones",
        "adddto.palettedto.1.category": "human",
        "adddto.palettedto.1.subcategory": "husband",
        "adddto.addfield.fieldname": "name",
        "adddto.linkrules.linkclass": "1",
        "adddto.linkrules.min": "0",
        "adddto.linkrules.max": "10"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "mike_williams",
        "adddto.actiondto.action": "none",
        "adddto.palettedto.0.widname": "mike_williams",
        "adddto.palettedto.0.category": "human",
        "adddto.palettedto.0.subcategory": "author",
        "adddto.palettedto.1.widname": "mister_scruffy",
        "adddto.palettedto.1.category": "pet",
        "adddto.palettedto.1.subcategory": "dog",
        "adddto.palettedto.2.widname": "misses_fluffy",
        "adddto.palettedto.2.category": "pet",
        "adddto.palettedto.2.subcategory": "cat",
        "adddto.addfield.fieldname": "name",
        "adddto.linkrules.linkclass": "1",
        "adddto.linkrules.min": "0",
        "adddto.linkrules.max": "10"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "jerry_stone",
        "adddto.actiondto.action": "none",
        "adddto.palettedto.0.widname": "jerry_stone",
        "adddto.palettedto.0.category": "human",
        "adddto.palettedto.0.subcategory": "author",
        "adddto.palettedto.1.widname": "lynne_stone",
        "adddto.palettedto.1.category": "human",
        "adddto.palettedto.1.subcategory": "wife",
        "adddto.addfield.fieldname": "name",
        "adddto.linkrules.linkclass": "1",
        "adddto.linkrules.min": "0",
        "adddto.linkrules.max": "10"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "elizabeth_heart",
        "adddto.actiondto.action": "{'play_sound':'trumpet.ogg'}",
        "adddto.palettedto.0.widname": "elizabeth_heart",
        "adddto.palettedto.0.category": "human",
        "adddto.palettedto.0.subcategory": "author",
        "adddto.addfield.fieldname": "name",
        "adddto.linkrules.linkclass": "1",
        "adddto.linkrules.min": "0",
        "adddto.linkrules.max": "10"
    }, "", "");

}

exports.roger = roger = function roger() {
    testclearstorage;
    executetest("debugon");
    executeobject = {};
    executeobject["widInput"] = "wid";
    executeobject["mongorelationshiptype"] = "attributes";
    executeobject["mongorelationshipmethod"] = "all";
    executeobject["mongorelationshipdirection"] = "xforward";
    executeobject["mongowidmethod"] = "";
    executeobject["convertmethod"] = "";
    executeobject["dtotype"] = "";
    proxyprinttodiv('Function roger()  executeobject III', executeobject);
    result = simpleQuery(executeobject);
    executetest("debugoff");
}

exports.adda = adda = function adda() {
    testclearstorage();
    executetest("debugon");
    executetest("addwidmaster", {
        "wid": "defaultforauthor",
        "first": "roger"
    });
    executetest("addwidmaster", {
        "wid": "authordto1",
        "first": "string",
        "last": "string",
        "age": "string",
        "metadata.method": "authordto1",
        "defaultforauthor": "inherit",
        "booksdto1": "onetomany"
    });
    executetest("addwidmaster", {
        "wid": "booksdto1",
        "name": "string",
        "ISBN": "string",
        "publisher": "string",
        "metadata.method": "booksdto1",
        "defaultforbook": "inherit"
    });
    executetest("addwidmaster", {
        "wid": "rel1",
        "primarywid": "authordto1",
        "secondarywid": "booksdto1",
        "relationshiptype": "attributes",
        "metadata.method": "relationshipdto"
    });
    executetest("getwidmaster", {
        "wid": "authordto1",
        "command.convertmethod": "dto"
    });
    executetest("debugoff");
}

exports.addb = addb = function addb() {
    testclearstorage();
    executetest("addwidmaster", {
        "wid": "defaultforauthor",
        "name": "roger"
    });

    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "authordto",
        "name": "string",
        "age": "string",
        "booksdto": "onetomany",
        "adddto": "onetoone",
        "defaultforauthor": "inherit"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "booksdto",
        "wid": "booksdto",
        "title": "string",
        "pages": "string"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "adddto",
        "wid": "adddto",
        "actiondto": "onetomany",
        "palettedto": "onetomany",
        "addfield": "onetomany"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "actiondto",
        "wid": "actiondto",
        "action": "string"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "palettedto",
        "wid": "palettedto",
        "widname": "string",
        "category": "string",
        "subcategory": "string"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "addfield",
        "wid": "addfield",
        "fieldname": "string",
        "editable": "string",
        "display": "string",
        "oneditactions": "string",
        "addfielddefault": "inherit"
    }, "", "");

    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "relbooktoauthor",
        "primarywid": "authordto",
        "secondarywid": "booksdto"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "reladddtotoauthor",
        "primarywid": "authordto",
        "secondarywid": "adddto"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "rel_actiondto_adddto",
        "primarywid": "adddto",
        "secondarywid": "actiondto"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "rel_palettedto_adddto",
        "primarywid": "adddto",
        "secondarywid": "palettedto"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "rel_addfield_adddto",
        "primarywid": "adddto",
        "secondarywid": "addfield"
    }, "", "");

    executetest("debugon");
    executetest("getwidmaster", {
        "wid": "authordto",
        "command.convertmethod": "dto"
    });
    executetest("debugoff");
}

exports.addc = addc = function addc() {
    testclearstorage();
    executetest("addwidmaster", {
        "wid": "defaultforauthor",
        "name": "roger"
    });

    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "authordto",
        "name": "string",
        "age": "string",
        "booksdto": "onetomany",
        "adddto": "onetoone",
        "defaultforauthor": "inherit"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "booksdto",
        "wid": "booksdto",
        "title": "string",
        "pages": "string"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "adddto",
        "wid": "adddto",
        "actiondto": "onetomany",
        "palettedto": "onetomany",
        "addfield": "onetomany"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "actiondto",
        "wid": "actiondto",
        "action": "string"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "palettedto",
        "wid": "palettedto",
        "widname": "string",
        "category": "string",
        "subcategory": "string"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "addfield",
        "wid": "addfield",
        "fieldname": "string",
        "editable": "string",
        "display": "string",
        "oneditactions": "string",
        "addfielddefault": "inherit"
    }, "", "");

    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "relbooktoauthor",
        "primarywid": "authordto",
        "secondarywid": "booksdto"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "reladddtotoauthor",
        "primarywid": "authordto",
        "secondarywid": "adddto"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "rel_actiondto_adddto",
        "primarywid": "adddto",
        "secondarywid": "actiondto"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "rel_palettedto_adddto",
        "primarywid": "adddto",
        "secondarywid": "palettedto"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "rel_addfield_adddto",
        "primarywid": "adddto",
        "secondarywid": "addfield"
    }, "", "");

    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "startwid",
        "age": "00",
        "booksdto.title": "none",
        "booksdto.pages": "00"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "startwid",
        "adddto.actiondto.action": "none",
        "adddto.palettedto.0.widname": "joe_jamison",
        "adddto.palettedto.0.category": "human",
        "adddto.palettedto.0.subcategory": "author",
        "adddto.addfield.fieldname": "name",
        "adddto.linkrules.linkclass": "1",
        "adddto.linkrules.min": "0",
        "adddto.linkrules.max": "10"
    }, "", "");

    //executetest("debugon");
    executetest("getwidmaster", {
        "wid": "startwid"
    }, "resultstart");
    executetest("debugoff");
}


exports.addd = addd = function addd() {
    testclearstorage();
    executetest("addwidmaster", {
        "wid": "defaultforauthor",
        "name": "roger"
    });

    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "authordto",
        "name": "string",
        "age": "string",
        "booksdto": "onetomany",
        "adddto": "onetoone",
        "defaultforauthor": "inherit"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "booksdto",
        "wid": "booksdto",
        "title": "string",
        "pages": "string"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "adddto",
        "wid": "adddto",
        "actiondto": "onetomany",
        "palettedto": "onetomany",
        "addfield": "onetomany"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "actiondto",
        "wid": "actiondto",
        "action": "string"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "palettedto",
        "wid": "palettedto",
        "widname": "string",
        "category": "string",
        "subcategory": "string"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "addfield",
        "wid": "addfield",
        "fieldname": "string",
        "editable": "string",
        "display": "string",
        "oneditactions": "string",
        "addfielddefault": "inherit"
    }, "", "");

    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "relbooktoauthor",
        "primarywid": "authordto",
        "secondarywid": "booksdto"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "reladddtotoauthor",
        "primarywid": "authordto",
        "secondarywid": "adddto"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "rel_actiondto_adddto",
        "primarywid": "adddto",
        "secondarywid": "actiondto"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "rel_palettedto_adddto",
        "primarywid": "adddto",
        "secondarywid": "palettedto"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "rel_addfield_adddto",
        "primarywid": "adddto",
        "secondarywid": "addfield"
    }, "", "");

    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "startwid",
        "name": "start wid",
        "age": "00",
        "booksdto.title": "none",
        "booksdto.pages": "00"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "joe_jamison",
        "name": "Joe Jamison",
        "age": "32",
        "booksdto.title": "Hello World!",
        "booksdto.pages": "40"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "sarah_jones",
        "name": "Sarah Jones",
        "age": "40",
        "booksdto.title": "The Sands of Time",
        "booksdto.pages": "378"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "mike_williams",
        "name": "Mike Williams",
        "age": "36",
        "booksdto.title": "Attack on the Mainframe",
        "booksdto.pages": "600"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "jerry_stone",
        "name": "Jerry Stone",
        "age": "41",
        "booksdto.title": "Carpentry 101",
        "booksdto.pages": "120"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "elizabeth_heart",
        "name": "Elizabeth Heart",
        "age": "50",
        "booksdto.title": "The X Factor",
        "booksdto.pages": "300"
    }, "", "");

    //add system info (adddto info) to those author wids
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "startwid",
        "adddto.actiondto.action": "none",
        "adddto.palettedto.0.widname": "joe_jamison",
        "adddto.palettedto.0.category": "human",
        "adddto.palettedto.0.subcategory": "author",
        "adddto.addfield.fieldname": "name",
        "adddto.linkrules.linkclass": "1",
        "adddto.linkrules.min": "0",
        "adddto.linkrules.max": "10"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "joe_jamison",
        "adddto.actiondto.action": "{'color_screen':'blue'}",
        "adddto.palettedto.0.widname": "joe_jamison",
        "adddto.palettedto.0.category": "human",
        "adddto.palettedto.0.subcategory": "author",
        "adddto.palettedto.1.widname": "jessica_jamison",
        "adddto.palettedto.1.category": "human",
        "adddto.palettedto.1.subcategory": "wife",
        "adddto.palettedto.2.widname": "mary_morris",
        "adddto.palettedto.2.category": "human",
        "adddto.palettedto.2.subcategory": "sister",
        "adddto.addfield.fieldname": "name",
        "adddto.linkrules.linkclass": "1",
        "adddto.linkrules.min": "0",
        "adddto.linkrules.max": "10"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "sarah_jones",
        "adddto.actiondto.action": "{'color_screen':'red'}",
        "adddto.palettedto.0.widname": "sarah_jones",
        "adddto.palettedto.0.category": "human",
        "adddto.palettedto.0.subcategory": "author",
        "adddto.palettedto.1.widname": "james_jones",
        "adddto.palettedto.1.category": "human",
        "adddto.palettedto.1.subcategory": "husband",
        "adddto.addfield.fieldname": "name",
        "adddto.linkrules.linkclass": "1",
        "adddto.linkrules.min": "0",
        "adddto.linkrules.max": "10"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "mike_williams",
        "adddto.actiondto.action": "none",
        "adddto.palettedto.0.widname": "mike_williams",
        "adddto.palettedto.0.category": "human",
        "adddto.palettedto.0.subcategory": "author",
        "adddto.palettedto.1.widname": "mister_scruffy",
        "adddto.palettedto.1.category": "pet",
        "adddto.palettedto.1.subcategory": "dog",
        "adddto.palettedto.2.widname": "misses_fluffy",
        "adddto.palettedto.2.category": "pet",
        "adddto.palettedto.2.subcategory": "cat",
        "adddto.addfield.fieldname": "name",
        "adddto.linkrules.linkclass": "1",
        "adddto.linkrules.min": "0",
        "adddto.linkrules.max": "10"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "jerry_stone",
        "adddto.actiondto.action": "none",
        "adddto.palettedto.0.widname": "jerry_stone",
        "adddto.palettedto.0.category": "human",
        "adddto.palettedto.0.subcategory": "author",
        "adddto.palettedto.1.widname": "lynne_stone",
        "adddto.palettedto.1.category": "human",
        "adddto.palettedto.1.subcategory": "wife",
        "adddto.addfield.fieldname": "name",
        "adddto.linkrules.linkclass": "1",
        "adddto.linkrules.min": "0",
        "adddto.linkrules.max": "10"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "elizabeth_heart",
        "adddto.actiondto.action": "{'play_sound':'trumpet.ogg'}",
        "adddto.palettedto.0.widname": "elizabeth_heart",
        "adddto.palettedto.0.category": "human",
        "adddto.palettedto.0.subcategory": "author",
        "adddto.addfield.fieldname": "name",
        "adddto.linkrules.linkclass": "1",
        "adddto.linkrules.min": "0",
        "adddto.linkrules.max": "10"
    }, "", "");

    executetest("debugon");
    executetest("getwidmaster", {
        "wid": "startwid"
    });
    executetest("debugoff");
}

exports.adde = adde = function adde() {

    //executetest("debugon");
    testclearstorage();
    executetest("addwidmaster", {
        "metadata.method": "actiondto",
        "wid": "actiondto",
        "action": "string"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "palettedto",
        "wid": "palettedto",
        "widname": "string",
        "category": "string",
        "subcategory": "string"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "addfield",
        "wid": "addfield",
        "fieldname": "string",
        "editable": "string",
        "display": "string",
        "oneditactions": "string",
        "addfielddefault": "inherit"
    }, "", "");


    //gojs object
    executetest("addwidmaster", {
        "metadata.method": "gojsobject",
        "wid": "gojsobject",
        "class": "string",
        "linkFromPortIdProperty": "string",
        "linkToPortIdProperty": "string",
        "nodeDataArray": "onetomany",
        "linkDataArray": "onetomany"
    }, "", "");

    executetest("addwidmaster", {
        "metadata.method": "nodeDataArray",
        "wid": "nodeDataArray",
        "key": "string",
        "loc": "string",
        "leftArray": "onetomany",
        "topArray": "onetomany",
        "bottomArray": "onetomany",
        "rightArray": "onetomany"
    }, "", "");

    executetest("addwidmaster", {
        "metadata.method": "leftArray",
        "wid": "leftArray",
        "class": "string",
        "portColor": "string",
        "portId": "string"
    }, "", "");

    executetest("addwidmaster", {
        "metadata.method": "topArray",
        "wid": "topArray",
        "class": "string",
        "portColor": "string",
        "portId": "string"
    }, "", "");

    executetest("addwidmaster", {
        "metadata.method": "bottomArray",
        "wid": "bottomArray",
        "portColor": "string",
        "portId": "string"
    }, "", "");

    executetest("addwidmaster", {
        "metadata.method": "rightArray",
        "wid": "rightArray",
        "portColor": "string",
        "portId": "string"
    }, "", "");

    executetest("addwidmaster", {
        "metadata.method": "linkDataArray",
        "wid": "linkDataArray",
        "from": "string",
        "to": "string",
        "fromPort": "string",
        "toPort": "string"
    }, "", "");

    executetest("addwidmaster", {
        "metadata.method": "gojsrel1",
        "wid": "gojsrel1",
        "primarywid": "gojsobject",
        "secondarywid": "nodedataarray",
        "relationshiptype": "attributes",
        "metadata.method": "relationshipdto"
    }, "", "");

    executetest("addwidmaster", {
        "metadata.method": "gojsrel2",
        "wid": "gojsrel2",
        "class": "string",
        "primarywid": "gojsobject",
        "secondarywid": "linkdataarray",
        "relationshiptype": "attributes",
        "metadata.method": "relationshipdto"
    }, "", "");

    executetest("addwidmaster", {
        "metadata.method": "gojsrel3",
        "wid": "gojsrel3",
        "primarywid": "nodedataarray",
        "secondarywid": "leftarray",
        "relationshiptype": "attributes",
        "metadata.method": "relationshipdto"
    }, "", "");

    executetest("addwidmaster", {
        "metadata.method": "gojsrel4",
        "wid": "gojsrel4",
        "primarywid": "nodedataarray",
        "secondarywid": "toparray",
        "relationshiptype": "attributes",
        "metadata.method": "relationshipdto"
    }, "", "");

    executetest("addwidmaster", {
        "metadata.method": "gojsrel5",
        "wid": "gojsrel5",
        "primarywid": "nodedataarray",
        "secondarywid": "bottomarray",
        "relationshiptype": "attributes",
        "metadata.method": "relationshipdto"
    }, "", "");

    executetest("addwidmaster", {
        "metadata.method": "gojsrel6",
        "wid": "gojsrel6",
        "primarywid": "nodedataarray",
        "secondarywid": "rightarray",
        "relationshiptype": "attributes",
        "metadata.method": "relationshipdto"
    }, "", "");

    //end gojs object


    executetest("addwidmaster", {
        "metadata.method": "linkrules",
        "wid": "linkrules",
        "linkclass": "string",
        "min": "string",
        "max": "string"
    }, "", "");

    executetest("addwidmaster", {
        "metadata.method": "adddto",
        "wid": "adddto",
        "actiondto": "onetomany",
        "palettedto": "onetomany",
        "addfield": "onetomany",
        "gojsobject": "onetoone",
        "linkrules": "onetomany"
    }, "", "");

    //create adddto relationships
    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "rel_actiondto_adddto",
        "primarywid": "adddto",
        "secondarywid": "actiondto"
    }, "", "");

    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "rel_palettedto_adddto",
        "primarywid": "adddto",
        "secondarywid": "palettedto"
    }, "", "");

    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "rel_addfield_adddto",
        "primarywid": "adddto",
        "secondarywid": "addfield"
    }, "", "");

    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "rel_gojsobject_adddto",
        "primarywid": "adddto",
        "secondarywid": "gojsobject"
    }, "", "");

    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "rel_linkrules_adddto",
        "primarywid": "adddto",
        "secondarywid": "linkrules"
    }, "", "");


    //create book and author dtos
    //sequenceObjList.push({"seq":"seq01","command.action":"add","wid":"booksdto","title":"string","pages":"string","metadata.method":"booksdto"});
    executetest("addwidmaster", {
        "metadata.method": "booksdto",
        "wid": "booksdto",
        "title": "string",
        "pages": "string"
    }, "", "");

    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "authordto",
        "name": "string",
        "age": "string",
        "booksdto": "onetomany",
        "adddto": "onetoone"
    }, "", "");

    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "relbooktoauthor",
        "primarywid": "authordto",
        "secondarywid": "booksdto"
    }, "", "");

    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "reladddtotoauthor",
        "primarywid": "authordto",
        "secondarywid": "adddto"
    }, "", "");


    //create a default addfield record
    executetest("addwidmaster", {
        "wid": "addfielddefault",
        "fieldname": "name",
        "display": "true",
        "editable": "true",
        "onreadactions": "none",
        "oneditactions": "pop_up_alert"
    }, "", "");

    //add some authors and books
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "startwid",
        "name": "start wid",
        "age": "00",
        "booksdto.title": "none",
        "booksdto.pages": "00"
    }, "", "");

    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "joe_jamison",
        "name": "Joe Jamison",
        "age": "32",
        "booksdto.title": "Hello World!",
        "booksdto.pages": "40"
    }, "", "");

    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "sarah_jones",
        "name": "Sarah Jones",
        "age": "40",
        "booksdto.title": "The Sands of Time",
        "booksdto.pages": "378"
    }, "", "");

    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "mike_williams",
        "name": "Mike Williams",
        "age": "36",
        "booksdto.title": "Attack on the Mainframe",
        "booksdto.pages": "600"
    }, "", "");

    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "jerry_stone",
        "name": "Jerry Stone",
        "age": "41",
        "booksdto.title": "Carpentry 101",
        "booksdto.pages": "120"
    }, "", "");

    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "elizabeth_heart",
        "name": "Elizabeth Heart",
        "age": "50",
        "booksdto.title": "The X Factor",
        "booksdto.pages": "300"
    }, "", "");

    //add system info (adddto info) to those author wids
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "startwid",
        "adddto.actiondto.action": "none",
        "adddto.palettedto.0.widname": "joe_jamison",
        "adddto.palettedto.0.category": "human",
        "adddto.palettedto.0.subcategory": "author",
        "adddto.addfield.fieldname": "name",
        "adddto.linkrules.linkclass": "1",
        "adddto.linkrules.min": "0",
        "adddto.linkrules.max": "10"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "joe_jamison",
        "adddto.actiondto.action": "{'color_screen':'blue'}",
        "adddto.palettedto.0.widname": "joe_jamison",
        "adddto.palettedto.0.category": "human",
        "adddto.palettedto.0.subcategory": "author",
        "adddto.palettedto.1.widname": "jessica_jamison",
        "adddto.palettedto.1.category": "human",
        "adddto.palettedto.1.subcategory": "wife",
        "adddto.palettedto.2.widname": "mary_morris",
        "adddto.palettedto.2.category": "human",
        "adddto.palettedto.2.subcategory": "sister",
        "adddto.addfield.fieldname": "name",
        "adddto.linkrules.linkclass": "1",
        "adddto.linkrules.min": "0",
        "adddto.linkrules.max": "10"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "sarah_jones",
        "adddto.actiondto.action": "{'color_screen':'red'}",
        "adddto.palettedto.0.widname": "sarah_jones",
        "adddto.palettedto.0.category": "human",
        "adddto.palettedto.0.subcategory": "author",
        "adddto.palettedto.1.widname": "james_jones",
        "adddto.palettedto.1.category": "human",
        "adddto.palettedto.1.subcategory": "husband",
        "adddto.addfield.fieldname": "name",
        "adddto.linkrules.linkclass": "1",
        "adddto.linkrules.min": "0",
        "adddto.linkrules.max": "10"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "mike_williams",
        "adddto.actiondto.action": "none",
        "adddto.palettedto.0.widname": "mike_williams",
        "adddto.palettedto.0.category": "human",
        "adddto.palettedto.0.subcategory": "author",
        "adddto.palettedto.1.widname": "mister_scruffy",
        "adddto.palettedto.1.category": "pet",
        "adddto.palettedto.1.subcategory": "dog",
        "adddto.palettedto.2.widname": "misses_fluffy",
        "adddto.palettedto.2.category": "pet",
        "adddto.palettedto.2.subcategory": "cat",
        "adddto.addfield.fieldname": "name",
        "adddto.linkrules.linkclass": "1",
        "adddto.linkrules.min": "0",
        "adddto.linkrules.max": "10"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "jerry_stone",
        "adddto.actiondto.action": "none",
        "adddto.palettedto.0.widname": "jerry_stone",
        "adddto.palettedto.0.category": "human",
        "adddto.palettedto.0.subcategory": "author",
        "adddto.palettedto.1.widname": "lynne_stone",
        "adddto.palettedto.1.category": "human",
        "adddto.palettedto.1.subcategory": "wife",
        "adddto.addfield.fieldname": "name",
        "adddto.linkrules.linkclass": "1",
        "adddto.linkrules.min": "0",
        "adddto.linkrules.max": "10"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "elizabeth_heart",
        "adddto.actiondto.action": "{'play_sound':'trumpet.ogg'}",
        "adddto.palettedto.0.widname": "elizabeth_heart",
        "adddto.palettedto.0.category": "human",
        "adddto.palettedto.0.subcategory": "author",
        "adddto.addfield.fieldname": "name",
        "adddto.linkrules.linkclass": "1",
        "adddto.linkrules.min": "0",
        "adddto.linkrules.max": "10"
    }, "", "");
    //executetest("debugon")
    executetest("getwidmaster", {
        "wid": "startwid",
        "command.dtotype": "palettedto"
    }, "startwid_get_result", "");
    executetest("getwidmaster", {
        "wid": "startwid"
    }, "startwid_get_result", "");
    logverify("readstartwid", "resultwid", "startwid_get_result", "", "", {
        "metadata.method": "authordto",
        "wid": "startwid",
        "name": "start wid",
        "age": "00",
        "booksdto.0.title": "none",
        "booksdto.0.pages": "00",
        "booksdto.0.metadata.method": "booksdto",
        "booksdto.0.wid": "1",
        "adddto.0.metadata.method": "adddto",
        "adddto.0.wid": "13",
        "adddto.0.actiondto.0.action": "none",
        "adddto.0.actiondto.0.metadata.method": "actiondto",
        "adddto.0.actiondto.0.wid": "14",
        "adddto.0.palettedto.0.widname": "joe_jamison",
        "adddto.0.palettedto.0.category": "human",
        "adddto.0.palettedto.0.subcategory": "author",
        "adddto.0.palettedto.0.metadata.method": "palettedto",
        "adddto.0.palettedto.0.wid": "16",
        "adddto.0.addfield.0.fieldname": "name",
        "adddto.0.addfield.0.metadata.method": "addfield",
        "adddto.0.addfield.0.wid": "18",
        "adddto.0.addfield.0.display": "true",
        "adddto.0.addfield.0.editable": "true",
        "adddto.0.addfield.0.onreadactions": "none",
        "adddto.0.addfield.0.oneditactions": "pop_up_alert",
        "adddto.0.linkrules.0.linkclass": "1",
        "adddto.0.linkrules.0.min": "0",
        "adddto.0.linkrules.0.max": "10",
        "adddto.0.linkrules.0.metadata.method": "linkrules",
        "adddto.0.linkrules.0.wid": "20"
    });

    //executetest("debugoff")
    //logverify("cody1_test1", "resultwid", "startwid_get_result", "", "X", "Y");
    verifysummary("resultwid");

    //executetest("getwidmaster", {"wid":"startwid","command.dtotype":"palettedto"}, "", "");
    //executetest("getwidmaster", {"wid":"startwid"}, "", "");

    /*
    //get the new record
    sequenceObjList.push({"seq":"seq01","command.action":"debugon"});
    sequenceObjList.push({"seq":"seq01","command.action":"get","metadata.method":"authordto","wid":"startwid"});
    sequenceObjList.push({"seq":"seq01","command.action":"debugoff"});
    */
}

exports.addf = addf = function addf() {
    testclearstorage();
    executetest("addwidmaster", {
        "wid": "defaultforauthor",
        "name": "roger"
    });
    executetest("addwidmaster", {
        "metadata.method": "booksdto",
        "wid": "booksdto",
        "title": "string",
        "pages": "string"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "authordto",
        "name": "string",
        "age": "string",
        "booksdto": "onetomany",
        "adddto": "onetoone",
        "defaultforauthor": "inherit"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "relbooktoauthor",
        "primarywid": "authordto",
        "secondarywid": "booksdto"
    }, "", "");

    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "joe_jamison",
        "name": "Joe Jamison",
        "age": "32",
        "booksdto.title": "Hello World!",
        "booksdto.pages": "40"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "sarah_jones",
        "age": "40",
        "booksdto.title": "The Sands of Time",
        "booksdto.pages": "378"
    }, "", "");

    executetest("getwidmaster", {
        "wid": "joe_jamison"
    }, "joe_get_result", "");

    executetest("getwidmaster", {
        "wid": "sarah_jones"
    }, "sarah_get_result", "");
    logverify("addf", "resultwid", "joe_get_result", "", "", {
        "metadata.method": "authordto",
        "wid": "joe_jamison",
        "name": "Joe Jamison",
        "age": "32",
        "booksdto.0.title": "Hello World!",
        "booksdto.0.pages": "40",
        "booksdto.0.metadata.method": "booksdto",
        "booksdto.0.wid": "1"
    });
    logverify("addf", "resultwid", "sarah_get_result", "", "", {
        "metadata.method": "authordto",
        "wid": "sarah_jones",
        "age": "40",
        "booksdto.0.title": "The Sands of Time",
        "booksdto.0.pages": "378",
        "booksdto.0.metadata.method": "booksdto",
        "booksdto.0.wid": "3",
        "name": "roger"
    });
    verifysummary("resultwid");

    //executetest("debugon");
    //executetest("addwidmaster",{"command.dtotype":"booksdto","wid":"joe_jamison","title":"entered direct dto","pages":"40-direct"}, "", "");
    //executetest("getwidmaster", {"command.dtotype":"booksdto","wid":"joe_jamison"}, "joe_get_result2", "");
    //executetest("debugoff");
}

exports.addg = addg = function addg() {
    testclearstorage();
    executetest("addwidmaster", {
        "wid": "defaultforauthor",
        "name": "roger"
    });
    executetest("addwidmaster", {
        "metadata.method": "booksdto",
        "wid": "booksdto",
        "title": "string",
        "pages": "string"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "authordto",
        "name": "string",
        "age": "string",
        "booksdto": "onetomany",
        "adddto": "onetoone",
        "defaultforauthor": "inherit"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "relbooktoauthor",
        "primarywid": "authordto",
        "secondarywid": "booksdto"
    }, "", "");

    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "joe_jamison",
        "name": "Joe Jamison",
        "age": "32",
        "booksdto.title": "Hello World!",
        "booksdto.pages": "40"
    }, "", "");

    //executetest("addwidmaster",{"metadata.method":"authordto","wid":"joe_jamison","name":"Joe Jamison","age":"32","booksdto.title":"Hello Moon","booksdto.pages":"2001"}, "", "");


    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "sarah_jones",
        "age": "40",
        "booksdto.title": "The Sands of Time",
        "booksdto.pages": "378"
    }, "", "");

    executetest("getwidmaster", {
        "wid": "joe_jamison"
    }, "joe_get_result", "");
    executetest("getwidmaster", {
        "wid": "sarah_jones"
    }, "sarah_get_result", "");
    logverify("addg", "resultwid", "joe_get_result", "", "", {
        "metadata.method": "authordto",
        "wid": "joe_jamison",
        "name": "Joe Jamison",
        "age": "32",
        "booksdto.0.title": "Hello World!",
        "booksdto.0.pages": "40",
        "booksdto.0.metadata.method": "booksdto",
        "booksdto.0.wid": "1"
    });
    logverify("addg", "resultwid", "sarah_get_result", "", "", {
        "metadata.method": "authordto",
        "wid": "sarah_jones",
        "age": "40",
        "booksdto.0.title": "The Sands of Time",
        "booksdto.0.pages": "378",
        "booksdto.0.metadata.method": "booksdto",
        "booksdto.0.wid": "3",
        "name": "roger"
    });
    verifysummary("resultwid");
    //                                                     {"metadata.method":"authordto","name":"Joe Jamison","age":"32","booksdto.0.title":"Hello World!","booksdto.0.pages":"40","booksdto.0.metadata.method":"booksdto"}
    //executetest("debugon");
    //executetest("addwidmaster",{"command.dtotype":"booksdto","wid":"joe_jamison","title":"entered direct dto","pages":"40-direct"}, "", "");
    executetest("debugon");
    executetest("getwidmaster", {
        "command.dtotype": "booksdto",
        "wid": "joe_jamison",
        "command.convertmethod": "num"
    }, "joe_get_result2", "");
    executetest("debugoff");
    //  {"metadata.method":"booksdto","wid":"1","title":"Hello World!","pages":"40"}
    logverify("addg", "resultwid", "joe_get_result2", "", "", {
        "metadata.method": "authordto",
        "wid": "joe_jamison",
        "0.title": "Hello World!",
        "0.pages": "40",
        "0.metadata.method": "booksdto",
        "0.wid": "1"
    });
    verifysummary("resultwid");
    //{"metadata.method":"authordto","wid":"joe_jamison","0.title":"Hello World!","0.pages":"40","0.wid":"1","0.metadata.method":"booksdto"}
    //executetest("debugoff");
}

exports.addh = addh = function addh() {
    testclearstorage();
    executetest("addwidmaster", {
        "wid": "defaultforauthor",
        "name": "roger"
    });

    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "authordto",
        "name": "string",
        "age": "string",
        "booksdto": "onetomany",
        "adddto": "onetoone",
        "defaultforauthor": "inherit"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "booksdto",
        "wid": "booksdto",
        "title": "string",
        "pages": "string"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "adddto",
        "wid": "adddto",
        "actiondto": "onetomany",
        "palettedto": "onetomany",
        "addfield": "onetomany"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "actiondto",
        "wid": "actiondto",
        "action": "string"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "palettedto",
        "wid": "palettedto",
        "widname": "string",
        "category": "string",
        "subcategory": "string"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "addfield",
        "wid": "addfield",
        "fieldname": "string",
        "editable": "string",
        "display": "string",
        "oneditactions": "string",
        "addfielddefault": "inherit"
    }, "", "");

    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "relbooktoauthor",
        "primarywid": "authordto",
        "secondarywid": "booksdto"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "reladddtotoauthor",
        "primarywid": "authordto",
        "secondarywid": "adddto"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "rel_actiondto_adddto",
        "primarywid": "adddto",
        "secondarywid": "actiondto"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "rel_palettedto_adddto",
        "primarywid": "adddto",
        "secondarywid": "palettedto"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "rel_addfield_adddto",
        "primarywid": "adddto",
        "secondarywid": "addfield"
    }, "", "");

    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "startwid",
        "name": "start wid",
        "age": "00",
        "booksdto.title": "none",
        "booksdto.pages": "00"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "joe_jamison",
        "name": "Joe Jamison",
        "age": "32",
        "booksdto.title": "Hello World!",
        "booksdto.pages": "40"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "sarah_jones",
        "name": "Sarah Jones",
        "age": "40",
        "booksdto.title": "The Sands of Time",
        "booksdto.pages": "378"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "mike_williams",
        "name": "Mike Williams",
        "age": "36",
        "booksdto.title": "Attack on the Mainframe",
        "booksdto.pages": "600"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "jerry_stone",
        "name": "Jerry Stone",
        "age": "41",
        "booksdto.title": "Carpentry 101",
        "booksdto.pages": "120"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "elizabeth_heart",
        "name": "Elizabeth Heart",
        "age": "50",
        "booksdto.title": "The X Factor",
        "booksdto.pages": "300"
    }, "", "");

    //add system info (adddto info) to those author wids
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "startwid",
        "adddto.actiondto.action": "none",
        "adddto.palettedto.0.widname": "joe_jamison",
        "adddto.palettedto.0.category": "human",
        "adddto.palettedto.0.subcategory": "author",
        "adddto.addfield.fieldname": "name",
        "adddto.linkrules.linkclass": "1",
        "adddto.linkrules.min": "0",
        "adddto.linkrules.max": "10"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "joe_jamison",
        "adddto.actiondto.action": "{'color_screen':'blue'}",
        "adddto.palettedto.0.widname": "joe_jamison",
        "adddto.palettedto.0.category": "human",
        "adddto.palettedto.0.subcategory": "author",
        "adddto.palettedto.1.widname": "jessica_jamison",
        "adddto.palettedto.1.category": "human",
        "adddto.palettedto.1.subcategory": "wife",
        "adddto.palettedto.2.widname": "mary_morris",
        "adddto.palettedto.2.category": "human",
        "adddto.palettedto.2.subcategory": "sister",
        "adddto.addfield.fieldname": "name",
        "adddto.linkrules.linkclass": "1",
        "adddto.linkrules.min": "0",
        "adddto.linkrules.max": "10"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "sarah_jones",
        "adddto.actiondto.action": "{'color_screen':'red'}",
        "adddto.palettedto.0.widname": "sarah_jones",
        "adddto.palettedto.0.category": "human",
        "adddto.palettedto.0.subcategory": "author",
        "adddto.palettedto.1.widname": "james_jones",
        "adddto.palettedto.1.category": "human",
        "adddto.palettedto.1.subcategory": "husband",
        "adddto.addfield.fieldname": "name",
        "adddto.linkrules.linkclass": "1",
        "adddto.linkrules.min": "0",
        "adddto.linkrules.max": "10"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "mike_williams",
        "adddto.actiondto.action": "none",
        "adddto.palettedto.0.widname": "mike_williams",
        "adddto.palettedto.0.category": "human",
        "adddto.palettedto.0.subcategory": "author",
        "adddto.palettedto.1.widname": "mister_scruffy",
        "adddto.palettedto.1.category": "pet",
        "adddto.palettedto.1.subcategory": "dog",
        "adddto.palettedto.2.widname": "misses_fluffy",
        "adddto.palettedto.2.category": "pet",
        "adddto.palettedto.2.subcategory": "cat",
        "adddto.addfield.fieldname": "name",
        "adddto.linkrules.linkclass": "1",
        "adddto.linkrules.min": "0",
        "adddto.linkrules.max": "10"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "jerry_stone",
        "adddto.actiondto.action": "none",
        "adddto.palettedto.0.widname": "jerry_stone",
        "adddto.palettedto.0.category": "human",
        "adddto.palettedto.0.subcategory": "author",
        "adddto.palettedto.1.widname": "lynne_stone",
        "adddto.palettedto.1.category": "human",
        "adddto.palettedto.1.subcategory": "wife",
        "adddto.addfield.fieldname": "name",
        "adddto.linkrules.linkclass": "1",
        "adddto.linkrules.min": "0",
        "adddto.linkrules.max": "10"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "elizabeth_heart",
        "adddto.actiondto.action": "{'play_sound':'trumpet.ogg'}",
        "adddto.palettedto.0.widname": "elizabeth_heart",
        "adddto.palettedto.0.category": "human",
        "adddto.palettedto.0.subcategory": "author",
        "adddto.addfield.fieldname": "name",
        "adddto.linkrules.linkclass": "1",
        "adddto.linkrules.min": "0",
        "adddto.linkrules.max": "10"
    }, "", "");


    executetest("debugon");
    executetest("getwidmaster", {
        "command.dtotype": "actiondto",
        "wid": "joe_jamison"
    }, "joe_get_result2", "");
    executetest("debugoff");

}

exports.addoldi = addoldi = function addoldi() {
    testclearstorage();
    //executetest("debugon");
    executetest("addwidmaster", {
        "metadata.method": "actiondto",
        "wid": "actiondto",
        "action": "string"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "palettedto",
        "wid": "palettedto",
        "widname": "string",
        "category": "string",
        "subcategory": "string"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "addfield",
        "wid": "addfield",
        "fieldname": "string",
        "editable": "string",
        "display": "string",
        "oneditactions": "string",
        "addfielddefault": "inherit"
    }, "", "");


    //gojs object
    executetest("addwidmaster", {
        "metadata.method": "gojsobject",
        "wid": "gojsobject",
        "class": "string",
        "linkFromPortIdProperty": "string",
        "linkToPortIdProperty": "string",
        "nodeDataArray": "onetomany",
        "linkDataArray": "onetomany"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "nodeDataArray",
        "wid": "nodeDataArray",
        "key": "string",
        "loc": "string",
        "leftArray": "onetomany",
        "topArray": "onetomany",
        "bottomArray": "onetomany",
        "rightArray": "onetomany"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "leftArray",
        "wid": "leftArray",
        "class": "string",
        "portColor": "string",
        "portId": "string"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "topArray",
        "wid": "topArray",
        "class": "string",
        "portColor": "string",
        "portId": "string"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "bottomArray",
        "wid": "bottomArray",
        "portColor": "string",
        "portId": "string"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "rightArray",
        "wid": "rightArray",
        "portColor": "string",
        "portId": "string"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "linkDataArray",
        "wid": "linkDataArray",
        "from": "string",
        "to": "string",
        "fromPort": "string",
        "toPort": "string"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "gojsrel1",
        "wid": "gojsrel1",
        "primarywid": "gojsobject",
        "secondarywid": "nodedataarray",
        "relationshiptype": "attributes",
        "metadata.method": "relationshipdto"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "gojsrel2",
        "wid": "gojsrel2",
        "class": "string",
        "primarywid": "gojsobject",
        "secondarywid": "linkdataarray",
        "relationshiptype": "attributes",
        "metadata.method": "relationshipdto"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "gojsrel3",
        "wid": "gojsrel3",
        "primarywid": "nodedataarray",
        "secondarywid": "leftarray",
        "relationshiptype": "attributes",
        "metadata.method": "relationshipdto"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "gojsrel4",
        "wid": "gojsrel4",
        "primarywid": "nodedataarray",
        "secondarywid": "toparray",
        "relationshiptype": "attributes",
        "metadata.method": "relationshipdto"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "gojsrel5",
        "wid": "gojsrel5",
        "primarywid": "nodedataarray",
        "secondarywid": "bottomarray",
        "relationshiptype": "attributes",
        "metadata.method": "relationshipdto"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "gojsrel6",
        "wid": "gojsrel6",
        "primarywid": "nodedataarray",
        "secondarywid": "rightarray",
        "relationshiptype": "attributes",
        "metadata.method": "relationshipdto"
    }, "", "");
    //end gojs object

    executetest("addwidmaster", {
        "metadata.method": "linkrules",
        "wid": "linkrules",
        "linkclass": "string",
        "min": "string",
        "max": "string"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "adddto",
        "wid": "adddto",
        "actiondto": "onetomany",
        "palettedto": "onetomany",
        "addfield": "onetomany",
        "gojsobject": "onetoone",
        "linkrules": "onetomany"
    }, "", "");
    //create adddto relationships
    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "rel_actiondto_adddto",
        "primarywid": "adddto",
        "secondarywid": "actiondto"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "rel_palettedto_adddto",
        "primarywid": "adddto",
        "secondarywid": "palettedto"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "rel_addfield_adddto",
        "primarywid": "adddto",
        "secondarywid": "addfield"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "rel_gojsobject_adddto",
        "primarywid": "adddto",
        "secondarywid": "gojsobject"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "rel_linkrules_adddto",
        "primarywid": "adddto",
        "secondarywid": "linkrules"
    }, "", "");

    //create book and author dtos
    //sequenceObjList.push({"seq":"seq01","command.action":"add","wid":"booksdto","title":"string","pages":"string","metadata.method":"booksdto"});
    executetest("addwidmaster", {
        "metadata.method": "booksdto",
        "wid": "booksdto",
        "title": "string",
        "pages": "string"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "authordto",
        "name": "string",
        "age": "string",
        "booksdto": "onetomany",
        "adddto": "onetoone"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "relbooktoauthor",
        "primarywid": "authordto",
        "secondarywid": "booksdto"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "reladddtotoauthor",
        "primarywid": "authordto",
        "secondarywid": "adddto"
    }, "", "");

    //create a default addfield record
    executetest("addwidmaster", {
        "wid": "addfielddefault",
        "fieldname": "name",
        "display": "true",
        "editable": "true",
        "onreadactions": "none",
        "oneditactions": "pop_up_alert"
    }, "", "");

    //add some authors and books
    //executetest("debugon");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "startwid",
        "name": "start wid",
        "age": "00",
        "booksdto.title": "none",
        "booksdto.pages": "00"
    }, "", "");
    //executetest("debugoff");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "joe_jamison",
        "name": "Joe Jamison",
        "age": "32",
        "booksdto.title": "Hello World!",
        "booksdto.pages": "40"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "sarah_jones",
        "name": "Sarah Jones",
        "age": "40",
        "booksdto.title": "The Sands of Time",
        "booksdto.pages": "378"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "mike_williams",
        "name": "Mike Williams",
        "age": "36",
        "booksdto.title": "Attack on the Mainframe",
        "booksdto.pages": "600"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "jerry_stone",
        "name": "Jerry Stone",
        "age": "41",
        "booksdto.title": "Carpentry 101",
        "booksdto.pages": "120"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "elizabeth_heart",
        "name": "Elizabeth Heart",
        "age": "50",
        "booksdto.title": "The X Factor",
        "booksdto.pages": "300"
    }, "", "");

    //add system info (adddto info) to those author wids
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "startwid",
        "adddto.actiondto.action": "none",
        "adddto.palettedto.0.widname": "joe_jamison",
        "adddto.palettedto.0.category": "human",
        "adddto.palettedto.0.subcategory": "author",
        "adddto.addfield.fieldname": "name",
        "adddto.linkrules.linkclass": "1",
        "adddto.linkrules.min": "0",
        "adddto.linkrules.max": "10"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "joe_jamison",
        "adddto.actiondto.action": "{'color_screen':'blue'}",
        "adddto.palettedto.0.widname": "joe_jamison",
        "adddto.palettedto.0.category": "human",
        "adddto.palettedto.0.subcategory": "author",
        "adddto.palettedto.1.widname": "jessica_jamison",
        "adddto.palettedto.1.category": "human",
        "adddto.palettedto.1.subcategory": "wife",
        "adddto.palettedto.2.widname": "mary_morris",
        "adddto.palettedto.2.category": "human",
        "adddto.palettedto.2.subcategory": "sister",
        "adddto.addfield.fieldname": "name",
        "adddto.linkrules.linkclass": "1",
        "adddto.linkrules.min": "0",
        "adddto.linkrules.max": "10"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "sarah_jones",
        "adddto.actiondto.action": "{'color_screen':'red'}",
        "adddto.palettedto.0.widname": "sarah_jones",
        "adddto.palettedto.0.category": "human",
        "adddto.palettedto.0.subcategory": "author",
        "adddto.palettedto.1.widname": "james_jones",
        "adddto.palettedto.1.category": "human",
        "adddto.palettedto.1.subcategory": "husband",
        "adddto.addfield.fieldname": "name",
        "adddto.linkrules.linkclass": "1",
        "adddto.linkrules.min": "0",
        "adddto.linkrules.max": "10"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "mike_williams",
        "adddto.actiondto.action": "none",
        "adddto.palettedto.0.widname": "mike_williams",
        "adddto.palettedto.0.category": "human",
        "adddto.palettedto.0.subcategory": "author",
        "adddto.palettedto.1.widname": "mister_scruffy",
        "adddto.palettedto.1.category": "pet",
        "adddto.palettedto.1.subcategory": "dog",
        "adddto.palettedto.2.widname": "misses_fluffy",
        "adddto.palettedto.2.category": "pet",
        "adddto.palettedto.2.subcategory": "cat",
        "adddto.addfield.fieldname": "name",
        "adddto.linkrules.linkclass": "1",
        "adddto.linkrules.min": "0",
        "adddto.linkrules.max": "10"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "jerry_stone",
        "adddto.actiondto.action": "none",
        "adddto.palettedto.0.widname": "jerry_stone",
        "adddto.palettedto.0.category": "human",
        "adddto.palettedto.0.subcategory": "author",
        "adddto.palettedto.1.widname": "lynne_stone",
        "adddto.palettedto.1.category": "human",
        "adddto.palettedto.1.subcategory": "wife",
        "adddto.addfield.fieldname": "name",
        "adddto.linkrules.linkclass": "1",
        "adddto.linkrules.min": "0",
        "adddto.linkrules.max": "10"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "elizabeth_heart",
        "adddto.actiondto.action": "{'play_sound':'trumpet.ogg'}",
        "adddto.palettedto.0.widname": "elizabeth_heart",
        "adddto.palettedto.0.category": "human",
        "adddto.palettedto.0.subcategory": "author",
        "adddto.addfield.fieldname": "name",
        "adddto.linkrules.linkclass": "1",
        "adddto.linkrules.min": "0",
        "adddto.linkrules.max": "10"
    }, "", "");



    //executetest("debugon")
    executetest("getwidmaster", {
        "wid": "startwid"
    }, "startwid_get_result", "");
    logverify("readstartwid", "resultwid", "startwid_get_result", "", "", {
        "metadata.method": "authordto",
        "wid": "startwid",
        "name": "start wid",
        "age": "00",
        "booksdto.0.title": "none",
        "booksdto.0.pages": "00",
        "booksdto.0.metadata.method": "booksdto",
        "booksdto.0.wid": "1",
        "adddto.0.metadata.method": "adddto",
        "adddto.0.wid": "13",
        "adddto.0.actiondto.0.action": "none",
        "adddto.0.actiondto.0.metadata.method": "actiondto",
        "adddto.0.actiondto.0.wid": "14",
        "adddto.0.palettedto.0.widname": "joe_jamison",
        "adddto.0.palettedto.0.category": "human",
        "adddto.0.palettedto.0.subcategory": "author",
        "adddto.0.palettedto.0.metadata.method": "palettedto",
        "adddto.0.palettedto.0.wid": "16",
        "adddto.0.addfield.0.fieldname": "name",
        "adddto.0.addfield.0.metadata.method": "addfield",
        "adddto.0.addfield.0.wid": "18",
        "adddto.0.addfield.0.display": "true",
        "adddto.0.addfield.0.editable": "true",
        "adddto.0.addfield.0.onreadactions": "none",
        "adddto.0.addfield.0.oneditactions": "pop_up_alert",
        "adddto.0.linkrules.0.linkclass": "1",
        "adddto.0.linkrules.0.min": "0",
        "adddto.0.linkrules.0.max": "10",
        "adddto.0.linkrules.0.metadata.method": "linkrules",
        "adddto.0.linkrules.0.wid": "20"
    });
    //                                                               {"metadata.method":"authordto","wid":"startwid","name":"start wid","age":"00","booksdto.0.title":"none","booksdto.0.pages":"00","booksdto.0.metadata.method":"booksdto","booksdto.0.wid":"1","adddto.0.metadata.method":"adddto","adddto.0.wid":"13","adddto.0.actiondto.0.action":"none","adddto.0.actiondto.0.metadata.method":"actiondto","adddto.0.actiondto.0.wid":"14","adddto.0.palettedto.0.widname":"joe_jamison","adddto.0.palettedto.0.category":"human","adddto.0.palettedto.0.subcategory":"author","adddto.0.palettedto.0.metadata.method":"palettedto","adddto.0.palettedto.0.wid":"16","adddto.0.addfield.0.fieldname":"name","adddto.0.addfield.0.metadata.method":"addfield","adddto.0.addfield.0.wid":"18","adddto.0.addfield.0..method":"defaultdto","adddto.0.linkrules.0.linkclass":"1","adddto.0.linkrules.0.min":"0","adddto.0.linkrules.0.max":"10","adddto.0.linkrules.0.metadata.method":"linkrules","adddto.0.linkrules.0.wid":"20"}

    //{"readstartwid":"FAIL","readstartwid_diff":
    //{"adddto.0.addfield.0.display":"true","adddto.0.addfield.0.editable":"true","adddto.0.addfield.0.onreadactions":"none","adddto.0.addfield.0.oneditactions":"pop_up_alert",
    //"Extra_Fields":
    //{"adddto.addfield.fieldname":"name",
    //"adddto.addfield.display":"true","adddto.addfield.editable":"true","adddto.addfield.onreadactions":"none","adddto.addfield.oneditactions":"pop_up_alert",
    //"adddto.addfield.wid":"addfielddefault","adddto.addfield.metadata.method":"defaultdto"}}}

    verifysummary("resultwid");

    //executetest("debugon");
    executetest("getwidmaster", {
        "wid": "startwid",
        "command.dtotype": "authordto"
    }, "startwid_authordto", "");
    executetest("getwidmaster", {
        "wid": "startwid",
        "command.dtotype": "booksdto",
        "command.convertmethod": "dtonum"
    }, "startwid_dtonum_bookdto", "");
    executetest("getwidmaster", {
        "wid": "startwid",
        "command.dtotype": "booksdto",
        "command.convertmethod": "num"
    }, "startwid_num_`bookdto", "");
    executetest("getwidmaster", {
        "wid": "startwid",
        "command.dtotype": "booksdto"
    }, "startwid_bookdto", "");
    executetest("getwidmaster", {
        "wid": "startwid",
        "command.dtotype": "palettedto"
    }, "startwid_palettedto", "");
    executetest("getwidmaster", {
        "wid": "startwid",
        "command.dtotype": "adddto"
    }, "startwid_adddto", "");
    executetest("getwidmaster", {
        "wid": "startwid",
        "command.dtotype": "addfield"
    }, "startwid_addfield", "");
    executetest("getwidmaster", {
        "wid": "startwid",
        "command.dtotype": "actiondto"
    }, "startwid_actiondto", "");
    executetest("getwidmaster", {
        "wid": "startwid",
        "command.dtotype": "linkrules"
    }, "startwid_linkrules", "");
    executetest("getwidmaster", {
        "wid": "startwid",
        "command.dtotype": "gojsobject"
    }, "startwid_gojsobject", "");
    executetest("getwidmaster", {
        "wid": "startwid",
        "command.dtotype": "nodeDataArray"
    }, "startwid_nodeDataArray", "");
    executetest("getwidmaster", {
        "wid": "startwid",
        "command.dtotype": "linkDataArray"
    }, "startwid_linkdataarray", "");
    executetest("getwidmaster", {
        "wid": "startwid",
        "command.dtotype": "leftarray"
    }, "startwid_leftarray", "");
    executetest("getwidmaster", {
        "wid": "startwid",
        "command.dtotype": "rightarray"
    }, "startwid_rightarray", "");
    executetest("getwidmaster", {
        "wid": "startwid",
        "command.dtotype": "bottomarray"
    }, "startwid_bottomarray", "");
    executetest("getwidmaster", {
        "wid": "startwid",
        "command.dtotype": "toparray"
    }, "startwid_toparray", "");
    //executetest("debugoff");

    // Make sure the local storage is displayed
    displayAllWids();
    $('#divwidsdisplay').show('slow');

    /*
    //get the new record
    sequenceObjList.push({"seq":"seq01","command.action":"debugon"});
    sequenceObjList.push({"seq":"seq01","command.action":"get","metadata.method":"authordto","wid":"startwid"});
    sequenceObjList.push({"seq":"seq01","command.action":"debugoff"});
    */
}

exports.seq3 = seq3 = function seq3() {
    var sequenceObjList = [];
    var seqList = ["seq2", "seq1", "seq3"];
    sequenceObjList.push({
        "seq": "seq2",
        "command.action": "add",
        "wid": "gojsobject",
        "metadata.method": "gojsobject",
        "class": "string",
        "linkFromPortIdProperty": "string",
        "linkToPortIdProperty": "string",
        "nodeDataArray": "onetomany",
        "linkDataArray": "onetomany"
    });
    sequenceObjList.push({
        "seq": "seq2",
        "command.action": "add",
        "wid": "nodeDataArray",
        "metadata.method": "nodeDataArray",
        "key": "string",
        "loc": "string",
        "leftArray": "onetomany",
        "topArray": "onetomany",
        "bottomArray": "onetomany",
        "rightArray": "onetomany"
    });
    sequenceObjList.push({
        "seq": "seq2",
        "command.action": "add",
        "wid": "leftArray",
        "metadata.method": "leftArray",
        "portColor": "string",
        "portId": "string"
    });
    sequenceObjList.push({
        "seq": "seq2",
        "command.action": "add",
        "wid": "topArray",
        "metadata.method": "topArray",
        "portColor": "string",
        "portId": "string"
    });
    sequenceObjList.push({
        "seq": "seq2",
        "command.action": "add",
        "wid": "bottomArray",
        "metadata.method": "bottomArray",
        "portColor": "string",
        "portId": "string"
    });
    sequenceObjList.push({
        "seq": "seq2",
        "command.action": "add",
        "wid": "rightArray",
        "metadata.method": "rightArray",
        "portColor": "string",
        "portId": "string"
    });
    sequenceObjList.push({
        "seq": "seq2",
        "command.action": "add",
        "wid": "linkDataArray",
        "metadata.method": "linkDataArray",
        "from": "string",
        "to": "string",
        "fromPort": "string",
        "toPort": "string"
    });
    sequenceObjList.push({
        "seq": "seq2",
        "command.action": "add",
        "wid": "gojsrel1",
        "primarywid": "gojsobject",
        "secondarywid": "nodedataarray",
        "relationshiptype": "attributes",
        "metadata.method": "relationshipdto"
    });
    sequenceObjList.push({
        "seq": "seq2",
        "command.action": "add",
        "wid": "gojsrel2",
        "primarywid": "gojsobject",
        "secondarywid": "linkdataarray",
        "relationshiptype": "attributes",
        "metadata.method": "relationshipdto"
    });
    sequenceObjList.push({
        "seq": "seq2",
        "command.action": "add",
        "wid": "gojsrel3",
        "primarywid": "nodedataarray",
        "secondarywid": "leftarray",
        "relationshiptype": "attributes",
        "metadata.method": "relationshipdto"
    });
    sequenceObjList.push({
        "seq": "seq2",
        "command.action": "add",
        "wid": "gojsrel4",
        "primarywid": "nodedataarray",
        "secondarywid": "toparray",
        "relationshiptype": "attributes",
        "metadata.method": "relationshipdto"
    });
    sequenceObjList.push({
        "seq": "seq2",
        "command.action": "add",
        "wid": "gojsrel5",
        "primarywid": "nodedataarray",
        "secondarywid": "bottomarray",
        "relationshiptype": "attributes",
        "metadata.method": "relationshipdto"
    });
    sequenceObjList.push({
        "seq": "seq2",
        "command.action": "add",
        "wid": "gojsrel6",
        "primarywid": "nodedataarray",
        "secondarywid": "rightarray",
        "relationshiptype": "attributes",
        "metadata.method": "relationshipdto"
    });
    //
    sequenceObjList.push({
        "seq": "seq4",
        "command.action": "add",
        "wid": "addfield",
        "metadata.method": "addfield",
        "oneditfield": "string",
        "oneditaction": "string"
    });
    //
    sequenceObjList.push({
        "seq": "seq1",
        "command.action": "add",
        "wid": "adddto",
        "metadata.method": "adddto",
        "gojsobject": "onetoone",
        "actionDTO": "onetomany",
        "paletteDTO": "onetomany",
        "addfield": "onetomany"
    });
    sequenceObjList.push({
        "seq": "seq1",
        "command.action": "add",
        "wid": "paletteDTO",
        "metadata.method": "paletteDTO",
        "widname": "string",
        "category": "string",
        "subcategory": "string"
    });
    sequenceObjList.push({
        "seq": "seq1",
        "command.action": "add",
        "wid": "actionDTO",
        "metadata.method": "actionDTO",
        "actionname": "string"
    });
    sequenceObjList.push({
        "seq": "seq1",
        "command.action": "add",
        "wid": "reladdpal",
        "primarywid": "adddto",
        "secondarywid": "paletteDTO",
        "relationshiptype": "attributes",
        "metadata.method": "relationshipdto"
    });
    sequenceObjList.push({
        "seq": "seq1",
        "command.action": "add",
        "wid": "reladdact",
        "primarywid": "adddto",
        "secondarywid": "actionDTO",
        "relationshiptype": "attributes",
        "metadata.method": "relationshipdto"
    });
    sequenceObjList.push({
        "seq": "seq1",
        "command.action": "add",
        "wid": "reladdgojs",
        "primarywid": "adddto",
        "secondarywid": "gojsobject",
        "relationshiptype": "attributes",
        "metadata.method": "relationshipdto"
    });
    sequenceObjList.push({
        "seq": "seq1",
        "command.action": "add",
        "wid": "reladdfield",
        "primarywid": "adddto",
        "secondarywid": "addfield",
        "relationshiptype": "attributes",
        "metadata.method": "relationshipdto"
    });
    //
    sequenceObjList.push({
        "seq": "seq3",
        "command.action": "add",
        "wid": "authordto1",
        "first": "string",
        "last": "string",
        "age": "string",
        "metadata.method": "authordto1",
        "booksdto1": "onetomany",
        "adddto": "onetoone"
    });
    sequenceObjList.push({
        "seq": "seq3",
        "command.action": "add",
        "wid": "booksdto1",
        "name": "string",
        "ISBN": "string",
        "publisher": "string",
        "metadata.method": "booksdto1"
    });
    sequenceObjList.push({
        "seq": "seq3",
        "command.action": "add",
        "wid": "rel1",
        "primarywid": "authordto1",
        "secondarywid": "booksdto1",
        "relationshiptype": "attributes",
        "metadata.method": "relationshipdto"
    });
    //
    sequenceObjList.push({
        "seq": "seq3",
        "command.action": "add",
        "wid": "mary_jane1",
        "first": "AMary",
        "last": "ASue",
        "age": "A30",
        "booksdto1.name": "ATime and Terror",
        "booksdto1.ISBN": "A10001111419",
        "booksdto1.publisher": "AMega Books Inc.",
        "metadata.method": "authordto1"
    });
    //
    sequenceObjList.push({
        "seq": "seq3",
        "command.action": "add",
        "wid": "mary_jane1",
        "adddto.gojsobject.wid": "marygowid",
        "first": "BMary",
        "last": "BSue",
        "age": "3B0",
        "booksdto1.name": "BPawn Of Prophecy",
        "booksdto1.ISBN": "B33003222219",
        "booksdto1.publisher": "BTor Books Inc.",
        "metadata.method": "authordto1",
        "adddto.paletteDTO.0.wid": "startwid1",
        "adddto.paletteDTO.0.widname": "wid1",
        "adddto.paletteDTO.0.category": "left",
        "adddto.paletteDTO.0.subcategory": "right",
        "adddto.paletteDTO.1.wid": "startwid2",
        "adddto.paletteDTO.1.widname": "wid2",
        "adddto.paletteDTO.1.category": "left2",
        "adddto.paletteDTO.1.subcategory": "right2",
        "adddto.paletteDTO.2.wid": "startwid3",
        "adddto.paletteDTO.2.widname": "wid3",
        "adddto.paletteDTO.2.category": "left3",
        "adddto.paletteDTO.2.subcategory": "right3",
        "adddto.actionDTO.0.wid": "startwidaction1",
        "adddto.actionDTO.0.actionname": "new",
        "adddto.actionDTO.1.wid": "startwidaction2",
        "adddto.actionDTO.1.actionname": "load"
    });
    //
    sequenceObjList.push({
        "seq": "seq3",
        "command.action": "add",
        "wid": "marygowid",
        "metadata.method": "gojsobject",
        "class": "go.GraphLinksModel",
        "linkFromPortIdProperty": "fromPort",
        "linkToPortIdProperty": "toPort",
        "nodeDataArray.0.key": "unit One",
        "nodeDataArray.0.loc": "101 204",
        "nodeDataArray.0.leftArray.0.portColor": "#425e5c",
        "nodeDataArray.0.leftArray.0.portId": "left0",
        "nodeDataArray.0.topArray.0.portColor": "#d488a2",
        "nodeDataArray.0.topArray.0.portId": "top0",
        "nodeDataArray.0.bottomArray.0.portColor": "#316571",
        "nodeDataArray.0.bottomArray.0.portId": "bottom0",
        "nodeDataArray.0.rightArray.0.portColor": "#923951",
        "nodeDataArray.0.rightArray.0.portId": "right0",
        "nodeDataArray.0.rightArray.1.portColor": "#ef3768",
        "nodeDataArray.0.rightArray.1.portId": "right1",
        "nodeDataArray.1.key": "unit Two",
        "nodeDataArray.1.loc": "320 152",
        "nodeDataArray.1.leftArray.0.portColor": "#7d4bd6",
        "nodeDataArray.1.leftArray.0.portId": "left0",
        "nodeDataArray.1.leftArray.1.portColor": "#cc585c",
        "nodeDataArray.1.leftArray.1.portId": "left1",
        "nodeDataArray.1.leftArray.2.portColor": "#b1273a",
        "nodeDataArray.1.leftArray.2.portId": "left2",
        "nodeDataArray.1.topArray.0.portColor": "#14abef",
        "nodeDataArray.1.topArray.0.portId": "top0",
        "nodeDataArray.1.bottomArray.0.portColor": "#dd45c7",
        "nodeDataArray.1.bottomArray.0.portId": "bottom0",
        "nodeDataArray.1.bottomArray.1.portColor": "#995aa6",
        "nodeDataArray.1.bottomArray.1.portId": "bottom1",
        "nodeDataArray.1.bottomArray.2.portColor": "#6b95cb",
        "nodeDataArray.1.bottomArray.2.portId": "bottom2",
        "nodeDataArray.2.key": "unit Three",
        "nodeDataArray.2.loc": "384 319",
        "nodeDataArray.2.leftArray.0.portColor": "#bd8f27",
        "nodeDataArray.2.leftArray.0.portId": "left0",
        "nodeDataArray.2.leftArray.1.portColor": "#c14617",
        "nodeDataArray.2.leftArray.1.portId": "left1",
        "nodeDataArray.2.leftArray.2.portColor": "#47fa60",
        "nodeDataArray.2.leftArray.2.portId": "left2",
        "nodeDataArray.2.topArray.0.portColor": "#d08154",
        "nodeDataArray.2.topArray.0.portId": "top0",
        "nodeDataArray.2.bottomArray.0.portColor": "#6cafdb",
        "nodeDataArray.2.bottomArray.0.portId": "bottom0",
        "nodeDataArray.3.key": "unit Four",
        "nodeDataArray.3.loc": "138 351",
        "nodeDataArray.3.leftArray.0.portColor": "#491389",
        "nodeDataArray.3.leftArray.0.portId": "left0",
        "nodeDataArray.3.topArray.0.portColor": "#77ac1e",
        "nodeDataArray.3.topArray.0.portId": "top0",
        "nodeDataArray.3.bottomArray.0.portColor": "#e9701b",
        "nodeDataArray.3.bottomArray.0.portId": "bottom0",
        "nodeDataArray.3.rightArray.0.portColor": "#24d05e",
        "nodeDataArray.3.rightArray.0.portId": "right0",
        "nodeDataArray.3.rightArray.1.portColor": "#cfabaa",
        "nodeDataArray.3.rightArray.1.portId": "right1",
        "linkDataArray.0.from": "unit Four",
        "linkDataArray.0.to": "unit One",
        "linkDataArray.0.fromPort": "top0",
        "linkDataArray.0.toPort": "bottom0",
        "linkDataArray.1.from": "unit Four",
        "linkDataArray.1.to": "unit Two",
        "linkDataArray.1.fromPort": "top0",
        "linkDataArray.1.toPort": "bottom0",
        "linkDataArray.2.from": "unit Three",
        "linkDataArray.2.to": "unit Two",
        "linkDataArray.2.fromPort": "top0",
        "linkDataArray.2.toPort": "bottom1",
        "linkDataArray.3.from": "unit Four",
        "linkDataArray.3.to": "unit Three",
        "linkDataArray.3.fromPort": "right0",
        "linkDataArray.3.toPort": "left0",
        "linkDataArray.4.from": "unit Four",
        "linkDataArray.4.to": "unit Three",
        "linkDataArray.4.fromPort": "right1",
        "linkDataArray.4.toPort": "left2",
        "linkDataArray.5.from": "unit One",
        "linkDataArray.5.to": "unit Two",
        "linkDataArray.5.fromPort": "right0",
        "linkDataArray.5.toPort": "left1",
        "linkDataArray.6.from": "unit One",
        "linkDataArray.6.to": "unit Two",
        "linkDataArray.6.fromPort": "right1",
        "linkDataArray.6.toPort": "left2"
    });
    //
    sequenceObjList.push({
        "seq": "seq5",
        "command.action": "add",
        "wid": "mary_jane1",
        "command.dtotype": "adddto",
        "adddto.addfield.field": "age",
        "adddto.addfield.oneditaction": "toGoJSAction"
    });

}

exports.addj = addj = function addj() {

    testclearstorage();
    //executetest("debugon");
    executetest("addwidmaster", {
        "metadata.method": "actiondto",
        "wid": "actiondto",
        "action": "string"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "palettedto",
        "wid": "palettedto",
        "widname": "string",
        "category": "string",
        "subcategory": "string"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "addfield",
        "wid": "addfield",
        "fieldname": "string",
        "editable": "string",
        "display": "string",
        "oneditactions": "string",
        "addfielddefault": "inherit"
    }, "", "");


    //gojs object
    executetest("addwidmaster", {
        "metadata.method": "gojsobject",
        "wid": "gojsobject",
        "class": "string",
        "linkFromPortIdProperty": "string",
        "linkToPortIdProperty": "string",
        "nodeDataArray": "onetomany",
        "linkDataArray": "onetomany"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "nodeDataArray",
        "wid": "nodeDataArray",
        "key": "string",
        "loc": "string",
        "leftArray": "onetomany",
        "topArray": "onetomany",
        "bottomArray": "onetomany",
        "rightArray": "onetomany"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "leftArray",
        "wid": "leftArray",
        "class": "string",
        "portColor": "string",
        "portId": "string"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "topArray",
        "wid": "topArray",
        "class": "string",
        "portColor": "string",
        "portId": "string"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "bottomArray",
        "wid": "bottomArray",
        "portColor": "string",
        "portId": "string"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "rightArray",
        "wid": "rightArray",
        "portColor": "string",
        "portId": "string"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "linkDataArray",
        "wid": "linkDataArray",
        "from": "string",
        "to": "string",
        "fromPort": "string",
        "toPort": "string"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "gojsrel1",
        "wid": "gojsrel1",
        "primarywid": "gojsobject",
        "secondarywid": "nodedataarray",
        "relationshiptype": "attributes",
        "metadata.method": "relationshipdto"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "gojsrel2",
        "wid": "gojsrel2",
        "class": "string",
        "primarywid": "gojsobject",
        "secondarywid": "linkdataarray",
        "relationshiptype": "attributes",
        "metadata.method": "relationshipdto"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "gojsrel3",
        "wid": "gojsrel3",
        "primarywid": "nodedataarray",
        "secondarywid": "leftarray",
        "relationshiptype": "attributes",
        "metadata.method": "relationshipdto"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "gojsrel4",
        "wid": "gojsrel4",
        "primarywid": "nodedataarray",
        "secondarywid": "toparray",
        "relationshiptype": "attributes",
        "metadata.method": "relationshipdto"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "gojsrel5",
        "wid": "gojsrel5",
        "primarywid": "nodedataarray",
        "secondarywid": "bottomarray",
        "relationshiptype": "attributes",
        "metadata.method": "relationshipdto"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "gojsrel6",
        "wid": "gojsrel6",
        "primarywid": "nodedataarray",
        "secondarywid": "rightarray",
        "relationshiptype": "attributes",
        "metadata.method": "relationshipdto"
    }, "", "");
    //end gojs object

    executetest("addwidmaster", {
        "metadata.method": "linkrules",
        "wid": "linkrules",
        "linkclass": "string",
        "min": "string",
        "max": "string"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "adddto",
        "wid": "adddto",
        "actiondto": "onetomany",
        "palettedto": "onetomany",
        "addfield": "onetomany",
        "gojsobject": "onetoone",
        "linkrules": "onetomany"
    }, "", "");
    //create adddto relationships
    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "rel_actiondto_adddto",
        "primarywid": "adddto",
        "secondarywid": "actiondto"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "rel_palettedto_adddto",
        "primarywid": "adddto",
        "secondarywid": "palettedto"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "rel_addfield_adddto",
        "primarywid": "adddto",
        "secondarywid": "addfield"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "rel_gojsobject_adddto",
        "primarywid": "adddto",
        "secondarywid": "gojsobject"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "rel_linkrules_adddto",
        "primarywid": "adddto",
        "secondarywid": "linkrules"
    }, "", "");

    //create book and author dtos
    //sequenceObjList.push({"seq":"seq01","command.action":"add","wid":"booksdto","title":"string","pages":"string","metadata.method":"booksdto"});
    executetest("addwidmaster", {
        "metadata.method": "booksdto",
        "wid": "booksdto",
        "title": "string",
        "pages": "string"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "authordto",
        "name": "string",
        "age": "string",
        "booksdto": "onetomany",
        "adddto": "onetoone"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "relbooktoauthor",
        "primarywid": "authordto",
        "secondarywid": "booksdto"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "reladddtotoauthor",
        "primarywid": "authordto",
        "secondarywid": "adddto"
    }, "", "");

    //create a default addfield record
    executetest("addwidmaster", {
        "wid": "addfielddefault",
        "fieldname": "name",
        "display": "true",
        "editable": "true",
        "onreadactions": "none",
        "oneditactions": "pop_up_alert"
    }, "", "");

    //add some authors and books
    //executetest("debugon");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "startwid",
        "name": "start wid",
        "age": "00",
        "booksdto.title": "none",
        "booksdto.pages": "00"
    }, "", "");
    //executetest("debugoff");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "joe_jamison",
        "name": "Joe Jamison",
        "age": "32",
        "booksdto.title": "Hello World!",
        "booksdto.pages": "40"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "sarah_jones",
        "name": "Sarah Jones",
        "age": "40",
        "booksdto.title": "The Sands of Time",
        "booksdto.pages": "378"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "mike_williams",
        "name": "Mike Williams",
        "age": "36",
        "booksdto.title": "Attack on the Mainframe",
        "booksdto.pages": "600"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "jerry_stone",
        "name": "Jerry Stone",
        "age": "41",
        "booksdto.title": "Carpentry 101",
        "booksdto.pages": "120"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "elizabeth_heart",
        "name": "Elizabeth Heart",
        "age": "50",
        "booksdto.title": "The X Factor",
        "booksdto.pages": "300"
    }, "", "");

    //**** change these lines to use a dto directly, we will need to take away stuff from fields
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "startwid",
        "adddto.actiondto.action": "none",
        "adddto.palettedto.0.widname": "joe_jamison",
        "adddto.palettedto.0.category": "human",
        "adddto.palettedto.0.subcategory": "author",
        "adddto.addfield.fieldname": "name",
        "adddto.linkrules.linkclass": "1",
        "adddto.linkrules.min": "0",
        "adddto.linkrules.max": "10"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "joe_jamison",
        "adddto.actiondto.action": "{'color_screen':'blue'}",
        "adddto.palettedto.0.widname": "joe_jamison",
        "adddto.palettedto.0.category": "human",
        "adddto.palettedto.0.subcategory": "author",
        "adddto.palettedto.1.widname": "jessica_jamison",
        "adddto.palettedto.1.category": "human",
        "adddto.palettedto.1.subcategory": "wife",
        "adddto.palettedto.2.widname": "mary_morris",
        "adddto.palettedto.2.category": "human",
        "adddto.palettedto.2.subcategory": "sister",
        "adddto.addfield.fieldname": "name",
        "adddto.linkrules.linkclass": "1",
        "adddto.linkrules.min": "0",
        "adddto.linkrules.max": "10"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "sarah_jones",
        "adddto.actiondto.action": "{'color_screen':'red'}",
        "adddto.palettedto.0.widname": "sarah_jones",
        "adddto.palettedto.0.category": "human",
        "adddto.palettedto.0.subcategory": "author",
        "adddto.palettedto.1.widname": "james_jones",
        "adddto.palettedto.1.category": "human",
        "adddto.palettedto.1.subcategory": "husband",
        "adddto.addfield.fieldname": "name",
        "adddto.linkrules.linkclass": "1",
        "adddto.linkrules.min": "0",
        "adddto.linkrules.max": "10"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "mike_williams",
        "adddto.actiondto.action": "none",
        "adddto.palettedto.0.widname": "mike_williams",
        "adddto.palettedto.0.category": "human",
        "adddto.palettedto.0.subcategory": "author",
        "adddto.palettedto.1.widname": "mister_scruffy",
        "adddto.palettedto.1.category": "pet",
        "adddto.palettedto.1.subcategory": "dog",
        "adddto.palettedto.2.widname": "misses_fluffy",
        "adddto.palettedto.2.category": "pet",
        "adddto.palettedto.2.subcategory": "cat",
        "adddto.addfield.fieldname": "name",
        "adddto.linkrules.linkclass": "1",
        "adddto.linkrules.min": "0",
        "adddto.linkrules.max": "10"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "jerry_stone",
        "adddto.actiondto.action": "none",
        "adddto.palettedto.0.widname": "jerry_stone",
        "adddto.palettedto.0.category": "human",
        "adddto.palettedto.0.subcategory": "author",
        "adddto.palettedto.1.widname": "lynne_stone",
        "adddto.palettedto.1.category": "human",
        "adddto.palettedto.1.subcategory": "wife",
        "adddto.addfield.fieldname": "name",
        "adddto.linkrules.linkclass": "1",
        "adddto.linkrules.min": "0",
        "adddto.linkrules.max": "10"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "elizabeth_heart",
        "adddto.actiondto.action": "{'play_sound':'trumpet.ogg'}",
        "adddto.palettedto.0.widname": "elizabeth_heart",
        "adddto.palettedto.0.category": "human",
        "adddto.palettedto.0.subcategory": "author",
        "adddto.addfield.fieldname": "name",
        "adddto.linkrules.linkclass": "1",
        "adddto.linkrules.min": "0",
        "adddto.linkrules.max": "10"
    }, "", "");
    //executetest("debugon")
    executetest("getwidmaster", {
        "wid": "startwid"
    }, "startwid_get_result", "");
    logverify("readstartwid", "resultwid", "startwid_get_result", "", "", {
        "metadata.method": "authordto",
        "wid": "startwid",
        "name": "start wid",
        "age": "00",
        "booksdto.0.title": "none",
        "booksdto.0.pages": "00",
        "booksdto.0.metadata.method": "booksdto",
        "booksdto.0.wid": "1",
        "adddto.0.metadata.method": "adddto",
        "adddto.0.wid": "13",
        "adddto.0.actiondto.0.action": "none",
        "adddto.0.actiondto.0.metadata.method": "actiondto",
        "adddto.0.actiondto.0.wid": "14",
        "adddto.0.palettedto.0.widname": "joe_jamison",
        "adddto.0.palettedto.0.category": "human",
        "adddto.0.palettedto.0.subcategory": "author",
        "adddto.0.palettedto.0.metadata.method": "palettedto",
        "adddto.0.palettedto.0.wid": "16",
        "adddto.0.addfield.0.fieldname": "name",
        "adddto.0.addfield.0.metadata.method": "addfield",
        "adddto.0.addfield.0.wid": "18",
        "adddto.0.addfield.0.display": "true",
        "adddto.0.addfield.0.editable": "true",
        "adddto.0.addfield.0.onreadactions": "none",
        "adddto.0.addfield.0.oneditactions": "pop_up_alert",
        "adddto.0.linkrules.0.linkclass": "1",
        "adddto.0.linkrules.0.min": "0",
        "adddto.0.linkrules.0.max": "10",
        "adddto.0.linkrules.0.metadata.method": "linkrules",
        "adddto.0.linkrules.0.wid": "20"
    });

    verifysummary("resultwid");

    //executetest("addwidmaster", {"wid":"startwid","command.dtotype":"addfield", "fieldname":"a1","editable":"e1","display":"d1","oneditactions":"o1"}, "startwid_addfield1", "");
    //executetest("addwidmaster", {"wid":"startwid","command.dtotype":"addfield", "fieldname":"a2","editable":"e2","display":"d2","oneditactions":"o2"}, "startwid_addfield2", "");
    //executetest("getwidmaster", {"wid":"startwid","command.dtotype":"addfield", "command.convertmethod":"dtonum"}, "startwid_addfield3", ""); 

    proxyprinttodiv('logcomparemeek result before ***********************', result, true);
    executetest("debugon");
    var result = "";
    result = aggressivedto('startwid', '');
    executetest("debugoff");
    proxyprinttodiv('logcomparemeek result ***********************', result, true);
    result["wid"] = "aggessiveaddresult";
    x = updatewid(result);
    //result['wid'] = 'aggressivedto_add';
    //result['metadata.method'] = 'aggressivedto_add';
    ////write the aggressivedto to db
    //executetest("addwidmaster", result, "", "");
    executetest("getwidmaster", {
        "wid": "authordto",
        "command.convertmethod": "dto"
    }, "authordtodto_get_result", "");
    //executetest("getwidmaster", {"wid":"aggressivedto_add"}, "aggressivedto_add_get_result", "");
    executetest("debugon");
    executetest("logcomparemeek", {
        "wid1": "authordtodto_get_result",
        "wid2": "aggessiveaddresult"
    }, "resultofcompare", "");
    //executetest("logcompare", {"wid1":"aggessiveaddresult", "wid2":"aggessiveaddresult"}, "resultofcompare", "");
    //logverify("get_aggressivedto","resultwid","aggressivedto_get_result","","aggessiveaddresult",""};
    var rogersresult = getfrommongo({
        'wid': 'resultofcompare'
    });
    proxyprinttodiv('logcompare', JSON.stringify(rogersresult), 1);



    //var dummy = 'silly';
    //executetest("getwidmaster", [{"wid":"authordto","command.convertmethod":"dto"}], "authordtodto_get_result","");
    //executetest("getwidmaster", {"wid":"authordto","command.convertmethod":"dto"}, "authordtodto_get_result","");

    // x = {'startwid':''};
    // y = {'preamble':''}
    // executetest("aggressivedto", {x,y} , "aggressivedtodto","");


    //executetest("debugon");
    //  executetest("getwidmaster", {"wid":"startwid","command.dtotype":"authordto"}, "startwid_authordto", "");
    //  executetest("getwidmaster", {"wid":"startwid","command.dtotype":"booksdto", "command.convertmethod":"dtonum"}, "startwid_dtonum_bookdto", "");
    //  executetest("getwidmaster", {"wid":"startwid","command.dtotype":"booksdto", "command.convertmethod":"num"}, "startwid_num_`bookdto", "");
    //  executetest("getwidmaster", {"wid":"startwid","command.dtotype":"booksdto"}, "startwid_bookdto", "");
    // executetest("getwidmaster", {"wid":"startwid","command.dtotype":"palettedto"}, "startwid_palettedto", "");
    // executetest("getwidmaster", {"wid":"startwid","command.dtotype":"adddto"}, "startwid_adddto", "");
    // executetest("getwidmaster", {"wid":"startwid","command.dtotype":"addfield"}, "startwid_addfield", "");   
    // executetest("getwidmaster", {"wid":"startwid","command.dtotype":"actiondto"}, "startwid_actiondto", "");
    // executetest("getwidmaster", {"wid":"startwid","command.dtotype":"linkrules"}, "startwid_linkrules", "");
    // executetest("getwidmaster", {"wid":"startwid","command.dtotype":"gojsobject"}, "startwid_gojsobject", "");
    // executetest("getwidmaster", {"wid":"startwid","command.dtotype":"nodeDataArray"}, "startwid_nodeDataArray", "");
    // executetest("getwidmaster", {"wid":"startwid","command.dtotype":"linkDataArray"}, "startwid_linkdataarray", "");
    // executetest("getwidmaster", {"wid":"startwid","command.dtotype":"leftarray"}, "startwid_leftarray", "");
    // executetest("getwidmaster", {"wid":"startwid","command.dtotype":"rightarray"}, "startwid_rightarray", "");
    // executetest("getwidmaster", {"wid":"startwid","command.dtotype":"bottomarray"}, "startwid_bottomarray", "");
    // executetest("getwidmaster", {"wid":"startwid","command.dtotype":"toparray"}, "startwid_toparray", "");
    //executetest("debugoff");

    /*
    //get the new record
    sequenceObjList.push({"seq":"seq01","command.action":"debugon"});
    sequenceObjList.push({"seq":"seq01","command.action":"get","metadata.method":"authordto","wid":"startwid"});
    sequenceObjList.push({"seq":"seq01","command.action":"debugoff"});
    */

    // Make sure the local storage is displayed
    displayAllWids();
    $('#divwidsdisplay').show('slow');
}

exports.addk = addk = function addk() {
    testclearstorage();
    //executetest("debugon");
    executetest("addwidmaster", {
        "metadata.method": "actiondto",
        "wid": "actiondto",
        "action": "string"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "palettedto",
        "wid": "palettedto",
        "widname": "string",
        "category": "string",
        "subcategory": "string"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "addfield",
        "wid": "addfield",
        "fieldname": "string",
        "editable": "string",
        "display": "string",
        "oneditactions": "string",
        "addfielddefault": "inherit"
    }, "", "");


    //gojs object
    executetest("addwidmaster", {
        "metadata.method": "gojsobject",
        "wid": "gojsobject",
        "class": "string",
        "linkFromPortIdProperty": "string",
        "linkToPortIdProperty": "string",
        "nodeDataArray": "onetomany",
        "linkDataArray": "onetomany"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "nodeDataArray",
        "wid": "nodeDataArray",
        "key": "string",
        "loc": "string",
        "leftArray": "onetomany",
        "topArray": "onetomany",
        "bottomArray": "onetomany",
        "rightArray": "onetomany"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "leftArray",
        "wid": "leftArray",
        "class": "string",
        "portColor": "string",
        "portId": "string"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "topArray",
        "wid": "topArray",
        "class": "string",
        "portColor": "string",
        "portId": "string"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "bottomArray",
        "wid": "bottomArray",
        "portColor": "string",
        "portId": "string"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "rightArray",
        "wid": "rightArray",
        "portColor": "string",
        "portId": "string"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "linkDataArray",
        "wid": "linkDataArray",
        "from": "string",
        "to": "string",
        "fromPort": "string",
        "toPort": "string"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "gojsrel1",
        "wid": "gojsrel1",
        "primarywid": "gojsobject",
        "secondarywid": "nodedataarray",
        "relationshiptype": "attributes",
        "metadata.method": "relationshipdto"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "gojsrel2",
        "wid": "gojsrel2",
        "class": "string",
        "primarywid": "gojsobject",
        "secondarywid": "linkdataarray",
        "relationshiptype": "attributes",
        "metadata.method": "relationshipdto"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "gojsrel3",
        "wid": "gojsrel3",
        "primarywid": "nodedataarray",
        "secondarywid": "leftarray",
        "relationshiptype": "attributes",
        "metadata.method": "relationshipdto"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "gojsrel4",
        "wid": "gojsrel4",
        "primarywid": "nodedataarray",
        "secondarywid": "toparray",
        "relationshiptype": "attributes",
        "metadata.method": "relationshipdto"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "gojsrel5",
        "wid": "gojsrel5",
        "primarywid": "nodedataarray",
        "secondarywid": "bottomarray",
        "relationshiptype": "attributes",
        "metadata.method": "relationshipdto"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "gojsrel6",
        "wid": "gojsrel6",
        "primarywid": "nodedataarray",
        "secondarywid": "rightarray",
        "relationshiptype": "attributes",
        "metadata.method": "relationshipdto"
    }, "", "");
    //end gojs object

    executetest("addwidmaster", {
        "metadata.method": "linkrules",
        "wid": "linkrules",
        "linkclass": "string",
        "min": "string",
        "max": "string"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "adddto",
        "wid": "adddto",
        "actiondto": "onetomany",
        "palettedto": "onetomany",
        "addfield": "onetomany",
        "gojsobject": "onetoone",
        "linkrules": "onetomany"
    }, "", "");
    //create adddto relationships
    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "rel_actiondto_adddto",
        "primarywid": "adddto",
        "secondarywid": "actiondto"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "rel_palettedto_adddto",
        "primarywid": "adddto",
        "secondarywid": "palettedto"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "rel_addfield_adddto",
        "primarywid": "adddto",
        "secondarywid": "addfield"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "rel_gojsobject_adddto",
        "primarywid": "adddto",
        "secondarywid": "gojsobject"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "rel_linkrules_adddto",
        "primarywid": "adddto",
        "secondarywid": "linkrules"
    }, "", "");

    //create book and author dtos
    //sequenceObjList.push({"seq":"seq01","command.action":"add","wid":"booksdto","title":"string","pages":"string","metadata.method":"booksdto"});
    executetest("addwidmaster", {
        "metadata.method": "booksdto",
        "wid": "booksdto",
        "title": "string",
        "pages": "string"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "authordto",
        "name": "string",
        "age": "string",
        "booksdto": "onetomany",
        "adddto": "onetoone"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "relbooktoauthor",
        "primarywid": "authordto",
        "secondarywid": "booksdto"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "reladddtotoauthor",
        "primarywid": "authordto",
        "secondarywid": "adddto"
    }, "", "");

    //create a default addfield record
    executetest("addwidmaster", {
        "wid": "addfielddefault",
        "fieldname": "name",
        "display": "true",
        "editable": "true",
        "onreadactions": "none",
        "oneditactions": "pop_up_alert"
    }, "", "");

    //add some authors and books
    //executetest("debugon");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "startwid",
        "name": "start wid",
        "age": "00",
        "booksdto.title": "none",
        "booksdto.pages": "00"
    }, "", "");
    //executetest("debugoff");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "joe_jamison",
        "name": "Joe Jamison",
        "age": "32",
        "booksdto.title": "Hello World!",
        "booksdto.pages": "40"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "sarah_jones",
        "name": "Sarah Jones",
        "age": "40",
        "booksdto.title": "The Sands of Time",
        "booksdto.pages": "378"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "mike_williams",
        "name": "Mike Williams",
        "age": "36",
        "booksdto.title": "Attack on the Mainframe",
        "booksdto.pages": "600"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "jerry_stone",
        "name": "Jerry Stone",
        "age": "41",
        "booksdto.title": "Carpentry 101",
        "booksdto.pages": "120"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "elizabeth_heart",
        "name": "Elizabeth Heart",
        "age": "50",
        "booksdto.title": "The X Factor",
        "booksdto.pages": "300"
    }, "", "");

    //**** change these lines to use a dto directly, we will need to take away stuff from fields
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "startwid",
        "adddto.actiondto.action": "none",
        "adddto.palettedto.0.widname": "joe_jamison",
        "adddto.palettedto.0.category": "human",
        "adddto.palettedto.0.subcategory": "author",
        "adddto.addfield.fieldname": "name",
        "adddto.linkrules.linkclass": "1",
        "adddto.linkrules.min": "0",
        "adddto.linkrules.max": "10"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "joe_jamison",
        "adddto.actiondto.action": "{'color_screen':'blue'}",
        "adddto.palettedto.0.widname": "joe_jamison",
        "adddto.palettedto.0.category": "human",
        "adddto.palettedto.0.subcategory": "author",
        "adddto.palettedto.1.widname": "jessica_jamison",
        "adddto.palettedto.1.category": "human",
        "adddto.palettedto.1.subcategory": "wife",
        "adddto.palettedto.2.widname": "mary_morris",
        "adddto.palettedto.2.category": "human",
        "adddto.palettedto.2.subcategory": "sister",
        "adddto.addfield.fieldname": "name",
        "adddto.linkrules.linkclass": "1",
        "adddto.linkrules.min": "0",
        "adddto.linkrules.max": "10"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "sarah_jones",
        "adddto.actiondto.action": "{'color_screen':'red'}",
        "adddto.palettedto.0.widname": "sarah_jones",
        "adddto.palettedto.0.category": "human",
        "adddto.palettedto.0.subcategory": "author",
        "adddto.palettedto.1.widname": "james_jones",
        "adddto.palettedto.1.category": "human",
        "adddto.palettedto.1.subcategory": "husband",
        "adddto.addfield.fieldname": "name",
        "adddto.linkrules.linkclass": "1",
        "adddto.linkrules.min": "0",
        "adddto.linkrules.max": "10"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "mike_williams",
        "adddto.actiondto.action": "none",
        "adddto.palettedto.0.widname": "mike_williams",
        "adddto.palettedto.0.category": "human",
        "adddto.palettedto.0.subcategory": "author",
        "adddto.palettedto.1.widname": "mister_scruffy",
        "adddto.palettedto.1.category": "pet",
        "adddto.palettedto.1.subcategory": "dog",
        "adddto.palettedto.2.widname": "misses_fluffy",
        "adddto.palettedto.2.category": "pet",
        "adddto.palettedto.2.subcategory": "cat",
        "adddto.addfield.fieldname": "name",
        "adddto.linkrules.linkclass": "1",
        "adddto.linkrules.min": "0",
        "adddto.linkrules.max": "10"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "jerry_stone",
        "adddto.actiondto.action": "none",
        "adddto.palettedto.0.widname": "jerry_stone",
        "adddto.palettedto.0.category": "human",
        "adddto.palettedto.0.subcategory": "author",
        "adddto.palettedto.1.widname": "lynne_stone",
        "adddto.palettedto.1.category": "human",
        "adddto.palettedto.1.subcategory": "wife",
        "adddto.addfield.fieldname": "name",
        "adddto.linkrules.linkclass": "1",
        "adddto.linkrules.min": "0",
        "adddto.linkrules.max": "10"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "elizabeth_heart",
        "adddto.actiondto.action": "{'play_sound':'trumpet.ogg'}",
        "adddto.palettedto.0.widname": "elizabeth_heart",
        "adddto.palettedto.0.category": "human",
        "adddto.palettedto.0.subcategory": "author",
        "adddto.addfield.fieldname": "name",
        "adddto.linkrules.linkclass": "1",
        "adddto.linkrules.min": "0",
        "adddto.linkrules.max": "10"
    }, "", "");
    //executetest("debugon")
    executetest("getwidmaster", {
        "wid": "startwid"
    }, "startwid_get_result", "");
    logverify("readstartwid", "resultwid", "startwid_get_result", "", "", {
        "metadata.method": "authordto",
        "wid": "startwid",
        "name": "start wid",
        "age": "00",
        "booksdto.0.title": "none",
        "booksdto.0.pages": "00",
        "booksdto.0.metadata.method": "booksdto",
        "booksdto.0.wid": "1",
        "adddto.0.metadata.method": "adddto",
        "adddto.0.wid": "13",
        "adddto.0.actiondto.0.action": "none",
        "adddto.0.actiondto.0.metadata.method": "actiondto",
        "adddto.0.actiondto.0.wid": "14",
        "adddto.0.palettedto.0.widname": "joe_jamison",
        "adddto.0.palettedto.0.category": "human",
        "adddto.0.palettedto.0.subcategory": "author",
        "adddto.0.palettedto.0.metadata.method": "palettedto",
        "adddto.0.palettedto.0.wid": "16",
        "adddto.0.addfield.0.fieldname": "name",
        "adddto.0.addfield.0.metadata.method": "addfield",
        "adddto.0.addfield.0.wid": "18",
        "adddto.0.addfield.0.display": "true",
        "adddto.0.addfield.0.editable": "true",
        "adddto.0.addfield.0.onreadactions": "none",
        "adddto.0.addfield.0.oneditactions": "pop_up_alert",
        "adddto.0.linkrules.0.linkclass": "1",
        "adddto.0.linkrules.0.min": "0",
        "adddto.0.linkrules.0.max": "10",
        "adddto.0.linkrules.0.metadata.method": "linkrules",
        "adddto.0.linkrules.0.wid": "20"
    });
    //                                                               {"metadata.method":"authordto","wid":"startwid","name":"start wid","age":"00","booksdto.0.title":"none","booksdto.0.pages":"00","booksdto.0.metadata.method":"booksdto","booksdto.0.wid":"1","adddto.0.metadata.method":"adddto","adddto.0.wid":"13","adddto.0.actiondto.0.action":"none","adddto.0.actiondto.0.metadata.method":"actiondto","adddto.0.actiondto.0.wid":"14","adddto.0.palettedto.0.widname":"joe_jamison","adddto.0.palettedto.0.category":"human","adddto.0.palettedto.0.subcategory":"author","adddto.0.palettedto.0.metadata.method":"palettedto","adddto.0.palettedto.0.wid":"16","adddto.0.addfield.0.fieldname":"name","adddto.0.addfield.0.metadata.method":"addfield","adddto.0.addfield.0.wid":"18","adddto.0.addfield.0..method":"defaultdto","adddto.0.linkrules.0.linkclass":"1","adddto.0.linkrules.0.min":"0","adddto.0.linkrules.0.max":"10","adddto.0.linkrules.0.metadata.method":"linkrules","adddto.0.linkrules.0.wid":"20"}

    verifysummary("resultwid");


    executetest("addwidmaster", {
        "wid": "startwid",
        "command.dtotype": "addfield",
        "fieldname": "a1",
        "editable": "e1",
        "display": "d1",
        "oneditactions": "o1"
    }, "startwid_addfield1", "startwid_input1");
    executetest("addwidmaster", {
        "wid": "startwid",
        "command.dtotype": "addfield",
        "fieldname": "a2",
        "editable": "e2",
        "display": "d2",
        "oneditactions": "o2"
    }, "startwid_addfield2", "startwid_input2");
    executetest("getwidmaster", {
        "wid": "startwid",
        "command.dtotype": "",
        "command.convertmethod": ""
    }, "startwid_author", "");
    executetest("getwidmaster", {
        "wid": "startwid",
        "command.dtotype": "addfield",
        "command.convertmethod": "dtonum"
    }, "startwid_dtonum", "");
    executetest("getwidmaster", {
        "wid": "startwid",
        "command.dtotype": "addfield",
        "command.convertmethod": "num"
    }, "startwid_num", "");
    executetest("getwidmaster", {
        "wid": "startwid",
        "command.dtotype": "addfield",
        "command.convertmethod": ""
    }, "startwid_blank", "");

    proxyprinttodiv('addk startwid_input1', getFromMongo({
        'wid': 'startwid_input1'
    }), true);
    proxyprinttodiv('addk startwid_input2', getFromMongo({
        'wid': 'startwid_input2'
    }), true);
    proxyprinttodiv('addk startwid_author', getFromMongo({
        'wid': 'startwid_author'
    }), true);
    proxyprinttodiv('addk startwid_dtonum', getFromMongo({
        'wid': 'startwid_dtonum'
    }), true);
    proxyprinttodiv('addk startwid_num', getFromMongo({
        'wid': 'startwid_num'
    }), true);
    proxyprinttodiv('addk startwid_blank', getFromMongo({
        'wid': 'startwid_blank'
    }), true);
    executetest("logcomparemeek", {
        "wid1": "startwid_input1",
        "wid2": "startwid_addfield3"
    }, "resultofcompare", "");

    // Make sure the local storage is displayed
    displayAllWids();
    $('#divwidsdisplay').show('slow');
}

exports.addm = addm = function addm() {
    testclearstorage();
    //executetest("debugon");
    executetest("addwidmaster", {
        "metadata.method": "actiondto",
        "wid": "actiondto",
        "action": "string"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "palettedto",
        "wid": "palettedto",
        "widname": "string",
        "category": "string",
        "subcategory": "string"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "addfield",
        "wid": "addfield",
        "fieldname": "string",
        "editable": "string",
        "display": "string",
        "oneditactions": "string",
        "addfielddefault": "inherit"
    }, "", "");


    //gojs object
    executetest("addwidmaster", {
        "metadata.method": "gojsobject",
        "wid": "gojsobject",
        "class": "string",
        "linkFromPortIdProperty": "string",
        "linkToPortIdProperty": "string",
        "nodeDataArray": "onetomany",
        "linkDataArray": "onetomany"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "nodeDataArray",
        "wid": "nodeDataArray",
        "key": "string",
        "loc": "string",
        "leftArray": "onetomany",
        "topArray": "onetomany",
        "bottomArray": "onetomany",
        "rightArray": "onetomany"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "leftArray",
        "wid": "leftArray",
        "class": "string",
        "portColor": "string",
        "portId": "string"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "topArray",
        "wid": "topArray",
        "class": "string",
        "portColor": "string",
        "portId": "string"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "bottomArray",
        "wid": "bottomArray",
        "portColor": "string",
        "portId": "string"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "rightArray",
        "wid": "rightArray",
        "portColor": "string",
        "portId": "string"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "linkDataArray",
        "wid": "linkDataArray",
        "from": "string",
        "to": "string",
        "fromPort": "string",
        "toPort": "string"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "gojsrel1",
        "wid": "gojsrel1",
        "primarywid": "gojsobject",
        "secondarywid": "nodedataarray",
        "relationshiptype": "attributes",
        "metadata.method": "relationshipdto"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "gojsrel2",
        "wid": "gojsrel2",
        "class": "string",
        "primarywid": "gojsobject",
        "secondarywid": "linkdataarray",
        "relationshiptype": "attributes",
        "metadata.method": "relationshipdto"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "gojsrel3",
        "wid": "gojsrel3",
        "primarywid": "nodedataarray",
        "secondarywid": "leftarray",
        "relationshiptype": "attributes",
        "metadata.method": "relationshipdto"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "gojsrel4",
        "wid": "gojsrel4",
        "primarywid": "nodedataarray",
        "secondarywid": "toparray",
        "relationshiptype": "attributes",
        "metadata.method": "relationshipdto"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "gojsrel5",
        "wid": "gojsrel5",
        "primarywid": "nodedataarray",
        "secondarywid": "bottomarray",
        "relationshiptype": "attributes",
        "metadata.method": "relationshipdto"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "gojsrel6",
        "wid": "gojsrel6",
        "primarywid": "nodedataarray",
        "secondarywid": "rightarray",
        "relationshiptype": "attributes",
        "metadata.method": "relationshipdto"
    }, "", "");
    //end gojs object

    executetest("addwidmaster", {
        "metadata.method": "linkrules",
        "wid": "linkrules",
        "linkclass": "string",
        "min": "string",
        "max": "string"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "adddto",
        "wid": "adddto",
        "actiondto": "onetomany",
        "palettedto": "onetomany",
        "addfield": "onetomany",
        "gojsobject": "onetoone",
        "linkrules": "onetomany"
    }, "", "");
    //create adddto relationships
    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "rel_actiondto_adddto",
        "primarywid": "adddto",
        "secondarywid": "actiondto"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "rel_palettedto_adddto",
        "primarywid": "adddto",
        "secondarywid": "palettedto"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "rel_addfield_adddto",
        "primarywid": "adddto",
        "secondarywid": "addfield"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "rel_gojsobject_adddto",
        "primarywid": "adddto",
        "secondarywid": "gojsobject"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "rel_linkrules_adddto",
        "primarywid": "adddto",
        "secondarywid": "linkrules"
    }, "", "");

    //create book and author dtos
    //sequenceObjList.push({"seq":"seq01","command.action":"add","wid":"booksdto","title":"string","pages":"string","metadata.method":"booksdto"});
    executetest("addwidmaster", {
        "metadata.method": "booksdto",
        "wid": "booksdto",
        "title": "string",
        "pages": "string"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "authordto",
        "name": "string",
        "age": "string",
        "booksdto": "onetomany",
        "adddto": "onetoone"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "relbooktoauthor",
        "primarywid": "authordto",
        "secondarywid": "booksdto"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "reladddtotoauthor",
        "primarywid": "authordto",
        "secondarywid": "adddto"
    }, "", "");

    //create a default addfield record
    executetest("addwidmaster", {
        "wid": "addfielddefault",
        "fieldname": "name",
        "display": "true",
        "editable": "true",
        "onreadactions": "none",
        "oneditactions": "pop_up_alert"
    }, "", "");

    //add some authors and books
    //executetest("debugon");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "startwid",
        "name": "start wid",
        "age": "00",
        "booksdto.title": "none",
        "booksdto.pages": "00"
    }, "", "");
    //executetest("debugoff");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "joe_jamison",
        "name": "Joe Jamison",
        "age": "32",
        "booksdto.title": "Hello World!",
        "booksdto.pages": "40"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "sarah_jones",
        "name": "Sarah Jones",
        "age": "40",
        "booksdto.title": "The Sands of Time",
        "booksdto.pages": "378"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "mike_williams",
        "name": "Mike Williams",
        "age": "36",
        "booksdto.title": "Attack on the Mainframe",
        "booksdto.pages": "600"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "jerry_stone",
        "name": "Jerry Stone",
        "age": "41",
        "booksdto.title": "Carpentry 101",
        "booksdto.pages": "120"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "elizabeth_heart",
        "name": "Elizabeth Heart",
        "age": "50",
        "booksdto.title": "The X Factor",
        "booksdto.pages": "300"
    }, "", "");

    //**** change these lines to use a dto directly, we will need to take away stuff from fields
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "startwid",
        "adddto.actiondto.action": "none",
        "adddto.palettedto.0.widname": "joe_jamison",
        "adddto.palettedto.0.category": "human",
        "adddto.palettedto.0.subcategory": "author",
        "adddto.addfield.fieldname": "name",
        "adddto.linkrules.linkclass": "1",
        "adddto.linkrules.min": "0",
        "adddto.linkrules.max": "10"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "joe_jamison",
        "adddto.actiondto.action": "{'color_screen':'blue'}",
        "adddto.palettedto.0.widname": "joe_jamison",
        "adddto.palettedto.0.category": "human",
        "adddto.palettedto.0.subcategory": "author",
        "adddto.palettedto.1.widname": "jessica_jamison",
        "adddto.palettedto.1.category": "human",
        "adddto.palettedto.1.subcategory": "wife",
        "adddto.palettedto.2.widname": "mary_morris",
        "adddto.palettedto.2.category": "human",
        "adddto.palettedto.2.subcategory": "sister",
        "adddto.addfield.fieldname": "name",
        "adddto.linkrules.linkclass": "1",
        "adddto.linkrules.min": "0",
        "adddto.linkrules.max": "10"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "sarah_jones",
        "adddto.actiondto.action": "{'color_screen':'red'}",
        "adddto.palettedto.0.widname": "sarah_jones",
        "adddto.palettedto.0.category": "human",
        "adddto.palettedto.0.subcategory": "author",
        "adddto.palettedto.1.widname": "james_jones",
        "adddto.palettedto.1.category": "human",
        "adddto.palettedto.1.subcategory": "husband",
        "adddto.addfield.fieldname": "name",
        "adddto.linkrules.linkclass": "1",
        "adddto.linkrules.min": "0",
        "adddto.linkrules.max": "10"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "mike_williams",
        "adddto.actiondto.action": "none",
        "adddto.palettedto.0.widname": "mike_williams",
        "adddto.palettedto.0.category": "human",
        "adddto.palettedto.0.subcategory": "author",
        "adddto.palettedto.1.widname": "mister_scruffy",
        "adddto.palettedto.1.category": "pet",
        "adddto.palettedto.1.subcategory": "dog",
        "adddto.palettedto.2.widname": "misses_fluffy",
        "adddto.palettedto.2.category": "pet",
        "adddto.palettedto.2.subcategory": "cat",
        "adddto.addfield.fieldname": "name",
        "adddto.linkrules.linkclass": "1",
        "adddto.linkrules.min": "0",
        "adddto.linkrules.max": "10"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "jerry_stone",
        "adddto.actiondto.action": "none",
        "adddto.palettedto.0.widname": "jerry_stone",
        "adddto.palettedto.0.category": "human",
        "adddto.palettedto.0.subcategory": "author",
        "adddto.palettedto.1.widname": "lynne_stone",
        "adddto.palettedto.1.category": "human",
        "adddto.palettedto.1.subcategory": "wife",
        "adddto.addfield.fieldname": "name",
        "adddto.linkrules.linkclass": "1",
        "adddto.linkrules.min": "0",
        "adddto.linkrules.max": "10"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "elizabeth_heart",
        "adddto.actiondto.action": "{'play_sound':'trumpet.ogg'}",
        "adddto.palettedto.0.widname": "elizabeth_heart",
        "adddto.palettedto.0.category": "human",
        "adddto.palettedto.0.subcategory": "author",
        "adddto.addfield.fieldname": "name",
        "adddto.linkrules.linkclass": "1",
        "adddto.linkrules.min": "0",
        "adddto.linkrules.max": "10"
    }, "", "");
    //executetest("debugon")
    executetest("getwidmaster", {
        "wid": "startwid"
    }, "startwid_get_result", "");
    logverify("readstartwid", "resultwid", "startwid_get_result", "", "", {
        "metadata.method": "authordto",
        "wid": "startwid",
        "name": "start wid",
        "age": "00",
        "booksdto.0.title": "none",
        "booksdto.0.pages": "00",
        "booksdto.0.metadata.method": "booksdto",
        "booksdto.0.wid": "1",
        "adddto.0.metadata.method": "adddto",
        "adddto.0.wid": "13",
        "adddto.0.actiondto.0.action": "none",
        "adddto.0.actiondto.0.metadata.method": "actiondto",
        "adddto.0.actiondto.0.wid": "14",
        "adddto.0.palettedto.0.widname": "joe_jamison",
        "adddto.0.palettedto.0.category": "human",
        "adddto.0.palettedto.0.subcategory": "author",
        "adddto.0.palettedto.0.metadata.method": "palettedto",
        "adddto.0.palettedto.0.wid": "16",
        "adddto.0.addfield.0.fieldname": "name",
        "adddto.0.addfield.0.metadata.method": "addfield",
        "adddto.0.addfield.0.wid": "18",
        "adddto.0.addfield.0.display": "true",
        "adddto.0.addfield.0.editable": "true",
        "adddto.0.addfield.0.onreadactions": "none",
        "adddto.0.addfield.0.oneditactions": "pop_up_alert",
        "adddto.0.linkrules.0.linkclass": "1",
        "adddto.0.linkrules.0.min": "0",
        "adddto.0.linkrules.0.max": "10",
        "adddto.0.linkrules.0.metadata.method": "linkrules",
        "adddto.0.linkrules.0.wid": "20"
    });
    //                                                               {"metadata.method":"authordto","wid":"startwid","name":"start wid","age":"00","booksdto.0.title":"none","booksdto.0.pages":"00","booksdto.0.metadata.method":"booksdto","booksdto.0.wid":"1","adddto.0.metadata.method":"adddto","adddto.0.wid":"13","adddto.0.actiondto.0.action":"none","adddto.0.actiondto.0.metadata.method":"actiondto","adddto.0.actiondto.0.wid":"14","adddto.0.palettedto.0.widname":"joe_jamison","adddto.0.palettedto.0.category":"human","adddto.0.palettedto.0.subcategory":"author","adddto.0.palettedto.0.metadata.method":"palettedto","adddto.0.palettedto.0.wid":"16","adddto.0.addfield.0.fieldname":"name","adddto.0.addfield.0.metadata.method":"addfield","adddto.0.addfield.0.wid":"18","adddto.0.addfield.0..method":"defaultdto","adddto.0.linkrules.0.linkclass":"1","adddto.0.linkrules.0.min":"0","adddto.0.linkrules.0.max":"10","adddto.0.linkrules.0.metadata.method":"linkrules","adddto.0.linkrules.0.wid":"20"}

    verifysummary("resultwid");

    executetest("addwidmaster", {
        "wid": "defaultrightclick",
        "0.displayname": "Open As Wid",
        "0.fnname": "getWidMaster",
        "0.dtoaction": "dto",
        "1.displayname": "Open As json",
        "1.fnname": "open json",
        "1.dtoaction": ""
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "rightclickdto",
        "wid": "rightclickdto",
        "displayname": "string",
        "fnname": "string",
        "dtoaction": "string",
        "inherit": "defaultrightclick"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "adddto",
        "wid": "adddto",
        "actiondto": "onetomany",
        "palettedto": "onetomany",
        "addfield": "onetomany",
        "gojsobject": "onetoone",
        "linkrules": "onetomany",
        "rightclickdto": "onetomany"
    }, "", "");
    executetest("addwidmaster", {
        "wid": "rel_rightclickdto_adddto",
        "primarywid": "adddto",
        "secondarywid": "rightclickdto",
        "relationshiptype": "attributes",
        "metadata.method": "relationshipdto"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "sarah_jones",
        "adddto.actiondto.action": "{'color_screen':'red'}",
        "adddto.palettedto.0.widname": "sarah_jones",
        "adddto.palettedto.0.category": "human",
        "adddto.palettedto.0.subcategory": "author",
        "adddto.palettedto.1.widname": "james_jones",
        "adddto.palettedto.1.category": "human",
        "adddto.palettedto.1.subcategory": "husband",
        "adddto.addfield.fieldname": "name",
        "adddto.linkrules.linkclass": "1",
        "adddto.linkrules.min": "0",
        "adddto.linkrules.max": "10",
        "adddto.rightclickdto.0.displayname": "Open as wid",
        "adddto.rightclickdto.0.fname": "open_as_wid",
        "adddto.rightclickdto.0.dtoaction": "open_as_wid",
        "adddto.rightclickdto.1.displayname": "Open as wid1",
        "adddto.rightclickdto.1.fname": "open_as_wid1",
        "adddto.rightclickdto.1.dtoaction": "open_as_wid1"
    }, "", "");


    executetest("addwidmaster", {
        "wid": "startwid",
        "command.dtotype": "0.addfield",
        "fieldname": "a1",
        "editable": "e1",
        "display": "d1",
        "oneditactions": "o1"
    }, "startwid_addfield1", "startwid_input1");
    executetest("addwidmaster", {
        "wid": "startwid",
        "command.dtotype": "0.addfield",
        "fieldname": "a2",
        "editable": "e2",
        "display": "d2",
        "oneditactions": "o2"
    }, "startwid_addfield2", "startwid_input2");
    executetest("getwidmaster", {
        "wid": "startwid",
        "command.dtotype": "",
        "command.convertmethod": ""
    }, "startwid_author", "");
    executetest("getwidmaster", {
        "wid": "startwid",
        "command.dtotype": "addfield",
        "command.convertmethod": "dtonum"
    }, "startwid_dtonum", "");
    executetest("getwidmaster", {
        "wid": "startwid",
        "command.dtotype": "addfield",
        "command.convertmethod": "num"
    }, "startwid_num", "");
    executetest("getwidmaster", {
        "wid": "startwid",
        "command.dtotype": "addfield",
        "command.convertmethod": ""
    }, "startwid_blank", "");

    proxyprinttodiv('addk startwid_input1', getFromMongo({
        'wid': 'startwid_input1'
    }), true);
    proxyprinttodiv('addk startwid_input2', getFromMongo({
        'wid': 'startwid_input2'
    }), true);
    proxyprinttodiv('addk startwid_author', getFromMongo({
        'wid': 'startwid_author'
    }), true);
    proxyprinttodiv('addk startwid_dtonum', getFromMongo({
        'wid': 'startwid_dtonum'
    }), true);
    proxyprinttodiv('addk startwid_num', getFromMongo({
        'wid': 'startwid_num'
    }), true);
    proxyprinttodiv('addk startwid_blank', getFromMongo({
        'wid': 'startwid_blank'
    }), true);
    executetest("logcomparemeek", {
        "wid1": "startwid_input1",
        "wid2": "startwid_addfield3"
    }, "resultofcompare", "");

    // Make sure the local storage is displayed
    displayAllWids();
    $('#divwidsdisplay').show('slow');


}

exports.seq2 = seq2 = function seq2() {
    var sequenceObjList = [];
    var seqList = ["seq2"];
    sequenceObjList.push({
        "seq": "seq2",
        "command.action": "add",
        "wid": "gojsobject",
        "metadata.method": "gojsobject",
        "class": "string",
        "linkFromPortIdProperty": "string",
        "linkToPortIdProperty": "string",
        "nodeDataArray": "onetomany",
        "linkDataArray": "onetomany"
    });
    sequenceObjList.push({
        "seq": "seq2",
        "command.action": "add",
        "wid": "nodeDataArray",
        "metadata.method": "nodeDataArray",
        "key": "string",
        "loc": "string",
        "leftArray": "onetomany",
        "topArray": "onetomany",
        "bottomArray": "onetomany",
        "rightArray": "onetomany"
    });
    sequenceObjList.push({
        "seq": "seq2",
        "command.action": "add",
        "wid": "leftArray",
        "metadata.method": "leftArray",
        "portColor": "string",
        "portId": "string"
    });
    sequenceObjList.push({
        "seq": "seq2",
        "command.action": "add",
        "wid": "topArray",
        "metadata.method": "topArray",
        "portColor": "string",
        "portId": "string"
    });
    sequenceObjList.push({
        "seq": "seq2",
        "command.action": "add",
        "wid": "bottomArray",
        "metadata.method": "bottomArray",
        "portColor": "string",
        "portId": "string"
    });
    sequenceObjList.push({
        "seq": "seq2",
        "command.action": "add",
        "wid": "rightArray",
        "metadata.method": "rightArray",
        "portColor": "string",
        "portId": "string"
    });
    sequenceObjList.push({
        "seq": "seq2",
        "command.action": "add",
        "wid": "linkDataArray",
        "metadata.method": "linkDataArray",
        "from": "string",
        "to": "string",
        "fromPort": "string",
        "toPort": "string"
    });
    sequenceObjList.push({
        "seq": "seq2",
        "command.action": "add",
        "wid": "gojsrel1",
        "primarywid": "gojsobject",
        "secondarywid": "nodedataarray",
        "relationshiptype": "attributes",
        "metadata.method": "relationshipdto"
    });
    sequenceObjList.push({
        "seq": "seq2",
        "command.action": "add",
        "wid": "gojsrel2",
        "primarywid": "gojsobject",
        "secondarywid": "linkdataarray",
        "relationshiptype": "attributes",
        "metadata.method": "relationshipdto"
    });
    sequenceObjList.push({
        "seq": "seq2",
        "command.action": "add",
        "wid": "gojsrel3",
        "primarywid": "nodedataarray",
        "secondarywid": "leftarray",
        "relationshiptype": "attributes",
        "metadata.method": "relationshipdto"
    });
    sequenceObjList.push({
        "seq": "seq2",
        "command.action": "add",
        "wid": "gojsrel4",
        "primarywid": "nodedataarray",
        "secondarywid": "toparray",
        "relationshiptype": "attributes",
        "metadata.method": "relationshipdto"
    });
    sequenceObjList.push({
        "seq": "seq2",
        "command.action": "add",
        "wid": "gojsrel5",
        "primarywid": "nodedataarray",
        "secondarywid": "bottomarray",
        "relationshiptype": "attributes",
        "metadata.method": "relationshipdto"
    });
    sequenceObjList.push({
        "seq": "seq2",
        "command.action": "add",
        "wid": "gojsrel6",
        "primarywid": "nodedataarray",
        "secondarywid": "rightarray",
        "relationshiptype": "attributes",
        "metadata.method": "relationshipdto"
    });

    sequenceObjList.push({
        "seq": "seq2",
        "command.action": "add",
        "wid": "widtest",
        "metadata.method": "gojsobject",
        "class": "go.GraphLinksModel",
        "linkFromPortIdProperty": "fromPort",
        "linkToPortIdProperty": "toPort",
        "nodeDataArray.0.key": "unit One",
        "nodeDataArray.0.loc": "101 204",
        "nodeDataArray.0.leftArray.0.portColor": "#425e5c",
        "nodeDataArray.0.leftArray.0.portId": "left0",
        "nodeDataArray.0.topArray.0.portColor": "#d488a2",
        "nodeDataArray.0.topArray.0.portId": "top0",
        "nodeDataArray.0.bottomArray.0.portColor": "#316571",
        "nodeDataArray.0.bottomArray.0.portId": "bottom0",
        "nodeDataArray.0.rightArray.0.portColor": "#923951",
        "nodeDataArray.0.rightArray.0.portId": "right0",
        "nodeDataArray.0.rightArray.1.portColor": "#ef3768",
        "nodeDataArray.0.rightArray.1.portId": "right1",
        "nodeDataArray.1.key": "unit Two",
        "nodeDataArray.1.loc": "320 152",
        "nodeDataArray.1.leftArray.0.portColor": "#7d4bd6",
        "nodeDataArray.1.leftArray.0.portId": "left0",
        "nodeDataArray.1.leftArray.1.portColor": "#cc585c",
        "nodeDataArray.1.leftArray.1.portId": "left1",
        "nodeDataArray.1.leftArray.2.portColor": "#b1273a",
        "nodeDataArray.1.leftArray.2.portId": "left2",
        "nodeDataArray.1.topArray.0.portColor": "#14abef",
        "nodeDataArray.1.topArray.0.portId": "top0",
        "nodeDataArray.1.bottomArray.0.portColor": "#dd45c7",
        "nodeDataArray.1.bottomArray.0.portId": "bottom0",
        "nodeDataArray.1.bottomArray.1.portColor": "#995aa6",
        "nodeDataArray.1.bottomArray.1.portId": "bottom1",
        "nodeDataArray.1.bottomArray.2.portColor": "#6b95cb",
        "nodeDataArray.1.bottomArray.2.portId": "bottom2",
        "nodeDataArray.2.key": "unit Three",
        "nodeDataArray.2.loc": "384 319",
        "nodeDataArray.2.leftArray.0.portColor": "#bd8f27",
        "nodeDataArray.2.leftArray.0.portId": "left0",
        "nodeDataArray.2.leftArray.1.portColor": "#c14617",
        "nodeDataArray.2.leftArray.1.portId": "left1",
        "nodeDataArray.2.leftArray.2.portColor": "#47fa60",
        "nodeDataArray.2.leftArray.2.portId": "left2",
        "nodeDataArray.2.topArray.0.portColor": "#d08154",
        "nodeDataArray.2.topArray.0.portId": "top0",
        "nodeDataArray.2.bottomArray.0.portColor": "#6cafdb",
        "nodeDataArray.2.bottomArray.0.portId": "bottom0",
        "nodeDataArray.3.key": "unit Four",
        "nodeDataArray.3.loc": "138 351",
        "nodeDataArray.3.leftArray.0.portColor": "#491389",
        "nodeDataArray.3.leftArray.0.portId": "left0",
        "nodeDataArray.3.topArray.0.portColor": "#77ac1e",
        "nodeDataArray.3.topArray.0.portId": "top0",
        "nodeDataArray.3.bottomArray.0.portColor": "#e9701b",
        "nodeDataArray.3.bottomArray.0.portId": "bottom0",
        "nodeDataArray.3.rightArray.0.portColor": "#24d05e",
        "nodeDataArray.3.rightArray.0.portId": "right0",
        "nodeDataArray.3.rightArray.1.portColor": "#cfabaa",
        "nodeDataArray.3.rightArray.1.portId": "right1",
        "linkDataArray.0.from": "unit Four",
        "linkDataArray.0.to": "unit One",
        "linkDataArray.0.fromPort": "top0",
        "linkDataArray.0.toPort": "bottom0",
        "linkDataArray.1.from": "unit Four",
        "linkDataArray.1.to": "unit Two",
        "linkDataArray.1.fromPort": "top0",
        "linkDataArray.1.toPort": "bottom0",
        "linkDataArray.2.from": "unit Three",
        "linkDataArray.2.to": "unit Two",
        "linkDataArray.2.fromPort": "top0",
        "linkDataArray.2.toPort": "bottom1",
        "linkDataArray.3.from": "unit Four",
        "linkDataArray.3.to": "unit Three",
        "linkDataArray.3.fromPort": "right0",
        "linkDataArray.3.toPort": "left0",
        "linkDataArray.4.from": "unit Four",
        "linkDataArray.4.to": "unit Three",
        "linkDataArray.4.fromPort": "right1",
        "linkDataArray.4.toPort": "left2",
        "linkDataArray.5.from": "unit One",
        "linkDataArray.5.to": "unit Two",
        "linkDataArray.5.fromPort": "right0",
        "linkDataArray.5.toPort": "left1",
        "linkDataArray.6.from": "unit One",
        "linkDataArray.6.to": "unit Two",
        "linkDataArray.6.fromPort": "right1",
        "linkDataArray.6.toPort": "left2"
    });
    //sequenceObjList.push({"seq":"seq2","command.action":"debugon"});
    sequenceObjList.push({
        "seq": "seq2",
        "command.action": "get",
        "wid": "widtest"
    });
    sequenceObjList.push({
        "seq": "seq2",
        "command.action": "verify",
        "verifywid": "get_widtest",
        "metadata.method": "gojsobject",
        "wid": "widtest",
        "class": "go.GraphLinksModel",
        "linkfromportidproperty": "fromPort",
        "linktoportidproperty": "toPort",
        "nodedataarray.0.key": "unit One",
        "nodedataarray.0.loc": "101 204",
        "nodedataarray.0.metadata.method": "nodedataarray",
        "nodedataarray.0.wid": "1",
        "nodedataarray.0.leftarray.0.portcolor": "#425e5c",
        "nodedataarray.0.leftarray.0.portid": "left0",
        "nodedataarray.0.leftarray.0.metadata.method": "leftarray",
        "nodedataarray.0.leftarray.0.wid": "2",
        "nodedataarray.0.toparray.0.portcolor": "#d488a2",
        "nodedataarray.0.toparray.0.portid": "top0",
        "nodedataarray.0.toparray.0.metadata.method": "toparray",
        "nodedataarray.0.toparray.0.wid": "4",
        "nodedataarray.0.bottomarray.0.portcolor": "#316571",
        "nodedataarray.0.bottomarray.0.portid": "bottom0",
        "nodedataarray.0.bottomarray.0.metadata.method": "bottomarray",
        "nodedataarray.0.bottomarray.0.wid": "6",
        "nodedataarray.0.rightarray.0.portcolor": "#ef3768",
        "nodedataarray.0.rightarray.0.portid": "right1",
        "nodedataarray.0.rightarray.0.metadata.method": "rightarray",
        "nodedataarray.0.rightarray.0.wid": "10",
        "nodedataarray.0.rightarray.1.portcolor": "#923951",
        "nodedataarray.0.rightarray.1.portid": "right0",
        "nodedataarray.0.rightarray.1.metadata.method": "rightarray",
        "nodedataarray.0.rightarray.1.wid": "8",
        "nodedataarray.1.key": "unit Two",
        "nodedataarray.1.loc": "320 152",
        "nodedataarray.1.metadata.method": "nodedataarray",
        "nodedataarray.1.wid": "13",
        "nodedataarray.1.leftarray.0.portcolor": "#7d4bd6",
        "nodedataarray.1.leftarray.0.portid": "left0",
        "nodedataarray.1.leftarray.0.metadata.method": "leftarray",
        "nodedataarray.1.leftarray.0.wid": "14",
        "nodedataarray.1.leftarray.1.portcolor": "#cc585c",
        "nodedataarray.1.leftarray.1.portid": "left1",
        "nodedataarray.1.leftarray.1.metadata.method": "leftarray",
        "nodedataarray.1.leftarray.1.wid": "16",
        "nodedataarray.1.leftarray.2.portcolor": "#b1273a",
        "nodedataarray.1.leftarray.2.portid": "left2",
        "nodedataarray.1.leftarray.2.metadata.method": "leftarray",
        "nodedataarray.1.leftarray.2.wid": "18",
        "nodedataarray.1.toparray.0.portcolor": "#14abef",
        "nodedataarray.1.toparray.0.portid": "top0",
        "nodedataarray.1.toparray.0.metadata.method": "toparray",
        "nodedataarray.1.toparray.0.wid": "20",
        "nodedataarray.1.bottomarray.0.portcolor": "#dd45c7",
        "nodedataarray.1.bottomarray.0.portid": "bottom0",
        "nodedataarray.1.bottomarray.0.metadata.method": "bottomarray",
        "nodedataarray.1.bottomarray.0.wid": "22",
        "nodedataarray.1.bottomarray.1.portcolor": "#995aa6",
        "nodedataarray.1.bottomarray.1.portid": "bottom1",
        "nodedataarray.1.bottomarray.1.metadata.method": "bottomarray",
        "nodedataarray.1.bottomarray.1.wid": "24",
        "nodedataarray.1.bottomarray.2.portcolor": "#6b95cb",
        "nodedataarray.1.bottomarray.2.portid": "bottom2",
        "nodedataarray.1.bottomarray.2.metadata.method": "bottomarray",
        "nodedataarray.1.bottomarray.2.wid": "26",
        "nodedataarray.2.key": "unit Three",
        "nodedataarray.2.loc": "384 319",
        "nodedataarray.2.metadata.method": "nodedataarray",
        "nodedataarray.2.wid": "29",
        "nodedataarray.2.leftarray.0.portcolor": "#bd8f27",
        "nodedataarray.2.leftarray.0.portid": "left0",
        "nodedataarray.2.leftarray.0.metadata.method": "leftarray",
        "nodedataarray.2.leftarray.0.wid": "30",
        "nodedataarray.2.leftarray.1.portcolor": "#c14617",
        "nodedataarray.2.leftarray.1.portid": "left1",
        "nodedataarray.2.leftarray.1.metadata.method": "leftarray",
        "nodedataarray.2.leftarray.1.wid": "32",
        "nodedataarray.2.leftarray.2.portcolor": "#47fa60",
        "nodedataarray.2.leftarray.2.portid": "left2",
        "nodedataarray.2.leftarray.2.metadata.method": "leftarray",
        "nodedataarray.2.leftarray.2.wid": "34",
        "nodedataarray.2.toparray.0.portcolor": "#d08154",
        "nodedataarray.2.toparray.0.portid": "top0",
        "nodedataarray.2.toparray.0.metadata.method": "toparray",
        "nodedataarray.2.toparray.0.wid": "36",
        "nodedataarray.2.bottomarray.0.portcolor": "#6cafdb",
        "nodedataarray.2.bottomarray.0.portid": "bottom0",
        "nodedataarray.2.bottomarray.0.metadata.method": "bottomarray",
        "nodedataarray.2.bottomarray.0.wid": "38",
        "nodedataarray.3.key": "unit Four",
        "nodedataarray.3.loc": "138 351",
        "nodedataarray.3.metadata.method": "nodedataarray",
        "nodedataarray.3.wid": "41",
        "nodedataarray.3.leftarray.0.portcolor": "#491389",
        "nodedataarray.3.leftarray.0.portid": "left0",
        "nodedataarray.3.leftarray.0.metadata.method": "leftarray",
        "nodedataarray.3.leftarray.0.wid": "42",
        "nodedataarray.3.toparray.0.portcolor": "#77ac1e",
        "nodedataarray.3.toparray.0.portid": "top0",
        "nodedataarray.3.toparray.0.metadata.method": "toparray",
        "nodedataarray.3.toparray.0.wid": "44",
        "nodedataarray.3.bottomarray.0.portcolor": "#e9701b",
        "nodedataarray.3.bottomarray.0.portid": "bottom0",
        "nodedataarray.3.bottomarray.0.metadata.method": "bottomarray",
        "nodedataarray.3.bottomarray.0.wid": "46",
        "nodedataarray.3.rightarray.0.portcolor": "#24d05e",
        "nodedataarray.3.rightarray.0.portid": "right0",
        "nodedataarray.3.rightarray.0.metadata.method": "rightarray",
        "nodedataarray.3.rightarray.0.wid": "48",
        "nodedataarray.3.rightarray.1.portcolor": "#cfabaa",
        "nodedataarray.3.rightarray.1.portid": "right1",
        "nodedataarray.3.rightarray.1.metadata.method": "rightarray",
        "nodedataarray.3.rightarray.1.wid": "50",
        "linkdataarray.0.from": "unit Four",
        "linkdataarray.0.to": "unit One",
        "linkdataarray.0.fromport": "top0",
        "linkdataarray.0.toport": "bottom0",
        "linkdataarray.0.metadata.method": "linkdataarray",
        "linkdataarray.0.wid": "53",
        "linkdataarray.1.from": "unit Four",
        "linkdataarray.1.to": "unit Two",
        "linkdataarray.1.fromport": "top0",
        "linkdataarray.1.toport": "bottom0",
        "linkdataarray.1.metadata.method": "linkdataarray",
        "linkdataarray.1.wid": "55",
        "linkdataarray.2.from": "unit Three",
        "linkdataarray.2.to": "unit Two",
        "linkdataarray.2.fromport": "top0",
        "linkdataarray.2.toport": "bottom1",
        "linkdataarray.2.metadata.method": "linkdataarray",
        "linkdataarray.2.wid": "57",
        "linkdataarray.3.from": "unit Four",
        "linkdataarray.3.to": "unit Three",
        "linkdataarray.3.fromport": "right0",
        "linkdataarray.3.toport": "left0",
        "linkdataarray.3.metadata.method": "linkdataarray",
        "linkdataarray.3.wid": "59",
        "linkdataarray.4.from": "unit Four",
        "linkdataarray.4.to": "unit Three",
        "linkdataarray.4.fromport": "right1",
        "linkdataarray.4.toport": "left2",
        "linkdataarray.4.metadata.method": "linkdataarray",
        "linkdataarray.4.wid": "61",
        "linkdataarray.5.from": "unit One",
        "linkdataarray.5.to": "unit Two",
        "linkdataarray.5.fromport": "right0",
        "linkdataarray.5.toport": "left1",
        "linkdataarray.5.metadata.method": "linkdataarray",
        "linkdataarray.5.wid": "63",
        "linkdataarray.6.from": "unit One",
        "linkdataarray.6.to": "unit Two",
        "linkdataarray.6.fromport": "right1",
        "linkdataarray.6.toport": "left2",
        "linkdataarray.6.metadata.method": "linkdataarray",
        "linkdataarray.6.wid": "65"
    });
    //sequenceObjList.push({"seq":"seq2","command.action":"debugoff"});

    // "wid":"widtest","metadata.method":"gojsobject","class":"go.GraphLinksModel",
    // "linkFromPortIdProperty":"fromPort","linkToPortIdProperty":"toPort",
    // "nodeDataArray.0.key":"unit One","nodeDataArray.0.loc":"101 204",
    // "nodeDataArray.0.leftArray.0.portColor":"#425e5c","nodeDataArray.0.leftArray.0.portId":"left0",
    // "nodeDataArray.0.topArray.0.portColor":"#d488a2","nodeDataArray.0.topArray.0.portId":"top0",
    // "nodeDataArray.0.bottomArray.0.portColor":"#316571","nodeDataArray.0.bottomArray.0.portId":"bottom0",
    // "nodeDataArray.0.rightArray.0.portColor":"#923951","nodeDataArray.0.rightArray.0.portId":"right0",
    // "nodeDataArray.0.rightArray.1.portColor":"#ef3768","nodeDataArray.0.rightArray.1.portId":"right1",

    // {"metadata.method":"gojsobject","wid":"widtest","class":"go.GraphLinksModel",
    // "linkfromportidproperty":"fromPort","linktoportidproperty":"toPort",
    // "nodedataarray.0.key":"unit One","nodedataarray.0.loc":"101 204",
    // "nodedataarray.0.metadata.method":"nodedataarray","nodedataarray.0.wid":"1",
    // "nodedataarray.0.leftarray.0.portcolor":"#425e5c","nodedataarray.0.leftarray.0.portid":"left0",
    // "nodedataarray.0.leftarray.0.metadata.method":"leftarray","nodedataarray.0.leftarray.0.wid":"2",
    // "nodedataarray.0.toparray.0.portcolor":"#d488a2","nodedataarray.0.toparray.0.portid":"top0",
    // "nodedataarray.0.toparray.0.metadata.method":"toparray","nodedataarray.0.toparray.0.wid":"4",
    // "nodedataarray.0.bottomarray.0.portcolor":"#316571","nodedataarray.0.bottomarray.0.portid":"bottom0",
    // "nodedataarray.0.bottomarray.0.metadata.method":"bottomarray","nodedataarray.0.bottomarray.0.wid":"6",
    // "nodedataarray.0.rightarray.0.portcolor":"#ef3768","nodedataarray.0.rightarray.0.portid":"right1",
    // "nodedataarray.0.rightarray.0.metadata.method":"rightarray","nodedataarray.0.rightarray.0.wid":"10",
    // "nodedataarray.0.rightarray.1.portcolor":"#923951","nodedataarray.0.rightarray.1.portid":"right0",
    // "nodedataarray.0.rightarray.1.metadata.method":"rightarray","nodedataarray.0.rightarray.1.wid":"8",

    // "wid":"widtest","metadata.method":"gojsobject","class":"go.GraphLinksModel",
    // "linkFromPortIdProperty":"fromPort","linkToPortIdProperty":"toPort",
    // "nodeDataArray.0.key":"unit One","nodeDataArray.0.loc":"101 204",
    // "nodeDataArray.0.leftArray.0.portColor":"#425e5c","nodeDataArray.0.leftArray.0.portId":"left0",
    // "nodeDataArray.0.topArray.0.portColor":"#d488a2","nodeDataArray.0.topArray.0.portId":"top0",
    // "nodeDataArray.0.bottomArray.0.portColor":"#316571","nodeDataArray.0.bottomArray.0.portId":"bottom0",
    // "nodeDataArray.0.rightArray.0.portColor":"#923951","nodeDataArray.0.rightArray.0.portId":"right0",
    // "nodeDataArray.0.rightArray.1.portColor":"#ef3768","nodeDataArray.0.rightArray.1.portId":"right1",
    // "nodeDataArray.1.key":"unit Two","nodeDataArray.1.loc":"320 152","nodeDataArray.1.leftArray.0.portColor":"#7d4bd6",
    // "nodeDataArray.1.leftArray.0.portId":"left0","nodeDataArray.1.leftArray.1.portColor":"#cc585c",
    // "nodeDataArray.1.leftArray.1.portId":"left1","nodeDataArray.1.leftArray.2.portColor":"#b1273a",
    // "nodeDataArray.1.leftArray.2.portId":"left2","nodeDataArray.1.topArray.0.portColor":"#14abef",
    // "nodeDataArray.1.topArray.0.portId":"top0","nodeDataArray.1.bottomArray.0.portColor":"#dd45c7",
    // "nodeDataArray.1.bottomArray.0.portId":"bottom0","nodeDataArray.1.bottomArray.1.portColor":"#995aa6",
    // "nodeDataArray.1.bottomArray.1.portId":"bottom1","nodeDataArray.1.bottomArray.2.portColor":"#6b95cb",
    // "nodeDataArray.1.bottomArray.2.portId":"bottom2","nodeDataArray.2.key":"unit Three",
    // "nodeDataArray.2.loc":"384 319","nodeDataArray.2.leftArray.0.portColor":"#bd8f27",
    // "nodeDataArray.2.leftArray.0.portId":"left0","nodeDataArray.2.leftArray.1.portColor":"#c14617",
    // "nodeDataArray.2.leftArray.1.portId":"left1","nodeDataArray.2.leftArray.2.portColor":"#47fa60",
    // "nodeDataArray.2.leftArray.2.portId":"left2","nodeDataArray.2.topArray.0.portColor":"#d08154",
    // "nodeDataArray.2.topArray.0.portId":"top0","nodeDataArray.2.bottomArray.0.portColor":"#6cafdb",
    // "nodeDataArray.2.bottomArray.0.portId":"bottom0","nodeDataArray.3.key":"unit Four",
    // "nodeDataArray.3.loc":"138 351","nodeDataArray.3.leftArray.0.portColor":"#491389",
    // "nodeDataArray.3.leftArray.0.portId":"left0","nodeDataArray.3.topArray.0.portColor":"#77ac1e",
    // "nodeDataArray.3.topArray.0.portId":"top0","nodeDataArray.3.bottomArray.0.portColor":"#e9701b",
    // "nodeDataArray.3.bottomArray.0.portId":"bottom0","nodeDataArray.3.rightArray.0.portColor":"#24d05e",
    // "nodeDataArray.3.rightArray.0.portId":"right0","nodeDataArray.3.rightArray.1.portColor":"#cfabaa",
    // "nodeDataArray.3.rightArray.1.portId":"right1",
    // "linkDataArray.0.from":"unit Four","linkDataArray.0.to":"unit One",
    // "linkDataArray.0.fromPort":"top0","linkDataArray.0.toPort":"bottom0",
    // "linkDataArray.1.from":"unit Four","linkDataArray.1.to":"unit Two",
    // "linkDataArray.1.fromPort":"top0","linkDataArray.1.toPort":"bottom0",
    // "linkDataArray.2.from":"unit Three","linkDataArray.2.to":"unit Two",
    // "linkDataArray.2.fromPort":"top0","linkDataArray.2.toPort":"bottom1",
    // "linkDataArray.3.from":"unit Four","linkDataArray.3.to":"unit Three",
    // "linkDataArray.3.fromPort":"right0","linkDataArray.3.toPort":"left0",
    // "linkDataArray.4.from":"unit Four","linkDataArray.4.to":"unit Three",
    // "linkDataArray.4.fromPort":"right1","linkDataArray.4.toPort":"left2",
    // "linkDataArray.5.from":"unit One","linkDataArray.5.to":"unit Two",
    // "linkDataArray.5.fromPort":"right0","linkDataArray.5.toPort":"left1",
    // "linkDataArray.6.from":"unit One","linkDataArray.6.to":"unit Two",
    // "linkDataArray.6.fromPort":"right1","linkDataArray.6.toPort":"left2"});  

    // {"metadata.method":"gojsobject","wid":"widtest","class":"go.GraphLinksModel",
    // "linkfromportidproperty":"fromPort","linktoportidproperty":"toPort",
    // "nodedataarray.0.key":"unit One","nodedataarray.0.loc":"101 204","nodedataarray.0.metadata.method":"nodedataarray",
    // "nodedataarray.0.wid":"1","nodedataarray.0.leftarray.0.portcolor":"#425e5c","nodedataarray.0.leftarray.0.portid":"left0",
    // "nodedataarray.0.leftarray.0.metadata.method":"leftarray","nodedataarray.0.leftarray.0.wid":"2",
    // "nodedataarray.0.toparray.0.portcolor":"#d488a2","nodedataarray.0.toparray.0.portid":"top0",
    // "nodedataarray.0.toparray.0.metadata.method":"toparray","nodedataarray.0.toparray.0.wid":"4",
    // "nodedataarray.0.bottomarray.0.portcolor":"#316571","nodedataarray.0.bottomarray.0.portid":"bottom0",
    // "nodedataarray.0.bottomarray.0.metadata.method":"bottomarray","nodedataarray.0.bottomarray.0.wid":"6",
    // "nodedataarray.0.rightarray.0.portcolor":"#ef3768","nodedataarray.0.rightarray.0.portid":"right1",
    // "nodedataarray.0.rightarray.0.metadata.method":"rightarray","nodedataarray.0.rightarray.0.wid":"10",
    // "nodedataarray.0.rightarray.1.portcolor":"#923951","nodedataarray.0.rightarray.1.portid":"right0",
    // "nodedataarray.0.rightarray.1.metadata.method":"rightarray","nodedataarray.0.rightarray.1.wid":"8",
    // "nodedataarray.1.key":"unit Two","nodedataarray.1.loc":"320 152","nodedataarray.1.metadata.method":"nodedataarray",
    // "nodedataarray.1.wid":"13","nodedataarray.1.leftarray.0.portcolor":"#7d4bd6","nodedataarray.1.leftarray.0.portid":"left0",
    // "nodedataarray.1.leftarray.0.metadata.method":"leftarray","nodedataarray.1.leftarray.0.wid":"14",
    // "nodedataarray.1.leftarray.1.portcolor":"#cc585c","nodedataarray.1.leftarray.1.portid":"left1",
    // "nodedataarray.1.leftarray.1.metadata.method":"leftarray","nodedataarray.1.leftarray.1.wid":"16",
    // "nodedataarray.1.leftarray.2.portcolor":"#b1273a","nodedataarray.1.leftarray.2.portid":"left2",
    // "nodedataarray.1.leftarray.2.metadata.method":"leftarray","nodedataarray.1.leftarray.2.wid":"18",
    // "nodedataarray.1.toparray.0.portcolor":"#14abef","nodedataarray.1.toparray.0.portid":"top0",
    // "nodedataarray.1.toparray.0.metadata.method":"toparray","nodedataarray.1.toparray.0.wid":"20",
    // "nodedataarray.1.bottomarray.0.portcolor":"#dd45c7","nodedataarray.1.bottomarray.0.portid":"bottom0",
    // "nodedataarray.1.bottomarray.0.metadata.method":"bottomarray","nodedataarray.1.bottomarray.0.wid":"22",
    // "nodedataarray.1.bottomarray.1.portcolor":"#995aa6","nodedataarray.1.bottomarray.1.portid":"bottom1",
    // "nodedataarray.1.bottomarray.1.metadata.method":"bottomarray","nodedataarray.1.bottomarray.1.wid":"24",
    // "nodedataarray.1.bottomarray.2.portcolor":"#6b95cb","nodedataarray.1.bottomarray.2.portid":"bottom2",
    // "nodedataarray.1.bottomarray.2.metadata.method":"bottomarray","nodedataarray.1.bottomarray.2.wid":"26",
    // "nodedataarray.2.key":"unit Three","nodedataarray.2.loc":"384 319","nodedataarray.2.metadata.method":"nodedataarray",
    // "nodedataarray.2.wid":"29","nodedataarray.2.leftarray.0.portcolor":"#bd8f27",
    // "nodedataarray.2.leftarray.0.portid":"left0","nodedataarray.2.leftarray.0.metadata.method":"leftarray",
    // "nodedataarray.2.leftarray.0.wid":"30","nodedataarray.2.leftarray.1.portcolor":"#c14617",
    // "nodedataarray.2.leftarray.1.portid":"left1","nodedataarray.2.leftarray.1.metadata.method":"leftarray",
    // "nodedataarray.2.leftarray.1.wid":"32","nodedataarray.2.leftarray.2.portcolor":"#47fa60",
    // "nodedataarray.2.leftarray.2.portid":"left2","nodedataarray.2.leftarray.2.metadata.method":"leftarray",
    // "nodedataarray.2.leftarray.2.wid":"34","nodedataarray.2.toparray.0.portcolor":"#d08154",
    // "nodedataarray.2.toparray.0.portid":"top0","nodedataarray.2.toparray.0.metadata.method":"toparray",
    // "nodedataarray.2.toparray.0.wid":"36","nodedataarray.2.bottomarray.0.portcolor":"#6cafdb",
    // "nodedataarray.2.bottomarray.0.portid":"bottom0","nodedataarray.2.bottomarray.0.metadata.method":"bottomarray",
    // "nodedataarray.2.bottomarray.0.wid":"38","nodedataarray.3.key":"unit Four","nodedataarray.3.loc":"138 351",
    // "nodedataarray.3.metadata.method":"nodedataarray","nodedataarray.3.wid":"41","nodedataarray.3.leftarray.0.portcolor":"#491389",
    // "nodedataarray.3.leftarray.0.portid":"left0","nodedataarray.3.leftarray.0.metadata.method":"leftarray",
    // "nodedataarray.3.leftarray.0.wid":"42","nodedataarray.3.toparray.0.portcolor":"#77ac1e","nodedataarray.3.toparray.0.portid":"top0",
    // "nodedataarray.3.toparray.0.metadata.method":"toparray","nodedataarray.3.toparray.0.wid":"44",
    // "nodedataarray.3.bottomarray.0.portcolor":"#e9701b","nodedataarray.3.bottomarray.0.portid":"bottom0",
    // "nodedataarray.3.bottomarray.0.metadata.method":"bottomarray","nodedataarray.3.bottomarray.0.wid":"46",
    // "nodedataarray.3.rightarray.0.portcolor":"#24d05e","nodedataarray.3.rightarray.0.portid":"right0",
    // "nodedataarray.3.rightarray.0.metadata.method":"rightarray","nodedataarray.3.rightarray.0.wid":"48",
    // "nodedataarray.3.rightarray.1.portcolor":"#cfabaa","nodedataarray.3.rightarray.1.portid":"right1",
    // "nodedataarray.3.rightarray.1.metadata.method":"rightarray","nodedataarray.3.rightarray.1.wid":"50",
    // "linkdataarray.0.from":"unit Four","linkdataarray.0.to":"unit One","linkdataarray.0.fromport":"top0",
    // "linkdataarray.0.toport":"bottom0","linkdataarray.0.metadata.method":"linkdataarray","linkdataarray.0.wid":"53",
    // "linkdataarray.1.from":"unit Four","linkdataarray.1.to":"unit Two","linkdataarray.1.fromport":"top0",
    // "linkdataarray.1.toport":"bottom0","linkdataarray.1.metadata.method":"linkdataarray","linkdataarray.1.wid":"55",
    // "linkdataarray.2.from":"unit Three","linkdataarray.2.to":"unit Two","linkdataarray.2.fromport":"top0",
    // "linkdataarray.2.toport":"bottom1","linkdataarray.2.metadata.method":"linkdataarray","linkdataarray.2.wid":"57",
    // "linkdataarray.3.from":"unit Four","linkdataarray.3.to":"unit Three","linkdataarray.3.fromport":"right0",
    // "linkdataarray.3.toport":"left0","linkdataarray.3.metadata.method":"linkdataarray","linkdataarray.3.wid":"59",
    // "linkdataarray.4.from":"unit Four","linkdataarray.4.to":"unit Three","linkdataarray.4.fromport":"right1",
    // "linkdataarray.4.toport":"left2","linkdataarray.4.metadata.method":"linkdataarray","linkdataarray.4.wid":"61",
    // "linkdataarray.5.from":"unit One","linkdataarray.5.to":"unit Two","linkdataarray.5.fromport":"right0",
    // "linkdataarray.5.toport":"left1","linkdataarray.5.metadata.method":"linkdataarray","linkdataarray.5.wid":"63",
    // "linkdataarray.6.from":"unit One","linkdataarray.6.to":"unit Two","linkdataarray.6.fromport":"right1",
    // "linkdataarray.6.toport":"left2","linkdataarray.6.metadata.method":"linkdataarray","linkdataarray.6.wid":"65"}


    //{"metadata.method":"gojsobject","wid":"gojsobject","class":"string","linkfromportidproperty":"string","linktoportidproperty":"string","nodedataarray":"onetomany","linkdataarray":"onetomany","nodedataarray.metadata.method":"nodedataarray","nodedataarray.wid":"nodedataarray","nodedataarray.key":"string","nodedataarray.loc":"string","nodedataarray.leftarray":"onetomany","nodedataarray.toparray":"onetomany","nodedataarray.bottomarray":"onetomany","nodedataarray.rightarray":"onetomany","nodedataarray.leftarray.metadata.method":"leftarray","nodedataarray.leftarray.wid":"leftarray","nodedataarray.leftarray.portcolor":"string","nodedataarray.leftarray.portid":"string","nodedataarray.toparray.metadata.method":"toparray","nodedataarray.toparray.wid":"toparray","nodedataarray.toparray.portcolor":"string","nodedataarray.toparray.portid":"string","nodedataarray.bottomarray.metadata.method":"bottomarray","nodedataarray.bottomarray.wid":"bottomarray","nodedataarray.bottomarray.portcolor":"string","nodedataarray.bottomarray.portid":"string","nodedataarray.rightarray.metadata.method":"rightarray","nodedataarray.rightarray.wid":"rightarray","nodedataarray.rightarray.portcolor":"string","nodedataarray.rightarray.portid":"string","linkdataarray.metadata.method":"linkdataarray","linkdataarray.wid":"linkdataarray","linkdataarray.from":"string","linkdataarray.to":"string","linkdataarray.fromport":"string","linkdataarray.toport":"string","LOG":"LOG"}
    // undefined check


    testSequeceObjList(sequenceObjList, seqList);
}


exports.seq350 = seq350 = function seq350() {
    var sequenceObjList = [];
    var seqList = ["seq350"];

    // SEQ350 -- Create an author and books associated with the author.
    sequenceObjList.push({
        "seq": "seq350",
        "command.action": "clear"
    });

    sequenceObjList.push({
        "seq": "seq350",
        "command.action": "add",
        "wid": "authordto1",
        "first": "string",
        "last": "string",
        "age": "string",
        "metadata.method": "authordto1",
        "booksdto1": "onetomany"
    });

    sequenceObjList.push({
        "seq": "seq350",
        "command.action": "add",
        "wid": "booksdto1",
        "name": "string",
        "ISBN": "string",
        "publisher": "string",
        "metadata.method": "booksdto1"
    });

    sequenceObjList.push({
        "seq": "seq350",
        "command.action": "add",
        "wid": "rel1",
        "primarywid": "authordto1",
        "secondarywid": "booksdto1",
        "relationshiptype": "attributes",
        "metadata.method": "relationshipdto"
    });

    sequenceObjList.push({
        "seq": "seq350",
        "command.action": "add",
        "wid": "mary_jane1",
        "first": "AMary",
        "last": "ASue",
        "age": "A30",
        "booksdto1.name": "ATime and Terror",
        "booksdto1.ISBN": "A10001111419",
        "booksdto1.publisher": "AMega Books Inc.",
        "metadata.method": "authordto1"
    });

    sequenceObjList.push({
        "seq": "seq350",
        "command.action": "add",
        "wid": "mary_jane1",
        "first": "BMary",
        "last": "BSue",
        "age": "3B0",
        "booksdto1.name": "BPawn Of Prophecy",
        "booksdto1.ISBN": "B33003222219",
        "booksdto1.publisher": "BTor Books Inc.",
        "metadata.method": "authordto1"
    });

    sequenceObjList.push({
        "seq": "seq350",
        "command.action": "add",
        "wid": "mary_jane1",
        "first": "CMary",
        "last": "CSue",
        "age": "C30",
        "booksdto1.1.name": "CThe Shining",
        "booksdto1.ISBN": "C33003333319",
        "booksdto1.publisher": "CPenguin Inc.",
        "metadata.method": "authordto1"
    });

    testSequeceObjList(sequenceObjList, seqList);
}

exports.seq351 = seq351 = function seq351() {
    var sequenceObjList = [];
    var seqList = ["seq351"];

    // SEQ351 -- inherittest
    sequenceObjList.push({
        "seq": "seq351",
        "command.action": "clear"
    });
    sequenceObjList.push({
        "seq": "seq351",
        "command.action": "add",
        "wid": "defaultforauthor",
        "booksdto1.commission": "10"
    });
    sequenceObjList.push({
        "seq": "seq351",
        "command.action": "add",
        "wid": "defaultforbook",
        "commission": "20"
    });
    sequenceObjList.push({
        "seq": "seq351",
        "command.action": "add",
        "wid": "authordto1",
        "first": "string",
        "last": "string",
        "age": "string",
        "metadata.method": "authordto1",
        "defaultforauthor": "inherit",
        "booksdto1": "onetomany"
    });
    sequenceObjList.push({
        "seq": "seq351",
        "command.action": "add",
        "wid": "booksdto1",
        "name": "string",
        "ISBN": "string",
        "publisher": "string",
        "metadata.method": "booksdto1",
        "defaultforbook": "inherit"
    });
    sequenceObjList.push({
        "seq": "seq351",
        "command.action": "add",
        "wid": "rel1",
        "primarywid": "authordto1",
        "secondarywid": "booksdto1",
        "relationshiptype": "attributes",
        "metadata.method": "relationshipdto"
    });
    sequenceObjList.push({
        "seq": "seq351",
        "command.action": "add",
        "wid": "mary_jane1",
        "first": "AMary",
        "last": "ASue",
        "age": "A30",
        "booksdto1.name": "ATime and Terror",
        "booksdto1.ISBN": "A10001111419",
        "booksdto1.publisher": "AMega Books Inc.",
        "metadata.method": "authordto1"
    });
    sequenceObjList.push({
        "seq": "seq351",
        "command.action": "add",
        "wid": "mary_jane1",
        "first": "BMary",
        "last": "BSue",
        "age": "3B0",
        "booksdto1.name": "BPawn Of Prophecy",
        "booksdto1.ISBN": "B33003222219",
        "booksdto1.publisher": "BTor Books Inc.",
        "metadata.method": "authordto1"
    });
    sequenceObjList.push({
        "seq": "seq351",
        "command.action": "add",
        "wid": "mary_jane1",
        "first": "CMary",
        "last": "CSue",
        "age": "C30",
        "booksdto1.1.name": "CThe Shining",
        "booksdto1.ISBN": "C33003333319",
        "booksdto1.publisher": "CPenguin Inc.",
        "metadata.method": "authordto1"
    });
    sequenceObjList.push({
        "seq": "seq351",
        "command.action": "debugon"
    });
    sequenceObjList.push({
        "seq": "seq351",
        "command.action": "get",
        "wid": "mary_jane1"
    });
    sequenceObjList.push({
        "seq": "seq351",
        "command.action": "debugoff"
    });

    testSequeceObjList(sequenceObjList, seqList);
}

exports.luke121 = luke121 = function luke121() {
    testclearstorage();

    executetest("addwidmaster", {
        "wid": "color1",
        "color": "red"
    }, "", "");
    executetest("addwidmaster", {
        "wid": "color2",
        "color": "green"
    }, "", "");
    executetest("addwidmaster", {
        "wid": "color3",
        "color": "blue"
    }, "", "");
    executetest("addwidmaster", {
        "wid": "myquery1",
        "color": "green"
    }, "", "");
    executetest("addwidmaster", {
        "wid": "myquery2",
        "color": "red"
    }, "", "");
    executetest("addwidmaster", {
        "wid": "myquery3",
        "myquery1": "placeholder",
        "myquery2": "placeholder"
    }, "", "");
    executetest("addwidmaster", {
        "wid": "outputlanding1"
    }, "", "");
    executetest("addwidmaster", {
        "wid": "outputlanding1"
    }, "", "");
    executetest("querywid", {
        "singlemongoquery": "myquery1"
    }, "outputlanding1", "");
    executetest("querywid", {
        "multiplemongoquery": "myquery3"
    }, "outputlanding2", "");
}

exports.addq = addq = function addq() {
    testclearstorage();
    //gojs object
    executetest("addwidmaster", {
        "metadata.method": "gojsobject",
        "wid": "gojsobject",
        "class": "string",
        "linkFromPortIdProperty": "string",
        "linkToPortIdProperty": "string",
        "nodeDataArray": "onetomany",
        "linkDataArray": "onetomany"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "nodeDataArray",
        "wid": "nodeDataArray",
        "key": "string",
        "loc": "string",
        "leftArray": "onetomany",
        "topArray": "onetomany",
        "bottomArray": "onetomany",
        "rightArray": "onetomany"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "leftArray",
        "wid": "leftArray",
        "class": "string",
        "portColor": "string",
        "portId": "string"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "topArray",
        "wid": "topArray",
        "class": "string",
        "portColor": "string",
        "portId": "string"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "bottomArray",
        "wid": "bottomArray",
        "portColor": "string",
        "portId": "string"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "rightArray",
        "wid": "rightArray",
        "portColor": "string",
        "portId": "string"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "linkDataArray",
        "wid": "linkDataArray",
        "from": "string",
        "to": "string",
        "fromPort": "string",
        "toPort": "string"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "gojsrel1",
        "wid": "gojsrel1",
        "primarywid": "gojsobject",
        "secondarywid": "nodedataarray",
        "relationshiptype": "attributes",
        "metadata.method": "relationshipdto"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "gojsrel2",
        "wid": "gojsrel2",
        "class": "string",
        "primarywid": "gojsobject",
        "secondarywid": "linkdataarray",
        "relationshiptype": "attributes",
        "metadata.method": "relationshipdto"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "gojsrel3",
        "wid": "gojsrel3",
        "primarywid": "nodedataarray",
        "secondarywid": "leftarray",
        "relationshiptype": "attributes",
        "metadata.method": "relationshipdto"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "gojsrel4",
        "wid": "gojsrel4",
        "primarywid": "nodedataarray",
        "secondarywid": "toparray",
        "relationshiptype": "attributes",
        "metadata.method": "relationshipdto"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "gojsrel5",
        "wid": "gojsrel5",
        "primarywid": "nodedataarray",
        "secondarywid": "bottomarray",
        "relationshiptype": "attributes",
        "metadata.method": "relationshipdto"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "gojsrel6",
        "wid": "gojsrel6",
        "primarywid": "nodedataarray",
        "secondarywid": "rightarray",
        "relationshiptype": "attributes",
        "metadata.method": "relationshipdto"
    }, "", "");
    //end gojs object
    executetest("addwidmaster", {
        "metadata.method": "linkrules",
        "wid": "linkrules",
        "linkclass": "string",
        "min": "string",
        "max": "string"
    }, "", "");

    executetest("addwidmaster", {
        "metadata.method": "adddto",
        "wid": "adddto",
        "actiondto": "onetomany",
        "rightclickdto": "onetomany",
        "palettedto": "onetomany",
        "addfield": "onetomany",
        "gojsobject": "onetoone",
        "linkrules": "onetomany"
    }, "", "");

    executetest("executethis", {
        "addthis": "actiondto",
        "metadata.method": "actiondto",
        "displayname": "string",
        "actiondescription": "string",
        "category": "string",
        "subcategory": "string",
        "preexecute": "string",
        "executethis": "string",
        "postexecute": "string",
        "defaultaction": "inherit"
    });
    executetest("executethis", {
        "addthis": "rightclickdto",
        "metadata.method": "rightclickdto",
        "displayname": "string",
        "actiondescription": "string",
        "category": "string",
        "subcategory": "string",
        "preexecute": "string",
        "executethis": "string",
        "postexecute": "string",
        "defaultrightclick": "inherit"
    });
    // executetest("addwidmaster",{"metadata.method":"rightclickdto",
    // "wid":"rightclickdto",
    // "displayname":"string",
    // "actiondescription":"string", 
    // "category":"string", 
    // "subcategory":"string", 
    // "preexecute":"string", 
    // "executethis":"string", 
    // "postexecute":"string", 
    // "defaultrightclick":"inherit");

    executetest("addwidmaster", {
        "metadata.method": "actiondto",
        "wid": "rel_actiondto_adddto",
        "primarywid": "adddto",
        "secondarywid": "actiondto",
        "relationshiptype": "attributes"
    }, "", "");

    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "rel_rightclickdto_adddto",
        "primarywid": "adddto",
        "secondarywid": "rightclickdto",
        "relationshiptype": "attributes"
    }, "", "");

    executetest("executethis", {
        "addthis": "defaultrightclick",
        "metadata.method": "rightclickdto",
        "rightclickdto.0.displayname": "Open As Wid",
        "rightclickdto.0.preexecute": "setdtoforwid",
        "rightclickdto.0.executethis": "getwidmaster",
        "rightclickdto.1.displayname": "Open As json",
        "rightclickdto.0.preexecute": "setdtoforjson",
        "rightclickdto.1.executethis": "getwidmaster"
    }, "", "");
    // executetest("addwidmaster",{"wid":"defaultrightclick",
    //                          "metadata.method":"rightclickdto",
    //                          "rightclickdto.0.displayname":"Open As Wid",
    //                          "rightclickdto.0.preexecute":"setdtoforwid",
    //                          "rightclickdto.0.executethis":"getwidmaster",
    //                          "rightclickdto.1.displayname":"Open As json",
    //                          "rightclickdto.0.preexecute":"setdtoforjson",
    //                          "rightclickdto.1.executethis":"getwidmaster"}, "", "");


    executetest("executethis", {
        "addthis": "defaultaction",
        "metadata.method": "actiondto",
        "actiondto.0.displayname": "Open As Wid",
        "actiondto.0.preexecute": "setdtoforwid",
        "actiondto.0.executethis": "getwidmaster",
        "actiondto.1.displayname": "Open As json",
        "actiondto.0.preexecute": "setdtoforjson",
        "actiondto.1.executethis": "getwidmaster"
    }, "", "");
    // executetest("addwidmaster",{"wid":"defaultaction",
    //                          "metadata.method":"actiondto",
    //                          "actiondto.0.displayname":"Open As Wid",
    //                          "actiondto.0.preexecute":"setdtoforwid",
    //                          "actiondto.0.executethis":"getwidmaster",
    //                          "actiondto.1.displayname":"Open As json",
    //                          "actiondto.0.preexecute":"setdtoforjson",
    //                          "actiondto.1.executethis":"getwidmaster"}, "", "");

    executetest("addwidmaster", {
        "metadata.method": "palettedto",
        "wid": "palettedto",
        "widname": "string",
        "category": "string",
        "subcategory": "string"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "addfield",
        "wid": "addfield",
        "fieldname": "string",
        "editable": "string",
        "display": "string",
        "oneditactions": "string",
        "addfielddefault": "inherit"
    }, "", "");


    //create adddto relationships
    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "rel_actiondto_adddto",
        "primarywid": "adddto",
        "secondarywid": "actiondto"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "rel_palettedto_adddto",
        "primarywid": "adddto",
        "secondarywid": "palettedto"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "rel_addfield_adddto",
        "primarywid": "adddto",
        "secondarywid": "addfield"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "rel_gojsobject_adddto",
        "primarywid": "adddto",
        "secondarywid": "gojsobject"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "rel_linkrules_adddto",
        "primarywid": "adddto",
        "secondarywid": "linkrules"
    }, "", "");

    //create book and author dtos
    //sequenceObjList.push({"seq":"seq01","command.action":"add","wid":"booksdto","title":"string","pages":"string","metadata.method":"booksdto"});
    executetest("addwidmaster", {
        "metadata.method": "booksdto",
        "wid": "booksdto",
        "title": "string",
        "pages": "string"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "authordto",
        "name": "string",
        "age": "string",
        "booksdto": "onetomany",
        "adddto": "onetoone"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "relbooktoauthor",
        "primarywid": "authordto",
        "secondarywid": "booksdto"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "relationshipdto",
        "wid": "reladddtotoauthor",
        "primarywid": "authordto",
        "secondarywid": "adddto"
    }, "", "");

    //create a default addfield record
    executetest("addwidmaster", {
        "wid": "addfielddefault",
        "fieldname": "name",
        "display": "true",
        "editable": "true",
        "onreadactions": "none",
        "oneditactions": "pop_up_alert"
    }, "", "");

    //add some authors and books
    //executetest("debugon");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "startwid",
        "name": "start wid",
        "age": "00",
        "booksdto.title": "none",
        "booksdto.pages": "00"
    }, "", "");
    //executetest("debugoff");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "joe_jamison",
        "name": "Joe Jamison",
        "age": "32",
        "booksdto.title": "Hello World!",
        "booksdto.pages": "40"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "sarah_jones",
        "name": "Sarah Jones",
        "age": "40",
        "booksdto.title": "The Sands of Time",
        "booksdto.pages": "378"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "mike_williams",
        "name": "Mike Williams",
        "age": "36",
        "booksdto.title": "Attack on the Mainframe",
        "booksdto.pages": "600"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "jerry_stone",
        "name": "Jerry Stone",
        "age": "41",
        "booksdto.title": "Carpentry 101",
        "booksdto.pages": "120"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "elizabeth_heart",
        "name": "Elizabeth Heart",
        "age": "50",
        "booksdto.title": "The X Factor",
        "booksdto.pages": "300"
    }, "", "");

    //add system info (adddto info) to those author wids
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "startwid",
        "adddto.actiondto.action": "none",
        "adddto.palettedto.0.widname": "joe_jamison",
        "adddto.palettedto.0.category": "human",
        "adddto.palettedto.0.subcategory": "author",
        "adddto.addfield.fieldname": "name",
        "adddto.linkrules.linkclass": "1",
        "adddto.linkrules.min": "0",
        "adddto.linkrules.max": "10"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "joe_jamison",
        "adddto.actiondto.action": "{'color_screen':'blue'}",
        "adddto.palettedto.0.widname": "joe_jamison",
        "adddto.palettedto.0.category": "human",
        "adddto.palettedto.0.subcategory": "author",
        "adddto.palettedto.1.widname": "jessica_jamison",
        "adddto.palettedto.1.category": "human",
        "adddto.palettedto.1.subcategory": "wife",
        "adddto.palettedto.2.widname": "mary_morris",
        "adddto.palettedto.2.category": "human",
        "adddto.palettedto.2.subcategory": "sister",
        "adddto.addfield.fieldname": "name",
        "adddto.linkrules.linkclass": "1",
        "adddto.linkrules.min": "0",
        "adddto.linkrules.max": "10"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "sarah_jones",
        "adddto.actiondto.action": "{'color_screen':'red'}",
        "adddto.palettedto.0.widname": "sarah_jones",
        "adddto.palettedto.0.category": "human",
        "adddto.palettedto.0.subcategory": "author",
        "adddto.palettedto.1.widname": "james_jones",
        "adddto.palettedto.1.category": "human",
        "adddto.palettedto.1.subcategory": "husband",
        "adddto.addfield.fieldname": "name",
        "adddto.linkrules.linkclass": "1",
        "adddto.linkrules.min": "0",
        "adddto.linkrules.max": "10"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "mike_williams",
        "adddto.actiondto.action": "none",
        "adddto.palettedto.0.widname": "mike_williams",
        "adddto.palettedto.0.category": "human",
        "adddto.palettedto.0.subcategory": "author",
        "adddto.palettedto.1.widname": "mister_scruffy",
        "adddto.palettedto.1.category": "pet",
        "adddto.palettedto.1.subcategory": "dog",
        "adddto.palettedto.2.widname": "misses_fluffy",
        "adddto.palettedto.2.category": "pet",
        "adddto.palettedto.2.subcategory": "cat",
        "adddto.addfield.fieldname": "name",
        "adddto.linkrules.linkclass": "1",
        "adddto.linkrules.min": "0",
        "adddto.linkrules.max": "10"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "jerry_stone",
        "adddto.actiondto.action": "none",
        "adddto.palettedto.0.widname": "jerry_stone",
        "adddto.palettedto.0.category": "human",
        "adddto.palettedto.0.subcategory": "author",
        "adddto.palettedto.1.widname": "lynne_stone",
        "adddto.palettedto.1.category": "human",
        "adddto.palettedto.1.subcategory": "wife",
        "adddto.addfield.fieldname": "name",
        "adddto.linkrules.linkclass": "1",
        "adddto.linkrules.min": "0",
        "adddto.linkrules.max": "10"
    }, "", "");
    executetest("addwidmaster", {
        "metadata.method": "authordto",
        "wid": "elizabeth_heart",
        "adddto.actiondto.action": "{'play_sound':'trumpet.ogg'}",
        "adddto.palettedto.0.widname": "elizabeth_heart",
        "adddto.palettedto.0.category": "human",
        "adddto.palettedto.0.subcategory": "author",
        "adddto.addfield.fieldname": "name",
        "adddto.linkrules.linkclass": "1",
        "adddto.linkrules.min": "0",
        "adddto.linkrules.max": "10"
    }, "", "");
}

exports.luke122 = luke122 = function luke122() {
    //testclearstorage();

    executetest("addwidmaster", {
        "wid": "color1",
        "color": "chartruese"
    }, "", "");
    //executetest("addwidmaster",{"wid":"abcya"}, "", "");
    // executetest("addwidmaster",{"wid":"color2","color":"green"}, "", "");
    // executetest("addwidmaster",{"wid":"color3","color":"blue"}, "", "");
    // executetest("addwidmaster",{"wid":"myquery1","color":"green"}, "", "");
    // executetest("addwidmaster",{"wid":"myquery2","color":"red"}, "", "");
    // executetest("addwidmaster",{"wid":"myquery3","myquery1":"placeholder","myquery2":"placeholder"}, "", "");
    // executetest("addwidmaster",{"wid":"outputlanding1"}, "", "");
    // executetest("addwidmaster",{"wid":"outputlanding1"}, "", "");
    // executetest("MongoDataQuery", {"singlemongoquery":"myquery1"}, "outputlanding1", "");    
    //executetest("MongoDataQuery", {"multiplemongoquery":"myquery3"}, "outputlanding2", "");   
}
// {"wid":"joe_jamison"}
// {"metadata.method":"authordto","wid":"joe_jamison","name":"Joe Jamison","age":"32","booksdto.0.title":"Hello World!","booksdto.0.pages":"40","booksdto.0.metadata.method":"booksdto","booksdto.0.wid":"3","adddto.0.metadata.method":"adddto","adddto.0.wid":"23","adddto.0.actiondto.0.action":"{'color_screen':'blue'}","adddto.0.actiondto.0.metadata.method":"actiondto","adddto.0.actiondto.0.wid":"24","adddto.0.palettedto.0.widname":"joe_jamison","adddto.0.palettedto.0.category":"human","adddto.0.palettedto.0.subcategory":"author","adddto.0.palettedto.0.metadata.method":"palettedto","adddto.0.palettedto.0.wid":"26","adddto.0.palettedto.1.widname":"jessica_jamison","adddto.0.palettedto.1.category":"human","adddto.0.palettedto.1.subcategory":"wife","adddto.0.palettedto.1.metadata.method":"palettedto","adddto.0.palettedto.1.wid":"28","adddto.0.palettedto.2.widname":"mary_morris","adddto.0.palettedto.2.category":"human","adddto.0.palettedto.2.subcategory":"sister","adddto.0.palettedto.2.metadata.method":"palettedto","adddto.0.palettedto.2.wid":"30","adddto.0.addfield.0.fieldname":"name","adddto.0.addfield.0.metadata.method":"addfield","adddto.0.addfield.0.wid":"32","adddto.0.addfield.0.display":"true","adddto.0.addfield.0.editable":"true","adddto.0.addfield.0.onreadactions":"none","adddto.0.addfield.0.oneditactions":"pop_up_alert","adddto.0.linkrules.0.linkclass":"1","adddto.0.linkrules.0.min":"0","adddto.0.linkrules.0.max":"10","adddto.0.linkrules.0.metadata.method":"linkrules","adddto.0.linkrules.0.wid":"34"}'

// --

// {"wid":"joe_jamison", "command.dtotype":"palettedto", "command.convertmethod":"dtonum"}

// {"palettedto.0.widname":"joe_jamison","palettedto.0.category":"human","palettedto.0.subcategory":"author","palettedto.0.metadata.method":"palettedto","palettedto.0.wid":"26","palettedto.1.widname":"jessica_jamison","palettedto.1.category":"human","palettedto.1.subcategory":"wife","palettedto.1.metadata.method":"palettedto","palettedto.1.wid":"28","palettedto.2.widname":"mary_morris","palettedto.2.category":"human","palettedto.2.subcategory":"sister","palettedto.2.metadata.method":"palettedto","palettedto.2.wid":"30"}'

// --

// {"wid":"joe_jamison", "command.dtotype":"palettedto"}
// {"widname":"mary_morris","category":"human","subcategory":"sister","metadata.method":"palettedto","wid":"30"}'

// -- 
// {"wid":"joe_jamison", "command.dtotype":"palettedto", "command.convertmethod":"num"}

// {"0.widname":"joe_jamison","0.category":"human","0.subcategory":"author","0.metadata.method":"palettedto","0.wid":"26","1.widname":"jessica_jamison","1.category":"human","1.subcategory":"wife","1.metadata.method":"palettedto","1.wid":"28","2.widname":"mary_morris","2.category":"human","2.subcategory":"sister","2.metadata.method":"palettedto","2.wid":"30"}'

exports.visualversion = visualversion = function visualversion() {

    addToLocalStorage("name", "first_test");
    addToLocalStorage("description", "A very simple add/get with a verification of the results of the get");

    addToLocalStorage("assertion", {
        "metadata.method": "defaultdto",
        "wid": "color1",
        "color": "red"
    });
    addToLocalStorage("inbound", "myInbound");
    addToLocalStorage("actual", "myactual");

    addToLocalStorage("results", "Get results by executing test");
    addToLocalStorage("summary", "mysummery");

    executetest("addwidmaster", {
        "wid": "color1",
        "color": "red"
    }, "", "");
    executetest("getwidmaster", {
        "wid": "color1"
    }, "actual", "");

    logverify("this_test", "test_result", "actual", "", "", getFromLocalStorage("assertion"));
}


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

// Addwidmaster
// wid required for now

// Simple add/get wid
//  Done using wid seq2001

// Test addwid without  command.dtotype
// Test addwid with         command.dtotype

// Test addwid without  command.accesstoken
// Test addwid with         command.accesstoken

// Test addwid without  command.inherit
// Test addwid with         command.inherit

// Test addwid without  metadata.method
// Test addwid with         metadata.method

// Test addwid without  metadata.method
// Test addwid with         metadata.method

// Create wid using a single level dto
// Verify the get of the wid with that dto

// single level dto adding to same wid created with different dto
//  Planet has many moons, so it needs a moondto
//      A moondto could have name, size, color


// dual level
//  Planet has many moons, so it needs a moondto
//      A moondto could have name, size
//      A moon has many monsters, so it needs a monsterdto
//          A monsterdto could have color, number of claws
// A moon and moster do not share any parameter names.

// dual level same param
//  Planet has many moons, so it needs a moondto
//      A moondto could have name, size, color
//      A moon has many monsters, so it needs a monsterdto
//          A monsterdto could have color, number of claws
// Now the moon and monster can both have a color.

// dual <>
//  Get a listing of the moons orbiting planet x

// triple
//  Planet has many moons, so it needs a moondto
//      A moondto could have name, size, color
//      A moon has many monsters, so it needs a monsterdto
//          A monsterdto could have color, number of claws
//              A monster has many victims, so it needs a victimdto
//                  A victimdto could be gender, age    

// test onetoone
//  A country has a name and a capital
//      The capital has a name and population