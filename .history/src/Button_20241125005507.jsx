function Button() {
    // const handleClick = () => alert('Hi there');

    let 
    const handleClickParams = (name) => {
        alert(name + ' stop clicking me now!')
    }
    return (
        <>
        {/* <button onClick ={handleClick}>click me now 😂😂</button> */}
            <button onClick={()=>handleClickParams('Brian')}>click me now 😂😂</button>
            </>
    )
}

export default Button