/**
 * Created by rohai on 1/12/2017.
 */

const path = require('path');
const rootPath = path.normalize(__dirname+"/../");
const configurations = {
  development:{
    port: 5000,
    db: {
      name : "rentakot",
      connectionString : "mongodb://localhost:27017/rentakot"
    },
    rootPath : rootPath,
    jwtSecret: 'MyRentakotRandomStringForJWT',
    jwtExpireTime: 31536000,
    DEFAULT_TIMEOUT : 240000,
    API_DIR : '/APIs',
    API_PREFIX : {
      API : '/api',
      AUTH : '/auth'
    },
    jwtAlgorithm : 'RS256',
    logStyle : "dev",
    timeZone : 'America/Los_Angeles'
  },
  production:{
    port: process.env.PORT || 5000,
    db: {
      name : "rentakot",
      connectionString : "mongodb://localhost:27017/babienet"
    },
    rootPath : rootPath,
    jwtSecret: process.env.JWTSECRET  ||'MyRentakotRandomStringForJWT',
    jwtExpireTime: 31536000,
    DEFAULT_TIMEOUT : 240000,
    API_DIR : '/APIs',
    API_PREFIX : {
      API : '/api',
      AUTH : '/auth'
    },
    jwtAlgorithm : 'RS256',
    logStyle : "combined",
    timeZone : 'America/Los_Angeles'
  }
};


function returnConfiguration(env) {
    return configurations[env];
}


module.exports =  returnConfiguration;