const { StatusCodes } = require("http-status-codes")
const User = require("../models/user-model")
const {
    notFoundError,
    unAuthorizeError,
    badRequestError,
} = require("../errors")

const register = async (req, res) => {
    const user = await User.create({ ...req.body })
    const token = await user.createJWT()
    res.status(StatusCodes.CREATED).json({ name: user.name, token })
}

const login = async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        throw new badRequestError("Please provide email and password")
    }

    const user = await User.findOne({ email })
    if (!user) {
        throw new notFoundError(`User with email: ${email} not found`)
    }

    const correctPassword = await user.comparePassword(password)
    if (!correctPassword) {
        throw new unAuthorizeError("Incorrect Password")
    }

    const token = await user.createJWT()

    res.status(StatusCodes.OK).json({ name: user.name, token })
}

module.exports = { register, login }
