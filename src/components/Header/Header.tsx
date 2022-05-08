import React from 'react';
import Search from '../Search';
import { Container, WrapperLeft, WrapperRight, TextH1 } from './Header.styles';

const Header:React.FC = () => {
  return (
    <Container>
      <WrapperLeft >
        <TextH1>
          Google Books
        </TextH1>
      </WrapperLeft>
      <WrapperRight>
        <div>
          <Search />
        </div>
      </WrapperRight>
    </Container>
  )
}

export default Header;