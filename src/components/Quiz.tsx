import { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { questions } from '../data/questions';
import { getBookRecommendation } from '../utils/recommendation';

interface QuizProps {
  onComplete: (book: any) => void;
}

export function Quiz({ onComplete }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const handleAnswer = (answer: string) => {
    const newAnswers = { ...answers, [currentQuestion]: answer };
    setAnswers(newAnswers);

    if (currentQuestion === questions.length - 1) {
      // Quiz complete
      const recommendation = getBookRecommendation(newAnswers);
      onComplete(recommendation);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const question = questions[currentQuestion];

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-3xl w-full">
        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600">
              Pregunta {currentQuestion + 1} de {questions.length}
            </span>
            <span className="text-sm text-purple-600">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question card */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <h2 className="text-gray-900 mb-8">
            {question.question}
          </h2>

          <div className="space-y-4">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option.value)}
                className={`w-full text-left p-5 rounded-xl border-2 transition-all duration-200 ${
                  answers[currentQuestion] === option.value
                    ? 'border-purple-600 bg-purple-50'
                    : 'border-gray-200 hover:border-purple-300 hover:bg-purple-50/50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="text-2xl">{option.emoji}</div>
                    <div>
                      <div className="text-gray-900">{option.label}</div>
                      {option.description && (
                        <div className="text-sm text-gray-500 mt-1">
                          {option.description}
                        </div>
                      )}
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Navigation */}
        {currentQuestion > 0 && (
          <button
            onClick={handleBack}
            className="mt-6 flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            Pregunta anterior
          </button>
        )}
      </div>
    </div>
  );
}
