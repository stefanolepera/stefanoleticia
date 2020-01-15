import React from 'react';
import { Home, Dashboard } from './pages';
import { MainWrapper, GlobalStyle } from './App.style';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <MainWrapper>
            <GlobalStyle />
            <BrowserRouter>
                <Switch>
                    <Route exact path="/dashboard">
                        <Dashboard />
                    </Route>
                    <Route exact path="/">
                        <Home />
                    </Route>
                </Switch>
            </BrowserRouter>
        </MainWrapper>
    );
}

export default App;
