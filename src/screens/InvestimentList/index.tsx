import React, {useCallback, useEffect, useState} from 'react';

import api from '../../services/api';
import {InvestimentCard, InvestimentCardProps} from './InvestimentCard';

import uuid from 'react-native-uuid';

import * as S from './styles';

export interface DataListProps extends InvestimentCardProps {
  id: string;
}

function InvestimentList() {
  const [investiments, setInvestiments] = useState<DataListProps[]>([]);
  const getInvestiments = useCallback(async () => {
    const {data} = await api.get('/v3/ca4ec77d-b941-4477-8a7f-95d4daf7a653');

    if (!data) {
      return;
    }
    const investimentFormatted: DataListProps[] =
      data.response.data.listaInvestimentos.map((item: DataListProps) => {
        const saldoTotal = Number(item.saldoTotal).toLocaleString('pt-br', {
          minimumFractionDigits: 2,
        });

        return {
          id: String(uuid.v4()),
          nome: item.nome,
          objetivo: item.objetivo,
          saldoTotal,
          indicadorCarencia: item.indicadorCarencia,
          acoes: item.acoes,
        };
      });
    setInvestiments(investimentFormatted);
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
      <S.InvestimentFlatList
        data={investiments}
        keyExtractor={item => item.id}
        renderItem={({item}) => <InvestimentCard item={item} />}
        ListHeaderComponent={renderHeader}
        ItemSeparatorComponent={() => <S.Separator />}
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
