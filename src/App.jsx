import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
              <Route path="/" element={<Home />}/>
              <Route path="/experience" element={<Experience />}/>
              <Route path="/projects" element={<Projects/>} />
              <Route path="/contact" element={<Contact/>} />
          </Route>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
