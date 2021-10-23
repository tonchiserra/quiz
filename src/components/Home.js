import styled from "styled-components";

const HomeContainer = styled.div`
  && {
    background-color: transparent;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  && > button {
    background-color: var(--yellow-color);
    width: 70%;
    height: 3rem;
    cursor: pointer;
    transition: all 300ms ease-in-out;
    margin-top: 6rem;
  }

  && > button:hover {
    opacity: .75;
  }
`;

const Home = ({startQuiz}) => {
  return(
    <HomeContainer>
      <button onClick={() => startQuiz()} >New game</button>
    </HomeContainer>
  );
}

export default Home;