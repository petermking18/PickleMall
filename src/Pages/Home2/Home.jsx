import React, {useState, useRef} from "react";
import {Link} from "react-router-dom";
import {ArrowRightAlt} from "@mui/icons-material";
import {Button, Stack, ButtonGroup} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Home.scss";

import locations from "../../Helpers/Locations";
import staff from '../../Helpers/Staff'

import pickleCircle from "./pickle-circle.svg";

import stock1 from "../../Assets/Stock1.jpg";
import stock2 from "../../Assets/Stock2.jpg";
import stock3 from "../../Assets/Stock3.jpg";
import stock5 from "../../Assets/Stock5.jpg";
import stock6 from "../../Assets/Stock6.jpg";
import courts from "../../Assets/Courts.png"
import BlueRackets from "./BlueRackets.png";
import Placeholder from "../../Assets/Placeholder.png";
import p_icon from "./p_icon.svg"
import Common from "../../Common";
import ContactForm from '../../Components/ContactForm/ContactForm';

import EmailCollection from '../../Components/EmailCollection/EmailCollection'

export default function Home() {
    const section1QuickLinks = [
        {
            route: "/About",
            text: "About Picklemall",
        },
        // {
        //     route: "/Shop",
        //     text: "Shop Merchandise",
        // },
        // {
        //     route: "/",
        //     text: "Download on App Store",
        // },
        {
            route: "/Contact",
            text: "Stay in the Loop"
        }
    ].map((l, idx) => (
        <div key={l.idx}>
            <Link className="quick-link d-flex justify-content-between" to={l.route}>
                <span className="fw-semibold fs-14px fs-md-16px">{l.text}</span>
                <ArrowRightAlt className="text-kitchen-green"/>
            </Link>
        </div>
    ));

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

    // noinspection JSValidateTypes
    return (
        <div className="home">
            <div className="section-1 my-0">
                <div
                    className="content pt-md-0 pt-lg-0 d-md-flex align-items-center justify-content-center justify-content-md-start h-100">
                    <div
                        className="container py-3 py-md-3 py-lg-5 d-flex flex-column d-md-block justify-content-center w-md-50">
                        <h1 className="welcome mt-3 mb-2 my-md-4 d-inline fw-700">
                            The Future <br className={"d-block d-md-none"}/>of <br className={"d-none d-md-block"}/>Pickleball
                        </h1>
                        <p className={"px-4 px-md-0 fs-12px fs-md-16px text-center text-md-start text-bright-white my-2 my-md-3"}>
                            Convenient Courts. Controlled Climate. <br className={"d-block d-md-none"}/>Consistent
                            Competition.
                        </p>
                        {Common.BookingLink &&
                            <Link to={Common.BookingLink}
                                  className={"no-decoration mx-auto mx-md-0 mt-2 mt-md-0"}>
                                <Button
                                    className="text-deep-blue mt-2 mb-4"
                                    color="rallyBlue"
                                    variant="contained"
                                    disableElevation
                                >
                                    Book a Court
                                </Button>
                            </Link>
                        }
                    </div>
                    {/*<div className={'w-md-50 d-flex justify-content-center flex-grow-1'}>*/}
                    {/*    <EmailCollection/>*/}
                    {/*</div>*/}
                </div>
            </div>
            <div className="section-2 container">
                <div className="pb-4 py-md-5 mt-md-3 position-relative">
                    <Grid container spacing={8}>
                        <Grid xs={12} md={6} className={'pb-0 d-flex align-items-center content'}>
                            <div className={'mb-md-5 mt-3 mt-md-0'}>
                                <h1 className="d-flex flex-wrap font-barlow-condensed text-deep-blue mt-md-0 mb-3">
                                    <div className="text-md-nowrap fs-24px fs-md-40px">
                                        Welcome to Picklemall
                                        <span className="text-pickle-green">.</span>
                                        &nbsp;
                                    </div>
                                </h1>
                                <p className="text-black fs-14px fs-md-16px mb-0 mb-md-3">
                                    Discover the future of pickleball at Picklemall. Where innovation, community, and
                                    premium facilities come together. At Picklemall, we are revolutionizing the way you
                                    book, play, and interact with others who share your passion for the game.
                                </p>
                                <p className={"font-barlow-condensed fw-600 text-deep-blue fs-20px fs-md-20px mb-4 mb-md-0"}>
                                    RESERVE. ARRIVE. PLAY. SHARE.
                                </p>
                                <div className={"mt-0 mt-md-3 mb-3 mb-md-0 d-none d-md-block"}>
                                    {
                                        [
                                            {
                                                className: 'd-none d-md-block',
                                                size: "medium"
                                            },
                                            {
                                                className: 'd-block d-md-none',
                                                size: "small"
                                            }
                                        ].map((size, idx) =>
                                            <div key={idx} className={size.className}>
                                                {Common.BookingLink &&
                                                    <Link to={Common.BookingLink}
                                                          className={"no-decoration"}>
                                                        <Button
                                                            variant={"contained"}
                                                            color={"deepBlue"}
                                                            size={size.size}
                                                            className={"text-nowrap my-4"}
                                                            disableElevation
                                                        >
                                                            Book a Court
                                                        </Button>
                                                    </Link>
                                                }
                                                <Link to={"/HowItWorks"}
                                                      className={"no-decoration"}>
                                                    {Common.BookingLink ?
                                                        <Button
                                                            variant={"text"}
                                                            size={size.size}
                                                            className={"text-deep-blue mx-2"}
                                                            disableElevation
                                                        >
                                                            Learn more&nbsp;
                                                            <span className={"material-symbols-outlined"}>
                                                              arrow_forward
                                                            </span>
                                                        </Button>
                                                        :
                                                        <Button
                                                            variant={"contained"}
                                                            color={"deepBlue"}
                                                            size={size.size}
                                                            className={""}
                                                            disableElevation
                                                        >
                                                            Learn more&nbsp;
                                                            <span className={"material-symbols-outlined"}>
                                                              arrow_forward
                                                            </span>
                                                        </Button>
                                                    }
                                                </Link>
                                            </div>)
                                    }
                                </div>
                            </div>
                        </Grid>
                        {/*<Grid xs={12} lg={4}>*/}
                        {/*    <div className="card">*/}
                        {/*        <img src={stock1} alt="Rackets" className="card-top-photo"/>*/}
                        {/*        <div className="content p-4">*/}
                        {/*            <h2 className="font-barlow-condensed fs-20px fs-md-24px text-deep-blue my-0">*/}
                        {/*                Learn More*/}
                        {/*            </h2>*/}
                        {/*            <hr className="hr-soft-serve mb-4"/>*/}
                        {/*            <Stack spacing={3}>{section1QuickLinks}</Stack>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</Grid>*/}
                    </Grid>
                    <img alt={"Picklemall"} src={p_icon} className={"p-icon"}/>
                </div>
            </div>
            <div className="carousel my-4 my-md-0">
                <h1 className="carousel-text font-barlow-condensed text-white my-0 d-flex align-items-center">
                  <span className="text-container">
                    <span className="text-content fs-32px fs-md-88px text-v-center lh-88px mt--0-45rem mt-md--1-5rem">
                      CONVENIENT COURTS<span className="text-pickle-green">.</span>{" "}
                        CONTROLLED CLIMATE<span className="text-pickle-green">.</span>{" "}
                        CONSISTENT COMPETITION<span className="text-pickle-green">.</span>
                    </span>
                    <span className="text-content fs-30px fs-md-88px text-v-center lh-88px mt--0-45rem mt-md--1-5rem">
                      CONVENIENT COURTS<span className="text-pickle-green">.</span>{" "}
                        CONTROLLED CLIMATE<span className="text-pickle-green">.</span>{" "}
                        CONSISTENT COMPETITION<span className="text-pickle-green">.</span>
                    </span>
                  </span>
                </h1>
            </div>

            <div className="section-3 bg-bright-white">
                <div className="locations container pb-4 py-md-5">
                    <div className={""}>
                        <h1 className="text-nowrap font-barlow-condensed text-deep-blue pt-3 pt-md-0 mt-0 mb-4 mb-md-5 fs-22px fs-md-40px">
                            Find a Picklemall Near You<span className="text-pickle-green">.</span>
                        </h1>
                    </div>

                    <div className={"slider-wrapper"}>
                        <Slider
                            {...locationsSliderSettings}
                            ref={(slider) => (locationsSlider = slider)}
                        >
                            {/*<div className={"before-first-card"}></div>*/}
                            {locations.map((l, idx) => (
                                <div key={idx} className={"card-wrapper"}>
                                    <div className={"card"}>
                                        <div className={"card-top-photo-wrapper"}>
                                            {(l.isOpen || l.numCourts) &&
                                                <span
                                                    className="badge fs-12px">{l.numCourts} {l.numCourts === 1 ? 'Court' : 'Courts'}</span>
                                            }
                                            <img
                                                className={"card-top-photo"}
                                                src={l.locationImg ? l.locationImg : Placeholder}
                                                alt={"Courts"}
                                            />
                                            {l.locationImg && (
                                                <img
                                                    className={"pickle-circle"}
                                                    src={pickleCircle}
                                                    alt={"Picklemall"}
                                                />
                                            )}
                                        </div>
                                        <div className={"content px-4 pb-3"}>
                                            <h1
                                                className={
                                                    "location location-name text-nowrap font-barlow-condensed text-deep-blue my-3"
                                                }
                                            >
                                                {l.isOpen ? l.location : l.region}
                                            </h1>
                                            <div className={"info"}>
                                                {l.isOpen ? (
                                                    <div>
                                                        <Stack
                                                            direction={"row"}
                                                            spacing={2}
                                                            className={"mb-2"}
                                                        >
                            <span
                                className={
                                    "material-symbols-outlined text-pickle-green info-icon"
                                }
                            >
                              location_on
                            </span>
                                                            <div className={"text-deep-blue info-text"}>
                                                                {l.address}
                                                            </div>
                                                        </Stack>
                                                        <Stack direction={"row"} spacing={2}>
                            <span
                                className={
                                    "material-symbols-outlined text-pickle-green info-icon"
                                }
                            >
                              schedule
                            </span>
                                                            <div className={"text-deep-blue info-text"}>
                                                                {l.hours.map((h, idx) => (
                                                                    <div key={idx}>{h}</div>
                                                                ))}
                                                            </div>
                                                        </Stack>
                                                    </div>
                                                ) : (
                                                    <div className={"text-kitchen-green not-open-message"}>
                                                        {l.notOpenMessage}!
                                                    </div>
                                                )}
                                            </div>

                                            <div className={"buttons-row mt-auto pt-3"}>
                                                {l.isOpen ? (
                                                    <Stack direction={"row"} spacing={2}>
                                                        <Link to={Common.BookingLink} className={'no-decoration'}>
                                                            <Button
                                                                variant={"contained"}
                                                                color={"deepBlue"}
                                                                className={"text-nowrap"}
                                                                disableElevation>
                                                                Book a Court
                                                            </Button>
                                                        </Link>
                                                        {/*<Link to={l.bookLink} className={'no-decoration'}>*/}
                                                        {/*    <Button*/}
                                                        {/*        variant={"text"}*/}
                                                        {/*        className={"text-volley-blue text-nowrap"}*/}
                                                        {/*    >*/}
                                                        {/*        Learn more&nbsp;*/}
                                                        {/*        <span*/}
                                                        {/*            className={"material-symbols-outlined"}>arrow_forward</span>*/}
                                                        {/*    </Button>*/}
                                                        {/*</Link>*/}
                                                    </Stack>
                                                ) : (
                                                    <div>
                                                        <Link to={'/contact'} className={'no-decoration'}>
                                                            <Button
                                                                variant={"contained"}
                                                                color={"deepBlue"}
                                                                disableElevation
                                                            >
                                                                Stay in the Loop
                                                            </Button>
                                                        </Link>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className={"card-wrapper"}>
                                <div className={"card where-to bg-light-blue"}>
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
                                                "location font-barlow-condensed text-deep-blue my-2 text-nowrap"
                                            }
                                        >
                                            Where to next?
                                        </h1>
                                        <div className={"text-kitchen-green not-open-message"}>
                                            Let us know where you are.
                                        </div>
                                        <div className={"mt-auto"}>
                                            <Link to={"/contact"} className={"no-underline"}>
                                                <Button
                                                    variant={"contained"}
                                                    color={"deepBlue"}
                                                    disableElevation
                                                >
                                                    Stay in the Loop
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={"vw-25"}></div>
                        </Slider>
                    </div>

                    <div className={"d-flex justify-content-center "}>
                        <ButtonGroup
                            variant={"outlined"}
                            aria-label={"Locations page control"}
                            className={"locations-page-control"}
                            color={"deepBlue"}
                        >
                            <Button
                                className={"back-button"}
                                disabled={locationsIndex === 0}
                                onClick={() => locationsSlider.slickPrev()}
                            >
                <span className={"material-symbols-outlined text-dark fs-16px py-1"}>
                  arrow_back
                </span>
                            </Button>
                            <Button
                                className={"forward-button"}
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
            <div className={"contact-section px-md-5 py-md-5"}>
                <div className={"container my-md-5 py-md-5 d-flex justify-content-center align-items-center"}>
                    <ContactForm/>
                </div>
            </div>
            {/*<div className="section-4">*/}
            {/*    <div className="s4-header pt-3 pb-5 py-md-5">*/}
            {/*        <h1 className="font-barlow-condensed text-deep-blue fs-35px fs-md-40px mt-0 mb-4">*/}
            {/*            Revolutionizing the Indoor Pickleball Experience<span className="text-pickle-green">.</span>*/}
            {/*        </h1>*/}
            {/*        <div className="d-flex shadow it-pays">*/}
            {/*            <div className="stock-6-wrapper">*/}
            {/*                <img src={stock6} className="stock-6" alt="stock"/>*/}
            {/*            </div>*/}
            {/*            <div className="bg-white d-flex justify-content-center align-items-center">*/}
            {/*                <div className={'py-md-4 px-md-5'}>*/}
            {/*                    /!*<h1 className="font-barlow-condensed text-deep-blue fs-20px fs-md-24px mt-0 mb-1 fw-700">*!/*/}
            {/*                    /!*    Come & Play*!/*/}
            {/*                    /!*</h1>*!/*/}
            {/*                    <p className="text-black fs-14px fs-md-16px mt-0 mb-0">*/}
            {/*                        At Picklemall, we are on a mission to revolutionize the indoor pickleball experience*/}
            {/*                        across the United States. Our innovative concept combines the adaptive reuse of mall*/}
            {/*                        spaces, cutting-edge technology, and an unwavering passion for the game. With the*/}
            {/*                        support of the pickleball community, we are primed*/}
            {/*                        for rapid nationwide expansion, bringing the joy of pickleball to communities all*/}
            {/*                        over the country.*/}
            {/*                    </p>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className="section-5">*/}
            {/*    <div className="">*/}
            {/*        <div className="d-flex find-people">*/}
            {/*            <div className="bg-white d-flex align-items-center">*/}
            {/*                <div>*/}
            {/*                    <h1 className="font-barlow-condensed text-deep-blue fs-35px fs-md-40px mb-2">*/}
            {/*                        Find your people<span className="text-pickle-green">.</span>*/}
            {/*                    </h1>*/}
            {/*                    <p className="text-black mt-0 mb-4 mb-md-4 fs-14px fs-md-16px">*/}
            {/*                        At Picklemall, we're more than just a pickleball venue – we're a thriving community.*/}
            {/*                        Step into our state-of-the-art facilities and feel the energy of players coming*/}
            {/*                        together, forging new friendships, and sharing the love for the game.*/}
            {/*                        <br/>*/}
            {/*                        <br/>*/}
            {/*                        Whether you're a seasoned player or a beginner, our diverse range of activities*/}
            {/*                        caters to everyone. Join leagues, tournaments, and clinics for competitive play and*/}
            {/*                        skill development. Or simply enjoy open play sessions, where you can meet new people*/}
            {/*                        and engage in friendly matches.*/}
            {/*                    </p>*/}
            {/*                    /!*<Link className={'no-underline'} to={'https://book.thepicklemall.com/book/Picklemall'}>*!/*/}
            {/*                    /!*    <Button*!/*/}
            {/*                    /!*        className="book-button text-white mb-3 mt-md-2 fs-14px fs-md-16px"*!/*/}
            {/*                    /!*        color="volleyBlue"*!/*/}
            {/*                    /!*        variant="contained"*!/*/}
            {/*                    /!*        size="large"*!/*/}
            {/*                    /!*        disableElevation*!/*/}
            {/*                    /!*    >*!/*/}
            {/*                    /!*        Book a Court*!/*/}
            {/*                    /!*    </Button>*!/*/}
            {/*                    /!*</Link>*!/*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <img src={stock1} className="stock-1" alt="stock"/>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className="section-6 bg-off-white-2">*/}
            {/*    <div className="s6-content">*/}
            {/*        <div className="s6-header">*/}
            {/*            <h1 className="font-barlow-condensed text-deep-blue mt-1 mb-1 fs-35px fs-md-40px">*/}
            {/*                Control your court time*/}
            {/*                <span className="text-pickle-green">.</span>*/}
            {/*            </h1>*/}
            {/*            <p className="text-black mt-0 mb-5 fs-14px fs-md-16px">*/}
            {/*                At Picklemall, we prioritize convenience and give you the power to control your court time*/}
            {/*                like never before. We understand that your time is valuable, and we're committed to ensuring*/}
            {/*                a seamless and efficient experience for all players.*/}
            {/*                <br/>*/}
            {/*                <br/>*/}
            {/*                Gone are the days of waiting around for your turn on the court. With our user-friendly*/}
            {/*                mobile app, scheduling a pickleball game at Picklemall is as easy as a few taps on your*/}
            {/*                phone. Reserve your court, set your playtime, and unlock the door to your Picklemall*/}
            {/*                experience—all at your fingertips.*/}
            {/*            </p>*/}
            {/*        </div>*/}
            {/*        <div className="d-flex">*/}
            {/*            <img src={stock5} className="stock-3and5 w-50" alt="stock"/>*/}
            {/*            <img src={stock3} className="stock-3and5 w-50" alt="stock"/>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className="section-7">*/}
            {/*    <div className="">*/}
            {/*        <div className="d-flex align-items-center prem-facilities">*/}
            {/*            <div className="bg-white">*/}
            {/*                <h1 className="font-barlow-condensed text-deep-blue fs-35px fs-md-40px my-1 mt-md-5">*/}
            {/*                    Premium facilities<span className="text-pickle-green">.</span>*/}
            {/*                </h1>*/}
            {/*                <p className="text-black fs-14px fs-md-16px">*/}
            {/*                    At Picklemall, we're dedicated to providing a superior pickleball experience. Our*/}
            {/*                    state-of-the-art facilities feature top-notch championship-style courts, ensuring*/}
            {/*                    exceptional gameplay for players of all levels. Enjoy climate-controlled environments*/}
            {/*                    that offer optimal conditions year- round, allowing you to focus on the game without*/}
            {/*                    distractions.*/}
            {/*                    <br/>*/}
            {/*                    <br/>*/}
            {/*                    We believe in the power of technology to elevate the player experience. In the coming*/}
            {/*                    months, we will be launching a user-friendly mobile app, available on both Android and*/}
            {/*                    iOS platforms. The Picklemall app will revolutionize how players schedule games, track*/}
            {/*                    their performance, and improve their skills. Additionally, our cutting-edge court*/}
            {/*                    cameras will allow players to review their gameplay footage in real time, offering*/}
            {/*                    valuable insights and learning opportunities.*/}
            {/*                </p>*/}
            {/*            </div>*/}
            {/*            <img src={courts} className="stock-2" alt="stock"/>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*/!*<div className={"section-8 d-none d-lg-block"}>*!/*/}
            {/*/!*    <div className={"bg-white"}>*!/*/}
            {/*/!*        <h1 className="font-barlow-condensed text-deep-blue mb-3">*!/*/}
            {/*/!*            Our staff<span className="text-pickle-green">.</span>*!/*/}
            {/*/!*        </h1>*!/*/}
            {/*/!*        <Grid className={'staff-grid mb-5'} container spacing={0}>*!/*/}
            {/*/!*            {staff.map((s, idx) =>*!/*/}
            {/*/!*                <Grid key={idx} xs={3}>*!/*/}
            {/*/!*                    <div className={"staff-card-wrapper"}>*!/*/}
            {/*/!*                        <div*!/*/}
            {/*/!*                            className={"staff-card m-3 p-3 bg-bright-white d-flex flex-column justify-content-center align-items-center text-center"}>*!/*/}
            {/*/!*                            <img className={'mt-2'} src={s.photo} alt={"headshot"}/>*!/*/}
            {/*/!*                            <h3 className={'name font-barlow-condensed fs-24px text-deep-blue mt-2 mb-1'}>{s.name}</h3>*!/*/}
            {/*/!*                            <small className={'title text-kitchen-green fw-500 mb-2'}>{s.title}</small>*!/*/}
            {/*/!*                        </div>*!/*/}
            {/*/!*                    </div>*!/*/}
            {/*/!*                </Grid>*!/*/}
            {/*/!*            )}*!/*/}
            {/*/!*        </Grid>*!/*/}
            {/*/!*    </div>*!/*/}
            {/*/!*</div>*!/*/}
            {/*<div className="section-9">*/}
            {/*    <div className="s9-header pt-3 pb-5 py-md-5">*/}
            {/*        <h1 className="font-barlow-condensed text-deep-blue fs-35px fs-md-40px mt-0 mb-4">*/}
            {/*            Join the Picklemall Community<span className="text-pickle-green">.</span>*/}
            {/*        </h1>*/}
            {/*        <div className="d-flex shadow it-pays">*/}
            {/*            <div className="bg-white d-flex justify-content-center align-items-center">*/}
            {/*                <div className={'py-md-4 px-md-5'}>*/}
            {/*                    /!*<h1 className="font-barlow-condensed text-deep-blue fs-20px fs-md-24px mt-0 mb-1 fw-700">*!/*/}
            {/*                    /!*    Come & Play*!/*/}
            {/*                    /!*</h1>*!/*/}
            {/*                    <p className="text-black fs-14px fs-md-16px mt-0 mb-0">*/}
            {/*                        We invite you to join us on this exciting journey as we redefine the pickleball*/}
            {/*                        experience. Follow us on Instagram to stay updated on our progress at Arizona Mills*/}
            {/*                        and our rapid expansion across the United States. For more information and updates,*/}
            {/*                        visit our website at www.thepicklemall.com. Experience the future of pickleball with*/}
            {/*                        Picklemall!*/}
            {/*                    </p>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="stock-6-wrapper">*/}
            {/*                <img src={stock6} className="stock-6" alt="stock"/>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
}
