import React from "react";

import Newbie from "./Assets/newbie.png";
import Novice from "./Assets/novice.png";
import Low from "./Assets/low.png";
import High from "./Assets/high.png";
import Advanced from "./Assets/advanced.png";
import Expert from "./Assets/expert.png";

import "./SkillModal.scss";

export default function SkillModal() {
  const attributes = [
    // first box
    [
      "I am familiar with the starting position for each point",
      "I am adept at serving effectively",
      "I prefer to let the serve hit the gorund",
      "I am starting to understand how to keep score",
      "I am able to maintain rallies",
      "I understand what a dink shot is",
    ],
    // second box
    [
      "I have a good understanding of the basic rules of the game",
      "I am attempting to make my serves and returns more accurate",
      "I am trying to make my dinks more shallow and low",
      "I am able to hit multiple dinks in succession",
      "I can usually hit a backhand shot when required",
      "I am striving to add more power or finesse to my playing style",
    ],
    // third box
    [
      "I am well-versed in the regulations of net play",
      "My serves and returns are usually sent to the back of the court",
      "I often attempt to exceute a third shot drop shot",
      "I think carefully about where to place the ball",
      "I have a wide range of shots I can call upon",
      "I collaborate with my partner to win the point",
    ],
    // fourth box
    [
      "I have the ability to predict my adversaties' strokes in advance",
      "When presented with a chance, I usually make the most of it",
      "Drop shots and dink shots are usually excecuted with precision",
      "I almost always stick to the non-volley line",
      "When with a skilled player, I can handle almost any stroke",
      "I strive to stay patient and take advantage of any opportunities",
    ],
    // fifth box
    [
      "My ability to convert a hard shot to a soft shot is dependable",
      "I remain calm and wait for an opportuity to present itself",
      "I make very few mistakes that are not forced by my opponent",
      "I frequently use both strength and technique to my benefit",
      "I can often keep a rally going for 40 shots or more",
      "I have participated in and/or won tournatments at 4.5 or higher",
    ],
  ];

  const paddlePhotos = [Newbie, Novice, Low, High, Advanced, Expert];

  return (
    <div className="skill-modal container">
      <h2 className="modal-header font-barlow-condensed text-deep-blue">
        Skill Level Evaluation<span className="text-pickle-green">.</span>
      </h2>
      <p className="section-2-text">
        The simple “Yes or No” way to figure our your skill level
      </p>
      <p className="section-2-text">= "Yes" to five or more statements</p>
      <p className="section-2-text">= "No" to five or more statements</p>
      <div>
        {attributes.map((attributeList, index) => (
          <div
            className="d-flex justify-content-between"
            key={attributeList[0]}
          >
            <ul className="attribute-list shadow p-5 w-50">
              {attributeList.map((attributeItem) => (
                <li className="green-bulletpoint" key={attributeItem}>
                  {attributeItem}
                </li>
              ))}
            </ul>
            <img src={paddlePhotos[index]} alt="skill-level" />
          </div>
        ))}
      </div>
    </div>
  );
}
