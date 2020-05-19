import React from 'react';
import AppNavigation from './src/navigation/AppNavigation';
import { UsuarioProvider } from './src/context/UsuarioContext'

function App() {
  return(
  <UsuarioProvider>
    <AppNavigation />
  </UsuarioProvider>
  )
}

export default App;
