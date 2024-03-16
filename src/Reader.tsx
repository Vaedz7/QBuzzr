// QuestionReader.tsx
import React, { useState, useEffect } from "react";

interface QuestionReaderProps {
  delay: number;
  shouldRead: boolean;
  text: string;
}

const QuestionReader: React.FC<QuestionReaderProps> = ({
  delay,
  shouldRead,
  text,
}) => {
  const [currentText, setCurrentText] = useState("");
  let timeoutId: number | undefined;
  let remainingWords: string[] | undefined;

  useEffect(() => {
    if (shouldRead) {
      const words = text.split(" ");
      remainingWords = words.slice();

      const readWord = (word: string, index: number) => {
        let timeoutId = setTimeout(() => {
          setCurrentText(words.slice(0, index + 1).join(" "));
          remainingWords!.shift();
        }, delay * index);
      };

      for (let i = 0; i < words.length; i++) {
        if (shouldRead) {
          readWord(words[i], i);
        } else {
          i--;
        }
      }
    } else {
    }

    // Cleanup on unmount
    return () => clearTimeout(timeoutId);
  }, [shouldRead, delay, text]);

  return <div className="prose">{currentText}</div>;
};

export default QuestionReader;
