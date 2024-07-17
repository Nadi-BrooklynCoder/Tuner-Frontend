import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import NavBar from "./Components/NavBar";

function App() {
  

  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/songs" element={<Index />} />
          </Routes>
        </main>
      </Router>
   </div>
  )
}

export default App