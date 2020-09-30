const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

const orders = require('./routes/orders')
app.use('/orders', orders)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(__dirname + '/public/'))
    app.get(/.*/, (req,res) => res.sendFile(__dirname + '/public/index.html'))
}

const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})