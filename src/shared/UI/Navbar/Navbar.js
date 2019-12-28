import React from "react";
import { NavLink, Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";

import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import Centered from "../../Layout/Centered/Centered";

export default function Navbar() {
  return (
    <nav className={styles.navigation}>
      <Centered>
        <Logo />
      </Centered>
    </nav>
  );
}
