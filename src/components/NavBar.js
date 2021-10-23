import styled from 'styled-components';
import HomeBtn from './HomeBtn';
import HomeIcon from '../assets/home-icon.svg';
import AboutIcon from '../assets/about-icon.svg';
import SettingsIcon from '../assets/settings-icon.svg';
import ScoreIcon from '../assets/score-icon.svg';

const NavBarContainer = styled.nav`
  && {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 999;
  width: 100vw;
  height: var(--nav-height);
  background-color: var(--white-color);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  box-shadow: 0px -6px 20px rgba(85, 85, 85, 0.15);
  }
  && > button {
    background: transparent;
    cursor: pointer;
    transition: all 300ms ease-in-out;
  }
  && > button:hover {
    opacity: .75;
  }
  && > button > img {
    width: 2rem;
    height: 2rem;
  }
`;

const NavBar = ({toggleInGame}) => {
  return(
    <NavBarContainer>
      <HomeBtn toggleInGame={toggleInGame} HomeIcon={HomeIcon}/>
      <button><img alt="Scores" src={ScoreIcon} /></button>
      <button><img alt="Settings" src={SettingsIcon} /></button>
      <button><img alt="About" src={AboutIcon} /></button>
    </NavBarContainer>
  );
}

export default NavBar;