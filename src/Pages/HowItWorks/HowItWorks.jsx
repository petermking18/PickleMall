import React, {useState, useRef} from "react"
import {Link} from "react-router-dom"
import {Button, Stack, ButtonGroup} from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"

import "./HowItWorks.scss"
import Common from '../../Common'

import section_1_bg from './section_1_bg.png'

export default function HowItWorks() {

    return (
        <div className={"how-it-works"}>

            {/* header */}
            <div className={"container"}>
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
            <div className={"section-1 position-relative pb-5 mb-5"}>
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
                {/*<img className={"section-1-bg "} alt={"Picklemall courts"} src={section_1_bg}/>*/}
            </div>
        </div>
    )
}