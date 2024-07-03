
import BoardCard from './Components/Dashboard/BoardCard/BoardCardMain/BoardCard';
import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Dashboard from './Components/Dashboard/DashboardMain/Dashboard';


const App = () => {
  return (
    <>
    <Header/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/board-card/:boardId" element={<BoardCard  />} />
      </Routes>
    </BrowserRouter>
    <Footer/>
    </>
    )
}

export default App
