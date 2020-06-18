import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './styles/Global';
import App from './pages/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyle/>
  </React.StrictMode>,
  document.getElementById('root')
);
