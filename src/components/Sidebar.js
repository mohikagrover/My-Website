import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SidebarContainer = styled(motion.aside)`
  width: 220px;
  background: #f0f3fa;
  border-radius: 24px;
  margin: 2rem 0 2rem 2rem;
  box-shadow: 0 4px 24px rgba(0,0,0,0.04);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
  min-width: 180px;
`;

const Avatar = styled.div`
  width: 80px;
  height: 80px;
  background: #dbeafe;
  border-radius: 50%;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  color: #5b7fff;
  font-weight: bold;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 100%;
`;

const NavLink = styled(Link)`
  color: #3a3d42;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.05rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: background 0.2s, color 0.2s;
  &:hover {
    background: #e0e7ff;
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

const Sidebar = () => (
  <SidebarContainer initial={{ x: -60, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.7 }}>
    <Avatar>M</Avatar>
    <Nav>
      {navLinks.map(link => (
        <NavLink key={link.to} to={link.to}>{link.label}</NavLink>
      ))}
    </Nav>
  </SidebarContainer>
);

export default Sidebar; 