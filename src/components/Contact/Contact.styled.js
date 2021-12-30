import styled from 'styled-components';

const Card = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: .8rem;
  height: 20rem;
  border-radius: 1.6rem;
  text-decoration: none;
  background: #B2B2B2;
  transition: all .3s;

  svg {
    width: 72px;
    height: 72px;
  }
`;


const TextContent = styled.div`
  padding: 8rem 0;
  text-align: center;

  h3 {
    margin-bottom: 1.6rem;
    font-family: 'Montserrat', 'Noto Sans TC', 'Microsoft JhengHei', '微軟正黑體', sans-serif;
    font-size: 3.6rem;
  }
  
`;

export {
  Card,
  TextContent,
};
