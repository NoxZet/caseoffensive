//console.log('Client');

import React from 'react'
import  { createRoot }  from 'react-dom/client';
import renderApp from './App'

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
renderApp(root);
