import React, {useState, useRef} from "react"
import {Link} from "react-router-dom"
import {Button, useMediaQuery} from "@mui/material"
import {useTheme} from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"

import "./HowItWorks.scss"
import Common from '../../Common'

import section_1_bg from './section_1_bg.png'

import app_download_icon from './app_download_icon.png'

export default function HowItWorks() {
    const theme = useTheme()
    let gridSpacing = useMediaQuery(theme.breakpoints.up('md')) ? 5 : 2

    return (
        <div className={"how-it-works"}>

            {/* header */}
            <div className={"container mb-md-5"}>
                <div className={"text-center mt-md-4 mb-md-3 pt-3 pb-2 pt-md-5 pb-md-3"}>
                    <h1 className={"font-barlow-condensed text-deep-blue fs-32px fs-md-40px my-0"}>
                        How It Works
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

            {/* section-1: the future of pickleball */}
            <div className={"section-1 position-relative pb-md-3 mb-md-3"}>
                <div className={"container overflow-x-md-visible mb-4 mb-md-0"}>
                    <Grid container spacing={3}>
                        <Grid sm={12} md={4} className={"d-flex justify-content-center align-items-center"}>
                            <div className={"my-md-4"}>
                                <h1 className={"font-barlow-condensed text-deep-blue fs-22px fs-md-40px mt-md-0"}>
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
                                    real-time, track your performance, helping to improve your skills, and offering
                                    valuable
                                    insights and learning opportunities.
                                </p>
                                {Common.BookingLink &&
                                    <Link to={Common.BookingLink} className={'no-decoration'}>
                                        <Button variant={"contained"}
                                                color={"deepBlue"}
                                                className={"text-nowrap"}
                                                disableElevation>
                                            Book a Court
                                        </Button>
                                    </Link>
                                }
                            </div>
                        </Grid>
                        <Grid sm={12} md={8} className={"px-0 px-md-4 image-wrapper"}>
                            <img className={"d-block d-md-none section-1-bg"} alt={"Picklemall courts"}
                                 src={section_1_bg}/>
                        </Grid>
                    </Grid>
                </div>
            </div>

            {/* section-2: 4 easy steps */}
            <div className={"section-2 container my-5"}>
                <h1 className={"font-barlow-condensed text-deep-blue fs-22px fs-md-32px mb-4"}>
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

            {/* app button */}
            {Common.AppStoreLink &&
                <div className={"section-app-button container mb-5 pb-md-3"}>
                    <Link to={Common.AppStoreLink}
                          className={"outer-link no-decoration w-md-75 mx-auto d-flex justify-content-center align-items-center"}>
                        <div
                            className={"app-button w-100 bg-light-blue d-flex justify-content-between align-items-center px-4 py-0"}>
                            <div className={"d-flex justify-content-start align-items-center me-5"}>
                                <img src={app_download_icon} alt={"Download"} style={{height: '34px', width: '34px'}}
                                     className={"me-3"}/>
                                <p className={"font-barlow-condensed text-deep-blue fs-18px fs-md-24px fw-500"}>
                                    Get Started with the Picklemall App Now!
                                </p>
                            </div>
                            <svg className={"ms-5"} xmlns="http://www.w3.org/2000/svg" width="19" height="9"
                                 viewBox="0 0 19 9" fill="none">
                                <path
                                    d="M16.125 5.24375H0.75C0.533333 5.24375 0.354167 5.17292 0.2125 5.03125C0.0708334 4.88958 0 4.71042 0 4.49375C0 4.27708 0.0708334 4.09792 0.2125 3.95625C0.354167 3.81458 0.533333 3.74375 0.75 3.74375H16.15L14 1.59375C13.8667 1.46042 13.8 1.29375 13.8 1.09375C13.8 0.89375 13.875 0.71875 14.025 0.56875C14.175 0.41875 14.35 0.34375 14.55 0.34375C14.75 0.34375 14.925 0.41875 15.075 0.56875L18.475 3.96875C18.5583 4.05208 18.6167 4.13542 18.65 4.21875C18.6833 4.30208 18.7 4.39375 18.7 4.49375C18.7 4.59375 18.6833 4.68542 18.65 4.76875C18.6167 4.85208 18.5583 4.93542 18.475 5.01875L15.075 8.41875C14.9083 8.58542 14.7292 8.66458 14.5375 8.65625C14.3458 8.64792 14.175 8.56875 14.025 8.41875C13.875 8.26875 13.8 8.08958 13.8 7.88125C13.8 7.67292 13.8667 7.50208 14 7.36875L16.125 5.24375Z"
                                    fill="#367236"/>
                            </svg>
                        </div>
                    </Link>
                </div>
            }

        </div>
    )
}