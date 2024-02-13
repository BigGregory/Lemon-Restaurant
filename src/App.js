import { BrowserRouter } from 'react-router-dom';

import Nav from './components/Nav';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Logo from './components/Logo';

import './App.css';

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Header>
          <Logo />
          <Nav />
        </Header>
        <Main />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
