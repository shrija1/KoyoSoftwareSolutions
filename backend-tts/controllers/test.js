const Test = require('../models/Test')

// create data
exports.createTest = async(req, res) => {
    const data = new Test(req.body)
    await data.save()
    res.send({ data: data })
}

// get all data
exports.findTest = async (req, res) => {
    const data = await Test.find()
    res.send({ data: data})
}

// get single data
exports.findOneTest = async(req, res) => {
    try {
        const data = await Test.findById(req.params.id)
        res.send({ data: data })
    } catch {
        res.status(404).send({ error: "Test is not found!" })
    }
}

// update single data
exports.updateTest = async(req, res) => {
    try {
        const data = await Test.findById(req.params.id)
        Object.assign(data, req.body)
        data.save()
        res.send({ data: data })
    } catch {
        res.status(404).send({ error: "Test is not found!" })
    }
}

// delete single data
exports.deleteTest = async(req, res) => {
    try {
        const data = await Test.findById(req.params.id)
        await data.remove()
        res.send({ data: true })
    } catch {
        res.status(404).send({ error: "Test is not found!" })
    }
}