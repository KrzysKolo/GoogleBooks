import styled from 'styled-components';
import PaletColors from '../../assets/colors/PaletColors';
import img2 from '../../assets/images/ksiazki2.png';
import img3 from '../../assets/images/ksiazki3.png';

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-self: stretch;
  justify-self: stretch;
  width: 1540px;
  height: 300px;
`;
export const WrapperLeft = styled.div`
  background-image: url(${img2});
  background-repeat: no-repeat;
  background-size: contain;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
export const WrapperRight = styled(WrapperLeft)`
   background-image: url(${img3});
   justify-content: flex-end;
   background-position: right top;
   justify-content: center;
   align-items: center;

`;
export const Img = styled.img`
  height: 100%;
 `;
export const TextH1 = styled.h1`
  font-family: 'Cinzel', serif;
  font-size: 4rem;
 position: absolute;
 top: 0;
 left: 9rem;
  display: flex;
  justify-content: center;
  color: ${PaletColors["swan white"]};
  text-shadow: 3px 3px 3px black;

`;