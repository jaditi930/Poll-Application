import { useNavigate } from 'react-router-dom';

const user={
    username:"",
    password:""

}

export default function Login(props)
{

  const navigate=useNavigate();

  function log_user()
{
  fetch('https://aditi0601.pythonanywhere.com/login', {
     
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
      console.log(data.message)
      if(data.message=="user not logged in")
      {
        props.setDisplay("block")
        props.setMsg("Failed to login. Please check your username and password")
        return;
      }
      props.setLogged(true)
      fetch("https://aditi0601.pythonanywhere.com/get_cookie",{
      credentials:'include',
      })
      .then((response)=>response.json())
      .then((data)=>{
        console.log(data)        
        var now = new Date();
        now.setFullYear( now.getFullYear() + 1 );
        document.cookie = 'csrftoken='+data.cookies+';expires='+now.toUTCString()+';path=/';
        props.setDisplay("none")
        navigate("/")
      })
      .catch((err)=>{
        props.setDisplay("block")
        props.setMsg("Error occured. Please try again later")
      })
  })
}
    return (
        <div class="mt-5">
    <form class="col-md-5 ms-auto me-auto">
  <div class="mb-3">
    <label for="exampleInputUsername1" class="form-label">Username</label>
    <input type="text" class="form-control" id="exampleInputUsername1" onChange={(e)=>{user.username=e.target.value}}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" onChange={(e)=>{user.password=e.target.value}}/>
  </div>
  <button type="submit" class="btn btn-outline-success" onClick={(e)=>{
        e.preventDefault()
        log_user()
        navigate("/")
  }}>Submit</button>
</form>
            </div>
    )
}
