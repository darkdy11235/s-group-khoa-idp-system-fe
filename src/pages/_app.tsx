// pages/_app.tsx
import { CssBaseline } from '@mui/material';
import { AppProps } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <CssBaseline />
        <Component {...pageProps} />
      </LocalizationProvider>
    </Provider>
  );
}

export default MyApp;
