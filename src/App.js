import React from 'react';
import './App.css';
import DropZone from './imageUploader'
import styled, { ThemeProvider } from 'styled-components';

const theme = {
  primaryColor: '#FA7268',
  secondaryColor: '#5F4B8B',
  fontFamily: 'Nunito',
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ThemeProvider theme={theme}>
          <DropZone />
        </ThemeProvider>
      </header>
    </div>
  );
}



export default App;
