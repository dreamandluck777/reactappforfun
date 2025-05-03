import React from "react";
import Universal from "./pageFirst"; 
import { htmlTheory, htmlTestQuestions } from "../text/html";
import { h3Text } from "../text/text"; 


interface ForPage {
  lang: 'ru' | 'en' | 'az'; 
}

const PageFirst: React.FC<ForPage> = ({ lang }) => {
  
  const questionsOnly = htmlTestQuestions[lang].map(q => q.question);
  const answersOnly = htmlTestQuestions[lang].map(q => q.options);
  const correctAnswersOnly = htmlTestQuestions[lang].map(q => q.correctAnswer);
  const theory = htmlTheory[lang]; 

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

export default PageFirst;
