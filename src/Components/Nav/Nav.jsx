import React from 'react'
import logo from '../../Assets/logo.svg'
import './Nav.scss'

export default function Nav() {

    return <div className='nav'>
        <nav className='navbar bg-volley-blue'>
            <div className='container d-flex justify-content-center justify-content-md-start align-items-center'>
                <a href='/' className='logo d-inline-block py-2'>
                    <img className='mx-3' src={logo} alt={'Picklemall'} />
                </a>
            </div>
        </nav>
    </div>
}