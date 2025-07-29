import { Routes, Route, useLocation } from "react-router-dom";
import TabMenu from "./components/TabMenu";
import About from "./pages/About";
import Experiences from "./pages/Experiences";
import Services from "./pages/Services";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();
  const isNotFound =
    location.pathname !== "/" &&
    location.pathname !== "/experiences" &&
    location.pathname !== "/services";
  return (
    <div className="flex flex-col min-h-screen max-w-7xl mx-auto w-full p-12">
      {!isNotFound && <TabMenu />}
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
