const express = require('express')
const mongodb = require('mongodb')

const orderRouter = express.Router()

//get user for name display
orderRouter.get('/:id', async (req, res) => {
    const client = await mongodb.MongoClient.connect('mongodb+srv://filippoDB:filippoDB@cluster0.ghzdf.mongodb.net/atroosdb?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    data = client.db('CheckoutDB').collection('users')
    res.send(await data.findOne({ "_id": new mongodb.ObjectID(req.params.id) }))
})

orderRouter.get('/detail/:id', async (req, res) => {
    const client = await mongodb.MongoClient.connect('mongodb+srv://filippoDB:filippoDB@cluster0.ghzdf.mongodb.net/atroosdb?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    data = client.db('CheckoutDB').collection('orders')
    res.send(await data.findOne({ "user": new mongodb.ObjectID(req.params.id) }))
})


orderRouter.get('/article/:id', async (req, res) => {
    const client = await mongodb.MongoClient.connect('mongodb+srv://filippoDB:filippoDB@cluster0.ghzdf.mongodb.net/atroosdb?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    data = client.db('CheckoutDB').collection('articles')
    res.send(await data.findOne({ "_id": new mongodb.ObjectID(req.params.id) }))
})

orderRouter.get('/complete/:id', async (req, res) => {
    const client = await mongodb.MongoClient.connect('mongodb+srv://filippoDB:filippoDB@cluster0.ghzdf.mongodb.net/atroosdb?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    data = client.db('CheckoutDB').collection('orders')
    let iden = { "user": new mongodb.ObjectID(req.params.id) }
    let neaa = {$set: {status: 'completed'}}
    res.send(await data.updateOne(iden, neaa))
})

module.exports = orderRouter