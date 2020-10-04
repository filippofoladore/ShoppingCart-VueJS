const { query } = require('express');
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

orderRouter.post('/complete/', async (req, res) => {
    let size = req.body.order.length
    for (let i = 0; i < size; i++) {
        let id = req.body.order[i].id
        let qty = req.body.order[i].quantity
        const client = await connect();
        data = client.db('CheckoutDB').collection('articles')
        let queryID = { "_id": new mongodb.ObjectID(id) }
        let changes = { $inc: { "available_quantity": -qty } }
        await data.updateOne(queryID, changes)
    }
    const client = await connect();
    data = client.db('CheckoutDB').collection('orders')
    let query = { "user": new mongodb.ObjectID(req.body.id) }
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