import { BookOpen, Sparkles } from 'lucide-react';
import { totalBooksCount } from '../data/books';

interface WelcomeScreenProps {
  onStart: () => void;
}

export function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-2xl w-full text-center space-y-8">
        <div className="flex justify-center">
          <div className="relative">
            <BookOpen className="w-24 h-24 text-purple-600" strokeWidth={1.5} />
            <Sparkles className="w-8 h-8 text-pink-500 absolute -top-2 -right-2 animate-pulse" />
          </div>
        </div>
        
        <div className="space-y-4">
          <h1 className="text-purple-900">
            Leyendo: el Test
          </h1>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Responde algunas preguntas y descubre qué libro es perfecto para ti. 
            Nuestro algoritmo analizará tus preferencias para encontrar tu próxima lectura ideal.
          </p>
        </div>

        <button
          onClick={onStart}
          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-4 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
          Comenzar el Test
        </button>

        <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200">
          <div className="space-y-2">
            <div className="text-3xl text-purple-600">{totalBooksCount.toLocaleString()}+</div>
            <div className="text-sm text-gray-600">Libros en nuestra base de datos</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl text-purple-600">15</div>
            <div className="text-sm text-gray-600">Preguntas personalizadas</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl text-purple-600">100%</div>
            <div className="text-sm text-gray-600">Recomendaciones únicas</div>
          </div>
        </div>
      </div>
    </div>
  );
}