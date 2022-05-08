import styled from 'styled-components';
import PaletColors from '../../assets/colors/PaletColors';

export const Container = styled.section`
  align-items: center;
  display: flex;
  font-family: ${({ theme }) => theme.font.family.lato};
  height: 10vh;
  justify-content: flex-start;
  padding: 3rem;
  position: relative ;
  width: 1540px;
  > label {
    font-size: 2rem;
    font-weight: 700;
    margin: 0 1rem;
  }
  > select {
    border-radius: 5px;
    font-size: 2rem;
    height-line: 3rem
    margin: 10px:
    padding: 15px;
    width: 150px;
    > .option {
      font-size: 2rem;
      height-line: 3rem;
      margin: 10px:
      padding: 15px;
    }
  }
  ${({ theme }) => theme.mq.phone} {
    max-width: 100%;
   };

  ${({ theme }) => theme.mq.desktop} {
   max-width: 100%
   background: orange ;
  }

`;