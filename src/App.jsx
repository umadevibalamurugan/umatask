import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Resources from './pages/Resources'
import Products from './pages/Products'
import Pricing from './pages/Pricing'
import NotFound from './pages/NotFound'
import Dashboard from './pages/Dashboard'

function App() {
  const LoggedIn = false

  const Public = () =>{
    return(
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/resources' element={<Resources/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/pricing' element={<Pricing/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
    )
  }

  const Private = () =>{
    return(
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/resources' element={<Resources/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/pricing' element={<Pricing/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
    )
  }


  return (
    <div className={`main`}>
      <BrowserRouter>
        {
          LoggedIn === true ? <Private/> : <Public/>
        }
      </BrowserRouter>
    </div>
  )
}

export default App
