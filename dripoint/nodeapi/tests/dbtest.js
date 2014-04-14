var superagent = require('superagent')
,config = require('../config-server.js')
, dao = require('../dao/mongo.js')
, expect = require('expect.js');

var config = require('../settings.js');

var TABLE_NAME = config.TABLE_NAME;

describe('DAO test layer', function(){
  
  // increase timeout set -- default is 2000ms too low for this scenario
  this.timeout(20000);


  // the request is for 'GetFromMongo' , witha a preexecute and postExecute method each
  it('process100', function(done){


    var requestObj = {"executethis":"process100"};
      superagent.put(config.SERVICE_URL+'executethis')
        .send(requestObj)
        .end(function(e, res){
          console.log(' ::: process100 ::: >>>>>>>>> '+JSON.stringify(res.body));
          expect(typeof res.body).to.eql('object');
          done();
          
        });
    });


  // the request is for 'GetFromMongo' , witha a preexecute and postExecute method each
  it('test99', function(done){


      var requestObj = {"executethis":"test99"};
      superagent.put(config.SERVICE_URL+'executethis')
        .send(requestObj)
        .end(function(e, res){
          console.log(' ::: test99 ::: >>>>>>>>> '+JSON.stringify(res.body));
          expect(typeof res.body).to.eql('object');
          done();
          
        });
  });


  it('addtest', function(done){

      dao.addtomongo({"wid":"test1","data":{"test1":"val1"}}, function (res){
        console.log(JSON.stringify(res));
        expect(typeof res).to.eql('object');
      });

    });


  it('gettest', function(done){

      dao.getfrommongo({"wid":"test1"},function (res){
        console.log(JSON.stringify(res));
        expect(typeof res).to.eql('object');
      });

    });


    it('querytest', function(done){

      dao.mongoquery({"wid":"test1"},function (res){
        console.log(JSON.stringify(res));
        expect(typeof res).to.eql('object');
      });

    });


    it('mongotest1', function(done){

      var requestObj = {"executethis":"mongotest1"};
        superagent.put(config.SERVICE_URL+'executethis')
          .send(requestObj)
          .end(function(e, res){

            expect(typeof res).to.eql('object');
            console.log(' ::: mongotest1 ::: >>>>>>>>> '+JSON.stringify(res.body));
            done();
            
          });
      });

    it('mongotest2', function(done){

      var requestObj = {"executethis":"mongotest2"};
      superagent.put(config.SERVICE_URL+'executethis')
        .send(requestObj)
        .end(function(e, res){

          expect(typeof res).to.eql('object');
          console.log(' ::: mongotest2 ::: >>>>>>>>> '+JSON.stringify(res.body));
          done();
          
        });
    });

    it('mongotest3', function(done){

      var requestObj = {"executethis":"mongotest3"};
      superagent.put(config.SERVICE_URL+'executethis')
        .send(requestObj)
        .end(function(e, res){

          expect(typeof res).to.eql('object');
          console.log(' ::: mongotest3 ::: >>>>>>>>> '+JSON.stringify(res.body));
          done();
          
        });
    });

    it('mongotest4', function(done){

      var requestObj = {"executethis":"mongotest4"};
      superagent.put(config.SERVICE_URL+'executethis')
        .send(requestObj)
        .end(function(e, res){

          expect(typeof res).to.eql('object');
          console.log(' ::: mongotest4 ::: >>>>>>>>> '+JSON.stringify(res.body));
          done();
          
        });
    });

    it('mongotest5', function(done){

      var requestObj = {"executethis":"mongotest5"};
      superagent.put(config.SERVICE_URL+'executethis')
        .send(requestObj)
        .end(function(e, res){

          expect(typeof res).to.eql('object');
          console.log(' ::: mongotest5 ::: >>>>>>>>> '+JSON.stringify(res.body));
          done();
          
        });
    });

    it('mongotest5', function(done){

      var requestObj = {"executethis":"mongotest5"};
      superagent.put(config.SERVICE_URL+'executethis')
        .send(requestObj)
        .end(function(e, res){

          expect(typeof res).to.eql('object');
          console.log(' ::: mongotest5 ::: >>>>>>>>> '+JSON.stringify(res.body));
          done();
          
        });
    });
    it('mongotest6', function(done){

      var requestObj = {"executethis":"mongotest6"};
      superagent.put(config.SERVICE_URL+'executethis')
        .send(requestObj)
        .end(function(e, res){

          expect(typeof res).to.eql('object');
          console.log(' ::: mongotest6 ::: >>>>>>>>> '+JSON.stringify(res.body));
          done();
          
        });
    });

    it('mongotest7', function(done){

      var requestObj = {"executethis":"mongotest7"};
      superagent.put(config.SERVICE_URL+'executethis')
        .send(requestObj)
        .end(function(e, res){

          expect(typeof res).to.eql('object');
          console.log(' ::: mongotest7 ::: >>>>>>>>> '+JSON.stringify(res.body));
          done();
          
        });
    });
    it('mongotest8', function(done){

      var requestObj = {"executethis":"mongotest8"};
      superagent.put(config.SERVICE_URL+'executethis')
        .send(requestObj)
        .end(function(e, res){

          expect(typeof res).to.eql('object');
          console.log(' ::: mongotest8 ::: >>>>>>>>> '+JSON.stringify(res.body));
          done();
          
        });
    });

    it('mongotest9', function(done){

      var requestObj = {"executethis":"mongotest9"};
      superagent.put(config.SERVICE_URL+'executethis')
        .send(requestObj)
        .end(function(e, res){

          expect(typeof res).to.eql('object');
          console.log(' ::: mongotest9 ::: >>>>>>>>> '+JSON.stringify(res.body));
          done();
          
        });
    });


    it('mongotest10', function(done){

      var requestObj = {"executethis":"mongotest10"};
      superagent.put(config.SERVICE_URL+'executethis')
        .send(requestObj)
        .end(function(e, res){

          expect(typeof res).to.eql('object');
          console.log(' ::: mongotest10 ::: >>>>>>>>> '+JSON.stringify(res.body));
          done();
          
        });
    });





    
     


});