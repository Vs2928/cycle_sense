import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MenstruationQuiz.css';

const MenstruationQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const questions = [
    {
      question: "What is the average length of a menstrual cycle?",
      options: ["14 days", "21 days", "28 days", "35 days"],
      correctAnswer: 2,
      explanation: "The average menstrual cycle is 28 days long, although it can range from 21 to 35 days. Each person's cycle is unique, and variations are normal. Tracking your cycle can help you understand your personal pattern."
    },
    {
      question: "Which hormone triggers ovulation?",
      options: ["Estrogen", "Progesterone", "Luteinizing hormone (LH)", "Follicle-stimulating hormone (FSH)"],
      correctAnswer: 2,
      explanation: "Luteinizing hormone (LH) triggers ovulation. LH levels surge about 24-36 hours before ovulation, causing the release of the mature egg from the ovary. This is why ovulation predictor kits measure LH levels to help identify fertile days."
    },
    {
      question: "What is the purpose of menstruation?",
      options: ["To cleanse the body of toxins", "To shed the uterine lining when pregnancy doesn't occur", "To reduce hormone levels", "To prevent infections"],
      correctAnswer: 1,
      explanation: "Menstruation is the body's way of shedding the uterine lining (endometrium) when pregnancy doesn't occur. Throughout the cycle, the endometrium thickens in preparation for a potential pregnancy. If no pregnancy occurs, the body sheds this lining, resulting in menstrual bleeding."
    },
    {
      question: "What is the fertile window in a typical 28-day cycle?",
      options: ["Days 1-5", "Days 7-11", "Days 12-16", "Days 20-24"],
      correctAnswer: 2,
      explanation: "The fertile window typically occurs around days 12-16 in a 28-day cycle, with ovulation usually happening around day 14. Sperm can survive for up to 5 days in the female reproductive tract, so pregnancy is possible from intercourse in the days leading up to ovulation."
    },
    {
      question: "Which of these is NOT a common symptom of PMS (Premenstrual Syndrome)?",
      options: ["Mood swings", "Bloating", "High fever", "Breast tenderness"],
      correctAnswer: 2,
      explanation: "High fever is not a symptom of PMS. Common PMS symptoms include mood swings, bloating, breast tenderness, headaches, food cravings, irritability, and fatigue. If you experience a fever during your menstrual cycle, it may indicate an infection or another health issue that should be evaluated by a healthcare provider."
    },
    {
      question: "What is the primary cause of menstrual cramps?",
      options: ["Hormonal imbalance", "Uterine contractions", "Dehydration", "Poor diet"],
      correctAnswer: 1,
      explanation: "Menstrual cramps (dysmenorrhea) are primarily caused by uterine contractions. During menstruation, the uterus contracts to help shed its lining. These contractions are triggered by hormone-like substances called prostaglandins. Higher levels of prostaglandins are associated with more severe menstrual cramps."
    },
    {
      question: "Which nutrient is important to increase during menstruation due to blood loss?",
      options: ["Vitamin C", "Iron", "Calcium", "Vitamin D"],
      correctAnswer: 1,
      explanation: "Iron is important to increase during menstruation due to blood loss. Menstrual blood loss can deplete iron stores and potentially lead to iron deficiency anemia, especially in those with heavy periods. Foods rich in iron include red meat, spinach, beans, and fortified cereals."
    },
    {
      question: "What is amenorrhea?",
      options: ["Heavy menstrual bleeding", "Absence of menstruation", "Irregular periods", "Painful periods"],
      correctAnswer: 1,
      explanation: "Amenorrhea is the absence of menstruation. Primary amenorrhea is when menstruation hasn't started by age 15. Secondary amenorrhea is when periods stop for 3 or more months in someone who previously had regular periods. Causes can include pregnancy, breastfeeding, menopause, hormonal imbalances, excessive exercise, low body weight, stress, or certain medical conditions."
    },
    {
      question: "Which of these conditions is characterized by tissue similar to the uterine lining growing outside the uterus?",
      options: ["Polycystic Ovary Syndrome (PCOS)", "Endometriosis", "Fibroids", "Adenomyosis"],
      correctAnswer: 1,
      explanation: "Endometriosis is characterized by tissue similar to the uterine lining (endometrium) growing outside the uterus. This tissue responds to hormonal changes during the menstrual cycle, causing inflammation and pain. Common symptoms include painful periods, pain during intercourse, and infertility."
    },
    {
      question: "What is the average amount of blood lost during a typical period?",
      options: ["10-20 ml", "30-40 ml", "50-60 ml", "70-80 ml"],
      correctAnswer: 1,
      explanation: "The average amount of blood lost during a typical period is about 30-40 ml (2-3 tablespoons). However, this can vary, with some people experiencing lighter or heavier flows. Menstrual flow greater than 80 ml is considered heavy menstrual bleeding (menorrhagia) and may require medical attention."
    }
  ];

  const handleAnswerClick = (selectedIndex) => {
    setSelectedAnswer(selectedIndex);
    setShowExplanation(true);
    if (selectedIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    setShowExplanation(false);
    setSelectedAnswer(null);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setShowExplanation(false);
    setSelectedAnswer(null);
    setScore(0);
    setQuizCompleted(false);
  };

  return (
    <div className="quiz-page">
      <div className="quiz-header">
        <Link to="/dashboard" className="back-to-dashboard">← Back to Dashboard</Link>
        <h1>Menstruation Health Quiz</h1>
      </div>
      
      <div className="quiz-container">
        {!quizCompleted ? (
          <div className="question-container">
            <div className="progress-bar">
              <div 
                className="progress" 
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
            <p className="question-counter">Question {currentQuestion + 1} of {questions.length}</p>
            
            <h2>{questions[currentQuestion].question}</h2>
            
            <div className="options-container">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(index)}
                  className={`option-button ${
                    selectedAnswer === index 
                      ? index === questions[currentQuestion].correctAnswer 
                        ? 'correct' 
                        : 'incorrect' 
                      : ''
                  }`}
                  disabled={showExplanation}
                >
                  {option}
                </button>
              ))}
            </div>
            
            {showExplanation && (
              <div className="explanation-container">
                <h3>
                  {selectedAnswer === questions[currentQuestion].correctAnswer 
                    ? '✓ Correct!' 
                    : '✗ Incorrect'}
                </h3>
                <p>{questions[currentQuestion].explanation}</p>
                <button className="next-button" onClick={handleNextQuestion}>
                  {currentQuestion < questions.length - 1 ? 'Next Question' : 'See Results'}
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="results-container">
            <h2>Quiz Completed!</h2>
            <p className="score">Your Score: {score} out of {questions.length}</p>
            <p className="score-message">
              {score === questions.length 
                ? 'Perfect! You have excellent knowledge about menstrual health.' 
                : score >= questions.length / 2 
                  ? 'Good job! You have a solid understanding of menstrual health.' 
                  : 'Keep learning! Understanding your menstrual health is important.'}
            </p>
            <div className="results-buttons">
              <button className="restart-button" onClick={restartQuiz}>
                Restart Quiz
              </button>
              <Link to="/dashboard" className="dashboard-button">
                Return to Dashboard
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenstruationQuiz;