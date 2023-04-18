import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Stack, Collapse, IconButton } from '@mui/material'
import logo from '../../Assets/logo.svg'
import './Nav2.scss'

export default function Na2() {

    const navItems = [
        {
            route: '/WhatToExpect',
            text: 'What To Expect'
        },
        {
            route: '/Locations',
            text: 'Locations'
        },
        {
            route: '/Events',
            text: 'Events'
        },
        {
            route: '/About',
            text: 'About'
        }
    ]

    const [showMobileNav, setShowMobileNav] = useState(false)

    const navLinks = navItems.map((i, idx) => <Link key={idx} to={i.route} className='nav-item'>{i.text}</Link>)

    return <div className='nav2'>
        <nav className='navbar bg-volley-blue'>
            <div className='container d-flex justify-content-center justify-content-md-between align-items-center'>
                <Link to='/' className='logo d-inline-block py-2'>
                    <img className='mx-3' src={logo} alt={'Pickle Mall'} />
                </Link>
                <Stack direction='row' spacing={{md: 4, lg: 8}} className='nav-items d-none d-md-flex'>
                    {navLinks}
                </Stack>
            </div>
            <div className='text-center d-md-none'>
                <Collapse in={showMobileNav} timeout={'auto'} unmountOnExit>
                    <Stack className='nav-items'>
                        {navLinks}
                    </Stack>
                </Collapse>
                <IconButton className='text-light' aria-label='Expand navigation' onClick={e => setShowMobileNav(!showMobileNav)}>
                    {showMobileNav ?
                        <span className='bi bi-chevron-up'></span>
                        :
                        <span className='bi bi-chevron-down'></span>
                    }
                </IconButton>
            </div>
        </nav>
    </div>
}