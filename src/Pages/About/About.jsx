import React from "react";

import stock7 from "../../Assets/Stock7.jpg";
import overlay from '../../Assets/Stock7-overlay.png';

import "./About.scss";

export default function About() {
    return (
        <div className="about">
            <div className="d-flex">
                <div className="about-content">
                    <h1 className="about-header font-barlow-condensed text-deep-blue fs-35px mt-md-3 fs-md-80px mb-2">
                        ABOUT PICKLEMALL<span className="text-pickle-green">.</span>
                    </h1>
                    <h1 className="font-barlow-condensed text-deep-blue fs-24px fs-md-32px">
                        Who we are<span className="text-pickle-green">.</span>
                    </h1>
                    <p className="about-text mb-5 fs-14px fs-md-16px">
                        Picklemall is a pioneering indoor pickleball concept that combines the adaptive reuse of mall
                        spaces, cutting-edge technology, and a genuine passion for the game. We are proud to introduce
                        our first U.S. location at Arizona Mills, marking the beginning of our rapid nationwide
                        expansion plan. With the backing of pickleball enthusiast and billionaire financier Steve Kuhn,
                        we are on a mission to establish 50 Picklemall locations across the country within the next 24
                        months.
                        <br/>
                        <br/>
                        Under the leadership of CEO West Shaw, we aim to revolutionize the pickleball experience by
                        significantly reducing wait times and setting new standards for championship-style courts. By
                        securing substantial capital investment from Steve Kuhn and an impressive group of investors, we
                        are poised to transform the pickleball landscape in the United States.
                        <br/>
                        <br/>
                        Our focus is not only on meeting the increasing demand for pickleball but also on embracing the
                        evolving demographics of the sport. As pickleball attracts a broader range of players, including
                        a growing number of younger enthusiasts, we are committed to providing exceptional facilities
                        and experiences that cater to all skill levels and ages.
                        <br/>
                        <br/>
                        At Picklemall, we believe in harnessing the power of technology to enhance the player
                        experience. Soon, our user-friendly mobile app will allow players to easily schedule games,
                        track their performance, and improve their skills. Additionally, our courts will be equipped
                        with cameras, enabling real-time analysis and learning opportunities for players.
                        <br/>
                        <br/>
                        We are passionate about repurposing existing indoor mall and strip mall properties, breathing
                        new life into vacant spaces. By offering convenient, climate-controlled environments, we ensure
                        that pickleball can be enjoyed year-round, regardless of the weather conditions.
                        <br/>
                        <br/>
                        The pickleball community is at the core of our vision, and we are dedicated to creating vibrant
                        hubs where players can come together. Picklemall facilities will host leagues, clinics, open
                        play, tournaments, and drop-in games, fostering a sense of camaraderie and friendly competition.
                        <br/>
                        <br/>
                        Our commitment to excellence extends to our Pro Shop, where players can find Picklemall-branded
                        merchandise and professional pickleball equipment from our premier partner, JOOLA USA. We also
                        provide equipment rental options, ensuring accessibility for all players.
                        <br/>
                        <br/>
                        Join us on this exciting journey as we redefine the pickleball experience and make it accessible
                        to a wider audience. Stay updated on our progress at Arizona Mills and our rapid U.S. expansion
                        by following us on Instagram or visiting our website at www.thepicklemall.com.

                    </p>
                </div>
                <div className="about-image-container">
                    <div className="img-wrapper">
                        <img src={stock7} alt="racket" className="racket-photo"/>
                        <img src={overlay} alt={'overlay'} className={'racket-photo-overlay'}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
