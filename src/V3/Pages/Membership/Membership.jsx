import React, {useState, useRef, useEffect} from "react"
import {Link} from 'react-router-dom'
import Grid from "@mui/material/Unstable_Grid2"

import PageHeader from "../../Components/PageHeader/PageHeader"
import MembershipOptions from "../../Sections/Membership/MembershipOptions"

import "./Membership.scss"

import Common from '../../../Common'
import Button from "../../Components/Button/Button";

const vh = percent => {
    let h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    return (percent * h) / 100;
}

const vw = percent => {
    let w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    return (percent * w) / 100;
}

export default function Membership() {

    const containerRef = useRef()
    const [containerWidth, setContainerWidth] = useState(vw(100));

    const updateContainerWidth = () => {
        if (containerRef.current) {
            setContainerWidth(containerRef.current.offsetWidth - parseFloat(getComputedStyle(containerRef.current).paddingLeft) - parseFloat(getComputedStyle(containerRef.current).paddingRight))
        }
    }

    useEffect(() => {
        updateContainerWidth()

        window.addEventListener('resize', updateContainerWidth)

        return () => {
            window.removeEventListener('resize', updateContainerWidth)
        }
    }, [])

    return (
        <div className={"membership"}>
            <PageHeader title={"MEMBERSHIP"}/>
            <div ref={containerRef} className={"container py-5 mb-md-5"}>
                <h1 className={"text-center font-barlow-condensed fs-24px fs-md-50px mb-4 mb-md-5"}>
                    JOIN OUR COMMUNITY
                </h1>
                <iframe className={"video"} width={containerWidth} height={containerWidth * (315 / 560)}
                        src="https://www.youtube-nocookie.com/embed/uJOewUSg860"
                        title="Membership video" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen>
                </iframe>
            </div>
            <MembershipOptions/>
            <div className={"container py-5 px-md-5 mb-md-5"}>
                <h1 className={"text-center font-barlow-condensed fs-24px fs-md-50px mb-4 mb-md-5"}>
                    RESERVATIONS
                </h1>
                <div className={"fs-14px fs-md-20px mb-5"}>
                    <Grid container rowSpacing={{xs: 3, md: 5}} columnSpacing={15}>
                        <Grid xs={12} md={6}>
                            <strong>Hours:</strong><br/>
                            Members can reserve up to 6 hours of court time on a rolling basis.
                        </Grid>
                        <Grid xs={12} md={6}>
                            <strong>Equipment:</strong><br/>
                            Please wear non marking shoes. We offer paddle and ball demos for those who do not own
                            equipment.
                        </Grid>
                        <Grid xs={12} md={6}>
                            <strong>Back-to-Back Bookings:</strong><br/>
                            We allow up to 3 hours of Back-to-Back bookings.
                        </Grid>
                    </Grid>
                </div>
                <hr className={"border-volley-blue mt-5 mb-5"}/>
                <h1 className={"text-center font-barlow-condensed fs-24px fs-md-50px mb-4 mb-md-5"}>
                    CANCELLATION POLICY
                </h1>
                <div className={"fs-14px fs-md-20px mb-5 pb-md-3"}>
                    <Grid container rowSpacing={{xs: 3, md: 5}} columnSpacing={15}>
                        <Grid xs={12} md={6}>
                            <strong>More than 48 hours before scheduled event:</strong><br/>
                            Cancellation is free.
                        </Grid>
                        <Grid xs={12} md={6}>
                            <strong>Within 48 hours of the scheduled event:</strong><br/>
                            A 25% cancellation fee applies.
                        </Grid>
                        <Grid xs={12} md={6}>
                            <strong>Within 24 hours of scheduled event:</strong><br/>
                            50% cancellation fee applies.
                        </Grid>
                        <Grid xs={12} md={6}>
                            <strong>Within 2 hours of scheduled event:</strong><br/>
                            A 75% cancellation fee applies.
                        </Grid>
                    </Grid>
                </div>
                <div
                    className={"bg-light-gray border border-dark d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center px-4 px-md-5 py-4 mb-3"}>
                    <div className={"w-md-50 me-4 me-md-0"}>
                        <h1 className={"font-barlow-condensed fs-22px fs-md-32px my-0"}>
                            Need some help?
                        </h1>
                        <p className={"fs-14px mt-md-1 mb-0"}>
                            Not sure which membership is best for you? Get in contact with a Picklemall staff member and
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