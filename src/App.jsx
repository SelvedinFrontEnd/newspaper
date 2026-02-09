import HomePage from "./pages/HomePage"
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import F1 from "./pages/F1";
import NBA from "./pages/NBA";
import Football from "./pages/Football";
import Article from "./pages/Article";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
      <div className=" bg-gray-200 text-gray-900 z-0">
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/football" element={<Football />} />
          <Route path="/nba" element={<NBA />} />
          <Route path="/f1" element={<F1 />} />
          <Route path="/article/:id" element={<Article />} />
        </Routes>
        
        <Footer />
      </div>
  )
}

export default App
