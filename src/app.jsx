import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeWrapper, themes } from '@gloot/react-components';
import GlobalStyle from './styles/global';
import Routes from './navigation/routes';
import Toolbar from './containers/toolbar';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 2.5rem 1fr;
`;

console.log(themes);

export default function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <Router>
        <Toolbar />
        <h1>PAYMENTS!</h1>
        <Routes />
      </Router>
    </Wrapper>
  );
}
