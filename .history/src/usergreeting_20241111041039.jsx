import propTypes from"prop-types"

function UserGreeting(props) {
    if (props.isLoggedIn) {
        return (
            <h2>Welcome {props.userName}</h2>
        )
    }
}

UserGreeting.propTypes = {
    userName: propTypes.string,
    isLoggedIn: propTypes.bool
}

export default UserGreeting;