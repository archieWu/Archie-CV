import styled from 'styled-components';
import {Column} from '@components/Styled/Grid.styled';

/* Images */


const ProjectColumn = styled(Column)`
  margin-bottom: 3.2rem;
`;

const Card = styled.a.attrs({
  target: '_blank',
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.4rem 2.4rem 1.6rem 2.4rem;
  border-radius: 1.6rem;
  text-decoration: none;
  background: #323232;
  box-shadow: 0 .4rem 4rem rgba(0, 0, 0, .08);
  transition: all .3s;
  height: 100%;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    transform: translateY(-1.6rem);
  }
`;

const PreviewImage = styled.div`
  border-radius: .8rem;
  width: 100%;
  height: 20rem;
  background: ${(props) => {
    switch (props.$name) {
      default:
        return '#323232';
    }
  }} no-repeat top center;
  background-size: cover;
`;

const ProjectInfo = styled.div`
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 1.2rem;
  text-align: center;

  h3 {
    margin-bottom: .4rem;
    font-weight: 700;
    color: #00BCC8;
  }

  p {
    font-size: 1.4rem;
    color: #A8A8A8;
  }
`;

export {
  ProjectColumn,
  Card,
  PreviewImage,
  ProjectInfo,
};
