import styled from 'styled-components';

const Container = styled.header`
  position: relative;

  @media (min-width: 1024px) {
    
    margin-left: 40%;
  }
`;

const Navigation = styled.nav`
  position: relative;

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

    
    li .menu-check {

      display: none;

      &:checked {

        ~ .menu-label span {

          background-color: ${props => props.theme.primaryColor};

          &::before, &::after {

            top: 0;
          }

          &::before {

            transform: rotate(-220deg);
          }

          &::after {

            transform: rotate(220deg);
          }
        }
      }
    }
  }
`;

export {Container, Navigation};