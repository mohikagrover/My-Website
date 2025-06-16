import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Card = styled(motion.div)`
  background: url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80') center/cover no-repeat;
  border-radius: 18px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
  padding: 2.5rem 2rem;
  max-width: 900px;
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

const ActivitiesContent = styled.div`
  position: relative;
  z-index: 2;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #3a3d42;
  margin-bottom: 1.2rem;
`;

const SectionTitle = styled.div`
  font-weight: 600;
  color: #5b7fff;
  font-size: 1.15rem;
  margin-bottom: 0.5rem;
  margin-top: 1.2rem;
`;

const ActivityCard = styled(motion.div)`
  background: #fff;
  color: #222;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
  padding: 1.3rem 1.2rem;
  font-size: 1.08rem;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  transition: background 0.3s, color 0.3s, transform 0.2s;
  cursor: pointer;
  &:hover {
    background: #111;
    color: #fff;
    transform: translateY(-6px) scale(1.04);
  }
`;

const coCurricular = [
  'Backend developer in multiple national-level hackathons, focused on AI solutions in healthcare',
  'Scored 200+ problems on LeetCode and GeeksforGeeks, improving problem-solving efficiency by 50%',
  'Volunteer at National Testing Agency (NTA), supporting data operations and office admin tasks',
  'Mentored students in AI and computer science as part of a volunteer tutoring initiative',
];

const extraCurricular = [
  'Avid reader and writer (on Tefillin), and personal development enthusiast',
  'Enthusiastic coder; frequently explore new global cuisines',
];

const Activities = () => {
  return (
    <Card initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
      <Overlay />
      <ActivitiesContent>
        <Title>Activities</Title>
        <SectionTitle>Co-Curricular Activities</SectionTitle>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))', gap: '1.2rem' }}>
          {coCurricular.map((activity, idx) => (
            <ActivityCard key={idx} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
              {activity}
            </ActivityCard>
          ))}
        </div>
        <SectionTitle>Extra-Curricular Activities</SectionTitle>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))', gap: '1.2rem' }}>
          {extraCurricular.map((activity, idx) => (
            <ActivityCard key={idx} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
              {activity}
            </ActivityCard>
          ))}
        </div>
      </ActivitiesContent>
    </Card>
  );
};

export default Activities; 