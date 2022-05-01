import React, { useState } from 'react';
import { Books } from '../../models/Books';
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
  book: Books
};

const Card: React.FC<Books> = ({ name, autor, publishedDate, image, description, favoured }) => {

  const [isFavoured, setIsFavoured] = useState<boolean>(favoured);
  const toggleFavoured = () => {
    setIsFavoured(!isFavoured);
   };

  return (
    <Container>
      { isFavoured
        ? (
          <HeaderDiv >
            <HeaderH1>
              {name}
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
              {name}
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
          <ImageImg src={image.url} alt={image.alt} />
        </ImageDiv>
        <InfoDiv>
          <InfoH2>{autor}</InfoH2>
          <InfoH2>{publishedDate}</InfoH2>
          <InfoP>
            {description.length <= 200 ? `${description}` : `${description.substring(0, 200)} ...`}
          </InfoP>

        </InfoDiv>
      </WrapperInfoBookDiv>
    </Container>
  )
}

export default Card;