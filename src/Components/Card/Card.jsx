import React from 'react'

import './Card.scss'

export default function Card({children, className}) {
    return <>
    <div className={className ? className : 'card bg-bright-white'}>
        {children}
    </div>
    </>
}