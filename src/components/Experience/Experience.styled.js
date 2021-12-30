import styled from 'styled-components';
import {Column} from '../Styled/Grid.styled';


const PageWrapper = styled.div`
  svg path {
    stroke: #00BCC8;
    fill: #202060;
  }
`;

const Category = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.6rem;

  h3 {
    margin: -.4rem 1.2rem 0 1.2rem;
    font-weight: 500;
    color: #00BCC8;
  }

  p {
    margin-top: -.4rem;
    font-size: 1.4rem;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-direction: column;
`;

const EducationColumn = styled(Column)`
  @media (max-width: 1200px) {
    order: 2;
  }
`;

export {
  PageWrapper,
  Category,
  Cards,
  EducationColumn,
};
