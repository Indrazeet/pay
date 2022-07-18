import React from 'react'
import {BrowserRouter, Route, Routes, } from 'react-router-dom';

import Home from './home';
import Abouts from './pages/about';

import Contacts from './pages/contact.';
import Error from './pages/Error';
import Services from './pages/service';


 const App = () => {
  return (
    <BrowserRouter>
  <Routes>
    <Route exact path='/' element={<Home/>}></Route>
    <Route path='/about' element={<Abouts/>}></Route>
   <Route path='/service' element={<Services/>}></Route>
    <Route path='/contact' element={<Contacts/>}></Route>
    <Route path='/error' element={Error}></Route>
   </Routes>

    </BrowserRouter>
  )
};

export default App ;