import React from 'react'
import { Link } from 'react-router-dom'

export default function Button({ link, className, hundleClick, text }) {
    return (
        <Link
            to={link}
        >
            <button
                className={'btn ' + className}
                onClick={hundleClick}
            >
                {text}
            </button>
        </Link>
    )
}
