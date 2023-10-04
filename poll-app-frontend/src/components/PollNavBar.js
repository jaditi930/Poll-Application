import { Link, useNavigate } from 'react-router-dom';

export default function PollNavBar(props)
{ 
    const navigate=useNavigate()
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
  navigate("/login")
  })
}
    return (
      <>
        <nav class="navbar navbar-dark bg-dark navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <Link class="navbar-brand" to="/">Poll App</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0" >
                        { props.isLogged
                        ? <>
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/create_poll">Create Poll</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/my_polls">My Polls</Link>
                        </li>
                        </>
                        : <></>
                        }
                        
                    
    </ul>
    <form class="d-flex">
        { props.isLogged?  <button class="btn btn-outline-success" type="button" onClick={logout}>Logout</button>
        : <>
        <Link to="login" class="btn btn-outline-success" role="button">Login</Link>
        <Link to="signup" class="btn btn-outline-success" role="button">SignUp</Link>
        </>
        }
     </form>
                </div>
            </div>
        </nav>
</>
    )
}