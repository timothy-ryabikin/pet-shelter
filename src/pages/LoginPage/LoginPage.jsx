import Login from "../../components/Login/Login";

import styles from "./LoginPage.module.css";

function LoginPage() {
  return (
    <div className={styles.login}>
      <h1 className={styles.text}>Wellcome to Pet Shelter!</h1>
      <Login></Login>
    </div>
  );
}

export default LoginPage;
