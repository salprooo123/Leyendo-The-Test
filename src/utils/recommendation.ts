import { books, Book } from '../data/books';

export function getBookRecommendation(answers: Record<number, string>): Book {
  // Calculate scores for each book based on answers
  const bookScores = books.map((book) => {
    let score = 0;
    let criticalMatches = 0;

    // Check each answer against book tags
    Object.values(answers).forEach((answer, index) => {
      if (book.tags.includes(answer)) {
        // Weight certain questions more heavily
        if (index === 0) {
          // Genre is most important
          score += 3;
          criticalMatches++;
        } else if (index === 1 || index === 4) {
          // Scale and romance importance
          score += 2;
          criticalMatches++;
        } else {
          score += 1;
        }
      }
    });

    // Bonus for books that match multiple critical criteria
    if (criticalMatches >= 3) {
      score += 5;
    }

    return { book, score, criticalMatches };
  });

  // Sort by score (descending), then critical matches, then rating
  bookScores.sort((a, b) => {
    if (b.score !== a.score) {
      return b.score - a.score;
    }
    if (b.criticalMatches !== a.criticalMatches) {
      return b.criticalMatches - a.criticalMatches;
    }
    return b.book.rating - a.book.rating;
  });

  // Get the top recommendation
  const topBook = bookScores[0].book;

  // Generate personalized reason based on answers
  const reason = generateReason(answers, topBook);

  return { ...topBook, reason };
}

function generateReason(answers: Record<number, string>, book: Book): string {
  const reasons: string[] = [];

  // Genre match (Question 0)
  const genreMap: Record<string, string> = {
    fantasy: 'te encanta la fantasía y este libro te transportará a mundos mágicos increíbles',
    mystery: 'te fascinan los misterios y esta historia te mantendrá adivinando hasta el final',
    romance: 'buscas historias románticas y esta te tocará el corazón profundamente',
    scifi: 'te atrae la ciencia ficción y este libro explora conceptos fascinantes del futuro',
    realistic: 'prefieres historias realistas y esta refleja la complejidad de la vida auténtica',
    horror: 'te gusta el terror y esta historia te helará la sangre',
    adventure: 'buscas aventuras emocionantes y este libro está lleno de acción',
  };
  
  if (genreMap[answers[0]]) {
    reasons.push(genreMap[answers[0]]);
  }

  // Epic vs Intimate (Question 1)
  if (answers[1] === 'epic' && book.tags.includes('epic')) {
    reasons.push('presenta conflictos a gran escala que cambiarán destinos');
  } else if (answers[1] === 'intimate' && book.tags.includes('intimate')) {
    reasons.push('se centra en conflictos personales profundos y emotivos');
  } else if (answers[1] === 'both' && book.tags.includes('both')) {
    reasons.push('equilibra perfectamente lo épico con lo personal');
  }

  // Pace (Question 3)
  if (answers[3] === 'fast' && book.tags.includes('fast')) {
    reasons.push('el ritmo trepidante te mantendrá pegado a las páginas');
  } else if (answers[3] === 'slow' && book.tags.includes('slow')) {
    reasons.push('su narrativa pausada te permitirá saborear cada momento');
  } else if (answers[3] === 'mixed' && book.tags.includes('mixed')) {
    reasons.push('alterna perfectamente entre momentos de acción y reflexión');
  }

  // Romance level (Question 4)
  if (answers[4] === 'romance-heavy' && book.tags.includes('romance-heavy')) {
    reasons.push('el romance es central y apasionado');
  } else if (answers[4] === 'romance-minimal' && book.tags.includes('romance-minimal')) {
    reasons.push('se enfoca en otros aspectos sin romance innecesario');
  }

  // Emotion (Question 5)
  const emotionMap: Record<string, string> = {
    happy: 'te llenará de alegría y optimismo',
    emotional: 'la profundidad emocional resonará contigo',
    scary: 'te dará la tensión y el suspense que buscas',
    thoughtful: 'te hará reflexionar sobre temas profundos',
    surprising: 'está lleno de giros inesperados que te sorprenderán',
  };
  
  if (emotionMap[answers[5]]) {
    reasons.push(emotionMap[answers[5]]);
  }

  // Ending preference (Question 11)
  if (answers[11] === 'happy-ending' && book.tags.includes('happy-ending')) {
    reasons.push('tiene el final feliz que buscas');
  } else if (answers[11] === 'dark-ending' && book.tags.includes('dark-ending')) {
    reasons.push('no teme los finales oscuros e impactantes');
  } else if (answers[11] === 'realistic-ending' && book.tags.includes('realistic-ending')) {
    reasons.push('ofrece un final realista y satisfactorio');
  }

  // Theme (Question 13)
  const themeMap: Record<string, string> = {
    growth: 'explora la superación personal de manera inspiradora',
    relationships: 'profundiza en las relaciones humanas con maestría',
    philosophy: 'ofrece reflexiones filosóficas que te fascinarán',
    society: 'presenta una perspectiva única sobre la sociedad',
    politics: 'examina el poder y la política con profundidad',
    justice: 'explora temas de justicia y moralidad',
    science: 'presenta fascinantes conceptos científicos',
  };
  
  if (themeMap[answers[13]]) {
    reasons.push(themeMap[answers[13]]);
  }

  // Protagonist type (Question 10)
  if (answers[10] === 'antihero' && book.tags.includes('antihero')) {
    reasons.push('presenta protagonistas moralmente grises y fascinantes');
  } else if (answers[10] === 'multiple' && book.tags.includes('multiple')) {
    reasons.push('ofrece múltiples perspectivas enriquecedoras');
  }

  // Combine reasons
  if (reasons.length === 0) {
    return `Basándonos en tus preferencias únicas, creemos que "${book.title}" es perfecto para ti. Su estilo distintivo y su narrativa cautivadora coinciden exactamente con lo que estás buscando.`;
  }

  const selectedReasons = reasons.slice(0, 4).join(', ');
  return `Recomendamos "${book.title}" porque ${selectedReasons}. ¡Estamos seguros de que disfrutarás cada página!`;
}