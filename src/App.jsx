import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Component/Header/Header'
import NavBar from './Component/Navbar/NavBar'
import HomePage from './Pages/HomePage/HomePage';
import DetailsPage from './Pages/DetailsPage/DetailsPage'
import ErrorPage from './Pages/ErrorPage/ErrorPage'
import FilterPage from './Pages/FilterPage/FilterPage'




const App=()=> {

  
  return (
    <>
    <Header/>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/details/:id' element={<DetailsPage/>}/>
        <Route path='/filter/:gender' element={<FilterPage/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
