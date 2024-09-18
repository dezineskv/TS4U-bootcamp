import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import { Routes, Route, Link } from 'react-router-dom'
import DetailedBurger from './components/DetailedBurger';
import Builder from './components/Builder';
import Navigation
 from './components/Navigation';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path="/" element={<Header></Header>}></Route>
      <Route path="/builder" element={<Builder></Builder>}></Route>  
      <Route path="/topping/:id" element={<DetailedBurger></DetailedBurger>}></Route>  
  </Routes>
  <Navigation></Navigation>
      {/* <div className="card">
        cards
    </div> */}
      {/* <Link to="/builder"><button>
    Get Toppings
  </button></Link> */}
    </>
  )
}

export default App
