import propTypes from"prop-types"

function UserGreeting(props) {
    // if (props.isLoggedIn) {
    //     return (
    //         <h2>Welcome {props.userName}</h2>
    //     )
    // }this can be replced by a tenary operation
    const logInMessage = <h2 className="login-prompt">please login to continue</h2>;
    const loggedInMessage = <h2 className="welcome-message">welcome {props.userName}</h2>;

    return(props.isLoggedIn ? loggedInMessage : logInMessage)

}

UserGreeting.propTypes = {
    userName: propTypes.string,
    isLoggedIn: propTypes.bool
}

export default UserGreeting;