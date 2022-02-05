import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage/homepage';
import CardDetailPage from './pages/card-detail/card-detail';
import './App.css';
import Header from './components/header/header';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import RequireAuth from './components/require-auth.component';
import Notification from './components/notification/notification';

function App() {
  return (
    <div className="App">
      <Notification />
      <Header />
      <Routes>
        <Route element={<RequireAuth />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/detail/:id" element={<CardDetailPage />} />
        </Route>

        <Route path="/sign-in" element={<SignInAndSignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
