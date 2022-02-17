import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/* Import redux */
import { Provider } from "react-redux";
import lison_store from "./store/store";


ReactDOM.render(
  <React.StrictMode>
    {/* On met l'app dans le Provider; ce qui permet de le propager dans l'application */}
    <Provider store={lison_store}>
      <App />
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
