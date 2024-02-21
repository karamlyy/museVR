import React, { useState } from 'react';
import './FAQ.css';

const faqs = [
  {
    question: "What is a museum?",
    answer: "A museum is an institution that cares for (conserves) a collection of artifacts and other objects of artistic, cultural, historical, or scientific importance."
  },
  {
    question: "How can I find museum operating hours?",
    answer: "Operating hours vary by museum. Please check the specific museum's detail page on our site for the most up-to-date information."
  },
  
];

const FAQ = () => {
  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      {faqs.map((faq, index) => (
        <FAQItem key={index} faq={faq} />
      ))}
    </div>
  );
};

const FAQItem = ({ faq }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleOpen = () => setIsOpen(!isOpen);
  
    return (
      <div className={`faq-item ${isOpen ? 'open' : ''}`} onClick={toggleOpen}>
        <div className="faq-question">{faq.question}</div>
        <div className="faq-answer">{faq.answer}</div>
      </div>
    );
  };
  

export default FAQ;
