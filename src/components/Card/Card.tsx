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
import { getUpdateGoogleBooks, updateGoogleBook } from '../../features/googleBooks/googleBooks';
import { CardBookProps } from '../../models/CardBookProps';

const Card: React.FC<CardBookProps> = ({ book }) => {

  const dispatch = useDispatch();
  const favoriteGoogleBooks = useSelector(getUpdateGoogleBooks)
  const [favorite, setFavorite] = useState(book.favoriteBook);

  const toggleFavoured = () => {
    setFavorite(!favorite);
    dispatch(updateGoogleBook(favoriteGoogleBooks.map(item => {
      return item.id === book.id ? {...item, favoriteBook: !favorite } : item
    })));
 };

  return (
    <Container
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1500">
      { favorite
        ? (
          <HeaderDiv >
            <HeaderH1>
            {`${book.title}`.length <= 100 ? `${book.title}` : `${book.title.substring(0, 100)} ...`}
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
            { `${book.title}`.length <= 100 ? `${book.title}` : `${book.title.substring(0, 100)} ...`}
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
          <ImageImg src={book.image} alt={book.title} />
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

