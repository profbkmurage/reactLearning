// you have to import proptypes so as to use and create the property types 
import propTypes from "prop-types"

function Person(props) {
    return (
        <div className="personData">

        </div>
    )
}

Person.propTypes = {
    name: propTypes.string,
    age: propTypes.number,
    description: propTypes.string
}

export default Person