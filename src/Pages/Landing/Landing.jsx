import React from 'react'
import Nav from '../../Components/Nav/Nav'
import Card from '../../Components/Card/Card'
import ErrorOutline from '@material-ui/icons/ErrorOutline'
import { Button } from '@material-ui/core'
import { useTheme } from '@material-ui/core'

import './Landing.scss'
import background from './background.svg'

export default function Landing() {
    const theme = useTheme()

    return <div className='page'>
        <Nav />
        <div className='below-nav bg-off-white-2'>
            <div className='background'>
                <img src={background} />
            </div>
            <div className='content'>
                <div className='main-card-wrapper'>
                    <Card className="card">
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
                                <Button variant='contained' color='kitchenGreen'
                                    disableElevation>
                                    Stay in The Loop
                                </Button>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>

    </div>
}