const knex = require('knex')(require('../knexfile').development)
module.exports = class {
    static checkIfUserExist = async (req, res, next) => {
        const {email} = req.body;
        const user = await knex('users').where('email', email)
        if (user.length ==0) {
            next()
        }else {
            res.status(401).json({status: 401, message: 'Email already exist'})
        }
    }
    static checkIsAdmin = async (req, res, next) => {
        const {email} = req.body;
        const user = await knex('users').where('email', email)
        if (user.length ==0) {
            next()
        }else {
            res.json({status: 400, message: 'Email already exist'})
        }
    }
}