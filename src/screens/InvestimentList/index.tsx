import React, {useCallback, useEffect, useState} from 'react';

import api from '../../services/api';
import InvestimentCard from './InvestimentCard';

import * as S from './styles';

function InvestimentList() {
  const [investiments, setInvestiments] = useState([]);
  const getInvestiments = useCallback(async () => {
    const {data} = await api.get('/v3/ca4ec77d-b941-4477-8a7f-95d4daf7a653');

    if (!data) {
      return;
    }
    setInvestiments(data.response.data.listaInvestimentos);
  }, []);

  const renderHeader = useCallback(() => {
    return (
      <S.HeaderWrapper>
        <S.HeaderText>INVESTIMENTOS</S.HeaderText>
        <S.HeaderText>R$</S.HeaderText>
      </S.HeaderWrapper>
    );
  }, []);

  useEffect(() => {
    getInvestiments();
  }, []);

  return (
    <S.ContainerList>
      <S.HeaderYellow />
      <S.FlatListReviews
        data={investiments}
        keyExtractor={item => String(item.nome)}
        renderItem={({item}) => <InvestimentCard item={item} />}
        ListHeaderComponent={renderHeader}
        ItemSeparatorComponent={() => <S.Separator />}
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={0.1}
      />
    </S.ContainerList>
  );
}

export default InvestimentList;

/**
 * <S.FlatListReviews
        data={reviews}
        ListHeaderComponent={renderHeader}
        keyExtractor={item => String(item?.id)}
        renderItem={({item}) => (
          <ReviewCard navigation={navigation} item={item} />
        )}
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={0.1}
        onEndReached={
          grades.total >= reviews?.length + 1
            ? () => handleFetchMore(pages)
            : ''
        }
        ListEmptyComponent={renderEmptyList}
        ListFooterComponent={renderFooter}
      /> */
