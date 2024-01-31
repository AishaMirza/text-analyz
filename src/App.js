
import './App.css';
import Header from './compnents/header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';


function App() {

  return (
    <>
      <BrowserRouter >
        <Header title="TextWrap" />
        <Routes>

          <Route path="/" exact component={Home} />
          <Route path='/about' Component={About} />
          <Route path='/contact' Component={Contact} />


        </Routes>
      </BrowserRouter>


    </>
  );
}

export default App;
