import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage/homepage';
import CardDetailPage from './pages/card-detail/card-detail';
import './App.css';
import Header from './components/header/header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/detail/:id" element={<CardDetailPage />} />

        {/* <Route path="/detail">
          <Route path=":id" element={<CardDetailPage />} />
        </Route>
      */}
      </Routes>
    </div>
  );
}

export default App;
