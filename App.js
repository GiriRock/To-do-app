
import React from 'react';
import { AuthProvider } from './src/navigation/AuthProvider';

import Routes from './src/navigation/routes';

const App = ()=> {
  return (
    <AuthProvider>
      <Routes/>
    </AuthProvider>
  );
};



export default App;
