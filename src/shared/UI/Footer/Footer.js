import React from "react";
import {Link} from 'react-router-dom';
import styles from "./Footer.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faYoutube, faTwitter } from "@fortawesome/free-brands-svg-icons";

import Centered from "../../Layout/Centered/Centered";

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <Centered>
        {/* <ul className="flex">
          <li><Link>เกี่ยวกับ</Link></li>
          <li><Link>แจ้งปัญหา</Link></li>
          <li><Link>ติดต่อเรา</Link></li>
        </ul>
        <ul  className="flex">
          <li><FontAwesomeIcon activeClassName="active" icon={faFacebook} size="3x" /></li>
          <li><FontAwesomeIcon activeClassName="active" icon={faYoutube} size="3x" /></li>
          <li><FontAwesomeIcon activeClassName="active" icon={faTwitter} size="3x" /></li>
        </ul> */}
        {/* <hr style={{color: '#7E7E7E'}} /> */}
        <p style={{textAlign: 'center'}}>©2019 YWC#17 Group C</p>
      </Centered>
    </div>
  );
}
