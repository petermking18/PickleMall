import React, {useState} from "react";

import PageHeader from "../../Components/PageHeader/PageHeader";

import tempe_image from "./tempe_image.png";
import tempe_play from "./tempe_play.png";

import "./About.scss";

export default function About() {
    return (
        <div className={"about"}>
            <PageHeader title={"PICKLEMALL STORY"}/>
            <div className={"section-welcome container pt-4 pt-md-5 pb-3 pb-md-4"}>
                <h1 className={"font-barlow-condensed fs-24px fs-md-50px fw-600 text-center hy-5 py-2 py-md-0 hy-md-3"}>
                    WELCOME TO <span className={"text-volley-blue"}>PICKLEMALL</span>
                </h1>
                <p className={"fs-14px fs-md-28px"}>
                    Picklemall combines the adaptive reuse of mall spaces, cutting-edge technology, and a genuine
                    passion for the game. With the introduction of our first U.S. location at Arizona Mills in Tempe,
                    Arizona, we are on a mission to establish 50 Picklemall locations across the country within the next
                    24 months.
                </p>
                <img className={"tempe-image my-5"} src={tempe_image} alt={"Tempe"}/>
            </div>
            <div className={"section-mission bg-deep-blue py-5"}>
                <div className={"container text-bright-white py-md-5"}>
                    <h1 className={"font-barlow-condensed fs-24px fs-md-50px fw-600 text-center mt-0"}>
                        OUR MISSION
                    </h1>
                    <p className={"fs-14px fs-md-28px"}>
                        Our focus is not only on meeting the increasing demand for pickleball, but doing so in a way
                        that is pushing the envelope of technological innovation in the digital age. We are committed to
                        providing a seamless process for players of any skill level to book, compete, improve, and
                        repeat through the integration of court cameras, simple booking processes, and premium
                        facilities.
                        <br/><br/>
                        Our commitment goes beyond providing a location to play, but leading the charge in the growth of
                        a sport that has the ability to bring people together.
                    </p>
                </div>
            </div>
            <div className={"section-who py-5"}>
                <div className={"container py-md-5"}>
                    <h1 className={"font-barlow-condensed fs-24px fs-md-50px fw-600 text-center mt-0"}>
                        WHO WE ARE
                    </h1>
                    <p className={"fs-14px fs-md-28px"}>
                        Under the backing of Steve Kuhn, Picklemall is poised to become the gold standard for pickleball
                        facilities nationwide. As the founder of Major League Pickleball, Kuhn has a deep understanding
                        of the sport and its potential for growth around the world, and the way that it is able to bring
                        people and communities together.
                        <br/><br/>
                        At Picklemall, we want to be on the cutting edge of technology that extends beyond the court
                        booking process. We do this by harnessing the power of technology to enhance the player
                        experience.
                        <br/><br/>
                        Our user-friendly mobile app, combined with court cameras will allow players to easily schedule
                        and book games, share instant replays, and improve their skills with every visit.
                        <br/><br/>
                        By offering convenient, climate-controlled environments, we strive to grow the game of
                        pickleball to to make it approachable and enjoyable, regardless of weather conditions and skill
                        level.
                    </p>
                    <img className={"tempe-play my-3"} src={tempe_play} alt={"Tempe"}/>
                </div>
            </div>
        </div>
    )
}