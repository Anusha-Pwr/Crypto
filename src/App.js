import './App.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Coins from "./pages/Coins";
import Navbar from './components/Navbar';
import Coin from './pages/Coin';

function App() {


  return (
    <div>
      <BrowserRouter>
        <Navbar />
        {/* <Routes>
          /* <Route path="/" element={<Coins coins={coins} />} />
          <Route path="/coin" element={<Coin />}>
            <Route path=":coinID" element={<Coin />} />
          </Route>
        </Routes>  */ }

        <Routes>
          <Route exact path="/Crypto" element={<Coins />} />
          <Route path="/coin/:coinID" element={<Coin />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
