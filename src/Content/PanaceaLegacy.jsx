import React from 'react';
import { Box, Typography } from '@mui/material';
import './PanaceaLegacy.css'; // Import the CSS file

export const PanaceaLegacy = () => {
  const stats = [
    { number: '50+', description: 'Presence in countries worldwide' },
    { number: '1400+', description: 'Clients across industries' },
    { number: '100+', description: 'Professionals in our qualified team' },
    { number: '300+', description: 'Man-years experience of the leadership team in cybersecurity' },
    { number: '1000+', description: 'Security professionals trained till date' },
  ];

  return (
    <Box className="panacea-legacy-container">
      <Typography variant="h4" className="panacea-legacy-title">
        Panacea’s Legacy?
      </Typography>
      <Typography variant="body1" className="panacea-legacy-description">
        Panacea Infosec is a QSA company and leading provider of PCI DSS, CERT-In, ISO, GDPR, HIPAA, SOC compliance services, serving clients on all aspects of Information Security Governance, Risk Management and Compliance Management.
      </Typography>
      <Box className="stats-container">
        {stats.map((stat, index) => (
          <Box
            key={index}
            className={`stat-box ${index < stats.length - 1 ? 'divider' : ''}`}
          >
            <Typography variant="h3" className="stat-number">
              {stat.number}
            </Typography>
            <Typography variant="body1" className="stat-description">
              {stat.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
