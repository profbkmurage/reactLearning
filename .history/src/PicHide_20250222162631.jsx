function PicHide() {
    const imgURL = './src/assets/bk-CUopmjWA.jpg';

    const handleClick = (e) => e.target.style.display = 'none';

    return (
        <img onClick={(e)=> handleClick(e)} src={imgURL} alt="" ></img>
    )
}

export default PicHide