import styled from 'styled-components';

const SectionTitleStyled = styled.div`
  display: inline-block;
  font-size: 2.4rem;
  margin-bottom: 4rem;
  animation: fadeInDown .6s;

  @media (max-width: 768px) {
    display: flex;
    justify-content: flex-end;
  }
  @media (max-width: 576px) {
    text-align: right;
    font-size: 1.8rem;
  }

  img {
    position: absolute;
    bottom: -.8rem;
    right: -2.4rem;
    @media (max-width: 576px) {
      right: -1.2rem;
    }
  }

  h2 {
    color: #ffffff;
    @media (max-width: 576px) {
      display: flex;
      flex-direction: column;
    }
  }

  span {
    display: inline-block;
    margin-left: 1.6rem;
    font-weight: 400;

    @media (max-width: 576px) {
      font-size: 2.2rem;
    }
  }

  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateX(500%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export {
  SectionTitleStyled,
};
