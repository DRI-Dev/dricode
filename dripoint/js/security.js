// copyright (c) 2014 DRI
exports.secdata = secdata = function secdata(params, callback) {
    // create dtos  
    var executeList = [

        {
            //create userdto
            "executethis": "addwidmaster",
            "metadata.method": "userdto",
            "wid": "userdto",
            "widname": "wid",
            "fname": "string",
            "lname": "string",
            "email": "string",
            "email2": "string",
            "address": "string",
            "address2": "string",
            "city": "string",
            "state": "string",
            "zip": "string",
            "systemdto": "onetoone"
        }, {
            //create testdto
            "executethis": "addwidmaster",
            "metadata.method": "testdto",
            "wid": "testdto",
            "a": "string",
            "b": "string",
            "systemdto": "onetomany"
        }, {
            //create systemdto
            "executethis": "addwidmaster",
            "metadata.method": "systemdto",
            "wid": "systemdto",
            "creator": "accounttype",
            "expiration": "datetime",
            "offlinerule": "string",
            "onlinerule": "string",
            "securitydto": "onetomany",
            "balancedto": "onetomany",
            "categorydto": "onetomany",
            "groupdto": "onetomany",
            "permissiondto": "onetomany",
        }, {
            // create groupdto
            "executethis": "addwidmaster",
            "metadata.method": "groupdto",
            "wid": "groupdto",
            "grouptype": "string",
            "groupname": "grouptype"
        }, {
            // create securitydto
            // securitydto holds accesstoken, status
            "executethis": "addwidmaster",
            "metadata.method": "securitydto",
            "wid": "securitydto",
            "accesstoken": "string",
            "status": "integer"
        }, {
            // create permissiondto
            "executethis": "addwidmaster",
            "metadata.method": "permissiondto",
            "wid": "permissiondto",
            "granteegroup": "grouptype",
            "actiongroup": "grouptype",
            "targetgroup": "grouptype",
            "dbgroup": "dbtype",
            "levelgroup": "leveltype"
        }, {
            //create categorydto
            "executethis": "addwidmaster",
            "metadata.method": "categorydto",
            "wid": "categorydto",
            "categorytype": "string",
            "categoryname": "categorytype"
        }, {

            // create balancedto
            "executethis": "addwidmaster",
            "metadata.method": "balancedto",
            "wid": "balancedto",
            "widname": "wid",
            "balance": "integer"

        }, {
            // create relationships permissiondto
            "executethis": "addwidmaster",
            "wid": "relsystemdto_userdto",
            "metadata.method": "relationshipdto",
            "primarywid": "userdto",
            "secondarywid": "systemdto"
        }, {
            // create relationships testdto
            "executethis": "addwidmaster",
            "wid": "relsystemdto_testdto",
            "metadata.method": "relationshipdto",
            "primarywid": "testdto",
            "secondarywid": "systemdto"

        }, {
            // create relationships permissiondto
            "executethis": "addwidmaster",
            "wid": "rel_systemdto_groupdto",
            "metadata.method": "relationshipdto",
            "primarywid": "systemdto",
            "secondarywid": "groupdto"
        }, {
            "executethis": "addwidmaster",
            "wid": "rel_systemdto_categorydto",
            "metadata.method": "relationshipdto",
            "primarywid": "systemdto",
            "secondarywid": "categorydto"
        }, {
            // create relationships securitydto
            "executethis": "addwidmaster",
            "wid": "relsystemdto_securitydto",
            "metadata.method": "relationshipdto",
            "primarywid": "systemdto",
            "secondarywid": "securitydto"
        }, {
            // create relationships permissiondto
            "executethis": "addwidmaster",
            "wid": "relsystemdto_permissiondto",
            "metadata.method": "relationshipdto",
            "primarywid": "systemdto",
            "secondarywid": "permissiondto"

        }, {
            // create relationships statusdto
            "executethis": "addwidmaster",
            "wid": "relsystemdto_balancedto",
            "metadata.method": "relationshipdto",
            "primarywid": "systemdto",
            "secondarywid": "balancedto"
        }
    ];

    execute(executeList, function (err, res) {
        console.log(' >>> final response after create dtos executeList >>> ' + JSON.stringify(res));
        // create relationships


    });
}