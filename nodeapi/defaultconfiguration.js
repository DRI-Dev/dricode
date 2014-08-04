// put multiple config files in root
// create a file boxconfiguration.js

// console.log(JSON.stringify(config));



exports.serverconfig = serverconfig = {
    SERVER_PORT: 3000,
    LOOKUP_DIR: '../dripoint/',
    SERVICE_URL: 'http://localhost:3009/'
};

// DB settings --- 5 hardcoded databases for now :: last 4 databases are right now local databases can be changed to any domain
// "DB_HOST_NAME": 'localhost:27017'
            // "DB_USER_ID": "",
            // "DB_USER_PWD": "",
            // "DB_HOST_NAME": 'localhost:27017'
exports.settings = settings = {
    DB_SET: {
        "wikiwallettesting": {
            "DB_USER_ID": "trugate",
            "DB_USER_PWD": "tempalte-77",
            "DB_HOST_NAME": 'ds045627.mongolab.com:45627'
        },
        "wikiwallettesting1": {
            "DB_USER_ID": "trugate1",
            "DB_USER_PWD": "tempalte-78",
            "DB_HOST_NAME": 'localhost:27017'
        },
        "wikiwallettesting2": {
            "DB_USER_ID": "trugate2",
            "DB_USER_PWD": "tempalte-79",
            "DB_HOST_NAME": 'localhost:27017'
        },
        "wikiwallettesting3": {
            "DB_USER_ID": "trugate",
            "DB_USER_PWD": "tempalte-77",
            "DB_HOST_NAME": 'localhost:27017'
        },
        "wikiwallettesting4": {
            "DB_USER_ID": "trugate",
            "DB_USER_PWD": "tempalte-77",
            "DB_HOST_NAME": 'localhost:27017'
        }
    },
    MONGODB_OPTIONS: {
        'safe': true,
        'server': true,
        'auto_reconnect': true,
        'pool': 5
    }
};
