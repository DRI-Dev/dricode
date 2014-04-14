var cheerio = require('cheerio');
var fs = require('graceful-fs');
var HashMap = require('hashmap').HashMap;
var walk    = require('walk');
var moment = require('moment');
var uuid = require("node-uuid");



// TODOS ::
// DONE :: complete the AddThis functionality  
// DONE :: split the content in the JSON parameters to be splitted by the comments or {{}}(Use Regex for this) 
// DONE :: write changes to disk, change the filename after testing
// DONE :: Add/update timestamp while writing the file 
// DONE :: functionality to time the execution at 30 seconds interval(scheduling)
// DONE :: functionality to list all html files in a directory and perform logic for all files asynchronously( Currently only one is being processed)
// DONE :: changed the dtynamic div being added to be error free and valid html
// DONE :: make changes to CreateNewFile HTML shall include references to CSS and JS

//TODO :: in case of 'file not found' É the server stops throwing an error.
//TODO :: add conditions to updated

// returns txt for specified file after applying the selector(div opt)

var $ = undefined;
var mapOfFiles = new HashMap();
var returnJson =   {'processHtmlJson':[],'addThisJson':[]};
exports.GetFile = GetFile = function(file, targetDiv, beginArea,endArea){
	var html = '';

		


	if(!mapOfFiles){
		mapOfFiles = new HashMap();
	}
	
	if(mapOfFiles.has(file)){
		
	}else{
		if(file !== "undefinedindex.html"){
	 		// the file is NOT already loaded in the HashMap
			// console.log('file comes as '+fs.readFileSync(file));
			var body = fs.readFileSync(file);
			if(body){
				body = body.toString();
				mapOfFiles.set(file,body);	
			}	
		}
		  
	}
	
	$ = cheerio.load(mapOfFiles.get(file), {
	    ignoreWhitespace: true,
	    xmlMode: false
	});
	
	var returnHtml = '';
	if(beginArea && endArea && file){
		// begin area and end area enclosing content from the file
		returnHtml = $.html().toString();
		var regex = '\<!-- {"AreaDefination": "'+ beginArea +'"} --\>([^}]*)\<!-- {"AreaDefination": "'+ endArea +'"} --\>';

		var re = new RegExp(regex, 'gi');
	 	// replace the content as per the matched processing instruction/ special comment 
		var array = re.exec(returnHtml);
		returnHtml = array[1];
	}else if(targetDiv){
		$(targetDiv).each(function(){
			returnHtml = $(this).html().toString();
		});
	}else{
		returnHtml=mapOfFiles.get(file);
	}
	return returnHtml;
};


RegExp.escape= function(s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
};


exports.returnJson = function(){
	return returnJson;
};

// returns list of changed files in specified directory
function FileChanged(directory,callback){
	
	console.log('listing files for directory '+directory);
	
	var files   = [];

	// Walker options
	var walker  = walk.walk(directory, { followLinks: false });

	walker.on('file', function(root, stat, next) {
		// add all html files modified in last 15 seconds to the list
		if(stat.name.endsWith('.html') && (moment().isBefore(moment(stat.mtime).add('seconds', 15)))){
		// if(stat.name.endsWith('.html') && (moment().isBefore(moment(stat.mtime).add('minutes', 15)))){
			files.push(root  + stat.name);
			var targetDiv = undefined;
			var file = root  + '/' + stat.name;
			processFile(file,targetDiv, directory);
		}
	    next();
	});

	walker.on('end', function() {
	    callback(returnJson);
	});
}

// setup scheduler to run the processing each 30 minutes
// var rule = new schedule.RecurrenceRule();
// rule.second = 15;//15 seconds recurrence


// This is the ENTRY POINT ::: logic to contain the actual file writing operation
function getInput (options, callback) {
    allUserData.push (options);
    callback (options);

}
exports.run =  function run(directory,callback){
	// reinitialize hashmap
	mapOfFiles = new HashMap();
	returnJson =   {'processHtmlJson':[],'addThisJson':[]};
	
	// get all html files, process it at once now
	FileChanged(directory,function(returnJson){
		callback(returnJson);	
	});	
};


// logic to process one file completely(All operations)
function processFile(file,targetDiv, directory){

	// run without any targetDiv
	var fileContent = GetFile(file,targetDiv);


	if(fileContent){
		// Step 2 process GetFile ExecuteThis special comments
		// And
		// Step 3 process processHTML ExecuteThis special comments
		getAndProcessFile(fileContent,file,file,directory);
		

		// Last Step write changed files to disk
		writeChangesNow();
	}
}

// logic to create new files whenever required
function createFiles(fileName, content){
	// Query the entry
	
	if(!fs.existsSync(fileName)){
		
		console.log('creating file '+ fileName);
		try {
			fs.writeFileSync(fileName, content);
			console.log("The file was created! "+e);
		}catch(e){
			console.log("The file was NOT created! "+e);
		}
	}else{
		
	}
	
 	
}

// logic to update the filesCOntent for being processed files
function updateFileInMap(fileToUpdate,updatedContent,regex,options){
	 // update the content of currentFIle from the MAP
	 var replaced = '';
	 if(mapOfFiles.has(fileToUpdate)){
	     fileContent = mapOfFiles.get(fileToUpdate);
		 // regex=regex.replace(/\[/g,'\\\[');
		 var re = new RegExp(RegExp.escape(regex), options);
	 	 // replace the content as per the matched processing instruction/ special comment 
		 replaced = fileContent.replace(re, updatedContent);
	 }else{
	 	 replaced = updatedContent;
	 }
	 // update map with chnaged file content
	 mapOfFiles.set(fileToUpdate,replaced);
}

// logic to iterate the processed file data from the amp and write files to disk
function writeChangesNow(){
	mapOfFiles.forEach(function(value, key) {
		writeFileToDisk(key,value);

	});
}

// logic to contain the actual file writing operation
function writeFileToDisk(fileName,content){

	// update the files on disk at the end using the HashMap
	var stream = fs.createWriteStream(fileName);
	stream.once('open', function(fd) {
	  stream.write(content);
	  stream.end();
	});
}


function extractContentToParams(original_file_content,json){
	var matchesInFileArr = original_file_content.split(/\<![ \r\n\t]*(--([^\-]|[\r\n]|-[^\-])*--[ \r\n\t]*)\>/g);
	if(matchesInFileArr){
		for(var j=0;j < matchesInFileArr.length;j++){
			json[j]=matchesInFileArr[j];
		}
		return json;
	}else{
		json[0]=original_file_content;
		return json;
	}
}

// logic to handle ADDTHIS command for processing
exports.handleAddThis =  function run(jsonArr,callback){
	// Expected Input is an array of JSON objects like
	//
	// [{
	// 	"AddThis":"testwidname1",
	//  "ExecuteThis":"updatewid",
	//  "z":"w"
	// }]
	mapOfFiles = new HashMap();
	var addThisJsonArray = new Array();

	for(var cnt=0;cnt < jsonArr.length; cnt++){
		var json = jsonArr[cnt];

		// collect values needed 
		var execute_this,addThisWid = '';
		    
		if(json.ExecuteThis && json.AddThis){
			execute_this = 'addthis';
			addThisWid = json.AddThis;
		}else{
			break;
		}
			
		// add timestamp	
		timestamp = moment().format('MMMM Do YYYY, h:mm:ss a');

//		 logic for handling 'AddThis'		
//	      
//	    <!-- 
//	     
//	    --> 
//		 
//			   to this:
//			   "ExecuteThis":	"updatewid"
//			   "z":	"w"

		var jsonAddThis = {};

	 	var wid = addThisWid;
	 	jsonAddThis["data"] = {};
		jsonAddThis["wid"] = wid;
	 	// jsonAddThis["data"]["0"] = original_file_content;
	 	
		// copy any extra parameters
		if(addThisWid && execute_this){
			for(var attr in json) {
				if(attr !== 'AddThis'){
					// clone any extra params to json2 array being constructed
					jsonAddThis["data"][attr]=json[attr];
				}
		    }

			addThisJsonArray.push(jsonAddThis);
		}
	}

	var retJson = {};
	retJson['addThisJson']=addThisJsonArray;
	callback(retJson);	
	
};

// TODO fix regex expression to not break if comments inside contain <
// logic to process the special comments (all types - ProcessHTML, GetFile and AddThis)
exports.getAndProcessFile = getAndProcessFile = function(fileContent,current_file,to_search_file,directory){
	// # match special comments in the file

	var regex = '\<!-- {([^\-]|[\r\n]|[\r\n]|-[^\-])*} --\>';
	var re = new RegExp(regex, 'gi');
	var array = re.exec(fileContent);
	var matchesInFileArr = array;

	// var matchesInFileArr = fileContent.match(//g);
	
	if(!returnJson){
		returnJson =   {'processHtmlJson':[],'addThisJson':[]};
	}

	var addThisJsonArray = new Array();
	var processHtmlJsonArray = new Array();
	
	if(matchesInFileArr){
		for(var j=0;j < matchesInFileArr.length;j++){
			// # process the files associated, this will be recursive call
			str = matchesInFileArr[j];
			str = str.replace('<!--','');
			str = str.replace('-->','');
			
			// # check if valid special comment(should be)
			var json = JSON.parse(str);
			
			var execute_this,wid,div_class,div_id,file_prefix,create_file,timestamp,beginArea,endArea,fileName,addThisWid = '';
			
			var links = [];
		    
			if(json.ExecuteThis && json.AddThis){
				execute_this = 'addthis';
				addThisWid = json.AddThis;
			}else if(json.ExecuteThis){
				execute_this = json.ExecuteThis;
			}else{
				break;
			}
				
			if(json.Wid)
				wid = json.Wid;

			if(json.DIVCLASS)	
				div_class = json.DIVCLASS;
				
			if(json.DIVID)	
				div_id = json.DIVID;

			if(json.Filename)	
				fileName = json.Filename;

			if(json.Begin)	
				beginArea = json.Begin;
				
			if(json.End)	
				endArea = json.End;
					
			if(json.Div)	
				file_prefix = json.Div;		
				
			if(json.DataForView)	
				data_for_view = json.DataForView;	
				
			if(json.CreateFile)	
				create_file = json.CreateFile;// expected values are true or false
				
			// add timestamp	
			timestamp = moment().format('MMMM Do YYYY, h:mm:ss a');;	
				
			
			// to be used in GetFile operation -- file from where content is to be brought	
			file_to_search = 	directory + '/' + fileName + '.html';
			
			switch (execute_this.toLowerCase()){
				
				case 'getfile':
					 if(create_file && (create_file === 'true' ||  create_file === true ||  create_file === 'TRUE')){
						 // If parameter CreateFile=True the create HTML, CSS, JS actual files for <div>}
						 createFiles(file_to_search, 'AUTOCREATED :: NewFile' );
					 }
						
				 	 var file_content = "";
				 	 if(beginArea && endArea && fileName){
						 // file_content="<div class='file' data-wid='"+ wid +"' data-div='"+ div_id +"'>";
						 file_content += GetFile(file_to_search,wid,beginArea,endArea);
						 // file_content += "</div>"; 
					 }
					 
					 // update the file in mapOfFiles
					 updateFileInMap(current_file,file_content,matchesInFileArr[j],'i');
					 
					 break;
					 
					case 'processhtml':
						 // added logic for handling 'ProcessHTML'
					 // expected directive special comment will be like this - 
						 // <l!-- 
						 // {"ExecuteThis":"ProcessHTML",
						 // "Wid":"id1",
						 // "Div":"DivVal", 
						 // "DataForView":[{"j":"k"},{"l":"m"}],
						 // "TestParam1":"TestVal1" } -->
					     //  -->
					     var original_file_content = GetFile(current_file,'#'+wid);
					 
					 if(original_file_content){
						 var json2 = {};
					 	 json2["wid"] = wid;
					 	 json2["data"] = {};
					 	 json2["data"]["0"] = original_file_content;
						 
						 // json2 = extractContentToParams(original_file_content,json2);
					 	json2["data"]["JS"] = directory+file_prefix+'.js';
					 	json2["data"]["CSS"] = directory +file_prefix+'.css';
					 	json2["data"]["DataForView"] = data_for_view;
					 	json2["data"]["timestamp"] = timestamp;
						 
						 	// add links values if applicable
					 
							 // In ProcessHTML look for these class: 
							 // EventLeftClick, EventRightClick, EventMouseIn, EventMouseOut, EventHover, EventBlur
							 // If you find them then: create a links attribute as shown: id comes from id, targetlink from href, event<>:wid from the last part of href
					 
							var arr = getFromFile(current_file,'a');
						
							for(var noOfAnchors = 0 ;noOfAnchors < arr.length; noOfAnchors++){
								if(arr && arr[noOfAnchors].attr('class') && arr[noOfAnchors].attr('id') 
								&& arr[noOfAnchors].attr('href') && arr[noOfAnchors].text()){
									var classA = arr[noOfAnchors].attr('class');
									if(classA === 'EventLeftClick' || classA === 'EventRightClick'  || classA === 'EventMouseOut'  || classA === 'EventMouseIn'  || classA === 'EventBlur'  || classA === 'EventHover' ){
										// applicable for an entry into JSON
										var id = arr[noOfAnchors].attr('id');
										var href = arr[noOfAnchors].attr('href');
										var text = arr[noOfAnchors].text();
										var jsonEntry = {};
										jsonEntry['id']=id;
										jsonEntry['targetLink']='href=\''+ href +'\'';
										jsonEntry[classA]=text;
									
										links.push(jsonEntry);
									}
								}
							}
						
							if(links && links.length > 0){
								json2["data"]["links"]=links;
							}
						 // copy any extra parameters
						 for(var attr in json) {
							 if(attr !== 'ExecuteThis' && attr !== 'wid' && attr !== 'Div' && attr !== 'DataForView'){
								 // clone any extra params to json2 array being constructed
								 json2["data"][attr]=json[attr];
							 }
					     }
						 
   						  // It will create file C.html, C.CSS, C.JS (look for style and script tags inside div) }
   						  if(create_file && (create_file === 'true' || 
						   create_file === true||  create_file === 'TRUE')){
   							 // If parameter CreateFile=True the create HTML, CSS, JS actual files for <div>
   							 createFiles(json2["CSS"],'AUTOCREATED NEW FILE');
   							 createFiles(json2["JS"],'AUTOCREATED NEW FILE');
						 
   							 // create html content for the div  :: for creating a HTML file
   							 var  htmlForDiv = '';
   							 htmlForDiv += '<!DOCTYPE HTML>';
   							 htmlForDiv += '<html>';
   							 htmlForDiv += '<body>';
   							 htmlForDiv += '<div id="'+ wid +'">';
   							 htmlForDiv += '<link href="'+file_prefix+'.css'+'" rel="stylesheet" type="text/css" />';  
   							 htmlForDiv += '<script src="'+file_prefix+'.js'+'" type="text/javascript"></script>' ; 
   							 htmlForDiv += 'AUTOCREATED NEW HTML FILE CONTENT';
   							 htmlForDiv += '</div>';
   							 htmlForDiv += '</body>';
   							 htmlForDiv += '</html>';
						 
						 
   							 // create HTML file
   							 createFiles(directory+file_prefix+'.html',htmlForDiv);
   						 }
					 
					 	
						
						processHtmlJsonArray.push(json2);
 							
						 
						 // change the map value for this directive to processsed by making this as a HTML comment
						 // update the file in mapOfFiles. This is necessary, so that the changes being done in this regard are not lost later when the file is actually written
						 var updated_content = matchesInFileArr[j].replace('<!','<!').replace('[','\[');
						 updated_content += "<!-- Time Stamp "+ timestamp +"-->";
						 
						 // update the map files so that changes made are saved when files are writen
						 // updateFileInMap(current_file,updated_content,matchesInFileArr[j]);
					 }
			 			break;
					case 'addthis':
						// logic for handling 'AddThis'		
					    //  
					    // <!-- 
					    // {
					    // 	"AddThis":"testwidname1",
						//  "ExecuteThis":"updatewid",
						//  "z":"w"
						// } 
					    // --> 
						// 
						//	   to this:
						//	   "ExecuteThis":	"updatewid"
						//	   "z":	"w"

						var jsonAddThis = {};
						if(!wid){
							// Generate a v1 (time-based) id
							wid = uuid.v1(); // -> '6c84fb90-12c4-11e1-840d-7b25c5ee775a'
						}

						jsonAddThis["wid"] = {};
						jsonAddThis["data"] = {};
						jsonAddThis["wid"] = wid;
					 	jsonAddThis["data"]["0"] = original_file_content;
						 
						 // json2 = extractContentToParams(original_file_content,json2);

						// copy any extra parameters
						if(addThisWid && execute_this){
							for(var attr in json) {
								if(attr !== 'AddThis'){
									// clone any extra params to json2 array being constructed
									jsonAddThis["data"][attr]=json[attr];
								}
						    }
							addThisJsonArray.push(jsonAddThis);
						}
						break;
			}
		}
		
		
	}
	if(processHtmlJsonArray.length>0){
	    returnJson.processHtmlJson.push(processHtmlJsonArray);	
	}
	if(addThisJsonArray.length>0){
		returnJson.addThisJson.push(addThisJsonArray);	
	}

	return returnJson;
};



// helper method for strings (endwith)
if (typeof String.prototype.endsWith !== 'function') {
    String.prototype.endsWith = function(suffix) {
        return this.indexOf(suffix, this.length - suffix.length) !== -1;
    };
}	


// Logic to get specified elements from a HTML file using cheerio
function getFromFile(fileName, selector){
	var body = fs.readFileSync(fileName).toString();	
	$ = cheerio.load(body);

	var arrayOfElements = new Array();
	$(selector).each(function(){
		arrayOfElements.push($(this));
	});
	return arrayOfElements;
}
