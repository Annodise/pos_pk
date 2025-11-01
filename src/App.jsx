import { useState } from 'react'
import './App.css'
import {Routes , Route} from 'react-router-dom'
import Login from './login_page/login'


function App() {

  return (
    <Routes>
      <Route path='/' element={<Login/>}/>
    </Routes>
  )
}

export default App
