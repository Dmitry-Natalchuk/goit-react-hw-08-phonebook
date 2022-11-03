import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "redux/auth/authSelectors";
import { logOut } from "redux/auth/operation";


export default function NavbarUser() {
  const dispatch = useDispatch();
  const { user } = useSelector(selectUser);
  
  const onLogout = () => {
    dispatch(logOut());
  }

  return (
    <div>{`Welcome back, ${user.email}`} <button onClick={onLogout}>Logout</button></div>
  )
}