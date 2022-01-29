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
  margin: 1px;
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
  margin: 1px 0 2px;
`;
export const Input = styled.TextInput`
  width: 100%;
  height: 37px;
  color: #333
  font-size:16px
  font-weight:600;
  
`;
export const TitleText = styled.Text`
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #333333;
`;
export const SubTitleText = styled(TitleText)`
  color: rgba(0, 0, 0, 0.65);
`;
export const BlankView = styled.ScrollView`
  width: 100%;
  height: 10px;
  background-color: #ffffff;
`;
