const knex = require('knex')(require('../knexfile').development)
const { json } = require('body-parser');
const bcrypt = require('../helper/bcrypt')
const jwt = require('../helper/jsonwebtoken')
module.exports = class {
  static getAllUser = async (req, res, next) => {
    try {
      const users = await knex('users').select('id', 'name', 'email', 'date_of_birth', 'created_at', 'updated_at')
      res.status(200).json(users)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  };
  static addUser = async (req, res, next) => {
    try {
      const { name, email, date_of_birth } = req.body;
      const [id] = await knex('users').insert({ name, email, date_of_birth }).returning('id');
      res.status(201).json({ id })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  };
  static register = async (req, res, next) => {
    try {
        const { name, email, date_of_birth, password } = req.body;
        console.log(req.body, password);
        const hashedPassword = bcrypt.hashPassword(password);
        console.log(hashedPassword);
        const [id] = await knex('users').insert({ name, email, date_of_birth, password: hashedPassword, profile_picture: req.fileUrl }).returning('id');
        res.status(201).json({ id });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};
  static login = async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const data = await knex('users').where('email', email);
      if (data.length < 1) {
        res.status(401), json({ status: 401, message: 'email is not exist' })
      }
      // const validatePassword = await bcrypt.checkPassword(password, data[0].password)
      // generate token verify token 
      // console.log(validatePassword);
      // if (!validatePassword) {
      //   res.status(401),json({status: 401, message: 'email or password wrong'})
      // }else {
      const token_new = jwt.generateToken({
        id: data[0].id,
        email: data[0].email
      })
      res.status(201).json({ ...data[0], token: token_new })
      // }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message })
    }
  };
};
