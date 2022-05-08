
import styled from 'styled-components';
import PaletColors from '../../assets/colors/PaletColors';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  height: 12vh;
  width: 100%;
  ${({ theme }) => theme.mq.phone} {
   padding: 5px;
  };
`;
export const WrapperSearch = styled.div`
  display: flex;
  padding: 5px;
 ;
`;
export const WrapperRadio = styled(WrapperSearch)`
  align-items: center;
  display: flex ;
`;
export const SearchInput = styled.input`
  background: ${({ theme }) => theme.color.swanWhite};
  border-radius: 0.3rem;
  border: ${PaletColors["devil blue"]} 1px solid;
  box-shadow: inset -2px -1px 7px ${PaletColors["grey porcelain"]}};
  color: ${PaletColors["devil blue"]};
  font-size: 15px;
  height: 50px;
  padding: 5px 10px 5px 5px;
  resize: none;
  width: 35rem;

  ${({ theme }) => theme.mq.phone} {
    max-width: 20rem;
    padding: 5px;
  };

  ${({ theme }) => theme.mq.desktop} {
    max-width: 35rem;
  }
`;
export const SearchButton = styled.button`
  align-items: center;
  background: ${({ theme }) => theme.color.swanWhite};
  border: 1px solid ${({ theme }) => theme.color.greyPorcelain};
  cursor: pointer;
  display: flex;
  height: 50px;
  justify-content: center;
  width: 50px;
`;
export const ImgButton = styled.img`
  transform: scale(1);
  transition: all 0.3ms easy-in-out;
  width: 100%;
  &:hover {
    transform: scale(1.2);
  }
`;
export const InputRadio = styled.input`
  margin-left: 8px;
`;