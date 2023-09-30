// import CreatePoll from './components/Create'
// import Home from './components/Home'
// import Login from './components/Login'
// import NavBar from './components/NavBar'
// import SignUp from './components/SignUp'
// import ViewMyPolls from './components/View'
import { useState } from 'react';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';


function App() {
  const [token,setToken]=useState("");
  const [alert,setAlert]=useState("")

  return (
    <h1>Poll App</h1>
  //   <Router>
  //     <NavBar setToken={setToken}/>
      
  //   <Routes>
  //     <Route exact path="/" element={<Home/>}></Route>
  //     <Route exact path="/login" element={<Login token={token} setToken={setToken}/>}></Route>
  //     <Route path="/signup" element={<SignUp/>}></Route>
  //     <Route path="/create" element={<CreatePoll/>}></Route>
  //     <Route path="/my-polls" element={<ViewMyPolls />}></Route>
  //   </Routes>
  // </Router> 
  );
}

export default App;