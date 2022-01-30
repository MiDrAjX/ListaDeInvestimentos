import styled from 'styled-components/native';

export const ContainerList = styled.ScrollView`
  background-color: #efeff4;
  flex: 1;
`;

export const Separator = styled.View`
  width: 100%;
  height: 2px;
`;
export const HeaderYellow = styled.View`
  width: 100%;
  height: 5px;
  background-color: #f9dd16;
`;
export const HeaderText = styled.Text`
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  color: rgba(0, 0, 0, 0.55);
  margin: 20px 0 10px 10px;
`;
export const HeaderWrapper = styled.View`
  width: 98%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const RowWrapper = styled.View`
  width: 100%;
  height: 40px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  padding: 0 15px;
  margin: 1px;
`;
export const TotalPayment = styled.View`
  width: 100%;
  height: 40px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  padding: 0 15px;
`;
export const Footer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  height: 56px;
  background-color: #f9dd16;

  margin-top: 20px;
`;
export const FooterText = styled.Text`
  margin-left: 16px;
  font-size: 20px;
  font-weight: 700;
  line-height: 33px;
  text-align: center;
  color: #0038a8;
`;
export const TitleText = styled.Text`
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #000;
`;
export const SubTitleText = styled(TitleText)`
  color: rgba(0, 0, 0, 0.6);
`;
