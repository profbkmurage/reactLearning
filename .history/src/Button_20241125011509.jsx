function Button() {
    // const handleClick = () => alert('Hi there');

    let count = 0;
    const handleClickParams = (name) => {
        if (count < 3) {
            count++; 
            alert(`${name} you clicked me ${count} times!`);
        } else {
            
        }
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