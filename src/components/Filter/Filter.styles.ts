import styled from 'styled-components';

export const Container = styled.section`
  align-items: center;
  display: flex;
  font-family: ${({ theme }) => theme.font.family.lato};
  height: 15vh;
  justify-content: flex-start;
  padding: 3rem;
  position: relative ;
  width: 1540px;
  > label {
    font-size: 1.8rem;
    font-weight: 700;
    margin: 0 1rem;
  }
  > select {
    border-radius: 5px;
    font-size: 1.8rem;
    margin: 10px:
    padding: 15px;
    width: 150px;
    > .option {
      font-size: 1.8rem;
      margin: 10px:
      padding: 15px;
    }
  }
  ${({ theme }) => theme.mq.phone} {
    max-width: 100%;
   };

  ${({ theme }) => theme.mq.desktop} {
   max-width: 100%
   background: orange ;
  }

`;