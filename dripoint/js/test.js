// var unittestdb = [{


//     "category":"executeit", "subcategory":"dothis", "type": "minute", 
//     "test": "executethis calling a function ", 
//     "js": 
//     function simpleTestA(params, callback) 
//     { 
//         console.log('simpleTestA'); 
//         // more code
//         // our current test functions
//         // more code
//         callback(null, null);
//     }


//     },{
//     "category":"executethis", "subcategory":"dothis", "type": "minute", 
//     "test": "executethis calling a function ",
//     "js":
//     function simpleTestB(params, callback) 
//     { 
//         console.log('simpleTestB'); 
//         // more code
//         // our current test functions
//         // more code
//         callback(null, null);
//     }


//     },{
//     "type": "minute", "category":"execute", "subcategory":"dothat",
//     "test": "executethis calling a function",
//     "js":
//     function simpleTestC(params, callback) 
//     { 
//         console.log('simpleTestC'); 
//         // more code
//         // our current test functions
//         // more code
//         callback(null, null);
//     }



// }];






function rungitetst(o, cb) {
    // set up quweruy
    // call test.
    console.log('rungitetst');
    test({'category':'executeit'}, function(err, result) { console.log('it is over'); })
}

function runalltest(o, cb) {
    // set up quweruy
    // call test.
    console.log('runalltest');
    test({}, function(err, result) { console.log('it is over'); })
}
function runonetest(testname)
{

}

zzss = 'aaa';
function test(p, cb)
{
    // Assumes "unittestdb" is a global
    // COMBINE a fixed list of arrays into ONE array


    // if (p.hasOwnProperty('subcategory'))
    // {
    //     unittestdb = sift({"subcategory": p.subcategory}, unittestdb);
    // }
    // if (p.hasOwnProperty('category'))
    // {
    //     unittestdb = sift({"category": p.category}, unittestdb);
    // }
    //var unittestdb;
    var namespaceObj = wid;
    // var testCount = unittestdb.length;
    var foundArray = [];
    var aTest = null;
    var widKeys = Object.keys(namespaceObj);
    var keyCount = widKeys.length;

    // Create an array of only functions
    for (testname in namespaceObj)
    {
        aTest = namespaceObj[testname];
        if (typeof aTest == "function")
        {
            foundArray.push(testname);
        }
    }

    // Only include functions that match category if category is specified
    var foundArray2 = [];
    if (p.hasOwnProperty('category'))
    {
        for(var x=0; x < keyCount; x++)
        {
            aTest = namespaceObj[foundArray[x]];
            if (aTest.hasOwnProperty('category') && aTest.category == p.category)
            {
                foundArray2.push(foundArray[x]);
            }
        }
    }    

    // Only include functions that match subcategory if subcategory is specified
    var foundArray3 = [];
    if (p.hasOwnProperty('subcategory'))
    {
        for(var x=0; x < foundArray2.length; x++)
        {
            aTest = namespaceObj[foundArray2[x]];
            if (aTest.hasOwnProperty('subcategory') && aTest.subcategory == p.subcategory)
            {
                foundArray3.push(foundArray[x]);
            }
        }
    }
    if (foundArray3.length > 0)
    {
        foundArray = foundArray3;
    } else {
        if (foundArray2.length > 0)
        {
            foundArray = foundArray2;
        }
    }

    // Create an array of functions to execute from the array of names functions
 	var outlist = []; // sift(query, unittestdb);
    for (var x=0; x < foundArray.length; x++)
    {
        outlist.push(namespaceObj[foundArray[x]]);
    }

    console.log(outlist);

    async.mapSeries(outlist, function (eachexecute, cbMap) 
        {
            async.nextTick(function () 
                {
                    console.log('eachexecute = ' + JSON.stringify(eachexecute));
                    
                    if (eachexecute && eachexecute.hasOwnProperty('js'))
                    {
                        // do something with this eachexecute record/object
                        eachexecute.js
                        (   {},                     // parameters
                            function (err, result)  // callback
                            {
                                cbMap(result)
                            }                       
                        )    
                    } else {
                        cbMap(null);
                    }
                }   
            )
        },
        function (err, res)
        {
            cb(null, res);        
        }
    )   
}
