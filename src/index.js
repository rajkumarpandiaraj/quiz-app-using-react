import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Globalcontext from './context/Globalcontext'

ReactDOM.render(
  <React.StrictMode>
    <Globalcontext>
      <App />
    </Globalcontext>
  </React.StrictMode>,
  document.getElementById('root')
);