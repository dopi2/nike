import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/home'
import Watch from './components/Watch1/watch'
import Watch2 from './components/watch2/watch'
import Watch3 from './components/Watch3/watch'
import Watch4 from './components/watch4/watch'
import About from './components/About/about'
import Contact from './components/Contact/contact'
import Collect from './components/Collection/collect'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/watch1' element={<Watch/>}/>
    <Route path='/watch2' element={<Watch2/>}/>
    <Route path='/watch3' element={<Watch3/>}/>
    <Route path='/watch4' element={<Watch4/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/collect' element={<Collect/>}/>
    <Route path='/contact' element={<Contact/>}/>
   </Routes>
   </BrowserRouter>
  </React.StrictMode>,
)
