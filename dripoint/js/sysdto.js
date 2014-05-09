    execute([{
            "executethis": "addwidmaster",
            "metadata.method": "userdto",
            "wid": "userdto",
            "fname": "string"
        }, {
            "executethis": "addwidmaster",
            "metadata.method": "systemdto",
            "wid": "systemdto",
            "expirationtimer": "string",
            "expirationdate": "string",
            "executecount": "integer",
            "permissiondto.something1.something2": "string", // this is just a field, but will look like dto data to outside
            "securitydto.x.y": "string",
            "usergroupdto.x.y": "string",
            "actiongroupdto.r.t": "string"
            "metadata.inherit.0": {
                "wid": "systemdefault",
                "command": {
                    "dtotype": "",
                    "adopt": "default"
                }
            }
        }, {
            "executethis": "addwidmaster",
            "wid": "systemdefault",
            "metadata.method": "systemdto",
            "expirationtimer": "90",
            "expirationdate": "6/14/14",
            "permissiondto.something1.something2": "someanwser",
            "securitydto.x.y": "1",
            "usergroupdto.x.y": "2",
            "actiongroupdto.r.t": "3"
        }, {
            "executethis": "addwidmaster",
            "metadata.method": "userdto",
            "wid": "rogerwid",
            "fname": "roger"
        }, {
            "executethis": "getwidmaster",
            "metadata.method": "userdto",
            "wid": "rogerwid"
        }],
        function(err, res) {
            updatewid({
                "wid": "initialwid",
                "date": new Date()
            }, function(err, res) {
                callback(err, res);
            });
        });