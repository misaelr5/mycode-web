import React, { useEffect, useState } from "react";

const phrases = [
  "Apps web",
  "Módulos personalizados",
  "Webs institucionales",
  "Landing pages",
  "Ecommerce",
];

function Type() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [visibleText, setVisibleText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const isComplete = visibleText === currentPhrase;
    const isEmpty = visibleText === "";

    const delay = isComplete && !isDeleting ? 1150 : isDeleting ? 42 : 74;

    const timer = setTimeout(() => {
      if (!isDeleting && isComplete) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && isEmpty) {
        setIsDeleting(false);
        setPhraseIndex((currentIndex) => (currentIndex + 1) % phrases.length);
        return;
      }

      const nextLength = visibleText.length + (isDeleting ? -1 : 1);
      setVisibleText(currentPhrase.slice(0, nextLength));
    }, delay);

    return () => clearTimeout(timer);
  }, [phraseIndex, visibleText, isDeleting]);

  return (
    <span className="mycode-typewriter" aria-label="Servicios destacados">
      <span>{visibleText}</span>
      <span className="mycode-typewriter-cursor" aria-hidden="true" />
    </span>
  );
}

export default Type;
