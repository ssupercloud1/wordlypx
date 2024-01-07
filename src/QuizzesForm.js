import React, { useState } from 'react';

const QuizzesForm = () => {
  const quiz1 = [
    {
      question: 'Where —— you?',
      options: ['is', 'are', 'we', 'he'],
      correctAnswer: 'are',
    },
    {
      question: 'They were having dinner. Identify the pronoun in this sentence.',
      options: ['They', 'Dinner', 'Were', 'Having'],
      correctAnswer: 'They',
	},
    {
      question: 'Identify the noun in this sentence: I live in London.',
      options: ['In', 'Live', 'London', 'I'],
      correctAnswer: 'London',
	},
    {
      question: 'Jane hurt her elbow ———— playing.',
      options: ['When', 'During', 'In', 'While'],
      correctAnswer: 'While',
	},
    {
      question: 'Sending fake emails that appear to come from genuine sources.',
      options: ['Hacking', 'Stalking', 'Phishing', 'Catfishing'],
      correctAnswer: 'Phishing',
    },
  ];

  const quiz2 = [
    {
      question: 'Yield to what another person wishes.',
      options: ['succeed', 'accede', 'accept', 'abscond'],
      correctAnswer: 'accede',
    },
    {
      question: 'Having abundant supply of money.',
      options: ['alacrity', 'poor', 'affluent', 'anachronistic'],
      correctAnswer: 'affluent',
	},
    {
      question: 'Powerfully persuasive.',
      options: ['cogent', 'coercive', 'flamboyant', 'connive'],
      correctAnswer: 'cogent',
	},
    {
      question: 'A cruel and oppressive dictator.',
      options: ['demagogue', 'equivocal', 'gourmand', 'despot'],
      correctAnswer: 'despot',
	},
    {
      question: 'Not having enough money to pay for necessities.',
      options: ['inure', 'impecunious', 'insecure', 'impoverish'],
      correctAnswer: 'impecunious',
    },
  ];

  const quiz3 = [
    {
      question: 'This is ——— book.',
      options: ['mine', 'her', 'him', 'them'],
      correctAnswer: 'her',
    },
    {
      question: 'I am ——— aware of his efforts.',
      options: ['acutely', 'strong', 'just', 'agonizingly'],
      correctAnswer: 'acutely',
	},
    {
      question: 'You ate rice ———.',
      options: ['lone', 'lonely', 'alone', 'all'],
      correctAnswer: 'alone',
	},
    {
      question: 'What ———— when I called?',
      options: ['were you doing', 'was you do', 'was you doing', 'you were doing'],
      correctAnswer: 'were you doing',
	},
    {
      question: 'I am busy right now, but I will be with you ———— a moment.',
      options: ['by', 'on', 'at', 'in'],
      correctAnswer: 'in',
	},
  ];

  const quiz4 = [
    {
      question: '1. I\'ve ——— of the university, but I have never been there.',
      options: ['hear', 'listened', 'heard', 'had'],
      correctAnswer: 'heard',
    },
    {
      question: '2. When someone follows a person obsessively.',
      options: ['arson', 'stalking', 'identity theft', 'mugging'],
      correctAnswer: 'stalking',
	},
    {
      question: '3. ———— he gets, the harder he becomes on his children.',
      options: ['The oldest', 'Older', 'Oldest', 'The older'],
      correctAnswer: 'The older',
	},
    {
      question: '4. I visited the Eiffel Tower in Paris. Identify the noun.',
      options: ['Eiffel Tower', 'Eiffel Tower and Paris', 'The', 'Paris'],
      correctAnswer: 'Eiffel Tower and Paris',
	},
    {
      question: '5. He is good ——— cricket.',
      options: ['by', 'on', 'at', 'in'],
      correctAnswer: 'at',
    },
  ];

  const quizzes = [
    {
      name: 'Quiz 1',
      questions: quiz1,
    },
    {
      name: 'Quiz 2',
      questions: quiz2,
    },
    {
      name: 'Quiz 3',
      questions: quiz3,
	},
    {
      name: 'Quiz 4',
      questions: quiz4,
    },
  ];

  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (answer) => {
    const isCorrect = answer === selectedQuiz.questions[currentQuestion].correctAnswer;
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < selectedQuiz.questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleRetake = () => {
    setSelectedQuiz(null);
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  const handleSelectQuiz = (quiz) => {
    setSelectedQuiz(quiz);
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  const calculatePercentage = (score, total) => {
    return Math.round((score / total) * 100);
  };

  const passmark = 80;
  const totalQuestions = quizzes[0].questions.length;
  const totalScore = score;
  const percentageScore = calculatePercentage(totalScore, totalQuestions);
  const isPass = percentageScore >= passmark;

  return (
    <div style={{ justifyContent: 'center', overflowX: 'auto', padding: '20px', borderRadius: '5px', border: '2px solid #ccc' }}>
      <div style={{ backgroundColor: '#f2f2f2', padding: '20px' }}>
        <h2 style={{color: '#ff0000', textAlign: 'center'}}>WordlyPX Online Quizzes</h2>
	    <p>Welcome to WordlyPX Quizzes, the perfect way to test your grammar skills! With WordlyPX Quizzes, you can select a quiz and proceed to test your knowledge of English grammar.</p>
        <p> Each quiz is timed, with 15 seconds per question, so you can test your skills under pressure. Our quizzes are perfect for anyone who wants to improve their grammar skills, whether you are a student, a professional, or just someone who loves learning new things. Each Quiz has a passmark of 80%.</p>
		<p>Access WordlyPX today and start testing your grammar skills! 📝</p>
		<select onChange={(e) => handleSelectQuiz(quizzes[e.target.value])}>
          <option value="">Select a quiz:</option>
          {quizzes.map((quiz, index) => (
            <option key={quiz.name} value={index}>
              {quiz.name}
            </option>
          ))}
        </select>
      </div>
      <hr />
      <div style={{ backgroundColor: '#e6e6e6', padding: '20px' }}>
        {selectedQuiz === null ? (
          <div>
            <h2>Select a quiz to begin</h2>
          </div>
        ) : (
          <div>
            {showScore ? (
              <div>
                <h2>Your score is {percentageScore}%</h2>
                {isPass ? (
                  <div>
                    <p>Congratulations! You passed the quiz.</p>
                  </div>
                ) : (
                  <div>
                    <p>Sorry, you did not pass the quiz.</p>
                    {score > 0 && percentageScore < passmark && (
                      <button onClick={handleRetake}>Retake Quiz</button>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <div>
                <h2>{selectedQuiz.questions[currentQuestion].question}</h2>
                <div>
                  {selectedQuiz.questions[currentQuestion].options.map(
                    (option, index) => (
                      <button
                        key={index}
                        style={{
                          margin: '10px',
                          backgroundColor: '#f2f2f2',
                          color: '#000000',
                        }}
                        onClick={() => handleAnswer(option)}
                      >
                        {option}
                      </button>
                    )
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizzesForm;
