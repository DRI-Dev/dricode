// Common to All Routes here
// test page for testing the updateThis API
exports.echo = function(req, res) {
	sleep(1000);
    res.send({"message":"echo message"});
    res.end();
};

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}