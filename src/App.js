import React from "react";
import theme from "./theme";
import {ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import {BrowserRouter, Routes, Route} from "react-router-dom";

// import Nav from "./V3/Components/Nav/Nav";
import Nav from "./Components/Nav3/Nav";
import Footer from "./V3/Components/Footer/Footer";

import Home from "./V3/Pages/Home/Home";
import About from "./V3/Pages/About/About";
// import ContactForm from "./Pages/ContactForm2/ContactForm";
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy"
import TOU from './Pages/TOU/TOU'
import Press from './V3/Pages/Press/Press'

import "./custom-bootstrap.scss";
import "./App.scss";

import ScrollTop from "./ScrollTop"
import HowItWorks from "./V3/Pages/HowItWorks/HowItWorks";

import ContactForm from "./V3/Components/ContactForm/ContactForm";

// import CouponPage from './Pages/Coupon/CouponPage'

import Membership from './V3/Pages/Membership/Membership'

import FAQ from './Pages/FAQ/FAQ'

const App = () => {
    const bodyOnly = () => window.location.pathname.toLowerCase().startsWith('/coupon')


    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <BrowserRouter>
                <ScrollTop/>
                <div className={'root-page v3'}>
                    {!bodyOnly() && <Nav/>}
                    <Routes>
                        <Route path={"/"} element={<Home/>} title={"Picklemall"}/>
                        <Route path={"*"} element={<Home/>} title={"Picklemall"}/>
                        <Route path={"/HowItWorks"} element={<HowItWorks/>} title={"How It Works"}/>
                        <Route path={"/Membership"} element={<Membership/>} title={"Membership"}/>
                        {/*<Route path={"/whattoexpect"} element={<WhatToExpect/>}/>*/}
                        {/*<Route path={"/locations"} element={<Locations/>}/>*/}
                        <Route path={"/about"} element={<About/>} title={"About"}/>
                        <Route path={"/Press"} element={<Press/>} title={"Picklemall Press"}/>
                        <Route path={"/contact"} element={<ContactForm/>} title={"Contact Information"}/>
                        <Route path={"/privacypolicy"} element={<PrivacyPolicy/>} title={"Privacy Policy"}/>
                        <Route path={"/termsofservice"} element={<TOU/>} title={"Terms of Service"}/>
                        <Route path={"/faq"} element={<FAQ/>} title={"Frequently Asked Questions"}/>

                        {/*<Route path={"/coupon/:couponId"} element={<CouponPage/>} title={"Coupon"}/>*/}
                    </Routes>
                    {!bodyOnly() && <Footer/>}
                </div>
            </BrowserRouter>
        </ThemeProvider>
    )
};

export default App;
