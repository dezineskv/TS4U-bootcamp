import './App.css'
import Heading from './components/Heading'
import Buttons from './components/Buttons'
import Content from './components/Content'
import HeroImage from "./OIP.jpg";
import PracticeButton from './components/PracticeButton';
import React, { useState } from 'react';
import AnotherButton from './components/AnotherButton';
import Counter from './components/Counter';


function App() {
  const [message, handleClick] = useState("Hello from Parent");
  const [text, setValue] = useState("new value");
  console.log(text);
  const [newMessage, setMessage] = useState("Hello");

 const handleEvents = () => {
  alert(newMessage);
 }

  return (
    <>
      <div><img src={HeroImage} className="hero" alt="Hero" /></div>
      <Heading></Heading> 
      <Content paragraphs="This page has a few practice buttons."></Content> 
      <Buttons></Buttons>
      <div style={{marginTop: '20px'}}><button onClick={handleEvents}>Hello</button></div>
      <PracticeButton message={message}></PracticeButton>
      <AnotherButton></AnotherButton>
      <Counter></Counter>
    </>
  )
}

export default App
