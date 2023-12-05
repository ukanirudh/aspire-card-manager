import React from 'react';
import LandingPage from './components/LandingPage';
import AppContextProvider from './context/AppContext';
import './assets/styles/Common.scss';
import CssBaseline from '@mui/material/CssBaseline';
import useLargeScreen from './hooks/useLargeScreen';

function App() {
  const largeSc = useLargeScreen();

  return (
    <div className={`App ${!largeSc && 'mobile-view'}`}>
      <CssBaseline />
      <AppContextProvider>
        <LandingPage />
      </AppContextProvider>
    </div>
  );
}

export default App;
