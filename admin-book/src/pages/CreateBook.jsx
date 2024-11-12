import { Form , Button }from "react-bootstrap"
import { useState } from "react"
import axios from 'axios'
function CreateBook(){
    function addBook(){
        let data = {
            bookName : bookName ,
            authorName : authorName ,
            description :description , 
            price : price  ,
            language : language , 
            publisher : publisher

        }
        axios({
            url : "http://localhost:3001/add/book" ,
            method : 'post' ,
            data : data 
        }).then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
    }
    let [bookName , setBookName]= useState('')
    let [authorName, setAuthorName] = useState('')
    let [description, setDescription] = useState('')
    let [price , setPrice] = useState(0)
    let [language, setLanguage] = useState('')
    let [publisher , setPublisher] = useState('')
    return(
        <Form>
        <Form.Group className="mb-3" >
          <Form.Label>Book Name</Form.Label>
          <Form.Control type="text" placeholder="Book Name" onChange={(e)=>setBookName(e.target.value)} />
        </Form.Group>
        {bookName}
        <Form.Group className="mb-3" >
          <Form.Label>Author Name</Form.Label>
          <Form.Control type="text" placeholder="Author Name" onChange={(e)=>setAuthorName(e.target.value)} />
        </Form.Group>
        {authorName}
        <Form.Group className="mb-3" >
          <Form.Label>Book Description</Form.Label>
          <Form.Control as="textarea" rows={3} onChange={(e)=>setDescription(e.target.value)}/>
        </Form.Group>
        {description}
        <Form.Group className="mb-3" >
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" placeholder="Price" onChange={(e)=>setPrice(e.target.value)}/>
        </Form.Group>
        {price}
        <Form.Group className="mb-3" >
          <Form.Label>Language</Form.Label>
          <Form.Control type="text" placeholder="Language" onChange={(e)=>setLanguage(e.target.value)}/>
        </Form.Group>
        {language}
        <Form.Group className="mb-3">
          <Form.Label>Publisher</Form.Label>
          <Form.Control type="text" placeholder="Publisher" onChange={(e)=> setPublisher(e.target.value)}/>
        </Form.Group>
        {publisher}
        <Button variant="dark" onClick={addBook}>Add Book</Button>
        
      </Form>
    )
}
export default CreateBook