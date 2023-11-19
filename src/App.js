import './App.css';
import AdBanner from './components/AdBanner';
import Carousal from './components/Carousal';
import Footer from './components/Footer';
import Head from './components/Head';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <AdBanner/>
      <Header/>
      <Routes>
         <Route path='/' element={<Carousal/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
