import React from 'react'
import Register from './pages/Register'
import Login from './pages/Login'
import { Home } from './pages/Home'
import "./style.scss";
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
    <div>
      <Register/>
      
    </div>
    
  )
}

export default App