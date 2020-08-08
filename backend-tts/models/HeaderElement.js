const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    classBox: String,
    icon: String,
    name: String
})

module.exports = mongoose.model('HeaderElement ', schema)
