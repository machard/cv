import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './pages/Main';
import Header from './components/Header';
import { Container } from 'reactstrap';
import "./App.css";

function App() {
  return (<Router>
    <Container className="py-3">
      <Header />
      <Main />
    </Container>
  </Router>);
};

export default App;
