
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Detail from './component/Detail';
import Home from './component/Home';
import Footer from './component/Layout/Footer';
import Header from './component/Layout/Header';

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>

      <Route index ="/" element ={<Home/>}/>
      <Route exact path ="/detail" element ={<Detail/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    
    
    </>
  );
}

export default App;
