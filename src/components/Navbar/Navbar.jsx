import { Link } from 'react-router-dom';

import NavbarAuth from "./NavbarAuth/NavbarAuth";
import NavbarMenu from "./NavbarMenu/NavbarMenu";
import NavbarUser from "./NavbarUser/NavbarUser";

import useAuth from 'hooks/useAuth';


const Navbar = () => {
    const {isLoggedIn} = useAuth()

    return (
        <header>
            <nav>
                <div>
                    <Link to="/">Home</Link>
                    {isLoggedIn && <NavbarMenu />}
                    {isLoggedIn ? <NavbarUser /> : <NavbarAuth />}
                </div>
            </nav>
        </header>
    )
}

export default Navbar;