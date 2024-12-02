// you have to import proptypes so as to use and create the property types 
import propTypes from "prop-types"

function Person(props) {
    return (
         <div className="card">
            <img className="cardImage" src={props.imgsrc} alt="a pic here" />
            <h2 className="cardTitle">{props.name}</h2>
            <p className="cardText">{props.description}</p>
            <p className="cardText">{props.age}</p>
            <p className="cardText">{props.isStudent ? 'yes' : 'no'} </p>
        </div>
    )
}

Person.propTypes = {
    name: propTypes.string,
    age: propTypes.number,
    description: propTypes.string,
    imgsrc: propTypes.string,
    isStudent: propTypes.bool
}
// props can have default values such that when not defined, these will take effect
Person.defaultProps = {
     name: 'no defined name',
    age: 'age not defined',
    description: 'no defined value here',
    imgsrc: 'no defined value here',
    isStudent: false
}

export default Person