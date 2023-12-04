import React from 'react';
import LandingPage from './components/LandingPage';
import AppContextProvider from './context/AppContext';
import './assets/styles/Common.scss';

function App() {
  return (
    <div className="App">
      <AppContextProvider>
        <LandingPage />
      </AppContextProvider>
    </div>
  );
}

export default App;
