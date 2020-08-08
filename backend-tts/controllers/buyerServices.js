const BuyerServices = require('../models/BuyerServices')

// create data
exports.createBuyerServices = async(req, res) => {
    const data = new BuyerServices(req.body)
    await data.save()
    res.send({ data: data })
}

// get all data
exports.findBuyerServices = async (req, res) => {
    const data = await BuyerServices.find()
    res.send({ data: data})
}

// get single data
exports.findOneBuyerServices = async(req, res) => {
    try {
        const data = await BuyerServices.findById(req.params.id)
        res.send({ data: data })
    } catch {
        res.status(404).send({ error: "BuyerServices is not found!" })
    }
}

// update single data
exports.updateBuyerServices = async(req, res) => {
    try {
        const data = await BuyerServices.findById(req.params.id)
        Object.assign(data, req.body)
        data.save()
        res.send({ data: data })
    } catch {
        res.status(404).send({ error: "BuyerServices is not found!" })
    }
}

// delete single data
exports.deleteBuyerServices = async(req, res) => {
    try {
        const data = await BuyerServices.findById(req.params.id)
        await data.remove()
        res.send({ data: true })
    } catch {
        res.status(404).send({ error: "BuyerServices is not found!" })
    }
}