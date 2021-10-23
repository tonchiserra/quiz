import { useState } from "react";
import Questions from "./Questions";
import ScoreScreen from "./ScoreScreen";

const Game = ({quiz, getQuiz}) => {

  const [lose, setLose] = useState(false);

  const toggleLose = () => {
    setLose(!lose);
  }

  return(
    <div>
      {lose
        ? <ScoreScreen
          />
        : <Questions
            quiz={quiz}
            getQuiz={getQuiz}
            toggleLose={toggleLose}
          />
      }      
    </div>
  );
}

export default Game;