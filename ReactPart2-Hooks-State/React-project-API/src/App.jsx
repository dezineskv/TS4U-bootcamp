import React, { useState, useEffect } from 'react';
import './App.css';
import ListComponent from './components/ListComponent';

function App()  {

    return (
        <>
        <h2>TS4U Bootcamps</h2>
        <p><a href="https://ts4u.us/link/training">Join our chat</a> for FREE personal career counseling, scholarship, and discounts!</p>
            <ListComponent></ListComponent>

        </>
    )
}
export default App;