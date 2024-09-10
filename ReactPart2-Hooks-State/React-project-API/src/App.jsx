import React, { useState, useEffect } from 'react';
import './App.css';
import ListComponent from './components/ListComponent';
import Counter from './components/Counter';
import Home from './components/Home';
import { Route, Routes } from "react-router-dom";
import People from './components/People';
import Person from './components/Person';

function App()  {

    return (
        <>
        <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/counters" element={<Counter></Counter>}></Route>
        <Route path="/people" element={<People></People>}></Route>
        <Route path="/user/:id" element={<Person></Person>}></Route>

        </Routes>
        </>
    )
}
export default App;