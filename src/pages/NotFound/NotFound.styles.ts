import styled from 'styled-components';

export const Container = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 50vh;
  justify-content: center;
  max-width: 70vw;
`;
export const ErrorDiv = styled.div`
  object-fit: cover;
  width: 15vw;
`;
export const ErrorImg = styled.img`
  width: 100%;
`;
export const ErrorP = styled.p`
  color: ${({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.font.size.l} ;
  padding: 4rem;
`;
export const LinkP = styled(ErrorP)`
  color: ${({ theme }) => theme.color.beige};
  font-size: ${({ theme }) => theme.font.size.l} ;
  padding: 4rem;
`;