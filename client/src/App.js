import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/header';
import RequireAuth from './components/require-auth.component';
import Notification from './components/notification/notification';
import Loader from './components/loader/loader';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

import './App.css';

const Homepage = lazy(() => import('./pages/homepage/homepage'));
const CardDetailPage = lazy(() => import('./pages/card-detail/card-detail'));
const SignInAndSignUpPage = lazy(() => import('./pages/sign-in-and-sign-up/sign-in-and-sign-up'));

function App() {
  return (
    <div className="App">
        <Notification />
        <Header />
      <ErrorBoundary>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route element={<RequireAuth />}>
              <Route path="/" element={<Homepage />} />
              <Route path="/detail/:id" element={<CardDetailPage />} />
            </Route>

            <Route path="/sign-in" element={<SignInAndSignUpPage />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
