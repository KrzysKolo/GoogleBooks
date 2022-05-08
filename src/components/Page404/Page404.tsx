import React from 'react';
import { Container, ErrorDiv, ErrorImg, ErrorP } from './Page404.styles';
import error from './../../assets/images/error.png';
import { useSelector } from 'react-redux';
import { isError } from '../../features/googleBooksAPI/googleBooksApiSlice';

const Page404: React.FC = () => {
  const errorText = useSelector(isError);
  return (
    <Container>
      <ErrorP>
        {errorText}
      </ErrorP>
      <ErrorDiv>
        <ErrorImg src={error} alt='Error' />
      </ErrorDiv>
    </Container>
  )
}

export default Page404;