import { useDispatch} from "react-redux";
import { logOut } from "redux/auth/operation";
import useAuth from "hooks/useAuth"


 const NavbarUser = () => {
   const dispatch = useDispatch();
  const { user } = useAuth();
  
  const onLogout = () => {
    dispatch(logOut());
  }

  return (
    <div>
      <p>{`Welcome back, ${user.email}`}</p>
      <button onClick={onLogout}>Logout</button>
      </div>
  )
}
export default NavbarUser