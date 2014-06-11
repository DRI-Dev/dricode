var unittestdb = [{


    "category":"executeit", "subcategory":"dothis", "type": "minute", 
    "test": "executethis calling a function ", 
    "js": 
    function simpleTestA(params, callback) 
    { 
        console.log('simpleTestA'); 
        // more code
        // our current test functions
        // more code
        callback(null, null);
    }


    },{
    "category":"executethis", "subcategory":"dothis", "type": "minute", 
    "test": "executethis calling a function ",
    "js":
    function simpleTestB(params, callback) 
    { 
        console.log('simpleTestB'); 
        // more code
        // our current test functions
        // more code
        callback(null, null);
    }


    },{
    "type": "minute", "category":"execute", "subcategory":"dothat",
    "test": "executethis calling a function",
    "js":
    function simpleTestC(params, callback) 
    { 
        console.log('simpleTestC'); 
        // more code
        // our current test functions
        // more code
        callback(null, null);
    }



}];






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


    if (p.hasOwnProperty('subcategory'))
    {
        unittestdb = sift({"subcategory": p.subcategory}, unittestdb);
    }
    if (p.hasOwnProperty('category'))
    {
        unittestdb = sift({"category": p.category}, unittestdb);
    }
    
 	var outlist = unittestdb; // sift(query, unittestdb);

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
