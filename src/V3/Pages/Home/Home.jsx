import React, {useState, useRef} from "react"
import Button from "../../Components/Button/Button";
import Common from "../../../Common";
import {Link} from "react-router-dom";

import './Home.scss'

export default function Home() {
    return <div className={'home'}>
        <div className={"section-1 my-0"}>
            <div className={"d-flex justify-content-center align-items-start h-100 text-center"}>
                <div>
                    <h1 className={"text-bright-white font-barlow-condensed fs-80px fs-md-150px lh-88px lh-md-148px fw-700"}>
                        THE <br className={"d-md-none"}/><span className={"text-rally-blue"}>FUTURE</span> OF<br/> PICKLEBALL
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
    </div>
}