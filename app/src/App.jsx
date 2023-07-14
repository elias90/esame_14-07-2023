import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './ES1/Header.jsx'
import Home from './ES1/Home.jsx'
import Dettaglipersonaggi from './ES1/Dettaglipersonaggi'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section className='flex flex-col p-10'>
        <Router>
          <Header />
          
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path="/char/:charid" element={<Dettaglipersonaggi />} />
          </Routes>
        </Router>
      </section>
    </>
  )
}

export default App
