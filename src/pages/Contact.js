import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

const Card = styled(motion.div)`
  background: #f7f8fa;
  border-radius: 18px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
  padding: 2.5rem 2rem;
  max-width: 500px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #3a3d42;
  margin-bottom: 1.2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const Input = styled.input`
  padding: 0.8rem 1rem;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  font-size: 1rem;
  background: #fff;
`;

const TextArea = styled.textarea`
  padding: 0.8rem 1rem;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  font-size: 1rem;
  background: #fff;
  min-height: 120px;
`;

const Button = styled.button`
  background: #5b7fff;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0.9rem 1.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #3a5ccc;
  }
`;

const Message = styled.div`
  margin-top: 1rem;
  color: ${props => (props.error ? '#e53e3e' : '#38a169')};
  font-weight: 500;
`;

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [error, setError] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('');
    setError(false);
    try {
      await emailjs.send(
        'service_3xin0fa',
        'template_erdpuo5',
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        'L29-rP_76mkIENafV'
      );
      setStatus('Thank you for reaching out! Your message has been sent.');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('Sorry, there was an error sending your message. Please try again later.');
      setError(true);
    }
  };

  return (
    <Card initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
      <Title>Contact & Collaborate</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <TextArea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
        />
        <Button type="submit">Send Message</Button>
      </Form>
      {status && <Message error={error}>{status}</Message>}
    </Card>
  );
};

export default Contact; 