import React from 'react'
import { Link } from 'react-router-dom'
import styles from './button.module.css';

export default function Button({ link, className, hundleClick, text }) {
    return (
        <Link
            to={link}
        >
            <button
                className={styles.btn + ' ' + styles[className]}
                onClick={hundleClick}
            >
                {text}
            </button>
        </Link>
    )
}
