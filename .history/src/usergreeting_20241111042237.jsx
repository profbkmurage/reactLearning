import propTypes from"prop-types"

function UserGreeting(props) {
    // if (props.isLoggedIn) {
    //     return (
    //         <h2>Welcome {props.userName}</h2>
    //     )
    // }this can be replced by a tenary operation
    const logInMessage = 'please login to continue';
    const loggedInMessage = `welcome {props.userName}`;

    return(<props.isLoggedIn ? loggedInMessage : logInMessage/>)

}

UserGreeting.propTypes = {
    userName: propTypes.string,
    isLoggedIn: propTypes.bool
}

export default UserGreeting;