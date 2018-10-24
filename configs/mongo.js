/**
 * Created by rohai on 1/12/2017.
 */

function dbConnections (config,mongoose) {

  mongoose.connect(config.db.connectionString);
  const db = mongoose.connection;
  db.on('error', console.error.bind(console,'Error in Connection :: Cannot Connect to ' +config.db.name));
  db.once('open',function () {
    console.log('Successfull Connected to Database ',config.db.name);
  });
  return db;
}

module.exports = dbConnections;