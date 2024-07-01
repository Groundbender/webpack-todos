import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./styles/styles.scss"
import { ThemeProvider } from "./context/ThemeContext/ThemeProvider"
import { Provider } from 'react-redux';
import { configureStore } from './store';
let root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const store = configureStore()
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
);