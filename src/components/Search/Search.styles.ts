
import styled from 'styled-components';
import PaletColors from '../../assets/colors/PaletColors';

export const Container = styled.section`
  width: 60vw;
  height: 12vh;
  display: flex;
`;

export const SearchInput = styled.input`
  background: ${PaletColors["swan white"]};
  border-radius: 0.3rem;
  border: ${PaletColors["devil blue"]} 0.1rem solid;
  color: ${PaletColors["devil blue"]}
  resize: none;
  width: 100%;
  font-size: 15px;
  padding: 0.4rem 0.8rem 0.4rem 0.4rem;
  height: 2.4rem;
`;

export const SearchButton = styled.button`
  width: 50px;
  height: 50px;
  background: ${PaletColors["swan white"]};
`;