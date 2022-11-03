import { NavLink } from "react-router-dom";

import s from "./NavbarMenu.module.css";

const items = [
    {
        id: nanoid(),
        to: "/contacts",
        text: "My contacts"
    },
];

const getClassName = ({isActive}) => {
    return isActive ? `${s.link} ${s.active}` : s.link;
}

const NavbarMenu = () => {
    return (
        <ul className={styles.menu}>
           {items.map(({id, to, text}) => (
            <li key={id}>
                <NavLink className={getClassName} to={to}>{text}</NavLink>
            </li>
    ))}
        </ul>
    )
}


export default NavbarMenu;