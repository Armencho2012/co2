
import React, { useState } from 'react';
import IntroSection from '../components/IntroSection';
import QuizSection from '../components/QuizSection';
import ResultsSection from '../components/ResultsSection';

export interface QuizAnswer {
  questionId: number;
  answer: string;
  co2Value: number;
}

const Index = () => {
  const [currentSection, setCurrentSection] = useState<'intro' | 'quiz' | 'results'>('intro');
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);

  const startQuiz = () => {
    setCurrentSection('quiz');
  };

  const completeQuiz = (quizAnswers: QuizAnswer[]) => {
    setAnswers(quizAnswers);
    setCurrentSection('results');
  };

  const restartQuiz = () => {
    setAnswers([]);
    setCurrentSection('intro');
  };

  return (
    <div className="w-full min-h-screen">
      {currentSection === 'intro' && <IntroSection onStart={startQuiz} />}
      {currentSection === 'quiz' && <QuizSection onComplete={completeQuiz} />}
      {currentSection === 'results' && <ResultsSection answers={answers} onRestart={restartQuiz} />}
    </div>
  );
};

export default Index;
