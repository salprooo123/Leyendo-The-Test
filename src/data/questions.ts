export const questions = [
  {
    question: '¿Qué tipo de historia te atrae más?',
    options: [
      {
        emoji: '🔮',
        label: 'Mundos de fantasía y magia',
        description: 'Aventuras épicas en reinos imaginarios',
        value: 'fantasy',
      },
      {
        emoji: '🔍',
        label: 'Misterios y suspense',
        description: 'Intrigas que mantienen en vilo',
        value: 'mystery',
      },
      {
        emoji: '❤️',
        label: 'Historias románticas',
        description: 'Relaciones y emociones profundas',
        value: 'romance',
      },
      {
        emoji: '🚀',
        label: 'Ciencia ficción',
        description: 'Futuros posibles y tecnología',
        value: 'scifi',
      },
      {
        emoji: '📚',
        label: 'Realismo y drama',
        description: 'Historias de la vida real',
        value: 'realistic',
      },
      {
        emoji: '😱',
        label: 'Terror y horror',
        description: 'Historias que te helarán la sangre',
        value: 'horror',
      },
      {
        emoji: '🗡️',
        label: 'Aventuras y acción',
        description: 'Exploración y adrenalina',
        value: 'adventure',
      },
    ],
  },
  {
    question: '¿Prefieres historias con conflictos a gran escala o personales?',
    options: [
      {
        emoji: '⚔️',
        label: 'Épico y a gran escala',
        description: 'Guerras, reinos, destinos del mundo',
        value: 'epic',
      },
      {
        emoji: '💔',
        label: 'Íntimo y personal',
        description: 'Conflictos internos y relaciones',
        value: 'intimate',
      },
      {
        emoji: '🌐',
        label: 'Ambos niveles',
        description: 'Lo personal afecta lo global',
        value: 'both',
      },
    ],
  },
  {
    question: '¿Qué nivel de violencia te sientes cómodo leyendo?',
    options: [
      {
        emoji: '🕊️',
        label: 'Mínima o ninguna',
        description: 'Historias pacíficas',
        value: 'peaceful',
      },
      {
        emoji: '⚡',
        label: 'Moderada',
        description: 'Presente pero no gráfica',
        value: 'moderate',
      },
      {
        emoji: '🗡️',
        label: 'Intensa y realista',
        description: 'Descripciones detalladas',
        value: 'intense',
      },
    ],
  },
  {
    question: '¿Qué ritmo de lectura prefieres?',
    options: [
      {
        emoji: '⚡',
        label: 'Rápido y emocionante',
        description: 'Acción constante y giros de trama',
        value: 'fast',
      },
      {
        emoji: '🌊',
        label: 'Pausado y reflexivo',
        description: 'Tiempo para pensar y sentir',
        value: 'slow',
      },
      {
        emoji: '🎭',
        label: 'Variado',
        description: 'Una mezcla de ambos',
        value: 'mixed',
      },
    ],
  },
  {
    question: '¿Qué importancia tiene el romance en la trama?',
    options: [
      {
        emoji: '💖',
        label: 'Central y apasionado',
        description: 'El romance es el foco principal',
        value: 'romance-heavy',
      },
      {
        emoji: '💕',
        label: 'Subtrama importante',
        description: 'Presente pero no dominante',
        value: 'romance-moderate',
      },
      {
        emoji: '🚫',
        label: 'Mínimo o inexistente',
        description: 'Prefiero otras tramas',
        value: 'romance-minimal',
      },
    ],
  },
  {
    question: '¿Qué te gustaría sentir al leer?',
    options: [
      {
        emoji: '😄',
        label: 'Alegría y diversión',
        value: 'happy',
      },
      {
        emoji: '😢',
        label: 'Emoción profunda',
        value: 'emotional',
      },
      {
        emoji: '😨',
        label: 'Tensión y miedo',
        value: 'scary',
      },
      {
        emoji: '🤔',
        label: 'Reflexión y aprendizaje',
        value: 'thoughtful',
      },
      {
        emoji: '🎢',
        label: 'Sorpresa y asombro',
        value: 'surprising',
      },
    ],
  },
  {
    question: '¿Cuál es tu época favorita?',
    options: [
      {
        emoji: '🏛️',
        label: 'Pasado histórico',
        description: 'Desde la antigüedad hasta el siglo XIX',
        value: 'historical',
      },
      {
        emoji: '🏙️',
        label: 'Actualidad',
        description: 'Mundo contemporáneo',
        value: 'contemporary',
      },
      {
        emoji: '🌌',
        label: 'Futuro',
        description: 'Mundos por venir',
        value: 'future',
      },
      {
        emoji: '✨',
        label: 'Atemporal',
        description: 'No importa la época',
        value: 'timeless',
      },
      {
        emoji: '🏰',
        label: 'Medieval/Antiguo',
        description: 'Caballeros, reinos, antiguas civilizaciones',
        value: 'medieval',
      },
    ],
  },
  {
    question: '¿Prefieres mundos completamente nuevos o nuestro mundo?',
    options: [
      {
        emoji: '🌍',
        label: 'Nuestro mundo real',
        description: 'Ambientado en la Tierra',
        value: 'real-world',
      },
      {
        emoji: '✨',
        label: 'Nuestro mundo + magia',
        description: 'Realidad con elementos fantásticos',
        value: 'urban-fantasy',
      },
      {
        emoji: '🪐',
        label: 'Mundo completamente nuevo',
        description: 'Universos imaginarios',
        value: 'new-world',
      },
    ],
  },
  {
    question: '¿Qué tan complejo quieres que sea el sistema de magia o tecnología?',
    options: [
      {
        emoji: '📖',
        label: 'Simple e intuitivo',
        description: 'Fácil de entender',
        value: 'simple-magic',
      },
      {
        emoji: '📚',
        label: 'Detallado y complejo',
        description: 'Sistemas con reglas específicas',
        value: 'complex-magic',
      },
      {
        emoji: '🚫',
        label: 'Sin magia ni sci-fi',
        description: 'Prefiero realismo',
        value: 'no-magic',
      },
    ],
  },
  {
    question: '¿Qué longitud prefieres?',
    options: [
      {
        emoji: '📖',
        label: 'Corto y conciso',
        description: 'Menos de 300 páginas',
        value: 'short',
      },
      {
        emoji: '📚',
        label: 'Extenso y detallado',
        description: 'Más de 500 páginas',
        value: 'long',
      },
      {
        emoji: '📕',
        label: 'Duración media',
        description: 'Entre 300-500 páginas',
        value: 'medium',
      },
      {
        emoji: '📚📚',
        label: 'Saga épica',
        description: 'Series largas de múltiples libros',
        value: 'series',
      },
    ],
  },
  {
    question: '¿Qué tipo de protagonista prefieres?',
    options: [
      {
        emoji: '🦸',
        label: 'Héroe o heroína valiente',
        value: 'hero',
      },
      {
        emoji: '🎭',
        label: 'Personaje complejo y ambiguo',
        value: 'complex',
      },
      {
        emoji: '👤',
        label: 'Persona común en situaciones extraordinarias',
        value: 'ordinary',
      },
      {
        emoji: '🌟',
        label: 'Múltiples perspectivas',
        value: 'multiple',
      },
      {
        emoji: '😈',
        label: 'Antihéroe o moralmente gris',
        value: 'antihero',
      },
    ],
  },
  {
    question: '¿Prefieres finales felices o realistas?',
    options: [
      {
        emoji: '😊',
        label: 'Final feliz garantizado',
        description: 'Todo se resuelve bien',
        value: 'happy-ending',
      },
      {
        emoji: '😐',
        label: 'Realista/Agridulce',
        description: 'Victoria con costos',
        value: 'realistic-ending',
      },
      {
        emoji: '😱',
        label: 'Oscuro/Impactante',
        description: 'No todos sobreviven',
        value: 'dark-ending',
      },
      {
        emoji: '🎲',
        label: 'No me importa',
        description: 'Sorpréndeme',
        value: 'any-ending',
      },
    ],
  },
  {
    question: '¿Qué tipo de humor prefieres (si hay humor)?',
    options: [
      {
        emoji: '😂',
        label: 'Comedia ligera y divertida',
        value: 'light-humor',
      },
      {
        emoji: '😏',
        label: 'Sarcasmo e ironía',
        value: 'dark-humor',
      },
      {
        emoji: '🤡',
        label: 'Absurdo y surrealista',
        value: 'absurd-humor',
      },
      {
        emoji: '😐',
        label: 'Prefiero historias serias',
        value: 'no-humor',
      },
    ],
  },
  {
    question: '¿Qué tema te interesa explorar?',
    options: [
      {
        emoji: '💪',
        label: 'Superación personal',
        value: 'growth',
      },
      {
        emoji: '👥',
        label: 'Relaciones humanas',
        value: 'relationships',
      },
      {
        emoji: '⚖️',
        label: 'Justicia y moralidad',
        value: 'justice',
      },
      {
        emoji: '🌍',
        label: 'Sociedad y cultura',
        value: 'society',
      },
      {
        emoji: '🧠',
        label: 'Filosofía y existencia',
        value: 'philosophy',
      },
      {
        emoji: '👑',
        label: 'Poder y política',
        value: 'politics',
      },
      {
        emoji: '🔬',
        label: 'Ciencia y descubrimiento',
        value: 'science',
      },
    ],
  },
  {
    question: '¿Qué tan predecible quieres que sea la trama?',
    options: [
      {
        emoji: '📖',
        label: 'Estructura clásica',
        description: 'Me gustan los tropos conocidos',
        value: 'predictable',
      },
      {
        emoji: '🎲',
        label: 'Algunos giros inesperados',
        description: 'Balance entre lo familiar y lo sorpresivo',
        value: 'some-twists',
      },
      {
        emoji: '🌪️',
        label: 'Completamente impredecible',
        description: 'Sorpréndeme constantemente',
        value: 'unpredictable',
      },
    ],
  },
];