import styled from 'styled-components';

const Container = styled.header`
  position: relative;

  @media (min-width: 1024px) {
    
    margin-left: 40%;
  }
`;

const SideNav = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  width: 40vw;
  height: 100vh;
  transition: ${props => props.theme.speed500}ms ${props => props.theme.transitCubeBezier};
  transform: translateX(100%);
  opacity: 0;
  z-index: 10;
  background: ${props => props.theme.white};
  box-shadow: 2px 0 15px -1px ${props => props.theme.tertiaryColor};

  nav {

    padding: 3rem 2rem;
    display: flex;
    align-items: center;
    height: 100%;

    ul {
      list-style: none;

      li {
        a {
          display: block;
          padding: 1rem;
          color: ${props => props.theme.secondaryColor};
          text-decoration: none;
        }
      }
    }
  }
`;

const Navigation = styled.nav`
  position: relative;
  padding: 1rem 0;

  ul {

    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    padding: 0.5rem 0;

    li:not(.secondary-menu) {

      padding: 1rem;
    }

    li.secondary-menu {}

    * {

      text-decoration: none;
      color: ${props => props.theme.secondaryColor};
      font-size: 0.9375rem;
      display: block;
    }

    li .menu-label {

      position: relative;
      display: block;
      cursor: pointer;
      width: ${props => props.theme.menuWidth + 10}px;
      height: ${props => props.theme.menuWidth}px;
      z-index: 9999;

      span {

        background: ${props => props.theme.secondaryColor};
        width: ${props => props.theme.menuWidth}px;
        height: 3px;
        display: block;
        border-radius: 15px;
        transition: transform ${props => (props.theme.speed800 + 'ms ' + props.theme.transitCubeBezier)};
        position: absolute;
        top: 50%;
        transform: translateY(-50%);

        &::before, &::after {

          content: '';
          background-color: ${props => props.theme.secondaryColor};
          width: 100%;
          height: inherit;
          position: absolute;
          display: block;
          left: 0;
          border-radius: 15px;
          transition: transform ${props => (props.theme.speed800 + 'ms ' + props.theme.transitCubeBezier)};
        }

        &::before {

          top: -7px;
        }

        &::after {

          top: 7px;
        }
      }
    }
  }
`;



export {Container, Navigation, SideNav};