
var widtests = widtests || {};

exports.ettestag3v2 = widtests.ettestag3v2 = ettestag3v2 = function ettestag3v2(params, callback) {
    debuglevel = 0;
    execute([{
            "executethis": "addwidmaster",
            "wid": "sounddtov2",
            "metadata.method": "sounddtov2",
            "note": "string"
        }, {
            "executethis": "addwidmaster",
            "wid": "sonddtov2",
            "metadata.method": "sonddtov2",
            "title": "string",
            "metadata.sounddto.type": "onetomany"
        }, {
            "executethis": "addwidmaster",
            "wid": "rel_sound_to_song",
            "metadata.method": "relationshipdto",
            "primarywid": "sonddtov2",
            "secondarywid": "sounddtov2",
            "primarymethod": "sonddtov2",
            "secondarymethod": "sounddtov2",
            "linktype": "onetomany",
            "relationshiptype": "attributes"

        }, {
            "executethis": "addwidmaster",
            "wid": "song1v2",
            "metadata.method": "sonddto",
            "title": "Highway to Hell",
            "sounddto.wid": "ag3aflatv2",
            "sounddto.note": "A flat"
        }, {
            "executethis": "addwidmaster",
            "wid": "song1v2",
            "metadata.method": "sonddto",
            "title": "Highway to Hell",
            "sounddto.wid": "ag3bsharpv2",
            "sounddto.note": "B sharp"
        }, {
            "executethis": "addwidmaster",
            "wid": "song1v2",
            "metadata.method": "sonddto",
            "title": "Highway to Hell",
            "sounddto.wid": "ag3cflatv2",
            "sounddto.note": "C flat"
        }, {
            "executethis": "getwidmaster",
            "wid": "song1v2"
        }],
        function(err, res) {
            debugfn("offlinegetwid code generator END", "", "", "code", getglobal("debugcolor"), getglobal("debugindent"), {}, 9);

            proxyprinttodiv('Function ag3 result Full res', res, 17);
            proxyprinttodiv('Function ag3 result ', res[6], 17);

            res = logverify("ettestag3_result", res[6], [{
                "title": "Highway to Hell",
                "wid": "song1v2",
                "metadata.method": "sonddto",
                "metadata.sounddto.type": "onetomany",
                "sounddto.0.note": "A flat",
                "sounddto.0.wid": "ag3aflatv2",
                "sounddto.0.metadata.method": "sounddto",
                "sounddto.1.note": "B sharp",
                "sounddto.1.wid": "ag3bsharpv2",
                "sounddto.1.metadata.method": "sounddto",
                "sounddto.2.note": "C flat",
                "sounddto.2.wid": "ag3cflatv2",
                "sounddto.2.metadata.method": "sounddto"
            }]);
            debuglevel = 0;
            // execute({"executethis": "getwidmaster","wid": "sonddto",
            //       "command":{"getwidmaster":{"convertmethod":"dto",
            //                               "execute":"ConvertFromDOTdri",
            //                               "inheritflag":"true","dtotype":""}}}, function (err, res1) {
            execute({
                "executethis": "getwidmaster",
                "wid": "song1"
            }, function(err, res1) {
                proxyprinttodiv('Function ag3 result LAST ', res1, 99);
                callback(err, res);

            })
        });
};
widtests.ettestag3v2.category = "execute";
widtests.ettestag3v2.subcategory = "daily";
widtests.ettestag3v2.js = exports.ettestag3v2;
widtests.ettestag3v2.description = "this does a test";


// DTO 1, dot > object 3, dot
exports.ettest1dot3dot = widtests.ettest1dot3dot = ettest1dot3dot = function ettest1dot3dot(params, callback) {
    eventappinstall();

    debuglevel = 0;

    execute([{
            "executethis": "addwidmaster",
            "wid": "songdto",
            "metadata.method": "songdto",
            "title": "string",
            "metadata.sounddto.type": "onetomany",
            "sounddto.wid": "sounddto",
            "sounddto.metadata.method": "sounddto",
            "sounddto.note": "string"
        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "songdto",
            "title": "Highway to Hell",
            "sounddto.note": "A flat"
        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "songdto",
            "title": "Highway to Hell",
            "sounddto.note": "B sharp"
        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "songdto",
            "title": "Highway to Hell",
            "sounddto.note": "C flat"
        }, {
            "executethis": "getwidmaster",
            "wid": "song1"
        }],
        function(err, res) {

            proxyprinttodiv('Function ag3 result Full res', res, 17);
            proxyprinttodiv('Function ag3 result ', res[4], 17);

            res = logverify("ettest1dot3dot", res[4], [{
                "title": "Highway to Hell",
                "wid": "song1",
                "metadata.method": "songdto",
                "sounddto.0.note": "A flat",
                "sounddto.0.wid": "2",
                "sounddto.0.metadata.method": "sounddto",
                "sounddto.1.note": "B sharp",
                "sounddto.1.wid": "4",
                "sounddto.1.metadata.method": "sounddto",
                "sounddto.2.note": "C flat",
                "sounddto.2.wid": "6",
                "sounddto.2.metadata.method": "sounddto",
                "metadata.sounddto.type": "onetomany"
            }]);

            //execute({"executethis": "getwidmaster","wid": "songdto",
            //      "command":{"getwidmaster":{"convertmethod":"dto",
            //                              "execute":"ConvertFromDOTdri",
            //                              "inheritflag":"true","dtotype":""}}}, function (err, res1) {
            execute({
                "executethis": "getwidmaster",
                "wid": "song1"
            }, function(err, res1) {
                proxyprinttodiv('Function ag3 result LAST ', res1, 17);
                callback(err, res);

            })
        });
}
widtests.ettest1dot3dot.category = "execute";
widtests.ettest1dot3dot.subcategory = "daily";
widtests.ettest1dot3dot.js = exports.ettest1dot3dot;
widtests.ettest1dot3dot.description = "this does a test";

// DTO 3, dot > object 3, dot
exports.ettest3dot3dot = widtests.ettest3dot3dot = ettest3dot3dot = function ettest3dot3dot(params, callback) {
    eventappinstall();

    debuglevel = 0;

    execute([{
            "executethis": "addwidmaster",
            "metadata.method": "songdto",
            "wid": "songdto",
            "title": "string",
        }, {
            "executethis": "addwidmaster",
            "metadata.method": "sounddto",
            "wid": "sounddto",
            "note": "string"
        }, {
            "executethis": "addwidmaster",
            "wid": "rel_song_sound",
            "metadata.method": "relationshipdto",
            "relationshiptype": "attributes",
            "linktype": "onetomany",
            "primarywid": "songdto",
            "primarymethod": "songdto",
            "secondarywid": "sounddto",
            "secondarymethod": "sounddto"
        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "songdto",
            "title": "Highway to Hell",
            "sounddto.note": "A flat"
        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "songdto",
            "title": "Highway to Hell",
            "sounddto.note": "B sharp"
        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "songdto",
            "title": "Highway to Hell",
            "sounddto.note": "C flat"
        }, {
            "executethis": "getwidmaster",
            "wid": "song1"
        }],


        function(err, res) {

            proxyprinttodiv('Function ag3 result Full res', res, 17);
            proxyprinttodiv('Function ag3 result 3 x 3', res[6], 17);

            res = logverify("ettest3dot3dot", res[6], [{
                "title": "Highway to Hell",
                "sounddto.0.wid": "1",
                "sounddto.0.note": "A flat",
                "sounddto.0.metadata.method": "sounddto",
                "sounddto.1.wid": "3",
                "sounddto.1.note": "B sharp",
                "sounddto.1.metadata.method": "sounddto",
                "sounddto.2.wid": "5",
                "sounddto.2.note": "C flat",
                "sounddto.2.metadata.method": "sounddto",
                "wid": "song1",
                "metadata.method": "songdto",
                "metadata.sounddto.type": "onetomany"


            }]);
            // execute({"executethis": "getwidmaster","wid": "songdto",
            //       "command":{"getwidmaster":{"convertmethod":"dto",
            //                               "execute":"ConvertFromDOTdri",
            //                               "inheritflag":"true","dtotype":""}}}, function (err, res1) {
            execute({
                "executethis": "getwidmaster",
                "wid": "song1"
            }, function(err, res1) {
                proxyprinttodiv('Function ag3 result LAST ', res1, 17);
                callback(err, res);

            })
        });
}
widtests.ettest3dot3dot.category = "execute";
widtests.ettest3dot3dot.subcategory = "daily";
widtests.ettest3dot3dot.js = exports.ettest3dot3dot;
widtests.ettest3dot3dot.description = "this does a test";

// DTO 3, dot > object 3, dot
exports.ettest3dot1dot = widtests.ettest3dot1dot = ettest3dot1dot = function ettest3dot1dot(params, callback) {
    eventappinstall();

    debuglevel = 0;

    execute([{
            "executethis": "addwidmaster",
            "metadata.method": "songdto",
            "wid": "songdto",
            "title": "string",
        }, {
            "executethis": "addwidmaster",
            "metadata.method": "sounddto",
            "wid": "sounddto",
            "note": "string"
        }, {
            "executethis": "addwidmaster",
            "wid": "rel_song_sound",
            "metadata.method": "relationshipdto",
            "relationshiptype": "attributes",
            "linktype": "onetomany",
            "primarywid": "songdto",
            "primarymethod": "songdto",
            "secondarywid": "sounddto",
            "secondarymethod": "sounddto"
        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "songdto",
            "title": "Highway to Hell",
            "sounddto.0.note": "A flat",
            "sounddto.1.note": "B sharp",
            "sounddto.2.note": "C flat"
        }, {
            "executethis": "getwidmaster",
            "wid": "song1"
        }],


        function(err, res) {

            proxyprinttodiv('Function ag3 result Full res', res, 17);
            proxyprinttodiv('Function ag3 result 3 x 3', res[4], 17);

            res = logverify("ettest3dot1dot", res[4], [{
                "title": "Highway to Hell",
                "sounddto.0.wid": "1",
                "sounddto.0.note": "A flat",
                "sounddto.0.metadata.method": "sounddto",
                "sounddto.1.wid": "3",
                "sounddto.1.note": "B sharp",
                "sounddto.1.metadata.method": "sounddto",
                "sounddto.2.wid": "5",
                "sounddto.2.note": "C flat",
                "sounddto.2.metadata.method": "sounddto",
                "wid": "song1",
                "metadata.method": "songdto",
                "metadata.sounddto.type": "onetomany"


            }]);
            // execute({"executethis": "getwidmaster","wid": "songdto",
            //       "command":{"getwidmaster":{"convertmethod":"dto",
            //                               "execute":"ConvertFromDOTdri",
            //                               "inheritflag":"true","dtotype":""}}}, function (err, res1) {
            execute({
                "executethis": "getwidmaster",
                "wid": "song1"
            }, function(err, res1) {
                proxyprinttodiv('Function ag3 result LAST ', res1, 17);
                callback(err, res);

            })
        });
}
widtests.ettest3dot1dot.category = "execute";
widtests.ettest3dot1dot.subcategory = "daily";
widtests.ettest3dot1dot.js = exports.ettest3dot1dot;
widtests.ettest3dot1dot.description = "this does a test";

// DTO 3, dot > object 3, dot
exports.ettest1dot1dot = widtests.ettest1dot1dot = ettest1dot1dot = function ettest1dot1dot(params, callback) {
    eventappinstall();

    debuglevel = 0;

    execute([{
            "executethis": "addwidmaster",
            "wid": "songdto",
            "metadata.method": "songdto",
            "title": "string",
            "metadata.sounddto.type": "onetomany",
            "sounddto.wid": "sounddto",
            "sounddto.metadata.method": "sounddto",
            "sounddto.note": "string"
        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "songdto",
            "title": "Highway to Hell",
            "sounddto.0.note": "A flat",
            "sounddto.1.note": "B sharp",
            "sounddto.2.note": "C flat"
        }, {
            "executethis": "getwidmaster",
            "wid": "song1"
        }],

        function(err, res) {

            proxyprinttodiv('Function ag3 result Full res', res, 17);
            proxyprinttodiv('Function ag3 result 3 x 3', res[2], 17);

            res = logverify("ettest1dot1dot", res[2], [{
                "title": "Highway to Hell",
                "sounddto.0.wid": "2",
                "sounddto.0.note": "A flat",
                "sounddto.0.metadata.method": "sounddto",
                "sounddto.1.wid": "4",
                "sounddto.1.note": "B sharp",
                "sounddto.1.metadata.method": "sounddto",
                "sounddto.2.wid": "6",
                "sounddto.2.note": "C flat",
                "sounddto.2.metadata.method": "sounddto",
                "wid": "song1",
                "metadata.method": "songdto",
                "metadata.sounddto.type": "onetomany"

            }]);

            // execute({"executethis": "getwidmaster","wid": "songdto",
            //       "command":{"getwidmaster":{"convertmethod":"dto",
            //                               "execute":"ConvertFromDOTdri",
            //                               "inheritflag":"true","dtotype":""}}}, function (err, res1) {
            execute({
                "executethis": "getwidmaster",
                "wid": "song1"
            }, function(err, res1) {
                proxyprinttodiv('Function ag3 result LAST ', res1, 17);
                callback(err, res);

            })
        });
}
widtests.ettest1dot1dot.category = "execute";
widtests.ettest1dot1dot.subcategory = "daily";
widtests.ettest1dot1dot.js = exports.ettest1dot1dot;
widtests.ettest1dot1dot.description = "this does a test";

/* jsononetomany tests */
// DTO 1, dot > object , dot,, jsononetomany
exports.ettest1dot3dotjsonmany = widtests.ettest1dot3dotjsonmany = ettest1dot3dotjsonmany = function ettest1dot3dotjsonmany(params, callback) {
    eventappinstall();

    debuglevel = 0;

    execute([{
            "executethis": "addwidmaster",
            "wid": "songdto",
            "metadata.method": "songdto",
            "title": "string",
            "metadata.sounddto.type": "jsononetomany",
            //"sounddto.wid": "sounddto",
            //"sounddto.metadata.method": "sounddto",
            "sounddto.wid": "string",
            "sounddto.metadata.method": "string",
            "sounddto.note": "string"

        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "songdto",
            "title": "Highway to Hell",
            "sounddto.note": "A flat"
        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "songdto",
            "title": "Highway to Hell",
            "sounddto.note": "B sharp"
        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "songdto",
            "title": "Highway to Hell",
            "sounddto.note": "C flat"
        }, {
            "executethis": "getwidmaster",
            "wid": "song1"
        }],

        function(err, res) {

            proxyprinttodiv('Function ag3 result Full res', res, 17);
            proxyprinttodiv('Function ag3 result ', res[4], 17);

            res = logverify("ettest1dot3dotjsonmany", res[4], [{
                "sounddto.0.note": "A flat",
                "sounddto.1.note": "B sharp",
                "sounddto.2.note": "C flat",
                "title": "Highway to Hell",
                "wid": "song1",
                "metadata.method": "songdto"
            }]);

            //[{"sounddto.0.note":"A flat","sounddto.1.note":"B sharp","sounddto.2.note":"C flat",
            //"title":"Highway to Hell","wid":"song1","metadata.method":"songdto"}]

            debuglevel = 38;
            //execute({"executethis": "getwidmaster","wid": "songdto",
            //      "command":{"getwidmaster":{"convertmethod":"dto",
            //                              "execute":"ConvertFromDOTdri",
            //                              "inheritflag":"true","dtotype":""}}}, function (err, res1) {
            execute({
                "executethis": "getwidmaster",
                "wid": "song1"
            }, function(err, res1) {
                proxyprinttodiv('Function ag3 result LAST ', res1, 17);
                callback(err, res);

            })
        });
}
widtests.ettest1dot3dotjsonmany.category = "execute";
widtests.ettest1dot3dotjsonmany.subcategory = "daily";
widtests.ettest1dot3dotjsonmany.js = exports.ettest1dot3dotjsonmany;
widtests.ettest1dot3dotjsonmany.description = "this does a test";

// DTO 3, dot > object 3, dot,, jsononetomany
exports.ettest3dot3dotjsonmany = widtests.ettest3dot3dotjsonmany = ettest3dot3dotjsonmany = function ettest3dot3dotjsonmany(params, callback) {
    eventappinstall();

    debuglevel = 0;

    execute([{
            "executethis": "addwidmaster",
            "metadata.method": "songdto",
            "wid": "songdto",
            "title": "string",
        }, {
            "executethis": "addwidmaster",
            "metadata.method": "sounddto",
            "wid": "sounddto",
            "note": "string"
        }, {
            "executethis": "addwidmaster",
            "wid": "rel_song_sound",
            "metadata.method": "relationshipdto",
            "relationshiptype": "attributes",
            "linktype": "jsononetomany",
            "primarywid": "songdto",
            "primarymethod": "songdto",
            "secondarywid": "sounddto",
            "secondarymethod": "sounddto"
        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "songdto",
            "title": "Highway to Hell",
            "sounddto.note": "A flat"
        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "songdto",
            "title": "Highway to Hell",
            "sounddto.note": "B sharp"
        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "songdto",
            "title": "Highway to Hell",
            "sounddto.note": "C flat"
        }, {
            "executethis": "getwidmaster",
            "wid": "song1"
        }],


        function(err, res) {

            proxyprinttodiv('Function ag3 result Full res', res, 17);
            proxyprinttodiv('Function ag3 result 3 x 3', res[6], 17);

            res = logverify("ettest3dot3dotjsonmany", res[6], [{
                "sounddto.0.note": "A flat",
                "sounddto.1.note": "B sharp",
                "sounddto.2.note": "C flat",
                "title": "Highway to Hell",
                "wid": "song1",
                "metadata.method": "songdto"
            }]);
            // execute({"executethis": "getwidmaster","wid": "songdto",
            //       "command":{"getwidmaster":{"convertmethod":"dto",
            //                               "execute":"ConvertFromDOTdri",
            //                               "inheritflag":"true","dtotype":""}}}, function (err, res1) {
            execute({
                "executethis": "getwidmaster",
                "wid": "song1"
            }, function(err, res1) {
                proxyprinttodiv('Function ag3 result LAST ', res1, 17);
                callback(err, res);

            })
        });
}
widtests.ettest3dot3dotjsonmany.category = "execute";
widtests.ettest3dot3dotjsonmany.subcategory = "daily";
widtests.ettest3dot3dotjsonmany.js = exports.ettest3dot3dotjsonmany;
widtests.ettest3dot3dotjsonmany.description = "this does a test";

// DTO 3, dot > object 3, dot,, jsononetomany
exports.ettest3dot1dotjsonmany = widtests.ettest3dot1dotjsonmany = ettest3dot1dotjsonmany = function ettest3dot1dotjsonmany(params, callback) {
    eventappinstall();

    debuglevel = 0;

    execute([{
            "executethis": "addwidmaster",
            "metadata.method": "songdto",
            "wid": "songdto",
            "title": "string",
        }, {
            "executethis": "addwidmaster",
            "metadata.method": "sounddto",
            "wid": "sounddto",
            "note": "string"
        }, {
            "executethis": "addwidmaster",
            "wid": "rel_song_sound",
            "metadata.method": "relationshipdto",
            "relationshiptype": "attributes",
            "linktype": "jsononetomany",
            "primarywid": "songdto",
            "primarymethod": "songdto",
            "secondarywid": "sounddto",
            "secondarymethod": "sounddto"
        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "songdto",
            "title": "Highway to Hell",
            "sounddto.0.note": "A flat",
            "sounddto.1.note": "B sharp",
            "sounddto.2.note": "C flat"
        }, {
            "executethis": "getwidmaster",
            "wid": "song1"
        }],


        function(err, res) {

            proxyprinttodiv('Function ag3 result Full res', res, 17);
            proxyprinttodiv('Function ag3 result 3 x 3', res[4], 17);

            res = logverify("ettest3dot1dotjsonmany", res[4], [{
                "sounddto.0.note": "A flat",
                "sounddto.1.note": "B sharp",
                "sounddto.2.note": "C flat",
                "title": "Highway to Hell",
                "wid": "song1",
                "metadata.method": "songdto"
            }]);
            // execute({"executethis": "getwidmaster","wid": "songdto",
            //       "command":{"getwidmaster":{"convertmethod":"dto",
            //                               "execute":"ConvertFromDOTdri",
            //                               "inheritflag":"true","dtotype":""}}}, function (err, res1) {
            execute({
                "executethis": "getwidmaster",
                "wid": "song1"
            }, function(err, res1) {
                proxyprinttodiv('Function ag3 result LAST ', res1, 17);
                callback(err, res);

            })
        });
}
widtests.ettest3dot1dotjsonmany.category = "execute";
widtests.ettest3dot1dotjsonmany.subcategory = "daily";
widtests.ettest3dot1dotjsonmany.js = exports.ettest3dot1dotjsonmany;
widtests.ettest3dot1dotjsonmany.description = "this does a test";

// DTO 3, dot > object 3, dot,, jsononetomany
exports.ettest1dot1dotjsonmany = widtests.ettest1dot1dotjsonmany = ettest1dot1dotjsonmany = function ettest1dot1dotjsonmany(params, callback) {
    eventappinstall();

    debuglevel = 0;

    execute([{
            "executethis": "addwidmaster",
            "wid": "songdto",
            "metadata.method": "songdto",
            "title": "string",
            "metadata.sounddto.type": "jsononetomany",
            "sounddto.wid": "sounddto",
            "sounddto.metadata.method": "sounddto",
            "sounddto.note": "string"
        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "songdto",
            "title": "Highway to Hell",
            "sounddto.0.note": "A flat",
            "sounddto.1.note": "B sharp",
            "sounddto.2.note": "C flat"
        }, {
            "executethis": "getwidmaster",
            "wid": "song1"
        }],

        function(err, res) {

            proxyprinttodiv('Function ag3 result Full res', res, 17);
            proxyprinttodiv('Function ag3 result 3 x 3', res[2], 17);

            res = logverify("ettest1dot1dotjsonmany", res[2], [{
                "sounddto.0.note": "A flat",
                "sounddto.1.note": "B sharp",
                "sounddto.2.note": "C flat",
                "title": "Highway to Hell",
                "wid": "song1",
                "metadata.method": "songdto"
            }]);
            // execute({"executethis": "getwidmaster","wid": "songdto",
            //       "command":{"getwidmaster":{"convertmethod":"dto",
            //                               "execute":"ConvertFromDOTdri",
            //                               "inheritflag":"true","dtotype":""}}}, function (err, res1) {
            execute({
                "executethis": "getwidmaster",
                "wid": "song1"
            }, function(err, res1) {
                proxyprinttodiv('Function ag3 result LAST ', res1, 17);
                callback(err, res);

            })
        });
}
widtests.ettest1dot1dotjsonmany.category = "execute";
widtests.ettest1dot1dotjsonmany.subcategory = "daily";
widtests.ettest1dot1dotjsonmany.js = exports.ettest1dot1dotjsonmany;
widtests.ettest1dot1dotjsonmany.description = "this does a test";

/* jsononetoone tests */
// DTO 1, dot > object , dot,, jsononetoone
exports.ettest1dot3dotjsonone = widtests.ettest1dot3dotjsonone = ettest1dot3dotjsonone = function ettest1dot3dotjsonone(params, callback) {
    eventappinstall();

    debuglevel = 0;

    execute([{
            "executethis": "addwidmaster",
            "wid": "songdto",
            "metadata.method": "songdto",
            "title": "string",
            "metadata.sounddto.type": "jsononetoone",
            //"sounddto.wid": "sounddto",
            //"sounddto.metadata.method": "sounddto",
            "sounddto.wid": "string",
            "sounddto.metadata.method": "string",
            "sounddto.note": "string"

        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "songdto",
            "title": "Highway to Hell",
            "sounddto.note": "A flat"
        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "songdto",
            "title": "Highway to Hell",
            "sounddto.note": "B sharp"
        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "songdto",
            "title": "Highway to Hell",
            "sounddto.note": "C flat"
        }, {
            "executethis": "getwidmaster",
            "wid": "song1"
        }],

        function(err, res) {

            proxyprinttodiv('Function ag3 result Full res', res, 17);
            proxyprinttodiv('Function ag3 result ', res[4], 17);

            res = logverify("ettest1dot3dotjsonone", res[4], [{
                "title": "Highway to Hell",
                "sounddto.note": "C flat",
                "wid": "song1",
                "metadata.method": "songdto"
            }]);
            //execute({"executethis": "getwidmaster","wid": "songdto",
            //      "command":{"getwidmaster":{"convertmethod":"dto",
            //                              "execute":"ConvertFromDOTdri",
            //                              "inheritflag":"true","dtotype":""}}}, function (err, res1) {
            execute({
                "executethis": "getwidmaster",
                "wid": "song1"
            }, function(err, res1) {
                proxyprinttodiv('Function ag3 result LAST ', res1, 17);
                callback(err, res);

            })
        });
}
widtests.ettest1dot3dotjsonone.category = "execute";
widtests.ettest1dot3dotjsonone.subcategory = "daily";
widtests.ettest1dot3dotjsonone.js = exports.ettest1dot3dotjsonone;
widtests.ettest1dot3dotjsonone.description = "this does a test";

// DTO 3, dot > object 3, dot,, jsononetoone
exports.ettest3dot3dotjsonone = widtests.ettest3dot3dotjsonone = ettest3dot3dotjsonone = function ettest3dot3dotjsonone(params, callback) {
    eventappinstall();

    debuglevel = 0;

    execute([{
            "executethis": "addwidmaster",
            "metadata.method": "songdto",
            "wid": "songdto",
            "title": "string",
        }, {
            "executethis": "addwidmaster",
            "metadata.method": "sounddto",
            "wid": "sounddto",
            "note": "string"
        }, {
            "executethis": "addwidmaster",
            "wid": "rel_song_sound",
            "metadata.method": "relationshipdto",
            "relationshiptype": "attributes",
            "linktype": "jsononetoone",
            "primarywid": "songdto",
            "primarymethod": "songdto",
            "secondarywid": "sounddto",
            "secondarymethod": "sounddto"
        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "songdto",
            "title": "Highway to Hell",
            "sounddto.note": "A flat"
        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "songdto",
            "title": "Highway to Hell",
            "sounddto.note": "B sharp"
        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "songdto",
            "title": "Highway to Hell",
            "sounddto.note": "C flat"
        }, {
            "executethis": "getwidmaster",
            "wid": "song1"
        }],


        function(err, res) {

            proxyprinttodiv('Function ag3 result Full res', res, 17);
            proxyprinttodiv('Function ag3 result 3 x 3', res[6], 17);

            res = logverify("ettest3dot3dotjsonone", res[6], [{
                "title": "Highway to Hell",
                "sounddto.note": "C flat",
                "wid": "song1",
                "metadata.method": "songdto"
            }]);
            // execute({"executethis": "getwidmaster","wid": "songdto",
            //       "command":{"getwidmaster":{"convertmethod":"dto",
            //                               "execute":"ConvertFromDOTdri",
            //                               "inheritflag":"true","dtotype":""}}}, function (err, res1) {
            execute({
                "executethis": "getwidmaster",
                "wid": "song1"
            }, function(err, res1) {
                proxyprinttodiv('Function ag3 result LAST ', res1, 17);
                callback(err, res);

            })
        });
}
widtests.ettest3dot3dotjsonone.category = "execute";
widtests.ettest3dot3dotjsonone.subcategory = "daily";
widtests.ettest3dot3dotjsonone.js = exports.ettest3dot3dotjsonone;
widtests.ettest3dot3dotjsonone.description = "this does a test";

// DTO 3, dot > object 3, dot,, jsononetoone
exports.ettest3dot1dotjsonone = widtests.ettest3dot1dotjsonone = ettest3dot1dotjsonone = function ettest3dot1dotjsonone(params, callback) {
    eventappinstall();

    debuglevel = 0;

    execute([{
            "executethis": "addwidmaster",
            "metadata.method": "songdto",
            "wid": "songdto",
            "title": "string",
        }, {
            "executethis": "addwidmaster",
            "metadata.method": "sounddto",
            "wid": "sounddto",
            "note": "string"
        }, {
            "executethis": "addwidmaster",
            "wid": "rel_song_sound",
            "metadata.method": "relationshipdto",
            "relationshiptype": "attributes",
            "linktype": "jsononetoone",
            "primarywid": "songdto",
            "primarymethod": "songdto",
            "secondarywid": "sounddto",
            "secondarymethod": "sounddto"
        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "songdto",
            "title": "Highway to Hell",
            "sounddto.0.note": "A flat",
            "sounddto.1.note": "B sharp",
            "sounddto.2.note": "C flat"
        }, {
            "executethis": "getwidmaster",
            "wid": "song1"
        }],


        function(err, res) {

            proxyprinttodiv('Function ag3 result Full res', res, 17);
            proxyprinttodiv('Function ag3 result 3 x 3', res[4], 17);

            res = logverify("ettest3dot1dotjsonone", res[4], [{
                "title": "Highway to Hell",
                //"sounddto.0.note":"A flat",
                //"sounddto.1.note":"B sharp",
                "sounddto.note": "C flat",
                "wid": "song1",
                "metadata.method": "songdto"
            }]);
            // execute({"executethis": "getwidmaster","wid": "songdto",
            //       "command":{"getwidmaster":{"convertmethod":"dto",
            //                               "execute":"ConvertFromDOTdri",
            //                               "inheritflag":"true","dtotype":""}}}, function (err, res1) {
            execute({
                "executethis": "getwidmaster",
                "wid": "song1"
            }, function(err, res1) {
                proxyprinttodiv('Function ag3 result LAST ', res1, 17);
                callback(err, res);

            })
        });
}
widtests.ettest3dot1dotjsonone.category = "execute";
widtests.ettest3dot1dotjsonone.subcategory = "daily";
widtests.ettest3dot1dotjsonone.js = exports.ettest3dot1dotjsonone;
widtests.ettest3dot1dotjsonone.description = "this does a test";

// DTO 3, dot > object 3, dot,, jsononetoone
exports.ettest1dot1dotjsonone = widtests.ettest1dot1dotjsonone = ettest1dot1dotjsonone = function ettest1dot1dotjsonone(params, callback) {
    eventappinstall();

    debuglevel = 17;

    execute([{
            "executethis": "addwidmaster",
            "wid": "songdto",
            "metadata.method": "songdto",
            "title": "string",
            "metadata.sounddto.type": "jsononetoone",
            "sounddto.wid": "sounddto",
            "sounddto.metadata.method": "sounddto",
            "sounddto.note": "string"
        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata.method": "songdto",
            "title": "Highway to Hell",
            "sounddto.0.note": "A flat",
            "sounddto.1.note": "B sharp",
            "sounddto.2.note": "C flat"
        }, {
            "executethis": "getwidmaster",
            "wid": "song1"
        }],
        function(err, res) {

            proxyprinttodiv('Function ag3 result Full res', res, 17);
            proxyprinttodiv('Function ag3 result 3 x 3', res[2], 17);

            res = logverify("ettest1dot1dotjsonone", res[2], [{
                "title": "Highway to Hell",
                //"sounddto.0.note":"A flat",
                //"sounddto.1.note":"B sharp",
                "sounddto.note": "C flat",
                "wid": "song1",
                "metadata.method": "songdto"
            }]);
            // execute({"executethis": "getwidmaster","wid": "songdto",
            //       "command":{"getwidmaster":{"convertmethod":"dto",
            //                               "execute":"ConvertFromDOTdri",
            //                               "inheritflag":"true","dtotype":""}}}, function (err, res1) {
            execute({
                "executethis": "getwidmaster",
                "wid": "song1"
            }, function(err, res1) {
                proxyprinttodiv('Function ag3 result LAST ', res1, 17);
                callback(err, res);

            })
        });
}
widtests.ettest1dot1dotjsonone.category = "execute";
widtests.ettest1dot1dotjsonone.subcategory = "daily";
widtests.ettest1dot1dotjsonone.js = exports.ettest1dot1dotjsonone;
widtests.ettest1dot1dotjsonone.description = "this does a test";

/* object tests */
// DTO 1, dot > object , dot,, object
exports.ettest1dot3dotobject = widtests.ettest1dot3dotobject = ettest1dot3dotobject = function ettest1dot3dotobject(params, callback) {
    eventappinstall();

    debuglevel = 0;

    execute([{
            "executethis": "addwidmaster",
            "wid": "songdto",
            "metadata": {
                "method": "songdto"
            },
            "title": "string",
            "metadata.sounddto.type": "jsononetoone",
            //"sounddto.wid": "sounddto",
            //"sounddto.metadata.method": "sounddto",
            "sounddto": {
                "wid": "string"
            },
            "sounddto": {
                "metadata": {
                    "method": "string"
                }
            },
            "sounddto": {
                "note": "string"
            }

        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata": {
                "method": "songdto"
            },
            "title": "Highway to Hell",
            "sounddto": {
                "note": "A flat"
            }
        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata": {
                "method": "songdto"
            },
            "title": "Highway to Hell",
            "sounddto": {
                "note": "B sharp"
            }
        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata": {
                "method": "songdto"
            },
            "title": "Highway to Hell",
            "sounddto": {
                "note": "C flat"
            }
        }, {
            "executethis": "getwidmaster",
            "wid": "song1"
        }],

        function(err, res) {

            proxyprinttodiv('Function ag3 result Full res', res, 17);
            proxyprinttodiv('Function ag3 result ', res[4], 17);

            res = logverify("ettest1dot3dotobject", res[4], [{
                "title": "Highway to Hell",
                "sounddto.note": "C flat",
                "wid": "song1",
                "metadata.method": "songdto"
            }]);

            //execute({"executethis": "getwidmaster","wid": "songdto",
            //      "command":{"getwidmaster":{"convertmethod":"dto",
            //                              "execute":"ConvertFromDOTdri",
            //                              "inheritflag":"true","dtotype":""}}}, function (err, res1) {
            execute({
                "executethis": "getwidmaster",
                "wid": "song1"
            }, function(err, res1) {
                proxyprinttodiv('Function ag3 result LAST ', res1, 17);
                callback(err, res);

            })
        });
}
widtests.ettest1dot3dotobject.category = "execute";
widtests.ettest1dot3dotobject.subcategory = "daily";
widtests.ettest1dot3dotobject.js = exports.ettest1dot3dotobject;
widtests.ettest1dot3dotobject.description = "this does a test";

// DTO 3, dot > object 3, dot,, object
exports.ettest3dot3dotobject = widtests.ettest3dot3dotobject = ettest3dot3dotobject = function ettest3dot3dotobject(params, callback) {
    eventappinstall();

    debuglevel = 0;

    execute([{
            "executethis": "addwidmaster",
            "metadata": {
                "method": "songdto"
            },
            "wid": "songdto",
            "title": "string",
        }, {
            "executethis": "addwidmaster",
            "metadata": {
                "method": "sounddto"
            },
            "wid": "sounddto",
            "note": "string"
        }, {
            "executethis": "addwidmaster",
            "wid": "rel_song_sound",
            "metadata": {
                "method": "relationshipdto"
            },
            "relationshiptype": "attributes",
            "linktype": "jsononetoone",
            "primarywid": "songdto",
            "primarymethod": "songdto",
            "secondarywid": "sounddto",
            "secondarymethod": "sounddto"
        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata": {
                "method": "songdto"
            },
            "title": "Highway to Hell",
            "sounddto": {
                "note": "A flat"
            }
        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata": {
                "method": "songdto"
            },
            "title": "Highway to Hell",
            "sounddto": {
                "note": "B sharp"
            }
        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata": {
                "method": "songdto"
            },
            "title": "Highway to Hell",
            "sounddto": {
                "note": "C flat"
            }
        }, {
            "executethis": "getwidmaster",
            "wid": "song1"
        }],


        function(err, res) {

            proxyprinttodiv('Function ag3 result Full res', res, 17);
            proxyprinttodiv('Function ag3 result 3 x 3', res[6], 17);

            res = logverify("ettest3dot3dotobject", res[6], [{
                "title": "Highway to Hell",
                "sounddto.note": "C flat",
                "wid": "song1",
                "metadata.method": "songdto"
            }]);
            // execute({"executethis": "getwidmaster","wid": "songdto",
            //       "command":{"getwidmaster":{"convertmethod":"dto",
            //                               "execute":"ConvertFromDOTdri",
            //                               "inheritflag":"true","dtotype":""}}}, function (err, res1) {
            execute({
                "executethis": "getwidmaster",
                "wid": "song1"
            }, function(err, res1) {
                proxyprinttodiv('Function ag3 result LAST ', res1, 17);
                callback(err, res);

            })
        });
}
widtests.ettest3dot3dotobject.category = "execute";
widtests.ettest3dot3dotobject.subcategory = "daily";
widtests.ettest3dot3dotobject.js = exports.ettest3dot3dotobject;
widtests.ettest3dot3dotobject.description = "this does a test";

// DTO 3, dot > object 3, dot,, object
exports.ettest3dot1dotobject = widtests.ettest3dot1dotobject = ettest3dot1dotobject = function ettest3dot1dotobject(params, callback) {
    eventappinstall();

    debuglevel = 0;

    execute([{
            "executethis": "addwidmaster",
            "metadata": {
                "method": "songdto"
            },
            "wid": "songdto",
            "title": "string",
        }, {
            "executethis": "addwidmaster",
            "metadata": {
                "method": "sounddto"
            },
            "wid": "sounddto",
            "note": "string"
        }, {
            "executethis": "addwidmaster",
            "wid": "rel_song_sound",
            "metadata": {
                "method": "relationshipdto"
            },
            "relationshiptype": "attributes",
            "linktype": "jsononetoone",
            "primarywid": "songdto",
            "primarymethod": "songdto",
            "secondarywid": "sounddto",
            "secondarymethod": "sounddto"
        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata": {
                "method": "songdto"
            },
            "title": "Highway to Hell",
            "sounddto.0.note": "A flat",
            "sounddto.1.note": "B sharp",
            "sounddto.2.note": "C flat"
        }, {
            "executethis": "getwidmaster",
            "wid": "song1"
        }],
        function(err, res) {

            proxyprinttodiv('Function ag3 result Full res', res, 17);
            proxyprinttodiv('Function ag3 result 3 x 3', res[4], 17);

            res = logverify("ettest3dot1dotobject", res[4], [{
                "title": "Highway to Hell",
                // "sounddto.0.note":"A flat",
                // "sounddto.1.note":"B sharp",
                "sounddto.note": "C flat",
                "wid": "song1",
                "metadata.method": "songdto"
            }]);
            // execute({"executethis": "getwidmaster","wid": "songdto",
            //       "command":{"getwidmaster":{"convertmethod":"dto",
            //                               "execute":"ConvertFromDOTdri",
            //                               "inheritflag":"true","dtotype":""}}}, function (err, res1) {
            execute({
                "executethis": "getwidmaster",
                "wid": "song1"
            }, function(err, res1) {
                proxyprinttodiv('Function ag3 result LAST ', res1, 17);
                callback(err, res);

            })
        });
}
widtests.ettest3dot1dotobject.category = "execute";
widtests.ettest3dot1dotobject.subcategory = "daily";
widtests.ettest3dot1dotobject.js = exports.ettest3dot1dotobject;
widtests.ettest3dot1dotobject.description = "this does a test";

// DTO 3, dot > object 3, dot,, object
exports.ettest1dot1dotobject = widtests.ettest1dot1dotobject = ettest1dot1dotobject = function ettest1dot1dotobject(params, callback) {
    eventappinstall();

    debuglevel = 0;

    execute([{
            "executethis": "addwidmaster",
            "wid": "songdto",
            "metadata": {
                "method": "songdto"
            },
            "title": "string",
            "metadata": {
                "sounddto": {
                    "type": "jsononetoone"
                }
            },
            "sounddto": {
                "wid": "sounddto"
            },
            "sounddto": {
                "metadata": {
                    "method": "sounddto"
                }
            },
            "sounddto": {
                "note": "string"
            }
        }, {
            "executethis": "addwidmaster",
            "wid": "song1",
            "metadata": {
                "method": "songdto"
            },
            "title": "Highway to Hell",
            "sounddto.0.note": "A flat",
            "sounddto.1.note": "B sharp",
            "sounddto.2.note": "C flat"
        }, {
            "executethis": "getwidmaster",
            "wid": "song1"
        }],

        function(err, res) {

            proxyprinttodiv('Function ag3 result Full res', res, 17);
            proxyprinttodiv('Function ag3 result 3 x 3', res[2], 17);

            res = logverify("ettestagag3_result", res[2], [{
                "title": "Highway to Hell",
                // "sounddto.0.note":"A flat",
                // "sounddto.1.note":"B sharp",
                "sounddto.note": "C flat",
                "wid": "song1",
                "metadata.method": "songdto"
            }]);
            // execute({"executethis": "getwidmaster","wid": "songdto",
            //       "command":{"getwidmaster":{"convertmethod":"dto",
            //                               "execute":"ConvertFromDOTdri",
            //                               "inheritflag":"true","dtotype":""}}}, function (err, res1) {
            execute({
                "executethis": "getwidmaster",
                "wid": "song1"
            }, function(err, res1) {
                proxyprinttodiv('Function ag3 result LAST ', res1, 17);
                callback(err, res);
            })
        });
}
widtests.ettest1dot1dotobject.category = "execute";
widtests.ettest1dot1dotobject.subcategory = "daily";
widtests.ettest1dot1dotobject.js = exports.ettest1dot1dotobject;
widtests.ettest1dot1dotobject.description = "this does a test";

/*
ettest1dot3dotjsonmany
ettest3dot3dotjsonmany
ettest3dot1dotjsonmany
ettest1dot1dotjsonmany

ettest1dot3dotjsonone
ettest3dot3dotjsonone
ettest3dot1dotjsonone
ettest1dot1dotjsonone

ettest1dot3dotobject
ettest3dot3dotobject
ettest3dot1dotobject
ettest1dot1dotobject
*/

exports.ettestdot = widtests.ettestdot = ettestdot = function ettestdot(params, callback) {
    var result = [];
    var err;

    ettest1dot3dotjsonmany(result, function(err, r1) {
        result.push(r1);
        ettest3dot3dotjsonmany(result, function(err, r2) {
            result.push(r2);
            ettest3dot1dotjsonmany(result, function(err, r3) {
                result.push(r3);
                ettest1dot3dotjsonone(result, function(err, r4) {
                    result.push(r4);
                    ettest1dot3dotjsonone(result, function(err, r5) {
                        result.push(r5);
                        ettest3dot3dotjsonone(result, function(err, r6) {
                            result.push(r6);
                            ettest3dot1dotjsonone(result, function(err, r7) {
                                result.push(r7);
                                ettest1dot1dotjsonone(result, function(err, r8) {
                                    result.push(r8);
                                    ettest1dot3dotobject(result, function(err, r9) {
                                        result.push(r9);
                                        ettest3dot3dotobject(result, function(err, r10) {
                                            result.push(r10);
                                            ettest3dot1dotobject(result, function(err, r11) {
                                                result.push(r11);
                                                ettest1dot1dotobject(result, function(err, r12) {
                                                    result.push(r12);
                                                    callback(err, result);
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
}
widtests.ettestdot.category = "execute";
widtests.ettestdot.subcategory = "daily";
widtests.ettestdot.js = exports.ettestdot;
widtests.ettestdot.description = "this does a test";


exports.addwid4params = widtests.addwid4params = addwid4params = function addwid4params(a, b, c, d, callback) {


    var paramsDataString = "{\"" + a + "\":\"" + a + "\",\"" + b + "\":\"" + b + "\",\"" + c + "\":\"" + c + "\",\"" + d + "\":\"" + d + "\"}";
    // alert(paramsDataString);
    var json = JSON.parse(paramsDataString);
    addwidmaster(json, callback);
}
widtests.addwid4params.category = "execute";
widtests.addwid4params.subcategory = "daily";
widtests.addwid4params.js = exports.addwid4params;
widtests.addwid4params.description = "this does a test";


exports.ettss1 = widtests.ettss1 = ettss1 = function ettss1(params, callback) {
    debuglevel = 17;
    // saveglobal("debugname", "");
    // saveglobal("debugcat", "");
    // saveglobal("debugsubcat", "code");
    var status = false;


    async.series([
        function(cb1) {
            // create dtos  
            var executeList = [{
                // create simple ttdto
                "executethis": "addwidmaster",
                "wid": "ttdto",
                "metadata.method": "ttdto",
                "type": "string"
            }];
            execute(executeList, function(err, res) {
                proxyprinttodiv('Function tss1 added  ttdto -- ', res, 17);
                cb1(null);
            });
        },
        function(cb1) {
            // create data for ttdto
            var executeList = [{
                "executethis": "addwidmaster",
                "metadata.method": "ttdto",
                "type": "a"
            }, {
                "executethis": "addwidmaster",
                "metadata.method": "ttdto",
                "type": "a"
            }, {
                "executethis": "addwidmaster",
                "metadata.method": "ttdto",
                "type": "a"
            }, {
                "executethis": "addwidmaster",
                "metadata.method": "ttdto",
                "type": "a"
            }, {
                "executethis": "addwidmaster",
                "metadata.method": "ttdto",
                "type": "a"
            }, {
                "executethis": "addwidmaster",
                "metadata.method": "ttdto",
                "type": "a"
            }, {
                "executethis": "addwidmaster",
                "metadata.method": "ttdto",
                "type": "a"
            }, {
                "executethis": "addwidmaster",
                "metadata.method": "ttdto",
                "type": "a"
            }];

            execute(executeList, function(err, res) {
                proxyprinttodiv('Function tss1 added  ttdto -- ', res, 17);
                cb1(null);
            });
        },
        function(cb1) {
            // create data for ttdto
            var executeList = [{
                "executethis": "addwidmaster",
                "metadata.method": "ttdto",
                "type": "a"
            }, {
                "executethis": "addwidmaster",
                "metadata.method": "ttdto",
                "type": "a"
            }, {
                "executethis": "addwidmaster",
                "metadata.method": "ttdto",
                "type": "a"
            }, {
                "executethis": "addwidmaster",
                "metadata.method": "ttdto",
                "type": "a"
            }];

            execute(executeList, function(err, res) {
                proxyprinttodiv('Function tss1 added  ttdto --4 ', res, 17);
                cb1(null);
            });
        },
        function(cb1) {
            // create data for ttdto
            var executeList = [{
                "executethis": "addwidmaster",
                "metadata.method": "ttdto",
                "type": "a"
            }, {
                "executethis": "addwidmaster",
                "metadata.method": "ttdto",
                "type": "a"
            }, {
                "executethis": "addwidmaster",
                "metadata.method": "ttdto",
                "type": "a"
            }, {
                "executethis": "addwidmaster",
                "metadata.method": "ttdto",
                "type": "a"
            }, {
                "executethis": "addwidmaster",
                "metadata.method": "ttdto",
                "type": "a"
            }, {
                "executethis": "addwidmaster",
                "metadata.method": "ttdto",
                "type": "a"
            }, {
                "executethis": "addwidmaster",
                "metadata.method": "ttdto",
                "type": "a"
            }, {
                "executethis": "addwidmaster",
                "metadata.method": "ttdto",
                "type": "a"
            }];

            execute(executeList, function(err, res) {
                proxyprinttodiv('Function tss1 added  ttdto --5 ', res, 17);
                cb1(null, res);
            });
        },
    ], function(err, res) {
        proxyprinttodiv("res --", res, 17);
        var actual_result = res[3];
        proxyprinttodiv("actual_result --", actual_result, 17);

        var expected_result = [
            [{
                "data": {
                    "type": "a"
                },
                "wid": "13",
                "metadata": {
                    "method": "ttdto",
                    "date": "2014-03-19T05:51:01.752Z"
                }
            }],
            [{
                "data": {
                    "type": "a"
                },
                "wid": "14",
                "metadata": {
                    "method": "ttdto",
                    "date": "2014-03-19T05:51:03.348Z"
                }
            }],
            [{
                "data": {
                    "type": "a"
                },
                "wid": "15",
                "metadata": {
                    "method": "ttdto",
                    "date": "2014-03-19T05:51:05.032Z"
                }
            }],
            [{
                "data": {
                    "type": "a"
                },
                "wid": "16",
                "metadata": {
                    "method": "ttdto",
                    "date": "2014-03-19T05:51:06.744Z"
                }
            }],
            [{
                "data": {
                    "type": "a"
                },
                "wid": "17",
                "metadata": {
                    "method": "ttdto",
                    "date": "2014-03-19T05:51:08.593Z"
                }
            }],
            [{
                "data": {
                    "type": "a"
                },
                "wid": "18",
                "metadata": {
                    "method": "ttdto",
                    "date": "2014-03-19T05:51:10.681Z"
                }
            }],
            [{
                "data": {
                    "type": "a"
                },
                "wid": "19",
                "metadata": {
                    "method": "ttdto",
                    "date": "2014-03-19T05:51:12.749Z"
                }
            }],
            [{
                "data": {
                    "type": "a"
                },
                "wid": "20",
                "metadata": {
                    "method": "ttdto",
                    "date": "2014-03-19T05:51:14.819Z"
                }
            }]
        ];
        proxyprinttodiv("expected_result --", expected_result, 17);

        res = logverify("logverify", actual_result, expected_result);
        callback(err, res);
    });
}
widtests.ettss1.category = "execute";
widtests.ettss1.subcategory = "daily";
widtests.ettss1.js = exports.ettss1;
widtests.ettss1.description = "this does a test";

/*
      addwidmater xdto
      now add many with addwidmaster with x dto
*/
exports.ett1 = widtests.ett1 = ett1 = function ett1(params, callback) {
    debuglevel = 17;
    saveglobal("debugname", "");
    saveglobal("debugcat", "");
    saveglobal("debugsubcat", "code");
    var status = false;

    async.series([
        function(callback1) { //addwidmaster dto
            var executeList = [{
                "executethis": "addwidmaster",
                "wid": "ttdto",
                "metadata.method": "ttdto",
                "type": "string"
            }];
            execute(executeList, function(err, res) {
                proxyprinttodiv("Function t1 addwidmaster ttdto  result -- ", res, 17);
                callback1(null);
            });
        },
        function(callback2) { //addwidmaster wid1
            //n-times loop
            async.times(5, function(n, next) {
                var executeList = [{
                    "executethis": "addwidmaster",
                    "wid": "ttdto_wid" + n,
                    "metadata.method": "ttdto",
                    "type": "a"
                }];
                execute(executeList, function(err, res) {
                    proxyprinttodiv("Function t1 addwidmaster ttdto wid result -- ", res, 17);
                    next(err, res);
                });
            }, function(err, result) {
                callback2(null, result);
            });
        },
        function(callback3) { //getwidmaster
            //n-times loop
            async.times(5, function(n, next) {
                var executeList = [{
                    "executethis": "getwidmaster",
                    "wid": "ttdto_wid" + n,
                }];
                execute(executeList, function(err, res) {
                    proxyprinttodiv("Function t1 getwidmaster  result -- ", res, 17);
                    next(err, res);
                });
            }, function(err, result) {
                callback3(null, result);
            });
        }
    ], function(err, res) {
        proxyprinttodiv("res --", res, 17);
        var actual_result = res[2];
        proxyprinttodiv("actual_result --", actual_result, 17);

        var expected_result = [
            [
                [{
                    "type": "a",
                    "wid": "ttdto_wid0",
                    "metadata.method": "ttdto"
                }]
            ],
            [
                [{
                    "type": "a",
                    "wid": "ttdto_wid1",
                    "metadata.method": "ttdto"
                }]
            ],
            [
                [{
                    "type": "a",
                    "wid": "ttdto_wid2",
                    "metadata.method": "ttdto"
                }]
            ],
            [
                [{
                    "type": "a",
                    "wid": "ttdto_wid3",
                    "metadata.method": "ttdto"
                }]
            ],
            [
                [{
                    "type": "a",
                    "wid": "ttdto_wid4",
                    "metadata.method": "ttdto"
                }]
            ]
        ];
        proxyprinttodiv("expected_result --", expected_result, 17);

        res = logverify("logverify", actual_result, expected_result);
        callback(err, res);
    });
}
widtests.ett1.category = "execute";
widtests.ett1.subcategory = "daily";
widtests.ett1.js = exports.ett1;
widtests.ett1.description = "this does a test";

/*
do NOT save addwidmater xdto
now add many with addwidmaster with x dto
*/
exports.ett2 = widtests.ett2 = ett2 = function ett2(params, callback) {

    debuglevel = 34;
    saveglobal("debugname", "");
    saveglobal("debugcat", "");
    saveglobal("debugsubcat", "code");
    var status = false;

    async.series([
        /*function (callback1) {      //addwidmaster dto
                  var executeList = [{
                        "executethis": "addwidmaster",
                        "wid": "ttdto",
                        "metadata.method": "ttdto",
                        "type": "string"
                  }];
                  execute(executeList, function (err, res) {
                        proxyprinttodiv("Function t1 addwidmaster ttdto  result -- ", res, 17);
                        callback1(null);
                  });
            },*/
        function(callback2) { //addwidmaster wid1
            //n-times loop
            async.times(5, function(n, next) {
                var executeList = [{
                    "executethis": "addwidmaster",
                    "wid": "ttdto_wid" + n,
                    "metadata.method": "ttdto",
                    "type": "a"
                }];
                execute(executeList, function(err, res) {
                    proxyprinttodiv("Function t1 addwidmaster ttdto wid result -- ", res, 17);
                    next(err, res);
                });
            }, function(err, result) {
                callback2(null, result);
            });
        }
        /*,
            function (callback3) {  //getwidmaster
                  //n-times loop
                  async.times(5, function(n, next){
                        var executeList = [{
                              "executethis": "getwidmaster",
                              "wid": "ttdto_wid"+n,
                        }];
                        execute(executeList, function (err, res) {
                              proxyprinttodiv("Function t1 getwidmaster  result -- ", res, 17);
                        });
                  }, function(err, result) {
                        callback3(null);
                  });
            }*/
    ], function(err, res) {
        proxyprinttodiv("res --", res, 17);
        var actual_result = res[0];
        proxyprinttodiv("actual_result --", actual_result, 17);

        var expected_result = [
            [
                [{
                    "data": {
                        "type": "a"
                    },
                    "wid": "ttdto_wid0",
                    "metadata": {
                        "method": "ttdto",
                        "date": "2014-03-19T07:22:28.248Z"
                    }
                }]
            ],
            [
                [{
                    "data": {
                        "type": "a"
                    },
                    "wid": "ttdto_wid1",
                    "metadata": {
                        "method": "ttdto",
                        "date": "2014-03-19T07:22:28.250Z"
                    }
                }]
            ],
            [
                [{
                    "data": {
                        "type": "a"
                    },
                    "wid": "ttdto_wid2",
                    "metadata": {
                        "method": "ttdto",
                        "date": "2014-03-19T07:22:28.252Z"
                    }
                }]
            ],
            [
                [{
                    "data": {
                        "type": "a"
                    },
                    "wid": "ttdto_wid3",
                    "metadata": {
                        "method": "ttdto",
                        "date": "2014-03-19T07:22:28.256Z"
                    }
                }]
            ],
            [
                [{
                    "data": {
                        "type": "a"
                    },
                    "wid": "ttdto_wid4",
                    "metadata": {
                        "method": "ttdto",
                        "date": "2014-03-19T07:22:28.257Z"
                    }
                }]
            ]
        ];
        proxyprinttodiv("expected_result --", expected_result, 17);

        res = logverify("logverify", actual_result, expected_result);
        callback(err, res);
    });
}
widtests.ett2.category = "execute";
widtests.ett2.subcategory = "daily";
widtests.ett2.js = exports.ett2;
widtests.ett2.description = "this does a test";

/*
do NOT save addwidmater xdto
now add many with addwidmaster with x dto
*/
exports.ett3 = widtests.ett3 = ett3 = function ett3(params, callback) {
    debuglevel = 17;
    saveglobal("debugname", "");
    saveglobal("debugcat", "");
    saveglobal("debugsubcat", "code");
    var status = false;

    async.series([
        function(callback1) { //addwidmaster dto
            var executeList = [{
                "executethis": "addwidmaster",
                "wid": "ttdto",
                "metadata.method": "ttdto",
                "type": "string"
            }];
            execute(executeList, function(err, res) {
                proxyprinttodiv("Function t1 addwidmaster ttdto  result -- ", res, 17);
                callback1(null);
            });
        },
        function(callback2) { //addwidmaster wid1
            //n-times loop
            async.times(1, function(n, next) {
                var executeList = [{
                    "executethis": "addwidmaster",
                    "wid": "ttdto_wid" + n,
                    "metadata.method": "ttdto",
                    "type": "a"
                }];
                execute(executeList, function(err, res) {
                    proxyprinttodiv("Function t1 addwidmaster ttdto wid result -- ", res, 17);
                    next(err, res);
                });
            }, function(err, result) {
                callback2(null, result);
            });
        }
        /*,
            function (callback3) {  //getwidmaster
                  //n-times loop
                  async.times(5, function(n, next){
                        var executeList = [{
                              "executethis": "getwidmaster",
                              "wid": "ttdto_wid"+n,
                        }];
                        execute(executeList, function (err, res) {
                              proxyprinttodiv("Function t1 getwidmaster  result -- ", res, 17);
                        });
                  }, function(err, result) {
                        callback3(null);
                  });
            }*/
    ], function(err, res) {
        proxyprinttodiv("res --", res, 17);
        var actual_result = res[1];
        proxyprinttodiv("actual_result --", actual_result, 17);

        var expected_result = [
            [
                [{
                    "data": {
                        "type": "a"
                    },
                    "wid": "ttdto_wid0",
                    "metadata": {
                        "method": "ttdto",
                        "date": "2014-03-19T07:24:02.062Z"
                    }
                }]
            ]
        ];
        proxyprinttodiv("expected_result --", expected_result, 17);

        res = logverify("logverify", actual_result, expected_result);
        callback(err, res);
    });
}
widtests.ett3.category = "execute";
widtests.ett3.subcategory = "daily";
widtests.ett3.js = exports.ett3;
widtests.ett3.description = "this does a test";


exports.etadd01 = widtests.etadd01 = etadd01 = function etadd01(parameters, callback) {
    debuglevel = 17;
    var executeList = [{
        "executethis": "updatewid",
        "metadata.method": "authordto",
        "wid": "authordto",
        "name": "string",
        "age": "string",
        "a": "string",
        "b": "string",
        "metdata.bookdto.type": "onetomany"
    }, {
        "executethis": "updatewid",
        "metadata.method": "bookdto",
        "wid": "bookdto",
        "title": "string",
        "pages": "string",
        "c": "string",
        "d": "string"
    }, {
        "executethis": "updatewid",
        "metadata.method": "relationshipdto",
        "wid": "relbooktoauthor",
        "primarywid": "authordto",
        "secondarywid": "bookdto",
        "relationshiptype": "attributes"
    }, {
        "executethis": "updatewid",
        "metadata.method": "authordto",
        "wid": "elizabeth_heart",
        "name": "Elizabeth Heart",
        "age": "50"
    }]

    execute(executeList, function(err, res) {
        proxyprinttodiv('__--__', res, 17);

        var object = {
            "metadata": {
                "method": "bookdto"
            },
            "wid": "222",
            "title": "The X Factor",
            "pages": "300"
        };
        var dtoobject = {
            "metadata": {
                "method": "bookdto"
            },
            "wid": "bookdto",
            "title": "string",
            "pages": "string",
            "c": "string",
            "d": "string"
        };
        var parentwid = "elizabeth_heart";
        var relationshiptype = "onetomany";
        var command = {};

        addwidobject(object, dtoobject, null, null, null, command, function(err, res) {
            proxyprinttodiv("res --", res, 17);
            var actual_result = [res];
            proxyprinttodiv("actual_result --", actual_result, 17);

            var expected_result = [{
                "data": {
                    "title": "The X Factor",
                    "pages": "300"
                },
                "wid": "1",
                "metadata": {
                    "method": "bookdto",
                    "date": "2014-03-19T07:41:35.196Z"
                }
            }];
            proxyprinttodiv("expected_result --", expected_result, 17);

            res = logverify("logverify", actual_result, expected_result);
            callback(err, res);
        });
    });

}
widtests.etadd01.category = "execute";
widtests.etadd01.subcategory = "daily";
widtests.etadd01.js = exports.etadd01;
widtests.etadd01.description = "this does a test";

exports.etadd0 = widtests.etadd0 = etadd0 = function etadd0(parameters, callback) {
    debuglevel = 17;
    var executeList = [{
            "executethis": "updatewid",
            "metadata.method": "authordto",
            "wid": "authordto",
            "name": "string",
            "age": "string",
            "a": "string",
            "b": "string",
            "metdata.bookdto.type": "onetomany"
        }, {
            "executethis": "updatewid",
            "metadata.method": "bookdto",
            "wid": "bookdto",
            "title": "string",
            "pages": "string",
            "c": "string",
            "d": "string"
        }, {
            "executethis": "updatewid",
            "metadata.method": "relationshipdto",
            "wid": "relbooktoauthor",
            "primarywid": "authordto",
            "secondarywid": "bookdto",
            "relationshiptype": "attributes"
        }, {
            "executethis": "updatewid",
            "metadata.method": "authordto",
            "wid": "elizabeth_heart",
            "name": "Elizabeth Heart",
            "age": "50"
        }
        //{"executethis":"updatewid","metadata.method":"bookdto","wid":"222","title":"The X Factor","pages":"300"},
        //{"executethis":"updatewid","metadata.method":"relationshipdto","wid":"rel111","primarywid":"elizabeth_heart","secondarywid":"222", "relationshiptype":"attributes"},
    ]

    execute(executeList, function(err, res) {
        proxyprinttodiv('__--__', res, 17);

        var object = {
            "metadata": {
                "method": "bookdto"
            },
            "wid": "222",
            "title": "The X Factor",
            "pages": "300"
        };
        var dtoobject = {
            "metadata": {
                "method": "bookdto"
            },
            "wid": "bookdto",
            "title": "string",
            "pages": "string",
            "c": "string",
            "d": "string"
        };
        var parentwid = "elizabeth_heart";
        var relationshiptype = "onetomany";
        var command = {};

        // addrecord(object, dtoobject, parentwid, relationshiptype, command, function (err, res) {
        //     alert("add0 addrecord! -- got res -->" + JSON.stringify(res));
        // });

        cleanadd(object, dtoobject, command, function(err, res) {
            proxyprinttodiv("res --", res, 17);
            var actual_result = [res];
            proxyprinttodiv("actual_result --", actual_result, 17);

            var expected_result = [{
                "obj": {
                    "metadata": {
                        "method": "bookdto"
                    },
                    "wid": "222",
                    "title": "The X Factor",
                    "pages": "300"
                },
                "dtoobj": {
                    "metadata": {
                        "method": "string"
                    },
                    "wid": "string",
                    "title": "string",
                    "pages": "string"
                }
            }];
            proxyprinttodiv("expected_result --", expected_result, 17);

            res = logverify("logverify", actual_result, expected_result);
            callback(err, res);
        });
    });

}
widtests.etadd0.category = "execute";
widtests.etadd0.subcategory = "daily";
widtests.etadd0.js = exports.etadd0;
widtests.etadd0.description = "this does a test";


/*
addwid without inherit .. should add the input record
*/
exports.etaddwidtest2 = widtests.etaddwidtest2 = etaddwidtest2 = function etaddwidtest2(parameters, callback) {
    debuglevel = 17;
    eventappinstall();
    var executeList = [{
        "executethis": "updatewid",
        "metadata.method": "authordto",
        "wid": "defaultauthor",
        "name": "roger"
    }];
    execute(executeList, function(err, res) {
        proxyprinttodiv("addwidtest updatewid authordto result ", res, 17);

        var inputobject = {
            "name": "Elizabeth Heart",
            "age": "50",
            "wid": "elizabeth_heart",
            "metadata": {
                "method": "authordto"
            }
        };
        var inputdto = {
            "name": "string",
            "age": "string",
            "a": "string",
            "b": "string",
            "wid": "string",
            "metadata": {
                "method": "string",
                "bookdto": {
                    "type": "onetomany"
                }
            }
        };
        var command = {};

        addwid(inputobject, inputdto, command, function(err, res) {
            proxyprinttodiv("res --", res, 17);
            var actual_result = res;
            proxyprinttodiv("actual_result --", actual_result, 17);

            var expected_result = [{
                "data": {
                    "name": "Elizabeth Heart",
                    "age": "50"
                },
                "wid": "elizabeth_heart",
                "metadata": {
                    "method": "authordto",
                    "date": "2014-03-19T08:28:48.213Z"
                }
            }];
            proxyprinttodiv("expected_result --", expected_result, 17);

            res = logverify("logverify", actual_result, expected_result);
            callback(err, res);
        });
    });
}
widtests.etaddwidtest2.category = "execute";
widtests.etaddwidtest2.subcategory = "daily";
widtests.etaddwidtest2.js = exports.etaddwidtest2;
widtests.etaddwidtest2.description = "this does a test";

/*
addwid - with record alreayd exists ... should update name, leave all else the same
*/
exports.etaddwidtest3 = widtests.etaddwidtest3 = etaddwidtest3 = function etaddwidtest3(parameters, callback) {
    debuglevel = 17;
    eventappinstall();
    var executeList = [
        //{"executethis":"updatewid","metadata.method":"authordto","wid":"defaultauthor","name":"roger"}
        {
            "executethis": "updatewid",
            "metadata.method": "authordto",
            "wid": "elizabeth_heart",
            "name": "roger"
        }
    ];
    execute(executeList, function(err, res) {
        proxyprinttodiv("addwidtest updatewid authordto result ", res, 17);

        var inputobject = {
            "name": "Elizabeth Heart",
            "age": "50",
            "wid": "elizabeth_heart",
            "metadata": {
                "method": "authordto"
            }
        };
        var inputdto = {
            "name": "string",
            "age": "string",
            "a": "string",
            "b": "string",
            "wid": "string",
            "metadata": {
                "method": "string",
                "bookdto": {
                    "type": "onetomany"
                }
            }
        };
        var command = {};

        addwid(inputobject, inputdto, command, function(err, res) {
            proxyprinttodiv("res --", res, 17);
            var actual_result = res;
            proxyprinttodiv("actual_result --", actual_result, 17);

            var expected_result = [{
                "data": {
                    "name": "Elizabeth Heart",
                    "age": "50"
                },
                "wid": "elizabeth_heart",
                "metadata": {
                    "method": "authordto",
                    "date": "2014-03-19T08:28:48.213Z"
                }
            }];
            proxyprinttodiv("expected_result --", expected_result, 17);

            res = logverify("logverify", actual_result, expected_result);
            callback(err, res);
        });
    });
}
widtests.etaddwidtest3.category = "execute";
widtests.etaddwidtest3.subcategory = "daily";
widtests.etaddwidtest3.js = exports.etaddwidtest3;
widtests.etaddwidtest3.description = "this does a test";

/*
addwid - with record .. but dto fliters age
*/
exports.etaddwidtest5 = widtests.etaddwidtest5 = etaddwidtest5 = function etaddwidtest5(parameters, callback) {
    debuglevel = 17;
    eventappinstall();
    var executeList = [
        //{"executethis":"updatewid","metadata.method":"authordto","wid":"defaultauthor","name":"roger"}
        {
            "executethis": "updatewid",
            "metadata.method": "authordto",
            "wid": "elizabeth_heart",
            "name": "rogershoulddisappera",
            "a": "shouldsurvie"
        }
    ];
    execute(executeList, function(err, res) {
        proxyprinttodiv("addwidtest updatewid authordto result ", res, 17);

        var inputobject = {
            "name": "Elizabeth Heart",
            "age": "50",
            "wid": "elizabeth_heart",
            "metadata": {
                "method": "authordto"
            }
        };
        var inputdto = {
            "name": "string",
            "a": "string",
            "b": "string",
            "wid": "string",
            "metadata": {
                "method": "string",
                "bookdto": {
                    "type": "onetomany"
                }
            }
        };
        var command = {};

        addwid(inputobject, inputdto, command, function(err, res) {
            proxyprinttodiv("res --", res, 17);
            var actual_result = res;
            proxyprinttodiv("actual_result --", actual_result, 17);

            var expected_result = [{
                "data": {
                    "name": "Elizabeth Heart",
                    "a": "shouldsurvie"
                },
                "wid": "elizabeth_heart",
                "metadata": {
                    "method": "authordto",
                    "date": "2014-03-19T08:46:37.064Z"
                }
            }];
            proxyprinttodiv("expected_result --", expected_result, 17);

            res = logverify("logverify", actual_result, expected_result);
            callback(err, res);
        });
    });
}
widtests.etaddwidtest5.category = "execute";
widtests.etaddwidtest5.subcategory = "daily";
widtests.etaddwidtest5.js = exports.etaddwidtest5;
widtests.etaddwidtest5.description = "this does a test";


exports.etadd2 = widtests.etadd2 = etadd2 = function etadd2(parameters, callback) {
    debuglevel = 17;
    var executeList = [{
            "executethis": "updatewid",
            "metadata.method": "authordto",
            "wid": "authordto",
            "name": "string",
            "age": "string",
            "a": "string",
            "b": "string",
            "metdata.bookdto.type": "onetomany"
        }, {
            "executethis": "updatewid",
            "metadata.method": "bookdto",
            "wid": "bookdto",
            "title": "string",
            "pages": "string"
        }, {
            "executethis": "updatewid",
            "metadata.method": "relationshipdto",
            "wid": "relbooktoauthor",
            "primarywid": "authordto",
            "secondarywid": "bookdto",
            "relationshiptype": "attributes"
        }, {
            "executethis": "updatewid",
            "metadata.method": "authordto",
            "wid": "elizabeth_heart",
            "name": "Elizabeth Heart",
            "age": "50"
        },
        // {"executethis":"updatewid","metadata.method":"bookdto","wid":"222","title":"The X Factor","pages":"300"},
        // {"executethis":"updatewid","metadata.method":"relationshipdto","wid":"rel111","primarywid":"elizabeth_heart","secondarywid":"222", "relationshiptype":"attributes"},
        {
            "executethis": "addwidmaster",
            "bookdto.title": "string",
            "bookdto.pages": "string",
            "metadata.method": "authordto",
            "wid": "authordto",
            "name": "string",
            "age": "string",
            "metadata.bookdto.type": "onetomany"
        }, {
            "executethis": "getwidmaster",
            "wid": "elizabeth_heart"
        }
    ]

    execute(executeList, function(err, res) {
        proxyprinttodiv("res --", res, 17);
        var actual_result = res[5];
        proxyprinttodiv("actual_result --", actual_result, 17);

        var expected_result = [{
            "name": "Elizabeth Heart",
            "age": "50",
            "wid": "elizabeth_heart",
            "metadata.method": "authordto"
        }];
        proxyprinttodiv("expected_result --", expected_result, 17);

        res = logverify("logverify", actual_result, expected_result);
        callback(err, res);
    });
}
widtests.etadd2.category = "execute";
widtests.etadd2.subcategory = "daily";
widtests.etadd2.js = exports.etadd2;
widtests.etadd2.description = "this does a test";


exports.etget1 = widtests.etget1 = etget1 = function etget1(parameters, callback) {
    debuglevel = 17;
    eventappinstall();
    var executeList = [{
            "executethis": "updatewid",
            "metadata.method": "authordto",
            "wid": "authordto",
            "name": "string",
            "age": "string",
            "a": "string",
            "b": "string",
            "metdata.bookdto.type": "onetomany",
            "metadata.inherit": "defaultauthordtoactions"
        }, {
            "executethis": "updatewid",
            "metadata.method": "authordto",
            "wid": "defaultauthordtoactions",
            "a": "adefault",
            "b": "BDEFAULT"
        }, {
            "executethis": "updatewid",
            "metadata.method": "bookdto",
            "wid": "defaultbookdtoactions",
            "c": "cdefault",
            "d": "dDEFAULT"
        }, {
            "executethis": "updatewid",
            "metadata.method": "bookdto",
            "wid": "bookdto",
            "title": "string",
            "pages": "string",
            "c": "string",
            "d": "string",
            "metadata.inherit": "defaultbookdtoactions"
        }, {
            "executethis": "updatewid",
            "metadata.method": "relationshipdto",
            "wid": "relbooktoauthor",
            "primarywid": "authordto",
            "secondarywid": "bookdto",
            "relationshiptype": "attributes"
        }, {
            "executethis": "updatewid",
            "metadata.method": "authordto",
            "wid": "elizabeth_heart",
            "name": "Elizabeth Heart",
            "age": "50"
        }, {
            "executethis": "updatewid",
            "metadata.method": "bookdto",
            "wid": "222",
            "title": "The X Factor",
            "pages": "300"
        }, {
            "executethis": "updatewid",
            "metadata.method": "relationshipdto",
            "wid": "rel111",
            "primarywid": "elizabeth_heart",
            "secondarywid": "222",
            "relationshiptype": "attributes"
        }
        //{"executethis":"getwidmaster","wid":"elizabeth_heart"}
    ];

    execute(executeList, function(err, res) {
        proxyprinttodiv('__--__', res, 17);
        //callback(err, res);

        var widInput = "elizabeth_heart";
        var command = {
            "convertmethod": "dto"
        };
        var preamble = "";
        var level = "";

        getWidMongo(widInput, command, preamble, level, null, function(err, res) {
            proxyprinttodiv('__--__', res, 17);
            //callback(err, res);

            widInput = "authordto";
            getWidMongo(widInput, command, preamble, level, null, function(err, res) {
                proxyprinttodiv('__--__', res, 17);
                //callback(err, res);


                widInput = "bookdto";
                getWidMongo(widInput, command, preamble, level, null, function(err, res) {


                    proxyprinttodiv("res --", res, 17);
                    var actual_result = [res];
                    proxyprinttodiv("actual_result --", actual_result, 17);

                    var expected_result = [{
                        "result": "getWidMongo"
                    }];
                    proxyprinttodiv("expected_result --", expected_result, 17);

                    res = logverify("logverify", actual_result, expected_result);
                    callback(null, res);

                });
            });
        });
    });
}
widtests.etget1.category = "execute";
widtests.etget1.subcategory = "daily";
widtests.etget1.js = exports.etget1;
widtests.etget1.description = "this does a test";

exports.etget3 = widtests.etget3 = etget3 = function etget3(parameters, callback) {
    debuglevel = 17;
    eventappinstall();
    var executeList = [{
        "executethis": "updatewid",
        "metadata.method": "authordto",
        "wid": "authordto",
        "name": "string",
        "age": "string",
        "a": "string",
        "b": "string",
        "metadata.bookdto.type": "onetomany",
        "metadata.inherit": "defaultauthordtoactions"
    }, {
        "executethis": "updatewid",
        "metadata.method": "authordto",
        "wid": "defaultauthordtoactions",
        "a": "adefault",
        "b": "BDEFAULT"
    }, {
        "executethis": "updatewid",
        "metadata.method": "bookdto",
        "wid": "defaultbookdtoactions",
        "c": "cdefault",
        "d": "dDEFAULT"
    }, {
        "executethis": "updatewid",
        "metadata.method": "bookdto",
        "wid": "bookdto",
        "title": "string",
        "pages": "string",
        "c": "string",
        "d": "string",
        "metadata.inherit": "defaultbookdtoactions"
    }, {
        "executethis": "updatewid",
        "metadata.method": "relationshipdto",
        "wid": "relbooktoauthor",
        "primarywid": "authordto",
        "secondarywid": "bookdto",
        "relationshiptype": "attributes"
    }, {
        "executethis": "updatewid",
        "metadata.method": "authordto",
        "wid": "elizabeth_heart",
        "name": "Elizabeth Heart",
        "age": "50"
    }, {
        "executethis": "updatewid",
        "metadata.method": "bookdto",
        "wid": "222",
        "title": "The X Factor",
        "pages": "300"
    }, {
        "executethis": "updatewid",
        "metadata.method": "relationshipdto",
        "wid": "rel111",
        "primarywid": "elizabeth_heart",
        "secondarywid": "222",
        "relationshiptype": "attributes"
    }, {
        "executethis": "getwidmaster",
        "wid": "authordto",
        "command.convertmethod": "dto",
        "command.execute": "ConvertFromDOTdri"
    }]

    // result is :
    //{"name":"string","age":"string","a":"string","b":"string","wid":"authordto",
    //"metadata":{"method":"authordto","bookdto":{"type":"onetomany"},"inherit":"defaultauthordtoactions"},
    //"command":{"inherit":{"defaultbookdtoactions":"defaultbookdtoactions","defaultauthordtoactions":"defaultauthordtoactions"},
    //          "deepdtolist":{"bookdto":"onetomany","authordto":"authordto"},
    //          "dtolist":{"bookdto":"bookdto"}},
    //"bookdto":{"title":"string","pages":"string","c":"string","d":"string","wid":"bookdto",
    //          "metadata":{"method":"bookdto","inherit":"defaultbookdtoactions"},
    //          "command":{"inherit":{"defaultbookdtoactions":"defaultbookdtoactions"},
    //                  "deepdtolist":{"bookdto":"bookdto"},
    //                   "dtolist":{}}}}

    execute(executeList, function(err, res) {
        proxyprinttodiv("res --", res, 17);
        var actual_result = res[7];
        proxyprinttodiv("actual_result --", actual_result, 17);

        var expected_result = [{
            "data": {
                "primarywid": "elizabeth_heart",
                "secondarywid": "222",
                "relationshiptype": "attributes"
            },
            "wid": "rel111",
            "metadata": {
                "method": "relationshipdto",
                "date": "2014-03-19T11:08:51.453Z"
            }
        }];
        proxyprinttodiv("expected_result --", expected_result, 17);

        res = logverify("logverify", actual_result, expected_result);
        callback(err, res);
    });
}
widtests.etget3.category = "execute";
widtests.etget3.subcategory = "daily";
widtests.etget3.js = exports.etget3;
widtests.etget3.description = "this does a test";

exports.etget2 = widtests.etget2 = etget2 = function etget2(parameters, callback) {
    debuglevel = 17;
    // Setup test
    eventappinstall();

    var executeList = [
        // Trying to do three levels here Authors --> Books --> Pages
        // author dto
        {
            "executethis": "updatewid",
            "metadata.method": "authordto",
            "wid": "authordto",
            "name": "string",
            "age": "string",
            "a": "string",
            "b": "string",
            "metdata.bookdto.type": "onetomany",
            "metadata.inherit": "x"
        }, {
            "executethis": "updatewid",
            "metadata.method": "",
            "wid": "x",
            "a": "adefault",
            "b": "BDEFAULT",
            "bookdto.orphan_data": "Hey this works"
        },
        //{"executethis":"updatewid","metadata.method":"","wid":"defaultauthordtoactions","a":"adefault","b":"BDEFAULT", "bookdto.orphan_data":"Hey this works"},

        // book dto
        {
            "executethis": "updatewid",
            "metadata.method": "bookdto",
            "wid": "bookdto",
            "title": "string",
            "titleb": "string",
            "pages": "string",
            "c": "string",
            "d": "string",
            "orphan_data": "string",
            "metdata.pagedto.type": "onetomany",
            "metadata.inherit": "defaultbookdtoactions"
        }, {
            "executethis": "updatewid",
            "metadata.method": "bookdto",
            "wid": "defaultbookdtoactions",
            "c": "cdefault",
            "d": "dDEFAULT"
        },

        // page dto
        {
            "executethis": "updatewid",
            "metadata.method": "pagedto",
            "wid": "pagedto",
            "content": "string",
            "number": "string",
            "metadata.inherit": "defaultpagecontent"
        }, {
            "executethis": "updatewid",
            "metadata.method": "pagedto",
            "wid": "defaultpagecontent",
            "content": "This page is blank",
            "number": "0"
        },

        // relationships
        {
            "executethis": "updatewid",
            "metadata.method": "relationshipdto",
            "wid": "relbooktoauthor",
            "primarywid": "authordto",
            "secondarywid": "bookdto",
            "relationshiptype": "attributes"
        }, {
            "executethis": "updatewid",
            "metadata.method": "relationshipdto",
            "wid": "relpagetobook",
            "primarywid": "bookdto",
            "secondarywid": "pagedto",
            "relationshiptype": "attributes"
        }, {
            "executethis": "updatewid",
            "metadata.method": "relationshipdto",
            "wid": "rel111",
            "primarywid": "elizabeth_heart",
            "secondarywid": "XFactorBook",
            "relationshiptype": "attributes"
        },

        // records
        {
            "executethis": "updatewid",
            "metadata.method": "authordto",
            "wid": "elizabeth_heart",
            "name": "Elizabeth Heart",
            "age": "50"
        }, {
            "executethis": "updatewid",
            "metadata.method": "bookdto",
            "wid": "XFactorBook",
            "title": "The X Factor",
            "pages": "300"
        },

        // get
        {
            "executethis": "getwidmaster",
            "wid": "elizabeth_heart"
        }
    ];

    // alert(JSON.stringify(executeList));    
    execute(executeList, function(err, res) {
        proxyprinttodiv("res --", res, 17);
        var actual_result = res[11];
        proxyprinttodiv("actual_result --", actual_result, 17);

        var expected_result = [{
            "name": "Elizabeth Heart",
            "age": "50",
            "wid": "elizabeth_heart",
            "metadata.method": "authordto"
        }];
        proxyprinttodiv("expected_result --", expected_result, 17);

        res = logverify("logverify", actual_result, expected_result);
        callback(err, res);
    });
}
widtests.etget2.category = "execute";
widtests.etget2.subcategory = "daily";
widtests.etget2.js = exports.etget2;
widtests.etget2.description = "this does a test";

exports.etget11 = widtests.etget11 = etget11 = function etget11(parameters, callback) {
    debuglevel = 17;
    // Setup test
    eventappinstall();

    var executeList = [
        // Trying to do three levels here Authors --> Books --> Pages
        // author dto
        {
            "executethis": "addwidmaster",
            "metadata.method": "authordto",
            "wid": "authordto",
            "name": "string",
            "age": "string",
            "a": "string",
            "b": "string",
            "metdata.bookdto.type": "onetomany",
            "metadata.inherit": "x"
        }, {
            "executethis": "addwidmaster",
            "metadata.method": "",
            "wid": "x",
            "a": "adefault",
            "b": "BDEFAULT",
            "bookdto.orphan_data": "Hey this works"
        },
        //{"executethis":"addwidmaster","metadata.method":"","wid":"defaultauthordtoactions","a":"adefault","b":"BDEFAULT", "bookdto.orphan_data":"Hey this works"},

        // book dto
        {
            "executethis": "addwidmaster",
            "metadata.method": "bookdto",
            "wid": "bookdto",
            "title": "string",
            "titleb": "string",
            "pages": "string",
            "c": "string",
            "d": "string",
            "orphan_data": "string",
            "metdata.pagedto.type": "onetomany",
            "metadata.inherit": "defaultbookdtoactions"
        }, {
            "executethis": "addwidmaster",
            "metadata.method": "bookdto",
            "wid": "defaultbookdtoactions",
            "c": "cdefault",
            "d": "dDEFAULT"
        },

        // page dto
        {
            "executethis": "addwidmaster",
            "metadata.method": "pagedto",
            "wid": "pagedto",
            "content": "string",
            "number": "string",
            "metadata.inherit": "defaultpagecontent"
        }, {
            "executethis": "addwidmaster",
            "metadata.method": "pagedto",
            "wid": "defaultpagecontent",
            "content": "This page is blank",
            "number": "0"
        },

        // relationships
        {
            "executethis": "addwidmaster",
            "metadata.method": "relationshipdto",
            "wid": "relbooktoauthor",
            "primarywid": "authordto",
            "secondarywid": "bookdto",
            "relationshiptype": "attributes"
        }, {
            "executethis": "addwidmaster",
            "metadata.method": "relationshipdto",
            "wid": "relpagetobook",
            "primarywid": "bookdto",
            "secondarywid": "pagedto",
            "relationshiptype": "attributes"
        }, {
            "executethis": "addwidmaster",
            "metadata.method": "relationshipdto",
            "wid": "rel111",
            "primarywid": "elizabeth_heart",
            "secondarywid": "XFactorBook",
            "relationshiptype": "attributes"
        },

        // records
        {
            "executethis": "addwidmaster",
            "metadata.method": "authordto",
            "wid": "elizabeth_heart",
            "name": "Elizabeth Heart",
            "age": "50"
        }, {
            "executethis": "addwidmaster",
            "metadata.method": "bookdto",
            "wid": "XFactorBook",
            "title": "The X Factor",
            "pages": "300"
        },

        // get
        {
            "executethis": "getwidmaster",
            "wid": "elizabeth_heart"
        }
    ];


    execute(executeList, function(err, res) {
        proxyprinttodiv("res --", res, 17);
        var actual_result = res[11];
        proxyprinttodiv("actual_result --", actual_result, 17);

        var expected_result = [{
            "name": "Elizabeth Heart",
            "age": "50",
            "wid": "elizabeth_heart",
            "metadata.method": "authordto"
        }];
        proxyprinttodiv("expected_result --", expected_result, 17);

        res = logverify("logverify", actual_result, expected_result);
        callback(err, res);
    });
    //         {"executethis":"addwidmaster","metadata.method":"pagedto","wid":"defaultpagecontent","content":"This page is blank","number":"0"},

    //         // relationships
    //         {"executethis":"addwidmaster","metadata.method":"relationshipdto","wid":"relbooktoauthor","primarywid":"authordto","secondarywid":"bookdto", "relationshiptype":"attributes"},
    //         {"executethis":"addwidmaster","metadata.method":"relationshipdto","wid":"relpagetobook","primarywid":"bookdto","secondarywid":"pagedto", "relationshiptype":"attributes"},
    //         {"executethis":"addwidmaster","metadata.method":"relationshipdto","wid":"rel111","primarywid":"elizabeth_heart","secondarywid":"XFactorBook", "relationshiptype":"attributes"},

    //         // records
    //         {"executethis":"addwidmaster","metadata.method":"authordto","wid":"elizabeth_heart","name":"Elizabeth Heart","age":"50"},
    //         {"executethis":"addwidmaster","metadata.method":"bookdto","wid":"XFactorBook","title":"The X Factor","pages":"300"},

    //         // get
    //         {"executethis":"getwidmaster","wid":"elizabeth_heart"}
    //     ];

    //     // alert(JSON.stringify(executeList));    
    //     execute(executeList, function (err, res) {
    //         proxyprinttodiv('__--__', res[11], 17);
    //         callback(err, res);
    //     });
}
widtests.etget11.category = "execute";
widtests.etget11.subcategory = "daily";
widtests.etget11.js = exports.etget11;
widtests.etget11.description = "this does a test";