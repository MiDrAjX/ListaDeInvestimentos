import React from 'react';

import * as S from './styles';

export interface InvestimentCardProps {
  nome: string;
  objetivo: string;
  saldoTotal: string;
  indicadorCarencia: string;
}

export function InvestimentCard({item, handleListAcess}) {
  const {nome, objetivo, saldoTotal, indicadorCarencia}: InvestimentCardProps =
    item;

  return (
    <S.Container
      onPress={() => handleListAcess(item)}
      disabled={indicadorCarencia === 'S'}>
      <S.ContainerInfo>
        <S.ContainerSpaceBetween>
          <S.TitleText testID="name">{nome}</S.TitleText>
          <S.TitleText testID="total-balance">{saldoTotal}</S.TitleText>
        </S.ContainerSpaceBetween>
        <S.SubTitleText testID="objective">{objetivo}</S.SubTitleText>
      </S.ContainerInfo>
    </S.Container>
  );
}
