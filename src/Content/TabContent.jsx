import React, { useEffect, useState } from 'react';
import './TabContent';
import './sdgwheel.css';
import { TabContentCard } from '../components/TabContentCard';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';

// Reusable component to render hexagon grid items
const HexagonGridItem = ({ backgroundImage, href, title, description }) => (
  <li>
    <div className="hexagon" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <span>
          <h4>{title}</h4>
          <p style={{ padding: '0 3px' }}>{description}</p>
        </span>
      </a>
    </div>
  </li>
);

// Reusable component to render tab content
const TabContent = ({ id, title, intro, tools, initiatives }) => (
  <div id={id} className="tab-pane fade">
    <h1>{title}</h1>
    <div className="intro-sec">
      <p>{intro}</p>
    </div>
    <div className="items-section hexa-grid">
      <h1>Tools and resources</h1>
      <ul id="grid" className="clear">
        {tools.map((tool, index) => (
          <HexagonGridItem key={index} {...tool} />
        ))}
      </ul>
      {initiatives && (
        <>
          <h1>Global Initiatives</h1>
          <ul id="grid" className="clear">
            {initiatives.map((initiative, index) => (
              <HexagonGridItem key={index} {...initiative} />
            ))}
          </ul>
        </>
      )}
    </div>
  </div>
);

const tabsData = [
  {
    id: 'tc_nextgen',
    title: 'PROGRAM MODULES',
    link: 'Picture8.png',
    intro:
      " The 'Program Modules'section outlines the core components of the course curriculum, breaking down the learning journey into various focused topics and skill sets. Each module is designed to progressively build students' knowledge and expertise, ensuring a thorough understanding of both fundamental and advanced concepts.",
    tools: [
      {
        backgroundImage: '13.png',
        title: 'FOUNDATION MODULE',
        description: 'Focuses on providing a solid understanding of the basics, setting the groundwork for more advanced studies.',
      },
      {
        backgroundImage: '13.png',
        title: 'SPECIALIZATION MODULE',
        description: 'Allows students to dive deeper into specific fields, refining their skills in niche areas of their chosen domain.',
      },
      {
        backgroundImage: '13.png',
        title: 'CAPSTONE PROJECT MODULE',
        description: 'An opportunity for students to apply their acquired skills through real-world projects, showcasing their expertise.',
      },
    ],
  },
  {
    id: 'tc_data',
    title: 'PROGRAM JOURNEY',
    link: 'Picture7.png',
    intro:
      'The "Program Journey" maps out the educational path that a student will undertake, from enrollment to graduation. It highlights key milestones, learning outcomes, and progression stages that ensure students are equipped for success by the end of the program.',
    tools: [
      {
        backgroundImage: '13.png',
        title: 'ENROLLMENT & ORIENTATION',
        description: 'Students are introduced to the program structure, resources, and expectations.',
      },
      {
        backgroundImage: '13.png',
        title: 'MID-PROGRAM EVALUATION',
        description: 'Regular assessments to ensure students are on track with their learning objectives.',
      },
      {
        backgroundImage: '13.png',
        title: 'GRADUATION & CAREER SUPPORT',
        description:
          'Students complete their courses and receive support for their transition into their professional careers.',
      },
    ],
  },
  {
    id: 'tc_finance',
    title: 'PROGRAM FEES',
    intro:
      'Sign up for the program above, and we’ll provide you with the fee details shortly.',
    tools: [
      {
        backgroundImage: '13.png',
        title: 'SCHOLARSHIP OPPORTUNITIES',
        description: 'Merit-based financial aid to support high-achieving students.',
      },
      {
        backgroundImage: '13.png',
        title: 'INSTALLMENT PLANS',
        description: 'Flexible payment options that allow students to pay the fee in manageable segments.',
      },
      {
        backgroundImage: '13.png',
        title: 'CORPORATE SPONSORSHIP',
        description:
          'Funding provided by partnering companies for eligible students, covering part or all of the program costs.',
      },
    ],
  },
  {
    id: 'tc_innovation',
    title: 'ON-THE-JOB TRAINING',
    intro:
      "Gain practical skills and experience while working in a real-world environment. It combines theoretical knowledge with practical application, enabling trainees to learn directly from tasks, tools, and processes.​",
    tools: [
      {
        backgroundImage: '13.png',
        title: 'INDUSTRY EXPOSURE',
        description: 'Offers hands-on experience by engaging students in projects aligned with current industry needs.',
      },
      {
        backgroundImage: '13.png',
        title: 'PROFESSIONAL NETWORKING',
        description: 'Opportunities to build connections with industry experts and potential employers.',
      },
      {
        backgroundImage: '13.png',
        title: 'SKILL ENHANCEMENT',
        description:
          'A chance to develop soft and hard skills that are crucial for career advancement.',
      },
    ],
  }
];

const TabComponent = () => {
  const [selectedTabId, setSelectedTabId] = useState('');

  // This function will get the current hash from the URL
  const getHashId = () => {
    return window.location.hash.replace('#', '');
  };

  // Update selectedTabId when the hash changes
  useEffect(() => {
    // Initial check for the hash when component mounts
    setSelectedTabId(getHashId());

    // Update hash when user changes it
    const handleHashChange = () => {
      setSelectedTabId(getHashId());
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const selectedTab = tabsData.find(tab => tab.id === selectedTabId);

  return (
    <div className="tab-content">
      {selectedTab ? (
        <>
          <a href="/" className="btnclose">
            <CloseSharpIcon />
          </a>
          <TabContentCard {...selectedTab} />
        </>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default TabComponent;
