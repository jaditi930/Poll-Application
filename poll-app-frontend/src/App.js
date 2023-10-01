import CreatePoll from './components/CreatePoll'
import Home from './components/Home'
import Login from './components/Login'
import PollNavBar from './components/PollNavBar'
import SignUp from './components/SignUp'
import ShowPolls from './components/ShowPolls'
import { useState } from 'react';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';


function App() {
  const [token,setToken]=useState("");
  const [alert,setAlert]=useState("")

  return (
  <>
    <Router>
      <PollNavBar/>
      
    <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route exact path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<SignUp/>}></Route>
      <Route path="/create" element={<CreatePoll/>}></Route>
      <Route path="/my_polls" element={<ShowPolls />}></Route>
    </Routes>
  </Router> 
  </>
  );
}

export default App;