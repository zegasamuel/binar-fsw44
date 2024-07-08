const bcrypt = require('bcrypt')
const saltRounds = 6

const hashPassword = function (password) {
    try {
        const salt = bcrypt.genSaltSync(saltRounds)
        const hashed = bcrypt.hashSync(password, salt)
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