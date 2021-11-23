import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Users from './components/users';
import Contact from './components/contact';
import Notfound  from './components/notfound';
import Header from './components/header';

const routing = (
  
<div>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/usuarios" element={<Users />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="*" element = {<Notfound />} />
      </Routes>
    </BrowserRouter>
  </div>  


)


ReactDOM.render(
  routing,
  document.getElementById('root')
);


