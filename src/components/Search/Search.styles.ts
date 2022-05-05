
import styled from 'styled-components';
import PaletColors from '../../assets/colors/PaletColors';

export const Container = styled.section`
  width: 100%;
  height: 12vh;
  display: flex;
  flex-direction: column;
`;
export const WrapperSearch = styled.div`
  display: flex;
`;
export const WrapperRadio = styled(WrapperSearch)``;

export const SearchInput = styled.input`
  background: ${PaletColors["swan white"]};
  border-radius: 0.3rem;
  border: ${PaletColors["devil blue"]} 1px solid;
  color: ${PaletColors["devil blue"]}
  resize: none;
  width: 50%;
  font-size: 15px;
  padding: 5px 10px 5px 5px;
  height: 2.4rem;
  box-shadow: inset -2px -1px 7px ${PaletColors["grey porcelain"]}};
`;
export const SearchButton = styled.button`
  width: 50px;
  height: 50px;
  background: ${PaletColors["swan white"]};
  border: 1px solid ${PaletColors["grey porcelain"]}};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ImgButton = styled.img`
  width: 100%;
  transform: scale(1);
  transition: all 0.3ms easy-in-out;
  &:hover {
    transform: scale(1.2);
  }
`;