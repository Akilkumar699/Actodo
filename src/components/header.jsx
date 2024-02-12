const Header=(props)=>{
    return (
        <div>
        <h1 className="text-xl font-medium">Hello {props.data}</h1>
        <p>I help you manage your activity:)</p>
        </div>
    )
}

export default Header