import styled from '@emotion/styled';

export const AppBar = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 70px;
 padding: 12px 24px 12px 24px;

  background: linear-gradient(
    to right,
    rgba(200, 200, 200, 0.6),
    rgba(146, 100, 130, 0.7),
    rgba(130, 120, 110, 0.4)
  );
 
`;