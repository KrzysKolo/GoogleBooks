
import styled from 'styled-components';
import PaletColors from '../../assets/colors/PaletColors';

export const Container = styled.section`
  width: 1540px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  justify-content: center;
  align-content: center;
  background: red;
  @media screen and (min-width: 800px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    align-content: center;
    background: green ;
}
@media screen and (min-width: 1540px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    align-content: center;
    background: navy ;
}
`;


