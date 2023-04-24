import React from "react";

import Nav2 from "../../Components/Nav2/Nav2";
import Footer from "../../Components/Footer/Footer";

export default function WhatToExpect() {
  return (
    <div className="what-to-expect">
      <Nav2 />
      <div className="section-1">
        <h1 className="about-header font-barlow-condensed text-deep-blue">
          WHAT TO EXPECT<span className="text-pickle-green">.</span>
        </h1>
        <p>
          Welcome to Picklemall, the one-stop destination for all your
          pickleball needs. Whether you're a seasoned player or a beginner,
          we've got you covered with our state-of-the-art facilities, equipment,
          and expert coaching.
        </p>
      </div>
      <div className="section-2"></div>
      <Footer />
    </div>
  );
}
