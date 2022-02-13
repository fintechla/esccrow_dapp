import React from 'react'
import ReactDOM from 'react-dom'

import './global.css'

import { Landing } from './pages/Landing'
import { initContract } from './utils'
import { ThemeContext } from './contexts/ThemeContext'

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


window.nearInitPromise = initContract()
  .then(() => {
    ReactDOM.render(
      <BrowserRouter>
        <ThemeContext>
          <Routes>
            <Route index element={<Landing />} />
          </Routes>
        </ThemeContext>
      </BrowserRouter>
      ,
      document.querySelector('#root')
    )
  })
  .catch(console.error)
