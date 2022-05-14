import { useDispatch } from "react-redux";
import { hideOrShowNewRequestForm } from "../../utils/appReducer";
import styles from "./NewRequestForm.module.scss";

function NewRequestForm() {
  const dispatch = useDispatch();

  function handleClose() {
    dispatch(hideOrShowNewRequestForm());
  }

  function disableClose(e) {
    e.stopPropagation();
  }

  return (
    <div className={styles.new_form_container} onClick={handleClose}>
      <div className={styles.new_form} onClick={disableClose}>
        <form>FORM</form>
      </div>
    </div>
  );
}

export default NewRequestForm;
