import React, {useState, useRef} from "react";
import {Link} from "react-router-dom";

import Common from "../../../Common";

import Slider from "react-slick";
import {ButtonGroup} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import Button from "../../Components/Button/Button";
import PageHeader from "../../Components/PageHeader/PageHeader";

import overlay_0 from "./Overlay_0.png";
import overlay_1 from "./Overlay_1.png";
import overlay_2 from "./Overlay_2.png";
import overlay_3 from "./Overlay_3.png";
import overlay_4 from "./Overlay_4.png";
import overlay_5 from "./Overlay_5.png";

import "./Press.scss";

export default function Press() {
    const otherArticles = [
        {
            image: overlay_0,
            published: "June 18, 2023",
            title: "Picklemall hopes to bring pickleball to a mall near you",
            subtitle: "Some malls are in a pickle as stores close. But a pickleball startup may come to the rescue.",
            link: "https://finance.yahoo.com/news/picklemall-hopes-to-bring-pickleball-to-a-mall-near-you-203039745.html"
        },
        {
            image: overlay_1,
            published: "August 9, 2023",
            title: "Pickleball mania breathes new life into Arizona mall",
            subtitle: "The pickleball craze in the United States has reached new heights with the opening last weekend of the first \"Picklemall,\" an indoor sports facility inside a mall in Tempe, Arizona.",
            link: "https://www.reuters.com/sports/pickleball-mania-breathes-new-life-into-arizona-mall-2023-08-08/"
        },
        {
            image: overlay_2,
            published: "June 21, 2023",
            title: "Picklemall is revamping vacant shopping malls into pickleball courts",
            subtitle: "West Shaw, the CEO of Picklemall, and Steve Kuhn, founder of Major League Pickleball and former hedge fund manager...",
            link: "https://www.cnbc.com/video/2023/08/03/picklemall-is-revamping-vacant-shopping-malls-into-pickleball-courts.html"
        },
        {
            image: overlay_3,
            published: "May 23, 2023",
            title: "Vacant Arizona big-box store will become nation's first \"Picklemall\"",
            subtitle: "Arizona Mills will become the first \"Picklemall\" in America when one of its vacant big-box stores",
            link: "https://www.axios.com/local/phoenix/2023/05/23/pickleball-shopping-mall-arizona-mills"
        },
        {
            image: overlay_4,
            published: "May 25, 2023",
            title: "Indoor pickleball courts come to Milwaukee in the next year",
            subtitle: "A Texas-based pickleball company has plans to open a Milwaukee location within the next twelve months.",
            link: "https://www.bizjournals.com/milwaukee/news/2023/05/25/picklemall-pickleball-indoor-location.html"
        },
        {
            image: overlay_5,
            published: "June 21, 2023",
            title: "Can pickleball save the ‘dead mall’ in your community?",
            subtitle: "Picklemall, an innovative modular indoor pickleball concept, will debut its first U.S. location in Tempe.",
            link: "https://www.newsnationnow.com/us-news/sports/pickleball-save-dead-mall-community/"
        }
    ]

    const otherArticleCards = otherArticles.map((article, idx) => (
        <div className={"article-card"} key={idx}>
            <div className={"card-top-photo-wrapper flex-grow-0"}>
                <img src={article.image} alt={"Image"}/>
            </div>
            <div className={"content ps-4 pe-5 me-2 py-4 flex-grow-1 d-flex flex-column"}>
                <div className={"published mb-3"}>{article.published}</div>
                <h5 className={"font-barlow-condensed fs-24px fw-700 lh-27px my-1"}>{article.title}</h5>
                <p className={"fs-14px fw-400 mb-3"}>{article.subtitle}</p>
                <div className={"mt-auto"}>
                    <Link to={article.link} target={"_blank"} className={"no-decoration"}>
                        <Button color={"rallyBlue"}>
                            Read More
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    ))

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
            <PageHeader title={"PRESS"}/>
            <div className={"section-lead container pt-4 pt-md-5 pb-3 pb-md-4"}>
                <h1 className={"font-barlow-condensed text-volley-blue fs-20px fs-md-30px text-center"}>
                    FEATURED STORY: Good Morning America
                </h1>
                <h1 className={"font-barlow-condensed fs-24px fs-md-50px fw-600 text-center hy-5 py-2 py-md-0 px-3 px-md-5 hy-md-3 lh-md-58px text-center"}>
                    PICKLEMALL HOPES TO BRING PICKLEBALL TO A MALL NEAR YOU
                </h1>
                <p className={"fs-14px fs-md-28px"}>
                    Picklemall, a new startup, aims to respond to both the struggling retail real estate industry and
                    the increasing demand for pickleball by transforming vacant mall space into indoor courts. This
                    July, the startup will open its first US location in Tempe, Ariz. with 24 courts.
                </p>
                <div className={"text-center mt-4 pb-3"}>
                    <Link to={"https://www.youtube.com/watch?v=Et_CnWgvlLo"} target={"_blank"}
                          className={"no-decoration"}>
                        <Button color={"rallyBlue"}>
                            Read the Story
                        </Button>
                    </Link>
                </div>
                <div className={"border-top border-volley-blue my-5"}></div>
                <h1 className={"font-barlow-condensed fs-24px fs-md-50px fw-600 text-center my-5 py-2 py-md-0 lh-md-58px text-center"}>
                    OTHER ARTICLES
                </h1>
                <div className={"d-none d-md-block pb-5"}>
                    <Grid container spacing={2} className={"mx-3"}>
                        {otherArticleCards.map((card, idx) => (
                            <Grid xs={12} md={4} key={idx}>
                                {card}
                            </Grid>
                        ))}
                    </Grid>
                </div>
                <div className={"mobile-carousel d-block d-md-none"}>
                    <div className={"slider-wrapper"}>
                        <Slider {...sliderSettings}
                                ref={(slider) => (otherArticlesSlider = slider)}>
                            {otherArticleCards.map((c, idx) => (
                                <div key={idx} className={"card-wrapper h-100"}>
                                    {c}
                                </div>
                            ))}
                            <div className={"vw-25"}></div>
                        </Slider>
                    </div>
                    <div className={"d-flex justify-content-center py-5"}>
                        <ButtonGroup aria-label={"Locations page control"}
                                     className={"locations-page-control"}>
                            <Button className={"back-button"}
                                    color={"rallyBlue"}
                                    disabled={index === 0}
                                    onClick={() => otherArticlesSlider.slickPrev()}>
                                <span className={"material-symbols-outlined text-dark fs-16px py-1"}>
                                  arrow_back
                                </span>
                            </Button>
                            <Button className={"forward-button"}
                                    color={"rallyBlue"}
                                    onClick={() => otherArticlesSlider.slickNext()}>
                                <span className={"material-symbols-outlined text-dark fs-16px py-1"}>
                                  arrow_forward
                                </span>
                            </Button>
                        </ButtonGroup>
                    </div>
                </div>
                <div
                    className={"bg-light-gray border border-dark d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center px-4 px-md-5 py-4 mb-5"}>
                    <div className={"w-md-50 me-4 me-md-0"}>
                        <h1 className={"font-barlow-condensed fs-22px fs-md-32px my-0"}>
                            Contact Us
                        </h1>
                        <p className={"fs-14px mt-md-1 mb-0"}>
                            Want to learn more, talk to a member of our team, or have a location in mind? We want to
                            know! Contact us at info@thepicklemall.com.
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

