import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const Signin=(props)=>{
    const navigate=useNavigate()
    console.log(navigate)
    const user=props.user
    const setuser=props.setuser
    const [input,setinput] = useState("")
    const [input1,setinput1] = useState("")
    // const [input2,setinput2] = useState("")


    const handleChange1 =(e)=>{
        setinput(e.target.value)
    }

    const handleChange2 =(e)=>{
        setinput1(e.target.value)
    }

    // const handleChange3 =(e)=>{
    //     setinput2(e.target.value)
    // }

    const handleAdd =()=>{
        setuser([...user,{username:input,password:input1}])
        navigate("/")
    }

    console.log(user)

    return(
        <div className=" bg-black p-10">
            <div className=" bg-white rounded-xl p-10">
                <h1 className="text-xl font-medium">Hey Hi</h1>
                <p className="font-medium">You can sign here :)</p>
                <input type="text" placeholder="username" value={input} onChange={handleChange1} className=" block border border-black p-1 rounded-md mt-3"/>
                <input type="number" placeholder="password" value={input1} onChange={handleChange2} className=" block border border-black p-1 rounded-md mt-2"/>
                <input type="text" placeholder="confirm password" className=" block border border-black p-1 rounded-md mt-2"/>
                <button className=" bg-[#FCA201] py-1 px-3 rounded-md mt-2" onClick={handleAdd}>Signin</button>
                <p className=" font-medium mt-2">Don,t i have an account ? <Link to={"/"} className=" underline">Login</Link></p>
            </div>
        </div>
    )
}

export default Signin