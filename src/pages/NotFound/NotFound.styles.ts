import styled from 'styled-components';

export const Container = styled.section`
  max-width: 70vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ErrorDiv = styled.div`
  width: 15vw;
  object-fit: cover;
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