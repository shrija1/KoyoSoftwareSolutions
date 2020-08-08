const express = require('express')
const upload = require('express-fileupload')
const cors = require('cors')
const bodyParser = require("body-parser");
const mongoose = require('mongoose')
require('dotenv').config()

// const uploadImageController = require('./controllers/uploadImage')
const testController = require('./controllers/test')
const footerController = require('./controllers/footer')
const headerElementController = require('./controllers/headerElement')
const buyerServicesController = require('./controllers/buyerServices')

const app = express()
app.use('/static', express.static('uploads'))
app.use(express.json())
app.use(cors())
app.use(upload())
// app.use(bodyParser.json());
 
const uri = process.env.DB_PATH
let port = process.env.PORT
if(port==null){
    port = 4400
}








mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    app.get('/', (req, res) => {
        res.send('Homepage')
    })

    // upload image
    app.get('/uploadImage', (req, res) => {
        // res.sendFile(__dirname+'/uploadImage.html')
        res.sendFile('http://localhost:4000/dashboard')
    })
    app.post('/uploadImage', (req, res) => {
        if (req.files) {
            let file = req.files.file
            let filename = file.name

            file.mv('./uploads/'+filename, function(err) {
                if (err) {
                    res.send(err)
                } else {
                    res.send('File Uploaded')
                }
            })
        }
    })



    app.get('/test', testController.findTest)
    app.post('/test', testController.createTest)
    app.get('/test/:id', testController.findOneTest)
    app.patch('/test/:id', testController.updateTest)
    app.delete('/test/:id', testController.deleteTest)

    app.get('/footer', footerController.findFooter)
    app.post('/footer', footerController.createFooter)
    app.get('/footer/:id', footerController.findOneFooter)
    app.patch('/footer/:id', footerController.updateFooter)
    app.delete('/footer/:id', footerController.deleteFooter)

    app.get('/headerElement', headerElementController.findHeaderElement)
    app.post('/headerElement', headerElementController.createHeaderElement)
    app.get('/headerElement/:id', headerElementController.findOneHeaderElement)
    app.patch('/headerElement/:id', headerElementController.updateHeaderElement)
    app.delete('/headerElement/:id', headerElementController.deleteHeaderElement)

    app.get('/getBuyerServices', buyerServicesController.findBuyerServices)
    app.get('/getOneBuyerServices/:id', buyerServicesController.findOneBuyerServices)
    app.post('/addBuyerServices', buyerServicesController.createBuyerServices)
    app.patch('/updateBuyerServices/:id', buyerServicesController.updateBuyerServices)
    app.delete('/deleteBuyerServices/:id', buyerServicesController.deleteBuyerServices)



    app.listen(port, () => {
        console.log(`Server has started at port ${port}`)
        console.log(`http://localhost:${port}/`)
    })
})
.catch((err) => {
    console.log('Database connection failed!')
    console.log('\nError is: ', err)
})