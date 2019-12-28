import React from 'react'
<<<<<<< HEAD
import styles from './Navbar.module.css'

export default function Navbar() {
    return (
        <div>
            
        </div>
    )
=======
import { Link } from 'react-router-dom'

import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/quiz">Quiz</Link>
        </li>
        <li>
          <Link to="/summary">Summary</Link>
        </li>
      </ul>
    </nav>
  )
>>>>>>> 37dd6ea9d114bd25c92414137274505c94584df3
}
