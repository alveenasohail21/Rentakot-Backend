/**
 * Created by rohail on 1/12/2017.
 */

module.exports = function (app,express,config,fs,path) {

  let router  = express.Router();
  let routePath = '/';

  function setup(dir) {
    let items = fs.readdirSync(dir);

    items.forEach(function (item) {
      let fullPath = path.join(dir, item),
        st = fs.statSync(fullPath);

      if (st.isDirectory()) {
        setup(fullPath);
      } else {
        if (/\.js$/i.test(item)) {
          let apiRoutePath = fullPath.replace(config.rootPath,'').replace('.js','').replace(/\\/g,'/');
          require(fullPath).setupFunction(app,express,config,fs,path);
          registerAPI(require(fullPath).APIs,apiRoutePath);
        }
      }
    });
  }

  function registerAPI(module,apiPath) {
    let route = routePath + apiPath;
    for(let prop in module){
      if(module.hasOwnProperty(prop)){
        registerMethod(module[prop].method,module[prop].prefix.concat(module[prop].route),module[prop].handler)
      }
    }
  }

  function registerMethod(method,route,handler) {

    switch (method){
      case 'get' :
        router.get(route,handler);
        break;
      case 'post' :
        break;
      case 'put' :
        break;
      case 'delete' :
        break;
      default :
        console.log('Unknow route ',method);
        break;
    }
  }

  setup(config.rootPath+config.API_DIR);
  app.use(router);

};