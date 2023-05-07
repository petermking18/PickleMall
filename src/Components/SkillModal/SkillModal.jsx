import React from "react";

import YesExample from "./Assets/yesexample.png";
import NoExample from "./Assets/noexample.png";

import Info from "./Assets/Info.png";
import FullModal from "./Assets/FullModal.png";

import "./SkillModal.scss";

export default function SkillModal() {
  return (
    <div className="skill-modal">
      <div className="skill-modal-inner">
        <img src={FullModal} alt="Skill Modal" />
      </div>
    </div>
  );
}
