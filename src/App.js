import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Logo from './components/Logo';
import Home from './components/Home';
import BookingPage from './components/BookingPage';

import './App.css';

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Header>
          <Logo />
          <Nav />
        </Header>
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<h1>About</h1>} />
            <Route path="/menu" element={<h1>Menu</h1>} />
            <Route path="/reservation" element={<BookingPage />} />
            <Route path="/order-online" element={<h1>Order Online</h1>} />
            <Route path="/login" element={<h1>Login</h1>} />
          </Routes>
        </Main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
