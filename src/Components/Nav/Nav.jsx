import React from 'react'
import logo from './logo.svg'
import './Nav.scss'

export default function Nav() {

    return <>
        <nav className='navbar bg-volley-blue d-flex align-items-center'>
            <div className='container'>
                <a className='navbar-brand' href='/'>
                    <img className='logo pt-2 navbar-brand' src={logo} />
                </a>
            </div>
        </nav>
    </>
}