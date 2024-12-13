import React, { useState } from "react";
import { Button, Card, CardContent, Typography, Avatar, Box } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import "./Carousel.css";

const reviews = [
  {
    name: "Aditi Dixit",
    cohort: "Analytics Cohort Class of 2023",
    feedback:
      "The feedback that we gave in each class was taken seriously, and the instructors improved dynamically in each session. My expectations from PI was x, and they delivered 2x. Whatever I thought I would get, PI ended up giving me so much more!",
    link: "Read more on Panacea Infosec",
    avatar: "https://example.com/aditi-avatar.jpg", // Replace with the actual avatar link or image URL
  },
  {
    name: "Nitin Verma",
    cohort: "New Batch 2022",
    feedback: "Something else as feedback",
    link: "Read more on Panacea Infosec",
    avatar: "https://example.com/nitin-avatar.jpg", // Replace with the actual avatar link or image URL
  },
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Box className="carousel-container">
      <Button onClick={handlePrev} className="arrow-button">
        <ArrowBackIos />
      </Button>

      <Card className="review-card">
        <CardContent>
          <Box className="review-header">
            <Avatar
              alt={reviews[activeIndex].name}
              src={reviews[activeIndex].avatar}
              className="review-avatar"
            />
            <Box>
              <Typography variant="h6">{reviews[activeIndex].name}</Typography>
              <Typography color="textSecondary">
                {reviews[activeIndex].cohort}
              </Typography>
            </Box>
          </Box>
          <Typography variant="body1" className="review-feedback">
            {reviews[activeIndex].feedback}
          </Typography>
          <Typography color="primary" variant="body2" component="a" href="#">
            {reviews[activeIndex].link}
          </Typography>
        </CardContent>
      </Card>

      <Button onClick={handleNext} className="arrow-button">
        <ArrowForwardIos />
      </Button>
    </Box>
  );
};

export default Carousel;
