import Header from "../../components/Header/Header";

import styles from "./MainPage.module.scss";

function MainPage() {
  return (
    <div className={styles.main}>
      <Header></Header>
      <h1>Main Page</h1>
    </div>
  );
}

export default MainPage;
