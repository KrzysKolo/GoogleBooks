import styled from 'styled-components';
import PaletColors from '../../assets/colors/PaletColors';
import img2 from '../../assets/images/ksiazki2.png';
import img3 from '../../assets/images/ksiazki3.png';

export const Container = styled.section`
  align-content: center;
  background-image: url('${img2}') ;
  background-position: left top;
  background-repeat: no-repeat;
  background-size: contain;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  height: 300px;
  justify-content: space-between;
  margin: 0 auto;
  width: 1540px;

  ${({ theme }) => theme.mq.phone} {
    flex-direction:column;
    justify-content: center;
    align-items: center;
    align-content: center;
    height: 300px;
    max-width: 100%;
  }
  ${({ theme }) => theme.mq.tablet} {
    flex-direction:row;
    justify-content: space-between;
    max-width: 300px;
  }
  ${({ theme }) => theme.mq.desktop} {
    align-content: center;
    background-image: url('${img2}') ;
    background-repeat: no-repeat;
    background-position: left top;
    background-size: contain;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    height: 100%;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 100%;
  }
`;
export const WrapperLeft = styled.div`
    align-content: center;
    align-items: center;
    display: flex ;
    flex-direction: row;
    justify-content: center;
    width: 50%;
${({ theme }) => theme.mq.phone} {
    width: 100%;
    max-height: 150px;
    justify-content: center;
    align-items: center;
    align-content: center;
  }
  ${({ theme }) => theme.mq.tablet} {
      width: 100%;
      height: 150px;
    }
  ${({ theme }) => theme.mq.desktop} {
    align-content: center;
    align-items: center;
    display: flex ;
    flex-direction: row;
    height: 100%;
    justify-content: center;
    max-width: 50%;
  }
`;
  export const WrapperRight = styled.div`
    align-items: center;
    background-image: url('${img3}') ;
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: cover;
    display: flex;
    height: 300px;
    justify-content: center;
    padding-top: 3rem;
    width: 50%;
    > div {
      width: 100%;
    }
  ${({ theme }) => theme.mq.phone} {
    align-content: center;
    background-image: none ;
    height: 150px;
    justify-content: flex-start;
    width: 100%;
    > div {
      padding-left: 30%;
      margin-top: -6rem;
      width: 60%;
    }
  }
  ${({ theme }) => theme.mq.tablet} {
    width: 100%;
    height: 150px;
    background-image: none ;
    > div {
      padding-left: 30%;
      margin-top: -3rem;
      width: 60%;
    }
  }
  ${({ theme }) => theme.mq.desktop} {
    background-image: none;
    height: 50% ;
    height: 100%;
    width: 100%;
    > div {
      padding-left: 20%;
      margin-top: 0;
      width: 100%;
    }
  }
  ${({ theme }) => theme.mq.bigDesktop} {
    align-items: center;
    background-image: url('${img3}') ;
    background-repeat: no-repeat;
    background-position: right top;
    background-size: contain;
    display: flex;
    justify-content: center;
    max-width: 50%;
    padding-top: 3rem;
  > div {
    padding: 1rem;
    width: 100%;
    }
  }
`;
export const Img = styled.img`
  height: 100%;
 `;
export const TextH1 = styled.h1`
  color: ${PaletColors["swan white"]};
  font-family: ${({ theme }) => theme.font.family.cinzel};
  font-size: 4rem;
  text-shadow: 3px 3px 3px ${({ theme }) => theme.color.black};
  ${({ theme }) => theme.mq.phone} {
    font-size: 2rem
    text-align: center;
  }
  ${({ theme }) => theme.mq.desktop} {
    text-align: center;
  }
  ${({ theme }) => theme.mq.phone} {
    font-size: 3rem;
  }
`;
