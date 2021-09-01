import React from 'react';

import { 
  Container,
  Header,
  UserContainer,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  IconPower
} from './styles';

export const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header>
        <UserContainer index={1}>
          <UserInfo>
            <Photo source={{uri:'https://avatars.githubusercontent.com/u/62598805?v=4'}}/>
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Fábio</UserName>
            </User>
          </UserInfo>
        
          <IconPower name="power"/>
        </UserContainer>
      </Header>
    </Container>
  );
}
