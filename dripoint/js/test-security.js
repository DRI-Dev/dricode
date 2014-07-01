
var widtests = widtests || {};

// simple test to setup data and then test against that
exports.sectest1 = widtests.sectest1 = sectest1 = function sectest1(parm, callback) {

    async.series([
            function(cb1) {
                createtestuser("rogeruser", "rogerac", "99", cb1);
            },
            function(cb1) {
                createtestuser("codyuser", "codyac", "99", cb1)
            },
            function(cb1) { // add codyuser to the driemployeesgroup
                addgrouptowid("codyuser", "userdto", "driemployeegroup", cb1);
            },
            function(cb1) { // rogeruser allows anyone in driemployees to executethis to cretecoupon
                addpermission("rogeruser", "driemployeegroup", "createcoupon", "data", "50", cb1);
            },
            function(cb1) {
                testsecurity("codyac", "executethis", "createcoupon", "data", true, cb1);
            },



            function(cb1) {
                addpermission("rogeruser", "codyuser", "executethis", "createcoupon", "data", 50, cb1);
            },
            function(cb1) {
                addgrouptowid("createcoupon", "xxxxxxx", "rogeruser", cb1);
            },
            function(cb1) {
                testsecurity("rogerac", "executethis", "createcoupon", "data", true, cb1);
            },
            function(cb1) {
                addgrouptowid("codyuser", "userdto", "driemployeegroup", cb1);
            },

            function(cb1) {
                testsecurity("codyac", "executethis", "createcoupon", "data", true, cb1);
            }
        ],
        function(err, res) {

            callback(err, res);

        });
}
widtests.sectest1.category = "execute";
widtests.sectest1.subcategory = "daily";
widtests.sectest1.js = exports.sectest1;
widtests.sectest1.description = "this does a test";

// simple test which sets up all data and then runs sectest1 test after that 
exports.tsa1 = widtests.tsa1 = tsa1 = function tsa1(params, callback) {
    // debuglevel = 34;
    // saveglobal("debugname", "");
    // saveglobal("debugcat", "");
    // saveglobal("debugsubcat", "code");
    // var status = false;

    async.series([
        function(cb1) {
            createsystemdtos(null, function(err, res) {
                cb1(null);
            });
        },
        function(cb1) {
            sectest1(null, function(err, res) {
                cb1(null);
            });
        }
    ], function(err, res) {
        proxyprinttodiv('Function tss3 done a series of tasks using ttdto -- process.addListener(type, listener);', res, 34);
        callback(err, res);
    });
}
widtests.tsa1.category = "execute";
widtests.tsa1.subcategory = "daily";
widtests.tsa1.js = exports.tsa1;
widtests.tsa1.description = "this does a test";


// test getting permissions list :: dependent on sectest1
exports.ttsa3 = widtests.ttsa3 = ttsa3 = function(params, callback) {
    getPermissionsList(["driemployeegroup0", "rogeruser0", "groupdto0", "19", "25"], ["createcoupon0"], ["executethis"], ["data"], 99, function(err, res) {
        proxyprinttodiv('Function ttsa3() in : res', res, 34);
        callback(err, res);

    });
};
widtests.ttsa3.category = "execute";
widtests.ttsa3.subcategory = "daily";
widtests.ttsa3.js = exports.ttsa3;
widtests.ttsa3.description = "this does a test";

// test getting groups recursively :: dependent on sectest1
exports.ttsa4 = widtests.ttsa4 = ttsa4 = function(params, callback) {
    debuglevel = 34;
    saveglobal("debugname", "");
    saveglobal("debugcat", "");
    saveglobal("debugsubcat", "code");
    getGroupRecursive("rogeruser", 99, function(err, res) {
        proxyprinttodiv('Function ttsa4() in : res', res, 34);
        callback(err, res);

    });
};
widtests.ttsa4.category = "execute";
widtests.ttsa4.subcategory = "daily";
widtests.ttsa4.js = exports.ttsa4;
widtests.ttsa4.description = "this does a test";


// test add group to wid :: dependent on sectest1
exports.ttsa6 = widtests.ttsa6 = ttsa6 = function(params, callback) {
    addgrouptowid("anything", "groupnamedto", "createcoupon", callback);
};
widtests.ttsa6.category = "execute";
widtests.ttsa6.subcategory = "daily";
widtests.ttsa6.js = exports.ttsa6;
widtests.ttsa6.description = "this does a test";



// Address dto
// {"executethis":"updatewid","metadata.method":"addressdto","wid":"addressdto", "companyname":"string", "street":"string", "city":"string","state":"string","zip":"string", "metadata.inherit":"defaultaddressproperties"},
// {"executethis":"updatewid","metadata.method":"addressdto","wid":"defaultaddressproperties", "companyname":"No Name Company"},
// {"executethis":"updatewid","metadata.method":"relationshipdto","wid":"rel222","primarywid":"elizabeth_heart","secondarywid":"elizabeth_heart_address", "relationshiptype":"attributes" },
// {"executethis":"updatewid","metadata.method":"addressdto","wid":"elizabeth_heart_address", "street":"1234 First street", "city":"Something City","state":"ZZ","zip":"12345"},
// {"executethis":"getwidmaster","wid":"elizabeth_heart_address"}
