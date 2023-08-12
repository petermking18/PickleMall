import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import {Link} from "react-router-dom";

import twitterIcon from "./Icons/Twitter.png";
import facebookIcon from "./Icons/Facebook.png";
import instagramIcon from "./Icons/Instagram.png";
import youtubeIcon from "./Icons/Youtube.png";
import linkedinIcon from "./Icons/Linkedin.png";
import tiktokIcon from "./Icons/Tiktok.png";

import logo from "../../Assets/logo.svg";
import appStore from './appStore.png';
import "./Footer.scss";
import Common from "../../Common";

export default function Footer() {
    const socials = [
        {
            name: "twitter,",
            icon: twitterIcon,
            link: "https://twitter.com/thepicklemall",
        },
        {
            name: "facebook,",
            icon: facebookIcon,
            link: "https://www.facebook.com/profile.php?id=100091996094267",
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
            link: "https://www.linkedin.com/company/picklemall/",
        },
        {
            name: "tiktok,",
            icon: tiktokIcon,
            link: "https://www.tiktok.com/@thepicklemall",
        }
    ];
    return (
        <footer className={"bg-deep-blue text-light"}>
            <div className={"bg-deep-blue text-light"}>
                <div className={"container"}>
                    <div className={"footer-container"}>
                        {/* col1 */}
                        <Grid container
                              spacing={3}
                              className={"mt-0 mb-1 text-nowrap align-items-center"}>
                            <Grid xs={12} md={4}>
                                <div>
                                    <Link to={"/"} className={"logo d-inline-block py-2"}>
                                        <img className={"footer-logo"} src={logo} alt={"Picklemall"}/>
                                    </Link>
                                </div>
                                <p className="footer-text fs-12px">
                                    Book your court time now and experience the thrill of pickleball at our indoor
                                    facility!
                                    Our courts are available for all skill levels and guarantee an exciting time.
                                    Reserve
                                    your court today and have a blast!
                                </p>
                            </Grid>
                            {/* col2 */}
                            <Grid xs={12} md={4} className={"ps-md-5 d-flex flex-column"}>
                                <div className="footer-links fs-16px pl-md-5">
                                    <Link to={"/HowItWorks"}
                                          className={"small link-normal text-start"}>
                                        How it Works
                                    </Link>
                                    <Link to={"/Membership"}
                                          className={"small link-normal text-start"}>
                                        Membership
                                    </Link>
                                    <Link to={"/About"}
                                          className={"small link-normal text-start"}>
                                        About
                                    </Link>
                                    <Link to={"/FAQ"}
                                          className={"small link-normal text-start"}>
                                        FAQ
                                    </Link>
                                    <Link to={"/Press"}
                                          className={"small link-normal text-start"}>
                                        Press
                                    </Link>
                                    {Common.BookingLink &&
                                        <Link to={Common.BookingLink}
                                              className={"small link-normal text-start"}>
                                            Book Now
                                        </Link>
                                    }
                                </div>
                            </Grid>
                            {/* col3 */}
                            <Grid xs={12} md={4}>
                                <div className="footer-right font-barlow-condensed py-2 fs-24px lh-29px mb-3">
                                    <p className={'my-0'}>Convenient courts.</p>
                                    <p className={'my-0'}>Controlled climate.</p>
                                    <p className={'my-0'}>Consistent competition.</p>
                                </div>
                                <div className="d-flex justify-content-center justify-content-md-start">
                                    {socials.map((social) => (
                                        <div key={social.name} className="social-icon">
                                            <Link to={social.link} target="_blank">
                                                <img src={social.icon} alt={social.name}/>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </Grid>
                            <Grid xs={12} className={"mb-4"}>
                                {Common.AppStoreLink &&
                                    <Link to={Common.AppStoreLink}
                                          className={"no-decoration"}
                                          target={"_blank"}>
                                        <div className={"d-none d-md-block"}>
                                            <p className={"font-barlow-condensed fs-20px mt-0 mb-3"}>
                                                GET THE PICKLEMALL APP
                                            </p>
                                            <img alt={"App store"} src={appStore}
                                                 style={{width: '128px', height: '40px'}}/>
                                        </div>
                                    </Link>
                                }
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
            <div className={"bg-kitchen-green text-bright-white"}>
                <div className={"container"}>
                    <Grid container spacing={3} className={"overflow-y-hidden"}>
                        <Grid xs={12} sm={2.2} className={"text-center text-sm-start d-none d-md-block mb-0"}>
                            <span className={'fs-12px'}>© Copyright Picklemall Inc. 2023.</span>
                        </Grid>
                        <Grid xs={12} md={9} className={"d-flex flex-column flex-sm-row fs-12px mb-0 policy-row"}>
                            <Link to={"/PrivacyPolicy"}
                                  className={"small link-normal text-center text-sm-start mb-2 mb-md-0 d-flex justify-content-center align-items-center align-middle"}>
                                <span>Privacy Policy</span>
                            </Link>
                            <span className={"d-none d-sm-flex align-items-center"}>
                                <span className={"d-flex align-items-center"}>&emsp;|&emsp;</span>
                            </span>
                            <Link to={"/TermsOfService"}
                                  className={"small link-normal text-center text-sm-start mb-2 mb-md-0 d-flex justify-content-center align-items-center"}>
                                <span>Terms of Service</span>
                            </Link>
                            {/*<span className={"d-none d-sm-inline"}>&emsp;|&emsp;</span>*/}
                            {/*<Link*/}
                            {/*    to={"/"}*/}
                            {/*    className={"small link-normal text-center text-sm-start"}*/}
                            {/*>*/}
                            {/*    <span>Do Not Sell My Information</span>*/}
                            {/*</Link>*/}
                        </Grid>
                        <Grid xs={12} sm={3} className={"text-center text-sm-start d-block d-md-none mb-3"}>
                            <span className={'fs-12px'}>© Copyright Picklemall Inc. 2023.</span>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </footer>
    );
}
