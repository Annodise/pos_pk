import { useState } from 'react'
import './App.css'
import {Routes , Route} from 'react-router-dom'

import Home_Page from './home_page/home.jsx'
import Page_1 from './page_1/page_1.jsx'

function App() {


  return (
    <Routes>
      <Route path='/' element={<Home_Page/>} />
      <Route path='/page_1' element={<Page_1/>} />
    </Routes>
  )
}

export default App
