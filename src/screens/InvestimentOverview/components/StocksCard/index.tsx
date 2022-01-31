import React from 'react';

import {Keyboard} from 'react-native';

import * as S from './styles';

function StocksCard({stock, saldo, valueStock, formatMoney, showMoney}) {
  const value = Number(saldo.replace(/\./, '').replace(/,/, '.'));

  return (
    <S.Wrapper>
      <S.StockWrapper>
        <S.TitleText>Ação</S.TitleText>
        <S.SubTitleText testID="stock-name">{stock.nome}</S.SubTitleText>
      </S.StockWrapper>
      <S.StockWrapper>
        <S.TitleText>Saldo acumulado</S.TitleText>
        <S.SubTitleText>R$ {saldo}</S.SubTitleText>
      </S.StockWrapper>
      <S.InputWrapper>
        <S.InputText>Valor a resgatar</S.InputText>
        <S.Input
          testID="input-money"
          placeholder="R$ 0,00"
          keyboardType="numeric"
          onChangeText={e => formatMoney(e, stock.nome, saldo)}
          value={showMoney}
          onBlur={Keyboard.dismiss}
        />
        {value < Number(valueStock) && (
          <S.WarningWrapper>
            <S.WarningText testID="text-error">
              Valor não pode ser maior que R$ {saldo}
            </S.WarningText>
            <S.RedLine />
          </S.WarningWrapper>
        )}
      </S.InputWrapper>

      {!(value < Number(valueStock)) && <S.BlankView />}
    </S.Wrapper>
  );
}
export default StocksCard;
