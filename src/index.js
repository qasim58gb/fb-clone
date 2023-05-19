import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import reducer, { initialstate } from './Component/Context/Reducer';
// import {ContextApi} from './Component/Context/ContextApi'
import { AuthProvider} from './Component/Context/AuthContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
    <AuthProvider >

   <App />
    </AuthProvider>
    {/* <ContextApi initialstate = {initialstate} reducer = {reducer}> */}
    {/* </ContextApi> */}
  </React.StrictMode>
);

reportWebVitals();
