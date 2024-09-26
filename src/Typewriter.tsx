import { useState, useEffect } from "react";

type TypewriterProps = {
  text: string;
  delay: number;
  size: number;
};

const Typewriter = ({size, text, delay }: TypewriterProps) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    } else {
      const resetTimeout = setTimeout(() => {
        setCurrentText("");
        setCurrentIndex(0);
      }, delay * 2); // Adjust this delay if needed

      return () => clearTimeout(resetTimeout);
    }
  }, [currentIndex, delay, text]);

  currentText.fontsize(size);

  return <span style={{fontSize: `${size}px`}}>{currentText}</span>;
};

export default Typewriter;
