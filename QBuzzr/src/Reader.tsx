// QuestionReader.tsx

import React, { useState, useEffect } from 'react';

interface QuestionReaderProps {
  delay: number;
  shouldRead: boolean;
  text: string;
}

const QuestionReader: React.FC<QuestionReaderProps> = ({ delay, shouldRead, text }) => {
  const [currentText, setCurrentText] = useState('');
  let timeoutId: number | undefined;
  let remainingWords: string[] | undefined;

  useEffect(() => {
    if (shouldRead) {
      const words = text.split(' ');
      remainingWords = words.slice();

      const readWord = (word: string, index: number) => {
        timeoutId = setTimeout(() => {
          setCurrentText(words.slice(0, index + 1).join(' '));
          remainingWords!.shift(); // Remove read word from remaining
        }, delay * index);
      };

      words.forEach(readWord);
    } else {
      clearTimeout(timeoutId); // Clear pending timeouts
      remainingWords = currentText.split(' '); // Update remaining based on currentText
    }

    // Cleanup on unmount
    return () => clearTimeout(timeoutId);
  }, [shouldRead, delay, text]);

  return (
    <div className="prose">{currentText}</div>
  );
};

export default QuestionReader;

