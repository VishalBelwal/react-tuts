import React from 'react';  //core foundation library hai jo sirf refrence lene ka kam karti hai
import ReactDOM from 'react-dom/client'; //ye implimentation hai react ka web pr

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

