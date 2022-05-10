import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useDispatch } from "react-redux";
import { logout } from "../../firebase";
import { logoutRedux } from "../../utils/userReducer";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

import React, { useEffect } from "react";

import styles from "./Header.module.css";

function Header() {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (loading) return;
    if (!user) {
      dispatch(logoutRedux());
      navigate("/login");
    }
    if (error) console.log(error);
  }, [user, loading, dispatch, error, navigate]);

  return (
    <div className={styles.header}>
      <AppBar color={"secondary"} position="static">
        <Toolbar>
          <Grid container justify={"flex-end"}>
            <Button color="inherit" variant={"outlined"} onClick={logout}>
              Logout
            </Button>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
