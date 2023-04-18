import React, { useState } from 'react'
import Nav2 from '../../Components/Nav2/Nav2'
import Card from '../../Components/Card/Card'
import Footer from "../../Components/Footer/Footer"
import { ErrorOutline, CheckCircleOutline } from '@mui/icons-material'
import { Button, CircularProgress, TextField, Select, FormControl, InputLabel, MenuItem } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

import './Home.scss'

export default function Home() {

    return <div className='page bg-off-white-2'>
        <Nav2 />
    </div>
}