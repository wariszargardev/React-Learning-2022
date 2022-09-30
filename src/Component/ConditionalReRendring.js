import UserDashboard from "./User/UserDashboard";
import GuestUser from "./User/GuestUser";

const ConditionalReRendring = (props) => {
    const {isLoggedIn} = props

    return(
        <div>
            {isLoggedIn ? <UserDashboard /> : <GuestUser /> }
        </div>
    )
}

export default ConditionalReRendring