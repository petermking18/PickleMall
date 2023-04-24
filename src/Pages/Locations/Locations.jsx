import React from "react";

import MapComponent from "../../Components/MapComponent/MapComponent";

export default function Locations() {
  return (
    <div className="locations">
      <div className="container">
        <h1 className="about-header font-barlow-condensed text-deep-blue">
          LOCATIONS<span className="text-pickle-green">.</span>
        </h1>
        <MapComponent
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${"AIzaSyB5LbzampH7HesfgFPaR9t4UPGGUYuOD9s"}&v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          isMarkerShown={true}
        />
      </div>
    </div>
  );
}
