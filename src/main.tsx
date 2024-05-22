import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import Home from './pages/home'

import { SimpleCounter } from './pages/simple_counter';
import { DisplayList } from './pages/display_list';
import ContextApi from './pages/context_api'
import { FecthCall } from './pages/fetch_call'


ReactDOM.createRoot(document.querySelector('#root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/simple_counter' element={<SimpleCounter />}></Route>
        <Route path='/display_list' element={<DisplayList />}></Route>
        <Route path='/context_api' element={<ContextApi />}></Route>
        <Route path='/fetch_call' element={<FecthCall />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
)
