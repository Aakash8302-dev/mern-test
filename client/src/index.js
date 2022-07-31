import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'
import { configureStore } from "@reduxjs/toolkit"
import { Provider } from 'react-redux';
import userReducer from "./features/user"
import questionReducer from "./features/question"

const store = configureStore({
  reducer: {
    user: userReducer,
    question: questionReducer
  }
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);