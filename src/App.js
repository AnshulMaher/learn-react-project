import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage/hompage';
import './App.css';
import CardDetailPage from './pages/card-detail/card-detail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/detail/:id" element={<CardDetailPage />} />

        {/* <Route path="/detail">
        <Route path=":id" element={<CardDetailPage />} />
      </Route> */}
      </Routes>
    </div>
  );
}

export default App;
