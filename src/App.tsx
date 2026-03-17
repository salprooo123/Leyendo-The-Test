import { useState } from 'react';
import { BookRecommendation } from './components/BookRecommendation';
import { Quiz } from './components/Quiz';
import { WelcomeScreen } from './components/WelcomeScreen';

export default function App() {
  const [stage, setStage] = useState<'welcome' | 'quiz' | 'result'>('welcome');
  const [recommendedBook, setRecommendedBook] = useState<any>(null);

  const handleStart = () => {
    setStage('quiz');
  };

  const handleQuizComplete = (book: any) => {
    setRecommendedBook(book);
    setStage('result');
  };

  const handleRestart = () => {
    setStage('welcome');
    setRecommendedBook(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      {stage === 'welcome' && <WelcomeScreen onStart={handleStart} />}
      {stage === 'quiz' && <Quiz onComplete={handleQuizComplete} />}
      {stage === 'result' && (
        <BookRecommendation book={recommendedBook} onRestart={handleRestart} />
      )}
    </div>
  );
}
