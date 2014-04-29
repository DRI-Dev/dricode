// copyright (c) 2014 DRI
// This test uses a gojs
exports.rt1 = rt1 = function rt1(params, callback) {
	testclearstorage();
	// Set up the gojs object in local storage
	rogeri();
	// Check the results against the assertions
	params = logverify("readstartwid", "resultwid1", "startwid_get_result", "", "", {
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
	params = logverify("readstartwid", "resultwid2", "startwid_authordto", "", "", {
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
	params = logverify("readstartwid", "resultwid3", "startwid_dtonum_bookdto", "", "", {
		"booksdto.0.metadata.method": "booksdto",
		"booksdto.0.wid": "1",
		"booksdto.0.title": "none",
		"booksdto.0.pages": "00"
	});
	params = logverify("readstartwid", "resultwid4", "startwid_num_bookdto", "", "", {
		"0.metadata.method": "booksdto",
		"0.wid": "1",
		"0.title": "none",
		"0.pages": "00"
	});
	params = logverify("readstartwid", "resultwid5", "startwid_bookdto", "", "", {
		"metadata.method": "booksdto",
		"wid": "1",
		"title": "none",
		"pages": "00"
	});
	params = logverify("readstartwid", "resultwid6", "startwid_palettedto", "", "", {
		"metadata.method": "palettedto",
		"wid": "16",
		"widname": "joe_jamison",
		"category": "human",
		"subcategory": "author"
	});
	params = logverify("readstartwid", "resultwid7", "startwid_adddto", "", "", {
		"metadata.method": "adddto",
		"wid": "13",
		"actiondto.0.metadata.method": "actiondto",
		"actiondto.0.wid": "14",
		"actiondto.0.action": "none",
		"palettedto.0.metadata.method": "palettedto",
		"palettedto.0.wid": "16",
		"palettedto.0.widname": "joe_jamison",
		"palettedto.0.category": "human",
		"palettedto.0.subcategory": "author",
		"addfield.0.metadata.method": "addfield",
		"addfield.0.wid": "18",
		"addfield.0.fieldname": "name",
		"linkrules.0.metadata.method": "linkrules",
		"linkrules.0.wid": "20",
		"linkrules.0.linkclass": "1",
		"linkrules.0.min": "0",
		"linkrules.0.max": "10",
		"dfield.fieldname": "name",
		"dfield.display": "true",
		"dfield.editable": "true",
		"dfield.onreadactions": "none",
		"dfield.oneditactions": "pop_up_alert",
		"dfield.wid": "addfielddefault",
		"dfield.metadata.method": "defaultdto"
	});
	params = logverify("readstartwid", "resultwid8", "startwid_addfield", "", "", {
		"metadata.method": "addfield",
		"wid": "18",
		"fieldname": "name",
		"eldname": "name",
		"splay": "true",
		"itable": "true",
		"readactions": "none",
		"editactions": "pop_up_alert",
		"d": "addfielddefault",
		"tadata.method": "defaultdto"
	});
	params = logverify("readstartwid", "resultwid9", "startwid_actiondto", "", "", {
		"metadata.method": "actiondto",
		"wid": "14",
		"action": "none"
	});
	params = logverify("readstartwid", "resultwid10", "startwid_linkrules", "", "", {
		"metadata.method": "linkrules",
		"wid": "20",
		"linkclass": "1",
		"min": "0",
		"max": "10"
	});
	params = logverify("readstartwid", "resultwid11", "startwid_gojsobject", "", "", {});
	params = logverify("readstartwid", "resultwid12", "startwid_nodeDataArray", "", "", {});
	params = logverify("readstartwid", "resultwid13", "startwid_linkdataarray", "", "", {});
	params = logverify("readstartwid", "resultwid14", "startwid_leftarray", "", "", {});
	params = logverify("readstartwid", "resultwid15", "startwid_rightarray", "", "", {});
	params = logverify("readstartwid", "resultwid16", "startwid_bottomarray", "", "", {});
	params = logverify("readstartwid", "resultwid17", "startwid_toparray", "", "", {});
	return verifysummary("test_results");
	callback(err, params);
}

// Testb is a simple test: create a soundDTO and then get it.
// This is to test the dto portion of add/get. Teste is a 
// continuation of testb, in that a colorDTO is created, and 2 colorwids
// are created using the colorDTO. A get_color1 confirms the creation is
// successful.
exports.alphatt = alphatt = function alphatt(params, callback) {
	testb();
	teste();
	var x = test_results;
	if (callback instanceof Function) {
		var err;callback(err, x);
	} else {
		return x;
	}
}

exports.xtt = xtt = function xtt(params, callback) {
	test1();
	test2();
	test3();
	test4();
	test99();
	var x = verifysummary("test_results");
	if (callback instanceof Function) {
		var err;callback(err, x);
	} else {
		return x;
	}
}

// Call test99 with only pre func_c -- same result as t4
exports.test99 = test99 = function test99(params, callback) {
	testclearstorage();
	config = executetest("executethis", {
		"executethis": "mongoquery",
		"wid": "test1"
	}, "t99_output", "");
	params = logverify("unit_tests", "test99_result", "test99_output", "", "", {
		"d": "1",
		"g": "4",
		"h": "5"
	});
	callback(err, params);
}

// Call func_b with dothis
exports.ettestt7 = ettestt7 = function ettestt7(params, callback) {
	testclearstorage();
	// config = setconfig1();
	execute([{
		"executethis": "func_b",
		"c": "0",
		"d": "1",
		"e": "2"
	}],
	function (err, res) {
		res = logverify("unit_tests", "ettestt7_result", "", res[0][0], "",{
		"d": "1",
		"c": "0",
		"g": "4"
	});
	callback(err, params);
	});
}
// Call widb where widb does not exist as a function, or a parameter...but is a wid that can be loaded with executegetwid 
exports.t8 = t8 = function t8(params, callback) {
	testclearstorage();
	// config = setconfig1();
	executetest("addwidmaster", {
		"wid": "widb",
		"animal": "giraffe"
	}, "", "");
	executetest("executethis", {
		"executethis": "widb"
	}, "t8_output", "");
	params = logverify("unit_tests", "t8_result", "t8_output", "", "", {
		"animal": "giraffe"
	});
	callback(err, params);
}
// Call 
exports.t9 = t9 = function t9(params, callback) {
	testclearstorage();
	// config = setconfig1();
	executetest("addwidmaster", {
		"wid": "widb",
		"animal": "giraffe"
	}, "", "");
	executetest("executethis", {
		"executethis": "widb"
	}, "t9_output", "");
	params = logverify("unit_tests", "t9_result", "t9_output", "", "", {
		"animal": "giraffe"
	});
	callback(err, params);
}

// Call async_func_d that will, in turn, call async_func_e  
exports.ast7 = ast7 = function ast7(params, callback) {
	testclearstorage();
	// config = setconfig1();
	executetest("executethis", {
		"executethis": "async_func_d",
		"c": "0",
		"d": "1",
		"e": "2"
	}, "as_t7_output", "");
	params = logverify("as_unit_tests", "ast7_result", "ast7_output", "", "", {
		"c": "0",
		"h": "5"
	});
	callback(err, params);
}


exports.async_func_d = async_func_d = function async_func_d(parameters, callback) {
    var t = parameters["d"];
    parameters['executethis'] = 'async_func_e';
    parameters = executethis(parameters);
    sleep(500);
    if (parameters["d"] == t) parameters["d"] = t + ":added";
    delete parameters["e"];
    parameters["h"] = "5";
    var err;
    callback(err, parameters);
}

exports.async_func_e = async_func_e = function async_func_e(parameters) {
    sleep(500);
    // alert('func_e');
    delete parameters["d"];
    parameters["h"] = "7";
    return parameters;
}

exports.async_func_d1 = async_func_d1 = function async_func_d1(parameters) {
    parameters['executethis'] = 'async_func_e1';
    parameters = executethis(parameters, "execute");
    sleep(500);
    parameters["h"] = "5";
    return parameters;
    // callback (parameters);
}

exports.async_func_e1 = async_func_e1 = function async_func_e1(parameters, callback) {
    sleep(500);
    // alert('func_e1');
    parameters['executethis'] = 'async_func_f';
    parameters = executethis(parameters, execute);
    var err;
    callback(err, parameters);
    // return parameters;
}

exports.async_func_f = async_func_f = function async_func_f(parameters, callback) {
    sleep(500);
    // alert('func_f');
    parameters["rubies"] = "red";
    parameters['executethis'] = async_func_g;
    parameters = executethis(parameters, execute);
    var err;
    callback(err, parameters);
    // return parameters;
}

exports.async_func_g = async_func_g = function async_func_g(parameters, callback) {
    sleep(500);
    // alert('func_g');
    parameters["emeralds"] = "green";
    parameters['executethis'] = async_func_h;
    parameters = executethis(parameters, execute);
    var err;
    callback(err, parameters);
    // return parameters;
}

exports.async_func_h = async_func_h = function async_func_h(parameters, callback) {
    sleep(500);
    // alert('diamonds');
    parameters["diamonds"] = "you are rich!!";
    console.log('Struck diamonds -- five levels deep in executethis');
    var err;
    callback(err, parameters);
    // return parameters;
}







// Call async_func_d_1 that will, in turn, call async_func_e_1, and then async_func_f, async_func_g, and async_func_h.
// If the diamond makes out of async_func_h...it will show executethis can go five layers deep into et and return with a parameter
// to the as_t8_output...pretty cool 
exports.ast8 = ast8 = function ast8(params, callback) {
	testclearstorage();
	// config = setconfig1();
	executetest("executethis", {
		"executethis": "async_func_d1",
		"c": "0",
		"d": "1",
		"e": "2"
	}, "as_t8_output", "");
	params = logverify("as_unit_tests", "as_t8_result", "as_t8_output", "", "", {
		"c": "0",
		"d": "1",
		"e": "2",
		"rubies": "red",
		"emeralds": "green",
		"diamonds": "you are rich!!",
		"h": "5"
	});
	callback(err, params);
}

// test to see if nested configuration params are making it across to a mock server function
exports.cict1 = cict1 = function cict1(params, callback) {
	testclearstorage();
	config = setconfig2();
	executetest("executethis", {
		"executethis": "mock_server",
		"a": "1",
		"b": "2",
		"c": "3",
		"configuration": {
			"redir_a": [{
				"dothis": "func_a",
				"tryorder": 0,
				"executeorder": 0,
				"params": {}
			}],
			"redir_b": [{
				"dothis": "func_b",
				"tryorder": 0,
				"executeorder": 0,
				"params": {}
			}],
			"redir_c": [{
				"dothis": "func_c",
				"tryorder": 0,
				"executeorder": 0,
				"params": {}
			}]
		}
	}, "cic_t1_output", "");
	params = logverify("cic_unit_tests", "cic_t1_result", "cic_t1_output", "", "", {
		"a": "1",
		"b": "2",
		"c": "3",
		"configuration": {
			"login1": [{
				"executeorder": 0,
				"tryorder": 0,
				"dothis": "login",
				"params": {}
			}],
			"redir_a": [{
				"dothis": "func_a",
				"tryorder": 0,
				"executeorder": 0,
				"params": {}
			}],
			"redir_b": [{
				"dothis": "func_b",
				"tryorder": 0,
				"executeorder": 0,
				"params": {}
			}],
			"redir_c": [{
				"dothis": "func_c",
				"tryorder": 0,
				"executeorder": 0,
				"params": {}
			}]
		}
	});
	callback(err, params);
}

// mock_server resolves to this function
exports.cic_output = cic_output = function cic_output(params) {
	// alert(JSON.stringify(params));
	return params;
}

exports.other_func = other_func = function other_func(params, callback) {
	params['howtodooverride'] = 'you got your hottodooverwritten';
	window[params['executethis']](params, callback);
	var err;
	callback(err, params);
}

exports.ag1_setup = ag1_setup = function ag1_setup(params, callback) {
	// saveglobal("debugname", "get");
	// saveglobal("debugcat", "get");
	executetest("addwidmaster", {
		"wid": "sounddto",
		"metadata.method": "sounddto",
		"note": "string"
	}, "", "");
	executetest("getwidmaster", {
		"wid": "sounddto"
	}, "get_sounddto_result", "");
	console.log(' >>>>>> ' + params);
	callback(err, params);
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
exports.ag2_setup = ag2_setup = function ag2_setup(params, callback) {

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
	// saveglobal("debugcat", 'get');
	saveglobal("debugname", "getwidmongo"); //
	executetest("getwidmaster", {
		"wid": "color1"
	}, "get_color1_result", "");

	console.log(' >>>>>> ' + params);

	callback(err, params);
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
exports.ag3_setup = ag3_setup = function ag3_setup(params, callback) {
	debuglevel = 90;
	executetest("addwidmaster", {
		"wid": "sounddto",
		"metadata.method": "sounddto",
		"note": "string"
	}, "", "");
	executetest("addwidmaster", {
		"wid": "songdto",
		"metadata.method": "songdto",
		"title": "string",
		"sounddto": "onetomany"
	}, "", "");
	executetest("addwidmaster", {
		"wid": "rel_sound_to_song",
		"primarywid": "songdto",
		"secondarywid": "sounddto",
		"relationshiptype": "attributes"
	}, "", "");

	executetest("addwidmaster", {
		"wid": "song1",
		"metadata.method": "songdto",
		"title": "Highway to Hell",
		"sounddto.0.note": "A flat",
		"sounddto.1.note": "B sharp",
		"sounddto.2.note": "C flat"
	}, "", "");
	executetest("getwidmaster", {
		"wid": "song1"
	}, "get_song1_result", "");
	callback(err, params);
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
exports.ag4_setup = ag4_setup = function ag4_setup(params, callback) {
	executetest("addwidmaster", {
		"wid": "measuredto",
		"metadata.method": "measuredto",
		"duration": "string"
	}, "", "");
	executetest("addwidmaster", {
		"wid": "rel_measure_to_sound",
		"primarywid": "sounddto",
		"secondarywid": "measuredto",
		"relationshiptype": "attributes"
	}, "", "");
	executetest("addwidmaster", {
		"wid": "sounddto",
		"metadata.method": "sounddto",
		"note": "string"
	}, "", "");
	executetest("addwidmaster", {
		"wid": "songdto",
		"metadata.method": "songdto",
		"title": "string",
		"sounddto": "onetomany"
	}, "", "");
	executetest("addwidmaster", {
		"wid": "rel_sound_to_song",
		"primarywid": "songdto",
		"secondarywid": "sounddto",
		"relationshiptype": "attributes"
	}, "", "");

	executetest("addwidmaster", {
		"wid": "song1",
		"metadata.method": "songdto",
		"title": "Highway to Hell",
		"sounddto.0.note": "A flat",
		"sounddto.0.note.measuredto.0.duration": "quarter",
		"sounddto.1.note": "B sharp",
		"sounddto.2.note": "C flat",
	}, "", "");
	executetest("getwidmaster", {
		"wid": "song1"
	}, "get_song1_result", "");
	callback(err, params);
}

function aggressivedto_emulator(params, callback) {
	var myval = aggressivedto(params['x'], "", 10);
	callback(myval);
}
// This is a 3 level test where song1 will have data from a songdto, that uses a sounddto, and the sounddto will use a measuredto 
exports.ag4 = ag4 = function ag4(params, callback) {
	// config = setconfig1();
	testclearstorage();
	ag4_setup();
	executetest("aggressivedto_emulator", {
		"x": "songdto"
	}, "aggressive_result", "");
	params = logverify("alpha_unit_tests", "ag4_result", "aggressive_result", "", "", {
		"title": "string",
		"sounddto": "onetomany",
		"wid": "songdto",
		"metadata.method": "songdto",
		"sounddto.note": "string",
		"sounddto.wid": "sounddto",
		"sounddto.metadata.method": "sounddto",
		"sounddto.measuredto.duration": "string",
		"sounddto.measuredto.wid": "measuredto",
		"sounddto.measuredto.metadata.method": "measuredto"
	});
	callback(err, params);



}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
exports.ag5_setup = ag5_setup = function ag5_setup(params, callback) {
	executetest("addwidmaster", {
		"wid": "measuredto",
		"metadata.method": "measuredto",
		"duration": "string"
	}, "", "");
	executetest("addwidmaster", {
		"wid": "rel_measure_to_sound",
		"primarywid": "sounddto",
		"secondarywid": "measuredto",
		"relationshiptype": "attributes"
	}, "", "");
	executetest("addwidmaster", {
		"wid": "sounddto",
		"metadata.method": "sounddto",
		"note": "string"
	}, "", "");
	executetest("addwidmaster", {
		"wid": "songdto",
		"metadata.method": "songdto",
		"title": "string",
		"sounddto": "onetomany"
	}, "", "");
	executetest("addwidmaster", {
		"wid": "rel_sound_to_song",
		"primarywid": "songdto",
		"secondarywid": "sounddto",
		"relationshiptype": "attributes"
	}, "", "");

	callback(err, params);



}

function aggressivedto_emulator(params, callback) {

	aggressivedto(params['x'], "", 10, function (err, res) {
		var myval = res;
		callback(myval);
	});
}
// This is a 3 level test where song1 will have data from a songdto, that uses a sounddto, and the sounddto will use a measuredto 
exports.ag5 = ag5 = function ag5(params, callback) {
	// config = setconfig1();
	testclearstorage();
	ag5_setup();
	executetest("aggressivedto_emulator", {
		"x": "songdto"
	}, "aggressive_result", "");
	params = logverify("alpha_unit_tests", "ag5_result", "aggressive_result", "", "", {});
	callback(err, params);
}

exports.qq1_setup = qq1_setup = function qq1_setup(params, callback) {
	executetest("updatewid", {
		"wid": "songdto",
		"metadata.method": "songdto",
		"title": "string"
	}, "", "");
	executetest("updatewid", {
		"wid": "notedto",
		"metadata.method": "notedto",
		"note": "string"
	}, "", "");
	executetest("updatewid", {
		"wid": "measuredto",
		"metadata.method": "measuredto",
		"length": "string"
	}, "", "");

	executetest("updatewid", {
		"wid": "rel_song_to_note",
		"primarywid": "songdto",
		"secondarywid": "notedto",
		"relationshiptype": "attributes"
	}, "", "");
	executetest("updatewid", {
		"wid": "rel_note_to_measure",
		"primarywid": "notedto",
		"secondarywid": "measuredto",
		"relationshiptype": "attributes"
	}, "", "");

	// executetest("getwidmaster", {"wid":"sounddto"}, "get_sounddto_result", "");
	callback(err, params);
}

exports.qq1 = qq1 = function qq1(params, callback) {
	config = setconfig5();
	testclearstorage();
	execute([{
		"executethis": "updatewid", 
		"wid": "songdto",
		"metadata.method": "songdto",
		"title": "string"
	}, 
	{   "executethis": "updatewid", 
		"wid": "notedto",
		"metadata.method": "notedto",
		"note": "string"
	}, 
	{   "executethis": "updatewid",
		"wid": "measuredto",
		"metadata.method": "measuredto",
		"length": "string"
	}, 
	{	"executethis": "updatewid", 
		"wid": "rel_song_to_note",
		"primarywid": "songdto",
		"secondarywid": "notedto",
		"relationshiptype": "attributes"
	}, 
	{	"executethis": "updatewid", 
		"wid": "rel_note_to_measure",
		"primarywid": "notedto",
		"secondarywid": "measuredto",
		"relationshiptype": "attributes"
	},
	// {	"executethis": "mongoquery", 
	{	"executethis": "querywid", 
		"mongorawquery": '{"$and":[{"data.primarywid": "songdto"}, {"data.secondarywid": "notedto"}]}'
		// "wid":"rel_song_to_note"
	}],
	function (err, res) {
	res = logverify("unit_tests", "qq1_result", "", res[5][0], "",{
			"wid":"rel_song_to_note",
			"metadata.method":"",
			"relationshiptype":"attributes",
			"secondarywid":"notedto",
			"primarywid":"songdto"
	});
	callback(err, params);
	});
}

exports.getwidtest = getwidtest = function getwidtest(params, callback) {
	config = setconfig1();
	testclearstorage();
	executethis({'executethis':'getwid', wid: 'test1'});
	// callback(err, params);
}

exports.updatewidtest = updatewidtest = function updatewidtest(params, callback) {
	executetest('updatewid', {
		wid: 'test1',
		this: 'that',
		something: 'else'
	}, '', '');
	callback(err, params);
}

exports.jasontesta = jasontesta = function jasontesta(params, callback) {
	executetest('updatewid', {
		wid: 'jasontestwid',
		this: 'that',
		something: 'else'
	}, '', '');
	executetest('getwid', {
		wid: 'jasontestwid'
	});
	callback(err, params);
}

exports.jasontestb = jasontestb = function jasontestb(params, callback) {
	executetest('addwidmaster', {
		wid: 'jasontestwid5',
		testnum: '5',
		black: 'white',
		pair: '3'
	});
	executetest('getwidmaster', {
		wid: 'jasontestwid5'
	});
	callback(err, params);
}

exports.testa = testa = function testa(params, callback) {
	// executetest("test2",{"wid":"colordto"}, "blue", "");
	// executetest("test2",{"wid":"colordto"}, "", "");
	// the above 2 work as of oct 30
	// 
	//executetest("test4",{"wid":"colordto"}, "", "");
	// the above works as of oct 30
	executetest("addwidmaster", {
		"wid": "colordto",
		"metadata.method": "colordto",
		"hue": "string"
	}, "", "");
	// executetest("updatewid",{"wid":"colordto","metadata.method":"colordto","hue":"string"}, "", "");
	executetest("updatewid", {
		"wid": "color1",
		"hue": "red"
	}, "", "");
	executetest("addwidmaster", {
		"wid": "color2",
		"hue": "blue",
		"metadata.method": "colordto"
	}, "", "");
	// executetest("getwidmaster", {"wid":"color1"}, "", "");	
	//		params = logverify("this_test","test_result","actual","","",aalStorage("assertion"));
	callback(err, params);
}

exports.testb_setup = testb_setup = function testb_setup(params, callback) {
	executetest("addwidmaster", {
		"wid": "sounddto",
		"metadata.method": "sounddto",
		"note": "string"
	}, "", "");
	executetest("getwidmaster", {
		"wid": "sounddto"
	}, "get_sounddto_result", "");
	callback(err, params);
}

exports.testc_setup = testc_setup = function testc_setup(params, callback) {
	// executetest("addwidmaster",{"wid":"colordto","metadata.method":"colordto","hue":"string"}, "", "");
	executetest("addwidmaster", {
		"wid": "color1",
		"hue": "red"
	}, "", "");
	callback(err, params);
}

exports.testd_setup = testd_setup = function testd_setup(params, callback) {
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
	callback(err, params);
}

exports.teste_setup = teste_setup = function teste_setup(params, callback) {
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
	callback(err, params);
}

exports.testg_setup = testg_setup = function testg_setup(params, callback) {
	executetest("addwidmaster", {
		"wid": "defaultforauthor",
		"name": "roger"
	});
	callback(err, params);
}

exports.testh_setup = testh_setup = function testh_setup(params, callback) {
	executetest("addwidmaster", {
		"wid": "defaultforauthor",
		"name": "roger",
		"metadata.method": "test"
	});
	executetest("getwidmaster", {
		"wid": "defaultforauthor"
	}, "get_color1_result", "");
	callback(err, params);
}
exports.testi_setup = testi_setup = function testi_setup(params, callback) {
	executetest("addwidmaster", {
		"wid": "sounddto",
		"metadata.method": "sounddto",
		"note": "string"
	}, "", "");
	// executetest("addwidmaster",{"wid":"colordto","metadata.method":"colordto","hue":"string","sounddto":"onetomany"}, "", "");
	// executetest("addwidmaster",{"wid":"color1","hue":"red","metadata.method":"colordto"}, "", "");
	// executetest("addwidmaster",{"metadata.method":"gojsrel3","wid":"color_sound_relationship","primarywid":"sounddto","secondarywid":"colordto","relationshiptype":"attributes","metadata.method":"relationshipdto"}, "", "");

	// executetest("getwidmaster", {"wid":"sounddto"}, "get_sounddto_result", "");
	callback(err, params);
}
// This will test the ability to write a dto to the db and retrieve it
exports.testb = testb = function testb(params, callback) {
	var err;
	config = setconfig1();
	testclearstorage();
	testb_setup();

	saveglobal("debugname", "addwid");
	saveglobal("debugcat", "add");
	saveglobal("debugsubcat", "core");
	saveglobal("debugfilter", "all");
	saveglobal("debugdestination", "print");

	params = logverify("alphagetwidmaster_unit_tests", "testb_result", "get_sounddto_result", "", "", {
		"note": "string",
		"wid": "sounddto",
		"metadata.method": "sounddto"
	});
	callback(err, params);



	// return verifysummary("test_results");
}
// This will test the ability to write a wid to the db and use executegetwid to retrieve it
// ----this fails...all it returns is {"wid":"color1"}, not the data and method
exports.testc = testc = function testc(params, callback) {
	config = setconfig1();
	testclearstorage();
	testc_setup();
	executetest("executegetwid", {
		"wid": "color1"
	}, "get_color1_result", "");
	params = logverify("alphagetwidmaster_unit_tests", "testc_result", "testc_result", "", "", {
		"hue": "red",
		"wid": "color1",
		"metadata.method": "sounddto"
	});
	callback(err, params);



}
// This will test the ability to write a dto to the db, use that dto to write
// a wid with that dto, and get the results of getting that wid.
exports.teste = teste = function teste(params, callback) {
	config = setconfig1();
	testclearstorage();
	teste_setup();
	params = logverify("alpha_unit_tests", "teste_result", "get_color1_result", "", "", {
		"hue": "red",
		"wid": "color1",
		"metadata.method": "defaultdto"
	});
	callback(err, params);



}

exports.testf = testf = function testf(params, callback) {
	config = setconfig1();
	testclearstorage();
	etexecutetest("addwidmaster", {
		"wid": "sounddto",
		"metadata.method": "sounddto",
		"note": "string"
	}, "", "");
	executetest("getwidmaster", {
		"wid": "sounddto"
	}, "get_sounddto_result", "");
	params = logverify("alpha_unit_tests", "testf_result", "get_color1_result", "", "", {
		"hue": "red",
		"wid": "color1",
		"metadata.method": "defaultdto"
	});
	callback(err, params);



	// return verifysummary("test_results");
}


exports.testf = testf = function testf(params, callback) {
	testclearstorage();
	config = setconfig1();
	var parameters = {};
	parameters["wid"] = "green";
	parameters['executethis'] = addwidmaster;
	var abc = executethis(parameters);
	var jkl = executethis(parameters, execute);
	parameters["wid"] = "yellow";
	parameters['executethis'] = "addwidmaster";
	var mno = executethis(parameters, execute);
	delete parameters['executethis'];
	parameters["wid"] = "blue";
	var def = executethis(parameters, addwidmaster);
	parameters["wid"] = "red";
	var ghi = 'boo'; //executethis(parameters, "addwidmaster");
	executetest("addwidmaster", {
		"wid": "different_add_wids",
		"a": abc,
		"b": def,
		"a": ghi
	}, "testf_output", "");
	params = logverify("unit_tests", "testf_result", "testf_output", "", "", {
		"f": "3",
		"g": "4",
		"h": "5"
	});
	// params = logverify("readstartwid","resultwid","startwid_authordto" ,"","",{"age":"00","name":"start wid","wid":"startwid","metadata.method":"authordto","booksdto.0.metadata.method":"booksdto","booksdto.0.wid":"1","booksdto.0.title":"none","booksdto.0.pages":"00","adddto.0.metadata.method":"adddto","adddto.0.wid":"13","adddto.0.actiondto.0.metadata.method":"actiondto","adddto.0.actiondto.0.wid":"14","adddto.0.actiondto.0.action":"none","adddto.0.palettedto.0.metadata.method":"palettedto","adddto.0.palettedto.0.wid":"16","adddto.0.palettedto.0.widname":"joe_jamison","adddto.0.palettedto.0.category":"human","adddto.0.palettedto.0.subcategory":"author","adddto.0.addfield.0.metadata.method":"addfield","adddto.0.addfield.0.wid":"18","adddto.0.addfield.0.fieldname":"name","adddto.0.linkrules.0.metadata.method":"linkrules","adddto.0.linkrules.0.wid":"20","adddto.0.linkrules.0.linkclass":"1","adddto.0.linkrules.0.min":"0","adddto.0.linkrules.0.max":"10","adddto.addfield.fieldname":"name","adddto.addfield.display":"true","adddto.addfield.editable":"true","adddto.addfield.onreadactions":"none","adddto.addfield.oneditactions":"pop_up_alert","adddto.addfield.wid":"addfielddefault","adddto.addfield.metadata.method":"defaultdto"});
	callback(err, params);



}

exports.testf_fail = testf_fail = function testf_fail(params, callback) {
	testclearstorage();
	config = setconfig1();
	var parameters = {};
	// parameters ["wid"] = "green";
	// parameters ['executethis'] = addwidmaster;
	// var abc = executethis(parameters);
	// delete parameters['executethis'];
	// parameters ["wid"] = "blue";
	// var def = executethis(parameters, addwidmaster);
	parameters["wid"] = "red";
	var ghi = executethis(parameters, "addwidmaster");
	executetest("addwidmaster", {
		"wid": "different_add_wids",
		"a": abc,
		"b": def,
		"a": ghi
	}, "testf_output", "");
	params = logverify("unit_tests", "testf_result", "testf_output", "", "", {
		"executethis": "func_c",
		"f": "3",
		"g": "4",
		"h": "5"
	});
	// params = logverify("readstartwid","resultwid","startwid_authordto" ,"","",{"age":"00","name":"start wid","wid":"startwid","metadata.method":"authordto","booksdto.0.metadata.method":"booksdto","booksdto.0.wid":"1","booksdto.0.title":"none","booksdto.0.pages":"00","adddto.0.metadata.method":"adddto","adddto.0.wid":"13","adddto.0.actiondto.0.metadata.method":"actiondto","adddto.0.actiondto.0.wid":"14","adddto.0.actiondto.0.action":"none","adddto.0.palettedto.0.metadata.method":"palettedto","adddto.0.palettedto.0.wid":"16","adddto.0.palettedto.0.widname":"joe_jamison","adddto.0.palettedto.0.category":"human","adddto.0.palettedto.0.subcategory":"author","adddto.0.addfield.0.metadata.method":"addfield","adddto.0.addfield.0.wid":"18","adddto.0.addfield.0.fieldname":"name","adddto.0.linkrules.0.metadata.method":"linkrules","adddto.0.linkrules.0.wid":"20","adddto.0.linkrules.0.linkclass":"1","adddto.0.linkrules.0.min":"0","adddto.0.linkrules.0.max":"10","adddto.addfield.fieldname":"name","adddto.addfield.display":"true","adddto.addfield.editable":"true","adddto.addfield.onreadactions":"none","adddto.addfield.oneditactions":"pop_up_alert","adddto.addfield.wid":"addfielddefault","adddto.addfield.metadata.method":"defaultdto"});
	callback(err, params);



}
// To test executethis by sending a function
exports.testg = testg = function testg(params, callback) {
	testclearstorage();
	config = setconfig1();
	var parameters = {
		"wid": "green",
		"executethis": addwidmaster
	};
	var abc = executethis(parameters);
	executetest("addwidmaster", {
		"this_wid_was_added": abc
	}, "testg_output", "");
	params = logverify("unit_tests", "testg_result", "testg_output", "", "", {
		"f": "3",
		"g": "4",
		"h": "5"
	});
	callback(err, params);



}
// This test passes since execute is not in quotes
exports.testh = testh = function testh() {
	testclearstorage();
	config = setconfig1();
	var parameters = {
		"executethis": addwidmaster,
		"wid": "green"
	};
	var abc = executethis(parameters, execute);
	executetest("addwidmaster", {
		"this_wid_was_added": abc
	}, "testh_output", "");
	params = logverify("unit_tests", "testh_result", "testh_output", "", "", {
		"f": "3",
		"g": "4",
		"h": "5"
	});
	if (callback instanceof Function) {
		var err;
		callback(err, params);
		getwidmaster
	} else {
		return params;
	}
}
// This test fails since execute is in quotes
exports.testi = testi = function testi(params, callback) {
	testclearstorage();
	config = setconfig1();
	var parameters = {
		"executethis": addwidmaster,
		"wid": "green"
	};
	var abc = executethis(parameters, "execute");
	executetest("addwidmaster", {
		"this_wid_was_added": abc
	}, "testi_output", "");
	params = logverify("unit_tests", "testi_result", "testi_output", "", "", {
		"f": "3",
		"g": "4",
		"h": "5"
	});
	callback(err, params);



}
// This test tries to call executeparam
exports.testj = testj = function testj(params, callback) {
	testclearstorage();
	config = setconfig1();

	var parameters = {
		"executethis": executeparam,
		"wid": "green"
	};
	var abc = executethis(parameters, "execute");
	executetest("addwidmaster", {
		"this_wid_was_added": abc
	}, "testi_output", "");
	params = logverify("unit_tests", "testi_result", "testi_output", "", "", {
		"f": "3",
		"g": "4",
		"h": "5"
	});

	callback(err, params);
}



// This will test the ability to have a relationship between 2 wids and use that
// relationship to get the related wids.

//------------------------
exports.ex1 = ex1 = function ex1() {
	var data = null;
	data = func_a({
		"d": "1",
		"e": "2"
	});
	data = func_b(data);
	data = func_c(data);
	return data;
}

exports.ex3 = ex3 = function ex3() {
	var data = null;
	data = {
		"executethis": "func_a",
		"d": "1",
		"e": "2"
	};
	data = executethis(data);
	data['executethis'] = 'func_b';
	data = executethis(data);
	return data;
}

exports.ex4 = ex4 = function ex4() {
	var data = null;
	data = {
		"executethis": "func_a",
		"d": "1",
		"e": "2"
	};
	data = executethis(data);

	data['executethis'] = 'func_b';
	data = executethis(data);

	data['executethis'] = 'func_c';
	data = executethis(data);
	return data;
}

exports.ex5 = ex5 = function ex5() {
	var data = null;
	data = {
		"executethis": "func_a",
		"d": "1",
		"e": "2"
	};
	data = execute(data, callback);
	return data;
}

exports.func_f = func_f = function func_f(parameters, callback) {
	delete parameters["d"];
	parameters["l"] = "you hijacked preexecute...cool";
	printToDiv('func_f', parameters, 1);
	var err;callback(err, parameters);
}

exports.func_g = func_g = function func_g(parameters, callback) {
	delete parameters["d"];
	parameters["l"] = "you hijacked preexecute...cool";
	//func_h (parameters,  callback);
	printToDiv('func_g', parameters, 1);
	callback(func_h(parameters, callback));
}

exports.func_h = func_h = function func_h(parameters, callback) {
	delete parameters["d"];
	sleep(1000);
	parameters["m"] = "now you waited for 1000 ms";
	printToDiv('func_h', parameters, 1);
	// var err;callback(err, parameters);
	target(parameters);
}

exports.func_j = func_j = function func_j(parameters, callback) {
	delete parameters["d"];
	parameters["j"] = "you hijacked preexecute...hot";
	printToDiv('func_j', parameters, 1);
	var err;callback(err, parameters);
}

exports.func_k = func_k = function func_k(parameters, callback) {
	delete parameters["d"];
	parameters["j"] = "did this happen last";
	printToDiv('func_k', parameters, 1);
	var err;callback(err, parameters);
}

exports.func_m = func_m = function func_m(parameters) {
	delete parameters["d"];
	parameters["m"] = "single parameters";
	printToDiv('func_m', parameters, 1);
	// return executethis(parameters,'func_h');
	return executethis(parameters, 'func_async');
}

exports.pt2 = pt2 = function pt2(params, callback) {
	config = setconfig3();
	executetest("executethis", {
		"executethis": "func_b",
		"c": "0",
		"d": "1",
		"e": "2",
		"preexecute": "func_a",
		"postexecute": "func_c"
	}, "pt2_output", "");
	params = logverify("unit_tests", "pt2_result", "pt2_output", "", "", {
		"f": "3",
		"g": "4",
		"h": "5"
	});
}

exports.pt3 = pt3 = function pt3(params, callback) {
	config = setconfig1();
	executetest("executethis", {
		"preexecute": "func_j",
		"postexecute": "func_f",
		"executethis": "func_g",
		"c": "0",
		"d": "1",
		"e": "2"
	}, "pt3_output", "");
	executetest("executethis", {
		"executethis": "func_k",
		"x": "0",
		"y": "1",
		"z": "2"
	}, "pt4_output", "");
	params = logverify("unit_tests", "pt3_result", "pt3_output", "", "", {
		"f": "3",
		"g": "4",
		"h": "5"
	});
}

exports.pt4 = pt4 = function pt4(params, callback) {
	config = setconfig3();
	executetest("executethis", {
		"executethis": "func_b",
		"c": "0",
		"d": "1",
		"e": "2",
		"preexecute": "func_a",
		"postexecute": "func_c"
	}, "pt2_output", "");
	params = logverify("unit_tests", "pt2_result", "pt2_output", "", "", {
		"f": "3",
		"g": "4",
		"h": "5"
	});
}

exports.pt5 = pt5 = function pt5(params, callback) {
	config = setconfig3();
	executetest("executethis", {
		"executethis": "func_m",
		"c": "0",
		"d": "1",
		"e": "2",
		"preexecute": "testa",
		"postexecute": "testc"
	}, "pt5_output", "");
	// params = logverify("unit_tests","pt5_result","pt5_output","","",{"f":"3","g":"4","h":"5"});
}

exports.q1 = q1 = function q1(params, callback) {
	executetest("addwidmaster", {
		"metadata.method": "actiondto",
		"wid": "actiondto",
		"action": "string"
	}, "", "");
}

exports.rogeri = rogeri = function rogeri(params, callback) {
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
	}, "startwid_num_bookdto", "");
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
}

// 888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
// 888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
// 888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888

exports.ag5_setup = ag5_setup = function ag5_setup(params, callback) {
	// saveglobal("debugname", "get");
	// saveglobal("debugcat", "get");

	execute([{
		"executethis": "addwidmaster",
		"wid": "sounddto",
		"metadata.method": "sounddto",
		"note": "string"
	}, {
		"executethis": "getwidmaster",
		"wid": "sounddto"
	}], callback);

}

// This will test the ability to write a dto to the db and retrieve it
exports.ag5 = ag5 = function ag5(params, callback) {
	// config = setconfig1();
	testclearstorage();
	params = logverify("alphagetwidmaster_unit_tests", "ag5_result", "get_sounddto_result", "", "", {
		"note": "string",
		"wid": "sounddto",
		"metadata.method": "sounddto"
	});
	ag5_setup(params, function (res) {

		console.log(' in test ag5 >>>>>> ' + JSON.stringify(res));

		if (callback instanceof Function) {
			callback(res);
		} else {
			return res;
		}
	});
	// return verifysummary("test_results");
}

exports.ag6a = ag6a = function ag6a(params, callback) {
	// config = setconfig1();
	testclearstorage();


	execute([{
		"executethis": "updatewid",
		"wid": "test1",
		"metadata.method": "test1method",
		"test1note": "string"
	}, {
		"executethis": "getwid",
		"wid": "test1"
	}], function (res) {
		// console.log(' in test ag6 >>>>>> ' + JSON.stringify(res));

		if (callback instanceof Function) {
			callback(res);
		} else {
			return res;
		}
	});
	// return verifysummary("test_results");
}

exports.ag6b = ag6b = function ag6b(params, callback) {
	config = setconfig5();
	testclearstorage();

	execute([{
		"executethis": "updatewid",
		"wid": "test1",
		"metadata.method": "test1method",
		"test1note": "string"
	}, {
		"executethis": "getwid",
		"wid": "test1"
	}], function (res) {

		if (callback instanceof Function) {
			callback(res);
		} else {
			return res;
		}
	});
	// return verifysummary("test_results");
}

exports.ag6c = ag6c = function ag6c(params, callback) {
	execute([{
		"executethis": "updatewid",
		"wid": "test1",
		"metadata.method": "test1method",
		"test1note": "string"
	}, {
		"executethis": "getwid",
		"wid": "test1"
	}], function (res) {
		console.log(' in test ag6c >>>>>> ' + JSON.stringify(res));

		if (callback instanceof Function) {
			callback(res);
		} else {
			return res;
		}
	});
	// return verifysummary("test_results");
}


// add 10 wids using updatewid, display 10 wids using getwid(one by one)
exports.ag7 = ag7 = function ag7(params, callback) {
	// config = setconfig1();
	testclearstorage();


	execute([{
		"executethis": "updatewid",
		"wid": "text1",
		"metadata.method": "test1method",
		"test1note": "string"
	}, {
		"executethis": "updatewid",
		"wid": "text2",
		"metadata.method": "test2method",
		"test1note": "string"
	}, {
		"executethis": "updatewid",
		"wid": "text3",
		"metadata.method": "test3method",
		"test1note": "string"
	}, {
		"executethis": "updatewid",
		"wid": "text4",
		"metadata.method": "test4method",
		"test1note": "string"
	}, {
		"executethis": "updatewid",
		"wid": "text5",
		"metadata.method": "test5method",
		"test1note": "string"
	}, {
		"executethis": "updatewid",
		"wid": "text6",
		"metadata.method": "test6method",
		"test1note": "string"
	}, {
		"executethis": "updatewid",
		"wid": "text7",
		"metadata.method": "test7method",
		"test1note": "string"
	}, {
		"executethis": "updatewid",
		"wid": "text8",
		"metadata.method": "test8method",
		"test1note": "string"
	}, {
		"executethis": "updatewid",
		"wid": "text9",
		"metadata.method": "test9method",
		"test1note": "string"
	}, {
		"executethis": "updatewid",
		"wid": "text10",
		"metadata.method": "test10method",
		"test1note": "string"
	}, {
		"executethis": "getwid",
		"wid": "text1"
	}, {
		"executethis": "getwid",
		"wid": "text2"
	}, {
		"executethis": "getwid",
		"wid": "text3"
	}, {
		"executethis": "getwid",
		"wid": "text4"
	}, {
		"executethis": "getwid",
		"wid": "text5"
	}, {
		"executethis": "getwid",
		"wid": "text6"
	}, {
		"executethis": "getwid",
		"wid": "text7"
	}, {
		"executethis": "getwid",
		"wid": "text8"
	}, {
		"executethis": "getwid",
		"wid": "text9"
	}, {
		"executethis": "getwid",
		"wid": "text10"
		// },{
		// 	"executethis": "removefrommongo",
		// 	"wid": {"$or":[{"wid":"text1"},{"wid":"text2"},{"wid":"text3"},{"wid":"text4"},{"wid":"text5"},{"wid":"text6"},{"wid":"text7"},{"wid":"text8"},{"wid":"text9"},{"wid":"text10"}]}
	}], function (res) {
		// console.log(' in test ag6 >>>>>> ' + JSON.stringify(res));

		if (callback instanceof Function) {
			callback(res);
		} else {
			return res;
		}
	});
	// return verifysummary("test_results");
}



// add 1 wids using updatewid, display 1 wids using getfrommongo
exports.ag8 = ag8 = function ag8(params, callback) {
	// config = setconfig1();
	testclearstorage();


	execute([{
		"executethis": "updatewid",
		"wid": "text1",
		"metadata.method": "test1method",
		"test1note": "string"
	}, {
		"executethis": "getfrommongo",
		"wid": "text1"
		// },{
		// 	"executethis": "removefrommongo",
		// 	"wid": {"$or":[{"wid":"text1"},{"wid":"text2"},{"wid":"text3"},{"wid":"text4"},{"wid":"text5"},{"wid":"text6"},{"wid":"text7"},{"wid":"text8"},{"wid":"text9"},{"wid":"text10"}]}
	}], function (res) {
		// console.log(' in test ag6 >>>>>> ' + JSON.stringify(res));

		if (callback instanceof Function) {
			callback(res);
		} else {
			return res;
		}
	});
	// return verifysummary("test_results");
}


// add 10 wids using updatewid, display 10 wids using getfrommongo(one by one)
exports.ag9 = ag9 = function ag9(params, callback) {
	// config = setconfig1();
	testclearstorage();


	execute([{
		"executethis": "updatewid",
		"wid": "text1",
		"metadata.method": "test1method",
		"test1note": "string"
	}, {
		"executethis": "updatewid",
		"wid": "text2",
		"metadata.method": "test2method",
		"test1note": "string"
	}, {
		"executethis": "updatewid",
		"wid": "text3",
		"metadata.method": "test3method",
		"test1note": "string"
	}, {
		"executethis": "updatewid",
		"wid": "text4",
		"metadata.method": "test4method",
		"test1note": "string"
	}, {
		"executethis": "updatewid",
		"wid": "text5",
		"metadata.method": "test5method",
		"test1note": "string"
	}, {
		"executethis": "updatewid",
		"wid": "text6",
		"metadata.method": "test6method",
		"test1note": "string"
	}, {
		"executethis": "updatewid",
		"wid": "text7",
		"metadata.method": "test7method",
		"test1note": "string"
	}, {
		"executethis": "updatewid",
		"wid": "text8",
		"metadata.method": "test8method",
		"test1note": "string"
	}, {
		"executethis": "updatewid",
		"wid": "text9",
		"metadata.method": "test9method",
		"test1note": "string"
	}, {
		"executethis": "updatewid",
		"wid": "text10",
		"metadata.method": "test10method",
		"test1note": "string"
	}, {
		"executethis": "getfrommongo",
		"wid": "text1"
	}, {
		"executethis": "getfrommongo",
		"wid": "text2"
	}, {
		"executethis": "getfrommongo",
		"wid": "text3"
	}, {
		"executethis": "getfrommongo",
		"wid": "text4"
	}, {
		"executethis": "getfrommongo",
		"wid": "text5"
	}, {
		"executethis": "getfrommongo",
		"wid": "text6"
	}, {
		"executethis": "getfrommongo",
		"wid": "text7"
	}, {
		"executethis": "getfrommongo",
		"wid": "text8"
	}, {
		"executethis": "getfrommongo",
		"wid": "text9"
	}, {
		"executethis": "getfrommongo",
		"wid": "text10"
		// },{
		// 	"executethis": "removefrommongo",
		// 	"wid": {"$or":[{"wid":"text1"},{"wid":"text2"},{"wid":"text3"},{"wid":"text4"},{"wid":"text5"},{"wid":"text6"},{"wid":"text7"},{"wid":"text8"},{"wid":"text9"},{"wid":"text10"}]}
	}], function (res) {
		// console.log(' in test ag6 >>>>>> ' + JSON.stringify(res));

		if (callback instanceof Function) {
			callback(res);
		} else {
			return res;
		}
	});
	// return verifysummary("test_results");
}


// add 1 wids using updatewid, display 1 wids using getwid
exports.ag10 = ag10 = function ag10(params, callback) {
	// config = setconfig1();
	testclearstorage();


	execute([{
		"executethis": "updatewid",
		"wid": "getwidtext11",
		"2": "21",
		"3": "31",
		"metadata.method": "test1method",
		"test1note": "string"
	}, {
		"executethis": "getwid",
		"wid": "getwidtext11"
		// },{
		// 	"executethis": "removefrommongo",
		// 	"wid": {"$or":[{"wid":"text1"},{"wid":"text2"},{"wid":"text3"},{"wid":"text4"},{"wid":"text5"},{"wid":"text6"},{"wid":"text7"},{"wid":"text8"},{"wid":"text9"},{"wid":"text10"}]}
	}], function (res) {
		// console.log(' in test ag6 >>>>>> ' + JSON.stringify(res));

		if (callback instanceof Function) {
			callback(res);
		} else {
			return res;
		}
	});
	// return verifysummary("test_results");
}



// add 1 wids using addwidmaster, display 1 wids using getwidmaster
exports.ag11a = ag11a = function ag11a(params, callback) {
	// config = setconfig1();
	testclearstorage();

	var widId = Math.random() + "";

	execute([{
		"executethis": "addwidmaster",
		"wid": widId,
		"2": "21",
		"3": "31",
		"metadata.method": "test1method",
		"test1note": "string"
	}, {
		"executethis": "getwidmaster",
		"wid": widId
		// },{
		// 	"executethis": "removefrommongo",
		// 	"wid": {"$or":[{"wid":"text1"},{"wid":"text2"},{"wid":"text3"},{"wid":"text4"},{"wid":"text5"},{"wid":"text6"},{"wid":"text7"},{"wid":"text8"},{"wid":"text9"},{"wid":"text10"}]}
	}], function (res) {
		// console.log(' in test ag11a >>>>>> ' + JSON.stringify(res));

		if (callback instanceof Function) {
			callback(res);
		} else {
			return res;
		}
	});
	// return verifysummary("test_results");
}


// add 1 wids using addwidmaster, display 1 wids using getwidmaster
exports.ag11b = ag11b = function ag11b(params, callback) {
	config = setconfig5();

	var widId = Math.random() + "";

	execute([{
		"executethis": "addwidmaster",
		"wid": widId,
		"2": "21",
		"3": "31",
		"metadata.method": "test1method",
		"test1note": "string"
	}, {
		"executethis": "getwidmaster",
		"wid": widId
		// },{
		// 	"executethis": "removefrommongo",
		// 	"wid": {"$or":[{"wid":"text1"},{"wid":"text2"},{"wid":"text3"},{"wid":"text4"},{"wid":"text5"},{"wid":"text6"},{"wid":"text7"},{"wid":"text8"},{"wid":"text9"},{"wid":"text10"}]}
	}], function (res) {
		// console.log(' in test ag11a >>>>>> ' + JSON.stringify(res));

		if (callback instanceof Function) {
			callback(res);
		} else {
			return res;
		}
	});
	// return verifysummary("test_results");
}

//getwidmaster tests
exports.ag13a = ag13a = function ag13a(params, callback) {
	// config = setconfig1();
	testclearstorage();
	execute([{
		"executethis": "getwidmaster",
		"wid": 'test1'
	}], function (res) {
		if (callback instanceof Function) {
			callback(res);
		} else {
			return res;
		}
	});
	// return verifysummary("test_results");
}


exports.ag13b = ag13b = function ag13b(params, callback) {
	config = setconfig5();

	execute([{
		"executethis": "getwidmaster",
		"wid": 'test1'
	}], function (res) {
		if (callback instanceof Function) {
			callback(res);
		} else {
			return res;
		}
	});
	// return verifysummary("test_results");
}

//addwidmaster tests
exports.ag14a = ag14a = function ag14a(params, callback) {
	// config = setconfig1();
	var widId = Math.random() + "";
	testclearstorage();
	execute([{
		"executethis": "addwidmaster",
		"wid": widId,
		"2": "21",
		"3": "31",
		"metadata.method": "test1method",
		"test1note": "string"
	}], function (res) {
		if (callback instanceof Function) {
			callback(res);
		} else {
			return res;
		}
	});
	// return verifysummary("test_results");
}


exports.ag14b = ag14b = function ag14b(params, callback) {
	config = setconfig5();
	var widId = Math.random() + "";
	testclearstorage();
	execute([{
		"executethis": "addwidmaster",
		"wid": widId,
		"2": "21",
		"3": "31",
		"metadata.method": "test1method",
		"test1note": "string"
	}], function (res) {
		if (callback instanceof Function) {
			callback(res);
		} else {
			return res;
		}
	});
	// return verifysummary("test_results");
}



exports.ag15a = ag15a = function ag15a(params, callback) {
	// config = setconfig1();
	testclearstorage();

	var widId = Math.random() + "";
	var widMasterId = Math.random() + "master";

	execute([{
		"2": "string",
		"3": "string",
		"executethis": "addwidmaster",
		"wid": widMasterId,
		"metadata.method": widMasterId	,
		"test1note": "string"
	}, {
		"2": "21",
		"3": "31",
		"executethis": "addwidmaster",
		"wid": widId,
		"metadata.method": widMasterId,
		"test1note": "some value $$%%%$"
	}, {
		"executethis": "getwid",
		"wid": widId
	}], function (res) {
		// console.log(' in test ag6 >>>>>> ' + JSON.stringify(res));

		if (callback instanceof Function) {
			callback(res);
		} else {
			return res;
		}
	});
	// return verifysummary("test_results");
}

exports.ag15b = ag15b = function ag15b(params, callback) {
	config = setconfig5();

	var widId = Math.random() + "";
	var widMasterId = Math.random() + "master";

	execute([{
		"2": "string",
		"3": "string",
		"executethis": "addwidmaster",
		"wid": widMasterId,
		"metadata.method": widMasterId	,
		"test1note": "string"
	}, {
		"2": "21",
		"3": "31",
		"executethis": "addwidmaster",
		"wid": widId,
		"metadata.method": widMasterId,
		"test1note": "some value $$%%%$"
	}, {
		"executethis": "getwid",
		"wid": widId
	}], function (res) {
		// console.log(' in test ag6 >>>>>> ' + JSON.stringify(res));

		if (callback instanceof Function) {
			callback(res);
		} else {
			return res;
		}
	});
	// return verifysummary("test_results");
}


// using a,b,c we need to run these 4 tests…for a total of 4 x 3 tests:
// 5x updatewid that calls execute() and is properly nested
// 5x addwidmaster that calls execute() and is property nested
// 5x updatewid that calls execute()
// 5x addwidmaster that calls execute()

// We are looking for clues on something big that is happening:
// 1) does running all in server (server test/ server run) or half (local test - server run) do the same thing?
// 2) debugfn map difference these 3 methods 
// 3) extra getwidmaster call: if you do many calls in a row (array) does that still happen

// 5x updatewid that calls execute() and is properly nested
exports.ag91a = ag91a = function ag91a(params, callback) {
	//saveglobal("debugcat", "get");
	var widId1 = Math.random() + "1";
	var widId2 = Math.random() + "2";
	var widId3 = Math.random() + "3";
	var widId4 = Math.random() + "4";
	var widId5 = Math.random() + "5";
	var widMasterId = Math.random() + "master";


	// config = setconfig1();
	testclearstorage();

	execute({
			"executethis": "updatewid",

			"wid": widId1,
			"metadata.method": "colordto911",
			"hue": "string911"
		},
		function (err, res) {


			execute({
					"executethis": "updatewid",

					"wid": widId2,
					"metadata.method": "colordto912",
					"hue": "string912"
				},
				function (err, res) {


					execute({
							"executethis": "updatewid",

							"wid": widId3,
							"metadata.method": "colordto913",
							"hue": "string91"
						},
						function (err, res) {

							execute({
									"executethis": "updatewid",

									"wid": widId4,
									"metadata.method": "colordto914",
									"hue": "string914"
								},
								function (err, res) {


									execute({
											"executethis": "updatewid",

											"wid": widId5,
											"metadata.method": "colordto915",
											"hue": "string915"
										},
										function (err, res) {



											if (callback instanceof Function) {
												var err;
												callback(err, params);
											} else {
												return params;
											}


										});

								});

						});

				});

		});



}


// 5x updatewid that calls execute() and is properly nested
exports.ag91b = ag91b = function ag91b(params, callback) {
	//saveglobal("debugcat", "get");
	var widId1 = Math.random() + "1";
	var widId2 = Math.random() + "2";
	var widId3 = Math.random() + "3";
	var widId4 = Math.random() + "4";
	var widId5 = Math.random() + "5";
	var widMasterId = Math.random() + "master";

	testclearstorage();

	execute({
			"executethis": "updatewid",

			"wid": widId1,
			"metadata.method": "colordto911",
			"hue": "string911"
		},
		function (err, res) {


			execute({
					"executethis": "updatewid",

					"wid": widId2,
					"metadata.method": "colordto912",
					"hue": "string912"
				},
				function (err, res) {


					execute({
							"executethis": "updatewid",

							"wid": widId3,
							"metadata.method": "colordto913",
							"hue": "string91"
						},
						function (err, res) {

							execute({
									"executethis": "updatewid",

									"wid": widId4,
									"metadata.method": "colordto914",
									"hue": "string914"
								},
								function (err, res) {


									execute({
											"executethis": "updatewid",

											"wid": widId5,
											"metadata.method": "colordto915",
											"hue": "string915"
										},
										function (err, res) {



											if (callback instanceof Function) {
												var err;
												callback(err, params);
											} else {
												return params;
											}


										});

								});

						});

				});

		});



}

// 5x updatewid that calls execute() and is properly nested
exports.ag91c = ag91c = function ag91c(params, callback) {
	//saveglobal("debugcat", "get");
	var widId1 = Math.random() + "1";
	var widId2 = Math.random() + "2";
	var widId3 = Math.random() + "3";
	var widId4 = Math.random() + "4";
	var widId5 = Math.random() + "5";
	var widMasterId = Math.random() + "master";


	config = setconfig5();
	testclearstorage();

	execute({
			"executethis": "updatewid",

			"wid": widId1,
			"metadata.method": "colordto911",
			"hue": "string911"
		},
		function (err, res) {


			execute({
					"executethis": "updatewid",

					"wid": widId2,
					"metadata.method": "colordto912",
					"hue": "string912"
				},
				function (err, res) {


					execute({
							"executethis": "updatewid",

							"wid": widId3,
							"metadata.method": "colordto913",
							"hue": "string91"
						},
						function (err, res) {

							execute({
									"executethis": "updatewid",

									"wid": widId4,
									"metadata.method": "colordto914",
									"hue": "string914"
								},
								function (err, res) {


									execute({
											"executethis": "updatewid",

											"wid": widId5,
											"metadata.method": "colordto915",
											"hue": "string915"
										},
										function (err, res) {



											if (callback instanceof Function) {
												var err;
												callback(err, params);
											} else {
												return params;
											}


										});

								});

						});

				});

		});



}

// 5x addwidmaster that calls execute() and is property nested
exports.ag92a = ag92a = function ag92a(params, callback) {
	//saveglobal("debugcat", "get");
	var widId1 = Math.random() + "1";
	var widId2 = Math.random() + "2";
	var widId3 = Math.random() + "3";
	var widId4 = Math.random() + "4";
	var widId5 = Math.random() + "5";
	var widMasterId = Math.random() + "master";


	// config = setconfig1();
	testclearstorage();

	execute({
			"executethis": "addwidmaster",
			"wid": widId1,
			"metadata.method": "colordto911",
			"hue": "string911"
		},
		function (err, res) {


			execute({
					"executethis": "addwidmaster",
					"wid": widId2,
					"metadata.method": "colordto912",
					"hue": "string912"
				},
				function (err, res) {


					execute({
							"executethis": "addwidmaster",
							"wid": widId3,
							"metadata.method": "colordto913",
							"hue": "string913"
						},
						function (err, res) {

							execute({
									"executethis": "addwidmaster",
									"wid": widId4,
									"metadata.method": "colordto914",
									"hue": "string914"
								},
								function (err, res) {


									execute({
											"executethis": "addwidmaster",
											"wid": widId5,
											"metadata.method": "colordto915",
											"hue": "string915"
										},
										function (err, res) {



											if (callback instanceof Function) {
												var err;
												callback(err, params);
											} else {
												return params;
											}


										});

								});

						});

				});

		});



}



// 5x addwidmaster that calls execute() and is property nested
exports.ag92b = ag92b = function ag92b(params, callback) {
	//saveglobal("debugcat", "get");
	var widId1 = Math.random() + "1";
	var widId2 = Math.random() + "2";
	var widId3 = Math.random() + "3";
	var widId4 = Math.random() + "4";
	var widId5 = Math.random() + "5";
	var widMasterId = Math.random() + "master";


	testclearstorage();

	execute({
			"executethis": "addwidmaster",
			"wid": widId1,
			"metadata.method": "colordto911",
			"hue": "string911"
		},
		function (err, res) {


			execute({
					"executethis": "addwidmaster",
					"wid": widId2,
					"metadata.method": "colordto912",
					"hue": "string912"
				},
				function (err, res) {


					execute({
							"executethis": "addwidmaster",
							"wid": widId3,
							"metadata.method": "colordto913",
							"hue": "string913"
						},
						function (err, res) {

							execute({
									"executethis": "addwidmaster",
									"wid": widId4,
									"metadata.method": "colordto914",
									"hue": "string914"
								},
								function (err, res) {


									execute({
											"executethis": "addwidmaster",
											"wid": widId5,
											"metadata.method": "colordto915",
											"hue": "string915"
										},
										function (err, res) {



											if (callback instanceof Function) {
												var err;
												callback(err, params);
											} else {
												return params;
											}


										});

								});

						});

				});

		});



}


// 5x addwidmaster that calls execute() and is property nested
exports.ag92c = ag92c = function ag92c(params, callback) {
	//saveglobal("debugcat", "get");
	var widId1 = Math.random() + "1";
	var widId2 = Math.random() + "2";
	var widId3 = Math.random() + "3";
	var widId4 = Math.random() + "4";
	var widId5 = Math.random() + "5";
	var widMasterId = Math.random() + "master";


	config = setconfig5();
	testclearstorage();

	execute({
			"executethis": "addwidmaster",
			"wid": widId1,
			"metadata.method": "colordto911",
			"hue": "string911"
		},
		function (err, res) {


			execute({
					"executethis": "addwidmaster",
					"wid": widId2,
					"metadata.method": "colordto912",
					"hue": "string912"
				},
				function (err, res) {


					execute({
							"executethis": "addwidmaster",
							"wid": widId3,
							"metadata.method": "colordto913",
							"hue": "string913"
						},
						function (err, res) {

							execute({
									"executethis": "addwidmaster",
									"wid": widId4,
									"metadata.method": "colordto914",
									"hue": "string914"
								},
								function (err, res) {


									execute({
											"executethis": "addwidmaster",
											"wid": widId5,
											"metadata.method": "colordto915",
											"hue": "string915"
										},
										function (err, res) {



											if (callback instanceof Function) {
												var err;
												callback(err, params);
											} else {
												return params;
											}


										});

								});

						});

				});

		});



}


// 5x updatewid that calls execute()
exports.ag93a = ag93a = function ag93a(params, callback) {
	var widId1 = Math.random() + "1";
	var widId2 = Math.random() + "2";
	var widId3 = Math.random() + "3";
	var widId4 = Math.random() + "4";
	var widId5 = Math.random() + "5";

	// config = setconfig1();
	testclearstorage();

	execute([{
		"executethis": "updatewid",
		"wid": widId1,
		"metadata.method": "colordto931",
		"hue": "string931"
	}, {
		"executethis": "updatewid",
		"wid": widId2,
		"metadata.method": "colordto932",
		"hue": "string932"
	}, {
		"executethis": "updatewid",
		"wid": widId3,
		"metadata.method": "colordto933",
		"hue": "string933"
	}, {
		"executethis": "updatewid",
		"wid": widId4,
		"metadata.method": "colordto934",
		"hue": "string934"
	}, {
		"executethis": "updatewid",
		"wid": widId5,
		"metadata.method": "colordto935",
		"hue": "string935"
	}], function (err, res) {

		console.log(' >>> final response after executerray >>> ' + JSON.stringify(res));

		if (callback instanceof Function) {
			callback(res);
		} else {
			return res;
		}
	});
	// return verifysummary("test_results");
}


// 5x updatewid that calls execute()
exports.ag93b = ag93b = function ag93b(params, callback) {
	var widId1 = Math.random() + "1";
	var widId2 = Math.random() + "2";
	var widId3 = Math.random() + "3";
	var widId4 = Math.random() + "4";
	var widId5 = Math.random() + "5";

	testclearstorage();

	execute([{
		"executethis": "updatewid",
		"wid": widId1,
		"metadata.method": "colordto931",
		"hue": "string931"
	}, {
		"executethis": "updatewid",
		"wid": widId2,
		"metadata.method": "colordto932",
		"hue": "string932"
	}, {
		"executethis": "updatewid",
		"wid": widId3,
		"metadata.method": "colordto933",
		"hue": "string933"
	}, {
		"executethis": "updatewid",
		"wid": widId4,
		"metadata.method": "colordto934",
		"hue": "string934"
	}, {
		"executethis": "updatewid",
		"wid": widId5,
		"metadata.method": "colordto935",
		"hue": "string935"
	}], function (err, res) {

		console.log(' >>> final response after executerray >>> ' + JSON.stringify(res));

		if (callback instanceof Function) {
			callback(res);
		} else {
			return res;
		}
	});
	// return verifysummary("test_results");
}



// 5x updatewid that calls execute()
exports.ag93c = ag93c = function ag93c(params, callback) {
	var widId1 = Math.random() + "1";
	var widId2 = Math.random() + "2";
	var widId3 = Math.random() + "3";
	var widId4 = Math.random() + "4";
	var widId5 = Math.random() + "5";

	config = setconfig5();
	testclearstorage();

	execute([{
		"executethis": "updatewid",
		"wid": widId1,
		"metadata.method": "colordto931",
		"hue": "string931"
	}, {
		"executethis": "updatewid",
		"wid": widId2,
		"metadata.method": "colordto932",
		"hue": "string932"
	}, {
		"executethis": "updatewid",
		"wid": widId3,
		"metadata.method": "colordto933",
		"hue": "string933"
	}, {
		"executethis": "updatewid",
		"wid": widId4,
		"metadata.method": "colordto934",
		"hue": "string934"
	}, {
		"executethis": "updatewid",
		"wid": widId5,
		"metadata.method": "colordto935",
		"hue": "string935"
	}], function (err, res) {

		console.log(' >>> final response after executerray >>> ' + JSON.stringify(res));

		if (callback instanceof Function) {
			callback(res);
		} else {
			return res;
		}
	});
	// return verifysummary("test_results");
}

// 5x addwidmaster that calls execute()
exports.ag94a = ag94a = function ag94a(params, callback) {
	var widId1 = Math.random() + "1";
	var widId2 = Math.random() + "2";
	var widId3 = Math.random() + "3";
	var widId4 = Math.random() + "4";
	var widId5 = Math.random() + "5";

	// config = setconfig1();
	testclearstorage();

	execute([{
		"executethis": "addwidmaster",
		"wid": widId1,
		"metadata.method": "colordto941",
		"hue": "string941"
	}, {
		"executethis": "addwidmaster",
		"wid": widId2,
		"metadata.method": "colordto942",
		"hue": "string942"
	}, {
		"executethis": "addwidmaster",
		"wid": widId3,
		"metadata.method": "colordto943",
		"hue": "string943"
	}, {
		"executethis": "addwidmaster",
		"wid": widId4,
		"metadata.method": "colordto944",
		"hue": "string944"
	}, {
		"executethis": "addwidmaster",
		"wid": widId5,
		"metadata.method": "colordto945",
		"hue": "string945"
	}], function (err, res) {

		console.log(' >>> final response after executerray >>> ' + JSON.stringify(res));
		// proxyprinttodiv('Function addwidmaster() From unit test : I ', res, 99);


		if (callback instanceof Function) {
			callback(res);
		} else {
			return res;
		}
	});
	// return verifysummary("test_results");
}

// 5x addwidmaster that calls execute()
exports.ag94b = ag94b = function ag94b(params, callback) {
	var widId1 = Math.random() + "1";
	var widId2 = Math.random() + "2";
	var widId3 = Math.random() + "3";
	var widId4 = Math.random() + "4";
	var widId5 = Math.random() + "5";

	testclearstorage();

	execute([{
		"executethis": "addwidmaster",
		"wid": widId1,
		"metadata.method": "colordto941",
		"hue": "string941"
	}, {
		"executethis": "addwidmaster",
		"wid": widId2,
		"metadata.method": "colordto942",
		"hue": "string942"
	}, {
		"executethis": "addwidmaster",
		"wid": widId3,
		"metadata.method": "colordto943",
		"hue": "string943"
	}, {
		"executethis": "addwidmaster",
		"wid": widId4,
		"metadata.method": "colordto944",
		"hue": "string944"
	}, {
		"executethis": "addwidmaster",
		"wid": widId5,
		"metadata.method": "colordto945",
		"hue": "string945"
	}], function (err, res) {

		console.log(' >>> final response after executerray >>> ' + JSON.stringify(res));

		if (callback instanceof Function) {
			callback(res);
		} else {
			return res;
		}
	});
	// return verifysummary("test_results");
}

// 5x addwidmaster that calls execute()
exports.ag94c = ag94c = function ag94c(params, callback) {
	var widId1 = Math.random() + "1";
	var widId2 = Math.random() + "2";
	var widId3 = Math.random() + "3";
	var widId4 = Math.random() + "4";
	var widId5 = Math.random() + "5";

	config = setconfig5();
	testclearstorage();

	execute([{
		"executethis": "addwidmaster",
		"wid": widId1,
		"metadata.method": "colordto941",
		"hue": "string941"
	}, {
		"executethis": "addwidmaster",
		"wid": widId2,
		"metadata.method": "colordto942",
		"hue": "string942"
	}, {
		"executethis": "addwidmaster",
		"wid": widId3,
		"metadata.method": "colordto943",
		"hue": "string943"
	}, {
		"executethis": "addwidmaster",
		"wid": widId4,
		"metadata.method": "colordto944",
		"hue": "string944"
	}, {
		"executethis": "addwidmaster",
		"wid": widId5,
		"metadata.method": "colordto945",
		"hue": "string945"
	}], function (err, res) {

		console.log(' >>> final response after executerray >>> ' + JSON.stringify(res));

		if (callback instanceof Function) {
			callback(res);
		} else {
			return res;
		}
	});
	// return verifysummary("test_results");
}


// 2x addwidmaster that calls execute()
exports.ag95a = ag95a = function ag95a(params, callback) {
	var widId1 = Math.random() + "1";
	var widId2 = Math.random() + "2";

	// config = setconfig1();
	testclearstorage();

	execute([{
		"executethis": "addwidmaster",
		"wid": widId1,
		"metadata.method": "colordto951",
		"hue": "string951"
	}, {
		"executethis": "addwidmaster",
		"wid": widId2,
		"metadata.method": "colordto952",
		"hue": "string952"
	}], function (err, res) {

		console.log(' >>> final response after executerray >>> ' + JSON.stringify(res));

	});
	// return verifysummary("test_results");
}

// sticky data problem test
exports.stickydata = stickydata = function stickydata(params, callback) {
	var widId1 = Math.random() + "1";
	var widId2 = Math.random() + "2";

	// config = setconfig1();
	testclearstorage();

	execute([{
		"executethis": "addwidmaster",
		"wid": widId1,
		"metadata.method": "colordto951",
		"hue": "string951"
	}, {
		"executethis": "addwidmaster",
		"wid": widId2,
		"metadata.method": "colordto952",
		"hue": "string952"
	},{
		"executethis": "getwidmaster",
		"wid": widId1
	}, {
		"executethis": "getwidmaster",
		"wid": widId2
	}], function (err, res) {

		console.log(' >>> final response after executerray >>> ' + JSON.stringify(res));

		console.log(' >>> get wid 1 result >>> ' + JSON.stringify(res[2][0]));
		console.log(' >>> get wid 2 result >>> ' + JSON.stringify(res[3][0]));

		proxyprinttodiv(' >>> get wid 1 result >>> ', JSON.stringify(res[2][0]), 99);
		proxyprinttodiv(' >>> get wid 2 result >>> ', JSON.stringify(res[3][0]), 99);

		if (res[3][0]['b1']) {
			alert('fail');
		} else {
			alert('pass');
		}

		if (callback instanceof Function) {
			callback(res);
		} else {
			return res;
		}
	});
	// return verifysummary("test_results");
}


// extra params problem test
exports.extraparams = extraparams = function extraparams(params, callback) {
	var widId1 = Math.random() + "1";
	var widId2 = Math.random() + "2";

	// config = setconfig1();
	testclearstorage();

	execute([{
		"executethis": "addwidmaster",
		"wid": widId1,
		"metadata.method": widId1,
		"a1": "a2"
	}], function (err, res) {

		console.log(' >>> FROM UNIT TESTS  final response after executerray >>> ' + JSON.stringify(res));
		console.log(' >>> FROM UNIT TESTS add wid 1 result >>> ' + JSON.stringify(res));
		proxyprinttodiv(' >>>  FROM UNIT TESTS add wid 1 result >>> ', JSON.stringify(res), 99);

		// if (res[1]) {
		// 	alert('fail .... extra param coming.');
		// } else {
		// 	alert('pass .... extra param not coming.');
		// }

		if (callback instanceof Function) {
			callback(err, res);
		}
	});
	// return verifysummary("test_results");
}

// *****************
// These are all the old used to get the new test and verify system up
// *****************

exports.tmp1 = tmp1 = function tmp1(params, callback) {
    testclearstorage();
    var x = {
        "redir_a": [{
            "dothis": "func_a",
            "tryorder": 1,
            "executeorder": 1,
            "params": {}
        }],
        "redir_b": [{
            "dothis": "func_b",
            "tryorder": 1,
            "executeorder": 1,
            "params": {}
        }],
        "redir_c": [{
            "dothis": "func_c",
            "tryorder": 1,
            "executeorder": 1,
            "params": {}
        }]
    };

    var z = {
        "executethis": "redir_b",
        "c": "0",
        "d": "1",
        "e": "2"
    }

    w = extend(z, {
        "configuration": x
    });

    execute([
            w
        ],
        function (err, res) {
            res = logverify("tmp1_result", res[0][0], {
                "d": "1",
                "c": "0",
                "g": "4",
                "configuration": {
                    "redir_a": [{
                        "dothis": "func_a",
                        "tryorder": 1,
                        "executeorder": 1,
                        "params": {}
                    }],
                    "redir_b": [{
                        "dothis": "func_b",
                        "tryorder": 1,
                        "executeorder": 1,
                        "params": {}
                    }],
                    "redir_c": [{
                        "dothis": "func_c",
                        "tryorder": 1,
                        "executeorder": 1,
                        "params": {}
                    }]
                }
            });
            callback(err, res);
        });
}

//---------------------------

exports.tmp2 = tmp2 = function tmp2(params, callback) {
    testclearstorage();
    var temp_config = extend(config);

    var x = {
        "redir_a": [{
            "dothis": "func_a",
            "tryorder": 1,
            "executeorder": 1,
            "params": {}
        }],
        "redir_b": [{
            "dothis": "func_b",
            "tryorder": 1,
            "executeorder": 1,
            "params": {}
        }],
        "redir_c": [{
            "dothis": "func_c",
            "tryorder": 1,
            "executeorder": 1,
            "params": {}
        }]
    };

    var z = {
        "executethis": "redir_b",
        "c": "0",
        "d": "1",
        "e": "2"
    }

    config.configuration = extend(config.configuration, x);

    execute([
            z
        ],
        function (err, res) {
            res = logverify("tmp2_result", res[0][0], {
                "d": "1",
                "c": "0",
                "g": "4"
            });
            config = extend(temp_config);
            callback(err, res);
        });
}

//---------------------------

function tmp4(params, callback) {
    assert = {
        "d": "1",
        "c": "0",
        "g": "4"
    };
    parameters = {
        "executethis": "redir_b",
        "c": "0",
        "d": "1",
        "e": "2",
        "configuration": {
            "redir_a": [{
                "dothis": "func_a",
                "tryorder": 1,
                "executeorder": 1,
                "params": {}
            }],
            "redir_b": [{
                "dothis": "func_b",
                "tryorder": 1,
                "executeorder": 1,
                "params": {}
            }],
            "redir_c": [{
                "dothis": "func_c",
                "tryorder": 1,
                "executeorder": 1,
                "params": {}
            }]
        }
    };
    master_test_and_verify(parameters, assert, callback);
    var err;
    callback(err, res);
}

function tmp5(params, callback) {
    parameters = {
        "executethis": "func_b",
        "c": "0",
        "d": "1",
        "e": "2"
    }

    assert = {
        "d": "1",
        "c": "0",
        "g": "4"
    }

    test_and_verify(parameters, assert, true, function (err, res) {
        callback(err, res);
    });
}

function tmp6(params, callback) {
    parameters = {
        "executethis": "redir_b",
        "c": "0",
        "d": "1",
        "e": "2",
        "configuration": {
            "redir_a": [{
                "dothis": "func_a",
                "tryorder": 0,
                "executeorder": 0,
                "params": {}
            }],
            "redir_b": [{
                "dothis": "func_b",
                "tryorder": 0,
                "executeorder": 0,
                "params": {}
            }],
            "redir_c": [{
                "dothis": "func_c",
                "tryorder": 0,
                "executeorder": 0,
                "params": {}
            }]
        }
    }
    assert = {
        "d": "1",
        "c": "0",
        "g": "4",
        "configuration": {
            "redir_a": [{
                "dothis": "func_a",
                "tryorder": 0,
                "executeorder": 0,
                "params": {}
            }],
            "redir_b": [{
                "dothis": "func_b",
                "tryorder": 0,
                "executeorder": 0,
                "params": {}
            }],
            "redir_c": [{
                "dothis": "func_c",
                "tryorder": 0,
                "executeorder": 0,
                "params": {}
            }]
        }
    }
    master_test_and_verify(this.targetfn.name, parameters, assert, function (err, res) {
        callback(err, res)
    });
}

exports.tmp3 = tmp3 = function tmp3(params, callback) {
    testclearstorage();
    var temp_config = extend(config);

    var x = {
        "redir_a": [{
            "dothis": "func_a",
            "tryorder": 1,
            "executeorder": 1,
            "params": {}
        }],
        "redir_b": [{
            "dothis": "func_b",
            "tryorder": 1,
            "executeorder": 1,
            "params": {}
        }],
        "redir_c": [{
            "dothis": "func_c",
            "tryorder": 1,
            "executeorder": 1,
            "params": {}
        }]
    };

    var z = {
        "executethis": "redir_b",
        "c": "0",
        "d": "1",
        "e": "2"
    }

    w = extend(z, {
        "configuration": x
    });

    execute([
            w
        ],
        function (err, res) {
            res = logverify("tmp3_result", res[0][0], {
                "d": "1",
                "c": "0",
                "g": "4",
                "configuration": {
                    "redir_a": [{
                        "dothis": "func_a",
                        "tryorder": 1,
                        "executeorder": 1,
                        "params": {}
                    }],
                    "redir_b": [{
                        "dothis": "func_b",
                        "tryorder": 1,
                        "executeorder": 1,
                        "params": {}
                    }],
                    "redir_c": [{
                        "dothis": "func_c",
                        "tryorder": 1,
                        "executeorder": 1,
                        "params": {}
                    }]
                }
            });

            config = extend(temp_config);
            config.configuration = extend(config.configuration, x);

            var r2 = execute([
                    z
                ],
                function (err, res_1) {
                    alert("res_1[0][0]: " + JSON.stringify(res_1[0][0]));
                    res_1 = logverify("tmp3a_result", res_1[0][0], {
                        "d": "1",
                        "c": "0",
                        "g": "4"
                    });
                    alert("res_1: " + JSON.stringify(res_1));
                    callback(err, res_1);
                });

            alert("r2: " + JSON.stringify(r2));
            res = extend(res, r2);
            alert(JSON.stringify(res));
            config = extend(temp_config);

            callback(err, res);
        });
}

// function tmp5 (params, callback) {
// 	parameters = {
// 			"executethis": "func_b",
// 			"c": "0",
// 			"d": "1",
// 			"e": "2"
// 		}

// 	assert = {
// 			"d": "1",
// 			"c": "0",
// 			"g": "4"
// 		}

// test_and_verify (parameters, assert, true, function (err, res) {
// 		callback (err, res);
// 	});

//	// master_test_and_verify (parameters, assert, function (err, res) {
//	// 	callback (err, res);
//	// });
// }


// *****************
// These are all the old configs that used to be used in the tests...now all the configs
// are passed in as params instead
// *****************

// The standard config with normal order and no redirects
// exports.setconfig1 = setconfig1 = function setconfig1() {
//     configuration = {};
//     configuration.environment = 'local';


//     configuration.preExecute = [];
//     configuration.preExecute[0] = {};
//     configuration.preExecute[0].executeorder = 0;
//     configuration.preExecute[0].tryorder = 0;
//     configuration.preExecute[0].dothis = 'dothis';
//     configuration.preExecute[0].params = {};
//     configuration.preExecute[1] = {};
//     configuration.preExecute[1].executeorder = 0;
//     configuration.preExecute[1].tryorder = 0;
//     configuration.preExecute[1].dothis = 'executeparam';
//     configuration.preExecute[1].params = {};
//     configuration.preExecute[2] = {};
//     configuration.preExecute[2].executeorder = 0;
//     configuration.preExecute[2].tryorder = 0;
//     configuration.preExecute[2].dothis = 'executedefault';
//     configuration.preExecute[2].params = {};
//     configuration.preExecute[3] = {};
//     configuration.preExecute[3].executeorder = 0;
//     configuration.preExecute[3].tryorder = 0;
//     configuration.preExecute[3].dothis = 'server';
//     configuration.preExecute[3].params = {};

//     configuration.midExecute = [];
//     configuration.midExecute[0] = {};
//     configuration.midExecute[0].executeorder = 0;
//     configuration.midExecute[0].tryorder = 0;
//     configuration.midExecute[0].dothis = 'dothis';
//     configuration.midExecute[0].params = {};
//     configuration.midExecute[1] = {};
//     configuration.midExecute[1].executeorder = 0;
//     configuration.midExecute[1].tryorder = 0;
//     configuration.midExecute[1].dothis = 'executeparam';
//     configuration.midExecute[1].params = {};
//     configuration.midExecute[2] = {};
//     configuration.midExecute[2].executeorder = 0;
//     configuration.midExecute[2].tryorder = 0;
//     configuration.midExecute[2].dothis = 'executedefault';
//     configuration.midExecute[2].params = {};
//     configuration.midExecute[3] = {};
//     configuration.midExecute[3].executeorder = 0;
//     configuration.midExecute[3].tryorder = 0;
//     configuration.midExecute[3].dothis = 'server';
//     configuration.midExecute[3].params = {};

//     configuration.postExecute = [];
//     configuration.postExecute[0] = {};
//     configuration.postExecute[0].executeorder = 0;
//     configuration.postExecute[0].tryorder = 0;
//     configuration.postExecute[0].dothis = 'dothis';
//     configuration.postExecute[0].params = {};
//     configuration.postExecute[1] = {};
//     configuration.postExecute[1].executeorder = 0;
//     configuration.postExecute[1].tryorder = 0;
//     configuration.postExecute[1].dothis = 'executeparam';
//     configuration.postExecute[1].params = {};
//     configuration.postExecute[2] = {};
//     configuration.postExecute[2].executeorder = 0;
//     configuration.postExecute[2].tryorder = 0;
//     configuration.postExecute[2].dothis = 'executedefault';
//     configuration.postExecute[2].params = {};
//     configuration.postExecute[2] = {};
//     configuration.postExecute[2].executeorder = 0;
//     configuration.postExecute[2].tryorder = 0;
//     configuration.postExecute[2].dothis = 'server';
//     configuration.postExecute[2].params = {};

//     // configuration.MongoAddEditPrepare = {};
//     //  configuration.MongoAddEditPrepare.synchronous = true;

//     //  configuration.AddMongoRelationship = {};
//     //  configuration.AddMongoRelationship.synchronous = true;

//     //  configuration.addwidmaster = {};
//     //  configuration.addwidmaster.synchronous = true;

//     //  configuration.AddWidParameters = {};
//     //  configuration.AddWidParameters.synchronous = true;

//     //  configuration.AddMaster = {};
//     //  configuration.AddMaster.synchronous = true;

//     //  configuration.aggressivedto = {};
//     //  configuration.aggressivedto.synchronous = true;

//     //  configuration.getcleanparameters = {};
//     //  configuration.getcleanparameters.synchronous = true;

//     //  configuration.getwidmaster = {};
//     //  configuration.getwidmaster.synchronous = true;


//     //  configuration.getWidMongo = {};
//     //  configuration.getWidMongo.synchronous = true;

//     //  configuration.getAndFormatNextLevel = {};
//     //  configuration.getAndFormatNextLevel.synchronous = true;  

//     //  configuration.addcleanparameters = {};
//     //  configuration.addcleanparameters.synchronous = true;
//     // ----------------------
//     // configuration.MongoAddEditPrepare = {};
//     // configuration.MongoAddEditPrepare.synchronous = false;

//     // configuration.AddMongoRelationship = {};
//     // configuration.AddMongoRelationship.synchronous = false;

//     // configuration.addcleanparameters = {};
//     // configuration.addcleanparameters.synchronous = false;

//     // configuration.addwidmaster = {};
//     // configuration.addwidmaster.synchronous = false;

//     // configuration.AddWidParameters = {};
//     // configuration.AddWidParameters.synchronous = false;

//     // configuration.AddMaster = {};
//     // configuration.AddMaster.synchronous = false;

//     // configuration.aggressivedto = {};
//     // configuration.aggressivedto.synchronous = false;

//     // configuration.getcleanparameters = {};
//     // configuration.getcleanparameters.synchronous = false;

//     // configuration.getwidmaster = {};
//     // configuration.getwidmaster.synchronous = false;

//     // configuration.getWidMongo = {};
//     // configuration.getWidMongo.synchronous = false;

//     // configuration.getAndFormatNextLevel = {};
//     // configuration.getAndFormatNextLevel.synchronous = false;

//     configuration.getwid = [];
//     configuration.getwid[0] = {};
//     configuration.getwid[0].executeorder = 0;
//     configuration.getwid[0].tryorder = 0;
//     configuration.getwid[0].dothis = 'offlinegetwid';
//     configuration.getwid[0].params = {};

//     configuration.updatewid = [];
//     configuration.updatewid[0] = {};
//     configuration.updatewid[0].executeorder = 0;
//     configuration.updatewid[0].tryorder = 0;
//     configuration.updatewid[0].dothis = 'offlineupdatewid';
//     configuration.updatewid[0].params = {};

//     configuration.getfrommongo = [];
//     configuration.getfrommongo[0] = {};
//     configuration.getfrommongo[0].executeorder = 0;
//     configuration.getfrommongo[0].tryorder = 0;
//     configuration.getfrommongo[0].dothis = 'offlinegetfrommongo';
//     configuration.getfrommongo[0].params = {};

//     return {
//         "configuration": configuration
//     }
// }

// // This config is to test the redirection of functions. The various ct(x)
// // tests make calls to redir_a mapped to func_a, redir_b to func_b and
// // redir_c to func_c. The idea is that the tests will have the same output 
// // as the tt tests, but with calling all the redir_(x) functions instead.
// exports.setconfig2 = setconfig2 = function setconfig2() {
//     configuration = {};
//     configuration.environment = 'local';

//     configuration.getwid = [];
//     configuration.getwid[0] = {};
//     configuration.getwid[0].executeorder = 0;
//     configuration.getwid[0].tryorder = 0;
//     configuration.getwid[0].dothis = 'offlinegetfrommongo';
//     configuration.getwid[0].params = {};

//     configuration.updatewid = [];
//     configuration.updatewid[0] = {};
//     configuration.updatewid[0].order = 0;
//     configuration.updatewid[0].dothis = 'offlineaddtomongo';
//     configuration.updatewid[0].params = {};

//     configuration.querywid = [];
//     configuration.querywid[0] = {};
//     configuration.querywid[0].order = 0;
//     configuration.querywid[0].dothis = 'querywid';
//     configuration.querywid[0].params = {};

//     configuration.preExecute = [];
//     configuration.preExecute[0] = {};
//     configuration.preExecute[0].executeorder = 0;
//     configuration.preExecute[0].tryorder = 0;
//     configuration.preExecute[0].dothis = 'dothis';
//     configuration.preExecute[0].params = {};

//     configuration.preExecute[1] = {};
//     configuration.preExecute[1].executeorder = 0;
//     configuration.preExecute[1].tryorder = 0;
//     configuration.preExecute[1].dothis = 'executeparam';
//     configuration.preExecute[1].params = {};

//     configuration.preExecute[2] = {};
//     configuration.preExecute[2].executeorder = 0;
//     configuration.preExecute[2].tryorder = 0;
//     configuration.preExecute[2].dothis = 'executedefault';
//     configuration.preExecute[2].params = {};

//     configuration.preExecute[3] = {};
//     configuration.preExecute[3].executeorder = 0;
//     configuration.preExecute[3].tryorder = 0;
//     configuration.preExecute[3].dothis = 'server';
//     configuration.preExecute[3].params = {};

//     configuration.midExecute = [];
//     configuration.midExecute[0] = {};
//     configuration.midExecute[0].executeorder = 0;
//     configuration.midExecute[0].tryorder = 0;
//     configuration.midExecute[0].dothis = 'dothis';
//     configuration.midExecute[0].params = {};
//     configuration.midExecute[1] = {};
//     configuration.midExecute[1].executeorder = 0;
//     configuration.midExecute[1].tryorder = 0;
//     configuration.midExecute[1].dothis = 'executeparam';
//     configuration.midExecute[1].params = {};
//     configuration.midExecute[2] = {};
//     configuration.midExecute[2].executeorder = 0;
//     configuration.midExecute[2].tryorder = 0;
//     configuration.midExecute[2].dothis = 'executedefault';
//     configuration.midExecute[2].params = {};
//     configuration.midExecute[3] = {};
//     configuration.midExecute[3].executeorder = 0;
//     configuration.midExecute[3].tryorder = 0;
//     configuration.midExecute[3].dothis = 'server';
//     configuration.midExecute[3].params = {};

//     configuration.postExecute = [];
//     configuration.postExecute[0] = {};
//     configuration.postExecute[0].executeorder = 0;
//     configuration.postExecute[0].tryorder = 0;
//     configuration.postExecute[0].dothis = 'dothis';
//     configuration.postExecute[0].params = {};
//     configuration.postExecute[1] = {};
//     configuration.postExecute[1].executeorder = 0;
//     configuration.postExecute[1].tryorder = 0;
//     configuration.postExecute[1].dothis = 'executeparam';
//     configuration.postExecute[1].params = {};
//     configuration.postExecute[2] = {};
//     configuration.postExecute[2].executeorder = 0;
//     configuration.postExecute[2].tryorder = 0;
//     configuration.postExecute[2].dothis = 'executedefault';
//     configuration.postExecute[2].params = {};
//     configuration.postExecute[2] = {};
//     configuration.postExecute[2].executeorder = 0;
//     configuration.postExecute[2].tryorder = 0;
//     configuration.postExecute[2].dothis = 'server';
//     configuration.postExecute[2].params = {};

//     configuration.redir_a = [];
//     configuration.redir_a[0] = {};
//     configuration.redir_a[0].executeorder = 0;
//     configuration.redir_a[0].tryorder = 0;
//     configuration.redir_a[0].dothis = 'func_a';
//     configuration.redir_a[0].params = {};

//     configuration.redir_b = [];
//     configuration.redir_b[0] = {};
//     configuration.redir_b[0].executeorder = 0;
//     configuration.redir_b[0].tryorder = 0;
//     configuration.redir_b[0].dothis = 'func_b';
//     configuration.redir_b[0].params = {};

//     configuration.redir_c = [];
//     configuration.redir_c[0] = {};
//     configuration.redir_c[0].executeorder = 0;
//     configuration.redir_c[0].tryorder = 0;
//     configuration.redir_c[0].dothis = 'func_c';
//     configuration.redir_c[0].params = {};

//     configuration.mock_server = [];
//     configuration.mock_server[0] = {};
//     configuration.mock_server[0].executeorder = 0;
//     configuration.mock_server[0].tryorder = 0;
//     configuration.mock_server[0].dothis = 'cic_output';
//     configuration.mock_server[0].params = {
//         "configuration": {
//             "login1": [{
//                 "executeorder": 0,
//                 "tryorder": 0,
//                 "dothis": "login",
//                 "params": {}
//             }]
//         }
//     }

//     return {
//         "configuration": configuration
//     }
// }

// // This config is to test redirecting preexecute to function_f and see what happens
// exports.setconfig3 = setconfig3 = function setconfig3() {
//     configuration = {};
//     configuration.environment = 'local';

//     configuration.getwid = [];
//     configuration.getwid[0] = {};
//     configuration.getwid[0].order = 0;
//     configuration.getwid[0].dothis = 'offlinegetfrommongo';
//     configuration.getwid[0].params = {};

//     configuration.updatewid = [];
//     configuration.updatewid[0] = {};
//     configuration.updatewid[0].order = 0;
//     configuration.updatewid[0].dothis = 'offlineaddtomongo';
//     configuration.updatewid[0].params = {};

//     configuration.querywid = [];
//     configuration.querywid[0] = {};
//     configuration.querywid[0].order = 0;
//     configuration.querywid[0].dothis = 'querywid';
//     configuration.querywid[0].params = {};

//     configuration.preExecute = [];
//     configuration.preExecute[0] = {};
//     configuration.preExecute[0].executeorder = 0;
//     configuration.preExecute[0].tryorder = 0;
//     configuration.preExecute[0].dothis = 'dothis';
//     configuration.preExecute[0].params = {};
//     configuration.preExecute[1] = {};
//     configuration.preExecute[1].executeorder = 0;
//     configuration.preExecute[1].tryorder = 0;
//     configuration.preExecute[1].dothis = 'executeparam';
//     configuration.preExecute[1].params = {};
//     configuration.preExecute[2] = {};
//     configuration.preExecute[2].executeorder = 0;
//     configuration.preExecute[2].tryorder = 0;
//     configuration.preExecute[2].dothis = 'executedefault';
//     configuration.preExecute[2].params = {};
//     configuration.preExecute[3] = {};
//     configuration.preExecute[3].executeorder = 0;
//     configuration.preExecute[3].tryorder = 0;
//     configuration.preExecute[3].dothis = 'server';
//     configuration.preExecute[3].params = {};

//     configuration.midExecute = [];
//     configuration.midExecute[0] = {};
//     configuration.midExecute[0].executeorder = 0;
//     configuration.midExecute[0].tryorder = 0;
//     configuration.midExecute[0].dothis = 'dothis';
//     configuration.midExecute[0].params = {};
//     configuration.midExecute[1] = {};
//     configuration.midExecute[1].executeorder = 0;
//     configuration.midExecute[1].tryorder = 0;
//     configuration.midExecute[1].dothis = 'executeparam';
//     configuration.midExecute[1].params = {};
//     configuration.midExecute[2] = {};
//     configuration.midExecute[2].executeorder = 0;
//     configuration.midExecute[2].tryorder = 0;
//     configuration.midExecute[2].dothis = 'executedefault';
//     configuration.midExecute[2].params = {};
//     configuration.midExecute[3] = {};
//     configuration.midExecute[3].executeorder = 0;
//     configuration.midExecute[3].tryorder = 0;
//     configuration.midExecute[3].dothis = 'server';
//     configuration.midExecute[3].params = {};

//     configuration.postExecute = [];
//     configuration.postExecute[0] = {};
//     configuration.postExecute[0].executeorder = 0;
//     configuration.postExecute[0].tryorder = 0;
//     configuration.postExecute[0].dothis = 'dothis';
//     configuration.postExecute[0].params = {};
//     configuration.postExecute[1] = {};
//     configuration.postExecute[1].executeorder = 0;
//     configuration.postExecute[1].tryorder = 0;
//     configuration.postExecute[1].dothis = 'executeparam';
//     configuration.postExecute[1].params = {};
//     configuration.postExecute[2] = {};
//     configuration.postExecute[2].executeorder = 0;
//     configuration.postExecute[2].tryorder = 0;
//     configuration.postExecute[2].dothis = 'executedefault';
//     configuration.postExecute[2].params = {};
//     configuration.postExecute[2] = {};
//     configuration.postExecute[2].executeorder = 0;
//     configuration.postExecute[2].tryorder = 0;
//     configuration.postExecute[2].dothis = 'server';
//     configuration.postExecute[2].params = {};

//     return {
//         "configuration": configuration
//     }
// }
// // Looking to get preexecute to acually fire func_g...not func_a, as the test calls for
// exports.setconfig4 = setconfig4 = function setconfig4() {
//     configuration = {};

//     configuration.getwid = [];
//     configuration.getwid[0] = {};
//     configuration.getwid[0].order = 0;
//     configuration.getwid[0].dothis = 'offlinegetfrommongo';
//     configuration.getwid[0].params = {};

//     configuration.updatewid = [];
//     configuration.updatewid[0] = {};
//     configuration.updatewid[0].order = 0;
//     configuration.updatewid[0].dothis = 'offlineaddtomongo';
//     configuration.updatewid[0].params = {};

//     configuration.querywid = [];
//     configuration.querywid[0] = {};
//     configuration.querywid[0].order = 0;
//     configuration.querywid[0].dothis = 'querywid';
//     configuration.querywid[0].params = {};

//     configuration.preExecute = [];
//     configuration.preExecute[0] = {};
//     configuration.preExecute[0].executeorder = 0;
//     configuration.preExecute[0].tryorder = 0;
//     configuration.preExecute[0].dothis = 'func_g'; // This is the change to remark
//     configuration.preExecute[0].params = {};
//     configuration.preExecute[1] = {};
//     configuration.preExecute[1].executeorder = 0;
//     configuration.preExecute[1].tryorder = 0;
//     configuration.preExecute[1].dothis = 'executeparam';
//     configuration.preExecute[1].params = {};
//     configuration.preExecute[2] = {};
//     configuration.preExecute[2].executeorder = 0;
//     configuration.preExecute[2].tryorder = 0;
//     configuration.preExecute[2].dothis = 'executedefault';
//     configuration.preExecute[2].params = {};
//     configuration.preExecute[3] = {};
//     configuration.preExecute[3].executeorder = 0;
//     configuration.preExecute[3].tryorder = 0;
//     configuration.preExecute[3].dothis = 'server';
//     configuration.preExecute[3].params = {};

//     configuration.midExecute = [];
//     configuration.midExecute[0] = {};
//     configuration.midExecute[0].executeorder = 0;
//     configuration.midExecute[0].tryorder = 0;
//     configuration.midExecute[0].dothis = 'dothis';
//     configuration.midExecute[0].params = {};
//     configuration.midExecute[1] = {};
//     configuration.midExecute[1].executeorder = 0;
//     configuration.midExecute[1].tryorder = 0;
//     configuration.midExecute[1].dothis = 'executeparam';
//     configuration.midExecute[1].params = {};
//     configuration.midExecute[2] = {};
//     configuration.midExecute[2].executeorder = 0;
//     configuration.midExecute[2].tryorder = 0;
//     configuration.midExecute[2].dothis = 'executedefault';
//     configuration.midExecute[2].params = {};
//     configuration.midExecute[3] = {};
//     configuration.midExecute[3].executeorder = 0;
//     configuration.midExecute[3].tryorder = 0;
//     configuration.midExecute[3].dothis = 'server';
//     configuration.midExecute[3].params = {};

//     configuration.postExecute = [];
//     configuration.postExecute[0] = {};
//     configuration.postExecute[0].executeorder = 0;
//     configuration.postExecute[0].tryorder = 0;
//     configuration.postExecute[0].dothis = 'dothis';
//     configuration.postExecute[0].params = {};
//     configuration.postExecute[1] = {};
//     configuration.postExecute[1].executeorder = 0;
//     configuration.postExecute[1].tryorder = 0;
//     configuration.postExecute[1].dothis = 'executeparam';
//     configuration.postExecute[1].params = {};
//     configuration.postExecute[2] = {};
//     configuration.postExecute[2].executeorder = 0;
//     configuration.postExecute[2].tryorder = 0;
//     configuration.postExecute[2].dothis = 'executedefault';
//     configuration.postExecute[2].params = {};
//     configuration.postExecute[2] = {};
//     configuration.postExecute[2].executeorder = 0;
//     configuration.postExecute[2].tryorder = 0;
//     configuration.postExecute[2].dothis = 'server';
//     configuration.postExecute[2].params = {};

//     return {
//         "configuration": configuration
//     }
// }
// // This is the config to use to test the tryorder...
// // mid has the usual settings in an order that should
// // be resorted by dothis...if successful, the mid order should
// // be the same as it always is, not the way this config is set
// exports.setconfig5 = setconfig5 = function setconfig5() {
//     configuration = {};
//     configuration.environment = 'local';

//     configuration.preExecute = [];
//     configuration.preExecute[0] = {};
//     configuration.preExecute[0].executeorder = 0;
//     configuration.preExecute[0].tryorder = 0;
//     configuration.preExecute[0].dothis = 'dothis';
//     configuration.preExecute[0].params = {};
//     configuration.preExecute[1] = {};
//     configuration.preExecute[1].executeorder = 0;
//     configuration.preExecute[1].tryorder = 0;
//     configuration.preExecute[1].dothis = 'executeparam';
//     configuration.preExecute[1].params = {};
//     configuration.preExecute[2] = {};
//     configuration.preExecute[2].executeorder = 0;
//     configuration.preExecute[2].tryorder = 0;
//     configuration.preExecute[2].dothis = 'executedefault';
//     configuration.preExecute[2].params = {};
//     configuration.preExecute[3] = {};
//     configuration.preExecute[3].executeorder = 0;
//     configuration.preExecute[3].tryorder = 0;
//     configuration.preExecute[3].dothis = 'server';
//     configuration.preExecute[3].params = {};

//     configuration.midExecute = [];
//     configuration.midExecute[0] = {};
//     configuration.midExecute[0].executeorder = 0;
//     configuration.midExecute[0].tryorder = 0;
//     configuration.midExecute[0].dothis = 'server';
//     configuration.midExecute[0].params = {};
//     configuration.midExecute[1] = {};
//     configuration.midExecute[1].executeorder = 4;
//     configuration.midExecute[1].tryorder = 4;
//     configuration.midExecute[1].dothis = 'executeparam';
//     configuration.midExecute[1].params = {};
//     configuration.midExecute[2] = {};
//     configuration.midExecute[2].executeorder = 7;
//     configuration.midExecute[2].tryorder = 7;
//     configuration.midExecute[2].dothis = 'executedefault';
//     configuration.midExecute[2].params = {};
//     configuration.midExecute[3] = {};
//     configuration.midExecute[3].executeorder = 1;
//     configuration.midExecute[3].tryorder = 1;
//     configuration.midExecute[3].dothis = 'dothis';
//     configuration.midExecute[3].params = {};

//     configuration.postExecute = [];
//     configuration.postExecute[0] = {};
//     configuration.postExecute[0].executeorder = 0;
//     configuration.postExecute[0].tryorder = 0;
//     configuration.postExecute[0].dothis = 'dothis';
//     configuration.postExecute[1] = {};
//     configuration.postExecute[1].executeorder = 0;
//     configuration.postExecute[1].tryorder = 0;
//     configuration.postExecute[1].dothis = 'executeparam';
//     configuration.postExecute[2] = {};
//     configuration.postExecute[2].executeorder = 0;
//     configuration.postExecute[2].tryorder = 0;
//     configuration.postExecute[2].dothis = 'executedefault';
//     configuration.postExecute[2] = {};
//     configuration.postExecute[2].executeorder = 0;
//     configuration.postExecute[2].tryorder = 0;
//     configuration.postExecute[2].dothis = 'server';

//     return {
//         "configuration": configuration
//     }
// }
// // This config is for testing a and b not there, but c is
// exports.setconfig6 = setconfig6 = function setconfig6() {
//     configuration = {};
//     configuration.environment = 'local';

//     configuration.preExecute = [];
//     configuration.preExecute[0] = {};
//     configuration.preExecute[0].executeorder = 0;
//     configuration.preExecute[0].tryorder = 0;
//     configuration.preExecute[0].dothis = 'dothis';
//     configuration.preExecute[0].params = {
//         'cer1': 'alphabits'
//     };
//     configuration.preExecute[1] = {};
//     configuration.preExecute[1].executeorder = 0;
//     configuration.preExecute[1].tryorder = 0;
//     configuration.preExecute[1].dothis = 'executeparam';
//     configuration.preExecute[1].params = {};
//     configuration.preExecute[2] = {};
//     configuration.preExecute[2].executeorder = 0;
//     configuration.preExecute[2].tryorder = 0;
//     configuration.preExecute[2].dothis = 'executedefault';
//     configuration.preExecute[2].params = {};
//     configuration.preExecute[3] = {};
//     configuration.preExecute[3].executeorder = 0;
//     configuration.preExecute[3].tryorder = 0;
//     configuration.preExecute[3].dothis = 'server';
//     configuration.preExecute[3].params = {};

//     configuration.midExecute = [];
//     configuration.midExecute[0] = {};
//     configuration.midExecute[0].executeorder = 0;
//     configuration.midExecute[0].tryorder = 0;
//     configuration.midExecute[0].dothis = 'dothis';
//     configuration.midExecute[0].params = {
//         'cer2': 'booberry'
//     };
//     configuration.midExecute[1] = {};
//     configuration.midExecute[1].executeorder = 0;
//     configuration.midExecute[1].tryorder = 0;
//     configuration.midExecute[1].dothis = 'executeparam';
//     configuration.midExecute[1].params = {};
//     configuration.midExecute[2] = {};
//     configuration.midExecute[2].executeorder = 0;
//     configuration.midExecute[2].tryorder = 0;
//     configuration.midExecute[2].dothis = 'executedefault';
//     configuration.midExecute[2].params = {};
//     configuration.midExecute[3] = {};
//     configuration.midExecute[3].executeorder = 0;
//     configuration.midExecute[3].tryorder = 0;
//     configuration.midExecute[3].dothis = 'server';
//     configuration.midExecute[3].params = {};

//     configuration.postExecute = [];
//     configuration.postExecute[0] = {};
//     configuration.postExecute[0].executeorder = 0;
//     configuration.postExecute[0].tryorder = 0;
//     configuration.postExecute[0].dothis = 'dothis';
//     configuration.postExecute[0].params = {
//         'cer3': 'chex'
//     };
//     configuration.postExecute[1] = {};
//     configuration.postExecute[1].executeorder = 0;
//     configuration.postExecute[1].tryorder = 0;
//     configuration.postExecute[1].dothis = 'executeparam';
//     configuration.postExecute[1].params = {};
//     configuration.postExecute[2] = {};
//     configuration.postExecute[2].executeorder = 0;
//     configuration.postExecute[2].tryorder = 0;
//     configuration.postExecute[2].dothis = 'executedefault';
//     configuration.postExecute[2].params = {};
//     configuration.postExecute[2] = {};
//     configuration.postExecute[2].executeorder = 0;
//     configuration.postExecute[2].tryorder = 0;
//     configuration.postExecute[2].dothis = 'server';
//     configuration.postExecute[2].params = {};

//     return {
//         "configuration": configuration
//     }
// }

// // This config is to test he executedefault...does it make it there if dothis and executeparam do 
// // not exist.  
// exports.setconfig7 = setconfig7 = function setconfig7() {
//     configuration = {};
//     configuration.environment = 'local';

//     configuration.preExecute = [];
//     configuration.preExecute[0] = {};
//     configuration.preExecute[0].executeorder = 0;
//     configuration.preExecute[0].tryorder = 0;
//     configuration.preExecute[0].dothis = 'dothis';
//     configuration.preExecute[0].params = {
//         'myexfnparam': 'hereismyfnparam'
//     };
//     configuration.preExecute[1] = {};
//     configuration.preExecute[1].executeorder = 0;
//     configuration.preExecute[1].tryorder = 0;
//     configuration.preExecute[1].dothis = 'executeparam';
//     configuration.preExecute[1].params = {};
//     configuration.preExecute[2] = {};
//     configuration.preExecute[2].executeorder = 0;
//     configuration.preExecute[2].tryorder = 0;
//     configuration.preExecute[2].dothis = 'executedefault';
//     configuration.preExecute[2].params = {};
//     configuration.preExecute[3] = {};
//     configuration.preExecute[3].executeorder = 0;
//     configuration.preExecute[3].tryorder = 0;
//     configuration.preExecute[3].dothis = 'server';
//     configuration.preExecute[3].params = {};

//     configuration.midExecute = [];
//     configuration.midExecute[0] = {};
//     configuration.midExecute[0].executeorder = 0;
//     configuration.midExecute[0].tryorder = 0;
//     configuration.midExecute[0].dothis = 'dothis';
//     configuration.midExecute[0].params = {};
//     configuration.midExecute[1] = {};
//     configuration.midExecute[1].executeorder = 0;
//     configuration.midExecute[1].tryorder = 0;
//     configuration.midExecute[1].dothis = 'executeparam';
//     configuration.midExecute[1].params = {};
//     configuration.midExecute[2] = {};
//     configuration.midExecute[2].executeorder = 0;
//     configuration.midExecute[2].tryorder = 0;
//     // configuration.midExecute[2].dothis = 'executedefault'; // This is replaced with func_b to simulate getting to executedefault
//     configuration.midExecute[2].dothis = 'func_b';
//     configuration.midExecute[2].params = {
//         'exdef': 'param after dothis and executeparam was grabbed'
//     };
//     configuration.midExecute[3] = {};
//     configuration.midExecute[3].executeorder = 0;
//     configuration.midExecute[3].tryorder = 0;
//     configuration.midExecute[3].dothis = 'server';
//     configuration.midExecute[3].params = {};

//     configuration.postExecute = [];
//     configuration.postExecute[0] = {};
//     configuration.postExecute[0].executeorder = 0;
//     configuration.postExecute[0].tryorder = 0;
//     configuration.postExecute[0].dothis = 'dothis';
//     configuration.postExecute[0].params = {};
//     configuration.postExecute[1] = {};
//     configuration.postExecute[1].executeorder = 0;
//     configuration.postExecute[1].tryorder = 0;
//     configuration.postExecute[1].dothis = 'executeparam';
//     configuration.postExecute[1].params = {};
//     configuration.postExecute[2] = {};
//     configuration.postExecute[2].executeorder = 0;
//     configuration.postExecute[2].tryorder = 0;
//     configuration.postExecute[2].dothis = 'executedefault';
//     configuration.postExecute[2].params = {};
//     configuration.postExecute[2] = {};
//     configuration.postExecute[2].executeorder = 0;
//     configuration.postExecute[2].tryorder = 0;
//     configuration.postExecute[2].dothis = 'server';
//     configuration.postExecute[2].params = {};

//     return {
//         "configuration": configuration
//     }
// }

// exports.setconfig8 = setconfig8 = function setconfig8() {
//     configuration = {};
//     configuration.environment = 'local';

//     configuration.preExecute = [];
//     configuration.preExecute[0] = {};
//     configuration.preExecute[0].executeorder = 0;
//     configuration.preExecute[0].tryorder = 0;
//     configuration.preExecute[0].dothis = 'dothis';
//     configuration.preExecute[0].params = {
//         "alpha": "4"
//     };
//     configuration.preExecute[1] = {};
//     configuration.preExecute[1].executeorder = 0;
//     configuration.preExecute[1].tryorder = 0;
//     configuration.preExecute[1].dothis = 'executeparam';
//     configuration.preExecute[1].params = {};
//     configuration.preExecute[2] = {};
//     configuration.preExecute[2].executeorder = 0;
//     configuration.preExecute[2].tryorder = 0;
//     configuration.preExecute[2].dothis = 'executedefault';
//     configuration.preExecute[2].params = {};
//     configuration.preExecute[3] = {};
//     configuration.preExecute[3].executeorder = 0;
//     configuration.preExecute[3].tryorder = 0;
//     configuration.preExecute[3].dothis = 'server';
//     configuration.preExecute[3].params = {};

//     configuration.midExecute = [];
//     configuration.midExecute[0] = {};
//     configuration.midExecute[0].executeorder = 0;
//     configuration.midExecute[0].tryorder = 0;
//     configuration.midExecute[0].dothis = 'dothis';
//     configuration.midExecute[0].params = {
//         "bravo": "4"
//     };
//     configuration.midExecute[1] = {};
//     configuration.midExecute[1].executeorder = 0;
//     configuration.midExecute[1].tryorder = 0;
//     configuration.midExecute[1].dothis = 'executeparam';
//     configuration.midExecute[1].params = {};
//     configuration.midExecute[2] = {};
//     configuration.midExecute[2].executeorder = 0;
//     configuration.midExecute[2].tryorder = 0;
//     configuration.midExecute[2].dothis = 'executedefault';
//     configuration.midExecute[2].params = {};
//     configuration.midExecute[3] = {};
//     configuration.midExecute[3].executeorder = 0;
//     configuration.midExecute[3].tryorder = 0;
//     configuration.midExecute[3].dothis = 'server';
//     configuration.midExecute[3].params = {};

//     configuration.postExecute = [];
//     configuration.postExecute[0] = {};
//     configuration.postExecute[0].executeorder = 0;
//     configuration.postExecute[0].tryorder = 0;
//     configuration.postExecute[0].dothis = 'dothis';
//     configuration.postExecute[0].params = {
//         "charlie": "4"
//     };
//     configuration.postExecute[1] = {};
//     configuration.postExecute[1].executeorder = 0;
//     configuration.postExecute[1].tryorder = 0;
//     configuration.postExecute[1].dothis = 'executeparam';
//     configuration.postExecute[1].params = {};
//     configuration.postExecute[2] = {};
//     configuration.postExecute[2].executeorder = 0;
//     configuration.postExecute[2].tryorder = 0;
//     configuration.postExecute[2].dothis = 'executedefault';
//     configuration.postExecute[2].params = {};
//     configuration.postExecute[2] = {};
//     configuration.postExecute[2].executeorder = 0;
//     configuration.postExecute[2].tryorder = 0;
//     configuration.postExecute[2].dothis = 'server';
//     configuration.postExecute[2].params = {};

// //     configuration.func_a = [];
// //     configuration.func_a[0] = {};
// //     configuration.func_a[0].order = 0;
// //     configuration.func_a[0].dothis = 'func_a';
// //     configuration.func_a[0].params = {
// //         "alpha": "2"
// //     };

// //     configuration.func_b = [];
// //     configuration.func_b[0] = {};
// //     configuration.func_b[0].order = 0;
// //     configuration.func_b[0].dothis = 'func_b';
// //     configuration.func_b[0].params = {
// //         "bravo": "2"
// //     };

// //     configuration.func_c = [];
// //     configuration.func_c[0] = {};
// //     configuration.func_c[0].order = 0;
// //     configuration.func_c[0].dothis = 'func_c';
// //     configuration.func_c[0].params = {
// //         "charlie": "2"
// //     };

// //     return {
// //         "configuration": configuration
// //     }
// // }

