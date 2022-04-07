require('./bootstrap');
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Master from './components/Master';
import CreateItem from './components/CreateItem';
import ListItem from './components/DisplayItem';
import EditItem from './components/EditItem'

function MyApp() {
  return (
      <Routes>
          <Route path="/" element={<Master /> } />
          <Route path="/create" element={<CreateItem /> } />
          <Route path="/list-product" element={<ListItem /> } />
          <Route path="/edit/:id" element={<EditItem /> } />
      </Routes>
  );
}

if (document.getElementById('app')) {
  ReactDOM.render(
      <BrowserRouter>
          <MyApp />
      </BrowserRouter>
          ,document.getElementById('app'));
}