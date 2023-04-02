import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from './theme'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Nav from './Components/Nav/Nav'
import UtilityBar from './Components/UtilityBar/UtilityBar'

import './custom-bootstrap.scss'

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <div className="App">
      {/* <UtilityBar/> */}
      <Nav/>
      <p>Pickle mall!</p>
    </div>
  </ThemeProvider>
)

export default App
