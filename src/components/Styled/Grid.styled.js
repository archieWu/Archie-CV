import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Column = styled.div`
  margin-bottom: 4.8rem;

  margin-right: 3.2rem;
  width: calc(50% - 1.6rem);

  &:last-child {
    width: 100%;
  }

  @media (max-width: 1200px) {
    margin-right: 0;
    margin-bottom: 2.4rem;
    width: 100%;
  }

  &:nth-child(even) {
    margin-right: 0;
  }
`;

export {
  Row,
  Column,
};
