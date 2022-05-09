import styled from 'styled-components';

export const Wrapper = styled.section`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  max-width: 1540px;

  ${({ theme }) => theme.mq.phone} {
    max-width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  };

  ${({ theme }) => theme.mq.tablet} {
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    margin: 0 auto;
    max-width: 100%;
  };

  ${({ theme }) => theme.mq.desktop} {
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    margin: 0 auto;
    max-width: 100%;
  };

  ${({ theme }) => theme.mq.bigDesktop},
    margin: 0 auto;
    max-width: 1540px;
  };
`;