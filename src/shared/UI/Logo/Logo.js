import React from 'react'
import styles from './Logo.module.css'
import logo from './logo.png'

export default function Logo() {
    return (
        <div style={{width: '150px', height: '50px', background: 'grey', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <img src={logo} style={{width: '100%'}} />
        </div>
    )
}
