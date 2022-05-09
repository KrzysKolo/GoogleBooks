
import styled from 'styled-components';
import PaletColors from '../../assets/colors/PaletColors';

export const Container = styled.article`
  margin: 0;
  padding: 0;
  box-sizing: border-box ;
  background-color: ${({ theme }) => theme.color.swanWhite};
  border: 2px solid ${({ theme }) => theme.color.greyPorcelain};;
  border-radius: 10px;
  box-shadow: 3px 3px 5px ${({ theme }) => theme.color.greyPorcelain};;
  height: 250px;
  width: 400px;
  margin-bottom: 5vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-self: center;
`;
export const HeaderDiv = styled.div`
  background-color: ${({ theme }) => theme.color.orange};;
  border-bottom: 1px solid ${({ theme }) => theme.color.greyPorcelain};;
  box-shadow: 0px 2px 3px ${({ theme }) => theme.color.greyPorcelain};;
  border-radius: 10px 10px 0 0 ;
  color: ${({ theme }) => theme.color.navy};;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 8vh;
  width: 100%;
  margin: 0;
  position: relative;
`;
export const HeaderDiv2 = styled(HeaderDiv)`
  background-color: ${({ theme }) => theme.color.swanWhite};;
`;
export const HeaderH1 = styled.h1`
  font-family: ${({ theme }) => theme.font.family.kodchasan};;
  font-size: 1.7rem;
  width: calc(100% - 8vh);
  padding: 8px 5px ;
`;
export const HeaderFavoriteBookButton = styled.button`
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
  width: 75%;
  background-color: transparent;
`;
export const WrapperInfoBookDiv = styled.div`
  display: flex;
  align-items: center;
  margin-top: 12px;
  overflow: hidden ;
  object-fit: cover;
`;
export const ImageDiv = styled.div`
  margin: 0 1rem;
  height: 130px;
  width: 120px;
  box-shadow: 3px 3px 5px ${PaletColors["grey porcelain"]};
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ImageImg = styled.img`
  height: 100%;
  object-fit: cover;
`;
export const InfoDiv = styled.div`
  padding: 0.5rem;
  margin: 0.75rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const InfoH2 = styled.h2`
  font-size: 1.7rem;
  font-weight: 600;
  margin: 0.3rem 0;
`;
export const InfoP = styled.p`
  font-weight: 400;
  font-size: 1.4rem;
  margin: 0.3rem 0;
  text-align: left;
`;