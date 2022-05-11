import Login from "../../components/Login/Login";
import Logo from "../../components/SVG/Logo";

import styles from "./LoginPage.module.scss";

function LoginPage() {
  return (
    <div className={styles.login}>
      <div className={styles.logo}>
        <Logo></Logo>
      </div>
      <h1 className={styles.text}>Wellcome to Pet Shelter!</h1>
      <Login></Login>
    </div>
  );
}

export default LoginPage;
