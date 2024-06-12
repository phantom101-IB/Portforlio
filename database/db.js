const mongoose = require("mongoose")

const connectDB = (url) => {
    return mongoose.connect(url, {
        // useUnifiedTopology: true,
        // useFindAndModify: false,
        // useUrlParser: true,
        // useCreateIndex: true,
    })
}

module.exports = connectDB
