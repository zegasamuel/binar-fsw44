const knex = require('knex')(require('../knexfile').development)
module.exports = class {
    static getAllUser = async (req, res, next) => {
        try {
            const users = await knex('users').select('*')
            res.status(200).json(users)
          } catch (error) {
            res.status(500).json({error: error.message})
          }
    };
    static addUser = async (req, res, next) => {
        try {
            const {name, email, date_of_birth} = req.body;
            const [id] = await knex('users').insert({ name, email, date_of_birth }).returning('id');
            res.status(201).json({id})
          } catch (error) {
            res.status(500).json({error: error.message})
          }
    };
};
