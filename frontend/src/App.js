import './App.css';
import Navigation from './components/Header/Navigation';
import { Routes, Route } from 'react-router-dom';
import Accueil from './components/Accueil';
import Contact from './components/Contact';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/Accueil" element={<Accueil />}> </Route>
        <Route path="/contact" element={<Contact />}> </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
