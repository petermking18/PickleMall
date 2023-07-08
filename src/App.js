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
import About from "./Pages/About/About";
import ContactForm from "./Pages/ContactForm/ContactForm";
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy"
import TOU from './Pages/TOU/TOU'

import "./custom-bootstrap.scss";
import "./App.scss";

import ScrollTop from "./ScrollTop"

const App = () => (
    <ThemeProvider theme={theme}>
        <CssBaseline/>
        <BrowserRouter>
            <ScrollTop/>
            <div className={'root-page'}>
                <Nav/>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"*"} element={<Home/>}/>
                    <Route path={"/whattoexpect"} element={<WhatToExpect/>}/>
                    {/*<Route path={"/locations"} element={<Locations/>}/>*/}
                    <Route path={"/about"} element={<About/>}/>
                    <Route path={"/contact"} element={<ContactForm/>}/>
                    <Route path={"/privacypolicy"} element={<PrivacyPolicy/>}/>
                    <Route path={"/termsofservice"} element={<TOU/>}/>
                </Routes>
                <Footer/>
            </div>
        </BrowserRouter>
    </ThemeProvider>
);

export default App;
