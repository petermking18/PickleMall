import React from "react";

import "./About.scss";

export default function About() {
  return (
    <div className="about">
      <div className="container">
        <h1 className="about-header font-barlow-condensed text-deep-blue">
          ABOUT PICKLEMALL<span className="text-pickle-green">.</span>
        </h1>
        <div className="d-flex justify-content-between">
          <div>
            <div>
              <h1 className="font-barlow-condensed text-deep-blue">
                Who we are<span className="text-pickle-green">.</span>
              </h1>
              <p className="about-text">
                Indoor pickleball is the ultimate game-changer for enthusiasts
                of this addictive sport, offering a thrilling experience that
                surpasses outdoor play in every way. With Picklemall as the
                solution to the most significant challenges facing the game,
                players can enjoy the best of both worlds - a fast-paced,
                challenging game with no interruptions or distractions from the
                elements.
                <br />
                <br />
                Gone are the days of battling with unpredictable winds or harsh
                sunlight that can wreak havoc on your game. The controlled
                environment of indoor pickleball means that the game is played
                under ideal conditions, with consistent lighting, temperature,
                and court surface. This allows for more precise shots, strategic
                play, and a more enjoyable experience for players of all skill
                levels.
                <br />
                <br />
                But it's not just the weather that makes indoor pickleball
                superior. The Picklemall offers a one-of-a-kind playing
                experience, featuring state-of-the-art courts, equipment, and
                amenities that cater to players' every need. With a range of
                courts available, players can choose the ideal playing surface
                for their skill level and play style, ensuring a challenging and
                exciting game every time.
                <br />
                <br />
                In addition, Picklemall is committed to providing an inclusive
                and welcoming environment for players of all ages and
                backgrounds, fostering a sense of community and camaraderie
                among players. Whether you're a seasoned pro or a newcomer to
                the sport, you'll find everything you need to thrive at
                Picklemall, from top-notch coaching to a range of social events
                and tournaments.
                <br />
                <br />
                So why settle for outdoor pickleball when you can experience the
                ultimate indoor game at Picklemall? With superior facilities,
                ideal playing conditions, and a vibrant community of players,
                there's never been a better time to join the Picklemall
                revolution and take your game to the next level.
              </p>
            </div>
          </div>
          <div>
            <img
              src="https://placehold.jp/550x1000.png"
              alt="racket-photo"
              className="racket-photo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
