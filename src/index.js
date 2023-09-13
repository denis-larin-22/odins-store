import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './Root';
import { NextUIProvider } from "@nextui-org/react";
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './core/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <NextUIProvider>
      <ReduxProvider store={store}>
        <Root />
      </ReduxProvider>
    </NextUIProvider>
  // </React.StrictMode>
);
