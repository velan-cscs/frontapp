import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Form from './components/form/Form';
import Table from './components/table/Table';
import Home from './components/home/home';

import './App.css';

function App() {
  return (
    
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path='home' element={<Home/>}/>
            <Route path ="form/:id" element={<Form/>}/>
            <Route path='table' element={<Table/>}/>
          </Route>
        </Routes>
        </BrowserRouter>

    
  );
}

export default App;
