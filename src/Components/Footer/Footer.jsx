import React from "react";
import Grid from "@mui/material/Unstable_Grid2";

import twitterIcon from "./Icons/Twitter.png";
import facebookIcon from "./Icons/Facebook.png";
import instagramIcon from "./Icons/Instagram.png";
import youtubeIcon from "./Icons/Youtube.png";
import linkedinIcon from "./Icons/Linkedin.png";
import tiktokIcon from "./Icons/Tiktok.png";

import logo from "../../Assets/logo.svg";
import "./Footer.scss";

export default function Footer() {
    const socials = [
        {
            name: "twitter,",
            icon: twitterIcon,
            link: "",
        },
        {
            name: "facebook,",
            icon: facebookIcon,
            link: "",
        },

        {
            name: "instagram,",
            icon: instagramIcon,
            link: "https://www.instagram.com/thepicklemall/",
        },

        // {
        //     name: "youtube,",
        //     icon: youtubeIcon,
        //     link: "",
        // },

        {
            name: "linkedin,",
            icon: linkedinIcon,
            link: "",
        },

        {
            name: "tiktok,",
            icon: tiktokIcon,
            link: "https://www.tiktok.com/@thepicklemall",
        },
    ];
    return (
        <footer className={"bg-deep-blue text-light"}>
            <div className={"footer-container"}>
                {/* col1 */}
                <Grid
                    container
                    spacing={3}
                    className={"mt-2 mb-1 text-nowrap align-items-center"}
                >
                    <Grid xs={12} md={4}>
                        <div>
                            <a href={"/"} className={"logo d-inline-block py-2"}>
                                <img className={"footer-logo"} src={logo} alt={"Pickle Mall"}/>
                            </a>
                        </div>
                        <p className="footer-text fs-12px">
                            Book your court time now and experience the thrill of pickleball at our indoor facility! Our
                            courts are available for all skill levels and guarantee an exciting time. Reserve your court
                            today and have a blast!
                        </p>
                    </Grid>
                    {/* col2 */}
                    <Grid xs={12} md={4} className={"d-flex flex-column"}>
                        <div className="footer-links fs-16px">
                            <a
                                className={"small link-normal text-center text-sm-start"}
                                href="/whattoexpect"
                            >
                                What to Expect
                            </a>
                            <a
                                className={"small link-normal text-center text-sm-start"}
                                href="/locations"
                            >
                                Locations
                            </a>
                            <a className={"small link-normal text-center text-sm-start"}>
                                Events
                            </a>
                            <a
                                href={"/about"}
                                className={"small link-normal text-center text-sm-start"}
                            >
                                About
                            </a>
                        </div>
                    </Grid>
                    {/* col3 */}
                    <Grid xs={12} md={4}>
                        <div className="footer-right font-barlow-condensed py-2 fs-24px lh-29px mb-3">
                            <p className={'my-0'}>Convenient courts.</p>
                            <p className={'my-0'}>Controlled climate.</p>
                            <p className={'my-0'}>Consistent competition.</p>
                        </div>
                        <div className="d-flex">
                            {socials.map((social) => (
                                <div key={social.name} className="social-icon">
                                    <a href={social.link} target="_blank">
                                        <img src={social.icon} alt={social.name}/>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </Grid>
                    {/* bottom row */}
                    <Grid xs={12} sm={3} className={"text-center text-sm-start"}>
                        <span className={'fs-12px'}>© Copyright Picklemall Inc. 2023.</span>
                    </Grid>
                    <Grid xs={12} md={9} className={"d-flex flex-column flex-sm-row fs-12px"}>
                        <a
                            href={"/"}
                            className={"small link-normal text-center text-sm-start"}
                        >
                            <span>Privacy Policy</span>
                        </a>
                        <span className={"d-none d-sm-inline"}>&emsp;|&emsp;</span>
                        <a
                            href={"/"}
                            className={"small link-normal text-center text-sm-start"}
                        >
                            <span>Terms of Service</span>
                        </a>
                        <span className={"d-none d-sm-inline"}>&emsp;|&emsp;</span>
                        <a
                            href={"/"}
                            className={"small link-normal text-center text-sm-start"}
                        >
                            <span>Do Not Sell My Information</span>
                        </a>
                    </Grid>
                </Grid>
            </div>
        </footer>
    );
}
