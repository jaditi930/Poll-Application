import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Login()
{
    return (
        <>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter username" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
            </>
    )
}