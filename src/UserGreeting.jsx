import propTypes from 'prop-types'

function UserGreeting(props) {
    if(props.isLoggedIn){
      return <h2 className="welcome">Welcome {props.username}</h2>
    }
    else{
      return <h2 className="login">Please Login to continue</h2>
    }
}
UserGreeting.propTypesropTypes = {
  isLoggedIn : propTypes.bool,
  username : propTypes.string,
}
UserGreeting.defaultProps = {
  isLoggedIn : false,
  username : "Guest",
}
export default UserGreeting