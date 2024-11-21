import React from 'react';
import ReactDOM from 'react-dom/client';
import Rooterapp from './Rooterapp';
import { CssBaseline } from '@mui/material';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CssBaseline />
    <Rooterapp />
  </React.StrictMode>
);
