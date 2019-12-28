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
        <ul className={styles.menuContainer}>
          <Logo />
          <div style={{marginRight: '2rem'}}></div>
          <li>
            <NavLink activeClassName="active" to="/" exact>หน้าหลัก</NavLink>
          </li>
          <li>
            <Link>ผลการทดสอบ</Link>
          </li>
          <div style={{margin: 'auto'}}></div>
          <li>
            <FontAwesomeIcon activeClassName="active" icon={faUserCircle} size="3x" color="#66CCB8" />
          </li>
        </ul>
      </Centered>
    </nav>
  );
}
