import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Start from './pages/Start'
import Login from './pages/Login'
import Nav from './pages/Nav'
import Start2 from './pages/Start2'
import List from './pages/List'
import Load from './pages/Load'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Nav/>}>
          <Route index element={<Start/>} />          
          <Route path='login' element={<Login/>} />
          <Route path='home' element={<Start2/>} />
          <Route path='list' element={<List/>} />
          <Route path='cargadescarga' element={<Load/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
