import { useState, useEffect } from "react";
import styled from "styled-components";

const AnswersContainer = styled.div`
  && {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1rem;
    padding: 0 2rem;
  }
  && > button {
    height: 4rem;
    width: 100%;
    cursor: pointer;
    transition: all 300ms ease-in-out;
  }
  && > button:hover {
    background-color: var(--yellow-color);
  }
`;

const Answers = ({correct, incorrect, showNextQuestion, index, toggleLose}) => {

  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    let newAnswers = [correct];
    incorrect.map(el => (newAnswers.push(el)));
    newAnswers = newAnswers.sort(() => Math.random()-0.5);
    setAnswers(newAnswers);
  },[index])

  const isCorrect = (el) => {
    document.getElementById(el).style.backgroundColor = "var(--green-color)";
    setTimeout(function(){showNextQuestion()}, 1000);
  }

  const isIncorrect = (el) => {
    answers.map(el => {
      (el === correct) ? (document.getElementById(el).style.backgroundColor = "var(--green-color)")
      : (document.getElementById(el).style.backgroundColor = "var(--red-color)");
    })
    setTimeout(function(){toggleLose()}, 1000)
  }

  const verifyAnswer = (el) => {
    (el === correct) ? isCorrect(el) : isIncorrect(el);
  }

  return(
    <AnswersContainer>
      {answers.map(el => (<button id={el} key={el} onClick={() => verifyAnswer(el)}>{el}</button>))}
    </AnswersContainer>
  );
}

export default Answers;