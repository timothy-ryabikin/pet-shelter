import Button from "@mui/material/Button";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, signInWithGoogle } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch } from "react-redux";
import { loginRedux } from "../../utils/userReducer";
import GoogleIcon from "@mui/icons-material/Google";

import styles from "./Login.module.css";

function Login() {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (loading) {
      //TODO: maybe trigger a loading screen
      return;
    }
    if (user) {
      //TODO: add uer to redux
      console.log("user login", user);
      dispatch(loginRedux());
      navigate("/");
    }
    if (error) {
      console.log(error);
    }
  }, [user, loading, dispatch, error, navigate]);

  return (
    <div className={styles.login}>
      <Button color="inherit" variant="contained" onClick={signInWithGoogle}>
        Login with &nbsp;<GoogleIcon></GoogleIcon>oogle
      </Button>
    </div>
  );
}

export default Login;
