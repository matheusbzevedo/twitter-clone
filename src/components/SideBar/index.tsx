import React from 'react';
import { Container, SearchWrapper, SearchInput, SearchIcon, Body } from './styles';
import StickyBox from 'react-sticky-box';
import List from './../List';
import FollowSuggestion from './../FollowSuggestion';
import News from './../News';

const SideBar: React.FC = () => {
  return (
    <>
      <Container>
        <SearchWrapper>
          <SearchInput placeholder='Buscar no Twitter' />
          <SearchIcon />
        </SearchWrapper>
        <StickyBox>
          <Body>
            <List
              title='Talvez você curta'
              elements={[
                <FollowSuggestion
                  name='topzera'
                  nickname='@topzera'
                />,
                <FollowSuggestion
                  name='topzera'
                  nickname='@topzera'
                />,
                <FollowSuggestion
                  name='topzera'
                  nickname='@topzera'
                />,
              ]}
            />
            <List
              title='Talvez você curta'
              elements={[
                <News />,
                <News />,
                <News />,
                <News />,
                <News />,
                <News />,
                <News />,
                <News />,
                <News />,
                <News />,
                <News />,
                <News />
              ]}
            />
          </Body>
        </StickyBox>
      </Container>
    </>
  );
};

export default SideBar;