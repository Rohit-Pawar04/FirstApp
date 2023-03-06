import React from 'react';
import ReactDoM from 'react-dom/client';
import App from './component/App';
const container =document.getElementById('root');
const root=ReactDoM.createRoot(container)
root.render(<App/>)
