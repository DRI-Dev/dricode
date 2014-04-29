// copyright (c) 2014 DRI
//make sure these functions work--copy to cody.js and test from node...create proof it works
//create commented future actions

//add cat subcat to all wids -- maybe at adddto level
//add gojrraw - at adddtolevel

//add whole gojs object to gojsraw, prove
//gojs, manually convert to dot, add, prove
//gojs as object, add, prove it got to all the locations

// proposed new structure, by createing commented out functoons, save defaults at the type of dto level

// JavaScript Document
customfn101 = function customfn103(inputWidgetObject, callback) {
//result = call function to read what is the wid/dto in property box
//alert('here');
return callback = {"message":"Message Box Test Result", "messagetype":"success"};
}

customfn102 = function customfn102(inputWidgetObject, callback) {
//result = call function to read what is the wid/dto in property box
//alert('here');
return {"dtotype":"","widname":"startwid","convertmethod":"wid","container":"first_wid_property_container"};
}

customfn104 = function customfn104(inputWidgetObject, callback) {
//result = call function to read what is the wid/dto in property box
//alert('here');
return {"dtotype":"","widname":"newwid","convertmethod":"wid","container":"first_wid_property_container"};
}

customfn103 = function customfn103(inputWidgetObject, callback) {
//result = call function to read what is the wid/dto in property box
//alert('here');
return result ={"dtotype":"palettedto","wid":'startwid',"tableid":"palate"};
}

exports.system_actions = system_actions = function system_actions(params, callback){
    //clearLocalStorage();
    createdtos(params, function (err, results) {
        proxyprinttodiv("createdtos --Done--", "", 99);
        
        startwidviewer(params, function (err, results) {
            proxyprinttodiv("startwidviewer --Done--", "", 99);
            
            createsampledata(params, function (err, results) {
                proxyprinttodiv("createsampledata --Done--", "", 99);
                
                createdefaultactions(params, function (err, results) {
                    proxyprinttodiv("createdefaultactions --Done--", "", 99);
                     var executeList = [
                        //{"executethis":"getwidmaster","wid":"startwid"}
                        {"executethis":"getwidmaster","wid":"elizabeth_heart"}
                    ];

                    execute(executeList, function (err, res) {
                        proxyprinttodiv('__-system-actions-__get wid elizabeth_heart', res, 99);
                        callback(err, res);
                    });
                    callback(err, results);
                });
            });
        });
    });
}

exports.createdtos = createdtos = function createdtos(params, callback) {
    // create dtos  
    //debuglevel=75;
    saveglobal("debugsubcat", "add");
    // saveglobal("debugname", "getwidmaster");
    var executeList = [ 
        {"executethis":"updatewid","metadata.method":"authordto","wid":"authordto","name":"string","age":"string","metadata.booksdto.type":"onetomany","metadata.adddto.type":"onetoone", "metadata.inherit":"defaultmasteractions"},
        {"executethis":"updatewid","metadata.method":"booksdto","wid":"booksdto","title":"string","pages":"string"},  
        {"executethis":"updatewid","metadata.method":"adddto","wid":"adddto","metadata.actiondto.type":"onetomany"},

        //{"executethis":"updatewid","metadata.method":"adddto","wid":"adddto","metadata.addfield.type":"onetomany","metadata.gojsobject.type":"onetoone","metadata.linkrules.type":"onetomany","metadata.actiondto.type":"onetomany"},
        // {"executethis":"updatewid","metadata.method":"addfield","wid":"addfield","fieldname":"string","editable":"string","display":"string","oneditactions":"string"},
        // {"executethis":"updatewid","metadata.method":"gojsobject","wid":"gojsobject","class":"string","linkFromPortIdProperty":"string","linkToPortIdProperty":"string","metadata.nodeDataArray.type":"onetomany","metadata.linkDataArray.type":"onetomany"}, 
        // {"executethis":"updatewid","metadata.method":"nodedataarray","wid":"nodedataarray", "key":"string", "loc":"string", "metadata.leftArray.type":"onetomany", "metadata.topArray.type":"onetomany", "metadata.bottomArray.type":"onetomany", "metadata.rightArray.type":"onetomany"},    
        // {"executethis":"updatewid","metadata.method":"leftarray","wid":"leftarray","class":"string","portColor":"string", "portId":"string"}, 
        // {"executethis":"updatewid","metadata.method":"toparray","wid":"toparray","class":"string","portColor":"string", "portId":"string"},
        // {"executethis":"updatewid","metadata.method":"bottomarray","wid":"bottomarray","portColor":"string", "portId":"string"},  
        // {"executethis":"updatewid","metadata.method":"rightarray","wid":"rightarray","portColor":"string", "portId":"string"},    
        // {"executethis":"updatewid","metadata.method":"linkdataarray","wid":"linkdataarray","from":"string", "to":"string", "fromPort":"string", "toPort":"string"},           
        // {"executethis":"updatewid","metadata.method":"linkrules","wid":"linkrules","linkclass":"string","min":"string","max":"string"},   
        {"executethis":"updatewid","metadata.method":"actiondto","wid":"actiondto","displayname":"string", "actiondescription":"string", "category":"string", "subcategory":"string", "addthis.preexecute":"string", "addthis.executethis":"string", "addthis.postexecute":"string"}
    ];

    execute(executeList, function (err, res) {
        console.log(' >>> final response after create dtos executeList >>> ' + JSON.stringify(res));
        // create relationships
        executeList = [     
        {"linktype": "onetomany", "executethis":"updatewid","metadata.method":"relationshipdto","wid":"relbooktoauthor","primarywid":"authordto","secondarywid":"booksdto", "relationshiptype":"attributes"},
        {"linktype": "onetoone", "executethis":"updatewid","metadata.method":"relationshipdto","wid":"reladddtotoauthor","primarywid":"authordto","secondarywid":"adddto","relationshiptype":"attributes"},
        // {"linktype": "onetomany", "executethis":"updatewid","metadata.method":"relationshipdto","wid":"gojsrel1","primarywid":"gojsobject","secondarywid":"nodedataarray","relationshiptype":"attributes"},    
        // {"linktype": "onetomany", "executethis":"updatewid","metadata.method":"relationshipdto","wid":"gojsrel2","primarywid":"gojsobject","secondarywid":"linkdataarray","relationshiptype":"attributes"},    
        // {"linktype": "onetomany", "executethis":"updatewid","metadata.method":"relationshipdto","wid":"gojsrel3","primarywid":"nodedataarray","secondarywid":"leftarray","relationshiptype":"attributes"},
        // {"linktype": "onetomany", "executethis":"updatewid","metadata.method":"relationshipdto","wid":"gojsrel4","primarywid":"nodedataarray","secondarywid":"toparray","relationshiptype":"attributes"},
        // {"linktype": "onetomany", "executethis":"updatewid","metadata.method":"relationshipdto","wid":"gojsrel5","primarywid":"nodedataarray","secondarywid":"bottomarray","relationshiptype":"attributes"},
        // {"linktype": "onetomany", "executethis":"updatewid","metadata.method":"relationshipdto","wid":"gojsrel6","primarywid":"nodedataarray","secondarywid":"rightarray","relationshiptype":"attributes"},
        // {"linktype": "onetomany", "executethis":"updatewid","metadata.method":"relationshipdto","wid":"rel_addfield_adddto","primarywid":"adddto","secondarywid":"addfield","relationshiptype":"attributes"},
        // {"linktype": "onetomany", "executethis":"updatewid","metadata.method":"relationshipdto","wid":"rel_gojsobject_adddto","primarywid":"adddto","secondarywid":"gojsobject","relationshiptype":"attributes"},
        // {"linktype": "onetomany", "executethis":"updatewid","metadata.method":"relationshipdto","wid":"rel_linkrules_adddto","primarywid":"adddto","secondarywid":"linkrules","relationshiptype":"attributes"},
        {"linktype": "onetomany", "executethis":"updatewid","metadata.method":"relationshipdto","wid":"rel_actiondto_adddto","primarywid":"adddto","secondarywid":"actiondto","relationshiptype":"attributes"}

       ];

    // saveglobal("debugname", "getwidmongo");
    // debuglevel=10;
    // saveglobal("debugcolor", 1);
    // debugindent=1;
            saveglobal("debugcolor", 1);
        execute(executeList, function (err, res) {
            proxyprinttodiv("results from add=", res, 99);   
            console.log(' >>> final response after create createsampledata executeList >>> ' + JSON.stringify(res));
            // saveglobal("debugname", "aggressivedto");
            //debuglevel=10;
            //aggressivedto("authordto", "", 10, function (err, res) {
            //aggressivedto("elizabeth_heart", "", 10, function (err, res) {
            //getWidMongo("authordto", "", "", "", "", 10, function (err, res) {
            // saveglobal("debugname", "getwidmongo");
            getwidmaster({"wid":"authordto", "command.convertmethod":"dto"}, function (err, res) {
                proxyprinttodiv("results from get=", res, 99);   
            callback({}, res);
            })
        });
    });
    }     


exports.startwidviewer = startwidviewer = function startwidviewer(params, callback){
//exports.addmoreactions = addmoreactions = function addmoreactions(params, callback) {
  proxyprinttodiv("arrived to startwidviewer", "", 99);   
    var executeList = [ 
        {            
            "executethis":"addwidmaster",
            "wid":"startwid",
            "metadata.method":"authordto",
            "name":"start wid",
            "age":"00",
            "booksdto.title":"none",
            "booksdto.pages":"00",
            "adddto.actiondto.widname":"startwid",
            "adddto.actiondto.displayname":"Process Blur",
            "adddto.actiondto.actiondescription":"string",
            "adddto.actiondto.category":"blur",
            "adddto.actiondto.subcategory":"name",
            "adddto.actiondto.addthis.prexecute":"",
            "adddto.actiondto.addthis.executethis":"fieldrequired",
            "adddto.actiondto.addthis.postexecute":"getwidmaster"
        }
        //,
        // {            
        //     "executethis":"addwidmaster",
        //     "wid":"startwid",
        //     "metadata.method":"authordto",
        //     "adddto.actiondto.widname":"startwid",
        //     "adddto.actiondto.displayname":"Open As Json",
        //     "adddto.actiondto.actiondescription":"string",
        //     "adddto.actiondto.category":"string",
        //     "adddto.actiondto.subcategory":"string",
        //     "adddto.actiondto.convertmethod":"json",
        //     "adddto.actiondto.addthis.prexecute":"",
        //     "adddto.actiondto.addthis.executethis":"open_as_wid",
        //     "adddto.actiondto.addthis.postexecute":"getwidmaster"
        // },
        // {
        //     "executethis":"addwidmaster",
        //     "wid":"startwid",
        //     "metadata.method":"authordto",
        //     "adddto.actiondto.displayname":"Genrate Propertybox",
        //     "adddto.actiondto.widname":"startwid",
        //     "adddto.actiondto.actiondescription":"string",
        //     "adddto.actiondto.category":"Button",
        //     "adddto.actiondto.subcategory":"PropList",
        //     "adddto.actiondto.addthis.prexecute":"customfn102",
        //     "adddto.actiondto.addthis.executethis":"populatepropertybox",
        //     "adddto.actiondto.addthis.postexecute":""
        // },
        // {
        //     "executethis":"addwidmaster",
        //     "wid":"startwid",
        //     "metadata.method":"authordto",
        //     "adddto.actiondto.displayname":"Generate Widlist",
        //     "adddto.actiondto.widname":"startwid",
        //     "adddto.actiondto.actiondescription":"string",
        //     "adddto.actiondto.category":"Button",
        //     "adddto.actiondto.subcategory":"PropList",
        //     "adddto.actiondto.addthis.prexecute":"customfn103",
        //     "adddto.actiondto.addthis.executethis":"populatelist",
        //     "adddto.actiondto.addthis.postexecute":""
        // },
        // {
        //     "executethis":"addwidmaster",
        //     "wid":"startwid",
        //     "metadata.method":"authordto",
        //     "adddto.actiondto.displayname":"Open As Wid",
        //     "adddto.actiondto.widname":"startwid",
        //     "adddto.actiondto.actiondescription":"string",
        //     "adddto.actiondto.category":"string",
        //     "adddto.actiondto.subcategory":"string",
        //     "adddto.actiondto.addthis.prexecute":"",
        //     "adddto.actiondto.addthis.executethis":"open_as_wid",
        //     "adddto.actiondto.addthis.postexecute":"getwidmaster"
        // },
        // {
        //     "executethis":"addwidmaster",
        //     "wid":"startwid",
        //     "metadata.method":"authordto",
        //     "adddto.actiondto.displayname":"Process Blur",
        //     "adddto.actiondto.widname":"startwid",
        //     "adddto.actiondto.actiondescription":"string",
        //     "adddto.actiondto.category":"blur",
        //     "adddto.actiondto.subcategory":"age",
        //     "adddto.actiondto.addthis.prexecute":"setdtoforwid",
        //     "adddto.actiondto.addthis.executethis":"fieldrequired",
        //     "adddto.actiondto.addthis.postexecute":"getwidmaster"
        // },
        // {
        //     "executethis":"addwidmaster",
        //     "wid":"startwid",
        //     "metadata.method":"authordto",
        //     "adddto.actiondto.displayname":"Process Blur",
        //     "adddto.actiondto.widname":"startwid",
        //     "adddto.actiondto.actiondescription":"string",
        //     "adddto.actiondto.category":"blur",
        //     "adddto.actiondto.subcategory":"booksdto",
        //     "adddto.actiondto.addthis.prexecute":"setdtoforwid",
        //     "adddto.actiondto.addthis.executethis":"fieldrequired",
        //     "adddto.actiondto.addthis.postexecute":"getwidmaster"
        // }



        // {
        //     "executethis":"addwidmaster",
        //     "wid":"startwid",
        //     "metadata.method":"authordto",
        //     "adddto.actiondto.displayname":"Process Blur",
        //     "adddto.actiondto.widname":"startwid",
        //     "adddto.actiondto.actiondescription":"string",
        //     "adddto.actiondto.category":"blur",
        //     "adddto.actiondto.subcategory":"adddto",
        //     "adddto.actiondto.addthis.prexecute":"setdtoforwid",
        //     "adddto.actiondto.addthis.executethis":"fieldrequired",
        //     "adddto.actiondto.addthis.postexecute":"getwidmaster"
        // }
        // {
        //     "executethis":"addwidmaster",
        //     "wid":"startwid",
        //     "metadata.method":"authordto",
        //     "adddto.actiondto.displayname":"New",
        //     "adddto.actiondto.widname":"startwid",
        //     "adddto.actiondto.actiondescription":"string",
        //     "adddto.actiondto.category":"Button",
        //     "adddto.actiondto.subcategory":"Canvas",
        //     "adddto.actiondto.addthis.prexecute":"customfn104",
        //     "adddto.actiondto.addthis.executethis":"populatepropertybox",
        //     "adddto.actiondto.addthis.postexecute":"getwidmaster"
        // }
        // {
        //     "executethis":"addwidmaster",
        //     "wid":"startwid",
        //     "metadata.method":"authordto",
        //     "adddto.actiondto.displayname":"Load",
        //     "adddto.actiondto.widname":"startwid",
        //     "adddto.actiondto.actiondescription":"string",
        //     "adddto.actiondto.category":"Button",
        //     "adddto.actiondto.subcategory":"Canvas",
        //     "adddto.actiondto.addthis.prexecute":"getwidcopy",
        //     "adddto.actiondto.addthis.executethis":"displayall",
        //     "adddto.actiondto.addthis.postexecute":"getwidmaster"
        // },
        // {
        //     "executethis":"addwidmaster",
        //     "wid":"startwid",
        //     "metadata.method":"authordto",
        //     "adddto.actiondto.displayname":"Add Row",
        //     "adddto.actiondto.widname":"startwid",
        //     "adddto.actiondto.actiondescription":"string",
        //     "adddto.actiondto.category":"Button",
        //     "adddto.actiondto.subcategory":"Canvas",
        //     "adddto.actiondto.addthis.prexecute":"",
        //     "adddto.actiondto.addrow":"displayall",
        //     "adddto.actiondto.addthis.postexecute":""
        // },
        // {
        //     "executethis":"addwidmaster",
        //     "wid":"startwid",
        //     "metadata.method":"authordto",
        //     "adddto.actiondto.displayname":"Save",
        //     "adddto.actiondto.widname":"startwid",
        //     "adddto.actiondto.actiondescription":"string",
        //     "adddto.actiondto.category":"Button",
        //     "adddto.actiondto.subcategory":"Canvas",
        //     "adddto.actiondto.addthis.prexecute":"",
        //     "adddto.actiondto.addthis.executethis":"savepropertybox",
        //     "adddto.actiondto.addthis.postexecute":"updatewid"
        // },
        // {
        //     "executethis":"addwidmaster",
        //     "wid":"startwid",
        //     "metadata.method":"authordto",
        //     "adddto.actiondto.displayname":"Compile",
        //     "adddto.actiondto.widname":"startwid",
        //     "adddto.actiondto.actiondescription":"string",
        //     "adddto.actiondto.category":"Button",
        //     "adddto.actiondto.subcategory":"Canvas",
        //     "adddto.actiondto.addthis.prexecute":"",
        //     "adddto.actiondto.addthis.executethis":"",
        //     "adddto.actiondto.addthis.postexecute":""
        // },
        // {
        //     "executethis":"addwidmaster",
        //     "wid":"startwid",
        //     "metadata.method":"authordto",
        //     "adddto.actiondto.displayname":"Children",
        //     "adddto.actiondto.widname":"startwid",
        //     "adddto.actiondto.actiondescription":"string",
        //     "adddto.actiondto.category":"Button",
        //     "adddto.actiondto.subcategory":"PropList",
        //     "adddto.actiondto.addthis.prexecute":"getlistinfo",
        //     "adddto.actiondto.addthis.executethis":"getlistobject",
        //     "adddto.actiondto.addthis.postexecute":"updatewid"
        // },
        // {
        //     "executethis":"addwidmaster",
        //     "wid":"startwid",
        //     "metadata.method":"authordto",
        //     "adddto.actiondto.displayname":"Test Message Box",
        //     "adddto.actiondto.widname":"startwid",
        //     "adddto.actiondto.actiondescription":"string",
        //     "adddto.actiondto.category":"Button",
        //     "adddto.actiondto.subcategory":"PropList",
        //     "adddto.actiondto.addthis.prexecute":"customfn101",
        //     "adddto.actiondto.addthis.executethis":"populatemessage",
        //     "adddto.actiondto.addthis.postexecute":""
        // }
    ];
	
    proxyprinttodiv("startwid=BEFORE", executeList, 99); 
    execute(executeList, function (err, res) {
        proxyprinttodiv("startwid=AFTER", "", 99); 
    
    
        // saveglobal("debugname", "getwidmongo");
        //debuglevel=38;
        execute({"executethis":"getwidmaster","wid":"startwid"}, function (err, res) {
			proxyprinttodiv("startwid=", res, 99);   
            callback({}, res);
        });
    });
}


exports.createsampledata = createsampledata = function createsampledata(params, callback) {
	var executeList = [
        {"executethis":"addwidmaster","metadata.method":"authordto","wid":"joe_jamison","name":"Joe Jamison","age":"32","booksdto.title":"Hello World!","booksdto.pages":"40"},
        {"executethis":"addwidmaster","metadata.method":"authordto","wid":"sarah_jones","name":"Sarah Jones","age":"40","booksdto.title":"The Sands of Time","booksdto.pages":"378"},
        {"executethis":"addwidmaster","metadata.method":"authordto","wid":"mike_williams","name":"Mike Williams","age":"36","booksdto.title":"Attack on the Mainframe","booksdto.pages":"600"},
        {"executethis":"addwidmaster","metadata.method":"authordto","wid":"jerry_stone","name":"Jerry Stone","age":"41","booksdto.title":"Carpentry 101","booksdto.pages":"120"},
        {"executethis":"addwidmaster","metadata.method":"authordto","wid":"elizabeth_heart","name":"Elizabeth Heart","age":"50","booksdto.title":"The X Factor","booksdto.pages":"300"},
        {"executethis":"getwidmaster","wid":"elizabeth_heart"}
	];

	execute(executeList, function (err, res) {
        proxyprinttodiv("createsampledata=", res, 99)
        callback({}, res);
    });
}

exports.createdefaultactions = createdefaultactions = function createdefaultactions(params, callback) {
    var executeList = [
	// {

    //    // defaultadddtoactions
    //    // default actions added at adddto
    //            "executethis":"addwidmaster",
    //            "wid":"defaultadddtoactions",
    //            "metadata.method":"adddto",
    //            //"command.dtotype":"actiondto",
    //            "displayname":"5Open As Wid",
    //            "actiondescription":"desc5", 
    //            "category":"button",
    //            "subcategory":"o1",
    //            "addthis.preexecute":"setdtoforwid",
    //            "addthis.executethis":"getwidmaster",
    //            "addthis.postexecute":"getwidmaster"
    //    },
 
    // defaultauthordtoactions
    // default actions added at authordto level
    // {       
    //     "executethis":"addwidmaster",
    //     "wid":"defaultauthordtoactions",
    //     "metadata.method":"authordto",
    //     "command.dtotype":"actiondto",
    //     "displayname":"6Open As Wid",
    //     "actiondescription":"desc6", 
    //     "category":"button",
    //     "subcategory":"o1",
    //     "addthis.preexecute":"setdtoforwid",
    //     "addthis.executethis":"getwidmaster",
    //     "addthis.postexecute":"getwidmaster"
    // },
    // defaultmasteractions
  //   {
		// "executethis":"addwidmaster",
		// "wid": "defaultmasteractions",
		// "metadata.method": "actiondto",
		// "widname": "startwid",
		// "displayname": "1 Process Blur 111- defaultmasteraction",
		// "actiondescription": "string",
		// "category": "blur",
		// "subcategory": "name",
		// "addthis.preexecute": "",
		// "addthis.executethis": "fieldrequired",
		// "addthis.postexecute": "getwidmaster",
  //   },{
  //       "executethis":"addwidmaster",
  //       "wid": "defaultmasteractions",
  //       "metadata.method": "actiondto",
		// "widname": "startwid",
		// "displayname": "2 Open As Json 222- defaultmasteractions",
		// "actiondescription": "string",
		// "category": "string",
		// "subcategory": "string",
		// "addthis.preexecute": "",
		// "addthis.executethis": "open_as_wid",
		// "addthis.postexecute": "getwidmaster",
  //   },
    {
        "executethis":"addwidmaster",
        "wid": "defaultmasteractions",
        "metadata.method": "actiondto",		
		"widname": "startwid",
		"displayname": "Generate Children 333- defaultmasteractions",
		"actiondescription": "string",
		"category": "Button",
		"subcategory": "PropList",
		"addthis.preexecute": "getselectedwid",
		"addthis.executethis": "generatechildren",
		"addthis.postexecute": "populatelist"
	},
        //{"executethis":"getwidmaster","wid":"defaultadddtoactions"},
        //{"executethis":"getwidmaster","wid":"defaultauthordtoactions"},
        //{"executethis":"getwidmaster","wid":"defaultmasteractions"},
        {"executethis":"getwidmaster","wid":"startwid"}
	];
	execute(executeList, function (err, res) {
        proxyprinttodiv("add defaults res", res, 99);  
        // proxyprinttodiv("defaultadddtoactions", res, 99);   
        proxyprinttodiv("add defaults startwid", res[1], 99);   
        // proxyprinttodiv("defaultauthordtoactions", res[4], 99); 
        // proxyprinttodiv("defaultmasteractions", res[5], 99); 
        //proxyprinttodiv("startwid", res[6], 99); 
        console.log(' >>> final response of executeList >>> ' + JSON.stringify(res));
        params = {'test':'PASS'};
        callback({}, res);
    });

        // params={'test':'PASS'};
        // callback({},params)
        
}

// resutls from default master actions 2/2 
            // "wid": "defaultmasteractions",
            // "metadata.method": "actiondto",

            // "adddto.actiondto.0.widname": "startwid",
            // "adddto.actiondto.0.displayname": "1 Process Blur 111",
            // "adddto.actiondto.0.actiondescription": "string",
            // "adddto.actiondto.0.category": "blur",
            // "adddto.actiondto.0.subcategory": "name",
            // "adddto.actiondto.0.preexecute": "",
            // "adddto.actiondto.0.executethis": "fieldrequired",
            // "adddto.actiondto.0.postexecute": "getwidmaster",

            // "adddto.actiondto.1.widname": "startwid",
            // "adddto.actiondto.1.displayname": "2 Open As Json 222",
            // "adddto.actiondto.1.actiondescription": "string",
            // "adddto.actiondto.1.category": "string",
            // "adddto.actiondto.1.subcategory": "string",
            // "adddto.actiondto.1.preexecute": "",
            // "adddto.actiondto.1.executethis": "open_as_wid",
            // "adddto.actiondto.1.postexecute": "getwidmaster",

            // "adddto.actiondto.2.widname": "startwid",
            // "adddto.actiondto.2.displayname": "Generate Children 333",
            // "adddto.actiondto.2.actiondescription": "string",
            // "adddto.actiondto.2.category": "Button",
            // "adddto.actiondto.2.subcategory": "PropList",
            // "adddto.actiondto.2.preexecute": "getselectedwid",
            // "adddto.actiondto.2.executethis": "generatechildren",
            // "adddto.actiondto.2.postexecute": "populatelist"

            // "wid": "defaultauthordtoactions",
            // "metadata.method": "authordto",
            // "adddto.actiondto.0.widname": "startwid",
            // "adddto.actiondto.0.displayname": "1 Process Blur 111",
            // "adddto.actiondto.0.actiondescription": "string",
            // "adddto.actiondto.0.category": "blur",
            // "adddto.actiondto.0.subcategory": "name",
            // "adddto.actiondto.0.preexecute": "",
            // "adddto.actiondto.0.executethis": "fieldrequired",
            // "adddto.actiondto.0.postexecute": "getwidmaster",
            // "adddto.actiondto.1.widname": "startwid",
            // "adddto.actiondto.1.displayname": "2 Open As Json 222",
            // "adddto.actiondto.1.actiondescription": "string",
            // "adddto.actiondto.1.category": "string",
            // "adddto.actiondto.1.subcategory": "string",
            // "adddto.actiondto.1.preexecute": "",
            // "adddto.actiondto.1.executethis": "open_as_wid",
            // "adddto.actiondto.1.postexecute": "getwidmaster",
            // "adddto.actiondto.2.widname": "startwid",
            // "adddto.actiondto.2.displayname": "Generate Children 333",
            // "adddto.actiondto.2.actiondescription": "string",
            // "adddto.actiondto.2.category": "Button",
            // "adddto.actiondto.2.subcategory": "PropList",
            // "adddto.actiondto.2.preexecute": "getselectedwid",
            // "adddto.actiondto.2.executethis": "generatechildren",
            // "adddto.actiondto.2.postexecute": "populatelist"
            // "adddto.wid": "61",
            // "adddto.metadata.method": "adddto",
            // "adddto.gojsobject.nodedataarray.metadata.rightArray.type.displayname": "6Open As Wid",
            // "adddto.gojsobject.nodedataarray.metadata.rightArray.type.actiondescription": "desc6",
            // "adddto.gojsobject.nodedataarray.metadata.rightArray.type.category": "button",
            // "adddto.gojsobject.nodedataarray.metadata.rightArray.type.subcategory": "o1",
            // "adddto.gojsobject.wid": "62",
            // "adddto.gojsobject.metadata.method": "gojsobject",
            // "adddto.gojsobject.nodedataarray.metadata.rightArray.type.preexecute": "setdtoforwid",
            // "adddto.gojsobject.nodedataarray.metadata.rightArray.type.executethis": "getwidmaster",
            // "adddto.gojsobject.nodedataarray.metadata.rightArray.type.postexecute": "getwidmaster",
            // "gojsobject.nodedataarray.metadata.rightArray.type.displayname": "5Open As Wid",
            // "gojsobject.nodedataarray.metadata.rightArray.type.actiondescription": "desc5",
            // "gojsobject.nodedataarray.metadata.rightArray.type.category": "button",
            // "gojsobject.nodedataarray.metadata.rightArray.type.subcategory": "o1",
            // "gojsobject.wid": "59",
            // "gojsobject.metadata.method": "gojsobject",
            // "gojsobject.nodedataarray.metadata.rightArray.type.preexecute": "setdtoforwid",
            // "gojsobject.nodedataarray.metadata.rightArray.type.executethis": "getwidmaster",
            // "gojsobject.nodedataarray.metadata.rightArray.type.postexecute": "getwidmaster",

            // "wid": "defaultadddtoactions",
            // "metadata.method": "adddto",
            // "adddto.actiondto.0.widname": "startwid",
            // "adddto.actiondto.0.displayname": "1 Process Blur 111",
            // "adddto.actiondto.0.actiondescription": "string",
            // "adddto.actiondto.0.category": "blur",
            // "adddto.actiondto.0.subcategory": "name",
            // "adddto.actiondto.0.preexecute": "",
            // "adddto.actiondto.0.executethis": "fieldrequired",
            // "adddto.actiondto.0.postexecute": "getwidmaster",
            // "adddto.actiondto.1.widname": "startwid",
            // "adddto.actiondto.1.displayname": "2 Open As Json 222",
            // "adddto.actiondto.1.actiondescription": "string",
            // "adddto.actiondto.1.category": "string",
            // "adddto.actiondto.1.subcategory": "string",
            // "adddto.actiondto.1.preexecute": "",
            // "adddto.actiondto.1.executethis": "open_as_wid",
            // "adddto.actiondto.1.postexecute": "getwidmaster",
            // "adddto.actiondto.2.widname": "startwid",
            // "adddto.actiondto.2.displayname": "Generate Children 333",
            // "adddto.actiondto.2.actiondescription": "string",
            // "adddto.actiondto.2.category": "Button",
            // "adddto.actiondto.2.subcategory": "PropList",
            // "adddto.actiondto.2.preexecute": "getselectedwid",
            // "adddto.actiondto.2.executethis": "generatechildren",
            // "adddto.actiondto.2.postexecute": "populatelist"
            // "gojsobject.nodedataarray.metadata.rightArray.type.displayname": "5Open As Wid",
            // "gojsobject.nodedataarray.metadata.rightArray.type.actiondescription": "desc5",
            // "gojsobject.nodedataarray.metadata.rightArray.type.category": "button",
            // "gojsobject.nodedataarray.metadata.rightArray.type.subcategory": "o1",
            // "gojsobject.wid": "59",
            // "gojsobject.metadata.method": "gojsobject",
            // "gojsobject.nodedataarray.metadata.rightArray.type.preexecute": "setdtoforwid",
            // "gojsobject.nodedataarray.metadata.rightArray.type.executethis": "getwidmaster",
            // "gojsobject.nodedataarray.metadata.rightArray.type.postexecute": "getwidmaster",



exports.getselectedwid = getselectedwid = function getselectedwid(inputWidgetObject, callback) {
    return {"metadata.method":"relationshipdto","wid":"relbooktoauthor","primarywid":"authordto","secondarywid":"booksdto", "relationshiptype":"attributes"};
}

exports.generatechildren = generatechildren = function generatechildren(inputWidgetObject, callback) {

    var querylist = [{
        "executethis": "querywid",
        "command.results" : "queryresult",
        "rawmongoquery": {
            "$or": [{
                "primarywid": inputWidgetObject["wid"]
            }]
        }
    }];
    execute(querylist, function (err, res) {

        callback(res['queryresult']);
    });
}

/*
exports.addmoreactions = addmoreactions = function addmoreactions(params, callback) {
    executetest("addwidmaster",
{"metadata.method":"authordto",
"wid":"startwid",
"adddto.actiondto.0.widname":"startwid",
"adddto.actiondto.0.displayname":"Process Blur",
"adddto.actiondto.0.actiondescription":"string",
"adddto.actiondto.0.category":"blur",
"adddto.actiondto.0.subcategory":"name",
"adddto.actiondto.0.dtotype":"",
"adddto.actiondto.0.convertmethod":"wid",
"adddto.actiondto.0.addthis.prexecute":"",
"adddto.actiondto.0.addthis.executethis":"fieldrequired",
"adddto.actiondto.0.addthis.postexecute":"getwidmaster",

"adddto.actiondto.1.widname":"startwid",
"adddto.actiondto.1.displayname":"Open As Json",
"adddto.actiondto.1.actiondescription":"string",
"adddto.actiondto.1.category":"string",
"adddto.actiondto.1.subcategory":"string",
"adddto.actiondto.1.dtotype":"",
"adddto.actiondto.1.convertmethod":"json",
"adddto.actiondto.1.addthis.prexecute":"",
"adddto.actiondto.1.addthis.executethis":"open_as_wid",
"adddto.actiondto.1.addthis.postexecute":"getwidmaster",

"adddto.actiondto.2.displayname":"Open As Wid",
"adddto.actiondto.2.widname":"startwid",
"adddto.actiondto.2.actiondescription":"string",
"adddto.actiondto.2.category":"string",
"adddto.actiondto.2.subcategory":"string",
"adddto.actiondto.2.dtotype":"",
"adddto.actiondto.2.convertmethod":"wid",
"adddto.actiondto.2.addthis.prexecute":"",
"adddto.actiondto.2.addthis.executethis":"open_as_wid",
"adddto.actiondto.2.addthis.postexecute":"getwidmaster",

"adddto.actiondto.3.displayname":"Process Blur",
"adddto.actiondto.3.widname":"startwid",
"adddto.actiondto.3.actiondescription":"string",
"adddto.actiondto.3.category":"blur",
"adddto.actiondto.3.subcategory":"age",
"adddto.actiondto.3.dtotype":"",
"adddto.actiondto.3.convertmethod":"wid",
"adddto.actiondto.3.addthis.prexecute":"setdtoforwid",
"adddto.actiondto.3.addthis.executethis":"fieldrequired",
"adddto.actiondto.3.addthis.postexecute":"getwidmaster",

"adddto.actiondto.4.displayname":"Process Blur",
"adddto.actiondto.4.widname":"startwid",
"adddto.actiondto.4.actiondescription":"string",
"adddto.actiondto.4.category":"blur",
"adddto.actiondto.4.subcategory":"booksdto",
"adddto.actiondto.4.dtotype":"",
"adddto.actiondto.4.convertmethod":"wid",
"adddto.actiondto.4.addthis.prexecute":"setdtoforwid",
"adddto.actiondto.4.addthis.executethis":"fieldrequired",
"adddto.actiondto.4.addthis.postexecute":"getwidmaster",

"adddto.actiondto.displayname":"Process Blur",
"adddto.actiondto.5.widname":"startwid",
"adddto.actiondto.5.actiondescription":"string",
"adddto.actiondto.5.category":"blur",
"adddto.actiondto.5.subcategory":"adddto",
"adddto.actiondto.5.dtotype":"",
"adddto.actiondto.5.convertmethod":"wid",
"adddto.actiondto.5.addthis.prexecute":"setdtoforwid",
"adddto.actiondto.5.addthis.executethis":"fieldrequired",
"adddto.actiondto.5.addthis.postexecute":"getwidmaster",

"adddto.actiondto.6.displayname":"New",
"adddto.actiondto.6.widname":"startwid",
"adddto.actiondto.6.actiondescription":"string",
"adddto.actiondto.6.category":"Button",
"adddto.actiondto.6.subcategory":"Canvas",
"adddto.actiondto.6.dtotype":"",
"adddto.actiondto.6.convertmethod":"wid",
"adddto.actiondto.6.addthis.prexecute":"customfn104",
"adddto.actiondto.6.addthis.executethis":"populatepropertybox",
"adddto.actiondto.6.addthis.postexecute":"getwidmaster",

"adddto.actiondto.7.displayname":"Load",
"adddto.actiondto.7.widname":"startwid",
"adddto.actiondto.7.actiondescription":"string",
"adddto.actiondto.7.category":"Button",
"adddto.actiondto.7.subcategory":"Canvas",
"adddto.actiondto.7.dtotype":"",
"adddto.actiondto.7.convertmethod":"wid",
"adddto.actiondto.7.addthis.prexecute":"getwidcopy",
"adddto.actiondto.7.addthis.executethis":"displayall",
"adddto.actiondto.7.addthis.postexecute":"getwidmaster",

"adddto.actiondto.8.displayname":"Add Row",
"adddto.actiondto.8.widname":"startwid",
"adddto.actiondto.8.actiondescription":"string",
"adddto.actiondto.8.category":"Button",
"adddto.actiondto.8.subcategory":"Canvas",
"adddto.actiondto.8.dtotype":"",
"adddto.actiondto.8.convertmethod":"wid",
"adddto.actiondto.8.addthis.prexecute":"",
"adddto.actiondto.8.addrow":"displayall",
"adddto.actiondto.8.addthis.postexecute":"",

"adddto.actiondto.9.displayname":"Save",
"adddto.actiondto.9.widname":"startwid",
"adddto.actiondto.9.actiondescription":"string",
"adddto.actiondto.9.category":"Button",
"adddto.actiondto.9.subcategory":"Canvas",
"adddto.actiondto.9.dtotype":"",
"adddto.actiondto.9.convertmethod":"wid",
"adddto.actiondto.9.addthis.prexecute":"",
"adddto.actiondto.9.addthis.executethis":"savepropertybox",
"adddto.actiondto.9.addthis.postexecute":"updatewid",

"adddto.actiondto.10.displayname":"Compile",
"adddto.actiondto.10.widname":"startwid",
"adddto.actiondto.10.actiondescription":"string",
"adddto.actiondto.10.category":"Button",
"adddto.actiondto.10.subcategory":"Canvas",
"adddto.actiondto.10.dtotype":"",
"adddto.actiondto.10.convertmethod":"",
"adddto.actiondto.10.addthis.prexecute":"",
"adddto.actiondto.10.addthis.executethis":"",
"adddto.actiondto.10.addthis.postexecute":"",

"adddto.actiondto.11.displayname":"Children",
"adddto.actiondto.11.widname":"startwid",
"adddto.actiondto.11.actiondescription":"string",
"adddto.actiondto.11.category":"Button",
"adddto.actiondto.11.subcategory":"PropList",
"adddto.actiondto.11.dtotype":"",
"adddto.actiondto.11.convertmethod":"wid",
"adddto.actiondto.11.addthis.prexecute":"getlistinfo",
"adddto.actiondto.11.addthis.executethis":"getlistobject",
"adddto.actiondto.11.addthis.postexecute":"updatewid",

"adddto.actiondto.12.displayname":"Test Message Box",
"adddto.actiondto.12.widname":"startwid",
"adddto.actiondto.12.actiondescription":"string",
"adddto.actiondto.12.category":"Button",
"adddto.actiondto.12.subcategory":"PropList",
"adddto.actiondto.12.dtotype":"",
"adddto.actiondto.12.convertmethod":"wid",
"adddto.actiondto.12.addthis.prexecute":"customfn101",
"adddto.actiondto.12.addthis.executethis":"populatemessage",
"adddto.actiondto.12.addthis.postexecute":"",

"adddto.actiondto.13.displayname":"Genrate Propertybox",
"adddto.actiondto.13.widname":"startwid",
"adddto.actiondto.13.actiondescription":"string",
"adddto.actiondto.13.category":"Button",
"adddto.actiondto.13.subcategory":"PropList",
"adddto.actiondto.13.dtotype":"",
"adddto.actiondto.13.convertmethod":"wid",
"adddto.actiondto.13.addthis.prexecute":"customfn102",
"adddto.actiondto.13.addthis.executethis":"populatepropertybox",
"adddto.actiondto.13.addthis.postexecute":"",

"adddto.actiondto.14.displayname":"Generate Widlist",
"adddto.actiondto.14.widname":"startwid",
"adddto.actiondto.14.actiondescription":"string",
"adddto.actiondto.14.category":"Button",
"adddto.actiondto.14.subcategory":"PropList",
"adddto.actiondto.14.dtotype":"",
"adddto.actiondto.14.convertmethod":"wid",
"adddto.actiondto.14.addthis.prexecute":"customfn103",
"adddto.actiondto.14.addthis.executethis":"populatelist",
"adddto.actiondto.14.addthis.postexecute":""
},"","");
    params={'test':'PASS'};
    callback(params);
}
*/






// "adddto.palettedto.0.widname":"joe_jamison",
// "adddto.palettedto.0.category":"human",
// "adddto.palettedto.0.subcategory":"author",
// "adddto.addfield.fieldname":"name",
// "adddto.linkrules.linkclass":"1",
// "adddto.linkrules.min":"0",
// "adddto.linkrules.max":"10"}, "", "");
// *
//  executetest("addwidmaster",
// {"metadata.method":"authordto",
// "wid":"joe_jamison",
// "adddto.actiondto.action":"{'color_screen':'blue'}",

// "adddto.actiondto.0.widname":"joe_jamison",
// "adddto.actiondto.0.displayname":"Process Blur",
// "adddto.actiondto.0.actiondescription":"string",
// "adddto.actiondto.0.category":"blur",
// "adddto.actiondto.0.subcategory":"name",
// "adddto.actiondto.0.dtotype":"",
// "adddto.actiondto.0.convertmethod":"wid",
// "adddto.actiondto.0.addthis.prexecute":"setdtoforwid",
// "adddto.actiondto.0.executethis":"fieldrequired",
// "adddto.actiondto.0.postexecute":"getwidmaster",

// "adddto.actiondto.1.widname":"joe_jamison",
// "adddto.actiondto.1.displayname":"Open As Json",
// "adddto.actiondto.1.actiondescription":"string",
// "adddto.actiondto.1.category":"string",
// "adddto.actiondto.1.subcategory":"string",
// "adddto.actiondto.1.dtotype":"",
// "adddto.actiondto.1.convertmethod":"json",
// "adddto.actiondto.1.preexecute":"setdtoforwid",
// "adddto.actiondto.1.executethis":"getwidmaster",
// "adddto.actiondto.1.postexecute":"getwidmaster",

// "adddto.actiondto.2.displayname":"Open As Wid",
// "adddto.actiondto.2.widname":"joe_jamison",
// "adddto.actiondto.2.actiondescription":"string",
// "adddto.actiondto.2.category":"string",
// "adddto.actiondto.2.subcategory":"string",
// "adddto.actiondto.2.dtotype":"",
// "adddto.actiondto.2.convertmethod":"wid",
// "adddto.actiondto.2.preexecute":"setdtoforwid",
// "adddto.actiondto.2.executethis":"getwidmaster",
// "adddto.actiondto.2.postexecute":"getwidmaster",

// "adddto.actiondto.3.displayname":"Process Blur",
// "adddto.actiondto.3.widname":"joe_jamison",
// "adddto.actiondto.3.actiondescription":"string",
// "adddto.actiondto.3.category":"blur",
// "adddto.actiondto.3.subcategory":"age",
// "adddto.actiondto.3.dtotype":"",
// "adddto.actiondto.3.convertmethod":"wid",
// "adddto.actiondto.3.preexecute":"setdtoforwid",
// "adddto.actiondto.3.executethis":"fieldrequired",
// "adddto.actiondto.3.postexecute":"getwidmaster",

// "adddto.actiondto.4.displayname":"Process Blur",
// "adddto.actiondto.4.widname":"joe_jamison",
// "adddto.actiondto.4.actiondescription":"string",
// "actiondto.4.category":"blur",
// "adddto.actiondto.4.subcategory":"booksdto",
// "adddto.actiondto.4.dtotype":"",
// "adddto.actiondto.4.convertmethod":"wid",
// "adddto.actiondto.4.preexecute":"setdtoforwid",
// "adddto.actiondto.4.executethis":"fieldrequired",
// "adddto.actiondto.4.postexecute":"getwidmaster",

// "adddto.actiondto.5.displayname":"Process Blur",
// "adddto.actiondto.5.widname":"joe_jamison",
// "adddto.actiondto.5.actiondescription":"string",
// "adddto.actiondto.5.category":"blur",
// "adddto.actiondto.5.subcategory":"adddto",
// "adddto.actiondto.5.dtotype":"",
// "adddto.actiondto.5.convertmethod":"wid",
// "adddto.actiondto.5.preexecute":"setdtoforwid",
// "adddto.actiondto.5.executethis":"fieldrequired",
// "adddto.actiondto.5.postexecute":"getwidmaster",

// "adddto.palettedto.0.widname":"joe_jamison",
// "adddto.palettedto.0.category":"human",
// "adddto.palettedto.0.subcategory":"author",
// "adddto.palettedto.1.widname":"jessica_jamison",
// "adddto.palettedto.1.category":"human",
// "adddto.palettedto.1.subcategory":"wife",
// "adddto.palettedto.2.widname":"mary_morris",
// "adddto.palettedto.2.category":"human",
// "adddto.palettedto.2.subcategory":"sister",

// "adddto.addfield.fieldname":"name",
// "adddto.linkrules.linkclass":"1",
// "adddto.linkrules.min":"0",
// "adddto.linkrules.max":"10"}, "", "");
    
//  executetest("addwidmaster",
// {"metadata.method":"authordto",
// "wid":"sarah_jones",

// "adddto.actiondto.0.widname":"sarah_jones",
// "adddto.actiondto.0.displayname":"Process Blur",
// "adddto.actiondto.0.actiondescription":"string",
// "adddto.actiondto.0.category":"blur",
// "adddto.actiondto.0.subcategory":"name",
// "adddto.actiondto.0.dtotype":"",
// "adddto.actiondto.0.convertmethod":"wid",
// "adddto.actiondto.0.preexecute":"setdtoforwid",
// "adddto.actiondto.0.executethis":"fieldrequired",
// "adddto.actiondto.0.postexecute":"getwidmaster",

// "adddto.actiondto.1.widname":"sarah_jones",
// "adddto.actiondto.1.displayname":"Open As Json",
// "adddto.actiondto.1.actiondescription":"string",
// "adddto.actiondto.1.category":"string",
// "adddto.actiondto.1.subcategory":"string",
// "adddto.actiondto.1.dtotype":"",
// "adddto.actiondto.1.convertmethod":"json",
// "adddto.actiondto.1.preexecute":"setdtoforwid",
// "adddto.actiondto.1.executethis":"getwidmaster",
// "adddto.actiondto.1.postexecute":"getwidmaster",

// "adddto.actiondto.2.displayname":"Open As Wid",
// "adddto.actiondto.2.widname":"sarah_jones",
// "adddto.actiondto.2.actiondescription":"string",
// "adddto.actiondto.2.category":"string",
// "adddto.actiondto.2.subcategory":"string",
// "adddto.actiondto.2.dtotype":"",
// "adddto.actiondto.2.convertmethod":"wid",
// "adddto.actiondto.2.preexecute":"setdtoforwid",
// "adddto.actiondto.2.executethis":"getwidmaster",
// "adddto.actiondto.2.postexecute":"getwidmaster",

// "adddto.actiondto.3.displayname":"Process Blur",
// "adddto.actiondto.3.widname":"sarah_jones",
// "adddto.actiondto.3.actiondescription":"string",
// "adddto.actiondto.3.category":"blur",
// "adddto.actiondto.3.subcategory":"age",
// "adddto.actiondto.3.dtotype":"",
// "adddto.actiondto.3.convertmethod":"wid",
// "adddto.actiondto.3.preexecute":"setdtoforwid",
// "adddto.actiondto.3.executethis":"fieldrequired",
// "adddto.actiondto.3.postexecute":"getwidmaster",

// "adddto.actiondto.4.displayname":"Process Blur",
// "adddto.actiondto.4.widname":"sarah_jones",
// "adddto.actiondto.4.actiondescription":"string",
// "adddto.actiondto.4.category":"blur",
// "adddto.actiondto.4.subcategory":"booksdto",
// "adddto.actiondto.4.dtotype":"",
// "adddto.actiondto.4.convertmethod":"wid",
// "adddto.actiondto.4.preexecute":"setdtoforwid",
// "adddto.actiondto.4.executethis":"fieldrequired",
// "adddto.actiondto.4.postexecute":"getwidmaster",

// "adddto.actiondto.5.displayname":"Process Blur",
// "adddto.actiondto.5.widname":"sarah_jones",
// "adddto.actiondto.5.actiondescription":"string",
// "adddto.actiondto.5.category":"blur",
// "adddto.actiondto.5.subcategory":"adddto",
// "adddto.actiondto.5.dtotype":"",
// "adddto.actiondto.5.convertmethod":"wid",
// "adddto.actiondto.5.preexecute":"setdtoforwid",
// "adddto.actiondto.5.executethis":"fieldrequired",
// "adddto.actiondto.5.postexecute":"getwidmaster",

// "adddto.palettedto.0.widname":"sarah_jones",
// "adddto.palettedto.0.category":"human",
// "adddto.palettedto.0.subcategory":"author",
// "adddto.palettedto.1.widname":"james_jones",
// "adddto.palettedto.1.category":"human",
// "adddto.palettedto.1.subcategory":"husband",
// "adddto.addfield.fieldname":"name",
// "adddto.linkrules.linkclass":"1",
// "adddto.linkrules.min":"0",
// "adddto.linkrules.max":"10"}, "", "");
    
//  executetest("addwidmaster",
// {"metadata.method":"authordto",
// "wid":"mike_williams",
// "adddto.actiondto.action":"none",
// "adddto.palettedto.0.widname":"mike_williams",
// "adddto.palettedto.0.category":"human",
// "adddto.palettedto.0.subcategory":"author",
// "adddto.palettedto.1.widname":"mister_scruffy",
// "adddto.palettedto.1.category":"pet",
// "adddto.palettedto.1.subcategory":"dog",
// "adddto.palettedto.2.widname":"misses_fluffy",
// "adddto.palettedto.2.category":"pet",
// "adddto.palettedto.2.subcategory":"cat",
// "adddto.addfield.fieldname":"name",
// "adddto.linkrules.linkclass":"1",
// "adddto.linkrules.min":"0",
// "adddto.linkrules.max":"10"}, "", "");
    
//  executetest("addwidmaster",
// {"metadata.method":"authordto",
// "wid":"jerry_stone",
// "adddto.actiondto.action":"none",
// "adddto.palettedto.0.widname":"jerry_stone",
// "adddto.palettedto.0.category":"human",
// "adddto.palettedto.0.subcategory":"author",
// "adddto.palettedto.1.widname":"lynne_stone",
// "adddto.palettedto.1.category":"human",
// "adddto.palettedto.1.subcategory":"wife",
// "adddto.addfield.fieldname":"name",
// "adddto.linkrules.linkclass":"1",
// "adddto.linkrules.min":"0",
// "adddto.linkrules.max":"10"}, "", "");
    
//  executetest("addwidmaster",
// {"metadata.method":"authordto",
// "wid":"elizabeth_heart",
// "adddto.actiondto.action":"{'play_sound':'trumpet.ogg'}",
// "adddto.palettedto.0.widname":"elizabeth_heart",
// "adddto.palettedto.0.category":"human",
// "adddto.palettedto.0.subcategory":"author",
// "adddto.addfield.fieldname":"name",
// "adddto.linkrules.linkclass":"1",
// "adddto.linkrules.min":"0",
// "adddto.linkrules.max":"10"}, "", "");



//     "adddto.palettedto.0.widname": "joe_jamison",
//     "adddto.palettedto.0.category": "human",
//     "adddto.palettedto.0.subcategory": "author",
//     "adddto.addfield.fieldname": "name",
//     "adddto.linkrules.linkclass": "1",
//     "adddto.linkrules.min": "0",
//     "adddto.linkrules.max": "10"





//  // check to  see if complete dto was entered completely

//  executetest("getwidmaster", {"wid":"authordto"}, "author_get_result", "");


//  // // add me authors and books

//  // // add actions to specific wids
//  executetest("addwidmaster",{"wid":"startwid","metadata.method":"authordto","adddto.actiondto.displayname":"888Open As Wid","adddto.actiondto.actiondescription":"desc888", "adddto.actiondto.category":"button","adddto.actiondto.subcategory":"o888","adddto.actiondto.addthis.preexecute":"setdtoforwid","adddto.actiondto.addthis.executethis":"getwidmaster","adddto.actiondto.addthis.postexecute":"getwidmaster"});
//      executetest("addwidmaster",{"wid":"startwid","metadata.method":"authordto","adddto.actiondto.displayname":"999Open As Wid","adddto.actiondto.actiondescription":"desc999", "adddto.actiondto.category":"button","adddto.actiondto.subcategory":"o999","adddto.actiondto.addthis.preexecute":"setdtoforwid","adddto.actiondto.addthis.executethis":"getwidmaster","adddto.actiondto.addthis.postexecute":"getwidmaster"});

//  // // check startwid with all the additions
//  executetest("getwidmaster", {"wid":"startwid"}, "startwid_get", "");

//  executetest("getwidmaster", {"wid":"startwid", "command.dtotype":"defaultdto"}, "author_get", "");

//      //executetest("debugon");
//      executetest("getwidmaster", {"wid":"startwid","command.dtotype":"authordto"}, "startwid_authordto", "");
//      executetest("getwidmaster", {"wid":"startwid","command.dtotype":"booksdto", "command.convertmethod":"dtonum"}, "startwid_dtonum_bookdto", "");
//      executetest("getwidmaster", {"wid":"startwid","command.dtotype":"booksdto", "command.convertmethod":"num"}, "startwid_num_`bookdto", "");
//      executetest("getwidmaster", {"wid":"startwid","command.dtotype":"booksdto"}, "startwid_bookdto", "");
//  executetest("getwidmaster", {"wid":"startwid","command.dtotype":"palettedto"}, "startwid_palettedto", "");
//  executetest("getwidmaster", {"wid":"startwid","command.dtotype":"adddto"}, "startwid_adddto", "");
//  executetest("getwidmaster", {"wid":"startwid","command.dtotype":"addfield"}, "startwid_addfield", "");  
//  executetest("getwidmaster", {"wid":"startwid","command.dtotype":"actiondto"}, "startwid_actiondto", "");
//  executetest("getwidmaster", {"wid":"startwid","command.dtotype":"linkrules"}, "startwid_linkrules", "");
//  executetest("getwidmaster", {"wid":"startwid","command.dtotype":"gojsobject"}, "startwid_gojsobject", "");
//  executetest("getwidmaster", {"wid":"startwid","command.dtotype":"nodeDataArray"}, "startwid_nodeDataArray", "");
//  executetest("getwidmaster", {"wid":"startwid","command.dtotype":"linkDataArray"}, "startwid_linkdataarray", "");
//  executetest("getwidmaster", {"wid":"startwid","command.dtotype":"leftarray"}, "startwid_leftarray", "");
//  executetest("getwidmaster", {"wid":"startwid","command.dtotype":"rightarray"}, "startwid_rightarray", "");
//  executetest("getwidmaster", {"wid":"startwid","command.dtotype":"bottomarray"}, "startwid_bottomarray", "");
//  executete
   
//     executetest("addwidmaster",
// {"metadata.method":"actiondto",
// "wid":"actiondto",
// "displayname":"string",
// "widname":"string",
// "actiondescription":"string",
// "category":"string",
// "subcategory":"string",
// "dtotype":"string",
// "convertmethod":"string",
// "addthis.preexecute":"string",
// "addthis.executethis":"string",
// "addthis.postexecute":"string"}, "", "");
    
//  executetest("addwidmaster",
// {"metadata.method":"palettedto",
// "wid":"palettedto",
// "widname":"string",
// "category":"string",
// "subcategory":"string"}, "", "");
    
//  executetest("addwidmaster",
// {"metadata.method":"addfield",
// "wid":"addfield",
// "fieldname":"string",
// "editable":"string",
// "display":"string",
// "oneditactions":"string",
// "addfielddefault":"inherit"}, "", "");

//  //gojs object
//  executetest("addwidmaster",
// {"metadata.method":"gojsobject",
// "wid":"gojsobject",
// "class":"string",
// "linkFromPortIdProperty":"string",
// "linkToPortIdProperty":"string",
// "nodeDataArray":"onetomany",
// "linkDataArray":"onetomany"}, "", "");
    
//  executetest("addwidmaster",
// {"metadata.method":"nodeDataArray",
// "wid":"nodeDataArray",
//  "key":"string",
//  "loc":"string",
//  "leftArray":"onetomany",
//  "topArray":"onetomany",
//  "bottomArray":"onetomany",
//  "rightArray":"onetomany"}, "", ""); 
    
//  executetest("addwidmaster",
// {"metadata.method":"leftArray",
// "wid":"leftArray",
// "class":"string",
// "portColor":"string",
//  "portId":"string"}, "", "");
 
//  executetest("addwidmaster",
// {"metadata.method":"topArray",
// "wid":"topArray",
// "class":"string",
// "portColor":"string",
//  "portId":"string"}, "", "");
 
//  executetest("addwidmaster",
// {"metadata.method":"bottomArray",
// "wid":"bottomArray",
// "portColor":"string",
//  "portId":"string"}, "", "");
 
//  executetest("addwidmaster",
// {"metadata.method":"rightArray",
// "wid":"rightArray",
// "portColor":"string",
//  "portId":"string"}, "", "");
 
//  executetest("addwidmaster",
// {"metadata.method":"linkDataArray",
// "wid":"linkDataArray",
// "from":"string",
//  "to":"string",
//  "fromPort":"string",
//  "toPort":"string"}, "", "");
 
//  executetest("addwidmaster",
// {"metadata.method":"gojsrel1",
// "wid":"gojsrel1",
// "primarywid":"gojsobject",
// "secondarywid":"nodedataarray",
// "relationshiptype":"attributes",
// "metadata.method":"relationshipdto"}, "", "");
    
//  executetest("addwidmaster",
// {"metadata.method":"gojsrel2",
// "wid":"gojsrel2",
// "class":"string",
// "primarywid":"gojsobject",
// "secondarywid":"linkdataarray",
// "relationshiptype":"attributes",
// "metadata.method":"relationshipdto"}, "", "");   

//  executetest("addwidmaster",
// {"metadata.method":"gojsrel3",
// "wid":"gojsrel3",
// "primarywid":"nodedataarray",
// "secondarywid":"leftarray",
// "relationshiptype":"attributes",
// "metadata.method":"relationshipdto"}, "", "");

//  executetest("addwidmaster",
// {"metadata.method":"gojsrel4",
// "wid":"gojsrel4",
// "primarywid":"nodedataarray",
// "secondarywid":"toparray",
// "relationshiptype":"attributes",
// "metadata.method":"relationshipdto"}, "", "");

//  executetest("addwidmaster",
// {"metadata.method":"gojsrel5",
// "wid":"gojsrel5",
// "primarywid":"nodedataarray",
// "secondarywid":"bottomarray",
// "relationshiptype":"attributes",
// "metadata.method":"relationshipdto"}, "", "");

//  executetest("addwidmaster",
// {"metadata.method":"gojsrel6",
// "wid":"gojsrel6",
// "primarywid":"nodedataarray",
// "secondarywid":"rightarray",
// "relationshiptype":"attributes",
// "metadata.method":"relationshipdto"}, "", "");


//  ///end right click dto
//  executetest("addwidmaster",
// {"metadata.method":"linkrules",
// "wid":"linkrules",
// "linkclass":"string",
// "min":"string",
// "max":"string"}, "", "");    
//  executetest("addwidmaster",
// {"metadata.method":"adddto",
// "wid":"adddto",
// "actiondto":"onetomany",
// "palettedto":"onetomany",
// "addfield":"onetomany",
// "gojsobject":"onetoone",
// "linkrules":"onetomany",
// "rightclickdto":"onetomany",
// "defaultrightclick":"inherit"}, "", "");
//  //create adddto relationships
//  executetest("addwidmaster",
// {"metadata.method":"relationshipdto",
// "wid":"rel_actiondto_adddto",
// "primarywid":"adddto",
// "secondarywid":"actiondto"}, "", "");
//  executetest("addwidmaster",
// {"metadata.method":"relationshipdto",
// "wid":"rel_palettedto_adddto",
// "primarywid":"adddto",
// "secondarywid":"palettedto"}, "", "");
//  executetest("addwidmaster",
// {"metadata.method":"relationshipdto",
// "wid":"rel_addfield_adddto",
// "primarywid":"adddto",
// "secondarywid":"addfield"}, "", "");
//  executetest("addwidmaster",
// {"metadata.method":"relationshipdto",
// "wid":"rel_gojsobject_adddto",
// "primarywid":"adddto",
// "secondarywid":"gojsobject"}, "", "");
//  executetest("addwidmaster",
// {"metadata.method":"relationshipdto",
// "wid":"rel_linkrules_adddto",
// "primarywid":"adddto",
// "secondarywid":"linkrules"}, "", "");
//  executetest("addwidmaster",
// {"wid":"rel_rightclickdto_adddto",
// "primarywid":"adddto",
// "secondarywid":"rightclickdto",
// "relationshiptype":"attributes",
// "metadata.method":"relationshipdto"}, "", "");
    
    
//  executetest("addwidmaster",
// {"metadata.method":"booksdto",
// "wid":"booksdto",
// "title":"string",
// "pages":"string"}, "", "");

//  executetest("addwidmaster",
// {"metadata.method":"authordto",
// "wid":"authordto",
// "name":"string",
// "age":"string",
// "booksdto":"onetomany",
// "adddto":"onetoone"}, "", "");

//  executetest("addwidmaster",
// {"metadata.method":"relationshipdto",
// "wid":"relbooktoauthor",
// "primarywid":"authordto",
// "secondarywid":"booksdto"}, "", "");

//  executetest("addwidmaster",
// {"metadata.method":"relationshipdto",
// "wid":"reladddtotoauthor",
// "primarywid":"authordto",
// "secondarywid":"adddto"}, "", "");
    
//  //create a default addfield record
//  executetest("addwidmaster",
// {"wid":"addfielddefault",
// "fieldname":"name",
// "display":"true",
// "editable":"true",
// "onreadactions":"none",
// "oneditactions":"pop_up_alert"}, "", "");
    
//  //add some authors and books
//  //executetest("debugon");
//  executetest("addwidmaster",
// {"metadata.method":"authordto",
// "wid":"newwid"}, "", "");

//  executetest("addwidmaster",
// {"metadata.method":"authordto",
// "wid":"startwid",
// "name":"start wid",
// "age":"00",
// "booksdto.title":"none",
// "booksdto.pages":"00"}, "", "");

//  //executetest("debugoff");
//  executetest("addwidmaster",
// {"metadata.method":"authordto",
// "wid":"joe_jamison",
// "name":"Joe Jamison",
// "age":"32",
// "booksdto.title":"Hello World!",
// "booksdto.pages":"40"}, "", "");

//  executetest("addwidmaster",
// {"metadata.method":"authordto",
// "wid":"sarah_jones",
// "name":"Sarah Jones",
// "age":"40",
// "booksdto.title":"The Sands of Time",
// "booksdto.pages":"378"}, "", "");

//  executetest("addwidmaster",
// {"metadata.method":"authordto",
// "wid":"mike_williams",
// "name":"Mike Williams",
// "age":"36",
// "booksdto.title":"Attack on the Mainframe",
// "booksdto.pages":"600"}, "", "");

//  executetest("addwidmaster",
// {"metadata.method":"authordto",
// "wid":"jerry_stone",
// "name":"Jerry Stone",
// "age":"41",
// "booksdto.title":"Carpentry 101",
// "booksdto.pages":"120"}, "", "");

//  executetest("addwidmaster",
// {"metadata.method":"authordto",
// "wid":"elizabeth_heart",
// "name":"Elizabeth Heart",
// "age":"50",
// "booksdto.title":"The X Factor",
// "booksdto.pages":"300"}, "", "");


//       executetest("addwidmaster",
// {
//     "metadata.method": "authordto",
//     "wid": "startwid",
//     "adddto.actiondto.0.widname": "startwid",
//     "adddto.actiondto.0.displayname": "Process Blur",
//     "adddto.actiondto.0.actiondescription": "string",
//     "adddto.actiondto.0.category": "blur",
//     "adddto.actiondto.0.subcategory": "name",
//     "adddto.actiondto.0.dtotype": "",
//     "adddto.actiondto.0.convertmethod": "wid",
//     "adddto.actiondto.0.preexecute": "",
//     "adddto.actiondto.0.executethis": "fieldrequired",
//     "adddto.actiondto.0.postexecute": "getwidmaster",

//     "adddto.actiondto.1.widname": "startwid",
//     "adddto.actiondto.1.displayname": "Open As Json",
//     "adddto.actiondto.1.actiondescription": "string",
//     "adddto.actiondto.1.category": "string",
//     "adddto.actiondto.1.subcategory": "string",
//     "adddto.actiondto.1.dtotype": "",
//     "adddto.actiondto.1.convertmethod": "json",
//     "adddto.actiondto.1.preexecute": "",
//     "adddto.actiondto.1.executethis": "open_as_wid",
//     "adddto.actiondto.1.postexecute": "getwidmaster",

//     "adddto.actiondto.2.displayname": "Open As Wid",
//     "adddto.actiondto.2.widname": "startwid",
//     "adddto.actiondto.2.actiondescription": "string",
//     "adddto.actiondto.2.category": "string",
//     "adddto.actiondto.2.subcategory": "string",
//     "adddto.actiondto.2.dtotype": "",
//     "adddto.actiondto.2.convertmethod": "wid",
//     "adddto.actiondto.2.preexecute": "",
//     "adddto.actiondto.2.executethis": "open_as_wid",
//     "adddto.actiondto.2.postexecute": "getwidmaster",

//     "adddto.actiondto.3.displayname": "Process Blur",
//     "adddto.actiondto.3.widname": "startwid",
//     "adddto.actiondto.3.actiondescription": "string",
//     "adddto.actiondto.3.category": "blur",
//     "adddto.actiondto.3.subcategory": "age",
//     "adddto.actiondto.3.dtotype": "",
//     "adddto.actiondto.3.convertmethod": "wid",
//     "adddto.actiondto.3.preexecute": "setdtoforwid",
//     "adddto.actiondto.3.executethis": "fieldrequired",
//     "adddto.actiondto.3.postexecute": "getwidmaster",

//     "adddto.actiondto.4.displayname": "Process Blur",
//     "adddto.actiondto.4.widname": "startwid",
//     "adddto.actiondto.4.actiondescription": "string",
//     "adddto.actiondto.4.category": "blur",
//     "adddto.actiondto.4.subcategory": "booksdto",
//     "adddto.actiondto.4.dtotype": "",
//     "adddto.actiondto.4.convertmethod": "wid",
//     "adddto.actiondto.4.preexecute": "setdtoforwid",
//     "adddto.actiondto.4.executethis": "fieldrequired",
//     "adddto.actiondto.4.postexecute": "getwidmaster",

//     "adddto.actiondto.5.displayname": "Process Blur",
//     "adddto.actiondto.5.widname": "startwid",
//     "adddto.actiondto.5.actiondescription": "string",
//     "adddto.actiondto.5.category": "blur",
//     "adddto.actiondto.5.subcategory": "adddto",
//     "adddto.actiondto.5.dtotype": "",
//     "adddto.actiondto.5.convertmethod": "wid",
//     "adddto.actiondto.5.preexecute": "setdtoforwid",
//     "adddto.actiondto.5.executethis": "fieldrequired",
//     "adddto.actiondto.5.postexecute": "getwidmaster",

//     "adddto.actiondto.6.displayname": "New",
//     "adddto.actiondto.6.widname": "startwid",
//     "adddto.actiondto.6.actiondescription": "string",
//     "adddto.actiondto.6.category": "Button",
//     "adddto.actiondto.6.subcategory": "Canvas",
//     "adddto.actiondto.6.dtotype": "",
//     "adddto.actiondto.6.convertmethod": "wid",
//     "adddto.actiondto.6.preexecute": "customfn104",
//     "adddto.actiondto.6.executethis": "populatepropertybox",
//     "adddto.actiondto.6.postexecute": "getwidmaster",

//     "adddto.actiondto.7.displayname": "Load",
//     "adddto.actiondto.7.widname": "startwid",
//     "adddto.actiondto.7.actiondescription": "string",
//     "adddto.actiondto.7.category": "Button",
//     "adddto.actiondto.7.subcategory": "Canvas",
//     "adddto.actiondto.7.dtotype": "",
//     "adddto.actiondto.7.convertmethod": "wid",
//     "adddto.actiondto.7.preexecute": "getwidcopy",
//     "adddto.actiondto.7.executethis": "displayall",
//     "adddto.actiondto.7.postexecute": "getwidmaster",

//     "adddto.actiondto.8.displayname": "Add Row",
//     "adddto.actiondto.8.widname": "startwid",
//     "adddto.actiondto.8.actiondescription": "string",
//     "adddto.actiondto.8.category": "Button",
//     "adddto.actiondto.8.subcategory": "Canvas",
//     "adddto.actiondto.8.dtotype": "",
//     "adddto.actiondto.8.convertmethod": "wid",
//     "adddto.actiondto.8.preexecute": "",
//     "adddto.actiondto.8.addrow": "displayall",
//     "adddto.actiondto.8.postexecute": "",

//     "adddto.actiondto.9.displayname": "Save",
//     "adddto.actiondto.9.widname": "startwid",
//     "adddto.actiondto.9.actiondescription": "string",
//     "adddto.actiondto.9.category": "Button",
//     "adddto.actiondto.9.subcategory": "Canvas",
//     "adddto.actiondto.9.dtotype": "",
//     "adddto.actiondto.9.convertmethod": "wid",
//     "adddto.actiondto.9.preexecute": "",
//     "adddto.actiondto.9.executethis": "savepropertybox",
//     "adddto.actiondto.9.postexecute": "updatewid",

//     "adddto.actiondto.10.displayname": "Compile",
//     "adddto.actiondto.10.widname": "startwid",
//     "adddto.actiondto.10.actiondescription": "string",
//     "adddto.actiondto.10.category": "Button",
//     "adddto.actiondto.10.subcategory": "Canvas",
//     "adddto.actiondto.10.dtotype": "",
//     "adddto.actiondto.10.convertmethod": "",
//     "adddto.actiondto.10.preexecute": "",
//     "adddto.actiondto.10.executethis": "",
//     "adddto.actiondto.10.postexecute": "",

//     "adddto.actiondto.11.displayname": "Children",
//     "adddto.actiondto.11.widname": "startwid",
//     "adddto.actiondto.11.actiondescription": "string",
//     "adddto.actiondto.11.category": "Button",
//     "adddto.actiondto.11.subcategory": "PropList",
//     "adddto.actiondto.11.dtotype": "",
//     "adddto.actiondto.11.convertmethod": "wid",
//     "adddto.actiondto.11.preexecute": "getlistinfo",
//     "adddto.actiondto.11.executethis": "getlistobject",
//     "adddto.actiondto.11.postexecute": "updatewid",

//     "adddto.actiondto.12.displayname": "Test Message Box",
//     "adddto.actiondto.12.widname": "startwid",
//     "adddto.actiondto.12.actiondescription": "string",
//     "adddto.actiondto.12.category": "Button",
//     "adddto.actiondto.12.subcategory": "PropList",
//     "adddto.actiondto.12.dtotype": "",
//     "adddto.actiondto.12.convertmethod": "wid",
//     "adddto.actiondto.12.preexecute": "customfn101",
//     "adddto.actiondto.12.ExecuteThis": "populatemessage",
//     "adddto.actiondto.12.postexecute": "",

//     "adddto.actiondto.13.displayname": "Genrate Propertybox",
//     "adddto.actiondto.13.widname": "startwid",
//     "adddto.actiondto.13.actiondescription": "string",
//     "adddto.actiondto.13.category": "Button",
//     "adddto.actiondto.13.subcategory": "PropList",
//     "adddto.actiondto.13.dtotype": "",
//     "adddto.actiondto.13.convertmethod": "wid",
//     "adddto.actiondto.13.preexecute": "customfn102",
//     "adddto.actiondto.13.ExecuteThis": "populatepropertybox",
//     "adddto.actiondto.13.postexecute": "",

//     "adddto.actiondto.14.displayname": "Generate Widlist",
//     "adddto.actiondto.14.widname": "startwid",
//     "adddto.actiondto.14.actiondescription": "string",
//     "adddto.actiondto.14.category": "Button",
//     "adddto.actiondto.14.subcategory": "PropList",
//     "adddto.actiondto.14.dtotype": "",
//     "adddto.actiondto.14.convertmethod": "wid",
//     "adddto.actiondto.14.preexecute": "customfn103",
//     "adddto.actiondto.14.ExecuteThis": "populatelist",
//     "adddto.actiondto.14.postexecute": "",
