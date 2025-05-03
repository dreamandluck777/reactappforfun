import React from "react";
import Universal from "./pageFirst";
import { typescriptTestQuestions, typescriptTheory , h3Text } from "../text/typescript";

interface ForPage {
  lang: 'ru' | 'en' | 'az'; 
}

const PageFifth: React.FC<ForPage> = ({ lang }) => {
  const questionsOnly: string[] = typescriptTestQuestions[lang].map((q) => q.question);
  const answersOnly: string[][] = typescriptTestQuestions[lang].map((q) => q.options);
  const correctAnswersOnly: number[] = typescriptTestQuestions[lang].map((q) => q.correctAnswer);
  const theory = typescriptTheory[lang]; 
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

export default PageFifth;