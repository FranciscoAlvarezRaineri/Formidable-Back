const jwt = require("jsonwebtoken")


const SECRET = "hola"

const generateToken = (payload) => {

    const token = jwt.sign( {user:  payload}, SECRET, {})
    return token;
}

const validateToken = (token) => {
    return jwt.verify(token, SECRET)
}

module.exports = {generateToken, validateToken}