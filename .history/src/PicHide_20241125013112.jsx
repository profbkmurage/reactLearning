function PicHide() {
    const imgURL = './assets/bk.jpg';

    const handleClick = (e) => e.target.style.dsplay = 'none';

    return (
        <img onClick={(e)=> handleClick(e)} src={imgURL} alt="" /></ing
    )
}

export default PicHide