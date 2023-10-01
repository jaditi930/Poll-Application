import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function PollNavBar()
{ 
    return (
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="">Poll App</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="answered_polls">Answered Polls</Nav.Link>
            <Nav.Link href="my_polls">My Polls</Nav.Link>
            <Nav.Link className="ms-auto" href="create_poll">Create new poll</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}