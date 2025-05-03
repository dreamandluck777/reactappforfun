import React from "react";
import Universal from "./pageFirst"; 
import { cssTestQuestions , cssTheoryAnswers,h3Text } from "../text/css";


interface ForPage {
  lang: 'ru' | 'en' | 'az'; 
}

const PageSecond: React.FC<ForPage> = ({ lang }) => {
  
  const questionsOnly = cssTestQuestions[lang].map(q => q.question);
  const answersOnly = cssTestQuestions[lang].map(q => q.options);
  const correctAnswersOnly = cssTestQuestions[lang].map(q => q.correctAnswer);
  const theory = cssTheoryAnswers[lang]; 

  return (
    <div>
      <Universal
        questions={questionsOnly} 
        answers={answersOnly}
        correctAnswers={correctAnswersOnly} 
        name={h3Text[lang]} 
        theory={theory}
      />
    </div>
  );
};

export default PageSecond;
