import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { logout } from "../../firebase";
import { logoutRedux } from "../../utils/userReducer";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

import React, { useEffect } from "react";

import styles from "./Header.module.scss";
import Logo from "../SVG/Logo";

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
      <div className={styles.left_section}>
        Pet Shelter
        <div className={styles.logo}>
          <Logo></Logo>
        </div>
      </div>
      <Button color="success" variant="contained" onClick={logout}>
        Logout
      </Button>
    </div>
  );
}

export default Header;
