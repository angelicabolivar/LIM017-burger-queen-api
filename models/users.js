const {sequelize} = require('../database/database.js');
const {DataTypes} = require('sequelize');
const {orders} = require('./orders.js');

const Users = sequelize.define('Users', {
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

Users.hasMany(orders, {
    foreignKey: 'id_users',
    sourceKey: 'id_users'
});

orders.belongsTo(Users, {
    foreignKey: 'id_users',
    targetId: 'id_users'
});

module.exports = {
    Users,
}