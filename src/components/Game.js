import { useState } from "react";
import Questions from "./Questions";
import ScoreScreen from "./ScoreScreen";

const Game = ({quiz, toggleInGame, getQuiz}) => {

  const [lose, setLose] = useState(false);

  const toggleLose = () => {
    setLose(!lose);
  }

  return(
    <div>
      {lose
        ? <ScoreScreen
            toggleInGame={toggleInGame}
          />
        : <Questions
            quiz={quiz}
            toggleInGame={toggleInGame}
            getQuiz={getQuiz}
            toggleLose={toggleLose}
          />
      }      
    </div>
  );
}

export default Game;