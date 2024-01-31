
import './App.css';
import Header from './compnents/header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home'


function App() {

  return (
    <>
      <BrowserRouter >
        <Header title="TextWrap" />
        <Routes>

          <Route path="/" exact Component={Home} />
          <Route path='/about' Component={About} />
          <Route path='/contact' Component={Contact} />


        </Routes>
      </BrowserRouter>


    </>
  );
}

export default App;
