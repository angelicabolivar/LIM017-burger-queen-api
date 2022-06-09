const {Sequelize}= require('sequelize');

const sequelize = new Sequelize('APIBQ', 'postgres', 'BasedeDatos', {
host: 'localhost',
dialect: 'postgres'
})

module.exports={
    sequelize,
}