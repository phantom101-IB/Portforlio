const badRequestError = require("./bad-request")
const CustomAPIError = require("./custom-err")
const notFoundError = require("./not-found-err")
const unAuthorizeError = require("./un-authorize")

module.exports = {
    badRequestError,
    CustomAPIError,
    notFoundError,
    unAuthorizeError,
}
