import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../presentation/pages/home/Home'

const RouterOutlet = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home/>}/>
            
        </Routes>
    </>
  )
}

export default RouterOutlet