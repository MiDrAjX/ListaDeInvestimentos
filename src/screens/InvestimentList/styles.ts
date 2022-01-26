import styled from 'styled-components/native';
import {FlatList} from 'react-native';

export const ContainerList = styled.View`
  background-color: #efeff4;
  flex: 1;
  align-items: center;
`;
export const InvestimentFlatList = styled(FlatList).attrs({
  showsVerticalScrollIndicator: false,
})`
  width: 100%;
  align-content: center;
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
  color: #333;
  margin: 20px 0 10px 10px;
`;
export const HeaderWrapper = styled.View`
  width: 98%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;
