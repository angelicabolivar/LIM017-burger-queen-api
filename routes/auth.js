const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const config = require('../config');
const { secret } = config;
const {Users} = require('../models/users');

/** @module auth */
module.exports = (app, nextMain) => {
  /**
   * @name /auth
   * @description Crea token de autenticación.
   * @path {POST} /auth
   * @body {String} email Correo
   * @body {String} password Contraseña
   * @response {Object} resp
   * @response {String} resp.token Token a usar para los requests sucesivos
   * @code {200} si la autenticación es correcta
   * @code {400} si no se proveen `email` o `password` o ninguno de los dos
   * @auth No requiere autenticación
   */
  app.post('/auth', async (req, resp, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
      return next(400);
    }

    // TODO: autenticar a la usuario
    const user = await Users.findOne({ where: { email: email }})
      if(!user){
        next(404)
      }

      console.log(user.password);
      const passworhash = bcrypt.hashSync(password, 10)
      console.log(passworhash);

    const token = jwt.sign({
      email: user.email,
      id: user.user_id,
    }, secret)

      console.log(user);
      resp.json({
        token: token,
      })
    
    next();
  });

  return nextMain();
};
