import React from "react"
import { ThemeProvider } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import theme from "./theme"

import { BrowserRouter, Routes, Route } from "react-router-dom"

import Landing from './Pages/Landing/Landing'

import "./custom-bootstrap.scss"

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
)

export default App
