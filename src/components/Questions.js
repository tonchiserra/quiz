import { useState } from "react";
import styled from "styled-components";
import Answers from "./Answers";
import HomeBtn from "./HomeBtn";

const QuestionContainer = styled.div`
  && {
    height: 100vh;
    width: 100vw;
  }
  .category {
    height: 20vh;
    padding: 2rem;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .category > h1 {
    padding: 0;
    margin: 0;
    text-align: center;
  }
  .question {
    padding: 1rem;
    margin: 0;
    height: 30vh;
    display: flex;
    align-items: center;
  }
  .question > p {
    margin: 0;
    font-size: 1.5rem;
    text-align: center;
    line-height: 1.2;
  }
`;

const Questions = ({quiz, toggleInGame, getQuiz, toggleLose}) => {
  const [index, setIndex] = useState(0);

  async function showNextQuestion() {
    if(index === 4){
      await getQuiz()
      setIndex(0)
    }else{
      setIndex(index+1)
    }
  }

  return(
    <QuestionContainer>
      <div className="category">
        <h1>{quiz.results[index].category}</h1>
      </div>
      <div className="question">
        <p>{quiz.results[index].question}</p>
      </div>
      <Answers
        correct={quiz.results[index].correct_answer}
        incorrect={quiz.results[index].incorrect_answers}
        showNextQuestion={showNextQuestion}
        index={index}
        toggleLose={toggleLose}
      />

      <HomeBtn toggleInGame={toggleInGame} />
    </QuestionContainer>
  );
}

export default Questions;