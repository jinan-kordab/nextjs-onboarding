import React from "react";
import styles from "../styles/Backdrop.module.css";
function Backdrop(props) {
  return <div className={styles.backdrop} onClick={props.onClick} />;
}

export default Backdrop;
