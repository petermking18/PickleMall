import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRightAlt } from "@mui/icons-material";
import { Button, Stack, ButtonGroup } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Home.scss";

import racketsPhoto from "./Rackets.png";
import courtsPhoto from "./Courts.png";
import pickleCircle from "./pickle-circle.svg";

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
      route: "/Events",
      text: "Upcoming Events",
    },
  ].map((l, idx) => (
    <div key={idx}>
      <Link className="quick-link d-flex justify-content-between" to={l.route}>
        <span className="fw-semibold">{l.text}</span>
        <ArrowRightAlt className="text-kitchen-green" />
      </Link>
    </div>
  ));

  const locations = [
    {
      location: "Tempe, AZ",
      address: "Address",
      hours: ["Mon-Fri: 6am-8pm", "Sat: 6am-midnight", "Sun: 6am-11pm"],
      isOpen: true,
      notOpenMessage: "",
      numCourts: 24,
    },
    {
      location: "Texas",
      address: "Address",
      hours: [],
      isOpen: false,
      notOpenMessage: "Opening late summer 2023",
    },
    {
      location: "Minnesota",
      address: "Address",
      hours: [],
      isOpen: false,
      notOpenMessage: "Opening late summer 2023",
    },
    {
      location: "Maryland",
      address: "Address",
      hours: [],
      isOpen: false,
      notOpenMessage: "Opening late summer 2023",
    },
    {
      location: "Washington, DC",
      address: "Address",
      hours: [],
      isOpen: true,
      notOpenMessage: "",
      numCourts: 5,
    },
    {
      location: "Florida",
      address: "Address",
      hours: [],
      isOpen: false,
      notOpenMessage: "Opening late summer 2023",
    },
    {
      location: "Tempe, AZ",
      address: "Address",
      hours: [],
      isOpen: true,
      notOpenMessage: "",
      numCourts: 6,
    },
    {
      location: "Tempe, AZ",
      address: "Address",
      hours: [],
      isOpen: true,
      notOpenMessage: "",
      numCourts: 35,
    },
  ];

  const [locationsIndex, setLocationsIndex] = useState(0);

  let locationsSlider = useRef(null);

  const locationsSliderSettings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4.35,
    slidesToScroll: 4,
    beforeChange: (current, next) => setLocationsIndex(next),
    mobileFirst: true,
    responsive: [
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
            <h1 className="welcome w-50 mb-4">
              Welcome to the future of Pickleball!
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
                  Convenient courts<span className="text-pickle-green">.</span>
                  &nbsp;
                </div>
                <div className="text-nowrap">
                  Controlled climate<span className="text-pickle-green">.</span>
                  &nbsp;
                </div>
                <div className="text-nowrap">
                  Consistent competition
                  <span className="text-pickle-green">.</span>&nbsp;
                </div>
              </h1>
              <p>
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
            </Grid>
            <Grid xs={12} md={4}>
              <div className="card">
                <img src={racketsPhoto} alt="Pickleball photo" />
                <div className="content p-4">
                  <h2 className="font-barlow-condensed my-0">Quick Links</h2>
                  <hr className="hr-pickle-green mb-4" />
                  <Stack spacing={3}>{section1QuickLinks}</Stack>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
      <div className="section-3">
        <div className="locations container-fluid px-0 py-5">
          <div className={"container"}>
            <h1 className="text-nowrap font-barlow-condensed text-deep-blue mb-5">
              Locations<span className="text-pickle-green">.</span>
            </h1>
          </div>

          <Slider
            {...locationsSliderSettings}
            ref={(slider) => (locationsSlider = slider)}
          >
            <div className={"before-first-card"}></div>
            {locations.map((l, idx) => (
              <div key={idx} className={"card-wrapper"}>
                <div className={"card"}>
                  <div className={"card-top-photo-wrapper"}>
                    {/* todo: number of courts badge,
                                        .before-first-card make width match,
                                        paging buttons
                                     */}
                    <img
                      className={"card-top-photo"}
                      src={courtsPhoto}
                      alt={"Courts"}
                    />
                    <img
                      className={"pickle-circle"}
                      src={pickleCircle}
                      alt={"Pickle mall"}
                    />
                  </div>
                  <div className={"content px-4 pb-3"}>
                    <h1
                      className={
                        "location font-barlow-condensed text-deep-blue mb-1"
                      }
                    >
                      {l.location}
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
        <div className="container py-5"></div>
      </div>
    </div>
  );
}
