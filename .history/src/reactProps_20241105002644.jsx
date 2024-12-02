// you have to import proptypes so as to use and create the property types 
import propTypes from "prop-types"

function Person(props) {
    return (
         <div className="card">
            <img className="cardImage" src={props.src} alt="a pic here" />
            <h2 className="cardTitle">{props.name}</h2>
            <p className="cardText">{props.description}</p>
        </div>
    )
}

Person.propTypes = {
    name: propTypes.string,
    age: propTypes.number,
    description: propTypes.string,
    src:propTypes.string
}

export default Person