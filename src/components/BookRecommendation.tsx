import { Star, Calendar, User, RotateCcw, ExternalLink } from 'lucide-react';

interface BookRecommendationProps {
  book: any;
  onRestart: () => void;
}

export function BookRecommendation({ book, onRestart }: BookRecommendationProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-8">
          <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full mb-4">
            ✨ ¡Tu recomendación está lista!
          </div>
          <h1 className="text-gray-900">
            Tu próxima lectura
          </h1>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="md:flex">
            {/* Book cover */}
            <div className="md:w-2/5 bg-gradient-to-br from-purple-100 to-pink-100 p-8 flex items-center justify-center">
              <div className="relative">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-full max-w-xs rounded-lg shadow-2xl"
                />
              </div>
            </div>

            {/* Book details */}
            <div className="md:w-3/5 p-8 md:p-12">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                      {book.genre}
                    </span>
                  </div>
                  <h2 className="text-gray-900 mb-2">
                    {book.title}
                  </h2>
                  <div className="flex items-center gap-4 text-gray-600">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{book.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{book.year}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(book.rating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-gray-600">
                    {book.rating.toFixed(1)} / 5.0
                  </span>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  {book.description}
                </p>

                <div className="bg-purple-50 rounded-xl p-4">
                  <h3 className="text-purple-900 mb-2">
                    ¿Por qué este libro?
                  </h3>
                  <p className="text-gray-700">
                    {book.reason}
                  </p>
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    onClick={onRestart}
                    className="flex-1 flex items-center justify-center gap-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-xl hover:bg-gray-200 transition-colors"
                  >
                    <RotateCcw className="w-5 h-5" />
                    Repetir test
                  </button>
                  <a
                    href={`https://www.google.com/search?q=${encodeURIComponent(
                      book.title + ' ' + book.author + ' libro'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-shadow"
                  >
                    Buscar libro
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
