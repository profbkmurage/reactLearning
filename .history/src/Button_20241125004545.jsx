function Button() {
    const handleClick = () => alert('Hi there'); 

    const handleClickParams = (name)=> alert(name + ' stop clicking me now!')
    return (
        <button onClick={handleClick}>click me now 😂😂</button>
        <button onClick={handleClickP}>click me now 😂😂</button>
    )
}

export default Button