
// import BoardCard from './Components/Dashboard/BoardCard/BoardCardMain/BoardCard';
import React, { useState } from 'react'
import './App.css'
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Dashboard from './Components/Dashboard/DashboardMain/Dashboard';


const App = () => {
  return (
     // <BoardCard/>
    <div className="App"> 
      <Header/>
      <main>
        <Dashboard/>
      </main>
      <Footer/>
    </div>)
}

export default App
