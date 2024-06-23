import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import ContactUs from './components/ContactUs'
import Disease from './components/Disease'
import ProtectedRoute from './ProtectedRoute/ProtectedRoute'
import { AccessProvider } from './AcessProvider/AcessProvider'
import { ChosenProvider } from './Context/ChosenContext'
const App = () => {
  return (

  <>
   <ChosenProvider>
    <Routes>
   
    <Route path='/' element={ <Home/>}>   </Route > 
    <Route path='/about' element={<About/>} ></Route>
    <Route path='/contactus' element ={<ContactUs/>} ></Route>
    <Route element={<ProtectedRoute />}>
            <Route path="/disease" element={<Disease />} />
      </Route>
    </Routes> 
    
    </ChosenProvider>
       
    </>

    // <div>
    //   <Navbar />
    // </div>
  )
}

export default App