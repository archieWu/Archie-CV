import styled from 'styled-components';

const SkillText = styled.h3`
  font-size: 3.5rem;
`;

const SkillTag = styled.div`
  display: flex;
  flex-wrap: wrap;

  > p {
    margin-right: 1.5rem;
    margin-bottom: 1rem;
    padding: 1rem 2rem;
    border-radius: 4rem;
    font-size: 1.4rem;
    color: #545454;
    background: #E8E8E8
  }
`;

export {
  SkillText,
  SkillTag,
};
