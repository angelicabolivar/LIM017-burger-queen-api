const {sequelize} = require('../database/database.js');
const {DataTypes} = require('sequelize');
const {orders} = require('./orders.js');

const users = sequelize.define('users', {
id_users:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
},
email: {
    type: DataTypes.STRING
},
password:{
    type: DataTypes.STRING
},
rol:{
    type: DataTypes.BOOLEAN
}
});

users.hasMany(orders, {
    foreignKey: 'id_users',
    sourceKey: 'id_users'
});

orders.belongsTo(users, {
    foreignKey: 'id_users',
    targetId: 'id_users'
});

module.exports = {
    users,
}