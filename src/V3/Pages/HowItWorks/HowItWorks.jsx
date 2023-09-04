import React, {useState} from 'react';
import {Link} from "react-router-dom";

import Grid from "@mui/material/Unstable_Grid2";

import PageHeader from "../../Components/PageHeader/PageHeader";
import Button from "../../Components/Button/Button";

import Common from "../../../Common";

import step_1 from "./step_1.png";
import step_2 from "./step_2.png";
import step_3 from "./step_3.png";
import step_4 from "./step_4.png";

import './HowItWorks.scss';

export default function HowItWorks() {

    return (
        <div className={"how-it-works"}>
            <PageHeader title={"HOW IT WORKS"}/>
            <div className={"container pt-4 pb-5 py-md-5 mb-2 mb-md-5"}>
                <h1 className={"font-barlow-condensed fs-24px fs-md-50px fw-600 text-center hy-5 py-2 py-md-0 hy-md-3"}>
                    THE <span className={"text-volley-blue"}>FUTURE</span> OF PICKLEBALL
                </h1>
                <p className={"fs-14px fs-md-28px"}>
                    At Picklemall, we don’t believe innovation should end at booking courts. We want to continue to be
                    on the cutting edge of technology when it comes to providing the best player experience possible.
                    <br/>
                    <br/>
                    Use the Picklemall app to book a court, scan into a facility, and our court cameras will allow you
                    to capture your gameplay footage in real-time, track your performance, helping to improve your
                    skills, and offering valuable insights and learning opportunities.
                </p>
                <div className={"text-center pt-4 d-md-none"}>
                    <Link to={Common.BookingLink} className={"no-decoration"}>
                        <Button color={"rallyBlue"}>
                            Book a Court
                        </Button>
                    </Link>
                </div>
                <div className={"border-top border-volley-blue my-5"}></div>

                <h1 className={"font-barlow-condensed fs-24px fs-md-50px fw-600 text-center my-5"}>
                    4 EASY STEPS
                </h1>
                <Grid container spacing={{xs: 3, md: 6}} className={"mb-md-5"}>
                    <Grid xs={12} md={6} className={"d-flex justify-content-end"}>
                        <img className={"grid-item"} alt={"Step 1"} src={step_1}/>
                    </Grid>
                    <Grid xs={12} md={6} className={"d-flex justify-content-start"}>
                        <img className={"grid-item"} alt={"Step 2"} src={step_2}/>
                    </Grid>
                    <Grid xs={12} md={6} className={"d-flex justify-content-end"}>
                        <img className={"grid-item"} alt={"Step 3"} src={step_3}/>
                    </Grid>
                    <Grid xs={12} md={6} className={"d-flex justify-content-start"}>
                        <img className={"grid-item"} alt={"Step 4"} src={step_4}/>
                    </Grid>
                </Grid>

                <Link target={"_blank"} to={Common.AppStoreLink} className={"no-decoration"}>
                    <div
                        className={"bg-rally-blue border border-dark mt-5 px-3 px-md-5 d-flex justify-content-between align-items-center"}>
                        <h5 className={"font-barlow-condensed fs-16px fs-md-24px fw-500 my-3"}>
                            Get Started with the Picklemall App Now!
                        </h5>
                        <span className={"font-barlow-condensed fs-16px fs-md-24px fw-500 bi-arrow-right my-3"}></span>
                    </div>
                </Link>
            </div>
        </div>
    )
}