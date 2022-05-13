import Header from "../../components/Header/Header";

import styles from "./MainPage.module.scss";
import Map from "../../components/Map/Map";

function MainPage() {
  return (
    <div className={styles.main}>
      <Header></Header>
      <Map></Map>
    </div>
  );
}

export default MainPage;
