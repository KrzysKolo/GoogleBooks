import styled from 'styled-components';

export const Container = styled.section`
 ${({ theme }) => theme.mq.phone} {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
};

${({ theme }) => theme.mq.tablet} {
  align-self: stretch;
  display: grid;
  grid-template-columns: 1fr;
  justify-self: stretch;
};

${({ theme }) => theme.mq.desktop} { {
  align-self: stretch;
  display: grid;
  grid-template-columns: repeat(2, 435px);
  justify-self: stretch;
};

${({ theme }) => theme.mq.bigDesktop} { {
   align-self: stretch;
   display: grid;
   grid-template-columns: repeat(3, 425px);
   justify-self: stretch;
}
`;


