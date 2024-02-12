import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const Login=(props)=>{
    const [input1,setinput1] =useState("")
    const [input2,setinput2] =useState("")
    const [register,setregister] =useState(true)

    const user=props.user
    const navigate=useNavigate()


    const handlechange1 =(e) =>{
        setinput1(e.target.value)
        // if(e.target.value===""){
        //     setregister(true)
        // }
    }

    const handlechange2 = (e) =>{
        setinput2(e.target.value)
        // if(e.target.value===""){
        //     setregister(true)
        // }
    }

    const handleClick = () =>{
        var notfound=false
        user.forEach(element => {
            if(element.username===input1 && element.password===input2){
                setregister(true)
                notfound=true
                navigate("/Landing",{state:{user:input1}})
            }
        });
        if(notfound===false){
            setregister(false)
        }
    }

    return(
        <div className=" bg-black p-10">
            <div className=" bg-white rounded-xl p-10">
                <h1 className="text-xl font-medium">Hey Hi</h1>
                {register?<p className="font-medium">I help you manage your activites after you login</p>:<p className=" font-medium text-red-400">Please Signin First</p>}
                <input type="text" value={input1} onChange={handlechange1} placeholder="username" className=" block border border-black p-1 rounded-md mt-3"/>
                <input type="number" value={input2} onChange={handlechange2} placeholder="password" className=" block border border-black p-1 rounded-md mt-2"/>
                <button className=" bg-[#8272DA] py-1 px-3 rounded-md mt-2" onClick={handleClick}>Login</button>
                <p className=" font-medium mt-2">Don,t i have an account ? <Link to={"/signin"} className=" underline">Sign in</Link></p>
            </div>
        </div>
    )
}

export default Login