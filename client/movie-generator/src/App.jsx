import './App.scss'
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import HomePage from './pages/HomePage/HomePage';
import GeneratorPage from './pages/GeneratorPage/GeneratorPage';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="generator" element={<GeneratorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
