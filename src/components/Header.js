import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeaderBar = styled(motion.header)`
  width: 100%;
  background: #e9eef6;
  padding: 1.5rem 2.5rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Name = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #3a3d42;
  margin: 0;
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled(Link)`
  color: #3a3d42;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  transition: color 0.2s;
  &:hover {
    color: #5b7fff;
  }
`;

const navLinks = [
  { label: 'Profile', to: '/' },
  { label: 'Education', to: '/education' },
  { label: 'Skills', to: '/skills' },
  { label: 'Projects', to: '/projects' },
  { label: 'Activities', to: '/activities' },
  { label: 'Contact', to: '/contact' },
];

const Header = () => (
  <HeaderBar initial={{ y: -60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }}>
    <Name>Mohika Grover</Name>
    <Nav>
      {navLinks.map(link => (
        <NavLink key={link.to} to={link.to}>{link.label}</NavLink>
      ))}
    </Nav>
  </HeaderBar>
);

export default Header; 