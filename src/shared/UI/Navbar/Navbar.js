import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import Centered from "../../Layout/Centered/Centered";

export default function Navbar() {
  return (
    <nav className={styles.navigation}>
      <Centered>
        <ul className={styles.menuContainer}>
          <Logo />
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/quiz">Quiz</Link>
          </li>
          <li>
            <Link to="/summary">Summary</Link>
          </li>
          <div style={{margin: 'auto'}}></div>
          <li>
            <FontAwesomeIcon icon={faUserCircle} size="lg" />
          </li>
        </ul>
      </Centered>
    </nav>
  );
}
