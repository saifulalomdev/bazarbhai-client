import useUserStore from "../../../store/useUserStore"
import UserLoggedIn from "./UserLoggedIn";
import UserLoggedOut from "./UserLoggedOut";



export default function DynamicSettingsItems() {
    const user = localStorage.getItem("token")

    return (
        <div className="w-full mt-6">
            {user ? <UserLoggedIn /> : <UserLoggedOut />}
        </div>
    )
}
