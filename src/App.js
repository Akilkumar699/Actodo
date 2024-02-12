import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./Login"
import Signin from "./Signin"
import Landing from "./components/Landing"



const App =()=>{
  const [user,setuser] = useState([
    {
        username:"Akil",
        password:1234
    }
  ])
  
  return(
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login user={user} setuser={setuser}/>}></Route>
      <Route path="/signin" element={<Signin user={user} setuser={setuser}/>}></Route>
      <Route path="/landing" element={<Landing/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App