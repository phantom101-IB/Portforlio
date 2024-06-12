const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        maxlength: 50,
        required: [true, "name is required"],
    },
    email: {
        type: String,
        required: [true, "email is required"],
        unique: true,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        ],
    },
    password: {
        type: String,
        minlength: 6,
        required: [true, "Password is required"],
    },
})

UserSchema.pre("save", async function (next) {
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
    next()
})

UserSchema.methods.createJWT = function () {
    const token = jwt.sign(
        { name: this.name, userId: this._id },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_LIFETIME }
    )
    return token
}

UserSchema.methods.comparePassword = async function (password) {
    const matchPassword = await bcrypt.compare(password, this.password)
    return matchPassword
}

module.exports = mongoose.model("Users", UserSchema)
