import React from "react";
import theme from "./theme";
import {ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import {BrowserRouter, Routes, Route} from "react-router-dom";

import Nav from "./Components/Nav3/Nav";
import Footer from "./Components/Footer/Footer";

import Landing from "./Pages/Landing/Landing";
import Home from "./Pages/Home2/Home";
import WhatToExpect from "./Pages/WhatToExpect/WhatToExpect";
import Locations from "./Pages/Locations/Locations";
import About from "./Pages/About2/About";
import ContactForm from "./Pages/ContactForm2/ContactForm";
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy"
import TOU from './Pages/TOU/TOU'
import Press from './Pages/Press/Press'

import "./custom-bootstrap.scss";
import "./App.scss";

import ScrollTop from "./ScrollTop"
import HowItWorks from "./Pages/HowItWorks/HowItWorks";

const App = () => (
    <ThemeProvider theme={theme}>
        <CssBaseline/>
        <BrowserRouter>
            <ScrollTop/>
            <div className={'root-page'}>
                <Nav/>
                <Routes>
                    <Route path={"/"} element={<Home/>} title={"Picklemall"}/>
                    <Route path={"*"} element={<Home/>} title={"Picklemall"}/>
                    <Route path={"/HowItWorks"} element={<HowItWorks/>} title={"How It Works"}/>
                    {/*<Route path={"/whattoexpect"} element={<WhatToExpect/>}/>*/}
                    {/*<Route path={"/locations"} element={<Locations/>}/>*/}
                    <Route path={"/about"} element={<About/>} title={"About"}/>
                    <Route path={"/Press"} element={<Press/>} title={"Picklemall Press"}/>
                    <Route path={"/contact"} element={<ContactForm/>} title={"Contact Information"}/>
                    <Route path={"/privacypolicy"} element={<PrivacyPolicy/>} title={"Privacy Policy"}/>
                    <Route path={"/termsofservice"} element={<TOU/>} title={"Terms of Service"}/>
                </Routes>
                <Footer/>
            </div>
        </BrowserRouter>
    </ThemeProvider>
);

export default App;
