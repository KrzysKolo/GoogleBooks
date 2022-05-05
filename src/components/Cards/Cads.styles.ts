
import styled from 'styled-components';
import PaletColors from '../../assets/colors/PaletColors';

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(1, 510px);
  justify-content: center;
  align-content: center;
  align-self: stretch;
  justify-self: stretch;
  @media screen and (min-width: 960px) {
    display: grid;
    grid-template-columns: repeat(2, 510px);
    justify-content: center;
    align-content: center;
    align-self: stretch;
    justify-self: stretch;
}
@media screen and (min-width: 1440px) {
    display: grid;
    grid-template-columns: repeat(3, 505px);
    justify-content: center;
    align-content: center;
    align-self: center;
    justify-self: center;
    align-self: stretch;
    justify-self: stretch;
}
`;


