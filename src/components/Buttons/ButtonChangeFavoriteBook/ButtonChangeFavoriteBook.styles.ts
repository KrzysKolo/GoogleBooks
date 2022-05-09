import styled from 'styled-components';

export const Container = styled.button`
  background-color: transparent;
  margin-top: 1rem;
  width: 7vh;
  height: 7vh;
  border-radius: 50%;
  position: absolute;
  right: 0;
  margin: 0 0.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  transform: scale(1);
  transition: all 0.3s easy-in-out;
  &:hover{
    transform: scale(1.2)
  }
`;
export const HeaderFavoriteBookImg = styled.img`
  width: 55%;
  background-color: transparent;
`;