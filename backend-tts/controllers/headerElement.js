const HeaderElement = require('../models/HeaderElement')

// create data
exports.createHeaderElement = async(req, res) => {
    const data = new HeaderElement(req.body)
    await data.save()
    res.send({ data: data })
}

// get all data
exports.findHeaderElement = async (req, res) => {
    const data = await HeaderElement.find()
    res.send({ data: data})
}

// get single data
exports.findOneHeaderElement = async(req, res) => {
    try {
        const data = await HeaderElement.findById(req.params.id)
        res.send({ data: data })
    } catch {
        res.status(404).send({ error: "HeaderElement is not found!" })
    }
}

// update single data
exports.updateHeaderElement = async(req, res) => {
    try {
        const data = await HeaderElement.findById(req.params.id)
        Object.assign(data, req.body)
        data.save()
        res.send({ data: data })
    } catch {
        res.status(404).send({ error: "HeaderElement is not found!" })
    }
}

// delete single data
exports.deleteHeaderElement = async(req, res) => {
    try {
        const data = await HeaderElement.findById(req.params.id)
        await data.remove()
        res.send({ data: true })
    } catch {
        res.status(404).send({ error: "HeaderElement is not found!" })
    }
}