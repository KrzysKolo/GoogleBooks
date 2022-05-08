import styled from 'styled-components';

export const Container = styled.section`
  width: 1540px;
  ${({ theme }) => theme.mq.phone} {
    max-width: 100%;
   };

  ${({ theme }) => theme.mq.desktop} {
   max-width: 100%
   background: orange ;
  }
`;

