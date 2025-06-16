import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaJava, FaPython, FaDatabase, FaReact, FaJs, FaHtml5, FaCss3Alt, FaBootstrap, FaCogs, FaLightbulb, FaComments, FaUsers, FaSyncAlt, FaClock, FaUserFriends, FaPuzzlePiece, FaRocket, FaChalkboardTeacher } from 'react-icons/fa';
import { SiMysql } from 'react-icons/si';

const Card = styled(motion.div)`
  background: url('https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80') center/cover no-repeat;
  border-radius: 18px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
  padding: 2.5rem 2rem;
  max-width: 700px;
  margin: 0 auto;
  position: relative;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(247, 248, 250, 0.85);
  border-radius: 18px;
  z-index: 1;
`;

const SkillsContent = styled.div`
  position: relative;
  z-index: 2;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #3a3d42;
  margin-bottom: 1.2rem;
`;

const CarouselWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.2rem;
`;

const ArrowBtn = styled.button`
  background: #5b7fff;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  font-size: 1.3rem;
  cursor: pointer;
  margin: 0 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(91,127,255,0.13);
  transition: background 0.2s;
  &:hover {
    background: #222;
  }
  &:disabled {
    background: #e0e7ff;
    color: #b6b6b6;
    cursor: not-allowed;
  }
`;

const CarouselContainer = styled.div`
  overflow: hidden;
  width: 100%;
  max-width: 700px; 
`;

const CarouselInner = styled(motion.div)`
  display: flex;
  gap: 1rem;
  padding-bottom: 0.7rem;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const SkillCard = styled(motion.div)`
  min-width: 180px;
  max-width: 200px;
  background: ${props => (props.type === 'technical' ? '#ffb6d5' : '#b6d0ff')};
  color: #222;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
  padding: 1rem 1.5rem;
  font-size: 1.08rem;
  font-weight: 600;
  cursor: grab;
  transition: background 0.3s, color 0.3s, transform 0.2s;
  will-change: background, color, transform;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.7rem;
  justify-content: center;
  &:hover {
    background: #111;
    color: #fff;
    transform: translateY(-6px) scale(1.04);
  }
`;

const allSkills = [
  { label: 'Java Programming', icon: <FaJava />, type: 'technical' },
  { label: 'Python Programming', icon: <FaPython />, type: 'technical' },
  { label: 'MySQL', icon: <SiMysql />, type: 'technical' },
  { label: 'React.js', icon: <FaReact />, type: 'technical' },
  { label: 'JavaScript', icon: <FaJs />, type: 'technical' },
  { label: 'HTML5, CSS3, Bootstrap', icon: <FaHtml5 />, type: 'technical' },
  { label: 'OOPs', icon: <FaCogs />, type: 'technical' },
  { label: 'Leadership', icon: <FaChalkboardTeacher />, type: 'soft' },
  { label: 'Creative Thinking', icon: <FaLightbulb />, type: 'soft' },
  { label: 'Communication', icon: <FaComments />, type: 'soft' },
  { label: 'Collaboration', icon: <FaUsers />, type: 'soft' },
  { label: 'Adaptability', icon: <FaSyncAlt />, type: 'soft' },
  { label: 'Time Management', icon: <FaClock />, type: 'soft' },
  { label: 'Teamwork', icon: <FaUserFriends />, type: 'soft' },
  { label: 'Problem Solving', icon: <FaPuzzlePiece />, type: 'soft' },
  { label: 'Innovation', icon: <FaRocket />, type: 'soft' },
];

const getXOffset = (index, totalItems, cardWidth, gap, carouselContainerWidth) => {
  if (totalItems === 0) return 0;
  const itemSize = cardWidth + gap;

  let targetX = - (index * itemSize);

  const totalContentWidth = totalItems * itemSize - gap; 
  const minX = Math.min(0, carouselContainerWidth - totalContentWidth); 
  const maxX = 0; 

  return Math.max(minX, Math.min(maxX, targetX));
};

const Skills = () => {
  const [currIdx, setCurrIdx] = useState(0);
  const cardWidth = 180; 
  const gap = 16; 
  const carouselContainerWidth = 700; 

  return (
    <Card initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
      <Overlay />
      <SkillsContent>
        <Title>Technical Proficiencies & Soft Skills</Title>
        <CarouselWrapper>
          <ArrowBtn onClick={() => setCurrIdx(i => Math.max(i - 1, 0))} disabled={currIdx === 0}>&lt;</ArrowBtn>
          <CarouselContainer>
            <CarouselInner
              animate={{ x: getXOffset(currIdx, allSkills.length, cardWidth, gap, carouselContainerWidth) }}
              transition={{ type: 'spring', stiffness: 200, damping: 30 }}
            >
              {allSkills.map((skill, idx) => (
                <SkillCard key={skill.label} type={skill.type} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
                  {skill.icon} {skill.label}
                </SkillCard>
              ))}
            </CarouselInner>
          </CarouselContainer>
          <ArrowBtn onClick={() => setCurrIdx(i => Math.min(i + 1, allSkills.length - 1))} disabled={currIdx === allSkills.length - 1}>&gt;</ArrowBtn>
        </CarouselWrapper>
      </SkillsContent>
    </Card>
  );
};

export default Skills; 