import styled from 'styled-components';
import PaletColors from '../../assets/colors/PaletColors';
import img2 from '../../assets/images/ksiazki2.png';
import img3 from '../../assets/images/ksiazki3.png';

export const Container = styled.section`
  background: ${({ theme }) => theme.color.white100};
  background-image: url('${img2}') ;
  background-position: left top;
  background-repeat: no-repeat;
  background-size: contain;
  display: flex ;
  width: 1540px;
  justify-items: center;
  height: 25rem;
  position: relative;
  padding: 0 2.5rem;
  color: ${({ theme }) => theme.color.navy};
  z-index: 2;
  box-sizing: border-box;
  margin: 0;
  padding: 0;

  ${({ theme }) => theme.mq.phone} {
    align-items: center;
    background-size: contain;
    flex-direction: column;
    justify-content: center;
    max-width: 100%;
  };

  ${({ theme }) => theme.mq.tablet} {
    background-size: contain;
  };

  ${({ theme }) => theme.mq.desktop} {
    flex-direction: row;
    max-width: 100%
  }
`;
export const WrapperLeft = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 50%;

  ${({ theme }) => theme.mq.phone} {
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100%;
  };
`;
export const WrapperRight = styled.div`
  align-content: center;
  align-items: center;
  background-image: url('${img3}') ;
  background-position: right top;
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  justify-content: center;
  width: 50%;

  ${({ theme }) => theme.mq.phone} {
    align-items: center;
    background-image: none;
    flex-direction: column;
    justify-content: space-around;
    margin-top: -1rem;
    width: 100%;
  };

  ${({ theme }) => theme.mq.tablet} {
    align-items: center;
    background-image: none;
    flex-direction: column;
    height: 100% ;
    justify-content: center;
    margin-top: 0;
    width: 100%;
  };

  ${({ theme }) => theme.mq.desktop} {
    align-items: center;
    background-image: url('${img3}') ;
    flex-direction: column;
    height: 100% ;
    justify-content: center;
    width: 100%;
  }
`;
export const TextH1 = styled.h1`
  color: ${({ theme }) => theme.color.swanWhite};
  font-size: 5rem;
  font-family: ${({ theme }) => theme.font.family.cinzel};
  text-shadow: 3px 3px 3px ${({ theme }) => theme.color.navy};

  ${({ theme }) => theme.mq.phone} {
    hight-line: 2rem;
    padding-top: 1.5rem;
    text-align: center;
   };

  ${({ theme }) => theme.mq.desktop} {
    padding-top: 0;
    text-align: center;
   };
`;


