import React, { useState } from 'react';
import './Faq.css';

const faqs = [
  {
    question: 'Which tool can be learned in the shortest time?',
    answer: 'Among many, tools like Canva or ChatGPT are easy to learn and can be picked up in just a few hours depending on your interest.'
  },
  {
    question: 'What is the best data visualization tool?',
    answer: 'Power BI and Tableau are both popular choices for data visualization with strong community support and features.'
  },
  {
    question: 'Is Python better than R for data science?',
    answer: 'Both are powerful, but Python has a broader ecosystem and is generally more versatile for different domains.'
  },
  {
    question: 'Can I learn AI without a CS background?',
    answer: 'Yes! With consistent practice, foundational math, and the right resources, anyone can learn AI.'
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className="faq-wrapper"
      style={{ backgroundImage: `url('/faq.png')`,backgroundSize:'-10px' }}
    >
      <h1 className="faq-title">Frequently<br />Asked Questions</h1>
      <div className="faq-container">
        {faqs.map((item, index) => (
          <div className="faq-item" key={index}>
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <span>{item.question}</span>
              <div className="faq-icon">
                {openIndex === index ? '-' : '+'}
              </div>
            </div>
            {openIndex === index && (
              <div className="faq-answer">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
