
import styled from 'styled-components';
import PaletColors from '../../assets/colors/PaletColors';

export const Container = styled.section`
 ${({ theme }) => theme.mq.phone} {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}
${({ theme }) => theme.mq.tablet} {
  display: grid;
  grid-template-columns: 1fr;
  align-self: stretch;
  justify-self: stretch;
}
${({ theme }) => theme.mq.desktop} { {
    display: grid;
    grid-template-columns: repeat(2, 435px);
    align-self: stretch;
    justify-self: stretch;
}
${({ theme }) => theme.mq.bigDesktop} { {
    display: grid;
    grid-template-columns: repeat(3, 425px);
    align-self: stretch;
    justify-self: stretch;
}
`;


