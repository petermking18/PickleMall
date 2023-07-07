import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {Stack, Collapse, IconButton, Button} from "@mui/material";
import logo from "../../Assets/logo.svg";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Common from "../../Common";

import "./Nav.scss";

export default function Nav() {
    const navItems = [
        {
            route: "/HowItWorks",
            text: "How It works"
        },
        {
            route: "/About",
            text: "About",
        },
        {
            route: "/Press",
            text: "Press"
        }
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
            <hr className="d-block d-md-none hr-soft-serve"/>
        </Link>
    ));

    return (
        <div className="nav2">
            <nav className="navbar bg-deep-blue">
                <div className="container d-flex justify-content-between align-items-center">
                    <Link to="/" className="logo d-inline-block pt-3 pb-3">
                        <img className="mx-3" src={logo} alt={"Pickle Mall"}/>
                    </Link>
                    <div className="d-md-none">
                        <IconButton
                            className="text-light"
                            aria-label="Expand navigation"
                            onClick={(e) => setShowMobileNav(!showMobileNav)}
                        >
                            {showMobileNav ? <CloseIcon/> : <MenuIcon/>}
                        </IconButton>
                    </div>
                    <Stack
                        direction="row"
                        spacing={{md: 4, lg: 4}}
                        className="nav-items d-none d-md-flex"
                    >
                        {navLinks}
                        <Link to={Common.BookingLink}
                              className={'no-decoration my-auto'}>
                            <Button variant={"contained"}
                                    color={"rallyBlue"}
                                    disableElevation>
                                Book a Court
                            </Button>
                        </Link>
                    </Stack>
                </div>
                <div className="d-md-none">
                    <Collapse in={showMobileNav} timeout={"auto"} unmountOnExit>
                        <Stack className="nav-items">
                            {navLinks}
                            <Link
                                to={Common.BookingLink}
                                className="nav-item"
                                onClick={() => setShowMobileNav(false)}
                            >
                                Book a Court
                                <hr className="hr-soft-serve"/>
                            </Link>
                        </Stack>
                    </Collapse>
                </div>
            </nav>
        </div>
    );
}
