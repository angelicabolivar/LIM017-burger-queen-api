const {sequelize} = require('../database/database.js');
const {DataTypes} = require('sequelize');
const {orders} = require('./orders.js')

const status = sequelize.define('status', {
id_status:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
},
pending: {
    type: DataTypes.BOOLEAN
},
canceled:{
    type: DataTypes.BOOLEAN
},
delivering:{
    type: DataTypes.BOOLEAN
},
delivered:{
    type: DataTypes.BOOLEAN
}
});

status.hasMany(orders, {
    foreignKey: 'id_status',
    sourceKey: 'id_status'
});

orders.belongsTo(status, {
    foreignKey: 'id_status',
    targetId: 'id_status'
});


module.exports = {
    status,
}