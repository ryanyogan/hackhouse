import { Listings } from '@hackhouse/client/ui-sections';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Listings title="HackHouse Listings" />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
