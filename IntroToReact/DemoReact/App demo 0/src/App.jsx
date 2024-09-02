import './App.css'
import Heading from './components/Heading'
import Button from './components/Button'
import Content from './components/Content'
import HeroImage from "./OIP.jpg";

function App() {

  return (
    <>
      <div><img src={HeroImage} className="hero" alt="Hero" /></div>
      <Heading></Heading> 
      <Content paragraphs="This page has an alert button."></Content> 
      <Button></Button>
    </>
  )
}

export default App
