import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Stack, Collapse, IconButton } from "@mui/material";
import logo from "../../Assets/logo.svg";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import "./Nav2.scss";

export default function Nav2() {
  const navItems = [
    {
      route: "/",
      text: "Home"
    },
    // {
    //   route: "/WhatToExpect",
    //   text: "What To Expect",
    // },
    // {
    //   route: "/Locations",
    //   text: "Locations",
    // },
    // {
    //   route: "/",
    //   text: "Events",
    // },
    {
      route: "/About",
      text: "About",
    },
  ];

  const [showMobileNav, setShowMobileNav] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showMobileNav ? 'hidden' : 'unset'
  }, [showMobileNav])

  const navLinks = navItems.map((i, idx) => (
    <Link
      key={i.text}
      to={i.route}
      className="nav-item"
      onClick={() => setShowMobileNav(false)}
    >
      {i.text}
      {showMobileNav && <hr className="hr-soft-serve" />}
    </Link>
  ));

  return (
    <div className="nav2">
      <nav className="navbar bg-volley-blue">
        <div className="container d-flex justify-content-between align-items-center">
          <Link to="/" className="logo d-inline-block py-2">
            <img className="mx-3" src={logo} alt={"Picklemall"} />
          </Link>
          <div className="d-md-none">
            <IconButton
              className="text-light"
              aria-label="Expand navigation"
              onClick={(e) => setShowMobileNav(!showMobileNav)}
            >
              {showMobileNav ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </div>
          <Stack
            direction="row"
            spacing={{ md: 4, lg: 8 }}
            className="nav-items d-none d-md-flex"
          >
            {navLinks}
          </Stack>
        </div>
        <div className="d-md-none">
          <Collapse in={showMobileNav} timeout={"auto"} unmountOnExit>
            <Stack className="nav-items">{navLinks}</Stack>
          </Collapse>
        </div>
      </nav>
    </div>
  );
}
