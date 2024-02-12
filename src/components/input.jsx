import { useState } from "react"

const Input=(props)=>{

    const [input,setinput] = useState("")
    const newarray=props.newarray
    const setnewarray=props.setnewarray

    const handleChange =(e)=>{
        setinput(e.target.value)
    }

    const handleAdd =()=>{
        setnewarray([...newarray,{id:newarray.length+1,activity:input}])
    }
    return(
        <div>
            <h1 className="text-xl font-medium">Manage Activity</h1>
            <div className="border border-black mt-5">
                <input type="text" className=" outline-none p-1" value={input} onChange={handleChange}/>
                <button className=" bg-black text-white p-1" onClick={handleAdd}>Add</button>
            </div>
        </div>

    )
}

export default Input