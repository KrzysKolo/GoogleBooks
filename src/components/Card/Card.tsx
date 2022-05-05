import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
import 'aos';

export type CardBookProps = {
  book: BookInterface,
};

const Card: React.FC<CardBookProps> = ({ book }) => {

  const [favorite, setFavorite] = useState(false);

  const toggleFavoured = () => {
    setFavorite(!favorite);
   };

  return (
    <Container data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="1500">
      { favorite
        ? (
          <HeaderDiv >
            <HeaderH1>
              {book.title}
            </HeaderH1>
            <HeaderFavoriteBookButton onClick={toggleFavoured}>
              { favorite
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
              { favorite
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