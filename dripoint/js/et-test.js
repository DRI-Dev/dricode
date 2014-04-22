  // out of date
    // exports.ettestinheritoverride = ettestinheritoverride = function ettestinheritoverride(params, callback) {
    //     eventappinstall();
    //     debuglevel = 0;
        
    //     execute([{
    //                 "executethis": "addwidmaster",
    //                 "wid": "bookdtoextra",
    //                 "metadata.method": "bookdtoextra",
    //                 "title": "string", // changed by joe
    //                 "pages": "string"
    //             },{
    //                 "executethis": "addwidmaster",
    //                 "wid": "bookdefaultdto",
    //                 "metadata.method": "bookdtoextra",
    //                 "title":"X title", // changed by joe
    //                 "pages":"300"
    //             },{
    //                 "executethis": "addwidmaster",
    //                 "wid": "bookdto",
    //                 "metadata.method": "bookdto",
    //                 "metadata.inherit.override.0": "bookdefaultdto",
    //                 "metadata.inherit.override.1": "bookdefaultdto2",
    //                 "title": "string",
    //                 "pages": "string"
    //             },{
    //                 "executethis": "addwidmaster",
    //                 "wid": "bookdtowid111",
    //                 "metadata.method":"bookdto",
    //                 "title": "Book Title1"
    //                 // notice no pages
    //             },{
    //                 "executethis": "getwidmaster",
    //                 "wid": "bookdtowid111",
    //             }
    //         ], function (err, res) {
    //             proxyprinttodiv('Function bookdtowid111 result Full res', res, 17);
                
    //             proxyprinttodiv('Function bookdtowid111 res[4] ', res[4], 99);
                
    //             var expectedResult = [{"title":"X title","wid":"bookdtowid111","metadata.method":"bookdtoextra","pages":"300"}];
    //             proxyprinttodiv('Function bookdtowid111 expectedResult ', expectedResult, 17);
                
    //             res = logverify("bookdtowid111_result", res[4], expectedResult);
    //             debuglevel=0;
    //             execute({"executethis": "getwidmaster","wid": "bookdtowid111"}, function (err, res1) {
    //                 proxyprinttodiv('Function bookdtowid111 result LAST ', res1, 17); 
    //                 callback(err, res); 
    //             })
    //     });
    // }
    
    //         /*
    //     To create data for command.dtotype with add
    // */
    // function createdataforcommanddtotypadd(params, preambleflag, preamble, dtotypeflag, dtotype, executeobj, callback){
    //     proxyprinttodiv("createdataforcommanddtotypadd preambleflag--", preambleflag, 99);
    //     proxyprinttodiv("createdataforcommanddtotypadd preamble--", preamble, 99);
    //     proxyprinttodiv("createdataforcommanddtotypadd dtotypeflag--", dtotypeflag, 99);
    //     proxyprinttodiv("createdataforcommanddtotypadd dtotype--", dtotype, 99);
        
    //     if (params) {
    //         executeobj=extend(true, executeobj, params)
    //     }               
    //     if(preamble && preambleflag>=0 && preamble[preambleflag]){
    //         for(key in executeobj){
    //             if(key!=="executethis" && key!="metadata.method" && key!="wid"){
    //                 var preamblekey = preamble[preambleflag]+"."+key;               
    //                 executeobj[preamblekey]=executeobj[key];
    //                 delete executeobj[key];
    //             }
    //         }
    //     }
    //     proxyprinttodiv("createdataauthor executeobj after preambleflag-- ", executeobj, 99);
    //     if(dtotype && dtotypeflag>=0 && dtotype[dtotypeflag]){
    //         executeobj["command.dtotype"]=dtotype[dtotypeflag];
    //     }
    //     execute(executeobj, function (err, res) {
    //         proxyprinttodiv("createdataforcommanddtotypadd addwidmaster data res -- ", res, 99);
    //         callback(err, res);
    //     });
    // }
    
    // /*
    //     Global Variable 
    // */
    // var preamble=["spousedto", "housedto", "bookdto", "bookdto.pubhousedto", "bookdto.pubhousedto.addressdto.0", "bookdto.pubhousedto.statedto.0", "bookdto.pubhousedto.ownerdto.0"];
    
    //  /*
    //     To add data for commanddtotypeaddtest
    //  */
    //  function createdataauthor(params, preambleflag, dtotypeflag, d, callback){
    //     var executeobj ={
    //         "executethis":"addwidmaster",
    //         "metadata.method": "authordto",
    //         "wid": "wid1",
    //         "name": "somedata222" + d,
    //         "age": "somedata"  + d
    //     };
    //     //var preamble=null;
    //     var dtotype=["authordto"];
    //     createdataforcommanddtotypadd(params, preambleflag, preamble, dtotypeflag, dtotype, executeobj, function (err, res){
    //         callback(err, res);
    //     });         
    //  }
    
    //  /*
    //     To add data for commanddtotypeaddtest
    //  */
    //  function createdataspouse(params, preambleflag, dtotypeflag, d, callback){
    //     var executeobj = 
    //             {
    //                 "executethis":"addwidmaster",
    //                 "metadata.method": "authordto",
    //                 "wid": "wid1",
                
    //                 "datemarried": "03/10/2014"
    //             };
    //     //var preamble=["spousedto"];
    //     var dtotype=["spousedto"];
    //     createdataforcommanddtotypadd(params, preambleflag, preamble, dtotypeflag, dtotype, executeobj, function(err, res){
    //         callback(err, res);
    //     });             
    //  }
    
    //  /*
    //     To add data for commanddtotypeaddtest
    //  */
    //  function createdatahouse(params, preambleflag, dtotypeflag, d, callback){
    //         var executeobj = 
    //             {
    //                 "executethis":"addwidmaster",
    //                 "metadata.method": "authordto",
    //                 "wid": "wid1",
                
    //                 "color": "purple"  + d
    //             };
    //     //var preamble=["housedto"];
    //     var dtotype=["housedto"];
    //     createdataforcommanddtotypadd(params, preambleflag, preamble, dtotypeflag, dtotype, executeobj, function (err, res){
    //         callback(err, res);
    //     });             
    //  }
    
    //  /*
    //     To add data for commanddtotypeaddtest
    //  */
    //  function createdatabook(params, preambleflag, dtotypeflag, d, callback){
    //         var executeobj = 
    //             {
    //                 "executethis":"addwidmaster",
    //                 "metadata.method": "authordto",
    //                 "wid": "wid1",

    //                 "title": "Book 1"  + d,
    //                 "pages": "300"  + d,
    //             };
    //     //var preamble=["bookdto"];
    //     var dtotype=["bookdto"];
    //     createdataforcommanddtotypadd(params, preambleflag, preamble, dtotypeflag, dtotype, executeobj, function (err, res){
    //         callback(err, res);
    //     });             
    //  }
    
    //  /*
    //     To add data for commanddtotypeaddtest
    //  */
    //  function createdatapubhouse(params, preambleflag, dtotypeflag, d, callback){
    //     var executeobj = 
    //             {
    //                 "executethis":"addwidmaster",
    //                 "metadata.method": "authordto",
    //                 "wid": "wid1",

    //                 "coname": "Company Name"  + d,
    //                 "establishdate": "03/10/2014",
    //             };
    //     //var preamble=["bookdto.pubhousedto"];
    //     var dtotype =["pubhousedto"];
    //     createdataforcommanddtotypadd(params, preambleflag, preamble, dtotypeflag, dtotype, executeobj, function (err, res){
    //         callback(err, res);
    //     });         
    //  }
    
    //  /*
    //     To add data for commanddtotypeaddtest
    //  */
    //  function createdataaddress(params, preambleflag, dtotypeflag, d, callback){
    //     var executeobj =
    //              {
    //                 "executethis":"addwidmaster",
    //                 "metadata.method": "authordto",
    //                 "wid": "wid1",

    //                 "city": "City Name" + d,
    //                 "add1": "Address1" + d,
    //                 "add2": "Address2" + d,
    //             };
    //     //var preamble=["bookdto.pubhousedto.addressdto.0"];
    //     var dtotype =["addressdto"];
    //     createdataforcommanddtotypadd(params, preambleflag, preamble, dtotypeflag, dtotype, executeobj, function (err, res){
    //         callback(err, res);
    //     });         
    //  }
    
    //  /*
    //     To add data for commanddtotypeaddtest
    //  */
    //  function createdatastate(params, preambleflag, dtotypeflag, d, callback){
    //     var executeobj =
    //             {
    //                 "executethis":"addwidmaster",
    //                 "metadata.method": "authordto",
    //                 "wid": "wid1",

    //                 "statename": "State Name + d",
    //                 "zipcode": "Z 123456" + d,
    //             };
    //     //var preamble=["bookdto.pubhousedto.statedto.0"];
    //     var dtotype =["statedto"];
    //     createdataforcommanddtotypadd(params, preambleflag, preamble, dtotypeflag, dtotype, executeobj, function (err, res){
    //         callback(err, res);
    //     });         
    //  }
    
    //  /*
    //     To add data for commanddtotypeaddtest
    //  */
    //  function createdataowner(params, preambleflag, dtotypeflag, d, callback){
    //    var executeobj =
    //             {
    //                 "executethis":"addwidmaster",
    //                 "metadata.method": "authordto",
    //                 "wid": "wid1",

    //                 "name": "Owner Name" + d
    //             };
    //     //var preamble=["bookdto.pubhousedto.ownerdto.0"];
    //     var dtotype =["ownerdto"];
    //     createdataforcommanddtotypadd(params, preambleflag, preamble, dtotypeflag, dtotype, executeobj, function (err, res){
    //         callback(err, res);
    //     });             
    //  }

    // function manytoonedata(params, d, callback){
    //     async.series([
    //         function (cb2) {
    //             var executeobj = //[]
    //                 {
    //                     "executethis":"addwidmaster",
    //                     "metadata.method": "authordto",
    //                     "wid": "wid1",
    //                     "name": "somedata222" + d,
    //                     "age": "somedata"  + d,
                        
    //                     "spousedto.datemarried": "03/10/2014",
                        
    //                     "housedto.color": "purple"  + d,    
                        
    //                     "bookdto.title": "Book 1"  + d,
    //                     "bookdto.pages": "300"  + d,

    //                     "bookdto.pubhousedto.coname": "Company Name"  + d,
    //                     "bookdto.pubhousedto.establishdate": "03/10/2014",

    //                     "bookdto.pubhousedto.addressdto.0.city": "City Name" + d,
    //                     "bookdto.pubhousedto.addressdto.0.add1": "Address1" + d,
    //                     "bookdto.pubhousedto.addressdto.0.add2": "Address2" + d,

    //                     "bookdto.pubhousedto.statedto.0.statename": "State Name + d",
    //                     "bookdto.pubhousedto.statedto.0.zipcode": "Z 123456" + d,

    //                     "bookdto.pubhousedto.ownerdto.0.name": "Owner Name" + d
    //                 }
    //             //];
    //             if (params) {
    //                  executeobj=extend(true, executeobj, params)
    //             }
    //             var executeList=[];
    //             executeList.push(executeobj)

    //             execute(executeList, function (err, res) {
    //                 proxyprinttodiv("manytoonetest addwidmaster data res -- ", res, 99);
    //                 cb2(err, res);
    //             });
    //         }
    //     ], function (err, res) {
    //         callback(err, res);
    //     });             
    // }

 
    //  /*
    //     test command.dtotype= should get the results at different levels …try a get with dtotype=bookdto, with dtotype=test
    //  */
    //  exports.commanddtotypeaddtest1 = commanddtotypeaddtest1 = function commanddtotypeaddtest1(p, callback) {
    //      params={};
    //      var preamble = [];
    //      manytoonesetupdto(params, function (err, res){
    //         createdataauthor(params, null, 0, p.a, function (err, res){
    //             createdataspouse(params, 0, 0, p.b, function (err, res){
    //                 createdatahouse(params, 1, 0, p.c, function (err, res){
    //                     createdatabook(params, 2, 0, p.d, function (err, res){
    //                         createdatapubhouse(params, 3, 0, p.e, function (err, res){
    //                             createdataaddress(params, 4, 0, p.f, function (err, res){
    //                                 createdatastate(params, 5, 0, p.g, function (err, res){
    //                                     createdataowner(params, 6, 0, p.h, function (err, res){
    //                                         var executeobj = {
    //                                             "executethis": "getwidmaster",
    //                                             "wid": "wid1"
    //                                         };
    //                                          execute(executeobj, function (err, res) {
    //                                              proxyprinttodiv("Function getwidmaster wid1 ", res, 99, true);
    //                                              callback(err, res);
    //                                         });
    //                                     });
    //                                 }); 
    //                             });
    //                         });
    //                     }); 
    //                 });
    //             });
    //         });
    //      });     
    //  }


     
    //  /*
    //     test command.dtotype= should get the results at different levels …try a get with dtotype=bookdto, with dtotype=test
    //  */
    //  exports.add1big = add1big = function add1big(params, callback) {
    //     commanddtotypeaddtest1({"a":"1", "b":"2", "c":"3", "d":"4", "e":"5", "f":"6", "g":"7", "h":"8"},function (err, res){
    //         var executeobj = {
    //             "executethis": "getwidmaster",
    //             "wid": "wid1"
    //         };
    //         execute(executeobj, function (err, res) {
    //              proxyprinttodiv("Function getwidmaster wid1 ", res, 99, true);
    //              callback(err, res);
    //          });
    //     });
    //  }

    // exports.add3big = add3big = function add3big(params, callback) {
    //     commanddtotypeaddtest1({"a":"1", "b":"2", "c":"3", "d":"4", "e":"5", "f":"6", "g":"7", "h":"8"},function (err, res){
    //         commanddtotypeaddtest1({"a":"a1", "b":"a2", "c":"a3", "d":"a4", "e":"a5", "f":"a6", "g":"a7", "h":"a8"},function (err, res){
    //             commanddtotypeaddtest1({"a":"b1", "b":"b2", "c":"b3", "d":"b4", "e":"b5", "f":"b6", "g":"b7", "h":"b8"},function (err, res){
    //                 async.series([
    //                     /*function (cb1) {
    //                         var executeobj = {
    //                             "executethis": "getwidmaster",
    //                             "wid": "wid1",
    //                             "command.dtotype":"authordto"
    //                         };
    //                         execute(executeobj, function (err, res) {
    //                              proxyprinttodiv("Function add3big wid1 with command.dtotype=authordto", res, 99, true);
    //                              cb1(err, res);
    //                         });
    //                     },*/
    //                     function (cb2) {
    //                         var executeobj = {
    //                             "executethis": "getwidmaster",
    //                             "wid": "wid1",
    //                             "command.dtotype":"spousedto"
    //                         };
    //                         execute(executeobj, function (err, res) {
    //                              proxyprinttodiv("Function add3big wid1 with command.dtotype=spousedto", res, 99, true);
    //                              cb2(err, res);
    //                         });
    //                     }
    //                 ], function (err, res) {
    //                      proxyprinttodiv('Function commanddtotypegettest result Full res', res, 99);
    //                      callback(err, res); 
    //                  });        
    //             });
    //         }); 
    //     });
    //  }

  /*
    To add dtos, relationships for manytoonetest
  */
	
  function manytoonesetupdto(inherit, dtotype, callback){
        if (Object.keys(inherit).length === 0) {
            inherit =
               {"authordtodefault":[],
                "spousedto":[],
                "housedto":[],
                "bookdto":[], 
                "pubhousedto":[],
                "addressdto":[],
                "statedto":[],
                "ownerdto":[],
                "authordtooverride":[],
                "spousedtooverride":[],
                "housedtooverride":[],
                "bookdtooverride":[],
                "pubhousedtooverride":[],
                "addressdtooverride":[],
                "statedtooverride":[],
                "ownerdtooverride":[]
                }
            }

        var executeList = 
                [
            {       //authordto
                "executethis": "addwidmaster",
                "metadata.method": "authordto",
                "wid": "authordto",
                "name": "string",
                "age": "string",
                "metadata.spousedto.type":"jsononetoone",
                "metadata.housedto.type":"onetoone",
                "metadata.bookdto.type":"onetomany",
                "metadata.inherit.default":inherit.authordtodefault,
                "metadata.inherit.override":inherit.authordtooverride
            }, {    //spousedto
                "executethis": "addwidmaster",
                "metadata.method": "spousedto",
                "wid": "spousedto",
                "datemarried": "date",
                "metadata.inherit.default":inherit.spousedtodefault,
                "metadata.inherit.override":inherit.spousedtooverride
            }, {    //housedto
                "executethis": "addwidmaster",
                "metadata.method": "housedto",
                "wid": "housedto",
                "color": "string",
                "metadata.inherit.default":inherit.housedtodefault,
                "metadata.inherit.override":inherit.housedtooverride
            },{     //bookdto
                "executethis": "addwidmaster",
                "metadata.method": "bookdto",
                "wid": "bookdto",
                "title": "string",
                "pages": "string",
                "metadata.pubhousedto.type":"manytooone",
                "metadata.inherit.default":inherit.bookdtodefault,
                "metadata.inherit.override":inherit.bookdtooverride
            }, {    //pubhousedto
                "executethis": "addwidmaster",
                "metadata.method": "pubhousedto",
                "wid": "pubhousedto",
                "coname": "string",
                "establishdate": "date",
                "metadata.addressdto.type":"onetomany",
                "metadata.statedto.type":"manytooone",
                "metadata.ownerdto.type":"onetoone",
                "metadata.inherit.default":inherit.pubhousedtodefault,
                "metadata.inherit.override":inherit.pubhousedtooverride
            }, {    //addressdto
                "executethis": "addwidmaster",
                "metadata.method": "addressdto",
                "wid": "addressdto",
                "city": "string",
                "add1": "string",
                "add2": "string",
                "metadata.inherit.default":inherit.addressdtodefault,
                "metadata.inherit.override":inherit.addressdtooverride
            }, {    //statedto
                "executethis": "addwidmaster",
                "metadata.method": "statedto",
                "wid": "statedto",
                "statename": "string",
                "zipcode": "string",
                "metadata.inherit.default":inherit.statedtodefault,
                "metadata.inherit.override":inherit.statedtooverride
            }, {    //ownerdto
                "executethis": "addwidmaster",
                "metadata.method": "ownerdto",
                "wid": "ownerdto",
                "name": "string",
                "metadata.inherit.default":inherit.owenerdtodtodefault,
                "metadata.inherit.override":inherit.owenerdtooverride
            }, {    //authordto - spousedto
                "executethis": "addwidmaster",
                "wid": "rel_author_spouse",
                "metadata.method": "relationshipdto",
                "relationshiptype": "attributes",
                "linktype": "jsononetoone",
                "primarywid": "authordto",
                "primarymethod": "authordto",
                "secondarywid": "spousedto",
                "secondarymethod": "spousedto"
            }, {    //authordto - housedto
                "executethis": "addwidmaster",
                "wid": "rel_author_house",
                "metadata.method": "relationshipdto",
                "relationshiptype": "attributes",
                //"linktype": "onetomany",
                "linktype": "onetoone",
                "primarywid": "authordto",
                "primarymethod": "authordto",
                "secondarywid": "housedto",
                "secondarymethod": "housedto"
            }, {    //authordto - bookdto
                "executethis": "addwidmaster",
                "wid": "rel_author_book",
                "metadata.method": "relationshipdto",
                "relationshiptype": "attributes",
                "linktype": "onetomany",
                "primarywid": "authordto",
                "primarymethod": "authordto",
                "secondarywid": "bookdto",
                "secondarymethod": "bookdto"
            }, {    //bookdto - pubhousedto
                "executethis": "addwidmaster",
                "wid": "rel_book_pubhouse",
                "metadata.method": "relationshipdto",
                "relationshiptype": "attributes",
                "linktype": "manytoone",    
                "primarywid": "bookdto",
                "primarymethod": "bookdto",
                "secondarywid": "pubhousedto",
                "secondarymethod": "pubhousedto"
            }, {    //pubhousedto - addressdto
                "executethis": "addwidmaster",
                "wid": "rel_pubhouse_address",
                "metadata.method": "relationshipdto",
                "relationshiptype": "attributes",
                "linktype": "onetomany",
                "primarywid": "pubhousedto",
                "primarymethod": "pubhousedto",
                "secondarywid": "addressdto",
                "secondarymethod": "addressdto"
            }, {    //pubhousedto - statedto
                "executethis": "addwidmaster",
                "wid": "rel_pubhouse_state",
                "metadata.method": "relationshipdto",
                "relationshiptype": "attributes",
                "linktype": "manytoone",
                "primarywid": "pubhousedto",
                "primarymethod": "pubhousedto",
                "secondarywid": "statedto",
                "secondarymethod": "statedto"
            }, {    //pubhousedto - ownerdto
                "executethis": "addwidmaster",
                "wid": "rel_pubhouse_owner",
                "metadata.method": "relationshipdto",
                "relationshiptype": "attributes",
                "linktype": "onetoone",
                "primarywid": "pubhousedto",
                "primarymethod": "pubhousedto",
                "secondarywid": "ownerdto",
                "secondarymethod": "ownerdto"
            }       
            ];

        if (dtotype && dtotype==1) {
        executeList = 
        [
            {       //authordto
                "executethis": "addwidmaster",
                "metadata.method": "authordto",
                "wid": "authordto",
                "name": "string",
                "age": "string",
                "metadata.spousedto.type":"jsononetoone",
                "metadata.housedto.type":"onetoone",
                "metadata.bookdto.type":"onetomany",
                "metadata.inherit.default":inherit.authordtodefault,
                "metadata.inherit.override":inherit.authordtooverride
            }, {    //spousedto
                "executethis": "addwidmaster",
                "metadata.method": "spousedto",
                "wid": "spousedto",
                "datemarried": "date",
                "metadata.inherit.default":inherit.spousedtodefault,
                "metadata.inherit.override":inherit.spousedtooverride
            }, {    //housedto
                "executethis": "addwidmaster",
                "metadata.method": "housedto",
                "wid": "housedto",
                "color": "string",
                "metadata.inherit.default":inherit.housedtodefault,
                "metadata.inherit.override":inherit.housedtooverride
            },{     //bookdto
                "executethis": "addwidmaster",
                "metadata.method": "bookdto",
                "wid": "bookdto",
                "title": "string",
                "pages": "string",
                "metadata.pubhousedto.type":"manytooone",
                "metadata.inherit.default":inherit.bookdtodefault,
                "metadata.inherit.override":inherit.bookdtooverride
            }, {    //pubhousedto
                "executethis": "addwidmaster",
                "metadata.method": "pubhousedto",
                "wid": "pubhousedto",
                "coname": "string",
                "establishdate": "date",
                "metadata.addressdto.type":"onetomany",
                "metadata.statedto.type":"manytooone",
                "metadata.ownerdto.type":"onetoone",
                "metadata.inherit.default":inherit.pubhousedtodefault,
                "metadata.inherit.override":inherit.pubhousedtooverride
            }, {    //addressdto
                "executethis": "addwidmaster",
                "metadata.method": "addressdto",
                "wid": "addressdto",
                "city": "string",
                "add1": "string",
                "add2": "string",
                "metadata.inherit.default":inherit.addressdtodefault,
                "metadata.inherit.override":inherit.addressdtooverride
            }, {    //statedto
                "executethis": "addwidmaster",
                "metadata.method": "statedto",
                "wid": "statedto",
                "statename": "string",
                "zipcode": "string",
                "metadata.inherit.default":inherit.statedtodefault,
                "metadata.inherit.override":inherit.statedtooverride
            }, {    //ownerdto
                "executethis": "addwidmaster",
                "metadata.method": "ownerdto",
                "wid": "ownerdto",
                "name": "string",
                "metadata.inherit.default":inherit.owenerdtodtodefault,
                "metadata.inherit.override":inherit.owenerdtooverride
            }, {    //authordto - spousedto
                "executethis": "addwidmaster",
                "wid": "rel_author_spouse",
                "metadata.method": "relationshipdto",
                "relationshiptype": "attributes",
                "linktype": "jsononetoone",
                "primarywid": "authordto",
                "primarymethod": "authordto",
                "secondarywid": "spousedto",
                "secondarymethod": "spousedto"
            }, {    //authordto - housedto
                "executethis": "addwidmaster",
                "wid": "rel_author_house",
                "metadata.method": "relationshipdto",
                "relationshiptype": "attributes",
                //"linktype": "onetomany",
                "linktype": "onetoone",
                "primarywid": "authordto",
                "primarymethod": "authordto",
                "secondarywid": "housedto",
                "secondarymethod": "housedto"
            }, {    //authordto - bookdto
                "executethis": "addwidmaster",
                "wid": "rel_author_book",
                "metadata.method": "relationshipdto",
                "relationshiptype": "attributes",
                "linktype": "onetomany",
                "primarywid": "authordto",
                "primarymethod": "authordto",
                "secondarywid": "bookdto",
                "secondarymethod": "bookdto"
            }, {    //bookdto - pubhousedto
                "executethis": "addwidmaster",
                "wid": "rel_book_pubhouse",
                "metadata.method": "relationshipdto",
                "relationshiptype": "attributes",
                "linktype": "manytoone",    
                "primarywid": "bookdto",
                "primarymethod": "bookdto",
                "secondarywid": "pubhousedto",
                "secondarymethod": "pubhousedto"
            }, {    //pubhousedto - addressdto
                "executethis": "addwidmaster",
                "wid": "rel_pubhouse_address",
                "metadata.method": "relationshipdto",
                "relationshiptype": "attributes",
                "linktype": "onetomany",
                "primarywid": "pubhousedto",
                "primarymethod": "pubhousedto",
                "secondarywid": "addressdto",
                "secondarymethod": "addressdto"
            }, {    //pubhousedto - statedto
                "executethis": "addwidmaster",
                "wid": "rel_pubhouse_state",
                "metadata.method": "relationshipdto",
                "relationshiptype": "attributes",
                "linktype": "manytoone",
                "primarywid": "pubhousedto",
                "primarymethod": "pubhousedto",
                "secondarywid": "statedto",
                "secondarymethod": "statedto"
            }, {    //pubhousedto - ownerdto
                "executethis": "addwidmaster",
                "wid": "rel_pubhouse_owner",
                "metadata.method": "relationshipdto",
                "relationshiptype": "attributes",
                "linktype": "onetoone",
                "primarywid": "pubhousedto",
                "primarymethod": "pubhousedto",
                "secondarywid": "ownerdto",
                "secondarymethod": "ownerdto"
            }       
            ];
        }

    async.series([
      function (cb1) {

        execute(executeList, function (err, res) {
          proxyprinttodiv("manytoonesetupdto addwidmaster dto res -- ", res, 1, true);
          cb1(err, res);
        });
      },
      function (cb2){
        var executeList = [{
          "executethis": "getwidmaster",
          "wid": "authordto",
        }];
        execute(executeList, function (err, res) {
          proxyprinttodiv("getwidmaster authordto", res, 99);
                    cb2(err, res);
        });
      }
    ], function (err, res) {
      callback(null, res);
        });       
  }
  // authordto, bookdto, spousedto, housedto, pubhousedto, addressdto, statedto, ownerdto

   

    //   function printlistmany(printlist, callback) {
    //     var executeobj = {};
    //     async.mapSeries(printlist, function (eachprint, cbMap) {
    //         executeobj={};
    //         executeobj["executethis"] = "getwidmaster";
    //         executeobj["wid"] = eachprint["wid"];
    //         executeobj["command.dtotype"]=eachprint["command.dtotype"];
    //         execute(executeobj, function (err, res) {
    //             proxyprinttodiv( eachprint["wid"] + " with command.dtotype="+eachprint["command.dtotype"], res, 99, true);
    //             cbMap(null);
    //         }); 
    //     },                 
    //     function (err, res) {
    //         callback(null, {})
    //         };
    //     );
    // }

    function printlistmany(printlist, callback){
        var executeobj = {};
        async.mapSeries(printlist, function (eachprint, cbMap) {
            executeobj={};
            executeobj["executethis"]= "getwidmaster";
            executeobj["wid"]=eachprint["wid"];
            executeobj["command.dtotype"]=eachprint["command.dtotype"];
            proxyprinttodiv("Function printlistmany input executeobj for getwidmaster", executeobj, 99, true);
            execute(executeobj, function (err, res) {
                proxyprinttodiv("Function printlistmany output for getwidmaster " + eachprint["wid"] + " with command.dtotype="+eachprint["command.dtotype"], executeobj, 99, true);
                proxyprinttodiv("Function printlistmany output = ", res, 99, true);
                cbMap(null);
                //callback(err, res);
            }); 
        } 
        , function (err, res) {callback(null,null)}
        );
    }


    // ADD: How many to add
    // ADD: parentparmkey, c, 
    // ADD: childparmkey, d: (let system select child wid names, we select child wid names)
    // ADD: relativepreamble (childs do not have preamble / childs do have preamble)
    // ADD: relativedtotype (don’t use command.dtotype / use command.dtotype)
    // GET: relgetlist 
    //     get each get each child with one parent w/o dto, 
    //     get each child with one parent with dto, 
    //     get each child by childname w/o dto
    //     get each child by childname with dto, 
    function addauthorrecord(parentparmkey, c, childparmkey, d, relativepreamble, relativedtotype, relgetlist, callback){
        var parent=[{"metadata.method": "authordto","wid": "wid1"+c},
                    {"metadata.method": "authordto","wid": "wid2"+c},
                    {"metadata.method": "authordto","wid": "wid3"+c}];
        var child=[
                {"name":"somedata222"+d, "age":"somedata"+d},
                {"datemarried": "03/10/2014"+d},
                {"color": "blue"+d},
                {"title": "Book 1"+d,"pages":"300"+d},
                {"coname": "Company Name"+d, "establishdate":"03/10/2014"+d},
                {"city":"City Name"+d,"add1":"Address1"+d, "add2":"Address2"+d},
                {"statename":"State Name"+d, "zipcode": "Z 123456"+d},
                {"name":"Owner Name"+d},
                {"name":"somedata222"+d, "age":"somedata"+d, "wid":"wid1A"+d},
                {"datemarried": "03/10/2014"+d, "wid":"wid1S"+d},
                {"color": "blue"+d, "wid":"wid1H"+d},
                {"title": "Book 1"+d,"pages":"300"+d, "wid":"wid1B"+d},
                {"coname": "Company Name"+d, "establishdate":"03/10/2014", "wid":"wid1P"+d},
                {"city":"City Name"+d,"add1":"Address1"+d, "add2":"Address2", "wid":"wid1Add"+d},
                {"statename":"State Name"+d, "zipcode": "Z 123456"+d, "wid":"wid1S"+d},
                {"name":"Owner Name"+d, "wid":"wid1O"+d}
            ];
        
        var preamble=["spousedto", "housedto", "bookdto", "bookdto.pubhousedto", "bookdto.pubhousedto.addressdto.0", "bookdto.pubhousedto.statedto.0", "bookdto.pubhousedto.ownerdto.0"];
        
        var dtotype=["authordto","spousedto", "housedto", "bookdto",  "pubhousedto","addressdto", "statedto", "ownerdto"];
        
        var printlist=[
            [
                {"wid":"wid1"+c, "command.dtotype":""},
                
                {"wid":"wid1"+c, "command.dtotype":"authordto"},
                {"wid":"wid1"+c, "command.dtotype":"spousedto"},
                {"wid":"wid1"+c, "command.dtotype":"housedto"},
                {"wid":"wid1"+c, "command.dtotype":"bookdto"},
                {"wid":"wid1"+c, "command.dtotype":"pubhousedto"},
                {"wid":"wid1"+c, "command.dtotype":"addressdto"},
                {"wid":"wid1"+c, "command.dtotype":"statedto"},
                {"wid":"wid1"+c, "command.dtotype":"ownerdto"},

                {"wid":"wid1A"+d, "command.dtotype":""},
                {"wid":"wid1S"+d, "command.dtotype":""},
                {"wid":"wid1H"+d, "command.dtotype":""},
                {"wid":"wid1B"+d, "command.dtotype":""},
                {"wid":"wid1P"+d, "command.dtotype":""},
                {"wid":"wid1Add"+d, "command.dtotype":""},
                {"wid":"wid1S"+d, "command.dtotype":""},
                {"wid":"wid1O"+d, "command.dtotype":""},

                {"wid":"wid1A"+d, "command.dtotype":"authordto"},
                {"wid":"wid1S"+d, "command.dtotype":"spousedto"},
                {"wid":"wid1H"+d, "command.dtotype":"housedto"},
                {"wid":"wid1B"+d, "command.dtotype":"bookdto"},
                {"wid":"wid1P"+d, "command.dtotype":"pubhousedto"},
                {"wid":"wid1Add"+d, "command.dtotype":"addressdto"},
                {"wid":"wid1S"+d, "command.dtotype":"statedto"},
                {"wid":"wid1O"+d, "command.dtotype":"ownerdto"}
            ],
                [
                {"wid":"wid1"+c, "command.dtotype":""},
                
                {"wid":"wid1"+c, "command.dtotype":"authordto"},
                {"wid":"wid1"+c, "command.dtotype":"spousedto"},
                {"wid":"wid1"+c, "command.dtotype":"housedto"},
                {"wid":"wid1"+c, "command.dtotype":"bookdto"},
                {"wid":"wid1"+c, "command.dtotype":"pubhousedto"},
                {"wid":"wid1"+c, "command.dtotype":"addressdto"},
                {"wid":"wid1"+c, "command.dtotype":"statedto"},
                {"wid":"wid1"+c, "command.dtotype":"ownerdto"},
            ],
            [
                {"wid":"wid1"+c, "command.dtotype":""}
            ],
            [
                {"wid":"wid2"+c, "command.dtotype":""}
            ],
            [
                {"wid":"wid3"+c, "command.dtotype":""}
            ]
        ];
        
        var executeobj=child[childparmkey];
        //proxyprinttodiv("Function addauthorrecord executeobj after child ", executeobj, 99, true);
        if(relativepreamble>=0 && preamble[relativepreamble]){
            for(key in executeobj){
                var preamblekey = preamble[relativepreamble]+"."+key;   
                //proxyprinttodiv("Function addauthorrecord executeobj preamblekey ", preamblekey, 99, true);
                executeobj[preamblekey]=executeobj[key];
                delete executeobj[key];
            }
        }
       // proxyprinttodiv("Function addauthorrecord executeobj after preamble ", executeobj, 99, true);
                
        if (parentparmkey>=0) {
            executeobj=extend(true, executeobj, parent[parentparmkey])
        }
        //proxyprinttodiv("Function addauthorrecord executeobj after parent ", executeobj, 99, true);
        
        if (relativedtotype>=0){
            executeobj["command.dtotype"]=dtotype[relativedtotype];
        }
        //proxyprinttodiv("Function addauthorrecord executeobj after dtotype ", executeobj, 99, true);
                
        executeobj["executethis"]="addwidmaster";
        proxyprinttodiv("Function addauthorrecord input executeobj for addwidmaster", executeobj, 99, true);  
        execute(executeobj, function (err, res) {
            proxyprinttodiv("Function addauthorrecord output for addwidmaster", res, 99, true);
            printlistmany(printlist[relgetlist], function (err, res) {
                callback(err, res);
            });
        });
    }
 

/*************                         ***************/
/*************   INHERIT DEFAULT TESTS ***************/
/*************       Single Level      ***************/
	
  // This tests inherit.default at the dto level. authordto inherits from authordefault 
  // and so author1 should be returned with name=Alex & age=42
  // works.
  exports.testinheritdefault0 = testinheritdefault0 = function testinheritdefault0(params,callback){
    execute([{
      "executethis":"addwidmaster",
      "wid":"authordefault",
      "metadata.method":"authordto",
      "name":"Alex",
      "age":"42"
    },{
      "executethis":"addwidmaster",
      "wid":"authordto",
      "metadata.method":"authordto",
      "name":"string",
      "age":"string",
      "metadata.inherit.0": {"wid" : "authordefault", "command" : { "dtotype":"", "adopt":"default"}}
    },{
      "executethis":"addwidmaster",
      "wid":"author1",
      "age" : "10",
      "metadata.method":"authordto"
    },{
      "executethis": "getwidmaster",
      "wid": "author1"
    }],
    function (err, res) {
      proxyprinttodiv('Full results: ', res, 99);
      proxyprinttodiv('The author1 record: ', res[3], 99);

      var result = logverify("testinheritdefault0_result", res[3], [{
        "wid": "author1",
        "metadata.method": "authordto",
        "name": "Alex",
        "age": "42"
      }]);

      callback(err, result);
    });
  };
    
  // This tests inherit.default at the wid level. author1 inherits from authordefault and 
  // should be returned with name=Alex & age=42
  // works.
  exports.testinheritdefault1 = testinheritdefault1 = function testinheritdefault1(params,callback){
    execute([{
        "executethis":"addwidmaster",
        "wid":"authordefault",
        "metadata.method":"authordto",
        "name":"Alex",
        "age":"42"
      },{
        "executethis":"addwidmaster",
        "wid":"authordto",
        "metadata.method":"authordto",
        "name":"string",
        "age":"string"
      },{
        "executethis":"addwidmaster",
        "wid":"author1",
        "metadata.method":"authordto",
        "metadata.inherit.0": {"wid" : "authordefault", "command" : { "dtotype":"", "adopt":"default"}}
      },{
        "executethis": "getwidmaster",
        "wid": "author1"
      }],
      function (err, res) {
        proxyprinttodiv('Full results: ', res, 99);
        proxyprinttodiv('The author1 record: ', res[3], 99);
        var result = logverify("testinheritdefault0_result", res[3], [{
          "wid": "author1",
          "metadata.method": "authordto",
          "name": "Alex",
          "age": "42"
        }]);

        callback(err, result);
      });
  };

  // This tests inherit.default at the wid level with 1 field already existing. Only age=42 should be accepted from authordefault as name=Tom is already
  // present in the wid. author1 should return name=Tom & age=42.
  // NOTE: This is not working. The age field is not being returned from the default, only the pre-existing name=Tom. It seems like there is a conflict
  // if inherit.default sees that ANY field already exists in the wid.
  exports.testinheritdefault2 = testinheritdefault2 = function testinheritdefault2(params,callback){
    execute([{
      "executethis":"addwidmaster",
      "wid":"authordefault",
      "metadata.method":"authordto",
      "name":"Alex",
      "age":"42"
      },{
      "executethis":"addwidmaster",
      "wid":"authordto",
      "metadata.method":"authordto",
      "name":"string",
      "age":"string"
      },{
      "executethis":"addwidmaster",
      "wid":"author1",
      "metadata.method":"authordto",
      "name":"Tom",
      "metadata.inherit.0": {"wid" : "authordefault", "command" : { "dtotype":"", "adopt":"default"}}
	  //"metadata.inherit.default":[{"widname" : "authordefault"}]
      }],
      function (err, res) {
                proxyprinttodiv('Full results: ', res, 99);
                
                proxyprinttodiv('The author1 record: ', res[2], 99);
        
                debuglevel = 0;
                execute({"executethis": "getwidmaster","wid": "author1"}, function (err, res1) {
                    proxyprinttodiv("getwidmaster author1 result: ", res1, 99); 
                    callback(err, res); 
                });
      });
}

exports.testcommanddtotype = testcommanddtotype = function testcommanddtotype(params,callback){
    execute([{
        "executethis":"addwidmaster",
        "wid": "bookdto",
        "metadata.method": "bookdto",
        "title": "string",
      },{
        "executethis":"addwidmaster",
        "wid":"authordto",
        "metadata.method":"authordto",
        "name":"string",
        "age":"string",
      },{
        "executethis": "addwidmaster",
        "wid": "rel_author_book",
        "metadata.method": "relationshipdto",
        "relationshiptype": "attributes",
        "linktype": "onetomany",
        "primarywid": "authordto",
        "primarymethod": "authordto",
        "secondarywid": "bookdto",
        "secondarymethod": "bookdto"
        },{
        "executethis":"addwidmaster",
        "wid":"author1",
        "metadata.method":"authordto",
        "name":"Alex",
        "age":"42",
        "bookdto.title":"Haunted Houses"
       // },{
       //  "executethis":"getwidmaster",
       //  "wid":"author1",
       //  "command.dtotype":""
       //  },{
       //  "executethis":"getwidmaster",
       //  "wid":"author1", 
       //  "command.dtotype":"authordto"
        // },{
        // "executethis":"getwidmaster",
        // "wid":"author1",
        // "command.dtotype":"bookdto"
        // },{
        // "executethis":"getwidmaster",
        // "wid":"1",
        // "command.dtotype":""
        // },{
        // "executethis":"getwidmaster",
        // "wid":"1",
        // "command.dtotype":"bookdto"
        // },{
        // "executethis":"getwidmaster",
        // "wid":"1",
        // "command.dtotype":"authordto"
      }],
      function (err, res) {
                proxyprinttodiv('Full results: ', res, 99);
                
     
                debuglevel = 38;
                execute({"executethis": "getwidmaster","wid": "1", "command.dtotype":"authordto"}, function (err, res1) {
                    proxyprinttodiv("getwidmaster author1 result: ", res1, 99);
                    callback(err, res);
                });
                // execute({"executethis": "getwidmaster","wid": "book1", "command":{"dtotype":"authordto"}}, function (err, res1) {
                //     proxyprinttodiv("getwidmaster book1 result: ", res1, 99); 
                //     callback(err, res); 
                // });
      });
};

/*************                         ***************/
/*************   INHERIT DEFAULT TESTS ***************/
/*************        Multi Level      ***************/

  // inherit default set at the dto level. authordto has a default wid to inherit from and bookdto has a default wid to inherit from. 
  exports.testinheritdefault3 = testinheritdefault3 = function testinheritdefault3(params,callback){
    execute([{
		  "executethis":"addwidmaster",
		  "wid":"bookdefault",
		  "metadata.method":"bookdto",
		  "title":"Haunted Houses"
      },{
		  "executethis":"addwidmaster",
		  "wid":"authordefault",
		  "metadata.method":"authordto",
		  "name":"Alex",
		  "age":"42"
      },{
		"wid": "bookdto",
		"metadata.method": "bookdto",
		"title": "string",
		"metadata.inherit.0": {"wid" : "bookdefault", "command" : { "dtotype":"", "adopt":"default"}}
		//"metadata.inherit.default":[{"widname" : "bookdefault"}]
      },{
		"executethis":"addwidmaster",
		"wid":"authordto",
		"metadata.method":"authordto",
		"name":"string",
		"age":"string",
		"metadata.inherit.0": {"wid" : "authordefault", "command" : { "dtotype":"", "adopt":"default"}}
		//"metadata.inherit.default":[{"widname" : "authordefault"}]
      },{
		"executethis": "addwidmaster",
		"wid": "rel_author_book",
		"metadata.method": "relationshipdto",
		"relationshiptype": "attributes",
		"linktype": "onetomany",
		"primarywid": "authordto",
		"primarymethod": "authordto",
		"secondarywid": "bookdto",
		"secondarymethod": "bookdto"
        },{
		"executethis":"addwidmaster",
		"wid":"author1",
		"metadata.method":"authordto"
      }],
      function (err, res) {
                proxyprinttodiv('Full results: ', res, 99);
                
                proxyprinttodiv('The author1 record: ', res[2], 99);
        
                debuglevel = 0;
                execute({"executethis": "getwidmaster","wid": "author1"}, function (err, res1) {
                    proxyprinttodiv("getwidmaster author1 result: ", res1, 99); 
                    callback(err, res); 
                });
      });
}


  // inherit default set at the dto level. authordto has a default wid to inherit from as well as a bookdto inherit
  // *** DOES NOT WORK -- BOOKVALUE DOES NOT COME BACK
  exports.testinheritdefault4 = testinheritdefault4 = function testinheritdefault4(params,callback){
    execute([{
		  "executethis":"addwidmaster",
		  "wid":"bookdefault",
		  "metadata.method":"bookdto",
		  "title":"Haunted Houses"
      },{
		  "executethis":"addwidmaster",
		  "wid":"authordefault",
		  "metadata.method":"authordto",
		  "name":"Alex",
		  "age":"42"
      },{
		"wid": "bookdto",
		"metadata.method": "bookdto",
		"title": "string"
      },{
		"executethis":"addwidmaster",
		"wid":"authordto",
		"metadata.method":"authordto",
		"name":"string",
		"age":"string",
		"metadata.bookdto.type":"onetomany",
		"metadata.inherit": [{"wid" : "authordefault", "command" : { "dtotype":"", "adopt":"default"}},
							{"wid":"bookdefault","command":{"dtotype":"bookdto","adopt":"default"}}]
		// 	"metadata.inherit.default":[{"widname" : "authordefault"}],
		// "bookdto.0.inherit.default":[{"widname" : "bookdefault"}]					
      },{
		"executethis": "addwidmaster",
		"wid": "rel_author_book",
		"metadata.method": "relationshipdto",
		"relationshiptype": "attributes",
		"linktype": "onetomany",
		"primarywid": "authordto",
		"primarymethod": "authordto",
		"secondarywid": "bookdto",
		"secondarymethod": "bookdto"
	},{
		"executethis":"addwidmaster",
		"wid":"author1",
		"metadata.method":"authordto"
      }],
      function (err, res) {
                proxyprinttodiv('Full results: ', res, 99);
                
                proxyprinttodiv('The author1 record: ', res[2], 99);
        
                debuglevel = 0;
                execute({"executethis": "getwidmaster","wid": "author1"}, function (err, res1) {
                    proxyprinttodiv("getwidmaster author1 result: ", res1, 99); 
                    callback(err, res); 
                });
      });
}

  // inherit default set at the dto level. authordto has a default wid to inherit from and that default wid inherits a bookdefault
  // *** DOES NOT WORK -- BOOKVALUE DOES NOT COME BACK
  exports.testinheritdefault41 = testinheritdefault41 = function testinheritdefault41(params,callback){
    execute([{
		  "executethis":"addwidmaster",
		  "wid":"bookdefault",
		  "metadata.method":"bookdto",
		  "title":"Haunted Houses"
      },{
		  "executethis":"addwidmaster",
		  "wid":"authordefault",
		  "metadata.method":"authordto",
		  "name":"Alex",
		  "age":"42",
			"metadata.inherit.0": {"wid" : "bookdefault", "command" : { "dtotype":"", "adopt":"default"}}
			//"bookdto.0.inherit.default":[{"widname" : "bookdefault"}]
      },{
		"wid": "bookdto",
		"metadata.method": "bookdto",
		"title": "string"
      },{
		"executethis":"addwidmaster",
		"wid":"authordto",
		"metadata.method":"authordto",
		"name":"string",
		"age":"string",
		"metadata.bookdto.type":"onetomany",
		"metadata.inherit.0": {"wid" : "authordefault", "command" : { "dtotype":"", "adopt":"default"}}
		//"metadata.inherit.default":[{"widname" : "authordefault"}]
      },{
		"executethis": "addwidmaster",
		"wid": "rel_author_book",
		"metadata.method": "relationshipdto",
		"relationshiptype": "attributes",
		"linktype": "onetomany",
		"primarywid": "authordto",
		"primarymethod": "authordto",
		"secondarywid": "bookdto",
		"secondarymethod": "bookdto"
	},{
		"executethis":"addwidmaster",
		"wid":"author1",
		"metadata.method":"authordto"
      }],
      function (err, res) {
                proxyprinttodiv('Full results: ', res, 99);
                
                proxyprinttodiv('The author1 record: ', res[2], 99);
        
                debuglevel = 0;
                execute({"executethis": "getwidmaster","wid": "author1"}, function (err, res1) {
                    proxyprinttodiv("getwidmaster author1 result: ", res1, 99); 
                    callback(err, res); 
                });
      });
}


  // Inherit Default set at the wid level. author1 inherits from authordefault and authordefault inherits from bookdefault
  // *** DOES NOT WORK -- BOOKVALUE DOES NOT COME BACK
  exports.testinheritdefault5 = testinheritdefault5 = function testinheritdefault5(params,callback){
    execute([{
		  "executethis":"addwidmaster",
		  "wid":"bookdefault",
		  "metadata.method":"bookdto",
		  "title":"Haunted Houses"
      },{
		  "executethis":"addwidmaster",
		  "wid":"authordefault",
		  "metadata.method":"authordto",
		  "name":"Alex",
		  "age":"42",
		  "metadata.inherit.0": {"wid" : "bookdefault", "command" : { "dtotype":"", "adopt":"default"}}
		  // "bookdto.0.inherit.default":[{"widname" : "bookdefault"}]
      },{
		"wid": "bookdto",
		"metadata.method": "bookdto",
		"title": "string"
      },{
		"executethis":"addwidmaster",
		"wid":"authordto",
		"metadata.method":"authordto",
		"name":"string",
		"age":"string"
      },{
		"executethis": "addwidmaster",
		"wid": "rel_author_book",
		"metadata.method": "relationshipdto",
		"relationshiptype": "attributes",
		"linktype": "onetomany",
		"primarywid": "authordto",
		"primarymethod": "authordto",
		"secondarywid": "bookdto",
		"secondarymethod": "bookdto"
        },{
		"executethis":"addwidmaster",
		"wid":"author1",
		"metadata.method":"authordto",
		"metadata.inherit.0": {"wid" : "authordefault", "command" : { "dtotype":"", "adopt":"default"}}
		// "metadata.inherit.default":[{"widname" : "authordefault"}]
      }],
      function (err, res) {
                proxyprinttodiv('Full results: ', res, 99);
                
                proxyprinttodiv('The author1 record: ', res[2], 99);
        
                debuglevel = 0;
                execute({"executethis": "getwidmaster","wid": "author1"}, function (err, res1) {
                    proxyprinttodiv("getwidmaster author1 result: ", res1, 99); 
                    callback(err, res); 
                });
      });
}


/*************                          ***************/
/*************   INHERIT Override TESTS ***************/
/*************       Single Level       ***************/


  // tests if inherit override works in the dto (authordto). author1 inherits authoroverride and should be returned with name=Alex & age=42.
  // NOTE: this is not working right now. Execution is doing some funky stuff, repeatedly returning results.
  exports.testinheritoverride0 = testinheritoverride0 = function testinheritoverride0(params,callback){
    execute([{
      "executethis":"addwidmaster",
      "wid":"authoroverride",
      "metadata.method":"authordto",
      "name":"Alex",
      "age":"42"
      },{
      "executethis":"addwidmaster",
      "wid":"authordto",
      "metadata.method":"authordto",
      "name":"string",
      "age":"string",
      "metadata.inherit.0": {"wid" : "authoroverride", "command" : { "dtotype":"", "adopt":"override"}}
	  // "metadata.inherit.override":[{"widname" : "authoroverride"}]
      },{
      "executethis":"addwidmaster",
      "wid":"author1",
      "metadata.method":"authordto"
      }],
      function (err, res) {
                proxyprinttodiv('Full results: ', res, 99);
                
                proxyprinttodiv('The author1 record: ', res[2], 99);
        
                debuglevel = 0;
                execute({"executethis": "getwidmaster","wid": "author1"}, function (err, res1) {
                    proxyprinttodiv("getwidmaster author1 result: ", res1, 99); 
                    callback(err, res); 
                });
      });
}

  // This tests inherit.override at the wid level. author1 inherits authoroverride and should return with name=Alex & age=42.
  // works.
  exports.testinheritoverride1 = testinheritoverride1 = function testinheritoverride1(params,callback){
    execute([{
      "executethis":"addwidmaster",
      "wid":"authoroverride",
      "metadata.method":"authordto",
      "name":"Alex",
      "age":"42"
      },{
      "executethis":"addwidmaster",
      "wid":"authordto",
      "metadata.method":"authordto",
      "name":"string",
      "age":"string"
      },{
      "executethis":"addwidmaster",
      "wid":"author1",
      "metadata.method":"authordto",
      "metadata.inherit.0": {"wid" : "authoroverride", "command" : { "dtotype":"", "adopt":"override"}}
	  // "metadata.inherit.override":[{"widname" : "authoroverride"}]
      }],
      function (err, res) {
                proxyprinttodiv('Full results: ', res, 99);
                
                proxyprinttodiv('The author1 record: ', res[2], 99);
        
                debuglevel = 0;
                execute({"executethis": "getwidmaster","wid": "author1"}, function (err, res1) {
                    proxyprinttodiv("getwidmaster author1 result: ", res1, 99); 
                    callback(err, res); 
                });
      });
}

  // Tests inherit.override at the wid level with fields already existing in the wid. The fields in author1 should be overriden by the fields in
  // authoroverride, returning the result name=Alex & age=42.
  // works.
  exports.testinheritoverride2 = testinheritoverride2 = function testinheritoverride2(params,callback){
    execute([{
      "executethis":"addwidmaster",
      "wid":"authoroverride",
      "metadata.method":"authordto",
      "name":"Alex",
      "age":"42"
      },{
      "executethis":"addwidmaster",
      "wid":"authordto",
      "metadata.method":"authordto",
      "name":"string",
      "age":"string"
      },{
      "executethis":"addwidmaster",
      "wid":"author1",
      "metadata.method":"authordto",
      "name":"Tom",
      "age":"58",
      "metadata.inherit.0": {"wid" : "authoroverride", "command" : { "dtotype":"", "adopt":"override"}}
	  // "metadata.inherit.override":[{"widname" : "authoroverride"}]
      }],
      function (err, res) {
                proxyprinttodiv('Full results: ', res, 99);
                
                proxyprinttodiv('The author1 record: ', res[2], 99);
        
                debuglevel = 0;
                execute({"executethis": "getwidmaster","wid": "author1"}, function (err, res1) {
                    proxyprinttodiv("getwidmaster author1 result: ", res1, 99); 
                    callback(err, res); 
                });
      });
}

  // This tests inherit.override at the dto level with inherit.default set as well. authordto has inherit.override set & default set, but only the
  // fields from the override should show up.
  // NOTE: This does not work, same problem as testinheritoverride0. inherit.override in a dto is causing bad results.
  exports.testinheritoverride3 = testinheritoverride3 = function testinheritoverride3(params,callback){
    execute([{
      "executethis":"addwidmaster",
      "wid":"authordefault",
      "metadata.method":"authordto",
      "name":"Tom",
      "age":"58"
      },{
      "executethis":"addwidmaster",
      "wid":"authoroverride",
      "metadata.method":"authordto",
      "name":"Alex",
      "age":"42"
      },{
      "executethis":"addwidmaster",
      "wid":"authordto",
      "metadata.method":"authordto",
      "name":"string",
      "age":"string",
      "metadata.inherit": [{"wid" : "authordefault", "command" : { "dtotype":"", "adopt":"default"}},
			{"wid" : "authoroverride", "command" : { "dtotype":"", "adopt":"override"}}]
	//    "metadata.inherit.default":[{"widname" : "authordefault"}],
      // "metadata.inherit.override":[{"widname" : "authoroverride"}]
      },{
      "executethis":"addwidmaster",
      "wid":"author1",
      "metadata.method":"authordto"
      }],
      function (err, res) {
                proxyprinttodiv('Full results: ', res, 99);
                
                proxyprinttodiv('The author1 record: ', res[2], 99);
        
                debuglevel = 0;
                execute({"executethis": "getwidmaster","wid": "author1"}, function (err, res1) {
                    proxyprinttodiv("getwidmaster author1 result: ", res1, 99); 
                    callback(err, res); 
                });
      });
}

  // This tests inherit.override at the wid level with inherit.default set as well. author1 has inherit.override set & default set, but only the
  // fields from the override should show up.
  // works.
  exports.testinheritoverride4 = testinheritoverride4 = function testinheritoverride4(params,callback){
    execute([{
      "executethis":"addwidmaster",
      "wid":"authordefault",
      "metadata.method":"authordto",
      "name":"Tom",
      "age":"58"
      },{
      "executethis":"addwidmaster",
      "wid":"authoroverride",
      "metadata.method":"authordto",
      "name":"Alex",
      "age":"42"
      },{
      "executethis":"addwidmaster",
      "wid":"authordto",
      "metadata.method":"authordto",
      "name":"string",
      "age":"string"
      },{
      "executethis":"addwidmaster",
      "wid":"author1",
      "metadata.method":"authordto",
      "metadata.inherit": [{"wid" : "authordefault", "command" : { "dtotype":"", "adopt":"default"}},
			{"wid" : "authoroverride", "command" : { "dtotype":"", "adopt":"override"}}]
	// "metadata.inherit.default.0":{"authordefault" : "authordto"},
     // "metadata.inherit.override.0":{"authoroverride" : "authordto"}
      }],
      function (err, res) {
                proxyprinttodiv('Full results: ', res, 99);
                
                proxyprinttodiv('The author1 record: ', res[2], 99);
        
                debuglevel = 0;
                execute({"executethis": "getwidmaster","wid": "author1"}, function (err, res1) {
                    proxyprinttodiv("getwidmaster author1 result: ", res1, 99); 
                    callback(err, res); 
                });
      });
}


/*************                          ***************/
/*************   INHERIT Override TESTS ***************/
/*************        Multi Level       ***************/

   // Inherit Override set at the dto level. authordto inherits from authoroverride and authoroverride inherits from bookoverride
  // *** DOES NOT WORK
  exports.multiinheritoverride0 = multiinheritoverride0 = function multiinheritoverride0(params,callback){
    execute([{
		  "executethis":"addwidmaster",
		  "wid":"bookoverride",
		  "metadata.method":"bookdto",
		  "title":"Haunted Houses"
      },{
		  "executethis":"addwidmaster",
		  "wid":"authoroverride",
		  "metadata.method":"authordto",
		  "name":"Alex",
		  "age":"42",
          //"metadata.inherit.0": [{"wid" : "bookoverride", "command" : { "dtotype":"", "adopt":"override"}}] //double [[]]
		  "metadata.inherit": [{"wid" : "bookoverride", "command" : { "dtotype":"", "adopt":"override"}}]
		  //"bookdto.0.inherit.override":[{"widname" : "bookoverride"}]
      },{
		"wid": "bookdto",
		"metadata.method": "bookdto",
		"title": "string"
      },{
		"executethis":"addwidmaster",
		"wid":"authordto",
		"metadata.method":"authordto",
		"name":"string",
		"age":"string",
        //"metadata.inherit.0": [{"wid" : "authoroverride", "command" : { "dtotype":"", "adopt":"override"}}] //double [[]]
		"metadata.inherit": [{"wid" : "authoroverride", "command" : { "dtotype":"", "adopt":"override"}}]
		//"metadata.inherit.default":[{"widname" : "authoroverride"}]
      },{
		"executethis": "addwidmaster",
		"wid": "rel_author_book",
		"metadata.method": "relationshipdto",
		"relationshiptype": "attributes",
		"linktype": "onetomany",
		"primarywid": "authordto",
		"primarymethod": "authordto",
		"secondarywid": "bookdto",
		"secondarymethod": "bookdto"
        },{
		"executethis":"addwidmaster",
		"wid":"author1",
		"metadata.method":"authordto"
      }],
      function (err, res) {
                proxyprinttodiv('Full results: ', res, 99);
                
                proxyprinttodiv('The author1 record: ', res[2], 99);
        
                debuglevel = 0;
                execute({"executethis": "getwidmaster","wid": "author1"}, function (err, res1) {
                    proxyprinttodiv("getwidmaster author1 result: ", res1, 99); 
                    callback(err, res); 
                });
      });
}
 

   // Inherit Override set at the dto level. authordto inherits from authoroverride and bookdto inherits from bookoverride
  exports.multiinheritoverride1 = multiinheritoverride1 = function multiinheritoverride1(params,callback){
    execute([{
		  "executethis":"addwidmaster",
		  "wid":"bookoverride",
		  "metadata.method":"bookdto",
		  "title":"Haunted Houses"
      },{
		  "executethis":"addwidmaster",
		  "wid":"authoroverride",
		  "metadata.method":"authordto",
		  "name":"Alex",
		  "age":"42"
      },{
		"wid": "bookdto",
		"metadata.method": "bookdto",
		"title": "string",
		  "metadata.inherit": [{"wid" : "bookoverride", "command" : { "dtotype":"", "adopt":"override"}}]
		  //"metadata.inherit.override":[{"widname" : "bookoverride"}]
      },{
		"executethis":"addwidmaster",
		"wid":"authordto",
		"metadata.method":"authordto",
		"name":"string",
		"age":"string",
		"metadata.inherit": [{"wid" : "authoroverride", "command" : { "dtotype":"", "adopt":"override"}}]
		//"metadata.inherit.default":[{"widname" : "authoroverride"}]
      },{
		"executethis": "addwidmaster",
		"wid": "rel_author_book",
		"metadata.method": "relationshipdto",
		"relationshiptype": "attributes",
		"linktype": "onetomany",
		"primarywid": "authordto",
		"primarymethod": "authordto",
		"secondarywid": "bookdto",
		"secondarymethod": "bookdto"
        },{
		"executethis":"addwidmaster",
		"wid":"author1",
		"metadata.method":"authordto"
      }],
      function (err, res) {
                proxyprinttodiv('Full results: ', res, 99);
                
                proxyprinttodiv('The author1 record: ', res[2], 99);
        
                debuglevel = 0;
                execute({"executethis": "getwidmaster","wid": "author1"}, function (err, res1) {
                    proxyprinttodiv("getwidmaster author1 result: ", res1, 99); 
                    callback(err, res); 
                });
      });
}

 
   // Inherit Override set at the wid level. author1 inherits from authoroverride and authoroverride inherits from bookoverride
  exports.multiinheritoverride2 = multiinheritoverride2 = function multiinheritoverride2(params,callback){
    execute([{
		  "executethis":"addwidmaster",
		  "wid":"bookoverride",
		  "metadata.method":"bookdto",
		  "title":"Haunted Houses"
      },{
		  "executethis":"addwidmaster",
		  "wid":"authoroverride",
		  "metadata.method":"authordto",
		  "name":"Alex",
		  "age":"42",
		  "metadata.inherit": [{"wid" : "bookoverride", "command" : { "dtotype":"", "adopt":"override"}}]
      },{
		"wid": "bookdto",
		"metadata.method": "bookdto",
		"title": "string"
      },{
		"executethis":"addwidmaster",
		"wid":"authordto",
		"metadata.method":"authordto",
		"name":"string",
		"age":"string"
      },{
		"executethis": "addwidmaster",
		"wid": "rel_author_book",
		"metadata.method": "relationshipdto",
		"relationshiptype": "attributes",
		"linktype": "onetomany",
		"primarywid": "authordto",
		"primarymethod": "authordto",
		"secondarywid": "bookdto",
		"secondarymethod": "bookdto"
        },{
		"executethis":"addwidmaster",
		"wid":"author1",
		"metadata.method":"authordto",
		"metadata.inherit": [{"wid" : "authoroverride", "command" : { "dtotype":"", "adopt":"override"}}]
      }],
      function (err, res) {
                proxyprinttodiv('Full results: ', res, 99);
                
                proxyprinttodiv('The author1 record: ', res[2], 99);
        
                debuglevel = 0;
                execute({"executethis": "getwidmaster","wid": "author1"}, function (err, res1) {
                    proxyprinttodiv("getwidmaster author1 result: ", res1, 99); 
                    callback(err, res); 
                });
      });
}

 
  // Inherit Override set at the wid level. author1 inherits from authoroverride and authoroverride inherits from bookoverride. values already present in author1 should be overriden
  exports.multiinheritoverride3 = multiinheritoverride3 = function multiinheritoverride3(params,callback){
    execute([{
		  "executethis":"addwidmaster",
		  "wid":"bookoverride",
		  "metadata.method":"bookdto",
		  "title":"Haunted Houses"
      },{
		  "executethis":"addwidmaster",
		  "wid":"authoroverride",
		  "metadata.method":"authordto",
		  "name":"Alex",
		  "age":"42",
		  "metadata.inherit": [{"wid" : "bookoverride", "command" : { "dtotype":"", "adopt":"override"}}]
		 // "bookdto.0.inherit.override":[{"widname" : "bookoverride"}]
      },{
		"wid": "bookdto",
		"metadata.method": "bookdto",
		"title": "string"
      },{
		"executethis":"addwidmaster",
		"wid":"authordto",
		"metadata.method":"authordto",
		"name":"string",
		"age":"string",
		"metadata.inherit": [{"wid" : "authoroverride", "command" : { "dtotype":"", "adopt":"override"}}]
      },{
		"executethis": "addwidmaster",
		"wid": "rel_author_book",
		"metadata.method": "relationshipdto",
		"relationshiptype": "attributes",
		"linktype": "onetomany",
		"primarywid": "authordto",
		"primarymethod": "authordto",
		"secondarywid": "bookdto",
		"secondarymethod": "bookdto"
        },{
		"executethis":"addwidmaster",
		"wid":"author1",
		"metadata.method":"authordto",
		"name":"Tom",
		"age":"50",
		"bookdto.0.title":"My Little Pony"
      }],
      function (err, res) {
                proxyprinttodiv('Full results: ', res, 99);
                
                proxyprinttodiv('The author1 record: ', res[2], 99);
        
                debuglevel = 0;
                execute({"executethis": "getwidmaster","wid": "author1"}, function (err, res1) {
                    proxyprinttodiv("getwidmaster author1 result: ", res1, 99); 
                    callback(err, res); 
                });
      });
}

 
  exports.testaddauthor1 = testaddauthor1 = function testaddauthor1() {
       debuglevel = 11;

        execute([{
                "executethis": "addwidmaster",
                "wid": "authordto",
                "name": "string",
                "metadata.method": "authordto",
                "metadata.bookdto.type": "onetomany"
            },{
        "wid": "bookdto",
                "title": "string",
                "metadata.method": "bookdto"
      },{
        "executethis": "addwidmaster",
        "wid": "rel_author_book",
        "metadata.method": "relationshipdto",
        "relationshiptype": "attributes",
        "linktype": "onetomany",
        "primarywid": "authordto",
        "primarymethod": "authordto",
        "secondarywid": "bookdto",
        "secondarymethod": "bookdto"
            },{
                "executethis": "addwidmaster",
                "wid": "marysue",
                "metadata.method": "authordto",
                "name": "Mary Sue",
                "bookdto.0.title": "Haunted Mansions"
            }],
            function (err, res) {
                proxyprinttodiv('Full results: ', res, 99);
            }
        );
    }
  
  exports.testjsononetoone0 = testjsononetoone0 = function testjsononetoone0(params, callback){
    execute([{
      "executethis":"addwidmaster",
      "wid":"authordto",
      "metadata.method":"authordto",
      "name":"string",
      "age":"string",
      "metadata.spousedto.type":"onetoone"
      },{
      "executethis":"addwidmaster",
      "wid":"spousedto",
      "metadata.method":"spousedto",
      "name":"string",
      "age":"string"
      },{
      "executethis": "addwidmaster",
      "wid": "rel_author_to_spouse",
      "metadata.method": "relationshipdto",
      "relationshiptype": "attributes",
      "linktype": "onetoone",
      "primarywid": "authordto",
      "primarymethod": "authordto",
      "secondarywid": "spousedto",
      "secondarymethod": "spousedto"
        },{
      "executethis":"addwidmaster",
      "wid":"spouse1",
      "metadata.method":"spousedto",
      "name":"Sarah Jones",
      "age":"28"
      },{
      "executethis":"addwidmaster",
      "wid":"author1",
      "metadata.method":"authordto",
      "name":"Jim Jones",
      "age":"30",
      "spousedto.0.name":"Sarah",
      "spousedto.0.age":"28",
      "spousedto.0.hair":"blonde"
      }],
      function (err, res) {
                proxyprinttodiv('Full results: ', res, 99);
                
                proxyprinttodiv('The author1 record: ', res[3], 99);
        
                debuglevel = 0;
                execute({"executethis": "getwidmaster","wid": "author1"}, function (err, res1) {
                    proxyprinttodiv("getwidmaster author1 result: ", res1, 99); 
                    callback(err, res); 
                });
      });
}   

  //   exports.ettestinheritoverride2 = ettestinheritoverride2 = function ettestinheritoverride2(params, callback) {
  //       eventappinstall();
  //       debuglevel = 0;
        
  //       execute([{
  //                   "executethis": "addwidmaster",
  //                   "wid": "bookoverride",
  //                   "metadata.method": "bookdto",
  //                   "title":"X title", 
  //                   "pages":"300"
  //               },{
  //                   "executethis": "addwidmaster",
  //                   "wid": "bookdto",
  //                   "metadata.method": "bookdto",
  //                   "title": "string",
  //                   "pages": "string"
  //               },{
  //                   "executethis": "addwidmaster",
  //                   "wid": "bookdtowid111",
  //                   "metadata.method":"bookdto",
  //                   "metadata.inherit.override.0": "bookoverride",
  //                   "title": "Book Title1",
  //                   "pages":"10"
  //               },{
  //                   "executethis": "getwidmaster",
  //                   "wid": "bookdtowid111",
  //               }
  //           ], function (err, res) {
  //               proxyprinttodiv('Function bookdtowid111 result Full res', res, 17);
                
  //               proxyprinttodiv('Function bookdtowid111 res[4] ', res[3], 99);
                
  //               var expectedResult = [{"title":"X title","wid":"bookdtowid111","metadata.method":"bookdto","pages":"300"}];
  //               proxyprinttodiv('Function bookdtowid111 expectedResult ', expectedResult, 17);
                
  //               res = logverify("bookdtowid111_result", res[3], expectedResult);
  //               debuglevel = 0;
  //               execute({"executethis": "getwidmaster","wid": "bookdtowid111"}, function (err, res1) {
  //                   proxyprinttodiv('Function bookdtowid111 result LAST ', res1, 17); 
  //                   callback(err, res); 
  //               })
  //       });
  //   }
  // // fails : bookdefault fields chapters & publishers not displaying for bookwid1
  //   exports.ettestinheritdefault2 = ettestinheritdefault2 = function ettestinheritdefault2(params, callback) {
  //       eventappinstall();
  //       debuglevel = 0;
        
  //       execute([{
  //                   "executethis": "addwidmaster",
  //                   "wid": "bookdefault",
  //                   "metadata.method": "bookdto",
  //                   "title":"X title",
  //                   "pages":"300",
  //                   "chapters":"10",
  //                   "publisher":"Blank publishing"
  //               },{
  //                   "executethis": "addwidmaster",
  //                   "wid": "bookdto",
  //                   "metadata.method": "bookdto",
  //                   "title": "string",
  //                   "pages": "string",
  //                   "chapters":"string",
  //                   "publisher":"string"
  //               },{
  //                   "executethis": "addwidmaster",
  //                   "wid": "bookwid1",
  //                   "metadata.method":"bookdto",
  //                   "metadata.inherit.default.0": "bookdefault",
  //                   "title": "Book Title1",
  //                   "pages":"10"
  //               },{
  //                   "executethis": "getwidmaster",
  //                   "wid": "bookwid1",
  //               }
  //           ], function (err, res) {
  //               proxyprinttodiv('Function bookwid1 result Full res', res, 17);
                
  //               proxyprinttodiv('Function bookwid1 res[4] ', res[3], 99);
                
  //               var expectedResult = [{"title":"Book Title1","wid":"bookwid1", "chapters":"10",
  //                   "publisher":"Blank publishing", "pages":"10", "metadata.method":"bookdto"}];
  //               proxyprinttodiv('Function bookwid1 expectedResult ', expectedResult, 17);
                
  //               res = logverify("bookwid1_result", res[3], expectedResult);
  //               debuglevel = 0;
  //               execute({"executethis": "getwidmaster","wid": "bookwid1"}, function (err, res1) {
  //                   proxyprinttodiv('Function bookwid1 result LAST ', res1, 17); 
  //                   callback(err, res); 
  //               })
  //       });
  //   }
  // // fails, same as previous test : bookdefault fields chapters & publisher not being grabbed
  //    exports.ettestinheritdefault31 = ettestinheritdefault31 = function ettestinheritdefault31(params, callback) {
  //       eventappinstall();
  //       debuglevel = 0;
        
  //       execute([{
  //                   "executethis": "addwidmaster",
  //                   "wid": "bookdefault",
  //                   "metadata.method": "bookdto",
  //                   "title":"X title",
  //                   "pages":"300",
  //                   "chapters":"10",
  //                   "publisher":"Blank publishing"
  //               },{
  //                   "executethis": "addwidmaster",
  //                   "wid": "bookdto",
  //                   "metadata.method": "bookdto",
  //                   "title": "string",
  //                   "pages": "string",
  //                   "chapters":"string",
  //                   "publisher":"string"
  //               },{
  //                   "executethis": "addwidmaster",
  //                   "wid": "bookwid1",
  //                   "metadata.method":"bookdto",
  //                   "metadata.inherit.default.0": "bookdefault",
  //                   "title": "Book Title1",
  //                   "pages":"10"
  //               },{
  //                   "executethis": "getwidmaster",
  //                   "wid": "bookwid1",
  //               }
  //           ], function (err, res) {
  //               proxyprinttodiv('Function bookwid1 result Full res', res, 17);
                
  //               proxyprinttodiv('Function bookwid1 res[4] ', res[3], 99);
                
  //               var expectedResult = [{"title":"Book Title1","wid":"bookwid1", "chapters":"10",
  //                   "publisher":"Blank publishing", "pages":"10", "metadata.method":"bookdto"}];
  //               proxyprinttodiv('Function bookwid1 expectedResult ', expectedResult, 17);
                
  //               res = logverify("bookwid1_result", res[3], expectedResult);
  //               debuglevel = 0;
  //               execute({"executethis": "getwidmaster","wid": "bookwid1"}, function (err, res1) {
  //                   proxyprinttodiv('Function bookwid1 result LAST ', res1, 17); 
  //                   callback(err, res); 
  //               })
  //       });
  //   }
  // // works
  //   exports.ettestinheritoverride31 = ettestinheritoverride31 = function ettestinheritoverride31(params, callback) {
  //       eventappinstall();
  //       debuglevel = 0;
        
  //       execute([{
  //                   "executethis": "addwidmaster",
  //                   "wid": "bookoverride",
  //                   "metadata.method": "bookdto",
  //                   "title":"X title", 
  //                   "pages":"300"
  //               },{
  //                   "executethis": "addwidmaster",
  //                   "wid": "bookdto",
  //                   "metadata.method": "bookdto",
  //                   "title": "string",
  //                   "pages": "string"
  //               },{
  //                   "executethis": "addwidmaster",
  //                   "wid": "bookdtowid111",
  //                   "metadata.method":"bookdto",
  //                   "metadata.inherit.override.0": "bookoverride",
  //                   "title": "Book Title1",
  //                   "pages":"10"
  //               },{
  //                   "executethis": "getwidmaster",
  //                   "wid": "bookdtowid111",
  //               }
  //           ], function (err, res) {
  //               proxyprinttodiv('Function bookdtowid111 result Full res', res, 17);
                
  //               proxyprinttodiv('Function bookdtowid111 res[4] ', res[4], 99);
                
  //               var expectedResult = [{"title":"X title","wid":"bookdtowid111","metadata.method":"bookdtoextra","pages":"300"}];
  //               proxyprinttodiv('Function bookdtowid111 expectedResult ', expectedResult, 17);
                
  //               res = logverify("bookdtowid111_result", res[4], expectedResult);
  //               debuglevel=0;
  //               execute({"executethis": "getwidmaster","wid": "bookdtowid111"}, function (err, res1) {
  //                   proxyprinttodiv('Function bookdtowid111 result LAST ', res1, 17); 
  //                   callback(err, res); 
  //               })
  //       });
  //   }
  // fails
    // exports.ettestinheritdefault = ettestinheritdefault = function ettestinheritdefault(params, callback) {
    //     eventappinstall();
    //     debuglevel = 0;
        
    //     execute([{
    //                 "executethis": "addwidmaster",
    //                 "wid": "bookdtoextra",
    //                 "metadata.method": "bookdtoextra",
    //                 "title": "string", 
    //                 "pages": "string"
    //             },{
    //                 "executethis": "addwidmaster",
    //                 "wid": "bookdefault",
    //                 "metadata.method": "bookdefaultdto",
    //                 "chapters": "12", 
    //                 "publisher": "Blank publisher"
    //             },{
    //                 "executethis": "addwidmaster",
    //                 "wid": "bookdefaultdto",
    //                 "metadata.method": "bookdefaultdto",
    //                 "chapters": "string", 
    //                 "publisher": "string"
    //             },{
    //                 "executethis": "addwidmaster",
    //                 "wid": "bookdefaultdto",
    //                 "metadata.method": "bookdtoextra",
    //                 "title":"X title", 
    //                 "pages":"300"
    //             },{
    //                 "executethis": "addwidmaster",
    //                 "wid": "bookdto",
    //                 "metadata.method": "bookdto",
    //                 "metadata.inherit.default.0": "bookdefaultdto",
    //                 "metadata.inherit.default.1": "bookdefaultdto2",
    //                 "title": "string",
    //                 "pages": "string"
    //             },{
    //                 "executethis": "addwidmaster",
    //                 "wid": "bookdtowid111",
    //                 "metadata.method":"bookdto",
    //                 "metadata.inherit.default.0": "bookdefault",
    //                 "title": "Book Title1"
    //                 // notice no pages -- should get it from wid inherit
    //                 // notice no chapters -- should get it from dto inherit
    //                 // notice no publisher -- should get it from dto inherit
    //             },{
    //                 "executethis": "getwidmaster",
    //                 "wid": "bookdtowid111",
    //             }
    //         ], function (err, res) {
    //             proxyprinttodiv('Function bookdtowid111 result Full res', res, 17);
                
    //             proxyprinttodiv('Function bookdtowid111 res[4] ', res[4], 99);
                
    //             var expectedResult = [{"title":"Book Title1","wid":"bookdtowid111","metadata.method":"bookdto","pages":"300",
    //                                     "chapters": "12", "publisher": "Blank publisher"}];
    //             proxyprinttodiv('Function bookdtowid111 expectedResult ', expectedResult, 17);
                
    //             res = logverify("bookdtowid111_result", res[4], expectedResult);
    //             debuglevel=0;
    //             execute({"executethis": "getwidmaster","wid": "bookdtowid111"}, function (err, res1) {
    //                 proxyprinttodiv('Function bookdtowid111 result LAST ', res1, 17); 
    //                 callback(err, res); 
    //             })
    //     });
    // }
  
    exports.add999 = add999 = function add999(params, callback) {
        var d="";
        var executeobj = //[]
            {
                "executethis":"addwidmaster",
                "metadata.method": "authordto",
                "wid": "wid1",
                "name": "somedata222" + d,
                "age": "somedata"  + d,
                
                "spousedto.datemarried": "03/10/2014",
                
                "housedto.color": "purple"  + d,    
                
                "bookdto.title": "Book 1"  + d,
                "bookdto.pages": "300"  + d,

                "bookdto.pubhousedto.coname": "Company Name"  + d,
                "bookdto.pubhousedto.establishdate": "03/10/2014",

                "bookdto.pubhousedto.addressdto.0.city": "City Name" + d,
                "bookdto.pubhousedto.addressdto.0.add1": "Address1" + d,
                "bookdto.pubhousedto.addressdto.0.add2": "Address2" + d,

                "bookdto.pubhousedto.statedto.0.statename": "State Name"+d,
                "bookdto.pubhousedto.statedto.0.zipcode": "Z 123456" + d,

                "bookdto.pubhousedto.ownerdto.0.name": "Owner Name" + d
            }

        if (params) {
             executeobj=extend(true, executeobj, params)
        }

        manytoonesetupdto(params, 0, function (cb2) {
            //debuglevel=17;
            execute(executeobj, function (err, res) {
                proxyprinttodiv("result from data add ", res, 98, true);
                    printlistmany([{"wid":"wid1", "command.dtotype":""}], function (err, res) {  
                        execute({"executethis":"getwidmaster", "wid":"wid1"}, function (err, res) {  
                        proxyprinttodiv("result from data add ", res, 98, true);
                        callback(err, res);
                        })
                    })
                });
            });
    }
  
    
    /*
        etaddautoselectwid
        let system select child wid names
        childs DO have preamble
        do NOT use command.dtotype
        get each get each child with one parent w/o dto, 
        get each child with one parent with dto, 
        get each child by childname w/o dto
        get each child by childname with dto, 
        results of this test:
  */
  
  // the output of this function appears to be correct: all wids look good
    exports.etaddautoselectwid = etaddautoselectwid = function etaddautoselectwid(params, callback) {
        var c="c";
        var d="d";
        manytoonesetupdto(params, 0, function (err, res) {

            //parent,   c,  child, d, preamble, dto, getlist
      addauthorrecord(0,      c,      0, d,   -1,     -1,     2, function (err, res){
      addauthorrecord(0,      c,      1, d,   0,      -1,     2, function (err, res){
      addauthorrecord(0,      c,      2, d,   1,      -1,     2, function (err, res){
      addauthorrecord(0,      c,      3, d,   2,      -1,     2, function (err, res){
      addauthorrecord(0,      c,      4, d,   3,      -1,     2, function (err, res){
      addauthorrecord(0,      c,      5, d,   4,      -1,     2, function (err, res){
      addauthorrecord(0,      c,      6, d,   5,      -1,     2, function (err, res){
      addauthorrecord(0,      c,      7, d,   6,      -1,     1, function (err, res){
        callback(err, res);
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
        etaddautoselectwid2
        let system select child wid names
        childs DO have preamble
        do NOT use command.dtotype
        get each get each child with one parent w/o dto, 
        get each child with one parent with dto, 
        get each child by childname w/o dto
        get each child by childname with dto, 
        results of this test:
  */
  
  // the output of this function appears to be correct: all wids look good
    exports.etaddautoselectwid2 = etaddautoselectwid2 = function etaddautoselectwid2(params, callback) {
        var c="c";
        var d="d";
        manytoonesetupdto(params, 1, function (err, res) {

            //parent,   c,  child, d, preamble, dto, getlist
      addauthorrecord(0,      c,      0, d,   -1,     -1,     2, function (err, res){
      addauthorrecord(0,      c,      1, d,   0,      -1,     2, function (err, res){
      addauthorrecord(0,      c,      2, d,   1,      -1,     2, function (err, res){
      addauthorrecord(0,      c,      3, d,   2,      -1,     2, function (err, res){
      addauthorrecord(0,      c,      4, d,   3,      -1,     2, function (err, res){
      addauthorrecord(0,      c,      5, d,   4,      -1,     2, function (err, res){
      addauthorrecord(0,      c,      6, d,   5,      -1,     2, function (err, res){
      addauthorrecord(0,      c,      7, d,   6,      -1,     1, function (err, res){
        callback(err, res);
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
        etaddmanualselectwid
        we select child wid names
        childs do  have preamble
        do not use command.dtotype
        get each get each child with one parent w/o dto, 
        get each child with one parent with dto, 
        get each child by childname w/o dto
        get each child by childname with dto,
        results of this test:
    */

  // the output of this function appears to be correct: all wids look good
    exports.etaddmanualselectwid = etaddmanualselectwid = function etaddmanualselectwid(params, callback) {
        var c="c";
        var d="d";
        manytoonesetupdto(params, 0, function (err, res) {   

                    //parent,   c,   child, d, preamble, dto, getlist
        addauthorrecord(0,      c,      8,  d,   -1,     -1,     2, function (err, res){
        addauthorrecord(0,      c,      9,  d,   0,      -1,     2, function (err, res){
        addauthorrecord(0,      c,      10, d,   1,      -1,     2, function (err, res){
        addauthorrecord(0,      c,      11, d,   2,      -1,     2, function (err, res){
        addauthorrecord(0,      c,      12, d,   3,      -1,     2, function (err, res){
        addauthorrecord(0,      c,      13, d,   4,      -1,     2, function (err, res){
        addauthorrecord(0,      c,      14, d,   5,      -1,     2, function (err, res){
        addauthorrecord(0,      c,      15, d,   6,      -1,     0, function (err, res){
                                            callback(err, res);
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
        etaddwithdtotype
        we select child wid names
        childs do NOT have preamble
        use command.dtotype
        get each get each child with one parent w/o dto, 
        get each child with one parent with dto, 
        get each child by childname w/o dto
        get each child by childname with dto, 
        results of this test:
    */

  // add with command.dtotype is not working. specifying a dtotype is not creating the right structure. All
  // fields are being added to the top level wid instead of as children.
    exports.etaddwithdtotype = etaddwithdtotype = function etaddwithdtotype(params, callback) {
        var c="c";
        var d="d";
        manytoonesetupdto(params, 0, function (err, res) {   

                    //parent,   c,   child, d, preamble, dto, getlist
        addauthorrecord(0,      c,      8,  d,   -1,       0,     2, function (err, res){
        addauthorrecord(0,      c,      9,  d,   -1,       1,     2, function (err, res){
        addauthorrecord(0,      c,      10, d,   -1,       2,     2, function (err, res){
        addauthorrecord(0,      c,      11, d,   -1,       3,     2, function (err, res){
        addauthorrecord(0,      c,      12, d,   -1,       4,     2, function (err, res){
        addauthorrecord(0,      c,      13, d,   -1,       5,     2, function (err, res){
        addauthorrecord(0,      c,      14, d,   -1,       6,     2, function (err, res){
        addauthorrecord(0,      c,      15, d,   -1,       7,     0, function (err, res){
                                            callback(err, res);
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
        etadddtoandpreamble
        we select child wid names
        childs do have preamble
        use command.dtotype
        get each get each child with one parent w/o dto, 
        get each child with one parent with dto, 
        get each child by childname w/o dto
        get each child by childname with dto, 
        results of this test:
    */

  // appears to work: output looks good.
    exports.etadddtoandpreamble = etadddtoandpreamble = function etadddtoandpreamble(params, callback) {
        var c="c";
        var d="d";
        manytoonesetupdto(params, 0, function (err, res) {   

                    //parent,   c,   child, d, preamble, dto, getlist
        addauthorrecord(0,      c,      8,  d,   -1,     0,     2, function (err, res){
        addauthorrecord(0,      c,      9,  d,   0,      1,     2, function (err, res){
        addauthorrecord(0,      c,      10, d,   1,      2,     2, function (err, res){
        addauthorrecord(0,      c,      11, d,   2,      3,     2, function (err, res){
        addauthorrecord(0,      c,      12, d,   3,      4,     2, function (err, res){
        addauthorrecord(0,      c,      13, d,   4,      5,     2, function (err, res){
        addauthorrecord(0,      c,      14, d,   5,      6,     2, function (err, res){
        addauthorrecord(0,      c,      15, d,   6,      7,     0, function (err, res){
                                            callback(err, res);
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
        etadd3big
        call 3 x etaddautoselectwid
        let system select child wid names
        childs DO have preamble
        do NOT use command.dtotype
        get each get each child with one parent w/o dto, 
        get each child with one parent with dto, 
        get each child by childname w/o dto
        get each child by childname with dto, 
        result of this test:
    */
  // appears to be working: last update takes affect
    exports.etadd3big = etadd3big = function etadd3big(params, callback) {
        var c="c";
        var d="d";
        manytoonesetupdto(params, 0, function (err, res) {

                    //parent,   c,   child, d, preamble, dto, getlist
        addauthorrecord(0,      c,      0, d,   -1,     -1,     2, function (err, res){
        addauthorrecord(0,      c,      1, d,   0,      -1,     2, function (err, res){
        addauthorrecord(0,      c,      2, d,   1,      -1,     2, function (err, res){
        addauthorrecord(0,      c,      3, d,   2,      -1,     2, function (err, res){
        addauthorrecord(0,      c,      4, d,   3,      -1,     2, function (err, res){
        addauthorrecord(0,      c,      5, d,   4,      -1,     2, function (err, res){
        addauthorrecord(0,      c,      6, d,   5,      -1,     2, function (err, res){
        addauthorrecord(0,      c,      7, d,   6,      -1,     0, function (err, res){

        //c="x";
        d="y";

                            //parent,   c,   child, d, preamble, dto, getlist
        addauthorrecord(0,      c,      0, d,   -1,     -1,     2, function (err, res){
        addauthorrecord(0,      c,      1, d,   0,      -1,     2, function (err, res){
        addauthorrecord(0,      c,      2, d,   1,      -1,     2, function (err, res){
        addauthorrecord(0,      c,      3, d,   2,      -1,     2, function (err, res){
        addauthorrecord(0,      c,      4, d,   3,      -1,     2, function (err, res){
        addauthorrecord(0,      c,      5, d,   4,      -1,     2, function (err, res){
        addauthorrecord(0,      c,      6, d,   5,      -1,     2, function (err, res){
        addauthorrecord(0,      c,      7, d,   6,      -1,     0, function (err, res){

        //c="w";
        d="z";

                            //parent,   c,   child, d, preamble, dto, getlist
        addauthorrecord(0,      c,      0, d,   -1,     -1,     2, function (err, res){
        addauthorrecord(0,      c,      1, d,   0,      -1,     2, function (err, res){
        addauthorrecord(0,      c,      2, d,   1,      -1,     2, function (err, res){
        addauthorrecord(0,      c,      3, d,   2,      -1,     2, function (err, res){
        addauthorrecord(0,      c,      4, d,   3,      -1,     2, function (err, res){
        addauthorrecord(0,      c,      5, d,   4,      -1,     2, function (err, res){
        addauthorrecord(0,      c,      6, d,   5,      -1,     2, function (err, res){
        addauthorrecord(0,      c,      7, d,   6,      -1,     0, function (err, res){
                                            callback(err, res);
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
                        }); 
                    });
                });
            });
        });
    }


    // we will create dtos with wid2 as default - the name of the top wid will be wid2default
    // then we get wid1 to see if defaults there
  exports.etcreatedefaultdto1 = etcreatedefaultdto1 = function etcreatedefaultdto1(params, callback) {
        var c="default";
        var d="d";

        var inheritparams = 
               {"authordtodefault":[{"wid2default":""}],
                "spousedto":[],
                "housedto":[],
                "bookdto":[], 
                "pubhousedto":[],
                "addressdto":[],
                "statedto":[],
                "ownerdto":[],
                "authordtooverride":[],
                "spousedtooverride":[],
                "housedtooverride":[],
                "bookdtooverride":[],
                "pubhousedtooverride":[],
                "addressdtooverride":[],
                "statedtooverride":[],
                "ownerdtooverride":[]
                }
        
        manytoonesetupdto(inheritparams, 0, function (err, res) {

                    //parent,   c,   child, d, preamble, dto, getlist
      addauthorrecord(1,      c,      8,  d,   -1,     -1,     3, function (err, res){
      //addauthorrecord(0,      c,      9,  d,   0,      -1,     0, function (err, res){
      addauthorrecord(1,      c,      10, d,   1,      -1,     3, function (err, res){
      //addauthorrecord(0,      c,      11, d,   2,      -1,     0, function (err, res){
      addauthorrecord(1,      c,      12, d,   3,      -1,     3, function (err, res){
      //addauthorrecord(0,      c,      13, d,   4,      -1,     0, function (err, res){
      addauthorrecord(1,      c,      14, d,   5,      -1,     3, function (err, res){
      //addauthorrecord(0,      c,      15, d,   6,      -1,     0, function (err, res){
      printlistmany([{"wid":"wid1"+c, "command.dtotype":""}], function (err, res){
      callback(err, res);
      });
                         
      //                                });
      //                            }); 
      //                        });
      //                    });
              }); 
            });
          });
        });
        });

    }
    
  
  
    // we will create dtos with wid2 as default - the name of the top wid will be wid2override
    // then we get wid1 to see if defaults there
    exports.etcreateinheritdefault1 = etcreateinheritdefault1 = function etcreateinheritdefault1(params, callback) {
        var c="override";
        var d="d";

        var inheritparams = 
               {"authordtodefault":[],
                "spousedto":[{"wid2override":""}],
                "housedto":[],
                "bookdto":[], 
                "pubhousedto":[],
                "addressdto":[],
                "statedto":[],
                "ownerdto":[],
                "authordtooverride":[],
                "spousedtooverride":[],
                "housedtooverride":[],
                "bookdtooverride":[],
                "pubhousedtooverride":[],
                "addressdtooverride":[],
                "statedtooverride":[],
                "ownerdtooverride":[]
                }
                        
        manytoonesetupdto(inheritparams, 0, function (err, res) {

          //parent,   c,   child, d, preamble, dto, getlist
    addauthorrecord(2,      c,      8,  d,   -1,     -1,     4, function (err, res){
    //addauthorrecord(0,      c,      9,  d,   0,      -1,     0, function (err, res){
    addauthorrecord(2,      c,      10, d,   1,      -1,     4, function (err, res){
    //addauthorrecord(0,      c,      11, d,   2,      -1,     0, function (err, res){
    addauthorrecord(2,      c,      12, d,   3,      -1,     4, function (err, res){
    //addauthorrecord(0,      c,      13, d,   4,      -1,     0, function (err, res){
    addauthorrecord(2,      c,      14, d,   5,      -1,     4, function (err, res){
    //addauthorrecord(0,      c,      15, d,   6,      -1,     0, function (err, res){
        printlistmany([{"wid":"wid1"+c, "command.dtotype":""}], function (err, res){
        callback(err, res);
        });
    //});
    }); 
    //});
    });
    //}); 
    });
    //});
    });
        });
    }

  /*
  1) etaddautoselectwid,, add works perfectly.. but with get,,, command.dtotype=authordto and command.dtotype="", get complete author data

  2) etaddmanualselectwid,, add works perfectly.. but with get,,, command.dtotype=authordto and command.dtotype="", get complete author data

  3) etaddwithdtotype,,,  not able to get full wid with  command.dtotype=authordto

  4) etadddtoandpreamble,, add works perfectly.. but with get,,, command.dtotype=authordto and command.dtotype="", get complete author data

  5) etaddwithdtotype,,  It does not add as expected.. because we are adding housedto data.. and it adds other data

  6) etadddtoandpreamble,, add works perfectly.. but with get,,, command.dtotype=authordto and command.dtotype="", get complete author data

  7) etcreatedefaultdto1,, with get,, command.dtotype="", complete author data

  8) etcreateinheritdefault1,, with get,, command.dtotype="", complete author data
  */
  
  
  
  
    // test manytomany = manytomanytest() line 97
    // test default = inheritdefault1() line 118
    // test override = inheritoverride1() line 140
    // test author-author = manytomanytest1() line 186
    // create new dtotype in manytoonesetupdto to test manytomany, json
    // more default / inherit tests
  exports.t123 = t123 = function t123(params, callback) {
    callback({},{})
  }
  
  /*
    to test createalldtos
  */
    exports.testcreatealldtos = testcreatealldtos = function testcreatealldtos(params, callback) {
        var executeobj = {
      "executethis":"addwidmaster",
      "metadata.method": "userdto",
      "wid": "wid1",
      
      "widname": "user widname",      //HERE, we need to specify value as datatype "wid"
      "fname": "user fname1",
      "lname": "user lname1",
      "phone": "user phone",
      "email": "user@test.com",
      "address": "user address",
      "address2": "user address2",
      "city": "user city",
      "state": "user state",
      "zip": "user zip 123456",
      "country": "user country",
      
      "securitydto.accesstoken": "user security accesstoken",
      "securitydto.status": "user security status",
      
      "environmentdto.ac": "user environment ac",
      "environmentdto.gps": "user environment gps",
      "environmentdto.account": "user environment account",
      "environmentdto.db": "user environment db",
      "environmentdto.collection": "user environment collection",

      "permissiondto.0.level": "user permission level",
      "permissiondto.0.metadata.db": "user permission db",
      "permissiondto.0.metadata.collection": "user permission collection",
      
      "usergroupdto.0.groupname": "user usergroup name"
    };

        createalldtos(params, function (cb2) {
      var executeList = [];
      
      var executeObjForGet = {
        "executethis":"getwidmaster",
        "wid": "userdto",
      };
      //executeList.push(executeObjForGet);
      executeList.push(executeobj);
    
      execute(executeList, function (err, res) {
        proxyprinttodiv("result from data add ", res, 99, true);
           
        var printlist=[
          //{"wid":"wid1", "command.dtotype":""},
          
          {"wid":"wid1", "command.dtotype":"userdto"},
          //{"wid":"wid1", "command.dtotype":"securitydto"},
          //{"wid":"wid1", "command.dtotype":"environmentdto"},
          //{"wid":"wid1", "command.dtotype":"permissiondto"}
        ];
        
        printlistmany(printlist, function (err, res) { 
          callback(err, res);
        })
      });
    });
    }

    exports.ettestatoa = ettestatoa = function ettestatoa(params, callback) {
        eventappinstall();
        debuglevel = 38;
        
        execute([{
                    "executethis": "addwidmaster",
                    "wid": "authordto",
                    "metadata.method": "authordto",
                    "metadata.authordto.type": "onetoone",
                    "name":"string"
                },{ //authordto - authordto
                    "executethis": "addwidmaster",
                    "wid": "rel_author_author",
                    "metadata.method": "relationshipdto",
                    "relationshiptype": "attributes",
                    "linktype": "onetoone",
                    "primarywid": "authordto",
                    "primarymethod": "authordto",
                    "secondarywid": "authordto",
                    "secondarymethod": "authordto"
                }, {
                    "executethis": "addwidmaster",
                    "wid": "wid1",
                    "metadata.method": "authordto",
                    "authordto.authordto.authordto.name":"sammysample"
                },{
                    "executethis": "getwidmaster",
                    "wid": "authordto"
                },{
                    "executethis": "getwidmaster",
                    "wid": "wid1"
                }
            ], function (err, res) {
                proxyprinttodiv('Function authordto result Full res', res, 17);
                
                proxyprinttodiv('Function authordto wid1 res[3] ', res[3], 98);
                proxyprinttodiv('Function authordto wid1 res[4] ', res[4], 98);
                
                var expectedResult = [{"wid":"authordto","metadata.method":"authordto","name":"string"}];
                proxyprinttodiv('Function authordto expectedResult ', expectedResult, 17);
                
                res = logverify("authordto_result", res[4], expectedResult);
                debuglevel=0;
                // execute({"executethis": "getwidmaster","wid": "authordto"}, function (err, res1) {
                //     proxyprinttodiv('Function authordto result LAST ', res1, 17); 
                //     callback(err, res); 
                // })
        });
    }
/*
etcreatedefaultdto1 in et-test: I see it creating an author record under wid2default but I don't see any other wid created to inherit from this wid. have you tested this one? The only output at the end is a bunch of empty results:

Function printlistmany input executeobj for getwidmaster
{
    "executethis": "getwidmaster",
    "wid": "wid2default",
    "command.dtotype": ""
}
Function printlistmany output for getwidmaster wid2default with command.dtotype=
{
    "wid": "wid2default",
    "command.dtotype": ""
}
Function printlistmany input executeobj for getwidmaster
{
    "executethis": "getwidmaster",
    "wid": "wid1default",
    "command.dtotype": ""
}
Function printlistmany output for getwidmaster wid1default with command.dtotype=
{
    "wid": "wid1default",
    "command.dtotype": ""
}
The addbig test (manytoone = last record updates in a one to one) worked
*/



/***********************************************************Bills Tests***************************************/

 // exports.merchantstest = merchantstest = function merchantstest (params, callback) {
 //        execute([{  // build the dtos and relatiopnsips
 //                    "executethis": "addwidmaster",
 //                    "wid": "merchantsdto",
 //                    "metadata.method": "merchantsdto",
 //                    "title": "string",
 //                    "metadata.merchantdto.type": "onetomany",
 //                    "merchantdto.wid": "merchantdto",
 //                    "merchantdto.metadata.method": "merchantdto",
 //                    "merchantdto.name": "string",
 //                    "merchantdto.metadata.loyaltydto.type": "onetomany",
 //                    "merchantdto.loyaltydto.metadata.method": "loyaltydto",
 //                    "merchantdto.loyaltydto.wid": "loyaltydto",
 //                    "merchantdto.loyaltydto.name":"string"
 //                }
 //            ], function (err, res) { 
 //                callback(err, res)
 //            });
 //    }

exports.addmerchantdtotest = addmerchantdtotest = function addmerchantdtotest (params, callback) {
       execute([{  // build the dtos and relatiopnsips
                    "executethis": "addwidmaster",
                    "wid": "merchantdto",
                    "metadata.method": "merchantdto",
                    "title": "string",
                    "contactname": "string",
                    "contactemail": "string",
                    "contactphone": "string",
                    "company": "string",
                    "website": "string",
                    "companyphone": "string",
                    "address": "string",
                    "address2": "string",
                    "city": "string",
                    "state": "string",
                    "zip": "string",
                    "metadata.loyaltydto.type": "onetomany",
                   "configuration": {
                       "midexecute": [{
                           "dothis": "server",
                           "tryorder": "0",
                           "executeorder": "0",
                           "params": {}
                           }]
                       }
                }],
        function (err, resultArray) {
            callback(err, resultArray) 
            });
    }
                
 exports.addloyaltydtotest = addloyaltydtotest = function addloyaltydtotest (params, callback) {
       execute([{   
                    "executethis": "addwidmaster",
                    "metadata.method": "loyaltydto",
                    "wid": "loyaltydto",
                    "widname": "myloyalty",
                    "punches": "integer",
                    "points": "integer",
                    "issue": "integer",
                    "redeem": "integer",
                    "title": "string",
                    "logo": "string",
                    "description": "string",
                    "expiration": "date",
                   "configuration": {
                       "midexecute": [{
                           "dothis": "server",
                           "tryorder": "0",
                           "executeorder": "0",
                           "params": {}
                           }]
                       }
                }],
        function (err, resultArray) {
            callback(err, resultArray) 
            });              
}
 exports.addmerchantloyaltyreltest = addmerchantloyaltyreltest = function addmerchantloyaltyreltest (params, callback) {
       execute([{            
                    "executethis": "addwidmaster",
                    "wid": "rel_merchant_loyalty",
                    "metadata.method": "relationshipdto",
                    "relationshiptype": "attributes",
                    "linktype": "onetomany",
                    "primarywid": "merchantdto",
                    "primarymethod": "merchantdto",
                    "secondarywid": "loyaltydto",
                    "secondarymethod": "loyaltydto",
                   "configuration": {
                       "midexecute": [{
                           "dothis": "server",
                           "tryorder": "0",
                           "executeorder": "0",
                           "params": {}
                           }]
                       }
                }],
        function (err, resultArray) {
            callback(err, resultArray) 
            }); 
}
exports.step1Luke = step1Luke = function step1Luke (params, callback) {
        
        execute([
            { // add the merchants (notice its the parent wid)
                    "executethis": "addwidmaster",
                    "wid": "merchgroup1",
                    "metadata.method": "merchantsdto",
                    "name": "luke's company"

                }
            ], function (err, resultArray) { 
                callback(err, resultArray)
             });
    }

     function step1Joe(params, callback) {
        
        execute([
            { // add the merchants (notice its the parent wid)
                    "executethis": "addwidmaster",
                    "wid": "merchgroup1",
                    "metadata.method": "merchantsdto",
                    "merchantdto.name": "joe's company"
                }
            ], function (err, resultArray) { 
                callback(err, resultArray)
             });
    }

     function step1Bill (params, callback) {
        
        execute([
            {
                    "executethis": "addwidmaster",
                    "wid": "merchgroup1",
                    "metadata.method": "merchantsdto",
                    "merchantdto.name": "bill's company"
                }
            ], function (err, resultArray) { 
                callback(err, resultArray)
             });
    }

     function step2BillLoyalty (params, callback) {
        
        execute([
            {
                    "executethis": "addwidmaster",
                    "wid": "loyaltygroup1",
                    "metadata.method": "merchantdto",
                    "loyaltydto.name": "bill's loyalty wid"
                }
            ], function (err, resultArray) { 
                callback(err, resultArray)
             });
    }

     function step2JoeLoyalty (params, callback) {
        
        execute([
            {
                    "executethis": "addwidmaster",
                    "wid": "loyaltygroup1",
                    "metadata.method": "merchantdto",
                    "loyaltydto.name": "Joe's loyalty wid"
                }
            ], function (err, resultArray) { 
                callback(err, resultArray)
             });
    }

         function inputLoyalty (params, callback) {
            var lname = document.getElementById('loyaltyName').value;
        execute([
            {
                    "executethis": "addwidmaster",
                    "wid": "loyaltygroup1",
                    "metadata.method": "merchantdto",
                    "loyaltydto.name": lname
                }
            ], function (err, resultArray) { 
                callback(err, resultArray)
             });
    }

     function step3datanodto (params, callback) {
        
        execute([
            {
                    "executethis": "addwidmaster",
                    "wid": "nodtowid",
                    "name": "bill's no data datawid"
                },
                {
                    "executethis":"getwidmaster",
                    "wid":"nodtowid"
                }
            ], function (err, resultArray) { 
                callback(err, resultArray)
             });
    }

    exports.wraptest = wraptest = function wraptest(params, callback) {
        proxyprinttodiv('Function wraptest ------', params, 98);

        execute({"executethis":"ettestag1","command":{"result":"x"}},function(err,res){
            proxyprinttodiv('Function wraptest result LAST ', res, 98); 
            callback(err,res);  
        });
        
    }

    /*
etcreatedefaultdto1 in et-test: I see it creating an author record under wid2default but I don't see any other wid created to inherit from this wid. have you tested this one? The only output at the end is a bunch of empty results:

Function printlistmany input executeobj for getwidmaster
{
    "executethis": "getwidmaster",
    "wid": "wid2default",
    "command.dtotype": ""
}
Function printlistmany output for getwidmaster wid2default with command.dtotype=
{
    "wid": "wid2default",
    "command.dtotype": ""
}
Function printlistmany input executeobj for getwidmaster
{
    "executethis": "getwidmaster",
    "wid": "wid1default",
    "command.dtotype": ""
}
Function printlistmany output for getwidmaster wid1default with command.dtotype=
{
    "wid": "wid1default",
    "command.dtotype": ""
}
The addbig test (manytoone = last record updates in a one to one) worked
*/

/*
function recurseobjcontainer(obj, dtotable, callback) {

            function recursestring(dtoobject) {
                for (var eachparam in dtoobject) {
                    if (isArray(dtoobject[eachparam])) {
                        var tempArray=[];
                        for (var eachitem in dtoobject[eachparam]) {
                            tempArray.push(recursestring(dtoobject[eachparam][eachitem]))
                            }
                        dtoobject[eachparam]=tempArray;
                        } 
                    else {
                        if (isObject(dtoobject[eachparam])) {
                            dtoobject[eachparam]=recursestring(dtoobject[eachparam])
                            }
                        else {
                            dtoobject[eachparam]="string"
                            }
                        }
                }
                return dtoobject
            }
    function createdtotable(mm, dtoobject) {                
        proxyprinttodiv("getdtoobject createdtotable -- dtoobject", dtoobject, 38);
        proxyprinttodiv("getdtoobject createdtotable -- mm", mm, 38);

        // if we are missing dto object, command, and dtotype create them
        if(!dtoobject) {
            dtoobject = {};
        }

        //if (dtoobject.command.dtolist === undefined) {
        //proxyprinttodiv("getdtoobject createdtotable -- dtoobject.command.dtolist ", dtoobject.command.dtolist, 38);
        
        if ((dtoobject.command) && (dtoobject.command.dtolist) && (Object.keys(dtoobject.command.dtolist).length > 0)) {
            proxyprinttodiv("getdtoobject dtoobject.command.dtolist -- ", dtoobject.command.dtolist,38);
            for (var eachparam in dtoobject.command.dtolist) {
                proxyprinttodiv("getdtoobject createdtotable eachparam -- ", eachparam,38);
                if (isObject(dtoobject[eachparam])) {
                    createdtotable(eachparam, dtoobject[eachparam]);             
                    dtotable[eachparam] = dtoobject[eachparam]
                    proxyprinttodiv("getdtoobject createdtotable dtoobject[eachparam] -- ", dtoobject[eachparam],38);
                    proxyprinttodiv("getdtoobject createdtotable dtotable -- ", dtotable,38);
                }
            }
        }

        //dtoobject=recursestring(dtoobject);

        if (!dtotable[mm] && Object.keys(dtoobject).length > 0) {
            dtotable[mm] = dtoobject;
        }
        proxyprinttodiv("getdtoobject createdtotable -- dtotable ", dtotable, 38);
    }

        
    function recurseobj(params) {   
        proxyprinttodiv("getdtoobject recurseobj -- params", params, 98);
        var dtolist = {};
        var dtoobj = {};
        var metadata = {};
        var tempobj = {};
        var inheritlist=[];
        var inobj = JSON.parse(JSON.stringify(params));

        if (inobj instanceof Array) {         //if we get an array in (usally happens on the recurse)
            proxyprinttodiv("inobj instanceof array", inobj, 98);
            var mergedObj = {};
            var tempArray = [];
            for (var i in inobj) {
                // if our array is just a list of strings
                if (typeof inobj[i] === 'string') {
                    tempArray.push("string");
                } else {
                    extend(true, mergedObj, recurseobj(inobj[i]));
                }
            }
            // there has to be something in the merge object to push it onto the return
            if (Object.keys(mergedObj).length > 0) {
                tempArray.push(mergedObj);
            }

            proxyprinttodiv("tempArray", tempArray, 98);
            return tempArray;
        } else {
            // the section below improves inobj, 
            // -it gets command from dtotable if avail
            // -it creates a dtolist based on type 
            // - it changes structure of inobj based on type

            if (inobj['metadata']) {
                dtolist={};
                metadata = inobj['metadata'];
                proxyprinttodiv("In getdtoobject recurseobj metadata", metadata, 98);
                for (var eachitem in metadata) {
                    if (eachitem==='type' || eachitem==='method') {
                        proxyprinttodiv("In getdtoobject recurseobj metadata -- eachitem", eachitem, 98);
                        tempobj = {};
                        if (eachitem==='type') {
                            tempobj[eachitem] = metadata[eachitem]['type'];
                            }
                        if (eachitem==='method') {
                            if (dtotable[metadata.method]) {tempobj = dtotable[metadata.method].command.dtolist}
                         }
                        if (tempobj) {extend(true, dtolist, tempobj)};
                        // if (eachitem==='method' && dtotable[metadata.method] && 
                        //     dtotable[metadata.method].command && dtotable[metadata.method].command.inherit) {
                        //     proxyprinttodiv("getdtoobject dtotable[metadata.method].command.inherit ", dtotable[metadata.method].command.inherit, 98);
                        //         tempobj = dtotable[metadata.method].command.inherit;
                        //         inheritlist.push(tempobj);
                        //     }
                        proxyprinttodiv("getdtoobject dtolist", dtolist, 98);
                        proxyprinttodiv("In getdtoobject <<< DTOLIST >>>", dtolist, 98);
                        // eachitem would be a child
                        if ((metadata[eachitem]['type'] === "onetomany" ||
                                metadata[eachitem]['type'] === "manytomany" || // ** readded
                                metadata[eachitem]['type'] === "jsononetomany") &&
                            (inobj[eachitem] !== undefined) && (!isArray(inobj[eachitem]))) {
                            relationshipArray = [];
                            relationshipArray.push(inobj[eachitem]);
                            delete inobj[eachitem];
                            inobj[eachitem] = relationshipArray;
                            }                    
                    } // type
                } // for metadata
            } // if inobj['metadata'];

            var dtolistdefault = {'systemdto' : 'onetoone'}
            extend(true, dtolist, dtolistdefault)

                        if(!dtoobj.command){
                            dtoobj.command = {};
                        }
            debuglevel = 98;
            // section below goes through each property and recurse
            proxyprinttodiv("getdtoobject createdtotable -- dtotable ", dtotable, 98, true);
            //proxyprinttodiv("getdtoobject inheritlist", inheritlist, 98);
            proxyprinttodiv("getdtoobject dtolist", dtolist, 98);
            proxyprinttodiv("getdtoobject recurseobj -- inobj II", inobj, 98);
             for (var eachparm in inobj) {
                proxyprinttodiv("getdtoobject recurseobj -- eachparm", eachparm, 98);
                proxyprinttodiv("getdtoobject --is-- switch inobj[eachparm]", inobj[eachparm], 98);

                if (isObject(inobj[eachparm]) || isArray(inobj[eachparm])) {
                    dtoobj[eachparm] = recurseobj(inobj[eachparm]);
                    proxyprinttodiv("getdtoobject --is-- switch inobj[eachparm]", inobj[eachparm], 98);
                    proxyprinttodiv("getdtoobject is obj dtoobj", dtoobj, 98);
                    if (dtotable[eachparm]) { // if table entry exists, then merge to what you just got
                        proxyprinttodiv("getdtoobject is obj dtotable[eachparm]", dtotable[eachparm], 98);

                        if (isArray(dtotable[eachparm])) { // get a object copy of dtotable[eachparam] to tempobj
                            tempobj=dtotable[eachparm][0]
                            }
                        else {
                            tempobj=dtotable[eachparm]
                            }
  proxyprinttodiv("getdtoobject is obj tempobj", tempobj, 98);
                        if (isArray(dtoobj[eachparm])) { // merge it with object dtoobj[eachparm]
                            tempobj = extend(true, tempobj, dtoobj[eachparm][0]);
                            }
                        else {
                            tempobj = extend(true, tempobj, dtoobj[eachparm]);
                            }
 proxyprinttodiv("getdtoobject is obj tempobj II", tempobj, 98);
                        if (isArray(dtotable[eachparm])) { // now convert it back to right form
                            dtoobj[eachparm]=[]
                            dtoobj[eachparm].push(tempobj)
                            }
                        else {
                            dtoobj[eachparm]=tempobj
                            }
                        //dtoobj[eachparm]=recursestring(dtoobj[eachparm])
                        proxyprinttodiv("getdtoobject is obj dtoobj.command.dtolist", dtoobj.command.dtolist, 98);
                    }
                } else { // if not object then 
                    dtoobj[eachparm] = "string";
                    //dtoobj[eachparm]=recursestring(dtoobj[eachparm])
                }
                dtoobj[eachparm]=recursestring(dtoobj[eachparm])
                proxyprinttodiv("getdtoobject is obj dtoobj end--each", dtoobj[eachparm], 98);
            } // for eachparm

            proxyprinttodiv("getdtoobject is obj inobj", inobj, 99);
            proxyprinttodiv("getdtoobject is obj dtoobj end", dtoobj, 99);

            if (!dtoobj.command) {dtoobj.command = {}}
            if (!dtoobj.command.dtolist) {dtoobj.command.dtolist = {}}
            if (dtolist) {dtoobj.command.dtolist = extend(true, dtoobj.command.dtolist, dtolist)}

            //if (!dtoobj.command.inherit) {dtoobj.command.inherit = []}
            // if (inheritlist) {
            //     for (var eachinherit in inheritlist) {
            //         dtoobj.command.inherit.push(inheritlist[eachinherit])
            //     }
            // }

            proxyprinttodiv("In GetDTOObject before return -- we created dto -- :", dtoobj, 98);
                    
            return dtoobj;
        } // else
    } // end fn recurse
    
    callback({}, recurseobj(obj))

}


        
//{"title":"string","wid":"string","metadata":{"method":"string","sounddto":{"type":"onetomany"}},
//"command":{"inherit":[{"wid":"systemactions","command":{"dtotype":"","adopt":"default"}},
//{"wid":"systemactions","command":{"dtotype":"","adopt":"default"}}],
//"deepdtolist":{"systemdto":"onetoone","sounddto":"onetomany"},
//"dtolist":{"sounddto":"onetomany","systemdto":"onetoone"}},
//"sounddto":[{"note":"string","wid":"string","metadata":{"method":"string"},
//"command":{"inherit":[{"wid":"systemactions","command":{"dtotype":"","adopt":"default"}}],
//"deepdtolist":{"systemdto":"onetoone"},"dtolist":{"systemdto":"onetoone"}}}]}

    exports.createdtotabletest =  createdtotabletest = function createdtotabletest(params, callback) {  
    function createdtotable(mm, dtoobject) {                
        proxyprinttodiv("getdtoobject createdtotable -- dtoobject", dtoobject, 38);
        proxyprinttodiv("getdtoobject createdtotable -- mm", mm, 38);

        // if we are missing dto object, command, and dtotype create them
        if(!dtoobject) {
            dtoobject = {};
        }

        //if (dtoobject.command.dtolist === undefined) {
        //proxyprinttodiv("getdtoobject createdtotable -- dtoobject.command.dtolist ", dtoobject.command.dtolist, 38);
        
        if ((dtoobject.command) && (dtoobject.command.dtolist) && (Object.keys(dtoobject.command.dtolist).length > 0)) {
            proxyprinttodiv("getdtoobject dtoobject.command.dtolist -- ", dtoobject.command.dtolist,38);
            for (var eachparam in dtoobject.command.dtolist) {
                proxyprinttodiv("getdtoobject createdtotable eachparam -- ", eachparam,38);
                if (isObject(dtoobject[eachparam])) {
                    createdtotable(eachparam, dtoobject[eachparam]);             
                    dtotable[eachparam] = dtoobject[eachparam]
                    proxyprinttodiv("getdtoobject createdtotable dtoobject[eachparam] -- ", dtoobject[eachparam],38);
                    proxyprinttodiv("getdtoobject createdtotable dtotable -- ", dtotable,38);
                }
            }
        }

        //dtoobject=recursestring(dtoobject);

        if (!dtotable[mm] && Object.keys(dtoobject).length > 0) {
            dtotable[mm] = dtoobject;
        }
        proxyprinttodiv("getdtoobject createdtotable -- dtotable ", dtotable, 38);
    }

        debuglevel = 38;
        var mm = "sonddto";
        var dtoobject = {"title":"string","wid":"string","metadata":{"method":"string","sounddto":{"type":"onetomany"}},"command":{"inherit":[{"wid":"systemactions","command":{"dtotype":"","adopt":"default"}},{"wid":"systemactions","command":{"dtotype":"","adopt":"default"}}],"deepdtolist":{"systemdto":"onetoone","sounddto":"onetomany"},"dtolist":{"sounddto":"onetomany","systemdto":"onetoone"}},"sounddto":[{"note":"string","wid":"string","metadata":{"method":"string"},"command":{"inherit":[{"wid":"systemactions","command":{"dtotype":"","adopt":"default"}}],"deepdtolist":{"systemdto":"onetoone"},"dtolist":{"systemdto":"onetoone"}}}]};
        var dtotable = {};
        
        createdtotable(mm, dtoobject);  
        proxyprinttodiv("createdtotabletest result -- dtotable ", dtotable, 38, 99);
        callback(null, dtotable)
    }
	
	
	exports.createdtotabletest2 =  createdtotabletest2 = function createdtotabletest2(params, callback) {  
        function createdtotable(mm, dtoobject) {                
			proxyprinttodiv("getdtoobject createdtotable -- dtoobject", dtoobject, 38);
			proxyprinttodiv("getdtoobject createdtotable -- mm", mm, 38);

			// if we are missing dto object, command, and dtotype create them
			if(!dtoobject) {
				dtoobject = {};
			}

			//if (dtoobject.command.dtolist === undefined) {
			//proxyprinttodiv("getdtoobject createdtotable -- dtoobject.command.dtolist ", dtoobject.command.dtolist, 38);
			
			if ((dtoobject.command) && (dtoobject.command.dtolist) && (Object.keys(dtoobject.command.dtolist).length > 0)) {
				proxyprinttodiv("getdtoobject dtoobject.command.dtolist -- ", dtoobject.command.dtolist,38);
				for (var eachparam in dtoobject.command.dtolist) {
					proxyprinttodiv("getdtoobject createdtotable eachparam -- ", eachparam,38);
					if (isObject(dtoobject[eachparam])) {
						createdtotable(eachparam, dtoobject[eachparam]);             
						dtotable[eachparam] = dtoobject[eachparam]
						proxyprinttodiv("getdtoobject createdtotable dtoobject[eachparam] -- ", dtoobject[eachparam],38);
						proxyprinttodiv("getdtoobject createdtotable dtotable -- ", dtotable,38);
					}
				}
			}

			//dtoobject=recursestring(dtoobject);

			if (!dtotable[mm] && Object.keys(dtoobject).length > 0) {
				dtotable[mm] = dtoobject;
			}
			proxyprinttodiv("getdtoobject createdtotable -- dtotable ", dtotable, 38);
		}
		
		
		
		debuglevel = 38;
        var mm = "sonddto";
        var dtoobject = {"title":"string","sounddto":{"wid":"sounddto","metadata":{"method":"sounddto"},"note":"string"},"wid":"string","metadata":{"method":"string","sounddto":{"type":"onetomany"}},"command":{"inherit":[{"wid":"systemactions","command":{"dtotype":"","adopt":"default"}}],"deepdtolist":{"sounddto":"onetomany","systemdto":"onetoone"},"dtolist":{"sounddto":"onetomany","systemdto":"onetoone"}}};
        var dtotable = {};
        
        createdtotable(mm, dtoobject);  
        proxyprinttodiv("createdtotabletest result -- dtotable ", dtotable, 38, 99);
        callback(null, dtotable)
    }
	

    exports.testcad = testcad = function (params, callback){

    }

    exports.rrr10 =  rrr10 = function rrr10(params, callback) {   
        var obj=
        {"wid":"song1","metadata":{"method":"sonddto"},"title":"Highway to Hell","sounddto":{"wid":"ag3cflat","note":"C flat"}}

        var dtotable = 
                {
            "songdto":{"title":"string","wid":"string","metadata":{"method":"string","sounddto":{"type":"onetomany"}},

                "command":{"inherit":[{"wid":"usergroupoverride","command":{"dtotype":"", "adopt":"override"}},
                                {"wid":"permissionoverride","command":{"dtotype":"", "adopt":"override"}},
                                {"wid":"securityoverride","command":{"dtotype":"", "adopt":"override"}},
                                {"wid":"environmentoverride","command":{"dtotype":"", "adopt":"override"}}],
                      "deepdtolist":{"systemdto":"onetoone","sounddto":"onetomany"},
                      "dtolist":{"sounddto":"onetomany","systemdto":"onetoone"}},

                "sounddto":[{"note":"string","wid":"string","metadata":{"method":"string"},
                      "command":{                "inherit":[{"wid":"usergroupoverride","command":{"dtotype":"", "adopt":"override"}},
                                {"wid":"permissionoverride","command":{"dtotype":"", "adopt":"override"}},
                                {"wid":"securityoverride","command":{"dtotype":"", "adopt":"override"}},
                                {"wid":"environmentoverride","command":{"dtotype":"", "adopt":"override"}}],
                      "deepdtolist":{"systemdto":"onetoone"},"dtolist":{"systemdto":"onetoone"}}}]},

            "sounddto":[{"note":"string","wid":"string","metadata":{"method":"string"},
                  "command":{                "inherit":[{"wid":"usergroupoverride","command":{"dtotype":"", "adopt":"override"}},
                                {"wid":"permissionoverride","command":{"dtotype":"", "adopt":"override"}},
                                {"wid":"securityoverride","command":{"dtotype":"", "adopt":"override"}},
                                {"wid":"environmentoverride","command":{"dtotype":"", "adopt":"override"}}],
                  "deepdtolist":{"systemdto":"onetoone"},"dtolist":{"systemdto":"onetoone"}}}]
        }

    //     {"sonddto":{"title":"string","wid":"string","metadata":{"method":"string",
    // "sounddto":{"type":"onetomany"}},"command":{"inherit":[{"wid":"systemactions","command":{"dtotype":"","adopt":"default"}},{"wid":"systemactions","command":{"dtotype":"","adopt":"default"}}],
    //             "deepdtolist":{"systemdto":"onetoone","sounddto":"onetomany"},
    //             "dtolist":{"sounddto":"onetomany","systemdto":"onetoone"}},
    // "sounddto":[{"note":"string","wid":"string",
    //     "metadata":{"method":"string"},
    //         "command":{"inherit":[{"wid":"systemactions","command":{"dtotype":"","adopt":"default"}}],
    //         "deepdtolist":{"systemdto":"onetoone"},
    //         "dtolist":{"systemdto":"onetoone"}}}]}}

        recurseobjcontainer(obj, dtotable, function (err, res) {
            callback(err, res)

            });
    }
*/    //{"command":{},"wid":"string","metadata":{"command":{"dtolist":{"systemdto":"string"}},"method":"string"},"title":"string","sounddto":{"command":{"dtolist":{"systemdto":"string"}},"wid":"string","note":"string"}}


    exports.rrr =  rrr = function rrr(params, callback) { 
        var obj=
        {"wid":"song1","metadata":{"method":"songdto"},"title":"Highway to Hell","sounddto":{"note":"A flat"}}

        var dtotable = 
        {
            "songdto":{"title":"string","wid":"string","metadata":{"method":"string","sounddto":{"type":"onetomany"}},

                "command":{"inherit":[{"wid":"usergroupoverride","command":{"dtotype":"", "adopt":"override"}},
                                {"wid":"permissionoverride","command":{"dtotype":"", "adopt":"override"}},
                                {"wid":"securityoverride","command":{"dtotype":"", "adopt":"override"}},
                                {"wid":"environmentoverride","command":{"dtotype":"", "adopt":"override"}}],
                      "deepdtolist":{"systemdto":"onetoone","sounddto":"onetomany"},
                      "dtolist":{"sounddto":"onetomany","systemdto":"onetoone"}},

                "sounddto":[{"note":"string","wid":"string","metadata":{"method":"string"},
                      "command":{                "inherit":[{"wid":"usergroupoverride","command":{"dtotype":"", "adopt":"override"}},
                                {"wid":"permissionoverride","command":{"dtotype":"", "adopt":"override"}},
                                {"wid":"securityoverride","command":{"dtotype":"", "adopt":"override"}},
                                {"wid":"environmentoverride","command":{"dtotype":"", "adopt":"override"}}],
                      "deepdtolist":{"systemdto":"onetoone"},"dtolist":{"systemdto":"onetoone"}}}]},

            "sounddto":[{"note":"string","wid":"string","metadata":{"method":"string"},
                  "command":{                "inherit":[{"wid":"usergroupoverride","command":{"dtotype":"", "adopt":"override"}},
                                {"wid":"permissionoverride","command":{"dtotype":"", "adopt":"override"}},
                                {"wid":"securityoverride","command":{"dtotype":"", "adopt":"override"}},
                                {"wid":"environmentoverride","command":{"dtotype":"", "adopt":"override"}}],
                  "deepdtolist":{"systemdto":"onetoone"},"dtolist":{"systemdto":"onetoone"}}}]
        }

        recurseobjcontainer(obj, dtotable, function (err, res) {
            callback(err, res)

            });
 
    }
    
    /*
        empty dtotable from rrr
    */
    exports.rrr2 =  rrr2 = function rrr2(params, callback) {   
        var obj=
        {"wid":"song1","metadata":{"method":"songdto"},"title":"Highway to Hell","sounddto":{"note":"A flat"}}

        var dtotable = 
        {}

        recurseobjcontainer(obj, dtotable, function (err, res) {
            callback(err, res)

            });
    }
    
    
    /*
        input object change
    */
    exports.rrr3 =  rrr3 = function rrr3(params, callback) {   
        var obj=
        {"wid":"song1","metadata":{"method":"songdto"},"title":"Highway to Hell","sounddto":[{"note":"A flat"},{"note":"B sharp"},{"note":"C flat"}]};

        var dtotable = 
        {
        "songdto":{"title":"string","wid":"string","metadata":{"method":"string","sounddto":{"type":"onetomany"}},

            "command":{

                "inherit":[{"wid":"usergroupoverride","command":{"dtotype":"", "adopt":"override"}},
                            {"wid":"permissionoverride","command":{"dtotype":"", "adopt":"override"}},
                            {"wid":"securityoverride","command":{"dtotype":"", "adopt":"override"}},
                            {"wid":"environmentoverride","command":{"dtotype":"", "adopt":"override"}}],



                  "deepdtolist":{"systemdto":"onetoone","sounddto":"onetomany"},
                  "dtolist":{"sounddto":"onetomany","systemdto":"onetoone"}},

            "sounddto":[{"note":"string","wid":"string","metadata":{"method":"string"},
                  "command":{                "inherit":[{"wid":"usergroupoverride","command":{"dtotype":"", "adopt":"override"}},
                            {"wid":"permissionoverride","command":{"dtotype":"", "adopt":"override"}},
                            {"wid":"securityoverride","command":{"dtotype":"", "adopt":"override"}},
                            {"wid":"environmentoverride","command":{"dtotype":"", "adopt":"override"}}],
                  "deepdtolist":{"systemdto":"onetoone"},"dtolist":{"systemdto":"onetoone"}}}]},

        "sounddto":[{"note":"string","wid":"string","metadata":{"method":"string"},
              "command":{                "inherit":[{"wid":"usergroupoverride","command":{"dtotype":"", "adopt":"override"}},
                            {"wid":"permissionoverride","command":{"dtotype":"", "adopt":"override"}},
                            {"wid":"securityoverride","command":{"dtotype":"", "adopt":"override"}},
                            {"wid":"environmentoverride","command":{"dtotype":"", "adopt":"override"}}],
              "deepdtolist":{"systemdto":"onetoone"},"dtolist":{"systemdto":"onetoone"}}}]
              }

        recurseobjcontainer(obj, dtotable, function (err, res) {
            callback(err, res)

            });
    }
    

    /*
        empty dtotable from rrr3
    */
    exports.rrr4 = rrr4 = function rrr4(params, callback) {   
        var obj=
        {"wid":"song1","metadata":{"method":"songdto"},"title":"Highway to Hell","sounddto":[{"note":"A flat"},{"note":"B sharp"},{"note":"C flat"}]};

        var dtotable = 
        {}

        recurseobjcontainer(obj, dtotable, function (err, res) {
            callback(err, res)

            });
    }
    
    /*
        
    */
    exports.rrr5 = rrr5 = function rrr5(params, callback) {   
        function recurseobjcontainer(obj, dtotable, callback) {

			function recursestring(dtoobject) {
				for (var eachparam in dtoobject) {
					if (eachparam!=="command") { 
						if (isArray(dtoobject[eachparam])) {
							var tempArray=[];
							for (var eachitem in dtoobject[eachparam]) {
								tempArray.push(recursestring(dtoobject[eachparam][eachitem]))
								}
							dtoobject[eachparam]=tempArray;
							} 
						else {
							if (isObject(dtoobject[eachparam])) {
								dtoobject[eachparam]=recursestring(dtoobject[eachparam])
								}
							else {
								dtoobject[eachparam]="string"
								}
							}
					}
				}
				return dtoobject
			}
			function recurseobj(params) {   
				proxyprinttodiv("getdtoobject recurseobj -- params", params, 98);
				var dtolist = {};
				var dtoobj = {};
				var metadata = {};
				var tempobj = {};
				var inheritlist=[];
				var inobj = JSON.parse(JSON.stringify(params));

				if (inobj instanceof Array) {         //if we get an array in (usally happens on the recurse)
					proxyprinttodiv("inobj instanceof array", inobj, 98);
					var mergedObj = {};
					var tempArray = [];
					for (var i in inobj) {
						// if our array is just a list of strings
						if (typeof inobj[i] === 'string') {
							tempArray.push("string");
						} else {
							extend(true, mergedObj, recurseobj(inobj[i]));
						}
					}
					// there has to be something in the merge object to push it onto the return
					if (Object.keys(mergedObj).length > 0) {
						tempArray.push(mergedObj);
					}

					proxyprinttodiv("tempArray", tempArray, 98);
					return tempArray;
				} else {
					// the section below improves inobj, 
					// -it gets command from dtotable if avail
					// -it creates a dtolist based on type 
					// - it changes structure of inobj based on type

					if (inobj['metadata']) {
						dtolist={};
						metadata = inobj['metadata'];
						proxyprinttodiv("In getdtoobject recurseobj metadata", metadata, 98);
						for (var eachitem in metadata) {
							if (eachitem==='type' || eachitem==='method') {
								proxyprinttodiv("In getdtoobject recurseobj metadata -- eachitem", eachitem, 98);
								tempobj = {};
								if (eachitem==='type') {
									tempobj[eachitem] = metadata[eachitem]['type'];
									}
								if (eachitem==='method') {
									if (dtotable[metadata.method]) {tempobj = dtotable[metadata.method].command.dtolist}
								 }
								if (tempobj) {extend(true, dtolist, tempobj)};
								// if (eachitem==='method' && dtotable[metadata.method] && 
								//     dtotable[metadata.method].command && dtotable[metadata.method].command.inherit) {
								//     proxyprinttodiv("getdtoobject dtotable[metadata.method].command.inherit ", dtotable[metadata.method].command.inherit, 98);
								//         tempobj = dtotable[metadata.method].command.inherit;
								//         inheritlist.push(tempobj);
								//     }
								proxyprinttodiv("getdtoobject dtolist", dtolist, 98);
								proxyprinttodiv("In getdtoobject <<< DTOLIST >>>", dtolist, 98);
								// eachitem would be a child
								if ((metadata[eachitem]['type'] === "onetomany" ||
										metadata[eachitem]['type'] === "manytomany" || // ** readded
										metadata[eachitem]['type'] === "jsononetomany") &&
									(inobj[eachitem] !== undefined) && (!isArray(inobj[eachitem]))) {
									relationshipArray = [];
									relationshipArray.push(inobj[eachitem]);
									delete inobj[eachitem];
									inobj[eachitem] = relationshipArray;
									}                    
							} // type
						} // for metadata
					} // if inobj['metadata'];

					var dtolistdefault = {'systemdto' : 'onetoone'}
					extend(true, dtolist, dtolistdefault)

								if(!dtoobj.command){
									dtoobj.command = {};
								}
					debuglevel = 98;
					// section below goes through each property and recurse
					proxyprinttodiv("getdtoobject createdtotable -- dtotable ", dtotable, 98, true);
					//proxyprinttodiv("getdtoobject inheritlist", inheritlist, 98);
					proxyprinttodiv("getdtoobject dtolist", dtolist, 98);
					proxyprinttodiv("getdtoobject recurseobj -- inobj II", inobj, 98);
					 for (var eachparm in inobj) {
						proxyprinttodiv("getdtoobject recurseobj -- eachparm", eachparm, 98);
						proxyprinttodiv("getdtoobject --is-- switch inobj[eachparm]", inobj[eachparm], 98);

						if (isObject(inobj[eachparm]) || isArray(inobj[eachparm])) {
							dtoobj[eachparm] = recurseobj(inobj[eachparm]);
							proxyprinttodiv("getdtoobject --is-- switch inobj[eachparm]", inobj[eachparm], 98);
							proxyprinttodiv("getdtoobject is obj dtoobj", dtoobj, 98);
							if (dtotable[eachparm]) { // if table entry exists, then merge to what you just got
								proxyprinttodiv("getdtoobject is obj dtotable[eachparm]", dtotable[eachparm], 98);

								if (isArray(dtotable[eachparm])) { // get a object copy of dtotable[eachparam] to tempobj
									tempobj=dtotable[eachparm][0]
									}
								else {
									tempobj=dtotable[eachparm]
									}
								proxyprinttodiv("getdtoobject is obj tempobj", tempobj, 98);
								if (isArray(dtoobj[eachparm])) { // merge it with object dtoobj[eachparm]
									tempobj = extend(true, dtoobj[eachparm][0], tempobj);
									}
								else {
									tempobj = extend(true, dtoobj[eachparm], tempobj);
									}
								proxyprinttodiv("getdtoobject is obj tempobj II", tempobj, 98);
								if (isArray(dtotable[eachparm])) { // now convert it back to right form
									dtoobj[eachparm]=[]
									dtoobj[eachparm].push(tempobj)
									}
								else {
									dtoobj[eachparm]=tempobj
									}
								//dtoobj[eachparm]=recursestring(dtoobj[eachparm])
								proxyprinttodiv("getdtoobject is obj dtoobj.command.dtolist", dtoobj.command.dtolist, 98);
							}
						} else { // if not object then 
							dtoobj[eachparm] = "string";
							//dtoobj[eachparm]=recursestring(dtoobj[eachparm])
						}
						dtoobj[eachparm]=recursestring(dtoobj[eachparm])
						proxyprinttodiv("getdtoobject is obj dtoobj end--each", dtoobj[eachparm], 98);
					} // for eachparm

					proxyprinttodiv("getdtoobject is obj inobj", inobj, 98);
					proxyprinttodiv("getdtoobject is obj dtoobj end", dtoobj, 98);

					if (!dtoobj.command) {dtoobj.command = {}}
					if (!dtoobj.command.dtolist) {dtoobj.command.dtolist = {}}
					if (dtolist) {dtoobj.command.dtolist = extend(true, dtoobj.command.dtolist, dtolist)}

					//if (!dtoobj.command.inherit) {dtoobj.command.inherit = []}
					// if (inheritlist) {
					//     for (var eachinherit in inheritlist) {
					//         dtoobj.command.inherit.push(inheritlist[eachinherit])
					//     }
					// }

					proxyprinttodiv("In GetDTOObject before return -- we created dto -- :", dtoobj, 98);
							
					return dtoobj;
				} // else
			} // end fn recurse
			
			function createdtotable(mm, dtoobject) {                
				proxyprinttodiv("getdtoobject createdtotable -- dtoobject", dtoobject, 38);
				proxyprinttodiv("getdtoobject createdtotable -- mm", mm, 38);

				// if we are missing dto object, command, and dtotype create them
				if(!dtoobject) {
					dtoobject = {};
				}

				//if (dtoobject.command.dtolist === undefined) {
				//proxyprinttodiv("getdtoobject createdtotable -- dtoobject.command.dtolist ", dtoobject.command.dtolist, 38);
				
				if ((dtoobject.command) && (dtoobject.command.dtolist) && (Object.keys(dtoobject.command.dtolist).length > 0)) {
					proxyprinttodiv("getdtoobject dtoobject.command.dtolist -- ", dtoobject.command.dtolist,38);
					for (var eachparam in dtoobject.command.dtolist) {
						proxyprinttodiv("getdtoobject createdtotable eachparam -- ", eachparam,38);
						if (isObject(dtoobject[eachparam])) {
							createdtotable(eachparam, dtoobject[eachparam]);             
							dtotable[eachparam] = dtoobject[eachparam]
							proxyprinttodiv("getdtoobject createdtotable dtoobject[eachparam] -- ", dtoobject[eachparam],38);
							proxyprinttodiv("getdtoobject createdtotable dtotable -- ", dtotable,38);
						}
					}
				}

				//dtoobject=recursestring(dtoobject);

				if (!dtotable[mm] && Object.keys(dtoobject).length > 0) {
					dtotable[mm] = dtoobject;
				}
				proxyprinttodiv("getdtoobject createdtotable -- dtotable ", dtotable, 38);
			}
			
			callback({}, recurseobj(obj))
		}//end fn recurseobjcontainer
		
		
		
		var obj=    {"wid": "wid1",
                    "metadata.method": "authordto",
                    "authordto.authordto.authordto.name":"sammysample"};
        var dtotable = 
        { 
            "authordto" : { 
                "name" : "string",
                "wid" : "string",
                "metadata" : { 
                    "method" : "string",
                    "authordto" : { 
                        "type" : "manytomany"
                    }
                },
                "command" : { 

                    "deepdtolist" : { 
                        "authordto" : "manytomany",
                        "systemdto" : "onetoone"
                    },
                    "dtolist" : { 
                        "authordto" : "manytomany",
                        "systemdto" : "onetoone"
                    }
            },
            "systemdto" : { 
                "command" : { 
                    "dtolist" : { }
                }
            }
        }
        }

        obj=ConvertFromDOTdri(obj);
        recurseobjcontainer(obj, dtotable, function (err, res) {
            callback(err, res)

            });
    }

    /*
        empty dtotable from rrr5
    */
    exports.rrr6 = rrr6 = function rrr6(params, callback) {   
        var obj=
        {"wid":"wid1","metadata":{"method":"authordto","authordto":{"type":"onetoone"}},"authordto":{"wid":"1","metadata":{"method":"authordto","authordto": {"type":"onetoone"}},"authordto":{"wid":"3","metadata":{"method":"authordto","authordto":{"type":"onetoone"}},"authordto": {"name":"sammysample","wid":"5","metadata":{"method":"authordto"}}}}};

        var dtotable = 
        {}

        recurseobjcontainer(obj, dtotable, callback);
    }
    
    /*
        empty dtotable
    */
    exports.rrr7 = rrr7 = function rrr7(params, callback) {   
        var obj=
        {"wid": "songdto", "metadata":{"method":"songdto"},"title": "string","metadata":{"sounddto":{"type": "onetoone"}},"sounddto":{"wid": "sounddto"},"sounddto":{"metadata":{"method": "sounddto"}},"sounddto":{"note":"string"}};
        
        var dtotable = {};

        recurseobjcontainer(obj, dtotable, function(err, res){
            callback(err, res);
        });
    }

// {"title":"string","wid":"string","metadata":{"method":"string","sounddto":{"type":"onetomany"}},
// "command":{"inherit":{"defaultsystemactions":"defaultsystemactions"},
// "deepdtolist":{"systemdto":"onetoone","sounddto":"onetomany"},
// "dtolist":{"sounddto":"onetomany","systemdto":"onetoone"}},
// "sounddto":[{"note":"string","wid":"string","metadata":{"method":"string"},
// "command":{"inherit":{"defaultsystemactions":"defaultsystemactions"},
// "deepdtolist":{"systemdto":"onetoone"},"dtolist":{"systemdto":"onetoone"}}}]}
// {
//     "title": "string",
//     "wid": "string",
//     "metadata": {
//         "method": "string",
//         "sounddto": {
//             "type": "onetomany"
//         }
//     },
//     "command": {
//         "dtolist": {
//             "sounddto": "onetomany",
//             "systemdto": "onetoone"
//         }
//     },
//     "sounddto": [
//         {
//             "note": "string",
//             "wid": "string",
//             "metadata": {
//                 "method": "string"
//             },
//             "command": {
//                 "dtolist": {
//                     "systemdto": "onetoone"
//                 }
//             }
//         }
//     ]
// }


    exports.jstest1 = jstest1 = function jstest1(parameters, callback) { 
        parameters.a="3"
        parameters.b="4"
        jstest2(parameters, function (err, res) {
            callback(err, res)
        })

    }

    exports.jstest2 = jstest2 = function jstest2(parameters, callback) { 
        //add_numbers_server  
        eval("(function add_numbers(parameters1, callback1) { alert('global '+ JSON.stringify(parameters));alert('inner '+ JSON.stringify(parameters)); var sum = { numsum : parseInt(parameters.a) + parseInt(parameters.b) };callback(null, sum);})()")
    }

    exports.jstest3 = jstest3 = function jstest3(p, callback) { 
        var param={};
        param.a="3"
        param.b="4"
        param.executethis="add_numbers_server"
        execute(param, function (err, res) {
            callback(err, res)
        })

    }    

    exports.jstest4 = jstest4 = function jstest4(parameters, callback) { 
        parameters.a="3"
        parameters.b="4"
        jstest5(parameters, function (err, res) {
            callback(err, res)
        })

    }

    exports.jstest5 = jstest5 = function jstest5(parameters, callback) { 
            (
                function add_numbers(parameters1, callback1) {
                    var sum = { numsum : parseInt(parameters.a) + parseInt(parameters.b) };
                    callback(null, sum);}
                )
            ()
    }
	
	/*
		manytomany test
	*/
	exports.manytomanytest = manytomanytest = function manytomanytest(params, callback) {
		execute([{
				"executethis": "addwidmaster",
				"wid": "authordto",
				"metadata.method": "authordto",
				"age": "string",
			}, {
				"executethis": "addwidmaster",
				"wid": "bookdto",
				"metadata.method": "bookdto",
				"title": "string",
			}, {
				"executethis": "addwidmaster",
				"wid": "rel_author_book",
				"metadata.method": "relationshipdto",
				"relationshiptype": "attributes",
				"linktype": "manytomany",
				"primarywid": "authordto",
				"primarymethod": "authordto",
				"secondarywid": "bookdto",
				"secondarymethod": "bookdto"
			}, {
				"executethis": "addwidmaster",
				"wid": "author1",
				"metadata.method": "authordto",
				"name": "Author1",
				"bookdto.0.title": "Author1 Book1",
			}, {
				"executethis": "addwidmaster",
				"wid": "author2",
				"metadata.method": "authordto",
				"name": "Author2",
				"bookdto.0.title": "Author2 Book1",
				"bookdto.1.title": "Author2 Book2"
			}, {
				"executethis": "addwidmaster",
				"wid": "author3",
				"metadata.method": "authordto",
				"name": "Author3",
				"bookdto.0.title": "Author3 Book1",
				"bookdto.1.title": "Author3 Book2",
				"bookdto.2.title": "Author3 Book3"
			}],
			function (err, res) {
				proxyprinttodiv("manytomanytest addwidmaster result: ", res, 99);
				debuglevel = 38;
				execute([{
					"executethis": "getwidmaster",
					"wid": "author1"
				},{
					"executethis": "getwidmaster",
					"wid": "author2"
				},{
					"executethis": "getwidmaster",
					"wid": "author3"
				}], function (err, res1) {
					proxyprinttodiv("manytomanytest getwidmaster result: ", res1, 99);
					callback(err, res1);
				});
		});
	}
	
	/*
		authortoauthor test
	*/
	exports.authortoauthortest = authortoauthortest = function authortoauthortest(params, callback) {
		execute([
				{
                    "executethis": "addwidmaster",
                    "wid": "authordto",
                    "metadata.method": "authordto",
                    "name":"string",
					"metadata.authordto.type": "onetoone"
                },{ //authordto - authordto
                    "executethis": "addwidmaster",
                    "wid": "rel_author_author",
                    "metadata.method": "relationshipdto",
                    "relationshiptype": "attributes",
                    "linktype": "onetoone",
                    "primarywid": "authordto",
                    "primarymethod": "authordto",
                    "secondarywid": "authordto",
                    "secondarymethod": "authordto"
                }, {
                    "executethis": "addwidmaster",
                    "wid": "wid1",
                    "metadata.method": "authordto",
					"name":"author1",
                    "authordto.authordto.authordto.name":"authortoauthor1"
                }],
			function (err, res) {
				proxyprinttodiv('authortoauthortest addwidmaster result: ', res, 99);
				
				debuglevel = 38;
				execute({
					"executethis": "getwidmaster",
					"wid": "wid1"
				}, function (err, res1) {
					proxyprinttodiv("authortoauthortest getwidmaster result: ", res1, 99);
					callback(err, res);
				});
		});
	}
	
	/*
		addwidmaster ex-17-data
	*/
	exports.addwidmasterex17data = addwidmasterex17data = function addwidmasterex17data(params, callback) {
		execute([{
			"executethis": "addwidmaster",
			"wid": "ex-17-data",
			"html": "Wow...here is some HTML from a button click on ex-17-html",
			"addthis.command.htmltargetid":"putithere"
		}, {
			"executethis": "addwidmaster",
			"wid": "ex-17-data",
			"html": "Wow...here is some HTML from a button click on ex-17-html",
			"addthis.command.htmltargetid":"putithere"
		}, {
			"executethis": "addwidmaster",
			"wid": "ex-17-data",
			"html": "Wow...here is some HTML from a button click on ex-17-html",
			"addthis.command.htmltargetid":"putithere"
		}, {
			"executethis": "getwidmaster",
			"wid": "ex-17-data"
		}
		], function (err, res1) {
			proxyprinttodiv("addwidmasterex17data result: ", res1, 99);
			callback(err, res1);
		});
	}

        
    /*
        addwidmaster blank guid
    */
    exports.addwidmasterblankguid = addwidmasterblankguid = function addwidmasterblankguid(params, callback) {
        execute([{
            "executethis": "addwidmaster",
            "wid": "authordto",
            "metadata.method": "authordto",
            "name":"string",
            "g1": "guid"
        }, {
            "executethis": "addwidmaster",
            "wid": "addwidmasterblankguid",
            "name":"Author1"
        }, {
            "executethis": "getwidmaster",
            "wid": "addwidmasterblankguid"
        }
        ], function (err, res1) {
            proxyprinttodiv("addwidmasterblankguid result: ", res1, 99);
            callback(err, res1);
        });
    }

    /*
        addwid with no data,, no command.inherit.data
    */
    exports.etaddwidtest8 = etaddwidtest8 = function etaddwidtest8(parameters, callback) {
        debuglevel = 17;
        eventappinstall();
    
        execute([{
            "executethis": "updatewid",
            "wid": "wid1",
            "addthis.command":{"inherit":{}}
        }], function (err, res1) {
            var inputdto = {
                "wid": "string",
                "a": "string",
                "b": "string",
                "c": "string",
                "d": "string",
                "e": "string",
                "metadata": {
                    "method": "string"
                }
            };

            var inputobject = {
                "wid": "wid1",
                "a": "1",
                "b": "2",
                "c": "3",
                "d": "4",
                "e": "5",
                "metadata": {
                    "method": "authordto"
                }
            };

            var command = {};

            addwid(inputobject, inputdto, command, function (err, res) {
                proxyprinttodiv("res --", res, 17);
                var actual_result = res;
                proxyprinttodiv("actual_result --", actual_result, 17);                           

                var expected_result = [{"data":{"a":"1","b":"2","c":"3","d":"4","e":"5"},"wid":"wid1","metadata":{"method":"authordto","date":"2014-04-05T10:43:31.375Z"}}];
                proxyprinttodiv("expected_result --", expected_result, 17);

                res = logverify("logverify", actual_result, expected_result);
                callback(err, res);
            });
        });
    }
    
    /*
        addwid with data,, no command.inherit.data
    */
    exports.etaddwidtest9 = etaddwidtest9 = function etaddwidtest9(parameters, callback) {
        debuglevel = 17;
        eventappinstall();
    
        execute([{
            "executethis": "updatewid",
            "wid": "wid1",
            "d":"44",
            "f":"6",
            "addthis.command":{"inherit":{}}
        }], function (err, res1) {
            var inputdto = {
                "wid": "string",
                "a": "string",
                "b": "string",
                "c": "string",
                "d": "string",
                "e": "string",
                "metadata": {
                    "method": "string"
                }
            };
            
            var inputobject = {
                "wid": "wid1",
                "a": "1",
                "b": "2",
                "c": "3",
                "d": "4",
                "e": "5",
                "metadata": {
                    "method": "authordto"
                }
            };
            
            var command = {};

            addwid(inputobject, inputdto, command, function (err, res) {
                proxyprinttodiv("res --", res, 17);
                var actual_result = res;
                proxyprinttodiv("actual_result --", actual_result, 17);                           

                var expected_result = [{"data":{"a":"1","b":"2","c":"3","d":"4","e":"5"},"wid":"wid1","metadata":{"method":"authordto","date":"2014-04-05T10:43:31.375Z"}}];
                proxyprinttodiv("expected_result --", expected_result, 17);

                res = logverify("logverify", actual_result, expected_result);
                callback(err, res);
            });
        });
    }
    
    /*
        addwid with no data,, with command.inherit.data
    */
    exports.etaddwidtest10 = etaddwidtest10 = function etaddwidtest10(parameters, callback) {
        debuglevel = 17;
        eventappinstall();
    
        execute([{
            "executethis": "updatewid",
            "wid": "wid1",
            "addthis.command":{"inherit":{"data":{"c":"99", "e":"98", "g":"7"}}}
        }], function (err, res1) {
            var inputdto = {
                "wid": "string",
                "a": "string",
                "b": "string",
                "c": "string",
                "d": "string",
                "e": "string",
                "metadata": {
                    "method": "string"
                }
            };
            
            var inputobject = {
                "wid": "wid1",
                "a": "1",
                "b": "2",
                "c": "3",
                "d": "4",
                "e": "5",
                "metadata": {
                    "method": "authordto"
                }
            };
            
            var command = {};

            addwid(inputobject, inputdto, command, function (err, res) {
                proxyprinttodiv("res --", res, 17);
                var actual_result = res;
                proxyprinttodiv("actual_result --", actual_result, 17);                           

                var expected_result = [{"data":{"a":"1","b":"2","c":"3","d":"4","e":"5"},"wid":"wid1","metadata":{"method":"authordto","date":"2014-04-05T10:43:31.375Z"}}];
                proxyprinttodiv("expected_result --", expected_result, 17);

                res = logverify("logverify", actual_result, expected_result);
                callback(err, res);
            });
        });
    }
    
    /*
        addwid with data,, with command.inherit.data
    */
    exports.etaddwidtest11 = etaddwidtest11 = function etaddwidtest11(parameters, callback) {
        debuglevel = 17;
        eventappinstall();
    
        execute([{
            "executethis": "updatewid",
            "wid": "wid1",
            "d":"44",
            "f":"6",
            "addthis.command":{"inherit":{"data":{"c":"99", "e":"5", "g":"7"}}}
        }], function (err, res1) {
            var inputdto = {
                "wid": "string",
                "a": "string",
                "b": "string",
                "c": "string",
                "d": "string",
                "e": "string",
                "metadata": {
                    "method": "string"
                }
            };
            
            var inputobject = {
                "wid": "wid1",
                "a": "1",
                "b": "2",
                "c": "3",
                "d": "4",
                "e": "5",
                "metadata": {
                    "method": "authordto"
                }
            };
            
            var command = {};

            addwid(inputobject, inputdto, command, function (err, res) {
                proxyprinttodiv("res --", res, 17);
                var actual_result = res;
                proxyprinttodiv("actual_result --", actual_result, 17);                           

                var expected_result = [{"data":{"a":"1","b":"2","c":"3","d":"4","e":"5"},"wid":"wid1","metadata":{"method":"authordto","date":"2014-04-05T10:43:31.375Z"}}];
                proxyprinttodiv("expected_result --", expected_result, 17);

                res = logverify("logverify", actual_result, expected_result);
                callback(err, res);
            });
        });
    }
    
    /*
        To add wid to db(default "data")
    */
    exports.etaddwidtodbdata = etaddwidtodbdata = function etaddwidtodbdata(parameters, callback) {
        //debuglevel = 17;
        //eventappinstall();

    execute([{
            "executethis": "addwidmaster",
            "wid": "sounddto",
            "metadata.method": "sounddto",
            "note": "string"
        }, {
            "executethis": "getwidmaster",
            "wid": "sounddto"
        }, {
            "executethis": "addwidmaster",
            "wid": "wid1",
            "d":"44",
            "f":"6",
            "command":{"db":"data"}
        }, {
             "executethis": "addwidmaster",
             "wid": "wid2",
             "d":"444",
             "f":"66",
             "command":{"db":"test"}
        }, {
             "executethis": "addwidmaster",
             "wid": "wid3",
             "d":"4444",
             "f":"666",
             "command":{"collection":"othercollection"}
        }, {
             "executethis": "getwidmaster",
             "wid": "wid1",
             "command":{"db":"data"}
        }, {
             "executethis": "getwidmaster",
             "wid": "wid2",
             "command":{"db":"test"}
        }, {
             "executethis": "getwidmaster",
             "wid": "wid3",
             "command":{"collection":"othercollection"}
        }],
        function (err, res) {
            callback(err, res);
            proxyprinttodiv("res -- add", res, 17);
        });
    }
    
exports.ettestag111 = ettestag111 = function ettestag111(params, callback) {
      debuglevel = 12;
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
            var res = res1[1]; //~~~ changed by SAURABH 
            //var res = res1[0];

            
            proxyprinttodiv('Function ag1 result ', res, 17);
            res = logverify("ettestag1_result", res, [{
                "note": "string",
                "wid": "sounddto",
                "metadata.method": "sounddto"
            }]);
            callback(err, res);
        });
}


    
exports.ettestag111 = ettestag111 = function ettestag111(params, callback) {
      debuglevel = 12;
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
            var res = res1[1]; //~~~ changed by SAURABH 
            //var res = res1[0];

            
            proxyprinttodiv('Function ag1 result ', res, 17);
            res = logverify("ettestag1_result", res, [{
                "note": "string",
                "wid": "sounddto",
                "metadata.method": "sounddto"
            }]);
            callback(err, res);
        });
}






    /*
        To get wid from db(default "data")
    */
    exports.etgetfromdbdata = etgetfromdbdata = function etgetfromdbdata(parameters, callback) {
        debuglevel = 17;
        eventappinstall();

        execute([{
            "executethis": "getwidmaster",
            "wid": "sounddto"
        },{
            "executethis": "getwidmaster",
            "wid": "wid1",
            "command":{"db":"data"}
        },{
            "executethis": "getwidmaster",
            "wid": "wid2",
            "command":{"db":"data"}
        },{
            "executethis": "getwidmaster",
            "wid": "wid3",
            "command":{"collection":"othercollection"}
        }], function (err, res) {
            callback(err, res);
            proxyprinttodiv("res -- get", res, 17);
        });
    }

       /*
        Update, Get collection
    */
    exports.etupdategetcollection1 = etupdategetcollection1 = function etupdategetcollection1(parameters, callback) {
        var updatecommand = {"command":{"collection":"test"}};
        var getcommand =  {"command":{"collection":"test"}};
        updategetdatastore(updatecommand, getcommand, function(err, res){
            callback(err, res); 
        });
    }
    
    /*
        Update, Get collection
    */
    exports.etupdategetkeycollection1 = etupdategetkeycollection1 = function etupdategetkeycollection1(parameters, callback) {
        var updatecommand = {"command":{"keycollection":"test"}};
        var getcommand =  {"command":{"keycollection":"test"}};
        updategetdatastore(updatecommand, getcommand, function(err, res){
            callback(err, res); 
        });
    }


    // tests systemdto from get
    exports.testusersystem = testusersystem = function testusersystem(params,callback){
        debuglevel = 0;
        execute({"executethis": "getwidmaster", "command.convertmethod":"dto", "wid": "userdto"}, function (err, res1) {
            proxyprinttodiv("getwidmaster userdto result: ", res1, 99); 
            var found = [];
            for (var prop in res1[0]){
                if (prop.indexOf("systemdto") != -1){
                    found.push(prop + " : " + res1[0][prop]);
                }
            }
            proxyprinttodiv("systemdto fields found: ", found, 99);             
            //callback(err, res1); 
        });
    }

	
	// SYSTEM DTO TESTS
	
	exports.adduserdto = adduserdto = function adduserdto(params,callback){
						
			execute({
                        // Create the userdto
                        "executethis": "addwidmaster",
                        "metadata.method": "userdto",
                        "wid": "userdto",
                        "widname": "wid",
                        "fname": "string",
                        "lname": "string",
                        "phone": "string",
                        "email": "string",
                        "address": "string",
                        "address2": "string",
                        "city": "string",
                        "state": "string",
                        "zip": "string",
                        "country": "string",
						"metadata.usergroupdto.type":"onetomany"
                    },
                        //"metadata.securitydto.type": "onetoone",
                        //"metadata.environmentdto.type": "onetoone",
                        //"metadata.permissiondto.type": "onetomany",
						//"metadata.usergroupdto.type":"onetomany"},
						 function (err, res1) {
							proxyprinttodiv("addwidmaster userdto result: ", res1, 99);           
							callback(err, res1); 
							}
                  );
	}



	
	exports.systemdinuserdto1 = systemdinuserdto1 = function systemdinuserdto1(params,callback){
		adduserdto(null, function(err, res) {			
		  execute({
                    // Create the userdto
                    "executethis": "addwidmaster",
                    "metadata.method": "userdto",
                    "wid": "userdto",
                    "systemdto.expirationdate":"6/14/14"
                },
					  function (err, res) {
								//proxyprinttodiv('Full results: ', res, 99);
								
								//proxyprinttodiv('The userdto record: ', res[2], 99);
						
							//	debuglevel = 0;
								execute({"executethis": "getwidmaster", "wid": "userdto"}, function (err, res1) {
									proxyprinttodiv("getwidmaster userdto result: ", res1, 99); 
									callback(err, res); 
								});
					  });
        });
	}
    
	exports.systemdinuserwid1 = systemdinuserwid1 = function systemdinuserwid1(params,callback){
			adduserdto();			
			execute([{
                        // Create the userdto
                        "executethis": "addwidmaster",
                        "metadata.method": "userdto",
                        "wid": "user1",
                        "systemdto.expirationdate":"6/14/14",
						"systemdto.blahblah":"blah"
                    }],
						  function (err, res) {
									//proxyprinttodiv('Full results: ', res, 99);
									
									//proxyprinttodiv('The userdto record: ', res[2], 99);
							
							//		debuglevel = 0;
									execute({"executethis": "getwidmaster", "wid": "user1"}, function (err, res1) {
										proxyprinttodiv("getwidmaster user1 result: ", res1, 99); 
										callback(err, res); 
									});
						  });
	}
	
	  exports.deepsystemdto1 = deepsystemdto1 = function deepsystemdto1(params,callback) {
		//adduserdto();

        execute([{
				// Create the userdto
				"executethis": "addwidmaster",
				"metadata.method": "userdto",
				"wid": "userdto",
				"widname": "wid",
				"fname": "string",
				"lname": "string",
				"phone": "string",
				"email": "string",
				"address": "string",
				"address2": "string",
				"city": "string",
				"state": "string",
				"zip": "string",
				"country": "string",
				"metadata.usergroupdto.type":"onetomany"
			},{
				"wid": "usergroupdto",
				"metadata.method":"usergroupdto",
                "groupname": "string"
			  },{
				"executethis": "addwidmaster",
				"wid": "rel_user_usergroup",
				"metadata.method": "relationshipdto",
				"relationshiptype": "attributes",
				"linktype": "onetomany",
				"primarywid": "userdto",
				"primarymethod": "userdto",
				"secondarywid": "usergroupdto",
				"secondarymethod": "usergroupdto"
            },{
                "executethis": "addwidmaster",
                "wid": "user1",
                "metadata.method": "userdto",
                "fname": "Bob",
                //"systemdto.expirationdate": "6/14/14",
				"usergroupdto.groupname": "Everyone",
				//"usergroupdto.systemdto.expirationdate": "7/14/14"
            }],
            function (err, res) {
									//proxyprinttodiv('Full results: ', res, 99);
									
									//proxyprinttodiv('The userdto record: ', res[2], 99);
							
							//		debuglevel = 0;
									execute({"executethis": "getwidmaster", "wid": "user1"}, function (err, res1) {
										proxyprinttodiv("getwidmaster user1 result: ", res1, 99); 
										callback(err, res); 
									});
						  });
    }
	
	  exports.deepsystemdto2 = deepsystemdto2 = function deepsystemdto2(params,callback) {
		//adduserdto();

        execute([{
				// Create the userdto
				"executethis": "addwidmaster",
				"metadata.method": "userdto",
				"wid": "userdto",
				"widname": "wid",
				"fname": "string",
				"lname": "string",
				"phone": "string",
				"email": "string",
				"address": "string",
				"address2": "string",
				"city": "string",
				"state": "string",
				"zip": "string",
				"country": "string",
				"metadata.usergroupdto.type":"onetomany",
				"systemdto.expirationdate": "string",
				"usergroupdto.systemdto.expirationdate": "string"
				},{
				"wid": "usergroupdto",
				"metadata.method":"usergroupdto",
                "groupname": "string"
			  },{
				"executethis": "addwidmaster",
				"wid": "rel_user_usergroup",
				"metadata.method": "relationshipdto",
				"relationshiptype": "attributes",
				"linktype": "onetomany",
				"primarywid": "userdto",
				"primarymethod": "userdto",
				"secondarywid": "usergroupdto",
				"secondarymethod": "usergroupdto"
            }],
            function (err, res) {
									//proxyprinttodiv('Full results: ', res, 99);
									
									//proxyprinttodiv('The userdto record: ', res[2], 99);
							
							//		debuglevel = 0;
									execute({"executethis": "getwidmaster", "command.getwidmaster.convertmethod":"dto", "wid": "userdto"}, function (err, res1) {
										proxyprinttodiv("getwidmaster userdto result: ", res1, 99); 
										callback(err, res); 
									});
						  });
    }

	// Tries to introduce data not found in systemdto into userdto and its child usergroupdto
	 exports.deepsystemdto3 = deepsystemdto3 = function deepsystemdto3(params,callback) {
		//adduserdto();

        execute([{
				// Create the userdto
				"executethis": "addwidmaster",
				"metadata.method": "userdto",
				"wid": "userdto",
				"widname": "wid",
				"fname": "string",
				"lname": "string",
				"phone": "string",
				"email": "string",
				"address": "string",
				"address2": "string",
				"city": "string",
				"state": "string",
				"zip": "string",
				"country": "string",
				"metadata.usergroupdto.type":"onetomany",
				"systemdto.blahblah":"this shouldn't exist in userdto.systemdto"
			},{
				"wid": "usergroupdto",
				"metadata.method":"usergroupdto",
                "groupname": "string",
				"systemdto.blahblah":"this shouldn't exist in usergroupdto.systemdto"
			  },{
				"executethis": "addwidmaster",
				"wid": "rel_user_usergroup",
				"metadata.method": "relationshipdto",
				"relationshiptype": "attributes",
				"linktype": "onetomany",
				"primarywid": "userdto",
				"primarymethod": "userdto",
				"secondarywid": "usergroupdto",
				"secondarymethod": "usergroupdto"
            }],
            function (err, res) {
									//proxyprinttodiv('Full results: ', res, 99);
									
									//proxyprinttodiv('The userdto record: ', res[2], 99);
							
							//		debuglevel = 0;
									execute({"executethis": "getwidmaster", "command.getwidmaster.convertmethod":"dto", "wid": "userdto"}, function (err, res1) {
										proxyprinttodiv("getwidmaster userdto result: ", res1, 99); 
										callback(err, res); 
									});
						  });
		}
		
		
	// Tries to introduce data not found in systemdto into user1 and user1's usergroup
	exports.deepsystemdto4 = deepsystemdto4 = function deepsystemdto4(params,callback) {
		//adduserdto();

        execute([{
				// Create the userdto
				"executethis": "addwidmaster",
				"metadata.method": "userdto",
				"wid": "userdto",
				"widname": "wid",
				"fname": "string",
				"lname": "string",
				"phone": "string",
				"email": "string",
				"address": "string",
				"address2": "string",
				"city": "string",
				"state": "string",
				"zip": "string",
				"country": "string",
				"metadata.usergroupdto.type":"onetomany"
			},{
				"wid": "usergroupdto",
				"metadata.method":"usergroupdto",
                "groupname": "string"
			  },{
				"executethis": "addwidmaster",
				"wid": "rel_user_usergroup",
				"metadata.method": "relationshipdto",
				"relationshiptype": "attributes",
				"linktype": "onetomany",
				"primarywid": "userdto",
				"primarymethod": "userdto",
				"secondarywid": "usergroupdto",
				"secondarymethod": "usergroupdto"
            },{
                "executethis": "addwidmaster",
                "wid": "user1",
                "metadata.method": "userdto",
                "fname": "Bob",
                "systemdto.blahblah": "this should not show up in user1.systemdto",
				"usergroupdto.groupname": "Everyone",
				"usergroupdto.systemdto.expirationdate": "this should not show up in user1.usergroupdto.systemdto"
            }],
            function (err, res) {
						//proxyprinttodiv('Full results: ', res, 99);
						
						//proxyprinttodiv('The userdto record: ', res[2], 99);
				
				//		debuglevel = 0;
						execute({"executethis": "getwidmaster", "wid": "user1"}, function (err, res1) {
							proxyprinttodiv("getwidmaster user1 result: ", res1, 99); 
							callback(err, res); 
						});
			  });
    }
	
	exports.testsysteminuserdto = testsysteminuserdto = function testsysteminuserdto(params,callback){
		adduserdto(null, function () {
		
    		execute([{"executethis": "getwidmaster", "command.getwidmaster.convertmethod":"dto", "wid": "userdto"}], 
    			function (err, res1) {
    							proxyprinttodiv("getwidmaster awesome userdto results: ", res1, 99); 
    							callback(err, res1); 
    			});
            });				
	}
	
	exports.testdeepsystem1 = testdeepsystem1 = function testdeepsystem1(params,callback){
		createalldtos();
		
		execute([{
				"executethis": "addwidmaster",
				"wid":"user1",
				"metadata.method": "userdto",
				"fname":"Cody",
				"systemdto.expirationdate":"hi from user",
				"securitydto.ac":"codyac",
				"securitydto.systemdto.expirationdate":"hi from security",
				"permissiondto.level":"2",
				"permissiondto.systemdto.expirationdate":"hi from permissions",
				"permissiondto.0.usergroupdto.0.usergroupname":"employees",
				"permissiondto.0.usergroupdto.0.systemdto.expirationdate":"hi from permissions.usergroup",
				"environmentdto.priority":"1",
				"environmentdto.systemdto.expirationdate":"hi from environment",
				"usergroupdto.usergroupname":"everyone",
				"usergroupdto.systemdto.expirationdate":"hi from usergroup"}],
            function (err, res) {
				// proxyprinttodiv('Full results: ', res, 99);
				// proxyprinttodiv('The userdto record: ', res[2], 99);
				// debuglevel = 0;
				execute({"executethis": "getwidmaster", "wid": "user1"}, function (err, res1) {
					proxyprinttodiv("getwidmaster user1 result: ", res1, 99); 
					callback(err, res); 
				});
			  });
							
			
	}	


    // simple test which sets up all data and then runs sectest1 test after that 
exports.datastore1 = datastore1 = function datastore1(params, callback) {

      debuglevel = 12;

      async.series([
            function (cb1) {
                  updatedatastore({"wid": "sounddto","metadata.method": "sounddto","note": "string"},{}, function (err, res) {
                  cb1(null);
                })
            },
            function (cb1) {
                  getfromdatastore({"wid":"sounddto"}, null, function (err, res) {
                cb1(null);
                  });
            }
      ], function (err, res) {
            proxyprinttodiv('res', res, 34);
            callback(err, res);
      });
}




    // simple test which sets up all data and then runs sectest1 test after that 
exports.datastore2 = datastore2 = function datastore2(params, callback) {

      debuglevel = 12;

      async.series([
            function (cb1) {
                  proxyprinttodiv('Function updatewid in : x', 'hi',12);
                  updatewid({"wid": "sounddto","metadata":{"method": "sounddto"},"note": "string"},function (err, res) {
                  cb1(null);
                })
            },
            function (cb1) {
                  getwid({"wid":"sounddto"}, function (err, res) {
                cb1(null);
                  });
            }
      ], function (err, res) {
            proxyprinttodiv('res', res, 34);
            callback(err, res);
      });
};

  
    /*
        To add wid to db(default "data")
    */
    exports.datastore3 = datastore3 = function datastore3(parameters, callback) {
        debuglevel = 12;
        eventappinstall();

        execute([{
            "executethis": "updatewid",
            "wid": "sounddto",
            "metadata.method": "sounddto",
            "note": "string"
        }, {
            "executethis": "getwid",
            "wid": "sounddto"
        }, {
            "executethis": "updatewid",
            "wid": "wid1",
            "d":"44",
            "f":"6",
            "command":{"db":"data"}
        }, {
             "executethis": "getwid",
             "wid": "wid1",
             "command":{"db":"data"}
        }, {
             "executethis": "updatewid",
             "wid": "wid2",
             "d":"444",
             "f":"66",
             "command":{"db":"test"}
        }, {
             "executethis": "getwid",
             "wid": "wid2",
             "command":{"db":"data"}
        }, {
             "executethis": "updatewid",
             "wid": "wid3",
             "d":"4444",
             "f":"666",
             "command":{"collection":"othercollection"}
        }, {
             "executethis": "getwid",
             "wid": "wid3",
             "command":{"collection":"othercollection"}
        }, {
             "executethis": "getwid",
             "wid": "wid3",
             "command":{"collection":"testcollection"}
        }],
        function (err, res) {
            callback(err, res);
            proxyprinttodiv("res -- add", res, 17);
        });
    };
    
    /*
        normal add / get
    */
    exports.datastore4 = datastore4 = function datastore4(parameters, callback) {
        debuglevel = 12;
        eventappinstall();

        execute([{
            "executethis": "updatewid",
            "wid": "sounddto",
            "metadata.method": "sounddto",
            "note": "string"
        }, {
            "executethis": "getwid",
            "wid": "sounddto"
        }],
        function (err, res) {
            callback(err, res);
            proxyprinttodiv("res -- add", res, 17);
        });
    }

    function datastorefunction(updatecommand, callback){
        debuglevel = 12;
        eventappinstall();
        
        var allPossibleCommandValues = [
            {"db":"data"},
            {"db":"test"},
            {"db":""},
            {"collection":"maincollection"},
            {"collection":"othercollection"},
            {"collection":""},
            {"datastore":"localstorage"},
            {"datastore":"localstore"},
            {"datastore":"angular"},
            {"datastore":"mongo"},
            {"datastore":""}
        ];
        
        var executeArray = [];
        executeArray.push({
            "executethis": "updatewid",
            "wid": "wid1",
            "d":"44",
            "f":"6",
            "command":updatecommand
        });
        
        for(commandValue in allPossibleCommandValues){
            var executeObj = {
                "executethis": "getwid",
                "wid": "wid1",
                "command":allPossibleCommandValues[commandValue]
            }
            executeArray.push(executeObj);
        }
        
        execute(executeArray, function (err, res) {
            proxyprinttodiv("res -- add", res, 12);
            callback(err, res);
        });
    }
    
    
    /*
        To add wid to {"db":"data"}
        To get wid from all other variations
    */
    exports.datastore5 = datastore5 = function datastore5(parameters, callback) {
        var updatecommand = {"db":"data"};
        datastorefunction(updatecommand, function(err, res){
            callback(err, res);
        });
    }
    
    /*
        To add wid to {"db":"test"}
        To get wid from all other variations
    */
    exports.datastore6 = datastore6 = function datastore6(parameters, callback) {
        var updatecommand = {"db":"test"};
        datastorefunction(updatecommand, function(err, res){
            callback(err, res);
        });
    }
    
    /*
        To add wid to {"db":""}
        To get wid from all other variations
    */
    exports.datastore7 = datastore7 = function datastore7(parameters, callback) {
        var updatecommand = {"db":""};
        datastorefunction(updatecommand, function(err, res){
            callback(err, res);
        });
    }
    
    /*
        To add wid to {"collection":"maincollection"}
        To get wid from all other variations
    */
    exports.datastore8 = datastore8 = function datastore8(parameters, callback) {
        var updatecommand = {"collection":"maincollection"};
        datastorefunction(updatecommand, function(err, res){
            callback(err, res);
        });
    }
    
    /*
        To add wid to {"collection":"maincollection"}
        To get wid from all other variations
    */
    exports.datastore9 = datastore9 = function datastore9(parameters, callback) {
        var updatecommand = {"collection":"othercollection"};
        datastorefunction(updatecommand, function(err, res){
            callback(err, res);
        });
    }
    
    /*
        To add wid to {"collection":""}
        To get wid from all other variations
    */
    exports.datastore10 = datastore10 = function datastore10(parameters, callback) {
        var updatecommand = {"collection":""};
        datastorefunction(updatecommand, function(err, res){
            callback(err, res);
        });
    }
    
    /*
        To add wid to {"datastore":"localstorage"}
        To get wid from all other variations
    */
    exports.datastore11 = datastore11 = function datastore11(parameters, callback) {
        var updatecommand = {"datastore":"localstorage"};
        datastorefunction(updatecommand, function(err, res){
            callback(err, res);
        });
    }
    
    /*
        To add wid to {"datastore":"localstore"}
        To get wid from all other variations
    */
    exports.datastore12 = datastore12 = function datastore12(parameters, callback) {
        var updatecommand = {"datastore":"localstore"};
        datastorefunction(updatecommand, function(err, res){
            callback(err, res);
        });
    }
    
    /*
        To add wid to {"datastore":"angular"}
        To get wid from all other variations
    */
    exports.datastore13 = datastore13 = function datastore13(parameters, callback) {
        var updatecommand = {"datastore":"angular"};
        datastorefunction(updatecommand, function(err, res){
            callback(err, res);
        });
    }
    
    /*
        To add wid to {"datastore":"mongo"}
        To get wid from all other variations
    */
    exports.datastore14 = datastore14 = function datastore14(parameters, callback) {
        var updatecommand = {"datastore":"mongo"};
        datastorefunction(updatecommand, function(err, res){
            callback(err, res);
        });
    }
    
    
    /*
        To add wid to {"datastore":""}
        To get wid from all other variations
    */
    exports.datastore15 = datastore15 = function datastore15(parameters, callback) {
        var updatecommand = {"datastore":""};
        datastorefunction(updatecommand, function(err, res){
            callback(err, res);
        });
    }

    /*
        To add wid with all possible variations
        To get wid with exact possible variations
    */
    exports.datastoreaddget1 = datastoreaddget1 = function datastoreaddget1(parameters, callback) {
        debuglevel = 17;
        eventappinstall();
        
        var allPossibleCommandDbValues = ["data", "test",""];
        var allPossibleCommandCollectionValues = ["maincollection","othercollection",""];
        var allPossibleCommandDataStoreValues = ["localstorage","localstore","angular","mongo",""];

        async.each(allPossibleCommandDbValues, function( commandDb, callback1) {
            async.each(allPossibleCommandCollectionValues, function( commandCollection, callback2) {
                async.each(allPossibleCommandDataStoreValues, function( commandDataStore, callback3) {
                    var command = {"db":commandDb, "collection":commandCollection, "datastore":commandDataStore};
                    
                    var executeArray = [];
                    executeArray.push({
                        "executethis": "updatewid",
                        "wid": "wid1",
                        "d":"44",
                        "f":"6",
                        "command":command
                    });
                    executeArray.push({
                        "executethis": "getwid",
                        "wid": "wid1",
                        "command":command
                    });
                    
                    execute(executeArray, function (err, res) {
                        proxyprinttodiv(">> command <<", command, 17);
                        proxyprinttodiv("add result ", res[0], 17);
                        proxyprinttodiv("get result ", res[1], 17);
                        callback3();
                    });
                });
                callback2();                
            });
            callback1();                
        });
    }
    
    /*
        To add wid with default values
        To get wid with all possible variations
    */
    exports.datastoreaddget2 = datastoreaddget2 = function datastoreaddget2(parameters, callback) {
        debuglevel = 17;
        eventappinstall();
        
        var command = {"db":"", "collection":"", "datastore":""};
        var executeArray = [];
        executeArray.push({
            "executethis": "updatewid",
            "wid": "wid1",
            "d":"44",
            "f":"6",
            "command":command
        });
        execute(executeArray, function (err, res) {
            proxyprinttodiv(">> add command <<", command, 17);
            proxyprinttodiv("add result ", res[0], 17);
        });
        
        var allPossibleCommandDbValues = ["data", "test",""];
        var allPossibleCommandCollectionValues = ["maincollection","othercollection",""];
        var allPossibleCommandDataStoreValues = ["localstorage","localstore","angular","mongo",""];

        async.each(allPossibleCommandDbValues, function( commandDb, callback1) {
            async.each(allPossibleCommandCollectionValues, function( commandCollection, callback2) {
                async.each(allPossibleCommandDataStoreValues, function( commandDataStore, callback3) {
                    var command = {"db":commandDb, "collection":commandCollection, "datastore":commandDataStore};
                    var executeArray = [];
                    executeArray.push({
                        "executethis": "getwid",
                        "wid": "wid1",
                        "command":command
                    });
                    execute(executeArray, function (err, res) {
                        proxyprinttodiv(">> get command <<", command, 17);
                        proxyprinttodiv("get result ", res[0], 17);
                        callback3();
                    });
                });
                callback2();                
            });
            callback1();                
        });
    }
    
    /*
        movewid1
    */
    exports.movewid1 = movewid1 = function movewid1(parameters, callback) {
        debuglevel = 17;
        eventappinstall();
        
        var addcommand = {"db":"test", "collection":"", "datastore":""};
        var executeArray = [];
        executeArray.push({
            "executethis": "updatewid",
            "wid": "wid1",
            "d":"44",
            "f":"6",
            "command":addcommand
        });
        var movecommand = {"db":"data", "collection":"", "datastore":""};
        executeArray.push({
            "executethis": "movewid",
            "wid": "wid1",
            "command":movecommand
        });
        execute(executeArray, function (err, res) {
            proxyprinttodiv(">> add command <<", addcommand, 17);
            proxyprinttodiv("add result ", res[0], 17);
            proxyprinttodiv(">> move command <<", movecommand, 17);
            proxyprinttodiv("move result ", res[1], 17);
        }); 
    }
    
    /*
        copywid1
    */
    exports.copywid1 = copywid1 = function copywid1(parameters, callback) {
        debuglevel = 17;
        eventappinstall();
        
        var addcommand = {"db":"test", "collection":"", "datastore":""};
        var executeArray = [];
        executeArray.push({
            "executethis": "updatewid",
            "wid": "wid1",
            "d":"44",
            "f":"6",
            "command":addcommand
        });
        var copycommand = {"db":"data", "collection":"", "datastore":"", "delete":true};
        executeArray.push({
            "executethis": "copywid",
            "wid": "wid1",
            "command":copycommand
        });
        execute(executeArray, function (err, res) {
            proxyprinttodiv(">> add command <<", addcommand, 17);
            proxyprinttodiv("add result ", res[0], 17);
            proxyprinttodiv(">> copy command <<", copycommand, 17);
            proxyprinttodiv("copy result ", res[1], 17);
            callback(err, res);
        }); 
    }

    exports.maincollection1test = maincollection1test = function maincollection1test(params,callback){
    execute([{
      "executethis":"addwidmaster",
      "wid":"wid1",
      "a":"b",
      "b":"2",
      "command":{"db":"", "collection":"maincollection1", "datastore":""}
      //"command":{"db":"test"}
    },{
      "executethis": "getwidmaster",
      "wid": "wid1"
    }],
    function (err, res) {
      proxyprinttodiv('Full results: ', res, 99);
      proxyprinttodiv('The wid1 record: ', res[1], 99);

      var result = logverify("testinheritdefault0_result", res[1], [{
        "wid": "author1",
        "metadata.method": "authordto",
        "name": "Alex",
        "age": "42"
      }]);

      callback(err, result);
    });
  };

  /*
        filterobjecttest1
        filterobject returns an object of only the differences
    */
    exports.filterobjecttest1 = function filterobjecttest1(parameters, callback) {
        debuglevel = 17;
        eventappinstall();

        var obj1 = {"a":"1","b":"2"}; 
        var obj2 = {"a":"1","b":"2"};

        filterobject(obj1, obj2, null, function(err, res){
            proxyprinttodiv("filterobjecttest1 filterobject res", res, 17);
            var actual_result = res;
            proxyprinttodiv("actual_result --", actual_result, 17);                           
            var expected_result = {};
            proxyprinttodiv("expected_result --", expected_result, 17);
            var result = logverify("filterobjecttest1_result", actual_result, expected_result);
            callback(err, result);
        });
    }

    exports.filterobjecttest2 = function filterobjecttest2(parameters, callback) {
        debuglevel = 17;
        eventappinstall();

        var obj1 = {"a":"1","b":"2"}; 
        var obj2 = {"b":"2", "c":"3"};
        var command = {"filterobject": {
                        "type":"match"
                        }}

        filterobject(obj1, obj2, command, function(err, res){
            proxyprinttodiv("filterobjecttest1 filterobject res", res, 17);
            var actual_result = res;
            proxyprinttodiv("actual_result --", actual_result, 17);                           
            var expected_result = {"b":"2"};
            proxyprinttodiv("expected_result --", expected_result, 17);
            var result = logverify("filterobjecttest1_result", actual_result, expected_result);
            callback(err, result);
        });
    }

    exports.filterobjecttest3 = function filterobjecttest3(parameters, callback) {
        debuglevel = 17;
        eventappinstall();

        var obj1 = {"a":"1","b":"2"}; 
        var obj2 = {"b":"2", "c":"3"};

        filterobject(obj1, obj2, null, function(err, res){
            proxyprinttodiv("filterobjecttest1 filterobject res", res, 17);
            var actual_result = res;
            proxyprinttodiv("actual_result --", actual_result, 17);                           
            var expected_result = {"a":"1","c":"3"};
            proxyprinttodiv("expected_result --", expected_result, 17);
            var result = logverify("filterobjecttest1_result", actual_result, expected_result);
            callback(err, result);
        });
    }