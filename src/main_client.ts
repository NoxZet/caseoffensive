//console.log('Client');

import React from 'react'
import  { createRoot }  from 'react-dom/client';
import renderApp from './App'

const container = document.getElementById('root');
const root = createRoot(container);
renderApp(root);
