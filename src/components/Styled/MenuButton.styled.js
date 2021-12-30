import styled from 'styled-components';

const MenuButton = styled.div`
  display: none;
  position: absolute;
  top: 3.2rem;
  left: 3.2rem;
  cursor: pointer;
  z-index: 1;
  transition: all .3s;
  transform: ${(props) =>
          props.isMenuOpen ? 'translateX(30rem)' : '0'
};

  path {
    fill: ${(props) =>
            props.isMenuOpen ?
                    '#626262' :
                    '#F4F4F4'
};
    transition: all .2s ease-in;
  }

  @media (max-width: 768px) {
    display: block;
  }
  @media (max-width: 576px) {
    top: 3.6rem;
    left: ${(props) =>
            props.isMenuOpen ? '-4rem' : '2.4rem'
};
  }
`;

export {
  MenuButton,
};
