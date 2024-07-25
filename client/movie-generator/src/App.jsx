import './App.scss';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import GeneratorPage from './pages/GeneratorPage/GeneratorPage';
import Header from './components/Header/Header';

function App() {

  const handleClick = (mood) => {
    console.log(`${mood.name} was clicked`);
    navigate('/generator');
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="generator/:mood" element={<GeneratorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
