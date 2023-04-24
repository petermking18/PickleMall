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

    {
      name: "youtube,",
      icon: youtubeIcon,
      link: "",
    },

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
      <div className={"container"}>
        {/* col1 */}
        <Grid
          container
          spacing={3}
          className={"mt-2 mb-1 text-nowrap align-items-center"}
        >
          <Grid xs={4}>
            <div>
              <a href={"/"} className={"logo d-inline-block py-2"}>
                <img className={""} src={logo} alt={"Pickle Mall"} />
              </a>
            </div>
            <p className="footer-text">
              Picklemall Coming soon to a city near you! Please leave your
              information for discounted rates and to stay tuned in with any
              news.
            </p>
          </Grid>
          {/* col2 */}
          <Grid xs={4} className={"d-flex flex-column"}>
            <div className="footer-links">
              <a
                href={"/events"}
                className={"small link-normal text-center text-sm-start"}
              >
                Events
              </a>
              <a className={"small link-normal text-center text-sm-start"}>
                Shop
              </a>
              <a className={"small link-normal text-center text-sm-start"}>
                Membership
              </a>
              <a className={"small link-normal text-center text-sm-start"}>
                Contact Us
              </a>
            </div>
          </Grid>
          {/* col3 */}
          <Grid xs={4}>
            <div className="footer-right">
              <p>Convenient courts.</p>
              <p>Controlled climate.</p>
              <p>Consistent competition.</p>
            </div>
            <div className="d-flex">
              {socials.map((social) => (
                <div key={social.name} className="social-icon">
                  <a href={social.link} target="_blank">
                    <img src={social.icon} alt={social.name} />
                  </a>
                </div>
              ))}
            </div>
          </Grid>
          {/* bottom row */}
          <Grid xs={12} sm={3} className={"text-center text-sm-start"}>
            <small>© Copyright Pickle Mall 2023.</small>
          </Grid>
          <Grid xs={12} md={9} className={"d-flex flex-column flex-sm-row"}>
            <a
              href={"/"}
              className={"small link-normal text-center text-sm-start"}
            >
              <small>Privacy Policy</small>
            </a>
            <span className={"d-none d-sm-inline"}>&emsp;|&emsp;</span>
            <a
              href={"/"}
              className={"small link-normal text-center text-sm-start"}
            >
              <small>Terms of Service</small>
            </a>
            <span className={"d-none d-sm-inline"}>&emsp;|&emsp;</span>
            <a
              href={"/"}
              className={"small link-normal text-center text-sm-start"}
            >
              <small>Do Not Sell My Information</small>
            </a>
          </Grid>
        </Grid>
      </div>
    </footer>
  );
}
