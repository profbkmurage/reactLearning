function PicHide() {
    const imgURL = './src/assets/bk.jpg';

    const handleClick = (e) => e.target.style.dsplay = 'none';

    return (
        <img onClick={(e)=> handleClick(e)} src={imgURL} alt="" ></img>
    )
}

export default PicHide