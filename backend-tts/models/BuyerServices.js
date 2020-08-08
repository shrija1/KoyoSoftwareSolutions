const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    img: String,
    title: String,
    description: String,
    price: String,
    stock: String
})

module.exports = mongoose.model('BuyerServices ', schema)
