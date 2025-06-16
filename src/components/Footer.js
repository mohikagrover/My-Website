import React from 'react';
import styled from 'styled-components';

const FooterBar = styled.footer`
  width: 100%;
  background: #e9eef6;
  padding: 1.2rem 2.5rem;
  text-align: center;
  color: #6b7280;
  font-size: 1rem;
  box-shadow: 0 -2px 12px rgba(0,0,0,0.03);
`;

const Links = styled.div`
  margin-top: 0.5rem;
  a {
    color: #5b7fff;
    margin: 0 0.7rem;
    text-decoration: none;
    font-weight: 500;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Footer = () => (
  <FooterBar>
    &copy; {new Date().getFullYear()} Mohika Grover. All rights reserved.
    <Links>
      <a href="mailto:mohikagrover2018@gmail.com">Email</a>
      <a href="https://github.com/mohikagrover" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="https://linkedin.com/in/mohika-grover" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a href="https://leetcode.com/mohika_grover" target="_blank" rel="noopener noreferrer">LeetCode</a>
    </Links>
  </FooterBar>
);

export default Footer; 