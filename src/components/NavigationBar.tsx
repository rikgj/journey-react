import {Link} from "react-router-dom";
import styles from "./NavigationBar.module.scss";

export const NavigationBar = () => {
    return (
        <nav>
            <ul className={styles.navigationMenu}>
                <li className={styles.menuItem}><Link to="/">A_LOGO</Link></li>
                <li className={styles.menuItem}><Link to="/about">About</Link></li>
                <li className={styles.menuItem}><Link to="/gallery">Gallery</Link></li>
                <li className={styles.menuItem}><Link to="/not-found">Pending</Link></li>
                <li className={styles.menuItem}><Link to="/not-found">Waiting</Link></li>
            </ul>
        </nav>
    );
}