import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Nav2 from '../../Components/Nav2/Nav2'
import Card from '../../Components/Card/Card'
import Footer from "../../Components/Footer/Footer"
import { ArrowRightAlt } from '@mui/icons-material'
import { Button, Stack, CircularProgress, TextField, Select, FormControl, InputLabel, MenuItem } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

import './Home.scss'

import racketsPhoto from './Rackets.png'

export default function Home() {

    const section1QuickLinks = ([
        {
            route: '/About',
            text: 'About Picklemall'
        },
        {
            route: '/Shop',
            text: 'Shop Merchandise'
        },
        {
            route: '/Events',
            text: 'Upcoming Events'
        }
    ]).map((l, idx) => <div key={idx}>
        <Link className='quick-link d-flex justify-content-between' to={l.route}>
            <span className='fw-semibold'>{l.text}</span>
            {/* <span className='text-kitchen-green bi-arrow-right'></span> */}
            <ArrowRightAlt className='text-kitchen-green'/>
        </Link>
    </div>)

    return <div className='home'>
        <Nav2 />
        <div className='section-1 my-0'>
            <div className='content pt-5'>
                <div className='container py-5'>
                    <h1 className='welcome w-50 mb-4'>Welcome to the future of Pickleball!</h1>
                    <Button className='book-button text-deep-blue mb-4' color='rallyBlue' variant='contained' size='large' disableElevation>Book a Court</Button>
                </div>
            </div>
        </div>
        <div className='section-2'>
            <div className='container py-5'>
                <Grid container spacing={8}>
                    <Grid xs={12} md={8}>
                        <h1 className='d-flex flex-wrap font-barlow-condensed'>
                            <div className='text-nowrap'>Convenient courts<span className='text-pickle-green'>.</span>&nbsp;</div>
                            <div className='text-nowrap'>Controlled climate<span className='text-pickle-green'>.</span>&nbsp;</div>
                            <div className='text-nowrap'>Consistent competition<span className='text-pickle-green'>.</span>&nbsp;</div>
                        </h1>
                        <p>The Picklemall offers a one-of-a-kind playing experience,
                            featuring state-of-the-art courts, equipment, and amenities that cater to players' every need.
                            With a range of courts available, players can choose the ideal playing surface for their skill level and play style,
                            ensuring a challenging and exciting game every time.
                            <br />
                            <br />
                            Picklemall is committed to providing an inclusive and welcoming environment for players of all ages and backgrounds,
                            fostering a sense of community and camaraderie among players. Whether you're a seasoned pro or a newcomer to the sport,
                            you'll find everything you need to thrive at Picklemall, from top-notch coaching to a range of social events and tournaments.
                        </p>
                    </Grid>
                    <Grid xs={12} md={4}>
                        <div className='card'>
                            <img src={racketsPhoto} alt='Pickleball photo' />
                            <div className='content p-4'>
                                <h2 className='font-barlow-condensed my-0'>Quick Links</h2>
                                <hr className='hr-pickle-green mb-4' />
                                <Stack spacing={3}>
                                    {section1QuickLinks}
                                </Stack>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    </div>
}