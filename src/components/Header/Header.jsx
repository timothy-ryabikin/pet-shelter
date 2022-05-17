import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../firebase";
import { logoutRedux } from "../../utils/userReducer";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import PetsIcon from "@mui/icons-material/Pets";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import LogoutIcon from "@mui/icons-material/Logout";

import React, { useEffect } from "react";

import styles from "./Header.module.scss";
import Logo from "../SVG/Logo";
import {
  hideOrShowLostPetForm,
  hideOrShowNewRequestForm,
} from "../../utils/appReducer";

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

  function showNewRequestForm() {
    dispatch(hideOrShowNewRequestForm());
  }

  function showLostPetForm() {
    dispatch(hideOrShowLostPetForm());
  }

  return (
    <div className={styles.header}>
      <div className={styles.left_section}>
        <h2>Pet Shelter</h2>
        <div className={styles.logo}>
          <Logo></Logo>
        </div>
      </div>
      <div className={styles.right_section}>
        <Button color="secondary" variant="contained" onClick={showLostPetForm}>
          Lost pet
          <HelpOutlineIcon sx={{ m: "0px 0px 0px 10px" }}></HelpOutlineIcon>
        </Button>
        <Button
          color="success"
          variant="contained"
          onClick={showNewRequestForm}
        >
          New request <PetsIcon sx={{ m: "0px 0px 0px 10px" }}></PetsIcon>
        </Button>
        <div>{userData.displayName}</div>
        <img src={userData.photoURL} alt="Avatar" className={styles.avatar} />
        <Button
          color="info"
          variant="contained"
          onClick={() => {
            const result = window.confirm("Do you want to logout?");
            if (!result) return;
            logout();
          }}
        >
          Logout <LogoutIcon sx={{ m: "0px 0px 0px 10px" }}></LogoutIcon>
        </Button>
      </div>
    </div>
  );
}

export default Header;
