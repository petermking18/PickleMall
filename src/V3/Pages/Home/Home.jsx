import React, {useState, useRef} from "react"
import Button from "../../Components/Button/Button";
import Common from "../../../Common";
import {Link} from "react-router-dom";
import MembershipOptions from '../../Sections/Membership/MembershipOptions';
import Slider from "react-slick";
import locations from "../../../Helpers/Locations";
import BlueRackets from "./deepblue_rackets.png";

import './Home.scss'
import {ButtonGroup} from "@mui/material";

export default function Home() {

    const [locationsIndex, setLocationsIndex] = useState(0);

    let locationsSlider = useRef(null);

    const locationsSliderSettings = {
        dots: false,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3.55,
        slidesToScroll: 3,
        beforeChange: (current, next) => setLocationsIndex(next),
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 3000,
                settings: {
                    slidesToShow: 4.55,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 4.55,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3.55,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2.5,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1.25,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 100,
                settings: {
                    slidesToShow: 1.25,
                    slidesToScroll: 1
                }
            }
        ],
    };

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
            <p className={"fs-14px fs-md-35px"}>Discover the future of pickleball at Picklemall. Where innovation,
                community, and premium facilities come
                together. At Picklemall, we are revolutionizing the way you book, play, and interact with others who
                share your passion for the game.
            </p>
            <p className={"text-volley-blue font-barlow-condensed fs-20px fs-md-30px fw-600"}>
                RESERVE. ARRIVE. PLAY. SHARE.
            </p>
        </div>
        <MembershipOptions isHome></MembershipOptions>
        <div className={"section-locations container px-md-5 py-5 mb-5"}>
            <h1 className={"font-barlow-condensed fs-24px fs-md-50px fw-600 text-center"}>
                LOCATIONS
            </h1>
            <div className={"slider-wrapper"}>
                <Slider
                    {...locationsSliderSettings}
                    ref={slider => (locationsSlider = slider)}
                >
                    {locations.map((l, idx) => (
                        <div key={idx} className={"card-wrapper"}>
                            <div className={"card"}>
                                <div className={"card-top-photo-wrapper"}>
                                    {(l.isOpen || l.numCourts) &&
                                        <span
                                            className={"badge fs-12px"}>{l.numCourts} {l.numCourts === 1 ? 'Court' : 'Courts'}</span>
                                    }
                                    {l.locationImg ?
                                        <img className={"card-top-photo"}
                                             src={l.locationImg}
                                             alt={"Courts"}/>
                                        :
                                        <div className={"card-top-photo d-flex justify-content-center align-items-center bg-deep-blue"}>
                                            <span className={"fs-30px font-barlow-condensed text-light-blue fw-600"}>COMING SOON...</span>
                                        </div>
                                    }
                                </div>
                                <div className={"content px-4 pb-3"}>
                                    <h1 className={"font-barlow-condensed text-black fs-30px fw-600 mb-0"}>
                                        {l.isOpen ? l.location : l.region}
                                    </h1>
                                    <div className={"fs-12px fw-500"}>
                                        {l.subtitle}
                                    </div>
                                    <div className={"pt-5 pb-3 mt-auto"}>
                                        <Link to={l.isOpen ? Common.BookingLink : "/contact"} className={"no-decoration"}>
                                            <Button color={"rallyBlue"}>
                                                {l.isOpen ? "Book a Court" : "Join the Waitlist"}
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className={"card-wrapper"}>
                        <div className={"card where-to bg-light-gray"}>
                            <div className={"card-top-photo-wrapper"}>
                                <img
                                    className={"card-top-photo"}
                                    src={BlueRackets}
                                    alt={"rackets"}
                                />
                            </div>
                            <div className={"content px-4 pb-3"}>
                                <h1
                                    className={
                                        "font-barlow-condensed text-black fs-30px fw-600 mb-0"
                                    }
                                >
                                    WHERE TO NEXT?
                                </h1>
                                <div className={"fs-12px fw-500"}>
                                    Let us know where you are.
                                </div>
                                <div className={"mt-auto pt-5 pb-3"}>
                                    <Link to={"/contact"} className={"no-underline"}>
                                        <Button color={"rallyBlue"}>
                                            Stay in the Loop
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>

            <div className={"d-flex justify-content-center "}>
                <ButtonGroup
                    variant={"outlined"}
                    aria-label={"Locations page control"}
                    className={"locations-page-control"}
                >
                    <Button
                        color={"rallyBlue"}
                        disabled={locationsIndex === 0}
                        onClick={() => locationsSlider.slickPrev()}
                    >
                <span className={"material-symbols-outlined text-dark fs-16px py-1"}>
                  arrow_back
                </span>
                    </Button>
                    <Button
                        color={"rallyBlue"}
                        onClick={() => locationsSlider.slickNext()}
                    >
                <span className={"material-symbols-outlined text-dark fs-16px py-1"}>
                  arrow_forward
                </span>
                    </Button>
                </ButtonGroup>
            </div>
        </div>
    </div>
}