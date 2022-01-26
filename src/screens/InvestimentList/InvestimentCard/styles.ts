import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: auto;
  background: #ffffff;

  padding: 10px;

  justify-content: space-between;

  align-self: center;
`;
export const ContainerRow = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const ContainerGrade = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const ContainerInfo = styled.View`
  margin: 3px 0 0 3px;
`;
export const ContainerInfoText = styled.View`
  justify-content: flex-start;
  width: 90%;
  margin: 3px 3px 5px;
`;
export const ContainerSpaceBetween = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const InfoText = styled.Text`
  font-family: 'Nunito';
  font-size: 12px;
  line-height: 16px;
  color: #333333;
  margin: 5px 0;
`;
export const TitleText = styled.Text`
  font-family: 'Nunito-Bold';
  font-size: 14px;
  line-height: 19px;
  color: #333333;
`;
export const SubTitleText = styled.Text`
  font-family: 'Nunito';
  font-size: 11px;
  color: rgba(0, 0, 0, 0.75);
`;
export const CheckedText = styled.Text`
  font-family: 'Nunito';
  font-size: 11px;
  line-height: 15px;
  color: #00b333;
  padding: 5px 15px 0 0;
`;
export const TextNumber = styled.Text`
  font-family: 'Nunito-Bold';
  font-size: 12px;
  line-height: 16.37px;
  color: #ff6633;
  margin-right: 17px;
  margin-left: 5px;
`;
