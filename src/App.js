import styled from "styled-components";
import { useState } from "react";
import bgimg from "./assets/background.jpg"
import Home from "./components/Home";
import Game from "./components/Game";

const Background = styled.div`
  && {
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;
    background-color: var(--background-color);
    background-image: url(${bgimg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all 300ms ease-in-out;
    transform: ${props => props.inGame ? "translateY(20vh)" : "translateY(0vh)"};
    border-radius: ${props => props.inGame ? "10px" : "0"};
    opacity: ${props => props.inGame ? ".7" : "1"};
  }
`;

const App = () => {

  const [inGame, setInGame] = useState(false);
  const [quiz, setQuiz] = useState({});

  const toggleInGame = () => {
    setInGame(!inGame);
  }

  async function getQuiz() {
    try{
      let res = await fetch("https://opentdb.com/api.php?amount=5");
      let json = await res.json();
  
      if(!res.ok) return {status: res.status, statusText: res.statusText};

      console.log("nueva quiz perro")
      setQuiz(json)
  
    }catch(err){
      let message = err.statusText || "Ocurrio un error";
    }
  }

  async function startQuiz() {
    await getQuiz()
    toggleInGame()
  }

  return (
    <div className="App">
      {inGame 
        ? <Game 
            toggleInGame={toggleInGame}
            quiz={quiz}
            getQuiz={getQuiz}
          /> 
        : <Home startQuiz={startQuiz} />
      }
      <Background inGame={inGame} />
    </div>
  );
}

export default App;
