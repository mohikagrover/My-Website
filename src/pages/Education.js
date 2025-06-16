import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const Card = styled(motion.div)`
  background: url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80') center/cover no-repeat;
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
`;

const Overlay = styled.div`
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(247, 248, 250, 0.85);
  border-radius: 18px;
  z-index: 1;
`;

const EducationContent = styled.div`
  position: relative;
  z-index: 2;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #3a3d42;
  margin-bottom: 2rem;
`;

const Timeline = styled.div`
  position: relative;
  margin-left: 30px;
  padding-left: 30px;
  border-left: 3px solid #5b7fff;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 1.2rem;
`;

const IconCircle = styled.div`
  position: absolute;
  left: -45px;
  top: 0;
  background: #5b7fff;
  color: #fff;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  box-shadow: 0 2px 8px rgba(91,127,255,0.13);
`;

const Year = styled.div`
  font-size: 1.1rem;
  color: #5b7fff;
  font-weight: 600;
  margin-bottom: 0.2rem;
`;

const Degree = styled.div`
  font-weight: 700;
  color: #3a3d42;
  font-size: 1.15rem;
`;

const School = styled.div`
  color: #444;
  font-size: 1.08rem;
  margin-bottom: 0.2rem;
`;

const Highlight = styled.span`
  background: #e0e7ff;
  color: #3a3d42;
  border-radius: 6px;
  padding: 0.1rem 0.5rem;
  font-weight: 600;
  margin-left: 0.5rem;
`;

const Discipline = styled.div`
  color: #222;
  font-size: 1.05rem;
  margin-bottom: 0.1rem;
`;

const timelineVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.25,
      duration: 0.7,
      type: 'spring',
    },
  }),
};

const Education = () => (
  <Card initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
    <Overlay />
    <EducationContent>
      <Title>Education Timeline</Title>
      <Timeline>
        <TimelineItem
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={timelineVariants}
        >
          <IconCircle><FaGraduationCap /></IconCircle>
          <div>
            <Year>2022 – 2026 <Highlight>CGPA: 8.6/10</Highlight></Year>
            <Degree>BTech CSE (AI & ML)</Degree>
            <School>Galgotias University, Greater Noida</School>
            <Discipline>Major: Computer Science & Engineering (Artificial Intelligence & Machine Learning)</Discipline>
          </div>
        </TimelineItem>
        <TimelineItem
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={timelineVariants}
        >
          <IconCircle><FaGraduationCap /></IconCircle>
          <div>
            <Year>2021 – 2022 <Highlight>73%</Highlight></Year>
            <Degree>12th Grade CBSE</Degree>
            <School>Doon Public School, New Delhi</School>
            <Discipline>Disciplines: Physics, Chemistry, Mathematics, Computer Science, English</Discipline>
          </div>
        </TimelineItem>
        <TimelineItem
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={timelineVariants}
        >
          <IconCircle><FaGraduationCap /></IconCircle>
          <div>
            <Year>2019 – 2020 <Highlight>93%</Highlight></Year>
            <Degree>10th Grade CBSE</Degree>
            <School>Doon Public School, New Delhi</School>
            <Discipline>Disciplines: Science, Mathematics, Social Science, English, Hindi</Discipline>
          </div>
        </TimelineItem>
      </Timeline>
    </EducationContent>
  </Card>
);

export default Education; 