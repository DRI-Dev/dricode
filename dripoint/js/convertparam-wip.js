// copyright (c) 2014 DRI
// Code goes here

var original = [{
  "Key": "exampleAccountId",
  "Value": "1800"
}, {
  "Key": "examplePurchase",
  "Value": "Watermelon"
}, {
  "Key": "exampleAmount",
  "Value": "4"
}, {
  "Key": "examplePrice",
  "Value": "$4.99"
}, {
  "Key": "exampleDate",
  "Value": "10\/12\/12"
}, {
  "Key": "exampleCreator0",
  "Value": "cody0"
}, {
  "Key": "1",
  "Value": "1"
}, {
  'Key': 'test1',
  'Value': [{
    "Key": "exampleCreator1",
    "Value": "cody1"
  }, {
    "Key": "exampleCreator2",
    "Value": "cody2"
  }]
}];


var original1 = [{
  "exampleAccountId": "1800",
  "examplePurchase": "Watermelon",
  "exampleAmount": "4",
  "examplePrice": "exampleDate",
  "exampleCreator": "cody"
}];






var init = function(a) {
  var b = [];
  for (var i in a) {
    var arrKeys = i.split(".");
    console.log(getJson(arrKeys, "Key", "Value", "", "", "xxx"));
  }


}
var a = {
  "0.Key": "exampleAccountId",
  "0.Value": "1800",
  "1.Key": "examplePurchase",
  "1.Value": "Watermelon",
  "2.Key": "exampleAmount",
  "2.Value": "4",
  "3.Key": "examplePrice",
  "3.Value": "$4.99",
  "4.Key": "exampleDate",
  "4.Value": "10/12/12",
  "5.Key": "exampleCreator",
  "5.Value": "cody",
  "6.Key": "1",
  "6.Value": "1",
  "7.Key": "test1",
  "7.Value.0.Key": "exampleCreator",
  "7.Value.0.Value": "cody",
  "7.Value.1.Key": "exampleCreator",
  "7.Value.1.Value": "cody"
};
// init(a);

function getJson(arrKeys, inkey, inval, outkey, outval, value) {
  var counter = 0;
  var previous = {};
  for (var idx in arrKeys) {
    if (idx !== counter) {
      var va = arrKeys[idx];
      if ((!inkey) && (!inval)) {

        var js = {};
        var json = {};
        var pevious = {};
        for (var ctr = 0; ctr <= idx; ctr++) {

          var jsonVal = json(Object.keys(json)[1]);
          var jsonKey = json(Object.keys(json)[0]);
          if (typeof jsonObj[jsonVal] === "string") {
            json[jsonKey] = {};
            previous = json[jsonKey];
          } else {
            json[jsonKey][jsonKey] = {};
            previous = json[jsonKey][jsonKey];
          }
        }

      } else if (va === inkey) {
        // console.log('Key ' + va);
      } else if (va === inval) {
        // console.log('Val ' + va);
      } else {
        
      var js = {};
        var json = {};
        var previous = {};
        var sameObj = true;
        for (var ctr = 0; ctr <= idx; ctr++) {
          if (sameObj) {
            sameObj = false;
          } else {
            sameObj = true;
          }
          

          if (json[outkey]) {
              if (sameObj) {
                previous[outval] = json[outkey][outkey];
              } else {
                json[outkey][outkey] = json[outkey];
                previous = json[outkey];
              }
            } else {
              console.log('>>> else' + JSON.stringify(json));
              if (sameObj) {
                previous[outval] = "";
              } else {
                json[outkey] = "";
                previous = json;
              }
            }




          }
        }
    }
    counter++;
  }
  previous[outval] = value;

  return json;
}



var dotize = function(jsonobj, prefix) {
  var newobj = {};

  function recurse(o, p) {
    for (var f in o) {
      var pre = (p === undefined ? '' : p + ".");
      if (o[f] && typeof o[f] === "object") {
        newobj = recurse(o[f], pre + f);
      } else {
        newobj[pre + f] = o[f];
      }
    }
    return newobj;
  }
  return recurse(jsonobj, prefix);
};



var undotize = function(jsonobj, inkey, inval, outkey, outval, prefix) {

  var outputArr = [];
  // function recurse(o, p) {
  var ctr = 0;
  var lastKey = "";


  for (var json in jsonobj) {
    var value = jsonobj[json];
    var json = getJson(json.split("."), inkey, inval, outkey, outval, value);
    // console.log(json);
    // console.log(JSON.stringify(json));
    outputArr.push(json);
  }

  return outputArr;
  // }
  // return recurse(jsonobj, inkey, inval, outkey, outval, "");
};


function getKeyObject(arr, inkey) {
  var jsonOuter = {};
  var last;
  for (var i = 0; i < arr.length; i++) {
    if (i !== arr[i] && inkey === arr[i]) {
      if (!last) {
        jsonOuter[arr[i]] = {};
        last = jsonOuter[arr[i]];
      } else {
        last[arr[i]] = {};
      }
    }

  }

  return jsonOuter;

}

function convertdto2(param, incomingkey, incomingvalue, outgoingkey, outgoingvalue) {
  // ensure we start with an array
  var incomingarray = [];
  if (!param instanceof Array) {
    incomingarray.push(param);
  } else {
    incomingarray = param;
  }

  // dotize the json
  var json = incomingarray;
  var dotizedjson = dotize(json);
  // console.log(JSON.stringify(dotizedjson));
  var orig = undotize(dotizedjson, incomingkey, incomingvalue, outgoingkey, outgoingvalue, "");

  document.write(JSON.stringify(orig));

}

convertdto2(original, "Key", "Value", "parameterName", "parameterValue"); // convert key: val1,Value:val2 to  parameterName:val1,parameterVal:val2


// convertdto2(original, "Key", "Value", "", ""); // convert key: val1,Value:val2 to  val1:val2l1,Value:val2 to  val1:val2


// convertdto2(original1, "", "", "Key", "Value"); // convert key: val1,Value:val2 to  val1:val2l1,Value:val2 to  val1:val2