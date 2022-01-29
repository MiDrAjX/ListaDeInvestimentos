import React, {useCallback, useEffect, useState} from 'react';

import api from '../../services/api';
import {InvestimentCard, InvestimentCardProps} from './InvestimentCard';

import {StocksProps} from '../InvestimentOverview/index';

import uuid from 'react-native-uuid';

import * as S from './styles';
import {ListRenderItemInfo} from 'react-native';

export interface DataListProps extends InvestimentCardProps {
  id: string;
  acoes: StocksProps[];
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
  }, [getInvestiments]);

  return (
    <S.ContainerList>
      <S.HeaderYellow />

      <S.InvestimentFlatList
        data={investiments} //perdão não sei resolver esse problema de tipagem T-T
        keyExtractor={(item: DataListProps) => item.id}
        renderItem={({item}: ListRenderItemInfo<DataListProps>) => (
          <InvestimentCard item={item} />
        )}
        ListHeaderComponent={renderHeader}
        ItemSeparatorComponent={() => <S.Separator />}
      />
    </S.ContainerList>
  );
}

export default InvestimentList;
