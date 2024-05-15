import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import Home from './pages/home'
import Header from './components/header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SimpleCounter } from './pages/simple_counter';
import { DisplayList } from './pages/display_list';
import Footer from './components/footer'


ReactDOM.createRoot(document.querySelector('#root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/SimpleCounter' element={<SimpleCounter />}></Route>
        <Route path='/DisplayList' element={<DisplayList />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
)
