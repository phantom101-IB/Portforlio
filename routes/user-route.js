const express = require("express")
const router = express.Router()

const { register, login } = require("../controller/users")

router.post("/", register)
router.post("/", login)

module.exports = router
