import Portfolio from './pages/Portfolio/Portfolio';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />

        {/* <Header /> */}
        <Portfolio />
      </Routes>
    </Router>
  )
}

export default App
