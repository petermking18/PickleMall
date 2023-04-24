import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRightAlt } from "@mui/icons-material";
import { Button, Stack, ButtonGroup } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import MapComponent from "../../Components/MapComponent/MapComponent";

import locations from "../../Helpers/Locations";

import "./Locations.scss";

export default function Locations() {
  const [locationsIndex, setLocationsIndex] = useState(0);
  const [selectedState, setSelectedState] = useState("");
  const filteredLocations = selectedState
    ? locations.filter((l) => l.state === selectedState)
    : locations;

  const availableStates = [
    ...new Set(locations.map((location) => location.state)),
  ].sort();

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

  return (
    <div className="locations">
      <div className="container">
        <h1 className="about-header font-barlow-condensed text-deep-blue">
          LOCATIONS<span className="text-pickle-green">.</span>
        </h1>
        {/* <MapComponent /> */}
        <img src="https://placehold.jp/1300x620.png" alt="map-placeholder" />
        <ButtonGroup>
          <Button
            color={selectedState == "" ? "kitchenGreen" : "lightGray"}
            variant="contained"
            className="location-button"
            onClick={() => setSelectedState("")}
          >
            All Locations
          </Button>
          {availableStates.map((location) => (
            <Button
              key={location.name}
              color={selectedState == location ? "kitchenGreen" : "lightGray"}
              variant="contained"
              className="location-button"
              onClick={() => setSelectedState(location)}
            >
              {location}
            </Button>
          ))}
        </ButtonGroup>
        <div className="section-3">
          <div className="locations container-fluid px-0 py-5">
            <Slider
              {...locationsSliderSettings}
              ref={(slider) => (locationsSlider = slider)}
            >
              {filteredLocations.map((l, idx) => (
                <div key={idx} className={"card-wrapper"}>
                  <div className={"card"}>
                    <div className={"card-top-photo-wrapper"}>
                      {/* todo: number of courts badge,
                                        .before-first-card make width match,
                                        paging buttons
                                     */}
                      <img
                        className={"card-top-photo"}
                        src="https://placehold.jp/400x150.png"
                        alt={"Courts"}
                      />
                      {/* <img
                        className={"pickle-circle"}
                        src="https://placehold.jp/400x150.png"
                        alt={"Pickle mall"}
                      /> */}
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
                          <div
                            className={"text-kitchen-green not-open-message"}
                          >
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
      </div>
    </div>
  );
}
