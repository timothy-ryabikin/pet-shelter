import {
    Link,
    // eslint-disable-next-line
    BrowserRouter as Router
} from "react-router-dom"

import styles from './Header.module.css'

function Header() {
    return (
        <div className={styles.header}>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
