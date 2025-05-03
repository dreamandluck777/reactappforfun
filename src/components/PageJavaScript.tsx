import React from "react";
import Universal from "./pageFirst";
import { javascriptTestQuestions, javascriptTheory, h3Text } from "../text/js";

interface ForPage {
  lang: 'ru' | 'en' | 'az'; 
}

const PageThird: React.FC<ForPage> = ({ lang }) => {
  const questionsOnly: string[] = javascriptTestQuestions[lang].map((q) => q.question);
  const answersOnly: string[][] = javascriptTestQuestions[lang].map((q) => q.options);
  const correctAnswersOnly: number[] = javascriptTestQuestions[lang].map((q) => q.correctAnswer);
  const theory = javascriptTheory[lang]; 
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

export default PageThird;
