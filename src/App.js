import React from 'react';
import Container from './components/Container';
import Store from './components/Store'

const App = () => {
  return (
    <Store>
      <Container />
    </Store>
  );
}

export default App;