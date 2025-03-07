import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Portfolio from './pages/Portfolio/Portfolio';
import Faq from './pages/Faq/Faq';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/faq" element={<Faq />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
