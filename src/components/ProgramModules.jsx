import { Box } from '@mui/material';
import React from 'react';
import PMCard from './PMCard';
import './ProgramModules.css';

export const ProgramModules = () => {
    const data = [
        {
          moduleNumber: '01',
          image: './images/m1.png', // Replace with the actual image path
          title: 'Fundamentals of Cyber Security',
          topics: '5 Topics',
          duration: '5 hours',
          learningStyle: 'Self-paced',
        },
        {
          moduleNumber: '02',
          image: './images/m1.png', // Replace with the actual image path
          title: 'Essentials of Payment Industry Ecosystem',
          topics: '8 Topics',
          duration: '10 hours',
          learningStyle: 'Classroom Activities: Short Quizzes, Polls, Group Exercises, Think-Pair-Share',
        },
        {
          moduleNumber: '03',
          image: './images/m1.png', // Replace with the actual image path
          title: 'Payment Transaction Flows & Business Procedures',
          topics: '3 Topics',
          duration: '10 hours',
          learningStyle: 'Classroom Activities: Short Quizzes, Polls, Group Exercises, Think-Pair-Share',
        },
        {
          moduleNumber: '04',
          image: './images/m1.png', // Replace with the actual image path
          title: 'Payment Card Security Standards: PCI DSS and Others',
          topics: '10 Topics',
          duration: '50 hours',
          learningStyle: 'Classroom Activities: Short Quizzes, Polls, Group Exercises, Think-Pair-Share',
        },
        {
          moduleNumber: '05',
          image: './images/m1.png', // Replace with the actual image path
          title: 'PCI DSS Compliance Levels',
          topics: '3 Topics',
          duration: '10 Hours',
          learningStyle: 'Classroom Activities: Short Quizzes, Polls, Group Exercises, Think-Pair-Share',
        },
        {
          moduleNumber: '06',
          image: './images/m1.png', // Replace with the actual image path
          title: 'Case Studies: Applied Learning Examples',
          topics: '1 Topic',
          duration: '10 Hours',
          learningStyle: 'Classroom Activities: Short Quizzes, Polls, Group Exercises, Think-Pair-Share',
        },
        {
          moduleNumber: '07',
          image: './images/m1.png', // Replace with the actual image path
          title: 'Digital Payments in India: A Guide to Regulatory Frameworks',
          topics: '5 Topic',
          duration: '10 Hours',
          learningStyle: 'Classroom Activities: Short Quizzes, Polls, Group Exercises, Think-Pair-Share',
        },
        {
          moduleNumber: '08',
          image: './images/m1.png', // Replace with the actual image path
          title: 'Deep Dive into Payment Security Audit Methodologies',
          topics:'OJT', 
          duration: '12 Weeks',
          learningStyle: 'OJT Performance Evaluation',
        },
      ];
      
      return (
        <Box className="program-modules">
          {data.map((data, index) => (
            <PMCard key={index} data={data} />
          ))}
        </Box>
      );
    };