import { useDispatch, useSelector } from "react-redux";
import { selectEmailUser } from "redux/auth/authSelectors";
import { logOut } from "redux/auth/operation";


export default function NavbarUser() {
  const dispatch = useDispatch();
  const { email } = useSelector(selectEmailUser);
  
  const onLogout = () => {
    dispatch(logOut());
  }

  return (
    <div>{`Welcome back, ${email}`} <button onClick={onLogout}>Logout</button></div>
  )
}