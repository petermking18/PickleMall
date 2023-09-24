import React from "react"
import Common from '../../../Common';
import Grid from "@mui/material/Unstable_Grid2"
import Button from "../../Components/Button/Button"
import {Button as MuiButton} from '@mui/material'
import {Link} from "react-router-dom"

import PageHeader from "../../Components/PageHeader/PageHeader"

import "./CorporateEvents.scss"

export default function CorporateEvents() {
    return (
        <div className={"corporate-events"}>
            <PageHeader title={"PRIVATE EVENTS"}/>
            <br/><br/>
            <div className={"mt-md-5 bg-volley-blue py-5"}>
                <div className={"container px-md-5 vstack gap-5 pb-5"}>
                    <div
                        className={"d-flex justify-content-between align-items-center bg-bright-white container px-3 px-md-5 mb-5"}>
                        <p className={"fs-14px fs-md-30px text-volley-blue align-middle"}>
                            Private Events
                        </p>
                        <div className={"border-left-line ps-3 ps-md-4"}>
                        <span
                            className={"fs-20px fs-md-40px text-deep-blue font-barlow-condensed align-middle position-relative"}>
                            $75.00
                            {/*<span className={"fs-12px fs-md-16px text-nowrap plus-tax fw-600"}>&nbsp;+ Tax</span>*/}
                        </span>
                            &emsp;<span className={"fs-14px fs-md-25px text-volley-blue align-middle"}>/ per court per hour</span>
                        </div>
                    </div>
                    <h1 className={"font-barlow-condensed text-bright-white fs-20px fs-md-40px fw-600 text-center mb-5"}>
                        PACKAGE DETAILS
                    </h1>
                    <div className={"fs-14px fs-md-20px text-bright-white mb-2"}>
                        <Grid container rowSpacing={{xs: 3, md: 5}} columnSpacing={15}>
                            <Grid xs={12} md={6}>
                                <strong>Minimum Number:</strong><br/>
                                6 guests per court, 2 court minimum, and minimum of 2 hour booking
                                <br/><br/><br/>
                                <strong>Waived Initiation Fee:</strong><br/>
                                No upfront initiation cost to start enjoying Picklemall.
                                <br/><br/><br/>
                                <strong>Add-ons:</strong><br/>
                                Learn the basics of Pickleball with one of our coaches! Coaches will teach ground strokes, volleys, dinks and scoring for an hour ($100 for the hour).
                                <br/><br/><br/>
                                <strong>Deposit to hold:</strong><br/>
                                A 15% non-refundable deposit will hold your time up to 48hrs in advance. Within 48hrs you will be charged the remaining amount.
                            </Grid>
                            <Grid xs={12} md={6} gap={5}>
                                <strong>FREE Equipment Rentals:</strong><br/>
                                We will supply the paddles and balls, just bring your non-marking shoes.
                                <br/><br/><br/>
                                <strong>Unlimited Video Replays:</strong><br/>
                                Get as many video replays as you would like.
                                <br/><br/><br/>
                                <strong>Food and Beverage:</strong><br/>
                                Catering is available from our select partners: Firehouse Subs, Garcia's, Charley's Cheesesteaks, Paradise Splash, Fired Pie.
                                <br/><br/>
                                For Reservations over 36 people: Free choice of bottled beverage to have on-site for event.
                                <br/><br/><br/>
                                <strong>Private Facility:</strong><br/>
                                Rent out the entire Picklemall for $1,500 per hour, comes with equipment and one of our coaches to help teach! ($100 value)
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
            <div className={"py-5 container px-md-5"}>
                <div
                    className={"bg-light-gray border border-dark d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center px-4 px-md-5 py-4 mb-3"}>
                    <div className={"w-md-50 me-4 me-md-0"}>
                        <h1 className={"font-barlow-condensed fs-22px fs-md-32px my-0"}>
                            Need some help?
                        </h1>
                        <p className={"fs-14px mt-md-1 mb-0"}>
                            Not sure which membership is best for you? Get in contact with a Picklemall<br/> staff member and
                            they can walk you through the process!
                        </p>
                    </div>
                    <Link to={"mailto:info@thepicklemall.com"} className={"no-decoration mt-4 mt-md-0"}>
                        <Button color={"rallyBlue"}>
                            Contact Us
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}