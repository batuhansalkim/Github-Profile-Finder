import React from 'react'
import Register from './pages/Register'
import Login from './pages/Login'
import { Home } from './pages/Home'
import "./style.scss";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Route index element={<Home/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="register" element={<Register/>}/>
        </Route>
      </Switch>
    </Router>
    // <Router>
    //   <Switch>
    //   <Route path="/">
    //     <Route index element={<Home/>}/>
    //     <Route path="login" element={<Login/>}/>
    //     <Route path="register" element={<Register/>}/>
    //   </Route>
    //   </Switch>
    // </Router>
    
  )
}

export default App