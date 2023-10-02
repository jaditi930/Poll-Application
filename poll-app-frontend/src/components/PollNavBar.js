import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';
function logout()
{
  fetch('http://127.0.0.1:7000/logout',{
  'credentials':'include'
  })
  .then((response)=>response.json())
  .then((data)=>{
      console.log(data)
  })
}
export default function PollNavBar()
{ 
    return (
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="">Poll App</Navbar.Brand>
          <Nav className="me-auto">
          <Link to="/">Home</Link>
            <Link to="answered_polls">Answered Polls</Link>
            <Link to="my_polls">My Polls</Link>
            <Link to="create_poll">Create new poll</Link>
            <Link to="login">Login</Link>
            <Button onClick={logout}>Logout</Button>
          </Nav>
        </Container>
      </Navbar>
    )
}