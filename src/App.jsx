import React from 'react';
import { MainWrapper, GlobalStyle } from './App.style';
import Home from './pages/Home';

function App() {
    return (
        <MainWrapper>
            <GlobalStyle />
            <Home />
        </MainWrapper>
    );
}

export default App;
