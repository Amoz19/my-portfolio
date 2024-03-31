import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import LandingPage from "./components/LandingPage";
import MyTools from "./pages/MyTools";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/lp" element={<LandingPage />} />
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/skills" element={<MyTools />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
