import React from 'react'
import { Container } from 'react-bootstrap';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './page/Home';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Container>
          <Home />
        </Container>
      </main>
      <Footer />
    </div>
  )
}

export default App
