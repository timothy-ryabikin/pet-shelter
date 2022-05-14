import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
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
  const userData = useSelector((state) => state.user.userData);
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
        <h2>Pet Shelter</h2>
        <div className={styles.logo}>
          <Logo></Logo>
        </div>
      </div>
      <div className={styles.right_section}>
        <div>{userData.displayName}</div>
        <img src={userData.photoURL} alt="Avatar" className={styles.avatar} />
        <Button
          color="success"
          variant="contained"
          onClick={() => {
            const result = window.confirm("Do you want to logout?");
            if (!result) return;
            logout();
          }}
        >
          Logout
        </Button>
      </div>
    </div>
  );
}

export default Header;
