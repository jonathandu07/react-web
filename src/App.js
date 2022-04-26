
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Details from './pages/Details';


function App() {
  return (
    <div >
      <BrowserRouter>
        <Header />
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Portfolio' element={<Portfolio/>}/>
        <Route path='/Contact' element={<Contact name="Hola a todos"/>}/>
        <Route path='/portfolio/details/:id' element={ <Details/> }/>
        <Route path='*' element={<Home/>}/>      
        </Routes>
        <Footer/>      
      </BrowserRouter>
    </div>
  );
}

export default App;
