import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import Home from './pages/home'
import Header from './components/header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SimpletCounterPage } from './pages/Simple-counter'


ReactDOM.createRoot(document.querySelector('#root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/simple-counter' element={<SimpletCounterPage />}></Route>
      </Routes>

    </BrowserRouter>
  </React.StrictMode>,
)
