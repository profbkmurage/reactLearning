import profilePic from "./assets/bk.jpg"
    
function Card() {
    return (
        <div className="card">
            <img src={profilePic} alt="" />
            <h2>Brian Murage</h2>
            <p>I am a student currently taking a bachelors degree in education science</p>
        </div>
    );
}

export default Card