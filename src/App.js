import React from "react"
import theme from "./theme"
import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"

import { BrowserRouter, Routes, Route } from "react-router-dom"

import Landing from './Pages/Landing/Landing'

import Home from './Pages/Home/Home'

import "./custom-bootstrap.scss"
import "./App.scss"

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Landing />} />
        <Route path={'/home'} element={<Home />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
)

export default App
