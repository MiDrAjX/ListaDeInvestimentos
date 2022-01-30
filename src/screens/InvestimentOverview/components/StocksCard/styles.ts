import styled from 'styled-components/native';

export const Wrapper = styled.View`
  width: 100%;
  margin-bottom: 20px;
`;
export const StockWrapper = styled.View`
  width: 100%;
  height: 40px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  padding: 0 15px;
  margin: 1px 0 0;
`;
export const InputText = styled.Text`
  font-weight: 400;
  font-size: 14px;

  color: rgba(0, 0, 0, 0.65);
`;
export const InputWrapper = styled.View`
  width: 100%;

  align-items: flex-start;

  background-color: #ffffff;
  padding: 10px 15px 0px;
  margin-top: 1px;
`;
export const Input = styled.TextInput`
  width: 100%;
  height: 37px;
  color: #333

  font-weight:600;
  
`;
export const TitleText = styled.Text`
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #333333;
`;
export const WarningWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  background-color: #ffffff;
  margin-top: 1px;
`;
export const WarningText = styled.Text`
  bottom: 10px;
  font-weight: 700;
  font-size: 12px;

  color: #ff7377;
`;
export const RedLine = styled.View`
  width: 100%;
  height: 0.8px;
  background-color: #ff7377;
  margin-bottom: 10px;
`;
export const SubTitleText = styled(TitleText)`
  color: rgba(0, 0, 0, 0.6);
`;
export const BlankView = styled.ScrollView`
  width: 100%;
  height: 10px;
  background-color: #ffffff;
  margin-top: 1px;
`;
