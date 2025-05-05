'use client';
import { useState } from 'react';
import '../quiz/quiz.css';
import ArrowButton from '../components/arrowButton/ArrowButton';

export default function QuizInterface() {
  const [currentPage, setCurrentPage] = useState(0);
  const [hoveredOption, setHoveredOption] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState({
    0: null,
    1: null,
    2: null,
    3: null,
    4: null,
  });

  const quizPages = [
    {
      id: 11,
      title: "What's the group's vibe today?",
      options: [
        { id: 0, text: "Chill and Lowkey" },
        { id: 1, text: "Wild and Spontaneous" },
        { id: 2, text: "Fancy and Aesthetic" },
        { id: 3, text: "Outdoorsy and Active" },
        { id: 4, text: "Just hungry" }
      ]
    },
    {
      id: 12,
      title: "What are you craving?",
      options: [
        { id: 0, text: "Something greasy and satisfying" },
        { id: 1, text: "Sweet treats or desserts" },
        { id: 2, text: "Something healthy-ish" },
        { id: 3, text: "Brunch vibes" },
        { id: 4, text: "Not craving food" }
      ]
    },
    {
      id: 14,
      title: "What's the spending vibe?",
      options: [
        { id: 0, text: "Broke college student mode" },
        { id: 1, text: "Mid-tier, nothing too crazy" },
        { id: 2, text: "We ballin' today" }
      ]
    },
    {
      id: 15,
      title: "How much time do you have?",
      options: [
        { id: 0, text: "Just an hour or two" },
        { id: 1, text: "A whole afternoon" },
        { id: 2, text: "All day adventure" }
      ]
    },
    {
      id: 13,
      title: "What's kind of activity are you in the mood for?",
      options: [
        { id: 0, text: "Eating" },
        { id: 1, text: "Drinking" },
        { id: 2, text: "Outdoors" },
        { id: 3, text: "Artsy" },
        { id: 4, text: "Something quick" }
      ]
    }
  ];

  const handleOptionClick = (optionId) => {
    setSelectedOptions({ ...selectedOptions, [currentPage]: optionId });
  };

  const handleNextClick = () => {
    if (currentPage < quizPages.length - 1) setCurrentPage(currentPage + 1);
  };

  const handlePrevClick = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="quiz-wrapper">
      <div className="quiz-container">
        <h2 className="quiz-title">{quizPages[currentPage].title}</h2>

        <div className="options-grid">
          {quizPages[currentPage].options.map((option) => (
            <button
              key={option.id}
              onClick={() => handleOptionClick(option.id)}
              onMouseEnter={() => setHoveredOption(option.id)}
              onMouseLeave={() => setHoveredOption(null)}
              className={`option-button ${
                selectedOptions[currentPage] === option.id ? 'selected' : ''
              }`}
            >
              {option.text}
            </button>
          ))}
        </div>

        <div className="nav-container">
          <ArrowButton
            direction="left"
            onClick={handlePrevClick}
            disabled={currentPage === 0}
          />

          <div className="progress-dots">
            {quizPages.map((_, index) => (
              <div
                key={index}
                className={`dot ${currentPage === index ? 'active' : ''}`}
              />
            ))}
          </div>

          <ArrowButton
            direction="right"
            onClick={handleNextClick}
            disabled={currentPage === quizPages.length - 1}
          />
        </div>
      </div>
    </div>
  );
}
