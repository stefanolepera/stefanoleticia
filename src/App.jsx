import React from 'react';
import { Home } from './pages';
import { MainWrapper, GlobalStyle } from './App.style';

function App() {
    return (
        <MainWrapper>
            <GlobalStyle />
            <Home />
        </MainWrapper>
    );
}

export default App;
