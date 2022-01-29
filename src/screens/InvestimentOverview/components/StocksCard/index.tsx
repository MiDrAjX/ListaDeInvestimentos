import React from 'react';

import * as S from './styles';

function StocksCard({stock, saldo}) {
  return (
    <S.Wrapper>
      <S.StockWrapper>
        <S.TitleText>Ação</S.TitleText>
        <S.SubTitleText>{stock.nome}</S.SubTitleText>
      </S.StockWrapper>
      <S.StockWrapper>
        <S.TitleText>Saldo acumulado</S.TitleText>
        <S.SubTitleText>R$ {saldo}</S.SubTitleText>
      </S.StockWrapper>
      <S.InputWrapper>
        <S.InputText>Valor a resgatar</S.InputText>
        <S.Input placeholder="R$ 0,00" />
      </S.InputWrapper>
      <S.BlankView />
    </S.Wrapper>
  );
}
export default StocksCard;
