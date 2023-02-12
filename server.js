const express = require('express')
const app = express()
const mongoose = require('mongoose')

app.get('/', (req, res) => {
    res.send('hello node api')
})




mongoose.
connect('mongodb+srv://chris:123admin@cluster0.g942hzz.mongodb.net/Node-API?retryWrites=true&w=majority')
.then(() => {
    console.log('conncted to MongoDB')
    app.listen(3000, ()=> {
        console.log('node app is running on port 3000')
    })
    
}).catch((error) => {
    console.log(error)
})
``