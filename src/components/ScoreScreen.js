import HomeBtn from "./HomeBtn";

const ScoreScreen = ({toggleInGame}) => {
  return(
    <div>
      Perdiste
      <HomeBtn toggleInGame={toggleInGame} />
    </div>
  );
}

export default ScoreScreen;