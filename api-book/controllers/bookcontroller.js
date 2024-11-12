const Book = require('../model/Book')
async function addBook(req,res){
    try{
        console.log(req.body,'req.body')
       
    }catch(err){
        console.log(err)
       
    }
}
module.exports={
    addBook
}