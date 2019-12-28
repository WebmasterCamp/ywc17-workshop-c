import React from 'react'
import styles from './Choice.module.css'

export default function Choice(props) {
    return (
    <button className={styles.button}>{props.data}</button>
    )
}
