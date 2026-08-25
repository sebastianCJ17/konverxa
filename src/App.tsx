import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './utils/scrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import CookieBanner from './components/CookieBanner';

import Home from './pages/Home';
import Modelo from './pages/Modelo';
import Servicios from './pages/Servicios';
import Industrias from './pages/Industrias';
import IndustriaDetail from './pages/IndustriaDetail';
import Nosotros from './pages/Nosotros';
import TrabajaConNosotros from './pages/TrabajaConNosotros';
import Contacto from './pages/Contacto';
import PoliticaPrivacidad from './pages/PoliticaPrivacidad';
import PoliticaCookies from './pages/PoliticaCookies';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
        <Header />
        
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/modelo" element={<Modelo />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/industrias" element={<Industrias />} />
            <Route path="/industrias/:slug" element={<IndustriaDetail />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/trabaja-con-nosotros" element={<TrabajaConNosotros />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/politica-de-privacidad" element={<PoliticaPrivacidad />} />
            <Route path="/politica-de-cookies" element={<PoliticaCookies />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
        <FloatingButtons />
        <CookieBanner />
      </div>
    </BrowserRouter>
  );
}
