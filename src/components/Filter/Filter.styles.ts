import styled from 'styled-components';
import PaletColors from '../../assets/colors/PaletColors';

export const Container = styled.section`
  min-width: 1540px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 10vh;
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
`;