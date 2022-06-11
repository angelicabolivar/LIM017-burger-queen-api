require('dotenv').config()
const express = require('express');
const config = require('./config');
const authMiddleware = require('./middleware/auth');
const errorHandler = require('./middleware/error');
const routes = require('./routes');
const pkg = require('./package.json');
const {sequelize} = require('./database/database.js')
const {user} = require('./models/users.js');
const {products} = require('./models/products.js');
const {orders} = require('./models/orders.js');
const {status} = require('./models/status.js');
const {ordersproducts} = require('./models/orders-products.js');

const { port, dbUrl, secret } = config;
const app = express();

// TODO: Conexión a la Base de Datos (MongoDB o MySQL)

app.set('config', config);
app.set('pkg', pkg);

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(authMiddleware(secret));

async function main () {
  try {
    await sequelize.sync();
    console.log('Se conecto a la BD;');

    app.listen(port, () => {
      console.info(`App listening on port ${port}`);
    })

  }
  catch(err){ 
    console.error('No funciona', err)
  }
}

// Registrar rutas
routes(app, (err) => {
  if (err) {
    throw err;
  }
app.use(errorHandler);

main();

});