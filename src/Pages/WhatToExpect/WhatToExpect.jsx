import React, { useState } from "react";

import SkillModal from "../../Components/SkillModal/SkillModal";

import InfoIcon from "./InfoIcon.png";

import { Button } from "@mui/material";
import Modal from "react-modal";

import "./WhatToExpect.scss";

export default function WhatToExpect() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const steps = [
    {
      title: "FIND A LOCATION",
      text: "When you arrive at the Picklemall location, simply check in at the front desk. Our friendly staff will guide you through the check-in process and point you in the direction of your court. *** add in (If you don’t have a paddle, you can rent one of our Joola x Picklemall paddles!)",
      image: "https://placehold.jp/550x250.png",
    },
    {
      title: "FIND A BOOKING",
      text: "Once you've selected your preferred location, you can book a court hour on the app or sign up for one of our leagues or clinics. Our app is easy to use and allows you to quickly book a court at a time that works best for you.",
      image: "https://placehold.jp/550x250.png",
    },
    {
      title: "CHECK IN AT THE FRONT DESK",
      text: "When you arrive at the Picklemall location, simply check in at the front desk. Our friendly staff will guide you through the check-in process and point you in the direction of your court. If you don’t have a paddle, you can rent one of our Joola x Picklemall paddles!",
      image: "https://placehold.jp/550x250.png",
    },
    {
      title: "PLAY & HAVE FUN!",
      text: " Once you've checked in, it's time to hit the court and have some fun! Our facilities are designed to provide an optimal pickleball experience with high-quality courts, equipment, and lighting.",
      image: "https://placehold.jp/550x250.png",
    },
  ];

  return (
    <div className="what-to-expect">
      <div className="container">
        <h1 className="about-header font-barlow-condensed text-deep-blue">
          WHAT TO EXPECT<span className="text-pickle-green">.</span>
        </h1>
        <p className="w-50">
          Welcome to Picklemall, the one-stop destination for all your
          pickleball needs. Whether you're a seasoned player or a beginner,
          we've got you covered with our state-of-the-art facilities, equipment,
          and expert coaching.
        </p>
        <div>
          {steps.map((step, index) => (
            <div key={step.title}>
              <h1 className="font-barlow-condensed text-deep-blue">
                STEP {index + 1}: {step.title}
              </h1>
              <div
                className={`d-flex align-items-center shadow ${
                  index % 2 === 0 ? "item-odd" : "item-even"
                }`}
              >
                <img src={step.image} alt="pickle-img" className="box-img" />
                <p className="px-5">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto w-50 my-5">
        <Button
          className="evaluation-button bg-lightGray text-deep-blue shadow w-100"
          onClick={() => setIsOpen(!modalIsOpen)}
        >
          <div className="d-flex justify-content-between align-items-center">
            <img src={InfoIcon} alt="?" className="mx-1" />
            <p className="mx-1">
              Don’t know your skill? Take a look at this evaluation
            </p>
            <span className={"material-symbols-outlined text-dark"}>
              arrow_forward
            </span>
          </div>
        </Button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setIsOpen(false)}
          contentLabel="Skills Modal"
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.65)",
            },
            content: {
              backgroundColor: "#f2f2f2",
            },
          }}
        >
          <button
            className="exit-modal-button"
            onClick={() => setIsOpen(false)}
          ></button>
          <SkillModal />
        </Modal>
      </div>
    </div>
  );
}
