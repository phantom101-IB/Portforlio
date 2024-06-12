const CustomAPIError = require("./custom-err")
const { StatusCodes } = require("http-status-codes")

class UnAuthorizeError extends CustomAPIError {
    constructor(message) {
        super(message)
        statusCodes: StatusCodes.UNAUTHORIZED
    }
}

module.exports = UnAuthorizeError
