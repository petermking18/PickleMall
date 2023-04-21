import React from "react";
import theme from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";

import Landing from "./Pages/Landing/Landing";

import Home from "./Pages/Home/Home";
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
        <Route path={"/about"} element={<About />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
