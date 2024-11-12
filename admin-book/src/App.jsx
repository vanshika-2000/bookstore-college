import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import CreateBook from "./pages/CreateBook"
import Book from "./pages/Book"
import Sidebar from './components/Sidebar'
import Login from "./pages/Login"

function App() {
  return (
    <BrowserRouter>
      <Sidebar>
      <Routes>
        <Route path = '/' element = {<Login></Login>}></Route>
        <Route path = '/dashboard' element = {<Dashboard></Dashboard>}></Route>
        <Route path = '/add/book' element = {<CreateBook></CreateBook>}></Route>
        <Route path = '/book' element = {<Book></Book>}></Route>
      </Routes>
      </Sidebar>
      
    </BrowserRouter>
  )
}

export default App
