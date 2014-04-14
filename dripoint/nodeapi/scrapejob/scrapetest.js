var superagent = require('superagent')
,config = require('../config.js')
,filecheck = require('./scrape.js')
,expect = require('expect.js')
,fs = require('graceful-fs');

// cleanup helper method
function cleanup(o1, callback){
  // remove the added entry
  
}
 
describe('ScrapeJob test layer', function(){
  var id
  
  // increase timeout set -- default is 2000ms too low for this scenario
  this.timeout(50000);

  // GetFile method test --- retrieve from html by id
  it('getfile', function(done){

    var html = "<html>"
    html += "<body>123<br>345<br>897<div id='id1'>Lorem Ipsume</div></body></html>";

    // create temporory file  
    var filename = __dirname+'/'+'testfile.html';

    createFiles(filename,html); 

    var divId = "#id1";//Wid value

    var response = filecheck.GetFile(filename,divId);
      // .end(function(e, res){
      //   console.log('>>>>>>>>> '+JSON.stringify(res.body));
    expect(typeof response).to.eql('string');  
    expect(response).to.eql('Lorem Ipsume'); 
    // deleteFile(filename); 
    done();
  })




  // getAndProcessFile method test --- process files (depends on test-crash.html)
  it('getandprocessfile', function(done){

    // create temporory file  
    var filename = __dirname+'/dir/test-crash.html';
    var divId = "";//Wid value

    var fileContent = filecheck.GetFile(filename);

    console.log('dir '+filename);
    var response = filecheck.getAndProcessFile(fileContent,filename,filename,__dirname+'/dir');
      // .end(function(e, res){
    console.log('>>>>>>>>> '+JSON.stringify(response));
    expect(typeof response).to.eql('object');  
    expect(typeof response.processHtmlJson).to.eql('object');  
    expect(typeof response.addThisJson).to.eql('object');  
    // deleteFile(filename); 
    done();
  })
})



// logic to create new files whenever required
function createFiles(fileName, content){
  // Query the entry
  
  // console.log('file check '+fileName)
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

// logic to delete existing  files whenever required
function deleteFile(fileName){
  // Query the entry
  
  // console.log('file check '+fileName)
  if(!fs.existsSync(fileName)){
    fs.unlinkSync(fileName)
    console.log('successfully deleted '+ fileName);
  }else{
    
  }
}