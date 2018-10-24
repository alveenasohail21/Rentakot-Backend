/**
 * Created by rohai on 1/12/2017.
 */

let Schema = require('mongoose').Schema;
let models = {};

let User = require('users')(Schema);
let SystemProperties = require('../models/systemProperties')(Schema);
let Photos = require('../models/photos')(Schema);
let Videos = require('../models/videos')(Schema);
let Notifications = require('../models/notifications')(Schema);

// Associating Models with Schemas
models.User = mongoose.model('User', User);
models.Videos = mongoose.model('Videos', Videos);
models.Notifications = mongoose.model('Admin', Notifications);
models.SystemProperties = mongoose.model('SystemProperties', SystemProperties);
models.Photos = mongoose.model('Photos', Photos);

module.exports = models;


