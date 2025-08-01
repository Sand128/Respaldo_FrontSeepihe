import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/style.css';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { Seepihe } from './Seepihe';



ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Provider store={ store }>
      {/* <BrowserRouter> */}
      <HashRouter>
        <Seepihe />
      </HashRouter>
      {/* </BrowserRouter> */}
    </Provider>
  // </React.StrictMode>
);
