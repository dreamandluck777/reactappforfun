import React from "react";
import Universal from "./pageFirst";
import { reactTestQuestions, reactTheory , h3Text } from "../text/react";

interface ForPage {
  lang: 'ru' | 'en' | 'az'; 
}

const PageFourth: React.FC<ForPage> = ({ lang }) => {
  const questionsOnly: string[] = reactTestQuestions[lang].map((q) => q.question);
  const answersOnly: string[][] = reactTestQuestions[lang].map((q) => q.options);
  const correctAnswersOnly: number[] = reactTestQuestions[lang].map((q) => q.correctAnswer);
  const theory = reactTheory[lang]; 
  const name = h3Text[lang];

  return (
    <div>
      <Universal 
        questions={questionsOnly}
        answers={answersOnly}
        correctAnswers={correctAnswersOnly}
        name={name}
        theory={theory}
      />
    </div>
  );
};

export default PageFourth;