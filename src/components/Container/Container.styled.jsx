import styled from '@emotion/styled';

export const MainContainer = styled.div`
  min-width: 320px;
   padding: 0 10px;
   margin: 0 auto;

  @media (min-width: 768px) {
    min-width: 768px;
    padding: 0 20px;
    margin: 0 auto;
  }
  @media (min-width: 1440px) {
    max-width: 1440px;
    padding: 0 20px;
    margin: 0 auto;
  }
`;
