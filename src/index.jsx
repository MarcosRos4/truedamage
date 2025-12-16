import React from 'react';
import ReactDOM from 'react-dom/client';
import '/index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './landing/Landing.jsx';
import Cadastro from './cadastro/Cadastro.jsx';
import Consulta from './consulta/Consulta.jsx';
import Login from './login/Login.jsx'
import SemRota from './semrota/SemRota.jsx'


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(

  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        
        <Route path='/truedamage/' element={<Landing />} />
        <Route path='/truedamage/cadastro' element={<Cadastro />} />
        <Route path='/truedamage/consulta' element={<Consulta />} />
        <Route path='/truedamage/login' element={<Login  />} />
        <Route path='/truedamage/*' element={<SemRota />} />
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

