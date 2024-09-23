import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';
import ToggleMode from './components/ToggleMode';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToggleMode />
    <App />
  </React.StrictMode>
);
