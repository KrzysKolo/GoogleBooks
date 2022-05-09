import styled from 'styled-components';

export const Container = styled.button`
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