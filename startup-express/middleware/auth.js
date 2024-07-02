import jwt from '../helper/jsonwebtoken'

const auth = async (req, res, next) => {
    try {
        const {authorization} = req.headers
        if (!authorization) {
            res.status(401).json({status: 401, message: 'wrong password / email'})    
        }
        const user = jwt.verifyToken(authorization)
        // get user pake knex
        // req.userLogin = data balikan dari get user token
        next()    

    } catch (error) {
        res.status(401).json({status: 401, message: 'wrong password / email'})
    }
}

module.exports = auth