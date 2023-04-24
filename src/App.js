import React from "react";
import theme from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./Pages/Landing/Landing";

import Home from "./Pages/Home/Home";
import WhatToExpect from "./Pages/WhatToExpect/WhatToExpect";
import Locations from "./Pages/Locations/Locations";
import Events from "./Pages/Events/Events";
import About from "./Pages/About/About";

import "./custom-bootstrap.scss";
import "./App.scss";

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Landing />} />
        <Route path={"/home"} element={<Home />} />
        <Route path={"*"} element={<Home />} />
        <Route path={"/whattoexpect"} element={<WhatToExpect />} />
        <Route path={"/locations"} element={<Locations />} />
        <Route path={"/events"} element={<Events />} />
        <Route path={"/about"} element={<About />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
