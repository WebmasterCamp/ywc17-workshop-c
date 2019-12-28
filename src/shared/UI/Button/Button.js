import React from "react";
import styles from "./Button.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

export default function Button(props) {
  return (
    <>
      {props.isBack ? (
        <div>
          <FontAwesomeIcon icon={faAngleLeft} color="#7E7E7E"/>
          <button onClick={props.onClick} className={styles.buttonBack}>
            {props.children}
          </button>
        </div>
      ) : (
        <button onClick={props.onClick} className={styles.button}>
          {props.children}
        </button>
      )}
    </>
  );
}
