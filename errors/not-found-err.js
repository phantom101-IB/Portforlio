const CustomAPIError = require("./custom-err")
const { StatusCodes } = require("http-status-codes")

class NotFoundError extends CustomAPIError {
    constructor(message) {
        super(message)
        this.statusCode = StatusCodes.NOT_FOUND
    }
}

module.exports = NotFoundError
