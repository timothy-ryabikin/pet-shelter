import Button from "@mui/material/Button";

import styles from "./Login.module.css";

function Login() {
  return (
    <div className={styles.login}>
      <Button color="inherit" variant={"outlined"}>
        Login
      </Button>
    </div>
  );
}

export default Login;
