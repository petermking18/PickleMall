import React from 'react';
import Common from '../../../Common';
import Grid from "@mui/material/Unstable_Grid2"
import Button from "../../Components/Button/Button"
import {Button as MuiButton} from '@mui/material'
import {Link} from "react-router-dom"

import "./MembershipOptions.scss"

export default function MembershipOptions({isHome}) {

    return (
        <div className={"membership-options bg-deep-blue py-4"}>
            <div className={"container px-md-5 vstack gap-5 pb-5"}>
                <h1 className={"font-barlow-condensed text-bright-white fs-24px fs-md-50px fw-600 text-center"}>
                    PICKLEMALL MEMBERSHIP
                </h1>
                <div
                    className={"d-flex justify-content-between align-items-center bg-bright-white container px-3 px-md-5 mb-5"}>
                    <p className={"fs-14px fs-md-30px text-deep-blue align-middle"}>
                        The Mall Rat
                    </p>
                    <div className={"border-left-line ps-3 ps-md-4"}>
                        <span
                            className={"fs-20px fs-md-40px text-volley-blue font-barlow-condensed align-middle position-relative"}>
                            $99.99
                            <span className={"fs-12px fs-md-16px text-nowrap plus-tax fw-600"}>&nbsp;+ Tax</span>
                        </span>
                        &emsp;<span className={"fs-14px fs-md-25px text-deep-blue align-middle"}>/ per person</span>
                    </div>
                </div>
                <h1 className={"font-barlow-condensed text-bright-white fs-20px fs-md-40px fw-600 text-center mb-5"}>
                    MEMBERSHIP BENEFITS
                </h1>
                <div className={"fs-14px fs-md-20px text-bright-white mb-5"}>
                    <Grid container rowSpacing={{xs: 3, md: 5}} columnSpacing={15}>
                        <Grid xs={12} md={6}>
                            <strong>Waived Court Fees:</strong><br/>
                            Play without worrying about the cost! Your membership covers all member court fees.
                        </Grid>
                        <Grid xs={12} md={6} gap={5}>
                            <strong>50 Free Video Replay Credits:</strong><br/>
                            Get 50 free video replays per month at no extra cost. Additional video replays are charged
                            at 50 cents each.
                        </Grid>
                        <Grid xs={12} md={6} gap={5}>
                            <strong>No Initiation Fee:</strong><br/>
                            No upfront initiation cost to start enjoying Picklemall.
                        </Grid>
                        <Grid xs={12} md={6} gap={5}>
                            <strong>Discounts on Picklemall Apparel:</strong><br/>
                            Look great while playing with exclusive discounts on your stylish Picklemall clothing line.
                        </Grid>
                        <Grid xs={12} md={6} gap={5}>
                            <strong>14-Day Advance Sign-Up Window:</strong><br/>
                            Exclusive access to booking courts two weeks in advance.
                        </Grid>
                        <Grid xs={12} md={6} gap={5}>
                            <strong>Discounts on Events:</strong><br/>
                            Mall Rat members receive exclusive discounts on Leagues and Tournaments at Picklemall.
                        </Grid>
                    </Grid>
                </div>
                <div className={"d-flex flex-column align-items-center gap-3"}>
                    <Link to={Common.MallRatSignupLink}
                          className={"no-decoration"}>
                        <Button color={"rallyBlue"}>
                            Sign Up {isHome && 'Now'}
                        </Button>
                    </Link>
                    {!isHome &&
                        <MuiButton variant={"text"} color={"rallyBlue"} className={""}>
                            MEMBERSHIP TERMS OF AGREEMENT
                        </MuiButton>
                    }
                </div>
                <hr className={"border-volley-blue mt-5 mb-5"}/>
                <div
                    className={"d-flex justify-content-between align-items-center bg-bright-white container px-3 px-md-5 my-5"}>
                    <p className={"fs-14px fs-md-30px text-deep-blue align-middle"}>
                        Drop-In Fees
                    </p>
                    <div className={"border-left-line ps-3 ps-md-4"}>
                        <span
                            className={"fs-20px fs-md-40px text-volley-blue font-barlow-condensed align-middle position-relative"}>
                            $8-12
                        </span>
                        &emsp;<span className={"fs-14px fs-md-25px text-deep-blue align-middle"}>/ per person</span>
                    </div>
                </div>
                <h1 className={"font-barlow-condensed text-bright-white fs-20px fs-md-40px fw-600 text-center mb-5"}>
                    MEMBERSHIP BENEFITS
                </h1>
                <div className={"fs-14px fs-md-20px text-bright-white mb-5"}>
                    <Grid container rowSpacing={{xs: 3, md: 5}} columnSpacing={15}>
                        <Grid xs={12} md={6}>
                            <strong>Court Reservations:</strong><br/>
                            Court Reservations range from $8-$12 per person per hour
                        </Grid>
                        <Grid xs={12} md={6} gap={5}>
                            <strong>Open Play:</strong><br/>
                            Open Play fees are $10 per Open Play Session
                        </Grid>
                        <Grid xs={12} md={6} gap={5}>
                            <strong>Video Replays:</strong><br/>
                            First time players receive 5 FREE video replays on their account.
                        </Grid>
                        <Grid xs={12} md={6} gap={5}>
                            <strong>Sign Up Window:</strong><br/>
                            72 Hour sign up window for events and reservations.
                        </Grid>
                    </Grid>
                </div>
                <div className={"d-flex flex-column align-items-center gap-3"}>
                    {!isHome &&
                        <Link to={Common.BookingLink}
                              className={"no-decoration"}>
                            <Button color={"rallyBlue"}>
                                Explore Availability
                            </Button>
                        </Link>
                    }
                </div>
            </div>
        </div>
    )
}