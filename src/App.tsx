import React from 'react';
import './App.css';
import BooksPage from './pages/BooksPage/BooksPage';
import { ThemeProvider } from 'styled-components';
import { theme } from './assets/styles/theme';
import { GlobalStyle } from './assets/styles/GlobalStyles';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { NotFound } from './pages';
;



function App() {
  return (
    <ThemeProvider theme={theme} >
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<BooksPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
