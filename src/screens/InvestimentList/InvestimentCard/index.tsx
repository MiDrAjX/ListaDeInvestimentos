import React, {useCallback} from 'react';

import {useNavigation} from '@react-navigation/core';

import * as S from './styles';

export interface InvestimentCardProps {
  nome: string;
  objetivo: string;
  saldoTotal: string;
  indicadorCarencia: string;
}

export function InvestimentCard({item}) {
  const {nome, objetivo, saldoTotal, indicadorCarencia}: InvestimentCardProps =
    item;
  const navigation = useNavigation();

  const handleListAcess = useCallback(
    investiment => {
      navigation.navigate('Overview', investiment);
    },
    [navigation],
  );

  return (
    <S.Container
      onPress={() => handleListAcess(item)}
      disabled={indicadorCarencia === 'S'}>
      <S.ContainerInfo>
        <S.ContainerSpaceBetween>
          <S.TitleText>{nome}</S.TitleText>
          <S.TitleText>{saldoTotal}</S.TitleText>
        </S.ContainerSpaceBetween>
        <S.SubTitleText>{objetivo}</S.SubTitleText>
      </S.ContainerInfo>
    </S.Container>
  );
}
