import React from 'react'
import Loader from 'react-ts-loaders/dist';
import { Container } from './Loading.styles';

const Loading: React.FC = () => {

  return (
    <Container>
      <Loader
        type="ellipsis"
        color="#ffb142"
        size={150}
      />
    </Container>
  )
}

export default Loading