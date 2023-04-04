import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'

import logo from '../../Assets/logo.svg'
import './Footer.scss'

export default function Footer() {
    return <footer className={'bg-deep-blue text-light'}>
        <div className={'container'}>
            <Grid container spacing={3} className={'mt-2 mb-1 text-nowrap'}>
                <Grid xs={12} className={'d-flex justify-content-center justify-content-sm-start'}>
                    <a href={'/'} className={'logo d-inline-block py-2'}>
                        <img className={''} src={logo} alt={'Pickle Mall'}/>
                    </a>
                </Grid>
                <Grid xs={12} sm={3} className={'text-center text-sm-start'}>
                    <small>
                        © Copyright Pickle Mall 2023.
                    </small>
                </Grid>
                <Grid xs={12} md={9} className={'d-flex flex-column flex-sm-row'}>
                    <a href={'/'} className={'small link-normal text-center text-sm-start'}>
                        <small>
                            Privacy Policy
                        </small>
                    </a>
                    <span className={'d-none d-sm-inline'}>&emsp;|&emsp;</span>
                    <a href={'/'} className={'small link-normal text-center text-sm-start'}>
                        <small>
                            Terms of Service
                        </small>
                    </a>
                    <span className={'d-none d-sm-inline'}>&emsp;|&emsp;</span>
                    <a href={'/'} className={'small link-normal text-center text-sm-start'}>
                        <small>
                            Do Not Sell My Information
                        </small>
                    </a>
                </Grid>
            </Grid>
        </div>
    </footer>
}