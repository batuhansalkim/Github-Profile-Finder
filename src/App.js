import React, { useContext } from 'react'
import Register from './pages/Register'
import Login from './pages/Login'
import { Home } from './pages/Home'
import "./style.scss";
import { BrowserRouter,Routes, Route,Navigate } from "react-router-dom";
import { AuthContext } from './context/AuthContext';


function App() {

  const {currentUser} = useContext(AuthContext);

  const ProtectedRoute = ({children})=>{
    if(!currentUser){
      return<Navigate to="/login"/>
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="register" element={<Register/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
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