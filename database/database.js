const {Sequelize}= require('sequelize');
const config = require('../config');

const sequelize = new Sequelize(config.dbName, config.dbUser, config.dbPassword, {
host: config.dbUrl,
dialect: 'postgres'
})

module.exports={
    sequelize,
}