import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Portfolio from './pages/Portfolio/Portfolio';
import FAQ from './pages/FAQ/FAQ';
import Case from './pages/Case/Case';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/case/:caseName" element={<Case />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
