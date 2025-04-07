import { RouterProvider } from 'react-router-dom';
import { router } from '../src/routes/router.jsx';
import React from 'react';

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

