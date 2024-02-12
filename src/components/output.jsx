const Output=(props)=>{
    const newarray=props.newarray
    const setnewarray=props.setnewarray

    const handleDelete=(removeid)=>{
        const setArray=newarray.filter((item)=>{
            if(item.id===removeid){
                return false
            }
            else{
                return true
            }
        })
        setnewarray(setArray)
    }
    return(
        <div className=" bg-[#8272DA] flex-grow p-5 rounded-md">
            <h1 className=" font-medium text-xl ">Today's Activity</h1>
            {
                newarray.length===0?"Enter Your Activity":""
            }
            {
                newarray.map((item)=>{
                    return <div className="flex justify-between"> 
                        <p>{item.activity}</p>
                        <button onClick={()=>{handleDelete(item.id)}}>Delete</button>
                    </div>
                })
            }
        </div>

    )
}

export default Output