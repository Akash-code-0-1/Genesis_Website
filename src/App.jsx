import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from './routes/home';
import AboutPage from "./routes/AboutPage";
import NewsPage from "./routes/NewsPage";
import CareerPage from "./routes/CareerPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/career" element={<CareerPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
