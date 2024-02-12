import { useLocation } from "react-router-dom"
import Card from "./card"
import Header from "./header"
import Manage from "./manage"

const Landing=()=>{
    const data=useLocation()
    console.log(data)
    return(  
        <div className=" bg-black p-10">
        <div className="bg-white p-10 rounded-md">
            <Header data={data.state.user}></Header>
            <div className=" flex justify-between gap-5 my-5 flex-wrap">
            <Card color={"#8272DA"} title={"23"} disc={"Chennai"}/>
            <Card color={"#FD6663"} title={"December"} disc={"14.02.34"}/>
            <Card color={"#FCA201"} title={"Built Using"} disc={"React"}/>
            </div>
            <div className=" flex gap-5">
                <Manage/>
            </div>
        </div>
        </div>
        )}

export default Landing