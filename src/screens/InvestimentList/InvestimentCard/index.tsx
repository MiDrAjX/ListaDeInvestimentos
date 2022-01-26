import React from 'react';
import * as S from './styles';

export interface InvestimentCardProps {
  nome: string;
  objetivo: string;
  saldoTotal: string;
  indicadorCarencia: string;
  acoes: AcoesProps;
}
interface AcoesProps {
  id: string;
}

export function InvestimentCard({item}) {
  const {nome, objetivo, saldoTotal}: InvestimentCardProps = item;
  return (
    <S.Container>
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
