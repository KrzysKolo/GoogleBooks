import styled from 'styled-components';
import PaletColors from '../../assets/colors/PaletColors';

export const Container = styled.section`
  max-width: 1540px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 10vh;
  background: blue ;
   > label {
    font-size: 1.1rem;
    font-weight: 700;
    margin: 0 1rem;
  }
  > select {
    font-size: 1rem,
    font-weight: 500;
    padding: 5px;
    border-radius: 5px;
    > .option {
      margin: 5px 0:
      padding: 5px 10px;
      font-size: 1rem;
    }
  }
  ${({ theme }) => theme.mq.phone} {
    max-width: 768px;
    justify-content: center;
    background: red ;
  }
  ${({ theme }) => theme.mq.tablet} {
    justify-content: center;
    max-width: 960px;
    background: pink ;
  }
  ${({ theme }) => theme.mq.desktop} {
    justify-content: flex-start;
    max-width: 1265px;
    background: orange ;
  }
  ${({ theme }) => theme.mq.bigDesktop} {
    justify-content: flex-start;
    max-width: 1540px;
    background: blue ;
  }
`;