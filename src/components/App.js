import React from 'react';
import Header from './Header'
import ProductControl from './ProductControl';
import { Container } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Container>
        <Header />
        <ProductControl />
      </Container>
    </React.Fragment>
  );
}

export default App;
