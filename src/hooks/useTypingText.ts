import { useEffect, useState } from 'react';

export default function useTypingText(words: string[], speed = 90, pause = 1500) {
  const [displayText, setDisplayText] = useState('');
  const [step, setStep] = useState(0);
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    const timeout = window.setTimeout(() => {
      setDisplayText((prev) =>
        deleting ? current.substring(0, prev.length - 1) : current.substring(0, prev.length + 1)
      );

      if (!deleting && displayText === current) {
        setDeleting(true);
        setStep(pause);
      } else if (deleting && displayText === '') {
        setDeleting(false);
        setIndex((prevIndex) => prevIndex + 1);
        setStep(200);
      } else {
        setStep(deleting ? speed / 2 : speed);
      }
    }, step);

    return () => window.clearTimeout(timeout);
  }, [displayText, deleting, index, pause, speed, step, words]);

  return displayText;
}
