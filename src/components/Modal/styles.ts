import styled from 'styled-components/native';

export const TransparentContainer = styled.Pressable`
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.25);
  padding: 15px 15px 20px;
`;

export const Container = styled.View`
  align-items: center;
  justify-content: space-between;
  height: 250px;
  width: 100%;
  background-color: #ffffff;
  padding: 15px 0 0;
`;
export const ContainerText = styled.View`
  align-items: center;
  padding: 10px 15px;
`;

export const TitleText = styled.Text`
  font-weight: 600;
  font-size: 28px;
  color: #333;
  margin-bottom: 10px;
`;
export const SubTitleText = styled.Text`
  font-family: 'Nunito-Regular';
  font-size: 18px;
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
