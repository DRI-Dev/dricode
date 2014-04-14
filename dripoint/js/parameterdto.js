// copyright (c) 2014 DRI

// Returns an array made from an object
exports.objectToList = objectToList = function objectToList(object) {
    proxyprinttodiv('Function objectToList',object, 99);
    var finalArray = [];
    //for (key in object) {
        finalArray.push({ "ParameterName": "test", "ParameterValue":"test"});
    //}
    return finalArray;
};

exports.convertparm = window.convertparm = convertparm = function convertparm(params, keyfilter, valuefilter, type, callback) {
        proxyprinttodiv('Function convertParm', params, 99);
    //var parmobject = ConvertToDOTdri(params);
    var outobject = {};
    var proposedkey;
    var proposedval;
    var jsonArr = [];
    for (var i = 0; i < params.length; i++) {
        jsonArr.push({
            ParameterName: params[i],
            ParameterValue: status.options[i].value
        });
    }
    for (var eachparm in params) {
        if (type === "add") {
            var obj = {
                ParameterName: params,
                ParameterValue: value2
            };
            proposedkey=keyfilter;
            proposedval=params[proposedKey];
            }  
        else {
            proposedkey.replace(keyfilter,"");
            proposedval.replace(valuefilter,"");
           }
            outobject[proposedkey] = proposedval;
        }

    outobject=ConvertFromDOTdri(outobject);
    callback(null, outobject);
}

exports.converttoparameterdto = window.converttoparameterdto = converttoparameterdto = function converttoparameterdto(params, callback) {
    proxyprinttodiv('Function ConvertToParameterDTO', params, 99);
    objectToList(params, function (err, res) {callback(err,res) });
    //convertparm(params, 'ParameterName', 'ParameterValue', 'add', function (err, res) {
    //    callback(err, res)
    //    })
}

exports.con111 = window.con111 = con111 = function con111(params, callback) {

    for (var i; i < params.length; i++) {
        proxyprinttodiv('Function con111',"ParameterName:" + params[i].key + " " + "ParameterValue: " + params[i].value, 99);
    }
    //converttoparameterdto({ "a": "b" }, function (err, res) {
    //    proxyprinttodiv('Function con111', params, 99);
    //    callback(err, res)
    //    })
}

exports.convertfromparameterdto = window.convertfromparameterdto = convertfromparameterdto = function convertfromparameterdto(params, callback) {
    proxyprinttodiv('Function ConvertFromParameterDTO', params, 99);
    callback(null, {"test": "PASS", "a":"b"});
}

exports.converttodatamodeldto = window.converttodatamodeldto = converttodatamodeldto = function converttodatamodeldto(params, callback) {
    proxyprinttodiv('Function ConvertToDataModelDTO', params, 99);
    callback(null, {"test": "PASS", "a":"b"});
}

exports.convertfromdatamodeldto = window.convertfromdatamodeldto = convertfromdatamodeldto = function convertfromdatamodeldto(params, callback) {
    proxyprinttodiv('Function ConvertFromDataModelDTO', params, 99);
    callback(null, {"test": "PASS", "a":"b"});
}

