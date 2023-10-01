import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const user={
    email:"",
    username:"",
    password:""

}
function signup_user()
{
    fetch('http://127.0.0.1:7000/signin', {
     
    // Adding method type
    method: "POST",
    credentials:'include',
     
    // Adding body or contents to send
    body: JSON.stringify(user),
     
    // Adding headers to the request
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
    .then((response)=>response.json())
    .then((data)=>{
        console.log(data)
    })
}
export default function SignUp()
{
    return (
        <>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>{user.email=e.target.value}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter username" onChange={(e)=>{user.username=e.target.value}}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e)=>{user.password=e.target.value}}/>
      </Form.Group>
      
      <Button variant="primary" type="submit" onClick={(e)=>{
        e.preventDefault()
        signup_user()
      }}>
        Submit
      </Button>
    </Form>
            </>
    )
}