import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLanguage } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import profileImg from '../assets/profile.jpg';

const Card = styled(motion.div)`
  background: url('https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=800&q=80') center/cover no-repeat;
  border-radius: 18px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
  padding: 2.5rem 2rem;
  max-width: 700px;
  margin: 0 auto;
  position: relative;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(247, 248, 250, 0.85);
  border-radius: 18px;
  z-index: 1;
`;

const ProfileContent = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: flex-start;
  gap: 2rem;
`;

const ProfileImage = styled(motion.img)`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  border: 4px solid #5b7fff;
  box-shadow: 0 4px 16px rgba(0,0,0,0.13);
  object-fit: cover;
  background: #fff;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.08);
  }
`;

const InfoSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const IconLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;

const IconLinkRow = styled.a`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  color: #3a3d42;
  font-size: 1.08rem;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
  &:hover {
    color: #5b7fff;
  }
`;

const ContactDetails = styled.div`
  margin-top: 0.7rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  color: #444;
  font-size: 1.05rem;
`;

const Desc = styled.p`
  margin-top: 1.2rem;
  font-size: 1.13rem;
  color: #333;
  line-height: 1.7;
`;

const Profile = () => (
  <Card initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
    <Overlay />
    <ProfileContent>
      <ProfileImage
        src={profileImg}
        alt="Profile"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
      <InfoSection>
        <h2 style={{ fontSize: '2.2rem', fontWeight: 700, color: '#3a3d42', marginBottom: '0.5rem' }}>Mohika Grover</h2>
        <IconLinks>
          <IconLinkRow href="mailto:mohikagrover2018@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope /> mohikagrover2018@gmail.com</IconLinkRow>
          <IconLinkRow href="https://github.com/mohikagrover" target="_blank" rel="noopener noreferrer"><FaGithub /> github.com/mohikagrover</IconLinkRow>
          <IconLinkRow href="https://linkedin.com/in/mohika-grover" target="_blank" rel="noopener noreferrer"><FaLinkedin /> linkedin.com/in/mohika-grover</IconLinkRow>
          <IconLinkRow href="https://leetcode.com/mohika_grover" target="_blank" rel="noopener noreferrer"><SiLeetcode /> leetcode.com/u/mohika_grover</IconLinkRow>
        </IconLinks>
        <ContactDetails>
          <span><FaPhone style={{ marginRight: 6 }} /> +91 9717008932</span>
          <span><FaMapMarkerAlt style={{ marginRight: 6 }} /> New Delhi, India</span>
          <span><FaLanguage style={{ marginRight: 6 }} /> Languages: English, Hindi</span>
        </ContactDetails>
        <Desc>
          I am an AI-focused Software Engineer with a passion for building scalable, data-driven solutions. My expertise spans Python, Java, React, and machine learning. I thrive on solving complex problems, leading teams, and delivering innovative products that make a real-world impact. I have a strong foundation in algorithms, backend and frontend development, and cloud technologies. I am always eager to learn, collaborate, and contribute to meaningful projects.<br /><br />
          Outside of work, I enjoy mentoring, participating in hackathons, and exploring new technologies. I am also an avid reader and love discovering new cuisines.
        </Desc>
      </InfoSection>
    </ProfileContent>
  </Card>
);

export default Profile;