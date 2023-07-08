import React, {useState, useRef} from "react"
import {Link} from "react-router-dom"
import {Button, useMediaQuery} from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import {useTheme} from "@mui/material"

import "./About.scss"
import Common from '../../Common'

import section_1_img from './section_1_img.png'

export default function About() {
    const theme = useTheme()
    let isLarge = useMediaQuery(theme.breakpoints.up('md'))

    return (
        <div className={"about"}>

            {/* header */}
            <div className={"container mb-md-5"}>
                <div className={"text-center mt-md-4 mb-md-3 pt-3 pb-2 pt-md-5 pb-md-3"}>
                    <h1 className={"font-barlow-condensed text-deep-blue fs-32px fs-md-40px my-0"}>
                        The Picklemall Story
                    </h1>
                    <svg className={"d-none d-md-inline-block"} xmlns="http://www.w3.org/2000/svg" width="356"
                         height="4" viewBox="0 0 356 4" fill="none">
                        <path d="M0 2H356" stroke="#49C13D" strokeWidth="4"/>
                    </svg>
                    <svg className={"d-inline-block d-md-none"} xmlns="http://www.w3.org/2000/svg" width="284"
                         height="4" viewBox="0 0 284 4" fill="none">
                        <path d="M0 2H284" stroke="#49C13D" strokeWidth="3"/>
                    </svg>
                </div>
            </div>

            {/* section 1 */}
            <div className={"section-1 mt-md-5 mb-md-5" + (isLarge ? " container" : "")}>
                <Grid container spacing={isLarge ? 5 : 0}>
                    <Grid xs={12} md={6} className={"d-flex justify-content-center"}>
                        <img src={section_1_img} alt={"Pickleball player"}/>
                    </Grid>
                    <Grid xs={12} md={6} className={"d-flex justify-content-start align-items-center"}>
                        <div className={isLarge ? "" : "container"}>
                            <h1 className={"font-barlow-condensed text-deep-blue fs-22px fs-md-32px"}>
                                Welcome to Picklemall
                            </h1>
                            <p className={"fs-16px mb-3 mb-md-4"}>
                                Picklemall combines the adaptive reuse of mall spaces, cutting-edge technology, and a
                                genuine passion for the game. With the introduction of our first U.S. location at
                                Arizona Mills in Tempe, Arizona, we are on a mission to establish 50 Picklemall
                                locations across the country within the next 24 months.
                            </p>
                        </div>
                    </Grid>
                </Grid>
            </div>

            {/* section 2 */}
            <div className={"section-2 text-center py-5"}>
                <h2 className={"font-barlow-condensed fw-600 text-rally-blue fs-20px mt-5 mt-md-0 mb-4"}>
                    OUR MISSION
                </h2>
                <div className={"container text-center"}>
                    <p className={"text-bright-white" + (isLarge ? " w-75 mx-auto" : " mb-5 pb-3")}>
                        Our focus is not only on meeting the increasing demand for pickleball, but doing so in a way that is
                        pushing the envelope of technological innovation in the digital age. We are committed to providing a
                        seamless process for players of any skill level to book, compete, improve, and repeat through the
                        integration of court cameras, simple booking processes, and premium facilities.
                        <br/>
                        <br/>
                        Our commitment goes beyond providing a location to play, but leading the charge in the growth of a
                        sport that has the ability to bring people together.
                    </p>
                </div>
            </div>

        </div>
    )
}