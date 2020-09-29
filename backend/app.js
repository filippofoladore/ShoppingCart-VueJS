const express = require('express')
const cors = require('cors')
const app = express()

const port = process.env.PORT || 4000

app.use(express.json())
app.use(cors())

const orders = require('./routes/orders')
app.use('/orders', orders)

app.get('/', (req,res) => {
    res.send("Hello")
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})