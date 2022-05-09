import {
  Link,
  // eslint-disable-next-line
  BrowserRouter as Router,
} from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";

import styles from "./Header.module.css";

function Header() {
  const user = useSelector((state) => state.user.isLogin);
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
      <AppBar color={"secondary"} position="static">
        <Toolbar>
          <Grid container justify={"flex-end"}>
            {user ? (
              <Button color="inherit" variant={"outlined"}>
                Logout
              </Button>
            ) : (
              <Button color="inherit" variant={"outlined"}>
                Login
              </Button>
            )}
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
