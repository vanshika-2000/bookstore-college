const express = require('express')
const cors = require('cors')
const connect= require('./connection')

const book = require('./routes/book')
const app = express()
connect()
app.use(cors())

app.use(book)
app.listen(3001,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("server is running on 3001")
    }
})