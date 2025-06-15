
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { QuizAnswer } from '../pages/Index';
import { questions } from '../data/quizData';

interface QuizSectionProps {
  onComplete: (answers: QuizAnswer[]) => void;
}

const QuizSection: React.FC<QuizSectionProps> = ({ onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');

  const handleAnswerSelect = (answer: string, co2Value: number) => {
    setSelectedAnswer(answer);
    console.log(`Selected answer: ${answer}, CO₂: ${co2Value}g`);
  };

  const handleNext = () => {
    if (!selectedAnswer) return;
    
    const question = questions[currentQuestion];
    const option = question.options.find(opt => opt.text === selectedAnswer);
    
    if (option) {
      const newAnswer: QuizAnswer = {
        questionId: currentQuestion,
        answer: selectedAnswer,
        co2Value: option.co2Value
      };
      
      const updatedAnswers = [...answers, newAnswer];
      setAnswers(updatedAnswers);
      
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer('');
      } else {
        onComplete(updatedAnswers);
      }
    }
  };

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50 p-2 sm:p-4 lg:p-8">
      <div className="w-full max-w-4xl mx-auto">
        <Card className="w-full p-4 sm:p-6 lg:p-8 bg-white/95 backdrop-blur-sm shadow-2xl border-0 animate-fade-in">
          <div className="mb-4 sm:mb-6">
            <div className="flex justify-between items-center mb-2 sm:mb-3">
              <span className="text-xs sm:text-sm text-gray-500">
                Հարց {currentQuestion + 1} / {questions.length}
              </span>
              <span className="text-xs sm:text-sm text-gray-500">{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-1.5 sm:h-2" />
          </div>

          <div className="mb-4 sm:mb-6">
            <div className="text-center mb-4 sm:mb-6">
              <span className="text-2xl sm:text-3xl mb-2 sm:mb-3 block">{question.icon}</span>
              <h2 className="text-base sm:text-lg lg:text-xl font-bold text-gray-800 leading-relaxed px-2">
                {question.question}
              </h2>
            </div>

            <div className="space-y-2 sm:space-y-3">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(option.text, option.co2Value)}
                  className={`w-full p-3 sm:p-4 text-left rounded-lg border-2 transition-all duration-200 hover-scale ${
                    selectedAnswer === option.text
                      ? 'border-blue-500 bg-blue-50 shadow-md'
                      : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm sm:text-base text-gray-700 flex-1 pr-2">{option.text}</span>
                    <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
                      <span className={`px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full text-xs font-medium ${
                        option.co2Value < 1 ? 'bg-green-100 text-green-800' :
                        option.co2Value < 50 ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {option.co2Value}g CO₂
                      </span>
                      {selectedAnswer === option.text && <span className="text-blue-500 text-sm sm:text-base">✓</span>}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Button
              onClick={handleNext}
              disabled={!selectedAnswer}
              size="lg"
              className="w-full sm:w-auto sm:min-w-64 bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white px-6 py-3 rounded-full shadow-lg disabled:opacity-50 disabled:cursor-not-allowed hover-scale text-sm sm:text-base"
            >
              {currentQuestion < questions.length - 1 ? 'Հաջորդ հարց' : 'Ավարտել'} ➡️
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default QuizSection;
