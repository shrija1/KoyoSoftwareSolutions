const express = require('express')
const cors = require('cors')
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const Server = require('mongodb').Server;
require('dotenv').config()
const dns = require('dns');

const app = express()

app.use(cors())
// parse application/json
app.use(bodyParser.json());

const uri = process.env.DB_PATH
let client = new MongoClient(uri, { useNewUrlParser: true });
// let client = new MongoClient(uri, { useUnifiedTopology: true, useNewUrlParser: true });

// home
app.get('/', (req, res) =>{
    res.send('Welcome To Backend SoftSite')
})
// add data
app.post('/addData', (req, res) => {
  const patientsDetails = req.body
  patientsDetails.orderTime = new Date()
  client = new MongoClient(uri, { useNewUrlParser: true });
  client.connect(err => {
    const collection = client.db("TTS").collection("headerElement");
    collection.insertOne(patientsDetails, (err, result) => {
      if (err) {
        console.log(err)
        res.status(500).send({ message: err })
      } else {
        res.send(result.ops[0]);
      }

    })
    client.close();
  });
})
// add data multiple
app.post('/addMultiData', (req, res) => {
  const product = req.body
  client = new MongoClient(uri, { useNewUrlParser: true });
  client.connect(err => {
    const collection = client.db("TTS").collection("headerElement");
    collection.insert(product, (err, result) => {
      // console.log("successfully inserted", result);
      if (err) {
        console.log(err)
        res.status(500).send({ message: err })
      } else {
        res.send(result.ops[0]);
      }
    })
    client.close();
  });
})
// get data
app.get("/getData", (req, res) => {
    client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => {
      // { name: 'mobile', stock: { $gt: 20 } } find er modde dile filter korbe
      const collection = client.db("TTS").collection("headerElement");
      collection.find().toArray((err, documents) => {
        if (err) {
          console.log(err)
          res.status(500).send({ message: err })
        } else {
          res.send(documents);
        }
      });
      client.close();
    });
});

app.post('/updateData', (req, res) => {
  const oldData = req.body
  // console.log(oldData);
  var myQuery = { address: "twetewqe 345" };
  var newValues = { $set: { name: "A", address: "sdfasdfn 123" } };
  client = new MongoClient(uri, { useNewUrlParser: true });
  client.connect(err => {
    const collection = client.db("TTS").collection("headerElement");
    collection.updateOne(myQuery, newValues, (err, result) => {
      if (err) {
        console.log(err)
        res.status(500).send({ message: err })
      } else {
        res.send(result.ops[0]);
      }

    })
    client.close();
  });
}) 



// app.get('/data/:id', (req, res) => {
//     const id = req.params.id
//     client = new MongoClient(uri, { useNewUrlParser: true });
//     client.connect(err => {
//       const collection = client.db("TTS").collection("appointments");
//       collection.find({id}).toArray((err, documents) => {
//         if (err) {
//           console.log(err);
//           res.status(500).send({ message: err });
//         } else {
//           res.send(documents[0]);
//         }
//       });
//       client.close();
//     });
// })



// app.post('/getAppointmentById', (req, res) => {
//   const id = req.params.id
//   const patientsId = req.body
//   client = new MongoClient(uri, { useNewUrlParser: true });
//   client.connect(err => {
//     const collection = client.db("TTS").collection("appointments");
//     collection.find({ id: {$in: patientsId} }).limit(5).toArray((err, documents) => {
//       if (err) {
//         console.log(err);
//         res.status(500).send({ message: err });
//       } else {
//         res.send(documents);
//       }
//     });
//     client.close();
//   });
// });






// get data
app.get("/getDataFooter", (req, res) => {
  client = new MongoClient(uri, { useNewUrlParser: true });
  client.connect(err => {
    // { name: 'mobile', stock: { $gt: 20 } } find er modde dile filter korbe
    const collection = client.db("TTS").collection("footer");
    collection.find().toArray((err, documents) => {
      if (err) {
        console.log(err)
        res.status(500).send({ message: err })
      } else {
        res.send(documents);
      }
    });
    client.close();
  });
});






// app.post('/addProduct', (req, res) => {
//     client = new MongoClient(uri, { useNewUrlParser: true });
//     const product = req.body

//     client.connect(err => {
//       const collection = client.db("TTS").collection("appointments");
//     collection.insertOne(product, (err, result) => {
//         if (err) {
//             console.log(err)
//             res.status(500).send({message: err})
//         }else{
//             res.send(result.ops[0]);
//         }
        
//     })
//     client.close();
//     });
// })


// app.post('/addProducts', (req, res) => {
//   // console.log('data received', req.body);
//   client = new MongoClient(uri, { useNewUrlParser: true });

//   //save to database
//   const product = req.body
//   // console.log(product);

//   client.connect(err => {
//     const collection = client.db("TTS").collection("features");
//     // const collection = client.db("onlineStore").collection("products");
//     collection.insert(product, (err, result) => {
//       // console.log("successfully inserted", result);
//       if (err) {
//         console.log(err)
//         res.status(500).send({ message: err })
//       } else {
//         res.send(result.ops[0]);
//       }

//     })
//     client.close();
//   });
// })

const port = process.env.PORT || 4400
app.listen(port, () => console.log(`Listening to port ${port}`))











