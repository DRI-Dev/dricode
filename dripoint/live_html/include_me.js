
	(function checkmeout_a (parameters, callback) {
		var message = "Hello Mo";
		callback(null, message);
	})()



function get_me_data_type (parameters, callback) {
	var data = parameters.data;
	callback(null, (typeof data));
}