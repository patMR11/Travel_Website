import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import './App.css'
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Service from './Pages/ServicesPage/Service';
import Footer from './Components/Footer/Footer';
function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
        <Route path='/Service' element={<Service/>}></Route>
      </Routes>  
      <Footer/>
    </>
  )
}

export default App
