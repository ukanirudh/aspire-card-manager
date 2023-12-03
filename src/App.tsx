import React from 'react';
import LandingPage from './components/LandingPage';
import AspireIcon from './assets/icons/Logo';
import AppContextProvider from './context/AppContext';
import './assets/styles/Common.scss';

function App() {
  return (
    <div className="App">
      <AspireIcon />
      <AppContextProvider>
        <LandingPage />
      </AppContextProvider>
    </div>
  );
}

export default App;
