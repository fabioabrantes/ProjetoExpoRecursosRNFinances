import styled from 'styled-components/native';
import {Feather} from '@expo/vector-icons';

type props = {
  index:number;
}

export const Container = styled.View`
  flex:1;
  background-color:${(props)=> props.theme.colors.background};
`;

export const Header = styled.View`
  width:100%;
  height: 278px;
  justify-content:center;
  align-items:flex-start;
  flex-direction:row;
  background-color:${(props)=> props.theme.colors.primary};
`;

export const UserContainer = styled.View<props>`
  width: 100%;
  padding:0 24px;
  margin-top: 57px;
  flex-direction: row;
  justify-content:space-between;
  align-items:center;

`;
export const UserInfo = styled.View`
  flex-direction: row;
  align-items:center;
`;

export const Photo = styled.Image`
  width:50px;
  height:50px;
  border-radius: 10px;
  
`;
export const User = styled.View`
  margin-left: 18px;

`;

export const UserGreeting = styled.Text`
  color:${(props)=> props.theme.colors.shape};
  font-family:${(props)=> props.theme.fonts.regular}; 
  font-size:18px;
`;
export const UserName = styled.Text`
  color:white;
  font-size:18px;
  font-family:${(props)=> props.theme.fonts.bold};
`;

export const IconPower = styled(Feather)`
  color:${(props)=> props.theme.colors.secondary};
  font-size:24px;
`;