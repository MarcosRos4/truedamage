import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './landing/Landing';
import Cadastro from './cadastro/Cadastro';
import Consulta from './consulta/Consulta';
import Login from './login/Login';
import SemRota from './semrota/SemRota';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<Landing />} />
        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='/consulta' element={<Consulta />} />
        <Route path='/login' element={<Login />} />
        <Route path='/*' element={<SemRota />} />
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

