import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const CardGrid = styled.div`
  display: flex;
  gap: 1.2rem;
  justify-content: center;
  flex-wrap: nowrap;
  margin-top: 2rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
  }
`;

const ProjectCard = styled(motion.div)`
  background:rgb(249, 255, 145);
  color: #222;
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  padding: 1.2rem 1.2rem 1.2rem 1.2rem;
  min-width: 180px;
  max-width: 220px;
  min-height: 180px;
  cursor: pointer;
  font-size: 1.08rem;
  font-weight: 700;
  text-align: center;
  transition: background 0.3s, color 0.3s, transform 0.2s;
  will-change: background, color, transform;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  &:hover {
    background: #111;
    color: #fff;
    transform: translateY(-6px) scale(1.04);
  }
`;

const ProjectMeta = styled.div`
  margin-bottom: 0.7rem;
  width: 100%;
`;

const ProjectDate = styled.div`
  color: #5b7fff;
  font-size: 0.98rem;
  font-weight: 600;
  margin-bottom: 0.2rem;
`;

const TechStack = styled.div`
  color: #e75480;
  font-size: 0.95rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
`;

const ProjectName = styled.div`
  font-size: 1.08rem;
  font-weight: 700;
  margin-bottom: 0.3rem;
`;

const OverlayBg = styled(motion.div)`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(30, 30, 30, 0.85);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const OverlayContent = styled(motion.div)`
  background: #fff;
  color: #222;
  border-radius: 18px;
  box-shadow: 0 4px 32px rgba(0,0,0,0.18);
  padding: 2.2rem 2.2rem 2.2rem 2.2rem;
  max-width: 480px;
  width: 95vw;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 18px;
  right: 18px;
  background: #e75480;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  font-size: 1.3rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
  &:hover {
    background: #111;
  }
`;

const projects = [
  {
    name: 'Movie & Book Recommendation System',
    date: 'Jan 2024 – Mar 2024',
    tech: 'Python, React, MySQL, Scikit-learn, Flask',
    description: (
      <>
        <b>Overview:</b> An AI-powered platform that recommends movies and books tailored to user preferences, leveraging collaborative filtering and content-based algorithms.<br /><br />
        <b>Key Features:</b>
        <ul>
          <li>Advanced recommendation engine using machine learning for both movies and books.</li>
          <li>Interactive, user-friendly front-end for seamless experience and feedback collection.</li>
          <li>Dynamic backend with real-time data processing and user profile analysis.</li>
          <li>Increased user engagement by 40% and improved predictive accuracy through continuous learning.</li>
        </ul>
      </>
    ),
    techExplanation: (
      <>
        <b>Tech Stack Usage:</b>
        <ul>
          <li><b>Python:</b> Backend logic, data processing, and machine learning algorithms.</li>
          <li><b>React:</b> Interactive front-end, responsive UI.</li>
          <li><b>MySQL:</b> Stores user data, preferences, and recommendation history.</li>
          <li><b>Scikit-learn:</b> Machine learning algorithms for recommendations.</li>
          <li><b>Flask:</b> Lightweight backend framework, API handling.</li>
        </ul>
      </>
    ),
  },
  {
    name: 'Talent-Hive: AI-based Event & Career Matchmaking Platform',
    date: 'Mar 2024 – Apr 2024',
    tech: 'Node.js, React, AWS, Dialogflow, MongoDB',
    description: (
      <>
        <b>Overview:</b> A scalable cloud-based platform that matches users to relevant events and career opportunities using AI-driven matchmaking and chatbot support.<br /><br />
        <b>Key Features:</b>
        <ul>
          <li>AI chatbot for instant query resolution and personalized recommendations.</li>
          <li>Robust backend architecture supporting thousands of concurrent users.</li>
          <li>Automated matchmaking algorithms to connect users with best-fit events and jobs.</li>
          <li>Led a 4-member team through the complete SDLC, increasing matchmaking efficiency by 35%.</li>
        </ul>
      </>
    ),
    techExplanation: (
      <>
        <b>Tech Stack Usage:</b>
        <ul>
          <li><b>Node.js:</b> Backend server, asynchronous operations, real-time data processing.</li>
          <li><b>React:</b> Responsive, interactive front-end.</li>
          <li><b>AWS:</b> Cloud infrastructure for hosting, scaling, and management.</li>
          <li><b>Dialogflow:</b> AI chatbot, natural language processing.</li>
          <li><b>MongoDB:</b> Flexible, schema-less data storage.</li>
        </ul>
      </>
    ),
  },
];

const Projects = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleCardClick = idx => {
    setOpenIndex(idx);
  };

  const handleClose = () => setOpenIndex(null);

  return (
    <div>
      <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#3a3d42', textAlign: 'center', marginTop: '1.5rem' }}>Projects</h2>
      <CardGrid>
        {projects.map((project, idx) => (
          <ProjectCard
            key={project.name}
            onClick={() => handleCardClick(idx)}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.04 }}
            animate={{ scale: openIndex === idx ? 1.03 : 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <ProjectMeta>
              <ProjectDate>{project.date}</ProjectDate>
              <TechStack>{project.tech}</TechStack>
            </ProjectMeta>
            <ProjectName>{project.name}</ProjectName>
          </ProjectCard>
        ))}
      </CardGrid>
      <AnimatePresence>
        {openIndex !== null && (
          <OverlayBg
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          >
            <OverlayContent
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={e => e.stopPropagation()}
            >
              <CloseBtn onClick={handleClose} title="Close">&times;</CloseBtn>
              <h3 style={{ color: '#e75480', fontWeight: 700, marginBottom: '0.7rem' }}>{projects[openIndex].name}</h3>
              <div style={{ color: '#5b7fff', fontWeight: 600, marginBottom: 8 }}>{projects[openIndex].date}</div>
              <div style={{ color: '#e75480', fontWeight: 500, marginBottom: 16 }}>{projects[openIndex].tech}</div>
              <div style={{ marginBottom: 18 }}>{projects[openIndex].description}</div>
              <div>{projects[openIndex].techExplanation}</div>
            </OverlayContent>
          </OverlayBg>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects; 