import CreatePoll from './components/CreatePoll'
import Home from './components/Home'
import Login from './components/Login'
import PollNavBar from './components/PollNavBar'
import SignUp from './components/SignUp'
import MyPolls from './components/MyPolls'
import Alert from './components/Alert'
import { useState } from 'react';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';


function App() {
  const [isLogged,setLogged]=useState(false)
  const [msg,setMsg]=useState("")
  const [display,setDisplay]=useState("none")

  return (
  <>
    <Router>
      <PollNavBar isLogged={isLogged} setLogged={setLogged}/>
      <Alert msg={msg} display={display}/>
    <Routes>
      <Route exact path="/" element={<Home setMsg={setMsg} setDisplay={setDisplay}/>}></Route>
      <Route exact path="/login" element={<Login setLogged={setLogged} setMsg={setMsg} setDisplay={setDisplay}/>}></Route>
      <Route path="/signup" element={<SignUp setMsg={setMsg} setDisplay={setDisplay}/>}></Route>
      <Route path="/create_poll" element={<CreatePoll setMsg={setMsg} setDisplay={setDisplay}/>}></Route>
      <Route path="/my_polls" element={<MyPolls setMsg={setMsg} setDisplay={setDisplay}/>}></Route>
    </Routes>
  </Router> 
  </>
  );
}

export default App;