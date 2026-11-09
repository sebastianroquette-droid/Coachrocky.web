import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from '@/App.jsx';
import { stripStaticHeadTags } from '@/lib/stripStaticHeadTags.js';
import '@fontsource-variable/figtree';
import '@fontsource/barlow/400.css';
import '@fontsource/barlow/500.css';
import '@/index.css';

// Statische Default-Meta-Tags aus index.html entfernen, bevor React rendert,
// damit pro Route nur die seitenbezogenen Tags via Helmet gesetzt werden.
stripStaticHeadTags();

ReactDOM.createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HelmetProvider>
);
