import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './pages/home'
import Header from './components/header'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <Home />
  </React.StrictMode>,
)
