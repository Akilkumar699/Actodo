
// const card=[
//     {
//         title:23,
//         disc:"Chennai"
//     },
//     {
//         title:"20 December",
//         disc:"14.02.34"
//     },
//     {
//         title:"Built Using",
//         disc:"react"
//     }
// ]

const Card=(props)=>{
    return(

                <div className="px-5 py-2 flex-grow text-center rounded-md" style={{backgroundColor:props.color}}>
                    <p>{props.title}</p>
                    <p>{props.disc}</p>
                </div>
        
    )
}

export default Card