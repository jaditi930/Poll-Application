import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';
function logout()
{
  fetch('http://127.0.0.1:7000/logout',{
  credentials:'include'
  })
  .then((response)=>response.json())
  .then((data)=>{
      console.log(data)
    //   function getCookie(name) {
    //     let cookieValue = null;
    //     if (document.cookie && document.cookie !== '') {
    //         const cookies = document.cookie.split(';');
    //         for (let i = 0; i < cookies.length; i++) {
    //             const cookie = cookies[i].trim();
    //             // Does this cookie string begin with the name we want?
    //             if (cookie.substring(0, name.length + 1) === (name + '=')) {
    //                 cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
    //                 break;
    //             }
    //         }
    //     }
    //     return cookieValue;
    // }
    // const csrftoken = getCookie('csrftoken');
    //   document.cookie = 'csrftoken='+csrftoken+';expires=Thu, 01 Jan 1970 00:00:01 GMT;';
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