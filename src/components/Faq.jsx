import * as React from 'react';
import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import './Faq.css'; // Import the CSS file

const data = [
  {
    id: 1,
    question: 'Q- Am I eligible for this training? ',
    answer: '- All tech final year students, fresh graduates and Early career professionals are eligible to be part of this training and placement program. A basic knowledge of programming and related technology is essential.',
    defaultExpanded: true,
  },
  {
    id: 2,
    question: 'Q- What is the cost of this training? ',
    answer: 'Sign up for the program above, and we’ll provide you with the fee details shortly.',
    defaultExpanded: false,
  },
  {
    id: 3,
    question: 'Q- Do I need prior programming knowledge? ',
    answer: 'No, coding knowledge is not mandatory; however, having it can be beneficial.',
    defaultExpanded: false,
  },
  {
    id: 4,
    question: 'Q- Does this programme come with placement assistance? ',
    answer: 'Yes, students who successfully complete the training program are eligible to be part of our placement assistance.',
    defaultExpanded: false,
  },
  {
    id: 5,
    question: 'Q- Is there any scholarship programme?',
    answer: 'Top 5 students in each cohort will be awarded the 75% scholarship on the course fee.',
    defaultExpanded: false,
  },
  {
    id: 6,
    question: 'Q- Is there any entrance test? ',
    answer: 'There will be a general screening test and a personal interview conducted to ascertain your fitment and eligibility for the training.',
    defaultExpanded: false,
  },
];

export default function Faq() {
  const [expandedPanel, setExpandedPanel] = useState(null);

  const handleToggle = (panel) => (event, isExpanded) => {
    setExpandedPanel(isExpanded ? panel : null);
  };

  return (
    <Box className="faq-container">
      <Typography variant="h4" className="faq-title">
        Frequently Asked Questions
      </Typography>

      {data.map((item) => (
        <Accordion
          key={item.id}
          expanded={expandedPanel === item.id}
          onChange={handleToggle(item.id)}
          className="accordion"
        >
          <AccordionSummary
            aria-controls={`panel${item.id}-content`}
            id={`panel${item.id}-header`}
            expandIcon={expandedPanel === item.id ? <span><img src='40.png' alt='shrink' width='30px' height='30px' /></span> : <span><img src='39.png' alt='expand' width='30px' height='30px' /></span>}
            className="accordion-summary"
          >
            <Typography className="accordion-summary-text">{item.question}</Typography>
          </AccordionSummary>
          <AccordionDetails className="accordion-details">
            <Typography className="accordion-details-text">{item.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
