
// create the namespace
var widtests = widtests || {};

exports.testa = widtests.testa = testa = function testa(params, callback) {
	console.log('This is testa');
	console.log(' - params are - ' + JSON.stringify(params));
	proxyprinttodiv('testA executed with params', params, 99);
	callback(null, null);
}
exports.testb = widtests.testb = testb = function testb(params, callback) {
	console.log('This is testb');
	console.log(' - params are - ' + JSON.stringify(params));
	proxyprinttodiv('testB executed with params', params, 99);
	callback(null, null);
}
exports.testc = widtests.testc = testc = function testc(params, callback) {
	console.log('This is testc');
	console.log(' - params are - ' + JSON.stringify(params));
	callback(null, null);
}
exports.testd = widtests.testd = testd = function testd(params, callback) {
	console.log('This is testd');
	console.log(' - params are - ' + JSON.stringify(params));
	callback(null, null);
}
exports.teste = widtests.teste = teste = function teste(params, callback) {
	console.log('This is teste');
	console.log(' - params are - ' + JSON.stringify(params));
	callback(null, null);
}
exports.testf = widtests.testf = testf = function testf(params, callback) {
	console.log('This is testf');
	console.log(' - params are - ' + JSON.stringify(params));
	callback(null, null);
}

widtests.testa.category = 'cat1';
widtests.testa.subcategory = 'cat13';
widtests.testa.js = exports.testa;

exports.testb.category = 'cat1';
exports.testb.subcategory = 'cat44';
exports.testb.js = exports.testb;

exports.testc.category = 'cat2';
exports.testc.subcategory = 'cat13';
exports.testc.js = exports.testc;

exports.testd.category = 'cat2';
exports.testd.subcategory = 'cat7';
exports.testd.js = exports.testd;

exports.teste.category = 'cat3';
exports.teste.subcategory = 'cat3';
exports.teste.js = exports.teste;

exports.testf.category = 'cat4';
exports.testf.subcategory = 'cat41';
exports.testf.js = exports.testf;

