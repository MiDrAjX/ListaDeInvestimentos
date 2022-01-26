import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: auto;
  background: #ffffff;

  padding: 10px;

  justify-content: space-between;

  align-self: center;
`;

export const ContainerInfo = styled.View`
  margin: 10px 0 8px 3px;
`;

export const ContainerSpaceBetween = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const TitleText = styled.Text`
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #333333;
`;
export const SubTitleText = styled.Text`
  font-family: 'Nunito';
  font-size: 14px;
  color: rgba(0, 0, 0, 0.65);
`;
