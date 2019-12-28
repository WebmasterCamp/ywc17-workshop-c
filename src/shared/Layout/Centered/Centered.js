import React from 'react'
import styles from './Centered.module.css'

export default function Centered(props) {
    return (
        <div className={styles.centered}>
            {props.children}
        </div>
    )
}
