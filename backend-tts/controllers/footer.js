const Footer = require('../models/Footer')

// create data
exports.createFooter = async(req, res) => {
    const data = new Footer(req.body)
    await data.save()
    res.send({ data: data })
}

// get all data
exports.findFooter = async (req, res) => {
    const data = await Footer.find()
    res.send({ data: data})
}

// get single data
exports.findOneFooter = async(req, res) => {
    try {
        const data = await Footer.findById(req.params.id)
        res.send({ data: data })
    } catch {
        res.status(404).send({ error: "Footer is not found!" })
    }
}

// update single data
exports.updateFooter = async(req, res) => {
    try {
        const data = await Footer.findById(req.params.id)
        Object.assign(data, req.body)
        data.save()
        res.send({ data: data })
    } catch {
        res.status(404).send({ error: "Footer is not found!" })
    }
}

// delete single data
exports.deleteFooter = async(req, res) => {
    try {
        const data = await Footer.findById(req.params.id)
        await data.remove()
        res.send({ data: true })
    } catch {
        res.status(404).send({ error: "Footer is not found!" })
    }
}