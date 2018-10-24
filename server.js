/**
 * Created by rohail on 1/12/2017.
 */

const express = require('express');
let app = express();

app.locals.env = process.env.NODE_ENV = process.env.NODE_ENV || "development";
app.locals.title = "Rentakot";

const config = require('./configs/config')(app.locals.env);

const morgan = require('morgan'),
  bodyParser = require('body-parser'),
  cors = require('cors');


const fs = require('fs');

const path = require('path');

const mongoose = require('mongoose');

const co = require('co');

require('./configs/express')(app,config,express,cors,bodyParser,morgan);

require('./routes/route')(app,express,config,fs,path);

const  databaseConnection  = require('./configs/mongo')(config, mongoose);

app.listen(config.port,() => {

  console.log("::::::::::::::::::::::::::: server Status :::::::::::::::::::::::::::::::");
  console.log("Application name: %s",app.locals.title);
  console.log("Server started on: %s",(new Date()));
  console.log("Running on port: %s",config.port);
  console.log("Environment: %s", app.locals.env);

});
