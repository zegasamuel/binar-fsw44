const jwt = require('jsonwebtoken')

function generateToken(payload){
    let token = jwt.sign(payload, "binar_fsw_44")
    return token
}

function verifyToken(token){
    let payload = jwt.verify(token, process.env.JWT_KEY)
    return payload
}

module.exports = {
    generateToken, verifyToken
}