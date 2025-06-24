import React from 'react';
import './index.css';
import App from './App';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { WorkoutContextProvider } from './context/workoutContext';
import { AuthContextProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <WorkoutContextProvider>

          <App />
        </WorkoutContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);


