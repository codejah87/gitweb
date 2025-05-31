import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import ScrollToTop from './Component/scrolltop.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
  <ScrollToTop/>
    <App />
    
  </BrowserRouter>
  </StrictMode>
)
