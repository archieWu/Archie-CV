import styled from 'styled-components';

const Menu = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 30rem;
  width: 30rem;
  padding: 4rem;
  border-right: .1rem solid #FBFBFB;
  height: 100%;
  background-color: #FBFBFB;
  transition: all .3s;
  @media (max-width: 768px) {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    transform: ${(props) =>
            props.isMenuOpen ? 'translateX(0)' : 'translateX(-30rem)'
};
    box-shadow: ${(props) =>
            props.isMenuOpen ? '.4rem 0 4rem rgba(0, 0, 0, .24)' : '0'
};
  }
  @media (max-width: 576px) {
    justify-content: flex-start;
    min-width: 24rem;
    width: 24rem;
    padding: 2rem;
  }

  &::after {
    @media (max-width: 768px) {
      content: '';
      display: ${(props) =>
              props.isMenuOpen ? 'block' : 'none'
};
      position: absolute;
      top: 0;
      left: 30rem;
      width: 500%;
      height: 100%;
      background: rgba(0, 0, 0, .4);
    }
    @media (max-width: 576px) {
      left: 24rem;
    }
  }
`;

const MenuTitle = styled.div`
  font-size: 2.8rem;
  transition: all .3s;
  color: #00BCC8;
  height: 3.4rem;
  opacity: 1;
  overflow: hidden;

  span {
    color: #000;
    opacity: 1;
    transition: all .3s;
  }
`;

const Link = styled.div`

  a {
    display: inline-block;
    margin-right: .8rem;
    padding: .4rem;
    transition: all .3s;
    color: #888888;
    text-decoration: none;

    &:first-child {
      color: #000000;
    }

    &:last-child {
      margin-right: 0;

    }

    &:hover {
      transform: translateY(-.8rem);
    }
  }

  svg path {
    fill: #000;
  }
`;

export {
  Menu,
  MenuTitle,
  Link,
};
