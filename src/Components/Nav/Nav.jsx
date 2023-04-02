import React from 'react'
import logo from './logo.svg'
import './Nav.scss'

export default function Nav() {

    return <>
        <nav className='navbar bg-volley-blue'>
            <div className='container d-flex justify-content-start align-items-center'>
                <a href='/' className='logo d-inline-block py-3'>
                    <img className='mx-3' src={logo} />
                </a>
            </div>
        </nav>
    </>
}