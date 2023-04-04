import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'

import logo from '../../Assets/logo.svg'
import './Footer.scss'

export default function Footer() {
    return <footer className={'bg-deep-blue py-3'}>
        <div className={'container'}>
            <div className={'logo-row'}>
                <img src={logo} alt={'Pickle Mall'}/>
            </div>
            <Grid container spacing={3} className={'mt-2 mb-1'}>
                <Grid xs={12} md={3}>
                    <small className={'text-light'}>
                        © Copyright Pickle Mall 2023.
                    </small>
                </Grid>
            </Grid>
        </div>
    </footer>
}