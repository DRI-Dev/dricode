// remembmer to disable local file restriction
//execute({"executethis":widtoget}, function (err, res)  ***// inputs to createhtml, object with these inputs:
//
//   command.wid
//	 command.htmlshallow
//   html 
//   htmltemplate
//   htmlinnertemplate
//   queryresult : {data, queryresult:[{html, htmltemplate, htmldata: {data,queryresult:[]}]}
//
// output, object with html property : {"html":...., "queryresult": how it was put together}
//
// right now it will not recurs on two html templates at differnt levels


// input template in originalparam.command.htmltemplate || originalparam.htmltemplate || originalparam.html || "[[html]]";
// output command.html
//
// line 461 for test htest17

function parameterremap(p)
{
	// this call remaps parameter names and filters
	// {a:b c:d e:f command.remap={a:x e:y}} will return {x:b, y:f}
	if (!p.command) {p.command={}};
	var remap = p.command.remap;
	delete p.remap;
	var newobj = {};
	for (var eachproperty in remap)
	{
		var oldparm = eachproperty;			// a
		var newparm = remap[eachproperty];  // x
		newobj[newparm] = p[oldparm];       // newobj[x] = b
	}
	return newobj
}

function cleanoriginalparm(originalparam, queryresult)
{
	proxyprinttodiv("createhtml BEGIN originalparam", originalparam, 100, true, true);
    if (!originalparam.command) {originalparam.command = {};}
	originalparam.command.htmlshallow = originalparam.command.htmlshallow || false;

	if (originalparam.command.htmlshallow)
		{
		originalparam.command.html =    		   originalparam.command.html
												//|| originalparam.html;
		if (!originalparam.command.html)  		   {originalparam.command.html = "";}

		originalparam.command.htmltemplate = 	originalparam.command.htmltemplate
												//|| originalparam.htmltemplate
								                || originalparam.command.html 
								                //|| originalparam.html
								                || "[[html]]";
		originalparam.command.htmlpreamble =       originalparam.command.htmlpreamble
												//|| originalparam.htmlpreamble
												|| "";
		originalparam.command.htmlsharedtemplate = originalparam.command.htmlsharedtemplate
												//|| originalparam.htmlsharedtemplate
												|| false;	
	}
	else 
	{
		originalparam.command.html =    		   originalparam.command.html
												|| originalparam.html;
		if (!originalparam.command.html)  		   {originalparam.command.html = "";}

		originalparam.command.htmltemplate = 	originalparam.command.htmltemplate
												|| originalparam.htmltemplate
								                || originalparam.command.html 
								                || originalparam.html
								                || "[[html]]";
		originalparam.command.htmlpreamble =       originalparam.command.htmlpreamble
												|| originalparam.htmlpreamble
												|| "";
		originalparam.command.htmlsharedtemplate = originalparam.command.htmlsharedtemplate
												|| originalparam.htmlsharedtemplate
												|| false;				
	}

	delete originalparam.command.wid;
	delete originalparam.html;
	delete originalparam.htmlshallow;
	delete originalparam.htmlpreamble;				// can be taken out with others
	delete originalparam.htmlsharedtemplate;
	proxyprinttodiv("createhtml END originalparam", originalparam, 100, true, true);
}

exports.createhtml = createhtml = function createhtml(param, callback) 
{
	var originalparam = {};
	originalparam = ConvertFromDOTdri(param);
 	if (!originalparam) {originalparam = {}}
 	if (!originalparam.command) {originalparam.command={}}

	proxyprinttodiv("createhtml input originalparam", originalparam, 100, true, true);

	var currentdata = {};					// represents outputobject
		currentdata.queryresult=[];
		currentdata.command={};
		currentdata.widlist = [];
	var queryresult = [];
	
    async.series([

    	// if command.wid came in then get it
    	// accepts originalparam // produces originalparam
		function step1(cb1) 
		{if (!originalparam.command) {originalparam.command={}}
			if (originalparam.command.wid) 
			{
				var executeobject = originalparam;
				executeobject.wid = originalparam.command.wid; 
				proxyprinttodiv("createhtml step1 before get wid executeobject", executeobject, 100, true, true);
				getwidfromhtml(executeobject, function (err, res) 
        		{
        			//proxyprinttodiv("createhtml step1 after get wid executeobject", executeobject, 100, true, true);
        			//proxyprinttodiv("createhtml step1 getwid res", res, 100, true, true);
        			//proxyprinttodiv("createhtml step1 getwid err", err, 100, true, true);
        			if (err)
        			{
        				cb1(err, null);
        			}
        			else 
        			{
        				currentdata.wid = originalparam.command.wid || originalparam["command.wid"];
        				//proxyprinttodiv("createhtml step1 currentdata wid", currentdata.wid, 100, true, true);
                        extend(true, originalparam, res); // merge res with originalparam
            			cb1(null, null);	
        			}
        		})
			}
			else
			{
				proxyprinttodiv("createhtml end of step 1 originalparam", originalparam, 100, true, true);
				cb1(null, null)
			}			
		},

    	// now deal with the RIGHT side of a  wid ... deal with property VALUES
    	// convert hello [[wid]] to hello world
    	// accept originalparam produce better originalparam -- also update currentdata.queryresult adcordingly
    	function step2(cb2) 
    	{   
    		// if no htmlparent or composite sent in (i.e first time) then set up
    		if (!originalparam.htmlparent) {originalparam.htmlparent=""}
    		if (!originalparam.htmlcomposite) {originalparam.htmlcomposite=""}

    		currentdata.htmlparent=originalparam.htmlparent;
    		// if there is a wid, and it is not the first itme then update parent and composite
    		if (currentdata.wid)
    		{
    			originalparam.htmlparent=currentdata.wid;
    			originalparam.htmlcomposite=originalparam.htmlcomposite+"_"+currentdata.wid;
    		}

    		queryresult = originalparam.queryresult || [];
			delete originalparam.queryresult;   

			cleanoriginalparm(originalparam);

			proxyprinttodiv("createhtml step2 originalparam", originalparam, 100, true, true);
			proxyprinttodiv("createhtml step2 queryresult", queryresult, 100, true, true);
			
			if (originalparam.command.htmlshallow)
			{
				cb2(null, null)
			}
			else 
			{
				var commondata = {};
	    		extend(true, commondata, originalparam);
	    		delete commondata.htmltemplate;
	    		delete commondata.html;
	    		delete commondata.command;
	    		var listofproperties = [];
	    		for (var eachproperty in originalparam) // make a list of properties
	    		{
	    			proxyprinttodiv("step2 listofproperties eachproperty", eachproperty, 100, true, true);
                	var bracketlist = [];
                	var listtodo = [];

                	// if right side in an object then set up so it will be used to call createhtml
                	// listofproperties = 
                	// [{property:p1, template:v1,   executelist:[{executeobject:{}, result:}, 
                	//	{property:p2, template:v2,   executelist:[{executeobject:{}, result:}, 
                	//	{property:p3, template:v3,   executelist:[{executeobject:{}, result:}, 
                	//	]
                	if (isObject(originalparam[eachproperty]) && eachproperty!=="command")
                	{
	    				var eachrow = {};
	    				eachrow.property = eachproperty;				// property "property"
	    				eachrow.template = "[[html]]";
	    				eachrow.executelist = [];
	    				var eachexecute = {};
	    					eachexecute.result = "html";
	    					eachexecute.executeobject = {};
	    					extend(true, eachexecute.executeobject, originalparam[eachproperty]);
	    				eachrow.executelist.push(eachexecute);
						listofproperties.push(eachrow);
						delete commondata[eachproperty];
                	}
                	if (isString(originalparam[eachproperty]) 
                		)
                	{
						bracketlist = findbrackets(originalparam[eachproperty]);
			    		proxyprinttodiv("step2 bracketlist", bracketlist, 100, true);

			    		// do not add duplicate properties


			    		for (var eachbracket in bracketlist)
			    		{	// remove specific brackets that shoudl not be recursed on
			    			// within right side, do not follow these wids
			    			if (
				    				bracketlist[eachbracket]==="wid" ||
				    				bracketlist[eachbracket]==="htmltemplate" ||
				    				bracketlist[eachbracket]==="html" ||
				    				bracketlist[eachbracket]==="command"
			    				)
			    			{
			    				listtodo = [];
			    				break;
			    			}
			    			else
			    			{
			    				var bracket = {};
			    				bracket.executeobject={};
			    				bracket.executeobject["command.wid"]=bracketlist[eachbracket]; // put in execute format
			    				bracket.result=bracketlist[eachbracket]
			    				listtodo.push(bracket);
		    				}
			    		}
			    		if (listtodo.length>0)
			    		{
		    				var eachrow = {};
		    				eachrow.property = eachproperty;				// property "property"
		    				eachrow.template = originalparam[eachproperty];	// property "value"
		    				eachrow.executelist = [];
		    				eachrow.executelist = listtodo;
							listofproperties.push(eachrow);
							delete commondata[eachproperty];
			    		}
			    	}
				}

				proxyprinttodiv("step2 commondata before  ***", commondata, 100, true, true);

				proxyprinttodiv("step2 listofproperties", listofproperties, 100, true);
				proxyprinttodiv("step2 BEFORE asynch originalparam ", originalparam, 100, true);
	    		// step over the list looking for brackets in right side (value)
				async.mapSeries(listofproperties, function (eachproperty, cbMap2) 
	    		{
	                async.nextTick(function() 
	                {
	                	proxyprinttodiv("createhtml step2 each", eachproperty, 100, true, true);
	                	var htmldata = {};
	                	var executelist = eachproperty.executelist;
	                	var property = eachproperty.property;
	                	var template = eachproperty.template

			    		// update htmldata with the value returned for each, so we can merge at end
			    		async.mapSeries(executelist, function (eachexecute, cbMap) 
			    		{
			                async.nextTick(function() 
			                {
			                	proxyprinttodiv("step2 middle of Asynch originalparam ", originalparam, 100, true);
			                	var executeobject = eachexecute.executeobject;
			                	var eachresult = eachexecute.result;
			                	extend(true, executeobject, commondata);
								proxyprinttodiv("step2 about to recurse eachexecute", eachexecute, 100, true);
					        	var color = Number(getglobal('debugcolor')); if (!color || color >= 15) { color = 0; } color++; saveglobal('debugcolor', color);
					        	var indent  = Number(getglobal('debugindent')); indent++; saveglobal('debugindent', indent);
			                	createhtml(executeobject, function (err, res) // recursion
			                	{
			                		var color = Number(getglobal('debugcolor')); color--; saveglobal('debugcolor', color);
		                    		var indent = Number(getglobal('debugindent')); indent--; saveglobal('debugindent', indent);
			                		proxyprinttodiv("createhtml after step 2 res", res, 100, true);
			                		// res will have the value of wid eachbracket
			                		if (!err && res.command.html) 
			                		{     
			                			// only save resolved value
			                			// ** add error checking
			                			htmldata[eachresult] = res.command.html;
			                			if (property==="htmltemplate" || property==="html")
											{
												var tempobj = {};	
												tempobj = res;																									
												currentdata.queryresult.push(tempobj);
							            		currentdata.widlist.push(res.wid);
							            	}
			                			cbMap(null);
			                		}
			                		else // if no result then go to next one
			                		{
			                			cbMap(null);
			                		}
			                	})
		                	})
		            	}, 
		            	function (err, res) 
		            	{
		            		proxyprinttodiv("createhtml before merge step2 htmldata", htmldata, 100, true);
		        			// if htmldata then try to do a merge
							if (Object.keys(htmldata).length > 0)
							{
								proxyprinttodiv("createhtml before merge step2 htmldata", htmldata, 100, true);
		        				proxyprinttodiv("createhtml before merge step2 template eachobject.value", property, 100, true);
		        				proxyprinttodiv("createhtml before merge step2 template ", template, 100, true);
								originalparam[property] = merge(htmldata, template, "[[", "]]");
								proxyprinttodiv("createhtml step2 htmldata loop ", originalparam, 100, true);
								if (   property === "htmltemplate" 
									|| property === "html" 
									|| property === "htmlsharedtemplate"
									|| property === "htmlshallow"
									|| property === "htmlpreamble") 
								{
									originalparam.command[property]=originalparam[property]
									proxyprinttodiv("createhtml step2 HTMLTEMPLATE", originalparam.command.htmltemplate, 100, true);
								}
							}
		            		cbMap2(null);
			            })
	                }) // next tick
	            }, 
	            function (err, res)
	            {
	            	proxyprinttodiv("createhtml step2 end originalparam ", originalparam, 100, true);
	            	//cleanoriginalparm(originalparam);
	            	cb2(null, null);
	            })	// mapseries
			}
		},
    	// step3 to process the templates
    	// accepts originalparam + html, htmltemplate, htlm...
    	// produce originalparam w defaults/w enhanced html via minus queryresult
		function step3(cb3) 
		{ 
			// load up more from step2?
			var usedparentflag=false;
			proxyprinttodiv("step3 command.htmltemplate", originalparam.command.htmltemplate, 100, true);
			proxyprinttodiv("createhtml step3 in originalparam", originalparam, 100, true, true);
			if (queryresult.length > 0)
			{
				proxyprinttodiv("createhtml process queryresult", queryresult, 100, true);
				async.mapSeries(queryresult, function(eachresult, cbMap3) 
	    		{
	                async.nextTick(function() 
	                {		 
	                	proxyprinttodiv("createhtml step3 queryresult eachresult", eachresult, 100, true); 
						var executeobject = {};
						if (!eachresult.command) {eachresult.command={}}
						if (!eachresult.command.htmltemplate && !eachresult["command.htmltemplate"]){usedparentflag=true}
						if (originalparam.command.htmlshallow)
						{
				            eachresult.command.htmltemplate = eachresult.command.htmltemplate
				           								  ||  eachresult["command.htmltemplate"]
				           								  ||  originalparam.command.htmltemplate
				         				           		  //||  eachresult.htmltemplate
														  //||  originalparam.htmltemplate;			// redundant?	
						}
						else
						{
				            eachresult.command.htmltemplate = eachresult.command.htmltemplate
				           								  ||  eachresult["command.htmltemplate"]
				           								  ||  originalparam.command.htmltemplate
				           								  ||  eachresult.htmltemplate
														  ||  originalparam.htmltemplate;			// redundant?				
						}
		
			           	delete eachresult["command.htmltemplate"]; // we only want eachresult.command to survive

			           	proxyprinttodiv("createhtml step3 fixed eachresult II", eachresult, 100, true); 
			           	extend(true, executeobject, originalparam, eachresult);
			           	delete executeobject.htmltemplate;		// redundant?
			           	delete executeobject.html;				// redundant?
			           	delete executeobject.command.html;		// redundant?

						proxyprinttodiv("createhtml step3 inside about to createhtml", executeobject, 100, true); 
        				var color = Number(getglobal('debugcolor')); if (!color || color >= 15) { color = 0; } color++; saveglobal('debugcolor', color);
        				var indent  = Number(getglobal('debugindent')); indent++; saveglobal('debugindent', indent);

        				createhtml(executeobject, function (err, res) 
        				{
        					var color = Number(getglobal('debugcolor')); color--; saveglobal('debugcolor', color);
        					var indent = Number(getglobal('debugindent')); indent--; saveglobal('debugindent', indent);
        					proxyprinttodiv("createhtml originalparam I", originalparam, 100, true);

            				originalparam.command.html = originalparam.command.htmlpreamble + 
            											 originalparam.command.html + res.command.html;

							proxyprinttodiv("createhtml originalparam II", originalparam, 100, true);
            				proxyprinttodiv("createhtml step3 after createhtml executeobject", executeobject, 100, true, true); 
            				proxyprinttodiv("createhtml step3 after createhtml res", res, 100, true, true); 
							cbMap3(null, null);
						})
            		})
				}, function (err, res)
					{
						proxyprinttodiv("createhtml step3 after childs originalparam", originalparam, 100, true, true);
						proxyprinttodiv("createhtml step3 htmlsharedtemplate", originalparam.command.htmlsharedtemplate, 100, true); 
						proxyprinttodiv("createhtml final template originalparam.command.htmltemplate", originalparam.command.htmltemplate, 100, true, true);
						proxyprinttodiv("createhtml final template originalparam.htmltemplate", originalparam.htmltemplate, 100, true, true);
						// bring down command.html to html...one layer
						var mergedhtml ="";
						var temp = {};
						extend(true, temp, originalparam, originalparam.command);
						// mergedhtml = merge(temp, originalparam.htmltemplate, "[[", "]]");
						// if (mergedhtml.indexOf('[[MERGEERROR')!==-1)

						if (originalparam.command.htmlsharedtemplate)
						{
							currentdata.command.html = merge(temp, originalparam.command.htmltemplate, "[[", "]]");					
						}
						else
						{
							if (usedparentflag) // parents template 'used' up, just return html
							{
								currentdata.command.html = originalparam.command.html;
							}
							else // parent's template not used yet -- use it now
							{
								currentdata.command.html = merge(temp, originalparam.command.htmltemplate, "[[", "]]");
							}
						}				
						proxyprinttodiv("createhtml with child currentdata", currentdata, 100, true); 
						//proxyprinttodiv("createhtml step3 html after in call back", originalparam.html, 100, true); 
						cb3(null, null)
				}
				)
			}
			else
	{
				proxyprinttodiv("createhtml step3 NO CHILD originalparam", originalparam, 100, true, true);
				proxyprinttodiv("createhtml step3 no child htmlsharedtemplate", originalparam.command.htmlsharedtemplate, 100, true); 
				proxyprinttodiv("createhtml final no child template originalparam.command.htmltemplate", originalparam.command.htmltemplate, 100, true, true);
				proxyprinttodiv("createhtml no child final template originalparam.htmltemplate", originalparam.htmltemplate, 100, true, true);
				var temp = {};
				extend(true, temp, originalparam, originalparam.command);

				currentdata.command.html = merge(temp, originalparam.command.htmltemplate, "[[", "]]");

				proxyprinttodiv("createhtml NO CHILD currentdata", currentdata, 100, true);  
				cb3(null, null);
			}
		},

    	// append to dom to cook source or the like
        function step4(cb4) 
        {
        	// only internally render it if not shallow
	        if (!originalparam.command.htmlshallow) 
	        {
	        	proxyprinttodiv("createhtml step4currentdata", currentdata, 100, true);
	        	if (exports.environment === 'local') // we need to clear dom each time
	        	{
	        		currentdata.command.html = renderhtml(currentdata.command.html).html;
				}
	 			else
	 			{
	 				// js dom for server
	 				var jsdom = require("jsdom").jsdom;
				    var document = jsdom(currentdata.html);
				    var window = document.parentWindow;
				  
			        // get an object if coming in
			        // window.__myObject = {};
			        var $ = window.$;
					currentdata.command.html = renderhtml(currentdata.command.html).html;
	 			}
	 			proxyprinttodiv("createhtml step5 currentdata end", currentdata, 100, true);
	        	cb4(null, null);
	        }
        	else 
        	{
        		cb4(null, null);
        	}
    	}
    ], function (err, results) 
    {	
       	
        delete originalparam.command;
        delete originalparam.htmlparent;
        proxyprinttodiv("createhtml END originalparam", originalparam, 100, true, true);
        currentdata = extend(true, {}, originalparam, currentdata);
        currentdata.originalobject=escape(JSON.stringify(currentdata));

 		proxyprinttodiv("createhtml END currentdata", currentdata, 100, true, true);
		callback(err, currentdata);
	});
}

// function adddatatext(obj) {
    
//     var data_list = obj;
//     for (var i = 0; i < data_list.queryresult.length; i++) {
//         var datatext = "";
//         var obj1 = ConvertToDOTdri(data_list.queryresult[i]);
//         $.each(obj1, function (k, v) {
//             k.replace(".", "_");
//             if (datatext == '') {
//                 datatext = k + "='" + v + "'";
//             } else {
//                 datatext = datatext + " " + k + "='" + v + "'";
//             }
//         });
//         data_list.queryresult[i].datatext = datatext;
      
//         data_list.queryresult[i].originalobject = escape(JSON.stringify(data_list.queryresult[i]));
        
//     }
//     console.log('new datalist', data_list);
//     return data_list;
// }

function htmlEncode(value) {
    return $('<div/>').text(value).html();
}
 
function htmlDecode(value) {
    return $('<div/>').html(value).text();
}

function getwidfromhtml(p, callback)
{
	//try
	//{
		if (false && exports.environment === 'local')
			{
			var widtoget = p.wid;
			// first try to read from file (remember to disable local file restricton in browser)
			var obj={}
			obj.url = widtoget+".html";
			obj.dataType = "html";
			jQuery.ajax(obj)
			.done(function(responseHtml) 
			{
				callback(null, renderhtml(responseHtml));
			})
			.fail(function(responseHtml)
			{
				trynormalgetwid(p, callback)
			})
		}
		else
		{
			trynormalgetwid(p, callback);
		}
	// }
	// catch(err)
	// {
	// 	trynormalgetwid(p, callback);
	// }
}

function trynormalgetwid(p, callback)
{
	var widtoget = p.wid;
	// if not local file then get wid ("executethis" wid)
	proxyprinttodiv("createhtml step1 processing widtoget", widtoget, 100, true);
	execute({"executethis":"getwid", "wid":widtoget, "command.environment.syncrule":"sync_local"}, function (err, res) 
	// the call below should be used
	// execute({p, function (err, res) 
	{
		proxyprinttodiv("createhtml trynormalgetwid res", res, 100, true, true);
		proxyprinttodiv("createhtml trynormalgetwid err", err, 100, true, true);
		if (res)
			{	
				// we do not want wid and metadata in response
				delete res.wid;
				//delete res.metadata;
			}
		callback(err, res)
	})
}


function renderhtml(responseHtml)
{
	var response={};
	// create fake div
	$("body").append('<div id="includedContent" style="display:none"></div>');
    $("#includedContent").html(responseHtml);
	proxyprinttodiv("createhtml renderhtml responseHtml", responseHtml, 100, true, true);
	response.html = $("#includedContent").html();
	proxyprinttodiv("createhtml renderhtml response", response, 100, true, true);
	$("#includedContent").remove(); // remove fake div
	return response;
}

/*
	this takes text and merges it with data in dataobject
	merge the data in to the text at {{}}
    return merged text
    http://stackoverflow.com/questions/377961/efficient-javascript-string-replacement
*/
function merge(indataobject, template, leftdelimiter, rightdelimiter)  {
	var dataobject = ConvertToDOTdri(indataobject);
	var regExPattern =   leftdelimiter.escapeRegExp() + "(.*?)?" + rightdelimiter.escapeRegExp() ;
	var regex = new RegExp(regExPattern, 'g');
	var template;

	proxyprinttodiv("merge input template", template, 100, true, true);
	proxyprinttodiv("merge input indataobject", indataobject, 100, true, true);

	template =  template.replace(regex, function(m,key)
	{
		return dataobject.hasOwnProperty(key)?dataobject[key]:'[['+key+']]';   // '';[[MERGEERROR]]
	});
	proxyprinttodiv("merge output template", template, 100, true, true);
    return template;
}

String.prototype.escapeRegExp = function() {
    var specialChars = [ '$', '^', '*', '(', ')', '+', '[', ']', '{', '}', '\\', '|', '.', '?', '/' ];
    var regex = new RegExp('(\\' + specialChars.join('|\\') + ')', 'g');
    return this.replace(regex, '\\$1');
}
String.prototype.replaceAll = function(target, replacement) {
  return this.split(target).join(replacement);
};

function findbrackets(str)
{
	try
	{	    
	    //var a = str.match(/[[\s*[\w\.]+\s*]]/g).map(function (x) { return x.match(/[\w\.]+/)[0]; });
	   
	   var a = [];
	   str.match(/\[\[\w*\]\]/g).map(function (item) {
	       a.push(item.replace('[[', '').replace(']]', ''));
	   }); a;
	    return a;
	}
	catch(err)
	{
		return [];
	}
}


// sample data
function loaddefaults(p, c){
    proxyprinttodiv('config', config, 100, true, true);
    debuglevel = -1;
    execute({
        "command.xrun": [{
            "executethis": "addwidmaster",
                    "wid": "nest_300",
            "target_prop": "target_value",
            // "metadata.method": "test_method",
            "metadata.namespace.category": "test_category_1",
            "metadata.namespace.subcategory": "test_sub_category_3",
            "metadata.namespace.subdto": "test_subdto_bbb",
             "htmltemplate": "<h1>TEST HTML</h1>",
            "command": {
                "executetype": "series",
                "processparameterfn": "execute_nothing",
                "environment": {
                    "run": {
                        "executelevel": 1
                    }
                }
            }
        }, {
            "executethis": "addwidmaster",
            "wid": "nest_200",
            "target_prop": "target_value",
            // "metadata.method": "test_method",
            "metadata.namespace.category": "test_category_1",
            "metadata.namespace.subcategory": "test_sub_category_3",
            "metadata.namespace.subdto": "test_subdto_ccc",
             "htmltemplate": "<h1>TEST HTML</h1>",
            "command": {
                "executetype": "series",
                "processparameterfn": "execute_nothing",
                "environment": {
                    "run": {
                        "executelevel": 1
                    }
                }
            }
        }, {
            "executethis": "addwidmaster",
            "wid": "nest_100",
            "target_prop": "target_value",
            // "metadata.method": "test_method",
            "metadata.namespace.category": "test_category_1",
            "metadata.namespace.subcategory": "test_sub_category_3",
            "metadata.namespace.subdto": "test_subdto_bbb",
             "htmltemplate": "<h1>TEST HTML</h1>",
            "command": {
                "executetype": "series",
                "processparameterfn": "execute_nothing",
                "environment": {
                    "run": {
                        "executelevel": 1
                    }
                }
            }
        },{
            "executethis": "addwidmaster",
            "wid": "nest_500",
            "target_prop": "target_value",
            // "metadata.method": "test_method",
            "metadata.namespace.category": "test_category_2",
            "metadata.namespace.subcategory": "test_sub_category_4",
            "metadata.namespace.subdto": "test_subdto_ccc",
             "htmltemplate": "<h1>TEST HTML</h1>",
            "command": {
                "executetype": "series",
                "processparameterfn": "execute_nothing",
                "environment": {
                    "run": {
                        "executelevel": 1
                    }
                }
            }
        }, {
            "executethis": "addwidmaster",
            "wid": "nest_800",
            "target_prop": "target_value",
            // "metadata.method": "test_method",
            "metadata.namespace.category": "test_category_2",
            "metadata.namespace.subcategory": "test_sub_category_4",
            "metadata.namespace.subdto": "test_subdto_bbb",
             "htmltemplate": "<h1>TEST HTML</h1>",
            "command": {
                "executetype": "series",
                "processparameterfn": "execute_nothing",
                "environment": {
                    "run": {
                        "executelevel": 1
                    }
                }
            }
        }, {
            "executethis": "addwidmaster",
            "wid": "nest_10",
            "target_prop": "target_value",
            // "metadata.method": "test_method",
            "metadata.namespace.category": "test_category_2",
            "metadata.namespace.subcategory": "test_sub_category_4",
            "metadata.namespace.subdto": "test_subdto_ccc",
             "htmltemplate": "<h1>TEST HTML</h1>",
            "command": {
                "executetype": "series",
                "processparameterfn": "execute_nothing",
                "environment": {
                    "run": {
                        "executelevel": 1
                    }
                }
            }
        },
        {
            "executethis": "addwidmaster",
            "wid": "wid1",
            "target_prop": "target_value",
            // "metadata.method": "test_method",
            "metadata.namespace.category": "test_category",
            // "metadata.namespace.subcategory": "test_sub_category",
            // "metadata.namespace.subdto": "test_subdto",
            "htmltemplate": "abc from wid1 >2 [[wid2]] def >3 [[wid3]] ghi",
            "metadata.htmlattributes.widtype": ["csselement","scriptelement"],
            "command": {
                "executetype": "series",
                "processparameterfn": "execute_nothing",
                "environment": {
                    "run": {
                        "executelevel": 1
                    }
                }
            }
        }, {
            "executethis": "addwidmaster",
            "wid": "hello_world",
            "a":"b",
            "html": "<h1>Hello World</h1>",
            "metadata.namespace.category": "test_hello",
            "metadata.namespace.subcategory": "test_hello_html",
            "command": {
                "executetype": "series",
                "processparameterfn": "execute_nothing",
                "environment": {
                    "run": {
                        "executelevel": 1
                    }
                }
            }
        }
        , {
            "executethis": "addwidmaster",
            "wid": "green_wid",
            "a":"b",
            // "html": '<style type="text/css">body {background: green;}</style>',
            "htmltemplate": '<style type="text/css">body {background: green;}</style>',
            "metadata.namespace.category": "test_hello",
            "metadata.namespace.subcategory": "test_hello_css",
            "command": {
                "executetype": "series",
                "processparameterfn": "execute_nothing",
                "environment": {
                    "run": {
                        "executelevel": 1
                    }
                }
            }
        }
        , {
            "executethis": "addwidmaster",
            "wid": "wid2",
            "target_prop": "target_value",
            // "metadata.method": "test_method",
                    "metadata.namespace.category": "test_category",
            // "metadata.namespace.subcategory": "test_sub_category",
            // "metadata.namespace.subdto": "test_subdto",
                    "htmltemplate": "xyz from wid2 >4 [[wid4]] qwe",
                    "metadata.htmlattributes.widtype": ["csselement","scriptelement"],
            "command": {
                "executetype": "series",
                "processparameterfn": "execute_nothing",
                "environment": {
                    "run": {
                        "executelevel": 1
                    }
                }
            }
        }, {
            "executethis": "addwidmaster",
            "wid": "wid3",
            "target_prop": "target_value",
            // "metadata.method": "test_method",
            "metadata.namespace.category": "test_category",
            // "metadata.namespace.subcategory": "test_sub_category",
            // "metadata.namespace.subdto": "test_subdto",
            "htmltemplate": "hi from 3",
            "metadata.htmlattributes.widtype": ["abcelement","wwwelement"],
            "command": {
                "executetype": "series",
                "processparameterfn": "execute_nothing",
                "environment": {
                    "run": {
                        "executelevel": 1
                    }
                }
            }
        }, {
            "executethis": "addwidmaster",
            "wid": "wid4",
            "target_prop": "target_value",
            // "metadata.method": "test_method",
                    "metadata.namespace.category": "test_category",
            // "metadata.namespace.subcategory": "test_sub_category",
            // "metadata.namespace.subdto": "test_subdto",
                    "htmltemplate": "hi from 4",
                    "metadata.htmlattributes.widtype": ["abcelement", "wwwelement"],
            "command": {
                "executetype": "series",
                "processparameterfn": "execute_nothing",
                "environment": {
                    "run": {
                        "executelevel": 1
                    }
                }
            }
        },
        {
            "executethis": "addwidmaster",
            "wid": "wid5",
            "target_prop": "target_value555",
            // "metadata.method": "test_method",
                    "metadata.namespace.category": "test_category",
            // "metadata.namespace.subcategory": "test_sub_category",
            // "metadata.namespace.subdto": "test_subdto",
                    "htmltemplate": "hi from 5",
                    "metadata.htmlattributes.widtype": ["csselement", "scriptelement"],
            "command": {
                "executetype": "series",
                "processparameterfn": "execute_nothing",
                "environment": {
                    "run": {
                        "executelevel": 1
                    }
                }
            }
        }
        ,
        {
            "executethis": "addwidmaster",
            "execute_output": "debugger",
            "execute_set_1": "",
            "execute_set_2": "",
            "execute_parameters": {},
            "wid": "defaultwideditorvalues",
            "lastwidlist_clicked": "",
            "lastwiddesigner_clicked": "",
            "last_method": "",
            "category": "",
            "subcategory": "",
            "subdto_searched": "",
            "last_selected_htmltemplate": "",
            "debuglevel": "",
            "last_onchange_data": "",
            "save_tolocal": "",
            "delete_tolocal":"",
            "should_query_mongo": "false",
            "syncrule": "sync_local",
            "leftitem":
            	{"getwid"          : { "name": "get wid",           "description":"abcde", "fn":"getwid" }
            	,"save_highlighted": { "name": "save highlighted",  "description":"abrrrcde", "fn":"getrrrrwid" }
        		,"add_to_set_1"    : { "name": "asdfasdf", 			"description":"abcde", "fn":"getwid" }
        		,"add_to_set_2"    : { "name": "fdsafdsa", 			"description":"abcde", "fn":"getwid" }}
	        	
        	,"command": {
               "executetype": "series",
               "processparameterfn": "execute_nothing",
               "environment": {
                   "run": {
                       "executelevel": 1
                   }
               }
           }
        }
    ]}, function(err, res) {
        //drop_down_inputs();
        //populate_dropdowns();
        c(err, res)
    });
}

exports.mergetest1 = mergetest1 = function mergetest1(param, callback) {
	var currentdata= {"htmltargetdiv":"div2","placeholder":"B","html":"Hello this is B"};
	
	/*
	var template = "<div id = <%wid%> <br> <%html%> div>";
	var leftdelimiter = "<%";
	var rightdelimiter = "%>";
	var res = merge(currentdata, template, leftdelimiter, rightdelimiter);
	alert("mergetest1 res"+res);
	*/
	
	var template = '<div id="[[htmltargetdiv]]"> [[htmltargetdiv]] [[html]] </div>';
	var leftdelimiter = "[[";
	var rightdelimiter = "]]";
	
	var res = merge(currentdata, template, leftdelimiter, rightdelimiter);
	alert("mergetest1 res"+res);
}

// template and data at one level
exports.htest1 = htest1 = function htest1(param, callback) {
	var executeList = {
		//"executethis": "createhtml",
		"command.htmltemplate": "<label>[[displayname]]</label><input type='text' name='[[field]]' id='[[field]]'/>",
		"htmltargetdiv": "inputA", 
		"field": "a", 
		"displayname": "A"
	};
	debuglevel = 100;
	createhtml(executeList, function (err, res) {
		proxyprinttodiv('after createhtml res -- ', res, 100);
		callback(err, res);
	});
}

// template at one level, repeating data for it
exports.htest2 = htest2 = function htest2(param, callback) {

	var executeList = {
		"command.htmltemplate": "<label>[[displayname]]</label><input type='text' name='[[field]]' id='[[field]]'/>",
		"queryresult": 
				[{
				   "htmltargetdiv": "inputA", "field": "a", "displayname": "A"
					//,"htmltemplate": "<label>[[displayname]]</label><input type='text' name='[[field]]' id='[[field]]'/>"
				}, { 
					"htmltargetdiv": "inputB", "field": "b", "displayname": "B"
					//,"htmltemplate": "<label>[[displayname]]</label><input type='text' name='[[field]]' id='[[field]]'/>" 
				}, { 
					"htmltargetdiv": "inputC", "field": "c", "displayname": "C" 
					//, "htmltemplate": "<label>[[displayname]]</label><input type='text' name='[[field]]' id='[[field]]'/>" 
				}]
			}
	debuglevel = 100;
	//execute(executeList, function (err, res) {
	createhtml(executeList, function (err, res) {
		proxyprinttodiv('after createhtml res -- ', res, 100);
		callback(err, res);
	});
}

// template and data at differnet levels
exports.htest3 = htest3 = function htest3(param, callback) {
	var executeList = {
		"htmltargetdiv": "inputB", 
		"field": "b", 
		"displayname": "B",
		"htmltemplate": "<label>[[displayname]]</label><input type='text' name='[[field]]' id='[[field]]'/>",
		"queryresult": 
				[{
				   "htmltargetdiv": "inputA", "field": "a", "displayname": "A"
					,"htmltemplate": "<label>[[displayname]]</label><input type='text' overAAA name='[[field]]' id='[[field]]'/>"
				}, { 
					//"htmltargetdiv": "inputB", "field": "b", "displayname": "B"
					//,
					"htmltemplate": "<label>[[displayname]]</label><input type='text' overBBB name='[[field]]' id='[[field]]'/>" 
				}, {	// an empty object
				}, { 
					"htmltargetdiv": "inputC", "field": "c", "displayname": "C" 
					, "htmltemplate": "<label>[[displayname]]</label><input type='text' overCCC name='[[field]]' id='[[field]]'/>" 
				}]
			}
	debuglevel = 100;
	//execute(executeList, function (err, res) {
	createhtml(executeList, function (err, res) {
		proxyprinttodiv('after createhtml res -- ', res, 100);
		callback(err, res);
	});
}

// template and data at differnet levels
exports.htest4 = htest4 = function htest4(param, callback) {
	var executeList = {
		"htmltargetdiv": "inputB", 
		"field": "b", 
		"displayname": "B",
		"htmltemplate": "<label>[[displayname]]</label><input type='text' name='[[field]]' id='[[field]]'/>",
		"queryresult": 
				[{
				   "htmltargetdiv": "inputA", "field": "a", "displayname": "A"
					,"htmltemplate": "<label>[[displayname]]</label><input type='text' overAAA name='[[field]]' id='[[field]]'/>"
				}, { 
					//"htmltargetdiv": "inputB", "field": "b", "displayname": "B"
					//,
					"htmltemplate": "<label>[[displayname]]</label><input type='text' overBBB name='[[field]]' id='[[field]]'/>" 
				}, {	// an empty object
				}, { 
					"htmltargetdiv": "inputC", "field": "c", "displayname": "C" 
					//, "htmltemplate": "<label>[[displayname]]</label><input type='text' overCCC name='[[field]]' id='[[field]]'/>" 
				}]
			}
	debuglevel = 100;
	//execute(executeList, function (err, res) {
	createhtml(executeList, function (err, res) {
		proxyprinttodiv('after createhtml res -- ', res, 100);
		callback(err, res);
	});
}



// template and data at one level
exports.htest1a = htest1a = function htest1a(param, callback) {
	var executeList = {
		//"executethis": "createhtml",
		"command.htmltemplate":"[[html]]",
		"queryresult" : 
		[{
			"command.htmltemplate": "<label>[[displayname]]</label><input type='text' name='[[field]]' id='[[field]]'/>",
			"htmltargetdiv": "inputA", 
			"field": "a", 
			"displayname": "A"
		}]
	};
	debuglevel = 100;
	createhtml(executeList, function (err, res) {
		proxyprinttodiv('after createhtml res -- ', res, 100);
		callback(err, res);
	});
}

// template at one level, repeating data for it
exports.htest2a = htest2a = function htest2a(param, callback) {

	var executeList = {
		"htmltemplate":"[[html]]",

		//"htmltemplate": "<label>[[displayname]]</label><input type='text' name='[[field]]' id='[[field]]'/>",
		"queryresult": 
				[{
				   "htmltargetdiv": "inputA", "field": "a", "displayname": "A",
					"htmltemplate": "<label>[[displayname]]</label><input type='text' name='[[field]]' id='[[field]]'/>"
				}, { 
					"htmltargetdiv": "inputB", "field": "b", "displayname": "B"
					//,"htmltemplate": "<label>[[displayname]]</label><input type='text' name='[[field]]' id='[[field]]'/>" 
				}, { 
					"htmltargetdiv": "inputC", "field": "c", "displayname": "C" 
					//, "htmltemplate": "<label>[[displayname]]</label><input type='text' name='[[field]]' id='[[field]]'/>" 
				}]
			}
	debuglevel = 100;
	//execute(executeList, function (err, res) {
	createhtml(executeList, function (err, res) {
		proxyprinttodiv('after createhtml res -- ', res, 100);
		callback(err, res);
	});
}

// template at one level, repeating data for it
exports.htest5 = htest5 = function htest5(param, callback) {


	var executeList = {
		"command.htmltemplate" : "this is <br>[[html]]<br> a test",
		"queryresult": [
			{
			"command.htmltemplate": "<label>[[displayname]]</label><input type='text' name='[[field]]' id='[[field]]'/>",
			"queryresult": 
					[{
					   "htmltargetdiv": "inputA", "field": "a", "displayname": "A"
						//,"htmltemplate": "<label>[[displayname]]</label><input type='text' name='[[field]]' id='[[field]]'/>"
					}, { 
						"htmltargetdiv": "inputB", "field": "b", "displayname": "B"
						//,"htmltemplate": "<label>[[displayname]]</label><input type='text' name='[[field]]' id='[[field]]'/>" 
					}, { 
						"htmltargetdiv": "inputC", "field": "c", "displayname": "C" 
						//, "htmltemplate": "<label>[[displayname]]</label><input type='text' name='[[field]]' id='[[field]]'/>" 
					}]
			}],
			}
	debuglevel = 100;
	//execute(executeList, function (err, res) {
	createhtml(executeList, function (err, res) {
		proxyprinttodiv('after createhtml res -- ', res, 100);
		callback(err, res);
	});
}



exports.htest10 = htest10 = function htest10(param, callback) {

	var htmltemplate = 		"<body>abc  [[fielda]] def [[fieldb]]</body>";
	var htmldata = 			[	{"fielda": "one", "fieldb": "one"}, 
								{"fielda": "two", "fieldb": "two"},
								{"fielda": "three", "fieldb": "three"}];

	var htmlinnertemplate = '<div id="[[divid]]">[[html]]</div>';
	var htmlinnerdata = 	[{"divid":"red"}, {"divid":"blue"}, {"divid":"green"}];

	var htmloutertemplate = '<body><script src="[[file]]">[[html]]</script></body>';
	var htmlouterdata = 	{"file": "red-background"};

	var this_css = "body {background-color: red}";
    
    var file1 = "<body>abc [[file2]] def</body>";
    var file2 = "ghi [[file3]] xyz";
    var file3 = "qwety";
    
	execute({
	"command.xrun" : [{
			"executethis":"updatewid",
			"wid": "htmltemplate1",
			htmltemplate: htmltemplate
		},{
			"executethis":"updatewid",
			"wid": "htmldata1",
			htmldata: htmldata
		},{
			"executethis":"updatewid",
			"wid": "htmlinnertemplate1",
			htmlinnertemplate: htmlinnertemplate
		},{
			"executethis":"updatewid",
			"wid": "htmlinnerdata1",
			htmlinnerdata: htmlinnerdata
		},{
			"executethis":"updatewid",
			"wid": "htmloutertemplate1",
			htmloutertemplate: htmloutertemplate
		},{
			"executethis":"updatewid",
			"wid": "htmlouterdata1",
			htmlouterdata: htmlouterdata
		},{
			"executethis":"updatewid",
			"wid": "this_css1",
			"this_css": this_css
		},
		{
	        "executethis": "createhtml",
	        "htmltemplate": "[[this_css1]][[htmltemplate1]][[file1]]",
	        "htmldata": "[[htmldata1]]",
	        "htmlinnertemplate": "[[htmlinnertemplate1]]",
	        "htmlinnerdata":"[[htmlinnerdata1]]",
	        "htmloutertemplate": "[[htmloutertemplate1]]",
	        "htmlouterdata":"[[htmlouterdata1]]"
		}
		]
	}, function(err, res) {
		proxyprinttodiv('after createhtml res -- ', res, 100);
		callback(null, res);
	});

}

exports.htest15 = htest15 = function htest15(param, callback) {
	console.log("MERGE TEST 1");
	debuglevel = 100;
// }
	var obj = {}
	obj.command={};
	obj.command.wid="wid1";
	proxyprinttodiv('after createhtml before', obj, 100);
	createhtml(obj, function (err, res){
		debuglevel = 100;
		proxyprinttodiv('after createhtml res -- ', res, 100, true, true);
	})
}

exports.htest16 = htest16 = function htest16(param, callback) {
	console.log("MERGE TEST 1");
	debuglevel = 100;
// }
	var obj = {}
	obj.htmltemplate = "abc [[wid2]] def [[wid3]] ghi";
	proxyprinttodiv('after createhtml before', obj, 100);
	createhtml(obj, function (err, res){
		proxyprinttodiv('after createhtml res -- ', res, 100);
	})
}


exports.htest17 = htest17 = function htest17(param, callback) {
	console.log("MERGE TEST 1");
	debuglevel = 100;
// }
	var obj = {}
	obj.htmltemplate = "abc [[wid3]] def  ghi";
	proxyprinttodiv('after createhtml before', obj, 100);
	createhtml(obj, function (err, res){
		proxyprinttodiv('after createhtml res -- ', res, 100);
	})
}

exports.htest18 = htest18 = function htest18(param, callback) {
	console.log("MERGE TEST 1");
	debuglevel = 100;
// }
	var obj = {}
	obj.htmltemplate = "[[green_wid]]";
	proxyprinttodiv('after createhtml before', obj, 100);
	createhtml(obj, function (err, res){
		proxyprinttodiv('after createhtml res -- ', res, 100);
	})
}

exports.htest19 = htest19 = function htest19(param, callback) {
	console.log("MERGE TEST 1");
	debuglevel = -1;
// }
	var obj = {}
	obj.command = {};
	obj.command.wid = "wid1";
	proxyprinttodiv('after createhtml before', obj, 100);
	createhtml(obj, function (err, res){
		debuglevel=100;
		proxyprinttodiv('after createhtml res -- ', res, 100);
		obj = {};
		obj = res;
		delete obj.html; 
		obj.command={};
		obj.command.html='';
		obj.command.htmlsharedtemplate=true;
		obj.command.htmlshallow=true;
		obj.command.htmlpreamble = "CHILD";
		obj.command.htmltemplate = 'this is wid [[wid]] end [[html]]';
		//obj.htmltemplate = '<ol id="ol1" class="dd-list"><li class="dd-item1" id="[[wid]]" ><div id="[[wid]]"  class="dd-handle2">[[wid]]</div></li>';
		proxyprinttodiv('after createhtml -- start next obj ', obj, 100, true, true);
		createhtml(obj, function (err, res){
			proxyprinttodiv('after createhtml after cooking ', res, 100);
		})
	})
}

exports.htest19a = htest19a = function htest19a(param, callback) {
	console.log("MERGE TEST 1");
	debuglevel = -1;
// }
	var obj = {}
	obj.command = {};
	obj.command.wid = "wid1";
	//debuglevel=100;
	proxyprinttodiv('after createhtml before', obj, 100);
	createhtml(obj, function (err, res){
		debuglevel=100;
		proxyprinttodiv('after createhtml res -- ', res, 100);
		obj = {};
		obj = res;
		delete obj.html; 
		obj.command={};
		obj.command.htmlsharedtemplate=true;
		//obj.command.htmlpreamble = 'CHILD';
		//obj.command.htmltemplate = 'this is wid [[wid]] end [[html]]';
		//obj.htmltemplate =       '<ol id="ol1" class="dd-list"><li class="dd-item1" id="[[wid]]" ><div id="[[wid]]"  class="dd-handle2">[[wid]]</div></li>';
		obj.command.htmltemplate = '<ol id="ol1" class="dd-list"><li class="dd-item1" id="[[wid]]" ><div id="[[wid]]" class="dd-handle2" >[[wid]]</div></li>[[html]]';
		proxyprinttodiv('after createhtml -- start next obj ', obj, 100, true, true);
		createhtml(obj, function (err, res){
			proxyprinttodiv('after createhtml after cooking ', res, 100);
		})
	})
}



exports.htest20 = htest20 = function htest20(param, callback) {
	console.log("MERGE TEST 1");
	debuglevel = -1;
// }
	var obj = {}
	obj.command = {};
	obj.command.wid = "wid1";
	proxyprinttodiv('after createhtml before', obj, 100);
	createhtml(obj, function (err, res){
		debuglevel=100;
		proxyprinttodiv('after createhtml res -- ', res, 100);
		obj = {};
		obj = res;
		delete obj.html; 
		obj.command={};
		obj.command.htmlpreamble = "xyz";
		obj.command.htmltemplate = 'this is wid [[wid]] end [[html]]';
		//obj.htmltemplate = '<ol id="ol1" class="dd-list"><li class="dd-item1" id="[[wid]]" ><div id="[[wid]]"  class="dd-handle2">[[wid]]</div></li>';
		proxyprinttodiv('after createhtml -- start next obj ', obj, 100, true, true);
		createhtml(obj, function (err, res){
			proxyprinttodiv('after createhtml after cooking ', res, 100);
		})
	})
}

exports.htest21 = htest21 = function htest21(param, callback) {
	console.log("MERGE TEST 1");
	debuglevel = 100;
// }
	var obj = {}
	obj.command = {};
	obj.command.wid = "wid1";
	proxyprinttodiv('after createhtml before', obj, 100);
	createhtml(obj, function (err, res){
		proxyprinttodiv('after createhtml res -- ', res, 100);
		obj = {};
		//obj.htmldata = {};
		//obj.htmldata = res; 
		obj = res;
		obj.htmltemplate = '<ol id="ol1" class="dd-list"><li class="dd-item1" id="[[wid]]" ><div id="[[wid]]"  class="dd-handle2">[[wid]]</div></li>';
		obj.htmltemplate = '<ol id="ol1" class="dd-list"><li class="dd-item1" id="[[wid]]" ><div id="[[wid]]"  class="dd-handle2">[[wid]]</div></li>';
		obj.htmltemplate.queryresult = '\r\n<li class="dd-item1" id="[[wid]]"><div id="[[wid]]"  class="dd-handle2">[[wid]]</div></li>';

		createhtml(obj, function (err, res){
			proxyprinttodiv('after createhtml after cooking ', res, 100);
		})
	})
}

exports.htest22 = htest22 = function htest22(param, callback) {
	console.log("MERGE TEST 1");
	debuglevel = -1;
// }
	var obj = {}
	obj.command = {};
	obj.command.wid = "wid1";
	//obj.command.htmlshallow = true;
			debuglevel=100;
	proxyprinttodiv('after createhtml before', obj, 100);
	createhtml(obj, function (err, res){
		debuglevel=100;
		proxyprinttodiv('after createhtml res -- ', res, 100, true, true);		
	})
}

exports.htest30 = htest30 = function htest30(param, callback) {
	var obj =
 {
    "queryresult": [
        {"queryresult": [
            {
                "target_prop": "target_value",
                "htmltemplate": "abc [[wid2]] def [[wid3]] ghi",
                "wid": "wid1",
                "metadata.namespace.category": "test_category",
                "metadata.method": "defaultdto",
                "metadata.date": "2014-08-11T16:08:40.116Z",
                "target": "metadata.namespace.category"
            },
            {
                "target_prop": "target_value",
                "htmltemplate": "<h1>TEST HTML</h1>",
                "wid": "nest_200",
                "metadata.namespace.category": "test_category_1",
                "metadata.namespace.subcategory": "test_sub_category_3",
                "metadata.namespace.subdto": "test_subdto_ccc",
                "metadata.method": "defaultdto",
                "metadata.date": "2014-08-11T16:08:39.677Z",
                "target": "metadata.namespace.category"
            },
            {
                "target_prop": "target_value",
                "htmltemplate": "<h1>TEST HTML</h1>",
                "wid": "nest_800",
                "metadata.namespace.category": "test_category_2",
                "metadata.namespace.subcategory": "test_sub_category_4",
                "metadata.namespace.subdto": "test_subdto_bbb",
                "metadata.method": "defaultdto",
                "metadata.date": "2014-08-11T16:08:39.934Z",
                "target": "metadata.namespace.category"
            },
            {
                "a": "b",
                "htmltemplate": "<h1>Hello World</h1>[[green_wid]]",
                "wid": "hello_world",
                "metadata.namespace.category": "test_hello",
                "metadata.namespace.subcategory": "test_hello_html",
                "metadata.method": "defaultdto",
                "metadata.date": "2014-08-11T16:08:40.204Z",
                "target": "metadata.namespace.category"
            }
        ],
        "command.htmltemplate": "<option name='[[metadata.namespace.category]]' value='[[metadata.namespace.category]]'>[[metadata.namespace.category]]</option>"
    }],
    "target_prop": "target_value",
    "command.htmltemplate": "<p>[[target]]&nbsp<select class='pull-right' data-dd_id='[[target]]' id='[[target]]' name='[[target]]'><option selected=disabled>'[[target]]'</option>[[html]]</select></p><br>",
    "wid": "wid1",
    "metadata.namespace.category": "test_category",
    "metadata.method": "defaultdto",
    "metadata.date": "2014-08-11T16:08:40.116Z",
    "target": "metadata.namespace.category",
    "command.htmlshallow":true,
    "command.htmlsharedtemplate" : false
	}
	debuglevel=100;
	createhtml(obj, function (err, res){
			proxyprinttodiv('after createhtml after cooking ', res, 100);
		})
	}

exports.htest30updated = htest30updated = function htest30updated(param, callback) {
	debuglevel = 100;
	console.log("MADE IT HERE");
	var obj =

		{
		    "queryresult": [
		        {
		            "queryresult": [
		                {
		                    "target_prop": "target_value",
		                    "htmltemplate": "abc from wid1 >2 [[wid2]] def >3 [[wid3]] ghi",
		                    "widtype.0": "csselement",
		                    "widtype.1": "scriptelement",
		                    "wid": "wid1",
		                    "metadata.namespace.category": "test_category",
		                    "metadata.method": "defaultdto",
		                    "metadata.date": "2014-08-14T13:52:22.275Z",
		                    "target": "metadata.method",
		                    "command.htmlshallow": true,
		                    "command.htmlsharedtemplate": false
		                }
		            ],
		            "command.htmltemplate": "<option name=\"[[metadata.method]]\" value=\"[[metadata.method]]\">[[metadata.method]]</option>"
		        }
		    ],
		    "target_prop": "target_value",
		    "htmltemplate": "abc from wid1 >2 [[wid2]] def >3 [[wid3]] ghi",
		    "widtype.0": "csselement",
		    "widtype.1": "scriptelement",
		    "wid": "wid1",
		    "metadata.namespace.category": "test_category",
		    "metadata.method": "defaultdto",
		    "metadata.date": "2014-08-14T13:52:22.275Z",
		    "target": "metadata.method",
		    "command.htmlshallow": true,
		    "command.htmlsharedtemplate": false,
		    "command.htmltemplate": "<p>[[target]]&nbsp<select class=\"pull-right\" data-dd_id=\"[[target]]\" id=\"[[target]]\" name=\"[[target]]\"><option selected=disabled>\"[[target]]\"</option>[[html]]</select></p><br>"
		};

	debuglevel=100;
	createhtml(obj, function (err, res){
			proxyprinttodiv('after createhtml after cooking ', res, 100);
		})
	}


// test h coming in
// test html coming in

exports.htest31 = htest31 = function htest31(param, callback) {
	var demo_object = {
	    "queryresult": [
	        {
	            "target_prop": "target_value",
	            "htmltemplate": "abc from wid1 >2 [[wid2]] def >3 [[wid3]] ghi",
	            "widtype.0": "csselement",
	            "widtype.1": "scriptelement",
	            "wid": "wid1",
	            "metadata.namespace.category": "test_category",
	            "metadata.method": "defaultdto",
	            "metadata.date": "2014-08-13T12:51:17.675Z",
	            "target": "metadata.namespace.category",
	            "command.htmlshallow": true,
	            "command.htmlsharedtemplate": false
	        },
	        {
	            "target_prop": "target_value",
	            "htmltemplate": "<h1>TEST HTML</h1>",
	            "wid": "nest_200",
	            "metadata.namespace.category": "test_category_1",
	            "metadata.namespace.subcategory": "test_sub_category_3",
	            "metadata.namespace.subdto": "test_subdto_ccc",
	            "metadata.method": "defaultdto",
	            "metadata.date": "2014-08-13T12:51:17.229Z",
	            "target": "metadata.namespace.category",
	            "command.htmlshallow": true,
	            "command.htmlsharedtemplate": false
	        },
	        {
	            "target_prop": "target_value",
	            "htmltemplate": "<h1>TEST HTML</h1>",
	            "wid": "nest_10",
	            "metadata.namespace.category": "test_category_2",
	            "metadata.namespace.subcategory": "test_sub_category_4",
	            "metadata.namespace.subdto": "test_subdto_ccc",
	            "metadata.method": "defaultdto",
	            "metadata.date": "2014-08-13T12:51:17.570Z",
	            "target": "metadata.namespace.category",
	            "command.htmlshallow": true,
	            "command.htmlsharedtemplate": false
	        },
	        {
	            "a": "b",
	            "htmltemplate": "<h1>Hello World</h1>[[green_wid]]",
	            "wid": "hello_world",
	            "metadata.namespace.category": "test_hello",
	            "metadata.namespace.subcategory": "test_hello_html",
	            "metadata.method": "defaultdto",
	            "metadata.date": "2014-08-13T12:51:17.758Z",
	            "target": "metadata.namespace.category",
	            "command.htmlshallow": true,
	            "command.htmlsharedtemplate": false
	        }
	    ],
	    "command.html": "<option name=\"[[metadata.namespace.category]]\" value=\"[[metadata.namespace.category]]\">[[metadata.namespace.category]]</option>"
	};

	createhtml(demo_object, function (err, res) {
		console.log("\n\nRES:\n" + JSON.stringify(res, null, 4));
			debuglevel = 100;
			proxyprinttodiv('AFTER CREATE HTML ', res.html, 100);


	});
}

exports.htest1_luke = htest1_luke = function htest1_luke (param, callback) {
	var executeList = {
		"command.htmltemplate": '<label>Name: [[displayname]]</label><input type="text" placeholder="[[holder]]" id="[[displayname]]"/>',
		"holder": "First_Name", 
		"displayname": "Bob",
		"command.htmlshallow": true
	};
	debuglevel = 100;
	createhtml(executeList, function (err, res) {
		console.log("\n\nRES:\n" + JSON.stringify(res, null, 4));
		proxyprinttodiv('after createhtml res -- ', res.html, 100);
		callback(err, res);
	});
}

exports.htest2_luke = htest2_luke = function htest2_luke (param, callback) {
	execute({
	        "command.xrun": [{
	            "executethis": "addwidmaster",
	            "wid": "my_wid",
	            "html": 'placeholder="King_Name"',
	            "command": {
	                "executetype": "series",
	                "processparameterfn": "execute_nothing",
	                "environment": {
	                    "run": {
	                        "executelevel": 1
	                    }
	                }
	            }
	        }
	    ]}, function(err, res) {
	        callback(err, res)
    });

	var executeList = {
		"command.htmltemplate": '<label>Name: Frank</label>&nbsp<input type="text" [[my_wid]] id="[[displayname]]"/>'
	};
	debuglevel = 100;
	createhtml(executeList, function (err, res) {
		console.log("\n\nRES:\n" + JSON.stringify(res, null, 4));
		proxyprinttodiv('after createhtml res -- ', res.html, 100);
		callback(err, res);
	});
}

exports.htest3_luke = htest3_luke = function htest3_luke (param, callback) {
	var executeList = {
		"command.htmltemplate": '<label>Name: [[displayname]]</label><input type="text" placeholder="[[holder]]" id="[[displayname]]"/>',
		"queryresult": [{
			"holder": "First_Name", 
			"displayname": "Bob"
		}]
	};
	debuglevel = 100;
	createhtml(executeList, function (err, res) {
		console.log("\n\nRES:\n" + JSON.stringify(res, null, 4));
		proxyprinttodiv('after createhtml res -- ', res.html, 100);
		callback(err, res);
	});
}

exports.htest4_luke = htest4_luke = function htest4_luke (param, callback) {
	var executeList = {
    "command.htmltemplate": "<div id=\"form_input_boxes\"><br>[[html]]</div>",
    "command.htmlshallow": true,
    "queryresult": [
        {
            "queryresult": [
                {
                    "property": "target_prop",
                    "value": "target_value"
                },
                {
                    "property": "htmltemplate",
                    "value": "<h1>TEST HTML</h1>"
                },
                {
                    "property": "wid",
                    "value": "nest_300"
                }
            ],
            "command.htmltemplate": "<p>[[property]]<input style=\"height: 30px\" class=\"pull-right\" size=\"25\" name=\"[[property]]\" type=\"text\" value=\"[[value]]\"></p><br>"
        }
    ]
};
	debuglevel = 100;
	createhtml(executeList, function (err, res) {
		console.log("\n\nRES:\n" + JSON.stringify(res, null, 4));
		proxyprinttodiv('after createhtml res -- ', res.html, 100);
		callback(err, res);
	});
}


