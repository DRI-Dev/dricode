(function (window) {
// {_id:121212, wid:wid3, metadata: {method:x, y:z}, data: {a:b,c:d}}
// added dtoin --- problem with 0. for one to one
// external functions are getwid, upatewid, addwidmaster, getwidmaster, securitycheck
// they should remove parameter executethis upon entry
// line 607 		if (((item!='wid') && (item!='metadata.method')) || (childdto!=dtotype)) {proposedLeft=preAmble + "." + item}
// confirm we are storing 'addthis' and only removing on get
// locks if dtoadd = adddto versus action dto -- probably lost in addmaster
// ++++ calling getwid is good calling it through execute not
// if what is being executed is not a string exeuctehis=
// () at end

    exports.proxyprinttodiv = window.proxyprinttodiv = proxyprinttodiv =  function proxyprinttodiv(text, obj, debugone){// **** making code node compatible
        if ((typeof config !== "undefined") && (config.configuration.environment === "local")) {//{return mongoquery(parameters)}
//    if(typeof require !== "undefined"){// **** making code node compatible
            printToDiv(text, obj, debugone);    // **** making code node compatible
        }// **** making code node compatible
    };// **** making code node compatible


    exports.getwid = getwid = function getwid(inputWidgetObject, callback) {
        delete inputWidgetObject['executethis'];// ** added by Saurabh 11/9

        proxyprinttodiv('Function getwid in : inputWidgetObject',  inputWidgetObject,1);
        var outobject = {};

        getfrommongo(inputWidgetObject, function(results) {
            if (results) {
                if (results["data"]) { outobject = results["data"]; }

                if (results['wid']) { outobject['wid'] = results['wid']; }
                else { outobject['wid']=""; }

                if (results['metadata.method']) { outobject['metadata.method'] = results['metadata.method']; }
                else { outobject['metadata.method']=""; }

                callback(outobject);
            }
        });
    };

    exports.updatewid =  updatewid = function updatewid(inputWidgetObject, callback) {
        delete inputWidgetObject['executethis'];
        proxyprinttodiv('Function updatewid in : inputWidgetObject',  inputWidgetObject,10);
        // for conversion:
        var saveobject={}

        if (inputWidgetObject['wid']) { saveobject['wid'] = inputWidgetObject['wid'];	}
        else { saveobject['wid']=""; }

        delete inputWidgetObject['wid'];

        if (inputWidgetObject['metadata.method']){ saveobject['metadata.method'] = inputWidgetObject['metadata.method']; }
        else { saveobject['metadata.method']=""; }

        delete inputWidgetObject['metadata.method'];

        if (inputWidgetObject) { saveobject['data'] = inputWidgetObject; }
        else { saveobject['data']=""; }

        addtomongo(saveobject, function(results) {
            proxyprinttodiv('Function updatewid in : x', results, 10);
            callback(results);
        });
    };

// Starting of securityCheck function
// LM: I think this section is turned off and not used since it was breaking the code, but it 
// should be saved and implemented later
    function securitycheck(widParameter, accessToken){ // accountwid and transactionType for future use
        proxyprinttodiv('Function securityCheck() in : ', 'before' );
        return true;
        var widInput= { mongowid:widParameter, mongorelationshiptype:'attributes', mongorelationshipmethod:'last' , mongowidmethod:'dtotype', mongorelationshipdirection:'forward', convertmethod:'convertmethod'};
        var accessTokenInput= { wid:accessToken, mongorelationshiptype:'attributes', mongorelationshipmethod:'last' , mongowidmethod:'dtotype', mongorelationshipdirection:'forward', convertmethod:'convertmethod'};
        var widOutput=querywid(widInput);
        proxyprinttodiv('Function querywid() out with  output : ', widOutput );
        var accessTokenOutput=querywid(accessTokenInput);
        proxyprinttodiv('Function querywid() out with  output : ', accessTokenOutput );
        var securityCheckOutput = widOutput['security']>accessTokenOutput['security'];
        proxyprinttodiv('Function securityCheck() out with  output : ', securityCheckOutput );
        return securityCheckOutput;
    }// End of querywid function

// Cycles through local storage looking for a match to the query
// function simpleQuery(widInput, mongorelationshiptype, mongorelationshipmethod, mongorelationshipdirection, mongowidmethod, convertmethod, dtotype){

// 	var executeobject={};
// 	executeobject["executethis"]="MongoDataQuery";
// 	executeobject["mongowid"]=widInput;
// 	executeobject["mongorelationshiptype"]=mongorelationshiptype;
// 	executeobject["mongorelationshipmethod"]=mongorelationshipmethod;
// 	executeobject["mongorelationshipdirection"]=mongorelationshipdirection;
// 	executeobject["mongowidmethod"]=mongowidmethod;
// 	executeobject["convertmethod"]=convertmethod;
// 	executeobject["dtotype"]="";	
// 	proxyprinttodiv('Function getAndFormatNextLevel()  executeobject III' , executeobject);	
// 	//var relatedParameters=MongoDataQuery(executeobject);
// 	var relatedParameters=executethis(executeobject,execute);
// 	return relatedParameters
// }


// Prepares an object to be recorded in local storage and puts it there
    function MongoAddEditPrepare(Indto, InList, widid, widdto) {
        /* 	Indto = [{"key":"e","value":"onetomany"}];

         InList = [{"key":"e","value":"f"}]; */
        proxyprinttodiv('Function MongoAddEditPrepare, Indto : ', Indto,90);
        proxyprinttodiv('Function MongoAddEditPrepare, InList : ', InList,90);
        proxyprinttodiv('Function MongoAddEditPrepare, widid : ', widid,90);
        proxyprinttodiv('Function MongoAddEditPrepare, widdto : ', widdto,90);

        var InListObj = {};
        var rawobject = {};
        var rawlist = [];
        InListObj = listToObject(InList);
        var item;

        //added 11/4 -- if item begins wiht addthis. then remove it

        // for (item in InListObj){
        // 	proxyprinttodiv('Function MongoAddEditPrepare substring : ', item.substring(0, 8));
        // 	if (item.substring(0, 8) == "addthis.") {
        // 		proxyprinttodiv('Function MongoAddEditPrepare 11+ : ', item.substring(8, item.length));
        // 		InListObj[item.substring(8, item.length)]=InListObj[item];
        // 		delete InListObj[item];
        // 		}
        // 	}

        if ((InListObj["wid"]===undefined) || (InListObj["wid"] == "")){
            if ((widid!==undefined) || (widid!="")) {InListObj["wid"] = widid};
        }
        if ((InListObj["wid"] === undefined) || (InListObj["wid"] == "")) {
            potentialwid=potentialwid+1;
            InListObj["wid"] = potentialwid.toString();
        }
        else
        { // if the wid existed, read the contents of the previous wid, we want to update not add.
            //Debug='true';
            executeobject={};
            executeobject["executethis"]="getwid";
            executeobject["wid"]=InListObj["wid"];
            var x = window['execute'];
            rawobject=executethis(executeobject,x);
            if (((rawobject["metadata.method"]!==undefined) || (rawobject["metadata.method"] != "")) &&
                ((InListObj["metadata.method"]===undefined) || (InListObj["metadata.method"] == ""))) {
                InListObj["metadata.method"]=rawobject["metadata.method"];
            }
            //rawobject = getfrommongo({"wid":InListObj["wid"]});
            InListObj =  jsonConcat(InListObj,rawobject); // this will be the new contents concat with old stuff in wid

            // rawobject = getWidMongo(InListObj["wid"],"",widdto, "","dto",Indto, ""})
            rawobject={};  // if the dto had inherit then we only want to save what in herit does not have

            for (item in Indto) {   // load all data related to inherit
                if (item.value=='inherit') {
                    var executeobject={};
                    executeobject["executethis"]="getwid"; // probably should be getwidmaster -- changed from only getwid
                    executeobject["wid"]=item.key;
                    var x = window['execute'];
                    rawobject=executethis(executeobject,x);
                    //rawobject = getfrommongo({"wid":item.key});
                    rawobject =  jsonConcat(rawobject,rawobject);
                }
            }
            for (item in rawobject) {  // for all data in inherit, delete it from being added
                if (InListObj[item]==rawobject[item]) {
                    delete InListObj[item];
                }
            }
        }
        if ((InListObj["metadata.method"]===undefined) || (InListObj["metadata.method"] == "")) {
            if ((widdto!==undefined) || (widdto!="")) { InListObj["metadata.method"] = widdto; }
        }
        if ((InListObj["metadata.method"] === undefined) || (InListObj["metadata.method"] == "")) {
            InListObj["metadata.method"] = 'defaultdto';
        }
        //proxyprinttodiv('Function MongoAddEditPrepare InListObj before : ', InListObj);
        //proxyprinttodiv('Function MongoAddEditPrepare rawobject from get : ', rawobject);

        // step through dto look for inherit parameters, then delete them from save

        //proxyprinttodiv('Function MongoAddEditPrepare InListObj after : ', InListObj);

        //Debug='false';


        InListObj["wid"]=InListObj["wid"].toLowerCase();

        //InListObj["executethis"]="updatewid";
        //var addresult=executethis(InListObj); // excutethismight be a parameter

        var addresult=executethis(InListObj,updatewid);
        //var addresult=executethis(InListObj,addtomongo);

        //addtomongo(InListObj["wid"], InListObj)
        //addtomongoII(InListObj);
        //var addresult = addtomongo(InListObj);
        //addToLocalStorage(widMasterKey + InListObj["wid"], InListObj);
        //olddebug=Debug;
        //Debug='true';

        proxyprinttodiv('Function MongoAddEditPrepare, ******************* InListObj : ', InListObj,90);
        //proxyprinttodiv('Function MongoAddEditPrepare, ******************* addresult : ', addresult, true);
        //Debug=olddebug;
        //InListObj["LOG"]="LOG";
        //addtomongo(InListObj["wid"], InListObj)
        // addToLocalStorage(widMasterKey + "add_"+InListObj["wid"], InListObj);
        return InListObj;
    }

    function AddMongoRelationship(ParentWid,ChildWid,attr){
        relationshipdto={'primarywid':'string','secondarywid':'string', 'relationshiptype':'string','metadata.method':'string'};
        // note above should be list but does not matter
        InList = [];
        InList.push({"key":"primarywid","value":ParentWid.toLowerCase()});
        InList.push({"key":"secondarywid","value":ChildWid.toLowerCase()});
        InList.push({"key":"relationshiptype","value":attr.toLowerCase()});
        InList.push({"key":"metadata.method","value":"relationshipdto"});

        executeobject={};
        executeobject["mongorawquery"]={"$and": {"data.primarywid":ParentWid, "data.secondarywid":ChildWid }};
        executeobject["executethis"]=querywid;
        //var widset=executethis(executeobject,execute);
        proxyprinttodiv('Function AddMongoRelationship - executeobject',  executeobject,75);
        var widset=executethis(executeobject,querywid);
        proxyprinttodiv('Function MongoAddEditPrepare, ******************* 1 : ', widset,90);
        var widobject={};
        if (widset.length>0) {widobject=widset[0]} else {widobject={}};
        InList.push(widobject);

        //var widset=getwidcopy(); // get a copy of all local storage ***
        // above changed 11-3 ********
        // right now querywid does not do anything but a list


        //for (var widkey in widset){
        // for (var key in localStorage){				// search for duplicate
        //var myvalue = JSON.parse(localStorage.getItem(key));
        // executeobject={};
        //   	executeobject["executethis"]="getwid";
        //   	executeobject["wid"]=widkey;
        //   	var myvalue=executethis(executeobject,execute);
        //var myvalue = getfrommongo({wid:widkey});

        // this was commented 11/3
        // for (var myvalue in widset){
        // 	if ((myvalue['primarywid']==ParentWid) && (myvalue['secondarywid']==ChildWid)) {
        // 		InList.push({"key":"wid","value":myvalue['wid']});
        // 		}
        // 	}

        widset=InList;

        proxyprinttodiv('Function MongoAddEditPrepare, ******************* 2 : ', widset,90);

        AddedObject = MongoAddEditPrepare([], widset, "", attr );
    }


// know issue -- cannot save blank parameter if jsonConcat (inherit)


    function aggressivedto(widInput, preamble, level) { // returns a made up dto base on maximum number of relationships, etc
        //Debug='true';
        proxyprinttodiv('Function aggressivedto()  widInput' , widInput,20);
        proxyprinttodiv('Function aggressivedto()  preamble' , preamble,20);
        var moreDTOParameters={};
        var targetwid="";
        var nexttargetwid="";
        var nextpreamble="";
        var eachresult="";
        var key="";
        var rightparameters={};
        dtoGlobalParameters={};

        if (!level) {level=99} else {level = level - 1}; //how many levels to try

        if (preamble === undefined) {preamble = "";}
        if (preamble !="") {preamble = preamble + ".";}
        proxyprinttodiv('Function aggressivedto()  processed preamble' , preamble);

        var executeobject={};
        targetwid=widInput;
        //executeobject["executethis"]="getwid";
        executeobject["wid"]=widInput;
        proxyprinttodiv('Function aggressivedto()  executeobject I' , executeobject, 20);
        var parameterObject=executethis(executeobject,getwid);
        // ** 11-1
        //var parameterObject=getfrommongo({"wid":widInput});

        proxyprinttodiv('Function aggressivedto()  parameterObject I' , parameterObject,20);

        if ((parameterObject!==undefined) && (parameterObject['metadata.method'] != "") && (parameterObject['metadata.method'] != targetwid))  {
            targetwid=parameterObject['metadata.method'];
            executeobject={};
            //executeobject["executethis"]=getwid;
            executeobject["wid"]=targetwid;
            proxyprinttodiv('Function aggressivedto()  executeobject II' , executeobject);
            moreDTOParameters=executethis(executeobject,getwid);
            if (Object.keys(moreDTOParameters).length !=0) {parameterObject=jsonConcat(parameterObject, moreDTOParameters)}
            // ** 11-1
            //parameterObject=getfrommongo({"wid":targetwid});
            proxyprinttodiv('Function aggressivedto()  parameterObject II' , parameterObject,20);
        }

        //for (eachresult in parameterObject) {
        //	parameterObject[eachresult] = 'string';
        //	}
        proxyprinttodiv('Function aggressivedto()  parameterObject III' , parameterObject);
        proxyprinttodiv('Function aggressivedto()  targetwid' , targetwid);

        executeobject = {};
        executeobject["mongowid"] = targetwid;
        executeobject["mongorelationshiptype"] = "attributes";
        executeobject["mongorelationshipmethod"] = "all";
        executeobject["mongorelationshipdirection"] = "forward";
        executeobject["mongowidmethod"] = "";
        executeobject["convertmethod"] = "";
        executeobject["dtotype"] = "";
        executeobject["executethis"] = querywid;
        // executeobject["executethis"] = mongoquery; /// *** Change by Saurabh 12/11 for checking #402 error
        proxyprinttodiv('Function aggressivedto()  executeobject III' , executeobject,20);
        // it does NOT seem to like this:
        //moreDTOParameters = executethis(executeobject,execute);

        //it does NOT seem to like:
        //var x = window['execute'];
        //moreDTOParameters = executethis(executeobject,x);

        // did NOT like this:
        //executeobject["executethis"] = "querywid";
        //moreDTOParameters = executethis(executeobject,execute);

        // did NOT like:
        //var x = window['execute'];
        //executeobject["executethis"] = "querywid";
        //moreDTOParameters = executethis(executeobject,x);

        //it seems to like the two below--then it did not
        var x = window['querywid'];
        moreDTOParameters = executethis(executeobject,x);

        //it seems to like the two below:
        //var x = window['querywidlocal'];
        //moreDTOParameters = executethis(executeobject,x);

        //it seems to like the two below:-- not any more
        //var x = window['mongoquery'];
        //moreDTOParameters = executethis(executeobject,x);

        proxyprinttodiv('Function aggressivedto()  moreDTOParameters' , moreDTOParameters, 20);
        //moreDTOParameters = querywidlocal(executeobject);
        //****** 100-31 also querywidlocal<>mongoquery

        //moreDTOParameters = simpleQuery(targetwid, "attributes", "all", "forward", "", "", "");

        for (eachresult in moreDTOParameters) {
            rightparameters={};
            for (key in moreDTOParameters[eachresult]) {
                rightparameters=moreDTOParameters[eachresult][key];
            }
            proxyprinttodiv('Function getWidMongo() left- ', key);
            proxyprinttodiv('Function getWidMongo() right ', rightparameters);

            // from dto create outgoing object
            if (moreDTOParameters[key]) {
                parameterObject[key]=moreDTOParameters[key]
            }

            proxyprinttodiv('Function aggressivedto()  parameterObject V' , parameterObject);
            proxyprinttodiv('Function aggressivedto()  key key' , key);
            if (level > 0) {parameterObject = jsonConcat(parameterObject, aggressivedto(key, key, level))};
        }

        var dtoGlobalParameters={};
        for (eachresult in parameterObject) {
            dtoGlobalParameters[preamble + eachresult] = parameterObject[eachresult];
        }
        //** added 11/12
        //delete dtoGlobalParameters['wid'];
        //delete dtoGlobalParameters['metadata.method'];
        proxyprinttodiv('Function aggressivedto()  dtoGlobalParameters' , dtoGlobalParameters, 20);
        //Debug='false';
        return dtoGlobalParameters
    }

    function addcleanparameters(resultObj, dtotype, accesstoken, cleanmethod, convertmethod) {
        proxyprinttodiv('Function addcleanparameteres() resultObj I ' , resultObj,80);
        proxyprinttodiv('Function addcleanparameteres()  dtotype I' , dtotype,80);
        proxyprinttodiv('Function addcleanparameteres()  accesstoken I' , accesstoken);
        proxyprinttodiv('Function addcleanparameteres()  convertmethod I' , convertmethod,80);
        var outputparameters = {};
        var dtoloc = 0;
        var proposedLeft = "";
        var proposedRight = "";
        var dtoobject = {};
        var inputParametersObject = {};
        var childdto = dtotype;
        var preAmble="";
        var item="";
        var moreParameters={};
        var executeobject={};
        var eafield="";
        var otherdtoobject={};
        var resultlist=[];

        // first try to get dtoobject from method
        inputParametersObject = resultObj;

        if ((inputParametersObject['metadata.method'])) { // && (dtotype=="")) {
            childdto = inputParametersObject['metadata.method'];
            // dtoobject=getwidmaster({'wid':metadata,
            // 						'command.convertmethod':'dto',
            // 						'command.dtotype':metadata});
            executeobject={};
            //executeobject["executethis"]=getwidmaster;
            executeobject["wid"]=childdto;
            executeobject["command.convertmethod"]="dto";
            executeobject["command.dtotype"]=childdto;
            //dtoobject=executethis(executeobject,execute);
            dtoobject=executethis(executeobject,getwidmaster);
            proxyprinttodiv('Function addcleanparameteres()  result dtoobject ',  dtoobject,80);
            //dtoobject=executethis({'executethis':'getwidmaster', 'wid':metadata,
            //						'command.convertmethod':'dto',
            //						'command.dtotype':metadata}); // not sure if this ever worked
        }

        // next get dtoobject from dtotype -- aggressive
        childdto=dtotype;
        if (dtotype!=="") {
            proxyprinttodiv('Function addcleanparameteres()  dtotype check ',  dtotype);
            otherdtoobject = aggressivedto(dtotype, "", 10);
            proxyprinttodiv('Function addcleanparameteres()  otherdtoobject ',  otherdtoobject);
            proxyprinttodiv('Function addcleanparameteres()  countKeys(otherdtoobject) ',  countKeys(otherdtoobject));
            proxyprinttodiv('Function addcleanparameteres()  countKeys(dtoobject) ',  countKeys(dtoobject));

            // if dtotype object is bigger than method dtoobject then swtich who is childdto
            if (countKeys(otherdtoobject) > countKeys(dtoobject)) {
                dtoobject=otherdtoobject;
                childdto=inputParametersObject['metadata.method'];
            }
        }

        proxyprinttodiv('Function addcleanparameteres()  childdto ', childdto,80);
        proxyprinttodiv('Function addcleanparameteres()  dtotype : II ',  dtotype,80);

        // if dtotype was blank then just adopt it from method
        if (dtotype=="") {dtotype=resultObj["metadata.method"]};

        // if dtotype <> method then we need to add to parameters
        if (resultObj["metadata.method"] != dtotype) {
            proxyprinttodiv('Function addcleanparameteres()  resultObj' , resultObj, 80);
            proxyprinttodiv('Function addcleanparameteres()  dtoobject inside ' , dtoobject, 80);

            for (item in dtoobject) {

                if (
                    ((dtoobject[item] == 'onetomany') ||
                        (dtoobject[item] == 'onetoone'))) {
                    preAmble=item;
                }
            }
            proxyprinttodiv('Function addcleanparameteres()  preAmble ' , preAmble,80);


            for (item in resultObj) {  // now step through each record that could be changed
                proposedLeft=item;
                proposedRight=resultObj[item];
                // taken out 11-5
                //if ((item!='wid') && (item!='metadata.method')) {
                proxyprinttodiv('Function addcleanparameteres()  item' , item, 81);
                proposedLeft=""; // work on left first...check if add or remvove
                if ((cleanmethod=="add") && (preAmble!="")) {
                    if (((item!='wid') && (item!='metadata.method')) || (childdto!=dtotype)) {
                        proposedLeft=preAmble + "." + item
                    }
                    else {proposedLeft=item}
                }


                proxyprinttodiv('Function addcleanparameteres()  proposedLeft' , proposedLeft,81);
                proxyprinttodiv('Function addcleanparameteres()  proposedRight' , proposedRight,81);
                if (proposedLeft!="") {outputparameters[proposedLeft]=proposedRight}
                proxyprinttodiv('Function addcleanparameteres()  outputparameters' , outputparameters,81);
            }
            // 11-5 **
            //
            if ((preAmble!="") && (childdto!=dtotype)) {
                outputparameters["metadata.method"]=dtotype;
                outputparameters["wid"]="";
            }
        }

        else {
            outputparameters=resultObj;

        }

        proxyprinttodiv('Function addcleanparameteres() resultObj end end end' , resultObj,80);
        proxyprinttodiv('Function addcleanparameteres()  dtotype end end end' , dtotype,80);
        proxyprinttodiv('Function addcleanparameteres()  convertmethod end end end' , convertmethod,80);
        proxyprinttodiv('Function addcleanparameteres()  outputparameters end end end ' , outputparameters, 80);
        proxyprinttodiv('Function addcleanparameteres()  dtoobject end end end ' , dtoobject, 80);
        return {
            parms : outputparameters,
            dto : dtoobject
        };
    }


    function getcleanparameters(resultObj, dtotype, accesstoken, cleanmethod, convertmethod) {
        proxyprinttodiv('Function getcleanparameteres() resultObj' , resultObj,83);
        proxyprinttodiv('Function getcleanparameteres()  dtotype' , dtotype,83);
        proxyprinttodiv('Function getcleanparameteres()  accesstoken' , accesstoken);
        proxyprinttodiv('Function getcleanparameteres()  convertmethod' , convertmethod,83);
        var outputparameters = {};
        var dtoloc = 0;
        var proposedLeft = "";
        var proposedRight = "";
        var dtoobject = {};
        var inputParametersObject = {};
        var childdto = dtotype;
        var preAmble="";
        var item="";
        var moreParameters={};
        var executeobject={};
        var eafield="";
        var otherdtoobject={};
        var resultlist=[];

        // goal of this section is to get inherited parameters
        if (
            ((resultObj['wid']!==undefined)) &&
                ((resultObj['wid']!==resultObj['metadata.method']) || (dtotype="defaultdto"))
            )
        {
            dtoobject=aggressivedto(resultObj['wid'],"");
            proxyprinttodiv('Function getcleanparameteres()  aggressivedto ' , dtoobject, 83);
            proxyprinttodiv('Function getcleanparameteres()  resultObj ' , resultObj,83);

            for (item in dtoobject) {
                preamble="";
                proposedLeft=item;
                proposedRight=dtoobject[item];

                if (proposedRight == 'inherit') {

                    dtoloc=proposedLeft.lastIndexOf(".");
                    if (dtoloc!=-1) {
                        preamble=proposedLeft.substring(0 ,dtoloc);
                        proposedLeft=proposedLeft.substring(dtoloc+1, proposedLeft.length);
                    }
                    executeobject={};
                    //executeobject["executethis"]=getwidmaster;
                    executeobject["command.convertmethod"]="nowid";
                    //executeobject["executethis"]=getwid;
                    executeobject["wid"]=proposedLeft;
                    //moreParameters=executethis(executeobject,execute);
                    moreParameters=executethis(executeobject,getwidmaster);
                    proxyprinttodiv('Function getcleanparameteres()  moreParameters----' , moreParameters,83);
                    for (eafield in moreParameters) {
                        if (preamble=="") {
                            resultObj[eafield]=moreParameters[eafield];
                        }
                        else {
                            resultObj[preamble+'.'+eafield]=moreParameters[eafield];
                        }
                    }


                    proxyprinttodiv('Function getcleanparameteres()  after each inherit' , resultObj,83);
                }
            }
        }
        proxyprinttodiv('Function getcleanparameteres()  after overall inherit' , resultObj,83);
        // read dto -- and delete what should not surive

        //childdto=dtotype;
        if (dtotype=="") {dtotype=resultObj["metadata.method"]};

        if (resultObj["metadata.method"] != dtotype) {

            for (item in resultObj) {  // now step through each record that could be changed
                proposedLeft=item;
                proposedRight=resultObj[item];
                // taken out 11-5
                //if ((item!='wid') && (item!='metadata.method')) {
                proxyprinttodiv('Function getcleanparameteres()  item' , item, 84);
                proposedLeft=""; // work on left first...check if add or remvove

                //dtoloc=item.indexOf(childdto+".");
                dtoloc=item.indexOf(dtotype+".");
                proxyprinttodiv('Function getcleanparameteres()  dtoloc' , dtoloc);
                if (dtoloc!=-1) {
                    proposedLeft=item.substring(dtoloc+dtotype.length+3 ,item.length);
                    // assume record looks like this authordto.booksdto.0.name
                    // if dtotype = booksdto default will convert that to name
                    // dtonum to booksdto.0.name
                    // num to 0.name
                    if (convertmethod=="dtonum") {
                        proposedLeft=item.substring(dtoloc ,item.length);
                    }
                    if (convertmethod=="num") {
                        proposedLeft=item.substring(dtoloc+dtotype.length+1 ,item.length);
                    }
                }

                // remove addthis from the results if it was getwidmaster
                dtoloc=item.indexOf("addthis.");
                proposedLeft=proposedLeft.replace("addthis.","");

                proxyprinttodiv('Function getcleanparameteres()  proposedLeft' , proposedLeft,84);
                proxyprinttodiv('Function getcleanparameteres()  proposedRight' , proposedRight,84);
                if (proposedLeft!="") {outputparameters[proposedLeft]=proposedRight}
                proxyprinttodiv('Function getcleanparameteres()  outputparameters' , outputparameters,84);
            }
        }

        else { // if resultObj["metadata.method"] = dtotype)
            outputparameters=resultObj;

        }

        proxyprinttodiv('Function getcleanparameteres() resultObj end end end' , resultObj,83);
        proxyprinttodiv('Function getcleanparameteres()  dtotype end end end' , dtotype,83);
        proxyprinttodiv('Function getcleanparameteres()  convertmethod end end end ' , convertmethod,83);
        proxyprinttodiv('Function getcleanparameteres()  outputparameters end end end ' , outputparameters, 83);
        proxyprinttodiv('Function getcleanparameteres()  dtoobject end end end' , dtoobject, 83);
        return {
            parms : outputparameters,
            dto : dtoobject
        };
    }


    exports.getwidmaster =  getwidmaster = function getwidmaster(parameters, callback){
        proxyprinttodiv('Function getwidmaster() incoming parameters, now go to getwidmasterLevel I ' , parameters, 10);
        parameters = tolowerparameters(parameters, {'wid':'add', 'metadata.method':'add', 'command.dtotype':'add', 'command.convertmethod':'add', 'command.checkflag':'add', 'command.inherit':'add', 'command.accesstoken':'add'});

        delete parameters['executethis']; //** added 11/2
        proxyprinttodiv('Function getwidmaster() incoming parameters, now go to getwidmasterLevel ' , parameters, 10);

        var wid = parameters.wid;
//	var resultObj = {};
        proxyprinttodiv('Function getwidmasterLevel() incoming parameters, to getWidMongo' , parameters,10);

        var dtotype=parameters["command.dtotype"];
        var inherit=parameters["command.inherit"];
        var accesstoken=parameters["command.accesstoken"];
        var checkflag=parameters["command.checkflag"];
        var convertMethod=parameters["command.convertmethod"];
        var resultObj = {};

        proxyprinttodiv('Function getwidmasterLevel() wid ' , wid,10);

        resultObj = getWidMongo(wid, convertMethod, accesstoken, dtotype);

        proxyprinttodiv('Function getwidmasterLevel() first get ' , resultObj,10);

// could be moved inside clean parm?
        if(inherit) { // inherit points to wid with more datan- Grab the params from mongo(local storage)
            executeobject={};
            executeobject["executethis"]=getwid;
            executeobject["wid"]=inherit;
            moreParameters=executethis(executeobject,getwid);
            //moreParameters = getfrommongo({'wid':inherit}); // if we find some, add them to the return object
            if(moreParameters) {
                resultObj = jsonConcat(resultObj, moreParameters);  // if duplicates then currentLevelObject{} wins
            }
        }

        if (checkflag!="") { // see if right side of output needs to be made mongo compatible
            dtoList=objectToList(dtoGlobalParameters);
            resultList = objectToList(resultObj);
            resultList = CleanBasedOnCheckflagList(checkflag, resultList, dtoList);
            resultObj = listToObject(resultList);
        }

        olddebug=Debug;
//	Debug=olddebug;
        proxyprinttodiv('Function getwidmasterLevel() ** before ' , resultObj,10);
        //if (Object.keys(resultObj).length !== 0) {
        if ((Object.keys(resultObj).length !== 0) && (resultObj['wid']!=resultObj['metadata.method'])) {
            resultObj=getcleanparameters(resultObj, dtotype, accesstoken, "remove", convertMethod);
            resultObj=resultObj.parms
        }
        //resultObj=resultObj.parms || {};   // ************

        proxyprinttodiv('Function getwidmasterLevel() ** after ' , resultObj,10);
        if ((convertMethod=="nowid") || (convertMethod=="dto")) { //(convertMethod=="nowid") { -- added 11/12 **
            delete resultObj["wid"];
            delete resultObj["metadata.method"];
        }

//	Debug=olddebug;

        if(callback instanceof Function) { callback(resultObj); }
        else { return resultObj; }
    }


    function getWidMongo(widInput, convertMethod, accessToken, dtoin) {

        var olddebug=Debug;
//Debug=olddebug;
        proxyprinttodiv('Function getWidMongo() in widInput: ', widInput);
        proxyprinttodiv('Function getWidMongo() convertmethod', convertMethod);

        if (!widInput) {
            return;
        }
        var dtoGlobalParameters = {};
        var attr = "";
        var nextLevelParameters = {};
        var outgoingParameters = {};
        var moreDTOParameters = {};
        var moreParameters = {};
        var currentLevelObjectList = [];
        var dtoGlobalParametersList = [];
        var addedobject = {};
        var eachresult = "";
        var createdto ='false';
        var createrelationships = 'false';
        var savedto = 'false';
        var createid = widInput;
        var dtotype = "";

        var executeobject={};

        //executeobject["executethis"]=getwid;
        executeobject["wid"]=widInput;
        //Debug='true';
        proxyprinttodiv('Function getWidMongo()  executeobject' , executeobject);
        //var x = window['execute'];
        //var currentLevelObject=executethis(executeobject,execute);
        var currentLevelObject=executethis(executeobject,getwid);

        //var currentLevelObject = getfrommongo({'wid': widInput});
        // ++++ calling getwid is good calling it through execute not
        proxyprinttodiv('Function getWidMongo() currentLevelObject ++++++ top level object ', currentLevelObject,10);
        //Debug='false';
        // if dtotype not sent in, then figure it out -- dto type will be blank at all 1+ levels
        // first choide for dto is its method
        if ((currentLevelObject["metadata.method"]!==undefined) &&
            (currentLevelObject["metadata.method"]!=="")) {
            dtotype=currentLevelObject["metadata.method"];
            // Get the wid from mongo(local storage)
            executeobject={};
            //executeobject["executethis"]=getwid;
            executeobject["wid"]=dtotype;
            //dtoGlobalParameters=executethis(executeobject,execute);
            dtoGlobalParameters=executethis(executeobject,getwid);
            console.log(dtoGlobalParameters);
            proxyprinttodiv('Function getWidMongo() dtoGlobalParameters -- 111', dtoGlobalParameters,10);

            //dtoGlobalParameters = getFromMongo({'wid':dtotype});
        }
        proxyprinttodiv('Function getWidMongo() dtoGlobalParameters isEmpty', (isEmpty(dtoGlobalParameters)));
//	if (Object.keys(dtoGlobalParameters).length === 0) {
//	if (isEmpty(dtoGlobalParameters)) {
        //if (dtotype!="") {createid=dtotype}
        //dtotype='defaultdto'
        // executeobject={};
        // executeobject["mongowid"]=widInput;
        // executeobject["mongorelationshiptype"]="attributes";
        // executeobject["mongorelationshipmethod"]="all";
        // executeobject["mongorelationshipdirection"]="forward";
        // executeobject["mongowidmethod"]="";
        // executeobject["convertmethod"]="";
        // executeobject["dtotype"]="";
        // executeobject["executethis"]=querywid;
        // proxyprinttodiv('Function getWidMongo()  executeobject III' , executeobject);
        // //moreDTOParameters=querywidlocal(executeobject);	// ** mongoquery
        // proxyprinttodiv('Function getWidMongo()  executeobject III-result' , moreDTOParameters);
        // moreDTOParameters=executethis(executeobject,execute);
        // //*****10-31
        // //moreDTOParameters = simpleQuery(widInput, "attributes", "all", "forward", "", "", "");
        // for (eachresult in moreDTOParameters) {
        // 	for (key in moreDTOParameters[eachresult]) {
        // 		proxyprinttodiv('Function getWidMongo()eachresult[0] ',key);
        // 		//dtoGlobalParameters[key] = 'onetomany'
        // 		moreParameters[key] = 'onetomany'
        // 		}
        // 	}
        // for (eachresult in currentLevelObject) {
        // 	//dtoGlobalParameters[eachresult] = 'string'
        // 	moreParameters[eachresult] = 'string'
        // 	}

        proxyprinttodiv('Function getWidMongo() widInput ', widInput,10);
        moreParameters=aggressivedto(widInput,"",1);
        proxyprinttodiv('Function getWidMongo() moreParameters ', moreParameters,10);
        //if ((isEmpty(dtoGlobalParameters)) || (dtoin=="defaultdto")) {
        if ((dtoGlobalParameters['metadata.method']=="") || (dtoin=="defaultdto")) {
            dtoGlobalParameters=moreParameters
        }

        //}

        proxyprinttodiv('Function getWidMongo() dtoGlobalParameters IV ', dtoGlobalParameters);

        currentLevelObjectList = objectToList(currentLevelObject);
        dtoGlobalParametersList = objectToList(dtoGlobalParameters);


        proxyprinttodiv('Function getWidMongo() dtoGlobalParameters near start', dtoGlobalParameters);
        proxyprinttodiv('Function getWidMongo() currentLevelObject II ', currentLevelObject,10);

        currentLevelObjectList = SplitObjectList(currentLevelObjectList, dtoGlobalParametersList);
        currentLevelObjectList = currentLevelObjectList.match;
        currentLevelObject = listToObject(currentLevelObjectList);

        proxyprinttodiv('Function getWidMongo() currentLevelObject ----about to start relationships----', currentLevelObject,10);


        outgoingParameters=currentLevelObject;

        dtoGlobalParameters=moreParameters; // line added 11-9 -- step through an agressive dto

        for (var item in dtoGlobalParameters) {
            proxyprinttodiv('Function getWidMongo() step through dto ', (item + ' ' + dtoGlobalParameters[item]),10);
            nextLevelParameters = {};
            attr = dtoGlobalParameters[item];
            if ((attr == "onetoone")  || (attr == "onetomany")) { // 10-24 || (attr == "inherit"))  {
                if (attr == "onetoone") { // if dto states 'onetoone' then search for related records that match property
                    nextLevelParameters = getAndFormatNextLevel(widInput, "attributes", "last", "forward", item, convertMethod, accessToken, dtoin); // removed inherit dtoGlobalParameters
                } // 10-5 took away dtotype --
                if (attr == "onetomany") { // if dto states 'onetomany' then search for related records that match property
                    nextLevelParameters = getAndFormatNextLevel(widInput, "attributes", "all", "forward", item, convertMethod, accessToken, dtoin); //removed dtoGlobalParameters
                } // 11-9 readded inherit from cleanparms here:
                // if ((attr == "inherit") && (convertMethod != 'dto')) {
                //          	executeobject={};
                //          	executeobject["executethis"]="getwidmaster"; // changed from getwidmaster
                //          	executeobject["wid"]=item;
                //          	executeobject["command.convertmethod"]="nowid";
                //          	var x = window['execute'];
                //          	nextLevelParameters=executethis(executeobject,x);
                //          	proxyprinttodiv('Function getWidMongo nextLevelParameters - inherit', nextLevelParameters,1);
                //          	}
                //	nextLevelParameters = getwidmaster({'wid':item, 'command.convertmethod':'nowid'});
                //	};
                // 11-15 line below commented
                //if (nextLevelParameters=="") {AddMongoRelationship(widInput,item,"attributes");} // if DTO existed, but no relationship at place hoder
                proxyprinttodiv('Function getWidMongo() came back from getAndFormatNextLevel, nextLevelParameters= ', nextLevelParameters);
                proxyprinttodiv('Function getWidMongo() step through dto ', (item+' '+dtoGlobalParameters[item]));
                outgoingParameters = jsonConcat(outgoingParameters, nextLevelParameters);
                proxyprinttodiv('Function getWidMongo() outgoingParameters ', outgoingParameters);
            } // if
            //proxyprinttodiv('Function getWidMongo() outgoingParameters ', outgoingParameters);
        } // for
        proxyprinttodiv('Function getWidMongo() end of relationsips---------------- : ', outgoingParameters);
        Debug=olddebug;
        return outgoingParameters
    }

// Starting of getAndFormatNextLevel function
    function getAndFormatNextLevel(widInput, mongorelationshiptype, mongorelationshipmethod, mongorelationshipdirection, mongowidmethod, convertmethod, accesstoken, dtoin) {

        proxyprinttodiv('Function getAndFormatNextLevel() arriving widInput', widInput,11);
        proxyprinttodiv('-------Function getAndFormatNextLevel() in : mongowidmethod', mongowidmethod,11);
        proxyprinttodiv('-------Function getAndFormatNextLevel() in : convertmethod', convertmethod,11);
        proxyprinttodiv('-------Function getAndFormatNextLevel() in : dtoin', dtoin,11);
        proxyprinttodiv('-------Function getAndFormatNextLevel() in : mongorelationshipmethod', mongorelationshipmethod,11);

        var executeobject={};
        executeobject["mongowid"]=widInput;
        executeobject["mongorelationshiptype"]=mongorelationshiptype;
        executeobject["mongorelationshipmethod"]=mongorelationshipmethod;
        executeobject["mongorelationshipdirection"]=mongorelationshipdirection;
        executeobject["mongowidmethod"]=mongowidmethod;
        executeobject["convertmethod"]=convertmethod;
        executeobject["dtotype"]="";
        executeobject["executethis"]=querywid;
        proxyprinttodiv('Function getAndFormatNextLevel()  executeobject III' , executeobject);
        //var relatedParameters=querywidlocal(executeobject); //
        //var relatedParameters=executethis(executeobject,execute);
        var relatedParameters=executethis(executeobject,querywid);
        // ***** 10-31
        //var relatedParameters = simpleQuery(widInput, mongorelationshiptype, mongorelationshipmethod, mongorelationshipdirection, mongowidmethod, convertmethod, ""); // removed dto type from end
        var drillDownParameters = {};
        var rowresult = ""
        var nextLevelParameters = [];
        var nextLevelParametersObject = {};
        var proposedLeft = "";
        var proposedRight = "";
        var item = "";
        var iteration = 0

        proxyprinttodiv('Function getAndFormatNextLevel() in : relatedParameters  after simpleQuery++++ starting related ++++', relatedParameters,11);
        // proxyprinttodiv('-------Function getAndFormatNextLevel() in : relatedParameters.length', relatedParameters.length);

        if (Object.keys(relatedParameters).length == 0) {return nextLevelParametersObject};
        //if (relatedParameters == "") {
        //	return;
        //}

        //for (var rowresult in relatedParameters) { // for this iteration: wid1: {a:b, c:d}
//	for(iteration = 0 ; (iteration< relatedParameters.length ) ; iteration++ ) {
        for(iteration = 0 ; (iteration< countKeys(relatedParameters)) ; iteration++ ) {
            rowresult=relatedParameters[iteration];

            proxyprinttodiv('Function getAndFormatNextLevel() in : iteration in going through results from simpleQuery', iteration,11);
            //proxyprinttodiv('Function getAndFormatNextLevel() in : current row', rowresult);

            //var rowObject = relatedParameters[rowresult];
            //for (item in rowObject) {
            //	var proposedLeft = item;
            //	var proposedRight = rowObject[item];
            //}
            for (key in rowresult) {
                proposedLeft = key;
                proposedRight = rowresult[key];
            }

            //iteration++; // proposedRight = {a:b, c:d}



            // LM: Found commented. Should delete?
            // ************
            //if (dtotype == 'onetomany') {
            //	proposedLeft == proposedLeft + "<" + iteration + ">"; // if dtotype=x then proposedLeft x<1>
            //}

            //if (convertmethod = "" && relatedParameters.length == 1) {
            //	proposedLeft = dtotype; // proposedLeft=x if only one related and convertmethod="" -- change it to just widdto
            //}
            // ************
            //var proposedObject ={};

            if (convertmethod == "wid") {

                //proxyprinttodiv('Function getAndFormatNextLevel() convertmethod', convertmethod);
                //proposedRight = item; // proposedRight = wid1
                //proxyprinttodiv('Function getAndFormatNextLevel() item', proposedRight);
                //proposedObject[mongowidmethod] = proposedLeft;
                //nextLevelParameters.push({"key":proposedLeft,"value":proposedRight}); // NextLevelParameters =  x<1>: wid1

                nextLevelParameters.push({"key":mongowidmethod,"value":proposedLeft});

                //		proxyprinttodiv('----------Function getAndFormatNextLevel() proposed wid object', proposedObject);

            }
            //alert(convertmethod);
            if (convertmethod == "json") {

                //proposedObject[proposedLeft] = proposedRight;
                //nextLevelParameters.push({"key":proposedLeft,"value":proposedRight}); // NextLevelParameters =  x<1>: {a:b, c:d}

                nextLevelParameters.push({"key":mongowidmethod,"value":JSON.stringify(proposedRight)});

                //		proxyprinttodiv('----------Function getAndFormatNextLevel() proposed json object', proposedObject);

            }

            if ((convertmethod == "") || (convertmethod == "dto") ||
                (convertmethod == "num") || (convertmethod == "dtonum")) {
                proxyprinttodiv('Function getAndFormatNextLevel() in convertmethod=blank, about to get drilldown: ', proposedLeft,11);
                drillDownParameters = getWidMongo(proposedLeft, convertmethod, accesstoken, dtoin); //dtoGlobalParameters, mongowidmethod);
                proxyprinttodiv('Function getAndFormatNextLevel() after drillDown object: ', drillDownParameters,11);
                //proxyprinttodiv('----------Function getAndFormatNextLevel() mongowidmethod: ', mongowidmethod);
                proxyprinttodiv('Function getAndFormatNextLevel() arriving widInput II', widInput,11);
                proxyprinttodiv('-------Function getAndFormatNextLevel() in : mongowidmethod II', mongowidmethod,11);
                proxyprinttodiv('-------Function getAndFormatNextLevel() in : convertmethod II', convertmethod,11);
                proxyprinttodiv('-------Function getAndFormatNextLevel() in : dtoin II', dtoin,11);
                proxyprinttodiv('-------Function getAndFormatNextLevel() in : mongorelationshipmethod II', mongorelationshipmethod,11);
                proxyprinttodiv('Function getAndFormatNextLevel() in : proposedLeft II', proposedLeft,11);
                proxyprinttodiv('Function getAndFormatNextLevel() in : proposedRight II', proposedRight,11);

                for(item in drillDownParameters) {
                    // LM: original line
                    if ((convertmethod == "dto") && ((item=="wid") || (item=="metadata.method"))) {
                    } // left empty by design
                    // ** do we need to replicate at top level?
                    else {

                        proposedLeft = mongowidmethod + "." + String(iteration) + "." + item;  // removed +1
//					if ((convertmethod == "dto") && (relatedParameters.length == 1)) { 

                        // added 11-18
                        proxyprinttodiv('Function getAndFormatNextLevel() mongorelationshipmethod', mongorelationshipmethod,11);
                        if (((convertmethod == "dto") && (countKeys(relatedParameters) == 1)) ||
                            (mongorelationshipmethod=="last")) {
                            //if ((convertmethod == "dto") && (countKeys(relatedParameters) == 1)) {
                            proposedLeft = mongowidmethod+"."+item;
                        }
                        // this should not put brackets if only one child

                        proposedRight = drillDownParameters[item];

                    }
                    //proxyprinttodiv('Function getAndFormatNextLevel() in : proposedLeft - drilldown loop', proposedLeft);
                    //proxyprinttodiv('Function getAndFormatNextLevel() in : proposedRight - drilldown loop', proposedRight);

                    nextLevelParameters.push({"key":proposedLeft,"value":proposedRight});

                    proxyprinttodiv('Function getAndFormatNextLevel() forloop nextLevelParameters as it grows', nextLevelParameters,11);
                    //proxyprinttodiv('Function getAndFormatNextLevel() drillDown aftr dot: ', drillDownParameters);
                    //proxyprinttodiv('Function getAndFormatNextLevel() nextLevelParameters after dot : ', nextLevelParameters);
                    //nextLevelParameters = jsonConcat(nextLevelParameters, drillDownParameters);
                    //proxyprinttodiv('Function getAndFormatNextLevel() nextLevelParameters after concat : ', nextLevelParameters);
                }
            }

            //proxyprinttodiv('Function getAndFormatNextLevel() nextLevelParameters list result : ', nextLevelParameters);
        }
        nextLevelParametersObject=listToObject(nextLevelParameters);

        proxyprinttodiv('Function getAndFormatNextLevel() nextLevelParametersObject +++++++finishing realted : ', nextLevelParametersObject,11);

        return nextLevelParametersObject;
    }

// This tears apart an object with properties that are objects.
// It opens up all the nested objects to create a flat list of properties
// of an object. Then AddWidParameters is called, which in turn calls
// AddMaster to get the wid placed into the db or local storage. Note that 
// nothing calls this except the test. This is the highest level of the adding
// process for DOT notation.
    exports.addwidmaster = addwidmaster = function addwidmaster (inputObject, callback) {
        var OutParameters = ConvertToDOTdri(inputObject);
        //OutParameters = tolowerparameters(OutParameters, OutParameters['command.convertmethod']);
        var Wid = AddWidParameters(OutParameters);
        if (callback instanceof Function) { callback({Wid:Wid}); }
        else { return {Wid:Wid}; }


        //proxyprinttodiv('Function addwidmaster() Constant input : ', input );
        //proxyprinttodiv('Function addwidmaster() ConstandtdtoobjectDOT : ', dtoobjectDOT );
        //proxyprinttodiv('Function addwidmaster() Received into addwidmaster inputObject : ', inputObject );
        //proxyprinttodiv('Function addwidmaster() Sent out from OutParameters : ', OutParameters );
    };

// Sets up call to addwidmaster (to add a parameter to the DTO ?)
    function AddWidParameters(parameterObject) {

        //proxyprinttodiv('Function AddWidParameters()  parameterObject : ',  parameterObject);

        // obj sets up the match and nomatch arrays
        var obj = MatchPrefix(parameterObject, "command");
        // inputParametersList is the part of the DOT that does not match the DTO
        var inputParametersList = obj.nomatch;
        // commandList is the part of the DOT that matches the DTO
        var commandList = obj.match;
        // commandobject makes an object out of the commandlist
        var commandobject = listToObject(commandList);
        var inputParametersObject = listToObject(inputParametersList);


        proxyprinttodiv('Function AddWidParameters()  inputParametersObject : ',  inputParametersObject);
        //proxyprinttodiv('Function AddWidParameters()  commandList : ',  commandobject);

        var parameterObject={};
        var dtoobject ={};
        var metadata = "";

        commandobject = tolowerparameters(commandobject, {'command.dtotype':'add', 'command.convertmethod':'add', 'command.checkflag':'add', 'command.inherit':'add', 'command.accesstoken':'add'});
        inputParametersObject = tolowerparameters(inputParametersObject, {'metadata.method':'add','metadata.style':'true', 'wid':'add', 'primarywid':'true', 'secondarywid':'true', 'relationshiptype':'true'});
        delete inputParametersObject['executethis']; //** added 11/2
        if (inputParametersObject["wid"]===undefined) {inputParametersObject["wid"]="";}
        //proxyprinttodiv('Function AddWidParameters()  commandList : ',  commandobject);
        olddebug=Debug;
//   	Debug=olddebug;
        var checkflag = commandobject["command.checkflag"];
        var accesstoken = commandobject["command.accesstoken"];
        var inherit = commandobject["command.inherit"];
        var dtotype = commandobject["command.dtotype"];
        var convertmethod = commandobject["command.convertmethod"];

        proxyprinttodiv('Function AddWidParameters()  checkflag ',  checkflag);
        proxyprinttodiv('Function AddWidParameters()  accesstoken : I ',  accesstoken);
        proxyprinttodiv('Function AddWidParameters() inherit : I ',  inherit);

        proxyprinttodiv('Function AddWidParameters()  dtotype : dtotype ',  dtotype);
//  	Debug=olddebug;

//		olddebug=Debug;
//		Debug=olddebug;
        proxyprinttodiv('Function addWidParameters ** before ' , inputParametersObject,15);
        proxyprinttodiv('Function AddWidParameters() convertmethod ',  convertmethod,15);
        proxyprinttodiv('Function AddWidParameters()  dtotype : dtotype ',  dtotype,15);


        parameterObject = addcleanparameters(inputParametersObject, dtotype, accesstoken, "add", convertmethod);
        inputParametersObject = parameterObject.parms; // ************ prob dont need this
        dtoobject = parameterObject.dto;   // ************
        proxyprinttodiv('Function AddWidParameters()  inputParametersObject ',  inputParametersObject,15);
        proxyprinttodiv('Function AddWidParameters()  dtoobject ',  dtoobject,15);

        // not sure if this is important
        if ((inputParametersObject['metadata.method'] !== "") && (dtotype=="")) {
            metadata = inputParametersObject['metadata.method'];
        }

// clean parameters should filter parameters based on dtotype
// if dtotype <> inputparmeterobject[method] then add preamble to all parameters
// ((inputParametersObject['metadata.method'] !== "") && (dtotype=="")) 
// (dtotype!=="") 


        proxyprinttodiv('Function addWidParameters ** after ' , inputParametersObject);
        //if (convertMethod=="nowid") {
        //	delete resultObj["wid"];
        //	delete resultObj["metadata.method"];
        //}
//		Debug=olddebug;

        proxyprinttodiv('Function AddWidParameters() dtoobject return: ',  dtoobject);
        //proxyprinttodiv('Function AddWidParameters() metadata : ',  metadata);

        if (inherit) {
            executeobject={};
            executeobject["executethis"]=getwid;
            executeobject["wid"]=inherit;
            var moreParameters=executethis(executeobject,getwid);
            //var moreParameters = getfrommongo({'wid':inherit});
            if (moreParameters) {
                inputParametersObject = jsonConcat(inputParametersObject,moreParameters);  // if duplicates then currentLevelObject{} wins
            }
        }

        var inputList = objectToList(inputParametersObject);
        var dtoList=objectToList(dtoobject);

        //proxyprinttodiv('Function AddWidParameters()  inputList : ',  inputList);
        //proxyprinttodiv('Function AddWidParameters()  metadata : ',  metadata);
        olddebug=Debug;
//   	Debug=olddebug;
        proxyprinttodiv('Function AddWidParameters()  all parms to addmaster : ',  {"dtolist":dtoList, "inputlist":inputList, "metadata": metadata});
//	Debug=olddebug;
        if (inputParametersObject["wid"]===undefined) {inputParametersObject["wid"]="";}
        Wid = AddMaster(dtoList, inputList, inputParametersObject["wid"], metadata);

        proxyprinttodiv('Function AddWidParameters() came back from addmaster : ',  Wid);

        return Wid;
    }

    function AddMaster(dtoList, parameterList, widName, dtotype) {
        //Debug='true';
        // proxyprinttodiv('Function AddMaster : dtoList ', dtoList);
        // proxyprinttodiv('Function AddMaster : parameterList', parameterList);
        // proxyprinttodiv('Function AddMaster : widName ', widName);
        // proxyprinttodiv('Function AddMaster : dtotype', dtotype);
        proxyprinttodiv('Function AddMaster : inbound parms all ', {"dtolist":dtoList, "parameterList":parameterList, "widName":widName, "dtotype":dtotype});
        var ChildrenListobj = {}; // go through list of incoming parameters to generate a list of childrent dtos
        var dtoobject = listToObject(dtoList); // generate a copy of dtolist that is an object
        for (key in dtoobject) { // go through each parameter
            if ((dtoobject[key] == 'onetomany') || (dtoobject[key] == 'onetoone')) {
                // see if dto list tells us is a child
                ChildrenListobj[key] = dtoobject[key]; // add it to children object list
            }
        }
        proxyprinttodiv('Function AddMaster the childrent DTOs of this object: ChildrenListobj: ', ChildrenListobj);

        var ParentdtoList = dtoList; // now go through childrent list and delete from copy of incoming parameters
        var ParentList = parameterList; // anything related to these children

        for (currentparameter in ChildrenListobj) {
            ParentList = MatchDelete(ParentList, currentparameter);
            ParentdtoList = MatchDelete(ParentdtoList, currentparameter);
        }

        var ParentObject = {}; // add survivors -- that is the parent
        var ParentWid = '';

        ParentObject = MongoAddEditPrepare(ParentdtoList, ParentList, widName, dtotype);
        ParentWid = ParentObject["wid"];

        //olddebug=Debug;
        //Debug='true';

        var RelatedListParameters = SplitObjectList(parameterList, ParentList); // figure out what the left over parameters are
        RelatedListParameters = RelatedListParameters.nomatch;
        var RelatedListdto = SplitObjectList(dtoList, ParentdtoList);
        RelatedListdto = RelatedListdto.nomatch;
        proxyprinttodiv('Function AddMaster : RelatedListParameters, after adding parent, now add these children parameters', RelatedListParameters);
        proxyprinttodiv('Function AddMaster : RelatedListdto, , after adding parent, now add these children dto', RelatedListdto);

        var attrtype = "";							// onetoone we will search for only one realted (last), onetomany (all)
        var editflag = "";					// do we need to read (find out widnames) before add
        var attr = "";
        dtotype = "";
        var ParametersToAdd=[];
        var SplitParameters=[];
        var ChildrendtoList=[];
        var ChildWid='';
        var widtoadd='';
        var widlist = [];
        var parameterindexobj = {};
        var currentparameter='';
        var splitkey =''
        var currentNumber=0;
        var sortable=[];
        var currentitem='';
        var childrentype=''
        for(childrentype in ChildrenListobj) { 	// step through all direct children
            editflag='false';
            attr = ChildrenListobj[childrentype]; 	// onetoone or onetomany?  -left side of ChildrenListobj is the dto name
            proxyprinttodiv('Function AddMaster : process this child object childrentype + attr', childrentype+' '+attr);
            //proxyprinttodiv('Function AddMaster : attr', attr);
            //proxyprinttodiv('Function AddMaster : parameterindexobj', parameterindexobj);

            // this was moved insdie child

            //if (RelatedListParameters!==[]) {}
            parameterindexobj = {}; // create a list of (children) parameters that start with number
            for (currentcount in RelatedListParameters) {
                //proxyprinttodiv('Function AddMaster : currentcount', currentcount);
                currentparameter = RelatedListParameters[currentcount].key;
                //proxyprinttodiv('Function AddMaster : currentparameter', currentparameter);
                splitkey = currentparameter.split(".");
                //proxyprinttodiv('Function AddMaster : splitkey', splitkey);
                if (splitkey[0]==childrentype) {
                    currentNumber = 0;
                    if (splitkey[1]!==undefined) {currentNumber = Number(splitkey[1])};
                    //proxyprinttodiv('Function AddMaster : currentNumber', currentNumber);
                    if (currentNumber>=0) {
                        //proxyprinttodiv('Function AddMaster : currentNumber II ', currentNumber);
                        parameterindexobj[splitkey[1]] = splitkey[0];
                    }
                }
                //proxyprinttodiv('Function AddMaster : parameterindexobj, sorted, which children have dots ', parameterindexobj);
                //proxyprinttodiv('Function AddMaster : parameterindexobj I  ', parameterindexobj);
            }

            sortable=[];
            for (currentitem in parameterindexobj) {
                sortable.push([currentitem, parameterindexobj[currentitem]]);
            }
            proxyprinttodiv('Function AddMaster : parameterindexobj II  ', sortable);
            // code below added 10/2 sort parameterindexobj

            if (Object.keys(parameterindexobj).length !== 0) {
                sortable=sortable.sort(function(aObj, bObj) {
                    var a = getAttributeByIndex(aObj, 0);
                    var b = getAttributeByIndex(bObj, 0);
                    if (a < b) return -1;
                    if (a > b) return 1;
                    return 0;
                });
            }

            parameterindexobj=sortable;

            proxyprinttodiv('Function AddMaster : parameterindexobj, sorted, which children have dots ', parameterindexobj);

            // ** note there will be issues with sort


            if (Object.keys(parameterindexobj).length !== 0) {	// for this children, any parameters with number?
                editflag = 'true'					// if we had parameterindex, then edit must be true
            }

            //proxyprinttodiv('Function AddMaster : editflag', editflag);
            if (attr == 'onetoone') {
                editflag = 'true'; 					// onetoone is alway edit true
                attrtype = 'last';					// onetoone -- read last record
            }
            if (attr == 'onetomany') {
                attrtype = 'all'					// onetomany --- read all records
            }
            widlist = [];
            if (editflag == 'true') {				// edit means read wids before write -- to get wid names
                // get list of related wids
                var executeobject={};
                executeobject["mongowid"]=ParentWid;
                executeobject["mongorelationshiptype"]="attributes";
                executeobject["mongorelationshipmethod"]=attrtype;
                executeobject["mongorelationshipdirection"]="forward";
                executeobject["mongowidmethod"]=childrentype;
                executeobject["convertmethod"]="";
                executeobject["dtotype"]="";
                proxyprinttodiv('Function AddMaster()  executeobject III' , executeobject);
                executeobject["executethis"]=querywid;
                //var widlist=querywidlocal(executeobject);	 // **
                var widlist=executethis(executeobject,querywid);
                // **** 10-31
                //var widlist = simpleQuery(ParentWid, "attributes", attrtype, "forward", childrentype, "", "");
                proxyprinttodiv('Function AddMaster : widlist, these are the wids related to parent and current child', widlist);
            }

            // do children with numbers first

            SplitParameters = MatchPrefixDelete(RelatedListdto, childrentype);
            ChildrendtoList = SplitParameters.match;
            RelatedListdto = SplitParameters.nomatch;

            // save copy for next iteration
            proxyprinttodiv('Function AddMaster : ChildrendtoList - 111, parameters for current child', ChildrendtoList);
            proxyprinttodiv('Function AddMaster : RelatedListdto - 111, dto for current child, now determine if number or not A/B' , RelatedListdto);

            if (Object.keys(parameterindexobj).length !== 0) {
                for (var currentchild in parameterindexobj) {
                    proxyprinttodiv('Function AddMaster : childrenttype.currentchild - 222, process this number first, look up in widlist', childrentype+'.'+currentchild);
                    SplitParameters = MatchPrefixDelete(RelatedListParameters, childrentype+'.'+currentchild);	// separate parameters to those that start with curr number
                    ParametersToAdd = SplitParameters.match;
                    RelatedListParameters = SplitParameters.nomatch;		// each iteration relatedlistparameter will become smaller
                    //proxyprinttodiv('Function AddMaster : editflag', editflag);
                    //if (ParametersToAdd.length!==0) {		****
                    if (countKeys(ParametersToAdd)!==0) {
                        widtoadd='';
                        if ((editflag='true') && (widlist!="")) {
                            if (widlist[currentchild]!==undefined) {   // removed -1
                                for (var widName in widlist[currentchild]) {  // removed -1
                                    widtoadd=widName;
                                }
                            }
                        };
                        proxyprinttodiv('Function AddMaster : ChildrendtoList - 222 wid+childdto A-', {"widtoadd":widtoadd, "ChildrendtoList":ChildrendtoList});
                        proxyprinttodiv('Function AddMaster : ParametersToAdd - 222, childdto+childparameters A- ', {"childrentype":childrentype, "ParametersToAdd": ParametersToAdd});
                        ChildWid = AddMaster(ChildrendtoList, ParametersToAdd, widtoadd, childrentype);
                        proxyprinttodiv('Function AddMaster : came back ChildWid -- 222, child added, now call addrelationship A-', ChildWid);
                        AddMongoRelationship(ParentWid, ChildWid, "attributes");
                        //proxyprinttodiv('Function AddMaster : came back add relationship -- 222', ChildWid);
                    }
                }
            }

            SplitParameters = MatchPrefixDelete(RelatedListParameters, childrentype); // split parameters based on childtype
            ParametersToAdd = SplitParameters.match;						// do right now
            RelatedListParameters = SplitParameters.nomatch;   				// do next iteration
            proxyprinttodiv('Function AddMaster : ParametersToAdd 333 parameters for current child B and not numbers', ParametersToAdd);
            proxyprinttodiv('Function AddMaster : RelatedListParameters 333 dto for current child B', RelatedListParameters);


            //if (ParametersToAdd!=='') {
            //if (ParametersToAdd.length!==0) {	***
            if (countKeys(ParametersToAdd)!==0) {
                widtoadd='';   // this is to catch onetoone case
                if ((attr=='onetoone') && (widlist!="")) {
                    if (widlist[0]!==undefined) {
                        for (var widName in widlist[0]) {
                            widtoadd=widName;
                        }
                    }
                };
                proxyprinttodiv('Function AddMaster : ChildrendtoList - 444 wid+childdto B- ', {"widtoadd":widtoadd, "ChildrendtoList":ChildrendtoList});
                proxyprinttodiv('Function AddMaster : ParametersToAdd - 444, childdto+childparameters B-', {"childrentype":childrentype, "ParametersToAdd": ParametersToAdd});
                ChildWid = AddMaster(ChildrendtoList, ParametersToAdd, widtoadd, childrentype);
                proxyprinttodiv('Function AddMaster : came back ChildWid -- 444, now call addrelationship B-', ChildWid);
                AddMongoRelationship(ParentWid, ChildWid, "attributes");
                //proxyprinttodiv('Function AddMaster : came back add relationship -- 444', ChildWid);

            }
        }
        return ParentWid
        //Debug=olddebug;
    }

// Adds a wid to the database and returns the parent wid (to demonstrate success?)  
// The DTOList and the inputList consist of an input list, index list, and original input list.

    function MatchDelete(TargetList, TargetParameter) {      // delete all parameters starting with targetparameter
        var output = [];
        //proxyprinttodiv('Function MatchDelete : TargetList ', TargetList);
        //proxyprinttodiv('Function MatchDelete : TargetParameter ', TargetParameter);
        for (var item in TargetList) {
            //proxyprinttodiv('Function MatchDelete item', TargetList[item].key);
            if ((TargetParameter+'.')!==(TargetList[item].key.substring(0,TargetParameter.length+1))) {
                output.push(TargetList[item]);
            }
        }
        // only items that are not equal to the '.' survive
        proxyprinttodiv('Function MatchDelete : output ', output);
        return output;
    }

    function MatchPrefixDelete(TargetList, TargetParameter) {
        var targetobject=listToObject(TargetList);
        var split=MatchPrefix(targetobject,TargetParameter);
        var out1=DeletePrefix(split.match, TargetParameter)
        var out2=split.nomatch;
        return {
            match : out1,
            nomatch : out2
        };
    }

    function DeletePrefix(arr, kw ) {
        if (kw=="") {return arr}
        else{

            var result = [];

            //proxyprinttodiv('Function DeletePrefix arr : ',  arr);
            //proxyprinttodiv('Function DeletePrefix kw : ',  kw);

            if (arr.length>0  && (kw.length>0)) {
                for (i = 0; i < arr.length; i++) {
                    var obj = arr[i];
                    var objvalue = obj["value"];
                    var objkey = obj["key"];

                    //proxyprinttodiv('Function DeletePrefix objvalue : ',  objvalue);
                    //proxyprinttodiv('Function DeletePrefix objkey : ',  objkey);

                    if (objkey != kw) {

                        //proxyprinttodiv('Function DeletePrefix length.objkey : ',  objkey.length);
                        //proxyprinttodiv('Function DeletePrefix length.kw : ',  kw.length);
                        // seems to have big if kw = e and a.x=y then x=y

                        if (objkey.length > kw.length){
                            partial = objkey.substring(0,kw.length+1);

                            //proxyprinttodiv('Function DeletePrefix partial : ',  partial);

                            kwdot=kw+'.';

                            //proxyprinttodiv('Function DeletePrefix kwdot : ',  kwdot);

                            if (kwdot == partial) {
                                afterdot=kw.length+1;

                                //proxyprinttodiv('Function DeletePrefix afterdot : ',  afterdot);

                                beforekey = objkey;
                                objkey = beforekey.substring(afterdot);

                                //proxyprinttodiv('Function DeletePrefix objkey after substring : ',  objkey);
                            }
                        }
                        //proxyprinttodiv('Function DeletePrefix obkey before push : ',  objkey);

                        if (objkey.length > 0) {

                            //proxyprinttodiv('Function DeletePrefix objkey push : ',  objkey);

                            result.push({"key" : objkey , "value" :  objvalue });

                            //proxyprinttodiv('Function DeletePrefix objkey push : ',  objkey);
                        }
                    }
                }
            }
            //proxyprinttodiv('Function DeletePrefix result : ',  result);
            return result;
        }}

// Add all the parameters of b to a. This is the exact same function as
// jsonConcat around line 550-650. Since extend is not used yet, it would be 
// a good idea to just use jsonConcat as it is already in use elsewhere.
    function extend(a, b){
        for(var key in b){
            if(b.hasOwnProperty(key)){
                a[key] = b[key];
            }
        }
        return a;
    }

// Splits a list of parameters. If the value of a parameter
// is not attr, it will be put into the ParentdtoList. As soon
// as the first parameter of 'onetomany' is found, the rest of 
// the list will be put into the childDTOlist.
    function SplitKeywordSet(list, attr ){
        if(typeof(attr) == undefined){
            attr = 'onetomany';
        }

        var ParentdtoList = [];
        var ChildrendtoList = [];
        var attrFoundFlag  = 0;

        for(var i= 0;  i < list.length ; i++ ){
            item = list[i];
            if((attrFoundFlag == 0) && (item["value"] != attr )){
                ParentdtoList.push(item);
            }else{
                ChildrendtoList.push(item);
                attrFoundFlag = 1;
            }
        }

        var objChildParentdtoList = {
            "parentlist" : ParentdtoList,
            "childrenlist" : ChildrendtoList
        };
        return objChildParentdtoList;
    }

// Sorts a list of arrays based on the length of the array
// The sort will be ascending (a,b as opposed to b,a) unless
// the function returns a value other than 1. To see more
// goto: http://www.javascriptkit.com/javatutors/arraysort2.shtml#.UkF_G4b2qSo
    function Sortonetomanys(list, attr){
        proxyprinttodiv('Function Sortonetomanys()  list : ',  list);
        proxyprinttodiv('Function Sortonetomanys()  attr : ',  attr);
        if(typeof(attr) == undefined){
            attr = 'onetomany'
        }
        output = list.sort(function(a,b) {
            if (a.key.split('.').length < b.key.split('.').length){
                return -1;
            }
            else if (a.key.split('.').length > b.key.split('.').length ){
                return 1;
            }
            else if(a.value == attr){
                return 1;
            }
            else if(b.value == attr){
                return -1;
            }
            else{
                return 0;
            }
        });
        proxyprinttodiv('Function Sortonetomanys()  output : ',  output);
        return output;
    }

// Looks for the key word in the input and returns those fields that match the DTO in
// the match hash, and those that don't in the nomatch hash. This is used to filter out
// the parameters that the DTO is filtering for.
    function MatchPrefix(input, kw) {
        var match = [];
        var nomatch = [];

        if (kw=="") {
            match = objectToList(input);
            return {match:match, nomatch:nomatch}
        }
        else {

            //proxyprinttodiv('Function MatchPrefix, kw: ',  kw);
            //proxyprinttodiv('Function MatchPrefix, input: ',  input);

            for (key in input) {
                partial = key.substring(0, kw.length + 1);

                kwdot = kw + '.';
                if ((kwdot == partial) || (kw == key))

                // var arr = key.split('.');
                //var arr = key.substring(0,key.lastIndexOf('.'));
                //proxyprinttodiv('Function MatchPrefix arr: ',  arr);
                // if ((arr === kw) || (key === kw))

                {
                    match.push({ "key": key, "value": input[key] });
                } else {
                    nomatch.push({ "key": key, "value": input[key] });
                }
            };
            return {
                match: match,
                nomatch: nomatch
            };
        }}


    /* lib.js functions */

// Examine the object, if you find a value of 'object', look
// inside that object. If you find a value of 'object', look
// inside....and so on. In the meantime, add the values of the 
// onject into parameters of 'res' (result).
//http://scott.donnel.ly/javascript-function-to-convert-a-string-in-dot-andor-array-notation-into-a-reference/
    function ConvertToDOTdri(obj) {        //dotize
        var res = {};
        (function recurse(obj, current) {
            for (var key in obj) {
                var value = obj[key];
                var newKey = (current ? current + "." + key : key);  // joined key with dot
                if (value && typeof value === "object") {
                    recurse(value, newKey);  // it's a nested object, so do it again
                } else {
                    res[newKey] = value;  // it's not an object, so set the property
                }
            }
        }
            (obj)
            );
        return res;
    }

// Deconstructs the dot.notation string into an object that has properties.
    function ConvertFromDOTdri(input) {        //Expands to Real javascript object
        var keys = Object.keys(input);
        var result = {};

        for (var i = 0, l = keys.length; i < l; i++) {
            createObjects(result, keys[i].split('.'), input[keys[i]]);
        }
        return result;
    }

// Creates an object with a hash parent:value. If the chain array is more that 1, 
// recurse until there is only 1 chain so you get chain:value returned. This is called only 
// from ConvertFrom DOT, so you can see it part of the process of deconstructing the dot.notaion string.
    function createObjects(parent, chainArray, value) {
        if (chainArray.length == 1) {
            parent[chainArray[0]] = value;
            return parent;
        }
        else {
            parent[chainArray[0]] = parent[chainArray[0]] || {};
            return createObjects(parent[chainArray[0]], chainArray.slice(1, chainArray.length), value);
        }
    }

// Strips the numbers from hash keys. It returns 3 arrays: input list, index list, and original input list.
// Used by addWidParameters.
    function RemoveIndex(input) {
        var result = [];

        //input = { 'a<1>': 'x', 'b<3>': 'y', 'c': 'z', 'd.e': 't', 'f<4>': 'y' };

        var list1 = [];
        var list2 = [];
        var list3 = [];

        for (key in input) {
            //case1
            var s1 = key;
            var re = /<(\d+)>/;
            s1 = s1.replace(re, '');

            //console.log(s1);

            var o1 = {};
            o1["key"] = s1;
            o1["value"] = input[key];
            list1.push(o1);

            //case2
            var s2 = key;
            s2 = s2.match(re);
            var o2 = {};
            if (s2) {
                o2["key"] = s1;
                o2["value"] = s2[1];
            } else {
                o2["key"] = s1;
                o2["value"] = '';
            }
            list2.push(o2);

            //case3
            var o3 = {};
            o3["key"] = key;
            o3["value"] = input[key];
            list3.push(o3);
        }

        //console.log(list1);
        //console.log(list2);
        //console.log(list3);

        result.push(list1);
        result.push(list2);
        result.push(list3);

        return result;
    }

// Looks to move each item in the input into an object that
// has a match and nomatch hash to see what the DTO has 
// filtered out of the list as relevent fields.
    function SplitObjectList(input, dto) {
        var match = [];
        var nomatch = [];
        for (i = 0; i < input.length; i++) {
            var item = input[i];
            var key = item["key"];
            var found = false;
            for (j = 0; j < dto.length; j++) {
                var subitem = dto[j];
                var subkey = subitem["key"];
                if (key === subkey) {
                    found = true;
                }
            }
            if (found) {
                match.push(item);
            } else {
                nomatch.push(item);
            }
        }
        return {
            match: match,
            nomatch: nomatch
        };
    };

    function SplitObject(input, dto) { // added 10-5 not used for anything yet
        var match = {};
        var nomatch = {};
        var item = "";
        for (item in input) {
            if (dto[item]==input[item]) {
                match[item]=input[item];
            }
            else {
                nomatch[item]=input[item];
            }
        }
        return {
            match: match,
            nomatch: nomatch
        };
    };

// Returns an object made from an array
    function listToObject(arrayOfObjects){
        var finalObject ={};
        if(arrayOfObjects){
            for (var i = 0; i < arrayOfObjects.length; i++) {
                var object = arrayOfObjects[i];
                finalObject[object["key"]] = object["value"];
            }
        }
        return finalObject;
    }

// Returns an array made from an object
    function objectToList(object){
        var finalArray = [];
        for(key in object){
            finalArray.push({"key":key, "value":object[key]});
        }
        return finalArray;
    }

// Counts the number of hashes in an object
    exports.getObjectSize = getObjectSize = function getObjectSize(parameters) {
//function getObjectSize(parameters){
        var size = 0, key;
        for (key in parameters) {
            if (parameters.hasOwnProperty(key)) size++;
        }
        return size;
    }

// Returns true if the parameter is lower case
    exports.isParameterLower = isParameterLower = function isParameterLower(parameters, str) {
//function isParameterLower(parameters, str) {
        getObjectSize(parameters);
        var length;
        if(parameters.length === undefined) {
            length = getObjectSize(parameters);
        }else {
            length = parameters.length
        }
        for (key in parameters) {	//rewritten
            if(key.toLowerCase()==str){
                return true;
            }
        }
    }

// Finds the first key in parameters that matches the string, or nothing if none is found	
    function firstOrDefault(parameters, str) {
        var length;
        if(parameters.length === undefined) {
            length = getObjectSize(parameters);
        }else {
            length = parameters.length
        }
        for (key in parameters) {	//rewritten
            if(key.toLowerCase()==str){
                return key;
            }
        }
    }

// Deletes a hash from an object	
    exports.remove = remove = function remove(parameters, str) {
//function remove(parameters, str){
        var length;
        if(parameters.length === undefined) {
            length = getObjectSize(parameters);
            for (key in parameters) {	//rewritten
                if(key.toLowerCase()==str){
                    delete  parameters[key];
                }
            }
        }else {
            length = parameters.length
        }
    }

// Creates output based on whether the flas is DTO or JSON. It formates
// the DTO strings with quotes around the values. For JSON, it checks to make sure that
// numbers are actual numbers, and strings have quotes around them.
    function CleanBasedOnCheckflagList(flag, input, dto) {
        output  = input;

        if (flag === "dto") {
            for (i = 0; i < output.length; i++) {
                var item = output[i];
                var key = item["key"];
                for (j = 0; j < dto.length; j++) {
                    var subitem = dto[j];
                    var subkey = subitem["key"];
                    if (key === subkey) {
                        if(subitem["value"].toLowerCase() == 'string' ){
                            output[i]["value"] = '"' + output[i]["value"] + '"';
                        }
                    }
                }
            }
        }

        if (flag == "json") {
            for (i = 0; i < output.length; i++) {
                var item = output[i];
                var key = item["key"];
                for (j = 0; j < dto.length; j++) {
                    var subitem = dto[j];
                    var subkey = subitem["key"];
                    if (key === subkey) {
                        if((typeof(item["value"]) == 'object') && (item["value"]['number'] !== undefined)){
                            output[i]["value"] = item["value"]['number'];
                        }
                        else{
                            if(subitem["value"].toLowerCase() == 'string' ){
                                output[i]["value"] = '"' + output[i]["value"] + '"';
                            }
                        }
                    }
                }
            }
        }
        //console.log(output);
        return output;
    }

    function tolowerparameters(parameters, rightparameters) {
        //proxyprinttodiv('Function tolowerparameters : input parameters',  parameters);
        //proxyprinttodiv('Function tolowerparameters : input rightparameters',  rightparameters);
        var outputparameters = {};
        for(eachparameter in rightparameters) {
            if ((rightparameters[eachparameter].length>0) && (rightparameters[eachparameter]=='add')) {
                outputparameters[eachparameter.toLowerCase()] = "";
            }
        }

        for(eachparameter in parameters) {
            if ((rightparameters[eachparameter.toLowerCase()] == 'true') || (rightparameters[eachparameter.toLowerCase()] == 'add')) {
                // original line
                //outputparameters[eachparameter.toLowerCase()] = parameters[eachparameter].toLowerCase();
                // New version, simply checks to make sure that parameters[eachparameter] has a value that can be sent to .toLowerCase()
                if (parameters[eachparameter] != undefined && parameters[eachparameter] != "") {
                    outputparameters[eachparameter.toLowerCase()] = parameters[eachparameter].toLowerCase();
                }
            } else {
                outputparameters[eachparameter.toLowerCase()] = parameters[eachparameter];
            }
        }
        //proxyprinttodiv('Function tolowerparameters : output outputparameters',  outputparameters);
        return outputparameters;
    }

//rightparameters && rightparameters[eachparameter] && 


    exports.getAttributeByIndex = getAttributeByIndex = function getAttributeByIndex(obj, index) {
//function getAttributeByIndex(obj, index){
        var i = 0;
        for (var attr in obj){
            if (index === i){
                return  attr;
            }
            i++;
        }
        return null;
    }

// Adds the key of object2 to object 1
    function jsonConcat(o1, o2) {
        for (var key in o2) {
            if ((o1[key]===undefined) || (o1[key]=="")) {
                o1[key] = o2[key];
            }
        }
        return o1;
    }

// Returns if o is a string or not
    function isString(o) {
        return typeof o == "string" || (typeof o == "object" && o.constructor === String);
    }

// Returns true if the val is an int, or false
    function isInteger(val) {
        return val.match(/^[0-9]$/);
    }

// Returns the number of hashes in an object
    function countKeys(obj) {
        var size = 0, key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) size++;
        }
        return size;
    }

    function isEmpty(obj) {
        if(isSet(obj)) {
            if (obj.length && obj.length > 0) {
                return false;
            }

            for (var key in obj) {
                if (hasOwnProperty.call(obj, key)) {
                    return false;
                }
            }
        }
        return true;
    };

    function isSet(val) {
        if ((val != undefined) && (val != null)){
            return true;
        }
        return false;
    };

    exports.toObject = toObject = function toObject(arr) {
//function toObject(arr) {
        var rv = {};
        for (var i = 0; i < arr.length; ++i)
            if (arr[i] !== undefined) rv[i] = arr[i];
        return rv;
    }

})(typeof window === "undefined" ? global : window);

// function cleanparameters(resultObj, dtotype, accesstoken, cleanmethod, convertmethod) {
// 	proxyprinttodiv('Function cleanparameters() resultObj' , resultObj,80);
// 	proxyprinttodiv('Function cleanparameters()  dtotype' , dtotype,80);
// 	proxyprinttodiv('Function cleanparameters()  accesstoken' , accesstoken);
// 	proxyprinttodiv('Function cleanparameters()  cleanmethod' , cleanmethod,80);
// 	proxyprinttodiv('Function cleanparameters()  convertmethod' , convertmethod,80);
// 	var outputparameters = {};
// 	var dtoloc = 0;
// 	var proposedLeft = "";
// 	var proposedRight = "";
// 	var dtoobject = {};
// 	var inputParametersObject = {};
// 	var childdto = dtotype;
// 	var preAmble="";
// 	var item="";
// 	var moreParameters={};
// 	var executeobject={};
// 	var eafield="";
// 	var otherdtoobject={};
// 	var resultlist=[];



// 	// goal of this section is to get inherited parameters
// 	if (
// 		((cleanmethod == "remove") && (resultObj['wid']!==undefined)) &&
// 		((resultObj['wid']!==resultObj['metadata.method']) || (dtotype="defaultdto"))
// 		)
// 		 {
// 		dtoobject=aggressivedto(resultObj['wid'],"");
// 		proxyprinttodiv('Function cleanparameters()  aggressivedto ' , dtoobject, 88);
// 		proxyprinttodiv('Function cleanparameters()  resultObj ' , resultObj,88);

// 		for (item in dtoobject) { 
// 			preamble=""; 
// 			proposedLeft=item;
// 			proposedRight=dtoobject[item];

// 			if (proposedRight == 'inherit') {

// 				dtoloc=proposedLeft.lastIndexOf(".");
// 				if (dtoloc!=-1) {
// 					preamble=proposedLeft.substring(0 ,dtoloc);
// 					proposedLeft=proposedLeft.substring(dtoloc+1, proposedLeft.length);
// 					}
// 				executeobject={};
// 				//executeobject["executethis"]=getwidmaster;
//     			executeobject["command.convertmethod"]="nowid";
//     			//executeobject["executethis"]=getwid;
//     			executeobject["wid"]=proposedLeft;
//     			//moreParameters=executethis(executeobject,execute);
//     			moreParameters=executethis(executeobject,getwidmaster);
//     			proxyprinttodiv('Function cleanparameters()  moreParameters----' , moreParameters,88);
//   				for (eafield in moreParameters) {
//   					if (preamble=="") {
//   							resultObj[eafield]=moreParameters[eafield];
//     					}
//     				else {
//     						resultObj[preamble+'.'+eafield]=moreParameters[eafield];
// 	    				}
//     				}


//     			proxyprinttodiv('Function cleanparameters()  resultlist II' , resultObj,88);
//     			}
//     		}
// 		//resultObj=ConvertToDOTdri(resultlist);
// 		proxyprinttodiv('Function cleanparameters()  resultObj end of ' , resultObj,88);
// 		}
// 	proxyprinttodiv('Function cleanparameters()  resultObj end of II' , resultObj,80);
// 	// reead dto -- and delete what should not surive


// 	if (cleanmethod == "add") {
// 	inputParametersObject = resultObj;
// 	proxyprinttodiv('Function cleanparameters()  inputParametersObject' , inputParametersObject);

// 	 //if ((inputParametersObject['metadata.method'] !== "") && (dtotype=="")) {
// 	 if ((inputParametersObject['metadata.method'])) { // && (dtotype=="")) {
//             childdto = inputParametersObject['metadata.method'];
//             // dtoobject=getwidmaster({'wid':metadata,
//             // 						'command.convertmethod':'dto',
//             // 						'command.dtotype':metadata});
//             executeobject={};
//             //executeobject["executethis"]=getwidmaster;
//             executeobject["wid"]=childdto;
//             executeobject["command.convertmethod"]="dto";
//             executeobject["command.dtotype"]=childdto;
//             //dtoobject=executethis(executeobject,execute);
//             dtoobject=executethis(executeobject,getwidmaster);
//             proxyprinttodiv('Function cleanparameters()  result dtoobject ',  dtoobject,80);
//             //dtoobject=executethis({'executethis':'getwidmaster', 'wid':metadata,
//             //						'command.convertmethod':'dto',
//             //						'command.dtotype':metadata}); // not sure if this ever worked
// 		}

// 	childdto=dtotype;
// 	if (dtotype!=="") { 
// 		proxyprinttodiv('Function cleanparameters()  dtotype check ',  dtotype);
// 		otherdtoobject = aggressivedto(dtotype, "", 10);
// 		proxyprinttodiv('Function cleanparameters()  otherdtoobject ',  otherdtoobject);
// 		proxyprinttodiv('Function cleanparameters()  countKeys(otherdtoobject) ',  countKeys(otherdtoobject));
// 		proxyprinttodiv('Function cleanparameters()  countKeys(dtoobject) ',  countKeys(dtoobject));
// 		if (countKeys(otherdtoobject) > countKeys(dtoobject)) {
// 			dtoobject=otherdtoobject;
// 			childdto=inputParametersObject['metadata.method'];
// 			}
// 		}
// 		proxyprinttodiv('Function cleanparameters()  childdto ', childdto,80);
// 	// first read the wid, then figure out its method, then get the dto object based on it
//     	proxyprinttodiv('Function cleanparameters()  dtotype : II ',  dtotype,80);
//     	//alert('before');
//     	//dtoobject=aggressivedto(inputParametersObject["wid"]); // ** changed 10/5 
//     	//if (cleanmethod=="add") {dtoobject=aggressivedto(dtotype)}; 

//     	proxyprinttodiv('Function cleanparameters()  result from aggressivedto ' , dtoobject);
//     	//parameterObject=getfrommongo({"wid":inputParametersObject["wid"]});

// 		// dtoobject=getwidmaster({'wid':parameterObject["metadata.method"], 
// 		// 						'command.convertmethod':'dto',
// 		// 						'command.dtotype':'defaultdto'});
// 		//alert('after');

//         // if (cleanmethod=="remove") {dtoobject=aggressivedto -- this will already be done
//         proxyprinttodiv('Function cleanparameters()  outputparameters ' , resultObj,80);
//         proxyprinttodiv('Function cleanparameters()  dtoobject ' , dtoobject,80);

// 		// return {
// 		// parms : resultObj,
// 		// dto : dtoobject 
// 		// };
// 	}

// 	if (dtotype=="") {dtotype=resultObj["metadata.method"]}; 
// //	if (cleanmethod=="remove") {
// 	if (resultObj["metadata.method"] != dtotype) {
// 		//dtoobject=getWidMongo(dtotype, "dto", accesstoken);

// 		// "adddto.0.palettedto":"onetomany" -- adddto.0.palettedto.0.subcategory
// 		if (cleanmethod=="add") { 	// if add, then find the preamble by reading a pristine dto record and looking
// 			proxyprinttodiv('Function cleanparameters()  resultObj' , resultObj, 80);
// 			//dtoobject=aggressivedto(resultObj['wid']);
// 			proxyprinttodiv('Function cleanparameters()  dtoobject inside ' , dtoobject, 80);

// 			//taken out 10-22
// 			//executeobject={};
// 			//executeobject['wid']=resultObj['wid'];
// 			//executeobject["executethis"]="getwid";
// 			//dtoobject=executethis(executeobject,execute);
// 			//-------------
// 			//alert(dtoobject);

// 			for (item in dtoobject) {
// 				//dtoloc=item.indexOf(dtotype);  //** changed 11-5
// 				//dtoloc=item.indexOf(inputParametersObject["metadata.method"]);

// 				// dtoloc=item.indexOf(childdto);  //**taken out 11-13
// 				//if ((dtoloc!=-1) &&
// 				if (
// 					((dtoobject[item] == 'onetomany') || 
// 					(dtoobject[item] == 'onetoone'))) {
// 					preAmble=item;
// 					}
// 				}
// 				proxyprinttodiv('Function cleanparameters()  preAmble ' , preAmble,80);
// 			}	

// 		for (item in resultObj) {  // now step through each record that could be changed
// 			proposedLeft=item;
// 			proposedRight=resultObj[item];
// 			// taken out 11-5
// 			//if ((item!='wid') && (item!='metadata.method')) {
// 				proxyprinttodiv('Function cleanparameters()  item' , item, 81);
// 				proposedLeft=""; // work on left first...check if add or remvove
// 				if ((cleanmethod=="add") && (preAmble!="")) {
// 					if (((item!='wid') && (item!='metadata.method')) || (childdto!=dtotype)) {
// 						proposedLeft=preAmble + "." + item
// 						}
// 					else {proposedLeft=item}
// 					// added 11-12
// 					}
// 				// changed 11-5 **
// 				if (cleanmethod=="remove") { 
// 				//if ((cleanmethod=="remove") && (item!='wid') && (item!='metadata.method')){ 
// 					//dtoloc=item.indexOf(dtotype+".")
// 					dtoloc=item.indexOf(childdto+".");
// 					proxyprinttodiv('Function cleanparameters()  dtoloc' , dtoloc);
// 					if (dtoloc!=-1) {
// 						proposedLeft=item.substring(dtoloc+dtotype.length+3 ,item.length);
// 						// assume record looks like this authordto.booksdto.0.name
// 						// if dtotype = booksdto default will convert that to name
// 						// dtonum to booksdto.0.name
// 						// num to 0.name
// 						if (convertmethod=="dtonum") { 
// 							proposedLeft=item.substring(dtoloc ,item.length);
// 							}
// 						if (convertmethod=="num") { 
// 							proposedLeft=item.substring(dtoloc+dtotype.length+1 ,item.length);
// 							}
// 						}

// 					// remove addthis from the results if it was getwidmaster
// 					dtoloc=item.indexOf("addthis.");
// 					proposedLeft=proposedLeft.replace("addthis.","");

// 					}
// 				//}	
// 			proxyprinttodiv('Function cleanparameters()  proposedLeft' , proposedLeft,81);
// 			proxyprinttodiv('Function cleanparameters()  proposedRight' , proposedRight,81);
// 			if (proposedLeft!="") {outputparameters[proposedLeft]=proposedRight}
// 			proxyprinttodiv('Function cleanparameters()  outputparameters' , outputparameters,81);	
// 			}
// 			// 11-5 **
// 			//
// 		if ((cleanmethod=="add") && (preAmble!="") && (childdto!=dtotype)) {
// 			outputparameters["metadata.method"]=dtotype;
// 			outputparameters["wid"]="";
// 			}
// 		}

// 		else { // if resultObj["metadata.method"] = dtotype) 
// 			outputparameters=resultObj;
// 			//** added 11/12
// 			//delete outputparameters['wid'];
// 			//delete outputparameters['metadata.method'];
// 			}	
// 	proxyprinttodiv('Function cleanparameters()  cleanmethod II' , cleanmethod);
// //	if (cleanmethod=="add") { 
// //		outputparameters=resultObj;
// //		}

// 	//** added 11/12
// 	//delete dtoobject['wid'];
// 	//delete dtoobject['metadata.method'];

// 	proxyprinttodiv('Function cleanparameters() resultObj end end end' , resultObj,80);
// 	proxyprinttodiv('Function cleanparameters()  dtotype end end end' , dtotype,80);
// 	proxyprinttodiv('Function cleanparameters()  cleanmethod' , cleanmethod,80);
// 	proxyprinttodiv('Function cleanparameters()  convertmethod' , convertmethod,80);
// 	proxyprinttodiv('Function cleanparameters()  outputparameters end' , outputparameters, 80);	
// 	proxyprinttodiv('Function cleanparameters()  dtoobject end' , dtoobject, 80);
// 	return {
// 		parms : outputparameters,
// 		dto : dtoobject
// 		};
// }
