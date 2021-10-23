const HomeBtn = ({toggleInGame, HomeIcon}) => {
  return(
    <button onClick={() => toggleInGame()}><img alt="Home" src={HomeIcon} /></button>
  );
}

export default HomeBtn;