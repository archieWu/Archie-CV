import styled from 'styled-components';

const Nav = styled.nav`




  ul {
    list-style: none;
  }

  a {
    display: inline-flex;
    align-items: center;
    padding: 1.2rem 0;
    width: 100%;
    text-decoration: none;
    color: #6A6A6A;
    transition: all .3s;

    svg {
      margin-right: 2.4rem;

      path {
        stroke: #6A6A6A
      }
    }

    &:hover,
    &.active {
      color: #00BCC8;

      svg path {
        stroke: #00BCC8;
      }
    }
  }
`;

export default Nav;
