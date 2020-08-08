const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    phone: String,
    whatsapp: String,
    email: String
})

module.exports = mongoose.model('Footer', schema)