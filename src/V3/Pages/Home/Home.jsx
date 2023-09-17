import React, {useState, useRef} from "react"
import Button from "../../Components/Button/Button";
import Common from "../../../Common";
import {Link} from "react-router-dom";
import MembershipOptions from '../../Sections/Membership/MembershipOptions';
import Slider from "react-slick";
import locations from "../../../Helpers/Locations";
import BlueRackets from "./deepblue_rackets.png";
import Grid from "@mui/material/Unstable_Grid2"

import ContactForm from "../../Components/ContactForm/ContactForm";

import './Home.scss'
import {ButtonGroup} from "@mui/material";

const vw = percent => {
    let w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    return (percent * w) / 100;
}

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
        responsive: [{
            breakpoint: 3000, settings: {
                slidesToShow: 3.75, slidesToScroll: 4
            }
        }, {
            breakpoint: 1500, settings: {
                slidesToShow: 4.055, slidesToScroll: 4
            }
        }, {
            breakpoint: 1200, settings: {
                slidesToShow: 3.55, slidesToScroll: 3,
            },
        }, {
            breakpoint: 992, settings: {
                slidesToShow: 2.5, slidesToScroll: 2,
            },
        }, {
            breakpoint: 768, settings: {
                slidesToShow: 1.5, slidesToScroll: 1,
            },
        }, {
            breakpoint: 576, settings: {
                slidesToShow: 1.25, slidesToScroll: 1,
            },
        }, {
            breakpoint: 100, settings: {
                slidesToShow: 1.25, slidesToScroll: 1
            }
        }],
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
                    {locations.map((l, idx) => (<div key={idx} className={"card-wrapper"}>
                        <div className={"card"}>
                            <div className={"card-top-photo-wrapper"}>
                                {(l.isOpen || l.numCourts) && <span
                                    className={"badge fs-12px"}>{l.numCourts} {l.numCourts === 1 ? 'Court' : 'Courts'}</span>}
                                {l.locationImg ? <img className={"card-top-photo"}
                                                      src={l.locationImg}
                                                      alt={"Courts"}/> : <div
                                    className={"card-top-photo d-flex justify-content-center align-items-center bg-deep-blue"}>
                                    <span className={"fs-30px font-barlow-condensed text-light-blue fw-600"}>COMING SOON...</span>
                                </div>}
                            </div>
                            <div className={"content px-4 pb-3"}>
                                <h1 className={"font-barlow-condensed text-black fs-30px fw-600 mb-0"}>
                                    {l.isOpen ? l.location : l.region}
                                </h1>
                                <div className={"fs-12px fw-500"}>
                                    {l.hours.length ? <div className={"fw-400 mt-1"}>
                                            <Grid rowSpacing={1} colSpacing={4} container>
                                                <Grid xs={1}>
                                                   <span className={"pt-1"}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                                         viewBox="0 0 12 12" fill="none">
                                                      <mask id="mask0_728_808" style={{maskType: 'alpha'}}
                                                            maskUnits="userSpaceOnUse" x="0" y="0" width="12"
                                                            height="12">
                                                        <rect width="12" height="12" fill="#49C13D"/>
                                                      </mask>
                                                      <g mask="url(#mask0_728_808)">
                                                        <path
                                                            d="M6.37481 6.34863V4.37555C6.37481 4.26914 6.33892 4.18004 6.26713 4.10825C6.19534 4.03645 6.10624 4.00056 5.99983 4.00056C5.89342 4.00056 5.80432 4.03645 5.73253 4.10825C5.66074 4.18004 5.62484 4.26914 5.62484 4.37555V6.46402C5.62484 6.52427 5.63574 6.58164 5.65753 6.63613C5.67932 6.69062 5.71361 6.74126 5.76041 6.78806L7.22291 8.25056C7.29215 8.31978 7.37916 8.3552 7.48396 8.35681C7.58877 8.35841 7.67739 8.32299 7.74983 8.25056C7.82226 8.17813 7.85848 8.09031 7.85848 7.98711C7.85848 7.8839 7.82226 7.79608 7.74983 7.72365L6.37481 6.34863ZM5.99983 10.7505C5.41009 10.7505 4.85752 10.639 4.34214 10.4159C3.82676 10.1928 3.3774 9.88965 2.99406 9.50632C2.61074 9.12299 2.30754 8.67363 2.08446 8.15825C1.86138 7.64286 1.74984 7.0903 1.74984 6.50056C1.74984 5.91082 1.86138 5.35826 2.08446 4.84287C2.30754 4.32749 2.61074 3.87813 2.99406 3.4948C3.3774 3.11147 3.82676 2.80827 4.34214 2.5852C4.85752 2.36211 5.41009 2.25057 5.99983 2.25057C6.58957 2.25057 7.14213 2.36211 7.65751 2.5852C8.1729 2.80827 8.62226 3.11147 9.00559 3.4948C9.38892 3.87813 9.69211 4.32749 9.91519 4.84287C10.1383 5.35826 10.2498 5.91082 10.2498 6.50056C10.2498 7.0903 10.1383 7.64286 9.91519 8.15825C9.69211 8.67363 9.38892 9.12299 9.00559 9.50632C8.62226 9.88965 8.1729 10.1928 7.65751 10.4159C7.14213 10.639 6.58957 10.7505 5.99983 10.7505ZM1.20753 3.64095C1.13509 3.56851 1.09888 3.48069 1.09888 3.37748C1.09888 3.27428 1.13509 3.18647 1.20753 3.11403L2.6133 1.70826C2.68253 1.63903 2.76954 1.60362 2.87435 1.60202C2.97916 1.60041 3.06778 1.63583 3.14021 1.70826C3.21265 1.7807 3.24886 1.86852 3.24886 1.97172C3.24886 2.07492 3.21265 2.16274 3.14021 2.23517L1.73444 3.64095C1.66521 3.71017 1.5782 3.74559 1.47339 3.7472C1.36859 3.7488 1.27997 3.71338 1.20753 3.64095ZM10.7921 3.64095C10.7197 3.71338 10.6319 3.7496 10.5287 3.7496C10.4255 3.7496 10.3376 3.71338 10.2652 3.64095L8.85944 2.23517C8.79022 2.16595 8.7548 2.07893 8.75319 1.97412C8.75159 1.86932 8.78701 1.7807 8.85944 1.70826C8.93187 1.63583 9.01969 1.59961 9.1229 1.59961C9.2261 1.59961 9.31392 1.63583 9.38635 1.70826L10.7921 3.11403C10.8614 3.18326 10.8968 3.27028 10.8984 3.37508C10.9 3.47989 10.8646 3.56851 10.7921 3.64095ZM5.99983 10.0006C6.97162 10.0006 7.7979 9.66018 8.47868 8.97941C9.15944 8.29863 9.49983 7.47235 9.49983 6.50056C9.49983 5.52877 9.15944 4.70248 8.47868 4.02171C7.7979 3.34094 6.97162 3.00056 5.99983 3.00056C5.02804 3.00056 4.20175 3.34094 3.52098 4.02171C2.84021 4.70248 2.49983 5.52877 2.49983 6.50056C2.49983 7.47235 2.84021 8.29863 3.52098 8.97941C4.20175 9.66018 5.02804 10.0006 5.99983 10.0006Z"
                                                            fill="#49C13D"/>
                                                      </g>
                                                    </svg>
                                                </span>
                                                </Grid>
                                                <Grid xs={10}>
                                                    <span>
                                                {l.hours[0]}
                                            </span>
                                                </Grid>
                                            </Grid>
                                        </div>
                                        :
                                        <></>}
                                    {l.address ? <div className={"fw-400"}>
                                        <Grid rowSpacing={1} colSpacing={4} container>
                                            <Grid xs={1}>
                                                <span className={"pt-1"}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                                         viewBox="0 0 12 12" fill="none">
                                                        <mask id="mask0_728_813" style={{maskType: 'alpha'}}
                                                              maskUnits="userSpaceOnUse" x="0" y="0" width="12"
                                                              height="12">
                                                            <rect width="12" height="12" fill="#D9D9D9"/>
                                                        </mask>
                                                        <g mask="url(#mask0_728_813)">
                                                            <path
                                                                d="M5.99986 9.75673C6.97806 8.88109 7.72661 8.04119 8.24553 7.23701C8.76444 6.43285 9.02389 5.72852 9.02389 5.12403C9.02389 4.21249 8.73431 3.46313 8.15514 2.87595C7.57598 2.28877 6.85755 1.99518 5.99986 1.99518C5.14216 1.99518 4.42373 2.28877 3.84457 2.87595C3.2654 3.46313 2.97582 4.21249 2.97582 5.12403C2.97582 5.72852 3.23527 6.43285 3.75418 7.23701C4.2731 8.04119 5.02166 8.88109 5.99986 9.75673ZM5.99986 10.4702C5.90242 10.4702 5.80499 10.4533 5.70756 10.4197C5.61012 10.386 5.52198 10.3339 5.44313 10.2634C4.99442 9.84998 4.57456 9.42418 4.18353 8.98605C3.79251 8.54791 3.4526 8.10993 3.16382 7.67211C2.87503 7.23429 2.64651 6.80031 2.47824 6.37019C2.30997 5.94005 2.22583 5.52467 2.22583 5.12403C2.22583 3.97019 2.59907 3.03606 3.34554 2.32164C4.09201 1.60721 4.97678 1.25 5.99986 1.25C7.02293 1.25 7.9077 1.60721 8.65417 2.32164C9.40064 3.03606 9.77388 3.97019 9.77388 5.12403C9.77388 5.52467 9.68974 5.93925 9.52147 6.36779C9.3532 6.79631 9.12548 7.23029 8.83829 7.66971C8.55112 8.10913 8.21202 8.54711 7.82099 8.98365C7.42997 9.42018 7.0101 9.84517 6.56138 10.2586C6.48369 10.3291 6.3954 10.382 6.29652 10.4173C6.19763 10.4525 6.09874 10.4702 5.99986 10.4702ZM6.00071 5.93268C6.2495 5.93268 6.46219 5.84409 6.63879 5.66693C6.81539 5.48976 6.90369 5.27678 6.90369 5.02799C6.90369 4.7792 6.81511 4.5665 6.63794 4.3899C6.46078 4.2133 6.2478 4.125 5.99901 4.125C5.75021 4.125 5.53752 4.21358 5.36092 4.39075C5.18432 4.56792 5.09602 4.7809 5.09602 5.02969C5.09602 5.27848 5.1846 5.49118 5.36177 5.66778C5.53893 5.84438 5.75191 5.93268 6.00071 5.93268Z"
                                                                fill="#49C13D"/>
                                                        </g>
                                                    </svg>
                                                </span>
                                            </Grid>
                                            <Grid xs={10}>
                                                <span>
                                                    {l.address}
                                                </span>
                                            </Grid>
                                        </Grid>
                                    </div> : <span className={"fw-500"}>
                                             {l.subtitle}
                                            </span>}
                                </div>
                                <div className={"pt-2 pb-3 mt-auto"}>
                                    <Link to={l.isOpen ? Common.BookingLink : "/contact"}
                                          className={"no-decoration"}>
                                        <Button color={"rallyBlue"}>
                                            {l.isOpen ? "Book a Court" : "Join the Waitlist"}
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>))}
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
                                    className={"font-barlow-condensed text-black fs-30px fw-600 mb-0"}
                                >
                                    WHERE TO NEXT?
                                </h1>
                                <div className={"fs-12px fw-500"}>
                                    Let us know where you are.
                                </div>
                                <div className={"mt-auto pt-5 pb-3"}>
                                    <Link to={"/contact"} className={"no-decoration"}>
                                        <Button color={"rallyBlue"}>
                                            Stay in the Loop
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {(vw(100) >= 768) && <div className={"vw-25"}></div>}
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
        <div className={"section-contact py-md-5"}>
            <div className={""}>
                <div className={"my-md-5 px-md-5 py-md-5 d-flex justify-content-center align-items-center"}>
                    <ContactForm/>
                </div>
            </div>
        </div>
    </div>
}