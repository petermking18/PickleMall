import React, { useState } from 'react'
import Nav2 from '../../Components/Nav2/Nav2'
import Card from '../../Components/Card/Card'
import Footer from "../../Components/Footer/Footer"
import { ErrorOutline, CheckCircleOutline } from '@mui/icons-material'
import { Button, CircularProgress, TextField, Select, FormControl, InputLabel, MenuItem } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

import './Home.scss'

import racketsPhoto from './Rackets.png'

export default function Home() {

    return <div className='home bg-off-white-2'>
        <Nav2 />
        <div className='section-1 my-0'>
            <div className='content pt-5'>
                <div className='container py-5'>
                    <h1 className='welcome w-50 mb-4'>Welcome to the future of Pickleball!</h1>
                    <Button className='book-button text-deep-blue mb-4' color='rallyBlue' variant='contained' size='large' disableElevation>Book a Court</Button>
                </div>
            </div>
        </div>
    </div>
}