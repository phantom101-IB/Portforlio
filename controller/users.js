const register = async (req, res) => {
    res.send("Phantom")
}

const login = async (req, res) => {
    res.send("Login")
}

module.exports = { register, login }
