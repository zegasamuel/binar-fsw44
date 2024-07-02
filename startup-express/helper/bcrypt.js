const bcrypt = require('bcrypt')
const saltRounds = 6

const hashPassword = function (password) {
    try {
        console.log(password, '=------- password debug 1');
        const salt = bcrypt.genSaltSync(saltRounds)
        console.log(salt, '--------salt1');
        const hashed = bcrypt.hashSync(password, salt)
        console.log(hashed, 'pasword debug 2 ------------');
        return hashed
        
    } catch (error) {
        console.log(error);
        throw new Error(error)
    }
}

const checkPassword = function (password, hashedPassword) {
    return bcrypt.compareSync(password, hashedPassword)
}

module.exports = {
    hashPassword, checkPassword
}