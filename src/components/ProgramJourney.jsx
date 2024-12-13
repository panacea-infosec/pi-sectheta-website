import React from "react";
import VerticalBreadcrumbs from "./VerticalBreadcrumbs";
import './ProgramJourney.css'; // Import the CSS file

const ProgramJourney = () => {
  const items = [
    {
      id: 1,
      title: "Application starts",
      content:
        "Students can opt and apply for this certificate program in their final year or after graduating from their college. Working professionals looking to switch their domain can also apply.",
    },
    {
      id: 2,
      title: "Sectheta Competence Test – SCT I",
      content:
        "Students appear for basic aptitude & functional tests in the domain of networks & IT. Click here for sample questions.",
    },
    {
      id: 3,
      title: "Intimation of Acceptance",
      content:
        "We release a list of selected students and waitlist. Students accept the offer and pay their fees.",
    },
    {
      id: 4,
      title: "Cohort Onboarding",
      content:
        "Gain access to your cohort’s digital platform and your bridge course materials to get started.",
    },
    {
      id: 5,
      title: "Exploration",
      content:
        "Students begin their learning journey with high practice to instruction to experience ratio.",
    },
  ];

  return (
    <div className="program-journey">
      <VerticalBreadcrumbs items={items} />
    </div>
  );
};

export default ProgramJourney;
