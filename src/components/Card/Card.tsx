import React, { useState } from 'react';
import { BookInterface } from '../../models/BookInterface';
import {
  Container,
  HeaderDiv,
  HeaderDiv2,
  HeaderH1,
  HeaderFavoriteBookButton,
  HeaderFavoriteBookImg,
  WrapperInfoBookDiv,
  ImageDiv,
  ImageImg,
  InfoDiv,
  InfoH2,
  InfoP
} from './Card.styles';
import heartFilled from '../../assets/svgs/icons8-heart-24.png';
import heartOutlined from '../../assets/svgs/icons8-favorite-32.png';

export type CardBookProps = {
  book: BookInterface,
  isFavoured: boolean,
};

const Card: React.FC<CardBookProps> = ({ book }) => {

  const [isFavoured, setIsFavoured] = useState<boolean>(false);
  const toggleFavoured = () => {
    setIsFavoured(!isFavoured);
   };

  return (
    <Container>
      { isFavoured
        ? (
          <HeaderDiv >
            <HeaderH1>
              {book.title}
            </HeaderH1>
            <HeaderFavoriteBookButton onClick={toggleFavoured}>
              { isFavoured
                ? (<HeaderFavoriteBookImg src={heartFilled} alt='filled heard' />)
                : (<HeaderFavoriteBookImg src={heartOutlined} alt='outlined heart' />)
              }
            </HeaderFavoriteBookButton>
          </HeaderDiv>
          )
        : (
          <HeaderDiv2 >
            <HeaderH1>
              {book.title}
            </HeaderH1>
            <HeaderFavoriteBookButton onClick={toggleFavoured}  >
              { isFavoured
                ? (<HeaderFavoriteBookImg src={heartFilled} alt='filled heard' />)
                : (<HeaderFavoriteBookImg src={heartOutlined} alt='outlined heart' />)
              }
            </HeaderFavoriteBookButton>
          </HeaderDiv2>
        )
      }
      <WrapperInfoBookDiv>
        <ImageDiv>
          { book.image
            ? <ImageImg src={book.image} alt={book.title} />
            : <ImageImg src='https://cdn.pixabay.com/photo/2013/07/12/14/07/student-147783__340.png' alt="brak oficjalnego zdjecia" />
          }
        </ImageDiv>
        <InfoDiv>
          <InfoH2>{book.authors}</InfoH2>
          <InfoH2>{book.publishedDate}</InfoH2>
          <InfoP>
            {`${book.description}`.length <= 200 ? `${book.description}` : `${book.description.substring(0, 200)} ...`}
          </InfoP>

        </InfoDiv>
      </WrapperInfoBookDiv>
    </Container>
  )
}

export default Card;