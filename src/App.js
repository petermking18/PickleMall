import React from "react"
import theme from "./theme"
import { ThemeProvider } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"

import { BrowserRouter, Routes, Route } from "react-router-dom"

import Landing from './Pages/Landing/Landing'

import "./custom-bootstrap.scss"
import "./App.scss"

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
