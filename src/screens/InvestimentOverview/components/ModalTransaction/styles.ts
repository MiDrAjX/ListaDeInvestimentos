import styled from 'styled-components/native';

export const TransparentContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.25);
  padding: 15px 15px 20px;
`;

export const Container = styled.View`
  align-items: center;
  justify-content: space-between;
  min-height: 250px;
  width: 100%;
  background-color: #ffffff;
  padding: 15px 0 0;
`;
export const ContainerText = styled.View`
  align-items: flex-start;
  justify-content: space-evenly;
  min-height: 200px;
  padding: 5px 15px;
`;

export const TitleText = styled.Text`
  align-self: center;
  font-weight: 900;
  font-size: 30px;
  color: darkblue;
  margin-bottom: 10px;
`;
export const SubTitleText = styled.Text`
  font-size: 18px;
  color: darkblue;
`;
export const ErrorText = styled.Text`
  font-size: 13px;
  color: darkblue;
`;

export const Mod = styled.Modal``;

export const Footer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 56px;
  background-color: #f9dd16;
`;
export const FooterText = styled.Text`
  font-size: 20px;
  font-weight: 700;
  line-height: 33px;
  text-align: center;
  color: #0038a8;
`;
