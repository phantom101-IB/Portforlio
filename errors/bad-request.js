const CustomAPIError = require("./custom-err")
const { StatusCodes } = require("http-status-codes")

class BadRequestError extends CustomAPIError {
    constructor(message) {
        super(message)
        statusCode: StatusCodes.BAD_REQUEST
    }
}

module.exports = BadRequestError
