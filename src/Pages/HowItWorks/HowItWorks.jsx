import React, {useState, useRef} from "react"
import {Link} from "react-router-dom"
import {Button, useMediaQuery} from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import {useTheme} from "@mui/material"

import "./HowItWorks.scss"
import Common from '../../Common'

import section_1_bg from './section_1_bg.png'

import grid_bg_dark from './grid_bg_dark.png'
import grid_bg_light from './grid_bg_light.png'

export default function HowItWorks() {
    const theme = useTheme()
    let gridSpacing = useMediaQuery(theme.breakpoints.up('md')) ? 5 : 2

    return (
        <div className={"how-it-works"}>

            {/* header */}
            <div className={"container mb-md-5"}>
                <div className={"text-center mt-md-4 mb-md-3 pt-3 pb-2 pt-md-5 pb-md-3"}>
                    <h1 className={"font-barlow-condensed text-deep-blue fs-32px fx-md-40px my-0"}>
                        How It Works
                    </h1>
                    <svg className={"d-none d-md-inline-block"} xmlns="http://www.w3.org/2000/svg" width="272"
                         height="4" viewBox="0 0 272 4" fill="none">
                        <path d="M0 2H272" stroke="#49C13D" stroke-width="4"/>
                    </svg>
                    <svg className={"d-inline-block d-md-none"} xmlns="http://www.w3.org/2000/svg" width="189"
                         height="4" viewBox="0 0 189 4" fill="none">
                        <path d="M0 2H189" stroke="#49C13D" stroke-width="3"/>
                    </svg>
                </div>

            </div>

            {/* section-1: the future of pickleball */}
            <div className={"section-1 position-relative pb-md-5 mb-md-5"}>
                <div className={"container overflow-x-md-visible mb-4 mb-md-0"}>
                    <Grid container spacing={3}>
                        <Grid sm={12} md={4}>
                            <h1 className={"font-barlow-condensed text-deep-blue fs-22px fs-md-40px"}>
                                The Future of Pickleball
                            </h1>
                            <p className={"fs-16px mb-3 mb-md-4"}>
                                At Picklemall, we don’t believe innovation should end at booking courts. We want to
                                continue to be on the cutting edge of technology when it comes to providing the best
                                player experience possible.
                                <br/>
                                <br/>
                                Use the Picklemall app to book a court, scan into a
                                facility, and our court cameras will allow you to capture your gameplay footage in
                                real-time, track your performance, helping to improve your skills, and offering valuable
                                insights and learning opportunities.
                            </p>
                            <Link to={Common.bookLink} className={'no-decoration'}>
                                <Button variant={"contained"}
                                        color={"deepBlue"}
                                        className={"text-nowrap"}
                                        disableElevation>
                                    Book a Court
                                </Button>
                            </Link>
                        </Grid>
                        <Grid sm={12} md={8} className={"px-0 px-md-2"}>
                            <img className={"section-1-bg"} alt={"Picklemall courts"} src={section_1_bg}/>
                        </Grid>
                    </Grid>
                </div>
            </div>

            {/* section-2: 4 easy steps */}
            <div className={"section-2 container my-5"}>
                <h1 className={"font-barlow-condensed text-deep-blue fs-22px fs-md-32px"}>
                    4 Easy Steps
                </h1>
                <Grid container spacing={gridSpacing} className={"mx-md-3"}>
                    <Grid xs={12} md={6} className={"grid-item"}>
                        <div className={"grid-bg-dark h-100 w-100"}>
                            <div className={"mx-md-4 my-md-2 px-5 py-4"}>
                                <h2 className={"font-barlow-condensed fw-600 text-rally-blue fs-20px mt-md-1"}>
                                    STEP 1
                                </h2>
                                <h2 className={"font-barlow-condensed fw-700 text-bright-white fs-24px"}>
                                    Reserve
                                </h2>
                                <p className={"text-bright-white fs-14px"}>
                                    Use our mobile app or site to create an account. Easily pick a location, time slot,
                                    book your court, and get ready for your Picklemall experience
                                </p>
                            </div>
                        </div>
                    </Grid>
                    <Grid xs={12} md={6} className={"grid-item"}>
                        <div className={"grid-bg-light h-100 w-100"}>
                            <div className={"mx-md-4 my-md-2 px-5 py-4"}>
                                <h2 className={"font-barlow-condensed fw-600 text-rally-blue fs-20px mt-md-1"}>
                                    STEP 2
                                </h2>
                                <h2 className={"font-barlow-condensed fw-700 text-bright-white fs-24px"}>
                                    Arrive
                                </h2>
                                <p className={"text-bright-white fs-14px"}>
                                    Arrive at the facility, and check your app to find your court number.
                                </p>
                            </div>
                        </div>
                    </Grid>
                    <Grid xs={12} md={6} className={"grid-item"}>
                        <div className={"grid-bg-dark grid-bg-md-light h-100 w-100"}>
                            <div className={"mx-md-4 my-md-2 px-5 py-4"}>
                                <h2 className={"font-barlow-condensed fw-600 text-rally-blue fs-20px mt-md-1"}>
                                    STEP 3
                                </h2>
                                <h2 className={"font-barlow-condensed fw-700 text-bright-white fs-24px"}>
                                    Play
                                </h2>
                                <p className={"text-bright-white fs-14px"}>
                                    Enjoy your game! Take advantage of our state of the art facilities at Picklemall.
                                    With climate controlled championship-style courts, you can play in optimal
                                    conditions year-round.
                                </p>
                            </div>
                        </div>
                    </Grid>
                    <Grid xs={12} md={6} className={"grid-item"}>
                        <div className={"grid-bg-light grid-bg-md-dark h-100 w-100"}>
                            <div className={"mx-md-4 my-md-2 px-5 py-4"}>
                                <h2 className={"font-barlow-condensed fw-600 text-rally-blue fs-20px mt-md-2"}>
                                    STEP 4
                                </h2>
                                <h2 className={"font-barlow-condensed fw-700 text-bright-white fs-24px"}>
                                    Share
                                </h2>
                                <p className={"text-bright-white fs-14px"}>
                                    Use your app to track your performance, replay your game footage to share with
                                    your
                                    friends, and improve your skills.
                                </p>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}