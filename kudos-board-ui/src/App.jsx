
import BoardCard from './Components/Dashboard/BoardCard/BoardCardMain/BoardCard';
import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Dashboard from './Components/Dashboard/DashboardMain/Dashboard';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';


const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if token exists in local storage
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  return (

     // <BoardCard/>
     <>
     <BrowserRouter>
      <Header isAuthenticated={isAuthenticated} onLogout={handleLogout} />

      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/register" element={<Register setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />}/>
        <Route path="/board-card/:boardId" element={<BoardCard  />} />
      </Routes>

        {/* <div className="App"> 
        
        <main>
          <Dashboard/>
        </main>
        
      </div> */}
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
