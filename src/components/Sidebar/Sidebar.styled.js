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
    color: #000;
    text-decoration: none;

    &:last-child {
      margin-right: 0;
      color: #888888;
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
