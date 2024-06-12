const { StatusCodes } = require("http-status-codes")
const { badRequestError, unAuthorizeError } = require("../errors")
const jwt = require("jsonwebtoken")

const authorizationMiddleware = async (res, res, next) => {
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        throw new badRequestError("Authorization or Token not available")
    }

    const payload = authHeader.split(" ")[1]

    try {
        const token = jwt.verify(payload, process.env.JWT_SECRET)
        const { userId, name } = token
        req.user = { userId, name }
        next()
    } catch (error) {
        throw new unAuthorizeError("Access Denied")
    }
}

module.exports = authorizationMiddleware
