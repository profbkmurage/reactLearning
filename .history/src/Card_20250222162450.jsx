import profilePic from "./assets/bk"
    
function Card() {
    return (
        <div className="card">
            <img className="cardImage" src={profilePic} alt="" />
            <h2 className="cardTitle">Brian Murage</h2>
            <p className="cardText">I am a student currently taking a bachelors degree in education science</p>
        </div>
    );
}

export default Card