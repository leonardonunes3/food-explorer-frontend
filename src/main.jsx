import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './styles/global';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

import { Dish } from './pages/Dish';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Dish />
    </ThemeProvider>
  </React.StrictMode>
)
