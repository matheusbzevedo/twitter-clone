import React from 'react';
import {
  Container,
  Retweeted,
  RocketseatIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon
} from './styles';

const Tweet: React.FC = () => {
  return (
    <>
      <Container>
        <Retweeted>
          <RocketseatIcon />
          Você retweetou
        </Retweeted>
        <Body>
          <Avatar />
          <Content>
            <Header>
              <strong>Eldorado eSports</strong>
              <span>@eldoradoesports</span>
              <Dot />
              <time>26 de jul</time>
            </Header>
            <Description>GGWP!</Description>
            <ImageContent />
            <Icons>
              <Status>
                <CommentIcon />
                18
              </Status>
              <Status>
                <RetweetIcon />
                200
              </Status>
              <Status>
                <LikeIcon />
                723
              </Status>
            </Icons>
          </Content>
        </Body>
      </Container>
    </>
  );
};

export default Tweet;