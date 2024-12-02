function PicHide() {
    const imgURL = './assets/bk.jpg';

    const handleClick = (e) => e.target.style.dsplay = 'none';

    return (
        <img onClick={handleClick} src={imgURL} alt="" />
    )
}

export default PicHide