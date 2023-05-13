import React from "react";
import theme from "./theme";
import {ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import {BrowserRouter, Routes, Route} from "react-router-dom";

import Nav2 from "./Components/Nav2/Nav2";
import Footer from "./Components/Footer/Footer";

import Landing from "./Pages/Landing/Landing";
import Home from "./Pages/Home/Home";
import WhatToExpect from "./Pages/WhatToExpect/WhatToExpect";
import Locations from "./Pages/Locations/Locations";
import About from "./Pages/About/About";
import ContactForm from "./Pages/ContactForm/ContactForm";

import "./custom-bootstrap.scss";
import "./App.scss";

import ScrollTop from "./ScrollTop"

const App = () => (
    <ThemeProvider theme={theme}>
        <CssBaseline/>
        <BrowserRouter>
            <ScrollTop/>
            <Nav2/>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"*"} element={<Home/>}/>
                <Route path={"/whattoexpect"} element={<WhatToExpect/>}/>
                <Route path={"/locations"} element={<Locations/>}/>
                <Route path={"/about"} element={<About/>}/>
                <Route path={"/contact"} element={<ContactForm/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    </ThemeProvider>
);

export default App;
