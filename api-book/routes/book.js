const express = require('express')
const bodyParser = require('body-parser')
const bookcontroller = require('../controllers/bookcontroller')
const router = express.Router()
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({
    extended:false
}))
router.post('/add/book',(req,res)=>{
    console.log("we are here")
    bookcontroller.addBook(req,res)
})
module.exports = router