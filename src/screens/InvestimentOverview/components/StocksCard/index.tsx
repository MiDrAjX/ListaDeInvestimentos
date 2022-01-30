import React, {useState} from 'react';

import {Keyboard} from 'react-native';

import * as S from './styles';

function StocksCard({stock, saldo, handleValueStock, valueStock}) {
  const [money, setMoney] = useState('');
  const value = Number(saldo.replace(/\./, '').replace(/,/, '.'));

  function formattedMoney(e: string) {
    const onlyNumbers = e.replace(/\D/g, '');
    const formattedmoney = (Number(onlyNumbers) / 100).toLocaleString('pt-br', {
      minimumFractionDigits: 2,
    });
    setMoney(String(formattedmoney));
    handleValueStock(stock.nome, onlyNumbers, saldo);
  }
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
        <S.Input
          placeholder="R$ 0,00"
          keyboardType="numeric"
          onChangeText={e => formattedMoney(e)}
          value={money}
          onBlur={Keyboard.dismiss}
        />
        {Number(value) < Number(valueStock[stock.nome]) && (
          <S.WarningWrapper>
            <S.WarningText>
              Valor não pode ser maior que R$ {saldo}
            </S.WarningText>
            <S.RedLine />
          </S.WarningWrapper>
        )}
      </S.InputWrapper>

      {!(Number(value) < Number(valueStock[stock.nome])) && <S.BlankView />}
    </S.Wrapper>
  );
}
export default StocksCard;
