var Sequelize = require('sequelize');

var dbconfig = {};
dbconfig.database = process.env.database || 'listenlater';
dbconfig.username = process.env.username || 'root';
dbconfig.password = process.env.password || '';
dbconfig.hostname = process.env.hostname || 'localhost';

var sequelize = new Sequelize(dbconfig.database, dbconfig.username, dbconfig.password, {
  host: dbconfig.hostname
});

var Links = sequelize.define('Links', {
  url: Sequelize.STRING,
});

Links.sync({force: true}).then(function() {
  return Links.create({
    url: 'https://medium.com/keep-learning-keep-growing/how-to-deweaponize-a-bathroom-scale-daf63272d58b',
  })
})

exports.Sequelize = Sequelize;
exports.Links = Links;
