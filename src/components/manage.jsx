import { useState } from "react"
import Input from "./input"
import Output from "./output"



const Manage=()=>{
    const [newarray,setnewarray] = useState([{id:1,activity:"go to walk"}])
    return(
        <>
            <Input newarray={newarray} setnewarray={setnewarray}/>
            <Output newarray={newarray} setnewarray={setnewarray}/>
        </>
    )
}

export default Manage