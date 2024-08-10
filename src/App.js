import React from 'react';
import './App.css';
import { BrowserRouter,Router,Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Market from './pages/market';
import ContactUs from './pages/contactus';
import LoginForm from './components/login';
import Register from './components/register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/market' element={<Market/>}></Route>
        <Route path='/login' element={<LoginForm/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
         <Route path='/contact' element={<ContactUs/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
