const {sequelize} = require('../database/database.js');
const {DataTypes} = require('sequelize');
const {ordersproducts} = require('./orders-products.js');


const orders = sequelize.define('orders', {
    id_orders:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    client: {
        type: DataTypes.STRING
    }
    });
    
    orders.hasOne(ordersproducts, {
        foreignKey: 'id_order',
        sourceKey: 'id_orders'
    });
    
    ordersproducts.belongsTo(orders, {
        foreignKey: 'id_order',
        targetId: 'id_orders'
    });
    module.exports = {
        orders,
    }