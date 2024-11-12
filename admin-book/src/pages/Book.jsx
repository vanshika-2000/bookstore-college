import { Container , Button} from "react-bootstrap"
import { useNavigate } from "react-router-dom"
function Book(){
    const navigate = useNavigate()
    function addBook(){
        navigate('/add/book')
    }
    return(
        <Container>
             <Button variant="dark" onClick={addBook}>Add Book</Button>
        </Container>
        
)
}
export default Book