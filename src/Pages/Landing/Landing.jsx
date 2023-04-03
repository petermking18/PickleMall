import React, { useState } from 'react'
import Nav from '../../Components/Nav/Nav'
import Card from '../../Components/Card/Card'
import ErrorOutline from '@mui/icons-material/ErrorOutline'
import { Button, useTheme, TextField, Select, FormControl, InputLabel, MenuItem } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

import validator from 'validator'

import States from '../../Helpers/US-States'

import './Landing.scss'
import background from './background.svg'

export default function Landing() {

    const [showForm, setShowForm] = useState(false)

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const [email, setEmail] = useState('')
    const [emailValid, setEmailValid] = useState(null)

    const validateEmail = e => {
        const email = e.target.value
        setEmail(email)
        setEmailValid(validator.isEmail(email))
    }

    const [city, setCity] = useState('')
    const [state, setState] = useState('')

    const submitForm = () => {

    }

    return <div className='page'>
        <Nav />
        <div className='below-nav bg-off-white-2'>
            <div className='background'>
                <img src={background} />
            </div>
            <div className='content'>
                <div className='main-card-wrapper'>
                    <Card className="card">
                        {!showForm ?
                            <div className='p-3 p-md-5'>
                                <div className='d-flex justify-content-center'>
                                    <div className='exclamation-circle bg-pickle-green'>
                                        <ErrorOutline />
                                    </div>
                                </div>
                                <h1 className='text-center font-barlow-condensed' style={{ fontSize: '36px' }}>
                                    Site Under Construction, Dill with It
                                </h1>
                                <p className='text-center'>
                                    Picklemall Coming soon to a city near you! Please leave your information for discounted rates and to stay tned in with any news.
                                </p>
                                <div className='d-flex justify-content-center pt-2'>
                                    <Button color='kitchenGreen' variant='contained'
                                        disableElevation onClick={() => setShowForm(true)}>
                                        Stay in The Loop
                                    </Button>
                                </div>
                            </div>
                            :
                            <div className='p-3 p-md-5'>
                                <h1 className='font-barlow-condensed my-0' style={{ fontSize: '36px' }}>
                                    Contact Information
                                </h1>
                                <small className='text-muted mt-0'>*Indicates required fields</small>
                                <form name='contactForm' className='mt-4'>
                                    <Grid container spacing={2}>
                                        <Grid sm={6}>
                                            <TextField id='inputFirstName' label='First Name' variant='outlined' color='pickleGreen' className='w-100'
                                                onChange={e => setFirstName(e.target.value)} />
                                        </Grid>
                                        <Grid sm={6}>
                                            <TextField id='inputLastname' label='Last Name' variant='outlined' color='pickleGreen' className='w-100'
                                                onChange={e => setLastName(e.target.value)} />
                                        </Grid>
                                        <Grid sm={12}>
                                            <TextField id='inputEmail' label='Email' variant='outlined' color='pickleGreen' className='w-100'
                                                error={emailValid === false} onChange={e => validateEmail(e)} />
                                        </Grid>
                                        <Grid sm={6}>
                                            <TextField id='inputCity' label='City' variant='outlined' color='pickleGreen' className='w-100'
                                                onChange={e => setCity(e.target.value)} />
                                        </Grid>
                                        <Grid sm={6}>
                                            <FormControl fullWidth>
                                                <InputLabel id='labelState' color='pickleGreen'>State</InputLabel>
                                                <Select labelId='labelState' id='inputState' label='State' value={state}
                                                    onChange={e => setState(e.target.value)} variant='outlined' color='pickleGreen' >
                                                    {States.map(s => <MenuItem color='pickleGreen' value={s}>{s}</MenuItem>)}
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                </form>
                                <div className='d-flex justify-content-center mt-4 pt-2'>
                                    <Button color='kitchenGreen' variant='contained' disableElevation onClick={submitForm}
                                        disabled={!(firstName && lastName && email && emailValid && city && state)} >
                                        Submit
                                    </Button>
                                </div>
                            </div>
                        }
                    </Card>
                </div>
            </div>
        </div>

    </div>
}