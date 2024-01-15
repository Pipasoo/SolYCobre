import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import About from './componentes/about';
import Contact from './componentes/contact';
import Home from './componentes/home';
import NavBar from './layouts/navbar';
import Footer from './layouts/footer';
import Polite from './componentes/polite';
import Slider from './componentes/carrusel';
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index element={ <Home /> } />
          <Route path='quienessomos' element={ <About /> } />
          <Route path='contacto' element={ <Contact /> } />
          <Route path='politicas' element={ <Polite /> } />
          <Route path='*' element={ <Navigate replace to="/"/> }/>
          <Route path='slider' element={ <Slider /> } />
        </Routes>
        <Footer /> 
      </BrowserRouter>

    </div>
  );
}

export default App;

