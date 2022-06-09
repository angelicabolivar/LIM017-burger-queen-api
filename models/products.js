const {sequelize} = require('../database/database.js');
const {DataTypes} = require('sequelize');
const {ordersproducts} = require('./orders-products.js');

const products = sequelize.define('products', {
    id_products:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    price_product:{
        type: DataTypes.INTEGER
    },
    image:{
        type: DataTypes.STRING
    },
    type:{
        type: DataTypes.STRING
    }
    });
    
 
    products.hasOne(ordersproducts, {
        foreignKey: 'id_products',
        sourceKey: 'id_products'
    });
    
    ordersproducts.hasMany(products, {
        foreignKey: 'id_products',
        targetId: 'id_products'
    });

    
module.exports = {
        products,
    }