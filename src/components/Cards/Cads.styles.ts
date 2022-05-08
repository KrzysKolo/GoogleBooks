
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
  grid-template-columns: repeat(2, 475px);
  align-self: stretch;
  justify-self: stretch;
}
${({ theme }) => theme.mq.desktop} { {
    display: grid;
    grid-template-columns: repeat(2, 505px);
    align-self: stretch;
    justify-self: stretch;
}
${({ theme }) => theme.mq.bigDesktop} { {
    display: grid;
    grid-template-columns: repeat(3, 505px);
    align-self: stretch;
    justify-self: stretch;
}
`;


