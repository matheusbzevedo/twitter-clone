import React from 'react';
import Feed from './../Feed';
import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <>
      <Container>
        <Banner>
          <Avatar />
        </Banner>
        <ProfileData>
          <EditButton outlined>Editar perfil</EditButton>
          <h1>Matheus Azevedo</h1>
          <h2>@matheusbzevedo</h2>
          <p>Developer at <a href='https://www.zup.com.br/'>Zup</a></p>
          <ul>
            <li>
              <LocationIcon />
              São Paulo, Brasil
            </li>
            <li>
              <CakeIcon />
              Nascido(a) em 17 de Setembro de 1994
            </li>
          </ul>
          <Followage>
            <span>seguindo <strong>17</strong></span>
            <span><strong>17</strong> seguidores</span>
          </Followage>
        </ProfileData>
        <Feed />
      </Container>
    </>
  );
};

export default ProfilePage;