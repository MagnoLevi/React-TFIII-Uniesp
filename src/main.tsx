import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import Home from './pages/home'
import Header from './components/header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SimpleCounter } from './pages/simple_counter';
import { DisplayList } from './pages/display_list';
import Footer from './components/footer'
import ContextApi from './pages/context_api'


ReactDOM.createRoot(document.querySelector('#root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/SimpleCounter' element={<SimpleCounter />}></Route>
        <Route path='/DisplayList' element={<DisplayList />}></Route>
        <Route path='/ContextApi' element={<ContextApi />}></Route>
        {/* <Route path='/FilterSearch' element={<FilterSearch />}></Route> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
)
