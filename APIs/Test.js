/**
 * Created by rohai on 1/12/2017.
 */


module.exports.setupFunction = function (app,express,config,fs,path) {

  function getTest(req,res) {
    res.send('ok');
  }

  module.exports.APIs = {

    getTest : {
      route : '/test',
      method : 'get',
      prefix : config.API_PREFIX.API,
      handler : getTest
    }

  };

};
