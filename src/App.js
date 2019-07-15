import React from 'react';
import './App.css';
import DropZone from './components/imageUploader'
import TextChunk from './components/textChunk'
import styled, { ThemeProvider } from 'styled-components';

const theme = {
  primaryColor: '#FA7268',
  secondaryColor: '#5F4B8B',
  fontFamilySans: 'Nunito',
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ThemeProvider theme={theme}>
          <TextChunk  h1={'Welcome to the kitchen sink'}
                      h2={'Making all the components since 2019'}
                      p={'next up: dropdown theme switcher'}/>
        </ThemeProvider>
        <ThemeProvider theme={theme}>
          <DropZone />
        </ThemeProvider>
      </header>
    </div>
  );
}



export default App;
