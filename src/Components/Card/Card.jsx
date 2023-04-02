import React from 'react'

import './Card.scss'

export default function Card({children}) {
    return <>
    <div className='card bg-bright-white'>
        {children}
    </div>
    </>
}