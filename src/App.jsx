import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import { Route, Link, Routes, Navigate } from 'react-router-dom';

import Nav from './components/nav.jsx';
import Homepage from './pages/homepage.jsx';
import About from './pages/about.jsx';
import Footer from './components/footer.jsx';
import Contact from './pages/contact.jsx';
import Products from './pages/products.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app-container'>
      <div className='homepage'>
        <Nav />
        <main>        
          <Routes>
            <Route path='/products' element={<Products/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/investors'></Route>
            <Route exact path='/home' element={<Homepage/>}></Route>
            <Route exact path='/' element={<Navigate to='/home' replace/>}></Route> 
          </Routes>
        </main>
        <Footer/>
      </div>
    </div>
  )
}

export default App
