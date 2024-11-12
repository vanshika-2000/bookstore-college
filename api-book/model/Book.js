const mongoose = require('mongoose')
const timestamps = require ("mongoose-timestamps")
const Schema = mongoose.Schema
const BookSchema = new Schema({
    bookName : { type : String },
    authorName : { type : String },
    description : { type : String },
    price: { type : Number },
    language : { type : String },
    publisher : { type : String },
    createdAt : Date,
    updatedAt : Date
    
})
BookSchema.plugin(timestamps , {index:true})
module.exports = mongoose.model( 'Book' , BookSchema ) 
  