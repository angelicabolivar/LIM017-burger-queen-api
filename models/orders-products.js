const {sequelize} = require('../database/database.js');
const {DataTypes} = require('sequelize');

const ordersproducts = sequelize.define('ordersproducts', {
    id_orders:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    qty: {
        type: DataTypes.INTEGER
    }
    });
    
    
module.exports = {
    ordersproducts,
}
    