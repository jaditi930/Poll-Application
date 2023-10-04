import { useNavigate } from 'react-router-dom';
const user={
    email:"",
    username:"",
    password:""

}

export default function SignUp()
{
  const navigate=useNavigate("")
  function signup_user(props)
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
        props.setMsg("SignUp successful. Please login now to continue.")
        navigate("/login")

    })
    .catch((err)=>{
      props.setDisplay("block")
      props.setMsg("Username already taken. Please try again.")
    })
}
    return (
        <>
    <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" onChange={(e)=>{user.email=e.target.value}}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputUsername1" class="form-label">Username</label>
    <input type="text" class="form-control" id="exampleInputUsername1" onChange={(e)=>{user.username=e.target.value}}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"  onChange={(e)=>{user.password=e.target.value}}/>
  </div>
  <button type="submit" class="btn btn-primary" onSubmit={(e)=>{
            // e.preventDefault()
    signup_user()
    navigate("/login")
  }}>Submit</button>
</form>
            </>
    )
}