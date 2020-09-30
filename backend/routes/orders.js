const express = require('express')
const mongodb = require('mongodb')

const orderRouter = express.Router()

orderRouter.get('/detail/:id', async (req, res) => {
    const client = await connect();
    data = client.db('CheckoutDB').collection('orders')
    res.send(await data.findOne({ "user": new mongodb.ObjectID(req.params.id) }))
})


orderRouter.get('/article/:id', async (req, res) => {
    const client = await connect();
    data = client.db('CheckoutDB').collection('articles')
    res.send(await data.findOne({ "_id": new mongodb.ObjectID(req.params.id) }))
})

orderRouter.get('/complete/:id', async (req, res) => {
    const client = await connect();
    data = client.db('CheckoutDB').collection('orders')
    let query = { "user": new mongodb.ObjectID(req.params.id) }
    let changes = { $set: { status: 'completed' } }
    res.send(await data.updateOne(query, changes))
})

async function connect() {
    return client = await mongodb.MongoClient.connect(process.env.MONGO_URI, {
        useNewUrlParser: true, useUnifiedTopology: true
    }
    );
}




module.exports = orderRouter