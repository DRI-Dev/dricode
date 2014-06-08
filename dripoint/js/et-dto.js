// Creating groupdto, securitydto, statusdto and balanceddto
// securitydto holds accesstoken, status
// groupdto holds group, each wid auto lists itself and its creator
// permissions holds grantorwid, granteegroup, actiongroup, targetgroup
//
// this test shall result in an unauthorized access error
// we create testdata stuff1 and provide access to it to only staff group memners
// however we try to access it (using getwidmaster) using admin group user


// userdto
//   12M permissiondto
//           M21 usergroupdto
//           M21 actiongroupdto
//           M21 other groups previously in permission dto
//           M21 dbgroup, databasetablegroup, etc
//   12M securitydto
//   12M usergroupdto (groups a user has created)
//           M21 userdto (what users are in this group)
//           121 groupdto
// groupdto
//   M21 groupdto
// groupdto manytomany to userdtdo
exports.dtox = dtox = function dtox(params, callback) {
    execute([{ // systemdto
            "executethis": "addwidmaster",
            "metadata.method": "systemdto",
            "wid": "systemdto",
            "ownerid": "string",
            "expirationtimer": "string",
            "expirationdate": "string",
            "executecount": "integer"
            // ,
            // "permissiondto.something1.something2": "string", // this is just a field, but will look like dto data to outside
            // "metadata.inherit.0": {
            //     "wid": "systemdefault",
            //     "command": {
            //         "dtotype": "",
            //         "adopt": "default"
            //     }
            // }
            // }, { // system default
            //     "executethis": "addwidmaster",
            //     "wid": "systemdefault",
            //     "metadata.method": "systemdto",
            //     "expirationtimer": "90",
            //     "expirationdate": "6/14/14",
            //     "permissiondto.something1.something2": "someanwser"

        }, { //userdto
            "executethis": "addwidmaster",
            "metadata.method": "userdto",
            "wid": "userdto",
            "fname": "string",
            "lname": "string",
            "phone": "string",
            "email": "string",
            "address": "string",
            "address2": "string",
            "city": "string",
            "state": "string",
            "zip": "string",
            "country": "string",
            //"metadata.systemdto.type": "onetoone",
            "metadata.securitydto.type": "onetoone",
            "metadata.permissiondto.type": "onetomany",
            //"metadata.usergroupdto.type": "onetomany"
        }, { // securitydto
            "executethis": "addwidmaster",
            "metadata.method": "securitydto",
            "wid": "securitydto",
            "ac": "string"
        }, { // permissiondto
            "executethis": "addwidmaster",
            "metadata.method": "permissiondto",
            "wid": "permissiondto",
            "level": "string",
            "metadata.groupdto.type": "manytomany"
            // }, { // permission default
            //     "executethis": "addwidmaster",
            //     "wid": "rel_user_sys",
            //     "metadata.method": "relationshipdto",
            //     "primarywid": "userdto",
            //     "secondarywid": "systemdto",
            //     "primarymethod": "userdto",
            //     "secondarymethod": "systemdto",
            //     "linktype": "onetoone",
            //     "relationshiptype": "attributes"
        }, { // actiondto
            "executethis": "addwidmaster",
            "wid": "actiondto",
            "type": "string",
            "metadata.method": "actiondto"
        }, { // groupdto
            "executethis": "addwidmaster",
            "wid": "groupdto",
            "metadata.method": "groupdto",
            "type": "string",
            "groupname": "string",
            "metadata.groupdto.type": "manytoone", // changed -- debateable
            "metadata.userdto.type": "manytomany", // added
            "metadata.actiondto.type": "manytomany", // added
            // user to ... relationships
        }, {
            "executethis": "addwidmaster",
            "wid": "rel_user_sec",
            "metadata.method": "relationshipdto",
            "primarywid": "userdto",
            "secondarywid": "securitydto",
            "primarymethod": "userdto",
            "secondarymethod": "securitydto",
            "linktype": "onetoone",
            "relationshiptype": "attributes"
        }, {
            "executethis": "addwidmaster",
            "wid": "rel_user_permission",
            "metadata.method": "relationshipdto",
            "primarywid": "userdto",
            "secondarywid": "permissiondto",
            "primarymethod": "userdto",
            "secondarymethod": "permissiondto",
            "linktype": "onetomany",
            "relationshiptype": "attributes"
            // permission to relationships
        }, {
            "executethis": "addwidmaster",
            "wid": "rel_permission_group",
            "metadata.method": "relationshipdto",
            "primarywid": "permissiondto",
            "secondarywid": "groupdto",
            "primarymethod": "permissiondto",
            "secondarymethod": "groupdto",
            "linktype": "manytomany",
            "relationshiptype": "attributes"
        }, {
            "executethis": "addwidmaster",
            "wid": "rel_action_group",
            "metadata.method": "relationshipdto",
            "primarywid": "groupdto", //"actiondto",
            "secondarywid": "actiondto", //"groupdto"
            "primarymethod": "groupdto", // "actiondto",
            "secondarymethod": "actiondto", // "groupdto",
            "linktype": "manytomany", // "onetomany",
            "relationshiptype": "attributes"
        }, {
            "executethis": "addwidmaster",
            "wid": "rel_user_group",
            "metadata.method": "relationshipdto",
            "primarywid": "groupdto", //"groupdto",
            "secondarywid": "userdto", //"userdto"
            "primarymethod": "groupdto", // "groupdto",
            "secondarymethod": "userdto", // "userdto",
            "linktype": "manytomany", // "onetomany",
            "relationshiptype": "attributes"
        }, { // group to group
            "executethis": "addwidmaster",
            "wid": "rel_group_group",
            "metadata.method": "relationshipdto",
            "primarywid": "groupdto",
            "secondarywid": "groupdto",
            "primarymethod": "groupdto",
            "secondarymethod": "groupdto",
            "linktype": "manytoone", // changed
            "relationshiptype": "attributes"
        }, {
            "executethis": "getwidmaster",
            "metadata.method": "userdto",
            "wid": "userdto"
        }],
        function(err, res) {
            proxyprinttodiv('Function data  ', res, 99);
            console.log(JSON.stringify(res));
            callback(err, res);
        });
}



exports.dtonx = dtonx = function dtonx(params, callback) {

    execute([{ // systemdto
                "executethis": "addwidmaster",
                "metadata.method": "systemdto",
                "wid": "systemdto",
                "ownerid": "string",
                "expirationtimer": "string",
                "expirationdate": "string",
                "executecount": "integer"
                // ,
                // "permissiondto.something1.something2": "string", // this is just a field, but will look like dto data to outside
                // "metadata.inherit.0": {
                //     "wid": "systemdefault",
                //     "command": {
                //         "dtotype": "",
                //         "adopt": "default"
                //     }
                // }
                // }, { // system default
                //     "executethis": "addwidmaster",
                //     "wid": "systemdefault",
                //     "metadata.method": "systemdto",
                //     "expirationtimer": "90",
                //     "expirationdate": "6/14/14",
                //     "permissiondto.something1.something2": "someanwser"

            }, { //userdto
                "executethis": "addwidmaster",
                "metadata.method": "userdto",
                "wid": "userdto",
                "fname": "string",
                "lname": "string",
                "phone": "string",
                "email": "string",
                "address": "string",
                "address2": "string",
                "city": "string",
                "state": "string",
                "zip": "string",
                "country": "string",
                //"metadata.systemdto.type": "onetoone",
                "metadata.securitydto.type": "onetoone",
                "metadata.permissiondto.type": "onetomany",
                //"metadata.usergroupdto.type": "onetomany"
            }, { // securitydto
                "executethis": "addwidmaster",
                "metadata.method": "securitydto",
                "wid": "securitydto",
                "ac": "string"
            }, { // permissiondto
                "executethis": "addwidmaster",
                "metadata.method": "permissiondto",
                "wid": "permissiondto",
                "level": "string",
                "metadata.groupdto.type": "manytomany"
                // }, { // permission default
                //     "executethis": "addwidmaster",
                //     "wid": "rel_user_sys",
                //     "metadata.method": "relationshipdto",
                //     "primarywid": "userdto",
                //     "secondarywid": "systemdto",
                //     "primarymethod": "userdto",
                //     "secondarymethod": "systemdto",
                //     "linktype": "onetoone",
                //     "relationshiptype": "attributes"
            }, { // actiondto
                "executethis": "addwidmaster",
                "wid": "actiondto",
                "type": "string",
                "metadata.method": "actiondto"
            }, { // groupdto
                "executethis": "addwidmaster",
                "wid": "groupdto",
                "metadata.method": "groupdto",
                "type": "string",
                "groupname": "string",
                "metadata.groupdto.type": "manytoone", // changed -- debateable
                "metadata.userdto.type": "manytomany", // added
                "metadata.actiondto.type": "manytomany", // added
                // user to ... relationships
            }, {
                "executethis": "addwidmaster",
                "wid": "rel_user_sec",
                "metadata.method": "relationshipdto",
                "primarywid": "userdto",
                "secondarywid": "securitydto",
                "primarymethod": "userdto",
                "secondarymethod": "securitydto",
                "linktype": "onetoone",
                "relationshiptype": "attributes"
            }, {
                "executethis": "addwidmaster",
                "wid": "rel_user_permission",
                "metadata.method": "relationshipdto",
                "primarywid": "userdto",
                "secondarywid": "permissiondto",
                "primarymethod": "userdto",
                "secondarymethod": "permissiondto",
                "linktype": "onetomany",
                "relationshiptype": "attributes"
                // permission to relationships
            }, {
                "executethis": "addwidmaster",
                "wid": "rel_permission_group",
                "metadata.method": "relationshipdto",
                "primarywid": "permissiondto",
                "secondarywid": "groupdto",
                "primarymethod": "permissiondto",
                "secondarymethod": "groupdto",
                "linktype": "manytomany",
                "relationshiptype": "attributes"
            }, {
                "executethis": "addwidmaster",
                "wid": "rel_action_group",
                "metadata.method": "relationshipdto",
                "primarywid": "groupdto", //"actiondto",
                "secondarywid": "actiondto", //"groupdto"
                "primarymethod": "groupdto", // "actiondto",
                "secondarymethod": "actiondto", // "groupdto",
                "linktype": "manytomany", // "onetomany",
                "relationshiptype": "attributes"
            }, {
                "executethis": "addwidmaster",
                "wid": "rel_user_group",
                "metadata.method": "relationshipdto",
                "primarywid": "groupdto", //"groupdto",
                "secondarywid": "userdto", //"userdto"
                "primarymethod": "groupdto", // "groupdto",
                "secondarymethod": "userdto", // "userdto",
                "linktype": "manytomany", // "onetomany",
                "relationshiptype": "attributes"
            }, { // group to group
                "executethis": "addwidmaster",
                "wid": "rel_group_group",
                "metadata.method": "relationshipdto",
                "primarywid": "groupdto",
                "secondarywid": "groupdto",
                "primarymethod": "groupdto",
                "secondarymethod": "groupdto",
                "linktype": "manytoone", // changed
                "relationshiptype": "attributes"
            }, {
                "executethis": "getwidmaster",
                "metadata.method": "userdto",
                "wid": "userdto"
            },









            {
                "wid": "guid",
                "widname": "String",
                "metadata.method": "screendto",
                "metadata.widoptiondto.type": "manytoone",
                "metadata.querydto.type": "manytoone",
                "base": "String", // screen wid name
                "background": "String", // screen wid name
                "header": "String", // screen wid name
                "footer": "String", // screen wid name
            },


            

            {
                "executethis": "addwidmaster",
                "wid": "rel_screen_widoption",
                "metadata.method": "relationshipdto",
                "primarywid": "screendto",
                "secondarywid": "widoptiondto",
                "primarymethod": "screendto",
                "secondarymethod": "widoptiondto",
                "linktype": "manytoone",
                "relationshiptype": "attributes"
            }, {
                "executethis": "addwidmaster",
                "wid": "rel_screen_query",
                "metadata.method": "relationshipdto",
                "primarywid": "screendto",
                "secondarywid": "querydto",
                "primarymethod": "screendto",
                "secondarymethod": "querydto",
                "linktype": "manytoone",
                "relationshiptype": "attributes"
            },

            {
                "wid": "guid",
                "metadata.method": "querydto",
                "widdata": "String" // Stringified object for query - the executeobject
            }, {
                "wid": "guid",
                "metadata.method": "widoptiondto",
                "metadata.panelitemdto.type": "onetomany"
            }, {
                "executethis": "addwidmaster",
                "wid": "rel_widoption_panelitem",
                "metadata.method": "relationshipdto",
                "primarywid": "widoptiondto",
                "secondarywid": "panelitemdto",
                "primarymethod": "widoptiondto",
                "secondarymethod": "panelitemdto",
                "linktype": "onetomany",
                "relationshiptype": "attributes"
            }, {
                "wid": "guid",
                "metadata.method": "panelitemdto",
                "metadata.screendto.type": "onetoone",
                "metadata.buttondto.type": "onetoone"
            }, {
                "wid": "guid",
                "metadata.method": "buttondto",
                "action": "String"
            }, {
                "executethis": "addwidmaster",
                "wid": "rel_panel_screen",
                "metadata.method": "relationshipdto",
                "primarywid": "panelitemdto",
                "secondarywid": "screendto",
                "primarymethod": "panelitemdto",
                "secondarymethod": "screendto",
                "linktype": "onetoone",
                "relationshiptype": "attributes"
            }, {
                "executethis": "addwidmaster",
                "wid": "rel_panel_button",
                "metadata.method": "relationshipdto",
                "primarywid": "panelitemdto",
                "secondarywid": "buttondto",
                "primarymethod": "panelitemdto",
                "secondarymethod": "buttondto",
                "linktype": "onetoone",
                "relationshiptype": "attributes"
            },

            {
                "executethis": "addwidmaster",
                "metadata.method": "screendto",
                "widname": "myscreen",
                "base": "",
                "header": "",
                "background": "",
                "footer": "",
                "wid":"myscreenwid"
            },
            {
                "executethis": "addwidmaster",
                "metadata.method": "widoptiondto",
                "wid":"mywidoptionwid",//TODO :: REMOVE HARDCODING
                "panelitemdto": [{
                    "buttondto.action": "add",
                    "screendto": {
                        "widname": "addscreen"
                    }
                },{
                    "buttondto.action": "delete",
                    "screendto": {
                        "widname": "deletescreen"
                    }
                }]
            },
            {
                "executethis": "addwidmaster",
                "metadata.method": "querydto",
                "wid":"myquerywid",//TODO :: REMOVE HARDCODING
                "widdata": "[{'metadata.method':'actiondto'}]"
            }



        ],

        function(err, res) {
            proxyprinttodiv('Function data  ', res, 99);
            console.log(JSON.stringify(res));
            callback(err, res);
        });

}