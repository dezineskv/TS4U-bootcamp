import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import JobDetail from './components/JobDetail'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/job/:id" element={<JobDetail></JobDetail>}></Route>
    </Routes>

    </>
  )
}

export default App
