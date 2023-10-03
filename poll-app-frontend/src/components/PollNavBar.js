import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';

export default function PollNavBar(props)
{ 
  function logout()
{
  fetch('http://127.0.0.1:7000/logout',{
  credentials:'include'
  })
  .then((response)=>response.json())
  .then((data)=>{
      console.log(data)

    function deleteAllCookies() {
      const cookies = document.cookie.split(";");
  
      for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i];
          const eqPos = cookie.indexOf("=");
          const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
          document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
      }
  }
  deleteAllCookies()
  props.setLogged(false)
  })
}
    return (
        <Navbar bg="dark" data-bs-theme="dark">
        <Container style={{justifyContent:"flex-start",minWidth:"90%",margin:"0px 10px"}}>
          <Navbar.Brand href="">Poll App</Navbar.Brand>
          <Nav style={{minWidth:"100%",alignItems:"center"}}>
          {props.isLogged ?
            (
              <>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="answered_polls">Answered Polls</Nav.Link>
            <Nav.Link as={Link} to="my_polls">My Polls</Nav.Link>
            <Nav.Link as={Link} to="create_poll">Create new poll</Nav.Link>
            <Button onClick={logout} style={{marginLeft:"auto"}} variant="secondary">Logout</Button>
              </>
            ): 
            (
              <>
              <Nav.Link as={Link} to="login" style={{marginLeft:"auto"}}><Button>Login</Button></Nav.Link>
              <Nav.Link as={Link} to="signup"><Button>Sign Up</Button></Nav.Link>
              </>
            )
            }
          </Nav>
        </Container>
      </Navbar>
    )
}