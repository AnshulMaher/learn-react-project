import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DetailPage from './pages/detail/detail';
import Homepage from './pages/homepage/hompage';
import './App.css';
import CardDetailPage from './pages/card-detail/card-detail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      {/* <Route path="/detail" element={<DetailPage />} />
      <Route path="/detail/card-detail" element={<CardDetailPage />} /> */}

      <Route path="/detail">
        <Route index element={<DetailPage />} />
        <Route path="card-detail" element={<CardDetailPage />} />
      </Route>

    </Routes>
  );
}

export default App;
