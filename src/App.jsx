import './App.css'
import React from 'react'
import { Route,Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/NavBar';



const App = () => {
  return (
    <>
      <div className='app'>
       <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </div>
      <Footer/>
    </>
  );
}
export default App
