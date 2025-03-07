import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Portfolio from './pages/Portfolio/Portfolio';
import FAQ from './pages/FAQ/FAQ';
import Case from './pages/Case/Case';
import Header from './components/Header/Header';
import Loader from './components/Loader/Loader';
import { useState } from 'react';

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


function App() {

  const [showLoader, setshowLoader] = useState(true);

  return (
    <BrowserRouter>
      <Header />
      <div className='App' style={{
        maxHeight: showLoader ? '100vh' : 'none',
      }}>
        <Loader showLoader={showLoader} setshowLoader={setshowLoader} />
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/case/:caseName" element={<Case />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
