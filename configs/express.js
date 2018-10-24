/**
 * Created by rohai on 1/12/2017.
 */


module.exports = function (app, config,express,cors,bodyParser,morgan) {

  app.use(cors());
  app.use(morgan(config.logStyle));
  app.use(bodyParser.json({limit : '80mb'}));
  app.use(bodyParser.urlencoded({limit : '80mb',extended :true}));
  app.use(express.static('uploads'));
};