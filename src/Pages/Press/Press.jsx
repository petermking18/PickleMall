import React, {useState, useRef} from "react"
import {Link} from "react-router-dom"
import {Button, ButtonGroup, Stack, useMediaQuery} from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import {useTheme} from "@mui/material"

import "./Press.scss"
import Common from '../../Common'
import section_1_bg from "../HowItWorks/section_1_bg.png";
import Slider from "react-slick";

import Placeholder from "../../Assets/Placeholder.png";
import pickleCircle from "../Home2/pickle-circle.svg";

import courts from "./courts.png"
import axios from "./axios.png"
import bizJournals from "./bizJournals.png"
import newsNationNow from './newsNationNow.png'

export default function Press() {

    const otherArticles = [
        {
            source: "Axios",
            title: "Vacant Arizona big-box store will become nation's first \"Picklemall\"",
            preview: "Arizona Mills will become the first \"Picklemall\" in America when one of its vacant big-box stores",
            caption: "Published May 23, 2023",
            url: "https://www.axios.com/local/phoenix/2023/05/23/pickleball-shopping-mall-arizona-mills",
            img: axios
        },
        {
            source: "Milwaukee Business Journal",
            title: "Indoor pickleball courts to come to Milwaukee in the next year",
            preview: "A Texas-based pickleball company has plans to open a Milwaukee location within the next twelve months.",
            caption: "Published May 25, 2023",
            url: "https://www.bizjournals.com/milwaukee/news/2023/05/25/picklemall-pickleball-indoor-location.html",
            img: bizJournals
        },
        {
            source: "NewsNation",
            title: "Can pickleball save the ‘dead mall’ in your community?",
            preview: "Picklemall, an innovative modular indoor pickleball concept, will debut its first U.S. location in Tempe.",
            caption: "Published June 21, 2023",
            url: "https://www.newsnationnow.com/video/can-pickleball-save-the-%e2%80%98dead-mall%e2%80%99-in-your-community-newsnation-now/8753892/",
            img: newsNationNow
        }
    ]

    const [index, setIndex] = useState(0);

    let otherArticlesSlider = useRef(null);

    const sliderSettings = {
        dots: false,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        beforeChange: (current, next) => setIndex(next),
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 3000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1.15,
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
    }

    return (
        <div className={"press"}>

            {/* header */}
            <div className={"container mb-md-5"}>
                <div className={"text-center mt-md-4 mb-md-3 pt-3 pb-2 pt-md-5 pb-md-3"}>
                    <h1 className={"font-barlow-condensed text-deep-blue fs-32px fs-md-40px my-0"}>
                        Picklemall Press
                    </h1>
                    <svg className={"d-none d-md-inline-block"} xmlns="http://www.w3.org/2000/svg" width="272"
                         height="4" viewBox="0 0 272 4" fill="none">
                        <path d="M0 2H272" stroke="#49C13D" strokeWidth="4"/>
                    </svg>
                    <svg className={"d-inline-block d-md-none"} xmlns="http://www.w3.org/2000/svg" width="189"
                         height="4" viewBox="0 0 189 4" fill="none">
                        <path d="M0 2H189" stroke="#49C13D" strokeWidth="3"/>
                    </svg>
                </div>

            </div>

            {/* section-1: the future of pickleball */}
            <div className={"section-1 position-relative pb-md-5 mb-md-5"}>
                <div className={"container overflow-x-md-visible mb-4 mb-md-0"}>
                    <Grid container spacing={3}>
                        <Grid sm={12} md={4}>
                            <h2 className={"font-barlow-condensed fw-600 text-volley-blue fs-20px mb-md-0"}>
                                FEATURED STORY: YAHOO FINANCE
                            </h2>
                            <h1 className={"font-barlow-condensed text-deep-blue fs-22px fs-md-40px mt-md-2"}>
                                Picklemall hopes to bring pickleball to a mall near you
                            </h1>
                            <p className={"fs-16px mb-3 mb-md-4"}>
                                Picklemall, a new startup, aims to respond to both the struggling retail real estate
                                industry and the increasing demand for pickleball by transforming vacant mall space into
                                indoor courts. This July, the startup will open its first US location in Tempe, Ariz.
                                with 24 courts.
                            </p>
                            <Link
                                to={"https://finance.yahoo.com/news/picklemall-hopes-to-bring-pickleball-to-a-mall-near-you-203039745.html"}
                                className={'no-decoration'}
                                target={"_blank"}
                                title={"Yahoo Finance: Picklemall hopes to bring pickleball to a mall near you"}>
                                <Button variant={"contained"}
                                        color={"deepBlue"}
                                        className={"text-nowrap"}
                                        size={"small"}
                                        disableElevation>
                                    Read the Story
                                </Button>
                            </Link>
                        </Grid>
                        <Grid sm={12} md={8} className={"px-0 px-md-2"}>
                            <Link
                                to={"https://finance.yahoo.com/news/picklemall-hopes-to-bring-pickleball-to-a-mall-near-you-203039745.html"}
                                className={'no-decoration'}
                                target={"_blank"}
                                title={"Yahoo Finance: Picklemall hopes to bring pickleball to a mall near you"}>
                                <img className={"section-1-bg"} alt={"Picklemall courts"} src={courts}/>
                            </Link>
                        </Grid>
                    </Grid>
                </div>
            </div>

            {/* other articles */}
            <div className="other-articles container pb-4 pt-md-5">
                <div className={""}>
                    <h1 className="text-nowrap font-barlow-condensed text-deep-blue pt-3 pt-md-0 mt-0 mb-4 mb-md-5 fs-22px fs-md-32px">
                        Other Articles
                    </h1>
                </div>

                <div className={"slider-wrapper"}>
                    <Slider
                        {...sliderSettings}
                        ref={(slider) => (otherArticlesSlider = slider)}
                    >
                        {otherArticles.map((l, idx) => (
                            <div key={idx} className={"card-wrapper"}>
                                <div className={"card"}>
                                    <div className={"card-top-photo-wrapper"}>
                                        <Link
                                            to={l.url}
                                            className={'no-decoration'}
                                            target={"_blank"}
                                            title={`${l.source}: ${l.title}`}>
                                            <img
                                                className={"card-top-photo"}
                                                src={l.img}
                                                alt={`${l.source}: ${l.title}`}
                                            />
                                        </Link>
                                    </div>
                                    <div className={"content px-4 py-3"}>
                                        <small className={"fs-12px text-custom-gray fw-400"}>
                                            {l.caption}
                                        </small>
                                        <h3 className={"fs-18px fw-600"}>
                                            {l.title}
                                        </h3>
                                        <p className={"fs-14px fw-400 my-0"}>
                                            {l.preview}
                                        </p>
                                        <div className={"buttons-row mt-auto pt-3 pt-md-0"}>
                                            <Link to={l.url}
                                                  className={'no-decoration'}
                                                  target={"_blank"}
                                                  title={`${l.source}: ${l.title}`}>
                                                <Button variant={"contained"}
                                                        color={"deepBlue"}
                                                        className={"text-nowrap"}
                                                        size={"small"}
                                                        disableElevation>
                                                    Read More
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

                <div className={"d-flex d-md-none justify-content-center "}>
                    <ButtonGroup variant={"outlined"}
                                 aria-label={"Locations page control"}
                                 className={"locations-page-control"}
                                 color={"deepBlue"}>
                        <Button className={"back-button"}
                                disabled={index === 0}
                                onClick={() => otherArticlesSlider.slickPrev()}>
                                <span className={"material-symbols-outlined text-dark fs-16px py-1"}>
                                  arrow_back
                                </span>
                        </Button>
                        <Button className={"forward-button"}
                                onClick={() => otherArticlesSlider.slickNext()}>
                                <span className={"material-symbols-outlined text-dark fs-16px py-1"}>
                                  arrow_forward
                                </span>
                        </Button>
                    </ButtonGroup>
                </div>
            </div>

            {/* contact us */}
            <div className={"contact-us container mb-5"}>
                <div className={"card px-5 py-5"}>
                    <div className={"d-md-flex justify-content-between align-items-center mx-md-4"}>
                        <div className={"d-flex justify-content-start align-items-center"}>
                            <div>
                                <h2 className={"font-barlow-condensed fs-22px fs-md-32px text-bright-white fw-600 my-0"}>
                                    Contact Us
                                </h2>
                                <p className={"fs-14px text-bright-white w-md-60"}>
                                    Want to learn more, talk to a member of our team, or have a location in mind? We
                                    want to
                                    know! Contact us at info@thepicklemall.com.
                                </p>
                            </div>
                        </div>
                        <Link to={"mailto:info@thepicklemall.com"}
                              className={"no-decoration"}>
                            <Button variant={"outlined"}
                                    color={"brightWhite"}
                                    className={"rounded-5 px-3 contact-button"}>
                                Contact Us
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}