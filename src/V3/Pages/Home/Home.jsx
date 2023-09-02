import React, {useState, useRef} from "react"
import Button from "../../Components/Button/Button";
import Common from "../../../Common";
import {Link} from "react-router-dom";
import MembershipOptions from '../../Sections/Membership/MembershipOptions';

import './Home.scss'

export default function Home() {
    return <div className={'home'}>
        <div className={"section-1 my-0"}>
            <div className={"d-flex justify-content-center align-items-start h-100 text-center"}>
                <div>
                    <h1 className={"text-bright-white font-barlow-condensed fs-80px fs-md-150px lh-88px lh-md-148px fw-700"}>
                        THE <br className={"d-md-none"}/><span
                        className={"text-rally-blue"}>FUTURE</span> OF<br/> PICKLEBALL
                    </h1>
                    <div className={"d-flex justify-content-center flex-column flex-md-row gap-4 gap-md-5"}>
                        <Link to={Common.BookingLink} className={"no-decoration"}>
                            <Button color={"rallyBlue"}>
                                Reserve a Court
                            </Button>
                        </Link>
                        <Link to={Common.BookingLink} className={"no-decoration"}>
                            <Button color={"rallyBlue"}>
                                Join Open Play
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <div className={"section-2 container py-4 px-md-5"}>
            <p className={"fs-14px fs-md-35px"}>Discover the future of pickleball at Picklemall. Where innovation, community, and premium facilities come
                together. At Picklemall, we are revolutionizing the way you book, play, and interact with others who
                share your passion for the game.
            </p>
            <p className={"text-volley-blue font-barlow-condensed fs-20px fs-md-30px fw-600"}>
                RESERVE. ARRIVE. PLAY. SHARE.
            </p>
        </div>
        <MembershipOptions isHome></MembershipOptions>
    </div>
}