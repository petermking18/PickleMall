import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRightAlt } from "@mui/icons-material";
import { Button, Stack, ButtonGroup } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Home.scss";

import locations from "../../Helpers/Locations";

import pickleCircle from "./pickle-circle.svg";

import stock1 from "../../Assets/Stock1.jpg";
import stock2 from "../../Assets/Stock2.jpg";
import stock3 from "../../Assets/Stock3.jpg";
import stock5 from "../../Assets/Stock5.jpg";
import stock6 from "../../Assets/Stock6.jpg";
import courts from "../../Assets/Courts.png"
import GreenRackets from "./GreenRackets.png";
import Placeholder from "../../Assets/Placeholder.png";

export default function Home() {
  const section1QuickLinks = [
    {
      route: "/About",
      text: "About Picklemall",
    },
    {
      route: "/Shop",
      text: "Shop Merchandise",
    },
    {
      route: "/",
      text: "Download on App Store",
    },
  ].map((l, idx) => (
    <div key={l.text}>
      <Link className="quick-link d-flex justify-content-between" to={l.route}>
        <span className="fw-semibold">{l.text}</span>
        <ArrowRightAlt className="text-kitchen-green" />
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
        breakpoint: 1200,
        settings: {
          slidesToShow: 2.55,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2.55,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.55,
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
    ],
  };

  // noinspection JSValidateTypes
  return (
    <div className="home">
      <div className="section-1 my-0">
        <div className="content pt-5">
          <div className="container py-5">
            <h1 className="welcome mb-4">
              The Future of Pickleball Is Indoors.
            </h1>
            <Button
              className="book-button text-deep-blue mb-4"
              color="rallyBlue"
              variant="contained"
              size="large"
              disableElevation
            >
              Book a Court
            </Button>
          </div>
        </div>
      </div>
      <div className="section-2">
        <div className="container py-5">
          <Grid container spacing={8}>
            <Grid xs={12} md={8}>
              <h1 className="d-flex flex-wrap font-barlow-condensed text-deep-blue">
                <div className="text-nowrap">
                  Welcome to Picklemall
                  <span className="text-pickle-green">.</span>
                  &nbsp;
                </div>
              </h1>
              <p className="text-black">
                The Picklemall offers a one-of-a-kind playing experience,
                featuring state-of-the-art courts, equipment, and amenities that
                cater to players' every need. With a range of courts available,
                players can choose the ideal playing surface for their skill
                level and play style, ensuring a challenging and exciting game
                every time.
                <br />
                <br />
                Picklemall is committed to providing an inclusive and welcoming
                environment for players of all ages and backgrounds, fostering a
                sense of community and camaraderie among players. Whether you're
                a seasoned pro or a newcomer to the sport, you'll find
                everything you need to thrive at Picklemall, from top-notch
                coaching to a range of social events and tournaments.
              </p>
              <Button
                variant={"contained"}
                color={"volleyBlue"}
                className={"text-nowrap my-4"}
                disableElevation
              >
                Book a Court
              </Button>
              <Button
                variant={"text"}
                className={"text-volley-blue text- mx-2"}
              >
                Learn more&nbsp;
                <span className={"material-symbols-outlined"}>
                  arrow_forward
                </span>
              </Button>
            </Grid>
            <Grid xs={12} md={4}>
              <div className="card">
                <img src={stock1} alt="Rackets" className="card-top-photo" />
                <div className="content p-4">
                  <h2 className="font-barlow-condensed text-deep-blue my-0">
                    Learn More
                  </h2>
                  <hr className="hr-soft-serve mb-4" />
                  <Stack spacing={3}>{section1QuickLinks}</Stack>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
      <div className="carousel">
        <h1 className="carousel-text font-barlow-condensed text-white">
          <span className="text-container py-5">
            <span className="text-content">
              CONVENIENT COURTS<span className="text-pickle-green">.</span>{" "}
              CONTROLLED CLIMATE<span className="text-pickle-green">.</span>{" "}
              CONSISTENT COMPETITION<span className="text-pickle-green">.</span>
            </span>
            <span className="text-content">
              CONVENIENT COURTS<span className="text-pickle-green">.</span>{" "}
              CONTROLLED CLIMATE<span className="text-pickle-green">.</span>{" "}
              CONSISTENT COMPETITION<span className="text-pickle-green">.</span>
            </span>
          </span>
        </h1>
      </div>

      <div className="section-3">
        <div className="locations py-5">
          {/*<div className={""}>*/}
          {/*  <h1 className="text-nowrap font-barlow-condensed text-deep-blue mb-5">*/}
          {/*    Locations<span className="text-pickle-green">.</span>*/}
          {/*  </h1>*/}
          {/*</div>*/}

          <br/>
          <br/>
          <br/>
          <br/>

          <Slider
            {...locationsSliderSettings}
            ref={(slider) => (locationsSlider = slider)}
          >
            <div className={"before-first-card"}></div>
            {locations.map((l) => (
              <div key={l.address} className={"card-wrapper"}>
                <div className={"card"}>
                  <div className={"card-top-photo-wrapper"}>
                    {l.isOpen &&
                    <span className="badge">{l.numCourts} {l.numCourts === 1 ? 'Court' : 'Courts'}</span>
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
                        alt={"Pickle mall"}
                      />
                    )}
                  </div>
                  <div className={"content px-4 pb-3"}>
                    <h1
                      className={
                        "location font-barlow-condensed text-deep-blue mb-1"
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
                                <div key={h}>{h}</div>
                              ))}
                            </div>
                          </Stack>
                        </div>
                      ) : (
                        <div className={"text-kitchen-green not-open-message"}>
                          {l.notOpenMessage}
                        </div>
                      )}
                    </div>

                    <div className={"buttons-row mt-auto pt-2"}>
                      {l.isOpen ? (
                        <Stack direction={"row"} spacing={2}>
                          <Button
                            variant={"contained"}
                            color={"volleyBlue"}
                            className={"text-nowrap"}
                            disableElevation
                          >
                            Book a Court
                          </Button>
                          <Button
                            variant={"text"}
                            className={"text-volley-blue text-nowrap"}
                          >
                            Learn more&nbsp;
                            <span className={"material-symbols-outlined"}>
                              arrow_forward
                            </span>
                          </Button>
                        </Stack>
                      ) : (
                        <div>
                          <Button
                            variant={"contained"}
                            color={"volleyBlue"}
                            disableElevation
                          >
                            Join the Waitlist
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className={"card-wrapper"}>
              <div className={"card where-to"}>
                <div className={"card-top-photo-wrapper"}>
                  {/* todo: number of courts badge,
                                        .before-first-card make width match,
                                        paging buttons
                                     */}
                  <img
                    className={"card-top-photo"}
                    src={GreenRackets}
                    alt={"rackets"}
                  />
                </div>
                <div className={"content px-4 pb-3"}>
                  <h1
                    className={
                      "location font-barlow-condensed text-deep-blue mb-1 text-nowrap"
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
                        color={"volleyBlue"}
                        disableElevation
                      >
                        Stay in the Loop
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
          <div className={"d-flex justify-content-center "}>
            <ButtonGroup
              variant={"outlined"}
              aria-label={"Locations page control"}
              className={"locations-page-control"}
              color={"kitchenGreen"}
            >
              <Button
                className={"back-button"}
                disabled={locationsIndex === 0}
                onClick={() => locationsSlider.slickPrev()}
              >
                <span className={"material-symbols-outlined text-dark"}>
                  arrow_back
                </span>
              </Button>
              <Button
                className={"forward-button"}
                onClick={() => locationsSlider.slickNext()}
              >
                <span className={"material-symbols-outlined text-dark"}>
                  arrow_forward
                </span>
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </div>
      <div className="section-4">
        <div className="s4-header">
          <h1 className="text-nowrap font-barlow-condensed text-deep-blue mb-5">
            It pays to show up<span className="text-pickle-green">.</span>
          </h1>
          <div className="d-flex shadow it-pays">
            <div className="stock-6-wrapper">
              <img src={stock6} className="stock-6" alt="stock" />
            </div>
            <div className="bg-white">
              <h1 className="font-barlow-condensed text-deep-blue">
                Come & Play
              </h1>
              <p className="text-black">
                Picklemall memberships are designed for maximum enjoyment. We
                want to see you working on your game and playing several times
                per week.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section-5">
        <div className="">
          <div className="d-flex find-people">
            <div className="bg-white">
              <h1 className="font-barlow-condensed text-deep-blue">
                Find your people<span className="text-pickle-green">.</span>
              </h1>
              <p className="text-black mb-5">
                Community is core to pickleball, it is what allows us all to
                laugh, sweat, and compete! Conveniently meet friends and find
                teammates from all talent levels
              </p>
              <Button
                className="book-button text-white mb-4"
                color="volleyBlue"
                variant="contained"
                size="large"
                disableElevation
              >
                Book a Court
              </Button>
            </div>
            <img src={stock1} className="stock-1" alt="stock" />
          </div>
        </div>
      </div>
      <div className="section-6 bg-off-white-2">
        <div className="s6-content">
          <div className="s6-header">
            <h1 className="font-barlow-condensed text-deep-blue mt-1">
              Control your court time
              <span className="text-pickle-green">.</span>
            </h1>
            <p className="text-black mb-5">
              Immediately start playing with open play, memberships, or ad-hoc
              reservations. Picklemall courts are a breeze to consistently show
              up to.
            </p>
          </div>
          <div className="d-flex">
            <img src={stock5} className="stock-3and5 w-50" alt="stock" />
            <img src={stock3} className="stock-3and5 w-50" alt="stock" />
          </div>
        </div>
      </div>
      <div className="section-7">
        <div className="">
          <div className="d-flex align-items-center prem-facilities">
            <div className="bg-white container-padding-left">
              <h1 className="font-barlow-condensed text-deep-blue">
                Premier facilities<span className="text-pickle-green">.</span>
              </h1>
              <p className="text-black">
                Nothing should get in the way of your game. Modern LED lighting,
                AC, Heat, and professional grade court surfaces allow time on
                the court to be fun, safe, and stress-free.
              </p>
            </div>
            <img src={courts} className="stock-2" alt="stock" />
          </div>
        </div>
      </div>
      <div className={"section-8 d-none d-lg-block"}>
        <div className={"bg-white"}>
          <h1 className="font-barlow-condensed text-deep-blue">
            Our staff<span className="text-pickle-green">.</span>
          </h1>
        </div>
      </div>
    </div>
  );
}
