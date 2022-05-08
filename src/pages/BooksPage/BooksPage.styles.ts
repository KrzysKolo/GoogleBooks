import styled from 'styled-components';

export const Wrapper = styled.section`
  max-width: 1540px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ theme }) => theme.mq.phone} {
    max-width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  ${({ theme }) => theme.mq.tablet} {
    margin: 0 auto;
    max-width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  ${({ theme }) => theme.mq.desktop} {
    margin: 0 auto;
    max-width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  ${({ theme }) => theme.mq.bigDesktop},
    margin: 0 auto;
    max-width: 1540px;
  }
`;