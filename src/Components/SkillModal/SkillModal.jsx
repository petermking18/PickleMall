import React from "react";

import YesExample from "./Assets/yesexample.png";
import NoExample from "./Assets/noexample.png";

import Info from "./Assets/Info.png";
import FullModal from "./Assets/FullModal.png";

import "./SkillModal.scss";

export default function SkillModal() {
  return (
    <div className="skill-modal container">
      <h2 className="modal-header font-barlow-condensed text-deep-blue">
        Skill Level Evaluation<span className="text-pickle-green">.</span>
      </h2>
      <div className="content">
        <div className="text-content">
          <p className="section-2-text">
            The simple “Yes or No” way to figure our your skill level
          </p>
          <div className="d-flex my-3">
            <img src={YesExample} alt="yes_example" className="img-fluid" />
            <p className="section-2-text mx-5">
              = "Yes" to five or more statements
            </p>
          </div>
          <div className="d-flex my-3">
            <img src={NoExample} alt="no_example" className="img-fluid" />
            <p className="section-2-text mx-5">
              = "No" to five or more statements
            </p>
          </div>
        </div>
        <img src={Info} className="info-img img-fluid" alt="info" />
      </div>
    </div>
  );
}
