import React, {useState} from 'react'
import NavBar from './components/NavBar/NavBar'
import { render } from "react-dom";
import { BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from './components/HomePage/HomePage'
import About from './components/About/About'
import Visuals from './components/Visuals/Visuals'
import Default from './components/Defualt/Defualt';
import DIBBSAward2023_04_13 from './components/DIBBSAward2023-04-13/DIBBSAward2023-04-13'
import CCFAward2023_04_11 from './components/CCFAward2023-04-11/CCFAward2023-04-11'
import CICIAward2023_04_10 from './components/CICIAward2023-04-10/CICIAward2023-04-10'
import MRIAward2023_04_16 from './components/MRIAward2023-04-16/MRIAward2023-04-16'
import CSSIAward2023_04_16 from './components/CSSIAward2023-04-16/CSSIAward2023-04-16'
import SI2Award2023_04_24 from './components/SI2Award2023-04-24/SI2Award2023-04-24'
import OACAward2023_04_18 from './components/OACAward2023-04-18/OACAward2023-04-18'

const app = () => {

  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/About" element={ <About/>} />
      <Route path="/Visuals" element={<Visuals/>}/>
      <Route path="/DIBBSAward2023-04-13" element={<DIBBSAward2023_04_13/>}/>
      <Route path="/CCFAward2023-04-11" element={<CCFAward2023_04_11/>}/>
      <Route path="/CICIAward2023-04-10" element={<CICIAward2023_04_10/>}/>
      <Route path="/MRIAward2023-04-16" element={<MRIAward2023_04_16/>}/>
      <Route path="/CSSIAward2023-04-16" element={<CSSIAward2023_04_16/>}/>
      <Route path="/SI2Award2023-04-24" element={<SI2Award2023_04_24/>}/>
      <Route path="/OACAward2023-04-18" element={<OACAward2023_04_18/>}/>
      <Route path="*" element={<Default/>} />
    </Routes>
     </>
    
  )
}

export default app