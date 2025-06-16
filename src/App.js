import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Profile from './pages/Profile';
import Education from './pages/Education';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Activities from './pages/Activities';
import Contact from './pages/Contact';

const GlobalStyle = createGlobalStyle`
  body {
    background: #f7f8fa;
    color: #222;
    font-family: 'Segoe UI', 'Roboto', 'Arial', sans-serif;
  }
`;

const Layout = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: row;
`;

const Main = styled(motion.main)`
  flex: 1;
  padding: 2rem 2.5rem 4rem 2.5rem;
  background: #fff;
  border-radius: 24px;
  margin: 2rem 2rem 2rem 0;
  box-shadow: 0 4px 24px rgba(0,0,0,0.06);
  min-width: 0;
`;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Layout>
        <Sidebar />
        <Main
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
        >
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/education" element={<Education />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Main>
      </Layout>
      <Footer />
    </Router>
  );
}

export default App; 