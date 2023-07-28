import React from 'react'
import {Link} from 'react-router-dom'
import {Button, Card, CardMedia} from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

import './Membership.scss'

import card_top_1 from './card_top_1.svg'
import card_top_2 from './card_top_2.svg'
import masonry from './masonry.png'

export default function Membership() {

    return (
        <div className={'membership-page'}>


            {/* header */}
            <div className={"container mb-md-5"}>
                <div className={"text-center mt-md-4 mb-md-3 pt-3 pb-2 pt-md-5 pb-md-3"}>
                    <h1 className={"font-barlow-condensed text-deep-blue fs-32px fs-md-40px my-0"}>
                        Membership
                    </h1>
                    <svg className={"d-none d-md-inline-block"} xmlns="http://www.w3.org/2000/svg" width="272"
                         height="4" viewBox="0 0 272 4" fill="none">
                        <path d="M0 2H272" stroke="#49C13D" strokeWidth="4"/>
                    </svg>
                    <svg className={"d-inline-block d-md-none"} xmlns="http://www.w3.org/2000/svg" width="189"
                         height="4" viewBox="0 0 189 4" fill="none">
                        <path d="M0 2H189" stroke="#49C13D" strokeWidth="3"/>
                    </svg>
                </div>
            </div>

            <div className={"section-1 container pb-5"}>
                <Grid container spacing={7} className={"pb-4 pb-md-5"}>
                    <Grid item xs={12} md={6}>
                        <div className={"card h-100"}>
                            <img className={"w-100 h-auto"} src={card_top_1} alt={"header"}/>
                            <div className={"p-5"}>
                                <span className={"text-volley-blue font-barlow-condensed fs-20px fw-600"}>
                                    $129.99 / MONTH
                                </span>
                                <h1 className={"text-deep-blue font-barlow-condensed fs-40px fw-600 my-2"}>
                                    The Mall Rat
                                </h1>
                                <ul className={"fs-16px fw-400 lh-28px mb-4"}>
                                    <li>Waived initiation fee</li>
                                    <li>50 free replay credits</li>
                                    <li>14 day advance sign-up window</li>
                                    <li>Discounts on Joola apparel</li>
                                    <li>Discounts on Picklemall apparel</li>
                                </ul>
                                <Link to={"mailto:memberships@thepicklemall.com"}
                                      className={"no-decoration"}>
                                    <Button variant={"contained"}
                                            color={"deepBlue"}
                                            className={"rounded-5 text-nowrap"}
                                            disableElevation>
                                        Sign Up
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className={"card h-100"}>
                            <img className={"w-100 h-auto"} src={card_top_2} alt={"header"}/>
                            <div className={"p-5"}>
                                <span className={"text-volley-blue font-barlow-condensed fs-20px fw-600"}>
                                    $8-$10 / PERSON / HOUR
                                </span>
                                <h1 className={"text-deep-blue font-barlow-condensed fs-40px fw-600 my-2"}>
                                    Drop-In
                                </h1>
                                <ul className={"fs-16px fw-400 lh-28px mb-4"}>
                                    <li>$8 off peak</li>
                                    <li>First 5 replays are free, $0.50 replays after</li>
                                    <li>$15 full game footage</li>
                                    <li>3-day advance sign-up</li>
                                </ul>
                                <Link to={"mailto:memberships@thepicklemall.com"}
                                      className={"no-decoration"}>
                                    <Button variant={"contained"}
                                            color={"deepBlue"}
                                            className={"rounded-5 text-nowrap"}
                                            disableElevation>
                                        Sign Up
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>

            <div className={"section-2 bg-light-blue"}>
                <div className={"container py-5"}>
                    <h5 className={"text-deep-blue font-barlow-condensed fs-32px fw-700 my-0 my-md-4"}>
                        Join The Crew
                    </h5>
                    <p className={"col-md-9 mb-3"}>
                        Looking to elevate your pickleball experience? Join the Picklemall Crew today and enjoy
                        exclusive perks and benefits with our two membership options! Don't miss out on the opportunity
                        to be a part of our vibrant community and take your pickleball game to new heights.
                    </p>
                    <img className={"py-5 d-none d-md-block w-100 h-auto"} src={masonry} alt={"Picklemall courts"}/>
                </div>
            </div>


        </div>
    )
}