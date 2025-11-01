import './App.css';
import {  HashRouter, Routes, Route } from 'react-router-dom';
import Inicio from './views/Inicio';
import Login from './views/Login';
import DatosPersonales from './views/DatosPersonales';
import Compromisos from './views/Compromisos';
import Calendario from './views/Calendario';
import Asistencia from './views/Asistencia';
import Informacion from './views/Informacion';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/datos-personales" element={<DatosPersonales />} />
        <Route path="/compromisos" element={<Compromisos />} />
        <Route path="/calendario" element={<Calendario />} />
        <Route path="/asistencia" element={<Asistencia />} />
        <Route path="/informacion" element={<Informacion />} />
      </Routes>
    </HashRouter>
  );
}

export default App;