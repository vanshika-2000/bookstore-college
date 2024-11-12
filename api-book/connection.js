const mongoose = require('mongoose')
async function connect() {
    try{
        await mongoose.connect('mongodb://localhost:27017/book-store')
        console.log("connected")
    }catch(err){
        console.log(err)
    }
}
module.exports = connect