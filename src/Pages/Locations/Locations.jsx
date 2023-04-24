import React from "react";

import Nav2 from "../../Components/Nav2/Nav2";
import Footer from "../../Components/Footer/Footer";

import MapComponent from "../../Components/MapComponent/MapComponent";

export default function Locations() {
  return (
    <div className="locations">
      <Nav2 />
      <h1 className="about-header font-barlow-condensed text-deep-blue">
        LOCATIONS<span className="text-pickle-green">.</span>
      </h1>
      <MapComponent center={{ lat: 37.7749, lng: -122.4194 }} zoom={15} />
      <Footer />
    </div>
  );
}
