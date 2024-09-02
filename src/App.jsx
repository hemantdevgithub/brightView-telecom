import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/Shared/ScrollToTop';
import { Toaster } from 'react-hot-toast';
import RouterHandler from './Routes/RouterHandler';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      < Toaster />
      <Navbar />
      <RouterHandler />
      <Footer />
    </Router >
  )
};
export default App;